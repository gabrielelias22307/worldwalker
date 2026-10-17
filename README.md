# WORLDWALKER — The Torn Atlas

A top-down geography RPG for **APA World Geography** (Alexandria City High School), built from the systems of the first Zelda, Stardew Valley and the first Warcraft. **24 playable episodes**, one per Canvas subunit (1.1 – 8.3), in **English, Español and دری**.

**▶ Play:** https://gabrielelias22307.github.io/worldwalker/ (after GitHub Pages is turned on: Settings → Pages → Branch `main`, folder `/ (root)`)

The Smudge tore the Great Atlas into 24 pages. In each episode the student walks a map of that region, talks to the people who live there (short grade-5 readings with tap-to-define words and a "Make it easier" button), solves the compass stone, beats the Smudge in a question trial drawn from the subunit's mastery-check bank, writes one reflection and turns in their work. The hero, five geography powers (the Five Themes), tools and stamps carry from episode to episode.

## What is in this repo

| Path | What it is |
|---|---|
| [`TEACHER-GUIDE.md`](TEACHER-GUIDE.md) | How to put episodes in Canvas, what you get back, the Passport Code, turning on the Google Sheet, the teacher code |
| [`PLAN.md`](PLAN.md) | The design plan the game was built from |
| `game/index.html` | The world map: progress, Passport Code, every episode |
| `game/ep-1-1.html` … `ep-8-3.html` | The 24 episodes (GitHub Pages versions) |
| `game/episodes/` | One data file per episode: map, people, words in 3 languages, challenge, questions |
| `game/engine/` | The game engine (drawing, walking, talks, challenges, boss trial, saving) |
| `game/config.js` | Google Sheet address and teacher code |
| `dist/canvas/` | One-file versions of every episode for uploading to Canvas Files (160–185 KB each, under the 450 KB limit, no internet needed) |
| `dist/canvas-blocks/` | Paste-ready Canvas page blocks: the game in the page + a full-screen button + turn-in steps |
| `apps-script/Code.gs` | The Google Sheet save script |
| `docs/EPISODE-FORMAT.md` | How an episode file works, map letters, challenge types |
| `mockups/` | The ten design mockups the game started from |
| `tools/`, `tests/` | Checker, builder, and the automatic play-tests |

## The 24 episodes

| | Realm | Challenge |
|---|---|---|
| 1.1 Intro to Maps · 1.2 Regional Tour · 1.3 Resources & Work | Mapmaker's Valley | sort · sort · sort |
| 2.1 US & Canada · 2.2 Latin America & Caribbean · 2.3 Migration | The Americas | claim · land bands · sort |
| 3.1 Europe · 3.2 Russia & Central Asia · 3.3 Regional Connections | Europe, Russia & Central Asia | table · order · sort |
| 4.1 Land & Climate · 4.2 People & Cities · 4.3 Resources & Trade | Sub-Saharan Africa | land bands · table · order |
| 5.1 Land, Water & Oil · 5.2 Cultural Diffusion · 5.3 Borders & Water | N. Africa & SW Asia | switches · sort · claim |
| 6.1 South Asia (monsoon) · 6.2 Southeast Asia · 6.3 Population | South & Southeast Asia | land bands · land bands · table |
| 7.1 China & Japan · 7.2 Site & Situation · 7.3 Supply Chains | East Asia | sort · claim · order |
| 8.1 Australia & the Pacific · 8.2 Global Trade · 8.3 Borders & Cooperation (finale) | Australia, the Pacific & the World | table · switches · claim |

## Working on it

```
node tools/check.js          # every episode: map, places you can reach, 3 languages, questions
node tools/build.js          # builds the Pages files, the Canvas files and the Canvas blocks
node tests/play.js           # plays all 24 episodes start to finish in a real browser
node tests/walk.js           # real keyboard walking, screen scrolling, Smudge hits, phone arrows
node tests/maps.js           # draws every whole map to shots/maps/
```

All characters and tiles are drawn in code; the game uses no picture or sound files.
