#!/bin/bash
# Makes the free-standing Netlify version in netlify-site/ (not saved in git):
# the website version (start page, world map, 24 episodes, teacher page) with OPEN_ALL on, so every episode is open.
# Then upload netlify-site/ to the Netlify project "worldwalker-atlas" (see docs/HANDOVER-CLAUDE-CODE.md, part 6).
cd "$(dirname "$0")/.." || exit 1
node tools/build.js > /dev/null || exit 1
rm -rf netlify-site && mkdir netlify-site
cp -r index.html game mockups netlify-site/
sed -i.bak "s/OPEN_ALL: false/OPEN_ALL: true/" netlify-site/game/config.js && rm -f netlify-site/game/config.js.bak
grep -q "OPEN_ALL: true" netlify-site/game/config.js || { echo "OPEN_ALL was not turned on"; exit 1; }
printf '[build]\n  publish = "."\n' > netlify-site/netlify.toml
echo "netlify-site/ is ready ($(du -sh netlify-site | cut -f1)). Every episode is open on its world map."
