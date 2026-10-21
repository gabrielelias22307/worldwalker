/* WORLDWALKER engine · building in place and planting that teaches (FUN-PASS-2, Part C)
   build: [{ id, kind: 'place', board: [x, y], tile: 'F', ok: [[x, y], [x, y, 'R'], ...], cost: { wood: 1 } (each piece),
            name, ask, why (said at a right spot), wrong (why a spot is wrong), done,
            wrongBy: [{ x, y, w, h, t }] (optional: its own reason for a wrong area), over: '~' (optional: pieces can go on these tiles) }]
     A spot with a third letter gets that tile (a roof, a wall); the others get tile.
     Walk into the build board, take the kit (tool 6), and put each piece where it belongs (Space). A right spot builds it;
     a wrong spot leaves a red piece and says why — face it and press Space to pick it up (nothing is lost). When every piece
     is in, the build is saved (it stays built on replays).
   plant: { basket: [x, y], crops: [{ id, icon, name, zones: [{ x, y, w, h }], tiles: 'tq', ok, no, noBy: [{ x, y, w, h, t }], rain: true, dry }] }
     tiles: the crop also grows on these map letters (like terraces 't' the student built).
     The basket gives seeds of each crop. A seed grows only in its zones (and, with rain: true, only while the summer monsoon
     rain falls). Anywhere else it sprouts, wilts with a one-line reason, and the seed comes back.
   seasons: { dry: 40, wet: 40 } — the monsoon comes and goes (seconds); rain on the map while it is wet. */
