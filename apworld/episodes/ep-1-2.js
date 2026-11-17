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
    { en: 'The Grump blurred the page on Dar al-Islam. Cairo is forgetting how Islam kept growing after Baghdad fell!' },
    { en: 'Talk to the 4 people here, help a pilgrim from Morocco, then wake the time stone.' }
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
        { en: 'My grandfather bound books in Baghdad, capital of the Abbasid [[caliphate|Caliphate]]. In 1258 he fled here to Cairo.' },
        { en: 'That year a Mongol army sacked Baghdad. They killed the last Abbasid caliph and destroyed the [[house of wisdom|House of Wisdom]].' },
        { en: 'But the caliphs had been weak for centuries. After the 900s they were often puppets of other rulers. That is [[political fragmentation|political fragmentation]].' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'What did the Mongol sack of Baghdad in 1258 bring to an end?' },
        choices: [
          { ok: true, t: { en: 'The rule of the Abbasid caliphs' }, why: { en: 'Yes. Abbasid power, already split apart, ended. But Islam as a faith kept growing.' } },
          { t: { en: 'Islam as a religion in Asia' }, why: { en: 'No. The Mongol conquests actually helped spread Islam further than ever.' } },
          { t: { en: 'Trade across all of Afro-Eurasia' }, why: { en: 'No. Merchants and scholars kept moving across Dar al-Islam after 1258.' } }
        ]
      }
    },
    {
      x: 19, y: 6, name: { en: 'Ibrahim' }, role: { en: 'Physician' },
      look: { skin: 2, hair: '#1b1410', shirt: '#2a6a8a', robe: true, style: 'short', hat: '#e8e0d0' },
      lines: [
        { en: 'I heal the sick with the [[canon of medicine|Canon of Medicine]], written by Ibn Sina in 1025.' },
        { en: 'In the [[golden age|Golden Age]], scholars translated Greek books, like Plato\'s, into Arabic. That is how many were preserved.' },
        { en: 'They also built new ideas: Arabic numerals, algebra, zero. The Persian scholar al-Tusi is remembered for trigonometry.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Which best describes the scholars of the Islamic Golden Age?' },
        choices: [
          { ok: true, t: { en: 'They kept old knowledge and added new' }, why: { en: 'Yes. They preserved Greek texts and innovated too. Ibn Sina\'s Canon was taught in European universities for centuries.' } },
          { t: { en: 'They only copied out old Greek books' }, why: { en: 'No. They did preserve Greek books, but they also created algebra and trigonometry.' } },
          { t: { en: 'They refused all ideas from other lands' }, why: { en: 'No. They embraced Greek philosophy, Indian science and Chinese technology.' } }
        ]
      }
    },
    {
      x: 28, y: 4, name: { en: 'Toghan' }, role: { en: 'Mamluk soldier' },
      look: { skin: 1, hair: '#3a2416', shirt: '#8a2a2a', pants: '#3a3a2a', style: 'short', hat: '#c9a24a' },
      lines: [
        { en: 'I serve the Mamluk [[sultanate|Sultanate]], which rules Egypt. Our sultans are a [[turkic|Turkic]] dynasty.' },
        { en: 'Long ago the Turks were [[pastoralist|pastoralists]] on the steppes of Eurasia. In the 1000s and 1100s many moved west and converted to Islam.' },
        { en: 'Turks like the Seljuks conquered huge lands and ruled from Persia. They took on Persian ways, until they seemed more Persian than Turkic.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'How did Turkic peoples change Dar al-Islam after 1000?' },
        choices: [
          { ok: true, t: { en: 'They converted and built Muslim states' }, why: { en: 'Yes. Seljuks, Mamluks and other Turkic dynasties ruled large Muslim states.' } },
          { t: { en: 'They wiped out Islam wherever they went' }, why: { en: 'No. Many Turks converted to Islam and then ruled as Muslims.' } },
          { t: { en: 'They forced all of Persia to herd' }, why: { en: 'No. The Seljuks adopted the Persian culture of the people they conquered.' } }
        ]
      }
    },
    {
      x: 7, y: 19, name: { en: 'Zaynab' }, role: { en: 'Farmer' },
      look: { skin: 4, hair: '#1b1410', shirt: '#2a8a6a', pants: '#3a2a1a', style: 'long' },
      lines: [
        { en: 'We grow sugarcane and cotton here by the Nile. Both came to Dar al-Islam from India.' },
        { en: 'The empire was huge and its trade links long. Merchants spread sorghum from Africa and rice from India. Hundreds of plants moved like this.' },
        { en: 'The Abbasids also combined irrigation methods from across their lands. An ox turns our water wheel, like the pump the inventor al-Jazari drew.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why did crops like sugarcane spread across Dar al-Islam?' },
        choices: [
          { ok: true, t: { en: 'A big empire\'s trade links carried them' }, why: { en: 'Yes. A huge territory linked by trade moved crops and animals in all directions.' } },
          { t: { en: 'Every farm invented its own crops' }, why: { en: 'No. Sugarcane, rice and cotton were carried from India by merchants.' } },
          { t: { en: 'The Nile flooded the seeds out of Arabia' }, why: { en: 'No. These crops came from India and Africa along trade routes.' } }
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
        { en: 'Peace be upon you! I study Islamic law in Morocco, and I am going to Mecca.' },
        { en: 'Islam is [[universalist|universalist]] and [[missionary|missionary]], like Christianity and Buddhism: anyone may become Muslim, and Muslims spread its message.' },
        { en: 'From Morocco to India, people speak Arabic and share my law, so I feel at home everywhere. But the Ink Thief tore my map! Ask Mina the scribe.' }
      ],
      wait: { en: 'Mina writes letters by the Nile docks, in the north-west of the city.' },
      thanks: { en: 'My map is whole! One shared world of faith, law and Arabic, from Morocco to India. Thank you.' }
    },
    contact: {
      x: 5, y: 9, name: { en: 'Mina' }, role: { en: 'Christian scribe' },
      look: { skin: 2, hair: '#2b1d14', shirt: '#2f5f9a', pants: '#3a2a3a', style: 'long' },
      lines: [
        { en: 'I am a Christian. I write letters in Arabic for anyone. Many non-Muslims here keep their own religion.' },
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
    intro: { en: 'The Grump claims Islam ended when Baghdad fell. Pick the claim the evidence best supports, then back it up with one piece of evidence about rulers and one about belief and culture.' },
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
    name: { en: 'The Sandstorm Grump' },
    appear: { en: 'The Sandstorm Grump is hiding in the dust by the barracks!' },
    taunt: { en: 'No caliph, no empire... so no Dar al-Islam! Prove me wrong.' },
    win: { en: 'The dust settles over Cairo. The page on Dar al-Islam floats down into your hands!' },
    questions: [
      {
        stim: { text: { en: '"In the sixteenth century of our era, a visitor from Mars might well have supposed that the world was on the verge of becoming Muslim."' }, src: { en: 'Marshall Hodgson, historian, quoted in "Dar al-Islam," World History Project' } },
        q: { en: 'Which development from c. 1000 to 1500 best supports the historian\'s view?' },
        choices: [{ en: 'Dar al-Islam nearly doubled in size' }, { en: 'One caliph united every Muslim state' }, { en: 'Islam stayed inside the Arabian Peninsula' }, { en: 'The Mongols ended Islam in their empire' }],
        answer: 0,
        why: { en: 'Between 1000 and 1500 Dar al-Islam nearly doubled, reaching sub-Saharan Africa, East Africa, India and Southeast Asia.' }
      },
      {
        stim: { text: { en: 'After the tenth century, the Abbasid caliphs in Baghdad were often merely puppets controlled by some other ruler.' }, src: { en: 'Adapted from "Dar al-Islam," World History Project' } },
        q: { en: 'The excerpt best reflects which historical process?' },
        choices: [{ en: 'The political fragmentation of the caliphate' }, { en: 'The spread of new crops from India' }, { en: 'The rise of a single all-powerful caliph' }, { en: 'The translation of Greek books into Arabic' }],
        answer: 0,
        why: { en: 'Puppet caliphs show that the Abbasids had lost real power. Their empire had broken into many states.' }
      },
      {
        q: { en: 'Which best explains how Turkic peoples affected Dar al-Islam from c. 1000 to 1450?' },
        choices: [{ en: 'They converted and founded Muslim states' }, { en: 'They ended Islam in Southwest Asia' }, { en: 'They kept the Abbasid caliphs fully in power' }, { en: 'They refused to adopt any local culture' }],
        answer: 0,
        why: { en: 'Many Turks converted and built states like the Seljuk Empire and the Mamluk Sultanate, adopting local, often Persian, culture.' }
      },
      {
        stim: { title: { en: 'Crops spread through Dar al-Islam' }, rows: [[{ en: 'Crop' }, { en: 'Came from' }], [{ en: 'Sorghum' }, { en: 'Africa' }], [{ en: 'Rice, cotton, sugarcane' }, { en: 'India' }]], src: { en: 'From "Dar al-Islam," World History Project' } },
        q: { en: 'Which best explains the spread of crops shown in the table?' },
        choices: [{ en: 'A huge empire with long trade links' }, { en: 'Farmers who stopped irrigating fields' }, { en: 'The Mongol sack of Baghdad in 1258' }, { en: 'A ban on trade with Africa and India' }],
        answer: 0,
        why: { en: 'The early caliphates\' vast territory and trade links moved hundreds of plants and animals in all directions.' }
      },
      {
        stim: { text: { en: 'Ibn Sina\'s Canon of Medicine was first published in 1025. Over six hundred years later, it was still being taught in European universities.' }, src: { en: 'Adapted from "Dar al-Islam," World History Project' } },
        q: { en: 'This evidence best shows that scholars in Dar al-Islam...' },
        choices: [{ en: 'shaped learning far beyond Dar al-Islam' }, { en: 'copied old books but added nothing of their own' }, { en: 'studied religious law and nothing else' }, { en: 'kept all of their knowledge a secret' }],
        answer: 0,
        why: { en: 'Muslim scholars both preserved and innovated. Their medicine, algebra and numerals spread far, even to Europe.' }
      },
      {
        stim: { text: { en: 'Everywhere Marco Polo, a Christian merchant from Venice, traveled, he was a stranger. Ibn Battuta, a Muslim scholar from Morocco, found himself at home everywhere he traveled.' }, src: { en: 'Adapted from "Dar al-Islam," World History Project' } },
        q: { en: 'Which best explains the difference between the two travelers\' experiences?' },
        choices: [{ en: 'Dar al-Islam shared Arabic, beliefs and law' }, { en: 'Ibn Battuta never left the land of Morocco' }, { en: 'Marco Polo traveled only inside Europe' }, { en: 'One caliph ruled every land Ibn Battuta saw' }],
        answer: 0,
        why: { en: 'Across Dar al-Islam, scholars and merchants spoke Arabic and shared beliefs and law. A scholar of Islamic law felt at home.' }
      },
      {
        q: { en: 'Which statement best describes many non-Muslims living in Dar al-Islam?' },
        choices: [{ en: 'They were allowed to keep their religions' }, { en: 'They were all forced to convert at once' }, { en: 'They were banned from all cities and markets' }, { en: 'They ruled the Mamluk Sultanate' }],
        answer: 0,
        why: { en: 'Muslim rulers governed Christians, Jews and others, and many were allowed, even encouraged, to keep their own faith.' }
      },
      {
        q: { en: 'Like Christianity and Buddhism, Islam was a universalist, missionary faith. This means Muslims believed...' },
        choices: [{ en: 'anyone could join, and they should spread it' }, { en: 'only Arabs could ever become Muslims' }, { en: 'their faith should stay a secret' }, { en: 'each city needed its very own different faith' }],
        answer: 0,
        why: { en: 'Muslims believed anyone could become Muslim and that it was their duty to spread the message of Islam.' }
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
