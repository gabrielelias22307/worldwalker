Worldwalker · Handover for Cowork: play it as a student, make it clear and fun, and give Christopher wings
Hi! You are picking up Worldwalker, a pixel-art geography game for high school APA World Geography students at Alexandria City High School (teacher: Gabriel Elias). Many students are English learners (Spanish and Dari), read at about a grade-5 level, and struggle to pay attention. The game is finished and works; your job is to make it clearer and more fun from a student's point of view, and to redesign Christopher, the guide character, into a lively flying guide.

Read this whole file first, then docs/FUN-PASS-2.md and docs/FUN-PASS.md (their rules still apply), then docs/EPISODE-FORMAT.md when you touch episode data.

1. The project in two minutes
Repo: gabrielelias22307/worldwalker (GitHub). Work on a new branch fun-pass-3 made from main. Never commit to main; Gabriel says "merge" when he is happy.
Live game: https://gabrielelias22307.github.io/worldwalker/ (world map: /game/, teacher page: /game/teacher.html, one episode: /game/ep-1-1.html).
24 episodes (1.1 to 8.3), one per unit. Each one: talk to 3 people (each asks one question), do a quest (a chase, a trade or a find), solve the glowing compass stone on the map, beat the Grump in its fog, claim the atlas page, turn in the work. Plus builds (wood and fiber from the axe and sickle), planting in farm episodes, secrets opened by tools earned earlier, and a base camp.
Christopher is the student's guide: "your living compass". He follows the hero one tile behind, says what to do next (press C or tap 🧭), and can "Show me the way" (free the first time, then 5 coins).
Two builds of every episode: game/ep-X-Y.html (GitHub Pages; loads the engine files) and dist/canvas/Worldwalker X.Y.html (one file uploaded into Canvas; must stay under 430 KB — today the largest is 390 KB).
Files you will touch most
File	What it is
game/engine/christopher.js	Christopher: talking, the speech bubble and where it sits (C.place), "next step" logic (C.nextStep), how he is drawn (C.draw)
game/engine/game.js	the game loop, moving, Space/● actions, drawing the map; Christopher's position is pip (he trails one tile behind; pip.fly animates his fly-in)
game/engine/art.js, art2.js, art3.js	sprites (SPR.*, 16×16 strings) and map tiles; Christopher today is SPR.pip
game/engine/ui.js	panels: sign-in, intro, talk, questions, finish, Passport
game/engine/style.css	layout (fits 1366×768, 654×820 Canvas frame, 390×844 phone, and phones turned sideways)
game/engine/save.js	all game text in 3 languages (WW.S), tools, saving
game/engine/fx.js, music.js	effects and chiptune music/sound (WW.sfx('blip') etc.)
game/episodes/ep-X-Y.js	each episode's data (map, people, quest, challenge, Grump)
Run and test (Node + Playwright; Chromium is needed)
node tools/check.js          # checks every episode's data
node tools/build.js          # builds game/ep-*.html and dist/canvas/*.html, prints sizes
node tests/play.js           # plays all 24 start to finish (screenshots in shots/play/); prints "question panels" and "most in a row"
node tests/play.js --canvas  # the same with the one-file Canvas builds
node tests/fit.js            # every episode fits 1366×768, 654×820 and 390×844
node tests/keys.js           # 1.1 with real key presses only
node tests/phone.js 1.2 4.3  # whole episodes on a phone with TAPS only, + sideways phone
node tests/touch.js          # tools, signposts and Christopher by touch
node tests/ux-tour.js 4.2    # slow screenshots at 1366×768 the way a student sees it (shots/ux/)
Also: tests/controls.js stars.js powers.js sheet.js teacher.js walk.js look.js maps.js camp.js. All of them pass today. Run check + build + play after every change, and the others before you hand back.

If you cannot run Node or a headless browser, open game/ep-1-1.html in a real browser (or the live link) and play by hand; take screenshots yourself.

