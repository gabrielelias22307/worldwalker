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
    { en: 'The Grump blurred the page on exploration. Malindi is forgetting why strange ships just sailed in from Portugal!' },
    { en: 'Talk to the 4 people here, help a pilgrim, then wake the time stone.' }
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
        { en: 'We sailed from Portugal around the southern tip of Africa. Our captain is Vasco da Gama.' },
        { en: 'Europe has recovered from the [[black death|Black Death]], and people want Asia\'s luxuries. But the [[ottoman empire|Ottomans]] control that trade, and they tax it.' },
        { en: 'Our kings want to spread Christianity, and we want glory. But above all, we want a [[sea route|sea route]] to the Indian Ocean.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'What was the biggest motive for Iberian voyages like this one?' },
        choices: [
          { ok: true, t: { en: 'A sea route to Asia\'s trade' }, why: { en: 'Yes. A sea route let Europeans buy Asian luxuries without Ottoman control and taxes.' } },
          { t: { en: 'An escape from the Black Death' }, why: { en: 'No. Europe had recovered from the Black Death. Its new wealth made people eager for Asian luxuries.' } },
          { t: { en: 'A plan to join Zheng He\'s fleet' }, why: { en: 'No. Zheng He\'s Ming voyages were decades earlier. The Portuguese wanted their own route to Asian trade.' } }
        ]
      }
    },
    {
      x: 12, y: 13, name: { en: 'Halima' }, role: { en: 'Spice merchant' },
      look: { skin: 4, hair: '#1b1410', shirt: '#2a8a6a', robe: true, style: 'bun' },
      lines: [
        { en: 'Pepper reaches Europe through dozens of [[middleman|middlemen]], by ship and caravan. Each adds a profit, so it is costly there.' },
        { en: 'A sea route around Africa skips the Silk Road and the Ottoman taxes. The Portuguese could sell for less than Italian merchants.' },
        { en: 'But the sea is deadly. When a ship sinks, its investors lose the ship and all its cargo.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why could a route around Africa pay off, even if ships were lost?' },
        choices: [
          { ok: true, t: { en: 'It cut out the middlemen and their taxes' }, why: { en: 'Yes. With fewer merchants taking a profit, the Portuguese could sell luxuries for lower prices.' } },
          { t: { en: 'It was shorter and safer than the old roads' }, why: { en: 'No. The voyage around Africa was long and very dangerous. The gain was skipping the middlemen.' } },
          { t: { en: 'Asian rulers paid Europeans to come there' }, why: { en: 'No. Europeans came to buy Asian goods. The profit came from cutting out the middlemen.' } }
        ]
      }
    },
    {
      x: 6, y: 5, name: { en: 'Yusuf' }, role: { en: 'Navigator' },
      look: { skin: 3, hair: '#1b1410', shirt: '#e8e2d0', robe: true, hat: '#f0ece0', style: 'short' },
      lines: [
        { en: 'I am a [[muallim|mu\'allim]], a master navigator. The Portuguese captain needs a sailor like us to guide him from Malindi to India.' },
        { en: 'We find [[latitude|latitude]] with the [[astrolabe|astrolabe]] and the [[kamal|kamal]]. Ahmad ibn Majid\'s book holds centuries of [[collective learning|collective learning]]: winds, tides, currents, reefs.' },
        { en: 'Ibn Majid says the Portuguese have "only the compass and dead reckoning," while we measure the stars.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Ibn Majid was a famous Omani navigator. Why might he stress the Portuguese lack of skill?' },
        choices: [
          { ok: true, t: { en: 'He was proud of his ocean\'s skill' }, why: { en: 'Yes. A master navigator wrote to show his tradition\'s skill. That point of view shapes the source.' } },
          { t: { en: 'He had sailed on da Gama\'s own ship' }, why: { en: 'No. He does not write about meeting the Portuguese, and he was probably not da Gama\'s pilot.' } },
          { t: { en: 'He wanted Europeans to buy his book' }, why: { en: 'No. He wrote for sailors of his own ocean, to pass on what generations had learned.' } }
        ]
      }
    },
    {
      x: 22, y: 14, name: { en: 'Baraka' }, role: { en: 'Dhow builder' },
      look: { skin: 5, hair: '#1b1410', shirt: '#c9a24a', pants: '#4a3a2a', style: 'short' },
      lines: [
        { en: 'I build [[dhow|dhows]]. Our triangle [[lateen sail|lateen sails]] can sail against the wind. The Portuguese copied them for their [[caravel|caravels]].' },
        { en: 'Caravels need no rowers, so they carry more food and cargo. Their compass and rear rudder came from China; the astrolabe, through the Islamic world.' },
        { en: 'Old sailors remember Zheng He\'s Ming fleets. They came for diplomacy. These Portuguese want new routes and land for their king.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'What does the Portuguese caravel show about European exploration?' },
        choices: [
          { ok: true, t: { en: 'It used tools from across Afro-Eurasia' }, why: { en: 'Yes. Lateen sails, the compass, the rudder and the astrolabe came west through Afro-Eurasian networks.' } },
          { t: { en: 'Europe invented all its own sea tools' }, why: { en: 'No. The compass and rudder came from China and the lateen sail from the Indian Ocean.' } },
          { t: { en: 'Its design came from ships of the Americas' }, why: { en: 'No. Its tools came from China, the Indian Ocean and the Islamic world.' } }
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
        { en: 'The Grump\'s helpers stole our navigator\'s [[kamal|kamal]]! Without it he cannot find latitude. Ask the fisherman on the north jetty.' }
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
    intro: { en: 'The Grump scrambled the timeline of exploration. Walk to each stop in order, from first to last, and see how each step led to the next.' },
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
    name: { en: 'The Fog Grump' },
    appear: { en: 'The Fog Grump is hiding on the south jetty!' },
    taunt: { en: 'Routes, sails, stars... I will fog up every sea chart in Malindi.' },
    win: { en: 'The fog lifts over the Indian Ocean. The page on exploration floats into your hands!' },
    questions: [
      {
        stim: { text: { en: 'The Ottoman Empire controlled trade between the Mediterranean and Asia. That meant they could tax these luxuries.' }, src: { en: 'Adapted from "Origins of Oceanic Connections," World History Project' } },
        q: { en: 'Which best explains how the situation described led to European exploration?' },
        choices: [{ en: 'Iberians sought a sea route past the Ottomans' }, { en: 'Europeans fled the Ottomans to settle in Asia' }, { en: 'The Ottomans paid Portugal to explore Africa' }, { en: 'Venice stopped all trade with the Ottomans' }],
        answer: 0,
        why: { en: 'Iberian monarchs wanted a sea route to the Indian Ocean so they could buy Asian luxuries without Ottoman taxes.' }
      },
      {
        stim: { text: { en: '"We have... the measurement of stellar altitudes, but they have not.... they have... only the compass and dead reckoning."' }, src: { en: 'Ahmad ibn Majid, Omani navigator, writing about the Portuguese late in his life' } },
        q: { en: 'The excerpt best reflects which development?' },
        choices: [{ en: 'Indian Ocean sailors had deep navigation knowledge' }, { en: 'The Portuguese were the best navigators of the age' }, { en: 'Arab sailors had never used a compass at sea' }, { en: 'Europeans taught astronomy to Indian Ocean sailors' }],
        answer: 0,
        why: { en: 'Ibn Majid says Indian Ocean sailors measured the stars while the Portuguese did not. Da Gama needed a pilot from Malindi.' }
      },
      {
        stim: { title: { en: 'Magellan\'s voyage, 1520s' }, rows: [[{ en: 'Count' }, { en: 'Set out' }, { en: 'Returned' }], [{ en: 'Ships' }, { en: '5' }, { en: '1' }], [{ en: 'Sailors' }, { en: '270' }, { en: '18' }]], src: { en: 'From "Origins of Oceanic Connections," World History Project' } },
        q: { en: 'The data in the table best support which conclusion about oceanic voyages?' },
        choices: [{ en: 'Even with new technology they were deadly' }, { en: 'Galleons made Pacific crossings very safe' }, { en: 'Most sailors on the voyage came home again' }, { en: 'Spain stopped funding voyages after this one' }],
        answer: 0,
        why: { en: 'Only 1 of 5 ships and 18 of 270 sailors returned. Ocean voyages were risky, which is why investors later spread the risk.' }
      },
      {
        q: { en: 'Compared with Zheng He\'s Ming voyages, Iberian voyages differed mainly because...' },
        choices: [{ en: 'their rulers wanted new routes and new lands' }, { en: 'they had no support at all from their states' }, { en: 'they were sent only for diplomacy and gifts' }, { en: 'they used smaller fleets to reach the Americas' }],
        answer: 0,
        why: { en: 'Both had state backing. The Ming sent Zheng He for diplomacy; European monarchs expected new routes and conquered territory.' }
      },
      {
        q: { en: 'Which development most directly let Iberian ships make long ocean voyages?' },
        choices: [{ en: 'Caravels with lateen sails and no rowers' }, { en: 'Galleys with long rows of heavy oars' }, { en: 'Single-mast cogs built for the coasts' }, { en: 'Steam engines from European workshops' }],
        answer: 0,
        why: { en: 'Lateen sails let caravels sail against the wind. With no rowers, they carried more food and cargo.' }
      },
      {
        stim: { text: { en: 'It was on islands like Madeira that Europeans first experimented with large-scale sugar production, enslaving the islands\' indigenous populations to work on plantations.' }, src: { en: 'Adapted from "Origins of Oceanic Connections," World History Project' } },
        q: { en: 'The excerpt best illustrates which effect of early Iberian expansion?' },
        choices: [{ en: 'Islands became plantations using forced labor' }, { en: 'Sugar was first grown in Europe\'s cold north' }, { en: 'Iberians freed the Canary Islanders from slavery' }, { en: 'Madeira stopped ships from crossing the Atlantic' }],
        answer: 0,
        why: { en: 'Madeira and the Canaries were waypoints and early plantation colonies, worked by enslaved people. This came before the Atlantic crossings.' }
      },
      {
        stim: { text: { en: 'By sailing around Africa, the Portuguese opened a direct route: no need for the Silk Road and the Ottoman middlemen with their taxes.' }, src: { en: 'Adapted from "Origins of Oceanic Connections," World History Project' } },
        q: { en: 'Which economic effect most likely followed from the route described?' },
        choices: [{ en: 'Portuguese merchants could sell for less' }, { en: 'Asian luxuries became more costly in Europe' }, { en: 'Silk Road merchants gained new Portuguese buyers' }, { en: 'Portugal stopped trading for spices and pepper' }],
        answer: 0,
        why: { en: 'Fewer middlemen meant fewer profits added to the price, so the Portuguese could sell for less than Italian merchants.' }
      },
      {
        q: { en: 'Ibn Majid\'s book of winds, tides, currents and reefs is best understood as an example of...' },
        choices: [{ en: 'collective learning in Indian Ocean networks' }, { en: 'a Portuguese guide to sailing around Africa' }, { en: 'a new science with no older roots' }, { en: 'a Ming record of Zheng He\'s voyages' }],
        answer: 0,
        why: { en: 'His book gathered centuries of sailors\' knowledge and his own. It was collective learning carried along trade routes.' }
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
