/* HISTORYWALKER · Episode 1.2 · Developments in Dar al-Islam (AP World Topic 1.2, c. 1200–1450)
   Cairo, capital of the Mamluk Sultanate in Egypt, about 1300: some forty years after a Mongol army sacked Baghdad.
   Content source: Khan Academy, AP World History (World History Project), Unit 1 Lesson "Developments in Dar al-Islam":
   "Dar al-Islam 1200–1450" (Bennett Sherry), with "Unit 1 Introduction: The Global Tapestry, c. 1200 to 1450"
   (Trevor Getz) for the many faiths living under Muslim rule. World History Project content is CC BY-NC 4.0.
   Facts here come from those readings. English only, AP level.
   Map: x 0-2 the Nile (west). North-west: the house of learning (D, door 8,3) and the Nile docks (k).
   North-east: the great mosque (D, door 20,3), the market (m), the Mamluk barracks (Q/h, door 27,2).
   South-west: sugarcane fields (e) by the Nile, a water wheel (O) and a farmhouse (door 11,12).
   South-east: city streets, a merchant's house (door 19,13), the east wall (W) with its gate on row 15,
   and the desert caravan ground (x 25-30) where pilgrims set out for Mecca. */
window.EPISODE = {
  id: '1.2',
  realm: 1,
  sol: 'AP 1.2',
  style: 'islam',
  weather: { sky: 'heat', time: 'day' },
  title: { en: 'Developments in Dar al-Islam' },
  place: { en: 'Cairo, Mamluk Sultanate, 1300' },
  intro: [
    { en: 'The Void blurred the page on Dar al-Islam. Cairo is forgetting how Islam kept growing after Baghdad fell!' },
    { en: 'Talk to the 4 people here, read the 2 sources on the lecterns, help a pilgrim from Morocco, then wake the time stone.' }
  ],
  scenes: {
    at: [31.24, 30.04],
    year: 1300,
    start: [
      { en: 'By 1300 the Abbasid Caliphate was gone. A Mongol army sacked Baghdad in 1258.' },
      { en: 'Egypt was ruled by the Mamluk Sultanate, a Turkic dynasty, from Cairo.' },
      { en: 'Yet Dar al-Islam, "the House of Islam," kept spreading across Afro-Eurasia.' }
    ],
    guess: {
      q: { en: 'Baghdad, the center of the Islamic Golden Age, fell in 1258. Did Islam stop spreading?' },
      choices: [{ t: { en: '🌍 It kept spreading' }, ok: true }, { t: { en: '🕯️ It faded away' } }],
      why: { en: 'Islam spread further than ever, even across the lands the Mongols conquered.' }
    },
    page: { en: 'Today about two-thirds of the world\'s Muslims live outside the Middle East.' },
    next: {
      q: { en: 'Next: South and Southeast Asia. Did Islam reach India and the islands of Southeast Asia?' },
      choices: [{ t: { en: 'Yes, it did' }, ok: true }, { t: { en: 'No, never' } }],
      why: { en: 'Yes. Between 1000 and 1500 Dar al-Islam reached India and Southeast Asia. You go there next.' }
    }
  },
  start: [15, 5],
  map: [
    '==~TTTTTTTTTTTTTTTTTTTTTTTTrrrrr',
    '==~...DDDDDD.....DDDDDD..QQQQ.sr',
    '==~...DDDDDD.....DDDDDD..hhdh.sr',
    '==~...DDdDDD..x..DDDdDD....,..sr',
    '==~k..........l...............sr',
    '==~klllllllllllllllllllllllll.sr',
    '==~k..........l........l......sr',
    '==~...T.......l..mlmlm.l..T...sr',
    '==~...........l..lllll.l......sr',
    '==~...........l..mlmlm.l..,...sr',
    '==~p..........l........l....p.sr',
    '==~.O.....RRRxl........lW......r',
    '==~.:.....hdh.l...RRR..lW..u...r',
    '==~.:::::::::.l...hdh..lWs.u..sr',
    '==~.:eeeeeee:.l........lWsxsuusr',
    '==~.:eeeeeee:.lllllllllll:::::sr',
    '==~.:eeeeeee:.l.x......lWsssus.r',
    '==~.:eeeeeee:.l..JJ.J..lWs.ss.sr',
    '==~.:eeeeeee:.l........lWssssssr',
    '==~.:::::::::.llllllllllWssuss.r',
    '==~p..,....p..........p.Ws..s..r',
    '==~TTTTTTTTTTTTTTTTTTTTTWrrrrrrr'
  ],
  words: {
    'dar al-islam': { en: '"the House of Islam": the lands where most people are Muslim and the rulers practice Islam' },
    'caliphate': { en: 'an Islamic empire led by a caliph; the Abbasid Caliphate (750–1258) ruled from Baghdad' },
    'house of wisdom': { en: 'the center of learning and research the Abbasid caliphs built in Baghdad' },
    'political fragmentation': { en: 'when the power of one state breaks apart into many separate states and rulers' },
    'golden age': { en: 'the Islamic Golden Age: a time of great learning and invention, from the Abbasids into the 1200s' },
    'turkic': { en: 'about the Turks, pastoral peoples from the steppes of Eurasia who moved west after about 1000' },
    'pastoralist': { en: 'a person who lives by herding animals, moving to find grass and water' },
    'sultanate': { en: 'a state ruled by a sultan; the Mamluk Sultanate ruled Egypt' },
    'universalist': { en: 'open to all: Muslims believed anyone could become a Muslim' },
    'missionary': { en: 'believing it is a duty to spread a faith\'s message to others' },
    'canon of medicine': { en: 'Ibn Sina\'s medical book (1025), still taught in European universities 600 years later' }
  },
  npcs: [
    {
      x: 10, y: 7, name: { en: 'Yusuf' }, role: { en: 'Bookbinder' },
      look: { skin: 3, hair: '#8a8a8a', shirt: '#6a4a8a', robe: true, style: 'short', hat: '#f2f2f2' },
      lines: [
        { en: 'My grandfather bound books in Baghdad, capital of the Abbasid [[caliphate|Caliphate]] (750–1258). In 1258 he fled here to Cairo.' },
        { en: 'From 900 to 1258 the Abbasids slowly declined. Their empire was too large, and foreign invasions, internal revolts and disputes between Sunni and Shia Islam ate away at it.' },
        { en: 'After the 900s the caliphs were often puppets controlled by other rulers. That is [[political fragmentation|political fragmentation]].' },
        { en: 'In 1258 a Mongol army sacked Baghdad, killed the last Abbasid caliph and destroyed the [[house of wisdom|House of Wisdom]]. Yet the Mongol conquests spread Islam further than ever.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Which best explains the decline of Abbasid power BEFORE 1258?' },
        choices: [
          { ok: true, t: { en: 'Too much land, revolts and Sunni–Shia disputes' }, why: { en: 'Yes. Far-flung lands, invasions, revolts and Sunni–Shia disputes wore the empire down from 900 on.' } },
          { t: { en: 'Mongol armies conquering Persia in the 1000s' }, why: { en: 'No. The Mongols came in the 1200s. In the 1000s it was Turkic peoples, like the Seljuks, who moved west.' } },
          { t: { en: 'The loss of Greek books from the House of Wisdom' }, why: { en: 'No. The House of Wisdom was destroyed in 1258, at the very end, after centuries of decline.' } }
        ]
      }
    },
    {
      x: 19, y: 6, name: { en: 'Ibrahim' }, role: { en: 'Physician' },
      look: { skin: 2, hair: '#1b1410', shirt: '#2a6a8a', robe: true, style: 'short', hat: '#e8e0d0' },
      lines: [
        { en: 'I heal the sick with the [[canon of medicine|Canon of Medicine]], written by Ibn Sina in 1025.' },
        { en: 'The [[golden age|Golden Age]] was centered in Baghdad. The Abbasid conquests linked a network of scholars and merchants, so ideas spread quickly across vast distances.' },
        { en: 'Scholars translated Greek works, like those of Socrates and Plato, into Arabic and preserved them. They embraced Indian science and Chinese technology too.' },
        { en: 'And they innovated: Arabic numerals, algebra, zero. The Persian scholar Nasir al-Din al-Tusi wrote on astronomy and mathematics and is remembered for trigonometry.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Which best explains why ideas from so many lands met in Abbasid Baghdad?' },
        choices: [
          { ok: true, t: { en: 'Conquests linked a web of scholars and merchants' }, why: { en: 'Yes. A huge empire tied Greek, Indian and Chinese ideas together, and scholars built on them.' } },
          { t: { en: 'Mongol rulers brought scholars there from China' }, why: { en: 'No. The Mongols destroyed the House of Wisdom in 1258. The network was built by the Abbasid conquests.' } },
          { t: { en: 'European universities sent their Greek books east' }, why: { en: 'No. It went the other way: Greek works survived in Arabic, and Ibn Sina\'s Canon was later taught in Europe for over 600 years.' } }
        ]
      }
    },
    {
      x: 28, y: 4, name: { en: 'Toghan' }, role: { en: 'Mamluk soldier' },
      look: { skin: 1, hair: '#3a2416', shirt: '#8a2a2a', pants: '#3a3a2a', style: 'short', hat: '#c9a24a' },
      lines: [
        { en: 'I serve the Mamluk [[sultanate|Sultanate]], which rules Egypt. Our sultans are a [[turkic|Turkic]] dynasty.' },
        { en: 'Long ago the Turks were [[pastoralist|pastoralists]] on the steppes of Eurasia. In the 1000s and 1100s many migrated west into Central and Southwest Asia and converted to Islam.' },
        { en: 'In those centuries the Turkic Seljuks ruled a huge empire centered in Persia. They adopted the culture of the people they conquered and seemed more Persian than Turkic.' },
        { en: 'Then the Mongol armies of Chinggis Khan swept across Eurasia and defeated Turks, Arabs and many others. Still, Turkic Muslims like us rule Egypt.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Compared with the Arab armies that first spread Islam, Turkic dynasties like the Seljuks were...' },
        choices: [
          { ok: true, t: { en: 'steppe newcomers who converted and took on Persian ways' }, why: { en: 'Yes. They came as pastoralists, converted, and adopted the culture of the lands they conquered.' } },
          { t: { en: 'steppe herders who kept their old ways and their old faith' }, why: { en: 'No. Many Turks converted to Islam, and the Seljuks became more Persian than Turkic.' } },
          { t: { en: 'Abbasid caliphs who ruled from Baghdad until 1258' }, why: { en: 'No. The Seljuk empire was centered in Persia. The Abbasid caliphs, often puppets, stayed in Baghdad.' } }
        ]
      }
    },
    {
      x: 7, y: 19, name: { en: 'Zaynab' }, role: { en: 'Farmer' },
      look: { skin: 4, hair: '#1b1410', shirt: '#2a8a6a', pants: '#3a2a1a', style: 'long' },
      lines: [
        { en: 'We grow sugarcane and cotton here by the Nile. Both came to Dar al-Islam from India.' },
        { en: 'The early empire was huge and its trade links long. Merchants spread sorghum from Africa and rice, cotton and sugarcane from India.' },
        { en: 'Hundreds of other plants and animals were exchanged in all directions. That changed how people grew and ate food in many regions of Afro-Eurasia.' },
        { en: 'The Abbasids combined new irrigation methods from around their empire to grow more. An ox turns our water wheel, like the animal-powered pump the inventor al-Jazari drew.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Which best explains why sugarcane and rice spread across Dar al-Islam?' },
        choices: [
          { ok: true, t: { en: 'The caliphates\' vast lands and trade links' }, why: { en: 'Yes. A huge territory linked by trade moved crops and animals in all directions.' } },
          { t: { en: 'Mongol conquerors carrying them from China' }, why: { en: 'No. Rice, cotton and sugarcane came from India, carried along the early caliphates\' trade links.' } },
          { t: { en: 'Turkic herders bringing them off the steppes' }, why: { en: 'No. The Turks were pastoralists who herded animals. These crops came from India and Africa.' } }
        ]
      }
    },
    {
      doc: true, x: 12, y: 3, icon: '📜',
      name: { en: 'A Visitor from Mars' }, role: { en: 'A historian\'s words' },
      src: { en: 'Marshall Hodgson, historian; quoted in "Dar al-Islam," World History Project' },
      lines: [
        { en: '"In the sixteenth century of our era, a visitor from Mars might well have supposed that the world was on the verge of becoming Muslim."' },
        { en: '"He would have based his judgment partly on the strategic and political advantage of the Muslims, but partly also on the vitality of their general culture."' },
        { en: 'Hodgson was a modern historian looking back, not a person of the time. His imagined Martian is an outsider with no side to take. His point: around 1500, Islam looked like the most dominant force on Earth, through both power and culture.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Sourcing: what is the purpose of Hodgson\'s "visitor from Mars"?' },
        choices: [
          { ok: true, t: { en: 'To show Islam\'s strength c. 1500 to an outsider' }, why: { en: 'Yes. An outsider\'s eye lets him judge Islam\'s reach in 1500: political advantage AND a lively culture.' } },
          { t: { en: 'To argue Islam\'s power rested only on its armies' }, why: { en: 'No. He names two causes: political and strategic advantage, but also the vitality of Muslim culture.' } },
          { t: { en: 'To record what a traveler saw in Baghdad in 1258' }, why: { en: 'No. Hodgson is a modern historian, and his Martian looks at the 1500s, long after Baghdad fell.' } }
        ]
      }
    },
    {
      doc: true, x: 23, y: 3, icon: '📖',
      name: { en: 'Fragmentation and Expansion' }, role: { en: 'Reading' },
      src: { en: 'Adapted from "Dar al-Islam" by Bennett Sherry, World History Project (Khan Academy)' },
      lines: [
        { en: 'From 900 to 1258, the Abbasid Caliphate slowly declined. Foreign invasions, internal revolts and disputes between Sunni and Shia Islam ate away at the empire. After the tenth century, the caliphs in Baghdad were often merely puppets controlled by some other ruler.' },
        { en: 'In the eleventh and twelfth centuries, Turkic pastoralists from the Eurasian steppes migrated west, and many converted to Islam. In 1258 a Mongol army sacked Baghdad and killed the last Abbasid caliph. But the Mongol conquests actually helped spread Islam further than ever.' },
        { en: 'After the Mongol Empire collapsed in the fourteenth century, Turkic dynasties again rose to power. Timur, of Turkic and Mongol descent, conquered an empire from India to Anatolia. Between 1000 and 1500, Dar al-Islam nearly doubled in size, reaching sub-Saharan Africa, the East African coast, India and the islands of Southeast Asia.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Which best describes change and continuity in Dar al-Islam, 1200–1450?' },
        choices: [
          { ok: true, t: { en: 'Power split among states; the faith kept spreading' }, why: { en: 'Yes. Political unity was lost, but Islam reached new peoples, from Africa to Southeast Asia.' } },
          { t: { en: 'A restored caliph reunited Muslims as the faith spread' }, why: { en: 'No. The last Abbasid caliph was killed in 1258. Turkic and other dynasties ruled separate states.' } },
          { t: { en: 'Power split among many states as the faith declined' }, why: { en: 'No. Power did split, but Dar al-Islam nearly doubled in size between 1000 and 1500.' } }
        ]
      }
    }
  ],
  houses: [
    { at: [8, 3], name: { en: 'Teacher Hasan' }, look: { skin: 3, hair: '#d8d8d8', shirt: '#3a5a3a', robe: true, style: 'short', hat: '#f2f2f2' },
      lines: [{ en: 'Students here learn Islamic law, mathematics and medicine, all in Arabic.' }, { en: 'Arabic lets a scholar from Morocco talk with one from India.' }] },
    { at: [20, 3], name: { en: 'Bilal, mosque keeper' }, look: { skin: 5, hair: '#1b1410', shirt: '#e8e0d0', robe: true, style: 'short', hat: '#f2f2f2' },
      lines: [{ en: 'Muslims from many lands pray here side by side.' }, { en: 'Some of them are pilgrims, on their way to Mecca.' }] },
    { at: [27, 2], name: { en: 'Officer Sungur' }, look: { skin: 1, hair: '#2b1d14', shirt: '#7a2a2a', pants: '#2a2a3a', style: 'short', hat: '#c9a24a' },
      lines: [{ en: 'These barracks house soldiers of the Mamluk Sultanate.' }, { en: 'Our ancestors rode horses on the Eurasian steppes before they moved west.' }] },
    { at: [11, 12], name: { en: 'Zaynab\'s son Ali' }, look: { skin: 4, hair: '#1b1410', shirt: '#c9a24a', pants: '#3a2a1a', style: 'short' },
      lines: [{ en: 'The Nile waters all of these fields.' }, { en: 'Our cotton is spun and woven into cloth in the city.' }] },
    { at: [19, 13], name: { en: 'Merchant Sara' }, look: { skin: 2, hair: '#3a2416', shirt: '#8e5bd6', robe: true, style: 'bun' },
      lines: [{ en: 'I am Jewish. Under Muslim rulers, many Jews and Christians keep their own faith.' }, { en: 'Goods and ideas move along these trade routes, from Africa to India.' }] }
  ],
  signs: [
    { x: 14, y: 3, text: { en: 'HOUSE OF LEARNING · Scholars study medicine, mathematics and Islamic law here, in Arabic.' } },
    { x: 13, y: 11, text: { en: 'NILE FIELDS · Sugarcane, cotton and rice came to Dar al-Islam from India.' } },
    { x: 16, y: 16, text: { en: 'CAIRO · Capital of the Mamluk Sultanate, a Turkic dynasty that rules Egypt.' } },
    { x: 26, y: 14, text: { en: 'CARAVAN GROUND · Pilgrims gather here to cross the desert to Mecca.' } }
  ],
  finds: [
    { clueAt: [21, 16], at: [22, 18], decor: 'feather', clue: { en: 'From this note, walk 1 step east and 2 steps south, past the flat-roofed houses.' },
      text: { en: 'A scholar\'s pen! With pens like this, Arabic numerals, algebra and zero spread far beyond Dar al-Islam.' } }
  ],
  scraps: [[3, 1], [30, 20], [4, 20]],
  smudges: [[9, 9], [21, 19]],
  quest: {
    stat: 'hei',
    title: { en: 'The Pilgrim\'s Map' },
    giver: {
      x: 26, y: 9, name: { en: 'Idris' }, role: { en: 'Pilgrim from Morocco' },
      look: { skin: 3, hair: '#1b1410', shirt: '#e8e0d0', robe: true, style: 'short', hat: '#f2f2f2' },
      lines: [
        { en: 'Peace be upon you! Islam is [[universalist|universalist]] and [[missionary|missionary]], like Christianity and Buddhism: anyone may become Muslim, and Muslims spread its message.' },
        { en: 'They say a Christian merchant from Venice, Marco Polo, crossed Asia to China. Everywhere he went he was a stranger.' },
        { en: 'Not me, a Moroccan scholar of Islamic law! From Morocco to India, people share Arabic, my beliefs and my law. I could even serve as a judge far from home.' },
        { en: 'I am going to Mecca, but the Ink Thief tore my map! Ask Mina the scribe.' }
      ],
      wait: { en: 'Mina writes letters by the Nile docks, in the north-west of the city.' },
      thanks: { en: 'My map is whole! One shared world of faith, law and Arabic, from Morocco to India. Thank you.' }
    },
    contact: {
      x: 5, y: 9, name: { en: 'Mina' }, role: { en: 'Christian scribe' },
      look: { skin: 2, hair: '#2b1d14', shirt: '#2f5f9a', pants: '#3a2a3a', style: 'long' },
      lines: [
        { en: 'I am a Christian. I write letters in Arabic for anyone. Our rulers are Muslim, but the people here follow many faiths, including Judaism and Christianity.' },
        { en: 'Since the early caliphates, many non-Muslims were allowed, even encouraged, to keep their own religions.' },
        { en: 'The Ink Thief ran off with Idris\'s map in 3 pieces. He left a riddle for each. Follow them!' }
      ]
    },
    action: {
      type: 'chase',
      at: [28, 19],
      hops: [[27, 12], [30, 16]],
      name: { en: 'The Ink Thief' },
      taunt: { en: 'The Ink Thief sneers: "No caliph, no empire! A world this big can never be one."' },
      clues: [
        { t: { en: 'Piece 1 is where scholars keep Greek learning alive in Arabic. Look north of the main street, near the Nile.' },
          zones: [{ x: 4, y: 4, w: 9, h: 1 }],
          noBy: [
            { x: 16, y: 4, w: 8, h: 1, t: { en: 'This is the great mosque, a place of prayer. The house of learning is farther west, toward the Nile.' } },
            { x: 17, y: 7, w: 5, h: 3, t: { en: 'This is the market. Scholars study in the house of learning, to the north-west.' } }],
          found: { en: 'Piece 1 was at the house of learning! Greek books live on here, in Arabic.' } },
        { t: { en: 'Piece 2 is where a crop from India grows tall beside the Nile. Go south, past the water wheel.' },
          zones: [{ x: 4, y: 13, w: 9, h: 7 }],
          noBy: [
            { x: 17, y: 7, w: 5, h: 3, t: { en: 'Sugar is sold in the market, but the cane grows in the fields by the Nile, to the south-west.' } }],
          found: { en: 'Piece 2 was in the sugarcane! Merchants carried it here from India.' } },
        { t: { en: 'Piece 3 waits where pilgrims gather for the long road to Mecca. Leave the city by the east gate, into the desert.' },
          zones: [{ x: 25, y: 11, w: 6, h: 10 }],
          noBy: [
            { x: 3, y: 4, w: 1, h: 3, t: { en: 'Boats here sail the Nile. The road to Mecca starts on the desert side, east of the city wall.' } }],
          found: { en: 'Piece 3 was at the caravan ground, where pilgrims from many lands set out together.' } }
      ],
      win: { en: 'Caught! The Ink Thief drops the last piece. Idris\'s map is whole again.' },
      item: { icon: '🗺️', name: { en: 'Idris\'s map of Dar al-Islam' } }
    }
  },
  challenge: {
    at: [21, 14], type: 'claim', stat: 'loc',
    title: { en: 'Did Dar al-Islam fall apart?' },
    intro: { en: 'The Void claims Islam ended when Baghdad fell. Pick the claim the evidence best supports, then back it up with one piece of evidence about rulers and one about belief and culture.' },
    options: [
      { icon: '🧩', name: { en: 'Power split apart, but Islam spread' }, desc: { en: 'Many rulers after 1258, yet Dar al-Islam kept growing' },
        result: { en: 'Strong claim! Political fragmentation and religious expansion happened at the same time, 1200–1450.' } },
      { icon: '🔥', name: { en: 'The Mongols wiped out Islam' }, desc: { en: 'After Baghdad fell, Islam faded away' },
        result: { en: 'The evidence does not support this claim.' } },
      { icon: '👑', name: { en: 'One caliph still ruled it all' }, desc: { en: 'Dar al-Islam stayed a single empire under Baghdad' },
        result: { en: 'The evidence does not support this claim.' } }
    ],
    kinds: [
      { id: 'gov', label: { en: 'Evidence about rulers and states' } },
      { id: 'cdi', label: { en: 'Evidence about belief and culture' } }
    ],
    reasons: [
      { kind: 'gov', fits: [0, 1], t: { en: 'In 1258 a Mongol army sacked Baghdad and killed the last Abbasid caliph.' },
        why: { en: 'This is true, and it is why no single caliph ruled Dar al-Islam after 1258.' } },
      { kind: 'gov', fits: [0], t: { en: 'Turkic dynasties such as the Seljuks and the Mamluks built their own states.' },
        why: { en: 'This is true. Many separate states show power was split, and they were Muslim states, so Islam did not fade.' } },
      { kind: 'gov', fits: [], t: { en: 'One caliph in Baghdad still commanded every Muslim army in 1300.' },
        why: { en: 'This is false. The caliphs were often puppets after the 900s, and the last Abbasid caliph was killed in 1258.' } },
      { kind: 'cdi', fits: [0], t: { en: 'Between 1000 and 1500, Dar al-Islam nearly doubled in size.' },
        why: { en: 'This is true, but it shows Islam kept growing, without one empire to rule it all.' } },
      { kind: 'cdi', fits: [0], t: { en: 'Many Turks converted, and the Mongol conquests spread Islam even further.' },
        why: { en: 'This is true, but it shows Islam reaching new peoples while no single ruler held power.' } },
      { kind: 'cdi', fits: [], t: { en: 'After 1258, scholars and merchants stopped using Arabic.' },
        why: { en: 'This is false. Arabic stayed the shared language of scholars and merchants from Morocco to India.' } }
    ],
    mismatch: { en: 'That evidence does not back up the claim you picked.' },
    success: { en: 'Claim and evidence match! Dar al-Islam split apart politically but kept growing as a shared world of faith and culture.' }
  },
  boss: {
    at: [27, 8], stat: 'hei', need: 3,
    name: { en: 'The Void' },
    appear: { en: 'The Void has opened by the barracks. The dust is flowing into it.' },
    taunt: { en: 'Caliphs fall, cities burn, books drown in rivers. I am what remains. Prove the faith outlived them.' },
    win: { en: 'The Void closes over Cairo. The page on Dar al-Islam floats down into your hands.' },
    questions: [
      {
        stim: { text: { en: '"In the sixteenth century of our era, a visitor from Mars might well have supposed that the world was on the verge of becoming Muslim."' }, src: { en: 'Marshall Hodgson, historian; quoted in "Dar al-Islam," World History Project' } },
        q: { en: 'Which development from c. 1000 to 1500 would best support the historian\'s claim?' },
        choices: [{ en: 'Dar al-Islam nearly doubled, reaching India and Southeast Asia' }, { en: 'The Seljuks restored the full power of the Abbasid caliphs' }, { en: 'Turkic converts made Baghdad the capital of a reunited caliphate' }, { en: 'The Mongol conquests confined Islam to Egypt and Arabia' }],
        answer: 0,
        why: { en: 'Between 1000 and 1500 Dar al-Islam nearly doubled, reaching sub-Saharan Africa, the East African coast, India and Southeast Asia.' }
      },
      {
        stim: { text: { en: '"He would have based his judgment partly on the strategic and political advantage of the Muslims, but partly also on the vitality of their general culture."' }, src: { en: 'Marshall Hodgson, historian; quoted in "Dar al-Islam," World History Project' } },
        q: { en: 'The historian\'s point of view is best described as which of the following?' },
        choices: [{ en: 'Islam\'s strength c. 1500 came from both power and culture' }, { en: 'Islam\'s strength c. 1500 came mainly from military conquest' }, { en: 'Islam\'s culture had faded once the Abbasid Caliphate fell' }, { en: 'Islam\'s power by 1500 was limited to the Arab lands' }],
        answer: 0,
        why: { en: 'Hodgson names two causes: the Muslims\' strategic and political advantage AND the vitality of their culture.' }
      },
      {
        stim: { text: { en: 'From 900 to 1258, the Abbasid Caliphate slowly declined. Foreign invasions, internal revolts, and disputes between Sunni and Shia Islam ate away at the empire.' }, src: { en: 'Adapted from "Dar al-Islam" by Bennett Sherry, World History Project' } },
        q: { en: 'The excerpt most directly reflects which historical process?' },
        choices: [{ en: 'The political fragmentation of a large empire' }, { en: 'The spread of Islam into Southeast Asia and India' }, { en: 'The preservation of Greek texts in Arabic' }, { en: 'The exchange of crops along trade routes' }],
        answer: 0,
        why: { en: 'Invasions, revolts and Sunni–Shia disputes broke Abbasid power apart. After the 900s the caliphs were often puppets.' }
      },
      {
        stim: { text: { en: 'Like other Turkic dynasties, the Seljuks readily adopted the culture of the peoples they conquered, soon seeming more Persian than Turkic.' }, src: { en: 'Adapted from "Dar al-Islam" by Bennett Sherry, World History Project' } },
        q: { en: 'The passage best supports the claim that Turkic conquerors in Dar al-Islam...' },
        choices: [{ en: 'replaced Persian culture with steppe traditions' }, { en: 'took on the culture of the lands they ruled' }, { en: 'ruled as Abbasid caliphs from Baghdad' }, { en: 'returned to their old faiths after conquest' }],
        answer: 1,
        why: { en: 'The Seljuks, steppe pastoralists who converted to Islam, ruled from Persia and became "more Persian than Turkic."' }
      },
      {
        stim: { title: { en: 'Crops that spread through Dar al-Islam' }, rows: [[{ en: 'Crop' }, { en: 'Came from' }], [{ en: 'Sorghum' }, { en: 'Africa' }], [{ en: 'Rice, cotton, sugarcane' }, { en: 'India' }]], src: { en: 'From "Dar al-Islam" by Bennett Sherry, World History Project' } },
        q: { en: 'Which of the following best explains the pattern shown in the table?' },
        choices: [{ en: 'Mongol conquests linking China with Persia' }, { en: 'Turkic pastoralists migrating west from the steppes' }, { en: 'The early caliphates\' vast lands and trade links' }, { en: 'Scholars translating Greek farming books' }],
        answer: 2,
        why: { en: 'The early caliphates\' huge territory and trade links moved hundreds of plants and animals in all directions.' }
      },
      {
        stim: { text: { en: 'Ibn Sina\'s Canon of Medicine was first published in 1025. Over six hundred years later, it was still being taught in European universities.' }, src: { en: 'Adapted from "Dar al-Islam" by Bennett Sherry, World History Project' } },
        q: { en: 'This evidence best supports the claim that scholars of the Islamic Golden Age...' },
        choices: [{ en: 'mostly preserved Greek texts without adding to them' }, { en: 'worked only inside the House of Wisdom in Baghdad' }, { en: 'studied Islamic law rather than the sciences' }, { en: 'shaped learning far beyond Dar al-Islam' }],
        answer: 3,
        why: { en: 'Muslim scholars preserved AND innovated, and their medicine, algebra and numerals spread far, even to Europe.' }
      },
      {
        stim: { text: { en: 'Ibn Battuta, a Moroccan scholar trained in Islamic law, was so at home in this cultural world that he was able to work as a judge thousands of miles from home. Marco Polo, a Christian merchant from Venice, was a stranger everywhere he traveled.' }, src: { en: 'Adapted from "Dar al-Islam" by Bennett Sherry, World History Project' } },
        q: { en: 'Compared with Marco Polo\'s travels, Ibn Battuta\'s travels best show...' },
        choices: [{ en: 'one empire ruling every land from Morocco to India' }, { en: 'a shared world of Arabic, Islamic beliefs and law' }, { en: 'that Venice was the center of Indian Ocean trade' }, { en: 'that Mongol rulers appointed judges across Asia' }],
        answer: 1,
        why: { en: 'No single empire ruled Dar al-Islam, but Arabic, shared beliefs and Islamic law made a scholar at home from Morocco to India.' }
      },
      {
        stim: { text: { en: 'Although ruled by Muslims, these societies often had populations that followed a wide array of faiths, including Judaism and Christianity.' }, src: { en: 'Adapted from "Unit 1 Introduction: The Global Tapestry, c. 1200 to 1450," World History Project' } },
        q: { en: 'Which of the following best explains the pattern described in the excerpt?' },
        choices: [{ en: 'Islam was not a missionary or universalist faith' }, { en: 'Many non-Muslims could keep their own religions' }, { en: 'Christian rulers governed most cities in Egypt' }, { en: 'Muslim rulers governed only Arab peoples' }],
        answer: 1,
        why: { en: 'Islam was a missionary faith, but many non-Muslims in Dar al-Islam were allowed, even encouraged, to keep their own religions.' }
      }
    ]
  },
  learned: [
    { en: 'After 900 the Abbasid [[caliphate|Caliphate]] broke apart, and in 1258 the Mongols sacked Baghdad: [[political fragmentation|political fragmentation]].' },
    { en: 'Yet [[dar al-islam|Dar al-Islam]] nearly doubled from 1000 to 1500, as [[turkic|Turkic]] dynasties like the Seljuks and Mamluks built new Muslim states.' },
    { en: 'Scholars preserved Greek learning and added algebra, zero and medicine; trade spread crops; Arabic and Islamic law joined a vast cultural world.' }
  ],
  reflect: {
    q: { en: 'AP practice: Explain one way Dar al-Islam continued to expand after the political fragmentation of the Abbasid Caliphate.' },
    starter: { en: 'One way Dar al-Islam kept expanding after the Abbasids lost power was' }
  }
};
