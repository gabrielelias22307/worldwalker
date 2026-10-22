// node tests/fingers.js   real finger touches (touchStart/touchMove/touchEnd through the browser's input system, the way a
// phone sends them), not script clicks. Checks that pages scroll with a swipe and that every kind of thing a student taps
// works on a phone (390×844): the world map, an episode's start, the map, tools, people, answers, cards and bins, ⚙, bars.
const { chromium, devices } = require('playwright');
const path = require('path'), fs = require('fs');
const ROOT = path.join(__dirname, '..'), OUT = path.join(ROOT, 'shots', 'fingers'); fs.mkdirSync(OUT, { recursive: true });
let failed = 0;
const ok = (c, m) => { if (!c) { failed++; console.log('  ✗ ' + m); } else console.log('  ✓ ' + m); };

(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({ ...devices['iPhone 13'] });
  const p = await ctx.newPage(); const cdp = await ctx.newCDPSession(p);
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  const touch = (type, pts) => cdp.send('Input.dispatchTouchEvent', { type, touchPoints: pts });
  const tapAt = async (x, y) => { await touch('touchStart', [{ x, y }]); await p.waitForTimeout(70); await touch('touchEnd', []); await p.waitForTimeout(350); };
  const tap = async (sel, i = 0) => { const el = p.locator(sel).nth(i); await el.scrollIntoViewIfNeeded().catch(() => {}); const bb = await el.boundingBox(); if (!bb) throw new Error('nothing to tap: ' + sel); await tapAt(bb.x + bb.width / 2, bb.y + bb.height / 2); };
  const swipeUp = async (x, y, dist) => { await touch('touchStart', [{ x, y }]); for (let i = 1; i <= 10; i++) { await touch('touchMove', [{ x, y: y - dist * i / 10 }]); await p.waitForTimeout(16); } await touch('touchEnd', []); await p.waitForTimeout(500); };

  console.log('world map');
  await p.goto('file://' + path.join(ROOT, 'game', 'index.html')); await p.evaluate(() => localStorage.clear()); await p.reload(); await p.waitForTimeout(600);
  const y0 = await p.evaluate(() => document.scrollingElement.scrollTop);
  await swipeUp(195, 600, 400);
  const y1 = await p.evaluate(() => document.scrollingElement.scrollTop);
  ok(y1 > y0 + 100, `a swipe scrolls the world map (${y0} → ${y1})`);
  await p.screenshot({ path: path.join(OUT, '1-world-map-scrolled.png') });
  // tap episode 1.1 on the map
  const link = await p.evaluate(() => { const a = [...document.querySelectorAll('a[href]')].find(a => /ep-1-1\.html/.test(a.getAttribute('href'))); return !!a; });
  if (link) { await tap('a[href*="ep-1-1.html"]'); await p.waitForTimeout(800); ok(/ep-1-1\.html/.test(p.url()), 'tapping episode 1.1 on the world map opens it'); }
  else { ok(false, 'no link to episode 1.1 on the world map'); await p.goto('file://' + path.join(ROOT, 'game', 'ep-1-1.html')); }

  console.log('episode 1.1 with fingers');
  await p.waitForSelector('.startov');
  await tap('#si-name'); await p.keyboard.type('Dee');
  await tap('#ww-ov .pbtn.gold.big'); await p.waitForSelector('.introov');
  ok(true, 'tapped Play');
  await tap('#ww-ov .pbtn.gold.big'); await p.waitForTimeout(1200);
  ok(!(await p.evaluate(() => WW.paused)), 'tapped Start: on the map');
  // his welcome bubble: a tap moves it on
  if (await p.evaluate(() => WW.chris.scene)) { const before = await p.evaluate(() => document.querySelector('.cbubble .cb-say').innerText); await tap('.cbubble'); const after = await p.evaluate(() => (document.querySelector('.cbubble .cb-say') || {}).innerText || ''); ok(before !== after, 'tapping Christopher\'s bubble moves to his next line'); }
  await p.evaluate(() => WW.chris.skip());
  // tap the map two squares to the right: the hero walks there
  const pos = await p.evaluate(() => [WW.game.player.x, WW.game.player.y]);
  const cv = await p.locator('#ww-cv').boundingBox();
  // an open square two steps away (not a sign or a person)
  const [gx, gy] = await p.evaluate(([x, y]) => { const g = WW.game; for (const [dx, dy] of [[0, 2], [0, -2], [2, 0], [-2, 0], [2, 2], [-2, 2]]) { const a = x + dx, b = y + dy, mx = x + Math.sign(dx), my = y + Math.sign(dy); if (Math.floor(a / 16) === Math.floor(x / 16) && Math.floor(b / 11) === Math.floor(y / 11) && g.walkable(a, b) && !g.entAt(a, b) && g.walkable(mx, my) && !g.entAt(mx, my)) return [a, b]; } return [x, y + 1]; }, pos);
  const tx = gx % 16, ty = gy % 11;
  await tapAt(cv.x + (tx + 0.5) * cv.width / 16, cv.y + (ty + 0.5) * cv.height / 11); await p.waitForTimeout(900);
  const pos2 = await p.evaluate(() => [WW.game.player.x, WW.game.player.y]);
  ok(pos2[0] === gx && pos2[1] === gy, `tapping the map walks there (${pos} → ${pos2}, tapped ${gx},${gy})`);
  ok(!(await p.evaluate(() => WW.paused)), 'nothing opened on the way');
  // what is on top where we tap?
  console.log(await p.evaluate(() => ['.dpad [data-d=down]', '#ww-tools .tslot', '#ww-b-gear'].map(sel => { const e = document.querySelector(sel), r = e.getBoundingClientRect(), t = document.elementFromPoint(r.left + r.width / 2, r.top + r.height / 2); return sel + ' → ' + (t ? t.tagName + '#' + t.id + '.' + t.className : 'none') + ' ' + [r.left, r.top, r.width, r.height].map(Math.round); }).join('\n')));
  // the arrow pad
  const p3 = await p.evaluate(() => WW.game.player.y);
  await tap('.dpad [data-d=down]'); await p.waitForTimeout(250); await tap('.dpad [data-d=down]'); await p.waitForTimeout(400);
  ok(await p.evaluate(() => WW.game.player.y) !== p3 || await p.evaluate(() => WW.game.player.dir) === 'down', 'the arrow pad turns and walks');
  // a tool slot
  await tap('#ww-tools .tslot', 1); ok(await p.evaluate(() => WW.tools.selected()) === 'axe', 'tapping the axe slot picks the axe');
  await tap('#ww-tools .tslot', 0);
  // ⚙ menu
  await tap('#ww-b-gear'); ok(await p.evaluate(() => document.getElementById('ww-gearmenu').classList.contains('on')), 'tapping ⚙ opens the menu');
  const snd = await p.evaluate(() => WW.save.sound); await tap('#ww-b-snd'); ok(await p.evaluate(() => WW.save.sound) !== snd, 'tapping Sound in the menu turns it off/on');
  await tapAt(195, 760); ok(!(await p.evaluate(() => document.getElementById('ww-gearmenu').classList.contains('on'))), 'tapping elsewhere closes the menu');
  // talk to a person: stand next to them and tap them
  const n = await p.evaluate(() => { const e = WW.dbg.ents.find(e => e.kind === 'npc'); WW.dbg.faceFrom(e.x, e.y); return [e.x, e.y]; });
  await p.waitForTimeout(200);
  await tapAt(cv.x + (n[0] % 16 + 0.5) * cv.width / 16, cv.y + (n[1] % 11 + 0.5) * cv.height / 11); await p.waitForTimeout(500);
  ok(await p.locator('.talkov').count() > 0, 'tapping a person next to you starts the talk');
  for (let i = 0; i < 6 && await p.locator('.talkov .talk-body .pbtn.gold').count(); i++) await tap('.talkov .talk-body .pbtn.gold');
  ok(await p.locator('.talkov .choices button').count() >= 3, 'tapped Next through the lines to the question');
  await p.screenshot({ path: path.join(OUT, '2-question.png') });
  await tap('.talkov .choices button', 0);
  ok(await p.locator('.talkov .fb').count() > 0, 'tapping an answer picks it');
  await p.evaluate(() => WW.ui.top() && WW.ui.top().close());
  // the theme bars and the quest bar
  await tap('.meter', 0); ok(await p.evaluate(() => document.getElementById('ww-toast').innerText.length > 0), 'tapping a theme bar says its name');
  await tap('#ww-quest'); ok(await p.evaluate(() => document.getElementById('ww-qpop').classList.contains('on')), 'tapping the quest bar shows the goals');
  // a card challenge: tap a card, then a bin
  console.log('episode 2.2 cards');
  await p.goto('file://' + path.join(ROOT, 'game', 'ep-2-2.html')); await p.waitForSelector('.startov');
  await tap('#ww-ov .pbtn.gold.big'); await tap('#ww-ov .pbtn.gold.big'); await p.waitForTimeout(800); await p.evaluate(() => WW.chris.skip());
  await p.evaluate(() => { WW.dbg.ents.filter(e => e.kind === 'npc').forEach(e => WW.run.talked.add(e.ref.id)); WW.run.quest = 4; WW.dbg.bumpInto(...WW.ep.challenge.at); });
  await p.waitForTimeout(500);
  const cardsBtn = p.locator('#ww-ov .pbtn', { hasText: /cards instead|tarjetas|کارت/i });
  if (await cardsBtn.count()) await tap('#ww-ov .pbtn:has-text("cards instead")');
  await p.waitForTimeout(300);
  if (await p.locator('#ww-ov .pool .card').count()) {
    const left = await p.locator('#ww-ov .pool .card').count();
    await tap('#ww-ov .pool .card', 0); ok(await p.locator('#ww-ov .card.sel').count() === 1, 'tapping a card picks it up');
    await tap('#ww-ov .bin', 0); ok(await p.locator('#ww-ov .pool .card').count() === left - 1, 'tapping a bin drops the card in it');
    // a long panel scrolls with a swipe
    const ov = await p.evaluate(() => { const o = document.getElementById('ww-ov'); return [o.scrollTop, o.scrollHeight - o.clientHeight]; });
    if (ov[1] > 20) { await swipeUp(195, 600, 300); ok(await p.evaluate(() => document.getElementById('ww-ov').scrollTop) > ov[0], 'a swipe scrolls a long panel'); }
    await p.screenshot({ path: path.join(OUT, '3-cards.png') });
  } else ok(false, 'the card version of the stone did not open');
  ok(!errs.length, 'no page errors' + (errs[0] ? ': ' + errs[0] : ''));
  await b.close();
  console.log(failed ? `\n${failed} failed` : '\nall good');
  process.exit(failed ? 1 : 0);
})();
