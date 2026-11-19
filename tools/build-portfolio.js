// node tools/build-portfolio.js econ  ->  dist/canvas-econ/Coinwalker Bradlee Portfolio.html (one file, under the
// Canvas limit) and econ/portfolio.html (the same page on GitHub Pages). It holds the course file, the portfolio's
// content (econ/portfolio.js), the save (Passport Code, languages), the music and the portfolio page.
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..'), E = path.join(ROOT, 'game', 'engine');
const GAME = process.argv[2] || 'econ', G = path.join(ROOT, GAME);
const info = require('./course-info.js')(GAME);
const read = p => fs.readFileSync(p, 'utf8');
const LIMIT = 430000;
let terser; try { terser = require('terser'); } catch (e) { console.log('terser is missing: run "npm install" once, then build again'); process.exit(1); }
const squeeze = async js => (await terser.minify(js, { compress: { passes: 2 }, mangle: true, format: { comments: false } })).code;
const inline = js => js.replace(/<\/script/gi, '<\\/script');
(async () => {
  const parts = [read(path.join(G, 'course.js')), read(path.join(G, 'portfolio.js')), read(path.join(G, 'config.js')),
    "window.WW = window.WW || {}; WW.lookHD = () => false; WW.CONFIG = window.WW_CONFIG; window.WW_CONFIG.MODE = 'portfolio';",
    read(path.join(E, 'save.js')), read(path.join(E, 'music.js')), read(path.join(E, 'portfolio.js')), 'WW.portfolio();'];
  const js = (await Promise.all(parts.map(squeeze))).join(';\n');
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Bradlee Portfolio · ${info.name}</title>
</head>
<body>
<div id="ww"></div>
<script>
${inline(js)}
</script>
</body>
</html>
`;
  const outDir = path.join(ROOT, 'dist', GAME === 'game' ? 'canvas' : 'canvas-' + GAME);
  fs.mkdirSync(outDir, { recursive: true });
  const out = path.join(outDir, `${info.name} Bradlee Portfolio.html`);
  fs.writeFileSync(out, html); fs.writeFileSync(path.join(G, 'portfolio.html'), html);
  const size = Buffer.byteLength(html);
  console.log(`${path.relative(ROOT, out)}  ${(size / 1024).toFixed(0)} KB${size > LIMIT ? '  ** OVER THE CANVAS LIMIT **' : ''}`);
  if (size > LIMIT) process.exitCode = 1;
})();
