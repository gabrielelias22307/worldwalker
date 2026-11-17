/* WORLDWALKER engine · Christopher's portrait (fun-pass-4)
   A big, shaded picture of him for his corner beside the map: a round glowing body like a little glass compass,
   feathered wings, eyes, a mouth that moves while he talks, and the needle that points at what he means.
   Drawn small (96 × 96) with soft light and shadow, then shown big with crisp pixels. Our own art. */
(function () {
  const WW = window.WW;
  const S = 96, CX = 48, CY = 50;
  const COL = { gold: ['#fff1a8', '#f2c14e', '#c08a1e'], green: ['#c8f7b0', '#5fd36a', '#2e9a46'], blue: ['#cfeaff', '#62b6ff', '#2f7fd1'], red: ['#ffd0c8', '#ff6b5e', '#c8323a'] };
  function feather(c, x, y, len, wid, ang, tip, t) { // one long feather: white, a little see-through, its tip in his color
    c.save(); c.translate(x, y); c.rotate(ang);
    const g = c.createLinearGradient(0, 0, len, 0);
    g.addColorStop(0, 'rgba(255,255,255,.95)'); g.addColorStop(0.65, 'rgba(240,246,255,.9)'); g.addColorStop(1, tip);
    c.fillStyle = g; c.beginPath(); c.ellipse(len / 2, 0, len / 2, wid, 0, 0, 7); c.fill();
    c.strokeStyle = 'rgba(34,32,46,.55)'; c.lineWidth = 1; c.stroke();
    c.strokeStyle = 'rgba(150,170,200,.6)'; c.beginPath(); c.moveTo(2, 0); c.lineTo(len - 3, 0); c.stroke(); // the quill
    c.restore();
  }
  function wing(c, side, flap, col, t) {
    const base = side < 0 ? Math.PI : 0, up = -0.55 - flap;
    for (let i = 0; i < 5; i++) {
      const a = base + side * (up + i * 0.28), len = 30 - i * 3;
      feather(c, CX + side * 12, CY - 4 + i, len, 5 - i * 0.4, a, col[1], t);
    }
  }
  /* Tock (Timewalker): a little glass hourglass with brass caps; sand falls from the top bulb (his face) to the bottom */
  function hourglass(c, t, col, calm, mood) {
    const top = [CX, CY - 6, 15], bot = [CX, CY + 18, 9.5], wood = '#7a4a2a';
    // the brass caps and the wooden posts
    c.fillStyle = '#22202e'; c.fillRect(CX - 20, CY - 26, 40, 7); c.fillRect(CX - 20, CY + 26, 40, 7);
    const brass = c.createLinearGradient(0, CY - 26, 0, CY - 19); brass.addColorStop(0, '#ffe9a0'); brass.addColorStop(1, '#a8781e');
    c.fillStyle = brass; c.fillRect(CX - 19, CY - 25, 38, 5); c.fillRect(CX - 19, CY + 27, 38, 5);
    c.fillStyle = wood; c.fillRect(CX - 19, CY - 20, 3, 47); c.fillRect(CX + 16, CY - 20, 3, 47);
    // the glass: a big bulb (his face) over a small one, glowing in his color
    const glass = () => { c.beginPath(); c.arc(top[0], top[1], top[2], 0, 7); c.arc(bot[0], bot[1], bot[2], 0, 7); c.rect(CX - 2, CY + 7, 4, 4); };
    c.fillStyle = '#22202e'; c.beginPath(); c.arc(top[0], top[1], top[2] + 2, 0, 7); c.arc(bot[0], bot[1], bot[2] + 2, 0, 7); c.fill();
    const g = c.createRadialGradient(CX - 6, CY - 12, 2, CX, CY, 24); g.addColorStop(0, '#ffffff'); g.addColorStop(0.3, col[0]); g.addColorStop(0.8, col[1]); g.addColorStop(1, col[2]);
    c.fillStyle = g; glass(); c.fill();
    // the sand: a little left on top, a pile at the bottom, a thin stream between (it moves unless reduced motion)
    c.save(); glass(); c.clip();
    c.fillStyle = '#e8c06a'; c.beginPath(); c.ellipse(CX, CY + 9, 6, 2.5, 0, 0, 7); c.fill();
    c.beginPath(); c.ellipse(CX, CY + 27, 11, 6, 0, 0, 7); c.fill(); c.fillStyle = '#c99a3a'; c.fillRect(CX - 9, CY + 24, 18, 1);
    const fall = calm ? 0 : (t / 60) % 4;
    c.fillStyle = '#f2d27a'; c.fillRect(CX - 0.5, CY + 9, 1, 12); c.fillStyle = '#fff1c0'; c.fillRect(CX - 0.5, CY + 10 + fall * 2, 1, 2);
    c.restore();
  }
  /* Liberty (Civicwalker): the Liberty Bell, flying. A wooden yoke on top, a bronze bell (his face), the long crack,
     and a clapper that swings under the lip (it stays still with reduced motion) */
  function bell(c, t, col, calm, mood) {
    const shape = () => { c.beginPath(); c.moveTo(CX - 12, CY - 14); c.quadraticCurveTo(CX - 12, CY - 26, CX, CY - 26); c.quadraticCurveTo(CX + 12, CY - 26, CX + 12, CY - 14);
      c.bezierCurveTo(CX + 13, CY + 4, CX + 16, CY + 14, CX + 23, CY + 21); c.quadraticCurveTo(CX, CY + 27, CX - 23, CY + 21); c.bezierCurveTo(CX - 16, CY + 14, CX - 13, CY + 4, CX - 12, CY - 14); c.closePath(); };
    // the yoke: a dark wooden beam with two iron straps
    c.fillStyle = '#22202e'; c.fillRect(CX - 22, CY - 36, 44, 9); c.fillStyle = '#7a4a2a'; c.fillRect(CX - 21, CY - 35, 42, 7);
    c.fillStyle = '#9a6a3e'; c.fillRect(CX - 21, CY - 35, 42, 2); c.fillStyle = '#3a3440'; c.fillRect(CX - 8, CY - 35, 3, 10); c.fillRect(CX + 5, CY - 35, 3, 10);
    // the clapper swings under the lip
    const sw = calm ? 0 : Math.sin(t / (mood === 'cheer' ? 120 : 380)) * (mood === 'cheer' ? 6 : 2.5);
    c.strokeStyle = '#22202e'; c.lineWidth = 2; c.beginPath(); c.moveTo(CX, CY + 18); c.lineTo(CX + sw, CY + 28); c.stroke();
    c.fillStyle = '#22202e'; c.beginPath(); c.arc(CX + sw, CY + 29, 4, 0, 7); c.fill(); c.fillStyle = '#5a5060'; c.beginPath(); c.arc(CX + sw - 1, CY + 28, 2, 0, 7); c.fill();
    // the bronze, with a little of his color in the glow
    c.lineWidth = 4; c.strokeStyle = '#22202e'; shape(); c.stroke();
    const g = c.createLinearGradient(CX - 22, 0, CX + 22, 0);
    g.addColorStop(0, '#5e3a1a'); g.addColorStop(0.3, '#c98a3e'); g.addColorStop(0.45, col[0]); g.addColorStop(0.6, '#b07432'); g.addColorStop(1, '#4a2c12');
    c.fillStyle = g; shape(); c.fill();
    // two bands near the top and the lip
    c.fillStyle = 'rgba(60,34,14,.55)'; c.fillRect(CX - 12, CY - 17, 24, 2); c.fillRect(CX - 18, CY + 13, 36, 2);
    // the famous crack: a jagged dark line up from the lip
    c.strokeStyle = '#22202e'; c.lineWidth = 1.6; c.beginPath(); c.moveTo(CX + 6, CY + 23); c.lineTo(CX + 8, CY + 17); c.lineTo(CX + 6, CY + 12); c.lineTo(CX + 8, CY + 7); c.lineTo(CX + 7, CY + 3); c.stroke();
    c.lineWidth = 1;
  }
  /* Copper (Coinwalker): a round pink piggy bank, flying. A coin slot on top, ears, little legs, a curly tail,
     and a snout under his eyes; a gold coin peeks out of the slot and bobs (still with reduced motion) */
  function pig(c, t, col, calm, mood) {
    const body = () => { c.beginPath(); c.ellipse(CX, CY + 2, 24, 20, 0, 0, 7); };
    // legs and tail behind the body
    c.fillStyle = '#22202e'; [-14, -5, 5, 14].forEach(dx => c.fillRect(CX + dx - 4, CY + 14, 8, 11));
    c.fillStyle = '#e88aa0'; [-14, -5, 5, 14].forEach(dx => c.fillRect(CX + dx - 3, CY + 15, 6, 9));
    c.fillStyle = '#b85a72'; [-14, -5, 5, 14].forEach(dx => c.fillRect(CX + dx - 3, CY + 22, 6, 2));
    c.strokeStyle = '#22202e'; c.lineWidth = 3; c.beginPath(); c.arc(CX + 27, CY - 2, 4, Math.PI * 0.6, Math.PI * 2.3); c.stroke();
    c.strokeStyle = '#e88aa0'; c.lineWidth = 1.5; c.beginPath(); c.arc(CX + 27, CY - 2, 4, Math.PI * 0.6, Math.PI * 2.3); c.stroke();
    // ears
    [[-13, -1], [13, 1]].forEach(([dx, s]) => { c.fillStyle = '#22202e'; c.beginPath(); c.moveTo(CX + dx - 7, CY - 13); c.lineTo(CX + dx + s * 2, CY - 27); c.lineTo(CX + dx + 7, CY - 13); c.fill();
      c.fillStyle = '#f4a6b8'; c.beginPath(); c.moveTo(CX + dx - 4, CY - 14); c.lineTo(CX + dx + s * 2, CY - 23); c.lineTo(CX + dx + 4, CY - 14); c.fill(); });
    // the body: pink, shaded, with a little of his color in the glow
    c.fillStyle = '#22202e'; c.beginPath(); c.ellipse(CX, CY + 2, 26, 22, 0, 0, 7); c.fill();
    const g = c.createRadialGradient(CX - 8, CY - 8, 3, CX, CY + 2, 28);
    g.addColorStop(0, '#ffe4ec'); g.addColorStop(0.35, '#f7b3c5'); g.addColorStop(0.8, '#e07f99'); g.addColorStop(1, col[2]);
    c.fillStyle = g; body(); c.fill();
    // the coin slot on top, with a gold coin that bobs in it
    const up = calm ? 0 : Math.round((Math.sin(t / 300) + 1) * 1.5) + (mood === 'cheer' ? 2 : 0);
    c.fillStyle = '#22202e'; c.fillRect(CX - 7, CY - 19, 14, 4);
    c.fillStyle = '#c08a1e'; c.fillRect(CX - 5, CY - 23 - up, 10, 5); c.fillStyle = '#ffe9a0'; c.fillRect(CX - 4, CY - 23 - up, 8, 2);
    c.fillStyle = '#22202e'; c.fillRect(CX - 7, CY - 18, 14, 2);
    // the snout (under his eyes and over his mouth): a soft oval with two nostrils
    c.fillStyle = '#22202e'; c.beginPath(); c.ellipse(CX, CY + 7, 9, 6, 0, 0, 7); c.fill();
    c.fillStyle = '#f4a6b8'; c.beginPath(); c.ellipse(CX, CY + 7, 8, 5, 0, 0, 7); c.fill();
    c.fillStyle = '#9a3e58'; c.fillRect(CX - 4, CY + 6, 2, 3); c.fillRect(CX + 2, CY + 6, 2, 3);
  }
  /* Beacon (Trailwalker): a little brass lantern, flying. A ring handle and a peaked cap, a warm glass body (his face),
     four dark frame bars, a candle flame under his mouth that flickers (still with reduced motion), and a brass base */
  function lantern(c, t, col, calm, mood) {
    // the ring handle and the peaked cap
    c.strokeStyle = '#22202e'; c.lineWidth = 4; c.beginPath(); c.arc(CX, CY - 31, 5, 0, 7); c.stroke();
    c.strokeStyle = '#d9a640'; c.lineWidth = 2; c.beginPath(); c.arc(CX, CY - 31, 5, 0, 7); c.stroke();
    c.fillStyle = '#22202e'; c.beginPath(); c.moveTo(CX - 20, CY - 18); c.lineTo(CX, CY - 28); c.lineTo(CX + 20, CY - 18); c.closePath(); c.fill();
    const cap = c.createLinearGradient(0, CY - 27, 0, CY - 18); cap.addColorStop(0, '#ffe9a0'); cap.addColorStop(1, '#a8781e');
    c.fillStyle = cap; c.beginPath(); c.moveTo(CX - 17, CY - 19); c.lineTo(CX, CY - 26); c.lineTo(CX + 17, CY - 19); c.closePath(); c.fill();
    // the glass body, glowing warm with a little of his color
    c.fillStyle = '#22202e'; c.fillRect(CX - 19, CY - 19, 38, 40);
    const g = c.createRadialGradient(CX, CY + 8, 3, CX, CY, 26);
    g.addColorStop(0, '#fffbe0'); g.addColorStop(0.35, '#ffd86b'); g.addColorStop(0.8, col[1]); g.addColorStop(1, col[2]);
    c.fillStyle = g; c.fillRect(CX - 17, CY - 17, 34, 36);
    // the candle and its flame (under his mouth)
    c.fillStyle = '#f4ecd8'; c.fillRect(CX - 3, CY + 12, 6, 6);
    const fl = calm ? 0 : Math.sin(t / 90) * 1.2 + (mood === 'cheer' ? 1 : 0);
    c.fillStyle = '#ff9a2e'; c.beginPath(); c.ellipse(CX + fl * 0.4, CY + 8, 2.6, 4 + fl * 0.5, 0, 0, 7); c.fill();
    c.fillStyle = '#fff6c0'; c.beginPath(); c.ellipse(CX + fl * 0.4, CY + 9, 1.2, 2, 0, 0, 7); c.fill();
    // frame bars at the corners and the brass base
    c.fillStyle = '#3a3440'; c.fillRect(CX - 17, CY - 17, 3, 36); c.fillRect(CX + 14, CY - 17, 3, 36);
    c.fillStyle = '#22202e'; c.fillRect(CX - 21, CY + 19, 42, 8);
    const base = c.createLinearGradient(0, CY + 20, 0, CY + 26); base.addColorStop(0, '#ffe9a0'); base.addColorStop(1, '#8a5a1a');
    c.fillStyle = base; c.fillRect(CX - 19, CY + 20, 38, 5);
  }
  /* Quill (HistoryWalker): a small, round scholar owl with ear tufts, big amber eyes that look about and blink, a beak
     that opens when he talks, soft feathers that flap, and a little quill pen tucked under one wing */
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
  /* draw him into c (a 96 × 96 canvas): kind = gold / green / blue / red, mood = null / talk / spin / droop / cheer */
  function draw(c, t, o = {}) {
    const col = COL[o.kind] || COL.gold, calm = WW.calm, mood = o.mood;
    const droop = mood === 'droop', cheer = mood === 'cheer', talk = mood === 'talk' || o.talking;
    const bob = calm ? 0 : Math.sin(t / 420) * 2 + (droop ? 4 : 0) - (cheer ? 2 : 0);
    c.clearRect(0, 0, S, S);
    // a soft sky behind him and his own light
    const bg = c.createRadialGradient(CX, CY, 4, CX, CY, 64); bg.addColorStop(0, '#3a3560'); bg.addColorStop(1, '#17152a');
    c.fillStyle = bg; c.fillRect(0, 0, S, S);
    for (let i = 0; i < 14; i++) { const x = (i * 37) % S, y = (i * 23 + 7) % S, tw = calm ? 1 : (Math.sin(t / 500 + i) + 1) / 2; c.fillStyle = `rgba(255,251,232,${0.25 + tw * 0.5})`; c.fillRect(x, y, 1, 1); }
    const halo = c.createRadialGradient(CX, CY + bob, 6, CX, CY + bob, 40 + (talk && !calm ? Math.sin(t / 90) * 2 : 0));
    halo.addColorStop(0, col[0] + 'cc'); halo.addColorStop(0.5, col[1] + '55'); halo.addColorStop(1, col[1] + '00');
    c.fillStyle = halo; c.fillRect(0, 0, S, S);
    if (WW.COURSE && WW.COURSE.guide === 'owl') return owlPortrait(c, t, o, col, calm); // HistoryWalker's guide, Quill
    // shadow on the ground far below
    c.fillStyle = 'rgba(0,0,0,.35)'; c.beginPath(); c.ellipse(CX, 88, 16 - bob, 3, 0, 0, 7); c.fill();
    c.save(); c.translate(0, bob);
    if (mood === 'spin' && !calm) { c.translate(CX, 0); c.scale(Math.cos(t / 120) || 0.1, 1); c.translate(-CX, 0); }
    // wings behind the body
    const flap = calm ? 0.1 : droop ? -0.5 : cheer ? 0.45 + Math.sin(t / 70) * 0.25 : Math.sin(t / 160) * 0.22;
    wing(c, -1, flap, col, t); wing(c, 1, flap, col, t);
    if (WW.COURSE && WW.COURSE.guide === 'hourglass') hourglass(c, t, col, calm, mood); // Timewalker's guide, Tock
    else if (WW.COURSE && WW.COURSE.guide === 'bell') bell(c, t, col, calm, mood); // Civicwalker's guide, Liberty
    else if (WW.COURSE && WW.COURSE.guide === 'pig') pig(c, t, col, calm, mood); // Coinwalker's guide, Copper
    else if (WW.COURSE && WW.COURSE.guide === 'lantern') lantern(c, t, col, calm, mood); // Trailwalker's guide, Beacon
    else {
      // the body: a glowing sphere with a brass rim
      const R = 20;
      c.fillStyle = '#22202e'; c.beginPath(); c.arc(CX, CY, R + 2, 0, 7); c.fill();
      const rim = c.createLinearGradient(CX - R, CY - R, CX + R, CY + R); rim.addColorStop(0, '#ffe9a0'); rim.addColorStop(0.5, '#c79a3a'); rim.addColorStop(1, '#7a5a1e');
      c.fillStyle = rim; c.beginPath(); c.arc(CX, CY, R, 0, 7); c.fill();
      const sph = c.createRadialGradient(CX - 7, CY - 8, 2, CX, CY, R - 2);
      sph.addColorStop(0, '#ffffff'); sph.addColorStop(0.25, col[0]); sph.addColorStop(0.75, col[1]); sph.addColorStop(1, col[2]);
      c.fillStyle = sph; c.beginPath(); c.arc(CX, CY, R - 3, 0, 7); c.fill();
      // the compass face: little marks for N, E, S and W
      c.fillStyle = 'rgba(34,32,46,.45)';
      for (let i = 0; i < 8; i++) { const a = i * Math.PI / 4, r1 = R - 6, r2 = i % 2 ? R - 5 : R - 8; c.save(); c.translate(CX + Math.cos(a) * (r1 + r2) / 2, CY + Math.sin(a) * (r1 + r2) / 2); c.rotate(a); c.fillRect(-(r1 - r2) / 2, -0.5, Math.abs(r1 - r2) || 1, 1.2); c.restore(); }
      // the needle turns toward what he means (red end), with a brass pin
      const na = o.needle != null ? o.needle : 0 + (calm ? 0 : Math.sin(t / 900) * 0.4) + (mood === 'spin' && !calm ? t / 60 : 0);
      c.save(); c.translate(CX, CY + 10); c.rotate(na);
      c.fillStyle = '#e04848'; c.beginPath(); c.moveTo(7, 0); c.lineTo(0, -2); c.lineTo(0, 2); c.fill();
      c.fillStyle = '#2f6fd6'; c.beginPath(); c.moveTo(-7, 0); c.lineTo(0, -2); c.lineTo(0, 2); c.fill();
      c.restore();
      c.fillStyle = '#7a5a1e'; c.beginPath(); c.arc(CX, CY + 10, 1.6, 0, 7); c.fill(); c.fillStyle = '#ffe9a0'; c.fillRect(CX - 1, CY + 9, 1, 1);
    }
    // eyes: dark and shiny; they blink, look down when he droops, and smile when he cheers
    const blink = !calm && (t % 3400) < 130;
    [-7, 7].forEach(dx => {
      const ex = CX + dx, ey = CY - 5;
      c.fillStyle = '#22202e';
      if (blink || cheer) { c.fillRect(ex - 3, ey + (cheer ? 0 : 1), 6, 2); if (cheer) { c.fillRect(ex - 4, ey + 1, 1, 1); c.fillRect(ex + 3, ey + 1, 1, 1); } }
      else { c.beginPath(); c.ellipse(ex, ey + (droop ? 1 : 0), 3, droop ? 2 : 4, 0, 0, 7); c.fill(); c.fillStyle = '#ffffff'; c.fillRect(ex - 2, ey - 2 + (droop ? 1 : 0), 2, 2); c.fillRect(ex + 1, ey + 1, 1, 1); }
    });
    // cheeks and mouth (it opens and closes while words come)
    c.fillStyle = 'rgba(255,120,120,.45)'; c.fillRect(CX - 13, CY - 1, 4, 2); c.fillRect(CX + 9, CY - 1, 4, 2);
    const open = talk && !calm ? Math.abs(Math.sin(t / 85)) * 3 : 0;
    c.fillStyle = '#22202e';
    const MY = WW.COURSE && WW.COURSE.guide === 'pig' ? CY + 15 : CY; // Copper's mouth sits under his snout
    if (droop) { c.fillRect(CX - 3, MY + 1, 6, 1); c.fillRect(CX - 4, MY + 2, 1, 1); c.fillRect(CX + 3, MY + 2, 1, 1); }
    else { c.beginPath(); c.ellipse(CX, MY, 3.5, 1 + open, 0, 0, Math.PI); c.fill(); if (open > 1) { c.fillStyle = '#e06a6a'; c.fillRect(CX - 1, MY + 1, 2, 1); } }
    // the glass shine
    c.fillStyle = 'rgba(255,255,255,.55)'; c.beginPath(); c.ellipse(CX - 9, CY - 11, 5, 3, -0.6, 0, 7); c.fill();
    c.fillStyle = 'rgba(255,255,255,.8)'; c.fillRect(CX - 12, CY - 12, 2, 2);
    c.restore();
    // cheering: sparkles around him
    if (cheer && !calm) for (let i = 0; i < 8; i++) { const a = t / 400 + i * 0.785, r = 34 + Math.sin(t / 150 + i) * 3; c.fillStyle = i % 2 ? '#fff1a8' : col[1]; c.fillRect(Math.round(CX + Math.cos(a) * r), Math.round(CY + Math.sin(a) * r * 0.8), 2, 2); }
  }
  WW.chrisFace = { draw, S, COL };
})();
