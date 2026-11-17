/* HISTORYWALKER · Episode 2.6 · Environmental Consequences of Connectivity (AP World Topic 2.6, c. 1200–1450)
   Genoa, an Italian city-state, in 1349, while the Black Death moves through Europe's ports.
   North-west: the hill farms and the sheep pasture above the city (the shepherd), the notary's street.
   North-east: the church, the hospital and the old well on the hill road.
   South-west: the warehouses and the harbor docks (the sailor). South-east: the market by the quay (the merchant from
   North Africa, the farm worker), the time stone with its three levers: the long-term, intermediate and short-term
   causes that brought the plague to the port.
   A hard topic: told plainly and with care. The Void is quiet and serious here, and no suffering is a prize.
   Content source: Khan Academy, AP World History (World History Project), Unit 2 Lesson "Environmental Consequences
   of Connectivity | 2.6": "Trade Networks and the Black Death" (Bennett Sherry), "Opener: Contagion!", "Causation:
   Introduction", "Causation: The Black Death", "Quick Sourcing: The Black Death"; and the unit overview
   "Unit 2 Introduction: Networks of Exchange 1200 to 1450" (Trevor Getz) for crops, sugar, pepper and bananas.
   World History Project content is CC BY-NC 4.0. Facts here come from those readings. English only, AP level.
   Two reading stands: the Tournai burial image of 1353 (a primary source; the readings quote no written source, so the
   stand gives the image's caption exactly as "Trade Networks and the Black Death" prints it) by the church, and an
   adapted reading of "Trade Networks and the Black Death" on the open street above the warehouses. */
