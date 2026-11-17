/* HISTORYWALKER · Episode 1.4 · State Building in the Americas (AP World Topic 1.4, c. 1200–1450)
   Tenochtitlan, capital of the Mexica (Aztec) state, about 1450.
   Content source: Khan Academy, AP World History (World History Project), Unit 1 Lesson "State Building in the Americas":
   "The Americas 1200–1450" (William H. Beezley), "Long-Distance Trade in the Americas" (Bennett Sherry),
   "Opener: Six Words, Six Themes", and the Unit 1 introduction "The Global Tapestry, 1200 to 1450".
   World History Project content is CC BY-NC 4.0. Facts here come from those readings. English only, AP level. */
window.EPISODE = {
  id: '1.4',
  realm: 1,
  sol: 'AP 1.4',
  style: 'mesoamerica',
  weather: { sky: 'clear', time: 'day' },
  title: { en: 'State Building in the Americas' },
  place: { en: 'Tenochtitlan, Mexica (Aztec) state, 1450' },
  intro: [
    { en: 'The Grump blurred the page on the Americas. Tenochtitlan is forgetting how it conquers, trades and feeds itself!' },
    { en: 'Talk to the 4 people, read the 2 sources on the wooden stands, help a featherworker, then wake the time stone.' }
  ],
  scenes: {
    at: [-99.13, 19.43],
    year: 1450,
    start: [
      { en: 'In 1450, the Mexica (Aztecs) ruled an empire from Tenochtitlan, in the Valley of Mexico.' },
      { en: 'Their capital, begun in 1325, stood on an island in a lake.' },
      { en: 'In the early 1400s, an alliance of three city-states formed the Aztec Empire.' }
    ],
    guess: {
      q: { en: 'Tenochtitlan stood on an island with little farmland. How do you think it fed its people?' },
      choices: [{ t: { en: '🌱 Gardens in the lake' }, ok: true }, { t: { en: '🐫 Camel caravans' } }],
      why: { en: 'Farmers built chinampas, gardens in the shallow lake. There were no camels or pack animals in Mesoamerica.' }
    },
    page: { en: 'Puebloan turquoise from far to the north has been found at Aztec sites, 1,200 miles away.' },
    next: {
      q: { en: 'Next: State Building in Africa. Did Africa have large states before 1450?' },
      choices: [{ t: { en: 'Yes, it did' }, ok: true }, { t: { en: 'No, none at all' } }],
      why: { en: 'Sub-Saharan Africa had a long history of state building, with large states and other kinds of societies. You go there next.' }
    }
  },
  start: [10, 8],
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT',
    'T..P~~~~~~~~~~~~~~~~~~~~~~~~~~~T',
    'T.,.~~~~.llllllll............~~T',
    'TP..~==~.lDDDDDll.mm.mm.mm...~~T',
    'T..T~==~.lDDDDDllllllllllllll~~T',
    'T...~==~.lDDDDDll.mm.mm.mm...~~T',
    'T...~==~.llllllllllllllllllll~~T',
    'T.P.~~~~.x......l..........x.~~T',
    'T...bbbblllllllllllllllllllll~~T',
    'TP..~~~~.x......l...QQ..RRR..~~T',
    'T,,.~~~~.T......l...JJ..hdh..~~T',
    'TP..~~~~.......Tl:.x........T~~T',
    'T...~~~~.QQQ.RRRl:~~~~~B~~~~.~~T',
    'TT.P~==~.hdh.hdhl:22222:2222.~~T',
    'T...~==~........l:~~~~~B~~~~.~~T',
    'TP..~==~........l:22222:2222.~~T',
    'T.T.~==k::::::::l:~~~~~B~~~~.~~T',
    'T...~==~........l:22222:2222.~~T',
    'T.P.~~~~........l:~~~~~B~~~~.~~T',
    'T...~~~~T...T.Y.l:........T..~~T',
    'T..P~~~~~~~~~~~~~~~~~~~~~~~~~~~T',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT'
  ],
  words: {
    'mexica': { en: 'the people who built Tenochtitlan and ruled the Aztec Empire; "Aztec" is the more common name' },
    'empire': { en: 'a large state in which one people rules over many other peoples and lands' },
    'tribute': { en: 'payments that conquered peoples had to send to their rulers, such as food, cloth or precious stones' },
    'human sacrifice': { en: 'killing a person as an offering to the gods; Mexica priests sacrificed prisoners of war' },
    'pochteca': { en: 'Mexica merchants who carried goods on their backs across Mesoamerica and also gathered information' },
    'luxury goods': { en: 'light, costly goods like turquoise, quetzal feathers, cacao and jade, worth carrying a long way' },
    'chinampa': { en: 'a garden built up in the shallow lake, with canals around it; chinampas fed Tenochtitlan' },
    'mesoamerica': { en: 'the region of today\'s Mexico and Central America, the most urbanized region of the Americas' },
    'sapa inca': { en: 'the Inca ruler, seen as the representative on Earth of Inti, the Sun god' },
    'quipu': { en: 'knotted strings the Inca used to keep records' },
    'chasqui': { en: 'Inca runners who carried messages and orders along the empire\'s roads' },
    'confederation': { en: 'a union of separate peoples or states that agree to act together, like the Haudenosaunee' }
  },
  npcs: [
    {
      x: 12, y: 6, name: { en: 'Yaotl' }, role: { en: 'Warrior' },
      look: { skin: 3, hair: '#120c08', shirt: '#b8452a', pants: '#3a2a20', style: 'long' },
      lines: [
        { en: 'In the early 1400s, our city joined two other powerful city-states in an alliance. Together we built the Aztec [[empire|empire]].' },
        { en: 'We march on neighboring peoples. Conquered towns must send [[tribute|tribute]]: food, woven cloth, feathered art and precious stones.' },
        { en: 'We take prisoners of war. Priests offer them in [[human sacrifice|human sacrifice]] at the pyramids. Our 52-year calendar warns that only blood can postpone the end of the world.' },
        { en: 'Two peoples nearby were never conquered, in Tlaxcala and in Michoacán. Perhaps we leave them free so they keep giving us wars, and prisoners to sacrifice.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Which of the following best explains what drove Mexica campaigns against neighboring peoples?' },
        choices: [
          { t: { en: 'A plan to make conquered peoples fully Mexica' }, why: { en: 'No. The Mexica made little attempt to integrate conquered peoples into their culture beyond demanding tribute.' } },
          { ok: true, t: { en: 'The need for food, tribute and captives' }, why: { en: 'Yes. The need for food and for prisoners to sacrifice pushed the Mexica to conquer. State power and religion worked together.' } },
          { t: { en: 'A search for gold to trade across the sea' }, why: { en: 'No. The Americas and Afro-Eurasia were not yet connected before about 1500, and there was no sea trade with Europe.' } }
        ]
      }
    },
    {
      x: 22, y: 7, name: { en: 'Cuauhtli' }, role: { en: 'Pochteca merchant' },
      look: { skin: 4, hair: '#1a1008', shirt: '#2f7f8f', pants: '#5a4630', style: 'short' },
      lines: [
        { en: 'I am one of the [[pochteca|pochteca]], the Aztec merchants. Yacatecuhtli, our god of commerce, protects faithful merchants and travelers.' },
        { en: 'We have no pack animals, no sailing ships and hardly any navigable rivers. So we carry [[luxury goods|luxury goods]] on our backs: turquoise, quetzal feathers, cacao, obsidian, jade.' },
        { en: 'Pochteca walk as far as Panama, perhaps Colombia, maybe even north to Texas. Turquoise from the Puebloan peoples, 1,200 miles north, reaches our markets.' },
        { en: 'We also carry news. We gather information about rivals, and the empire uses it to plan conquests.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Which of the following best explains why long-distance trade in Mesoamerica centered on light, high-value goods?' },
        choices: [
          { t: { en: 'Llamas carried staples, so people took luxuries' }, why: { en: 'No. Llamas and alpacas lived only in the Andes of South America. Mesoamerica had no pack animals at all.' } },
          { t: { en: 'Rulers banned trade in salt, grain and cotton' }, why: { en: 'No. Staples like salt, grain and cotton were traded too, but only over shorter distances.' } },
          { ok: true, t: { en: 'Merchants had to carry all goods on their backs' }, why: { en: 'Right. With no pack animals, no sailing ships and few navigable rivers, only light, costly goods were worth a long walk.' } }
        ]
      }
    },
    {
      x: 12, y: 15, name: { en: 'Tochtli' }, role: { en: 'Scribe' },
      look: { skin: 2, hair: '#2a1a10', shirt: '#e8dcc0', pants: '#6a4a2a', robe: true, style: 'short' },
      lines: [
        { en: 'Priests, administrators and merchants all need accurate records. I paint account books and calendars in a text made of complex pictures.' },
        { en: 'This book lists the [[tribute|tribute]] of conquered towns. We take their goods, but we make little attempt to bring them into our culture.' },
        { en: 'On our long journey here, our ancestors lived among the Toltecs at Tula. They took Toltec beliefs, crops, weapons and the legend of Quetzalcoatl, the feathered serpent.' },
        { en: 'Quetzalcoatl sailed away in a stone boat, promising to return. Our priests fear that the end of a 52-year cycle could bring the end of the world.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Tochtli\'s tribute book would be most useful to a historian studying which topic?' },
        choices: [
          { t: { en: 'How the Inca moved conquered villagers' }, why: { en: 'No. Moving conquered villagers was an Inca policy in the Andes. This book records Mexica tribute.' } },
          { t: { en: 'How pochteca merchants hid their wealth' }, why: { en: 'No. The book lists what conquered towns paid the state, not the private wealth of merchants.' } },
          { ok: true, t: { en: 'How the Mexica drew wealth from conquests' }, why: { en: 'Yes. A tribute list shows what conquered towns had to send. The Mexica took goods but changed little else.' } }
        ]
      }
    },
    {
      x: 20, y: 15, name: { en: 'Xochitl' }, role: { en: 'Chinampa farmer' },
      look: { skin: 3, hair: '#120c08', shirt: '#4f8a3a', pants: '#3a2a20', style: 'bun' },
      lines: [
        { en: 'Our ancestors left Aztlan and walked south, seeking a sign: an eagle with a snake in its mouth, on a cactus. They saw it on this lake island in 1325.' },
        { en: 'Island land is scarce. So we build [[chinampa|chinampas]], gardens raised in the shallow lake with canals between them. Vegetables and avocados grow here.' },
        { en: 'Our gardens help feed over 200,000 people, more than London, Paris or Madrid. Tens of thousands visit the market at Tlatelolco every day.' },
        { en: 'Salt, grain and cotton come over shorter distances. Short trade moves food between climate zones, and that protects people from drought.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'How did the Mexica adapt to building a great city on a lake island?' },
        choices: [
          { t: { en: 'They cut farming terraces into hillsides' }, why: { en: 'No. Terracing was the way to farm in the Andean highlands. The Mexica farmed the lake itself.' } },
          { ok: true, t: { en: 'They raised chinampa gardens in the lake' }, why: { en: 'Yes. Chinampas turned the shallow lake into farmland and helped feed a city larger than any in Europe.' } },
          { t: { en: 'They brought maize in by Maya canoes' }, why: { en: 'No. Maya canoes carried luxury goods along the coast. Tenochtitlan grew much of its own food in chinampas.' } }
        ]
      }
    },
    {
      doc: true, x: 27, y: 5, icon: '📖',
      name: { en: 'The Worst Transportation System?' }, role: { en: 'A scholar\'s claim' },
      src: { en: 'Kenneth Hirth, archaeologist; quoted in "Long-Distance Trade in the Americas" by Bennett Sherry, World History Project' },
      lines: [
        { en: 'Archaeologist Kenneth Hirth claims that "Mesoamerica had the worst transportation system in the ancient world."' },
        { en: 'His reasons: Mesoamerican societies did not develop sailing technology, and most grew up inland, away from seaports. Other than llamas and alpacas in the mountains of South America, the Americas had no pack animals, and hardly any navigable rivers. Most merchants carried goods on their backs.' },
        { en: 'But Hirth notes that, nonetheless, Mesoamerica developed active long-distance exchange networks and huge markets. All societies in the Americas took part in some level of trade.' },
        { en: 'Context: for a long time scholars thought trade here was limited. Few written sources survive. Teotihuacan left no records, and Spanish colonizers later burned many Maya records. Merchants were not part of the ruling class, and the sources that survive focus on the ruling class. So scholars rely on murals of market scenes and on archaeology.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Sourcing: why did scholars long assume that trade in the Americas was limited?' },
        choices: [
          { t: { en: 'Digs found no goods from far-off places' }, why: { en: 'No. Archaeology found far-traveled goods, like Puebloan turquoise at Aztec sites. Digs are how we know about this trade.' } },
          { ok: true, t: { en: 'The sources focus on the ruling class' }, why: { en: 'Yes. Merchants were not rulers, few written records survive, and many were burned. So trade was easy to miss.' } },
          { t: { en: 'Merchants\' own diaries described it as small' }, why: { en: 'No. We have very few written sources about merchants at all. Scholars rely on murals and archaeology.' } }
        ]
      }
    },
    {
      doc: true, x: 17, y: 5, icon: '📖',
      name: { en: 'Two Empires of the Americas' }, role: { en: 'Reading' },
      src: { en: 'Adapted from "The Americas 1200–1450" by William H. Beezley, World History Project (Khan Academy)' },
      lines: [
        { en: 'In 1325 the Aztecs, often called the Mexica, began to build Tenochtitlan on an island in a lake in the Valley of Mexico. The need for food and for bodies for sacrifices pushed them to conquer neighboring peoples. They took prisoners and collected tribute: food, weaving, feathered art and precious stones. They made little attempt to integrate conquered peoples into their culture beyond demanding tribute.' },
        { en: 'The most successful and significant empire in the Americas in this period was the Inca. The ruler, the Sapa Inca, was the representative on Earth of Inti, the Sun god. Around 1250 the Inca began to expand through military conquest. They scattered some residents to other communities, sent in colonists, and forced conquered peoples to worship Inca gods, without giving up their own, and to pay tribute.' },
        { en: 'Inca rule relied on a network of officials and on roads that equaled or possibly surpassed Roman engineering. Chasqui runners carried orders up to 250 kilometers in one day, and from Cusco to Quito (1,500 km) within a week. Knotted strings called quipu kept records. In time the Inca ruled the Andes from today\'s Colombia into Argentina.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Comparison: which best explains why Inca rule tied conquered peoples to the state more closely than Mexica rule?' },
        choices: [
          { t: { en: 'Only the Inca collected tribute from them' }, why: { en: 'No. Both empires demanded tribute. The difference was what else each state did to conquered peoples.' } },
          { t: { en: 'The Inca let them rule without officials' }, why: { en: 'No. Inca rule relied on a network of officials, roads, runners and quipu records.' } },
          { ok: true, t: { en: 'The Inca moved people and imposed gods' }, why: { en: 'Yes. The Inca scattered residents, sent colonists and required worship of Inca gods. The Mexica mostly just took tribute.' } }
        ]
      }
    }
  ],
  houses: [
    { at: [10, 13], name: { en: 'Grandmother Citlali' }, look: { skin: 3, hair: '#8a8a8a', shirt: '#7a3a6a', robe: true, style: 'bun' },
      lines: [{ en: 'Music, dance and spoken poetry fill our evenings.' }, { en: 'I still remember the old tales of Aztlan, the home our ancestors left.' }] },
    { at: [14, 13], name: { en: 'Blade maker Itzcoatl' }, look: { skin: 4, hair: '#1a1008', shirt: '#4a4a5a', style: 'short' },
      lines: [{ en: 'I flake obsidian, a volcanic glass, into blades.' }, { en: 'Metal-working is rare here. Obsidian makes our sharpest tools and weapons.' }] },
    { at: [25, 10], name: { en: 'Merchant\'s wife Tlazohtli' }, look: { skin: 2, hair: '#120c08', shirt: '#c98a2a', robe: true, style: 'long' },
      lines: [{ en: 'My husband leads carriers far beyond the empire\'s border.' }, { en: 'Rich pochteca hide their wealth. Showing it off would anger the nobles.' }] }
  ],
  signs: [
    { x: 9, y: 7, text: { en: 'GREAT TEMPLE · A pyramid in the Mesoamerican style, home of the priests and their rituals.' } },
    { x: 9, y: 9, text: { en: 'TENOCHTITLAN · Founded in 1325 on an island in a lake in the Valley of Mexico.' } },
    { x: 27, y: 7, text: { en: 'MARKET · Tens of thousands of people visit the great market at Tlatelolco every day.' } },
    { x: 19, y: 11, text: { en: 'CHINAMPAS · Gardens raised in the shallow lake. Canals run between the beds.' } }
  ],
  finds: [
    { clueAt: [26, 11], at: [28, 13], decor: 'gem', clue: { en: 'From this note, walk 2 steps east and 2 steps south, past the end of the canal.' },
      text: { en: 'A green jade bead! Jade was one of the light luxury goods that pochteca carried across Mesoamerica.' } }
  ],
  scraps: [[1, 1], [28, 2], [28, 19]],
  smudges: [[25, 7], [13, 18]],
  quest: {
    stat: 'reg',
    title: { en: 'The Featherworker\'s Bundle' },
    giver: {
      x: 20, y: 2, name: { en: 'Papalotl' }, role: { en: 'Featherworker' },
      look: { skin: 4, hair: '#120c08', shirt: '#2a8a6a', robe: true, style: 'long' },
      lines: [
        { en: 'I make feathered art for nobles and priests. Quetzal feathers are light and costly, so pochteca carry them from far away.' },
        { en: 'The Grump\'s helpers blew my bundle of feathers away! Ask the porter by the west shore. She watches everything that moves.' }
      ],
      wait: { en: 'The porter rests on the west shore of the island, south of the big avenue, by the dock.' },
      thanks: { en: 'My feathers! Feathered art is also tribute that conquered towns must send. Thank you.' }
    },
    contact: {
      x: 8, y: 15, name: { en: 'Nenetl' }, role: { en: 'Porter' },
      look: { skin: 5, hair: '#1a1008', shirt: '#a8742a', pants: '#3a3a2a', style: 'bun' },
      lines: [
        { en: 'I carry salt and cotton short distances on my back. Only light luxury goods travel far.' },
        { en: 'The wind blew the feathers west. Cross the bridge west to the lakeshore, then walk 3 steps north.' }
      ]
    },
    action: {
      type: 'find', at: [3, 5],
      hint: { en: 'Cross the west bridge, then 3 steps north' },
      found: { en: 'There, caught in the grass on the lakeshore: Papalotl\'s bright green quetzal feathers.' },
      item: { icon: '🪶', name: { en: 'Papalotl\'s quetzal feathers' } }
    }
  },
  challenge: {
    at: [14, 10], type: 'sort', stat: 'hei',
    title: { en: 'Compare the Americas' },
    intro: { en: 'The Grump scrambled the record of the Americas, 1200–1450. Sort each card: the Mexica, the Inca, or another American society.' },
    bins: [
      { id: 'mex', icon: '🦅', label: { en: 'Mexica (Aztec)' }, sub: { en: 'Valley of Mexico' } },
      { id: 'inca', icon: '☀️', label: { en: 'Inca' }, sub: { en: 'Andes Mountains, capital Cusco' } },
      { id: 'other', icon: '🌎', label: { en: 'Other societies' }, sub: { en: 'Haudenosaunee, Maya, Mississippian' } }
    ],
    items: [
      { bin: 'mex', t: { en: 'The capital rises on an island in a lake, starting in 1325.' }, why: { en: 'That is Tenochtitlan, the Mexica capital, fed by chinampa gardens.' } },
      { bin: 'mex', t: { en: 'Conquered peoples pay tribute, but the state does little to change them.' }, why: { en: 'The Mexica demanded tribute and made little attempt to integrate conquered peoples.' } },
      { bin: 'mex', t: { en: 'Pochteca merchants trade luxury goods and spy on rival lands.' }, why: { en: 'Mexica trade and conquest went together: merchants gathered information for the empire.' } },
      { bin: 'inca', t: { en: 'The [[sapa inca|Sapa Inca]] rules as the representative of Inti, the Sun god.' }, why: { en: 'The Inca ruler\'s power came from religion: the Inca believed they were children of the Sun.' } },
      { bin: 'inca', t: { en: '[[chasqui|Chasqui]] runners carry orders on fine roads; [[quipu|quipu]] keep records.' }, why: { en: 'Inca rule relied on officials and roads that rivaled Rome\'s. Runners could go 250 km in a day.' } },
      { bin: 'inca', t: { en: 'Conquered villagers are moved away, and they must also worship the state\'s gods.' }, why: { en: 'The Inca moved people, sent in colonists and added their gods. They tied conquered peoples in more than the Mexica.' } },
      { bin: 'other', t: { en: 'Five warring nations pledge peace and unite under the Great Tree of Peace.' }, why: { en: 'The Haudenosaunee formed a [[confederation|confederation]], the Five Nations. They built unity by agreement, not conquest.' } },
      { bin: 'other', t: { en: 'A Maya city in Yucatán trades cotton and salt, then is abandoned about 1450.' }, why: { en: 'Mayapan was the Maya cultural and political center from 1250 to 1450.' } },
      { bin: 'other', t: { en: 'Builders raise massive earthen mounds for religious and political gatherings.' }, why: { en: 'Mississippian societies built mounds. Their trade reached from Wisconsin to the Gulf of Mexico.' } }
    ],
    success: { en: 'Every card is home! The Mexica and the Inca both built tribute empires by conquest, but the Inca tied conquered peoples in more closely.' }
  },
  boss: {
    at: [28, 15], stat: 'loc', need: 3,
    name: { en: 'The Lake Fog Grump' },
    appear: { en: 'The Lake Fog Grump is hiding beyond the chinampas, out over the water.' },
    taunt: { en: 'Conquest, tribute, gardens on a lake. Let it all sink quietly into the fog.' },
    win: { en: 'The fog lifts off the lake. The page on the Americas floats down into your hands.' },
    questions: [
      {
        stim: { text: { en: 'The need for food and bodies for sacrifices pushed the Aztecs on campaigns to conquer neighboring peoples. ... The Aztecs made little attempt to integrate these people into their culture beyond demanding tribute.' }, src: { en: 'Adapted from "The Americas 1200–1450" by William H. Beezley, World History Project' } },
        q: { en: 'The excerpt best supports which claim about Mexica state building?' },
        choices: [{ en: 'Conquest aimed to spread Mexica culture widely' }, { en: 'Religious and economic needs drove conquest' }, { en: 'Long-distance trade replaced the need for war' }, { en: 'Conquered towns became full Mexica members' }],
        answer: 1,
        why: { en: 'Wars brought tribute such as food, and prisoners for human sacrifice. The Mexica did little to change conquered peoples, so spreading their culture was not the goal.' }
      },
      {
        stim: { title: { en: 'Ruling conquered peoples' }, rows: [[{ en: 'State' }, { en: 'What it did' }], [{ en: 'Mexica' }, { en: 'Demanded tribute; little attempt to integrate them' }], [{ en: 'Inca' }, { en: 'Demanded tribute; scattered residents, sent colonists, required worship of Inca gods' }]], src: { en: 'From "The Americas 1200–1450," World History Project' } },
        q: { en: 'Compared with the Mexica approach shown in the table, the Inca approach...' },
        choices: [{ en: 'took tribute but left local gods untouched' }, { en: 'relied less on tribute, more on markets' }, { en: 'integrated peoples more by moving them' }, { en: 'gave up conquest for a confederation' }],
        answer: 2,
        why: { en: 'Both took tribute. The Inca went further: they resettled people, sent colonists and required worship of Inca gods (alongside local ones). A confederation was the Haudenosaunee way.' }
      },
      {
        stim: { text: { en: 'Kenneth Hirth claims that "Mesoamerica had the worst transportation system in the ancient world." But Hirth notes that nonetheless, Mesoamerica developed active long-distance exchange networks and huge markets.' }, src: { en: 'From "Long-Distance Trade in the Americas" by Bennett Sherry, World History Project' } },
        q: { en: 'Which of the following best explains why long-distance trade in Mesoamerica centered on luxury goods?' },
        choices: [{ en: 'People, not animals or ships, carried goods' }, { en: 'Inca roads linked it to Andean markets' }, { en: 'Maya rulers banned the salt and cotton trade' }, { en: 'Llama caravans could carry only light loads' }],
        answer: 0,
        why: { en: 'Mesoamerica had no pack animals, no sailing ships and few navigable rivers. Merchants carried goods on their backs, so only light, costly goods traveled far. Llamas lived only in the Andes.' }
      },
      {
        stim: { text: { en: 'Pochteca also carried information. They acted as spies for the empire, gathering information about rivals, which the Aztecs used for military expansion.' }, src: { en: 'From "Long-Distance Trade in the Americas" by Bennett Sherry, World History Project' } },
        q: { en: 'The excerpt most directly reflects which feature of the Aztec Empire?' },
        choices: [{ en: 'Merchants formed the empire\'s ruling class' }, { en: 'Trade networks ended the need for war' }, { en: 'Merchants were barred from leaving it' }, { en: 'Trade and conquest supported each other' }],
        answer: 3,
        why: { en: 'Pochteca gathered news of rivals that the empire used to plan conquests. Merchants were not the ruling class, and they traveled far beyond the border.' }
      },
      {
        stim: { text: { en: 'Few written sources survive. Teotihuacan left no records, and Spanish colonizers later burned many Maya records. Merchants were not part of the ruling class. Scholars rely on murals of market scenes and on archaeology.' }, src: { en: 'Adapted from "Long-Distance Trade in the Americas," World History Project' } },
        q: { en: 'The passage best supports the claim that historians\' older view of trade in the Americas...' },
        choices: [{ en: 'came mostly from merchants\' own diaries' }, { en: 'was proven by full Maya written archives' }, { en: 'was shaped by sources on the ruling class' }, { en: 'rested on Spanish records of Inca markets' }],
        answer: 2,
        why: { en: 'The sources that survive focus on the ruling class, not merchants, so scholars long assumed trade was limited. Murals and archaeology show it was not.' }
      },
      {
        stim: { title: { en: 'Inca messengers' }, rows: [[{ en: 'Measure' }, { en: 'Distance' }], [{ en: 'A chasqui runner in one day' }, { en: 'up to 250 km' }], [{ en: 'Cusco to Quito, within a week' }, { en: '1,500 km' }]], src: { en: 'From "The Americas 1200–1450," World History Project' } },
        q: { en: 'The data best support the claim that the Inca state...' },
        choices: [{ en: 'reached far provinces mainly by sea' }, { en: 'used roads and runners to rule a vast land' }, { en: 'left far villages to rule with no orders' }, { en: 'kept records in picture-written books' }],
        answer: 1,
        why: { en: 'Chasqui runners on roads that rivaled Roman engineering carried orders across the Andes. The Inca kept records with quipu; picture-written account books were Mexica.' }
      },
      {
        stim: { text: { en: 'Iroquois chiefs of the Seneca, Cayuga, Onondaga, Oneida, and Mohawk—who had often been in deadly conflict with each other—pledged to live in peace and to unite in a confederation.' }, src: { en: 'From "The Americas 1200–1450" by William H. Beezley, World History Project' } },
        q: { en: 'Compared with the Mexica, the Haudenosaunee described in the excerpt built unity mainly through...' },
        choices: [{ en: 'tribute paid by the conquered towns' }, { en: 'resettling villagers and colonists' }, { en: 'a sun god and his ruler on Earth' }, { en: 'a pledge of peace among five nations' }],
        answer: 3,
        why: { en: 'Five nations pledged peace and formed a confederation under the Great Tree of Peace. Tribute was Mexica; resettlement and the Sun god\'s ruler were Inca.' }
      },
      {
        q: { en: 'Which of the following best explains how Tenochtitlan supported a population larger than London, Paris or Madrid?' },
        choices: [{ en: 'Chinampa gardens raised in the lake' }, { en: 'Terraced fields on Andean slopes' }, { en: 'Maize shipped in by Maya canoes' }, { en: 'Llama caravans bringing in grain' }],
        answer: 0,
        why: { en: 'Chinampas turned the shallow lake into farmland, and short-distance trade brought staples. Terraces and llamas belonged to the Andes; Maya canoes carried luxuries.' }
      }
    ]
  },
  learned: [
    { en: 'The [[mexica|Mexica]] built a tribute [[empire|empire]] from Tenochtitlan by conquest; war brought [[tribute|tribute]] and captives for [[human sacrifice|sacrifice]].' },
    { en: '[[chinampa|Chinampas]] fed a city bigger than any in Europe, and [[pochteca|pochteca]] carried [[luxury goods|luxury goods]] across [[mesoamerica|Mesoamerica]] on their backs.' },
    { en: 'The Inca also ruled by conquest and tribute, but tied conquered peoples in more; others, like the Haudenosaunee, chose a [[confederation|confederation]].' }
  ],
  reflect: {
    q: { en: 'AP practice: Explain one similarity and one difference in how the Mexica and the Inca ruled conquered peoples.' },
    starter: { en: 'One similarity is that both states' }
  }
};
