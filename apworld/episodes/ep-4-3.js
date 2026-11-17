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
    { en: 'The Grump blurred the page on the Columbian Exchange. Mexico City is forgetting what crossed the ocean, and what it cost.' },
    { en: 'Talk to the 4 people here, help a cook find flour, then wake the time stone.' }
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
    'religious syncretism': { en: 'the blending of belief systems from two or more places into something new' }
  },
  npcs: [
    {
      x: 6, y: 10, name: { en: 'Teresa' }, role: { en: 'Nahua painter' },
      look: { skin: 3, hair: '#1b1410', shirt: '#b8452a', style: 'long' },
      lines: [
        { en: 'I am one of the Nahua artists painting a book for a Spanish friar. My page shows the effects of [[smallpox|smallpox]].' },
        { en: 'Smallpox, measles and influenza came with the Spanish. We had never met these sicknesses, so our bodies had no [[immunity|immunity]].' },
        { en: 'When Cortés came, 25 to 30 million people lived in Mexico. Fifty years later, about 3 million are left. Whole towns stand empty.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why did diseases like smallpox kill so many Native people in Mexico?' },
        choices: [
          { ok: true, t: { en: 'They had never met these diseases' }, why: { en: 'Yes. Afro-Eurasians had lived with these diseases for generations. With few herd animals, the Americas had never had them, so people had no immunity.' } },
          { t: { en: 'The Spanish poisoned all the lakes' }, why: { en: 'No. The epidemics were mostly an unintended result of contact. Europeans carried germs they had some resistance to.' } },
          { t: { en: 'Mexico\'s cities were too small' }, why: { en: 'No. Tenochtitlan was among the largest cities in the world. Large cities were nearly wiped out.' } }
        ]
      }
    },
    {
      x: 5, y: 13, name: { en: 'Diego' }, role: { en: 'Cattle herder' },
      look: { skin: 2, hair: '#2b1d14', shirt: '#7a5a2a', pants: '#3a2a1a', hat: '#a8824a', style: 'short' },
      lines: [
        { en: 'My father came from Spain and my mother is Nahua. The colonial government calls people like me [[mestizo|mestizo]].' },
        { en: 'Before the Spanish, there were no horses, cattle, sheep or pigs here. Now I herd cattle for meat, tallow and hides.' },
        { en: 'Cattle eat and trample the native plants. And the Spanish plant wheat where native crops once grew.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'How did animals from Afro-Eurasia change the land of Mexico?' },
        choices: [
          { ok: true, t: { en: 'Cattle destroyed many native plants' }, why: { en: 'Yes. European animals, especially cattle, ate and trampled indigenous plants. The exchange reshaped the environment.' } },
          { t: { en: 'Cattle had always lived in Mexico' }, why: { en: 'No. Before 1492 the only large domesticated animals in the Americas were llamas and alpacas, far to the south.' } },
          { t: { en: 'The new animals changed nothing at all' }, why: { en: 'No. Horses changed transport and hunting, cattle gave meat, tallow and hides, and they harmed native plants.' } }
        ]
      }
    },
    {
      x: 21, y: 11, name: { en: 'Alonso' }, role: { en: 'Spanish merchant' },
      look: { skin: 0, hair: '#4a3020', shirt: '#2a4a7a', pants: '#2a2a3a', hat: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'My ships carry maize, tomatoes, chili peppers and turkeys east to Spain. Europe, Africa and Asia had never seen them.' },
        { en: 'Maize and the potatoes of Peru are [[staple crop|staple crops]], rich in calories. Potatoes grow where it is too dry for rice or too wet for wheat.' },
        { en: 'With so many Native people dead, workers are few. So Europeans force enslaved Africans across the ocean to grow sugar, our richest [[cash crop|cash crop]].' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Compare: how did the Columbian Exchange change populations on each side of the Atlantic?' },
        choices: [
          { ok: true, t: { en: 'Afro-Eurasia grew; the Americas lost millions' }, why: { en: 'Right. American staple crops fed growing populations in Afro-Eurasia, while epidemics killed millions of Native Americans.' } },
          { t: { en: 'Both sides lost about the same number of people' }, why: { en: 'No. Very few diseases traveled from west to east, so Afro-Eurasia did not suffer a great dying.' } },
          { t: { en: 'The Americas grew while Afro-Eurasia shrank' }, why: { en: 'No, the reverse. Disease moved mostly west, and new crops from the Americas fed more people in Afro-Eurasia.' } }
        ]
      }
    },
    {
      x: 3, y: 3, name: { en: 'Juana' }, role: { en: 'Nahua pilgrim' },
      look: { skin: 4, hair: '#1b1410', shirt: '#3a7a8a', robe: true, style: 'bun' },
      lines: [
        { en: 'Before the Spanish came, my grandmother climbed this hill to pray to Tonantzin, a mother goddess and protector.' },
        { en: 'Catholic [[missionary|missionaries]] burned our temples and books. Sickness killed us but spared most Spaniards, so many wondered if the old gods still protected us.' },
        { en: 'Now we pray here to the Virgin of Guadalupe. Many still call her Tonantzin. Old and new beliefs blend: [[religious syncretism|religious syncretism]].' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'What does the shrine at Tepeyac show about religion in New Spain?' },
        choices: [
          { ok: true, t: { en: 'Old and new beliefs blended together' }, why: { en: 'Yes. Converts prayed at the same site, for the same reasons, to a figure who blended the Virgin Mary and Tonantzin.' } },
          { t: { en: 'Native beliefs vanished completely' }, why: { en: 'No. Missionaries, to their frustration, often found images of Jesus and Mary beside statues of Aztec gods.' } },
          { t: { en: 'The Spanish took up the old Aztec gods' }, why: { en: 'No. The Spanish forced conversion to Catholicism and burned temples. But Native converts reshaped the new faith.' } }
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
    intro: { en: 'The Grump mixed up the record of the [[columbian exchange|Columbian Exchange]]. Carry each card to the way it crossed the Atlantic: east to Afro-Eurasia, or west to the Americas.' },
    zones: [
      { bin: 'toae', x: 26, y: 5, w: 3, h: 4 },
      { bin: 'toam', x: 17, y: 5, w: 3, h: 4 }
    ],
    bins: [
      { id: 'toae', icon: '⛵', label: { en: 'To Afro-Eurasia' }, sub: { en: 'from the Americas, sailing east' } },
      { id: 'toam', icon: '🐎', label: { en: 'To the Americas' }, sub: { en: 'from Afro-Eurasia, sailing west' } }
    ],
    items: [
      { bin: 'toae', t: { en: 'Maize and potatoes' }, why: { en: 'American staple crops, rich in calories. They helped populations grow from Ireland to China.' } },
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
    name: { en: 'The Hollow Grump' },
    appear: { en: 'The Hollow Grump waits quietly on the hill of Tepeyac.' },
    taunt: { en: 'So many died here. Let the city forget their names, and forget how it happened.' },
    win: { en: 'The Grump fades. The page on the Columbian Exchange returns, and with it the memory of the people who lived it.' },
    questions: [
      {
        stim: { text: { en: '"...those Indians that lived about their trading house there, fell sick of the small pox and died most miserably... they were in the end not able to help one another, no not to make a fire nor to fetch a little water to drink, nor any to bury the dead."' }, src: { en: 'William Bradford, governor of Plymouth colony, describing about 1634' } },
        q: { en: 'The excerpt best illustrates which effect of the Columbian Exchange?' },
        choices: [{ en: 'Afro-Eurasian diseases devastating Native peoples' }, { en: 'American crops causing famine across Europe' }, { en: 'Native peoples carrying smallpox to Europe' }, { en: 'European doctors curing all epidemics in the Americas' }],
        answer: 0,
        why: { en: 'Smallpox was new to the Americas. With no immunity, whole communities fell sick at once, too weak even to care for one another.' }
      },
      {
        stim: { title: { en: 'Native population of Mexico (estimates)' }, rows: [[{ en: 'Time' }, { en: 'People' }], [{ en: 'When Cortés invaded (1519)' }, { en: '25 to 30 million' }], [{ en: 'Fifty years later' }, { en: 'about 3 million' }]], src: { en: 'From "Unit 4 Introduction: Transoceanic Interconnections," World History Project' } },
        q: { en: 'Which best explains the change shown in the table?' },
        choices: [{ en: 'Epidemics of diseases new to the Americas' }, { en: 'A mass migration of Native people to Spain' }, { en: 'Famine after the potato crop failed' }, { en: 'Wars only among the old Aztec cities' }],
        answer: 0,
        why: { en: 'Almost all of this loss of population was caused by Afro-Eurasian diseases like smallpox and measles: the Great Dying.' }
      },
      {
        stim: { text: { en: 'Rulers discovered that a field of potatoes could feed three times as many people as a field of wheat. After that, European governments encouraged farmers to grow potatoes.' }, src: { en: 'Adapted from "Crops that Grew the World," World History Project' } },
        q: { en: 'The development described above best helps explain...' },
        choices: [{ en: 'population growth in Afro-Eurasia after 1500' }, { en: 'the Great Dying of Native peoples in the Americas' }, { en: 'why the Spanish planted wheat in Mexico' }, { en: 'why few diseases traveled west to east' }],
        answer: 0,
        why: { en: 'Calorie-rich American staple crops like potatoes and maize fed more people, so Afro-Eurasia\'s population rose after 1500.' }
      },
      {
        stim: { text: { en: 'Catholic missionaries, to their frustration, often found images of Jesus and the Virgin Mary alongside statues of Aztec and other indigenous gods.' }, src: { en: 'Adapted from "Religious Syncretism in Colonial Mexico City," World History Project' } },
        q: { en: 'The excerpt best reflects...' },
        choices: [{ en: 'religious syncretism in New Spain' }, { en: 'a total rejection of Christianity' }, { en: 'the complete end of Aztec beliefs' }, { en: 'the Spanish worship of Aztec gods' }],
        answer: 0,
        why: { en: 'Native converts did not fully give up old gods and rituals. They blended them with Catholicism: religious syncretism.' }
      },
      {
        q: { en: 'Which statement best compares the effects of the Columbian Exchange on the Americas and on Afro-Eurasia?' },
        choices: [{ en: 'Population fell in the Americas but rose in Afro-Eurasia' }, { en: 'Both regions lost most of their people to new diseases' }, { en: 'Population rose in the Americas but fell in Afro-Eurasia' }, { en: 'Neither region saw any real change in its population' }],
        answer: 0,
        why: { en: 'Disease moved mostly west and killed millions of Native Americans. American staple crops moved east and fed growing populations.' }
      },
      {
        q: { en: 'Which best explains why Europeans forced enslaved Africans to the Americas in this period?' },
        choices: [{ en: 'Disease had left too few Native workers' }, { en: 'African rulers asked to send settlers' }, { en: 'Spain needed more workers for its wheat' }, { en: 'Native peoples had all moved to Europe' }],
        answer: 0,
        why: { en: 'Epidemics killed millions of Native Americans, causing a labor shortage. Europeans forced enslaved Africans across the Atlantic to grow cash crops like sugar.' }
      },
      {
        q: { en: 'Which was an environmental effect of the Columbian Exchange in Mexico?' },
        choices: [{ en: 'Cattle ate and trampled native plants' }, { en: 'Horses died out all over the Americas' }, { en: 'Maize replaced all the wheat in Spain' }, { en: 'Llamas spread to the fields of Europe' }],
        answer: 0,
        why: { en: 'Animals brought from Afro-Eurasia, especially cattle, destroyed indigenous plants, and the Spanish replaced native crops with wheat.' }
      },
      {
        stim: { text: { en: 'The Spanish destroyed a shrine to an Aztec mother goddess and replaced it with a shrine to the mother of Jesus. Indigenous converts adopted the Lady of Guadalupe as their protector, and some still call her Tonantzin.' }, src: { en: 'Adapted from "Religious Syncretism in Colonial Mexico City," World History Project' } },
        q: { en: 'Which continuity does the excerpt best show?' },
        choices: [{ en: 'People prayed at the same site for similar reasons' }, { en: 'The Aztec priests kept ruling Mexico City' }, { en: 'The Spanish never built churches in Mexico' }, { en: 'Catholic practice stayed exactly the same as in Spain' }],
        answer: 0,
        why: { en: 'Tepeyac stayed a place of pilgrimage. Converts prayed to a protector mother figure there, as their ancestors had prayed to Tonantzin.' }
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