window.EPISODE = {
  id: '2.6',
  realm: 2,
  sol: 'AP 2.6',
  style: 'europe',
  weather: { sky: 'drizzle', time: 'sunset' },
  title: { en: 'Environmental Consequences of Connectivity' },
  place: { en: 'Genoa, an Italian city-state, 1349' },
  intro: [
    { en: 'The Void blurred the page on the Black Death. Genoa is forgetting how a deadly plague traveled the trade routes, and how crops traveled too.' },
    { en: 'Talk to the 4 people here and read the 2 sources on their stands. Help a farm worker, then wake the time stone.' }
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
        { en: 'Our [[city-state|city-state]] grew rich in the [[pax mongolica|Pax Mongolica]], from the mid-1200s to the mid-1300s. The Mongol Empire had split into four areas, each ruled by a khan.' },
        { en: 'The khans wanted tax revenue, and trade was one of the best sources. So they made trade cheaper and safer, and severely punished anyone who threatened it.' },
        { en: 'Marco Polo of Venice crossed the Mongol Empire. Genoese and Venetian merchants bought luxuries as far away as Calicut, in India. Think of a Silk Network, not one road.' },
        { en: 'But ships carry more than cargo: rats live in every hold. Now fewer ships sail, and trade has fallen even in places where no one fell sick.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Which of the following best explains why trade across Afro-Eurasia grew under Mongol rule?' },
        choices: [
          { t: { en: 'Mongol conquests had never disrupted any route' }, why: { en: 'No. Earlier Mongol conquests did disrupt trade with their violence. Trade grew later, once the khans settled down to rule.' } },
          { ok: true, t: { en: 'Trade taxes gave the khans a reason to protect it' }, why: { en: 'Yes. Trade was one of the best sources of taxes, so the khans made routes cheaper and safer and punished anyone who threatened them.' } },
          { t: { en: 'Italian city-states took over the overland routes' }, why: { en: 'No. Venice and Genoa grew rich from this trade, but the Mongol Empire ruled the overland routes.' } }
        ]
      }
    },
    {
      x: 21, y: 13, name: { en: 'Yusuf' }, role: { en: 'Merchant from North Africa' },
      look: { skin: 4, hair: '#1b1410', shirt: '#2a8a6a', robe: true, hat: '#e8e0d0', style: 'short' },
      lines: [
        { en: 'I sell sugar from the Islamic world. Europe also buys pepper from Asia, and West African gold became money for trade across Europe and the Middle East.' },
        { en: 'Technologies travel the same routes. Asian innovations like the moldboard plow helped Europe\'s population grow.' },
        { en: 'Crops travel too. Traders from Southeast Asia carried [[banana|bananas]] across the Indian Ocean to East Africa. States in Africa\'s interior began to grow them.' },
        { en: 'The new crop altered the land, helped support new states and led to more people. Trade can carry life as well as death.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Which best describes an environmental consequence of the banana\'s spread to East Africa?' },
        choices: [
          { t: { en: 'Bananas spread a disease along the Swahili Coast' }, why: { en: 'No. Disease did travel trade routes, but bananas did the opposite: they fed more people and supported new states.' } },
          { t: { en: 'Bananas stayed a luxury sold only in the ports' }, why: { en: 'No. States in Africa\'s interior began cultivating bananas as a farm crop.' } },
          { ok: true, t: { en: 'Farming changed, and new states and populations grew' }, why: { en: 'Yes. Interior states began farming bananas. The crop altered the environment, helped support new states and led to population growth.' } }
        ]
      }
    },
    {
      x: 25, y: 3, name: { en: 'Caterina' }, role: { en: 'Hospital nurse' },
      look: { skin: 1, hair: '#6b3a1e', shirt: '#e8e0d0', robe: true, style: 'bun' },
      lines: [
        { en: 'The sickness came off the ships in the harbor. Then it moved from the port into the crowded streets, and inland along the roads.' },
        { en: 'First come painful swellings called [[buboes|buboes]]. Then bleeding under the skin darkens it. Most who catch it die, and our medicines do not stop it.' },
        { en: 'Our cities are crowded, damp and dirty. Across Europe, about one person in three has died since 1347. In some Italian cities and in rural France, nearly six in ten.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Compared with other regions of Afro-Eurasia, why was the plague worst in Europe?' },
        choices: [
          { ok: true, t: { en: 'Its cities were crowded, damp and poorly sanitized' }, why: { en: 'Yes. Crowded, damp, poorly sanitized cities helped it spread. It killed about one-third of Europeans, and nearly 60 percent in some places.' } },
          { t: { en: 'It lay closest to the grasslands of Central Asia' }, why: { en: 'No. The plague began in Central Asia\'s grasslands, far from Europe. Caravans and ships carried it west.' } },
          { t: { en: 'It was the only region the plague reached at all' }, why: { en: 'No. The plague struck across Afro-Eurasia, killing up to 100 million people. It was simply worst in Europe.' } }
        ]
      }
    },
    {
      x: 8, y: 8, name: { en: 'Piero' }, role: { en: 'Notary' },
      look: { skin: 2, hair: '#4a4a4a', shirt: '#4a3a6a', robe: true, hat: '#2a2a3a', style: 'short' },
      lines: [
        { en: 'I am a notary. I write wills and records for families. This year I write more wills than ever before.' },
        { en: 'Physicians and scholars write first-hand accounts. They guess at causes and cures, but no one here knows what spreads it. Many say it is the end of the world.' },
        { en: 'Some now question the authority of the Church and the order of lords and peasants. Peasant revolts are growing.' },
        { en: 'In some towns, angry mobs attacked Jewish communities, looking for someone to blame. That was cruel and wrong. The plague traveled the trade networks, not with any one people.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Sourcing: a physician in 1349 writes that the plague is a sign of the end of the world. This source is most useful as evidence of what?' },
        choices: [
          { t: { en: 'The bacterium and fleas that caused the plague' }, why: { en: 'No. People in 1349 did not know the cause. Today we know the bacterium [[yersinia pestis|Yersinia pestis]], spread by fleas, caused it.' } },
          { ok: true, t: { en: 'How people at the time made sense of the plague' }, why: { en: 'Yes. A source like this shows the fears and beliefs of its time. Its author could not know about bacteria or fleas.' } },
          { t: { en: 'How many people across Europe died of it' }, why: { en: 'No. A statement of belief gives no numbers. Historians use other evidence to estimate deaths.' } }
        ]
      }
    },
    {
      doc: true, x: 18, y: 2, icon: '📜',
      name: { en: 'Burying the Dead at Tournai, 1353' }, role: { en: 'Primary source' },
      src: { en: 'Image credited to Pierart dou Tielt, Tournai, 1353; shown and captioned in "Trade Networks and the Black Death," World History Project' },
      lines: [
        { en: 'This source is a picture, not a text. It was made in Europe in the plague years. The reading labels it: "The people of Tournai (a city in present-day Belgium) bury plague victims, 1353."' },
        { en: 'A later work makes a contrast: "The Fall of the Damned, by Dieric Bouts, 1450." The reading notes: "Much of European art turned toward images of death after the plague."' },
        { en: 'Who and when: the Tournai image is credited to Pierart dou Tielt and dated 1353, just after the worst years in Europe, 1347 to 1351. Where: Tournai lies far inland, north of the Mediterranean. The plague started in the Mediterranean ports and spread inland. What it shows: a town burying its dead. It records what people saw, not what caused the disease: no one then knew of fleas or bacteria.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Sourcing: compared with the 1450 painting by Dieric Bouts, the 1353 Tournai image is more useful as evidence of what?' },
        choices: [
          { t: { en: 'How European art changed a century later' }, why: { en: 'No. That is what the 1450 painting helps show: after the plague, art turned toward images of death.' } },
          { t: { en: 'The flea bites that spread the disease' }, why: { en: 'No. No one in 1353 knew about fleas or bacteria. The image shows what people saw, not the cause.' } },
          { ok: true, t: { en: 'Burials seen in the plague years' }, why: { en: 'Yes. It was made in 1353, right after the worst years, and shows a town far inland burying its dead.' } }
        ]
      }
    },
    {
      doc: true, x: 12, y: 10, icon: '📖',
      name: { en: 'Trade Networks and the Black Death' }, role: { en: 'Reading' },
      src: { en: 'Adapted from "Trade Networks and the Black Death" by Bennett Sherry, World History Project (Khan Academy)' },
      lines: [
        { en: 'The Silk Road was less a road than a network of merchants, cities, oases, ports and paths linked by trade. From the mid-1200s to the mid-1300s, the Pax Mongolica kept a general peace. The Mongol Empire had split into four areas, each ruled by a khan. The khans wanted tax revenue, and trade was one of the best sources, so they made trade easier and safer.' },
        { en: 'The plague was caused by the bacterium Yersinia pestis, spread mostly by flea bites. It began in Central Asia\'s grasslands, in fleas on great gerbils. A rise of just 1 degree Celsius can raise the bacteria in the gerbils by up to 50 percent, and a change in climate in the mid-1300s likely helped the disease spread out. Fleas rode west with traders and camels in caravans, then reached rats on trading ships. Italian merchant ships likely carried it into the Mediterranean.' },
        { en: 'Up to 100 million people across Afro-Eurasia may have died. In Europe, up to 25 million of 75 million died from 1347 to 1351. Production and trade fell sharply. Then fewer peasants meant more power for the survivors: wages in England rose as much as 40 percent between 1340 and 1360. A middle class grew. The author concludes that had the Mongol Empire not interconnected the world, the plague would likely not have been so deadly or so widespread.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'According to the reading, which best explains why the Black Death spread so far and so fast?' },
        choices: [
          { t: { en: 'Mongol conquests cut the main trade routes' }, why: { en: 'No. Early conquests disrupted trade, but by the 1300s Mongol rule had made trade safer. The plague followed that busy trade.' } },
          { ok: true, t: { en: 'Protected trade linked caravans and ports' }, why: { en: 'Yes. Mongol-protected trade linked Central Asia\'s caravans to Mediterranean ports, so fleas and rats traveled far and fast.' } },
          { t: { en: 'It began in Genoa\'s crowded streets' }, why: { en: 'No. It began in Central Asia\'s grasslands. Crowded cities made it worse once it arrived.' } }
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
        { en: 'I came down from the hill farms. So many workers have died that landowners cannot find hands for the fields. Fewer peasants means more power for those who live.' },
        { en: 'Now we ask for higher wages. The old order of lords and peasants, [[feudalism|feudalism]], is cracking. But the Void\'s helpers took my contract! Ask the shepherd on the hill road.' }
      ],
      wait: { en: 'The shepherd keeps his sheep in the north-west, up the hill road above the city.' },
      thanks: { en: 'My contract, with a higher wage! With better pay, workers can buy goods once called luxuries. A new [[middle class|middle class]] may grow from this. Thank you.' }
    },
    contact: {
      x: 4, y: 3, name: { en: 'Bruno' }, role: { en: 'Shepherd' },
      look: { skin: 5, hair: '#1b1410', shirt: '#7a6a4a', pants: '#3a3a2a', hat: '#c9a24a', style: 'short' },
      lines: [
        { en: 'My master turned his wheat field into pasture. Raising livestock needs fewer workers than wheat, and workers are scarce now. New plows and labor-saving devices help too.' },
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
    name: { en: 'The Void' },
    appear: { en: 'The Void waits quietly above the harbor. It is very still.' },
    taunt: { en: 'So many were lost. If the page stays dark, no one will ask how the sickness traveled.' },
    win: { en: 'The Void closes over the harbor. The page returns, so the losses and the lessons are remembered.' },
    questions: [
      {
        stim: { title: { en: 'A primary source' }, text: { en: '"The people of Tournai (a city in present-day Belgium) bury plague victims, 1353."' }, src: { en: 'Caption of an image credited to Pierart dou Tielt, 1353; in "Trade Networks and the Black Death," World History Project' } },
        q: { en: 'The image described above is most useful to a historian as evidence of which of the following?' },
        choices: [{ en: 'Medical theories about the cause of the plague' }, { en: 'How the plague reached towns far inland' }, { en: 'European art turning toward death a century later' }, { en: 'The routes Italian ships took into the Mediterranean' }],
        answer: 1,
        why: { en: 'Made in 1353, it shows Tournai, far inland in present-day Belgium, burying plague victims: the plague began in Mediterranean ports and spread inland. Art\'s turn toward death shows in later works, like Bouts\'s painting of 1450.' }
      },
      {
        stim: { text: { en: '"Had the Mongol Empire not interconnected the world through trade and conquest, it is unlikely that the Black Death would have been so deadly or so widespread."' }, src: { en: 'Bennett Sherry, "Trade Networks and the Black Death," World History Project' } },
        q: { en: 'Which of the following best supports the author\'s claim?' },
        choices: [{ en: 'Mongol armies carried the plague west on purpose' }, { en: 'The four khanates fought each other constantly' }, { en: 'Venice and Genoa ruled the overland Silk Roads' }, { en: 'Khans made trade safer, so more caravans moved' }],
        answer: 3,
        why: { en: 'Seeking trade taxes, the khans kept the routes safe, so caravans and ships linked distant lands and carried fleas and rats too. The khanates kept a general peace, and the Mongols, not Italians, ruled the overland routes.' }
      },
      {
        stim: { title: { en: 'The Black Death, 1347–1351' }, rows: [[{ en: 'Measure' }, { en: 'Estimate' }], [{ en: 'Deaths across Afro-Eurasia' }, { en: 'up to 100 million' }], [{ en: 'Europe\'s population' }, { en: 'about 75 million' }], [{ en: 'Deaths in Europe' }, { en: 'up to 25 million' }], [{ en: 'Some Italian cities' }, { en: 'nearly 60 percent died' }]], src: { en: 'From "Trade Networks and the Black Death," World History Project' } },
        q: { en: 'The data in the table best support which of the following claims?' },
        choices: [{ en: 'The plague killed most people in every European town' }, { en: 'Europe lost about one in three, more in some places' }, { en: 'Italian cities suffered less than Europe as a whole' }, { en: 'Most of the plague\'s deaths happened inside Europe' }],
        answer: 1,
        why: { en: 'Up to 25 of 75 million is one-third, and some Italian cities neared 60 percent. Europe\'s 25 million were only part of the up to 100 million deaths across Afro-Eurasia.' }
      },
      {
        stim: { text: { en: '"Just a small temperature increase, as little as 1 degree Celsius, can increase the presence of the bacteria in the gerbils by up to 50 percent."' }, src: { en: 'Bennett Sherry, "Trade Networks and the Black Death," World History Project' } },
        q: { en: 'Which of the following best explains the significance of this evidence for the spread of the Black Death?' },
        choices: [{ en: 'Warmer seas let Italian ships sail to port faster' }, { en: 'Great gerbils rode the merchant ships into Genoa' }, { en: 'Climate change helped it spread from Central Asia' }, { en: 'Cold winters ended the plague across Europe by 1351' }],
        answer: 2,
        why: { en: 'A change in climate in the mid-1300s likely helped the disease spread out of Central Asia. Fleas, not gerbils, rode the caravans west, and rats on ships carried them into port.' }
      },
      {
        q: { en: 'In a causal chain of the Black Death reaching Genoa in the 1340s, which was the short-term cause?' },
        choices: [{ en: 'Merchant ships bringing plague rats into port' }, { en: 'Khans severely punishing threats to trade' }, { en: 'A warmer climate in Central Asia\'s grasslands' }, { en: 'Landowners turning wheat fields into pasture' }],
        answer: 0,
        why: { en: 'A short-term cause is the immediate trigger: ships carrying rats and fleas into port. Mongol-protected trade was long-term, the climate shift intermediate, and pasture a consequence.' }
      },
      {
        stim: { title: { en: 'Wages in England' }, rows: [[{ en: 'Years' }, { en: 'Change in wages' }], [{ en: '1340 to 1360' }, { en: 'up as much as 40 percent' }]], src: { en: 'From "Trade Networks and the Black Death," World History Project' } },
        q: { en: 'Which of the following best explains the change shown in the table?' },
        choices: [{ en: 'The Pax Mongolica reached its height in these years' }, { en: 'Feudal lords grew stronger and rewarded peasants' }, { en: 'Plague deaths left fewer peasants to work fields' }, { en: 'New plows let landowners hire far more workers' }],
        answer: 2,
        why: { en: 'With so many dead, surviving workers could demand higher pay. Workers, not lords, gained power, and the Mongol peace was ending by the mid-1300s. New plows saved labor; they did not add workers.' }
      },
      {
        stim: { text: { en: 'Many concluded that they were witnessing the end of the world. Others began to question the authority of the Catholic Church and the social class system around them.' }, src: { en: 'Adapted from "Trade Networks and the Black Death," World History Project' } },
        q: { en: 'Which consequence of the plague does the excerpt most directly reflect?' },
        choices: [{ en: 'A revival of Silk Road trade under the Mongols' }, { en: 'Challenges to the Church and the class system' }, { en: 'Growing loyalty to feudal lords and the Church' }, { en: 'A shift from wheat farming to raising livestock' }],
        answer: 1,
        why: { en: 'The excerpt names doubts about the Church and the class system. The move to livestock was real, but an economic change the excerpt does not mention; trade fell rather than revived.' }
      },
      {
        stim: { text: { en: 'Indian Ocean traders from Southeast Asia carried bananas with them to East Africa. Eventually, states in the interior of Africa began cultivating bananas.' }, src: { en: 'Adapted from "Unit 2 Introduction: Networks of Exchange 1200 to 1450," World History Project' } },
        q: { en: 'Compared with the spread of the Black Death, the process described above shows that trade networks also...' },
        choices: [{ en: 'moved crops that helped populations grow' }, { en: 'carried a second plague to the Swahili Coast' }, { en: 'sent European farming tools to East Africa' }, { en: 'kept crops from taking root far from home' }],
        answer: 0,
        why: { en: 'The plague cut populations; bananas did the opposite. Interior states began farming them, which supported new states and population growth. Both show trade changing environments.' }
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
