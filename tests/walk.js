// node tests/walk.js   real keyboard walking in Episode 1.1: screen change, bumping into a person, a Smudge hit, phone layout
const { chromium } = require('playwright'); const path = require('path');
const ROOT = path.join(__dirname, '..');
(async () => {
  const b = await chromium.launch(); const errs = []; const out = [];
  const p = await b.newPage({ viewport: { width: 1100, height: 900 } });
  p.on('pageerror', e => errs.push(e.message));
  const url = 'file://' + path.join(ROOT, 'game', 'ep-1-1.html');
  await p.goto(url); await p.evaluate(() => localStorage.clear()); await p.goto(url);
  await p.fill('#si-name', 'Walker'); await p.locator('#ww-ov .pbtn.gold.big').click(); await p.locator('#ww-ov .pbtn.gold.big').click();
  await p.waitForFunction(() => !WW.paused);
  const pos = () => p.evaluate(() => [WW.dbg.player.x, WW.dbg.player.y]);
  // walk down to the path row then right across the screen edge (x 15 -> 16)
  await p.keyboard.down('ArrowDown'); await p.waitForTimeout(120); await p.keyboard.up('ArrowDown'); await p.waitForTimeout(250);
  out.push('after down ' + await pos());
  await p.keyboard.down('ArrowUp'); await p.waitForTimeout(100); await p.keyboard.up('ArrowUp'); await p.waitForTimeout(250);
  await p.evaluate(() => WW.dbg.teleport(13, 5));
  await p.keyboard.down('ArrowRight'); await p.waitForTimeout(700);
  await p.screenshot({ path: path.join(ROOT, 'shots', 'walk-transition.png') });
  await p.keyboard.up('ArrowRight'); await p.waitForTimeout(500);
  const [x] = await pos(); out.push('walked right to x=' + x + (x >= 16 ? ' (new screen ✓)' : ' ✗ did not cross'));
  // walk into Captain Ama (25,8) from the left: stand at (24,8)? dock tile; approach from (25,7) going down
  await p.evaluate(() => WW.dbg.teleport(25, 6));
  await p.keyboard.down('ArrowDown'); await p.waitForTimeout(400); await p.keyboard.up('ArrowDown'); await p.waitForTimeout(200);
  out.push('walk into person opens talk: ' + (await p.locator('.talkov').count() ? '✓' : '✗'));
  await p.screenshot({ path: path.join(ROOT, 'shots', 'walk-talk.png') });
  await p.keyboard.press('Escape');
  // close talk with its button if still open
  await p.evaluate(() => { while (WW.ui.top()) WW.ui.top().close(); });
  // smudge hit
  const h0 = await p.evaluate(() => WW.run.hearts);
  await p.evaluate(() => { WW.dbg.noSmudges(); const s = WW.dbg.ents.find(e => e.kind === 'smudge' && e.x >= 16); s.x = 27; s.y = 9; WW.dbg.teleport(26, 9); WW.dbg.face('right'); });
  await p.keyboard.down('ArrowRight'); await p.waitForTimeout(260); await p.keyboard.up('ArrowRight'); await p.waitForTimeout(300);
  const h1 = await p.evaluate(() => WW.run.hearts);
  out.push(`hearts before/after stepping on a Smudge spot: ${h0}/${h1}`);
  // phone layout
  const ph = await b.newPage({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });
  ph.on('pageerror', e => errs.push('phone: ' + e.message));
  await ph.goto(url); await ph.waitForTimeout(500); await ph.fill('#si-name', 'Phone');
  await ph.screenshot({ path: path.join(ROOT, 'shots', 'phone-start.png'), fullPage: true });
  await ph.locator('#ww-ov .pbtn.gold.big').click(); await ph.locator('#ww-ov .pbtn.gold.big').click(); await ph.waitForTimeout(300);
  await ph.screenshot({ path: path.join(ROOT, 'shots', 'phone-map.png'), fullPage: true });
  const dp = await ph.evaluate(() => getComputedStyle(document.getElementById('ww-dpad')).display);
  out.push('phone: arrows shown = ' + (dp !== 'none' ? '✓' : '✗') + ', page width ' + await ph.evaluate(() => document.documentElement.scrollWidth));
  const before = await ph.evaluate(() => [WW.dbg.player.x, WW.dbg.player.y]);
  await ph.locator('#ww-dpad [data-d=down]').dispatchEvent('pointerdown'); await ph.waitForTimeout(200); await ph.locator('#ww-dpad [data-d=down]').dispatchEvent('pointerup');
  await ph.waitForTimeout(200);
  out.push('phone: tap arrow moves hero ' + before + ' -> ' + await ph.evaluate(() => [WW.dbg.player.x, WW.dbg.player.y]));
  console.log(out.join('\n')); console.log('errors:', errs.join(' | ') || 'none');
  await b.close();
})();
