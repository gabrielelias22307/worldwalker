// node tests/calmstart.js [1.1 ...]   (GAME=history|gov|econ|usva for the other games)
// A calm start: a new student signs in, reads the intro and the cut scene, then stands still at the start for 10 seconds.
// Nothing may chase or hurt them before they talk to the first person: the Grump's helpers are asleep (z z) until then.
// Then the student talks to one person, and the helpers wake up. Shots of the first episode go to shots/calm/.
const { chromium } = require('playwright'); require('./autostep');
const path = require('path'), fs = require('fs');
const ROOT = path.join(__dirname, '..'), GDIR = process.env.GAME || 'game', OUT = path.join(ROOT, 'shots', 'calm'); fs.mkdirSync(OUT, { recursive: true });
const all = fs.readdirSync(path.join(ROOT, GDIR, 'episodes')).filter(f => /^ep-\d-\d\.js$/.test(f)).sort().map(f => f.slice(3, 6).replace('-', '.'));
const ids = process.argv.slice(2).length ? process.argv.slice(2) : all;
let failed = 0;
(async () => {
  const b = await chromium.launch();
  for (const id of ids) {
    const p = await b.newPage({ viewport: { width: 1366, height: 768 } }); const errs = [];
    p.on('pageerror', e => errs.push(e.message));
    const file = 'file://' + path.join(ROOT, GDIR, 'ep-' + id.replace('.', '-') + '.html');
    try {
      await p.goto(file); await p.evaluate(() => localStorage.clear()); await p.goto(file);
      await p.waitForSelector('#si-name');
      await p.fill('#si-name', 'Tester'); await p.fill('#si-cls', 'GEO-1'); await p.fill('#si-pin', '1234');
      await p.locator('#ww-ov .pbtn.gold.big').click();
      // the intro, the cut scene with its guess, and meeting the guide: click through like a student
      for (let k = 0; k < 40; k++) {
        if (await p.$('.cut-choices button:not([disabled])')) { await p.locator('.cut-choices button').first().click(); await p.waitForTimeout(80); continue; }
        if (await p.$('#ww-ov:not(.hidden) .pbtn.gold')) { await p.locator('#ww-ov .pbtn.gold').last().click(); await p.waitForTimeout(80); continue; }
        if (await p.evaluate(() => WW.chris && WW.chris.scene)) { await p.keyboard.press('c'); await p.waitForTimeout(100); continue; }
        if (await p.evaluate(() => !WW.paused && !WW.ui.stack.length)) break;
        await p.waitForTimeout(150);
      }
      const smudges = await p.evaluate(() => (WW.ep.smudges || []).length);
      const before = await p.evaluate(() => ({ hearts: WW.run.hearts, asleep: WW.game.foesAsleep() }));
      await p.waitForTimeout(10000); // a new student looks around, reads the guide's corner, finds the keys
      const after = await p.evaluate(() => ({ hearts: WW.run.hearts, asleep: WW.game.foesAsleep() }));
      const bad = [];
      if (after.hearts < before.hearts) bad.push(`lost ${before.hearts - after.hearts} heart(s) in the first 10 seconds`);
      if (smudges && !after.asleep) bad.push('the Grump\'s helpers were awake before any talk');
      if (id === ids[0]) await p.screenshot({ path: path.join(OUT, `${GDIR}-${id}-start.png`) });
      // talk to the first person: the helpers wake up
      if (smudges) {
        await p.evaluate(() => { const n = WW.ep.npcs[0]; WW.run.talked.add(n.id); });
        const awake = await p.evaluate(() => !WW.game.foesAsleep());
        if (!awake) bad.push('the helpers did not wake after a talk');
      }
      if (errs.length) bad.push('page errors: ' + errs.join(' | '));
      console.log(`${GDIR} ${id}: ${bad.length ? '✗ ' + bad.join('; ') : 'calm start ✓'}${smudges ? '' : ' (no helpers on this map)'}`);
      if (bad.length) failed++;
    } catch (e) { console.log(`${GDIR} ${id}: ✗ ${e.message.split('\n')[0]}`); failed++; }
    await p.close();
  }
  await b.close();
  console.log(failed ? `${failed} failed` : 'all good');
  process.exitCode = failed ? 1 : 0;
})();
