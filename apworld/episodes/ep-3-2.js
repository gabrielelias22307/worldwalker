/* HISTORYWALKER · Episode 3.2 · Empires: Administration (AP World Topic 3.2, c. 1450–1750)
   Fatehpur Sikri, capital of the Mughal Empire under Akbar, in 1580.
   Content source: Khan Academy, AP World History (World History Project), Unit 3 Lesson "Empires: Administration":
   "Legitimizing and Consolidating Power" (Trevor Getz); Unit 3 overview "Unit 3 Introduction: Land-Based Empires
   1450 to 1750" (Trevor Getz); and from Lesson 3.1 "Empires Expand": "South Asia 1450–1750" (Hannah Archambault),
   "Gunpowder Empires" (Trevor Getz). World History Project content is CC BY-NC 4.0. Facts here come from those
   readings. English only, AP level.
   Map: the lake (x 1-5) in the north-west; the emperor's palace (D, door 11,3) and the great mosque (D, door 22,3)
   along the top; the plaza in the middle (the time stone); the city wall (W, x 28) with the east gate (28,6) and the
   road to Agra outside; the caravan camp on the sand (south-west); the revenue office (door 10,12); the bazaar
   (m stalls) and two homes in the south-east; wheat fields south of the plaza.
   Quest: Hamid the horse trader (caravan camp, SW) -> Amba the money changer (bazaar, SE) -> Yusuf the customs officer
   at the east gate (NE). Goods on the map: silver rupees (bazaar, right), the emperor's cannon (by the palace),
   worn mixed coins (caravan camp). */
