# How an episode file works

Every episode is one file: `game/episodes/ep-U-S.js` (for example `ep-2-2.js` is Episode 2.2). It holds only words, the map and the questions. The engine in `game/engine/` does everything else. **Episode 1.1 (`ep-1-1.js`) is the model — copy its shape.**

After editing, run:

```
node tools/check.js ep-2-2.js     # map, reachability, 3 languages, questions
node tools/build.js               # makes game/ep-2-2.html and dist/canvas/Worldwalker 2.2.html
node tests/play.js 2.2            # plays it start to finish in a real browser, screenshots in shots/play/
```

## What a student does in every episode

1. Opening card (the `intro` lines, spoken by Christopher). *Christopher is your living compass: he points the way, tells you what to do next, and trades hints for coins.* In 1.1 he flies in and introduces himself (`christopher.meet`). Press **C** (or 🧭) any time to ask him what to do next; his messages are a speech bubble over him on the map.
2. Walk the map. Talk to every person (`npcs`). Each person says 2–3 short `lines`, then asks one question (`ask`). A right answer adds to one of the five powers.
3. Optional: read signs (`signs`), pick up 3 atlas scraps (`scraps`), avoid the Grumplings (`smudges`).
4. Walk into the glowing compass stone (`challenge`). It stays locked until every person has been talked to.
5. Solving it calls out the Grump (`boss`). Walk into it: a question trial. Each right answer cracks one piece of the cloud shield (`need`, normally 3). A wrong answer costs a heart, explains why, and the question comes back later.
6. Finish screen: `learned` (3 lines), a `reflect` question with a sentence `starter`, save, Passport Code, turn in.

Stars: ★ finishing · ★ all 3 scraps · ★ the boss with 1 miss or less.

## Every piece of text has three languages

```js
{ en: 'English', es: 'Español', fa: 'دری' }
```

- Grade-5 reading level in English: short sentences, everyday words, one idea per sentence.
- Spanish: natural Latin-American Spanish. Dari: simple, careful Afghan Dari in Arabic script (use Afghan words: مکتب not مدرسه for school, سرک for road, دریا for river).
- **Yellow tap-to-define words:** write `[[key|shown words]]` in any language. `key` must be a lower-case key in `words`. Example: `[[latitude|latitud]]` in Spanish uses the key `latitude`.
- Plain language for students and teachers. Never the word "debrief".

## The fields

| Field | What it is |
|---|---|
| `id`, `realm`, `sol` | `'2.2'`, `2`, `'WG.4'` |
| `title`, `place` | short names |
| `intro` | 1–2 lines from Christopher: what the Grump did here and what to do |
| `map` | rows of letters (legend below). Width a multiple of 16, height a multiple of 11. 32×22 = 2×2 screens is the normal size; 48×22 or 32×33 for bigger worlds |
| `start` | `[x, y]` where the hero starts (walkable) |
| `words` | `{ key: {en, es, fa} }` meanings for the yellow words |
| `npcs` | 3 or 4 people: `{ x, y, name, role, look, lines: [ ... ], ask: { stat, q, choices: [ { ok:true, t, why }, { t, why }, { t, why } ] } }` — exactly one `ok` choice, every choice has a `why` |
| `look` | `{ skin: 0-5, hair: '#hex', shirt: '#hex', pants: '#hex', robe: true }` — show many skin tones, respectfully |
| `signs` | `{ x, y, text }` on an `x` tile |
| `scraps` | exactly 3 `[x, y]` on walkable tiles, hidden in corners worth exploring |
| `smudges` | 1–3 bad guys, `[x, y]` or `[x, y, 'type']`; each roams inside its own screen. Types: `grump` (Grumpling), `bat` (Ink Bat, flies over anything), `blob` (Mud Blob, 2 stars), `whirl` (Dust Devil, straight lines). Without a type, the first is a Grumpling and the realm picks the rest (`WW.REALM_FOES` in `game/engine/foes.js`) |
| `challenge` | see below; `at: [x, y]` on a walkable tile, `stat`, `title`, `intro`, `success` |
| `boss` | `{ at, stat, need: 3, name, appear, taunt, win, questions: [ { q, choices: [4 options], answer: 0, why } ] }` — 8 questions. Choices are shuffled on screen, so the right one can be listed first |
| `learned` | 3 lines |
| `reflect` | `{ q, starter }` — an open question that connects the place to the student's own life |
| `weather` | optional: `{ sky, time }` to change the episode's weather and light. `sky`: `clear`, `rain`, `drizzle`, `snow`, `petals`, `leaves`, `dust`, `heat`. `time`: `day`, `sunset`, `night`. Without it the episode uses its line in `SKY` in `game/engine/fx.js` |
| `christopher` | optional: `{ meet: [2–3 lines] }` — the first time a hero plays this episode, Christopher flies in and says these lines in his bubble (1.1 only for now) |
| `tools` | optional: `['axe', 'sickle']` turns on the tool bar (keys 1–5): ★ stars, axe (small trees `T P a` and bushes `Y` → wood), sickle (tall grass `"` → fiber, sometimes a seed or a coin; ripe crops → 3 coins), seeds (plant on farm soil `o`), signposts. Space uses the tool on the tile you face. Chopped trees and grass grow back; trees on the map's edge can never be cut |
| `keep` | optional: `[[x, y], ...]` trees the axe must never cut (for example a tree that keeps a path closed on purpose) |
| `build` | optional: what can be built here (see "Building" below) |
| `look.style` / `look.hat` | optional on a person: `'short'`, `'long'` or `'bun'` hair (otherwise picked from the name); `hat: '#hex'` gives them a hat |

