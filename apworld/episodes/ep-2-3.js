/* HISTORYWALKER · Episode 2.3 · Exchange in the Indian Ocean (AP World Topic 2.3, c. 1200–1450)
   Calicut, on the Malabar Coast of India, in 1420.
   Content source: Khan Academy, AP World History (World History Project), Unit 2 Lesson "Exchange in the Indian Ocean":
   "Indian Ocean Trade Routes" (Bennett Sherry), "Zheng He – Graphic Biography"; and the Unit 2 overview
   "Unit 2 Introduction: Networks of Exchange 1200 to 1450" (Trevor Getz) and "Unit 2 Overview: Networks of Exchange".
   World History Project content is CC BY-NC 4.0. Facts here come from those readings. English only, AP level. */
window.EPISODE = {
  id: '2.3',
  realm: 2,
  sol: 'AP 2.3',
  style: 'india',
  weather: { sky: 'drizzle', time: 'day' },
  title: { en: 'Exchange in the Indian Ocean' },
  place: { en: 'Calicut, Malabar Coast of India, 1420' },
  intro: [
    { en: 'The Grump blurred the page on the Indian Ocean. Calicut is forgetting how its winds, ships and merchants work!' },
    { en: 'Talk to the 4 travelers AND read the 2 sources on their stands, help a merchant from Malacca, then wake the time stone.' }
  ],
  scenes: {
    at: [75.78, 11.25],
    year: 1420,
    start: [
      { en: 'From 1200 to 1450, the Indian Ocean was the center of world trade.' },
      { en: 'Calicut, on India\'s Malabar Coast, was one of the busiest ports on the ocean.' },
      { en: 'It sat halfway between the western and eastern halves of the Indian Ocean.' }
    ],
    guess: {
      q: { en: 'Ships crossed the Indian Ocean on a schedule. What do you think drove them?' },
      choices: [{ t: { en: '🌬️ Monsoon winds' }, ok: true }, { t: { en: '🚣 Rowing alone' } }],
      why: { en: 'The monsoon winds changed direction twice a year, at the same times, so merchants could plan.' }
    },
    page: { en: 'From 1405 to 1433, Zheng He led seven Ming treasure fleets across this ocean.' },
    next: {
      q: { en: 'Next: Trans-Saharan trade. Did caravans carry West African gold across the Sahara?' },
      choices: [{ t: { en: 'Yes, they did' }, ok: true }, { t: { en: 'No, the gold stayed home' } }],
      why: { en: 'Expanding states like Mali helped merchants ship gold across the desert in organized caravans. You go there next.' }
    }
  },
  start: [17, 11],
  map: [
    '=====~ppTTTTTTTTTTTTTTTTTTTTTTTT',
    '=====~s..RRRR....l...DDDDDD...,T',
    '=====~s..hhdh....l...DDDDDD....T',
    '==kkkks..........l...DDdDDD..x.T',
    '=====~s.p........l.....l.......T',
    '=====~sllllllllllllllllllllllllT',
    '=====~s.p......x.l.............T',
    '=====~s..RRRR....l.RRRR...QQQQ.T',
    '=====~s..hdhh....l.hhdh...hhdh.T',
    '=====~s.....,....l.............T',
    '====~~s.p........l.....T....,..T',
    '====~ssx.........l.............T',
    '=====~s..QQQQ....l..lllllllll..T',
    '=kkkkks..hdhh....l..lmlmlmlml..T',
    '=====~s..........l.lllllllllll.T',
    '=====~s..........l..lmlmlmlml..T',
    '=====~s......p...l..lllllllll..T',
    '=kkkkks..........l......DDDDDD.T',
    '=====~s..........l......DDDDDD.T',
    '=====~s.kk.......l......DDdDDD.T',
    '=====~s.,....p...l..........,..T',
    '======TTTTTTTTTTTTTTTTTTTTTTTTTT'
  ],
  words: {
    'monsoon': { en: 'a seasonal wind; in the Indian Ocean it changes direction twice a year, at the same times' },
    'astrolabe': { en: 'an instrument that uses the stars to find latitude; Arab merchants improved it' },
    'kamal': { en: 'a board on a knotted string, lined up with the North Star to find latitude' },
    'magnetic compass': { en: 'a needle that points north; Chinese mariners improved it' },
    'diaspora': { en: 'a people with a common origin, scattered far from their homeland' },
    'black death': { en: 'the bubonic plague, which spread along trade routes beginning in the 1340s' },
    'ming dynasty': { en: 'the dynasty that ruled China after the Mongol Yuan dynasty fell in 1368' },
    'tribute': { en: 'gifts or payments a ruler sends to a more powerful ruler as a sign of respect' },
    'swahili coast': { en: 'the trading coast of East Africa, where people speak the Bantu language Swahili' },
    'commerce': { en: 'trade, especially large-scale exchange of goods' },
    'maritime': { en: 'related to the sea, shipping or ocean trade' }
  },
  npcs: [
    {
      x: 6, y: 15, name: { en: 'Ahmad' }, role: { en: 'Arab ship pilot' },
      look: { skin: 3, hair: '#1b1410', shirt: '#e8e0cc', robe: true, hat: '#f2efe6', style: 'short' },
      lines: [
        { en: 'I am a pilot from Hormuz, on the Persian Gulf. The [[monsoon|monsoon]] winds are the engine of our trade, because they change direction twice a year, at the same times.' },
        { en: 'In spring and summer, India heats up and draws in ocean air, so the winds blow northeast and bring heavy rain. In fall and winter they turn southwest.' },
        { en: 'Arab travel guides list the best week, even the best day, to leave each port. Arab merchants improved the [[astrolabe|astrolabe]] and developed the [[kamal|kamal]] to find latitude.' },
        { en: 'Our ports run from Mozambique in East Africa to Hormuz, Calicut, Malacca and Quanzhou. Arab, Persian and Indian merchants reach even Chinese ports.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Which best explains how Ahmad\'s guides could name the best day to leave a port?' },
        choices: [
          { ok: true, t: { en: 'The winds turned at set times every year' }, why: { en: 'Yes. Because the monsoon changed direction at the same times every year, merchants could plan voyages and know when they would arrive.' } },
          { t: { en: 'The astrolabe let pilots forecast each storm' }, why: { en: 'No. The astrolabe and kamal found latitude from the stars. The guides rested on the yearly pattern of the winds.' } },
          { t: { en: 'Ming fleets set a timetable for every port' }, why: { en: 'No. The Ming did not try to control the ocean\'s trade. The timing came from the monsoon, and merchants sailed freely.' } }
        ]
      }
    },
    {
      x: 8, y: 3, name: { en: 'Chen' }, role: { en: 'Sailor from Quanzhou' },
      look: { skin: 1, hair: '#1b1410', shirt: '#2f5d8a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'I sailed here from Quanzhou in China with silk and porcelain. Around 1200, China was the world\'s largest manufacturer, and Chinese mariners improved the [[magnetic compass|magnetic compass]].' },
        { en: 'The Mongol Yuan dynasty fell in 1368 and the [[ming dynasty|Ming]] rose. Since 1405, the Muslim Chinese admiral Zheng He has led Ming treasure fleets into this ocean.' },
        { en: 'His ships are the world\'s largest, some 200 to 400 feet long, each with dozens of cannons. As many as 30,000 sailors came on his first voyage.' },
        { en: 'The Ming could dominate this ocean, but chose not to. Zheng He displays China\'s might and collects [[tribute|tribute]]. Some rulers sail to China to pay tribute in person.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Compared with what Ming naval power made possible, what did Zheng He\'s voyages actually aim for?' },
        choices: [
          { ok: true, t: { en: 'Showing Ming might and collecting tribute' }, why: { en: 'Right. The voyages were diplomatic. The Ming did not try to conquer or even control the Indian Ocean trade.' } },
          { t: { en: 'Seizing control of the ocean\'s spice trade' }, why: { en: 'No. China had the strongest fleet and dozens of cannons per ship, but it chose not to control the trade. No state in this period did.' } },
          { t: { en: 'Founding Chinese trading colonies in Africa' }, why: { en: 'No. The fleets showed China\'s might and brought back tribute, even exotic animals, for the emperor. They did not found colonies.' } }
        ]
      }
    },
    {
      x: 20, y: 10, name: { en: 'Miriam' }, role: { en: 'Jewish merchant' },
      look: { skin: 2, hair: '#3a2416', shirt: '#7a3b5a', robe: true, style: 'long' },
      lines: [
        { en: 'My family are Jewish merchants with relatives in many ports. Armenian, Gujarati and Fujianese merchants build networks like ours. Each is a [[diaspora|diaspora]].' },
        { en: 'Long-distance trade runs on trust: trust in the people carrying my goods, trust that the coins I am paid have value, trust that the goods are real.' },
        { en: 'A shared language, home or faith tells me whom to trust. Port merchants here often share more with distant merchants than with their own inland neighbors.' },
        { en: 'From the 1340s the [[black death|Black Death]] devastated overland trade, and the fall of the Mongol Empire made land routes risky. Sea routes recovered fast, so more of us sail.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Which best explains how diaspora merchants did business across such long distances?' },
        choices: [
          { ok: true, t: { en: 'A shared language, home or faith built trust' }, why: { en: 'Yes. Trust let them hand goods and money to people in faraway ports.' } },
          { t: { en: 'Islamic courts enforced all of their contracts' }, why: { en: 'No. Islamic courts helped Muslim merchants. Jewish, Armenian or Gujarati networks built trust through their own shared language, home and beliefs.' } },
          { t: { en: 'One empire protected every one of their ports' }, why: { en: 'No. Many states ringed the ocean, and none tried to control its trade. Trust came from the community.' } }
        ]
      }
    },
    {
      x: 20, y: 16, name: { en: 'Zuhura' }, role: { en: 'Merchant from the Swahili coast' },
      look: { skin: 5, hair: '#120c08', shirt: '#d98a2b', robe: true, style: 'bun' },
      lines: [
        { en: 'I come from the [[swahili coast|Swahili coast]] of East Africa. Like Chinese silk or Southeast Asian cloves, our gold and ivory grow pricier at every port they pass.' },
        { en: 'Muslim merchants brought Islam to our coast and won many converts. Swahili is a Bantu language, but it adopted Arabic words and often uses the Arabic script.' },
        { en: 'Muslims pay lower taxes in states ruled by Muslims, so merchants sailing to Muslim ports often convert to avoid taxes. Arabic is the common language of [[commerce|commerce]].' },
        { en: 'Like diaspora merchants, Muslim merchants trust each other through a shared language and beliefs. Local Islamic courts also enforce our contracts.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Which best describes how trade with Muslim merchants changed the Swahili coast?' },
        choices: [
          { ok: true, t: { en: 'Many converted, and Swahili took in Arabic words' }, why: { en: 'Yes. Islam spread with trade, and the Bantu language Swahili adopted Arabic words and often Arabic script.' } },
          { t: { en: 'Arabic replaced Swahili in everyday speech on the coast' }, why: { en: 'No. Arabic became the common language of commerce, but Swahili stayed a Bantu language that borrowed Arabic words.' } },
          { t: { en: 'Arab shippers took over its sea trade' }, why: { en: 'No. Swahili merchants kept trading gold and ivory themselves, and Islam made their ties to other ports stronger.' } }
        ]
      }
    },
    {
      doc: true, x: 14, y: 10, icon: '📜',
      name: { en: 'A Map of the Monsoon Winds' }, role: { en: 'Primary source' },
      src: { en: 'Nineteenth-century map of the monsoon winds in the Indian Ocean, Library of Congress (public domain); caption quoted in "Indian Ocean Trade Routes," World History Project' },
      lines: [
        { en: 'This old map shows the Indian Ocean twice, side by side. The reading\'s caption explains: "On the left is a map of the winds in February (blowing toward the southwest). On the right is a map of the winds in August (blowing toward the northeast)."' },
        { en: '"Notice how the winds make it easier to travel in different directions at different times of the year."' },
        { en: 'Context: this map was made in the nineteenth century, centuries after 1420, and is now kept by the Library of Congress. Its maker is not named. It records the same yearly pattern that Arab travel guides used to list the best day to leave each port.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Sourcing: the map was made centuries after 1420. Why is it still useful evidence for Indian Ocean trade in 1420?' },
        choices: [
          { ok: true, t: { en: 'The winds turn at the same times every year' }, why: { en: 'Yes. The monsoon is a continuity: it changed direction predictably then and later, so a later map shows the pattern merchants used in 1420.' } },
          { t: { en: 'It was copied from Zheng He\'s own charts' }, why: { en: 'No. Nothing ties this map to Zheng He. Its value is that the yearly wind pattern did not change.' } },
          { t: { en: 'It lists every voyage that left Calicut in 1420' }, why: { en: 'No. It shows the winds in February and August, not ships or voyages.' } }
        ]
      }
    },
    {
      doc: true, x: 19, y: 3, icon: '📖',
      name: { en: 'Why the Trade Grew' }, role: { en: 'Reading' },
      src: { en: 'Adapted from "Indian Ocean Trade Routes" by Bennett Sherry, World History Project (Khan Academy)' },
      lines: [
        { en: 'In the years before 1200, the Song dynasty in China and several Islamic states in the western Indian Ocean brought stability, and their wealth encouraged trade. Song emperors gave merchants more freedom and monetized taxes: farmers sold their crops and paid the government in money. With more currency, more people bought at market, and richer merchants had more to spend on foreign trade.' },
        { en: 'In the thirteenth century, the Mongol Empire expanded trade across Afro-Eurasia by bringing many regions under one imperial system. In the fourteenth century, the Black Death devastated overland trade, but sea-based networks recovered quickly. The collapse of the Mongol Empire made overland trade risky again, driving more merchants to the sea routes.' },
        { en: 'Yet the most important factor driving the Indian Ocean trade was not political or economic, but cultural. The expansion of Islam connected diverse parts of the system more than any empire. Muslim merchants extended trade networks, and those networks spread Islam to new places. Arabic became the common language of commerce throughout the Indian Ocean.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'According to the reading, which best explains what held the Indian Ocean network together across so many states?' },
        choices: [
          { ok: true, t: { en: 'Islam linked its ports more than any empire' }, why: { en: 'Yes. The reading calls the spread of Islam the most important factor: a cultural force, not a political or economic one.' } },
          { t: { en: 'Song tax reforms placed its ports under China' }, why: { en: 'No. Song reforms freed merchants and monetized taxes inside China. They did not put other ports under Chinese rule.' } },
          { t: { en: 'Mongol rule kept every coast safe after 1350' }, why: { en: 'No. The Mongol Empire collapsed in the 1300s, and that made overland trade risky. The reading names Islam as the key link.' } }
        ]
      }
    }
  ],
  houses: [
    { at: [11, 2], name: { en: 'Net maker Kannan' }, look: { skin: 4, hair: '#1b1410', shirt: '#f0e6d0', pants: '#6a4a2a', style: 'short' },
      lines: [{ en: 'Ships from all over the ocean anchor in front of my house.' }, { en: 'I hear many languages every day. Arabic is the one all merchants know.' }] },
    { at: [23, 3], name: { en: 'Imam Yusuf' }, look: { skin: 3, hair: '#6e6e6e', shirt: '#ffffff', robe: true, hat: '#ffffff', style: 'short' },
      lines: [{ en: 'Merchants who become Muslims carry Islam home to their own ports.' }, { en: 'Islam linked this ocean\'s ports more than any empire did.' }] },
    { at: [10, 8], name: { en: 'Armenian trader Grigor' }, look: { skin: 1, hair: '#2b1d14', shirt: '#5a2a2a', robe: true, style: 'short' },
      lines: [{ en: 'Armenian merchants trade in ports all across this ocean.' }, { en: 'We share a language and a faith, so we trust each other.' }] },
    { at: [21, 8], name: { en: 'Miriam\'s son Yosef' }, look: { skin: 2, hair: '#2b1d14', shirt: '#3a5a8a', style: 'short' },
      lines: [{ en: 'My uncles trade in distant ports. Family letters tell us who is honest.' }, { en: 'One day I will sail with the monsoon too.' }] },
    { at: [28, 8], name: { en: 'Lodge keeper Ali' }, look: { skin: 3, hair: '#1b1410', shirt: '#2a8a6a', style: 'short' },
      lines: [{ en: 'Merchants stay here for months, waiting for the winds to turn.' }, { en: 'With so many guests, Calicut is home to people from far-off lands.' }] },
    { at: [10, 13], name: { en: 'Warehouse clerk Ravi' }, look: { skin: 4, hair: '#1b1410', shirt: '#c9a24a', pants: '#3a3a2a', style: 'short' },
      lines: [{ en: 'African gold and ivory, Chinese silk and porcelain: all pass through here.' }, { en: 'Traders from Southeast Asia once carried bananas to East Africa.' }] },
    { at: [26, 19], name: { en: 'Temple keeper Devi' }, look: { skin: 4, hair: '#120c08', shirt: '#b8323a', robe: true, style: 'bun' },
      lines: [{ en: 'Hinduism and Buddhism traveled to Southeast Asia with merchants.' }, { en: 'Islam spread there later, along the very same sea routes.' }] }
  ],
  signs: [
    { x: 15, y: 6, text: { en: 'CALICUT · Malabar Coast. Halfway across the ocean: come and go in one year.' } },
    { x: 29, y: 3, text: { en: 'MOSQUE · Arabic is the shared language of commerce across the Indian Ocean.' } },
    { x: 7, y: 11, text: { en: 'HARBOR · Summer winds blow toward the northeast; winter winds toward the southwest.' } }
  ],
  finds: [
    { clueAt: [13, 14], at: [14, 16], decor: 'coinold', clue: { en: 'From this note, walk 2 steps south and 1 step east, toward the palm.' },
      text: { en: 'A coin from a faraway port! Merchants had to trust that the money they were paid had value.' } }
  ],
  scraps: [[30, 1], [7, 20], [30, 20]],
  smudges: [[12, 9], [22, 20]],
  quest: {
    stat: 'mov',
    title: { en: 'The Lost Sailing Guide' },
    giver: {
      x: 19, y: 12, name: { en: 'Rahman' }, role: { en: 'Merchant from Malacca' },
      look: { skin: 3, hair: '#1b1410', shirt: '#1f6a5a', pants: '#2a2a3a', hat: '#c9a24a', style: 'short' },
      lines: [
        { en: 'Malacca\'s strait is the fastest sea route between China and the Indian Ocean. Around 1400 our ruler Parameswara became a Muslim, taking the name Iskandar Shah.' },
        { en: 'The Grump\'s helpers stole my Arab sailing guide! It lists the best day to leave each port. Ask the boat builder at the shipyard, by the south pier.' }
      ],
      wait: { en: 'The boat builder works southwest of the market, at the shipyard by the south pier.' },
      thanks: { en: 'My guide! Hinduism, Buddhism and Islam all reached Southeast Asia with merchants. Some Buddhist rulers even took Muslim names to improve relations with Muslim merchants.' }
    },
    contact: {
      x: 11, y: 19, name: { en: 'Govinda' }, role: { en: 'Boat builder' },
      look: { skin: 4, hair: '#1b1410', shirt: '#8a6a3a', pants: '#3a2a1a', style: 'short' },
      lines: [
        { en: 'Indian, Chinese and Muslim shipbuilders all make larger ships now. They sail farther and carry more cargo.' },
        { en: 'A page blew north up the beach. Follow the sand north, past the harbor, to the old fishing pier, and walk out to its far western end.' }
      ]
    },
    action: {
      type: 'find', at: [2, 3],
      hint: { en: 'North along the beach, to the west end of the fishing pier' },
      found: { en: 'There it is, caught at the end of the fishing pier: Rahman\'s sailing guide, every departure day still readable.' },
      item: { icon: '📜', name: { en: 'Rahman\'s sailing guide' } }
    }
  },
  challenge: {
    at: [21, 19],
    type: 'route', // in the world; the card version (order) is the fallback
    // Zuhura's year: arrive at the south pier (summer winds) -> warehouse (unload) -> market (trade) -> lodge (wait) -> north pier (winter winds home)
    spots: [[1, 17], [8, 14], [24, 14], [27, 10], [1, 13]],
    stat: 'loc',
    title: { en: 'One year on the monsoon' },
    intro: { en: 'Calicut sits halfway across the ocean, so a ship can come and go in one year. The Grump scrambled the voyage of Zuhura\'s ship from the Swahili coast. Walk to each stop, in order.' },
    items: [
      { icon: '⛵', t: { en: 'Spring and summer: ride the winds blowing northeast, and reach Calicut\'s pier' } },
      { icon: '📦', t: { en: 'Unload East African gold and ivory at the warehouse' } },
      { icon: '🏺', t: { en: 'Trade at the market for Chinese silk and porcelain and Southeast Asian spices like cinnamon and clove' } },
      { icon: '⏳', t: { en: 'Wait at the merchants\' lodge until the monsoon turns' } },
      { icon: '🌬️', t: { en: 'Fall and winter: ride the winds blowing southwest, home before the year ends' } }
    ],
    why: { en: 'The winds set the order: sail with the northeast-blowing winds of spring and summer, trade, wait for the turn, then ride the southwest-blowing winds of fall and winter home.' },
    success: { en: 'A round trip in one year! Because the monsoon turned at the same times every year, merchants could plan every voyage.' }
  },
  boss: {
    at: [29, 2], stat: 'mov', need: 3,
    name: { en: 'The Doldrums Grump' },
    appear: { en: 'The Doldrums Grump is hiding behind the mosque!' },
    taunt: { en: 'No wind, no trade! I will make every sail on this ocean go slack!' },
    win: { en: 'A fresh monsoon wind blows over Calicut. The page on the Indian Ocean floats down into your hands!' },
    questions: [
      {
        stim: { text: { en: '"On the left is a map of the winds in February (blowing toward the southwest). On the right is a map of the winds in August (blowing toward the northeast)."' }, src: { en: 'Caption of a nineteenth-century map of the monsoon winds (Library of Congress), quoted in "Indian Ocean Trade Routes," World History Project' } },
        q: { en: 'A merchant in Calicut wants to sail home to the Swahili coast of East Africa. The pattern in the excerpt best supports which plan?' },
        choices: [{ en: 'Leave in winter, on winds blowing southwest' }, { en: 'Leave in August, on winds blowing southwest' }, { en: 'Leave in summer, on winds blowing northeast' }, { en: 'Leave in any month, since the winds hold steady' }],
        answer: 0,
        why: { en: 'In fall and winter (February on the map) the monsoon blows southwest, toward East Africa. In August it blows northeast, toward India. That is why a round trip to Calicut took one year.' }
      },
      {
        stim: { title: { en: 'Goods in the Indian Ocean network' }, rows: [[{ en: 'Good' }, { en: 'Where it was produced' }], [{ en: 'Silk and porcelain' }, { en: 'China' }], [{ en: 'Gold and ivory' }, { en: 'East Africa' }], [{ en: 'Cinnamon and clove' }, { en: 'Southeast Asia' }]], src: { en: 'From "Indian Ocean Trade Routes," World History Project' } },
        q: { en: 'The table best supports which claim about Indian Ocean trade from 1200 to 1450?' },
        choices: [{ en: 'Luxuries gained value as they moved far from home' }, { en: 'Most trade was in grain for inland farmers' }, { en: 'China imported more goods than it manufactured' }, { en: 'Each region traded only with its nearest port' }],
        answer: 0,
        why: { en: 'These luxuries were in high demand far from where they were made. Passed from merchant to merchant and port to port, their prices rose the farther they traveled. China, the largest manufacturer, sent out silk and porcelain.' }
      },
      {
        stim: { text: { en: 'Muslims paid lower taxes in states controlled by Muslim rulers. So, as Muslim states expanded or local rulers converted, conversion had both spiritual and economic benefits.' }, src: { en: 'Adapted from "Indian Ocean Trade Routes," World History Project' } },
        q: { en: 'Which of the following best supports the claim that conversion had economic benefits?' },
        choices: [{ en: 'Merchants in Muslim ports often converted to avoid taxes' }, { en: 'Zheng He, a Muslim Chinese admiral, led seven Ming fleets' }, { en: 'Swahili adopted Arabic words and often the Arabic script' }, { en: 'Arab merchants improved the astrolabe and the kamal' }],
        answer: 0,
        why: { en: 'Converting to avoid taxes is direct evidence of an economic motive. The other statements are true, but they show who sailed, how language changed, or how tools improved, not why conversion paid.' }
      },
      {
        stim: { text: { en: 'Parameswara, the founder and ruler of Malacca, converted to Islam and took the name "Iskandar Shah" sometime around 1400. Even some Buddhist rulers in Southeast Asia adopted Muslim names.' }, src: { en: 'Adapted from "Indian Ocean Trade Routes," World History Project' } },
        q: { en: 'The developments in the excerpt most directly reflect which process?' },
        choices: [{ en: 'Islam spreading along maritime trade networks' }, { en: 'Ming tribute missions converting local rulers' }, { en: 'Mongol rule uniting Southeast Asian states' }, { en: 'Buddhism replacing Islam in Southeast Asia' }],
        answer: 0,
        why: { en: 'Muslim merchant networks carried Islam to new ports. Rulers of trading cities converted, or took Muslim names, to improve relations with Muslim states and merchants.' }
      },
      {
        stim: { text: { en: 'From 1405 to 1433, Zheng He led seven expeditions of huge treasure fleets into the Indian Ocean. Some ships were 200 to 400 feet long, and each held dozens of cannons.' }, src: { en: 'Adapted from "Indian Ocean Trade Routes," World History Project' } },
        q: { en: 'Which of the following best explains why the voyages in the excerpt did NOT give the Ming control of Indian Ocean trade?' },
        choices: [{ en: 'The Ming chose display and tribute over conquest' }, { en: 'Gujarati and Swahili fleets drove the Ming out' }, { en: 'The Black Death ended the voyages before 1405' }, { en: 'Ming ships were too small to carry many soldiers' }],
        answer: 0,
        why: { en: 'The Ming had the power to dominate the ocean but chose a different route: Zheng He displayed China\'s might and collected tribute. No state in this period tried to control the trade.' }
      },
      {
        stim: { text: { en: 'In the fourteenth century, the Black Death devastated overland trade, but sea-based networks recovered quickly. The collapse of the Mongol Empire meant that overland trade was once again risky.' }, src: { en: 'Adapted from "Indian Ocean Trade Routes," World History Project' } },
        q: { en: 'Which change in Afro-Eurasian trade does the excerpt best explain?' },
        choices: [{ en: 'More merchants moved their goods on sea routes' }, { en: 'Mongol rule made Central Asian routes safer' }, { en: 'Sea trade collapsed and stayed weak for a century' }, { en: 'Song tax reforms ended China\'s foreign trade' }],
        answer: 0,
        why: { en: 'With the plague and the Mongol collapse, land routes grew risky, while sea networks recovered quickly. That drove more merchants to the sea. Mongol stability belongs to the 1200s, before the collapse.' }
      },
      {
        stim: { text: { en: 'Long-distance trade depended on trust. You had to trust the people transporting your goods to market. You had to trust that the currency you were paid had value.' }, src: { en: 'Adapted from "Indian Ocean Trade Routes," World History Project' } },
        q: { en: 'Muslim merchants and diaspora merchants (Armenian, Gujarati, Jewish) were similar in that both built that trust through...' },
        choices: [{ en: 'a shared language and set of beliefs' }, { en: 'local Islamic courts that enforced contracts' }, { en: 'lower taxes in Muslim-ruled states' }, { en: 'the protection of a single empire' }],
        answer: 0,
        why: { en: 'Both groups relied on a shared language and beliefs. Islamic courts and lower taxes helped only Muslim merchants, and no single empire ruled the ocean.' }
      },
      {
        stim: { title: { en: 'Technology in the Indian Ocean network' }, rows: [[{ en: 'Technology' }, { en: 'Who improved or developed it' }], [{ en: 'Astrolabe and kamal' }, { en: 'Arab merchants' }], [{ en: 'Magnetic compass' }, { en: 'Chinese mariners' }], [{ en: 'Larger ships with more cargo' }, { en: 'Indian, Chinese and Muslim shipbuilders' }]], src: { en: 'From "Indian Ocean Trade Routes," World History Project' } },
        q: { en: 'The table best supports which claim about technology and Indian Ocean trade?' },
        choices: [{ en: 'Innovations from several regions expanded sea trade' }, { en: 'European ships led this era\'s advances in sailing' }, { en: 'Chinese mariners developed every key sailing tool' }, { en: 'New tools mattered less than caravan routes did' }],
        answer: 0,
        why: { en: 'Arab, Chinese, Indian and Muslim innovators each added tools and ships that let merchants sail farther with more cargo.' }
      }
    ]
  },
  learned: [
    { en: 'The [[monsoon|monsoon]] winds changed direction at the same times every year, so merchants could plan voyages; from Calicut, halfway across, a round trip took one year.' },
    { en: 'Diaspora communities and the spread of Islam built trust: shared language and faith, Islamic courts, and lower taxes for Muslims in Muslim-ruled states.' },
    { en: 'Compasses, astrolabes and larger ships expanded [[maritime|maritime]] trade; Ming China sent Zheng He for tribute and display, not conquest.' }
  ],
  reflect: {
    q: { en: 'AP practice: Explain one way the monsoon winds OR the spread of Islam encouraged trade in the Indian Ocean from 1200 to 1450.' },
    starter: { en: 'One way trade in the Indian Ocean grew was' }
  }
};
