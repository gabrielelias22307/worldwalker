// node tests/controls.js   Space never surprises: people come first whatever tool is picked; the right tool is picked for you;
// a bad guy in front gets a star even at a tree; Space at the broken bridge opens the repair.
const { chromium } = require('playwright');
const path = require('path');
let failed = 0; const ok = (c, m) => { console.log((c ? '✓ ' : '✗ ') + m); if (!c) failed++; };
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1366, height: 768 } });
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  const url = 'file://' + path.join(__dirname, '..', 'game', 'ep-1-1.html');
  await p.goto(url); await p.evaluate(() => localStorage.clear()); await p.goto(url);
  await p.fill('#si-name', 'Ctl'); await p.locator('#ww-ov .pbtn.gold.big').click(); await p.waitForSelector('.introov');
  await p.locator('#ww-ov .pbtn.gold.big').click(); await p.evaluate(() => WW.chris.skip()); await p.waitForFunction(() => !WW.paused);
  await p.evaluate(() => WW.dbg.noSmudges());
  const closeAll = async () => { await p.keyboard.press('Escape'); await p.waitForFunction(() => !WW.paused); };
  // the axe picked, walk into Rosa: a talk
  await p.keyboard.press('2');
  const rosa = await p.evaluate(() => [WW.ep.npcs[0].x, WW.ep.npcs[0].y]);
  await p.evaluate(r => WW.dbg.faceFrom(...r), rosa);
  const dir = await p.evaluate(() => WW.dbg.player.dir);
  await p.keyboard.down({ up: 'ArrowUp', down: 'ArrowDown', left: 'ArrowLeft', right: 'ArrowRight' }[dir]); await p.waitForTimeout(150); await p.keyboard.up({ up: 'ArrowUp', down: 'ArrowDown', left: 'ArrowLeft', right: 'ArrowRight' }[dir]);
  ok(await p.locator('.talkov').count() === 1, 'with the axe picked, walking into a person starts the talk');
  await closeAll();
  // the axe picked, Space at a person: a talk, never a chop
  await p.keyboard.press(' '); await p.waitForTimeout(150);
  ok(await p.locator('.talkov').count() === 1 && await p.evaluate(() => WW.tools.have('wood')) === 0, 'with the axe picked, Space at a person talks (nothing chopped)');
  await closeAll();
  // the star picked, Space at a tree: the axe is picked for you and the tree is chopped
  await p.keyboard.press('1');
  await p.evaluate(() => WW.dbg.faceFrom(2, 12, [[2, 13], [2, 11], [3, 12]]));
  ok(await p.evaluate(() => !!document.querySelector('#ww-tools .tslot.fit[data-k="axe"]')) || (await p.waitForTimeout(100), await p.evaluate(() => !!document.querySelector('#ww-tools .tslot.fit[data-k="axe"]'))), 'facing a small tree, the axe glows in the tool bar');
  await p.keyboard.press(' ');
  ok(await p.evaluate(() => WW.tools.have('wood')) === 2 && await p.evaluate(() => WW.tools.selected()) === 'axe', 'Space at a tree picks the axe and chops');
  // the axe picked, Space at tall grass: the sickle
  await p.evaluate(() => { const g = WW.game; for (let y = 1; y < 21; y++) for (let x = 1; x < 31; x++) if (g.tileAt(x, y) === '"' && WW.dbg.faceFrom(x, y)) return; });
  await p.keyboard.press(' ');
  ok(await p.evaluate(() => WW.tools.have('fiber')) === 1 && await p.evaluate(() => WW.tools.selected()) === 'sickle', 'Space at tall grass picks the sickle and cuts');
  // a bad guy in front: a star, even at a tree
  await p.keyboard.press('1');
  const shot = await p.evaluate(() => {
    const s = WW.dbg.ents.find(e => e.kind === 'smudge'); const t = [11, 13]; // a tree at (11,13) with open ground west of it
    WW.dbg.faceFrom(13, 13, []); s.visible = true; s.stunUntil = 0; s.x = 12; s.y = 13; s.next = 1e15; s.home = WW.game.screenOf(12, 13);
    WW.dbg.teleport(14, 13); WW.dbg.face('left'); return [WW.game.tileAt(11, 13), WW.game.tileAt(13, 13)];
  });
  const wood = await p.evaluate(() => WW.tools.have('wood'));
  await p.keyboard.press(' '); await p.waitForTimeout(60);
  ok(await p.evaluate(() => WW.dbg.stars.length) >= 1 && await p.evaluate(() => WW.tools.have('wood')) === wood, 'with a bad guy in front, Space throws a star');
  // Space at the broken bridge: the repair panel
  await p.evaluate(() => { const b = WW.ep.build.find(o => o.kind === 'repair'); WW.dbg.teleport(b.at[0][0] - 1, b.at[0][1]); WW.dbg.face('right'); });
  await p.keyboard.press(' '); await p.waitForTimeout(150);
  ok(await p.locator('.msgov').count() === 1 && /bridge/i.test(await p.textContent('#ww-ov')), 'Space at the broken bridge opens the repair');
  await closeAll();
  ok(!errs.length, 'no page errors ' + errs.join(' | '));
  await b.close(); console.log(failed ? failed + ' failed' : 'all good'); process.exitCode = failed ? 1 : 0;
})();
