// node tests/playtest-start.js [1.1 ...] [--idle]   (PLAYTEST-3) the first minutes of every episode, the way Jay, Fatima,
// Diego and Ms. K's class meet it. Uses the one-file Canvas builds. For each episode and screen it records the screens
// before the first step on the map, the words on each, how many things look clickable, tiny text and small tap targets,
// what a returning student sees, and (with --idle, 1.1 + a sample) whether anything happens after 5, 15 and 20 seconds
// of doing nothing. Screenshots go to shots/playtest/, numbers to shots/playtest/start.json.
const { chromium } = require('playwright');
const path = require('path'), fs = require('fs');
const ROOT = path.join(__dirname, '..'), OUT = path.join(ROOT, 'shots', 'playtest'); fs.mkdirSync(OUT, { recursive: true });
const all = fs.readdirSync(path.join(ROOT, 'game', 'episodes')).filter(f => /^ep-\d-\d\.js$/.test(f)).sort().map(f => f.slice(3, 6).replace('-', '.'));
const args = process.argv.slice(2), IDLE = args.includes('--idle');
const ids = args.filter(a => !a.startsWith('-')).length ? args.filter(a => !a.startsWith('-')) : all;
const WHO = [
  { who: 'jay', w: 1366, h: 768, lang: 'en' },
  { who: 'fatima', w: 1366, h: 768, lang: 'fa' },
  { who: 'diego', w: 390, h: 844, touch: true, lang: 'en' },
  { who: 'diego-side', w: 844, h: 390, touch: true, lang: 'en' },
  { who: 'canvas', w: 654, h: 820, lang: 'en' },
];
// human time: a fast skipper spends ~1.5 s per button and ~10 s typing name, class code and secret number;
// a careful English learner reads ~80 words a minute
const SKIP_S = 1.5, TYPE_S = 10, WPM = 80;

const look = () => {
  const vis = e => { if (!e || !e.checkVisibility({ opacityProperty: true, visibilityProperty: true })) return false; const s = getComputedStyle(e); if (s.display === 'none' || s.visibility === 'hidden' || +s.opacity === 0) return false; const r = e.getBoundingClientRect(); return r.width > 2 && r.height > 2 && r.bottom > 0 && r.right > 0 && r.top < innerHeight && r.left < innerWidth; };
  const count = t => (t || '').split(/\s+/).filter(w => /[\p{L}\p{N}]/u.test(w)).length;
  const ov = document.querySelector('#ww-ov:not(.hidden)'), bub = document.querySelector('.cbubble');
  const box = ov && vis(ov) ? ov : null;
  const clickable = [...document.querySelectorAll('button, input, a, select, [role=button]')].filter(vis);
  const panel = box ? clickable.filter(e => box.contains(e)) : [];
  // text smaller than 12 px (hard to read on a Chromebook) and tap targets smaller than 40 px (on a phone)
  const tiny = new Set(); document.querySelectorAll('#ww-root *, .cbubble *, #ww-ov *').forEach(e => { if (!vis(e) || ![...e.childNodes].some(n => n.nodeType === 3 && n.textContent.trim())) return; const fs = parseFloat(getComputedStyle(e).fontSize); if (fs < 12) tiny.add(`${e.tagName.toLowerCase()}.${(e.className || '').toString().split(' ')[0]} ${fs}px "${e.textContent.trim().slice(0, 24)}"`); });
  const small = clickable.filter(e => { const r = e.getBoundingClientRect(); return r.width < 40 || r.height < 40; }).map(e => `${(e.textContent || e.title || e.id || e.tagName).trim().slice(0, 14)} ${Math.round(e.getBoundingClientRect().width)}×${Math.round(e.getBoundingClientRect().height)}`);
  const scrolls = box ? (() => { const b = box.querySelector('.ov-box') || box; return b.scrollHeight > b.clientHeight + 4 ? b.scrollHeight - b.clientHeight : 0; })() : 0;
  return {
    panel: box ? (box.className.match(/\b(\w+ov)\b/) || [, 'panel'])[1] : null,
    words: box ? count(box.innerText) : 0, bubble: bub && vis(bub) ? bub.innerText.replace(/\s+/g, ' ').trim() : '', bubbleWords: bub && vis(bub) ? count(bub.querySelector('.cb-say') ? bub.querySelector('.cb-say').innerText : bub.innerText) : 0,
    clickable: clickable.length, panelClickable: panel.length, tiny: [...tiny].slice(0, 12), tinyN: tiny.size, small: small.slice(0, 12), smallN: small.length, hiddenBelow: scrolls,
    paused: !!WW.paused, quest: (document.getElementById('ww-quest') || {}).innerText || '',
  };
};

