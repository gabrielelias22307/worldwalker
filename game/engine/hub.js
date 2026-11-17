/* WORLDWALKER engine · the world map page inside a one-file game (HistoryWalker, MODE 'one').
   A painted map of the world (drawn in code from rough coastlines), a glowing stop for every episode at its real
   place, the hero's card and Passport Code, and the episodes unit by unit. A stop or a row opens that episode in the
   same file (#ep=1.2). Only WW.hub() draws it; the episode pages never call it. */
(function () {
  const esc = s => String(s).replace(/[&<>"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));
  const L = t => WW.L(t);
  // rough coastlines (longitude, latitude): enough for a friendly painted map, not for navigation
  const LAND = [
    [[-168, 66], [-162, 70], [-140, 70], [-120, 72], [-95, 72], [-80, 73], [-62, 66], [-56, 52], [-66, 45], [-70, 42], [-76, 35], [-81, 31], [-80, 25], [-82, 28], [-84, 30], [-90, 29], [-97, 26], [-97, 22], [-95, 18], [-90, 21], [-87, 21], [-88, 16], [-83, 10], [-79, 9], [-80, 8], [-85, 11], [-92, 15], [-105, 20], [-110, 24], [-112, 30], [-117, 32], [-120, 35], [-124, 40], [-124, 48], [-130, 55], [-140, 60], [-150, 60], [-160, 58], [-165, 62]],
    [[-50, 60], [-42, 60], [-20, 70], [-20, 80], [-60, 82], [-70, 78], [-55, 70]],
    [[-79, 9], [-75, 11], [-62, 11], [-52, 5], [-50, 0], [-35, -5], [-39, -15], [-48, -25], [-58, -35], [-65, -42], [-68, -52], [-74, -52], [-73, -40], [-71, -30], [-70, -18], [-76, -14], [-81, -5], [-80, 0]],
    [[-10, 36], [-9, 43], [-2, 44], [-5, 48], [2, 51], [8, 54], [10, 58], [5, 62], [15, 69], [28, 71], [40, 67], [60, 69], [70, 73], [90, 76], [110, 77], [130, 72], [150, 71], [170, 70], [180, 66], [175, 62], [160, 60], [155, 51], [143, 47], [140, 43], [135, 35], [128, 35], [127, 38], [125, 40], [121, 39], [122, 30], [120, 24], [110, 20], [108, 16], [109, 12], [104, 9], [103, 1], [100, 6], [98, 10], [95, 16], [91, 22], [86, 20], [80, 15], [77, 8], [73, 17], [68, 23], [60, 25], [56, 27], [52, 28], [48, 30], [50, 26], [55, 25], [57, 22], [52, 16], [44, 12], [43, 16], [39, 22], [35, 28], [33, 31], [35, 36], [30, 36], [27, 37], [26, 40], [23, 38], [22, 37], [20, 40], [19, 42], [15, 45], [12, 44], [18, 40], [16, 38], [12, 38], [10, 44], [6, 43], [3, 43], [0, 39], [-2, 37], [-6, 36]],
    [[-6, 36], [10, 37], [11, 33], [20, 31], [30, 31], [32, 30], [33, 27], [36, 22], [38, 18], [43, 12], [51, 11], [48, 5], [40, -3], [40, -10], [35, -24], [32, -29], [27, -34], [20, -35], [18, -30], [12, -17], [13, -6], [9, -1], [9, 4], [4, 6], [-8, 4], [-15, 10], [-17, 15], [-16, 22], [-13, 28], [-10, 30]],
    [[44, -25], [47, -25], [50, -15], [49, -12], [44, -17]],
    [[-5, 50], [1, 51], [2, 53], [-1, 57], [-4, 59], [-6, 57], [-5, 54]],
    [[130, 31], [132, 34], [135, 34], [140, 36], [142, 40], [141, 43], [145, 44], [141, 45], [139, 40], [136, 37], [131, 35]],
    [[95, 5], [98, 4], [106, -6], [103, -5]], [[109, 1], [117, 7], [119, 1], [116, -4], [110, -3]], [[105, -6], [114, -7], [114, -8], [106, -7]],
    [[114, -22], [122, -18], [130, -12], [137, -12], [142, -11], [146, -19], [153, -26], [150, -37], [141, -38], [135, -35], [129, -32], [115, -34]],
    [[80, 6], [82, 7], [81, 9], [80, 9]], [[120, 18], [122, 18], [126, 7], [124, 7]]
  ];
  const LAKES = [[[47, 45], [51, 47], [54, 42], [54, 37], [50, 37], [49, 40]], [[28, 41], [28, 45], [33, 46], [38, 47], [41, 42], [36, 41]]];
  const VIEW = { w: -125, e: 160, n: 66, s: -42 }, PW = 570, PH = 230; // the picture is drawn small, then shown 2x, pixel-sharp
  const px = lon => (lon - VIEW.w) / (VIEW.e - VIEW.w) * PW, py = lat => (VIEW.n - lat) / (VIEW.n - VIEW.s) * PH;
  const UNITC = ['', '#e8b04a', '#4ab0c8', '#d8604a', '#8a6ad8'];

  function paint(cv) {
    const c = cv.getContext('2d'); cv.width = PW; cv.height = PH;
    // the land as a mask
    const m = document.createElement('canvas'); m.width = PW; m.height = PH; const mc = m.getContext('2d');
    const poly = (ctx, p) => { ctx.beginPath(); p.forEach(([lo, la], i) => (i ? ctx.lineTo(px(lo), py(la)) : ctx.moveTo(px(lo), py(la)))); ctx.closePath(); ctx.fill(); };
    mc.fillStyle = '#fff'; LAND.forEach(p => poly(mc, p)); mc.globalCompositeOperation = 'destination-out'; LAKES.forEach(p => poly(mc, p));
    const md = mc.getImageData(0, 0, PW, PH).data, land = (x, y) => x >= 0 && y >= 0 && x < PW && y < PH && md[(y * PW + x) * 4 + 3] > 128;
    const img = c.createImageData(PW, PH), d = img.data, h = WW.hash;
    for (let y = 0; y < PH; y++) for (let x = 0; x < PW; x++) {
      const i = (y * PW + x) * 4, lat = VIEW.n - y / PH * (VIEW.n - VIEW.s), lon = VIEW.w + x / PW * (VIEW.e - VIEW.w);
      let r, g, b, k = (h(x >> 2, y >> 2, 3) - 0.5) * 18 + (h(x, y, 5) - 0.5) * 8;
      if (land(x, y)) {
        // deserts in the dry belts (with ragged edges), green elsewhere, white near the poles, hills shaded
        const n = (WW.hash(x >> 3, y >> 3, 11) + WW.hash(x >> 4, y >> 4, 12)) / 2;
        const dryK = Math.max(0, 1 - Math.abs(lat - 23) / 11) * (lon > -18 && lon < 72 ? 1 : 0) + Math.max(0, 1 - Math.abs(lat - 43) / 7) * (lon > 50 && lon < 112 ? 1 : 0) + Math.max(0, 1 - Math.abs(lat + 26) / 8) * (lon > 118 && lon < 146 ? 1 : 0) + Math.max(0, 1 - Math.abs(lat - 32) / 6) * (lon > -118 && lon < -102 ? 1 : 0);
        const dry = dryK + (n - 0.5) * 0.7 > 0.5, cold = lat + (n - 0.5) * 6 > 60;
        if (cold) [r, g, b] = [222, 230, 228]; else if (dry) [r, g, b] = [210, 182, 124]; else [r, g, b] = lat > 45 ? [112, 146, 92] : lat < 12 && lat > -12 ? [78, 140, 72] : [104, 152, 86];
        const hill = WW.hash(x >> 1, y >> 1, 21) > 0.97 && !cold; if (hill) { r *= 0.8; g *= 0.8; b *= 0.8; }
        const coast = !land(x + 1, y) || !land(x - 1, y) || !land(x, y + 1) || !land(x, y - 1);
        if (coast) { r *= 0.72; g *= 0.72; b *= 0.72; }
      } else {
        let near = 0; for (let dy = -2; dy <= 2 && !near; dy++) for (let dx = -2; dx <= 2; dx++) if (land(x + dx, y + dy)) { near = 1; break; }
        [r, g, b] = near ? [78, 142, 182] : [52, 108, 160];
        if (!near && (x + y * 3) % 23 === 0 && h(x, y, 9) > 0.6) [r, g, b] = [96, 156, 196]; // little waves
      }
      d[i] = Math.max(0, Math.min(255, r + k)); d[i + 1] = Math.max(0, Math.min(255, g + k)); d[i + 2] = Math.max(0, Math.min(255, b + k)); d[i + 3] = 255;
    }
    c.putImageData(img, 0, 0);
    // a faint grid of latitude and longitude, like an old chart
    c.fillStyle = 'rgba(255,250,230,.12)';
    for (let lo = -120; lo <= 160; lo += 20) c.fillRect(Math.round(px(lo)), 0, 1, PH);
    for (let la = -40; la <= 60; la += 20) c.fillRect(0, Math.round(py(la)), PW, 1);
  }

  WW.hub = () => {
    const cat = window.WW_CATALOG || [], s = WW.save || { episodes: {} };
    document.title = (WW.COURSE && WW.COURSE.name) || WW.TITLE;
    const root = document.getElementById('ww'); root.className = 'hw-hub';
    const done = cat.filter(e => s.episodes[e.id] && s.episodes[e.id].done).length;
    const next = cat.find(e => !(s.episodes[e.id] && s.episodes[e.id].done)) || cat[0];
    root.innerHTML = `<div class="hw-wrap">
      <header class="hw-top"><div><div class="hw-logo">${esc(WW.TITLE)}</div><div class="hw-sub">${esc(WW.SUB)}</div></div>
        <div class="hw-me">${s.name ? `<b>${esc(s.name)}</b> · ${done} / ${cat.length} pages${done ? `<div class="hw-code">${esc(WW.passportCode())}</div>` : ''}` : 'Pick a stop on the map to begin.'}</div></header>
      <div class="hw-mapbox"><canvas id="hw-map"></canvas><div id="hw-pins"></div><div id="hw-tip" hidden></div></div>
      ${next ? `<div class="hw-next"><button class="hw-go" data-ep="${esc(next.id)}">▶ ${done ? 'Continue' : 'Start'} · ${esc(next.id)} ${esc(L(next.title))}</button></div>` : ''}
      <div class="hw-units">${WW.REALMS.slice(1).map((r, ui) => `<section class="hw-unit" style="--uc:${UNITC[ui + 1]}"><h2>${esc(L(r))}</h2>${cat.filter(e => e.realm === ui + 1).map(e => {
        const st = s.episodes[e.id] || {};
        return `<button class="hw-ep${st.done ? ' done' : ''}" data-ep="${esc(e.id)}"><span class="id">${esc(e.id)}</span><span class="t">${esc(L(e.title))}<small>${esc(L(e.place))}</small></span><span class="st">${st.done ? '★'.repeat(st.stars || 1) : ''}</span></button>`;
      }).join('')}</section>`).join('')}</div>${WW.COURSE && WW.COURSE.credit ? `<p class="hw-credit">${esc(WW.COURSE.credit)}</p>` : ''}</div>`;
    const cv = document.getElementById('hw-map'); paint(cv);
    const pins = document.getElementById('hw-pins'), tip = document.getElementById('hw-tip');
    const placed = []; // two stops in the same city: nudge the later one aside so both can be clicked
    cat.forEach(e => {
      if (!e.at) return;
      let X = px(e.at[0]) / PW * 100, Y = py(e.at[1]) / PH * 100;
      for (let k = 0; k < 6 && placed.some(([a, b]) => Math.abs(a - X) < 2.6 && Math.abs(b - Y) < 4); k++) { X += 2.4; Y += k % 2 ? -3 : 3; }
      placed.push([X, Y]);
      const b = document.createElement('button'), st = s.episodes[e.id] || {};
      b.className = 'hw-pin' + (st.done ? ' done' : '') + (next && next.id === e.id ? ' next' : ''); b.dataset.ep = e.id;
      b.style.left = X + '%'; b.style.top = Y + '%'; b.style.setProperty('--uc', UNITC[e.realm]);
      b.textContent = e.id; b.setAttribute('aria-label', e.id + ' ' + L(e.title) + ', ' + L(e.place));
      b.onmouseenter = b.onfocus = () => { tip.hidden = false; tip.innerHTML = `<b>${esc(e.id)} · ${esc(L(e.title))}</b><br>${esc(L(e.place))}`; tip.style.left = b.style.left; tip.style.top = b.style.top; };
      b.onmouseleave = b.onblur = () => (tip.hidden = true);
      pins.appendChild(b);
    });
    root.querySelectorAll('[data-ep]').forEach(b => (b.onclick = () => WW.goEp(b.dataset.ep)));
  };
})();
