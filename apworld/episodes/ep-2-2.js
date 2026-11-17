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
    { en: 'The Void blurred the page on the Mongols. Karakorum is forgetting how a steppe people built the largest empire in history!' },
    { en: 'Talk to the 4 people here and read the 2 sources on their stands. Help an astronomer, then wake the time stone.' }
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
        { en: 'We are semi-nomadic people who live by [[pastoralism|herding]] on the [[steppe|steppe]] north of China. Our numbers were always low, and each tribe ruled itself.' },
        { en: 'We traded only with our neighbors, far from the great Afro-Eurasian trade routes. Then, in the late twelfth century, an intense drought shriveled the pastures our herds needed.' },
        { en: 'Hungry tribes pushed south and raided farming peoples. Young Temujin lost his father, was captured by a rival, escaped, and won followers by his victories.' },
        { en: 'In 1206 a council of chiefs named him Genghis [[khan|Khan]], "universal emperor." Our men and women ride better than anyone, masters of cavalry warfare.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Historians treat the rise of the Mongols like a mystery: a motive, a weapon and an opportunity. Which was the motive?' },
        choices: [
          { ok: true, t: { en: 'Drought that shriveled the steppe pastures' }, why: { en: 'Yes. Climate change in the late 1100s drove the herders south to raid farming societies. Cavalry and Genghis Khan were the weapons.' } },
          { t: { en: 'A growing population that needed new farmland' }, why: { en: 'No. Mongol populations were low, and they were herders, not farmers. Their small numbers make the conquests more surprising.' } },
          { t: { en: 'The unity Genghis Khan created in 1206' }, why: { en: 'No. Uniting the tribes in 1206 was the opportunity he seized, and he was one of the weapons. The motive came first: drought.' } }
        ]
      }
    },
    {
      x: 14, y: 16, name: { en: 'Yusuf' }, role: { en: 'Metalworker' },
      look: { skin: 4, hair: '#2b1d14', shirt: '#6a4a8a', pants: '#3a3a2a', style: 'short' },
      lines: [
        { en: 'I made fine metalwork in a city far to the west. When the Mongol armies came, whole cities surrendered, hoping for mercy.' },
        { en: 'Genghis Khan warned his victims, "I am the punishment of God." Millions died in the invasions, and great cities and centers of learning were sacked.' },
        { en: 'After a conquest, the khans often captured experts and claimed them as personal property. Many thousands of us were forced to move far from home.' },
        { en: 'Ögedei Khan built this capital, [[karakorum|Karakorum]], with thousands of imported specialists, artisans and architects like me.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'A historian asks, "Were the Mongols good or bad?" How does Yusuf\'s point of view shape his answer?' },
        choices: [
          { ok: true, t: { en: 'Taken by force, he sees conquest as a disaster' }, why: { en: 'Yes. For abducted experts and the enslaved, Mongol rule was a bad thing. Seen 800 years later, the trade and ideas it spread look different. It depends on perspective.' } },
          { t: { en: 'As a skilled artisan, he praises the high wages' }, why: { en: 'No. Yusuf did not choose to come. Many experts were claimed as the khans\' personal property and did not move willingly.' } },
          { t: { en: 'As a Muslim, he welcomes the khans as liberators' }, why: { en: 'No. Cities surrendered out of fear, hoping for mercy, not to welcome liberators. Millions died in the invasions.' } }
        ]
      }
    },
    {
      x: 22, y: 14, name: { en: 'Bahram' }, role: { en: 'Silk Road merchant' },
      look: { skin: 3, hair: '#1b1410', shirt: '#c0392b', pants: '#2a2a3a', robe: true, hat: '#e8e0c8', style: 'short' },
      lines: [
        { en: 'The khans keep order on the [[silk roads|Silk Roads]]. They repress bandits, so overland travel costs less and is less dangerous than ever.' },
        { en: 'For centuries the southern Indian Ocean sea routes ruled trade. Now many of us prefer these northern roads. And merchants here enjoy higher status than in China before the Mongols.' },
        { en: 'Even when the khans fight one another, they guarantee the safety of travelers and merchants across their lands, even in times of war.' },
        { en: 'We carry ideas as well as silk and spice. Islamic mathematics and medicine [[diffusion|spread]] west to Europe, and the Italian city-states adopt the Arabic numbering system.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Which of the following best describes a change in Eurasian trade under Mongol rule?' },
        choices: [
          { ok: true, t: { en: 'Overland routes gained ground on the sea routes' }, why: { en: 'Yes. Safer, cheaper roads made the northern Silk Roads preferable to the Indian Ocean routes for a time. This [[pax mongolica|Pax Mongolica]] linked east and west.' } },
          { t: { en: 'Sea routes replaced the Silk Roads for good' }, why: { en: 'No. It went the other way: under the khans, the northern overland roads became preferable to the southern sea routes.' } },
          { t: { en: 'War between the khanates shut the roads to traders' }, why: { en: 'No. The khanates did fight each other, but they kept guaranteeing the safety of travelers and merchants. That was a continuity.' } }
        ]
      }
    },
    {
      x: 20, y: 6, name: { en: 'Mahmud' }, role: { en: 'Court secretary' },
      look: { skin: 5, hair: '#1b1410', shirt: '#2a7a5a', robe: true, hat: '#f0ece0', style: 'short' },
      lines: [
        { en: 'I keep records for the khan\'s court. Genghis and Ögedei conquered the Jin dynasty of northern China, but the khans cannot rely on Chinese bureaucrats.' },
        { en: 'So they bring in experts from the Muslim world. Muslims enjoy high status here, and the khans contract Chinese tax collection to Muslim foreigners.' },
        { en: 'The Mongols adopt the customs and tools of conquered peoples. If a foe has better military technology, or better medicine, they take it up.' },
        { en: 'The empire is too big for one ruler. Lady Sorqoqtani Beki works her family network to win it for her son Möngke, and it is splitting into four [[khanate|khanates]].' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Which of the following best explains why the khans gave Muslim foreigners the job of collecting taxes in China?' },
        choices: [
          { ok: true, t: { en: 'They could not rely on Chinese bureaucrats' }, why: { en: 'Yes. Mongol rule depended on a network of experts from across Eurasia, and Muslims held high status in Mongol China.' } },
          { t: { en: 'Islam was the official faith of the khans' }, why: { en: 'No. The Mongols\' own religion worshiped a sky god, and the khans were generally tolerant of many religions.' } },
          { t: { en: 'The Song emperor had asked them to do so' }, why: { en: 'No. The Song were enemies in the south. In 1279 Kublai Khan defeated them and completed the conquest of China.' } }
        ]
      }
    },
    {
      doc: true, x: 21, y: 15, icon: '📜',
      name: { en: 'The Travels of Marco Polo' }, role: { en: 'Primary source' },
      src: { en: 'Marco Polo, The Travels, describing the Great Khan\'s China, read in fourteenth-century Europe; quoted in "Opener: World Travelers," World History Project' },
      lines: [
        { en: '"...every twenty-five miles of the journey [there is] a station which they call Yamb, or, as we should say, the \'Horse-Post-House.\'... At some of these stations, moreover, there shall be posted some four hundred horses standing ready.... And in this way the Emperor, who has an immense number of these runners, receives dispatches with news from places ten days\' journey off in one day and night... and that is no small matter!"' },
        { en: '"All these pieces of paper are issued with as much solemnity and authority as if they were of pure gold or silver.... And nobody, however important he may think himself, dares to refuse them on pain of death.... for wheresoever a person may go throughout the Great Khan\'s dominions he shall find these pieces of paper current, and shall be able to transact all sales and purchases of goods by means of them...."' },
        { en: 'Marco Polo was a European traveler in the Great Khan\'s China. In The Travels he described foods, objects and habits unknown in Europe: the [[yam|yam]] post stations, paper currency, and black stones (coal) burned like firewood. Readers in fourteenth-century Europe met these "discoveries" for the first time. He wrote as an amazed outsider. He even described "unicorns," confusing an unfamiliar animal with a creature from European folklore.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Sourcing: which best describes Marco Polo\'s point of view, and a limit it places on his account?' },
        choices: [
          { ok: true, t: { en: 'An amazed European outsider who could misread things' }, why: { en: 'Yes. Polo marveled at things Europe lacked, like the yam and paper money. His "unicorns" show that an outsider could confuse what he saw.' } },
          { t: { en: 'A Mongol official proudly recording the empire he served' }, why: { en: 'No. Polo was a European visitor, not a Mongol. He writes for European readers about things they had never seen.' } },
          { t: { en: 'A Muslim historian who saw the khans as a threat' }, why: { en: 'No. That fits other writers from the lands the Mongols invaded. Polo admires the Great Khan\'s order: "that is no small matter!"' } }
        ]
      }
    },
    {
      doc: true, x: 16, y: 8, icon: '📖',
      name: { en: 'Written in the Stars' }, role: { en: 'Reading' },
      src: { en: 'Adapted from "Written in the Stars: Secrets of the Mongol Empire" by Bennett Sherry, World History Project (Khan Academy)' },
      lines: [
        { en: 'At the dawn of the thirteenth century, the Mongols were unlikely empire builders: loose, semi-nomadic, pastoralist tribes with low populations. By 1206 Temujin united them as Genghis Khan. The Mongol Empire (1206–1368) became the largest in history: over 17 percent of the world\'s land and a quarter of its people, from Korea to Hungary. The Mamluks in Egypt, the Delhi Sultanate and typhoons and samurai in Japan stopped it growing bigger.' },
        { en: 'Trade was central to the khans\' power. By repressing bandits, they reduced the cost and danger of overland travel, so the northern Silk Roads became preferable to the Indian Ocean routes, which had dominated for centuries. In 1279 Kublai Khan defeated the Song, making the khans rulers of the world\'s most important centers of manufacturing. More goods traveled east to west, and Islamic mathematics and medicine reached Europe.' },
        { en: 'This century-long peace, the [[pax mongolica|Pax Mongolica]], had a terrible cost. Millions died in the conquests. And the expansion of trade unintentionally let the [[black death|Black Death]] spread rapidly across Afro-Eurasia. In Europe, the plague killed as many as 50 million people. Plague and civil war weakened the khanates, and in 1368 the Mongol Yuan dynasty fell to the Chinese Ming dynasty.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Which of the following best explains how the Pax Mongolica contributed to the decline of the khanates?' },
        choices: [
          { ok: true, t: { en: 'Its busy trade routes spread the plague' }, why: { en: 'Yes. The same roads that carried goods and ideas carried the Black Death. Plague and civil war weakened the khanates, and the Yuan fell to the Ming in 1368.' } },
          { t: { en: 'Its merchants funded the Song resistance' }, why: { en: 'No. The Song did not outlast the Mongols: Kublai Khan defeated them in 1279. The Ming, not the Song, ended the Yuan in 1368.' } },
          { t: { en: 'Its open roads let the Mamluks invade China' }, why: { en: 'No. The Mamluks of Egypt stopped the Mongol conquest of the Islamic world, far to the west. They never reached China.' } }
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
        { en: 'But the Void\'s Ink Thief tore up my star chart! Ask the [[yam|yam]] rider at the post station outside the west gate.' }
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
      taunt: { en: 'The Void sent me. No chart, no shared knowledge!' },
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
    intro: { en: 'The Void scrambled why the Mongol Empire rose and lasted. Set each lever: the motive that pushed the tribes south, the means that won their wars, and the way the khans ran their lands. Then test them at the stone.' },
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
    name: { en: 'The Void' },
    appear: { en: 'The Void rises from the steppe behind the caravanserai. The wind falls silent.' },
    taunt: { en: 'The largest empire the world had seen, and still it split apart. Everything splits. Everything falls to me.' },
    win: { en: 'The Void closes over Karakorum. The page on the Mongol Empire drifts into your hands.' },
    questions: [
      {
        stim: { text: { en: '"All these pieces of paper are issued with as much solemnity and authority as if they were of pure gold or silver.... wheresoever a person may go throughout the Great Khan\'s dominions he shall find these pieces of paper current, and shall be able to transact all sales and purchases of goods by means of them...."' }, src: { en: 'Marco Polo, The Travels, describing the Great Khan\'s China; quoted in "Opener: World Travelers," World History Project' } },
        q: { en: 'The excerpt most directly reflects which feature of the Great Khan\'s China?' },
        choices: [{ en: 'Paper currency backed by the khan\'s authority' }, { en: 'Silver coins carried by traders along the Silk Roads' }, { en: 'Arabic numbers adopted by Italian merchants' }, { en: 'Tax records kept by Muslim officials' }],
        answer: 0,
        why: { en: 'Polo is describing paper money: officials sealed it, everyone had to accept it, and it was "current" everywhere the khan ruled.' }
      },
      {
        stim: { text: { en: '"...every twenty-five miles of the journey [there is] a station which they call Yamb.... At some of these stations... there shall be posted some four hundred horses standing ready.... the Emperor... receives dispatches with news from places ten days\' journey off in one day and night..."' }, src: { en: 'Marco Polo, The Travels, describing the Great Khan\'s China; quoted in "Opener: World Travelers," World History Project' } },
        q: { en: 'Which of the following best explains the purpose of the system Polo describes?' },
        choices: [{ en: 'Rushing the khan\'s messages across a vast empire' }, { en: 'Guarding silk caravans from the bandits on the roads' }, { en: 'Lodging foreign astronomers at the khan\'s court' }, { en: 'Moving cavalry for the invasions of Japan' }],
        answer: 0,
        why: { en: 'This is the yam: post stations with fresh horses let the khan\'s messengers carry news quickly, which helped hold a huge empire together.' }
      },
      {
        stim: { text: { en: 'An intense drought in the late twelfth century shriveled the pasturelands that the Mongols\' herds relied on. This drove the tribes further south, where they raided agricultural societies.' }, src: { en: 'Adapted from "Written in the Stars: Secrets of the Mongol Empire," World History Project' } },
        q: { en: 'Which of the following best explains the development described in the excerpt?' },
        choices: [{ en: 'A climate shift forced herders to raid farmers' }, { en: 'Rising Mongol numbers created a need for farmland' }, { en: 'Genghis Khan\'s 1206 rise sent herders south' }, { en: 'The Song conquest opened the south to raiders' }],
        answer: 0,
        why: { en: 'The drought was the motive: climate change dried the pastures before 1206. Mongol numbers were low, and the Song fell only in 1279.' }
      },
      {
        stim: { title: { en: 'The Mongol Empire at its height' }, rows: [[{ en: 'Measure' }, { en: 'Size' }], [{ en: 'Share of the world\'s land' }, { en: 'over 17 percent' }], [{ en: 'Share of the world\'s people' }, { en: 'about one quarter' }], [{ en: 'Borders' }, { en: 'from Korea to Hungary' }]], src: { en: 'From "Written in the Stars: Secrets of the Mongol Empire," World History Project' } },
        q: { en: 'The data in the table best support which claim about the Mongol Empire in the 1200s?' },
        choices: [{ en: 'It grew too big for one ruler and split into four khanates' }, { en: 'Its size let the Great Khan rule the others alone for good' }, { en: 'Its defeats in Japan forced the khans to divide their land' }, { en: 'The Black Death broke it into four parts after 1206' }],
        answer: 0,
        why: { en: 'The empire became too big for one person to rule, so it divided into the Great Khan\'s lands, the Chagatai, the Ilkhanate and the Golden Horde.' }
      },
      {
        stim: { text: { en: 'By repressing bandits, the khans reduced the cost and danger of overland travel, so the northern Silk Roads became preferable to the Indian Ocean routes, which had dominated trade for centuries.' }, src: { en: 'Adapted from "Written in the Stars: Secrets of the Mongol Empire," World History Project' } },
        q: { en: 'Compared with the centuries before Mongol rule, the passage describes which change in Eurasian trade?' },
        choices: [{ en: 'Overland routes gained ground on the sea lanes' }, { en: 'Indian Ocean ships replaced the overland roads' }, { en: 'Merchants lost status as the khans favored herders' }, { en: 'Trade turned inward to serve only Mongol lands' }],
        answer: 0,
        why: { en: 'Safer, cheaper roads drew trade north for a time, and merchants enjoyed higher status than in pre-Mongol China.' }
      },
      {
        stim: { text: { en: 'After a conquest, Mongol rulers frequently captured experts and claimed them as personal property. Many thousands were forced to move far from home.' }, src: { en: 'Adapted from "Written in the Stars: Secrets of the Mongol Empire," World History Project' } },
        q: { en: 'The excerpt best supports which claim about Mongol rule?' },
        choices: [{ en: 'It spread skills across Eurasia, often by force' }, { en: 'Experts moved freely to Karakorum for higher pay' }, { en: 'The khans banned foreign knowledge from their courts' }, { en: 'Chinese bureaucrats ran the khans\' tax collection' }],
        answer: 0,
        why: { en: 'Artisans, architects and other experts served the khans, and their skills spread, but many were taken by force. Taxes in China went to Muslim foreigners.' }
      },
      {
        stim: { text: { en: 'The expansion of trade under Mongol rule unintentionally allowed the Black Death to spread rapidly across Afro-Eurasia. In Europe, the plague killed as many as 50 million people.' }, src: { en: 'Adapted from "Written in the Stars: Secrets of the Mongol Empire," World History Project' } },
        q: { en: 'Which of the following was a later effect of the development described in the excerpt?' },
        choices: [{ en: 'Khanates weakened, and the Yuan fell to the Ming' }, { en: 'The Song dynasty retook southern China from Kublai Khan' }, { en: 'The Mamluks of Egypt conquered the Ilkhanate' }, { en: 'Silk Roads trade grew as Europe\'s people died' }],
        answer: 0,
        why: { en: 'Plague and civil war weakened the khanates, and in 1368 the Mongol Yuan dynasty fell to the Chinese Ming dynasty.' }
      },
      {
        q: { en: 'Which of the following was a continuity under Mongol rule, even after the empire split into rival khanates?' },
        choices: [{ en: 'Khans kept guaranteeing the safety of merchants' }, { en: 'The Great Khan kept full control of every khanate' }, { en: 'One faith was required of all subjects in each khanate' }, { en: 'Courts stopped hiring Muslim and Chinese astronomers' }],
        answer: 0,
        why: { en: 'Although the khanates fought each other, they continued to guarantee the safety of travelers and merchants across their lands, even in war.' }
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
