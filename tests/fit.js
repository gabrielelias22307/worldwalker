// node tests/fit.js [1.1 ...]   does the game fit the screen? Every episode (the Canvas files students get) at
// 1366×768 (school Chromebook), 654×820 (inside the Canvas page) and 390×844 (a phone, touch). Fails if the page scrolls,
// or if the map, tool bar, quest bar, Christopher's bubble, the arrow pad or an open panel goes outside the window.
// Shots of 1.1 go to shots/fit/.
const { chromium } = require('playwright');
const path = require('path'), fs = require('fs');
const ROOT = path.join(__dirname, '..'), OUT = path.join(ROOT, 'shots', 'fit'); fs.mkdirSync(OUT, { recursive: true });
const all = fs.readdirSync(path.join(ROOT, 'game', 'episodes')).filter(f => /^ep-\d-\d\.js$/.test(f)).sort().map(f => f.slice(3, 6).replace('-', '.'));
const ids = process.argv.slice(2).length ? process.argv.slice(2) : all;
const SIZES = [{ name: 'chromebook', w: 1366, h: 768 }, { name: 'canvas', w: 654, h: 820 }, { name: 'phone', w: 390, h: 844, touch: true }];
let failed = 0;

(async () => {
  const b = await chromium.launch();
  for (const sz of SIZES) {
    const ctx = await b.newContext({ viewport: { width: sz.w, height: sz.h }, hasTouch: !!sz.touch, isMobile: !!sz.touch });
    for (const id of ids) {
      const p = await ctx.newPage(); const errs = [], bad = [];
      p.on('pageerror', e => errs.push(e.message));
      const file = 'file://' + path.join(ROOT, 'dist', 'canvas', `Worldwalker ${id}.html`);
      // is it all on screen? (a panel may scroll inside itself, but the panel itself must fit)
      const innerW = sz.w;
      const check = async (when, extra = []) => {
        const r = await p.evaluate(sel => {
          const W = innerWidth, H = innerHeight, out = [];
          const se = document.scrollingElement;
          if (se.scrollHeight > H + 1 || se.scrollWidth > W + 1) out.push(`the page scrolls (${se.scrollWidth}×${se.scrollHeight})`);
          const vis = e => e && e.offsetParent !== null && getComputedStyle(e).display !== 'none' && getComputedStyle(e).visibility !== 'hidden';
          sel.forEach(([name, s]) => document.querySelectorAll(s).forEach(e => {
            if (!vis(e)) return;
            const r = e.getBoundingClientRect();
            if (r.width < 2 || r.height < 2) return;
            if (r.left < -1 || r.top < -1 || r.right > W + 1 || r.bottom > H + 1) out.push(`${name} is outside the window (${Math.round(r.left)},${Math.round(r.top)} → ${Math.round(r.right)},${Math.round(r.bottom)})`);
          }));
          return out;
        }, [['map', '#ww-screen'], ['top bar', '#ww-bar'], ['hearts bar', '#ww-hud'], ['quest bar', '#ww-quest'], ['tool bar', '#ww-tools'], ['arrow pad', '#ww-dpad'], ["Christopher's bubble", '.cbubble'], ['panel', '#ww-ov:not(.hidden)'], ...extra]);
        // a long panel scrolls inside itself; its box must still fit side to side and start inside the window
        const bx = await p.evaluate(() => { const o = document.querySelector('#ww-ov:not(.hidden) .ov-box'); if (!o) return null; const r = o.getBoundingClientRect(); return [r.left, r.top, r.right]; });
        if (bx && (bx[0] < -1 || bx[2] > innerW + 1 || bx[1] < -1)) r.push(`the panel box is outside the window (${bx.map(Math.round)})`);
        r.forEach(m => bad.push(`${when}: ${m}`));
      };
      try {
        await p.goto(file); await p.evaluate(() => localStorage.clear()); await p.goto(file);
        await p.waitForSelector('#si-name'); await check('sign-in');
        await p.fill('#si-name', 'Fit'); await p.locator('#ww-ov .pbtn.gold.big').click(); await p.waitForSelector('.introov');
        await check('opening card');
        await p.locator('#ww-ov .pbtn.gold.big').click(); await p.waitForTimeout(300);
        if (await p.evaluate(() => WW.chris.scene)) { await p.waitForSelector('.cbubble.meet', { state: 'visible' }); await p.waitForTimeout(500); await check('meeting Christopher'); if (id === '1.1') await p.screenshot({ path: path.join(OUT, `${sz.name}-1-meet.png`) }); await p.evaluate(() => WW.chris.skip()); }
        await p.waitForFunction(() => !WW.paused); await p.evaluate(() => WW.dbg.noSmudges());
        await p.waitForTimeout(250); await check('the map');
        if (id === '1.1') await p.screenshot({ path: path.join(OUT, `${sz.name}-0-start.png`) });
        await p.evaluate(() => WW.chris.talk()); await p.waitForTimeout(250); await check("Christopher's tip");
        if (id === '1.1') await p.screenshot({ path: path.join(OUT, `${sz.name}-2-tip.png`) });
        // the bubble never covers the place he names, nor the hero
        const cover = await p.evaluate(() => {
          const ns = WW.chris.nextStep(), g = WW.game, cv = document.getElementById('ww-cv'), cr = cv.getBoundingClientRect(), k = cr.width / cv.width, [sx, sy] = g.screenOf(g.player.x, g.player.y);
          const bb = document.querySelector('.cbubble').getBoundingClientRect();
          const rect = (x, y) => ({ l: cr.left + (x - sx * 16) * 16 * k, t: cr.top + ((y - sy * 11) * 16 - 3) * k, r: cr.left + ((x - sx * 16) * 16 + 16) * k, b: cr.top + ((y - sy * 11) * 16 + 16) * k });
          const ov = (a) => Math.max(0, Math.min(a.r, bb.right) - Math.max(a.l, bb.left)) * Math.max(0, Math.min(a.b, bb.bottom) - Math.max(a.t, bb.top)) / ((a.r - a.l) * (a.b - a.t));
          const out = [];
          if (ov(rect(g.player.x, g.player.y)) > 0.25) out.push('the bubble covers the hero');
          if (ns.at && g.screenOf(ns.at[0], ns.at[1]).join() === [sx, sy].join() && ov(rect(ns.at[0], ns.at[1])) > 0.25) out.push('the bubble covers the place Christopher names');
          return out;
        });
        cover.forEach(m => bad.push("Christopher's tip: " + m));
        await p.evaluate(() => WW.chris.hide());
        // a talk, the stone, the Passport and the camp
        const ep = await p.evaluate(() => ({ n: [WW.ep.npcs[0].x, WW.ep.npcs[0].y], stone: WW.ep.challenge.at }));
        await p.evaluate(([x, y]) => WW.dbg.bumpInto(x, y), ep.n); await p.waitForSelector('.talkov'); await p.waitForTimeout(300); await check('a talk');
        await p.keyboard.press('Escape'); await p.waitForFunction(() => !WW.paused);
        await p.evaluate(() => { WW.ep.npcs.forEach(n => WW.run.talked.add(n.id)); WW.run.quest = 4; });
        await p.evaluate(([x, y]) => WW.dbg.bumpInto(x, y), ep.stone); await p.waitForSelector('.chov'); await p.waitForTimeout(300); await check('the compass stone');
        await p.evaluate(() => WW.ui.top().close()); await p.waitForFunction(() => !WW.paused);
        await p.evaluate(() => WW.ui.passport()); await p.waitForSelector('.passov'); await p.waitForTimeout(300); await check('the Passport');
        await p.evaluate(() => WW.ui.camp()); await p.waitForSelector('.campov .campcv'); await p.waitForTimeout(300); await check('the camp');
        const top = await p.evaluate(() => { const ov = document.getElementById('ww-ov'), cv = document.querySelector('.campcv'); return { scroll: ov.scrollTop, inView: cv.getBoundingClientRect().top >= ov.getBoundingClientRect().top - 1 }; });
        if (top.scroll > 0 || !top.inView) bad.push('the camp did not open at the top');
        if (id === '1.1') await p.screenshot({ path: path.join(OUT, `${sz.name}-5-camp.png`) });
      } catch (e) { bad.push('could not run: ' + e.message.split('\n')[0]); }
      errs.forEach(e => bad.push('page error: ' + e));
      if (bad.length) failed++;
      console.log(`${sz.name} ${sz.w}×${sz.h} ${id}: ${bad.length ? 'PROBLEM ✗' : 'fits ✓'}`); bad.forEach(m => console.log('   ' + m));
      await p.close();
    }
    await ctx.close();
  }
  await b.close();
  console.log(failed ? failed + ' problem(s)' : 'all good'); process.exitCode = failed ? 1 : 0;
})();
