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
    { en: 'Talk to the 4 travelers here, help a merchant from Malacca, then wake the time stone.' }
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
        { en: 'I am a pilot from Hormuz, on the Persian Gulf. The [[monsoon|monsoon]] winds are the engine of our trade.' },
        { en: 'In spring and summer they blow toward the northeast. In fall and winter they turn and blow toward the southwest. Every year, at the same times.' },
        { en: 'Our Arab guides list the best week, even the best day, to leave each port. I find our latitude with an [[astrolabe|astrolabe]] or a simple [[kamal|kamal]].' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why could Ahmad\'s guides name the best day to leave a port?' },
        choices: [
          { ok: true, t: { en: 'The winds turned at the same times each year' }, why: { en: 'Yes. Because the monsoon changed direction predictably, merchants could plan voyages and know when they would arrive.' } },
          { t: { en: 'The winds blew the same way all year long' }, why: { en: 'No. The monsoon changed direction twice a year: toward the northeast in summer, toward the southwest in winter.' } },
          { t: { en: 'Arab rulers ordered all ships to sail at once' }, why: { en: 'No. The guides came from the steady pattern of the winds, not from orders. Merchants sailed freely.' } }
        ]
      }
    },
    {
      x: 8, y: 3, name: { en: 'Chen' }, role: { en: 'Sailor from Quanzhou' },
      look: { skin: 1, hair: '#1b1410', shirt: '#2f5d8a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'I sailed here from Quanzhou in China with silk and porcelain. Chinese mariners improved the [[magnetic compass|magnetic compass]].' },
        { en: 'Since 1405, Admiral Zheng He, a Muslim Chinese, has led huge [[ming dynasty|Ming]] treasure fleets into this ocean. Some ships are 200 to 400 feet long!' },
        { en: 'He is not here to conquer. He shows China\'s might and collects [[tribute|tribute]]. Some rulers even sail to China to honor the emperor in person.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Compared with a navy of conquest, what were Zheng He\'s voyages mainly for?' },
        choices: [
          { ok: true, t: { en: 'Showing Ming power and collecting tribute' }, why: { en: 'Right. The voyages were diplomatic. No state in this period tried to take control of the ocean\'s trade.' } },
          { t: { en: 'Seizing every port to control the trade' }, why: { en: 'No. China had the strongest fleet, but it chose not to conquer or control the Indian Ocean trade.' } },
          { t: { en: 'Moving Chinese farmers to settle new lands' }, why: { en: 'No. The fleets carried officials, sailors and gifts, and brought back tribute for the emperor.' } }
        ]
      }
    },
    {
      x: 20, y: 10, name: { en: 'Miriam' }, role: { en: 'Jewish merchant' },
      look: { skin: 2, hair: '#3a2416', shirt: '#7a3b5a', robe: true, style: 'long' },
      lines: [
        { en: 'My family are Jewish merchants with relatives in many ports. Armenian, Gujarati and Fujianese merchants build networks like ours. Each is a [[diaspora|diaspora]].' },
        { en: 'Long-distance trade runs on trust. A shared language, home or faith tells me whom I can trust with my goods and my money.' },
        { en: 'Since the [[black death|Black Death]] and the fall of the Mongol Empire, land routes are risky. Sea trade recovered quickly, so more merchants sail.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Why could diaspora merchants do business across such long distances?' },
        choices: [
          { ok: true, t: { en: 'A shared language, home or faith built trust' }, why: { en: 'Yes. Trust let them hand goods and money to people in faraway ports.' } },
          { t: { en: 'A single empire ruled every one of their ports' }, why: { en: 'No. Many states ringed the ocean, and none tried to control its trade. Trust came from the community.' } },
          { t: { en: 'They never needed to trust anyone else' }, why: { en: 'No. Merchants had to trust carriers, currency and the goods they bought. Trust was everything.' } }
        ]
      }
    },
    {
      x: 20, y: 16, name: { en: 'Zuhura' }, role: { en: 'Merchant from the Swahili coast' },
      look: { skin: 5, hair: '#120c08', shirt: '#d98a2b', robe: true, style: 'bun' },
      lines: [
        { en: 'I come from the [[swahili coast|Swahili coast]] of East Africa. Our gold and ivory are wanted far away, and each port they pass adds to the price.' },
        { en: 'Muslim merchants brought Islam to our coast, and many people converted. Our Swahili language now uses Arabic words, often in Arabic script.' },
        { en: 'Muslims pay lower taxes where Muslim rulers govern, and Arabic is the language of [[commerce|commerce]]. Islamic courts even enforce our contracts.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'How did trade with Muslim merchants change the Swahili coast?' },
        choices: [
          { ok: true, t: { en: 'Many converted, and Swahili took in Arabic words' }, why: { en: 'Yes. Islam spread with trade, and the Bantu language Swahili adopted Arabic words and often Arabic script.' } },
          { t: { en: 'Arabic fully replaced the Swahili language for good' }, why: { en: 'No. Swahili stayed a Bantu language. It borrowed Arabic words but did not disappear.' } },
          { t: { en: 'Its people stopped trading across the sea' }, why: { en: 'No. Swahili merchants kept trading gold and ivory, and Islam made those ties stronger.' } }
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
      thanks: { en: 'My guide! Even some Buddhist rulers in Southeast Asia took Muslim names, to get along with Muslim states and merchants. Faith and trade travel together.' }
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
        stim: { text: { en: 'The monsoon winds were the engine that drove trade because they predictably changed direction twice a year.' }, src: { en: 'Adapted from "Indian Ocean Trade Routes," World History Project' } },
        q: { en: 'The excerpt best explains which feature of Indian Ocean trade?' },
        choices: [{ en: 'Merchants could plan voyages and arrival dates' }, { en: 'Ships could sail in any direction in any season' }, { en: 'All trade stopped for half of every year' }, { en: 'Only Chinese ships were able to cross the sea' }],
        answer: 0,
        why: { en: 'Because the winds turned at the same times each year, guides listed the best day to leave each port, and a round trip to Calicut took one year.' }
      },
      {
        stim: { title: { en: 'Goods in the Indian Ocean network' }, rows: [[{ en: 'Good' }, { en: 'Where it was produced' }], [{ en: 'Silk and porcelain' }, { en: 'China' }], [{ en: 'Gold and ivory' }, { en: 'East Africa' }], [{ en: 'Cinnamon and clove' }, { en: 'Southeast Asia' }]], src: { en: 'From "Indian Ocean Trade Routes," World History Project' } },
        q: { en: 'Which statement best explains why merchants carried the goods in the table so far?' },
        choices: [{ en: 'They were in high demand far from where they were made' }, { en: 'Every port in the whole network produced all of them' }, { en: 'Rulers forced merchants to carry them for no payment' }, { en: 'They sold for exactly the same price in every port' }],
        answer: 0,
        why: { en: 'Each region made goods others wanted. Passed from port to port, they grew more costly the farther they traveled.' }
      },
      {
        stim: { text: { en: 'Muslims paid lower taxes in states controlled by Muslim rulers. So conversion had both spiritual and economic benefits.' }, src: { en: 'Adapted from "Indian Ocean Trade Routes," World History Project' } },
        q: { en: 'Based on the excerpt, which best explains why many merchants became Muslims?' },
        choices: [{ en: 'Both faith and lower taxes drew them' }, { en: 'Zheng He forced all of them to convert' }, { en: 'Islam banned trade by non-Muslims' }, { en: 'Arabic was the only written language' }],
        answer: 0,
        why: { en: 'Conversion brought spiritual and economic benefits. Arabic, shared beliefs and Islamic courts also built trust between Muslim merchants.' }
      },
      {
        stim: { text: { en: 'Parameswara, the founder and ruler of Malacca, converted to Islam and took the name "Iskandar Shah" sometime around 1400.' }, src: { en: 'Adapted from "Indian Ocean Trade Routes," World History Project' } },
        q: { en: 'The development in the excerpt best reflects which larger process?' },
        choices: [{ en: 'Islam spreading along sea trade routes' }, { en: 'The Ming dynasty conquering Malacca' }, { en: 'Buddhism replacing Islam in Southeast Asia' }, { en: 'The end of trade through the Strait of Malacca' }],
        answer: 0,
        why: { en: 'Muslim merchant networks carried Islam to new ports. A ruler of a key trading city converting shows how faith and trade traveled together.' }
      },
      {
        q: { en: 'Which statement best describes the purpose of Zheng He\'s voyages (1405–1433)?' },
        choices: [{ en: 'To display Ming power and collect tribute' }, { en: 'To conquer all the ports of the Indian Ocean' }, { en: 'To settle Chinese farmers in East Africa' }, { en: 'To spread Buddhism to the Swahili coast' }],
        answer: 0,
        why: { en: 'The voyages were diplomatic. Ming China had the strongest fleet but did not try to conquer or control the Indian Ocean trade.' }
      },
      {
        q: { en: 'Compared with overland routes after the Black Death and the Mongol collapse, Indian Ocean sea routes...' },
        choices: [{ en: 'recovered quickly and drew more merchants' }, { en: 'closed for good and never reopened' }, { en: 'became safe only for Mongol traders' }, { en: 'lost all of their merchants to land routes' }],
        answer: 0,
        why: { en: 'The plague hurt overland trade badly, and the Mongol collapse made land routes risky. Sea networks recovered quickly and drew more merchants.' }
      },
      {
        q: { en: 'Armenian, Gujarati, Jewish and Fujianese merchants each built wide trade networks. Which best explains their success?' },
        choices: [{ en: 'A shared language, home or faith built trust' }, { en: 'Each group was ruled by the same empire' }, { en: 'They traded only with their nearest neighbors' }, { en: 'They avoided port cities and sailed alone' }],
        answer: 0,
        why: { en: 'These diaspora communities used shared language, home or beliefs to build the trust that long-distance business needed.' }
      },
      {
        q: { en: 'Which statement best describes how technology and Indian Ocean trade affected each other?' },
        choices: [{ en: 'Trade spread new tools, and the tools expanded trade' }, { en: 'Trade grew only because ship designs never changed' }, { en: 'Sailors refused all tools that came from other regions' }, { en: 'New tools made long-distance voyages slower and rarer' }],
        answer: 0,
        why: { en: 'The astrolabe, the kamal, the magnetic compass and larger ships let merchants sail farther with more cargo, and trade carried these ideas to new places.' }
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
