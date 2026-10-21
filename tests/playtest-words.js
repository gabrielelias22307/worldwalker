// node tests/playtest-words.js   (PLAYTEST-3) counts reading and checks answers a student could guess, for all 24 episodes
// Prints a table and writes shots/playtest/words.json. No browser needed.
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.join(__dirname, '..'), G = path.join(ROOT, 'game');
const OUT = path.join(ROOT, 'shots', 'playtest'); fs.mkdirSync(OUT, { recursive: true });
const strip = s => String(s || '').replace(/\[\[[^|\]]*\|([^\]]*)\]\]/g, '$1').replace(/<[^>]+>/g, ' ');
const words = s => strip(s).split(/\s+/).filter(w => /[\p{L}\p{N}]/u.test(w)).length;
const en = o => (o && typeof o === 'object' && 'en' in o) ? o.en : (typeof o === 'string' ? o : '');
const files = fs.readdirSync(path.join(G, 'episodes')).filter(f => /^ep-\d-\d\.js$/.test(f)).sort();
const rows = [];
for (const f of files) {
  const box = { window: {} }; vm.createContext(box); vm.runInContext(fs.readFileSync(path.join(G, 'episodes', f), 'utf8'), box);
  const ep = box.window.EPISODE;
  // every multiple-choice question: is the right answer the longest one (Jay clicks the longest)?
  const qs = [];
  const add = (where, q, choices, ok) => qs.push({ where, q: en(q), lens: choices.map(c => strip(en(c.t || c)).length), ok });
  ep.npcs.forEach(n => n.ask && add('person ' + en(n.name), n.ask.q, n.ask.choices, n.ask.choices.findIndex(c => c.ok)));
  (ep.boss.questions || []).forEach((q, i) => add('Grump ' + (i + 1), q.q, q.choices, q.answer));
  const a = ep.quest && ep.quest.action;
  if (a && a.questions) a.questions.forEach((q, i) => add('thief ' + (i + 1), q.q, q.choices, q.answer));
  if (a && a.type === 'trade' && a.choices && !a.choices.some(c => c.at)) add('trade', a.q, a.choices, a.choices.findIndex(c => c.ok));
  let longest = 0, clear = 0;
  qs.forEach(q => {
    const mx = Math.max(...q.lens), okLen = q.lens[q.ok], others = q.lens.filter((_, i) => i !== q.ok);
    q.longest = okLen === mx && others.every(l => l < mx); if (q.longest) longest++;
    q.clear = q.longest && okLen >= 1.3 * Math.max(...others); if (q.clear) clear++; // 30% longer than any other: easy to spot
  });
  const intro = (ep.intro || []).map(en);
  const people = ep.npcs.map(n => ({ name: en(n.name), read: (n.lines || []).reduce((s, l) => s + words(en(l)), 0) + words(en(n.ask && n.ask.q)) + (n.ask ? n.ask.choices.reduce((s, c) => s + words(en(c.t || c)), 0) : 0), boxes: (n.lines || []).map(l => words(en(l))) }));
  const boxes = [...intro.map(t => ({ w: words(t), t: 'intro' })), ...ep.npcs.flatMap(n => (n.lines || []).map(l => ({ w: words(en(l)), t: en(n.name) }))), ...(ep.christopher && ep.christopher.meet || []).map(l => ({ w: words(en(l)), t: 'Christopher meet' }))];
  const big = boxes.sort((x, y) => y.w - x.w)[0];
  const over15 = boxes.filter(b => b.w > 15).length;
  rows.push({ id: ep.id, quest: a ? a.type : '-', introWords: intro.reduce((s, t) => s + words(t), 0), meetWords: (ep.christopher && ep.christopher.meet || []).reduce((s, l) => s + words(en(l)), 0), peopleWords: people.reduce((s, p) => s + p.read, 0), longestBox: big, boxes: boxes.length, boxesOver15: over15, questions: qs.length, longestIsRight: longest, longestClear: clear, qs });
}
console.log('ep   quest  intro meet people  longest box            >15 words  qs  longest=right (clearly)');
for (const r of rows) console.log(`${r.id}  ${r.quest.padEnd(6)} ${String(r.introWords).padStart(4)} ${String(r.meetWords).padStart(4)} ${String(r.peopleWords).padStart(6)}   ${String(r.longestBox.w).padStart(3)} (${r.longestBox.t.slice(0, 14).padEnd(14)})  ${String(r.boxesOver15).padStart(2)}/${String(r.boxes).padEnd(3)}   ${String(r.questions).padStart(2)}  ${r.longestIsRight} (${r.longestClear})`);
const T = rows.reduce((s, r) => ({ q: s.q + r.questions, l: s.l + r.longestIsRight, c: s.c + r.longestClear, b: s.b + r.boxes, o: s.o + r.boxesOver15 }), { q: 0, l: 0, c: 0, b: 0, o: 0 });
console.log(`\nAll: ${T.q} questions; the right answer is the longest in ${T.l} (${Math.round(100 * T.l / T.q)}%), clearly longest in ${T.c} (${Math.round(100 * T.c / T.q)}%). Text boxes over 15 words: ${T.o} of ${T.b}.`);
fs.writeFileSync(path.join(OUT, 'words.json'), JSON.stringify({ rows, totals: T }, null, 1));
