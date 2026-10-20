const { chromium } = require('playwright'); const path = require('path');
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1366, height: 768 } });
  const url = 'file://' + path.join(__dirname, '..', 'dist', 'canvas', 'Worldwalker 1.1.html');
  await p.goto(url); await p.evaluate(() => localStorage.clear()); await p.goto(url);
  await p.fill('#si-name', 'M'); await p.locator('#ww-ov .pbtn.gold.big').click(); await p.waitForSelector('.introov');
  await p.locator('#ww-ov .pbtn.gold.big').click(); await p.evaluate(() => WW.chris.skip()); await p.waitForTimeout(300);
  await p.evaluate(() => WW.chris.talk()); await p.waitForTimeout(300);
  console.log(await p.evaluate(() => { const b = document.querySelector('.cbubble'); const r = b.getBoundingClientRect(); const g = WW.game; return { cls: b.className, r: [r.left, r.top, r.right, r.bottom].map(Math.round), pl: [g.player.x, g.player.y], pip: [g.pip.x, g.pip.y, g.pip.dx, g.pip.dy], cv: document.getElementById('ww-cv').getBoundingClientRect().toJSON() }; }));
  await p.screenshot({ path: '/tmp/claude-0/-home-user-worldwalker/fb6338c7-ec9d-5d57-9512-f48d66a5ccbd/scratchpad/dbg.png' });
  await b.close();
})();
