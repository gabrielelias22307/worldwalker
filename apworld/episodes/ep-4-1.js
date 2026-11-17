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
    { en: 'Talk to the 4 people here, help a shipowner arm her caravel, then wake the time stone.' }
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
        { en: 'I fix a magnetic needle to a card in a wooden box. This [[magnetic compass|compass]] always points north.' },
        { en: 'Early compasses came from China. They reached Europe through trade with Asia.' },
        { en: 'Arab sailors made the [[kamal|kamal]]: wood on a knotted rope. Hold it to the North Star to check your [[latitude|latitude]].' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'What does the compass\'s journey to Lisbon show?' },
        choices: [
          { ok: true, t: { en: 'Ideas traveled along Afro-Eurasian routes' }, why: { en: 'Yes. A Chinese invention reached Europe through trade with Asia, and Arab sailors shared the kamal.' } },
          { t: { en: 'Portugal invented all of its own sea tools' }, why: { en: 'No. The compass came from China and the kamal from Arab sailors. Europe gathered tools from many places.' } },
          { t: { en: 'Compasses reached Europe from the Americas' }, why: { en: 'No. In this period Europeans did not yet know the Americas existed. The compass came from China.' } }
        ]
      }
    },
    {
      x: 25, y: 8, name: { en: 'Leonor' }, role: { en: 'Merchant' },
      look: { skin: 1, hair: '#4a2a1a', shirt: '#7a2a4a', robe: true, style: 'bun' },
      lines: [
        { en: 'The mighty Ottoman sultans dominate the trade between Europe and the lands of Africa and Asia.' },
        { en: 'Our small states cannot match the size of those great Eurasian empires. But we can still trade with them, by sea!' },
        { en: 'So we gather tools learned from that vast trading system: [[banking|banking]] and checks, gunpowder and better sails.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why are some Europeans setting out to trade by sea?' },
        choices: [
          { ok: true, t: { en: 'The Ottomans dominated the trade routes' }, why: { en: 'Yes. With the Ottomans controlling trade to Africa and Asia, Europeans looked for a sea route of their own.' } },
          { t: { en: 'Europe\'s states were the biggest on Earth' }, why: { en: 'No. Europe\'s rulers could not compete with the size and wealth of the great Eurasian states.' } },
          { t: { en: 'Land trade with Asia had ended for good' }, why: { en: 'No. Trade by land went on. The problem was that the Ottomans dominated it.' } }
        ]
      }
    },
    {
      x: 11, y: 15, name: { en: 'Gonçalo' }, role: { en: 'Shipwright' },
      look: { skin: 1, hair: '#6e6e6e', shirt: '#8a5a2a', pants: '#3a3a2a', hat: '#5a3a1a', style: 'short' },
      lines: [
        { en: 'We build [[caravel|caravels]] here for long-distance trade. Prince Henry the Navigator had them developed.' },
        { en: 'Square sails catch the wind on the open sea. Near shore we switch to triangular [[lateen sail|lateen sails]].' },
        { en: 'The big [[carrack|carrack]] mixes Mediterranean and Northern European ship styles. It has a forecastle in front and an aftcastle behind.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'What does the carrack\'s design show?' },
        choices: [
          { ok: true, t: { en: 'It mixed two regions\' ship styles' }, why: { en: 'Yes. The carrack was a mash-up of Mediterranean and Northern European styles of ships.' } },
          { t: { en: 'It copied one Portuguese fishing boat' }, why: { en: 'No. Its design joined two different traditions, Mediterranean and Northern European.' } },
          { t: { en: 'It moved by oars alone, with no sails' }, why: { en: 'No. A carrack had two to four masts with lateen and square sails.' } }
        ]
      }
    },
    {
      x: 27, y: 17, name: { en: 'Lopo' }, role: { en: 'Ship\'s pilot' },
      look: { skin: 3, hair: '#1b1410', shirt: '#2a4a7a', pants: '#2a2a3a', hat: '#2a2a3a', style: 'short' },
      lines: [
        { en: 'Out of sight of land, I steer by the North Star. Its height above the horizon tells me our [[latitude|latitude]].' },
        { en: 'I measure that height with a [[quadrant|quadrant]]. On a clear day it works on the sun, too.' },
        { en: 'An [[astrolabe|astrolabe]] does even more. The idea goes back to the Roman Empire. It finds latitude, the time, even the planets.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why did measuring the North Star matter so much on a long voyage?' },
        choices: [
          { ok: true, t: { en: 'It showed how far north or south it was' }, why: { en: 'Yes. Knowing the latitude let a pilot hold a straight course and find the way home.' } },
          { t: { en: 'It told how fast the ship was moving' }, why: { en: 'No. A star\'s height gives latitude. Speed and direction had to be recorded separately.' } },
          { t: { en: 'It showed the safest harbor for the night' }, why: { en: 'No. The star\'s height above the horizon shows only how far north or south the ship is.' } }
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
        choices: [{ en: 'They drew on many cultures\' knowledge' }, { en: 'They used only tools invented in Portugal' }, { en: 'They began because Europe had no trade' }, { en: 'They depended on tools from the Americas' }],
        answer: 0,
        why: { en: 'The compass came from China, the kamal from Arab sailors and the astrolabe from Roman times. Europe brought them together.' }
      },
      {
        stim: { title: { en: 'Where three navigation tools came from' }, rows: [[{ en: 'Tool' }, { en: 'Origin' }], [{ en: 'Magnetic compass' }, { en: 'China' }], [{ en: 'Kamal' }, { en: 'Arab sailors' }], [{ en: 'Astrolabe' }, { en: 'Roman Empire' }]], src: { en: 'From "Technology in the Age of Exploration," World History Project' } },
        q: { en: 'Which best explains how the first tool in the table reached Lisbon?' },
        choices: [{ en: 'Trade with Asia carried it west to Europe' }, { en: 'Portuguese sailors invented it far at sea' }, { en: 'Roman engineers left it behind in Lisbon' }, { en: 'Polynesian sailors brought it from the Pacific' }],
        answer: 0,
        why: { en: 'Early compasses came from China and were brought to Europe through trade with Asia.' }
      },
      {
        stim: { text: { en: '"If a man wishes to do anything [by methods] not connected with the [science] of navigation, then he can do so, but whenever he lacks the directions of towns and islands... then he must find them by means of our science."' }, src: { en: 'Ahmad ibn Majid, Arab navigator, The Book of the Benefits of the Principles and Foundations of Navigation, 1489' } },
        q: { en: 'The excerpt best reflects which development?' },
        choices: [{ en: 'Arab navigators built a science of finding the way' }, { en: 'European explorers taught navigation to Arab pilots' }, { en: 'Sailors refused to use any tools to find their way' }, { en: 'Overland caravans replaced all trade by sea' }],
        answer: 0,
        why: { en: 'Ibn Majid writes as an expert navigator. Arab sailors, who made the kamal, built knowledge that sailors from many lands used.' }
      },
      {
        stim: { text: { en: 'Chain shot, two smaller balls attached by a chain, could destroy sails and rigging, making it impossible for ships to maneuver away.' }, src: { en: 'Adapted from "Technology in the Age of Exploration," World History Project' } },
        q: { en: 'Ship cannon like this mattered to traders mainly because...' },
        choices: [{ en: 'long-distance trade was dangerous' }, { en: 'cannon made ships sail faster' }, { en: 'cannon replaced the need for sails' }, { en: 'pirates had all left the seas' }],
        answer: 0,
        why: { en: 'Long-distance trade was dangerous. Armed ships could defend cargo, force ports and ships to give way, or turn pirate.' }
      },
      {
        q: { en: 'Which best explains why some Europeans began to trade by sea in the 1400s?' },
        choices: [{ en: 'Ottomans dominated trade with Africa and Asia' }, { en: 'Europe\'s states were larger than Eurasia\'s empires' }, { en: 'China had closed every road to the west' }, { en: 'Europeans had just discovered the magnetic compass' }],
        answer: 0,
        why: { en: 'With the Ottomans dominating trade between Europe and other regions, Europeans used new tools to trade by sea.' }
      },
      {
        stim: { title: { en: 'Two ships of the age of exploration' }, rows: [[{ en: 'Ship' }, { en: 'Sails' }, { en: 'Known for' }], [{ en: 'Caravel' }, { en: 'Square at sea, lateen near shore' }, { en: 'Speed, from a rounded bottom' }], [{ en: 'Carrack' }, { en: 'Lateen and square, 2 to 4 masts' }, { en: 'Size, up to 2,000 tons' }]], src: { en: 'From "Technology in the Age of Exploration," World History Project' } },
        q: { en: 'Compared with the caravel, the carrack was best known for...' },
        choices: [{ en: 'its great size and cargo room' }, { en: 'speed that made pirates love it' }, { en: 'sailing with no sails at all' }, { en: 'being built only in China' }],
        answer: 0,
        why: { en: 'Caravels were fast. Carracks, mixing Mediterranean and Northern European styles, were large ships of up to 2,000 tons.' }
      },
      {
        q: { en: 'The astrolabe began in the Roman Empire and was still important in the 1700s. This best shows...' },
        choices: [{ en: 'continuity across many centuries' }, { en: 'change: the tool was invented in the 1700s' }, { en: 'that Rome ruled Portugal in the 1400s' }, { en: 'that sailors stopped measuring latitude' }],
        answer: 0,
        why: { en: 'An idea from Roman times kept serving sailors for centuries because it measured latitude, time and the stars.' }
      },
      {
        q: { en: 'Which statement best places European ocean voyages in a wider context?' },
        choices: [{ en: 'Polynesians had long crossed the Pacific' }, { en: 'Europe built the first ships in history' }, { en: 'No one sailed the Indian Ocean before 1450' }, { en: 'The open ocean had never been crossed' }],
        answer: 0,
        why: { en: 'Polynesian people had used their own technology to travel the vast Pacific for centuries, and coastal trade was common.' }
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
