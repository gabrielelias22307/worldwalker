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
    { en: 'The Grump blurred the page on South and Southeast Asia. Delhi is forgetting its sultans, its faiths and its villages!' },
    { en: 'Talk to the 4 people here, help a grain seller, then wake the time stone.' }
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
    'sufism': { en: 'a mystical movement in Islam that stresses personal spiritual experience' }
  },
  npcs: [
    {
      x: 18, y: 10, name: { en: 'Altun' }, role: { en: 'Gate guard' },
      look: { skin: 2, hair: '#1b1410', shirt: '#7a2a2a', pants: '#3a2a1a', hat: '#d8d0c0', style: 'short' },
      lines: [
        { en: 'My people are Turks. In the 1000s, Muslim Turkic armies from what is now Afghanistan conquered much of northwest India.' },
        { en: 'In 1206 one of their generals made Delhi an independent state: the [[delhi sultanate|Delhi Sultanate]]. It holds most of north India.' },
        { en: 'The [[mongols|Mongols]] have invaded north India again and again, sometimes with huge armies. Our sultan\'s armies drive them back.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why did the Mongols never gain lasting power in India?' },
        choices: [
          { ok: true, t: { en: 'Delhi\'s armies defeated their invasions' }, why: { en: 'Yes. The armies of the sultan of Delhi defeated several Mongol campaigns, so the Mongols never held India for good.' } },
          { t: { en: 'The Mongols never tried to invade India' }, why: { en: 'No. The Mongols launched several campaigns into north India, sometimes with hundreds of thousands of men.' } },
          { t: { en: 'Hindu kings gave them the whole south' }, why: { en: 'No. Hindu kings ruled much of the south themselves. The Mongols never won lasting power anywhere in India.' } }
        ]
      }
    },
    {
      x: 11, y: 4, name: { en: 'Yusuf' }, role: { en: 'Stone carver' },
      look: { skin: 3, hair: '#2b1d14', shirt: '#c9a24a', pants: '#4a3a2a', style: 'short' },
      lines: [
        { en: 'I carve stone for the new gateway beside the Qutb Minar, a victory tower that several sultans have built.' },
        { en: 'The sultans brought Islam and Islamic architecture to India. Many north Indians, like my grandfather, became Muslims.' },
        { en: 'Still, the sultans generally [[toleration|tolerate]] their Hindu subjects. And Hindu kings rule much of central and southern India.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'How did the Delhi Sultanate generally treat its Hindu subjects?' },
        choices: [
          { ok: true, t: { en: 'It tolerated them; many still converted' }, why: { en: 'Right. The sultans were Muslim, but they generally tolerated Hindus. Many north Indians still chose to become Muslims.' } },
          { t: { en: 'It forced all of them to become Muslims' }, why: { en: 'No. The sultanate generally tolerated its Hindu subjects. Conversion happened, but not by forcing everyone.' } },
          { t: { en: 'It made Hinduism the faith of the state' }, why: { en: 'No. Delhi\'s sultans were Muslims who brought Islam with them. They ruled over Hindus, not as Hindus.' } }
        ]
      }
    },
    {
      x: 23, y: 14, name: { en: 'Savitri' }, role: { en: 'Devotional singer' },
      look: { skin: 4, hair: '#120c08', shirt: '#d9822b', robe: true, style: 'long' },
      lines: [
        { en: 'I sing [[bhakti|bhakti]] songs about my personal love for God, for Krishna above all.' },
        { en: 'Bhakti teachers say any believer can be spiritually worthy through devotion. They play down [[social hierarchy|social rank]].' },
        { en: '[[hinduism|Hinduism]] changes as it spreads. Hindu kings, some of them [[rajput|Rajputs]], fund temples, and [[brahmin|brahmin]] priests support those kings.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'What did bhakti teachers stress?' },
        choices: [
          { ok: true, t: { en: 'Personal devotion over social rank' }, why: { en: 'Yes. Bhakti said every believer could be worthy through love of God, and it downplayed social hierarchies.' } },
          { t: { en: 'Strict rules that only priests keep' }, why: { en: 'No. Bhakti put personal devotion first, open to all believers, not rules for a priestly class alone.' } },
          { t: { en: 'Giving up the gods to obey the sultan' }, why: { en: 'No. Bhakti was love for a god such as Krishna, Vishnu or Rama. It was not about obeying a ruler.' } }
        ]
      }
    },
    {
      x: 5, y: 9, name: { en: 'Hasan' }, role: { en: 'Muslim merchant' },
      look: { skin: 3, hair: '#1b1410', shirt: '#2a6a5a', robe: true, hat: '#f0ece0', style: 'short' },
      lines: [
        { en: 'I trade across the Bay of Bengal. Merchants and teachers like me have carried Islam to the ports of Southeast Asia.' },
        { en: 'Rulers on the Malay peninsula convert for faith, power and trade, and take the title [[sultan|sultan]]. Many traders marry local women, whose families link them to power.' },
        { en: 'New Muslims there still honor local spirits and ancestors. And Muslim women work and travel in public: [[purdah|purdah]] is rare.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Compared with Delhi, how was Islam practiced in Southeast Asian ports?' },
        choices: [
          { ok: true, t: { en: 'Mixed with local ways; purdah was rare' }, why: { en: 'Yes. Converts mixed Islam with older rituals, and Muslim women there often worked and traveled in public.' } },
          { t: { en: 'Just as in Delhi, with strict purdah' }, why: { en: 'No. Purdah was rare in Southeast Asia. Outside ideas were changed to fit local traditions.' } },
          { t: { en: 'Only foreign traders were Muslims there' }, why: { en: 'No. Many local rulers and city people converted, and traders married local women.' } }
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
        { en: 'I sell grain with my husband. Rich women in Delhi keep [[purdah|purdah]], but poor women like me work beside our families.' },
        { en: 'The Grump spoiled my grain! Villages outside the wall grow it. Ask the boatman at the river landing. He knows every village.' }
      ],
      wait: { en: 'The boatman waits at the river landing: out the south gate, then southeast by the river.' },
      thanks: { en: 'Fresh grain! The sultan rules Delhi, but out there village councils run daily life. Thank you!' }
    },
    contact: {
      x: 25, y: 16, name: { en: 'Madho' }, role: { en: 'Boatman' },
      look: { skin: 5, hair: '#1b1410', shirt: '#4a6a3a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'Monks and merchants ride my boat. Buddhism is [[polycentric|polycentric]]: it has many centers, from Sri Lanka to Japan.' },
        { en: 'In India it faded after a Muslim army destroyed the monastery of [[nalanda|Nalanda]] in 1193. Hinduism flourishes, above all in the south.' },
        { en: 'Headman Devraj sells grain. Follow the dirt path west from here, past the shrine and the gate road, to the village huts.' }
      ]
    },
    action: {
      type: 'trade',
      trader: {
        x: 9, y: 16, name: { en: 'Devraj' }, role: { en: 'Village headman' },
        look: { skin: 3, hair: '#4a4a4a', shirt: '#e0d8c0', pants: '#5a4a3a', hat: '#b03a2a', style: 'short' },
        lines: [
          { en: 'Our [[village council|village council]] of household heads sets planting times, rotates crops and shares the common pasture.' },
          { en: 'The Grump broke our irrigation channel! Bring what the council needs to mend it, and my grain is yours.' }
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
    intro: { en: 'The Grump scrambled the record of the region. Read the 5 survey posts, one state on each. Then compare them at the time stone.' },
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
    name: { en: 'The Dust Grump' },
    appear: { en: 'The Dust Grump is hiding in the fields by the river!' },
    taunt: { en: 'Sultans, temples, monks, villages... it is all one blur. I will bury it in dust!' },
    win: { en: 'The dust settles over Delhi. The page on South and Southeast Asia floats down into your hands!' },
    questions: [
      {
        stim: { text: { en: 'During the eleventh century, Muslim Turkic armies based in what is now Afghanistan conquered much of northwest India, and in 1206 one of their generals established an independent government at Delhi.' }, src: { en: 'Adapted from "South and Southeast Asia 1200–1450," World History Project' } },
        q: { en: 'The excerpt best explains how...' },
        choices: [{ en: 'Islam came to rule in north India' }, { en: 'Buddhism spread from India to China' }, { en: 'Hindu kings united all of India' }, { en: 'the Mongols took power in north India' }],
        answer: 0,
        why: { en: 'Turkic conquerors brought Islam with them, and their general founded the Delhi Sultanate in 1206.' }
      },
      {
        q: { en: 'Which best explains why the Mongols never gained permanent power in India?' },
        choices: [{ en: 'The Delhi sultans\' armies defeated them' }, { en: 'The Mongols never marched into India' }, { en: 'Hindu kings paid them to stay away' }, { en: 'Buddhist monks turned their armies back' }],
        answer: 0,
        why: { en: 'The Mongols launched several large campaigns into north India, but the armies of the sultan of Delhi beat them.' }
      },
      {
        stim: { text: { en: 'Bhakti teachers asserted that all believers could be spiritually worthy through individual devotion, and they downplayed social hierarchies.' }, src: { en: 'Adapted from "South and Southeast Asia 1200–1450," World History Project' } },
        q: { en: 'The movement described in the excerpt best reflects...' },
        choices: [{ en: 'a change within Hinduism as it spread' }, { en: 'the arrival of Islam in Southeast Asia' }, { en: 'a Confucian stress on social rank' }, { en: 'the rule of brahmins over the sultans' }],
        answer: 0,
        why: { en: 'Bhakti was a Hindu devotional movement: personal love of a god such as Krishna, open to every believer.' }
      },
      {
        stim: { title: { en: 'Angkor Wat, Khmer Empire' }, rows: [[{ en: 'Time' }, { en: 'Use' }], [{ en: '1100s' }, { en: 'Built as a Hindu temple to Vishnu' }], [{ en: 'Later' }, { en: 'Became a Buddhist holy site' }]], src: { en: 'From "South and Southeast Asia 1200–1450," World History Project' } },
        q: { en: 'Which best explains the change shown in the table?' },
        choices: [{ en: 'Khmer rulers converted to Buddhism' }, { en: 'The Delhi Sultanate conquered Angkor' }, { en: 'Mongol armies destroyed the temple' }, { en: 'Chinese officials banned Hinduism' }],
        answer: 0,
        why: { en: 'When Angkor\'s rulers became Buddhist, the Hindu temple was turned into a Buddhist holy site.' }
      },
      {
        q: { en: 'Which best explains why many rulers on the Malay peninsula converted to Islam?' },
        choices: [{ en: 'Faith, politics and trade together' }, { en: 'The Delhi sultans conquered them' }, { en: 'Mongol khans ordered them to convert' }, { en: 'Their brahmin priests demanded it' }],
        answer: 0,
        why: { en: 'Merchants and teachers brought Islam. Rulers converted for faith, for power and for trade ties, and took the title sultan.' }
      },
      {
        stim: { text: { en: 'In Southeast Asia, purdah was rare. Muslim women often worked, socialized, and traveled independently and in public view.' }, src: { en: 'Adapted from "South and Southeast Asia 1200–1450," World History Project' } },
        q: { en: 'Compared with South Asia, the excerpt best shows that in Southeast Asia...' },
        choices: [{ en: 'Islam was fitted to local customs' }, { en: 'women were secluded more strictly' }, { en: 'Islam was not practiced by anyone' }, { en: 'only wealthy women could go outside' }],
        answer: 0,
        why: { en: 'In South Asia, wealthy women often kept purdah. In Southeast Asia, Islam was fitted to local ways, and women stayed in public life.' }
      },
      {
        q: { en: 'Which statement best describes religion under the Delhi Sultanate?' },
        choices: [{ en: 'Muslim rule that tolerated Hindus' }, { en: 'Every Hindu subject forced to convert' }, { en: 'A Hindu state led by brahmin priests' }, { en: 'Buddhist rule backed by monasteries' }],
        answer: 0,
        why: { en: 'The sultans were Muslims and generally tolerated their Hindu subjects, though many north Indians converted to Islam.' }
      },
      {
        stim: { text: { en: 'Muslim rulers of north India were generally hostile to Buddhism, and in 1193 a Muslim army destroyed Nalanda.' }, src: { en: 'Adapted from "South and Southeast Asia 1200–1450," World History Project' } },
        q: { en: 'Which best explains why Buddhism survived after the event described?' },
        choices: [{ en: 'It had many centers across Asia' }, { en: 'The sultans soon rebuilt Nalanda' }, { en: 'It became the faith of Delhi\'s sultans' }, { en: 'Hindu kings banned all other faiths' }],
        answer: 0,
        why: { en: 'Buddhism was polycentric. It faded in India but lived on from Sri Lanka and Southeast Asia to Japan.' }
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
