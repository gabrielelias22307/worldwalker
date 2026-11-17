/* HISTORYWALKER · Episode 1.7 · Comparison in the Period c. 1200–1450 (AP World Topic 1.7)
   Samarkand, Timur's capital in Central Asia, in 1400: travelers compare how their homelands' states were built and
   how rulers kept power (Song and Ming China, Dar al-Islam, the Delhi Sultanate, Mali and the Swahili coast, Europe;
   the Americas are added by Quill, since no one in Samarkand knew of them before 1500).
   Content source: Khan Academy, AP World History (World History Project), Unit 1: "Comparison: States 1200–1450",
   "Unit 1 Introduction: The Global Tapestry, c. 1200 to 1450" (Trevor Getz), "East Asia 1200–1450" (Merry Wiesner-Hanks),
   "Dar al-Islam 1200–1450" (Bennett Sherry), "South and Southeast Asia 1200–1450" (Merry Wiesner-Hanks),
   "State and Religion in Afro-Eurasia, c. 1200–1450" (Trevor Getz), "The Americas 1200–1450" (William H. Beezley),
   "Africa 1200–1450" (Trevor Getz), "States and Empires of West Africa" (Trevor R. Getz), "Europe 1200–1450"
   (Jack Bouchard); scenes.next from "Archipelago of Trade" (Unit 2). World History Project content is CC BY-NC 4.0.
   Facts here come from those readings. English only, AP level. */
