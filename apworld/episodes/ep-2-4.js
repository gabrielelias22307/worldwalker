/* HISTORYWALKER · Episode 2.4 · Trans-Saharan Trade Routes (AP World Topic 2.4, c. 1200–1450)
   Timbuktu, in the Mali Empire, about 1350.
   Content source: Khan Academy, AP World History (World History Project), Unit 2 Lesson "Trans-Saharan Trade Routes":
   "Across an Ocean of Sand: Trans-Saharan Trade Routes" (Bennett Sherry), the lesson activities ("Comparison: Networks
   of Exchange", "SAQ Practice: Unit 2"), and the Unit 2 overview: "Unit 2 Introduction: Networks of Exchange 1200 to 1450"
   (Trevor Getz), "Unit 2 Overview: Networks of Exchange" (video page), "Vocabulary Match-Up". World History Project
   content is CC BY-NC 4.0. Facts here come from those readings. English only, AP level.
   Map: the Sahara (dunes) in the north with the salt caravan's camp and well (NW) and the north road to Sijilmasa (NE);
   Timbuktu in the middle (mud houses, the mosque school, the market); the Niger flood plain with millet, sorghum and
   rice fields in the south, and the river along the bottom.
   Two reading stands: the Catalan Atlas (a primary source the article shows and describes) by the north road, and
   "A land of gold" (adapted from the article) beside the mosque school. */
