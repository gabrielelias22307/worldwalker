/* WORLDWALKER engine · HistoryWalker's extras on top of the HD look (hd.js): the Void and its shades, HD rooms, and
   (below) the source pictures, reflection checklist, scraps tip, flash recall, Quill's portrait and HistoryWalker's
   styles. Only `hd: true` courses ship this file, so the Canvas games stay small. */
(function () {
  if (!(window.WW_COURSE && window.WW_COURSE.hd)) return;
  const { tiles, hash } = WW;
  const T = 16, A = 32;
  const { h2, hex, vnoise, shade, personPic, drawHDPerson, kindOf, calm } = WW.hd._;
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

})();

/* HistoryWalker extras (only HD courses ship hd.js, so the Canvas games stay small):
   public-domain source pictures, the reflection checklist, the scraps tip, and the Void asking when you step beside it */
(function () {
  const L = t => WW.L(t), T = k => WW.T(k), esc = s => WW.esc(s);
  { const st = document.createElement('style'); st.textContent = `#ww .stimpic { margin: 0 0 8px; text-align: center; } #ww .stimpic img { max-width: 100%; max-height: 210px; border: 2px solid #6a5a48; border-radius: 4px; cursor: zoom-in; display: block; margin: 0 auto; } #ww .stimpic.big img { max-height: 70vh; cursor: zoom-out; } #ww .stimpic figcaption { font-size: 0.78em; color: #6a5a48; margin-top: 3px; line-height: 1.3; } #ww .rcheck { list-style: none; margin: 6px 0 0; padding: 0; font-size: 0.85em; } #ww .rcheck li { color: #8a7a66; padding: 1px 0; } #ww .rcheck li::before { content: '☐ '; } #ww .rcheck li.on { color: #2a7a4a; font-weight: bold; } #ww .rcheck li.on::before { content: '☑ '; } #ww .rcwarn { color: #b03a2e; font-weight: bold; font-size: 0.9em; margin: 6px 0 0; }`; document.head.appendChild(st); }
  // a picture for a source (course images.js): the first whose match word is in the given texts
  WW.pic = (...texts) => {
    const all = window.WW_IMAGES; if (!all) return '';
    const s = texts.map(t => t ? L(t) : '').join(' ');
    const p = all.find(im => im.match.some(w => s.includes(w))); if (!p) return '';
    return `<figure class="stimpic"><img src="${p.src}" alt="${esc(p.alt)}" onclick="this.parentNode.classList.toggle('big')"><figcaption>${esc(p.caption)} · <i>${esc(p.credit)}</i></figcaption></figure>`;
  };
  // the finish screen: a claim / evidence / specific-fact checklist that lights up while the student types; Copy and
  // Download refuse a blank or very short answer
  WW.hd.reflect = (box, ta) => {
    ta.rows = 5;
    const words = () => (ta.value.trim().match(/[A-Za-z0-9À-ɏ'’-]+/g) || []).length;
    const checks = [
      ['claim', v => words() >= 8],
      ['evidence', v => /\b(because|since|so|for example|for instance|such as|shows?|showed|evidence|according|the (reading|source)|led to|caused|as a result)\b/i.test(v)],
      ['fact', v => /\d/.test(v) || v.trim().split(/\s+/).some((w, i, a) => i > 0 && !/[.!?:]$/.test(a[i - 1]) && /^[A-Z][a-z]{2,}/.test(w))]];
    const cl = document.createElement('ul'); cl.className = 'rcheck';
    cl.innerHTML = checks.map(c => `<li data-k="${c[0]}">${esc(T('rc_' + c[0]))}</li>`).join('');
    box.appendChild(cl);
    const tick = () => { checks.forEach(c => cl.querySelector(`[data-k=${c[0]}]`).classList.toggle('on', !!c[1](ta.value))); const w = box.querySelector('.rcwarn'); if (w && words() >= 12) w.remove(); };
    tick();
    return { tick, ready() { if (words() >= 12) return true; if (!box.querySelector('.rcwarn')) cl.insertAdjacentHTML('afterend', `<p class="rcwarn">${esc(T('rc_short'))}</p>`); ta.focus(); WW.sfx('bad'); return false; } };
  };
  // after the first talk, Quill says once that hidden scraps are worth looking for (course.S.scrapTip)
  WW.hd.scrapTip = () => {
    const r = WW.run, S = WW.COURSE && WW.COURSE.S;
    if (!S || !S.scrapTip || r.scrapTold || !WW.ep.scraps.length || r.scraps.size >= WW.ep.scraps.length) return;
    r.scrapTold = true;
    setTimeout(() => { if (WW.ui.top()) { r.scrapTold = false; return; } WW.chris.say(T('scrapTip').replace('{n}', WW.ep.scraps.length - r.scraps.size)); }, 1500);
  };
  // the Void's darkness is drawn wider than its one square: stepping right beside it (diagonals too) asks its question
  let touchAt = null;
  WW.hd.bossTouch = (ents, p) => {
    if (WW.run.bossDone || WW.ui.top()) return null;
    const b = ents.find(o => o.kind === 'boss' && !o.gone && o.visible !== false), k = p.x + ',' + p.y;
    const near = b && Math.max(Math.abs(b.x - p.x), Math.abs(b.y - p.y)) === 1;
    if (!near) { touchAt = null; return null; }
    if (touchAt === k) return null;
    touchAt = k; return b;
  };
})();

/* HistoryWalker-only styles and flash recall, kept here so the Canvas games (no hd.js) stay under the size limit */
(function () {
  const L = t => WW.L(t), T = k => WW.T(k), esc = s => WW.esc(s), btn = (a, b, c) => WW.btn(a, b, c);
  const shuffle = (a, seed = 7) => { a = a.slice(); let s = seed; for (let i = a.length - 1; i > 0; i--) { s = (s * 9301 + 49297) % 233280; const j = Math.floor((s / 233280) * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  { const st = document.createElement('style'); st.textContent = `
/* AP-style stimulus above a Grump question (HistoryWalker) */
#ww .stim { background: #fbf4e2; color: #2b2533; border: 2px solid #c9b48a; border-left: 6px solid #9a6a3a; border-radius: 6px; padding: 10px 12px; margin: 6px 0 10px; font-size: 0.92em; line-height: 1.45; }
#ww .stimtitle { font-weight: bold; margin-bottom: 4px; }
#ww .stimtext { font-family: Georgia, 'Times New Roman', serif; }
#ww .stimsrc { margin-top: 6px; font-size: 0.85em; color: #6a5a48; font-style: italic; }
#ww .stimtab { border-collapse: collapse; width: 100%; font-size: 0.9em; }
#ww .stimtab th, #ww .stimtab td { border: 1px solid #c9b48a; padding: 3px 6px; text-align: left; }
#ww .stimtab th { background: #efe2c4; }
/* the world map page of a one-file game (hub.js) */
#ww.hw-hub { min-height: 100vh; background: radial-gradient(circle at 30% 0%, #2b2a4a, #14132a 70%); color: #f4ecd8; font-family: system-ui, -apple-system, 'Segoe UI', sans-serif; }
.hw-wrap { max-width: 1180px; margin: 0 auto; padding: 14px 16px 40px; }
.hw-top { display: flex; justify-content: space-between; align-items: flex-end; gap: 12px; flex-wrap: wrap; margin-bottom: 10px; }
.hw-logo { font-family: var(--pix, monospace); color: #f2c14e; font-size: clamp(20px, 4vw, 34px); letter-spacing: 2px; text-shadow: 3px 3px 0 #000; }
.hw-sub { font-family: var(--pix, monospace); font-size: 11px; color: #c9bfa6; margin-top: 6px; }
.hw-me { text-align: right; font-size: 15px; }
.hw-code { font-family: var(--pix, monospace); font-size: 11px; color: #f2c14e; background: #0b0a14; padding: 6px 8px; border-radius: 4px; margin-top: 4px; display: inline-block; }
.hw-mapbox { position: relative; border: 4px solid #000; outline: 3px solid #6a5a3a; border-radius: 8px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,.5); }
#hw-map { display: block; width: 100%; height: auto; image-rendering: pixelated; }
.hw-pin { position: absolute; transform: translate(-50%, -50%); font: bold 11px/1 system-ui, sans-serif; padding: 4px 5px; border-radius: 10px; border: 2px solid #1a1626; background: var(--uc); color: #1a1626; cursor: pointer; box-shadow: 0 2px 0 #000, 0 0 0 0 var(--uc); }
.hw-pin.done { background: #fff8e0; }
.hw-pin.done::after { content: '★'; color: #c08a1e; margin-left: 2px; }
.hw-pin.next { animation: hwpulse 1.4s ease-in-out infinite; z-index: 2; }
@keyframes hwpulse { 50% { box-shadow: 0 2px 0 #000, 0 0 0 8px rgba(242,193,78,.35); } }
.hw-pin:hover, .hw-pin:focus { z-index: 3; outline: 3px solid #fff; }
#hw-tip { position: absolute; transform: translate(-50%, calc(-100% - 16px)); background: #fffbe8; color: #22202e; border: 2px solid #22202e; border-radius: 6px; padding: 6px 9px; font-size: 13px; pointer-events: none; white-space: nowrap; z-index: 4; }
.hw-next { margin: 14px 0; text-align: center; }
.hw-go { font-size: 17px; font-weight: 700; padding: 11px 18px; border: 3px solid #000; border-radius: 6px; background: #f2c14e; color: #22202e; cursor: pointer; box-shadow: 0 4px 0 #000; }
.hw-units { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 12px; }
.hw-unit { background: #22203c; border: 3px solid #000; border-top: 6px solid var(--uc); border-radius: 8px; padding: 10px; }
.hw-unit h2 { font-size: 15px; margin: 0 0 8px; color: var(--uc); }
.hw-ep { width: 100%; display: grid; grid-template-columns: 34px 1fr auto; gap: 8px; align-items: center; text-align: left; margin: 5px 0; padding: 7px 8px; background: #2e2b52; color: #fff; border: 2px solid #000; border-radius: 5px; cursor: pointer; font: inherit; font-size: 14px; }
.hw-ep:hover, .hw-ep:focus { border-color: #f2c14e; }
.hw-ep.done { background: #1f3d2a; }
.hw-ep .id { font-weight: 700; color: #f2c14e; }
.hw-ep small { display: block; color: #b9b2c8; font-size: 12px; }
.hw-ep .st { color: #f2c14e; }
.hw-credit { margin-top: 18px; font-size: 12px; color: #9a92ad; text-align: center; }
/* a reading stand (HistoryWalker): the talk panel shows a source passage */
#ww .docface { width: 64px; height: 64px; display: flex; align-items: center; justify-content: center; font-size: 40px; background: #fbf4e2; border: 3px solid #22202e; border-radius: 8px; }
#ww .docread .stimtext { font-size: 1.05em; }
#ww .docpage { text-align: right; font-size: 0.8em; color: #8a7a62; margin-top: 4px; }
#ww.guide-small .cpanel.side canvas { max-width: 108px; }
#ww.guide-small .cpanel.dock canvas { width: 60px; height: 60px; }
/* HistoryWalker: the Void's trial is fought in the dark */
#ww.void-dark .bossov .ov-box { background: #130e20; color: #e9e2f7; border-color: #3a2a5a; box-shadow: 0 0 40px rgba(120,60,200,.45); }
#ww.void-dark .bossov .bname { color: #c9b6ff; }
#ww.void-dark .bossov .say.q, #ww.void-dark .bossov .klabel { color: #e9e2f7; }
#ww.void-dark .bossov .choices button { background: #1f1830; color: #f2ecff; border-color: #4a3a72; }
#ww.void-dark .bossov .choices button:hover { border-color: #b89cff; }
#ww.void-dark .bossov .bossface { background: #050208; border-color: #4a3a72; }
#ww.void-dark .bossov .stim { background: #ece4d6; }
#ww.void-dark .bossov .say.taunt { color: #c8b4ff; font-style: italic; text-shadow: 0 0 8px rgba(150,90,255,.5); }
#ww.void-dark .bossov .fb.wrong, #ww.void-dark .bossov .fb.right { color: #22202e; }
/* flash recall (HistoryWalker): a shade caught you */
#ww .recallov .ov-box { background: #160f26; color: #efe8ff; border-color: #4a3a72; box-shadow: 0 0 36px rgba(120,60,200,.5); }
#ww .recallov .recall-head { display: flex; gap: 12px; align-items: center; margin-bottom: 8px; }
#ww .recallov .recall-shade { width: 44px; height: 44px; border-radius: 50%; flex: none; background: radial-gradient(circle at 50% 55%, #030006 45%, #5a2aa0 70%, rgba(90,40,170,0) 72%); box-shadow: 0 0 18px #7a4ad8; position: relative; }
#ww .recallov .recall-shade::before, #ww .recallov .recall-shade::after { content: ''; position: absolute; top: 18px; width: 9px; height: 3px; background: #e8dcff; border-radius: 50%; }
#ww .recallov .recall-shade::before { left: 11px; transform: rotate(18deg); } #ww .recallov .recall-shade::after { right: 11px; transform: rotate(-18deg); }
#ww .recallov .recall-t { font-weight: 800; font-size: 1.15em; color: #c9b6ff; }
#ww .recallov .say.q { color: #f4efff; }
#ww .recallov .choices button { background: #231a38; color: #f2ecff; border-color: #4a3a72; }
#ww .recallov .fb { color: #22202e; }
#ww .recallov .choices button.right { background: #1d4a32; border-color: #5fd36a; }
#ww .recallov .choices button.wrong { background: #4a1d2a; border-color: #ff6b5e; }
#ww.guide-small #ww-now { max-height: calc(100vh - 300px) !important; overflow-y: auto; }
`; document.head.appendChild(st); }
  /* ---------------- flash recall (HistoryWalker): a shade caught you ----------------
     Instead of a plain hit, one quick question about what this episode has ALREADY taught: a key term from the
     glossary (what it means, or which term fits a meaning), or the question of a person or reading you have already
     finished. Right: the shade dissolves and no heart is lost. Wrong: a heart is lost and the answer is shown.
     No timer: the map stops while you think. */
  let recallSeen = new Set(), recallN = 0;
  function recallPool() {
    const ep = WW.ep, pool = [], words = Object.keys(ep.words || {}).filter(k => ep.words[k] && L(ep.words[k]));
    words.forEach(k => {
      const others = shuffle(words.filter(w => w !== k), recallN * 31 + k.length).slice(0, 3);
      if (others.length < 3) return;
      const term = k.replace(/\b\w/g, ch => ch.toUpperCase());
      pool.push({ key: 'w:' + k, q: `What does <b>${esc(term)}</b> mean?`, choices: [L(ep.words[k]), ...others.map(o => L(ep.words[o]))], why: `<b>${esc(term)}</b>: ${esc(L(ep.words[k]))}` });
      pool.push({ key: 'm:' + k, q: `Which term means: <i>${esc(L(ep.words[k]))}</i>?`, choices: [term, ...others.map(o => o.replace(/\b\w/g, ch => ch.toUpperCase()))], why: `That is <b>${esc(term)}</b>.` });
    });
    ep.npcs.forEach(n => {
      if (!n.ask || !WW.run.talked.has(n.id)) return; // only what you have already heard or read
      const ok = n.ask.choices.find(c => c.ok);
      pool.push({ key: 'a:' + n.id, q: `${WW.rich(n.ask.q)} <span class="small">(${esc(WW.plain(n.name))})</span>`, choices: [L(ok.t), ...n.ask.choices.filter(c => !c.ok).map(c => L(c.t))], why: WW.rich(ok.why) });
    });
    return pool;
  }
  WW.recall = (onDone) => {
    let pool = recallPool().filter(p => !recallSeen.has(p.key));
    if (!pool.length) { recallSeen = new Set(); pool = recallPool(); }
    if (!pool.length) return onDone(null); // nothing taught yet: a plain hit
    const item = pool[(recallN++ * 7 + Date.now()) % pool.length]; recallSeen.add(item.key);
    const order = shuffle(item.choices.map((_, i) => i), recallN * 13 + 5);
    let picked = null;
    WW.sfx('growl');
    WW.ui.open({
      cls: 'msgov recallov',
      render(box, h) {
        box.innerHTML = `<div class="recall-head"><span class="recall-shade"></span><div><div class="recall-t">⚡ Flash recall!</div><div class="small">A shade caught you. Answer to drive it off.</div></div></div><p class="say q">${item.q}</p>`;
        const list = document.createElement('div'); list.className = 'choices';
        order.forEach(i => {
          const b = document.createElement('button'); b.dataset.i = i; b.innerHTML = esc(item.choices[i]);
          if (picked != null) { if (i === 0) b.className = 'right'; else if (i === picked) b.className = 'wrong'; b.disabled = true; }
          b.onclick = () => { if (picked != null) return; picked = i; WW.sfx(i === 0 ? 'good' : 'bad'); h.render(); };
          list.appendChild(b);
        });
        box.appendChild(list);
        if (picked != null) {
          const ok = picked === 0;
          box.insertAdjacentHTML('beforeend', `<div class="fb ${ok ? 'right' : 'wrong'}"><b>${ok ? 'Right! The shade dissolves.' : 'Not quite. The shade strikes!'}</b> ${item.why}</div>`);
          const acts = document.createElement('div'); acts.className = 'acts';
          acts.appendChild(btn(T('cont') + ' ▶', 'gold', () => { h.close(); onDone(ok); }));
          box.appendChild(acts);
        }
      }
    });
  };

})();

/* Quill's portrait (HistoryWalker's guide), moved here from chrisface.js so the Canvas games stay small */
(function () {
  const CX = 48, CY = 50;
  function owlPortrait(c, t, o, col, calm) {
    const mood = o.mood, droop = mood === 'droop', cheer = mood === 'cheer', talk = mood === 'talk' || o.talking;
    const bob = calm ? 0 : Math.sin(t / 420) * 2 + (droop ? 3 : 0) - (cheer ? 2 : 0);
    const tilt = calm ? 0 : Math.sin(t / 1300) * 0.08 + (mood === 'spin' ? Math.sin(t / 90) * 0.25 : 0);
    const flap = calm ? 0 : cheer ? Math.sin(t / 70) * 0.5 : talk ? Math.sin(t / 140) * 0.18 : Math.max(0, Math.sin(t / 900)) * 0.12;
    c.fillStyle = 'rgba(0,0,0,.35)'; c.beginPath(); c.ellipse(CX, 88, 14, 3, 0, 0, 7); c.fill();
    c.save(); c.translate(CX, CY + 6 + bob); c.rotate(tilt);
    const BR = ['#3e2a1c', '#5c3f29', '#7a5536', '#9a7048', '#c39a6a'];
    // wings, behind the body; they lift when he flaps
    [-1, 1].forEach(s => {
      c.save(); c.translate(s * 15, -2); c.rotate(s * (0.15 + flap)); c.scale(s, 1);
      c.fillStyle = '#22202e'; c.beginPath(); c.ellipse(6, 8, 10, 17, 0.25, 0, 7); c.fill();
      c.fillStyle = BR[1]; c.beginPath(); c.ellipse(6, 8, 8, 15, 0.25, 0, 7); c.fill();
      c.fillStyle = BR[2]; for (let k = 0; k < 4; k++) { c.beginPath(); c.ellipse(5 + k * 1.2, 1 + k * 5, 5, 2.4, 0.4, 0, 7); c.fill(); }
      c.fillStyle = BR[3]; for (let k = 0; k < 3; k++) c.fillRect(8 + k * 2, 14 + k * 3, 3, 1);
      c.restore();
    });
    // the round body with a lighter, speckled chest
    c.fillStyle = '#22202e'; c.beginPath(); c.ellipse(0, 6, 21, 25, 0, 0, 7); c.fill();
    const g = c.createRadialGradient(-6, -6, 3, 0, 4, 26); g.addColorStop(0, BR[4]); g.addColorStop(0.5, BR[3]); g.addColorStop(1, BR[1]);
    c.fillStyle = g; c.beginPath(); c.ellipse(0, 6, 19, 23, 0, 0, 7); c.fill();
    c.fillStyle = '#ead7b4'; c.beginPath(); c.ellipse(0, 15, 11, 12, 0, 0, 7); c.fill();
    c.fillStyle = BR[2]; for (let r = 0; r < 3; r++) for (let k = -2; k <= 2; k++) { if ((k + r) % 2) continue; c.beginPath(); c.moveTo(k * 4 - 1.5, 9 + r * 5); c.lineTo(k * 4, 11 + r * 5); c.lineTo(k * 4 + 1.5, 9 + r * 5); c.fill(); }
    // ear tufts that twitch now and then
    const tw = calm ? 0 : ((t % 4200) < 180 ? 2 : 0);
    [-1, 1].forEach(s => { c.fillStyle = '#22202e'; c.beginPath(); c.moveTo(s * 9, -15); c.lineTo(s * (16 + tw), -27 - tw); c.lineTo(s * 17, -12); c.fill(); c.fillStyle = BR[2]; c.beginPath(); c.moveTo(s * 10, -15); c.lineTo(s * (15 + tw), -24 - tw); c.lineTo(s * 15, -13); c.fill(); });
    // the face disc
    c.fillStyle = '#f1e2c4'; [-1, 1].forEach(s => { c.beginPath(); c.arc(s * 8, -6, 10, 0, 7); c.fill(); });
    c.strokeStyle = BR[2]; c.lineWidth = 1.2; [-1, 1].forEach(s => { c.beginPath(); c.arc(s * 8, -6, 10, s > 0 ? -1.2 : Math.PI - 1.9, s > 0 ? 1.9 : Math.PI + 1.2); c.stroke(); });
    // big amber eyes: they look toward what he means, blink, squint when he cheers, droop when he is sad
    const blink = !calm && (t % 3600) < 140, look = calm ? 0 : Math.sin(t / 1700) * 1.6;
    [-1, 1].forEach(s => {
      const ex = s * 8, ey = -6;
      if (blink || cheer) { c.fillStyle = '#22202e'; c.beginPath(); c.ellipse(ex, ey + (cheer ? -1 : 0), 6, cheer ? 2.5 : 1.4, 0, cheer ? Math.PI : 0, cheer ? 0 : Math.PI * 2, cheer); c.fill(); return; }
      c.fillStyle = '#22202e'; c.beginPath(); c.arc(ex, ey, 7, 0, 7); c.fill();
      const eg = c.createRadialGradient(ex - 2, ey - 2, 1, ex, ey, 6.5); eg.addColorStop(0, '#fff3b0'); eg.addColorStop(0.6, col[1]); eg.addColorStop(1, col[2]);
      c.fillStyle = eg; c.beginPath(); c.arc(ex, ey, 6, 0, 7); c.fill();
      c.fillStyle = '#1a1420'; c.beginPath(); c.arc(ex + look, ey + (droop ? 1.5 : 0.5), 3.4, 0, 7); c.fill();
      c.fillStyle = '#ffffff'; c.fillRect(ex + look - 2, ey - 2, 2, 2); c.fillRect(ex + look + 1.5, ey + 1.5, 1, 1);
      if (droop) { c.fillStyle = BR[1]; c.fillRect(ex - 7, ey - 7, 14, 4); }
    });
    // the beak: it opens while words come
    const open = talk && !calm ? Math.abs(Math.sin(t / 85)) * 2.5 : 0;
    c.fillStyle = '#22202e'; c.beginPath(); c.moveTo(-4, 0); c.lineTo(4, 0); c.lineTo(0, 7 + open); c.fill();
    c.fillStyle = '#e8a33a'; c.beginPath(); c.moveTo(-3, 0.5); c.lineTo(3, 0.5); c.lineTo(0, 5); c.fill();
    if (open > 0.5) { c.fillStyle = '#c0603a'; c.fillRect(-1.5, 4, 3, open); }
    // a quill pen tucked under his wing
    c.save(); c.translate(15, 12); c.rotate(-0.7);
    c.fillStyle = '#22202e'; c.fillRect(-1, -14, 3, 22); c.fillStyle = '#fbf4e2'; c.beginPath(); c.ellipse(0.5, -8, 3, 8, 0, 0, 7); c.fill();
    c.fillStyle = '#d9cdb4'; c.fillRect(0, -15, 1, 16); c.fillStyle = '#2b2b3a'; c.fillRect(0, 6, 1, 3);
    c.restore();
    // little feet on a branch
    c.fillStyle = '#6b4a2a'; c.fillRect(-22, 29, 44, 4); c.fillStyle = '#22202e'; c.fillRect(-22, 33, 44, 1);
    c.fillStyle = '#e8a33a'; [-7, 5].forEach(x => { c.fillRect(x, 27, 2, 3); c.fillRect(x + 2.5, 27, 2, 3); c.fillRect(x - 2.5, 27, 2, 3); });
    c.restore();
    if (cheer && !calm) for (let i = 0; i < 8; i++) { const a = t / 400 + i * 0.785, r = 36 + Math.sin(t / 150 + i) * 3; c.fillStyle = i % 2 ? '#fff1a8' : col[1]; c.fillRect(Math.round(CX + Math.cos(a) * r), Math.round(CY + Math.sin(a) * r * 0.8), 2, 2); }
  }
  WW.hd.owlPortrait = owlPortrait;
})();
