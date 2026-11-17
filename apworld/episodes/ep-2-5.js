/* HISTORYWALKER · Episode 2.5 · Cultural Consequences of Connectivity (AP World Topic 2.5, c. 1200–1450)
   A caravan oasis on the pilgrim road through Arabia, in 1325, where pilgrims from across Afro-Eurasia (Mansa Musa of
   Mali's caravan among them) rest on their way to the hajj. No holy city or holy site is shown; only a plain roadside mosque.
   Content source: Khan Academy, AP World History (World History Project), Unit 2 Lesson "Cultural Consequences of
   Connectivity": "Trade, Technology, and Religion in Afro-Eurasia 1200–1450" (Trevor Getz), "Contextualization –
   Introduction", "Contextualization: Mansa Musa", "Rumi: Graphic Biography", "Mansa Musa and Islam in Africa" (video page);
   and the Unit 2 overview: "Unit 2 Introduction: Networks of Exchange 1200 to 1450" (Trevor Getz), "Vocabulary Match-Up".
   World History Project content is CC BY-NC 4.0. Facts here come from those readings. English only, AP level. */
window.EPISODE = {
  id: '2.5',
  realm: 2,
  sol: 'AP 2.5',
  style: 'islam',
  weather: { sky: 'heat', time: 'day' },
  title: { en: 'Cultural Consequences of Connectivity' },
  place: { en: 'A caravan oasis on the pilgrim road, Arabia, 1325' },
  intro: [
    { en: 'The Grump blew dust over the page on cultural exchange. This oasis on the pilgrim road is forgetting how ideas travel with trade!' },
    { en: 'Talk to the 4 people here, help a young traveler, then wake the time stone.' }
  ],
  scenes: {
    at: [38.5, 25.5],
    year: 1325,
    start: [
      { en: 'In 1325, caravans of pilgrims rest at this Arabian oasis on the road to Mecca.' },
      { en: 'Every year, Muslim pilgrims from across Afro-Eurasia travel to Mecca for the hajj.' },
      { en: 'Around 1325, Mansa Musa of Mali made this journey of about 3,000 miles.' }
    ],
    guess: {
      q: { en: 'Mansa Musa traveled about 3,000 miles to reach Mecca. Why do you think he went?' },
      choices: [{ t: { en: '🕋 Pilgrimage' }, ok: true }, { t: { en: '⚔️ Conquest' } }],
      why: { en: 'He went on the hajj, the pilgrimage to Mecca. It is one of the Five Pillars of Islam.' }
    },
    page: { en: 'An Arab book of calculations, al-Jabr, became the basis of modern algebra.' },
    next: {
      q: { en: 'Next: environmental consequences. Could trade routes carry deadly diseases too?' },
      choices: [{ t: { en: 'Yes, they could' }, ok: true }, { t: { en: 'No, only goods' } }],
      why: { en: 'Yes. The Black Death spread along Afro-Eurasian trade routes beginning in the 1340s. You go there next.' }
    }
  },
  start: [16, 10],
  map: [
    'MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM',
    'MK..s......s.KKK:.s.RRRR.sQQQ.KM',
    'Ms.............s:...hhdh..hdhs.M',
    'M....DDDDDD.....:..s......s....M',
    'M.s..DDDDDD.....:::::::::::::::M',
    'M....DDDdDD..s.x:..mmm..mmms...M',
    'M..llllllllll...:s......s......M',
    'M..llllllllll.s.:..mmm..mmm.s..M',
    'M..lllllllllllll:::::::::::::::M',
    'Ms.lxllllllll..s:.....sx.....s.M',
    'MK.llllllllll...:..r.....rs...KM',
    'M.s..r...s......:......s....K.sM',
    'M.....s..::::::::::::::::::s...M',
    'M..O.....:s.....:s...RRRs..KK..M',
    'M......s.:....s.:....hdh...Ks..M',
    'M...x....:.s..r.:.s......s.....M',
    'Ms......s:.....s::::::::.....s.M',
    'M.p~~p...:..O...:..s...:..sKK..M',
    'M.s~~....:......:..QQQ.:....K.sM',
    'M..p..s..::::::::..hdh.:...sKK.M',
    'MK.s......s..p..:s.....:p....K.M',
    'MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM'
  ],
  words: {
    'hajj': { en: 'the pilgrimage to Mecca, one of the Five Pillars of Islam; every Muslim who is able should make it once' },
    'caravan': { en: 'a group of traders or travelers moving together, often across deserts or long trade routes' },
    'network': { en: 'a system of connected routes, people or places used for communication, trade or travel' },
    'diffusion': { en: 'the spread of ideas, goods or technology from one culture to another' },
    'syncretism': { en: 'the blending of different cultural or religious traditions to create something new' },
    'sufi': { en: 'a Muslim mystic; Sufis seek a close, personal relationship with God, often in brotherhoods' },
    'pastoral': { en: 'a way of life based on herding animals rather than farming or city living' },
    'al-jabr': { en: 'the shortened name of a book of calculations by Arab scholars; it became the basis of modern algebra' },
    'broad context': { en: 'big themes, trends or eras around an event; often its long-term causes' },
    'narrow context': { en: 'things closely tied in time and place to an event; often its short-term causes' },
    'delhi sultanate': { en: 'a Muslim state in South Asia built by conquest; it ruled many Hindus' },
    'theravada': { en: 'a monastic form of Buddhism that became popular in Southeast Asia' }
  },
  npcs: [
    {
      x: 10, y: 7, name: { en: 'Yusuf' }, role: { en: 'Mathematician' },
      look: { skin: 3, hair: '#1b1410', shirt: '#2a6a8a', robe: true, hat: '#f2efe6', style: 'short' },
      lines: [
        { en: 'The Islamic world stretches from North Africa to India, between Europe, Africa, Southeast Asia and China. Its merchants must calculate costs and profits.' },
        { en: 'Islam also follows a strict calendar, and we pray facing Mecca. So we use astronomy, divide up the circle and work with fractions.' },
        { en: 'Arab scholars wrote a book of calculations, [[al-jabr|al-Jabr]]. Its ideas are flowing out to neighboring regions, Europe too. That is [[diffusion|diffusion]].' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why did Muslim mathematicians develop astronomy, circle math and fractions?' },
        choices: [
          { ok: true, t: { en: 'Trade, calendar and prayer direction required it' }, why: { en: 'Yes. Merchants counted profits, the calendar was mathematical, and facing Mecca took directional calculations.' } },
          { t: { en: 'Chinese emperors ordered all Muslim scholars to study it' }, why: { en: 'No. The needs came from inside the Islamic world: trade, the calendar and the direction of prayer.' } },
          { t: { en: 'They copied all of it from scholars in Europe' }, why: { en: 'No. The ideas flowed the other way: from the Islamic world out to Europe.' } }
        ]
      }
    },
    {
      x: 22, y: 6, name: { en: 'Ismail' }, role: { en: 'Merchant from Southeast Asia' },
      look: { skin: 3, hair: '#1b1410', shirt: '#b8862b', pants: '#3a2a1a', hat: '#2a4a3a', style: 'short' },
      lines: [
        { en: 'I come from a trading port on the islands of Southeast Asia. Islam reached us by sea, along trade routes from India.' },
        { en: 'At first Islam was a merchants\' religion. Now many of our ports are mostly Muslim, but our streets still hold people of many faiths.' },
        { en: 'Near us, Angkor Wat began as a temple to the Hindu god Vishnu, then became Buddhist. That blending is [[syncretism|syncretism]]. On Java, the two faiths\' temples stand near but apart.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Compare the Hindu and Buddhist temples at Angkor Wat and on Java.' },
        choices: [
          { ok: true, t: { en: 'Angkor blended the faiths; Java kept them apart' }, why: { en: 'Right. Angkor Wat shows art and ideas from both religions. On Java the temples stood near each other but separate.' } },
          { t: { en: 'Both places banned Buddhism completely' }, why: { en: 'No. Kings across Southeast Asia gave gifts and funding to both Hinduism and Buddhism.' } },
          { t: { en: 'Muslim merchants built the temples in both places' }, why: { en: 'No. These were Hindu and Buddhist temples. Both religions first emerged in India.' } }
        ]
      }
    },
    {
      x: 6, y: 14, name: { en: 'Aminata' }, role: { en: 'Pilgrim from Mali' },
      look: { skin: 5, hair: '#1b1410', shirt: '#d9a21b', robe: true, hat: '#2a6a4a', style: 'long' },
      lines: [
        { en: 'I came with Mansa Musa, the king of Mali. Around 1324 he left Mali with over 1,000 people, camels and gold.' },
        { en: 'Why so far? The [[hajj|hajj]] is one of the Five Pillars of Islam. Every Muslim who is able should make it once.' },
        { en: 'Islam reached West Africa over centuries along trade routes. Many of our elites converted and blended it with our own beliefs.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: '[[broad context|Broad context]] is a long-term cause. Which is broad context for Mansa Musa\'s hajj?' },
        choices: [
          { ok: true, t: { en: 'Islam spread along African trade routes for centuries' }, why: { en: 'Yes. A long-term trend over a wide region is broad context. It explains why a king of Mali was Muslim.' } },
          { t: { en: 'Mansa Musa left Mali around 1324 with his gold caravan' }, why: { en: 'That is [[narrow context|narrow context]] or the event itself: closely tied in time and place, a short-term cause.' } },
          { t: { en: 'Mansa Musa came to Mecca to conquer it for Mali' }, why: { en: 'No. He came as a pilgrim on the hajj, not as a conqueror.' } }
        ]
      }
    },
    {
      x: 25, y: 17, name: { en: 'Hasan' }, role: { en: 'Sufi pilgrim from Persia' },
      look: { skin: 2, hair: '#3a2a1a', shirt: '#4a3a6a', robe: true, hat: '#e8e2d0', style: 'short' },
      lines: [
        { en: 'I came from Persia with other pilgrims. I belong to a [[sufi|Sufi]] brotherhood. Like the poet Rumi, we seek a close, mystical bond with God.' },
        { en: 'Sufi brotherhoods spread Islam in West Africa. [[pastoral|Pastoral]] herders liked the mysticism, the brotherhoods helped them unite, and local customs could stay.' },
        { en: 'In South Asia, Sufis drew many Hindus. But Islam also came there by conquest. In the [[delhi sultanate|Delhi Sultanate]] the two faiths stayed largely separate.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'When Sufi brotherhoods brought Islam to West Africa, what stayed the same?' },
        choices: [
          { ok: true, t: { en: 'Local culture and religious figures could remain' }, why: { en: 'Yes. Sufi beliefs were flexible enough that local culture continued alongside the new faith.' } },
          { t: { en: 'Nothing changed: no one converted at all' }, why: { en: 'No. Many people did convert. Islam became important across the interior of West Africa.' } },
          { t: { en: 'Herders had to give up every one of their old customs' }, why: { en: 'No. The brotherhoods allowed flexibility, which is one reason herders accepted Islam.' } }
        ]
      }
    }
  ],
  houses: [
    { at: [8, 5], name: { en: 'Mosque keeper Abdullah' }, look: { skin: 3, hair: '#6e6e6e', shirt: '#f2efe6', robe: true, hat: '#f2efe6', style: 'short' },
      lines: [{ en: 'In this plain roadside mosque, travelers from Mali, Persia and India pray side by side.' }, { en: 'Pilgrims rest here, then carry what they learn back to faraway homes.' }] },
    { at: [22, 2], name: { en: 'Spice seller Zainab' }, look: { skin: 3, hair: '#1b1410', shirt: '#8a2a4a', robe: true, style: 'long' },
      lines: [{ en: 'Pepper from Asia and sugar from the Islamic world travel west to Europe.' }, { en: 'Goods go where they are rare, because there they sell for more.' }] },
    { at: [27, 2], name: { en: 'Paper seller Omar' }, look: { skin: 2, hair: '#2b1d14', shirt: '#5a6a3a', robe: true, style: 'short' },
      lines: [{ en: 'Paper lets scholars copy books of mathematics and poetry.' }, { en: 'The poems of Rumi, a Persian Sufi, cross borders and languages.' }] },
    { at: [22, 14], name: { en: 'Innkeeper Khadija' }, look: { skin: 4, hair: '#1b1410', shirt: '#2a7a6a', robe: true, style: 'bun' },
      lines: [{ en: 'Every hajj season, caravans of pilgrims from many lands sleep under my roof.' }, { en: 'Most people never leave home. Pilgrims are some of the few who travel far.' }] },
    { at: [20, 19], name: { en: 'Moneychanger Bilal' }, look: { skin: 5, hair: '#1b1410', shirt: '#6a4a2a', robe: true, style: 'short' },
      lines: [{ en: 'West African gold is currency for Christian and Muslim lands alike.' }, { en: 'Mali\'s caravans carry that gold across the Sahara.' }] }
  ],
  signs: [
    { x: 15, y: 5, text: { en: 'PILGRIM ROAD · Caravans from across Afro-Eurasia rest at this oasis on the way to Mecca for the hajj.' } },
    { x: 4, y: 9, text: { en: 'ROADSIDE MOSQUE · Muslims everywhere, travelers too, pray facing toward Mecca.' } },
    { x: 23, y: 9, text: { en: 'MARKET · Gold, salt, silk and pepper change hands here.' } },
    { x: 4, y: 15, text: { en: 'OASIS AND CARAVAN CAMP · Wells and palms give camels, merchants and pilgrims water in the desert.' } }
  ],
  finds: [
    { clueAt: [25, 3], at: [29, 3], decor: 'coinold', clue: { en: 'From this note, walk 4 steps east along the street of houses.' },
      text: { en: 'A gold coin! West African gold paid for trade across Europe and the Middle East.' } }
  ],
  scraps: [[2, 1], [30, 11], [2, 20]],
  smudges: [[7, 12], [26, 19]],
  quest: {
    stat: 'mov',
    title: { en: 'The Traveler\'s Journal' },
    giver: {
      x: 28, y: 6, name: { en: 'Salim' }, role: { en: 'Young traveler' },
      look: { skin: 3, hair: '#1b1410', shirt: '#3a5a8a', pants: '#2a2a3a', hat: '#e8e2d0', style: 'short' },
      lines: [
        { en: 'I want to travel the world and write down what I see, like the Muslim trader Ibn Battuta or the Christian merchant Marco Polo.' },
        { en: 'But the Grump\'s wind stole my travel journal! Ask Idris the camel driver in the caravan camp, southwest of here. Drivers see everything.' }
      ],
      wait: { en: 'Idris waits with his camels in the caravan camp, by the well in the southwest.' },
      thanks: { en: 'My journal! A traveler\'s account shows what one person saw. But the people we meet decide: accept a new idea, reject it, or mix it.' }
    },
    contact: {
      x: 12, y: 15, name: { en: 'Idris' }, role: { en: 'Camel driver' },
      look: { skin: 4, hair: '#2b1d14', shirt: '#a87a4a', pants: '#4a3a2a', hat: '#f2efe6', style: 'short' },
      lines: [
        { en: 'Camels made trade across the Sahara possible. Ideas ride with the goods. Eastern merchants say Mongol routes carry Chinese gunpowder and paper-making west.' },
        { en: 'Pages blew past my camels! Take the road east past the blue-roofed house, then south. They lie in the far southeast corner, beyond the hills.' }
      ]
    },
    action: {
      type: 'find', at: [30, 20],
      hint: { en: 'East, then south, to the far southeast corner beyond the hills' },
      found: { en: 'There it is, caught behind the rocky hills: Salim\'s travel journal, full of notes.' },
      item: { icon: '📔', name: { en: 'Salim\'s travel journal' } }
    }
  },
  challenge: {
    at: [18, 11], type: 'claim', stat: 'loc',
    title: { en: 'How did ideas travel?' },
    intro: { en: 'The Grump says ideas never leave home! Pick one idea that traveled. Back it up with how it traveled and what it changed.' },
    options: [
      { icon: '🕌', name: { en: 'Islam in West Africa' }, desc: { en: 'From North Africa, across the Sahara' },
        result: { en: 'Yes! Trade and Sufi brotherhoods carried Islam south. West African elites blended it with local beliefs.' } },
      { icon: '💥', name: { en: 'Gunpowder' }, desc: { en: 'First made in China' },
        result: { en: 'Yes! Mongol trade routes carried gunpowder west. By the 1380s cannon could bring down castle walls.' } },
      { icon: '➗', name: { en: 'Muslim mathematics' }, desc: { en: 'Algebra, fractions and astronomy' },
        result: { en: 'Yes! These ideas flowed out of the Islamic world. Al-Jabr became the basis of modern algebra.' } }
    ],
    kinds: [
      { id: 'route', label: { en: 'How it traveled' } },
      { id: 'effect', label: { en: 'What it changed' } }
    ],
    reasons: [
      { kind: 'route', fits: [0], t: { en: 'Caravans and Sufi brotherhoods carried it across the Sahara' },
        why: { en: 'That is how Islam reached the interior of West Africa, wherever there was trade with the Islamic world.' } },
      { kind: 'route', fits: [1], t: { en: 'It moved east to west along the Mongols\' system of exchange' },
        why: { en: 'The Mongol trade network carried gunpowder (and paper-making) from China westward.' } },
      { kind: 'route', fits: [2], t: { en: 'Scholars\' books flowed out to neighboring regions, including Europe' },
        why: { en: 'Muslim mathematics spread from the Islamic world to its neighbors, Europe among them.' } },
      { kind: 'route', fits: [], t: { en: 'It never left the place where it began' },
        why: { en: 'Not true for any of these. Each idea spread along trade networks to new regions.' } },
      { kind: 'effect', fits: [0], t: { en: 'Elites converted and blended it with local beliefs' },
        why: { en: 'That blending, syncretism, is how Islam took root in West Africa.' } },
      { kind: 'effect', fits: [1], t: { en: 'By the 1380s it fired cannon that broke castle walls, and nobles\' power' },
        why: { en: 'Before cannon, European nobles hid behind castle walls. Cannon brought the walls, and the nobles\' power, down.' } },
      { kind: 'effect', fits: [2], t: { en: 'It became the basis of modern algebra' },
        why: { en: 'The book al-Jabr gave algebra its name and its start.' } },
      { kind: 'effect', fits: [], t: { en: 'Everyone who met it accepted it exactly as it was' },
        why: { en: 'Not true for any of these. People who met new ideas accepted, rejected or mixed them.' } }
    ],
    mismatch: { en: 'That is true, but not for the idea you picked.' },
    success: { en: 'Ideas rode the trade routes! Islam blended with West African beliefs, cannon weakened Europe\'s nobles, and Muslim mathematics later helped make Europe\'s scientific revolution possible.' }
  },
  boss: {
    at: [5, 18], stat: 'mov', need: 3,
    name: { en: 'The Dust Grump' },
    appear: { en: 'The Dust Grump is hiding in the caravan camp!' },
    taunt: { en: 'Ideas should stay where they started. I will blow every traveler\'s story away!' },
    win: { en: 'The dust settles over the oasis. Chronicle page 2.5 floats down into your hands!' },
    questions: [
      {
        stim: { text: { en: 'Islam calls for its followers to pray facing the city of Mecca, requiring directional calculations.' }, src: { en: 'Adapted from "Trade, Technology, and Religion in Afro-Eurasia 1200–1450," World History Project' } },
        q: { en: 'The excerpt best helps explain which development?' },
        choices: [{ en: 'Muslim work in astronomy and circle math' }, { en: 'The use of gunpowder cannon in Europe' }, { en: 'Mali\'s gold caravans across the Sahara' }, { en: 'Angkor Wat changing from Hindu to Buddhist' }],
        answer: 0,
        why: { en: 'Praying toward Mecca, a strict calendar and trade all pushed Muslim mathematicians to develop astronomy, circle math and fractions.' }
      },
      {
        stim: { text: { en: 'Mansa Musa departed Mali with a group of over 1,000 people, camels, and gold to travel to Mecca, c. 1324 CE.' }, src: { en: 'Adapted from "Contextualization: Mansa Musa," World History Project' } },
        q: { en: 'Which of the following is BROAD context for the event above?' },
        choices: [{ en: 'Centuries of Islam spreading along trade routes' }, { en: 'Mansa Musa was the ruler of Mali in the 1320s' }, { en: 'Musa\'s group carried huge amounts of gold to Mecca' }, { en: 'The trip from Mali covered about 3,000 miles' }],
        answer: 0,
        why: { en: 'Broad context is a long-term trend over a wide region. Centuries of Islam spreading with trade explain why a Malian king went on hajj.' }
      },
      {
        stim: { text: { en: 'These brotherhoods emphasized mysticism ... and still allowed enough flexibility for local culture and existing religious figures to remain.' }, src: { en: 'Adapted from "Trade, Technology, and Religion in Afro-Eurasia 1200–1450," World History Project' } },
        q: { en: 'The excerpt best explains why Islam...' },
        choices: [{ en: 'spread among pastoral peoples of West Africa' }, { en: 'stayed separate from Hinduism in the Delhi Sultanate' }, { en: 'was rejected by West Africa\'s elites' }, { en: 'reached Southeast Asian ports by conquest' }],
        answer: 0,
        why: { en: 'Sufi brotherhoods offered mysticism, helped herders unite, and let local culture remain, so many West Africans accepted Islam.' }
      },
      {
        stim: { text: { en: 'The great twelfth-century Khmer temple at Angkor Wat began as a temple to the Hindu god Vishnu, then was transformed into a Buddhist temple two centuries later.' }, src: { en: 'Adapted from "Trade, Technology, and Religion in Afro-Eurasia 1200–1450," World History Project' } },
        q: { en: 'The development described above best illustrates...' },
        choices: [{ en: 'syncretism, the blending of belief systems' }, { en: 'the spread of Islam through military conquest' }, { en: 'Muslim merchants rejecting Buddhist beliefs' }, { en: 'the diffusion of gunpowder weapons' }],
        answer: 0,
        why: { en: 'Angkor Wat\'s design shows art and ideas from both Hinduism and Buddhism. Blending traditions is syncretism.' }
      },
      {
        q: { en: 'Which best describes an effect of gunpowder spreading west from China?' },
        choices: [{ en: 'Cannon weakened the power of European nobles' }, { en: 'European castle walls became impossible to break' }, { en: 'Paper-making stopped spreading west' }, { en: 'The Mongols closed their trade routes' }],
        answer: 0,
        why: { en: 'By the 1380s gunpowder fired cannon. Cannon could bring down castle walls, and with them the nobles\' power.' }
      },
      {
        q: { en: 'Compared with its spread to Southeast Asian trading ports, Islam in South Asia ALSO spread through...' },
        choices: [{ en: 'conquest, which built the Delhi Sultanate' }, { en: 'the hajj caravan of Mansa Musa of Mali' }, { en: 'Theravada Buddhist monasteries and monks' }, { en: 'camel caravans crossing the Sahara Desert' }],
        answer: 0,
        why: { en: 'In Southeast Asia, Islam came with merchants. In South Asia, Sufis drew converts, but conquest also built the Delhi Sultanate.' }
      },
      {
        stim: { text: { en: 'Those non-travelers still encountered new ideas and beliefs, and they had to decide what to do with them.' }, src: { en: 'Trevor Getz, "Trade, Technology, and Religion in Afro-Eurasia 1200–1450," World History Project' } },
        q: { en: 'The excerpt best supports which claim about cultural exchange?' },
        choices: [{ en: 'People chose to accept, reject or mix new ideas' }, { en: 'Only long-distance travelers were agents of change' }, { en: 'New ideas were always adopted without any change' }, { en: 'Trade networks carried goods but never any ideas' }],
        answer: 0,
        why: { en: 'Travelers like Ibn Battuta carried ideas, but the people they met decided whether to accept, reject or blend them.' }
      },
      {
        q: { en: 'Which best describes a long-term effect of Muslim mathematics spreading to Europe?' },
        choices: [{ en: 'It helped spark Europe\'s scientific revolution' }, { en: 'It ended all trade between Europe and Asia for good' }, { en: 'It caused Europe to adopt the hajj' }, { en: 'It replaced the Mongols\' system of exchange in Asia' }],
        answer: 0,
        why: { en: 'Algebra, fractions and astronomy flowed into Europe. Without them, the later scientific revolution arguably would not have been possible.' }
      }
    ]
  },
  learned: [
    { en: 'Ideas traveled with goods. Pilgrims, merchants and missionaries carried religions and technologies along trade [[network|networks]].' },
    { en: 'Islam spread to West Africa and Southeast Asia through trade and [[sufi|Sufi]] brotherhoods; in South Asia, conquest spread it too.' },
    { en: 'People who met new ideas accepted, rejected or blended them, like the [[syncretism|syncretism]] of Angkor Wat.' }
  ],
  reflect: {
    q: { en: 'AP practice: Explain one way trade networks spread a belief system or a technology between 1200 and 1450.' },
    starter: { en: 'One way trade networks spread' }
  }
};
