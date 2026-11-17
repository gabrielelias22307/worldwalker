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
    { en: 'The Grump blurred the page on the Silk Roads. Samarkand\'s merchants are forgetting why goods and ideas travel!' },
    { en: 'Talk to the 4 people here, help a young merchant make a trade, then wake the time stone.' }
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
        { en: 'Before Chinggis Khan, this road was perilous. Independent kingdoms controlled it, and they were often at war with each other.' },
        { en: 'Early in the 1200s his cavalry conquered all of Central Asia. His armies were savage: they slaughtered the soldiers and rulers of cities they conquered.' },
        { en: 'But he protected scholars, artisans and officials. Mongol rule turned most of the [[silk roads|Silk Road]] into one safe, unified trade system: the [[pax mongolica|Pax Mongolica]].' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Which best explains why trade on the Silk Roads grew in the 1200s?' },
        choices: [
          { ok: true, t: { en: 'Mongol rule made the routes safe' }, why: { en: 'Yes. One empire over Central Asia gave travelers safety, so more merchants took to the roads.' } },
          { t: { en: 'Small kingdoms fought over the road' }, why: { en: 'No. That was the problem before the Mongols: wars between kingdoms made the road perilous.' } },
          { t: { en: 'Merchants stopped traveling in groups' }, why: { en: 'No. Merchants kept traveling together in caravans. What changed was the safety of the road.' } }
        ]
      }
    },
    {
      x: 6, y: 14, name: { en: 'Farida' }, role: { en: 'Spice seller' },
      look: { skin: 3, hair: '#2b1d14', shirt: '#b5432a', robe: true, style: 'long' },
      lines: [
        { en: 'Pepper, cloves, cinnamon and nutmeg come from Southeast Asia. Silk comes from China. And fine glass is made right here in Samarkand.' },
        { en: 'Most goods on these roads are [[luxury goods|luxury goods]]. So long-distance trade gathers in the cities, not in the countryside.' },
        { en: 'The villages outside our walls mostly use local markets. Historians call the trading cities an [[archipelago of trade|archipelago of trade]]: islands in a sea of farmland.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Compared with the villages around it, how did Samarkand take part in trade?' },
        choices: [
          { ok: true, t: { en: 'In long-distance luxury trade' }, why: { en: 'Right. Silk, spices and glass gathered in trading cities. That is why they are called islands of trade.' } },
          { t: { en: 'Only at small local markets' }, why: { en: 'No. That describes the villages. The countryside mostly kept to local markets.' } },
          { t: { en: 'It refused goods from far away' }, why: { en: 'No. Farida sells spices from Southeast Asia and silk from China in Samarkand\'s bazaar.' } }
        ]
      }
    },
    {
      x: 20, y: 10, name: { en: 'Ilyas' }, role: { en: 'Translator and copyist' },
      look: { skin: 1, hair: '#3a2a1a', shirt: '#2a5a8a', robe: true, hat: '#e8e0d0', style: 'short' },
      lines: [
        { en: 'Ideas ride with the caravans. We call it [[diffusion|diffusion]]. The Mongols destroyed Baghdad in 1258, but its scholars\' knowledge had already spread along the trade routes.' },
        { en: 'Merchant travelers carry learning too. Fibonacci, a European, learned Indian and Arabic math on his trading travels and brought it back to Europe.' },
        { en: 'Europeans travel these roads now, like Marco Polo. He wrote about the paper money of Yuan China for readers in Europe.' },
        { en: 'When I read a source, I ask two things. Its [[audience|audience]]: who was it written for? Its [[purpose|purpose]]: why was it written?' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'A historian notes that Marco Polo wrote for Europeans. Which sourcing question is she asking?' },
        choices: [
          { ok: true, t: { en: 'Who was the audience?' }, why: { en: 'Yes. Audience means the readers a source was written for. Here, Europeans who had never used paper money.' } },
          { t: { en: 'When was money first used?' }, why: { en: 'No. That is a question about money, not about the source and who it was written for.' } },
          { t: { en: 'What did silk cost then?' }, why: { en: 'No. Prices are a fact about trade. Asking who the readers were is about the source\'s audience.' } }
        ]
      }
    },
    {
      x: 25, y: 16, name: { en: 'Bolat' }, role: { en: 'Camel driver' },
      look: { skin: 2, hair: '#1b1410', shirt: '#8a6a3a', pants: '#3a3020', hat: '#6a4a2a', style: 'short' },
      lines: [
        { en: 'I drive camels in a [[caravan|caravan]]. Traders travel together across the deserts and long roads. It is safer that way.' },
        { en: 'Each night we stop at a [[caravanserai|caravanserai]]: a safe place to stop, rest and refuel for the road.' },
        { en: 'People say "the Silk Road," but it is a [[network|network]] of many routes, and it carries many goods besides silk. In peaceful times like these, caravanserai flourish.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Why did caravanserai flourish along the Silk Roads around 1300?' },
        choices: [
          { ok: true, t: { en: 'Stability brought more travelers' }, why: { en: 'Yes. Under the Pax Mongolica more merchants traveled, and they all needed safe places to stop and rest.' } },
          { t: { en: 'Caravans stopped crossing deserts' }, why: { en: 'No. Caravans still crossed deserts and long roads. That is exactly why they needed caravanserai.' } },
          { t: { en: 'Silk was the only good carried' }, why: { en: 'No. Bolat says the routes carried many goods besides silk: spices, glass, horses and more.' } }
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
    intro: { en: 'The Grump scrambled the chronicle of the Silk Roads. Walk to each stop on the map in order, from cause to effect.' },
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
    name: { en: 'The Dust Grump' },
    appear: { en: 'The Dust Grump is hiding in the dunes south of the caravanserai!' },
    taunt: { en: 'Silk, glass, ideas... let them all get lost in the sand! No caravan will find its way.' },
    win: { en: 'The dust settles over Samarkand. The page on the Silk Roads floats down into your hands!' },
    questions: [
      {
        stim: { text: { en: 'The road had been a perilous one, controlled by independent kingdoms, often at war with each other.' }, src: { en: 'Adapted from "Archipelago of Trade," World History Project' } },
        q: { en: 'Which development most directly changed the situation described in the excerpt?' },
        choices: [{ en: 'The Mongol conquest of Central Asia' }, { en: 'The fall of the Han dynasty in China' }, { en: 'The building of Samarkand\'s walls' }, { en: 'The spread of wheat farming nearby' }],
        answer: 0,
        why: { en: 'Chinggis Khan\'s conquest put Central Asia under one rule and turned most of the Silk Road into a safe, unified trade system.' }
      },
      {
        stim: { title: { en: 'Some goods on the Silk Roads, about 1300' }, rows: [[{ en: 'Where it came from' }, { en: 'Good' }], [{ en: 'China' }, { en: 'Silk and porcelain' }], [{ en: 'Southeast Asia' }, { en: 'Pepper, cloves, nutmeg' }], [{ en: 'Samarkand' }, { en: 'Glass' }]], src: { en: 'From "Archipelago of Trade," World History Project' } },
        q: { en: 'The goods in the table best support which claim about Silk Roads trade?' },
        choices: [{ en: 'Most of it was in luxury goods' }, { en: 'Most of it was grain for cities' }, { en: 'Every region made the same goods' }, { en: 'Goods moved only from west to east' }],
        answer: 0,
        why: { en: 'Silk, spices, porcelain and glass were costly luxury goods, made in a few places and wanted far away.' }
      },
      {
        q: { en: 'Historians call the Afro-Eurasian trade system an "archipelago of trade" because...' },
        choices: [{ en: 'its cities were like islands among farmland' }, { en: 'it was carried only by ships between islands' }, { en: 'one island kingdom ruled all of the trade' }, { en: 'Pacific islands were the center of its trade' }],
        answer: 0,
        why: { en: 'Long-distance trade gathered in cities, while the rural areas around them mostly kept to local markets.' }
      },
      {
        stim: { text: { en: 'This author explains that he learned Indian and Arabic math during his travels for trade, and brought those ideas back to Europe.' }, src: { en: 'Adapted from "Quick Sourcing: Networks of Exchange," World History Project (about Fibonacci)' } },
        q: { en: 'The source described above best illustrates which effect of trade networks?' },
        choices: [{ en: 'Ideas spread along with goods' }, { en: 'Europe stopped trading with Asia' }, { en: 'Merchants hid all their knowledge' }, { en: 'Math was first invented in Europe' }],
        answer: 0,
        why: { en: 'This is diffusion: Indian and Arabic math traveled to Europe with a merchant traveler, along the same routes as goods.' }
      },
      {
        stim: { text: { en: 'A student claims Marco Polo described the paper money of Yuan China to impress his European readers with China\'s economic system.' }, src: { en: 'Adapted from "Quick Sourcing: Networks of Exchange," World History Project' } },
        q: { en: 'The student\'s claim is mainly about the source\'s...' },
        choices: [{ en: 'purpose: why it was written' }, { en: 'subject: what money looked like' }, { en: 'date: the year it was copied' }, { en: 'length: how long the book is' }],
        answer: 0,
        why: { en: 'A goal, like impressing readers, is the purpose of a source: the reason the author wrote it.' }
      },
      {
        stim: { text: { en: 'Merchants who traveled the Silk Roads needed safe places to stop, rest, and refuel during their journey.' }, src: { en: 'Adapted from "Unit 2 Overview: Networks of Exchange," World History Project' } },
        q: { en: 'Which places met the need described in the excerpt?' },
        choices: [{ en: 'Caravanserai along trade routes' }, { en: 'Wheat fields outside the towns' }, { en: 'Glass workshops in the cities' }, { en: 'Watchtowers left from old wars' }],
        answer: 0,
        why: { en: 'Caravanserai were safe stopping places along the routes. They flourished when stability brought more travelers.' }
      },
      {
        q: { en: 'The Mongols destroyed Baghdad in 1258. Why did much of its scholars\' knowledge survive?' },
        choices: [{ en: 'Trade had already spread it widely' }, { en: 'The Mongols carried it all to Beijing' }, { en: 'Baghdad was rebuilt the next year' }, { en: 'It had never been written down' }],
        answer: 0,
        why: { en: 'Thanks to the trade network, Baghdad\'s learning had already reached scholars and libraries along the Silk Road.' }
      },
      {
        q: { en: 'Which best explains how a Silk Roads merchant made a profit?' },
        choices: [{ en: 'Selling goods where they were scarce' }, { en: 'Buying goods where they cost the most' }, { en: 'Trading only inside his home city' }, { en: 'Carrying goods back to where they were made' }],
        answer: 0,
        why: { en: 'A merchant bought where a good was plentiful and cheap, then sold it where it was scarce and its price was high.' }
      }
    ]
  },
  learned: [
    { en: 'Mongol rule brought stability, the [[pax mongolica|Pax Mongolica]], that made the [[silk roads|Silk Roads]] safer, so trade grew and [[caravanserai|caravanserai]] flourished.' },
    { en: 'Most long-distance trade was in [[luxury goods|luxury goods]] like silk, spices and glass, gathered in trading cities: an [[archipelago of trade|archipelago of trade]].' },
    { en: 'Ideas and technologies traveled with goods ([[diffusion|diffusion]]), like Indian and Arabic math to Europe and Baghdad\'s learning across Eurasia.' }
  ],
  reflect: {
    q: { en: 'AP practice: Explain one way the Mongol Empire affected trade on the Silk Roads, c. 1200–1450.' },
    starter: { en: 'Mongol rule affected trade on the Silk Roads by' }
  }
};
