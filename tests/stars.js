// node tests/stars.js   Space throws stars: they fly, stop at walls, knock out Grumplings (who come back), sting the Grump,
// give at most 5 coins, and Space still talks to a person you are facing
const { chromium } = require('playwright'); const path = require('path');
const url = 'file://' + path.join(__dirname, '..', 'game', 'ep-1-1.html');
(async () => {
  const b = await chromium.launch(), p = await b.newPage({ viewport: { width: 1100, height: 900 } });
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  let failed = 0; const ok = (c, w) => { console.log((c ? '✓ ' : '✗ ') + w); if (!c) failed++; };
  await p.goto(url); await p.evaluate(() => localStorage.clear()); await p.goto(url);
  await p.fill('#si-name', 'Tester'); await p.locator('#ww-ov .pbtn.gold.big').click(); await p.waitForSelector('.introov');
  await p.locator('#ww-ov .pbtn.gold.big').click(); await p.waitForFunction(() => !WW.paused);
  await p.click('#ww-cv', { position: { x: 5, y: 5 } }).catch(() => {});
  // a star flies when Space is pressed in the open
  await p.evaluate(() => { WW.dbg.teleport(4, 16); WW.dbg.face('right'); });
  await p.keyboard.press('Space');
  ok(await p.evaluate(() => WW.dbg.stars.length) === 1, 'Space throws a star');
  const x0 = await p.evaluate(() => WW.dbg.stars[0] && WW.dbg.stars[0].x); await p.waitForTimeout(200);
  const x1 = await p.evaluate(() => WW.dbg.stars[0] && WW.dbg.stars[0].x);
  ok(x1 > x0, 'the star flies the way the hero faces');
  await p.waitForTimeout(1500);
  ok(await p.evaluate(() => WW.dbg.stars.length) === 0, 'the star is gone after its range');
  // knock out a Grumpling
  const g = await p.evaluate(() => { const s = WW.dbg.ents.find(e => e.kind === 'smudge'); s.next = 1e15; s.nextRage = 1e15; WW.dbg.teleport(s.x - 3, s.y); WW.dbg.face('right'); return { x: s.x, y: s.y }; });
  const free = await p.evaluate(g => !WW.solid(WW.ep.map[g.y][g.x - 1]) && !WW.solid(WW.ep.map[g.y][g.x - 2]), g);
  const coins0 = await p.evaluate(() => WW.save.coins);
  await p.evaluate(() => WW.dbg.fire()); await p.waitForTimeout(700);
  const after = await p.evaluate(() => { const s = WW.dbg.ents.find(e => e.kind === 'smudge'); return { vis: s.visible, coins: WW.save.coins }; });
  ok(!free || after.vis === false, 'a star knocks out a Grumpling');
  ok(!free || after.coins === coins0 + 1, 'knocking one out gives 1 coin');
  await p.evaluate(() => { const s = WW.dbg.ents.find(e => e.kind === 'smudge'); s.stunUntil = 1; }); await p.waitForTimeout(200);
  ok(await p.evaluate(() => WW.dbg.ents.find(e => e.kind === 'smudge').visible) === true, 'the Grumpling floats back later');
  // the coin cap
  const capped = await p.evaluate(async () => { const s = WW.dbg.ents.find(e => e.kind === 'smudge'); const c0 = WW.save.coins; for (let i = 0; i < 8; i++) { s.stunUntil = 0; s.visible = true; WW.dbg.teleport(s.x - 2, s.y); WW.dbg.face('right'); WW.dbg.fire(); await new Promise(r => setTimeout(r, 400)); s.stunUntil = 1; await new Promise(r => setTimeout(r, 50)); } return WW.save.coins - c0; });
  ok(capped <= 4, `stars give at most 5 coins per episode (${capped} more after the first)`);
  // the Grump only stings
  await p.evaluate(() => { WW.ep.npcs.forEach(n => WW.run.talked.add(n.id)); WW.run.quest = 4; WW.run.challengeDone = true; WW.game.onChallengeDone(); const [x, y] = WW.ep.boss.at; WW.dbg.teleport(x - 3, y); WW.dbg.face('right'); WW.dbg.fire(); });
  await p.waitForTimeout(600);
  const boss = await p.evaluate(() => { const e = WW.dbg.ents.find(e => e.kind === 'boss'); return { gone: !!e.gone, roared: !!e.roarT, done: WW.run.bossDone }; });
  ok(boss.roared && !boss.gone && !boss.done, 'a star stings the Grump but does not beat it');
  ok(/RIGHT ANSWERS/.test(await p.textContent('#ww-toast')), 'Christopher explains that only right answers break the shield');
  // Space still talks to a person you face
  await p.evaluate(() => { const n = WW.ep.npcs[0]; WW.dbg.teleport(n.x, n.y + 1); WW.dbg.face('up'); });
  await p.keyboard.press('Space'); await p.waitForTimeout(150);
  ok(await p.locator('.talkov').count() === 1, 'Space next to a person still starts the talk');
  ok(!errs.length, 'no page errors' + (errs.length ? ': ' + errs.join(' | ') : ''));
  await b.close(); console.log(failed ? failed + ' failed' : 'all good'); process.exitCode = failed ? 1 : 0;
})();
