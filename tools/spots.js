// node tools/spots.js ep-2-1.js   prints the map with x/y rulers and what stands where, to help place quest people and spots
// @ start · 1-4 people · S stone · B Smudge · * scraps · m wandering Smudges · G quest giver · C contact · T trader · ! thief · ? secret spot
// Lower-case letters are the map tiles. A tile shown as a space is walkable AND reachable from the start (a good place to put things).
const fs = require('fs'), path = require('path'), vm = require('vm');
const { checkEpisode } = require('./check.js');
const f = path.resolve(path.join(__dirname, '..', 'game', 'episodes', process.argv[2] || 'ep-1-1.js'));
const box = { window: {} }; vm.createContext(box); vm.runInContext(fs.readFileSync(f, 'utf8'), box);
const ep = box.window.EPISODE, m = ep.map.map(r => r.split(''));
const ctx = { window: {} }; ctx.window.window = ctx.window; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(__dirname, '..', 'game/engine/art.js'), 'utf8'), ctx);
vm.runInContext('var WW = window.WW;' + fs.readFileSync(path.join(__dirname, '..', 'game/engine/art2.js'), 'utf8'), ctx);
const solid = ch => ctx.window.WW.solid(ch);
const H = m.length, W = m[0].length, mark = {};
const put = (p, ch) => { if (p) mark[p[0] + ',' + p[1]] = ch; };
put(ep.start, '@'); (ep.npcs || []).forEach((n, i) => put([n.x, n.y], String(i + 1)));
put(ep.challenge.at, 'S'); put(ep.boss.at, 'B'); (ep.scraps || []).forEach(s => put(s, '*')); (ep.smudges || []).forEach(s => put(s, 'm'));
const q = ep.quest;
if (q) { put([q.giver.x, q.giver.y], 'G'); put([q.contact.x, q.contact.y], 'C'); const a = q.action; if (a.type === 'trade') put([a.trader.x, a.trader.y], 'T'); if (a.type === 'fight') put(a.at, '!'); if (a.type === 'find') put(a.at, '?'); }
const seen = new Set([ep.start.join(',')]), queue = [ep.start];
const blocked = k => mark[k] && !'*m?B'.includes(mark[k]) && mark[k] !== '@';
while (queue.length) { const [x, y] = queue.shift(); for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) { const nx = x + dx, ny = y + dy, k = nx + ',' + ny; if (nx < 0 || ny < 0 || nx >= W || ny >= H || seen.has(k) || solid(m[ny][nx]) || blocked(k)) continue; seen.add(k); queue.push([nx, ny]); } }
let ruler = '    '; for (let x = 0; x < W; x++) ruler += x % 16 === 0 ? '|' : x % 2 === 0 ? String(x % 10) : ' ';
console.log(ruler);
for (let y = 0; y < H; y++) {
  let row = String(y).padStart(3) + (y % 11 === 0 ? '-' : ' ');
  for (let x = 0; x < W; x++) { const k = x + ',' + y; row += mark[k] || (seen.has(k) && !solid(m[y][x]) ? ' ' : m[y][x]); }
  console.log(row);
}
console.log(`\n${ep.id} ${ep.title.en}: ${W}x${H}, screens are 16 wide and 11 tall (rulers show | and - at screen edges)`);
const r = checkEpisode(f); console.log(r.errs.length ? 'check: ' + r.errs.join(' | ') : 'check: OK');
