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
      $('ww-screen').appendChild(bubble);
      bubble.addEventListener('click', e => { if (e.target.closest('button')) return; if (C.scene) C.next(); else C.hide(); });
    }
    return bubble;
  }
  C.hide = () => { if (bubble) bubble.style.display = 'none'; if (tag) tag.style.display = 'none'; said = null; };
  C.showing = () => !!(bubble && bubble.style.display === 'block');

  /* say something over his head. buttons: [{ label, kind, fn }] */
  C.say = (text, buttons) => {
    const b = el(); b.setAttribute('dir', WW.dir());
    b.classList.toggle('meet', C.scene);
    b.innerHTML = `<div class="cb-name">🧭 ${esc(T('chrisName'))}</div><div class="cb-say">${WW.rich(words(text))}</div>`;
    if (buttons && buttons.length) {
      const row = document.createElement('div'); row.className = 'cb-acts';
      buttons.forEach(o => { const x = WW.btn(o.label, 'cb ' + (o.kind || ''), e => { e.stopPropagation(); o.fn(); }); row.appendChild(x); });
      b.appendChild(row);
    }
    b.style.display = 'block'; said = text;
    const p = WW.game.player; saidAt = p ? [p.x, p.y] : null;
    WW.sfx('blip');
    C.place();
  };

  /* keep the bubble over his head (called every frame) */
  C.place = () => {
    if (!C.showing()) return;
    const g = WW.game, cv = $('ww-cv'); if (!g.pip || !cv) return;
    const [sx, sy] = g.screenOf(g.player.x, g.player.y), pip = g.pip;
    const scale = cv.getBoundingClientRect().width / cv.width, sr = $('ww-screen').getBoundingClientRect(), cr = cv.getBoundingClientRect();
    const px = ((pip.dx ?? (pip.x - sx * 16) * 16) + 9) * scale + (cr.left - sr.left), py = ((pip.dy ?? (pip.y - sy * 11) * 16) - 8) * scale + (cr.top - sr.top);
    const w = bubble.offsetWidth, h = bubble.offsetHeight;
    bubble.style.left = Math.max(6, Math.min(sr.width - w - 6, px - w / 2)) + 'px';
    const above = py - h - 10;
    bubble.style.top = (above > 4 ? above : py + 40) + 'px';
    bubble.classList.toggle('below', above <= 4);
    if (C.scene) { // his name, crisp, under him while you meet him
      if (!tag || !tag.isConnected) { tag = document.createElement('div'); tag.className = 'ctag'; $('ww-screen').appendChild(tag); }
      tag.textContent = T('chrisName'); tag.style.display = 'block';
      tag.style.left = px + 'px'; tag.style.top = (py + 30 * scale) + 'px';
    } else if (tag) tag.style.display = 'none';
    // walked away: the bubble goes (no timer)
    if (!C.scene && saidAt && !bubble.querySelector('button') && Math.abs(g.player.x - saidAt[0]) + Math.abs(g.player.y - saidAt[1]) > 6) C.hide();
  };

  /* ---------------- meeting him ---------------- */
  let lines = [], li = 0, after = null;
  C.meet = (ls, done) => {
    lines = ls; li = 0; after = done; C.scene = true; meetT = performance.now(); WW.paused = true;
    const g = WW.game; g.pip.fly = { t0: performance.now(), from: [-20, -20] };
    setTimeout(() => C.next(true), WW.calm ? 50 : 900);
  };
  C.next = (first) => {
    if (!C.scene) return;
    if (!first) li++;
    if (li >= lines.length) return C.end();
    C.say(lines[li], [{ label: (li < lines.length - 1 ? T('next') : T('cont')) + ' ▶', kind: 'gold', fn: () => C.next() }]);
  };
  C.end = () => {
    C.scene = false; C.hide(); WW.paused = false;
    WW.save.metChris = true; WW.store();
    if (WW.game.pip) WW.game.pip.fly = null;
    const d = after; after = null; d && d();
    WW.toastPump && WW.toastPump();
  };
  C.skip = () => { if (C.scene) C.end(); }; // for the play-tests

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
    if (r.bossDone) { at = ep.boss.at; text = T('nsPage'); }
    else {
      const left = g.ents.filter(e => e.kind === 'npc' && !r.talked.has(e.ref.id));
      if (left.length) { const n = near(left).ref; at = [n.x, n.y]; text = T('nsTalk').replace('{n}', WW.plain(n.name)).replace('{r}', WW.plain(n.role)); }
      else if (WW.quest.on() && !WW.quest.done()) {
        const q = ep.quest, st = WW.quest.step(), a = q.action;
        at = st === 0 || st === 3 ? [q.giver.x, q.giver.y] : st === 1 ? [q.contact.x, q.contact.y] : a.type === 'fight' ? a.at : a.type === 'trade' ? [a.trader.x, a.trader.y] : null;
        text = st === 2 && a.type === 'find' ? T('nsFind').replace('{h}', WW.plain(a.hint)) : WW.quest.bar().replace(/^📜\s*/, '');
      } else if (!r.challengeDone) { at = ep.challenge.at; text = WW.tools && WW.tools.signText ? WW.tools.signText() || T('nsStone') : T('nsStone'); }
      else { at = ep.boss.at; text = T('nsBoss'); }
    }
    // a broken bridge in the way? say so first
    const fix = at && WW.tools && WW.tools.blockingRepair ? WW.tools.blockingRepair(at, reachable) : null;
    if (fix) return { text: fix.text, at: fix.at };
    return { text: text + (at ? ' ' + go(at) : ''), at };
  };

  /* C: talk to him */
  C.talk = () => {
    if (C.scene) return C.next();
    if (WW.paused) return;
    if (C.showing() && said === 'next') return C.hide();
    const ns = C.nextStep();
    const way = WW.game.wayUntil && performance.now() < WW.game.wayUntil;
    C.say(ns.text, [
      ...(ns.at && !way ? [{ label: '🧭 ' + T('showWay') + ' · 5 ●', kind: 'gold', fn: buyWay }] : []),
      { label: '✕', kind: 'ghost', fn: () => C.hide() }]);
    said = 'next';
  };
  function buyWay() {
    if ((WW.save.coins || 0) < 5) return C.say(T('noCoins5'));
    WW.spend(5); WW.ui.hud(); WW.game.wayUntil = performance.now() + 30000;
    WW.sfx('coin'); C.say(T('wayOn'));
  }

  /* draw him: a little bigger than before, with a soft glow, and his name while you meet him */
  C.draw = (c, x, y, t) => {
    const k = (Math.sin(t / 400) + 1) / 2;
    c.fillStyle = `rgba(255,236,150,${0.18 + k * 0.14})`; c.beginPath(); c.arc(x + 8, y + 8, 11 + k * 2, 0, 7); c.fill();
    WW.shadow(c, x - 1, y + 15, 8);
    c.save(); c.translate(x + 8, y + 8); c.scale(1.25, 1.25);
    WW.sprite(c, 'pip', -8, -8 + Math.round(Math.sin(t / 260 + 1)), {});
    c.restore();
  };
})();