(function () {
  const L = t => WW.L(t), T = k => WW.T(k), esc = s => WW.esc(s);
  const F = WW.farm = {};
  const G = () => WW.game;
  const X = () => WW.tools;
  F.KINDS = ['board', 'basket', 'piece'];
  F.on = () => !!(WW.ep && WW.ep.plant);
  const places = () => (WW.ep.build || []).filter(b => b.kind === 'place');
  const built = id => ((WW.save.built || {})[WW.ep.id] || []).includes(id);
  const tileOf = (b, p) => p[2] || b.tile;
  const leftOf = b => b.ok.filter(p => G().tileAt(p[0], p[1]) !== tileOf(b, p)).length;

  /* ---------------- set up ---------------- */
  F.ents = (ep) => {
    const out = [];
    (ep.build || []).filter(b => b.kind === 'place' && b.board).forEach(b => out.push({ kind: 'board', x: b.board[0], y: b.board[1], b }));
    if (ep.plant && ep.plant.basket) out.push({ kind: 'basket', x: ep.plant.basket[0], y: ep.plant.basket[1] });
    return out;
  };
  F.setup = (ep) => {
    const r = WW.run;
    r.kit = null; r.crop = 0; r.wet = false; r.told = {};
    places().filter(b => built(b.id)).forEach(b => b.ok.forEach(p => G().setTile(p[0], p[1], tileOf(b, p)))); // built before: still built
    if (ep.seasons) { r.wet = false; r.seasonAt = performance.now() + ep.seasons.dry * 1000; WW.fx.setSky && WW.fx.setSky('clear'); }
    badge();
  };

  /* ---------------- the monsoon comes and goes ---------------- */
  let badgeEl = null;
  function badge() {
    const ep = WW.ep, sc = document.getElementById('ww-screen');
    if (!ep.seasons) { if (badgeEl) badgeEl.remove(); badgeEl = null; return; }
    if (!badgeEl || !badgeEl.isConnected) { badgeEl = document.createElement('div'); badgeEl.className = 'seasonbadge'; sc.appendChild(badgeEl); }
    badgeEl.textContent = WW.run.wet ? '🌧️ ' + T('seasonWet') : '☀️ ' + T('seasonDry');
    badgeEl.classList.toggle('wet', WW.run.wet);
  }
  F.tick = (now) => {
    const r = WW.run, ep = WW.ep; if (!r || !G().player) return;
    if (badgeEl && badgeEl.classList.contains('wet') !== !!r.wet) badge(); // always shows the weather there is
    if (badgeEl) { const tb = document.getElementById('ww-tools'); badgeEl.classList.toggle('under', !!(tb && tb.classList.contains('top'))); } // out of the tool bar's way
    if (ep.seasons && !WW.paused && now > r.seasonAt) {
      r.wet = !r.wet; r.seasonAt = now + (r.wet ? ep.seasons.wet : ep.seasons.dry) * 1000;
      WW.fx.setSky && WW.fx.setSky(r.wet ? 'rain' : 'clear');
      badge(); WW.sfx(r.wet ? 'gate' : 'blip');
      WW.chris.say(T(r.wet ? 'monsoonWet' : 'monsoonDry'));
    }
    // a seed in the wrong place sprouts, then wilts and comes back to the bag
    G().ents.forEach(o => {
      if (o.kind !== 'crop' || o.gone || !o.wiltAt || now < o.wiltAt) return;
      o.gone = true; X().add('seed:' + o.type, 1);
      WW.fx.burst(o.x, o.y, 'dust'); WW.sfx('bad');
      const c = crop(o.type);
      // why it wilted: no rain yet, or the land here (each wrong band can say its own reason)
      const band = (c.noBy || []).find(z => o.x >= z.x && o.y >= z.y && o.x < z.x + z.w && o.y < z.y + z.h);
      const why = inZone(c, o.x, o.y) && c.rain && !o.wet ? (c.dry || c.no) : band ? band.t : c.no;
      WW.chris.say(`🥀 ${L(why)} ${T('seedBack')}`, null, { at: [o.x, o.y] });
    });
  };
  WW.onLang && WW.onLang(() => WW.run && badge());

  /* ---------------- planting ---------------- */
  const crop = id => (WW.ep.plant.crops || []).find(c => c.id === id);
  F.crops = () => (WW.ep.plant && WW.ep.plant.crops) || [];
  F.current = () => F.crops()[WW.run.crop % Math.max(1, F.crops().length)];
  F.seedCount = () => { const c = F.current(); return c ? X().have('seed:' + c.id) : 0; };
  F.nextCrop = () => { WW.run.crop = (WW.run.crop + 1) % F.crops().length; };
  const inZone = (c, x, y) => (c.zones || []).some(z => x >= z.x && y >= z.y && x < z.x + z.w && y < z.y + z.h) || (!!c.tiles && c.tiles.includes(G().tileAt(x, y)));
  const ground = ch => !WW.solid(ch) && !':-|~=bBkdlZG%'.includes(ch);
  F.plant = (x, y, e) => {
    const c = F.current(), g = G();
    if (!c) return false;
    if (X().have('seed:' + c.id) < 1) { WW.chris.say(T('noCropSeeds').replace('{c}', c.icon + ' ' + L(c.name))); WW.sfx('bad'); return true; }
    if (e || !ground(g.tileAt(x, y))) { WW.chris.say(T('plantWhere')); WW.sfx('bad'); return true; }
    X().use('seed:' + c.id, 1);
    const good = inZone(c, x, y) && (!c.rain || WW.run.wet);
    const o = { kind: 'crop', type: c.id, x, y, t0: performance.now(), grow: 30000, wet: WW.run.wet };
    if (!good) o.wiltAt = performance.now() + (WW.calm ? 600 : 1800); // it sprouts... then wilts
    g.ents.push(o);
    WW.sfx('blip'); WW.fx.burst(x, y, 'dust');
    if (good) WW.chris.say(`🌱 ${L(c.ok)}`, null, { at: [x, y] });
    return true;
  };
  F.reap = (o) => {
    const c = crop(o.type);
    o.gone = true; X().add('seed:' + o.type, 2);
    WW.gain(null, 0, 3, T('why_harvest'), true);
    WW.sfx('coin'); WW.fx.burst(o.x, o.y, 'gold'); G().shake();
    WW.toast(`+3 ● ${c.icon} ${esc(L(c.name))} · +2 ${esc(T('item_seed'))}`, '#c08a1e');
    return true;
  };
  function basket() {
    const cs = F.crops(); let got = 0;
    cs.forEach(c => { const n = X().have('seed:' + c.id); if (n < 3) { X().add('seed:' + c.id, 3 - n); got++; } });
    WW.sfx(got ? 'coin' : 'blip');
    WW.ui.message('🧺 ' + T('basketTitle'), `${L(WW.ep.plant.ask || { en: '', es: '', fa: '' })} ${T('basketGot')} ${cs.map(c => `${c.icon} ${L(c.name)}`).join(' · ')}. ${T('basketHow')}`);
    if (X().selected() !== 'seed') X().pick('seed', true);
    X().render();
  }

  /* ---------------- building in place ---------------- */
  F.kit = () => { const r = WW.run; return r && r.kit ? places().find(b => b.id === r.kit.id) : null; };
  F.kitLeft = () => { const r = WW.run; return r && r.kit ? r.kit.left : 0; };
  function board(e) {
    const b = e.b, r = WW.run, done = built(b.id);
    WW.ui.open({
      cls: 'msgov',
      render(box, h) {
        const cost = Object.entries(b.cost || {}).map(([k, n]) => `${n} ${T('item_' + k)}`).join(' + ');
        box.innerHTML = `<h3>🔨 ${esc(L(b.name))}</h3><p class="say">${WW.rich(done ? b.done : b.ask)}</p>` +
          (done ? '' : `<p class="small"><b>${esc(T('costs'))}:</b> ${esc(cost)} ${esc(T('perPiece'))} · ${b.ok.length} ${esc(T('pieces'))} · ${esc(T('youHave'))}: ${X().have('wood')} ${esc(T('item_wood'))}, ${X().have('fiber')} ${esc(T('item_fiber'))}</p>`);
        const a = document.createElement('div'); a.className = 'acts';
        if (!done && !(r.kit && r.kit.id === b.id)) a.appendChild(WW.btn('🔨 ' + esc(T('takeKit')), 'gold', () => { r.kit = { id: b.id, left: leftOf(b), prepaid: 0 }; h.close(); X().pick('build', true); WW.chris.say(T('kitHow')); }));
        a.appendChild(WW.btn(T('close'), done || (r.kit && r.kit.id === b.id) ? 'gold' : 'ghost', () => h.close()));
        box.appendChild(a);
      }
    });
  }
  F.place = (x, y, e) => {
    const b = F.kit(), r = WW.run, g = G(); if (!b) return false;
    if (e || !(g.walkable(x, y) || (b.over && b.over.includes(g.tileAt(x, y)))) || (x === g.player.x && y === g.player.y)) { WW.chris.say(T('sgBlocked')); WW.sfx('bad'); return true; }
    if (!r.kit.prepaid) { // each piece costs wood (or fiber) the first time it goes down
      const lack = Object.entries(b.cost || {}).filter(([k, n]) => X().have(k) < n);
      if (lack.length) { WW.chris.say(T('pieceNeed').replace('{c}', Object.entries(b.cost).map(([k, n]) => `${n} ${T('item_' + k)}`).join(' + ')) + ' ' + lack.map(([k]) => T('how_' + k)).join(' ')); WW.sfx('bad'); return true; }
      Object.entries(b.cost || {}).forEach(([k, n]) => X().use(k, n));
    } else r.kit.prepaid--;
    const spot = b.ok.find(p => p[0] === x && p[1] === y), right = spot && g.tileAt(x, y) !== tileOf(b, spot);
    if (right) {
      g.setTile(x, y, tileOf(b, spot)); r.kit.left--;
      WW.fx.burst(x, y, 'gold'); WW.sfx('chop'); g.shake();
      if (r.kit.left <= 0) return finish(b);
      WW.chris.say(`✅ ${L(b.why)} ${T('piecesLeft').replace('{n}', r.kit.left)}`, null, { at: [x, y] });
    } else {
      g.ents.push({ kind: 'piece', x, y, b });
      WW.sfx('bad'); g.shake();
      const band = (b.wrongBy || []).find(z => x >= z.x && y >= z.y && x < z.x + z.w && y < z.y + z.h);
      WW.chris.say(`❌ ${L(band ? band.t : b.wrong)} ${T('pickPiece')}`, null, { at: [x, y] });
    }
    X().render();
    return true;
  };
  F.pickPiece = (e) => { // a piece in the wrong spot comes back to your hands (already paid for)
    e.gone = true; const r = WW.run;
    if (!r.kit || r.kit.id !== e.b.id) r.kit = { id: e.b.id, left: leftOf(e.b), prepaid: 0 };
    r.kit.prepaid++; X().pick('build', true); WW.sfx('blip'); WW.chris.say(T('piecePicked')); X().render();
  };
  function finish(b) {
    const s = WW.save, r = WW.run;
    s.built = s.built || {}; s.built[WW.ep.id] = Array.from(new Set([...(s.built[WW.ep.id] || []), b.id]));
    G().ents.forEach(o => { if (o.kind === 'piece' && o.b === b) { o.gone = true; } }); // leftover red pieces: the wood goes back
    const extra = r.kit.prepaid; r.kit = null;
    if (extra) Object.entries(b.cost || {}).forEach(([k, n]) => X().add(k, n * extra));
    WW.store(); WW.sheetSync && WW.sheetSync();
    WW.paused = true; WW.sfx('gate');
    b.ok.forEach(([x, y], i) => setTimeout(() => WW.fx.burst(x, y, 'gold'), WW.calm ? 0 : i * 90));
    setTimeout(() => {
      WW.paused = false; WW.sfx('win');
      WW.gain(null, 0, 5, T('why_build'), true); WW.toast(`🔨 +5 ● ${esc(L(b.name))}`, '#8b5a2b');
      X().pick('star', true); WW.chris.say(`🎉 ${L(b.done)}`, null, { at: b.ok[0] });
    }, WW.calm ? 100 : 700);
    return true;
  }

  /* ---------------- talking to things ---------------- */
  F.interact = (e) => {
    if (e.kind === 'board') return board(e);
    if (e.kind === 'basket') return basket();
    if (e.kind === 'piece') return F.pickPiece(e);
  };
  F.carryLine = () => {
    const b = F.kit(); if (!b || X().selected() !== 'build') return '';
    return `🔨 <b>${esc(L(b.name))}:</b> ${esc(T('piecesLeft').replace('{n}', WW.run.kit.left))} <small>${esc(T('kitShort'))}</small>`;
  };

  /* ---------------- drawing ---------------- */
  F.drawEnt = (c, e, x, y, t) => {
    if (e.kind === 'board') { // a little sign with a hammer
      const done = built(e.b.id), k = WW.calm ? .5 : (Math.sin(t / 300) + 1) / 2;
      if (!done) { c.fillStyle = `rgba(255,236,150,${.15 + k * .2})`; c.beginPath(); c.arc(x + 8, y + 8, 9, 0, 7); c.fill(); }
      WW.shadow(c, x, y + 13, 10);
      c.fillStyle = '#22202e'; c.fillRect(x + 7, y + 7, 2, 8); c.fillRect(x + 1, y + 1, 14, 8);
      c.fillStyle = done ? '#3fa34d' : '#c79a5b'; c.fillRect(x + 2, y + 2, 12, 6);
      c.fillStyle = '#5e636b'; c.fillRect(x + 5, y + 3, 6, 2); c.fillStyle = '#6d4424'; c.fillRect(x + 7, y + 5, 2, 3);
    } else if (e.kind === 'basket') {
      WW.shadow(c, x, y + 13, 12);
      c.fillStyle = '#22202e'; c.fillRect(x + 2, y + 7, 12, 8); c.fillStyle = '#c79a5b'; c.fillRect(x + 3, y + 8, 10, 6);
      c.fillStyle = '#8b5a2b'; c.fillRect(x + 3, y + 10, 10, 1); c.fillRect(x + 3, y + 12, 10, 1);
      c.fillStyle = '#3f8a2e'; c.fillRect(x + 5, y + 5, 2, 3); c.fillStyle = '#f2c14e'; c.fillRect(x + 8, y + 5, 2, 3); c.fillStyle = '#d1263a'; c.fillRect(x + 11, y + 6, 2, 2);
    } else if (e.kind === 'piece') { // a piece in the wrong spot: its tile, faded, with a red mark
      c.save(); c.globalAlpha = .55; (WW.tiles[e.b.tile] || WW.tiles['.'])(c, x, y, e.x, e.y, t, WW.ep.map); c.restore();
      c.strokeStyle = '#e04848'; c.lineWidth = 2; c.strokeRect(x + 1, y + 1, 14, 14);
      c.fillStyle = '#e04848'; c.font = 'bold 9px sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText('✕', x + 8, y + 8);
    }
  };
  // a typed crop: a sprout, then the plant; a wilting one turns brown
  F.drawCrop = (c, e, x, y, t, st) => {
    const cr = crop(e.type);
    if (e.wiltAt) { const k = Math.min(1, 1 - (e.wiltAt - performance.now()) / 1800); c.fillStyle = k > .5 ? '#8b6a3a' : '#5a8a2e'; c.fillRect(x + 7, y + 8 + Math.round(k * 2), 2, 5 - Math.round(k * 2)); c.fillRect(x + 5 + Math.round(k), y + 9, 2, 1); c.fillRect(x + 9 - Math.round(k), y + 9, 2, 1); return; }
    c.fillStyle = '#3f8a2e';
    if (st === 0) { c.fillRect(x + 7, y + 9, 2, 4); c.fillRect(x + 5, y + 8, 2, 2); c.fillRect(x + 9, y + 8, 2, 2); }
    else if (st === 1) { c.fillRect(x + 7, y + 4, 2, 9); c.fillRect(x + 4, y + 6, 3, 3); c.fillRect(x + 9, y + 5, 3, 3); }
    else { c.fillRect(x + 7, y + 5, 2, 8); c.font = '9px sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillStyle = '#000'; c.fillText(cr ? cr.icon : '🌾', x + 8, y + 4); }
  };
})();
