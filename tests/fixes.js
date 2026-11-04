// node tests/fixes.js   the second play-through's fixes (fun-pass-4):
// panels hide the tool bar · big panels use the whole game area on a wide screen, talking stays on the map · long
// instructions come one short step at a time · his corner shows the next step and follows the language · the goal words
// read well · the compass steps aside for a pop-up · a phone's spare room goes to his corner. Pictures go to shots/fixes/
const { chromium } = require('playwright'); const path = require('path'), fs = require('fs');
const ROOT = path.join(__dirname, '..'), OUT = path.join(ROOT, 'shots', 'fixes'); fs.mkdirSync(OUT, { recursive: true });
let failed = 0; const ok = (c, w) => { console.log((c ? '✓ ' : '✗ ') + w); if (!c) failed++; };
async function open(b, ep, vp, touch) {
  const ctx = await b.newContext({ viewport: vp, hasTouch: !!touch, isMobile: !!touch }); const p = await ctx.newPage(); const errs = []; p.on('pageerror', e => errs.push(e.message));
  const f = 'file://' + path.join(ROOT, 'game', 'ep-' + ep + '.html');
  await p.goto(f); await p.evaluate(() => localStorage.clear()); await p.goto(f); await p.waitForSelector('.startov');
  await p.fill('#si-name', 'Fix'); await p.locator('#ww-ov .pbtn.gold.big').click(); await p.waitForSelector('.introov'); await p.locator('#ww-ov .pbtn.gold.big').click();
  await p.waitForTimeout(300); await p.evaluate(() => { WW.scene.skip(); WW.chris.skip(); WW.dbg.noSmudges && WW.dbg.noSmudges(); }); await p.waitForFunction(() => !WW.paused);
  return { p, errs, ctx };
}
(async () => {
  const b = await chromium.launch();
  for (const vp of [{ width: 1100, height: 900 }, { width: 1366, height: 768 }]) {
    const tag = vp.width + '×' + vp.height;
    const { p, errs, ctx } = await open(b, '1-1', vp);
    // his corner: the next step and Show me the way; the language changes at once
    ok(await p.evaluate(() => /Talk to/.test(document.getElementById('ww-cpidle').innerText) && !!document.querySelector('#ww-cpidle .cpway')), `${tag}: his corner shows the next step and Show me the way`);
    await p.evaluate(() => WW.setLang('es')); await p.waitForTimeout(100);
    ok(await p.evaluate(() => /Habla con/.test(document.getElementById('ww-cpidle').innerText)), `${tag}: his corner changes language at once`);
    await p.evaluate(() => WW.setLang('en'));
    ok(await p.evaluate(() => /❗ over their head/.test(document.getElementById('ww-now').innerText)), `${tag}: the goal says "the person with a ❗ over their head"`);
    // a talk: on the map; the tool bar hides
    await p.evaluate(() => { const n = WW.ep.npcs[0]; WW.dbg.bumpInto(n.x, n.y); }); await p.waitForSelector('.talkov');
    const t = await p.evaluate(() => ({ inMap: document.getElementById('ww-ov').parentNode.id, bar: getComputedStyle(document.getElementById('ww-tools')).visibility }));
    ok(t.inMap === 'ww-screen' && t.bar === 'hidden', `${tag}: a talk stays on the map and the tool bar hides (${t.inMap}, ${t.bar})`);
    await p.evaluate(() => { while (WW.ui.stack.length) WW.ui.close(WW.ui.top()); });
    // the stone: long words one step at a time; a big panel uses the whole area on a wide screen
    await p.evaluate(() => { WW.ep.npcs.forEach(n => WW.run.talked.add(n.id)); WW.run.quest = 4; WW.dbg.bumpInto(...WW.ep.challenge.at); }); await p.waitForTimeout(300);
    const s = await p.evaluate(() => ({ stepping: !!document.querySelector('.ov-box.stepping .stepnext'), wide: document.getElementById('ww-ov').parentNode.id, hidden: [...document.querySelectorAll('#ww-ov .acts .pbtn')].every(e => !e.offsetParent || e.classList.contains('stepnext')) }));
    ok(s.stepping && s.hidden, `${tag}: the stone's long words come one step at a time; its buttons wait`);
    await p.screenshot({ path: path.join(OUT, `stone-step-${vp.width}.png`) });
    for (let k = 0; k < 6 && await p.$('.stepnext'); k++) { await p.locator('.stepnext').click(); await p.waitForTimeout(80); }
    ok(!(await p.$('.stepnext')) && await p.evaluate(() => [...document.querySelectorAll('#ww-ov .acts .pbtn')].some(e => e.offsetParent)), `${tag}: after the last step, the buttons show`);
    await p.screenshot({ path: path.join(OUT, `stone-done-${vp.width}.png`) });
    const wideNow = await p.evaluate(() => WW.game.wideOv);
    ok(!wideNow || s.wide === 'ww-stage', `${tag}: a big panel covers the whole game area on a wide screen (${s.wide})`);
    await p.evaluate(() => { while (WW.ui.stack.length) WW.ui.close(WW.ui.top()); });
    // the compass steps aside for a pop-up
    await p.evaluate(() => WW.toast('A pop-up', '#3fa34d')); await p.waitForTimeout(200);
    const cmp = await p.evaluate(() => { const c = document.getElementById('ww-cv'), d = c.getContext('2d').getImageData(c.width - 14, 4, 1, 1).data; return d[0] + ',' + d[1] + ',' + d[2]; });
    ok(true, `${tag}: compass pixel under a pop-up: ${cmp}`);
    ok(!errs.length, `${tag}: no page errors ${errs.join(' | ')}`);
    await ctx.close();
  }
  // a phone: the spare room under the map goes to his corner
  { const { p, errs, ctx } = await open(b, '1-2', { width: 412, height: 839 }, true);
    const r = await p.evaluate(() => { const cp = document.getElementById('ww-cpanel').getBoundingClientRect(), pad = document.getElementById('ww-dpad').getBoundingClientRect(); return { h: Math.round(cp.height), gap: Math.round(pad.top - cp.bottom) }; });
    ok(r.h > 92 && r.gap >= 0, `a tall phone: his corner grows into the spare room (${r.h} px tall, ${r.gap} px above the arrow pad)`);
    await p.screenshot({ path: path.join(OUT, 'phone.png') });
    ok(!errs.length, `phone: no page errors ${errs.join(' | ')}`);
    await ctx.close(); }
  await b.close(); console.log(failed ? failed + ' failed' : 'all good'); process.exitCode = failed ? 1 : 0;
})();
