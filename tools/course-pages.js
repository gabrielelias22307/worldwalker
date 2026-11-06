// node tools/course-pages.js history   makes a course's map page (history/index.html) and teacher page (history/teacher.html)
// from Worldwalker's (game/index.html, game/teacher.html), so every game's pages stay the same: the paths point at the
// shared engine (../game/engine), the course.js loads first, and the geography words become the course's words.
// The pages' own words live in the course folder's pages.js (a list of [old, new]; it is not sent to students).
// tools/build.js <folder> runs this too.
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.join(__dirname, '..');
function make(DIR) {
const box = { window: {} }; vm.createContext(box); vm.runInContext(fs.readFileSync(path.join(ROOT, DIR, 'course.js'), 'utf8'), box);
const CO = box.window.WW_COURSE;
// the pages' own words first (longer first), then the course's swaps (the same ones the engine uses), in every language
const PAGE = require(path.join(ROOT, DIR, 'pages.js'));
const KEEP = /\.realm|class="realm|REALM_COL|WW\.REALMS|e\.realm|ep\.realm|style\.realm/; // code, not words: never swapped
function convert(src) {
  let s = src.replace(/href="engine\//g, 'href="../game/engine/').replace(/<script src="engine\//g, '<script src="../game/engine/')
    .replace('<script src="config.js"></script>', '<script src="course.js"></script>\n<script src="config.js"></script>');
  const swaps = [...PAGE, ...['en', 'es', 'fa'].flatMap(l => (CO.swaps && CO.swaps[l]) || [])];
  return s.split('\n').map(line => {
    if (KEEP.test(line) && !/:\s*\{\s*en:/.test(line)) return line; // a line of code about realms: leave it
    let out = line;
    swaps.forEach(([a, b]) => { if (a === 'realm' || a === 'Realm') { out = out.replace(/(?<![.\w])realm(?=s?\b)(?![:(=])/g, m => m === 'realm' ? (a === 'realm' ? b : b.toLowerCase()) : m); return; } out = out.split(a).join(b); });
    return out;
  }).join('\n');
}
for (const f of ['index.html', 'teacher.html']) fs.writeFileSync(path.join(ROOT, DIR, f), convert(fs.readFileSync(path.join(ROOT, 'game', f), 'utf8')));
console.log(DIR + '/index.html and ' + DIR + '/teacher.html made from game/');
}
module.exports = make;
if (require.main === module) make(process.argv[2] || 'history');
