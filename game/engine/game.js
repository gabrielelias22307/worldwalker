/* WORLDWALKER engine · the game itself: map, walking, screens, people, Smudges, flow */
(function () {
  const TS = 16, SW = 16, SH = 11; // tile size, screen width/height in tiles
  const L = t => WW.L(t), T = k => WW.T(k), esc = s => WW.esc(s);
  const $ = id => document.getElementById(id);

  /* ---------------- sound (made in code, no files) ---------------- */
  let ac = null;
  WW.audioInit = () => { if (!ac) try { ac = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { } };
  const NOTES = {
    blip: [[660, .05]], good: [[523, .08], [784, .12]], bad: [[220, .12], [180, .14]], coin: [[988, .05], [1319, .1]],
    hurt: [[200, .08], [140, .15]], hit: [[392, .06], [523, .06], [784, .12]], win: [[523, .1], [659, .1], [784, .1], [1047, .25]], step: [[120, .02]]
  };
  WW.sfx = (name) => {
    if (!WW.save.sound || !ac) return;
    let t = ac.currentTime;
    (NOTES[name] || []).forEach(([f, d]) => {
      const o = ac.createOscillator(), g = ac.createGain();
      o.type = name === 'hurt' || name === 'bad' ? 'sawtooth' : 'square'; o.frequency.value = f;
      g.gain.setValueAtTime(.06, t); g.gain.exponentialRampToValueAtTime(.001, t + d);
      o.connect(g); g.connect(ac.destination); o.start(t); o.stop(t + d); t += d * .9;
    });
  };

  /* ---------------- the page around the game ---------------- */
  function buildDom(root) {
    root.innerHTML = `
      <div class="ww-frame">
        <div class="ww-bar" id="ww-bar">
          <a class="ww-logo" ${WW.CONFIG.MODE === 'pages' ? 'href="index.html"' : ''}>WORLDWALKER</a>
          <span class="langs"><button data-lang="en">EN</button><button data-lang="es">ES</button><button data-lang="fa">دری</button></span>
          <span class="tools"><button id="ww-b-pass"></button>${WW.CONFIG.MODE === 'pages' ? '<button id="ww-b-map"></button>' : ''}<button id="ww-b-snd"></button><button id="ww-b-pad" aria-label="arrow buttons">✥</button><button id="ww-b-full"></button></span>
        </div>
        <div class="hud" id="ww-hud"></div>
        <div class="quest" id="ww-quest"></div>
        <div class="screen" id="ww-screen" tabindex="0">
          <canvas id="ww-cv" aria-label="game map"></canvas>
          <div id="ww-toast" class="toast" role="status"></div>
          <div id="ww-ov" class="ov hidden" role="dialog" aria-modal="true"></div>
        </div>
        <div class="dpad" id="ww-dpad" aria-label="arrows">
          <button data-d="up" aria-label="up">▲</button><button data-d="left" aria-label="left">◀</button>
          <button data-d="act" class="act" aria-label="use">●</button>
          <button data-d="right" aria-label="right">▶</button><button data-d="down" aria-label="down">▼</button>
        </div>
        <div class="ww-foot" id="ww-foot"></div>
      </div>`;
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) root.classList.add('touch');
    root.querySelectorAll('[data-lang]').forEach(b => (b.onclick = () => WW.setLang(b.dataset.lang)));
    $('ww-b-pass').onclick = () => { if (!WW.ui.stack.length || WW.ui.top().opts.cls !== 'passov') WW.ui.passport(); };
    if ($('ww-b-map')) $('ww-b-map').onclick = () => (location.href = 'index.html');
    $('ww-b-pad').onclick = () => root.classList.toggle('touch');
    $('ww-b-snd').onclick = () => { WW.save.sound = !WW.save.sound; WW.store(); WW.audioInit(); WW.ui.hud(); };
    $('ww-b-full').onclick = () => {
      const el = root.querySelector('.ww-frame');
      if (document.fullscreenElement) document.exitFullscreen(); else if (el.requestFullscreen) el.requestFullscreen().catch(() => window.open(location.href, '_blank'));
      else window.open(location.href, '_blank');
    };
  }

  /* ---------------- run state ---------------- */
  const G = WW.game = {};
  let map, W, H, ents, player, pip, trans = null, held = null, heldSince = 0, lastStep = 0, inv = 0, shakeT = 0;

  WW.gain = (stat, n, coins) => {
    WW.save.stats[stat] = (WW.save.stats[stat] || 0) + n;
    WW.save.coins = (WW.save.coins || 0) + (coins || 0);
    WW.store(); WW.ui.hud();
    const th = WW.THEMES.find(t => t.k === stat);
    if (th) WW.toast(`+${n} ${th.icon} ${esc(L(th.name))}${coins ? ` · +${coins} ●` : ''}`, th.col);
  };
  WW.hurt = (inBoss) => {
    const r = WW.run;
    r.hearts--; r.heartsLost++; shakeT = performance.now();
    if (r.hearts <= 0) {
      r.hearts = WW.heartsMax();
      if (!inBoss) { player.x = WW.ep.start[0]; player.y = WW.ep.start[1]; pip.x = player.x; pip.y = player.y; }
      WW.toast(T('rescued'), '#2f7fd1');
    } else if (!inBoss) WW.toast(T('ouch'), '#b0392b');
    WW.ui.hud();
  };

  function screenOf(x, y) { return [Math.floor(x / SW), Math.floor(y / SH)]; }
  function tileAt(x, y) { return (map[y] || '')[x]; }
  function entAt(x, y) { return ents.find(e => e.x === x && e.y === y && !e.gone && e.visible !== false); }
  function walkable(x, y) {
    if (x < 0 || y < 0 || x >= W || y >= H) return false;
    if (WW.solid(tileAt(x, y))) return false;
    const e = entAt(x, y);
    return !e || e.kind === 'scrap' || e.kind === 'smudge';
  }

  /* ---------------- start an episode ---------------- */
  WW.start = (ep, rootSel) => {
    WW.ep = ep;
    // teacher console: ep-X-Y.html?teacher=start|stone|boss|finish opens a preview that saves nothing
    const jump = (new URLSearchParams(location.search).get('teacher') || '').toLowerCase();
    G.preview = WW.save.teacher && ['start', 'stone', 'boss', 'finish'].includes(jump) ? jump : '';
    if (G.preview) { WW.store = () => true; WW.sheetOn = () => false; }
    ep.npcs = ep.npcs || []; ep.scraps = ep.scraps || []; ep.smudges = ep.smudges || []; ep.signs = ep.signs || [];
    ep.realm = ep.realm || +ep.id[0];
    map = ep.map; H = map.length; W = map[0].length;
    const root = typeof rootSel === 'string' ? document.querySelector(rootSel) : (rootSel || document.getElementById('ww'));
    buildDom(root);
    document.title = `Worldwalker ${ep.id} · ${WW.plain({ en: (ep.title.en || ep.title) })}`;
    WW.run = {
      hearts: WW.heartsMax(), heartsLost: 0, talked: new Set(), asked: new Set(), tries: {}, scraps: new Set(),
      challengeDone: false, challengeTries: 0, bossDone: false, bossMisses: 0, missed: [], log: [], t0: Date.now(), reflection: '', stars: 0
    };
    ents = [];
    ep.npcs.forEach((n, i) => { n.id = n.id || 'npc' + i; ents.push({ kind: 'npc', x: n.x, y: n.y, ref: n, phase: i }); });
    ep.scraps.forEach((s, i) => ents.push({ kind: 'scrap', x: s[0], y: s[1], id: i }));
    ep.smudges.forEach((s, i) => ents.push({ kind: 'smudge', x: s[0], y: s[1], home: screenOf(s[0], s[1]), next: 0, phase: i }));
    ep.signs.forEach(s => ents.push({ kind: 'sign', x: s.x, y: s.y, ref: s }));
    ents.push({ kind: 'stone', x: ep.challenge.at[0], y: ep.challenge.at[1] });
    ents.push({ kind: 'boss', x: ep.boss.at[0], y: ep.boss.at[1], visible: false });
    player = { x: ep.start[0], y: ep.start[1], fx: ep.start[0], fy: ep.start[1], dir: 'down', moving: 0, from: null };
    pip = { x: player.x, y: player.y, fx: player.x, fy: player.y };
    const cv = $('ww-cv'); cv.width = SW * TS; cv.height = SH * TS;
    G.ctx = cv.getContext('2d'); G.ctx.imageSmoothingEnabled = false;
    WW.ui.hud(); WW.ui.quest();
    WW.setLang(WW.lang);
    bindInput();
    requestAnimationFrame(frame);
    if (G.preview) return previewJump(G.preview);
    WW.ui.start(() => WW.ui.intro(() => { $('ww-screen').focus(); }));
  };

  function previewJump(where) {
    const ep = WW.ep, r = WW.run;
    const tag = document.createElement('a'); tag.className = 'ww-preview'; tag.textContent = 'TEACHER PREVIEW · nothing is saved';
    if (WW.CONFIG.MODE === 'pages') { tag.href = 'teacher.html#ep=' + ep.id; tag.textContent += ' · ↩ console'; }
    $('ww-bar').insertBefore(tag, $('ww-bar').querySelector('.langs'));
    if (where === 'start') return WW.ui.intro(() => { $('ww-screen').focus(); });
    ep.npcs.forEach(n => r.talked.add(n.id));
    if (where === 'stone') { WW.ui.quest(); WW.dbg.bumpInto(ep.challenge.at[0], ep.challenge.at[1]); return; }
    r.challengeDone = true; G.onChallengeDone();
    if (where === 'boss') { WW.dbg.bumpInto(ep.boss.at[0], ep.boss.at[1]); return; }
    ents.forEach(e => { if (e.kind === 'scrap') { e.gone = true; r.scraps.add(e.id); } if (e.kind === 'boss') e.gone = true; });
    finishEpisode();
  }

  G.onChallengeDone = () => {
    const b = ents.find(e => e.kind === 'boss'); b.visible = true;
    WW.ui.quest();
    setTimeout(() => WW.toast('Pip: ' + WW.plain(WW.ep.boss.appear || { en: 'The Smudge is out! Find it.', es: '¡Salió el Borrón! Búscalo.', fa: 'لکه بیرون آمد! پیدایش کن.' }), '#4b3f63'), 600);
  };

  function finishEpisode() {
    const r = WW.run, ep = WW.ep, s = WW.save;
    r.bossDone = true;
    const stars = 1 + (r.scraps.size >= ep.scraps.length ? 1 : 0) + (r.bossMisses <= 1 ? 1 : 0);
    r.stars = stars;
    const had = s.episodes[ep.id];
    const toolBefore = WW.TOOLS.find(t => t.ep === ep.id && !WW.hasTool(t.id));
    s.episodes[ep.id] = { done: true, stars: Math.max(stars, (had && had.stars) || 0), at: new Date().toISOString().slice(0, 10) };
    if (toolBefore) r.newTool = toolBefore;
    WW.gain(ep.boss.stat || 'reg', 2, 15);
    WW.store();
    WW.ui.quest();
    WW.ui.finish();
  }

  /* ---------------- interacting ---------------- */
  function interact(e) {
    if (!e || WW.paused) return;
    const ep = WW.ep, r = WW.run;
    if (e.kind === 'npc') {
      WW.ui.talk(e.ref, () => { r.talked.add(e.ref.id); WW.ui.quest(); });
    } else if (e.kind === 'sign') {
      WW.ui.message('🪧', e.ref.text);
    } else if (e.kind === 'stone') {
      const need = ep.challenge.needTalk ?? ep.npcs.length;
      if (r.talked.size < need && !r.challengeDone) WW.ui.message('', T('talkFirst'));
      else WW.challenge(ep.challenge);
    } else if (e.kind === 'boss') {
      WW.bossTrial(ep.boss, () => { e.gone = true; finishEpisode(); });
    }
  }
  function pickup() {
    const e = ents.find(e => e.kind === 'scrap' && !e.gone && e.x === player.x && e.y === player.y);
    if (e) {
      e.gone = true; WW.run.scraps.add(e.id); WW.save.coins += 3; WW.store(); WW.sfx('coin');
      WW.toast(`📄 ${esc(T('scraps'))} ${WW.run.scraps.size}/${WW.ep.scraps.length} · +3 ●`, '#c08a1e');
      WW.ui.hud(); WW.ui.quest();
    }
    const sm = ents.find(e => e.kind === 'smudge' && e.x === player.x && e.y === player.y);
    if (sm) touchSmudge(sm);
  }
  function touchSmudge(sm) {
    if (performance.now() < inv) return;
    inv = performance.now() + 1200; WW.sfx('hurt'); WW.hurt(false);
    // push the smudge away one tile
    const opts = [[1, 0], [-1, 0], [0, 1], [0, -1]].map(([dx, dy]) => [sm.x + dx * 2, sm.y + dy * 2]).filter(([x, y]) => walkable(x, y) && screenOf(x, y)[0] === sm.home[0] && screenOf(x, y)[1] === sm.home[1]);
    if (opts.length) [sm.x, sm.y] = opts[0];
  }

  /* ---------------- moving ---------------- */
  const DIRS = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] };
  const STEP_MS = 150;
  function tryStep(d, now) {
    if (player.moving || trans || WW.paused) return;
    player.dir = d;
    const [dx, dy] = DIRS[d];
    const nx = player.x + dx, ny = player.y + dy;
    const e = entAt(nx, ny);
    if (e && e.kind !== 'scrap' && e.kind !== 'smudge') { interact(e); held = null; return; }
    if (!walkable(nx, ny)) return;
    const [sx, sy] = screenOf(player.x, player.y), [tx, ty] = screenOf(nx, ny);
    pip.tx = player.x; pip.ty = player.y;
    player.from = [player.x, player.y]; player.x = nx; player.y = ny; player.moving = now;
    if (sx !== tx || sy !== ty) { trans = { from: [sx, sy], to: [tx, ty], t0: now, d: [dx, dy] }; }
  }
  function actFacing() {
    const [dx, dy] = DIRS[player.dir];
    const e = entAt(player.x + dx, player.y + dy);
    if (e) interact(e);
  }

  function bindInput() {
    const keys = { ArrowUp: 'up', ArrowDown: 'down', ArrowLeft: 'left', ArrowRight: 'right', w: 'up', s: 'down', a: 'left', d: 'right', W: 'up', S: 'down', A: 'left', D: 'right' };
    window.addEventListener('keydown', e => {
      const tag = (e.target.tagName || '').toLowerCase();
      if (tag === 'input' || tag === 'textarea') return;
      if (e.key === 'Escape') { const t = WW.ui.top(); if (t && (t.opts.cls === 'passov' || t.opts.cls === 'msgov')) t.close(); return; }
      if (WW.paused) return;
      if (keys[e.key]) { e.preventDefault(); held = keys[e.key]; heldSince = performance.now(); }
      else if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); actFacing(); }
      else if (e.key === 'p' || e.key === 'P') WW.ui.passport();
    });
    window.addEventListener('keyup', e => { if (keys[e.key] === held) held = null; });
    window.addEventListener('blur', () => (held = null));
    const pad = $('ww-dpad');
    pad.querySelectorAll('button').forEach(b => {
      const d = b.dataset.d;
      const down = e => { e.preventDefault(); WW.audioInit(); if (d === 'act') actFacing(); else { held = d; heldSince = performance.now(); } };
      const up = e => { e.preventDefault(); if (held === d) held = null; };
      b.addEventListener('pointerdown', down); b.addEventListener('pointerup', up); b.addEventListener('pointerleave', up); b.addEventListener('pointercancel', up);
    });
    // click on the map next to the hero = step that way (mouse users)
    $('ww-cv').addEventListener('click', e => {
      WW.audioInit(); $('ww-screen').focus();
      if (WW.paused || trans) return;
      const r = e.target.getBoundingClientRect();
      const [sx, sy] = screenOf(player.x, player.y);
      const tx = sx * SW + Math.floor((e.clientX - r.left) / r.width * SW), ty = sy * SH + Math.floor((e.clientY - r.top) / r.height * SH);
      const dx = tx - player.x, dy = ty - player.y;
      if (!dx && !dy) return;
      const d = Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? 'right' : 'left') : (dy > 0 ? 'down' : 'up');
      const e2 = entAt(tx, ty);
      if (e2 && Math.abs(dx) + Math.abs(dy) === 1) { player.dir = d; interact(e2); return; }
      clickTarget = [tx, ty];
    });
  }
  let clickTarget = null;

  /* ---------------- smudges wander ---------------- */
  function moveSmudges(now) {
    if (WW.paused || trans || G.noSmudges) return;
    const [psx, psy] = screenOf(player.x, player.y);
    ents.forEach(e => {
      if (e.kind !== 'smudge' || e.home[0] !== psx || e.home[1] !== psy) return;
      if (now < e.next) return;
      e.next = now + 650 + (e.phase % 3) * 120;
      const dirs = Object.values(DIRS);
      // drift a little toward the player, mostly random
      const toward = [[Math.sign(player.x - e.x), 0], [0, Math.sign(player.y - e.y)]].filter(([a, b]) => a || b);
      const pick = Math.random() < .35 && toward.length ? toward[(Math.random() * toward.length) | 0] : dirs[(Math.random() * 4) | 0];
      const nx = e.x + pick[0], ny = e.y + pick[1];
      const [hx, hy] = screenOf(nx, ny);
      if (hx !== e.home[0] || hy !== e.home[1]) return;
      if (WW.solid(tileAt(nx, ny))) return;
      const o = entAt(nx, ny); if (o && o !== e) return;
      e.x = nx; e.y = ny;
      if (e.x === player.x && e.y === player.y) touchSmudge(e);
    });
  }

  /* ---------------- drawing ---------------- */
  function drawScreen(c, sx, sy, ox, oy, t) {
    c.save(); c.translate(ox, oy);
    // tiles get their global position so edges and ground match the real map around them
    for (let y = 0; y < SH; y++) for (let x = 0; x < SW; x++) {
      const gx = sx * SW + x, gy = sy * SH + y, ch = tileAt(gx, gy);
      (WW.tiles[ch] || WW.tiles['.'])(c, x * TS, y * TS, gx, gy, t, map);
    }
    const inScreen = e => { const [ex, ey] = screenOf(e.x, e.y); return ex === sx && ey === sy; };
    const px = e => (e.x - sx * SW) * TS, py = e => (e.y - sy * SH) * TS;
    ents.forEach(e => {
      if (e.gone || e.visible === false || !inScreen(e)) return;
      if (e.kind === 'scrap') WW.sprite(c, 'page', px(e) + 1, py(e) + 2, { bob: true, t, phase: e.id });
      if (e.kind === 'stone') {
        const glow = WW.run.challengeDone ? 0 : (Math.sin(t / 300) + 1) / 2;
        if (glow) { c.fillStyle = `rgba(242,193,78,${.15 + glow * .25})`; c.fillRect(px(e) - 2, py(e) - 2, 20, 20); }
        WW.sprite(c, 'stone', px(e), py(e), { pal: { W: '#9aa3ad', G: '#5e636b', y: WW.run.challengeDone ? '#3fa34d' : '#f2c14e', r: '#e04848', n: '#2f6fd6' } });
      }
    });
    ents.forEach(e => {
      if (e.gone || e.visible === false || !inScreen(e)) return;
      if (e.kind === 'npc') {
        WW.sprite(c, 'npc', px(e), py(e) - 2, { pal: WW.lookPal(e.ref.look), bob: false });
        if (!WW.run.talked.has(e.ref.id)) { // speech bubble
          const b = Math.round(Math.sin(t / 250 + e.phase) * 1.5);
          c.fillStyle = '#fffbe8'; c.fillRect(px(e) + 10, py(e) - 9 + b, 7, 6); c.fillStyle = '#22202e'; c.fillRect(px(e) + 12, py(e) - 7 + b, 1, 1); c.fillRect(px(e) + 14, py(e) - 7 + b, 1, 1);
        }
      }
      if (e.kind === 'smudge') WW.sprite(c, 'smudge', px(e), py(e), { bob: true, t, phase: e.phase });
      if (e.kind === 'boss') {
        const a = (Math.sin(t / 200) + 1) / 2;
        c.fillStyle = `rgba(109,95,140,${.25 + a * .3})`; c.beginPath(); c.arc(px(e) + 8, py(e) + 8, 12 + a * 3, 0, 7); c.fill();
        WW.sprite(c, 'smudge', px(e) - 8, py(e) - 16, { bob: true, t, scale: 2 });
      }
    });
    c.restore();
  }

  function frame(now) {
    requestAnimationFrame(frame);
    const c = G.ctx; if (!c || !WW.run) return;
    // movement timing
    if (player.moving && now - player.moving >= STEP_MS) { player.moving = 0; player.from = null; pickup(); }
    if (!player.moving && !trans && !WW.paused) {
      if (held) tryStep(held, now);
      else if (clickTarget) {
        const dx = clickTarget[0] - player.x, dy = clickTarget[1] - player.y;
        if (!dx && !dy) clickTarget = null;
        else {
          const d = Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? 'right' : 'left') : (dy > 0 ? 'down' : 'up');
          const bx = player.x, by = player.y; tryStep(d, now);
          if (player.x === bx && player.y === by) {
            const d2 = Math.abs(dx) > Math.abs(dy) ? (dy ? (dy > 0 ? 'down' : 'up') : null) : (dx ? (dx > 0 ? 'right' : 'left') : null);
            if (d2) tryStep(d2, now);
            if (player.x === bx && player.y === by) clickTarget = null;
          }
        }
      }
    }
    moveSmudges(now);
    // pip trails one tile behind
    if (pip.tx != null && !player.moving) { pip.x = pip.tx; pip.y = pip.ty; pip.tx = null; }
    // where to draw the hero inside the screen
    const k = player.moving ? Math.min(1, (now - player.moving) / STEP_MS) : 1;
    const fx = player.from ? player.from[0] + (player.x - player.from[0]) * k : player.x;
    const fy = player.from ? player.from[1] + (player.y - player.from[1]) * k : player.y;
    let [sx, sy] = screenOf(player.x, player.y);
    c.save();
    if (now - shakeT < 250) c.translate(Math.round(Math.sin(now / 20) * 2), 0);
    if (trans) {
      const p = Math.min(1, (now - trans.t0) / 380);
      const [dx, dy] = trans.d;
      const offX = -dx * p * SW * TS, offY = -dy * p * SH * TS;
      drawScreen(c, trans.from[0], trans.from[1], offX, offY, now);
      drawScreen(c, trans.to[0], trans.to[1], offX + dx * SW * TS, offY + dy * SH * TS, now);
      const hx = (fx - trans.from[0] * SW) * TS + offX, hy = (fy - trans.from[1] * SH) * TS + offY;
      drawHero(c, hx, hy, now);
      if (p >= 1) trans = null;
    } else {
      drawScreen(c, sx, sy, 0, 0, now);
      // pip
      const [psx, psy] = screenOf(pip.x, pip.y);
      if (psx === sx && psy === sy) WW.sprite(c, 'pip', (pip.x - sx * SW) * TS + 2, (pip.y - sy * SH) * TS - 4, { bob: true, t: now, phase: 1 });
      drawHero(c, (fx - sx * SW) * TS, (fy - sy * SH) * TS, now);
    }
    c.restore();
  }
  function drawHero(c, x, y, now) {
    if (performance.now() < inv && Math.floor(now / 90) % 2) return; // blink after a hit
    const walk = player.moving && Math.floor(now / 75) % 2;
    const d = player.dir;
    const name = d === 'up' ? (walk ? 'heroUpWalk' : 'heroUp') : d === 'down' ? (walk ? 'heroWalk' : 'hero') : (walk ? 'heroSideWalk' : 'heroSide');
    WW.sprite(c, name, Math.round(x), Math.round(y) - 3, { pal: WW.heroPal(), flip: d === 'left' });
  }

  /* ---------------- hooks for the automatic play-tests ---------------- */
  WW.dbg = {
    teleport(x, y) { player.x = x; player.y = y; player.from = null; player.moving = 0; trans = null; pip.x = x; pip.y = y; },
    face(d) { player.dir = d; },
    act() { actFacing(); },
    bumpInto(x, y) { // stand next to (x,y) on a walkable tile and interact
      for (const [d, [dx, dy]] of Object.entries(DIRS)) {
        const sx = x - dx, sy = y - dy;
        if (walkable(sx, sy)) { this.teleport(sx, sy); player.dir = d; actFacing(); return true; }
      }
      return false;
    },
    collect(i) { const e = ents.find(e => e.kind === 'scrap' && e.id === i); this.teleport(e.x, e.y); pickup(); },
    get ents() { return ents; }, get player() { return player; },
    noSmudges() { G.noSmudges = true; }
  };
})();
