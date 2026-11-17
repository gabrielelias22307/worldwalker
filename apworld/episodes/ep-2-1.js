/* HISTORYWALKER · Episode 2.1 · The Silk Roads (AP World Topic 2.1, c. 1200–1450)
   Samarkand, a Silk Roads city in Mongol-ruled Central Asia, in 1300.
   Content source: Khan Academy, AP World History (World History Project), Unit 2 Lesson "The Silk Roads":
   "Archipelago of Trade" (Alejandro Quintana), "Rebuilding the Silk Road", "Guilds, Wool, and Trade",
   "Quick Sourcing: Networks of Exchange"; and the Unit 2 overview: "Unit 2 Introduction: Networks of Exchange
   1200 to 1450" (Trevor Getz), "Unit 2 Overview: Networks of Exchange" (caravanserai, Pax Mongolica).
   World History Project content is CC BY-NC 4.0. Facts here come from those readings. English only, AP level.
   Map: farm fields and a village north of the walls (the countryside that kept to local markets); the walled city
   with the mosque (north-west), the glassmakers' workshop and the copyist's house (north), the bazaar (south-west)
   and the town square with the time stone; outside the east gate, the walled caravanserai on the road to China;
   the road west to Bukhara leaves by the west gate; dry steppe, dunes and an old ruined watchtower to the south. */
