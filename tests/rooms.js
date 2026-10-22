// node tests/rooms.js [1.1 …]   inside the houses (fun-pass-4): walk up into a door, the room opens; walk to the person,
// Space talks; walk left (or up at the door) and you are back outside below the door. Pictures go to shots/rooms/
const { chromium } = require('playwright'); const path = require('path');
const ROOT = path.join(__dirname, '..'), OUT = path.join(ROOT, 'shots', 'rooms');
const ids = process.argv.slice(2).length ? process.argv.slice(2) : ['1.1', '4.1', '5.2', '7.1'];
(async () => {
  let failed = 0; const ok = (c, w) => { console.log((c ? '✓ ' : '✗ ') + w); if (!c) failed++; };
  require('fs').mkdirSync(OUT, { recursive: true });
  const b = await chromium.launch();
  for (const id of ids) {
    const p = await b.newPage({ viewport: { width: 1366, height: 768 } }); const errs = []; p.on('pageerror', e => errs.push(e.message));
    const file = 'file://' + path.join(ROOT, 'game', 'ep-' + id.replace('.', '-') + '.html');
    await p.goto(file); await p.evaluate(() => localStorage.clear()); await p.goto(file); await p.waitForSelector('.startov');
    await p.fill('#si-name', 'Rio'); await p.locator('#ww-ov .pbtn.gold.big').click(); await p.waitForSelector('.introov');
    await p.locator('#ww-ov .pbtn.gold.big').click(); await p.evaluate(() => { WW.chris.skip(); WW.dbg.noSmudges && WW.dbg.noSmudges(); }); await p.waitForFunction(() => !WW.paused);
    const doors = await p.evaluate(() => (WW.ep.houses || []).map(h => h.at));
    ok(doors.length > 0, `${id}: ${doors.length} houses`);
    let n = 0;
    for (const [x, y] of doors) {
      await p.evaluate(([x, y]) => { WW.dbg.teleport(x, y + 1); WW.game.player.dir = 'up'; }, [x, y]);
      await p.keyboard.down('ArrowUp'); await p.waitForTimeout(260); await p.keyboard.up('ArrowUp');
      await p.waitForFunction(() => WW.room.on, null, { timeout: 2000 }).catch(() => { });
      if (!(await p.evaluate(() => WW.room.on))) { ok(false, `${id}: walking up into the door at ${x},${y} opens the room`); continue; }
      await p.waitForTimeout(400);
      if (n === 0) await p.locator('#ww-cv').screenshot({ path: path.join(OUT, `${id}-in.png`) });
      await p.keyboard.down('ArrowRight'); await p.waitForTimeout(2200); await p.keyboard.up('ArrowRight');
      await p.keyboard.press('Space');
      const talk = await p.waitForSelector('.roomtalk', { timeout: 1500 }).then(() => true, () => false);
      if (n === 0) { ok(talk, `${id}: walking right and pressing Space talks to the person`); await p.waitForTimeout(400); await p.screenshot({ path: path.join(OUT, `${id}-talk.png`) }); }
      else if (!talk) ok(false, `${id}: Space talks at ${x},${y}`);
      for (let k = 0; k < 4 && await p.$('.roomtalk'); k++) { await p.locator('#ww-ov .pbtn.gold').last().click(); await p.waitForTimeout(80); }
      await p.keyboard.down('ArrowLeft'); await p.waitForTimeout(3200); await p.keyboard.up('ArrowLeft');
      const out = await p.evaluate(() => ({ on: WW.room.on, x: WW.game.player.x, y: WW.game.player.y }));
      if (n === 0 || out.on || out.y !== y + 1 || out.x !== x) ok(!out.on && out.x === x && out.y === y + 1, `${id}: walking left out of the door at ${x},${y} puts you back outside below it (${out.x},${out.y}${out.on ? ", still inside" : ""})`);
      n++;
    }
    ok(true, `${id}: went into ${n} of ${doors.length} houses`);
    ok(!errs.length, `${id}: no page errors ${errs.join(' | ')}`);
    await p.close();
  }
  await b.close(); console.log(failed ? failed + ' failed' : 'all good'); process.exitCode = failed ? 1 : 0;
})();
