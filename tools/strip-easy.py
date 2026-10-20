#!/usr/bin/env python3
"""python3 tools/strip-easy.py — removes the unused easy: { ... } text from every episode (the engine never shows it)."""
import glob, re
total = 0
for p in sorted(glob.glob('game/episodes/ep-*-*.js')):
    s = open(p, encoding='utf8').read()
    out, i, n = [], 0, 0
    while True:
        m = re.compile(r',\s*easy:\s*\{').search(s, i)
        if not m: break
        j, depth, q = m.end(), 1, None   # walk to the matching }, skipping strings
        while depth:
            c = s[j]
            if q:
                if c == '\\': j += 1
                elif c == q: q = None
            elif c in '\'"`': q = c
            elif c == '{': depth += 1
            elif c == '}': depth -= 1
            j += 1
        out.append(s[i:m.start()]); i = j; n += 1
    out.append(s[i:])
    open(p, 'w', encoding='utf8').write(''.join(out)); total += n
    print(p, n)
print('removed', total)
