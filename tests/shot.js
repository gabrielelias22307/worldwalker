// node tests/shot.js <page.html> <out-name> [width]  -> shots/<out-name>.png, prints page errors
const { chromium } = require('playwright'); const path = require('path');
(async () => {
  const [f, name, w] = process.argv.slice(2);
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: +(w || 1300), height: 900 } });
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  await p.goto('file://' + path.resolve(f)); await p.waitForTimeout(900);
  await p.screenshot({ path: path.join(__dirname, '..', 'shots', name + '.png'), fullPage: true });
  console.log(name, 'errors:', errs.join(' | ') || 'none', 'scrollW', await p.evaluate(() => document.documentElement.scrollWidth));
  await b.close();
})();
