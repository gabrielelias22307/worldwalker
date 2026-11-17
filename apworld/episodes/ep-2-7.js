/* HISTORYWALKER · Episode 2.7 · Comparison of Economic Exchange (AP World Topic 2.7, c. 1200–1450)
   Malacca, the Sultanate of Malacca, in 1450: a port where the goods and travelers of the Silk Roads, the Indian Ocean
   and the trans-Saharan routes meet. The student compares the three networks.
   Content source: Khan Academy, AP World History (World History Project), Unit 2 "Networks of Exchange":
   2.7 "Unit 2 LEQ", "Unit 2 DBQ" (Clavijo, Document 3), "Writing: Thesis and Contextualization Part 1";
   unit overview "Unit 2 Introduction: Networks of Exchange 1200 to 1450" (Trevor Getz), "Unit 2 Overview: Networks of
   Exchange", "Vocabulary Match-Up"; 2.1 "Archipelago of Trade" (Alejandro Quintana); 2.3 "Indian Ocean Trade Routes"
   (Bennett Sherry); 2.4 "Across an Ocean of Sand: Trans-Saharan Trade Routes" (Bennett Sherry), "Comparison: Networks
   of Exchange". World History Project content is CC BY-NC 4.0. Facts here come from those readings. English only, AP level. */
