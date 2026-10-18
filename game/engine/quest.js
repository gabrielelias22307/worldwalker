/* WORLDWALKER engine · the episode quest
   A quest giver (gold !) asks for help -> you talk to a contact (?) -> you do one action -> you go back to the giver.
   The action is one of:
     find  – use the contact's clue to find a secret spot and walk onto it
     fight – beat an Ink Thief in a short question duel
     trade – offer the right goods to a trader
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
    if (a.type === 'find') out.push({ kind: 'qspot', x: a.at[0], y: a.at[1] });
    return out;
  };

  const item = () => WW.ep.quest.action.item;
  const itemName = () => (item() ? `${item().icon || '🎁'} ${WW.plain(item().name)}` : '');
  const say = (who, text, after) => WW.ui.talk({ id: who.id, name: who.name, role: who.role, look: who.look, lines: [text] }, after);

  /* walking into a quest person or the thief */
  Q.interact = (e, ents) => {
    const q = WW.ep.quest, s = Q.step();
    if (e.kind === 'qfoe') return fight(e);
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
      WW.ui.talk(Object.assign({}, who, { lines: a.trader.lines, ask: { stat: q.stat, q: a.q, choices: a.choices } }), () => {
        set(3); WW.sfx('coin'); WW.fx.burst(e.x, e.y, 'gold');
        WW.toast(`🤝 ${WW.esc(T('traded'))}${item() ? ' · ' + WW.esc(itemName()) : ''}`, '#2aa198');
      });
    }
    return true;
  };

  function showAction(ents) {
    const a = WW.ep.quest.action;
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
    } else if (e.kind === 'qspot' && Q.step() === 2) {
      const k = (Math.sin(t / 260) + 1) / 2;
      c.fillStyle = `rgba(255,243,176,${0.25 + k * 0.6})`;
      c.fillRect(x + 7, y + 4, 2, 8); c.fillRect(x + 4, y + 7, 8, 2);
      c.fillStyle = `rgba(255,255,255,${k})`; c.fillRect(x + 7, y + 7, 2, 2);
    }
  };

  /* the words in the quest bar */
  Q.bar = () => {
    const q = WW.ep.quest, s = Q.step(), a = q.action;
    if (s >= 4) return WW.plain(q.title);
    const now = s === 0 ? T('qFindGiver') : s === 1 ? T('qTalkTo') + ' ' + WW.plain(q.contact.name)
      : s === 3 ? T('qReturn') + ' ' + WW.plain(q.giver.name)
        : a.type === 'find' ? WW.plain(a.hint) : a.type === 'fight' ? T('qBeat') + ' ' + WW.plain(a.name) : T('qTrade') + ' ' + WW.plain(a.trader.name);
    // Spanish: "vence a El Ladrón" -> "vence al Ladrón"
    return `📜 ${WW.plain(q.title)}: ${now.replace(/\ba El\b/, 'al')}`;
  };
  Q.log = () => {
    if (!Q.on()) return '';
    const q = WW.ep.quest, r = WW.run;
    const extra = q.action.type === 'fight' ? ` (${(r.questMissed || []).length} missed)` : q.action.type === 'trade' ? ` (${(r.tries.qtrader || 0) + 1} ${(r.tries.qtrader || 0) ? 'tries' : 'try'})` : '';
    return `QUEST: ${WW.plain({ en: q.title.en })} — ${Q.done() ? 'done' : 'not finished'}${extra}`;
  };
})();
