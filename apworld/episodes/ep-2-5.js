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
    { en: 'The Void blew dust over the page on cultural exchange. This oasis on the pilgrim road is forgetting how ideas travel with trade!' },
    { en: 'Talk to the 4 people here and read the 2 sources on their stands. Help a young traveler, then wake the time stone.' }
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
        { en: 'The Islamic world stretches from North Africa to India. It sits between Europe, sub-Saharan Africa, Southeast Asia and China, so our merchants must calculate costs and profits.' },
        { en: 'Islam follows a strict calendar, so we understand dates mathematically. And we pray facing Mecca, which takes directional calculations.' },
        { en: 'So Muslim mathematicians use astronomy, divide up the circle and work with fractions. Arab scholars wrote a book of calculations with the short name [[al-jabr|al-Jabr]].' },
        { en: 'These ideas flow out to neighboring regions, Europe too. That is [[diffusion|diffusion]]. Europe\'s scientific revolution of the 1500s and 1600s will build on them.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Which best explains why the Islamic world led in mathematics in this era?' },
        choices: [
          { ok: true, t: { en: 'Trade, calendar and prayer all needed math' }, why: { en: 'Yes. Merchants counted costs and profits, the calendar was mathematical, and facing Mecca took directional calculations.' } },
          { t: { en: 'Song exam reforms made many more people scholars' }, why: { en: 'No. That happened in China under the Song Dynasty, not in the Islamic world.' } },
          { t: { en: 'Mongol routes carried China\'s mathematics west' }, why: { en: 'No. Mongol routes carried gunpowder and paper-making west. Muslim math grew from the Islamic world\'s own needs.' } }
        ]
      }
    },
    {
      x: 22, y: 6, name: { en: 'Ismail' }, role: { en: 'Merchant from Southeast Asia' },
      look: { skin: 3, hair: '#1b1410', shirt: '#b8862b', pants: '#3a2a1a', hat: '#2a4a3a', style: 'short' },
      lines: [
        { en: 'I trade from a port on the islands of Southeast Asia. Muslims reached our region by the eleventh century, sailing the trade routes from India.' },
        { en: 'Islam was first a religion of merchants. By the 1200s many of our island ports had Muslim majorities, but our cities still hold people of many religions.' },
        { en: 'Hinduism and Buddhism also came from India. The twelfth-century Khmer temple at Angkor Wat began as a temple to Vishnu and became Buddhist two centuries later. That is [[syncretism|syncretism]].' },
        { en: 'On Java, Hindu and Buddhist temples stand near each other but apart. Our kings fund both faiths. And [[theravada|Theravada]] monasteries now carry real political weight.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Compare Angkor Wat with the temples on Java. Which statement is accurate?' },
        choices: [
          { ok: true, t: { en: 'Angkor blended both faiths; Java kept them apart' }, why: { en: 'Right. Angkor Wat\'s design shows art and ideas from both religions. On Java the temples stood near each other but separate.' } },
          { t: { en: 'Java blended both faiths; Angkor kept them apart' }, why: { en: 'Reversed. Angkor Wat changed from a Hindu to a Buddhist temple and shows both; Java kept its temples separate.' } },
          { t: { en: 'Muslim merchants from India built both of them' }, why: { en: 'No. These were Hindu and Buddhist temples. Both religions first emerged in India, but Muslims did not build them.' } }
        ]
      }
    },
    {
      x: 6, y: 14, name: { en: 'Aminata' }, role: { en: 'Pilgrim from Mali' },
      look: { skin: 5, hair: '#1b1410', shirt: '#d9a21b', robe: true, hat: '#2a6a4a', style: 'long' },
      lines: [
        { en: 'Sundiata Keita founded our Mali Empire around 1230. I travel with Mansa Musa, who has ruled Mali since about 1312.' },
        { en: 'Around 1324 he left Mali with over 1,000 people, camels and gold, for a journey of about 3,000 miles. Camels make such Sahara crossings possible.' },
        { en: 'Why go? Islam was founded in Mecca in the seventh century by the prophet Muhammad. The [[hajj|hajj]] there is one of the Five Pillars of Islam.' },
        { en: 'From the tenth century on, Islam traveled Africa\'s trade routes. Many of our elites converted and blended it with local beliefs.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: '[[broad context|Broad context]] is a long-term cause. Which is broad context for Mansa Musa\'s hajj?' },
        choices: [
          { ok: true, t: { en: 'Centuries of Islam spreading along trade routes' }, why: { en: 'Yes. A long-term trend over a wide region is broad context. It explains why a king of Mali was Muslim.' } },
          { t: { en: 'Mansa Musa\'s rule over Mali, starting about 1312' }, why: { en: 'That is [[narrow context|narrow context]]: closely tied in time and place to the hajj, a short-term cause.' } },
          { t: { en: 'His caravan of over 1,000 leaving Mali, c. 1324' }, why: { en: 'That is the event itself, not its context. Context is what surrounds and builds up to the event.' } }
        ]
      }
    },
    {
      x: 25, y: 17, name: { en: 'Hasan' }, role: { en: 'Sufi pilgrim from Persia' },
      look: { skin: 2, hair: '#3a2a1a', shirt: '#4a3a6a', robe: true, hat: '#e8e2d0', style: 'short' },
      lines: [
        { en: 'I came from Persia. I belong to a [[sufi|Sufi]] brotherhood. Like the poet Rumi, a Muslim jurist, scholar and mystic, we seek a close, mystical bond with God.' },
        { en: 'Sufi brotherhoods spread Islam in West Africa. Their mysticism suits nomadic, [[pastoral|pastoral]] herders, and they help herders come together for political strength.' },
        { en: 'And Sufi ways are flexible: local culture and existing religious figures can remain. That is one reason so many West Africans accept Islam.' },
        { en: 'In South Asia, Sufis drew many Hindus used to a mystical Hinduism. But conquest built the [[delhi sultanate|Delhi Sultanate]]. It tolerates both faiths, yet they stay largely separate.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'When Sufi brotherhoods brought Islam to West Africa, what was a continuity?' },
        choices: [
          { ok: true, t: { en: 'Local culture and religious figures could remain' }, why: { en: 'Yes. Sufi beliefs were flexible enough that local culture continued alongside the new faith.' } },
          { t: { en: 'Islam and local faiths stayed apart, as in Delhi' }, why: { en: 'No. That describes the Delhi Sultanate in South Asia. In West Africa, Islam blended with local culture.' } },
          { t: { en: 'Herders gave up their old customs to join' }, why: { en: 'No. The brotherhoods allowed flexibility, which is one reason herders accepted Islam.' } }
        ]
      }
    },
    {
      doc: true, x: 12, y: 3, icon: '📜',
      name: { en: 'A Painted Pilgrim Caravan' }, role: { en: 'Primary source' },
      src: { en: 'Painting credited to Yahya ibn Mahmud al-Wasiti, in the Maqâmâ, a book of Arabic poetry (thirteenth century); shown and captioned in "Trade, Technology, and Religion in Afro-Eurasia 1200–1450," World History Project' },
      lines: [
        { en: 'This source is a picture, not a text: a thirteenth-century painting of Muslims on a pilgrimage, or hajj. It illustrates the Maqâmâ, a book of Arabic poetry, and is credited to the painter Yahya ibn Mahmud al-Wasiti.' },
        { en: 'The World History Project explains it this way: "Pilgrimages were one of the major ways people moved around in this era. Based on clothing, these pilgrims were probably from Persia or Mesopotamia, headed for Mecca."' },
        { en: 'Context: the painter made it for readers of a poetry book, not as a travel record, so it names no pilgrims and gives no route. Historians read its details, like clothing, as clues. In an age when most people never left home, it shows pilgrims who did.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Sourcing: how do historians judge where these painted pilgrims came from?' },
        choices: [
          { ok: true, t: { en: 'From the clothing they wear' }, why: { en: 'Yes. The caption says that, based on clothing, they were probably from Persia or Mesopotamia.' } },
          { t: { en: 'From the names of pilgrims it lists' }, why: { en: 'No. It illustrates a poetry book and lists no names. Historians use clues like clothing.' } },
          { t: { en: 'From the poet\'s record of their route' }, why: { en: 'No. It is not a travel record and gives no route. The clue is the clothing.' } }
        ]
      }
    },
    {
      doc: true, x: 20, y: 9, icon: '📖',
      name: { en: 'Ideas on the Move' }, role: { en: 'Reading' },
      src: { en: 'Adapted from "Trade, Technology, and Religion in Afro-Eurasia 1200–1450" by Trevor Getz, World History Project (Khan Academy)' },
      lines: [
        { en: 'In the thirteenth century, most people lived their whole lives within a few square miles. But the few who traveled far carried ideas, an intangible cargo moving through the same networks as goods. China and the Islamic world made especially dramatic contributions. Under China\'s Song Dynasty, reforms opened the education system and exams, many more people became scholars, and inventions followed: the magnifying glass, the compass and gunpowder.' },
        { en: 'The Mongols conquered China and ruled it as the Yuan Dynasty. Across Central Asia they built a huge system of exchange. Goods moved west along it, and so did technologies: gunpowder, which was new, and paper-making, which was not new but had not gone far beyond China until now. By the 1380s gunpowder fired cannon. Cannon helped the Ottomans conquer Constantinople and brought down European castle walls, and with them the nobles\' power.' },
        { en: 'Religions spread by trade and also by conquest. In the thirteenth and early fourteenth centuries, the Northern Crusades spread Christianity to the Baltic and slowly drove older beliefs out. Some agents of change were the few travelers, like Ibn Battuta and Marco Polo, and missionaries. Others were the many people they met, who had to decide: accept a new idea, reject it, or mix it with what they had.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Which best explains why gunpowder and paper-making spread west in this era?' },
        choices: [
          { ok: true, t: { en: 'The Mongols built a huge system of exchange' }, why: { en: 'Yes. Mongol control across Central Asia linked China to the west, and technologies moved along with goods.' } },
          { t: { en: 'Song exam reforms sent scholars to Europe' }, why: { en: 'No. The reforms made more scholars inside China. The reading says nothing of them going to Europe.' } },
          { t: { en: 'Ottoman cannon opened the roads from China' }, why: { en: 'No. That reverses cause and effect: cannon came only after gunpowder had already spread west.' } }
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
        { en: 'But the Void\'s wind stole my travel journal! Ask Idris the camel driver in the caravan camp, southwest of here. Drivers see everything.' }
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
    intro: { en: 'The Void says ideas never leave home! Pick one idea that traveled. Back it up with how it traveled and what it changed.' },
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
    name: { en: 'The Void' },
    appear: { en: 'The Void has opened in the caravan camp. Lamps flicker toward it.' },
    taunt: { en: 'Ideas travel, and I follow them. Every story told on this road ends in my silence.' },
    win: { en: 'The Void closes over the oasis. Chronicle page 2.5 floats down into your hands.' },
    questions: [
      {
        stim: { text: { en: '"Situated between Europe, sub-Saharan Africa, Southeast Asia, and China, the Islamic world was involved in a whole lot of trade. ... Islam is a religion that follows a strict calendar, so dates were understood mathematically. Finally, Islam calls for its followers to pray facing the city of Mecca, requiring directional calculations."' }, src: { en: 'Trevor Getz, "Trade, Technology, and Religion in Afro-Eurasia 1200–1450," World History Project' } },
        q: { en: 'The passage best supports the claim that Muslim advances in mathematics were driven mainly by...' },
        choices: [{ en: 'practical needs of commerce and religious practice' }, { en: 'Song Dynasty exam reforms that created more scholars' }, { en: 'Chinese learning carried west on the Mongol routes' }, { en: 'the demands of Europe\'s scientific revolution' }],
        answer: 0,
        why: { en: 'Trade, a strict calendar and the direction of prayer all required calculation. The exam reforms were in China, and Europe\'s scientific revolution came centuries later, built on Muslim math.' }
      },
      {
        stim: { text: { en: 'Mansa Musa departed Mali with a group of over 1,000 people, camels, and gold to travel to Mecca c. 1324 CE.' }, src: { en: 'From "Contextualization: Mansa Musa," World History Project' } },
        q: { en: 'Which of the following is NARROW context for the event above?' },
        choices: [{ en: 'Mansa Musa became the ruler of Mali around 1312' }, { en: 'Islam spread on African trade routes from the 900s on' }, { en: 'Islam was founded in Mecca in the seventh century' }, { en: 'Camels made trade across the Sahara possible' }],
        answer: 0,
        why: { en: 'Narrow context is closely tied in time and place: Musa\'s own reign. The other three are long-term trends or events over wide regions, so they are broad context.' }
      },
      {
        stim: { text: { en: '"First, they emphasized ideas of mysticism and a relationship to God that were particularly suited to many of the nomadic, pastoral people of West Africa. Second, they helped those pastoralists come together to create political strength and solve problems."' }, src: { en: 'Trevor Getz, on Sufi brotherhoods, "Trade, Technology, and Religion in Afro-Eurasia 1200–1450," World History Project' } },
        q: { en: 'The features described in the excerpt best explain why Islam...' },
        choices: [{ en: 'took root among herding peoples of West Africa' }, { en: 'drew Hindus used to a mystical Hinduism in India' }, { en: 'stayed separate from Hinduism in the Delhi Sultanate' }, { en: 'became the majority faith of Southeast Asian ports' }],
        answer: 0,
        why: { en: 'Sufi brotherhoods offered mysticism and helped pastoral herders unite for political strength, so Islam spread in West Africa. The other choices are real, but in other regions.' }
      },
      {
        stim: { text: { en: '"The great twelfth century Khmer temple at Angkor Wat began as a temple to the Hindu god Vishnu, then was transformed into a Buddhist temple two centuries later. Its design shows the influence of art and ideas from both religions."' }, src: { en: 'Trevor Getz, "Trade, Technology, and Religion in Afro-Eurasia 1200–1450," World History Project' } },
        q: { en: 'The development described most directly reflects which process?' },
        choices: [{ en: 'syncretism, the blending of two belief systems' }, { en: 'Theravada monasteries gaining political power' }, { en: 'Islam spreading to ports along routes from India' }, { en: 'Hindu and Buddhist sites kept apart, as on Java' }],
        answer: 0,
        why: { en: 'Angkor Wat\'s design shows art and ideas from both Hinduism and Buddhism. Blending traditions is syncretism. On Java, by contrast, the temples stayed separate.' }
      },
      {
        stim: { text: { en: '"Trade goods moved along it from east to west, but so did technologies like gunpowder, which was new, and paper-making, which was not new but hadn\'t really gone far beyond China until now."' }, src: { en: 'Trevor Getz, on the Mongol system of exchange, "Trade, Technology, and Religion in Afro-Eurasia 1200–1450," World History Project' } },
        q: { en: 'Based on the excerpt, how did the spread of paper-making differ from that of gunpowder?' },
        choices: [{ en: 'It was old in China but had not spread far' }, { en: 'It came from the Islamic world, not from China' }, { en: 'It moved from west to east, toward China' }, { en: 'It was first invented under the Mongol Yuan' }],
        answer: 0,
        why: { en: 'Gunpowder was new; paper-making was not new, but it had not gone far beyond China until the Mongol network carried it west.' }
      },
      {
        q: { en: 'Which of the following best describes an effect of gunpowder cannon, in use by the 1380s?' },
        choices: [{ en: 'They broke castle walls and nobles\' power' }, { en: 'They let nobles hide safely behind stronger walls' }, { en: 'They spread Christianity to the Baltic peoples' }, { en: 'They let the Mongols conquer China as the Yuan' }],
        answer: 0,
        why: { en: 'Before cannon, European nobles hid behind castle walls and stayed powerful. Cannon brought the walls down, and the nobles\' power with them. Cannon also helped the Ottomans conquer Constantinople.' }
      },
      {
        stim: { title: { en: 'How beliefs spread, 1200–1450' }, rows: [[{ en: 'Region' }, { en: 'How the belief spread' }], [{ en: 'Southeast Asian ports' }, { en: 'Islam, by merchants on routes from India' }], [{ en: 'West African interior' }, { en: 'Islam, by trade and Sufi brotherhoods' }], [{ en: 'South Asia' }, { en: 'Islam, by Sufis and by conquest (Delhi Sultanate)' }], [{ en: 'Baltic Europe' }, { en: '?' }]], src: { en: 'From "Trade, Technology, and Religion in Afro-Eurasia 1200–1450," World History Project' } },
        q: { en: 'Which of the following best completes the last row of the table?' },
        choices: [{ en: 'Christianity, by conquest in the Northern Crusades' }, { en: 'Buddhism, by Theravada monks and monasteries' }, { en: 'Christianity, by merchants on Indian Ocean routes' }, { en: 'Islam, by caravans crossing from North Africa' }],
        answer: 0,
        why: { en: 'In the 1200s and early 1300s the Northern Crusades spread Christianity to the Baltic by conquest and slowly drove older beliefs out, much as conquest built the Delhi Sultanate.' }
      },
      {
        stim: { text: { en: '"Some of the agents of this change were the few individuals who made these voyages. ... Other agents of change, however, were many people they met along the way. Those non-travelers still encountered new ideas and beliefs, and they had to decide what to do with them."' }, src: { en: 'Trevor Getz, "Trade, Technology, and Religion in Afro-Eurasia 1200–1450," World History Project' } },
        q: { en: 'The author\'s main purpose in this passage is to argue that...' },
        choices: [{ en: 'people who never traveled also shaped cultural exchange' }, { en: 'famous travelers were the most important agents of change' }, { en: 'trade networks carried goods but rarely carried new ideas' }, { en: 'most people of the 1200s journeyed far from their homes' }],
        answer: 0,
        why: { en: 'Travelers like Ibn Battuta and Marco Polo carried ideas, but Getz stresses the many people they met, who chose to accept, reject or mix those ideas.' }
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
