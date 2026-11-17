/* HISTORYWALKER · Episode 4.2 · Exploration: Causes and Events from 1450 to 1750 (AP World Topic 4.2)
   Malindi, a port on the East African coast, in 1498: Vasco da Gama's Portuguese fleet has come around the southern
   tip of Africa and needs an Indian Ocean pilot to sail on from Malindi to India.
   Content source: Khan Academy, AP World History (World History Project), Unit 4 Lesson "Exploration: Causes and Events
   from 1450 to 1750 CE": "Origins of Oceanic Connections" (Bennett Sherry), "Lion of the Sea: Ahmad Ibn Mājid"
   (Bridgette Byrd O'Connor); and the unit overview "Unit 4 Introduction: Transoceanic Interconnections 1450 to 1750"
   (Trevor Getz). World History Project content is CC BY-NC 4.0. Facts here come from those readings. English only, AP level.
   Map: the town in the west (mosque and houses in the north-west, the market in the middle, houses in the south-west);
   the beach and the Indian Ocean in the east, with the north jetty (da Gama's ships) and the south jetty (the dhow yard). */
window.EPISODE = {
  id: '4.2',
  realm: 4,
  sol: 'AP 4.2',
  style: 'swahili',
  weather: { sky: 'heat', time: 'day' },
  title: { en: 'Exploration: Causes and Events' },
  place: { en: 'Malindi, East African coast, 1498' },
  intro: [
    { en: 'The Void blurred the page on exploration. Malindi is forgetting why strange ships just sailed in from Portugal!' },
    { en: 'Talk to the 4 people here and read the 2 sources on their stands. Help a pilgrim, then wake the time stone.' }
  ],
  scenes: {
    at: [40.12, -3.22],
    year: 1498,
    start: [
      { en: 'In 1498, Vasco da Gama sailed from Portugal around the southern tip of Africa.' },
      { en: 'His ships reached Malindi, a port on the East African coast of the Indian Ocean.' },
      { en: 'To sail on to India, da Gama needed the help of an Indian Ocean sailor.' }
    ],
    guess: {
      q: { en: 'In 1491, where might the best ships in the world have sailed?' },
      choices: [{ t: { en: '🌊 The Indian Ocean' }, ok: true }, { t: { en: '⚓ Only Europe' } }],
      why: { en: 'In 1491 the best ships in the world may have been in the Indian Ocean trade, not in European hands.' }
    },
    page: { en: 'In the early 1500s, as many as half of Portuguese ships bound for the Indian Ocean were lost.' },
    next: {
      q: { en: 'Next: the Columbian Exchange. Did Europe have potatoes before 1492?' },
      choices: [{ t: { en: 'No, not yet' }, ok: true }, { t: { en: 'Yes, for ages' } }],
      why: { en: 'Tomatoes and potatoes grew only in the Americas before 1492. You see what crossed the ocean next.' }
    }
  },
  start: [9, 9],
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTpppp~~~===',
    'T.DDDDD...RRR..RRR...x..ss~~~===',
    'T.DDDDD...hdh..hdh......ss~~~===',
    'T.DDdDD.................sskkkkk=',
    'T...l...llllllllllllllllsskkkkk=',
    'T.,.l...l....p......p...ss~~~===',
    'T...l...l.RRR...........ss~~~===',
    'T.p.lllll.hdh......x....ss~~~===',
    'T.......l...........p...ss~~~===',
    'TT..p...l.......,.......sss~~===',
    'T.......l...............sss~~===',
    'T..RRR..llllllllll......sss~~===',
    'T..hdh..lmlmlmlmll..p...ss~~~===',
    'T.......llllllllll......sskk~===',
    'T.p.....lmlmlmlmll......sskkk===',
    'T.......llllllllll..x...ss~~~===',
    'T..,........:...........ss~~~===',
    'Tp.RRR....p.:..ppp......sss~~===',
    'T..hdh......:...........ssss~===',
    'T.....p.....:..,....p...sssss~==',
    'Tpp.......pp:.......pp..sssss~==',
    'TTTTTTTTTTTTTTTTTTTTTTTTpppppp=='
  ],
  words: {
    'sea route': { en: 'a way to reach a place by ship; Europeans wanted one to the Indian Ocean' },
    'black death': { en: 'the plague of the 1300s; by the 1400s Europe\'s economies and populations had recovered' },
    'ottoman empire': { en: 'a large Muslim empire that controlled trade between the Mediterranean and Asia' },
    'middleman': { en: 'a trader between maker and buyer who adds a profit to the price' },
    'muallim': { en: 'Arabic for a master navigator, like Ahmad ibn Majid' },
    'latitude': { en: 'a way of describing location north or south' },
    'astrolabe': { en: 'a tool from the ancient Greeks, improved by Arab sailors to find latitude from the Sun' },
    'kamal': { en: 'a piece of wood on a knotted cord, used to find latitude from the polestar' },
    'collective learning': { en: 'knowledge shared and built up by many people over generations' },
    'dhow': { en: 'the main type of ship in the Indian Ocean in this period' },
    'lateen sail': { en: 'a triangular sail from the Indian Ocean that lets a ship sail against the wind' },
    'caravel': { en: 'an Iberian ocean ship with three or four masts, lateen sails and a rear rudder' },
    'hajj': { en: 'the pilgrimage to Mecca that every Muslim must make at least once' },
    'joint-stock company': { en: 'a business owned by many shareholders, so each one carries less risk' }
  },
  npcs: [
    {
      x: 22, y: 4, name: { en: 'Diogo' }, role: { en: 'Portuguese sailor' },
      look: { skin: 0, hair: '#5a3a1a', shirt: '#7a2a2a', pants: '#3a3a4a', hat: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'It is 1498. Our captain, Vasco da Gama, led us from Portugal around the southern tip of Africa, into the Indian Ocean.' },
        { en: 'Europe\'s economies and people have recovered from the [[black death|Black Death]]. Now people have wealth, and they want Asia\'s luxuries.' },
        { en: 'But the [[ottoman empire|Ottomans]] control trade between the Mediterranean and Asia. They tax it and use the profits to fight the Hapsburg monarchs. Venice still trades with them.' },
        { en: 'Our Catholic kings fought wars to drive Muslim powers out of Iberia. We want to spread Christianity and win glory, but above all, a [[sea route|sea route]] to Asia.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Which of the following best explains why Iberian monarchs, not Venetian merchants, pushed for a sea route?' },
        choices: [
          { ok: true, t: { en: 'They had fought Muslim powers and refused Ottoman control' }, why: { en: 'Yes. Catholic Iberian rulers who had fought Muslim powers refused to pay Ottoman taxes. Venice kept trading with the Ottomans.' } },
          { t: { en: 'Venice\'s economy had never recovered from the Black Death' }, why: { en: 'No. By the 1400s Europe\'s economies had recovered from the Black Death, and Venice still traded with the Ottomans.' } },
          { t: { en: 'They cared more about spreading Christianity than trade' }, why: { en: 'No. Spreading Christianity and winning glory were motives, but Diogo says that above all they wanted a sea route to Asia, around Ottoman control.' } },
          { t: { en: 'The Ottomans had closed the Mediterranean to all Europeans' }, why: { en: 'No. The Ottomans controlled and taxed that trade, but did not close it: Venice still traded with them. Iberian rulers refused to accept that control.' } }
        ]
      }
    },
    {
      x: 12, y: 13, name: { en: 'Halima' }, role: { en: 'Spice merchant' },
      look: { skin: 4, hair: '#1b1410', shirt: '#2a8a6a', robe: true, style: 'bun' },
      lines: [
        { en: 'Spices, gold and porcelain travel thousands of miles to Europe by ship and caravan, through dozens of [[middleman|middlemen]]. Each takes a profit, so prices climb.' },
        { en: 'Sailing around Africa skips the Silk Road and the Ottoman taxes. So the Portuguese can sell for less than their Italian rivals.' },
        { en: 'In West Africa they built fortified trading posts and made alliances with African states. Now they buy gold directly, bypassing the trans-Saharan trade.' },
        { en: 'But in the early 1500s, as many as half of Portuguese ships bound for this ocean are lost. Investors lose ship and cargo.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'If so many ships sank, why could the route around Africa still pay off?' },
        choices: [
          { ok: true, t: { en: 'It skipped many middlemen and the Ottoman taxes' }, why: { en: 'Yes. With fewer merchants each taking a profit, the Portuguese could undersell Italian merchants, even after losses at sea.' } },
          { t: { en: 'It was shorter and safer than the old caravan roads' }, why: { en: 'No. The voyage around Africa was long and deadly; up to half the ships were lost. The gain was skipping the middlemen.' } },
          { t: { en: 'Fortified trading posts made the voyage itself safe' }, why: { en: 'No. Portugal built fortified posts in West Africa, but up to half its ships bound for the Indian Ocean were still lost. The profit came from skipping middlemen.' } },
          { t: { en: 'West African gold covered the cost of every lost ship' }, why: { en: 'No. Buying gold directly was a real gain, but Halima says investors still lost ship and cargo. The route paid because skipping middlemen let Portugal undersell Italian rivals.' } }
        ]
      }
    },
    {
      x: 6, y: 5, name: { en: 'Yusuf' }, role: { en: 'Navigator' },
      look: { skin: 3, hair: '#1b1410', shirt: '#e8e2d0', robe: true, hat: '#f0ece0', style: 'short' },
      lines: [
        { en: 'I am a [[muallim|mu\'allim]], a master navigator. Da Gama needs an Indian Ocean sailor to guide him from Malindi to India.' },
        { en: 'Like Ahmad ibn Majid, I studied the Qur\'an, geography, mathematics, astronomy and languages. The compass, a Chinese invention, is hard to use at sea.' },
        { en: 'So we find [[latitude|latitude]] by the sky: the [[astrolabe|astrolabe]] measures the Sun\'s angle, and the [[kamal|kamal]]\'s knotted cord measures the polestar.' },
        { en: 'Ibn Majid\'s Book of Benefits in the Principles of Navigation holds tides, monsoon winds, currents, reefs and distances between ports: centuries of [[collective learning|collective learning]].' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Why did a fifteenth-century Indian Ocean sailor need to study astronomy and mathematics?' },
        choices: [
          { ok: true, t: { en: 'To find latitude from the Sun and the polestar' }, why: { en: 'Yes. The astrolabe and the kamal measure the Sun or the polestar. Turning that into latitude takes math and astronomy.' } },
          { t: { en: 'To steer by the Chinese compass, easy to use at sea' }, why: { en: 'No. Yusuf says the compass, a Chinese invention, is hard to use at sea. So Indian Ocean sailors found latitude by the sky instead.' } },
          { t: { en: 'To read the sea charts the Portuguese brought' }, why: { en: 'No. Indian Ocean sailors already had their own books, like Ibn Majid\'s, built from centuries of collective learning.' } },
          { t: { en: 'To chart the monsoon winds instead of the stars' }, why: { en: 'No. Ibn Majid\'s book does record monsoon winds, but Yusuf studies astronomy and math to read the sky: the astrolabe and the kamal give latitude.' } }
        ]
      }
    },
    {
      x: 22, y: 14, name: { en: 'Baraka' }, role: { en: 'Dhow builder' },
      look: { skin: 5, hair: '#1b1410', shirt: '#c9a24a', pants: '#4a3a2a', style: 'short' },
      lines: [
        { en: 'Europe\'s old ships were single-mast cogs and galleys with rows of oars, built for coasts and inland seas. On the open ocean they fail.' },
        { en: 'So Iberians built [[caravel|caravels]] and carracks: three or four masts, rear rudders first used in ancient China, and our triangle [[lateen sail|lateen sails]] that sail against the wind.' },
        { en: 'With no rowers, they carry more food and cargo. Portuguese navigators and Jewish mathematicians even used trigonometry to find latitude.' },
        { en: 'Old sailors remember Zheng He\'s fleets, paid for by the Ming state. They came for diplomacy. These Portuguese want new routes and new lands.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Compared with Zheng He\'s Ming fleets, how did Iberian voyages differ?' },
        choices: [
          { ok: true, t: { en: 'Their rulers expected new routes and new lands' }, why: { en: 'Yes. Both were state-funded, but the Ming sent Zheng He for diplomacy. Iberian monarchs expected new routes and territory.' } },
          { t: { en: 'They sailed without any support from their states' }, why: { en: 'No. European explorers had the power and wealth of their states behind them, just as Zheng He had the Ming.' } },
          { t: { en: 'They were sent mainly for gifts and diplomacy' }, why: { en: 'No. That describes Zheng He\'s mission. Iberian monarchs wanted new routes and conquered lands.' } },
          { t: { en: 'Only they steered with rear rudders, an Iberian idea' }, why: { en: 'No. Iberian ships did use rear rudders, but Baraka says those were first used in ancient China. The key difference is purpose: diplomacy versus routes and lands.' } }
        ]
      }
    },
    {
      doc: true, x: 3, y: 7, icon: '📜',
      name: { en: 'Ibn Majid on the Portuguese' }, role: { en: 'Primary source' },
      src: { en: 'Ahmad ibn Majid, Omani navigator, writing late in his life about the Portuguese; quoted in "Lion of the Sea: Ahmad Ibn Mājid," World History Project' },
      lines: [
        { en: '"We have. . . the measurement of stellar altitudes, but they have not. They cannot understand the way we navigate, but we can understand the way they do; we can use their system and sail in their ships."' },
        { en: '"For the Indian Ocean is connected to the All-Encompassing Ocean, and we possess scientific books. . . they have ... only the compass and dead reckoning. . . We can easily sail in their ships and upon their sea, so they have great respect for us and look up to us. They admit we have a better knowledge of the sea and navigation and the wisdom of the stars."' },
        { en: 'Ahmad ibn Majid, born in Julfar, Oman, around 1432, was a master navigator called the "Lion of the Sea." He wrote books on navigation for Indian Ocean sailors.' },
        { en: 'He wrote this late in his life, after the Portuguese entered the Indian Ocean in 1498. He does not write about meeting them, and he was probably not da Gama\'s pilot.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Which best describes Ibn Majid\'s point of view in this source?' },
        choices: [
          { ok: true, t: { en: 'A proud master of Indian Ocean navigation' }, why: { en: 'Yes. As the "Lion of the Sea," he defends the star science and books of Indian Ocean sailors against the newcomers.' } },
          { t: { en: 'A pilot who had guided da Gama\'s ship to India' }, why: { en: 'No. He never writes about meeting the Portuguese, and he was probably not da Gama\'s pilot.' } },
          { t: { en: 'A Portuguese ally praising European sea skill' }, why: { en: 'No. He says the Portuguese have only the compass and dead reckoning, and look up to Indian Ocean sailors.' } },
          { t: { en: 'A navigator who rates the compass above the stars' }, why: { en: 'No. He says the newcomers have "only the compass and dead reckoning," while his people have star science and books. He rates the stars higher.' } }
        ]
      }
    },
    {
      doc: true, x: 19, y: 11, icon: '📖',
      name: { en: 'Origins of Oceanic Connections' }, role: { en: 'Reading' },
      src: { en: 'Adapted from "Origins of Oceanic Connections" by Bennett Sherry, World History Project (Khan Academy)' },
      lines: [
        { en: 'Europeans wanted to spread Christianity and win glory, but their biggest motive was a sea route to the Indian Ocean. Recovered from the Black Death, Europeans wanted Asian luxuries. But the Ottoman Empire controlled trade between the Mediterranean and Asia, so it could tax these luxuries.' },
        { en: 'What really launched oceanic connections was the Spanish and Portuguese colonization of Atlantic islands like the Canaries and Madeira in the 1400s. These waypoints became "laboratories of capitalism." On Madeira, Europeans first tried large-scale sugar production, enslaving the islands\' indigenous people and North Africans to work on plantations.' },
        { en: 'The voyages were deadly: Magellan\'s 1520s voyage around the globe set out with 5 ships and 270 sailors; only 1 ship and 18 sailors returned. In 1600 the Netherlands was a small republic, newly free from Spain. Yet from 1600 to 1800, 49 percent of ships in the Eurasian trade were Dutch.' },
        { en: 'Dutch joint-stock companies, owned by many shareholders, limited risk: if one ship sank, investors did not lose everything. The Dutch and British East India Companies held trade monopolies and acted almost like states, with armies, coins and wars.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'According to the reading, which development really launched oceanic connections?' },
        choices: [
          { ok: true, t: { en: 'Iberian colonies on Atlantic islands like Madeira' }, why: { en: 'Yes. In the 1400s the Canaries and Madeira became waypoints and the first large sugar plantations worked by enslaved people.' } },
          { t: { en: 'Dutch joint-stock companies that limited investors\' risk' }, why: { en: 'No. Dutch joint-stock companies came after 1600, long after oceanic connections had begun.' } },
          { t: { en: 'Venetian merchants\' trade with the Ottoman Empire' }, why: { en: 'No. Venice traded through the Ottomans. Iberian rulers refused Ottoman control and sought a sea route.' } },
          { t: { en: 'Magellan\'s voyage around the globe in the 1520s' }, why: { en: 'No. Magellan sailed in the 1520s, about a century after Iberians colonized the Canaries and Madeira in the 1400s. Those islands launched oceanic connections.' } }
        ]
      }
    }
  ],
  houses: [
    { at: [4, 3], name: { en: 'Imam Rashid' }, look: { skin: 3, hair: '#8a8a8a', shirt: '#f0ece0', robe: true, hat: '#f0ece0', style: 'short' },
      lines: [{ en: 'One faith, Islam, and one language, Arabic, link ports from Africa to India and Indonesia.' }, { en: 'Five times a day we pray facing Mecca. A good navigator knows the direction even at sea.' }] },
    { at: [11, 2], name: { en: 'Mariam' }, look: { skin: 4, hair: '#1b1410', shirt: '#8e3b6a', robe: true, style: 'long' },
      lines: [{ en: 'My husband learned the sea from his father and grandfather, just like Ibn Majid did.' }, { en: 'Sailors memorize long poems of sailing knowledge, the way we memorize the Qur\'an.' }] },
    { at: [16, 2], name: { en: 'Clerk Idris' }, look: { skin: 2, hair: '#2b1d14', shirt: '#3a5a8a', robe: true, style: 'short' },
      lines: [{ en: 'Long ago the traveler Ibn Battuta was welcomed in East African ports, though he was a stranger.' }, { en: 'He even worked as a judge. A shared faith and language made him at home.' }] },
    { at: [11, 7], name: { en: 'Rope maker Omari' }, look: { skin: 5, hair: '#1b1410', shirt: '#6a7a4a', pants: '#3a3a2a', style: 'short' },
      lines: [{ en: 'The sailors say their Catholic kings fought wars to drive Muslim powers out of Spain and Portugal.' }, { en: 'So they hate paying Ottoman taxes on spices. Now they come around Africa instead.' }] },
    { at: [4, 12], name: { en: 'Gold trader Saida' }, look: { skin: 5, hair: '#1b1410', shirt: '#d9822b', robe: true, style: 'bun' },
      lines: [{ en: 'The Portuguese built forts on the West African coast and made alliances with West African states.' }, { en: 'Now they buy West African gold directly, skipping the trans-Saharan caravans.' }] },
    { at: [4, 18], name: { en: 'Old sailor Hamisi' }, look: { skin: 4, hair: '#cfcfcf', shirt: '#4a7aa8', pants: '#3a3a3a', style: 'short' },
      lines: [{ en: 'Ahmad ibn Majid was born in Julfar, a port of Oman, around 1432.' }, { en: 'Sailors from here to India call him the "Lion of the Sea."' }] }
  ],
  signs: [
    { x: 21, y: 1, text: { en: 'NORTH JETTY · In 1498, Vasco da Gama\'s ships from Portugal anchor here.' } },
    { x: 19, y: 7, text: { en: 'TO THE BEACH · Ibn Majid\'s book teaches the tides, monsoon winds, currents and reefs of this ocean.' } },
    { x: 20, y: 15, text: { en: 'DHOW YARD · Dhows, the main ships of the Indian Ocean, are built on this beach.' } }
  ],
  finds: [
    { clueAt: [16, 9], at: [16, 6], decor: 'vase', clue: { en: 'From this note, walk 3 steps north, toward the houses.' },
      text: { en: 'A piece of porcelain from Asia! Luxuries like porcelain drew Europeans to the Indian Ocean.' } }
  ],
  scraps: [[1, 1], [23, 1], [1, 19]],
  smudges: [[6, 15], [19, 18]],
  quest: {
    stat: 'reg',
    title: { en: 'The Pilgrim\'s Kamal' },
    giver: {
      x: 6, y: 17, name: { en: 'Zahra' }, role: { en: 'Pilgrim bound for Mecca' },
      look: { skin: 4, hair: '#1b1410', shirt: '#4a6aa8', robe: true, style: 'long' },
      lines: [
        { en: 'I sail to Mecca for the [[hajj|hajj]]. Pilgrims from Africa to Indonesia cross this ocean to make it.' },
        { en: 'In the 1300s the traveler Ibn Battuta was welcomed in ports like ours. One faith, Islam, and one language, Arabic, link people from Africa to India and Indonesia.' },
        { en: 'The Void\'s helpers stole our navigator\'s [[kamal|kamal]]! Without it he cannot find latitude. Ask the fisherman on the north jetty.' }
      ],
      wait: { en: 'The fisherman works on the north jetty, at the beach in the north-east.' },
      thanks: { en: 'Our kamal! Now our navigator can find our way, and point us toward Mecca at prayer time.' }
    },
    contact: {
      x: 26, y: 4, name: { en: 'Juma' }, role: { en: 'Fisherman' },
      look: { skin: 5, hair: '#1b1410', shirt: '#2a6a8a', pants: '#3a3a2a', style: 'short' },
      lines: [
        { en: 'Sailors here know the stars. A kamal\'s knotted cord measures the polestar to find latitude.' },
        { en: 'A knotted cord washed south! Walk south along the beach, past the dhow yard, to the far south-east sand.' }
      ]
    },
    action: {
      type: 'find', at: [28, 19],
      hint: { en: 'South along the beach, past the dhow yard' },
      found: { en: 'There it is, half buried in the sand: the navigator\'s kamal, its knots still tight.' },
      item: { icon: '🪢', name: { en: 'The navigator\'s kamal' } }
    }
  },
  challenge: {
    at: [13, 9], type: 'route', stat: 'pla',
    // stops in time order: the south beach (islands) -> the west houses (Columbus) -> the north jetty (da Gama)
    // -> the south-west palms (Magellan) -> the market (silver) -> the north-west street (the Dutch companies)
    spots: [[23, 18], [2, 9], [23, 3], [8, 19], [16, 13], [10, 4]],
    title: { en: 'The chain of exploration' },
    intro: { en: 'The Void scrambled the timeline of exploration. Walk to each stop in order, from first to last, and see how each step led to the next.' },
    items: [
      { icon: '🏝️', t: { en: '1400s: Spain and Portugal colonize Madeira and the Canary Islands, with sugar plantations worked by enslaved people' } },
      { icon: '⛵', t: { en: '1492: Columbus, sailing for Spain, reaches the Bahamas, home of the Taino people' } },
      { icon: '🧭', t: { en: '1498: Vasco da Gama rounds Africa and, with an Indian Ocean pilot, reaches India' } },
      { icon: '🌍', t: { en: '1520s: Magellan\'s voyage circles the globe; only 1 of 5 ships and 18 of 270 sailors return' } },
      { icon: '🪙', t: { en: '1570s: Spanish galleons carry silver mined by forced Indigenous labor across the Pacific to China' } },
      { icon: '📈', t: { en: '1602: the Amsterdam Stock Exchange opens; Dutch joint-stock companies spread the risk of voyages' } }
    ],
    why: { en: 'Not yet. Atlantic islands became waypoints first; then ocean crossings; then a world trade in silver; then [[joint-stock company|joint-stock companies]] to share the risk.' },
    success: { en: 'The chain holds! Islands, routes, a world silver trade, then companies that shared the risks of the sea.' }
  },
  boss: {
    at: [28, 14], stat: 'hei', need: 3,
    name: { en: 'The Void' },
    appear: { en: 'The Void has opened on the south jetty. The sea charts curl toward it.' },
    taunt: { en: 'Every voyage loses ships. Every ship that sinks comes to me.' },
    win: { en: 'The Void closes over the Indian Ocean. The page on exploration floats into your hands.' },
    questions: [
      {
        stim: { text: { en: 'The Ottoman Empire controlled trade between the Mediterranean and Asia. That meant they could tax these luxuries and use the profits to fund wars against the Hapsburg monarchs. . . . Italian merchants, especially from Venice, continued to trade with the Ottomans.' }, src: { en: 'Adapted from "Origins of Oceanic Connections," World History Project' } },
        q: { en: 'Which of the following best explains why Iberian monarchs, rather than Italian merchants, led the search for a new sea route to Asia?' },
        choices: [{ en: 'Venice had not recovered from the Black Death' }, { en: 'Iberian banks had begun to fund Venetian ships' }, { en: 'Catholic Iberians rejected Ottoman control' }, { en: 'Ming bans had shut the Silk Road to Venetians' }],
        answer: 2,
        why: { en: 'Catholic monarchs who had fought to drive Muslim powers from Iberia would not accept Ottoman taxes. Venice, which had recovered and kept trading with the Ottomans, had less reason to seek a new route.' }
      },
      {
        stim: { text: { en: '"They cannot understand the way we navigate, but we can understand the way they do; we can use their system and sail in their ships."' }, src: { en: 'Ahmad ibn Majid, Omani navigator, writing late in his life about the Portuguese; quoted in "Lion of the Sea," World History Project' } },
        q: { en: 'The author\'s point of view in the excerpt is best explained by his...' },
        choices: [{ en: 'standing as a master navigator of that ocean' }, { en: 'service as the pilot of Vasco da Gama\'s flagship' }, { en: 'training in Portuguese methods of dead reckoning' }, { en: 'role as a commander in Zheng He\'s Ming fleets' }],
        answer: 0,
        why: { en: 'Ibn Majid, the "Lion of the Sea," was a mu\'allim proud of his ocean\'s knowledge. He was probably not da Gama\'s pilot, and he scorned dead reckoning.' }
      },
      {
        stim: { text: { en: '"For the Indian Ocean is connected to the All-Encompassing Ocean, and we possess scientific books. . . they have ... only the compass and dead reckoning."' }, src: { en: 'Ahmad ibn Majid, Omani navigator; quoted in "Lion of the Sea," World History Project' } },
        q: { en: 'The excerpt best supports the claim that, around 1500,' },
        choices: [{ en: 'European ships were the most advanced in the world' }, { en: 'Arab sailors had given up the magnetic compass' }, { en: 'the Portuguese had taught latitude to Arab sailors' }, { en: 'Indian Ocean sailing rested on collective learning' }],
        answer: 3,
        why: { en: 'Books like Ibn Majid\'s gathered centuries of knowledge of stars, winds and currents. Da Gama needed an Indian Ocean sailor to reach India.' }
      },
      {
        stim: { title: { en: 'Risk at sea and the Dutch' }, rows: [[{ en: 'Voyage or trade' }, { en: 'What happened' }], [{ en: 'Magellan, 1520s' }, { en: '5 ships and 270 sailors set out; 1 ship and 18 sailors returned' }], [{ en: 'Portuguese ships to the Indian Ocean, early 1500s' }, { en: 'As many as half were lost at sea' }], [{ en: 'Dutch ships in the Eurasian trade, 1600–1800' }, { en: '49 percent of all ships' }]], src: { en: 'From "Origins of Oceanic Connections," World History Project' } },
        q: { en: 'Which of the following best explains how the Dutch came to dominate Eurasian shipping despite the risks shown?' },
        choices: [{ en: 'Galleons made long ocean voyages far less deadly' }, { en: 'Joint-stock companies spread losses among owners' }, { en: 'Spanish silver paid merchants back for lost ships' }, { en: 'The Ottomans opened the Red Sea to Dutch fleets' }],
        answer: 1,
        why: { en: 'Ships still sank. But joint-stock companies were owned by many shareholders, so if one ship sank, investors did not lose everything, and they trusted Dutch merchants with their money.' }
      },
      {
        stim: { text: { en: 'The islands became laboratories of capitalism. . . . It was on islands like Madeira that Europeans first experimented with large-scale sugar production, enslaving the islands\' indigenous populations—and North Africans—to work on plantations.' }, src: { en: 'Adapted from "Origins of Oceanic Connections," World History Project' } },
        q: { en: 'The development described in the excerpt most directly reflects which of the following?' },
        choices: [{ en: 'The Columbian Exchange of crops from the Americas' }, { en: 'Ming tribute voyages to the coast of East Africa' }, { en: 'Island plantations worked by enslaved people' }, { en: 'Ottoman control of the sugar trade into Iberia' }],
        answer: 2,
        why: { en: 'In the 1400s, before Columbus crossed the Atlantic, Iberians made Madeira and the Canaries waypoints and sugar plantations worked by enslaved people.' }
      },
      {
        stim: { text: { en: 'The explorers of Western Europe had the full power and wealth of European states backing them up. This was not unique. The Ming Empire funded Zheng He\'s massive armadas.' }, src: { en: 'Adapted from "Origins of Oceanic Connections," World History Project' } },
        q: { en: 'Compared with Zheng He\'s voyages, the Iberian voyages differed mainly in that' },
        choices: [{ en: 'they sailed without the backing of any state' }, { en: 'their monarchs expected new routes and lands' }, { en: 'they were sent mainly to carry gifts and envoys' }, { en: 'they relied on bigger fleets than the Ming sent' }],
        answer: 1,
        why: { en: 'Both were state-funded. Zheng He\'s mission was diplomacy; Iberian monarchs expected explorers to find new routes and conquer new territory.' }
      },
      {
        stim: { text: { en: 'During the medieval period, European ships were mostly single-mast cogs or galleys with rows of oars. But these oar-powered ships were designed for coastal waters or inland seas.' }, src: { en: 'Adapted from "Origins of Oceanic Connections," World History Project' } },
        q: { en: 'Which of the following best explains how Iberian shipbuilders overcame the limits described?' },
        choices: [{ en: 'They built larger galleys with more oars' }, { en: 'They hired Ottoman shipwrights for fleets' }, { en: 'They copied ship designs from the Americas' }, { en: 'They added lateen sails and rear rudders' }],
        answer: 3,
        why: { en: 'Caravels and carracks took lateen sails from the Indian Ocean and rear rudders first used in China. With no rowers, they carried more food for long voyages.' }
      },
      {
        q: { en: 'Which of the following was a continuity in Indian Ocean trade from the 1300s to 1498?' },
        choices: [{ en: 'Islam and Arabic linked ports across the ocean' }, { en: 'Portuguese forts controlled the ocean\'s main ports' }, { en: 'Dutch joint-stock companies ruled the spice trade' }, { en: 'Spanish galleons carried American silver to Asia' }],
        answer: 0,
        why: { en: 'Ibn Battuta was welcomed in these ports in the 1300s, and pilgrims still crossed for the hajj. The Portuguese arrived only in 1498; the Dutch and Spanish silver came later.' }
      }
    ]
  },
  learned: [
    { en: 'Europeans wanted a [[sea route|sea route]] to Indian Ocean trade, to buy Asian luxuries without [[ottoman empire|Ottoman]] [[middleman|middlemen]] and their taxes.' },
    { en: 'Their [[caravel|caravels]], [[lateen sail|lateen sails]], compass and [[astrolabe|astrolabe]] came from centuries of [[collective learning|collective learning]] across Afro-Eurasia, like Ibn Majid\'s.' },
    { en: 'Voyages were deadly but profitable; state-backed explorers sought routes and land, unlike Zheng He\'s voyages for diplomacy.' }
  ],
  reflect: {
    q: { en: 'AP practice: Explain one cause of European maritime exploration in the period 1450 to 1750.' },
    starter: { en: 'One cause of European maritime exploration was' }
  }
};