window.EPISODE = {
  id: '2.1',
  realm: 2,
  sol: 'AP 2.1',
  style: 'islam',
  weather: { sky: 'dust', time: 'day' },
  title: { en: 'The Silk Roads' },
  place: { en: 'Samarkand, Mongol Central Asia, 1300' },
  intro: [
    { en: 'The Void blurred the page on the Silk Roads. Samarkand\'s merchants are forgetting why goods and ideas travel!' },
    { en: 'Talk to the 4 people, read the 2 sources on the lecterns, help a young merchant make a trade, then wake the time stone.' }
  ],
  scenes: {
    at: [66.97, 39.65],
    year: 1300,
    start: [
      { en: 'In 1300, Samarkand was a Silk Roads city in Mongol-ruled Central Asia.' },
      { en: 'The Silk Roads linked societies from east to west across Eurasia.' },
      { en: 'If you wanted fine glass, Samarkand was your stop on the Silk Road.' }
    ],
    guess: {
      q: { en: 'The Mongols ruled most of the Silk Road by 1300. Did that help trade?' },
      choices: [{ t: { en: '🐫 Yes, it helped' }, ok: true }, { t: { en: '🚫 No, it stopped' } }],
      why: { en: 'Mongol rule made the routes safer, so more merchants traveled them.' }
    },
    page: { en: 'In the 1340s, the Black Death spread along these same trade routes.' },
    next: {
      q: { en: 'Next: the Mongol Empire. Did Mongols rule from China to the Persian Gulf?' },
      choices: [{ t: { en: 'Yes, it did' }, ok: true }, { t: { en: 'No, never' } }],
      why: { en: 'Chinggis Khan conquered Central Asia and the Persian Gulf region; his grandson Kublai ruled China. You go there next.' }
    }
  },
  start: [12, 17],
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT',
    'T.wwwww.wwww..HHH..T.2222.2222.T',
    'T.wwwww.wwww..NdN....2222.2222.T',
    'T::::::::::::::::::::::::::::::T',
    'T..T.....,.xl.......T.....,....T',
    'T..WWWWWWWWWlWWWWWWWWW.........T',
    'T..W.DDDDD..l.RRRRQQQW.WWWWWWW.T',
    'T..W.DDDDD..l.hhdhhdhW.WOllllW.T',
    'Tx.W.DDdDD..l........W.WlllllW.T',
    'TllllllllllllllllllllllllllllW.T',
    'T..W........l........W.WlllllW.T',
    'T..W.m.m.m.ml.JJ..JJ.W.WlllllW.T',
    'T..WlllllllllllllllllW.WWWWWWW.T',
    'T..W.m.m.m.mllllllll.W.........T',
    'T..WlllllllllllllllllW.::::::x.T',
    'T..W........l.JJ..JJ.W.........T',
    'T..WWWWWWWWWlWWWWWWWWW.........T',
    'T...........:..................T',
    'Tgrgrggggggg:gggggggggggggguuugT',
    'Tg.ggg,ggggggggggggggggguuuuuugT',
    'TsssssgggggsssssgggggssssssssssT',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT'
  ],
  words: {
    'silk roads': { en: 'the network of land and sea routes linking East Asia, Central Asia, the Middle East and Europe; named for Chinese silk' },
    'network': { en: 'a system of connected routes, people or places used for trade, travel or communication' },
    'caravan': { en: 'a group of traders or travelers moving together, often across deserts or long trade routes' },
    'caravanserai': { en: 'a safe stopping place along trade routes where merchants could stop, rest and refuel' },
    'pax mongolica': { en: '"the Mongol peace": the stability of Mongol rule over Central Asia, which made trade routes safer' },
    'hegemon': { en: 'a dominant society or power that controls a region or system' },
    'luxury goods': { en: 'costly goods that people want but do not need to live, like silk, spices and fine glass' },
    'archipelago of trade': { en: 'a picture of the Afro-Eurasian trade system: trading cities like islands in a sea of countryside' },
    'merchant': { en: 'a person who buys goods in one place and sells them in another' },
    'diffusion': { en: 'the spread of ideas, goods or technology from one culture to another' },
    'audience': { en: 'in sourcing: the people a source was written for' },
    'purpose': { en: 'in sourcing: the reason a source was written' }
  },
  npcs: [
    {
      x: 6, y: 10, name: { en: 'Toghon' }, role: { en: 'Mongol guard' },
      look: { skin: 2, hair: '#1b1410', shirt: '#7a3a2a', pants: '#3a2a1a', hat: '#5a3a1a', style: 'short' },
      lines: [
        { en: 'Before Chinggis Khan, the northern passage from China to the Black Sea was perilous. Independent kingdoms controlled it, often at war with each other.' },
        { en: 'Early in the 1200s his nomadic cavalry conquered Central Asia and the Persian Gulf region. His armies were savage: they slaughtered the soldiers and rulers of conquered cities.' },
        { en: 'Yet he protected scholars, artisans and administrators. Mongol rule turned most of the [[silk roads|Silk Road]] into one safe, unified trade system: the [[pax mongolica|Pax Mongolica]].' },
        { en: 'Europeans soon traveled this road: Friar John of Plano Carpini in 1245, Friar William of Rubruck in 1253, and Marco Polo in 1271.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Which best explains why European travelers began crossing Central Asia in the mid-1200s?' },
        choices: [
          { ok: true, t: { en: 'Mongol rule unified and secured the road' }, why: { en: 'Yes. Chinggis Khan\'s conquest put the road under one rule and made it safe, so friars and merchants followed.' } },
          { t: { en: 'The Crusades won the Holy Land for Europe' }, why: { en: 'No. The Crusades failed. They only helped reopen a limited trade with the Muslim world through Genoa and Venice.' } },
          { t: { en: 'Rival kingdoms competed for their trade' }, why: { en: 'No. Rival kingdoms at war were the problem before the Mongols: they made the road perilous.' } }
        ]
      }
    },
    {
      x: 6, y: 14, name: { en: 'Farida' }, role: { en: 'Spice seller' },
      look: { skin: 3, hair: '#2b1d14', shirt: '#b5432a', robe: true, style: 'long' },
      lines: [
        { en: 'The whole system rests on two very profitable trades: silk from China, and spices from Southeast Asia: pepper, clove, cinnamon, camphor and nutmeg.' },
        { en: 'Hundreds of other goods move too: gold, ivory, horses, wool, iron tools. And if you want glass, Samarkand is your stop on the Silk Road.' },
        { en: 'Most are [[luxury goods|luxury goods]], so long-distance trade gathers in cities. The villages outside our walls mostly rely on local markets.' },
        { en: 'Historians call it an [[archipelago of trade|archipelago of trade]]: cities like islands in a sea of farmland. No one society rules it; there is no clear [[hegemon|hegemon]].' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Compared with the villages around it, how did Samarkand take part in trade around 1300?' },
        choices: [
          { ok: true, t: { en: 'It joined the long-distance luxury trade' }, why: { en: 'Right. Silk, spices and glass gathered in trading cities. That is why they are called islands of trade.' } },
          { t: { en: 'It sold mostly grain at local markets' }, why: { en: 'No. That describes the villages. The countryside mostly kept relying on local markets.' } },
          { t: { en: 'It controlled the network as its hegemon' }, why: { en: 'No. The network had no clear hegemon. Everyone used it on pretty much equal terms.' } }
        ]
      }
    },
    {
      x: 20, y: 10, name: { en: 'Ilyas' }, role: { en: 'Translator and copyist' },
      look: { skin: 1, hair: '#3a2a1a', shirt: '#2a5a8a', robe: true, hat: '#e8e0d0', style: 'short' },
      lines: [
        { en: 'Ideas ride with caravans: [[diffusion|diffusion]]. The Mongols destroyed Baghdad, the world\'s great center of learning, in 1258. But trade had already spread its knowledge along the routes.' },
        { en: 'Fibonacci learned Indian and Arabic math on his trading travels and brought it to Europe. Chinese technology reached Europe too: Gutenberg used it for his printing press in 1439.' },
        { en: 'I read sources with four questions. Context: what world made it? [[audience|Audience]]: who was it for? Point of view: who wrote it? [[purpose|Purpose]]: why was it written?' },
        { en: 'Take Marco Polo on paper money. If we ask what he hoped to do, like impress Europeans, that is purpose. If we ask who his readers were, that is audience.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'A historian says Fibonacci valued Indian-Arabic numerals because he met them in trade hubs where merchants and scholars of many cultures mixed. Which skill is she using?' },
        choices: [
          { ok: true, t: { en: 'Context of the source' }, why: { en: 'Yes. She explains the source by the wider world its author lived in: busy, many-cultured trade hubs.' } },
          { t: { en: 'Audience of the source' }, why: { en: 'No. Audience asks who the readers were. She is asking about the world that shaped the author.' } },
          { t: { en: 'Purpose of the source' }, why: { en: 'No. Purpose asks why the author wrote. She is describing the setting where he met the ideas.' } }
        ]
      }
    },
    {
      x: 25, y: 16, name: { en: 'Bolat' }, role: { en: 'Camel driver' },
      look: { skin: 2, hair: '#1b1410', shirt: '#8a6a3a', pants: '#3a3020', hat: '#6a4a2a', style: 'short' },
      lines: [
        { en: 'I drive camels in a [[caravan|caravan]]. Traders cross the deserts and long roads together, because it is safer that way.' },
        { en: 'Each night we stop at a [[caravanserai|caravanserai]], a safe place to rest and refuel. Under the Pax Mongolica more merchants travel, so caravanserai flourish.' },
        { en: 'The "Silk Road" is really a [[network|network]] of land and water routes linking eight regions, from the China Sea to Western Europe. It carries far more than silk.' },
        { en: 'Demand for Chinese, Persian and Indian goods keeps rising in the west. Tabriz links our road to the Persian Gulf; Bukhara links it south to India.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Which best explains why caravanserai flourished along the Silk Roads around 1300?' },
        choices: [
          { ok: true, t: { en: 'Stability brought more travelers' }, why: { en: 'Yes. Under the Pax Mongolica more merchants traveled, and they all needed safe places to stop and rest.' } },
          { t: { en: 'Caravans began to avoid the deserts' }, why: { en: 'No. Caravans still crossed deserts and long roads. That is exactly why they needed caravanserai.' } },
          { t: { en: 'Silk became the only good carried' }, why: { en: 'No. The network carried hundreds of goods: spices, glass, gold, horses and more.' } }
        ]
      }
    },
    {
      doc: true, x: 18, y: 10, icon: '📜',
      name: { en: 'Marco Polo on Paper Money' }, role: { en: 'Primary source' },
      src: { en: 'Marco Polo, account of paper money in Yuan China (after 1271); described in "Quick Sourcing: Networks of Exchange," World History Project' },
      lines: [
        { en: 'Marco Polo was one of the Europeans who traveled the Silk Road after the Mongol conquest, setting out in 1271. In Yuan China, which Kublai Khan founded that same year, he wrote a detailed description of the paper money the Chinese used.' },
        { en: 'The World History Project\'s source collection sums up what his account shows: "when Europeans traveled along trade routes like the Silk Road, they encountered unfamiliar systems like Chinese paper money, which helped spread new ideas about government and economy back to Europe."' },
        { en: 'Context, in our own words: Polo was a European writing for European readers. Some historians argue his goal was not just to report what he saw, but to impress that audience with how sophisticated China\'s economic system was.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Why is Polo\'s account most useful to a historian of the Silk Roads?' },
        choices: [
          { ok: true, t: { en: 'It shows ideas reaching Europe by trade' }, why: { en: 'Yes. Ideas about government and economy, like paper money, traveled back to Europe along the trade routes.' } },
          { t: { en: 'It proves Europeans ran China\'s economy' }, why: { en: 'No. Polo was a visitor describing an unfamiliar Chinese system, not a European who controlled it.' } },
          { t: { en: 'It records how the Black Death spread' }, why: { en: 'No. Polo traveled in the 1270s. The Black Death began in the 1330s, long after his journey.' } }
        ]
      }
    },
    {
      doc: true, x: 27, y: 11, icon: '📖',
      name: { en: 'Archipelago of Trade' }, role: { en: 'Reading' },
      src: { en: 'Adapted from "Archipelago of Trade" by Alejandro Quintana, World History Project (Khan Academy)' },
      lines: [
        { en: 'In the 1200s and 1300s the Afro-Eurasian trade system was the biggest integrated commercial network in the world. It had no clear hegemon (dominant society). It depended on the highly profitable trades of silk from China and spices from Southeast Asia. Since most goods were luxury items, trade gathered in strategic cities, while vast rural areas mostly relied on local markets: an "archipelago of trade."' },
        { en: 'The road through Central Asia had been perilous, controlled by independent kingdoms often at war. In the early 1200s Chinggis Khan conquered Central Asia and the Persian Gulf region and turned most of the Silk Road into a safe, unified trade system. Knowledge moved with goods: Baghdad\'s learning had already spread before the Mongols destroyed the city in 1258, and Chinese technologies reached Europe.' },
        { en: 'Not everything carried was beneficial. In the early 1300s the system was healthy and strong; thirty years later it was falling apart. The Black Death began in China or Kyrgyzstan in the 1330s, and its germs "hitchhiked" along the Silk Road, reaching Europe through Kaffa by 1346. It was so lethal because Afro-Eurasia was so connected. About 200 million died, regions lost 30 to 50 percent of their people, and trade decreased as ports closed.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Which change in the trade network does the reading describe between the early 1300s and the 1350s?' },
        choices: [
          { ok: true, t: { en: 'A strong system fell apart after the plague' }, why: { en: 'Yes. Healthy and strong in the early 1300s, the system was falling apart thirty years later, as ports closed and trade decreased.' } },
          { t: { en: 'Trade moved from cities into the villages' }, why: { en: 'No. Trade stayed concentrated in cities. What changed was that the plague shrank trade everywhere.' } },
          { t: { en: 'One hegemon took control of the network' }, why: { en: 'No. The reading says the network had no clear hegemon. The big change was its collapse after the Black Death.' } }
        ]
      }
    }
  ],
  houses: [
    { at: [15, 2], name: { en: 'Farmer Dilnoza' }, look: { skin: 3, hair: '#2b1d14', shirt: '#6a7a4a', style: 'bun' },
      lines: [{ en: 'We grow wheat out here and sell it at the local market in town.' }, { en: 'Caravans pass on the road, but silk and spices are not for village homes.' }] },
    { at: [7, 8], name: { en: 'Imam Hasan' }, look: { skin: 2, hair: '#8a8a8a', shirt: '#e8e4d8', robe: true, hat: '#ffffff', style: 'short' },
      lines: [{ en: 'Some say the rise of Islam first began to tie this trade network together.' }, { en: 'Under the Abbasids, Baghdad\'s House of Wisdom drew scholars from all over Afro-Eurasia.' }] },
    { at: [16, 7], name: { en: 'Glassmaker Saida' }, look: { skin: 1, hair: '#3a2a1a', shirt: '#2a8a8a', robe: true, style: 'bun' },
      lines: [{ en: 'Where a good is made, it is plentiful and cheap. Far away, it is rare and dear.' }, { en: 'My skill came from years with a master. Skills like this stay in few places.' }] },
    { at: [19, 7], name: { en: 'Zarina the copyist' }, look: { skin: 1, hair: '#1b1410', shirt: '#7a4a8a', robe: true, style: 'long' },
      lines: [{ en: 'Books and ideas travel west through Tabriz, which links this road to the Persian Gulf.' }, { en: 'Technologies from China travel west on these roads, all the way to Europe.' }] }
  ],
  signs: [
    { x: 11, y: 4, text: { en: 'SAMARKAND · NORTH GATE. Fields and villages outside, the bazaar and caravanserai inside and east.' } },
    { x: 1, y: 8, text: { en: 'ROAD WEST · To Bukhara, famous for Suzani carpets, then on toward Persia.' } },
    { x: 29, y: 14, text: { en: 'ROAD EAST · To China, the land of silk and porcelain.' } }
  ],
  finds: [
    { clueAt: [27, 16], at: [27, 19], decor: 'vase', clue: { en: 'From this note, walk 3 steps south, into the dunes.' },
      text: { en: 'A blue-and-white bowl from Basra! Basra potters copied and improved on the finest Chinese pottery.' } }
  ],
  scraps: [[1, 1], [30, 1], [30, 20]],
  smudges: [[18, 3], [9, 19]],
  quest: {
    stat: 'pla',
    title: { en: 'Silk for the Merchant' },
    giver: {
      x: 10, y: 12, name: { en: 'Yusuf' }, role: { en: 'Young merchant' },
      look: { skin: 3, hair: '#1b1410', shirt: '#3a7a4a', pants: '#3a2a1a', style: 'short' },
      lines: [
        { en: 'I am a [[merchant|merchant]]. I buy goods where they are plentiful and cheap, and sell them where they are scarce and dear.' },
        { en: 'Skills are hard to learn: you must study under a master. So glassmaking stays in few places, and Samarkand glass is rare far away.' },
        { en: 'A merchant from China has silk, but he will not take my coins. Ask the gatekeeper at the north gate. She knows every caravan.' }
      ],
      wait: { en: 'The gatekeeper stands outside the north gate. Walk north up the main street.' },
      thanks: { en: 'Silk! I will carry it west toward Bukhara, where it is scarcer and sells for more. That is how the Silk Roads work.' }
    },
    contact: {
      x: 13, y: 4, name: { en: 'Malika' }, role: { en: 'Gatekeeper' },
      look: { skin: 2, hair: '#2b1d14', shirt: '#4a4a7a', robe: true, style: 'bun' },
      lines: [
        { en: 'Every caravan that comes in goes into my book. The caravan from China came in yesterday.' },
        { en: 'Its merchant, Zhao, rests at the caravanserai. Go south to the main street, then east out the east gate, to the walled yard.' }
      ]
    },
    action: {
      type: 'trade',
      trader: {
        x: 26, y: 8, name: { en: 'Zhao' }, role: { en: 'Merchant from Yuan China' },
        look: { skin: 1, hair: '#1b1410', shirt: '#a8323a', robe: true, hat: '#2a2a2a', style: 'bun' },
        lines: [
          { en: 'I come from the Yuan dynasty. Kublai Khan founded it in 1271 and moved its capital to Beijing.' },
          { en: 'Chinese silk is one of the most important goods on these roads. I will trade a bale.' }
        ]
      },
      q: { en: 'Zhao will trade silk only for a good that sells well back in China. Which should you bring?' },
      choices: [
        { ok: true, at: [17, 8], icon: '🏺', t: { en: 'Samarkand glass' },
          why: { en: 'Good trade! Glass is plentiful and cheap in Samarkand. Far away it is scarce, so its price is high.' } },
        { at: [4, 13], icon: '🍵', t: { en: 'Chinese porcelain' },
          why: { en: 'China\'s port cities make porcelain. It is cheap there, so carrying it home earns Zhao nothing.' } },
        { at: [7, 4], icon: '🌾', t: { en: 'A sack of village wheat' },
          why: { en: 'Grain is sold at local markets. Long-distance caravans carried mostly luxury goods worth the long trip.' } }
      ],
      item: { icon: '🧵', name: { en: 'A bale of Chinese silk' } }
    }
  },
  challenge: {
    at: [16, 13], type: 'route', stat: 'loc',
    // cause to effect across the map: the ruined watchtower (south-west) -> the Mongol guard post by the west gate
    // -> the crossroads in the heart of the city -> the caravanserai yard -> the copyist's house
    spots: [[3, 18], [4, 10], [13, 10], [26, 10], [20, 8]],
    title: { en: 'From war to a web of trade' },
    intro: { en: 'The Void scrambled the chronicle of the Silk Roads. Walk to each stop on the map in order, from cause to effect.' },
    items: [
      { icon: '⚔️', t: { en: 'Before 1200: rival kingdoms at war make the road perilous' } },
      { icon: '🐎', t: { en: 'Chinggis Khan\'s cavalry conquers Central Asia' } },
      { icon: '🛡️', t: { en: 'Mongol rule makes most of the Silk Road safe and unified' } },
      { icon: '🐫', t: { en: 'More caravans travel, and caravanserai flourish' } },
      { icon: '💡', t: { en: 'Goods, technologies and ideas spread across Eurasia' } }
    ],
    why: { en: 'Cause comes before effect: wars made the road perilous, conquest unified it, safety brought more caravans, and caravans spread goods and ideas.' },
    success: { en: 'The chain is whole! Political stability under the Mongols helped trade grow, and trade spread goods, technologies and ideas.' }
  },
  boss: {
    at: [24, 19], stat: 'hei', need: 3,
    name: { en: 'The Void' },
    appear: { en: 'The Void has opened in the dunes south of the caravanserai. Sand pours into it.' },
    taunt: { en: 'Silk, glass, ideas. Every road ends somewhere. All of them end in me.' },
    win: { en: 'The Void closes over Samarkand. The page on the Silk Roads floats down into your hands.' },
    questions: [
      {
        stim: { text: { en: 'The road had been a perilous one, controlled by independent kingdoms, often at war with each other.' }, src: { en: 'Adapted from "Archipelago of Trade," World History Project' } },
        q: { en: 'Which of the following most directly changed the situation described in the excerpt?' },
        choices: [{ en: 'The Mongol conquest of Central Asia' }, { en: 'The rise of the Abbasid Caliphate' }, { en: 'The Crusades launched by Pope Urban II' }, { en: 'The golden age of the Tang dynasty' }],
        answer: 0,
        why: { en: 'In the early 1200s Chinggis Khan conquered Central Asia and turned most of the Silk Road into a safe, unified trade system.' }
      },
      {
        stim: { title: { en: 'Some goods on the Silk Roads, about 1300' }, rows: [[{ en: 'Where it came from' }, { en: 'Good' }], [{ en: 'China' }, { en: 'Silk' }], [{ en: 'Southeast Asia' }, { en: 'Pepper, clove, cinnamon, camphor, nutmeg' }], [{ en: 'Samarkand' }, { en: 'Glass' }]], src: { en: 'From "Archipelago of Trade," World History Project' } },
        q: { en: 'The goods in the table best support which claim about Afro-Eurasian trade c. 1300?' },
        choices: [{ en: 'Long-distance trade centered on luxuries' }, { en: 'China ruled the network as its hegemon' }, { en: 'Villages were the main buyers of imports' }, { en: 'Caravans mostly carried grain to cities' }],
        answer: 0,
        why: { en: 'Silk, spices and glass were costly luxury goods, made in a few places and wanted far away. The network had no clear hegemon.' }
      },
      {
        stim: { text: { en: 'Since most of its products were luxury items, this trade network was concentrated on strategic urban centers. The system ignored vast rural areas, which mostly continued to rely on local markets.' }, src: { en: 'Adapted from "Archipelago of Trade," World History Project' } },
        q: { en: 'The metaphor "archipelago of trade" most directly reflects which feature of the network in the excerpt?' },
        choices: [{ en: 'Trade clustered in cities amid farmland' }, { en: 'Ships carried most goods between islands' }, { en: 'Island states of Southeast Asia ruled it' }, { en: 'Villages made most of the luxury goods' }],
        answer: 0,
        why: { en: 'Cities were like islands of production in a sea of rural areas, which mostly kept relying on local markets.' }
      },
      {
        stim: { text: { en: 'A student claims that Marco Polo\'s goal in describing the paper money of Yuan China was not just to report what he saw, but to impress his European readers with the sophistication of Chinese economic systems.' }, src: { en: 'Adapted from "Quick Sourcing: Networks of Exchange," World History Project' } },
        q: { en: 'The student\'s claim is mainly an analysis of the source\'s...' },
        choices: [{ en: 'purpose: why the author wrote it' }, { en: 'audience: who its readers were' }, { en: 'point of view: who the author was' }, { en: 'context: the world it came from' }],
        answer: 0,
        why: { en: 'The claim is about Polo\'s goal, what he hoped to do by writing. That is purpose. His European readers are only part of the goal.' }
      },
      {
        stim: { text: { en: '"This author explains that he learned Indian and Arabic math during his travels for trade, and brought those ideas back to Europe."' }, src: { en: 'Description of Fibonacci\'s Book of Calculation, "Quick Sourcing: Networks of Exchange," World History Project' } },
        q: { en: 'The source described most directly reflects which development of c. 1200 to 1450?' },
        choices: [{ en: 'Intellectual traditions moved with merchants' }, { en: 'Abbasid learning was lost when Baghdad fell' }, { en: 'Europe adopted China\'s paper money system' }, { en: 'Mongol rulers spread their own math west' }],
        answer: 0,
        why: { en: 'This is diffusion: Indian and Arabic math reached Europe with a merchant traveler, along the same routes as goods.' }
      },
      {
        stim: { text: { en: 'The Black Death began somewhere in China or Kyrgyzstan in the 1330s. By 1346 the disease reached Europe through Kaffa and the Middle East through Baghdad. A year later people were dying of it in Egypt.' }, src: { en: 'Adapted from "Archipelago of Trade," World History Project' } },
        q: { en: 'Which of the following best explains the spread described in the excerpt?' },
        choices: [{ en: 'Close trade links let germs travel with goods' }, { en: 'Crusaders carried it home from the Holy Land' }, { en: 'Mongol armies slaughtered conquered cities' }, { en: 'Portugal\'s sea route brought it from India' }],
        answer: 0,
        why: { en: 'The plague was so lethal because Afro-Eurasia was so efficiently connected: its germs hitchhiked along the Silk Road.' }
      },
      {
        stim: { title: { en: 'Central Asia\'s northern passage' }, rows: [[{ en: 'When' }, { en: 'What happened' }], [{ en: 'Before 1200' }, { en: 'Independent kingdoms, often at war, control the road' }], [{ en: 'Early 1200s' }, { en: 'Chinggis Khan conquers Central Asia' }], [{ en: '1245 and 1253' }, { en: 'Friars Plano Carpini and Rubruck travel east' }], [{ en: '1271' }, { en: 'Marco Polo sets out; Kublai Khan founds the Yuan' }]], src: { en: 'From "Archipelago of Trade," World History Project' } },
        q: { en: 'The timeline best supports which claim?' },
        choices: [{ en: 'Mongol unification opened the road to Europeans' }, { en: 'Europeans crossed Central Asia before the Mongols' }, { en: 'The Yuan dynasty ruled the road before 1200' }, { en: 'The Crusades opened Central Asia to the friars' }],
        answer: 0,
        why: { en: 'Europeans began traveling the road soon after Chinggis Khan made it safe and unified, not before.' }
      },
      {
        q: { en: 'Which of the following best explains why Samarkand glass could sell for a high price far from Samarkand?' },
        choices: [{ en: 'Skills stayed in few places, so it was rare' }, { en: 'Mongol rulers set one high price across Eurasia' }, { en: 'Village markets competed to buy luxury glass' }, { en: 'Glass was made in nearly every Silk Road city' }],
        answer: 0,
        why: { en: 'Skills were learned only from a master, so they stayed in few places. Goods were cheap where made and scarce, so dear, far away.' }
      }
    ]
  },
  learned: [
    { en: 'Mongol rule brought stability, the [[pax mongolica|Pax Mongolica]], that made the [[silk roads|Silk Roads]] safer, so trade grew and [[caravanserai|caravanserai]] flourished.' },
    { en: 'Most long-distance trade was in [[luxury goods|luxury goods]] like silk, spices and glass, gathered in trading cities: an [[archipelago of trade|archipelago of trade]].' },
    { en: 'Ideas, technologies and germs traveled with goods ([[diffusion|diffusion]]): Indian and Arabic math reached Europe, and in the 1340s the Black Death spread along the same routes.' }
  ],
  reflect: {
    q: { en: 'AP practice: Explain one way the Mongol Empire affected trade on the Silk Roads, c. 1200–1450.' },
    starter: { en: 'Mongol rule affected trade on the Silk Roads by' }
  }
};