window.EPISODE = {
  id: '2.7',
  realm: 2,
  sol: 'AP 2.7',
  style: 'swahili',
  weather: { sky: 'heat', time: 'day' },
  title: { en: 'Comparison of Economic Exchange' },
  place: { en: 'Malacca, Sultanate of Malacca, 1450' },
  intro: [
    { en: 'The Grump tangled the page on trade. In Malacca, people are mixing up the Silk Roads, the Indian Ocean and the [[trans-saharan|trans-Saharan]] routes!' },
    { en: 'Talk to the 4 travelers here, help a Gujarati merchant load his ship, then wake the time stone.' }
  ],
  scenes: {
    at: [102.25, 2.2],
    year: 1450,
    start: [
      { en: 'Malacca sits on the strait that was the fastest sea route between China and the Indian Ocean.' },
      { en: 'It had been a quiet fishing village until Chinese treasure fleets used it as a stopping place.' },
      { en: 'By 1450, Muslim, Hindu and Buddhist merchants traded here side by side.' }
    ],
    guess: {
      q: { en: 'Ships in Malacca could not sail whenever they liked. What decided when they sailed?' },
      choices: [{ t: { en: '🌬️ Monsoon winds' }, ok: true }, { t: { en: '🐪 Camel caravans' } }],
      why: { en: 'The monsoon winds change direction twice a year, so merchants planned their voyages around them.' }
    },
    page: { en: 'Malacca\'s ruler Parameswara became Muslim around 1400 and took the name Iskandar Shah.' },
    next: {
      q: { en: 'Next: Empires Expand. Did gunpowder weapons help land empires grow after 1450?' },
      choices: [{ t: { en: 'Yes, they did' }, ok: true }, { t: { en: 'No, not at all' } }],
      why: { en: 'The Ottomans, for example, mastered gunpowder, and their armies became some of the strongest of the time. You go there next.' }
    }
  },
  start: [10, 7],
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT',
    'T===~kss..RRRR........QQQQ....TT',
    'T===~kss..hhdh........hdhh...p.T',
    'T===~kss.x.........,...........T',
    'T===~ksslllllllllllllllllllllllT',
    'T===~kssl.......l...........l..T',
    'T===~kssl..p....l.mlmlmlm...l..T',
    'T===~kssl.......l.lllll.....l..T',
    'T===~~ssl...T...lx..........l.,T',
    'T===~~sslllllllllllllllllllllllT',
    'T===~~~~~~~B~~~~~~~~~B~~~~~~~~~T',
    'T===~~~~~~~B~~~~~~~~~B~~~~~~~~~T',
    'T===~~sslllllllllllllllllllllllT',
    'T===~kss..xl.........l.DDDDDDp.T',
    'T===~kss...l.RRR.....l.DDDDDD..T',
    'T===~kss...l.hdh.....l.DDdDDD..T',
    'T===~kss...l...,.....lllllllll.T',
    'T===~kss,..l.....T...lx........T',
    'T===~kss...lllllllllll....RRR..T',
    'T===~kss.p.............Y..hhd..T',
    'T===~kss......p...............pT',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT'
  ],
  words: {
    'network of exchange': { en: 'a system of connected routes, people and places used for trade and travel' },
    'silk roads': { en: 'the overland routes across Eurasia, named for Chinese silk, one of the most important goods carried on them' },
    'trans-saharan': { en: 'across the Sahara Desert, linking West Africa to North Africa and the Mediterranean' },
    'monsoon': { en: 'a seasonal wind in the Indian Ocean that changes direction twice a year' },
    'maritime': { en: 'related to the sea, shipping or ocean trade' },
    'caravan': { en: 'a group of traders traveling together, often across deserts or long land routes' },
    'caravanserai': { en: 'a roadside stop where caravans could rest, water their animals and stay safe' },
    'pax mongolica': { en: 'the "Mongol peace": the stability of Mongol rule that made travel across Central Asia safer' },
    'pastoralist': { en: 'a person who lives by herding animals rather than farming' },
    'diaspora': { en: 'a people of one homeland or faith scattered in many places, like Gujarati merchants in many ports' },
    'tribute': { en: 'gifts or payments a ruler gives to a stronger state to show respect' },
    'zheng he': { en: 'a Muslim Chinese admiral of the Ming dynasty who led seven treasure fleets from 1405 to 1433' },
    'black death': { en: 'the bubonic plague that spread along trade routes from the 1330s and killed millions in Afro-Eurasia' }
  },
  npcs: [
    {
      x: 6, y: 6, name: { en: 'Awang' }, role: { en: 'Malay sailor' },
      look: { skin: 4, hair: '#120c08', shirt: '#2a7a8a', pants: '#e0d2b0', hat: '#c9a24a', style: 'short' },
      lines: [
        { en: 'Twice a year the [[monsoon|monsoon]] winds turn around. We sail out with one wind and come home with the other.' },
        { en: 'Arab merchants wrote travel guides that list the best week, even the best day, to leave each port.' },
        { en: 'Arab sailors improved the astrolabe and the kamal. Chinese sailors improved the compass. Our ships grow bigger and carry more.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why did the monsoon winds help the [[maritime|maritime]] trade of the Indian Ocean grow?' },
        choices: [
          { ok: true, t: { en: 'They changed on schedule, so trips could be planned' }, why: { en: 'Yes. The winds turned at the same time every year, so merchants knew when to leave and when they would arrive.' } },
          { t: { en: 'They blew one way all year, so ships never turned back' }, why: { en: 'No. The monsoon changes direction twice a year. That is what made round trips possible.' } },
          { t: { en: 'Their storms kept pirates and rival empires away' }, why: { en: 'No. Pirates and rival empires were real. The winds helped because they were predictable.' } }
        ]
      }
    },
    {
      x: 26, y: 5, name: { en: 'Old Lin' }, role: { en: 'Fujianese merchant' },
      look: { skin: 1, hair: '#8a8a8a', shirt: '#7a2a2a', robe: true, style: 'bun' },
      lines: [
        { en: 'When I was young, Malacca was a quiet fishing village. Then Admiral [[zheng he|Zheng He]]\'s huge treasure fleets stopped here.' },
        { en: 'He sailed seven times, from 1405 to 1433, to show China\'s might and collect [[tribute|tribute]]. He did not come to conquer.' },
        { en: 'The [[black death|Black Death]] and the fall of the Mongol Empire made land roads risky. Sea trade recovered quickly, so merchants came to the sea.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'How did long-distance trade change after the mid-1300s?' },
        choices: [
          { ok: true, t: { en: 'More merchants left the land roads for sea routes' }, why: { en: 'Right. Sea routes recovered quickly from the Black Death, and the Mongol collapse made land roads risky again.' } },
          { t: { en: 'Merchants gave up trading over long distances for good' }, why: { en: 'No. Trade fell for a time, but sea networks recovered quickly and kept growing.' } },
          { t: { en: 'China conquered the ocean\'s ports by force' }, why: { en: 'No. Zheng He\'s voyages were diplomatic. He collected tribute, and no state tried to dominate the ocean.' } }
        ]
      }
    },
    {
      x: 9, y: 16, name: { en: 'Idris' }, role: { en: 'Merchant from Sijilmasa' },
      look: { skin: 3, hair: '#2a1a10', shirt: '#e8dcc0', pants: '#5a4a3a', robe: true, hat: '#2a4a8a', style: 'short' },
      lines: [
        { en: 'I come from Sijilmasa, a desert port in Morocco. The Sahara is our sea. Its edge is the Sahel, Arabic for "shores."' },
        { en: 'Our ships are camels. [[pastoralist|Berber herders]] guide [[caravan|caravans]] of thousands of camels from well to oasis, in the cool months.' },
        { en: 'Salt from desert mines buys West African gold. Enslaved people were forced across the desert too. Islam spread with merchants, and Arabic contracts built trust.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Compared with Indian Ocean ships, what carried goods across the Sahara?' },
        choices: [
          { ok: true, t: { en: 'Camel caravans led by Berber guides' }, why: { en: 'Yes. Camels can go up to ten days without water, and Berber guides led caravans from well to oasis.' } },
          { t: { en: 'River boats sailing on the monsoon' }, why: { en: 'No. The monsoon blows over the Indian Ocean. The Sahara was crossed over land.' } },
          { t: { en: 'Relay horses from Timur\'s post stations' }, why: { en: 'No. Timur\'s relay horses served the Silk Roads in Central Asia. Camels suit the desert far better than horses.' } }
        ]
      }
    },
    {
      x: 18, y: 15, name: { en: 'Farrukh' }, role: { en: 'Merchant from Samarkand' },
      look: { skin: 2, hair: '#3a2416', shirt: '#4a6a3a', pants: '#3a2a20', robe: true, hat: '#d9c38a', style: 'short' },
      lines: [
        { en: 'I come from Samarkand, famous for its glass, on the [[silk roads|Silk Roads]]. Caravans carry Chinese silk west over land.' },
        { en: 'Under Mongol rule those roads were safe. Some call it the [[pax mongolica|Pax Mongolica]]. Goods, people and ideas moved across Eurasia.' },
        { en: 'Timur kept post horses and [[caravanserai|caravanserais]] all the way to Samarkand. A Spanish envoy, Clavijo, described them for his rulers back home.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'What helped trade on the Silk Roads grow?' },
        choices: [
          { ok: true, t: { en: 'Rulers who kept the roads safe and built stops' }, why: { en: 'Yes. Mongol rule, and later Timur\'s post horses and caravanserais, made long trips over land safer.' } },
          { t: { en: 'Monsoon winds that pushed the caravans across Asia' }, why: { en: 'No. Monsoon winds drive ships on the Indian Ocean, not caravans over land.' } },
          { t: { en: 'The Black Death, which emptied the roads' }, why: { en: 'No. The Black Death nearly wiped out Silk Road trade beginning in the 1340s.' } }
        ]
      }
    }
  ],
  houses: [
    { at: [12, 2], name: { en: 'Ravi\'s cousin Meera' }, look: { skin: 4, hair: '#120c08', shirt: '#d9542b', style: 'bun' },
      lines: [{ en: 'Our Gujarati family has houses in many ports.' }, { en: 'We trust each other\'s letters, so we can trade across a whole ocean.' }] },
    { at: [23, 2], name: { en: 'Lin\'s grandson' }, look: { skin: 1, hair: '#1b1410', shirt: '#2a5a8a', style: 'short' },
      lines: [{ en: 'Our Fujianese network links Quanzhou in China with Malacca.' }, { en: 'Silk and porcelain from China sell for high prices here.' }] },
    { at: [14, 15], name: { en: 'Storekeeper Hamzah' }, look: { skin: 3, hair: '#2b1d14', shirt: '#8a6a3a', style: 'short' },
      lines: [{ en: 'Cargo waits in my storehouse until the right wind comes.' }, { en: 'Pepper, cloves, silk, ivory: goods from half the world pass through here.' }] },
    { at: [25, 15], name: { en: 'Imam Yahya' }, look: { skin: 3, hair: '#5a5a5a', shirt: '#f2f2f2', robe: true, hat: '#f2f2f2', style: 'short' },
      lines: [{ en: 'Merchants from many lands pray here side by side.' }, { en: 'Arabic is the language of our faith, and of trade on this ocean.' }] },
    { at: [28, 19], name: { en: 'Captain Bakari' }, look: { skin: 5, hair: '#120c08', shirt: '#e8c060', pants: '#f2f2f2', hat: '#f2f2f2', style: 'short' },
      lines: [{ en: 'I sailed from Zanzibar, the main link from East Africa.' }, { en: 'Gold and ivory come from deep inside Africa. Enslaved people were traded there too.' }] }
  ],
  signs: [
    { x: 9, y: 3, text: { en: 'MALACCA · A sultanate on the fastest sea route between China and the Indian Ocean.' } },
    { x: 17, y: 8, text: { en: 'SPICE MARKET · Cloves, nutmeg and mace. Prices rise with every port a spice passes.' } },
    { x: 10, y: 13, text: { en: 'SOUTH DOCKS · Ships wait here for the monsoon wind to turn.' } },
    { x: 22, y: 17, text: { en: 'MOSQUE · Muslim merchants from Arabia to China pray here.' } }
  ],
  finds: [
    { clueAt: [27, 3], at: [29, 5], decor: 'vase', clue: { en: 'From this note, walk 2 steps east and 2 steps south. Look east of the Chinese house.' },
      text: { en: 'A piece of blue-and-white porcelain! Chinese porcelain was in high demand all around the ocean.' } }
  ],
  scraps: [[29, 1], [6, 20], [30, 17]],
  smudges: [[13, 7], [25, 19]],
  quest: {
    stat: 'hei',
    title: { en: 'Cargo for the Monsoon' },
    giver: {
      x: 14, y: 6, name: { en: 'Ravi' }, role: { en: 'Gujarati merchant' },
      look: { skin: 4, hair: '#1b1410', shirt: '#e8c060', pants: '#f2f2f2', robe: true, hat: '#c0392b', style: 'short' },
      lines: [
        { en: 'I am Ravi. Gujarati, Armenian, Jewish and Fujianese merchants form [[diaspora|diaspora]] networks. Sharing a home and faith helps us trust each other.' },
        { en: 'My ship leaves when the monsoon turns. I need a cargo grown here in Southeast Asia. Ask Aminah at the spice market, east of here.' }
      ],
      wait: { en: 'Aminah sells spices at the market stalls, east along the north street.' },
      thanks: { en: 'Cloves! Their price will rise at every port they pass on the way west. Thank you!' }
    },
    contact: {
      x: 20, y: 8, name: { en: 'Aminah' }, role: { en: 'Spice seller' },
      look: { skin: 3, hair: '#120c08', shirt: '#8e3b6a', pants: '#2a4a3a', style: 'long' },
      lines: [
        { en: 'Our ruler Parameswara became Muslim around 1400. Muslims pay lower taxes in Muslim states, so many merchants here convert.' },
        { en: 'Arabic is our trade language, and Islamic courts enforce contracts. Sri weighs cargo at the south docks: cross the west bridge, then go west to the water.' }
      ]
    },
    action: {
      type: 'trade',
      trader: {
        x: 7, y: 15, name: { en: 'Sri' }, role: { en: 'Harbor weigher' },
        look: { skin: 5, hair: '#2b1d14', shirt: '#2a8a6a', pants: '#e0d2b0', style: 'bun' },
        lines: [
          { en: 'Muslim, Hindu and Buddhist merchants all trade here. None of them tries to rule the sea. They are more interested in trade.' }
        ]
      },
      q: { en: 'Ravi wants a cargo grown in Southeast Asia, not one carried here from far away. Find it in the town and bring it to me.' },
      choices: [
        { ok: true, at: [29, 20], icon: '🌿', t: { en: 'A sack of cloves' },
          why: { en: 'Yes! Cloves, nutmeg and mace are Southeast Asian spices, in high demand far from where they grow.' } },
        { at: [30, 3], icon: '🏺', t: { en: 'A Chinese porcelain jar' },
          why: { en: 'Porcelain was made in China and came here by ship. It was not grown in Southeast Asia.' } },
        { at: [7, 1], icon: '🐘', t: { en: 'A tusk of East African ivory' },
          why: { en: 'Ivory came from East Africa, through ports like Zanzibar. Ravi wants a cargo from here.' } }
      ],
      item: { icon: '🌿', name: { en: 'A sack of cloves' } }
    }
  },
  challenge: {
    at: [16, 16], type: 'carry', stat: 'hei',
    title: { en: 'Sort the three networks' },
    intro: { en: 'The Grump mixed up the [[network of exchange|networks of exchange]]. Carry each card to its network, or to "All three" if it is a similarity.' },
    zones: [
      { bin: 'silk', x: 16, y: 13, w: 3, h: 2 },
      { bin: 'ocean', x: 12, y: 16, w: 3, h: 2 },
      { bin: 'sahara', x: 11, y: 19, w: 3, h: 2 },
      { bin: 'all', x: 17, y: 19, w: 3, h: 2 }
    ],
    bins: [
      { id: 'silk', icon: '🐎', label: { en: 'Silk Roads' }, sub: { en: 'over land across Eurasia' } },
      { id: 'ocean', icon: '⛵', label: { en: 'Indian Ocean' }, sub: { en: 'by sea, on the monsoon' } },
      { id: 'sahara', icon: '🐪', label: { en: 'Trans-Saharan' }, sub: { en: 'across the desert' } },
      { id: 'all', icon: '🤝', label: { en: 'All three' }, sub: { en: 'a similarity' } }
    ],
    items: [
      { bin: 'silk', t: { en: 'Timur keeps post horses and caravanserais all the way to Samarkand.' }, why: { en: 'Relay horses and roadside stops served the overland Silk Roads of Central Asia.' } },
      { bin: 'silk', t: { en: 'Mongol rule makes the roads across Central Asia safe for caravans.' }, why: { en: 'The Pax Mongolica protected the land routes across Eurasia.' } },
      { bin: 'ocean', t: { en: 'Merchants plan voyages around winds that turn twice a year.' }, why: { en: 'The monsoon winds were the engine of Indian Ocean trade.' } },
      { bin: 'ocean', t: { en: 'Zheng He\'s treasure fleets collect tribute but do not conquer.' }, why: { en: 'Zheng He\'s seven voyages (1405–1433) crossed the Indian Ocean on diplomatic missions.' } },
      { bin: 'sahara', t: { en: 'Salt from desert mines is traded for West African gold.' }, why: { en: 'Gold and salt drove trade across the Sahara.' } },
      { bin: 'sahara', t: { en: 'Berber guides lead thousands of camels from oasis to oasis.' }, why: { en: 'The camel was the "ship of the desert," and Berber pastoralists were its captains.' } },
      { bin: 'all', t: { en: 'Merchants carry beliefs and technologies along with their goods.' }, why: { en: 'On every network, ideas and technologies traveled with goods. That is a similarity.' } },
      { bin: 'all', t: { en: 'Luxury goods travel far because they are scarce where they are sold.' }, why: { en: 'Silk, spices and gold were worth carrying across land, sea or sand. That is a similarity.' } }
    ],
    success: { en: 'Every card is home! All three networks spread goods and ideas, but they differed in the goods they traded and how they moved them: horses, ships or camels.' }
  },
  boss: {
    at: [30, 7], stat: 'hei', need: 3,
    name: { en: 'The Knot Grump' },
    appear: { en: 'The Knot Grump is hiding behind the Chinese quarter!' },
    taunt: { en: 'Silk, spice, salt... it is all the same to me! I will tie every route into one big knot!' },
    win: { en: 'The knot comes loose over the strait. The page on trade networks floats down into your hands!' },
    questions: [
      {
        stim: { text: { en: '"All along this route Timur causes horses to be kept stationed ready for use at post-stages... further for this service there have been built caravanserais at diverse intervals, where there are stables for the horses."' }, src: { en: 'Ruy Gonzalez de Clavijo, envoy from Spain to the court of Timur at Samarkand (died 1412)' } },
        q: { en: 'The excerpt best illustrates which feature of the Silk Roads?' },
        choices: [{ en: 'A ruler supporting overland travel with stops' }, { en: 'Monsoon winds setting the season for travel' }, { en: 'Camels carrying salt across a great desert' }, { en: 'Merchants escaping every kind of state control' }],
        answer: 0,
        why: { en: 'Timur\'s post horses and caravanserais made long journeys over land faster and safer.' }
      },
      {
        q: { en: 'Clavijo was an envoy sent by Spain to Timur\'s court. His account was most likely written for which audience?' },
        choices: [{ en: 'Rulers and diplomats in Europe' }, { en: 'Timur\'s own government officials' }, { en: 'Herders living in Central Asia' }, { en: 'Merchants on the Indian Ocean' }],
        answer: 0,
        why: { en: 'An envoy reports to the rulers who sent him. He may even have made Timur\'s system sound grand to impress them.' }
      },
      {
        stim: { title: { en: 'A trans-Saharan caravan' }, rows: [[{ en: 'Feature' }, { en: 'About' }], [{ en: 'Travel season' }, { en: 'October to March' }], [{ en: 'Distance per day' }, { en: '20 miles' }], [{ en: 'Days to cross' }, { en: '70' }], [{ en: 'Camels per caravan' }, { en: '5,000–10,000' }]], src: { en: 'From "Across an Ocean of Sand: Trans-Saharan Trade Routes," World History Project' } },
        q: { en: 'The data best support which conclusion about trans-Saharan trade?' },
        choices: [{ en: 'It needed large, well-organized caravans' }, { en: 'It was carried mostly by river boats' }, { en: 'It went on all year, even in the hottest summers' }, { en: 'It moved only tiny amounts of goods' }],
        answer: 0,
        why: { en: 'Thousands of camels on a 70-day trip, timed for the cool months, took careful organization.' }
      },
      {
        stim: { text: { en: 'The monsoon winds allowed merchants to plan voyages and to know when they would arrive at a distant port.' }, src: { en: 'Adapted from "Indian Ocean Trade Routes," World History Project' } },
        q: { en: 'Compared with trans-Saharan caravans, Indian Ocean trade depended most on...' },
        choices: [{ en: 'seasonal winds that changed direction' }, { en: 'camels that could go ten days without water' }, { en: 'relay horses kept at post stations' }, { en: 'Berber guides who knew the oases' }],
        answer: 0,
        why: { en: 'Ships rode the monsoon, which turned twice a year. Camels and Berber guides belonged to the Sahara.' }
      },
      {
        stim: { text: { en: 'Develop an argument that analyzes the similarities and differences between various networks of exchange from c. 1200 to 1450 CE.' }, src: { en: 'Unit 2 long essay prompt, World History Project' } },
        q: { en: 'Which thesis best responds to this prompt?' },
        choices: [{ en: 'All spread goods and ideas but differed in goods and transport' }, { en: 'The Silk Roads were the only network that carried luxury goods' }, { en: 'Every network of exchange collapsed for good after the Black Death' }, { en: 'Merchants on every network traded only inside their own empire' }],
        answer: 0,
        why: { en: 'A thesis must answer both parts: a similarity (goods and ideas spread) and a difference (what was traded, and by horse, ship or camel).' }
      },
      {
        stim: { text: { en: 'Merchants traveling to Muslim ports often converted to avoid taxes. Even some Buddhist rulers adopted Muslim names to improve relations with Muslim states and merchants.' }, src: { en: 'Adapted from "Indian Ocean Trade Routes," World History Project' } },
        q: { en: 'The excerpt best explains which development in the Indian Ocean?' },
        choices: [{ en: 'Islam spreading through trade, for faith and profit' }, { en: 'Chinese fleets forcing every port to accept Islam' }, { en: 'Merchants giving up trade to become religious scholars' }, { en: 'Hindu and Buddhist merchants leaving the ocean trade' }],
        answer: 0,
        why: { en: 'Conversion had spiritual and economic benefits, like lower taxes. Malacca\'s own ruler became Muslim around 1400.' }
      },
      {
        q: { en: 'Which statement best describes a similarity between Indian Ocean and trans-Saharan trade?' },
        choices: [{ en: 'Islam gave merchants a shared language and trust' }, { en: 'Both depended on the monsoon winds to move goods' }, { en: 'Both were controlled by one single great empire' }, { en: 'Both used camels as their main way to move goods' }],
        answer: 0,
        why: { en: 'On both networks, Islam spread with merchants. Arabic and Islamic contracts and courts helped strangers trust each other.' }
      },
      {
        q: { en: 'Which best describes the purpose of Zheng He\'s voyages (1405–1433)?' },
        choices: [{ en: 'To show China\'s might and collect tribute' }, { en: 'To conquer the ports of the Indian Ocean' }, { en: 'To end all trade between China and Arabia' }, { en: 'To close the Strait of Malacca to merchants' }],
        answer: 0,
        why: { en: 'The voyages were diplomatic. China could have dominated the ocean but chose not to, and merchants kept trading freely.' }
      }
    ]
  },
  learned: [
    { en: 'The [[silk roads|Silk Roads]] moved goods over land by [[caravan|caravan]]; Mongol rule and [[caravanserai|caravanserais]] made them safer until the Black Death disrupted them.' },
    { en: 'Indian Ocean trade ran on the [[monsoon|monsoon]] winds through ports like Malacca, and sea routes recovered quickly after the Black Death.' },
    { en: 'Trans-Saharan caravans traded salt for gold. On the desert and the ocean, Islam gave merchants a shared language and trust.' }
  ],
  reflect: {
    q: { en: 'AP practice: Identify one similarity and one difference between Indian Ocean and trans-Saharan trade from c. 1200 to 1450.' },
    starter: { en: 'One similarity is that' }
  }
};
