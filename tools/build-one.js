// node tools/build-one.js apworld  ->  dist/HistoryWalker.html: the WHOLE game in one file (no size limit)
// The file holds the course, the engine, every episode and the world map. It opens on the map (hub.js); a stop opens
// that episode in the same file (#ep=1.2), and the map button comes back. Saves stay in this browser (and the
// Passport Code), like every other game.
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.join(__dirname, '..'), E = path.join(ROOT, 'game', 'engine');
const GAME = process.argv[2] || 'apworld', G = path.join(ROOT, GAME);
const info = require('./course-info.js')(GAME);
const read = p => fs.readFileSync(p, 'utf8');
const ENGINE = JSON.parse(read(path.join(__dirname, 'build.js')).match(/const ENGINE = (\[[^\]]*\])/)[1].replace(/'/g, '"'));
const inline = js => js.replace(/<\/script/gi, '<\\/script');
const eps = fs.readdirSync(path.join(G, 'episodes')).filter(f => /^ep-\d-\d\.js$/.test(f)).sort((a, b) => a.localeCompare(b, 'en', { numeric: true }));
const catalog = [], parts = [];
for (const f of eps) {
  const src = read(path.join(G, 'episodes', f));
  const box = { window: {} }; vm.createContext(box); vm.runInContext(src, box);
  const e = box.window.EPISODE;
  catalog.push({ id: e.id, realm: e.realm, title: e.title, place: e.place, at: e.scenes && e.scenes.at });
  parts.push(`WW_EPS[${JSON.stringify(e.id)}] = function () {\n${src}\n};`);
}
const css = read(path.join(E, 'style.css'));
const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${info.name}</title>
<style>
${css}
</style>
</head>
<body>
<div id="ww"></div>
<script>
${inline(read(path.join(G, 'course.js')))}
${fs.existsSync(path.join(G, 'images.js')) ? inline(read(path.join(G, 'images.js'))) : ''}
${inline(read(path.join(G, 'config.js')))}
window.WW_CONFIG.MODE = 'one';
</script>
<script>
${ENGINE.map(f => inline(read(path.join(E, f)))).join(';\n')}
</script>
<script>
window.WW_EPS = {};
${parts.map(inline).join('\n')}
window.WW_CATALOG = ${JSON.stringify(catalog)};
</script>
<script>
(function () { // #ep=1.2 opens that episode; anything else shows the world map
  var m = /ep=([0-9.]+)/.exec(location.hash);
  if (m && WW_EPS[m[1]]) { WW_EPS[m[1]](); WW.start(window.EPISODE); }
  else WW.hub();
})();
</script>
</body>
</html>
`;
fs.mkdirSync(path.join(ROOT, 'dist'), { recursive: true });
const out = path.join(ROOT, 'dist', info.name + '.html');
fs.writeFileSync(out, html);
fs.writeFileSync(path.join(G, 'index.html'), html); // the same file on GitHub Pages: /apworld/
console.log(`${path.relative(ROOT, out)}  ${(Buffer.byteLength(html) / 1024).toFixed(0)} KB · ${eps.length} episodes`);
