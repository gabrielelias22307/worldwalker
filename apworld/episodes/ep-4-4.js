/* HISTORYWALKER · Episode 4.4 · Maritime Empires Established (AP World Topic 4.4, c. 1450–1750)
   A QUIET episode (memorial: true): a town beside a Portuguese fort on the Gold Coast of West Africa, in 1630.
   The Atlantic slave trade is told plainly and with care: no jokes, no smudges, nothing about suffering is a prize,
   and the Void is "The Forgetting". The people are ordinary townspeople, a fort clerk and sailors (all invented).
   Content source: Khan Academy, AP World History (World History Project), Unit 4 Lesson "Maritime Empires Established":
   "Survey of Transoceanic Empires, 1450 to 1750" (Jack Bouchard), "The Cosmopolitan Indian Ocean" (Bennett Sherry),
   "European Colonies in the Americas" (William H. Beezley), "The Transatlantic Slave Trade" (Jake Thurman); and the unit
   overview "Unit 4 Introduction: Transoceanic Connections 1450 to 1750" (Trevor Getz). World History Project content is
   CC BY-NC 4.0. Facts here come from those readings. English only, AP level.
   Map: north-west, the town (two houses, the market, the town road); north-east, the inland path and the lagoon where
   salt is made; south-west, a house, the beach and the canoe landing; south-east, the fort (land gate on the west,
   sea gate on the south) and the shore below it, where the visit ends quietly. */
