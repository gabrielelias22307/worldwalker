// node tests/ux-tour.js [ep]   a slow look at an episode the way a student sees it (1366×768), screenshots to shots/ux/
const { chromium } = require('playwright');
const path = require('path'), fs = require('fs');
const ROOT = path.join(__dirname, '..'), OUT = path.join(ROOT, 'shots', 'ux'); fs.mkdirSync(OUT, { recursive: true });
const id = process.argv[2] || '1.1';
(async () => {
  const b = await chromium.launch(), p = await b.newPage({ viewport: { width: 1366, height: 768 } });
  const file = 'file://' + path.join(ROOT, 'dist', 'canvas', `Worldwalker ${id}.html`);
  await p.goto(file); await p.evaluate(() => localStorage.clear()); await p.goto(file);
  const shot = async n => { await p.waitForTimeout(900); await p.screenshot({ path: path.join(OUT, `${id}-${n}.png`) }); };
  const gold = () => p.locator('#ww-ov .pbtn.gold').last().click({ timeout: 2000 }).catch(() => { });
  await shot('00-signin');
  await p.fill('#si-name', 'Sam'); await p.fill('#si-cls', 'GEO-1'); await p.fill('#si-pin', '1234');
  await p.locator('#ww-ov .pbtn.gold.big').click(); await shot('01-intro');
  await gold(); await shot('02-first-look');
  await p.waitForTimeout(4000); await shot('03-after-5s-idle');
  const ep = await p.evaluate(() => WW.ep);
  await p.evaluate(() => WW.chris.hide && WW.chris.hide());
  const n = ep.npcs[0];
  await p.evaluate(([x, y]) => WW.dbg.bumpInto(x, y), [n.x, n.y]); await shot('04-talk');
  for (let k = 0; k < 6; k++) { if (await p.locator('#ww-ov .choices').count()) break; if (!(await p.evaluate(() => WW.paused))) break; await gold(); await p.waitForTimeout(300); }
  if (await p.locator('#ww-ov .choices').count()) { await shot('05-question'); await p.locator('#ww-ov .choices button').first().click(); await shot('06-answered'); }
  await p.evaluate(() => { const h = WW.ui.top(); if (h) h.close(); });
  await p.evaluate(() => { WW.ep.npcs.forEach(n => WW.run.talked.add(n.id)); WW.run.quest = 4; WW.ui.quest(); });
  await p.evaluate(([x, y]) => WW.dbg.bumpInto(x, y), ep.challenge.at); await shot('07-stone');
  await p.evaluate(() => { const h = WW.ui.top(); if (h) h.close(); WW.run.challengeDone = true; WW.game.onChallengeDone(); });
  await shot('08-grump-out');
  await p.evaluate(() => WW.dbg.bumpInto(...WW.game.bossAt())); await shot('09-grump-question');
  await p.evaluate(() => { const h = WW.ui.top(); if (h) h.close(); });
  await p.keyboard.press('KeyQ'); await shot('10-goals');
  await p.evaluate(() => WW.dbg.skip && WW.dbg.skip('end'));
  await shot('11-finish');
  await b.close();
})();
