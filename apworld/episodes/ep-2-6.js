/* HISTORYWALKER · Episode 2.6 · Environmental Consequences of Connectivity (AP World Topic 2.6, c. 1200–1450)
   Genoa, an Italian city-state, in 1349, while the Black Death moves through Europe's ports.
   North-west: the hill farms and the sheep pasture above the city (the shepherd), the notary's street.
   North-east: the church, the hospital and the old well on the hill road.
   South-west: the warehouses and the harbor docks (the sailor). South-east: the market by the quay (the merchant from
   North Africa, the farm worker), the time stone with its three levers: the long-term, intermediate and short-term
   causes that brought the plague to the port.
   A hard topic: told plainly and with care. The Grump is quiet and serious here, and no suffering is a prize.
   Content source: Khan Academy, AP World History (World History Project), Unit 2 Lesson "Environmental Consequences
   of Connectivity | 2.6": "Trade Networks and the Black Death" (Bennett Sherry), "Opener: Contagion!", "Causation:
   Introduction", "Causation: The Black Death", "Quick Sourcing: The Black Death"; and the unit overview
   "Unit 2 Introduction: Networks of Exchange 1200 to 1450" (Trevor Getz) for crops, sugar, pepper and bananas.
   World History Project content is CC BY-NC 4.0. Facts here come from those readings. English only, AP level. */
