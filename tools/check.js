// node tools/check.js [ep-1-1.js ...]   checks episode files: map, places you can reach, 3 languages, questions, challenge
const fs = require('fs'), path = require('path'), vm = require('vm');
const G = path.join(__dirname, '..', 'game');
// load the art so we know every tile letter and which ones are solid
const ctx = { window: {}, console, Math, performance: { now: () => 0 } };
ctx.window.window = ctx.window; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(G, 'engine', 'art.js'), 'utf8').replace(/window\./g, 'window.'), ctx);
ctx.WW = ctx.window.WW; vm.runInContext('var WW = window.WW;' + fs.readFileSync(path.join(G, 'engine', 'art2.js'), 'utf8'), ctx);
vm.runInContext('var WW = window.WW;' + fs.readFileSync(path.join(G, 'engine', 'art3.js'), 'utf8'), ctx); // stumps, bushes, broken bridges
const WW = ctx.window.WW;
const SW = 16, SH = 11;

function checkEpisode(file) {
  const errs = [], warns = [];
  const src = fs.readFileSync(file, 'utf8');
  const box = { window: {} }; vm.createContext(box);
  try { vm.runInContext(src, box); } catch (e) { return { errs: ['file does not run: ' + e.message], warns }; }
  const ep = box.window.EPISODE;
  if (!ep) return { errs: ['window.EPISODE is missing'], warns };
  const want = path.basename(file).slice(3, 6).replace('-', '.');
  if (ep.id !== want) errs.push(`id is "${ep.id}", file name says ${want}`);
  if (ep.realm !== +want[0]) errs.push('realm should be ' + want[0]);

  /* ---- languages ---- */
  const words = Object.keys(ep.words || {});
  function walk(o, where) {
    if (Array.isArray(o)) return o.forEach((v, i) => walk(v, where + '[' + i + ']'));
    if (!o || typeof o !== 'object') return;
    if ('en' in o) {
      for (const l of ['en', 'es', 'fa']) if (typeof o[l] !== 'string' || !o[l].trim()) errs.push(`${where}: missing ${l}`);
      if (typeof o.fa === 'string' && !/[؀-ۿ]/.test(o.fa)) errs.push(`${where}: fa is not in Dari script`);
      if (typeof o.es === 'string' && o.es === o.en && o.en.length > 24) warns.push(`${where}: es same as en`);
      for (const l of ['en', 'es', 'fa']) {
        const s = o[l] || '';
        (s.match(/\[\[([^\]|]+)(\|[^\]]+)?\]\]/g) || []).forEach(m => {
          const k = m.slice(2, -2).split('|')[0].trim().toLowerCase();
          if (!ep.words || !ep.words[k]) errs.push(`${where}.${l}: yellow word "${k}" has no meaning in words{}`);
        });
        if ((s.match(/\[\[/g) || []).length !== (s.match(/\]\]/g) || []).length) errs.push(`${where}.${l}: broken [[ ]]`);
      }
      if ((o.en || '').length > 460) warns.push(`${where}: English is long (${o.en.length} chars)`);
    }
    for (const k in o) if (k !== 'en' && k !== 'es' && k !== 'fa') walk(o[k], where + '.' + k);
  }
  walk(ep, 'ep');
  ['title', 'place'].forEach(k => { if (!ep[k]) errs.push('missing ' + k); });
  if (!Array.isArray(ep.intro) || !ep.intro.length) errs.push('intro[] missing');
  if (!Array.isArray(ep.learned) || ep.learned.length < 3) errs.push('learned[] needs 3 lines');
  if (!ep.reflect || !ep.reflect.q || !ep.reflect.starter) errs.push('reflect {q, starter} missing');
  for (const k in ep.words || {}) if (k !== k.toLowerCase()) errs.push(`words key "${k}" must be lower case`);

  /* ---- map ---- */
  const map = ep.map || [];
  const H = map.length, W = (map[0] || '').length;
  map.forEach((r, i) => { if (typeof r !== 'string' || r.length !== W) errs.push(`map row ${i} is ${r && r.length} long, row 0 is ${W}`); });
  if (W % SW || H % SH || !W) errs.push(`map is ${W}x${H}; width must be a multiple of 16 and height of 11`);
  map.forEach((r, y) => [...r].forEach((ch, x) => { if (!WW.tiles[ch]) errs.push(`map (${x},${y}) unknown tile "${ch}"`); }));
  if (errs.some(e => e.startsWith('map'))) return { errs, warns, ep };
  const tile = (x, y) => (map[y] || '')[x];
  const solid = (x, y) => x < 0 || y < 0 || x >= W || y >= H || WW.solid(tile(x, y));
  const blockers = new Map();
  const at = (p, what) => {
    if (!Array.isArray(p) || p.length !== 2) { errs.push(what + ' needs [x, y]'); return null; }
    const [x, y] = p; if (x < 0 || y < 0 || x >= W || y >= H) { errs.push(`${what} (${x},${y}) is off the map`); return null; }
    return p;
  };
  const place = (p, what, mustWalk, blocks) => {
    if (!at(p, what)) return;
    const key = p.join(',');
    if (blockers.has(key)) errs.push(`${what} and ${blockers.get(key)} are on the same tile (${key})`);
    if (mustWalk && solid(p[0], p[1])) errs.push(`${what} stands on a solid tile "${tile(p[0], p[1])}" at (${key})`);
    blockers.set(key, what); if (blocks) blocks.add(key);
  };
  const block = new Set();
  if (!at(ep.start, 'start')) return { errs, warns, ep };
  if (solid(...ep.start)) errs.push('start is on a solid tile');
  (ep.npcs || []).forEach((n, i) => place([n.x, n.y], `npc ${i} (${n.name && n.name.en})`, true, block));
  (ep.signs || []).forEach((s, i) => { place([s.x, s.y], 'sign ' + i, false, block); if (tile(s.x, s.y) !== 'x') errs.push(`sign ${i} must sit on an "x" tile`); });
  if (!ep.challenge) errs.push('challenge missing'); else place(ep.challenge.at, 'challenge stone', true, block);
  if (!ep.boss) errs.push('boss missing'); else place(ep.boss.at, 'boss', true, new Set());
  (ep.scraps || []).forEach((s, i) => place(s, 'scrap ' + i, true, new Set()));
  (ep.smudges || []).forEach((s, i) => {
    place(Array.isArray(s) ? s.slice(0, 2) : s, 'bad guy ' + i, true, new Set());
    if (s[2] && !['grump', 'bat', 'blob', 'whirl'].includes(s[2])) errs.push(`bad guy ${i} type "${s[2]}" must be grump, bat, blob or whirl`);
  });
  if ((ep.smudges || []).length < 1 || (ep.smudges || []).length > 3) errs.push('need 1 to 3 bad guys (smudges)');
  if ((ep.scraps || []).length !== 3) errs.push('need exactly 3 scraps');
  if ((ep.npcs || []).length < 3) errs.push('need at least 3 people (npcs)');
  const qu = ep.quest, qa = qu && qu.action;
  if (!qu) errs.push('quest missing (giver -> contact -> action -> back to giver)');
  else {
    ['giver', 'contact'].forEach(k => { const p = qu[k]; if (!p) errs.push('quest.' + k + ' missing'); else place([p.x, p.y], 'quest ' + k, true, block); });
    if (!qa) errs.push('quest.action missing');
    else if (qa.type === 'trade') { if (!qa.trader) errs.push('quest trade needs a trader'); else place([qa.trader.x, qa.trader.y], 'quest trader', true, block); }
    else if (qa.type === 'fight') place(qa.at, 'quest thief', true, block);
    else if (qa.type === 'find') place(qa.at, 'quest secret spot', true, new Set());
    else errs.push('quest.action.type must be find, fight or trade');
  }
  /* ---- the compass stone in the world: its things on the map ---- */
  const c0w = ep.challenge || {};
  { const list = c0w.type === 'route' ? c0w.items : c0w.type === 'site' ? c0w.options : c0w.type === 'levers' ? c0w.switches : null;
    if (list) { if ((c0w.spots || []).length !== list.length) errs.push(`${c0w.type} needs one spot in spots for each ${c0w.type === 'route' ? 'item' : c0w.type === 'site' ? 'option' : 'switch'}`); list.forEach((o, i) => { o.at = o.at || (c0w.spots || [])[i]; }); } }
  if (c0w.type === 'route') (c0w.items || []).forEach((it, i) => it.at ? place(it.at, 'route stop ' + i, true, block) : errs.push(`route item ${i} needs at: [x, y]`));
  if (c0w.type === 'site') (c0w.options || []).forEach((o, i) => o.at ? place(o.at, 'site ' + i, true, block) : errs.push(`site option ${i} needs at: [x, y]`));
  if (c0w.type === 'survey') {
    if (!c0w.table || (c0w.spots || []).length !== (c0w.table.rows || []).length) errs.push('survey needs one spot in spots for every table row');
    (c0w.spots || []).forEach((p, i) => place(p, 'survey post ' + i, true, block));
  }
  if (c0w.type === 'levers') (c0w.switches || []).forEach((sw, i) => sw.at ? place(sw.at, 'lever ' + i, true, block) : errs.push(`lever ${i} needs at: [x, y]`));
  /* ---- the secret only an earned tool reaches ---- */
  const TOOL_EP = { compass: '1.3', canoe: '2.3', rail: '3.3', gourd: '4.3', key: '5.3', cloak: '6.3', seal: '7.3', sail: '8.2' };
  const sec = ep.secret;
  const hasG = map.some(r => r.includes('G'));
  if (sec) {
    if (!TOOL_EP[sec.tool]) errs.push(`secret.tool "${sec.tool}" is not a tool`);
    else if (!(parseFloat(TOOL_EP[sec.tool]) < parseFloat(ep.id))) errs.push(`secret.tool ${sec.tool} is earned in ${TOOL_EP[sec.tool]}, not before this episode`);
    if (!sec.text) errs.push('secret needs text');
    if (sec.at) place(sec.at, 'secret chest', true, block);
    if (!['canoe', 'sail'].includes(sec.tool) && !hasG) errs.push('secret needs a tool gate tile "G" in the map');
  } else if (hasG) errs.push('the map has a tool gate "G" but no secret');
  /* ---- finds: a clue note and a hidden spot ---- */
  const FIND_DECOR = ['shell', 'gem', 'fossil', 'vase', 'drum', 'flower', 'coinold', 'feather'];
  (ep.finds || []).forEach((f, i) => {
    if (!f.clue || !f.text) errs.push(`find ${i} needs clue and text`);
    if (f.decor && !FIND_DECOR.includes(f.decor)) errs.push(`find ${i} decor "${f.decor}" must be one of ${FIND_DECOR.join(', ')}`);
    if (f.clueAt) place(f.clueAt, 'find ' + i + ' clue note', true, block); else errs.push(`find ${i} needs clueAt`);
    if (f.at) place(f.at, 'find ' + i + ' hidden spot', true, new Set()); else errs.push(`find ${i} needs at`);
  });
  [...(ep.npcs || []), ...(ep.quest ? [ep.quest.giver, ep.quest.contact] : [])].forEach((n, i) => {
    if (n && n.remember) { if (!/^\d\.\d$/.test(n.remember.ep || '') || !(parseFloat(n.remember.ep) < parseFloat(ep.id))) errs.push(`${n.name && n.name.en}: remember.ep must be an earlier episode`); if (!n.remember.t) errs.push(`${n.name && n.name.en}: remember needs t`); }
  });
  if (block.has(ep.start.join(','))) errs.push('start is on top of something');
  // reach: walk from start (fixed: tiles a repair turns walkable count as fixed)
  const reach = (fixed, pass) => {
    const seen = new Set([ep.start.join(',')]); const q = [ep.start];
    while (q.length) {
      const [x, y] = q.shift();
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const nx = x + dx, ny = y + dy, k = nx + ',' + ny;
        if (seen.has(k) || (solid(nx, ny) && !fixed.has(k) && !(pass && nx >= 0 && ny >= 0 && nx < W && ny < H && pass.includes(tile(nx, ny)))) || block.has(k)) continue;
        seen.add(k); q.push([nx, ny]);
      }
    }
    return seen;
  };
  const repairs = (ep.build || []).filter(b => b.kind === 'repair');
  const before = reach(new Set());
  const fixedAll = new Set(repairs.flatMap(b => (b.at || []).map(p => p.join(','))));
  const seen = reach(fixedAll);
  if (sec && sec.at && TOOL_EP[sec.tool]) {
    const pass = sec.tool === 'sail' ? '~=G' : sec.tool === 'canoe' ? '~G' : 'G';
    const near = (set, [x, y]) => [[1, 0], [-1, 0], [0, 1], [0, -1]].some(([dx, dy]) => set.has((x + dx) + ',' + (y + dy)));
    // without any tool you cannot get to it, but with this tool you can (other tools may open other ways; that is fine)
    if (near(seen, sec.at)) errs.push('the secret chest can be reached without the tool');
    if (!near(reach(fixedAll, pass), sec.at)) errs.push(`the secret chest cannot be reached even with the ${sec.tool}`);
  }
  const nextTo = ([x, y]) => [[1, 0], [-1, 0], [0, 1], [0, -1]].some(([dx, dy]) => seen.has((x + dx) + ',' + (y + dy)));
  (ep.npcs || []).forEach((n, i) => { if (!nextTo([n.x, n.y])) errs.push(`npc ${i} cannot be reached`); });
  (ep.signs || []).forEach((s, i) => { if (!nextTo([s.x, s.y])) errs.push(`sign ${i} cannot be reached`); });
  if (ep.challenge && !nextTo(ep.challenge.at)) errs.push('challenge stone cannot be reached');
  if (ep.boss && !seen.has(ep.boss.at.join(',')) && !nextTo(ep.boss.at)) errs.push('boss cannot be reached');
  (ep.scraps || []).forEach((s, i) => { if (!seen.has(s.join(','))) errs.push(`scrap ${i} cannot be reached`); });
  if (qu) {
    ['giver', 'contact'].forEach(k => { if (qu[k] && !nextTo([qu[k].x, qu[k].y])) errs.push(`quest ${k} cannot be reached`); });
    if (qa && qa.type === 'trade' && qa.trader && !nextTo([qa.trader.x, qa.trader.y])) errs.push('quest trader cannot be reached');
    if (qa && qa.type === 'fight' && qa.at && !nextTo(qa.at)) errs.push('quest thief cannot be reached');
    if (qa && qa.type === 'find' && qa.at && !seen.has(qa.at.join(','))) errs.push('quest secret spot cannot be reached');
    if (qa && qa.type === 'find' && qa.at && qa.at.join(',') === ep.start.join(',')) errs.push('quest secret spot is the start tile');
    const scr = p => p && Math.floor(p.x / SW) + ',' + Math.floor(p.y / SH);
    if (qu.giver && qu.contact && scr(qu.giver) === scr(qu.contact)) warns.push('quest giver and contact are on the same screen; spreading them out makes the quest a real trip');
  }
  (ep.finds || []).forEach((f, i) => {
    if (f.clueAt && !nextTo(f.clueAt)) errs.push(`find ${i} clue note cannot be reached`);
    if (f.at && !seen.has(f.at.join(','))) errs.push(`find ${i} hidden spot cannot be reached (without tools)`);
    if (f.at && f.at.join() === ep.start.join()) errs.push(`find ${i} hidden spot is the start tile`);
  });
  if (c0w.type === 'route') (c0w.items || []).forEach((it, i) => { if (it.at && !nextTo(it.at)) errs.push(`route stop ${i} cannot be reached`); });
  if (c0w.type === 'site') (c0w.options || []).forEach((o, i) => { if (o.at && !nextTo(o.at)) errs.push(`site ${i} cannot be reached`); });
  if (c0w.type === 'survey') (c0w.spots || []).forEach((p, i) => { if (!nextTo(p)) errs.push(`survey post ${i} cannot be reached`); });
  if (c0w.type === 'levers') (c0w.switches || []).forEach((sw, i) => { if (sw.at && !nextTo(sw.at)) errs.push(`lever ${i} cannot be reached`); });
  if (c0w.type === 'carry') {
    const zs = c0w.zones || [], cover = new Map();
    (c0w.bins || []).forEach(b => {
      const tiles = zs.filter(z => z.bin === b.id).flatMap(z => { const o = []; for (let y = z.y; y < z.y + z.h; y++) for (let x = z.x; x < z.x + z.w; x++) o.push(x + ',' + y); return o; });
      const open = tiles.filter(k => seen.has(k) && !blockers.has(k)).length, need = (c0w.items || []).filter(it => it.bin === b.id).length;
      if (!tiles.length) errs.push(`carry: bin "${b.id}" has no zone`);
      else if (open < need + 1) errs.push(`carry: zone for "${b.id}" has ${open} open tiles you can reach; it needs at least ${need + 1}`);
    });
    zs.forEach((z, i) => {
      if (!(c0w.bins || []).some(b => b.id === z.bin)) errs.push(`carry zone ${i} bin "${z.bin}" is not a bin`);
      for (let y = z.y; y < z.y + z.h; y++) for (let x = z.x; x < z.x + z.w; x++) { const k = x + ',' + y; if (cover.has(k)) errs.push(`carry zones ${cover.get(k)} and ${i} overlap at (${k})`); cover.set(k, i); }
    });
  }

  /* ---- tools and build list ---- */
  (ep.tools || []).forEach(t => { if (!['axe', 'sickle'].includes(t)) errs.push(`tool "${t}" must be axe or sickle`); });
  if (ep.christopher && ep.christopher.meet && !(ep.christopher.meet.length >= 2 && ep.christopher.meet.length <= 3)) warns.push('christopher.meet should be 2 or 3 short lines');
  const ids = new Set();
  (ep.build || []).forEach((b, i) => {
    const w = `build ${i} (${b.id})`;
    if (!b.id) errs.push(`build ${i} needs an id`); else if (ids.has(b.id)) errs.push(`${w}: id is used twice`); else ids.add(b.id);
    Object.keys(b.cost || {}).forEach(k => { if (!['wood', 'fiber'].includes(k)) errs.push(`${w}: cost "${k}" must be wood or fiber`); });
    if (Object.keys(b.cost || {}).length && !(ep.tools || []).length) errs.push(`${w} costs wood or fiber, but the episode has no tools`);
    if (b.kind === 'repair') {
      if (!b.name || !b.ask || !b.done) errs.push(`${w}: a repair needs name, ask and done`);
      if (!(b.at || []).length) errs.push(`${w}: a repair needs at: [[x, y], ...]`);
      if (!WW.tiles[b.tile] || WW.solid(b.tile)) errs.push(`${w}: tile "${b.tile}" must be a walkable tile`);
      (b.at || []).forEach(p => { if (at(p, w) && !solid(p[0], p[1])) errs.push(`${w}: (${p}) is not broken (it is already walkable)`); });
      if (!(b.at || []).some(([x, y]) => [[1, 0], [-1, 0], [0, 1], [0, -1]].some(([dx, dy]) => before.has((x + dx) + ',' + (y + dy))))) errs.push(`${w}: you cannot walk up to it before it is fixed`);
    } else if (b.kind === 'signpost') {
      if (!b.text || !b.why) errs.push(`${w}: a signpost needs text and why`);
      if (!(b.ok || []).length) errs.push(`${w}: a signpost needs ok: [[x, y], ...]`);
      (b.ok || []).forEach(p => {
        if (!at(p, w)) return; const k = p.join(',');
        if (solid(p[0], p[1]) || blockers.has(k)) errs.push(`${w}: right spot (${k}) is not open ground`);
        else if (!seen.has(k)) errs.push(`${w}: right spot (${k}) cannot be reached`);
      });
    } else errs.push(`${w}: kind must be repair or signpost`);
  });

  // screens used
  const screens = new Set([...seen].map(k => { const [x, y] = k.split(',').map(Number); return Math.floor(x / SW) + ',' + Math.floor(y / SH); }));
  const total = (W / SW) * (H / SH);
  if (screens.size < total) warns.push(`only ${screens.size} of ${total} screens can be walked into`);

  /* ---- people ---- */
  (ep.npcs || []).forEach((n, i) => {
    if (!n.lines || n.lines.length < 2) errs.push(`npc ${i} needs at least 2 lines`);
    if (!n.ask) errs.push(`npc ${i} needs an ask`); else {
      const oks = n.ask.choices.filter(c => c.ok).length;
      if (oks !== 1) errs.push(`npc ${i} ask needs exactly 1 ok choice (has ${oks})`);
      if (n.ask.choices.length < 3) errs.push(`npc ${i} ask needs 3+ choices`);
      if (!['loc', 'pla', 'hei', 'mov', 'reg'].includes(n.ask.stat)) errs.push(`npc ${i} ask.stat must be loc/pla/hei/mov/reg`);
      n.ask.choices.forEach((c, k) => { if (!c.why) errs.push(`npc ${i} choice ${k} needs a why`); });
    }
    if (!n.look) warns.push(`npc ${i} has no look`);
  });

  /* ---- quest ---- */
  if (qu) {
    if (!['loc', 'pla', 'hei', 'mov', 'reg'].includes(qu.stat)) errs.push('quest.stat must be loc/pla/hei/mov/reg');
    if (!qu.title) errs.push('quest.title missing');
    const g = qu.giver || {}, c = qu.contact || {};
    if (!g.name || !g.role || !g.look) errs.push('quest.giver needs name, role, look');
    if (!g.lines || g.lines.length < 2) errs.push('quest.giver needs 2+ lines');
    if (!g.wait || !g.thanks) errs.push('quest.giver needs wait and thanks');
    if (!c.name || !c.role || !c.look) errs.push('quest.contact needs name, role, look');
    if (!c.lines || c.lines.length < 2) errs.push('quest.contact needs 2 lines (the last one is repeated as the reminder)');
    if (qa && qa.type === 'find') { if (!qa.hint || !qa.found) errs.push('quest find needs hint and found'); }
    if (qa && qa.type === 'fight') {
      if (!qa.name || !qa.taunt || !qa.win) errs.push('quest fight needs name, taunt, win');
      if (!qa.questions || qa.questions.length < 3) errs.push('quest fight needs 3+ questions');
      if ((qa.need || 2) > (qa.questions || []).length - 1) errs.push('quest fight need is too big');
      (qa.questions || []).forEach((qq, i) => {
        if (!qq.choices || qq.choices.length < 3) errs.push(`quest fight q${i} needs 3-4 choices`);
        if (!(qq.answer >= 0 && qq.answer < (qq.choices || []).length)) errs.push(`quest fight q${i} answer index is wrong`);
        if (!qq.why) errs.push(`quest fight q${i} needs a why`);
      });
    }
    if (qa && qa.type === 'trade') {
      const t = qa.trader || {};
      if (!t.name || !t.role || !t.look || !t.lines || !t.lines.length) errs.push('quest trader needs name, role, look, lines');
      if (!qa.q) errs.push('quest trade needs q');
      const oks = (qa.choices || []).filter(x => x.ok).length;
      if (oks !== 1) errs.push(`quest trade needs exactly 1 ok choice (has ${oks})`);
      if ((qa.choices || []).length < 3) errs.push('quest trade needs 3+ choices');
      (qa.choices || []).forEach((x, k) => { if (!x.why) errs.push(`quest trade choice ${k} needs a why`); });
    }
    if (qa && qa.item && (!qa.item.name || !qa.item.icon)) errs.push('quest action item needs icon and name');
  }

  /* ---- boss ---- */
  const b = ep.boss || {};
  if (!b.questions || b.questions.length < 6) errs.push('boss needs 6+ questions');
  (b.questions || []).forEach((qq, i) => {
    if (!qq.choices || qq.choices.length < 3) errs.push(`boss q${i} needs 3-4 choices`);
    if (!(qq.answer >= 0 && qq.answer < (qq.choices || []).length)) errs.push(`boss q${i} answer index is wrong`);
    if (!qq.why) errs.push(`boss q${i} needs a why`);
  });
  if ((b.need || 3) > (b.questions || []).length - 2) errs.push('boss.need is too big for the number of questions');
  ['name', 'win', 'taunt', 'appear'].forEach(k => { if (!b[k]) errs.push('boss.' + k + ' missing'); });

  /* ---- challenge ---- */
  const c0 = ep.challenge || {};
  if (!['loc', 'pla', 'hei', 'mov', 'reg'].includes(c0.stat)) errs.push('challenge.stat must be loc/pla/hei/mov/reg');
  if (!c0.title || !c0.intro || !c0.success) errs.push('challenge needs title, intro, success');
  let c = c0;
  const BASE = { carry: 'sort', route: 'order', site: 'claim', survey: 'table', levers: 'combo' };
  if (BASE[c0.type]) c = Object.assign({}, c0, { type: BASE[c0.type] }); // the card version uses the same data
  else if (c0.type === 'build') {
    const signs = (c0.items || []).map(id => (ep.build || []).find(b => b.id === id));
    if (signs.length < 2) errs.push('build challenge needs 2+ items (signpost ids from build)');
    signs.forEach((b, i) => { if (!b || b.kind !== 'signpost') errs.push(`build challenge item ${i} "${c0.items[i]}" is not a signpost in build`); });
    const g = c0.grid;
    if (g) {
      if (!(g.rows || []).length || !(g.cols || []).length) errs.push('challenge.grid needs rows and cols');
      else for (let y = g.y; y < g.y + g.rows.length; y++) for (let x = g.x; x < g.x + g.cols.length; x++) if (solid(x, y) || blockers.has(x + ',' + y)) errs.push(`challenge.grid (${x},${y}) is not open ground`);
    }
    signs.forEach(b => { if (b && b.grid) { if (!g) errs.push(`signpost ${b.id} uses the grid, but challenge.grid is missing`); else (b.ok || []).forEach(([x, y]) => { if (x < g.x || y < g.y || x >= g.x + g.cols.length || y >= g.y + g.rows.length) errs.push(`signpost ${b.id}: (${x},${y}) is outside the grid`); }); } });
    if (!c0.fallback) { warns.push('build challenge has no card fallback'); c = null; }
    else c = Object.assign({}, c0, c0.fallback); // the card version is checked like any other challenge
  }
  if (!c) { /* nothing more */ } else if (c.type === 'sort') {
    const ids = (c.bins || []).map(x => x.id);
    if (ids.length < 2) errs.push('sort needs 2+ bins');
    if ((c.items || []).length < 5) errs.push('sort needs 5+ items');
    (c.items || []).forEach((it, i) => { if (!ids.includes(it.bin)) errs.push(`sort item ${i} bin "${it.bin}" is not a bin id`); });
    if (c.style === 'bands') (c.bins || []).forEach((bn, i) => { if (bn.tile && !WW.tiles[bn.tile]) errs.push(`bin ${i} tile "${bn.tile}" unknown`); });
    ids.forEach(id => { if (!(c.items || []).some(it => it.bin === id)) warns.push(`bin ${id} has no items`); });
  } else if (c.type === 'order') {
    if ((c.items || []).length < 4) errs.push('order needs 4+ items');
    if (!c.why) errs.push('order needs a why (shown when the order is wrong)');
  } else if (c.type === 'claim') {
    const kinds = (c.kinds || []).map(k => k.id);
    if ((c.options || []).length < 2) errs.push('claim needs 2+ options');
    if (!kinds.length) errs.push('claim needs kinds');
    (c.reasons || []).forEach((r, i) => {
      if (!kinds.includes(r.kind)) errs.push(`claim reason ${i} kind "${r.kind}" unknown`);
      if (!Array.isArray(r.fits)) errs.push(`claim reason ${i} needs fits: [option numbers]`);
      else r.fits.forEach(f => { if (!(f >= 0 && f < c.options.length)) errs.push(`claim reason ${i} fits ${f} is not an option`); });
    });
    const solvable = (c.options || []).some((o, oi) => kinds.every(k => (c.reasons || []).some(r => r.kind === k && r.fits && r.fits.includes(oi))));
    if (!solvable) errs.push('claim: no option can be backed up with one reason of every kind');
    kinds.forEach(k => { if ((c.reasons || []).filter(r => r.kind === k).length < 3) warns.push(`claim kind ${k} has fewer than 3 reasons`); });
  } else if (c.type === 'combo') {
    if (!(c.switches || []).length) errs.push('combo needs switches');
    const keys = Object.keys(c.results || {});
    keys.forEach(k => { const parts = k.split(',').map(Number); if (parts.length !== c.switches.length || parts.some((v, i) => !(v >= 0 && v < c.switches[i].states.length))) errs.push(`combo result key "${k}" does not match the switches`); });
    if (!keys.some(k => c.results[k].ok)) errs.push('combo needs at least one ok result');
    if (!c.otherwise) warns.push('combo has no "otherwise" result');
  } else if (c.type === 'table') {
    if (!c.table || !c.table.head || !c.table.rows) errs.push('table needs table {head, rows}');
    else c.table.rows.forEach((r, i) => { if (r.length !== c.table.head.length) errs.push(`table row ${i} has ${r.length} cells, head has ${c.table.head.length}`); });
    if ((c.questions || []).length < 3) errs.push('table needs 3+ questions');
    (c.questions || []).forEach((qq, i) => { if (!(qq.answer >= 0 && qq.answer < qq.choices.length)) errs.push(`table q${i} answer index is wrong`); if (!qq.why) errs.push(`table q${i} needs a why`); });
  } else errs.push('challenge.type must be sort, order, claim, combo, table, build, carry, route, site, survey or levers' + (c0.type === 'build' ? ' (the fallback too)' : ''));
  return { errs, warns, ep };
}

if (require.main === module) {
const files = process.argv.slice(2).length ? process.argv.slice(2).map(f => path.resolve(f.includes('/') ? f : path.join(G, 'episodes', f)))
  : fs.readdirSync(path.join(G, 'episodes')).filter(f => /^ep-\d-\d\.js$/.test(f)).sort().map(f => path.join(G, 'episodes', f));
let bad = 0;
for (const f of files) {
  const { errs, warns } = checkEpisode(f);
  console.log(`${path.basename(f)}: ${errs.length ? errs.length + ' problem(s)' : 'OK'}${warns.length ? ', ' + warns.length + ' note(s)' : ''}`);
  errs.forEach(e => console.log('   ✗ ' + e));
  warns.forEach(w => console.log('   · ' + w));
  if (errs.length) bad++;
}
process.exitCode = bad ? 1 : 0;
}
module.exports = { checkEpisode };
