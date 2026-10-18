// node tests/teacher.js   opens the teacher console, checks every episode's page, and the preview jumps (stone, boss, finish) in 3 episodes
const { chromium } = require('playwright');
const path = require('path'), fs = require('fs');
const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'shots', 'teacher'); fs.mkdirSync(OUT, { recursive: true });
const url = f => 'file://' + path.join(ROOT, 'game', f);
const ids = fs.readdirSync(path.join(ROOT, 'game', 'episodes')).filter(f => /^ep-\d-\d\.js$/.test(f)).sort().map(f => f.slice(3, 6).replace('-', '.'));

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 900 } });
  const errs = [];
  page.on('pageerror', e => errs.push('pageerror: ' + e.message));
  page.on('console', m => { if (m.type() === 'error' && !/fonts\.g|ERR_|Failed to load resource/.test(m.text())) errs.push('console: ' + m.text()); });
  let failed = 0;
  const ok = (cond, what) => { console.log((cond ? '✓ ' : '✗ ') + what); if (!cond) failed++; };

  await page.goto(url('teacher.html'));
  await page.evaluate(() => localStorage.clear());
  await page.goto(url('teacher.html'));
  ok(await page.isVisible('#tcode'), 'console is locked without the teacher code');
  await page.fill('#tcode', 'nope'); await page.click('#tgo');
  ok(await page.isVisible('#tcode'), 'wrong code is refused');
  await page.fill('#tcode', 'atlas'); await page.click('#tgo');
  await page.waitForSelector('#main h1');
  await page.screenshot({ path: path.join(OUT, 'console.png'), fullPage: true });
  for (const id of ids) {
    await page.click(`[data-ep="${id}"]`);
    await page.waitForFunction(id => document.querySelector('#main .kicker') && document.querySelector('#main .kicker').textContent.includes(id), id);
    const r = await page.evaluate(() => ({ people: document.querySelectorAll('.person .num:not([style])').length, keys: document.querySelectorAll('#main ul.ans li.ok').length, bossq: document.querySelectorAll('section.part .bossq').length, map: document.getElementById('map').width }));
    ok(r.people >= 3 && r.keys >= r.people + 8 && r.map > 0, `${id}: ${r.people} people, ${r.keys} marked answers, map drawn`);
  }
  await page.click('[data-l="fa"]');
  ok(await page.evaluate(() => document.documentElement.dir === 'rtl'), 'Dari switches the console to right-to-left');
  await page.click('[data-l="en"]');

  for (const id of ['1.1', '5.1', '8.3']) {
    const f = 'ep-' + id.replace('.', '-') + '.html';
    for (const [where, sel] of [['stone', '#ww-ov'], ['boss', '.bossov'], ['finish', '.finov']]) {
      await page.goto(url(f) + '?teacher=' + where);
      const seen = await page.waitForSelector(sel, { timeout: 4000 }).then(() => true, () => false);
      const notStart = !(await page.$('.startov'));
      ok(seen && notStart, `${id} ?teacher=${where} opens straight at that part`);
      if (where === 'stone') ok(!/Pip/.test(await page.textContent('#ww-ov')), `${id} stone is not blocked by "talk first"`);
      await page.screenshot({ path: path.join(OUT, `${id}-${where}.png`) });
    }
  }
  ok(await page.evaluate(() => !JSON.parse(localStorage.getItem('worldwalker.save.v1')).episodes['8.3']), 'preview finish did not save the episode');
  // a student (no teacher code) gets the normal start screen even with ?teacher=
  await page.evaluate(() => localStorage.clear());
  await page.goto(url('ep-2-1.html') + '?teacher=finish');
  ok(await page.waitForSelector('.startov', { timeout: 4000 }).then(() => true, () => false), 'without the teacher code ?teacher= is ignored');

  ok(!errs.length, 'no page errors' + (errs.length ? ': ' + errs.join(' | ') : ''));
  await browser.close();
  console.log(failed ? `${failed} failed` : 'all good');
  process.exitCode = failed ? 1 : 0;
})();