window.EPISODE = {
  id: '3.2',
  realm: 3,
  sol: 'AP 3.2',
  style: 'india',
  weather: { sky: 'heat', time: 'day' },
  title: { en: 'Empires: Administration' },
  place: { en: 'Fatehpur Sikri, Mughal Empire, 1580' },
  intro: [
    { en: 'The Grump blurred the page on running an empire. The Mughal capital is forgetting how its emperor holds power!' },
    { en: 'Talk to the 4 people here, help a horse trader at the customs gate, then wake the time stone.' }
  ],
  scenes: {
    at: [77.66, 27.09],
    year: 1580,
    start: [
      { en: 'In 1580, Emperor Akbar (r. 1556–1605) ruled the Mughal Empire from northern India.' },
      { en: 'His grandfather Babur invaded northern India in 1526 with cavalry, muskets and cannon.' },
      { en: 'The Mughal rulers were Muslim. Most of the people they ruled were Hindu.' }
    ],
    guess: {
      q: { en: 'Armies, roads and palaces cost a fortune. How do you think the Mughals paid for them?' },
      choices: [{ t: { en: '🌾 Taxes on farming and trade' }, ok: true }, { t: { en: '🎁 Gifts from foreign kings' } }],
      why: { en: 'Most early modern empires taxed agriculture, and many also taxed trade. The Mughals did both.' }
    },
    page: { en: 'Akbar\'s silver rupee was so pure that people across the empire trusted it.' },
    next: {
      q: { en: 'Next: Empires and belief systems. Did rulers like the Ottomans and Safavids tie their power to a faith?' },
      choices: [{ t: { en: 'Yes, they did' }, ok: true }, { t: { en: 'No, never' } }],
      why: { en: 'Ottoman sultans claimed to lead Sunni Islam; Safavid rulers worked closely with Shi\'a clergy. You go there next.' }
    }
  },
  start: [16, 8],
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT',
    'T~~~~~..DDDDDDDD..DDDDDDDD..W..T',
    'T~~~~~..DDDDDDDD..DDDDDDDD..W.TT',
    'T~~~~~..DDDdDDDD.xDDDDdDDD..W..T',
    'T~~~~...llllllllllllllllll..W..T',
    'T~~~~..x.....l........l.....W:xT',
    'T~~~...,.....lllllllllllllll:::T',
    'T~~.........lllllllll.......W..T',
    'T~..T.......lllllllll.....T.W..T',
    'T..,........lllllllll.......W.TT',
    'T...........lllllllll.......W..T',
    'T........QQQlllllllll.......W..T',
    'T........hdhlllllRRR...RRR..W..T',
    'T...........lllllhdh...hdh..W..T',
    'T:::::::::::lllll:::::::::::W..T',
    'Tssssssssssxlllll.m.m.m.m.m.W..T',
    'Tssssssssss.llllllllllllllllW..T',
    'Tssspssssss.wwww..m.m.m.m.m.W..T',
    'Tssssssssss.wwww............W..T',
    'Tssssssssss.wwww...,........W.TT',
    'Tssssssssss.................W..T',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT'
  ],
  words: {
    'mansabdar': { en: 'a Mughal military commander, a land-holding noble who served the emperor' },
    'bureaucracy': { en: 'officials paid by the central government to run the state, like tax collectors and clerks' },
    'customs duty': { en: 'a tax on goods brought into a country; the Mughals often charged about 2.5 percent' },
    'ulama': { en: 'learned Muslim religious scholars; in the Mughal and Ottoman empires many served as judges' },
    'sulh-i kul': { en: '"universal toleration": Akbar\'s policy giving non-Muslim subjects the same rights as Muslims' },
    'legitimacy': { en: 'being accepted as having the right to rule' },
    'rupee': { en: 'the Mughal silver coin; its pure silver made it trusted across the empire' },
    'consolidate': { en: 'to make power stronger and more secure, so no rival can take it away' },
    'timar': { en: 'an Ottoman estate granted by the sultan; its farmers paid part of their harvest as tax' },
    'caliph': { en: 'a successor to the Prophet Muhammad as leader of the Muslim community' }
  },
  npcs: [
    {
      x: 10, y: 5, name: { en: 'Bhim' }, role: { en: 'Rajput commander' },
      look: { skin: 3, hair: '#1b1410', shirt: '#c0392b', pants: '#f2ead8', hat: '#e8a33a', style: 'short' },
      lines: [
        { en: 'I am a Rajput, a Hindu. Daughters of Rajput houses have married into the emperor\'s family, so my clan has a stake in his rule.' },
        { en: 'I am a [[mansabdar|mansabdar]], a military commander. Muslims, Hindus and Sikhs all serve as mansabdars, and we come to court often to prove our loyalty.' },
        { en: 'Akbar pays us regularly, but only the emperor may own cannon. Cannon can turn a rebel noble\'s castle walls to rubble.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why did Akbar call his mansabdars to court and keep all the cannon for himself?' },
        choices: [
          { ok: true, t: { en: 'To keep powerful nobles loyal and dependent' }, why: { en: 'Yes. Nobles got regular pay and posts, but they could never grow strong enough to challenge the emperor.' } },
          { t: { en: 'To train nobles for Confucian written exams' }, why: { en: 'No. Exam-trained officials ran Ming China. The Mughals relied on land-holding military commanders like Bhim.' } },
          { t: { en: 'To hand his power back to local kings' }, why: { en: 'No. The gunpowder empires centralized power. Cannon took strength away from local nobles, not toward them.' } }
        ]
      }
    },
    {
      x: 20, y: 5, name: { en: 'Qazi Nur' }, role: { en: 'Religious judge' },
      look: { skin: 3, hair: '#4a4a4a', shirt: '#f2f2f2', robe: true, hat: '#f2f2f2', style: 'short' },
      lines: [
        { en: 'I am a qazi, a judge. Learned Muslim scholars, the [[ulama|ulama]], serve the empire as judges, because we can read and write the law.' },
        { en: 'The emperor sponsors mosques like this one. He also supports the orders and buildings of other faiths.' },
        { en: 'Akbar made [[sulh-i kul|sulh-i kul]], universal toleration, official: non-Muslim subjects have the same rights as Muslims.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Why would a Muslim emperor make sulh-i kul an official policy?' },
        choices: [
          { ok: true, t: { en: 'Most of his subjects were not Muslim' }, why: { en: 'Yes. Ruling a mostly Hindu land with Hindu and Sikh nobles, the Mughals needed loyalty from every faith.' } },
          { t: { en: 'No Muslims lived anywhere in India' }, why: { en: 'No. Muslims lived across India, and the emperor and his judges were Muslim themselves.' } },
          { t: { en: 'He wanted all subjects to convert at once' }, why: { en: 'No. Toleration means the opposite: people kept their own faiths, with equal rights.' } }
        ]
      }
    },
    {
      x: 8, y: 13, name: { en: 'Kishan' }, role: { en: 'Revenue clerk' },
      look: { skin: 4, hair: '#1b1410', shirt: '#f2ead8', pants: '#3a5a8a', robe: true, style: 'short' },
      lines: [
        { en: 'I keep tax records. Our main income is a tax on land, which really means a tax on each harvest. Foreign goods also pay a [[customs duty|customs duty]].' },
        { en: 'I belong to the [[bureaucracy|bureaucracy]]. The central government pays me, so my loyalty is to the emperor, not to a local lord.' },
        { en: 'Ming China relies most on officials who pass exams on Confucian books. Its great landowners are usually not soldiers, unlike our mansabdars.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'The Ming also taxed farming. Compared with the Mughals, how did the Ming first collect farm taxes?' },
        choices: [
          { ok: true, t: { en: 'A bureau counted farm families in a census' }, why: { en: 'Yes. A Ming bureau took a census and collected directly. Later, local landowners kept part of the taxes, and revenue fell.' } },
          { t: { en: 'Ming emperors never taxed farm families' }, why: { en: 'No. Agriculture was the main thing early modern empires taxed, in China as in India.' } },
          { t: { en: 'Villages sent soldiers instead of any money' }, why: { en: 'No. Some Ottoman communities paid taxes with soldiers. The Ming used a census bureau.' } }
        ]
      }
    },
    {
      x: 21, y: 19, name: { en: 'Govind' }, role: { en: 'Court painter' },
      look: { skin: 2, hair: '#2b1d14', shirt: '#2a8a6a', pants: '#e8dcc0', robe: true, style: 'short' },
      lines: [
        { en: 'I paint pictures for the emperor\'s books. Each one shows a ruler with the right to rule. We call that [[legitimacy|legitimacy]].' },
        { en: 'We show our emperors as "the Shadow of God on Earth." Their family also claims descent from the Mongols.' },
        { en: 'Akbar asks his followers, whatever their faith, to pledge loyalty to him personally, not to the empire as a whole.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'A painting made for the court shows the emperor beside his ancestors. What is it best evidence of?' },
        choices: [
          { ok: true, t: { en: 'How rulers used art to claim legitimacy' }, why: { en: 'Yes. Paid for by the court, it shows how emperors wanted to be seen: heirs to a great line.' } },
          { t: { en: 'What ordinary farmers thought of the emperor' }, why: { en: 'No. Court artists painted for the emperor, so the picture shows his view, not the farmers\'.' } },
          { t: { en: 'The exact faces of all the past emperors' }, why: { en: 'No. Its purpose was to show descent and glory, not to be an exact record of faces.' } }
        ]
      }
    }
  ],
  houses: [
    { at: [11, 3], name: { en: 'Courtier Mirak' }, look: { skin: 2, hair: '#2b1d14', shirt: '#8e5bd6', robe: true, hat: '#e8a33a', style: 'short' },
      lines: [{ en: 'This is the emperor\'s hall. Nobles of many faiths come here to bow.' }, { en: 'Mansabdars must come to court often, to prove their loyalty.' }] },
    { at: [22, 3], name: { en: 'Scholar Rahima' }, look: { skin: 3, hair: '#1b1410', shirt: '#2a6a8a', robe: true, style: 'long' },
      lines: [{ en: 'The emperor sponsors this mosque, and the buildings of other faiths too.' }, { en: 'Scholars who can read the law are useful to any government.' }] },
    { at: [10, 12], name: { en: 'Accountant Mohan' }, look: { skin: 4, hair: '#4a4a4a', shirt: '#f2ead8', robe: true, style: 'short' },
      lines: [{ en: 'Land taxes from the provinces are counted in this office.' }, { en: 'Without taxes there is no pay for soldiers, roads or palaces.' }] },
    { at: [18, 13], name: { en: 'Weaver Parvati' }, look: { skin: 4, hair: '#1b1410', shirt: '#d9822b', style: 'long' },
      lines: [{ en: 'Indian cloth sells from port to port across the Indian Ocean.' }, { en: 'Buyers here pay me in silver rupees.' }] },
    { at: [24, 13], name: { en: 'Grandmother Zubaida' }, look: { skin: 3, hair: '#cfcfcf', shirt: '#4a7aa8', robe: true, style: 'bun' },
      lines: [{ en: 'In 1450, before the Mughals, India was split among many mid-sized kingdoms.' }, { en: 'India is home to Hindus, Muslims, Jains, Christians, Jews and more.' }] }
  ],
  signs: [
    { x: 7, y: 5, text: { en: 'FATEHPUR SIKRI · 1580 · Capital of Emperor Akbar, ruler of the Mughal Empire.' } },
    { x: 17, y: 3, text: { en: 'PALACE ← · → MOSQUE · Mughal emperors backed faith as well as force.' } },
    { x: 30, y: 5, text: { en: 'ROAD TO AGRA · Roads and shared laws bind a vast empire together.' } },
    { x: 11, y: 15, text: { en: 'CARAVAN CAMP · Imported goods pay customs duty at the east gate.' } }
  ],
  finds: [
    { clueAt: [6, 9], at: [3, 8], decor: 'coinold', clue: { en: 'From this note, walk 3 steps west and 1 step north, to the lake shore.' },
      text: { en: 'A lost silver rupee! Its pure silver made it trusted in markets across the empire.' } }
  ],
  scraps: [[1, 9], [30, 1], [1, 20]],
  smudges: [[24, 9], [9, 19]],
  quest: {
    stat: 'hei',
    title: { en: 'The Customs Gate' },
    giver: {
      x: 5, y: 16, name: { en: 'Hamid' }, role: { en: 'Horse trader' },
      look: { skin: 1, hair: '#2b1d14', shirt: '#6a7a4a', pants: '#3a2a1a', hat: '#5a3a2a', style: 'short' },
      lines: [
        { en: 'My caravan brought strong horses from the steppes of Central Asia. Horses like these helped Babur win northern India.' },
        { en: 'But imported goods owe a customs duty at the east gate, and the officer refused my coins! Ask Amba, the money changer in the bazaar.' }
      ],
      wait: { en: 'Amba sits in the bazaar, south-east of the great plaza, past the stalls.' },
      thanks: { en: 'Paid in full! One trusted coin links markets all across the empire. Thank you.' }
    },
    contact: {
      x: 25, y: 18, name: { en: 'Amba' }, role: { en: 'Money changer' },
      look: { skin: 4, hair: '#1b1410', shirt: '#c0392b', pants: '#e8c060', style: 'bun' },
      lines: [
        { en: 'Silver mined in South America reaches India by merchant ship. The emperor\'s [[rupee|silver rupee]] is pure, so everyone trusts it.' },
        { en: 'The officer stands by the east gate: walk north along the city wall. Bring him the coin everyone in the empire trusts.' }
      ]
    },
    action: {
      type: 'trade',
      trader: {
        x: 27, y: 5, name: { en: 'Yusuf' }, role: { en: 'Customs officer' },
        look: { skin: 3, hair: '#1b1410', shirt: '#3a5a8a', pants: '#f2ead8', hat: '#c0392b', style: 'short' },
        lines: [
          { en: 'I collect the emperor\'s customs duty on imported goods, often about 2.5 percent of their value.' },
          { en: 'The duty goes to the emperor\'s treasury, so I take only payment it can trust.' }
        ]
      },
      q: { en: 'Hamid owes the customs duty on his horses. What payment will the emperor\'s customs house accept?' },
      choices: [
        { ok: true, at: [23, 17], icon: '🪙', t: { en: 'Silver rupees from the bazaar' },
          why: { en: 'Accepted! The pure silver rupee was trusted everywhere, a shared currency for the whole empire.' } },
        { at: [14, 5], icon: '💣', t: { en: 'A cannon from beside the palace' },
          why: { en: 'Never! Akbar forbade anyone but the emperor to own cannon. That rule kept nobles from defying him.' } },
        { at: [2, 19], icon: '👛', t: { en: 'A pouch of worn, mixed foreign coins' },
          why: { en: 'Not these. Their silver is uncertain. The empire runs on the pure rupee everyone trusts.' } }
      ],
      item: { icon: '📜', name: { en: 'Hamid\'s customs receipt' } }
    }
  },
  challenge: {
    at: [14, 9], type: 'claim', stat: 'hei',
    title: { en: 'How did empires hold power?' },
    intro: { en: 'The Grump says emperors ruled by force alone! Pick one empire. Back it up with one way it funded the state and one way it claimed [[legitimacy|legitimacy]].' },
    options: [
      { icon: '🐘', name: { en: 'The Mughal Empire' }, desc: { en: 'Northern India. Emperor Akbar, r. 1556–1605' },
        result: { en: 'Yes! The Mughals taxed land and trade, and won loyalty from every faith.' } },
      { icon: '🕌', name: { en: 'The Ottoman Empire' }, desc: { en: 'Capital: Istanbul. Ruled by sultans' },
        result: { en: 'Yes! The Ottomans taxed farmers through landlords, and their sultans claimed to lead all of Islam.' } },
      { icon: '🏯', name: { en: 'Ming China' }, desc: { en: 'Ruled China from 1368' },
        result: { en: 'Yes! The Ming counted and taxed farm families, and linked their rule to the glory of the Song.' } }
    ],
    kinds: [
      { id: 'money', label: { en: 'How it funded the state' } },
      { id: 'legit', label: { en: 'How it claimed the right to rule' } }
    ],
    reasons: [
      { kind: 'money', fits: [0], t: { en: 'It taxed land and charged about 2.5% customs on imports' },
        why: { en: 'That was the Mughal mix: a tax on harvests plus a customs duty on imported goods.' } },
      { kind: 'money', fits: [1], t: { en: 'Farmers on [[timar|timars]] gave 15–25% of their harvest to landlords' },
        why: { en: 'Timars were Ottoman estates. The landlord passed a portion of the tax on to the sultan.' } },
      { kind: 'money', fits: [2], t: { en: 'A special bureau took a census of farm families to tax them' },
        why: { en: 'That was the Ming system. Later, local landowners kept some of the taxes, and revenue fell.' } },
      { kind: 'money', fits: [], t: { en: 'It needed no taxes, because conquest paid for everything' },
        why: { en: 'No empire worked this way. Armies, roads and palaces all needed steady taxes.' } },
      { kind: 'legit', fits: [0], t: { en: 'Followers of every faith pledged loyalty to the emperor himself' },
        why: { en: 'That was Akbar. A Muslim ruler, he relied on Hindu, Sikh and Muslim nobles.' } },
      { kind: 'legit', fits: [1], t: { en: 'The sultan took the title [[caliph|caliph]] and held Mecca' },
        why: { en: 'That was the Ottomans. Selim I claimed to succeed the Prophet Muhammad, and ruling Mecca helped.' } },
      { kind: 'legit', fits: [2], t: { en: 'Its first emperor claimed to restore the Song dynasty' },
        why: { en: 'That was the Ming. They tied themselves to the Song, whom the Mongols had destroyed.' } },
      { kind: 'legit', fits: [], t: { en: 'Its rulers banned all religion and ignored the past' },
        why: { en: 'No. Rulers used religion and links to past glory to show their right to rule.' } }
    ],
    mismatch: { en: 'That fact is true, but for a different empire.' },
    success: { en: 'Different tools, one goal! Taxes paid for the state, and religion and the past made rule legitimate.' }
  },
  boss: {
    at: [5, 10], stat: 'reg', need: 3,
    name: { en: 'The Dust Grump' },
    appear: { en: 'The Dust Grump is hiding by the lake!' },
    taunt: { en: 'Taxes, judges, paintings... who cares? An emperor only needs a big army!' },
    win: { en: 'The dust settles over the palace. The page on Mughal rule floats down into your hands!' },
    questions: [
      {
        stim: { text: { en: 'The Mughal Emperor Akbar asked his followers, no matter what their faith, to pledge to support him personally, rather than the empire as a whole.' }, src: { en: 'Adapted from "Legitimizing and Consolidating Power," World History Project' } },
        q: { en: 'Which best explains why Akbar used the policy described above?' },
        choices: [{ en: 'He relied on Hindu, Sikh and Muslim nobles' }, { en: 'He wanted every noble to become a Hindu' }, { en: 'He had no army of his own to command' }, { en: 'He planned to divide the empire among nobles' }],
        answer: 0,
        why: { en: 'A Muslim ruler of a diverse empire needed loyalty that did not depend on any one faith.' }
      },
      {
        stim: { title: { en: 'Mughal state income' }, rows: [[{ en: 'Source' }, { en: 'How it was taxed' }], [{ en: 'Land and farming' }, { en: 'A tax on land, and so on the harvest' }], [{ en: 'Imported goods' }, { en: 'A customs duty, often about 2.5 percent' }]], src: { en: 'From "Legitimizing and Consolidating Power," World History Project' } },
        q: { en: 'The table best supports which claim about how the Mughals funded their state?' },
        choices: [{ en: 'They taxed both agriculture and trade' }, { en: 'They lived only on taxes from merchants' }, { en: 'They charged no taxes on farming families' }, { en: 'They paid for the state with gifts alone' }],
        answer: 0,
        why: { en: 'Like most early modern empires, the Mughals taxed agriculture. Like many, they also taxed trade with customs duties.' }
      },
      {
        stim: { text: { en: 'The Mughal Sultan Akbar (r. 1556–1605) forbade anyone but the emperor from owning cannon.' }, src: { en: 'Adapted from "Gunpowder Empires," World History Project' } },
        q: { en: 'Which best explains the purpose of the rule described above?' },
        choices: [{ en: 'To stop nobles defying him from castles' }, { en: 'To sell all cannon to foreign merchants' }, { en: 'To let every village defend itself alone' }, { en: 'To end the use of gunpowder in war' }],
        answer: 0,
        why: { en: 'Cannon could break castle walls. Keeping them for himself meant no noble could hold out against the emperor.' }
      },
      {
        q: { en: 'Compared with Ming China, the Mughal Empire relied more heavily on which group to run its lands?' },
        choices: [{ en: 'Land-holding military commanders' }, { en: 'Officials who passed Confucian exams' }, { en: 'Merchants who bought every office' }, { en: 'Buddhist monks who served as judges' }],
        answer: 0,
        why: { en: 'Mughal mansabdars were military commanders. The Ming relied most on exam-trained officials, and their landowners were usually not soldiers.' }
      },
      {
        stim: { text: { en: 'Earlier Mughal emperors had represented themselves to their subjects as "the Shadow of God on Earth."' }, src: { en: 'Adapted from "South Asia 1450–1750," World History Project' } },
        q: { en: 'The title in the excerpt best reflects which strategy of early modern rulers?' },
        choices: [{ en: 'Using religion to show a right to rule' }, { en: 'Sharing power equally with subjects' }, { en: 'Raising money through customs duties' }, { en: 'Training officials with written exams' }],
        answer: 0,
        why: { en: 'Rulers needed legitimacy. Claiming a link to God, like claiming great ancestors, showed a right to rule.' }
      },
      {
        stim: { text: { en: 'Akbar also formalized sulh-i kul, or "universal toleration." This policy now mandated that non-Muslim subjects be accorded the same rights as Muslims.' }, src: { en: 'Adapted from "South Asia 1450–1750," World History Project' } },
        q: { en: 'Which best explains how this policy helped the Mughal state?' },
        choices: [{ en: 'It won support from a mostly Hindu people' }, { en: 'It made Hindu subjects convert to Islam' }, { en: 'It removed all Muslim judges from courts' }, { en: 'It ended the need for an imperial army' }],
        answer: 0,
        why: { en: 'Muslim rulers of a mostly Hindu land kept their subjects loyal by giving every faith equal rights.' }
      },
      {
        q: { en: 'Why were officials paid by the central government useful to an early modern emperor?' },
        choices: [{ en: 'They were more loyal to him than nobles' }, { en: 'They owned the castles of local nobles' }, { en: 'They kept every tax for their families' }, { en: 'They chose who would be the next ruler' }],
        answer: 0,
        why: { en: 'A bureaucracy paid by the center owed its loyalty to the emperor, not to a local lord.' }
      },
      {
        q: { en: 'Which development most helped the Mughals build one trusted currency across their empire?' },
        choices: [{ en: 'Silver from South America reaching India' }, { en: 'Paper money first printed by the Mughals' }, { en: 'A ban on all trade with foreign merchants' }, { en: 'Gold dug from mines below the capital' }],
        answer: 0,
        why: { en: 'American silver reached India by merchant ship, and Akbar\'s pure silver rupee became a widely trusted shared currency.' }
      }
    ]
  },
  learned: [
    { en: 'Early modern empires funded the state mainly by taxing agriculture; the Mughals also charged a [[customs duty|customs duty]] on imports.' },
    { en: 'To [[consolidate|consolidate]] power, rulers built a [[bureaucracy|bureaucracy]], kept nobles like the [[mansabdar|mansabdars]] loyal, and kept gunpowder weapons for themselves.' },
    { en: 'Rulers claimed [[legitimacy|legitimacy]] through religion, art and great ancestors; Akbar\'s [[sulh-i kul|sulh-i kul]] won the loyalty of every faith.' }
  ],
  reflect: {
    q: { en: 'AP practice: Explain one way the Mughal emperor Akbar legitimized or consolidated his power.' },
    starter: { en: 'Akbar consolidated his power by' }
  }
};
