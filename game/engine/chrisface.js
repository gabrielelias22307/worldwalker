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
    // shadow on the ground far below
    c.fillStyle = 'rgba(0,0,0,.35)'; c.beginPath(); c.ellipse(CX, 88, 16 - bob, 3, 0, 0, 7); c.fill();
    c.save(); c.translate(0, bob);
    if (mood === 'spin' && !calm) { c.translate(CX, 0); c.scale(Math.cos(t / 120) || 0.1, 1); c.translate(-CX, 0); }
    // wings behind the body
    const flap = calm ? 0.1 : droop ? -0.5 : cheer ? 0.45 + Math.sin(t / 70) * 0.25 : Math.sin(t / 160) * 0.22;
    wing(c, -1, flap, col, t); wing(c, 1, flap, col, t);
    if (WW.COURSE && WW.COURSE.guide === 'hourglass') hourglass(c, t, col, calm, mood); // Timewalker's guide, Tock
    else if (WW.COURSE && WW.COURSE.guide === 'bell') bell(c, t, col, calm, mood); // Civicwalker's guide, Liberty
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
    if (droop) { c.fillRect(CX - 3, CY + 1, 6, 1); c.fillRect(CX - 4, CY + 2, 1, 1); c.fillRect(CX + 3, CY + 2, 1, 1); }
    else { c.beginPath(); c.ellipse(CX, CY, 3.5, 1 + open, 0, 0, Math.PI); c.fill(); if (open > 1) { c.fillStyle = '#e06a6a'; c.fillRect(CX - 1, CY + 1, 2, 1); } }
    // the glass shine
    c.fillStyle = 'rgba(255,255,255,.55)'; c.beginPath(); c.ellipse(CX - 9, CY - 11, 5, 3, -0.6, 0, 7); c.fill();
    c.fillStyle = 'rgba(255,255,255,.8)'; c.fillRect(CX - 12, CY - 12, 2, 2);
    c.restore();
    // cheering: sparkles around him
    if (cheer && !calm) for (let i = 0; i < 8; i++) { const a = t / 400 + i * 0.785, r = 34 + Math.sin(t / 150 + i) * 3; c.fillStyle = i % 2 ? '#fff1a8' : col[1]; c.fillRect(Math.round(CX + Math.cos(a) * r), Math.round(CY + Math.sin(a) * r * 0.8), 2, 2); }
  }
  WW.chrisFace = { draw, S, COL };
})();
