/* HISTORYWALKER · Episode 4.1 · Technological Innovations from 1450 to 1750 (AP World Topic 4.1)
   Lisbon, Portugal, about 1480: the shipyards and harbor on the river, where Portuguese ships fit out to sail south.
   Content source: Khan Academy, AP World History (World History Project), Unit 4 Lesson "Technological Innovations from
   1450 to 1750": "Technology in the Age of Exploration" (Malcolm F. Purinton), "Quick Sourcing: Trade and Technology"
   (Ahmad ibn Majid, 1489), "The Scientific Revolution" (Eman M. Elshaikh); and the Unit 4 overview: "Unit 4 Introduction:
   Transoceanic Interconnections 1450 to 1750" (Trevor Getz). World History Project content is CC BY-NC 4.0.
   Facts here come from those readings. English only, AP level.
   Map: north-west, the cathedral, houses, the compass maker's shop and market stalls; north-east, the castle walls, a
   merchant's counting house and the cannon foundry; south-west, the shipyard on the sandy shore with its slipway docks;
   south-east, the warehouse and the harbor piers. The river runs along the whole south edge. */
window.EPISODE = {
  id: '4.1',
  realm: 4,
  sol: 'AP 4.1',
  style: 'europe',
  weather: { sky: 'clear', time: 'day' },
  title: { en: 'Technological Innovations' },
  place: { en: 'Lisbon, Portugal, 1480' },
  intro: [
    { en: 'The Grump blurred the page on sea technology. Lisbon\'s shipyards are forgetting where their tools came from!' },
    { en: 'Talk to the 4 people here, read the 2 sources on the lecterns, help a shipowner arm her caravel, then wake the time stone.' }
  ],
  scenes: {
    at: [-9.14, 38.71],
    year: 1480,
    start: [
      { en: 'In the 1400s, Ottoman sultans dominated trade between Europe, Africa and Asia.' },
      { en: 'So some Europeans set out to trade by sea, first south toward West Africa.' },
      { en: 'Their ships carried tools and ideas gathered from across Afro-Eurasia.' }
    ],
    guess: {
      q: { en: 'Portuguese pilots steered by the magnetic compass. Where did early compasses come from?' },
      choices: [{ t: { en: '🏯 From China' }, ok: true }, { t: { en: '⛵ From Portugal' } }],
      why: { en: 'Early magnetic compasses came from China. They reached Europe through trade with Asia.' }
    },
    page: { en: 'The biggest carracks, with two to four masts, could reach 2,000 tons.' },
    next: {
      q: { en: 'Next: Exploration. Where did Europeans\' first long sea voyages head?' },
      choices: [{ t: { en: 'South, toward West Africa' }, ok: true }, { t: { en: 'West, straight to China' } }],
      why: { en: 'Their first journeys went south toward West Africa. Later they rounded Africa and reached Asia. You go there next.' }
    }
  },
  start: [14, 5],
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT',
    'T.RRRR..DDDDDDD.T.WWWWWWWWWWWW.T',
    'T.hhdh..DDDDDDD...W.DDDDD....W.T',
    'T.......DDDdDDD...W.DDdDD....W.T',
    'TllllllllllllllllllllllllllllllT',
    'T.QQQ..........l.........RRRR..T',
    'T.hdh.....,....l.........hhdh..T',
    'T....x..m.m.m..l...QQQQ........T',
    'T..............l...hdhh....T...T',
    'T..T...........l...............T',
    'T.......T......l.......T.......T',
    'T.RRR..........l..RRRR........,T',
    'T.hdh....x.....l..hhdh.........T',
    'T......sssssssslllllll...x.....T',
    'TPP..sssssssssssllllllllllllll.T',
    'TP..sssssssssssssllllllllllllssT',
    'T~~ssssskkkssssss~~~kkk~~~kkk~~T',
    'T~~~~~~~kkk~~~~~~~~~kkk~~~kkk~~T',
    'T~~~~~~~kkk~~~~~~~~~kkk===kkk~~T',
    'T==============================T',
    'T==============================T',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT'
  ],
  words: {
    'afro-eurasia': { en: 'Africa, Europe and Asia together, linked by land and sea trade routes' },
    'latitude': { en: 'how far north or south of the equator a place or a ship is' },
    'magnetic compass': { en: 'a magnetic needle that points north; early versions came from China' },
    'kamal': { en: 'an Arab navigation tool: a piece of wood on a knotted rope, used to find latitude by the North Star' },
    'quadrant': { en: 'a tool for measuring how high a star or the sun stands above the horizon' },
    'astrolabe': { en: 'a tool of stacked, marked disks that measured latitude, the time and the positions of stars' },
    'caravel': { en: 'a fast Portuguese ship for long-distance trade, with square and lateen sails' },
    'carrack': { en: 'a large ship that mixed Mediterranean and Northern European designs' },
    'lateen sail': { en: 'a triangular sail, used on caravels when sailing close to shore' },
    'chain shot': { en: 'two cannon balls joined by a chain, fired to wreck an enemy ship\'s sails and rigging' },
    'banking': { en: 'keeping, lending and moving money for others, a financial tool for paying for trade' }
  },
  npcs: [
    {
      x: 6, y: 8, name: { en: 'Rodrigo' }, role: { en: 'Compass maker' },
      look: { skin: 2, hair: '#2b1d14', shirt: '#5a6a3a', pants: '#3a2a1a', style: 'short' },
      lines: [
        { en: 'I fix a magnetic needle to a card in a wooden box. This [[magnetic compass|compass]] reliably points north, so you know your heading.' },
        { en: 'The idea is not ours. Early compasses came from China, and they reached Europe through trade with Asia.' },
        { en: 'Arab sailors made the [[kamal|kamal]]: wood on a knotted rope. At home port, tie a knot so the North Star sits atop the wood and the horizon at the knot.' },
        { en: 'Sailing home, hold it the same way. It tells you whether to sail north or south to reach your home port\'s [[latitude|latitude]].' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Which best explains how the compass and the kamal reached Lisbon\'s sailors?' },
        choices: [
          { ok: true, t: { en: 'Through Afro-Eurasian trade with China and Arab sailors' }, why: { en: 'Yes. The compass came from China through trade with Asia, and the kamal came from Arab sailors.' } },
          { t: { en: 'Through old Roman designs that Europe\'s scholars had kept for centuries' }, why: { en: 'No. The astrolabe goes back to the Roman Empire, but the compass came from China and the kamal from Arab sailors.' } },
          { t: { en: 'Through gifts that Ottoman sultans sent to Portugal\'s kings' }, why: { en: 'No. The Ottomans dominated trade routes; the compass came from China through trade with Asia.' } }
        ]
      }
    },
    {
      x: 25, y: 8, name: { en: 'Leonor' }, role: { en: 'Merchant' },
      look: { skin: 1, hair: '#4a2a1a', shirt: '#7a2a4a', robe: true, style: 'bun' },
      lines: [
        { en: 'In this century the mighty Ottoman sultans dominate trade between Europe and other regions, in Africa and in Asia.' },
        { en: 'Our small states cannot match the size and productivity of great Eurasian empires like the Ottoman and Russian. But we can still trade with them, by sea!' },
        { en: 'We use what we learned in that vast trading system: financial tools like [[banking|banking]] and checks, and physical ones like gunpowder and better sails.' },
        { en: 'Our first voyages go south, toward West Africa. Some captains dream of rounding the southern tip of Africa to reach Asia.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Which best explains why merchants like Leonor turned to the sea?' },
        choices: [
          { ok: true, t: { en: 'Ottoman control of trade with Africa and Asia' }, why: { en: 'Yes. With the Ottoman sultans dominating that trade, Europeans used new tools to trade by sea.' } },
          { t: { en: 'Europe out-produced the great Eurasian empires' }, why: { en: 'No. Europe\'s small states could not match the productivity and size of the great Eurasian states.' } },
          { t: { en: 'The magnetic compass was just invented in Lisbon' }, why: { en: 'No. Early compasses came from China, through trade with Asia.' } }
        ]
      }
    },
    {
      x: 11, y: 15, name: { en: 'Gonçalo' }, role: { en: 'Shipwright' },
      look: { skin: 1, hair: '#6e6e6e', shirt: '#8a5a2a', pants: '#3a3a2a', hat: '#5a3a1a', style: 'short' },
      lines: [
        { en: 'We build [[caravel|caravels]] here, with two or three masts. Prince Henry the Navigator of Portugal had them developed for long-distance trade.' },
        { en: 'Square sails catch the wind on open water. Near shore we switch to triangular [[lateen sail|lateen sails]]. The rounded bottom makes a caravel fast.' },
        { en: 'The big [[carrack|carrack]] is a mash-up of Mediterranean and Northern European ship styles: a rounded stern, a forecastle in front and an aftcastle behind.' },
        { en: 'A carrack has two to four masts, with lateen and square sails. The biggest can reach 2,000 tons.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Compared with the caravel, what set the carrack apart?' },
        choices: [
          { ok: true, t: { en: 'Its great size and its mix of two regions\' styles' }, why: { en: 'Yes. The carrack blended Mediterranean and Northern European designs and could reach 2,000 tons.' } },
          { t: { en: 'Its speed, from a rounded bottom that pirates liked' }, why: { en: 'No. That describes the caravel, the fast ship pirates liked to use.' } },
          { t: { en: 'Its use of triangular lateen sails on every mast' }, why: { en: 'No. Carracks used both lateen and square sails, on two to four masts.' } }
        ]
      }
    },
    {
      x: 27, y: 17, name: { en: 'Lopo' }, role: { en: 'Ship\'s pilot' },
      look: { skin: 3, hair: '#1b1410', shirt: '#2a4a7a', pants: '#2a2a3a', hat: '#2a2a3a', style: 'short' },
      lines: [
        { en: 'North of the equator, on a clear night, I steer by the North Star, Polaris. Its height above the horizon tells me our [[latitude|latitude]].' },
        { en: 'I measure that height with a [[quadrant|quadrant]]. It works on any star, even the sun. Know your latitude, and you can keep sailing in a straight line to your destination.' },
        { en: 'An [[astrolabe|astrolabe]], a stack of marked disks, does even more: latitude, the time of day or night, and the positions of stars and planets.' },
        { en: 'The astrolabe is not new. It goes back to the Roman Empire, and sailors still trust it.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why did tools that measure a star\'s height matter so much for long voyages?' },
        choices: [
          { ok: true, t: { en: 'Latitude let pilots hold a course far from land' }, why: { en: 'Yes. Knowing the latitude let a pilot keep a straight course and find the way home.' } },
          { t: { en: 'The quadrant measured how fast the ship was sailing' }, why: { en: 'No. A star\'s height gives latitude, not speed.' } },
          { t: { en: 'The astrolabe was a brand-new Portuguese invention' }, why: { en: 'No. The astrolabe goes back to the Roman Empire.' } }
        ]
      }
    },
    {
      doc: true, x: 24, y: 15, icon: '📜',
      name: { en: 'Ibn Majid\'s Book of Navigation' }, role: { en: 'Primary source' },
      src: { en: 'Ahmad ibn Majid, The Book of the Benefits of the Principles and Foundations of Navigation, 1489; quoted in "Quick Sourcing: Trade and Technology," World History Project' },
      lines: [
        { en: '"If a man wishes to do anything [by methods] not connected with the [science] of navigation, then he can do so, but whenever he lacks the directions of towns and islands... then he must find them by means of our science."' },
        { en: '"When you reach that place the island of al-Qumr falls away on your left, but the land comes to an end on your right and turns towards the west and north..."' },
        { en: 'Ahmad ibn Majid, an Arab navigator, wrote this book in 1489, nine years after this day in Lisbon. He writes as a scientific navigator who values knowledge from experience at sea, for anyone who "lacks the directions of towns and islands." Arab navigational science like his became part of the sea knowledge that later European and Asian explorers used.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Point of view: which best describes Ibn Majid\'s point of view in this source?' },
        choices: [
          { ok: true, t: { en: 'An expert navigator who values knowledge from experience' }, why: { en: 'Yes. He calls navigation "our science" and gives exact directions by coasts and islands.' } },
          { t: { en: 'A merchant focused mainly on the profits of coastal trade' }, why: { en: 'No. He writes about finding the way by the science of navigation, not about prices or profit.' } },
          { t: { en: 'A religious leader explaining the natural world through faith' }, why: { en: 'No. His guide gives practical directions at sea; it is navigational science.' } }
        ]
      }
    },
    {
      doc: true, x: 12, y: 6, icon: '📖',
      name: { en: 'Tools from Many Lands' }, role: { en: 'Reading' },
      src: { en: 'Adapted from "Technology in the Age of Exploration" by Malcolm F. Purinton, World History Project (Khan Academy)' },
      lines: [
        { en: 'The fifteenth century saw a great growth in global networks. Dangerous, expensive ocean journeys became common because of technology. The tools traders and explorers used were based on innovations from many parts of Afro-Eurasia, brought together in Europe: the kamal from Arab sailors, the compass from China, and the astrolabe, used by Columbus and Magellan, from the Roman Empire.' },
        { en: 'Tools kept changing. The cross staff, about three feet long, was inspired by the design of the kamal, but by day it forced navigators to stare at the sun. In the 1600s Captain John Davis made the back staff, or Davis Quadrant, which used the sun\'s shadow instead. The traverse board let sailors record direction and speed every half hour, for four hours.' },
        { en: 'Long-distance trade was dangerous. Ship cannon fired round shot at hulls, chain shot at sails and rigging, and grapeshot at crews; superior ship cannon helped the English build a powerful navy. These were not the first ocean technologies: Polynesian people had crossed the vast Pacific for centuries. But the new tools quickly increased the number of voyages for exploration and trade.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'The cross staff was inspired by the kamal, and the back staff later fixed a flaw of the cross staff. This sequence best shows that...' },
        choices: [
          { ok: true, t: { en: 'new tools adapted older ideas from other regions' }, why: { en: 'Yes. An Arab design inspired the cross staff, and the back staff improved it: change built on continuity.' } },
          { t: { en: 'Europe dropped its older tools for wholly new inventions' }, why: { en: 'No. Each tool built on an earlier one, starting from the Arab kamal.' } },
          { t: { en: 'all of these tools were first made in China' }, why: { en: 'No. The compass came from China, but the kamal came from Arab sailors and the back staff from John Davis.' } }
        ]
      }
    }
  ],
  houses: [
    { at: [4, 2], name: { en: 'Grandmother Isabel' }, look: { skin: 2, hair: '#b0b0b0', shirt: '#4a5a7a', robe: true, style: 'bun' },
      lines: [{ en: 'Distant lands? Most of us care about our own street and workshop.' }, { en: 'Still, my grandson sails south on a caravel this spring.' }] },
    { at: [11, 3], name: { en: 'Brother Tomé' }, look: { skin: 1, hair: '#3a2a1a', shirt: '#5a4a3a', robe: true, style: 'short' },
      lines: [{ en: 'Our scholars read old Greek works on the stars.' }, { en: 'Many reached Europe through Arabic translations made in Baghdad, Cairo and Damascus.' }] },
    { at: [22, 3], name: { en: 'Royal clerk Duarte' }, look: { skin: 1, hair: '#2b1d14', shirt: '#2a3a6a', robe: true, style: 'short' },
      lines: [{ en: 'Merchants here watch the growing Ottoman and Russian empires closely.' }, { en: 'A very few of us have even read about distant China.' }] },
    { at: [3, 6], name: { en: 'Apprentice Inês' }, look: { skin: 3, hair: '#1b1410', shirt: '#7a6a2a', style: 'long' },
      lines: [{ en: 'A quadrant can measure the height of a mountain or a building.' }, { en: 'Gunners use one to aim a cannon, too.' }] },
    { at: [27, 6], name: { en: 'Banker Salomão' }, look: { skin: 2, hair: '#1b1410', shirt: '#3a5a4a', robe: true, style: 'short' },
      lines: [{ en: 'Long voyages cost a fortune. Banking helps pay for them.' }, { en: 'A merchant can pay with a check instead of heavy chests of coin.' }] },
    { at: [20, 8], name: { en: 'Founder Mafalda' }, look: { skin: 2, hair: '#3a2a1a', shirt: '#6a3a2a', pants: '#2a2a2a', style: 'bun' },
      lines: [{ en: 'We cast cannon and iron shot here. The fire never sleeps.' }, { en: 'Round shot of iron is made to smash the hulls of enemy ships.' }] },
    { at: [3, 12], name: { en: 'Sail maker Rui' }, look: { skin: 4, hair: '#1b1410', shirt: '#c9b98a', pants: '#3a3a2a', style: 'short' },
      lines: [{ en: 'I sew square sails for open water and triangular lateen sails for the coast.' }, { en: 'Caravels have rounded bottoms. They are fast, so pirates like them too.' }] },
    { at: [20, 12], name: { en: 'Warehouse clerk Teresa' }, look: { skin: 0, hair: '#8a5a2a', shirt: '#4a6a8a', style: 'long' },
      lines: [{ en: 'Ships now carry cargo farther, with greater safety.' }, { en: 'Every year more voyages leave this harbor.' }] }
  ],
  signs: [
    { x: 5, y: 7, text: { en: 'LISBON · Main street. The shipyard is south-west on the river; the foundry is north-east, below the castle.' } },
    { x: 9, y: 12, text: { en: 'SHIPYARD · Caravels for long-distance trade are built on this shore.' } },
    { x: 25, y: 13, text: { en: 'HARBOR · Ships sail from these piers south toward West Africa.' } }
  ],
  finds: [
    { clueAt: [28, 10], at: [30, 11], decor: 'shell', clue: { en: 'From this note, walk 2 steps east and 1 step south, to the flowers by the city edge.' },
      text: { en: 'A knotted cord on a piece of wood: a kamal! Arab sailors used one like it to find latitude.' } }
  ],
  scraps: [[30, 1], [1, 10], [30, 15]],
  smudges: [[9, 6], [20, 15]],
  quest: {
    stat: 'reg',
    title: { en: 'A Cannon for the Caravel' },
    giver: {
      x: 6, y: 14, name: { en: 'Beatriz' }, role: { en: 'Shipowner' },
      look: { skin: 2, hair: '#2b1d14', shirt: '#2a6a5a', robe: true, style: 'long' },
      lines: [
        { en: 'My new [[caravel|caravel]] sails south toward West Africa soon. Its rounded bottom makes it very fast.' },
        { en: 'But pirates love fast caravels too! Long-distance trade is dangerous, so every ship needs cannon.' },
        { en: 'Ask Baltasar the porter on the harbor piers, east along the river. He knows every gunner in Lisbon.' }
      ],
      wait: { en: 'Baltasar works on the harbor piers, east along the river from this shipyard.' },
      thanks: { en: 'A cannon for my caravel! Now my crew can carry cargo far away with greater safety. Thank you.' }
    },
    contact: {
      x: 21, y: 16, name: { en: 'Baltasar' }, role: { en: 'Dock porter' },
      look: { skin: 5, hair: '#1b1410', shirt: '#9a6a3a', pants: '#3a3a2a', style: 'short' },
      lines: [
        { en: 'Armed ships can make other ships, and even ports, give traders what they want. Some captains turn pirate.' },
        { en: 'Gunner Afonso sells cannon. Go north up the main street, then east to the foundry below the castle walls.' }
      ]
    },
    action: {
      type: 'trade',
      trader: {
        x: 22, y: 9, name: { en: 'Afonso' }, role: { en: 'Gunner' },
        look: { skin: 1, hair: '#5a3a1a', shirt: '#4a4a4a', pants: '#2a2a2a', hat: '#7a2a2a', style: 'short' },
        lines: [
          { en: 'The Grump\'s helpers scattered my crates of shot all over town! Round shot smashes hulls. Grapeshot is small balls aimed at the crew.' }
        ]
      },
      q: { en: 'Pirate ships escape before we can catch them. Bring me the shot that wrecks sails and rigging, and the cannon is yours.' },
      choices: [
        { ok: true, at: [9, 18], icon: '⛓️', t: { en: 'A crate of chain shot' },
          why: { en: 'Right. Chain shot, two balls on a chain, tears sails and rigging, so the enemy ship cannot sail away.' } },
        { at: [26, 2], icon: '⚫', t: { en: 'A crate of iron round shot' },
          why: { en: 'Round shot of iron damages the hull. To stop a ship sailing away, you need to wreck its sails.' } },
        { at: [12, 9], icon: '🍇', t: { en: 'A crate of grapeshot' },
          why: { en: 'Grapeshot is small metal balls aimed at the sailors, not the sails. Look for shot built to tear rigging.' } }
      ],
      item: { icon: '💣', name: { en: 'A ship\'s cannon' } }
    }
  },
  challenge: {
    at: [11, 10], type: 'survey', stat: 'mov',
    // one post per tool: the compass by the compass maker's shop, the astrolabe by the cathedral,
    // the kamal on the harbor front, the carrack at the shipyard
    spots: [[2, 8], [7, 2], [24, 12], [13, 14]],
    title: { en: 'Where did the tools come from?' },
    intro: { en: 'The Grump erased where Lisbon\'s sea tools came from! Read the 4 posts in town. Then answer at the time stone.' },
    table: {
      head: [{ en: 'Tool' }, { en: 'Where it came from' }, { en: 'What it did' }],
      rows: [
        [{ en: 'Magnetic compass' }, { en: 'China, through trade with Asia' }, { en: 'A needle points north, showing direction' }],
        [{ en: 'Astrolabe' }, { en: 'The Roman Empire; still used in the 1700s' }, { en: 'Measured latitude, the time, stars and planets' }],
        [{ en: 'Kamal' }, { en: 'Arab sailors' }, { en: 'Found latitude by the North Star' }],
        [{ en: 'Carrack' }, { en: 'Mediterranean and Northern European ship styles' }, { en: 'A big cargo ship, up to 2,000 tons' }]
      ],
      note: { en: 'From "Technology in the Age of Exploration," World History Project. In 1489 the Arab navigator Ahmad ibn Majid wrote a book on the science of navigation.' }
    },
    questions: [
      { q: { en: 'Which tool on the posts came to Europe from East Asia?' },
        choices: [{ en: 'The compass' }, { en: 'The astrolabe' }, { en: 'The kamal' }, { en: 'The carrack' }], answer: 0,
        why: { en: 'Early magnetic compasses came from China and reached Europe through trade with Asia.' } },
      { q: { en: 'Which two tools on the posts were used to find latitude?' },
        choices: [{ en: 'The kamal and the astrolabe' }, { en: 'The compass and the carrack' }, { en: 'The carrack and the kamal' }, { en: 'The compass and the astrolabe' }], answer: 0,
        why: { en: 'Both measured the height of a star above the horizon, which gives latitude. The compass shows direction.' } },
      { q: { en: 'Which claim do the 4 posts best support?' },
        choices: [{ en: 'Europe\'s tools drew on many regions\' ideas' }, { en: 'Portugal invented every single tool its sailors used' }, { en: 'Each tool was used for only a few years' }, { en: 'Sea tools reached Europe from the Americas' }], answer: 0,
        why: { en: 'China, Arab sailors, Rome and two shipbuilding traditions: innovations from many places came together in Europe.' } },
      { q: { en: 'Polynesian people had crossed the vast Pacific for centuries with their own technology. What does this show?' },
        choices: [{ en: 'Others mastered ocean travel before Europe' }, { en: 'Polynesians used the European carrack' }, { en: 'Ocean travel began in Lisbon in the 1400s' }, { en: 'Only Europe had ships before 1450' }], answer: 0,
        why: { en: 'These were not the first ocean technologies. Polynesians sailed the Pacific long before, and the best ships of 1491 may have sailed the Indian Ocean trade.' } }
    ],
    success: { en: 'The posts are clear again! Tools from China, the Arab world, Rome and many coasts came together in Lisbon, and voyages quickly grew more common.' }
  },
  boss: {
    at: [29, 13], stat: 'hei', need: 3,
    name: { en: 'The Fog Grump' },
    appear: { en: 'The Fog Grump is hiding by the harbor!' },
    taunt: { en: 'Compass, kamal, astrolabe... I will fog every star so no ship finds its way!' },
    win: { en: 'The fog lifts off the river. The page on sea technology floats down into your hands!' },
    questions: [
      {
        stim: { text: { en: 'The tools that these traders and explorers used were based on innovations that developed in many parts of Afro-Eurasia and were brought together in Europe during this period.' }, src: { en: 'Adapted from "Technology in the Age of Exploration," World History Project' } },
        q: { en: 'The excerpt best supports which claim about European sea voyages after 1450?' },
        choices: [{ en: 'They drew on navigation knowledge from many cultures' }, { en: 'Europeans built their navigation alone and taught it to Arab pilots' }, { en: 'Overland routes like the Silk Road beat sea routes' }, { en: 'Their main tools reached Europe from the Americas' }],
        answer: 0,
        why: { en: 'The compass came from China, the kamal from Arab sailors and the astrolabe from Roman times. Europe brought them together.' }
      },
      {
        stim: { text: { en: '"If a man wishes to do anything [by methods] not connected with the [science] of navigation, then he can do so, but whenever he lacks the directions of towns and islands... then he must find them by means of our science."' }, src: { en: 'Ahmad ibn Majid, Arab navigator, The Book of the Benefits of the Principles and Foundations of Navigation, 1489' } },
        q: { en: 'The excerpt most directly reflects which development of the period?' },
        choices: [{ en: 'Arab sea science feeding the knowledge later explorers used' }, { en: 'European pilots training Arab sailors in the science of navigation' }, { en: 'Ottoman sultans closing the sea routes to Asia' }, { en: 'Polynesian voyagers bringing Pacific methods to Arabia' }],
        answer: 0,
        why: { en: 'Ibn Majid writes as an expert in "our science" of navigation. Arab knowledge like his, and tools like the kamal, became part of what European and Asian explorers used.' }
      },
      {
        stim: { text: { en: 'The best-armed ships of the day had cannon that could fire several kinds of shot. One of the reasons the English developed such a powerful navy was their superior ship cannon.' }, src: { en: 'Adapted from "Technology in the Age of Exploration," World History Project' } },
        q: { en: 'Which of the following best explains why traders armed their ships in this period?' },
        choices: [{ en: 'Long voyages were dangerous, and guns gave traders an edge' }, { en: 'Cannon fire replaced sails as the main way ships moved forward' }, { en: 'Ottoman law required every European merchant ship to carry cannon' }, { en: 'Chain shot was the best way to smash through an enemy ship\'s hull' }],
        answer: 0,
        why: { en: 'Long-distance trade was dangerous. Armed ships could defend cargo, make ports and ships give traders what they wanted, or turn pirate. (Round shot smashed hulls; chain shot wrecked sails.)' }
      },
      {
        stim: { title: { en: 'Three tools for finding latitude' }, rows: [[{ en: 'Tool' }, { en: 'What the reading says about it' }], [{ en: 'Kamal' }, { en: 'Made by Arab sailors; sight the North Star' }], [{ en: 'Cross staff' }, { en: 'Inspired by the kamal; navigators stared at the sun' }], [{ en: 'Back staff (Davis Quadrant)' }, { en: '1600s, Captain John Davis; uses the sun\'s shadow' }]], src: { en: 'From "Technology in the Age of Exploration," World History Project' } },
        q: { en: 'Which of the following best describes the pattern shown in the table?' },
        choices: [{ en: 'Later tools adapted earlier designs and fixed their flaws' }, { en: 'Each tool came separately from Chinese inventors' }, { en: 'Sailors stopped using the stars to find latitude' }, { en: 'Prince Henry the Navigator designed all three of these tools' }],
        answer: 0,
        why: { en: 'The cross staff was inspired by the Arab kamal, and the back staff used a shadow so navigators no longer had to stare at the sun.' }
      },
      {
        stim: { text: { en: 'In the fifteenth century, the mighty Ottoman sultans dominated trade between Europe and other regions, both in Africa and in Asia. So some Europeans put together a range of new technologies that they learned from being part of this vast trading system.' }, src: { en: 'Adapted from "Unit 4 Introduction: Transoceanic Interconnections 1450 to 1750," World History Project' } },
        q: { en: 'The passage best supports which claim about the causes of European sea voyages?' },
        choices: [{ en: 'Others\' control of trade routes pushed Europeans to the sea' }, { en: 'Europe\'s states were larger and richer than the Eurasian empires' }, { en: 'Europeans sailed mainly to carry the compass to China' }, { en: 'Trade by land between Europe and Asia had stopped' }],
        answer: 0,
        why: { en: 'With the Ottomans dominating trade to Africa and Asia, Europeans used banking, checks, gunpowder and better sails to trade by sea.' }
      },
      {
        stim: { title: { en: 'Two ships of the age of exploration' }, rows: [[{ en: 'Ship' }, { en: 'Sails' }, { en: 'Known for' }], [{ en: 'Caravel' }, { en: 'Square at sea, lateen near shore' }, { en: 'Speed, from a rounded bottom' }], [{ en: 'Carrack' }, { en: 'Lateen and square, 2 to 4 masts' }, { en: 'Size, up to 2,000 tons' }]], src: { en: 'From "Technology in the Age of Exploration," World History Project' } },
        q: { en: 'Compared with the caravel, the carrack is best described as...' },
        choices: [{ en: 'a big ship mixing two regions\' styles' }, { en: 'a fast ship whose rounded bottom drew pirates' }, { en: 'a Portuguese ship with only lateen sails' }, { en: 'a Chinese design that reached Europe by trade' }],
        answer: 0,
        why: { en: 'Caravels were fast. Carracks, a mash-up of Mediterranean and Northern European styles, could reach 2,000 tons.' }
      },
      {
        q: { en: 'Which of the following was a continuity in navigation from the Roman Empire to the 1700s?' },
        choices: [{ en: 'Using the astrolabe for latitude, time and stars' }, { en: 'Sailing caravels with square and lateen sails' }, { en: 'Steering by magnetic compasses made in China' }, { en: 'Finding latitude with the Davis back staff' }],
        answer: 0,
        why: { en: 'The astrolabe began in the Roman Empire and stayed important through the 1700s. Caravels came with Prince Henry, the back staff in the 1600s, and the compass reached Europe through trade with Asia.' }
      },
      {
        stim: { text: { en: 'Of course, they weren\'t the first oceanic technologies. Polynesian people had for centuries used their own technology to travel the vast Pacific Ocean, and trade along continental coasts was common.' }, src: { en: 'Adapted from "Technology in the Age of Exploration," World History Project' } },
        q: { en: 'The passage would best be used to challenge which claim?' },
        choices: [{ en: 'Ocean travel began with European voyages after 1450' }, { en: 'Tools from many regions came together in Europe' }, { en: 'Long-distance trade by sea was dangerous for merchants' }, { en: 'New tools increased the number of voyages' }],
        answer: 0,
        why: { en: 'Polynesians had crossed the Pacific for centuries. The other claims are all true, and the passage does not argue against them.' }
      }
    ]
  },
  learned: [
    { en: 'Sea tools came from across [[afro-eurasia|Afro-Eurasia]]: the [[magnetic compass|compass]] from China, the [[kamal|kamal]] from Arab sailors, the [[astrolabe|astrolabe]] from Roman times.' },
    { en: 'Pilots found [[latitude|latitude]] from the height of the North Star or the sun; [[caravel|caravels]] and [[carrack|carracks]] used square and [[lateen sail|lateen sails]].' },
    { en: 'Ottoman control of trade pushed Europeans to sea; armed ships and new tools made long voyages more common.' }
  ],
  reflect: {
    q: { en: 'AP practice: Explain one way cross-cultural interactions made European ocean voyages possible from 1450 to 1750.' },
    starter: { en: 'One way cross-cultural interactions helped was' }
  }
};
