# WORLDWALKER — The Torn Atlas
### A top-down geography RPG for APA World Geography · Plan and architecture

*Draft 1 · 16 October 2026 · Gabriel Elias, Alexandria City High School*

> **Status, 17 October 2026: built.** All 24 episodes, the engine, the world map, the save system (browser + Passport Code + Google Sheet script) and the Canvas files are done and play-tested. See [README.md](README.md) and [TEACHER-GUIDE.md](TEACHER-GUIDE.md). Built differences from this plan: the Passport Code is 15 characters; the tools are earned at the end of each realm (1.3, 2.3, 3.3, 4.3, 5.3, 6.3, 7.3, 8.2); a few challenges changed type (see the README table).

The ten screen mockups are in [`mockups/`](mockups/index.html). This file explains how the whole game fits together, how it saves, and how it lives in Canvas.

---

## 1. The game in one paragraph

The Great Atlas has been torn into **24 pages** by the **Smudge**, a blob that blurs maps and makes people forget places. The student is a **Worldwalker apprentice**. With **Pip**, a living compass, they travel through **8 realms** (the 8 units). Each **episode** (one per Canvas subunit, 1.1 to 8.3) wins back one atlas page by learning that place: walking it, talking to the people who live there, solving a challenge built on the big idea, and beating a short boss trial. The hero, their five geography powers and their bag of tools carry from one episode to the next, all year.

---

## 2. What we take from each classic game ("reverse engineering")

We are not copying any game's art, names or story. We are rebuilding the *systems* that make each one fun, and pointing each system at a geography idea.

| Game | The system that makes it work | How Worldwalker uses it |
|---|---|---|
| **The Legend of Zelda (1986)** | One screen at a time; walk off the edge and the next screen slides in. Items open new places (the raft crosses water, the ladder crosses gaps). Dungeons are rooms of puzzles that end in a boss. | The **overworld** and **river temple** screens. One tool per realm opens new paths (Canoe crosses rivers, Sail crosses ocean). Each episode ends in a **boss trial**. |
| **Stardew Valley** | Days and seasons. Plant, wait, harvest. What grows depends on the season. A bottom bar of tools and seeds. Friendly townspeople. | The **mountain farm** (crops by elevation), monsoon season farming, rice terraces. Talking to people is how the reading happens. |
| **Warcraft (1994 – 1995)** | Workers gather food and wood. You pick where to build. A command panel at the bottom with a minimap. | **Found a city** (site and situation), resource and trade episodes, supply chains. |
| **Classic RPGs in general** | A character sheet with stats that grow. Hearts. Coins. A save you can come back to. | The **Passport**: five geography powers (the Five Themes), hearts, coins, stamps, a save code. |

---

## 3. The hero's stats: the Five Themes of Geography

Every right answer, quest and challenge adds to one of five **powers** (0 to 10). They are the Five Themes, with kid-friendly names on screen:

| On screen | Theme | What fills it |
|---|---|---|
| 📍 **Where** | Location | Map skills, latitude/longitude, directions, finding places |
| 🏞️ **What it is like** | Place | Landforms, climate, plants, people and culture of a place |
| 🌱 **People & land** | Human–Environment Interaction | How people change the land and the land changes people |
| 🚚 **On the move** | Movement | Trade, migration, ideas spreading |
| 🧩 **Regions** | Region | Sorting places that share traits |

Also tracked: **hearts** (max 5; lost on wrong answers in boss trials and Smudge touches, never during reading), **coins** (earned and spent at market screens), **stamps** (one per finished episode), **atlas pages** (0 – 24) and the **bag** (one tool per realm).

A low power tells the student, and you, what to practice. The Sheet can sort by any power.

---

## 4. The 24 episodes

Each episode = one Canvas subunit = one atlas page. Episodes are built from a small set of reusable **play modes** (section 5), so 24 episodes are 24 *data files* run by one engine, not 24 separate games.

