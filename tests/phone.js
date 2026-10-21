// node tests/phone.js [1.2 1.3]   plays episodes on a phone (390×844, touch) with TAPS ONLY: sign in, the arrow pad, ●,
// panel buttons. It talks to everyone, does the quest (chase or trade), opens the stone, beats the Grump, claims the page and
// taps "Copy my work". Every panel it opens must fit the screen with buttons big enough to tap and text big enough to read.
// The stone's challenge itself is finished with a shortcut (tests/touch.js covers tools and signposts by touch).
// Then a sideways phone (844×390) must still fit. Screenshots go to shots/phone/.
const { chromium } = require('playwright');
const path = require('path'), fs = require('fs');
const ROOT = path.join(__dirname, '..'), OUT = path.join(ROOT, 'shots', 'phone'); fs.mkdirSync(OUT, { recursive: true });
const ids = process.argv.slice(2).length ? process.argv.slice(2) : ['1.2', '1.3'];
let failed = 0; const ok = (c, m) => { console.log((c ? '  ✓ ' : '  ✗ ') + m); if (!c) failed++; return c; };
const D = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] };

async function play(b, id) {
  console.log('Episode ' + id + ' on a phone');
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });
  const p = await ctx.newPage(); const errs = []; p.on('pageerror', e => errs.push(e.message));
  const url = 'file://' + path.join(ROOT, 'dist', 'canvas', `Worldwalker ${id}.html`);
  const shot = n => p.screenshot({ path: path.join(OUT, `${id}-${n}.png`) });
  const st = () => p.evaluate(() => ({ x: WW.dbg.player.x, y: WW.dbg.player.y, dir: WW.dbg.player.dir, moving: !!WW.dbg.player.moving, paused: !!WW.paused, panel: !!WW.ui.top() }));
  const idle = () => p.waitForFunction(() => !WW.dbg.player.moving, null, { timeout: 3000 }).catch(() => { });
  const tap = async sel => { await p.locator(sel).first().scrollIntoViewIfNeeded(); await p.tap(sel); await p.waitForTimeout(160); };
  const pad = async d => { await p.tap(`#ww-dpad [data-d="${d}"]`); await p.waitForTimeout(140); await idle(); };
  const seen = new Set();
  // every panel: fits the width, its buttons can be tapped (at least 36px tall) and its text is at least 14px
  async function checkPanel(name) {
    if (seen.has(name)) return; seen.add(name);
    const r = await p.evaluate(() => {
      const box = document.querySelector('#ww-ov .ov-box'); if (!box) return null;
      const b = box.getBoundingClientRect();
      const btns = [...box.querySelectorAll('button')].filter(x => x.offsetParent);
      const small = btns.filter(x => x.getBoundingClientRect().height < 36).map(x => x.textContent.trim().slice(0, 20));
      const texts = [...box.querySelectorAll('p, li, .say, .choices button')].filter(x => x.offsetParent && x.textContent.trim());
      const tiny = texts.filter(x => parseFloat(getComputedStyle(x).fontSize) < 14).map(x => x.textContent.trim().slice(0, 20));
      return { fits: b.left >= 0 && b.right <= innerWidth + 1, small, tiny, wide: document.documentElement.scrollWidth > innerWidth + 1 };
    });
    if (!r) return;
    ok(r.fits && !r.wide, `${name}: fits the phone's width`);
    ok(!r.small.length, `${name}: buttons are big enough to tap${r.small.length ? ' — too small: ' + r.small.join(', ') : ''}`);
    ok(!r.tiny.length, `${name}: text is big enough to read${r.tiny.length ? ' — too small: ' + [...new Set(r.tiny)].slice(0, 4).join(' | ') : ''}`);
  }
  // tap through any open panel: a right answer if there are choices, else the main button
  async function throughPanels(kind = 'panel', right = null) {
    for (let k = 0; k < 25; k++) {
      const s = await st(); if (!s.panel) return;
      const cls = await p.evaluate(() => (WW.ui.top() && document.querySelector('#ww-ov .ov-box') && document.getElementById('ww-ov').className) || '');
      await checkPanel(kind + ' (' + cls.replace(/\s+/g, ' ').trim() + ')');
      if (await p.locator('#ww-ov .choices button:not([disabled])').count() && !(await p.locator('#ww-ov .fb').count())) {
        const want = right || await p.evaluate(() => { const box = document.querySelector('#ww-ov .ov-box'); return box && box.dataset.right; });
        let i = await p.evaluate(w => { const bs = [...document.querySelectorAll('#ww-ov .choices button')]; const j = w ? bs.findIndex(b => b.textContent.includes(w)) : -1; return j; }, want);
        if (i < 0) i = await p.evaluate(() => { const box = document.querySelector('#ww-ov .ov-box'); const q = WW.ui.currentQ && WW.ui.currentQ(); return q ? q : 0; });
        await tap(`#ww-ov .choices button >> nth=${i}`);
        continue;
      }
      const gold = p.locator('#ww-ov .pbtn.gold'); if (await gold.count()) { await gold.last().scrollIntoViewIfNeeded(); await gold.last().tap(); await p.waitForTimeout(220); continue; }
      const any = p.locator('#ww-ov .acts button'); if (await any.count()) { await any.last().tap(); await p.waitForTimeout(220); continue; }
      return;
    }
  }
  // walk next to (tx, ty) with the arrow pad, then face it; onto: stand on it
  async function walkTo(tx, ty, onto = false) {
    for (let tries = 0; tries < 8; tries++) {
      const plan = await p.evaluate(([tx, ty, onto, around]) => {
        const g = WW.game, [W, H] = g.size, s = [g.player.x, g.player.y], key = (x, y) => x + ',' + y;
        const busy = new Set(around ? WW.dbg.ents.filter(e => !e.gone && e.visible !== false && !(e.x === tx && e.y === ty) && !['scrap', 'qspot', 'crop', 'atlas'].includes(e.kind)).map(e => key(e.x, e.y)) : []);
        const goal = onto ? [[tx, ty]] : [[tx + 1, ty, 'left'], [tx - 1, ty, 'right'], [tx, ty + 1, 'up'], [tx, ty - 1, 'down']];
        const prev = new Map([[key(...s), null]]), q = [s];
        while (q.length) {
          const [x, y] = q.shift(); const hit = goal.find(o => o[0] === x && o[1] === y);
          if (hit) { const path = []; let k = key(x, y); while (prev.get(k)) { const [px, py, d] = prev.get(k); path.unshift(d); k = key(px, py); } return { path, face: hit[2] || null }; }
          for (const [d, [dx, dy]] of Object.entries({ up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] })) {
            const nx = x + dx, ny = y + dy, k = key(nx, ny);
            if (nx < 0 || ny < 0 || nx >= W || ny >= H || prev.has(k) || !g.walkable(nx, ny) || busy.has(k)) continue;
            prev.set(k, [x, y, d]); q.push([nx, ny]);
          }
        }
        return null;
      }, [tx, ty, onto, tries < 4]);
      if (!plan) { if (tries < 4) { tries = 3; continue; } throw new Error(`no way to walk to (${tx},${ty})`); }
      let blocked = false;
      for (const d of plan.path) {
        const a = await st(); if (a.dir !== d) await pad(d); // a tap on a new direction turns first
        await pad(d);
        const c = await st();
        if (c.panel) { if (onto && c.x === tx && c.y === ty) return; await throughPanels('on the way'); blocked = true; break; }
        if (c.x === a.x && c.y === a.y) { blocked = true; break; }
      }
      if (blocked) { await p.waitForTimeout(200); continue; }
      if (plan.face && (await st()).dir !== plan.face) await pad(plan.face);
      return;
    }
    throw new Error(`could not walk to (${tx},${ty})`);
  }
  const bump = async () => { await pad((await st()).dir); await p.waitForTimeout(250); }; // walk into what you face
  const talkTo = async (x, y, right) => { await walkTo(x, y); await bump(); await throughPanels('talk', right); };
  try {
    await p.goto(url); await p.evaluate(() => localStorage.clear()); await p.goto(url);
    await shot('0-signin'); await checkPanel('sign in');
    await p.tap('#si-name'); await p.keyboard.type('Phone'); await p.tap('#si-cls'); await p.keyboard.type('GEO-1'); await p.tap('#si-pin'); await p.keyboard.type('1234');
    await tap('#ww-ov .pbtn.gold.big'); await p.waitForSelector('.introov');
    await checkPanel('intro'); await shot('1-intro');
    await tap('#ww-ov .pbtn.gold.big');
    for (let i = 0; i < 8 && await p.evaluate(() => WW.chris.scene); i++) { await p.waitForSelector('.cbubble', { state: 'visible' }); await p.tap('.cbubble'); await p.waitForTimeout(150); }
    ok(true, 'signed in, read the intro and met Christopher with taps');
    await shot('2-map');
    await p.evaluate(() => WW.dbg.noSmudges());
    const E = await p.evaluate(() => JSON.parse(JSON.stringify({ npcs: WW.ep.npcs.map(n => ({ x: n.x, y: n.y, right: n.ask.choices.find(c => c.ok).t.en })), q: WW.ep.quest, stone: WW.ep.challenge.at })));
    for (const n of E.npcs) await talkTo(n.x, n.y, n.right);
    ok(await p.evaluate(() => WW.run.talked.size === WW.ep.npcs.length), 'talked to everyone and answered with taps');
    await shot('3-talked');
    // the quest
    const q = E.q, a = q.action;
    await talkTo(q.giver.x, q.giver.y); await talkTo(q.contact.x, q.contact.y);
    ok(await p.evaluate(() => WW.run.quest) === 2, 'took the quest with taps');
    if (a.type === 'chase') {
      for (let i = 0; i < a.clues.length; i++) {
        const z = a.clues[i].zones[0];
        const spot = await p.evaluate(z => { const g = WW.game; for (let y = z.y; y < z.y + z.h; y++) for (let x = z.x; x < z.x + z.w; x++) if (g.walkable(x, y) && !g.entAt(x, y)) return [x, y]; }, z);
        await walkTo(spot[0], spot[1], true);
        if (i === 0) await shot('4-chase-piece');
      }
      for (let k = 0; k < 6 && await p.evaluate(() => WW.run.quest) === 2; k++) {
        const f = await p.evaluate(() => { const e = WW.dbg.ents.find(o => o.kind === 'qfoe' && o.chase); return [e.x, e.y]; });
        await walkTo(f[0], f[1]); await bump(); await throughPanels('caught');
      }
    } else if (a.type === 'find') {
      await walkTo(a.at[0], a.at[1], true); await throughPanels('found');
    } else if (a.type === 'trade' && a.choices.every(c => c.at)) {
      await talkTo(a.trader.x, a.trader.y);
      const good = a.choices.find(c => c.ok);
      await walkTo(good.at[0], good.at[1]); await bump(); await shot('4-trade-carry');
      await talkTo(a.trader.x, a.trader.y);
    }
    ok(await p.evaluate(() => WW.run.quest) === 3, 'did the quest action (' + a.type + ') with taps');
    await talkTo(q.giver.x, q.giver.y);
    ok(await p.evaluate(() => WW.run.quest) === 4, 'finished the quest with taps');
    // the stone: open it by walking into it; the challenge itself with a shortcut
    await walkTo(E.stone[0], E.stone[1]); await bump();
    await checkPanel('compass stone'); await shot('5-stone');
    await p.evaluate(() => { const h = WW.ui.top(); if (h) h.close(); WW.run.challengeDone = true; WW.game.onChallengeDone(); });
    await p.waitForTimeout(800);
    // the Grump: walk into its fog and answer with taps until it is beaten
    const boss = await p.evaluate(() => JSON.parse(JSON.stringify(WW.ep.boss.questions.map(q => q.choices[q.answer].en || q.choices[q.answer]))));
    for (let k = 0; k < 8 && !(await p.evaluate(() => WW.run.bossDone)); k++) {
      const [bx, by] = await p.evaluate(() => WW.game.bossAt());
      const fog = await p.evaluate(() => WW.run.fog && WW.run.fog.set.size ? [...WW.run.fog.set][0].split(',').map(Number) : null);
      const target = fog ? await p.evaluate(([bx, by]) => { const f = WW.run.fog, p = WW.dbg.player; let best = null, bd = 1e9; f.set.forEach(k => { const [x, y] = k.split(',').map(Number); const d = Math.abs(x - p.x) + Math.abs(y - p.y); if (d < bd) { bd = d; best = [x, y]; } }); return best; }, [bx, by]) : [bx, by];
      await walkTo(target[0], target[1]); await bump();
      if (k === 0) { await shot('6-grump'); }
      for (let j = 0; j < 12 && (await st()).panel; j++) {
        await checkPanel('Grump question');
        const qi = await p.evaluate(() => { const b = document.querySelector('#ww-ov .ov-box'); return b && b.dataset.q != null ? +b.dataset.q : -1; });
        if (qi >= 0 && await p.locator('#ww-ov .choices button').count() && !(await p.locator('#ww-ov .fb').count())) {
          const i = await p.evaluate(qi => WW.ep.boss.questions[qi].answer, qi); await tap(`#ww-ov .choices button >> nth=${i}`);
        } else { const g = p.locator('#ww-ov .pbtn.gold'); if (await g.count()) { await g.last().scrollIntoViewIfNeeded(); await g.last().tap(); await p.waitForTimeout(300); } else break; }
      }
      await p.waitForFunction(() => !WW.paused, null, { timeout: 4000 }).catch(() => { });
    }
    ok(await p.evaluate(() => WW.run.bossDone), 'beat the Grump with taps');
    // claim the page: walk onto it
    const pg = await p.evaluate(() => WW.game.bossAt());
    await walkTo(pg[0], pg[1], true); await p.waitForTimeout(1500);
    for (let k = 0; k < 6 && !(await p.locator('#ww-ov .pbtn', { hasText: /Copy my work/ }).count()); k++) { const g = p.locator('#ww-ov .pbtn.gold'); if (!(await g.count())) break; await g.last().scrollIntoViewIfNeeded(); await g.last().tap(); await p.waitForTimeout(500); }
    await checkPanel('finish'); await shot('7-finish');
    const copy = p.locator('#ww-ov .pbtn', { hasText: /Copy my work/ });
    ok(await copy.count() > 0, 'the finish panel has "Copy my work"');
    if (await copy.count()) { await p.fill('#ww-ov textarea', 'A place that is clear in my mental map is my school.').catch(() => { }); await copy.first().scrollIntoViewIfNeeded(); await copy.first().tap(); await p.waitForTimeout(400); await shot('8-copied'); ok(true, 'tapped "Copy my work"'); }
    await p.evaluate(() => { while (WW.ui.top()) WW.ui.top().close(); }); await p.waitForTimeout(400);
    await p.evaluate(() => { while (WW.ui.top()) WW.ui.top().close(); });
    // the other buttons: goals, Passport
    await p.tap('#ww-dpad [data-d="goals"]').catch(() => { }); await p.waitForTimeout(300); ok(await p.locator('#ww-qpop').isVisible().catch(() => false), 'the ☰ pad button shows the goals');
    const pass = p.locator('#ww-b-pass');
    if (await pass.count()) { await pass.tap(); await p.waitForTimeout(500); await checkPanel('Passport'); await shot('9-passport'); await p.evaluate(() => { const h = WW.ui.top(); if (h) h.close(); }); }
    // turned sideways
    await p.setViewportSize({ width: 844, height: 390 }); await p.waitForTimeout(600);
    const side = await p.evaluate(() => { const s = document.getElementById('ww-screen').getBoundingClientRect(), d = document.getElementById('ww-dpad').getBoundingClientRect(); return { scroll: document.documentElement.scrollHeight > innerHeight + 1 || document.documentElement.scrollWidth > innerWidth + 1, map: s.bottom <= innerHeight + 1 && s.right <= innerWidth + 1 && s.height > 150, pad: d.height === 0 || (d.bottom <= innerHeight + 1 && d.right <= innerWidth + 1) }; });
    await shot('10-sideways');
    ok(!side.scroll && side.map && side.pad, `sideways (844×390): map and arrow pad fit without scrolling${JSON.stringify(side)}`);
  } catch (e) { ok(false, e.message.split('\n')[0]); await shot('x-problem').catch(() => { }); }
  ok(!errs.length, 'no page errors ' + errs.join(' | '));
  await ctx.close();
}
(async () => {
  const b = await chromium.launch();
  for (const id of ids) await play(b, id);
  await b.close(); console.log(failed ? failed + ' failed' : 'all good'); process.exitCode = failed ? 1 : 0;
})();
