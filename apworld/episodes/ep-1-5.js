/* HISTORYWALKER · Episode 1.5 · State Building in Africa (AP World Topic 1.5, c. 1200–1450)
   Niani, in the state of Mali, in 1330, while Mansa Musa rules.
   Content source: Khan Academy, AP World History (World History Project), Unit 1 Lesson "State Building in Africa":
   "States and Empires of West Africa" (Trevor R. Getz), "Africa 1200–1450" (Trevor Getz), "Comparison: States 1200–1450";
   and the Unit 1 overview. World History Project content is CC BY-NC 4.0. Facts here come from those readings.
   English only, AP level. (Episode 2.4 is Timbuktu and the trans-Saharan trade, so this one is about how states were
   BUILT and RULED: the Sahelian state model, religious pluralism, matrilineality, and other African states compared.)
   Map: the dry grassland of the herders in the north (cattle pen, tent), the palace of the mansa and a mosque on the
   royal plaza (north-east), the main street (row 10), the market (south-west), weavers' and farmers' houses (south-east),
   grain fields and the river along the south. The time stone's four levers set how a Sahel state was run.
   Two reading stands (must-read): the Cresques map of Mansa Musa (primary source, by the palace) and an adapted
   reading of "States and Empires of West Africa" (by the main street, near the market). */
