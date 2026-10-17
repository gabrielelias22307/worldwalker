// usage: node shot.js file1.html [file2.html ...]  -> shots/<name>.png, prints console errors
const { chromium } = require('playwright');
const path = require('path'), fs = require('fs');
(async () => {
  const b = await chromium.launch();
  fs.mkdirSync(path.join(__dirname, 'shots'), { recursive: true });
  for (const f of process.argv.slice(2)) {
    for (const [tag, w] of [['', 1300], ['-phone', 390]]) {
      const p = await b.newPage({ viewport: { width: w, height: 900 } });
      const errs = [];
      p.on('pageerror', e => errs.push(e.message));
      p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
      await p.goto('file://' + path.resolve(f));
      await p.waitForTimeout(900);
      const sw = await p.evaluate(() => document.documentElement.scrollWidth);
      const out = path.join(__dirname, 'shots', path.basename(f, '.html') + tag + '.png');
      await p.screenshot({ path: out, fullPage: true });
      console.log(path.basename(f) + tag, 'errors:', errs.filter(e => !/fonts\.g/.test(e)).join(' | ') || 'none', 'scrollW:', sw, '/', w);
      await p.close();
    }
  }
  await b.close();
})();