window.EPISODE = {
  id: '2.6',
  realm: 2,
  sol: 'AP 2.6',
  style: 'europe',
  weather: { sky: 'drizzle', time: 'sunset' },
  title: { en: 'Environmental Consequences of Connectivity' },
  place: { en: 'Genoa, an Italian city-state, 1349' },
  intro: [
    { en: 'The Grump blurred the page on the Black Death. Genoa is forgetting how a deadly plague traveled the trade routes, and how crops traveled too.' },
    { en: 'Talk to the 4 people here, help a farm worker, then wake the time stone.' }
  ],
  scenes: {
    at: [8.93, 44.41],
    year: 1349,
    start: [
      { en: 'In the 1340s, a deadly plague reached Europe along trade routes.' },
      { en: 'Genoa and Venice had grown rich from trade across the Mongol Empire.' },
      { en: 'From 1347 to 1351, about one-third of all Europeans died.' }
    ],
    guess: {
      q: { en: 'The plague began in the grasslands of Central Asia. How do you think it reached Italy\'s ports?' },
      choices: [{ t: { en: '⛵ On merchant ships' }, ok: true }, { t: { en: '🏔️ Over empty mountains' } }],
      why: { en: 'Rats and fleas rode Italian merchant ships into Mediterranean ports, then the plague spread inland.' }
    },
    page: { en: 'Up to 100 million people across Afro-Eurasia may have died from the plague.' },
    next: {
      q: { en: 'Next: Comparison of Economic Exchange. Did Afro-Eurasian merchants carry goods by sea as well as over land?' },
      choices: [{ t: { en: 'Yes, both' }, ok: true }, { t: { en: 'No, only over land' } }],
      why: { en: 'The Silk Roads crossed land, while the Indian Ocean and the Mediterranean carried goods by sea. You compare them next.' }
    }
  },
  start: [16, 9],
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT',
    'TP.."".P.wwww....l.DDDDD..RRRR.T',
    'T..""..P.wwww....l.DDDDD..hhdh.T',
    'T.....P.......x..l.DDdDD.......T',
    'T.:::::::::::::::lllllllllllll.T',
    'T.:...,.......:..l.........,...T',
    'T.:.RRR...RRRR.:.l..RRR.....O..T',
    'T.:.hdh...hhhh.:.l..hhh........T',
    'T.:...........x:.l.............T',
    'T.:::::::::::::::lllllllllllll.T',
    'T................l.............T',
    'T.llllllllllllllllllllllllllll.T',
    'T.RRRR..RRRR...l..m.m.m.m...x..T',
    'T.hhdh..hhhh...l...........RRR.T',
    'T..............l..m.m.m.m..hdh.T',
    'T.llllllllllllllllllllllllllll.T',
    'T~~k~~~k~~~k~~~llllllllllllllk~T',
    'T~~k~~~k~~~k~~~~~~lllllllll~~k~T',
    'T~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~T',
    'T~~=========================~~~T',
    'T==============================T',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT'
  ],
  words: {
    'city-state': { en: 'an independent city that rules itself and the land around it, like Genoa or Venice' },
    'pax mongolica': { en: 'the "Mongol peace" (mid-1200s to mid-1300s): Mongol rule kept trade routes across Afro-Eurasia safe' },
    'black death': { en: 'the bubonic plague epidemic of the 1300s that killed up to 100 million people across Afro-Eurasia' },
    'yersinia pestis': { en: 'the bacterium that caused the Black Death; it spread mostly through flea bites' },
    'buboes': { en: 'painful swellings of the lymph nodes, a sign of bubonic plague' },
    'caravan': { en: 'a group of traders traveling together with their animals, like camels, along long trade routes' },
    'long-term cause': { en: 'a deep cause that builds over decades or centuries and sets up the conditions for an event' },
    'short-term cause': { en: 'an immediate event or trigger that directly sparks the main event' },
    'feudalism': { en: 'the social system of medieval Europe: peasants worked the land of lords in return for protection' },
    'middle class': { en: 'people between the very rich and the very poor, like better-paid workers, artisans and merchants' },
    'banana': { en: 'a crop that Southeast Asian traders carried across the Indian Ocean to East Africa' }
  },
  npcs: [
    {
      x: 7, y: 16, name: { en: 'Luca' }, role: { en: 'Genoese sailor' },
      look: { skin: 3, hair: '#2b1d14', shirt: '#3a5a8a', pants: '#3a3a2a', hat: '#7a2a2a', style: 'short' },
      lines: [
        { en: 'Our [[city-state|city-state]] grew rich on trade. Merchants from Genoa and Venice traveled east to buy silk and other luxuries.' },
        { en: 'The Mongol khans wanted trade taxes, so they kept the routes safe. We call it the [[pax mongolica|Pax Mongolica]], the Mongol peace.' },
        { en: 'But ships carry more than cargo. Rats live in every hold. Now fewer ships sail, and trade has fallen even where no one fell sick.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why did trade across Afro-Eurasia grow during the Pax Mongolica?' },
        choices: [
          { ok: true, t: { en: 'Khans protected trade to collect taxes' }, why: { en: 'Yes. Trade was one of the best sources of taxes, so the khans made routes cheaper and safer and punished anyone who threatened them.' } },
          { t: { en: 'The Mongols closed the roads to merchants' }, why: { en: 'No. Earlier Mongol conquests disrupted trade, but once the khans ruled, they made trade easier and safer.' } },
          { t: { en: 'European armies took the routes to China' }, why: { en: 'No. The Mongol Empire, not Europe, ruled the overland routes. It linked more people than ever before.' } }
        ]
      }
    },
    {
      x: 21, y: 13, name: { en: 'Yusuf' }, role: { en: 'Merchant from North Africa' },
      look: { skin: 4, hair: '#1b1410', shirt: '#2a8a6a', robe: true, hat: '#e8e0d0', style: 'short' },
      lines: [
        { en: 'I sell sugar from the Islamic world. Europe also buys pepper from Asia. Trade carries goods far from where they grow.' },
        { en: 'Crops and farming ways travel too. Traders from Southeast Asia carried [[banana|bananas]] across the Indian Ocean to East Africa.' },
        { en: 'States in Africa\'s interior began to grow them. The new crop changed the land and fed more people.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'How did bananas change East Africa after Indian Ocean traders brought them?' },
        choices: [
          { ok: true, t: { en: 'They supported new states and more people' }, why: { en: 'Yes. Interior states began farming bananas. The crop altered the environment, helped support new states and led to population growth.' } },
          { t: { en: 'No one there would plant a crop from abroad' }, why: { en: 'No. States in the interior of Africa began cultivating bananas. Crops spread along trade routes.' } },
          { t: { en: 'They were grown only in royal gardens' }, why: { en: 'No. Bananas became a farm crop. They supported new states and a growing population.' } }
        ]
      }
    },
    {
      x: 25, y: 3, name: { en: 'Caterina' }, role: { en: 'Hospital nurse' },
      look: { skin: 1, hair: '#6b3a1e', shirt: '#e8e0d0', robe: true, style: 'bun' },
      lines: [
        { en: 'The sickness came off the ships in the harbor. Then it moved from the port into the crowded streets.' },
        { en: 'The sick get painful swellings called [[buboes|buboes]]. Most who catch it die. Our medicines do not stop it.' },
        { en: 'Our cities are crowded, damp and dirty. In some Italian cities, nearly six in ten people have died.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Compared with other regions, why was the plague worst in Europe?' },
        choices: [
          { ok: true, t: { en: 'Its cities were crowded, damp and unclean' }, why: { en: 'Yes. Crowded, damp, poorly sanitized cities helped it spread. It killed about one-third of Europeans, and nearly 60 percent in some Italian cities.' } },
          { t: { en: 'Europe had no trade with any other regions' }, why: { en: 'No. Europe was tied into trade networks. That is how the plague arrived, on Italian merchant ships.' } },
          { t: { en: 'Europe\'s doctors had found a cure' }, why: { en: 'No. The medicine of the time could not stop the plague. Most people who caught it died.' } }
        ]
      }
    },
    {
      x: 8, y: 8, name: { en: 'Piero' }, role: { en: 'Notary' },
      look: { skin: 2, hair: '#4a4a4a', shirt: '#4a3a6a', robe: true, hat: '#2a2a3a', style: 'short' },
      lines: [
        { en: 'I am a notary. I write wills and records for families. This year I write more wills than ever.' },
        { en: 'People try to make sense of it. Many say it is the end of the world. Some now question the Church and the order of lords and peasants.' },
        { en: 'In some towns, angry mobs attacked Jewish communities, looking for someone to blame. That was cruel and wrong: the plague traveled the trade networks.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'A writer in 1349 says the plague means the end of the world. What is this source most useful for?' },
        choices: [
          { ok: true, t: { en: 'How people then made sense of the plague' }, why: { en: 'Yes. A source like this shows the fears and beliefs of its time. Its author could not know about bacteria or fleas.' } },
          { t: { en: 'What scientists today know caused the plague' }, why: { en: 'No. People in 1349 did not know the cause. Today we know the bacterium [[yersinia pestis|Yersinia pestis]], spread by fleas, caused it.' } },
          { t: { en: 'Exactly how many people died of it' }, why: { en: 'No. A statement of belief gives no numbers. Historians use other evidence to estimate deaths.' } }
        ]
      }
    }
  ],
  houses: [
    { at: [21, 3], name: { en: 'Father Anselmo' }, look: { skin: 1, hair: '#8a8a8a', shirt: '#2a2a2a', robe: true, style: 'short' },
      lines: [{ en: 'Many who come here believe they are seeing the end of the world.' }, { en: 'Some now ask hard questions of the Church. I have no answer that ends the sickness.' }] },
    { at: [28, 2], name: { en: 'Sister Agnese' }, look: { skin: 2, hair: '#2b1d14', shirt: '#e8e0d0', robe: true, style: 'bun' },
      lines: [{ en: 'We wash the sick and give them water. It is all we can do.' }, { en: 'Our remedies do not work. Still, no one here is left alone.' }] },
    { at: [5, 7], name: { en: 'Clerk Dino' }, look: { skin: 3, hair: '#1b1410', shirt: '#6a5a3a', style: 'short' },
      lines: [{ en: 'Physicians and scholars write accounts of this sickness.' }, { en: 'They guess at its causes and its cures. Historians will read their words one day.' }] },
    { at: [4, 13], name: { en: 'Warehouse keeper Rosa' }, look: { skin: 4, hair: '#2b1d14', shirt: '#8a4a2a', style: 'long' },
      lines: [{ en: 'These storerooms once overflowed with silk and pepper from the East.' }, { en: 'Now fewer ships come, and fewer goods. Production and trade have both fallen.' }] },
    { at: [28, 14], name: { en: 'Spice seller Lucia' }, look: { skin: 1, hair: '#6b3a1e', shirt: '#c0392b', style: 'long' },
      lines: [{ en: 'Pepper from Asia and sugar from the Islamic world came to Europe by trade.' }, { en: 'Merchants buy where goods are cheap and sell where they are scarce.' }] }
  ],
  signs: [
    { x: 14, y: 3, text: { en: 'HILL ROAD · Farms and sheep pastures above the city.' } },
    { x: 14, y: 8, text: { en: 'GENOA · An Italian city-state grown rich from trade during the Pax Mongolica.' } },
    { x: 28, y: 12, text: { en: 'MARKET · Silk, pepper and sugar from distant lands. Fewer stalls are open now.' } }
  ],
  finds: [
    { clueAt: [13, 14], at: [10, 14], decor: 'coinold', clue: { en: 'From this note, walk 3 steps west, along the warehouse wall.' },
      text: { en: 'A merchant\'s dropped coin. West African gold became money for trade across Europe and the Middle East.' } }
  ],
  scraps: [[1, 2], [30, 1], [1, 14]],
  smudges: [[9, 10], [24, 8]],
  quest: {
    stat: 'pla',
    title: { en: 'The Farm Worker\'s Contract' },
    giver: {
      x: 17, y: 13, name: { en: 'Nella' }, role: { en: 'Farm worker' },
      look: { skin: 0, hair: '#3a2a1a', shirt: '#6a7a4a', pants: '#3a3a2a', style: 'long' },
      lines: [
        { en: 'I came down from the hill farms. So many workers have died that landowners cannot find hands for the fields.' },
        { en: 'Now we ask for higher wages. The old order of lords and peasants, [[feudalism|feudalism]], is cracking. But the Grump\'s helpers took my contract! Ask the shepherd on the hill road.' }
      ],
      wait: { en: 'The shepherd keeps his sheep in the north-west, up the hill road above the city.' },
      thanks: { en: 'My contract, with a higher wage! With better pay, workers can buy goods once called luxuries. A new [[middle class|middle class]] may grow from this. Thank you.' }
    },
    contact: {
      x: 4, y: 3, name: { en: 'Bruno' }, role: { en: 'Shepherd' },
      look: { skin: 5, hair: '#1b1410', shirt: '#7a6a4a', pants: '#3a3a2a', hat: '#c9a24a', style: 'short' },
      lines: [
        { en: 'My master turned his wheat field into pasture. Raising livestock needs fewer workers than wheat, and workers are scarce now.' },
        { en: 'A paper blew past me toward the church. Follow the hill road east, past the church and the hospital, to the old well. Look just south of it.' }
      ]
    },
    action: {
      type: 'find', at: [28, 7],
      hint: { en: 'East on the hill road, just south of the old well' },
      found: { en: 'There, caught against the old well: Nella\'s work contract, the new wage written plainly.' },
      item: { icon: '📜', name: { en: 'Nella\'s work contract' } }
    }
  },
  challenge: {
    at: [22, 16], type: 'levers', stat: 'loc',
    // three levers on the quay: the long-term, intermediate and short-term causes. Solved: 1,2,0
    spots: [[17, 16], [21, 12], [26, 17]],
    title: { en: 'Trace the plague\'s path' },
    intro: { en: 'The bacterium [[yersinia pestis|Yersinia pestis]] lived in fleas on Central Asia\'s great gerbils. Set each lever to its link: a [[long-term cause|long-term cause]], an intermediate cause, a [[short-term cause|short-term cause]].' },
    switches: [
      { name: { en: 'Long-term cause' }, icon: '🌏', start: 0,
        states: [{ en: 'Wages rise for surviving workers' }, { en: 'A century of Mongol peace links trade' }, { en: 'Rats leave a ship at Genoa\'s docks' }] },
      { name: { en: 'Intermediate cause' }, icon: '🐫', start: 0,
        states: [{ en: 'Peasant revolts increase' }, { en: 'Ships land rats in Mediterranean ports' }, { en: 'Warmer climate; [[caravan|caravans]] carry fleas west' }] },
      { name: { en: 'Short-term cause' }, icon: '⚓', start: 1,
        states: [{ en: 'Italian merchant ships bring plague rats into port' }, { en: 'The Mongol Empire unites Eurasia' }, { en: 'Landowners raise livestock, not wheat' }] }
    ],
    results: {
      '0,0,0': { ok: false, t: { en: 'Long-term link: Higher wages came after the plague. That is a consequence, not a cause.' },
        show: [{ icon: '🌏', ok: false, t: { en: 'Long-term: a consequence' } }, { icon: '🐫', ok: false, t: { en: 'Intermediate: a consequence' } }, { icon: '⚓', ok: true, t: { en: 'Short-term: ships into port' } }] },
      '0,0,1': { ok: false, t: { en: 'Long-term link: Higher wages came after the plague. That is a consequence, not a cause.' },
        show: [{ icon: '🌏', ok: false, t: { en: 'Long-term: a consequence' } }, { icon: '🐫', ok: false, t: { en: 'Intermediate: a consequence' } }, { icon: '⚓', ok: false, t: { en: 'Short-term: too early' } }] },
      '0,0,2': { ok: false, t: { en: 'Long-term link: Higher wages came after the plague. That is a consequence, not a cause.' },
        show: [{ icon: '🌏', ok: false, t: { en: 'Long-term: a consequence' } }, { icon: '🐫', ok: false, t: { en: 'Intermediate: a consequence' } }, { icon: '⚓', ok: false, t: { en: 'Short-term: a consequence' } }] },
      '0,1,0': { ok: false, t: { en: 'Long-term link: Higher wages came after the plague. That is a consequence, not a cause.' },
        show: [{ icon: '🌏', ok: false, t: { en: 'Long-term: a consequence' } }, { icon: '🐫', ok: false, t: { en: 'Intermediate: too late' } }, { icon: '⚓', ok: true, t: { en: 'Short-term: ships into port' } }] },
      '0,1,1': { ok: false, t: { en: 'Long-term link: Higher wages came after the plague. That is a consequence, not a cause.' },
        show: [{ icon: '🌏', ok: false, t: { en: 'Long-term: a consequence' } }, { icon: '🐫', ok: false, t: { en: 'Intermediate: too late' } }, { icon: '⚓', ok: false, t: { en: 'Short-term: too early' } }] },
      '0,1,2': { ok: false, t: { en: 'Long-term link: Higher wages came after the plague. That is a consequence, not a cause.' },
        show: [{ icon: '🌏', ok: false, t: { en: 'Long-term: a consequence' } }, { icon: '🐫', ok: false, t: { en: 'Intermediate: too late' } }, { icon: '⚓', ok: false, t: { en: 'Short-term: a consequence' } }] },
      '0,2,0': { ok: false, t: { en: 'Long-term link: Higher wages came after the plague. That is a consequence, not a cause.' },
        show: [{ icon: '🌏', ok: false, t: { en: 'Long-term: a consequence' } }, { icon: '🐫', ok: true, t: { en: 'Intermediate: climate and caravans' } }, { icon: '⚓', ok: true, t: { en: 'Short-term: ships into port' } }] },
      '0,2,1': { ok: false, t: { en: 'Long-term link: Higher wages came after the plague. That is a consequence, not a cause.' },
        show: [{ icon: '🌏', ok: false, t: { en: 'Long-term: a consequence' } }, { icon: '🐫', ok: true, t: { en: 'Intermediate: climate and caravans' } }, { icon: '⚓', ok: false, t: { en: 'Short-term: too early' } }] },
      '0,2,2': { ok: false, t: { en: 'Long-term link: Higher wages came after the plague. That is a consequence, not a cause.' },
        show: [{ icon: '🌏', ok: false, t: { en: 'Long-term: a consequence' } }, { icon: '🐫', ok: true, t: { en: 'Intermediate: climate and caravans' } }, { icon: '⚓', ok: false, t: { en: 'Short-term: a consequence' } }] },
      '1,0,0': { ok: false, t: { en: 'Intermediate link: Peasant revolts followed the plague. That is a consequence, not a cause.' },
        show: [{ icon: '🌏', ok: true, t: { en: 'Long-term: the Mongol peace' } }, { icon: '🐫', ok: false, t: { en: 'Intermediate: a consequence' } }, { icon: '⚓', ok: true, t: { en: 'Short-term: ships into port' } }] },
      '1,0,1': { ok: false, t: { en: 'Intermediate link: Peasant revolts followed the plague. That is a consequence, not a cause.' },
        show: [{ icon: '🌏', ok: true, t: { en: 'Long-term: the Mongol peace' } }, { icon: '🐫', ok: false, t: { en: 'Intermediate: a consequence' } }, { icon: '⚓', ok: false, t: { en: 'Short-term: too early' } }] },
      '1,0,2': { ok: false, t: { en: 'Intermediate link: Peasant revolts followed the plague. That is a consequence, not a cause.' },
        show: [{ icon: '🌏', ok: true, t: { en: 'Long-term: the Mongol peace' } }, { icon: '🐫', ok: false, t: { en: 'Intermediate: a consequence' } }, { icon: '⚓', ok: false, t: { en: 'Short-term: a consequence' } }] },
      '1,1,0': { ok: false, t: { en: 'Intermediate link: Ships landing rats in port is the final trigger, not a link in the middle.' },
        show: [{ icon: '🌏', ok: true, t: { en: 'Long-term: the Mongol peace' } }, { icon: '🐫', ok: false, t: { en: 'Intermediate: too late' } }, { icon: '⚓', ok: true, t: { en: 'Short-term: ships into port' } }] },
      '1,1,1': { ok: false, t: { en: 'Intermediate link: Ships landing rats in port is the final trigger, not a link in the middle.' },
        show: [{ icon: '🌏', ok: true, t: { en: 'Long-term: the Mongol peace' } }, { icon: '🐫', ok: false, t: { en: 'Intermediate: too late' } }, { icon: '⚓', ok: false, t: { en: 'Short-term: too early' } }] },
      '1,1,2': { ok: false, t: { en: 'Intermediate link: Ships landing rats in port is the final trigger, not a link in the middle.' },
        show: [{ icon: '🌏', ok: true, t: { en: 'Long-term: the Mongol peace' } }, { icon: '🐫', ok: false, t: { en: 'Intermediate: too late' } }, { icon: '⚓', ok: false, t: { en: 'Short-term: a consequence' } }] },
      '1,2,0': { ok: true, t: { en: 'The chain holds: the Mongol peace, then a warmer climate and caravans, then ships into port. Just 1 degree Celsius warmer can raise the bacteria in great gerbils by up to 50 percent.' },
        show: [{ icon: '🌏', ok: true, t: { en: 'Long-term: the Mongol peace' } }, { icon: '🐫', ok: true, t: { en: 'Intermediate: climate and caravans' } }, { icon: '⚓', ok: true, t: { en: 'Short-term: ships into port' } }] },
      '1,2,1': { ok: false, t: { en: 'Short-term link: Mongol rule shaped trade for a century. That is a long-term cause, not the trigger.' },
        show: [{ icon: '🌏', ok: true, t: { en: 'Long-term: the Mongol peace' } }, { icon: '🐫', ok: true, t: { en: 'Intermediate: climate and caravans' } }, { icon: '⚓', ok: false, t: { en: 'Short-term: too early' } }] },
      '1,2,2': { ok: false, t: { en: 'Short-term link: Landowners turned to livestock after so many workers died. That is a consequence.' },
        show: [{ icon: '🌏', ok: true, t: { en: 'Long-term: the Mongol peace' } }, { icon: '🐫', ok: true, t: { en: 'Intermediate: climate and caravans' } }, { icon: '⚓', ok: false, t: { en: 'Short-term: a consequence' } }] },
      '2,0,0': { ok: false, t: { en: 'Long-term link: Rats leaving a ship is the very last step. A long-term cause builds over a century.' },
        show: [{ icon: '🌏', ok: false, t: { en: 'Long-term: too late' } }, { icon: '🐫', ok: false, t: { en: 'Intermediate: a consequence' } }, { icon: '⚓', ok: true, t: { en: 'Short-term: ships into port' } }] },
      '2,0,1': { ok: false, t: { en: 'Long-term link: Rats leaving a ship is the very last step. A long-term cause builds over a century.' },
        show: [{ icon: '🌏', ok: false, t: { en: 'Long-term: too late' } }, { icon: '🐫', ok: false, t: { en: 'Intermediate: a consequence' } }, { icon: '⚓', ok: false, t: { en: 'Short-term: too early' } }] },
      '2,0,2': { ok: false, t: { en: 'Long-term link: Rats leaving a ship is the very last step. A long-term cause builds over a century.' },
        show: [{ icon: '🌏', ok: false, t: { en: 'Long-term: too late' } }, { icon: '🐫', ok: false, t: { en: 'Intermediate: a consequence' } }, { icon: '⚓', ok: false, t: { en: 'Short-term: a consequence' } }] },
      '2,1,0': { ok: false, t: { en: 'Long-term link: Rats leaving a ship is the very last step. A long-term cause builds over a century.' },
        show: [{ icon: '🌏', ok: false, t: { en: 'Long-term: too late' } }, { icon: '🐫', ok: false, t: { en: 'Intermediate: too late' } }, { icon: '⚓', ok: true, t: { en: 'Short-term: ships into port' } }] },
      '2,1,1': { ok: false, t: { en: 'Long-term link: Rats leaving a ship is the very last step. A long-term cause builds over a century.' },
        show: [{ icon: '🌏', ok: false, t: { en: 'Long-term: too late' } }, { icon: '🐫', ok: false, t: { en: 'Intermediate: too late' } }, { icon: '⚓', ok: false, t: { en: 'Short-term: too early' } }] },
      '2,1,2': { ok: false, t: { en: 'Long-term link: Rats leaving a ship is the very last step. A long-term cause builds over a century.' },
        show: [{ icon: '🌏', ok: false, t: { en: 'Long-term: too late' } }, { icon: '🐫', ok: false, t: { en: 'Intermediate: too late' } }, { icon: '⚓', ok: false, t: { en: 'Short-term: a consequence' } }] },
      '2,2,0': { ok: false, t: { en: 'Long-term link: Rats leaving a ship is the very last step. A long-term cause builds over a century.' },
        show: [{ icon: '🌏', ok: false, t: { en: 'Long-term: too late' } }, { icon: '🐫', ok: true, t: { en: 'Intermediate: climate and caravans' } }, { icon: '⚓', ok: true, t: { en: 'Short-term: ships into port' } }] },
      '2,2,1': { ok: false, t: { en: 'Long-term link: Rats leaving a ship is the very last step. A long-term cause builds over a century.' },
        show: [{ icon: '🌏', ok: false, t: { en: 'Long-term: too late' } }, { icon: '🐫', ok: true, t: { en: 'Intermediate: climate and caravans' } }, { icon: '⚓', ok: false, t: { en: 'Short-term: too early' } }] },
      '2,2,2': { ok: false, t: { en: 'Long-term link: Rats leaving a ship is the very last step. A long-term cause builds over a century.' },
        show: [{ icon: '🌏', ok: false, t: { en: 'Long-term: too late' } }, { icon: '🐫', ok: true, t: { en: 'Intermediate: climate and caravans' } }, { icon: '⚓', ok: false, t: { en: 'Short-term: a consequence' } }] }
    },
    otherwise: { ok: false, t: { en: 'The chain is broken. Put each cause where it belongs in time, and leave out the consequences.' } },
    success: { en: 'The chain holds. Then the consequences: with so many dead, workers were scarce, and wages in England rose as much as 40 percent between 1340 and 1360.' }
  },
  boss: {
    at: [29, 10], stat: 'hei', need: 3,
    name: { en: 'The Grey Grump' },
    appear: { en: 'The Grey Grump waits quietly above the harbor.' },
    taunt: { en: 'So many were lost. Blur the page, and no one will ask how it spread.' },
    win: { en: 'The fog lifts from the harbor. The page returns, so the losses and the lessons are remembered.' },
    questions: [
      {
        stim: { text: { en: 'The fleas hitched a ride out of Central Asia on traders and camels in trade caravans, then spread to rodents in the caravans and to rats on trading ships.' }, src: { en: 'Adapted from "Trade Networks and the Black Death," World History Project' } },
        q: { en: 'Which best explains how the plague spread out of Central Asia?' },
        choices: [{ en: 'Caravans and ships carried infected fleas and rats' }, { en: 'Mongol armies spread it on purpose into every city' }, { en: 'It began in Genoa and moved east toward China' }, { en: 'Farmers carried it inside sacks of bananas' }],
        answer: 0,
        why: { en: 'Fleas rode with traders and camels, then lived on caravan rodents and ship rats. Trade networks carried them far and fast.' }
      },
      {
        stim: { title: { en: 'The Black Death in Europe, 1347–1351' }, rows: [[{ en: 'Measure' }, { en: 'Estimate' }], [{ en: 'Europe\'s population' }, { en: 'about 75 million' }], [{ en: 'Deaths' }, { en: 'up to 25 million' }], [{ en: 'Some Italian cities' }, { en: 'nearly 60 percent died' }]], src: { en: 'From "Trade Networks and the Black Death," World History Project' } },
        q: { en: 'Which factor best explains why the plague hit Europe especially hard?' },
        choices: [{ en: 'Crowded, damp and poorly sanitized cities' }, { en: 'Europe had no contact with other regions' }, { en: 'Doctors in Europe refused to treat anyone' }, { en: 'The Mongols ruled all of Europe directly' }],
        answer: 0,
        why: { en: 'The plague was worst in Europe, whose crowded, damp, poorly sanitized cities let it spread. About one-third of Europeans died.' }
      },
      {
        q: { en: 'How did the Pax Mongolica help set the stage for the Black Death?' },
        choices: [{ en: 'Safer trade moved more people and goods' }, { en: 'Khans banned merchants from Central Asia' }, { en: 'Constant war pushed refugees into Europe' }, { en: 'The khans built hospitals in every port' }],
        answer: 0,
        why: { en: 'Mongol rule made trade cheaper and safer, so more people, goods and rats moved across Afro-Eurasia. The same network carried the plague.' }
      },
      {
        stim: { text: { en: 'Indian Ocean traders from Southeast Asia carried bananas with them to East Africa. Eventually, states in the interior of Africa began cultivating bananas.' }, src: { en: 'Adapted from "Unit 2 Introduction: Networks of Exchange 1200 to 1450," World History Project' } },
        q: { en: 'The process described above best illustrates...' },
        choices: [{ en: 'a crop moved by trade that changed societies' }, { en: 'a disease carried by Indian Ocean merchants' }, { en: 'a farming tool that Europe sent to Africa' }, { en: 'a crop that failed far from its homeland' }],
        answer: 0,
        why: { en: 'Bananas spread along trade routes. Growing them altered the environment, supported new states and increased the population.' }
      },
      {
        q: { en: 'Which is best described as a short-term cause of the plague reaching Genoa?' },
        choices: [{ en: 'Merchant ships bringing plague rats into port' }, { en: 'A century of Mongol peace linking Afro-Eurasia' }, { en: 'Landowners turning wheat fields into pasture' }, { en: 'Higher wages paid to the surviving workers' }],
        answer: 0,
        why: { en: 'A short-term cause is the immediate trigger: ships carrying rats and fleas into port. The Mongol peace was long-term; pasture and wages were consequences.' }
      },
      {
        stim: { title: { en: 'Wages in England' }, rows: [[{ en: 'Years' }, { en: 'Change in wages' }], [{ en: '1340 to 1360' }, { en: 'up as much as 40 percent' }]], src: { en: 'From "Trade Networks and the Black Death," World History Project' } },
        q: { en: 'Which best explains the change shown in the table?' },
        choices: [{ en: 'Plague deaths left too few workers' }, { en: 'Trade with Asia doubled at that time' }, { en: 'Feudal lords grew much more powerful' }, { en: 'New laws made all wages equal' }],
        answer: 0,
        why: { en: 'With fewer workers alive, those who survived could demand higher pay. Landowners even turned to livestock, which needs fewer hands.' }
      },
      {
        stim: { text: { en: 'Many concluded that they were witnessing the end of the world. Others began to question the authority of the Catholic Church and the social class system around them.' }, src: { en: 'Adapted from "Trade Networks and the Black Death," World History Project' } },
        q: { en: 'The excerpt best reflects which response to the plague?' },
        choices: [{ en: 'Some began to challenge old authorities' }, { en: 'Most calmly accepted a known cause' }, { en: 'The Church gained power over all kings' }, { en: 'Peasants stopped asking for change' }],
        answer: 0,
        why: { en: 'Facing so much death, some Europeans questioned the Church and the order of lords and peasants. Peasant revolts increased.' }
      },
      {
        q: { en: 'Which statement best describes the plague\'s effect on Afro-Eurasian trade?' },
        choices: [{ en: 'Trade fell, even where no one fell sick' }, { en: 'Trade grew because goods became cheap' }, { en: 'Trade moved entirely from sea to land' }, { en: 'Trade outside Europe was not affected' }],
        answer: 0,
        why: { en: 'Production and trade fell sharply across Afro-Eurasia. Even places the plague missed suffered when long-distance trade broke down.' }
      }
    ]
  },
  learned: [
    { en: 'Under the [[pax mongolica|Pax Mongolica]], safe trade linked Afro-Eurasia. The same caravans and ships carried plague fleas and rats west from Central Asia.' },
    { en: 'The [[black death|Black Death]] killed up to 100 million people across Afro-Eurasia, about one-third of Europeans, and cut production and trade.' },
    { en: 'Afterward, scarce workers won higher wages and a [[middle class|middle class]] grew. Crops spread by trade too, like bananas in East Africa.' }
  ],
  reflect: {
    q: { en: 'AP practice: Explain one way trade networks contributed to the spread of the Black Death in the 1300s.' },
    starter: { en: 'Trade networks helped the Black Death spread because' }
  }
};
