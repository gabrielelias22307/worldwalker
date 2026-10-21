// node tests/keys.js   plays Episode 1.1 with REAL key presses only (no teleports, no debug actions):
// sign in, meet Christopher, walk to Rosa and talk, pick the axe, chop, cut grass, repair the bridge,
// meet everyone, do the quest, take the signposts and place one. It reads the map only to plan where to walk.
const { chromium } = require('playwright');
const path = require('path');
const ROOT = path.join(__dirname, '..');
let failed = 0; const ok = (c, m) => { console.log((c ? '✓ ' : '✗ ') + m); if (!c) { failed++; throw new Error(m); } };
const ARROW = { up: 'ArrowUp', down: 'ArrowDown', left: 'ArrowLeft', right: 'ArrowRight' };
const D = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] };

(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1366, height: 768 } });
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  const url = 'file://' + path.join(ROOT, 'game', 'ep-1-1.html');
  const st = () => p.evaluate(() => ({ x: WW.dbg.player.x, y: WW.dbg.player.y, dir: WW.dbg.player.dir, moving: !!WW.dbg.player.moving, paused: !!WW.paused, panel: WW.ui.stack.length ? WW.ui.top().opts.cls : '' }));
  const idle = () => p.waitForFunction(() => !WW.dbg.player.moving, null, { timeout: 3000 });
  const key = async (k, n = 1) => { for (let i = 0; i < n; i++) { await p.keyboard.press(k); await p.waitForTimeout(120); } };
  // one step: hold the arrow until the hero starts moving, then let go
  async function step(dir) {
    const a = await st();
    await p.keyboard.down(ARROW[dir]);
    await p.waitForFunction(([x, y]) => WW.dbg.player.x !== x || WW.dbg.player.y !== y || WW.paused, [a.x, a.y], { timeout: 1500 }).catch(() => { });
    await p.waitForTimeout(40);
    await p.keyboard.up(ARROW[dir]);
    await idle();
    const c = await st();
    return c.x !== a.x || c.y !== a.y;
  }
  // walk next to (tx, ty) and face it, by planning a route on the map and pressing arrows
  async function walkTo(tx, ty, onto = false) {
    for (let tries = 0; tries < 6; tries++) {
      const plan = await p.evaluate(([tx, ty, onto, around]) => {
        const busy = new Set(around ? WW.dbg.ents.filter(e => !e.gone && e.visible !== false && !(e.x === tx && e.y === ty)).map(e => e.x + ',' + e.y) : []); // go around people and notes
        const g = WW.game, [W, H] = g.size, s = [g.player.x, g.player.y], key = (x, y) => x + ',' + y;
        const goal = onto ? [[tx, ty]] : [[tx + 1, ty, 'left'], [tx - 1, ty, 'right'], [tx, ty + 1, 'up'], [tx, ty - 1, 'down']];
        const prev = new Map([[key(...s), null]]), q = [s];
        while (q.length) {
          const [x, y] = q.shift();
          const hit = goal.find(o => o[0] === x && o[1] === y);
          if (hit) { const path = []; let k = key(x, y); while (prev.get(k)) { const [px, py, d] = prev.get(k); path.unshift(d); k = key(px, py); } return { path, face: hit[2] || null }; }
          for (const [d, [dx, dy]] of Object.entries({ up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] })) {
            const nx = x + dx, ny = y + dy, k = key(nx, ny);
            if (nx < 0 || ny < 0 || nx >= W || ny >= H || prev.has(k) || !g.walkable(nx, ny) || busy.has(k)) continue;
            prev.set(k, [x, y, d]); q.push([nx, ny]);
          }
        }
        return null;
      }, [tx, ty, onto, tries < 3]);
      if (!plan && tries < 3) { tries = 2; continue; } // no way around: go through
      if (!plan) throw new Error(`no route to (${tx},${ty})`);
      let blocked = false;
      for (let i = 0; i < plan.path.length; i++) {
        if (!(await step(plan.path[i]))) { blocked = true; break; }
        if ((await st()).panel) { if (i === plan.path.length - 1 && onto) return; await throughPanels(); blocked = true; break; } // something on the way (a find): read it, go on
      }
      if (blocked) { await p.waitForTimeout(300); continue; } // a bad guy was in the way: plan again
      if (plan.face) { await p.keyboard.down(ARROW[plan.face]); await p.waitForTimeout(60); await p.keyboard.up(ARROW[plan.face]); await idle(); }
      return;
    }
    throw new Error(`could not walk to (${tx},${ty}) from ${JSON.stringify(await st())} ${await p.evaluate(() => JSON.stringify(WW.dbg.ents.filter(e => !e.gone && e.visible !== false && Math.abs(e.x - WW.dbg.player.x) + Math.abs(e.y - WW.dbg.player.y) < 3).map(e => [e.kind, e.x, e.y])))}`);
  }
  // in a panel: Tab to the button whose text matches, then Enter
  async function choose(re) {
    for (let i = 0; i < 14; i++) {
      const t = await p.evaluate(() => document.activeElement && document.activeElement.textContent || '');
      if (re.test(t)) { await p.keyboard.press('Enter'); await p.waitForTimeout(150); return; }
      await p.keyboard.press('Tab'); await p.waitForTimeout(40);
    }
    throw new Error('no button matching ' + re);
  }
  // press Enter until no panel is open (reads talks, answers with the right choice when asked)
  async function throughPanels(answer) {
    for (let i = 0; i < 20; i++) {
      const s = await st(); if (!s.panel) return;
      if (answer && await p.locator('#ww-ov .choices button:not([disabled])').count() && !(await p.locator('#ww-ov .choices button.right').count())) { await choose(answer); continue; }
      await p.keyboard.press('Enter'); await p.waitForTimeout(180);
    }
    throw new Error('a panel did not close with Enter');
  }
  const ep = async () => p.evaluate(() => JSON.parse(JSON.stringify({ npcs: WW.ep.npcs.map(n => ({ x: n.x, y: n.y, name: n.name.en, ok: n.ask.choices.find(c => c.ok).t.en })), q: WW.ep.quest, stone: WW.ep.challenge.at, build: WW.ep.build, map: WW.ep.map })));

  try {
    await p.goto(url); await p.evaluate(() => localStorage.clear()); await p.goto(url);
    // sign in with the keyboard
    ok(await p.evaluate(() => document.activeElement && document.activeElement.id === 'si-name'), 'the name box has the cursor');
    await p.keyboard.type('Keys'); await p.keyboard.press('Tab'); await p.keyboard.type('GEO-1'); await p.keyboard.press('Tab'); await p.keyboard.type('1234');
    await p.keyboard.press('Enter'); // Enter in the last box starts the game
    await p.waitForSelector('.introov', { timeout: 4000 }); ok(true, 'signed in with the keyboard');
    await p.keyboard.press('Enter'); await p.waitForTimeout(400);
    ok(await p.evaluate(() => WW.chris.scene), 'Christopher flies in');
    for (let i = 0; i < 4 && await p.evaluate(() => WW.chris.scene); i++) { await p.keyboard.press('Enter'); await p.waitForTimeout(200); }
    ok(!(await p.evaluate(() => WW.chris.scene)) && !(await st()).paused, 'Enter goes through his lines');
    const E = await ep();
    // C: what next?
    await key('c'); ok(await p.locator('.cbubble').isVisible() && /Rosa|Talk/.test(await p.textContent('.cbubble')), 'C asks Christopher what to do next');
    await key('Escape');
    // walk to Rosa and talk (the right answer by Tab + Enter)
    const rosa = E.npcs[0];
    await walkTo(rosa.x, rosa.y);
    await p.keyboard.down(ARROW[(await st()).dir]); await p.waitForTimeout(80); await p.keyboard.up(ARROW[(await st()).dir]);
    await p.waitForSelector('.talkov', { timeout: 3000 }); ok(true, 'walking into Rosa starts the talk');
    await throughPanels(new RegExp(rosa.ok.slice(0, 18).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
    ok(await p.evaluate(() => WW.run.talked.size === 1), 'talked to Rosa and answered with the keyboard');
    // the axe: 2, face a small tree, Space
    await key('2');
    const tree = await p.evaluate(() => { const g = WW.game, [W, H] = g.size; let best = null; for (let y = 1; y < H - 1; y++) for (let x = 1; x < W - 1; x++) if ('TY'.includes(g.tileAt(x, y)) && [[1, 0], [-1, 0], [0, 1], [0, -1]].some(([dx, dy]) => g.walkable(x + dx, y + dy))) { const d = Math.abs(x - g.player.x) + Math.abs(y - g.player.y); if (!best || d < best.d) best = { x, y, d }; } return best; });
    for (let n = 0; n < 2; n++) {
      const t = await p.evaluate(() => { const g = WW.game, [W, H] = g.size; let best = null; for (let y = 1; y < H - 1; y++) for (let x = 1; x < W - 1; x++) if ('TY'.includes(g.tileAt(x, y)) && [[1, 0], [-1, 0], [0, 1], [0, -1]].some(([dx, dy]) => g.walkable(x + dx, y + dy))) { const d = Math.abs(x - g.player.x) + Math.abs(y - g.player.y); if (!best || d < best.d) best = { x, y, d }; } return best; });
      await walkTo(t.x, t.y); await key(' ');
    }
    ok(await p.evaluate(() => WW.tools.have('wood')) >= 4, 'picked the axe with 2 and chopped two trees with Space (' + await p.evaluate(() => WW.tools.have('wood')) + ' wood)');
    // the sickle: 3, tall grass
    await key('3');
    const grass = await p.evaluate(() => { const g = WW.game, [W, H] = g.size; let best = null; for (let y = 1; y < H - 1; y++) for (let x = 1; x < W - 1; x++) if (g.tileAt(x, y) === '"') { const d = Math.abs(x - g.player.x) + Math.abs(y - g.player.y); if (!best || d < best.d) best = { x, y, d }; } return best; });
    await walkTo(grass.x, grass.y); await key(' ');
    ok(await p.evaluate(() => WW.tools.have('fiber')) >= 1, 'picked the sickle with 3 and cut tall grass');
    // more wood and fiber for a signpost later
    await key('2'); { const t = await p.evaluate(() => { const g = WW.game, [W, H] = g.size; let best = null; for (let y = 1; y < H - 1; y++) for (let x = 1; x < W - 1; x++) if ('TY'.includes(g.tileAt(x, y)) && [[1, 0], [-1, 0], [0, 1], [0, -1]].some(([dx, dy]) => g.walkable(x + dx, y + dy))) { const d = Math.abs(x - g.player.x) + Math.abs(y - g.player.y); if (!best || d < best.d) best = { x, y, d }; } return best; }); await walkTo(t.x, t.y); await key(' '); }
    await key('1');
    // repair the bridge: walk into the broken planks, Enter on "Fix it"
    const br = E.build.find(o => o.kind === 'repair');
    await walkTo(br.at[0][0] - 1, br.at[0][1], true); // stand west of the broken bridge
    await p.keyboard.down('ArrowRight'); await p.waitForSelector('.msgov', { timeout: 3000 }); await p.keyboard.up('ArrowRight');
    await choose(/fix|arregl|درست/i);
    await p.waitForFunction(() => !WW.paused, null, { timeout: 4000 });
    ok(await p.evaluate(([x, y]) => WW.game.tileAt(x, y) === 'b', br.at[0]), 'walked into the broken bridge and fixed it with Enter');
    // the other two people
    for (const n of E.npcs.slice(1)) {
      await walkTo(n.x, n.y); const d = (await st()).dir; await p.keyboard.down(ARROW[d]); await p.waitForTimeout(80); await p.keyboard.up(ARROW[d]);
      await p.waitForSelector('.talkov', { timeout: 3000 }).catch(async () => { throw new Error('no talk with ' + n.name + ' at ' + [n.x, n.y] + ' from ' + JSON.stringify(await st()) + ' hearts ' + await p.evaluate(() => WW.run.hearts)); });
      await throughPanels(new RegExp(n.ok.slice(0, 18).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
    }
    ok(await p.evaluate(() => WW.run.talked.size === 3), 'talked to all three people');
    // the quest: Tomas, Lena, the spot across the bridge, back to Tomas
    const q = E.q;
    const talk = async (x, y) => { await walkTo(x, y); const d = (await st()).dir; await p.keyboard.down(ARROW[d]); await p.waitForTimeout(80); await p.keyboard.up(ARROW[d]); await p.waitForTimeout(250); await throughPanels(); };
    await talk(q.giver.x, q.giver.y); await talk(q.contact.x, q.contact.y);
    await walkTo(q.action.at[0], q.action.at[1], true); await p.waitForTimeout(300); await throughPanels();
    await talk(q.giver.x, q.giver.y);
    ok(await p.evaluate(() => WW.run.quest === 4), 'did the quest by walking and talking');
    // the stone: take the signposts with Enter, place the first one where its words point
    await walkTo(E.stone[0], E.stone[1]); { const d = (await st()).dir; await p.keyboard.down(ARROW[d]); await p.waitForTimeout(80); await p.keyboard.up(ARROW[d]); }
    await p.waitForSelector('.chov', { timeout: 3000 });
    await choose(/take the signposts|toma los letreros|تابلوها را بگیر/i);
    await p.waitForFunction(() => !WW.paused);
    ok(await p.evaluate(() => WW.tools.selected() === 'sign'), 'took the signposts with Enter; the signpost is in hand');
    const held = await p.evaluate(() => { const h = WW.tools.heldSign(); return { id: h.s.id, ok: h.b.ok }; });
    await walkTo(held.ok[0][0], held.ok[0][1]);
    await key(' ');
    ok(await p.evaluate(id => WW.run.signs.find(s => s.id === id).right, held.id), 'placed a signpost in the right spot with Space');
  } catch (e) { if (!failed) { failed++; console.log('✗ ' + e.message.split('\n')[0]); } }
  ok(!errs.length || (console.log(errs), false), 'no page errors');
  await b.close(); console.log(failed ? failed + ' failed' : 'all good'); process.exitCode = failed ? 1 : 0;
})().catch(e => { console.log('✗ ' + e.message); process.exitCode = 1; });
