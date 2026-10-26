#!/bin/bash
# Runs every check and test in order and writes one summary line per test (PLAYTEST-3). Usage: bash tools/run-all-tests.sh > shots/alltests.txt
cd "$(dirname "$0")/.." || exit 1
export NODE_PATH=${NODE_PATH:-$(npm root -g)}
node tools/check.js | grep -v ": OK$"; echo "check: done"
node tools/build.js | sort -k2 -n | tail -1
for t in "play.js --no-shots" "play.js --canvas --no-shots" fit.js keys.js touch.js "phone.js 1.2 4.3" controls.js stars.js powers.js sheet.js teacher.js walk.js look.js maps.js camp.js music.js wings.js fingers.js scenes.js corner.js phones.js "rooms.js 1.1 1.2 1.3 2.1 2.2 2.3 3.1 3.2 3.3 4.1 4.2 4.3 5.1 5.2 5.3 6.1 6.2 6.3 7.1 7.2 7.3 8.1 8.2 8.3"; do
  start=$(date +%s)
  out=$(timeout 1500 node tests/$t 2>&1); code=$?
  echo "=== $t ($(( $(date +%s) - start ))s, exit $code)"
  echo "$out" | grep -E "✗|FAIL|Error|failed|PLAYED|all good|all Christopher|errors:|maps drawn" | grep -v "PLAYED THROUGH ✓" | head -12
  echo "$out" | grep -c "PLAYED THROUGH ✓" | sed 's/^/played through: /'
done
echo "ALL DONE"
