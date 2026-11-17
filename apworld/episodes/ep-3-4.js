/* HISTORYWALKER · Episode 3.4 · Comparison in Land-Based Empires (AP World Topic 3.4, c. 1450–1750)
   Beijing, capital of Qing China, in 1700, in the reign of the Kangxi Emperor. From here the student compares how the
   Ottoman, Safavid, Mughal, Russian and Qing empires expanded and kept power.
   Content source: Khan Academy, AP World History (World History Project), Unit 3 "Land-Based Empires":
   "Activity: Comparison—Empires" (3.4), "Unit 3 Introduction: Land-Based Empires 1450 to 1750" (Trevor Getz),
   "Gunpowder Empires" (Trevor Getz), "China Under Ming and Qing Rule" (Trevor Getz), "A Sublime Empire: Ottoman Rule on
   Land and Sea" (Bennett Sherry), "The Safavid Empire" (Trevor Getz), "South Asia 1450–1750" (Hannah Archambault),
   "From Muscovy to the Russian Empire" (Trevor Getz), "Legitimizing and Consolidating Power" (Trevor Getz).
   World History Project content is CC BY-NC 4.0. Facts here come from those readings. English only, AP level. */
window.EPISODE = {
  id: '3.4',
  realm: 3,
  sol: 'AP 3.4',
  style: 'china',
  weather: { sky: 'leaves', time: 'sunset' },
  title: { en: 'Comparison in Land-Based Empires' },
  place: { en: 'Beijing, Qing China, 1700' },
  intro: [
    { en: 'The Grump blurred the page on the great land empires. In Beijing, people forget how empires win and keep power!' },
    { en: 'After the Mongol Empire fell, [[land-based empire|land-based empires]] filled the gap: Ottoman, Safavid, Mughal, Russian, and in China the Ming, then the Qing.' },
    { en: 'Talk to the 4 people here and read the 2 sources on the reading stands. Help a tutor, then wake the time stone and compare the empires.' }
  ],
  scenes: {
    at: [116.4, 39.9],
    year: 1700,
    start: [
      { en: 'In 1700, the Qing dynasty ruled China from Beijing. Its emperor was Kangxi.' },
      { en: 'The Qing were Manchus, outsiders from the north who took power in the 1640s.' },
      { en: 'Other vast land empires ruled too: the Ottomans, Safavids, Mughals and Russians.' }
    ],
    guess: {
      q: { en: 'The Kangxi Emperor froze taxes so they would not rise. How did farmers feel?' },
      choices: [{ t: { en: '😊 They liked it' }, ok: true }, { t: { en: '😠 They hated it' } }],
      why: { en: 'Freezing taxes was very popular. Chinese peasants came to live better than in almost any other society.' }
    },
    page: { en: 'The Kangxi Emperor ordered scholars to compile the first real dictionary of Chinese characters.' },
    next: {
      q: { en: 'Next: new ships and navigation tools. Did they help sailors cross whole oceans?' },
      choices: [{ t: { en: 'Yes, they did' }, ok: true }, { t: { en: 'No, never' } }],
      why: { en: 'New ships and new ways to find direction carried sailors across open oceans. You go there next.' }
    }
  },
  start: [15, 10],
  map: [
    'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
    'W.QQQQQQ..T..P....DDDDDDDDDDD..W',
    'W.QQQQQQ.x........DDDDDDDDDDD..W',
    'W.hhhdhh..........DDDDDdDDDDD..W',
    'W::::::::......llxlllllllllllllW',
    'W::::::::llllllllllOlllllllllllW',
    'W::::::::llllllll........RRRRR.W',
    'W::::::::llllllll........hhdhhTW',
    'W::::::::llllllll..............W',
    'W........llllllll.............TW',
    'WllllllllllllllllllllllllllllllW',
    'WRRR..T...T...xll..DDDDDD.RRRR.W',
    'Whdhlmlmlmlml..ll..DDDDDD.hhdh.W',
    'W...lllllllll..ll..DDdDDD......W',
    'W...lllllllll..ll.............TW',
    'W...lllllllll..ll.T......x.....W',
    'W..T...........ll...........T..W',
    'WWWWWWWW:WWWWWWllWWWWWWW:WWWWWWW',
    '~~~~~~~~B~~~~~~BB~~~~~~~B~~~~~~~',
    'Tooooooo:oooooo::ooooooo:ooooooT',
    'Tooooooo:oooooo::ooooooo:ooooooT',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT'
  ],
  words: {
    'land-based empire': { en: 'a large state that grew by conquering neighboring lands, like the Ottoman, Safavid, Mughal, Russian and Qing empires' },
    'centralized': { en: 'with power gathered in the ruler\'s own hands instead of spread out among nobles and allies' },
    'bureaucracy': { en: 'a large group of officials paid by the central government to collect taxes and run the state' },
    'gunpowder': { en: 'an explosive first made in China; it fired the cannon and muskets that helped empires grow' },
    'legitimacy': { en: 'the accepted right to rule; rulers claimed it through religion, old titles and links to past dynasties' },
    'civil service exam': { en: 'a written test on Confucian books; passing it could make a man a government official in China' },
    'devshirme': { en: 'the Ottoman system that took boys from Christian families in the Balkans, converted them to Islam and trained them to serve the sultan' },
    'janissary': { en: 'a soldier of the Ottoman sultan\'s elite corps, armed with muskets and loyal to the sultan' },
    'mansabdar': { en: 'a Mughal military commander who held rank from the emperor and had to prove his loyalty at court' },
    'caliph': { en: 'a successor to the Prophet Muhammad; Ottoman sultans used the title to claim leadership of Sunni Islam' },
    'shia': { en: 'the branch of Islam (Shi\'ite) that followed Imam Ali; the Safavids made it their state faith' },
    'sulh-i kul': { en: '"universal toleration": Akbar\'s policy that non-Muslim subjects had the same rights as Muslims' },
    'timar': { en: 'an Ottoman estate granted by the sultan; its peasants paid part of their harvest as tax' },
    'sipahi': { en: 'an Ottoman noble, basically a knight, who gave yearly service to the state in return for the right to tax an area' },
    'political technologies': { en: 'ideas and ways of organizing an empire, like a bureaucracy or an alliance with religious officials, that let a central government rule a big area' },
    'serf': { en: 'in Russia, a peasant who could not leave the land and was heavily taxed' },
    'tsar': { en: 'the title of Russia\'s rulers, taken from the Roman title Caesar' },
    'manchu': { en: 'a people from north of China whose armies took power and founded the Qing dynasty' }
  },
  npcs: [
    {
      x: 4, y: 7, name: { en: 'Bayan' }, role: { en: 'Manchu soldier' },
      look: { skin: 2, hair: '#1b1410', shirt: '#2a4a8a', pants: '#2a2a3a', hat: '#7a2a2a', style: 'short' },
      lines: [
        { en: 'We [[manchu|Manchus]] came from the north in the 1640s, supposedly to help the Ming. Instead, we took power ourselves as the Qing dynasty.' },
        { en: '[[gunpowder|Gunpowder]] was first made in China. Guns cost so much that local nobles cannot buy many, and cannon smash their castle walls.' },
        { en: 'Cannon won Constantinople for the Ottomans in 1453. Babur beat the Sultan of Delhi at Panipat in 1526. Russians beat the Crimean Khanate in 1532.' },
        { en: 'Our Kangxi Emperor, ruler since 1661, first ended resistance, then made his army smaller to keep costs low. That let him freeze taxes.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Which best explains how gunpowder helped rulers of land-based empires centralize power?' },
        choices: [
          { ok: true, t: { en: 'Costly guns and cannon undercut local nobles' }, why: { en: 'Yes. Only rulers could buy many guns, and cannon broke the castle walls nobles hid behind. Power moved to the center.' } },
          { t: { en: 'Muskets let each noble defend his own castle' }, why: { en: 'No. Guns were too costly for most nobles, and cannon made castles useless. The Mughal Akbar even banned anyone but himself from owning cannon.' } },
          { t: { en: 'Guns let rulers stop relying on any allies' }, why: { en: 'No, an overstatement. Rulers still needed paid officials, nobles and religious leaders to hold a vast land.' } }
        ]
      }
    },
    {
      x: 24, y: 8, name: { en: 'Liang' }, role: { en: 'Scholar-official' },
      look: { skin: 1, hair: '#2b1d14', shirt: '#7a2a2a', robe: true, hat: '#1b1410', style: 'bun' },
      lines: [
        { en: 'I passed the [[civil service exam|exams]] on Confucian texts about acting virtuously. Officials often come from land-owning families, but not always the most powerful ones.' },
        { en: 'The Ming built a huge [[bureaucracy|bureaucracy]], perhaps 200,000 people. The Qing kept the system, but we officials answer to generals tied to the emperor\'s family.' },
        { en: 'The Ottomans train boys from the [[devshirme|devshirme]]. Lands granted to them go back to the sultan when they die, so no permanent aristocracy forms.' },
        { en: 'Mughal [[mansabdar|mansabdars]] must come to court often to prove loyalty. Ottoman [[sipahi|sipahi]] give yearly service in return for the right to tax an area.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Compared with Ottoman officials raised through the devshirme, Qing officials were chosen mainly...' },
        choices: [
          { ok: true, t: { en: 'by examinations on Confucian texts' }, why: { en: 'Yes. China chose officials by exam; the Ottomans trained boys from the devshirme. Both wanted skilled officials loyal to the ruler.' } },
          { t: { en: 'by service as commanders under generals' }, why: { en: 'No. Qing officials did answer to generals tied to the emperor, but they won their posts by passing the exams.' } },
          { t: { en: 'by birth into the most powerful families' }, why: { en: 'No. Many came from land-owning families, but not always the most powerful ones. They had to pass the exams.' } }
        ]
      }
    },
    {
      x: 8, y: 14, name: { en: 'Yusuf' }, role: { en: 'Caravan merchant' },
      look: { skin: 3, hair: '#2b1d14', shirt: '#2a7a6a', robe: true, hat: '#e8e0d0', style: 'short' },
      lines: [
        { en: 'Every empire taxes me. Mughal rulers tax land, and their customs take about 2.5 percent. Safavid shahs put tolls on caravans and even "sell" trade routes.' },
        { en: 'The Ottoman sultan claims to be [[caliph|caliph]]; Selim I took Mecca and Medina in 1517. Christians and Jews govern themselves if they pay taxes and stay loyal.' },
        { en: 'From 1501 the [[shia|Shi\'a]] Safavid Ismail required conquered people to become Shi\'ites. In Tabriz, as many as 20,000 Sunnis who resisted were killed.' },
        { en: 'Akbar ruled a mostly Hindu land. He married daughters of Hindu Rajput families and declared [[sulh-i kul|sulh-i kul]]: non-Muslims had the same rights as Muslims.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Which context best explains Akbar\'s policy of sulh-i kul, or universal toleration?' },
        choices: [
          { ok: true, t: { en: 'A Muslim dynasty ruling a Hindu majority' }, why: { en: 'Yes. A Muslim emperor of a mostly Hindu land needed loyalty from every faith, so non-Muslims got the same rights.' } },
          { t: { en: 'A Shi\'a dynasty facing Sunni neighbors' }, why: { en: 'No. That was the Safavid context, and the Safavids forced conversion instead of tolerating other faiths.' } },
          { t: { en: 'A Sunni caliph guarding Mecca and Medina' }, why: { en: 'No. That was the Ottoman sultan. Akbar\'s problem was ruling Hindus, Muslims, Sikhs and others in India.' } }
        ]
      }
    },
    {
      x: 20, y: 19, name: { en: 'Old Wang' }, role: { en: 'Farmer' },
      look: { skin: 3, hair: '#8a8a8a', shirt: '#6a7a4a', pants: '#3a3a2a', hat: '#c9a24a', style: 'short' },
      lines: [
        { en: 'Ming taxes were low at first, then rose. Local landowners who collected them kept some, so we paid more while the state got less.' },
        { en: 'By the 1620s, taxes crushed us. Famines struck in 1628, and the Ming could not feed us. That weakness let the Qing take power.' },
        { en: 'The Kangxi Emperor froze our taxes so they would not rise. Now Chinese peasants live better than in almost any other society.' },
        { en: 'Ottoman peasants on a [[timar|timar]] give 15 to 25 percent of their crop to a landlord, who sends part to the sultan. Russian [[serf|serfs]] cannot leave their land.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Which best describes a change in Chinese farm taxes from the late Ming to the Kangxi Emperor?' },
        choices: [
          { ok: true, t: { en: 'Crushing taxes gave way to frozen taxes' }, why: { en: 'Right. Heavy late-Ming taxes and the famines of 1628 weakened the Ming. Kangxi kept taxes from rising, a very popular move.' } },
          { t: { en: 'Landowners began to keep part of the tax' }, why: { en: 'No. That happened under the Ming and helped ruin it: taxes went up while the state got less.' } },
          { t: { en: 'Farmers were bound to the land as serfs' }, why: { en: 'No. Serfdom was Russia\'s system under the Romanovs. Chinese farmers were not serfs.' } }
        ]
      }
    },
    {
      doc: true, x: 28, y: 5, icon: '📜',
      name: { en: 'The Qianlong Emperor to Lord Macartney' }, role: { en: 'Primary source' },
      src: { en: 'The Qianlong Emperor, explanation to the British trade envoy Lord Macartney, 1791; quoted in "China Under Ming and Qing Rule," World History Project' },
      lines: [
        { en: '"Our Celestial Empire possesses all things in prolific abundance and lacks no product within its borders."' },
        { en: '"There is therefore no need to import the manufactures of outside barbarians in exchange for our own produce."' },
        { en: 'Context: the Qianlong Emperor, Kangxi\'s grandson, gave this answer in 1791 to a British envoy who wanted more trade. Since 1433, when the Ming ended Zheng He\'s great fleets, China had turned its resources inland. Foreign merchants were welcome to come to China. In the 1750s Qianlong\'s campaigns made China larger than ever. It was peaceful and prosperous.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Point of view: which best explains why the emperor says China needs no foreign goods?' },
        choices: [
          { ok: true, t: { en: 'He ruled a rich empire that made all it needed' }, why: { en: 'Yes. China produced everything it needed at home, and inland expansion had brought new wealth and land.' } },
          { t: { en: 'His empire had lost its wealth to European traders' }, why: { en: 'No. China in this era was peaceful, prosperous and larger than ever. It was not a time of decline or European domination.' } },
          { t: { en: 'The Ming had banned all trade with Asian neighbors' }, why: { en: 'No. Trade went on, mostly with neighbors in Southeast and Central Asia, and foreign merchants could come to China.' } }
        ]
      }
    },
    {
      doc: true, x: 6, y: 5, icon: '📖',
      name: { en: 'Gunpowder Empires' }, role: { en: 'Reading' },
      src: { en: 'Adapted from "Gunpowder Empires" by Trevor Getz, World History Project (Khan Academy)' },
      lines: [
        { en: 'Historians William H. McNeill and Marshall G.S. Hodgson saw three vast empires rise around the same time: the Ottoman, Safavid and Mughal. They called them "gunpowder empires." Guns solved a big problem. Rulers had let local nobles govern in their name, and nobles hid behind castle walls. But guns were so expensive that only sultans, kings and emperors could buy many, and cannon could reduce castle walls to rubble.' },
        { en: 'Ottoman Sultan Murad I (r. 1362–1389) built the janissary corps, enslaved soldiers with muskets, loyal only to him. Babur used muskets and cannon to defeat the Sultan of Delhi in 1526. Shah Abbas the Great (r. 1588–1629) assembled 12,000 musketeers and 500 cannon. The Mughal Akbar forbade anyone but the emperor from owning cannon.' },
        { en: 'Yet recent historians say the name may mislead. Most armies still relied mainly on swords, spears and bows. Ruling vast lands relied more on [[political technologies|political technologies]]: a bureaucracy of officials paid by the central government, and alliances between rulers and religious officials. Russia and Qing China followed the same pattern, and China had the most advanced bureaucracy of the age.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why do recent historians find the term "gunpowder empires" misleading?' },
        choices: [
          { ok: true, t: { en: 'Rule rested on officials and religious allies' }, why: { en: 'Yes. Armies still used mostly swords, spears and bows. Bureaucracy and alliances with religious officials held the empires together.' } },
          { t: { en: 'Only the Ottomans ever used muskets or cannon' }, why: { en: 'No. Babur, Shah Abbas, the Russians and the Qing all used gunpowder weapons too.' } },
          { t: { en: 'Local nobles, not rulers, owned most cannon' }, why: { en: 'No. Guns were too costly for nobles, and rulers kept them for themselves, as Akbar did with cannon.' } }
        ]
      }
    }
  ],
  houses: [
    { at: [5, 3], name: { en: 'Captain Ulan' }, look: { skin: 2, hair: '#1b1410', shirt: '#2a4a8a', pants: '#2a2a3a', style: 'short' },
      lines: [{ en: 'Our cannon and muskets are kept here. Only the emperor can pay for so many.' }, { en: 'Once the fighting ended, Kangxi sent many soldiers home. A smaller army costs less.' }] },
    { at: [23, 3], name: { en: 'Clock keeper Song' }, look: { skin: 1, hair: '#2b1d14', shirt: '#b98250', robe: true, style: 'bun' },
      lines: [{ en: 'The emperor loves clocks from Europe! He is curious about technology from every land.' }, { en: 'He honors old Chinese traditions too. Tradition and new ideas live side by side here.' }] },
    { at: [27, 7], name: { en: 'Dictionary scholar Fang' }, look: { skin: 1, hair: '#6e6e6e', shirt: '#3a5a8a', robe: true, style: 'bun' },
      lines: [{ en: 'The emperor ordered us to compile the first real dictionary of Chinese characters.' }, { en: 'We also gather old poetry. The court revives culture based on China\'s history.' }] },
    { at: [2, 12], name: { en: 'Bookseller Qiu' }, look: { skin: 0, hair: '#1b1410', shirt: '#8e5bd6', robe: true, style: 'long' },
      lines: [{ en: 'Everyone wants Journey to the West, the tale of the monk Xuanzang\'s trip to India.' }, { en: 'Some of the world\'s greatest books came from China after 1450.' }] },
    { at: [21, 13], name: { en: 'Exam proctor He' }, look: { skin: 1, hair: '#2b1d14', shirt: '#5a3a2a', robe: true, style: 'short' },
      lines: [{ en: 'Candidates write here about Confucian texts on how to act virtuously.' }, { en: 'Many come from land-owning families, but not always the most powerful ones.' }] },
    { at: [28, 12], name: { en: 'Tax clerk Gu' }, look: { skin: 2, hair: '#1b1410', shirt: '#4a7aa8', robe: true, style: 'short' },
      lines: [{ en: 'The Ming built a bureau that counted peasant families and collected their taxes.' }, { en: 'Later, local landowners collected and kept some money. Taxes rose, yet the state got less.' }] }
  ],
  signs: [
    { x: 9, y: 2, text: { en: 'ARSENAL AND BARRACKS · Cannon and muskets of the Qing army.' } },
    { x: 17, y: 4, text: { en: 'PALACE GATE · Home of the Kangxi Emperor, ruler since 1661.' } },
    { x: 14, y: 11, text: { en: 'MARKET · Goods from Central and Southeast Asia. Foreign merchants are welcome to come to China.' } },
    { x: 25, y: 15, text: { en: 'EXAMINATION HALL · Pass the exams on Confucian texts and serve the emperor.' } }
  ],
  finds: [
    { clueAt: [20, 16], at: [23, 16], decor: 'coinold', clue: { en: 'From this note, walk 3 steps east along the wall south of the exam hall.' },
      text: { en: 'A silver coin! Silver was in such high demand in China and India that traders carried it from afar.' } }
  ],
  scraps: [[1, 1], [30, 16], [1, 20]],
  smudges: [[22, 9], [6, 20]],
  quest: {
    stat: 'mov',
    title: { en: 'The Torn Chart of Empires' },
    giver: {
      x: 2, y: 15, name: { en: 'Lin' }, role: { en: 'Tutor' },
      look: { skin: 1, hair: '#1b1410', shirt: '#c0392b', robe: true, style: 'bun' },
      lines: [
        { en: 'I tutor young men for the exams. I drew a chart comparing the great empires: how each rules, fights, prays and pays.' },
        { en: 'The Grump\'s Ink Thief tore it into three pieces! Zhao the water carrier saw it run. He works at the well by the palace.' }
      ],
      wait: { en: 'Zhao fills his buckets at the well in the palace square. Walk north up the main avenue.' },
      thanks: { en: 'My chart is whole! Empires shared tools of rule, but each used them its own way. Thank you!' }
    },
    contact: {
      x: 20, y: 5, name: { en: 'Zhao' }, role: { en: 'Water carrier' },
      look: { skin: 2, hair: '#2b1d14', shirt: '#5a6a3a', pants: '#2a2a3a', style: 'short' },
      lines: [
        { en: 'Yes, the inky thief ran past my well! It hid each piece where Beijing shows one tool of empire.' },
        { en: 'Follow its riddles: first the officials, then the taxes, then the soldiers. Walk to each place.' }
      ]
    },
    action: {
      type: 'chase',
      at: [1, 9],
      hops: [[6, 8], [3, 9]],
      name: { en: 'The Ink Thief' },
      taunt: { en: 'Hee hee! Three pieces at three tools of empire: officials, taxes, soldiers. Find them!' },
      clues: [
        { t: { en: 'Piece 1 is where young men write exams to become officials. Look south of the long street, east of the avenue.' },
          zones: [{ x: 19, y: 14, w: 6, h: 1 }],
          noBy: [{ x: 1, y: 4, w: 8, h: 1, t: { en: 'These are soldiers\' barracks. Qing officials won their posts by exams, not in battle.' } }],
          found: { en: 'Piece 1, at the exam hall! A trained bureaucracy helped the Qing rule a vast land.' } },
        { t: { en: 'Piece 2 is where clerks count farm families and collect taxes. It is the small office east of the exam hall.' },
          zones: [{ x: 26, y: 13, w: 4, h: 1 }],
          noBy: [{ x: 4, y: 13, w: 9, h: 1, t: { en: 'This is the market. Taxes are counted at the tax office, east of the exam hall.' } }],
          found: { en: 'Piece 2, at the tax office! Taxes on farming paid for armies, roads and palaces.' } },
        { t: { en: 'Piece 3 is where the soldiers keep their cannon and muskets. Go to the northwest corner of the city.' },
          zones: [{ x: 1, y: 4, w: 8, h: 1 }],
          noBy: [{ x: 18, y: 4, w: 11, h: 1, t: { en: 'This is the palace gate. The barracks are in the northwest corner of the city.' } }],
          found: { en: 'Piece 3, at the barracks! Gunpowder weapons helped rulers stand above the nobles.' } }
      ],
      win: { en: 'Caught! The Ink Thief drops the last piece and flees over the wall. Lin\'s chart is whole.' },
      item: { icon: '📜', name: { en: 'Lin\'s chart of empires' } }
    }
  },
  challenge: {
    at: [11, 7], type: 'carry', stat: 'hei',
    title: { en: 'Compare the tools of empire' },
    intro: { en: 'Every land-based empire faced one problem: holding a vast, diverse land. Carry each card to the tool it shows: faith, officials, gunpowder or money.' },
    zones: [
      { bin: 'rel', x: 9, y: 5, w: 2, h: 2 },
      { bin: 'off', x: 13, y: 5, w: 2, h: 2 },
      { bin: 'gun', x: 9, y: 8, w: 2, h: 2 },
      { bin: 'tax', x: 13, y: 8, w: 2, h: 2 }
    ],
    bins: [
      { id: 'rel', icon: '🙏', label: { en: 'Faith and legitimacy' }, sub: { en: 'the right to rule' } },
      { id: 'off', icon: '📜', label: { en: 'Officials and nobles' }, sub: { en: 'who runs the empire' } },
      { id: 'gun', icon: '💥', label: { en: 'Gunpowder and armies' }, sub: { en: 'force and conquest' } },
      { id: 'tax', icon: '💰', label: { en: 'Taxes and trade' }, sub: { en: 'paying for it all' } }
    ],
    items: [
      { bin: 'rel', t: { en: 'Russia\'s rulers take the title [[tsar|Tsar]], from the Roman Caesar, and ally with the Orthodox Church.' }, why: { en: 'An old Roman title and the Church\'s support were claims to [[legitimacy|legitimacy]], the right to rule.' } },
      { bin: 'rel', t: { en: 'The Qing, outsiders from the north, hold ritual ceremonies at the tombs of the Ming emperors.' }, why: { en: 'The Qing could not claim an older dynasty, so they honored the Ming to look legitimate.' } },
      { bin: 'off', t: { en: 'The Qing keep the Confucian exams to choose trained officials.' }, why: { en: 'Exams filled a [[bureaucracy|bureaucracy]] loyal to the emperor, not to local nobles.' } },
      { bin: 'off', t: { en: 'Mughal mansabdars, military commanders, must come to court often to prove loyalty.' }, why: { en: 'Rulers kept nobles in check. Mughal commanders showed loyalty to the emperor in person.' } },
      { bin: 'gun', t: { en: 'The Ottomans break the walls of Constantinople with huge cannon in 1453.' }, why: { en: 'Cannon won a great walled city. It became Istanbul, the Ottoman capital.' } },
      { bin: 'gun', t: { en: 'The Mughal Akbar forbids anyone but the emperor from owning cannon.' }, why: { en: 'Keeping cannon for himself stopped nobles from challenging him. Power became more [[centralized|centralized]].' } },
      { bin: 'tax', t: { en: 'Ottoman peasants on timars give 15 to 25 percent of their harvest as tax.' }, why: { en: 'Taxing farming was the main way empires paid for armies, roads and palaces.' } },
      { bin: 'tax', t: { en: 'Safavid shahs sell Persian silk to Europe through Armenian traders.' }, why: { en: 'Silk was a profitable export. Trade helped pay for the Safavid wars with the Ottomans.' } }
    ],
    success: { en: 'Every card is home! Each empire used all four tools, but in its own way. That is comparison: similarities and differences.' }
  },
  boss: {
    at: [29, 1], stat: 'hei', need: 3,
    name: { en: 'The Dust Grump' },
    appear: { en: 'The Dust Grump is hiding beside the palace wall!' },
    taunt: { en: 'Sultans, shahs, tsars, emperors... they are all the same! I will blur every difference away.' },
    win: { en: 'The dust settles over Beijing. The page on land-based empires floats down into your hands!' },
    questions: [
      {
        stim: { text: { en: '"Our Celestial Empire possesses all things in prolific abundance and lacks no product within its borders. There is therefore no need to import the manufactures of outside barbarians in exchange for our own produce."' }, src: { en: 'The Qianlong Emperor to the British envoy Lord Macartney, 1791; quoted in "China Under Ming and Qing Rule," World History Project' } },
        q: { en: 'The emperor\'s point of view in the excerpt most directly reflects...' },
        choices: [{ en: 'confidence that a vast inland empire was self-sufficient' }, { en: 'fear that European merchants now dominated China\'s trade' }, { en: 'the Ming plan to send Zheng He\'s fleets across the ocean' }, { en: 'a Confucian ban on all trade with Asian neighbors' }],
        answer: 0,
        why: { en: 'Since 1433 China had turned inland and produced all it needed. By Qianlong\'s time it was prosperous and larger than ever, so he saw no need for foreign goods.' }
      },
      {
        stim: { text: { en: 'Despite having some firearms, most of these armies continued to rely mainly on swords, spears, and bows. The rulers\' ability to reign over vast empires may have relied more on advances in governance.' }, src: { en: 'Adapted from "Gunpowder Empires" by Trevor Getz, World History Project' } },
        q: { en: 'The passage best supports which claim about land-based empires from 1450 to 1750?' },
        choices: [{ en: 'Gunpowder played no real part in their growth' }, { en: 'Officials and religious allies held them together' }, { en: 'Only the Ottomans, Safavids and Mughals had guns' }, { en: 'Their armies fought mostly with muskets and cannon' }],
        answer: 1,
        why: { en: 'Recent historians stress "political technologies": paid officials and alliances with religious leaders. Guns mattered, but saying they played no part is an overstatement.' }
      },
      {
        stim: { title: { en: 'How three empires raised money' }, rows: [[{ en: 'Empire' }, { en: 'Example' }], [{ en: 'Ottoman' }, { en: 'Peasants on timars paid 15–25% of their harvest to a landlord' }], [{ en: 'Mughal' }, { en: 'Taxes on land, plus a customs duty of about 2.5% on imports' }], [{ en: 'Safavid' }, { en: 'Tolls on caravans using imperial roads' }]], src: { en: 'From "Legitimizing and Consolidating Power," World History Project' } },
        q: { en: 'The table best supports which claim about funding land-based empires?' },
        choices: [{ en: 'Mughal rulers taxed trade instead of land' }, { en: 'Ottoman sultans collected harvest taxes directly' }, { en: 'Empires taxed both agriculture and trade' }, { en: 'Safavid tolls replaced all taxes on farming' }],
        answer: 2,
        why: { en: 'Empires taxed farming and trade. The Mughals taxed land AND imports; Ottoman landlords collected the harvest tax and sent part to the sultan.' }
      },
      {
        stim: { text: { en: 'Ismail appointed new religious leaders in every territory he conquered. They spread the Shi\'ite faith to captive audiences who were required to become Shi\'ites.' }, src: { en: 'Adapted from "The Safavid Empire" by Trevor Getz, World History Project' } },
        q: { en: 'Compared with Ottoman rule over religious minorities, the Safavid policy above was...' },
        choices: [{ en: 'harsher: Ottoman Christians and Jews kept self-rule' }, { en: 'milder: the Ottomans banned Jewish and Christian worship' }, { en: 'similar: both made Sunni Islam the faith of the state' }, { en: 'unusual: no other empire tied religion to its rule' }],
        answer: 0,
        why: { en: 'Safavids forced conversion to Shi\'a Islam. The Ottomans let Christian and Jewish communities govern themselves if they paid taxes and stayed loyal.' }
      },
      {
        stim: { text: { en: 'The Qing could not claim to have inherited an earlier dynasty, as they were outsiders from the north. Even so, they offered ritual ceremonies at the tombs of the Ming Emperors.' }, src: { en: 'Adapted from "Legitimizing and Consolidating Power," World History Project' } },
        q: { en: 'The Qing actions most directly reflect which strategy also used by Russia\'s rulers?' },
        choices: [{ en: 'Choosing officials through Confucian exams' }, { en: 'Giving nobles control over peasants as serfs' }, { en: 'Building armies of enslaved soldiers' }, { en: 'Claiming legitimacy through ties to the past' }],
        answer: 3,
        why: { en: 'Both sought legitimacy. The Qing honored the Ming tombs; Russia\'s rulers took the title Tsar, from the Roman Caesar, and allied with the Orthodox Church.' }
      },
      {
        stim: { title: { en: 'Rulers and their nobles' }, rows: [[{ en: 'Empire' }, { en: 'Policy' }], [{ en: 'Mughal' }, { en: 'Mansabdars must come to court often to prove loyalty' }], [{ en: 'Ottoman' }, { en: 'Sipahi give yearly service for the right to tax an area' }], [{ en: 'Mughal' }, { en: 'No one but the emperor may own cannon' }]], src: { en: 'From "Gunpowder Empires," World History Project' } },
        q: { en: 'The table best supports the claim that rulers of land-based empires...' },
        choices: [{ en: 'let nobles rule freely behind their castle walls' }, { en: 'worked to keep their nobles dependent on them' }, { en: 'replaced all nobles with officials chosen by exam' }, { en: 'left gunpowder weapons in the hands of nobles' }],
        answer: 1,
        why: { en: 'Rulers still used nobles but controlled them: service, visits to court and a monopoly on cannon. Power became more centralized.' }
      },
      {
        q: { en: 'Compared with the Ottoman devshirme, the Qing way of filling the bureaucracy differed in that it...' },
        choices: [{ en: 'took boys from Christian families in the Balkans' }, { en: 'tested candidates on Confucian texts about virtue' }, { en: 'let officials pass their granted lands to sons' }, { en: 'gave every post to the most powerful families' }],
        answer: 1,
        why: { en: 'Qing officials passed exams on Confucian texts. The devshirme took Balkan Christian boys, converted and trained them; their lands went back to the sultan.' }
      },
      {
        stim: { text: { en: 'The Kangxi Emperor first ended resistance to his rule and then decreased the size of his army to keep costs low. This allowed him to freeze taxes so that they would not increase.' }, src: { en: 'Adapted from "China Under Ming and Qing Rule" by Trevor Getz, World History Project' } },
        q: { en: 'Compared with the treatment of peasants in Romanov Russia, Kangxi\'s policy...' },
        choices: [{ en: 'also tied peasants to land owned by nobles' }, { en: 'raised taxes to pay for a larger army' }, { en: 'eased burdens while Russian serfs were bound' }, { en: 'gave peasants the timar estates of nobles' }],
        answer: 2,
        why: { en: 'Kangxi kept taxes from rising, and Chinese peasants lived better than almost anywhere. Russian serfs could not leave their land and were heavily taxed.' }
      }
    ]
  },
  learned: [
    { en: 'After the Mongols fell, [[land-based empire|land-based empires]] used [[gunpowder|gunpowder]] and a [[bureaucracy|bureaucracy]] to make power more [[centralized|centralized]].' },
    { en: 'Rulers claimed [[legitimacy|legitimacy]] through faith and the past: the Ottoman [[caliph|caliph]], the Russian [[tsar|Tsar]], the Qing honoring the Ming tombs.' },
    { en: 'They differed too: Safavids forced conversion, Akbar declared [[sulh-i kul|toleration]], China chose officials by exam, the Ottomans by the [[devshirme|devshirme]].' }
  ],
  reflect: {
    q: { en: 'AP practice: Explain one similarity and one difference in how two land-based empires kept power from 1450 to 1750.' },
    starter: { en: 'One similarity is that both the' }
  }
};
