/* WORLDWALKER engine · the Village of Ages (HistoryWalker: course.village, content in apworld/village.js = WW_VILLAGE)
   A home village beside the world map (#village). Three things to do: plant (crops ripen while you play), build
   (workshops fill up with goods), and research a tech tree of 4 eras in two branches (Land, Make). A box opens when
   its episode is done, the boxes before it are researched, the cost is paid, and one question is answered right.
   Everything is placed on the right kind of land; a wrong spot says why. Saved in WW.save.village; the Passport Code
   keeps which boxes are researched (save.js). Only HD courses ship this file. */
(function () {
  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));
  const D = () => window.WW_VILLAGE;
  const TS = 48, Q = 2; // map square size, drawn at 2x for sharp lines
  const RES = { food: ['🌾', 'food'], goods: ['🧱', 'goods'], coins: ['●', 'coins'] };
  const now = () => Date.now();

  { const st = document.createElement('style'); st.textContent = `
.hw-go.vil { background: #8fd16a; margin-left: 6px; }
.hw-vil .vil-top-acts { display: flex; gap: 8px; flex-wrap: wrap; }
.hw-vil .hw-go.ghost { background: #2b2a4a; color: #f4ecd8; border-color: #000; font-size: 14px; padding: 8px 12px; }
.vil-res { display: flex; gap: 8px; flex-wrap: wrap; margin: 4px 0 8px; justify-content: center; }
.vil-r { background: #22203c; border: 2px solid #000; border-radius: 6px; padding: 6px 10px; font-size: 15px; }
.vil-r b { color: #f2c14e; } .vil-r.era { color: #c9bfa6; font-size: 13px; }
.vil-board { position: relative; max-width: calc((100vh - 270px) * 18 / 11); min-width: min(100%, 560px); margin: 0 auto; border: 4px solid #000; outline: 3px solid #6a5a3a; border-radius: 8px; overflow: hidden; }
#vil-cv { display: block; width: 100%; height: auto; cursor: pointer; touch-action: manipulation; }
#vil-pops { position: absolute; inset: 0; pointer-events: none; }
.vil-pop { position: absolute; transform: translate(-50%, 0); font: bold 16px system-ui, sans-serif; color: #fffbe8; text-shadow: 0 2px 0 #000, 0 0 6px #000; animation: vilup 1.3s ease-out forwards; }
@keyframes vilup { to { transform: translate(-50%, -40px); opacity: 0; } }
.vil-note { min-height: 1.4em; margin: 8px auto; max-width: 1100px; text-align: center; font-size: 15px; color: #f4ecd8; }
.vil-pal { display: flex; gap: 6px; flex-wrap: wrap; align-items: center; justify-content: center; }
.vil-pl { font-weight: 700; color: #c9bfa6; }
.vil-it { font: 14px system-ui, sans-serif; background: #fffbe8; color: #22202e; border: 2px solid #000; border-radius: 6px; padding: 6px 9px; cursor: pointer; }
.vil-it small { color: #6a5a48; } .vil-it.on { background: #f2c14e; outline: 3px solid #fff; } .vil-it:disabled { opacity: .45; cursor: default; }
.vil-it.rm { background: #3a2a3a; color: #f4ecd8; } .vil-it.rm.on { background: #b83a2a; }
.vil-h { margin: 22px 0 4px; color: #f2c14e; font-size: 18px; }
.vil-small { color: #b9b2c8; font-size: 13px; margin: 2px 0 8px; }
.vil-treebox { overflow-x: auto; background: #1a1830; border: 3px solid #000; border-radius: 8px; }
.vil-tree { position: relative; min-width: 720px; height: 440px; }
.vil-tree svg { position: absolute; inset: 0; width: 100%; height: 100%; }
.vil-tree line { stroke: #6a6488; stroke-width: 2; vector-effect: non-scaling-stroke; } .vil-tree line.done { stroke: #c9b48a; }
.vil-era { position: absolute; top: 4px; text-align: center; font-size: 12px; color: #f2c14e; font-weight: 700; }
.vil-lane { position: absolute; left: 0; width: 4.2%; display: flex; align-items: center; justify-content: center; writing-mode: vertical-rl; transform: rotate(180deg); font-size: 11px; font-weight: 700; letter-spacing: 2px; color: #c9bfa6; border-radius: 0 6px 6px 0; }
.vil-lane.land { background: rgba(120,180,80,.18); } .vil-lane.make { background: rgba(200,140,80,.18); }
.vil-node { position: absolute; transform: translate(-50%, -50%); width: 19.2%; min-height: 62px; display: flex; flex-direction: column; align-items: center; gap: 1px; padding: 5px 4px; border: 3px solid #000; border-radius: 8px; cursor: pointer; font: 13px system-ui, sans-serif; background: #3a3654; color: #c9c2dc; }
.vil-node .ic { font-size: 20px; } .vil-node .nm { font-weight: 700; text-align: center; line-height: 1.15; } .vil-node small { font-size: 11px; }
.vil-node.ready { background: #f2c14e; color: #22202e; animation: vilglow 1.6s ease-in-out infinite; }
.vil-node.done { background: #2f6a3e; color: #f4ecd8; }
@keyframes vilglow { 50% { box-shadow: 0 0 0 6px rgba(242,193,78,.35); } }
.vil-modal { position: fixed; inset: 0; background: rgba(10,8,20,.7); display: flex; align-items: center; justify-content: center; padding: 16px; z-index: 50; }
.vil-modal[hidden] { display: none; }
.vil-card { position: relative; background: #fffbe8; color: #22202e; border: 4px solid #000; border-radius: 10px; max-width: 620px; width: 100%; max-height: 92vh; overflow-y: auto; padding: 16px 18px; font: 16px/1.45 system-ui, sans-serif; }
.vil-x { position: absolute; top: 10px; right: 10px; border: 2px solid #000; background: #fff; border-radius: 6px; font-size: 16px; padding: 2px 8px; cursor: pointer; }
.vil-ch { display: flex; gap: 12px; align-items: center; } .vil-ch .big { font-size: 40px; } .vil-ch h3 { margin: 2px 0; font-size: 22px; }
.vil-era2 { font-size: 13px; color: #7a5a3a; font-weight: 700; }
.vil-fact { font-family: Georgia, serif; font-size: 17px; background: #fbf4e2; border-left: 5px solid #9a6a3a; padding: 8px 10px; }
.vil-eff { font-weight: 700; color: #2f5a8a; } .vil-game { font-size: 14px; color: #4a4038; } .vil-game i { color: #7a6a58; }
.vil-needs { list-style: none; padding: 0; } .vil-needs li { margin: 4px 0; } .vil-needs .ok { color: #2a7a4a; } .vil-needs .bad { color: #a83a2e; }
.vil-needs span.ok { color: #2a7a4a; font-weight: 700; } .vil-needs span.bad { color: #a83a2e; font-weight: 700; }
.vil-play { margin-left: 6px; border: 2px solid #000; background: #2aa198; color: #fff; border-radius: 6px; padding: 2px 8px; cursor: pointer; }
.vil-done { color: #2a7a4a; font-weight: 700; }
.vil-q { font-weight: 700; } .vil-ch4 { display: grid; gap: 6px; }
.vil-ch4 button { text-align: left; font: 15px system-ui, sans-serif; background: #fff; border: 2px solid #22202e; border-radius: 6px; padding: 8px 10px; cursor: pointer; }
.vil-ch4 button.wrong { background: #f6d6d2; border-color: #a83a2e; } .vil-ch4 button.right { background: #d4efd9; border-color: #2a7a4a; }
.vil-why { padding: 6px 8px; border-radius: 6px; } .vil-why.ok { background: #d4efd9; } .vil-why.bad { background: #f6d6d2; }
.vil-card .hw-go { margin-top: 8px; }
`; document.head.appendChild(st); }

  /* ---------------- the save ---------------- */
  let fresh = []; // episodes whose gift arrived on this visit
  function V() {
    const s = WW.save, d = D();
    const v = s.village = s.village || { tech: [], plots: {}, food: 0, goods: 0, gifts: [] };
    v.tech = v.tech || []; v.plots = v.plots || {}; v.gifts = v.gifts || [];
    if (!v.seeded) { v.seeded = true; d.start.forEach(p => { v.plots[p.at.join(',')] = { id: p.id, t: now() - 600000 }; }); } // the first fields are ripe: something to tap at once
    // every finished episode leaves a gift in the village, once
    WW.EPISODES.forEach(e => { if (s.episodes[e.id] && s.episodes[e.id].done && !v.gifts.includes(e.id)) { v.gifts.push(e.id); v.food += d.gift.food; v.goods += d.gift.goods; fresh.push(e.id); } });
    return v;
  }
  const have = (v, k) => k === 'coins' ? (WW.save.coins || 0) : (v[k] || 0);
  function pay(v, cost) { for (const k in cost) { if (k === 'coins') { WW.save.coins -= cost[k]; WW.save.spent = (WW.save.spent || 0) + cost[k]; } else v[k] -= cost[k]; } }
  function add(v, give, n = 1) { for (const k in give) { if (k === 'coins') WW.save.coins = (WW.save.coins || 0) + give[k] * n; else v[k] = (v[k] || 0) + give[k] * n; } }
  const costHTML = (v, cost) => Object.keys(cost).map(k => `<span class="${have(v, k) >= cost[k] ? 'ok' : 'bad'}">${RES[k][0]} ${cost[k]}</span>`).join(' ');
  const giveText = g => Object.keys(g).map(k => `+${g[k]} ${RES[k][0]}`).join(' ');

  const items = () => [...D().items, ...D().tech];
  const item = id => items().find(i => i.id === id);
  const techDone = (v, id) => v.tech.includes(id);
  const placed = (v, id) => Object.values(v.plots).filter(p => p.id === id).length;
  const usable = v => items().filter(i => !i.ep || techDone(v, i.id)); // starters + researched
  const epName = id => { const e = (window.WW_CATALOG || []).find(c => c.id === id); return e ? WW.L(e.title) : ''; };
  const epDone = id => !!(WW.save.episodes[id] && WW.save.episodes[id].done);
  const eraOf = v => Math.max(1, ...v.tech.map(id => (item(id) || {}).era || 1));

  /* ---------------- growth: crops ripen, buildings fill up ---------------- */
  function state(p) {
    const it = item(p.id), age = (now() - p.t) / 1000;
    if (it.kind === 'crop') { const g = Math.min(1, age / it.every); return { grow: g, ready: g >= 1 ? 1 : 0 }; }
    const loads = Math.min(it.cap || 5, Math.floor(age / it.every)); return { grow: Math.min(1, (age % it.every) / it.every), ready: loads };
  }
  function collect(v, key) {
    const p = v.plots[key], it = item(p.id), s = state(p);
    if (!s.ready) return 0;
    add(v, it.give, s.ready);
    if (it.kind === 'crop') p.t = now(); // replanted at once
    else p.t = s.ready >= (it.cap || 5) ? now() : p.t + s.ready * it.every * 1000;
    return s.ready;
  }

  /* ---------------- where things may go ---------------- */
  const tile = (x, y) => (D().map[y] || '')[x] || '';
  const near = (x, y, set) => [[1, 0], [-1, 0], [0, 1], [0, -1]].some(([dx, dy]) => set.includes(tile(x + dx, y + dy)));
  const fits = (it, x, y) => it.on.includes(tile(x, y)) && (!it.near || near(x, y, it.near));

  /* ---------------- drawing (all in code, HD) ---------------- */
  let rng = 1; const rnd = () => (rng = (rng * 16807) % 2147483647) / 2147483647;
  const COL = { g: '#6fae4f', w: '#5d8f45', h: '#88a556', m: '#8a8578', t: '#4f8a3c', d: '#c9a66b', b: '#c9a66b', c: '#e8d29a', r: '#3f86c8', l: '#5aa6d8', L: '#2f6aa8', s: '#2b67a8' };
  const WATER = 'rlLs';
  function terrain(W, H) {
    const cv = document.createElement('canvas'); cv.width = W * TS * Q; cv.height = H * TS * Q;
    const c = cv.getContext('2d'); c.scale(Q, Q); rng = 7;
    const map = D().map;
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
      const k = map[y][x], X = x * TS, Y = y * TS;
      c.fillStyle = COL[k === 'b' ? 'r' : k]; c.fillRect(X, Y, TS, TS);
      // texture: speckles of lighter and darker color
      for (let i = 0; i < 26; i++) { c.fillStyle = rnd() < 0.5 ? 'rgba(255,255,230,.08)' : 'rgba(0,30,0,.08)'; c.fillRect(X + rnd() * TS, Y + rnd() * TS, 2 + rnd() * 3, 2 + rnd() * 2); }
    }
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
      const k = map[y][x], X = x * TS, Y = y * TS;
      if (!WATER.includes(k) && k !== 'b') { // a light shore where land meets water
        c.fillStyle = 'rgba(240,226,170,.85)';
        if (WATER.includes(tile(x, y - 1))) c.fillRect(X, Y, TS, 4);
        if (WATER.includes(tile(x, y + 1))) c.fillRect(X, Y + TS - 4, TS, 4);
        if (WATER.includes(tile(x - 1, y))) c.fillRect(X, Y, 4, TS);
        if (WATER.includes(tile(x + 1, y))) c.fillRect(X + TS - 4, Y, 4, TS);
      }
      if (k === 'g' || k === 'w') for (let i = 0; i < 5; i++) { const gx = X + 4 + rnd() * (TS - 8), gy = Y + 6 + rnd() * (TS - 10); c.strokeStyle = k === 'w' ? '#3f6f33' : '#4f8f3a'; c.lineWidth = 1.2; c.beginPath(); c.moveTo(gx, gy); c.lineTo(gx - 2, gy - 5); c.moveTo(gx, gy); c.lineTo(gx + 2, gy - 5); c.stroke(); }
      if (k === 'w') { c.fillStyle = 'rgba(70,120,170,.45)'; c.beginPath(); c.ellipse(X + 14 + rnd() * 20, Y + 16 + rnd() * 16, 7, 3, 0, 0, 7); c.fill(); }
      if (k === 'h') { c.strokeStyle = 'rgba(70,90,40,.45)'; c.lineWidth = 2; for (let i = 0; i < 3; i++) { c.beginPath(); c.arc(X + TS / 2, Y + TS + 6, 14 + i * 12, Math.PI * 1.1, Math.PI * 1.9); c.stroke(); } }
      if (k === 'm') { for (let i = 0; i < 2; i++) { const mx = X + 6 + i * 20, my = Y + TS - 4; c.fillStyle = i ? '#7a756a' : '#9a9486'; c.beginPath(); c.moveTo(mx, my); c.lineTo(mx + 14, Y + 8 + i * 6); c.lineTo(mx + 28, my); c.fill(); c.fillStyle = '#f4f2ea'; c.beginPath(); c.moveTo(mx + 9, Y + 15 + i * 6); c.lineTo(mx + 14, Y + 8 + i * 6); c.lineTo(mx + 19, Y + 15 + i * 6); c.fill(); } }
      if (k === 't') for (let i = 0; i < 3; i++) { const tx = X + 10 + (i % 2) * 22 + rnd() * 4, ty = Y + 14 + (i > 1 ? 18 : 0); c.fillStyle = '#5a3a22'; c.fillRect(tx - 2, ty + 6, 4, 9); c.fillStyle = '#2f6a2c'; c.beginPath(); c.arc(tx, ty, 11, 0, 7); c.fill(); c.fillStyle = '#43873a'; c.beginPath(); c.arc(tx - 3, ty - 3, 6, 0, 7); c.fill(); }
      if (k === 'd' || k === 'b') { c.fillStyle = 'rgba(120,80,40,.25)'; c.fillRect(X, Y + 14, TS, 3); c.fillRect(X, Y + 31, TS, 3); }
      if (k === 'b') { c.fillStyle = '#8a5a30'; c.fillRect(X - 2, Y + 6, TS + 4, TS - 12); c.fillStyle = '#a8743f'; for (let i = 0; i < 8; i++) c.fillRect(X + i * 6, Y + 8, 5, TS - 16); c.fillStyle = '#5a3a1c'; c.fillRect(X - 2, Y + 4, TS + 4, 3); c.fillRect(X - 2, Y + TS - 7, TS + 4, 3); }
      if (k === 'c') for (let i = 0; i < 3; i++) { c.fillStyle = 'rgba(160,120,70,.35)'; c.beginPath(); c.arc(X + rnd() * TS, Y + rnd() * TS, 1.6, 0, 7); c.fill(); }
      if (k === 'l') for (let i = 0; i < 3; i++) { const rx = X + 6 + rnd() * 36, ry = Y + 10 + rnd() * 30; c.strokeStyle = '#3f7a3a'; c.lineWidth = 1.5; c.beginPath(); c.moveTo(rx, ry + 8); c.lineTo(rx - 2, ry); c.moveTo(rx + 3, ry + 8); c.lineTo(rx + 4, ry - 1); c.stroke(); }
    }
    return cv;
  }
  // the episodes' HD ground painter (hd.js) draws the village too: village letters → episode map letters
  const EP = { g: '.', w: '.', r: '~', b: 'b', l: '~', L: '=', h: 'g', m: 'M', t: 'T', d: ':', c: 's', s: '=' };
  function deco(W, H) { // what the episode letters lack: puddles and reeds on wet ground, contour lines on the hills
    const cv = document.createElement('canvas'); cv.width = W * TS * Q; cv.height = H * TS * Q;
    const c = cv.getContext('2d'); c.scale(Q, Q); rng = 11;
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
      const k = tile(x, y), X = x * TS, Y = y * TS;
      if (k === 'w') {
        const gr = c.createRadialGradient(X + TS / 2, Y + TS / 2, 4, X + TS / 2, Y + TS / 2, TS * 0.78); gr.addColorStop(0, 'rgba(40,70,30,.32)'); gr.addColorStop(1, 'rgba(40,70,30,0)');
        c.fillStyle = gr; c.fillRect(X - TS / 2, Y - TS / 2, TS * 2, TS * 2);
        for (let i = 0; i < 2; i++) { c.fillStyle = 'rgba(80,140,200,.55)'; c.beginPath(); c.ellipse(X + 10 + rnd() * 28, Y + 10 + rnd() * 28, 6 + rnd() * 3, 2.5, 0, 0, 7); c.fill(); }
        for (let i = 0; i < 4; i++) { const rx = X + 4 + rnd() * 40, ry = Y + 12 + rnd() * 32; c.strokeStyle = '#2f5a26'; c.lineWidth = 1.4; c.beginPath(); c.moveTo(rx, ry); c.lineTo(rx - 1.5, ry - 8); c.moveTo(rx + 2, ry); c.lineTo(rx + 3, ry - 7); c.stroke(); }
      }
      if (k === 'h') { c.strokeStyle = 'rgba(90,70,30,.35)'; c.lineWidth = 1.5; for (let i = 0; i < 3; i++) { c.beginPath(); c.moveTo(X, Y + 12 + i * 13 + Math.sin(x * 2 + i) * 2); c.bezierCurveTo(X + 16, Y + 8 + i * 13, X + 32, Y + 16 + i * 13, X + TS, Y + 12 + i * 13 + Math.sin(x * 2 + 1 + i) * 2); c.stroke(); } }
      if (k === 'l') for (let i = 0; i < 3; i++) { const rx = X + 6 + rnd() * 36, ry = Y + 10 + rnd() * 30; c.strokeStyle = '#3f7a3a'; c.lineWidth = 1.5; c.beginPath(); c.moveTo(rx, ry + 8); c.lineTo(rx - 2, ry); c.moveTo(rx + 3, ry + 8); c.lineTo(rx + 4, ry - 1); c.stroke(); }
    }
    return cv;
  }
  // the moving water: soft light lines drifting across rivers, lakes and the sea
  function water(c, t) {
    const map = D().map;
    for (let y = 0; y < map.length; y++) for (let x = 0; x < map[y].length; x++) {
      const k = map[y][x]; if (!WATER.includes(k)) continue;
      const X = x * TS, Y = y * TS;
      c.strokeStyle = 'rgba(255,255,255,.22)'; c.lineWidth = 1.5;
      for (let i = 0; i < 2; i++) { const ph = ((t / (k === 'r' ? 900 : 2400)) + i * 0.5 + x * 0.13 + y * 0.29) % 1, yy = Y + 10 + i * 20 + Math.sin(t / 700 + x) * 2; c.beginPath(); c.moveTo(X + ph * TS - 8, yy); c.lineTo(X + ph * TS + 6, yy); c.stroke(); }
      if (k === 's' && tile(x, y - 1) === 'c') { c.fillStyle = `rgba(255,255,255,${0.35 + Math.sin(t / 500 + x) * 0.2})`; c.fillRect(X, Y + 2 + Math.sin(t / 600 + x * 0.7) * 2, TS, 3); }
    }
  }
  // crops: soil, then sprouts, then ripe (they sway a little)
  function drawCrop(c, it, X, Y, g, t) {
    const sway = k => Math.sin(t / 600 + X * 0.1 + k) * 1.5;
    const plant = (px, py, h, col, head) => { c.strokeStyle = col; c.lineWidth = 2; c.beginPath(); c.moveTo(px, py); c.lineTo(px + sway(px), py - h); c.stroke(); if (head) { c.fillStyle = head; c.beginPath(); c.ellipse(px + sway(px), py - h, 2.4, 4, 0, 0, 7); c.fill(); } };
    const ripe = g >= 1, h = 4 + g * 12;
    if (it.id === 'field' || it.id === 'newcrops' || it.id === 'spice') {
      c.fillStyle = '#7a5332'; c.fillRect(X + 3, Y + 3, TS - 6, TS - 6);
      c.fillStyle = '#5e3e24'; for (let r = 0; r < 4; r++) c.fillRect(X + 5, Y + 9 + r * 10, TS - 10, 3);
      for (let r = 0; r < 4; r++) for (let q = 0; q < 4; q++) {
        const px = X + 10 + q * 10, py = Y + 12 + r * 10;
        if (it.id === 'field') plant(px, py, h, ripe ? '#c9a23a' : '#5aa23a', ripe ? '#e8c45a' : null);
        else if (it.id === 'spice') { c.fillStyle = '#3f7f34'; c.beginPath(); c.arc(px, py - h / 3, 2 + g * 3, 0, 7); c.fill(); if (ripe) { c.fillStyle = '#c8322a'; c.fillRect(px - 2, py - h / 3 - 1, 2, 2); c.fillRect(px + 1, py - h / 3 + 1, 2, 2); } }
        else if ((r + q) % 2) plant(px, py, h * 1.3, '#4f9a34', ripe ? '#f0c63a' : null); // maize
        else { c.fillStyle = '#4c8f38'; c.beginPath(); c.arc(px, py - 2, 2 + g * 3, 0, 7); c.fill(); } // potato leaves
      }
    } else if (it.id === 'paddy') {
      c.fillStyle = '#8a6a40'; c.fillRect(X + 2, Y + 2, TS - 4, TS - 4);
      c.fillStyle = '#4f8fc0'; c.fillRect(X + 5, Y + 5, TS - 10, TS - 10);
      c.fillStyle = 'rgba(255,255,255,.25)'; c.fillRect(X + 8 + (t / 80 % 20), Y + 9, 8, 1);
      for (let r = 0; r < 4; r++) for (let q = 0; q < 4; q++) plant(X + 10 + q * 9, Y + 14 + r * 9, h * 0.8, ripe ? '#a8b83a' : '#5abf4a', ripe ? '#d8c85a' : null);
    } else if (it.id === 'chinampa') {
      c.fillStyle = '#6b4a2c'; c.fillRect(X + 6, Y + 6, TS - 12, TS - 12);
      c.fillStyle = '#4f7a34'; c.fillRect(X + 6, Y + 6, TS - 12, 3); c.fillRect(X + 6, Y + TS - 9, TS - 12, 3);
      for (let r = 0; r < 3; r++) for (let q = 0; q < 3; q++) { const px = X + 14 + q * 10, py = Y + 16 + r * 10; plant(px, py, h * 0.8, '#4f9a34', null); if (ripe && (r + q) % 2) { c.fillStyle = '#e07a2a'; c.beginPath(); c.arc(px + 2, py - 1, 3, 0, 7); c.fill(); } }
    } else if (it.id === 'terrace') {
      for (let r = 0; r < 3; r++) { c.fillStyle = '#8a8070'; c.fillRect(X + 2, Y + 12 + r * 13, TS - 4, 3); c.fillStyle = '#6a8a3a'; c.fillRect(X + 2, Y + 4 + r * 13, TS - 4, 8); for (let q = 0; q < 5; q++) plant(X + 7 + q * 8, Y + 11 + r * 13, 3 + g * 5, ripe ? '#b88a3a' : '#5aa23a', ripe ? '#c8463a' : null); }
    }
  }
  function house(c, X, Y, wall, roof, w = 38, h = 22) {
    const x0 = X + (TS - w) / 2, y0 = Y + TS - 6 - h;
    c.fillStyle = 'rgba(0,0,0,.2)'; c.fillRect(x0 + 2, Y + TS - 6, w, 4);
    c.fillStyle = wall; c.fillRect(x0, y0, w, h);
    c.fillStyle = roof; c.beginPath(); c.moveTo(x0 - 4, y0 + 2); c.lineTo(x0 + w / 2, y0 - 12); c.lineTo(x0 + w + 4, y0 + 2); c.fill();
    c.fillStyle = '#3a2614'; c.fillRect(x0 + w / 2 - 4, y0 + h - 10, 8, 10);
    return [x0, y0, w, h];
  }
  function smoke(c, x, y, t) { for (let i = 0; i < 4; i++) { const p = ((t / 1400) + i / 4) % 1; c.fillStyle = `rgba(230,230,230,${0.5 * (1 - p)})`; c.beginPath(); c.arc(x + Math.sin(p * 6 + i) * 3, y - p * 22, 2 + p * 4, 0, 7); c.fill(); } }
  function boat(c, x, y, t, lateen) {
    const b = Math.sin(t / 500) * 1.5;
    c.fillStyle = '#6a4424'; c.beginPath(); c.moveTo(x - 12, y + b); c.lineTo(x + 12, y + b); c.lineTo(x + 8, y + 5 + b); c.lineTo(x - 8, y + 5 + b); c.fill();
    c.fillStyle = '#4a2e18'; c.fillRect(x - 1, y - 18 + b, 2, 18);
    c.fillStyle = '#f4ecd8';
    if (lateen) { c.beginPath(); c.moveTo(x + 1, y - 18 + b); c.lineTo(x + 12, y - 2 + b); c.lineTo(x + 1, y - 2 + b); c.fill(); c.fillRect(x - 9, y - 14 + b, 8, 10); }
    else { c.beginPath(); c.moveTo(x + 1, y - 17 + b); c.lineTo(x + 11, y - 3 + b); c.lineTo(x - 6, y - 3 + b); c.fill(); }
  }
  function drawBuilding(c, it, X, Y, t) {
    switch (it.id) {
      case 'workshop': { house(c, X, Y, '#b07a48', '#7a3a2a'); c.fillStyle = '#5a5a62'; c.fillRect(X + 34, Y + 32, 8, 5); c.fillRect(X + 36, Y + 37, 4, 5); break; }
      case 'kiln': { c.fillStyle = 'rgba(0,0,0,.2)'; c.fillRect(X + 8, Y + 41, 32, 4); c.fillStyle = '#a8553a'; c.beginPath(); c.arc(X + 22, Y + 40, 15, Math.PI, 0); c.fill(); c.fillStyle = '#ff9a3a'; c.beginPath(); c.arc(X + 22, Y + 40, 5 + Math.sin(t / 120), Math.PI, 0); c.fill(); c.fillStyle = '#7a3a2a'; c.fillRect(X + 30, Y + 16, 6, 14); smoke(c, X + 33, Y + 14, t); c.fillStyle = '#f4f6fa'; c.fillRect(X + 39, Y + 32, 6, 9); c.fillStyle = '#3a6ac8'; c.fillRect(X + 39, Y + 35, 6, 2); break; }
      case 'press': { const [x0, y0] = house(c, X, Y, '#d8c8a0', '#8a4a2a'); c.fillStyle = '#fffbe8'; for (let i = 0; i < 3; i++) c.fillRect(x0 + 3 + i * 10, y0 + 3, 7, 5 + Math.sin(t / 400 + i)); break; }
      case 'caravanserai': { c.fillStyle = 'rgba(0,0,0,.2)'; c.fillRect(X + 4, Y + 42, 42, 4); c.fillStyle = '#d8b07a'; c.fillRect(X + 3, Y + 12, 42, 30); c.fillStyle = '#c09060'; c.fillRect(X + 3, Y + 12, 42, 4); c.fillStyle = '#3a2614'; c.beginPath(); c.arc(X + 24, Y + 42, 7, Math.PI, 0); c.fill(); const cx = X + 8 + ((t / 60) % 34); c.fillStyle = '#b8864a'; c.fillRect(cx, Y + 38, 8, 4); c.fillRect(cx + 2, Y + 35, 3, 3); c.fillRect(cx + 7, Y + 34, 2, 5); break; }
      case 'harbor': { c.fillStyle = '#7a5230'; c.fillRect(X + 10, Y + 18, 10, TS + 10); for (let i = 0; i < 4; i++) { c.fillStyle = '#5a3a1c'; c.fillRect(X + 10, Y + 22 + i * 10, 10, 2); } boat(c, X + 34, Y + TS + 6, t, false); break; }
      case 'gunpowder': { const [x0, y0] = house(c, X, Y, '#8a8a92', '#4a4a52'); c.fillStyle = '#6a4424'; c.fillRect(x0 - 6, y0 + 8, 7, 10); c.fillStyle = '#2a2a30'; c.fillRect(x0 + 28, y0 + 12, 14, 5); c.beginPath(); c.arc(x0 + 31, y0 + 18, 3, 0, 7); c.fill(); break; }
      case 'census': { const [x0, y0] = house(c, X, Y, '#e8dcc0', '#b83a2a', 40, 22); c.fillStyle = '#c8b890'; for (let i = 0; i < 4; i++) c.fillRect(x0 + 3 + i * 9, y0 + 2, 3, 16); c.fillStyle = '#fffbe8'; c.fillRect(x0 + 38, y0 + 6, 8, 10); c.fillStyle = '#5a3a1c'; c.fillRect(x0 + 38, y0 + 6, 8, 2); break; }
      case 'shipyard': { c.fillStyle = '#7a5230'; c.fillRect(X + 4, Y + 30, 40, 4); c.strokeStyle = '#8a5a30'; c.lineWidth = 2; for (let i = 0; i < 5; i++) { c.beginPath(); c.arc(X + 24, Y + 30, 6 + i * 3, 0, Math.PI); c.stroke(); } boat(c, X + 30, Y + TS + 4, t, true); break; }
      case 'cotton': { const [x0, y0] = house(c, X, Y, '#e8e0d0', '#5a6a9a'); c.fillStyle = '#d84a5a'; c.fillRect(x0 - 8, y0 + 8, 6, 10); c.fillStyle = '#3a8ac8'; c.fillRect(x0 + 36, y0 + 8, 6, 10); c.strokeStyle = '#5a3a1c'; c.lineWidth = 1.5; const a = t / 300; c.beginPath(); c.arc(x0 + 17, y0 - 2, 5, 0, 7); c.moveTo(x0 + 17, y0 - 2); c.lineTo(x0 + 17 + Math.cos(a) * 5, y0 - 2 + Math.sin(a) * 5); c.stroke(); break; }
      default: house(c, X, Y, '#b07a48', '#7a3a2a');
    }
  }
  function badge(c, X, Y, icon, n, t) {
    const b = Math.sin(t / 250) * 2;
    c.fillStyle = '#fffbe8'; c.strokeStyle = '#22202e'; c.lineWidth = 2; c.beginPath(); c.arc(X + TS - 10, Y + 8 + b, 9, 0, 7); c.fill(); c.stroke();
    c.font = '11px system-ui, sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillStyle = '#22202e'; c.fillText(icon, X + TS - 10, Y + 9 + b);
    if (n > 1) { c.font = 'bold 9px system-ui, sans-serif'; c.fillStyle = '#b83a2a'; c.fillText('×' + n, X + TS - 10, Y + 22 + b); }
  }

  /* ---------------- the page ---------------- */
  let sel = null, removing = false, hover = null, raf = 0, ground = null, note = '';
  WW.village = () => {
    const d = D(), v = V(), map = d.map, W = map[0].length, H = map.length;
    WW.store();
    document.title = 'Village · ' + ((WW.COURSE && WW.COURSE.name) || WW.TITLE);
    const root = document.getElementById('ww'); root.className = 'hw-hub hw-vil';
    root.innerHTML = `<div class="hw-wrap">
      <header class="hw-top"><div><div class="hw-logo">🏡 YOUR VILLAGE</div><div class="hw-sub">THE VILLAGE OF AGES · PLANT · BUILD · RESEARCH</div></div>
        <div class="vil-top-acts"><button class="hw-go ghost" id="vil-map">🗺️ World map</button><button class="hw-go ghost" id="vil-music"></button></div></header>
      <div class="vil-res" id="vil-res"></div>
      <div class="vil-board"><canvas id="vil-cv"></canvas><div id="vil-pops"></div></div>
      <div class="vil-note" id="vil-note"></div>
      <div class="vil-pal" id="vil-pal"></div>
      <h2 class="vil-h">📜 Tech tree</h2>
      <p class="vil-small">Each box opens after you finish its episode and research the boxes its arrows come from. Then pay the cost and answer one question.</p>
      <div class="vil-treebox"><div class="vil-tree" id="vil-tree"></div></div>
    </div><div class="vil-modal" id="vil-modal" hidden></div>`;
    const HD = !!(WW.hd && WW.hd.drawTiles), EMAP = map.map(r => [...r].map(k => EP[k] || '.').join(''));
    ground = HD ? deco(W, H) : terrain(W, H);
    const cv = document.getElementById('vil-cv'); cv.width = W * TS * Q; cv.height = H * TS * Q;
    const c = cv.getContext('2d');
    document.getElementById('vil-map').onclick = () => WW.goMap();
    const mus = document.getElementById('vil-music');
    const musLabel = () => { mus.textContent = WW.save.music ? '🔊 Music on' : '🔇 Music off'; };
    mus.onclick = () => { WW.audioInit && WW.audioInit(); WW.music.toggle(); if (WW.save.music) song(); musLabel(); };
    musLabel();
    // sound may start only after a tap
    const wake = () => { WW.audioInit && WW.audioInit(); song(); root.removeEventListener('pointerdown', wake); };
    root.addEventListener('pointerdown', wake);
    function song() { if (WW.music && WW.save.music) WW.music.play('village' + Math.min(4, eraOf(V()))); }

    const at = ev => { const r = cv.getBoundingClientRect(); return [Math.floor((ev.clientX - r.left) / r.width * W), Math.floor((ev.clientY - r.top) / r.height * H)]; };
    cv.onpointermove = ev => { hover = at(ev); };
    cv.onpointerleave = () => { hover = null; };
    cv.onclick = ev => tap(...at(ev));
    function say(t) { note = t; document.getElementById('vil-note').innerHTML = t; }
    function pop(x, y, text) {
      const box = document.getElementById('vil-pops'), el = document.createElement('div'); el.className = 'vil-pop'; el.textContent = text;
      el.style.left = ((x + 0.5) / W * 100) + '%'; el.style.top = ((y + 0.2) / H * 100) + '%'; box.appendChild(el); setTimeout(() => el.remove(), 1300);
    }
    function tap(x, y) {
      const v = V(), key = x + ',' + y, p = v.plots[key], k = tile(x, y);
      if (removing) {
        if (!p) return say('Tap something you placed to put it away.');
        delete v.plots[key]; WW.sfx && WW.sfx('blip'); say(`${esc(item(p.id).name)} is back in your list below. Choose it to place it again.`); removing = false; WW.store(); render(); return;
      }
      if (sel) {
        const it = item(sel);
        if (p) return say('That spot is taken. Choose an empty square.');
        if (!fits(it, x, y)) { WW.sfx && WW.sfx('bad'); return say(`❌ ${esc(it.wrong)}`); }
        v.plots[key] = { id: it.id, t: now() }; WW.sfx && WW.sfx('coin');
        say(`✅ ${esc(it.name)} placed. ${esc(it.game)}`);
        if (placed(v, it.id) >= it.limit) sel = null;
        WW.store(); render(); return;
      }
      if (p) {
        const it = item(p.id), s = state(p);
        if (s.ready) { const n = collect(v, key); WW.sfx && WW.sfx('coin'); pop(x, y, giveText(it.give).replace(/\+(\d+)/g, (m, a) => '+' + a * n)); say(`${esc(it.name)}: ${it.kind === 'crop' ? 'harvested and planted again' : 'collected'}.`); WW.store(); render(); return; }
        const left = Math.ceil(it.every * (1 - s.grow));
        return say(`${it.icon} <b>${esc(it.name)}</b> · ${it.kind === 'crop' ? 'ripe' : 'ready'} in ${left} s. ${esc(it.game)}`);
      }
      say(esc(d.ground[k] || ''));
    }

    function render() {
      const v = V();
      document.getElementById('vil-res').innerHTML = ['food', 'goods', 'coins'].map(k => `<span class="vil-r"><b>${RES[k][0]} ${have(v, k)}</b> ${RES[k][1]}</span>`).join('') +
        `<span class="vil-r era">Era ${eraOf(v)} · ${v.tech.length} / ${d.tech.length} researched</span>`;
      // what can be placed
      const pal = document.getElementById('vil-pal');
      pal.innerHTML = `<span class="vil-pl">Place:</span>` + usable(v).map(it => {
        const left = it.limit - placed(v, it.id);
        return `<button class="vil-it${sel === it.id ? ' on' : ''}" data-it="${it.id}" ${left <= 0 ? 'disabled' : ''} title="${esc(it.game)}">${it.icon} ${esc(it.name)} <small>${left}/${it.limit}</small></button>`;
      }).join('') + `<button class="vil-it rm${removing ? ' on' : ''}" id="vil-rm">🧹 Put away</button>`;
      pal.querySelectorAll('[data-it]').forEach(b => b.onclick = () => { removing = false; sel = sel === b.dataset.it ? null : b.dataset.it; const it = item(b.dataset.it); if (sel) say(`${it.icon} <b>${esc(it.name)}</b>: tap a glowing square. ${esc(it.wrong)}`); render(); });
      document.getElementById('vil-rm').onclick = () => { sel = null; removing = !removing; say(removing ? 'Tap something you placed to put it away (it comes back to your list).' : ''); render(); };
      tree(v);
    }

    // the tech tree: 4 era columns, 5 rows (Land 0–2, Make 3–4), arrows from the boxes each one needs
    function tree(v) {
      const box = document.getElementById('vil-tree'), G0 = 5, CW = 23.75, RH = 20, HW = 9.6, HH = 7.4;
      const cx = n => G0 + n.pos[0] * CW + CW / 2, cy = n => n.pos[1] * RH + RH / 2 + 4;
      const ends = (m, n) => m.pos[0] === n.pos[0] ? [cx(m), cy(m) + Math.sign(cy(n) - cy(m)) * HH, cx(n), cy(n) - Math.sign(cy(n) - cy(m)) * HH] : [cx(m) + HW, cy(m), cx(n) - HW, cy(n)];
      const ready = n => epDone(n.ep) && n.needs.every(id => techDone(v, id));
      const arrows = d.tech.flatMap(n => n.needs.map(id => { const m = d.tech.find(o => o.id === id); const [a, b, e, f] = ends(m, n); return `<line x1="${a}" y1="${b}" x2="${e}" y2="${f}" class="${techDone(v, id) ? 'done' : ''}" marker-end="url(#vil-ar)"/>`; })).join('');
      box.innerHTML = `<svg viewBox="0 0 100 108" preserveAspectRatio="none"><defs><marker id="vil-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#c9b48a"/></marker></defs>${arrows}</svg>` +
        d.eras.map((e, i) => `<div class="vil-era" style="left:${G0 + i * CW}%;width:${CW}%">${esc(e)}</div>`).join('') +
        `<div class="vil-lane land" style="top:${(4 + 2) * 100 / 108}%;height:${3 * RH * 100 / 108 - 2}%">🌾 LAND</div><div class="vil-lane make" style="top:${(3 * RH + 4 + 2) * 100 / 108}%;height:${2 * RH * 100 / 108 - 2}%">🔨 MAKE</div>` +
        d.tech.map(n => {
          const done = techDone(v, n.id), st = done ? 'done' : ready(n) ? 'ready' : 'locked';
          return `<button class="vil-node ${st}" data-t="${n.id}" style="left:${cx(n)}%;top:${cy(n) * 100 / 108}%"><span class="ic">${n.icon}</span><span class="nm">${esc(n.name)}</span><small>${done ? '✓ Researched' : st === 'ready' ? 'Ready to research' : '🔒 Episode ' + n.ep}</small></button>`;
        }).join('');
      box.querySelectorAll('[data-t]').forEach(b => b.onclick = () => card(b.dataset.t));
    }

    // one box: what it is, what it needs, and its question
    function card(id) {
      const v = V(), n = d.tech.find(t => t.id === id), m = document.getElementById('vil-modal');
      const needs = n.needs.map(x => d.tech.find(t => t.id === x));
      const okEp = epDone(n.ep), okNeeds = needs.every(t => techDone(v, t.id)), okCost = Object.keys(n.cost).every(k => have(v, k) >= n.cost[k]);
      const done = techDone(v, n.id);
      m.hidden = false;
      m.innerHTML = `<div class="vil-card"><button class="vil-x" aria-label="Close">✕</button>
        <div class="vil-ch"><span class="big">${n.icon}</span><div><div class="vil-era2">${esc(d.eras[n.era - 1])} · ${n.branch === 'land' ? '🌾 Land' : '🔨 Make'}</div><h3>${esc(n.name)}</h3></div></div>
        <p class="vil-fact">${esc(n.fact)}</p><p class="vil-eff">➜ ${esc(n.effect)}</p>
        <p class="vil-game"><b>In your village:</b> ${esc(n.game)} <i>${esc(n.wrong)}</i></p>
        ${done ? `<p class="vil-done">✓ Researched${placed(v, n.id) < n.limit ? ' · choose it under <b>Place</b> to put it on the map' : ''}</p>` : `
        <ul class="vil-needs">
          <li class="${okEp ? 'ok' : 'bad'}">${okEp ? '✓' : '✗'} Finish episode ${esc(n.ep)} · ${esc(epName(n.ep))} ${okEp ? '' : `<button class="vil-play" data-ep="${esc(n.ep)}">▶ Play it</button>`}</li>
          ${needs.map(t => `<li class="${techDone(v, t.id) ? 'ok' : 'bad'}">${techDone(v, t.id) ? '✓' : '✗'} Research ${t.icon} ${esc(t.name)} first</li>`).join('')}
          <li class="${okCost ? 'ok' : 'bad'}">${okCost ? '✓' : '✗'} Cost: ${costHTML(v, n.cost)}</li>
        </ul>
        ${okEp && okNeeds && okCost ? `<div id="vil-q"></div>` : `<p class="vil-small">${!okCost && okEp && okNeeds ? 'Harvest your fields and collect from your buildings to gather more. Coins come from episodes.' : ''}</p>`}`}
      </div>`;
      m.querySelector('.vil-x').onclick = close; m.onclick = e => { if (e.target === m) close(); };
      m.querySelectorAll('[data-ep]').forEach(b => b.onclick = () => WW.goEp(b.dataset.ep));
      const qb = m.querySelector('#vil-q'); if (qb) ask(n, qb);
    }
    function ask(n, qb) {
      const order = n.ask.choices.map((_, i) => i).sort(() => Math.random() - 0.5), tried = new Set();
      const draw = (msg, right) => {
        qb.innerHTML = `<h4>🦉 Research question</h4><p class="vil-q">${esc(n.ask.q)}</p><div class="vil-ch4">${order.map(i => `<button data-i="${i}" ${tried.has(i) || right ? 'disabled' : ''} class="${tried.has(i) ? 'wrong' : right && n.ask.choices[i].ok ? 'right' : ''}">${esc(n.ask.choices[i].t)}</button>`).join('')}</div>${msg ? `<p class="vil-why ${right ? 'ok' : 'bad'}">${esc(msg)}</p>` : ''}`;
        qb.querySelectorAll('[data-i]').forEach(b => b.onclick = () => {
          const ch = n.ask.choices[+b.dataset.i];
          if (!ch.ok) { tried.add(+b.dataset.i); WW.sfx && WW.sfx('bad'); return draw(ch.why + ' Try again.'); }
          const v = V(); pay(v, n.cost); v.tech.push(n.id); WW.store();
          if (WW.music && WW.save.music) WW.music.play('research', 'village' + Math.min(4, eraOf(v)));
          draw(ch.why, true);
          qb.insertAdjacentHTML('beforeend', `<button class="hw-go" id="vil-place">${n.icon} Place ${esc(n.name)} now</button>`);
          qb.querySelector('#vil-place').onclick = () => { close(); sel = n.id; say(`${n.icon} <b>${esc(n.name)}</b>: tap a glowing square. ${esc(n.wrong)}`); render(); document.querySelector('.vil-board').scrollIntoView({ behavior: 'smooth', block: 'center' }); };
          render();
        });
      };
      draw('');
    }
    function close() { document.getElementById('vil-modal').hidden = true; }

    // the map, drawn every frame
    function frame(t) {
      if (!document.getElementById('vil-cv')) return;
      const v = V();
      if (HD) { c.setTransform(Q * TS / 16, 0, 0, Q * TS / 16, 0, 0); WW.hd.drawTiles(c, 0, 0, EMAP, t, W, H); }
      c.setTransform(Q, 0, 0, Q, 0, 0);
      c.drawImage(ground, 0, 0, W * TS, H * TS);
      if (!HD) water(c, t);
      const it = sel && item(sel);
      if (it) for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) if (!v.plots[x + ',' + y] && fits(it, x, y)) { c.fillStyle = `rgba(255,240,140,${0.22 + Math.sin(t / 300) * 0.1})`; c.fillRect(x * TS + 2, y * TS + 2, TS - 4, TS - 4); c.strokeStyle = '#fff2a0'; c.lineWidth = 2; c.strokeRect(x * TS + 2, y * TS + 2, TS - 4, TS - 4); }
      // back to front, so lower squares draw over upper ones
      Object.keys(v.plots).map(k => [k, k.split(',').map(Number)]).sort((a, b) => a[1][1] - b[1][1]).forEach(([k, [x, y]]) => {
        const p = v.plots[k], i = item(p.id); if (!i) return;
        const s = state(p), X = x * TS, Y = y * TS;
        if (i.kind === 'crop') drawCrop(c, i, X, Y, s.grow, t); else drawBuilding(c, i, X, Y, t);
        if (s.ready) badge(c, X, Y, RES[Object.keys(i.give)[0]][0], i.kind === 'crop' ? 1 : s.ready, t);
      });
      if (hover) { c.strokeStyle = removing ? '#ff6b5e' : 'rgba(255,255,255,.8)'; c.lineWidth = 2; c.strokeRect(hover[0] * TS + 1, hover[1] * TS + 1, TS - 2, TS - 2); }
      raf = requestAnimationFrame(frame);
    }
    cancelAnimationFrame(raf); raf = requestAnimationFrame(frame);
    setInterval(() => { if (document.getElementById('vil-res')) render(); }, 5000); // counts stay fresh
    render();
    const gifts = fresh.length ? `🎁 ${fresh.length === 1 ? 'Episode ' + fresh[0] + ' left' : fresh.length + ' finished episodes left'} a gift: +${d.gift.food * fresh.length} 🌾 +${d.gift.goods * fresh.length} 🧱. ` : ''; fresh = [];
    say(gifts + (v.tech.length ? 'Tap a ripe field or a building with a bubble to collect. Open a box in the tech tree to research.' :
      'Welcome home! Tap your ripe grain fields and the workshop to collect. Then open a box in the tech tree below. Finished episodes leave gifts here.'));
  };
  WW.village.V = V; // for tests
})();
