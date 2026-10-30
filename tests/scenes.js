// node tests/scenes.js [1.1 …]   the cut scenes (fun-pass-4): the start scene plays once after Start, Skip works,
// the page scene plays before the finish screen, reduced motion keeps still. Pictures go to shots/scenes/
const { chromium } = require('playwright'); const path = require('path');
const ROOT = path.join(__dirname, '..'), OUT = path.join(ROOT, 'shots', 'scenes');
const ids = process.argv.slice(2).length ? process.argv.slice(2) : ['1.1', '4.2', '8.1'];
(async () => {
  let failed = 0; const ok = (c, w) => { console.log((c ? '✓ ' : '✗ ') + w); if (!c) failed++; };
  const b = await chromium.launch();
  for (const [id, lang, size] of ids.map(i => [i, 'en', [1366, 768]]).concat([[ids[0], 'fa', [654, 820]], [ids[0], 'es', [390, 844]]])) {
    const p = await b.newPage({ viewport: { width: size[0], height: size[1] } }); const errs = []; p.on('pageerror', e => errs.push(e.message));
    const file = 'file://' + path.join(ROOT, 'game', 'ep-' + id.replace('.', '-') + '.html');
    await p.goto(file); await p.evaluate(() => localStorage.clear()); await p.goto(file); await p.waitForSelector('.startov');
    if (lang !== 'en') await p.evaluate(l => WW.setLang(l), lang);
    await p.fill('#si-name', 'Sam'); await p.locator('#ww-ov .pbtn.gold.big').click(); await p.waitForSelector('.introov');
    await p.locator('#ww-ov .pbtn.gold.big').click();
    ok(await p.waitForSelector('.cutov', { timeout: 3000 }).then(() => true, () => false), `${id} ${lang}: the start scene opens after Start`);
    await p.waitForTimeout(1800);
    await p.screenshot({ path: path.join(OUT, `${id}-${lang}-${size[0]}-start.png`) });
    const fits = await p.evaluate(() => { const r = document.querySelector('.cutov .ov-box').getBoundingClientRect(); return r.bottom <= innerHeight + 1 && document.documentElement.scrollWidth <= innerWidth; });
    ok(fits, `${id} ${lang} ${size[0]}×${size[1]}: the scene fits the screen`);
    if (lang === 'en') { // Next through the cards
      const n = await p.evaluate(() => WW.ep.scenes.start.length);
      for (let k = 0; k < n; k++) await p.locator('#ww-ov .pbtn.gold').last().click();
      // the guess: two choices; a pick shows a why and Continue; it is kept for the student's work, +1 coin
      ok(!!(await p.$('.cut-choices')), `${id}: a guess comes after the last card`);
      const coins = await p.evaluate(() => WW.save.coins || 0);
      await p.locator('.cut-choices button').nth(1).click(); await p.waitForTimeout(150);
      await p.screenshot({ path: path.join(OUT, `${id}-${lang}-guess.png`) });
      const g = await p.evaluate(() => ({ why: !!document.querySelector('.cut-why'), kept: (WW.run.guesses || []).length, coins: WW.save.coins || 0 }));
      ok(g.why && g.kept === 1 && g.coins === coins + 1, `${id}: picking shows why, keeps the guess and gives +1 coin`);
      await p.locator('#ww-ov .pbtn.gold').last().click();
    } else await p.locator('#ww-ov .pbtn.ghost').click(); // Skip
    ok(!(await p.$('.cutov')) && await p.evaluate(() => !!WW.save.seen[WW.ep.id + 's']), `${id} ${lang}: ${lang === 'en' ? 'Next' : 'Skip'} ends the scene and it is saved as seen`);
    if (lang === 'en') {
      await p.goto(file); await p.waitForSelector('.startov'); await p.locator('#ww-ov .pbtn.gold.big').click().catch(() => { });
      await p.waitForSelector('.introov', { timeout: 3000 }).catch(() => { }); await p.locator('#ww-ov .pbtn.gold.big').click(); await p.waitForTimeout(500);
      ok(!(await p.$('.cutov')), `${id}: the start scene does not play a second time`);
      await p.evaluate(() => { WW.chris.skip(); WW.dbg.noSmudges && WW.dbg.noSmudges(); WW.game.preview = null; });
      await p.evaluate(() => WW.dbg.finish ? WW.dbg.finish() : null);
    }
    ok(!errs.length, `${id} ${lang}: no page errors ${errs.join(' | ')}`);
    await p.close();
  }
  // the page scene, and reduced motion: open it straight on a fresh hero
  const p = await b.newPage({ viewport: { width: 1366, height: 768 }, reducedMotion: 'reduce' });
  const file = 'file://' + path.join(ROOT, 'game', 'ep-' + ids[0].replace('.', '-') + '.html');
  await p.goto(file); await p.evaluate(() => localStorage.clear()); await p.goto(file); await p.waitForSelector('.startov');
  await p.evaluate(() => { WW.ui.close(WW.ui.top()); let done = false; WW.scene('page', () => (window.__done = true)); });
  await p.waitForSelector('.cutov'); await p.waitForTimeout(600);
  const a = await p.locator('.cut-cv').screenshot(); await p.waitForTimeout(700); const c = await p.locator('.cut-cv').screenshot();
  ok(WW_same(a, c), 'reduced motion: the page scene stands still');
  await p.screenshot({ path: path.join(OUT, `${ids[0]}-page.png`) });
  await p.locator('#ww-ov .pbtn.gold').last().click(); // Next: the "what's next?" guess
  ok(!!(await p.$('.cut-choices')), 'the page scene ends with a "what\'s next?" guess');
  await p.locator('.cut-choices button').first().click(); await p.waitForTimeout(150);
  await p.screenshot({ path: path.join(OUT, `${ids[0]}-page-guess.png`) });
  await p.locator('#ww-ov .pbtn.gold').last().click();
  ok(await p.evaluate(() => window.__done === true), 'the page scene ends with Continue and then the finish screen comes');
  await b.close(); console.log(failed ? failed + ' failed' : 'all good'); process.exitCode = failed ? 1 : 0;
  function WW_same(x, y) { return Buffer.compare(x, y) === 0; }
})();
