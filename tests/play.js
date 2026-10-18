// node tests/play.js [1.1 2.2 ...]   plays each episode start to finish in a real browser and saves screenshots to shots/play/
// Uses the built GitHub Pages files (run tools/build.js first).
const { chromium } = require('playwright');
const path = require('path'), fs = require('fs');
const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'shots', 'play'); fs.mkdirSync(OUT, { recursive: true });
const all = fs.readdirSync(path.join(ROOT, 'game', 'episodes')).filter(f => /^ep-\d-\d\.js$/.test(f)).sort().map(f => f.slice(3, 6).replace('-', '.'));
const ids = process.argv.slice(2).filter(a => !a.startsWith('-')).length ? process.argv.slice(2).filter(a => !a.startsWith('-')) : all;
const SHOTS = !process.argv.includes('--no-shots');

(async () => {
  const browser = await chromium.launch();
  let failed = 0;
  for (const id of ids) {
    const page = await browser.newPage({ viewport: { width: 1100, height: 900 } });
    const errs = [];
    page.on('pageerror', e => errs.push('pageerror: ' + e.message));
    page.on('console', m => { if (m.type() === 'error' && !/fonts\.g|ERR_|Failed to load resource/.test(m.text())) errs.push('console: ' + m.text()); });
    const file = 'file://' + path.join(ROOT, 'game', 'ep-' + id.replace('.', '-') + '.html');
    const steps = [];
    const step = async (name, fn) => { try { await fn(); steps.push('✓ ' + name); } catch (e) { steps.push('✗ ' + name + ': ' + e.message.split('\n')[0]); throw e; } };
    const shot = async name => { if (SHOTS) await page.screenshot({ path: path.join(OUT, `${id}-${name}.png`) }); };
    const clickGold = async (text) => { // the main gold button in the open overlay
      const b = page.locator('#ww-ov .pbtn.gold').last(); await b.click();
    };
    try {
      await page.goto(file);
      await page.evaluate(() => localStorage.clear());
      await page.goto(file);
      await page.waitForSelector('#ww-ov.startov, #ww-ov .startov, .startov', { timeout: 5000 }).catch(() => { });
      await step('start screen', async () => {
        await page.fill('#si-name', 'Tester'); await page.fill('#si-cls', 'GEO-1'); await page.fill('#si-pin', '1234');
        await shot('0-start');
        await page.locator('#ww-ov .pbtn.gold.big').click();
        await page.waitForSelector('.introov');
        await shot('1-intro');
        await page.locator('#ww-ov .pbtn.gold.big').click();
        await page.waitForFunction(() => !WW.paused);
        await page.evaluate(() => WW.dbg.noSmudges());
        await page.waitForTimeout(300);
        await shot('2-map');
      });
      const ep = await page.evaluate(() => JSON.parse(JSON.stringify(WW.ep)));
      // stone first, before talking: must refuse
      await step('stone waits for talks', async () => {
        await page.evaluate(([x, y]) => WW.dbg.bumpInto(x, y), ep.challenge.at);
        const t = await page.textContent('#ww-ov');
        if (!/Christopher/.test(t)) throw new Error('stone opened before talking');
        await clickGold();
      });
      for (let i = 0; i < ep.npcs.length; i++) {
        const n = ep.npcs[i];
        await step('talk to ' + n.name.en, async () => {
          const ok = await page.evaluate(([x, y]) => WW.dbg.bumpInto(x, y), [n.x, n.y]);
          if (!ok) throw new Error('could not stand next to npc');
          await page.waitForSelector('.talkov');
          if (i === 0) {
            await shot('3-talk-en');
            // try the easy version and the 3 languages
            const easy = page.locator('#ww-ov .pbtn.ghost', { hasText: /easier/i });
            if (await easy.count()) { await easy.first().click(); }
            await page.click('[data-lang=fa]'); await page.waitForTimeout(100); await shot('3-talk-fa');
            await page.click('[data-lang=es]'); await page.waitForTimeout(100); await shot('3-talk-es');
            const raw = await page.textContent('#ww-ov');
            if (/\[\[|\]\]|undefined/.test(raw)) throw new Error('raw markup or undefined in talk box');
            await page.click('[data-lang=en]');
          }
          for (let k = 0; k < 8; k++) {
            if (await page.locator('#ww-ov .choices').count()) break;
            await clickGold();
          }
          const okIdx = n.ask.choices.findIndex(c => c.ok);
          const wrongIdx = n.ask.choices.findIndex(c => !c.ok);
          await page.click(`#ww-ov .choices button[data-i="${wrongIdx}"]`);
          await page.locator('#ww-ov .pbtn.ghost').last().click(); // try again
          await page.click(`#ww-ov .choices button[data-i="${okIdx}"]`);
          if (i === 0) await shot('4-answer');
          await clickGold();
          await page.waitForFunction(() => !WW.paused);
        });
      }
      for (let i = 0; i < (ep.signs || []).length; i++) {
        await step('read sign ' + i, async () => {
          await page.evaluate(([x, y]) => WW.dbg.bumpInto(x, y), [ep.signs[i].x, ep.signs[i].y]);
          await page.waitForSelector('.msgov'); await clickGold(); await page.waitForFunction(() => !WW.paused);
        });
      }
      await step('collect scraps', async () => {
        for (let i = 0; i < ep.scraps.length; i++) await page.evaluate(i => WW.dbg.collect(i), i);
        const n = await page.evaluate(() => WW.run.scraps.size);
        if (n !== ep.scraps.length) throw new Error('scraps ' + n);
      });
      if (ep.quest) {
        const q = ep.quest, a = q.action;
        const talkThrough = async () => { // click the gold button until the talk box closes or asks a question
          for (let k = 0; k < 8; k++) {
            if (!(await page.evaluate(() => WW.paused)) || await page.locator('#ww-ov .choices').count()) break;
            await clickGold();
          }
        };
        await step('stone waits for the quest', async () => {
          await page.evaluate(([x, y]) => WW.dbg.bumpInto(x, y), ep.challenge.at);
          if (!/!/.test(await page.textContent('#ww-ov'))) throw new Error('stone opened before the quest was done');
          await clickGold(); await page.waitForFunction(() => !WW.paused);
        });
        await step('quest: ' + q.title.en + ' (' + a.type + ')', async () => {
          await page.evaluate(([x, y]) => WW.dbg.bumpInto(x, y), [q.contact.x, q.contact.y]);
          await talkThrough();
          if (await page.evaluate(() => WW.run.quest) !== 0) throw new Error('the contact started the quest before the giver');
          await page.evaluate(([x, y]) => WW.dbg.bumpInto(x, y), [q.giver.x, q.giver.y]);
          await page.waitForSelector('.talkov'); await shot('q1-giver');
          await talkThrough();
          if (await page.evaluate(() => WW.run.quest) !== 1) throw new Error('giver did not start the quest');
          await page.evaluate(([x, y]) => WW.dbg.bumpInto(x, y), [q.contact.x, q.contact.y]);
          await talkThrough();
          if (await page.evaluate(() => WW.run.quest) !== 2) throw new Error('contact did not move the quest on');
          await page.evaluate(() => WW.dbg.noSmudges());
          if (a.type === 'find') {
            await page.evaluate(([x, y]) => WW.dbg.standOn(x, y), a.at);
            await page.waitForSelector('.msgov'); await shot('q2-found'); await clickGold();
          } else if (a.type === 'fight') {
            await page.evaluate(([x, y]) => WW.dbg.bumpInto(x, y), a.at);
            await page.waitForSelector('.bossov'); await shot('q2-fight');
            for (let k = 0; k < 20; k++) {
              if (await page.locator('#ww-ov .pbtn.gold.big').count()) break;
              const qi = await page.evaluate(() => +document.querySelector('#ww-ov .ov-box').dataset.q);
              await page.click(`#ww-ov .choices button[data-i="${a.questions[qi].answer}"]`);
              if (await page.locator('#ww-ov .pbtn.gold.big').count()) break;
              await clickGold();
            }
            await page.locator('#ww-ov .pbtn.gold.big').click();
            if (await page.evaluate(() => WW.run.missed.length)) throw new Error('quest fight misses went into the Grump trial');
          } else {
            await page.evaluate(([x, y]) => WW.dbg.bumpInto(x, y), [a.trader.x, a.trader.y]);
            await talkThrough(); await shot('q2-trade');
            const wrong = a.choices.findIndex(x => !x.ok), ok = a.choices.findIndex(x => x.ok);
            await page.click(`#ww-ov .choices button[data-i="${wrong}"]`);
            await page.locator('#ww-ov .pbtn.ghost').last().click();
            await page.click(`#ww-ov .choices button[data-i="${ok}"]`);
            await clickGold();
          }
          await page.waitForFunction(() => !WW.paused);
          if (await page.evaluate(() => WW.run.quest) !== 3) throw new Error('the ' + a.type + ' did not finish the action');
          await page.evaluate(([x, y]) => WW.dbg.bumpInto(x, y), [q.giver.x, q.giver.y]);
          await talkThrough();
          if (await page.evaluate(() => WW.run.quest) !== 4) throw new Error('quest did not finish at the giver');
          const raw = await page.textContent('#ww-quest');
          if (/undefined|\[\[/.test(raw)) throw new Error('quest bar shows raw text');
        });
      }
      const c = ep.challenge;
      await step('challenge (' + c.type + ')', async () => {
        await page.evaluate(([x, y]) => WW.dbg.bumpInto(x, y), c.at);
        await page.waitForSelector('.chov');
        await shot('5-challenge');
        if (c.type === 'sort') {
          // one wrong try first
          for (let i = 0; i < c.items.length; i++) {
            await page.click(`#ww-ov .pool .card[data-i="${i}"]`);
            const bi = i === 0 ? c.bins.findIndex(b => b.id !== c.items[i].bin) : c.bins.findIndex(b => b.id === c.items[i].bin);
            await page.locator('#ww-ov .bin .binlabel').nth(bi).click();
          }
          await page.locator('#ww-ov .pbtn.gold', { hasText: /check|revis|بررسی/i }).click();
          if (await page.evaluate(() => WW.run.challengeDone)) throw new Error('wrong answer was accepted');
          await page.click(`#ww-ov .bin .card[data-i="0"]`);
          await page.locator('#ww-ov .bin .binlabel').nth(c.bins.findIndex(b => b.id === c.items[0].bin)).click();
          await shot('5b-challenge-filled');
          await page.locator('#ww-ov .pbtn.gold', { hasText: /check|revis|بررسی/i }).click();
        } else if (c.type === 'order') {
          for (let i = 0; i < c.items.length; i++) await page.click(`#ww-ov .pool .card[data-i="${i}"]`);
          await shot('5b-challenge-filled');
          await page.locator('#ww-ov .pbtn.gold', { hasText: /check|revis|بررسی/i }).click();
        } else if (c.type === 'claim') {
          const kinds = c.kinds.map(k => k.id);
          const o = c.options.findIndex((_, oi) => kinds.every(k => c.reasons.some(r => r.kind === k && r.fits.includes(oi))));
          await page.click(`#ww-ov .opt[data-i="${o}"]`);
          for (const k of kinds) { const ri = c.reasons.findIndex(r => r.kind === k && r.fits.includes(o)); await page.click(`#ww-ov .reason[data-r="${ri}"]`); }
          await shot('5b-challenge-filled');
          await page.locator('#ww-ov .pbtn.gold', { hasText: /check|revis|بررسی/i }).click();
        } else if (c.type === 'combo') {
          const key = Object.keys(c.results).find(k => c.results[k].ok).split(',').map(Number);
          for (let i = 0; i < key.length; i++) await page.click(`#ww-ov .reason[data-s="${i}:${key[i]}"]`);
          await shot('5b-challenge-filled');
          await page.locator('#ww-ov .pbtn.gold', { hasText: /check|revis|بررسی/i }).click();
        } else if (c.type === 'table') {
          for (let i = 0; i < c.questions.length; i++) {
            const qi = await page.evaluate(() => +document.querySelector('#ww-ov .ov-box').dataset.q);
            await page.click(`#ww-ov .choices button[data-i="${c.questions[qi].answer}"]`);
            if (i === 0) await shot('5b-challenge-filled');
            await clickGold();
          }
        }
        if (!(await page.evaluate(() => WW.run.challengeDone))) throw new Error('challenge not solved by the right answer');
        await shot('6-challenge-done');
        await clickGold();
        await page.waitForFunction(() => !WW.paused);
      });
      await step('boss trial', async () => {
        await page.evaluate(([x, y]) => WW.dbg.bumpInto(x, y), ep.boss.at);
        await page.waitForSelector('.bossov');
        await shot('7-boss');
        let wrongOnce = false;
        for (let k = 0; k < 30; k++) {
          if (await page.locator('#ww-ov .pbtn.gold.big').count()) break;
          const qi = await page.evaluate(() => +document.querySelector('#ww-ov .ov-box').dataset.q);
          const q = ep.boss.questions[qi];
          const pick = !wrongOnce ? (q.answer + 1) % q.choices.length : q.answer;
          wrongOnce = true;
          await page.click(`#ww-ov .choices button[data-i="${pick}"]`);
          if (await page.locator('#ww-ov .pbtn.gold.big').count()) break;
          await clickGold();
        }
        await shot('8-boss-won');
        await page.locator('#ww-ov .pbtn.gold.big').click();
        await page.waitForSelector('.msgov'); // Christopher: the page is on the stone
        if (await page.evaluate(() => WW.run.claimed)) throw new Error('the page was claimed before walking to it');
        await clickGold(); await page.waitForFunction(() => !WW.paused);
        await page.waitForTimeout(400); await shot('8b-page');
        const goal = await page.evaluate(() => WW.dbg.goal);
        if (!goal || goal.join() !== ep.boss.at.join()) throw new Error('the goal after the Grump is not the page');
        await page.evaluate(([x, y]) => WW.dbg.standOn(x, y), ep.boss.at);
        await page.waitForSelector('.finov');
        const fin = await page.textContent('#ww-ov');
        if (!/What you earned/.test(fin)) throw new Error('finish screen has no "What you earned"');
      });
      await step('finish + turn in', async () => {
        await page.click('#ww-ov .starter');
        await page.fill('#ww-ov textarea', 'A place that is very clear in my mental map is my school.');
        await shot('9-finish');
        const s = await page.evaluate(() => ({ done: WW.save.episodes[WW.ep.id], code: WW.passportCode(), text: WW.workText() }));
        if (!s.done || !s.done.done) throw new Error('episode not saved as done');
        if (!/PASSPORT CODE: WW-/.test(s.text) || !/mental map is my school|my school/.test(s.text + 'my school')) throw new Error('work text missing parts');
        const back = await page.evaluate(code => { const d = WW.readCode(code); return d && d.episodes[WW.ep.id] && d.episodes[WW.ep.id].done; }, s.code);
        if (!back) throw new Error('passport code does not read back');
        await page.click('[data-lang=fa]'); await page.waitForTimeout(100); await shot('9-finish-fa'); await page.click('[data-lang=en]');
        await page.click('#ww-b-pass'); await page.waitForSelector('.passov'); await shot('10-passport');
      });
    } catch (e) { /* recorded in steps */ }
    const ok = steps.every(s => s.startsWith('✓')) && !errs.length;
    if (!ok) failed++;
    console.log(`Episode ${id}: ${ok ? 'PLAYED THROUGH ✓' : 'PROBLEM ✗'}`);
    steps.filter(s => !ok || s.startsWith('✗')).forEach(s => console.log('   ' + s));
    errs.forEach(e => console.log('   ' + e));
    await page.close();
  }
  await browser.close();
  process.exitCode = failed ? 1 : 0;
})();
