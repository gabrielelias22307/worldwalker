const { chromium } = require('playwright'); const path = require('path');
(async () => {
  const b = await chromium.launch();
  for (const [w, h, touch] of [[1366, 768], [654, 820], [390, 844, true]]) {
    const ctx = await b.newContext({ viewport: { width: w, height: h }, hasTouch: !!touch, isMobile: !!touch });
    const p = await ctx.newPage(); const errs = []; p.on('pageerror', e => errs.push(e.message));
    const url = 'file://' + path.join(__dirname, '..', 'dist', 'canvas', 'Worldwalker 1.1.html');
    await p.goto(url); await p.evaluate(() => localStorage.clear()); await p.goto(url);
    await p.fill('#si-name', 'M'); await p.locator('#ww-ov .pbtn.gold.big').click(); await p.waitForSelector('.introov');
    await p.locator('#ww-ov .pbtn.gold.big').click(); await p.evaluate(() => WW.chris.skip()); await p.waitForTimeout(400);
    const r = await p.evaluate(() => { const q = s => { const e = document.querySelector(s); if (!e) return null; const r = e.getBoundingClientRect(); return [Math.round(r.top), Math.round(r.bottom), Math.round(r.left), Math.round(r.right)]; };
      return { doc: document.documentElement.scrollHeight, bar: q('#ww-bar'), hud: q('#ww-hud'), quest: q('#ww-quest'), screen: q('#ww-screen'), tools: q('#ww-tools'), dpad: q('#ww-dpad') }; });
    console.log(w + 'x' + h, JSON.stringify(r), errs);
    await p.keyboard.press('c'); await p.waitForTimeout(300);
    await p.screenshot({ path: `/tmp/claude-0/-home-user-worldwalker/fb6338c7-ec9d-5d57-9512-f48d66a5ccbd/scratchpad/m-${w}.png` });
    await ctx.close();
  }
  await b.close();
})();