window.EPISODE = {
  id: '1.5',
  realm: 1,
  sol: 'AP 1.5',
  style: 'sahel',
  weather: { sky: 'heat', time: 'day' },
  title: { en: 'State Building in Africa' },
  place: { en: 'Niani, Mali, 1330' },
  intro: [
    { en: 'The Void blurred the page on Mali. Niani is forgetting how its rulers built and ran a great Sahel state!' },
    { en: 'Talk to the 4 people here and read the 2 sources on their stands: a European map of Mansa Musa and a reading on West African states.' },
    { en: 'Then help Awa the scribe\'s apprentice and wake the time stone.' }
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
        { en: 'Sahel states grow strong in wet places: along the Niger and Senegal rivers and around the lakes of the Chad Basin. That grain land feeds many people.' },
        { en: 'Out here in the drier lands, the mansa\'s officials cannot really rule us. The most they can do is demand [[tribute|tribute]] now and then: goods, money or animals.' },
        { en: 'And it goes both ways. In the past, herders like us sometimes raided or even invaded the towns by the lakes and rivers.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Which best explains why Sahel rulers took only occasional tribute from the herders?' },
        choices: [
          { t: { en: 'The herders ruled the river towns instead' }, why: { en: 'Overstated. Herders sometimes raided or even invaded the river and lake towns, but they did not rule them. They were hard to rule because they kept moving through the dry lands.' } },
          { t: { en: 'The herders farmed the wet river valleys' }, why: { en: 'No. The wet river valleys were the farmers\' grain lands, the heart of the state. Herders moved through the drier grassland around them, where officials could not really rule.' } },
          { ok: true, t: { en: 'Their power rested on the wet grain lands' }, why: { en: 'Yes. Sahel states were built on dense, wet, grain-producing centers. Nomads moving through the drier lands around them were hard to rule.' } },
          { t: { en: 'Rulers taxed the herders\' cloth instead' }, why: { en: 'No. Sahel rulers taxed long-distance trade, not cloth, and Hamadi\'s people are herders, not weavers. From nomads, rulers could only demand occasional tribute.' } }
        ]
      }
    },
    {
      x: 7, y: 14, name: { en: 'Bakary' }, role: { en: 'Royal toll collector' },
      look: { skin: 5, hair: '#1b1410', shirt: '#e0b030', robe: true, hat: '#f4efe4', style: 'short' },
      lines: [
        { en: 'Most West African gold is mined a hundred miles or so south of old Wagadu, called Ghana. Wagadu sat in the middle of the route that sent it north.' },
        { en: 'The gold crosses the Sahara to North Africa and Europe, where it is in great demand. Now Mali controls much of it, and I collect the mansa\'s share.' },
        { en: 'Kanem and the Hausa states sell kola nuts from the southern forests, a stimulant in North Africa and the Middle East. Takrur trades grain and salt.' },
        { en: 'Our weavers make fine cloth, but trade is easier to tax. That is the old [[sahelian state model|Sahel]] way of paying for a government.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Which best explains how Wagadu (Ghana) grew rich?' },
        choices: [
          { t: { en: 'It mined most of the gold inside its own capital city' }, why: { en: 'No. Most gold was mined a hundred miles or so south of Wagadu. Its power came from controlling the route north.' } },
          { t: { en: 'It controlled the kola nut trade of the forests' }, why: { en: 'No. Kola nuts enriched Kanem and the Hausa states, and later the Susu. Wagadu\'s wealth came from the route that carried gold north.' } },
          { ok: true, t: { en: 'It sat between the goldfields and northern buyers' }, why: { en: 'Yes. The gold was mined south of Wagadu. Wagadu controlled the route that carried it north, so it could profit from the trade.' } },
          { t: { en: 'It taxed the fine cloth made by its own weavers' }, why: { en: 'No. Sahel states made fine cloth, but trade was easier to tax. Wagadu grew rich by controlling the route that carried gold north.' } }
        ]
      }
    },
    {
      x: 21, y: 15, name: { en: 'Sira' }, role: { en: 'Cloth weaver' },
      look: { skin: 4, hair: '#120c08', shirt: '#2f8a6a', robe: true, hat: '#d9822b', style: 'bun' },
      lines: [
        { en: 'For a hundred years the Susu were the great power here. They held most of the gold and kola trade, with strong textile and iron industries.' },
        { en: 'Then our first [[mansa|mansa]], Sunjata, defeated the Susu around 1240. His followers conquered the peoples around them until Mali stretched over a thousand miles east to west.' },
        { en: 'His full name was Sogolon Mari Djata. Sogolon was his mother\'s name! She may have been related to the Susu rulers, and she brought him supporters.' },
        { en: 'Many here trace family through the mother. That is [[matrilineality|matrilineality]]. So the [[queen mother|queen mother]], the king\'s mother, holds real power at court.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Sunjata may have been Muslim, yet his name begins with his mother\'s. This best shows that...' },
        choices: [
          { t: { en: 'Islam required tracing descent through mothers' }, why: { en: 'No. Political power for queen mothers was not a normal feature of Islam in many regions. Matrilineality was a local West African custom.' } },
          { t: { en: 'queen mothers chose each new mansa' }, why: { en: 'Overstated. Queen mothers held real power at court, but nothing here says they chose rulers. The name shows a local custom, matrilineality, lasting alongside Islam.' } },
          { t: { en: 'Mali adopted Susu customs after 1240' }, why: { en: 'No. Sunjata defeated the Susu around 1240. His mother may have been related to Susu rulers, but matrilineality was a shared local custom that lived on in Mali.' } },
          { ok: true, t: { en: 'local customs continued alongside Islam' }, why: { en: 'Yes. Matrilineality and the power of royal queen mothers continued, though they were not normal features of Islam in many other regions.' } }
        ]
      }
    },
    {
      x: 25, y: 6, name: { en: 'Ibrahima' }, role: { en: 'Court scribe' },
      look: { skin: 4, hair: '#1b1410', shirt: '#f4efe4', robe: true, hat: '#3a5a8a', style: 'short' },
      lines: [
        { en: 'Since at least the ninth century, Islam has been a powerful force here. It came with the traders from North Africa, and many of our merchants became Muslim.' },
        { en: 'A few kings converted because Islam was useful for trade and had a written language. The kings of Takrur and Kanem were Muslim by the eleventh century.' },
        { en: 'But most kings did not convert, and most farmers still follow local religions. Kings take part in many kinds of prayers and practices.' },
        { en: 'At court, Muslims and followers of local religions both serve. We call this [[religious pluralism|religious pluralism]].' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Which best explains why a few West African rulers, like the kings of Takrur and Kanem, converted to Islam?' },
        choices: [
          { t: { en: 'Most of their own farmers had already become Muslim' }, why: { en: 'No. Most farmers followed local, non-Muslim religions. Traders, some merchants and a few rulers were Muslim.' } },
          { ok: true, t: { en: 'It aided trade and offered a written language' }, why: { en: 'Yes. Islam was the religion of the North African traders, and it came with a written language that was useful to rulers.' } },
          { t: { en: 'They followed the example of Mansa Musa' }, why: { en: 'No. The kings of Takrur and Kanem were Muslim by the eleventh century, long before Mansa Musa ruled Mali in the 1300s.' } },
          { t: { en: 'Islam let them rule the nomads directly' }, why: { en: 'No. Sahel states could not really rule nomads in the dry lands, whatever their faith. They only took occasional tribute.' } }
        ]
      }
    },
    {
      doc: true, x: 20, y: 6, icon: '📜',
      name: { en: 'A European Map of Mansa Musa' }, role: { en: 'Primary source' },
      src: { en: 'Abraham Cresques of Mallorca, map showing Mansa Musa (about 1375); described in "States and Empires of West Africa," World History Project' },
      lines: [
        { en: 'The historian Trevor Getz describes the map: "A man sits in the middle of a late fourteenth century map, staring at a yellow orb, a nugget of gold. He is clearly a king, for he wears a crown and holds a scepter."' },
        { en: '"Yet the king is African, not European. He is Mansa Musa I, ruler of the state of Mali, and is possibly the wealthiest man of his time."' },
        { en: '"He probably did not really have a crown or a scepter because these were not West African symbols of kingship. But the gold nugget is accurate because Mansa Musa controlled some of the richest goldfields of this era."' },
        { en: 'Context: Abraham Cresques was a European map-maker who lived in Mallorca, Spain, around 1375. He never met or saw Mansa Musa, who became mansa around 1312. In the early 1300s, trade grew in North Africa and Europe, and so did the demand for currency, especially gold. Mali controlled much of the gold of western Afro-Eurasia. So Cresques drew a great, rich king the way Europeans pictured kings: with a crown and a scepter.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Sourcing: why did Cresques show Mansa Musa with a crown and a scepter?' },
        choices: [
          { t: { en: 'He copied the royal regalia he saw at Niani' }, why: { en: 'No. Cresques lived in Mallorca, Spain, and never met or saw Mansa Musa.' } },
          { t: { en: 'He meant to show Mansa Musa as a false king' }, why: { en: 'No. The map shows a great, rich king holding gold. Crowns and scepters were how Europeans pictured real, powerful kings; they simply were not West African symbols.' } },
          { t: { en: 'Mali\'s kings wore crowns sent from Europe' }, why: { en: 'No. Crowns and scepters were not West African symbols of kingship. Mansa Musa probably had neither.' } },
          { ok: true, t: { en: 'He used European symbols for a great king' }, why: { en: 'Yes. Crowns and scepters were European symbols of kings. Cresques never met Mansa Musa, so he pictured him the European way.' } }
        ]
      }
    },
    {
      doc: true, x: 10, y: 11, icon: '📖',
      name: { en: 'States and Empires of West Africa' }, role: { en: 'Reading' },
      src: { en: 'Adapted from "States and Empires of West Africa" by Trevor R. Getz, World History Project (Khan Academy)' },
      lines: [
        { en: 'South of the Sahara lies the Sahel, mostly dry grassland, with wetter land along the Senegal and Niger rivers and the lakes of the Chad Basin. These wet areas could support large populations, and that created a need for government. The earliest state we know was Wagadu, called Ghana after its ruler\'s title, founded around the end of the sixth century. Kanem in the Chad Basin and Takrur on the Senegal River followed around the ninth century.' },
        { en: 'They shared three elements: the Sahelian state model. First, they paid for government by dominating long-distance trade. Gold was mined a hundred miles or so south of Wagadu, which sat on the route north. Second, they relied on dense, wet, grain-producing centers, and took only occasional tribute from the nomadic herders around them. Third, they dealt with religious diversity: Islam came with North African traders, but most farmers kept local religions.' },
        { en: 'In the twelfth century Wagadu declined. It may have been surpassed by Susu, which gained control of most of the gold and kola nut trade. Around 1240 Sunjata, Mali\'s first mansa, defeated Susu, and Mali grew to over a thousand miles east to west. In the early 1300s, growing trade in North Africa and Europe created a demand for currency, especially gold. Mali controlled much of the gold of western Afro-Eurasia, and its rulers grew very rich.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Which of the following best explains why Mali\'s rulers grew so rich in the early 1300s?' },
        choices: [
          { t: { en: 'Mali taxed its weavers\' cloth above all else' }, why: { en: 'No. Sahel states made textiles, but rulers focused on long-distance trade, like gold, because it was easier to tax.' } },
          { ok: true, t: { en: 'Rising trade raised demand for Mali\'s gold' }, why: { en: 'Yes. Growing trade in North Africa and Europe created a demand for currency, especially gold, and Mali controlled much of it.' } },
          { t: { en: 'Mali ruled the herders of the dry lands tightly' }, why: { en: 'No. Sahel states could not really rule nomadic herders. Their power rested on wet, grain-producing centers and on trade.' } },
          { t: { en: 'Mali conquered the Swahili gold ports' }, why: { en: 'No. The Swahili city-states lay on Africa\'s east coast, on the Indian Ocean, far from Mali. Mali\'s gold went north across the Sahara.' } }
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
        { en: 'I lead caravans across Mali, over a thousand miles. At its core is a people who share one language and culture. Around them live conquered peoples who do not.' },
        { en: 'That sounds like an [[empire|empire]]. But Mali is not very centralized: far regions mostly run their own affairs, and conquered people are not clearly treated as lesser. People could argue!' },
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
          found: { en: 'Piece 2! As Kongo\'s population grew, so did disputes, and kings arose as judges. Kongo also ran the cloth trade, taxed river trade and used nzimbu shells as money.' } },
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
    intro: { en: 'The Void jumbled how Mali is run. Set the four levers the way Sahel rulers really governed, then test them at the stone.' },
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
    name: { en: 'The Void' },
    appear: { en: 'The Void has opened in the heat haze by the river. The air shimmers into it.' },
    taunt: { en: 'Gold, trade, mansas... all of it goes dark in me. Who will tell this story when I have it?' },
    win: { en: 'The Void closes over the river. The page on African states floats down into your hands.' },
    questions: [
      {
        stim: { text: { en: 'Wagadu controlled a large portion of the gold trade because it sat in the middle of the trade route that sent the gold north. Most West African gold in this period was mined a hundred miles or so south of Wagadu, and it was in great demand in North Africa and Europe.' }, src: { en: 'Adapted from "States and Empires of West Africa," World History Project' } },
        q: { en: 'The excerpt best supports the claim that Wagadu\'s power rested mainly on...' },
        choices: [{ en: 'its place between the goldfields and northern buyers' }, { en: 'its ownership of the goldfields inside its own borders' }, { en: 'its control over the nomads of the dry grasslands' }, { en: 'its conversion to Islam to win North African allies' }],
        answer: 0,
        why: { en: 'The gold was mined south of Wagadu. Wagadu grew strong by controlling the route that carried it north to buyers in North Africa and Europe.' }
      },
      {
        stim: { title: { en: 'What some Sahel states controlled' }, rows: [[{ en: 'State' }, { en: 'Trade it controlled' }], [{ en: 'Wagadu (Ghana)' }, { en: 'much of the gold trade' }], [{ en: 'Kanem and the Hausa states' }, { en: 'kola nuts' }], [{ en: 'Takrur' }, { en: 'grain and salt' }], [{ en: 'Mali' }, { en: 'much of the gold of western Afro-Eurasia' }]], src: { en: 'From "States and Empires of West Africa," World History Project' } },
        q: { en: 'The table most directly reflects which element of the Sahelian state model?' },
        choices: [{ en: 'Paying for government by dominating trade' }, { en: 'Basing power in wet, grain-producing centers' }, { en: 'Welcoming several religions at the royal court' }, { en: 'Taking occasional tribute from nomadic herders' }],
        answer: 0,
        why: { en: 'Each state drew its income from a long-distance trade it controlled. The other choices are real parts of the model, but the table shows only trade.' }
      },
      {
        stim: { text: { en: '"He probably did not really have a crown or a scepter because these were not West African symbols of kingship. But the gold nugget is accurate because Mansa Musa controlled some of the richest goldfields of this era."' }, src: { en: 'Trevor Getz on the map of Mansa Musa by Abraham Cresques of Mallorca (about 1375), "States and Empires of West Africa," World History Project' } },
        q: { en: 'Which development best explains why a map-maker in Spain around 1375 showed Mansa Musa holding gold?' },
        choices: [{ en: 'Rising trade in Europe and North Africa raised demand for gold' }, { en: 'Mali\'s armies had conquered North Africa and parts of Spain' }, { en: 'Mansa Musa had sent crowns and scepters to European kings' }, { en: 'Swahili ships carried Mali\'s gold to Europe by the Indian Ocean' }],
        answer: 0,
        why: { en: 'In the early 1300s, growing trade in North Africa and Europe created a demand for currency, especially gold, and Mali controlled much of it. Cresques never met Mansa Musa.' }
      },
      {
        stim: { text: { en: 'They had little control over the people in the drier regions around them, most of whom were nomadic herders. The most control these governments could exert over the nomads was the occasional demand of tribute.' }, src: { en: 'Adapted from "States and Empires of West Africa," World History Project' } },
        q: { en: 'Which of the following best explains the limit on state power described in the excerpt?' },
        choices: [{ en: 'States were built on dense, wet, grain-farming centers' }, { en: 'The herders had converted to Islam and refused all rule' }, { en: 'Mansas let the queen mothers govern the dry lands' }, { en: 'Kanem and Takrur ruled the herders for Mali instead' }],
        answer: 0,
        why: { en: 'Sahel states were strongest in the wet lands by the rivers and lakes. Nomads who moved through the drier lands around them could not really be ruled.' }
      },
      {
        stim: { text: { en: 'A few rulers chose to convert to Islam because it was useful for trade and because it had a written language. The kings of Takrur and Kanem became Muslim by the eleventh century. But most kings did not. Instead, they were very inclusive.' }, src: { en: 'Adapted from "States and Empires of West Africa," World History Project' } },
        q: { en: 'Compared with the kings of Takrur and Kanem, most Sahel kings in this period...' },
        choices: [{ en: 'kept local faiths but welcomed Muslims at court' }, { en: 'converted even earlier, back in the ninth century' }, { en: 'banned Islam to protect the local religions' }, { en: 'made Islam the faith of all their farmers' }],
        answer: 0,
        why: { en: 'Most kings did not convert. Both Muslims and followers of local religions served at court, and kings took part in many kinds of prayers: religious pluralism.' }
      },
      {
        stim: { text: { en: 'Sunjata\'s full name was Sogolon Mari Djata. "Sogolon" was his mother\'s name, and although he may have been Muslim, he still embraced matrilineality. Much of his power came from his mother.' }, src: { en: 'Adapted from "States and Empires of West Africa," World History Project' } },
        q: { en: 'The evidence best supports which claim about continuity in Mali after Islam arrived?' },
        choices: [{ en: 'Royal queen mothers kept real political power' }, { en: 'Kings were always the firstborn son of the king' }, { en: 'Most farmers soon converted to Islam' }, { en: 'Merchant councils took over from the mansa' }],
        answer: 0,
        why: { en: 'Matrilineality, tracing family through the mother, continued beside Islam, and royal queen mothers held real political power, unlike in many other Islamic regions.' }
      },
      {
        stim: { text: { en: 'On the Swahili coast, merchant families held most of the power in the port cities. In Lamu there was no king at all, just a group of merchant families who made decisions together.' }, src: { en: 'Adapted from "Africa 1200–1450," World History Project' } },
        q: { en: 'Compared with Mali, the Swahili states described in the excerpt...' },
        choices: [{ en: 'focused on port trade, not on ruling large lands' }, { en: 'relied on tribute from nomadic cattle herders' }, { en: 'chose rulers through the mother\'s family line' }, { en: 'built their power on the cloth trade and nzimbu shells' }],
        answer: 0,
        why: { en: 'Swahili city-states focused on port cities and trade rather than on controlling large areas of land. Nzimbu shells and cloth were the basis of Kongo\'s power.' }
      },
      {
        q: { en: 'Historians argue about whether Mali was an empire. Which evidence best supports calling it an empire?' },
        choices: [{ en: 'A core people ruled conquered peoples unlike them' }, { en: 'Its far regions mostly ran their own affairs' }, { en: 'Conquered people were not clearly treated as lesser' }, { en: 'Both Muslims and local believers served at court' }],
        answer: 0,
        why: { en: 'An empire is a core people or state ruling others. Mali\'s core shared a language and culture; conquered peoples around it did not. Its weak center argues the other way.' }
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
