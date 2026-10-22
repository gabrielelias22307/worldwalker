// node tests/wings.js   (PLAYTEST-3 Part 2) Christopher flies. Checks, in 1.1 (the Canvas file):
//  - he meets you by flying in, then floats beside the hero and never covers the hero
//  - when a new goal starts he flies to it, circles it, and locks on (corner brackets), in the goal's color
//  - after ~15 s with no progress he flies to the next goal by himself (free), then shows "?"
//  - "Show me the way" sends him there too
//  - the first time the hero faces a tree, he hops over it (green)
//  - with reduced motion (WW.calm) he stays still beside the hero: no orbit, no flights, just the glow and a still lock-on
// Screenshots at 1366×768, in the Canvas frame (654×820) and on a phone (390×844) go to shots/wings/.
const { chromium } = require('playwright');
const path = require('path'), fs = require('fs');
const ROOT = path.join(__dirname, '..'), OUT = path.join(ROOT, 'shots', 'wings'); fs.mkdirSync(OUT, { recursive: true });
const file = 'file://' + path.join(ROOT, 'dist', 'canvas', 'Worldwalker 1.1.html');
let failed = 0;
const ok = (c, m) => { if (!c) { failed++; console.log('  ✗ ' + m); } else console.log('  ✓ ' + m); };

async function open(b, vp, opt = {}) {
  const ctx = await b.newContext({ viewport: vp, reducedMotion: opt.calm ? 'reduce' : 'no-preference', hasTouch: !!opt.touch, isMobile: !!opt.touch });
  const p = await ctx.newPage(); const errs = [];
  p.on('pageerror', e => errs.push(e.message));
  await p.goto(file); await p.evaluate(() => localStorage.clear()); await p.goto(file);
  await p.fill('#si-name', 'Jay'); await p.locator('#ww-ov .pbtn.gold.big').click();
  await p.locator('#ww-ov .pbtn.gold.big').click();
  await p.waitForSelector('.cutov'); await p.locator('.cutov .pbtn.ghost').click(); // Skip the cut scene
  return { p, ctx, errs };
}
const state = p => p.evaluate(() => { const F = WW.chris.fly, g = WW.game, [sx, sy] = [Math.floor(g.player.x / 16), Math.floor(g.player.y / 11)];
  return { mode: F.mode, x: F.x, y: F.y, kind: F.kind, color: WW.chris.color(), at: F.at, ask: F.ask, mark: F.mark && performance.now() < F.mark.until ? F.mark : null,
    hero: [(g.player.x - sx * 16) * 16 + 8, (g.player.y - sy * 11) * 16 + 8], sx, sy, next: WW.chris.nextStep() }; });

