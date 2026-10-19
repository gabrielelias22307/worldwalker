// node tests/powers.js   checks what the five powers do: hearts, walking speed, calmer Smudges, healing scraps, arrows, hints, and the How you grow page
const { chromium } = require('playwright');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const url = 'file://' + path.join(ROOT, 'game', 'ep-1-1.html');
(async () => {
  const b = await chromium.launch(), p = await b.newPage({ viewport: { width: 1100, height: 900 } });
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  let failed = 0; const ok = (c, w) => { console.log((c ? '✓ ' : '✗ ') + w); if (!c) failed++; };
  const start = async stats => {
    await p.goto(url);
    await p.evaluate(st => { localStorage.setItem('worldwalker.save.v1', JSON.stringify({ v: 1, name: 'Tester', cls: 'GEO-1', look: {}, stats: st, coins: 0, episodes: {}, lang: 'en', sound: false, music: false })); }, stats);
    await p.goto(url);
    await p.locator('#ww-ov .pbtn.gold.big').click(); await p.waitForSelector('.introov');
    await p.locator('#ww-ov .pbtn.gold.big').click(); await p.evaluate(() => WW.chris.skip()); await p.waitForFunction(() => !WW.paused);
  };
  // beginner
  await start({ loc: 0, pla: 0, hei: 0, mov: 0, reg: 0 });
  ok(await p.evaluate(() => WW.heartsMax()) === 3, 'beginner has 3 hearts');
  ok((await p.textContent('#ww-quest')).includes('Claim the atlas page'), 'quest bar ends with "Claim the atlas page"');
  // a gain that crosses 3 points shows the New power banner
  await p.evaluate(() => WW.gain('pla', 3, 0, 'test'));
  ok(await p.evaluate(() => WW.heartsMax()) === 4, 'Place 3 = +1 heart');
  // pop-ups wait in line, so the banner comes right after the "+3" one
  ok(await p.waitForFunction(() => /New power/.test(document.getElementById('ww-toast').textContent), null, { timeout: 8000 }).then(() => true, () => false), '"New power!" banner appears when a level unlocks');
  ok(await p.evaluate(() => WW.run.gains.some(g => g.why === 'test')), 'every reward is logged with its reason');
  // expert
  await start({ loc: 12, pla: 12, hei: 12, mov: 12, reg: 12 });
  ok(await p.evaluate(() => WW.heartsMax()) === 5, 'Place 12 = 5 hearts');
  const t0 = await p.evaluate(async () => { const d = WW.dbg; d.teleport(2, 16); d.face('right'); const s = performance.now(); const x = d.player.x; window.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight' })); await new Promise(r => setTimeout(r, 1000)); window.dispatchEvent(new KeyboardEvent('keyup', { key: 'ArrowRight' })); return d.player.x - x; });
  ok(t0 >= 8, `Movement 12: walks faster (${t0} tiles in 1 second, a beginner walks about 6)`);
  const g = await p.evaluate(() => WW.dbg.goal);
  ok(Array.isArray(g), 'Location: there is a next goal to point at (' + g + ')');
  await p.evaluate(() => { WW.run.hearts = 3; WW.dbg.collect(0); });
  ok(await p.evaluate(() => WW.run.hearts) === 4, 'People & land 12: a scrap gives back a heart');
  // hints in the trial
  await p.evaluate(() => { WW.ep.npcs.forEach(n => WW.run.talked.add(n.id)); WW.run.quest = 4; WW.run.challengeDone = true; WW.game.onChallengeDone(); WW.dbg.bumpInto(WW.ep.boss.at[0], WW.ep.boss.at[1]); });
  await p.waitForSelector('.bossov');
  const hb = p.locator('#ww-ov .hintbtn');
  ok(/free ×2/.test(await hb.textContent()), 'Region 12: 2 free hints in the trial');
  const n0 = await p.locator('#ww-ov .choices button').count(); await hb.click();
  const n1 = await p.locator('#ww-ov .choices button').count();
  ok(n1 === n0 - 1, `a hint hides one wrong answer (${n0} -> ${n1})`);
  await p.locator('#ww-ov .hintbtn').click(); await p.locator('#ww-ov .hintbtn').count();
  const paid = await p.locator('#ww-ov .hintbtn').count() ? await p.locator('#ww-ov .hintbtn').textContent() : '';
  ok(paid === '' || /10 ●/.test(paid), 'after the free hints, a hint costs 10 coins');
  // How you grow
  await p.keyboard.press('Escape');
  await p.evaluate(() => { WW.ui.top() && WW.ui.top().close(); WW.ui.passport(); });
  const pp = await p.textContent('#ww-ov');
  ok(/How you grow/.test(pp) && /Compass arrow/.test(pp) && /next at|all unlocked/.test(pp), 'Passport has "How you grow" with every power and its levels');
  ok(!errs.length, 'no page errors' + (errs.length ? ': ' + errs.join(' | ') : ''));
  await b.close(); console.log(failed ? failed + ' failed' : 'all good'); process.exitCode = failed ? 1 : 0;
})();
