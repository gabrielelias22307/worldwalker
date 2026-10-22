// node tests/sheet.js   runs apps-script/Code.gs against a pretend Google Sheet, and plays two "computers" against it:
// stats saved after each goal, read back at the next episode, spent coins never come back, old saves never win
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path'), vm = require('vm'), crypto = require('crypto');
const ROOT = path.join(__dirname, '..');

/* ---- a pretend spreadsheet, just enough of Google's API for Code.gs ---- */
function fakeSheet() {
  const rows = [];
  return {
    rows,
    getLastRow: () => rows.length,
    getLastColumn: () => Math.max(0, ...rows.map(r => r.length)),
    appendRow: r => rows.push(r.slice()),
    getRange(r, c, nr = 1, nc = 1) {
      if (typeof r === 'string') return { getValue: () => 'test salt words' };
      return {
        getValues: () => Array.from({ length: nr }, (_, i) => Array.from({ length: nc }, (_, j) => ((rows[r - 1 + i] || [])[c - 1 + j] ?? ''))),
        setValues: v => v.forEach((row, i) => { rows[r - 1 + i] = rows[r - 1 + i] || []; row.forEach((x, j) => (rows[r - 1 + i][c - 1 + j] = x)); })
      };
    }
  };
}
const tabs = { Settings: fakeSheet() };
const box = {
  SpreadsheetApp: { getActiveSpreadsheet: () => ({ getSheetByName: n => tabs[n], insertSheet: n => (tabs[n] = fakeSheet()) }) },
  LockService: { getScriptLock: () => ({ waitLock() {}, releaseLock() {} }) },
  Utilities: { DigestAlgorithm: { SHA_256: 1 }, computeDigest: (a, s) => [...crypto.createHash('sha256').update(s).digest()].map(b => (b > 127 ? b - 256 : b)) },
  ContentService: { MimeType: { JSON: 'j', JAVASCRIPT: 'js' }, createTextOutput: t => ({ text: t, setMimeType() { return this; } }) },
  Date, JSON, Math, Object, String, Number
};
vm.createContext(box); vm.runInContext(fs.readFileSync(path.join(ROOT, 'apps-script/Code.gs'), 'utf8'), box);

