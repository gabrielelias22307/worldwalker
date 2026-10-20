/* WORLDWALKER engine · the game itself: map, walking, screens, people, Grumplings, flow */
(function () {
  const TS = 16, SW = 16, SH = 11; // tile size, screen width/height in tiles
  const L = t => WW.L(t), T = k => WW.T(k), esc = s => WW.esc(s);
  const $ = id => document.getElementById(id);

  /* ---------------- sound (made in code, no files) ---------------- */
  let ac = null;
  WW.audioInit = () => {
    if (!ac) try { ac = WW.ac = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { }
    if (ac && ac.state === 'suspended') ac.resume();
    if (WW.music) WW.music.wake();
  };
  const NOTES = {
    blip: [[660, .05]], good: [[523, .08], [784, .12]], bad: [[220, .12], [180, .14]], coin: [[988, .05], [1319, .1]],
    hurt: [[200, .08], [140, .15]], hit: [[392, .06], [523, .06], [784, .12]], growl: [[120, .12], [95, .14], [70, .22]], zap: [[1200, .03], [1600, .04]], pop: [[300, .05], [600, .08]], chop: [[180, .04], [140, .06]], cut: [[1400, .02], [1100, .03]], win: [[523, .1], [659, .1], [784, .1], [1047, .25]], power: [[523, .08], [659, .08], [784, .08], [1047, .08], [1319, .3]], gate: [[392, .1], [523, .1], [659, .22]], step: [[120, .02]]
  };
  WW.sfx = (name) => {
    if (!WW.save.sound || !ac) return;
    let t = ac.currentTime;
    (NOTES[name] || []).forEach(([f, d]) => {
      const o = ac.createOscillator(), g = ac.createGain();
      o.type = name === 'hurt' || name === 'bad' || name === 'growl' ? 'sawtooth' : 'square'; o.frequency.value = f;
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
          <span class="tools"><button id="ww-b-chris" aria-label="Christopher (C)">🧭</button><button id="ww-b-pass"></button>${WW.CONFIG.MODE === 'pages' ? '<button id="ww-b-map"></button>' : ''}<button id="ww-b-mus"></button><button id="ww-b-snd"></button><button id="ww-b-pad" aria-label="arrow buttons">✥</button><button id="ww-b-full"></button></span>
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
    $('ww-b-chris').onclick = () => { WW.audioInit(); WW.chris.talk(); $('ww-screen').focus(); };
    $('ww-b-pass').onclick = () => { if (!WW.ui.stack.length || WW.ui.top().opts.cls !== 'passov') WW.ui.passport(); };
    if ($('ww-b-map')) $('ww-b-map').onclick = () => (location.href = 'index.html');
    $('ww-b-pad').onclick = () => root.classList.toggle('touch');
    $('ww-b-snd').onclick = () => { WW.save.sound = !WW.save.sound; WW.store(); WW.audioInit(); WW.ui.hud(); };
    $('ww-b-mus').onclick = () => { WW.audioInit(); WW.music.toggle(); WW.ui.hud(); };
    $('ww-b-full').onclick = () => {
      const el = root.querySelector('.ww-frame');
      if (document.fullscreenElement) document.exitFullscreen(); else if (el.requestFullscreen) el.requestFullscreen().catch(() => window.open(location.href, '_blank'));
      else window.open(location.href, '_blank');
    };
  }

  /* ---------------- run state ---------------- */
  const G = WW.game = {};
  let stars = [], lastShot = 0, zapped = 0, toldShield = false, lastFrame = 0, map, W, H, ents, player, pip, trans = null, held = null, heldSince = 0, lastStep = 0, inv = 0, shakeT = 0;

  // add to a power and/or coins, say why, and announce a new power level when one unlocks
  WW.gain = (stat, n, coins, why, quiet) => {
    const before = stat ? WW.tier(stat) : 0;
    if (stat) WW.save.stats[stat] = (WW.save.stats[stat] || 0) + n;
    WW.save.coins = (WW.save.coins || 0) + (coins || 0);
    if (WW.run) WW.run.gains.push({ stat, n: stat ? n : 0, coins: coins || 0, why: why || '' });
    WW.store(); WW.ui.hud();
    const th = WW.THEMES.find(t => t.k === stat);
    if (th && !quiet) WW.toast(`+${n} ${th.icon} ${esc(L(th.full))}${coins ? ` · +${coins} ●` : ''}${why ? `<small>${esc(why)}</small>` : ''}`, th.col);
    if (th && WW.tier(stat) > before) {
      WW.toast(`⭐ ${esc(T('newPower'))} ${th.icon} ${esc(L(WW.PERKS[stat][WW.tier(stat) - 1]))}`, th.col, true);
      if (stat === 'pla' && WW.run) WW.run.hearts++;
      WW.ui.hud();
    }
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
  // for christopher.js and tools.js: the map and the things on it
  G.tileAt = (x, y) => tileAt(x, y);
  G.setTile = (x, y, ch) => { map[y] = map[y].slice(0, x) + ch + map[y].slice(x + 1); };
  G.entAt = (x, y) => entAt(x, y);
  G.walkable = (x, y) => walkable(x, y);
  G.screenOf = screenOf;
  G.shake = () => { if (!WW.calm) shakeT = performance.now(); };
  G.interact = e => interact(e);
  Object.defineProperties(G, { player: { get: () => player }, pip: { get: () => pip }, ents: { get: () => ents }, size: { get: () => [W, H] } });
  function tileAt(x, y) { return (map[y] || '')[x]; }
  function entAt(x, y) { return ents.find(e => e.x === x && e.y === y && !e.gone && e.visible !== false); }
  function walkable(x, y) {
    if (x < 0 || y < 0 || x >= W || y >= H) return false;
    if (WW.solid(tileAt(x, y)) && !WW.world.pass(tileAt(x, y))) return false; // earned tools: canoe, sail, tool gates
    if (WW.world.fogAt(x, y)) return false; // the Grump's fog
    const e = entAt(x, y);
    return !e || PASS.includes(e.kind);
  }
  const PASS = ['scrap', 'smudge', 'qspot', 'atlas', 'crop', 'post']; // things you can walk over (a placed sign never walls you in)

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
    WW.fx.setup(ep);
    const root = typeof rootSel === 'string' ? document.querySelector(rootSel) : (rootSel || document.getElementById('ww'));
    buildDom(root);
    document.title = `Worldwalker ${ep.id} · ${WW.plain({ en: (ep.title.en || ep.title) })}`;
    WW.run = {
      hearts: WW.heartsMax(), heartsLost: 0, gains: [], hints: 0, claimed: false, talked: new Set(), asked: new Set(), tries: {}, scraps: new Set(),
      quest: 0, questMissed: [], challengeDone: false, challengeTries: 0, bossDone: false, bossMisses: 0, missed: [], log: [], t0: Date.now(), reflection: '', stars: 0
    };
    // people who remember you (FUN-PASS section 5): remember: { ep: '1.1', t: {..} } adds a first line if you finished that episode
    [...ep.npcs, ...(ep.quest ? [ep.quest.giver, ep.quest.contact] : [])].forEach(n => {
      if (n && n.remember && !n._remembered && WW.save.episodes[n.remember.ep] && WW.save.episodes[n.remember.ep].done) { n._remembered = true; n.lines = [n.remember.t, ...(n.lines || [])]; }
    });
    ents = [];
    ep.npcs.forEach((n, i) => { n.id = n.id || 'npc' + i; ents.push({ kind: 'npc', x: n.x, y: n.y, ref: n, phase: i }); });
    ep.scraps.forEach((s, i) => ents.push({ kind: 'scrap', x: s[0], y: s[1], id: i }));
    ep.smudges.forEach((s, i) => { const type = WW.foeType(ep, i); ents.push({ kind: 'smudge', type, hp: WW.FOES[type].hp, x: s[0], y: s[1], hx: s[0], hy: s[1], home: screenOf(s[0], s[1]), next: 0, phase: i, dir: [1, 0] }); });
    stars = []; zapped = 0; toldShield = false;
    ep.signs.forEach(s => ents.push({ kind: 'sign', x: s.x, y: s.y, ref: s }));
    WW.quest.ents(ep).forEach(e => ents.push(e));
    WW.world.ents(ep).forEach(e => ents.push(e)); WW.world.setup(ep);
    ents.push({ kind: 'stone', x: ep.challenge.at[0], y: ep.challenge.at[1] });
    ents.push({ kind: 'boss', x: ep.boss.at[0], y: ep.boss.at[1], visible: false });
    player = { x: ep.start[0], y: ep.start[1], fx: ep.start[0], fy: ep.start[1], dir: 'down', moving: 0, from: null };
    pip = { x: player.x, y: player.y, fx: player.x, fy: player.y };
    const cv = $('ww-cv'); cv.width = SW * TS; cv.height = SH * TS;
    G.ctx = cv.getContext('2d'); G.ctx.imageSmoothingEnabled = false;
    G.wayUntil = 0; WW.chris.hide(); WW.tools.setup(ep);
    WW.ui.hud(); WW.ui.quest();
    WW.setLang(WW.lang);
    bindInput();
    requestAnimationFrame(frame);
    if (G.preview) return previewJump(G.preview);
    WW.music.play('realm' + ep.realm);
    WW.ui.start(() => WW.ui.intro(() => { WW.audioInit(); $('ww-screen').focus(); meetChris(); }));
  };
  // the first time a hero plays an episode with christopher.meet, he flies in and says who he is
  function meetChris() {
    const m = WW.ep.christopher && WW.ep.christopher.meet;
    if (m && !WW.save.metChris) WW.chris.meet(m);
  }

  function previewJump(where) {
    const ep = WW.ep, r = WW.run;
    const tag = document.createElement('a'); tag.className = 'ww-preview'; tag.textContent = 'TEACHER PREVIEW · nothing is saved';
    if (WW.CONFIG.MODE === 'pages') { tag.href = 'teacher.html#ep=' + ep.id; tag.textContent += ' · ↩ console'; }
    $('ww-bar').insertBefore(tag, $('ww-bar').querySelector('.langs'));
    if (where === 'start') return WW.ui.intro(() => { WW.audioInit(); $('ww-screen').focus(); const m = ep.christopher && ep.christopher.meet; if (m) WW.chris.meet(m); });
    ep.npcs.forEach(n => r.talked.add(n.id));
    r.quest = 4;
    if (where === 'stone') { WW.ui.quest(); WW.dbg.bumpInto(ep.challenge.at[0], ep.challenge.at[1]); return; }
    r.challengeDone = true; G.onChallengeDone();
    if (where === 'boss') { WW.dbg.bumpInto(ep.boss.at[0], ep.boss.at[1]); return; }
    ents.forEach(e => { if (e.kind === 'scrap') { e.gone = true; r.scraps.add(e.id); } if (e.kind === 'boss') e.gone = true; });
    finishEpisode();
  }

  G.onChallengeDone = () => {
    const b = ents.find(e => e.kind === 'boss'); b.visible = true;
    WW.world.fogSetup();
    WW.fx.burst(WW.ep.challenge.at[0], WW.ep.challenge.at[1], 'gold'); WW.fx.burst(b.x, b.y, 'poof');
    WW.ui.quest();
    setTimeout(() => WW.chris.say(WW.ep.boss.appear || { en: 'The Grump is out! Find it.', es: '¡Salió el Gruñón! Búscalo.', fa: 'غرغرو بیرون آمد! پیدایش کن.' }), 600);
  };

  // the Grump is beaten: its dimness lifts and the atlas page waits on a pedestal where it stood
  function bossBeaten() {
    const r = WW.run, ep = WW.ep;
    r.bossDone = true;
    WW.gain(ep.boss.stat || 'reg', 2, 15, T('why_boss'));
    WW.sheetSync();
    ents.push({ kind: 'atlas', x: ep.boss.at[0], y: ep.boss.at[1] });
    WW.fx.lift();
    WW.music.play('win', 'realm' + ep.realm);
    WW.ui.quest();
    setTimeout(() => WW.ui.message('', T('pageAppears')), 500);
  }
  function finishEpisode() {
    const r = WW.run, ep = WW.ep, s = WW.save;
    r.bossDone = true; r.claimed = true;
    const stars = 1 + (r.scraps.size >= ep.scraps.length ? 1 : 0) + (r.bossMisses <= 1 ? 1 : 0);
    r.stars = stars;
    const had = s.episodes[ep.id];
    const toolBefore = WW.TOOLS.find(t => t.ep === ep.id && !WW.hasTool(t.id));
    s.episodes[ep.id] = { done: true, stars: Math.max(stars, (had && had.stars) || 0), at: new Date().toISOString().slice(0, 10) };
    if (toolBefore) r.newTool = toolBefore;
    WW.store();
    WW.fx.lift(); WW.sfx('win');
    WW.ui.quest();
    WW.ui.finish();
  }

  /* ---------------- interacting ---------------- */
  function interact(e) {
    if (!e || WW.paused) return;
    const ep = WW.ep, r = WW.run;
    if (e.kind === 'qnpc' || e.kind === 'qfoe') return WW.quest.interact(e, ents);
    if (WW.world.KINDS.includes(e.kind)) return WW.world.interact(e);
    if (e.kind === 'npc') {
      WW.ui.talk(e.ref, () => { r.talked.add(e.ref.id); WW.ui.quest(); });
    } else if (e.kind === 'sign') {
      WW.ui.message('🪧', e.ref.text);
    } else if (e.kind === 'stone') {
      const need = ep.challenge.needTalk ?? ep.npcs.length;
      if (r.talked.size < need && !r.challengeDone) WW.ui.message('', T('talkFirst'));
      else if (!WW.quest.done() && !r.challengeDone) WW.ui.message('', T('questFirst'));
      else WW.challenge(ep.challenge);
    } else if (e.kind === 'boss') {
      WW.world.fogAsk(() => { e.gone = true; WW.fx.burst(e.x, e.y, 'poof'); WW.fx.burst(e.x, e.y, 'gold'); bossBeaten(); });
    }
  }
  function pickup() {
    WW.quest.onStep(player.x, player.y);
    if (WW.world.onStep(player.x, player.y)) return;
    const pg = ents.find(e => e.kind === 'atlas' && !e.gone && e.x === player.x && e.y === player.y);
    if (pg && !WW.run.claimed) { pg.gone = true; WW.run.claimed = true; WW.fx.burst(pg.x, pg.y, 'gold'); WW.ui.pageHome([pg.x, pg.y], finishEpisode); return; }
    const e = ents.find(e => e.kind === 'scrap' && !e.gone && e.x === player.x && e.y === player.y);
    if (e) {
      e.gone = true; WW.run.scraps.add(e.id); WW.gain(null, 0, 3, T('why_scrap'), true); WW.sfx('coin'); WW.fx.burst(e.x, e.y, 'gold');
      if (WW.tier('hei') >= 2 && WW.run.hearts < WW.heartsMax()) { WW.run.hearts++; WW.toast('♥ +1', '#e04848'); }
      WW.toast(`📄 ${esc(T('scraps'))} ${WW.run.scraps.size}/${WW.ep.scraps.length} · +3 ●`, '#c08a1e');
      WW.ui.hud(); WW.ui.quest();
    }
    const sm = ents.find(e => e.kind === 'smudge' && e.visible !== false && e.x === player.x && e.y === player.y);
    if (sm) touchSmudge(sm);
  }
  function touchSmudge(sm) {
    if (performance.now() < inv) return;
    inv = performance.now() + 1200; WW.sfx('hurt'); WW.hurt(false); WW.fx.burst(sm.x, sm.y, 'purple');
    // push the smudge away one tile
    const opts = [[1, 0], [-1, 0], [0, 1], [0, -1]].map(([dx, dy]) => [sm.x + dx * 2, sm.y + dy * 2]).filter(([x, y]) => walkable(x, y) && screenOf(x, y)[0] === sm.home[0] && screenOf(x, y)[1] === sm.home[1]);
    if (opts.length) [sm.x, sm.y] = opts[0];
  }

  /* ---------------- moving ---------------- */
  const DIRS = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] };
  const stepMs = () => 150 - 18 * WW.tier('mov'); // Movement power: quicker steps
  function tryStep(d, now) {
    if (player.moving || trans || WW.paused) return;
    player.dir = d;
    const [dx, dy] = DIRS[d];
    const nx = player.x + dx, ny = player.y + dy;
    const e = entAt(nx, ny);
    if (e && !PASS.includes(e.kind)) { interact(e); held = null; return; }
    if (!walkable(nx, ny)) { if (WW.tools.bump(nx, ny) || WW.world.bump(nx, ny)) held = null; return; }
    const [sx, sy] = screenOf(player.x, player.y), [tx, ty] = screenOf(nx, ny);
    pip.tx = player.x; pip.ty = player.y;
    player.from = [player.x, player.y]; player.x = nx; player.y = ny; player.moving = now;
    if (sx !== tx || sy !== ty) { trans = { from: [sx, sy], to: [tx, ty], t0: now, d: [dx, dy] }; }
  }
  function actFacing() {
    if (WW.paused) return;
    const [dx, dy] = DIRS[player.dir], tx = player.x + dx, ty = player.y + dy;
    const e = entAt(tx, ty);
    if (e && e.kind === 'post') return WW.tools.post(e);
    if (e && !PASS.includes(e.kind) && e.kind !== 'boss') return interact(e);
    if (WW.tools.on() && WW.tools.act(tx, ty, e)) return; // the axe, sickle, seeds or a signpost
    throwStar();
  }

  /* ---------------- throwing stars (Space): they knock out Grumplings and sting the Grump ---------------- */
  function throwStar() {
    const now = performance.now();
    if (WW.paused || trans || now - lastShot < 280) return;
    lastShot = now;
    const [dx, dy] = DIRS[player.dir];
    stars.push({ x: player.x * TS + 8, y: player.y * TS + 6, dx, dy, dist: 0, born: now });
    WW.sfx('zap');
  }
  function moveStars(dt) {
    const SPEED = 0.16, RANGE = 7 * TS;
    stars = stars.filter(s => {
      const step = SPEED * dt; s.x += s.dx * step; s.y += s.dy * step; s.dist += step;
      if (s.dist > RANGE) return false;
      const tx = Math.floor(s.x / TS), ty = Math.floor(s.y / TS);
      if (WW.solid(tileAt(tx, ty))) { WW.fx.burst(tx - s.dx * 0.4, ty - s.dy * 0.4, 'dust'); return false; }
      const hit = ents.find(e => (e.kind === 'smudge' || e.kind === 'boss') && !e.gone && e.visible !== false && !(e.stunUntil > performance.now()) &&
        Math.abs(e.x * TS + 8 - s.x) < 11 && Math.abs(e.y * TS + (e.kind === 'boss' ? 0 : 8) - s.y) < (e.kind === 'boss' ? 16 : 11));
      if (!hit) return true;
      if (hit.kind === 'smudge' && hit.hp > 1) { // a Mud Blob takes 2 stars: the first one squishes it and pushes it back
        hit.hp--; hit.hurtT = performance.now(); WW.sfx('pop'); WW.fx.burst(hit.x, hit.y, 'dust');
        const bx = hit.x + s.dx, by = hit.y + s.dy;
        if (!WW.solid(tileAt(bx, by)) && !entAt(bx, by) && screenOf(bx, by).join() === hit.home.join()) { hit.x = bx; hit.y = by; }
        hit.next = performance.now() + 900;
      } else if (hit.kind === 'smudge') { // knocked out for a while, then it floats back
        hit.stunUntil = performance.now() + 9000; hit.visible = false; hit.hp = (WW.FOES[hit.type] || WW.FOES.grump).hp;
        WW.fx.burst(hit.x, hit.y, 'poof'); WW.sfx('pop');
        if (zapped < 5) { zapped++; WW.gain(null, 0, 1, '', true); WW.toast('★ +1 ●', '#c08a1e'); }
      } else { // the Grump: it stings, but only right answers break its cloud shield
        hit.roarT = performance.now(); shakeT = performance.now(); WW.sfx('growl'); WW.fx.burst(hit.x, hit.y, 'gold');
        if (!toldShield) { toldShield = true; WW.chris.say(T('starShield')); }
      }
      return false;
    });
    ents.forEach(e => { if (e.kind === 'smudge' && e.stunUntil && performance.now() > e.stunUntil) { e.stunUntil = 0; e.visible = true; e.x = e.hx; e.y = e.hy; WW.fx.burst(e.x, e.y, 'purple'); } });
  }
  function drawStars(c, sx, sy, now) {
    stars.forEach(s => {
      const x = s.x - sx * SW * TS, y = s.y - sy * SH * TS, a = (now - s.born) / 60;
      c.fillStyle = 'rgba(255,240,150,.35)'; c.fillRect(Math.round(x - s.dx * 6) - 1, Math.round(y - s.dy * 6) - 1, 3, 3); // a little trail
      c.save(); c.translate(Math.round(x), Math.round(y)); c.rotate(a);
      c.fillStyle = '#22202e'; star(c, 5.5); c.fillStyle = '#f2c14e'; star(c, 4); c.fillStyle = '#fff6c8'; c.fillRect(-1, -1, 2, 2);
      c.restore();
    });
  }
  function star(c, r) {
    c.beginPath();
    for (let i = 0; i < 10; i++) { const rr = i % 2 ? r * 0.45 : r, ang = i * Math.PI / 5 - Math.PI / 2; c.lineTo(Math.cos(ang) * rr, Math.sin(ang) * rr); }
    c.closePath(); c.fill();
  }

  function bindInput() {
    const keys = { ArrowUp: 'up', ArrowDown: 'down', ArrowLeft: 'left', ArrowRight: 'right', w: 'up', s: 'down', a: 'left', d: 'right', W: 'up', S: 'down', A: 'left', D: 'right' };
    window.addEventListener('keydown', e => {
      const tag = (e.target.tagName || '').toLowerCase();
      if (tag === 'input' || tag === 'textarea') return;
      if (e.key === 'Escape') { const t = WW.ui.top(); if (t && ['passov', 'msgov', 'talkov', 'campov'].includes(t.opts.cls)) t.close(); else if (!t) WW.chris.hide(); return; }
      WW.audioInit();
      if ((e.key === 'c' || e.key === 'C') && !WW.ui.stack.length) { e.preventDefault(); WW.chris.talk(); return; }
      if (WW.chris.scene && (e.key === ' ' || e.key === 'Enter')) { e.preventDefault(); WW.chris.next(); return; }
      if (WW.paused) return;
      if (/^[1-5]$/.test(e.key)) { WW.tools.pick(['star', 'axe', 'sickle', 'seed', 'sign'][+e.key - 1]); return; }
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
      if (e2 && !PASS.includes(e2.kind) && Math.abs(dx) + Math.abs(dy) === 1) { player.dir = d; interact(e2); return; }
      clickTarget = [tx, ty];
    });
  }
  let clickTarget = null;

  /* ---------------- smudges wander ---------------- */
  function moveSmudges(now) {
    if (WW.paused || trans || G.noSmudges) return;
    const [psx, psy] = screenOf(player.x, player.y);
    const calmer = WW.tier('hei') ? 1.6 : 1; // People & land power: calmer bad guys
    ents.forEach(e => {
      if (e.kind !== 'smudge' || e.visible === false || e.home[0] !== psx || e.home[1] !== psy) return;
      const F = WW.FOES[e.type] || WW.FOES.grump;
      // every so often a Grumpling flies into a rage: it turns red and charges at the hero for a moment
      let rage = false;
      if (e.type === 'grump') {
        if (!e.nextRage) e.nextRage = now + 4000 + Math.random() * 5000;
        if (now > e.nextRage) { e.rageUntil = now + 1900; e.nextRage = now + 7000 + Math.random() * 5000; WW.sfx('growl'); shakeT = now; }
        rage = now < (e.rageUntil || 0);
      }
      if (now < e.next) return;
      e.next = now + (rage ? 260 : F.ms + (e.phase % 3) * (F.ms / 6)) * calmer;
      const dirs = Object.values(DIRS);
      const toward = [[Math.sign(player.x - e.x), 0], [0, Math.sign(player.y - e.y)]].filter(([a, b]) => a || b);
      const towardOne = () => toward[(Math.random() * toward.length) | 0];
      let pick;
      if (e.type === 'whirl') pick = e.dir; // straight lines; turns when it bumps into something
      else if (e.type === 'blob') pick = Math.random() < .6 && toward.length ? towardOne() : dirs[(Math.random() * 4) | 0]; // slow but follows you
      else if (e.type === 'bat') pick = Math.random() < .3 && toward.length ? towardOne() : dirs[(Math.random() * 4) | 0]; // twitchy
      else pick = (rage || Math.random() < .35) && toward.length ? towardOne() : dirs[(Math.random() * 4) | 0];
      const nx = e.x + pick[0], ny = e.y + pick[1];
      const [hx, hy] = screenOf(nx, ny);
      const edge = nx <= 0 || ny <= 0 || nx >= W - 1 || ny >= H - 1;
      const blocked = hx !== e.home[0] || hy !== e.home[1] || edge || (!F.fly && WW.solid(tileAt(nx, ny))) || (() => { const o = entAt(nx, ny); return o && o !== e && o.kind !== 'scrap' && o.kind !== 'qspot'; })();
      if (blocked) { if (e.type === 'whirl') e.dir = dirs[(Math.random() * 4) | 0]; return; }
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
    WW.tools.under(c, sx, sy);
    const inScreen = e => { const [ex, ey] = screenOf(e.x, e.y); return ex === sx && ey === sy; };
    const px = e => (e.x - sx * SW) * TS, py = e => (e.y - sy * SH) * TS;
    ents.forEach(e => {
      if (e.gone || e.visible === false || !inScreen(e)) return;
      if (e.kind === 'scrap') WW.sprite(c, 'page', px(e) + 1, py(e) + 2, { bob: true, t, phase: e.id });
      if (e.kind === 'crop' || e.kind === 'post') WW.tools.drawEnt(c, e, px(e), py(e), t);
      if (e.kind === 'stone') {
        const glow = WW.run.challengeDone ? 0 : (Math.sin(t / 300) + 1) / 2;
        if (glow) { c.fillStyle = `rgba(242,193,78,${.15 + glow * .25})`; c.fillRect(px(e) - 2, py(e) - 2, 20, 20); }
        WW.sprite(c, 'stone', px(e), py(e), { pal: { W: '#9aa3ad', G: '#5e636b', y: WW.run.challengeDone ? '#3fa34d' : '#f2c14e', r: '#e04848', n: '#2f6fd6' } });
      }
    });
    WW.world.drawFog(c, sx, sy, t);
    ents.forEach(e => {
      if (e.gone || e.visible === false || !inScreen(e)) return;
      if (e.kind === 'npc') {
        WW.drawPerson(c, e.ref, px(e), py(e) - 2, t, e.phase);
        if (!WW.run.talked.has(e.ref.id)) { // speech bubble
          const b = Math.round(Math.sin(t / 250 + e.phase) * 1.5);
          c.fillStyle = '#fffbe8'; c.fillRect(px(e) + 10, py(e) - 9 + b, 7, 6); c.fillStyle = '#22202e'; c.fillRect(px(e) + 12, py(e) - 7 + b, 1, 1); c.fillRect(px(e) + 14, py(e) - 7 + b, 1, 1);
        }
      }
      if (e.kind === 'qnpc' || e.kind === 'qfoe' || e.kind === 'qspot') WW.quest.draw(c, e, px(e), py(e), t);
      if (WW.world.KINDS.includes(e.kind)) WW.world.draw(c, e, px(e), py(e), t);
      if (e.kind === 'atlas') {
        const a = (Math.sin(t / 250) + 1) / 2;
        c.fillStyle = `rgba(255,230,140,${.25 + a * .35})`; c.beginPath(); c.arc(px(e) + 8, py(e) + 6, 10 + a * 3, 0, 7); c.fill();
        c.fillStyle = '#22202e'; c.fillRect(px(e) + 2, py(e) + 10, 12, 6); c.fillStyle = '#9aa3ad'; c.fillRect(px(e) + 3, py(e) + 11, 10, 4); c.fillStyle = '#c3c8ce'; c.fillRect(px(e) + 3, py(e) + 11, 10, 1);
        WW.sprite(c, 'page', px(e) + 1, py(e) - 6, { bob: true, t });
      }
      if (e.kind === 'smudge') {
        const rage = t < (e.rageUntil || 0), j = rage ? Math.round(Math.sin(t / 30)) : 0;
        if (rage) { c.fillStyle = 'rgba(255,60,40,.35)'; c.beginPath(); c.arc(px(e) + 8, py(e) + 8, 10, 0, 7); c.fill(); }
        WW.drawFoe(c, e, px(e) + j, py(e), t, rage);
      }
      if (e.kind === 'boss') {
        const a = (Math.sin(t / 200) + 1) / 2, roar = t - (e.roarT || 0) < 700;
        // a dark, spiky cloud around the Grump
        for (let k = 0; k < 10; k++) {
          const ang = k / 10 * Math.PI * 2 + t / 900, rr = 13 + a * 3 + (k % 2) * 4 + (roar ? 4 : 0);
          c.fillStyle = roar ? 'rgba(170,30,40,.55)' : `rgba(40,25,60,${.35 + a * .2})`;
          c.beginPath(); c.arc(px(e) + 8 + Math.cos(ang) * rr * .55, py(e) + 4 + Math.sin(ang) * rr * .45, 5, 0, 7); c.fill();
        }
        const j = roar ? Math.round(Math.sin(t / 25) * 2) : 0;
        WW.sprite(c, 'smudge', px(e) - 8 + j, py(e) - 16, { bob: true, t, scale: 2, pal: roar ? { g: '#7a2a40', e: '#fff070' } : null });
      }
    });
    c.restore();
  }

  function frame(now) {
    requestAnimationFrame(frame);
    const c = G.ctx; if (!c || !WW.run) return;
    // movement timing
    if (player.moving && now - player.moving >= stepMs()) { player.moving = 0; player.from = null; WW.fx.step(player.x, player.y); pickup(); }
    const dt = Math.min(100, now - (lastFrame || now)); lastFrame = now;
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
    if (!WW.paused) moveStars(dt);
    WW.tools.tick(now);
    const bossE = ents.find(e => e.kind === 'boss' && e.visible && !e.gone);
    if (bossE && !WW.paused && Math.abs(bossE.x - player.x) + Math.abs(bossE.y - player.y) <= 5 && now - (bossE.roarT || 0) > 5500) {
      bossE.roarT = now; shakeT = now; WW.sfx('growl'); G.flashT = now; // the Grump roars when you come near
    }
    // pip trails one tile behind
    if (pip.tx != null && !player.moving) { pip.x = pip.tx; pip.y = pip.ty; pip.tx = null; }
    // where to draw the hero inside the screen
    const k = player.moving ? Math.min(1, (now - player.moving) / stepMs()) : 1;
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
      WW.fx.draw(c, trans.to[0], trans.to[1], null, now, dt);
      if (p >= 1) trans = null;
    } else {
      drawScreen(c, sx, sy, 0, 0, now);
      // Christopher (he flies in when you first meet him)
      const [psx, psy] = screenOf(pip.x, pip.y);
      if (psx === sx && psy === sy) {
        let cx = (pip.x - sx * SW) * TS + 1, cy = (pip.y - sy * SH) * TS - 5;
        if (pip.x === player.x && pip.y === player.y) { cx -= 13; cy -= 7; } // same tile as the hero: float beside, not behind
        if (pip.fly && !WW.calm) { const q = Math.min(1, (now - pip.fly.t0) / 900), e = 1 - (1 - q) ** 3; cx = pip.fly.from[0] + (cx - pip.fly.from[0]) * e; cy = pip.fly.from[1] + (cy - pip.fly.from[1]) * e; }
        pip.dx = cx; pip.dy = cy;
        WW.chris.draw(c, Math.round(cx), Math.round(cy), now);
      }
      drawHero(c, (fx - sx * SW) * TS, (fy - sy * SH) * TS, now);
      drawStars(c, sx, sy, now);
      WW.fx.draw(c, sx, sy, { x: (fx - sx * SW) * TS, y: (fy - sy * SH) * TS }, now, dt);
      drawArrows(c, sx, sy, (fx - sx * SW) * TS, (fy - sy * SH) * TS, now);
    }
    WW.chris.place(); WW.tools.labels(trans ? null : [sx, sy]);
    if (now - (G.flashT || 0) < 300) { c.fillStyle = `rgba(200,30,30,${0.25 * (1 - (now - G.flashT) / 300)})`; c.fillRect(0, 0, SW * TS, SH * TS); }
    c.restore();
  }
  /* the goal right now (for the Location power's arrow and for the dimness) */
  G.goal = () => {
    const r = WW.run, ep = WW.ep, near = list => list.sort((a, b) => Math.abs(a.x - player.x) + Math.abs(a.y - player.y) - Math.abs(b.x - player.x) - Math.abs(b.y - player.y))[0];
    if (r.bossDone) return r.claimed ? null : ep.boss.at;
    const left = ents.filter(e => e.kind === 'npc' && !r.talked.has(e.ref.id));
    if (left.length) { const n = near(left); return [n.x, n.y]; }
    if (WW.quest.on() && !WW.quest.done()) {
      const q = ep.quest, st = WW.quest.step(), a = q.action;
      if (st === 0 || st === 3) return [q.giver.x, q.giver.y];
      if (st === 1) return [q.contact.x, q.contact.y];
      return a.type === 'fight' ? a.at : a.type === 'trade' ? [a.trader.x, a.trader.y] : null; // a secret spot is found with the clue, not the arrow
    }
    if (!r.challengeDone && r.worldOn) { const w = WW.world.next(); if (w) return w; }
    return r.challengeDone ? ep.boss.at : ep.challenge.at;
  };
  G.progress = () => { // 0..1: how much of the episode is done (the land's color comes back with it)
    const r = WW.run, ep = WW.ep;
    const parts = [r.talked.size >= ep.npcs.length, WW.quest.done(), r.challengeDone, r.bossDone];
    return parts.filter(Boolean).length / parts.length;
  };
  function arrow(c, hx, hy, tx, ty, col, rad) {
    const dx = tx - hx, dy = ty - hy, d = Math.hypot(dx, dy); if (d < 20) return;
    const ux = dx / d, uy = dy / d, ax = hx + ux * rad, ay = hy + uy * rad, px = -uy, py = ux;
    c.fillStyle = '#22202e'; c.beginPath(); c.moveTo(ax + ux * 7, ay + uy * 7); c.lineTo(ax + px * 5 - ux * 2, ay + py * 5 - uy * 2); c.lineTo(ax - px * 5 - ux * 2, ay - py * 5 - uy * 2); c.fill();
    c.fillStyle = col; c.beginPath(); c.moveTo(ax + ux * 5, ay + uy * 5); c.lineTo(ax + px * 3.4 - ux, ay + py * 3.4 - uy); c.lineTo(ax - px * 3.4 - ux, ay - py * 3.4 - uy); c.fill();
  }
  function drawArrows(c, sx, sy, hx, hy, now) {
    const way = G.wayUntil && now < G.wayUntil;
    if (WW.paused || (!WW.tier('loc') && !way)) return;
    const cx = hx + 8, cy = hy + 6, pos = p => [(p[0] - sx * SW) * TS + 8, (p[1] - sy * SH) * TS + 8];
    if (way && now - (G.wayT || 0) > 400) { G.wayT = now; G.wayAt = WW.chris.nextStep().at; }
    const g = way ? G.wayAt : G.goal();
    if (g) { const [tx, ty] = pos(g); arrow(c, cx, cy, tx, ty + Math.sin(now / 200) * 1.5, '#f2c14e', 15); }
    if (WW.tier('loc') >= 2) {
      const left = ents.filter(e => e.kind === 'scrap' && !e.gone);
      if (left.length) { const n = left.sort((a, b) => Math.hypot(a.x - player.x, a.y - player.y) - Math.hypot(b.x - player.x, b.y - player.y))[0]; const [tx, ty] = pos([n.x, n.y]); arrow(c, cx, cy, tx, ty, '#fff3b0', 22); }
    }
  }
  function drawHero(c, x, y, now) {
    if (performance.now() < inv && Math.floor(now / 90) % 2) return; // blink after a hit
    const walk = player.moving && Math.floor(now / 75) % 2;
    const d = player.dir;
    const name = d === 'up' ? (walk ? 'heroUpWalk' : 'heroUp') : d === 'down' ? (walk ? 'heroWalk' : 'hero') : (walk ? 'heroSideWalk' : 'heroSide');
    WW.shadow(c, Math.round(x), Math.round(y) + 12, 10);
    WW.world.boat(c, Math.round(x), Math.round(y), tileAt(player.x, player.y));
    WW.sprite(c, name, Math.round(x), Math.round(y) - 3, { pal: WW.heroPal(), flip: d === 'left' });
  }

  /* ---------------- hooks for the automatic play-tests ---------------- */
  WW.dbg = {
    teleport(x, y) { player.x = x; player.y = y; player.from = null; player.moving = 0; trans = null; pip.x = x; pip.y = y; clickTarget = null; held = null; },
    face(d) { player.dir = d; },
    act() { actFacing(); },
    bumpInto(x, y) { // stand next to (x,y) on a walkable tile and interact
      for (const [d, [dx, dy]] of Object.entries(DIRS)) {
        const sx = x - dx, sy = y - dy;
        if (walkable(sx, sy)) { this.teleport(sx, sy); player.dir = d; interact(entAt(x, y)); return true; }
      }
      return false;
    },
    standOn(x, y) { this.teleport(x, y); pickup(); },
    faceFrom(x, y, avoid) { // stand next to (x,y) facing it, without touching it (avoid: tiles not to stand on)
      for (const [d, [dx, dy]] of Object.entries(DIRS)) {
        const sx = x - dx, sy = y - dy;
        if (walkable(sx, sy) && !(avoid || []).some(p => p[0] === sx && p[1] === sy)) { this.teleport(sx, sy); player.dir = d; return true; }
      }
      return false;
    },
    fire() { lastShot = 0; throwStar(); },
    get stars() { return stars; },
    get goal() { return G.goal(); },
    collect(i) { const e = ents.find(e => e.kind === 'scrap' && e.id === i); this.teleport(e.x, e.y); pickup(); },
    get ents() { return ents; }, get player() { return player; },
    noSmudges() { G.noSmudges = true; },
    use(x, y) { const e = entAt(x, y); return WW.tools.act(x, y, e); },
    useOn(tiles) { // face the first free tile in the list and use the tool on it (play-tests)
      for (const [x, y] of tiles) if (walkable(x, y) && !entAt(x, y) && this.faceFrom(x, y, tiles)) { actFacing(); return [x, y]; }
      for (const [x, y] of tiles) if (walkable(x, y) && !entAt(x, y) && this.faceFrom(x, y)) { actFacing(); return [x, y]; }
      return null;
    }
  };
})();
