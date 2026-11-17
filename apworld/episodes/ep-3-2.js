/* HISTORYWALKER · Episode 3.2 · Empires: Administration (AP World Topic 3.2, c. 1450–1750)
   Fatehpur Sikri, capital of the Mughal Empire under Akbar, in 1580.
   Content source: Khan Academy, AP World History (World History Project), Unit 3 Lesson "Empires: Administration":
   "Legitimizing and Consolidating Power" (Trevor Getz); Unit 3 overview "Unit 3 Introduction: Land-Based Empires
   1450 to 1750" (Trevor Getz); and from Lesson 3.1 "Empires Expand": "South Asia 1450–1750" (Hannah Archambault),
   "Gunpowder Empires" (Trevor Getz), "China Under Ming and Qing Rule" (Trevor Getz, source of the Qianlong quote).
   World History Project content is CC BY-NC 4.0. Facts here come from those readings. English only, AP level.
   Reading stands: the Qianlong Emperor to Lord Macartney, 1791 (primary source, by the east wall, 25,7);
   "Funding and Legitimizing Empires" (reading adapted from "Legitimizing and Consolidating Power", by the
   revenue office, 4,13).
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
    { en: 'The Void blurred the page on running an empire. The Mughal capital is forgetting how its emperor holds power!' },
    { en: 'Talk to the 4 people here and read the 2 sources on the reading stands.' },
    { en: 'Then help a horse trader at the customs gate and wake the time stone.' }
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
        { en: 'I am a Rajput, a Hindu. By taking daughters of powerful Rajput houses as brides, Akbar gave my clan a stake in his empire and a reason to support it.' },
        { en: 'I am a [[mansabdar|mansabdar]], a land-holding military commander, much like an Ottoman sipahi. Turks, Iranis, Afghans, Indian Muslims and Rajputs all serve, and we must come to court often.' },
        { en: 'Akbar reformed military pay. Nobles like me get regular pay and posts, but are kept from growing powerful enough to challenge the emperor.' },
        { en: 'And only the emperor may own cannon. Cannon can turn a rebel noble\'s castle walls to rubble. Still, most soldiers here fight with swords, spears and bows.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Which best explains the purpose of Akbar\'s policies toward nobles like Bhim?' },
        choices: [
          { ok: true, t: { en: 'To tie nobles to him while limiting their power' }, why: { en: 'Yes. Marriages, regular pay and court visits bound nobles to Akbar, and his monopoly on cannon meant no noble could defy him from a castle.' } },
          { t: { en: 'To train nobles to pass Confucian written exams' }, why: { en: 'No. Exam-trained officials were the Ming way. The Mughals relied on land-holding military commanders like Bhim.' } },
          { t: { en: 'To let nobles rule their lands as independent kings' }, why: { en: 'No. The gunpowder empires centralized power. Cannon took strength away from local nobles, not toward them.' } }
        ]
      }
    },
    {
      x: 20, y: 5, name: { en: 'Qazi Nur' }, role: { en: 'Religious judge' },
      look: { skin: 3, hair: '#4a4a4a', shirt: '#f2f2f2', robe: true, hat: '#f2f2f2', style: 'short' },
      lines: [
        { en: 'I am a qazi, a judge. The [[ulama|ulama]], learned Muslim scholars, serve as judges because we can read and write the law. Literate officials are useful to any state.' },
        { en: 'The emperor sponsors mosques and Muslim judges. Yet most of his subjects are Hindu, so he also supports the orders and buildings of other faiths.' },
        { en: 'Compare our neighbors. In the Ottoman Empire, Muslim clergy run the legal system. In Persia, the Safavid shahs work with Shi\'a clergy to impose one religious identity.' },
        { en: 'Akbar has made [[sulh-i kul|sulh-i kul]], universal toleration, official. Non-Muslim subjects now have the same rights as Muslims under Mughal rule.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Compared with the Safavid shahs, how did Akbar use religion to hold his empire together?' },
        choices: [
          { ok: true, t: { en: 'He protected many faiths instead of imposing one' }, why: { en: 'Yes. A Muslim ruler of a mostly Hindu land, Akbar gave non-Muslims equal rights. The Safavids imposed one Shi\'a identity.' } },
          { t: { en: 'He made Shi\'a Islam the faith of every subject' }, why: { en: 'No. That was the Safavid strategy in Persia, working with Shi\'a clergy. Akbar\'s sulh-i kul did the opposite.' } },
          { t: { en: 'He took the title caliph and guarded the city of Mecca' }, why: { en: 'No. That was the Ottomans: Sultan Selim I took the title caliph, and the Ottomans controlled Mecca.' } }
        ]
      }
    },
    {
      x: 8, y: 13, name: { en: 'Kishan' }, role: { en: 'Revenue clerk' },
      look: { skin: 4, hair: '#1b1410', shirt: '#f2ead8', pants: '#3a5a8a', robe: true, style: 'short' },
      lines: [
        { en: 'I keep tax records. Our main income is a tax on land, which means a tax on each harvest. Imported goods also pay a [[customs duty|customs duty]], often about 2.5 percent.' },
        { en: 'I belong to the [[bureaucracy|bureaucracy]]. The central government pays me, so I am more loyal to the emperor than to any local noble. Our bureaucracy is still small, though.' },
        { en: 'Ming China uses trained officials more than any other empire. They pass exams on Confucian texts. Its great landowners are usually not soldiers, unlike our mansabdars.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'The Ming also taxed farming. Compared with the Mughals, how did the early Ming state collect its farm taxes?' },
        choices: [
          { ok: true, t: { en: 'A bureau took a census and collected directly' }, why: { en: 'Yes. A special Ming bureau counted peasant families and collected for the central government. Later, local landowners helped collect and kept some.' } },
          { t: { en: 'Landlords on timars paid part to the ruler' }, why: { en: 'No. Timars were Ottoman estates. Their peasants paid 15 to 25 percent of the harvest to the landlord.' } },
          { t: { en: 'Tolls were put on caravans on imperial roads' }, why: { en: 'No. Later Safavid rulers tolled caravans to tax trade. The Ming taxed peasant families through a census bureau.' } }
        ]
      }
    },
    {
      x: 21, y: 19, name: { en: 'Govind' }, role: { en: 'Court painter' },
      look: { skin: 2, hair: '#2b1d14', shirt: '#2a8a6a', pants: '#e8dcc0', robe: true, style: 'short' },
      lines: [
        { en: 'I paint pictures for the emperor\'s books. Each one shows a ruler with the right to rule. We call that [[legitimacy|legitimacy]], and the court pays well for it.' },
        { en: 'We show our emperors as "the Shadow of God on Earth." The dynasty also claims descent from the Mongols, through Babur, who invaded in 1526.' },
        { en: 'Akbar\'s nobles are Muslim, Hindu and Sikh. So he asks them, whatever their faith, to pledge to support him personally, rather than the empire as a whole.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Sourcing: a painting made for the court shows the emperor beside his ancestors. What is it best evidence of?' },
        choices: [
          { ok: true, t: { en: 'How rulers used art to claim legitimacy' }, why: { en: 'Yes. Paid for by the court, it shows how emperors wanted to be seen: heirs to a great line.' } },
          { t: { en: 'What ordinary farmers thought of rulers' }, why: { en: 'No. Court artists painted for the emperor, so the picture shows his view, not the farmers\'.' } },
          { t: { en: 'How the emperor collected his land tax' }, why: { en: 'No. Its purpose was to show descent and glory. Tax records like Kishan\'s show how the state was funded.' } }
        ]
      }
    },
    {
      doc: true, x: 25, y: 7, icon: '📜',
      name: { en: 'The Qianlong Emperor to Lord Macartney' }, role: { en: 'Primary source' },
      src: { en: 'The Qianlong Emperor of Qing China, to the British trade envoy Lord Macartney, 1791; quoted in "China Under Ming and Qing Rule," World History Project' },
      lines: [
        { en: '"Our Celestial Empire possesses all things in prolific abundance and lacks no product within its borders."' },
        { en: '"There is therefore no need to import the manufactures of outside barbarians in exchange for our own produce."' },
        { en: 'Who and when: a chronicle page from China, two centuries after Akbar. The Qianlong Emperor (r. 1735–1796) of the Qing dynasty said this in 1791 to Lord Macartney, a British trade envoy.' },
        { en: 'Why: after 1433 the Ming ended Zheng He\'s ocean voyages and turned inland. China produced everything it needed, so foreign merchants could come to China. The Qing, Manchus from the north, kept this land-based mindset. By 1750 their empire was peaceful, prosperous and larger than ever.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Point of view: what does the emperor\'s message to a British envoy best show?' },
        choices: [
          { ok: true, t: { en: 'Confidence that his empire was self-sufficient' }, why: { en: 'Yes. A powerful, prosperous emperor told a foreign envoy that China lacked nothing and needed no foreign goods.' } },
          { t: { en: 'A plan to rebuild Zheng He\'s ocean fleets' }, why: { en: 'No. The Ming ended those voyages in 1433 and turned inland. The Qing kept that land-based mindset.' } },
          { t: { en: 'Worry that China needed British manufactures' }, why: { en: 'No. He says the opposite: there is "no need to import" foreign manufactures.' } }
        ]
      }
    },
    {
      doc: true, x: 4, y: 13, icon: '📖',
      name: { en: 'Funding and Legitimizing Empires' }, role: { en: 'Reading' },
      src: { en: 'Adapted from "Legitimizing and Consolidating Power" by Trevor Getz, World History Project (Khan Academy)' },
      lines: [
        { en: 'Emperors had to pay for armies, roads and palaces. Most taxed agriculture, and many taxed trade. The Ming had perhaps the most sophisticated farm tax: a special bureau took a census of peasant families and collected directly. Later the emperors relied on local landowners to collect, and they siphoned off some money. Taxes went up, but government revenues went down. This was a direct cause of Ming weakness.' },
        { en: 'On Ottoman timars, estates granted by the sultans, peasants gave 15–25 percent of their harvest to the landlord, who paid a portion to the central government. Some communities paid in soldiers. The Mughals taxed land and charged about 2.5 percent customs on imports. The Safavids let local leaders collect taxes and keep a portion, so revenues fell further; later they tolled caravans. Russia\'s tsars allied with the Stroganov merchant family.' },
        { en: 'Rulers also needed legitimacy. The Romanov tsars claimed a link to the Byzantine Empire ("Tsar" comes from Caesar) and the support of the Russian Orthodox Church. Ottoman Sultan Selim I took the title caliph. The Qing, outsiders from the north, still offered rituals at the tombs of the Ming emperors. Bureaucracies were still small, so rulers also made deals with religious, aristocratic and merchant groups.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'According to the reading, which best explains why Ming government revenue fell even as taxes on peasants went up?' },
        choices: [
          { ok: true, t: { en: 'Local landowners who collected taxes kept some' }, why: { en: 'Yes. Once local landowners helped collect, they siphoned off money. Peasants paid more, yet the state received less.' } },
          { t: { en: 'Peasant communities paid in soldiers, not money' }, why: { en: 'No. Some Ottoman communities paid taxes with soldiers. The Ming problem was landowners keeping part of the taxes.' } },
          { t: { en: 'The Ming stopped taxing farming to tax trade' }, why: { en: 'No. Agriculture stayed the Ming state\'s main tax base. The problem was who collected it.' } }
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
    intro: { en: 'The Void says emperors ruled by force alone! Pick one empire. Back it up with one way it funded the state and one way it claimed [[legitimacy|legitimacy]].' },
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
    name: { en: 'The Void' },
    appear: { en: 'The Void has opened by the lake. The palace lamps dim.' },
    taunt: { en: 'Taxes, judges, pledges, paintings. A throne is only a shadow, and shadows belong to me.' },
    win: { en: 'The Void closes over the palace. The page on Mughal rule floats down into your hands.' },
    questions: [
      {
        stim: { text: { en: '"Our Celestial Empire possesses all things in prolific abundance and lacks no product within its borders. There is therefore no need to import the manufactures of outside barbarians in exchange for our own produce."' }, src: { en: 'The Qianlong Emperor, to the British envoy Lord Macartney, 1791; quoted in "China Under Ming and Qing Rule," World History Project' } },
        q: { en: 'The excerpt most directly reflects which feature of Chinese rule in this era?' },
        choices: [{ en: 'A land-based mindset that China needed no imports' }, { en: 'A plan to rebuild Zheng He\'s ocean trade fleets' }, { en: 'Dependence on goods from British merchants' }, { en: 'An alliance with merchant families like the Stroganovs' }],
        answer: 0,
        why: { en: 'After 1433 the Ming turned inland, and the Qing kept that mindset: China produced all it needed, so the emperor saw no need for imports.' }
      },
      {
        stim: { title: { en: 'Collecting farm taxes' }, rows: [[{ en: 'Empire' }, { en: 'Who collected' }, { en: 'What happened' }], [{ en: 'Ming China' }, { en: 'A census bureau, later local landowners' }, { en: 'Taxes went up, revenues went down' }], [{ en: 'Ottoman Empire' }, { en: 'Timar landlords' }, { en: 'Landlords paid a portion to the sultan' }], [{ en: 'Safavid Empire' }, { en: 'Local leaders, who kept a portion' }, { en: 'Revenues decreased' }]], src: { en: 'From "Legitimizing and Consolidating Power," World History Project' } },
        q: { en: 'The table best supports which claim about early modern empires?' },
        choices: [{ en: 'Relying on local collectors could cut state revenue' }, { en: 'Taxes on trade fully replaced taxes on agriculture' }, { en: 'Ottoman sultans collected every farm tax directly' }, { en: 'Peasant taxes fell over time in every empire' }],
        answer: 0,
        why: { en: 'When landowners or local leaders collected, they kept part of the money. The Ming and Safavid states both lost revenue this way.' }
      },
      {
        stim: { text: { en: 'The Mughal Emperor Akbar asked his followers, no matter what their faith, to pledge to support him personally, rather than the empire as a whole.' }, src: { en: 'Adapted from "Legitimizing and Consolidating Power," World History Project' } },
        q: { en: 'Which of the following best explains why Akbar used the policy described above?' },
        choices: [{ en: 'He relied on Hindu, Sikh and Muslim nobles' }, { en: 'He sought to impose one Shi\'a identity' }, { en: 'He claimed the title caliph of all of Islam' }, { en: 'He had just taken the holy city of Mecca' }],
        answer: 0,
        why: { en: 'A Muslim ruler with Hindu, Sikh and Muslim nobles needed loyalty that did not depend on one faith. One Shi\'a identity was the Safavid way; caliph and Mecca were Ottoman.' }
      },
      {
        stim: { text: { en: 'The Mughal Sultan Akbar (r. 1556–1605) forbade anyone but the emperor from owning cannon.' }, src: { en: 'Adapted from "Gunpowder Empires," World History Project' } },
        q: { en: 'Which of the following best explains how the policy above helped consolidate Akbar\'s power?' },
        choices: [{ en: 'Rebel nobles could not hold castles against him' }, { en: 'Nobles gained a stake through marriage alliances' }, { en: 'Firearms had replaced swords, spears and bows' }, { en: 'Cannon removed the need for any bureaucracy' }],
        answer: 0,
        why: { en: 'Cannon could reduce castle walls to rubble, so only the emperor could break a rebel\'s defenses. Most soldiers still used swords, spears and bows.' }
      },
      {
        q: { en: 'Compared with Ming China, the Mughal Empire relied more heavily on which group to run its lands?' },
        choices: [{ en: 'Land-holding military commanders' }, { en: 'Officials who passed Confucian exams' }, { en: 'Muslim clergy who ran every court' }, { en: 'Merchant families given trade rights' }],
        answer: 0,
        why: { en: 'Mughal mansabdars were land-holding military commanders. The Ming relied most on exam-trained officials, and their landowners were usually not soldiers.' }
      },
      {
        stim: { text: { en: 'Earlier Mughal emperors had represented themselves to their subjects as "the Shadow of God on Earth."' }, src: { en: 'Adapted from "South Asia 1450–1750," World History Project' } },
        q: { en: 'The title in the excerpt most directly reflects which strategy of early modern rulers?' },
        choices: [{ en: 'Using religion to show a right to rule' }, { en: 'Claiming descent from Byzantine Caesars' }, { en: 'Restoring a dynasty the Mongols destroyed' }, { en: 'Winning loyalty through marriage alliances' }],
        answer: 0,
        why: { en: 'A link to God is a religious claim to legitimacy. Caesars were the Romanov claim, restoring the Song was the Ming claim, and marriages were a political tool.' }
      },
      {
        stim: { text: { en: 'Akbar also formalized sulh-i kul, or "universal toleration." This policy now mandated that non-Muslim subjects be accorded the same rights as Muslims.' }, src: { en: 'Adapted from "South Asia 1450–1750," World History Project' } },
        q: { en: 'Compared with the religious policy of the Safavid shahs, Akbar\'s policy above was different because it' },
        choices: [{ en: 'protected many faiths rather than imposing one' }, { en: 'made Shi\'a Islam the official faith of every subject' }, { en: 'gave Muslim clergy the whole legal system' }, { en: 'ended the use of Muslim judges in courts' }],
        answer: 0,
        why: { en: 'The Safavids worked with Shi\'a clergy to impose one identity. Akbar, ruling a mostly Hindu land, gave all faiths equal rights, yet still kept Muslim judges.' }
      },
      {
        stim: { title: { en: 'Claims to the right to rule' }, rows: [[{ en: 'Rulers' }, { en: 'Claim' }], [{ en: 'Romanov tsars' }, { en: 'Heirs of Byzantium; backed by the Orthodox Church' }], [{ en: 'Ottoman sultans' }, { en: 'Selim I takes the title caliph' }], [{ en: 'First Ming emperor' }, { en: 'Restoring the Song dynasty' }], [{ en: 'Qing emperors' }, { en: 'Rituals at the Ming emperors\' tombs' }]], src: { en: 'From "Legitimizing and Consolidating Power," World History Project' } },
        q: { en: 'Which of the following was a continuity across the empires in the table?' },
        choices: [{ en: 'Rulers tied themselves to past powers or faith' }, { en: 'Rulers relied mostly on exam-trained bureaucrats' }, { en: 'Rulers taxed trade more than agriculture' }, { en: 'Rulers gave power back to local nobles' }],
        answer: 0,
        why: { en: 'Each claim links the ruler to an older power or to religion. That is how early modern rulers sought legitimacy.' }
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
