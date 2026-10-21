# Reading pass (PLAYTEST-3, fixes 4 and 5): shorter boxes, answers you can't guess

Students read at about a grade-5 level, many are new to English (Spanish and Dari), and they skip long boxes. The playtest found that 239 of 240 talk lines were over 15 words, and that the right answer was the longest choice in 66% of questions. This pass fixes the **episode text only** (`game/episodes/ep-X-Y.js`). The engine is not touched.

Check an episode with:

```
node tools/check.js ep-2-2.js              # must still say OK (no ✗)
node tools/check.js --reading ep-2-2.js    # the reading notes this pass clears
```

## 1. Short boxes

- **At most 15 English words in each box** a student reads in one go:
  - every `intro` line
  - every person's `lines`
  - `christopher.meet`
  - the quest giver's and contact's `lines`, `wait` and `thanks`
  - the trader's `lines`
  - a chase clue's `found`
- **Up to 18 words** for:
  - a question (`ask.q`)
  - a chase clue `t`
  - quest `hint`, `found`, `taunt`, `win` and `q`
- **Up to 20 words** for signs, finds (`clue`, `text`) and every `why`.
- **Split, don't cut.** A long line becomes two or three short lines in the same `lines` list. Keep every fact a question or a challenge depends on: the student must still be able to learn the answer from the people.
  - People may have 2 to 4 lines.
  - The quest **contact** keeps its instruction or clue as its **last** line, because the game repeats that line as the reminder.
- One idea per line. Short, everyday words. The key fact can stay a yellow word (`[[key|words]]`).
- **`intro`:** 1 or 2 lines, each 15 words or fewer. Christopher now says them on the map in his bubble, so drop the `Christopher: "…"` wrapper if you like (the engine strips it either way).
- **1.1 only:** `christopher.meet` line 1 must still contain the words "living compass" (a test looks for it).

## 2. Answers you can't guess

For every multiple-choice set (each person's `ask.choices`, every Grump `boss.questions[].choices`, any thief `questions`):

- Make the choices **about the same length**: the right answer is never more than about 15% longer than the longest wrong one.
- Across an episode, the right answer should be the longest choice in **about a third** of questions or fewer.
- To balance, either shorten the right answer or make the wrong ones as specific as the right one. Wrong answers must stay clearly wrong to someone who learned the lesson, and stay believable to someone who didn't. Never make a wrong answer accidentally right.
- Keep `answer` / `ok` pointing at the right choice. The screen shuffles the choices; their order in the file doesn't matter.
- Every choice keeps its `why`, updated if the choice changed.

## 3. Three languages, always

- Every changed line changes in **English, Spanish and Dari** together, and they say the same thing.
- **Spanish:** natural Latin-American Spanish.
- **Dari:** simple Afghan Dari in Arabic script. Use مکتب (school), سرک (road), دریا (river), جهیل (lake) and بحر (sea).
- Split lines in all three languages the same way.
- Yellow words: the `key` in `[[key|shown words]]` must stay a key in `words`. Keep the same yellow words in all three languages where you can.

## 4. Don't change

The map, coordinates, ids, `stat`, `answer` indexes (unless you reorder choices), tools, builds, the challenge cards, `learned`, `reflect`, `words` meanings, or the file's shape.
