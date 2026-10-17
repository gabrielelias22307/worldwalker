/* WORLDWALKER engine · the compass-stone challenges and the Smudge trial
   Challenge types (set by ep.challenge.type):
     sort   – put each card in the right group (style:'bands' draws groups as land bands, e.g. elevation)
     order  – tap the cards in the right order
     claim  – choose one option, then back it up with one reason of each kind
     combo  – set switches; some settings work and some do not
     table  – read a small table of facts, answer questions about it            */
(function () {
  const L = t => WW.L(t), T = k => WW.T(k), esc = s => WW.esc(s), btn = (a, b, c) => WW.btn(a, b, c);
  const shuffle = (a, seed = 7) => { a = a.slice(); let s = seed; for (let i = a.length - 1; i > 0; i--) { s = (s * 9301 + 49297) % 233280; const j = Math.floor((s / 233280) * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  WW.shuffle = shuffle;

  function header(box, ch) {
    const pip = WW.spriteCanvas('stone', { W: '#9aa3ad', G: '#5e636b', y: '#f2c14e', r: '#e04848', n: '#2f6fd6' }, 3); pip.className = 'chface';
    const hd = document.createElement('div'); hd.className = 'ch-head';
    hd.appendChild(pip);
    hd.insertAdjacentHTML('beforeend', `<div><h3>${esc(L(ch.title))}</h3>${(ch.intro ? `<p class="say">${WW.rich(ch.intro)}</p>` : '')}</div>`);
    box.appendChild(hd);
  }
  function solved(h, ch, okText) {
    const r = WW.run;
    if (!r.challengeDone) {
      r.challengeDone = true;
      WW.gain(ch.stat || 'hei', 2, 5);
      WW.sfx('win');
      WW.game.onChallengeDone();
    }
    return okText;
  }
  function doneBlock(box, h, ch) {
    const d = document.createElement('div'); d.className = 'fb right';
    d.innerHTML = `<b>${esc(T('allRight'))}</b> ${WW.rich(ch.success || '')}`;
    box.appendChild(d);
    const acts = document.createElement('div'); acts.className = 'acts';
    acts.appendChild(btn(T('cont') + ' ▶', 'gold', () => h.close()));
    box.appendChild(acts);
  }

  /* ---------------- sort ---------------- */
  function sortUI(ch) {
    const place = {}; // item index -> bin id
    let sel = null, checked = false;
    const order = shuffle(ch.items.map((_, i) => i), ch.items.length * 13 + 5);
    WW.ui.open({
      cls: 'chov',
      render(box, h) {
        header(box, ch);
        const done = WW.run.challengeDone;
        box.insertAdjacentHTML('beforeend', `<p class="hint">${esc(T('pickItem'))}</p>`);
        const pool = document.createElement('div'); pool.className = 'pool';
        order.filter(i => place[i] == null).forEach(i => pool.appendChild(card(i)));
        box.appendChild(pool);
        const bins = document.createElement('div'); bins.className = 'bins ' + (ch.style === 'bands' ? 'bands' : '');
        ch.bins.forEach(b => {
          const el = document.createElement('div'); el.className = 'bin';
          if (b.tile && ch.style === 'bands') {
            const cv = document.createElement('canvas'); cv.width = 16 * 6; cv.height = 16; cv.className = 'bintile';
            const x = cv.getContext('2d'); for (let i = 0; i < 6; i++) WW.tiles[b.tile](x, i * 16, 0, i, 1, 0);
            el.appendChild(cv);
          }
          el.insertAdjacentHTML('beforeend', `<div class="binlabel">${b.icon ? b.icon + ' ' : ''}${WW.rich(b.label)}${b.sub ? `<span class="small"> · ${WW.rich(b.sub)}</span>` : ''}</div>`);
          const inside = document.createElement('div'); inside.className = 'binin';
          order.filter(i => place[i] === b.id).forEach(i => inside.appendChild(card(i)));
          el.appendChild(inside);
          el.onclick = e => {
            if (e.target.closest('.card') || done) return;
            if (sel != null) { place[sel] = b.id; sel = null; checked = false; WW.sfx('blip'); h.render(); }
          };
          el.classList.toggle('target', sel != null);
          bins.appendChild(el);
        });
        box.appendChild(bins);
        if (done) return doneBlock(box, h, ch);
        const all = Object.keys(place).length === ch.items.length;
        const acts = document.createElement('div'); acts.className = 'acts';
        const cb = btn(T('check'), 'gold', () => {
          checked = true; WW.run.challengeTries++;
          const wrong = ch.items.filter((it, i) => place[i] !== it.bin);
          if (!wrong.length) { solved(h, ch); } else WW.sfx('bad');
          h.render();
        });
        cb.disabled = !all; acts.appendChild(cb);
        box.appendChild(acts);
        if (checked) {
          const wrong = ch.items.map((it, i) => [it, i]).filter(([it, i]) => place[i] !== it.bin);
          if (wrong.length) {
            const fb = document.createElement('div'); fb.className = 'fb wrong';
            fb.innerHTML = `<b>${esc(T('someWrong'))}</b>` + (wrong[0][0].why ? ` ${WW.rich(wrong[0][0].why)}` : '');
            box.appendChild(fb);
          }
        }
        function card(i) {
          const it = ch.items[i];
          const c = document.createElement('button'); c.className = 'card';
          if (sel === i) c.classList.add('sel');
          if (checked && place[i] != null) c.classList.add(place[i] === it.bin ? 'right' : 'wrong');
          c.innerHTML = (it.icon ? `<span class="ic">${it.icon}</span>` : '') + WW.rich(it.t);
          c.onclick = (e) => {
            e.stopPropagation(); if (done) return;
            if (sel != null && sel !== i && place[i] != null) { place[sel] = place[i]; sel = null; } // drop the chosen card into this card's group
            else if (place[i] != null) { delete place[i]; sel = i; } else sel = sel === i ? null : i;
            checked = false; WW.sfx('blip'); h.render();
          };
          c.dataset.i = i;
          return c;
        }
      }
    });
  }

  /* ---------------- order ---------------- */
  function orderUI(ch) {
    let seq = [], checked = false;
    const order = shuffle(ch.items.map((_, i) => i), ch.items.length * 7 + 3);
    WW.ui.open({
      cls: 'chov',
      render(box, h) {
        header(box, ch);
        const done = WW.run.challengeDone;
        box.insertAdjacentHTML('beforeend', `<p class="hint">${esc(T('pickOrder'))}</p>`);
        const line = document.createElement('ol'); line.className = 'seq';
        seq.forEach((i, pos) => {
          const li = document.createElement('li');
          li.className = 'card' + (checked ? (i === pos ? ' right' : ' wrong') : '');
          li.innerHTML = (ch.items[i].icon ? `<span class="ic">${ch.items[i].icon}</span>` : '') + WW.rich(ch.items[i].t);
          line.appendChild(li);
        });
        box.appendChild(line);
        const pool = document.createElement('div'); pool.className = 'pool';
        order.filter(i => !seq.includes(i)).forEach(i => {
          const c = document.createElement('button'); c.className = 'card'; c.dataset.i = i;
          c.innerHTML = (ch.items[i].icon ? `<span class="ic">${ch.items[i].icon}</span>` : '') + WW.rich(ch.items[i].t);
          c.onclick = () => { if (done) return; seq.push(i); checked = false; WW.sfx('blip'); h.render(); };
          pool.appendChild(c);
        });
        box.appendChild(pool);
        if (done) return doneBlock(box, h, ch);
        const acts = document.createElement('div'); acts.className = 'acts';
        const cb = btn(T('check'), 'gold', () => {
          checked = true; WW.run.challengeTries++;
          if (seq.every((v, k) => v === k)) solved(h, ch); else WW.sfx('bad');
          h.render();
        });
        cb.disabled = seq.length !== ch.items.length; acts.appendChild(cb);
        acts.appendChild(btn(T('reset'), 'ghost', () => { seq = []; checked = false; h.render(); }));
        box.appendChild(acts);
        if (checked && !WW.run.challengeDone) {
          const first = seq.findIndex((v, k) => v !== k);
          const fb = document.createElement('div'); fb.className = 'fb wrong';
          fb.innerHTML = `<b>${esc(T('wrong'))}</b> ${WW.rich(ch.why || '')} <span class="small">(#${first + 1})</span>`;
          box.appendChild(fb);
        }
      }
    });
  }

  /* ---------------- claim ---------------- */
  function claimUI(ch) {
    let pick = null, why = {}, checked = false;
    WW.ui.open({
      cls: 'chov',
      render(box, h) {
        header(box, ch);
        const done = WW.run.challengeDone;
        box.insertAdjacentHTML('beforeend', `<h4>1 · ${esc(T('choose'))}</h4>`);
        const opts = document.createElement('div'); opts.className = 'opts';
        ch.options.forEach((o, i) => {
          const b = document.createElement('button'); b.className = 'opt' + (pick === i ? ' sel' : ''); b.dataset.i = i;
          b.innerHTML = `<b>${o.icon ? o.icon + ' ' : ''}${WW.rich(o.name)}</b>${o.desc ? `<span>${WW.rich(o.desc)}</span>` : ''}`;
          b.onclick = () => { if (done) return; pick = i; why = {}; checked = false; WW.sfx('blip'); h.render(); };
          opts.appendChild(b);
        });
        box.appendChild(opts);
        if (pick != null) {
          box.insertAdjacentHTML('beforeend', `<h4>2 · ${esc(T('because'))}</h4>`);
          ch.kinds.forEach(k => {
            const grp = document.createElement('div'); grp.className = 'kind';
            grp.innerHTML = `<div class="klabel">${WW.rich(k.label)}</div>`;
            ch.reasons.forEach((r, ri) => {
              if (r.kind !== k.id) return;
              const b = document.createElement('button'); b.className = 'reason' + (why[k.id] === ri ? ' sel' : ''); b.dataset.r = ri;
              if (checked && why[k.id] === ri) b.classList.add(r.fits.includes(pick) ? 'right' : 'wrong');
              b.innerHTML = WW.rich(r.t);
              b.onclick = () => { if (done) return; why[k.id] = ri; checked = false; WW.sfx('blip'); h.render(); };
              grp.appendChild(b);
            });
            box.appendChild(grp);
          });
        }
        if (done) {
          const o = ch.options[pick ?? WW.run.claimPick ?? 0];
          if (o && o.result) box.insertAdjacentHTML('beforeend', `<div class="fb right">${WW.rich(o.result)}</div>`);
          return doneBlock(box, h, ch);
        }
        const ready = pick != null && ch.kinds.every(k => why[k.id] != null);
        const acts = document.createElement('div'); acts.className = 'acts';
        const cb = btn(T('check'), 'gold', () => {
          checked = true; WW.run.challengeTries++;
          const ok = ch.kinds.every(k => ch.reasons[why[k.id]].fits.includes(pick));
          if (ok) { WW.run.claimPick = pick; solved(h, ch); } else WW.sfx('bad');
          h.render();
        });
        cb.disabled = !ready; acts.appendChild(cb);
        box.appendChild(acts);
        if (checked && !WW.run.challengeDone) {
          const bad = ch.kinds.map(k => ch.reasons[why[k.id]]).find(r => !r.fits.includes(pick));
          box.insertAdjacentHTML('beforeend', `<div class="fb wrong"><b>${esc(T('wrong'))}</b> ${WW.rich(ch.mismatch || '')} ${bad && bad.why ? WW.rich(bad.why) : ''}</div>`);
        }
      }
    });
  }

  /* ---------------- combo ---------------- */
  function comboUI(ch) {
    const set = ch.switches.map(s => s.start || 0);
    let tried = false;
    WW.ui.open({
      cls: 'chov',
      render(box, h) {
        header(box, ch);
        const done = WW.run.challengeDone;
        const sw = document.createElement('div'); sw.className = 'switches';
        ch.switches.forEach((s, i) => {
          const g = document.createElement('div'); g.className = 'sw-g';
          g.innerHTML = `<div class="klabel">${s.icon ? s.icon + ' ' : ''}${WW.rich(s.name)}</div>`;
          s.states.forEach((st, k) => {
            const b = document.createElement('button'); b.className = 'reason' + (set[i] === k ? ' sel' : ''); b.dataset.s = i + ':' + k;
            b.innerHTML = WW.rich(st);
            b.onclick = () => { if (done) return; set[i] = k; tried = false; WW.sfx('blip'); h.render(); };
            g.appendChild(b);
          });
          sw.appendChild(g);
        });
        box.appendChild(sw);
        const key = set.join(',');
        const res = ch.results[key] || ch.otherwise || { t: '' , ok: false };
        if (res.show) {
          const out = document.createElement('div'); out.className = 'outs';
          res.show.forEach(o => out.insertAdjacentHTML('beforeend', `<span class="out ${o.ok ? 'good' : 'badp'}">${o.icon || ''} ${WW.rich(o.t)}</span>`));
          box.appendChild(out);
        }
        if (done) return doneBlock(box, h, ch);
        const acts = document.createElement('div'); acts.className = 'acts';
        acts.appendChild(btn(T('check'), 'gold', () => {
          tried = true; WW.run.challengeTries++;
          if (res.ok) solved(h, ch); else WW.sfx('bad');
          h.render();
        }));
        box.appendChild(acts);
        if (tried && !WW.run.challengeDone) box.insertAdjacentHTML('beforeend', `<div class="fb wrong"><b>${esc(T('wrong'))}</b> ${WW.rich(res.t)}</div>`);
      }
    });
  }

  /* ---------------- table ---------------- */
  function tableUI(ch) {
    let qi = 0, picked = null;
    WW.ui.open({
      cls: 'chov',
      render(box, h) {
        header(box, ch);
        const done = WW.run.challengeDone;
        let t = '<div class="tblwrap"><table class="dtbl"><thead><tr>' + ch.table.head.map(c => `<th>${WW.rich(c)}</th>`).join('') + '</tr></thead><tbody>';
        ch.table.rows.forEach(r => (t += '<tr>' + r.map(c => `<td>${WW.rich(c)}</td>`).join('') + '</tr>'));
        t += '</tbody></table></div>';
        if (ch.table.note) t += `<p class="small">${WW.rich(ch.table.note)}</p>`;
        box.insertAdjacentHTML('beforeend', t);
        if (done) return doneBlock(box, h, ch);
        const q = ch.questions[qi]; box.dataset.q = qi;
        box.insertAdjacentHTML('beforeend', `<h4>${qi + 1} / ${ch.questions.length}</h4><p class="say q">${WW.rich(q.q)}</p>`);
        const list = document.createElement('div'); list.className = 'choices';
        shuffle(q.choices.map((_, i) => i), qi * 3 + 1).forEach(i => {
          const c = q.choices[i];
          const b = document.createElement('button'); b.innerHTML = WW.rich(c); b.dataset.i = i;
          if (picked === i) b.className = i === q.answer ? 'right' : 'wrong';
          b.onclick = () => {
            if (picked === q.answer) return;
            picked = i;
            if (i === q.answer) WW.sfx('good'); else { WW.sfx('bad'); WW.run.challengeTries++; }
            h.render();
          };
          list.appendChild(b);
        });
        box.appendChild(list);
        if (picked != null) {
          const ok = picked === q.answer;
          box.insertAdjacentHTML('beforeend', `<div class="fb ${ok ? 'right' : 'wrong'}"><b>${esc(ok ? T('right') : T('wrong'))}</b> ${WW.rich(q.why || '')}</div>`);
          if (ok) {
            const acts = document.createElement('div'); acts.className = 'acts';
            acts.appendChild(btn(T('next') + ' ▶', 'gold', () => {
              picked = null;
              if (qi < ch.questions.length - 1) qi++; else { WW.run.challengeTries = Math.max(1, WW.run.challengeTries); solved(h, ch); }
              h.render();
            }));
            box.appendChild(acts);
          }
        }
      }
    });
  }

  WW.challenge = (ch) => {
    const f = { sort: sortUI, order: orderUI, claim: claimUI, combo: comboUI, table: tableUI }[ch.type];
    if (!f) return console.error('unknown challenge type', ch.type);
    f(ch);
  };

  /* ---------------- the Smudge trial ---------------- */
  WW.bossTrial = (boss, onWin) => {
    const need = boss.need || 3;
    let queue = shuffle(boss.questions.map((_, i) => i), boss.questions.length * 11 + 1);
    let broken = 0, picked = null, last = null;
    WW.music.play('boss');
    WW.ui.open({
      cls: 'bossov',
      render(box, h) {
        const top = document.createElement('div'); top.className = 'boss-top';
        const cv = document.createElement('canvas'); cv.width = 16 * 5; cv.height = 16 * 5; cv.className = 'bossface' + (last === 'hit' ? ' hit' : last === 'crack' ? ' crack' : '');
        WW.sprite(cv.getContext('2d'), 'smudge', 0, 0, { scale: 5 });
        top.appendChild(cv);
        let shield = `<div><div class="bname">${esc(L(boss.name))}</div><div class="klabel">${esc(T('shield'))}</div><div class="shield">`;
        for (let i = 0; i < need; i++) shield += `<span class="${i < need - broken ? 'on' : ''}${last === 'crack' && i === need - broken ? ' cracked' : ''}"></span>`;
        shield += `</div><div class="hearts">${'<span class="hrt">♥</span>'.repeat(WW.run.hearts)}${'<span class="hrt empty">♥</span>'.repeat(Math.max(0, WW.heartsMax() - WW.run.hearts))}</div></div>`;
        top.insertAdjacentHTML('beforeend', shield);
        box.appendChild(top);
        if (broken >= need) {
          box.insertAdjacentHTML('beforeend', `<div class="fb right"><b>${esc(T('allRight'))}</b> ${WW.rich(boss.win || '')}</div>`);
          const acts = document.createElement('div'); acts.className = 'acts';
          acts.appendChild(btn(T('cont') + ' ▶', 'gold big', () => { h.close(); onWin(); }));
          box.appendChild(acts);
          return;
        }
        if (broken === 0 && picked == null && boss.taunt) box.insertAdjacentHTML('beforeend', `<p class="say taunt">${WW.rich(boss.taunt)}</p>`);
        const qi = queue[0], q = boss.questions[qi];
        box.dataset.q = qi;
        box.insertAdjacentHTML('beforeend', `<p class="say q">${WW.rich(q.q)}</p>`);
        const list = document.createElement('div'); list.className = 'choices two';
        const ord = shuffle(q.choices.map((_, i) => i), qi * 5 + WW.run.bossMisses + 3);
        ord.forEach((i, pos) => {
          const c = q.choices[i];
          const b = document.createElement('button'); b.innerHTML = `<i>${'ABCDE'[pos]}</i> ${WW.rich(c)}`; b.dataset.i = i;
          if (picked === i) b.className = i === q.answer ? 'right' : 'wrong';
          b.disabled = picked != null;
          b.onclick = () => {
            picked = i;
            if (i === q.answer) { broken++; last = 'crack'; WW.sfx('hit'); }
            else { last = 'hit'; WW.sfx('hurt'); WW.run.missed.includes(qi) || WW.run.missed.push(qi); WW.run.bossMisses++; WW.hurt(true); }
            h.render();
          };
          list.appendChild(b);
        });
        box.appendChild(list);
        if (picked != null) {
          const ok = picked === q.answer;
          box.insertAdjacentHTML('beforeend', `<div class="fb ${ok ? 'right' : 'wrong'}"><b>${esc(ok ? T('right') : T('wrong'))}</b> ${WW.rich(q.why || '')}</div>`);
          const acts = document.createElement('div'); acts.className = 'acts';
          acts.appendChild(btn(T('next') + ' ▶', 'gold', () => {
            queue.shift(); if (!ok) queue.push(qi);
            picked = null; last = null; h.render();
          }));
          box.appendChild(acts);
        }
      }
    });
  };
})();
