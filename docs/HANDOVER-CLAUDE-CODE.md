# Worldwalker · Handover for Claude Code

Hi! You are picking up **Worldwalker**, a pixel-art geography game for high school APA World Geography students at Alexandria City High School (teacher: **Gabriel Elias**). Many students are English learners who speak Spanish or Dari. They read at about a grade-5 level and find it hard to keep their attention on a screen.

The game is finished and it works. The last round of work (October 21–22, 2026) did three things:
- played the game as students
- gave Christopher, the guide, wings
- fixed the ten biggest problems from that playtest

This file tells you where everything stands and how Gabriel likes to work.

Read this whole file first. Then read `docs/PLAYTEST-3.md` (what was found and fixed). Read `docs/READING-PASS.md` and `docs/EPISODE-FORMAT.md` before you change any episode text.

---

## 1. Where things are

| What | Where |
|---|---|
| The project | GitHub `gabrielelias22307/worldwalker` |
| Main branch | `main`: what students get |
| Work branch | `fun-pass-3`. It has **3 changes that are not on `main` yet** (see part 2) |
| Website version (GitHub Pages) | https://gabrielelias22307.github.io/worldwalker/game/ (world map), `/game/ep-1-1.html` (one episode), `/game/teacher.html` (teacher page) |
| Free-standing version (Netlify) | https://worldwalker-atlas.netlify.app/game/. Every episode is open from the start (part 6) |
| Canvas version | `dist/canvas/Worldwalker X.Y.html`: one file per episode, uploaded into Canvas by Gabriel |

**24 episodes** (1.1 to 8.3). In each one the student does these things in order:
1. Talks to 3 people (each asks one question).
2. Does a quest: a chase, a trade or a find.
3. Solves the glowing compass stone.
4. Beats the Grump in its fog.
5. Claims the atlas page.
6. Turns in the work.

Each episode also has builds (wood and fiber from the axe and sickle) and secrets opened by tools from earlier episodes. Some have planting, and there is a base camp.

### Files you will touch most

| File | What it is |
|---|---|
| `game/engine/christopher.js` | Christopher: his bubble (`C.say`, `C.place`), "what next" (`C.nextStep`, returns `{ text, at, kind }`), his welcome while you walk (`C.meet`), two-part bubbles (`C.chain`), his flying (`C.step`, `C.show`, `C.notice`, `C.mood`), how he looks (`C.draw`, `C.drawMark`) |
| `game/engine/game.js` | game loop, walking, taps, drawing the map, the gold "go here" arrow (`drawGoal`), the Now card size (`G.fit`), sounds (`WW.sfx`, including his `chime`), First try and streak (`WW.answered`) |
| `game/engine/ui.js` | panels: sign-in, opening card, talk, finish, Passport; top bar and theme bars (`ui.hud`); Now card (`ui.nowCard`); read aloud (`WW.speak`, `WW.speakBtn`) |
| `game/engine/style.css` | layout for a Chromebook (1366×768), the Canvas frame (654×820), a phone (390×844) and a phone turned sideways |
| `game/engine/save.js` | every word the student sees, in 3 languages (`WW.S`), the settings (`WW.CONFIG`), saving |
| `game/engine/challenges.js`, `quest.js`, `world.js`, `tools.js`, `farm.js` | stone challenges, quests, the Grump trial in the world, tools and builds, planting |
| `game/episodes/ep-X-Y.js` | each episode's words, map and questions |
| `game/config.js` | `SHEET_URL`, `TEACHER_CODE`, `OPEN_ALL` |

---

## 2. What changed in the last round (all on `fun-pass-3`)

**Merged to `main` already** (commit `0b082f7`):
- **Christopher has wings.** He is a small flying spirit with a compass needle inside his light, about 60% of the size he first had.
  - He floats beside the hero and never covers him.
  - He flies to the next goal by himself when a new goal starts, after about 15 seconds with no progress (free), and the first time the hero faces something useful. "Show me the way" also sends him.
  - His color says what he points at: **gold** = the next goal, **green** = something to pick up or do, **blue** = a secret or clue, **red** = danger. His bubble border matches.
  - Corner brackets lock on to the tile he means, and he plays a two-note chime. A "!" over him means he has something to tell you; a "?" means ask him.
  - He spins on a right answer, droops on a miss and cheers for a page.
  - With reduced motion on (`WW.calm`), he stays still and only shows a still lock-on.
