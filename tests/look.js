// node tests/look.js [1.1 6.1 ...]   screenshots episodes in the real game after a few seconds, to check weather, light and the living world
const { chromium } = require('playwright');
const path = require('path'), fs = require('fs');
const ROOT = path.join(__dirname, '..'), OUT = path.join(ROOT, 'shots', 'look'); fs.mkdirSync(OUT, { recursive: true });
const ids = process.argv.slice(2).length ? process.argv.slice(2) : ['1.1', '2.1', '2.3', '3.2', '4.1', '6.1', '7.1', '7.3'];
(async () => {
  const b = await chromium.launch(); const errs = [];
  for (const id of ids) {
    const p = await b.newPage({ viewport: { width: 1000, height: 820 } });
    p.on('pageerror', e => errs.push(id + ': ' + e.message));
    const f = 'file://' + path.join(ROOT, 'game', 'ep-' + id.replace('.', '-') + '.html');
    await p.goto(f); await p.evaluate(() => localStorage.clear()); await p.goto(f);
    await p.fill('#si-name', 'Tester'); await p.locator('#ww-ov .pbtn.gold.big').click();
    await p.waitForSelector('.introov'); await p.locator('#ww-ov .pbtn.gold.big').click();
    await p.evaluate(() => WW.dbg.noSmudges());
    await p.waitForTimeout(2500);
    await (await p.$('#ww-cv')).screenshot({ path: path.join(OUT, id + '.png') });
    await p.close();
  }
  await b.close();
  console.log(errs.length ? errs.join('\n') : 'no page errors');
})();
