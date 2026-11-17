/* HISTORYWALKER · Episode 4.4 · Maritime Empires Established (AP World Topic 4.4, c. 1450–1750)
   A QUIET episode (memorial: true): a town beside a Portuguese fort on the Gold Coast of West Africa, in 1630.
   The Atlantic slave trade is told plainly and with care: no jokes, no smudges, nothing about suffering is a prize,
   and the Grump is "The Forgetting". The people are ordinary townspeople, a fort clerk and sailors (all invented).
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
    { en: 'On this West African coast, the Grump wants people to forget the sea empires and the [[transatlantic slave trade|slave trade]].' },
    { en: 'Listen with care to the 4 people here, help a pilot, then visit the time stone.' }
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
        { en: 'I sell fish to the town and to the fort. The Portuguese built that fort as a fortified [[trade post|trade post]] on our coast.' },
        { en: 'Portugal\'s [[maritime empire|maritime empire]] is a fort here, a city there, and a few ships in between, all linked by the sea.' },
        { en: 'They do not rule the lands inland. To trade on this coast, they must work with our powerful rulers and follow their rules.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Which best describes the Portuguese empire that Esi sees?' },
        choices: [
          { ok: true, t: { en: 'Forts and ports on coasts, linked by ships' }, why: { en: 'Yes. Portugal seized key points to control trade and waterways, not wide stretches of inland territory.' } },
          { t: { en: 'Wide inland lands ruled from this one fort' }, why: { en: 'No. In West Africa, Europeans came as traders who had to work within powerful states that already existed.' } },
          { t: { en: 'A land empire linked by roads and caravans' }, why: { en: 'No. A maritime empire relied on waterways to link the coasts, islands and port cities it held.' } }
        ]
      }
    },
    {
      x: 9, y: 18, name: { en: 'Kwame' }, role: { en: 'Canoe man' },
      look: { skin: 4, hair: '#1b1410', shirt: '#2a6a8a', pants: '#3a3a2a', style: 'short' },
      lines: [
        { en: 'I paddle cargo between the ships and the shore. Europeans pay coastal rulers with guns, cotton cloth and glass. In return, they want captives.' },
        { en: 'Their demand makes wars inland more frequent. Captives of war are marched to this coast, some from more than 1,000 miles away.' },
        { en: 'They are held in the fort until a ship comes. Then they are forced across the ocean, on the [[middle passage|Middle Passage]].' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'What most drove the growth of the slave trade on this coast?' },
        choices: [
          { ok: true, t: { en: 'European demand for labor in the Americas' }, why: { en: 'Yes. Many of the people doing the capturing were African, but European demand and wealth drove the trade and its huge size.' } },
          { t: { en: 'A shortage of food in West African towns' }, why: { en: 'No. Kwame names the cause: Europeans paid for captives, and that made wars inland more frequent.' } },
          { t: { en: 'African rulers who wished to settle the Americas' }, why: { en: 'No. Captives were forced across the ocean. The rulers who sold them were paid in goods like guns and cloth.' } }
        ]
      }
    },
    {
      x: 19, y: 15, name: { en: 'Duarte' }, role: { en: 'Fort clerk' },
      look: { skin: 1, hair: '#3a2a1a', shirt: '#2a3a6a', pants: '#2a2a2a', hat: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'I keep the fort\'s ledgers. Ships from here sail to Brazil, where Portuguese planters grow sugar on [[plantation|plantations]].' },
        { en: 'Disease has killed many Indigenous Americans. So planters look to Africa for forced labor. Sugar takes brutal work from sunup to sunset.' },
        { en: 'My king follows [[mercantilism|mercantilist]] thinking: export more than you import, and gather gold and silver. So Portugal guards its African trade fiercely.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why did European states guard their trading rights in Africa so fiercely?' },
        choices: [
          { ok: true, t: { en: 'To export more and gather gold and silver' }, why: { en: 'Yes. Mercantilist states wanted to sell more than they bought. The slave trade brought them more gold and silver than ever.' } },
          { t: { en: 'To settle and farm all of Africa\'s interior' }, why: { en: 'No. Europeans held points on the coast here. They did not rule or settle the lands inland.' } },
          { t: { en: 'To stop other states from using slavery' }, why: { en: 'No. Portugal and its rivals competed to profit from the slave trade, not to end it.' } }
        ]
      }
    },
    {
      x: 8, y: 7, name: { en: 'Daud' }, role: { en: 'Malay sailor' },
      look: { skin: 3, hair: '#1b1410', shirt: '#8a2a2a', pants: '#3a3a4a', hat: '#c9a24a', style: 'short' },
      lines: [
        { en: 'I am a Malay sailor. I came on a Portuguese ship from Goa, the center of Portugal\'s empire in Asia.' },
        { en: 'In the [[cosmopolitan|cosmopolitan]] Indian Ocean, Portugal seized some ports and charged fees. But the sea is crowded with Gujarati, Chinese and Armenian traders.' },
        { en: 'Now the Dutch seize ports there too, for the Dutch East India Company. In a [[joint-stock company|joint-stock company]], private investors pay the costs of empire.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Compared with the Americas, how strong were Europeans in the Indian Ocean around 1630?' },
        choices: [
          { ok: true, t: { en: 'They held small outposts in a busy ocean' }, why: { en: 'Yes. Europeans controlled only small outposts, and most goods still moved along the old Asian routes.' } },
          { t: { en: 'They had conquered the great Asian empires' }, why: { en: 'No. The Ming, Mughal, Safavid and Ottoman empires stayed strong. The Ottomans even fought the Portuguese at sea.' } },
          { t: { en: 'They had stopped all trade by Asian merchants' }, why: { en: 'No. Gujarati, Chinese, Armenian and other [[diaspora|diaspora]] merchants kept trading, and Europeans often hired them.' } }
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
        stim: { title: { en: 'The transatlantic slave trade (estimates)' }, rows: [[{ en: 'Measure' }, { en: 'Estimate' }], [{ en: 'Africans taken to the Americas' }, { en: 'about 12.5 million' }], [{ en: 'Died during the voyage' }, { en: 'about 2.5 million' }], [{ en: 'Landed in Brazil or the Caribbean' }, { en: 'more than 8 in 10' }]], src: { en: 'From "The Transatlantic Slave Trade," World History Project' } },
        q: { en: 'Which development best explains where most captives were taken, as shown in the table?' },
        choices: [{ en: 'Sugar plantations demanded huge numbers of workers' }, { en: 'Silver mines in Europe needed many thousands of new miners' }, { en: 'Brazil and the Caribbean had no Native peoples' }, { en: 'Ships could not sail any farther to the north' }],
        answer: 0,
        why: { en: 'Sugar ruled Brazil and the Caribbean. Its plantations needed so much labor that they drove the demand for enslaved Africans.' }
      },
      {
        stim: { text: { en: 'In some earlier African societies, slaves were not considered property, and children of the enslaved were often considered free.' }, src: { en: 'Adapted from "The Transatlantic Slave Trade," World History Project' } },
        q: { en: 'Compared with the system described above, the Atlantic slave trade...' },
        choices: [{ en: 'treated people as property, in bondage without end' }, { en: 'let most enslaved people buy freedom in a year' }, { en: 'took mostly women to serve in rich households' }, { en: 'was smaller and much less violent than earlier slavery' }],
        answer: 0,
        why: { en: 'The Atlantic system made enslaved people property, in unending bondage. Its scale, purpose and violence set it apart.' }
      },
      {
        stim: { text: { en: 'The Portuguese seized crucial points to gain access to trade and control of waterways. The result was an empire of widely distant points: a city here, a fort there, a few ships in between.' }, src: { en: 'Adapted from "Survey of Transoceanic Empires, 1450 to 1750," World History Project' } },
        q: { en: 'The excerpt best describes which kind of empire?' },
        choices: [{ en: 'A maritime empire of coastal trade posts' }, { en: 'A land empire ruling wide inland territory' }, { en: 'A nomadic empire of mounted horse riders' }, { en: 'A tribute empire run from one inland capital' }],
        answer: 0,
        why: { en: 'Portugal\'s empire relied on the sea to link the forts, ports and cities it seized, like the fort on this coast.' }
      },
      {
        stim: { text: { en: 'When the Oyo Empire of West Africa defeated rivals in the southern Yoruba states, they profited by selling their captives into slavery.' }, src: { en: 'Adapted from "The Transatlantic Slave Trade," World History Project' } },
        q: { en: 'Which best explains the development described above?' },
        choices: [{ en: 'European demand made selling war captives profitable' }, { en: 'Europeans conquered the Oyo and fought all of its wars' }, { en: 'New crops caused farming in Africa to collapse' }, { en: 'The Ottomans closed all trade across the Sahara' }],
        answer: 0,
        why: { en: 'European demand for enslaved labor increased warfare in Africa. Rulers were paid in guns, cloth and glass for their captives.' }
      },
      {
        q: { en: 'Why did European states license joint-stock companies, such as the Dutch East India Company, in the 1600s?' },
        choices: [{ en: 'To shift the costs of empire to private investors' }, { en: 'To let local rulers run all of their own ocean trade' }, { en: 'To end the slave trade across the Atlantic' }, { en: 'To hire Ottoman sailors for their own navies' }],
        answer: 0,
        why: { en: 'Empire was costly. In a joint-stock company, private investors paid for ships and forts, while the state gained trade and taxes.' }
      },
      {
        stim: { text: { en: 'The treaty\'s imaginary line gave Spain all the Americas, except where it crossed the eastern hump of South America, giving the Portuguese a claim to Brazil.' }, src: { en: 'Adapted from "European Colonies in the Americas," World History Project' } },
        q: { en: 'Which was a result of the 1494 agreement described above?' },
        choices: [{ en: 'Portugal claimed Brazil and the West African trade' }, { en: 'Spain gave up all of its claims in the Americas' }, { en: 'England and France split North America in two' }, { en: 'Portugal ruled all the lands from Mexico to the Andes' }],
        answer: 0,
        why: { en: 'The Treaty of Tordesillas gave Portugal Brazil, West Africa and the sea road to Asia. Spain took most of the Americas.' }
      },
      {
        q: { en: 'Which statement best compares European power in Asia and the Americas around 1630?' },
        choices: [{ en: 'Small outposts in Asia, but large colonies in the Americas' }, { en: 'Large colonies in Asia, but small outposts in the Americas' }, { en: 'Full control of both the Atlantic and the Indian Oceans' }, { en: 'No European ships yet in either Asia or the Americas' }],
        answer: 0,
        why: { en: 'In the Indian Ocean, Europeans held a few ports among strong Asian empires. In the Americas, Spain ruled from Mexico to the Andes.' }
      },
      {
        stim: { text: { en: 'Europeans fiercely protected their trading rights in Africa. They wanted to export more than they imported, and the slave trade brought them more gold and silver than ever before.' }, src: { en: 'Adapted from "The Transatlantic Slave Trade," World History Project' } },
        q: { en: 'The excerpt best reflects which economic idea?' },
        choices: [{ en: 'Mercantilism' }, { en: 'Free trade with no state limits' }, { en: 'Barter with no money at all' }, { en: 'Paper money issued by the state' }],
        answer: 0,
        why: { en: 'Mercantilist states aimed to sell more than they bought and to gather gold and silver, so they guarded their trade.' }
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