2. Rules that do not change
Three languages for every new line the student sees: English, Spanish and Dari ({ en, es, fa }). Afghan Dari words: مکتب (school), سرک (road), دریا (river), جهیل (lake), بحر (sea). Grade-5 words, short sentences.
Under 430 KB per Canvas file. No outside images, fonts or libraries: everything is drawn in code (pixel sprites in art*.js, emoji only where they already are).
Cozy rules: nothing is lost for good, a wrong move says why, WW.calm (reduced motion) turns animations down.
Saves keep working: saved on the computer, the Passport Code, and the Google Sheet (apps-script/Code.gs).
No "Make it easier" button. Don't remove the learning; make it easier to get to and nicer to do.
Work in steps: show Gabriel a short plan first and wait for his OK. After each step: run the tests, send screenshots, stop. Commit with git -c user.name="Gabriel Elias" -c user.email="gabriel.elias.22307@gmail.com" commit and push to fun-pass-3.
3. Part 1 — Play it as a student (do this before changing anything)
Play like these four students, honestly. Time things. Write down every moment of "huh?", "what now?", "boring", or "I'm just clicking".

Student	How they play
Jay, distracted	Skips every text box as fast as possible, clicks the longest answer, wanders off after 20 seconds of nothing happening. Plays on a school Chromebook (1366×768).
Fatima, new to English	Reads in Dari (switch with دری). Reads slowly, taps yellow words to see what they mean.
Diego, phone only	Plays on a phone (390×844), sometimes turned sideways, taps only.
Ms. K's class, in Canvas	The game inside the Canvas page frame (654×820).
Play at least 1.1 (the first one, the most important), one chase episode (1.2, 2.3, 3.1, 4.2, 5.3, 6.3, 7.1 or 8.3), one trade (1.3, 2.2, 3.3, 4.3, 5.2, 6.2, 7.3 or 8.2), one farm episode (2.2, 6.1 or 7.1) and one train episode (3.2, 4.3 or 7.3), start to finish. Then a quick look at the first 2 minutes of every other episode.

Measure and report, per episode:

Seconds from opening the page to the first step on the map. Target: under 10 (today it is 4 screens: sign-in, intro, Christopher's welcome, then the map).
Words a student must read before they can act, and the longest single text box.
Moments with no clear next step (where would Jay stop?). Today on the first 1.1 screen there are 6 things that look clickable and none says "start here"; after 5 seconds of doing nothing, nothing happens.
Questions Jay gets right by guessing (the right answer is often the longest one; "Try again" is free).
Anything that looks broken, tiny, cut off, or covered, on all four screens.
Deliverable: a short playtest report (docs/PLAYTEST-3.md) with screenshots: the top 10 problems, ranked by "how many students lose attention here", each with a fix. Send it to Gabriel and wait for his OK before fixing.

Starting backlog (from the last review; check them, re-rank them, add your own)
Moving in under 10 seconds: remember name and class after the first time (one big Play button); intro = one sentence
Start; Christopher's welcome while you walk (no Next buttons).
Always one obvious "go here": a clear marker on the current target; the not-yet markers dimmed; after ~15 s of no progress Christopher points the way by himself, free. (Part 2 below makes this Christopher's job.)
Half the reading: at most ~15 words per bubble, the key fact in bold or yellow; a 🔊 read-aloud button (speechSynthesis; check Dari — voices are often missing).
Questions you can't guess: shuffle the choices, similar lengths; a visible "First try!" reward and a streak.
Game-like talk boxes, not worksheet boxes: big portrait, name plate, quick typing text (Space finishes it), chunky A/B/C answer buttons that also work with keys 1/2/3.
A cleaner top bar: Music, Sound and Keys in one ⚙; a bigger quest line; labels or icons on the 5 theme bars.
The empty side space on a Chromebook: a "Now" card (goal, who to find, progress).
Finish screen: reflection box and Copy my work at the top (students who stop scrolling never turn in).
Come-back hooks: unlockable hats/colors from stars and secrets, a class top-5 board from the Sheet, a speed badge.
Tone: shorter, funnier lines; check what high schoolers think of the names.
4. Part 2 — Christopher gets wings (a flying guide, like the fairy guide in Ocarina of Time)
Today Christopher is a small round compass (SPR.pip) that trails one tile behind the hero with a soft glow, and talks in a speech bubble. It works, but it is static and easy to ignore. Make him a lively flying guide in the spirit of the fairy guide in Ocarina of Time: a small glowing creature that zips around, flies to what matters, and calls for attention.

Make it our own. No Nintendo names, art, sounds or catchphrases ("Hey! Listen!" is theirs). Christopher keeps his name and his story ("your living compass").

What he should look and feel like
Look: a little glowing spirit with fluttering wings, with a compass needle inside his light (that's still his "living compass" identity). About one tile; a soft halo; tiny sparkle trail when he moves. Two or three wing frames, a gentle bob. Drawn in code like the other sprites (art*.js / C.draw), no image files.
Color tells you what he points at (and the bubble border matches):
gold = the next goal (a person to talk to, the stone, the atlas page)
green = something to pick up or do (a tree to chop, a seed basket, goods for a trade, a build spot)
blue = a secret, a clue note, a find
red = danger (a bad guy nearby, the Grump's fog)
Flying, not trailing: he floats beside the hero and drifts around them (a small orbit, not glued one tile behind). When he has something to show, he flies to it and circles over it, then comes back. "Show me the way" should do this, and it should also happen on its own:
when a new goal starts ("The stone is ready!"),
after ~15 seconds with no progress (free nudge),
when the hero faces something useful the first time (a tree with the axe, a trade good).
Calling out: when he wants attention he pulses brighter, does a little loop, and plays a short two-note chime (make a new one in music.js/WW.sfx; respect the Sound button). A tiny "!" or "?" over him: "!" = he has something to tell you, "?" = ask him (press C / tap 🧭).
Targeting: while he hovers over a target, draw a soft ring or corner brackets on that tile (like a lock-on), so the student sees exactly what he means even without reading. Keep his speech bubble on the side away from the target (that logic exists in C.place(); keep it).
Stays out of the way: never covers the hero or the thing he points at; on a phone the bubble docks under the map (already does); WW.calm (reduced motion) = no orbit, no loops, just a glow and a still ring.
Fun little touches (pick a few): he spins when you get a question right; droops when you miss one; sneezes in the Grump's fog; cheers with sparkles when you win a page; flies in from off-screen in 1.1 (he already has a fly-in, pip.fly).
Where to change things
game/engine/christopher.js → C.draw (the look), C.say/C.place (bubble color and side), C.nextStep() (what he points at; returns { text, at } — use at as his flight target), C.talk().
game/engine/game.js → the pip object (his position): around // Christopher (he flies in when you first meet him) in the draw loop. Today: pip.x/pip.y trail the hero; pip.fly animates a flight. Give him a free-flying position in pixels (with easing) and states: follow (orbit the hero), go (fly to a tile), hover (circle it), back.
game/engine/art*.js → his sprite frames; game/engine/music.js → the chime.
tests/touch.js, tests/keys.js, tests/fit.js and the bubble checks in tests/fit.js must still pass. Add a check that he flies to the target after the idle time, and that WW.calm keeps him still.
Done when
In 1.1, a student who reads nothing can follow Christopher's flights from start to finish.
He is clearly the most alive thing on the screen, but he never hides the hero or what he points at.
His color always matches what he points at.
All tests pass, every Canvas file is under 430 KB, and screenshots show him at 1366×768, in the Canvas frame and on a phone.
5. Order of work
Part 1: play as the four students, write docs/PLAYTEST-3.md, send it with screenshots. Wait for OK.
Part 2: Christopher's new look and flying (in 1.1 first; screenshots + a short screen recording if you can). Wait for OK.
The top fixes from the playtest, one at a time, in the order Gabriel picks. Screenshots after each.
Run every test, rebuild, push fun-pass-3. Gabriel says "merge".
6. Still open (tell Gabriel, don't guess)
The updated apps-script/Code.gs must be pasted into the Google Sheet's script and redeployed (Gabriel does this).
Does the real Canvas page add its own header inside the 820 px frame? Check when the files are uploaded.
All testing so far used a browser pretending to be a phone/Chromebook: try a real school Chromebook and a real phone.