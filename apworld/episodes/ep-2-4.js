/* HISTORYWALKER · Episode 2.4 · Trans-Saharan Trade Routes (AP World Topic 2.4, c. 1200–1450)
   Timbuktu, in the Mali Empire, about 1350.
   Content source: Khan Academy, AP World History (World History Project), Unit 2 Lesson "Trans-Saharan Trade Routes":
   "Across an Ocean of Sand: Trans-Saharan Trade Routes" (Bennett Sherry), the lesson activities ("Comparison: Networks
   of Exchange", "SAQ Practice: Unit 2"), and the Unit 2 overview: "Unit 2 Introduction: Networks of Exchange 1200 to 1450"
   (Trevor Getz), "Unit 2 Overview: Networks of Exchange" (video page), "Vocabulary Match-Up". World History Project
   content is CC BY-NC 4.0. Facts here come from those readings. English only, AP level.
   Map: the Sahara (dunes) in the north with the salt caravan's camp and well (NW) and the north road to Sijilmasa (NE);
   Timbuktu in the middle (mud houses, the mosque school, the market); the Niger flood plain with millet, sorghum and
   rice fields in the south, and the river along the bottom. */
window.EPISODE = {
  id: '2.4',
  realm: 2,
  sol: 'AP 2.4',
  style: 'sahel',
  weather: { sky: 'dust', time: 'day' },
  title: { en: 'Trans-Saharan Trade Routes' },
  place: { en: 'Timbuktu, Mali Empire, 1350' },
  intro: [
    { en: 'The Grump buried the page on the Sahara in sand. Timbuktu is forgetting why caravans cross the desert!' },
    { en: 'Talk to the 4 people here, help a cook get salt, then wake the time stone.' }
  ],
  scenes: {
    at: [-3.0, 16.77],
    year: 1350,
    start: [
      { en: 'In 1350, Timbuktu was a trading city in the Mali Empire, just south of the Sahara.' },
      { en: 'Caravans of thousands of camels linked West Africa to the Mediterranean world.' },
      { en: 'Timbuktu began as a caravanserai, a pitstop for caravans, and grew into a center of learning.' }
    ],
    guess: {
      q: { en: 'West Africa had plenty of one good that people north of the Sahara wanted. Which?' },
      choices: [{ t: { en: '🪙 Gold' }, ok: true }, { t: { en: '🧂 Salt' } }],
      why: { en: 'West Africa had gold but little salt. The Sahara had salt. Gold and salt drove the trade.' }
    },
    page: { en: 'Big caravans kept crossing the Sahara until railroads and steamships arrived in the early 1900s.' },
    next: {
      q: { en: 'Next: cultural consequences of connectivity. Did trade routes carry ideas, not just goods?' },
      choices: [{ t: { en: 'Yes, ideas too' }, ok: true }, { t: { en: 'No, only goods' } }],
      why: { en: 'Trade routes carried beliefs, technologies and even diseases. Islam crossing the Sahara is one example. You go there next.' }
    }
  },
  start: [16, 9],
  map: [
    'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',
    'ruuuussssssuuuuuuuussssuuuuuuuur',
    'ruusssssOsssuuuuuussssssuuuuuuur',
    'russsssssssssssssssssssssssssuur',
    'ruusssxsssuuuu:uuuuuuu:uuuxsuuur',
    'aggggggggggggg:ggggggg:gggggggga',
    'ag.RRR..RRRR..l.DDDDD.l..RRR...a',
    'ag.hdh..hhdh..l.DDDDD.l..hdh...a',
    'ag............l.DDdDD.l........a',
    'ag..llllllllllllllllllllllllll.a',
    'ag..l.........l...l...l.....l..a',
    'ag..l.mmm.mmm.l...l...l.RRRR.l.a',
    'a...l.........l...l...l.hhhh.l.a',
    'a.RRR.........llllll.xl......l.a',
    'a.hdh.::::::::::::::::::::::::.a',
    'a.....gggg:ggggg:gggggg:gggggg.a',
    'aoo1o1oqqqq:qqqqq:o1o1o1:o2o2o2a',
    'a1o1o1oqqqq:qqqqq:1o1o1o:2o2o2oa',
    'aggggggxgggg:ggggggggggg:gggggga',
    'a...........:...........:......a',
    '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',
    '================================'
  ],
  words: {
    'trans-saharan': { en: 'across the Sahara Desert, linking West Africa with North Africa and the Mediterranean' },
    'sahel': { en: 'the dry zone between the Sahara and the savanna; from the Arabic sāhil, "shores"' },
    'caravan': { en: 'a group of traders or travelers moving together, often across deserts or long trade routes' },
    'caravanserai': { en: 'a pitstop where caravans could rest, find water and trade' },
    'pastoralist': { en: 'a person whose way of life is based on herding animals rather than farming or city living' },
    'berbers': { en: 'peoples of North Africa and the Sahara; Berber guides led caravans across the desert' },
    'tribute': { en: 'payment from one group to another, here to keep caravans safe from attack' },
    'network': { en: 'a system of connected routes, people or places used for communication, trade or travel' },
    'urban elite': { en: 'the rich and powerful people of the cities, such as rulers and big merchants' },
    'hajj': { en: 'the pilgrimage to Mecca that Muslims try to make once in their lives' },
    'monsoon': { en: 'a seasonal wind pattern that affects trade and farming, especially in the Indian Ocean region' },
    'commerce': { en: 'trade, especially large-scale exchange of goods and services' }
  },
  npcs: [
    {
      x: 21, y: 2, name: { en: 'Idir' }, role: { en: 'Berber caravan guide' },
      look: { skin: 2, hair: '#1b1410', shirt: '#2a4a8a', robe: true, hat: '#1f2f6a', style: 'short' },
      lines: [
        { en: 'We call this desert a sea. The word [[sahel|Sahel]] comes from the Arabic for "shores." I am a [[berbers|Berber]], and I guide ships across it.' },
        { en: 'The camel is our ship. It can go ten days without water. We improved its saddle, so one camel carries about 400 pounds across the whole desert.' },
        { en: 'We set out from October to March and travel about 20 miles a day, well to well, oasis to oasis. A crossing takes about 70 days.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Which development did the most to make regular trans-Saharan trade possible?' },
        choices: [
          { ok: true, t: { en: 'Camels and better camel saddles' }, why: { en: 'Yes. Camels suit the desert better than horses, and Berber saddles let them carry big loads over long distances. Cheap transport made the trade pay.' } },
          { t: { en: 'Paved roads that Mali built in the sand' }, why: { en: 'No. Caravans did not use paved roads. They followed wells and oases across the sand.' } },
          { t: { en: 'Ships that sailed the Niger to the sea' }, why: { en: 'No. The Sahara was crossed on camels. Sea routes around Africa came later, in the 1400s, and they bypassed the desert.' } }
        ]
      }
    },
    {
      x: 9, y: 10, name: { en: 'Fatoumata' }, role: { en: 'Gold merchant' },
      look: { skin: 5, hair: '#120c08', shirt: '#d9822b', robe: true, hat: '#2a7a5a', style: 'bun' },
      lines: [
        { en: 'Many goods cross the desert, but two drive the trade: the gold of West Africa and the salt of the Sahara.' },
        { en: 'Salt is needed for life, and our land has little. The desert has salt but no gold. So we trade.' },
        { en: 'The emperors of Mali strictly control where merchants go, to keep the gold mines in the south secret. That control makes Mali rich and strong.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why did the emperors of Mali strictly control where merchants could travel?' },
        choices: [
          { ok: true, t: { en: 'To keep the gold mines secret' }, why: { en: 'Yes. Guarding the secret of the gold mines kept the gold trade in Mali\'s hands, and that control enriched and expanded the empire.' } },
          { t: { en: 'To stop Islam from coming in' }, why: { en: 'No. Islam spread with trade, and many West African merchants and rulers became Muslims.' } },
          { t: { en: 'To keep out salt from the north' }, why: { en: 'No. Mali wanted salt: it was scarce in West Africa. Salt was half of the trade.' } }
        ]
      }
    },
    {
      x: 21, y: 8, name: { en: 'Yusuf' }, role: { en: 'Scholar and scribe' },
      look: { skin: 4, hair: '#1b1410', shirt: '#f0ead8', robe: true, hat: '#ffffff', style: 'short' },
      lines: [
        { en: 'Islam crossed the desert with the merchants. Muslim merchants link a vast part of Afro-Eurasia, from the Atlantic to the Pacific, in one trading system.' },
        { en: 'The Berbers became Muslims after the Arab conquests. Many West African merchants did too. Islam gives traders a common language and shared values.' },
        { en: 'I write contracts in Arabic. Written Arabic improves record-keeping, and Arabic legal codes and written contracts build trust between merchants.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'How did Islam help the trans-Saharan trade grow?' },
        choices: [
          { ok: true, t: { en: 'It gave merchants shared law and trust' }, why: { en: 'Yes. A shared faith, written Arabic and Arabic legal codes made deals across the desert easier and safer. Islam was the most important factor in the trade\'s expansion.' } },
          { t: { en: 'It replaced the camels with faster horses' }, why: { en: 'No. Camels, not horses, carried the trade. Islam helped through language, writing and law.' } },
          { t: { en: 'It made every farmer convert at once' }, why: { en: 'No. Islam spread by trade, so it reached cities and the wealthy first. Most farmers kept local religions.' } }
        ]
      }
    },
    {
      x: 26, y: 18, name: { en: 'Aminata' }, role: { en: 'Farmer on the Niger' },
      look: { skin: 5, hair: '#1a1008', shirt: '#7a3a8a', robe: true, hat: '#c9a24a', style: 'long' },
      lines: [
        { en: 'The Niger River floods these plains. We grow sorghum, millet and rice, and our harvests feed Mali\'s cities.' },
        { en: 'In Timbuktu the merchants and rulers pray as Muslims. Out here in the fields, most of us keep our old local religions.' },
        { en: 'Islam came with trade, so it came first to the cities and the wealthy. But most people in Mali live on the land, not in cities.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Which statement best describes Islam in West Africa around 1350?' },
        choices: [
          { ok: true, t: { en: 'It was the religion of urban elites' }, why: { en: 'Yes. Islam spread along trade routes to cities, merchants and rulers. In the countryside, local religions stayed more important for a long time.' } },
          { t: { en: 'Every farmer in Mali had become Muslim' }, why: { en: 'No. Most people were rural, and most rural people kept their local religions long after Islam arrived.' } },
          { t: { en: 'It was banned in the market cities' }, why: { en: 'No. The market cities were where Islam was strongest. Timbuktu became a center of Islamic scholarship.' } }
        ]
      }
    }
  ],
  houses: [
    { at: [4, 7], name: { en: 'Hassan, cloth trader' }, look: { skin: 1, hair: '#2b1d14', shirt: '#4a7aa8', robe: true, hat: '#ffffff', style: 'short' },
      lines: [{ en: 'I bring cloth and other manufactured goods across the desert. Here I trade them for gold.' }, { en: 'My caravan rested at Sijilmasa, in Morocco, before the long crossing south.' }] },
    { at: [10, 7], name: { en: 'Rest-house keeper Seydou' }, look: { skin: 4, hair: '#1a1008', shirt: '#8a5a2a', robe: true, style: 'short' },
      lines: [{ en: 'Tired travelers sleep here and water their camels. Timbuktu itself began as a pitstop like this one.' }, { en: 'Merchants rarely own their camels. They rent them from desert herders.' }] },
    { at: [18, 8], name: { en: 'Teacher Mahmud' }, look: { skin: 3, hair: '#6e6e6e', shirt: '#f0ead8', robe: true, hat: '#ffffff', style: 'short' },
      lines: [{ en: 'Students and scholars come here from far away. Timbuktu is becoming a center of Islamic learning.' }, { en: 'Trade lets scholars travel and exchange knowledge, just as merchants exchange goods.' }] },
    { at: [26, 7], name: { en: 'Bintou' }, look: { skin: 5, hair: '#120c08', shirt: '#c0392b', robe: true, style: 'long' },
      lines: [{ en: 'My father crossed the desert north by choice, as a pilgrim on the hajj to Mecca.' }, { en: 'Many West Africans made that long journey to Mecca.' }] },
    { at: [3, 14], name: { en: 'Grandfather Sekou' }, look: { skin: 4, hair: '#d0d0d0', shirt: '#6a7a4a', robe: true, style: 'short' },
      lines: [{ en: 'When the river floods, the fields drink. Then we plant millet and rice.' }, { en: 'Our grain feeds the city, and the city\'s trade brings us salt.' }] }
  ],
  signs: [
    { x: 6, y: 4, text: { en: 'SALT CARAVAN CAMP · Camels rest by the well before the 70-day crossing north.' } },
    { x: 26, y: 4, text: { en: 'NORTH ROAD · To Sijilmasa in Morocco, then the Mediterranean and Egypt.' } },
    { x: 21, y: 13, text: { en: 'TIMBUKTU · A caravan pitstop that grew into a city of commerce and learning.' } },
    { x: 7, y: 18, text: { en: 'NIGER FLOOD PLAIN · Sorghum, millet and rice feed the Mali Empire.' } }
  ],
  finds: [
    { clueAt: [2, 10], at: [2, 12], decor: 'coinold', clue: { en: 'From this note, walk 2 steps south, toward the river.' },
      text: { en: 'A small piece of gold! West African gold became money for Christian and Islamic lands in Europe and the Middle East.' } }
  ],
  scraps: [[1, 1], [30, 1], [1, 19]],
  smudges: [[14, 3, 'whirl'], [14, 17]],
  quest: {
    stat: 'hei',
    title: { en: 'Salt for Kadidia' },
    giver: {
      x: 5, y: 15, name: { en: 'Kadidia' }, role: { en: 'Cook' },
      look: { skin: 5, hair: '#120c08', shirt: '#2a8a6a', robe: true, hat: '#e0a030', style: 'bun' },
      lines: [
        { en: 'In the 1320s, Mansa Musa, our ruler, made the [[hajj|hajj]] to Mecca with tens of thousands of camels. He spent so much gold that he upset Egypt\'s economy!' },
        { en: 'Yet my salt jar is empty. Salt is scarce here. Ask Oumar, the camel herder at the east end of town, where the salt caravan camps.' }
      ],
      wait: { en: 'Oumar the camel herder is at the east end of town, north of the main road.' },
      thanks: { en: 'Salt! Here gold is plenty and salt is scarce. In the desert it is the other way around. That is why the caravans come.' }
    },
    contact: {
      x: 29, y: 7, name: { en: 'Oumar' }, role: { en: 'Camel herder' },
      look: { skin: 3, hair: '#1b1410', shirt: '#b98250', robe: true, hat: '#4a4a5a', style: 'short' },
      lines: [
        { en: 'Merchants rent camels from [[pastoralist|herders]] like me. Some desert groups raid small caravans, so states and merchants pay them [[tribute|tribute]] for safe passage.' },
        { en: 'The salt caravan camps by the well, north-west of town in the dunes. Its leader only trades salt for goods worth the crossing.' }
      ]
    },
    action: {
      type: 'trade',
      trader: {
        x: 9, y: 2, name: { en: 'Amastan' }, role: { en: 'Salt caravan leader' },
        look: { skin: 1, hair: '#2b1d14', shirt: '#1f2f6a', robe: true, hat: '#1f2f6a', style: 'short' },
        lines: [
          { en: 'My people control salt mines in the desert. These slabs came south on my camels.' },
          { en: 'I will trade one slab, but only for a good valuable enough to carry 70 days back north.' }
        ]
      },
      q: { en: 'Amastan will trade one slab of salt. Which good on the map is worth carrying back across the Sahara?' },
      choices: [
        { ok: true, at: [11, 12], icon: '🪙', t: { en: 'A pouch of gold dust' },
          why: { en: 'A fair trade! The desert has salt but no gold. West African gold is valuable enough to pay for a 70-day crossing.' } },
        { at: [20, 17], icon: '🌾', t: { en: 'A sack of millet' },
          why: { en: 'Millet feeds Mali\'s families, but a desert crossing needs goods valuable enough that people far away will pay for them.' } },
        { at: [26, 2], icon: '🪨', t: { en: 'A slab of desert salt' },
          why: { en: 'I already have salt! My people control the salt mines. I trade salt for what the desert lacks.' } }
      ],
      item: { icon: '🧂', name: { en: 'A slab of Saharan salt' } }
    }
  },
  challenge: {
    at: [16, 11], type: 'survey', stat: 'hei',
    // one post per network: the caravan camp (trans-Saharan), the north road (Mediterranean), the market (Silk Roads),
    // the east road toward Egypt and Mecca (Indian Ocean)
    spots: [[4, 2], [20, 1], [13, 12], [29, 10]],
    title: { en: 'Compare the networks' },
    intro: { en: 'The Grump mixed up the trade networks of 1200–1450! Read the post for each network, then come back and compare them.' },
    table: {
      head: [{ en: 'Network' }, { en: 'How goods moved' }, { en: 'Main goods' }, { en: 'What helped it grow' }],
      rows: [
        [{ en: 'Trans-Saharan routes' }, { en: 'Camel caravans, well to well across the desert' }, { en: 'West African gold, Saharan salt; also cloth and enslaved people' }, { en: 'Camels; strong states like Mali working with Berber groups; Islam' }],
        [{ en: 'Mediterranean Sea' }, { en: 'Ships between North Africa, Europe and the Middle East' }, { en: 'Many goods from across the Sahara, especially gold' }, { en: 'A small sea, so the states around it were in constant contact' }],
        [{ en: 'Silk Roads' }, { en: 'Overland routes across Eurasia' }, { en: 'Silk from East Asia; Chinese, Persian and Indian goods' }, { en: 'Stability under Mongol rule made travel safer' }],
        [{ en: 'Indian Ocean' }, { en: 'Ships moving port to port in a yearly cycle' }, { en: 'Goods of East Africa, Arabia, South and Southeast Asia' }, { en: 'Better ships and predictable [[monsoon|monsoon]] winds' }]
      ],
      note: { en: 'From "Across an Ocean of Sand" and "Unit 2 Introduction: Networks of Exchange," World History Project.' }
    },
    questions: [
      { q: { en: 'Which network moved its goods mainly by camel caravan?' },
        choices: [{ en: 'The trans-Saharan routes' }, { en: 'The Indian Ocean' }, { en: 'The Mediterranean Sea' }, { en: 'None of them' }], answer: 0,
        why: { en: 'Camel caravans went well to well across the Sahara. The Indian Ocean and the Mediterranean moved goods by ship.' } },
      { q: { en: 'Which factor helped BOTH the Silk Roads and the trans-Saharan routes grow?' },
        choices: [{ en: 'Strong states that made travel safer' }, { en: 'Predictable monsoon winds' }, { en: 'Ships moving from port to port' }, { en: 'Silk carried from East Asia' }], answer: 0,
        why: { en: 'Mongol rule brought stability to the Silk Roads; strong states like Mali controlled and protected the Saharan trade. Monsoons and ships belong to the Indian Ocean.' } },
      { q: { en: 'How was the trans-Saharan network connected to the Mediterranean?' },
        choices: [{ en: 'Gold from across the Sahara left from North African ports' }, { en: 'Mediterranean ships sailed up the Niger to Timbuktu' }, { en: 'The two networks had no connection at all' }, { en: 'Silk from East Asia was Mali\'s main export' }], answer: 0,
        why: { en: 'Caravans carried gold north to cities like Sijilmasa. From North African ports it went on across the Mediterranean.' } },
      { q: { en: 'Which network depended most on predictable seasonal winds?' },
        choices: [{ en: 'The Indian Ocean' }, { en: 'The trans-Saharan routes' }, { en: 'The Silk Roads' }, { en: 'All of them equally' }], answer: 0,
        why: { en: 'Indian Ocean ships moved in a yearly cycle with the monsoon winds. Desert and overland routes did not need winds.' } }
    ],
    success: { en: 'The networks are clear again! Each linked regions in its own way, but all moved goods, people and ideas.' }
  },
  boss: {
    at: [29, 18], stat: 'hei', need: 3,
    name: { en: 'The Sand Grump' },
    appear: { en: 'The Sand Grump is hiding in a dust cloud by the river!' },
    taunt: { en: 'Gold, salt, camels... who needs them? I will bury every route in sand!' },
    win: { en: 'The dust settles over the Niger. The page on the trans-Saharan trade floats down into your hands!' },
    questions: [
      {
        stim: { text: { en: 'Rather than invade the desert, states and merchants paid tribute to pastoralists in order to ensure the safety of their caravans.' }, src: { en: 'Adapted from "Across an Ocean of Sand: Trans-Saharan Trade Routes," World History Project' } },
        q: { en: 'The practice described in the excerpt best shows that...' },
        choices: [{ en: 'states needed desert herders to keep trade safe' }, { en: 'herders played no part at all in the Saharan trade' }, { en: 'Mali conquered and ruled the whole Sahara' }, { en: 'merchants avoided the desert to escape taxes' }],
        answer: 0,
        why: { en: 'Pastoralists could guide caravans or raid them. Paying them tribute was cheaper than invading the desert, and it kept caravans safe.' }
      },
      {
        stim: { title: { en: 'The camel in the Saharan trade' }, rows: [[{ en: 'Fact' }, { en: 'Amount' }], [{ en: 'Load on a full desert crossing' }, { en: 'about 400 pounds' }], [{ en: 'Load on short trips' }, { en: 'up to 1,200 pounds' }], [{ en: 'Days without water' }, { en: 'up to 10' }], [{ en: 'Caravan speed' }, { en: 'about 20 miles a day' }], [{ en: 'Time to cross the Sahara' }, { en: 'about 70 days' }]], src: { en: 'From "Across an Ocean of Sand: Trans-Saharan Trade Routes," World History Project' } },
        q: { en: 'Which conclusion is best supported by the data in the table?' },
        choices: [{ en: 'Camels made long desert crossings practical' }, { en: 'Caravans crossed the Sahara in under a week' }, { en: 'Horses carried heavier loads than camels did' }, { en: 'Loaded camels could not make short trips' }],
        answer: 0,
        why: { en: 'Big loads and ten days without water made the camel a cost-effective way to cross. Even so, a crossing took about 70 days.' }
      },
      {
        q: { en: 'Which best explains why Saharan salt was traded for West African gold?' },
        choices: [{ en: 'Each was scarce where the other was common' }, { en: 'Salt was used as money only in North Africa' }, { en: 'Every farmer in Mali needed gold to grow millet' }, { en: 'Mali\'s rulers had banned the mining of salt' }],
        answer: 0,
        why: { en: 'Salt, needed for life, was in short supply in West Africa. The desert had salt but no gold. Merchants carried goods from where they were common to where they were scarce.' }
      },
      {
        stim: { text: { en: 'The emperors of Mali strictly controlled the movement of merchants across their land in an attempt to guard the secret locations of gold mines to the south.' }, src: { en: 'Adapted from "Across an Ocean of Sand: Trans-Saharan Trade Routes," World History Project' } },
        q: { en: 'The policy in the excerpt best illustrates how West African states...' },
        choices: [{ en: 'used control of trade to build their wealth' }, { en: 'tried to keep Islam out of all their lands' }, { en: 'depended on sea routes to carry their gold' }, { en: 'gave up all control of trade to the Berbers' }],
        answer: 0,
        why: { en: 'By controlling the trade routes and guarding the gold mines, Mali\'s rulers enriched and expanded their empire.' }
      },
      {
        stim: { text: { en: 'Islam provided a common language and value system, making communication easier. Written Arabic improved record-keeping. Arabic legal codes and written contracts increased trust between merchants.' }, src: { en: 'Adapted from "Across an Ocean of Sand: Trans-Saharan Trade Routes," World History Project' } },
        q: { en: 'Based on the excerpt, Islam helped the trans-Saharan trade mainly by...' },
        choices: [{ en: 'giving merchants shared rules and trust' }, { en: 'replacing camel caravans with boats' }, { en: 'ending all trade with non-Muslims' }, { en: 'turning every farmer in Mali into a merchant' }],
        answer: 0,
        why: { en: 'A shared faith, language and written law made deals across long distances easier and safer. That is why Islam was so important to the trade\'s growth.' }
      },
      {
        q: { en: 'Which statement best describes continuity in West African religion around 1350?' },
        choices: [{ en: 'Most rural people kept their local religions' }, { en: 'All of Mali had fully converted to Islam by 1350' }, { en: 'Islam spread first among rural farmers' }, { en: 'Local religions vanished once traders came' }],
        answer: 0,
        why: { en: 'Islam spread by trade, so it reached cities and urban elites first. Most people lived on the land, and local religions stayed important there.' }
      },
      {
        stim: { text: { en: 'Mansa Musa, the ruler of Mali, made the Hajj to Mecca in the 1320s, carrying a fortune in gold. He spent so lavishly that he destabilized the Egyptian economy.' }, src: { en: 'Adapted from "Across an Ocean of Sand: Trans-Saharan Trade Routes," World History Project' } },
        q: { en: 'The events in the excerpt best show that...' },
        choices: [{ en: 'Mali\'s gold tied it to wider Afro-Eurasia' }, { en: 'Mali was cut off from the rest of the world' }, { en: 'Egypt controlled the gold mines of West Africa' }, { en: 'no one from Mali crossed the Sahara by choice' }],
        answer: 0,
        why: { en: 'Mali\'s gold and its Muslim ruler\'s pilgrimage reached Egypt and Mecca. The trans-Saharan routes linked West Africa to the wider world.' }
      },
      {
        q: { en: 'Which best compares the trans-Saharan routes with the Silk Roads, 1200–1450?' },
        choices: [{ en: 'Both grew when strong states made travel safer' }, { en: 'Both relied on monsoon winds to move goods' }, { en: 'Both moved goods mainly on ships at sea' }, { en: 'Neither one carried any ideas, only trade goods' }],
        answer: 0,
        why: { en: 'Mongol rule made the Silk Roads safer; strong states like Mali controlled and protected the Saharan trade. Both carried ideas as well as goods.' }
      }
    ]
  },
  learned: [
    { en: 'Camels, Berber guides and huge [[caravan|caravans]] made the [[trans-saharan|trans-Saharan]] trade possible; the gold of West Africa and the salt of the Sahara drove it.' },
    { en: 'Mali grew rich by controlling the gold trade. Caravans also carried enslaved West Africans north, while others went freely as pilgrims.' },
    { en: 'Islam spread with trade to cities and [[urban elite|urban elites]], built trust between merchants and made Timbuktu a center of learning; most rural people kept local religions.' }
  ],
  reflect: {
    q: { en: 'AP practice: Explain one way the trans-Saharan trade affected the Mali Empire between 1200 and 1450.' },
    starter: { en: 'One way the trans-Saharan trade affected Mali was' }
  }
};
