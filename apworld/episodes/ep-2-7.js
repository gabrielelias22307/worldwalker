/* HISTORYWALKER · Episode 2.7 · Comparison of Economic Exchange (AP World Topic 2.7, c. 1200–1450)
   Malacca, the Sultanate of Malacca, in 1450: a port where the goods and travelers of the Silk Roads, the Indian Ocean
   and the trans-Saharan routes meet. The student compares the three networks.
   Content source: Khan Academy, AP World History (World History Project), Unit 2 "Networks of Exchange":
   2.7 "Unit 2 LEQ", "Unit 2 DBQ" (Clavijo, Document 3: the primary-source lectern), "Writing: Thesis and
   Contextualization Part 1"; the reading lectern is adapted from "Unit 2 Introduction" (Trevor Getz);
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
    { en: 'Talk to the 4 travelers, read the 2 sources on the lecterns, help a Gujarati merchant load his ship, then wake the time stone.' }
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
        { en: 'Twice a year the [[monsoon|monsoon]] turns. In spring and summer it blows northeast; in fall and winter, southwest. We sail out on one wind and home on the other.' },
        { en: 'Arab merchants wrote travel guides that list the best week, even the best day, to leave each port and to return.' },
        { en: 'Calicut, on India\'s Malabar Coast, sits halfway across the ocean. Merchants ride the monsoon there and back in a single year, so it is the busiest port of all.' },
        { en: 'Arab sailors improved the astrolabe and made the kamal. Chinese sailors improved the compass. Indian, Chinese and Muslim shipbuilders made bigger ships that carry more.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Which best explains why Indian ports like Calicut became the busiest in the [[maritime|maritime]] network?' },
        choices: [
          { t: { en: 'Ming fleets made every ship stop there to pay tribute' }, why: { en: 'No. Zheng He collected tribute from rulers, but China did not control the ports or force ships to stop.' } },
          { ok: true, t: { en: 'Halfway across, they were a round trip of one monsoon year' }, why: { en: 'Yes. Calicut lay halfway between the two halves of the ocean, so the turning monsoon carried merchants there and back in one year.' } },
          { t: { en: 'Only Indian makers could build the astrolabe and kamal' }, why: { en: 'No. Arab sailors improved the astrolabe and made the kamal. Tools spread; location made Calicut busy.' } }
        ]
      }
    },
    {
      x: 26, y: 5, name: { en: 'Old Lin' }, role: { en: 'Fujianese merchant' },
      look: { skin: 1, hair: '#8a8a8a', shirt: '#7a2a2a', robe: true, style: 'bun' },
      lines: [
        { en: 'When I was young, Malacca was a quiet fishing village. Then the treasure fleets of Admiral [[zheng he|Zheng He]] used it as a stopping place, and old Palembang declined.' },
        { en: 'From 1405 to 1433 he led seven voyages: hundreds of ships, some 200 to 400 feet long, with up to 30,000 sailors. Ming China could have ruled this ocean.' },
        { en: 'But the Ming chose a different route. Zheng He sailed to display China\'s might and to collect [[tribute|tribute]] from rulers, not to conquer or control the trade.' },
        { en: 'The [[black death|Black Death]] wrecked land trade, and the Mongol Empire collapsed, so land roads were risky again. Sea routes recovered quickly, and merchants came to the sea.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Which best describes a change in long-distance trade after the mid-1300s?' },
        choices: [
          { ok: true, t: { en: 'Merchants shifted from risky land roads to sea routes' }, why: { en: 'Right. Sea routes recovered quickly from the Black Death, and the Mongol collapse made land roads risky again.' } },
          { t: { en: 'Overland trade grew as Mongol rule spread farther west' }, why: { en: 'No. That fits the 1200s. After the Black Death the Mongol Empire collapsed, and land roads grew risky.' } },
          { t: { en: 'Ming fleets seized the spice ports and taxed the trade' }, why: { en: 'No. The Ming could have dominated the ocean but chose diplomacy. Zheng He collected tribute; he did not seize ports.' } }
        ]
      }
    },
    {
      x: 9, y: 16, name: { en: 'Idris' }, role: { en: 'Merchant from Sijilmasa' },
      look: { skin: 3, hair: '#2a1a10', shirt: '#e8dcc0', pants: '#5a4a3a', robe: true, hat: '#2a4a8a', style: 'short' },
      lines: [
        { en: 'I come from Sijilmasa in Morocco. The Sahara is our sea, and camels are its ships: they go ten days without water and carry about 400 pounds each.' },
        { en: '[[pastoralist|Berber herders]] rent out camels and guide [[caravan|caravans]] of 5,000 to 10,000, October to March, 70 days across. Merchants pay herders tribute so they do not raid.' },
        { en: 'Berber salt buys Mali\'s gold; its emperors guard the secret of their gold mines. Enslaved people were forced north too: as many as 9.3 million between 800 and 1800.' },
        { en: 'Islam spread with merchants, so it took root first in market cities and among the rich. Most country people kept local religions. Arabic contracts built trust.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Compared with Indian Ocean merchants, how did trans-Saharan merchants protect their trade?' },
        choices: [
          { t: { en: 'They rode Timur\'s relay horses between the oases' }, why: { en: 'No. Timur\'s post horses served envoys on the Silk Roads in Central Asia, not desert caravans.' } },
          { t: { en: 'They sailed with the Ming navy for protection' }, why: { en: 'No. Zheng He\'s fleets sailed the Indian Ocean. The Sahara was crossed by camel caravan.' } },
          { ok: true, t: { en: 'They paid tribute to the desert pastoralists' }, why: { en: 'Yes. Rather than invade the desert, states and merchants paid herders tribute so caravans could cross safely.' } }
        ]
      }
    },
    {
      x: 18, y: 15, name: { en: 'Farrukh' }, role: { en: 'Merchant from Samarkand' },
      look: { skin: 2, hair: '#3a2416', shirt: '#4a6a3a', pants: '#3a2a20', robe: true, hat: '#d9c38a', style: 'short' },
      lines: [
        { en: 'I come from Samarkand, famous for its glass. The [[silk roads|Silk Roads]] are named for Chinese silk, and demand for Chinese, Persian and Indian goods kept rising in the west.' },
        { en: 'Chinggis Khan conquered Central Asia and made the road safe and unified. Some call it the [[pax mongolica|Pax Mongolica]]. Goods, technologies and ideas crossed Eurasia.' },
        { en: 'Germs traveled too. The [[black death|Black Death]] began in China or Kyrgyzstan in the 1330s and reached Kaffa by 1346. Regions lost 30 to 50 percent of their people.' },
        { en: 'Timur kept post horses and [[caravanserai|caravanserais]] all the way to Samarkand. Read what the Spanish envoy Clavijo wrote about them, on the lectern by the mosque road.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Which best explains why the Black Death spread so far, so fast?' },
        choices: [
          { t: { en: 'It began in Europe and moved east along the monsoon' }, why: { en: 'No. It began in China or Kyrgyzstan and moved west, reaching Kaffa in 1346.' } },
          { ok: true, t: { en: 'Busy trade routes linked the regions of Afro-Eurasia' }, why: { en: 'Yes. The same connections that carried silk and spice carried germs thousands of miles.' } },
          { t: { en: 'Caravans kept to the desert, far from any cities' }, why: { en: 'No. Trade linked cities and ports. That is how the plague reached so many people.' } }
        ]
      }
    },
    {
      doc: true, x: 20, y: 13, icon: '📜',
      name: { en: 'Clavijo on Timur\'s Roads' }, role: { en: 'Primary source' },
      src: { en: 'Ruy Gonzalez de Clavijo (d. 1412), envoy from Spain to the court of Timur at Samarkand; quoted in "Unit 2 DBQ," Document 3, World History Project' },
      lines: [
        { en: '"It was too through [Timur\'s] orders that daily along the way we were provided stage by stage with fresh mounts from the government studs as we passed by, and thus they hastened our going. All along this route Timur causes horses to be kept stationed ready for use at post-stages, in one place there may be a hundred in another two hundred horses, and this is the case right up to Samarkand."' },
        { en: '"These are kept for the service of the special messengers or envoys sent to distant places by Timur, or for the use of such envoys as may be coming to him, and such as come and such as go may ride these horses day and night without halt."' },
        { en: '"These government studs are stationed both in those desert or uninhabited regions along the route, and in places where there is a settled population, further for this service there have been built caravanserais at diverse intervals, where there are stables for the horses ..."' },
        { en: 'Ruy Gonzalez de Clavijo (died 1412) was an envoy sent by Spain over the Silk Roads to Samarkand and the court of Timur. He wrote his account for the European rulers who sent him. An envoy might make a foreign ruler\'s system sound grand to impress his patrons.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Sourcing: why should a historian read Clavijo\'s praise of Timur\'s post system with care?' },
        choices: [
          { t: { en: 'He was Timur\'s own official, writing orders for the stations' }, why: { en: 'No. Clavijo was an envoy from Spain, a visitor to Timur\'s court, not one of Timur\'s officials.' } },
          { ok: true, t: { en: 'He wrote for European rulers and may exaggerate to impress them' }, why: { en: 'Yes. An envoy reports to his patrons. He may have made Timur\'s system sound grand to impress them.' } },
          { t: { en: 'He was a merchant hoping to rent his horses to caravans' }, why: { en: 'No. He was an envoy, and he says the horses served Timur\'s messengers and envoys, not merchants.' } }
        ]
      }
    },
    {
      doc: true, x: 11, y: 5, icon: '📖',
      name: { en: 'Networks of Exchange, 1200–1450' }, role: { en: 'Reading' },
      src: { en: 'Adapted from "Unit 2 Introduction: Networks of Exchange 1200 to 1450" by Trevor Getz, World History Project (Khan Academy)' },
      lines: [
        { en: 'By 1200, the largest centers of artisan production were in East and South Asia. Goods were cheap where they were made, but rare and costly far away. "The trick for the merchant was to carry goods from a place where prices were low to another place where prices were high due to that product\'s scarcity."' },
        { en: 'The Silk Roads, named for East Asian silk, linked Eurasia from east to west, and Mongol rule kept travelers safe. Better ships and predictable winds let Indian Ocean merchants move in an annual cycle. Across the Sahara, Mali and later Songhai helped merchants ship gold in carefully organized caravans. West African gold became currency for Christian and Islamic economies.' },
        { en: 'Technologies and crops traveled with goods. Indian Ocean traders from Southeast Asia carried bananas to East Africa; growing them helped support new states and more people in the interior. But the Black Death nearly wiped out Silk Road trade beginning in the 1340s. Some routes recovered only in the early 1400s, and the collapse helped bring down the Mongol Empire.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'According to the reading, which best explains population growth in parts of interior Africa?' },
        choices: [
          { t: { en: 'Mali traded its gold for grain from the Mediterranean' }, why: { en: 'No. Mali traded gold for salt and luxuries. The reading links African population growth to a new crop.' } },
          { t: { en: 'The Mongol peace carried new plows south across the Sahara' }, why: { en: 'No. The reading names no plows crossing the Sahara. It links growth in the interior to bananas, which came by sea.' } },
          { ok: true, t: { en: 'Indian Ocean traders brought bananas, a new food crop' }, why: { en: 'Yes. Southeast Asian traders carried bananas to East Africa. Growing them supported new states and more people.' } }
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
        stim: { text: { en: '"All along this route Timur causes horses to be kept stationed ready for use at post-stages... further for this service there have been built caravanserais at diverse intervals, where there are stables for the horses ..."' }, src: { en: 'Ruy Gonzalez de Clavijo (d. 1412), envoy from Spain to the court of Timur at Samarkand' } },
        q: { en: 'The excerpt most directly reflects which feature of the Silk Roads?' },
        choices: [{ en: 'Arabic contracts and Islamic courts that built trust' }, { en: 'Tribute paid to pastoralists to keep caravans safe' }, { en: 'A ruler building stations to speed travel over land' }, { en: 'Merchant guilds funding roads beyond state control' }],
        answer: 2,
        why: { en: 'Timur\'s post horses and caravanserais made long journeys over land faster. Tribute to pastoralists belongs to the Sahara; Arabic contracts to the Islamic networks.' }
      },
      {
        stim: { text: { en: '"These are kept for the service of the special messengers or envoys sent to distant places by Timur, or for the use of such envoys as may be coming to him..."' }, src: { en: 'Ruy Gonzalez de Clavijo (d. 1412), envoy from Spain to Timur\'s court' } },
        q: { en: 'Clavijo\'s point of view as an envoy most likely affected his account in which way?' },
        choices: [{ en: 'He wrote as Timur\'s official, to give orders to the stations' }, { en: 'He may have made Timur\'s system sound grand to his patrons' }, { en: 'He wanted to prove that merchants used the horses most' }, { en: 'He wrote to warn Indian Ocean traders off the land roads' }],
        answer: 1,
        why: { en: 'An envoy reports to the European rulers who sent him and may exaggerate to impress them. He says the horses served envoys and messengers, not merchants.' }
      },
      {
        stim: { title: { en: 'Two networks of exchange, c. 1200–1450' }, rows: [[{ en: 'Feature' }, { en: 'Trans-Saharan' }, { en: 'Indian Ocean' }], [{ en: 'Moved by' }, { en: 'Camels, about 400 lb each' }, { en: 'Ships riding the monsoon' }], [{ en: 'Timing' }, { en: 'October to March only' }, { en: 'Out on one monsoon, home on the next' }], [{ en: 'Trip' }, { en: '70 days to cross' }, { en: 'Calicut and back in one year' }], [{ en: 'Know-how' }, { en: 'Berber guides, wells, oases' }, { en: 'Astrolabe, kamal, compass' }]], src: { en: 'From "Across an Ocean of Sand" and "Indian Ocean Trade Routes," World History Project' } },
        q: { en: 'The table best supports which claim about the two networks?' },
        choices: [{ en: 'Both depended on herders who rented out their animals' }, { en: 'Only ocean trade needed experts or special tools' }, { en: 'Saharan trade ran all year, but ocean trade was seasonal' }, { en: 'Both timed travel to predictable seasons in nature' }],
        answer: 3,
        why: { en: 'Caravans crossed in the cool months; ships waited for the monsoon to turn. Berber guides were experts too, and only the Sahara relied on rented animals.' }
      },
      {
        stim: { text: { en: '"The trick for the merchant was to carry goods from a place where prices were low to another place where prices were high due to that product\'s scarcity."' }, src: { en: 'Trevor Getz, "Unit 2 Introduction: Networks of Exchange 1200 to 1450," World History Project' } },
        q: { en: 'Which of the following best explains why luxury goods filled all three networks?' },
        choices: [{ en: 'Rulers banned long-distance trade in everyday goods' }, { en: 'Their scarcity far away made long, costly trips pay' }, { en: 'Luxuries were lighter than salt, so camels preferred them' }, { en: 'Rural villages along the routes bought the most silk' }],
        answer: 1,
        why: { en: 'Silk, spice and gold were cheap where they were made and rare far away, so carrying them across land, sea or sand paid. Heavy salt was traded too.' }
      },
      {
        stim: { text: { en: 'Merchants traveling to Muslim ports often converted to avoid taxes. Even some Buddhist rulers in Southeast Asia adopted Muslim names to improve relations with Muslim states and merchants.' }, src: { en: 'Adapted from "Indian Ocean Trade Routes," World History Project' } },
        q: { en: 'Compared with this process, the spread of Islam across the Sahara was similar in that Islam...' },
        choices: [{ en: 'spread mainly through merchants and trading cities' }, { en: 'quickly replaced local religions among rural farmers' }, { en: 'was carried mostly by Mongol rulers of Central Asia' }, { en: 'arrived mainly with Chinese treasure fleets' }],
        answer: 0,
        why: { en: 'On both networks Islam spread with merchants. In West Africa it took root in market cities and among the rich; most country people kept local religions.' }
      },
      {
        stim: { text: { en: 'In the 1300s and 1400s, Ming China had the most impressive maritime technology the world had ever seen. Its wealth and naval mastery gave it the opportunity to dominate the Indian Ocean. But it chose a different route.' }, src: { en: 'Adapted from "Indian Ocean Trade Routes," World History Project' } },
        q: { en: 'Which of the following best describes the "different route" the Ming chose?' },
        choices: [{ en: 'Seizing Malacca and Calicut to control the spice trade' }, { en: 'Closing Chinese ports to Arab and Persian merchants' }, { en: 'Voyages to display Chinese power and collect tribute' }, { en: 'Building post stations and caravanserais in Central Asia' }],
        answer: 2,
        why: { en: 'Zheng He\'s seven voyages (1405–1433) were diplomatic. No state tried to dominate the ocean, and merchants kept trading freely.' }
      },
      {
        stim: { text: { en: 'The Black Death nearly wiped out trade along the Silk Roads beginning in the 1340s. Some routes recovered only in the early fifteenth century, and the collapse helped bring down the Mongol Empire.' }, src: { en: 'Adapted from "Unit 2 Introduction: Networks of Exchange 1200 to 1450" by Trevor Getz, World History Project' } },
        q: { en: 'Which of the following best describes a change that followed the developments in the passage?' },
        choices: [{ en: 'Mongol rule grew stronger by controlling plague ports' }, { en: 'Merchants turned to sea routes as land roads grew risky' }, { en: 'Long-distance trade stopped and never recovered' }, { en: 'Camel caravans replaced ships in the Indian Ocean' }],
        answer: 1,
        why: { en: 'Sea routes recovered quickly from the plague, and with the Mongol Empire gone, land roads were risky again. More merchants went by sea.' }
      },
      {
        stim: { text: { en: 'Develop an argument that analyzes the similarities and differences between various networks of exchange from c. 1200 to 1450 CE.' }, src: { en: 'Unit 2 long essay prompt, World History Project' } },
        q: { en: 'Which thesis best responds to this prompt?' },
        choices: [{ en: 'Trade grew from 1200 to 1450 because elites wanted luxury goods' }, { en: 'All spread goods and ideas but differed in goods and transport' }, { en: 'Mongol and Malian rulers both kept roads safe for merchants' }, { en: 'The Black Death changed every network of exchange after 1340' }],
        answer: 1,
        why: { en: 'A comparison thesis names both a similarity (goods and ideas spread) and a difference (what was traded, and by horse, ship or camel). The others explain causes or one point.' }
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