| Ep. | Realm / topic | Main challenge (mode) | Big idea the challenge is built on | Tool earned | SOL |
|---|---|---|---|---|---|
| **1.1** | Mapmaker's Valley · Intro to Maps | Explore + find 3 map pages | Directions, map key, absolute vs. relative location | — | WG.1 |
| **1.2** | Mapmaker's Valley · Regional Tour | Sort villages into regions | Formal, functional and perceptual regions | — | WG.1, WG.2 |
| **1.3** | Mapmaker's Valley · Resources & Work | Gather and build | Renewable vs. nonrenewable resources; kinds of work | **Compass Rose** (fast travel, direction hints) | WG.2, WG.3 |
| **2.1** | The Americas · US & Canada | Canoe route on rivers and lakes | Why cities sit on water (Great Lakes, St. Lawrence) | — | WG.3 |
| **2.2** | The Americas · Latin America & Caribbean | **Mountain farm** (mockup 5) | Elevation zones; why coffee grows in the mountains | — | WG.4 |
| **2.3** | The Americas · Migration | Travel route choices | Push and pull factors; money sent home | **Canoe** (cross rivers and lakes) | WG.13 |
| **3.1** | Europe · Land & water | Port-to-port sailing + Alps pass | Peninsulas; rivers as roads; North Atlantic Drift | — | WG.5 |
| **3.2** | Russia & Central Asia | Rail journey + cold meter | Where people live in a cold, huge country | — | WG.6 |
| **3.3** | Regional Connections (Silk Road) | Trade market + caravan | Trade routes linking regions | **Rail Pass** (long-distance travel) | WG.5, WG.6 |
| **4.1** | Sub-Saharan Africa · Land & climate (Nigeria, Kenya) | **Talk and read** (mockup 4) + biome walk | Sahel, savanna, desertification; snow on the equator | — | WG.7 |
| **4.2** | People & cities (DR Congo, Ethiopia) | River boat market | Rivers, languages and city life | — | WG.7 |
| **4.3** | Resources & trade (South Africa) | Mine-to-port supply route | Minerals, cocoa, coffee; who earns the money | **Water Gourd** (cross desert screens) | WG.7 |
| **5.1** | N. Africa & SW Asia · Land, water, oil | **River temple** (mockup 7) | Shared rivers; upstream control; oil | — | WG.8 |
| **5.2** | Culture & diffusion (Iran, UAE) | Spread-the-idea puzzle | Cultural diffusion; reading a street | — | WG.8, WG.14 |
| **5.3** | Borders & water (the Levant) | Water-sharing council | Borders, resources, cooperation | **Water Key** (opens dams and canals) | WG.8 |
| **6.1** | South Asia | Monsoon season farm + **boss trial** (mockup 8) | Monsoon winds; farmers and the rain | — | WG.9 |
| **6.2** | Southeast Asia | Island hopping on the Ring of Fire | Volcanoes, islands, fertile soil | — | WG.9 |
| **6.3** | Population & development | Data village puzzle | Averages hide things; life expectancy; population | **Monsoon Cloak** (walk in heavy rain) | WG.12 |
| **7.1** | East Asia · China & Japan | Plains and terraces explore | Where the flat land is and why people crowd there | — | WG.10 |
| **7.2** | Site & situation | **Found a city** (mockup 6) | Site vs. situation | — | WG.10, WG.15 |
| **7.3** | Supply chains | Factory conveyor puzzle | The long trip a phone takes | **Trade Seal** (enter ports and factories) | WG.10 |
| **8.1** | Australia & the Pacific | Sail between islands + outback | Distance, islands, water | — | WG.11 |
| **8.2** | Global trade | Shipping lanes and narrow places | Chokepoints; interdependence | **Sail** (cross open ocean) | WG.16 |
| **8.3** | Borders, conflict & cooperation | **Finale:** the Council of Realms rebuilds the atlas | Conflict and working together | The Torn Atlas restored | WG.17 |