`stat` is one of the five powers: `loc` Where (Location) · `pla` What it is like (Place) · `hei` People & land (Human–Environment Interaction) · `mov` On the move (Movement) · `reg` Regions (Region).

## The quest (every episode has one)

A small side story that the student must finish before the compass stone opens. **Episode 1.1 (`ep-1-1.js`) has the model quest.**

1. The **giver** (a new person, gold **!** over their head) asks for help: `lines` (2), then the student presses "I'll help!".
2. The student finds the **contact** (a new person, blue **?**) and hears 2 `lines`. The last line is the clue or the instruction, and it is repeated if they come back.
3. The student does the **action**:
   - `find`: walk onto a secret tile. The contact's clue must use real geography words (north/south/east/west, upstream, across the bridge, next to the market...). The spot twinkles a little once the quest reaches it.
   - `fight`: an **Ink Thief** appears at `at`. Walking into it opens a short question duel: `need` (2) right answers out of 3–4 `questions` (same shape as the Grump's questions). Misses do not count against the Grump stars.
   - `trade`: a **trader** (new person) asks `q` with 3 `choices`. Exactly one is `ok`; every choice has a `why`. The right one should make geographic sense (what this place has plenty of, what it needs).
4. The student goes back to the giver, hears `thanks`, and gets +2 to the quest's `stat` and 10 coins.

```js
quest: {
  stat: 'loc',
  title: {..},                                  // short, shown in the quest bar
  giver:   { x, y, name, role, look, lines: [ {..}, {..} ], wait: {..}, thanks: {..} },
  contact: { x, y, name, role, look, lines: [ {..}, {..} ] },
  action:  { type: 'find',  at: [x, y], hint: {..} /* few words for the quest bar */, found: {..}, item: { icon: '🧭', name: {..} } }
        // { type: 'fight', at: [x, y], name: {..}, taunt: {..}, win: {..}, need: 2, questions: [ { q, choices: [4], answer: 0, why } x3 ], item }
        // { type: 'trade', trader: { x, y, name, role, look, lines: [ {..} ] }, q: {..}, choices: [ { ok: true, t, why }, { t, why }, { t, why } ], item }
}
```

Rules: put the giver, the contact and the action on **different screens** so the quest is a real trip. Every quest person and the thief stand on walkable tiles that do not block a path; the secret spot is a walkable tile that is not the start. `node tools/spots.js ep-X-Y.js` prints the map with rulers: a blank means walkable and reachable. Never use the word "debrief"; keep the grade-5 reading level; all three languages.

## Building (`build`)

Wood and fiber pay for things that use the episode's big idea. Each entry has an `id` and a `kind`. What a student has got and used is saved with the hero (and in the class Sheet), and a repair stays built on replays.

**repair** — a broken thing on the map. Walking into it opens a panel with the cost; "Fix it" uses the wood and swaps the tiles.
```js
{ id: 'bridge', kind: 'repair', at: [[21, 16], [22, 16]], tile: 'b', cost: { wood: 4 },
  name: {..}, ask: {..} /* what broke and why fix it */, done: {..} /* Christopher says this after */ }
```
Draw the broken tiles with `Z` (broken bridge) in the map. `tools/check.js` checks that you can walk up to it before it is fixed and that everything behind it can be reached after.

**signpost** — a sign the student puts where its words point (used by the `build` challenge below).
```js
{ id: 'west', kind: 'signpost', cost: { wood: 1, fiber: 1 }, ok: [[19, 16]] /* right spots */,
  text: {..} /* "Two steps west of the south bridge" */, why: {..} /* shown on a wrong spot */,
  grid: true /* optional: the spot is on the challenge's survey grid */ }
```
A wrong spot says which way the right one is (or, on the grid, which square this is and which one the sign wants) and the student can pick the sign up again. The cost is paid only the first time a sign is put up.

## Challenge types

**build** — the compass stone moved into the world. Walking into the stone hands out the signposts; placing all of them in the right spots solves it. Keep the card version as `fallback` ("Use cards instead").
```js
{ type: 'build', items: ['lake', 'west', 'abs1', 'abs2'] /* signpost ids from build */,
  grid: { x: 3, y: 8, rows: [ {..'50°N'}, .. ], cols: [ {..'80°W'}, .. ] } /* optional survey grid on open ground; north is up, west is left */,
  fallback: { type: 'sort', title, intro, bins, items } }
```

**sort** — put each card in the right group.
```js
{ type: 'sort', style: 'bands' /* optional: groups drawn as land bands with a tile strip */,
  bins: [ { id: 'hot', icon: '🍌', label: {..}, sub: {..}, tile: 'y' } ],
  items: [ { bin: 'hot', t: {..}, why: {..} } ] }   // 6–9 items
```
**order** — tap the cards in the right order (list them in the correct order; the game shuffles them).
```js
{ type: 'order', items: [ { t: {..}, icon: '⛏️' } ], why: {..} /* shown when the order is wrong */ }
```
**claim** — choose one option, then back it up with one reason of each kind. A reason `fits` the options it is true for. More than one option can be right if the reasons match.
```js
{ type: 'claim', options: [ { name: {..}, desc: {..}, icon, result: {..} } ],
  kinds: [ { id: 'site', label: {..} }, { id: 'situation', label: {..} } ],
  reasons: [ { kind: 'site', fits: [0], t: {..}, why: {..} } ], mismatch: {..} }
```
**combo** — set switches; some settings work and some do not. Keys are the chosen state numbers joined by commas.
```js
{ type: 'combo', switches: [ { name: {..}, icon, states: [ {..}, {..} ], start: 0 } ],
  results: { '1,1': { ok: true, t: {..}, show: [ { t: {..}, ok: true, icon: '💧' } ] } },
  otherwise: { ok: false, t: {..}, show: [...] } }
```
**table** — read a small table of facts, then answer questions about it.
```js
{ type: 'table', table: { head: [ {..} ], rows: [ [ {..}, '12' ] ], note: {..} },
  questions: [ { q: {..}, choices: [ {..} ], answer: 0, why: {..} } ] }   // 3–4 questions
```

## Map letters

Walkable ground:

| | | | |
|---|---|---|---|
| `.` grass | `,` flowers | `"` tall grass | `:` dirt path |
| `s` sand | `u` dunes | `g` dry grass (Sahel, steppe) | `z` tundra |
| `n` snow | `i` ice | `f` dark stone floor (temples, indoors) | `o` farm soil |
| `1` sprout | `2` young plant | `3` coffee bush | `w` wheat |
| `q` rice paddy | `v` potatoes | `y` banana | `e` sugarcane |
| `t` tea terraces | `b` bridge (east–west) | `B` bridge (north–south) | `k` wooden dock |
| `%` tree stump (after the axe) | | | |
| `-` railway (east–west) | `\|` railway (north–south) | `d` door | `l` light paving (streets, plazas) |

Solid (cannot walk through):

| | | | |
|---|---|---|---|
| `T` round tree | `P` pine | `p` palm | `a` acacia |
| `j` rainforest | `c` cactus | `M` mountain | `A` snowy mountain |
| `V` volcano | `K` hill | `r` rock | `x` sign post |
| `~` water | `=` deep water | `L` lava | `F` fence |
| `R` red roof | `Q` blue roof | `h` house wall + window | `J` flat-roof building |
| `U` tall city building | `X` factory | `I` oil pump | `O` well |
| `m` market stall | `W` stone wall | `D` temple wall | `C` tiny city (for maps of maps) |
| `Y` small bush (the axe clears it) | `Z` broken bridge (a `build` repair fixes it) | | |

Houses are roof rows over a wall row with a door: `RRR` above `hdh`. Trees and mountains automatically sit on the ground around them (pines on snow, mountains on sand).

## Rules of thumb for maps

- Put a border of solid tiles around the outside.
- Screens connect where walkable tiles touch across the screen edge (column 15→16, row 10→11). Leave at least one open tile at each edge you want students to cross.
- Spread the three people across different screens so the student explores.
- Make the land teach: the Sahel map runs desert → dry grass → savanna from north to south; the coffee mountain has snow on top and bananas at the bottom.
