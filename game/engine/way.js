/* WORLDWALKER engine · finding the way (fun-pass-4, for students who struggle with directions)
   One path finder that knows walls, water, people and broken bridges. Everything that shows the way uses it,
   so the words, the footprints, the gold arrow, the compass, Christopher and tap-to-walk always agree:
   · words: "Go 3 steps south ⬇." / "Go south ⬇, then east ➡. 9 steps." / "Next screen ➡: go south ⬇."
   · footprints: glowing steps on the real path (after "Show me the way", or 15 s without progress)
   · a small compass in the map's corner, the way to go lit up
   · the whole episode as a small map: you and the goal (Now card; the ☰ goals on a phone) */
(function () {
  const WW = window.WW, T = k => WW.T(k);
  const SW = 16, SH = 11, TS = 16;
  const W8 = ['n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw'];
  const way = WW.way = { trailUntil: 0 };
  const G = () => WW.game;
  /* the shortest walk from (x, y) to `at` (or to a square beside it, when `at` is a person, a stone or a wall).
     Returns the squares to step on, in order (not the start); [] when already there; null when there is no way yet. */
  let cache = { key: '', path: null };
  way.path = (from, at) => {
    const g = G(); if (!g || !g.player || !at) return null;
    const [W, H] = g.size, fx = from[0], fy = from[1];
    const key = fx + ',' + fy + '>' + at[0] + ',' + at[1] + '#' + (g.mapVer || 0) + '#' + (WW.run ? WW.run.talked.size : 0);
    if (cache.key === key) return cache.path;
    const goalOpen = g.walkable(at[0], at[1]);
    const isEnd = (x, y) => goalOpen ? x === at[0] && y === at[1] : Math.abs(x - at[0]) + Math.abs(y - at[1]) === 1;
    let path = null;
    if (isEnd(fx, fy)) path = [];
    else {
      const prev = new Map(), q = [[fx, fy]]; prev.set(fx + ',' + fy, null);
      let end = null;
      for (let i = 0; i < q.length && !end; i++) {
        const [x, y] = q[i];
        for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
          const nx = x + dx, ny = y + dy, k = nx + ',' + ny;
          if (nx < 0 || ny < 0 || nx >= W || ny >= H || prev.has(k) || !g.walkable(nx, ny)) continue;
          prev.set(k, x + ',' + y); q.push([nx, ny]);
          if (isEnd(nx, ny)) { end = k; break; }
        }
      }
      if (end) { path = []; for (let k = end; k && k !== fx + ',' + fy; k = prev.get(k)) path.unshift(k.split(',').map(Number)); }
    }
    cache = { key, path };
    return path;
  };
  way.toGoal = () => { const g = G(); const at = g && g.goal && g.goal(); return at ? { at, path: way.path([g.player.x, g.player.y], at) } : null; };
  const dir8 = (fx, fy, tx, ty) => { const dx = tx - fx, dy = ty - fy; if (!dx && !dy) return null; return W8[Math.floor(((Math.atan2(dx, -dy) * 180 / Math.PI + 360 + 22.5) % 360) / 45)]; };
  way.dir8 = dir8;
  /* the first stretch of the walk, as runs of steps the same way: "south 3, east 4, south 2".
     d1 = the first straight run (or, when the path zigzags, the slant of its first steps: "southeast");
     d2 = where it turns after that (only if it really turns) */
  const CARD = (a, b) => b[0] > a[0] ? 'e' : b[0] < a[0] ? 'w' : b[1] > a[1] ? 's' : 'n';
  way.runs = (path, from) => { const runs = []; let prev = from; path.forEach(t => { const d = CARD(prev, t); if (runs.length && runs[runs.length - 1].d === d) runs[runs.length - 1].n++; else runs.push({ d, n: 1 }); prev = t; }); return runs; };
  way.legs = (path, from) => {
    if (!path || !path.length) return null;
    const runs = way.runs(path, from);
    // a real zigzag (short steps going two ways in turn, like stairs): the slant word, "southeast", is true from the first step
    const z = runs.slice(0, 4), two = new Set(z.map(r => r.d));
    if (z.length >= 3 && z.every(r => r.n <= 2) && two.size === 2 && !(two.has('n') && two.has('s')) && !(two.has('e') && two.has('w'))) {
      let n = 0, k = 0; while (k < runs.length && two.has(runs[k].d) && runs[k].n <= 2) { n += runs[k].n; k++; }
      const a = path[n - 1], d1 = dir8(from[0], from[1], a[0], a[1]), next = runs.slice(k).find(r => r.n >= 2);
      return { d1, d2: next && !d1.includes(next.d) ? next.d : null, n: path.length };
    }
    // otherwise the first straight run, then where it turns
    const d1 = runs[0].d, next = runs[1];
    return { d1, d2: next ? next.d : null, n: path.length };
  };
  /* the words for Christopher and the Now card */
  way.words = (at) => {
    const g = G(), p = g.player; if (!at) return '';
    if (Math.abs(at[0] - p.x) + Math.abs(at[1] - p.y) <= 1) return T('dirHere');
    const path = way.path([p.x, p.y], at);
    if (!path) { const d = WW.chris.dirWord(p.x, p.y, at[0], at[1]); return d ? T('goDir').replace('{d}', d) : ''; } // no way yet (a bridge to fix): the plain direction
    const L = way.legs(path, [p.x, p.y]); if (!L) return T('dirHere');
    const w = k => T('dir_' + k);
    const [sx, sy] = g.screenOf(p.x, p.y), [gx, gy] = g.screenOf(at[0], at[1]);
    let s = L.d2 ? T('goThen').replace('{d}', w(L.d1)).replace('{d2}', w(L.d2)) : null;
    if (sx !== gx || sy !== gy) { // on another screen: say so, with the arrow of that screen
      // the arrow of the screen the path goes to next (not the straight line: the path may go around a lake first)
      const out = path.find(([x, y]) => g.screenOf(x, y).join() !== [sx, sy].join()), [ox, oy] = out ? g.screenOf(out[0], out[1]) : [gx, gy];
      const sd = dir8(sx, sy, ox, oy), far = ox !== gx || oy !== gy;
      return (s || T('goDir').replace('{d}', w(L.d1))) + ' ' + T(far ? 'goFar' : 'goScreen').replace('{a}', w(sd).replace(/^.*\s/, '')); // in the order you walk it
    }
    if (s) return s + ' ' + (L.n === 1 ? T('stepOne') : T('stepsN').replace('{n}', L.n));
    return (L.n === 1 ? T('goStep1') : T('goSteps').replace('{n}', L.n)).replace('{d}', w(L.d1));
  };
  /* the way to go right now, as one of 8 directions (for the compass and the gold arrow at the screen edge) */
  way.now = () => { const t = way.toGoal(); if (!t || !t.path || !t.path.length) return null; const p = G().player; const L = way.legs(t.path, [p.x, p.y]); return L && L.d1; };

  /* ---------- footprints on the real path ---------- */
  way.showTrail = (ms = 9000) => { way.trailUntil = performance.now() + ms; };
  way.drawTrail = (c, sx, sy, now) => {
    if (now > way.trailUntil || WW.paused) return;
    const t = way.toGoal(); if (!t || !t.path) return;
    const fade = Math.min(1, (way.trailUntil - now) / 800);
    t.path.slice(0, 8).forEach(([x, y], i) => {
      if (Math.floor(x / SW) !== sx || Math.floor(y / SH) !== sy) return;
      const prev = i ? t.path[i - 1] : [G().player.x, G().player.y], dx = x - prev[0], dy = y - prev[1];
      const px = (x - sx * SW) * TS + 8, py = (y - sy * SH) * TS + 8;
      const pulse = WW.calm ? 1 : 0.75 + 0.25 * Math.max(0, Math.sin(now / 160 - i * 0.7));
      c.save(); c.translate(px, py); c.rotate(Math.atan2(dy, dx) + Math.PI / 2);
      c.globalAlpha = fade * (1 - i * 0.07) * pulse;
      const side = i % 2 ? 3 : -3;
      c.fillStyle = 'rgba(242,193,78,.35)'; c.beginPath(); c.ellipse(side, 0, 5, 7, 0, 0, 7); c.fill(); // glow
      c.fillStyle = '#fff1a8'; c.fillRect(side - 2, -3, 4, 5); c.fillRect(side - 1, -5, 2, 2); // a little foot
      c.restore();
    });
    c.globalAlpha = 1;
  };

  /* ---------- the compass in the corner of the map ---------- */
  way.drawCompass = (c, now) => {
    if (!WW.run || WW.paused && !WW.room) return;
    const d = way.now(), cx = 256 - 17, cy = 17, R = 13;
    c.save();
    c.fillStyle = 'rgba(15,14,26,.72)'; c.beginPath(); c.arc(cx, cy, R + 2, 0, 7); c.fill();
    c.strokeStyle = '#c79a3a'; c.lineWidth = 1.5; c.beginPath(); c.arc(cx, cy, R, 0, 7); c.stroke();
    // the way to go: a gold wedge from the middle
    if (d) {
      const a = W8.indexOf(d) * Math.PI / 4 - Math.PI / 2, glow = WW.calm ? 1 : 0.75 + 0.25 * Math.sin(now / 200);
      c.fillStyle = `rgba(242,193,78,${glow})`; c.beginPath(); c.moveTo(cx + Math.cos(a) * (R - 1), cy + Math.sin(a) * (R - 1));
      c.lineTo(cx + Math.cos(a + 2.5) * 4, cy + Math.sin(a + 2.5) * 4); c.lineTo(cx + Math.cos(a - 2.5) * 4, cy + Math.sin(a - 2.5) * 4); c.fill();
    }
    c.font = 'bold 7px system-ui, sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle';
    const L = T('compassLetters').split(' '), lit = d ? { n: [0], ne: [0, 1], e: [1], se: [1, 2], s: [2], sw: [2, 3], w: [3], nw: [3, 0] }[d] : [];
    [[0, -1], [1, 0], [0, 1], [-1, 0]].forEach(([ux, uy], i) => { c.fillStyle = lit.includes(i) ? '#ffe9a0' : 'rgba(255,251,232,.55)'; c.fillText(L[i], cx + ux * (R - 5), cy + uy * (R - 5) + 0.5); });
    c.fillStyle = '#c79a3a'; c.fillRect(cx - 1, cy - 1, 2, 2);
    c.restore();
  };

  /* ---------- the whole episode as a small map ---------- */
  const TILECOL = ch => '~=b'.includes(ch) ? '#2f7fd1' : 'TPpajY'.includes(ch) ? '#2e6b34' : 'MAVKr'.includes(ch) ? '#8a8a96' : 'RQhdJUXHNEDWm'.includes(ch) ? '#c0533a'
    : ':l-|kB'.includes(ch) ? '#c99a5a' : 'sugc'.includes(ch) ? '#e2c48e' : 'niz'.includes(ch) ? '#e8eef2' : 'L'.includes(ch) ? '#e0602a' : 'o123wqvyet'.includes(ch) ? '#8a6a3a' : '#5aa548';
  let base = null, baseKey = '';
  way.drawMini = (cv, now) => {
    const g = G(); if (!cv || !g || !g.player || !WW.ep) return;
    const [W, H] = g.size, k = 3;
    if (cv.width !== W * k || cv.height !== H * k) { cv.width = W * k; cv.height = H * k; }
    const c = cv.getContext('2d');
    const key = WW.ep.id + '#' + (g.mapVer || 0);
    if (baseKey !== key) { base = document.createElement('canvas'); base.width = W * k; base.height = H * k; const b = base.getContext('2d');
      for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) { b.fillStyle = TILECOL(g.tileAt(x, y)); b.fillRect(x * k, y * k, k, k); }
      b.fillStyle = 'rgba(0,0,0,.35)'; for (let x = SW; x < W; x += SW) b.fillRect(x * k, 0, 1, H * k); for (let y = SH; y < H; y += SH) b.fillRect(0, y * k, W * k, 1); // the screens
      baseKey = key; }
    c.drawImage(base, 0, 0);
    // the screen you are on
    const [sx, sy] = g.screenOf(g.player.x, g.player.y);
    c.strokeStyle = 'rgba(255,251,232,.8)'; c.lineWidth = 1; c.strokeRect(sx * SW * k + 0.5, sy * SH * k + 0.5, SW * k - 1, SH * k - 1);
    // the goal (a gold star) and you (a blinking white dot)
    const at = g.goal && g.goal();
    if (at) { c.fillStyle = '#22202e'; c.fillRect(at[0] * k - 2, at[1] * k - 2, k + 4, k + 4); c.fillStyle = '#f2c14e'; c.fillRect(at[0] * k - 1, at[1] * k - 1, k + 2, k + 2); }
    const on = WW.calm || Math.floor(now / 400) % 2;
    c.fillStyle = '#22202e'; c.fillRect(g.player.x * k - 2, g.player.y * k - 2, k + 4, k + 4); c.fillStyle = on ? '#ffffff' : '#ff6b5e'; c.fillRect(g.player.x * k - 1, g.player.y * k - 1, k + 2, k + 2);
  };
  (function loop(t) { try { document.querySelectorAll('canvas.minimap').forEach(cv => cv.offsetParent && way.drawMini(cv, t)); } catch (e) { } requestAnimationFrame(loop); })(0);
})();
