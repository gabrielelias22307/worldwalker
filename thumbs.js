// capture just the game screen of each mockup -> mockups/thumbs/NN.png and docs/screens/NN.png
const { chromium } = require('playwright');
const path = require('path'), fs = require('fs');
(async () => {
  const b = await chromium.launch();
  const dir = path.join(__dirname, 'mockups');
  fs.mkdirSync(path.join(dir, 'thumbs'), { recursive: true });
  const files = fs.readdirSync(dir).filter(f => /^\d\d-.*\.html$/.test(f)).sort();
  for (const f of files) {
    const p = await b.newPage({ viewport: { width: 1300, height: 900 }, deviceScaleFactor: 1 });
    await p.goto('file://' + path.join(dir, f));
    await p.waitForTimeout(1200);
    const el = await p.$('.screen');
    await el.screenshot({ path: path.join(dir, 'thumbs', f.slice(0, 2) + '.png') });
    await p.close();
    console.log('thumb', f);
  }
  await b.close();
})();
