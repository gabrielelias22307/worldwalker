// Makes engine code smaller for the one-file Canvas build: drops comments, indentation and blank lines.
// Strings, template literals and regular expressions are copied exactly. Line breaks stay, so the code still runs the same.
function slimJs(src) {
  let out = '', i = 0, n = src.length, last = '';      // last = last significant character written (for regex vs divide)
  const stack = [];                                    // brace depth inside each open ${ ... } of a template
  const regexAfter = /[(,=:[!&|?{};+\-*%<>~^]$/;
  const lastWord = () => { const m = out.match(/([A-Za-z_$][\w$]*)\s*$/); return m ? m[1] : ''; };
  const KW = new Set(['return', 'typeof', 'case', 'in', 'of', 'else', 'void', 'new', 'delete', 'throw', 'instanceof', 'do', 'yield', 'await']);
  const put = s => { out += s; const t = s.trim(); if (t) last = t[t.length - 1]; };
  function template() {                                // after the opening backtick
    while (i < n) {
      const c = src[i];
      if (c === '\\') { out += c + src[i + 1]; i += 2; continue; }
      if (c === '`') { out += c; i++; last = '`'; return false; }
      if (c === '$' && src[i + 1] === '{') { out += '${'; i += 2; stack.push(0); last = '{'; return true; }
      out += c; i++;
    }
    return false;
  }
  while (i < n) {
    const c = src[i], d = src[i + 1];
    if (c === '/' && d === '/') { while (i < n && src[i] !== '\n') i++; continue; }
    if (c === '/' && d === '*') { const e = src.indexOf('*/', i + 2); i = e < 0 ? n : e + 2; if (!/\s$/.test(out)) out += ' '; continue; }
    if (c === '"' || c === "'") {
      let j = i + 1;
      while (j < n && src[j] !== c) { if (src[j] === '\\') j++; j++; }
      put(src.slice(i, j + 1)); i = j + 1; continue;
    }
    if (c === '`') { out += '`'; i++; template(); continue; }
    if (c === '{' && stack.length) { stack[stack.length - 1]++; put(c); i++; continue; }
    if (c === '}' && stack.length) {
      if (stack[stack.length - 1] === 0) { stack.pop(); out += '}'; i++; template(); continue; }
      stack[stack.length - 1]--; put(c); i++; continue;
    }
    if (c === '/') {
      const isRegex = !last || regexAfter.test(last) || KW.has(lastWord());
      if (isRegex) {
        let j = i + 1, cls = false;
        while (j < n) {
          const ch = src[j];
          if (ch === '\\') { j += 2; continue; }
          if (ch === '[') cls = true; else if (ch === ']') cls = false;
          else if (ch === '/' && !cls) break;
          else if (ch === '\n') throw new Error('slim: regex runs past the end of a line near: ' + src.slice(i, i + 40));
          j++;
        }
        j++;
        while (j < n && /[a-z]/.test(src[j])) j++;
        put(src.slice(i, j)); last = 'a'; i = j; continue;
      }
      put(c); i++; continue;
    }
    if (c === '\n' || c === '\r') {                     // one line break, no indentation, no blank lines
      out = out.replace(/[ \t]+$/, '');
      if (out && !out.endsWith('\n')) out += '\n';
      i++; while (i < n && /[ \t\r\n]/.test(src[i])) i++;
      continue;
    }
    if (c === ' ' || c === '\t') {                      // runs of spaces become one space
      while (i < n && (src[i] === ' ' || src[i] === '\t')) i++;
      if (!/[ \n]$/.test(out) && out) out += ' ';
      continue;
    }
    put(c); i++;
  }
  return out.replace(/[ \t]+$/gm, '').trim() + '\n';
}
function slimCss(src) {
  return src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^[ \t]+/gm, '').replace(/[ \t]+$/gm, '').replace(/\n{2,}/g, '\n').trim() + '\n';
}
module.exports = { slimJs, slimCss };