window.EPISODE = {
  id: '2.4',
  realm: 2,
  sol: 'AP 2.4',
  style: 'sahel',
  weather: { sky: 'dust', time: 'day' },
  title: { en: 'Trans-Saharan Trade Routes' },
  place: { en: 'Timbuktu, Mali Empire, 1350' },
  intro: [
    { en: 'The Void buried the page on the Sahara in sand. Timbuktu is forgetting why caravans cross the desert!' },
    { en: 'Talk to the 4 people here and read the 2 sources on their stands. Help a cook get salt, then wake the time stone.' }
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
        { en: 'We call this desert a sea: 3.5 million square miles from the Nile to the Atlantic. [[sahel|Sahel]] comes from the Arabic sāhil, "shores." I am a [[berbers|Berber]] guide.' },
        { en: 'The camel is our ship. Its wide toes suit the sand, and it can go ten days without water. No horse can match it here.' },
        { en: 'We Berbers improved the camel saddle. Now one camel carries about 400 pounds across the whole desert, and up to 1,200 pounds on short trips.' },
        { en: 'We leave between October and March, go about 20 miles a day, well to well, and cross in about 70 days. Caravans now have 5,000 to 10,000 camels.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Which development did the most to make large, regular trans-Saharan trade possible?' },
        choices: [
          { ok: true, t: { en: 'Camels with improved Berber saddles' }, why: { en: 'Yes. The camel was by far the most important travel technology. Better saddles let it carry big loads over long distances, so crossing the desert paid.' } },
          { t: { en: 'New wells that Mali\'s emperors had dug' }, why: { en: 'No. Caravans did follow wells and oases, but the key technology was the camel, with the saddle the Berbers improved.' } },
          { t: { en: 'Portuguese ships along the coast' }, why: { en: 'No. Portuguese sailors came in the 1400s, and their sea lanes bypassed the Saharan routes instead of building them.' } },
          { t: { en: 'Tribute paid to desert groups for safe passage' }, why: { en: 'No. Tribute to pastoralists kept caravans safer, but without camels carrying big loads over long distances, crossing the desert would not have paid.' } }
        ]
      }
    },
    {
      x: 9, y: 10, name: { en: 'Fatoumata' }, role: { en: 'Gold merchant' },
      look: { skin: 5, hair: '#120c08', shirt: '#d9822b', robe: true, hat: '#2a7a5a', style: 'bun' },
      lines: [
        { en: 'Many goods cross the desert, but two drive the trade: the gold of West Africa and the salt of the Sahara.' },
        { en: 'Salt is needed for life, and our land has little. Berber tribes control salt mines in the desert, so they come to buy gold in Jenne and Timbuktu.' },
        { en: 'Mali, an empire since 1235, strictly controls where merchants go, to guard the secret gold mines to the south. That control enriches and expands the empire.' },
        { en: 'Our gold travels far. It becomes money for the Christian and Islamic lands of Europe and the Middle East.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why did the emperors of Mali strictly control where merchants could travel?' },
        choices: [
          { ok: true, t: { en: 'To keep the gold mines secret' }, why: { en: 'Yes. Guarding the secret locations of the gold mines kept the gold trade in Mali\'s hands, and that control enriched and expanded the empire.' } },
          { t: { en: 'To collect tribute from herders' }, why: { en: 'No. It was states and merchants who paid tribute to desert pastoralists, to keep caravans safe. Mali\'s control guarded its gold mines.' } },
          { t: { en: 'To stop Islam reaching the cities' }, why: { en: 'No. Islam spread with trade, and Mali\'s merchants and rulers became Muslims. Market cities were where Islam was strongest.' } },
          { t: { en: 'To keep Berber traders out of its cities' }, why: { en: 'No. Berber tribes came to Jenne and Timbuktu to buy gold with salt. Mali\'s control guarded the secret locations of its gold mines.' } }
        ]
      }
    },
    {
      x: 21, y: 8, name: { en: 'Yusuf' }, role: { en: 'Scholar and scribe' },
      look: { skin: 4, hair: '#1b1410', shirt: '#f0ead8', robe: true, hat: '#ffffff', style: 'short' },
      lines: [
        { en: 'After the Arab conquests of the 600s, the Berbers became Muslims. As trade grew, many West African merchants converted as well.' },
        { en: 'Islamic empires and Muslim merchants unite Afro-Eurasia, from the Atlantic to the Pacific, in one trading system. As we convert, that system reaches across the Sahara.' },
        { en: 'I write contracts in Arabic. A shared faith eases talk, written Arabic improves record-keeping, and Arabic legal codes and written contracts build trust between merchants.' },
        { en: 'Islam is the most important factor in the growth of this trade. Scholars travel too, and Timbuktu is becoming a center of Islamic scholarship.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Which best explains why Islam was the most important factor in the expansion of trans-Saharan trade?' },
        choices: [
          { ok: true, t: { en: 'It gave merchants shared law and trust' }, why: { en: 'Yes. A common language and values, written Arabic records and Arabic legal codes made deals across the desert easier and safer.' } },
          { t: { en: 'It replaced Berber guides with Arabs' }, why: { en: 'No. The Berbers converted to Islam and went on guiding the caravans. Islam helped through language, writing and law.' } },
          { t: { en: 'It made Arabic the speech of all Mali' }, why: { en: 'No. Islam and written Arabic reached merchants, scholars and rulers in the cities first. Most rural people kept local religions.' } },
          { t: { en: 'It united the region under one Islamic empire' }, why: { en: 'No. Islamic empires and Muslim merchants linked Afro-Eurasia, but no single empire ruled it. Islam helped trade through a shared faith, written Arabic and Arabic legal codes.' } }
        ]
      }
    },
    {
      x: 26, y: 18, name: { en: 'Aminata' }, role: { en: 'Farmer on the Niger' },
      look: { skin: 5, hair: '#1a1008', shirt: '#7a3a8a', robe: true, hat: '#c9a24a', style: 'long' },
      lines: [
        { en: 'The Niger River floods these plains. We grow sorghum, millet and rice, and our harvests feed Mali\'s cities.' },
        { en: 'Most people in Mali live on the land, not in cities. Out here in the fields, most of us keep our old local religions.' },
        { en: 'Islam spread by trade, so it reached the cities and the wealthy first. Most converts live in market cities, as merchants or members of the ruling class.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Which of the following was a continuity in Mali after Islam arrived?' },
        choices: [
          { ok: true, t: { en: 'Local religions stayed strong on the land' }, why: { en: 'Yes. Islam became the religion of urban elites, but most people were rural, and local religions stayed more important there long after Islam arrived.' } },
          { t: { en: 'Islam spread to farmers first, then to cities' }, why: { en: 'No. It was the other way round. Islam spread by trade, so it reached cities, merchants and rulers first.' } },
          { t: { en: 'Merchants and rulers kept only local religions' }, why: { en: 'No. Merchants and rulers were the people most likely to convert. Most converts lived in the market cities.' } },
          { t: { en: 'Timbuktu grew into a center of Islamic learning' }, why: { en: 'No. That is true, but it is a change Islam and trade brought to the city, not something that stayed the same.' } }
        ]
      }
    },
    {
      doc: true, x: 24, y: 5, icon: '📜',
      name: { en: 'The Catalan Atlas' }, role: { en: 'Primary source' },
      src: { en: 'The Catalan Atlas, a map made in the fourteenth century; shown and described in "Across an Ocean of Sand: Trans-Saharan Trade Routes," World History Project' },
      lines: [
        { en: 'This primary source is a map, not a text. The World History Project describes this detail of it as "depicting caravan trade routes across the Sahara and the Mali emperor, Mansa Musa, holding a gold coin."' },
        { en: 'Notice what the mapmaker chose to show: the desert caravan routes, and at their end a West African ruler holding gold. To the people who made and used this map, Mali meant gold.' },
        { en: 'Context: European mapmakers drew the Catalan Atlas in the 1300s, far from Mali. Decades earlier, in the 1320s, Mansa Musa made the hajj to Mecca with tens of thousands of camels and servants and a fortune in gold. He spent so lavishly in Egypt that he destabilized its economy.' },
        { en: 'His displays of wealth helped create myths that West Africa was a land where gold grew like plants in the ground. Partly because of such myths, Portuguese sailors explored the West African coast in the 1400s, seeking a route around Africa to the Indian Ocean trade.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Point of view: which best explains why a European mapmaker drew Mansa Musa holding gold?' },
        choices: [
          { ok: true, t: { en: 'Mali\'s fame for gold had spread beyond Africa' }, why: { en: 'Yes. Mansa Musa\'s lavish hajj made Mali famous for gold in Egypt and far beyond. The map reflects that reputation, and the myths it fed.' } },
          { t: { en: 'Europeans already ran Mali\'s gold mines' }, why: { en: 'No. Mali\'s emperors guarded the locations of the gold mines as a secret. Europeans only began exploring the West African coast in the 1400s.' } },
          { t: { en: 'The mapmaker had crossed with Mali\'s caravans' }, why: { en: 'No. Nothing says so. The map shows what Europeans had heard: stories of Mali\'s wealth, not first-hand travel.' } },
          { t: { en: 'Europeans knew Mali for its Islamic scholars' }, why: { en: 'No. Timbuktu did become a center of Islamic scholarship, but the map shows a ruler holding gold. What spread to Europe was Mali\'s fame for wealth.' } }
        ]
      }
    },
    {
      doc: true, x: 13, y: 8, icon: '📖',
      name: { en: 'A Land of Gold' }, role: { en: 'Reading' },
      src: { en: 'Adapted from "Across an Ocean of Sand: Trans-Saharan Trade Routes" by Bennett Sherry, World History Project (Khan Academy)' },
      lines: [
        { en: 'From 1200 to 1450, an extensive trans-Saharan trading system reached its peak. Trade across the Sahara began with the Arab conquests in the seventh century and linked the kingdoms of West Africa to the Mediterranean and Indian Ocean worlds. It required two things: goods valuable enough that people across the desert would pay for them, and a cost-effective way to move them.' },
        { en: 'The gold of West Africa and the salt of the Sahara drove the trade. Berber tribes controlled salt mines and bought gold in cities like Jenne and Timbuktu. They also bought enslaved people there, and carried everything and everyone north to Sijilmasa, in present-day Morocco, then on to the Mediterranean and Egypt. As many as 9.3 million West Africans were taken north enslaved between 800 and 1800. Others went freely, many as pilgrims to Mecca.' },
        { en: 'The routes peaked from the twelfth to fifteenth centuries, when strong states in West and North Africa cooperated with the Berber tribes and asserted control over the trade. On the Niger flood plains, Mali (1235–1670) and Songhai (1430–1591) traded gold for salt and Mediterranean luxuries. Trade and Islam brought a golden age: Timbuktu became a center of Islamic scholarship, and the Moroccan traveler Ibn Battuta was impressed by Mali\'s wealth.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Which of the following best explains why the trans-Saharan routes peaked from the 1100s to the 1400s?' },
        choices: [
          { ok: true, t: { en: 'Strong states worked with Berbers to control trade' }, why: { en: 'Yes. States like Mali cooperated with the Berber tribes and asserted control over the routes. Their control made the trade safer and richer.' } },
          { t: { en: 'Camels were first brought to North Africa then' }, why: { en: 'No. The one-humped camel had returned to North Africa around 300 BCE, long before. The peak came when strong states controlled the trade.' } },
          { t: { en: 'Portuguese sea lanes sent more gold north' }, why: { en: 'No. Portuguese sea lanes came in the 1400s and bypassed the Saharan routes, making them less important.' } },
          { t: { en: 'Arab conquests had just opened the routes then' }, why: { en: 'No. Trade across the Sahara began with the Arab conquests in the seventh century, centuries before the peak. The peak came with strong states.' } }
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
    intro: { en: 'The Void mixed up the trade networks of 1200–1450! Read the post for each network, then come back and compare them.' },
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
    name: { en: 'The Void' },
    appear: { en: 'The Void has opened in a dust cloud by the river. The caravan bells stop.' },
    taunt: { en: 'Gold and salt crossed this desert for centuries. I can swallow the desert, and every road across it.' },
    win: { en: 'The Void closes over the Niger. The page on the trans-Saharan trade floats down into your hands.' },
    questions: [
      {
        stim: { text: { en: 'Pastoralists in the Sahara were essential for the trans-Saharan trade, but they were also a threat to it. Rather than invade the desert, states and merchants paid tribute to pastoralists in order to ensure the safety of their caravans.' }, src: { en: 'Adapted from "Across an Ocean of Sand: Trans-Saharan Trade Routes," World History Project' } },
        q: { en: 'The practice described in the excerpt best supports the claim that...' },
        choices: [{ en: 'desert pastoralists held real power over the trade' }, { en: 'Mali\'s armies conquered and ruled the open Sahara' }, { en: 'merchants avoided the Sahara in favor of the sea' }, { en: 'Berber groups refused to trade with outsiders at all' }],
        answer: 0,
        why: { en: 'Pastoralists could guide caravans or raid them, so states paid them rather than invade the desert. Berbers rented camels, guided caravans and sold salt; sea lanes around Africa came later.' }
      },
      {
        stim: { title: { en: 'Goods on the trans-Saharan routes, c. 1200–1450' }, rows: [[{ en: 'Good' }, { en: 'Where it came from' }, { en: 'Where it was scarce' }], [{ en: 'Gold' }, { en: 'Mines south of Mali, in West Africa' }, { en: 'The Sahara and lands to the north' }], [{ en: 'Salt' }, { en: 'Saharan mines controlled by Berber tribes' }, { en: 'West Africa' }], [{ en: 'Cloth and manufactured goods' }, { en: 'Arab merchants from the north' }, { en: 'West Africa' }]], src: { en: 'From "Across an Ocean of Sand: Trans-Saharan Trade Routes," World History Project' } },
        q: { en: 'Which claim is best supported by the table?' },
        choices: [{ en: 'Merchants moved goods from where they were common to where they were scarce' }, { en: 'West Africa had to import most of its gold from the salt mines of the Sahara' }, { en: 'Salt moved mainly from West Africa north across the desert to Morocco' }, { en: 'The trade carried only luxury goods and never goods needed for life' }],
        answer: 0,
        why: { en: 'Gold went north and salt came south because each was scarce where the other was common. Salt, needed for life, was in short supply in West Africa, so it was no luxury.' }
      },
      {
        stim: { text: { en: 'A detail from the fourteenth-century Catalan Atlas, depicting caravan trade routes across the Sahara and the Mali emperor, Mansa Musa, holding a gold coin.' }, src: { en: 'Description of the Catalan Atlas (1300s) in "Across an Ocean of Sand: Trans-Saharan Trade Routes," World History Project' } },
        q: { en: 'The mapmaker\'s choice to show Mansa Musa holding gold most directly reflects...' },
        choices: [{ en: 'Mali\'s fame for gold spreading far beyond Africa' }, { en: 'European control over the gold mines of West Africa' }, { en: 'Mali\'s conquest of the port cities of North Africa' }, { en: 'the spread of Islam among the rural farmers of Mali' }],
        answer: 0,
        why: { en: 'Mansa Musa\'s lavish hajj made Mali famous for gold far beyond West Africa. Mali guarded its gold mines as a secret, and Islam spread to cities and elites first.' }
      },
      {
        stim: { text: { en: 'Mansa Musa\'s displays of wealth helped create myths that West Africa was a land where gold grew like plants in the ground.' }, src: { en: 'Adapted from "Across an Ocean of Sand: Trans-Saharan Trade Routes," World History Project' } },
        q: { en: 'Which development of the 1400s was partly a result of the myths described in the excerpt?' },
        choices: [{ en: 'Portuguese voyages along the West African coast' }, { en: 'Mongol rule bringing stability to the Silk Roads' }, { en: 'The conversion of the Berbers to Islam' }, { en: 'Mali\'s rise as a new empire on the Niger' }],
        answer: 0,
        why: { en: 'Partly because of such myths, Portuguese sailors explored the West African coast in the 1400s, seeking a route around Africa. The Berbers converted after the 600s, Mali arose in 1235, and Mongol stability belongs to the Silk Roads.' }
      },
      {
        stim: { text: { en: 'Islam was the most important factor in the expansion of trans-Saharan trade. Islam provided a common language and value system, making communication easier. Written Arabic improved record-keeping. Arabic legal codes and written contracts increased trust between merchants.' }, src: { en: 'Adapted from "Across an Ocean of Sand: Trans-Saharan Trade Routes," World History Project' } },
        q: { en: 'The excerpt best supports which explanation of how Islam expanded the trade?' },
        choices: [{ en: 'It gave distant merchants shared law and trust' }, { en: 'It replaced the Berber guides with Arab guides' }, { en: 'It moved the trade from caravans onto ships' }, { en: 'It brought every farmer in Mali into commerce' }],
        answer: 0,
        why: { en: 'A common language, written Arabic and Arabic contracts made long-distance deals easier and safer. The Berbers converted and kept guiding, camels still carried the goods, and most farmers kept local religions.' }
      },
      {
        stim: { text: { en: 'In West Africa, Islam became the religion of urban elites. Most converts lived in market cities and were merchants or members of the ruling class. But most of the population was not urban.' }, src: { en: 'Adapted from "Across an Ocean of Sand: Trans-Saharan Trade Routes," World History Project' } },
        q: { en: 'Which of the following was a continuity in West Africa after the arrival of Islam?' },
        choices: [{ en: 'Local religions stayed important in the countryside' }, { en: 'Islam spread first to farmers and then to the cities' }, { en: 'Rulers and merchants kept only their local religions' }, { en: 'Timbuktu\'s scholars turned away from Islamic learning' }],
        answer: 0,
        why: { en: 'Islam spread by trade, so it reached cities, merchants and rulers first. Most people lived on the land, and local religions stayed more important there long after Islam arrived. Timbuktu became a center of Islamic scholarship.' }
      },
      {
        stim: { title: { en: 'Two networks of exchange, 1200–1450' }, rows: [[{ en: 'Network' }, { en: 'How goods moved' }, { en: 'What helped it grow' }], [{ en: 'Trans-Saharan routes' }, { en: 'Camel caravans, well to well across the desert' }, { en: 'Camels; strong states like Mali; Islam' }], [{ en: 'Indian Ocean' }, { en: 'Ships, port to port in a yearly cycle' }, { en: 'Better ships; predictable monsoon winds' }]], src: { en: 'From "Across an Ocean of Sand" and "Unit 2 Introduction: Networks of Exchange," World History Project' } },
        q: { en: 'Compared with the Indian Ocean trade, the trans-Saharan trade differed most in...' },
        choices: [{ en: 'relying on animals rather than seasonal winds' }, { en: 'carrying ideas and beliefs as well as trade goods' }, { en: 'linking up with Muslim merchants elsewhere' }, { en: 'depending on stability under Mongol rule' }],
        answer: 0,
        why: { en: 'Caravans moved on camels; Indian Ocean ships moved with the monsoon winds. Both networks carried ideas, both were part of the Muslim trading world, and Mongol stability belongs to the Silk Roads.' }
      },
      {
        stim: { text: { en: 'The trans-Saharan routes reached their peak from the twelfth to fifteenth centuries, when a series of strong states in West and North Africa cooperated with the Berber tribes and asserted control over the trade.' }, src: { en: 'Adapted from "Across an Ocean of Sand: Trans-Saharan Trade Routes," World History Project' } },
        q: { en: 'Compared with the Silk Roads in the same era, the growth described in the excerpt...' },
        choices: [{ en: 'also depended on states that made trade safer' }, { en: 'also depended on Mongol rule of Central Asia' }, { en: 'also depended on predictable monsoon winds' }, { en: 'also depended on new Portuguese sea lanes around Africa' }],
        answer: 0,
        why: { en: 'Mongol rule made the Silk Roads safer; in the Sahara, strong states like Mali, working with the Berbers, did the same. Monsoons drove the Indian Ocean trade, and Portuguese sea lanes later bypassed the desert.' }
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
