# Worldwalker · Fun Pass Brief (for Claude Code)

Repo: https://github.com/gabrielelias22307/worldwalker
Goal: make the game more fun to play by letting students DO things in the world, not only in menus. Build everything in **Episode 1.1 first**, play it, then roll the engine changes out to all 24 episodes.

## Rules that do not change

- One engine, one data file per episode (`game/episodes/ep-X-Y.js`). New content goes in the episode data, not hard-coded in the engine.
- Every new line of text exists in English, Spanish and Dari (`en`, `es`, `fa`). Dari reads right to left.
- **No "Make it easier" button or easier versions of text.** Do not add one. The engine never shows the `easy:` versions already in the episode files (212 lines), so delete them from all 24 episode files, take `easy` out of `docs/EPISODE-FORMAT.md` and `tools/check.js`, and take "Make it easier" out of `PLAN.md` and `TEACHER-GUIDE.md`. Rebuild and check the sizes go down.
- Canvas files must stay under 430 KB (`tools/build.js` refuses bigger). Check sizes after every change.
- Cozy rules: nothing can be lost for good, no timers on reading, wrong moves always explain why, music and sound can be turned off, reduced motion is respected.
- The thing students do to win must be the thing they are learning. If you take the geography out and the action still makes sense, it is decoration, not a challenge.
- Saves (browser, Passport Code, class Sheet through `apps-script/Code.gs`) must keep working. Any new saved thing (tools, built items, home items) is added to the save state, the Passport Code if it fits, and the Sheet columns.
- Run `node tools/check.js`, `node tools/build.js` and `node tests/play.js` after each change. Update `tests/play.js` so it plays the new parts too.
- Write all player-facing text in plain, grade-5 language.

---

## 1. Make Christopher clear (do this first)

**Problem:** Christopher is the small living compass that follows the hero, but students never meet him. He speaks only in short messages at the bottom of the screen and sells hints during trials. Gabriel can't tell what he does, so students can't either.

**Change:**
- **Meet Christopher in Episode 1.1.** After the opening card, Christopher flies up to the hero, a speech bubble appears over him on the map, and he says who he is in 2–3 short lines: he's a living compass, he helps you find your way, and he can give hints.
- **Make him easy to see.** Draw him a bit bigger, with a soft glow, and show his name the first time.
- **One button to talk to him** (for example, `C`, plus a button on touch screens). When you talk to him he answers "What do I do next?" using the current goal, and he opens his hint shop.
- **He talks on the map.** His messages appear as a speech bubble over him, not as a pop-up in the corner.
- **Write his job in one sentence** everywhere it appears (story screen, Passport, teacher guide): *Christopher is your living compass: he points the way, tells you what to do next, and trades hints for coins.*

## 2. Let students act on the world: chop, clear and build

**Problem:** You can only walk, talk and throw stars. You can't chop a tree, cut grass or build anything, so the world feels like a picture you walk across.

**Change: a tool bar like Stardew Valley's.**
- A small tool bar at the bottom of the screen. Number keys or a tap pick a tool; one "use" key works the tile the hero is facing. Pick keys that don't clash with talking and throwing stars, and add touch buttons.
- **Starting tools:** an axe (chop small trees and bushes → wood) and a sickle (cut tall grass → fiber, and sometimes a seed or a coin). Later realms can add tools that match their topic, like a hoe for the farm episodes.
- **Abundance:** chopped trees and cut grass grow back after a while or when the episode is replayed. The border trees around the map and anything that blocks a path the student needs can't be cut.
- **Juice, but soft:** a little shake, a leaf or chip burst, a gentle sound, and the item flying to the bag.

**Building has to teach.** Wood and fiber pay for things that use the episode's big idea:
- **1.1 Intro to Maps:** build signposts. A student places each signpost at the spot its directions describe (this is the compass stone moved into the world: "two steps south of the bridge" or "40°N, 74°W" on a small grid). A signpost in the wrong place shows why, and you can pick it up and move it.
- **1.1 Intro to Maps:** repair the broken south bridge with wood to reach Lena's side of the river.
- **Later episodes (examples to add to the episode data):** fences and terraces on the mountain farm (2.2), a dock to launch the canoe (2.3), a market stall (3.3), a well or canal gate in the river and water episodes (5.1, 5.3), and choosing where to put a town in the site-and-situation episode (7.2).
- Add a `build` list to the episode format: what can be built, what it costs, where it can go, what makes a spot right or wrong, and the "why" line for each. Document it in `docs/EPISODE-FORMAT.md`.

