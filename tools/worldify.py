#!/usr/bin/env python3
"""python3 tools/worldify.py spec.json   — moves an episode's compass stone into the world (Fun Pass section 10).

spec.json: { "ep": "1-2",                      # game/episodes/ep-1-2.js
             "type": "carry",                  # carry | route | site | survey | levers
             "fields": "zones: [ ... ],",       # JS text added right after the challenge's type line (zones or spots)
             "rows": { "17": "TPPP..." },      # optional: whole map rows to replace (same length)
             "top": "secret: { ... },",         # optional: JS text added after start: [x, y],
             "replace": [["old", "new"]] }     # optional: exact text swaps anywhere in the file
Everything in the episode stays; the old card version is still there as the fallback ("Use cards instead")."""
import json, re, sys

spec = json.load(open(sys.argv[1]))
p = f"game/episodes/ep-{spec['ep']}.js"
s = open(p, encoding='utf8').read()

for old, new in spec.get('replace', []):
    assert s.count(old) == 1, f'{p}: replace text found {s.count(old)} times: {old[:60]}'
    s = s.replace(old, new)

m = re.search(r"\n  map: \[\n(.*?)\n  \],", s, re.S)
rows = re.findall(r"'([^']*)'", m.group(1))
for k, new in (spec.get('rows') or {}).items():
    k = int(k)
    assert len(new) == len(rows[k]), f'{p}: row {k} is {len(new)} long, should be {len(rows[k])}'
    rows[k] = new
body = ',\n'.join(f"    '{r}'" for r in rows)
s = s[:m.start(1)] + body + s[m.end(1):]

ci = s.index('\n  challenge: {')
tm = re.compile(r"\n    type: '(\w+)',").search(s, ci)
assert tm, 'challenge type line not found'
s = s[:tm.start()] + f"\n    type: '{spec['type']}', // in the world; the card version ({tm.group(1)}) is the fallback\n    " + spec['fields'].strip() + s[tm.end():]

if spec.get('top'):
    sm = re.search(r"\n  start: \[\d+, \d+\],\n", s)
    s = s[:sm.end()] + '\n  ' + spec['top'].strip() + '\n' + s[sm.end():]

open(p, 'w', encoding='utf8').write(s)
print('updated', p)
