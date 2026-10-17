# Worldwalker · Teacher guide

**Play it:** https://gabrielelias22307.github.io/worldwalker/ (turn on GitHub Pages first: repo **Settings → Pages → Branch: main, folder: / (root) → Save**).

## What students do in one episode (15–25 minutes)

1. Sign in with **first name**, **class code** (like `GEO-3B`) and a **4-digit secret number**, and pick a look. Next time they just press Continue.
2. Walk the map (arrow keys or WASD; on-screen arrows on touch screens; or click where to walk).
3. Talk to 3–4 people. Each talk is a short reading at about a grade-5 level, with **EN / ES / دری** buttons, yellow tap-to-define words and a **Make it easier** button. Each person asks one question.
4. Solve the glowing **compass stone** (sort cards, put steps in order, pick a city site and give reasons, set switches, or read a table).
5. Beat the **Smudge**: 8 questions from that subunit's mastery-check bank. 3 right answers win. A wrong answer costs a heart and shows why, and that question comes back.
6. The **finish screen**: 3 things learned, one written reflection, stars, the Passport Code, and **Copy my work / Download** for turning in.

Nobody gets stuck: running out of hearts just sends the student back with full hearts.

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

The turned-in text has: name, class, date, stars, scraps found, hearts lost, minutes played, every talk question with the student's answer and number of tries, the challenge, which Smudge questions they missed, their reflection, their five power scores and their **Passport Code**.

## The Passport Code (backup save)

15 letters and numbers, like `WW-80G00-0K000-01R3B`. It holds which episodes are done, the five powers and the hero's look. If a student changes computers or clears the browser, they paste it on the start screen (or the world map) and keep going. It is part of every turned-in assignment, so you always have a copy.

## Turning on the class Google Sheet (optional)

1. Make a Google Sheet with tabs **Students**, **Log**, **Settings**. In Settings put `teacherCode` in A1 and any words in B1; put `salt` in A2 and a long random phrase in B2.
2. **Extensions → Apps Script**, paste `apps-script/Code.gs`, save.
3. **Deploy → New deployment → Web app**, Execute as: **Me**, Who has access: **Anyone**. Copy the web app URL.
4. Paste the URL into `game/config.js` as `SHEET_URL: '...'`, then run `node tools/build.js` and push.

Now each finished episode adds a row to **Log** (episode, stars, hearts lost, minutes, missed questions, reflection) and updates the student's row in **Students**. Only first name, class code and a scrambled secret number are stored.

## Teacher code

On the world map, open **For teachers** and type the teacher code (default `ATLAS`, change it in `game/config.js`). Every episode opens on that computer, which is handy for showing an episode on the board or for a student who joins late.

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
