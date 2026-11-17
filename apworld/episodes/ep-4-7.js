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
   stalls and a Spanish family's house in the south-east, and an open yard where the time stone stands.
   Reading stands: a primary source (Bernardin de Saint-Pierre, 1773, as quoted in "Transatlantic Migration Patterns")
   by the market stalls, and a reading adapted from "Transatlantic Migration Patterns" east of the plaza. */
window.EPISODE = {
  id: '4.7',
  realm: 4,
  sol: 'AP 4.7',
  style: 'andes',
  weather: { sky: 'clear', time: 'day' },
  title: { en: 'Changing Social Hierarchies' },
  place: { en: 'Lima, Viceroyalty of Peru, 1650' },
  intro: [
    { en: 'The Void blurred the page on social hierarchies. Lima is forgetting who ranked its people, why, and who paid the cost.' },
    { en: 'Talk to the 4 people here and read the 2 sources on the lecterns. Help a court scribe, then wake the time stone.' }
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
        { en: 'My mother is Andean and my father came from Spain. Officials write "[[mestizo|mestizo]]" beside my name: their label for mixed parents, usually a Spanish father and an indigenous mother.' },
        { en: 'Spanish rulers made this ranking of labels by ancestry, the [[casta system|casta system]], to keep a small Spanish group on top. It says who holds power, not who is worth more.' },
        { en: 'The law also split society into [[two republics|two "republics"]]. The republic of Spaniards took in Spaniards plus enslaved Africans, mestizo children, Asians and every other non-Indian.' },
        { en: 'The republic of Indians held indigenous people living outside the major Spanish towns. The plan to keep them apart broke down almost at once. Look how many families are mixed!' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Under Spanish law, in which "republic" were enslaved Africans and mestizos placed?' },
        choices: [
          { ok: true, t: { en: 'The republic of Spaniards, with all other non-Indians' }, why: { en: 'Yes. "Republic" here meant a level of society with its own rules. Every non-Indian, even enslaved Africans, was placed with the Spaniards, though never as equals.' } },
          { t: { en: 'The republic of Indians, since none were born in Spain' }, why: { en: 'No. Birthplace did not decide it. The republic of Indians held only indigenous people living outside the major Spanish towns; every non-Indian went with the Spaniards.' } },
          { t: { en: 'The republic of Spaniards, as full equals of criollos' }, why: { en: 'No. The republic is right, but not as equals. Only Spaniards and criollos carried the label "Spanish," and the casta system ranked everyone else below them.' } },
          { t: { en: 'A separate casta rank outside both of the republics' }, why: { en: 'No. Casta labels ranked people by ancestry, but the law split society into only two republics. Mestizos and Africans were placed in the republic of Spaniards.' } }
        ]
      }
    },
    {
      x: 6, y: 13, name: { en: 'Isabel' }, role: { en: 'Seamstress' },
      look: { skin: 1, hair: '#3a2a1a', shirt: '#7a2a4a', robe: true, style: 'bun' },
      lines: [
        { en: 'I was born in Lima to Spanish parents, so I am a [[criollo|criolla]]. The label "Spanish" covers people born in Spain to Christian parents, and criollos born here.' },
        { en: 'Yet we are few. Mestizos, Africans, enslaved and free, and indigenous peoples greatly outnumber us. Still, the small group calling itself Spanish dominates government, economy and society.' },
        { en: 'I sew by the [[sumptuary laws|sumptuary laws]]. These dress codes limit clothing, weapons and transportation by social class, so everyone\'s rank shows on the street.' },
        { en: 'A 1573 law says married Spaniards must bring their wives to the colonies or return to Spain. The king\'s advisors want Spanish families here for good, to keep the hierarchy.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Which best describes the power of Spaniards and criollos in Lima compared with their numbers?' },
        choices: [
          { ok: true, t: { en: 'They held far more power than their small numbers' }, why: { en: 'Right. A small minority identifying as Spanish dominated government, economy and society. Colonial laws, even dress codes, held that rank in place.' } },
          { t: { en: 'They held power because they were the largest group' }, why: { en: 'No. They were few: mestizos, Africans and indigenous peoples greatly outnumbered them. Their power came from law and rank, not numbers.' } },
          { t: { en: 'Only the Spain-born held power; criollos had little' }, why: { en: 'No. The label "Spanish" covered criollos born in the Americas too. Together, that small group calling itself Spanish dominated Lima.' } },
          { t: { en: 'They shared power equally under the two republics' }, why: { en: 'No. The two republics split society apart; they did not share power. The plan rested on the false idea that Native people were inferior.' } }
        ]
      }
    },
    {
      x: 21, y: 14, name: { en: 'Felipa' }, role: { en: 'Food seller' },
      look: { skin: 5, hair: '#1b1410', shirt: '#d9822b', pants: '#5a3a2a', style: 'long' },
      lines: [
        { en: 'My mother was taken from West Africa and carried in chains across the [[middle passage|Middle Passage]]. I am free today, but many Africans in Lima are still enslaved.' },
        { en: 'Smallpox and other diseases killed millions of indigenous Americans, so planters wanted new workers. From 1580 on, enslaved Africans crossing the ocean far outnumbered European migrants.' },
        { en: 'Most were forced to cut sugar cane on [[plantation|plantations]] in Brazil, Cuba, Jamaica and Saint-Domingue. Brutal work killed so many that owners demanded even more captives.' },
        { en: 'Owners forbid large gatherings, but on Sundays people walk 4 or 5 miles to find their own language. Their children blend African and European ways into [[creole|creole]] communities.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Which best explains how high death rates on sugar plantations affected the slave trade?' },
        choices: [
          { ok: true, t: { en: 'They raised demand, so more captives were forced over' }, why: { en: 'Yes. Dangerous voyages and brutal work caused high death rates, which led to even greater demand for enslaved laborers.' } },
          { t: { en: 'They pushed planters to hire free European migrants' }, why: { en: 'No. Planters turned to free migrants only after the slave trade was abolished in the 1800s. Before then, they demanded more captives.' } },
          { t: { en: 'They led planters to rely on indentured servants' }, why: { en: 'No. Indentured servants were poor Europeans who agreed to sell years of labor. Sugar planters replaced the dead with more enslaved Africans.' } },
          { t: { en: 'They shrank the trade, which faded after the 1580s' }, why: { en: 'No. The reverse: from 1580 on, enslaved Africans far outnumbered European migrants, and the trade kept growing.' } }
        ]
      }
    },
    {
      x: 26, y: 6, name: { en: 'Quispe' }, role: { en: 'Andean stonemason' },
      look: { skin: 3, hair: '#1b1410', shirt: '#3a7a8a', pants: '#4a4a3a', hat: '#a8824a', style: 'short' },
      lines: [
        { en: 'I cut stone for the cathedral. My village belongs to the "republic of Indians." By law, no Spaniard or other non-Indian may spend the night there, except friars.' },
        { en: 'Spanish officials misjudged us as childlike, easily used by other Spaniards. Their plan to keep us apart rested on the false idea that we were inferior.' },
        { en: 'Men from Andean towns are forced to work in the silver mines: the [[mita|mita]]. Spanish South America has the richest silver mines in the world.' },
        { en: 'That silver fuels trade around the globe. It enriches Spain, western Europe and China, but only because indigenous people are forced to dig it.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Which best describes the global silver trade that ran through Peru?' },
        choices: [
          { ok: true, t: { en: 'It linked Europe and China but rested on forced labor' }, why: { en: 'Yes. Silver drove global trade and benefited Spain, western Europe and China. It was made possible by forced indigenous labor in South American mines.' } },
          { t: { en: 'It enriched Spain alone, which kept the silver at home' }, why: { en: 'No. Spain gained, but the silver fueled trade around the globe and enriched western Europe and China too.' } },
          { t: { en: 'It relied on enslaved Africans more than Native miners' }, why: { en: 'No. Most enslaved Africans were forced to farm sugar. The silver came from forced indigenous labor in the mines.' } },
          { t: { en: 'It paid mita workers, so the Andean towns grew rich' }, why: { en: 'No. The mita was forced labor, not paid work. The profits went to Spain, western Europe and China.' } }
        ]
      }
    },
    {
      doc: true, x: 23, y: 11, icon: '📜',
      name: { en: 'Sugar, Coffee and Two Continents' }, role: { en: 'Primary source' },
      src: { en: 'J.H. Bernardin de Saint-Pierre (1773); quoted in "Transatlantic Migration Patterns," World History Project' },
      lines: [
        { en: '"I do not know if coffee and sugar are essential to the happiness of Europe, but I know well that these two products have accounted for the unhappiness of two great regions of the world:…"' },
        { en: '"…America has been depopulated to have land on which to plant them; Africa has been depopulated so as to have the people to cultivate them."' },
        { en: 'Context: J.H. Bernardin de Saint-Pierre wrote this in 1773, as forced migration from Africa rose toward its peak (1760 to 1820). He weighs "the happiness of Europe," so his audience is the Europeans who bought these crops.' },
        { en: 'In his time, sugar in coffee and tea was still a luxury mostly for the wealthy. His purpose: to make those buyers see the cost. Disease and violence emptied American land, and captive Africans were forced across the ocean to farm it.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Sourcing: what is the author\'s main purpose in this passage?' },
        choices: [
          { ok: true, t: { en: 'To show Europeans the human cost of their crops' }, why: { en: 'Yes. He sets Europe\'s "happiness" against the "unhappiness" of America and Africa: emptied land, and people forced to farm it.' } },
          { t: { en: 'To celebrate cheap sugar for Europe\'s workers' }, why: { en: 'No. In 1773 sugar in coffee and tea was still a luxury mostly for the wealthy, and he questions whether it brings Europe happiness at all.' } },
          { t: { en: 'To blame disease alone for emptying the Americas' }, why: { en: 'No. Disease did empty the land, but his point ties both regions to Europe\'s crops: America emptied for land, Africa emptied for laborers.' } },
          { t: { en: 'To urge planters to replace captives with migrants' }, why: { en: 'No. He writes to European buyers and proposes no new labor system. Planters turned to free migrants only after the slave trade ended in the 1800s.' } }
        ]
      }
    },
    {
      doc: true, x: 28, y: 8, icon: '📖',
      name: { en: 'Chosen and Forced Crossings' }, role: { en: 'Reading' },
      src: { en: 'Adapted from "Transatlantic Migration Patterns" by Burleigh Hendrickson, World History Project (Khan Academy)' },
      lines: [
        { en: 'From the late 1400s, people migrated from Afro-Eurasia to the Americas. Three key events drove this migration: the Reformation, the decimation of the indigenous American population, and the sugar plantation system. Smallpox wiped out millions of indigenous Americans. Before 1580, the vast majority of migrants were Europeans who came of their own free will. In the 1630s and 1640s, 20,000 English Puritans fled strict religious rules for English colonies.' },
        { en: 'Other Europeans chose to escape poverty. Some sold four years of labor in exchange for the cost of travel: indentured servitude. A migrant who survived the voyage had a 1 in 4 chance of dying of disease in the first year. Still, voluntary migrants were always treated far better than captive Africans. From 1580 until the slave trade was gradually abolished in the early 1800s, enslaved Africans far outnumbered European migrants.' },
        { en: 'Forced migration peaked from 1760 to 1820, when almost 5 million enslaved Africans were forced across the Middle Passage. Most were enslaved to farm sugar cane: the Portuguese in Brazil, the Spanish in Cuba, the British in Jamaica and Antigua, and the French in Saint-Domingue, the most profitable of all. Dangerous voyages and brutal work caused high death rates. This, in turn, led to even greater demand for enslaved laborers.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Causation: which best explains why forced migrants outnumbered voluntary ones after 1580?' },
        choices: [
          { ok: true, t: { en: 'Disease killed Native workers, so sugar planters forced Africans over' }, why: { en: 'Yes. With the indigenous population decimated, plantation owners turned to enslaved Africans, and high death rates raised the demand even further.' } },
          { t: { en: 'The Reformation ended, so religious refugees stopped crossing' }, why: { en: 'No. Religious refugees kept coming: 20,000 Puritans fled in the 1630s and 1640s, after 1580. They chose to come, but captive Africans far outnumbered them.' } },
          { t: { en: 'Africans crossed as indentured servants who sold four years of work' }, why: { en: 'No. Indentured servants were poor Europeans who agreed to the bargain. Captive Africans were enslaved and had no choice.' } },
          { t: { en: 'European convicts and prisoners of war were shipped over in masses' }, why: { en: 'No. Convicts and prisoners of war were forced migrants, but few. Most forced migrants were enslaved Africans, brought to farm sugar cane.' } }
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
        { en: 'The Void\'s Ink Thief tore my copy into three pieces! Rosa the water seller sees everything. She works at the fountain in the plaza.' }
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
    intro: { en: 'The Void mixed up the record of [[transatlantic migration|transatlantic migration]]. Carry each card to how these people crossed the Atlantic: by choice, or by force. Voluntary migrants were always treated far better than captive Africans.' },
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
    name: { en: 'The Void' },
    appear: { en: 'The Void waits quietly on the far bank of the river.' },
    taunt: { en: 'Let the city forget who made these rankings, and who paid for them.' },
    win: { en: 'The Void closes. The page on social hierarchies returns, and with it the truth: rulers made these rankings to keep power.' },
    questions: [
      {
        stim: { text: { en: '"I do not know if coffee and sugar are essential to the happiness of Europe, but I know well that these two products have accounted for the unhappiness of two great regions of the world: America has been depopulated to have land on which to plant them; Africa has been depopulated so as to have the people to cultivate them."' }, src: { en: 'J.H. Bernardin de Saint-Pierre, 1773; quoted in "Transatlantic Migration Patterns," World History Project' } },
        q: { en: 'The author\'s point of view in the excerpt is best described as...' },
        choices: [{ en: 'critical of the human cost of Europe\'s crops' }, { en: 'supportive of expanding sugar into Brazil' }, { en: 'concerned mainly with Andean silver miners' }, { en: 'hopeful that free migrants would farm the crops' }],
        answer: 0,
        why: { en: 'He sets Europe\'s "happiness" against the "unhappiness" of America, emptied for land, and Africa, emptied for forced laborers. He questions whether these luxuries are worth that cost.' }
      },
      {
        stim: { title: { en: 'Who crossed the Atlantic?' }, rows: [[{ en: 'Period' }, { en: 'Most migrants were...' }], [{ en: 'Late 1400s to 1580' }, { en: 'Europeans who chose to come' }], [{ en: '1580 to the early 1800s' }, { en: 'Enslaved Africans, far outnumbering Europeans' }], [{ en: 'Peak, 1760 to 1820' }, { en: 'Almost 5 million enslaved Africans' }]], src: { en: 'From "Transatlantic Migration Patterns," World History Project' } },
        q: { en: 'Which of the following best explains the change shown in the table?' },
        choices: [{ en: 'Native peoples were decimated and sugar plantations spread' }, { en: 'The Reformation drove 20,000 Puritans to English colonies' }, { en: 'Indentured servitude grew among poor European migrants' }, { en: 'A 1573 law made married Spaniards bring their wives over' }],
        answer: 0,
        why: { en: 'With the indigenous population decimated by disease, sugar plantation owners turned to enslaved Africans. The Puritans and indentured servants were voluntary migrants, who after 1580 were far outnumbered.' }
      },
      {
        stim: { text: { en: 'Spaniards and criollos were greatly outnumbered by mestizos, Africans and indigenous peoples. Nevertheless, it was that small population identifying as Spaniards who dominated government, economy, and society.' }, src: { en: 'Adapted from "European Colonies in the Americas," World History Project' } },
        q: { en: 'The excerpt best supports which claim about Spanish colonial society?' },
        choices: [{ en: 'Power rested on rank set by law, not on numbers' }, { en: 'Criollos held less power than mestizos and Africans' }, { en: 'The republic of Indians governed the Spanish towns' }, { en: 'Power shifted to mestizos as their numbers grew' }],
        answer: 0,
        why: { en: 'A small group identifying as Spanish, including criollos, ruled a much larger population. Colonial rulers kept that power through laws that ranked people, not because they were many.' }
      },
      {
        stim: { text: { en: 'No Spaniards or other non-Indians could spend the night in an indigenous community, with the exception of Spanish friars.' }, src: { en: 'Adapted from "European Colonies in the Americas," World History Project' } },
        q: { en: 'This rule of the "two republics" most directly reflects...' },
        choices: [{ en: 'officials\' false belief that Native people were childlike' }, { en: 'the friars\' wish to keep Native towns free of Christianity' }, { en: 'the mita\'s need to keep miners close to the silver mines' }, { en: 'the casta rule that mestizos must live in Native towns' }],
        answer: 0,
        why: { en: 'Spanish officials misjudged indigenous people as childlike and inferior, and used that idea to keep them apart. Friars were allowed in to protect and convert them. The plan broke down almost at once.' }
      },
      {
        stim: { text: { en: 'The global silver trade, which benefited Spain, Western Europe, and China, was made possible by the forced labor of indigenous people in South American mines.' }, src: { en: 'Trevor Getz, "Unit 4 Introduction: Transoceanic Interconnections 1450 to 1750," World History Project' } },
        q: { en: 'The excerpt best supports the claim that colonial hierarchy in Peru...' },
        choices: [{ en: 'was tied to a world economy built on forced labor' }, { en: 'mattered only inside the Viceroyalty of Peru' }, { en: 'depended mainly on enslaved Africans in the mines' }, { en: 'gave Andean towns a large share of silver profits' }],
        answer: 0,
        why: { en: 'Under the mita, Andean men were forced to mine silver, and that silver enriched Spain, western Europe and China. Colonial rank at home fed a global economy.' }
      },
      {
        stim: { text: { en: 'Second-generation enslaved Africans combined African and European cultures and languages. Eventually, Creole (mixed) communities emerged.' }, src: { en: 'Adapted from "Transatlantic Migration Patterns," World History Project' } },
        q: { en: 'Compared with the casta labels made by colonial rulers, the creole communities in the excerpt...' },
        choices: [{ en: 'were built by enslaved people themselves, despite limits' }, { en: 'were set up by owners to encourage large gatherings' }, { en: 'were a legal rank inside the republic of Indians' }, { en: 'replaced African languages with European ones' }],
        answer: 0,
        why: { en: 'Rulers imposed the casta labels from above. Enslaved Africans, barred from large gatherings and free only on Sundays, built creole communities themselves, blending African and European ways.' }
      },
      {
        stim: { text: { en: 'Voluntary migrants were always treated far better than captive Africans. But their journey to the Americas could also be very dangerous.' }, src: { en: 'Adapted from "Transatlantic Migration Patterns," World History Project' } },
        q: { en: 'Which of the following best supports the second sentence of the excerpt?' },
        choices: [{ en: 'Survivors had a 1 in 4 chance of dying in year one' }, { en: 'Puritans were shipped over as prisoners of war' }, { en: 'Indentured servants could never earn freedom' }, { en: 'Spanish law kept migrants out of all colonial towns' }],
        answer: 0,
        why: { en: 'A voluntary migrant who survived the voyage still had a 1 in 4 chance of dying of disease in the first year. Puritans chose to come, and indentured servants worked a set term, often four years.' }
      },
      {
        q: { en: 'Which of the following best explains the purpose of the casta system in Spanish America?' },
        choices: [{ en: 'Colonial rulers used ancestry to keep Spaniards on top' }, { en: 'Friars used it to make all colonists equal in church' }, { en: 'Andean towns used it to choose their own leaders' }, { en: 'Planters used it to count enslaved Africans for sale' }],
        answer: 0,
        why: { en: 'Colonial rulers ranked people by their parents\' ancestry to keep a small Spanish group in power. The ranking said who held power, nothing true about anyone\'s worth.' }
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
