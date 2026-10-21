// node tools/chris-sheet.js   draws Christopher in every color and wing frame, big, to shots/wings/sheet.png (to look at his art)
const { chromium } = require('playwright'); const path = require('path');
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 900, height: 420 } });
  const f = 'file://' + path.join(__dirname, '..', 'dist', 'canvas', 'Worldwalker 1.1.html');
  await p.goto(f); await p.evaluate(() => localStorage.clear()); await p.goto(f);
  await p.evaluate(() => {
    document.body.innerHTML = ''; const cv = document.createElement('canvas'); cv.width = 225; cv.height = 105; cv.style.cssText = 'width:900px;height:420px;image-rendering:pixelated;background:#5aa83b'; document.body.appendChild(cv);
    const c = cv.getContext('2d'); c.imageSmoothingEnabled = false; const F = WW.chris.fly;
    F.mode = 'hover'; F.needle = -Math.PI / 2;
    ['gold', 'green', 'blue', 'red'].forEach((k, row) => [0, 90, 180, 270].forEach((t, col) => {
      F.kind = k; F.bang = col === 3; F.ask = col === 2; F.callT = -1e9; F.trail = []; F.needle = -Math.PI / 2 + col * 0.8;
      WW.chris.draw(c, 12 + col * 36 + (col > 1 ? 0 : 0), 12 + row * 24, t * 1 + 0.001);
    }));
    F.mode = 'follow'; F.kind = 'gold'; F.mood = 'droop'; F.moodT = performance.now(); F.bang = false; F.ask = false; WW.chris.draw(c, 165, 20, performance.now());
    F.mood = null; F.callT = performance.now(); WW.chris.draw(c, 195, 20, performance.now());
  });
  await p.waitForTimeout(100); await p.screenshot({ path: path.join(__dirname, '..', 'shots', 'wings', 'sheet.png') }); await b.close();
})();