(async () => {
  const browser = await chromium.launch();
  const res = {};
  const one = async (id, s) => {
    const ctx = await browser.newContext({ viewport: { width: s.w, height: s.h }, hasTouch: !!s.touch, isMobile: !!s.touch });
    const p = await ctx.newPage(); const errs = [];
    p.on('pageerror', e => errs.push(e.message));
    const file = 'file://' + path.join(ROOT, 'dist', 'canvas', `Worldwalker ${id}.html`);
    const tag = `${id}-${s.who}`, screens = [], shot = n => p.screenshot({ path: path.join(OUT, `${tag}-${n}.png`) });
    await p.goto(file); await p.evaluate(() => localStorage.clear()); await p.goto(file);
    await p.waitForSelector('.startov'); await p.waitForTimeout(300);
    if (s.lang !== 'en') { await p.locator(`[data-l="${s.lang}"]`).first().click(); await p.waitForTimeout(200); }
    let r = await p.evaluate(look); screens.push({ name: 'sign-in', ...r, typing: true }); await shot('1-signin');
    await p.fill('#si-name', 'Jay'); await p.fill('#si-cls', 'GEO-1'); await p.fill('#si-pin', '1234');
    await p.locator('#ww-ov .pbtn.gold.big').click();
    await p.waitForSelector('.introov'); await p.waitForTimeout(250);
    r = await p.evaluate(look); screens.push({ name: 'intro', ...r }); await shot('2-intro');
    await p.locator('#ww-ov .pbtn.gold.big').click();
    if (await p.evaluate(() => !!(WW.ep.christopher && WW.ep.christopher.meet))) {
      await p.waitForSelector('.cbubble.meet', { state: 'visible' }); await p.waitForTimeout(1200);
      for (let k = 0; k < 4 && await p.evaluate(() => WW.chris.scene); k++) {
        r = await p.evaluate(look); screens.push({ name: 'meet ' + (k + 1), ...r }); if (!k) await shot('3-meet');
        await p.locator('.cbubble .pbtn').first().click().catch(() => p.keyboard.press('c')); await p.waitForTimeout(250);
      }
    }
    await p.waitForFunction(() => !WW.paused); await p.waitForTimeout(400);
    r = await p.evaluate(look); screens.push({ name: 'map', ...r }); await shot('4-map');
    const out = { screens, errs };
    // idle: what happens if the student does nothing?
    if (IDLE) {
      out.idle = [];
      const t0 = Date.now();
      for (const at of [5, 15, 20]) {
        await p.waitForTimeout(at * 1000 - (Date.now() - t0));
        const st = await p.evaluate(() => ({ bubble: !!(document.querySelector('.cbubble') && document.querySelector('.cbubble').style.display === 'block'), say: (document.querySelector('.cbubble .cb-say') || {}).innerText || '', way: !!(WW.game.wayUntil && performance.now() < WW.game.wayUntil) }));
        out.idle.push({ at, ...st }); await shot(`5-idle-${at}s`);
      }
    }
    // a returning student: reload with the save kept
    await p.goto(file); await p.waitForTimeout(400);
    let back = 0; const backWords = [];
    for (let k = 0; k < 5; k++) {
      if (!(await p.evaluate(() => !!document.querySelector('#ww-ov:not(.hidden)') || (WW.chris && WW.chris.scene)))) break;
      const lk = await p.evaluate(look); backWords.push(lk.words + lk.bubbleWords);
      if (!k) await shot('6-back');
      let b = p.locator('#ww-ov:not(.hidden) .pbtn.gold.big').first();
      if (!(await b.count())) b = p.locator('.cbubble .pbtn').first();
      if (!(await b.count())) break; await b.click(); back++; await p.waitForTimeout(400);
    }
    out.back = { clicks: back, words: backWords };
    // time to the first step: skipper vs careful reader
    const clicks = screens.filter(x => x.name !== 'map').length;
    const words = screens.filter(x => x.name !== 'map').reduce((a, x) => a + x.words + (x.name.startsWith('meet') ? x.bubbleWords : 0), 0);
    out.toMove = { clicks, words, skipS: Math.round(TYPE_S + clicks * SKIP_S), readS: Math.round(TYPE_S + clicks * SKIP_S + words / WPM * 60) };
    await ctx.close();
    return out;
  };
  const jobs = [];
  for (const id of ids) for (const s of WHO) jobs.push([id, s]);
  let next = 0;
  await Promise.all([0, 1, 2, 3, 4, 5].map(async () => {
    while (next < jobs.length) {
      const [id, s] = jobs[next++];
      try { (res[id] = res[id] || {})[s.who] = await one(id, s); }
      catch (e) { (res[id] = res[id] || {})[s.who] = { fail: e.message.split('\n')[0] }; }
      const o = res[id][s.who];
      console.log(`${id} ${s.who.padEnd(10)} ${o.fail ? 'FAILED ' + o.fail : `to move: ${o.toMove.clicks} screens, ${o.toMove.words} words, ~${o.toMove.skipS}s skipping / ~${o.toMove.readS}s reading · back again: ${o.back.clicks} clicks${o.idle ? ' · idle: ' + o.idle.map(i => i.at + 's ' + (i.bubble ? 'bubble' : '—')).join(', ') : ''}${o.errs.length ? ' · ERR ' + o.errs[0] : ''}`}`);
    }
  }));
  fs.writeFileSync(path.join(OUT, 'start' + (ids.length === 1 ? '-' + ids[0] : '') + '.json'), JSON.stringify(res, null, 1));
  await browser.close();
})();
