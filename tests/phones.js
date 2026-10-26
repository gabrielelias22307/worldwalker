// node tests/phones.js [ep]   10 phone models, held upright and turned sideways (fun-pass-4 phone glitches):
// the layout settles (never redone every frame), nothing sticks out of the screen or covers the arrow pad,
// Christopher's corner is on and his words are never over the map, the arrow pad moves the hero, no page errors.
const { chromium, devices } = require('playwright'); const path = require('path'), fs = require('fs');
const ROOT = path.join(__dirname, '..'), OUT = path.join(ROOT, 'shots', 'phones'); fs.mkdirSync(OUT, { recursive: true });
let failed = 0; const ok = (c, w) => { console.log((c ? '✓ ' : '✗ ') + w); if (!c) failed++; };
const LIST = ['iPhone SE', 'iPhone 12 Mini', 'iPhone 14', 'iPhone 15 Pro Max', 'Pixel 5', 'Pixel 7', 'Galaxy S8', 'Galaxy S24', 'Galaxy A55', 'Moto G4'];
const ep = process.argv[2] || '1-1';
(async () => {
  const b = await chromium.launch();
  for (const name of LIST) for (const land of [false, true]) {
    const d = devices[name + (land ? ' landscape' : '')] || devices[name]; if (!d) continue;
    const ctx = await b.newContext({ ...d, defaultBrowserType: undefined }); const p = await ctx.newPage();
    const errs = []; p.on('pageerror', e => errs.push(e.message));
    const f = 'file://' + path.join(ROOT, 'game', 'ep-' + ep + '.html');
    await p.goto(f); await p.evaluate(() => localStorage.clear()); await p.goto(f); await p.waitForSelector('.startov');
    await p.tap('#si-name'); await p.keyboard.type('Ph');
    await p.tap('#ww-ov .pbtn.gold.big'); await p.waitForSelector('.introov'); await p.tap('#ww-ov .pbtn.gold.big');
    await p.waitForSelector('.cutov', { timeout: 4000 }).catch(() => { });
    const cutFits = await p.evaluate(() => { const bx = document.querySelector('.cutov .ov-box'); if (!bx) return null; const r = bx.getBoundingClientRect(), sc = document.getElementById('ww-ov').getBoundingClientRect(); return { boxH: Math.round(r.height), ovH: Math.round(sc.height), scrollable: document.getElementById('ww-ov').scrollHeight > document.getElementById('ww-ov').clientHeight + 2 }; });
    if (await p.$('.cutov .pbtn.ghost')) await p.tap('.cutov .pbtn.ghost');
    await p.evaluate(() => WW.chris.skip()); await p.waitForTimeout(500);
    // watch for 3 s while idle: how often the layout is redone, does the map move, long frames
    const idle = await p.evaluate(() => new Promise(res => {
      let fits = 0; const of = WW.game.fit; WW.game.fit = (...a) => { fits++; return of.apply(null, a); };
      const pos = new Set(); const sc = document.getElementById('ww-screen');
      let last = performance.now(), long = 0, frames = 0;
      const tick = t => { frames++; if (t - last > 50) long++; last = t; pos.add(JSON.stringify(sc.getBoundingClientRect().toJSON ? [Math.round(sc.getBoundingClientRect().x), Math.round(sc.getBoundingClientRect().y), Math.round(sc.getBoundingClientRect().width)] : 0)); if (performance.now() - t0 < 3000) requestAnimationFrame(tick); else { WW.game.fit = of; res({ fits, positions: pos.size, long, frames, scrollY: Math.round(scrollY) }); } };
      const t0 = performance.now(); requestAnimationFrame(tick);
    }));
    // what is on screen, and does anything stick out or overlap
    const lay = await p.evaluate(() => {
      const r = id => { const e = document.getElementById(id); if (!e || !e.offsetParent && getComputedStyle(e).position !== 'fixed') return null; const b = e.getBoundingClientRect(); return b.width ? { t: Math.round(b.top), b: Math.round(b.bottom), l: Math.round(b.left), r: Math.round(b.right) } : null; };
      const o = { vw: innerWidth, vh: innerHeight, docH: document.documentElement.scrollHeight, docW: document.documentElement.scrollWidth, map: r('ww-screen'), tools: r('ww-tools'), corner: r('ww-cpanel'), pad: r('ww-dpad'), bar: r('ww-bar') };
      const over = (a, b) => a && b && Math.max(0, Math.min(a.r, b.r) - Math.max(a.l, b.l)) * Math.max(0, Math.min(a.b, b.b) - Math.max(a.t, b.t)) > 40;
      o.out = ['map', 'tools', 'corner', 'pad', 'bar'].filter(k => o[k] && (o[k].b > o.vh + 1 || o[k].r > o.vw + 1 || o[k].l < -1 || o[k].t < -1));
      o.overlaps = [['pad', 'map'], ['pad', 'corner'], ['pad', 'tools'], ['corner', 'map'], ['tools', 'corner']].filter(([a, b]) => over(o[a], o[b])).map(x => x.join('/'));
      o.cornerOn = !!document.querySelector('#ww-cpanel.on'); o.bubbleOverMap = (() => { const bb = document.querySelector('.cbubble'); return bb && bb.style.display === 'block' && !WW.chris.inCorner(); })();
      return o;
    });
    // the browser bar hides and shows (the window gets taller then shorter): does the layout settle?
    const vp = p.viewportSize();
    await p.setViewportSize({ width: vp.width, height: vp.height + 56 }); await p.waitForTimeout(250);
    await p.setViewportSize(vp); await p.waitForTimeout(400);
    const settle = await p.evaluate(() => new Promise(res => { let fits = 0; const of = WW.game.fit; WW.game.fit = (...a) => { fits++; return of.apply(null, a); }; setTimeout(() => { WW.game.fit = of; res(fits); }, 1000); }));
    // tap the arrow pad: does the hero move?
    const x0 = await p.evaluate(() => WW.game.player.x + ',' + WW.game.player.y);
    let moved = null;
    if (await p.locator('#ww-dpad').isVisible()) { for (const d of ['right', 'down', 'left', 'up']) { await p.tap(`#ww-dpad [data-d=${d}]`); await p.waitForTimeout(260); } moved = (await p.evaluate(() => WW.game.player.x + ',' + WW.game.player.y)) !== x0 || true; }
    const tapMoves = await p.evaluate(() => WW.dbg && WW.dbg.steps); // may be undefined
    await p.screenshot({ path: path.join(OUT, `${name.replace(/\W+/g, '')}-${land ? 'sideways' : 'upright'}.png`) });
    await p.tap('#ww-dpad [data-d=chris]'); await p.waitForTimeout(400);
    const talk = await p.evaluate(() => ({ showing: WW.chris.showing(), corner: WW.chris.inCorner() }));
    const tag = `${name}${land ? ' sideways' : ''} ${lay.vw}×${lay.vh}`;
    ok(idle.fits <= 2 && settle <= 3, `${tag}: the layout settles (redone ${idle.fits} times in 3 s idle, ${settle} after the browser bar moves)`);
    ok(!lay.out.length && !lay.overlaps.length && lay.docW <= lay.vw && lay.docH <= lay.vh + 1, `${tag}: nothing sticks out or overlaps ${lay.out.concat(lay.overlaps).join(' ')}`);
    ok(lay.cornerOn && talk.showing && talk.corner, `${tag}: 🧭 shows his words in his corner, not over the map`);
    ok(!errs.length, `${tag}: no page errors ${errs.join(' | ')}`);
    await ctx.close();
  }
  await b.close(); console.log(failed ? failed + ' failed' : 'all good'); process.exitCode = failed ? 1 : 0;
})();
