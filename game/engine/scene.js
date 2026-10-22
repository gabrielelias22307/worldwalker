/* WORLDWALKER engine · cut scenes (fun-pass-4)
   Two short scenes in every episode, each played only the first time a hero gets there:
   'start'  after Start: Christopher flies over a pixel world map to this place, with 2–3 fact cards
   'page'   after the atlas page is claimed: the place lights up, with one new fact
   Data: ep.scenes = { at: [longitude, latitude], start: [fact, fact, fact], page: fact } (docs/EPISODE-FORMAT.md).
   Skip is always there. With reduced motion (WW.calm) nothing moves. */
(function () {
  const WW = window.WW, L = t => WW.L(t), T = k => WW.T(k);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  // the land: 96 x 40 cells, longitude -180..180, latitude 82..-58 (Natural Earth 110m, one bit per cell, 24 hex digits per row)
  const MASK = [
    '000003fffff01e0000600000',
    '0000f7e7ffe00800c07c0400',
    '0003f7f07fe0000337ffc700',
    '8ffffffc7fc00fc2ffffffff',
    'dfffffde3e301fffffffffff',
    '0fffff7e38007fffffffffff',
    '0f3ffe1e00007bffffffffb8',
    '040fffdf00033ffffffff870',
    '0007ffff8007fffffffffc60',
    '0003fffec001fffffffffe00',
    '0001ffff0001fffffffffa00',
    '0001fff80007bfffffffe400',
    '0001fff000072fffffffe400',
    '0000fff00003e07fffff3800',
    '00007fe00007ffffffff8000',
    '00007e20000fffffffff8000',
    '00003c20000fffff7fff8000',
    '00000c90001fffff1ffc0000',
    '00000780001ffffe1c788000',
    '000001c0001ffff80c388000',
    '0000005f000ffffc0c38c000',
    '0000001f8007fff804214000',
    '0000001fe0003ff800330000',
    '0000003ff0003ff000379000',
    '0000003ffc001fe000139e80',
    '0000003ffe001fe0000e0700',
    '0000001ffe001fe000000100',
    '0000001ffc001fec00007a00',
    '00000007fc001fc80000fe00',
    '00000007f8001fd80003ff00',
    '00000007f0000f880003ff80',
    '00000007e0000f800003ff80',
    '00000007e0000f000001ff80',
    '0000000f8000040000010f02',
    '0000000f8000000000000303',
    '0000000e0000000000000106',
    '0000000e000000000000000c',
    '0000000c0000000000000000',
    '0000000c0000000000000000',
    '000000040000000000000000'
  ];
  const MW = 96, MH = 40, N = 82, SO = -58, CS = 2; // CS: pixels per cell on the scene canvas
  const land = (q, r) => r >= 0 && r < MH && q >= 0 && q < MW && (parseInt(MASK[r][q >> 2], 16) >> (3 - (q & 3))) & 1;
  const cell = ([lon, lat]) => [Math.round((lon + 180) / 360 * MW), Math.round((N - lat) / (N - SO) * MH)];
  const SW = MW * CS, SH = MH * CS + 8;
  let cur = null; // the scene on screen: { end }

  function paint(c, t, at, kind, t0) {
    const [mq, mr] = cell(at), mx = mq * CS, my = mr * CS + 4, calm = WW.calm;
    c.fillStyle = '#1d4f8a'; c.fillRect(0, 0, SW, SH);
    c.fillStyle = '#2a64a6'; // small waves
    for (let i = 0; i < 40; i++) { const x = (i * 53 + Math.floor((calm ? 0 : t) / 120)) % SW, y = (i * 29) % SH; c.fillRect(x, y, 3, 1); }
    for (let r = 0; r < MH; r++) for (let q = 0; q < MW; q++) {
      if (!land(q, r)) continue;
      const shore = !land(q, r - 1) || !land(q, r + 1) || !land(q - 1, r) || !land(q + 1, r);
      c.fillStyle = r < 5 || r > 36 ? '#e8eef2' : shore ? '#e3c78a' : (q + r) % 5 ? '#5aa548' : '#4c9140';
      c.fillRect(q * CS, r * CS + 4, CS, CS);
    }
    // the place: a gold ring that pulses (a page that glows after the page is won)
    const k = calm ? 0.5 : (Math.sin(t / 220) + 1) / 2;
    c.strokeStyle = '#f2c14e'; c.lineWidth = 1;
    c.beginPath(); c.arc(mx + 1, my + 1, 4 + k * 3, 0, 7); c.stroke();
    c.fillStyle = kind === 'page' ? '#fffbe8' : '#f2c14e'; c.fillRect(mx, my, 2, 2);
    if (kind === 'page') { c.fillStyle = 'rgba(242,193,78,.35)'; c.beginPath(); c.arc(mx + 1, my + 1, 9 + k * 2, 0, 7); c.fill(); }
    // Christopher flies in from the side and stops just above the place
    const p = calm ? 1 : Math.min(1, (t - t0) / 1600), e = 1 - Math.pow(1 - p, 3);
    const sx = mx < SW / 2 ? SW + 10 : -26, sy = 6;
    const cx = sx + (mx - 8 - sx) * e, cy = sy + (my - 22 - sy) * e - Math.sin(e * Math.PI) * 10;
    WW.chris.draw(c, Math.round(cx), Math.round(cy), t);
  }

  // play one scene; done() runs after the last card or Skip
  WW.scene = (kind, done) => {
    const ep = WW.ep, sc = ep && ep.scenes, key = ep && ep.id + (kind === 'page' ? 'p' : 's');
    const cards = sc ? (kind === 'page' ? [sc.page] : sc.start || []).filter(Boolean) : [];
    if (!cards.length || (WW.save.seen || {})[key]) return done && done();
    let i = 0, raf = 0, t0 = performance.now(), live = true;
    const finish = () => {
      if (!live) return; live = false; cancelAnimationFrame(raf); cur = null;
      WW.save.seen = Object.assign(WW.save.seen || {}, { [key]: 1 }); WW.store();
      h.close(); done && done();
    };
    const h = WW.ui.open({
      cls: 'cutov',
      render(box) {
        box.innerHTML = `<div class="cut-h">${esc(kind === 'page' ? T('sceneDid') : T('episode') + ' ' + ep.id)} · <b>${esc(L(ep.place))}</b></div>`;
        const cv = document.createElement('canvas'); cv.className = 'cut-cv'; cv.width = SW; cv.height = SH;
        const c = cv.getContext('2d'); c.imageSmoothingEnabled = false; box.appendChild(cv);
        cancelAnimationFrame(raf);
        const tick = t => { if (!live) return; paint(c, t, sc.at, kind, t0); raf = requestAnimationFrame(tick); };
        if (WW.calm) paint(c, 0, sc.at, kind, 0); else raf = requestAnimationFrame(tick); // reduced motion: one still picture
        const card = document.createElement('div'); card.className = 'cut-card';
        card.innerHTML = `<p>${WW.rich(cards[i])}</p>${cards.length > 1 ? `<div class="cut-dots">${cards.map((_, j) => `<i class="${j === i ? 'on' : ''}"></i>`).join('')}</div>` : ''}`;
        const sp = WW.speakBtn(() => WW.plain(cards[i])); if (sp) card.prepend(sp);
        box.appendChild(card);
        const acts = document.createElement('div'); acts.className = 'acts center';
        const last = i === cards.length - 1;
        if (!last) acts.appendChild(WW.btn(T('sceneSkip'), 'ghost', finish));
        acts.appendChild(WW.btn(last ? (kind === 'page' ? T('sceneOn') : T('sceneGo')) + ' ▶' : T('sceneNext') + ' ▶', 'gold', () => { if (last) finish(); else { i++; h.render(); } }));
        box.appendChild(acts);
      }
    });
    cur = { end: finish };
    if (kind === 'page') WW.sfx && WW.sfx('chime');
  };
  WW.scene.skip = () => { if (cur) cur.end(); }; // for the play-tests
  WW.scene.MASK = { land, cell, MW, MH };
})();
