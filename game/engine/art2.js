/* WORLDWALKER engine · more tiles, side-facing hero, the walkable/solid list */
(function () {
  const { tiles, P, R, hash, SPR } = WW;
  const T = 16;

  /* ground under trees / mountains: look at the 4 neighbours and copy the most common ground */
  const GROUNDS = { n: 'n', s: 's', u: 's', g: 'g', z: 'z', f: 'f', l: 'l', '.': '.', ',': '.', '"': '.', ':': ':', i: 'n', k: 's' };
  const RING1 = [[0, -1], [0, 1], [-1, 0], [1, 0], [-1, -1], [1, 1], [1, -1], [-1, 1]];
  const RING2 = [[0, -2], [0, 2], [-2, 0], [2, 0], [-2, -2], [2, 2], [2, -2], [-2, 2], [-1, -2], [1, 2], [2, -1], [-2, 1]];
  function groundAt(m, gx, gy) {
    if (!m) return '.';
    const count = {};
    const look = ring => ring.forEach(([dx, dy]) => {
      const ch = (m[gy + dy] || '')[gx + dx];
      const g = GROUNDS[ch];
      if (g) count[g] = (count[g] || 0) + (g === ':' ? 0.6 : 1); // paths count a little less than real ground
    });
    look(RING1);
    if (!Object.keys(count).length) look(RING2); // deep in a forest or mountain range: look one step further
    let best = '.', n = 0;
    for (const k in count) if (count[k] > n) { n = count[k]; best = k; }
    return best;
  }
  function ground(c, x, y, gx, gy, m) { tiles[groundAt(m, gx, gy)](c, x, y, gx, gy); }

  // wrap the kit's tree/mountain/rock tiles so they sit on the right ground
  const oldT = tiles.T, oldM = tiles.M, oldA = tiles.A, oldR = tiles.r, oldP = tiles.P, oldx = tiles.x, oldF = tiles.F;
  const onGround = (fn, strip) => (c, x, y, gx, gy, t, m) => {
    const g = groundAt(m, gx, gy);
    if (g === '.') return fn(c, x, y, gx, gy, t, m, '.');
    // draw kit tile on a scratch canvas, then copy only non-grass pixels? simpler: draw ground then redraw shape
    tiles[g](c, x, y, gx, gy);
    strip(c, x, y, gx, gy, t, m, g);
  };
  tiles.T = onGround(oldT, (c, x, y) => {
    R(c, x + 3, y + 14, 10, 2, 'rgba(0,0,0,.18)');
    R(c, x + 7, y + 10, 2, 5, P.trunk);
    R(c, x + 2, y + 3, 12, 8, P.leaf); R(c, x + 3, y + 1, 10, 11, P.leaf); R(c, x + 1, y + 5, 14, 5, P.leaf);
    R(c, x + 4, y + 2, 4, 3, P.leafL); R(c, x + 3, y + 4, 2, 2, P.leafL);
    R(c, x + 9, y + 8, 4, 2, P.leafD); R(c, x + 4, y + 10, 8, 1, P.leafD);
  });
  tiles.P = (c, x, y, gx, gy, t, m) => oldP(c, x, y, gx, gy, t, m, groundAt(m, gx, gy) === 'n' ? 'n' : '.');
  tiles.M = (c, x, y, gx, gy, t, m) => { const g = groundAt(m, gx, gy); oldM(c, x, y, gx, gy, t, m, g === 'n' || g === 's' ? g : '.'); };
  tiles.A = (c, x, y, gx, gy, t, m) => { const g = groundAt(m, gx, gy); oldA(c, x, y, gx, gy, t, m, g === 'n' || g === 's' ? g : '.'); };
  tiles.r = (c, x, y, gx, gy, t, m) => {
    ground(c, x, y, gx, gy, m);
    R(c, x + 2, y + 5, 12, 9, P.stoneD); R(c, x + 3, y + 4, 10, 9, P.stone); R(c, x + 4, y + 5, 4, 2, P.stoneL);
  };
  tiles.x = (c, x, y, gx, gy, t, m) => {
    ground(c, x, y, gx, gy, m);
    R(c, x + 7, y + 9, 2, 6, P.woodD); R(c, x + 2, y + 2, 12, 8, P.k); R(c, x + 3, y + 3, 10, 6, P.wood);
    R(c, x + 4, y + 5, 8, 1, P.woodD); R(c, x + 4, y + 7, 6, 1, P.woodD);
  };
  tiles.F = (c, x, y, gx, gy, t, m) => {
    ground(c, x, y, gx, gy, m);
    R(c, x, y + 6, T, 2, P.wood); R(c, x, y + 11, T, 2, P.wood);
    R(c, x + 2, y + 4, 2, 11, P.woodD); R(c, x + 11, y + 4, 2, 11, P.woodD);
  };

  /* ---------- new tiles ---------- */
  tiles.g = (c, x, y, gx, gy) => { // dry grass (Sahel, steppe)
    R(c, x, y, T, T, '#d2b36a');
    for (let i = 0; i < 5; i++) R(c, x + ((hash(gx, gy, i) * 14) | 0), y + ((hash(gx, gy, i + 9) * 13) | 0), 1, 3, i % 2 ? '#a9893f' : '#e6cf8c');
  };
  tiles.z = (c, x, y, gx, gy) => { // tundra: snow with brown-green patches
    R(c, x, y, T, T, '#e7eef2');
    for (let i = 0; i < 4; i++) R(c, x + ((hash(gx, gy, i) * 12) | 0), y + ((hash(gx, gy, i + 5) * 13) | 0), 3, 2, i % 2 ? '#8d9a6a' : '#a7a37a');
  };
  tiles.a = (c, x, y, gx, gy, t, m) => { // acacia
    ground(c, x, y, gx, gy, m);
    R(c, x + 3, y + 13, 10, 2, 'rgba(0,0,0,.18)');
    R(c, x + 7, y + 7, 2, 7, '#5a3a22'); R(c, x + 5, y + 6, 2, 2, '#5a3a22'); R(c, x + 9, y + 6, 2, 2, '#5a3a22');
    R(c, x, y + 3, 16, 3, '#4f7a2a'); R(c, x + 2, y + 2, 12, 1, '#4f7a2a'); R(c, x + 3, y + 1, 9, 1, '#6a9a38');
    R(c, x + 1, y + 6, 14, 1, '#3c5e1f');
  };
  tiles.j = (c, x, y, gx, gy) => { // rainforest tree (dense, dark)
    R(c, x, y, T, T, '#2f6b2a');
    R(c, x + 1, y + 1, 14, 13, '#1f5a24'); R(c, x + 3, y + 2, 5, 4, '#3d8a35'); R(c, x + 9, y + 6, 5, 4, '#3d8a35');
    R(c, x + 2, y + 9, 4, 3, '#16461b'); R(c, x + 7, y + 13, 2, 3, P.trunk);
  };
  tiles.O = (c, x, y, gx, gy, t, m) => { // well
    ground(c, x, y, gx, gy, m);
    R(c, x + 2, y + 6, 12, 9, P.stoneD); R(c, x + 3, y + 7, 10, 7, P.stone); R(c, x + 5, y + 9, 6, 3, '#1d3b5a');
    R(c, x + 2, y + 1, 1, 7, P.woodD); R(c, x + 13, y + 1, 1, 7, P.woodD); R(c, x + 2, y + 1, 12, 2, P.wood);
    R(c, x + 8, y + 3, 1, 5, '#e8e1d0'); R(c, x + 7, y + 7, 3, 2, P.wood);
  };
  tiles.K = (c, x, y, gx, gy, t, m) => { // rolling hill
    ground(c, x, y, gx, gy, m);
    R(c, x + 1, y + 6, 14, 9, '#3f8a2e'); R(c, x + 3, y + 3, 10, 12, '#3f8a2e');
    R(c, x + 4, y + 4, 6, 3, '#7cc451'); R(c, x + 2, y + 7, 3, 2, '#7cc451'); R(c, x + 1, y + 14, 14, 1, '#2e6b22');
  };
  tiles.V = (c, x, y, gx, gy, t, m) => { // volcano
    ground(c, x, y, gx, gy, m);
    for (let r = 0; r < 14; r++) { const half = Math.min(8, 2 + r * 0.5) | 0; R(c, x + 8 - half, y + 2 + r, half, 1, '#6d5a52'); R(c, x + 8, y + 2 + r, half, 1, '#4e3f3a'); }
    R(c, x + 6, y + 2, 4, 2, '#ff7a2a'); R(c, x + 7, y + 4, 2, 3, '#ffb13b');
    const s = ((t || 0) / 400) % 3; R(c, x + 7 + (s | 0), y + 0, 2, 2, 'rgba(120,120,120,.8)');
  };
  tiles.L = (c, x, y, gx, gy, t) => {
    R(c, x, y, T, T, '#c4401d');
    R(c, x + ((hash(gx, gy) * 10) | 0), y + 4 + (((t || 0) / 300) % 3 | 0), 5, 2, '#ffb13b'); R(c, x + 2, y + 11, 6, 2, '#ff7a2a');
  };
  tiles.Q = (c, x, y) => { // blue/slate roof
    R(c, x, y, T, T, '#3c6fb4');
    for (let r = 0; r < 4; r++) R(c, x, y + r * 4 + 3, T, 1, '#2a4f84');
    for (let r = 0; r < 4; r++) R(c, x + (r % 2 ? 4 : 10), y + r * 4, 1, 3, '#2a4f84');
  };
  tiles.J = (c, x, y) => { // flat-roof adobe / stone building
    R(c, x, y, T, T, '#e2c48e'); R(c, x, y, T, 2, '#c9a56a'); R(c, x, y + 14, T, 2, '#b8935a');
    R(c, x + 3, y + 5, 4, 5, '#5a3a22'); R(c, x + 10, y + 5, 3, 3, '#3c6fb4');
  };
  tiles.U = (c, x, y, gx) => { // tall city tower
    R(c, x, y, T, T, '#6e7f96'); R(c, x + 1, y, 14, T, '#8fa3bd');
    for (let r = 0; r < 5; r++) for (let k = 0; k < 3; k++) R(c, x + 3 + k * 4, y + 2 + r * 3, 2, 2, hash(gx + k, r) > .35 ? '#ffe36e' : '#3d4a5c');
  };
  tiles.X = (c, x, y) => { // factory
    R(c, x, y, T, T, '#9a8f86'); R(c, x, y + 6, T, 10, '#b8aca0');
    R(c, x + 2, y, 3, 7, '#7a6f66'); R(c, x + 2, y, 3, 1, '#c0392b');
    for (let k = 0; k < 3; k++) { R(c, x + 1 + k * 5, y + 6, 4, 2, '#8a7f76'); R(c, x + 2 + k * 5, y + 10, 3, 3, '#4a6a8a'); }
  };
  tiles.I = (c, x, y, gx, gy, t, m) => { // oil pump
    ground(c, x, y, gx, gy, m);
    const b = Math.round(Math.sin((t || 0) / 300) * 2);
    R(c, x + 7, y + 6, 2, 9, '#333'); R(c, x + 4, y + 14, 8, 2, '#333');
    R(c, x + 1, y + 5 + b, 14, 2, '#222'); R(c, x + 1, y + 4 + b, 3, 4, '#c0392b');
  };
  tiles.m = (c, x, y, gx, gy, t, m) => { // market stall
    ground(c, x, y, gx, gy, m);
    const cols = ['#e04848', '#f2c14e', '#2aa198', '#8e5bd6'];
    const col = cols[(hash(gx, gy) * 4) | 0];
    for (let k = 0; k < 4; k++) R(c, x + k * 4, y + 2, 4, 4, k % 2 ? '#fffbe8' : col);
    R(c, x + 1, y + 6, 1, 9, P.woodD); R(c, x + 14, y + 6, 1, 9, P.woodD);
    R(c, x + 1, y + 10, 14, 4, P.wood); R(c, x + 3, y + 8, 3, 2, '#e07b39'); R(c, x + 7, y + 8, 3, 2, '#7cc451'); R(c, x + 11, y + 8, 2, 2, '#d1263a');
  };
  tiles.k = (c, x, y, gx, gy, t, m) => { // wooden dock (walkable)
    tiles['~'](c, x, y, gx, gy, t, m);
    R(c, x, y + 1, T, 14, '#9a6a3a');
    for (let r = 0; r < 4; r++) R(c, x, y + 1 + r * 4, T, 1, '#6d4a26');
  };
  tiles['-'] = (c, x, y, gx, gy, t, m) => { // rail east-west
    ground(c, x, y, gx, gy, m);
    for (let k = 0; k < 4; k++) R(c, x + 1 + k * 4, y + 4, 2, 9, '#6d4c2f');
    R(c, x, y + 5, T, 1, '#8a8f98'); R(c, x, y + 11, T, 1, '#8a8f98');
  };
  tiles['|'] = (c, x, y, gx, gy, t, m) => { // rail north-south
    ground(c, x, y, gx, gy, m);
    for (let k = 0; k < 4; k++) R(c, x + 4, y + 1 + k * 4, 9, 2, '#6d4c2f');
    R(c, x + 5, y, 1, T, '#8a8f98'); R(c, x + 11, y, 1, T, '#8a8f98');
  };
  tiles.v = (c, x, y, gx, gy) => { // potatoes
    tiles.o(c, x, y, gx, gy);
    [[3, 4], [10, 5], [5, 10], [11, 11]].forEach(([a, b]) => { R(c, x + a, y + b, 4, 3, P.leaf); R(c, x + a + 1, y + b - 1, 2, 1, P.leafL); });
  };
  tiles.y = (c, x, y, gx, gy) => { // banana plant
    tiles['.'](c, x, y, gx, gy);
    R(c, x + 7, y + 7, 2, 8, '#6b8e23');
    R(c, x + 1, y + 2, 7, 3, P.leafL); R(c, x + 8, y + 1, 7, 3, P.leaf); R(c, x + 2, y + 6, 5, 2, P.leaf); R(c, x + 9, y + 5, 6, 2, P.leafL);
    R(c, x + 9, y + 8, 3, 4, '#f5d33b');
  };
  tiles.e = (c, x, y, gx, gy) => { // sugarcane
    tiles['.'](c, x, y, gx, gy);
    for (let i = 0; i < 4; i++) { const sx = x + 2 + i * 4; R(c, sx, y + 2, 2, 14, '#9acd52'); for (let k = 0; k < 4; k++) R(c, sx, y + 4 + k * 3, 2, 1, '#6e9a35'); R(c, sx - 1, y + 1, 3, 2, P.leaf); }
  };
  tiles.t = (c, x, y, gx, gy) => { // tea / terrace rows on a hillside
    R(c, x, y, T, T, '#4f9a3a');
    for (let r = 0; r < 4; r++) { R(c, x, y + r * 4, T, 3, '#3f8a2e'); R(c, x, y + r * 4 + 3, T, 1, '#7a5a2a'); }
  };

  tiles.l = (c, x, y, gx, gy) => { // light paving: city streets, plazas, factory yards (outdoors)
    R(c, x, y, T, T, '#c9c3b6');
    R(c, x, y + 7, T, 1, '#b2ab9c'); R(c, x, y + 15, T, 1, '#b2ab9c');
    R(c, x + ((gy % 2) ? 4 : 11), y, 1, 7, '#b2ab9c'); R(c, x + ((gy % 2) ? 11 : 4), y + 8, 1, 7, '#b2ab9c');
    if (hash(gx, gy) > .8) R(c, x + 6, y + 3, 2, 1, '#d9d4c8');
  };

  /* ---------- side-facing hero ---------- */
  SPR.heroSide = [
    '................', '.....kkkkkk.....', '....kHHHHHHk....', '...kHHbbbbHHk...',
    '..kkkkkkkkkkkkk.', '....khhhsssk....', '....khhsseskk...', '....khsssssk....',
    '.....kssmmk.....', '....kgccccck....', '...kggcccscck...', '...kggCcccsk....',
    '....kCCCCCCk....', '....kppppppk....', '....kppk.kppk...', '....kBBk..kBBk..'];
  SPR.heroSideWalk = SPR.heroSide.slice(0, 14).concat(['.....kpppk......', '.....kBBBk......']);
  SPR.heroUpWalk = SPR.heroUp.slice(0, 14).concat(['...kppk..kBBk...', '...kBBk.........']);
  SPR.npcWalk = SPR.npc.slice(0, 14).concat(['...kppk..kBBk...', '...kBBk.........']);
  // a stone with a glowing compass mark: where the episode's challenge waits
  SPR.stone = [
    '................', '................', '.....kkkkkk.....', '....kWWWWWWk....',
    '...kWWyyyyWWk...', '...kWyWWWWyWk...', '...kWyWrrWyWk...', '...kWyWnnWyWk...',
    '...kWyWWWWyWk...', '...kWWyyyyWWk...', '...kWWWWWWWWk...', '..kGGGGGGGGGGk..',
    '..kGGGGGGGGGGk..', '...kkkkkkkkkk...', '................', '................'];

  /* walkable or not */
  const SOLID = new Set('TPpcajMAVKrWDRQhJUXIOmFxC~=L '.split(''));
  WW.solid = ch => SOLID.has(ch) || ch === undefined;

  /* named looks for people */
  WW.SKIN = ['#f6d3b3', '#e8b48a', '#c98e62', '#9a6440', '#6f4528', '#4a2e1c'];
  WW.lookPal = (look = {}) => {
    const shade = (hex, f) => { const n = parseInt(hex.slice(1), 16); const r = Math.round(((n >> 16) & 255) * f), g = Math.round(((n >> 8) & 255) * f), b = Math.round((n & 255) * f); return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1); };
    const s = typeof look.skin === 'number' ? WW.SKIN[look.skin] || WW.SKIN[2] : (look.skin || WW.SKIN[2]);
    const shirt = look.shirt || '#2aa198';
    return {
      s, h: look.hair || '#2b1d14', c: shirt, C: shade(shirt, 0.72),
      p: look.robe ? shirt : (look.pants || '#3b4a7a'), B: '#3a2a1a',
      H: look.hat || '#d98e2b', b: shade(look.hat || '#d98e2b', 0.55)
    };
  };
  WW.groundAt = groundAt;
})();
