# Worldwalker · Teacher guide

**Play it:** https://gabrielelias22307.github.io/worldwalker/ (turn on GitHub Pages first: repo **Settings → Pages → Branch: main, folder: / (root) → Save**).

## What students do in one episode (20–30 minutes)

1. Sign in with **first name**, **class code** (like `GEO-3B`) and a **4-digit secret number**, and pick a look. Next time they just press Continue.
2. Walk the map (arrow keys or WASD; on-screen arrows on touch screens; or click where to walk).
3. Talk to 3–4 people. Each talk is a short reading at about a grade-5 level, with **EN / ES / دری** buttons, yellow tap-to-define words and a **Make it easier** button. Each person asks one question.
4. Do the **quest**. A person with a gold **!** over their head asks for help. The student talks to a second person (blue **?**), then does one thing: **find** a secret spot from a direction clue, **beat an Ink Thief** in a short question duel, or **make the right trade**. Then they go back for thanks. The compass stone stays locked until the quest is done.
5. Solve the glowing **compass stone** (sort cards, put steps in order, pick a city site and give reasons, set switches, or read a table).
6. Beat the **Grump**: 8 questions from that subunit's mastery-check bank. 3 right answers win. A wrong answer costs a heart and shows why, and that question comes back.
7. **Claim the atlas page.** The Grump's mist clears away and the page waits on a glowing stone where the Grump stood. Walking onto it ends the episode.
8. The **finish screen**: what they earned (and why), 3 things learned, one written reflection, stars, the Passport Code, and **Copy my work / Download** for turning in.

**How students know when they are done:** the intro card lists the five goals, the quest bar across the top ticks them off in order (… → Face the Grump → Claim the atlas page), and a dark mist around the edges of the map shrinks back with every goal finished (the map itself always keeps its full colors).

## What students collect, and what it does

| They do this | Power (+ points) | Coins |
|---|---|---|
| Answer a person's question | +1 to that question's theme | +2 |
| Finish the quest | +2 | +10 |
| Solve the compass stone | +2 | +5 |
| Beat the Grump | +2 | +15 |
| Pick up an atlas scrap | – | +3 (and 3 scraps = a star) |

Every reward pops up with the reason ("+1 📍 Location · you answered Rosa"). The **five powers** are the Five Themes of Geography, and they carry from episode to episode. Each one unlocks a level at **3** points and another at **12**:

| Power | Level 1 (3) | Level 2 (12) |
|---|---|---|
| 📍 Location | an arrow points to the next goal | a second arrow points to the nearest atlas scrap |
| 🏞️ Place | +1 heart | +1 more heart |
| 🌱 Human–Environment Interaction | wandering Grumplings move slower | each atlas scrap gives back a heart |
| 🚚 Movement | walk faster | walk faster still |
| 🧩 Region | 1 free hint in every trial and duel | 2 free hints |

**Coins** buy more hints from Christopher (10 coins each). A hint hides one wrong answer. A "New power!" banner appears the moment a level unlocks, the Passport has a **How you grow** page, and the world map shows each power's levels. The finish screen lists everything earned in that episode.

Nobody gets stuck: running out of hearts just sends the student back with full hearts.

**Music and sound:** every realm has its own song, and the Grump trial has its own. The **Music** and **Sound** buttons above the game turn each one off; the choice is remembered on that computer. Headphones are a good idea in class.

## Putting an episode in Canvas

Every episode already has a paste-ready Canvas block in `dist/canvas-blocks/`. Open the file, copy everything, and paste it into the HTML editor (`</>`) of a Canvas assignment set to **text entry + file upload**. The block shows the game inside the page, a **full-screen** button, and the turn-in steps in English, Spanish and Dari.

Two ways to host the game:

| | GitHub Pages (the blocks use this) | Upload to Canvas Files |
|---|---|---|
| File | nothing to upload | `dist/canvas/Worldwalker X.Y.html` (each one is under the 450 KB Canvas limit) |
| Progress between episodes | carries automatically on the same computer and browser | carries through the Passport Code (and the class Sheet, if on) |
| Fixing a typo | edit once on GitHub, every class gets it | rebuild and re-upload that file |

