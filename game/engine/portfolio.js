/* WORLDWALKER engine · Bradlee Portfolio (Coinwalker; content in econ/portfolio.js = WW_PORTFOLIO)
   A one-page game in its own file (tools/build-portfolio.js): a made-up Bradlee Shopping Center with 8 storefronts,
   each a place to put money. Every finished Coinwalker episode is one year and a $100 paycheck: on opening, the years
   since the last visit play out one by one, each with a piece of Bradlee News, and every storefront's money changes the
   way that kind of money does. Storefronts grow with the money in them. The finished episodes come from the episodes'
   own save (same browser) or a Passport Code; the portfolio keeps its own save, so an episode open in another tab can
   never overwrite it. */
(function () {
  const P = () => window.WW_PORTFOLIO;
  const L = t => WW.L(t), esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));
  const S = k => L(P().S[k]);
  const KEY = ((window.WW_COURSE && window.WW_COURSE.saveKey) || 'worldwalker.save.v1').replace('.save.', '.portfolio.');
  const money = v => '$' + Math.round(v).toLocaleString('en-US');
  const N = () => P().years.length;
  const kinds = () => P().kinds;
  const epDone = id => !!(WW.save.episodes[id] && WW.save.episodes[id].done);
  const isOpen = k => !k.opens || epDone(k.opens);
  const doneYears = () => Math.min(N(), WW.EPISODES.filter(e => epDone(e.id)).length);

  /* ---------------- the save (its own key) ---------------- */
  const blank = () => ({ v: 1, year: 0, bal: {}, hist: [] });
  let st = (() => { try { const s = JSON.parse(localStorage.getItem(KEY) || 'null'); return s && s.v === 1 ? Object.assign(blank(), s) : blank(); } catch (e) { return blank(); } })();
  const keep = () => { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) { } };
  const bal = id => st.bal[id] || 0;
  const worth = (b = st.bal) => kinds().reduce((a, k) => a + (b[k.id] || 0), 0);

  /* ---------------- one year at Bradlee ---------------- */
  // money already in the storefronts changes with the year's news; then the year's paycheck arrives
  function year(b, y) {
    const p = P(), news = p.years[y - 1], out = { y, news, before: Object.assign({}, b), insured: false };
    const ins = kinds().find(k => k.insurance);
    if (ins && (b[ins.id] || 0) >= p.premium) { b[ins.id] -= p.premium; out.insured = true; }
    kinds().forEach(k => {
      if (!b[k.id]) return;
      let r = k.rates[news] || 0;
      if (news === 'storm' && k.storm && out.insured) r = -p.deductible;
      b[k.id] = Math.max(0, b[k.id] * (1 + r));
    });
    b.piggy = (b.piggy || 0) + p.pay;
    out.after = Object.assign({}, b);
    return out;
  }
  // what if every paycheck had gone to one place from year 1 (for the last card)
  function whatIf(id, upTo) { const b = {}; for (let y = 1; y <= upTo; y++) { year(b, y); if (id !== 'piggy') { b[id] = (b[id] || 0) + b.piggy; b.piggy = 0; } } return worth(b); }

  /* ---------------- moving money ---------------- */
  function move(k, amount) { // + puts money from the piggy bank into k, - takes it back out
    if (k.id === 'piggy') return;
    if (amount > 0) { const a = Math.min(amount, bal('piggy')); if (a <= 0) return; st.bal.piggy -= a; st.bal[k.id] = bal(k.id) + a + (k.matched ? a * P().match : 0); if (k.matched) flash(S('matchAdd').replace('{m}', Math.round(a * P().match))); }
    else { if (k.locked && st.year < N()) return; const a = Math.min(-amount, bal(k.id)); if (a <= 0) return; st.bal[k.id] -= a; st.bal.piggy = bal('piggy') + a; }
    WW.sfx && WW.sfx('coin'); keep(); render();
  }

  /* ---------------- the picture: the shopping center ---------------- */
  const CW = 960, CH = 360, BAY = 104, X0 = 64, TOP = 118, FRONT = 110;
  const COL = { piggy: '#e889a8', savings: '#3a7fc8', bonds: '#7a6a4a', shop: '#d9822b', center: '#2aa198', crypto: '#8a5ad8', insurance: '#4aa0d8', vault: '#e8a83a' };
  function tier(v) { return v <= 0 ? 0 : v < 100 ? 1 : v < 300 ? 2 : v < 800 ? 3 : 4; }
  function draw(c, t) {
    const last = st.hist.length ? P().years[st.hist[st.hist.length - 1].y - 1] : 'normal';
    // sky
    let g = c.createLinearGradient(0, 0, 0, TOP + FRONT);
    if (last === 'storm') { g.addColorStop(0, '#4a5568'); g.addColorStop(1, '#8a94a6'); }
    else if (last === 'recession') { g.addColorStop(0, '#8fa3b8'); g.addColorStop(1, '#cdd6de'); }
    else { g.addColorStop(0, '#6fb6f0'); g.addColorStop(1, '#cfe9fb'); }
    c.fillStyle = g; c.fillRect(0, 0, CW, CH);
    // far trees and the Bradlee sign
    for (let i = 0; i < 24; i++) { const x = i * 42 + 10, h = 30 + (i * 37 % 19); c.fillStyle = i % 2 ? '#4c8a3c' : '#5d9b46'; c.beginPath(); c.arc(x, TOP - 8, h * 0.6, Math.PI, 0); c.fill(); }
    c.fillStyle = '#5a5a62'; c.fillRect(30, 44, 8, TOP - 44); c.fillStyle = '#22202e'; c.fillRect(2, 16, 64, 34); c.fillStyle = '#f2c14e'; c.fillRect(5, 19, 58, 28);
    c.fillStyle = '#22202e'; c.font = 'bold 11px system-ui, sans-serif'; c.textAlign = 'center'; c.fillText('BRADLEE', 34, 37);
    // the long building: a roof line, then 8 bays
    c.fillStyle = '#c9b89a'; c.fillRect(X0 - 8, TOP - 6, BAY * 8 + 16, FRONT + 6);
    c.fillStyle = '#8a7a62'; c.fillRect(X0 - 12, TOP - 14, BAY * 8 + 24, 10);
    kinds().forEach(k => bay(c, k, X0 + k.lot * BAY, TOP, t));
    // sidewalk and the parking lot
    c.fillStyle = '#d8d2c4'; c.fillRect(0, TOP + FRONT, CW, 16);
    c.fillStyle = '#5c5f66'; c.fillRect(0, TOP + FRONT + 16, CW, CH - TOP - FRONT - 16);
    c.fillStyle = '#e8e4d8'; for (let i = 0; i < 18; i++) c.fillRect(20 + i * 52, TOP + FRONT + 40, 3, 46);
    // cars: more of them in good years
    const cars = last === 'boom' ? 12 : last === 'recession' ? 3 : last === 'storm' ? 4 : 7, CC = ['#c8322a', '#2a6ac8', '#e8e4d8', '#3a3a42', '#2aa198', '#e8a83a'];
    for (let i = 0; i < cars; i++) { const x = 30 + ((i * 7 + 3) % 18) * 52, y = TOP + FRONT + 46; c.fillStyle = CC[i % CC.length]; c.fillRect(x, y, 34, 22); c.fillStyle = 'rgba(200,230,255,.8)'; c.fillRect(x + 6, y + 4, 22, 7); c.fillStyle = '#22202e'; c.fillRect(x + 3, y + 20, 7, 4); c.fillRect(x + 24, y + 20, 7, 4); }
    // people walking along the shops
    const people = last === 'boom' ? 10 : last === 'recession' ? 2 : 5;
    for (let i = 0; i < people; i++) { const x = (i * 97 + t / (30 + i * 3)) % CW, y = TOP + FRONT + 6; c.fillStyle = ['#c8322a', '#2a6ac8', '#e8a83a', '#2aa198', '#8a5ad8'][i % 5]; c.fillRect(x, y - 10, 6, 10); c.fillStyle = '#e0b48a'; c.fillRect(x + 1, y - 15, 4, 5); }
    // the weather of the last year
    if (last === 'storm') { c.strokeStyle = 'rgba(220,230,255,.55)'; c.lineWidth = 1.5; for (let i = 0; i < 90; i++) { const x = (i * 53 + t / 4) % CW, y = (i * 31 + t / 2) % CH; c.beginPath(); c.moveTo(x, y); c.lineTo(x - 4, y + 12); c.stroke(); } }
    if (last === 'boom') for (let i = 0; i < 40; i++) { const x = (i * 71) % CW, y = (i * 43 + t / 10) % (TOP + 20); c.fillStyle = ['#f2c14e', '#e04848', '#2aa198', '#8a5ad8'][i % 4]; c.fillRect(x, y, 4, 4); }
  }
  function bay(c, k, x, y, t) {
    const open = isOpen(k), v = bal(k.id), tr = tier(v), col = COL[k.id] || '#888';
    c.fillStyle = '#e8dcc0'; c.fillRect(x + 4, y, BAY - 8, FRONT);
    if (!open) { // not open yet: boarded up
      c.fillStyle = '#b08a5a'; c.fillRect(x + 10, y + 28, BAY - 20, FRONT - 30); c.strokeStyle = '#8a6a40'; c.lineWidth = 2; for (let i = 0; i < 4; i++) { c.beginPath(); c.moveTo(x + 10, y + 34 + i * 18); c.lineTo(x + BAY - 10, y + 34 + i * 18); c.stroke(); }
      c.fillStyle = '#22202e'; c.font = 'bold 10px system-ui, sans-serif'; c.textAlign = 'center'; c.fillText('COMING ' + k.opens, x + BAY / 2, y + 18); return;
    }
    // upper floors as the money grows
    if (tr >= 3) { c.fillStyle = '#d8c8a8'; c.fillRect(x + 8, y - 34, BAY - 16, 34); c.fillStyle = '#7ab8e8'; for (let i = 0; i < 3; i++) c.fillRect(x + 16 + i * 26, y - 26, 16, 16); }
    if (tr >= 4) { c.fillStyle = col; c.fillRect(x + BAY / 2 - 2, y - 58, 4, 24); c.beginPath(); c.moveTo(x + BAY / 2 + 2, y - 58); c.lineTo(x + BAY / 2 + 20, y - 52 + Math.sin(t / 300) * 2); c.lineTo(x + BAY / 2 + 2, y - 46); c.fill(); }
    // the shop window and door
    c.fillStyle = tr ? '#bfe2f7' : '#9aa6b0'; c.fillRect(x + 12, y + 40, 52, 52); c.fillStyle = '#4a3a2a'; c.fillRect(x + 70, y + 46, 22, 46);
    if (tr) { c.font = '24px system-ui, sans-serif'; c.textAlign = 'center'; c.fillText(k.icon, x + 38, y + 76); }
    else { c.fillStyle = '#fffbe8'; c.fillRect(x + 16, y + 56, 44, 18); c.fillStyle = '#b83a2a'; c.font = 'bold 9px system-ui, sans-serif'; c.textAlign = 'center'; c.fillText('FOR LEASE', x + 38, y + 68); }
    // an awning from tier 2, a lit sign from tier 4
    if (tr >= 2) for (let i = 0; i < 6; i++) { c.fillStyle = i % 2 ? '#fffbe8' : col; c.beginPath(); c.moveTo(x + 8 + i * 15, y + 30); c.lineTo(x + 23 + i * 15, y + 30); c.lineTo(x + 23 + i * 15, y + 38); c.lineTo(x + 15 + i * 15, y + 42); c.lineTo(x + 8 + i * 15, y + 38); c.fill(); }
    c.fillStyle = tr >= 4 ? `rgba(255,236,150,${0.75 + Math.sin(t / 400 + k.lot) * 0.25})` : '#fffbe8'; c.fillRect(x + 10, y + 8, BAY - 20, 18);
    c.fillStyle = col; c.fillRect(x + 10, y + 24, BAY - 20, 3);
    c.fillStyle = '#22202e'; c.font = 'bold 10px system-ui, sans-serif'; c.textAlign = 'center';
    const nm = L(k.name); c.fillText(nm.length > 16 ? nm.slice(0, 15) + '…' : nm, x + BAY / 2, y + 21);
  }

  /* ---------------- the page ---------------- */
  let root, pend = [], fl = null;
  function flash(t) { const n = document.getElementById('pf-flash'); if (!n) return; n.textContent = t; n.hidden = false; clearTimeout(fl); fl = setTimeout(() => (n.hidden = true), 2600); }
  function chart() {
    const h = st.hist; if (!h.length) return `<p class="pf-small">${esc(S('noYears'))}</p>`;
    const W = 600, H = 140, max = Math.max(1, ...h.map(p => p.w)), x = i => 30 + i * (W - 40) / Math.max(1, N() - 1), y = v => H - 18 - v / max * (H - 34);
    const pts = h.map((p, i) => `${x(i).toFixed(1)},${y(p.w).toFixed(1)}`).join(' ');
    return `<svg viewBox="0 0 ${W} ${H}" class="pf-chart" role="img" aria-label="${esc(S('chart'))}"><line x1="30" y1="${H - 18}" x2="${W - 10}" y2="${H - 18}" stroke="#6a6488"/>
      <polyline points="${pts}" fill="none" stroke="#f2c14e" stroke-width="3"/>${h.map((p, i) => `<circle cx="${x(i)}" cy="${y(p.w)}" r="3.5" fill="#f2c14e"><title>${esc(S('year').replace('{y}', p.y).replace('{n}', N()))}: ${money(p.w)}</title></circle>`).join('')}
      <text x="30" y="14" fill="#c9bfa6" font-size="12">${money(max)}</text><text x="${W - 10}" y="${H - 4}" fill="#c9bfa6" font-size="12" text-anchor="end">${esc(S('year').replace('{y}', N()).replace('{n}', N()))}</text></svg>`;
  }
  function card(k) {
    const open = isOpen(k), v = bal(k.id);
    if (!open) return `<div class="pf-card locked"><div class="pf-ch"><span class="pf-ic">${k.icon}</span><b>${esc(L(k.name))}</b></div><p class="pf-what">${esc(L(k.what))}</p><p class="pf-lock">🔒 ${esc(S('opens').replace('{e}', k.opens))}</p></div>`;
    const ins = k.insurance ? `<p class="pf-ins ${v >= P().premium ? 'ok' : 'bad'}">${esc(S(v >= P().premium ? 'covered' : 'notCovered'))}</p>` : '';
    const lockOut = k.locked && st.year < N();
    const acts = k.id === 'piggy' ? `<p class="pf-small">${esc(S('cash'))}</p>` :
      `<div class="pf-acts"><span>${esc(S('putIn'))}:</span>${[10, 50].map(a => `<button data-k="${k.id}" data-a="${a}">$${a}</button>`).join('')}<button data-k="${k.id}" data-a="all">${esc(S('all'))}</button></div>` +
      (lockOut ? `<p class="pf-lock">🔒 ${esc(S('locked'))}</p>` : `<div class="pf-acts"><span>${esc(S('takeOut'))}:</span>${[10, 50].map(a => `<button data-k="${k.id}" data-a="-${a}">$${a}</button>`).join('')}<button data-k="${k.id}" data-a="-all">${esc(S('all'))}</button></div>`);
    return `<div class="pf-card" style="--kc:${COL[k.id]}"><div class="pf-ch"><span class="pf-ic">${k.icon}</span><b>${esc(L(k.name))}</b><span class="pf-v">${money(v)}</span></div><p class="pf-what">${esc(L(k.what))}</p>${ins}${acts}</div>`;
  }
  function render() {
    if (!root) return;
    const ys = st.year, end = ys >= N();
    document.documentElement.dir = WW.dir ? WW.dir() : 'ltr';
    root.querySelector('#pf-top').innerHTML = `<span class="pf-r"><b>${esc(S('worth'))}: ${money(worth())}</b></span><span class="pf-r">${esc(S('year').replace('{y}', ys).replace('{n}', N()))}</span>`;
    root.querySelector('#pf-cards').innerHTML = kinds().map(card).join('');
    root.querySelector('#pf-chart').innerHTML = `<h3>📈 ${esc(S('chart'))}</h3>${chart()}`;
    root.querySelector('#pf-end').innerHTML = end ? endCard() : '';
    root.querySelectorAll('[data-k]').forEach(b => b.onclick = () => { const k = kinds().find(x => x.id === b.dataset.k), a = b.dataset.a; move(k, a === 'all' ? bal('piggy') : a === '-all' ? -bal(k.id) : +a); });
  }
  function endCard() {
    return `<div class="pf-endcard"><h3>🌅 ${esc(S('endTitle'))}</h3><p><b>${esc(S('endYou').replace('{v}', Math.round(worth()).toLocaleString('en-US')))}</b></p>
      <p>${esc(S('endPiggy').replace('{v}', Math.round(whatIf('piggy', N())).toLocaleString('en-US')))}</p><p>${esc(S('endCenter').replace('{v}', Math.round(whatIf('center', N())).toLocaleString('en-US')))}</p><p class="pf-why">${esc(S('endWhy'))}</p></div>`;
  }
  // the years since the last visit, one card each
  function catchUp() {
    const want = doneYears();
    while (st.year < want) { const r = year(st.bal, st.year + 1); st.year++; st.hist.push({ y: st.year, w: worth() }); pend.push(r); }
    keep(); if (pend.length) showYear();
  }
  function showYear() {
    const r = pend.shift(), m = document.getElementById('pf-modal'); if (!r) { m.hidden = true; m.innerHTML = ''; render(); return; }
    const n = P().news[r.news];
    const rows = Object.values(r.before).every(v => !(v > 0.5)) ? '' : kinds().filter(k => (r.before[k.id] || 0) > 0.5 || (k.id === 'piggy')).map(k => { const a = r.before[k.id] || 0, b = (r.after[k.id] || 0) - (k.id === 'piggy' ? P().pay : 0), d = b - a;
      return `<tr><td>${k.icon} ${esc(L(k.name))}</td><td>${money(a)}</td><td class="${d > 0.5 ? 'up' : d < -0.5 ? 'down' : ''}">${d > 0.5 ? '▲' : d < -0.5 ? '▼' : '•'} ${money(b)}</td></tr>`; }).join('');
    m.hidden = false;
    m.innerHTML = `<div class="pf-news"><div class="pf-yr">${esc(S('newYear').replace('{y}', r.y))}</div><div class="pf-nh"><span>${n.icon}</span><h3>${esc(L(n.title))}</h3></div>
      <p class="pf-why">${esc(L(n.why))}</p>${rows ? `<table class="pf-tab">${rows}</table>` : ''}
      ${r.insured ? `<p class="pf-small">${esc(S('premiumPaid'))}</p>` : ''}<p class="pf-small">${esc(S('paycheck'))}</p>
      <button class="pf-go" id="pf-next">${esc(pend.length ? S('next') + ' ▶' : S('done'))}</button></div>`;
    if (WW.music && WW.save.music && WW.ac) WW.music.play('bradleeNews', 'bradlee');
    document.getElementById('pf-next').onclick = () => { WW.sfx && WW.sfx('blip'); showYear(); };
  }

  WW.portfolio = () => {
    root = document.getElementById('ww'); root.className = 'pf';
    document.title = S('title').replace(/^./, c => c) + ' · ' + ((window.WW_COURSE && window.WW_COURSE.name) || '');
    const langs = (WW.LANGS || ['en']).map(l => `<button class="pf-lang${WW.lang === l ? ' on' : ''}" data-l="${l}">${{ en: 'EN', es: 'ES', fa: 'دری' }[l] || l}</button>`).join('');
    root.innerHTML = `<div class="pf-wrap">
      <header class="pf-head"><div><div class="pf-logo">🏬 ${esc(S('title'))}</div><div class="pf-sub">${esc(S('sub'))}</div></div>
        <div class="pf-tools">${WW.LANGS && WW.LANGS.length > 1 ? langs : ''}<button id="pf-mus">🎵 ${esc(S('music'))}</button><button id="pf-codeb">🔑 ${esc(S('code'))}</button></div></header>
      <div class="pf-topbar" id="pf-top"></div>
      <div class="pf-scene"><canvas id="pf-cv" width="${CW * 2}" height="${CH * 2}" aria-hidden="true"></canvas><div id="pf-flash" class="pf-flash" hidden></div></div>
      <p class="pf-how">${esc(S('how'))} <i>${esc(S('madeUp'))}</i></p>
      <div class="pf-code" id="pf-code" hidden><p>${esc(S('codeHelp'))}</p><input id="pf-ci" placeholder="WW-XXXXX-XXXXX-XXXXXX" autocomplete="off"><button id="pf-cgo">✔</button><span id="pf-cmsg"></span></div>
      <div id="pf-end"></div>
      <div class="pf-cards" id="pf-cards"></div>
      <div class="pf-chartbox" id="pf-chart"></div>
    </div><div class="pf-modal" id="pf-modal" hidden></div>`;
    root.querySelectorAll('[data-l]').forEach(b => b.onclick = () => { WW.setLang(b.dataset.l); WW.portfolio(); });
    document.getElementById('pf-codeb').onclick = () => { const c = document.getElementById('pf-code'); c.hidden = !c.hidden; };
    document.getElementById('pf-cgo').onclick = () => {
      const d = WW.readCode(document.getElementById('pf-ci').value), msg = document.getElementById('pf-cmsg');
      if (!d) { msg.textContent = S('codeBad'); return; }
      WW.merge(d); WW.store(); msg.textContent = S('codeOk'); catchUp(); render();
    };
    const mus = document.getElementById('pf-mus');
    mus.onclick = () => { sound(); WW.music.toggle(); if (WW.save.music) WW.music.play('bradlee'); };
    root.addEventListener('pointerdown', function first() { sound(); if (WW.save.music) WW.music.play('bradlee'); root.removeEventListener('pointerdown', first); });
    const cv = document.getElementById('pf-cv'), c = cv.getContext('2d');
    (function frame(t) { if (!document.getElementById('pf-cv')) return; c.setTransform(2, 0, 0, 2, 0, 0); draw(c, t); requestAnimationFrame(frame); })(0);
    render(); catchUp();
  };
  // sound only after a tap (browsers' rule)
  function sound() { try { if (!WW.ac) WW.ac = new (window.AudioContext || window.webkitAudioContext)(); if (WW.ac.state === 'suspended') WW.ac.resume(); } catch (e) { } }
  WW.portfolio.state = () => st; // for tests

  /* ---------------- the look ---------------- */
  const css = `
body{margin:0;background:#141322;color:#f3f1ff;font:16px/1.45 system-ui,-apple-system,'Segoe UI',sans-serif}
.pf-wrap{max-width:1040px;margin:0 auto;padding:12px 14px 40px}
.pf-head{display:flex;justify-content:space-between;align-items:flex-end;gap:10px;flex-wrap:wrap}
.pf-logo{font:bold clamp(20px,4vw,30px)/1.1 ui-monospace,monospace;color:#f2c14e;letter-spacing:1px;text-shadow:2px 2px 0 #000}
.pf-sub{color:#c9bfa6;font-size:13px;margin-top:4px}
.pf-tools{display:flex;gap:6px;flex-wrap:wrap}.pf-tools button{background:#2b2a4a;color:#f3f1ff;border:2px solid #000;border-radius:6px;padding:6px 10px;font:inherit;font-size:14px;cursor:pointer}
.pf-tools .pf-lang.on{background:#f2c14e;color:#22202e}
.pf-topbar{display:flex;gap:8px;flex-wrap:wrap;margin:10px 0 8px}.pf-r{background:#22203c;border:2px solid #000;border-radius:6px;padding:6px 12px}.pf-r b{color:#f2c14e}
.pf-scene{position:relative;border:4px solid #000;outline:3px solid #6a5a3a;border-radius:8px;overflow:hidden}
#pf-cv{display:block;width:100%;height:auto}
@media (max-width:700px){.pf-scene{overflow-x:auto}#pf-cv{width:720px;max-width:none}}
.pf-flash{position:absolute;left:50%;top:12px;transform:translateX(-50%);background:#fffbe8;color:#22202e;border:2px solid #000;border-radius:6px;padding:6px 12px;font-weight:700}
.pf-how{color:#d8d2e8;font-size:15px}.pf-how i{color:#9a92ad}
.pf-small{color:#b9b2c8;font-size:13px;margin:4px 0}
.pf-code{background:#22203c;border:2px solid #000;border-radius:8px;padding:8px 10px;margin-bottom:10px}.pf-code input{font:inherit;padding:6px;border-radius:6px;border:2px solid #000;width:min(100%,260px)}.pf-code button{font:inherit;margin:0 6px;padding:6px 10px;border-radius:6px;border:2px solid #000;background:#f2c14e}
.pf-cards{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:10px}
.pf-card{background:#fffbe8;color:#22202e;border:3px solid #000;border-top:8px solid var(--kc,#888);border-radius:8px;padding:10px}
.pf-card.locked{background:#3a3654;color:#c9c2dc;border-top-color:#6a6488}
.pf-ch{display:flex;align-items:center;gap:8px}.pf-ic{font-size:24px}.pf-v{margin-left:auto;font-weight:800;font-size:18px}
.pf-what{font-size:14px;margin:6px 0}.pf-lock{font-size:13px;font-weight:700;margin:4px 0}
.pf-ins.ok{color:#2a7a4a;font-weight:700;font-size:13px}.pf-ins.bad{color:#a83a2e;font-weight:700;font-size:13px}
.pf-acts{display:flex;gap:5px;align-items:center;flex-wrap:wrap;margin-top:5px;font-size:13px}.pf-acts span{min-width:62px;font-weight:700}
.pf-acts button{font:inherit;font-size:14px;padding:6px 10px;min-height:36px;border:2px solid #000;border-radius:6px;background:#fff;cursor:pointer}.pf-acts button:hover{background:#f2c14e}
.pf-chartbox{margin-top:14px;background:#22203c;border:3px solid #000;border-radius:8px;padding:8px 12px}.pf-chartbox h3{margin:4px 0;color:#f2c14e;font-size:16px}.pf-chart{width:100%;height:auto}
.pf-endcard{background:#2f6a3e;border:3px solid #000;border-radius:8px;padding:10px 14px;margin-bottom:12px}.pf-endcard h3{margin:2px 0 6px}
.pf-modal{position:fixed;inset:0;background:rgba(10,8,20,.75);display:flex;align-items:center;justify-content:center;padding:14px;z-index:9}.pf-modal[hidden]{display:none}
.pf-news{background:#fffbe8;color:#22202e;border:4px solid #000;border-radius:10px;max-width:560px;width:100%;max-height:92vh;overflow-y:auto;padding:14px 18px}
.pf-yr{font-weight:800;color:#7a5a3a;font-size:14px}.pf-nh{display:flex;gap:10px;align-items:center}.pf-nh span{font-size:38px}.pf-nh h3{margin:4px 0;font-size:21px}
.pf-why{background:#fbf4e2;border-left:5px solid #9a6a3a;padding:8px 10px;font-size:16px}
.pf-endcard .pf-why{color:#22202e}
.pf-tab{width:100%;border-collapse:collapse;font-size:15px;margin:6px 0}.pf-tab td{border-bottom:1px solid #e0d6bc;padding:4px}.pf-tab td:nth-child(n+2){text-align:right;white-space:nowrap}.pf-tab .up{color:#2a7a4a;font-weight:700}.pf-tab .down{color:#a83a2e;font-weight:700}
.pf-go{margin-top:10px;font:inherit;font-weight:800;font-size:17px;padding:10px 18px;border:3px solid #000;border-radius:6px;background:#f2c14e;cursor:pointer}
[dir=rtl] .pf-tab td:nth-child(n+2){text-align:left}`;
  const sty = document.createElement('style'); sty.textContent = css; document.head.appendChild(sty);
})();