window.EPISODE = {
  id: '4.4',
  realm: 4,
  sol: 'AP 4.4',
  style: 'swahili',
  weather: { sky: 'clear', time: 'sunset' },
  memorial: true,
  title: { en: 'Maritime Empires Established' },
  place: { en: 'A fort town, Portuguese Gold Coast, West Africa, 1630' },
  intro: [
    { en: 'On this West African coast, the Void wants people to forget the sea empires and the [[transatlantic slave trade|slave trade]].' },
    { en: 'Listen with care to the 4 people here and read the 2 sources on their stands. Help a pilot, then visit the time stone.' }
  ],
  scenes: {
    at: [-1.35, 5.1],
    year: 1630,
    start: [
      { en: 'By 1630, Portugal held fortified trade posts along the coast of West Africa.' },
      { en: 'Here African and European traders exchanged goods for enslaved people.' },
      { en: 'Ships carried captives across the Atlantic to plantations in Brazil and the Caribbean.' }
    ],
    guess: {
      q: { en: 'Which crop drove the demand for enslaved labor in Brazil and the Caribbean?' },
      choices: [{ t: { en: 'Sugar' }, ok: true }, { t: { en: 'Potatoes' } }],
      why: { en: 'Sugar ruled these regions. More than 8 in 10 captives taken to the Americas landed in Brazil or the Caribbean.' }
    },
    page: { en: 'Castle-like prisons from the slave trade still stand along the coast of Ghana today.' },
    next: {
      q: { en: 'Next: maritime empires maintained. Did Europeans hold their colonies without resistance?' },
      choices: [{ t: { en: 'No, people resisted' }, ok: true }, { t: { en: 'Yes, no one resisted' } }],
      why: { en: 'Local communities often resisted European rule, and empires had to decide how to respond. You go there next.' }
    }
  },
  start: [9, 15],
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT',
    'Tpp...........p....:x.pp.....ppT',
    'Tp..HHH...HHH....p.:..~~~~~~~~.T',
    'T...NdN...NdN......:.~~~~~~~~~~T',
    'T..................:.~~~~~~~~~~T',
    'T.::::::::::::::::::.~~~~~~~~~~T',
    'T..................:.~~~~~~~~~.T',
    'T...lllllllll......:..~~~~~~~~.T',
    'T...lmlmlmlml......:.ssssssssssT',
    'Tp..lllllllll..p...:........p..T',
    'Tpp................:.....p.....T',
    'T........p..:..x...:......p...pT',
    'T.HHH.......:...WWWWWWWWWWWWW..T',
    'T.NdN.......:.p.WfffDDDDDfffW..T',
    'T...........:...WfffDDDDDfffW..T',
    'T....p......:...WfffffffffffW..T',
    'T...........::::lfffffffffffW..T',
    'T...............WWWWWWlWWWWWW..T',
    'TssssssssssssssssssssxssssssssrT',
    'TsssssskkssssssssssssssssssssrrT',
    'T~~~~~~kk~~~~~~~~~~~~~k~~~~~~~~T',
    'T==============================T'
  ],
  words: {
    'maritime empire': { en: 'an empire that relied on waterways to link the coasts, islands and port cities it controlled' },
    'trade post': { en: 'a fortified coastal base where Europeans traded with local people, like the Portuguese forts in West Africa' },
    'transatlantic slave trade': { en: 'the forced transport of about 12.5 million Africans to the Americas, from the 1500s to the 1800s' },
    'middle passage': { en: 'the voyage of enslaved Africans across the Atlantic, from West Africa to the Americas' },
    'plantation': { en: 'a large farm growing a cash crop, like sugar, worked by forced labor' },
    'mercantilism': { en: 'the economic idea that a state should export more than it imports and gather gold and silver' },
    'joint-stock company': { en: 'a private company licensed by a state; investors paid the costs of trade and empire and shared the profits' },
    'treaty of tordesillas': { en: 'the 1494 treaty that drew a line dividing the Atlantic world between Spain and Portugal' },
    'cosmopolitan': { en: 'full of many different peoples, languages and cultures living and trading together' },
    'diaspora': { en: 'a group of people living away from their homeland, like Armenian or Gujarati merchants in distant ports' }
  },
  npcs: [
    {
      x: 4, y: 17, name: { en: 'Esi' }, role: { en: 'Fish seller' },
      look: { skin: 5, hair: '#1b1410', shirt: '#d9822b', robe: true, style: 'bun' },
      lines: [
        { en: 'I sell fish to the town and the fort. Across the 1400s, Portuguese navigators charted this long coast, seeking trade here and then a way to the Indian Ocean.' },
        { en: 'They built fortified [[trade post|trade posts]] here, and later planted colonies in Brazil. Portugal\'s [[maritime empire|maritime empire]] is "a city here, a fort there, a few ships in between."' },
        { en: 'Spain is different. By the 1550s, wars and epidemics had brought much of Mexico, Central America and the Andes under Spanish rule: wide lands, not just ports.' },
        { en: 'But here the Portuguese rule nothing inland. In West Africa, Europeans came as traders who must work within our powerful states and follow their established rules.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Compared with Spain in the Americas, which best describes the Portuguese empire that Esi sees?' },
        choices: [
          { ok: true, t: { en: 'Scattered forts and ports linked by ships' }, why: { en: 'Yes. Portugal seized crucial points to control trade and waterways, not wide stretches of inland territory.' } },
          { t: { en: 'Wide inland lands won by wars and epidemics' }, why: { en: 'No. That was Spain in Mexico, Central America and the Andes. In West Africa, Europeans worked within powerful African states.' } },
          { t: { en: 'Coastal forts that ruled the states inland' }, why: { en: 'No. Portugal did build forts on this coast, but it ruled nothing inland. Europeans here were traders who worked within powerful African states and followed their rules.' } },
          { t: { en: 'Ports run from the start by joint-stock firms' }, why: { en: 'No. Joint-stock firms like the Dutch East India Company were how Portugal\'s rivals built empires later. Portugal had seized its forts and ports in the 1400s and early 1500s.' } }
        ]
      }
    },
    {
      x: 9, y: 18, name: { en: 'Kwame' }, role: { en: 'Canoe man' },
      look: { skin: 4, hair: '#1b1410', shirt: '#2a6a8a', pants: '#3a3a2a', style: 'short' },
      lines: [
        { en: 'I paddle cargo between the ships and the shore. Coastal elites are paid in guns, cotton cloth, glass, even foods made from sugar grown by enslaved people in the Americas.' },
        { en: 'European demand makes wars between African states more frequent. Rulers who win sell their captives, people they see as enemies, not as their own.' },
        { en: 'Captives are marched to this coast, some from more than 1,000 miles away. They are held in castle-like prisons until a European ship comes.' },
        { en: 'Then comes the [[middle passage|Middle Passage]]: two to three months, chained below deck. About 15 of every 100 people die on the way.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Which best explains the growth of the slave trade on this coast?' },
        choices: [
          { ok: true, t: { en: 'European demand, supplied through African wars' }, why: { en: 'Yes. Many of those doing the capturing were African, but European demand and economic muscle drove the trade and its volume.' } },
          { t: { en: 'European armies raiding deep into the interior' }, why: { en: 'No. Europeans ruled nothing inland. Many of those doing the capturing were African; captives were marched to the coast and sold to European ships.' } },
          { t: { en: 'Rulers selling their own subjects to pay debts' }, why: { en: 'No. Debt was one basis of older slavery in Africa. Kwame says rulers who won wars sold their captives, people they saw as enemies, not as their own.' } },
          { t: { en: 'Trans-Saharan buyers seeking household servants' }, why: { en: 'No. That older trade sent captives across the Sahara to the Muslim world. The Atlantic trade fed plantations in the Americas.' } }
        ]
      }
    },
    {
      x: 19, y: 15, name: { en: 'Duarte' }, role: { en: 'Fort clerk' },
      look: { skin: 1, hair: '#3a2a1a', shirt: '#2a3a6a', pants: '#2a2a2a', hat: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'I keep the fort\'s ledgers. The first Portuguese slaving voyage from Africa to the Americas most likely sailed in 1526. Now most ships from here go to Brazil.' },
        { en: 'In Brazil, only 2 of the king\'s 15 captaincies prospered, thanks to sugar [[plantation|plantations]]. Disease has killed many Indigenous Americans, so planters buy Africans.' },
        { en: 'The ledgers hide what sugar costs. Work runs from sunup to sunset. In Brazil an enslaved person lives only 23 years on average, so planters keep buying more.' },
        { en: 'My king follows [[mercantilism|mercantilist]] thinking: export more than you import, and gather gold and silver. So Portugal guards its African trade fiercely.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why did European states guard their trading rights in Africa so fiercely?' },
        choices: [
          { ok: true, t: { en: 'To export more and gather gold and silver' }, why: { en: 'Yes. Mercantilist states wanted to export more than they imported. The slave trade brought them more gold and silver than ever.' } },
          { t: { en: 'To uphold the Tordesillas line against Spain' }, why: { en: 'No. The 1494 treaty did keep Spain out of West Africa, but Duarte gives a mercantilist reason: export more than you import and gather gold and silver.' } },
          { t: { en: 'To fund an industrial revolution at home' }, why: { en: 'No. That effect came later and in Britain: slave-trade wealth helped bring the Industrial Revolution. Around 1630 the aim was mercantilist: more exports, more gold and silver.' } },
          { t: { en: 'To open African trade to all European merchants' }, why: { en: 'No. Mercantilist states wanted trade for themselves. Portugal guarded this coast against Dutch, English and French rivals.' } }
        ]
      }
    },
    {
      x: 8, y: 7, name: { en: 'Daud' }, role: { en: 'Malay sailor' },
      look: { skin: 3, hair: '#1b1410', shirt: '#8a2a2a', pants: '#3a3a4a', hat: '#c9a24a', style: 'short' },
      lines: [
        { en: 'I am a Malay sailor on a Portuguese ship from Goa, the center of Portugal\'s empire in Asia. Malay sailors run many of its ships.' },
        { en: 'When Vasco da Gama reached Calicut in 1498, the ruler\'s men laughed at his gift of wool, sugar, oil and honey. It was not fit for a king.' },
        { en: 'In the [[cosmopolitan|cosmopolitan]] Indian Ocean, most goods still move on the old Asian routes, and China and India remain the greatest makers. Gujarati, Chinese and Armenian merchants fill the ports.' },
        { en: 'Empire is costly. So the Dutch East India Company, a [[joint-stock company|joint-stock company]], now seizes ports there: private investors bear the costs, and the state gains trade and taxes.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Compared with the Americas, how strong were Europeans in the Indian Ocean around 1630?' },
        choices: [
          { ok: true, t: { en: 'They held small outposts in a busy ocean' }, why: { en: 'Yes. Europeans held only small outposts. Most goods still moved on the old Asian routes, and Gujarati, Chinese, Armenian and other [[diaspora|diaspora]] merchants kept trading.' } },
          { t: { en: 'Joint-stock firms carried most Asian trade' }, why: { en: 'No. The Dutch East India Company was seizing ports, but most goods still moved on the old Asian routes, and the overland Silk Road stayed outside European control.' } },
          { t: { en: 'Portugal ruled the ocean from its base at Goa' }, why: { en: 'No. Goa was the center of Portugal\'s empire in Asia, but the Ming, Mughal, Safavid and Ottoman empires stayed strong, and the Ottomans fought Portugal at sea.' } },
          { t: { en: 'Their goods were prized at Asian courts' }, why: { en: 'No. At Calicut in 1498, the ruler\'s men laughed at Vasco da Gama\'s gift of wool, sugar, oil and honey. China and India remained the greatest makers.' } }
        ]
      }
    },
    {
      doc: true, x: 25, y: 15, icon: '📜',
      name: { en: 'A Portuguese World Map, 1502' }, role: { en: 'Primary source' },
      src: { en: 'The Cantino Planisphere, a Portuguese map, 1502; described in "European Colonies in the Americas" by William H. Beezley, World History Project' },
      lines: [
        { en: 'This source is a map, not a text: a Portuguese world map from 1502, called the Cantino Planisphere. The reading describes it: "On the left side of the map, a vertical line shows the border of the Treaty of Tordesillas."' },
        { en: 'The reading adds: "The Portuguese got more from the treaty than they would have with the Pope\'s proposal, but either way Spain got a lot more of the Americas than did Portugal."' },
        { en: 'Context: In 1493 Pope Alexander VI divided the Atlantic between Spain and Portugal at 100 leagues west of the Cape Verde islands. He told explorers to convert any pagans they met. King John II of Portugal rejected this, partly because the Pope was Spanish by birth. The 1494 Treaty of Tordesillas moved the line to 270 leagues west.' },
        { en: 'Each kingdom was kept out of the other\'s lands. Spain got nearly all of the Americas. Portugal got a claim to north-eastern Brazil, control of West Africa, where the slave trade quickly developed, and the shortest route around the Cape of Good Hope to Asia. Portuguese mapmakers drew this map 8 years after the treaty.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Sourcing: why might Portuguese mapmakers in 1502 draw the Tordesillas line on a world map?' },
        choices: [
          { ok: true, t: { en: 'To record the claims the treaty gave Portugal' }, why: { en: 'Yes. The line marked Portugal\'s claim to Brazil, West Africa and the route to Asia, and kept Spain out of them.' } },
          { t: { en: 'To show the Pope\'s 1493 line, which Portugal accepted' }, why: { en: 'No. King John II rejected the Pope\'s line; the treaty moved it from 100 to 270 leagues west.' } },
          { t: { en: 'To show that Spain\'s half took in all of Brazil' }, why: { en: 'No. Spain got nearly all of the Americas, but the line gave Portugal a claim to north-eastern Brazil.' } },
          { t: { en: 'To show that Portugal won most of the Americas' }, why: { en: 'No. Portugal got more than under the Pope\'s line, but "Spain got a lot more of the Americas than did Portugal."' } }
        ]
      }
    },
    {
      doc: true, x: 14, y: 8, icon: '📖',
      name: { en: 'The Transatlantic Slave Trade' }, role: { en: 'Reading' },
      src: { en: 'Adapted from "The Transatlantic Slave Trade" by Jake Thurman, World History Project (Khan Academy)' },
      lines: [
        { en: 'Slavery is old: Athenians, Romans and early states in China and India had it, and so did parts of Africa, based in warfare, debt, religious obligation or punishment. There slaves were not property; their children were often free. In the medieval Muslim world, slaves came from East Africa and across the Sahara to serve in households, harems and armies, twice as many women as men. In the Americas that ratio was reversed.' },
        { en: 'Plantations let Brazil and the Caribbean export sugar on a large scale, creating a demand for labor. Europeans wanted to own the fields, not work them, and European diseases had wiped out Indigenous populations. So Europeans looked to Africa. The trade most likely began with a Portuguese voyage in 1526. About 12.5 million Africans were taken to the Americas; about 2.5 million died on the voyage. More than 8 in 10 landed in Brazil or the Caribbean.' },
        { en: 'Many of those doing the enslaving were Africans, but European demand and economic muscle drove the trade. When the Oyo Empire defeated rivals in the southern Yoruba states, it sold its captives, whom it saw as enemies, not its "own." Elites were paid in guns, cotton textiles and glass. Many African communities collapsed. In Brazil an enslaved person lived only 23 years on average. The wealth helped bring the Industrial Revolution, which began in Britain.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Causation: which chain of causes and effects best fits the reading?' },
        choices: [
          { ok: true, t: { en: 'Sugar and Native deaths made demand; demand spread war in Africa' }, why: { en: 'Yes. Sugar plantations needed labor, disease had killed Indigenous workers, and European demand increased warfare inside Africa.' } },
          { t: { en: 'Wars in Africa made captives, so Europeans started sugar farms' }, why: { en: 'No. It ran the other way: plantations created the demand for labor, and that demand increased warfare in Africa.' } },
          { t: { en: 'Muslim households\' demand for servants grew into the Atlantic trade' }, why: { en: 'No. That older system served households, harems and armies. The Atlantic trade was built to supply plantations.' } },
          { t: { en: 'British industry made the demand that started sugar farms' }, why: { en: 'No. That reverses it. Sugar plantations came first; the wealth of the slave trade later helped bring the Industrial Revolution, which began in Britain.' } }
        ]
      }
    }
  ],
  houses: [
    { at: [5, 3], name: { en: 'Nana Yaa' }, look: { skin: 5, hair: '#2b1d14', shirt: '#2a8a6a', robe: true, style: 'bun' },
      lines: [{ en: 'Portuguese ships bring cotton cloth from India. India still makes much of the world\'s finest cloth.' }, { en: 'Coastal rulers are paid in cloth, guns and glass for captives. Our town fears the raids.' }] },
    { at: [11, 3], name: { en: 'Kojo' }, look: { skin: 4, hair: '#1b1410', shirt: '#6a7a4a', pants: '#3a3a2a', style: 'short' },
      lines: [{ en: 'Dutch ships sail past now, hoping to break Portugal\'s hold on this coast.' }, { en: 'English and French ships come too. Each one wants a share of the trade.' }] },
    { at: [3, 13], name: { en: 'Grandmother Akua' }, look: { skin: 5, hair: '#b0b0b0', shirt: '#7a3a5a', robe: true, style: 'bun' },
      lines: [{ en: 'Captives pass through here from very far inland. Most will never see their homes again.' }, { en: 'Whole communities inland have collapsed. We still speak the names of those taken, so they are not forgotten.' }] }
  ],
  signs: [
    { x: 20, y: 1, text: { en: 'TO THE INTERIOR · Captives were marched to this coast, some from more than 1,000 miles away.' } },
    { x: 15, y: 11, text: { en: 'THE FORT · A Portuguese fortified trade post on the coast of West Africa.' } },
    { x: 21, y: 18, text: { en: 'THE SEA GATE · Castles on this coast became "Points of No Return," the last ground many captives saw in Africa.' } }
  ],
  finds: [
    { clueAt: [14, 17], at: [14, 19], decor: 'shell', clue: { en: 'From this note, walk 2 steps south onto the wet sand by the water.' },
      text: { en: 'A shell from the Atlantic shore. By the 1500s, ships linked all of the world\'s major oceans.' } }
  ],
  scraps: [[30, 6], [1, 19], [30, 12]],
  smudges: [], // a memorial: nothing to fight here
  quest: {
    stat: 'reg',
    title: { en: 'The Pilot\'s Chart' },
    giver: {
      x: 26, y: 18, name: { en: 'Lourenço' }, role: { en: 'Ship\'s pilot' },
      look: { skin: 2, hair: '#2b1d14', shirt: '#4a6a8a', pants: '#3a2a1a', hat: '#5a3a1a', style: 'short' },
      lines: [
        { en: 'I am a ship\'s pilot. My chart shows the line of the [[treaty of tordesillas|Treaty of Tordesillas]], which split the Atlantic world between Spain and Portugal in 1494.' },
        { en: 'A gust tore it from my hands and carried it inland. Ask Abena, who makes salt by the lagoon, north of the fort.' }
      ],
      wait: { en: 'Abena works on the sand beside the lagoon, north-east of the town. Go around the fort.' },
      thanks: { en: 'My chart! The line gave Spain most of the Americas, from Mexico to the Andes. Portugal got Brazil, West Africa and the sea road to Asia.' }
    },
    contact: {
      x: 25, y: 8, name: { en: 'Abena' }, role: { en: 'Salt maker' },
      look: { skin: 4, hair: '#1b1410', shirt: '#c0392b', robe: true, style: 'long' },
      lines: [
        { en: 'I make salt from the lagoon and trade it inland. Traders on the inland path say raids and wars are spreading.' },
        { en: 'I saw your paper fly west over the town. Follow the town road west to its very end, then walk 4 steps south into the palms.' }
      ]
    },
    action: {
      type: 'find', at: [2, 9],
      hint: { en: 'West end of the town road, then 4 steps south' },
      found: { en: 'There it is, caught on a palm: the pilot\'s chart, with a line drawn down the Atlantic.' },
      item: { icon: '🗺️', name: { en: 'Lourenço\'s chart' } }
    }
  },
  challenge: {
    at: [13, 14], type: 'claim', stat: 'hei',
    title: { en: 'How was the Atlantic slave trade different?' },
    intro: { en: 'Slavery existed in many societies before 1500. Pick the claim the evidence best supports. Back it up with evidence about scale and about status and purpose.' },
    options: [
      { icon: '⚖️', name: { en: 'It differed in scale, purpose and violence' }, desc: { en: 'Far larger, built for plantation profit, and far more brutal' },
        result: { en: 'A strong claim. Many historians argue the Atlantic system differed from earlier slavery in scale, purpose and violence.' } },
      { icon: '🔁', name: { en: 'It was the same as earlier slavery' }, desc: { en: 'Nothing new: just like slavery in Africa or the Muslim world' },
        result: { en: 'The evidence does not support this claim.' } },
      { icon: '⛵', name: { en: 'Europeans ran it with no African traders' }, desc: { en: 'Europeans did all of the capturing themselves' },
        result: { en: 'The evidence does not support this claim.' } }
    ],
    kinds: [
      { id: 'scale', label: { en: 'Evidence about scale' } },
      { id: 'status', label: { en: 'Evidence about status and purpose' } }
    ],
    reasons: [
      { kind: 'scale', fits: [0], t: { en: 'About 12.5 million Africans were taken across the Atlantic; about 2.5 million died on the voyage.' },
        why: { en: 'This is true. The sheer volume of the Atlantic trade sets it apart from earlier slavery.' } },
      { kind: 'scale', fits: [0], t: { en: 'European demand greatly increased warfare inside Africa, and many communities collapsed.' },
        why: { en: 'This is true. African elites did much of the capturing, but European demand drove the trade to this size.' } },
      { kind: 'scale', fits: [], t: { en: 'Only a few thousand Africans were ever taken to the Americas.' },
        why: { en: 'This is false. About 12.5 million Africans were taken from the coast of Africa to the Americas.' } },
      { kind: 'status', fits: [0], t: { en: 'In the Atlantic system, enslaved people were treated as property, in bondage without end.' },
        why: { en: 'This is true. In some earlier African societies, slaves were not property, and their children were often free.' } },
      { kind: 'status', fits: [0], t: { en: 'Most were forced to grow sugar on plantations in Brazil and the Caribbean.' },
        why: { en: 'This is true. Sugar plantations demanded huge numbers of laborers, and that demand made the trade grow.' } },
      { kind: 'status', fits: [], t: { en: 'Most were taken to serve as household servants and soldiers.' },
        why: { en: 'This is false for the Atlantic trade. That pattern fit earlier slavery in the Muslim world, not plantation slavery in the Americas.' } }
    ],
    mismatch: { en: 'That evidence does not back up the claim you picked.' },
    success: { en: 'Claim and evidence match. The Atlantic slave trade was larger, more violent and built for plantation profit. Remember the people behind the numbers.' }
  },
  boss: {
    at: [28, 19], stat: 'reg', need: 3,
    name: { en: 'The Forgetting' },
    appear: { en: 'The Forgetting has covered the shore below the fort in gray fog.' },
    taunt: { en: 'No one will remember the people who left from this shore.' },
    win: { en: 'The fog lifts from the shore. Their story can be told again. The chronicle page returns.' },
    questions: [
      {
        stim: { title: { en: 'The transatlantic slave trade (estimates)' }, rows: [[{ en: 'Measure' }, { en: 'Estimate' }], [{ en: 'Africans taken to the Americas' }, { en: 'about 12.5 million' }], [{ en: 'Died during the voyage' }, { en: 'about 2.5 million' }], [{ en: 'Landed in Brazil or the Caribbean' }, { en: 'more than 8 in 10' }], [{ en: 'Average life expectancy, enslaved in Brazil' }, { en: '23 years' }]], src: { en: 'From "The Transatlantic Slave Trade," World History Project' } },
        q: { en: 'Which of the following best explains the pattern shown in the table?' },
        choices: [{ en: 'Andean silver mines drew most captives to Peru' }, { en: 'Muslim households bought most captives as servants' }, { en: 'Sugar needed labor, and deaths renewed demand' }, { en: 'Tobacco farms in English colonies took most workers' }],
        answer: 2,
        why: { en: 'Sugar plantations in Brazil and the Caribbean demanded huge numbers of laborers, and the high death rate only led to even greater demand.' }
      },
      {
        stim: { text: { en: 'In some earlier African societies, slave trading was based in warfare, debt, religious obligation, or punishment for crimes. Slaves were not considered property, and children of the enslaved were often considered free.' }, src: { en: 'Adapted from "The Transatlantic Slave Trade," World History Project' } },
        q: { en: 'Compared with the system described in the excerpt, the transatlantic system differed most directly in that it...' },
        choices: [{ en: 'relied on captives taken in wars between states' }, { en: 'treated enslaved people as property, without end' }, { en: 'held about twice as many women as men in bondage' }, { en: 'moved captives across the Sahara to the Middle East' }],
        answer: 1,
        why: { en: 'The Atlantic system made people property in unending bondage. War captives were a continuity, and the other two describe the older trade to the Muslim world.' }
      },
      {
        stim: { title: { en: 'A Portuguese world map, 1502' }, text: { en: '"On the left side of the map, a vertical line shows the border of the Treaty of Tordesillas."' }, src: { en: 'The Cantino Planisphere, 1502; described in "European Colonies in the Americas," World History Project' } },
        q: { en: 'The line on this map most directly reflects which development?' },
        choices: [{ en: 'The Pope\'s 1493 line, which Portugal\'s king accepted' }, { en: 'A Dutch company\'s claim to the West African coast' }, { en: 'Spain\'s conquest of north-eastern Brazil' }, { en: 'Spain and Portugal dividing the Atlantic world' }],
        answer: 3,
        why: { en: 'The 1494 treaty moved the Pope\'s line to 270 leagues west. Spain got most of the Americas; Portugal got Brazil, West Africa and the route to Asia.' }
      },
      {
        stim: { text: { en: 'When the Oyo Empire of West Africa defeated rivals in the southern Yoruba states, they profited by selling their captives into slavery. The Oyo would not have considered this selling their "own," for the Yoruba had been their enemy.' }, src: { en: 'Adapted from "The Transatlantic Slave Trade," World History Project' } },
        q: { en: 'The excerpt best supports which claim about the slave trade in West Africa?' },
        choices: [{ en: 'African elites took part, but European demand made it pay' }, { en: 'European armies fought the Oyo wars to take captives' }, { en: 'The Oyo sold their own subjects to pay European taxes' }, { en: 'Earlier slavery in Africa had treated captives as property' }],
        answer: 0,
        why: { en: 'African elites did much of the capturing, but European demand made war captives profitable. Elites were paid in guns, cotton cloth and glass.' }
      },
      {
        stim: { text: { en: 'In the early 1500s, the Portuguese focused on seizing crucial points to gain access to trade and control of waterways. The result was an empire of widely distant points: a city here, a fort there, a few ships in between.' }, src: { en: 'Adapted from "Survey of Transoceanic Empires, 1450 to 1750," World History Project' } },
        q: { en: 'Compared with Spain\'s empire in the Americas by the 1550s, the empire in the excerpt...' },
        choices: [{ en: 'ruled more inland land than Spain held in Mexico' }, { en: 'was paid for from the start by joint-stock firms' }, { en: 'held scattered points, not wide territories' }, { en: 'had taken the main ports of the Mughals and Ming' }],
        answer: 2,
        why: { en: 'Portugal held forts and ports linked by ships. Spain, through wars and epidemics, ruled much of Mexico, Central America and the Andes.' }
      },
      {
        q: { en: 'Which of the following best explains why European states licensed joint-stock companies such as the Dutch East India Company?' },
        choices: [{ en: 'To end mercantilist control of overseas trade' }, { en: 'Empire was costly, so investors bore the cost' }, { en: 'To hand ocean trade to Armenian merchant networks' }, { en: 'To keep Asian merchants out of the Indian Ocean' }],
        answer: 1,
        why: { en: 'Conquering and defending a maritime empire was costly. Private investors paid for ships and forts, while the state gained trade and taxes.' }
      },
      {
        stim: { text: { en: 'After Europeans first arrived in the Indian Ocean, the bulk of trade goods continued to move along the same old routes in Asia and the Indian Ocean. Likewise, China and India remained the most productive manufacturers.' }, src: { en: 'Adapted from "The Cosmopolitan Indian Ocean," World History Project' } },
        q: { en: 'Which of the following was a continuity in the Indian Ocean world after 1500, as the excerpt describes?' },
        choices: [{ en: 'Europeans took over the overland Silk Road trade' }, { en: 'Portuguese gunboats ended Ottoman trade at sea' }, { en: 'Diaspora merchants were driven from the ports' }, { en: 'Asian routes and makers stayed central to trade' }],
        answer: 3,
        why: { en: 'Europeans held only small outposts. Most goods still moved on old Asian routes, China and India stayed the top makers, and diaspora merchants kept trading.' }
      },
      {
        stim: { text: { en: 'Europeans fiercely protected their trading rights in Africa. They wanted to export more than they imported, and the slave trade brought them more gold and silver than ever before. This wealth would also help to bring about the Industrial Revolution.' }, src: { en: 'Adapted from "The Transatlantic Slave Trade," World History Project' } },
        q: { en: 'The excerpt most directly reflects which economic idea, and which long-term effect?' },
        choices: [{ en: 'Mercantilism; its wealth helped spur British industry' }, { en: 'Free trade; it ended state control of African trade' }, { en: 'Mercantilism; it made silver from the Americas unneeded' }, { en: 'Joint-stock investing; it brought the trade to an end' }],
        answer: 0,
        why: { en: 'Mercantilist states aimed to sell more than they bought and gather gold and silver. Wealth from the slave trade helped bring the Industrial Revolution in Britain.' }
      }
    ]
  },
  learned: [
    { en: 'Portugal built a [[maritime empire|maritime empire]] of fortified [[trade post|trade posts]] and seized ports linked by ships; Spain took most of the Americas.' },
    { en: 'Rivals used [[joint-stock company|joint-stock companies]] like the Dutch East India Company, but in the [[cosmopolitan|cosmopolitan]] Indian Ocean, Europeans held only small outposts.' },
    { en: 'The [[transatlantic slave trade|transatlantic slave trade]] forced about 12.5 million Africans across the [[middle passage|Middle Passage]], mostly to sugar [[plantation|plantations]].' }
  ],
  reflect: {
    q: { en: 'AP practice: Explain one way the Atlantic slave trade differed from earlier forms of slavery.' },
    starter: { en: 'One way the Atlantic slave trade differed was' }
  }
};
