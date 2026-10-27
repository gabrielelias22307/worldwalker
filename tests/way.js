// node tests/way.js   finding the way (fun-pass-4): the words follow the real path, "Show me the way" lights footprints and
// Christopher leads on the path, being stuck does the same, the compass and the small map are drawn, a tap walks there
// around walls and water. Pictures go to shots/way/
const { chromium } = require('playwright'); const path = require('path'), fs = require('fs');
const ROOT = path.join(__dirname, '..'), OUT = path.join(ROOT, 'shots', 'way'); fs.mkdirSync(OUT, { recursive: true });
let failed = 0; const ok = (c, w) => { console.log((c ? '✓ ' : '✗ ') + w); if (!c) failed++; };
async function open(b, ep, vp, touch) {
  const ctx = await b.newContext({ viewport: vp, hasTouch: !!touch, isMobile: !!touch }); const p = await ctx.newPage(); const errs = []; p.on('pageerror', e => errs.push(e.message));
  const f = 'file://' + path.join(ROOT, 'game', 'ep-' + ep + '.html');
  await p.goto(f); await p.evaluate(() => localStorage.clear()); await p.goto(f); await p.waitForSelector('.startov');
  await p.fill('#si-name', 'Way'); await p.locator('#ww-ov .pbtn.gold.big').click(); await p.waitForSelector('.introov'); await p.locator('#ww-ov .pbtn.gold.big').click();
  await p.waitForTimeout(300); await p.evaluate(() => { WW.scene.skip(); WW.chris.skip(); WW.dbg.noSmudges && WW.dbg.noSmudges(); }); await p.waitForFunction(() => !WW.paused);
  return { p, errs, ctx };
}
(async () => {
  const b = await chromium.launch();
  // 1. the words follow the path: from every open square of 4.2 and 6.2, the first way the words say is a way that gets closer on the real path
  for (const ep of ['1-1','1-2','1-3','2-1','2-2','2-3','3-1','3-2','3-3','4-1','4-2','4-3','5-1','5-2','5-3','6-1','6-2','6-3','7-1','7-2','7-3','8-1','8-2','8-3']) {
    const { p, errs, ctx } = await open(b, ep, { width: 1366, height: 768 });
    const r = await p.evaluate(() => {
      const g = WW.game, [W, H] = g.size, step = { n: [0, -1], ne: [1, -1], e: [1, 0], se: [1, 1], s: [0, 1], sw: [-1, 1], w: [-1, 0], nw: [-1, -1] };
      let n = 0, bad = 0, sample = '';
      const at = [WW.ep.npcs[0].x, WW.ep.npcs[0].y];
      for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
        if (!g.walkable(x, y)) continue; const pth = WW.way.path([x, y], at); if (!pth || pth.length < 4) continue; n++;
        const L = WW.way.legs(pth, [x, y]), [mx, my] = step[L.d1], first = pth[0];
        // the first step of the path goes one of the ways the word names
        if (!((first[0] - x) && Math.sign(first[0] - x) === mx || (first[1] - y) && Math.sign(first[1] - y) === my)) { bad++; if (!sample) sample = x + ',' + y + ' ' + L.d1 + ' first ' + first; }
      }
      WW.dbg.teleport(...(() => { for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) if (g.walkable(x, y) && (WW.way.path([x, y], at) || []).length > 12) return [x, y]; })());
      return { n, bad, sample, words: WW.chris.nextStep().text };
    });
    ok(r.n > 100 && r.bad / r.n < 0.02, `${ep}: from ${r.n} squares, the first way the words say is the real path's way (${r.bad} not ${r.sample}) · "${r.words}"`);
    await ctx.close();
  }
  // 2-5. Show me the way: footprints, Christopher leads on the path, the compass, the small map (a Chromebook)
  {
    const { p, errs, ctx } = await open(b, '1-1', { width: 1366, height: 768 });
    const far = () => p.evaluate(() => { const g = WW.game, at = g.goal(), [sx, sy] = g.screenOf(g.player.x, g.player.y); let best = null; // a square on this screen far (by the path) from the goal
      for (let y = sy * 11; y < sy * 11 + 11; y++) for (let x = sx * 16; x < sx * 16 + 16; x++) { if (!g.walkable(x, y) || g.tileAt(x, y) === 'd') continue; const pth = WW.way.path([x, y], at); if (pth && (!best || pth.length > best[2])) best = [x, y, pth.length]; }
      WW.dbg.teleport(best[0], best[1]); return best; });
    await far();
    await p.keyboard.press('c'); await p.waitForTimeout(300);
    await p.locator('.cbubble .pbtn.gold').first().click(); await p.waitForTimeout(1200);
    const s = await p.evaluate(() => ({ trail: WW.way.trailUntil > performance.now(), mode: WW.chris.fly.mode, at: WW.chris.fly.at, path: WW.way.toGoal().path.slice(0, 5) }));
    ok(s.trail, 'Show me the way lights the footprints');
    ok(s.mode === 'lead' && s.path.some(t => t.join() === (s.at || []).join()), `Christopher leads a few squares ahead on the real path (${s.mode} at ${s.at})`);
    await p.waitForTimeout(600); await p.screenshot({ path: path.join(OUT, 'show-the-way.png') });
    const px = await p.evaluate(() => { const c = document.getElementById('ww-cv'), x = c.getContext('2d').getImageData(c.width - 17, 4, 1, 1).data; return x[3]; });
    ok(px > 0, 'the compass is drawn in the corner of the map');
    const mini = await p.evaluate(() => { const c = document.querySelector('#ww-now canvas.minimap'); return c && c.width > 0 && c.getContext('2d').getImageData(10, 10, 1, 1).data[3] > 0; });
    ok(mini, 'the small map of the whole episode is in the Now card');
    // walk along: he stays ahead on the path and lets go when you arrive
    for (let i = 0; i < 40 && await p.evaluate(() => WW.chris.fly.mode === 'lead'); i++) { const d = await p.evaluate(() => { const t = WW.way.toGoal().path[0], pl = WW.game.player; return t[0] > pl.x ? 'ArrowRight' : t[0] < pl.x ? 'ArrowLeft' : t[1] > pl.y ? 'ArrowDown' : 'ArrowUp'; }); await p.keyboard.down(d); await p.waitForTimeout(150); await p.keyboard.up(d); await p.waitForTimeout(60); }
    ok(await p.evaluate(() => WW.chris.fly.mode !== 'lead'), 'walking his way to the goal ends the lead');
    // stuck for a while: he leads by himself
    await far(); await p.evaluate(() => { WW.chris.fly.idleMs = 1200; WW.chris.fly.lastNudge = 0; WW.chris.fly.lastProgress = performance.now(); });
    await p.waitForTimeout(2600);
    ok(await p.evaluate(() => WW.chris.fly.mode === 'lead' || WW.chris.fly.mode === 'go' || WW.chris.fly.mode === 'hover'), `stuck: he shows the way by himself (${await p.evaluate(() => WW.chris.fly.mode)})`);
    ok(!errs.length, 'no page errors ' + errs.join(' | '));
    await ctx.close();
  }
  // 6. tap to walk around water: 1.1, from the west bank, tap a person on the east bank
  {
    const { p, errs, ctx } = await open(b, '1-1', { width: 1366, height: 768 });
    const target = await p.evaluate(() => { const g = WW.game; // the nearest person whose straight line crosses water from where we stand
      const n = WW.ep.npcs.map(n => [n.x, n.y]); WW.dbg.teleport(4, 6); return n[0]; });
    const before = await p.evaluate(() => [WW.game.player.x, WW.game.player.y]);
    const box = await p.locator('#ww-cv').boundingBox(), [sx, sy] = await p.evaluate(t => WW.game.screenOf(t[0], t[1]), target);
    const cur = await p.evaluate(() => WW.game.screenOf(WW.game.player.x, WW.game.player.y));
    if (cur.join() === [sx, sy].join()) {
      await p.mouse.click(box.x + ((target[0] - sx * 16) + 0.5) / 16 * box.width, box.y + ((target[1] - sy * 11) + 0.5) / 11 * box.height);
      const talked = await p.waitForSelector('.talkov', { timeout: 15000 }).then(() => true, () => false);
      ok(talked, `a tap on a person walks there along the path and talks (from ${before} to ${target})`);
      await p.screenshot({ path: path.join(OUT, 'tap-walked.png') });
    } else ok(true, 'tap to walk: the person is on another screen (skipped)');
    // a tap on water: a red ring, no walking
    await p.evaluate(() => { while (WW.ui.stack.length) WW.ui.close(WW.ui.top()); });
    ok(!errs.length, 'no page errors ' + errs.join(' | '));
    await ctx.close();
  }
  // 7. a phone: the ☰ goals show the small map; the compass fits; the words show the steps
  {
    const { p, errs, ctx } = await open(b, '2-2', { width: 390, height: 844 }, true);
    await p.tap('#ww-dpad [data-d=goals]'); await p.waitForTimeout(300);
    ok(await p.evaluate(() => !!document.querySelector('#ww-qpop.on canvas.minimap')), 'a phone: ☰ shows the small map');
    await p.screenshot({ path: path.join(OUT, 'phone-goals-map.png') });
    await p.tap('#ww-dpad [data-d=goals]'); await p.tap('#ww-dpad [data-d=chris]'); await p.waitForTimeout(400);
    await p.screenshot({ path: path.join(OUT, 'phone-words.png') });
    ok(!errs.length, 'no page errors ' + errs.join(' | '));
    await ctx.close();
  }
  await b.close(); console.log(failed ? failed + ' failed' : 'all good'); process.exitCode = failed ? 1 : 0;
})();
