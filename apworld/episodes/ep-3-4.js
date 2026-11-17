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
    { en: 'Talk to the 4 people here, help a tutor, then wake the time stone and compare the empires.' }
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
    'serf': { en: 'in Russia, a peasant who could not leave the land and was heavily taxed' },
    'tsar': { en: 'the title of Russia\'s rulers, taken from the Roman title Caesar' },
    'manchu': { en: 'a people from north of China whose armies took power and founded the Qing dynasty' }
  },
  npcs: [
    {
      x: 4, y: 7, name: { en: 'Bayan' }, role: { en: 'Manchu soldier' },
      look: { skin: 2, hair: '#1b1410', shirt: '#2a4a8a', pants: '#2a2a3a', hat: '#7a2a2a', style: 'short' },
      lines: [
        { en: 'We [[manchu|Manchus]] came from the north. When famine and debt broke the Ming, our army took power as the Qing.' },
        { en: '[[gunpowder|Gunpowder]] weapons cost so much that local nobles cannot buy many. Cannon smash their castle walls. So guns make rulers stronger than nobles.' },
        { en: 'The Ottomans broke Constantinople\'s walls with cannon in 1453. Our Kangxi Emperor ended resistance, then made his army smaller to save money.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'How did gunpowder weapons help the rulers of land-based empires?' },
        choices: [
          { ok: true, t: { en: 'They weakened local nobles and castles' }, why: { en: 'Yes. Only rulers could afford many guns, and cannon broke the walls nobles hid behind. Power became more centralized.' } },
          { t: { en: 'They let every noble raise his own army' }, why: { en: 'No. Guns were too costly for most nobles. The Mughal Akbar even banned anyone but himself from owning cannon.' } },
          { t: { en: 'They ended the wars between empires' }, why: { en: 'No. Empires with guns kept fighting. The Ottomans and Safavids clashed for generations.' } }
        ]
      }
    },
    {
      x: 24, y: 8, name: { en: 'Liang' }, role: { en: 'Scholar-official' },
      look: { skin: 1, hair: '#2b1d14', shirt: '#7a2a2a', robe: true, hat: '#1b1410', style: 'bun' },
      lines: [
        { en: 'I passed the [[civil service exam|exams]] on Confucian books. The Qing kept the Ming system of trained officials, a huge [[bureaucracy|bureaucracy]].' },
        { en: 'The Ming had perhaps 200,000 officials. Under the Qing, we answer to generals tied to the emperor\'s family.' },
        { en: 'Every great empire needs officials paid by the ruler. The Ottomans train boys taken in the [[devshirme|devshirme]]. Mughal [[mansabdar|mansabdars]] must come to court to prove loyalty.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Compared with the Ottoman Empire, how did Qing China choose many of its officials?' },
        choices: [
          { ok: true, t: { en: 'By exams on Confucian books' }, why: { en: 'Yes. China chose officials by exam; the Ottomans trained boys from the devshirme. Both wanted skilled, loyal servants.' } },
          { t: { en: 'By taking boys from Christian families' }, why: { en: 'No. That was the Ottoman devshirme. The Qing filled their bureaucracy through exams on Confucian texts.' } },
          { t: { en: 'By letting nobles pass posts to sons' }, why: { en: 'No. Both empires tried to limit the power of noble families. Qing officials had to pass exams.' } }
        ]
      }
    },
    {
      x: 8, y: 14, name: { en: 'Yusuf' }, role: { en: 'Caravan merchant' },
      look: { skin: 3, hair: '#2b1d14', shirt: '#2a7a6a', robe: true, hat: '#e8e0d0', style: 'short' },
      lines: [
        { en: 'I bring goods from Persia and India. Every empire taxes me: tolls on Safavid roads, about 2.5 percent at Mughal customs.' },
        { en: 'Rulers use faith too. The Ottoman sultan claims to be [[caliph|caliph]] of Sunni Islam, yet Christians and Jews govern themselves if they pay taxes and stay loyal.' },
        { en: 'The Safavid shahs are [[shia|Shi\'a]] and forced subjects to convert. The Mughal Akbar ruled a mostly Hindu land, so he declared [[sulh-i kul|sulh-i kul]], universal toleration.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Why did Akbar\'s policy of universal toleration make sense in Mughal India?' },
        choices: [
          { ok: true, t: { en: 'Most of his subjects were not Muslim' }, why: { en: 'Yes. A Muslim ruler of a mostly Hindu land needed loyalty from every faith, so non-Muslims got the same rights.' } },
          { t: { en: 'He wanted all subjects to become Shi\'a' }, why: { en: 'No. Forcing people to become Shi\'a was the Safavid policy. Akbar tolerated many faiths.' } },
          { t: { en: 'India had only one religion back then' }, why: { en: 'No. India was very diverse: Hindus, Muslims, Sikhs, Jains, Buddhists, Christians, Jews and more.' } }
        ]
      }
    },
    {
      x: 20, y: 19, name: { en: 'Old Wang' }, role: { en: 'Farmer' },
      look: { skin: 3, hair: '#8a8a8a', shirt: '#6a7a4a', pants: '#3a3a2a', hat: '#c9a24a', style: 'short' },
      lines: [
        { en: 'Under the late Ming, taxes crushed us farmers. Then famines came in 1628, and the government could not feed us.' },
        { en: 'The Kangxi Emperor froze our taxes so they would not rise. Now many farm families here live well.' },
        { en: 'Travelers say Ottoman peasants on a [[timar|timar]] pay 15 to 25 percent of their crop. In Russia, [[serf|serfs]] cannot leave their land, and they are heavily taxed.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'What changed for Chinese farmers from the late Ming to the Kangxi Emperor?' },
        choices: [
          { ok: true, t: { en: 'Heavy taxes gave way to frozen taxes' }, why: { en: 'Right. Heavy late-Ming taxes and famine helped bring the Ming down. Kangxi kept taxes from rising, a very popular move.' } },
          { t: { en: 'Farmers became serfs tied to the land' }, why: { en: 'No. Serfdom was Russia\'s system, where peasants could not leave the land. Chinese farmers were not serfs.' } },
          { t: { en: 'Farmers no longer paid any taxes' }, why: { en: 'No. Kangxi froze taxes, he did not end them. Taxes on farming still paid for the state.' } }
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
        stim: { title: { en: 'How three empires raised money' }, rows: [[{ en: 'Empire' }, { en: 'Example' }], [{ en: 'Ottoman' }, { en: 'Peasants on timars paid 15–25% of their harvest' }], [{ en: 'Mughal' }, { en: 'A customs duty of about 2.5% on imported goods' }], [{ en: 'Safavid' }, { en: 'Tolls on caravans using imperial roads' }]], src: { en: 'From "Legitimizing and Consolidating Power," World History Project' } },
        q: { en: 'The table best supports which comparison?' },
        choices: [{ en: 'Empires taxed both farming and trade' }, { en: 'Only the Ottomans collected any taxes' }, { en: 'Trade was never taxed in these lands' }, { en: 'Each empire ran on Russian merchants' }],
        answer: 0,
        why: { en: 'The Ottomans taxed harvests; the Mughals and Safavids also taxed trade. Empires needed money for armies, roads and palaces.' }
      },
      {
        stim: { text: { en: 'Ismail appointed new religious leaders in every territory he conquered. They spread the Shi\'ite faith to people who were required to become Shi\'ites.' }, src: { en: 'Adapted from "The Safavid Empire," World History Project' } },
        q: { en: 'Compared with Ottoman rule over religious minorities, the Safavid policy above was...' },
        choices: [{ en: 'harsher: Ottoman minorities ruled themselves' }, { en: 'the same: both forced everyone to convert' }, { en: 'milder: the Ottomans banned every Christian church' }, { en: 'unrelated to the ruler\'s power or goals' }],
        answer: 0,
        why: { en: 'Safavids forced conversion to Shi\'a Islam. The Ottomans let Christian and Jewish communities govern themselves if they paid taxes and stayed loyal.' }
      },
      {
        stim: { text: { en: 'The Qing could not claim to have inherited an earlier dynasty, as they were outsiders from the north. Even so, they offered ritual ceremonies at the tombs of the Ming Emperors.' }, src: { en: 'Adapted from "Legitimizing and Consolidating Power," World History Project' } },
        q: { en: 'Which best explains the Qing actions described above?' },
        choices: [{ en: 'They wanted to show a right to rule' }, { en: 'They planned to bring back the Ming' }, { en: 'They hoped to convert China to Islam' }, { en: 'They meant to end the Confucian exams' }],
        answer: 0,
        why: { en: 'Honoring the dynasty before them was a way for Manchu outsiders to build legitimacy, the accepted right to rule.' }
      },
      {
        stim: { text: { en: 'Akbar formalized sulh-i kul, or "universal toleration." Non-Muslim subjects were to have the same rights as Muslims under the Mughal system.' }, src: { en: 'Adapted from "South Asia 1450–1750," World History Project' } },
        q: { en: 'Akbar\'s policy is best understood as a way to...' },
        choices: [{ en: 'win loyalty in a mostly Hindu land' }, { en: 'force all Hindu subjects to convert' }, { en: 'copy the Safavid policy on faith' }, { en: 'end all trade with other states' }],
        answer: 0,
        why: { en: 'A Muslim emperor ruling a Hindu majority needed support from every faith. Toleration kept a diverse empire together.' }
      },
      {
        stim: { text: { en: 'Gunpowder weapons were so expensive that local nobles usually couldn\'t afford them. And cannon could reduce the walls of a castle to rubble.' }, src: { en: 'Adapted from "Gunpowder Empires," World History Project' } },
        q: { en: 'The excerpt best explains how gunpowder helped rulers to...' },
        choices: [{ en: 'gain power over local nobles' }, { en: 'sell more silk to Europe' }, { en: 'share power with castle lords' }, { en: 'convert subjects to a new faith' }],
        answer: 0,
        why: { en: 'Only rulers could pay for many guns, and cannon broke nobles\' castle walls. Power became more centralized.' }
      },
      {
        q: { en: 'Which statement best compares how the Qing and Ottoman empires staffed their governments?' },
        choices: [{ en: 'Qing used exams; Ottomans trained devshirme boys' }, { en: 'Both let nobles pass every post down to sons' }, { en: 'Both chose all officials by Confucian exams' }, { en: 'Neither empire had any officials paid by rulers' }],
        answer: 0,
        why: { en: 'Both wanted loyal officials, but in different ways: Confucian exams in China, the devshirme in the Ottoman Empire.' }
      },
      {
        q: { en: 'Which strategy was shared by most land-based empires from 1450 to 1750?' },
        choices: [{ en: 'A bureaucracy of officials paid by the ruler' }, { en: 'A ban on all cannon and muskets in war' }, { en: 'Rule with no help at all from religious leaders' }, { en: 'Power shared equally with every noble' }],
        answer: 0,
        why: { en: 'Every great empire needed paid officials to collect taxes and rule. A bureaucracy kept power centralized in the ruler\'s hands.' }
      },
      {
        q: { en: 'Which statement best compares farmers under the Kangxi Emperor with serfs in Romanov Russia?' },
        choices: [{ en: 'Kangxi froze taxes; serfs could not leave land' }, { en: 'Both were free to leave the land whenever they liked' }, { en: 'Serfs paid no taxes, unlike Chinese farmers' }, { en: 'Kangxi turned Chinese farmers into serfs' }],
        answer: 0,
        why: { en: 'Kangxi kept taxes from rising, a popular move. Russian serfs were bound to the land and heavily taxed.' }
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
