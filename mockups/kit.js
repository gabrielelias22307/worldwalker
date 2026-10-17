/* WORLDWALKER mockup kit
   Everything here is drawn in code: no picture files.
   World = <canvas> (pixel art). Words, buttons, HUD = HTML on top (easy to read,
   easy to translate, Dari can run right-to-left).                              */
(function () {
  const T = 16; // one tile = 16 x 16 pixels

  const P = {
    k: '#22202e', // outline
    grass: '#5aa83b', grassD: '#3f8a2e', grassL: '#7cc451',
    water: '#2f7fd1', waterL: '#5fb0ee', waterD: '#1d5aa8', foam: '#d8f0ff',
    sand: '#e8d18a', sandD: '#c9b064',
    path: '#c79a5b', pathD: '#a87c45',
    leaf: '#2e7d32', leafD: '#1b5e20', leafL: '#43a047', trunk: '#6d4c2f',
    stone: '#8a8f98', stoneD: '#5e636b', stoneL: '#b5bac2',
    snow: '#f4f8fb', snowD: '#c9dbe8',
    roof: '#c0392b', roofD: '#8e2a20', wall: '#e9d8b4', wallD: '#c9b48c', wood: '#8b5a2b', woodD: '#5f3d1d',
    soil: '#7a4e2d', soilD: '#5c3a20',
    dFloor: '#3a3550', dFloorL: '#47416a', dWall: '#5b5479', dWallD: '#2b2740',
    gold: '#f2c14e', goldD: '#c08a1e', red: '#e04848', white: '#ffffff', ink: '#2b2b3a',
    dune: '#e9b86a', duneD: '#c98f45'
  };

  // stable "random" from tile position, so every redraw looks the same
  function hash(x, y, s = 0) {
    let h = (x * 374761393 + y * 668265263 + s * 2147483647) | 0;
    h = (h ^ (h >>> 13)) * 1274126177;
    return ((h ^ (h >>> 16)) >>> 0) / 4294967295;
  }
  const R = (c, x, y, w, h, col) => { c.fillStyle = col; c.fillRect(x, y, w, h); };

  /* ---------- tiles ---------- */
  function grassBase(c, x, y, gx, gy) {
    R(c, x, y, T, T, P.grass);
    for (let i = 0; i < 5; i++) {
      const a = hash(gx, gy, i), b = hash(gx, gy, i + 9);
      R(c, x + ((a * 14) | 0), y + ((b * 14) | 0), 1, 2, i % 2 ? P.grassD : P.grassL);
    }
  }
  const tiles = {
    '.': grassBase,
    ',': (c, x, y, gx, gy) => { // flowers
      grassBase(c, x, y, gx, gy);
      const cols = ['#ffe36e', '#ff8fb1', '#ffffff', '#b89cff'];
      for (let i = 0; i < 3; i++) {
        const fx = x + 2 + ((hash(gx, gy, i + 3) * 11) | 0), fy = y + 2 + ((hash(gx, gy, i + 7) * 11) | 0);
        R(c, fx, fy, 2, 2, cols[(hash(gx, gy, i) * 4) | 0]);
      }
    },
    '"': (c, x, y, gx, gy) => { // tall grass
      grassBase(c, x, y, gx, gy);
      for (let i = 0; i < 4; i++) {
        const fx = x + 1 + i * 4;
        R(c, fx, y + 6, 1, 7, P.grassD); R(c, fx + 1, y + 4, 1, 9, P.leafL); R(c, fx + 2, y + 7, 1, 6, P.grassD);
      }
    },
    '~': (c, x, y, gx, gy, t, m) => water(c, x, y, gx, gy, t, m, P.water),
    '=': (c, x, y, gx, gy, t, m) => water(c, x, y, gx, gy, t, m, P.waterD),
    's': (c, x, y, gx, gy) => {
      R(c, x, y, T, T, P.sand);
      for (let i = 0; i < 4; i++) R(c, x + ((hash(gx, gy, i) * 15) | 0), y + ((hash(gx, gy, i + 4) * 15) | 0), 1, 1, P.sandD);
    },
    'u': (c, x, y, gx, gy) => { // dune
      R(c, x, y, T, T, P.dune);
      const o = (hash(gx, gy) * 6) | 0;
      for (let i = 0; i < 16; i++) { const yy = 9 + Math.round(Math.sin((i + o) / 2.6) * 3); R(c, x + i, y + yy, 1, 16 - yy, P.duneD); }
    },
    ':': (c, x, y, gx, gy) => {
      R(c, x, y, T, T, P.path);
      for (let i = 0; i < 5; i++) R(c, x + ((hash(gx, gy, i) * 14) | 0), y + ((hash(gx, gy, i + 5) * 14) | 0), 2, 1, P.pathD);
    },
    'T': (c, x, y, gx, gy) => { // round tree
      grassBase(c, x, y, gx, gy);
      R(c, x + 3, y + 14, 10, 2, 'rgba(0,0,0,.18)');
      R(c, x + 7, y + 10, 2, 5, P.trunk);
      R(c, x + 2, y + 3, 12, 8, P.leaf); R(c, x + 3, y + 1, 10, 11, P.leaf); R(c, x + 1, y + 5, 14, 5, P.leaf);
      R(c, x + 4, y + 2, 4, 3, P.leafL); R(c, x + 3, y + 4, 2, 2, P.leafL);
      R(c, x + 9, y + 8, 4, 2, P.leafD); R(c, x + 4, y + 10, 8, 1, P.leafD);
    },
    'P': (c, x, y, gx, gy, t, m, base) => { // pine
      (base === 'n' ? tiles.n : grassBase)(c, x, y, gx, gy);
      R(c, x + 7, y + 12, 2, 4, P.trunk);
      for (let r = 0; r < 12; r++) { const w = 2 + ((r % 4) + (r >> 2)) * 1.6 | 0; R(c, x + 8 - w, y + 1 + r, w * 2, 1, r % 4 === 3 ? P.leafD : '#25693a'); }
      if (base === 'n') { R(c, x + 6, y + 1, 4, 2, P.snow); R(c, x + 4, y + 5, 3, 1, P.snow); R(c, x + 9, y + 9, 4, 1, P.snow); }
    },
    'p': (c, x, y, gx, gy) => { // palm on sand
      tiles.s(c, x, y, gx, gy);
      for (let i = 0; i < 10; i++) R(c, x + 7 + Math.round(Math.sin(i / 4) * 2), y + 5 + i, 2, 1, P.trunk);
      R(c, x + 2, y + 3, 12, 2, P.leaf); R(c, x + 1, y + 5, 3, 2, P.leaf); R(c, x + 12, y + 5, 3, 2, P.leaf);
      R(c, x + 5, y + 1, 6, 2, P.leafL); R(c, x + 7, y + 5, 2, 2, '#7a4b1e');
    },
    'c': (c, x, y, gx, gy) => { // cactus
      tiles.s(c, x, y, gx, gy);
      R(c, x + 6, y + 2, 4, 13, '#3b8f4a'); R(c, x + 2, y + 6, 3, 5, '#3b8f4a'); R(c, x + 11, y + 4, 3, 5, '#3b8f4a');
      R(c, x + 4, y + 9, 2, 2, '#3b8f4a'); R(c, x + 10, y + 7, 2, 2, '#3b8f4a'); R(c, x + 7, y + 3, 1, 11, '#5fb86c');
    },
    'M': (c, x, y, gx, gy, t, m, base) => mountain(c, x, y, gx, gy, false, base),
    'A': (c, x, y, gx, gy, t, m, base) => mountain(c, x, y, gx, gy, true, base),
    'r': (c, x, y, gx, gy) => {
      grassBase(c, x, y, gx, gy);
      R(c, x + 2, y + 5, 12, 9, P.stoneD); R(c, x + 3, y + 4, 10, 9, P.stone); R(c, x + 4, y + 5, 4, 2, P.stoneL);
    },
    'n': (c, x, y, gx, gy) => {
      R(c, x, y, T, T, P.snow);
      for (let i = 0; i < 3; i++) R(c, x + ((hash(gx, gy, i) * 13) | 0), y + ((hash(gx, gy, i + 3) * 14) | 0), 3, 1, P.snowD);
    },
    'i': (c, x, y, gx, gy) => { R(c, x, y, T, T, '#bfe6f5'); R(c, x + 2, y + 3, 6, 1, '#ffffff'); R(c, x + 9, y + 10, 4, 1, '#ffffff'); },
    'W': (c, x, y, gx, gy) => { // stone wall
      R(c, x, y, T, T, P.stoneD);
      for (let r = 0; r < 4; r++) for (let k = 0; k < 2; k++) {
        const o = r % 2 ? 4 : 0; R(c, x + ((k * 8 + o) % 16), y + r * 4, 7, 3, hash(gx * 3 + k, gy * 4 + r) > .5 ? P.stone : '#7d828b');
      }
    },
    'D': (c, x, y, gx, gy) => { // dungeon wall
      R(c, x, y, T, T, P.dWallD);
      for (let r = 0; r < 4; r++) for (let k = 0; k < 2; k++) {
        const o = r % 2 ? 4 : 0; R(c, x + ((k * 8 + o) % 16), y + r * 4, 7, 3, hash(gx * 3 + k, gy * 4 + r) > .5 ? P.dWall : '#4d476a');
      }
    },
    'f': (c, x, y, gx, gy) => {
      R(c, x, y, T, T, P.dFloor); R(c, x, y, T, 1, P.dFloorL); R(c, x, y, 1, T, P.dFloorL);
      if (hash(gx, gy) > .7) R(c, x + 5, y + 6, 3, 1, P.dFloorL);
    },
    'R': (c, x, y, gx, gy) => { // roof
      R(c, x, y, T, T, P.roof);
      for (let r = 0; r < 4; r++) R(c, x, y + r * 4 + 3, T, 1, P.roofD);
      for (let r = 0; r < 4; r++) R(c, x + (r % 2 ? 4 : 10), y + r * 4, 1, 3, P.roofD);
    },
    'h': (c, x, y, gx, gy) => { // house wall with window
      R(c, x, y, T, T, P.wall); R(c, x, y + 14, T, 2, P.wallD);
      R(c, x + 4, y + 4, 8, 6, P.k); R(c, x + 5, y + 5, 6, 4, '#9fd3ff'); R(c, x + 7, y + 5, 1, 4, P.k); R(c, x + 5, y + 7, 6, 1, P.k);
    },
    'd': (c, x, y, gx, gy) => { // door
      R(c, x, y, T, T, P.wall); R(c, x, y + 14, T, 2, P.wallD);
      R(c, x + 3, y + 2, 10, 14, P.k); R(c, x + 4, y + 3, 8, 13, P.wood); R(c, x + 7, y + 3, 1, 13, P.woodD); R(c, x + 10, y + 9, 1, 2, P.gold);
    },
    'b': (c, x, y, gx, gy, t, m) => { // bridge
      water(c, x, y, gx, gy, t, m, P.water);
      R(c, x, y + 2, T, 12, P.wood);
      for (let i = 0; i < 4; i++) R(c, x + i * 4 + 3, y + 2, 1, 12, P.woodD);
      R(c, x, y + 2, T, 1, P.woodD); R(c, x, y + 13, T, 1, P.woodD);
    },
    'B': (c, x, y, gx, gy, t, m) => { // bridge (up-down)
      water(c, x, y, gx, gy, t, m, P.water);
      R(c, x + 2, y, 12, T, P.wood);
      for (let i = 0; i < 4; i++) R(c, x + 2, y + i * 4 + 3, 12, 1, P.woodD);
      R(c, x + 2, y, 1, T, P.woodD); R(c, x + 13, y, 1, T, P.woodD);
    },
    'o': (c, x, y, gx, gy) => { // tilled soil
      R(c, x, y, T, T, P.soil);
      for (let r = 0; r < 4; r++) R(c, x + 1, y + r * 4 + 2, 14, 1, P.soilD);
    },
    '1': (c, x, y, gx, gy) => { tiles.o(c, x, y, gx, gy); R(c, x + 7, y + 8, 2, 4, P.leafL); R(c, x + 5, y + 7, 2, 2, P.leafL); },
    '2': (c, x, y, gx, gy) => { tiles.o(c, x, y, gx, gy); R(c, x + 7, y + 4, 2, 9, P.leaf); R(c, x + 4, y + 5, 3, 3, P.leafL); R(c, x + 9, y + 7, 3, 3, P.leafL); },
    '3': (c, x, y, gx, gy) => { // ripe coffee bush
      tiles.o(c, x, y, gx, gy);
      R(c, x + 3, y + 3, 10, 10, P.leaf); R(c, x + 2, y + 5, 12, 6, P.leaf); R(c, x + 4, y + 4, 3, 2, P.leafL);
      [[5, 7], [9, 5], [10, 9], [6, 10], [8, 8]].forEach(([a, b]) => R(c, x + a, y + b, 2, 2, '#d1263a'));
    },
    'w': (c, x, y, gx, gy) => { // wheat
      R(c, x, y, T, T, '#d9b44a');
      for (let i = 0; i < 5; i++) { R(c, x + 1 + i * 3, y + 3, 1, 12, '#b98e2a'); R(c, x + i * 3, y + 2 + (i % 2) * 2, 2, 3, '#f0d27a'); }
    },
    'q': (c, x, y, gx, gy, t, m) => { // rice paddy
      water(c, x, y, gx, gy, t, m, '#4f9fc9');
      for (let r = 0; r < 3; r++) for (let k = 0; k < 4; k++) { R(c, x + 2 + k * 4, y + 2 + r * 5, 1, 4, '#7ccf5a'); R(c, x + 1 + k * 4, y + 3 + r * 5, 1, 2, '#58b247'); }
    },
    'F': (c, x, y, gx, gy) => { // fence
      grassBase(c, x, y, gx, gy);
      R(c, x, y + 6, T, 2, P.wood); R(c, x, y + 11, T, 2, P.wood);
      R(c, x + 2, y + 4, 2, 11, P.woodD); R(c, x + 11, y + 4, 2, 11, P.woodD);
    },
    'x': (c, x, y, gx, gy) => { // sign post
      grassBase(c, x, y, gx, gy);
      R(c, x + 7, y + 9, 2, 6, P.woodD); R(c, x + 2, y + 2, 12, 8, P.k); R(c, x + 3, y + 3, 10, 6, P.wood);
      R(c, x + 4, y + 5, 8, 1, P.woodD); R(c, x + 4, y + 7, 6, 1, P.woodD);
    },
    'C': (c, x, y, gx, gy) => { // little city (world map)
      grassBase(c, x, y, gx, gy);
      R(c, x + 1, y + 7, 5, 8, P.wall); R(c, x + 1, y + 5, 5, 2, P.roof);
      R(c, x + 6, y + 3, 4, 12, P.stoneL); R(c, x + 6, y + 2, 4, 1, P.stoneD);
      R(c, x + 10, y + 8, 5, 7, P.wall); R(c, x + 10, y + 6, 5, 2, '#3c6fb4');
      for (let i = 0; i < 4; i++) R(c, x + 7, y + 5 + i * 3, 2, 1, '#ffe36e');
    },
    'L': (c, x, y, gx, gy) => { // lava / volcano glow
      R(c, x, y, T, T, '#c4401d');
      R(c, x + ((hash(gx, gy) * 10) | 0), y + 4, 5, 2, '#ffb13b'); R(c, x + 2, y + 11, 6, 2, '#ff7a2a');
    },
    ' ': (c, x, y) => R(c, x, y, T, T, '#000000')
  };

  function water(c, x, y, gx, gy, t, m, col) {
    R(c, x, y, T, T, col);
    const ph = ((t || 0) / 450 + hash(gx, gy) * 6);
    for (let i = 0; i < 2; i++) {
      const wx = x + ((hash(gx, gy, i) * 10) | 0) + Math.round(Math.sin(ph + i) * 2);
      const wy = y + 3 + i * 7;
      R(c, wx, wy, 4, 1, P.waterL);
    }
    if (m) { // foam where water meets land
      const wet = ch => '~=bBq'.includes(ch);
      const at = (dx, dy) => (m[gy + dy] || '')[gx + dx];
      if (at(0, -1) !== undefined && !wet(at(0, -1))) R(c, x, y, T, 1, P.foam);
      if (at(0, 1) !== undefined && !wet(at(0, 1))) R(c, x, y + 15, T, 1, P.foam);
      if (at(-1, 0) !== undefined && !wet(at(-1, 0))) R(c, x, y, 1, T, P.foam);
      if (at(1, 0) !== undefined && !wet(at(1, 0))) R(c, x + 15, y, 1, T, P.foam);
    }
  }

  function mountain(c, x, y, gx, gy, snowy, base) {
    (base === 'n' ? tiles.n : base === 's' ? tiles.s : grassBase)(c, x, y, gx, gy);
    for (let r = 0; r < 15; r++) {
      const half = Math.min(8, (r + 2) * 0.55) | 0;
      R(c, x + 8 - half, y + 1 + r, half, 1, P.stone);
      R(c, x + 8, y + 1 + r, half, 1, P.stoneD);
    }
    R(c, x + 5, y + 7, 2, 1, P.stoneL); R(c, x + 4, y + 10, 2, 1, P.stoneL);
    if (snowy) { R(c, x + 6, y + 1, 4, 2, P.snow); R(c, x + 5, y + 3, 6, 2, P.snow); R(c, x + 4, y + 5, 2, 1, P.snow); R(c, x + 9, y + 5, 2, 1, P.snowD); }
  }

  /* ---------- sprites (16 x 16, one letter = one pixel) ---------- */
  const SPR = {
    hero: [
      '................', '.....kkkkkk.....', '....kHHHHHHk....', '...kHHbbbbHHk...',
      '..kkkkkkkkkkkk..', '...khhsssshhk...', '...khsesseshk...', '...kssssssssk...',
      '....kssmmssk....', '...kccgccccck...', '..kscccgccccsk..', '..ksCcccgcccsk..',
      '...kCCCCCCCCk...', '...kppppppppk...', '...kppk..kppk...', '...kBBk..kBBk...'],
    heroWalk: [
      '................', '.....kkkkkk.....', '....kHHHHHHk....', '...kHHbbbbHHk...',
      '..kkkkkkkkkkkk..', '...khhsssshhk...', '...khsesseshk...', '...kssssssssk...',
      '....kssmmssk....', '...kccgccccck...', '..kscccgccccsk..', '..ksCcccgcccsk..',
      '...kCCCCCCCCk...', '...kppppppppk...', '...kppk..kBBk...', '...kBBk.........'],
    heroUp: [
      '................', '.....kkkkkk.....', '....kHHHHHHk....', '...kHHbbbbHHk...',
      '..kkkkkkkkkkkk..', '...khhhhhhhhk...', '...khhhhhhhhk...', '...kkhhhhhhkk...',
      '...kcggggggck...', '..kscggggggcsk..', '..kscgGGGGgcsk..', '..ksCggggggCsk..',
      '...kCCCCCCCCk...', '...kppppppppk...', '...kppk..kppk...', '...kBBk..kBBk...'],
    npc: [
      '................', '................', '.....kkkkkk.....', '....khhhhhhk....',
      '...khhhhhhhhk...', '...khhsssshhk...', '...khsesseshk...', '...kssssssssk...',
      '....kssmmssk....', '...kcccccccck...', '..ksccccccccsk..', '..ksCccccccCsk..',
      '...kCCCCCCCCk...', '...kppppppppk...', '...kppk..kppk...', '...kBBk..kBBk...'],
    pip: [
      '................', '......kkkk......', '....kkyyyykk....', '...kyywwwwyyk...',
      '..kywwwrrwwwyk..', '..kywkwrrwkwyk..', '.kywwwwrrwwwwyk.', '.kywwwwnnwwwwyk.',
      '.kywwmwnnwmwwyk.', '..kywwwnnwwwyk..', '..kyywwwwwwyyk..', '...kyyyyyyyyk...',
      '....kkkkkkkk....', '................', '......zzzz......', '................'],
    smudge: [
      '................', '................', '................', '......kkkk......',
      '....kkggggkk....', '...kggggggggk...', '..kgggggggggGk..', '..kgwwggggwwgk..',
      '..kgwkggggwkgk..', '.kggggggggggggk.', '.kgggggrrrgggGk.', '.kggggggggggGGk.',
      '..kgggGggGggGk..', '...kGk.kGk.kGk..', '....k...k...k...', '................'],
    heart: [
      '................', '................', '...kkk...kkk....', '..krrrk.krrrk...',
      '.krwrrrkrrrrrk..', '.krrrrrrrrrrrk..', '.krrrrrrrrrrrk..', '..krrrrrrrrrk...',
      '...krrrrrrrk....', '....krrrrrk.....', '.....krrrk......', '......krk.......',
      '.......k........', '................', '................', '................'],
    page: [
      '................', '..kkkkkkkkkkk...', '..kwwwwwwwwwk...', '..kwggwwwbbwk...',
      '..kwgggwbbbwk...', '..kwwggwwbbwk...', '..kwwwwwwwwwk...', '..kwwrwwwwwwk...',
      '..kwwwwnnnwwk...', '..kwwwwwwwwwk...', '..kkkkkkkkkkk...', '................',
      '................', '................', '................', '................']
  };
  const SPAL = {
    k: P.k, s: '#f1c194', h: '#4a2c1a', e: '#22202e', m: '#c9615a', H: '#d98e2b', b: '#7a3b12',
    c: '#2aa198', C: '#1f7a73', g: '#7a4b1e', p: '#3b4a7a', B: '#4a2c1a', w: '#fffbe8', y: P.gold,
    r: P.red, n: '#2f6fd6', z: 'rgba(0,0,0,.22)', G: '#4b3f63', W: '#ffffff'
  };
  // tune smudge colors
  const SMUDGE = { g: '#6d5f8c', G: '#4b3f63', w: '#ffffff', r: '#2b2140' };
  const PAGE = { w: '#f3e3b5', g: '#5aa83b', b: '#2f7fd1', r: P.red, n: P.ink };

  function sprite(c, name, x, y, o = {}) {
    const rows = SPR[name]; if (!rows) return;
    const pal = Object.assign({}, SPAL, name === 'smudge' ? SMUDGE : {}, name === 'page' ? PAGE : {}, o.pal || {});
    const s = o.scale || 1;
    const bob = o.bob ? Math.round(Math.sin((o.t || 0) / 260 + (o.phase || 0)) * 1) : 0;
    for (let r = 0; r < 16; r++) {
      const row = rows[r] || '';
      for (let k = 0; k < 16; k++) {
        const ch = row[o.flip ? 15 - k : k];
        if (!ch || ch === '.') continue;
        c.fillStyle = pal[ch] || '#ff00ff';
        c.fillRect(x + k * s, y + (r + bob) * s, s, s);
      }
    }
  }

  // a generic coin (code-drawn circle)
  function coin(c, x, y, t = 0) {
    const w = Math.max(1, Math.round(Math.abs(Math.cos(t / 300)) * 5));
    R(c, x + 8 - w, y + 4, w * 2, 8, P.goldD); R(c, x + 8 - w + 1, y + 5, Math.max(1, w * 2 - 2), 6, P.gold);
  }
  // a treasure chest
  function chest(c, x, y, open) {
    R(c, x + 1, y + 5, 14, 10, P.k); R(c, x + 2, y + 6, 12, 8, P.wood); R(c, x + 2, y + 9, 12, 1, P.woodD);
    R(c, x + 7, y + 8, 2, 3, P.gold);
    if (open) { R(c, x + 2, y + 2, 12, 4, P.woodD); R(c, x + 4, y + 6, 8, 2, '#ffe36e'); }
  }

  /* ---------- map drawing ---------- */
  // rows: array of strings. base: optional map of same size giving ground under trees/mountains
  function drawMap(c, rows, o = {}) {
    const ox = o.ox || 0, oy = o.oy || 0, t = o.t || 0;
    for (let gy = 0; gy < rows.length; gy++) for (let gx = 0; gx < rows[gy].length; gx++) {
      const ch = rows[gy][gx];
      const f = tiles[ch] || tiles['.'];
      const base = o.base ? (o.base[gy] || '')[gx] : undefined;
      f(c, ox + gx * T, oy + gy * T, gx, gy, t, rows, base);
    }
  }

  /* ---------- stage ---------- */
  function stage(sel, cols, rows) {
    const cv = typeof sel === 'string' ? document.querySelector(sel) : sel;
    cv.width = cols * T; cv.height = rows * T;
    const ctx = cv.getContext('2d'); ctx.imageSmoothingEnabled = false;
    return { cv, ctx, W: cv.width, H: cv.height };
  }
  function loop(fn) {
    const reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { fn(0); return; }
    const go = t => { fn(t); requestAnimationFrame(go); };
    requestAnimationFrame(go);
  }

  /* ---------- HTML helpers ---------- */
  // language toggle: any element with data-en / data-es / data-fa gets swapped
  function langToggle(root = document) {
    const btns = root.querySelectorAll('[data-lang-btn]');
    const set = lang => {
      root.querySelectorAll('[data-en]').forEach(el => {
        const v = el.getAttribute('data-' + lang) || el.getAttribute('data-en');
        el.innerHTML = v;
        el.setAttribute('dir', lang === 'fa' ? 'rtl' : 'ltr');
        el.setAttribute('lang', lang);
      });
      btns.forEach(b => b.classList.toggle('on', b.dataset.langBtn === lang));
    };
    btns.forEach(b => b.addEventListener('click', () => set(b.dataset.langBtn)));
    set('en');
  }
  // the five themes HUD meters
  const THEMES = [
    { k: 'loc', icon: '📍', en: 'Where', full: 'Location', col: '#e04848' },
    { k: 'pla', icon: '🏞️', en: 'What it is like', full: 'Place', col: '#3fa34d' },
    { k: 'hei', icon: '🌱', en: 'People & land', full: 'Human–Environment Interaction', col: '#d98e2b' },
    { k: 'mov', icon: '🚚', en: 'On the move', full: 'Movement', col: '#2f7fd1' },
    { k: 'reg', icon: '🧩', en: 'Regions', full: 'Region', col: '#8e5bd6' }
  ];
  function hud(el, o = {}) {
    const hearts = o.hearts ?? 3, max = o.max ?? 5;
    let h = '<div class="hud-left">';
    for (let i = 0; i < max; i++) h += `<span class="hrt ${i < hearts ? '' : 'empty'}">♥</span>`;
    h += `<span class="hud-coin">● ${o.coins ?? 0}</span></div>`;
    h += `<div class="hud-mid">${o.label || ''}</div><div class="hud-right">`;
    const s = o.stats || {};
    THEMES.forEach(th => {
      const v = s[th.k] ?? 0;
      h += `<span class="meter" title="${th.full}"><i>${th.icon}</i><span class="track"><b style="width:${Math.min(100, v * 10)}%;background:${th.col}"></b></span></span>`;
    });
    h += `</div>`;
    el.innerHTML = h;
  }

  window.WW = { T, P, tiles, SPR, sprite, coin, chest, drawMap, stage, loop, hash, R, langToggle, hud, THEMES };
})();
