// node tools/build.js           ->  game/ep-X-Y.html (GitHub Pages) + dist/canvas/Worldwalker X.Y.html (one file for Canvas)
// node tools/build.js history   ->  history/ep-X-Y.html + dist/canvas-history/Timewalker X.Y.html (the same engine, history/course.js first)
// node tools/build.js gov       ->  gov/ep-X-Y.html + dist/canvas-gov/Civicwalker X.Y.html (any folder with a course.js works the same way)
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..'), E = path.join(ROOT, 'game'); // the engine always lives in game/engine
const GAME = process.argv[2] || 'game', G = path.join(ROOT, GAME), HIST = GAME !== 'game';
const NAME = require('./course-info.js')(GAME).name, DIST = path.join(ROOT, 'dist', HIST ? 'canvas-' + GAME : 'canvas'); // the game's name comes from its course file
const course = HIST ? fs.readFileSync(path.join(G, 'course.js'), 'utf8') : '';
const IMG = HIST && fs.existsSync(path.join(G, 'images.js')), images = IMG ? fs.readFileSync(path.join(G, 'images.js'), 'utf8') : '';
const VIL = HIST && fs.existsSync(path.join(G, 'village.js')), village = VIL ? fs.readFileSync(path.join(G, 'village.js'), 'utf8') : ''; // the Village of Ages (its tech list is part of the Passport Code) // public-domain pictures (HistoryWalker)
if (HIST) require('./course-pages.js')(GAME); // the course's map page and teacher page, made from Worldwalker's
const ENGINE = ['art.js', 'art2.js', 'art3.js', 'hd.js', 'hw.js', 'save.js', 'ui.js', 'challenges.js', 'music.js', 'fx.js', 'quest.js', 'foes.js', 'christopher.js', 'chrisface.js', 'way.js', 'scene.js', 'rooms.js', 'tools.js', 'world.js', 'camp.js', 'farm.js', 'hub.js', 'village.js', 'game.js'];
// hd.js (the HD look) and hub.js (the one-file world map) only matter to a course with `hd: true` (HistoryWalker): the
// other games leave them out and stay under the Canvas limit
const CO_ = require('./course-info.js')(GAME).course || {};
// hd.js (the HD look) ships with `hd: true` (HistoryWalker) and `look: 'hd'` (a Canvas game with the HD look); hw.js
// (HistoryWalker's extras), hub.js (the one-file world map) and village.js only with `hd: true`
if (!CO_.hd) ENGINE.splice(0, ENGINE.length, ...ENGINE.filter(f => !['hw.js', 'hub.js', 'village.js'].includes(f) && (f !== 'hd.js' || CO_.look === 'hd' || require('./course-info.js')(GAME).config.LOOK === 'hd')));
// farm.js (planting, building in place, seasons) only when some episode uses them; otherwise a tiny stand-in
if (!CO_.hd && !fs.readdirSync(path.join(G, 'episodes')).filter(f => /^ep-\d-\d\.js$/.test(f)).some(f => /\bplant\s*:|kind\s*:\s*'place'|\bseasons\s*:/.test(fs.readFileSync(path.join(G, 'episodes', f), 'utf8'))))
  ENGINE.splice(ENGINE.indexOf('farm.js'), 1, 'farm-none.js');
const LIMIT = (require('./course-info.js')(GAME).course || {}).hd ? Infinity : 430000; // HistoryWalker ships as one file with no size limit // Canvas stops running JavaScript in files over ~450 KB
const tpl = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf8');
const read = p => fs.readFileSync(p, 'utf8');
const { slimCss } = require('./slim.js'); // the Canvas file has no comments or indentation, to stay under the limit
let terser; // shortens the engine code's inside names too (run "npm install" once to get it)
try { terser = require('terser'); } catch (e) { console.log('terser is missing: run "npm install" once, then build again'); process.exit(1); }
const shorten = async js => (await terser.minify(js, { compress: false, mangle: true, format: { ascii_only: false, comments: false } })).code + '\n';
// the engine (and the course file) for a Canvas file: also folds and drops what it can (the size limit); episodes stay as before
const squeeze = async js => (await terser.minify(js, { compress: { passes: 2, keep_fnames: false, keep_infinity: true }, mangle: true, format: { ascii_only: false, comments: false } })).code + '\n';
const inline = js => js.replace(/<\/script/gi, '<\\/script');
const eps = fs.readdirSync(path.join(G, 'episodes')).filter(f => /^ep-\d-\d\.js$/.test(f)).sort();
const only = process.argv.slice(3).map(id => 'ep-' + id.replace('.', '-') + '.js'); // node tools/build.js history 3.1 3.2: build only these (the catalog still lists all)
const built = only.length ? eps.filter(f => only.includes(f)) : eps;
fs.mkdirSync(DIST, { recursive: true });
// the CSS packed tight: no line breaks, no spaces around { } ; , and no last ; before } (quoted text is kept as is)
const tightCss = css => css.split(/('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*")/).map((part, i) => i % 2 ? part : part
  .replace(/\s+/g, ' ').replace(/\s*([{};,])\s*/g, '$1').replace(/;}/g, '}')).join('').trim();
