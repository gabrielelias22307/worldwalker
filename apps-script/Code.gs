/**
 * WORLDWALKER — class Sheet save script (tested against a pretend Sheet by tests/sheet.js; try it once in your real Sheet)
 *
 * Set-up (Phase 0):
 *  1. Make a Google Sheet with tabs: Students, Log, Classes, Settings.
 *  2. Extensions > Apps Script, paste this file, save.
 *  3. In Settings put: A1 "teacherCode", B1 your code; A2 "salt", B2 any long random words.
 *  4. Deploy > New deployment > Web app. Execute as: Me. Who has access: Anyone.
 *  5. Copy the web app URL into game/config.js (SHEET_URL), then run node tools/build.js.
 *
 * The game sends:
 *   GET  ?action=load&cls=GEO-3B&name=Ana&pin=1234            -> the student's saved hero
 *   GET  ?action=class&cls=GEO-3B                              -> the class atlas: pages restored per episode (totals only, no names)
 *   POST {action:'save', cls, name, pin, state:{...}, log:{...}} (sent as text/plain)
 * GET also accepts &callback=fn (JSONP) in case the school network blocks the normal way.
 *
 * Only first name + class code + a scrambled 4-digit number are stored.
 */

const STUDENT_COLS = ['key', 'cls', 'name', 'pinHash', 'look', 'loc', 'pla', 'hei', 'mov', 'reg',
  'heartsMax', 'coins', 'episodes', 'tools', 'passport', 'lastPlayed', 'version', 'spent', 'bag', 'built', 'metChris', 'secrets', 'camp', 'finds'];
const LOG_COLS = ['time', 'cls', 'name', 'episode', 'stars', 'heartsLost', 'minutes', 'missed', 'reflection'];

function doGet(e) {
  const p = e.parameter || {};
  let out;
  try {
    if (p.action === 'load') out = load_(p.cls, p.name, p.pin);
    else if (p.action === 'class') out = classAtlas_(p.cls);
    else if (p.action === 'ping') out = { ok: true, time: new Date().toISOString() };
    else out = { ok: false, error: 'unknown action' };
  } catch (err) {
    out = { ok: false, error: String(err) };
  }
  return reply_(out, p.callback);
}

function doPost(e) {
  let out;
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000); // one save at a time, so two students never overwrite each other
    const body = JSON.parse(e.postData.contents);
    if (body.action === 'save') out = save_(body);
    else out = { ok: false, error: 'unknown action' };
  } catch (err) {
    out = { ok: false, error: String(err) };
  } finally {
    lock.releaseLock();
  }
  return reply_(out);
}

/* ---------- the class atlas: how many in the class restored each page, and the class top 5 by pages finished (first names only) ---------- */
function classAtlas_(cls) {
  const want = clean_(cls).toUpperCase();
  if (!want) return { ok: false, error: 'missing class' };
  const sh = sheet_('Students', STUDENT_COLS);
  const n = sh.getLastRow();
  const pages = {}; let total = 0, students = 0; const board = [];
  if (n >= 2) {
    const rows = sh.getRange(2, 1, n - 1, STUDENT_COLS.length).getValues();
    const ci = STUDENT_COLS.indexOf('cls'), ei = STUDENT_COLS.indexOf('episodes'), ni = STUDENT_COLS.indexOf('name');
    rows.forEach(r => {
      if (String(r[ci]).toUpperCase() !== want) return;
      students++;
      const eps = safeJson_(r[ei], {});
      let mine = 0;
      Object.keys(eps).forEach(id => { if (eps[id] && eps[id].done) { pages[id] = (pages[id] || 0) + 1; total++; mine++; } });
      const first = clean_(r[ni]).split(/\s+/)[0];
      if (mine && first) board.push({ name: first.charAt(0).toUpperCase() + first.slice(1), pages: mine });
    });
  }
  board.sort((a, b) => b.pages - a.pages || a.name.localeCompare(b.name));
  return { ok: true, pages, total, students, top: board.slice(0, 5) };
}

/* ---------- load and save ---------- */

function load_(cls, name, pin) {
  const key = key_(cls, name);
  const sh = sheet_('Students', STUDENT_COLS);
  const row = findRow_(sh, key);
  if (!row) return { ok: true, found: false };
  const rec = rowToObj_(sh, row);
  if (rec.pinHash !== hash_(pin)) return { ok: false, error: 'wrong secret number' };
  delete rec.pinHash;
  rec.episodes = safeJson_(rec.episodes, {});
  rec.tools = safeJson_(rec.tools, []);
  rec.look = safeJson_(rec.look, {});
  rec.bag = safeJson_(rec.bag, {});
  rec.built = safeJson_(rec.built, {});
  rec.secrets = safeJson_(rec.secrets, []);
  rec.camp = safeJson_(rec.camp, null);
  rec.finds = safeJson_(rec.finds, []);
  rec.metChris = rec.metChris === true || rec.metChris === 'TRUE' || rec.metChris === 'true';
  return { ok: true, found: true, state: rec };
}

