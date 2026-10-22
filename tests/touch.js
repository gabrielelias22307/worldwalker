// node tests/touch.js   a phone (390×844, touch): every tool, carrying a signpost and Christopher work with on-screen buttons,
// a tap on an arrow is one step, and no button covers the map.
const { chromium } = require('playwright');
const path = require('path');
const ROOT = path.join(__dirname, '..');
let failed = 0; const ok = (c, m) => { console.log((c ? '✓ ' : '✗ ') + m); if (!c) failed++; };
(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });
  const p = await ctx.newPage(); const errs = []; p.on('pageerror', e => errs.push(e.message));
  const url = 'file://' + path.join(ROOT, 'game', 'ep-1-1.html');
  const pos = () => p.evaluate(() => [WW.dbg.player.x, WW.dbg.player.y, WW.dbg.player.dir]);
  const tapPad = async d => { await p.tap(`#ww-dpad [data-d="${d}"]`); await p.waitForTimeout(220); };
  try {
    await p.goto(url); await p.evaluate(() => localStorage.clear()); await p.goto(url);
    await p.tap('#si-name'); await p.keyboard.type('Touchy');
    await p.tap('#ww-ov .pbtn.gold.big'); await p.waitForSelector('.introov'); await p.tap('#ww-ov .pbtn.gold.big');
    await p.waitForSelector('.cutov'); await p.tap('.cutov .pbtn.ghost'); // Skip the cut scene
    for (let i = 0; i < 8 && await p.evaluate(() => WW.chris.scene); i++) { await p.waitForSelector('.cbubble', { state: 'visible' }); await p.tap('.cbubble'); await p.waitForTimeout(150); }
    ok(!(await p.evaluate(() => WW.chris.scene)), 'meeting Christopher: tapping his bubble moves on (no Next buttons)');
    await p.evaluate(() => WW.dbg.noSmudges());
    // nothing covers the map
    const r = await p.evaluate(() => { const a = document.getElementById('ww-screen').getBoundingClientRect(), d = document.getElementById('ww-dpad').getBoundingClientRect(), t = document.getElementById('ww-tools').getBoundingClientRect(); const ov = (x, y) => x.left < y.right && y.left < x.right && x.top < y.bottom && y.top < x.bottom; return { pad: ov(a, d), tools: ov(a, t), padShown: d.height > 0, inWin: d.bottom <= innerHeight }; });
    ok(r.padShown && r.inWin, 'the arrow pad shows on a touch screen and fits');
    ok(!r.pad && !r.tools, 'the arrow pad and the tool bar do not cover the map');
    // Christopher
    await tapPad('chris'); ok(await p.locator('.cbubble').isVisible(), 'the 🧭 button asks Christopher what to do next');
    await p.tap('.cbubble .cb-acts .ghost'); await p.waitForTimeout(100);
    // a tap is one step; a tap of a new direction turns first
    let a = await pos(); const dir = a[2];
    await tapPad(dir === 'down' ? 'down' : dir); let c = await pos();
    ok(c[0] !== a[0] || c[1] !== a[1], 'one tap on the arrow you face is one step');
    const other = dir === 'down' ? 'up' : 'down'; a = await pos(); await tapPad(other); c = await pos();
    ok(c[0] === a[0] && c[1] === a[1] && c[2] === other, 'a tap on a new direction only turns the hero');
    // the axe by itself: face a tree, tap ● (the tool switches for you)
    await p.evaluate(() => WW.dbg.faceFrom(2, 12, [[2, 13], [2, 11], [3, 12]]));
    const w0 = await p.evaluate(() => WW.tools.have('wood'));
    await tapPad('act');
    ok(await p.evaluate(() => WW.tools.have('wood')) > w0 && await p.evaluate(() => WW.tools.selected()) === 'axe', 'tapping ● at a tree picks the axe and chops');
    // the sickle from the tool bar
    await p.tap('#ww-tools .tslot[data-k="sickle"]'); ok(await p.evaluate(() => WW.tools.selected()) === 'sickle', 'tapping the sickle in the tool bar picks it');
    await p.evaluate(() => { const g = WW.game; for (let y = 1; y < 21; y++) for (let x = 1; x < 31; x++) if (g.tileAt(x, y) === '"' && WW.dbg.faceFrom(x, y)) return; });
    const f0 = await p.evaluate(() => WW.tools.have('fiber')); await tapPad('act');
    ok(await p.evaluate(() => WW.tools.have('fiber')) > f0, 'tapping ● cuts tall grass');
    // carry a signpost
    await p.evaluate(() => { WW.ep.npcs.forEach(n => WW.run.talked.add(n.id)); WW.run.quest = 4; WW.tools.add('wood', 4); WW.tools.add('fiber', 4); WW.dbg.faceFrom(...WW.ep.challenge.at); });
    await tapPad(await p.evaluate(() => WW.dbg.player.dir)); await p.waitForSelector('.chov');
    await p.tap('#ww-ov .pbtn.gold'); await p.waitForFunction(() => !WW.paused);
    ok(await p.locator('#ww-tools .tslot[data-k="sign"]').count() === 1, 'the signpost slot shows while carrying');
    await p.tap('#ww-tools .tslot[data-k="star"]'); await p.tap('#ww-tools .tslot[data-k="sign"]');
    ok(await p.evaluate(() => WW.tools.selected()) === 'sign', 'tapping the signpost slot picks up the signposts again');
    const spot = await p.evaluate(() => WW.tools.heldSign().b.ok[0]);
    await p.evaluate(s => WW.dbg.faceFrom(...s), spot); await tapPad('act');
    ok(await p.evaluate(() => WW.run.signs.some(s => s.right)), 'tapping ● puts the signpost in the right spot');
    // tap on the map to walk
    a = await pos(); const box = await p.locator('#ww-cv').boundingBox();
    await p.tap('#ww-cv', { position: { x: box.width / 2, y: box.height / 2 } }); await p.waitForTimeout(1200); c = await pos();
    ok(c[0] !== a[0] || c[1] !== a[1], 'tapping the map walks there');
  } catch (e) { ok(false, e.message.split('\n')[0]); }
  ok(!errs.length, 'no page errors ' + errs.join(' | '));
  await b.close(); console.log(failed ? failed + ' failed' : 'all good'); process.exitCode = failed ? 1 : 0;
})();