## 3. Move the challenges into the map

- The **compass stone** becomes an in-world task wherever it can (see the 1.1 signposts above). Keep the card panel as a fallback for episodes where an in-world version doesn't fit yet.
- The **Grump trial** becomes a short scene in the world: each right answer opens a gate or clears a patch of fog on the path toward the Grump. A wrong answer still costs a heart and shows why, and the question comes back.

## 4. A home that grows

- Add a small **base camp** reached from the world map. Restored atlas pages hang on the wall, stamps decorate it, earned tools sit on a rack, and each realm leaves one souvenir.
- Students can spend wood, fiber and coins to place a few decorations they choose.
- Save what's in the camp with the rest of the hero.

## 5. People who remember you

- Let a few people come back in later episodes and mention what the student did for them (for example, Lena shows up in a later realm and talks about Grandpa's compass).
- Keep it to one or two lines, in all three languages.

## 6. More to find

- Add 2–3 small secrets per map tied to the content, for example a hidden spot you can only find by following a compass clue, or a sign that makes sense once you know the map key.
- Keep atlas scraps; secrets can give scraps, coins or a decoration for the camp.

## 7. Make big moments feel big

- Never show two reward pop-ups on top of each other or on top of a question. Queue them and show them one at a time after the panel closes.
- Give the big wins their own short moment: the atlas page flying back into the book, a few notes of music when a new power unlocks, a short pause when a gate opens.

## 8. A class goal (after the class Sheet is connected)

- On the world map, show a shared **class atlas**. Every page anyone in the class restores lights up part of the map.
- Show only the class total, never a ranking of students.

---

## 9. Make the earned tools do something

**Problem:** the 8 tools (Compass Rose, Canoe, Rail Pass, Water Gourd, Water Key, Monsoon Cloak, Trade Seal, Sail) are earned and shown in the bag and Passport, but nothing in the game uses them. `WW.hasTool()` is only used to give them out and to draw the bag.

**Change:** give every tool a use on the map, Zelda style. The Canoe crosses river tiles, the Rail Pass rides the train tracks that are already drawn in 1.3, 3.2 and 4.3, the Water Gourd crosses desert tiles, the Water Key opens canal gates, the Monsoon Cloak walks through heavy rain, the Trade Seal opens port and factory doors, and the Sail crosses open ocean. Every episode should have at least one optional spot (a secret, scraps, a camp decoration) that only an earlier tool reaches. A required path must never need a tool the student might not have, because the teacher code can open any episode.

## 10. What playing all 24 episodes showed

All 24 episodes play start to finish with no errors. The maps are varied and good-looking (snow and rail in 3.2, rain and rice paddies in 6.1, sugar fields and rail in 4.3). Every episode follows the same shape: 3 people, each with a quiz question; a quest; a compass stone; and an 8-question Grump trial (3 right wins).

The plan promised action modes like a mountain farm, gather and build, river routes and a factory conveyor. In the built game almost every one became a panel on top of the map:

| Compass stone type | Episodes | What the student does |
| --- | --- | --- |
| Sort | 1.1, 1.2, 1.3, 2.2, 2.3, 3.3, 4.1, 5.2, 6.1, 6.2, 7.1 (11) | Tap cards into 2–4 bins |
| Table | 3.1, 4.2, 6.3, 8.1 (4) | Read a table, answer 4 questions |
| Order | 3.2, 4.3, 7.3 (3) | Put 5–7 steps in order |
| Claim | 2.1, 5.3, 7.2, 8.3 (4) | Pick 1 of 3 choices plus reasons |
| Combo | 5.1, 8.2 (2) | Set switches |

Quests rotate by episode: **find** (walk to a spot), **fight** (a 3-question duel with an Ink Thief) or **trade** (pick 1 of 3 offers in a panel). In the 8 "fight" episodes (1.2, 2.3, 3.1, 4.2, 5.3, 6.3, 7.1, 8.3), every main activity is a question panel: the people's questions, the duel, the compass stone and the trial. Those 8 need world actions most.

A few names repeat. Rosa the mapmaker comes back in 8.3 to host the Council, and Yesenia shows up in 2.2 and 2.3; build section 5 on those. But some repeats are different people with the same name, which will confuse students once people start remembering you: Rosa is also the mine trader in 1.3, Lucía is a wheat farmer in 1.2 and a bus driver in 2.3, and Rahim is a toolmaker in 1.3 and a fisher in 6.1. Rename one of each pair, or make them the same person on purpose.

Reward pop-ups stack on top of each other and on top of open panels in every episode (up to 4 at once in 1.2 and 1.3). See section 7.

**Turn each compass stone and quest into a world action.** Suggested first versions, each using the chop, cut, carry and build actions from section 2:

| Ep. | Now | Try instead (in the world) |
| --- | --- | --- |
| 1.1 | Sort absolute/relative cards | Place signposts where their directions point; repair the south bridge |
| 1.2 | Sort region cards; Ink Thief duel | Carry each village banner to the region it belongs to; draw a region fence with wood |
| 1.3 | Sort resource cards; trade quiz | Chop wood (natural), hire a helper (human), build a sawmill (capital); bring Rosa real wood for the iron |
| 2.1 | Pick a city site | Paddle to each site, then plant the city flag and say why |
| 2.2 | Sort crops by height | A real farm: plant each crop on the right terrace; wrong height wilts with a reason |
| 2.3 | Sort push/pull cards; duel | Walk the road; at each stop pick up a push or pull note and drop it in the right bag |
| 3.1 | Read a table | Sail between ports and feel the winter at each one; log the temperature in the Passport |
| 3.2 | Order 5 train stops | Ride the train (uses the Rail Pass idea) and get off at each stop in order |
| 3.3 | Sort goods/ideas/people | Run a caravan stall: load goods, ideas and travelers on the right camels |
| 4.1 | Sort biomes | Walk from desert to rainforest planting the Green Wall seeds in the Sahel strip |
| 4.2 | Read a table; duel | River-boat market: deliver to each city by boat |
| 4.3 | Order 7 steps | Push a cart along the rail from mine to port, loading at each stop |
| 5.1 | Set switches | Open real canal gates on the map to water the fields |
| 5.2 | Sort words; trade quiz | Carry words between a Kashan stall and a Dubai stall |
| 5.3 | Pick a plan; duel | Build the shared canal with each town's wood and stone |
| 6.1 | Sort monsoon cards | Plant and harvest rice before and after the monsoon rain |
| 6.2 | Sort mainland/island | Canoe between islands and plant each flag on the right side |
| 6.3 | Read a table; duel | Walk the village and count homes, wells and schools yourself |
| 7.1 | Sort China/Japan/both; duel | Farm the flat land vs. build terraces on hills |
| 7.2 | Pick a city site | Build the city on the site you pick, with wood and stone |
| 7.3 | Order phone steps | Factory conveyor: carry each part to the next station |
| 8.1 | Read a table | Sail to each island and log the distance |
| 8.2 | Set switches | Steer the ship through each narrow strait |
| 8.3 | Pick a plan; duel | Council of Realms: build the bridge between two towns together |

Keep the panel versions as a fallback while each world version is built and tested.

## Order of work

1. Christopher (section 1).
2. Tool bar with axe and sickle, regrowth, and saving (section 2, first half).
3. 1.1 signposts and bridge repair (section 2 building + section 3 compass stone).
4. Reward queue and big moments (section 7).
5. Play 1.1 start to finish, check the size, show Gabriel screenshots.
6. Tool uses on the map (section 9).
7. World versions of the compass stones and quests, the 8 "fight" episodes first (section 10).
8. Grump trial in the world (section 3), then camp (4), returning people (5), secrets (6), class atlas (8).
9. Remove the unused `easy:` text from all episodes (top of this brief).

## Done when

- A new player meets Christopher and can say what he does.
- In 1.1 the student chops, cuts grass, repairs the bridge and places signposts, and placing them is how they show they know absolute and relative location.
- `tests/play.js` plays every episode start to finish with no errors, and every Canvas file is under 430 KB.
- All new text is in English, Spanish and Dari.
