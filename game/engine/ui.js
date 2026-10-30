/* WORLDWALKER engine · everything with words: top bar, talk boxes, passport, start and finish screens */
(function () {
  const L = t => WW.L(t), T = k => WW.T(k);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  WW.esc = esc;

  /* [[key|shown words]] -> yellow tap-to-define word */
  WW.rich = t => L(t).replace(/\[\[([^|\]]+)\|([^\]]+)\]\]/g, (m, k, w) => `<span class="word" data-k="${esc(k.trim().toLowerCase())}" tabindex="0">${w}</span>`)
    .replace(/\[\[([^\]]+)\]\]/g, (m, w) => `<span class="word" data-k="${esc(w.trim().toLowerCase())}" tabindex="0">${w}</span>`);
  WW.plain = t => L(t).replace(/\[\[([^|\]]+)\|([^\]]+)\]\]/g, '$2').replace(/\[\[([^\]]+)\]\]/g, '$1').replace(/<[^>]+>/g, '');

  const $ = id => document.getElementById(id);
  const ui = WW.ui = { stack: [] };

  /* ---------------- overlay ---------------- */
  ui.open = (opts) => {
    if (WW.chris && WW.chris.scene && WW.chris.skip) WW.chris.skip(); // a panel opens: his welcome is over
    const ov = $('ww-ov');
    const h = { opts, close() { ui.close(h); }, render() { draw(); } };
    function draw() {
      ov.className = 'ov' + (opts.cls ? ' ' + opts.cls : '');
      ov.setAttribute('dir', WW.dir());
      ov.innerHTML = '';
      const box = document.createElement('div');
      box.className = 'ov-box';
      ov.appendChild(box);
      opts.render(box, h);
      ov.scrollTop = 0;
      // keyboard players: the main button (or the first answer) has focus, so Enter or Space presses it
      const f = box.querySelector('.choices button:not([disabled]), .pbtn.gold:not([disabled])');
      const main = [...box.querySelectorAll('.pbtn.gold:not([disabled])')].pop();
      const empty = [...box.querySelectorAll('input:not([type=hidden]),textarea')].find(i => !i.value); // a form: the first empty box
      const answered = box.querySelector('.fb, .choices button.right'); // after an answer: Continue
      const pick = empty || (answered && main) || box.querySelector('.choices button:not([disabled])') || main || f;
      if (pick) try { pick.focus({ preventScroll: true }); } catch (e) { }
    }
    ui.stack.push(h); holdToast();
    $('ww-screen').classList.add('ovopen');
    draw();
    WW.paused = true;
    return h;
  };
  ui.close = (h) => {
    ui.stack = ui.stack.filter(x => x !== h);
    const top = ui.stack[ui.stack.length - 1];
    if (top) top.render();
    else { $('ww-ov').className = 'ov hidden'; $('ww-ov').innerHTML = ''; $('ww-screen').classList.remove('ovopen'); WW.paused = false; hidePop(); }
    if (h.opts.onClose) h.opts.onClose();
    setTimeout(pumpToast, 250);
  };
  ui.top = () => ui.stack[ui.stack.length - 1];
  WW.onLang(() => { const t = ui.top(); if (t) t.render(); ui.hud(); ui.quest(); });

  /* definition pop-up for yellow words */
  let pop;
  function hidePop() { if (pop) pop.style.display = 'none'; }
  document.addEventListener('click', e => {
    const w = e.target.closest && e.target.closest('.word');
    if (!w) { hidePop(); return; }
    const words = (WW.ep && WW.ep.words) || {};
    const d = words[w.dataset.k];
    if (!d) return;
    if (!pop) { pop = document.createElement('div'); pop.className = 'defpop'; $('ww-screen').appendChild(pop); }
    pop.setAttribute('dir', WW.dir());
    pop.innerHTML = `<b>${esc(w.textContent)}</b> — ${esc(L(d))}`;
    pop.style.display = 'block';
    const sr = $('ww-screen').getBoundingClientRect(), r = w.getBoundingClientRect();
    pop.style.left = Math.max(6, Math.min(sr.width - 300, r.left - sr.left)) + 'px';
    pop.style.top = (r.bottom - sr.top + 6) + 'px';
    WW.sfx('blip');
  });

  /* ---------------- toast ---------------- */
  // small messages in the corner; several can show at once. big = a "New power!" banner
  /* reward pop-ups wait in a line: one at a time, and never on top of an open panel or while Christopher is introducing himself */
  const tq = []; let tCur = null, tTimer = 0;
  WW.toast = (html, col, big) => {
    tq.push({ html, col, big, at: performance.now() });
    while (tq.length > 6) { const i = tq.findIndex(o => !o.big); tq.splice(i < 0 ? 0 : i, 1); } // a long line: drop the small ones first
    pumpToast();
  };
  function pumpToast() {
    const box = $('ww-toast'); if (!box) return;
    if (tCur || ui.stack.length || (WW.chris && WW.chris.scene)) return;
    while (tq.length && !tq[0].big && performance.now() - tq[0].at > 12000) tq.shift(); // small news that waited too long is old news
    if (!tq.length) return;
    const o = tCur = tq.shift();
    const el = o.el = document.createElement('div'); el.className = 'tst' + (o.big ? ' big' : '');
    el.innerHTML = o.html; el.style.background = o.col || '#3fa34d'; el.setAttribute('dir', WW.dir());
    box.innerHTML = ''; box.appendChild(el);
    if (o.big) WW.sfx('power'); // a few notes when a new power unlocks
    tTimer = setTimeout(() => { el.remove(); tCur = null; setTimeout(pumpToast, 150); }, o.big ? 3600 : tq.length ? 1500 : 2400);
  }
  // a panel opens: the pop-up on screen steps back into the line and comes back after the panel closes
  function holdToast() { if (!tCur) return; clearTimeout(tTimer); tCur.el.remove(); tq.unshift(tCur); tCur = null; }
  WW.toastPump = pumpToast;
  WW.toastsWaiting = () => tq.length + (tCur ? 1 : 0);

  /* ---------------- top bar ---------------- */
  ui.hud = () => {
    const el = $('ww-hud'); if (!el || !WW.ep) return;
    const run = WW.run || {}, max = WW.heartsMax();
    let h = '<div class="hud-left">';
    for (let i = 0; i < max; i++) h += `<span class="hrt ${i < (run.hearts ?? max) ? '' : 'empty'}">♥</span>`;
    h += `<span class="hud-coin" title="${esc(T('coins'))}">● ${WW.save.coins || 0}</span>${(run.streak || 0) >= 2 ? `<span class="hud-streak" title="${esc(T('inARow'))}">🔥 ${run.streak}</span>` : ''}</div>`;
    h += `<div class="hud-mid">${esc(WW.ep.id)} · ${esc(WW.plain(WW.ep.title))}</div>`;
    h += '<div class="hud-right">';
    WW.THEMES.forEach(th => {
      const v = WW.save.stats[th.k] || 0;
      h += `<button class="meter" data-k="${th.k}" title="${esc(L(th.name))} (${esc(L(th.full))}): ${v}" aria-label="${esc(L(th.name))}: ${v}"><i>${th.icon}</i><span class="mcol"><span class="track"><b style="width:${Math.min(100, v / 30 * 100)}%;background:${th.col}"></b></span><span class="mlab">${esc(L(th.name))}</span></span></button>`;
    });
    h += '</div>';
    el.innerHTML = h;
    // tap a theme bar: its name, what it means and the number
    el.querySelectorAll('.meter').forEach(b => (b.onclick = () => { const th = WW.THEMES.find(t => t.k === b.dataset.k); WW.toast(`${th.icon} <b>${esc(L(th.name))}</b> · ${esc(L(th.full))}: ${WW.save.stats[th.k] || 0}`, th.col); }));
    const bar = $('ww-bar');
    if (bar) {
      bar.querySelectorAll('[data-lang]').forEach(b => b.classList.toggle('on', b.dataset.lang === WW.lang));
      const lab = (id, icon, word) => { const b = $(id); if (!b) return; b.innerHTML = `${icon}<span class="lbl"> ${esc(word)}</span>`; b.title = word; b.setAttribute('aria-label', word); };
      lab('ww-b-pass', '📘', T('passport'));
      lab('ww-b-map', '🗺️', T('map'));
      lab('ww-b-snd', WW.save.sound ? '🔊' : '🔇', T('sound'));
      lab('ww-b-mus', WW.save.music ? '🎵' : '🚫', T('music'));
      lab('ww-b-full', '⛶', T('full'));
      lab('ww-b-help', '?', T('helpKeys'));
      lab('ww-b-chris', '🧭', T('chrisName') + ' (C)');
      lab('ww-b-gear', '⚙', T('settings'));
    }
  };
  ui.quest = () => {
    const el = $('ww-quest'); if (!el || !WW.run) return;
    const r = WW.run, ep = WW.ep;
    const need = ep.npcs.length, got = r.talked.size;
    const steps = [
      [T('talkTo') + ` (${got}/${need})`, got >= need],
      ...(WW.quest.on() ? [[WW.quest.bar(), WW.quest.done()]] : []),
      [L(ep.challenge.title) || T('solve'), r.challengeDone],
      [T('face'), r.bossDone],
      [T('claim'), r.claimed]];
    // one line: the goal right now. The whole list opens with ☰ (or Q) and is in the Passport.
    const now = steps.findIndex(([, ok]) => !ok), cur = now < 0 ? steps[steps.length - 1] : steps[now];
    const label = now < 0 ? '✓ ' + cur[0] : `▶ ${cur[0]}`;
    el.innerHTML = `<b>${esc(T('quest'))}:</b><span class="qgoal" title="${esc(steps.map(s => s[0]).join(' → '))}"><span class="${now < 0 ? 'qdone' : 'qnow'}">${esc(label)}</span> <span class="qscr">· 📄 ${r.scraps.size}/${ep.scraps.length}</span></span><span class="qlist" aria-label="${esc(T('goals'))}">☰ ${now < 0 ? steps.length : now + 1}/${steps.length}</span>`;
    el.setAttribute('dir', WW.dir());
    ui.questSteps = steps;
    const pop = $('ww-qpop'); if (pop && pop.classList.contains('on')) ui.questPop(true);
  };
  // fun-pass-4: the whole episode as a small map (way.js draws it): you blink, the goal is a gold square
  const miniHtml = () => `<div class="nc-mini"><div class="nc-mh">🗺️ ${esc(T('miniMap'))}</div><canvas class="minimap" aria-hidden="true"></canvas></div>`;
  // PLAYTEST-3: the Now card (wide screens): the goal right now, where to go, and the list
  ui.nowCard = () => {
    const el = $('ww-now'); if (!el || !el.classList.contains('on') || !WW.run || !WW.game.player) return;
    const steps = ui.questSteps || [], i = steps.findIndex(([, ok]) => !ok), ns = WW.chris && !WW.chris.scene ? WW.chris.nextStep() : null;
    const html = `<div class="nc-h">🎯 ${esc(T('nowCard'))}</div><div class="nc-goal">${esc(i < 0 ? T('claim') : steps[i][0])}</div>${ns && ns.text ? `<div class="nc-next">🧭 ${WW.rich(ns.text)}</div>` : ''}${ui.questList()}<div class="nc-scr">📄 ${esc(T('scraps'))} ${WW.run.scraps.size}/${WW.ep.scraps.length}</div>${miniHtml()}`;
    if (el.__h !== html) { el.innerHTML = html; el.__h = html; el.setAttribute('dir', WW.dir()); }
  };
  setInterval(() => ui.nowCard(), 700);
  // the whole goal list, over the top of the map (tap the quest bar, or press Q)
  ui.questList = () => { const steps = ui.questSteps || []; const now = steps.findIndex(([, ok]) => !ok);
    return `<ol>${steps.map(([t, ok], i) => `<li class="${ok ? 'qdone' : i === now ? 'qnow' : ''}">${ok ? '✓ ' : i === now ? '▶ ' : ''}${esc(t)}</li>`).join('')}</ol>`; };
  let qTimer = 0;
  ui.questPop = (refresh) => {
    const pop = $('ww-qpop'); if (!pop) return;
    if (!refresh && pop.classList.contains('on')) { pop.classList.remove('on'); return; }
    pop.innerHTML = `<b>🏁 ${esc(T('goals'))} ${esc(WW.ep.id)}</b>${ui.questList()}<div class="small">📄 ${esc(T('scraps'))} ${WW.run.scraps.size}/${WW.ep.scraps.length}</div>${miniHtml()}`;
    pop.setAttribute('dir', WW.dir()); pop.classList.add('on');
    clearTimeout(qTimer); if (!refresh) qTimer = setTimeout(() => pop.classList.remove('on'), 7000);
  };

  /* small canvas with a sprite drawn big */
  WW.spriteCanvas = (name, pal, scale = 4, crop = 16) => {
    const c = document.createElement('canvas'); c.width = 16 * scale; c.height = crop * scale;
    const x = c.getContext('2d'); x.imageSmoothingEnabled = false;
    WW.sprite(x, name, 0, 0, { pal, scale });
    return c;
  };

  /* ---------------- 🔊 read aloud (PLAYTEST-3) ----------------
     The browser's own voices (speechSynthesis). The button only shows when this computer has a voice for the language:
     many Chromebooks have no Dari voice, and an English voice reading Dari letters would only confuse. */
  const VOICE = { en: ['en'], es: ['es'], fa: ['fa', 'prs', 'ps'] };
  WW.voiceFor = (lang = WW.lang) => { try { const vs = speechSynthesis.getVoices(); return vs.find(v => VOICE[lang].some(p => v.lang.toLowerCase().startsWith(p))) || null; } catch (e) { return null; } };
  WW.canSpeak = (lang = WW.lang) => !!(window.speechSynthesis && WW.voiceFor(lang));
  WW.speak = (text) => {
    if (!WW.canSpeak()) return false;
    try { speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(String(text).replace(/[🧭🧩📜✅❌▶🚶]/gu, '')); const v = WW.voiceFor(); u.voice = v; u.lang = v.lang; u.rate = 0.9; speechSynthesis.speak(u); return true; } catch (e) { return false; }
  };
  try { if (window.speechSynthesis) speechSynthesis.onvoiceschanged = () => { const t = ui.top(); if (t && t.opts.cls === 'talkov') t.render(); }; } catch (e) { }
  WW.speakBtn = (getText) => { if (!WW.canSpeak()) return null; const b = document.createElement('button'); b.className = 'speak'; b.textContent = '🔊'; b.title = T('readAloud'); b.setAttribute('aria-label', T('readAloud')); b.onclick = e => { e.stopPropagation(); WW.speak(getText()); }; return b; };

  /* ---------------- talking to a person ---------------- */
  ui.talk = (npc, onDone) => {
    let page = 0, stage = 'read', picked = null;
    const lines = npc.lines || [];
    WW.sfx('blip');
    ui.open({
      cls: 'talkov',
      render(box, h) {
        const face = WW.spriteCanvas(WW.personSprite ? WW.personSprite(npc) : 'npc', WW.lookPal(npc.look), 4, 11);
        face.className = 'face';
        const head = document.createElement('div'); head.className = 'talk-head';
        head.appendChild(face);
        head.insertAdjacentHTML('beforeend', `<div><div class="who">${esc(L(npc.name))}</div><div class="role">${esc(L(npc.role))}</div></div>`);
        // ✕ leaves the talk at any time; the person stays not-talked-to until the student finishes
        const x = document.createElement('button'); x.className = 'talkx'; x.textContent = '✕'; x.title = T('leave'); x.setAttribute('aria-label', T('leave'));
        x.onclick = () => h.close();
        const sp = WW.speakBtn(() => [...box.querySelectorAll('.talk-body .say, .talk-body .choices button, .talk-body .fb')].map(e => e.innerText).join('. '));
        if (sp) head.appendChild(sp);
        head.appendChild(x);
        box.appendChild(head);
        const body = document.createElement('div'); body.className = 'talk-body';
        box.appendChild(body);
        if (stage === 'read') {
          const ln = lines[page] || {};
          const txt = ln;
          body.innerHTML = `<p class="say">${WW.rich(txt)}</p><p class="hint">${page === 0 && /\[\[/.test(L(ln)) ? esc(T('tapWord')) : ''}</p>`;
          const acts = document.createElement('div'); acts.className = 'acts';
          if (page > 0) acts.appendChild(btn(T('back'), 'ghost', () => { page--; h.render(); }));
          acts.appendChild(btn(page < lines.length - 1 ? T('next') + ' ▶' : (npc.ask ? T('answer') + ' ▶' : npc.doneLabel ? esc(npc.doneLabel) + ' ▶' : T('close')), 'gold', () => {
            WW.sfx('blip');
            if (page < lines.length - 1) { page++; h.render(); }
            else if (npc.ask) { stage = 'ask'; h.render(); }
            else { h.close(); onDone && onDone(true); }
          }));
          body.appendChild(acts);
        } else {
          const a = npc.ask;
          body.innerHTML = `<p class="say q">${WW.rich(a.q)}</p>`;
          const list = document.createElement('div'); list.className = 'choices';
          WW.shuffle(a.choices.map((_, i) => i), (npc.x || 1) * 7 + (npc.y || 1)).forEach(i => {
            const ch = a.choices[i];
            const b = document.createElement('button'); b.dataset.i = i;
            b.innerHTML = WW.rich(ch.t || ch);
            if (picked != null && i === picked) b.className = ch.ok ? 'right' : 'wrong';
            b.onclick = () => {
              picked = i;
              if (ch.ok) {
                WW.sfx('good'); WW.chris.mood && WW.chris.mood('spin');
                if (!WW.run.asked.has(npc.id)) WW.answered(true, !(WW.run.tries[npc.id] > 0));
                if (!WW.run.asked.has(npc.id)) { WW.run.asked.add(npc.id); WW.gain(a.stat || 'pla', 1, 2, T('why_talk') + ' ' + WW.plain(npc.name)); WW.run.log.push({ who: WW.plain(npc.name), q: WW.plain(a.q), a: WW.plain(ch.t || ch), tries: (WW.run.tries[npc.id] || 0) + 1 }); }
              } else { WW.sfx('bad'); WW.chris.mood && WW.chris.mood('droop'); WW.answered(false); WW.run.tries[npc.id] = (WW.run.tries[npc.id] || 0) + 1; }
              h.render();
            };
            list.appendChild(b);
          });
          body.appendChild(list);
          if (picked != null) {
            const ch = a.choices[picked];
            const fb = document.createElement('div'); fb.className = 'fb ' + (ch.ok ? 'right' : 'wrong');
            fb.innerHTML = `<b>${esc(ch.ok ? T('right') : T('wrong'))}</b> ${WW.rich(ch.why || '')}`;
            body.appendChild(fb);
            const acts = document.createElement('div'); acts.className = 'acts';
            if (ch.ok) acts.appendChild(btn(T('cont') + ' ▶', 'gold', () => { h.close(); onDone && onDone(true); }));
            else acts.appendChild(btn(T('tryAgain'), 'ghost', () => { picked = null; h.render(); }));
            body.appendChild(acts);
          }
        }
      }
    });
  };
  function btn(label, kind, fn) {
    const b = document.createElement('button');
    b.className = 'pbtn ' + (kind || ''); b.innerHTML = label; b.onclick = fn; return b;
  }
  WW.btn = btn;

  /* a sign or a simple message */
  ui.message = (title, text, onDone) => {
    ui.open({
      cls: 'msgov',
      render(box, h) {
        box.innerHTML = `${title ? `<h3>${esc(title)}</h3>` : ''}<p class="say">${WW.rich(text)}</p>`;
        const acts = document.createElement('div'); acts.className = 'acts';
        acts.appendChild(btn(T('close'), 'gold', () => { h.close(); onDone && onDone(); }));
        box.appendChild(acts);
      }
    });
  };

  /* ---------------- look picker + hero preview ---------------- */
  function lookPicker(box, h) {
    const wrap = document.createElement('div'); wrap.className = 'looks';
    const prev = WW.spriteCanvas('hero', WW.heroPal(), 6); prev.className = 'heroprev';
    wrap.appendChild(prev);
    const rows = document.createElement('div');
    ['skin', 'hair', 'hat'].forEach(k => {
      const r = document.createElement('div'); r.className = 'lrow';
      r.innerHTML = `<span>${esc(T(k))}</span>`;
      WW.LOOK[k].forEach((col, i) => {
        const b = document.createElement('button'); b.className = 'sw' + ((WW.save.look[k] ?? (k === 'skin' ? 1 : 0)) === i ? ' on' : '');
        b.style.background = col; b.setAttribute('aria-label', T(k) + ' ' + (i + 1));
        b.onclick = () => { WW.save.look[k] = i; WW.store(); h.render(); };
        r.appendChild(b);
      });
      rows.appendChild(r);
    });
    wrap.appendChild(rows);
    box.appendChild(wrap);
  }

  /* ---------------- start screen ---------------- */
  ui.start = (onGo) => {
    let msg = '', newHero = !WW.save.name, openPart = '';
    ui.open({
      cls: 'startov',
      render(box, h) {
        const ep = WW.ep;
        box.innerHTML = `<div class="logo">WORLDWALKER</div><div class="sublogo">THE TORN ATLAS</div>
          <div class="epcard"><div class="epn">${esc(T('episode'))} ${esc(ep.id)} · ${esc(L(WW.REALMS[ep.realm]))}</div>
          <h2>${esc(L(ep.title))}</h2><div class="place">${esc(L(ep.place))}</div></div>
          <div class="langrow">${['en', 'es', 'fa'].map(l => `<button class="pbtn ${WW.lang === l ? 'gold' : ''}" data-l="${l}">${l === 'fa' ? 'دری' : l.toUpperCase()}</button>`).join('')}</div>`;
        box.querySelectorAll('[data-l]').forEach(b => (b.onclick = () => WW.setLang(b.dataset.l)));
        if (!newHero) {
          const s = WW.save;
          box.insertAdjacentHTML('beforeend', `<p class="wb">${esc(T('welcomeBack'))}, <b>${esc(s.name)}</b>! ${s.cls ? '· ' + esc(s.cls) : ''}</p>`);
          const acts = document.createElement('div'); acts.className = 'acts center';
          acts.appendChild(btn(T('cont') + ' ▶', 'gold big', () => go()));
          box.appendChild(acts);
          const nb = document.createElement('p'); nb.className = 'small';
          const a = document.createElement('a'); a.href = '#'; a.textContent = T('notYou');
          a.onclick = e => { e.preventDefault(); WW.resetHero(); newHero = true; h.render(); };
          nb.appendChild(a); box.appendChild(nb);
          return;
        }
        const s = WW.save;
        const form = document.createElement('div'); form.className = 'signin';
        form.innerHTML = `<h3>${esc(T('signIn'))}</h3>
          <label>${esc(T('firstName'))}<input id="si-name" maxlength="24" autocomplete="off" value="${esc(s.name || '')}"></label>
          <label>${esc(T('classCode'))}<input id="si-cls" maxlength="12" autocomplete="off" value="${esc(s.cls || '')}" placeholder="GEO-3B"></label>
          <label>${esc(T('secret'))}<input id="si-pin" maxlength="4" inputmode="numeric" autocomplete="off" type="password" value="${esc(s.pin || '')}"></label>`;
        box.appendChild(form);
        // PLAYTEST-3: Play sits right under the three boxes; the look and the Passport Code fold away below it
        const keep = () => { s.name = $('si-name').value.trim(); s.cls = $('si-cls').value.trim().toUpperCase(); s.pin = $('si-pin').value.trim(); WW.store(); };
        form.querySelectorAll('input').forEach(i => (i.oninput = keep));
        // Enter in a box goes to the next box, and from the last one it starts the game
        form.querySelectorAll('input').forEach((i, k, all) => (i.onkeydown = e => { if (e.key !== 'Enter') return; e.preventDefault(); if (all[k + 1]) all[k + 1].focus(); else playBtn.click(); }));
        const acts = document.createElement('div'); acts.className = 'acts center';
        const playBtn = btn(T('play') + ' ▶', 'gold big', () => {
          keep();
          if (!s.name) { msg = T('needName'); return h.render(); }
          if (s.pin && !/^\d{4}$/.test(s.pin)) { msg = T('needPin'); return h.render(); }
          go();
        });
        acts.appendChild(playBtn);
        box.appendChild(acts);
        if (msg) box.insertAdjacentHTML('beforeend', `<p class="err">${esc(msg)}</p>`);
        const more = document.createElement('div'); more.className = 'si-more';
        const lkB = btn('🎨 ' + T('pickLook'), 'ghost small', () => { openPart = openPart === 'look' ? '' : 'look'; h.render(); });
        const cdB = btn('📘 ' + T('haveCodeShort'), 'ghost small', () => { openPart = openPart === 'code' ? '' : 'code'; h.render(); });
        more.append(lkB, cdB); box.appendChild(more);
        if (openPart === 'look') {
          const lk = document.createElement('div'); lk.className = 'lookbox';
          lookPicker(lk, h);
          box.appendChild(lk);
        }
        if (openPart === 'code') {
          const pc = document.createElement('div'); pc.className = 'codein';
          pc.innerHTML = `<label>${esc(T('haveCode'))}<input id="si-code" placeholder="WW-XXXXX-XXXXX-XXXXX" autocomplete="off"></label>`;
          pc.appendChild(btn(T('useCode'), 'ghost', () => {
            const d = WW.readCode($('si-code').value);
            if (!d) { msg = T('badCode'); return h.render(); }
            keep(); WW.merge(d); s.look = d.look; WW.store(); msg = T('codeOk'); openPart = ''; h.render();
          }));
          box.appendChild(pc);
        }
      }
    });
    async function go() {
      WW.audioInit();
      const h = ui.top();
      if (WW.sheetOn()) { await WW.sheetLoad(); }
      h.close(); onGo();
    }
  };

  /* episode opening card */
  ui.intro = (onGo) => {
    ui.open({
      cls: 'introov',
      render(box, h) {
        const ep = WW.ep;
        const pip = WW.spriteCanvas('pip', null, 4); pip.className = 'pipface';
        box.appendChild(pip);
        // PLAYTEST-3: one sentence and Start. The goals live in ☰ and the Now card; Christopher says the rest on the map.
        box.insertAdjacentHTML('beforeend', `<div class="epn">${esc(T('episode'))} ${esc(ep.id)} · ${esc(L(ep.place))}</div><h2>${esc(L(ep.title))}</h2>
          <p class="say one">${esc((ep.id === '1.1' && !WW.save.metChris ? T('storyOne') : T('introOne')).replace('{p}', L(ep.place)))}</p>`);
        const acts = document.createElement('div'); acts.className = 'acts center';
        const go = btn(T('start') + ' ▶', 'gold big', () => { h.close(); onGo && onGo(); });
        acts.appendChild(go);
        box.appendChild(acts);
        setTimeout(() => go.focus && go.focus(), 30);
      }
    });
  };

  /* the atlas page flies up and back into the Passport before the finish screen (a short moment; skipped with reduced motion) */
  ui.pageHome = (at, done) => {
    const cv = $('ww-cv'), pass = $('ww-b-pass');
    if (WW.chris.mood) WW.chris.mood('cheer');
    if (WW.calm || !cv || !pass) return done();
    WW.paused = true; WW.sfx('power');
    const g = WW.game, [sx, sy] = g.screenOf(at[0], at[1]), cr = cv.getBoundingClientRect(), k = cr.width / cv.width;
    const pg = WW.spriteCanvas('page', null, 6); pg.className = 'pagefly';
    pg.style.left = (cr.left + ((at[0] - sx * 16) * 16 + 8) * k - 48) + 'px'; pg.style.top = (cr.top + ((at[1] - sy * 11) * 16) * k - 40) + 'px';
    document.body.appendChild(pg);
    const pr = pass.getBoundingClientRect();
    // 1: rise to the middle of the map and grow, 2: shrink into the Passport button
    requestAnimationFrame(() => requestAnimationFrame(() => { pg.style.left = (cr.left + cr.width / 2 - 48) + 'px'; pg.style.top = (cr.top + cr.height / 2 - 70) + 'px'; pg.style.transform = 'scale(1.6) rotate(-6deg)'; }));
    setTimeout(() => { pg.classList.add('home'); pg.style.left = (pr.left + pr.width / 2 - 48) + 'px'; pg.style.top = (pr.top + pr.height / 2 - 48) + 'px'; pg.style.transform = 'scale(.2) rotate(8deg)'; pg.style.opacity = '.6'; }, 750);
    setTimeout(() => { pg.remove(); pass.classList.add('gotpage'); setTimeout(() => pass.classList.remove('gotpage'), 900); WW.sfx('coin'); WW.paused = false; done(); }, 1400);
  };

  /* the base camp (camp.js) in a panel */
  ui.camp = () => ui.open({
    cls: 'campov',
    render(box, h) {
      const inner = document.createElement('div'); box.appendChild(inner);
      WW.camp.render(inner, () => { ui.hud(); WW.tools && WW.tools.render(); });
      requestAnimationFrame(() => { $('ww-ov').scrollTop = 0; });
      const a = document.createElement('div'); a.className = 'acts'; a.appendChild(btn(T('close'), 'gold', () => h.close())); box.appendChild(a);
    }
  });

  /* ---------------- passport ---------------- */
  ui.passport = () => {
    let msg = '';
    ui.open({
      cls: 'passov',
      render(box, h) {
        const s = WW.save;
        const top = document.createElement('div'); top.className = 'pp-top';
        const hero = WW.spriteCanvas('hero', WW.heroPal(), 5); hero.className = 'pp-hero';
        top.appendChild(hero);
        top.insertAdjacentHTML('beforeend', `<div><div class="pp-name">${esc(s.name || '—')}</div><div class="small">${esc(s.cls || '')}</div>
          <div class="pp-nums"><span>📄 ${esc(T('pages'))}: <b>${WW.doneCount()} / 24</b></span><span>● ${esc(T('coins'))}: <b>${s.coins || 0}</b></span></div></div>`);
        box.appendChild(top);
        let pw = `<h3>${esc(T('powers'))}</h3><div class="powers">`;
        WW.THEMES.forEach(th => {
          const v = s.stats[th.k] || 0;
          pw += `<div class="pw"><span class="pwi">${th.icon}</span><div><b>${esc(L(th.name))}</b> <span class="small">(${esc(L(th.full))})</span>
            <div class="bar"><b style="width:${Math.min(100, v / 30 * 100)}%;background:${th.col}"></b></div></div><span class="pwn">${v}</span></div>`;
        });
        pw += '</div>';
        box.insertAdjacentHTML('beforeend', pw);
        if (WW.run && ui.questSteps) box.insertAdjacentHTML('beforeend', `<h3>🏁 ${esc(T('goals'))} ${esc(WW.ep.id)}</h3><div class="ppgoals">${ui.questList()}</div>`);
        { const cb = btn('🏕️ ' + esc(T('campOpen')), 'teal', () => ui.camp()); cb.classList.add('campbtn'); box.appendChild(cb); }
        box.insertAdjacentHTML('beforeend', `<div class="pp-chris">🧭 <span><b>${esc(T('chrisName'))}</b> · ${esc(T('chrisJob'))}</span></div>`);
        let gr = `<h3>${esc(T('grow'))}</h3><p class="small">${esc(T('growHow'))}</p><div class="grow">`;
        WW.THEMES.forEach(th => {
          const v = s.stats[th.k] || 0, tr = WW.tier(th.k);
          gr += `<div class="gw"><b>${th.icon} ${esc(L(th.full))}</b> <span class="small">${v} · ${esc(T('lvl'))} ${tr} · ${tr < 2 ? esc(T('nextAt')) + ' ' + WW.TIERS[tr] : esc(T('maxed'))}</span><ul>` +
            WW.PERKS[th.k].map((p, i) => `<li class="${i < tr ? 'on' : ''}">${i < tr ? '✓' : '🔒 ' + WW.TIERS[i]} ${esc(L(p))}</li>`).join('') + '</ul></div>';
        });
        gr += `</div><p class="small">● ${esc(T('growCoins'))}</p>`;
        box.insertAdjacentHTML('beforeend', gr);
        let bag = `<h3>${esc(T('bag'))}</h3><div class="bag">`;
        WW.TOOLS.forEach((t, i) => {
          const has = WW.hasTool(t.id);
          bag += `<div class="slot ${has ? 'has' : ''}"><span class="ti">${has ? t.icon : '?'}</span><span>${has ? esc(L(t.name)) : esc(T('realm')) + ' ' + (i + 1)}</span></div>`;
        });
        bag += '</div>';
        if (WW.tools) bag += `<p class="small">🎒 ${esc(T('gathered'))}: ${['wood', 'fiber', 'seed'].map(k => `<b>${WW.tools.have(k)}</b> ${esc(T('item_' + k))}`).join(' · ')}</p>`;
        box.insertAdjacentHTML('beforeend', bag);
        let st = `<h3>${esc(T('stamps'))}</h3><div class="stamps">`;
        for (let r = 1; r <= 8; r++) {
          st += '<div class="scol">';
          WW.EPISODES.filter(e => e.realm === r).forEach(e => {
            const d = s.episodes[e.id];
            st += `<span class="stamp ${d && d.done ? 'on r' + r : ''}" title="${e.id}">${e.id}${d && d.stars ? '<i>' + '★'.repeat(d.stars) + '</i>' : ''}</span>`;
          });
          st += '</div>';
        }
        st += '</div>';
        box.insertAdjacentHTML('beforeend', st);
        const code = WW.passportCode();
        box.insertAdjacentHTML('beforeend', `<h3>${esc(T('yourCode'))}</h3><p class="small">${esc(T('codeHelp'))}</p>
          <div class="coderow"><code class="pcode">${code}</code></div>`);
        const cr = box.querySelector('.coderow');
        cr.appendChild(btn(T('copyCode'), 'gold', () => WW.copy(code).then(() => { msg = '✓'; h.render(); })));
        if (msg) cr.insertAdjacentHTML('beforeend', `<span class="ok">${msg}</span>`);
        const acts = document.createElement('div'); acts.className = 'acts';
        acts.appendChild(btn(T('close'), 'ghost', () => h.close()));
        box.appendChild(acts);
      }
    });
  };

  WW.copy = (text) => {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text).catch(() => fallback());
    return Promise.resolve(fallback());
    function fallback() {
      const ta = document.createElement('textarea'); ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); } catch (e) { } ta.remove();
    }
  };
  WW.download = (name, text) => {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([text], { type: 'text/plain;charset=utf-8' }));
    a.download = name; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  };

  /* ---------------- finish: page restored, reflect, save, turn in ---------------- */
  // paper confetti over the game screen
  WW.confetti = () => {
    if (WW.calm) return;
    const box = document.createElement('div'); box.className = 'confetti';
    const cols = ['#f2c14e', '#e04848', '#2aa198', '#2f7fd1', '#8e5bd6', '#7cc451', '#fffbe8'];
    for (let i = 0; i < 70; i++) {
      const p = document.createElement('i');
      p.style.left = Math.random() * 100 + '%'; p.style.background = cols[i % cols.length];
      p.style.animationDelay = (Math.random() * 0.8) + 's'; p.style.animationDuration = (1.8 + Math.random() * 1.6) + 's';
      p.style.setProperty('--dx', (Math.random() * 120 - 60) + 'px'); p.style.setProperty('--r', (Math.random() * 720 - 360) + 'deg');
      box.appendChild(p);
    }
    $('ww-screen').appendChild(box); setTimeout(() => box.remove(), 4200);
  };
  ui.finish = () => {
    const r = WW.run, ep = WW.ep;
    WW.confetti();
    let sheet = WW.sheetOn() ? 'saving' : 'off', note = '', board = '';
    ui.open({
      cls: 'finov',
      render(box, h) {
        const st = r.stars;
        box.innerHTML = `<div class="fin-head"><div class="pagebig"></div><div><div class="epn">${esc(T('episode'))} ${esc(ep.id)}</div>
          <h2>${esc(T('done'))}</h2><div class="stars">${'★'.repeat(st)}<span class="dim">${'★'.repeat(3 - st)}</span></div><div class="small">${esc(T('starWhy'))}</div></div></div>`;
        const pg = WW.spriteCanvas('page', null, 4); box.querySelector('.pagebig').appendChild(pg);
        // PLAYTEST-3: the reflection and "Turn in your work" come first (students who stop scrolling still turn in); rewards after
        box.insertAdjacentHTML('beforeend', `<h3>${esc(T('oneQ'))}</h3><p class="say">${WW.rich(ep.reflect.q)}</p>`);
        const starter = document.createElement('button'); starter.className = 'starter'; starter.innerHTML = esc(L(ep.reflect.starter)) + '…';
        starter.onclick = () => { const ta = box.querySelector('textarea'); if (!ta.value.trim()) { ta.value = WW.plain(ep.reflect.starter) + ' '; r.reflection = ta.value; } ta.focus(); };
        box.appendChild(starter);
        const ta = document.createElement('textarea'); ta.placeholder = T('reflectHint'); ta.value = r.reflection || ''; ta.rows = 3;
        ta.oninput = () => { r.reflection = ta.value; };
        box.appendChild(ta);
        box.insertAdjacentHTML('beforeend', `<h3>${esc(T('turnIn'))}</h3>`);
        const acts = document.createElement('div'); acts.className = 'acts';
        acts.appendChild(btn('📋 ' + T('copyWork'), 'gold', () => { WW.copy(workText()).then(() => { note = T('copied'); h.render(); }); }));
        acts.appendChild(btn('⬇ ' + T('download'), 'teal', () => WW.download(`Worldwalker ${ep.id} - ${WW.save.name || 'student'}.txt`, workText())));
        box.appendChild(acts);
        box.insertAdjacentHTML('beforeend', `<p class="small">${esc(note || T('turnInNote'))}</p>`);
        const nx = WW.EPISODES[WW.epIndex(ep.id) + 1];
        const nav = document.createElement('div'); nav.className = 'acts';
        if (WW.CONFIG.MODE === 'pages') {
          nav.appendChild(btn('🗺️ ' + T('map'), 'ghost', () => (location.href = 'index.html')));
          if (nx) nav.appendChild(btn(T('nextEp') + ' ' + nx.id + ' ▶', 'teal', () => (location.href = WW.epFile(nx.id))));
        } else if (nx) nav.insertAdjacentHTML('beforeend', `<p class="small"><b>${esc(T('nextEp'))} ${nx.id}:</b> ${esc(T('nextCanvas'))}</p>`);
        nav.appendChild(btn('📘 ' + T('passport'), 'ghost', () => ui.passport()));
        box.appendChild(nav);
        const sv = document.createElement('div'); sv.className = 'savebox';
        sv.innerHTML = `<div class="ok">${esc(T('savedHere'))}</div>` +
          (sheet === 'saving' ? `<div class="pending">${esc(T('savingSheet'))}</div>` : sheet === 'ok' ? `<div class="ok">${esc(T('savedSheet'))}</div>` : sheet === 'down' ? `<div class="bad">${esc(T('sheetDown'))}</div>` : '') +
          `<div class="small">${esc(T('yourCode'))}: <code class="pcode">${WW.passportCode()}</code></div>`;
        box.appendChild(sv);
        if (board) box.insertAdjacentHTML('beforeend', board); // the class top 5, once this page is saved in the Sheet
        if (r.newTool) box.insertAdjacentHTML('beforeend', `<div class="newtool">${r.newTool.icon} <b>${esc(T('gotTool'))}:</b> ${esc(L(r.newTool.name))}</div>`);
        const earned = (r.gains || []).filter(g => g.stat).map(g => { const th = WW.THEMES.find(t => t.k === g.stat); return `<li><span style="color:${th.col}">${th.icon}</span> <b>+${g.n} ${esc(L(th.full))}</b> · ${esc(g.why)}</li>`; }).join('');
        const coins = (r.gains || []).reduce((a, g) => a + g.coins, 0);
        box.insertAdjacentHTML('beforeend', `<h3>${esc(T('earned'))}</h3><ul class="earned">${earned}<li>● <b>+${coins} ${esc(T('coins'))}</b></li></ul>`);
        box.insertAdjacentHTML('beforeend', `<h3>${esc(T('learned'))}</h3><ul class="learned">${(ep.learned || []).map(l => `<li>${WW.rich(l)}</li>`).join('')}</ul>`);
      }
    });
    { const cf = document.querySelectorAll('.confetti'); if (cf.length) cf[cf.length - 1].style.zIndex = 4; } // behind the panel: never over the typing box
    if (sheet === 'saving') {
      WW.sheetSave(logEntry()).then(res => {
        sheet = res.ok ? 'ok' : 'down'; const t = ui.top(); if (t) t.render();
        // added in place (no new render), so a student typing the reflection keeps their place
        if (res.ok) WW.classAtlas().then(d => { board = WW.topBoard(d); const sb = document.querySelector('.finov .savebox'); if (board && sb) sb.insertAdjacentHTML('afterend', board); }).catch(() => { });
      });
    }
  };
  function logEntry() {
    const r = WW.run;
    return { episode: WW.ep.id, stars: r.stars, heartsLost: r.heartsLost, minutes: Math.round((Date.now() - r.t0) / 60000), missed: r.missed.map(i => 'Q' + (i + 1)), reflection: r.reflection || '' };
  }
  function workText() {
    const r = WW.run, ep = WW.ep, s = WW.save;
    const en = t => (t && t.en) || WW.plain(t);
    const lines = [];
    lines.push(`WORLDWALKER — Episode ${ep.id}: ${WW.plain({ en: en(ep.title) })}`);
    lines.push(`Name: ${s.name || ''}   Class: ${s.cls || ''}   Date: ${new Date().toLocaleDateString()}`);
    lines.push(`Stars: ${r.stars} of 3   Atlas scraps: ${r.scraps.size}/${ep.scraps.length}   Hearts lost: ${r.heartsLost}   Hints used: ${r.hints || 0}   Minutes: ${Math.round((Date.now() - r.t0) / 60000)}`);
    lines.push('');
    lines.push('TALKS (question — my answer — tries)');
    r.log.forEach(l => lines.push(`- ${l.who}: ${l.q} — ${l.a} (${l.tries} ${l.tries === 1 ? 'try' : 'tries'})`));
    lines.push('');
    if (WW.quest.on()) lines.push(WW.quest.log());
    lines.push(`CHALLENGE: ${WW.plain(ep.challenge.title)} — solved in ${r.challengeTries} ${r.challengeTries === 1 ? 'try' : 'tries'}`);
    lines.push(`GRUMP TRIAL: ${r.missed.length} missed ${r.missed.length ? '(' + r.missed.map(i => WW.plain(ep.boss.questions[i].q)).join(' | ') + ')' : ''}`);
    lines.push('');
    if (r.guesses && r.guesses.length) { // fun-pass-4: the guesses at the end of the cut scenes
      lines.push(`MY GUESSES (${r.guesses.filter(g => g.ok).length} of ${r.guesses.length} matched)`);
      r.guesses.forEach(g => lines.push(`- ${g.q} — my guess: ${g.a}${g.ok ? ' ✓' : ''}`));
      lines.push('');
    }
    lines.push('REFLECTION');
    lines.push('Q: ' + WW.plain(ep.reflect.q));
    lines.push('A: ' + (r.reflection || '(blank)'));
    lines.push('');
    lines.push('POWERS: ' + WW.THEMES.map(t => `${WW.plain(t.full)} ${s.stats[t.k] || 0}`).join(' · '));
    lines.push('PASSPORT CODE: ' + WW.passportCode());
    return lines.join('\n');
  }
  WW.workText = workText;
})();