**Tool gates (Zelda style).** Each realm's tool opens paths in later realms (the Canoe crosses rivers in Europe, the Rail Pass crosses Russia, the Sail reaches the Pacific). A **teacher code** opens any realm for a student who joins late or skips ahead, so nobody is stuck.

---

## 5. One engine, many play modes

Every episode follows the same five beats (about **15 – 25 minutes**):

1. **Arrive** — a 3-line opening with Pip. What the Smudge did here.
2. **Explore and talk** — 2 to 4 screens, 3 people to talk to. This is where the reading lives (grade-5 level, EN / ES / دری, yellow tap-to-define words, "Make it easier").
3. **Main challenge** — the episode's special mode (farm, build, puzzle, route…).
4. **Boss trial** — 5 to 8 questions drawn from that subunit's mastery-check bank. Wrong answers explain why and come back later.
5. **Atlas page + save + turn in** — what you learned, one reflection question, save to the class Sheet, Copy / Download turn-in.

**The mode library** (built once, reused by data):

| Mode | Mockup | Used in |
|---|---|---|
| Explore (one screen at a time) | 3 | every episode |
| Talk and read | 4 | every episode |
| Farm / seasons | 5 | 2.2, 6.1, 7.1 |
| Gather and build | 6 | 1.3, 7.2, 4.3 |
| Dungeon puzzle | 7 | 5.1, 5.3, 7.3, 6.3 |
| Boss trial | 8 | every episode |
| Sort / route / market (smaller modes) | — | 1.2, 2.1, 2.3, 3.1, 3.2, 3.3, 4.2, 5.2, 6.2, 8.1, 8.2 |
| Passport, world map, save screen | 9, 2, 10 | always available |

---

## 6. How it is built

### 6.1 What a student's file looks like

Each episode ships as **one HTML file** with everything inside: the engine, the episode's data and the drawings. No outside pictures, no outside code. This matches how your simulations, Davis games and Tatiana Titan already work.

- **The world** is drawn on a `<canvas>` in pixel art: 16 × 16 tiles, one screen = 16 × 11 tiles (like the NES), scaled up sharp.
- **Characters and tiles are drawn in code**, the same rule as the Chomper games. A map is a few lines of text (`'T..,..~~...,...T'`), and a character is a 16 × 16 grid of letters. A full screen costs a few hundred bytes.
- **All words are HTML on top of the canvas**: talk boxes, questions, the top bar, buttons. That keeps text sharp and readable, lets the language buttons swap it, lets Dari read right to left, and lets screen readers read it.
- **Sound** is made in code with the browser's audio (short chiptune beeps), so no sound files.
- **Controls:** arrow keys / WASD, Space to talk or use, P for Passport. Click-to-walk with a mouse. A touch pad appears on touch screens.

### 6.2 Size budget (Canvas 450 KB ceiling)

Canvas runs JavaScript only in files under about 450 KB. Above that, the file opens as a blank page.

| Part | Estimate |
|---|---|
| Engine (all modes, save, sound, language switch) | 90 – 130 KB |
| One episode's data (maps, 3 languages of text, questions) | 40 – 80 KB |
| Code-drawn tiles and characters | 10 – 20 KB |
| Optional painted cut-scene picture (one, WebP) | 0 – 120 KB |
| **Target per episode file** | **under 380 KB** (70 KB of room to spare) |

The build script refuses to make a file over 430 KB, the same safety line the Tatiana Titan build uses.

### 6.3 Repo layout (the build plan for this GitHub repo)

```
worldwalker/
  PLAN.md                 this plan
  mockups/                the 10 mockups + kit.js / kit.css
  engine/                 (Phase 1) core loop, input, camera, tiles, sprites, sound
    modes/                explore, talk, farm, build, dungeon, boss, sort, route, market
    ui/                   top bar, talk box, passport, world map, save screen
    save.js               browser save, Passport Code, class Sheet
    i18n.js               EN / ES / دری switch
  episodes/
    1.1.js … 8.3.js       one data file per episode: maps, people, words, questions
  questions/              copied from the mastery-check banks (13 - Mastery Checks)
  tools/
    build.py              engine + one episode -> dist/Worldwalker 1.1.html
    check.py              size, missing translations, broken map letters
  tests/                  Playwright: play each episode start to finish, no errors
  apps-script/Code.gs     the class Sheet save script
  dist/                   finished Canvas-ready files (24 + the hub)
```