(async () => {
  let failed = 0; const ok = (c, w) => { console.log((c ? '✓ ' : '✗ ') + w); if (!c) failed++; };
  const b = await chromium.launch();
  const ctxA = await b.newContext(), ctxB = await b.newContext(); // two computers: separate browser storage
  const SHEET = 'https://sheet.test/exec';
  let posts = 0;
  for (const ctx of [ctxA, ctxB]) await ctx.route(SHEET + '**', async route => {
    const req = route.request(), u = new URL(req.url());
    const out = req.method() === 'POST' ? (posts++, box.doPost({ postData: { contents: req.postData() } })) : box.doGet({ parameter: Object.fromEntries(u.searchParams) });
    await route.fulfill({ status: 200, contentType: 'application/json', headers: { 'access-control-allow-origin': '*' }, body: out.text });
  });
  const open = async (ctx, ep) => {
    const p = await ctx.newPage(); const f = 'file://' + path.join(ROOT, 'game', ep);
    await p.goto(f); await p.waitForSelector('.startov');
    await p.evaluate(u => { WW.CONFIG.SHEET_URL = u; }, SHEET);
    return p;
  };
  const signIn = async p => {
    if (await p.locator('#si-name').count()) { await p.fill('#si-name', 'Ana'); await p.fill('#si-cls', 'GEO-1'); await p.fill('#si-pin', '1234'); }
    await p.locator('#ww-ov .pbtn.gold.big').click(); await p.waitForSelector('.introov');
    await p.locator('#ww-ov .pbtn.gold.big').click(); await p.evaluate(() => WW.chris.skip()); await p.waitForFunction(() => !WW.paused);
  };
  const student = () => { const sh = tabs.Students; const head = sh.rows[0]; const r = sh.rows.find(x => x[0] === 'GEO-1|ana'); return r && Object.fromEntries(head.map((h, i) => [h, r[i]])); };

  // computer A: episode 1.1 — earn, spend a hint's worth of coins, finish a goal (saves mid-episode)
  const a = await open(ctxA, 'ep-1-1.html'); await signIn(a);
  await a.evaluate(() => { WW.gain('loc', 5, 30, 'test'); WW.spend(10); WW.ep.npcs.forEach(n => WW.run.talked.add(n.id)); WW.run.quest = 4; });
  await a.evaluate(() => { WW.dbg.bumpInto(WW.ep.challenge.at[0], WW.ep.challenge.at[1]); });
  await a.evaluate(() => { WW.run.challengeDone = true; WW.gain('hei', 2, 5, 'stone'); WW.sheetSync(); });
  await a.waitForTimeout(500);
  let s = student();
  ok(s && +s.loc === 5 && +s.hei === 2, 'a goal mid-episode saves the stats to the Sheet (loc ' + (s && s.loc) + ', hei ' + (s && s.hei) + ')');
  ok(s && +s.coins === 25 && +s.spent === 10, `the Sheet keeps coins and coins spent (${s && s.coins} left, ${s && s.spent} spent)`);
  ok(!tabs.Log || tabs.Log.rows.length <= 1, 'a mid-episode save adds no Log line');

  // computer B (fresh browser): episode 1.2 reads the hero back from the Sheet
  const bp = await open(ctxB, 'ep-1-2.html'); await signIn(bp);
  const got = await bp.evaluate(() => ({ loc: WW.save.stats.loc, hei: WW.save.stats.hei, coins: WW.save.coins, spent: WW.save.spent }));
  ok(got.loc === 5 && got.hei === 2, `the next episode on another computer loads the stats (loc ${got.loc}, hei ${got.hei})`);
  ok(got.coins === 25, `spent coins do not come back (${got.coins} coins)`);
  // B spends more, A (old, stale) saves again: the Sheet must not go backwards
  await bp.evaluate(() => { WW.spend(10); WW.gain('mov', 3, 0, 'test'); WW.sheetSync(); }); await bp.waitForTimeout(400);
  await a.evaluate(() => WW.sheetSync()); await a.waitForTimeout(400);
  s = student();
  ok(+s.mov === 3 && +s.loc === 5, 'an older computer saving later does not erase newer stats');
  ok(+s.coins === 15 && +s.spent === 20, `coins stay right after both computers save (${s.coins} left, ${s.spent} spent)`);
  // a wrong secret number cannot read or overwrite the hero
  const bad = JSON.parse(box.doGet({ parameter: { action: 'load', cls: 'GEO-1', name: 'Ana', pin: '9999' } }).text);
  ok(bad.ok === false, 'a wrong secret number cannot load the hero');
  // finishing an episode writes one Log line
  await bp.evaluate(() => WW.sheetSave({ episode: '1.2', stars: 3, heartsLost: 0, minutes: 12, missed: [], reflection: 'test' })); await bp.waitForTimeout(400);
  ok(tabs.Log && tabs.Log.rows.length === 2, 'finishing an episode adds one Log line');
  // the class atlas: totals for the class; names only in the top 5 (first names, ranked by pages finished)
  await bp.evaluate(() => { WW.save.episodes['1.2'] = { done: true, stars: 3 }; WW.store(); WW.sheetSync(); }); await bp.waitForTimeout(400);
  const cl = JSON.parse(box.doGet({ parameter: { action: 'class', cls: 'GEO-1' } }).text);
  ok(cl.ok && cl.students === 1 && cl.total >= 1 && cl.pages['1.2'] === 1, `the class atlas counts restored pages (${JSON.stringify(cl.pages)}, ${cl.students} student)`);
  ok(!JSON.stringify(Object.assign({}, cl, { top: 0 })).includes('Ana'), 'the class atlas shows no names outside the top 5');
  ok(cl.top.length === 1 && /^Ana$/.test(cl.top[0].name) && cl.top[0].pages === cl.total, `the top 5 shows first names and pages finished (${JSON.stringify(cl.top)})`);
  // six more students: the board keeps the 5 with the most pages, first word of the name only
  [['luis perez', 4], ['Mina', 2], ['zahra', 6], ['Omar', 1], ['Bea', 2], ['Kai', 0]].forEach(([name, n]) => {
    const episodes = {}; for (let i = 1; i <= n; i++) episodes['1.' + i] = { done: true, stars: 1 };
    box.save_({ cls: 'GEO-1', name, pin: '1234', state: { episodes } });
  });
  const top = JSON.parse(box.doGet({ parameter: { action: 'class', cls: 'GEO-1' } }).text).top;
  ok(top.map(t => t.name + t.pages).join(' ') === 'Zahra6 Luis4 Bea2 Mina2 Ana1', `the top 5 ranks by pages finished (${top.map(t => t.name + ' ' + t.pages).join(', ')})`);
  const other = JSON.parse(box.doGet({ parameter: { action: 'class', cls: 'GEO-9' } }).text);
  ok(other.ok && other.total === 0 && other.top.length === 0, 'another class sees only its own atlas and top 5');
  // the camp is saved too: what you bought stays yours on another computer
  await bp.evaluate(() => { WW.camp.give('globe'); WW.save.camp.slots[0] = 'globe'; WW.store(); WW.sheetSync(); }); await bp.waitForTimeout(400);
  ok(/globe/.test(student().camp || ''), 'the camp is saved in the Sheet');
  // the top 5 on the finish screen (after the page is saved) and on the world map
  await bp.evaluate(() => WW.ui.finish());
  await bp.waitForSelector('.finov .top5', { timeout: 5000 }).catch(() => { });
  const fin = await bp.evaluate(() => { const t = document.querySelector('.finov .top5'); return t ? { text: t.innerText, me: (t.querySelector('li.me') || {}).innerText || '' } : null; });
  ok(fin && /Zahra/.test(fin.text) && /Ana/.test(fin.me), `the finish screen shows the class top 5 with you marked (${fin && fin.me.replace(/\s+/g, ' ')})`);
  fs.mkdirSync(path.join(ROOT, 'shots'), { recursive: true });
  if (fin) await bp.locator('.finov .top5').screenshot({ path: path.join(ROOT, 'shots', 'board-finish.png') });
  const hub = await ctxB.newPage({ viewport: { width: 1366, height: 768 } });
  await hub.addInitScript(u => { let c; Object.defineProperty(window, 'WW_CONFIG', { get: () => c, set: v => { c = Object.assign(v, { SHEET_URL: u }); }, configurable: true }); }, SHEET);
  await hub.goto('file://' + path.join(ROOT, 'game', 'index.html'));
  await hub.waitForSelector('#classAtlas .top5', { timeout: 5000 }).catch(() => { });
  const hb = await hub.evaluate(() => { const t = document.querySelector('#classAtlas .top5'); return t ? t.querySelectorAll('li').length : 0; });
  ok(hb === 5, `the world map shows the class top 5 (${hb} names)`);
  if (hb) await hub.screenshot({ path: path.join(ROOT, 'shots', 'board-map.png') });
  console.log(`  (${posts} saves sent)`);
  await b.close(); console.log(failed ? failed + ' failed' : 'all good'); process.exitCode = failed ? 1 : 0;
})();
