/* HISTORYWALKER · Episode 4.7 · Changing Social Hierarchies from 1450 to 1750 (AP World Topic 4.7)
   Lima, capital of the Spanish Viceroyalty of Peru, about 1650.
   Content source: Khan Academy, AP World History (World History Project), Unit 4 Lesson "Changing Social Hierarchies
   from 1450 to 1750 CE | 4.7": "Transatlantic Migration Patterns: The Voluntary and Involuntary Movement of People"
   (Burleigh Hendrickson), "Opener: Empire and Hierarchy" (the casta system, mita system, indentured servitude,
   plantation system and chattel slavery as systems that shaped hierarchies); the unit overview "Unit 4 Introduction:
   Transoceanic Interconnections 1450 to 1750" (Trevor Getz); and, for Lima and Spanish colonial society, "European
   Colonies in the Americas" (William H. Beezley, Unit 4 Lesson 4.4). World History Project content is CC BY-NC 4.0.
   Facts here come from those readings. English only, AP level.
   Race and rank: every ranking in this episode is presented as something colonial rulers made to keep power. The game
   never ranks people in its own voice. Slavery and forced labor are told plainly and with care.
   Map: the river and its north bank along the top; the central plaza with the viceroy's palace (north-west) and the
   cathedral (north-east); a grid of streets; the tailor's shop and the friars' convent in the south-west; the market
   stalls and a Spanish family's house in the south-east, and an open yard where the time stone stands. */
