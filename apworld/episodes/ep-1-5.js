/* HISTORYWALKER · Episode 1.5 · State Building in Africa (AP World Topic 1.5, c. 1200–1450)
   Niani, in the state of Mali, in 1330, while Mansa Musa rules.
   Content source: Khan Academy, AP World History (World History Project), Unit 1 Lesson "State Building in Africa":
   "States and Empires of West Africa" (Trevor R. Getz), "Africa 1200–1450" (Trevor Getz), "Comparison: States 1200–1450";
   and the Unit 1 overview. World History Project content is CC BY-NC 4.0. Facts here come from those readings.
   English only, AP level. (Episode 2.4 is Timbuktu and the trans-Saharan trade, so this one is about how states were
   BUILT and RULED: the Sahelian state model, religious pluralism, matrilineality, and other African states compared.)
   Map: the dry grassland of the herders in the north (cattle pen, tent), the palace of the mansa and a mosque on the
   royal plaza (north-east), the main street (row 10), the market (south-west), weavers' and farmers' houses (south-east),
   grain fields and the river along the south. The time stone's four levers set how a Sahel state was run. */
window.EPISODE = {
  id: '1.5',
  realm: 1,
  sol: 'AP 1.5',
  style: 'sahel',
  weather: { sky: 'heat', time: 'day' },
  title: { en: 'State Building in Africa' },
  place: { en: 'Niani, Mali, 1330' },
  intro: [
    { en: 'The Grump blurred the page on Mali. Niani is forgetting how its rulers built and ran a great Sahel state!' },
    { en: 'Talk to the 4 people here, help Awa the scribe\'s apprentice, then wake the time stone.' }
  ],
  scenes: {
    at: [-8.38, 11.37],
    year: 1330,
    start: [
      { en: 'In 1330, Mansa Musa ruled Mali, a state in the West African Sahel.' },
      { en: 'Mali stretched more than a thousand miles from east to west.' },
      { en: 'Its rulers controlled much of the gold of western Afro-Eurasia.' }
    ],
    guess: {
      q: { en: 'Sahel rulers needed money to govern. What do you think they taxed most?' },
      choices: [{ t: { en: '🐪 Long-distance trade' }, ok: true }, { t: { en: '🧵 Cloth made in towns' } }],
      why: { en: 'Sahel states made textiles too, but trade was easier to tax, so rulers focused on trade.' }
    },
    page: { en: 'Mansa means sultan, king or emperor. Sunjata was Mali\'s first mansa.' },
    next: {
      q: { en: 'Next: Europe, 1200–1450. Did most farming families own the land they worked?' },
      choices: [{ t: { en: 'No, lords did' }, ok: true }, { t: { en: 'Yes, they did' } }],
      why: { en: 'Most Europeans were peasants who worked fields owned by the lord of the manor. You go there next.' }
    }
  },
  start: [16, 10],
  map: [
    'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    'aggggggggggggagggggDDDDDDDDgDDDa',
    'agFFFFFggHHHggggaggDDDDDDDDgDDDa',
    'agFgggFggNdNgggggxgDDDdDDDDgDdDa',
    'agFgggFgggggggggggllllllllllllla',
    'aggggggg::::::::::llllllllllllla',
    'agggggxg:gggagggggggggggggggggga',
    'aggagggg:ggggggggggRRRggQQQgggga',
    'agggggga:gggggggggghhhgghhhgggga',
    'T.......:......................T',
    'TllllllllllllllllllllllllllllllT',
    'T...T..........................T',
    'T.lllllllllllx....RRR..QQQ.RRR.T',
    'T.lmmlmmlmmll.....hdh..hdh.hhh.T',
    'T.lllllllllll................T.T',
    'T.lmmlmmlmmll....T.............T',
    'T..............................T',
    'T.oooooooooox2222..oooooooo....T',
    'T.oooooooooo.2222..oooooooo....T',
    'TssssssssssssskssssssssssksssssT',
    '~~~~~~~~~~~~~~k~~~~~~~~~~~~~~~~~',
    '================================'
  ],
  words: {
    'sahel': { en: 'the dry grassland just south of the Sahara Desert, with wetter land along rivers like the Niger and Senegal' },
    'mansa': { en: 'the title of Mali\'s ruler; it means sultan, king or emperor' },
    'sahelian state model': { en: 'three things Sahel states shared: money from taxing long-distance trade, power based in wet grain lands, and religious diversity' },
    'tribute': { en: 'payment (goods, money or animals) that a weaker group gives to a stronger state' },
    'nomad': { en: 'a person who moves from place to place, like herders following grass for their animals' },
    'religious pluralism': { en: 'accepting many faiths at once; in Mali, Muslims and followers of local religions both served at court' },
    'matrilineality': { en: 'tracing one\'s family and ancestry through the mother' },
    'queen mother': { en: 'the mother of the king; in the Sahel she could hold real political power' },
    'city-state': { en: 'a city that rules itself and the land just around it, like the Swahili port cities' },
    'confederation': { en: 'an alliance of several or many states, often for shared safety' },
    'sodality': { en: 'a brotherhood or sisterhood of people of similar ages that helped make decisions' },
    'empire': { en: 'a state where a core people or state has taken over and rules other peoples' }
  },
  npcs: [
    {
      x: 4, y: 5, name: { en: 'Hamadi' }, role: { en: 'Cattle herder' },
      look: { skin: 3, hair: '#1b1410', shirt: '#3a6aa8', robe: true, hat: '#e8dcc0', style: 'short' },
      lines: [
        { en: 'My family herds cattle in the dry grassland north of town. We are [[nomad|nomads]]: we follow the grass and do not stay put.' },
        { en: 'The mansa is strong in the wet, grain-growing lands by the rivers. Those lands feed many people. Out here, his officials cannot really rule us.' },
        { en: 'Now and then they demand [[tribute|tribute]]: a few animals or some goods. In the past, herders even raided the river towns.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Why was a Sahel ruler\'s power weaker over herders than over river farmers?' },
        choices: [
          { ok: true, t: { en: 'Herders kept moving across the dry lands' }, why: { en: 'Yes. States were built on dense, wet, grain-growing centers. Nomads in the drier lands around them were hard to rule.' } },
          { t: { en: 'Herders had a bigger army than Mali' }, why: { en: 'No. Herders sometimes raided towns, but they were hard to rule mainly because they moved and lived far from the towns.' } },
          { t: { en: 'Rulers never asked the herders for anything' }, why: { en: 'No. Rulers did demand tribute now and then: trade goods, money or animals. That was about all the control they had.' } }
        ]
      }
    },
    {
      x: 7, y: 14, name: { en: 'Bakary' }, role: { en: 'Royal toll collector' },
      look: { skin: 5, hair: '#1b1410', shirt: '#e0b030', robe: true, hat: '#f4efe4', style: 'short' },
      lines: [
        { en: 'West African gold travels north on the trade routes across the Sahara, to North Africa and Europe, where it is in great demand.' },
        { en: 'Mali controls much of that gold. I collect the mansa\'s share of the trade. Trade is easier to tax than the cloth our weavers make.' },
        { en: 'This is the old [[sahelian state model|Sahel]] way. Wagadu, called Ghana, grew rich on gold. Kanem and the Hausa states controlled kola nuts.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Where did Sahel rulers like the mansa get most of the money to govern?' },
        choices: [
          { ok: true, t: { en: 'Taxing the long-distance trade' }, why: { en: 'Yes. Controlling trade routes in gold, kola nuts, grain and salt paid for Sahel governments.' } },
          { t: { en: 'Taxing the village weavers most' }, why: { en: 'No. These states made textiles, but rulers focused on trade because it was easier to tax.' } },
          { t: { en: 'Selling land to European kings' }, why: { en: 'No. Europe wanted Mali\'s gold, but rulers did not sell land. They taxed the trade that passed through.' } }
        ]
      }
    },
    {
      x: 21, y: 15, name: { en: 'Sira' }, role: { en: 'Cloth weaver' },
      look: { skin: 4, hair: '#120c08', shirt: '#2f8a6a', robe: true, hat: '#d9822b', style: 'bun' },
      lines: [
        { en: 'Our first [[mansa|mansa]], Sunjata, defeated the Susu around 1240. Then his followers conquered the peoples around them, and Mali grew huge.' },
        { en: 'His full name was Sogolon Mari Djata. Sogolon was his mother\'s name! Much of his support came through her.' },
        { en: 'Here many people trace family through the mother. That is [[matrilineality|matrilineality]]. So the [[queen mother|queen mother]] holds real power at court.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Sunjata may have been Muslim. What does his mother\'s name in his own name show?' },
        choices: [
          { ok: true, t: { en: 'Local traditions lived on beside Islam' }, why: { en: 'Yes. Matrilineality and the power of queen mothers continued, though they were not normal features of Islam in many regions.' } },
          { t: { en: 'Islam had wiped out every old local custom' }, why: { en: 'No. Most farmers kept local religions, and customs like matrilineality stayed important.' } },
          { t: { en: 'Mothers ruled Mali instead of kings' }, why: { en: 'No. The mansa ruled. Queen mothers had real political power, but they did not replace him.' } }
        ]
      }
    },
    {
      x: 25, y: 6, name: { en: 'Ibrahima' }, role: { en: 'Court scribe' },
      look: { skin: 4, hair: '#1b1410', shirt: '#f4efe4', robe: true, hat: '#3a5a8a', style: 'short' },
      lines: [
        { en: 'Islam came here with traders from North Africa. Many of our merchants are Muslim now. Most farmers still follow local religions.' },
        { en: 'Some kings became Muslim because Islam was useful for trade and had a written language. The kings of Takrur and Kanem did, long ago.' },
        { en: 'At court, Muslims and followers of local religions both serve, and many rituals are allowed. We call this [[religious pluralism|religious pluralism]].' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why did some West African rulers choose to convert to Islam?' },
        choices: [
          { ok: true, t: { en: 'It helped trade and brought writing' }, why: { en: 'Yes. Islam was the religion of the North African traders, and it came with a written language.' } },
          { t: { en: 'Their farmers demanded that they convert' }, why: { en: 'No. Most farmers followed local religions. It was merchants and some rulers who became Muslim.' } },
          { t: { en: 'Islam banned all other faiths at court' }, why: { en: 'No. Mali\'s court was inclusive: Muslims and followers of local religions both served there.' } }
        ]
      }
    }
  ],
  houses: [
    { at: [10, 3], name: { en: 'Aissata, herder' }, look: { skin: 3, hair: '#1b1410', shirt: '#c0392b', robe: true, style: 'long' },
      lines: [{ en: 'We pack this tent and move with the rains to find grass for the herd.' }, { en: 'When the mansa\'s men come, we give a few animals as tribute. Then they leave us be.' }] },
    { at: [22, 3], name: { en: 'Palace guard Kanku' }, look: { skin: 5, hair: '#1b1410', shirt: '#7a2a2a', robe: true, hat: '#e0b030', style: 'short' },
      lines: [{ en: 'This is the palace of the mansa. Mansa Musa has ruled since about 1312.' }, { en: 'His wealth comes from gold. North Africa and Europe want gold badly.' }] },
    { at: [29, 3], name: { en: 'Lamine, student' }, look: { skin: 4, hair: '#1b1410', shirt: '#f4efe4', robe: true, hat: '#ffffff', style: 'short' },
      lines: [{ en: 'I study the Quran here. Traders from North Africa brought Islam to the Sahel.' }, { en: 'Islam came with a written language, so the court\'s records can be written down.' }] },
    { at: [19, 13], name: { en: 'Nene, dyer' }, look: { skin: 5, hair: '#120c08', shirt: '#3a3aa8', robe: true, style: 'bun' },
      lines: [{ en: 'We weave and dye cloth here. Sahel towns have made textiles for a long time.' }, { en: 'The mansa\'s men tax the trade roads more than our looms. Trade is easier to tax.' }] },
    { at: [24, 13], name: { en: 'Sekou, farmer' }, look: { skin: 4, hair: '#2b1d14', shirt: '#6a7a4a', pants: '#3a3a2a', hat: '#c9a24a', style: 'short' },
      lines: [{ en: 'The river waters our grain. Wet land like this can feed many people.' }, { en: 'Big Sahel states grew up around rivers and lakes, where grain fed the towns.' }] }
  ],
  signs: [
    { x: 6, y: 6, text: { en: 'DRY GRASSLAND · Nomadic herders graze cattle here. The state cannot really rule them; it asks for tribute now and then.' } },
    { x: 17, y: 3, text: { en: 'PALACE OF THE MANSA · Mansa means sultan, king or emperor.' } },
    { x: 13, y: 12, text: { en: 'MARKET · Gold, salt, kola nuts and cloth change hands. The mansa takes a share of the trade.' } },
    { x: 12, y: 17, text: { en: 'GRAIN FIELDS · Wet land by the river feeds many people. That is where Sahel states were strongest.' } }
  ],
  finds: [
    { clueAt: [15, 15], at: [15, 18], decor: 'vase', clue: { en: 'From this note, walk 3 steps south, into the young grain.' },
      text: { en: 'A clay jar of grain! Wet, grain-producing centers like this one fed the big Sahel states.' } }
  ],
  scraps: [[1, 1], [27, 1], [30, 18]],
  smudges: [[12, 3], [22, 16]],
  /* the quest: Awa (south-east) -> Dauda the caravan guide (north-west) -> the Ink Thief tore Awa's notes on OTHER African
     states into three pieces, each hidden where it fits: Swahili merchant city-states at the market (south-west), Kongo's
     judging kings at the palace gate (north-east), Great Zimbabwe's cattle at the cattle pen (north-west). */
  quest: {
    stat: 'hei',
    title: { en: 'The Torn Notes on African States' },
    giver: {
      x: 27, y: 16, name: { en: 'Awa' }, role: { en: 'Scribe\'s apprentice' },
      look: { skin: 5, hair: '#120c08', shirt: '#8e5bd6', robe: true, style: 'long' },
      lines: [
        { en: 'I write down how Africans govern: elders, [[sodality|sodalities]], chiefs, kings, city-states, [[confederation|confederations]] and empires. So many ways!' },
        { en: 'An ink thief tore my notes on other African states into three pieces! Dauda the caravan guide saw it. He waits north-west, by the herders\' path.' }
      ],
      wait: { en: 'Dauda waits north of the main street, on the west side, near the dirt path to the herders.' },
      thanks: { en: 'My notes are whole! Mali, the Swahili cities, Great Zimbabwe, Kongo: Africans built many different kinds of states.' }
    },
    contact: {
      x: 12, y: 8, name: { en: 'Dauda' }, role: { en: 'Caravan guide' },
      look: { skin: 3, hair: '#1b1410', shirt: '#4a7aa8', robe: true, hat: '#f4efe4', style: 'short' },
      lines: [
        { en: 'I lead caravans across Mali, over a thousand miles. Its far regions mostly run their own affairs. Is it an [[empire|empire]]? People could argue!' },
        { en: 'The thief dropped three pieces, each where it fits. Read each clue and walk to the place that matches it.' }
      ]
    },
    action: {
      type: 'chase',
      at: [15, 13],
      hops: [[7, 6], [14, 9]],
      name: { en: 'The Ink Thief' },
      taunt: { en: 'Who needs notes? Let people think Africa had no real states!' },
      clues: [
        { t: { en: 'Piece 1: "On the Swahili coast, merchant families run the port cities. Lamu has no king at all." Find the place of merchants, south-west.' },
          zones: [{ x: 2, y: 14, w: 11, h: 1 }, { x: 2, y: 12, w: 11, h: 1 }],
          noBy: [{ x: 2, y: 17, w: 10, h: 2, t: { en: 'These are grain fields. The piece is about merchants. Look in the market, just north.' } }],
          found: { en: 'Piece 1! Swahili [[city-state|city-states]] focused on port cities and trade, not on ruling big lands. Merchants held most of the power.' } },
        { t: { en: 'Piece 2: "In Kongo, the word for king is related to the word for judge." Find where a king hears his people: the palace gate, north-east.' },
          zones: [{ x: 19, y: 4, w: 8, h: 2 }],
          noBy: [{ x: 28, y: 4, w: 3, h: 2, t: { en: 'This is the mosque door. The piece is at the palace gate, just to the west.' } }],
          found: { en: 'Piece 2! As Kongo\'s population grew, so did disputes, and kings arose as judges. Kongo also taxed river trade and used nzimbu shells as money.' } },
        { t: { en: 'Piece 3: "Great Zimbabwe\'s kings loaned cows and bulls to chiefs to win their loyalty." Find the cattle pen, north-west.' },
          zones: [{ x: 3, y: 3, w: 3, h: 2 }],
          noBy: [{ x: 8, y: 4, w: 5, h: 1, t: { en: 'This is a herder\'s tent, not a pen. The cattle pen with its fence is just to the west.' } }],
          found: { en: 'Piece 3! Great Zimbabwe ruled a gold region and sent gold to the Swahili port of Sofala. Loaned cattle kept provincial chiefs loyal.' } }
      ],
      win: { en: 'You caught the Ink Thief! Awa\'s notes on Africa\'s many states are whole again.' },
      item: { icon: '📜', name: { en: 'Awa\'s notes on African states' } }
    }
  },
  challenge: {
    at: [16, 7],
    type: 'levers', // in the world; the card version (combo) is the fallback
    // four levers around Niani: royal income (market), the herders (north), religion (by the mosque), the regions (east road)
    spots: [[13, 14], [6, 8], [27, 5], [30, 9]],
    stat: 'loc',
    title: { en: 'Run a Sahel state' },
    intro: { en: 'The Grump jumbled how Mali is run. Set the four levers the way Sahel rulers really governed, then test them at the stone.' },
    switches: [
      { name: { en: 'Royal income' }, icon: '💰', start: 0,
        states: [{ en: 'Tax mainly the weavers\' cloth' }, { en: 'Tax the gold and trade routes' }] },
      { name: { en: 'The herders of the dry lands' }, icon: '🐄', start: 0,
        states: [{ en: 'Send governors to rule every camp' }, { en: 'Demand tribute now and then' }] },
      { name: { en: 'Religion at court' }, icon: '🕌', start: 0,
        states: [{ en: 'Only Muslims may serve' }, { en: 'Ban Islam from the court' }, { en: 'Muslims and local priests both serve' }] },
      { name: { en: 'The conquered regions' }, icon: '🗺️', start: 0,
        states: [{ en: 'Run by officials sent from the center' }, { en: 'Mostly run their own affairs' }] }
    ],
    results: {
      '1,1,2,1': { ok: true,
        t: { en: 'That is the Sahel way: tax trade, take tribute from nomads, welcome many faiths, and let regions run their own affairs.' },
        show: [{ icon: '💰', ok: true, t: { en: 'gold and trade taxed' } }, { icon: '🐄', ok: true, t: { en: 'tribute from herders' } }, { icon: '🕌', ok: true, t: { en: 'religious pluralism' } }, { icon: '🗺️', ok: true, t: { en: 'regions fairly independent' } }] },
      '0,1,2,1': { ok: false,
        t: { en: 'Royal income is off. Sahel states made textiles, but rulers focused on long-distance trade, like gold, because it was easier to tax.' },
        show: [{ icon: '💰', ok: false, t: { en: 'cloth is harder to tax' } }] },
      '1,0,2,1': { ok: false,
        t: { en: 'The herders lever is off. Sahel states could not really rule nomads in the dry lands. The most they did was demand tribute now and then.' },
        show: [{ icon: '🐄', ok: false, t: { en: 'nomads cannot be ruled this way' } }] },
      '1,1,0,1': { ok: false,
        t: { en: 'Religion is off. Most farmers followed local religions. Mali\'s court was inclusive: Muslims and local believers both served.' },
        show: [{ icon: '🕌', ok: false, t: { en: 'most people are not Muslim' } }] },
      '1,1,1,1': { ok: false,
        t: { en: 'Religion is off. Islam was the faith of the traders, and it was useful for trade and writing. Rulers welcomed Muslims at court.' },
        show: [{ icon: '🕌', ok: false, t: { en: 'traders are Muslim' } }] },
      '1,1,2,0': { ok: false,
        t: { en: 'The regions lever is off. Mali was not very centralized: its regions were fairly independent. That is why historians argue whether it was an empire.' },
        show: [{ icon: '🗺️', ok: false, t: { en: 'Mali was not very centralized' } }] }
    },
    otherwise: { ok: false, t: { en: 'More than one lever is off. Think like a Sahel ruler: where does the money come from, who can you really rule, and who serves at court?' } },
    success: { en: 'Niani runs smoothly again! That is the [[sahelian state model|Sahelian state model]]: trade taxes, wet grain lands, nomads paying tribute, and [[religious pluralism|religious pluralism]].' }
  },
  boss: {
    at: [29, 18], stat: 'mov', need: 3,
    name: { en: 'The Dust Grump' },
    appear: { en: 'The Dust Grump is hiding in the heat haze by the river!' },
    taunt: { en: 'Gold, trade, mansas... I will cover all of Mali in dust!' },
    win: { en: 'The dust settles over the river. The page on African states floats down into your hands!' },
    questions: [
      {
        stim: { text: { en: 'These states generally relied on controlling long-distance trade for the funds they needed to govern and survive. They also made textiles, but their governments focused on trade because it was easier to tax.' }, src: { en: 'Adapted from "States and Empires of West Africa," World History Project' } },
        q: { en: 'The excerpt best explains how Sahel rulers...' },
        choices: [{ en: 'paid for running their states' }, { en: 'chose who would be the next king' }, { en: 'spread Islam to their farmers' }, { en: 'ruled the herders of the dry lands' }],
        answer: 0,
        why: { en: 'Controlling and taxing long-distance trade, such as gold and kola nuts, paid for Sahel governments.' }
      },
      {
        stim: { title: { en: 'What some Sahel states controlled' }, rows: [[{ en: 'State' }, { en: 'Trade it controlled' }], [{ en: 'Wagadu (Ghana)' }, { en: 'much of the gold trade' }], [{ en: 'Kanem and the Hausa states' }, { en: 'kola nuts' }], [{ en: 'Takrur' }, { en: 'grain and salt' }], [{ en: 'Mali' }, { en: 'much of the gold of western Afro-Eurasia' }]], src: { en: 'From "States and Empires of West Africa," World History Project' } },
        q: { en: 'Which conclusion does the table best support?' },
        choices: [{ en: 'Sahel states drew power from controlling trade' }, { en: 'Sahel states traded only with one another, never abroad' }, { en: 'Only Mali ever took part in the gold trade' }, { en: 'Sahel states made nothing to trade' }],
        answer: 0,
        why: { en: 'Each state built its strength on a trade it controlled. This shared pattern is part of the Sahelian state model.' }
      },
      {
        stim: { text: { en: 'In 1375, Abraham Cresques, a map-maker in Mallorca, Spain, drew Mansa Musa with a crown and scepter, holding a nugget of gold. Crowns and scepters were European, not West African, symbols of kings.' }, src: { en: 'Adapted from "States and Empires of West Africa," World History Project' } },
        q: { en: 'Which best describes the point of view shown in the map?' },
        choices: [{ en: 'A European used his own symbols for an African king' }, { en: 'A Mali scribe showed the mansa\'s real royal clothes' }, { en: 'A North African trader mocked Mali\'s lack of gold' }, { en: 'A Swahili merchant drew his own city\'s ruler' }],
        answer: 0,
        why: { en: 'Cresques never met Mansa Musa. He showed a great, rich king the way Europeans pictured kings. The gold was accurate: Mali controlled rich goldfields.' }
      },
      {
        q: { en: 'How did Sahel states such as Mali usually deal with the nomadic herders around them?' },
        choices: [{ en: 'They demanded tribute now and then' }, { en: 'They sent governors to every camp' }, { en: 'They forced all herders to farm grain' }, { en: 'They made the herders their kings' }],
        answer: 0,
        why: { en: 'States were strong in wet grain lands but could not really rule nomads in the dry lands. The most they could do was demand occasional tribute.' }
      },
      {
        stim: { text: { en: 'Both Muslims and members of local religions served in their courts. Rulers allowed many different sets of rituals, and themselves took part in several kinds of prayers and practices.' }, src: { en: 'Adapted from "States and Empires of West Africa," World History Project' } },
        q: { en: 'The excerpt best illustrates which feature of Sahel states?' },
        choices: [{ en: 'Religious pluralism' }, { en: 'Rule by merchant families' }, { en: 'A ban on local religions' }, { en: 'Rulers chosen by exam' }],
        answer: 0,
        why: { en: 'Accepting many faiths at court is religious pluralism. Most farmers kept local religions, while traders and some rulers were Muslim.' }
      },
      {
        stim: { text: { en: 'Sunjata\'s full name was Sogolon Mari Djata. "Sogolon" was his mother\'s name. Although he may have been Muslim, much of his power came from his mother.' }, src: { en: 'Adapted from "States and Empires of West Africa," World History Project' } },
        q: { en: 'This evidence best supports which claim about Mali?' },
        choices: [{ en: 'Matrilineal customs lived on beside Islam' }, { en: 'Islam quickly ended all local family customs' }, { en: 'Mali was ruled by a council of merchants' }, { en: 'Kings were chosen only through their fathers' }],
        answer: 0,
        why: { en: 'Matrilineality, tracing family through the mother, stayed important, and queen mothers held real political power.' }
      },
      {
        q: { en: 'Compared with Mali, the Swahili states of the Indian Ocean coast were mostly...' },
        choices: [{ en: 'port cities where merchants held power' }, { en: 'large land empires ruled by one king' }, { en: 'nomadic herding groups with no towns at all' }, { en: 'states run by Christian scribes' }],
        answer: 0,
        why: { en: 'Swahili city-states focused on port cities and trade, not on controlling big areas of land. Merchant families held most of the power; Lamu had no king.' }
      },
      {
        q: { en: 'Which statement best compares how rulers of Mali and Great Zimbabwe built their power?' },
        choices: [{ en: 'Both controlled gold; Zimbabwe also loaned cattle' }, { en: 'Both relied mainly on Swahili kings to run their lands' }, { en: 'Neither state had any trade with outsiders' }, { en: 'Both chose rulers by a written exam' }],
        answer: 0,
        why: { en: 'Mali controlled much of West Africa\'s gold. Great Zimbabwe dominated gold exports to Sofala, and its kings loaned cattle to keep provincial chiefs loyal.' }
      }
    ]
  },
  learned: [
    { en: 'Sahel states like Mali paid for government by controlling and taxing long-distance trade, especially in gold: the [[sahelian state model|Sahelian state model]].' },
    { en: 'They were strongest in wet grain lands and took only [[tribute|tribute]] from nomads. Courts practiced [[religious pluralism|religious pluralism]], and [[matrilineality|matrilineal]] customs lived on.' },
    { en: 'Africans built many kinds of states: Swahili merchant [[city-state|city-states]], Great Zimbabwe with gold and cattle, and Kongo with its judging kings.' }
  ],
  reflect: {
    q: { en: 'AP practice: Explain one way the rulers of Mali used trade to build and keep their power.' },
    starter: { en: 'Mali\'s rulers used trade to build their power by' }
  }
};