- **Faster start:** the opening card is one sentence and Start. Christopher says the episode's opening lines on the map **while the student walks**, with no Next buttons; 3 steps, a tap, C or Enter moves on.
- **Sign-in:** Play sits under the three boxes. "Pick your look" and "Have a Passport Code?" fold away.
- **Finding the way:**
  - A gold arrow bobs over the goal right now, or waits at the screen edge pointing the way.
  - The compass stone rests, dim with a small lock, until it is ready.
  - On wide screens, a **Now** card sits beside the map.
- **Shorter reading:**
  - All 24 episodes are rewritten in English, Spanish and Dari. No box is over 15 words, and no fact a question needs was dropped.
  - Chase messages come as two short bubbles.
  - A 🔊 button reads aloud, but only shows when the computer has a voice for that language.
- **Fair answers:**
  - Answer lengths are evened out: the right one used to be the longest 66% of the time, and is now the longest 11% of the time and never by a lot.
  - A right answer on the first try gives ⚡ First try! +1 coin and a 🔥 streak.
  - "Try again" stays free.
- **Finish screen:** the reflection box and Copy my work come first, and the confetti falls behind the panel.
- **Top bar:**
  - Music, Sound, Keys and help, the arrow pad and Full screen are in one ⚙ Settings menu.
  - The quest line is bigger.
  - The theme bars have word labels.
- **Phone:** bigger top buttons and arrow pad. Turned sideways, the tool bar stands beside the map.

**On `fun-pass-3` but NOT on `main` yet** (waiting for Gabriel to say "merge"):
1. `2b2dacd`: **phones could not scroll** the start page, world map or teacher page. The page lock was meant for episode pages only, so now only episode pages get it (`html.ww-game` in `style.css`, set in `game.js`). Also, a touch anywhere closes ⚙. New test `tests/fingers.js` taps and swipes with real touch events.
2. `21de46d`: the **`OPEN_ALL`** setting in `config.js`. When it is `true`, every episode on the world map is open from the start. It is `false` in the repo, so GitHub Pages and Canvas still open one episode at a time, and it is `true` only in the Netlify copy.
3. This handover, and `tools/netlify-site.sh` (part 6).

The Netlify site already has 1 and 2.

---

## 3. Rules that do not change

- **Three languages** for every new line the student sees: `{ en, es, fa }`.
  - Spanish: natural Latin-American Spanish.
  - Dari: simple Afghan Dari in Arabic script. Use مکتب (school), سرک (road), دریا (river), جهیل (lake), بحر (sea).
- **Short and plain:** grade-5 words, at most about 15 words per box. Run `node tools/check.js --reading` after any text change.
- **Plain language everywhere,** for students and for Gabriel. Never the word "debrief". No Roblox in anything.
- **Canvas files under 430 KB** each. This is the rule for this project; `tools/build.js` refuses bigger files. The largest file is 405 KB today.
- **No outside images, fonts or libraries.** Everything is drawn in code.
- **No "Make it easier" button.** Don't remove the learning; make it easier to reach and nicer to do.
- **Cozy rules:** nothing is lost for good, a wrong move says why, and reduced motion (`WW.calm`) turns animation down.
- **Saves keep working:** in the browser, the Passport Code, and the Google Sheet (`apps-script/Code.gs`).
- **No Nintendo names, art, sounds or catchphrases** for Christopher. He keeps his name and his job: "your living compass".

## 4. How Gabriel likes to work

- **Show a short plan first** and wait for his OK. After each step, run the tests, send screenshots, and stop.
- **Work on a branch.** Never commit to `main`; Gabriel says **"merge"** when he is happy. Commit with:
  ```
  git -c user.name="Gabriel Elias" -c user.email="gabriel.elias.22307@gmail.com" commit
  ```
