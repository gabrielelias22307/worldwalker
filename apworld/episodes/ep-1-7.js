/* HISTORYWALKER · Episode 1.7 · Comparison in the Period c. 1200–1450 (AP World Topic 1.7)
   Samarkand, Timur's capital in Central Asia, in 1400: travelers compare how their homelands' states were built and
   how rulers kept power (Song and Ming China, Dar al-Islam, the Delhi Sultanate, Mali and the Swahili coast, Europe;
   the Americas are added by Quill, since no one in Samarkand knew of them before 1500).
   Content source: Khan Academy, AP World History (World History Project), Unit 1: "Comparison: States 1200–1450",
   "Unit 1 Introduction: The Global Tapestry, c. 1200 to 1450" (Trevor Getz), "East Asia 1200–1450" (Merry Wiesner-Hanks),
   "Dar al-Islam 1200–1450" (Bennett Sherry), "South and Southeast Asia 1200–1450" (Merry Wiesner-Hanks),
   "State and Religion in Afro-Eurasia, c. 1200–1450" (Trevor Getz), "The Americas 1200–1450" (William H. Beezley),
   "Africa 1200–1450" (Trevor Getz), "States and Empires of West Africa" (Trevor R. Getz), "Europe 1200–1450"
   (Jack Bouchard), "Confucianism" (Eman M. Elshaikh: the Analects passages on the reading stand); scenes.next from "Archipelago of Trade" (Unit 2). World History Project content is CC BY-NC 4.0.
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
    { en: 'The Void smudged the page that compares the world\'s states. In Samarkand, travelers are forgetting how their rulers hold power!' },
    { en: 'Talk to the 4 travelers, read the 2 sources on the stands, help a merchant from Delhi, then wake the time stone.' }
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
        { en: 'I am a [[qadi|qadi]], a judge of Islamic law. Sunni and Shi\'a scholars serve sultans as judges and keep order; in return, rulers fund our schools.' },
        { en: 'The Abbasid [[caliphate|Caliphate]] (750–1258) once ruled from Baghdad. It declined after 900, and in 1258 the Mongols sacked Baghdad and killed the last caliph.' },
        { en: 'Yet between 1000 and 1500 [[dar al-islam|Dar al-Islam]] nearly doubled in size, reaching sub-Saharan Africa, the East African coast, India and Southeast Asia.' },
        { en: 'Ibn Battuta of Morocco felt at home from Mali to India, and even worked as a judge there. Marco Polo of Venice was a stranger everywhere. Arabic tied us together.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Which best describes how Dar al-Islam in 1200–1450 differed from the age of the Abbasid Caliphate?' },
        choices: [
          { ok: true, t: { en: 'Divided in politics, but united by culture' }, why: { en: 'Yes. Power was split among many states, but Islam, Arabic and shared values kept spreading and connecting people.' } },
          { t: { en: 'Politically united again under Turkic sultans' }, why: { en: 'No. Turkic dynasties founded several separate states. No single ruler united Dar al-Islam again.' } },
          { t: { en: 'Shrinking, as Mongol conquests drove Islam back' }, why: { en: 'No. The Mongols sacked Baghdad, but their conquests helped Islam spread further than ever before.' } },
          { t: { en: 'Cut off from Africa and India by Mongol rule' }, why: { en: 'No. Between 1000 and 1500 Dar al-Islam nearly doubled in size, reaching sub-Saharan Africa, the East African coast, India and Southeast Asia.' } }
        ]
      }
    },
    {
      x: 21, y: 7, name: { en: 'Zhang' }, role: { en: 'Silk merchant from Ming China' },
      look: { skin: 1, hair: '#1b1410', shirt: '#8a3a2a', robe: true, style: 'bun' },
      lines: [
        { en: 'In China an emperor rules through a [[bureaucracy|bureaucracy]]. Under the Song (960–1279), hundreds of thousands of young men took [[civil service exam|civil service exams]] after years of study.' },
        { en: 'Zhu Xi (1130–1200) made Confucian writings the basis of the exams. They teach loyalty: ruler over subject, like Heaven over Earth. Women could not take the exams.' },
        { en: 'Rulers live on taxes, so they want growth. Wet-field rice helped our people grow from about 50 million to 100 million, and in the 1120s the Song printed paper money.' },
        { en: 'The Mongols conquered the Song in the 1270s and ruled as the Yuan. In 1368 Taizu, once a penniless orphan, drove them out and founded the Ming.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Compared with most states of this time, what made China\'s government stand out?' },
        choices: [
          { ok: true, t: { en: 'Officials chosen by exams on Confucian writings' }, why: { en: 'Yes. Few governments outside China were strong enough to rule daily local life. Exams built a trained bureaucracy.' } },
          { t: { en: 'Power devolved to nobles, knights and city councils' }, why: { en: 'No. That describes feudal Europe. In China an emperor ruled through a trained bureaucracy.' } },
          { t: { en: 'Kings drawn from rich merchant families of the ports' }, why: { en: 'No. That describes the Swahili city-states of East Africa. China\'s emperors came from ruling dynasties.' } },
          { t: { en: 'Rulers backed by qadis trained in Islamic law' }, why: { en: 'No. That describes Muslim sultans in Dar al-Islam. China\'s emperor ruled through scholar-officials who passed exams on Confucian writings.' } }
        ]
      }
    },
    {
      x: 3, y: 14, name: { en: 'Bakary' }, role: { en: 'Gold trader from Mali' },
      look: { skin: 5, hair: '#140d08', shirt: '#d9a02b', robe: true, hat: '#f2ece0', style: 'short' },
      lines: [
        { en: 'My ruler is the [[mansa|mansa]] of Mali. Sunjata defeated Susu around 1240 and built Mali. It came to stretch more than a thousand miles from east to west.' },
        { en: 'Sahel states share one model: control long-distance trade, rule the wet grain lands by the rivers, and accept many faiths. That is [[religious pluralism|religious pluralism]].' },
        { en: 'Sunjata may have been Muslim, yet he kept [[matrilineality|matrilineality]]. "Sogolon," in his full name, was his mother\'s name, and much of his power came through her.' },
        { en: 'Mansa Musa took power around 1312. Mali controlled much of the gold of western Afro-Eurasia, so a map-maker in Spain drew him holding a gold nugget.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Which best explains how rulers of Sahel states like Mali mostly paid for their states?' },
        choices: [
          { ok: true, t: { en: 'By controlling and taxing long-distance trade' }, why: { en: 'Yes. Gold above all. They also made textiles, but trade was easier to tax, so rulers focused on controlling it.' } },
          { t: { en: 'By taxing the cloth made in their workshops' }, why: { en: 'No. Sahel states did make textiles, but their governments focused on trade because it was easier to tax.' } },
          { t: { en: 'By collecting tribute from nomadic herders' }, why: { en: 'No. These states had little control over nomadic herders; at most they sometimes demanded tribute.' } },
          { t: { en: 'By conquering neighbors and seizing their land' }, why: { en: 'No. Sunjata did defeat Susu to build Mali, but the Sahel model rested on controlling and taxing long-distance trade, gold above all.' } }
        ]
      }
    },
    {
      x: 22, y: 19, name: { en: 'Pietro' }, role: { en: 'Merchant from Venice' },
      look: { skin: 0, hair: '#6b4a2a', shirt: '#3a4a8a', pants: '#2a2a3a', hat: '#7a2a2a', style: 'short' },
      lines: [
        { en: 'In Europe power is devolved. A king grants a lord a province for military support; the lord grants villages to knights and monasteries. We call it [[feudalism|feudalism]].' },
        { en: 'Most of us farm a lord\'s manor without owning the land. Then in the late 1340s the Black Death struck, and Europe lost a third to half of its people.' },
        { en: 'The king of France directly rules only a few provinces near Paris! Germany broke into hundreds of small units under a weak emperor.' },
        { en: 'Priests teach that kings rule with God\'s approval. But Pope Innocent IV [[excommunicate|excommunicated]] Emperor Frederick II in 1239, and Frederick expelled many priests.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Compared with China, how was political power organized in Europe?' },
        choices: [
          { ok: true, t: { en: 'Decentralized, with local lords holding power' }, why: { en: 'Yes. China\'s emperor ruled through trained officials, while Europe\'s kings were often weak and nobles ruled locally.' } },
          { t: { en: 'Centralized, with kings ruling through officials' }, why: { en: 'No. Europe had no civil service exams. Nobles, knights, church leaders and city councils held power.' } },
          { t: { en: 'Unified under the pope, who ruled every kingdom' }, why: { en: 'No. Popes competed with kings and could excommunicate them, but Europe stayed split into many states.' } },
          { t: { en: 'Unified under one strong emperor in Germany' }, why: { en: 'No. Germany itself broke into hundreds of small units under a weak emperor, and France\'s king directly ruled only a few provinces.' } }
        ]
      }
    },
    {
      doc: true, x: 17, y: 9, icon: '📜',
      name: { en: 'The Analects: How to Guide a State' }, role: { en: 'Primary source' },
      src: { en: 'Confucius (551–479 BCE), The Analects, compiled by his followers after his death; quoted in "Confucianism," World History Project' },
      lines: [
        { en: '"The Master said: Guide them with policies and align them with punishments and the people will evade them and have no shame. Guide them with virtue and align them with li [traditions and virtues of the Zhou] and the people will have a sense of shame and fulfill their roles…"' },
        { en: '"The Master said: To guide a state great enough to possess a thousand war chariots: be attentive to affairs and trustworthy; regulate expenditures and treat persons as valuable; employ the people according to the proper season."' },
        { en: 'Context: Confucius (551–479 BCE) lived in the Eastern Zhou dynasty, when rival states fought frequent wars. Troubled by this turmoil, he taught that virtue and education, not harsh laws and punishments like those of Legalism, restore order. His followers compiled his teachings as The Analects after his death.' },
        { en: 'Centuries later, the Song made Confucianism the philosophy of the state. Zhu Xi\'s collection of Confucian writings became the basis of the civil service exams, so every official studied them. In return for loyalty, the ruler was responsible for justice and care for his subjects.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Point of view: what most shaped Confucius\'s advice to rule by virtue instead of punishment?' },
        choices: [
          { ok: true, t: { en: 'The wars and turmoil of the Eastern Zhou' }, why: { en: 'Yes. Rival states fought often in his time. He looked for a moral way to restore order.' } },
          { t: { en: 'The Mongol conquest of China in the 1270s' }, why: { en: 'No. Confucius died in 479 BCE, about 1,700 years before the Mongols conquered the Song.' } },
          { t: { en: 'The Song exams on Zhu Xi\'s Confucian books' }, why: { en: 'No. The exams came long after Confucius. They were built on his teachings, not the cause of them.' } },
          { t: { en: 'Life in a unified empire run by officials' }, why: { en: 'No. In his time China was split among rival states at war. A unified government run by Confucian officials came many centuries later.' } }
        ]
      }
    },
    {
      doc: true, x: 16, y: 14, icon: '📖',
      name: { en: 'Worlds Apart, Worlds Together' }, role: { en: 'Reading' },
      src: { en: 'Adapted from "Unit 1 Introduction: The Global Tapestry, c. 1200 to 1450" by Trevor Getz, World History Project (Khan Academy)' },
      lines: [
        { en: 'Societies around the world from 1200 to 1450 were both together and apart. Travel and communication were slow and difficult, and the two hemispheres, Afro-Eurasia and the Americas, were not definitively connected until about 1500. In many cases, culture, politics and economics were unique from region to region, and even within regions.' },
        { en: 'At the center of Afro-Eurasia, Islamic states connected the regions. Ruled by Muslims, they held many faiths, including Judaism and Christianity. In South and Southeast Asia, Islam mingled with Hinduism and Buddhism. Europe was fragmented and decentralized, but tied together by Christianity and elements left from Roman rule. In China, Confucianism and a long history of imperial bureaucracy sustained a unified government, the Song.' },
        { en: 'The Sahara Desert partly separated sub-Saharan Africa, and oceans separated the Americas, yet both had long histories of state-building. Linked trading circuits carried goods like spices from China to northwest Europe. Then in the 1340s a plague spread along those same routes, killing tens of millions of people or more. The network only recovered in the 1400s, and the plague never touched the Americas at all.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'According to the reading, how did Europe compare with China around 1200?' },
        choices: [
          { ok: true, t: { en: 'Europe was fragmented; China had one government' }, why: { en: 'Yes. Europe was decentralized but shared Christianity; China was unified by Confucianism and an imperial bureaucracy.' } },
          { t: { en: 'Both were held together by Confucian exams' }, why: { en: 'No. Only China used Confucianism and exams. Europe was tied together by the Christian faith.' } },
          { t: { en: 'Europe was united by Rome; China was split up' }, why: { en: 'No. It was the reverse: Rome left Europe only shared cultural elements, while the Song unified China.' } },
          { t: { en: 'Both were fragmented but tied by trade routes' }, why: { en: 'No. Trading circuits linked many regions, but only Europe was fragmented. In China, Confucianism and an imperial bureaucracy sustained one government.' } }
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
        { en: 'I come from the [[delhi sultanate|Delhi Sultanate]], founded in 1206 by a Turkic general. Its Muslim sultans defeated the Mongol armies and generally tolerated Hindus like me.' },
        { en: 'Hindu Rajput kings fund temples, and the [[brahmin|brahmins]] back them. But the Void\'s helpers knocked my cotton off the cart! Ask the guard at the east gate.' }
      ],
      wait: { en: 'The guard stands just inside the east gate of the city wall.' },
      thanks: { en: 'My cotton! Merchants have carried India\'s cotton across Dar al-Islam for centuries. Thank you, friend.' }
    },
    contact: {
      x: 25, y: 14, name: { en: 'Aybek' }, role: { en: 'Gate guard' },
      look: { skin: 2, hair: '#1b1410', shirt: '#7a3a2a', pants: '#3a2a2a', hat: '#5a4a3a', style: 'short' },
      lines: [
        { en: 'I serve in Timur\'s army. He is of Turkic and Mongol descent, mixes their ways of war, and has attacked Persia, Russia and north India.' },
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
    intro: { en: 'The Void scrambled how states built and [[legitimize|legitimized]] power. Carry each card to its method. Quill adds cards from the Americas, unknown here before 1500.' },
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
    name: { en: 'The Void' },
    appear: { en: 'The Void has opened outside the east gate. The road is being pulled into it.' },
    taunt: { en: 'Gold, priests, exams, armies. Different on the surface. In the dark, every state looks the same.' },
    win: { en: 'The Void closes over Samarkand. The page comparing the world\'s states floats down into your hands.' },
    questions: [
      {
        stim: { text: { en: '"Guide them with policies and align them with punishments and the people will evade them and have no shame. Guide them with virtue … and the people will have a sense of shame and fulfill their roles…"' }, src: { en: 'Confucius, The Analects (compiled after his death in 479 BCE); quoted in "Confucianism," World History Project' } },
        q: { en: 'Song officials studied Confucian writings like this for the civil service exams. Which best explains why the state valued them?' },
        choices: [{ en: 'They taught that virtue, not punishment, keeps order' }, { en: 'They set out harsh laws for punishing rebels' }, { en: 'They showed officials how to tax long-distance trade' }, { en: 'They proved the emperor was a sun god\'s son' }],
        answer: 0,
        why: { en: 'Confucius rejected harsh Legalist punishments. Moral training was meant to make subjects loyal and fulfill their roles, which served the Song state.' }
      },
      {
        stim: { text: { en: '"To guide a state great enough to possess a thousand war chariots: be attentive to affairs and trustworthy; regulate expenditures and treat persons as valuable; employ the people according to the proper season."' }, src: { en: 'Confucius, The Analects; quoted in "Confucianism," World History Project' } },
        q: { en: 'The excerpt most directly reflects which Confucian idea about rulers?' },
        choices: [{ en: 'A ruler must care justly for his subjects' }, { en: 'A ruler must share power with a parliament' }, { en: 'A ruler wins legitimacy by funding temples' }, { en: 'A ruler should be chosen by written exams' }],
        answer: 0,
        why: { en: 'Confucian hierarchy put the ruler above his subjects, but made him responsible for justice and care: be trustworthy, spend wisely, value people.' }
      },
      {
        stim: { title: { en: 'Three regions of Afro-Eurasia, c. 1200–1450' }, rows: [[{ en: 'Region' }, { en: 'Political unity' }, { en: 'What connected people' }], [{ en: 'Europe' }, { en: 'Fragmented, decentralized' }, { en: 'Christian faith; Roman legacy' }], [{ en: 'Dar al-Islam' }, { en: 'Split among many states' }, { en: 'Islam; Arabic language' }], [{ en: 'Song China' }, { en: 'One unified government' }, { en: 'Confucianism; bureaucracy' }]], src: { en: 'From "Unit 1 Introduction: The Global Tapestry" and "Dar al-Islam 1200–1450," World History Project' } },
        q: { en: 'The table best supports which claim?' },
        choices: [{ en: 'Shared culture could link divided states' }, { en: 'Political division destroyed each region\'s shared culture' }, { en: 'Only regions with bureaucracies had shared beliefs' }, { en: 'Europe and Dar al-Islam each had one religious ruler' }],
        answer: 0,
        why: { en: 'Europe and Dar al-Islam lacked political unity, yet Christianity, Islam and Arabic still connected their peoples. China was unified as well.' }
      },
      {
        stim: { text: { en: 'In the 1340s, a plague spread along these same trade routes, in Europe, Asia, and North Africa, and brought down much of this network.' }, src: { en: 'Adapted from "Unit 1 Introduction: The Global Tapestry, c. 1200 to 1450," World History Project' } },
        q: { en: 'Which best explains why the plague described did not reach the Americas?' },
        choices: [{ en: 'The two hemispheres were not yet connected' }, { en: 'The Sahara Desert stopped the plague\'s spread' }, { en: 'Mongol armies kept the plague inside China' }, { en: 'Trade routes of the time ran only over land' }],
        answer: 0,
        why: { en: 'Oceans separated the Americas from Afro-Eurasia until about 1500. The plague moved along Afro-Eurasian trading circuits, by land and by sea.' }
      },
      {
        stim: { text: { en: 'Unlike Marco Polo, Ibn Battuta found himself at home everywhere he traveled… he was able to work as a judge thousands of miles from home.' }, src: { en: 'Adapted from "Dar al-Islam 1200–1450," World History Project' } },
        q: { en: 'Which best explains the experience described in the excerpt?' },
        choices: [{ en: 'Arabic and shared beliefs linked separate states' }, { en: 'The Abbasid caliph still ruled from Mali to India' }, { en: 'Turkic sultans had united Dar al-Islam as one empire' }, { en: 'Mongol khans made every subject convert to Islam' }],
        answer: 0,
        why: { en: 'Political unity was gone after the Abbasids, but a shared language and faith made Dar al-Islam one cultural world.' }
      },
      {
        stim: { text: { en: 'These states also manufactured goods, especially textiles, but their governments were more focused on trade because it was easier to tax.' }, src: { en: 'Adapted from "States and Empires of West Africa," World History Project' } },
        q: { en: 'The excerpt describes Sahel states such as Mali. Which was a similarity between them and the Swahili city-states?' },
        choices: [{ en: 'Both drew their wealth mainly from trade' }, { en: 'Both were run by councils of merchant families' }, { en: 'Both banned local faiths in favor of Islam' }, { en: 'Both ruled through officials chosen by exams' }],
        answer: 0,
        why: { en: 'Mali taxed the gold trade; Swahili ports traded with Arab and Indian merchants. Merchant rule was Swahili only, and Mali accepted many faiths.' }
      },
      {
        stim: { title: { en: 'Rulers and religion, c. 1200–1450' }, rows: [[{ en: 'State' }, { en: 'Link between ruler and religion' }], [{ en: 'Inca Empire' }, { en: 'Sapa Inca is the sun god Inti\'s representative' }], [{ en: 'Catholic Europe' }, { en: 'Kings rule with God\'s approval' }], [{ en: 'Hindu kingdoms of India' }, { en: 'Kings fund temples; brahmins back them' }]], src: { en: 'From "The Americas 1200–1450" and "State and Religion in Afro-Eurasia," World History Project' } },
        q: { en: 'Which conclusion does the table best support?' },
        choices: [{ en: 'Rulers in separate regions tied power to faith' }, { en: 'This practice spread from Europe to Asia and the Americas' }, { en: 'In each state, priests held more power than kings' }, { en: 'Only rulers of polytheistic faiths claimed divine support' }],
        answer: 0,
        why: { en: 'The Andes, Europe and India reached the same pattern separately: the Americas were not yet connected to Afro-Eurasia. Catholic kings were not polytheists.' }
      },
      {
        q: { en: 'Which best explains why the Mongols never gained lasting power in India?' },
        choices: [{ en: 'The Delhi sultans\' armies defeated them' }, { en: 'Hindu Rajput kings joined Timur against them' }, { en: 'Heat and humidity stopped them in Vietnam first' }, { en: 'The Ming general Taizu drove them out of India' }],
        answer: 0,
        why: { en: 'The Delhi Sultanate, founded in 1206 by a Turkic general, defeated several Mongol campaigns. Taizu drove the Mongols out of China, not India.' }
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
