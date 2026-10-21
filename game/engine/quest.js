/* WORLDWALKER engine · the episode quest
   A quest giver (gold !) asks for help -> you talk to a contact (?) -> you do one action -> you go back to the giver.
   The action is one of:
     find  – use the contact's clue to find a secret spot and walk onto it
     fight – beat an Ink Thief in a short question duel
     trade – offer the right goods to a trader. If every choice has at: [x, y], the goods sit on the map: walk into one to
             pick it up, carry it to the trader. A wrong one: the trader says why and it goes back to its place.
     chase – the Ink Thief ran off and dropped the stolen thing in pieces. Each clue is answered by walking to the right
             place (clues: [{ t, zones, found, noBy }]). Then catch the thief: it hops away (hops: [[x, y], ...]) and is
             caught at at: [x, y].
   The compass stone stays shut until the quest is done. See docs/EPISODE-FORMAT.md ("quest"). */
(function () {
  const L = t => WW.L(t), T = k => WW.T(k);
  // quest steps: 0 not started · 1 go to the contact · 2 do the action · 3 go back to the giver · 4 done
  const Q = WW.quest = {};
  const THIEF = { g: '#a04848', G: '#6e2c2c', w: '#ffffff', r: '#2b1414' };
  Q.THIEF = THIEF;

  Q.on = () => !!(WW.ep && WW.ep.quest);
  Q.step = () => (WW.run && WW.run.quest) || 0;
  Q.done = () => !Q.on() || Q.step() >= 4;
  function set(n) { WW.run.quest = n; WW.ui.quest(); }

  /* make the map entities for the quest */
  Q.ents = (ep) => {
    const q = ep.quest, out = [];
    if (!q) return out;
    q.giver.id = 'qgiver'; q.contact.id = 'qcontact';
    out.push({ kind: 'qnpc', role: 'giver', x: q.giver.x, y: q.giver.y, ref: q.giver, phase: 7 });
    out.push({ kind: 'qnpc', role: 'contact', x: q.contact.x, y: q.contact.y, ref: q.contact, phase: 11 });
    const a = q.action;
    if (a.type === 'trade') { a.trader.id = 'qtrader'; out.push({ kind: 'qnpc', role: 'trader', x: a.trader.x, y: a.trader.y, ref: a.trader, phase: 13 }); }
    if (a.type === 'fight') out.push({ kind: 'qfoe', x: a.at[0], y: a.at[1], visible: false });
    if (a.type === 'chase') { const h = (a.hops || [])[0] || a.at; out.push({ kind: 'qfoe', x: h[0], y: h[1], visible: false, chase: true, hop: 0 }); }
    if (a.type === 'trade' && Q.goods()) a.choices.forEach((c, i) => out.push({ kind: 'qgood', x: c.at[0], y: c.at[1], i, home: c.at.slice() }));
    if (a.type === 'find') out.push({ kind: 'qspot', x: a.at[0], y: a.at[1] });
    return out;
  };

  const item = () => WW.ep.quest.action.item;
  const itemName = () => (item() ? `${item().icon || '🎁'} ${WW.plain(item().name)}` : '');
  const say = (who, text, after) => WW.ui.talk({ id: who.id, name: who.name, role: who.role, look: who.look, lines: [text] }, after);

  Q.goods = () => { const a = WW.ep.quest && WW.ep.quest.action; return !!(a && a.type === 'trade' && a.choices.every(c => c.at)); };
  const plainT = t => WW.plain(t);
  const join = (t, pre, k) => ({ en: pre + t.en + ' ' + WW.S[k].en, es: pre + t.es + ' ' + WW.S[k].es, fa: pre + t.fa + ' ' + WW.S[k].fa }); // a line + one of the game's own lines

  /* walking into a quest person or the thief */
  Q.interact = (e, ents) => {
    const q = WW.ep.quest, s = Q.step();
    if (e.kind === 'qfoe') return e.chase ? catchThief(e) : fight(e);
    if (e.kind === 'qgood') return pickGood(e);
    const who = e.ref;
    if (e.role === 'giver') {
      if (s === 0) WW.ui.talk(Object.assign({}, who, { lines: q.giver.lines, doneLabel: T('accept') }), () => { set(1); WW.sfx('good'); WW.toast('📜 ' + WW.esc(T('newQuest')) + ': ' + WW.esc(WW.plain(q.title)), '#c08a1e'); });
      else if (s < 3) say(who, q.giver.wait);
      else if (s === 3) say(who, q.giver.thanks, () => finish());
      else say(who, T('thanksAgain'));
    } else if (e.role === 'contact') {
      if (s === 1) WW.ui.talk(Object.assign({}, who, { lines: q.contact.lines }), () => { set(2); showAction(ents); });
      else if (s === 0) say(who, T('busy'));
      else if (s === 2) say(who, q.contact.lines[q.contact.lines.length - 1]);
      else say(who, T('goodLuck'));
    } else if (e.role === 'trader') {
      if (s !== 2) return say(who, s < 2 ? T('busy') : T('goodLuck'));
      const a = q.action;
      if (Q.goods()) return offer(e);
      WW.ui.talk(Object.assign({}, who, { lines: a.trader.lines, ask: { stat: q.stat, q: a.q, choices: a.choices } }), () => {
        set(3); WW.sfx('coin'); WW.fx.burst(e.x, e.y, 'gold');
        WW.toast(`🤝 ${WW.esc(T('traded'))}${item() ? ' · ' + WW.esc(itemName()) : ''}`, '#2aa198');
      });
    }
    return true;
  };

  /* ---- a real trade: carry the goods to the trader ---- */
  function pickGood(e) {
    const r = WW.run, a = WW.ep.quest.action, c = a.choices[e.i];
    if (Q.step() !== 2) return WW.chris.say(T('goodsLater'));
    if (r.good != null) { const old = WW.game.ents.find(o => o.kind === 'qgood' && o.i === r.good); if (old) { old.x = old.home[0]; old.y = old.home[1]; old.gone = false; } } // swap: put the other one back
    r.good = e.i; e.gone = true;
    WW.sfx('blip'); WW.fx.burst(e.x, e.y, 'gold');
    WW.chris.say(T('goodsCarry').replace('{g}', (c.icon ? c.icon + ' ' : '') + plainT(c.t)).replace('{n}', plainT(a.trader.name)), null, { at: [a.trader.x, a.trader.y] });
    WW.tools && WW.tools.render(); WW.ui.quest();
    return true;
  }
  function offer(e) {
    const r = WW.run, a = WW.ep.quest.action, who = a.trader;
    if (r.good == null) { // first visit: the trader says what they need; the goods start to glow
      WW.ui.talk(Object.assign({}, who, { lines: [...a.trader.lines, join(a.q, '', 'goodsHow')] }), () => { r.goodsSeen = true; WW.ui.quest(); });
      return true;
    }
    const c = a.choices[r.good], g = WW.game.ents.find(o => o.kind === 'qgood' && o.i === r.good);
    WW.chris.hide();
    r.tries.qtrader = (r.tries.qtrader || 0) + (c.ok ? 0 : 1);
    if (c.ok) {
      r.good = null; set(3); WW.sfx('coin'); WW.fx.burst(e.x, e.y, 'gold'); WW.game.shake();
      WW.toast(`🤝 ${WW.esc(T('traded'))}${item() ? ' · ' + WW.esc(itemName()) : ''}`, '#2aa198');
      say(who, c.why);
    } else { // not this: it goes back where it came from
      r.good = null; if (g) { g.x = g.home[0]; g.y = g.home[1]; g.gone = false; WW.fx.burst(g.x, g.y, 'poof'); }
      WW.sfx('bad'); say(who, join(c.why, '❌ ', 'goodsBack'));
    }
    WW.tools && WW.tools.render(); WW.ui.quest();
    return true;
  }
  // where the action is now. hint: Christopher's "show me the way" may point at a chase clue's place or the goods
  Q.target = (hint) => {
    const a = WW.ep.quest.action, r = WW.run;
    if (a.type === 'fight') return a.at;
    if (a.type === 'chase') { const c = Q.clue(); if (!c) { const f = WW.game.ents.find(o => o.kind === 'qfoe' && o.chase); return f ? [f.x, f.y] : a.at; } if (!hint) return null; const z = c.zones[0]; return [z.x + (z.w >> 1), z.y + (z.h >> 1)]; }
    if (a.type === 'trade') { if (!Q.goods() || !r.goodsSeen || r.good != null || !hint) return [a.trader.x, a.trader.y]; const p = WW.game.player, d = o => Math.abs(o.x - p.x) + Math.abs(o.y - p.y), g = WW.game.ents.filter(o => o.kind === 'qgood' && !o.gone).sort((m, n) => d(m) - d(n)); return g.length ? [g[0].x, g[0].y] : [a.trader.x, a.trader.y]; } // the nearest good, so the hint never gives the answer away
    return null;
  };
  Q.carryLine = () => {
    const r = WW.run; if (!r || r.good == null || !Q.goods()) return '';
    const a = WW.ep.quest.action, c = a.choices[r.good];
    return `🤝 <b>${WW.esc(T('goodsHolding'))}:</b> ${c.icon ? c.icon + ' ' : ''}${WW.esc(plainT(c.t))} <small>→ ${WW.esc(plainT(a.trader.name))}</small>`;
  };

  /* ---- the Ink Thief chase: clues answered by going to the right place ---- */
  const inZ = (zs, x, y) => (zs || []).find(z => x >= z.x && y >= z.y && x < z.x + z.w && y < z.y + z.h);
  Q.clue = () => { const a = WW.ep.quest.action, r = WW.run; return a.type === 'chase' && Q.step() === 2 ? a.clues[r.chase || 0] || null : null; };
  function chaseStep(x, y) {
    const a = WW.ep.quest.action, r = WW.run, c = Q.clue();
    if (!c) return;
    if (inZ(c.zones, x, y)) {
      r.chase = (r.chase || 0) + 1; r.chaseBand = null;
      WW.sfx('coin'); WW.fx.burst(x, y, 'gold'); WW.game.shake();
      WW.toast(`🧩 ${r.chase}/${a.clues.length} · ${WW.esc(itemName())}`, '#2aa198');
      const next = a.clues[r.chase];
      if (next) WW.chris.chain([`🧩 ${L(c.found)}`, `${T('chaseNext')} ${L(next.t)}`], { kind: 'blue' }); // PLAYTEST-3: two short bubbles, not one long one
      else { // every piece: the thief shows itself
        const f = WW.game.ents.find(o => o.kind === 'qfoe' && o.chase); f.visible = true; WW.fx.burst(f.x, f.y, 'purple'); WW.sfx('boss');
        WW.chris.chain([`🧩 ${L(c.found)}`, T('chaseCatch').replace('{n}', plainT(a.name))], { at: [f.x, f.y], kind: 'red' });
      }
      WW.ui.quest();
      return;
    }
    const band = inZ(c.noBy, x, y);
    if (band && r.chaseBand !== band) { r.chaseBand = band; r.chaseMissed = (r.chaseMissed || 0) + 1; WW.sfx('bad'); WW.chris.say(`❌ ${L(band.t)}`); }
    else if (!band) r.chaseBand = null;
  }
  function catchThief(e) {
    const a = WW.ep.quest.action, r = WW.run;
    if (Q.step() !== 2 || (r.chase || 0) < a.clues.length) return true;
    const spots = [...(a.hops || []), a.at];
    if (e.hop < spots.length - 1) { // it slips away, giggling
      WW.fx.burst(e.x, e.y, 'poof'); e.hop++; [e.x, e.y] = spots[e.hop]; WW.fx.burst(e.x, e.y, 'purple'); WW.sfx('bad');
      WW.chris.say(T('chaseHop').replace('{n}', plainT(a.name)), null, { at: [e.x, e.y] });
      return true;
    }
    e.gone = true; WW.fx.burst(e.x, e.y, 'poof'); WW.fx.burst(e.x, e.y, 'gold'); WW.sfx('win'); set(3);
    WW.ui.message('🧩 ' + itemName(), a.win);
    return true;
  }

  function showAction(ents) {
    const a = WW.ep.quest.action;
    if (a.type === 'chase') { WW.run.chase = 0; WW.sfx('boss'); WW.chris.chain([L(a.taunt), `${T('chaseNext')} ${L(a.clues[0].t)}`], { kind: 'blue' }); }
    if (a.type === 'fight') {
      const f = ents.find(e => e.kind === 'qfoe'); f.visible = true;
      WW.fx.burst(f.x, f.y, 'purple');
    }
    WW.ui.quest();
  }

  function fight(e) {
    const q = WW.ep.quest, a = q.action, r = WW.run;
    r.questMissed = r.questMissed || [];
    WW.bossTrial({ name: a.name, need: a.need || 2, taunt: a.taunt, win: a.win, questions: a.questions, pal: THIEF, minor: true, missedList: r.questMissed }, () => {
      e.gone = true; WW.fx.burst(e.x, e.y, 'poof'); set(3);
      WW.music.play('realm' + WW.ep.realm);
      if (item()) WW.toast(WW.esc(itemName()), '#2aa198');
    });
    return true;
  }

  /* stepping onto a tile: is it the secret spot? */
  Q.onStep = (x, y) => {
    if (!Q.on() || Q.step() !== 2) return;
    const a = WW.ep.quest.action;
    if (a.type === 'chase') return chaseStep(x, y);
    if (a.type !== 'find' || a.at[0] !== x || a.at[1] !== y) return;
    WW.sfx('win'); WW.fx.burst(x, y, 'gold'); set(3);
    WW.ui.message('✨ ' + T('foundIt'), a.found);
  };

  function finish() {
    const q = WW.ep.quest;
    set(4);
    WW.fx.burst(q.giver.x, q.giver.y, 'gold');
    WW.gain(q.stat || 'reg', 2, (q.reward && q.reward.coins) || 10, T('why_quest') + ': ' + WW.plain(q.title));
    WW.toast('🏅 ' + WW.esc(T('questDone')), '#c08a1e');
    WW.sheetSync();
  }

  /* what to draw above people's heads, and the secret spot's twinkle */
  Q.mark = e => {
    const s = Q.step();
    if (e.role === 'giver') return s === 0 || s === 3 ? '!' : '';
    if (e.role === 'contact') return s === 1 ? '?' : '';
    if (e.role === 'trader') return s === 2 ? '?' : '';
    return '';
  };
  Q.draw = (c, e, x, y, t) => {
    if (e.kind === 'qnpc') {
      WW.drawPerson(c, e.ref, x, y - 2, t, e.phase);
      const m = Q.mark(e);
      if (m) {
        const b = Math.round(Math.sin(t / 220 + e.phase) * 1.5);
        c.fillStyle = '#22202e'; c.fillRect(x + 5, y - 13 + b, 7, 9);
        c.fillStyle = m === '!' ? '#f2c14e' : '#8fc3ff'; c.fillRect(x + 6, y - 12 + b, 5, 7);
        c.fillStyle = '#22202e';
        if (m === '!') { c.fillRect(x + 8, y - 11 + b, 1, 3); c.fillRect(x + 8, y - 7 + b, 1, 1); }
        else { c.fillRect(x + 7, y - 11 + b, 3, 1); c.fillRect(x + 9, y - 10 + b, 1, 1); c.fillRect(x + 8, y - 9 + b, 1, 1); c.fillRect(x + 8, y - 7 + b, 1, 1); }
      }
    } else if (e.kind === 'qfoe') {
      WW.shadow(c, x, y + 13, 10);
      WW.sprite(c, 'smudge', x, y, { bob: true, t, phase: 2, pal: THIEF });
      c.fillStyle = '#22202e'; c.fillRect(x + 3, y + 7, 10, 2); // a bandit mask
      c.fillStyle = '#ffffff'; c.fillRect(x + 4, y + 7, 2, 1); c.fillRect(x + 10, y + 7, 2, 1);
    } else if (e.kind === 'qgood') { // goods for the trade: they glow once the trader has asked
      const k = (Math.sin(t / 260 + e.i) + 1) / 2;
      if (Q.step() === 2 && WW.run.goodsSeen) { c.fillStyle = `rgba(255,236,150,${.15 + k * .25})`; c.beginPath(); c.arc(x + 8, y + 9, 8, 0, 7); c.fill(); }
      WW.shadow(c, x, y + 13, 10);
      drawGood(c, WW.ep.quest.action.choices[e.i].icon, x, y);
    } else if (e.kind === 'qspot' && Q.step() === 2) {
      const k = (Math.sin(t / 260) + 1) / 2;
      c.fillStyle = `rgba(255,243,176,${0.25 + k * 0.6})`;
      c.fillRect(x + 7, y + 4, 2, 8); c.fillRect(x + 4, y + 7, 8, 2);
      c.fillStyle = `rgba(255,255,255,${k})`; c.fillRect(x + 7, y + 7, 2, 2);
    }
  };

  // goods as pixel art (an emoji may be missing on a school laptop): logs, an ore cart, stones, or a crate
  function drawGood(c, icon, x, y) {
    const R = (a, b, w, h, col) => { c.fillStyle = col; c.fillRect(x + a, y + b, w, h); };
    if (icon === '🪵') { [[2, 9], [6, 9], [10, 9], [4, 5], [8, 5]].forEach(([a, b]) => { R(a - 1, b - 1, 6, 6, '#22202e'); R(a, b, 4, 4, '#8b5a2b'); R(a + 1, b + 1, 2, 2, '#d9a066'); }); }
    else if (icon === '🛒') { R(1, 5, 14, 8, '#22202e'); R(2, 6, 12, 5, '#7a7f87'); R(3, 3, 3, 3, '#5a4a44'); R(6, 2, 4, 4, '#8a6a5a'); R(10, 3, 3, 3, '#5a4a44'); R(3, 12, 3, 3, '#22202e'); R(10, 12, 3, 3, '#22202e'); }
    else if (['🪨', '🍚', '🌾'].includes(icon)) { R(3, 4, 10, 11, '#22202e'); R(4, 5, 8, 9, '#c79a5b'); R(6, 3, 4, 2, '#22202e'); R(5, 8, 3, 3, '#8d939b'); R(9, 10, 2, 2, '#8d939b'); }
    else { R(2, 4, 12, 11, '#22202e'); R(3, 5, 10, 9, '#c79a5b'); R(3, 9, 10, 1, '#8b5a2b'); R(7, 5, 1, 9, '#8b5a2b'); }
  }

  /* the words in the quest bar */
  Q.bar = () => {
    const q = WW.ep.quest, s = Q.step(), a = q.action;
    if (s >= 4) return WW.plain(q.title);
    const now = s === 0 ? T('qFindGiver') : s === 1 ? T('qTalkTo') + ' ' + WW.plain(q.contact.name)
      : s === 3 ? T('qReturn') + ' ' + WW.plain(q.giver.name)
        : a.type === 'find' ? WW.plain(a.hint) : a.type === 'fight' ? T('qBeat') + ' ' + WW.plain(a.name)
          : a.type === 'chase' ? ((WW.run.chase || 0) < a.clues.length ? T('qChase').replace('{i}', (WW.run.chase || 0) + 1).replace('{n}', a.clues.length) : T('qCatch').replace('{n}', WW.plain(a.name)))
            : Q.goods() && WW.run.goodsSeen ? (WW.run.good != null ? T('qBring').replace('{n}', WW.plain(a.trader.name)) : T('qGoods')) : T('qTrade') + ' ' + WW.plain(a.trader.name);
    // Spanish: "vence a El Ladrón" -> "vence al Ladrón"
    return `📜 ${WW.plain(q.title)}: ${now.replace(/\ba El\b/, 'al')}`;
  };
  Q.log = () => {
    if (!Q.on()) return '';
    const q = WW.ep.quest, r = WW.run;
    const extra = q.action.type === 'fight' ? ` (${(r.questMissed || []).length} missed)` : q.action.type === 'chase' ? ` (${r.chaseMissed || 0} wrong places)` : q.action.type === 'trade' ? ` (${(r.tries.qtrader || 0) + 1} ${(r.tries.qtrader || 0) ? 'tries' : 'try'})` : '';
    return `QUEST: ${WW.plain({ en: q.title.en })} — ${Q.done() ? 'done' : 'not finished'}${extra}`;
  };
})();
