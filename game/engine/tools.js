/* WORLDWALKER engine · the tool bar and building (an episode turns it on with tools: ['axe', 'sickle'])
   1 ★ stars · 2 axe (small trees and bushes -> wood) · 3 sickle (tall grass -> fiber, sometimes a seed or a coin; ripe crops -> coins)
   4 seeds (plant on farm soil) · 5 signposts (while you carry them). Space uses the tool on the tile you face.
   Chopped trees and cut grass grow back. Border trees never get cut.
   build: [...] in the episode lists what can be built (see docs/EPISODE-FORMAT.md): kind 'repair' (fix a broken thing with wood)
   or kind 'signpost' (put a sign where its directions point; a wrong spot explains why, and you can pick the sign up again). */
(function () {
  const L = t => WW.L(t), T = k => WW.T(k), esc = s => WW.esc(s);
  const $ = id => document.getElementById(id);
  const X = WW.tools = {};
  const G = () => WW.game;
  // what the axe and sickle work on: tile -> [what it gives, how many, what is left, seconds to grow back]
  const CHOP = { T: ['wood', 2, '%', 180], P: ['wood', 2, '%', 180], a: ['wood', 2, '%', 180], Y: ['wood', 1, '.', 150] };
  const CUT = { '"': ['fiber', 1, '.', 60] };
  const SLOTS = ['star', 'axe', 'sickle', 'seed', 'sign', 'build'];
  X.SLOTS = SLOTS;
  let sel = 'star', regrow = [], told = {}, bar = null, lastFit = null;

  X.on = () => !!(WW.ep && WW.ep.tools && WW.ep.tools.length);

  /* ---------------- the bag (saved with the hero: got and used, like coins, so spent wood never comes back) ---------------- */
  X.have = item => { const b = (WW.save.bag || {})[item]; return b ? (b.got || 0) - (b.used || 0) : 0; };
  X.add = (item, n) => {
    const s = WW.save; s.bag = s.bag || {}; const b = (s.bag[item] = s.bag[item] || { got: 0, used: 0 }); b.got += n; WW.store(); X.render();
  };
  X.use = (item, n) => { if (X.have(item) < n) return false; const b = WW.save.bag[item]; b.used += n; WW.store(); X.render(); return true; };
  const costText = cost => Object.entries(cost).map(([k, n]) => `${n} ${T('item_' + k)}`).join(' + ');
  const missing = cost => Object.entries(cost).filter(([k, n]) => X.have(k) < n);
  const howGet = k => T('how_' + k);

  /* ---------------- set up an episode ---------------- */
  X.setup = (ep) => {
    regrow = []; told = {}; sel = 'star';
    // things already built in an earlier play stay built
    const built = ((WW.save.built || {})[ep.id]) || [];
    (ep.build || []).filter(b => b.kind === 'repair' && built.includes(b.id)).forEach(b => b.at.forEach(([x, y]) => G().setTile(x, y, b.tile)));
    const old = $('ww-tools'); if (old) old.remove();
    bar = null;
    if (!X.on()) return;
    bar = document.createElement('div'); bar.className = 'toolbar'; bar.id = 'ww-tools';
    $('ww-screen').appendChild(bar); // inside the map, over its bottom edge
    X.render();
  };
  // the icons' own colors (kept apart from the hero's palette)
  const TPAL = { S: '#c3c8ce', b: '#8b5a2b', B: '#6d4424', o: '#c79a5b', O: '#7a5a34', g: '#3f8a2e', G: '#2a6320' };
  const ICON = { star: 'starIcon', axe: 'axe', sickle: 'sickle', seed: 'seedIcon', sign: 'signIcon', build: 'hammerIcon', wood: 'wood', fiber: 'fiber' };
  X.render = () => {
    if (!bar) return;
    const r = WW.run || {}, signs = (r.signs || []).filter(s => !s.placed).length;
    bar.innerHTML = ''; bar.setAttribute('dir', 'ltr');
    SLOTS.forEach((k, i) => {
      if (k === 'sign' && !signs) return;
      if (k === 'build' && !(WW.farm && WW.farm.kit())) return;
      const farm = k === 'seed' && WW.farm && WW.farm.on(), crop = farm && WW.farm.current();
      const tk = k === 'sign' && carry() ? 'tool_card' : 'tool_' + k;
      const b = document.createElement('button'); b.className = 'tslot' + (sel === k ? ' on' : '') + (lastFit === k && sel !== k ? ' fit' : ''); b.title = `${i + 1} · ${T(tk)}`; b.dataset.k = k;
      b.setAttribute('aria-label', T(tk));
      if (crop) { b.title = `${i + 1} · ${crop.icon} ${L(crop.name)} (${T('seedCycle')})`; b.insertAdjacentHTML('beforeend', `<span class="tcrop">${crop.icon}</span>`); }
      else b.appendChild(WW.spriteCanvas(ICON[k], TPAL, 2));
      const n = k === 'seed' ? (farm ? WW.farm.seedCount() : X.have('seed')) : k === 'sign' ? signs : k === 'build' ? WW.farm.kitLeft() : null;
      b.insertAdjacentHTML('beforeend', `<i>${i + 1}</i>${n != null ? `<b>${n}</b>` : ''}`);
      b.onclick = () => { X.pick(k); WW.audioInit(); $('ww-screen').focus(); };
      bar.appendChild(b);
    });
    const bag = document.createElement('div'); bag.className = 'tbag';
    ['wood', 'fiber'].forEach(k => { const s = document.createElement('span'); s.title = T('item_' + k); s.appendChild(WW.spriteCanvas(ICON[k], TPAL, 2)); s.insertAdjacentHTML('beforeend', `<b>${X.have(k)}</b>`); bag.appendChild(s); });
    bar.appendChild(bag);
    if (sel === 'build' && WW.farm) { const line = WW.farm.carryLine(); if (line) bar.insertAdjacentHTML('beforeend', `<div class="tcarry" dir="${WW.dir()}">${line}</div>`); }
    if (sel === 'seed' && WW.farm && WW.farm.on() && WW.farm.current()) { const c = WW.farm.current(); bar.insertAdjacentHTML('beforeend', `<div class="tcarry" dir="${WW.dir()}">${c.icon} <b>${esc(L(c.name))}</b> · ${WW.farm.seedCount()} <small>${esc(T('seedCycle'))}</small></div>`); }
    const ql = WW.quest.carryLine(); if (ql) bar.insertAdjacentHTML('beforeend', `<div class="tcarry" dir="${WW.dir()}">${ql}</div>`);
    const held = X.heldSign();
    if (sel === 'sign' && held) bar.insertAdjacentHTML('beforeend', `<div class="tcarry" dir="${WW.dir()}">${carry() ? '📦' : '🪧'} <b>${esc(T(carry() ? 'cHolding' : 'sgHolding').replace('{i}', held.n).replace('{n}', r.signs.length))}:</b> ${held.b.icon ? held.b.icon + ' ' : ''}${WW.rich(held.b.text)} <small>${esc(T('sgHow'))}</small></div>`);
  };
  // which tool fits the tile you face (null: none)
  X.fitTool = (x, y, e) => {
    const g = G(), ch = g.tileAt(x, y), [W, H] = g.size, border = x <= 0 || y <= 0 || x >= W - 1 || y >= H - 1;
    if (e && e.kind === 'crop') return 'sickle';
    if (CHOP[ch] && !border && !(WW.ep.keep || []).some(p => p[0] === x && p[1] === y)) return 'axe';
    if (CUT[ch]) return 'sickle';
    if (ch === 'o' && !e && X.have('seed') > 0) return 'seed';
    return null;
  };
  X.pick = (k, auto) => {
    if (!X.on()) return;
    if (auto) { sel = k; X.render(); const b = bar && bar.querySelector('.tslot.on'); if (b) { b.classList.add('auto'); setTimeout(() => b.classList.remove('auto'), 600); } return; }
    if (k === 'build' && !(WW.farm && WW.farm.kit())) return;
    if (k === 'seed' && sel === 'seed' && WW.farm && WW.farm.on() && WW.farm.crops().length > 1) WW.farm.nextCrop(); // 4 again: the next crop
    if (k === 'sign') {
      const r = WW.run; if (!(r.signs || []).some(s => !s.placed)) return;
      if (sel === 'sign') { // pressing 5 again: hold the next signpost
        const left = r.signs.filter(s => !s.placed); const i = left.indexOf(X.heldSign().s); r.holding = left[(i + 1) % left.length].id;
      }
    }
    sel = k; WW.sfx('blip'); X.render();
  };
  X.selected = () => sel;

  /* ---------------- using the selected tool on the tile you face ---------------- */
  X.act = (x, y, e) => {
    const g = G(), ch = g.tileAt(x, y), [W, H] = g.size, border = x <= 0 || y <= 0 || x >= W - 1 || y >= H - 1;
    if (sel === 'star') return false; // the game throws a star
    if (sel === 'axe') {
      const c = CHOP[ch];
      if (!c) return hint('axeWhat');
      if (border || (WW.ep.keep || []).some(p => p[0] === x && p[1] === y)) return hint('borderTree', true);
      return harvest(x, y, ch, c, 'chips');
    }
    if (sel === 'sickle') {
      const crop = g.ents.find(o => o.kind === 'crop' && !o.gone && o.x === x && o.y === y);
      if (crop) return crop.type ? (stage(crop) < 2 ? hint('notRipe', true) : WW.farm.reap(crop)) : reap(crop);
      const c = CUT[ch];
      if (!c) return hint('sickleWhat');
      return harvest(x, y, ch, c, 'leaves');
    }
    if (sel === 'seed') return WW.farm && WW.farm.on() && !(g.tileAt(x, y) === 'o' && X.have('seed') > 0) ? WW.farm.plant(x, y, e) : plant(x, y, e);
    if (sel === 'sign') return place(x, y, e);
    if (sel === 'build') return WW.farm.place(x, y, e);
    return false;
  };
  function hint(key, always) { if (always || !told[key]) { told[key] = 1; WW.chris.say(T(key)); } WW.sfx('bad'); return true; }
  function harvest(x, y, ch, [item, n, left, secs], burst) {
    const g = G();
    g.setTile(x, y, left);
    regrow.push({ x, y, ch, at: performance.now() + secs * 1000 });
    X.add(item, n);
    let extra = '';
    if (item === 'fiber') { // tall grass sometimes hides a seed or a coin
      const r = Math.random();
      if (r < 0.25) { X.add('seed', 1); extra = ' · +1 ' + T('item_seed'); }
      else if (r < 0.35) { WW.gain(null, 0, 1, T('item_fiber'), true); extra = ' · +1 ●'; }
    }
    g.shake(); WW.sfx(item === 'wood' ? 'chop' : 'cut');
    WW.fx.burst(x, y, burst);
    fly(x, y, item);
    WW.toast(`+${n} ${esc(T('item_' + item))}${esc(extra)}`, item === 'wood' ? '#8b5a2b' : '#3f8a2e');
    return true;
  }
  // the thing you got flies to the bag
  function fly(x, y, item) {
    if (WW.calm || !bar) return;
    const cv = $('ww-cv'), g = G(), [sx, sy] = g.screenOf(g.player.x, g.player.y), cr = cv.getBoundingClientRect(), k = cr.width / cv.width;
    const target = bar.querySelector('.tbag') || bar; const tr = target.getBoundingClientRect();
    const ic = WW.spriteCanvas(ICON[item] || 'wood', TPAL, 2); ic.className = 'flyicon';
    ic.style.left = (cr.left + ((x - sx * 16) * 16) * k) + 'px'; ic.style.top = (cr.top + ((y - sy * 11) * 16) * k) + 'px';
    document.body.appendChild(ic);
    requestAnimationFrame(() => { ic.style.left = (tr.left + 6) + 'px'; ic.style.top = (tr.top + 2) + 'px'; ic.style.opacity = '0.2'; });
    setTimeout(() => ic.remove(), 700);
  }

  /* seeds: plant them on farm soil, harvest the ripe crop with the sickle for coins */
  function plant(x, y, e) {
    const g = G();
    if (X.have('seed') < 1) return hint('noSeeds', true);
    if (g.tileAt(x, y) !== 'o' || (e && e.kind === 'crop')) return hint('needSoil', true);
    X.use('seed', 1);
    g.ents.push({ kind: 'crop', x, y, t0: performance.now() });
    WW.sfx('blip'); WW.fx.burst(x, y, 'dust'); WW.toast(esc(T('planted')), '#3f8a2e');
    return true;
  }
  const GROW = 45000; // a crop is ripe after 45 seconds
  const stage = o => Math.min(2, Math.floor((performance.now() - o.t0) / ((o.grow || GROW) / 2)));
  function reap(o) {
    if (stage(o) < 2) return hint('notRipe', true);
    o.gone = true;
    const back = Math.random() < 0.5;
    if (back) X.add('seed', 1);
    WW.gain(null, 0, 3, T('why_harvest'), true);
    WW.sfx('coin'); WW.fx.burst(o.x, o.y, 'gold'); G().shake();
    WW.toast(`+3 ● ${esc(T('why_harvest'))}${back ? ' · +1 ' + esc(T('item_seed')) : ''}`, '#c08a1e');
    return true;
  }

  /* grow back after a while (never while you stand there) */
  X.tick = (now) => {
    const g = G(); if (!g.player) return;
    if (bar) {
      bar.classList.toggle('top', g.player.y % 11 >= 9); // the hero walks near the bottom: the bar hops to the top
      // a soft glow on the tool that fits what the hero faces (the axe at a tree, the sickle at tall grass)
      const d = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] }[g.player.dir] || [0, 1];
      const fx = g.player.x + d[0], fy = g.player.y + d[1], fit = sel === 'sign' ? null : X.fitTool(fx, fy, g.entAt(fx, fy));
      if (fit && WW.chris.notice) WW.chris.notice([fx, fy], 'green', 'fit-' + fit); // the first tree, grass or soil: he hops over it
      { const fe = g.entAt(fx, fy); if (fe && fe.kind === 'qgood' && WW.chris.notice) WW.chris.notice([fx, fy], 'green', 'good'); }
      if (fit !== lastFit) { lastFit = fit; bar.querySelectorAll('.tslot').forEach(b => b.classList.toggle('fit', !!fit && b.dataset.k === fit && sel !== fit)); }
    }
    regrow = regrow.filter(r => {
      if (now < r.at) return true;
      if ((g.player.x === r.x && g.player.y === r.y) || g.entAt(r.x, r.y)) { r.at = now + 3000; return true; }
      g.setTile(r.x, r.y, r.ch); WW.fx.burst(r.x, r.y, 'leaves'); return false;
    });
  };

  X.growAll = () => { regrow.forEach(r => (r.at = 0)); X.tick(performance.now()); }; // for the play-tests

  /* ---------------- repairs ---------------- */
  const repairAt = (x, y) => (WW.ep.build || []).find(b => b.kind === 'repair' && b.at.some(p => p[0] === x && p[1] === y) && G().tileAt(x, y) !== b.tile);
  X.bump = (x, y) => { // walked into something solid: is it a broken thing we can fix?
    const b = repairAt(x, y); if (!b) return false;
    openRepair(b); return true;
  };
  function openRepair(b) {
    WW.ui.open({
      cls: 'msgov',
      render(box, h) {
        const lack = missing(b.cost);
        box.innerHTML = `<h3>🔨 ${esc(L(b.name))}</h3><p class="say">${WW.rich(b.ask)}</p><p class="small"><b>${esc(T('costs'))}:</b> ${esc(costText(b.cost))} · ${esc(T('youHave'))}: ${esc(Object.keys(b.cost).map(k => X.have(k) + ' ' + T('item_' + k)).join(' + '))}</p>`;
        if (lack.length) box.insertAdjacentHTML('beforeend', `<p class="say">${esc(lack.map(([k]) => howGet(k)).join(' '))}</p>`);
        const acts = document.createElement('div'); acts.className = 'acts';
        if (!lack.length) acts.appendChild(WW.btn('🔨 ' + esc(T('fixIt')), 'gold', () => { h.close(); doRepair(b); }));
        acts.appendChild(WW.btn(T('close'), 'ghost', () => h.close()));
        box.appendChild(acts);
      }
    });
  }
  function doRepair(b) {
    Object.entries(b.cost).forEach(([k, n]) => X.use(k, n));
    const g = G(), s = WW.save; s.built = s.built || {}; s.built[WW.ep.id] = Array.from(new Set([...(s.built[WW.ep.id] || []), b.id]));
    WW.store(); WW.sheetSync && WW.sheetSync();
    // a short pause while the planks go down one by one, then the way is open
    WW.paused = true; WW.sfx('gate');
    const gap = WW.calm ? 0 : 260;
    b.at.forEach(([x, y], i) => setTimeout(() => { g.setTile(x, y, b.tile); WW.fx.burst(x, y, 'gold'); WW.sfx('chop'); g.shake(); }, gap * (i + 1)));
    setTimeout(() => { WW.paused = false; WW.sfx('win'); WW.chris.say(b.done, null, { at: b.at[0] }); }, gap * (b.at.length + 1) + 150);
  }
  // Christopher: is a broken thing in the way of the next goal?
  X.blockingRepair = (at, reachable) => {
    const b = (WW.ep.build || []).find(o => o.kind === 'repair' && o.at.some(p => G().tileAt(p[0], p[1]) !== o.tile));
    if (!b || reachable(at)) return null;
    const lack = missing(b.cost);
    return { at: b.at[0], text: T('nsFix').replace('{n}', WW.plain(b.name)).replace('{c}', costText(b.cost)) + ' ' + WW.chris.go(b.at[0]) + (lack.length ? ' ' + lack.map(([k]) => howGet(k)).join(' ') : '') };
  };

  /* ---------------- signposts: the compass stone in the world ---------------- */
  // what you carry: the 1.1 signposts (ids in build), or for a 'carry' challenge the sort cards, each going to its bin's marked areas
  const carry = () => WW.ep.challenge.type === 'carry';
  const zoneTiles = (ch, bin) => (ch.zones || []).filter(z => z.bin === bin).flatMap(z => { const out = []; for (let y = z.y; y < z.y + z.h; y++) for (let x = z.x; x < z.x + z.w; x++) out.push([x, y]); return out; });
  const zoneAt = (ch, x, y) => (ch.zones || []).find(z => x >= z.x && y >= z.y && x < z.x + z.w && y < z.y + z.h);
  const signItems = () => {
    const ch = WW.ep.challenge;
    if (ch.type === 'carry') return ch._carry || (ch._carry = ch.items.map((it, k) => ({ id: 'c' + k, kind: 'signpost', text: it.t, icon: it.icon, why: it.why, bin: it.bin, ok: zoneTiles(ch, it.bin) })));
    return (ch.items || []).map(id => (WW.ep.build || []).find(b => b.id === id)).filter(Boolean);
  };
  X.zoneTiles = zoneTiles;
  X.heldSign = () => {
    const r = WW.run; if (!r || !r.signs) return null;
    const left = r.signs.filter(s => !s.placed); if (!left.length) return null;
    const s = left.find(o => o.id === r.holding) || left[0];
    return { s, b: signItems().find(b => b.id === s.id), n: r.signs.indexOf(s) + 1 };
  };
  X.signText = () => {
    const r = WW.run; if (!r.signs) return null;
    const left = r.signs.filter(s => !s.placed || !s.right).length;
    return T(carry() ? 'nsCards' : 'nsSigns').replace('{n}', left);
  };
  // walking into the compass stone, when its type is 'build'
  X.stone = (ch) => {
    const r = WW.run;
    WW.ui.open({
      cls: 'chov',
      render(box, h) {
        const cv = carry(), mark = cv ? '📦' : '🪧';
        box.innerHTML = `<h3>${mark} ${esc(L(ch.title))}</h3><p class="say">${WW.rich(ch.intro)}</p>`;
        if (cv) box.insertAdjacentHTML('beforeend', `<p class="say"><b>${esc(T('cHow'))}</b> ${ch.bins.map(b => `<span class="zchip">${b.icon || ''} ${WW.rich(b.label)}</span>`).join(' ')}</p>`);
        const list = signItems().map((b, i) => { const s = (r.signs || []).find(o => o.id === b.id); return `<li>${s && s.right ? '✅' : s && s.placed ? '❌' : mark} ${i + 1}. ${b.icon ? b.icon + ' ' : ''}${WW.rich(b.text)}</li>`; }).join('');
        const cost = signItems()[0].cost;
        box.insertAdjacentHTML('beforeend', `<ol class="signlist">${list}</ol><p class="small">${cost ? esc(T('sgCost').replace('{c}', costText(cost))) + ' ' : ''}${esc(T('sgHow'))}</p>`);
        if (ch.grid) box.insertAdjacentHTML('beforeend', `<p class="small">🗺️ ${esc(T('sgGrid'))}</p>`);
        const acts = document.createElement('div'); acts.className = 'acts';
        if (!r.signs) acts.appendChild(WW.btn(mark + ' ' + esc(T(cv ? 'cTake' : 'sgTake')), 'gold', () => { r.signs = signItems().map(b => ({ id: b.id, placed: null, right: false, paid: false })); r.holding = r.signs[0].id; sel = 'sign'; h.close(); X.render(); WW.chris.say(T(cv ? 'cStart' : 'sgStart')); }));
        else acts.appendChild(WW.btn(T('close'), 'gold', () => h.close()));
        if ((ch.fallback || cv) && !r.challengeDone) acts.appendChild(WW.btn(esc(T('sgCards')), 'ghost small', () => { h.close(); refundSigns(); WW.challenge(cv ? Object.assign({}, ch, { type: 'sort' }) : Object.assign({}, ch, ch.fallback, { at: ch.at })); }));
        box.appendChild(acts);
      }
    });
  };
  // switching to the cards: signposts come down and their wood and fiber go back in the bag (nothing is lost)
  function refundSigns() {
    const r = WW.run; if (!r.signs || r.challengeDone) return;
    const back = {};
    r.signs.forEach(s => { if (s.paid) Object.entries((signItems().find(b => b.id === s.id) || {}).cost || {}).forEach(([k, n]) => (back[k] = (back[k] || 0) + n)); });
    G().ents.forEach(e => { if (e.kind === 'post') e.gone = true; });
    r.signs = null; r.holding = null; sel = 'star';
    Object.entries(back).forEach(([k, n]) => X.add(k, n)); // added to "got", so the class Sheet never goes backwards
    if (Object.keys(back).length) WW.toast(esc(T('sgRefund').replace('{c}', costText(back))), '#8b5a2b');
    X.render();
  }
  function place(x, y, e) {
    const g = G(), held = X.heldSign();
    if (!held) return false;
    if (e || !g.walkable(x, y) || (x === g.player.x && y === g.player.y)) return hint('sgBlocked', true);
    const { s, b } = held;
    if (!s.paid) {
      const lack = missing(b.cost || {});
      if (lack.length) { WW.chris.say(T('sgNeed').replace('{c}', costText(b.cost)) + ' ' + lack.map(([k]) => howGet(k)).join(' ')); WW.sfx('bad'); return true; }
      Object.entries(b.cost || {}).forEach(([k, n]) => X.use(k, n)); s.paid = true;
    }
    const right = b.ok.some(p => p[0] === x && p[1] === y);
    s.placed = [x, y]; s.right = right;
    g.ents.push({ kind: 'post', x, y, sign: s, b, t0: performance.now() });
    WW.run.challengeTries++;
    if (right) {
      WW.sfx('good'); WW.fx.burst(x, y, 'gold');
      WW.chris.say(`✅ ${T('sgRight')} ${WW.plain(b.text)}. ${L(b.why || '')}`, null, { at: [x, y] });
      if (WW.run.signs.every(o => o.right)) setTimeout(allDone, 700);
    } else {
      WW.sfx('bad'); g.shake();
      WW.chris.say(`❌ ${wrongWhy(b, x, y)} ${T('sgPickUp')}`, null, { at: [x, y] });
    }
    const next = WW.run.signs.find(o => !o.placed); if (next) WW.run.holding = next.id; else sel = 'star';
    X.render();
    return true;
  }
  const gl = t => (typeof t === 'string' ? t : L(t)); // a grid label can be one string or {en, es, fa}
  function gridLabel(grid, x, y) {
    const c = x - grid.x, r = y - grid.y;
    if (c < 0 || r < 0 || c >= grid.cols.length || r >= grid.rows.length) return null;
    return `${gl(grid.rows[r])}, ${gl(grid.cols[c])}`;
  }
  function wrongWhy(b, x, y) {
    const grid = WW.ep.challenge.grid, ch = WW.ep.challenge;
    if (b.bin) { // a card in the wrong marked area
      const z = zoneAt(ch, x, y), bin = z && ch.bins.find(o => o.id === z.bin);
      return (bin ? T('cWrongZone').replace('{z}', WW.plain(bin.label)) : T('cOffZone')) + ' ' + L(b.why || '');
    }
    if (b.grid && grid) {
      const here = gridLabel(grid, x, y), want = gridLabel(grid, b.ok[0][0], b.ok[0][1]);
      if (!here) return T('sgOffGrid');
      return T('sgWrongGrid').replace('{here}', here).replace('{want}', want);
    }
    const [tx, ty] = b.ok.slice().sort((p, q) => Math.abs(p[0] - x) + Math.abs(p[1] - y) - Math.abs(q[0] - x) - Math.abs(q[1] - y))[0];
    const d = WW.chris.dirWord(x, y, tx, ty);
    return (d ? T('sgWrongRel').replace('{d}', d) : T('dirClose')) + ' ' + L(b.why);
  }
  // Space on a placed signpost: a wrong one comes back to your hands, a right one is read out
  X.post = (e) => {
    if (e.sign.right) { WW.chris.say(`✅ ${WW.plain(e.b.text)}`); return; }
    e.gone = true; e.sign.placed = null; WW.run.holding = e.sign.id; sel = 'sign';
    WW.sfx('blip'); WW.chris.say(T('sgPicked')); X.render();
  };
  function allDone() {
    const ch = WW.ep.challenge;
    WW.challengeSolved(ch);
    sel = 'star'; X.render();
    WW.chris.say(`🎉 ${L(ch.success)}`);
  }

  /* drawing: the survey grid under everything, crops and signposts on top */
  const ZCOL = ['#f2c14e', '#2f7fd1', '#e04848', '#3fa34d', '#8e5bd6', '#d98e2b'];
  X.under = (c, sx, sy) => {
    const ch = WW.ep.challenge;
    if (ch && ch.type === 'carry') (ch.zones || []).forEach(z => { // the marked areas, one color for each group
      const col = ZCOL[ch.bins.findIndex(b => b.id === z.bin) % ZCOL.length], ox = (z.x - sx * 16) * 16, oy = (z.y - sy * 11) * 16;
      if (ox > 256 || oy > 176 || ox + z.w * 16 < 0 || oy + z.h * 16 < 0) return;
      c.save(); c.globalAlpha = .34; c.fillStyle = col; c.fillRect(ox, oy, z.w * 16, z.h * 16);
      c.globalAlpha = .9; c.strokeStyle = col; c.lineWidth = 2; c.setLineDash([4, 3]); c.strokeRect(ox + 1, oy + 1, z.w * 16 - 2, z.h * 16 - 2); c.restore();
    });
    const grid = ch && ch.grid; if (!grid) return;
    const ox = (grid.x - sx * 16) * 16, oy = (grid.y - sy * 11) * 16, w = grid.cols.length * 16, hh = grid.rows.length * 16;
    if (ox > 256 || oy > 176 || ox + w < -40 || oy + hh < -40) return;
    c.save();
    c.fillStyle = 'rgba(255,251,232,.28)'; c.fillRect(ox, oy, w, hh);
    c.strokeStyle = 'rgba(34,32,46,.55)'; c.lineWidth = 1;
    for (let i = 0; i <= grid.cols.length; i++) { c.beginPath(); c.moveTo(ox + i * 16 + .5, oy); c.lineTo(ox + i * 16 + .5, oy + hh); c.stroke(); }
    for (let j = 0; j <= grid.rows.length; j++) { c.beginPath(); c.moveTo(ox, oy + j * 16 + .5); c.lineTo(ox + w, oy + j * 16 + .5); c.stroke(); }
    c.restore();
  };
  // the grid's numbers are crisp HTML labels over the map (canvas text this small is too blurry to read)
  let labs = null, labKey = '';
  X.labels = (scr) => {
    const ch = WW.ep && WW.ep.challenge, cv = $('ww-cv'), list = [];
    if (ch && scr && !WW.ui.stack.length) {
      const grid = ch.grid;
      if (grid && G().screenOf(grid.x, grid.y).join() === scr.join()) {
        const ox = grid.x - scr[0] * 16, oy = grid.y - scr[1] * 11;
        grid.cols.forEach((t, i) => list.push({ cls: 'col', px: (ox + i) * 16 + 8, py: oy * 16, t: gl(t) }));
        grid.rows.forEach((t, j) => list.push({ cls: 'row', px: ox * 16, py: (oy + j) * 16 + 8, t: gl(t) }));
      }
      if (ch.type === 'carry') (ch.zones || []).forEach(z => {
        if (G().screenOf(z.x, z.y).join() !== scr.join()) return;
        const b = ch.bins.find(o => o.id === z.bin);
        list.push({ cls: 'col zone', px: (z.x - scr[0] * 16) * 16 + z.w * 8, py: (z.y - scr[1] * 11) * 16, t: `${b.icon || ''} ${WW.plain(b.label)}` });
      });
      if (WW.world) WW.world.labels(scr).forEach(o => list.push({ cls: 'col thing', px: (o.x - scr[0] * 16) * 16 + 8, py: (o.y - scr[1] * 11) * 16 - 2, t: o.t }));
    }
    if (!list.length) { if (labs) labs.style.display = 'none'; return; }
    if (!labs || !labs.isConnected) { labs = document.createElement('div'); labs.className = 'gridlabs'; $('ww-screen').appendChild(labs); labKey = ''; }
    const sr = $('ww-screen').getBoundingClientRect(), cr = cv.getBoundingClientRect(), k = cr.width / cv.width;
    const key = [k, cr.left - sr.left, cr.top - sr.top, WW.lang, ...list.map(o => o.t + o.px + o.py)].join();
    labs.style.display = 'block';
    if (key === labKey) return;
    labKey = key;
    const L0 = cr.left - sr.left, T0 = cr.top - sr.top;
    labs.innerHTML = list.map(o => `<span class="gl ${o.cls}" style="left:${L0 + o.px * k + (o.cls === 'row' ? -3 : 0)}px;top:${T0 + o.py * k - (o.cls === 'row' ? 0 : 2)}px">${esc(o.t)}</span>`).join('');
  };
  WW.onLang && WW.onLang(() => { labKey = ''; X.render(); });
  X.drawEnt = (c, e, x, y, t) => {
    if (e.kind === 'crop' && e.type) return WW.farm.drawCrop(c, e, x, y, t, stage(e));
    if (e.kind === 'crop') {
      const st = stage(e);
      c.fillStyle = '#3f8a2e';
      if (st === 0) { c.fillRect(x + 7, y + 9, 2, 4); c.fillRect(x + 5, y + 8, 2, 2); c.fillRect(x + 9, y + 8, 2, 2); }
      else if (st === 1) { c.fillRect(x + 7, y + 4, 2, 9); c.fillRect(x + 4, y + 6, 3, 3); c.fillRect(x + 9, y + 5, 3, 3); }
      else { c.fillRect(x + 7, y + 4, 2, 9); c.fillStyle = '#f2c14e'; c.fillRect(x + 4, y + 2, 8, 5); c.fillStyle = '#c08a1e'; c.fillRect(x + 5, y + 3, 2, 2); c.fillRect(x + 9, y + 4, 2, 2);
        const k = (Math.sin(t / 250) + 1) / 2; c.fillStyle = `rgba(255,255,255,${k})`; c.fillRect(x + 12, y + 1, 1, 1); }
    } else if (e.kind === 'post') {
      const wob = e.sign.right || WW.calm ? 0 : Math.round(Math.sin(t / 90) * 1.2);
      WW.shadow(c, x, y + 13, 8);
      c.fillStyle = '#22202e'; c.fillRect(x + 7, y + 6, 2, 9);
      c.fillStyle = '#6d4c2f'; c.fillRect(x + 7, y + 6, 1, 9);
      c.fillStyle = '#22202e'; c.fillRect(x + 1 + wob, y + 1, 14, 8);
      c.fillStyle = e.sign.right ? '#3fa34d' : '#c0392b'; c.fillRect(x + 2 + wob, y + 2, 12, 6);
      c.fillStyle = '#fffbe8'; c.fillRect(x + 4 + wob, y + 4, 8, 1); c.fillRect(x + 4 + wob, y + 6, 5, 1);
      c.fillStyle = '#ffffff'; c.font = 'bold 6px sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle';
      c.fillText(e.sign.right ? '✓' : '?', x + 8, y - 3);
    }
  };

  /* ---------------- little pixel icons for the tool bar ---------------- */
  const pad = rows => rows.map(r => (r + '................').slice(0, 16)).concat(Array(16).fill('................')).slice(0, 16);
  Object.assign(WW.SPR, {
    axe: pad(['', '.........kkk', '........kSSSk', '.......kSSSSSk', '.......kSSWSSk', '........kkSSk', '.......kbkkk', '......kbk', '.....kbk', '....kbk', '...kbk', '..kbk', '.kbk', '.kk']),
    sickle: pad(['', '......kkkk', '....kkSSSSk', '...kSSkkkSSk', '..kSk....kSk', '..kSk.....kk', '..kSk', '...kSk', '....kSkk', '.....kkbk', '.......kbk', '........kbk', '.........kbk', '..........kk']),
    seedIcon: pad(['', '', '.......kk', '......kgGk', '.......kgk.kk', '.......kgkkgGk', '........kggk', '......kkkkk', '.....kooooOk', '....kooOoooOk', '....kOoooOook', '.....kooOook', '......kkkkk']),
    signIcon: pad(['', '.kkkkkkkkkkkkk', '.kbbbbbbbbbbbk', '.kbWWWWWWWWbbk', '.kbbbbbbbbbbbk', '.kbWWWWWbbbbbk', '.kkkkkkkkkkkkk', '......kbk', '......kbk', '......kbk', '......kbk', '......kbk', '....kkkkkkk']),
    wood: pad(['', '', '', '..kkkkkkkkkk', '.kbbbbbbbbkOk', 'kbBbbbBbbbkOOk', 'kbbbbbbbbbkOok', 'kbbBbbbbBbkOOk', '.kbbbbbbbbkOk', '..kkkkkkkkkk']),
    fiber: pad(['', '...g..g..g', '...gg.g.gg', '....g.g.g', '....ggggg', '.....ggg', '....kkkkk', '....kOOOk', '.....ggg', '....g.g.g', '...g..g..g', '...g..g..g']),
    hammerIcon: pad(['', '..kkkkkk', '.kSSSSSSk', '.kSSSSSSkk', '..kkkkkkSk', '.....kbk.k', '.....kbk', '.....kbk', '.....kbk', '.....kbk', '.....kbk', '.....kbk', '.....kkk']),
    starIcon: pad(['', '.......kk', '......kyyk', '......kyyk', '.kkkkkyyyykkkkk', '.kyyyyyWyyyyyyk', '..kyyyyyyyyyyk', '...kyyyyyyyyk', '...kyyyyyyyyk', '..kyyykkkyyyk', '..kyyk...kyyk', '..kkk.....kkk'])
  });

})();
