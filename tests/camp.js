// node tests/camp.js   the base camp: pages on the wall, tools on the rack, souvenirs, buying and placing decorations
const { chromium } = require('playwright');
const path = require('path'), fs = require('fs');
const ROOT = path.join(__dirname, '..'), OUT = path.join(ROOT, 'shots', 'play'); fs.mkdirSync(OUT, { recursive: true });
let failed = 0; const ok = (c, m) => { console.log((c ? '✓ ' : '✗ ') + m); if (!c) failed++; };
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1100, height: 1000 } });
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  const url = 'file://' + path.join(ROOT, 'game', 'ep-2-1.html');
  await p.goto(url);
  await p.evaluate(() => { localStorage.clear(); localStorage.setItem('worldwalker.save.v1', JSON.stringify({ v: 1, name: 'Camper', cls: 'GEO-1', look: {}, stats: { loc: 4 }, coins: 40, episodes: { '1.1': { done: true, stars: 3 }, '1.2': { done: true, stars: 2 }, '1.3': { done: true, stars: 1 }, '2.1': { done: true, stars: 2 } }, bag: { wood: { got: 6, used: 0 }, fiber: { got: 5, used: 0 } }, lang: 'en', sound: false, music: false })); });
  await p.goto(url);
  await p.locator('#ww-ov .pbtn.gold.big').click(); await p.waitForSelector('.introov');
  await p.locator('#ww-ov .pbtn.gold.big').click(); await p.evaluate(() => WW.scene.skip()); await p.waitForFunction(() => !WW.paused);
  await p.click('#ww-b-pass'); await p.waitForSelector('.passov');
  await p.locator('.campbtn').click(); await p.waitForSelector('.campov .campcv');
  // buy a lantern (2 wood + 5 coins) and a rug (4 fiber); a globe costs 25 coins
  for (const id of ['lantern', 'rug', 'globe']) await p.click(`.campshop .campitem[data-id="${id}"]`);
  const st = await p.evaluate(() => ({ camp: WW.save.camp, coins: WW.save.coins, wood: WW.save.bag.wood, fiber: WW.save.bag.fiber }));
  ok(st.camp.owned.join() === 'lantern,rug,globe', 'bought a lantern, a rug and a globe: ' + st.camp.owned.join());
  ok(st.coins === 40 - 5 - 25 && st.wood.used === 2 && st.fiber.used === 4, `the costs came out of coins, wood and fiber (${st.coins} coins left)`);
  ok(st.camp.slots.filter(Boolean).length === 3, 'new decorations go up on the floor right away');
  // too expensive: explains what you need
  await p.click('.campshop .campitem[data-id="telescope"]');
  ok(/You need/.test(await p.textContent('.campov')), 'something you cannot pay for says what you need');
  // move the globe to another spot, take the rug down (you keep it)
  await p.locator('.campslot').nth(5).click(); await p.locator('.campown .campitem', { hasText: 'Globe' }).click();
  await p.locator('.campslot').nth(1).click(); await p.locator('.campown .campitem.ghost').click();
  const st2 = await p.evaluate(() => WW.save.camp);
  ok(st2.slots[5] === 'globe' && !st2.slots.includes('rug') && st2.owned.includes('rug'), 'decorations can be moved and taken down without losing them');
  ok(!(await p.locator('.campshop .campitem[data-id="shell"]').isEnabled()), 'map finds cannot be bought');
  await p.screenshot({ path: path.join(OUT, 'camp.png') });
  await p.keyboard.press('Escape'); ok(!(await p.locator('.campov').count()), 'Escape closes the camp');
  // the world map page opens the same camp
  const hub = await b.newPage({ viewport: { width: 1100, height: 900 } });
  hub.on('pageerror', e => errs.push(e.message));
  await hub.goto('file://' + path.join(ROOT, 'game', 'index.html'));
  await hub.evaluate(c => { WW.save.camp = c; WW.store(); }, st2); // (file:// pages keep separate storage)
  await hub.click('#campBtn'); await hub.waitForSelector('.campmodal .campcv');
  ok((await hub.locator('.campmodal .campslot').nth(5).textContent()).includes('Globe'), 'the world map opens the same camp');
  ok(!errs.length, 'no page errors ' + errs.join(' | '));
  await b.close(); console.log(failed ? failed + ' failed' : 'all good'); process.exitCode = failed ? 1 : 0;
})();