function save_(b) {
  if (!b.cls || !b.name || !/^\d{4}$/.test(String(b.pin))) return { ok: false, error: 'missing sign-in' };
  const key = key_(b.cls, b.name);
  const sh = sheet_('Students', STUDENT_COLS);
  let row = findRow_(sh, key);
  const ph = hash_(b.pin);
  let old = null;
  if (row) {
    old = rowToObj_(sh, row);
    if (old.pinHash !== ph) return { ok: false, error: 'wrong secret number' };
  } else {
    row = sh.getLastRow() + 1;
  }
  const s = Object.assign({}, b.state || {});
  // never go backwards: keep the best of what is in the Sheet and what this computer sent
  // (coins: the most ever earned minus the most ever spent, so spent coins never come back)
  const n = v => Number(v) || 0;
  if (old) {
    ['loc', 'pla', 'hei', 'mov', 'reg', 'heartsMax'].forEach(k => (s[k] = Math.max(n(s[k]), n(old[k]))));
    const spent = Math.max(n(s.spent), n(old.spent));
    const earned = Math.max(n(s.coins) + n(s.spent), n(old.coins) + n(old.spent));
    s.spent = spent; s.coins = Math.max(0, earned - spent);
    const eps = safeJson_(old.episodes, {});
    Object.keys(s.episodes || {}).forEach(id => {
      const a = eps[id], c = s.episodes[id];
      if (!a || (!a.done && c.done) || n(c.stars) > n(a.stars)) eps[id] = c;
    });
    s.episodes = eps;
    // the bag: the most ever got and the most ever used (wood spent on a bridge never comes back); things built stay built
    const bag = safeJson_(old.bag, {});
    Object.keys(s.bag || {}).forEach(k => {
      const a = bag[k] || {}, c = s.bag[k] || {};
      bag[k] = { got: Math.max(n(a.got), n(c.got)), used: Math.max(n(a.used), n(c.used)) };
    });
    s.bag = bag;
    const built = safeJson_(old.built, {});
    Object.keys(s.built || {}).forEach(id => { built[id] = Array.from(new Set([].concat(built[id] || [], s.built[id] || []))); });
    s.built = built;
    s.metChris = !!s.metChris || old.metChris === true || old.metChris === 'TRUE';
    s.secrets = Array.from(new Set([].concat(safeJson_(old.secrets, []), s.secrets || [])));
    s.finds = Array.from(new Set([].concat(safeJson_(old.finds, []), s.finds || [])));
    const oc = safeJson_(old.camp, null); // camp: owned decorations never go away; the newest layout wins
    if (oc) s.camp = { owned: Array.from(new Set([].concat(oc.owned || [], (s.camp || {}).owned || []))), slots: (s.camp && s.camp.slots) || oc.slots || [] };
  }
  const rec = {
    key, cls: clean_(b.cls).toUpperCase(), name: clean_(b.name), pinHash: ph,
    look: JSON.stringify(s.look || {}),
    loc: s.loc || 0, pla: s.pla || 0, hei: s.hei || 0, mov: s.mov || 0, reg: s.reg || 0,
    heartsMax: s.heartsMax || 3, coins: s.coins || 0, spent: s.spent || 0,
    episodes: JSON.stringify(s.episodes || {}), tools: JSON.stringify(s.tools || []),
    passport: s.passport || '', lastPlayed: new Date(), version: s.version || 1,
    bag: JSON.stringify(s.bag || {}), built: JSON.stringify(s.built || {}), metChris: !!s.metChris,
    secrets: JSON.stringify(s.secrets || []),
    camp: JSON.stringify(s.camp || null),
    finds: JSON.stringify(s.finds || [])
  };
  sh.getRange(row, 1, 1, STUDENT_COLS.length).setValues([STUDENT_COLS.map(c => rec[c])]);

  if (b.log) { // one line per finished episode (saves after each goal send no log)
    const lg = sheet_('Log', LOG_COLS);
    const L = b.log;
    lg.appendRow([new Date(), rec.cls, rec.name, L.episode || '', L.stars || 0, L.heartsLost || 0,
      L.minutes || 0, (L.missed || []).join(' '), clean_(L.reflection || '', 2000)]);
  }
  return { ok: true, saved: true };
}

/* ---------- helpers ---------- */

function sheet_(name, cols) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(name);
  if (!sh) sh = ss.insertSheet(name);
  if (sh.getLastRow() === 0) sh.appendRow(cols);
  else if (sh.getLastColumn() < cols.length) sh.getRange(1, 1, 1, cols.length).setValues([cols]); // add new column titles to an older Sheet
  return sh;
}
function findRow_(sh, key) {
  const n = sh.getLastRow();
  if (n < 2) return 0;
  const keys = sh.getRange(2, 1, n - 1, 1).getValues();
  for (let i = 0; i < keys.length; i++) if (keys[i][0] === key) return i + 2;
  return 0;
}
function rowToObj_(sh, row) {
  const v = sh.getRange(row, 1, 1, STUDENT_COLS.length).getValues()[0];
  const o = {};
  STUDENT_COLS.forEach((c, i) => o[c] = v[i]);
  return o;
}
function key_(cls, name) { return clean_(cls).toUpperCase() + '|' + clean_(name).toLowerCase(); }
function clean_(s, max) { return String(s || '').replace(/[<>]/g, '').trim().slice(0, max || 40); }
function safeJson_(s, d) { try { return JSON.parse(s); } catch (e) { return d; } }
function hash_(pin) {
  const salt = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Settings').getRange('B2').getValue();
  const bytes = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, salt + ':' + String(pin));
  return bytes.map(b => ('0' + (b & 255).toString(16)).slice(-2)).join('');
}
function reply_(obj, callback) {
  const json = JSON.stringify(obj);
  if (callback && /^[\w.]+$/.test(callback)) {
    return ContentService.createTextOutput(callback + '(' + json + ')').setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService.createTextOutput(json).setMimeType(ContentService.MimeType.JSON);
}
