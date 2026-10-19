/* WORLDWALKER engine · richer art: soft edges between grounds, shaded trees, rocks and mountains that sway or
   sparkle, roofs and walls in the style of each realm, and people with different hair, hats, blinking and shadows.
   It builds on art.js and art2.js and replaces some of their tiles. */
(function () {
  const { tiles, P, R, hash, SPR } = WW;
  const T = 16;
  const calm = !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
  WW.calm = calm;
  // realm = which building style to use; night = lit windows. The game sets these when an episode starts.
  WW.style = WW.style || { realm: 1, night: false };
  const sway = (t, gx, gy, amp = 1) => (calm ? 0 : Math.round(Math.sin((t || 0) / 900 + gx * 0.9 + gy * 0.4) * amp));
  const at = (m, gx, gy) => (m ? (m[gy] || '')[gx] : undefined);
  const groundOf = (m, gx, gy) => (WW.groundAt ? WW.groundAt(m, gx, gy) : '.');
  const under = (c, x, y, gx, gy, m) => tiles[groundOf(m, gx, gy)](c, x, y, gx, gy); // ground under a thing (no soft edges)
  const shadow = (c, x, y, w) => { R(c, x + 8 - w / 2, y, w, 2, 'rgba(0,0,0,.2)'); R(c, x + 8 - w / 2 + 2, y + 2, w - 4, 1, 'rgba(0,0,0,.1)'); };

  /* ---------------- grounds ---------------- */
  tiles['.'] = (c, x, y, gx, gy) => {
    R(c, x, y, T, T, P.grass);
    for (let i = 0; i < 6; i++) {
      const px = x + ((hash(gx, gy, i) * 13) | 0), py = y + ((hash(gx, gy, i + 9) * 13) | 0);
      if (i % 3 === 0) { R(c, px, py + 1, 1, 2, P.grassD); R(c, px + 2, py + 1, 1, 2, P.grassD); R(c, px + 1, py, 1, 2, P.grassL); }
      else R(c, px, py, 1, 2, i % 2 ? P.grassD : P.grassL);
    }
    if (hash(gx, gy, 40) > 0.93) { const px = x + 3 + ((hash(gx, gy, 41) * 9) | 0), py = y + 3 + ((hash(gx, gy, 42) * 9) | 0); R(c, px, py, 3, 2, '#9aa0a8'); R(c, px, py, 2, 1, '#c3c8ce'); }
  };
  const oldFlowers = tiles[','];
  tiles[','] = (c, x, y, gx, gy, t) => {
    tiles['.'](c, x, y, gx, gy);
    const cols = ['#ffe36e', '#ff8fb1', '#ffffff', '#b89cff'];
    for (let i = 0; i < 3; i++) {
      const fx = x + 2 + ((hash(gx, gy, i + 3) * 11) | 0), fy = y + 2 + ((hash(gx, gy, i + 7) * 11) | 0);
      const s = sway(t, gx + i, gy, 1) > 0 ? 1 : 0;
      R(c, fx, fy + 2, 1, 2, P.grassD);
      R(c, fx - 1 + s, fy, 3, 2, cols[(hash(gx, gy, i) * 4) | 0]); R(c, fx + s, fy + 1, 1, 1, '#f2a33a');
    }
  };
  void oldFlowers;
  tiles['"'] = (c, x, y, gx, gy, t) => { // tall grass that sways
    tiles['.'](c, x, y, gx, gy);
    for (let i = 0; i < 4; i++) {
      const fx = x + 1 + i * 4, s = sway(t, gx * 4 + i, gy, 1);
      R(c, fx, y + 8, 1, 6, P.grassD); R(c, fx + s, y + 5, 1, 3, P.grassD);
      R(c, fx + 1, y + 7, 1, 7, P.leafL); R(c, fx + 1 + s, y + 3, 1, 4, P.leafL);
      R(c, fx + 2, y + 9, 1, 5, P.grassD); R(c, fx + 2 + s, y + 7, 1, 2, P.grassD);
    }
  };
  const oldSand = tiles.s;
  tiles.s = (c, x, y, gx, gy) => {
    oldSand(c, x, y, gx, gy);
    if (hash(gx, gy, 20) > 0.6) { const yy = y + 4 + ((hash(gx, gy, 21) * 8) | 0); R(c, x + 2, yy, 5, 1, '#f3e1a6'); R(c, x + 7, yy + 1, 4, 1, '#f3e1a6'); }
  };
  // a dune is a mound on sand: it only fills the tile edge when the next tile is a dune too
  tiles.u = (c, x, y, gx, gy, t, m) => {
    oldSand(c, x, y, gx, gy);
    const L = !m || at(m, gx - 1, gy) === 'u', Rr = !m || at(m, gx + 1, gy) === 'u';
    const o = (hash(gx, gy) * 6) | 0;
    for (let i = 0; i < 16; i++) {
      let top = 6 + Math.round(Math.sin((i + o) / 2.6) * 2);
      if (!L && i < 4) top += (4 - i) * 2;
      if (!Rr && i > 11) top += (i - 11) * 2;
      if (top > 15) continue;
      R(c, x + i, y + top, 1, 15 - top, P.dune);
      R(c, x + i, y + top, 1, 1, '#f4cc85');
      if (i > 7) R(c, x + i, y + top + 2, 1, Math.max(0, 13 - top), P.duneD);
    }
    R(c, x + 2, y + 15, 12, 1, 'rgba(0,0,0,.08)');
  };

  /* soft, ragged edges where one kind of ground meets another (grass grows over paths, snow over grass, ...) */
  const RANK = { '.': 5, ',': 5, '"': 5, n: 6, z: 4, g: 4, s: 3, u: 3, ':': 2, o: 1, l: 1, f: 0 };
  const FAM = { '.': '.', ',': '.', '"': '.', n: 'n', z: 'z', g: 'g', s: 's', u: 's', ':': ':', o: 'o', l: 'l', f: 'f' };
  const EDGE = { '.': ['#5aa83b', '#3f8a2e'], n: ['#f4f8fb', '#c9dbe8'], z: ['#e7eef2', '#c4ced3'], g: ['#d2b36a', '#a9893f'], s: ['#e8d18a', '#c9b064'] };
  function fringe(c, x, y, gx, gy, m, own) {
    const r0 = RANK[own];
    for (const [dx, dy] of [[0, -1], [0, 1], [-1, 0], [1, 0]]) {
      const nb = at(m, gx + dx, gy + dy);
      if (nb == null || !(RANK[nb] > r0) || FAM[nb] === FAM[own]) continue;
      const col = EDGE[FAM[nb]]; if (!col) continue;
      for (let i = 0; i < 16; i += 2) {
        // the same edge gets the same raggedness from both sides
        const d = 1 + ((hash(dx ? gx * 2 + dx : gx * 32 + i, dy ? gy * 2 + dy : gy * 32 + i, 7) * 3) | 0);
        if (dy === -1) { R(c, x + i, y, 2, d, col[0]); R(c, x + i, y + d, 2, 1, col[1]); }
        if (dy === 1) { R(c, x + i, y + 16 - d, 2, d, col[0]); R(c, x + i, y + 15 - d, 2, 1, col[1]); }
        if (dx === -1) { R(c, x, y + i, d, 2, col[0]); R(c, x + d, y + i, 1, 2, col[1]); }
        if (dx === 1) { R(c, x + 16 - d, y + i, d, 2, col[0]); R(c, x + 15 - d, y + i, 1, 2, col[1]); }
      }
    }
  }
  Object.keys(RANK).forEach(k => {
    const f = tiles[k]; if (!f) return;
    tiles[k] = (c, x, y, gx, gy, t, m, base) => { f(c, x, y, gx, gy, t, m, base); if (m) fringe(c, x, y, gx, gy, m, k); };
  });

  /* ---------------- water: moving foam and a few sparkles ---------------- */
  const wet = ch => ch === undefined || '~=bBqk'.includes(ch);
  function water(c, x, y, gx, gy, t, m, col, deep) {
    R(c, x, y, T, T, col);
    t = calm ? 0 : t || 0;
    const ph = t / 450 + hash(gx, gy) * 6;
    for (let i = 0; i < 2; i++) {
      const wx = x + ((hash(gx, gy, i) * 10) | 0) + Math.round(Math.sin(ph + i) * 2);
      R(c, wx, y + 3 + i * 7, 4, 1, deep ? '#3f78c8' : P.waterL);
    }
    if (((t / 140 + hash(gx, gy, 3) * 40) | 0) % 40 === 0) R(c, x + ((hash(gx, gy, 4) * 13) | 0), y + ((hash(gx, gy, 5) * 13) | 0), 1, 1, '#ffffff');
    if (!m) return;
    const off = (t / 220) | 0;
    const side = (dx, dy) => !wet(at(m, gx + dx, gy + dy));
    const foam = (fx, fy, w, h, horiz) => {
      R(c, fx, fy, w, h, P.foam);
      for (let i = 0; i < 16; i += 4) { const k = (i + off) % 16; if (horiz) R(c, fx + k, fy + h, 2, 1, 'rgba(216,240,255,.6)'); else R(c, fx + w, fy + k, 1, 2, 'rgba(216,240,255,.6)'); }
    };
    if (side(0, -1)) foam(x, y, T, 1, true);
    if (side(0, 1)) { R(c, x, y + 14, T, 2, 'rgba(0,0,0,.12)'); R(c, x, y + 15, T, 1, P.foam); }
    if (side(-1, 0)) foam(x, y, 1, T, false);
    if (side(1, 0)) { R(c, x + 15, y, 1, T, P.foam); R(c, x + 14, y, 1, T, 'rgba(216,240,255,.5)'); }
  }
  tiles['~'] = (c, x, y, gx, gy, t, m) => water(c, x, y, gx, gy, t, m, P.water);
  tiles['='] = (c, x, y, gx, gy, t, m) => water(c, x, y, gx, gy, t, m, P.waterD, true);

  /* ---------------- trees and plants ---------------- */
  function roundTree(c, x, y, gx, gy, t) {
    const s = sway(t, gx, gy);
    shadow(c, x, y + 13, 12);
    R(c, x + 7, y + 10, 2, 5, P.trunk); R(c, x + 8, y + 10, 1, 5, '#563a22');
    const W = [6, 10, 12, 14, 14, 14, 14, 14, 12, 10, 6], OUT = '#1a4a1e';
    W.forEach((w, r) => {
      const ox = x + 8 - w / 2 + (r < 5 ? s : 0), oy = y + r;
      R(c, ox, oy, w, 1, OUT);
      if (r > 0 && r < W.length - 1) {
        R(c, ox + 1, oy, w - 2, 1, P.leaf);
        if (r >= 6) R(c, ox + w / 2, oy, w / 2 - 1, 1, P.leafD);
      }
    });
    R(c, x + 4 + s, y + 2, 4, 3, P.leafL); R(c, x + 3 + s, y + 4, 2, 2, P.leafL); R(c, x + 9 + s, y + 3, 2, 1, '#66bb6a');
    R(c, x + 6, y + 6, 2, 1, P.leafL); R(c, x + 10, y + 5, 2, 1, '#256b29'); R(c, x + 4, y + 8, 3, 1, '#256b29');
  }
  tiles.T = (c, x, y, gx, gy, t, m) => { under(c, x, y, gx, gy, m); roundTree(c, x, y, gx, gy, t); };
  tiles.P = (c, x, y, gx, gy, t, m) => { // pine
    const snowy = groundOf(m, gx, gy) === 'n' || groundOf(m, gx, gy) === 'z';
    (snowy ? tiles.n : tiles['.'])(c, x, y, gx, gy);
    shadow(c, x, y + 13, 10);
    R(c, x + 7, y + 12, 2, 4, P.trunk);
    const s = sway(t, gx, gy);
    [[1, 3, 3], [3, 5, 4], [6, 7, 4], [9, 8, 3]].forEach(([top, half, h], k) => {
      const o = k < 2 ? s : 0;
      for (let r = 0; r < h; r++) {
        const w = Math.max(1, Math.round(half * (r + 1) / h));
        R(c, x + 8 - w - 1 + o, y + top + r, w * 2 + 2, 1, '#123f22');
        R(c, x + 8 - w + o, y + top + r, w, 1, '#2f7a45'); R(c, x + 8 + o, y + top + r, w, 1, '#1f5a33');
      }
      if (snowy) R(c, x + 8 - Math.round(half / 2) + o, y + top, Math.round(half / 2) + 1, 1, P.snow);
    });
  };
  const oldPalm = tiles.p;
  tiles.p = (c, x, y, gx, gy, t, m) => { // palm with moving fronds
    if (calm) return oldPalm(c, x, y, gx, gy, t, m);
    tiles.s(c, x, y, gx, gy);
    shadow(c, x, y + 14, 8);
    for (let i = 0; i < 10; i++) R(c, x + 7 + Math.round(Math.sin(i / 4) * 2), y + 5 + i, 2, 1, i % 3 ? P.trunk : '#563a22');
    const s = sway(t, gx, gy);
    R(c, x + 2 + s, y + 3, 12, 2, P.leaf); R(c, x + 1 + s, y + 5, 3, 2, P.leaf); R(c, x + 12 + s, y + 5, 3, 2, P.leaf);
    R(c, x + 5 + s, y + 1, 6, 2, P.leafL); R(c, x + 2 + s, y + 3, 4, 1, P.leafL); R(c, x + 7, y + 5, 2, 2, '#7a4b1e');
  };
  tiles.a = (c, x, y, gx, gy, t, m) => { // acacia
    under(c, x, y, gx, gy, m);
    shadow(c, x, y + 13, 14);
    R(c, x + 7, y + 7, 2, 7, '#5a3a22'); R(c, x + 5, y + 6, 2, 2, '#5a3a22'); R(c, x + 9, y + 6, 2, 2, '#5a3a22');
    const s = sway(t, gx, gy);
    R(c, x - 1 + s, y + 2, 18, 5, '#2f4d1a');
    R(c, x + s, y + 3, 16, 3, '#4f7a2a'); R(c, x + 2 + s, y + 1, 12, 2, '#2f4d1a'); R(c, x + 3 + s, y + 2, 10, 1, '#6a9a38');
    R(c, x + 1 + s, y + 5, 14, 1, '#3c5e1f');
  };
  const oldJungle = tiles.j;
  tiles.j = (c, x, y, gx, gy, t) => {
    oldJungle(c, x, y, gx, gy);
    const s = sway(t, gx, gy);
    R(c, x + 3 + s, y + 2, 2, 1, '#5aa84a'); R(c, x + 10 + s, y + 6, 2, 1, '#5aa84a');
    if (hash(gx, gy, 9) > 0.7) { R(c, x + 4, y + 8, 2, 2, '#e8506a'); R(c, x + 5, y + 8, 1, 1, '#ffe36e'); }
  };

  /* ---------------- stone ---------------- */
  function mountain(c, x, y, gx, gy, m, snowy) {
    const g = groundOf(m, gx, gy);
    tiles[g === 'n' || g === 's' || g === 'g' || g === 'z' ? g : '.'](c, x, y, gx, gy);
    const OUT = '#3b3f47';
    for (let r = 0; r < 15; r++) {
      const half = Math.min(8, Math.round((r + 1.5) * 0.56));
      R(c, x + 8 - half - 0, y + 1 + r, half * 2, 1, OUT);
      if (half > 1) { R(c, x + 9 - half, y + 1 + r, half - 1, 1, P.stone); R(c, x + 8, y + 1 + r, half - 1, 1, P.stoneD); }
    }
    R(c, x + 6, y + 6, 2, 1, P.stoneL); R(c, x + 5, y + 9, 2, 1, P.stoneL); R(c, x + 4, y + 12, 2, 1, P.stoneL);
    R(c, x + 9, y + 8, 1, 3, '#4f535b'); R(c, x + 11, y + 12, 1, 2, '#4f535b');
    if (snowy) {
      R(c, x + 7, y + 1, 2, 1, P.snow); R(c, x + 6, y + 2, 4, 2, P.snow); R(c, x + 5, y + 4, 6, 1, P.snow);
      R(c, x + 5, y + 5, 2, 1, P.snow); R(c, x + 8, y + 5, 2, 1, P.snowD); R(c, x + 9, y + 3, 1, 2, P.snowD);
    }
  }
  tiles.M = (c, x, y, gx, gy, t, m) => mountain(c, x, y, gx, gy, m, false);
  tiles.A = (c, x, y, gx, gy, t, m) => mountain(c, x, y, gx, gy, m, true);
  tiles.r = (c, x, y, gx, gy, t, m) => {
    under(c, x, y, gx, gy, m);
    shadow(c, x, y + 13, 12);
    const W = [6, 10, 12, 14, 14, 14, 12, 10, 6], o = (hash(gx, gy, 2) * 3) | 0;
    W.forEach((w, r) => {
      const ox = x + 8 - w / 2, oy = y + 4 + r;
      R(c, ox, oy, w, 1, '#3b3f47');
      if (r > 0 && r < W.length - 1) { R(c, ox + 1, oy, w - 2, 1, P.stone); R(c, ox + w / 2 + 1, oy, w / 2 - 2, 1, P.stoneD); }
    });
    R(c, x + 5, y + 5, 3, 2, P.stoneL); R(c, x + 4, y + 7, 1, 2, P.stoneL);
    R(c, x + 9 + o, y + 7, 1, 3, '#4f535b'); R(c, x + 10 + o, y + 10, 1, 1, '#4f535b');
  };

  /* ---------------- buildings in the style of each realm ---------------- */
  const isRoof = ch => ch === 'R' || ch === 'Q';
  WW.hasChimney = (m, gx, gy) => isRoof(at(m, gx, gy)) && !isRoof(at(m, gx, gy - 1)) && isRoof(at(m, gx - 1, gy)) && hash(gx, gy, 5) > 0.55 && ![4, 7].includes(WW.style.realm);
  function roof(c, x, y, gx, gy, t, m, blue) {
    const realm = WW.style.realm;
    const top = m ? !isRoof(at(m, gx, gy - 1)) : true, bot = m ? !isRoof(at(m, gx, gy + 1)) : true;
    const lft = m ? !isRoof(at(m, gx - 1, gy)) : true, rgt = m ? !isRoof(at(m, gx + 1, gy)) : true;
    let base, line, light;
    if (realm === 4 && !blue) { // thatch
      base = '#c9a24a'; line = '#9a772c'; light = '#e3c47a';
      R(c, x, y, T, T, base);
      for (let i = 0; i < 16; i += 2) { const h = (hash(gx * 16 + i, gy, 3) * 4) | 0; R(c, x + i, y + 2 + h, 1, 5, line); R(c, x + i + 1, y + 8 + h, 1, 5, light); }
      if (bot) for (let i = 0; i < 16; i += 2) R(c, x + i, y + 14 + (i % 4 ? 1 : 0), 2, 2 - (i % 4 ? 1 : 0), line);
    } else if (realm === 7) { // dark tiled roof with ribs and curled corners
      base = blue ? '#3d5468' : '#4f4a52'; line = blue ? '#2a3a4a' : '#353139'; light = blue ? '#5a7590' : '#6d6874';
      R(c, x, y, T, T, base);
      for (let i = 1; i < 16; i += 3) R(c, x + i, y, 1, T, line);
      R(c, x, y + 1, T, 1, light);
    } else if (realm === 6 && !blue) { // terracotta waves
      base = '#c8643a'; line = '#9a4526'; light = '#e08a5a';
      R(c, x, y, T, T, base);
      for (let r = 0; r < 4; r++) for (let i = 0; i < 16; i += 4) { R(c, x + i, y + r * 4 + 3, 3, 1, line); R(c, x + i + 1, y + r * 4 + 1, 2, 1, light); }
    } else {
      base = blue ? '#3c6fb4' : P.roof; line = blue ? '#2a4f84' : P.roofD; light = blue ? '#5b8fd0' : '#d9574a';
      R(c, x, y, T, T, base);
      for (let r = 0; r < 4; r++) R(c, x, y + r * 4 + 3, T, 1, line);
      for (let r = 0; r < 4; r++) R(c, x + (r % 2 ? 4 : 10), y + r * 4, 1, 3, line);
      for (let r = 0; r < 4; r++) R(c, x, y + r * 4, T, 1, light);
    }
    if (top) R(c, x, y, T, 2, line);
    if (bot) { R(c, x, y + 14, T, 1, line); R(c, x, y + 15, T, 1, '#22202e'); }
    if (lft) R(c, x, y, 1, T, line);
    if (rgt) R(c, x + 15, y, 1, T, line);
    if (realm === 7 && bot) { if (lft) R(c, x, y + 12, 2, 2, '#22202e'); if (rgt) R(c, x + 14, y + 12, 2, 2, '#22202e'); }
    if (realm === 7 && top) { if (lft) R(c, x + 1, y + 2, 2, 1, '#22202e'); if (rgt) R(c, x + 13, y + 2, 2, 1, '#22202e'); }
    if (m && WW.hasChimney(m, gx, gy)) { R(c, x + 9, y, 4, 7, '#22202e'); R(c, x + 10, y, 2, 6, '#8a5a3a'); R(c, x + 9, y, 4, 1, '#5e636b'); }
  }
  tiles.R = (c, x, y, gx, gy, t, m) => roof(c, x, y, gx, gy, t, m, false);
  tiles.Q = (c, x, y, gx, gy, t, m) => roof(c, x, y, gx, gy, t, m, true);

  function wallLook() {
    const realm = WW.style.realm;
    if (realm === 3) return { wall: '#efe3c8', dark: '#cbb790', beam: '#5a3d24' };
    if (realm === 4) return { wall: '#c9925a', dark: '#a8743f', beam: null, mud: true };
    if (realm === 7) return { wall: '#efe6cf', dark: '#c9bd9c', beam: '#7a4a2a', paper: true };
    if (realm === 5) return { wall: '#ead2a0', dark: '#cbb07a', beam: null };
    return { wall: P.wall, dark: P.wallD, beam: null };
  }
  function windowAt(c, x, y, look) {
    const lit = WW.style.night;
    if (look.mud) { R(c, x + 5, y + 4, 6, 6, '#3a2416'); if (lit) R(c, x + 6, y + 5, 4, 4, '#ffcf5a'); return; }
    R(c, x + 4, y + 4, 8, 7, '#22202e');
    R(c, x + 5, y + 5, 6, 5, lit ? '#ffd76a' : look.paper ? '#f6efda' : '#9fd3ff');
    if (!lit && !look.paper) R(c, x + 5, y + 5, 2, 1, '#e3f4ff');
    R(c, x + 7, y + 5, 1, 5, '#22202e'); R(c, x + 5, y + 7, 6, 1, '#22202e');
    if (look.paper) { R(c, x + 9, y + 5, 1, 5, '#22202e'); }
    if (WW.style.realm === 6 || WW.style.realm === 2) { R(c, x + 2, y + 4, 2, 7, '#2a8a6a'); R(c, x + 12, y + 4, 2, 7, '#2a8a6a'); }
  }
  tiles.h = (c, x, y, gx, gy, t, m) => {
    const L = wallLook();
    R(c, x, y, T, T, L.wall); R(c, x, y + 13, T, 3, L.dark); R(c, x, y + 15, T, 1, 'rgba(0,0,0,.2)');
    if (L.beam) { R(c, x, y, T, 1, L.beam); R(c, x, y, 1, 13, L.beam); R(c, x + 15, y, 1, 13, L.beam); if (WW.style.realm === 3) { R(c, x + 1, y + 12, 3, 1, L.beam); R(c, x + 12, y + 12, 3, 1, L.beam); } }
    R(c, x, y, T, 1, 'rgba(0,0,0,.25)'); // the roof's shadow
    windowAt(c, x, y, L);
  };
  tiles.d = (c, x, y, gx, gy) => {
    const L = wallLook();
    R(c, x, y, T, T, L.wall); R(c, x, y + 13, T, 3, L.dark);
    if (L.beam) { R(c, x, y, T, 1, L.beam); R(c, x, y, 1, 13, L.beam); R(c, x + 15, y, 1, 13, L.beam); }
    R(c, x, y, T, 1, 'rgba(0,0,0,.25)');
    R(c, x + 3, y + 2, 10, 14, '#22202e');
    R(c, x + 4, y + 3, 8, 13, L.mud ? '#6d3f22' : L.paper ? '#a0643a' : P.wood);
    R(c, x + 7, y + 3, 1, 13, P.woodD); R(c, x + 4, y + 3, 8, 1, 'rgba(255,255,255,.15)');
    R(c, x + 10, y + 9, 1, 2, P.gold);
    R(c, x + 2, y + 15, 12, 1, '#a89a80');
  };
  const oldJ = tiles.J;
  tiles.J = (c, x, y, gx, gy, t, m) => {
    oldJ(c, x, y, gx, gy, t, m);
    R(c, x, y + 15, T, 1, 'rgba(0,0,0,.2)');
    if (WW.style.night) R(c, x + 10, y + 5, 3, 3, '#ffd76a');
  };
  const oldU = tiles.U;
  tiles.U = (c, x, y, gx, gy, t, m) => {
    oldU(c, x, y, gx, gy, t, m);
    R(c, x, y, 1, T, '#4f5d70'); R(c, x + 15, y, 1, T, '#4f5d70');
    if (m && at(m, gx, gy - 1) !== 'U') { R(c, x, y, T, 2, '#4f5d70'); R(c, x + 6, y - 0, 1, 2, '#e04848'); }
    if (WW.style.night) for (let r = 0; r < 5; r++) for (let k = 0; k < 3; k++) if (hash(gx + k, r + gy * 7) > 0.45) R(c, x + 3 + k * 4, y + 2 + r * 3, 2, 2, '#ffd76a');
  };

  /* ---------------- things the tools change (tools.js) ---------------- */
  tiles['%'] = (c, x, y, gx, gy, t, m) => { // a stump where a tree was chopped (it grows back)
    under(c, x, y, gx, gy, m); shadow(c, x, y + 11, 8);
    R(c, x + 4, y + 8, 8, 5, P.k); R(c, x + 5, y + 8, 6, 4, P.trunk); R(c, x + 5, y + 8, 6, 1, '#d9b27a'); R(c, x + 7, y + 9, 2, 1, '#a8814f');
    R(c, x + 10, y + 5, 2, 3, P.leafL); R(c, x + 11, y + 4, 1, 1, P.leafL);
  };
  tiles.Y = (c, x, y, gx, gy, t, m) => { // a small bush (the axe clears it)
    under(c, x, y, gx, gy, m); shadow(c, x, y + 12, 12);
    const s = calm ? 0 : Math.round(Math.sin(t / 900 + gx) * 0.6);
    R(c, x + 2 + s, y + 5, 12, 8, P.k); R(c, x + 3 + s, y + 4, 10, 9, '#2e8b3a'); R(c, x + 4 + s, y + 5, 4, 3, '#5cc46a');
    R(c, x + 9 + s, y + 9, 3, 2, '#1f6a2a'); R(c, x + 6 + s, y + 7, 1, 1, '#e04848'); R(c, x + 10 + s, y + 6, 1, 1, '#e04848');
  };
  tiles.Z = (c, x, y, gx, gy, t, m) => { // a broken bridge: a gap, two loose planks and a rope
    water(c, x, y, gx, gy, t, m, P.water);
    R(c, x, y + 2, 4, 12, P.k); R(c, x, y + 3, 3, 10, '#a0703f');
    R(c, x + 6, y + 6, 4, 2, '#8b5a2b'); R(c, x + 11, y + 10, 3, 2, '#8b5a2b');
    R(c, x, y + 2, T, 1, '#5b3a1e'); R(c, x + 5, y + 3, 6, 1, '#5b3a1e');
  };

  /* ---------------- people ---------------- */
  // hair styles made from the base person: change a few pixels
  const edit = (rows, list) => { const out = rows.map(r => r.split('')); list.forEach(([r, k, ch]) => (out[r][k] = ch)); return out.map(r => r.join('')); };
  SPR.npcLong = edit(SPR.npc, [
    [6, 2, 'k'], [6, 3, 'h'], [6, 12, 'h'], [6, 13, 'k'], [7, 2, 'k'], [7, 3, 'h'], [7, 12, 'h'], [7, 13, 'k'],
    [8, 2, 'k'], [8, 3, 'h'], [8, 4, 'h'], [8, 11, 'h'], [8, 12, 'h'], [8, 13, 'k'], [9, 2, 'k'], [9, 3, 'h'], [9, 12, 'h'], [9, 13, 'k']]);
  SPR.npcBun = edit(SPR.npc, [[0, 6, 'k'], [0, 7, 'k'], [0, 8, 'k'], [0, 9, 'k'], [1, 5, 'k'], [1, 6, 'h'], [1, 7, 'h'], [1, 8, 'h'], [1, 9, 'h'], [1, 10, 'k']]);
  SPR.npcHat = edit(SPR.npc, [
    [1, 5, 'k'], [1, 6, 'k'], [1, 7, 'k'], [1, 8, 'k'], [1, 9, 'k'], [1, 10, 'k'],
    [2, 4, 'k'], [2, 5, 'H'], [2, 6, 'H'], [2, 7, 'H'], [2, 8, 'H'], [2, 9, 'H'], [2, 10, 'H'], [2, 11, 'k'],
    [3, 4, 'k'], [3, 5, 'H'], [3, 6, 'b'], [3, 7, 'b'], [3, 8, 'b'], [3, 9, 'b'], [3, 10, 'H'], [3, 11, 'k'],
    [4, 1, 'k'], [4, 2, 'k'], [4, 3, 'k'], [4, 4, 'k'], [4, 5, 'k'], [4, 6, 'k'], [4, 7, 'k'], [4, 8, 'k'], [4, 9, 'k'], [4, 10, 'k'], [4, 11, 'k'], [4, 12, 'k'], [4, 13, 'k'], [4, 14, 'k']]);
  const STYLES = ['npc', 'npcLong', 'npcBun', 'npc', 'npcLong'];
  WW.personSprite = p => {
    const look = p.look || {};
    if (look.hat) return 'npcHat';
    if (look.style) return { short: 'npc', long: 'npcLong', bun: 'npcBun' }[look.style] || 'npc';
    const name = (p.name && (p.name.en || p.name)) || '';
    let h = 0; for (const ch of String(name)) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
    return STYLES[h % STYLES.length];
  };
  // a person standing on the map: shadow, hair style, and a blink every few seconds
  WW.drawPerson = (c, p, x, y, t, phase = 0) => {
    shadow(c, x, y + 15, 10);
    const pal = WW.lookPal(p.look);
    if (!calm && (((t || 0) + phase * 977) % 3700) < 130) pal.e = pal.s;
    WW.sprite(c, WW.personSprite(p), x, y, { pal });
  };
  WW.shadow = shadow;
})();
