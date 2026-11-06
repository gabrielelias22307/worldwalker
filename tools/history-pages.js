// node tools/history-pages.js   makes Timewalker's timeline page (history/index.html) and teacher page (history/teacher.html)
// from Worldwalker's (game/index.html, game/teacher.html), so the two games' pages stay the same: the paths point at the
// shared engine (../game/engine), history/course.js loads first, and the geography words become history words.
// tools/build.js history runs this too.
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.join(__dirname, '..');
const box = { window: {} }; vm.createContext(box); vm.runInContext(fs.readFileSync(path.join(ROOT, 'history', 'course.js'), 'utf8'), box);
const CO = box.window.WW_COURSE;
// the pages' own words first (longer first), then the course's swaps (the same ones the engine uses), in every language
const PAGE = [
  ['<title>Worldwalker · World Map</title>', '<title>Timewalker · Timeline</title>'], ['<title>Worldwalker · Teacher Console</title>', '<title>Timewalker · Teacher Console</title>'],
  ['>WORLDWALKER</a><span class="sub">THE TORN ATLAS</span>', '>TIMEWALKER</a><span class="sub">THE TORN CHRONICLE</span>'], ['>WORLDWALKER</a>', '>TIMEWALKER</a>'],
  ["'THE WORLD · 8 REALMS · 24 ATLAS PAGES'", "'1500 TO TODAY · 8 ERAS · 24 CHRONICLE PAGES'"], ["'EL MUNDO · 8 REINOS · 24 PÁGINAS'", "'DE 1500 A HOY · 8 ÉPOCAS · 24 PÁGINAS'"], ["'جهان · ۸ سرزمین · ۲۴ صفحه'", "'از ۱۵۰۰ تا امروز · ۸ دوره · ۲۴ صفحه'"],
  ["'Our class atlas'", "'Our class chronicle'"], ["'El atlas de nuestra clase'", "'La crónica de nuestra clase'"], ["'اطلس صنف ما'", "'تاریخ‌نامهٔ صنف ما'"],
  ['24 atlas pages', '24 chronicle pages'], ['🧭 Compass stone', '⏳ Time stone'], ['Compass stone', 'Time stone'], ['🧭 Piedra brújula', '⏳ Piedra del tiempo'], ['Piedra brújula', 'Piedra del tiempo'],
  ['🧭 سنگ قطب‌نما', '⏳ سنگ زمان'], ["'World map'", "'Timeline'"], ["'Mapa del mundo'", "'Línea del tiempo'"], ["'نقشهٔ جهان'", "'خط زمان'"],
  ['trozos del atlas', 'trozos de la crónica'], ['realm', 'era'], ['Realm', 'Era']];
const KEEP = /\.realm|class="realm|REALM_COL|WW\.REALMS|e\.realm|ep\.realm|style\.realm/; // code, not words: never swapped
function convert(src) {
  let s = src.replace(/href="engine\//g, 'href="../game/engine/').replace(/<script src="engine\//g, '<script src="../game/engine/')
    .replace('<script src="config.js"></script>', '<script src="course.js"></script>\n<script src="config.js"></script>');
  const swaps = [...PAGE, ...['en', 'es', 'fa'].flatMap(l => (CO.swaps && CO.swaps[l]) || [])];
  return s.split('\n').map(line => {
    if (KEEP.test(line) && !/:\s*\{\s*en:/.test(line)) return line; // a line of code about realms: leave it
    let out = line;
    swaps.forEach(([a, b]) => { if (a === 'realm' || a === 'Realm') { out = out.replace(/(?<![.\w])realm(?=s?\b)(?![:(=])/g, m => m === 'realm' ? 'era' : m); return; } out = out.split(a).join(b); });
    return out;
  }).join('\n');
}
for (const f of ['index.html', 'teacher.html']) fs.writeFileSync(path.join(ROOT, 'history', f), convert(fs.readFileSync(path.join(ROOT, 'game', f), 'utf8')));
console.log('history/index.html and history/teacher.html made from game/');
