# Worldwalker · Fun Pass 2: Playability

Read `docs/FUN-PASS.md` first. Round 1 worked: all 24 episodes play start to finish, Christopher is clear, chopping feels good, and most compass stones happen on the map.

**This round is about playability: how the game feels in a student's hands on a real school Chromebook.** A change counts only if it makes the game easier to play, smoother to move through, or more fun to do. Every finding below came from playing all 24 episodes, plus playing 1.1 with real key presses at three screen sizes.

## The playability rules for this round

- **The game must fit the screen.** Everything a student needs (map, tool bar, quest bar, Christopher's bubble) must be visible without scrolling at these sizes:
  - School Chromebook, full screen: **1366 × 768**
  - The game inside the Canvas page: **654 × 820** (measured in the real Canvas page)
  - Phone: **390 × 844**
- **Hands on the world, not on panels.** Panels are for reading and choosing; the playing happens on the map. Count the panels a student must answer in each episode, and bring that number down.
- **The student always knows what to do next,** without scrolling, guessing, or paying for it.
- **Every action answers back right away:** a sound, a little motion, and words that say what happened.
- **No dead ends and no busywork.** Anything a student collects has somewhere to go, and anything they do teaches the episode's big idea.
- All the rules in `docs/FUN-PASS.md` still apply: English, Spanish and Dari for every new line (no "Make it easier" button), under 430 KB, cozy rules, saves keep working, grade-5 words.

---

## Part A · Fix these first (students will hit them in the first minute)

1. **The tool bar falls off the bottom of a Chromebook screen.** At 1366 × 768 the 1.1 page is about 909 pixels tall, and the tool bar sits at 777–841, below the bottom edge. Carrying cards adds a row and makes it worse. Inside the Canvas frame it fits, but the quest bar wraps to 3 lines and the map gets small.
   - Move the tool bar (and the "Card 4 of 8" carry bar) **inside the game frame**, laid over the bottom edge of the map, like Stardew Valley.
   - Shorten the quest bar to **the current goal only**, with the full list in the Passport or on hover/tap.
   - Fit the whole game to the window height. Test at all three sizes above.
2. **Christopher's bubble covers what he's pointing at.** When he says "Talk to Rosa," the bubble sits on top of Rosa. On a phone it covers most of the map.
   - Put the bubble on the side **away from** the person or place he names, and never over the hero.
   - Make it narrower on small screens.
3. **Wrong directions in 3.2, 4.3 and 7.3.** The compass stone says "Tap the stops/steps," but the game means walk to them. Fix the words in all three languages. Search every episode for leftover "tap" or "click" instructions.
4. **Christopher's first "Show me the way" costs 5 coins when a new student has 0.** Make it free the first time in each episode, and free whenever the student has fewer coins than it costs.
5. **The base camp opens with its top cut off,** so the wall of atlas pages is half hidden. Open it scrolled to the top, and make it fit at 1366 × 768.

## Part B · Make the controls feel good

6. **Space does too much.** It talks, throws a star, and uses whatever tool is picked. Check that a student is never surprised: walking into a person always talks, even with the axe picked; Space never chops a tree when the student meant to talk.
7. **Pick the right tool for the student.** When the hero faces a small tree, a hint shows the axe; when they face tall grass, the sickle. Optionally, switch automatically and show it in the tool bar.
8. **Touch screens.** Make sure every tool, the carry action, and Christopher work with on-screen buttons, and that the buttons don't cover the map.

## Part C · Give everything a purpose

9. **Wood and fiber need somewhere to go in every episode.** Right now building only happens in 1.1. In the other 23, wood and fiber only buy 8 camp decorations, so after a few episodes chopping is pointless.
   - Add **one build per episode** that teaches the big idea, using the `build` list from round 1. Start with these:

     | Ep. | Build |
     | --- | --- |
     | 1.2 | A fence of wood around a formal region |
     | 1.3 | A sawmill (capital resource) from the wood you chopped (natural resource) |
     | 2.2 | Terraces on the coffee mountain |
     | 2.3 | A dock to launch the canoe |
     | 3.3 | A market stall at the caravan crossroads |
     | 4.1 | Planting the Green Wall in the Sahel strip |
     | 5.1 | Canal gates to water the fields |
     | 5.3 | The shared canal, with wood and stone from both towns |
     | 6.1 | Rice paddy walls before the monsoon |
     | 7.2 | The city you pick, built on its site |
     | 8.3 | The bridge between the two towns at the Council |

   - A build in the wrong place explains why, and the student can move it.
10. **Planting should teach.** Seeds grow anywhere and turn into coins. In the farm episodes, make the crop grow only where the lesson says it should:
    - **2.2:** each crop only grows at its right height (coffee in the cool middle, bananas low and hot).
    - **6.1:** rice grows only when the summer monsoon rain comes.
    - **7.1:** rice on flat land, tea on terraced hills.
    - A seed planted in the wrong place sprouts, then wilts with a one-line reason, and gives the seed back.

## Part D · Fewer quiz panels in a row

11. **Half the quests are still quiz panels.** All 8 Ink Thief duels (1.2, 2.3, 3.1, 4.2, 5.3, 6.3, 7.1, 8.3) and all 8 trades are question boxes. In the duel episodes a student answers question boxes about 4 times in a row: the three people, the thief, then the Grump.
    - **Ink Thief:** make it a chase on the map. The thief drops the stolen item into pieces; each piece sits by a clue the student answers by **going somewhere** or **doing something** (the right region, the right push or pull sign). Catching the thief at the end is the reward.
    - **Trades:** make them real. The student carries the goods to the trader on the map, and picks what to offer by **walking to it** (the logs from the woods, the iron cart), not by picking from a list.
12. **The Grump trial is still a question panel.** Keep the questions, but play them in the world: each right answer clears a patch of fog or opens a step of the path to the Grump. The student walks forward between questions.

## Part E · Make the tools matter

13. **The Water Key and the Monsoon Cloak are never used.** Give each one a secret in later episodes (canal gates for the key in 6.1 or 7.1; walking through heavy rain for the cloak in 6.2, 7.1 or 8.1).
14. **Ride the train.** In the route episodes (3.2, 4.3, 7.3), let the Rail Pass carry the hero along the tracks to each stop instead of walking beside them.
15. **Vary the secrets.** The Canoe opens 11 of the 21 secrets. Spread them across all the tools a student has by then.

---

## Order of work

1. Part A (all five fixes), then play 1.1 at all three sizes.
2. Part B (controls).
3. Part C in **1.2, 2.2 and 6.1 only**; play them; then the rest.
4. Part D in **1.2 (a duel) and 1.3 (a trade) only**; play them; then the rest.
5. Part E.

Stop after each step and show Gabriel screenshots before going on.

## How to test playability (add these to `tests/`)

- **`tests/fit.js`:** opens every episode at 1366 × 768, 654 × 820 and 390 × 844 and fails if the tool bar, quest bar, Christopher's bubble or any open panel goes outside the window, or if the page needs scrolling.
- **`tests/keys.js`:** plays 1.1 with **real key presses only**, no shortcuts: walk to Rosa, talk, pick the axe, chop a tree, cut grass, repair the bridge, place a signpost. Fails if any step can't be done with keys.
- **Panel count:** have `tests/play.js` print how many question panels each episode opens. That number should go down from round 1.
- Run `node tools/check.js`, `node tools/build.js` and `node tests/play.js` after every step. Every Canvas file stays under 430 KB.

## Done when

- At 1366 × 768 a student sees the whole game without scrolling, in every episode.
- Christopher never hides the thing he's talking about.
- Every episode has one build that uses the big idea, and wood is never useless.
- In the farm episodes, where you plant is the lesson.
- No episode asks more than two question panels in a row.
- Every tool opens at least one secret, and the Rail Pass rides the train.
- All tests pass, and every Canvas file is under 430 KB.