Fixing a bug means fixing the engine once and running the build again. All 24 files get the fix.

---

## 7. Saving: three layers so nobody loses their hero

### Layer 1 — The class Google Sheet (main save)

A Google Sheet with an **Apps Script web app** attached (draft in [`apps-script/Code.gs`](apps-script/Code.gs)).

- **Sign-in** = class code + first name + a 4-digit secret number the student picks. No last name, no email, no student ID.
- **Load:** when an episode opens, it asks the Sheet for that student's row and loads their hero.
- **Save:** when an episode ends (and at each checkpoint), it sends the new row back.
- The secret number is stored scrambled (hashed), never as the number itself.

**What the Sheet holds (tabs):**

| Tab | One row per… | Columns |
|---|---|---|
| **Students** | student | class code, first name, hero look, five powers, hearts max, coins, episodes done, tools, last played, Passport Code |
| **Log** | finished episode | time, class, name, episode, stars, hearts lost, minutes, questions missed, reflection text |
| **Classes** | class period | class code, period, realms open for this class |
| **Settings** | — | teacher code, game version |

You sort Students by a power to see who needs help with "Regions", or filter Log by episode to read all the reflections at once.

### Layer 2 — The browser's own save

Every few seconds the game also saves on that computer. If the internet drops mid-episode, the student picks up where they stopped. (This copy is only on that one computer and browser.)

### Layer 3 — The Passport Code

12 letters and numbers, like `WW-7K3Q-M2XA-9PDE`. It holds the whole hero: which episodes are done, the five powers, and the hero's look, plus a check so a typo is caught. It is shown on the Passport and the save screen, and it is **included in the turned-in work**. If the Sheet is down or blocked, the next episode asks for the code instead. So the Canvas submission itself is also a backup of every student's progress.

### How progress reaches "the next Canvas block"

The next episode is the next module item. When it opens, it tries, in order: **the class Sheet** → **the browser save** → **"paste your Passport Code"**. Whichever answers first loads the hero.

---

## 8. How it lives in Canvas: in the page *and* in a new tab

Each episode is one Canvas **assignment page** (like the Tatiana Titan assignment) with:

