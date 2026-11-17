/* WORLDWALKER engine · the HD look (HistoryWalker turns it on with `hd: true` in its course file).
   The map canvas has 4 real pixels for every old art pixel (WW.HD), so the ground can be drawn twice as fine:
   - every ground is a texture worked out pixel by pixel from smooth noise (grass, sand, dirt paths, paving, snow…),
     and where two grounds meet, the higher one spills over the edge in a soft, ragged line (grass over sand, sand
     into the water), the same on both sides of the edge
   - water gets deeper and darker away from the shore, with moving glints and foam along the beach
   - trees are taller and rounder, with soft shadows; houses and walls cast a shadow to the south-east
   - the whole picture gets warm afternoon light and a soft vignette
   Each ground tile is worked out once and kept (per map square), so a frame only copies small pictures.
   Without `hd`, nothing here runs and the other games look exactly as before. */
(function () {
  if (!(window.WW_COURSE && window.WW_COURSE.hd)) return;
  const { tiles, hash } = WW;
  const T = 16, A = 32; // a tile is 16 map units and 32 art pixels
  const calm = !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);

  /* ---------------- smooth noise (the same at every edge, so tiles join without seams) ---------------- */
  const h2 = (x, y, s) => hash(x, y, s);
  function vnoise(X, Y, cell, s) {
    const fx = X / cell, fy = Y / cell, ix = Math.floor(fx), iy = Math.floor(fy), tx = fx - ix, ty = fy - iy;
    const u = tx * tx * (3 - 2 * tx), v = ty * ty * (3 - 2 * ty);
    const a = h2(ix, iy, s), b = h2(ix + 1, iy, s), c = h2(ix, iy + 1, s), d = h2(ix + 1, iy + 1, s);
    return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
  }
  const fbm = (X, Y, s) => vnoise(X, Y, 16, s) * 0.55 + vnoise(X, Y, 7, s + 3) * 0.3 + vnoise(X, Y, 3, s + 5) * 0.15;
  const hex = c => [parseInt(c.slice(1, 3), 16), parseInt(c.slice(3, 5), 16), parseInt(c.slice(5, 7), 16)];
  const ramp = cols => cols.map(hex);
  const pick = (r, v) => r[Math.max(0, Math.min(r.length - 1, Math.floor(v * r.length)))];

  /* ---------------- the grounds ---------------- */
  // family: which ground a map letter stands on. rank: who spills over whom at an edge (higher wins)
  const FAM = { '.': '.', ',': '.', '"': '.', s: 's', u: 's', p: 's', c: 's', ':': ':', l: 'l', g: 'g', z: 'z', n: 'n', i: 'i', o: 'o', f: 'f', '~': '~', '=': '=', k: '~', b: '~', B: '~', Z: '~', q: 'o' };
  const RANK = { '=': 0, '~': 0.5, o: 1, f: 1, l: 1.5, ':': 2, s: 3, g: 4, z: 4.5, '.': 5, n: 6, i: 6.5 };
  const GROUND = new Set(Object.keys(FAM).filter(k => !'pcbBZkq'.includes(k)));
  const R_ = {
    '.': ramp(['#3d7434', '#47823a', '#528f40', '#5d9b46', '#6aa64e', '#79b058']),
    s: ramp(['#d8bd7f', '#e1c88b', '#e9d397', '#f0dca4', '#f6e5b5']),
    ':': ramp(['#9c7148', '#a97c51', '#b4875a', '#bf9364', '#c99e6e']),
    l: ramp(['#a99e8a', '#b6ab96', '#c2b8a3', '#ccc2ae']),
    g: ramp(['#a88c4c', '#b59856', '#c1a462', '#ccb06e']),
    z: ramp(['#b9c3bd', '#c8d1cb', '#d6ddd8', '#e3e9e4']),
    n: ramp(['#cfdcea', '#dde7f1', '#e9f0f7', '#f5f9fc']),
    i: ramp(['#a9d8ec', '#b9e2f2', '#cbeaf6', '#dff3fa']),
    o: ramp(['#5c3a22', '#66412a', '#704830', '#7a5036']),
    f: ramp(['#3a3550', '#423c5b', '#4a4466', '#524c70']),
    '~': ramp(['#2a73c4', '#2f7fd1', '#3a8bd9', '#4a9be2', '#5aaee9', '#6cc2ef']),
    '=': ramp(['#18487f', '#1c5592', '#21609f', '#2a6dac']),
    water: ramp(['#174579', '#1b5290', '#205f9f', '#276caf', '#2f7cc4', '#3a8bd2', '#4a9bdd', '#5aace6', '#6cbdec'])
  };
  // the colour of one art pixel of a ground at world art-pixel (X, Y)
  function texel(f, X, Y, depth) {
    let v = fbm(X, Y, 11), j = (h2(X, Y, 77) - 0.5) * 0.18; // a little grain
    switch (f) {
      case '.': { const patch = vnoise(X, Y, 40, 19); return pick(R_['.'], v * 0.55 + patch * 0.45 + j * 0.8); }
      case 's': { const rip = Math.sin((X * 0.35 + Y * 0.9) + fbm(X, Y, 4) * 6) * 0.08; return pick(R_.s, v * 0.8 + rip + j * 0.6 + 0.1); }
      case ':': return pick(R_[':'], v * 0.85 + j + 0.05);
      case 'l': { // flagstones: an uneven grid of stones with dark joints
        const cx = Math.floor((X + Math.floor(Y / 12) * 5) / 11), cy = Math.floor(Y / 12);
        const ex = (X + Math.floor(Y / 12) * 5) % 11, ey = Y % 12;
        if (ex === 0 || ey === 0) return hex('#8a806e');
        const tone = h2(cx, cy, 31);
        if (ex === 1 || ey === 1) return pick(R_.l, tone * 0.5 + 0.5);
        return pick(R_.l, tone * 0.6 + v * 0.3 + j * 0.5);
      }
      case 'g': return pick(R_.g, v * 0.85 + j + 0.05);
      case 'z': return pick(R_.z, v * 0.85 + j * 0.6 + 0.05);
      case 'n': return pick(R_.n, v * 0.8 + j * 0.4 + 0.15);
      case 'i': { const crack = Math.abs(Math.sin(X * 0.21 + Y * 0.13 + fbm(X, Y, 9) * 5)) < 0.04; return crack ? hex('#ffffff') : pick(R_.i, v * 0.9 + j * 0.3); }
      case 'o': return pick(R_.o, (Y % 8 < 2 ? 0.1 : 0.55) + v * 0.4 + j);
      case 'f': { const ex = X % 16, ey = (Y + (Math.floor(X / 16) % 2) * 8) % 16; if (ex === 0 || ey === 0) return hex('#2b2740'); return pick(R_.f, v * 0.7 + h2(Math.floor(X / 16), Math.floor((Y + (Math.floor(X / 16) % 2) * 8) / 16), 4) * 0.3); }
      case '~': case '=': { const d = Math.min(1, depth + (f === '=' ? 0.12 : 0)); return pick(R_.water, 1 - d * 0.9 + (v - 0.5) * 0.18 + j * 0.2); } // one smooth ramp: darker the farther from shore
    }
    return [255, 0, 255];
  }
  const EDGE_DARK = { '.': '#3f7a30', s: '#c7a96a', ':': '#8a6240', g: '#97793e', z: '#a9b3ad', n: '#b9c9da', l: '#7d7362', i: '#8fc6dd', o: '#4a2e1a', f: '#2b2740' };

  /* ---------------- which ground is where ---------------- */
  let MAP = null, depthCache = null;
  const at = (gx, gy) => (MAP ? (MAP[gy] || '')[gx] : undefined);
  function famAt(gx, gy) {
    const ch = at(gx, gy);
    if (ch === undefined) return null;
    if (FAM[ch]) return FAM[ch];
    const g = WW.groundAt ? WW.groundAt(MAP, gx, gy) : '.';
    return FAM[g] || '.';
  }
  // how far (in tiles, 0..3) a water square is from land: deeper water is darker
  const landCache = new Map();
  function landSet(gx, gy) { const k = gx + ',' + gy; if (landCache.has(k)) return landCache.get(k); const f = famAt(gx, gy); const v = !!f && f !== '~' && f !== '='; landCache.set(k, v); return v; }
  function depthAt(gx, gy) {
    const k = gx + ',' + gy;
    if (depthCache.has(k)) return depthCache.get(k);
    let d = 3;
    for (let r = 1; r <= 3 && d === 3; r++)
      for (let dy = -r; dy <= r; dy++) for (let dx = -r; dx <= r; dx++) {
        if (Math.max(Math.abs(dx), Math.abs(dy)) !== r) continue;
        const f = famAt(gx + dx, gy + dy);
        if (f && f !== '~' && f !== '=') { d = Math.min(d, r - 1 + Math.hypot(dx, dy) / r * 0.5); }
      }
    depthCache.set(k, d); return d;
  }

  /* ---------------- one ground square, worked out once ---------------- */
  const cache = new Map();
  const mk = () => { const cv = document.createElement('canvas'); cv.width = A; cv.height = A; return cv; };
  function groundSquare(gx, gy) {
    const own = famAt(gx, gy) || '.', ch = at(gx, gy);
    const key = gx + ',' + gy + ',' + ch;
    let cv = cache.get(key); if (cv) return cv;
    cv = mk(); const c = cv.getContext('2d'), img = c.createImageData(A, A), d = img.data;
    // the neighbours that rank higher spill over this square's edges
    const nb = {};
    for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) if (dx || dy) nb[dx + ',' + dy] = famAt(gx + dx, gy + dy) || own;
    const wet = own === '~' || own === '=';
    const dHere = wet ? depthAt(gx, gy) : 0;
    const dN = wet ? [depthAt(gx, gy - 1), depthAt(gx + 1, gy), depthAt(gx, gy + 1), depthAt(gx - 1, gy)] : null;
    for (let py = 0; py < A; py++) for (let px = 0; px < A; px++) {
      const X = gx * A + px, Y = gy * A + py;
      let f = own, best = RANK[own] ?? 5, edge = false;
      // edge depth along each side: the same numbers from both sides of the edge (keyed on the edge's own position)
      const tryCover = (fam, inside, dist) => {
        if (!fam || (RANK[fam] ?? 5) <= best || fam === own) return;
        if (dist < inside) { best = RANK[fam]; f = fam; edge = inside - dist < 1.2; }
      };
      const wN = 2.5 + vnoise(X, gy * A, 5, 21) * 6, wS = 2.5 + vnoise(X, (gy + 1) * A, 5, 21) * 6;
      const wW = 2.5 + vnoise(gx * A, Y, 5, 23) * 6, wE = 2.5 + vnoise((gx + 1) * A, Y, 5, 23) * 6;
      tryCover(nb['0,-1'], wN, py); tryCover(nb['0,1'], wS, A - 1 - py);
      tryCover(nb['-1,0'], wW, px); tryCover(nb['1,0'], wE, A - 1 - px);
      // corners: a round bite when only the diagonal neighbour ranks higher
      const corner = (k, cx, cy) => { const r = 3 + vnoise(cx + gx * A, cy + gy * A, 4, 29) * 5; tryCover(nb[k], r, Math.hypot(px - cx, py - cy)); };
      corner('-1,-1', 0, 0); corner('1,-1', A - 1, 0); corner('-1,1', 0, A - 1); corner('1,1', A - 1, A - 1);
      let depth = 0;
      if (f === '~' || f === '=') { // how far this very pixel is from the shore (round, not square), with a little wobble
        const fx = gx + (px + 0.5) / A, fy = gy + (py + 0.5) / A;
        let dmin = 3.2;
        for (let ty = gy - 3; ty <= gy + 3; ty++) for (let tx = gx - 3; tx <= gx + 3; tx++) {
          if (!landSet(tx, ty)) continue;
          const dx = Math.max(tx - fx, 0, fx - (tx + 1)), dy = Math.max(ty - fy, 0, fy - (ty + 1)), d = Math.hypot(dx, dy);
          if (d < dmin) dmin = d;
        }
        depth = Math.min(1, (dmin + (vnoise(X, Y, 20, 61) - 0.5) * 0.7) / 2.6);
      }
      let col = texel(f, X, Y, depth);
      if (edge && EDGE_DARK[f]) col = hex(EDGE_DARK[f]);
      // land next to water: a wet, darker rim and a line of foam on the water side
      if (!edge && (f === '~' || f === '=') && own !== f) col = col;
      const i = (py * A + px) * 4; d[i] = col[0]; d[i + 1] = col[1]; d[i + 2] = col[2]; d[i + 3] = 255;
    }
    c.putImageData(img, 0, 0);
    decorate(c, own, ch, gx, gy);
    cache.set(key, cv); return cv;
  }
  // small things on the ground: tufts, flowers, pebbles, shells (only on this square's own ground)
  function decorate(c, own, ch, gx, gy) {
    const P = (x, y, w, h, col) => { c.fillStyle = col; c.fillRect(x, y, w, h); };
    const r = i => hash(gx, gy, 100 + i);
    const inside = (x, y) => x > 5 && y > 5 && x < A - 6 && y < A - 6;
    if (own === '.') {
      const n = 4 + ((r(0) * 4) | 0);
      for (let i = 0; i < n; i++) { // a tuft: three blades, dark at the root, light at the tips
        const x = 4 + ((r(i + 1) * 23) | 0), y = 6 + ((r(i + 11) * 21) | 0);
        if (!inside(x, y)) continue;
        P(x, y, 1, 3, '#3f7a30'); P(x + 2, y - 1, 1, 4, '#3f7a30'); P(x + 4, y, 1, 3, '#3f7a30');
        P(x, y - 1, 1, 1, '#8fcb63'); P(x + 2, y - 2, 1, 1, '#9ad46c'); P(x + 4, y - 1, 1, 1, '#8fcb63');
      }
      if (r(30) > 0.94) { const x = 8 + ((r(31) * 14) | 0), y = 8 + ((r(32) * 14) | 0); P(x, y + 1, 4, 2, '#7d838c'); P(x + 1, y, 3, 2, '#a3a9b1'); P(x + 1, y, 1, 1, '#d0d4d9'); }
    }
    if (ch === ',') { // flowers: little five-dot blossoms with a gold heart
      const cols = [['#fff1a8', '#ffd84d'], ['#ffb3c7', '#ff7aa2'], ['#ffffff', '#e8e8f0'], ['#cdb8ff', '#a088f0'], ['#ffc48a', '#ff9a4a']];
      for (let i = 0; i < 5; i++) {
        const x = 4 + ((r(i + 40) * 22) | 0), y = 4 + ((r(i + 50) * 22) | 0), [l, k] = cols[(r(i + 60) * cols.length) | 0];
        P(x + 1, y + 3, 1, 3, '#3f7a30');
        P(x + 1, y, 1, 1, l); P(x, y + 1, 1, 1, l); P(x + 2, y + 1, 1, 1, l); P(x + 1, y + 2, 1, 1, k); P(x + 1, y + 1, 1, 1, '#ffcc33');
      }
    }
    if (own === 's' && ch !== 'u') {
      if (r(70) > 0.7) { const x = 6 + ((r(71) * 18) | 0), y = 6 + ((r(72) * 18) | 0); P(x, y, 3, 2, '#fbeee0'); P(x + 1, y, 1, 1, '#f2c9b5'); } // a shell
      for (let i = 0; i < 3; i++) { const x = 3 + ((r(i + 80) * 26) | 0), y = 3 + ((r(i + 90) * 26) | 0); P(x, y, 1, 1, '#c9ad73'); }
    }
    if (ch === 'u') { // a dune: a lit ridge and a soft shadow on its lee side
      for (let x = 0; x < A; x++) { const y = 12 + Math.round(Math.sin((x + gx * A) / 9) * 4); P(x, y, 1, 1, '#fff2c8'); c.fillStyle = 'rgba(160,110,40,.18)'; c.fillRect(x, y + 1, 1, A - y - 1); }
    }
    if (own === ':') for (let i = 0; i < 4; i++) { const x = 4 + ((r(i + 110) * 24) | 0), y = 4 + ((r(i + 120) * 24) | 0); P(x, y + 1, 3, 1, '#7e5a39'); P(x, y, 3, 1, '#d8b282'); }
    if (own === 'g') for (let i = 0; i < 3; i++) { const x = 4 + ((r(i + 130) * 22) | 0), y = 8 + ((r(i + 140) * 18) | 0); if (!inside(x, y)) continue; P(x, y, 1, 4, '#8f733a'); P(x + 2, y - 1, 1, 5, '#dcc27a'); P(x + 4, y + 1, 1, 3, '#8f733a'); }
    if (ch === '"') { // tall grass: a thick clump of blades (it sways in the frame, see tallGrass)
      // drawn live
    }
  }

  /* ---------------- water that moves ---------------- */
  function waterLive(c, x, y, gx, gy, t) {
    if (calm) return;
    const own = famAt(gx, gy); if (own !== '~' && own !== '=') return;
    // two slow glints that drift sideways
    for (let i = 0; i < 2; i++) {
      const ph = t / (1400 + i * 300) + hash(gx, gy, i + 3) * 6.28;
      const gxp = x + 2 + ((hash(gx, gy, i) * 9) | 0) + Math.sin(ph) * 2.5, gyp = y + 3 + i * 7 + ((hash(gx, gy, i + 7) * 3) | 0);
      const a = (Math.sin(ph * 1.7) + 1) / 2;
      c.fillStyle = `rgba(220,245,255,${0.15 + a * 0.35})`; c.fillRect(gxp, gyp, 3 + a * 2, 0.5);
    }
    // foam along the shore: a bright line that breathes in and out
    const land = (dx, dy) => { const f = famAt(gx + dx, gy + dy); return f && f !== '~' && f !== '='; };
    const k = (Math.sin(t / 700 + gx * 0.7 + gy * 0.3) + 1) / 2;
    c.fillStyle = `rgba(240,250,255,${0.35 + k * 0.4})`;
    const off = 2.6 + k * 1.2; // just past the ragged sand line
    if (land(0, -1)) for (let i = 0; i < 16; i += 1) c.fillRect(x + i, y + off + Math.sin((gx * 16 + i) / 3 + t / 900) * 0.5, 1, 0.5);
    if (land(0, 1)) for (let i = 0; i < 16; i += 1) c.fillRect(x + i, y + 16 - off - 0.5 + Math.sin((gx * 16 + i) / 3 + t / 900) * 0.5, 1, 0.5);
    if (land(-1, 0)) for (let i = 0; i < 16; i += 1) c.fillRect(x + off + Math.sin((gy * 16 + i) / 3 + t / 900) * 0.5, y + i, 0.5, 1);
    if (land(1, 0)) for (let i = 0; i < 16; i += 1) c.fillRect(x + 16 - off - 0.5 + Math.sin((gy * 16 + i) / 3 + t / 900) * 0.5, y + i, 0.5, 1);
  }

  /* ---------------- tall grass that sways ---------------- */
  function tallGrass(c, x, y, gx, gy, t) {
    for (let i = 0; i < 7; i++) {
      const bx = x + 1 + i * 2.2 + hash(gx, gy, i) * 0.8, s = calm ? 0 : Math.sin(t / 800 + gx * 0.8 + i * 0.6) * 0.8;
      const hgt = 7 + hash(gx, gy, i + 20) * 5;
      c.fillStyle = '#356b28'; c.fillRect(bx, y + 15 - hgt * 0.6, 0.5, hgt * 0.6);
      c.fillStyle = i % 2 ? '#5fa344' : '#4c8a39';
      c.beginPath(); c.moveTo(bx - 0.5, y + 15.5); c.lineTo(bx + 1, y + 15.5); c.lineTo(bx + 0.5 + s, y + 15.5 - hgt); c.fill();
      c.fillStyle = '#9ad46c'; c.fillRect(bx + s * 0.9, y + 15.5 - hgt, 0.5, 1.5);
    }
  }

  /* ---------------- trees ---------------- */
  const treeCache = new Map();
  function blob(c, cx, cy, rx, ry, cols, seed, light) {
    // a leafy ball: rings of shade, lit from the top-left, with a few leaf specks
    for (let y = -ry; y <= ry; y++) for (let x = -rx; x <= rx; x++) {
      const dd = (x * x) / (rx * rx) + (y * y) / (ry * ry), wob = (hash(x + seed, y, 9) - 0.5) * 0.25;
      if (dd + wob > 1) continue;
      const l = (-x * 0.5 - y * 0.8) / Math.max(rx, ry) * 0.5 + 0.5 - dd * 0.25 + (hash(x, y + seed, 3) - 0.5) * 0.2 + (light || 0);
      c.fillStyle = cols[Math.max(0, Math.min(cols.length - 1, Math.floor(l * cols.length)))];
      c.fillRect(cx + x, cy + y, 1, 1);
    }
  }
  const LEAF = ['#1e4f24', '#285f2b', '#2f7232', '#3b8a3b', '#4ea347', '#6abf5a'];
  function treePic(kind, v) {
    const k = kind + v; let cv = treeCache.get(k); if (cv) return cv;
    cv = document.createElement('canvas'); cv.width = 40; cv.height = 48; const c = cv.getContext('2d');
    const P = (x, y, w, h, col) => { c.fillStyle = col; c.fillRect(x, y, w, h); };
    if (kind === 'T') { // a round broadleaf tree: trunk, three leafy balls
      P(18, 30, 5, 14, '#5a3a22'); P(18, 30, 2, 14, '#7a5332'); P(16, 42, 9, 2, '#4a2f1b');
      blob(c, 20, 22, 14, 12, LEAF, v * 7, 0);
      blob(c, 13, 16, 9, 8, LEAF, v * 7 + 3, 0.08); blob(c, 26, 14, 9, 8, LEAF, v * 7 + 5, 0.12); blob(c, 20, 10, 8, 7, LEAF, v * 7 + 9, 0.2);
      for (let i = 0; i < 6; i++) { const x = 8 + ((hash(i, v, 5) * 24) | 0), y = 8 + ((hash(i, v, 6) * 20) | 0); P(x, y, 1, 1, '#8fd36e'); }
      if (v % 3 === 0) for (let i = 0; i < 4; i++) { const x = 10 + ((hash(i, v, 15) * 20) | 0), y = 12 + ((hash(i, v, 16) * 16) | 0); P(x, y, 2, 2, '#e8504a'); P(x, y, 1, 1, '#ff9a8a'); } // fruit
    } else if (kind === 'P') { // pine: stacked dark tiers
      P(18, 34, 4, 10, '#5a3a22');
      const PINE = ['#163b22', '#1d4a2a', '#255a31', '#2f6c39', '#3c7f44'];
      for (let r = 0; r < 4; r++) { const w = 6 + r * 3.5, y0 = 4 + r * 8; for (let y = 0; y < 11; y++) { const ww = Math.round(w * (y / 10)); for (let x = -ww; x <= ww; x++) { const l = (-x / (ww + 1)) * 0.45 + 0.45 - y * 0.02 + (hash(x, y + r * 11, v) - 0.5) * 0.2; P(20 + x, y0 + y, 1, 1, PINE[Math.max(0, Math.min(4, Math.floor(l * 5)))]); } } }
    } else if (kind === 'p') { // palm: a curved trunk and long fronds
      for (let i = 0; i < 26; i++) { const x = 20 + Math.round(Math.sin(i / 9) * 3); P(x - 1, 18 + i, 3, 1, i % 3 ? '#8a6038' : '#6e4a2a'); }
      const fr = [[-14, 4], [14, 3], [-10, -6], [10, -7], [0, -9], [-16, 9], [16, 9]];
      fr.forEach(([dx, dy], j) => { for (let s = 0; s <= 12; s++) { const t2 = s / 12, x = 20 + dx * t2, y = 18 + dy * t2 + t2 * t2 * 6; P(Math.round(x), Math.round(y), 2, 2, j % 2 ? '#2f7a32' : '#3f9a3e'); if (s % 2 === 0) P(Math.round(x), Math.round(y) + 2, 1, 2, '#24622a'); } });
      P(18, 17, 5, 4, '#7a5023'); P(19, 18, 2, 2, '#a36b2c');
    } else if (kind === 'Y') { // a bush
      blob(c, 20, 38, 11, 8, LEAF, v * 5, 0.05); for (let i = 0; i < 3; i++) P(13 + ((hash(i, v, 2) * 14) | 0), 33 + ((hash(i, v, 3) * 8) | 0), 2, 2, '#e04848');
    }
    treeCache.set(k, cv); return cv;
  }
  // the tree pictures are 40 x 48 art pixels (20 x 24 map units); the trunk stands on the tile's lower middle
  function drawTree(c, kind, x, y, gx, gy, t) {
    const v = (hash(gx, gy, 1) * 4) | 0;
    const s = calm || kind === 'Y' ? 0 : Math.round(Math.sin(t / 1100 + gx * 0.9 + gy * 0.4) * 1) * 0.5;
    c.fillStyle = 'rgba(20,30,10,.22)'; c.beginPath(); c.ellipse(x + 9, y + 14.5, kind === 'Y' ? 6 : 7.5, 2.2, 0, 0, 7); c.fill();
    c.drawImage(treePic(kind, v), x - 2 + s, y - 8 + (kind === 'Y' ? 0 : 0), 20, 24);
  }

  /* ---------------- bridges and docks: planks over the HD water ---------------- */
  function planks(c, x, y, gx, gy, along) { // along: 'x' boards run north-south (a bridge you cross east-west)
    const W1 = '#8a5a30', W2 = '#a06c3c', W3 = '#b98250', GAP = '#4a2e18';
    c.fillStyle = 'rgba(10,30,60,.35)'; c.fillRect(x + (along === 'y' ? 2.5 : 0), y + (along === 'x' ? 14 : 0) + (along === 'y' ? 0 : 0), along === 'y' ? 12 : 16, along === 'x' ? 2 : 16);
    for (let i = 0; i < 8; i++) {
      const tone = [W1, W2, W3][(hash(gx * 8 + i, gy, 4) * 3) | 0];
      if (along === 'x') { c.fillStyle = tone; c.fillRect(x + i * 2, y + 2, 1.5, 12); c.fillStyle = GAP; c.fillRect(x + i * 2 + 1.5, y + 2, 0.5, 12); }
      else { c.fillStyle = tone; c.fillRect(x + 2, y + i * 2, 12, 1.5); c.fillStyle = GAP; c.fillRect(x + 2, y + i * 2 + 1.5, 12, 0.5); }
    }
    c.fillStyle = '#5e3b1f';
    if (along === 'x') { c.fillRect(x, y + 1.5, 16, 1); c.fillRect(x, y + 13.5, 16, 1); c.fillStyle = '#c99a62'; c.fillRect(x, y + 1.5, 16, 0.5); }
    else { c.fillRect(x + 1.5, y, 1, 16); c.fillRect(x + 13.5, y, 1, 16); c.fillStyle = '#c99a62'; c.fillRect(x + 1.5, y, 0.5, 16); }
  }
  function dock(c, x, y, gx, gy) {
    c.fillStyle = 'rgba(10,30,60,.35)'; c.fillRect(x, y + 15, 16, 1);
    for (let i = 0; i < 8; i++) { c.fillStyle = ['#9a6a3e', '#a87646', '#b88452'][(hash(gx, gy * 8 + i, 6) * 3) | 0]; c.fillRect(x, y + i * 2, 16, 1.5); c.fillStyle = '#5a3a20'; c.fillRect(x, y + i * 2 + 1.5, 16, 0.5); }
    c.fillStyle = '#4a2e18'; c.fillRect(x + 1, y + 1, 1, 1); c.fillRect(x + 14, y + 1, 1, 1); c.fillRect(x + 1, y + 13, 1, 1); c.fillRect(x + 14, y + 13, 1, 1);
  }
  const OVER_WATER = { b: (c, x, y, gx, gy) => planks(c, x, y, gx, gy, 'x'), B: (c, x, y, gx, gy) => planks(c, x, y, gx, gy, 'y'), k: dock };

  /* ---------------- buildings in the style of each place (ep.style) ---------------- */
  // style: the look of roofs, walls, windows and doors where the episode happens
  const STY = {
    europe: { roof: 'clay', roofQ: 'slate', wall: 'timber', win: 'mullion', door: 'plank', stone: 'ashlar', grand: 'ashlar' },
    china: { roof: 'china', roofQ: 'chinaGreen', wall: 'wood', win: 'lattice', door: 'red', stone: 'brick', grand: 'redwall' },
    japan: { roof: 'china', roofQ: 'slate', wall: 'wood', win: 'lattice', door: 'plank', stone: 'ashlar', grand: 'redwall' },
    islam: { roof: 'flat', roofQ: 'dome', wall: 'white', win: 'arch', door: 'arch', stone: 'sand', grand: 'tilework' },
    ottoman: { roof: 'clay', roofQ: 'lead', wall: 'white', win: 'arch', door: 'arch', stone: 'ashlar', grand: 'tilework' },
    india: { roof: 'clay', roofQ: 'chinaGreen', wall: 'sandstone', win: 'jali', door: 'arch', stone: 'sand', grand: 'sandstone' },
    sahel: { roof: 'mudflat', roofQ: 'thatch', wall: 'mud', win: 'hole', door: 'mud', stone: 'mudwall', grand: 'mudwall' },
    swahili: { roof: 'flat', roofQ: 'thatch', wall: 'coral', win: 'hole', door: 'carved', stone: 'coral', grand: 'coral' },
    andes: { roof: 'thatch', roofQ: 'thatch', wall: 'inca', win: 'trap', door: 'trap', stone: 'inca', grand: 'inca' },
    mesoamerica: { roof: 'thatch', roofQ: 'flat', wall: 'stucco', win: 'hole', door: 'stucco', stone: 'stucco', grand: 'stucco' },
    steppe: { roof: 'felt', roofQ: 'felt', wall: 'felt', win: 'hole', door: 'felt', stone: 'sand', grand: 'sand' }
  };
  const sty = () => STY[(WW.ep && WW.ep.style) || 'europe'] || STY.europe;
  const isRoofCh = ch => ch === 'R' || ch === 'Q' || ch === 'H';
  const isWallCh = ch => ch === 'h' || ch === 'd' || ch === 'N';
  const bcache = new Map();
  function pic(key, draw) { let cv = bcache.get(key); if (!cv) { cv = mk(); draw(cv.getContext('2d')); bcache.set(key, cv); } return cv; }
  const PX = c => (x, y, w, h, col) => { c.fillStyle = col; c.fillRect(x, y, w, h); };
  const shade = (rgb, k) => `rgb(${rgb.map(v => Math.max(0, Math.min(255, Math.round(v * k)))).join(',')})`;
  const ROOFC = {
    clay: ['#b4452f', '#c9573a', '#d96a48', '#e98a62'], slate: ['#3e4c66', '#4b5b78', '#5a6b8a', '#7286a6'],
    china: ['#323840', '#3d444e', '#4a525e', '#6b7482'], chinaGreen: ['#1f5a46', '#287057', '#348468', '#4fa585'],
    lead: ['#6d7782', '#7d8792', '#8e98a3', '#aeb7c0'], dome: ['#1e7f8c', '#2896a3', '#38adb8', '#6fd0d6'],
    thatch: ['#9a7330', '#b48a3e', '#c9a14a', '#e0bf6c'], felt: ['#cdbfa6', '#dacdb4', '#e6dac3', '#f2e9d6'],
    flat: ['#cbb791', '#d8c5a0', '#e3d2ae', '#efe1c1'], mudflat: ['#a9683a', '#b87645', '#c78552', '#d69a66']
  };
  function roofPic(ch, gx, gy) {
    const S = sty(), kind = ch === 'H' ? 'thatch' : ch === 'Q' ? S.roofQ : S.roof;
    const top = !isRoofCh(at(gx, gy - 1)), bot = !isRoofCh(at(gx, gy + 1)), lft = !isRoofCh(at(gx - 1, gy)), rgt = !isRoofCh(at(gx + 1, gy));
    let row = 0; while (row < 6 && isRoofCh(at(gx, gy - row - 1))) row++;
    let rows = row + 1; while (rows < 8 && isRoofCh(at(gx, gy - row + rows))) rows++;
    const key = ['roof', kind, top, bot, lft, rgt, row, rows, (hash(gx, gy, 2) * 3) | 0].join();
    return pic(key, c => {
      const P = PX(c), cols = ROOFC[kind] || ROOFC.clay, rgb = cols.map(hex);
      for (let py = 0; py < A; py++) for (let px = 0; px < A; px++) {
        const Y = row * A + py, X = gx * A + px, depth = Y / (rows * A); // 0 at the ridge, 1 at the eaves
        let l = 0.85 - depth * 0.45 + (h2(X, Y, 5) - 0.5) * 0.12;
        if (kind === 'clay' || kind === 'lead') { const r6 = Y % 7, st = Math.floor(Y / 7) % 2 ? 3 : 0; l += r6 < 2 ? 0.22 : r6 > 5 ? -0.3 : 0; if ((X + st) % 6 === 0) l -= 0.25; }
        else if (kind === 'slate') { const r6 = Y % 6, st = Math.floor(Y / 6) % 2 ? 4 : 0; l += r6 === 5 ? -0.35 : r6 === 0 ? 0.12 : 0; if ((X + st) % 8 === 0) l -= 0.25; }
        else if (kind === 'china' || kind === 'chinaGreen') { const k = X % 5; l += k === 0 ? 0.3 : k === 1 ? -0.3 : 0; if (Y % 6 === 5) l -= 0.12; }
        else if (kind === 'thatch') { l += (vnoise(X * 3, Y * 0.4, 3, 8) - 0.5) * 0.7; if (Y % 9 === 8) l -= 0.25; }
        else if (kind === 'dome') { const dm = (X + Y) % 8, dn = (X - Y + 800) % 8; if (dm === 0 || dn === 0) l += 0.35; }
        else if (kind === 'felt') { l += (vnoise(X, Y, 6, 3) - 0.5) * 0.25; if ((X + Y) % 12 === 0) l -= 0.2; }
        else if (kind === 'flat' || kind === 'mudflat') l = 0.62 + (vnoise(X, Y, 8, 3) - 0.5) * 0.25 + (h2(X, Y, 5) - 0.5) * 0.1;
        P(px, py, 1, 1, shade(rgb[2], 0.62 + l * 0.5));
      }
      const D = shade(rgb[0], 0.55), L = shade(rgb[3], 1.05);
      if (kind === 'flat' || kind === 'mudflat') { // a parapet round the flat roof, lit on top
        if (top) { P(0, 0, A, 3, shade(rgb[3], 1)); P(0, 3, A, 1, D); }
        if (lft) { P(0, 0, 3, A, shade(rgb[3], 0.98)); P(3, 0, 1, A, D); }
        if (rgt) { P(A - 3, 0, 3, A, shade(rgb[1], 0.9)); P(A - 4, 0, 1, A, shade(rgb[3], 1)); }
        if (bot) { P(0, A - 3, A, 3, shade(rgb[1], 0.85)); P(0, A - 4, A, 1, shade(rgb[3], 1)); }
        if (kind === 'mudflat' && bot) for (let i = 3; i < A; i += 7) { P(i, A - 6, 3, 1, '#5a3418'); P(i, A - 5, 3, 1, '#d8a878'); } // the wooden spikes of Sahel mud walls
        if (hash(gx, gy, 9) > 0.7 && !top && !bot) { P(12, 12, 7, 6, '#7a5a3a'); P(13, 12, 5, 2, '#a07a52'); } // a hatch
        return;
      }
      if (top) { // the ridge
        P(0, 0, A, 3, D); P(0, 0, A, 1, L);
        if (kind.startsWith('china')) { if (lft) { P(0, -1, 4, 5, D); P(1, 0, 2, 2, '#c9a24a'); } if (rgt) { P(A - 4, -1, 4, 5, D); P(A - 3, 0, 2, 2, '#c9a24a'); } }
      }
      if (lft) { P(0, 0, 2, A, D); P(2, 0, 1, A, L); }
      if (rgt) { P(A - 2, 0, 2, A, D); }
      if (bot) {
        P(0, A - 3, A, 3, D); P(0, A - 4, A, 1, L);
        if (kind.startsWith('china')) { if (lft) { P(0, A - 7, 3, 4, D); P(0, A - 8, 2, 2, D); } if (rgt) { P(A - 3, A - 7, 3, 4, D); P(A - 2, A - 8, 2, 2, D); } } // the eaves curl up
        if (kind === 'thatch') for (let i = 0; i < A; i += 2) P(i, A - 2 + (i % 4 ? 1 : 0), 2, 2, shade(rgb[0], 0.8)); // a ragged straw fringe
      }
      if (ch !== 'H' && WW.hasChimney && MAP && WW.hasChimney(MAP, gx, gy) && kind !== 'china' && kind !== 'thatch') { P(18, 0, 8, 13, '#4a3a33'); P(19, 0, 6, 12, '#8a5a3a'); P(18, 0, 8, 2, '#6a6f78'); }
    });
  }
  const WALLC = {
    timber: ['#e9dcc0', '#d9c9a6'], wood: ['#efe3c8', '#d8c6a2'], white: ['#f3efe6', '#ddd6c6'], sandstone: ['#d9a77a', '#c48d60'],
    mud: ['#c7895a', '#ae7246'], coral: ['#ece4d2', '#d4c8ae'], inca: ['#9a9a90', '#83837a'], stucco: ['#f1ece0', '#d9d0bd'], felt: ['#e6dac3', '#cdbfa6']
  };
  function wallBase(c, kind, gx, gy, P) {
    const [a, b] = (WALLC[kind] || WALLC.white).map(hex);
    for (let py = 0; py < A; py++) for (let px = 0; px < A; px++) {
      const X = gx * A + px, Y = gy * A + py;
      let l = 0.95 + (vnoise(X, Y, 6, 13) - 0.5) * 0.12 + (h2(X, Y, 3) - 0.5) * 0.06;
      if (kind === 'inca') { // fitted stones: uneven blocks with deep joints
        const bx = Math.floor((X + (Math.floor(Y / 9) % 2) * 6) / 12), by = Math.floor(Y / 9), ex = (X + (Math.floor(Y / 9) % 2) * 6) % 12, ey = Y % 9;
        l = 0.85 + h2(bx, by, 7) * 0.25 - ((ex === 0 || ey === 0) ? 0.45 : 0) + ((ex === 1 || ey === 1) ? 0.12 : 0);
      }
      if (kind === 'mud') l += (vnoise(X, Y, 3, 17) - 0.5) * 0.12;
      P(px, py, 1, 1, shade(py > A - 5 ? b : a, l));
    }
    if (kind === 'timber') { // dark beams: posts, a rail and a brace
      const B = '#5a3d24'; P(0, 0, 2, A, B); P(A - 2, 0, 2, A, B); P(0, 0, A, 2, B); P(0, A - 6, A, 2, B);
      if (hash(gx, gy, 4) > 0.5) for (let i = 0; i < 10; i++) P(3 + i, A - 7 - i, 2, 2, B);
    }
    if (kind === 'wood') { const B = '#8c2f22'; P(0, 0, 3, A, B); P(A - 3, 0, 3, A, B); P(1, 0, 1, A, '#b0442f'); P(0, 0, A, 2, '#5a2a1e'); } // red lacquered pillars
    if (kind === 'mud') for (let i = 0; i < 3; i++) { const x = 4 + ((hash(gx, gy, i) * 22) | 0), y = 6 + i * 8; P(x, y, 4, 2, '#5a3418'); P(x, y + 2, 4, 1, 'rgba(0,0,0,.25)'); } // wooden spikes (toron) stick out of the wall
    if (kind === 'white' || kind === 'coral') P(0, A - 5, A, 1, 'rgba(0,0,0,.12)');
    P(0, 0, A, 3, 'rgba(20,15,30,.28)'); // the shadow of the roof's eaves
    P(0, A - 2, A, 2, 'rgba(0,0,0,.18)');
  }
  function windowPic(kind, P, lit) {
    const glass = lit ? '#ffd76a' : '#7fb6d8', dark = '#2a2236';
    if (kind === 'lattice') { P(8, 8, 16, 14, dark); P(9, 9, 14, 12, lit ? '#ffd76a' : '#f4ead2'); for (let i = 12; i < 23; i += 3) P(i, 9, 1, 12, '#8c2f22'); for (let j = 12; j < 21; j += 3) P(9, j, 14, 1, '#8c2f22'); }
    else if (kind === 'arch' || kind === 'jali') {
      for (let y = 6; y < 24; y++) { const w = y < 12 ? Math.round(Math.sqrt(Math.max(0, 36 - (12 - y) * (12 - y)))) : 6; P(16 - w, y, w * 2, 1, dark); if (w > 1) P(17 - w, y, w * 2 - 2, 1, kind === 'jali' ? '#b8865a' : (lit ? '#ffd76a' : '#2d6f86')); }
      if (kind === 'jali') for (let y = 9; y < 23; y += 3) for (let x = 12; x < 21; x += 3) P(x, y, 1, 1, lit ? '#ffd76a' : '#3a2416');
      else { P(14, 13, 1, 10, '#1d4f60'); P(17, 13, 1, 10, '#1d4f60'); }
      P(9, 24, 14, 2, '#b9b2a2');
    } else if (kind === 'mullion') { P(9, 8, 14, 14, dark); P(10, 9, 12, 12, glass); P(15, 9, 2, 12, dark); P(10, 14, 12, 1, dark); P(10, 9, 3, 2, 'rgba(255,255,255,.5)'); P(6, 8, 3, 14, '#3f6e4a'); P(23, 8, 3, 14, '#3f6e4a'); P(9, 22, 14, 2, '#7a6a52'); }
    else if (kind === 'trap') { for (let y = 8; y < 24; y++) { const w = 4 + (y - 8) * 0.25; P(16 - w, y, w * 2, 1, dark); } }
    else { P(12, 10, 8, 8, dark); P(12, 18, 8, 1, 'rgba(255,255,255,.2)'); if (lit) P(13, 11, 6, 6, '#ffcf5a'); }
  }
  function doorPic(kind, P) {
    const wood = { red: ['#8c2f22', '#a8402c'], arch: ['#6e4425', '#8a5a33'], mud: ['#5a3418', '#704424'], carved: ['#4a2e18', '#6a4426'], trap: ['#3a2a1a', '#3a2a1a'], stucco: ['#6e4425', '#8a5a33'], felt: ['#b04a2a', '#cc6236'], plank: ['#7a4e2a', '#946038'] }[kind] || ['#7a4e2a', '#946038'];
    if (kind === 'arch' || kind === 'carved') for (let y = 2; y < A; y++) { const w = y < 10 ? Math.round(Math.sqrt(Math.max(0, 64 - (10 - y) * (10 - y)))) : 8; P(16 - w - 1, y, w * 2 + 2, 1, '#2a2236'); P(16 - w, y, w * 2, 1, (16 - w + y) % 4 ? wood[1] : wood[0]); }
    else if (kind === 'trap') for (let y = 3; y < A; y++) { const w = 5 + (y - 3) * 0.2; P(16 - w, y, w * 2, 1, '#2a2236'); }
    else { P(7, 4, 18, A - 4, '#2a2236'); for (let i = 0; i < 4; i++) P(8 + i * 4, 5, 4, A - 5, i % 2 ? wood[0] : wood[1]); P(8, 5, 16, 1, 'rgba(255,255,255,.18)'); }
    if (kind === 'red') { P(16, 5, 1, A - 5, '#5a1e16'); for (let y = 9; y < A - 3; y += 5) for (let x = 10; x < 24; x += 4) P(x, y, 1, 1, '#e8c25a'); }
    if (kind === 'carved') for (let y = 12; y < A - 2; y += 4) P(11, y, 10, 1, '#a07a4a');
    if (kind !== 'trap') P(20, 18, 2, 3, '#e8c25a');
    P(5, A - 2, 22, 2, '#a59c8a'); // a step
  }
  function wallPic(ch, gx, gy, force) {
    const S = sty(), kind = force || (ch === 'N' ? 'mud' : S.wall), lit = !!WW.style.night;
    return pic(['wall', ch, kind, S.win, S.door, lit, gx % 3, gy % 2].join(), c => {
      const P = PX(c); wallBase(c, kind, gx, gy, P);
      if (ch === 'h') windowPic(S.win, P, lit);
      if (ch === 'd') doorPic(kind === 'mud' ? 'mud' : S.door, P);
    });
  }
  // a whole little flat-roofed house in one square (J), and a wall with a wind tower (E)
  function flatPic(ch, gx, gy) {
    const S = sty(), kind = S.wall === 'timber' || S.wall === 'wood' ? 'white' : S.wall, lit = !!WW.style.night;
    return pic(['flat', ch, kind, lit, gx % 2].join(), c => {
      const P = PX(c); wallBase(c, kind, gx, gy, P);
      const top = shade(hex((WALLC[kind] || WALLC.white)[0]), 1.06); P(0, 0, A, 9, top); P(0, 8, A, 2, 'rgba(0,0,0,.22)'); P(0, 0, A, 1, '#fff8e8');
      if (ch === 'dJ') { P(0, 8, A, 2, 'rgba(0,0,0,.22)'); doorPic(S.door, (x, y, w, h, col) => { if (y >= 10 || y + h > 10) P(x, Math.max(y, 10), w, h - Math.max(0, 10 - y), col); }); }
      else if (ch === 'E') { P(9, 0, 14, A - 2, shade(hex((WALLC[kind] || WALLC.white)[1]), 1)); for (let i = 0; i < 3; i++) P(11 + i * 4, 4, 2, 12, '#3a2416'); }
      else { P(6, 14, 7, 9, '#2a2236'); P(7, 15, 5, 7, lit ? '#ffd76a' : '#5a3a22'); P(19, 14, 7, 6, '#2a2236'); P(20, 15, 5, 4, lit ? '#ffd76a' : '#3d7fb5'); }
    });
  }
  const STONEC = { ashlar: ['#9a9da4', '#b4b7bd'], brick: ['#8a8a8e', '#a3a3a8'], sand: ['#c9ad7d', '#dcc394'], mudwall: ['#b0743f', '#c48650'], coral: ['#d9d0bb', '#e8e1cf'], inca: ['#8f8f86', '#a8a89e'], stucco: ['#e8e2d4', '#f4efe4'], redwall: ['#a8402c', '#bd5236'], tilework: ['#efe9dc', '#f7f2e8'], sandstone: ['#c98a5e', '#d99c70'] };
  function stonePic(ch, gx, gy) {
    const S = sty(), kind = ch === 'D' ? S.grand : S.stone;
    const top = at(gx, gy - 1) !== ch, bot = at(gx, gy + 1) !== ch;
    return pic(['stone', ch, kind, top, bot, gx % 4, gy % 4].join(), c => {
      const P = PX(c), [a, b] = (STONEC[kind] || STONEC.ashlar).map(hex);
      for (let py = 0; py < A; py++) for (let px = 0; px < A; px++) {
        const X = gx * A + px, Y = gy * A + py;
        let l = 0.92 + (h2(X, Y, 3) - 0.5) * 0.08, col = a;
        if (['ashlar', 'brick', 'sand', 'inca', 'sandstone'].includes(kind)) {
          const bh = kind === 'brick' ? 5 : 8, bw = kind === 'brick' ? 10 : 14, off = (Math.floor(Y / bh) % 2) * (bw / 2);
          const ex = (X + off) % bw, ey = Y % bh;
          col = h2(Math.floor((X + off) / bw), Math.floor(Y / bh), 9) > 0.5 ? a : b;
          if (ex === 0 || ey === 0) l = 0.6; else if (ex === 1 || ey === 1) l = 1.12;
        } else l += (vnoise(X, Y, 7, 5) - 0.5) * 0.15;
        P(px, py, 1, 1, shade(col, l));
      }
      if (kind === 'redwall' && top) { P(0, 0, A, 6, '#3d444e'); for (let i = 0; i < A; i += 4) P(i, 0, 1, 6, '#6b7482'); P(0, 6, A, 1, '#22262c'); } // grey tiles on top of the red wall
      if (kind === 'tilework') { for (let i = 0; i < A; i += 8) { P(i, 12, 8, 8, '#2a7f9a'); P(i + 2, 14, 4, 4, '#f2c14e'); P(i + 3, 15, 2, 2, '#2a7f9a'); } P(0, 11, A, 1, '#1d5a6e'); P(0, 20, A, 1, '#1d5a6e'); }
      if (kind === 'mudwall') for (let i = 0; i < 2; i++) { const x = 5 + ((hash(gx, gy, i) * 20) | 0), y = 6 + i * 12; P(x, y, 4, 2, '#5a3418'); P(x, y + 2, 4, 1, 'rgba(0,0,0,.25)'); }
      if (kind === 'stucco' && top) { for (let i = 0; i < A; i += 8) { P(i, 2, 4, 3, '#b8452f'); P(i + 4, 5, 4, 3, '#b8452f'); } } // a stepped red frieze
      if (top && kind !== 'redwall') { P(0, 0, A, 2, shade(b, 1.15)); P(0, 2, A, 1, 'rgba(0,0,0,.2)'); }
      if (bot) P(0, A - 2, A, 2, 'rgba(0,0,0,.22)');
    });
  }
  function fencePic(gx, gy) {
    const l = at(gx - 1, gy) === 'F', r = at(gx + 1, gy) === 'F', u = at(gx, gy - 1) === 'F', d = at(gx, gy + 1) === 'F';
    return pic(['fence', l, r, u, d].join(), c => {
      const P = PX(c), W = '#8a5a30', L = '#b98250', D = '#4a2e18';
      if (l || r || (!u && !d)) { P(l ? 0 : 12, 11, (l ? 12 : 0) + (r ? 20 : 8) , 3, W); P(l ? 0 : 12, 11, (l ? 12 : 0) + (r ? 20 : 8), 1, L); P(l ? 0 : 12, 19, (l ? 12 : 0) + (r ? 20 : 8), 3, W); P(l ? 0 : 12, 19, (l ? 12 : 0) + (r ? 20 : 8), 1, L); }
      if (u || d) { P(14, u ? 0 : 8, 4, (u ? 8 : 0) + (d ? 24 : 18), W); P(14, u ? 0 : 8, 1, (u ? 8 : 0) + (d ? 24 : 18), L); }
      P(12, 6, 8, 20, D); P(13, 6, 6, 19, W); P(13, 6, 2, 19, L); P(12, 26, 8, 2, 'rgba(0,0,0,.25)');
    });
  }
  // a flooded rice paddy: muddy water with the sky in it, and rows of young rice
  function paddyPic(gx, gy) {
    return pic(['paddy', gx % 4, gy % 4, at(gx, gy - 1) === 'q', at(gx, gy + 1) === 'q', at(gx - 1, gy) === 'q', at(gx + 1, gy) === 'q'].join(), c => {
      const P = PX(c);
      for (let py = 0; py < A; py++) for (let px = 0; px < A; px++) {
        const X = gx * A + px, Y = gy * A + py, v = vnoise(X, Y, 10, 41);
        P(px, py, 1, 1, shade(hex('#6f8f7a'), 0.85 + v * 0.3 + ((X + Y) % 19 === 0 ? 0.25 : 0)));
      }
      for (let r = 3; r < A; r += 6) for (let k = 2; k < A; k += 5) { // seedlings in neat rows, as they were transplanted
        const o = (r / 6) % 2 ? 2 : 0; P(k + o, r, 1, 3, '#3f7a30'); P(k + o + 1, r - 1, 1, 4, '#6cbf4a'); P(k + o + 2, r, 1, 3, '#4f9a3a');
      }
      const D = '#7a5a36', L = '#a07a4e'; // little earth banks round each field
      if (at(gx, gy - 1) !== 'q') { P(0, 0, A, 2, L); P(0, 2, A, 1, D); }
      if (at(gx, gy + 1) !== 'q') { P(0, A - 2, A, 2, D); }
      if (at(gx - 1, gy) !== 'q') { P(0, 0, 2, A, L); }
      if (at(gx + 1, gy) !== 'q') { P(A - 2, 0, 2, A, D); }
    });
  }
  const HDB = {
    R: (c, x, y, gx, gy) => c.drawImage(roofPic('R', gx, gy), x, y, T, T),
    Q: (c, x, y, gx, gy) => c.drawImage(roofPic('Q', gx, gy), x, y, T, T),
    H: (c, x, y, gx, gy) => c.drawImage(roofPic('H', gx, gy), x, y, T, T),
    h: (c, x, y, gx, gy) => c.drawImage(wallPic('h', gx, gy), x, y, T, T),
    d: (c, x, y, gx, gy) => { const sd = [at(gx - 1, gy), at(gx + 1, gy)]; c.drawImage(sd.includes('N') ? wallPic('d', gx, gy, 'mud') : sd.includes('J') || sd.includes('E') ? flatPic('dJ', gx, gy) : wallPic('d', gx, gy), x, y, T, T); },
    N: (c, x, y, gx, gy) => c.drawImage(wallPic('N', gx, gy), x, y, T, T),
    J: (c, x, y, gx, gy) => c.drawImage(flatPic('J', gx, gy), x, y, T, T),
    E: (c, x, y, gx, gy) => c.drawImage(flatPic('E', gx, gy), x, y, T, T),
    W: (c, x, y, gx, gy) => c.drawImage(stonePic('W', gx, gy), x, y, T, T),
    D: (c, x, y, gx, gy) => c.drawImage(stonePic('D', gx, gy), x, y, T, T),
    F: (c, x, y, gx, gy) => c.drawImage(fencePic(gx, gy), x, y, T, T),
    q: (c, x, y, gx, gy) => c.drawImage(paddyPic(gx, gy), x, y, T, T)
  };

  /* ---------------- people, twice as fine: 32 x 40 art pixels (16 x 20 map units), four walking frames ---------------- */
  const pcache = new Map();
  const toRGB = col => hex(col.length === 4 ? '#' + col[1] + col[1] + col[2] + col[2] + col[3] + col[3] : col);
  function personPic(pal, kind, dir, frame, blink) {
    const key = [pal.s, pal.h, pal.c, pal.p, pal.H, kind, dir, frame, blink].join();
    let cv = pcache.get(key); if (cv) return cv;
    cv = document.createElement('canvas'); cv.width = 32; cv.height = 40; const c = cv.getContext('2d');
    const P = (x, y, w, h, col) => { c.fillStyle = col; c.fillRect(x, y, w, h); };
    const sk = toRGB(pal.s), hr = toRGB(pal.h), sh = toRGB(pal.c), pa = toRGB(pal.p), ht = toRGB(pal.H || '#d98e2b');
    const S = (rgb, k) => shade(rgb, k);
    const side = dir === 'left' || dir === 'right', back = dir === 'up';
    const step = frame === 1 ? 1 : frame === 3 ? -1 : 0, bob = frame % 2 ? 1 : 0;
    const robe = kind.robe, y0 = bob;
    // legs and shoes
    if (!robe) {
      if (side) { P(13 + step * 2, 30 + y0, 4, 7, S(pa, 0.85)); P(15 - step * 2, 30 + y0, 4, 7, S(pa, 1)); P(12 + step * 3, 36, 6, 3, '#3a2a1a'); P(14 - step * 3, 36, 6, 3, '#4a3624'); }
      else { P(10, 30 + y0, 5, 6 - step, S(pa, 1.05)); P(17, 30 + y0, 5, 6 + step, S(pa, 0.85)); P(9, 36 - step, 7, 3, '#3a2a1a'); P(16, 36 + Math.min(0, step), 7, 3, '#3a2a1a'); }
    } else { P(9, 35, 6, 4, '#3a2a1a'); P(17, 35, 6, 4, '#3a2a1a'); }
    // body: shirt (or a long robe), lit from the left
    const bodyH = robe ? 19 : 13;
    for (let y = 0; y < bodyH; y++) {
      const w = robe ? 16 + Math.floor(y / 4) : 16, x0 = 16 - w / 2;
      for (let x = 0; x < w; x++) P(x0 + x, 18 + y + y0, 1, 1, S(sh, 1.12 - (x / w) * 0.35 - (y > bodyH - 3 ? 0.12 : 0)));
    }
    if (!robe) { P(8, 29 + y0, 16, 2, S(sh, 0.55)); P(15, 29 + y0, 2, 2, '#d9b25a'); } // belt and buckle
    else { P(8, 26 + y0, 16, 2, S(sh, 0.6)); }
    // arms swing as you walk
    if (side) { P(14 - step * 2, 19 + y0, 4, 10, S(sh, 0.8)); P(14 - step * 2, 28 + y0, 4, 3, S(sk, 0.95)); }
    else { P(5, 19 + y0 + Math.max(0, step), 4, 10, S(sh, 1.0)); P(23, 19 + y0 + Math.max(0, -step), 4, 10, S(sh, 0.72)); P(5, 28 + y0 + Math.max(0, step), 4, 3, S(sk, 1)); P(23, 28 + y0 + Math.max(0, -step), 4, 3, S(sk, 0.85)); }
    // head
    const hx = side ? 9 : 8, hw = side ? 14 : 16;
    P(14, 16 + y0, 4, 3, S(sk, 0.85)); // neck
    for (let y = 0; y < 14; y++) for (let x = 0; x < hw; x++) {
      const dx = (x - hw / 2 + 0.5) / (hw / 2), dy = (y - 6.5) / 7; if (dx * dx + dy * dy > 1.08) continue;
      P(hx + x, 3 + y + y0, 1, 1, S(sk, 1.1 - (x / hw) * 0.25 - (y > 10 ? 0.08 : 0)));
    }
    // hair by style
    const H = (x, y, w, h, k) => P(x, y + y0, w, h, S(hr, k || 1));
    if (back) { H(8, 2, 16, 12, 1); H(8, 2, 16, 3, 1.25); if (kind.style === 'long') H(8, 12, 16, 9, 0.9); if (kind.style === 'bun') H(13, -0, 6, 4, 1.1); }
    else if (side) {
      const f = dir === 'right' ? 1 : -1, bx = dir === 'right' ? 9 : 11;
      H(bx, 2, 12, 5, 1.15); H(dir === 'right' ? 9 : 17, 4, 6, 8, 1); if (kind.style === 'long') H(dir === 'right' ? 9 : 17, 10, 6, 10, 0.9); if (kind.style === 'bun') H(dir === 'right' ? 8 : 20, 1, 5, 5, 1.1);
      const ex = dir === 'right' ? 19 : 12; P(ex, 9 + y0, 2, blink ? 1 : 3, '#2a2033'); if (!blink) P(ex + (f > 0 ? 1 : 0), 9 + y0, 1, 1, '#ffffff');
      P(dir === 'right' ? 22 : 9, 11 + y0, 1, 2, S(sk, 0.8)); P(ex - f, 14 + y0, 3, 1, S(sk, 0.7));
    } else {
      H(8, 2, 16, 5, 1.15); H(7, 4, 3, 8, 1); H(22, 4, 3, 8, 0.85); H(10, 6, 5, 2, 1.05);
      if (kind.style === 'long') { H(7, 11, 3, 11, 0.95); H(22, 11, 3, 11, 0.8); }
      if (kind.style === 'bun') H(13, 0, 6, 4, 1.2);
      if (blink) { P(11, 11 + y0, 3, 1, '#2a2033'); P(18, 11 + y0, 3, 1, '#2a2033'); }
      else { P(11, 10 + y0, 3, 3, '#2a2033'); P(18, 10 + y0, 3, 3, '#2a2033'); P(11, 10 + y0, 1, 1, '#ffffff'); P(18, 10 + y0, 1, 1, '#ffffff'); }
      P(9, 13 + y0, 2, 1, 'rgba(230,110,110,.45)'); P(21, 13 + y0, 2, 1, 'rgba(230,110,110,.45)'); // rosy cheeks
      P(15, 14 + y0, 3, 1, S(sk, 0.62));
    }
    if (kind.hat) { const hb = S(ht, 1), hd = S(ht, 0.7); P(4, 5 + y0, 24, 2, hd); P(9, 0 + y0, 14, 6, hb); P(9, 0 + y0, 14, 1, S(ht, 1.25)); P(9, 4 + y0, 14, 1, S(ht, 0.55)); }
    // a dark outline all round, so people stand out from the ground
    const img = c.getImageData(0, 0, 32, 40), d = img.data, out = new Uint8ClampedArray(d);
    for (let y = 0; y < 40; y++) for (let x = 0; x < 32; x++) {
      const i = (y * 32 + x) * 4; if (d[i + 3]) continue;
      const n = [[1, 0], [-1, 0], [0, 1], [0, -1]].some(([dx, dy]) => { const X = x + dx, Y = y + dy; return X >= 0 && Y >= 0 && X < 32 && Y < 40 && d[(Y * 32 + X) * 4 + 3] > 0; });
      if (n) { out[i] = 42; out[i + 1] = 32; out[i + 2] = 51; out[i + 3] = 255; }
    }
    img.data.set(out); c.putImageData(img, 0, 0);
    if (dir === 'left') { const f = document.createElement('canvas'); f.width = 32; f.height = 40; const fc = f.getContext('2d'); fc.translate(32, 0); fc.scale(-1, 1); fc.drawImage(cv, 0, 0); cv = f; }
    pcache.set(key, cv); return cv;
  }
  function kindOf(p) {
    const look = (p && p.look) || {}, sprite = WW.personSprite ? WW.personSprite(p) : 'npc';
    return { robe: !!look.robe, hat: !!look.hat || sprite === 'npcHat', style: look.style || (sprite === 'npcLong' ? 'long' : sprite === 'npcBun' ? 'bun' : 'short') };
  }
  // feet at (x + 8, y + 16): the picture rises 4 units above the tile
  function drawHDPerson(c, pal, kind, x, y, dir, frame, blink) {
    c.fillStyle = 'rgba(20,20,30,.25)'; c.beginPath(); c.ellipse(x + 8, y + 15, 6, 1.8, 0, 0, 7); c.fill();
    c.drawImage(personPic(pal, kind, dir, frame, blink), 0, 0, 32, 40, x, y - 4, 16, 20);
  }

  /* ---------------- the new tile loop: ground, shadows, then things ---------------- */
  const TALL = new Set(['R', 'Q', 'h', 'd', 'J', 'U', 'X', 'W', 'D', 'H', 'N', 'E', 'M', 'A', 'V', 'm']);
  const TREE = new Set(['T', 'P', 'p', 'Y']);
  WW.hd = {
    on: true,
    noGround: false,
    drawTiles(c, sx, sy, map, t, SW, SH) {
      if (map !== MAP) { MAP = map; cache.clear(); bcache.clear(); landCache.clear(); depthCache = new Map(); }
      const list = [];
      // 1 · every square's ground
      for (let y = 0; y < SH; y++) for (let x = 0; x < SW; x++) {
        const gx = sx * SW + x, gy = sy * SH + y, ch = at(gx, gy);
        c.drawImage(groundSquare(gx, gy), x * T, y * T, T, T);
        waterLive(c, x * T, y * T, gx, gy, t);
        if (!GROUND.has(ch) || ch === '"') list.push([x, y, gx, gy, ch]);
      }
      // 2 · soft shadows to the south-east of walls, roofs and hills
      c.fillStyle = 'rgba(25,20,40,.20)';
      for (const [x, y, gx, gy, ch] of list) {
        if (!TALL.has(ch)) continue;
        if (!TALL.has(at(gx + 1, gy))) { c.fillRect(x * T + T, y * T + 2, 3, T - 2); c.fillRect(x * T + T + 3, y * T + 4, 1.5, T - 4); }
        if (!TALL.has(at(gx, gy + 1)) && at(gx, gy + 1) !== 'd') { c.fillRect(x * T + 2, y * T + T, T, 2); }
      }
      // 3 · the things on the squares, in rows from the top (lower ones overlap the ones above)
      WW.hd.noGround = true;
      for (const [x, y, gx, gy, ch] of list) {
        if (ch === '"') { tallGrass(c, x * T, y * T, gx, gy, t); continue; }
        if (TREE.has(ch)) { drawTree(c, ch, x * T, y * T, gx, gy, t); continue; }
        if (OVER_WATER[ch]) { OVER_WATER[ch](c, x * T, y * T, gx, gy); continue; }
        if (HDB[ch]) { HDB[ch](c, x * T, y * T, gx, gy); continue; }
        (tiles[ch] || tiles['.'])(c, x * T, y * T, gx, gy, t, map);
      }
      WW.hd.noGround = false;
    },
    // warm afternoon light, a soft vignette and slow drifting motes over the whole picture
    post(c, t, W, H) {
      c.save();
      c.globalCompositeOperation = 'soft-light';
      const g = c.createLinearGradient(0, 0, W, H); g.addColorStop(0, 'rgba(255,214,150,.45)'); g.addColorStop(1, 'rgba(60,70,140,.30)');
      c.fillStyle = g; c.fillRect(0, 0, W, H);
      c.globalCompositeOperation = 'source-over';
      const v = c.createRadialGradient(W / 2, H / 2, H * 0.45, W / 2, H / 2, W * 0.68); v.addColorStop(0, 'rgba(20,15,35,0)'); v.addColorStop(1, 'rgba(20,15,35,.30)');
      c.fillStyle = v; c.fillRect(0, 0, W, H);
      if (!calm) {
        c.globalCompositeOperation = 'lighter';
        for (let i = 0; i < 14; i++) {
          const px = (hash(i, 1, 9) * W + t / (60 + i * 7)) % W, py = (hash(i, 2, 9) * H + Math.sin(t / 2000 + i) * 6 + H) % H;
          const a = (Math.sin(t / 900 + i * 2) + 1) / 2;
          c.fillStyle = `rgba(255,240,190,${0.08 + a * 0.12})`; c.fillRect(px, py, 0.75, 0.75);
        }
      }
      c.restore();
    }
  };


  /* ---------------- the Void (HistoryWalker's villain) and its shades ----------------
     A hole in the world: a black core with a thin ring of violet light, dust and leaves spiralling into it, dark
     tendrils reaching out, and two narrow eyes that open in the dark. When it roars the ring burns red and the eyes
     widen. Its shades are wisps of the same darkness with two cold eyes. */
  WW.hd.drawBoss = (c, x, y, t, roar) => {
    const cx = x + 8, cy = y + 4, T0 = calm ? 0 : t, pulse = (Math.sin(T0 / 380) + 1) / 2;
    // the ground darkens around it
    let g = c.createRadialGradient(cx, cy + 6, 2, cx, cy + 6, 34);
    g.addColorStop(0, 'rgba(10,0,20,.55)'); g.addColorStop(1, 'rgba(10,0,20,0)'); c.fillStyle = g; c.fillRect(cx - 34, cy - 28, 68, 68);
    // dust and light being pulled in, spiralling
    for (let i = 0; i < 36; i++) {
      const life = ((T0 / (900 + (i % 5) * 120)) + i * 0.137) % 1, r = 26 * (1 - life) + 6, a = i * 2.4 + life * 5.5;
      c.fillStyle = i % 4 ? `rgba(150,120,200,${0.15 + life * 0.5})` : `rgba(255,230,200,${0.2 + life * 0.5})`;
      c.fillRect(cx + Math.cos(a) * r, cy + Math.sin(a) * r * 0.6, 0.6, 0.6);
    }
    // tendrils reaching out
    c.lineCap = 'round';
    for (let k = 0; k < 7; k++) {
      const base = k / 7 * Math.PI * 2 + T0 / 2600, len = 15 + Math.sin(T0 / 500 + k * 1.7) * 5 + (roar ? 6 : 0);
      c.strokeStyle = 'rgba(8,0,16,.85)'; c.lineWidth = 2.2; c.beginPath(); c.moveTo(cx, cy);
      for (let s = 1; s <= 6; s++) { const f = s / 6, wob = Math.sin(T0 / 300 + k + f * 4) * 2.5 * f; c.lineTo(cx + Math.cos(base) * len * f + Math.cos(base + 1.57) * wob, cy + Math.sin(base) * len * f * 0.7 + Math.sin(base + 1.57) * wob); }
      c.stroke(); c.lineWidth = 0.7; c.strokeStyle = roar ? 'rgba(200,40,60,.5)' : 'rgba(120,80,190,.35)'; c.stroke();
    }
    // the ring of light at its edge
    c.save(); c.translate(cx, cy);
    const R = 9 + pulse * 1.2 + (roar ? 2 : 0);
    g = c.createRadialGradient(0, 0, R - 3, 0, 0, R + 4); g.addColorStop(0, roar ? 'rgba(255,60,60,.9)' : 'rgba(170,120,255,.85)'); g.addColorStop(0.4, roar ? 'rgba(160,20,40,.5)' : 'rgba(90,40,170,.45)'); g.addColorStop(1, 'rgba(40,0,60,0)');
    c.fillStyle = g; c.beginPath(); c.arc(0, 0, R + 4, 0, 7); c.fill();
    for (let i = 0; i < 18; i++) { const a = i / 18 * Math.PI * 2 + T0 / 700; c.fillStyle = `rgba(230,210,255,${0.3 + 0.4 * ((i + Math.floor(T0 / 120)) % 3 === 0)})`; c.fillRect(Math.cos(a) * (R + 0.5), Math.sin(a) * (R + 0.5) * 0.92, 0.7, 0.7); }
    // the black core
    c.fillStyle = '#030006'; c.beginPath(); c.arc(0, 0, R - 0.5, 0, 7); c.fill();
    g = c.createRadialGradient(0, 0, 0, 0, 0, R); g.addColorStop(0, 'rgba(0,0,0,1)'); g.addColorStop(0.8, 'rgba(20,0,35,1)'); g.addColorStop(1, 'rgba(60,10,90,1)');
    c.fillStyle = g; c.beginPath(); c.arc(0, 0, R - 0.5, 0, 7); c.fill();
    // the eyes: narrow, slowly opening and closing; wide and red when it roars
    const open = roar ? 1 : Math.max(0.15, (Math.sin(T0 / 1500) + 1) / 2), ey = -1;
    [-1, 1].forEach(s => { // narrow, slanted, angry eyes: a sharp sliver of light, darker at the inner corner
      const ex = s * 3.4, h = 0.35 + open * (roar ? 1.3 : 0.9), w = 2.9;
      c.save(); c.translate(ex, ey); c.rotate(s * -0.38);
      c.fillStyle = roar ? 'rgba(255,40,40,.35)' : 'rgba(190,150,255,.22)'; c.beginPath(); c.ellipse(0, 0, w + 1.1, h + 0.9, 0, 0, 7); c.fill();
      c.fillStyle = roar ? '#ff3030' : '#efe6ff';
      c.beginPath(); c.moveTo(-w, 0); c.quadraticCurveTo(0, -h * 1.6, w, -h * 0.2); c.quadraticCurveTo(0, h * 1.2, -w, 0); c.fill();
      c.fillStyle = '#030006'; c.fillRect(-0.3, -h, 0.6, h * 1.8); // a thin slit pupil
      c.restore();
    });
    // a jagged mouth that opens when it roars
    if (roar) { c.fillStyle = '#ff3030'; c.beginPath(); c.moveTo(-4, 3); for (let i = 0; i <= 8; i++) c.lineTo(-4 + i, 3 + (i % 2 ? 1.6 : 0)); c.lineTo(4, 4.5); c.lineTo(-4, 4.5); c.fill(); }
    c.restore();
  };
  // its portrait in the trial panel (80 x 80): the same void, still, with the eyes open
  WW.bossFace = (cv, furious, last) => {
    const c = cv.getContext('2d'), S = cv.width / 16; c.save(); c.clearRect(0, 0, cv.width, cv.height); c.fillStyle = '#0a0612'; c.fillRect(0, 0, cv.width, cv.height);
    c.scale(S * 0.8, S * 0.8); c.translate(2, 5); WW.hd.drawBoss(c, 0, 0, performance.now(), furious || last === 'hit'); c.restore();
  };
  // the shades: wisps of darkness with cold eyes (they sway, trail smoke, and flash white when hit)
  WW.hd.drawFoe = (c, e, x, y, t, rage) => {
    const T0 = calm ? 0 : t + (e.phase || 0) * 700, hurt = e.hurtT && t - e.hurtT < 200, bob = Math.sin(T0 / 300) * 1.2;
    c.fillStyle = 'rgba(10,0,20,.3)'; c.beginPath(); c.ellipse(x + 8, y + 14.5, 5, 1.5, 0, 0, 7); c.fill();
    const body = hurt ? 'rgba(255,255,255,.9)' : 'rgba(14,6,26,.88)', edge = rage ? 'rgba(200,40,60,.6)' : 'rgba(120,80,190,.5)';
    // a trailing tail of smoke
    for (let i = 0; i < 6; i++) { const f = i / 6; c.fillStyle = hurt ? 'rgba(255,255,255,.4)' : `rgba(14,6,26,${0.6 - f * 0.45})`; c.beginPath(); c.arc(x + 8 + Math.sin(T0 / 200 + i) * 2.2 * f, y + 9 + bob + i * 1.1, 3.6 - f * 2.4, 0, 7); c.fill(); }
    // the hooded head and shoulders
    c.fillStyle = edge; c.beginPath(); c.ellipse(x + 8, y + 5 + bob, 5.6, 6.4, 0, 0, 7); c.fill();
    c.fillStyle = body; c.beginPath(); c.ellipse(x + 8, y + 5 + bob, 5, 5.8, 0, 0, 7); c.fill();
    if (e.type === 'bat') { [-1, 1].forEach(s => { c.beginPath(); c.moveTo(x + 8 + s * 3, y + 4 + bob); c.lineTo(x + 8 + s * 9, y + 1 + bob + Math.sin(T0 / 90) * 2); c.lineTo(x + 8 + s * 6, y + 7 + bob); c.fill(); }); }
    // two cold eyes
    const eyeCol = rage ? '#ff4040' : '#d8ccff';
    c.fillStyle = rage ? 'rgba(255,40,40,.35)' : 'rgba(200,180,255,.3)'; c.fillRect(x + 4.6, y + 3.6 + bob, 2.8, 2); c.fillRect(x + 8.6, y + 3.6 + bob, 2.8, 2);
    c.fillStyle = eyeCol; c.fillRect(x + 5, y + 4 + bob, 2, 1.1); c.fillRect(x + 9, y + 4 + bob, 2, 1.1);
  };
  /* ---------------- inside the houses, HD (rooms.js asks for these) ----------------
     A room seen from the side, drawn twice as fine, styled by the place (ep.style): its walls, floor, window, the light
     that falls through it, and the things people kept at home there. The still parts are drawn once and kept. */
  const RW = 256, RH = 176, FL = 132, RA = 2; // the room in map units; RA art pixels per unit
  const rcache = new Map(), SLOTS = [96, 150, 212, 232, 232];
  const ROOMS = {
    china:   { wall: '#efe3c8', wall2: '#d8c6a2', trim: '#8c2f22', floor: 'wood', fc: ['#7a4e2a', '#8a5a33', '#946038'], win: 'lattice', items: ['teatable', 'scroll', 'vase', 'lanternR'] },
    japan:   { wall: '#efe6cf', wall2: '#c9bd9c', trim: '#5a4030', floor: 'tatami', fc: ['#c9b77c', '#d6c48c', '#b6a36a'], win: 'lattice', items: ['teatable', 'scroll', 'plant', 'lanternR'] },
    islam:   { wall: '#f3efe6', wall2: '#ddd6c6', trim: '#2a7f9a', floor: 'tile', fc: ['#b8433a', '#8f2f28', '#d9a65a'], win: 'arch', items: ['cushions', 'niche', 'books', 'lampH', 'carpet'] },
    ottoman: { wall: '#f1ebe0', wall2: '#dcd3c2', trim: '#2a7f9a', floor: 'tile', fc: ['#b8433a', '#8f2f28', '#d9a65a'], win: 'arch', items: ['cushions', 'niche', 'books', 'lampH', 'carpet'] },
    india:   { wall: '#e8c49a', wall2: '#d4a878', trim: '#8a3a2a', floor: 'stone', fc: ['#c9a27a', '#b88f68', '#d6b48c'], win: 'jali', items: ['charpai', 'textile', 'brass'] },
    sahel:   { wall: '#c98a55', wall2: '#b07445', trim: '#5a3418', floor: 'earth', fc: ['#9c6a3b', '#8a5a30', '#a8784a'], win: 'hole', items: ['pots', 'mudniche', 'baskets', 'mat'] },
    swahili: { wall: '#ece4d2', wall2: '#d4c8ae', trim: '#4a2e18', floor: 'stone', fc: ['#d9cdb4', '#c9bd9f', '#e6dcc6'], win: 'hole', items: ['chest', 'coralniches', 'pots', 'mat'] },
    andes:   { wall: '#9a9a90', wall2: '#83837a', trim: '#5a4a3a', floor: 'earth', fc: ['#8a6a4a', '#7a5c3e', '#9a7858'], win: 'trap', items: ['pots', 'weaving', 'quipu', 'mat'] },
    mesoamerica: { wall: '#f1ece0', wall2: '#d9d0bd', trim: '#b8452f', floor: 'earth', fc: ['#b8956a', '#a8855c', '#c4a278'], win: 'hole', items: ['metate', 'codex', 'pots', 'maize'] },
    steppe:  { wall: '#d9c7a4', wall2: '#c4b088', trim: '#b04a2a', floor: 'carpetfull', fc: ['#8f2f28', '#b8433a', '#d9a65a'], win: 'none', items: ['stove', 'lattice', 'chest'] },
    europe:  { wall: '#e9dcc0', wall2: '#d9c9a6', trim: '#5a3d24', floor: 'wood', fc: ['#7a4e2a', '#8a5a33', '#6e4425'], win: 'mullion', items: ['fireplace', 'shelf', 'table', 'tapestry'] }
  };
  function roomBg(styleName) {
    const key = styleName; let cv = rcache.get(key); if (cv) return cv;
    const S = ROOMS[styleName] || ROOMS.europe;
    cv = document.createElement('canvas'); cv.width = RW * RA; cv.height = RH * RA; const c = cv.getContext('2d');
    const P = (x, y, w, h, col) => { c.fillStyle = col; c.fillRect(Math.round(x * RA), Math.round(y * RA), Math.round(w * RA), Math.round(h * RA)); };
    const W = hex(S.wall), W2 = hex(S.wall2), F = FL * RA;
    // the back wall: plaster, mud, stone or felt, with soft noise and darker toward the corners
    for (let y = 0; y < F; y++) for (let x = 0; x < RW * RA; x++) {
      let l = 0.94 + (vnoise(x, y, 14, 71) - 0.5) * 0.14 + (h2(x, y, 3) - 0.5) * 0.05 - Math.abs(x / (RW * RA) - 0.5) * 0.18 - (y < 40 ? (40 - y) / 300 : 0);
      if (styleName === 'andes') { const bx = Math.floor((x + (Math.floor(y / 26) % 2) * 20) / 40), by = Math.floor(y / 26), ex = (x + (Math.floor(y / 26) % 2) * 20) % 40, ey = y % 26; l = 0.8 + h2(bx, by, 7) * 0.25 - (ex < 2 || ey < 2 ? 0.4 : 0) - Math.abs(x / (RW * RA) - 0.5) * 0.15; }
      c.fillStyle = shade(y > F - 70 ? W2 : W, l); c.fillRect(x, y, 1, 1);
    }
    // ceiling beams and a skirting line
    P(0, 0, RW, 12, S.trim); P(0, 12, RW, 1.5, 'rgba(0,0,0,.35)');
    for (let x = 18; x < RW; x += 48) { P(x, 0, 8, 13, shade(hex(S.trim), 0.7)); P(x, 0, 2, 13, shade(hex(S.trim), 1.15)); }
    P(0, FL - 5, RW, 5, S.trim); P(0, FL - 5, RW, 1, shade(hex(S.trim), 1.3));
    if (styleName === 'islam' || styleName === 'ottoman') for (let x = 0; x < RW; x += 12) { P(x, FL - 30, 12, 12, '#1d5a6e'); P(x + 2, FL - 28, 8, 8, '#2a8fa8'); P(x + 4, FL - 26, 4, 4, '#f2c14e'); P(x + 5, FL - 25, 2, 2, '#2a8fa8'); }
    if (styleName === 'china' || styleName === 'japan') for (let x = 0; x < RW; x += 64) { P(x, 13, 5, FL - 18, S.trim); P(x + 1, 13, 1.5, FL - 18, shade(hex(S.trim), 1.3)); }
    if (styleName === 'mesoamerica') for (let x = 0; x < RW; x += 16) { P(x, 16, 8, 5, '#b8452f'); P(x + 8, 21, 8, 5, '#b8452f'); }
    if (styleName === 'steppe') for (let x = -40; x < RW + 40; x += 10) for (let k = 0; k < 9; k++) { P(x + k * 5, 20 + k * 11, 2, 2, '#8a6a3a'); P(x + 40 - k * 5, 20 + k * 11, 2, 2, '#8a6a3a'); }
    // the floor
    for (let y = F; y < RH * RA; y++) for (let x = 0; x < RW * RA; x++) {
      const fy = y - F, fc = S.fc.map(hex); let col = fc[0], l = 0.95 + (h2(x, y, 9) - 0.5) * 0.08 - fy / 400;
      if (S.floor === 'wood') { const plank = Math.floor(fy / 9), off = (plank % 3) * 37; col = fc[(plank % 3)]; if (fy % 9 === 0) l -= 0.35; if ((x + off) % 74 === 0) l -= 0.3; l += (vnoise(x * 0.3, y * 3, 8, 5) - 0.5) * 0.18; }
      else if (S.floor === 'tile') { const tx = Math.floor(x / 22), ty = Math.floor(fy / 11); col = (tx + ty) % 2 ? fc[0] : fc[2]; if (x % 22 === 0 || fy % 11 === 0) l -= 0.35; }
      else if (S.floor === 'tatami') { col = fc[Math.floor(x / 90) % 2]; if (x % 90 < 2 || fy % 44 === 0) col = hex('#3a5a3a'); l += Math.sin(x * 1.3) * 0.04; }
      else if (S.floor === 'stone') { const tx = Math.floor((x + (Math.floor(fy / 16) % 2) * 15) / 30), ty = Math.floor(fy / 16); col = fc[(tx * 7 + ty) % 3]; if ((x + (Math.floor(fy / 16) % 2) * 15) % 30 === 0 || fy % 16 === 0) l -= 0.3; }
      else if (S.floor === 'carpetfull') { const d = Math.abs(x / (RW * RA) - 0.5) * 8 + fy / 22; col = fc[Math.floor(d) % 3]; if (Math.floor(d * 4) % 4 === 0) l -= 0.2; }
      else { l += (vnoise(x, y, 10, 13) - 0.5) * 0.2; }
      c.fillStyle = shade(col, l); c.fillRect(x, y, 1, 1);
    }
    c.fillStyle = 'rgba(0,0,0,.25)'; c.fillRect(0, F, RW * RA, 3);
    // the door out, on the left, open to daylight
    P(4, 58, 32, FL - 58, '#22202e'); P(6, 60, 28, FL - 60, '#bfe3ff'); P(6, 96, 28, FL - 96, '#7cc451'); P(6, 96, 28, 2, '#5aa548');
    P(6, 60, 28, 3, 'rgba(255,255,255,.4)'); P(36, 58, 3, FL - 58, S.trim); P(1, 58, 3, FL - 58, S.trim);
    // the window
    const wx = 58;
    if (S.win === 'lattice') { P(wx, 36, 40, 34, '#22202e'); P(wx + 2, 38, 36, 30, '#f8efd6'); for (let i = 1; i < 6; i++) P(wx + 2 + i * 6, 38, 1, 30, S.trim); for (let j = 1; j < 5; j++) P(wx + 2, 38 + j * 6, 36, 1, S.trim); }
    else if (S.win === 'arch' || S.win === 'jali') { for (let y = 30; y < 74; y++) { const w = y < 44 ? Math.sqrt(Math.max(0, 196 - (44 - y) * (44 - y))) : 14; P(wx + 20 - w - 1, y, w * 2 + 2, 1, '#22202e'); P(wx + 20 - w + 1, y, w * 2 - 2, 1, S.win === 'jali' ? '#c98a5a' : '#bfe3ff'); } if (S.win === 'jali') for (let y = 36; y < 72; y += 4) for (let x = wx + 9; x < wx + 32; x += 4) P(x, y, 2, 2, '#f8e8c8'); else { P(wx + 19, 32, 2, 42, '#1d5a6e'); P(wx + 6, 52, 28, 2, '#1d5a6e'); } }
    else if (S.win === 'mullion') { P(wx, 36, 40, 34, '#22202e'); P(wx + 2, 38, 36, 30, '#bfe3ff'); P(wx + 19, 38, 2, 30, '#5a3d24'); P(wx + 2, 52, 36, 2, '#5a3d24'); P(wx - 4, 70, 48, 3, '#5a3d24'); }
    else if (S.win === 'trap') { for (let y = 40; y < 72; y++) { const w = 10 + (y - 40) * 0.25; P(wx + 20 - w, y, w * 2, 1, '#22202e'); P(wx + 21 - w, y, w * 2 - 2, 1, '#bfe3ff'); } }
    else if (S.win === 'hole') { P(wx + 6, 40, 26, 22, '#22202e'); P(wx + 8, 42, 22, 18, '#bfe3ff'); P(wx + 6, 62, 26, 3, shade(W, 0.75)); }
    // things in the room
    S.items.forEach((k, i) => { const x = k === 'carpet' || k === 'mat' ? 120 : SLOTS[i]; ITEM[k] && ITEM[k](P, x, S); }); // slot 2 is on the wall behind the person, so nobody stands in front of a pot
    rcache.set(key, cv); return cv;
  }
  const ITEM = {
    scroll(P, x) { P(x + 4, 22, 30, 3, '#5a4030'); P(x + 6, 25, 26, 56, '#f8f1dc'); P(x + 10, 34, 18, 22, '#cfe0c8'); P(x + 12, 46, 14, 8, '#5f8a5a'); P(x + 16, 38, 4, 6, '#2a4a3a'); P(x + 22, 62, 5, 5, '#c0392b'); P(x + 13, 66, 1.5, 9, '#22202e'); P(x + 16, 68, 1.5, 7, '#22202e'); P(x + 4, 81, 30, 3, '#5a4030'); },
    vase(P, x) { P(x + 8, 96, 22, 36, '#22202e'); P(x + 10, 98, 18, 33, '#f4f6fb'); P(x + 13, 92, 12, 6, '#22202e'); P(x + 14, 93, 10, 5, '#f4f6fb'); for (let i = 0; i < 4; i++) P(x + 11 + i * 4, 104 + (i % 2) * 6, 3, 10, '#2f5fa8'); P(x + 11, 120, 16, 2, '#2f5fa8'); P(x + 11, 99, 4, 20, 'rgba(255,255,255,.6)'); },
    teatable(P, x) { P(x, 112, 52, 6, '#5a2a1e'); P(x, 112, 52, 1.5, '#8c4a32'); P(x + 4, 118, 5, 14, '#4a2018'); P(x + 43, 118, 5, 14, '#4a2018'); P(x + 14, 104, 12, 8, '#22202e'); P(x + 15, 105, 10, 6, '#e8eef6'); P(x + 25, 106, 4, 2, '#e8eef6'); P(x + 32, 107, 6, 5, '#e8eef6'); P(x + 40, 107, 6, 5, '#e8eef6'); P(x + 33, 108, 4, 1, '#7a9a5a'); },
    lanternR(P, x) { P(x + 14, 13, 1, 16, '#3d2a18'); P(x + 6, 29, 18, 24, '#22202e'); P(x + 7, 30, 16, 22, '#d9402f'); P(x + 7, 33, 16, 1, '#a02a1e'); P(x + 7, 47, 16, 1, '#a02a1e'); P(x + 11, 35, 8, 10, '#ffcf6a'); P(x + 12, 53, 6, 5, '#f2c14e'); },
    plant(P, x) { P(x + 6, 112, 18, 20, '#22202e'); P(x + 7, 113, 16, 18, '#a8583a'); for (let i = 0; i < 7; i++) { const lx = x + 4 + i * 3.5, h = 14 + (i % 3) * 8; P(lx, 112 - h, 3, h, i % 2 ? '#3f8a3a' : '#5aa548'); } },
    niche(P, x) { for (let y = 20; y < 92; y++) { const w = y < 36 ? Math.sqrt(Math.max(0, 256 - (36 - y) * (36 - y))) : 16; P(x + 20 - w - 1, y, w * 2 + 2, 1, '#22202e'); P(x + 20 - w + 1, y, w * 2 - 2, 1, '#2a7f9a'); } for (let y = 40; y < 88; y += 8) for (let i = 0; i < 4; i++) P(x + 8 + i * 7, y + (i % 2) * 4, 3, 3, '#f2c14e'); P(x + 14, 70, 12, 18, '#d9a640'); P(x + 16, 66, 8, 4, '#b8862a'); },
    carpet(P, x) { P(x - 60, FL + 12, 150, 28, '#5a1828'); P(x - 57, FL + 14, 144, 24, '#a8303a'); P(x - 52, FL + 17, 134, 18, '#7a1f2e'); for (let i = 0; i < 9; i++) { P(x - 44 + i * 15, FL + 22, 8, 8, '#d9a640'); P(x - 42 + i * 15, FL + 24, 4, 4, '#1d5a6e'); } for (let i = 0; i < 37; i++) { P(x - 60 + i * 4, FL + 40, 1.5, 3, '#e8d8b8'); } },
    lampH(P, x) { P(x + 14, 13, 1, 22, '#3d2a18'); P(x + 6, 35, 18, 6, '#22202e'); P(x + 7, 36, 16, 4, '#d9a640'); P(x + 4, 41, 22, 10, '#22202e'); P(x + 5, 42, 20, 8, '#c9902a'); for (let i = 0; i < 5; i++) P(x + 7 + i * 4, 44, 2, 3, '#ffe9a0'); P(x + 11, 51, 8, 4, '#b8862a'); },
    cushions(P, x) { P(x, 116, 24, 16, '#22202e'); P(x + 1, 117, 22, 14, '#2a8fa8'); P(x + 4, 121, 16, 2, '#f2c14e'); P(x + 22, 119, 22, 13, '#22202e'); P(x + 23, 120, 20, 11, '#8e3a5a'); P(x + 26, 124, 14, 2, '#f2c14e'); },
    books(P, x) { P(x, 46, 40, 3, '#5a3a20'); P(x, 76, 40, 3, '#5a3a20'); [['#7a2a2a', 0], ['#2a4a7a', 6], ['#5a6a2a', 11], ['#8a6a2a', 17], ['#3a2a5a', 24]].forEach(([c2, dx], i) => P(x + 2 + dx, 32 + (i % 2) * 3, 5, 14 - (i % 2) * 3, c2)); P(x + 6, 64, 14, 12, '#d9a640'); P(x + 8, 66, 10, 8, '#22202e'); P(x + 12, 68, 2, 4, '#d9a640'); },
    textile(P, x) { P(x, 24, 40, 50, '#22202e'); for (let i = 0; i < 12; i++) P(x + 1, 25 + i * 4, 38, 4, ['#d9402f', '#f2c14e', '#2a8a6a', '#8e3a8a'][i % 4]); for (let i = 0; i < 9; i++) P(x + 1 + i * 4.3, 74, 1.5, 6, '#f2c14e'); },
    brass(P, x) { P(x + 4, 112, 22, 20, '#22202e'); P(x + 5, 113, 20, 18, '#c9902a'); P(x + 8, 108, 14, 5, '#a87020'); P(x + 6, 115, 4, 12, 'rgba(255,240,180,.6)'); P(x + 28, 120, 14, 12, '#22202e'); P(x + 29, 121, 12, 10, '#d9a640'); },
    charpai(P, x) { P(x - 10, 110, 60, 4, '#7a4a2a'); for (let i = 0; i < 12; i++) P(x - 8 + i * 5, 106, 3, 4, '#e8d8b8'); P(x - 10, 114, 4, 18, '#5a3418'); P(x + 46, 114, 4, 18, '#5a3418'); },
    mudniche(P, x) { P(x + 4, 40, 30, 28, '#22202e'); P(x + 6, 42, 26, 26, '#8a5a30'); P(x + 9, 54, 8, 14, '#c9692f'); P(x + 20, 58, 9, 10, '#e8d8b8'); },
    mat(P, x) { P(x - 40, FL + 14, 110, 22, '#c9a45a'); for (let i = 0; i < 22; i++) P(x - 40 + i * 5, FL + 14, 1.5, 22, '#a8843a'); P(x - 40, FL + 20, 110, 1.5, '#8a6a2a'); P(x - 40, FL + 30, 110, 1.5, '#8a6a2a'); },
    pots(P, x) { P(x, 108, 20, 24, '#22202e'); P(x + 1, 109, 18, 22, '#b8582f'); P(x + 4, 104, 12, 5, '#8a3e1e'); P(x + 2, 114, 16, 2, '#e8d8b8'); P(x + 24, 116, 16, 16, '#22202e'); P(x + 25, 117, 14, 14, '#c9792f'); P(x + 27, 113, 10, 4, '#8a3e1e'); },
    baskets(P, x) { P(x, 114, 22, 18, '#22202e'); P(x + 1, 115, 20, 16, '#d9a65a'); for (let y = 117; y < 131; y += 3) P(x + 1, y, 20, 1, '#a8783a'); P(x + 4, 110, 14, 5, '#e04848'); },
    coralniches(P, x) { for (let k = 0; k < 2; k++) for (let j = 0; j < 2; j++) { const nx = x + k * 22, ny = 26 + j * 30; P(nx, ny, 18, 24, '#22202e'); P(nx + 1, ny + 1, 16, 22, '#c9bd9f'); P(nx + 4, ny + 12, 10, 8, '#f4f6fb'); P(nx + 6, ny + 14, 6, 2, '#2f5fa8'); } },
    chest(P, x) { P(x, 104, 40, 28, '#22202e'); P(x + 1, 105, 38, 26, '#6a4426'); for (let i = 0; i < 6; i++) P(x + 4 + i * 6, 108, 2, 20, '#d9a640'); P(x + 1, 112, 38, 2, '#4a2e18'); },
    weaving(P, x) { P(x, 26, 40, 50, '#22202e'); for (let i = 0; i < 10; i++) P(x + 1, 27 + i * 5, 38, 5, ['#d9402f', '#2a2a6a', '#f2c14e', '#2a8a6a', '#ffffff'][i % 5]); for (let i = 0; i < 4; i++) { P(x + 6 + i * 9, 40, 4, 4, '#22202e'); P(x + 6 + i * 9, 62, 4, 4, '#22202e'); } },
    quipu(P, x) { P(x + 2, 30, 34, 3, '#6a4a2a'); for (let i = 0; i < 9; i++) { const c2 = ['#d9402f', '#f2c14e', '#e8d8b8', '#2a8a6a'][i % 4]; P(x + 4 + i * 3.5, 33, 1.2, 30 + (i % 3) * 8, c2); P(x + 3.5 + i * 3.5, 42 + (i % 4) * 5, 2.2, 2.2, c2); } },
    codex(P, x) { P(x, 40, 44, 26, '#22202e'); P(x + 1, 41, 42, 24, '#f6efdc'); for (let i = 0; i < 4; i++) P(x + 1 + i * 10.5, 41, 0.8, 24, '#c9b48a'); P(x + 4, 45, 6, 8, '#d9402f'); P(x + 15, 47, 7, 6, '#2a8a9a'); P(x + 26, 44, 6, 10, '#f2c14e'); P(x + 34, 48, 5, 7, '#3a7a3a'); P(x + 6, 56, 30, 2, '#22202e'); },
    metate(P, x) { P(x, 120, 40, 8, '#22202e'); P(x + 1, 121, 38, 6, '#7a7a72'); P(x + 4, 127, 4, 5, '#5a5a52'); P(x + 32, 127, 4, 5, '#5a5a52'); P(x + 12, 116, 18, 5, '#9a9a90'); P(x + 6, 118, 6, 2, '#f2c14e'); },
    maize(P, x) { P(x + 14, 13, 2, 26, '#8a6a3a'); for (let i = 0; i < 4; i++) { P(x + 8 + i * 4, 38 + (i % 2) * 3, 4, 14, '#f2c14e'); P(x + 8 + i * 4, 38 + (i % 2) * 3, 4, 3, '#a8843a'); } },
    lattice(P, x) { },
    stove(P, x) { P(x + 10, 13, 6, 76, '#3a3a40'); P(x, 88, 26, 44, '#22202e'); P(x + 1, 89, 24, 42, '#5a5a62'); P(x + 6, 104, 14, 12, '#22202e'); },
    fireplace(P, x) { P(x - 4, 64, 54, 68, '#22202e'); P(x - 3, 65, 52, 67, '#8d8d96'); for (let y = 66; y < 132; y += 7) for (let k = ((y / 7) % 2) * 6; k < 50; k += 12) P(x - 2 + k, y, 11, 6, '#9d9da6'); P(x + 8, 94, 30, 38, '#1a1418'); P(x - 8, 60, 62, 5, '#5a3d24'); },
    shelf(P, x) { P(x, 48, 40, 3, '#5a3d24'); P(x, 78, 40, 3, '#5a3d24'); P(x + 3, 38, 7, 10, '#b8582f'); P(x + 13, 40, 6, 8, '#e8d8b8'); P(x + 22, 36, 8, 12, '#4a6a8a'); P(x + 5, 68, 12, 10, '#c9a45a'); P(x + 22, 70, 10, 8, '#7a4a2a'); },
    table(P, x) { P(x - 4, 106, 50, 6, '#5a3418'); P(x - 4, 106, 50, 1.5, '#8a5a30'); P(x, 112, 4, 20, '#4a2a12'); P(x + 38, 112, 4, 20, '#4a2a12'); P(x + 8, 99, 16, 7, '#c99a5a'); P(x + 10, 98, 12, 2, '#e0b878'); P(x + 30, 100, 7, 6, '#7a8a9a'); },
    tapestry(P, x) { P(x, 22, 36, 52, '#22202e'); P(x + 1, 23, 34, 50, '#2a4a6a'); P(x + 4, 26, 28, 44, '#3a6a4a'); P(x + 10, 34, 16, 18, '#d9a640'); P(x + 14, 30, 8, 6, '#f8f1dc'); for (let i = 0; i < 8; i++) P(x + 2 + i * 4.3, 73, 1.5, 5, '#d9a640'); }
  };
  WW.hd.roomDraw = (c, t) => {
    const name = (WW.ep && WW.ep.style) || 'europe', S = ROOMS[name] || ROOMS.europe;
    c.drawImage(roomBg(name), 0, 0, RW, RH);
    const T0 = calm ? 0 : t;
    // light falling through the window onto the floor, with dust drifting in it
    c.save(); c.globalCompositeOperation = 'lighter';
    if (S.win !== 'none') { const g = c.createLinearGradient(60, 40, 120, FL + 30); g.addColorStop(0, 'rgba(255,240,200,.22)'); g.addColorStop(1, 'rgba(255,240,200,0)'); c.fillStyle = g; c.beginPath(); c.moveTo(60, 40); c.lineTo(98, 40); c.lineTo(150, FL + 40); c.lineTo(96, FL + 40); c.closePath(); c.fill();
      for (let i = 0; i < 16; i++) { const k = ((T0 / 9000) + i * 0.0625) % 1, px = 68 + i * 4.3 + k * 38, py = 46 + ((i * 37) % 70) + Math.sin(T0 / 900 + i) * 3; c.fillStyle = `rgba(255,245,210,${0.25 + 0.3 * Math.sin(T0 / 600 + i) ** 2})`; c.fillRect(px, py, 0.6, 0.6); } }
    // a warm glow from fire or lamp
    const fireX = S.items.indexOf('fireplace'), lampX = S.items.findIndex(k => k === 'lampH' || k === 'lanternR' || k === 'stove');
    if (fireX >= 0 || lampX >= 0) { const x = SLOTS[fireX >= 0 ? fireX : lampX] + 20, y = fireX >= 0 ? 116 : (S.items[lampX] === 'stove' ? 110 : 44), f = 1 + Math.sin(T0 / 110) * 0.06 + Math.sin(T0 / 47) * 0.04; const g = c.createRadialGradient(x, y, 2, x, y, 60 * f); g.addColorStop(0, 'rgba(255,170,80,.30)'); g.addColorStop(1, 'rgba(255,170,80,0)'); c.fillStyle = g; c.fillRect(x - 70, y - 70, 140, 140); }
    c.restore();
    if (fireX >= 0) { const x = SLOTS[fireX] + 8, f = calm ? 0 : Math.floor(T0 / 120) % 3; c.fillStyle = '#d9402f'; c.fillRect(x + 6, 114 - f, 18, 18 + f); c.fillStyle = '#f2a03a'; c.fillRect(x + 9, 118 - f * 2, 12, 14 + f * 2); c.fillStyle = '#ffe08a'; c.fillRect(x + 12, 123 - f, 6, 9 + f); c.fillStyle = '#4a2e18'; c.fillRect(x + 4, 129, 22, 3); }
    // a soft vignette
    const v = c.createRadialGradient(RW / 2, RH / 2, RH * 0.4, RW / 2, RH / 2, RW * 0.7); v.addColorStop(0, 'rgba(20,10,30,0)'); v.addColorStop(1, 'rgba(20,10,30,.35)'); c.fillStyle = v; c.fillRect(0, 0, RW, RH);
  };
  // people inside: the finer people, twice their map size (feet on the floor at y)
  WW.hd.roomPerson = (c, pal, kind, x, y, dir, frame) => {
    c.fillStyle = 'rgba(0,0,0,.22)'; c.beginPath(); c.ellipse(x + 16, y + 39, 13, 3, 0, 0, 7); c.fill();
    c.drawImage(personPic(pal, kind, dir, frame, false), 0, 0, 32, 40, x, y, 32, 40);
  };
  WW.hd.kindOf = p => kindOf(p);

  // people on the map stand facing you and blink now and then; the hero walks in four frames
  const oldPerson = WW.drawPerson;
  WW.drawPerson = (c, p, x, y, t, phase = 0) => {
    const pal = WW.lookPal(p.look), blink = !calm && (((t || 0) + phase * 977) % 3700) < 130;
    drawHDPerson(c, pal, kindOf(p), x, y + 2, 'down', 0, blink);
  };
  void oldPerson;
  WW.hd.hero = (c, x, y, dir, moving, now) => {
    const frame = moving ? (Math.floor(now / 110) % 4) : 0, l = (WW.save && WW.save.look) || {};
    drawHDPerson(c, WW.heroPal(), { robe: false, hat: !!(l.hat), style: 'short' }, x, y, dir, frame, false);
  };

  // a reading stand: a carved wooden lectern with an open book; it glows softly until you have read it
  WW.drawDoc = (c, x, y, t, read) => {
    if (!read) { const a = calm ? 0.5 : (Math.sin(t / 300) + 1) / 2; const g = c.createRadialGradient(x + 8, y + 5, 1, x + 8, y + 5, 12); g.addColorStop(0, `rgba(255,236,160,${0.35 + a * 0.3})`); g.addColorStop(1, 'rgba(255,236,160,0)'); c.fillStyle = g; c.fillRect(x - 4, y - 7, 24, 24); }
    c.fillStyle = 'rgba(20,20,30,.25)'; c.beginPath(); c.ellipse(x + 8, y + 15, 5, 1.5, 0, 0, 7); c.fill();
    const P = (px, py, w, h, col) => { c.fillStyle = col; c.fillRect(x + px, y + py, w, h); };
    P(6.5, 6, 3, 9, '#22202e'); P(7, 6, 2, 8.5, '#8a5a30'); P(7, 6, 0.5, 8.5, '#b98250'); P(4, 14, 8, 1.5, '#22202e'); P(4.5, 14, 7, 1, '#6e4425');
    P(1.5, 2, 13, 5, '#22202e'); P(2, 2.5, 12, 4, '#5a3a20');
    P(2.5, 1, 5.5, 4.5, '#fbf4e2'); P(8, 1, 5.5, 4.5, '#f4ead2'); P(7.75, 1, 0.5, 4.5, '#c9b48a');
    for (let i = 0; i < 4; i++) { P(3.2, 1.8 + i, 4, 0.4, '#8a7a62'); P(8.8, 1.8 + i, 4, 0.4, '#8a7a62'); }
    P(11.5, 0, 0.6, 3.5, '#c0392b'); // a ribbon bookmark
    if (!read && !calm) { const k = Math.floor(t / 400) % 3; P(7.5 - 0.5, -3 - k * 0.6, 1, 1, '#fff6c0'); }
  };

  // the ground tiles: inside the HD tile loop the ground is already down (noGround); anywhere else (a house's yard
  // drawn by an old tile, the map page, challenge pictures) they draw the HD square for that spot
  ['.', ',', '"', 's', ':', 'l', 'g', 'z', 'n', 'i', 'o', 'f', '~', '='].forEach(k => {
    const old = tiles[k];
    tiles[k] = (c, x, y, gx, gy, t, m) => {
      if (WW.hd.noGround) return;
      if (!MAP || gx == null) return old(c, x, y, gx, gy, t, m);
      c.drawImage(groundSquare(gx, gy), x, y, T, T);
    };
  });
})();
