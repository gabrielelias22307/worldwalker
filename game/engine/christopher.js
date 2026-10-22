/* WORLDWALKER engine · Christopher, the living compass who follows the hero
   - meets the student the first time they play an episode with christopher.meet (1.1)
   - drawn a little bigger with a soft glow; his name tag shows under him while you meet him
   - talks in a speech bubble over his head on the map (no timer: it stays until you tap it, press C, or walk away)
   - C (or the 🧭 button) asks him "What do I do next?" and opens his hint shop */
(function () {
  const L = t => WW.L(t), T = k => WW.T(k), esc = s => WW.esc(s);
  const $ = id => document.getElementById(id);
  const C = WW.chris = { scene: false };
  let bubble = null, tag = null, said = null, saidAt = null, meetT = 0;

  // "Christopher: «...»" -> just the words, for his bubble
  const words = t => {
    const s = typeof t === 'string' ? t : L(t), m = s.match(/^\s*(Christopher|کریستوفر)\s*[:：]\s*/);
    return m ? s.slice(m[0].length).replace(/^[«"“]\s*|\s*[»"”]$/g, '') : s;
  };

  function el() {
    if (!bubble || !bubble.isConnected) {
      bubble = document.createElement('div'); bubble.className = 'cbubble'; bubble.setAttribute('role', 'status');
      (home || $('ww-stage')).appendChild(bubble); // in his corner beside (or under) the map; over the map only when there is no room
      bubble.addEventListener('click', e => { if (e.target.closest('button')) return; if (C.scene) C.next(); else if (!C.chainNext()) C.hide(); });
    }
    return bubble;
  }
  C.hide = () => { if (bubble) bubble.style.display = 'none'; if (tag) tag.style.display = 'none'; said = null; idle(); };
  /* fun-pass-4: his corner. The bubble lives there (no tail, never over the map); his portrait talks while words come */
  let home = null;
  C.home = h => { if (!h) return; home = h; if (bubble && bubble.parentNode !== h) h.appendChild(bubble); if (bubble) bubble.classList.toggle('incorner', h.id === 'ww-cpslot'); idle(); };
  C.inCorner = () => !!(bubble && bubble.classList.contains('incorner'));
  C.saidT = -1e9;
  function idle() { const i = $('ww-cpidle'); if (i) { i.style.display = C.showing() ? 'none' : ''; i.textContent = T('cpIdle'); } }
  C.showing = () => !!(bubble && bubble.style.display === 'block');

  /* say something over his head. buttons: [{ label, kind, fn }] */
  /* opt.at: [x, y] — the place he is talking about; the bubble sits on the other side so it never covers it */
  let aim = null;
  C.say = (text, buttons, opt) => {
    if (!(opt && opt.chain)) chainQ = []; // a new message: any waiting second half is dropped
    if (C.scene && !(opt && opt.scene)) { C.scene = false; if (meetOpt.meet !== false) { WW.save.metChris = true; WW.store(); } after = null; } // something real happens: his welcome gives way
    aim = (opt && opt.at) || null;
    const b = el(); b.setAttribute('dir', WW.dir());
    b.classList.toggle('meet', C.scene);
    b.dataset.kind = (opt && opt.kind) || (aim && C.kindAt ? C.kindAt(aim) : (C.color ? C.color() : 'gold'));
    b.innerHTML = `<div class="cb-name">🧭 ${esc(T('chrisName'))}</div><div class="cb-say">${WW.rich(words(text))}</div>`;
    { const sp = WW.speakBtn && WW.speakBtn(() => b.querySelector('.cb-say').innerText); if (sp) b.querySelector('.cb-name').appendChild(sp); }
    if (buttons && buttons.length) {
      const row = document.createElement('div'); row.className = 'cb-acts';
      buttons.forEach(o => { const x = WW.btn(o.label, 'cb ' + (o.kind || ''), e => { e.stopPropagation(); o.fn(); }); row.appendChild(x); });
      b.appendChild(row);
    }
    if (opt && opt.more) b.insertAdjacentHTML('beforeend', `<div class="cb-more" aria-hidden="true">🚶 ▶</div>`);
    b.style.display = 'block'; said = text; b.classList.toggle('incorner', !!(home && home.id === 'ww-cpslot')); idle();
    C.saidT = performance.now(); { const cp = $('ww-cpanel'); if (cp) { cp.classList.remove('new'); void cp.offsetWidth; cp.classList.add('new'); } }
    const p = WW.game.player; saidAt = p ? [p.x, p.y] : null;
    WW.sfx('blip');
    C.place();
  };

  /* PLAYTEST-3: say two (or more) short bubbles one after the other: the next shows when the student walks 3 steps
     or taps the bubble (or presses C / Enter), instead of one long block */
  let chainQ = [], chainOpt = null;
  C.chain = (texts, opt = {}) => { const [first, ...rest] = texts.filter(Boolean); C.say(first, null, Object.assign({}, opt, { more: rest.length > 0, chain: true })); chainQ = rest; chainOpt = opt; };
  C.chainNext = () => { if (!chainQ.length) return false; const t = chainQ.shift(); C.say(t, null, Object.assign({}, chainOpt, { more: chainQ.length > 0, chain: true })); return true; };
  C.chaining = () => chainQ.length > 0;
  /* keep the bubble over his head (called every frame) */
  C.place = () => {
    if (!C.showing() || C.inCorner()) return;
    const g = WW.game, cv = $('ww-cv'); if (!g.pip || !cv || !g.player) return;
    const [sx, sy] = g.screenOf(g.player.x, g.player.y), pip = g.pip;
    const sr = $('ww-screen').getBoundingClientRect(), cr = cv.getBoundingClientRect(), k = cr.width / cv.width, stR = $('ww-stage').getBoundingClientRect();
    const ox = cr.left - sr.left, oy = cr.top - sr.top, SW = sr.width, SH = sr.height, bx = sr.left - stR.left, by = sr.top - stR.top;
    const tile = (x, y, pad) => ({ x: ox + ((x - sx * 16) * 16 - pad) * k, y: oy + ((y - sy * 11) * 16 - pad - 3) * k, w: (16 + pad * 2) * k, h: (19 + pad * 2) * k });
    const dx = pip.dx ?? (pip.x - sx * 16) * 16, dy = pip.dy ?? (pip.y - sy * 11) * 16;
    const me = { x: ox + (dx - 2) * k, y: oy + (dy - 2) * k, w: 20 * k, h: 20 * k }, mx = me.x + me.w / 2, my = me.y + me.h / 2;
    const hero = tile(g.player.x, g.player.y, 1);
    const onScr = aim && g.screenOf(aim[0], aim[1]).join() === [sx, sy].join();
    const target = onScr ? tile(aim[0], aim[1], 4) : null;
    let dir = null; // which way the place he names is (even off this screen)
    if (aim && (aim[0] !== g.player.x || aim[1] !== g.player.y)) { const ax = ox + ((aim[0] - sx * 16) * 16 + 8) * k - mx, ay = oy + ((aim[1] - sy * 11) * 16 + 8) * k - my, l = Math.hypot(ax, ay) || 1; dir = [ax / l, ay / l]; }
    // a phone: the bubble sits under the map (and the tool bar), full width, its tail pointing up at him
    const dock = !!document.querySelector('.ww-frame.narrow');
    bubble.classList.toggle('dock', dock);
    if (dock) {
      const tb = $('ww-tools'), below = tb && tb.parentNode === $('ww-stage') ? tb.getBoundingClientRect().bottom - stR.top : by + SH;
      bubble.style.left = bx + 'px'; bubble.style.width = SW + 'px'; bubble.style.top = (below + 12) + 'px';
      bubble.style.setProperty('--tx', Math.max(12, Math.min(SW - 24, mx - 7)) + 'px');
      bubble.classList.remove('below', 'side-l', 'side-r');
    } else bubble.style.width = '';
    const w = bubble.offsetWidth, h = bubble.offsetHeight, gap = 10;
    const over = (a, b) => b ? Math.max(0, Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x)) * Math.max(0, Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y)) / (b.w * b.h) : 0;
    // spots around Christopher and the hero together (so it never sits on the hero): above or below (left, centred
    // or right), or beside them
    const U = { x: Math.min(me.x, hero.x), y: Math.min(me.y, hero.y) }; U.r = Math.max(me.x + me.w, hero.x + hero.w); U.b = Math.max(me.y + me.h, hero.y + hero.h);
    const cands = [];
    [mx - w / 2, mx - w + 24, mx - 24].forEach(x => { cands.push(['above', x, U.y - h - gap]); cands.push(['below', x, U.b + gap]); });
    cands.push(['left', U.x - w - gap, my - h / 2], ['right', U.r + gap, my - h / 2]);
    let best = null;
    cands.forEach(([side, x0, y0]) => {
      const x = Math.max(4, Math.min(SW - w - 4, x0)), y = Math.max(4, Math.min(SH - h - 4, y0)), r = { x, y, w, h };
      let score = 1000 * over(r, target) + 700 * over(r, hero) + 0.6 * (Math.abs(x - x0) + Math.abs(y - y0));
      if (dir) { const cx = x + w / 2 - mx, cy = y + h / 2 - my, l = Math.hypot(cx, cy) || 1; score += 120 * Math.max(0, (cx * dir[0] + cy * dir[1]) / l); } // lean away from the place he names
      if (side === 'above') score -= 5; // above him reads best when nothing is in the way
      if (!best || score < best.score) best = { side, x, y, score };
    });
    if (!dock) bubble.style.setProperty('--tx', Math.max(10, Math.min(w - 24, mx - best.x - 7)) + 'px'); // the tail points at him
    if (!dock) { bubble.style.left = (bx + best.x) + 'px'; bubble.style.top = (by + best.y) + 'px'; }
    bubble.classList.toggle('below', !dock && best.side === 'below');
    bubble.classList.toggle('side-l', !dock && best.side === 'left');
    bubble.classList.toggle('side-r', !dock && best.side === 'right');
    const px = mx, py = me.y, scale = k;
    if (C.scene) { // his name, crisp, under him while you meet him
      if (!tag || !tag.isConnected) { tag = document.createElement('div'); tag.className = 'ctag'; $('ww-stage').appendChild(tag); }
      tag.textContent = T('chrisName'); tag.style.display = 'block';
      tag.style.left = (bx + px) + 'px'; tag.style.top = (by + py + 24 * scale) + 'px';
    } else if (tag) tag.style.display = 'none';
    // a two-part message: 3 steps on and he says the next part
    if (!C.scene && chainQ.length && saidAt && Math.abs(g.player.x - saidAt[0]) + Math.abs(g.player.y - saidAt[1]) >= 3) { C.chainNext(); return; }
    // his welcome: 3 steps on and he says the next line
    if (C.scene && saidAt && performance.now() - meetT > 400 && Math.abs(g.player.x - saidAt[0]) + Math.abs(g.player.y - saidAt[1]) >= 3) { C.next(); return; }
    // walked away: the bubble goes (no timer)
    if (!C.scene && saidAt && !bubble.querySelector('button') && Math.abs(g.player.x - saidAt[0]) + Math.abs(g.player.y - saidAt[1]) > 6) C.hide();
  };

  /* ---------------- his welcome (PLAYTEST-3: while you walk, no Next buttons) ----------------
     C.meet(lines, done, opt): he says each line in his bubble while the student already walks. Walking 3 steps,
     tapping the bubble, Enter or C moves on to the next line. opt.flyIn: he flies in from off-screen (the first meeting). */
  let lines = [], li = 0, after = null, meetOpt = {};
  C.meet = (ls, done, opt = {}) => {
    lines = ls; li = 0; after = done; meetOpt = opt; C.scene = true; meetT = performance.now();
    if (!lines.length) return C.end();
    if (opt.flyIn !== false && C.fly && !WW.calm) { C.fly.x = -24; C.fly.y = -24; C.fly.loopT = performance.now() + 700; C.fly.callT = performance.now() + 700; }
    setTimeout(() => C.next(true), WW.calm || opt.flyIn === false ? 50 : 900);
  };
  C.next = (first) => {
    if (!C.scene) return;
    if (!first) li++;
    if (li >= lines.length) return C.end();
    C.say(lines[li], null, { kind: 'gold', more: li < lines.length - 1, scene: true });
  };
  C.end = () => {
    C.scene = false; C.hide();
    if (meetOpt.meet !== false) { WW.save.metChris = true; WW.store(); }
    if (WW.game.pip) WW.game.pip.fly = null;
    const d = after; after = null; d && d();
    WW.toastPump && WW.toastPump();
  };
  C.skip = () => { if (WW.scene && WW.scene.skip) WW.scene.skip(); if (C.scene) C.end(); }; // for the play-tests (a cut scene first, then his welcome)

  /* ---------------- "What do I do next?" ---------------- */
  const DIRS = ['n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw'];
  C.dirWord = (fx, fy, tx, ty) => {
    const dx = tx - fx, dy = ty - fy;
    if (Math.abs(dx) + Math.abs(dy) <= 1) return null; // right next to it
    const a = (Math.atan2(dx, -dy) * 180 / Math.PI + 360 + 22.5) % 360;
    return T('dir_' + DIRS[Math.floor(a / 45)]);
  };
  const go = (at) => { const p = WW.game.player, d = at && C.dirWord(p.x, p.y, at[0], at[1]); return !at ? '' : d ? T('goDir').replace('{d}', d) : T('dirHere'); };
  C.go = go;
  // can the hero walk there now? (a broken bridge might be in the way)
  function reachable(at) {
    const g = WW.game, [W, H] = g.size, seen = new Set(), q = [[g.player.x, g.player.y]];
    seen.add(q[0].join());
    while (q.length) {
      const [x, y] = q.shift();
      if (Math.abs(x - at[0]) + Math.abs(y - at[1]) <= 1) return true;
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const nx = x + dx, ny = y + dy, k = nx + ',' + ny;
        if (nx < 0 || ny < 0 || nx >= W || ny >= H || seen.has(k) || WW.solid(g.tileAt(nx, ny))) continue;
        seen.add(k); q.push([nx, ny]);
      }
    }
    return false;
  }
  C.nextStep = () => {
    const ep = WW.ep, r = WW.run, g = WW.game, near = list => list.sort((a, b) => Math.abs(a.x - g.player.x) + Math.abs(a.y - g.player.y) - Math.abs(b.x - g.player.x) - Math.abs(b.y - g.player.y))[0];
    let text, at = null;
    if (r.bossDone) { at = WW.game.bossAt(); text = T('nsPage'); }
    else {
      const left = g.ents.filter(e => e.kind === 'npc' && !r.talked.has(e.ref.id));
      if (left.length) { const n = near(left).ref; at = [n.x, n.y]; text = T('nsTalk').replace('{n}', WW.plain(n.name)).replace('{r}', WW.plain(n.role)); }
      else if (WW.quest.on() && !WW.quest.done()) {
        const q = ep.quest, st = WW.quest.step(), a = q.action;
        at = st === 0 || st === 3 ? [q.giver.x, q.giver.y] : st === 1 ? [q.contact.x, q.contact.y] : WW.quest.target(true);
        const clue = WW.quest.clue();
        text = st === 2 && a.type === 'find' ? T('nsFind').replace('{h}', WW.plain(a.hint)) : clue ? `🧩 ${T('chaseNext')} ${WW.L(clue.t)}` : WW.quest.bar().replace(/^📜\s*/, '');
      } else if (!r.challengeDone) { at = WW.world.next() || ep.challenge.at; text = WW.world.nextText() || WW.tools.signText() || T('nsStone'); }
      else { at = WW.game.bossAt(); text = r.fog && r.fog.set.size ? T('nsFog') : T('nsBoss'); }
    }
    // a broken bridge in the way? say so first
    const fix = at && WW.tools && WW.tools.blockingRepair ? WW.tools.blockingRepair(at, reachable) : null;
    if (fix) return { text: fix.text, at: fix.at, kind: 'green' };
    let kind = C.kindAt ? C.kindAt(at) : 'gold';
    if (r.challengeDone && !r.bossDone) kind = 'red'; // the Grump and its fog
    else if (WW.quest.on() && !WW.quest.done() && !g.ents.some(e => e.kind === 'npc' && !r.talked.has(e.ref.id))) {
      const st = WW.quest.step(), ty = ep.quest.action.type;
      if (st === 2) kind = ty === 'trade' ? 'green' : ty === 'fight' ? 'red' : 'blue'; // a find or a chase clue is blue
    }
    return { text: text + (at ? ' ' + go(at) : ''), at, kind };
  };

  /* C: talk to him */
  C.talk = () => {
    if (C.scene) return C.next();
    if (C.chainNext()) return;
    if (WW.paused) return;
    if (C.showing() && said === 'next') return C.hide();
    const ns = C.nextStep(); if (C.fly) { C.fly.ask = false; C.fly.lastProgress = performance.now(); }
    const way = WW.game.wayUntil && performance.now() < WW.game.wayUntil;
    C.say(ns.text, [
      ...(ns.at && !way ? [{ label: '🧭 ' + T('showWay') + ' · ' + (wayFree() ? T('free') : '5 ●'), kind: 'gold', fn: buyWay }] : []),
      { label: '✕', kind: 'ghost', fn: () => C.hide() }], { at: ns.at, kind: ns.kind });
    said = 'next';
  };
  // the way is free the first time in each episode, and whenever you have fewer than 5 coins (never a dead end)
  const wayFree = () => !WW.run.wayUsed || (WW.save.coins || 0) < 5;
  function buyWay() {
    if (!wayFree()) { WW.spend(5); WW.ui.hud(); }
    WW.run.wayUsed = true; WW.game.wayUntil = performance.now() + 30000;
    const ns = C.nextStep();
    WW.sfx('coin'); C.say(T('wayOn'), null, { at: ns.at, kind: ns.kind });
    C.show(ns.at, ns.kind, { hold: 3200 });
  }

  /* ---------------- PLAYTEST-3 · Christopher gets wings ----------------
     A little flying spirit with a compass needle inside his light. He floats beside the hero (never on top), and flies to
     what matters: when a new goal starts, after ~15 s with no progress, the first time the hero faces something useful,
     and when you ask "Show me the way". His color says what he points at, and his bubble border matches:
     gold = the next goal · green = something to pick up or do · blue = a secret, a clue, a find · red = danger.
     While he hovers over a place, corner brackets lock on to it. WW.calm: no orbit, no loops, no flights; a glow and a
     still lock-on instead. Positions are pixels on the current screen (256 × 176). */
  const COL = { gold: ['#fff1a8', '#f2c14e', '#c08a1e'], green: ['#c8f7b0', '#5fd36a', '#2e9a46'], blue: ['#cfeaff', '#62b6ff', '#2f7fd1'], red: ['#ffd0c8', '#ff6b5e', '#c8323a'] };
  C.COL = COL;
  const IDLE_MS = 15000, IDLE_AGAIN_MS = 25000;
  const F = C.fly = {
    mode: 'follow', x: null, y: null, kind: 'gold', at: null, until: 0, mark: null, callT: -1e9, loopT: -1e9,
    trail: [], ask: false, bang: false, moodT: -1e9, mood: null, side: 1, scr: null, sig: null, act: null,
    lastProgress: 0, lastNudge: 0, pending: null, seen: {}, danger: false, needle: -Math.PI / 2,
    idleMs: IDLE_MS
  };
  // what kind of thing is at this tile? (decides his color)
  C.kindAt = (at) => {
    if (!at) return 'gold';
    const g = WW.game, r = WW.run, e = g.entAt(at[0], at[1]);
    if (WW.world.fogAt && WW.world.fogAt(at[0], at[1])) return 'red';
    if (e) {
      if (/^(boss|smudge|qfoe|ghost)$/.test(e.kind)) return 'red';
      if (/^(clue|chest|qspot|scrap|piece|gold)$/.test(e.kind)) return 'blue';
      if (/^(qgood|site|post|signpost|basket|board|crop|place|survey|stop|lever)$/.test(e.kind)) return 'green';
      return 'gold'; // people, the stone, the atlas page
    }
    if (WW.ep.challenge && at[0] === WW.ep.challenge.at[0] && at[1] === WW.ep.challenge.at[1]) return 'gold';
    if (WW.tools && WW.tools.fitTool && WW.tools.fitTool(at[0], at[1], null)) return 'green';
    return r && r.bossDone ? 'gold' : 'gold';
  };
  const center = (at, sx, sy) => [(at[0] - sx * 16) * 16 + 8, (at[1] - sy * 11) * 16 + 8];
  const onScreen = (at, sx, sy) => at && Math.floor(at[0] / 16) === sx && Math.floor(at[1] / 11) === sy;

  /* fly to a place and circle over it. opt: { hold (ms), call (chime + loop), nudge (leave a "?" after) } */
  C.show = (at, kind, opt = {}) => {
    if (!at) return;
    const now = performance.now();
    F.kind = kind || C.kindAt(at); F.at = at.slice(); F.ask = false; F.bang = true;
    F.mark = { at: at.slice(), kind: F.kind, until: now + (opt.hold || 2600) + 1600 };
    if (opt.call !== false) { F.callT = now; WW.sfx('chime'); }
    if (WW.calm) { F.mode = 'follow'; F.until = now + (opt.hold || 2600); F.nudge = !!opt.nudge; return; }
    F.loopT = opt.call === false ? -1e9 : now;
    F.mode = 'go'; F.until = 0; F.hold = opt.hold || 2600; F.nudge = !!opt.nudge;
  };
  /* the first time the hero faces something useful (a tree with the axe, a trade good): a quick hop over it */
  C.notice = (at, kind, key) => {
    if (!at || F.seen[key] || C.scene || WW.paused) return;
    F.seen[key] = true;
    if (F.mode !== 'follow') return;
    C.show(at, kind || C.kindAt(at), { hold: 1400 });
  };
  /* little moods: 'spin' (a right answer), 'droop' (a miss), 'cheer' (an atlas page) */
  C.mood = (m) => { F.mood = m; F.moodT = performance.now(); if (m === 'cheer' && WW.game.player) WW.fx.burst(WW.game.player.x, WW.game.player.y, 'gold'); };
  C.resetFlight = () => { F.mode = 'follow'; F.x = null; F.y = null; F.trail = []; F.mark = null; F.ask = false; F.bang = false; F.sig = null; F.act = null; F.seen = {}; F.lastProgress = performance.now(); F.lastNudge = 0; F.pending = null; F.scr = null; };

  // a short fingerprint of where the student is in the episode (a change = progress, maybe a new goal)
  function goalSig() {
    const r = WW.run, q = WW.quest;
    return [r.talked.size, q.on() ? q.step() : '-', r.chase || 0, r.route || 0, r.seen ? r.seen.size : 0, (r.signs || []).filter(s => s.placed).length,
      r.challengeDone ? 1 : 0, r.fog && r.fog.set ? r.fog.set.size : '-', r.bossDone ? 1 : 0, r.claimed ? 1 : 0].join('|');
  }
  function activitySig() { const t = WW.tools; return [t && t.have ? t.have('wood') + t.have('fiber') : 0, WW.save.coins || 0, WW.run.carry != null ? 1 : 0].join('|'); }

  /* every frame: where he is. hx, hy = the hero's top-left on this screen. Returns his center. */
  C.step = (now, dt, hx, hy, sx, sy, facing) => {
    const g = WW.game, hcx = hx + 8, hcy = hy + 8;
    // a new screen: keep his place relative to the world, so he flies in from the edge
    if (F.scr && (F.scr[0] !== sx || F.scr[1] !== sy) && F.x != null) { F.x += (F.scr[0] - sx) * 256; F.y += (F.scr[1] - sy) * 176; F.trail = []; }
    F.scr = [sx, sy];
    if (facing === 'left') F.side = -1; else if (facing === 'right') F.side = 1;
    // his seat beside the hero, behind the way they face, a bit above (the bubble hangs from here, so it doesn't wobble)
    const seatX = hcx - 14 * F.side, seatY = hcy - 9;
    F.ax = seatX; F.ay = seatY;
    // progress and idle
    if (C.scene || WW.paused) F.lastProgress = Math.max(F.lastProgress, now - F.idleMs + 4000); // a panel or his welcome: wait a bit after it
    if (!C.scene && !WW.paused && WW.run && WW.run.talked) {
      const sig = goalSig(), act = activitySig();
      if (F.sig == null) { F.sig = sig; F.act = act; F.lastProgress = now; }
      else if (sig !== F.sig) { F.sig = sig; F.act = act; F.lastProgress = now; F.ask = false; F.pending = now + 700; }
      else if (act !== F.act) { F.act = act; F.lastProgress = now; }
      if (F.pending && now >= F.pending && F.mode === 'follow') {
        F.pending = null;
        const ns = C.nextStep();
        if (ns.at && Math.abs(ns.at[0] - g.player.x) + Math.abs(ns.at[1] - g.player.y) > 2) C.show(ns.at, ns.kind);
        else if (ns.at) F.mark = { at: ns.at.slice(), kind: ns.kind, until: now + 2500 };
      }
      const quiet = now - F.lastProgress, since = now - (F.lastNudge || 0);
      if (quiet > F.idleMs && since > (F.lastNudge ? IDLE_AGAIN_MS : 0) && F.mode === 'follow' && !(C.showing() && bubble.querySelector('button'))) {
        F.lastNudge = now; const ns = C.nextStep(); if (ns.at) C.show(ns.at, ns.kind, { nudge: true, hold: 3200 });
      }
      // danger: a bad guy within 2 tiles makes his light go red
      F.danger = g.ents.some(e => (e.kind === 'smudge' || e.kind === 'qfoe') && !e.gone && e.visible !== false && Math.abs(e.x - g.player.x) + Math.abs(e.y - g.player.y) <= 2);
    }
    if (F.x == null) { F.x = seatX; F.y = seatY; }
    // where he wants to be
    let tx = seatX, ty = seatY, ease = 110;
    if (!WW.calm) { tx += Math.cos(now / 900) * 5; ty += Math.sin(now / 640) * 3; } // a small drift around his seat
    if (F.mode === 'go' || F.mode === 'hover') {
      let px, py, off = false;
      if (onScreen(F.at, sx, sy)) { [px, py] = center(F.at, sx, sy); py -= 15; if (py < 18) { py += 15; px += px > 200 ? -16 : 16; } } // near the top edge: hover beside it, so his "!" stays on screen
      else { // off this screen: wait at the edge on that side, pointing the way
        const [cx, cy] = center(F.at, sx, sy), dx = cx - hcx, dy = cy - hcy, k = Math.min((dx ? (dx > 0 ? 242 - hcx : hcx - 14) / Math.abs(dx) : 1e9), (dy ? (dy > 0 ? 162 - hcy : hcy - 14) / Math.abs(dy) : 1e9));
        px = hcx + dx * k; py = Math.max(18, hcy + dy * k); off = true;
      }
      F.off = off;
      if (F.mode === 'go') { tx = px; ty = py; ease = 150; if (Math.hypot(F.x - px, F.y - py) < 4) { F.mode = 'hover'; F.until = now + F.hold; } }
      else { tx = px + (off ? 0 : Math.cos(now / 260) * 8); ty = py + (off ? Math.sin(now / 200) * 2 : Math.sin(now / 260) * 3); ease = 70; if (now > F.until) { F.mode = 'back'; F.mark && (F.mark.until = Math.min(F.mark.until, now + 700)); } }
    } else if (F.mode === 'back') { ease = 150; if (Math.hypot(F.x - seatX, F.y - seatY) < 6) { F.mode = 'follow'; F.bang = false; if (F.nudge) F.ask = true; F.nudge = false; } }
    if (WW.calm) { F.x = seatX; F.y = seatY; if (F.until && now > F.until) { F.until = 0; F.bang = false; if (F.nudge) F.ask = true; F.nudge = false; } }
    else {
      const a = 1 - Math.exp(-dt / ease);
      const ox = F.x, oy = F.y; F.x += (tx - F.x) * a; F.y += (ty - F.y) * a;
      const sp = Math.hypot(F.x - ox, F.y - oy) / Math.max(1, dt);
      if (sp > 0.03) F.trail.push({ x: F.x + (Math.random() - 0.5) * 6, y: F.y + 4 + (Math.random() - 0.5) * 4, t: now });
    }
    F.trail = F.trail.filter(p => now - p.t < 420).slice(-14);
    // never on top of the hero (or what he points at)
    let dx = F.x - hcx, dy = F.y - hcy;
    if (Math.abs(dx) < 13 && Math.abs(dy) < 13) { if (Math.abs(dy) >= Math.abs(dx) * 1.2) F.y = hcy + (dy < 0 ? -13 : 13); else F.x = hcx + (dx < 0 ? -13 : 13); }
    if (F.mode === 'hover' && !F.off && onScreen(F.at, sx, sy)) { const [ax, ay] = center(F.at, sx, sy); if (Math.abs(F.x - ax) < 13 && Math.abs(F.y - ay) < 13) { if (ay - 13 >= 18) F.y = ay - 13; else F.x = ax + (F.x < ax ? -13 : 13); } }
    // a loop-de-loop when he calls out
    let lx = 0, ly = 0;
    const lq = (now - F.loopT) / 650;
    if (lq >= 0 && lq < 1 && !WW.calm) { lx = Math.sin(lq * Math.PI * 2) * 7; ly = -(1 - Math.cos(lq * Math.PI * 2)) * 6; }
    // the needle points at what he shows (or north)
    const want = F.at && F.mode !== 'follow' ? Math.atan2(center(F.at, sx, sy)[1] - F.y, center(F.at, sx, sy)[0] - F.x) : (F.at && F.mark && now < F.mark.until ? Math.atan2(center(F.at, sx, sy)[1] - F.y, center(F.at, sx, sy)[0] - F.x) : -Math.PI / 2);
    let dA = ((want - F.needle + Math.PI * 3) % (Math.PI * 2)) - Math.PI; F.needle += dA * (WW.calm ? 1 : Math.min(1, dt / 120));
    return { x: F.x + lx, y: F.y + ly };
  };
  C.color = () => (F.danger && F.mode === 'follow' ? 'red' : F.mode !== 'follow' || (WW.calm && F.until) ? F.kind : (F.mark && performance.now() < F.mark.until ? F.mark.kind : 'gold'));

  /* the lock-on: corner brackets on the tile he means */
  C.drawMark = (c, sx, sy, now) => {
    const m = F.mark; if (!m || now > m.until || !onScreen(m.at, sx, sy)) return;
    const [cx, cy] = center(m.at, sx, sy), col = COL[m.kind] || COL.gold;
    const fade = Math.min(1, (m.until - now) / 500), pulse = WW.calm ? 0 : Math.round((Math.sin(now / 160) + 1));
    const r = 11 + pulse, L = 4;
    c.save(); c.globalAlpha = fade;
    c.fillStyle = col[1] + '33'; c.fillRect(cx - 8, cy - 8, 16, 16);
    [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([ux, uy]) => {
      const x = cx + ux * r, y = cy + uy * r;
      c.fillStyle = '#22202e'; c.fillRect(Math.min(x, x - ux * L) - 1, y - 1 - (uy > 0 ? 1 : 0), L + 2, 4); c.fillRect(x - 1 - (ux > 0 ? 1 : 0), Math.min(y, y - uy * L) - 1, 4, L + 2);
      c.fillStyle = col[1]; c.fillRect(Math.min(x, x - ux * L), y - (uy > 0 ? 1 : 0), L, 2); c.fillRect(x - (ux > 0 ? 1 : 0), Math.min(y, y - uy * L), 2, L);
    });
    c.restore();
  };

  // his wings, the right one (the left is its mirror): # white, c his color
  const WINGS = [
    ['...##', '..###', '.##c.', '##c..', 'c....'],
    ['.....', '.###.', '####c', '.#cc.', '.....'],
    ['#....', '##c..', '.##c.', '..##c', '...##']];
  // tiny pixel letters for "!" and "?"
  const GLYPH = { '!': ['.#.', '.#.', '.#.', '...', '.#.'], '?': ['##.', '..#', '.#.', '...', '.#.'] };
  /* draw him: (x, y) = the top-left of his 16 × 16 box */
  // his portrait in the corner: his color, his mood, talking for a moment after each new message (chrisface.js)
  let faceKey = '';
  C.face = (t) => {
    const cv = $('ww-cpface'), cp = $('ww-cpanel'); if (!cv || !WW.chrisFace || !cp || !cp.classList.contains('on')) return;
    const kind = C.showing() && bubble.dataset.kind ? bubble.dataset.kind : C.color();
    const mood = F.mood && t - F.moodT < (F.mood === 'cheer' ? 1600 : F.mood === 'spin' ? 700 : 1400) ? F.mood : t - C.saidT < 1500 ? 'talk' : null;
    const key = kind + mood;
    if (WW.calm && key === faceKey) return; // reduced motion: draw only when something changes
    faceKey = key;
    WW.chrisFace.draw(cv.getContext('2d'), t, { kind, mood, needle: F.needle });
  };
  (function loop(t) { try { C.face(t); } catch (e) { } requestAnimationFrame(loop); })(0);
  C.draw = (c, x, y, t) => {
    const cx = x + 8, cy = y + 8, kind = C.color(), col = COL[kind] || COL.gold, calm = WW.calm;
    const call = Math.max(0, 1 - (t - F.callT) / 900), k = (Math.sin(t / 400) + 1) / 2;
    const droop = F.mood === 'droop' && t - F.moodT < 1400, spin = F.mood === 'spin' && t - F.moodT < 700 && !calm, cheer = F.mood === 'cheer' && t - F.moodT < 1600;
    const bob = calm ? 0 : Math.round(Math.sin(t / 260 + 1) * 1.5) + (droop ? 2 : 0);
    // sparkle trail
    F.trail.forEach(p => { const a = 1 - (t - p.t) / 420; c.fillStyle = col[0]; c.globalAlpha = a * 0.9; c.fillRect(Math.round(p.x), Math.round(p.y), 1, 1); if (a > 0.6) c.fillRect(Math.round(p.x) - 1, Math.round(p.y), 3, 1); });
    c.globalAlpha = 1;
    // his light: a soft halo, brighter when he calls out
    const rad = 8 + k * 1.5 + call * 4;
    const gr = c.createRadialGradient(cx, cy + bob, 2, cx, cy + bob, rad);
    gr.addColorStop(0, col[0] + 'cc'); gr.addColorStop(0.45, col[1] + Math.round(0x55 + call * 0x50).toString(16)); gr.addColorStop(1, col[1] + '00');
    c.fillStyle = gr; c.beginPath(); c.arc(cx, cy + bob, rad, 0, 7); c.fill();
    c.save(); c.translate(cx, cy + bob);
    if (spin) c.scale(Math.cos((t - F.moodT) / 700 * Math.PI * 4) || 0.1, 1);
    // wings: three frames (up, middle, down), white and a little see-through, his color at the tips
    const fr = calm ? 1 : [0, 1, 2, 1][Math.floor(t / (F.mode === 'follow' ? 90 : 55)) % 4];
    const wing = (s) => {
      const rows = WINGS[fr], dy = droop ? 2 : 0, px = (q, r) => [s > 0 ? 3 + q : -4 - q, r - 5 + dy];
      const on = new Set(); rows.forEach((row, r) => [...row].forEach((ch, q) => ch !== '.' && on.add(q + ',' + r)));
      c.fillStyle = 'rgba(34,32,46,.6)';
      on.forEach(k => { const [q, r] = k.split(',').map(Number); [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(([a, b]) => { if (!on.has((q + a) + ',' + (r + b)) && q + a >= 0) { const [x, y] = px(q + a, r + b); c.fillRect(x, y, 1, 1); } }); });
      rows.forEach((row, r) => [...row].forEach((ch, q) => { if (ch === '.') return; const [x, y] = px(q, r); c.fillStyle = ch === 'c' ? col[0] : 'rgba(255,255,255,.9)'; c.fillRect(x, y, 1, 1); }));
    };
    wing(-1); wing(1);
    // body: a small round light with a dark rim, his color, and a compass needle inside
    const R = [[-1, 1, -4], [-3, 3, -3], [-4, 4, -2], [-4, 4, -1], [-4, 4, 0], [-4, 4, 1], [-3, 3, 2], [-1, 1, 3]];
    c.fillStyle = '#22202e'; R.forEach(([a, b, yy]) => c.fillRect(a - 1, yy - 1, b - a + 2, 3));
    R.forEach(([a, b, yy]) => { c.fillStyle = col[1]; c.fillRect(a, yy, b - a, 1); });
    R.slice(1, -1).forEach(([a, b, yy]) => { c.fillStyle = '#fffbe8'; c.fillRect(a + 1, yy, b - a - 2, 1); });
    // eyes (blink now and then)
    const blink = !calm && (t % 3200) < 120;
    c.fillStyle = '#22202e'; if (droop) { c.fillRect(-2, -1, 1, 1); c.fillRect(1, -1, 1, 1); } else { c.fillRect(-2, -2, 1, blink ? 1 : 2); c.fillRect(1, -2, 1, blink ? 1 : 2); }
    // the needle (red end points at what he shows)
    const nx = Math.cos(F.needle), ny = Math.sin(F.needle);
    for (let i = 1; i <= 2; i++) { c.fillStyle = '#e04848'; c.fillRect(Math.round(nx * i), Math.round(1 + ny * i), 1, 1); c.fillStyle = '#2f6fd6'; c.fillRect(Math.round(-nx * i), Math.round(1 - ny * i), 1, 1); }
    c.fillStyle = '#22202e'; c.fillRect(0, 1, 1, 1);
    c.restore();
    // "!" = he has something to tell you · "?" = ask him (C or 🧭)
    const g = F.bang || call > 0 ? '!' : F.ask ? '?' : null;
    if (g) {
      const bx = Math.round(cx) - 3, by = Math.round(y + bob) - 6 - (calm ? 0 : Math.round(Math.abs(Math.sin(t / 180)) * 2));
      c.fillStyle = '#22202e'; c.fillRect(bx - 1, by - 1, 7, 9); c.fillStyle = g === '!' ? col[1] : '#fffbe8'; c.fillRect(bx, by, 5, 7);
      c.fillStyle = '#22202e'; GLYPH[g].forEach((row, r) => [...row].forEach((ch, q) => ch === '#' && c.fillRect(bx + 1 + q, by + 1 + r, 1, 1)));
    }
    if (cheer && !calm) for (let i = 0; i < 6; i++) { const a = (t / 300) + i * 1.05, rr = 12 + ((t - F.moodT) / 90) % 6; c.fillStyle = COL.gold[0]; c.fillRect(Math.round(cx + Math.cos(a) * rr), Math.round(cy + Math.sin(a) * rr), 1, 1); }
  };
})();