1. **The game in the page** — an `<iframe>` showing the uploaded episode file. Students play without leaving Canvas. Canvas allows `<iframe>` with `allowfullscreen` (checked against Canvas's own sanitizer rules).
2. **An "Open full screen" button** — the same file in a new tab (`target="_blank"`). Bigger screen, keyboard always works.
3. **The turn-in panel** — Copy my work → paste, or Download → upload. Nothing blocks turn-in.

Both ways open the same file, so the save is the same either way.

**Things to know about the in-page version:** the student has to click the game once before the arrow keys work (the game shows "Click to start"). The game stops arrow keys from scrolling the Canvas page once it has focus. The iframe has a fixed height, so the game is designed to fit 16:11 plus its top bar.

### Two ways to host the files (decide in Phase 0)

| | **A. Upload each file to Canvas Files** (how your games work now) | **B. Host on GitHub Pages, show it in Canvas with an iframe** |
|---|---|---|
| Size limit | 450 KB per file | none that matters |
| Fixing a bug | rebuild and re-upload 24 files | push once, every class gets the fix |
| Browser save shared across episodes | not guaranteed; Canvas may serve each file from a different address | yes, all episodes share one address |
| Depends on | Canvas only | the school network allowing `github.io`, and Canvas's iframe allowlist |
| Privacy | files sit inside the course | the game is public (no student data is in it; saves go to the Sheet) |

Both can use the class Sheet. Phase 0 tests both on a school Chromebook before anything big is built.

---

## 9. Languages, reading level and access

- **EN / ES / دری** buttons on every talk box, question and reading. Dari reads right to left. All three languages sit side by side in each episode's data file, so a word can be fixed without touching the game.
- **Grade-5 reading level** for talk and questions, checked with the same reading-level script used on the Read and Respond packets.
- **Yellow words** open a one-line meaning. **"Make it easier"** swaps to a shorter version.
- **No hearts lost while reading.** Hearts only matter in boss trials and Smudge chases.
- **Reduced motion** is respected (animations stop if the computer asks for less motion).
- **Color is never the only signal** (locked dots also show an icon, wrong answers also show words).
- **Translations:** Spanish and Dari drafts are written by Claude; a fluent reader should check the Dari before students see it.

---

## 10. Build phases

| Phase | What gets built | You can test |
|---|---|---|
| **0 · Test the pipes** | One tiny test file: iframe + new tab in a Canvas page, keyboard in the iframe, save to and load from a test Sheet, the GitHub Pages iframe, on a school Chromebook | Which hosting way works at school; whether the Sheet is reachable from Canvas |
| **1 · First playable episode** | The engine (explore, talk, boss trial, save, Passport, language switch) + **Episode 1.1**, start to finish | One student plays 1.1 in Canvas and their row shows up in the Sheet |
| **2 · Unit 1** | 1.2 (sort mode), 1.3 (gather and build), the world map hub, the teacher code | A full unit, with the hero carrying across three Canvas items |
| **3 · Units 2 – 3** | Farm, route, rail and market modes; Canoe and Rail Pass gates | Six more episodes |
| **4 · Units 4 – 8** | Mostly data files now; dungeon puzzles; remaining tools | Twelve episodes |
| **5 · Finale and polish** | 8.3 Council of Realms, sound pass, Dari review, full play-through tests of all 24 | The whole year |

Each phase ends with Playwright playing every built episode start to finish (no errors, no blank pictures, file under 430 KB) and a look at real screenshots.

---

## 11. Decisions for you

1. **Hosting:** Canvas Files (A), GitHub Pages (B), or decide after the Phase 0 test.
2. **Sheet owner:** your ACPS Google account or your personal one. The school account may block "Anyone can use this web app"; the personal one stores (first-name-only) student game data outside the school's Google.
3. **Build order:** in course order starting with 1.1, or start with the unit your classes are on now.
4. **Names:** "Worldwalker", "The Torn Atlas", "Pip" and "the Smudge" are placeholders.
5. **Painted art:** everything is drawn in code now. If you want a painted Codex picture for each realm's opening (9 pictures: title + 8 realms), say so and a Codex list will be written.
6. **Grading:** the turned-in work (reflection + Passport Code) as a completion grade like Tatiana Titan, or points from stars.

---

## 12. The ten mockups

| # | File | Screen |
|---|---|---|
| 1 | `01-title.html` | Title, look picker, sign-in |
| 2 | `02-world-map.html` | World map hub: 8 realms, 24 episode dots, tool gates |
| 3 | `03-overworld.html` | Exploring a region (1.1) |
| 4 | `04-talk-and-read.html` | Talk and read with EN / ES / دری (4.1, the Sahel) |
| 5 | `05-farm.html` | Mountain farm, elevation zones (2.2) |
| 6 | `06-city-build.html` | Found a city, site vs. situation (7.2) |
| 7 | `07-dungeon.html` | River temple puzzle, shared rivers (5.1) |
| 8 | `08-boss-trial.html` | Boss trial, the monsoon (6.1) |
| 9 | `09-passport.html` | Passport: powers, bag, stamps, code |
| 10 | `10-save-and-turn-in.html` | Atlas page restored, save, turn in, Canvas view |

The mockups are screens, not the finished game: some parts are clickable (language buttons, the river puzzle, boss answers, copy buttons), but walking around is not wired up yet. That is Phase 1.
