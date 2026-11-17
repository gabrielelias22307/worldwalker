/* HISTORYWALKER · Episode 4.3 · The Columbian Exchange (AP World Topic 4.3, c. 1450–1750)
   Mexico City, New Spain, in 1570, about fifty years after Cortés sacked Tenochtitlan.
   Content source: Khan Academy, AP World History (World History Project), Unit 4 Lesson "Columbian Exchange | 4.3":
   "The Columbian Exchange" (Eman M. Elshaikh), "Crops that Grew the World" (Bennett Sherry),
   "The Disastrous Effects of Increased Global Interactions c. 1500 to c. 1600" (Sharon Cohen),
   "Religious Syncretism in Colonial Mexico City" (Bennett Sherry), and the unit overview
   "Unit 4 Introduction: Transoceanic Interconnections 1450 to 1750" (Trevor Getz).
   World History Project content is CC BY-NC 4.0. Facts here come from those readings. English only, AP level.
   Hard history (conquest, epidemics, slavery) is told plainly and with care. */
window.EPISODE = {
  id: '4.3',
  realm: 4,
  sol: 'AP 4.3',
  style: 'mesoamerica',
  weather: { sky: 'clear', time: 'sunset' },
  title: { en: 'The Columbian Exchange' },
  place: { en: 'Mexico City, New Spain, 1570' },
  intro: [
    { en: 'The Void blurred the page on the Columbian Exchange. Mexico City is forgetting what crossed the ocean, and what it cost.' },
    { en: 'Talk to the 4 people here and read the 2 sources on their stands. Help a cook find flour, then wake the time stone.' }
  ],
  scenes: {
    at: [-99.13, 19.43],
    year: 1570,
    start: [
      { en: 'In 1521, Spanish conquistadors led by Hernán Cortés sacked Tenochtitlan, the Aztec capital, and renamed it Mexico City.' },
      { en: 'Ships now link Mexico and Spain. Plants, animals, people and diseases cross the Atlantic: the Columbian Exchange.' },
      { en: 'Diseases from Afro-Eurasia have killed millions of Native people in Mexico since the Spanish arrived.' }
    ],
    guess: {
      q: { en: 'Before 1492, did anyone in Europe eat tomatoes or potatoes?' },
      choices: [{ t: { en: '🍅 No, never' }, ok: true }, { t: { en: '🥔 Yes, often' } }],
      why: { en: 'Tomatoes and potatoes grew only in the Americas until the Columbian Exchange carried them across the ocean.' }
    },
    page: { en: 'Today the Basilica of Our Lady of Guadalupe, at Tepeyac, draws about 20 million visitors a year.' },
    next: {
      q: { en: 'Next: Maritime Empires Established. Did European states build empires across the oceans?' },
      choices: [{ t: { en: 'Yes, they did' }, ok: true }, { t: { en: 'No, they stayed home' } }],
      why: { en: 'The Columbian Exchange let Europeans build transoceanic empires with large colonies in the Americas. You go there next.' }
    }
  },
  start: [16, 10],
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT',
    'TKKKK..QQQ...,.T.DDDDDDD..RRRR.T',
    'TKKK...hdh.....T.DDDDDDD..hhdh.T',
    'TKK..x..:......T.DDDdDDD..x.:..T',
    'T~~~~~~~B~~~~~~~llllllllllllll.T',
    'T~~~~~~~B~~~~~~~llllllllllllll.T',
    'T.......:.......llllllllllllll.T',
    'T.RRR...:..RRR..llllllllllllll.T',
    'T.hdh...:..hdh..llllllllllllll.T',
    'T.:::::::::::...llllllllllllll.T',
    'T.......:.......l..............T',
    'T.FFFFFF:.......l............~~T',
    'T.F....F:.......l.mmm.mmm....~~T',
    'T.F....F:.......llllllllllll.~~T',
    'T.F....F:.......l.mmm.mmm....~~T',
    'T.FF.FFF:.......llllllllllllk~~T',
    'T.......:.......l.........,.k~~T',
    'T.......::::::::l.....RRRR..k~~T',
    'T.wwwww.wwwww.x.l.....hhdh...~~T',
    'T.wwwww.wwwww...l::::::::::::bbT',
    'T.....,......T..l.....,....x.~~T',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT'
  ],
  words: {
    'columbian exchange': { en: 'the movement of plants, animals, people, diseases and ideas between the Americas and Afro-Eurasia after 1492' },
    'afro-eurasia': { en: 'the connected continents of Africa, Europe and Asia' },
    'smallpox': { en: 'a deadly disease from Afro-Eurasia that was new to the Americas and killed millions there' },
    'immunity': { en: 'the body\'s resistance to a disease, often built up over many generations of living with it' },
    'great dying': { en: 'the huge drop in Native American population after 1492, caused mainly by new diseases' },
    'mestizo': { en: 'the Spanish colonial label for a person with Spanish and Native American parents' },
    'staple crop': { en: 'a main food crop that feeds many people, like maize, potatoes or cassava' },
    'cash crop': { en: 'a crop grown to sell for profit, like sugar, tobacco or cacao' },
    'plantation': { en: 'a huge farm growing one cash crop, worked by forced labor, often enslaved Africans' },
    'missionary': { en: 'a person who travels to a foreign place to spread their religion' },
    'encomienda': { en: 'a Spanish colonial labor system that controlled Indigenous American workers; a form of enslavement' },
    'religious syncretism': { en: 'the blending of belief systems from two or more places into something new' }
  },
  npcs: [
    {
      x: 6, y: 10, name: { en: 'Teresa' }, role: { en: 'Nahua painter' },
      look: { skin: 3, hair: '#1b1410', shirt: '#b8452a', style: 'long' },
      lines: [
        { en: 'Nahua artists like me paint every picture in a book edited by the Spanish priest Bernardino de Sahagún. My page shows the effects of [[smallpox|smallpox]].' },
        { en: 'Smallpox, measles, mumps and influenza came with the Spanish. We had never met them, so our bodies had no [[immunity|immunity]]. Most Spaniards had some.' },
        { en: 'When Cortés invaded in 1519, 25 to 30 million people lived in Mexico. Fifty years later, about 3 million are left.' },
        { en: 'War and forced labor killed many of us. But almost all of this loss came from disease. Whole towns stand empty.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Which best explains why Afro-Eurasian diseases killed so many Native people in Mexico?' },
        choices: [
          { ok: true, t: { en: 'They had never met these germs before' }, why: { en: 'Yes. With few domesticated herd animals, the source of smallpox and measles, the Americas had never had these diseases. People had no immunity.' } },
          { t: { en: 'The Spanish spread disease on purpose' }, why: { en: 'No. The readings call the epidemics an unintended result of contact. Europeans carried germs they had some resistance to.' } },
          { t: { en: 'Famine had already weakened the cities' }, why: { en: 'No. Before contact, cities like Tenochtitlan and Cusco were among the largest in the world. Almost all the loss came from disease.' } }
        ]
      }
    },
    {
      x: 5, y: 13, name: { en: 'Diego' }, role: { en: 'Cattle herder' },
      look: { skin: 2, hair: '#2b1d14', shirt: '#7a5a2a', pants: '#3a2a1a', hat: '#a8824a', style: 'short' },
      lines: [
        { en: 'My father came from Spain and my mother is Nahua. The colonial government labels me [[mestizo|mestizo]]. People of African and Spanish parents it labels mulatto.' },
        { en: 'Before 1492, the only large domesticated animals here were llamas and alpacas, far south. The Spanish brought horses, cattle, sheep, goats and pigs.' },
        { en: 'I herd cattle for meat, tallow and hides. Up north, people now hunt buffalo on horseback.' },
        { en: 'But cattle eat and trample native plants. And the Spanish replace native crops with wheat, barley and sorghum.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Which best describes a change the exchange brought to the land of Mexico?' },
        choices: [
          { ok: true, t: { en: 'New animals and crops pushed out native plants' }, why: { en: 'Yes. Cattle destroyed indigenous plants, and the Spanish replaced native crops with wheat, barley and sorghum.' } },
          { t: { en: 'Maize and potatoes replaced the native wheat' }, why: { en: 'No. Maize and potatoes are American crops. Wheat came from Afro-Eurasia with the Spanish.' } },
          { t: { en: 'Llamas spread north and became the main herd' }, why: { en: 'No. Llamas and alpacas lived far to the south. The new herds in Mexico were Afro-Eurasian cattle, sheep, goats and pigs.' } }
        ]
      }
    },
    {
      x: 21, y: 11, name: { en: 'Alonso' }, role: { en: 'Spanish merchant' },
      look: { skin: 0, hair: '#4a3020', shirt: '#2a4a7a', pants: '#2a2a3a', hat: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'My ships carry maize, tomatoes, chili peppers and turkeys east. The English think turkeys come from Turkey; the Turks think India. They come from Mexico!' },
        { en: 'Maize and the potatoes of Peru are [[staple crop|staple crops]], rich in calories. Potatoes grow where it is too dry for rice or too wet for wheat.' },
        { en: 'Sugar is our richest [[cash crop|cash crop]]. Portuguese settlers grew rich on it in the Madeira Islands in the 1420s. Columbus carried Madeira sugarcane west in 1492.' },
        { en: 'Now sugar grows on Hispaniola. With so many Native people dead, Europeans force enslaved Africans across the ocean to work the cane.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Compared with its effect on the Americas, the exchange\'s effect on Afro-Eurasia\'s population was…' },
        choices: [
          { ok: true, t: { en: 'growth, fed by American staple crops' }, why: { en: 'Right. Calorie-rich maize, potatoes and cassava fed growing populations, while epidemics killed millions of Native Americans.' } },
          { t: { en: 'a sharp fall from new American diseases' }, why: { en: 'No. Very few diseases traveled west to east. Some historians argue syphilis did, but the evidence is not conclusive.' } },
          { t: { en: 'little change, since few crops sailed east' }, why: { en: 'No. Many crops sailed east: maize, potatoes, tomatoes, chili peppers, cacao. They changed diets and populations.' } }
        ]
      }
    },
    {
      x: 3, y: 3, name: { en: 'Juana' }, role: { en: 'Nahua pilgrim' },
      look: { skin: 4, hair: '#1b1410', shirt: '#3a7a8a', robe: true, style: 'bun' },
      lines: [
        { en: 'Before the Spanish, my grandmother climbed this hill of Tepeyac to pray to Tonantzin, a mother goddess and protector.' },
        { en: 'Catholic [[missionary|missionaries]] burned our temples, symbols and books. They built churches over the ruins, using stones from the old pyramids.' },
        { en: 'Sickness killed us but spared most Spaniards, so many wondered if the old gods still protected us. Some converted willingly; some sought the priests\' protection.' },
        { en: 'In 1531, they say, the Virgin spoke Nahuatl to Juan Diego here. Many call her Tonantzin still. That is [[religious syncretism|religious syncretism]].' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'The shrine at Tepeyac most directly reflects which development in New Spain?' },
        choices: [
          { ok: true, t: { en: 'Native and Catholic beliefs blending' }, why: { en: 'Yes. Converts prayed at the same site, for the same reasons, to a figure who blended the Virgin Mary and Tonantzin.' } },
          { t: { en: 'A full rejection of Catholic teaching' }, why: { en: 'No. Many converted. Missionaries, to their frustration, found images of Jesus and Mary beside statues of Aztec gods.' } },
          { t: { en: 'Missionaries turning to Aztec gods' }, why: { en: 'No. Missionaries re-used some Native symbols, but they forced conversion to Catholicism and burned temples.' } }
        ]
      }
    },
    {
      doc: true, x: 13, y: 10, icon: '📜',
      name: { en: 'Smallpox at Plymouth' }, role: { en: 'Primary source' },
      src: { en: 'William Bradford, governor of the Plymouth colony, describing about 1634; quoted in "The Columbian Exchange," World History Project' },
      lines: [
        { en: '"This spring also, those Indians that lived about their trading house there, fell sick of the small pox and died most miserably; for a sorer disease cannot befall them, they fear it more than the plague. For usually they that have this disease have them in abundance. [...]"' },
        { en: '"The condition of this people was so lamentable [sad] and they fell down so generally of this disease as they were in the end not able to help one another, no not to make a fire nor to fetch a little water to drink, nor any to bury the dead."' },
        { en: '"But would strive as long as they could, and when they could procure [obtain] no other means to make fire, they would burn the wooden trays and dishes they ate their meat in, and their very bows and arrows. And some would crawl out on all fours to get a little water, and sometimes die by the way and not be able to get in again."' },
        { en: 'Context: William Bradford was a governor of the Plymouth colony, an English settlement in present-day Massachusetts. Around 1634 he described smallpox spreading through nearby Indigenous American communities. He wrote as an English colonial leader watching from outside; the sick people\'s own words are not recorded here. The same Afro-Eurasian diseases had already struck New Spain, where Nahua artists painted the effects of smallpox.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Sourcing: how does Bradford\'s point of view shape the value of this source?' },
        choices: [
          { ok: true, t: { en: 'A close witness, but an outsider\'s view' }, why: { en: 'Yes. As governor he saw the epidemic up close, but he wrote as an English colonist. We do not hear the sick people\'s own voices.' } },
          { t: { en: 'It proves colonists spread smallpox on purpose' }, why: { en: 'No. The excerpt describes suffering, not how the disease came. The readings call the epidemics an unintended result of contact.' } },
          { t: { en: 'It records the views of Native healers' }, why: { en: 'No. Bradford was an English colonial governor. The excerpt gives his observations, not the words of the Native people.' } }
        ]
      }
    },
    {
      doc: true, x: 24, y: 10, icon: '📖',
      name: { en: 'The Columbian Exchange' }, role: { en: 'Reading' },
      src: { en: 'Adapted from "The Columbian Exchange" by Eman M. Elshaikh, World History Project (Khan Academy)' },
      lines: [
        { en: 'Columbus\'s arrival in 1492 created large-scale connections between Eurasia, Africa and the Americas. This transfer of goods, people, microbes and ideas is called the Columbian Exchange. About 35 to 75 million people lived in the Americas, some in Tenochtitlan and Cusco, among the largest cities in the world. But they had few domesticated animals, the source of smallpox and measles, while Afro-Eurasians had thousands of generations to build resistance. Between 1492 and 1650, the Indigenous population fell rapidly.' },
        { en: 'With so few people, forests regrew and there was a shortage of labor. That need for labor contributed to the rise of the Atlantic slave trade, bringing even more diseases, like malaria and yellow fever. The Spanish [[encomienda|encomienda]] was a form of enslavement that controlled Indigenous labor. Settlers grew sugar, coffee, tobacco and cotton as cash crops; wheat thrived as a staple. Over a few hundred years, more than twelve million enslaved Africans were brought to the Americas. Sugar, the most important cash crop, centered on Hispaniola and the Caribbean.' },
        { en: 'Very few diseases traveled from west to east. But American crops such as potatoes, sweet potatoes, maize and cassava were rich in calories and quickly became staple crops. They grew even on land no one thought was useful. The potato thrived in the cold of northwestern Europe, became a common food in Ireland, and led to massive population growth and increasing urbanization. Millions of people moved from Afro-Eurasia to the Americas, both willingly and by force.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Causation: which chain of causes and effects best fits the reading?' },
        choices: [
          { ok: true, t: { en: 'Epidemics, then a labor shortage, then the slave trade' }, why: { en: 'Yes. Disease killed millions, leaving too few workers, and that need for labor contributed to the rise of the Atlantic slave trade.' } },
          { t: { en: 'The slave trade, then smallpox, then a labor shortage' }, why: { en: 'No, the order is reversed. Smallpox came first; the slave trade it helped cause later brought even more diseases, like malaria.' } },
          { t: { en: 'Wheat failed, so settlers turned to cash crops instead' }, why: { en: 'No. Wheat thrived in the Americas as a staple. Settlers grew cash crops like sugar because they sold for profit.' } }
        ]
      }
    }
  ],
  houses: [
    { at: [8, 2], name: { en: 'Shrine keeper Martín' }, look: { skin: 3, hair: '#7a7a7a', shirt: '#e0d8c0', robe: true, style: 'short' },
      lines: [{ en: 'People say the Virgin appeared on this hill to a Nahua man, Juan Diego, in 1531. She spoke Nahuatl.' }, { en: 'Her image shows a dark-skinned woman standing on the moon, wreathed by the sun. Those were sacred signs to the Aztecs too.' }] },
    { at: [20, 3], name: { en: 'Friar Andrés' }, look: { skin: 0, hair: '#5a4030', shirt: '#6a4a2a', robe: true, style: 'short' },
      lines: [{ en: 'This church was built with stones from the old temple of Tenochtitlan.' }, { en: 'We translate Catholic teaching into Nahuatl, and teach the sons of Nahua nobles in our schools.' }, { en: 'Friar Bartolomé de las Casas convinced the king to ban the enslavement and abuse of Native people.' }] },
    { at: [28, 2], name: { en: 'Doña Inés' }, look: { skin: 0, hair: '#3a2a1a', shirt: '#7a2a4a', robe: true, style: 'bun' },
      lines: [{ en: 'We brought wheat, sugar, citrus and bananas across the ocean to support our settlements.' }, { en: 'My husband came to make money quickly. He wants to sail home to Spain a rich man.' }] },
    { at: [3, 8], name: { en: 'Old Pablo' }, look: { skin: 3, hair: '#8a8a8a', shirt: '#4a6a3a', robe: true, style: 'short' },
      lines: [{ en: 'Teresa and I paint for the friar\'s book about our people. Nahua artists make all its pictures.' }, { en: 'One page shows the effects of smallpox. We paint it so no one forgets.' }] },
    { at: [12, 8], name: { en: 'Ana' }, look: { skin: 4, hair: '#1b1410', shirt: '#c08a2a', style: 'long' },
      lines: [{ en: 'We still grow maize, as our grandparents did.' }, { en: 'Sailors say maize now grows across the ocean, in Africa and in Asia.' }] },
    { at: [24, 18], name: { en: 'Clerk Hernando' }, look: { skin: 1, hair: '#2b1d14', shirt: '#4a4a6a', robe: true, style: 'short' },
      lines: [{ en: 'I write down every crate bound for Spain: cacao, tobacco, cattle hides.' }, { en: 'Europeans, Africans and Native people now have children together. New kinds of families live here.' }] }
  ],
  signs: [
    { x: 5, y: 3, text: { en: 'HILL OF TEPEYAC · North of the city. A shrine to Tonantzin once stood here. Now pilgrims honor the Virgin of Guadalupe.' } },
    { x: 26, y: 3, text: { en: 'PLAZA MAYOR · Once the heart of Tenochtitlan. Cortés sacked the city in 1521. A church rose from the temple\'s stones.' } },
    { x: 14, y: 18, text: { en: 'WHEAT FIELDS · Wheat came from Spain. The Spanish planted it where native crops once grew.' } },
    { x: 27, y: 20, text: { en: 'EAST CAUSEWAY · The road toward the coast, where ships sail east to Spain.' } }
  ],
  finds: [
    { clueAt: [26, 11], at: [26, 16], decor: 'flower', clue: { en: 'From this note, walk 5 steps south, toward the canoe docks.' },
      text: { en: 'A string of dried chili peppers! Native to Mexico, chili peppers would one day be a key part of Indian cooking.' } }
  ],
  scraps: [[30, 1], [1, 20], [14, 1]],
  smudges: [[26, 12], [11, 15]],
  quest: {
    stat: 'reg',
    title: { en: 'Flour for the Kitchen' },
    giver: {
      x: 30, y: 6, name: { en: 'Catalina' }, role: { en: 'Cook' },
      look: { skin: 3, hair: '#1b1410', shirt: '#d9822b', pants: '#5a3a2a', style: 'bun' },
      lines: [
        { en: 'I cook for a Spanish household. They want wheat bread like in Spain. At home, my family still eats maize.' },
        { en: 'Our flour is gone! Ask the canoe man at the docks, southeast of the plaza. Boatmen know who sells what.' }
      ],
      wait: { en: 'The canoe docks are southeast of the plaza, on the lake shore.' },
      thanks: { en: 'Wheat flour! Wheat came here from Spain, and cacao sails to Spain. Goods cross the ocean both ways now.' }
    },
    contact: {
      x: 28, y: 16, name: { en: 'Tomás' }, role: { en: 'Canoe boatman' },
      look: { skin: 5, hair: '#1b1410', shirt: '#e0d8c0', pants: '#4a4a3a', style: 'short' },
      lines: [
        { en: 'My canoe carries goods across the lake: wheat from the farms, cacao for the ships to Spain.' },
        { en: 'Farmer Pedro sells flour. Walk west along the street, then south to the wheat fields in the southwest.' }
      ]
    },
    action: {
      type: 'trade',
      trader: {
        x: 7, y: 18, name: { en: 'Pedro' }, role: { en: 'Wheat farmer' },
        look: { skin: 1, hair: '#6a4a2a', shirt: '#8a7a4a', pants: '#3a3a2a', hat: '#c9a24a', style: 'short' },
        lines: [
          { en: 'I grow wheat, a crop the Spanish brought across the ocean. It thrives in Mexican soil.' }
        ]
      },
      q: { en: 'I will trade flour for something to sell on the ships to Spain. Bring me a good Europe has never seen.' },
      choices: [
        { ok: true, at: [21, 14], icon: '🫘', t: { en: 'A sack of cacao beans' },
          why: { en: 'Yes! Cacao grows only in the Americas. Europeans turned it into a cash crop to sell across the ocean.' } },
        { at: [3, 14], icon: '🧶', t: { en: 'A bale of sheep\'s wool' },
          why: { en: 'Sheep came to Mexico from Afro-Eurasia with the Spanish. Wool is nothing new in Europe.' } },
        { at: [14, 7], icon: '🍊', t: { en: 'A basket of oranges' },
          why: { en: 'Citrus came to the Americas from Afro-Eurasia with the Spanish. Europe already knows it.' } }
      ],
      item: { icon: '🌾', name: { en: 'A sack of wheat flour' } }
    }
  },
  challenge: {
    at: [23, 7], type: 'carry', stat: 'hei',
    title: { en: 'What crossed the ocean?' },
    intro: { en: 'The Void mixed up the record of the [[columbian exchange|Columbian Exchange]]. Carry each card to the way it crossed the Atlantic: east to Afro-Eurasia, or west to the Americas.' },
    zones: [
      { bin: 'toae', x: 26, y: 5, w: 3, h: 4 },
      { bin: 'toam', x: 17, y: 5, w: 3, h: 4 }
    ],
    bins: [
      { id: 'toae', icon: '⛵', label: { en: 'To Afro-Eurasia' }, sub: { en: 'from the Americas, sailing east' } },
      { id: 'toam', icon: '🐎', label: { en: 'To the Americas' }, sub: { en: 'from Afro-Eurasia, sailing west' } }
    ],
    items: [
      { bin: 'toae', t: { en: 'Maize and potatoes' }, why: { en: 'American staple crops, rich in calories. Rulers found a field of potatoes could feed three times as many people as a field of wheat.' } },
      { bin: 'toae', t: { en: 'Tomatoes and chili peppers' }, why: { en: 'From the Americas. They became part of Italian and Indian cooking, as if they had always been there.' } },
      { bin: 'toae', t: { en: 'Cacao and tobacco' }, why: { en: 'American plants that Europeans turned into cash crops to sell abroad.' } },
      { bin: 'toae', t: { en: 'Turkeys' }, why: { en: 'The turkey is from Mexico. The English thought it came from Turkey, and the Turks thought it came from India.' } },
      { bin: 'toam', t: { en: 'Horses, cattle, sheep and pigs' }, why: { en: 'Before 1492, the only large domesticated animals in the Americas were llamas and alpacas.' } },
      { bin: 'toam', t: { en: 'Wheat, sugarcane and citrus' }, why: { en: 'Europeans brought these crops to feed their settlements and to grow for profit.' } },
      { bin: 'toam', t: { en: 'Smallpox and measles' }, why: { en: 'Afro-Eurasian diseases killed millions of Native Americans who had no immunity: the Great Dying.' } },
      { bin: 'toam', t: { en: 'Enslaved Africans, forced across the ocean' }, why: { en: 'After disease left too few workers, Europeans forced millions of enslaved Africans to work on American plantations.' } }
    ],
    success: { en: 'Every card is home. Crops from the Americas fed Afro-Eurasia, while diseases from Afro-Eurasia caused the [[great dying|Great Dying]] in the Americas.' }
  },
  boss: {
    at: [12, 2], stat: 'mov', need: 3,
    name: { en: 'The Void' },
    appear: { en: 'The Void waits quietly on the hill of Tepeyac.' },
    taunt: { en: 'So many died here. Let the city forget their names, and forget how it happened.' },
    win: { en: 'The Void closes. The page on the Columbian Exchange returns, and with it the memory of the people who lived it.' },
    questions: [
      {
        stim: { text: { en: '"The condition of this people was so lamentable [sad] and they fell down so generally of this disease as they were in the end not able to help one another, no not to make a fire nor to fetch a little water to drink, nor any to bury the dead."' }, src: { en: 'William Bradford, governor of the Plymouth colony, describing smallpox about 1634; quoted in "The Columbian Exchange," World History Project' } },
        q: { en: 'Which of the following best explains the conditions described in the excerpt?' },
        choices: [{ en: 'Native peoples had no immunity to Afro-Eurasian diseases' }, { en: 'Malaria and yellow fever arrived with the slave trade' }, { en: 'Spanish wheat fields had replaced Native food crops' }, { en: 'Syphilis spread from the Americas to Europe and back' }],
        answer: 0,
        why: { en: 'Smallpox was new to the Americas. With no immunity, whole communities fell sick at once. Malaria and yellow fever came later with the slave trade; syphilis\'s path is not proven.' }
      },
      {
        stim: { title: { en: 'Indigenous population of Mexico (estimates)' }, rows: [[{ en: 'Time' }, { en: 'People' }], [{ en: 'When Cortés invaded (1519)' }, { en: '25 to 30 million' }], [{ en: 'Fifty years later' }, { en: 'about 3 million' }]], src: { en: 'From "Unit 4 Introduction: Transoceanic Interconnections," World History Project' } },
        q: { en: 'Which of the following best explains the change shown in the table?' },
        choices: [{ en: 'The violence of the Spanish conquest of 1521' }, { en: 'Forced labor under the encomienda system' }, { en: 'Epidemics of diseases new to the Americas' }, { en: 'Migration of Native workers to Caribbean sugar' }],
        answer: 2,
        why: { en: 'Conquest and forced labor such as encomienda did kill people, but almost all of this loss came from Afro-Eurasian diseases like smallpox and measles: the Great Dying.' }
      },
      {
        stim: { text: { en: 'Very few diseases traveled from west to east. But American crops such as potatoes, sweet potatoes, maize and cassava were rich in calories and quickly became staple crops. The potato thrived in the cold of northwestern Europe.' }, src: { en: 'Adapted from "The Columbian Exchange" by Eman M. Elshaikh, World History Project' } },
        q: { en: 'The developments in the excerpt best help explain which of the following?' },
        choices: [{ en: 'The labor shortage that drove the Atlantic slave trade' }, { en: 'Population growth in Afro-Eurasia after 1500' }, { en: 'The spread of wheat and barley across the Americas' }, { en: 'The rise of sugar plantations on Hispaniola' }],
        answer: 1,
        why: { en: 'Calorie-rich American staple crops fed more people. A field of potatoes could feed three times as many as a field of wheat, so Afro-Eurasia\'s population rose.' }
      },
      {
        stim: { text: { en: 'Catholic missionaries, to their frustration, often found images of Jesus and the Virgin Mary alongside statues of Aztec and other indigenous gods.' }, src: { en: 'Adapted from "Religious Syncretism in Colonial Mexico City," World History Project' } },
        q: { en: 'The excerpt best supports the claim that, in New Spain,…' },
        choices: [{ en: 'missionaries adopted Aztec gods to win converts' }, { en: 'Native converts mixed Catholic and older beliefs' }, { en: 'most Nahua people refused to convert at all' }, { en: 'converts sought only the protection of priests' }],
        answer: 1,
        why: { en: 'Converts kept old gods beside new saints: religious syncretism. Missionaries were frustrated, not adopting Aztec gods. People converted for many reasons, not only protection.' }
      },
      {
        stim: { text: { en: 'With so few people, there was a shortage of labor. That need for labor contributed to the rise of the Atlantic slave trade, bringing even more diseases, like malaria and yellow fever.' }, src: { en: 'Adapted from "The Columbian Exchange" by Eman M. Elshaikh, World History Project' } },
        q: { en: 'Which of the following best describes the relationship shown in the excerpt?' },
        choices: [{ en: 'The slave trade caused the first epidemics in the Americas' }, { en: 'European settlers arrived in numbers that ended the labor shortage' }, { en: 'Population collapse helped cause a new forced migration' }, { en: 'Cash crop profits led Europeans to abandon forced labor' }],
        answer: 2,
        why: { en: 'Epidemics came first and caused the labor shortage. Europeans met it by forcibly bringing more than twelve million enslaved Africans to the Americas over a few hundred years.' }
      },
      {
        stim: { title: { en: 'Two directions of the exchange' }, rows: [[{ en: 'Sailing west, to the Americas' }, { en: 'Sailing east, to Afro-Eurasia' }], [{ en: 'Smallpox, measles, influenza' }, { en: 'Very few diseases' }], [{ en: 'Horses, cattle, sheep, pigs' }, { en: 'Turkeys' }], [{ en: 'Wheat, sugarcane, citrus' }, { en: 'Maize, potatoes, cassava, chili peppers' }]], src: { en: 'Based on "The Columbian Exchange" and "Crops that Grew the World," World History Project' } },
        q: { en: 'Compared with the Americas, Afro-Eurasia after 1500 most likely experienced…' },
        choices: [{ en: 'a great dying from diseases like syphilis' }, { en: 'growth fed by calorie-rich new crops' }, { en: 'a labor shortage met by encomienda' }, { en: 'native plants destroyed by Mexican herds' }],
        answer: 1,
        why: { en: 'Disease moved mostly west. American staple crops moved east and fed growing populations. Encomienda and cattle destroying plants were changes in the Americas.' }
      },
      {
        stim: { text: { en: 'European animals, especially cattle, destroyed indigenous plants. The Spanish replaced indigenous, or native, crops with wheat, barley, and sorghum.' }, src: { en: 'Adapted from "Crops that Grew the World" by Bennett Sherry, World History Project' } },
        q: { en: 'The excerpt most directly reflects which of the following?' },
        choices: [{ en: 'The spread of American staple crops to Afro-Eurasia' }, { en: 'Afro-Eurasian species reshaping American environments' }, { en: 'Population growth after potatoes reached Ireland' }, { en: 'The use of horses to hunt buffalo more efficiently' }],
        answer: 1,
        why: { en: 'Cattle, wheat, barley and sorghum all came from Afro-Eurasia and changed the land of the Americas. Horses changed hunting, but the excerpt is about plants.' }
      },
      {
        stim: { text: { en: 'The Spanish destroyed a shrine to an Aztec mother goddess and replaced it with a shrine to the mother of Jesus. Indigenous converts adopted the Lady of Guadalupe as their protector, and some still call her Tonantzin.' }, src: { en: 'Adapted from "Religious Syncretism in Colonial Mexico City," World History Project' } },
        q: { en: 'Which of the following was a continuity shown in the excerpt?' },
        choices: [{ en: 'Aztec priests kept authority beside the clergy' }, { en: 'Temples stood unchanged beside new churches' }, { en: 'Catholic practice stayed the same as in Spain' }, { en: 'People prayed at one site for similar reasons' }],
        answer: 3,
        why: { en: 'Tepeyac stayed a place of pilgrimage. Converts prayed there to a protector mother figure, as their ancestors had prayed to Tonantzin. Temples were burned and their stones reused.' }
      }
    ]
  },
  learned: [
    { en: 'The [[columbian exchange|Columbian Exchange]] moved plants, animals, people and diseases between the Americas and [[afro-eurasia|Afro-Eurasia]] after 1492.' },
    { en: 'Diseases like [[smallpox|smallpox]] caused the [[great dying|Great Dying]]. The labor shortage helped drive the Atlantic slave trade to [[plantation|plantations]].' },
    { en: 'American [[staple crop|staple crops]] helped Afro-Eurasia\'s population grow. In Mexico, Catholicism and Native beliefs blended in [[religious syncretism|religious syncretism]].' }
  ],
  reflect: {
    q: { en: 'AP practice: Explain one effect of the Columbian Exchange on the Americas between 1492 and 1600.' },
    starter: { en: 'One effect of the Columbian Exchange on the Americas was' }
  }
};
