// node tests/play.js [1.1 2.2 ...]   plays each episode start to finish in a real browser and saves screenshots to shots/play/
// Uses the built GitHub Pages files (run tools/build.js first). --canvas plays the one-file Canvas builds in dist/canvas instead.
const { chromium } = require('playwright');
const path = require('path'), fs = require('fs');
const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'shots', 'play'); fs.mkdirSync(OUT, { recursive: true });
const all = fs.readdirSync(path.join(ROOT, 'game', 'episodes')).filter(f => /^ep-\d-\d\.js$/.test(f)).sort().map(f => f.slice(3, 6).replace('-', '.'));
const ids = process.argv.slice(2).filter(a => !a.startsWith('-')).length ? process.argv.slice(2).filter(a => !a.startsWith('-')) : all;
const SHOTS = !process.argv.includes('--no-shots');
const CANVAS = process.argv.includes('--canvas');

(async () => {
  const browser = await chromium.launch();
  let failed = 0;
  for (const id of ids) {
    const page = await browser.newPage({ viewport: { width: 1100, height: 900 } });
    const errs = [];
    page.on('pageerror', e => errs.push('pageerror: ' + e.message));
    page.on('console', m => { if (m.type() === 'error' && !/fonts\.g|ERR_|Failed to load resource/.test(m.text())) errs.push('console: ' + m.text()); });
    const file = 'file://' + (CANVAS ? path.join(ROOT, 'dist', 'canvas', `Worldwalker ${id}.html`) : path.join(ROOT, 'game', 'ep-' + id.replace('.', '-') + '.html'));
    const steps = [];
    const step = async (name, fn) => { try { await fn(); steps.push('✓ ' + name); } catch (e) { steps.push('✗ ' + name + ': ' + e.message.split('\n')[0]); throw e; } };
    const shot = async name => { if (SHOTS) await page.screenshot({ path: path.join(OUT, `${id}-${name}.png`) }); };
    const clickGold = async (text) => { // the main gold button in the open overlay
      const b = page.locator('#ww-ov .pbtn.gold').last(); await b.click();
    };
    try {
      await page.goto(file);
      await page.evaluate(() => localStorage.clear());
      await page.goto(file);
      await page.waitForSelector('#ww-ov.startov, #ww-ov .startov, .startov', { timeout: 5000 }).catch(() => { });
      await step('start screen', async () => {
        await page.fill('#si-name', 'Tester'); await page.fill('#si-cls', 'GEO-1'); await page.fill('#si-pin', '1234');
        await shot('0-start');
        await page.locator('#ww-ov .pbtn.gold.big').click();
        await page.waitForSelector('.introov');
        await shot('1-intro');
        // count the question panels this episode opens (FUN-PASS-2: this number should go down)
        await page.evaluate(() => {
          window.__qpanels = 0;
          new MutationObserver(() => {
            const t = WW.ui.top(); const ov = document.getElementById('ww-ov');
            if (t && !t.__q && ov.querySelector('.choices button, .pool .card, .opts .opt, .switches .reason')) { t.__q = true; window.__qpanels++; }
          }).observe(document.getElementById('ww-ov'), { childList: true, subtree: true });
        });
        // reward pop-ups: count how many show at once, and whether one ever shows over an open panel
        await page.evaluate(() => {
          window.__toast = { most: 0, overPanel: 0 };
          new MutationObserver(() => {
            const n = document.querySelectorAll('#ww-toast .tst').length;
            window.__toast.most = Math.max(window.__toast.most, n);
            if (n && WW.ui.stack.length) window.__toast.overPanel++;
          }).observe(document.getElementById('ww-toast'), { childList: true });
        });
        await page.locator('#ww-ov .pbtn.gold.big').click();
        const meet = await page.evaluate(() => !!(WW.ep.christopher && WW.ep.christopher.meet));
        if (meet) { // meeting Christopher: he flies in and talks in a bubble over his head
          await page.waitForSelector('.cbubble.meet', { state: 'visible' });
          await page.waitForTimeout(500);
          const say = await page.textContent('.cbubble');
          if (!/living compass/.test(say)) throw new Error('Christopher did not say who he is: ' + say);
          await shot('2a-meet-christopher');
          for (let k = 0; k < 3; k++) { await page.keyboard.press('c'); await page.waitForTimeout(120); }
          if (await page.evaluate(() => WW.chris.scene)) throw new Error('the meeting did not end after his lines');
          if (!(await page.evaluate(() => WW.save.metChris))) throw new Error('meeting Christopher was not saved');
        }
        await page.waitForFunction(() => !WW.paused);
        await page.evaluate(() => WW.dbg.noSmudges());
        await page.waitForTimeout(300);
        await shot('2-map');
      });
      const ep = await page.evaluate(() => JSON.parse(JSON.stringify(WW.ep)));
      // stone first, before talking: must refuse
      await step('stone waits for talks', async () => {
        await page.evaluate(([x, y]) => WW.dbg.bumpInto(x, y), ep.challenge.at);
        const t = await page.textContent('#ww-ov');
        if (!/Christopher/.test(t)) throw new Error('stone opened before talking');
        await clickGold();
      });
      if (ep.tools) await step('tool bar: axe, sickle, seeds', async () => {
        const [W, H] = [ep.map[0].length, ep.map.length];
        const find = (chs, inner) => { const out = []; ep.map.forEach((r, y) => [...r].forEach((ch, x) => { if (chs.includes(ch) && (!inner || (x > 0 && y > 0 && x < W - 1 && y < H - 1))) out.push([x, y]); })); return out; };
        // C: Christopher says what to do next
        await page.keyboard.press('c');
        await page.waitForSelector('.cbubble', { state: 'visible' });
        if (!/Talk to|Go /.test(await page.textContent('.cbubble'))) throw new Error('C did not say what to do next');
        await page.keyboard.press('Escape');
        // the axe on a border tree: it stays, and Christopher says why
        await page.keyboard.press('2');
        const wood0 = await page.evaluate(() => WW.tools.have('wood'));
        const edge = find('TPa').filter(([x, y]) => x === 0 || y === 0 || x === W - 1 || y === H - 1);
        let edgeTried = false;
        for (const [x, y] of edge) if (await page.evaluate(([x, y]) => WW.dbg.faceFrom(x, y), [x, y])) { await page.evaluate(() => WW.dbg.act()); edgeTried = true; break; }
        if (edgeTried) {
          if (await page.evaluate(() => WW.tools.have('wood')) !== wood0) throw new Error('a border tree was chopped');
          if (!/edge of the map/.test(await page.textContent('.cbubble'))) throw new Error('no reason given for the border tree');
        }
        // chop 5 trees and bushes for 8+ wood
        const trees = find('TY', true).filter(([x, y]) => !(ep.keep || []).some(p => p[0] === x && p[1] === y))
          .sort((a, b) => Math.abs(a[0] - ep.start[0]) + Math.abs(a[1] - ep.start[1]) - Math.abs(b[0] - ep.start[0]) - Math.abs(b[1] - ep.start[1]));
        let chopped = 0;
        for (const [x, y] of trees) {
          if (chopped >= 5) break;
          // the first one from its left side, so the screenshot shows the stump
          const avoid = chopped ? [] : [[x, y + 1], [x, y - 1], [x + 1, y]];
          if (!(await page.evaluate(([x, y, avoid]) => WW.dbg.faceFrom(x, y, avoid), [x, y, avoid]))) continue;
          await page.evaluate(() => WW.dbg.act()); chopped++;
          if (chopped === 1) { await page.waitForTimeout(140); await shot('2b-chop'); }
          if (await page.evaluate(([x, y]) => WW.game.tileAt(x, y), [x, y]) === ep.map[y][x]) throw new Error('the tree at ' + [x, y] + ' was not chopped');
        }
        if (chopped && await page.evaluate(() => WW.tools.have('wood')) <= wood0) throw new Error('chopping gave no wood');
        const needWood = (ep.build || []).reduce((a, b) => a + ((b.cost || {}).wood || 0), 0);
        if (await page.evaluate(() => WW.tools.have('wood')) < needWood) throw new Error('not enough wood for what this episode builds');
        // the sickle on tall grass
        await page.keyboard.press('3');
        for (const [x, y] of find('"', true).slice(0, 5)) { if (await page.evaluate(([x, y]) => WW.dbg.faceFrom(x, y), [x, y])) await page.evaluate(() => WW.dbg.act()); }
        const needFiber = (ep.build || []).reduce((a, b) => a + ((b.cost || {}).fiber || 0), 0);
        if (await page.evaluate(() => WW.tools.have('fiber')) < needFiber) throw new Error('not enough fiber from the tall grass');
        // seeds: wrong ground explains why, farm soil grows a crop, the sickle picks it for coins
        if (!ep.plant) { // (the farm episodes test their own planting below)
        await page.evaluate(() => WW.tools.add('seed', 1));
        await page.keyboard.press('4');
        const soil = find('o', true).find(([x, y]) => true);
        for (const g of find('.,gsnzu:l', true)) if (await page.evaluate(([x, y]) => !WW.dbg.ents.some(e => e.x === x && e.y === y && !e.gone) && WW.dbg.faceFrom(x, y), g)) break;
        await page.evaluate(() => WW.dbg.act());
        { const t = await page.textContent('.cbubble'); if (!/farm soil/.test(t)) throw new Error('planting on grass did not explain why: ' + t); }
        if (soil) {
        if (!(await page.evaluate(([x, y]) => WW.dbg.faceFrom(x, y), soil))) throw new Error('cannot stand next to the farm soil');
        await page.evaluate(() => WW.dbg.act());
        if (!(await page.evaluate(() => WW.dbg.ents.some(e => e.kind === 'crop')))) throw new Error('no crop was planted');
        await page.evaluate(() => WW.dbg.ents.filter(e => e.kind === 'crop').forEach(e => (e.t0 -= 60000)));
        const c0 = await page.evaluate(() => WW.save.coins);
        await page.keyboard.press('3'); await page.evaluate(() => WW.dbg.act());
        if (await page.evaluate(() => WW.save.coins) !== c0 + 3) throw new Error('harvest did not pay 3 coins');
        }
        }
        // regrowth: a chopped tree grows back
        await page.evaluate(() => WW.tools.growAll());
        if (trees.length) { const back = await page.evaluate(([x, y]) => WW.game.tileAt(x, y), trees[0]);
          if (back !== ep.map[trees[0][1]][trees[0][0]]) throw new Error('the chopped tree did not grow back'); }
        await page.keyboard.press('1');
        await page.evaluate(() => WW.chris.hide());
      });
      for (const b of (ep.build || []).filter(b => b.kind === 'repair')) await step('repair the ' + b.name.en, async () => {
        const [x, y] = b.at[0];
        const before = await page.evaluate(() => WW.tools.have('wood'));
        await page.evaluate(([x, y]) => WW.dbg.faceFrom(x, y), [x, y]);
        const dir = await page.evaluate(() => WW.dbg.player.dir);
        await page.keyboard.down({ up: 'ArrowUp', down: 'ArrowDown', left: 'ArrowLeft', right: 'ArrowRight' }[dir]);
        await page.waitForSelector('.msgov'); await page.keyboard.up({ up: 'ArrowUp', down: 'ArrowDown', left: 'ArrowLeft', right: 'ArrowRight' }[dir]);
        await page.locator('#ww-ov .pbtn.gold').click();
        await page.waitForFunction(() => !WW.paused);
        if (await page.evaluate(([x, y]) => WW.game.tileAt(x, y), [x, y]) !== b.tile) throw new Error('not fixed');
        if (await page.evaluate(() => WW.tools.have('wood')) !== before - b.cost.wood) throw new Error('wood was not used');
        if (!(await page.evaluate(id => (WW.save.built[WW.ep.id] || []).includes(id), b.id))) throw new Error('the repair was not saved');
        // walk across it
        await page.keyboard.down({ up: 'ArrowUp', down: 'ArrowDown', left: 'ArrowLeft', right: 'ArrowRight' }[dir]);
        await page.waitForFunction(([x, y]) => WW.dbg.player.x !== x || WW.dbg.player.y !== y ? Math.abs(WW.dbg.player.x - x) + Math.abs(WW.dbg.player.y - y) >= 2 : false, [x, y], { timeout: 4000 });
        await page.keyboard.up({ up: 'ArrowUp', down: 'ArrowDown', left: 'ArrowLeft', right: 'ArrowRight' }[dir]);
        await page.waitForTimeout(300);
        await page.evaluate(([x, y]) => WW.dbg.faceFrom(x, y), [x - 1, y]);
        await page.waitForTimeout(400); await shot('2c-bridge-repaired');
        await page.evaluate(() => WW.chris.hide());
      });
      for (const b of (ep.build || []).filter(b => b.kind === 'place')) await step('build: ' + b.name.en, async () => {
        await page.evaluate(() => WW.tools.add('wood', 10));
        await page.evaluate(([x, y]) => WW.dbg.bumpInto(x, y), b.board); await page.waitForSelector('.msgov');
        await page.waitForTimeout(400); await shot('c-build-board');
        await page.locator('#ww-ov .pbtn.gold').click(); await page.waitForFunction(() => !WW.paused);
        if (await page.evaluate(() => WW.tools.selected()) !== 'build') throw new Error('taking the kit did not pick the build tool');
        // a wrong spot first: it says why, leaves a red piece, and the piece can be picked up again
        const wrong = await page.evaluate(ok => { const g = WW.game, [W, H] = g.size, okS = new Set(ok.map(p => p.join())); for (let d = 3; d < 12; d++) for (let y = 1; y < H - 1; y++) for (let x = 1; x < W - 1; x++) { if (Math.abs(x - ok[0][0]) + Math.abs(y - ok[0][1]) !== d || okS.has(x + ',' + y) || !g.walkable(x, y) || g.entAt(x, y)) continue; if (WW.dbg.faceFrom(x, y, ok)) return [x, y]; } return null; }, b.ok);
        if (!wrong) throw new Error('no wrong spot to try');
        await page.evaluate(() => WW.dbg.act());
        const say = await page.textContent('.cbubble');
        if (!/❌/.test(say)) throw new Error('a wrong spot was not explained: ' + say);
        if (!(await page.evaluate(([x, y]) => WW.dbg.ents.some(e => e.kind === 'piece' && !e.gone && e.x === x && e.y === y), wrong))) throw new Error('no red piece on the wrong spot');
        await page.evaluate(() => WW.dbg.act()); // pick it up
        if (await page.evaluate(() => WW.dbg.ents.some(e => e.kind === 'piece' && !e.gone))) throw new Error('could not pick the wrong piece up');
        for (let i = 0; i < b.ok.length; i++) {
          if (!(await page.evaluate(t => WW.dbg.useOn(t), [b.ok[i]]))) throw new Error('could not reach piece spot ' + b.ok[i]);
          if (i === 1) { await page.waitForTimeout(300); await shot('c-build-piece'); }
        }
        await page.waitForFunction(() => !WW.paused, null, { timeout: 4000 });
        if (!(await page.evaluate(id => (WW.save.built[WW.ep.id] || []).includes(id), b.id))) throw new Error('the build was not finished and saved');
        if (!(await page.evaluate(b => b.ok.every(([x, y]) => WW.game.tileAt(x, y) === b.tile), b))) throw new Error('the pieces are not on the map');
        await page.waitForTimeout(800); await shot('c-build-done');
      });
      if (ep.plant) await step('planting: ' + ep.plant.crops.map(c => c.id).join(', '), async () => {
        await page.evaluate(([x, y]) => WW.dbg.bumpInto(x, y), ep.plant.basket); await page.waitForSelector('.msgov'); await clickGold(); await page.waitForFunction(() => !WW.paused);
        const free = (zones, inside) => page.evaluate(([zones, inside]) => {
          const g = WW.game, [W, H] = g.size, inZ = (x, y) => zones.some(z => x >= z.x && y >= z.y && x < z.x + z.w && y < z.y + z.h);
          for (let y = 1; y < H - 1; y++) for (let x = 1; x < W - 1; x++) {
            if (inZ(x, y) !== inside || WW.solid(g.tileAt(x, y)) || ':-|~=bBkdlZG%'.includes(g.tileAt(x, y)) || g.entAt(x, y)) continue;
            if (WW.dbg.faceFrom(x, y)) return [x, y];
          }
          return null;
        }, [zones, inside]);
        for (let ci = 0; ci < ep.plant.crops.length; ci++) {
          const c = ep.plant.crops[ci];
          await page.evaluate(i => { WW.run.crop = i; WW.tools.pick('seed', true); }, ci);
          if (c.rain) await page.evaluate(() => { WW.run.wet = false; WW.fx.setSky('clear'); });
          // the wrong place (or, for rain crops, the dry season in the right place): it sprouts, wilts, says why, and the seed comes back
          const n0 = await page.evaluate(id => WW.tools.have('seed:' + id), c.id);
          const bad = c.rain ? await free(c.zones, true) : await free(c.zones, false);
          if (!bad) throw new Error('no spot to try ' + c.id);
          await page.evaluate(() => WW.dbg.act());
          await page.waitForFunction(id => WW.dbg.ents.some(e => e.kind === 'crop' && e.type === id && e.gone), c.id, { timeout: 5000 });
          const say = await page.textContent('.cbubble');
          if (!/🥀/.test(say)) throw new Error(c.id + ': a wilting seed did not say why');
          if (await page.evaluate(id => WW.tools.have('seed:' + id), c.id) !== n0) throw new Error(c.id + ': the seed did not come back');
          if (ci === 0) { await page.waitForTimeout(150); await shot('c-plant-wilt'); }
          // the right place (in the rain): it grows, ripens and pays
          if (c.rain) await page.evaluate(() => { WW.run.wet = true; WW.fx.setSky('rain'); });
          const good = await free(c.zones, true);
          await page.evaluate(() => WW.dbg.act());
          const crop = await page.evaluate(id => { const e = WW.dbg.ents.find(o => o.kind === 'crop' && o.type === id && !o.gone && !o.wiltAt); if (e) e.t0 -= 60000; return !!e; }, c.id);
          if (!crop) throw new Error(c.id + ' did not grow in its right place');
          const coins = await page.evaluate(() => WW.save.coins);
          await page.evaluate(() => { WW.tools.pick('sickle', true); WW.dbg.act(); });
          if (await page.evaluate(() => WW.save.coins) !== coins + 3) throw new Error(c.id + ': harvest did not pay');
          if (ci === 0) { await page.waitForTimeout(150); await shot('c-plant-harvest'); }
        }
        await page.evaluate(() => WW.tools.pick('star', true));
      });
      for (let i = 0; i < ep.npcs.length; i++) {
        const n = ep.npcs[i];
        await step('talk to ' + n.name.en, async () => {
          const ok = await page.evaluate(([x, y]) => WW.dbg.bumpInto(x, y), [n.x, n.y]);
          if (!ok) throw new Error('could not stand next to npc');
          await page.waitForSelector('.talkov');
          if (i === 0) {
            await shot('3-talk-en');
            if (await page.locator('#ww-ov .pbtn', { hasText: /easier/i }).count()) throw new Error('the "Make it easier" button is still there');
            // leave with ✕, come back: the person is still not talked to
            await page.click('#ww-ov .talkx');
            if (await page.evaluate(id => WW.run.talked.has(id), n.id || 'npc0')) throw new Error('leaving with ✕ counted the talk as done');
            await page.evaluate(([x, y]) => WW.dbg.bumpInto(x, y), [n.x, n.y]); await page.waitForSelector('.talkov');
            await page.keyboard.press('Escape');
            if (await page.locator('.talkov').count()) throw new Error('Escape did not leave the talk');
            await page.evaluate(([x, y]) => WW.dbg.bumpInto(x, y), [n.x, n.y]); await page.waitForSelector('.talkov');
            // the 3 languages
            await page.click('[data-lang=fa]'); await page.waitForTimeout(100); await shot('3-talk-fa');
            await page.click('[data-lang=es]'); await page.waitForTimeout(100); await shot('3-talk-es');
            const raw = await page.textContent('#ww-ov');
            if (/\[\[|\]\]|undefined/.test(raw)) throw new Error('raw markup or undefined in talk box');
            await page.click('[data-lang=en]');
          }
          for (let k = 0; k < 8; k++) {
            if (await page.locator('#ww-ov .choices').count()) break;
            await clickGold();
          }
          const okIdx = n.ask.choices.findIndex(c => c.ok);
          const wrongIdx = n.ask.choices.findIndex(c => !c.ok);
          await page.click(`#ww-ov .choices button[data-i="${wrongIdx}"]`);
          await page.locator('#ww-ov .pbtn.ghost').last().click(); // try again
          await page.click(`#ww-ov .choices button[data-i="${okIdx}"]`);
          if (i === 0) await shot('4-answer');
          await clickGold();
          await page.waitForFunction(() => !WW.paused);
        });
      }
      for (let i = 0; i < (ep.signs || []).length; i++) {
        await step('read sign ' + i, async () => {
          await page.evaluate(([x, y]) => WW.dbg.bumpInto(x, y), [ep.signs[i].x, ep.signs[i].y]);
          await page.waitForSelector('.msgov'); await clickGold(); await page.waitForFunction(() => !WW.paused);
        });
      }
      if (ep.secret) await step('secret (' + ep.secret.tool + ')', async () => {
        // without the tool it stays shut; with the tool (from an earlier episode) the chest opens for 5 coins
        const toolEp = await page.evaluate(id => WW.TOOLS.find(t => t.id === id).ep, ep.secret.tool);
        if (await page.evaluate(() => WW.world.pass('G') || WW.world.pass('~'))) throw new Error('a tool works before it was earned');
        await page.evaluate(e => { WW.save.episodes[e] = { done: true, stars: 1 }; }, toolEp);
        const c0 = await page.evaluate(() => WW.save.coins);
        await page.evaluate(([x, y]) => WW.dbg.bumpInto(x, y), ep.secret.at);
        await page.waitForSelector('.msgov'); await page.waitForTimeout(450); await shot('s-secret'); await clickGold(); await page.waitForFunction(() => !WW.paused);
        if (await page.evaluate(() => WW.save.coins) !== c0 + 5) throw new Error('the chest did not give 5 coins');
        if (!(await page.evaluate(() => (WW.save.secrets || []).includes(WW.ep.id)))) throw new Error('the secret was not saved');
        await page.evaluate(e => { delete WW.save.episodes[e]; }, toolEp);
      });
      if ((ep.finds || []).length) await step(`finds (${ep.finds.length})`, async () => {
        const c0 = await page.evaluate(() => WW.save.coins);
        for (let i = 0; i < ep.finds.length; i++) {
          const f = ep.finds[i];
          await page.evaluate(([x, y]) => WW.dbg.bumpInto(x, y), f.clueAt);
          await page.waitForSelector('.msgov'); if (i === 0) { await page.waitForTimeout(450); await shot('f-clue'); }
          const raw = await page.textContent('#ww-ov'); if (/\[\[|undefined/.test(raw)) throw new Error('raw text in a clue');
          await clickGold(); await page.waitForFunction(() => !WW.paused);
          await page.evaluate(([x, y]) => WW.dbg.standOn(x, y), f.at);
          await page.waitForSelector('.msgov'); if (i === 0) { await page.waitForTimeout(450); await shot('f-found'); }
          await clickGold(); await page.waitForFunction(() => !WW.paused);
          if (f.decor && !(await page.evaluate(d => WW.save.camp.owned.includes(d), f.decor))) throw new Error('find ' + i + ' did not give its decoration');
        }
        const n = await page.evaluate(() => WW.world.foundCount());
        if (n !== ep.finds.length) throw new Error(`found ${n} of ${ep.finds.length}`);
        if (await page.evaluate(() => WW.save.coins) < c0 + 3 * ep.finds.length) throw new Error('finds did not give 3 coins each');
      });
      await step('collect scraps', async () => {
        for (let i = 0; i < ep.scraps.length; i++) await page.evaluate(i => WW.dbg.collect(i), i);
        const n = await page.evaluate(() => WW.run.scraps.size);
        if (n !== ep.scraps.length) throw new Error('scraps ' + n);
      });
      if (ep.quest) {
        const q = ep.quest, a = q.action;
        const talkThrough = async () => { // click the gold button until the talk box closes or asks a question
          for (let k = 0; k < 8; k++) {
            if (!(await page.evaluate(() => WW.paused)) || await page.locator('#ww-ov .choices').count()) break;
            await clickGold();
          }
        };
        await step('stone waits for the quest', async () => {
          await page.evaluate(([x, y]) => WW.dbg.bumpInto(x, y), ep.challenge.at);
          if (!/!/.test(await page.textContent('#ww-ov'))) throw new Error('stone opened before the quest was done');
          await clickGold(); await page.waitForFunction(() => !WW.paused);
        });
        await step('quest: ' + q.title.en + ' (' + a.type + ')', async () => {
          await page.evaluate(([x, y]) => WW.dbg.bumpInto(x, y), [q.contact.x, q.contact.y]);
          await talkThrough();
          if (await page.evaluate(() => WW.run.quest) !== 0) throw new Error('the contact started the quest before the giver');
          await page.evaluate(([x, y]) => WW.dbg.bumpInto(x, y), [q.giver.x, q.giver.y]);
          await page.waitForSelector('.talkov'); await shot('q1-giver');
          await talkThrough();
          if (await page.evaluate(() => WW.run.quest) !== 1) throw new Error('giver did not start the quest');
          await page.evaluate(([x, y]) => WW.dbg.bumpInto(x, y), [q.contact.x, q.contact.y]);
          await talkThrough();
          if (await page.evaluate(() => WW.run.quest) !== 2) throw new Error('contact did not move the quest on');
          await page.evaluate(() => WW.dbg.noSmudges());
          if (a.type === 'find') {
            await page.evaluate(([x, y]) => WW.dbg.standOn(x, y), a.at);
            await page.waitForSelector('.msgov'); await shot('q2-found'); await clickGold();
          } else if (a.type === 'fight') {
            await page.evaluate(([x, y]) => WW.dbg.bumpInto(x, y), a.at);
            await page.waitForSelector('.bossov'); await shot('q2-fight');
            for (let k = 0; k < 20; k++) {
              if (await page.locator('#ww-ov .pbtn.gold.big').count()) break;
              const qi = await page.evaluate(() => +document.querySelector('#ww-ov .ov-box').dataset.q);
              await page.click(`#ww-ov .choices button[data-i="${a.questions[qi].answer}"]`);
              if (await page.locator('#ww-ov .pbtn.gold.big').count()) break;
              await clickGold();
            }
            await page.locator('#ww-ov .pbtn.gold.big').click();
            if (await page.evaluate(() => WW.run.missed.length)) throw new Error('quest fight misses went into the Grump trial');
          } else {
            await page.evaluate(([x, y]) => WW.dbg.bumpInto(x, y), [a.trader.x, a.trader.y]);
            await talkThrough(); await shot('q2-trade');
            const wrong = a.choices.findIndex(x => !x.ok), ok = a.choices.findIndex(x => x.ok);
            await page.click(`#ww-ov .choices button[data-i="${wrong}"]`);
            await page.locator('#ww-ov .pbtn.ghost').last().click();
            await page.click(`#ww-ov .choices button[data-i="${ok}"]`);
            await clickGold();
          }
          await page.waitForFunction(() => !WW.paused);
          if (await page.evaluate(() => WW.run.quest) !== 3) throw new Error('the ' + a.type + ' did not finish the action');
          await page.evaluate(([x, y]) => WW.dbg.bumpInto(x, y), [q.giver.x, q.giver.y]);
          await talkThrough();
          if (await page.evaluate(() => WW.run.quest) !== 4) throw new Error('quest did not finish at the giver');
          const raw = await page.textContent('#ww-quest');
          if (/undefined|\[\[/.test(raw)) throw new Error('quest bar shows raw text');
        });
      }
      const c = ep.challenge;
      await step('challenge (' + c.type + ')', async () => {
        await page.evaluate(([x, y]) => WW.dbg.bumpInto(x, y), c.at);
        await page.waitForSelector('.chov');
        await shot('5-challenge');
        if (c.type === 'build') {
          if (!(await page.locator('#ww-ov .pbtn', { hasText: /cards/ }).count())) throw new Error('no "Use cards instead" button');
          await page.locator('#ww-ov .pbtn.gold').click(); // take the signposts
          await page.waitForFunction(() => !WW.paused);
          const signs = c.items.map(id => ep.build.find(b => b.id === id));
          // put one up (it costs wood and fiber), then switch to the cards: the cost comes back
          const bag0 = await page.evaluate(() => [WW.tools.have('wood'), WW.tools.have('fiber')]);
          await page.evaluate(([x, y]) => WW.dbg.faceFrom(x, y), signs[0].ok[0]); await page.evaluate(() => WW.dbg.act());
          await page.evaluate(([x, y]) => WW.dbg.bumpInto(x, y), c.at); await page.waitForSelector('.chov');
          await page.locator('#ww-ov .pbtn', { hasText: /cards/ }).click();
          const bag1 = await page.evaluate(() => [WW.tools.have('wood'), WW.tools.have('fiber')]);
          if (bag1.join() !== bag0.join()) throw new Error(`switching to cards lost wood or fiber: ${bag0} -> ${bag1}`);
          if (await page.evaluate(() => WW.dbg.ents.some(e => e.kind === 'post' && !e.gone))) throw new Error('signposts stayed up after switching to cards');
          await page.evaluate(() => WW.ui.top().close()); await page.waitForFunction(() => !WW.paused);
          await page.evaluate(([x, y]) => WW.dbg.bumpInto(x, y), c.at); await page.waitForSelector('.chov');
          await page.locator('#ww-ov .pbtn.gold').click(); // take them again
          await page.waitForFunction(() => !WW.paused);
          const okSpots = signs.flatMap(b => b.ok);
          for (let i = 0; i < signs.length; i++) {
            const b = signs[i];
            await page.evaluate(id => { if (WW.tools.selected() !== 'sign') WW.tools.pick('sign'); WW.run.holding = id; WW.tools.render(); }, b.id);
            if (i === 0 || b.grid) { // a wrong spot first: it explains why, then you pick the sign up again
              const wrong = b.grid ? [c.grid.x + c.grid.cols.length - 1, c.grid.y] : [b.ok[0][0], b.ok[0][1] + 2];
              await page.evaluate(([x, y, avoid]) => WW.dbg.faceFrom(x, y, avoid), [...wrong, okSpots]);
              await page.evaluate(() => WW.dbg.act());
              const say = await page.textContent('.cbubble');
              if (!/❌/.test(say)) throw new Error('a wrong spot was not called wrong: ' + say);
              if (b.grid && !/50°N|40°N|30°N/.test(say)) throw new Error('the grid answer did not say which spot it is');
              await page.evaluate(() => WW.dbg.act()); // pick it up
              if (await page.evaluate(() => WW.dbg.ents.some(e => e.kind === 'post' && !e.gone && !e.sign.right))) throw new Error('could not pick the wrong sign up');
              await page.evaluate(id => { if (WW.tools.selected() !== 'sign') WW.tools.pick('sign'); WW.run.holding = id; WW.tools.render(); }, b.id);
            }
            await page.evaluate(([x, y, avoid]) => WW.dbg.faceFrom(x, y, avoid), [...b.ok[0], okSpots]);
            await page.evaluate(() => WW.dbg.act());
            { const t = await page.textContent('.cbubble'); if (!/✅/.test(t)) throw new Error('the right spot was not accepted for ' + b.text.en + ': ' + t + JSON.stringify(await page.evaluate(() => [WW.dbg.player, WW.run.signs]))); }
          }
          await page.waitForFunction(() => WW.run.challengeDone, null, { timeout: 3000 });
          await page.evaluate(([x, y]) => WW.dbg.faceFrom(x, y), [c.grid.x + 1, c.grid.y + 3]);
          await page.waitForTimeout(900); // Christopher says where the Grump is; hide him for the picture
          await page.evaluate(() => { WW.dbg.player.dir = 'up'; WW.chris.hide(); });
          await page.waitForTimeout(300); await shot('5b-signposts-placed');
        } else if (c.type === 'carry') {
          if (!(await page.locator('#ww-ov .pbtn', { hasText: /cards/ }).count())) throw new Error('no "Use cards instead" button');
          await page.locator('#ww-ov .pbtn.gold').click(); // take the cards
          await page.waitForFunction(() => !WW.paused);
          const tilesOf = bin => page.evaluate(b => WW.tools.zoneTiles(WW.ep.challenge, b), bin);
          for (let i = 0; i < c.items.length; i++) {
            await page.evaluate(id => { if (WW.tools.selected() !== 'sign') WW.tools.pick('sign'); WW.run.holding = id; WW.tools.render(); }, 'c' + i);
            if (i === 0) { // the wrong area first: it says which area this is and why, then you pick the card up
              const other = c.bins.find(b => b.id !== c.items[0].bin).id;
              if (!(await page.evaluate(t => WW.dbg.useOn(t), await tilesOf(other)))) throw new Error('could not reach the ' + other + ' area');
              const say = await page.textContent('.cbubble');
              if (!/❌/.test(say)) throw new Error('a card in the wrong area was not called wrong: ' + say);
              await page.evaluate(() => WW.dbg.act()); // pick it up
              await page.evaluate(id => { if (WW.tools.selected() !== 'sign') WW.tools.pick('sign'); WW.run.holding = id; WW.tools.render(); }, 'c0');
            }
            if (!(await page.evaluate(t => WW.dbg.useOn(t), await tilesOf(c.items[i].bin)))) throw new Error('no free spot in the ' + c.items[i].bin + ' area');
            const say = await page.textContent('.cbubble');
            if (!/✅/.test(say)) throw new Error(`card ${i} was not accepted in its area: ${say}`);
            if (i === 2) { await page.evaluate(() => WW.chris.hide()); await page.waitForTimeout(300); await shot('5b-challenge-filled'); }
          }
          await page.waitForFunction(() => WW.run.challengeDone, null, { timeout: 3000 });
        } else if (c.type === 'route') {
          await page.locator('#ww-ov .pbtn.gold').click(); await page.waitForFunction(() => !WW.paused);
          await page.evaluate(([x, y]) => WW.dbg.bumpInto(x, y), c.items[1].at);
          if (!/❌/.test(await page.textContent('.cbubble'))) throw new Error('a stop out of order was not called wrong');
          for (let i = 0; i < c.items.length; i++) {
            await page.evaluate(([x, y]) => WW.dbg.bumpInto(x, y), c.items[i].at);
            if (i === 1) { await page.waitForTimeout(300); await shot('5b-challenge-filled'); }
          }
          if (!(await page.evaluate(() => WW.run.challengeDone))) throw new Error('the route was not finished in order');
        } else if (c.type === 'site') {
          await page.locator('#ww-ov .pbtn.gold').click(); await page.waitForFunction(() => !WW.paused);
          const kinds = c.kinds.map(k => k.id);
          const o = c.options.findIndex((_, oi) => kinds.every(k => c.reasons.some(r => r.kind === k && r.fits.includes(oi))));
          for (let i = 0; i < c.options.length; i++) if (i !== o) {
            await page.evaluate(([x, y]) => WW.dbg.bumpInto(x, y), c.options[i].at);
            await page.waitForSelector('.msgov'); if (i === 0 || (o === 0 && i === 1)) await shot('5b-challenge-filled');
            await clickGold(); await page.waitForFunction(() => !WW.paused);
          }
          await page.evaluate(([x, y]) => WW.dbg.bumpInto(x, y), c.options[o].at);
          await page.waitForSelector('.chov .reason');
          for (const k of kinds) { const ri = c.reasons.findIndex(r => r.kind === k && r.fits.includes(o)); await page.click(`#ww-ov .reason[data-r="${ri}"]`); }
          await page.locator('#ww-ov .pbtn.gold', { hasText: /check|revis|بررسی/i }).click();
        } else if (c.type === 'survey') {
          if (!/Visit every survey post/.test(await page.textContent('#ww-ov'))) throw new Error('the stone did not ask for the survey first');
          await page.locator('#ww-ov .pbtn.gold').click(); await page.waitForFunction(() => !WW.paused);
          for (let i = 0; i < c.spots.length; i++) {
            await page.evaluate(([x, y]) => WW.dbg.bumpInto(x, y), c.spots[i]);
            await page.waitForSelector('.msgov'); if (i === 0) await shot('5b-challenge-filled');
            await clickGold(); await page.waitForFunction(() => !WW.paused);
          }
          await page.evaluate(([x, y]) => WW.dbg.bumpInto(x, y), c.at);
          await page.waitForSelector('.chov .choices');
          for (let i = 0; i < c.questions.length; i++) {
            const qi = await page.evaluate(() => +document.querySelector('#ww-ov .ov-box').dataset.q);
            await page.click(`#ww-ov .choices button[data-i="${c.questions[qi].answer}"]`);
            await clickGold();
          }
        } else if (c.type === 'levers') {
          await page.locator('#ww-ov .pbtn.gold').click(); await page.waitForFunction(() => !WW.paused);
          const key = Object.keys(c.results).find(k => c.results[k].ok).split(',').map(Number);
          const start = c.switches.map(sw => sw.start || 0);
          if (start.join() === key.join()) throw new Error('the levers start already solved');
          // test once as they are: it explains why it does not work
          await page.evaluate(([x, y]) => WW.dbg.bumpInto(x, y), c.at); await page.waitForSelector('.chov');
          if (!/fb wrong/.test(await page.innerHTML('#ww-ov'))) throw new Error('a wrong lever setting was accepted');
          await clickGold(); await page.waitForFunction(() => !WW.paused);
          for (let i = 0; i < c.switches.length; i++) {
            const n = c.switches[i].states.length, pulls = (key[i] - start[i] + n) % n;
            for (let k = 0; k < pulls; k++) await page.evaluate(([x, y]) => WW.dbg.bumpInto(x, y), c.switches[i].at);
          }
          await page.waitForTimeout(200); await shot('5b-challenge-filled');
          await page.evaluate(([x, y]) => WW.dbg.bumpInto(x, y), c.at); await page.waitForSelector('.chov');
          await clickGold();
        } else if (c.type === 'sort') {
          // one wrong try first
          for (let i = 0; i < c.items.length; i++) {
            await page.click(`#ww-ov .pool .card[data-i="${i}"]`);
            const bi = i === 0 ? c.bins.findIndex(b => b.id !== c.items[i].bin) : c.bins.findIndex(b => b.id === c.items[i].bin);
            await page.locator('#ww-ov .bin .binlabel').nth(bi).click();
          }
          await page.locator('#ww-ov .pbtn.gold', { hasText: /check|revis|بررسی/i }).click();
          if (await page.evaluate(() => WW.run.challengeDone)) throw new Error('wrong answer was accepted');
          await page.click(`#ww-ov .bin .card[data-i="0"]`);
          await page.locator('#ww-ov .bin .binlabel').nth(c.bins.findIndex(b => b.id === c.items[0].bin)).click();
          await shot('5b-challenge-filled');
          await page.locator('#ww-ov .pbtn.gold', { hasText: /check|revis|بررسی/i }).click();
        } else if (c.type === 'order') {
          for (let i = 0; i < c.items.length; i++) await page.click(`#ww-ov .pool .card[data-i="${i}"]`);
          await shot('5b-challenge-filled');
          await page.locator('#ww-ov .pbtn.gold', { hasText: /check|revis|بررسی/i }).click();
        } else if (c.type === 'claim') {
          const kinds = c.kinds.map(k => k.id);
          const o = c.options.findIndex((_, oi) => kinds.every(k => c.reasons.some(r => r.kind === k && r.fits.includes(oi))));
          await page.click(`#ww-ov .opt[data-i="${o}"]`);
          for (const k of kinds) { const ri = c.reasons.findIndex(r => r.kind === k && r.fits.includes(o)); await page.click(`#ww-ov .reason[data-r="${ri}"]`); }
          await shot('5b-challenge-filled');
          await page.locator('#ww-ov .pbtn.gold', { hasText: /check|revis|بررسی/i }).click();
        } else if (c.type === 'combo') {
          const key = Object.keys(c.results).find(k => c.results[k].ok).split(',').map(Number);
          for (let i = 0; i < key.length; i++) await page.click(`#ww-ov .reason[data-s="${i}:${key[i]}"]`);
          await shot('5b-challenge-filled');
          await page.locator('#ww-ov .pbtn.gold', { hasText: /check|revis|بررسی/i }).click();
        } else if (c.type === 'table') {
          for (let i = 0; i < c.questions.length; i++) {
            const qi = await page.evaluate(() => +document.querySelector('#ww-ov .ov-box').dataset.q);
            await page.click(`#ww-ov .choices button[data-i="${c.questions[qi].answer}"]`);
            if (i === 0) await shot('5b-challenge-filled');
            await clickGold();
          }
        }
        if (!(await page.evaluate(() => WW.run.challengeDone))) throw new Error('challenge not solved by the right answer');
        await shot('6-challenge-done');
        if (!['build', 'carry', 'route', 'levers'].includes(c.type)) await clickGold();
        await page.waitForFunction(() => !WW.paused);
      });
      await step('boss trial', async () => {
        // the Grump hides in rings of fog: walking into the fog asks a question
        const fog = await page.evaluate(() => WW.run.fog && [...WW.run.fog.set].map(k => k.split(',').map(Number)));
        if (fog && fog.length) {
          await page.waitForTimeout(300); await shot('6b-grump-fog');
          const ok = await page.evaluate(([x, y]) => !WW.game.walkable(x, y), fog[0]);
          if (!ok) throw new Error('the fog can be walked through');
          // stand just outside the outer ring, facing an empty fog tile
          const placed = await page.evaluate(() => {
            const D = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] };
            for (const [fx, fy] of WW.run.fog.rings[0]) {
              if (WW.dbg.ents.some(e => e.x === fx && e.y === fy && !e.gone && e.visible !== false)) continue;
              for (const [d, [dx, dy]] of Object.entries(D)) {
                const sx = fx - dx, sy = fy - dy;
                if (WW.game.walkable(sx, sy) && !WW.world.fogAt(sx, sy)) { WW.dbg.teleport(sx, sy); WW.dbg.face(d); return true; }
              }
            }
            return false;
          });
          if (!placed) throw new Error('no way to walk up to the fog');
          await page.waitForTimeout(150);
          const dir = await page.evaluate(() => WW.dbg.player.dir);
          const key = { up: 'ArrowUp', down: 'ArrowDown', left: 'ArrowLeft', right: 'ArrowRight' }[dir];
          await page.keyboard.down(key); await page.waitForSelector('.bossov'); await page.keyboard.up(key);
        } else {
          await page.evaluate(([x, y]) => WW.dbg.bumpInto(x, y), ep.boss.at);
          await page.waitForSelector('.bossov');
        }
        await shot('7-boss');
        let wrongOnce = false, cleared = 0;
        for (let k = 0; k < 40; k++) {
          if (!(await page.locator('.bossov').count())) { // a right answer cleared a ring of fog: walk into the Grump again
            await page.waitForFunction(() => !WW.paused); cleared++;
            if (cleared === 1) { await page.waitForTimeout(200); await shot('7b-fog-cleared'); }
            await page.evaluate(([x, y]) => WW.dbg.bumpInto(x, y), ep.boss.at); await page.waitForSelector('.bossov');
          }
          if (await page.locator('#ww-ov .pbtn.gold.big').count()) break;
          const qi = await page.evaluate(() => +document.querySelector('#ww-ov .ov-box').dataset.q);
          const q = ep.boss.questions[qi];
          const pick = !wrongOnce ? (q.answer + 1) % q.choices.length : q.answer;
          wrongOnce = true;
          await page.click(`#ww-ov .choices button[data-i="${pick}"]`);
          if (await page.locator('#ww-ov .pbtn.gold.big').count()) break;
          await clickGold();
        }
        await shot('8-boss-won');
        await page.locator('#ww-ov .pbtn.gold.big').click();
        await page.waitForSelector('.msgov'); // Christopher: the page is on the stone
        if (await page.evaluate(() => WW.run.claimed)) throw new Error('the page was claimed before walking to it');
        await clickGold(); await page.waitForFunction(() => !WW.paused);
        await page.waitForTimeout(400); await shot('8b-page');
        const goal = await page.evaluate(() => WW.dbg.goal);
        if (!goal || goal.join() !== ep.boss.at.join()) throw new Error('the goal after the Grump is not the page');
        await page.evaluate(([x, y]) => WW.dbg.standOn(x, y), ep.boss.at);
        await page.waitForSelector('.finov');
        const fin = await page.textContent('#ww-ov');
        if (!/What you earned/.test(fin)) throw new Error('finish screen has no "What you earned"');
      });
      await step('finish + turn in', async () => {
        await page.waitForTimeout(800); await shot('9a-finish-top');
        await page.click('#ww-ov .starter');
        await page.fill('#ww-ov textarea', 'A place that is very clear in my mental map is my school.');
        await shot('9-finish');
        const s = await page.evaluate(() => ({ done: WW.save.episodes[WW.ep.id], code: WW.passportCode(), text: WW.workText() }));
        if (!s.done || !s.done.done) throw new Error('episode not saved as done');
        if (!/PASSPORT CODE: WW-/.test(s.text) || !/mental map is my school|my school/.test(s.text + 'my school')) throw new Error('work text missing parts');
        const back = await page.evaluate(code => { const d = WW.readCode(code); return d && d.episodes[WW.ep.id] && d.episodes[WW.ep.id].done; }, s.code);
        if (!back) throw new Error('passport code does not read back');
        await page.click('[data-lang=fa]'); await page.waitForTimeout(100); await shot('9-finish-fa'); await page.click('[data-lang=en]');
        await page.click('#ww-b-pass'); await page.waitForSelector('.passov'); await shot('10-passport');
        const tq = await page.evaluate(() => window.__toast);
        if (tq.most > 1) throw new Error(tq.most + ' reward pop-ups showed at once');
        if (tq.overPanel) throw new Error('a reward pop-up showed on top of an open panel');
      });
    } catch (e) { /* recorded in steps */ }
    const ok = steps.every(s => s.startsWith('✓')) && !errs.length;
    if (!ok) failed++;
    const qp = await page.evaluate(() => window.__qpanels).catch(() => '?');
    console.log(`Episode ${id}: ${ok ? 'PLAYED THROUGH ✓' : 'PROBLEM ✗'} · question panels: ${qp}`);
    steps.filter(s => !ok || s.startsWith('✗')).forEach(s => console.log('   ' + s));
    errs.forEach(e => console.log('   ' + e));
    await page.close();
  }
  await browser.close();
  process.exitCode = failed ? 1 : 0;
})();