const css = tightCss(slimCss(read(path.join(E, 'engine', 'style.css'))));
(async () => {
// each game draws only its own guide (compass, hourglass, bell, pig, lantern, owl): the checks for the others become
// false here, and the squeeze drops the drawings they guarded
const ownGuide = js => js.replace(/WW\.COURSE && WW\.COURSE\.guide === '(\w+)'/g, (m, g) => (CO_.guide || '') === g ? 'true' : 'false')
  .replace(/\(?WW\.COURSE && WW\.COURSE\.(recall|hd|guideSmall|bossNeed|reflectCheck|village)\b(?![\w(])/g, (m, k) => CO_[k] ? m : (m[0] === '(' ? '(false' : 'false')); // HistoryWalker-only switches
// the HD look in a Canvas game: its episodes have no ep.style, so every house is the default (europe) style. The other
// places' roofs, walls, windows and doors (HistoryWalker's) become false here and the squeeze drops their drawing code.
const REGION = ['china', 'chinaGreen', 'japan', 'islam', 'ottoman', 'india', 'sahel', 'swahili', 'andes', 'mesoamerica', 'steppe', 'lead', 'dome', 'felt', 'flat', 'mudflat',
  'wood', 'white', 'sandstone', 'mud', 'coral', 'inca', 'stucco', 'lattice', 'arch', 'jali', 'hole', 'trap', 'red', 'carved', 'brick', 'sand', 'mudwall', 'redwall', 'tilework'];
const usesStyle = !CO_.hd && fs.readdirSync(path.join(G, 'episodes')).filter(f => /^ep-\d-\d\.js$/.test(f)).some(f => /^\s{2}style\s*:/m.test(fs.readFileSync(path.join(G, 'episodes', f), 'utf8')));
const europeOnly = (f, js) => f !== 'hd.js' || CO_.hd || usesStyle ? js : js
  .replace(/\bkind === '(\w+)'/g, (m, k) => REGION.includes(k) ? 'false' : m)
  .replace(/^ {4}(\w+): \{ roof:[^\n]*\n/gm, (m, k) => k === 'europe' ? m : '');
const engineJs = (await Promise.all(ENGINE.map(f => squeeze(europeOnly(f, ownGuide(read(path.join(E, 'engine', f)))))))).join(';\n');
const courseJs = HIST ? await squeeze(course) : '';
const cfg = read(path.join(G, 'config.js'));
const report = [];
const epJs = {};
for (const f of built) epJs[f] = await shorten(read(path.join(G, 'episodes', f)));
for (const f of built) {
  const id = f.slice(3, 6).replace('-', '.');
  // GitHub Pages version: shares the engine files
  const pages = tpl.replace('{{ID}}', id)
    .replace('{{STYLE}}', () => `<link rel="stylesheet" href="${HIST ? '../game/' : ''}engine/style.css">`)
    .replace('{{SCRIPTS}}', () => [...(HIST ? ['course.js'] : []), ...(IMG ? ['images.js'] : []), ...(VIL ? ['village.js'] : []), 'config.js', ...ENGINE.map(e => (HIST ? '../game/' : '') + 'engine/' + e), 'episodes/' + f].map(s => `<script src="${s}"></script>`).join('\n'));
  fs.writeFileSync(path.join(G, f.replace('.js', '.html')), pages);
  // Canvas version: everything inside one file
  const one = tpl.replace('{{ID}}', id)
    .replace('{{STYLE}}', () => `<style>\n${css}\n</style>`)
    .replace('{{SCRIPTS}}', () => `<script>\n${HIST ? inline(courseJs) + '\n' : ''}${IMG ? inline(images) + '\n' : ''}${VIL ? inline(village) + '\n' : ''}${inline(cfg)}\nwindow.WW_CONFIG.MODE = 'canvas';\n</script>\n<script>\n${inline(engineJs)}\n</script>\n<script>\n${inline(epJs[f])}\n</script>`);
  const out = path.join(DIST, `${NAME} ${id}.html`);
  fs.writeFileSync(out, one);
  const size = Buffer.byteLength(one);
  report.push(`${id}  ${(size / 1024).toFixed(0)} KB${size > LIMIT ? '  ** OVER THE CANVAS LIMIT **' : ''}`);
  if (size > LIMIT) process.exitCode = 1;
}
// catalog of titles for the world map page
const vm = require('vm');
const catalog = eps.map(f => { try { const box = { window: {} }; vm.createContext(box); vm.runInContext(read(path.join(G, 'episodes', f)), box); const e = box.window.EPISODE; return { id: e.id, realm: e.realm, title: e.title, place: e.place, sol: e.sol }; } catch (err) { console.log('catalog: could not read ' + f); return null; } }).filter(Boolean);
fs.writeFileSync(path.join(G, 'episodes', 'catalog.js'), '/* made by tools/build.js */\nwindow.WW_CATALOG = ' + JSON.stringify(catalog, null, 1) + ';\n');
// paste-ready Canvas page blocks (game inside the page + full-screen button + turn-in steps)
const CO = require('./course-info.js')(GAME).course, PAGEWORD = ((CO && (CO.swaps.en || []).find(w => w[0] === 'atlas page')) || [0, 'atlas page'])[1]; // 'charter page', 'chronicle page'
const PAGES = 'https://gabrielelias22307.github.io/worldwalker/' + GAME + '/', BLOCKS = path.join(ROOT, 'dist', HIST ? 'canvas-blocks-' + GAME : 'canvas-blocks');
fs.mkdirSync(BLOCKS, { recursive: true });
catalog.forEach(e => {
  const url = PAGES + 'ep-' + e.id.replace('.', '-') + '.html';
  const block = `<div style="border: 3px solid #22202e; border-radius: 8px; overflow: hidden; max-width: 1000px;">
<div style="background-color: #22202e; color: #f2c14e; padding: 10px 14px; font-weight: bold; font-size: 18px;">🎮 ${NAME.toUpperCase()} · Episode ${e.id} · ${e.title.en} <span style="color: #ffffff; font-weight: normal;">(${e.place.en})</span></div>
<iframe src="${url}" width="100%" height="820" style="border: 0; display: block;" title="${NAME} Episode ${e.id}" allow="fullscreen; clipboard-write; autoplay" allowfullscreen="allowfullscreen" loading="lazy"></iframe>
<div style="background-color: #fffbe8; padding: 12px 14px; color: #22202e;">
<p style="margin: 0 0 10px 0;"><a href="${url}" target="_blank" style="display: inline-block; background-color: #f2c14e; color: #22202e; border: 3px solid #22202e; border-radius: 6px; padding: 10px 16px; font-weight: bold; text-decoration: none;">Open the game full screen ↗</a></p>
<p style="margin: 0;"><b>When you win the ${PAGEWORD}:</b> press <b>Copy my work</b> and paste it into this assignment, or press <b>Download</b> and upload the file. Nothing is turned in until you do that step.</p>
<p style="margin: 6px 0 0 0;"><b>Cuando ganes la página:</b> presiona <b>Copiar mi trabajo</b> y pégalo aquí, o <b>Descargar</b> y sube el archivo.</p>
<p style="margin: 6px 0 0 0;" dir="rtl" lang="fa"><b>وقتی صفحه را بردی:</b> دکمهٔ <b>کارم را کاپی کن</b> را بزن و اینجا بگذار، یا <b>دانلود</b> را بزن و فایل را آپلود کن.</p>
</div>
</div>`;
  fs.writeFileSync(path.join(BLOCKS, `Episode ${e.id} - Canvas block.html`), block + '\n');
});
console.log(report.join('\n'));
console.log(`built ${eps.length} episodes`);
})();