window.EPISODE = {
  id: '1.7',
  realm: 1,
  sol: 'AP 1.7',
  style: 'islam',
  weather: { sky: 'dust', time: 'day' },
  title: { en: 'Comparing States, 1200–1450' },
  place: { en: 'Samarkand, Timur\'s empire, 1400' },
  intro: [
    { en: 'The Grump smudged the page that compares the world\'s states. In Samarkand, travelers are forgetting how their rulers hold power!' },
    { en: 'Talk to the 4 travelers, help a merchant from Delhi, then wake the time stone.' }
  ],
  scenes: {
    at: [66.97, 39.65],
    year: 1400,
    start: [
      { en: 'In 1400, Samarkand was the base of Timur, a ruthless and charismatic conqueror.' },
      { en: 'Timur, of Turkic and Mongol descent, built an empire stretching from India to Anatolia.' },
      { en: 'From 1200 to 1450, regions built states in different ways, yet trade and beliefs connected them.' }
    ],
    guess: {
      q: { en: 'Rulers from China to Mali needed people to accept their power. What do you think helped most?' },
      choices: [{ t: { en: '🙏 Faith, trade and officials' }, ok: true }, { t: { en: '🎲 Pure luck' } }],
      why: { en: 'Rulers claimed the support of God or the gods, controlled trade, and relied on officials and armies.' }
    },
    page: { en: 'Timur\'s empire collapsed not long after his death in 1405.' },
    next: {
      q: { en: 'Next: the Silk Roads. Were they one road, or a network of routes?' },
      choices: [{ t: { en: 'A network of routes' }, ok: true }, { t: { en: 'One straight road' } }],
      why: { en: 'Hundreds of cities, ports and markets dotted a web of land and water routes. You go there next.' }
    }
  },
  start: [15, 6],
  map: [
    'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
    'W.DDDDDDD.T..T...RRR..QQQQ..RRRW',
    'W.DDDDDDD........hdh..hhhh..hdhW',
    'W.DDDdDDD.x.....llllllllllllllxW',
    'WllllllllllllllllllllllllllllllW',
    'Wllllllllllllll..lllllllllll..TW',
    'Wllllllllllllll..lmlmlmlmlml...W',
    'Wllllllllllllll..lllllllllll.,.W',
    'Wllllllllllllll...T.....,....T.W',
    'Wllllllllllllll.......T........W',
    'WT....l......T..TT.....l.....TTW',
    'W.....l......T......T..l..W....W',
    'W.....l.RRRRR.....RRR..l..W.TT.W',
    'W.....l.hhdhh.....hhh..l..W....W',
    'W.....llllllll.........l..W..T.W',
    'W.,...l.....x..llllllllllllllllW',
    'W~~~~~B~~~~~~~~...........W....W',
    'W.....:...........QQQ.....W.T..W',
    'W.TT..:..YY..T....hdh.....W....W',
    'W.....:...................W.T..W',
    'W.T...:..,...T..,....T....W....W',
    'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW'
  ],
  words: {
    'state': { en: 'an organized government that rules a territory and its people' },
    'legitimize': { en: 'to make a ruler\'s power seem right and lawful, so people accept it' },
    'qadi': { en: 'a Muslim judge trained in Islamic law, who kept order in the service of a ruler' },
    'dar al-islam': { en: '"the House of Islam": lands where Muslims were the majority and rulers practiced Islam' },
    'caliphate': { en: 'an Islamic state ruled by a caliph; the Abbasid Caliphate lasted from 750 to 1258' },
    'bureaucracy': { en: 'a system of trained officials who run a government' },
    'civil service exam': { en: 'a hard written test on Confucian books; passing it could win a man a government job' },
    'mansa': { en: 'the title of Mali\'s ruler, meaning sultan, king or emperor' },
    'religious pluralism': { en: 'accepting many faiths in one state, with followers of each living and serving side by side' },
    'matrilineality': { en: 'tracing one\'s family and ancestry through the mother' },
    'feudalism': { en: 'a system in which kings granted land to lords in return for military support and loyalty' },
    'excommunicate': { en: 'to expel someone from the community of Christians; only church leaders like the pope could do it' },
    'delhi sultanate': { en: 'a Muslim state in north India, founded in 1206 by a Turkic general' },
    'brahmin': { en: 'a member of the Hindu priestly class' },
    'tribute': { en: 'payments that conquered people must give their rulers, such as food, cloth or precious stones' }
  },
  npcs: [
    {
      x: 8, y: 4, name: { en: 'Judge Hamid' }, role: { en: 'Qadi from Persia' },
      look: { skin: 2, hair: '#2b1d14', shirt: '#2a6a5a', robe: true, hat: '#e8e2d0', style: 'short' },
      lines: [
        { en: 'I am a [[qadi|qadi]], a judge of Islamic law. I keep order for a sultan, and in return rulers fund our schools.' },
        { en: 'Once one [[caliphate|caliphate]] ruled most of [[dar al-islam|Dar al-Islam]]. By 1200 that unity was gone, and power was split among many states.' },
        { en: 'Yet Ibn Battuta of Morocco felt at home from Mali to India, while Marco Polo of Venice was a stranger everywhere. Arabic and shared beliefs tied our world together.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'How did Dar al-Islam in 1200–1450 compare with the age of the early caliphates?' },
        choices: [
          { ok: true, t: { en: 'Divided politically, but united by culture' }, why: { en: 'Yes. The Abbasid Caliphate broke apart, but Islam, Arabic and shared values kept spreading and connecting people.' } },
          { t: { en: 'Still ruled by one caliph in Baghdad, as before' }, why: { en: 'No. Abbasid power declined after 900, and the Mongols sacked Baghdad in 1258.' } },
          { t: { en: 'Shrinking as Islam lost its followers' }, why: { en: 'No. Between 1000 and 1500, Dar al-Islam nearly doubled in size.' } }
        ]
      }
    },
    {
      x: 21, y: 7, name: { en: 'Zhang' }, role: { en: 'Silk merchant from Ming China' },
      look: { skin: 1, hair: '#1b1410', shirt: '#8a3a2a', robe: true, style: 'bun' },
      lines: [
        { en: 'In China an emperor rules through a great [[bureaucracy|bureaucracy]]. His officials pass [[civil service exam|civil service exams]] on Confucian books.' },
        { en: 'Under the Song, Zhu Xi\'s Confucian books taught loyalty: ruler over subject, like Heaven over Earth. The Song promoted these ideas to keep order.' },
        { en: 'The Mongols ruled us as the Yuan dynasty. Then in 1368 the general Taizu drove them out and founded the Ming.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Compared with most states of this time, what made China\'s government stand out?' },
        choices: [
          { ok: true, t: { en: 'Officials chosen by exams on Confucian books' }, why: { en: 'Yes. Few governments outside China were strong enough to rule daily local life. Exams built a trained bureaucracy.' } },
          { t: { en: 'Merchant families ruled each one of its port cities' }, why: { en: 'No. That describes Swahili port cities in East Africa. In China an emperor and his officials ruled.' } },
          { t: { en: 'A council of priests crowned each emperor' }, why: { en: 'No. The Song promoted Confucianism, a philosophy, and emperors came from the ruling dynasty.' } }
        ]
      }
    },
    {
      x: 3, y: 14, name: { en: 'Bakary' }, role: { en: 'Gold trader from Mali' },
      look: { skin: 5, hair: '#140d08', shirt: '#d9a02b', robe: true, hat: '#f2ece0', style: 'short' },
      lines: [
        { en: 'My ruler is the [[mansa|mansa]] of Mali. Mali grew rich by controlling much of the gold of western Afro-Eurasia.' },
        { en: 'Sahel states share one model: control long-distance trade, rule the wet grain lands, and accept many faiths. That is [[religious pluralism|religious pluralism]].' },
        { en: 'Our founder Sunjata may have been Muslim, yet he kept local beliefs and [[matrilineality|matrilineality]]. Much of his power came through his mother.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'How did rulers of Sahel states like Mali mostly pay for their states?' },
        choices: [
          { ok: true, t: { en: 'By controlling and taxing the gold trade' }, why: { en: 'Yes. They also made cloth, but trade was easier to tax, so rulers focused on controlling it.' } },
          { t: { en: 'By making nomadic herders farm for the king' }, why: { en: 'No. These states had little control over nomadic herders; at most they demanded some tribute.' } },
          { t: { en: 'By banning every faith except Islam' }, why: { en: 'No. Most rulers were inclusive: Muslims and followers of local religions served at court.' } }
        ]
      }
    },
    {
      x: 22, y: 19, name: { en: 'Pietro' }, role: { en: 'Merchant from Venice' },
      look: { skin: 0, hair: '#6b4a2a', shirt: '#3a4a8a', pants: '#2a2a3a', hat: '#7a2a2a', style: 'short' },
      lines: [
        { en: 'In Europe power is split up. Kings grant lords land for military support, and lords grant land to knights. We call it [[feudalism|feudalism]].' },
        { en: 'The king of France directly rules only a few provinces near Paris! Germany has broken into hundreds of small units under a weak emperor.' },
        { en: 'Priests teach that kings rule with God\'s approval. But a pope can [[excommunicate|excommunicate]] even an emperor, as Innocent IV did to Frederick II in 1239.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Compared with China, how was power organized in Europe?' },
        choices: [
          { ok: true, t: { en: 'Decentralized, with local lords holding power' }, why: { en: 'Yes. China\'s emperor ruled through trained officials, while Europe\'s kings were often weak and nobles ruled locally.' } },
          { t: { en: 'More centralized, with exams for officials' }, why: { en: 'No. Europe had no civil service exams. Nobles, knights, church leaders and city councils held power.' } },
          { t: { en: 'United under one strong emperor who ruled from Rome' }, why: { en: 'No. Europe was split into many kingdoms and principalities; Germany alone broke into hundreds.' } }
        ]
      }
    }
  ],
  houses: [
    { at: [5, 3], name: { en: 'Teacher Yusuf' }, look: { skin: 2, hair: '#4a4a4a', shirt: '#4a6a3a', robe: true, hat: '#e8e2d0', style: 'short' },
      lines: [{ en: 'Rulers fund schools like this one. Students here study Islamic law, and some become judges.' }, { en: 'Muslim scholars kept Greek texts alive and gave us algebra and the idea of zero.' }] },
    { at: [18, 2], name: { en: 'Spice seller Gulnara' }, look: { skin: 2, hair: '#1b1410', shirt: '#b0306a', robe: true, style: 'long' },
      lines: [{ en: 'Spices from China pass through many trading circuits before they reach Europe.' }, { en: 'In the 1340s a plague spread along these same routes and broke the network for decades.' }] },
    { at: [29, 2], name: { en: 'Bookseller Karim' }, look: { skin: 3, hair: '#2b1d14', shirt: '#5a3a6a', robe: true, style: 'short' },
      lines: [{ en: 'Ibn Sina\'s Canon of Medicine came out in 1025. Scholars still study it.' }, { en: 'Nasir al-Din al-Tusi wrote on astronomy and mathematics. People remember him for trigonometry.' }] },
    { at: [10, 13], name: { en: 'Innkeeper Nodira' }, look: { skin: 2, hair: '#2b1d14', shirt: '#2a5a8a', robe: true, style: 'bun' },
      lines: [{ en: 'Muslims, Christians and Buddhists all sleep under this roof.' }, { en: 'Mongol khans protected many faiths and paid for temples and churches of all kinds.' }, { en: 'Some Mongol leaders became Muslims, others Buddhists or Christians.' }] },
    { at: [19, 18], name: { en: 'Old soldier Batu' }, look: { skin: 2, hair: '#8a8a8a', shirt: '#6a5a3a', pants: '#3a3a2a', style: 'short' },
      lines: [{ en: 'My grandfather rode with the Mongols. In 1258 they sacked Baghdad and killed the last Abbasid caliph.' }, { en: 'Yet the Mongol conquests helped Islam spread further than ever before.' }] }
  ],
  signs: [
    { x: 10, y: 3, text: { en: 'MADRASA · A school of Islamic law, paid for by the ruler.' } },
    { x: 30, y: 3, text: { en: 'BAZAAR · Merchants from India, China and Europe trade here.' } },
    { x: 12, y: 15, text: { en: 'CARAVANSERAI · Rest for caravans and travelers from across Afro-Eurasia.' } }
  ],
  finds: [
    { clueAt: [9, 17], at: [12, 19], decor: 'coinold', clue: { en: 'From this note, walk 3 steps east and 2 steps south, near the bushes.' },
      text: { en: 'A small gold piece! Mali controlled much of the gold available in western Afro-Eurasia.' } }
  ],
  scraps: [[1, 1], [30, 12], [1, 20]],
  smudges: [[25, 9], [4, 19]],
  quest: {
    stat: 'reg',
    title: { en: 'The Lost Cotton Bale' },
    giver: {
      x: 12, y: 11, name: { en: 'Devraj' }, role: { en: 'Cotton merchant from Delhi' },
      look: { skin: 4, hair: '#1b1410', shirt: '#e0e0d0', robe: true, hat: '#c0392b', style: 'short' },
      lines: [
        { en: 'I come from the [[delhi sultanate|Delhi Sultanate]], founded in 1206 by a Turkic general. Its Muslim sultans held back the Mongols and generally tolerated Hindus like me.' },
        { en: 'Hindu Rajput kings fund temples, and the [[brahmin|brahmins]] back them. But the Grump\'s helpers knocked my cotton off the cart! Ask the guard at the east gate.' }
      ],
      wait: { en: 'The guard stands just inside the east gate of the city wall.' },
      thanks: { en: 'My cotton! Merchants have carried India\'s cotton across Dar al-Islam for centuries. Thank you, friend.' }
    },
    contact: {
      x: 25, y: 14, name: { en: 'Aybek' }, role: { en: 'Gate guard' },
      look: { skin: 2, hair: '#1b1410', shirt: '#7a3a2a', pants: '#3a2a2a', hat: '#5a4a3a', style: 'short' },
      lines: [
        { en: 'I serve in Timur\'s army. He mixes Turkic and Mongol ways of war, and he built his empire by conquest.' },
        { en: 'A bale bounced off a cart bound for the bazaar. Go north up the road to the bazaar, then east to the corner, just southeast of the last tree.' }
      ]
    },
    action: {
      type: 'find', at: [30, 9],
      hint: { en: 'North to the bazaar, then east to the corner' },
      found: { en: 'There it is, past the last tree: Devraj\'s bale of Indian cotton.' },
      item: { icon: '🧺', name: { en: 'Devraj\'s cotton bale' } }
    }
  },
  challenge: {
    at: [8, 7], type: 'carry', stat: 'hei',
    title: { en: 'How did they hold power?' },
    intro: { en: 'The Grump scrambled how states built and [[legitimize|legitimized]] power. Carry each card to its method. Quill adds cards from the Americas, unknown here before 1500.' },
    zones: [
      { bin: 'faith', x: 2, y: 5, w: 3, h: 2 },
      { bin: 'trade', x: 11, y: 5, w: 3, h: 2 },
      { bin: 'force', x: 2, y: 8, w: 3, h: 2 },
      { bin: 'office', x: 11, y: 8, w: 3, h: 2 }
    ],
    bins: [
      { id: 'faith', icon: '🙏', label: { en: 'Faith' }, sub: { en: 'rulers claim divine support' } },
      { id: 'trade', icon: '💰', label: { en: 'Trade wealth' }, sub: { en: 'rulers control and tax trade' } },
      { id: 'force', icon: '⚔️', label: { en: 'Conquest and tribute' }, sub: { en: 'a core people rules others by force' } },
      { id: 'office', icon: '📜', label: { en: 'Officials' }, sub: { en: 'trained officials run the state' } }
    ],
    items: [
      { bin: 'faith', t: { en: 'The Sapa Inca rules as the representative on Earth of Inti, the sun god.' }, why: { en: 'The Incas believed they were Inti\'s children. A ruler who speaks for a god uses faith to legitimize power.' } },
      { bin: 'faith', t: { en: 'Priests in Catholic Europe tell people their kings rule with God\'s approval.' }, why: { en: 'Church support made kings legitimate. Rulers also used priests as scribes and advisors.' } },
      { bin: 'faith', t: { en: 'Sultans are served by Muslim qadis, and fund Islamic schools in return.' }, why: { en: 'Muslim rulers aligned themselves with Sunni or Shi\'a religious authority to legitimize their rule.' } },
      { bin: 'trade', t: { en: 'Mali\'s mansa grows rich by controlling much of the region\'s gold.' }, why: { en: 'The Sahelian state model: control and tax long-distance trade.' } },
      { bin: 'trade', t: { en: 'On the Swahili coast, kings come from merchant families, and merchants hold the real power.' }, why: { en: 'Swahili city-states focused on port trade, not on ruling large areas of land.' } },
      { bin: 'force', t: { en: 'The Aztecs conquer neighbors and demand tribute, but make little attempt to bring them into Aztec culture.' }, why: { en: 'Aztec power rested on military campaigns that brought prisoners and tribute from conquered peoples.' } },
      { bin: 'force', t: { en: 'Timur, based in Samarkand, conquers lands from India to Anatolia.' }, why: { en: 'Timur built his empire by conquest with Turkic and Mongol military methods. It collapsed soon after his death.' } },
      { bin: 'office', t: { en: 'Song China chooses its officials by civil service exams on Confucian books.' }, why: { en: 'A trained bureaucracy of scholar-officials ran the Chinese state.' } },
      { bin: 'office', t: { en: 'Dai Viet\'s rulers model their bureaucracy on the Chinese system.' }, why: { en: 'Vietnam threw out Chinese rule but copied China\'s way of running a state with officials.' } }
    ],
    success: { en: 'Every card is home! States used faith, trade, force and officials, and most mixed several: the Incas also expanded by conquest.' }
  },
  boss: {
    at: [29, 18], stat: 'hei', need: 3,
    name: { en: 'The Sandstorm Grump' },
    appear: { en: 'The Sandstorm Grump is hiding outside the east gate!' },
    taunt: { en: 'Gold, priests, exams, armies... all the same! I will blow sand over every state in the world!' },
    win: { en: 'The sand settles over Samarkand. The page comparing the world\'s states floats down into your hands!' },
    questions: [
      {
        stim: { text: { en: 'Priests generally called upon people to obey their kings and princes, who were believed to rule with God\'s approval.' }, src: { en: 'Adapted from "State and Religion in Afro-Eurasia, c. 1200–1450," World History Project' } },
        q: { en: 'The excerpt best reflects which way rulers in Catholic Europe legitimized their power?' },
        choices: [{ en: 'Support from religious leaders' }, { en: 'Wealth from taxing gold mines' }, { en: 'Exams on Confucian books' }, { en: 'Election by all their subjects' }],
        answer: 0,
        why: { en: 'Church support made European kings legitimate. Rulers also relied on priests as scribes, accountants and advisors.' }
      },
      {
        stim: { title: { en: 'Rulers and religion, c. 1200–1450' }, rows: [[{ en: 'State' }, { en: 'Link between ruler and religion' }], [{ en: 'Inca Empire' }, { en: 'Sapa Inca is the sun god Inti\'s representative' }], [{ en: 'Catholic Europe' }, { en: 'Kings rule with God\'s approval' }], [{ en: 'Hindu kingdoms of India' }, { en: 'Kings fund temples; brahmins back them' }]], src: { en: 'From "The Americas 1200–1450" and "State and Religion in Afro-Eurasia," World History Project' } },
        q: { en: 'The table best supports which comparison?' },
        choices: [{ en: 'Many regions used religion to legitimize rulers' }, { en: 'Only Christian rulers tied their power to religion' }, { en: 'Religion and government were kept fully apart' }, { en: 'Religion shaped power only in the Americas' }],
        answer: 0,
        why: { en: 'In the Andes, in Europe and in India, rulers claimed divine support or allied with priests. It was a pattern across regions.' }
      },
      {
        q: { en: 'Which best explains why Sahel states such as Mali focused on long-distance trade?' },
        choices: [{ en: 'Trade was easier to tax than crafts' }, { en: 'Their kings were not allowed to own land' }, { en: 'Nomadic herders ran all of their farms' }, { en: 'European merchants forced them to trade' }],
        answer: 0,
        why: { en: 'Sahel states also made goods like cloth, but trade was easier to tax, so rulers worked to control it, above all gold.' }
      },
      {
        stim: { text: { en: 'In Germany, an extreme case, a single state broke into hundreds of smaller political units, governed by a weak emperor.' }, src: { en: 'Adapted from "Europe 1200–1450," World History Project' } },
        q: { en: 'Compared with Song China, the situation described shows that Europe was...' },
        choices: [{ en: 'more fragmented and decentralized' }, { en: 'more centralized under trained officials' }, { en: 'united under one powerful caliph' }, { en: 'ruled by merchant families from ports' }],
        answer: 0,
        why: { en: 'Under feudalism, local lords held land and power. China\'s emperor ruled through a bureaucracy chosen by exams.' }
      },
      {
        stim: { text: { en: 'Unlike Marco Polo, Ibn Battuta found himself at home everywhere he traveled.' }, src: { en: 'Adapted from "Dar al-Islam 1200–1450," World History Project' } },
        q: { en: 'Which best explains the experience described in the excerpt?' },
        choices: [{ en: 'Arabic and shared beliefs united Dar al-Islam' }, { en: 'One caliph still ruled every Muslim land' }, { en: 'The Mongols made everyone in Asia speak Persian' }, { en: 'Every city in Afro-Eurasia was Muslim' }],
        answer: 0,
        why: { en: 'Political unity was gone, but a shared language and shared beliefs made Dar al-Islam one cultural world.' }
      },
      {
        q: { en: 'Which statement best compares the Aztec Empire with Timur\'s empire?' },
        choices: [{ en: 'Both were built mainly by conquest' }, { en: 'Both were run by exam-trained officials' }, { en: 'Both were ruled by merchant families' }, { en: 'Both banned every religion of their time' }],
        answer: 0,
        why: { en: 'The Aztecs conquered neighbors for tribute and prisoners; Timur conquered lands from India to Anatolia.' }
      },
      {
        stim: { text: { en: 'Zhu Xi\'s work emphasized social hierarchies and loyalty, including between ruler and subject, which reflected the relationship between Heaven and earth.' }, src: { en: 'Adapted from "State and Religion in Afro-Eurasia, c. 1200–1450," World History Project' } },
        q: { en: 'A Song ruler would most likely promote these ideas in order to...' },
        choices: [{ en: 'encourage loyalty and order in the state' }, { en: 'spread Buddhism to Korea and Japan' }, { en: 'let rich merchants choose the next emperor of China' }, { en: 'end the civil service exams for good' }],
        answer: 0,
        why: { en: 'Confucian hierarchy taught subjects to be loyal to their ruler, so the Song promoted it and built its exams on it.' }
      },
      {
        q: { en: 'Which best describes the Delhi Sultanate in this period?' },
        choices: [{ en: 'Turkic Muslim rulers who mostly tolerated Hindus' }, { en: 'A Hindu kingdom that conquered the Mongols\' homeland' }, { en: 'A Christian state allied with the pope' }, { en: 'A merchant city-state on the Swahili coast' }],
        answer: 0,
        why: { en: 'A Turkic general founded it in 1206. Its sultans held back the Mongols and generally tolerated Hindu subjects.' }
      }
    ]
  },
  learned: [
    { en: 'Rulers built and [[legitimize|legitimized]] power in many ways: faith (Inca, Catholic Europe, Muslim sultans), trade (Mali, Swahili cities), conquest and [[tribute|tribute]] (Aztecs, Timur) and officials (China).' },
    { en: 'China ruled through a [[bureaucracy|bureaucracy]] chosen by exams, while Europe was decentralized under [[feudalism|feudalism]] and [[dar al-islam|Dar al-Islam]] was split politically but united by culture.' },
    { en: 'Most states mixed several methods, and many practiced [[religious pluralism|religious pluralism]], from Mali to the Mongol khans.' }
  ],
  reflect: {
    q: { en: 'AP practice: Explain one similarity OR one difference in how two states from different regions built or legitimized power, c. 1200–1450.' },
    starter: { en: 'One similarity between how ___ and ___ held power was that' }
  }
};