- **Answer what he asks.** Don't add opinions or advice about his work or his programs unless he asks for them.
- **Write to him in plain, short language.** Lead with what changed and what he will see.
- **When you send him HTML or code as a file,** also paste the code in your reply.

## 5. How to check your work

Node and Playwright with Chromium. If `require('playwright')` fails, set `export NODE_PATH=$(npm root -g)`.

```
node tools/check.js                 # every episode's data (must all say OK)
node tools/check.js --reading       # long boxes and answers that give themselves away (should show no "reading:" notes)
node tools/build.js                 # builds game/ep-*.html and dist/canvas/*.html, prints sizes
bash tools/run-all-tests.sh         # every test, one summary line each (about 40 minutes)
```

Single tests:

| Test | What it checks |
|---|---|
| `tests/play.js [1.1 …]` (`--canvas` for the Canvas files) | plays episodes start to finish |
| `tests/fit.js` | every episode fits 1366×768, 654×820 and 390×844 |
| `tests/keys.js` | 1.1 with real key presses only |
| `tests/touch.js`, `tests/phone.js 1.2 4.3` | touch screens and phones |
| `tests/fingers.js` | real finger taps and swipes: the world map scrolls, every kind of button works by touch |
| `tests/wings.js` | Christopher flies to goals, never covers the hero, his color matches, he stays still with reduced motion |
| `tests/playtest-start.js [--idle]` | the first minutes of every episode for 5 kinds of students (screens, words, buttons before moving) |
| `tests/playtest-words.js` | reading counts and the answer-length check, all episodes |
| `tests/controls.js stars.js powers.js sheet.js teacher.js walk.js look.js maps.js camp.js music.js` | the rest |
| `tools/chris-sheet.js` | draws Christopher big in every color, to `shots/wings/sheet.png` |

All of these pass today. `tests/keys.js` sometimes fails once at the quest step (the hero walks into a sign on the way), then passes when run again. It did that before this round too.

## 6. Updating the Netlify version

The Netlify project is **worldwalker-atlas** (site id `403b2369-b022-4d59-9ed3-812bb51c6125`) on Gabriel's team. It is **not** connected to GitHub, so it only changes when someone uploads it again.

```
bash tools/netlify-site.sh          # makes netlify-site/ with every episode open (OPEN_ALL: true)
```

Then upload `netlify-site/` in one of these ways:
- Netlify CLI, after logging in to Gabriel's account: `npx netlify-cli deploy --dir netlify-site --prod --site 403b2369-b022-4d59-9ed3-812bb51c6125`
- Netlify connector, if you have it: deploy to that site id from inside `netlify-site/`
- By hand: drag the `netlify-site` folder onto the Deploys page of the project at https://app.netlify.com/projects/worldwalker-atlas

`netlify-site/` and `.netlify` are in `.gitignore`; don't commit them. After uploading, open https://worldwalker-atlas.netlify.app/game/ and check that all 24 episodes are open.

## 7. Still open

**For Gabriel to do:**
- Paste the updated `apps-script/Code.gs` into the Google Sheet's script and redeploy it.
- Check whether the real Canvas page adds its own header inside the 820-pixel frame.
- Upload the new Canvas files from `dist/canvas/` into Canvas; Canvas has the old ones until then.
- Try it on a real school Chromebook and a real phone. All testing so far used a browser set up to act like them. Gabriel said touch and scrolling were not working on his phone, and the fix in part 2 is from tests in a phone simulator, so his phone is the real check.
- Check whether 🔊 read aloud has a Dari voice on school Chromebooks. The test browser has no voices, so read aloud was never heard.

**Not done yet** from the playtest list (`docs/PLAYTEST-3.md`):
- Come-back ideas: hats or colors unlocked by stars and secrets, a class top-5 board from the Sheet, a speed badge.
- Checking what high schoolers think of the names, and funnier lines.

**Things to know:**
- **Answer lengths:** with lengths evened out, the right answer is now most often a middle-length choice. The differences are too small to see by eye.
- **Phone map size:** on a phone held upright, the map can't get wider than the screen, so it stays full width with space under it for the arrow pad.
- **Long `why` explanations** after an answer may be up to 20 words.