If the school network or Canvas blocks the game inside the page, students can still use the full-screen button.

## What you get back

The turned-in text has: name, class, date, stars, hints used, scraps found, hearts lost, minutes played, every talk question with the student's answer and number of tries, the quest (and how many tries the trade or duel took), the challenge, which Grump questions they missed, their reflection, their five power scores and their **Passport Code**.

## The Passport Code (backup save)

15 letters and numbers, like `WW-80G00-0K000-01R3B`. It holds which episodes are done, the five powers and the hero's look. If a student changes computers or clears the browser, they paste it on the start screen (or the world map) and keep going. It is part of every turned-in assignment, so you always have a copy.

## Turning on the class Google Sheet (optional)

1. Make a Google Sheet with tabs **Students**, **Log**, **Settings**. In Settings put `teacherCode` in A1 and any words in B1; put `salt` in A2 and a long random phrase in B2.
2. **Extensions → Apps Script**, paste `apps-script/Code.gs`, save.
3. **Deploy → New deployment → Web app**, Execute as: **Me**, Who has access: **Anyone**. Copy the web app URL.
4. Paste the URL into `game/config.js` as `SHEET_URL: '...'`, then run `node tools/build.js` and push.

The student's row is updated after every goal (quest, compass stone, Grump), not only at the end, and at the start of every episode the game reads it back, so powers and coins follow the student to any computer. It never goes backwards: if an older computer saves later, the Sheet keeps the higher scores, and coins spent on hints stay spent. `node tests/sheet.js` checks all of this against a pretend Sheet; try one student in your real Sheet once before class.

Each finished episode also adds a row to **Log** (episode, stars, hearts lost, minutes, missed questions, reflection) and updates the student's row in **Students**. Only first name, class code and a scrambled secret number are stored.

## Teacher code

On the world map, open **For teachers** and type the teacher code (default `ATLAS`, change it in `game/config.js`). Every episode opens on that computer, which is handy for showing an episode on the board or for a student who joins late.

## Teacher console

Open `game/teacher.html` (on the world map: **For teachers → Open the teacher console**) and type the teacher code. For each of the 24 episodes it shows:

- the **whole map** with the start, the numbered people, the compass stone, the Grump and the scraps marked
- every person's talk (with the "Make it easier" version) and their question, with the **right answer checked** and the reason for every choice
- the **compass stone answer key**: which cards go in which group, the right order, which reasons fit which choice, which switch settings work, or the table and its questions
- all 8 **Grump trial questions** with the right answer checked
- the **quest**: who gives it, what the contact says, and the action's answer key (the secret spot is a gold square on the map; the thief's questions and the right trade are checked)
- the finish screen: the 3 things learned, the reflection question and its sentence starter, plus the signs and the yellow words

Jump buttons open the episode in a new tab **straight at the start, the compass stone, the Grump trial or the finish screen**. These are previews: nothing is saved on that computer and nothing goes to the class Sheet. **Print answer key** prints the episode you are looking at. **Student link** copies the normal link to the episode. **Lock this computer** turns teacher mode off again (do this on a student's computer).

The console is in English, Spanish and Dari. The teacher code only keeps students from wandering in by accident. It is not real security, because the answers are in the game files anyone can open.

## Changing words or questions

Each episode is one file in `game/episodes/` (for example `ep-4-1.js`). Every sentence sits there in English, Spanish and Dari side by side. Edit the words, then run:

```
node tools/check.js ep-4-1.js    # checks the map, places you can reach, all 3 languages, the questions
node tools/build.js              # makes the GitHub Pages page, the Canvas file and the Canvas block
node tests/play.js 4.1           # plays the episode start to finish and saves screenshots
```

`docs/EPISODE-FORMAT.md` explains every part of an episode file, including the map letters.

## Please check

- **Dari:** all Dari text was written by Claude. Please have a fluent reader look over it before students use it.
- **Facts and numbers:** each episode was written from your readings and question banks, then checked by the test tools, but a teacher's eye on the facts is still worth it.
