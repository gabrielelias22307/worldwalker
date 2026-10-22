/* WORLDWALKER engine · inside the houses (fun-pass-4)
   Every door opens into one small room seen from the side, like a stage: walk left and right, talk to the person who lives there,
   walk back out the door. Each realm has its own kind of room. Everything is drawn here in code. */
(function () {
  const WW = window.WW;
  const RW = 256, RH = 176, FLOOR = 132; // the room canvas is the size of one map screen
  const R = (c, x, y, w, h, col) => { c.fillStyle = col; c.fillRect(x, y, w, h); };
  /* one style per realm: wall, wall pattern, floor, trim, and what stands in the room */
  const STYLE = {
    1: { wall: '#efe0bd', wall2: '#e2cf9f', pat: 'stripes', floor: '#9a6a3c', floor2: '#86592f', trim: '#6b4423', sky: '#9fd3ff', things: ['fire', 'mapwall', 'shelf', 'table'] },
    2: { wall: '#e9c28f', wall2: '#ddb07a', pat: 'plain', floor: '#c4693f', floor2: '#ad5833', trim: '#7a4a2a', sky: '#9fd3ff', things: ['blanket', 'pots', 'table', 'plant'] },
    3: { wall: '#b98b5a', wall2: '#a97a4b', pat: 'planks', floor: '#7d5432', floor2: '#6c4629', trim: '#4f321c', sky: '#cfe6ff', things: ['rugwall', 'stove', 'shelf', 'table'] },
    4: { wall: '#d79a5c', wall2: '#c98a4d', pat: 'mud', floor: '#b07a46', floor2: '#9c6a3b', trim: '#6d4424', sky: '#ffe2a8', things: ['cloth', 'baskets', 'stool', 'plant'] },
    5: { wall: '#efe3cf', wall2: '#2f7fd1', pat: 'tiles', floor: '#b8433a', floor2: '#8f2f28', trim: '#7a5a3a', sky: '#bfe3ff', things: ['arch', 'carpet', 'lamp', 'cushions'] },
    6: { wall: '#7fc8b8', wall2: '#6ab5a5', pat: 'plain', floor: '#d7b87a', floor2: '#c6a66a', trim: '#4f7f5a', sky: '#bfe8ff', things: ['fan', 'mat', 'shelf', 'plant'] },
    7: { wall: '#f4ecd8', wall2: '#cbb48a', pat: 'shoji', floor: '#c9b77c', floor2: '#b6a36a', trim: '#5a4030', sky: '#ffd6e0', things: ['scroll', 'lowtable', 'lantern', 'plant'] },
    8: { wall: '#e7d3a6', wall2: '#d6bf8d', pat: 'weave', floor: '#a8835a', floor2: '#947049', trim: '#6b4e33', sky: '#7fd6f0', things: ['shells', 'net', 'table', 'plant'] }
  };
  function wall(c, s) {
    R(c, 0, 0, RW, FLOOR, s.wall);
    if (s.pat === 'stripes') for (let x = 6; x < RW; x += 16) R(c, x, 14, 3, FLOOR - 14, s.wall2);
    if (s.pat === 'planks') for (let x = 0; x < RW; x += 20) { R(c, x, 14, 1, FLOOR - 14, s.wall2); for (let y = 30 + (x % 40); y < FLOOR; y += 40) R(c, x + 6, y, 2, 2, s.trim); }
    if (s.pat === 'mud') for (let i = 0; i < 70; i++) R(c, (i * 37) % RW, 16 + (i * 53) % (FLOOR - 20), 3, 2, s.wall2);
    if (s.pat === 'tiles') { R(c, 0, FLOOR - 40, RW, 40, s.wall2); for (let x = 0; x < RW; x += 10) for (let y = FLOOR - 40; y < FLOOR; y += 10) { R(c, x + 4, y + 2, 2, 6, '#fff7e0'); R(c, x + 2, y + 4, 6, 2, '#fff7e0'); R(c, x, y, 10, 1, '#1d5a9e'); R(c, x, y, 1, 10, '#1d5a9e'); } }
    if (s.pat === 'shoji') for (let x = 0; x < RW; x += 32) { R(c, x, 14, 2, FLOOR - 14, s.trim); for (let y = 30; y < FLOOR; y += 22) R(c, x, y, 32, 1, s.wall2); R(c, x + 16, 14, 1, FLOOR - 14, s.wall2); }
    if (s.pat === 'weave') for (let y = 16; y < FLOOR; y += 6) for (let x = (y / 6 % 2) * 6; x < RW; x += 12) R(c, x, y, 6, 3, s.wall2);
    R(c, 0, 0, RW, 14, s.trim); R(c, 0, 13, RW, 1, '#2a1c10');            // ceiling beam
    for (let x = 30; x < RW; x += 64) R(c, x, 0, 8, 14, '#3d2a18');
    R(c, 0, FLOOR - 4, RW, 4, s.trim);                                     // skirting
  }
  function floor(c, s) {
    R(c, 0, FLOOR, RW, RH - FLOOR, s.floor);
    for (let y = FLOOR + 6; y < RH; y += 8) R(c, 0, y, RW, 1, s.floor2);
    for (let y = FLOOR; y < RH; y += 8) for (let x = ((y - FLOOR) / 8 % 2) * 24; x < RW; x += 48) R(c, x, y, 1, 8, s.floor2);
  }
  function door(c, s, open) { // the way out, on the left: open, with daylight
    R(c, 6, 66, 30, FLOOR - 66, s.trim); R(c, 9, 69, 24, FLOOR - 69, open ? '#fff2b8' : '#8a5a30');
    if (open) { R(c, 9, 69, 24, 30, s.sky); R(c, 9, 99, 24, FLOOR - 99, '#7cc451'); R(c, 9, FLOOR - 6, 24, 6, '#5aa548'); }
  }
  function windowAt(c, s, x, t) {
    R(c, x - 2, 38, 44, 36, s.trim); R(c, x, 40, 40, 32, s.sky);
    R(c, x, 62, 40, 10, '#7cc451'); const cl = WW.calm ? 0 : Math.floor(t / 900) % 40; R(c, x + ((cl + 6) % 34), 46, 8, 3, '#fff');
    R(c, x + 19, 40, 2, 32, s.trim); R(c, x, 55, 40, 2, s.trim); R(c, x - 4, 74, 48, 3, s.trim);
  }
  const THING = {
    fire(c, x, t) { R(c, x, 70, 44, 62, '#8d8d96'); R(c, x + 4, 74, 36, 4, '#6f6f78'); R(c, x + 10, 98, 24, 34, '#2a2230'); const f = WW.calm ? 0 : Math.floor(t / 140) % 3; R(c, x + 14, 116 - f, 16, 14 + f, '#e04848'); R(c, x + 18, 120 - f, 8, 10 + f, '#f2c14e'); R(c, x - 2, 66, 48, 4, '#6b4423'); },
    mapwall(c, x) { R(c, x, 30, 44, 32, '#6b4423'); R(c, x + 2, 32, 40, 28, '#f6e7c1'); R(c, x + 6, 36, 12, 8, '#7cc451'); R(c, x + 22, 40, 14, 12, '#7cc451'); R(c, x + 10, 48, 8, 6, '#9fd3ff'); R(c, x + 30, 34, 2, 6, '#e04848'); },
    shelf(c, x) { R(c, x, 50, 40, 3, '#6b4423'); R(c, x, 78, 40, 3, '#6b4423'); [['#e04848', 4], ['#2f7fd1', 10], ['#f2c14e', 16], ['#3fa34d', 24]].forEach(([col, dx], i) => R(c, x + dx, 38 + (i % 2) * 2, 5, 12 - (i % 2) * 2, col)); R(c, x + 6, 70, 10, 8, '#c4693f'); R(c, x + 24, 72, 8, 6, '#efe3cf'); },
    table(c, x) { R(c, x, 106, 44, 5, '#7a4a2a'); R(c, x + 4, 111, 4, 21, '#6b4423'); R(c, x + 36, 111, 4, 21, '#6b4423'); R(c, x + 16, 98, 10, 8, '#efe3cf'); R(c, x + 18, 96, 6, 2, '#ffffff'); },
    blanket(c, x) { for (let i = 0; i < 6; i++) R(c, x, 30 + i * 6, 40, 6, ['#e04848', '#f2c14e', '#2aa198', '#e04848', '#8e5bd6', '#f2c14e'][i]); R(c, x - 2, 28, 44, 2, '#6b4423'); },
    pots(c, x) { R(c, x, 112, 14, 20, '#c4693f'); R(c, x + 2, 108, 10, 4, '#ad5833'); R(c, x + 18, 118, 12, 14, '#d98e2b'); R(c, x + 20, 115, 8, 3, '#ad5833'); R(c, x + 3, 120, 8, 2, '#f6e7c1'); },
    plant(c, x) { R(c, x + 4, 116, 14, 16, '#c4693f'); R(c, x + 2, 100, 6, 16, '#3fa34d'); R(c, x + 10, 94, 6, 22, '#5aa548'); R(c, x + 14, 104, 6, 12, '#3fa34d'); },
    rugwall(c, x) { R(c, x, 26, 52, 44, '#8f2f28'); R(c, x + 3, 29, 46, 38, '#b8433a'); for (let i = 0; i < 4; i++) R(c, x + 10 + i * 9, 40, 5, 16, '#f2c14e'); R(c, x + 3, 46, 46, 2, '#22202e'); },
    stove(c, x) { R(c, x, 74, 40, 58, '#f0ead8'); R(c, x + 4, 82, 32, 3, '#c9b77c'); R(c, x + 12, 104, 16, 12, '#22202e'); R(c, x + 14, 110, 12, 6, '#e04848'); R(c, x + 30, 40, 6, 34, '#8d8d96'); },
    cloth(c, x) { R(c, x, 28, 44, 40, '#2a6e4f'); for (let i = 0; i < 4; i++) for (let j = 0; j < 3; j++) R(c, x + 4 + i * 10, 32 + j * 12, 6, 6, (i + j) % 2 ? '#f2c14e' : '#e04848'); },
    baskets(c, x) { R(c, x, 116, 18, 16, '#d9a65a'); for (let y = 118; y < 132; y += 4) R(c, x, y, 18, 1, '#a8783a'); R(c, x + 22, 120, 14, 12, '#c48c46'); R(c, x + 4, 112, 10, 4, '#e04848'); },
    stool(c, x) { R(c, x, 116, 20, 4, '#6d4424'); R(c, x + 2, 120, 3, 12, '#5a361a'); R(c, x + 15, 120, 3, 12, '#5a361a'); },
    arch(c, x) { R(c, x, 34, 40, 60, '#d8c6a4'); R(c, x + 6, 44, 28, 50, '#2f7fd1'); R(c, x + 10, 40, 20, 6, '#2f7fd1'); R(c, x + 16, 60, 8, 14, '#f2c14e'); R(c, x + 18, 56, 4, 4, '#fff7e0'); },
    carpet(c, x) { R(c, x - 30, FLOOR + 10, 120, 26, '#7a1f3a'); R(c, x - 26, FLOOR + 13, 112, 20, '#b8433a'); for (let i = 0; i < 6; i++) R(c, x - 20 + i * 18, FLOOR + 20, 8, 6, '#f2c14e'); },
    lamp(c, x, t) { R(c, x + 10, 14, 1, 24, '#3d2a18'); R(c, x + 4, 38, 14, 10, '#d98e2b'); R(c, x + 6, 48, 10, 3, '#b8902a'); if (!WW.calm && Math.floor(t / 500) % 2) R(c, x + 8, 41, 6, 4, '#ffe9a0'); else R(c, x + 8, 41, 6, 4, '#ffd36a'); },
    cushions(c, x) { R(c, x, 118, 22, 14, '#2aa198'); R(c, x + 24, 120, 20, 12, '#8e5bd6'); R(c, x + 4, 120, 14, 2, '#f2c14e'); },
    fan(c, x, t) { R(c, x + 20, 14, 2, 10, '#3d2a18'); const a = WW.calm ? 0 : Math.floor(t / 90) % 2; R(c, x + (a ? 6 : 10), 24, a ? 30 : 22, 3, '#6b4423'); R(c, x + 18, 22, 6, 6, '#3d2a18'); },
    mat(c, x) { R(c, x - 20, FLOOR + 14, 90, 22, '#e3c78a'); for (let i = 0; i < 9; i++) R(c, x - 18 + i * 10, FLOOR + 14, 2, 22, '#c6a66a'); },
    scroll(c, x) { R(c, x + 4, 24, 28, 3, '#5a4030'); R(c, x + 6, 27, 24, 54, '#fffbe8'); R(c, x + 16, 34, 4, 16, '#22202e'); R(c, x + 12, 56, 10, 3, '#22202e'); R(c, x + 4, 81, 28, 3, '#5a4030'); R(c, x + 22, 62, 5, 5, '#e04848'); },
    lowtable(c, x) { R(c, x, 118, 50, 5, '#5a3826'); R(c, x + 4, 123, 4, 9, '#4a2d1e'); R(c, x + 42, 123, 4, 9, '#4a2d1e'); R(c, x + 18, 112, 8, 6, '#efe3cf'); R(c, x + 30, 114, 6, 4, '#3fa34d'); },
    lantern(c, x) { R(c, x + 10, 14, 1, 18, '#3d2a18'); R(c, x + 4, 32, 14, 20, '#e04848'); R(c, x + 4, 32, 14, 2, '#22202e'); R(c, x + 4, 50, 14, 2, '#22202e'); R(c, x + 8, 38, 6, 8, '#f2c14e'); },
    shells(c, x) { R(c, x, 60, 40, 3, '#6b4e33'); R(c, x + 4, 54, 8, 6, '#fff0e0'); R(c, x + 16, 52, 10, 8, '#f6b8a8'); R(c, x + 30, 55, 6, 5, '#ffe9a0'); },
    net(c, x) { for (let i = 0; i < 6; i++) { R(c, x + i * 8, 26, 1, 44, '#6b4e33'); R(c, x, 26 + i * 8, 40, 1, '#6b4e33'); } R(c, x + 30, 60, 8, 8, '#d98e2b'); }
  };
  /* the room: style by realm; spots for the things, a window, the door on the left */
  const room = WW.room = {
    STYLE, RW, RH, FLOOR, on: false,
    draw(c, realm, t) {
      const s = STYLE[realm] || STYLE[1];
      wall(c, s); floor(c, s);
      door(c, s, true);
      windowAt(c, s, 52, t);
      const X = [100, 152, 204], narrow = ['plant', 'pots', 'stool', 'baskets', 'cushions'];
      let n = 0;
      s.things.forEach(k => { if (k === 'carpet' || k === 'mat') THING[k](c, 120, t); else if (n < 3) THING[k](c, X[n++], t); else if (narrow.includes(k)) THING[k](c, 232, t); });
    }
  };

  /* ---------- going in, walking, talking, going out ---------- */
  const L = t => WW.L(t), T = k => WW.T(k);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const SPEED = 0.07, DOOR_X = 22, PERSON_X = 176; // pixels per ms; the hero leaves through the door on the left
  let st = null; // { at, who, realm, hx, face, t0, walkT, goal, talked }
  const big = document.createElement('canvas'); big.width = 16; big.height = 16;
  function drawBig(c, name, pal, x, y, flip) { // a person twice as big as on the map
    const b = big.getContext('2d'); b.clearRect(0, 0, 16, 16); WW.sprite(b, name, 0, 0, { pal, flip });
    c.imageSmoothingEnabled = false; c.fillStyle = 'rgba(0,0,0,.18)'; c.fillRect(x + 4, FLOOR + 8, 24, 4); c.drawImage(big, x, y, 32, 32);
  }
  // who lives behind the door at (x, y): ep.houses = [{ at: [x, y], name, look, lines: [ ... ] }]
  room.who = (x, y) => (WW.ep.houses || []).find(h => h.at[0] === x && h.at[1] === y) || null;
  room.enter = (x, y) => {
    const g = WW.game, who = room.who(x, y);
    if (!WW.solid(g.tileAt(x, y - 1))) return false; // a gate you walk through (a temple yard), not a house
    if (!who || room.on) return false;
    st = { at: [x, y], who, realm: who.style || WW.ep.realm, hx: DOOR_X + 18, face: 1, t0: performance.now(), walkT: 0, goal: null };
    room.on = true; WW.chris.hide(); WW.tools.labels(null); WW.sfx('gate');
    return true;
  };
  room.exit = () => {
    if (!room.on) return;
    const g = WW.game, p = g.player, [x, y] = st.at;
    room.on = false; st = null;
    const out = [[x, y + 1], [x - 1, y + 1], [x + 1, y + 1], [x, y + 2]].find(([a, b]) => g.walkable(a, b)); // below the door (or next to it)
    if (out) WW.dbg.teleport(out[0], out[1]);
    p.dir = 'down'; WW.sfx('step');
  };
  // Space / ● : talk when you are next to the person, leave when you are at the door
  room.act = () => {
    if (!st || WW.paused) return;
    if (Math.abs(st.hx - PERSON_X) < 44) return room.talk();
    if (st.hx < DOOR_X + 30) return room.exit();
  };
  // a click or tap in the room: on the person = walk over and talk, on the door = leave, anywhere else = walk there
  room.click = fx => {
    if (!st || WW.paused) return;
    const x = fx * RW;
    st.goal = x < DOOR_X + 20 ? -1 : Math.abs(x - PERSON_X - 16) < 24 ? 'talk' : x;
  };
  room.talk = () => {
    const who = st.who; let i = 0; st.talked = true; st.goal = null;
    WW.ui.open({
      cls: 'roomtalk',
      render(box, h) {
        const face = WW.spriteCanvas(WW.personSprite(who), WW.lookPal(who.look), 4, 11); face.className = 'rt-face';
        box.innerHTML = `<div class="rt-top"></div>`;
        const top = box.querySelector('.rt-top'); top.appendChild(face);
        top.insertAdjacentHTML('beforeend', `<div><div class="rt-name">${esc(L(who.name))}</div><p class="rt-say">${WW.rich(who.lines[i])}</p></div>`);
        const sp = WW.speakBtn(() => WW.plain(who.lines[i])); if (sp) top.appendChild(sp);
        const acts = document.createElement('div'); acts.className = 'acts center';
        const last = i === who.lines.length - 1;
        acts.appendChild(WW.btn(last ? T('roomBye') : T('sceneNext') + ' ▶', 'gold', () => { if (last) h.close(); else { i++; h.render(); } }));
        box.appendChild(acts);
      }
    });
  };
  // one frame inside: walk with the arrows (left and right), draw the room, the person and the hero
  room.frame = (c, now, held) => {
    if (!st) return;
    const dt = Math.min(60, now - (st.last || now)); st.last = now;
    let dir = 0;
    if (!WW.paused) {
      if (held === 'left') dir = -1; else if (held === 'right') dir = 1;
      else if (held === 'up' && st.hx < DOOR_X + 30) return room.exit();
      else if (st.goal != null) {
        const tx = st.goal === -1 ? DOOR_X - 10 : st.goal === 'talk' ? PERSON_X - 30 : st.goal - 16;
        if (Math.abs(tx - st.hx) < 3) { const g = st.goal; st.goal = null; if (g === 'talk') room.talk(); if (g === -1) return room.exit(); }
        else dir = Math.sign(tx - st.hx);
      }
    }
    if (dir) {
      st.face = dir; st.walkT += dt;
      st.hx = Math.min(PERSON_X - 26, st.hx + dir * SPEED * dt); // the person stands in the way: you stop beside them
      if (st.hx < DOOR_X - 8) return room.exit();
    }
    room.draw(c, st.realm, now);
    // the person: faces you, and a small talk sign when you are close and have not talked yet
    drawBig(c, WW.personSprite(st.who), WW.lookPal(st.who.look), PERSON_X, FLOOR - 24, st.hx < PERSON_X);
    const near = Math.abs(st.hx - PERSON_X) < 44;
    if (near || !st.talked) {
      const by = FLOOR - 40 + (WW.calm ? 0 : Math.round(Math.sin(now / 250) * 2));
      R(c, PERSON_X + 8, by, 16, 11, '#22202e'); R(c, PERSON_X + 9, by + 1, 14, 9, near ? '#f2c14e' : '#fffbe8'); R(c, PERSON_X + 12, by + 11, 3, 2, '#22202e');
      R(c, PERSON_X + 11, by + 4, 2, 2, '#22202e'); R(c, PERSON_X + 15, by + 4, 2, 2, '#22202e'); R(c, PERSON_X + 19, by + 4, 2, 2, '#22202e');
    }
    const walk = dir && !WW.calm && Math.floor(st.walkT / 140) % 2;
    drawBig(c, walk ? 'heroSideWalk' : 'heroSide', WW.heroPal(), Math.round(st.hx), FLOOR - 24, st.face < 0);
    // coming in: a short fade from dark
    const k = 1 - (now - st.t0) / 260; if (k > 0 && !WW.calm) { c.fillStyle = `rgba(10,9,20,${k})`; c.fillRect(0, 0, RW, RH); }
  };
})();