window.EPISODE = {
  id: '4.7',
  realm: 4,
  sol: 'AP 4.7',
  style: 'andes',
  weather: { sky: 'clear', time: 'day' },
  title: { en: 'Changing Social Hierarchies' },
  place: { en: 'Lima, Viceroyalty of Peru, 1650' },
  intro: [
    { en: 'The Grump blurred the page on social hierarchies. Lima is forgetting who ranked its people, and why.' },
    { en: 'Talk to the 4 people here, help a court scribe, then wake the time stone.' }
  ],
  scenes: {
    at: [-77.03, -12.05],
    year: 1650,
    start: [
      { en: 'In 1542 Spain created the Viceroyalty of Peru, with its capital at Lima.' },
      { en: 'Spanish law gave Lima a central plaza and a grid of straight streets.' },
      { en: 'A small group calling themselves Spaniards ruled a much larger population.' }
    ],
    guess: {
      q: { en: 'In Spanish Peru, who held most of the power: the few Spaniards, or the many others?' },
      choices: [{ t: { en: '👑 The few Spaniards' }, ok: true }, { t: { en: '👥 The many others' } }],
      why: { en: 'Mestizos, Africans and Native peoples far outnumbered Spaniards, yet Spaniards dominated government, economy and society.' }
    },
    page: { en: 'Before 1580, most migrants to the Americas were Europeans who chose to come.' },
    next: {
      q: { en: 'Next: Continuity and Change from 1450 to 1750. Did ocean voyages link the world into one system?' },
      choices: [{ t: { en: 'Yes, they did' }, ok: true }, { t: { en: 'No, they did not' } }],
      why: { en: 'People, goods, silver and diseases crossed the oceans and created the first global system. Next you weigh what changed and what stayed the same.' }
    }
  },
  start: [16, 11],
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT',
    'T..,..T.........:...P....,.....T',
    'T.P......,......:x.....T.......T',
    'T~~~~~~~~~~~~~~~B~~~~~~~~~~~~~~T',
    'T.TT....DDDDDD.xl..DDDDDD.PP.T.T',
    'T.T.....DDdDDD..l..DDDdDD......T',
    'T..x....llllllllllllllllll.....T',
    'T.......llllllllllllllllll.....T',
    'T.......llllllllOlllllllll.....T',
    'T.......llllllllllllllllll.....T',
    'T.......llllllllllllllllll.....T',
    'T.......:.......ll......:......T',
    'T.QQQQ..:.RRRR..llxmmmmm:.RRRR.T',
    'T.hdhh..:.hhhh..ll.lllll:.hhdh.T',
    'T.......:.......ll......:......T',
    'T::::::::::::::::::::::::::::::T',
    'T.DDDDD.:.......ll......:...P..T',
    'T.DDdDD.:..T....ll......:......T',
    'T.......:.......ll......:......T',
    'T..T....:.......ll......:......T',
    'T.,.....:...T...ll......:....,.T',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT'
  ],
  words: {
    'viceroyalty': { en: 'a colony ruled by a viceroy, a "vice king" who governs in the king\'s place' },
    'audiencia': { en: 'a council of judges that helped the viceroy govern a region of a Spanish colony' },
    'social hierarchy': { en: 'a ranking of people from higher to lower status' },
    'criollo': { en: 'in Spanish America, a person of Spanish family born in the Americas; the law counted criollos as Spanish' },
    'mestizo': { en: 'the Spanish colonial label for a person with mixed parents, usually a Spanish father and a Native mother' },
    'casta system': { en: 'the Spanish colonial ranking of people by ancestry, made by colonial rulers to keep a small Spanish group in power' },
    'two republics': { en: 'the Spanish colonial split of society into a "republic of Spaniards" and a "republic of Indians," each with its own rules' },
    'sumptuary laws': { en: 'dress codes that limited clothing, weapons and ways of travel by social class' },
    'mita': { en: 'a forced labor system in Spanish South America; colonial rulers made Native people work, as in the silver mines' },
    'transatlantic migration': { en: 'the movement of people across the Atlantic from Afro-Eurasia to the Americas, by choice or by force, from the late 1400s' },
    'indentured servitude': { en: 'selling years of one\'s labor, often four, in exchange for the cost of the voyage' },
    'middle passage': { en: 'the deadly voyage of enslaved Africans across the Atlantic to the Americas' },
    'plantation': { en: 'a huge farm growing one cash crop, like sugar, worked by forced labor' },
    'creole': { en: 'mixed; creole communities blended African and European cultures and languages' }
  },
  npcs: [
    {
      x: 5, y: 8, name: { en: 'Mateo' }, role: { en: 'Carpenter' },
      look: { skin: 2, hair: '#2b1d14', shirt: '#7a5a2a', pants: '#3a2a1a', style: 'short' },
      lines: [
        { en: 'My mother is Andean and my father came from Spain. Colonial officials write "[[mestizo|mestizo]]" beside my name.' },
        { en: 'Spanish rulers made a ranking of labels by ancestry, the [[casta system|casta system]]. It keeps a small Spanish group on top.' },
        { en: 'The law also split society into [[two republics|two "republics"]]: one of Spaniards, one of Indians. That plan broke down almost at once. Look how many families here are mixed!' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Who made the casta labels and the two republics, and why?' },
        choices: [
          { ok: true, t: { en: 'Colonial rulers, to keep Spaniards on top' }, why: { en: 'Yes. The Spanish colonial government made these rankings to keep a small Spanish group at the top. They say nothing true about anyone\'s worth.' } },
          { t: { en: 'Andean nobles, to protect their old titles' }, why: { en: 'No. The Spanish crown and its officials wrote these laws for the colony.' } },
          { t: { en: 'Friars, to make every colonist equal' }, why: { en: 'No. Friars were sent to protect and convert Native people, but the system ranked people. It did not make them equal.' } }
        ]
      }
    },
    {
      x: 6, y: 13, name: { en: 'Isabel' }, role: { en: 'Seamstress' },
      look: { skin: 1, hair: '#3a2a1a', shirt: '#7a2a4a', robe: true, style: 'bun' },
      lines: [
        { en: 'I was born here in Lima to Spanish parents, so I am a [[criollo|criolla]]. The law counts me as "Spanish," like people born in Spain.' },
        { en: 'Yet we Spaniards are few. Mestizos, Africans, enslaved and free, and Native peoples greatly outnumber us. Still, Spaniards run the government, trade and society.' },
        { en: 'I sew by the [[sumptuary laws|sumptuary laws]]. These dress codes limit clothing, weapons and travel by class, so everyone\'s rank shows on the street.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'What does Lima\'s population show about power in Spanish America?' },
        choices: [
          { ok: true, t: { en: 'A small minority ruled the majority' }, why: { en: 'Right. Spaniards and criollos were greatly outnumbered, yet they dominated government, economy and society.' } },
          { t: { en: 'The largest group held the most power' }, why: { en: 'No. Mestizos, Africans and Native peoples outnumbered Spaniards but were ranked below them.' } },
          { t: { en: 'Every group shared power the same way' }, why: { en: 'No. The colony\'s laws, even its dress codes, ranked people by class and ancestry.' } }
        ]
      }
    },
    {
      x: 21, y: 14, name: { en: 'Felipa' }, role: { en: 'Food seller' },
      look: { skin: 5, hair: '#1b1410', shirt: '#d9822b', pants: '#5a3a2a', style: 'long' },
      lines: [
        { en: 'My mother was taken from West Africa and carried across the ocean in chains: the [[middle passage|Middle Passage]]. I am free today, but many Africans in Lima are still enslaved.' },
        { en: 'Disease killed so many Native people that colonists wanted new workers. After 1580, enslaved Africans crossing the ocean far outnumbered Europeans. Most were forced to grow sugar on [[plantation|plantations]].' },
        { en: 'Owners forbid large gatherings, but on Sundays people walk miles to find others who speak their language. Their children mix African and European ways into new [[creole|creole]] communities.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why did forced migration from Africa grow after 1580?' },
        choices: [
          { ok: true, t: { en: 'Plantations needed workers after disease' }, why: { en: 'Yes. Disease had killed millions of Native people, and sugar plantation owners forced enslaved Africans across the ocean to work.' } },
          { t: { en: 'Africans chose to sail west for better jobs' }, why: { en: 'No. These people were captured and forced to migrate. Voluntary migrants were always treated far better.' } },
          { t: { en: 'No European would ever cross the ocean' }, why: { en: 'No. Europeans did cross, by choice and as convicts, but after 1580 enslaved Africans far outnumbered them.' } }
        ]
      }
    },
    {
      x: 26, y: 6, name: { en: 'Quispe' }, role: { en: 'Andean stonemason' },
      look: { skin: 3, hair: '#1b1410', shirt: '#3a7a8a', pants: '#4a4a3a', hat: '#a8824a', style: 'short' },
      lines: [
        { en: 'I cut stone for the cathedral. My home village belongs to the "republic of Indians." By law, no Spaniard may spend the night there. Only friars may.' },
        { en: 'Spanish officials wrongly judged us to be like children who need guarding. They use that idea to keep us apart and under their control.' },
        { en: 'Men from Andean towns are forced to work in the silver mines: the [[mita|mita]]. That silver enriches Spain, western Europe and even China.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'How did the global silver trade depend on the colony\'s hierarchy?' },
        choices: [
          { ok: true, t: { en: 'It relied on forced Native labor' }, why: { en: 'Yes. The global silver trade was made possible by the forced labor of Native people in South American mines.' } },
          { t: { en: 'Free miners chose the work for high pay' }, why: { en: 'No. Native people were forced to do this work. It was not a free choice.' } },
          { t: { en: 'Spanish nobles dug the silver themselves' }, why: { en: 'No. Spaniards held power and profits. The hard labor was forced on Native people.' } }
        ]
      }
    }
  ],
  houses: [
    { at: [10, 5], name: { en: 'Secretary Ramírez' }, look: { skin: 0, hair: '#4a3020', shirt: '#2a4a7a', robe: true, style: 'short' },
      lines: [{ en: 'The king cannot rule Peru day to day from Spain. A viceroy rules here instead.' }, { en: 'In each region, councils of judges called audiencias help him govern.' }] },
    { at: [22, 5], name: { en: 'Father Benito' }, look: { skin: 1, hair: '#7a7a7a', shirt: '#2a2a2a', robe: true, style: 'short' },
      lines: [{ en: 'Every guild and parish here has a patron saint, with its own feast day.' }, { en: 'At Corpus Christi, processions and fireworks fill the plaza.' }] },
    { at: [3, 13], name: { en: 'Tailor Ignacio' }, look: { skin: 2, hair: '#2b1d14', shirt: '#5a3a6a', pants: '#2a2a3a', style: 'short' },
      lines: [{ en: 'The sumptuary laws limit fine clothes by social class.' }, { en: 'Weapons and ways of travel are limited by class too.' }] },
    { at: [28, 13], name: { en: 'Doña Leonor' }, look: { skin: 0, hair: '#3a2a1a', shirt: '#8a2a3a', robe: true, style: 'bun' },
      lines: [{ en: 'A 1573 law says married Spaniards must bring their wives or return to Spain.' }, { en: 'The crown wants Spanish families here for good, to keep the hierarchy.' }] },
    { at: [4, 17], name: { en: 'Friar Tomás' }, look: { skin: 1, hair: '#5a4030', shirt: '#6a4a2a', robe: true, style: 'short' },
      lines: [{ en: 'Friars may spend the night in Native towns. Other outsiders may not.' }, { en: 'We are sent to protect Native people and to convert them.' }] }
  ],
  signs: [
    { x: 17, y: 2, text: { en: 'THE RIVER · Spanish town laws placed new towns near water and timber.' } },
    { x: 15, y: 4, text: { en: 'CENTRAL PLAZA · By law, the palace, the church and the market stand around one square. Today it is the Plaza de Armas.' } },
    { x: 3, y: 6, text: { en: 'LIMA · Capital of the Viceroyalty of Peru, founded after the conquest of the Inca Empire.' } },
    { x: 18, y: 12, text: { en: 'MARKET · Cloth, food and goods. The dress codes decide who may wear what.' } }
  ],
  finds: [
    { clueAt: [11, 1], at: [14, 2], decor: 'coinold', clue: { en: 'From this note, walk 3 steps east and 1 step south, along the river bank.' },
      text: { en: 'A silver coin! Silver from South American mines, dug by forced Native labor, paid for trade around the world.' } }
  ],
  scraps: [[1, 1], [30, 20], [1, 20]],
  smudges: [[24, 10], [11, 19]],
  quest: {
    stat: 'mov',
    title: { en: 'The Torn Book of Laws' },
    giver: {
      x: 30, y: 14, name: { en: 'Gaspar' }, role: { en: 'Court scribe' },
      look: { skin: 0, hair: '#2b1d14', shirt: '#4a4a6a', robe: true, style: 'short' },
      lines: [
        { en: 'I copy laws for the [[audiencia|audiencia]], the judges who help the viceroy rule the [[viceroyalty|Viceroyalty]] of Peru. These laws decide who stands where in Lima.' },
        { en: 'The Grump\'s Ink Thief tore my copy into three pieces! Rosa the water seller sees everything. She works at the fountain in the plaza.' }
      ],
      wait: { en: 'Rosa sells water at the fountain in the middle of the plaza. Walk north up the main street.' },
      thanks: { en: 'My copy is whole! Law, dress codes and the church all helped a few rulers keep their place above the many.' }
    },
    contact: {
      x: 18, y: 8, name: { en: 'Rosa' }, role: { en: 'Water seller' },
      look: { skin: 4, hair: '#1b1410', shirt: '#3a7a5a', pants: '#4a3a2a', style: 'long' },
      lines: [
        { en: 'Everyone comes to my fountain: Spaniards, Africans, Andeans and mestizos. The law ranks them, but everyone gets thirsty.' },
        { en: 'The inky thief ran past! It hid each piece where Lima\'s rulers keep their ranking in place: first the law, then the clothes, then the church.' }
      ]
    },
    action: {
      type: 'chase',
      at: [2, 19],
      hops: [[10, 19], [6, 20]],
      name: { en: 'The Ink Thief' },
      taunt: { en: 'Hee hee! Three pieces where Lima keeps its ranks: law, clothing, church. Find them!' },
      clues: [
        { t: { en: 'Piece 1 is where the viceroy rules in the king\'s place. Find the grand doors on the north side of the plaza, west of the cathedral.' },
          zones: [{ x: 8, y: 6, w: 6, h: 1 }],
          noBy: [{ x: 19, y: 6, w: 6, h: 1, t: { en: 'This is the cathedral. The viceroy\'s palace is the grand building to the west.' } }],
          found: { en: 'Piece 1, at the palace! The king could not rule Peru day to day from Spain, so a viceroy ruled for him.' } },
        { t: { en: 'Piece 2 is where cloth is sold by the dress codes. Find the market stalls southeast of the plaza.' },
          zones: [{ x: 19, y: 13, w: 5, h: 1 }],
          noBy: [{ x: 1, y: 14, w: 5, h: 1, t: { en: 'This is a tailor\'s shop in the southwest. The market stalls are southeast of the plaza.' } }],
          found: { en: 'Piece 2, at the cloth stalls! Sumptuary laws limited clothing, weapons and travel by class, so rank was easy to see.' } },
        { t: { en: 'Piece 3 is where the friars live, the only outsiders allowed to sleep in Native towns. Go to the convent in the southwest.' },
          zones: [{ x: 2, y: 18, w: 5, h: 1 }],
          noBy: [{ x: 8, y: 6, w: 6, h: 1, t: { en: 'This is the viceroy\'s palace. The friars\' convent is in the southwest, south of the long street.' } }],
          found: { en: 'Piece 3, at the convent! Friars were sent to protect Native people and to convert them to Catholicism.' } }
      ],
      win: { en: 'Caught! The Ink Thief drops the last piece and slips away. Gaspar\'s copy of the laws is whole.' },
      item: { icon: '📜', name: { en: 'Gaspar\'s copy of the colonial laws' } }
    }
  },
  challenge: {
    at: [22, 19], type: 'carry', stat: 'loc',
    title: { en: 'Who chose the crossing?' },
    intro: { en: 'The Grump mixed up the record of [[transatlantic migration|transatlantic migration]]. Carry each card to how these people crossed the Atlantic: by choice, or by force. Voluntary migrants were always treated far better than captive Africans.' },
    zones: [
      { bin: 'chose', x: 18, y: 17, w: 3, h: 3 },
      { bin: 'forced', x: 26, y: 17, w: 3, h: 3 }
    ],
    bins: [
      { id: 'chose', icon: '🧳', label: { en: 'Chose to cross' }, sub: { en: 'for faith, a way out of poverty, or work' } },
      { id: 'forced', icon: '⛓️', label: { en: 'Forced to cross' }, sub: { en: 'captured, enslaved or sentenced' } }
    ],
    items: [
      { bin: 'chose', t: { en: 'Puritans flee strict religious rules in England in the 1630s and 1640s.' }, why: { en: 'The Reformation divided Europe. About 20,000 Puritans chose to sail to English colonies to escape persecution.' } },
      { bin: 'chose', t: { en: 'A poor European sails west to escape poverty.' }, why: { en: 'Some Europeans chose to leave poverty behind, though about 1 in 4 died of disease in their first year.' } },
      { bin: 'chose', t: { en: 'A young worker sells four years of labor to pay for the voyage.' }, why: { en: 'This was [[indentured servitude|indentured servitude]]: a hard bargain, but one the migrant agreed to.' } },
      { bin: 'chose', t: { en: 'Before 1580, European settlers sail to the Americas by their own choice.' }, why: { en: 'Before 1580, the vast majority of migrants were Europeans who came of their own free will.' } },
      { bin: 'forced', t: { en: 'West and Central Africans are carried in chains across the Middle Passage.' }, why: { en: 'They were captured and enslaved. From 1580 on, they far outnumbered European migrants.' } },
      { bin: 'forced', t: { en: 'Captives are forced to cut sugar cane in Brazil and Cuba.' }, why: { en: 'Sugar plantations ran on forced African labor. The work was brutal, and many died.' } },
      { bin: 'forced', t: { en: 'A European convict crosses the ocean to escape a death sentence.' }, why: { en: 'Convicts could avoid execution by migrating. Historians count them among forced migrants.' } },
      { bin: 'forced', t: { en: 'Prisoners of war are shipped to the colonies.' }, why: { en: 'Like convicts, they had no real choice. Most forced migrants were men.' } }
    ],
    success: { en: 'Every card is home. After 1580, most people who crossed did not choose to: enslaved Africans far outnumbered free migrants. Chosen or forced, migrants faced harsh conditions and discrimination.' }
  },
  boss: {
    at: [29, 1], stat: 'hei', need: 3,
    name: { en: 'The Gray Grump' },
    appear: { en: 'The Gray Grump waits quietly on the far bank of the river.' },
    taunt: { en: 'Let the city forget who made these rankings, and who paid for them.' },
    win: { en: 'The Grump fades. The page on social hierarchies returns, and with it the truth: rulers made these rankings to keep power.' },
    questions: [
      {
        stim: { text: { en: '"...America has been depopulated to have land on which to plant them; Africa has been depopulated so as to have the people to cultivate them."' }, src: { en: 'J.H. Bernardin de Saint-Pierre, writing about coffee and sugar, 1773' } },
        q: { en: 'The excerpt best reflects which development?' },
        choices: [{ en: 'American land worked by enslaved Africans' }, { en: 'European farmers settling in Africa for coffee' }, { en: 'Native Americans shipping sugar to Africa' }, { en: 'Free workers choosing to farm the Caribbean' }],
        answer: 0,
        why: { en: 'Disease emptied land in the Americas, and plantation owners forced enslaved Africans across the ocean to grow sugar and coffee for Europe.' }
      },
      {
        stim: { title: { en: 'Who crossed the Atlantic?' }, rows: [[{ en: 'Period' }, { en: 'Most migrants were...' }], [{ en: 'Late 1400s to 1580' }, { en: 'Europeans who chose to come' }], [{ en: '1580 to the early 1800s' }, { en: 'Enslaved Africans, far outnumbering Europeans' }]], src: { en: 'From "Transatlantic Migration Patterns," World History Project' } },
        q: { en: 'Which best explains the change shown in the table?' },
        choices: [{ en: 'Sugar plantations demanded forced labor' }, { en: 'Europe banned all travel to the colonies' }, { en: 'African states sent settlers to trade' }, { en: 'Native Americans moved to Europe for work' }],
        answer: 0,
        why: { en: 'With so many Native people killed by disease, plantation owners turned to enslaved Africans. Forced migration far outweighed voluntary migration.' }
      },
      {
        stim: { text: { en: 'Spaniards and criollos were greatly outnumbered by mestizos, Africans and indigenous peoples. Nevertheless, it was that small population identifying as Spaniards who dominated government, economy, and society.' }, src: { en: 'Adapted from "European Colonies in the Americas," World History Project' } },
        q: { en: 'The excerpt best supports which claim about Spanish colonial society?' },
        choices: [{ en: 'A small minority ruled the larger population' }, { en: 'Power went to whichever group was largest' }, { en: 'Native nobles still ruled the colonial cities' }, { en: 'All groups shared power equally under law' }],
        answer: 0,
        why: { en: 'Colonial rulers kept power in the hands of a small group identifying as Spanish, even though most people were not.' }
      },
      {
        stim: { text: { en: 'No Spaniards or other non-Indians could spend the night in an indigenous community, with the exception of Spanish friars.' }, src: { en: 'Adapted from "European Colonies in the Americas," World History Project' } },
        q: { en: 'This rule of the "two republics" was based mainly on...' },
        choices: [{ en: 'rulers\' belief that Native people were inferior' }, { en: 'Native leaders\' wish to keep out Spanish traders' }, { en: 'a peace treaty signed by Spain and Native towns' }, { en: 'church rules that banned all travel on Sundays' }],
        answer: 0,
        why: { en: 'Spanish officials wrongly judged Native people as childlike and used that idea to keep them apart and controlled. The plan broke down almost at once.' }
      },
      {
        q: { en: 'Spanish colonial sumptuary laws were mainly used to...' },
        choices: [{ en: 'make each person\'s rank visible' }, { en: 'raise taxes on silver from the mines' }, { en: 'let Native towns choose their own rulers' }, { en: 'stop all trade between Lima and Spain' }],
        answer: 0,
        why: { en: 'These dress codes limited clothing, weapons and travel by class, so a person\'s rank could be seen on the street.' }
      },
      {
        q: { en: 'Which best explains how the global silver trade depended on colonial hierarchy?' },
        choices: [{ en: 'Native people were forced to mine it' }, { en: 'Spanish nobles dug the silver themselves' }, { en: 'Chinese merchants owned Peru\'s mines' }, { en: 'Free miners from Europe did the work' }],
        answer: 0,
        why: { en: 'The silver trade enriched Spain, western Europe and China. It was made possible by the forced labor of Native people in South American mines.' }
      },
      {
        stim: { text: { en: 'Second-generation enslaved Africans combined African and European cultures and languages. Eventually, Creole (mixed) communities emerged.' }, src: { en: 'Adapted from "Transatlantic Migration Patterns," World History Project' } },
        q: { en: 'The excerpt best illustrates...' },
        choices: [{ en: 'new cultures forming despite harsh limits' }, { en: 'Africans fully giving up their languages' }, { en: 'Europeans adopting only African customs' }, { en: 'slave owners encouraging big gatherings' }],
        answer: 0,
        why: { en: 'Owners restricted movement and gatherings, yet enslaved people built creole communities that blended African and European ways.' }
      },
      {
        q: { en: 'Which statement best describes the casta system in Spanish America?' },
        choices: [{ en: 'Rulers\' labels that ranked people by ancestry' }, { en: 'A set of rules that made every colonist equal' }, { en: 'A ranking that Native towns made for nobles' }, { en: 'A tax paid only by the Spaniards born in Spain' }],
        answer: 0,
        why: { en: 'Colonial rulers ranked people by their parents\' ancestry to keep a small Spanish group in power. The ranking said nothing true about anyone\'s worth.' }
      }
    ]
  },
  learned: [
    { en: 'In Spanish America, colonial rulers built a [[social hierarchy|social hierarchy]] by ancestry, the [[casta system|casta system]], to keep a small Spanish group in power.' },
    { en: 'The [[two republics|two republics]] and the [[sumptuary laws|sumptuary laws]] kept groups apart and made rank visible, while forced labor like the [[mita|mita]] fed the silver trade.' },
    { en: '[[transatlantic migration|Transatlantic migration]] grew after the late 1400s. Before 1580 most migrants chose to come; after 1580, enslaved Africans far outnumbered them.' }
  ],
  reflect: {
    q: { en: 'AP practice: Explain one way Spanish colonial rulers kept their social hierarchy in place in the Americas between 1450 and 1750.' },
    starter: { en: 'One way Spanish colonial rulers kept their hierarchy in place was' }
  }
};
