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
    '=': ramp(['#18487f', '#1c5592', '#21609f', '#2a6dac'])
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
      case '~': case '=': { const d = Math.min(1, depth); return pick(R_[f], (f === '=' ? 0.9 : 1) - d * 0.75 + (v - 0.5) * 0.25 + j * 0.3); }
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
      if (f === '~' || f === '=') { // smooth depth across the square from the four sides
        const u = px / (A - 1), v = py / (A - 1);
        const lerp = (a, b, t) => a + (b - a) * t;
        depth = wet ? lerp(lerp(dHere, dN[3], Math.max(0, 0.5 - u)), lerp(dHere, dN[1], Math.max(0, u - 0.5)), 0.5) * 0.5 + lerp(lerp(dHere, dN[0], Math.max(0, 0.5 - v)), lerp(dHere, dN[2], Math.max(0, v - 0.5)), 0.5) * 0.5 : 0;
        depth = depth / 2.2;
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
    F: (c, x, y, gx, gy) => c.drawImage(fencePic(gx, gy), x, y, T, T)
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
      if (map !== MAP) { MAP = map; cache.clear(); bcache.clear(); depthCache = new Map(); }
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
