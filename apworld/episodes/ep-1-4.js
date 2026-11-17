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
    { en: 'Talk to the 4 people here, help a featherworker, then wake the time stone.' }
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
        { en: 'Early in this century, our city joined two other city-states in an alliance. Together we built an [[empire|empire]].' },
        { en: 'We march on neighboring peoples. Conquered towns must send [[tribute|tribute]]: food, woven cloth, feathered art and precious stones.' },
        { en: 'We also take prisoners of war. Priests offer them in [[human sacrifice|human sacrifice]] at the temple. They teach that blood holds off the end of the world.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Which best explains why the Mexica went on campaigns to conquer their neighbors?' },
        choices: [
          { ok: true, t: { en: 'To win tribute and captives for sacrifice' }, why: { en: 'Yes. The need for food and goods, and for prisoners to sacrifice, drove Mexica conquest. State and religion worked together.' } },
          { t: { en: 'To spread their language to every people' }, why: { en: 'No. The Mexica made little attempt to change conquered peoples. They mainly demanded tribute.' } },
          { t: { en: 'To win gold for trade with Europe' }, why: { en: 'No. The Americas and Afro-Eurasia were not yet connected. That came about 1500.' } }
        ]
      }
    },
    {
      x: 22, y: 7, name: { en: 'Cuauhtli' }, role: { en: 'Pochteca merchant' },
      look: { skin: 4, hair: '#1a1008', shirt: '#2f7f8f', pants: '#5a4630', style: 'short' },
      lines: [
        { en: 'I am one of the [[pochteca|pochteca]], the Mexica merchants. Yacatecuhtli, our god of commerce, protects us on the road.' },
        { en: 'We have no pack animals and no sailing ships. So we carry [[luxury goods|luxury goods]] on our backs: turquoise, quetzal feathers, cacao, jade.' },
        { en: 'We also carry news. What we learn about rival lands helps the empire plan its next conquest.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why did pochteca carry mostly light, costly goods on long journeys?' },
        choices: [
          { ok: true, t: { en: 'People carried goods on their backs' }, why: { en: 'Right. With no pack animals and few navigable rivers, only light goods of high value were worth a long walk.' } },
          { t: { en: 'Nobles banned trade in food and salt' }, why: { en: 'No. Staples like salt, grain and cotton were traded too, but over shorter distances.' } },
          { t: { en: 'Big ships carried the heavy goods' }, why: { en: 'No. Mesoamerican societies did not develop sailing technology.' } }
        ]
      }
    },
    {
      x: 12, y: 15, name: { en: 'Tochtli' }, role: { en: 'Scribe' },
      look: { skin: 2, hair: '#2a1a10', shirt: '#e8dcc0', pants: '#6a4a2a', robe: true, style: 'short' },
      lines: [
        { en: 'Priests, officials and merchants all need careful records. I paint account books and calendars in a writing made of pictures.' },
        { en: 'This book lists the [[tribute|tribute]] of conquered towns. We take their goods, but we do little to make them Mexica.' },
        { en: 'Our calendar runs in 52-year cycles. Priests warn that the end of a cycle could bring the end of the world.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'What does Tochtli\'s tribute book show about how the Mexica ruled their empire?' },
        choices: [
          { ok: true, t: { en: 'They took tribute but changed little' }, why: { en: 'Yes. The Mexica demanded tribute and made little attempt to bring conquered peoples into their culture.' } },
          { t: { en: 'They ruled with no written records' }, why: { en: 'No. Priests, officials and merchants kept account books, calendars and records in picture writing.' } },
          { t: { en: 'They made every town adopt Mexica gods' }, why: { en: 'No. The Mexica mostly left conquered peoples alone, as long as the tribute came.' } }
        ]
      }
    },
    {
      x: 20, y: 15, name: { en: 'Xochitl' }, role: { en: 'Chinampa farmer' },
      look: { skin: 3, hair: '#120c08', shirt: '#4f8a3a', pants: '#3a2a20', style: 'bun' },
      lines: [
        { en: 'Our founders were told to look for a sign: an eagle with a snake, on a cactus. They saw it on this lake island, in 1325.' },
        { en: 'Island land is scarce. So we build [[chinampa|chinampas]], gardens raised up in the shallow lake, with canals between them.' },
        { en: 'Our gardens feed a huge city. Tenochtitlan has over 200,000 people, more than any city in Europe.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'How did the Mexica adapt to building a great city on a lake island?' },
        choices: [
          { ok: true, t: { en: 'They built chinampa gardens in the lake' }, why: { en: 'Yes. Chinampas made the lake into farmland and fed a city larger than any in Europe.' } },
          { t: { en: 'They cut terraces into high mountains' }, why: { en: 'No. Terraces were the Inca way to farm in the Andes. The Mexica farmed the lake itself.' } },
          { t: { en: 'They brought all food in by ship' }, why: { en: 'No. Mesoamerica had no sailing ships. The city grew much of its own food in chinampas.' } }
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
        stim: { text: { en: 'The need for food and for bodies for sacrifices pushed the Aztecs on campaigns to conquer neighboring peoples.' }, src: { en: 'Adapted from "The Americas 1200–1450," World History Project' } },
        q: { en: 'The excerpt best supports which claim about the Mexica state?' },
        choices: [{ en: 'Religion and tribute drove its growth' }, { en: 'Trade with Europe drove its expansion' }, { en: 'It grew mostly by peaceful agreements' }, { en: 'It expanded to spread one language' }],
        answer: 0,
        why: { en: 'Mexica wars brought tribute, such as food, and prisoners for human sacrifice. State power and religion were tied together.' }
      },
      {
        stim: { title: { en: 'Ruling conquered peoples' }, rows: [[{ en: 'State' }, { en: 'What it did' }], [{ en: 'Mexica' }, { en: 'Demanded tribute; little attempt to integrate them' }], [{ en: 'Inca' }, { en: 'Demanded tribute; moved people, sent colonists, added Inca gods' }]], src: { en: 'From "The Americas 1200–1450," World History Project' } },
        q: { en: 'The table best supports which comparison?' },
        choices: [{ en: 'Both took tribute; the Inca integrated more' }, { en: 'Neither state took any tribute at all' }, { en: 'The Mexica integrated conquered peoples more' }, { en: 'Both left conquered peoples completely free' }],
        answer: 0,
        why: { en: 'Both were tribute empires. The Inca moved people, sent colonists and required worship of Inca gods; the Mexica mostly just collected tribute.' }
      },
      {
        stim: { text: { en: '"Mesoamerica had the worst transportation system in the ancient world."' }, src: { en: 'Kenneth Hirth, archaeologist, quoted in "Long-Distance Trade in the Americas," World History Project' } },
        q: { en: 'Which feature of Mesoamerica best explains the archaeologist\'s claim?' },
        choices: [{ en: 'No pack animals, so people carried goods' }, { en: 'Huge fleets of sailing ships on the coast' }, { en: 'Camel caravans crossing wide deserts' }, { en: 'Iron railways linking all the cities' }],
        answer: 0,
        why: { en: 'Mesoamerica had no pack animals, no sailing ships and few navigable rivers. Merchants like the pochteca carried goods on their backs.' }
      },
      {
        stim: { text: { en: 'Pochteca also carried information. They acted as spies for the empire, gathering information about rivals.' }, src: { en: 'Adapted from "Long-Distance Trade in the Americas," World History Project' } },
        q: { en: 'The excerpt best shows that, for the Mexica, long-distance trade was...' },
        choices: [{ en: 'linked to the state\'s military expansion' }, { en: 'forbidden by the rulers of the empire' }, { en: 'only for food like maize and salt' }, { en: 'run entirely by merchants from the Inca' }],
        answer: 0,
        why: { en: 'Merchants gathered intelligence that the Mexica used to plan conquests. Trade and state building went together.' }
      },
      {
        q: { en: 'Which development best explains how Tenochtitlan fed a population larger than any city in Europe?' },
        choices: [{ en: 'Chinampa gardens raised in the lake' }, { en: 'Terraced fields on Andean mountains' }, { en: 'Wheat brought over from Europe' }, { en: 'Grain shipped in on big sailboats' }],
        answer: 0,
        why: { en: 'Chinampas turned the shallow lake into farmland. Terraces were the Inca way of farming high in the Andes.' }
      },
      {
        stim: { title: { en: 'Inca messengers' }, rows: [[{ en: 'Measure' }, { en: 'Distance' }], [{ en: 'A chasqui runner in one day' }, { en: 'up to 250 km' }], [{ en: 'Cusco to Quito, in about a week' }, { en: '1,500 km' }]], src: { en: 'From "The Americas 1200–1450," World History Project' } },
        q: { en: 'The data best show how the Inca state...' },
        choices: [{ en: 'used roads and runners to rule a vast land' }, { en: 'had no contact with its far provinces' }, { en: 'sent its messages mostly by sailing ship' }, { en: 'let each village rule itself with no orders' }],
        answer: 0,
        why: { en: 'Chasqui runners on well-built roads carried orders across the Andes. Roads, officials and quipu records held the empire together.' }
      },
      {
        q: { en: 'Which statement best compares the Haudenosaunee with the Mexica?' },
        choices: [{ en: 'One united by a peace pledge, one by conquest' }, { en: 'Both built empires by conquering neighbors' }, { en: 'Both had capitals on islands in lakes' }, { en: 'Neither had any kind of government' }],
        answer: 0,
        why: { en: 'Five Haudenosaunee nations pledged peace and formed a confederation. The Mexica built a tribute empire by war.' }
      },
      {
        q: { en: 'Why did the Mexica keep account books, calendars and records in picture writing?' },
        choices: [{ en: 'Priests and officials needed records' }, { en: 'Spanish rulers ordered them to write' }, { en: 'Only farmers could read and write' }, { en: 'Records were sold as luxury goods' }],
        answer: 0,
        why: { en: 'Running an empire, its tribute, its trade and its 52-year calendar needed accurate records, so the Mexica kept them.' }
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
