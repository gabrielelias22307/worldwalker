/* WORLDWALKER engine · the base camp (FUN-PASS section 4): a home that grows
   Restored atlas pages hang on the wall, stamps decorate the frames, earned tools sit on a rack, each finished realm leaves
   a souvenir on the shelf, and the student places decorations they buy with wood, fiber and coins (or find on the maps).
   Open it from the Passport (in a game) or the world map. It needs only art.js and save.js, so the world map page can use it.
   Saved as save.camp = { owned: [ids], slots: [id or null ×6] } (and in the class Sheet). Nothing bought is ever lost:
   you can move or take down a decoration at any time and it stays yours. */
(function () {
  const L = t => WW.L(t), T = k => WW.T(k), esc = s => WW.esc ? WW.esc(s) : String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const C = WW.camp = {};
  // what you can put in your camp: cost in wood, fiber and coins (find: only from a secret on a map)
  C.DECOR = [
    { id: 'rug', icon: '🟥', cost: { fiber: 4 }, name: { en: 'Woven rug', es: 'Alfombra tejida', fa: 'قالین بافته' } },
    { id: 'plant', icon: '🪴', cost: { fiber: 2, coins: 5 }, name: { en: 'Potted plant', es: 'Planta en maceta', fa: 'گلدان' } },
    { id: 'lantern', icon: '🏮', cost: { wood: 2, coins: 5 }, name: { en: 'Lantern', es: 'Farol', fa: 'فانوس' } },
    { id: 'stool', icon: '🪑', cost: { wood: 3 }, name: { en: 'Stool', es: 'Banquito', fa: 'چوکی' } },
    { id: 'books', icon: '📚', cost: { wood: 4, coins: 10 }, name: { en: 'Book shelf', es: 'Estante de libros', fa: 'الماری کتاب' } },
    { id: 'globe', icon: '🌍', cost: { coins: 25 }, name: { en: 'Globe', es: 'Globo terráqueo', fa: 'کرهٔ زمین' } },
    { id: 'telescope', icon: '🔭', cost: { wood: 2, coins: 15 }, name: { en: 'Telescope', es: 'Telescopio', fa: 'دوربین نجومی' } },
    { id: 'kite', icon: '🪁', cost: { fiber: 3, wood: 1 }, name: { en: 'Kite', es: 'Cometa', fa: 'گدی‌پران' } },
    // found on the maps (the "finds" in the episodes give these)
    { id: 'shell', icon: '🐚', find: true, name: { en: 'Sea shell', es: 'Concha de mar', fa: 'صدف دریایی' } },
    { id: 'gem', icon: '💎', find: true, name: { en: 'Shiny stone', es: 'Piedra brillante', fa: 'سنگ درخشان' } },
    { id: 'fossil', icon: '🦴', find: true, name: { en: 'Old fossil', es: 'Fósil antiguo', fa: 'فسیل کهنه' } },
    { id: 'vase', icon: '🏺', find: true, name: { en: 'Clay pot', es: 'Vasija de barro', fa: 'کوزهٔ گلی' } },
    { id: 'drum', icon: '🥁', find: true, name: { en: 'Drum', es: 'Tambor', fa: 'دهل' } },
    { id: 'flower', icon: '🌺', find: true, name: { en: 'Pressed flower', es: 'Flor seca', fa: 'گل خشک' } },
    { id: 'coinold', icon: '🪙', find: true, name: { en: 'Old coin', es: 'Moneda antigua', fa: 'سکهٔ کهنه' } },
    { id: 'feather', icon: '🪶', find: true, name: { en: 'Feather', es: 'Pluma', fa: 'پر' } }
  ];
  // one souvenir for each finished realm
  C.SOUVENIR = ['🗺️', '🌽', '🪆', '🦓', '🏺', '🪷', '🏮', '🐚'];
  const SLOTS = 6;

  const camp = () => { const s = WW.save; s.camp = s.camp || { owned: [], slots: Array(SLOTS).fill(null) }; while (s.camp.slots.length < SLOTS) s.camp.slots.push(null); return s.camp; };
  C.give = (id) => { const c = camp(); if (!c.owned.includes(id)) { c.owned.push(id); WW.store(); return true; } return false; };
  const have = item => { const b = (WW.save.bag || {})[item]; return b ? (b.got || 0) - (b.used || 0) : 0; };
  const canPay = cost => Object.entries(cost || {}).every(([k, n]) => (k === 'coins' ? (WW.save.coins || 0) : have(k)) >= n);
  function pay(cost) {
    Object.entries(cost || {}).forEach(([k, n]) => {
      if (k === 'coins') { WW.spend(n); return; }
      const s = WW.save; s.bag = s.bag || {}; const b = (s.bag[k] = s.bag[k] || { got: 0, used: 0 }); b.used += n;
    });
    WW.store(); WW.sheetSync && WW.sheetSync();
  }
  const costText = cost => Object.entries(cost || {}).map(([k, n]) => `${n} ${k === 'coins' ? '●' : T('item_' + k)}`).join(' + ');
  const realmDone = r => WW.EPISODES.filter(e => e.realm === r).every(e => WW.save.episodes[e.id] && WW.save.episodes[e.id].done);

  /* the camp picture: a cabin wall with 24 page frames, a tool rack, a souvenir shelf and the decorations on the floor */
  function scene(cv) {
    const c = cv.getContext('2d'), W = cv.width, H = cv.height, R = (x, y, w, h, col) => { c.fillStyle = col; c.fillRect(x, y, w, h); };
    c.imageSmoothingEnabled = false;
    R(0, 0, W, H, '#6d4c2f');                                    // log wall
    for (let y = 0; y < 112; y += 8) { R(0, y, W, 1, '#5b3a1e'); R(0, y + 4, W, 1, '#7d5a38'); }
    R(0, 112, W, H - 112, '#a0703f'); for (let x = 0; x < W; x += 20) R(x, 112, 1, H - 112, '#8b5a2b'); // floor boards
    R(0, 110, W, 3, '#3f2a17');
    // 24 atlas page frames: 8 realms × 3 episodes
    WW.EPISODES.forEach((e, i) => {
      const col = Math.floor(i / 3), row = i % 3, x = 6 + col * 26, y = 6 + row * 26, d = WW.save.episodes[e.id];
      R(x, y, 22, 22, '#2b1d10'); R(x + 1, y + 1, 20, 20, d && d.done ? '#f3e3b5' : '#4a3520');
      if (d && d.done) {
        WW.sprite(c, 'page', x + 3, y + 3, { scale: 1 });
        for (let s = 0; s < (d.stars || 1); s++) R(x + 3 + s * 6, y + 18, 4, 2, '#f2c14e'); // stamps: one gold mark per star
      } else { c.fillStyle = 'rgba(255,255,255,.25)'; c.font = '9px sans-serif'; c.textAlign = 'center'; c.fillText(e.id, x + 11, y + 14); }
    });
    // tool rack
    R(218, 6, 96, 4, '#3f2a17');
    c.font = '13px sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle';
    WW.TOOLS.forEach((t, i) => {
      const x = 224 + (i % 4) * 23, y = 20 + Math.floor(i / 4) * 22;
      R(x - 1, y - 11, 2, 4, '#3f2a17');
      if (WW.hasTool(t.id)) { c.fillStyle = '#000'; c.fillText(t.icon, x, y); } else { c.fillStyle = 'rgba(0,0,0,.25)'; c.beginPath(); c.arc(x, y, 6, 0, 7); c.fill(); }
    });
    // souvenir shelf
    R(218, 78, 96, 4, '#3f2a17'); R(222, 82, 3, 6, '#3f2a17'); R(307, 82, 3, 6, '#3f2a17');
    c.fillStyle = '#000'; c.font = '13px sans-serif';
    C.SOUVENIR.forEach((s, i) => { if (realmDone(i + 1)) c.fillText(s, 226 + i * 11.5, 70); });
    // decorations on the floor
    const cp = camp();
    cp.slots.forEach((id, i) => {
      const d = C.DECOR.find(o => o.id === id), x = 30 + i * 50, y = 140;
      c.fillStyle = 'rgba(0,0,0,.18)'; c.beginPath(); c.ellipse(x, y + 12, 14, 4, 0, 0, 7); c.fill();
      if (d) { c.fillStyle = '#000'; c.font = '26px sans-serif'; c.fillText(d.icon, x, y); }
      else { c.strokeStyle = 'rgba(255,255,255,.35)'; c.setLineDash([3, 3]); c.strokeRect(x - 12, y - 12, 24, 24); c.setLineDash([]); }
    });
    // the hero stands in the middle
    if (WW.heroPal) WW.sprite(c, 'hero', 150, 124, { pal: WW.heroPal(), scale: 2 });
  }

  /* render the camp into a box; onChange() is called after anything changes (the HUD shows new coins) */
  C.render = (box, onChange) => {
    let pickSlot = null, msg = '';
    const draw = () => {
      const cp = camp();
      box.innerHTML = `<h3>🏕️ ${esc(T('campTitle'))}</h3><p class="small">${esc(T('campHow'))}</p>`;
      const cv = document.createElement('canvas'); cv.width = 320; cv.height = 176; cv.className = 'campcv';
      box.appendChild(cv); scene(cv);
      box.insertAdjacentHTML('beforeend', `<p class="small">📄 ${WW.doneCount()} / 24 · ${esc(T('campBag'))}: <b>${have('wood')}</b> ${esc(T('item_wood'))} · <b>${have('fiber')}</b> ${esc(T('item_fiber'))} · <b>${WW.save.coins || 0}</b> ●</p>`);
      // the six spots on the floor
      const slots = document.createElement('div'); slots.className = 'campslots';
      cp.slots.forEach((id, i) => {
        const d = C.DECOR.find(o => o.id === id), b = document.createElement('button');
        b.className = 'campslot' + (pickSlot === i ? ' on' : ''); b.innerHTML = d ? `${d.icon}<small>${esc(L(d.name))}</small>` : `＋<small>${esc(T('campEmpty'))}</small>`;
        b.onclick = () => { pickSlot = pickSlot === i ? null : i; draw(); };
        slots.appendChild(b);
      });
      box.appendChild(slots);
      if (pickSlot != null) { // choose what goes on this spot
        const mine = cp.owned.map(id => C.DECOR.find(o => o.id === id)).filter(Boolean);
        const row = document.createElement('div'); row.className = 'campown';
        row.innerHTML = `<p class="small"><b>${esc(T('campPut'))}</b></p>`;
        if (!mine.length) row.insertAdjacentHTML('beforeend', `<p class="small">${esc(T('campNone'))}</p>`);
        mine.forEach(d => { const b = document.createElement('button'); b.className = 'campitem'; b.innerHTML = `${d.icon} ${esc(L(d.name))}`; b.onclick = () => { const k = cp.slots.indexOf(d.id); if (k >= 0) cp.slots[k] = null; cp.slots[pickSlot] = d.id; pickSlot = null; WW.store(); WW.sheetSync && WW.sheetSync(); draw(); }; row.appendChild(b); });
        if (cp.slots[pickSlot]) { const b = document.createElement('button'); b.className = 'campitem ghost'; b.textContent = '✕ ' + T('campTakeDown'); b.onclick = () => { cp.slots[pickSlot] = null; pickSlot = null; WW.store(); draw(); }; row.appendChild(b); }
        box.appendChild(row);
      }
      // the shop
      const shop = document.createElement('div'); shop.className = 'campshop';
      shop.innerHTML = `<p class="small"><b>${esc(T('campShop'))}</b></p>`;
      C.DECOR.forEach(d => {
        const owned = cp.owned.includes(d.id), b = document.createElement('button');
        b.className = 'campitem' + (owned ? ' owned' : ''); b.dataset.id = d.id;
        b.innerHTML = `${d.icon} ${esc(L(d.name))} <small>${owned ? '✓ ' + esc(T('campOwned')) : d.find ? esc(T('campFind')) : esc(costText(d.cost))}</small>`;
        b.disabled = owned || d.find;
        b.onclick = () => {
          if (!canPay(d.cost)) { msg = T('campCant').replace('{c}', costText(d.cost)); return draw(); }
          pay(d.cost); C.give(d.id); msg = '✓ ' + L(d.name);
          const k = cp.slots.indexOf(null); if (k >= 0) cp.slots[k] = d.id; // put it up right away if there is room
          WW.store(); WW.sfx && WW.sfx('coin'); onChange && onChange(); draw();
        };
        shop.appendChild(b);
      });
      box.appendChild(shop);
      if (msg) box.insertAdjacentHTML('beforeend', `<p class="small campmsg">${esc(msg)}</p>`);
    };
    draw();
  };
})();