(async () => {
  const b = await chromium.launch();
  // ---- the Chromebook: meet, fly-in, beside the hero ----
  console.log('1.1 at 1366×768');
  const { p, errs } = await open(b, { width: 1366, height: 768 });
  await p.waitForSelector('.cbubble.meet', { state: 'visible' });
  await p.waitForTimeout(250); await p.screenshot({ path: path.join(OUT, '1-flies-in.png') });
  await p.waitForTimeout(900); await p.screenshot({ path: path.join(OUT, '2-meet.png') });
  for (let k = 0; k < 8 && await p.evaluate(() => WW.chris.scene); k++) { await p.locator('.cbubble').click(); await p.waitForTimeout(150); }
  await p.waitForFunction(() => !WW.paused);
  // walk around for 3 seconds: he is never on top of the hero
  let worst = 99;
  for (const d of ['ArrowRight', 'ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowLeft', 'ArrowUp', 'ArrowRight']) {
    await p.keyboard.down(d); for (let i = 0; i < 4; i++) { await p.waitForTimeout(90); const s = await state(p); worst = Math.min(worst, Math.max(Math.abs(s.x - s.hero[0]), Math.abs(s.y - s.hero[1]))); } await p.keyboard.up(d);
  }
  for (let i = 0; i < 3; i++) { await p.keyboard.press('Escape'); await p.waitForTimeout(100); } // walked into a sign or a person? close it
  await p.evaluate(() => { WW.ui.stack && WW.ui.stack.slice().forEach(() => WW.ui.top() && WW.ui.top().close()); WW.chris.hide(); });
  ok(!(await p.evaluate(() => WW.paused)), 'back on the map after walking');
  ok(worst >= 12.5, `while walking he never covers the hero (closest: ${worst.toFixed(1)} px apart, needs 13)`);
  await p.screenshot({ path: path.join(OUT, '3-beside.png') });
  // ---- idle: 15 s with no progress, he flies to the next goal by himself ----
  await p.evaluate(() => { WW.chris.fly.lastProgress = performance.now(); WW.chris.fly.lastNudge = 0; });
  await p.waitForTimeout(8000);
  ok((await state(p)).mode === 'follow', 'after 8 s of nothing he is still beside the hero');
  let s; for (let i = 0; i < 40; i++) { await p.waitForTimeout(250); s = await state(p); if (s.mode === 'hover') break; }
  ok(s.mode === 'hover', `after ~15 s of nothing he flies to the next goal by himself (mode: ${s.mode})`);
  ok(s.at && s.next.at && s.at.join() === s.next.at.join(), `…to the goal Christopher would name (${s.at} = ${s.next.at})`);
  ok(s.color === s.next.kind && s.mark && s.mark.kind === s.next.kind, `his color and the lock-on match what he points at (${s.color}, a person = gold)`);
  const free = await p.evaluate(() => WW.save.coins || 0);
  await p.screenshot({ path: path.join(OUT, '4-idle-points.png') });
  for (let i = 0; i < 40 && (await state(p)).mode !== 'follow'; i++) await p.waitForTimeout(250);
  s = await state(p);
  ok(s.mode === 'follow' && s.ask, 'then he comes back and shows "?" (ask him)');
  ok(await p.evaluate(() => WW.save.coins || 0) === free, 'the nudge was free');
  await p.screenshot({ path: path.join(OUT, '5-back-ask.png') });
  // ---- a new goal: talk to the first person, he flies to the next one ----
  const n1 = s.next.at;
  await p.evaluate(([x, y]) => WW.dbg.bumpInto(x, y), n1);
  await p.waitForSelector('.talkov');
  for (let i = 0; i < 6 && await p.locator('.talkov .pbtn.gold').count(); i++) { await p.locator('.talkov .pbtn.gold').first().click(); await p.waitForTimeout(80); }
  const btns = p.locator('.talkov .choices button');
  for (let i = 0; i < await btns.count(); i++) { await btns.nth(i).click(); await p.waitForTimeout(120); if (await p.locator('.talkov .fb.right').count()) break; await p.locator('.talkov .pbtn.ghost').last().click(); }
  await p.waitForTimeout(250); await p.screenshot({ path: path.join(OUT, '6-right-answer-spin.png') });
  await p.locator('.talkov .pbtn.gold').last().click();
  for (let i = 0; i < 20; i++) { await p.waitForTimeout(200); s = await state(p); if (s.mode !== 'follow') break; }
  ok(s.mode !== 'follow' && s.at && s.at.join() !== n1.join(), `after the talk he flies to the next person by himself (${s.at})`);
  for (let i = 0; i < 20 && (await state(p)).mode !== 'hover'; i++) await p.waitForTimeout(150);
  await p.screenshot({ path: path.join(OUT, '7-next-goal.png') });
  for (let i = 0; i < 40 && (await state(p)).mode !== 'follow'; i++) await p.waitForTimeout(200);
  // ---- Show me the way (C, then the button) ----
  await p.keyboard.press('c'); await p.waitForSelector('.cbubble', { state: 'visible' });
  const kindB = await p.evaluate(() => document.querySelector('.cbubble').dataset.kind);
  ok(kindB === (await state(p)).next.kind, `his bubble border matches what he points at (${kindB})`);
  await p.locator('.cbubble .pbtn.gold').first().click();
  for (let i = 0; i < 20; i++) { await p.waitForTimeout(150); s = await state(p); if (s.mode === 'hover') break; }
  ok(s.mode === 'hover' && s.at.join() === s.next.at.join(), '"Show me the way" sends him to the goal');
  await p.screenshot({ path: path.join(OUT, '8-show-way.png') });
  // the bubble is not on top of the hero
  const cov = await p.evaluate(() => { const b = document.querySelector('.cbubble').getBoundingClientRect(), cv = document.getElementById('ww-cv').getBoundingClientRect(), k = cv.width / 256, g = WW.game, sx = Math.floor(g.player.x / 16), sy = Math.floor(g.player.y / 11);
    const hx = cv.left + (g.player.x - sx * 16) * 16 * k, hy = cv.top + (g.player.y - sy * 11) * 16 * k; return !(b.right < hx || b.left > hx + 16 * k || b.bottom < hy || b.top > hy + 16 * k); });
  ok(!cov, 'his bubble does not cover the hero');
  ok(!errs.length, 'no errors' + (errs[0] ? ': ' + errs[0] : ''));
  // ---- the first tree: he hops over it ----
  const t = await p.evaluate(() => { const ep = WW.ep, g = WW.game, [W, H] = g.size; WW.chris.fly.mode = 'follow'; WW.chris.fly.seen = {};
    for (let y = 1; y < H - 1; y++) for (let x = 1; x < W - 1; x++) if ('TPa'.includes(ep.map[y][x]) && !(ep.keep || []).some(p => p[0] === x && p[1] === y) && WW.dbg.faceFrom(x, y)) return [x, y]; return null; });
  for (let i = 0; i < 12; i++) { await p.waitForTimeout(150); s = await state(p); if (s.mode !== 'follow') break; }
  ok(t && s.at && s.at.join() === t.join() && s.kind === 'green', `the first time the hero faces a tree he hops over it, green (${s.at} / ${t})`);
  await p.waitForTimeout(500); await p.screenshot({ path: path.join(OUT, '9-tree-green.png') });

  // ---- reduced motion: no flights, no orbit ----
  console.log('1.1 with reduced motion (WW.calm)');
  { const { p, errs } = await open(b, { width: 1366, height: 768 }, { calm: true });
    for (let k = 0; k < 8 && await p.evaluate(() => WW.chris.scene); k++) { await p.waitForTimeout(150); await p.locator('.cbubble').click().catch(() => {}); }
    await p.waitForFunction(() => !WW.paused);
    ok(await p.evaluate(() => WW.calm), 'reduced motion is on');
    const a = await state(p); await p.waitForTimeout(1500); const b2 = await state(p);
    ok(Math.abs(a.x - b2.x) < 0.01 && Math.abs(a.y - b2.y) < 0.01, 'he stays still beside the hero (no drifting)');
    await p.evaluate(() => { WW.chris.fly.idleMs = 1500; WW.chris.fly.lastProgress = performance.now(); WW.chris.fly.lastNudge = 0; });
    let m = null; for (let i = 0; i < 20; i++) { await p.waitForTimeout(200); m = await state(p); if (m.mark) break; }
    ok(m.mode === 'follow' && Math.abs(m.x - a.x) < 0.01, 'when he points, he does not fly');
    ok(!!m.mark && m.mark.kind === m.next.kind, 'a still lock-on shows the place instead, in the right color');
    await p.screenshot({ path: path.join(OUT, '10-calm.png') });
    ok(!errs.length, 'no errors' + (errs[0] ? ': ' + errs[0] : '')); }

  // ---- the Canvas frame and a phone ----
  for (const [name, vp, touch] of [['canvas', { width: 654, height: 820 }], ['phone', { width: 390, height: 844 }, true]]) {
    console.log('1.1 ' + name);
    const { p, errs } = await open(b, vp, { touch });
    for (let k = 0; k < 8 && await p.evaluate(() => WW.chris.scene); k++) { await p.waitForTimeout(200); await p.locator('.cbubble').click().catch(() => {}); }
    await p.waitForFunction(() => !WW.paused);
    await p.evaluate(() => { WW.chris.fly.idleMs = 1200; WW.chris.fly.lastProgress = performance.now(); WW.chris.fly.lastNudge = 0; });
    let s; for (let i = 0; i < 30; i++) { await p.waitForTimeout(200); s = await state(p); if (s.mode === 'hover') break; }
    ok(s.mode === 'hover', 'he flies to the goal');
    await p.screenshot({ path: path.join(OUT, `11-${name}.png`) });
    ok(!errs.length, 'no errors' + (errs[0] ? ': ' + errs[0] : ''));
  }
  await b.close();
  console.log(failed ? `\n${failed} check(s) failed` : '\nall Christopher checks pass');
  process.exit(failed ? 1 : 0);
})();
