// For the play-tests: long instructions now come one short step at a time ("Next ▶ 1/3", fun-pass-4).
// require('./autostep') makes every page the tests open click through those steps by itself, so the tests reach
// the challenge as before. tests/fixes.js checks the steps themselves (it does not use this).
const pw = require('playwright');
const SCRIPT = () => { new MutationObserver(() => { const b = document.querySelector('#ww-ov .stepnext'); if (b) b.click(); }).observe(document, { childList: true, subtree: true }); };
const launch = pw.chromium.launch.bind(pw.chromium);
pw.chromium.launch = async (...a) => {
  const b = await launch(...a), nc = b.newContext.bind(b), np = b.newPage.bind(b);
  b.newContext = async (...o) => { const c = await nc(...o); await c.addInitScript(SCRIPT); return c; };
  b.newPage = async (...o) => { const p = await np(...o); await p.addInitScript(SCRIPT); return p; };
  return b;
};
