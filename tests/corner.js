// node tests/corner.js   Christopher's corner (fun-pass-4): on a Chromebook, a laptop, the Canvas frame and a phone his words show
// in his corner (left of the map, or under it), never over the map; his portrait is drawn. Pictures go to shots/wings/
const { chromium } = require('playwright'); const path = require('path');
let failed = 0; const ok = (c, w) => { console.log((c ? '✓ ' : '✗ ') + w); if (!c) failed++; };
(async () => {
  const b = await chromium.launch();
  for (const [w, h, name, touch] of [[1366, 768, 'chromebook'], [654, 820, 'canvas'], [390, 844, 'phone', true], [1024, 768, 'laptop']]) {
    const ctx = await b.newContext({ viewport: { width: w, height: h }, hasTouch: !!touch, isMobile: !!touch }); const p = await ctx.newPage();
    const errs = []; p.on('pageerror', e => errs.push(e.message));
    const f = 'file://' + path.join(__dirname, '..', 'game', 'ep-1-1.html');
    await p.goto(f); await p.evaluate(() => localStorage.clear()); await p.goto(f); await p.waitForSelector('.startov');
    await p.fill('#si-name', 'Sam'); await p.locator('#ww-ov .pbtn.gold.big').click(); await p.waitForSelector('.introov');
    await p.locator('#ww-ov .pbtn.gold.big').click(); await p.waitForSelector('.cutov'); await p.locator('.cutov .pbtn.ghost').click();
    await p.waitForFunction(() => WW.chris.showing(), null, { timeout: 5000 }).catch(() => { }); await p.waitForTimeout(300);
    const r = await p.evaluate(() => { const b = document.querySelector('.cbubble'), cv = document.getElementById('ww-cv').getBoundingClientRect(), br = b && b.getBoundingClientRect();
      const over = br && br.width ? Math.max(0, Math.min(br.right, cv.right) - Math.max(br.left, cv.left)) * Math.max(0, Math.min(br.bottom, cv.bottom) - Math.max(br.top, cv.top)) : 0;
      return { showing: WW.chris.showing(), corner: WW.chris.inCorner(), overMap: Math.round(over), scrollW: document.documentElement.scrollWidth, text: b && b.innerText.slice(0, 60) }; });
    const drawn = await p.evaluate(() => { const c = document.getElementById('ww-cpface').getContext('2d').getImageData(48, 50, 1, 1).data; return c[3] > 0; });
    if (!(r.showing && r.corner && r.overMap === 0 && drawn)) console.log('  ', JSON.stringify(r), drawn);
    ok(r.showing && r.corner && r.overMap === 0 && drawn && r.scrollW <= w && !errs.length, `${name} ${w}×${h}: his words are in his corner, not over the map; portrait drawn ${errs.join(' | ')}`);
    await p.screenshot({ path: path.join(__dirname, '..', 'shots', 'wings', `corner-${name}.png`) });
    await ctx.close();
  }
  await b.close(); console.log(failed ? failed + ' failed' : 'all good'); process.exitCode = failed ? 1 : 0;
})();
