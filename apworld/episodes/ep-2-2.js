/* HISTORYWALKER · Episode 2.2 · The Mongol Empire and the Making of the Modern World (AP World Topic 2.2, c. 1200–1450)
   Karakorum, the Mongol capital, about 1250.
   Content source: Khan Academy, AP World History (World History Project), Unit 2 Lesson "The Mongol Empire and the Making
   of the Modern World": "Written in the Stars: Secrets of the Mongol Empire" (Bennett Sherry), "Sorqoqtani Beki: Graphic
   Biography", "Opener: World Travelers" (excerpts from The Travels of Marco Polo), "Quick Sourcing: Mongol Collection",
   "Wait for It...The Mongols!"; and the unit overview "Unit 2 Introduction: Networks of Exchange 1200 to 1450" (Trevor Getz).
   World History Project content is CC BY-NC 4.0. Facts here come from those readings. English only, AP level. */
window.EPISODE = {
  id: '2.2',
  realm: 2,
  sol: 'AP 2.2',
  style: 'steppe',
  weather: { sky: 'dust', time: 'day' },
  title: { en: 'The Mongol Empire' },
  place: { en: 'Karakorum, Mongol Empire, 1250' },
  intro: [
    { en: 'The Grump blurred the page on the Mongols. Karakorum is forgetting how a steppe people built the largest empire in history!' },
    { en: 'Talk to the 4 people here, help an astronomer, then wake the time stone.' }
  ],
  scenes: {
    at: [102.8, 47.2],
    year: 1250,
    start: [
      { en: 'In 1206, Temujin united the steppe tribes and became Genghis Khan.' },
      { en: 'Genghis Khan and his successors built the largest empire in history.' },
      { en: 'His son Ögedei Khan built a new capital here, at Karakorum.' }
    ],
    guess: {
      q: { en: 'The Mongols came to rule a quarter of the world\'s people. Were there many Mongols?' },
      choices: [{ t: { en: '🐎 Few Mongols' }, ok: true }, { t: { en: '👥 Many millions' } }],
      why: { en: 'Mongol populations were low. Horse warfare and a strong leader mattered more than numbers.' }
    },
    page: { en: 'The Mongol Empire covered over 17 percent of the world\'s land.' },
    next: {
      q: { en: 'Next: the Indian Ocean. Did predictable winds help sailors trade there?' },
      choices: [{ t: { en: 'Yes, they did' }, ok: true }, { t: { en: 'No, winds were random' } }],
      why: { en: 'Predictable weather let merchants sail around the Indian Ocean in a yearly cycle. You go there next.' }
    }
  },
  start: [14, 5],
  map: [
    'KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK',
    'Kggg,gggggWDDDDD.l.DDDDDDDDRRR.K',
    'Kg.FFFFF.gWDDdDD.l.DDDDDDDDhhh.K',
    'Kgggg.ggggW..l...l.DDDdDDDD....K',
    'Kg,ggggggglllllllllllllllllllllK',
    'KgggggggggW.x..................K',
    'Kggg,gggggW....RRR......RRR....K',
    'Kggggg,gggW....hhh......hhh....K',
    'KgggggggggW....................K',
    'Kgg,ggggggWllllllllllllllllllllK',
    'KgggggggggW....................K',
    'KggggggxggW....................K',
    'Kggg,gggggW....................K',
    'KgggggggggWRRR.RRR......mmm.mmmK',
    'KgQQQ.ggggWhdh.hhh.....llllllllK',
    'Kghdh.ggggW......x......mmm.mmmK',
    'Kg..:::::::::::::::llllllllllllK',
    'KgggggggggWRRR........,...RRRRRK',
    'Kgg,ggggggWhhh............hhdhhK',
    'KgggggggggW....................K',
    'Kggg,gggggW...,..........,.....K',
    'KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK'
  ],
  words: {
    'steppe': { en: 'the Eurasian steppe: a band of dry grassland stretching from Eastern Europe to East Asia' },
    'pastoralism': { en: 'a way of life based on herding animals rather than farming or city living' },
    'khan': { en: 'a Mongol ruler; Genghis Khan means "universal emperor"' },
    'khanate': { en: 'one of the four parts of the Mongol Empire, each ruled by its own khan: the Great Khan\'s (later the Yuan), the Chagatai, the Ilkhanate and the Golden Horde' },
    'karakorum': { en: 'the capital that Ögedei Khan built on the Mongolian steppe' },
    'yam': { en: 'the Mongol relay system of post stations with fresh horses, used to carry the khan\'s messages quickly' },
    'silk roads': { en: 'overland trade routes across Eurasia, named for Chinese silk, one of their most important goods' },
    'pax mongolica': { en: '"Mongol peace": the century of order under Mongol rule when goods and ideas moved freely across Eurasia' },
    'diffusion': { en: 'the spread of ideas, goods or technology from one culture to another' },
    'black death': { en: 'the bubonic plague, which spread along Afro-Eurasian trade routes beginning in the 1340s' }
  },
  npcs: [
    {
      x: 5, y: 7, name: { en: 'Odval' }, role: { en: 'Herder' },
      look: { skin: 2, hair: '#1b1410', shirt: '#2f6f8f', pants: '#4a3a2a', robe: true, hat: '#b23a2a', style: 'long' },
      lines: [
        { en: 'We live by [[pastoralism|herding]], moving our animals across the [[steppe|steppe]]. There were never many of us, and for a long time each tribe ruled itself.' },
        { en: 'In my grandmother\'s time, a terrible drought shriveled the pastures. Hungry tribes pushed south and raided the farming peoples.' },
        { en: 'Then Temujin united the tribes. In 1206 a council of chiefs named him Genghis [[khan|Khan]]. Our men and women are expert riders, masters of horse warfare.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Historians look for a motive behind the Mongol conquests. What do they think pushed the tribes south?' },
        choices: [
          { ok: true, t: { en: 'A drought that dried up the pastures' }, why: { en: 'Yes. Climate change shriveled the grass the herds needed, so the tribes moved south and raided farming societies.' } },
          { t: { en: 'A large population that needed farmland' }, why: { en: 'No. Mongol populations were low, and they were herders, not farmers.' } },
          { t: { en: 'An order from the Song emperor of China' }, why: { en: 'No. The Song did not rule the steppe tribes. Later, in 1279, the Mongols conquered the Song.' } }
        ]
      }
    },
    {
      x: 14, y: 16, name: { en: 'Yusuf' }, role: { en: 'Metalworker' },
      look: { skin: 4, hair: '#2b1d14', shirt: '#6a4a8a', pants: '#3a3a2a', style: 'short' },
      lines: [
        { en: 'I made fine metalwork in a city far to the west. When the Mongol armies came, many cities surrendered, hoping for mercy.' },
        { en: 'Genghis Khan warned his victims, "I am the punishment of God." Millions died in the conquests, and great cities were sacked.' },
        { en: 'Ögedei Khan built this capital, [[karakorum|Karakorum]], with thousands of artisans and architects. Many of us were captured and brought here as the khan\'s property.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Were the Mongols good or bad? How does Yusuf\'s point of view shape the answer?' },
        choices: [
          { ok: true, t: { en: 'The answer depends on whose view you take' }, why: { en: 'Yes. For Yusuf and others taken by force, conquest was a disaster, even though trade and ideas later flowed.' } },
          { t: { en: 'Conquered people all welcomed the Mongols' }, why: { en: 'No. The conquests were brutal. Many cities surrendered out of fear, hoping for mercy.' } },
          { t: { en: 'Experts all chose freely to move here' }, why: { en: 'No. After a conquest, the Mongols often captured experts and forced thousands to move far from home.' } }
        ]
      }
    },
    {
      x: 22, y: 14, name: { en: 'Bahram' }, role: { en: 'Silk Road merchant' },
      look: { skin: 3, hair: '#1b1410', shirt: '#c0392b', pants: '#2a2a3a', robe: true, hat: '#e8e0c8', style: 'short' },
      lines: [
        { en: 'The khans keep order on the [[silk roads|Silk Roads]]. They crush bandits, so overland travel is cheaper and safer than ever.' },
        { en: 'Now many traders prefer these northern roads to the old Indian Ocean sea routes. And under the khans, merchants are honored, not looked down on.' },
        { en: 'We carry ideas as well as goods. Islamic mathematics and medicine [[diffusion|spread]] west to Europe, and Italian cities adopt the Arabic numbers.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'How did Mongol rule change long-distance trade across Eurasia?' },
        choices: [
          { ok: true, t: { en: 'Overland trade grew safer and busier' }, why: { en: 'Yes. This [[pax mongolica|Pax Mongolica]] linked east and west. A century later, the same busy roads helped the Black Death spread.' } },
          { t: { en: 'Trade stopped because of constant war' }, why: { en: 'No. Even when the khanates fought each other, they protected travelers and merchants.' } },
          { t: { en: 'Sea routes became the only way to trade' }, why: { en: 'No. Safer roads made the northern Silk Roads preferable to the southern sea routes for a time.' } }
        ]
      }
    },
    {
      x: 20, y: 6, name: { en: 'Mahmud' }, role: { en: 'Court secretary' },
      look: { skin: 5, hair: '#1b1410', shirt: '#2a7a5a', robe: true, hat: '#f0ece0', style: 'short' },
      lines: [
        { en: 'I keep records for the khan\'s court. The khans bring in experts from across Eurasia: Muslim officials, scholars, doctors and astronomers.' },
        { en: 'The Mongols adopt the customs and tools of the peoples they conquer. If an enemy has a better weapon or medicine, they take it up.' },
        { en: 'Some say this empire is too big for one ruler. Over this century it is slowly splitting into four [[khanate|khanates]].' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Why did Mongol rulers depend on experts from the lands they conquered?' },
        choices: [
          { ok: true, t: { en: 'They needed many skills to run a vast empire' }, why: { en: 'Yes. Mongol rule relied on a network of specialists: officials, artisans, architects, doctors and astronomers.' } },
          { t: { en: 'Mongols were not allowed to hold power' }, why: { en: 'No. The khans held power. Experts served them as advisers and officials.' } },
          { t: { en: 'Experts were needed only to herd animals' }, why: { en: 'No. Herding was the Mongols\' own skill. Experts ran taxes, built cities and studied the stars.' } }
        ]
      }
    }
  ],
  houses: [
    { at: [13, 2], name: { en: 'Keeper of the prayer house' }, look: { skin: 1, hair: '#2b1d14', shirt: '#d9822b', robe: true, style: 'short' },
      lines: [{ en: 'People of many faiths pass through Karakorum.' }, { en: 'Here, for the most part, people may worship as they please.' }] },
    { at: [22, 3], name: { en: 'Palace guard Temür' }, look: { skin: 2, hair: '#1b1410', shirt: '#8a2a2a', pants: '#3a2a1a', hat: '#5a3a1a', style: 'bun' },
      lines: [{ en: 'Advisers from across Eurasia gather at the khan\'s court.' }, { en: 'Lady Sorqoqtani Beki is using her family network to win the empire for her son, Möngke.' }] },
    { at: [3, 15], name: { en: 'Station keeper Saran' }, look: { skin: 2, hair: '#1b1410', shirt: '#4a7aa8', robe: true, style: 'long' },
      lines: [{ en: 'Fresh horses wait here for the khan\'s messengers.' }, { en: 'A rider swaps horses and gallops on to the next station.' }] },
    { at: [12, 14], name: { en: 'Weaver Shirin' }, look: { skin: 3, hair: '#2b1d14', shirt: '#b04a7a', robe: true, style: 'bun' },
      lines: [{ en: 'Our workshop makes cloth for the court.' }, { en: 'Architects from many lands helped build this capital.' }] },
    { at: [28, 18], name: { en: 'Innkeeper Toghon' }, look: { skin: 2, hair: '#5a5a5a', shirt: '#7a6a3a', pants: '#3a3a2a', style: 'short' },
      lines: [{ en: 'Caravans rest here before the long road west.' }, { en: 'Merchants say the roads stay safe, even when the khans quarrel.' }] }
  ],
  signs: [
    { x: 12, y: 5, text: { en: 'KARAKORUM · The capital built by Ögedei Khan with artisans and architects from across Eurasia.' } },
    { x: 17, y: 15, text: { en: 'ARTISANS\' LANE · Craftsmen from conquered lands work here for the khans.' } },
    { x: 7, y: 11, text: { en: 'THE STEPPE · Dry grassland from Eastern Europe to East Asia. Herds must move to find fresh pasture.' } }
  ],
  finds: [
    { clueAt: [29, 3], at: [29, 6], decor: 'gem', clue: { en: 'From this note, walk 3 steps south along the east edge of the city.' },
      text: { en: 'A merchant\'s lost gem! Under Mongol rule, luxury goods traveled from one end of Eurasia to the other.' } }
  ],
  scraps: [[1, 1], [30, 1], [1, 20]],
  smudges: [[6, 13], [22, 19]],
  quest: {
    stat: 'reg',
    title: { en: 'The Torn Star Chart' },
    giver: {
      x: 27, y: 9, name: { en: 'Zhang' }, role: { en: 'Astronomer' },
      look: { skin: 1, hair: '#1b1410', shirt: '#2a3a7a', robe: true, hat: '#1a1a2a', style: 'bun' },
      lines: [
        { en: 'The Mongols worship a sky god, and their shamans read the heavens. So the khans keep astronomers from China and the Muslim world.' },
        { en: 'The khans are tolerant of foreign religions. They honor some religious leaders with respect and tax benefits. This empire is a religious melting pot!' },
        { en: 'But the Grump\'s Ink Thief tore up my star chart! Ask the [[yam|yam]] rider at the post station outside the west gate.' }
      ],
      wait: { en: 'The yam rider waits by the post station, outside the city\'s west gate, in the south.' },
      thanks: { en: 'My chart! Here Chinese and Muslim astronomers share what they know. Networks help science grow.' }
    },
    contact: {
      x: 6, y: 15, name: { en: 'Bat' }, role: { en: 'Yam rider' },
      look: { skin: 2, hair: '#1b1410', shirt: '#3a6a3a', pants: '#3a2a1a', hat: '#8a5a2a', style: 'short' },
      lines: [
        { en: 'I ride for the [[yam|yam]]. Post stations with fresh horses stand along the roads, so the khan\'s messages race across the empire.' },
        { en: 'The thief tore the chart into three pieces. He hid each one where Mongol rule changed life in this city.' },
        { en: 'Follow the clues through the gate. Each piece shows one effect of the empire!' }
      ]
    },
    action: {
      type: 'chase',
      at: [4, 9],
      hops: [[13, 19], [8, 16]],
      name: { en: 'The Ink Thief' },
      taunt: { en: 'The Grump sent me. No chart, no shared knowledge!' },
      win: { en: 'Caught on the open steppe! The thief drops the last scrap. The star chart is whole.' },
      clues: [
        { t: { en: 'Piece 1 lies where Chinese silk is sold to traders from the west. Look in the market, in the south-east.' },
          zones: [{ x: 23, y: 14, w: 7, h: 1 }],
          noBy: [{ x: 23, y: 19, w: 7, h: 1, t: { en: 'This is the caravanserai, where caravans rest for the night. The silk is sold in the market just north.' } }],
          found: { en: 'Piece 1! Ruling China gave the khans the world\'s leading workshops. More goods now flow from east to west.' } },
        { t: { en: 'Piece 2 lies where people of many faiths may pray. Find the house of prayer, north-west, just inside the city wall.' },
          zones: [{ x: 11, y: 3, w: 5, h: 1 }],
          noBy: [{ x: 19, y: 4, w: 8, h: 1, t: { en: 'This is the khan\'s palace, not a house of prayer. Look farther west, by the wall.' } }],
          found: { en: 'Piece 2! The khans were generally tolerant of foreign religions, and Eurasia became a religious melting pot.' } },
        { t: { en: 'Piece 3 lies where craftsmen taken from conquered cities now work. Search the artisans\' lane, south-west, inside the wall.' },
          zones: [{ x: 11, y: 15, w: 5, h: 1 }],
          noBy: [{ x: 23, y: 16, w: 8, h: 1, t: { en: 'This is the market. Merchants came here freely, but many craftsmen were brought by force. Look west.' } }],
          found: { en: 'Piece 3! Experts moved across the empire, many by force, and their skills spread with them.' } }
      ],
      item: { icon: '📜', name: { en: 'Zhang\'s star chart' } }
    }
  },
  challenge: {
    at: [14, 10],
    type: 'levers', // in the world; the card version (combo) is the fallback
    // three levers around the stone: the motive (by the steppe-side wall), the means, the policy of rule
    spots: [[11, 12], [14, 12], [17, 12]],
    stat: 'loc',
    title: { en: 'Cause, means, effect' },
    intro: { en: 'The Grump scrambled why the Mongol Empire rose and lasted. Set each lever: the motive that pushed the tribes south, the means that won their wars, and the way the khans ran their lands. Then test them at the stone.' },
    switches: [
      { name: { en: 'Motive: what pushed the tribes south' }, icon: '🌵', start: 0,
        states: [{ en: 'Rich grass, fat herds' }, { en: 'Drought dries the pastures' }, { en: 'Silver found on the steppe' }] },
      { name: { en: 'Means: what won the wars' }, icon: '🐎', start: 0,
        states: [{ en: 'A huge population' }, { en: 'Horse warfare, one leader' }, { en: 'A great war fleet' }] },
      { name: { en: 'Rule: how the khans ran their lands' }, icon: '🐫', start: 0,
        states: [{ en: 'Closed the roads to strangers' }, { en: 'Guarded roads, used experts' }, { en: 'Forced one religion on all' }] }
    ],
    results: {
      '0,0,0': { ok: false, t: { en: '3 levers are not right yet. Read the red lines and pull again.' },
        show: [{ icon: '🌵', ok: false, t: { en: 'Rich grass gives no reason to leave the steppe' } }, { icon: '🐎', ok: false, t: { en: 'Mongol populations were low, not huge' } }, { icon: '🐫', ok: false, t: { en: 'The khans welcomed merchants and protected travelers' } }] },
      '0,0,1': { ok: false, t: { en: '2 levers are not right yet. Read the red lines and pull again.' },
        show: [{ icon: '🌵', ok: false, t: { en: 'Rich grass gives no reason to leave the steppe' } }, { icon: '🐎', ok: false, t: { en: 'Mongol populations were low, not huge' } }, { icon: '🐫', ok: true, t: { en: 'Safe roads and imported experts held the empire together' } }] },
      '0,0,2': { ok: false, t: { en: '3 levers are not right yet. Read the red lines and pull again.' },
        show: [{ icon: '🌵', ok: false, t: { en: 'Rich grass gives no reason to leave the steppe' } }, { icon: '🐎', ok: false, t: { en: 'Mongol populations were low, not huge' } }, { icon: '🐫', ok: false, t: { en: 'The khans were generally tolerant of religions' } }] },
      '0,1,0': { ok: false, t: { en: '2 levers are not right yet. Read the red lines and pull again.' },
        show: [{ icon: '🌵', ok: false, t: { en: 'Rich grass gives no reason to leave the steppe' } }, { icon: '🐎', ok: true, t: { en: 'Expert horse warfare, and Genghis Khan united the tribes' } }, { icon: '🐫', ok: false, t: { en: 'The khans welcomed merchants and protected travelers' } }] },
      '0,1,1': { ok: false, t: { en: 'One lever is not right yet. Read the red lines and pull again.' },
        show: [{ icon: '🌵', ok: false, t: { en: 'Rich grass gives no reason to leave the steppe' } }, { icon: '🐎', ok: true, t: { en: 'Expert horse warfare, and Genghis Khan united the tribes' } }, { icon: '🐫', ok: true, t: { en: 'Safe roads and imported experts held the empire together' } }] },
      '0,1,2': { ok: false, t: { en: '2 levers are not right yet. Read the red lines and pull again.' },
        show: [{ icon: '🌵', ok: false, t: { en: 'Rich grass gives no reason to leave the steppe' } }, { icon: '🐎', ok: true, t: { en: 'Expert horse warfare, and Genghis Khan united the tribes' } }, { icon: '🐫', ok: false, t: { en: 'The khans were generally tolerant of religions' } }] },
      '0,2,0': { ok: false, t: { en: '3 levers are not right yet. Read the red lines and pull again.' },
        show: [{ icon: '🌵', ok: false, t: { en: 'Rich grass gives no reason to leave the steppe' } }, { icon: '🐎', ok: false, t: { en: 'Mongol fleets failed twice to invade Japan' } }, { icon: '🐫', ok: false, t: { en: 'The khans welcomed merchants and protected travelers' } }] },
      '0,2,1': { ok: false, t: { en: '2 levers are not right yet. Read the red lines and pull again.' },
        show: [{ icon: '🌵', ok: false, t: { en: 'Rich grass gives no reason to leave the steppe' } }, { icon: '🐎', ok: false, t: { en: 'Mongol fleets failed twice to invade Japan' } }, { icon: '🐫', ok: true, t: { en: 'Safe roads and imported experts held the empire together' } }] },
      '0,2,2': { ok: false, t: { en: '3 levers are not right yet. Read the red lines and pull again.' },
        show: [{ icon: '🌵', ok: false, t: { en: 'Rich grass gives no reason to leave the steppe' } }, { icon: '🐎', ok: false, t: { en: 'Mongol fleets failed twice to invade Japan' } }, { icon: '🐫', ok: false, t: { en: 'The khans were generally tolerant of religions' } }] },
      '1,0,0': { ok: false, t: { en: '2 levers are not right yet. Read the red lines and pull again.' },
        show: [{ icon: '🌵', ok: true, t: { en: 'Drought shriveled the pastures and pushed the tribes south' } }, { icon: '🐎', ok: false, t: { en: 'Mongol populations were low, not huge' } }, { icon: '🐫', ok: false, t: { en: 'The khans welcomed merchants and protected travelers' } }] },
      '1,0,1': { ok: false, t: { en: 'One lever is not right yet. Read the red lines and pull again.' },
        show: [{ icon: '🌵', ok: true, t: { en: 'Drought shriveled the pastures and pushed the tribes south' } }, { icon: '🐎', ok: false, t: { en: 'Mongol populations were low, not huge' } }, { icon: '🐫', ok: true, t: { en: 'Safe roads and imported experts held the empire together' } }] },
      '1,0,2': { ok: false, t: { en: '2 levers are not right yet. Read the red lines and pull again.' },
        show: [{ icon: '🌵', ok: true, t: { en: 'Drought shriveled the pastures and pushed the tribes south' } }, { icon: '🐎', ok: false, t: { en: 'Mongol populations were low, not huge' } }, { icon: '🐫', ok: false, t: { en: 'The khans were generally tolerant of religions' } }] },
      '1,1,0': { ok: false, t: { en: 'One lever is not right yet. Read the red lines and pull again.' },
        show: [{ icon: '🌵', ok: true, t: { en: 'Drought shriveled the pastures and pushed the tribes south' } }, { icon: '🐎', ok: true, t: { en: 'Expert horse warfare, and Genghis Khan united the tribes' } }, { icon: '🐫', ok: false, t: { en: 'The khans welcomed merchants and protected travelers' } }] },
      '1,1,1': { ok: true, t: { en: 'Drought gave the motive, horse warfare and one leader gave the means, and guarded roads made the empire a network. It holds!' },
        show: [{ icon: '🌵', ok: true, t: { en: 'Drought shriveled the pastures and pushed the tribes south' } }, { icon: '🐎', ok: true, t: { en: 'Expert horse warfare, and Genghis Khan united the tribes' } }, { icon: '🐫', ok: true, t: { en: 'Safe roads and imported experts held the empire together' } }] },
      '1,1,2': { ok: false, t: { en: 'One lever is not right yet. Read the red lines and pull again.' },
        show: [{ icon: '🌵', ok: true, t: { en: 'Drought shriveled the pastures and pushed the tribes south' } }, { icon: '🐎', ok: true, t: { en: 'Expert horse warfare, and Genghis Khan united the tribes' } }, { icon: '🐫', ok: false, t: { en: 'The khans were generally tolerant of religions' } }] },
      '1,2,0': { ok: false, t: { en: '2 levers are not right yet. Read the red lines and pull again.' },
        show: [{ icon: '🌵', ok: true, t: { en: 'Drought shriveled the pastures and pushed the tribes south' } }, { icon: '🐎', ok: false, t: { en: 'Mongol fleets failed twice to invade Japan' } }, { icon: '🐫', ok: false, t: { en: 'The khans welcomed merchants and protected travelers' } }] },
      '1,2,1': { ok: false, t: { en: 'One lever is not right yet. Read the red lines and pull again.' },
        show: [{ icon: '🌵', ok: true, t: { en: 'Drought shriveled the pastures and pushed the tribes south' } }, { icon: '🐎', ok: false, t: { en: 'Mongol fleets failed twice to invade Japan' } }, { icon: '🐫', ok: true, t: { en: 'Safe roads and imported experts held the empire together' } }] },
      '1,2,2': { ok: false, t: { en: '2 levers are not right yet. Read the red lines and pull again.' },
        show: [{ icon: '🌵', ok: true, t: { en: 'Drought shriveled the pastures and pushed the tribes south' } }, { icon: '🐎', ok: false, t: { en: 'Mongol fleets failed twice to invade Japan' } }, { icon: '🐫', ok: false, t: { en: 'The khans were generally tolerant of religions' } }] },
      '2,0,0': { ok: false, t: { en: '3 levers are not right yet. Read the red lines and pull again.' },
        show: [{ icon: '🌵', ok: false, t: { en: 'No silver rush: the motive was drought on the pastures' } }, { icon: '🐎', ok: false, t: { en: 'Mongol populations were low, not huge' } }, { icon: '🐫', ok: false, t: { en: 'The khans welcomed merchants and protected travelers' } }] },
      '2,0,1': { ok: false, t: { en: '2 levers are not right yet. Read the red lines and pull again.' },
        show: [{ icon: '🌵', ok: false, t: { en: 'No silver rush: the motive was drought on the pastures' } }, { icon: '🐎', ok: false, t: { en: 'Mongol populations were low, not huge' } }, { icon: '🐫', ok: true, t: { en: 'Safe roads and imported experts held the empire together' } }] },
      '2,0,2': { ok: false, t: { en: '3 levers are not right yet. Read the red lines and pull again.' },
        show: [{ icon: '🌵', ok: false, t: { en: 'No silver rush: the motive was drought on the pastures' } }, { icon: '🐎', ok: false, t: { en: 'Mongol populations were low, not huge' } }, { icon: '🐫', ok: false, t: { en: 'The khans were generally tolerant of religions' } }] },
      '2,1,0': { ok: false, t: { en: '2 levers are not right yet. Read the red lines and pull again.' },
        show: [{ icon: '🌵', ok: false, t: { en: 'No silver rush: the motive was drought on the pastures' } }, { icon: '🐎', ok: true, t: { en: 'Expert horse warfare, and Genghis Khan united the tribes' } }, { icon: '🐫', ok: false, t: { en: 'The khans welcomed merchants and protected travelers' } }] },
      '2,1,1': { ok: false, t: { en: 'One lever is not right yet. Read the red lines and pull again.' },
        show: [{ icon: '🌵', ok: false, t: { en: 'No silver rush: the motive was drought on the pastures' } }, { icon: '🐎', ok: true, t: { en: 'Expert horse warfare, and Genghis Khan united the tribes' } }, { icon: '🐫', ok: true, t: { en: 'Safe roads and imported experts held the empire together' } }] },
      '2,1,2': { ok: false, t: { en: '2 levers are not right yet. Read the red lines and pull again.' },
        show: [{ icon: '🌵', ok: false, t: { en: 'No silver rush: the motive was drought on the pastures' } }, { icon: '🐎', ok: true, t: { en: 'Expert horse warfare, and Genghis Khan united the tribes' } }, { icon: '🐫', ok: false, t: { en: 'The khans were generally tolerant of religions' } }] },
      '2,2,0': { ok: false, t: { en: '3 levers are not right yet. Read the red lines and pull again.' },
        show: [{ icon: '🌵', ok: false, t: { en: 'No silver rush: the motive was drought on the pastures' } }, { icon: '🐎', ok: false, t: { en: 'Mongol fleets failed twice to invade Japan' } }, { icon: '🐫', ok: false, t: { en: 'The khans welcomed merchants and protected travelers' } }] },
      '2,2,1': { ok: false, t: { en: '2 levers are not right yet. Read the red lines and pull again.' },
        show: [{ icon: '🌵', ok: false, t: { en: 'No silver rush: the motive was drought on the pastures' } }, { icon: '🐎', ok: false, t: { en: 'Mongol fleets failed twice to invade Japan' } }, { icon: '🐫', ok: true, t: { en: 'Safe roads and imported experts held the empire together' } }] },
      '2,2,2': { ok: false, t: { en: '3 levers are not right yet. Read the red lines and pull again.' },
        show: [{ icon: '🌵', ok: false, t: { en: 'No silver rush: the motive was drought on the pastures' } }, { icon: '🐎', ok: false, t: { en: 'Mongol fleets failed twice to invade Japan' } }, { icon: '🐫', ok: false, t: { en: 'The khans were generally tolerant of religions' } }] }
    },
    otherwise: { ok: false, t: { en: 'Not yet. Think: what did the steppe lack, what did the Mongols have, and what made trade grow?' } },
    success: { en: 'Cause, means, effect! Drought pushed the tribes south, horse warfare and Genghis Khan won the wars, and the [[pax mongolica|Pax Mongolica]] linked Eurasia. But those busy roads later carried the [[black death|Black Death]] in the 1340s. Plague and civil war weakened the khanates, and in 1368 the Mongol Yuan dynasty fell to the Ming.' }
  },
  boss: {
    at: [29, 20], stat: 'hei', need: 3,
    name: { en: 'The Dust Grump' },
    appear: { en: 'The Dust Grump rises from the steppe behind the caravanserai.' },
    taunt: { en: 'Conquest, trade, plague... let the dust bury all of it. Who will remember?' },
    win: { en: 'The dust settles over Karakorum. The page on the Mongol Empire drifts into your hands.' },
    questions: [
      {
        stim: { text: { en: '"I am the punishment of God."' }, src: { en: 'Genghis Khan, warning the people of the cities he attacked (early 1200s)' } },
        q: { en: 'The warning above best reflects which feature of Mongol expansion?' },
        choices: [{ en: 'Brutal conquest that made cities surrender in fear' }, { en: 'Peaceful treaties offered before every invasion' }, { en: 'Forced conversion of conquered peoples to Islam' }, { en: 'A refusal to attack rich trading cities' }],
        answer: 0,
        why: { en: 'The conquests were brutal: millions died, and whole cities surrendered hoping for mercy.' }
      },
      {
        stim: { text: { en: 'An intense drought in the late twelfth century shriveled the pasturelands that the Mongols\' herds relied on. This drove the tribes further south, where they raided agricultural societies.' }, src: { en: 'Adapted from "Written in the Stars: Secrets of the Mongol Empire," World History Project' } },
        q: { en: 'Which best explains the development described in the excerpt?' },
        choices: [{ en: 'Climate change pushed herders toward farming lands' }, { en: 'Population growth sent Mongols to seek farmland' }, { en: 'Religious leaders ordered a war on farming peoples' }, { en: 'Song China invited the Mongols to guard its borders' }],
        answer: 0,
        why: { en: 'Historians see the drought as the motive: the steppe could no longer feed the herds, so the tribes turned south.' }
      },
      {
        stim: { text: { en: '"...every twenty-five miles of the journey [there is] a station... At some of these stations... there shall be posted some four hundred horses standing ready... And in this way the Emperor... receives dispatches with news from places ten days\' journey off in one day and night."' }, src: { en: 'Marco Polo, The Travels (about 1300), describing the Great Khan\'s China' } },
        q: { en: 'The system Polo describes most directly helped the Mongols...' },
        choices: [{ en: 'send news quickly across a huge empire' }, { en: 'collect taxes only from foreign traders' }, { en: 'carry Buddhist pilgrims to holy sites' }, { en: 'train cavalry for the invasion of Japan' }],
        answer: 0,
        why: { en: 'This is the yam: post stations with fresh horses carried the khan\'s messages and helped hold the empire together.' }
      },
      {
        stim: { title: { en: 'The Mongol Empire at its height' }, rows: [[{ en: 'Measure' }, { en: 'Size' }], [{ en: 'Share of the world\'s land' }, { en: 'over 17 percent' }], [{ en: 'Share of the world\'s people' }, { en: 'about one quarter' }], [{ en: 'Borders' }, { en: 'from Korea to Hungary' }]], src: { en: 'From "Written in the Stars: Secrets of the Mongol Empire," World History Project' } },
        q: { en: 'Which development best shows how the Mongols dealt with ruling an empire this large?' },
        choices: [{ en: 'It slowly split into four khanates' }, { en: 'One khan ruled it with no helpers' }, { en: 'All its people moved to Karakorum' }, { en: 'It handed its Chinese lands to the Song' }],
        answer: 0,
        why: { en: 'The empire was too big for one ruler, so over the 1200s it divided into four khanates, each with its own khan.' }
      },
      {
        q: { en: 'Compared with the time before Mongol rule, overland trade on the Silk Roads under the khans was...' },
        choices: [{ en: 'safer and cheaper, so more merchants used it' }, { en: 'more dangerous, so merchants avoided it' }, { en: 'closed to all but Mongol herders and soldiers' }, { en: 'replaced completely by Indian Ocean ships' }],
        answer: 0,
        why: { en: 'The khans repressed bandits and kept order, so the northern roads became preferable to the southern sea routes for a time.' }
      },
      {
        stim: { text: { en: 'After a conquest, Mongol rulers frequently captured experts and claimed them as personal property. Many thousands were forced to move far from home.' }, src: { en: 'Adapted from "Written in the Stars: Secrets of the Mongol Empire," World History Project' } },
        q: { en: 'The excerpt best supports which claim about Mongol rule?' },
        choices: [{ en: 'Skills spread across Eurasia, often by force' }, { en: 'Experts moved freely in search of higher pay' }, { en: 'Conquered peoples kept all their experts home' }, { en: 'The khans refused to use any foreign knowledge' }],
        answer: 0,
        why: { en: 'Artisans, architects and other experts were moved to serve the khans. Their skills spread, but many did not move willingly.' }
      },
      {
        q: { en: 'Which was an unintended effect of the trade networks that grew under Mongol rule?' },
        choices: [{ en: 'The Black Death spread quickly' }, { en: 'Merchants lost all their status' }, { en: 'The Silk Roads closed to travelers' }, { en: 'Europe stopped wanting Asian goods' }],
        answer: 0,
        why: { en: 'The same busy roads that carried goods and ideas carried the plague in the 1340s, which helped weaken the khanates.' }
      },
      {
        stim: { text: { en: 'The Mongol khans were generally very tolerant of foreign religions. They offered respect and tax benefits to the leaders of some religions, and people were allowed to worship as they pleased, for the most part.' }, src: { en: 'Adapted from "Written in the Stars: Secrets of the Mongol Empire," World History Project' } },
        q: { en: 'The policy described above most likely contributed to...' },
        choices: [{ en: 'Eurasia becoming a religious melting pot' }, { en: 'a single faith forced on every subject' }, { en: 'the end of all trade between east and west' }, { en: 'the khans closing their court to experts' }],
        answer: 0,
        why: { en: 'With people free to worship, many faiths met and mixed along Mongol roads and in Mongol cities.' }
      }
    ]
  },
  learned: [
    { en: 'Drought pushed the [[pastoralism|pastoral]] Mongols south; horse warfare and Genghis Khan\'s leadership let them build the largest empire in history.' },
    { en: 'The khans guarded the [[silk roads|Silk Roads]], ran the [[yam|yam]], tolerated many religions and used experts, many of them taken by force.' },
    { en: 'The [[pax mongolica|Pax Mongolica]] spread goods and ideas across Eurasia, but also the [[black death|Black Death]], which helped weaken the khanates.' }
  ],
  reflect: {
    q: { en: 'AP practice: Explain one way Mongol rule affected trade across Eurasia between 1200 and 1450.' },
    starter: { en: 'One way Mongol rule affected trade was' }
  }
};
