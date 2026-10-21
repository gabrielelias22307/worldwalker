/* WORLDWALKER engine · the compass stone moved into the world, and the earned tools' secrets
   Challenge types that happen on the map (the card version is always one tap away: "Use cards instead"):
     carry  – (sort in the world) carry each card to the right marked area      -> tools.js (like the 1.1 signposts)
     route  – (order in the world) visit the stops in the right order
     site   – (claim in the world) visit each site, then plant the flag and say why
     survey – (table in the world) visit each survey post to read its facts, then answer
     levers – (combo in the world) pull the levers on the map, then test them at the stone
   Each one adds spots: [[x, y], ...] to the challenge: one map spot per item, option, table row or switch, in the same order.
   secret: { tool, at: [x, y], text } — a chest only an earned tool reaches: the Canoe paddles on rivers (~), the Sail crosses
   deep water (=) too, and every other tool opens a tool gate (G) on the map. Optional: a required path never needs a tool. */
(function () {
  const L = t => WW.L(t), T = k => WW.T(k), esc = s => WW.esc(s);
  const Wd = WW.world = {};
  const G = () => WW.game;
  Wd.BASE = { carry: 'sort', route: 'order', site: 'claim', survey: 'table', levers: 'combo', build: null };
  Wd.isWorld = ch => !!(ch && ch.type in Wd.BASE);
  const tool = () => WW.ep && WW.ep.secret && WW.TOOLS.find(t => t.id === WW.ep.secret.tool);

  /* ---------------- things on the map ---------------- */
  // spots: [[x, y], ...] — one map spot for each item (route), option (site), table row (survey) or switch (levers)
  Wd.norm = (ch) => {
    const list = ch.type === 'route' ? ch.items : ch.type === 'site' ? ch.options : ch.type === 'levers' ? ch.switches : null;
    if (list) list.forEach((o, i) => { o.at = o.at || (ch.spots || [])[i]; });
  };
  Wd.ents = (ep) => {
    const ch = ep.challenge, out = []; Wd.norm(ch);
    if (ch.type === 'route') ch.items.forEach((it, i) => out.push({ kind: 'stop', x: it.at[0], y: it.at[1], i }));
    if (ch.type === 'site') ch.options.forEach((o, i) => out.push({ kind: 'site', x: o.at[0], y: o.at[1], i }));
    if (ch.type === 'survey') ch.spots.forEach((p, i) => out.push({ kind: 'survey', x: p[0], y: p[1], i }));
    if (ch.type === 'levers') ch.switches.forEach((s, i) => out.push({ kind: 'lever', x: s.at[0], y: s.at[1], i }));
    if (ep.secret) out.push({ kind: 'chest', x: ep.secret.at[0], y: ep.secret.at[1] });
    (ep.finds || []).forEach((f, i) => out.push({ kind: 'clue', x: f.clueAt[0], y: f.clueAt[1], i }));
    return out;
  };
  Wd.KINDS = ['stop', 'site', 'survey', 'lever', 'chest', 'clue'];
  Wd.setup = (ep) => {
    const r = WW.run, ch = ep.challenge;
    r.worldOn = false; r.route = 0; r.seen = new Set(); r.levers = ch.type === 'levers' ? ch.switches.map(s => s.start || 0) : null;
  };

  /* the earned tools: canoe on rivers, sail on deep water, the episode's tool gate */
  Wd.pass = ch => {
    if (ch === '~') return WW.hasTool('canoe') || WW.hasTool('sail');
    if (ch === '=') return WW.hasTool('sail');
    if (ch === 'G') { const t = tool(); return !!(t && WW.hasTool(t.id)); }
    return false;
  };
  Wd.bump = (x, y) => { // walked into the Grump's fog (a question) or a closed tool gate (what opens it)
    if (Wd.fogAt(x, y)) { const b = G().ents.find(e => e.kind === 'boss'); if (b) G().interact(b); return true; }
    if (G().tileAt(x, y) !== 'G') return false;
    const t = tool(); if (!t) return false;
    WW.chris.say(T(WW.S['gate_' + t.id] ? 'gate_' + t.id : 'gateNeed').replace('{t}', t.icon + ' ' + L(t.name)).replace('{e}', t.ep)); WW.sfx('bad');
    return true;
  };

  /* ---------------- the stone ---------------- */
  const cards = ch => () => { const h = WW.ui.top(); if (h) h.close(); WW.challenge(Object.assign({}, ch, { type: Wd.BASE[ch.type] })); };
  function stonePanel(ch, how, extra, go) {
    WW.ui.open({
      cls: 'chov',
      render(box, h) {
        box.innerHTML = `<h3>🧭 ${esc(L(ch.title))}</h3><p class="say">${WW.rich(ch.intro)}</p><p class="say"><b>${esc(T(how))}</b></p>${extra ? extra() : ''}`;
        const acts = document.createElement('div'); acts.className = 'acts';
        if (go) acts.appendChild(WW.btn(go.label, 'gold', () => { h.close(); go.fn(); }));
        else acts.appendChild(WW.btn(T('close'), 'gold', () => h.close()));
        if (!WW.run.challengeDone) acts.appendChild(WW.btn(esc(T('sgCards')), 'ghost small', cards(ch)));
        box.appendChild(acts);
      }
    });
  }
  Wd.stone = (ch) => {
    const r = WW.run;
    if (ch.type === 'carry') return WW.tools.stone(ch);
    if (r.challengeDone) return WW.ui.message('', ch.success);
    const start = () => { r.worldOn = true; WW.chris.say(T('w_' + ch.type + 'Go')); };
    if (ch.type === 'route') return stonePanel(ch, 'w_routeHow', () => `<p class="small">${esc(T('w_routeSeen').replace('{n}', r.route).replace('{m}', ch.items.length))}</p>`, r.worldOn ? null : { label: '🧭 ' + esc(T('wStart')), fn: start });
    if (ch.type === 'site') return stonePanel(ch, 'w_siteHow', () => `<p class="small">${esc(T('w_siteSeen').replace('{n}', r.seen.size).replace('{m}', ch.options.length))}</p>`, r.worldOn ? null : { label: '🚩 ' + esc(T('wStart')), fn: start });
    if (ch.type === 'survey') {
      const all = r.seen.size >= ch.spots.length;
      if (all) return WW.challenge(Object.assign({}, ch, { type: 'table' }));
      return stonePanel(ch, 'w_surveyHow', () => `<p class="small">${esc(T('w_surveySeen').replace('{n}', r.seen.size).replace('{m}', ch.spots.length))}</p>`, r.worldOn ? null : { label: '📋 ' + esc(T('wStart')), fn: start });
    }
    if (ch.type === 'levers') {
      if (!r.worldOn) return stonePanel(ch, 'w_leversHow', null, { label: '🕹️ ' + esc(T('wStart')), fn: start });
      return testLevers(ch);
    }
  };

  /* ---------------- walking into the things ---------------- */
  Wd.interact = (e) => {
    const r = WW.run, ch = WW.ep.challenge, g = G();
    if (e.kind === 'chest') return openChest(e);
    if (e.kind === 'clue') return readClue(e);
    if (r.challengeDone) { WW.chris.say(L(ch.success)); return; }
    if (!r.worldOn) { WW.chris.say(T('wStoneFirst')); WW.sfx('bad'); return; }
    if (e.kind === 'stop') {
      const it = ch.items[e.i];
      if (e.i < r.route) return WW.chris.say(`✅ ${WW.plain(it.t)}`);
      if (e.i === r.route) {
        r.route++; WW.sfx('good'); WW.fx.burst(e.x, e.y, 'gold');
        if (r.route >= ch.items.length) { WW.challengeSolved(ch); WW.chris.say(`🎉 ${L(ch.success)}`); return; }
        WW.chris.say(`✅ ${r.route}. ${WW.plain(it.t)}. ${T('w_routeNext')}`, null, { at: [e.x, e.y] });
      } else {
        r.challengeTries++; WW.sfx('bad'); g.shake();
        WW.chris.say(`❌ ${T('w_routeWrong')} ${L(ch.why || '')}`, null, { at: [e.x, e.y] });
      }
      return;
    }
    if (e.kind === 'site') {
      const o = ch.options[e.i];
      r.seen.add(e.i); WW.sfx('blip');
      if (r.seen.size < ch.options.length) {
        return WW.ui.message(`🚩 ${WW.plain(o.name)}`, `${o.desc ? L(o.desc) + ' ' : ''}${T('w_siteMore').replace('{n}', ch.options.length - r.seen.size)}`);
      }
      return WW.challenge(Object.assign({}, ch, { type: 'claim', pickAt: e.i }));
    }
    if (e.kind === 'survey') {
      const row = ch.table.rows[e.i]; r.seen.add(e.i); WW.sfx('blip');
      const tbl = `<table class="dtbl"><tr>${ch.table.head.map(c => `<th>${WW.rich(c)}</th>`).join('')}</tr><tr>${row.map(c => `<td>${WW.rich(c)}</td>`).join('')}</tr></table>`;
      const left = ch.spots.length - r.seen.size;
      return WW.ui.open({
        cls: 'msgov',
        render(box, h) {
          box.innerHTML = `<h3>📋 ${esc(T('w_surveyPost'))}</h3><div class="tblwrap">${tbl}</div><p class="say">${esc(left ? T('w_surveyLeft').replace('{n}', left) : T('w_surveyAll'))}</p>`;
          const a = document.createElement('div'); a.className = 'acts'; a.appendChild(WW.btn(T('cont') + ' ▶', 'gold', () => h.close())); box.appendChild(a);
        }
      });
    }
    if (e.kind === 'lever') {
      const s = ch.switches[e.i];
      r.levers[e.i] = (r.levers[e.i] + 1) % s.states.length; WW.sfx('pop'); g.shake();
      WW.chris.say(`${s.icon || '🕹️'} ${WW.plain(s.name)}: <b>${esc(WW.plain(s.states[r.levers[e.i]]))}</b>. ${T('w_leverTest')}`);
    }
  };
  function testLevers(ch) {
    const r = WW.run, key = r.levers.join(','), res = ch.results[key] || ch.otherwise || { ok: false, t: '' };
    WW.ui.open({
      cls: 'chov',
      render(box, h) {
        box.innerHTML = `<h3>🕹️ ${esc(L(ch.title))}</h3><ul class="signlist">${ch.switches.map((s, i) => `<li>${s.icon || ''} <b>${WW.rich(s.name)}</b>: ${WW.rich(s.states[r.levers[i]])}</li>`).join('')}</ul>`;
        if (res.show) box.insertAdjacentHTML('beforeend', `<div class="outs">${res.show.map(o => `<span class="out ${o.ok ? 'good' : 'badp'}">${o.icon || ''} ${WW.rich(o.t)}</span>`).join('')}</div>`);
        box.insertAdjacentHTML('beforeend', `<div class="fb ${res.ok ? 'right' : 'wrong'}"><b>${esc(T(res.ok ? 'right' : 'wrong'))}</b> ${WW.rich(res.t || '')}</div>`);
        const a = document.createElement('div'); a.className = 'acts';
        a.appendChild(WW.btn(T(res.ok ? 'cont' : 'close') + ' ▶', 'gold', () => { h.close(); if (res.ok) WW.chris.say(`🎉 ${L(ch.success)}`); }));
        if (!res.ok) { a.appendChild(WW.btn(esc(T('sgCards')), 'ghost small', cards(ch))); box.insertAdjacentHTML('beforeend', `<p class="small">${esc(T('w_leverAgain'))}</p>`); }
        box.appendChild(a);
      }
    });
    r.challengeTries++;
    if (res.ok) WW.challengeSolved(ch); else WW.sfx('bad');
  }

  /* ---------------- finds (FUN-PASS section 6): a clue note on the map leads to a hidden spot ----------------
     finds: [{ clueAt: [x, y], at: [x, y], clue: {..}, text: {..}, decor: 'shell' (optional) }]
     Reading the note gives the clue (Christopher repeats it in his bubble). Stepping on the right spot: +3 coins and, if the
     find has one, a decoration for the camp. Each find counts once per hero (save.finds). */
  const findKey = i => WW.ep.id + ':' + i;
  const found = i => (WW.save.finds || []).includes(findKey(i));
  function readClue(e) {
    const f = WW.ep.finds[e.i];
    WW.run.clues = WW.run.clues || new Set(); WW.run.clues.add(e.i);
    if (found(e.i)) return WW.chris.say(`✅ ${T('findDone')}`);
    WW.sfx('blip');
    WW.ui.message(`📜 ${T('findClue')}`, f.clue, () => WW.chris.say(`📜 ${L(f.clue)}`));
  }
  Wd.onStep = (x, y) => {
    const ep = WW.ep; if (!ep.finds) return false;
    const i = ep.finds.findIndex(f => f.at[0] === x && f.at[1] === y);
    if (i < 0 || found(i)) return false;
    const f = ep.finds[i], s = WW.save;
    s.finds = s.finds || []; s.finds.push(findKey(i));
    let extra = '';
    if (f.decor && WW.camp && WW.camp.give(f.decor)) { const d = WW.camp.DECOR.find(o => o.id === f.decor); if (d) extra = ` ${d.icon} ${T('findDecor').replace('{d}', L(d.name))}`; }
    WW.store(); WW.sheetSync && WW.sheetSync();
    WW.fx.burst(x, y, 'gold'); WW.sfx('win');
    WW.gain(null, 0, 3, T('why_find'), true);
    WW.toast(`✨ +3 ● ${esc(T('why_find'))}`, '#c08a1e');
    WW.ui.message(`✨ ${T('findFound')}`, L(f.text) + extra);
    return true;
  };
  Wd.foundCount = () => (WW.ep.finds || []).filter((_, i) => found(i)).length;

  /* the secret chest */
  function openChest(e) {
    const ep = WW.ep, s = WW.save, t = tool();
    s.secrets = s.secrets || [];
    if (s.secrets.includes(ep.id)) return WW.chris.say(`${t ? t.icon + ' ' : ''}${L(ep.secret.text)}`);
    s.secrets.push(ep.id); WW.store(); WW.sheetSync && WW.sheetSync();
    WW.fx.burst(e.x, e.y, 'gold'); WW.sfx('win');
    WW.gain(null, 0, 5, T('why_secret'), true);
    WW.toast(`🎁 +5 ● ${esc(T('why_secret'))}`, '#c08a1e');
    WW.ui.message(`🎁 ${t ? t.icon + ' ' : ''}${T('secretFound')}`, ep.secret.text);
  }

  /* where to go next for the world challenge (Christopher and the arrow) */
  Wd.next = () => {
    const r = WW.run, ch = WW.ep.challenge;
    if (!r.worldOn || r.challengeDone) return null;
    if (ch.type === 'route') return ch.items[r.route].at;
    if (ch.type === 'site') { const i = ch.options.findIndex((_, k) => !r.seen.has(k)); return i < 0 ? null : ch.options[i].at; }
    if (ch.type === 'survey') { const i = ch.spots.findIndex((_, k) => !r.seen.has(k)); return i < 0 ? ch.at : ch.spots[i]; }
    return null;
  };
  Wd.nextText = () => {
    const r = WW.run, ch = WW.ep.challenge;
    if (!Wd.isWorld(ch) || ch.type === 'carry' || ch.type === 'build' || !r.worldOn) return null;
    if (ch.type === 'route') return T('ns_route').replace('{n}', r.route + 1).replace('{m}', ch.items.length);
    if (ch.type === 'site') return r.seen.size < ch.options.length ? T('ns_site').replace('{n}', ch.options.length - r.seen.size) : T('ns_siteDone');
    if (ch.type === 'survey') return r.seen.size < ch.spots.length ? T('w_surveyLeft').replace('{n}', ch.spots.length - r.seen.size) : T('w_surveyAll');
    if (ch.type === 'levers') return T('w_leverTest');
  };

  /* ---------------- the Grump trial in the world (FUN-PASS section 3) ----------------
     When the Grump comes out, rings of its fog close the way to it (one ring for each right answer but the last).
     Walk into the fog: one question. Right: the outer ring clears and you walk on. Wrong: a heart, the reason, and the
     question comes back later. The last right answer breaks its shield. */
  Wd.fogSetup = () => {
    const g = G(), ep = WW.ep, r = WW.run, [W, H] = g.size, need = ep.boss.need || 3, [bx, by] = ep.boss.at;
    const dist = new Map([[bx + ',' + by, 0]]), q = [[bx, by]];
    while (q.length) {
      const [x, y] = q.shift(), d = dist.get(x + ',' + y);
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const nx = x + dx, ny = y + dy, k = nx + ',' + ny;
        if (nx < 0 || ny < 0 || nx >= W || ny >= H || dist.has(k) || WW.solid(g.tileAt(nx, ny))) continue;
        dist.set(k, d + 1); q.push([nx, ny]);
      }
    }
    const pd = dist.get(g.player.x + ',' + g.player.y) ?? 99;
    const rings = [];
    for (let k = need; k >= 2; k--) { // need-1 rings, outer first (the last answer is asked at the Grump); never around the hero
      if (k >= pd) continue;
      const ring = [...dist].filter(([, d]) => d === k).map(([key]) => key.split(',').map(Number));
      if (ring.length) rings.push(ring);
    }
    r.fog = { rings, cleared: 0, set: new Set(rings.flat().map(p => p.join(','))), st: {} };
  };
  Wd.fogAt = (x, y) => { const f = WW.run && WW.run.fog; return !!(f && f.set.has(x + ',' + y)); };
  Wd.fogAsk = (onWin) => {
    const r = WW.run, f = r.fog;
    if (!f) return WW.bossTrial(WW.ep.boss, onWin);
    f.st.onCrack = () => clearRing();
    WW.bossTrial(WW.ep.boss, onWin, f.st);
  };
  function clearRing() {
    const f = WW.run.fog, g = G(); if (!f) return;
    if (f.cleared >= f.rings.length) return backAway();
    const ring = f.rings[f.cleared++];
    ring.forEach(([x, y]) => f.set.delete(x + ',' + y));
    // a short pause while the fog lifts
    WW.paused = true; WW.sfx('gate'); g.shake();
    ring.forEach(([x, y], i) => setTimeout(() => WW.fx.burst(x, y, i % 2 ? 'poof' : 'gold'), WW.calm ? 0 : Math.min(500, i * 25)));
    setTimeout(() => { WW.paused = false; WW.chris.say(f.cleared < f.rings.length ? T('fogMore').replace('{n}', (WW.ep.boss.need || 3) - (f.st.broken || 0)) : T('fogLast')); }, WW.calm ? 100 : 650);
  }
  // no ring was left (the hero was already close): the Grump backs away a few steps, so the student walks between questions
  function backAway() {
    const g = G(), b = g.ents.find(e => e.kind === 'boss'), p = g.player, [W, H] = g.size;
    const dist = new Map([[p.x + ',' + p.y, 0]]), q = [[p.x, p.y]];
    while (q.length) { const [x, y] = q.shift(), d = dist.get(x + ',' + y); if (d >= 6) continue; for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) { const nx = x + dx, ny = y + dy, k = nx + ',' + ny; if (nx < 1 || ny < 1 || nx >= W - 1 || ny >= H - 1 || dist.has(k) || !g.walkable(nx, ny)) continue; dist.set(k, d + 1); q.push([nx, ny]); } }
    const sx = Math.floor(p.x / 16), sy = Math.floor(p.y / 11); // stay on the hero's screen
    const spots = [...dist].filter(([k, d]) => { const [x, y] = k.split(',').map(Number); return d >= 3 && d <= 5 && Math.floor(x / 16) === sx && Math.floor(y / 11) === sy && !g.entAt(x, y); })
      .map(([k, d]) => { const [x, y] = k.split(',').map(Number); return { x, y, s: d * 10 + Math.abs(x - p.x) + Math.abs(y - p.y) + ((x - p.x) * (b.x - p.x) + (y - p.y) * (b.y - p.y) > 0 ? 8 : 0) }; }) // farther, and on the Grump's side
      .sort((m, n) => n.s - m.s);
    if (!spots.length || !b) return;
    WW.paused = true; WW.fx.burst(b.x, b.y, 'poof'); WW.sfx('bad');
    b.x = spots[0].x; b.y = spots[0].y;
    setTimeout(() => { WW.fx.burst(b.x, b.y, 'purple'); WW.paused = false; WW.chris.say(T('grumpBack'), null, { at: [b.x, b.y] }); }, WW.calm ? 100 : 450);
  }
  Wd.drawFog = (c, sx, sy, t) => {
    const f = WW.run && WW.run.fog; if (!f || !f.set.size) return;
    f.set.forEach(k => {
      const [x, y] = k.split(',').map(Number), px = (x - sx * 16) * 16, py = (y - sy * 11) * 16;
      if (px < -16 || py < -16 || px > 256 || py > 176) return;
      const w = WW.calm ? 0 : Math.sin(t / 500 + x * 1.7 + y), a = .78 + w * .06;
      c.fillStyle = `rgba(58,44,85,${a})`; c.fillRect(px, py, 16, 16);
      c.fillStyle = `rgba(110,92,150,${a})`;
      c.beginPath(); c.arc(px + 5 + w * 2, py + 6, 5, 0, 7); c.arc(px + 11 - w * 2, py + 10, 6, 0, 7); c.fill();
      c.fillStyle = 'rgba(200,190,230,.25)'; c.fillRect(px + 3, py + 4, 3, 1);
    });
  };

  /* ---------------- drawing ---------------- */
  Wd.draw = (c, e, x, y, t) => {
    const r = WW.run, ch = WW.ep.challenge;
    const glow = (col, a) => { c.fillStyle = col.replace('A', a); c.beginPath(); c.arc(x + 8, y + 9, 9, 0, 7); c.fill(); };
    const pulse = WW.calm ? 0.5 : (Math.sin(t / 300 + e.i) + 1) / 2;
    WW.shadow(c, x, y + 13, 10);
    if (e.kind === 'stop') { // a little station sign
      const done = e.i < r.route;
      if (!done && r.worldOn) glow('rgba(255,236,150,A)', .2 + pulse * .2);
      c.fillStyle = '#22202e'; c.fillRect(x + 7, y + 5, 2, 10); c.fillRect(x + 2, y + 1, 12, 7);
      c.fillStyle = done ? '#3fa34d' : '#2f6fd6'; c.fillRect(x + 3, y + 2, 10, 5);
      c.fillStyle = '#fffbe8'; c.fillRect(x + 5, y + 4, 6, 1);
    } else if (e.kind === 'site') { // a flag pole
      if (r.worldOn && !r.challengeDone) glow('rgba(255,236,150,A)', .15 + pulse * .2);
      c.fillStyle = '#22202e'; c.fillRect(x + 4, y + 1, 2, 14);
      c.fillStyle = r.seen.has(e.i) ? '#e04848' : '#fffbe8'; c.fillRect(x + 6, y + 2, 8, 5); c.fillStyle = '#22202e'; c.fillRect(x + 6, y + 7, 8, 1);
    } else if (e.kind === 'survey') { // a post with a clipboard
      if (r.worldOn && !r.seen.has(e.i)) glow('rgba(255,236,150,A)', .15 + pulse * .2);
      c.fillStyle = '#6d4c2f'; c.fillRect(x + 7, y + 8, 2, 7);
      c.fillStyle = '#22202e'; c.fillRect(x + 3, y + 1, 10, 10); c.fillStyle = r.seen.has(e.i) ? '#d8f0d0' : '#fffbe8'; c.fillRect(x + 4, y + 2, 8, 8);
      c.fillStyle = '#9aa3ad'; for (let k = 0; k < 3; k++) c.fillRect(x + 5, y + 4 + k * 2, 6, 1);
    } else if (e.kind === 'lever') { // a lever on a post; it leans with its setting
      const st = r.levers ? r.levers[e.i] : 0, n = ch.switches[e.i].states.length, lean = n > 1 ? -4 + 8 * st / (n - 1) : 0;
      if (r.worldOn) glow('rgba(255,236,150,A)', .12 + pulse * .15);
      c.fillStyle = '#5e636b'; c.fillRect(x + 3, y + 11, 10, 4); c.fillStyle = '#9aa3ad'; c.fillRect(x + 4, y + 11, 8, 1);
      c.strokeStyle = '#22202e'; c.lineWidth = 2; c.beginPath(); c.moveTo(x + 8, y + 12); c.lineTo(x + 8 + lean, y + 4); c.stroke();
      c.fillStyle = '#e04848'; c.beginPath(); c.arc(x + 8 + lean, y + 4, 2.5, 0, 7); c.fill();
    } else if (e.kind === 'clue') { // a rolled-up note with a ?
      const done = (WW.save.finds || []).includes(WW.ep.id + ':' + e.i);
      if (!done) glow('rgba(255,236,150,A)', .1 + pulse * .15);
      c.fillStyle = '#22202e'; c.fillRect(x + 3, y + 6, 10, 7);
      c.fillStyle = done ? '#d8f0d0' : '#f3e3b5'; c.fillRect(x + 4, y + 7, 8, 5);
      c.fillStyle = '#c79a5b'; c.fillRect(x + 2, y + 6, 2, 7); c.fillRect(x + 12, y + 6, 2, 7);
      c.fillStyle = '#22202e'; c.font = 'bold 7px sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(done ? '✓' : '?', x + 8, y + 2);
    } else if (e.kind === 'chest') {
      const open = (WW.save.secrets || []).includes(WW.ep.id);
      if (!open) glow('rgba(255,236,150,A)', .2 + pulse * .25);
      c.fillStyle = '#22202e'; c.fillRect(x + 2, y + 5, 12, 10);
      c.fillStyle = '#8b5a2b'; c.fillRect(x + 3, y + (open ? 9 : 6), 10, open ? 5 : 8);
      c.fillStyle = '#f2c14e'; c.fillRect(x + 3, y + (open ? 9 : 9), 10, 1); c.fillRect(x + 7, y + 8, 2, 3);
      if (open) { c.fillStyle = '#6d4424'; c.fillRect(x + 3, y + 3, 10, 3); }
    }
  };
  // a canoe (or a sail boat) under the hero on water
  Wd.boat = (c, x, y, ch) => {
    if (ch !== '~' && ch !== '=') return;
    c.fillStyle = '#22202e'; c.fillRect(x, y + 9, 16, 6);
    c.fillStyle = '#a0703f'; c.fillRect(x + 1, y + 10, 14, 4); c.fillStyle = '#6d4424'; c.fillRect(x + 2, y + 13, 12, 1);
    if (ch === '=') { c.fillStyle = '#22202e'; c.fillRect(x + 12, y - 6, 1, 16); c.fillStyle = '#fffbe8'; c.fillRect(x + 13, y - 5, 3, 9); }
  };
  /* labels over the map (crisp HTML): what each stop, site, survey post and lever is */
  Wd.labels = (scr) => {
    const ch = WW.ep.challenge, r = WW.run, out = [];
    const on = (x, y) => G().screenOf(x, y).join() === scr.join();
    if (ch.type === 'route') ch.items.forEach((it, i) => on(...it.at) && out.push({ x: it.at[0], y: it.at[1], t: `${i < r.route ? '✓ ' : ''}${it.icon ? it.icon + ' ' : ''}${WW.plain(it.t)}` }));
    if (ch.type === 'site') ch.options.forEach((o, i) => on(...o.at) && out.push({ x: o.at[0], y: o.at[1], t: `${o.icon ? o.icon + ' ' : ''}${WW.plain(o.name)}` }));
    if (ch.type === 'survey') ch.spots.forEach((p, i) => on(...p) && out.push({ x: p[0], y: p[1], t: r.seen.has(i) ? '✓ ' + WW.plain(ch.table.rows[i][0]) : '📋 ?' }));
    if (ch.type === 'levers' && r.levers) ch.switches.forEach((s, i) => on(...s.at) && out.push({ x: s.at[0], y: s.at[1], t: `${s.icon ? s.icon + ' ' : ''}${WW.plain(s.states[r.levers[i]])}` }));
    return out;
  };
})();
