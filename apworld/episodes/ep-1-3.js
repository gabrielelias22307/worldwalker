/* HISTORYWALKER · Episode 1.3 · Developments in South and Southeast Asia (AP World Topic 1.3, c. 1200–1450)
   Delhi, capital of the Delhi Sultanate, in 1312 (the year the new carved gateway beside the Qutb Minar was built).
   Content source: Khan Academy, AP World History (World History Project), Unit 1 Lesson "Developments in South and
   Southeast Asia": "South and Southeast Asia 1200–1450" (Merry Wiesner-Hanks), "State and Religion in Afro-Eurasia,
   c. 1200–1450" (Trevor Getz), "Opener: Mapping Predictions"; unit overview "Unit 1 Introduction: The Global Tapestry,
   c. 1200 to 1450" and "Two Pots of Porridge" (Trevor Getz). World History Project content is CC BY-NC 4.0.
   Facts here come from those readings. English only, AP level. */
window.EPISODE = {
  id: '1.3',
  realm: 1,
  sol: 'AP 1.3',
  style: 'india',
  weather: { sky: 'heat', time: 'day' },
  title: { en: 'Developments in South and Southeast Asia' },
  place: { en: 'Delhi, Delhi Sultanate, 1312' },
  intro: [
    { en: 'The Void blurred the page on South and Southeast Asia. Delhi is forgetting its sultans, its faiths and its villages!' },
    { en: 'Talk to the 4 people here and read the 2 sources on the reading stands. Help a grain seller, then wake the time stone.' }
  ],
  scenes: {
    at: [77.21, 28.61],
    year: 1312,
    start: [
      { en: 'In 1206, a Turkic Muslim general set up an independent sultanate at Delhi.' },
      { en: 'Its sultans held most of north India and drove back Mongol invasions.' },
      { en: 'South and Southeast Asia held many states, but no single empire ruled them all.' }
    ],
    guess: {
      q: { en: 'Hinduism, Buddhism and Islam all spread in this region. Did people keep them strictly apart?' },
      choices: [{ t: { en: '🔀 They often blended' }, ok: true }, { t: { en: '🧱 Always kept apart' } }],
      why: { en: 'Many people blended new faiths with local beliefs and rituals they already had.' }
    },
    page: { en: 'Angkor Wat was built as a Hindu temple to Vishnu, then became a Buddhist holy site.' },
    next: {
      q: { en: 'Next: the Americas. Oceans cut them off from Afro-Eurasia. Did they still build states?' },
      choices: [{ t: { en: 'Yes, they did' }, ok: true }, { t: { en: 'No, none at all' } }],
      why: { en: 'The Americas had long histories of religious change and state building. You go there next.' }
    }
  },
  start: [15, 6],
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT',
    'T.DDDDDD..D..l.T.RRRR.DDDDDD..pT',
    'T.DDDDDD.DDDTl...hhdh.DDDDDD...T',
    'T.DDdDDD.DDD.lx....l..DDdDDD.,.T',
    'T............l.....l....l......T',
    'TllllllllllllllllllllllllllllllT',
    'T..,...l.........l.............T',
    'T.QQQ..l.........l..mlmlmlmY..TT',
    'T.hdh..l.........l..lllllll....T',
    'TT.....l.,T...T..l........T..T.T',
    'T......l.........l..Y.T.,......T',
    'TWWWWWWlWWWWWWWWWlWWWWWWWWWWWWWT',
    'TT.....:..HHH.T.x:........s~==~T',
    'T.HHH..:..NdN....:..DDD...s~==~T',
    'T.NdN..:.........:..DdD...s~==~T',
    'T:::::::::::::::::::::::::s~==~T',
    'T............x...........ks~==~T',
    'Toooo:wwwwww:wwww.......x.s~==~T',
    'T~~~~B~~~~~~B~~~~.....,...s~==~T',
    'Twwww:wwwwww:wwww..T....T.s~==~T',
    'T....:......:.............s~==~T',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT'
  ],
  words: {
    'delhi sultanate': { en: 'a Muslim state in north India, set up at Delhi in 1206 by a Turkic general; it lasted about 300 years' },
    'sultan': { en: 'a Muslim title for a ruler' },
    'mongols': { en: 'nomads from the steppes of Central Asia who built a huge empire in the 1200s' },
    'toleration': { en: 'letting people of other faiths live and worship under your rule' },
    'bhakti': { en: 'a Hindu devotional movement: personal love of God, often Krishna, Vishnu or Rama' },
    'social hierarchy': { en: 'a ranking of people from higher to lower' },
    'hinduism': { en: 'a polytheistic faith (many gods) from South Asia, with a priestly class called brahmins' },
    'rajput': { en: 'a member of Hindu hereditary clans who saw themselves as descended from warriors' },
    'brahmin': { en: 'a member of the Hindu priestly class' },
    'purdah': { en: 'the seclusion of women, keeping them apart from public life' },
    'polycentric': { en: 'having more than one center' },
    'nalanda': { en: 'a great Buddhist monastery in north India, a center of learning; destroyed in 1193' },
    'village council': { en: 'a local government of male household heads that ran farming, irrigation and common land' },
    'qadi': { en: 'a Muslim judge' },
    'sufism': { en: 'a mystical movement in Islam that stresses personal spiritual experience' },
    'dar al-islam': { en: 'the Muslim world; by 1200 it stretched from West Africa to India' },
    'theravada': { en: 'a form of Buddhism from Sri Lanka; by the 1300s the most prominent kind in Southeast Asia' },
    'pluralistic': { en: 'having people of many faiths living in one state' },
    'dai viet': { en: 'the kingdom in Vietnam created after regional overlords threw out the Chinese in the 1000s' }
  },
  npcs: [
    {
      x: 18, y: 10, name: { en: 'Altun' }, role: { en: 'Gate guard' },
      look: { skin: 2, hair: '#1b1410', shirt: '#7a2a2a', pants: '#3a2a1a', hat: '#d8d0c0', style: 'short' },
      lines: [
        { en: 'My people are Turks. In the 1000s, Muslim Turkic armies based in what is now Afghanistan conquered much of northwest India.' },
        { en: 'In 1206 one of their generals set up an independent government here: the [[delhi sultanate|Delhi Sultanate]]. It once pushed briefly into the south, but it holds the north.' },
        { en: 'After conquering China, the [[mongols|Mongols]] tried to rule Vietnam and Myanmar. Heat, humidity and local forces beat them there.' },
        { en: 'Here they marched into north India again and again, sometimes with hundreds of thousands of men. But our sultan\'s armies defeated them.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'The Mongols failed both in Vietnam and in north India. Which best explains their failure in north India?' },
        choices: [
          { ok: true, t: { en: 'The Delhi sultan\'s armies defeated them' }, why: { en: 'Yes. The armies of the sultan of Delhi beat several huge Mongol campaigns, so the Mongols never gained permanent power in India.' } },
          { t: { en: 'Heat and humidity wore their armies down' }, why: { en: 'No. Heat, humidity and local forces stopped them in Vietnam and Myanmar. In north India, Delhi\'s armies defeated them.' } },
          { t: { en: 'Rajput kings paid them tribute to leave' }, why: { en: 'No. Rajputs were Hindu warrior clans who ruled their own kingdoms. The sultan\'s armies are what turned the Mongols back.' } },
          { t: { en: 'Timur\'s empire blocked their way into India' }, why: { en: 'No. Timur attacked north India himself, and only after the Mongols declined (he lived 1336–1405). Delhi\'s armies had already beaten the Mongols.' } }
        ]
      }
    },
    {
      x: 11, y: 4, name: { en: 'Yusuf' }, role: { en: 'Stone carver' },
      look: { skin: 3, hair: '#2b1d14', shirt: '#c9a24a', pants: '#4a3a2a', style: 'short' },
      lines: [
        { en: 'I carve the Alai Darwaza, the new gateway finished this year, 1312. It stands by the Qutb Minar, a sandstone and marble victory tower.' },
        { en: 'By 1200, [[dar al-islam|Dar al-Islam]] stretched from West Africa to India. The Turks brought Islam and Islamic architecture with them. My grandfather became a Muslim.' },
        { en: 'Still, the sultans generally [[toleration|tolerate]] their Hindu subjects. And Hindu kings rule central and southern India, and parts of the north.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Which best describes religion under the Delhi Sultanate?' },
        choices: [
          { ok: true, t: { en: 'Muslim rulers who mostly tolerated Hindus' }, why: { en: 'Right. The Turkic sultans brought Islam and generally tolerated Hindus. Many north Indians still chose to become Muslims.' } },
          { t: { en: 'Muslim rulers who forced Hindus to convert' }, why: { en: 'No. Many north Indians did convert, but the sultanate generally tolerated its Hindu subjects. Conversion was not forced on all.' } },
          { t: { en: 'Hindu rulers allied with brahmin priests' }, why: { en: 'No. That describes Rajput kingdoms in central and south India. Delhi\'s sultans were Turkic Muslims.' } },
          { t: { en: 'Muslim rulers who protected Buddhist monasteries' }, why: { en: 'No. Muslim rulers of north India were generally hostile to Buddhism. A Muslim army destroyed the Nalanda monastery in 1193, and Buddhism declined in India.' } }
        ]
      }
    },
    {
      x: 23, y: 14, name: { en: 'Savitri' }, role: { en: 'Devotional singer' },
      look: { skin: 4, hair: '#120c08', shirt: '#d9822b', robe: true, style: 'long' },
      lines: [
        { en: '[[hinduism|Hinduism]] is polytheistic: we worship many gods. It grew from older practices of north India and reached Southeast Asia by about 200 CE.' },
        { en: 'As it spreads, it changes. I sing [[bhakti|bhakti]] songs: personal love of God in one form, such as Krishna, Vishnu or Rama.' },
        { en: 'Bhakti teachers say every believer can be spiritually worthy through devotion. They play down [[social hierarchy|social rank]].' },
        { en: '[[rajput|Rajput]] kings fund temples, so [[brahmin|brahmin]] priests and kings are allies. But our states are [[pluralistic|pluralistic]], so rulers also tolerate Muslims, Zoroastrians and Buddhists.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'The bhakti movement most directly reflects which development?' },
        choices: [
          { ok: true, t: { en: 'Hinduism changing as it spread' }, why: { en: 'Yes. Bhakti was a Hindu devotional movement that stressed personal love of a god and downplayed social hierarchies.' } },
          { t: { en: 'Brahmins allying with Rajput kings' }, why: { en: 'No. That alliance was real, but it was about kings funding temples. Bhakti stressed personal devotion over rank.' } },
          { t: { en: 'Islam blending with local beliefs' }, why: { en: 'No. Blending happened among Muslim converts, but bhakti grew inside Hinduism: love of Krishna, Vishnu or Rama.' } },
          { t: { en: 'Sufism\'s stress on personal experience' }, why: { en: 'No. Sufism was also personal and egalitarian, but it was a mystical movement inside Islam. Bhakti was Hindu devotion to one god.' } }
        ]
      }
    },
    {
      x: 5, y: 9, name: { en: 'Hasan' }, role: { en: 'Muslim merchant' },
      look: { skin: 3, hair: '#1b1410', shirt: '#2a6a5a', robe: true, hat: '#f0ece0', style: 'short' },
      lines: [
        { en: 'I trade across the Bay of Bengal. Merchants and teachers like me carried Islam to the ports of Southeast Asia.' },
        { en: 'Malay rulers convert for religious, political and commercial reasons, and take the title [[sultan|sultan]]. Islam links them to a global trade network.' },
        { en: 'Traders marry local women, whose families connect them to wealth and power. New Muslims still honor local spirits, ancestors and even Hindu gods.' },
        { en: 'And there, Muslim women work and travel in public. [[purdah|Purdah]] is rare. Outside ideas are fitted to local traditions.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Compared with Islam in north India, Islam in Southeast Asian ports was...' },
        choices: [
          { ok: true, t: { en: 'mixed with local rituals; purdah rare' }, why: { en: 'Yes. Converts kept older rituals, and Muslim women often worked and traveled in public. Islam was localized.' } },
          { t: { en: 'brought by conquest, as in Delhi' }, why: { en: 'No. Turkic armies brought Islam to north India, but merchants and teachers carried it to Southeast Asia.' } },
          { t: { en: 'kept with strict purdah for women' }, why: { en: 'No. Purdah was rare in Southeast Asia. Wealthy city women in South Asia were the most secluded.' } },
          { t: { en: 'taken up by rulers but not by townspeople' }, why: { en: 'No. Malay rulers did convert, but many city people were drawn to Islam too, often through traders marrying local women.' } }
        ]
      }
    },
    {
      doc: true, x: 16, y: 2, icon: '📜',
      name: { en: 'The Qutb Minar and Alai Darwaza' }, role: { en: 'Primary source' },
      src: { en: 'The Qutb Minar and the Alai Darwaza (gateway built 1312), Delhi; shown and described in "South and Southeast Asia 1200–1450," World History Project' },
      lines: [
        { en: 'Buildings are sources too. Look at this monument group in Delhi. The reading names three parts: "the Qutb Minar, a sandstone and marble victory tower, constructed by several different sultans," "the Alai Darwaza, a gateway with intricate carvings built in 1312," and "the tomb of a Muslim cleric."' },
        { en: 'Who made it: the sultans of Delhi, Turkic Muslim rulers whose state began in 1206. Several sultans added to the tower, so it was built over many reigns. "The sultans of Delhi brought Islamic architecture to India."' },
        { en: 'For whom and why: a victory tower stands where everyone can see it. Rulers in this age often funded religious buildings and claimed the support of God. These stones announced that Muslim sultans now ruled north India.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Sourcing: what was the most likely purpose of a victory tower and a carved gateway built by Delhi\'s sultans?' },
        choices: [
          { ok: true, t: { en: 'To display the power of Muslim rule' }, why: { en: 'Yes. A victory tower built by several sultans showed their power and the arrival of Islam and its architecture in north India.' } },
          { t: { en: 'To honor the Hindu god Vishnu' }, why: { en: 'No. That was Angkor Wat, built by Khmer rulers in Cambodia. These were built by Muslim sultans.' } },
          { t: { en: 'To house Buddhist monks and students' }, why: { en: 'No. That was Nalanda, a Buddhist monastery that a Muslim army destroyed in 1193.' } },
          { t: { en: 'To honor Sufis who opposed the sultans' }, why: { en: 'No. The group does hold a Muslim cleric\'s tomb, but sultans built it. Many rulers saw Sufis as a threat; a victory tower celebrates the rulers.' } }
        ]
      }
    },
    {
      doc: true, x: 12, y: 9, icon: '📖',
      name: { en: 'South and Southeast Asia, 1200–1450' }, role: { en: 'Reading' },
      src: { en: 'Adapted from "South and Southeast Asia 1200–1450" by Merry Wiesner-Hanks, World History Project (Khan Academy)' },
      lines: [
        { en: 'From 1200 to 1450, South and Southeast Asia were extremely diverse. Most people lived in villages, but some lived in trading cities. Regional states sometimes grew into kingdoms, but no single empire stretched across the region. In north India, the Delhi Sultanate, founded in 1206, was ruled by various dynasties for 300 years. Its armies defeated several Mongol campaigns, so the Mongols never gained permanent power in India.' },
        { en: 'In Southeast Asia, about 900 to 1400 is called the era of "classical states," because later rulers copied their models. In Vietnam, regional overlords threw out the Chinese in the 1000s and created Dai Viet, ruled by the Tran dynasty (1225–1400). They modeled their bureaucracy on China\'s, and Confucian values shaped society. Yet a strong Vietnamese identity also grew.' },
        { en: 'Pagan (Myanmar) and Angkor (Cambodia) organized strong armies and built huge buildings. Angkor Wat was first dedicated to the Hindu god Vishnu. Indian writing, literature and art crossed the Bay of Bengal, promoted by rulers building their authority on the Indian model. Theravada Buddhism and Islam also spread there. Everywhere, outside ideas were localized to fit local traditions.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Based on the reading, which best explains why Indian writing and art spread to Southeast Asian kingdoms?' },
        choices: [
          { ok: true, t: { en: 'Rulers used them to build authority' }, why: { en: 'Yes. Rulers of states like Angkor promoted Indian writing, literature and art to build up their authority on the Indian model.' } },
          { t: { en: 'Delhi\'s sultans conquered the region' }, why: { en: 'No. The Delhi Sultanate held power mainly in north India. It never ruled Southeast Asia.' } },
          { t: { en: 'Chinese officials carried them south' }, why: { en: 'No. China\'s model shaped Dai Viet\'s bureaucracy. Indian culture crossed the Bay of Bengal, promoted by local rulers.' } },
          { t: { en: 'Mongol armies brought them there' }, why: { en: 'No. The Mongols tried to rule Vietnam and Myanmar, but heat, humidity and local forces defeated them. Local rulers promoted Indian culture.' } }
        ]
      }
    }
  ],
  houses: [
    { at: [4, 3], name: { en: 'Master carver Idris' }, look: { skin: 3, hair: '#8a8a8a', shirt: '#7a5a3a', robe: true, style: 'short' },
      lines: [{ en: 'Our new gateway is finished this year, 1312. Look at all the carving!' }, { en: 'The sultans of Delhi brought Islamic architecture to India. Nearby is the tomb of a Muslim cleric.' }] },
    { at: [19, 2], name: { en: 'Lady Zainab' }, look: { skin: 2, hair: '#1b1410', shirt: '#8e5bd6', robe: true, style: 'long' },
      lines: [{ en: 'In wealthy city homes like mine, women are secluded. We call it purdah.' }, { en: 'Poor village women cannot stay inside. They work in the fields beside their families.' }] },
    { at: [24, 3], name: { en: 'Qadi Rashid' }, look: { skin: 2, hair: '#6e6e6e', shirt: '#2a3a6a', robe: true, hat: '#f0ece0', style: 'short' },
      lines: [{ en: 'I am a qadi, a judge. Muslim scholars like me keep order in the service of the sultan.' }, { en: 'In return, rulers fund Islamic schools. State and religion support each other.' }] },
    { at: [3, 8], name: { en: 'Innkeeper Bilqis' }, look: { skin: 4, hair: '#2b1d14', shirt: '#4a7aa8', style: 'bun' },
      lines: [{ en: 'Merchants, scholars and Sufis sleep here. Sufism stresses a personal experience of God.' }, { en: 'Sufis value brotherhood over obedience, so some rulers see them as a threat.' }] },
    { at: [3, 14], name: { en: 'Farmer Lakshmi' }, look: { skin: 5, hair: '#120c08', shirt: '#6a7a4a', style: 'long' },
      lines: [{ en: 'We farm land a rich landowner controls. He takes rent, and the ruler takes taxes.' }, { en: 'Some families flee to the hills and forests to escape taxes and labor. Most of us cannot.' }] },
    { at: [11, 13], name: { en: 'Elder Gopal' }, look: { skin: 4, hair: '#d8d8d8', shirt: '#b98250', pants: '#3a3a2a', style: 'short' },
      lines: [{ en: 'Tradition matters in our village, but life can change fast.' }, { en: 'New farming tools, epidemics, a changing climate and new beliefs all reach us here.' }] },
    { at: [21, 14], name: { en: 'Priest Shankar' }, look: { skin: 4, hair: '#2b1d14', shirt: '#f0e0b0', robe: true, style: 'bun' },
      lines: [{ en: 'I am a brahmin, a Hindu priest. Hindus worship many gods.' }, { en: 'Hinduism spread across the sea to Southeast Asia long ago, along with Indian writing and art.' }] }
  ],
  signs: [
    { x: 14, y: 3, text: { en: 'QUTB MINAR · A sandstone and marble victory tower, built by several sultans of Delhi.' } },
    { x: 16, y: 12, text: { en: 'SOUTH GATE · Delhi, seat of an independent sultanate since 1206.' } },
    { x: 13, y: 16, text: { en: 'VILLAGE FIELDS · The village council sets planting times and keeps the irrigation channel working.' } },
    { x: 24, y: 17, text: { en: 'RIVER LANDING · Monks and merchants carry Buddhist texts, relics and images across Asia.' } }
  ],
  finds: [
    { clueAt: [3, 16], at: [5, 20], decor: 'vase', clue: { en: 'From this note, walk 2 steps east. Then follow the field path south, over the channel bridge, to its end.' },
      text: { en: 'A farmer\'s clay water pot! Village councils kept channels like this one flowing to every field.' } }
  ],
  scraps: [[1, 1], [30, 3], [1, 20]],
  smudges: [[11, 16], [20, 4]],
  quest: {
    stat: 'reg',
    title: { en: 'Grain for the City' },
    giver: {
      x: 23, y: 6, name: { en: 'Gauri' }, role: { en: 'Grain seller' },
      look: { skin: 4, hair: '#1b1410', shirt: '#c0392b', robe: true, style: 'long' },
      lines: [
        { en: 'I sell grain with my husband. In South Asia, both Islam and a stricter Hinduism favor [[purdah|purdah]], the seclusion of women.' },
        { en: 'Wealthy city women are the most secluded. Poor rural women, the vast majority, work beside the men of their families, like me.' },
        { en: 'The Void spoiled my grain! Villages outside the wall grow it. Ask the boatman at the river landing. He knows every village.' }
      ],
      wait: { en: 'The boatman waits at the river landing: out the south gate, then southeast by the river.' },
      thanks: { en: 'Fresh grain! The sultan rules Delhi, but out there village councils run daily life. Thank you!' }
    },
    contact: {
      x: 25, y: 16, name: { en: 'Madho' }, role: { en: 'Boatman' },
      look: { skin: 5, hair: '#1b1410', shirt: '#4a6a3a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'Monks and merchants ride my boat with Buddhist texts and relics. Buddhism is [[polycentric|polycentric]]: it has many centers, from Sri Lanka to Japan.' },
        { en: 'In India it declined after a Muslim army destroyed [[nalanda|Nalanda]], the leading center of Buddhist learning, in 1193. Hinduism flourishes, above all in the south.' },
        { en: 'But the many centers kept Buddhism alive. In Southeast Asia, [[theravada|Theravada]] Buddhism from Sri Lanka now leads. It teaches that even small acts of devotion can win a better rebirth.' },
        { en: 'Headman Devraj sells grain. Follow the dirt path west from here, past the shrine and the gate road, to the village huts.' }
      ]
    },
    action: {
      type: 'trade',
      trader: {
        x: 9, y: 16, name: { en: 'Devraj' }, role: { en: 'Village headman' },
        look: { skin: 3, hair: '#4a4a4a', shirt: '#e0d8c0', pants: '#5a4a3a', hat: '#b03a2a', style: 'short' },
        lines: [
          { en: 'Our [[village council|village council]] of male household heads sets planting times, rotates crops and shares the common pasture.' },
          { en: 'Landowners take rent and rulers take taxes, but day to day, local authority matters more. In much of Southeast Asia, women even have significant legal rights.' },
          { en: 'The Void broke our irrigation channel! Bring what the council needs to mend it, and my grain is yours.' }
        ]
      },
      q: { en: 'What does the village council need to mend its irrigation channel?' },
      choices: [
        { ok: true, at: [6, 4], icon: '🪨', t: { en: 'Spare stones from the gateway works' },
          why: { en: 'Yes! The council keeps its own channel working. Local authority shaped daily life more than distant rulers.' } },
        { at: [26, 4], icon: '📜', t: { en: 'A letter asking the sultan for help' },
          why: { en: 'No. Rulers demanded taxes and rent, but villages governed daily matters themselves. The council mends its own channel.' } },
        { at: [14, 20], icon: '🌾', t: { en: 'A sack of grain from the fields' },
          why: { en: 'No. The village grows grain. That is what Devraj trades away. He needs something to mend the channel.' } }
      ],
      item: { icon: '🌾', name: { en: 'Sacks of village grain' } }
    }
  },
  challenge: {
    at: [13, 7],
    type: 'survey', // in the world; the card version (table) is the fallback
    // one post per state: Delhi by the Qutb Minar, the Hindu kingdoms by the shrine, Angkor at the river landing,
    // Dai Viet by the palace road, the Malay sultanates by the merchants' inn
    spots: [[9, 4], [19, 14], [22, 16], [28, 8], [5, 6]],
    stat: 'hei',
    title: { en: 'Survey the states' },
    intro: { en: 'The Void scrambled the record of the region. Read the 5 survey posts, one state on each. Then compare them at the time stone.' },
    table: {
      head: [{ en: 'State' }, { en: 'Rulers\' faith or model' }, { en: 'Key fact' }],
      rows: [
        [{ en: 'Delhi Sultanate (north India)' }, { en: 'Islam: Turkic sultans' }, { en: 'Founded 1206; drove back the Mongols; tolerated Hindu subjects' }],
        [{ en: 'Hindu kingdoms (central and south India)' }, { en: 'Hinduism: kings, some Rajputs' }, { en: 'Kings fund temples; brahmin priests and kings support each other' }],
        [{ en: 'Angkor (Khmer Empire)' }, { en: 'Hindu, then Buddhist' }, { en: 'Angkor Wat, built for Vishnu, became Buddhist when its rulers did' }],
        [{ en: 'Dai Viet (Vietnam)' }, { en: 'Confucian values, Chinese model' }, { en: 'Threw out the Chinese; built a bureaucracy on the Chinese system' }],
        [{ en: 'Malay sultanates' }, { en: 'Islam: rulers converted' }, { en: 'Rulers converted for faith, power and trade; took the title sultan' }]
      ],
      note: { en: 'From "South and Southeast Asia 1200–1450" and "State and Religion in Afro-Eurasia," World History Project.' }
    },
    questions: [
      { q: { en: 'Which two states had Muslim rulers?' },
        choices: [{ en: 'Delhi and the Malay sultanates' }, { en: 'Angkor and Dai Viet' }, { en: 'Dai Viet and the Hindu kingdoms' }, { en: 'Angkor and the Delhi Sultanate' }], answer: 0,
        why: { en: 'Turkic conquerors brought Islam to Delhi. Malay rulers converted after merchants and teachers brought Islam.' } },
      { q: { en: 'Which state shows its rulers changing from one faith to another?' },
        choices: [{ en: 'Angkor' }, { en: 'Dai Viet' }, { en: 'The Delhi Sultanate' }, { en: 'The Hindu kingdoms' }], answer: 0,
        why: { en: 'Angkor Wat was a Hindu temple. When Khmer rulers became Buddhist, it became a Buddhist site. Theravada Buddhism, from Sri Lanka, spread widely.' } },
      { q: { en: 'Which state modeled its government on China rather than India?' },
        choices: [{ en: 'Dai Viet' }, { en: 'Angkor' }, { en: 'The Malay sultanates' }, { en: 'The Hindu kingdoms' }], answer: 0,
        why: { en: 'Dai Viet threw out the Chinese but copied their bureaucracy. Confucian values mixed with a strong Vietnamese identity.' } },
      { q: { en: 'Which conclusion does the whole table best support?' },
        choices: [{ en: 'Many states and faiths; no single empire' }, { en: 'One empire ruled all of the region' }, { en: 'Islam replaced every other faith' }, { en: 'Every state copied China\'s government' }], answer: 0,
        why: { en: 'Regional states rose and fell, and rulers backed different faiths. Religion helped each of them build authority.' } }
    ],
    success: { en: 'The posts are clear! The region held many states, and rulers used Islam, Hinduism, Buddhism or a Chinese model to build their authority.' }
  },
  boss: {
    at: [21, 19], stat: 'hei', need: 3,
    name: { en: 'The Void' },
    appear: { en: 'The Void has opened in the fields by the river. The crops lean toward it.' },
    taunt: { en: 'Towers, temples, kingdoms. Stone crumbles, and everything that crumbles comes to me.' },
    win: { en: 'The Void closes over Delhi. The page on South and Southeast Asia floats down into your hands.' },
    questions: [
      {
        stim: { text: { en: '"The Qutb Minar, a sandstone and marble victory tower, constructed by several different sultans, the Alai Darwaza, a gateway with intricate carvings built in 1312, and the tomb of a Muslim cleric."' }, src: { en: 'Description of monuments in Delhi, "South and Southeast Asia 1200–1450," World History Project' } },
        q: { en: 'The structures described in the excerpt most directly reflect which of the following?' },
        choices: [{ en: 'Hindu kings funding temples and brahmins' }, { en: 'Islam arriving with Turkic conquerors' }, { en: 'Mongol khans sponsoring many faiths' }, { en: 'Malay rulers adopting the title sultan' }],
        answer: 1,
        why: { en: 'Turkic Muslim armies conquered north India and founded the Delhi Sultanate in 1206. Its sultans brought Islamic architecture, like the Qutb Minar, to India.' }
      },
      {
        stim: { text: { en: 'After conquering China, the Mongols tried to extend their authority over what are now Vietnam and Myanmar. However, challenged by the heat and humidity, they were defeated by local forces.' }, src: { en: 'Adapted from "South and Southeast Asia 1200–1450," World History Project' } },
        q: { en: 'Compared with the defeat described in the excerpt, the Mongols failed to gain permanent power in India mainly because...' },
        choices: [{ en: 'heat and humidity weakened their armies' }, { en: 'Rajput kings paid them tribute to leave' }, { en: 'the Delhi sultan\'s armies defeated them' }, { en: 'they converted to Islam and made peace' }],
        answer: 2,
        why: { en: 'Heat and local forces stopped the Mongols in Southeast Asia. In north India, the armies of the sultan of Delhi defeated campaigns of sometimes hundreds of thousands of men.' }
      },
      {
        stim: { text: { en: 'Bhakti teachers asserted that all believers could be spiritually worthy through individual devotion, and they downplayed social hierarchies.' }, src: { en: 'Adapted from "South and Southeast Asia 1200–1450," World History Project' } },
        q: { en: 'The movement described in the excerpt most directly reflects which of the following?' },
        choices: [{ en: 'Brahmins allying with Rajput kings' }, { en: 'Islam blending with local beliefs' }, { en: 'Hinduism changing as it spread' }, { en: 'Theravada teaching on rebirth' }],
        answer: 2,
        why: { en: 'Bhakti was a Hindu devotional movement: personal love of a god such as Krishna, Vishnu or Rama, open to every believer whatever their rank.' }
      },
      {
        stim: { title: { en: 'Angkor Wat, Khmer Empire' }, rows: [[{ en: 'Time' }, { en: 'Use' }], [{ en: '1100s' }, { en: 'Built by Khmer rulers as a Hindu temple to Vishnu' }], [{ en: 'Later' }, { en: 'Became a Buddhist holy site' }], [{ en: 'By the 1300s' }, { en: 'Theravada, from Sri Lanka, the leading Buddhism in Southeast Asia' }]], src: { en: 'From "South and Southeast Asia 1200–1450," World History Project' } },
        q: { en: 'Which of the following best explains the change in use shown in the table?' },
        choices: [{ en: 'Khmer rulers became Buddhist' }, { en: 'Delhi\'s sultans conquered the Khmer' }, { en: 'Dai Viet imposed its Confucian model' }, { en: 'Mongol khans sponsored Buddhist monks' }],
        answer: 0,
        why: { en: 'Not only ordinary people converted to Buddhism; rulers did too. When Angkor\'s rulers became Buddhist, the Hindu temple became a Buddhist holy site.' }
      },
      {
        stim: { text: { en: 'Many rulers of the states on the Malay peninsula and islands of Southeast Asia converted to Islam for a combination of religious, political, and commercial reasons. These rulers adopted the Muslim title of sultan.' }, src: { en: 'Adapted from "South and Southeast Asia 1200–1450," World History Project' } },
        q: { en: 'Which of the following best supports the claim that commercial reasons shaped these conversions?' },
        choices: [{ en: 'Delhi\'s armies conquered the Malay ports' }, { en: 'Islam offered ties to a global trade network' }, { en: 'Mongol khans ordered their vassals to convert' }, { en: 'Brahmin priests lost their royal patrons' }],
        answer: 1,
        why: { en: 'Islam spread to Southeast Asia through merchants and teachers, not conquest. Its trade connections across Dar al-Islam attracted rulers and city people.' }
      },
      {
        stim: { text: { en: 'In Southeast Asia, purdah was rare. Muslim women often worked, socialized, and traveled independently and in public view.' }, src: { en: 'Adapted from "South and Southeast Asia 1200–1450," World History Project' } },
        q: { en: 'Compared with South Asia, the excerpt best supports the claim that in Southeast Asia...' },
        choices: [{ en: 'wealthy women were secluded more strictly' }, { en: 'Islam spread mainly by military conquest' }, { en: 'Muslim converts gave up older rituals' }, { en: 'outside ideas were fitted to local ways' }],
        answer: 3,
        why: { en: 'In South Asia, wealthy city women were often secluded. In Southeast Asia, Islam was localized: converts kept older rituals and women stayed in public life.' }
      },
      {
        stim: { text: { en: 'In Vietnam, powerful regional overlords threw out the Chinese in the eleventh century and created the kingdom of Dai Viet. Rulers modeled their bureaucracy on the Chinese system.' }, src: { en: 'Adapted from "South and Southeast Asia 1200–1450," World History Project' } },
        q: { en: 'Which of the following was a continuity in Dai Viet despite the change described in the excerpt?' },
        choices: [{ en: 'A Chinese-style state, Confucian values' }, { en: 'Rule by officials sent from China itself' }, { en: 'Hindu kingship on the Indian model' }, { en: 'Theravada Buddhism as the faith of rulers' }],
        answer: 0,
        why: { en: 'Dai Viet threw out Chinese rule but kept a bureaucracy on the Chinese system, and Confucianism shaped its values, alongside a strong Vietnamese identity.' }
      },
      {
        stim: { text: { en: 'Muslim rulers of north India were generally hostile to Buddhism, and in 1193 a Muslim army destroyed Nalanda. After that, Buddhism declined in India.' }, src: { en: 'Adapted from "South and Southeast Asia 1200–1450," World History Project' } },
        q: { en: 'Which of the following best explains why Buddhism survived as a major faith after the event described?' },
        choices: [{ en: 'Delhi\'s sultans protected its monasteries' }, { en: 'It had many centers across Asia' }, { en: 'Rajput kings made it their state faith' }, { en: 'Bhakti teachers carried it into Hinduism' }],
        answer: 1,
        why: { en: 'Buddhism was polycentric. It declined in India, but it lived on from Sri Lanka and Southeast Asia to Japan.' }
      }
    ]
  },
  learned: [
    { en: 'Turkic Muslim generals founded the [[delhi sultanate|Delhi Sultanate]] in 1206. It drove back the Mongols and generally tolerated its Hindu subjects.' },
    { en: 'Hinduism changed through [[bhakti|bhakti]]; Buddhism faded in India after Nalanda but lived on elsewhere; merchants carried Islam to Southeast Asia.' },
    { en: 'No single empire ruled the region. Rulers used Islam, Hinduism, Buddhism or Chinese models to build authority, and new faiths blended with local ways.' }
  ],
  reflect: {
    q: { en: 'AP practice: Explain one way a ruler in South or Southeast Asia used religion to strengthen his authority, c. 1200–1450.' },
    starter: { en: 'One way a ruler used religion was' }
  }
};
