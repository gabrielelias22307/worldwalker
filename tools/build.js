// node tools/build.js  ->  game/ep-X-Y.html (GitHub Pages) + dist/canvas/Worldwalker X.Y.html (one file for Canvas)
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..'), G = path.join(ROOT, 'game');
const ENGINE = ['art.js', 'art2.js', 'save.js', 'ui.js', 'challenges.js', 'game.js'];
const LIMIT = 430000; // Canvas stops running JavaScript in files over ~450 KB
const tpl = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf8');
const read = p => fs.readFileSync(p, 'utf8');
const inline = js => js.replace(/<\/script/gi, '<\\/script');
const eps = fs.readdirSync(path.join(G, 'episodes')).filter(f => /^ep-\d-\d\.js$/.test(f)).sort();
fs.mkdirSync(path.join(ROOT, 'dist', 'canvas'), { recursive: true });
const css = read(path.join(G, 'engine', 'style.css'));
const engineJs = ENGINE.map(f => `/* ${f} */\n` + read(path.join(G, 'engine', f))).join('\n');
const cfg = read(path.join(G, 'config.js'));
const report = [];
for (const f of eps) {
  const id = f.slice(3, 6).replace('-', '.');
  // GitHub Pages version: shares the engine files
  const pages = tpl.replace('{{ID}}', id)
    .replace('{{STYLE}}', '<link rel="stylesheet" href="engine/style.css">')
    .replace('{{SCRIPTS}}', ['config.js', ...ENGINE.map(e => 'engine/' + e), 'episodes/' + f].map(s => `<script src="${s}"></script>`).join('\n'));
  fs.writeFileSync(path.join(G, f.replace('.js', '.html')), pages);
  // Canvas version: everything inside one file
  const one = tpl.replace('{{ID}}', id)
    .replace('{{STYLE}}', `<style>\n${css}\n</style>`)
    .replace('{{SCRIPTS}}', `<script>\n${inline(cfg)}\nwindow.WW_CONFIG.MODE = 'canvas';\n</script>\n<script>\n${inline(engineJs)}\n</script>\n<script>\n${inline(read(path.join(G, 'episodes', f)))}\n</script>`);
  const out = path.join(ROOT, 'dist', 'canvas', `Worldwalker ${id}.html`);
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
const PAGES = 'https://gabrielelias22307.github.io/worldwalker/game/';
fs.mkdirSync(path.join(ROOT, 'dist', 'canvas-blocks'), { recursive: true });
catalog.forEach(e => {
  const url = PAGES + 'ep-' + e.id.replace('.', '-') + '.html';
  const block = `<div style="border: 3px solid #22202e; border-radius: 8px; overflow: hidden; max-width: 1000px;">
<div style="background-color: #22202e; color: #f2c14e; padding: 10px 14px; font-weight: bold; font-size: 18px;">🎮 WORLDWALKER · Episode ${e.id} · ${e.title.en} <span style="color: #ffffff; font-weight: normal;">(${e.place.en})</span></div>
<iframe src="${url}" width="100%" height="820" style="border: 0; display: block;" title="Worldwalker Episode ${e.id}" allow="fullscreen; clipboard-write; autoplay" allowfullscreen="allowfullscreen" loading="lazy"></iframe>
<div style="background-color: #fffbe8; padding: 12px 14px; color: #22202e;">
<p style="margin: 0 0 10px 0;"><a href="${url}" target="_blank" style="display: inline-block; background-color: #f2c14e; color: #22202e; border: 3px solid #22202e; border-radius: 6px; padding: 10px 16px; font-weight: bold; text-decoration: none;">Open the game full screen ↗</a></p>
<p style="margin: 0;"><b>When you win the atlas page:</b> press <b>Copy my work</b> and paste it into this assignment, or press <b>Download</b> and upload the file. Nothing is turned in until you do that step.</p>
<p style="margin: 6px 0 0 0;"><b>Cuando ganes la página:</b> presiona <b>Copiar mi trabajo</b> y pégalo aquí, o <b>Descargar</b> y sube el archivo.</p>
<p style="margin: 6px 0 0 0;" dir="rtl" lang="fa"><b>وقتی صفحه را بردی:</b> دکمهٔ <b>کارم را کاپی کن</b> را بزن و اینجا بگذار، یا <b>دانلود</b> را بزن و فایل را آپلود کن.</p>
</div>
</div>`;
  fs.writeFileSync(path.join(ROOT, 'dist', 'canvas-blocks', `Episode ${e.id} - Canvas block.html`), block + '\n');
});
console.log(report.join('\n'));
console.log(`built ${eps.length} episodes`);
