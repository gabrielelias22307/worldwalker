/* HISTORYWALKER · Episode 3.3 · Empires: Belief Systems (AP World Topic 3.3, c. 1450–1750)
   Isfahan, in the Safavid Empire, about 1600: a city where the Sunni–Shi'a rivalry, news of Europe's Reformations and
   merchants from the Punjab all meet.
   Content source: Khan Academy, AP World History (World History Project), Unit 3 Lesson "Empires: Belief Systems":
   "Transformations in Eurasian Belief Systems, 1450–1750" (Amy Elizabeth Robinson), "Reformation" (video page),
   "Contextualization: Belief Systems", "Quick Sourcing: Transformation of Beliefs"; and "Unit 3 Introduction –
   Land-Based Empires 1450 to 1750" (Trevor Getz). World History Project content is CC BY-NC 4.0.
   Facts here come from those readings. No religion is praised or blamed. English only, AP level. */
window.EPISODE = {
  id: '3.3',
  realm: 3,
  sol: 'AP 3.3',
  style: 'islam',
  weather: { sky: 'dust', time: 'sunset' },
  title: { en: 'Empires: Belief Systems' },
  place: { en: 'Isfahan, Safavid Empire, 1600' },
  intro: [
    { en: 'The Void blurred this page! From 1450 to 1750, the [[little ice age|Little Ice Age]], hunger, rising prices and new [[absolutist|absolutist]] states stressed people. Many sought new ways to worship.' },
    { en: 'Talk to the 4 people here and read the 2 sources on the lecterns (📜 and 📖). Help a merchant from the German lands, then wake the time stone.' }
  ],
  scenes: {
    at: [51.67, 32.65],
    year: 1600,
    start: [
      { en: 'Between 1450 and 1750, there was an explosion of religious change across Eurasia.' },
      { en: 'In 1501, a young warrior named Ismail founded the Safavid Empire in Iran.' },
      { en: 'The Safavids were Shi\'a. Their great rivals to the west, the Ottomans, were Sunni.' }
    ],
    guess: {
      q: { en: 'The Little Ice Age, hunger and rising prices stressed many societies. Did beliefs change too?' },
      choices: [{ t: { en: '🔥 Yes, a lot' }, ok: true }, { t: { en: '🪨 No, never' } }],
      why: { en: 'Yes. Some people reached for new forms of worship, while others held more tightly to old beliefs.' }
    },
    page: { en: 'The word Sikh means "learner" or "disciple."' },
    next: {
      q: { en: 'Next: comparing land-based empires. Did emperors often present themselves as champions of a state religion?' },
      choices: [{ t: { en: 'Yes, often' }, ok: true }, { t: { en: 'No, never' } }],
      why: { en: 'Yes. The Ottomans championed Islam and Russia\'s rulers the Orthodox faith. You compare these empires next.' }
    }
  },
  start: [14, 11],
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT',
    'T..DDDDDD...T.....RRRR...QQQQ..T',
    'T..DDDDDD.....,...hhdh...hhhh..T',
    'T..DDDdDD..x........l..........T',
    'T.....l.............l..........T',
    'T,....lllllllllllllllllllllll..T',
    'T.........llllllllllllll.......T',
    'T.TT......lmlmlmlmlmlmll....TT.T',
    'T.........llllllllllllll.......T',
    'TRRR......llllllllllllll...T...T',
    'Thdh...........l........x......T',
    'T....llllllllllllllllllllll....T',
    'T....x...RRR.......QQQ.........T',
    'T.TT.....hdh.......hdh....JJ...T',
    'T.....,..................,.....T',
    'T:::::::::::::::::::::::::::::.T',
    'T~~~~~~~~~~~~~~~~~~~~B~~~~~~~~~T',
    'T~~~~~~~~~~~~~~~~~~~~B~~~~~~~~~T',
    'T....T....,.......:::::::...T..T',
    'T.TT.....YY.....T.....,....TT..T',
    'T.....,...........,............T',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT'
  ],
  words: {
    'little ice age': { en: 'a colder period in the world\'s climate, from about 1500 to 1800' },
    'absolutist': { en: 'describes a ruler who holds all of the state\'s power' },
    'safavid': { en: 'the Shi\'a empire in Iran founded by Ismail in 1501' },
    'shah': { en: 'the title of the emperor of Iran' },
    'twelver shia': { en: 'a Shi\'a community that believes there are only twelve rightful successors to Muhammad, and the twelfth is alive but in hiding' },
    'sunni': { en: 'the branch of Islam followed by the Ottoman sultans; the Sunni–Shi\'a division grew sharper in the 1500s' },
    'caliph': { en: 'a ruler of the Muslim world, seen as a rightful successor to Muhammad' },
    'madrasa': { en: 'a Muslim religious school' },
    'heretic': { en: 'someone said to hold false beliefs; Ottoman scholars used it to mean "unbeliever"' },
    'gunpowder empires': { en: 'large land-based empires, like the Ottomans and Safavids, that used gunpowder weapons to win and hold land' },
    'indulgences': { en: 'payments to the Catholic Church to reduce the punishment for a person\'s sins' },
    'ninety-five theses': { en: 'Martin Luther\'s 1517 list of arguments against the sale of indulgences' },
    'protestant reformation': { en: 'the movement, begun by Martin Luther in 1517, that broke away from the Catholic Church' },
    'priesthood of all believers': { en: 'the Protestant idea that each believer can have a direct, inner relationship with God' },
    'catholic reformation': { en: 'the Catholic Church\'s response to the Protestants: the Jesuits, the Inquisitions and the Council of Trent' },
    'jesuits': { en: 'members of the Society of Jesus (1540), who vowed obedience to the pope and served as missionaries' },
    'syncretism': { en: 'the blending of different beliefs and cultures into something new' },
    'sikhism': { en: 'a religion founded by Guru Nanak in the Punjab in the early 1500s' },
    'caste': { en: 'a ranked social group a person is born into, in Hindu society' },
    'sulh-i kull': { en: '"peace with all": the early Mughal policy of tolerating all faiths' },
    'khalsa': { en: 'an order of male Sikh devotees founded by Guru Gobind Singh in 1699' }
  },
  npcs: [
    {
      x: 9, y: 4, name: { en: 'Zahra' }, role: { en: 'Madrasa student' },
      look: { skin: 2, hair: '#1b1410', shirt: '#2a6a8a', robe: true, style: 'long' },
      lines: [
        { en: 'In 1501 a young warrior named Ismail founded our [[safavid|Safavid]] Empire. At just fourteen he conquered the city of Tabriz and proclaimed himself [[shah|shah]], emperor of Iran.' },
        { en: 'Ismail claimed descent from two holy men: Safi al-Din, founder of a popular Sufi order, and Ali, the first Shi\'a successor to Muhammad.' },
        { en: 'We are [[twelver shia|Twelver Shi\'a]]: only twelve rightful successors to Muhammad, and the twelfth is alive but hidden. Ours is a messianic belief: we expect a true leader to emerge.' },
        { en: 'Shah Abbas I builds [[madrasa|madrasas]] like mine to display his piety. The Ottoman sultan Suleiman rebuilt Jerusalem, the third holiest city in Islam. Both empires claim to protect Islam.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Twelvers held that only a divinely-ordained imam (prayer leader) could be [[caliph|caliph]], ruler of the Muslim world. Which kind of caliph did this rule out?' },
        choices: [
          { ok: true, t: { en: 'One chosen by scholars or by politics' }, why: { en: 'Yes. Twelver teaching excluded any leader chosen through a scholarly or political process, such as a sultan who simply proclaimed himself caliph.' } },
          { t: { en: 'One who claimed descent from Ali' }, why: { en: 'No. Shi\'a honor Ali as the first rightful successor to Muhammad, and Ismail himself claimed descent from him.' } },
          { t: { en: 'One who served as a Muslim prayer leader' }, why: { en: 'No. That is just what Twelvers required: an imam, a Muslim prayer leader, chosen by God.' } }
        ]
      }
    },
    {
      x: 5, y: 14, name: { en: 'Old Rostam' }, role: { en: 'Veteran soldier' },
      look: { skin: 3, hair: '#9a9a9a', shirt: '#7a3a2a', pants: '#3a2a20', hat: '#e8e0d0', style: 'short' },
      lines: [
        { en: 'The Sunni Ottomans were once one of several Muslim dynasties; the Mamluks had ruled Egypt since 1250. Then Ismail rose on the Ottomans\' eastern edge.' },
        { en: 'Selim I faced a crisis: Spain and Portugal to his west, the militant Safavids to his east. At Chaldiran he defeated Ismail, seizing eastern Anatolia and part of Iraq.' },
        { en: 'Shi\'a lived inside Ottoman borders too. Selim and his [[sunni|Sunni]] scholars named all Safavids and Shi\'a, inside or outside the empire, [[heretic|heretics]]. In 1517 Selim proclaimed himself [[caliph|caliph]].' },
        { en: 'Imperial orders all through the 1500s allowed the arrest, punishment and killing of anyone loyal to Shah Ismail or Twelver Shi\'ism. Sunni–Shi\'a marriage was outlawed.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Which best explains why Ottoman orders targeted Shi\'a living INSIDE the Ottoman Empire?' },
        choices: [
          { ok: true, t: { en: 'Their loyalty might lie with the Safavids' }, why: { en: 'Yes. With the militant Safavids on the border, Selim treated loyalty to Shah Ismail or Twelver Shi\'ism as a threat to the Sunni Ottoman state.' } },
          { t: { en: 'They had secretly allied with Spain and Portugal' }, why: { en: 'No. Spain and Portugal threatened the Ottomans from the west, but the orders targeted loyalty to Shah Ismail.' } },
          { t: { en: 'They had refused to pay imperial taxes' }, why: { en: 'No. The orders were about belief and loyalty to the Safavid shah, not about taxes.' } }
        ]
      }
    },
    {
      x: 18, y: 9, name: { en: 'Harjit' }, role: { en: 'Cloth merchant from the Punjab' },
      look: { skin: 4, hair: '#120c08', shirt: '#e0a020', pants: '#2a3a5a', hat: '#2a4a8a', style: 'short' },
      lines: [
        { en: 'In my Punjab, in northern India, Hindu, Muslim and popular traditions live side by side. Sufi dervishes and Hindu sadhus are both revered. We call this blending [[syncretism|syncretism]].' },
        { en: 'Guru Nanak was born to the Hindu Khatri merchant caste. He slipped away from accounting work to sit with Hindu and Sufi teachers. His best friend was a Muslim singer.' },
        { en: 'After a mystical experience in a river, Nanak said, "There is no Hindu, there is no Muslim." In the 1520s he set up our community. [[sikhism|Sikh]] means "learner."' },
        { en: 'Our faith travels along merchant networks, yet we reject [[caste|caste]] divisions. The divine is open to farmers and traders, women and men. Our scriptures are in everyday languages.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Sikhism began in one merchant caste. Which change shows it broke with the caste order around it?' },
        choices: [
          { ok: true, t: { en: 'Converts came from every caste' }, why: { en: 'Yes. Converts came from all major castes, even "outcaste" communities seen as impure in Hinduism, and from Islam.' } },
          { t: { en: 'Khatri merchants ruled the faith' }, why: { en: 'No. Sikhism did begin among Khatri merchants, but Sikhs rejected caste divisions instead of ranking their own caste first.' } },
          { t: { en: 'The Mughals made it a state faith' }, why: { en: 'No. Early Mughal rulers promoted [[sulh-i kull|sulh-i kull]], "peace with all": toleration of every faith. Later emperors insisted on Muslim dominance and executed several Sikh gurus in the 1600s.' } }
        ]
      }
    },
    {
      x: 25, y: 14, name: { en: 'Duarte' }, role: { en: 'Merchant from Portugal' },
      look: { skin: 0, hair: '#5a3a1a', shirt: '#2a5a3a', pants: '#3a3a4a', hat: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'The Spanish Inquisition began in 1478. Now the Church answers the Protestants with a [[catholic reformation|Catholic Reformation]]: Inquisitions in Portugal (1536) and Rome (1542) police Catholic behavior.' },
        { en: 'In 1540 the Spanish priest Ignatius of Loyola founded the [[jesuits|Jesuits]]. They vow obedience to the pope and carry Catholicism as missionaries from South America to China and Japan.' },
        { en: 'The Council of Trent (1545–1563) decided what counts as heresy. Since the 1560s, debate has turned to war, like the French Wars of Religion (1562–1598).' },
        { en: 'Both Catholic and Protestant leaders police worship. It is the deadliest era of witch-hunts: tens of thousands, mostly women, tortured and killed. Yet many live beside neighbors of other faiths.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Compare the Council of Trent with the Ottoman response to the Safavids. What did both do?' },
        choices: [
          { ok: true, t: { en: 'Defined heresy to defend one faith' }, why: { en: 'Yes. Trent decided what counted as heresy, and Ottoman Sunni scholars named the Shi\'a heretics. Both states then punished those outside the lines.' } },
          { t: { en: 'Tolerated all faiths to keep order' }, why: { en: 'No. That was the early Mughal policy of sulh-i kull. Trent and the Ottoman scholars drew hard lines instead.' } },
          { t: { en: 'Ended the sale of indulgences' }, why: { en: 'No. Indulgences were Luther\'s target in Christian Europe. They had nothing to do with the Ottomans and the Safavids.' } }
        ]
      }
    },
    {
      doc: true, x: 4, y: 5, icon: '📖',
      name: { en: 'Changing World, Changing Beliefs' }, role: { en: 'Reading' },
      src: { en: 'Adapted from "Transformations in Eurasian Belief Systems, 1450–1750" by Amy Elizabeth Robinson, World History Project (Khan Academy)' },
      lines: [
        { en: 'Between 1450 and 1750 there was an explosion of religious change. Cities grew, and markets reached into the countryside. The Little Ice Age (about 1500–1800) made the world colder; people were hungry and prices rose. Absolutist rulers used gunpowder to defend land and taxes to fund court life. Three belief systems fractured or emerged: divisions within Islam deepened, Europe had its Reformations, and Sikhism arose in northern India.' },
        { en: 'By 1500 the Sunni Ottomans were a great power, but only one of several Muslim dynasties. Ottoman leaders did not think their empire needed to be a caliphate. Then in 1501 Ismail founded the Shi\'a Safavid Empire on their eastern edge. Threatened by Spain and Portugal to the west and the Safavids to the east, Selim I defined all Shi\'a as heretics. In 1517 he proclaimed himself caliph.' },
        { en: 'Both the Sunni Ottomans and the Shi\'a Safavids claimed to be protectors of Islam. In the 1600s and 1700s these "gunpowder empires" relied less on warlike expansion and more on costly symbols: Suleiman rebuilt Jerusalem, and Shah Abbas I founded madrasas. Both lost territory and economic power by the mid-1700s. Yet competing Sunni and Shi\'a claims to be the only rightful leaders of Islam continue today.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'How did the Ottoman–Safavid rivalry change in the 1600s and 1700s?' },
        choices: [
          { ok: true, t: { en: 'Less war and more costly symbols' }, why: { en: 'Yes. Both empires relied less on warlike expansion and more on projects like Suleiman\'s rebuilding of Jerusalem and Shah Abbas\'s madrasas.' } },
          { t: { en: 'It ended as the Safavids became Sunni' }, why: { en: 'No. The Safavids stayed Shi\'a, and competing Sunni and Shi\'a claims to lead Islam continue today.' } },
          { t: { en: 'Both grew richer and gained new lands' }, why: { en: 'No. Both empires lost territory and economic power by the mid-1700s.' } }
        ]
      }
    },
    {
      doc: true, x: 22, y: 14, icon: '📜',
      name: { en: 'Voices of a Shaken Europe' }, role: { en: 'Primary source' },
      src: { en: 'Martin Luther (1530); German villagers during the Peasant War (1524); Michel de Montaigne, French Catholic writer; quoted in "Transformations in Eurasian Belief Systems, 1450–1750," World History Project' },
      lines: [
        { en: 'Martin Luther, founder of Protestantism, 1530: "Everything has come to pass and is fulfilled: ... the world is crackling in all places, as if it is going break apart and crumble."' },
        { en: 'German villagers during the Peasant War of 1524: "No one but God, our creator ... shall have bondsmen [serfs or slaves]."' },
        { en: 'Michel de Montaigne, a French Catholic writer who had Protestant patrons and friends: "So many grievous crimes religion has inspired!"' },
        { en: 'Context: all three spoke in Europe in the 1500s, as cold, hunger and rising prices stressed people and some felt the "end-times" were near. Luther had begun the Protestant Reformation. The villagers were peasants who hoped Protestant ideas could bring social and economic change. Montaigne spoke up as debates over faith became wars, like the French Wars of Religion (1562–1598).' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Sourcing: which best explains the point of view of the villagers in 1524?' },
        choices: [
          { ok: true, t: { en: 'As peasants, they hoped to end serfdom' }, why: { en: 'Yes. Many peasants, artisans and craftspeople believed Protestantism offered a path toward social and economic change, such as freedom from bondage.' } },
          { t: { en: 'As princes, they wanted to escape Church power' }, why: { en: 'No. Many monarchs and princes did see Protestantism that way, but these were villagers, and bondage was their concern.' } },
          { t: { en: 'As Catholics, they defended the Church\'s rule' }, why: { en: 'No. They used Protestant ideas to challenge the old order, not to defend it.' } }
        ]
      }
    }
  ],
  houses: [
    { at: [6, 3], name: { en: 'Teacher Hasan' }, look: { skin: 2, hair: '#d8d8d8', shirt: '#3a3a6a', robe: true, hat: '#f2f2f2', style: 'short' },
      lines: [{ en: 'Welcome to the madrasa. Shah Abbas founds religious schools like this in Iran.' }, { en: 'Here students learn the Twelver Shi\'a view of who may rightly lead.' }] },
    { at: [20, 2], name: { en: 'Rug seller Leila' }, look: { skin: 3, hair: '#1b1410', shirt: '#a83a3a', robe: true, style: 'bun' },
      lines: [{ en: 'Merchants from many lands meet in this bazaar.' }, { en: 'Cities are growing, and market networks reach deeper into the countryside every year.' }] },
    { at: [2, 10], name: { en: 'Grandmother Shirin' }, look: { skin: 1, hair: '#8a8a8a', shirt: '#6a4a8a', robe: true, style: 'bun' },
      lines: [{ en: 'Bread costs more every year, and the winters feel colder.' }, { en: 'Hard times make many people search for new ways to worship.' }] },
    { at: [10, 13], name: { en: 'Gunsmith Kamran' }, look: { skin: 3, hair: '#2b1d14', shirt: '#4a4a4a', pants: '#2a2a2a', style: 'short' },
      lines: [{ en: 'Shahs and sultans buy gunpowder weapons to defend their lands.' }, { en: 'Now rulers also spend on costly symbols of faith, like madrasas.' }] },
    { at: [20, 13], name: { en: 'Bookbinder Parisa' }, look: { skin: 2, hair: '#1b1410', shirt: '#2a8a6a', robe: true, style: 'long' },
      lines: [{ en: 'A European traveler told me printing presses spread new ideas fast in his lands.' }, { en: 'He quoted the French Catholic writer Montaigne: "So many grievous crimes religion has inspired!"' }] }
  ],
  signs: [
    { x: 11, y: 3, text: { en: 'MADRASA · A religious school. Shah Abbas I founds madrasas in Iran.' } },
    { x: 24, y: 10, text: { en: 'SAFAVID EMPIRE · Founded in 1501 by Shah Ismail, who claimed descent from Ali.' } },
    { x: 5, y: 12, text: { en: 'WESTWARD · The road toward the Ottoman Empire, the Safavids\' Sunni rival.' } }
  ],
  finds: [
    { clueAt: [12, 20], at: [14, 19], decor: 'feather', clue: { en: 'From this note, walk 2 steps east and 1 step north.' },
      text: { en: 'A reed pen! Sikh scriptures were written in everyday languages so people of all classes could read them.' } }
  ],
  scraps: [[1, 1], [30, 1], [1, 20]],
  smudges: [[22, 4], [8, 19]],
  quest: {
    stat: 'mov',
    title: { en: 'The Lost Theses' },
    giver: {
      x: 26, y: 8, name: { en: 'Hans' }, role: { en: 'Merchant from the German lands' },
      look: { skin: 1, hair: '#c9a24a', shirt: '#3a4a7a', pants: '#2a2a2a', hat: '#3a2a1a', style: 'short' },
      lines: [
        { en: 'In 1517, the year Selim I proclaimed himself caliph, a German priest, Martin Luther, attacked the Church\'s sale of [[indulgences|indulgences]] in his [[ninety-five theses|Ninety-Five Theses]]. He only wanted a debate.' },
        { en: 'That year Erasmus attacked the Church\'s wealth and power. But Luther lit the [[protestant reformation|Protestant Reformation]]. The Void\'s wind stole my printed copy! Ask the caravan guard by the west wall.' }
      ],
      wait: { en: 'The caravan guard stands by the west wall, south of the main street.' },
      thanks: { en: 'My Theses! The printing press spread the [[priesthood of all believers|priesthood of all believers]], taught by Luther and Calvin. Merchants felt newly independent; princes challenged the Church. Henry VIII of England left it.' }
    },
    contact: {
      x: 2, y: 12, name: { en: 'Bilal' }, role: { en: 'Caravan guard' },
      look: { skin: 5, hair: '#120c08', shirt: '#e8dcc0', pants: '#6a4a2a', hat: '#e8e0d0', style: 'short' },
      lines: [
        { en: 'Caravans carry more than goods. Merchants bring news and ideas from Europe and India too.' },
        { en: 'A printed page blew over the river. Walk east to the bridge, cross it south, then go 3 steps east along the bank.' }
      ]
    },
    action: {
      type: 'find', at: [24, 18],
      hint: { en: 'Cross the bridge south, then 3 steps east' },
      found: { en: 'There it is on the riverbank path: Hans\'s printed copy of the Ninety-Five Theses.' },
      item: { icon: '📜', name: { en: 'Printed Ninety-Five Theses' } }
    }
  },
  challenge: {
    at: [14, 14], type: 'sort', stat: 'reg',
    title: { en: 'Three regions, three changes' },
    intro: { en: 'The Void scrambled the chronicle of belief, 1450–1750. Sort each card: the Sunni–Shi\'a rift, Europe\'s Reformations, or the rise of Sikhism in India.' },
    bins: [
      { id: 'islam', icon: '🕌', label: { en: 'Islam: the Sunni–Shi\'a rift' }, sub: { en: 'Ottomans and Safavids' } },
      { id: 'europe', icon: '⛪', label: { en: 'Christianity: the Reformations' }, sub: { en: 'Protestant and Catholic Europe' } },
      { id: 'india', icon: '📖', label: { en: 'A new faith: Sikhism' }, sub: { en: 'the Punjab, in Mughal India' } }
    ],
    items: [
      { bin: 'islam', t: { en: 'Ismail, age fourteen, takes Tabriz and proclaims himself shah (1501).' }, why: { en: 'Ismail founded the Twelver Shi\'a Safavid Empire on the Ottomans\' eastern edge, sharpening the Sunni–Shi\'a divide.' } },
      { bin: 'islam', t: { en: 'Ottoman Sultan Selim I proclaims himself caliph (1517).' }, why: { en: 'Facing the Safavids, the Sunni Ottomans now claimed to lead the whole Muslim world.' } },
      { bin: 'islam', t: { en: 'Imperial orders outlaw marriage between Sunni and Shi\'a Muslims.' }, why: { en: 'Ottoman orders in the 1500s treated Shi\'a loyalty as a crime, widening the rift inside Islam.' } },
      { bin: 'europe', t: { en: 'Luther\'s Ninety-Five Theses challenge the sale of indulgences (1517).' }, why: { en: 'Luther\'s ideas, spread by the printing press, began the Protestant Reformation.' } },
      { bin: 'europe', t: { en: 'German villagers in the Peasant War of 1524 say only God may own bondsmen.' }, why: { en: 'Many peasants, artisans and craftspeople believed Protestantism could offer a path toward social and economic change.' } },
      { bin: 'europe', t: { en: 'Ignatius of Loyola founds the Society of Jesus, the Jesuits (1540).' }, why: { en: 'The Jesuits were part of the Catholic Reformation, the Church\'s response to the Protestants.' } },
      { bin: 'india', t: { en: 'Guru Nanak says, "There is no Hindu, there is no Muslim."' }, why: { en: 'Nanak drew on Hindu and Sufi teachers. Sikhism grew out of northern India\'s syncretism.' } },
      { bin: 'india', t: { en: 'Sikh scriptures are written in everyday, vernacular languages.' }, why: { en: 'Sikhs rejected caste divisions, so their scriptures were written for people of all classes and backgrounds.' } },
      { bin: 'india', t: { en: 'Guru Gobind Singh founds the Khalsa (1699).' }, why: { en: 'Later Mughal emperors insisted on Muslim dominance and executed several Sikh gurus in the 1600s. Sikhism grew more militant: gurus kept armed guards, the [[khalsa|Khalsa]] set Sikhs apart, and by the early 1700s Punjabi Sikhs rebelled.' } }
    ],
    success: { en: 'Every card is home! Two old faiths split from within, Islam and Christianity, while a new faith, Sikhism, grew out of blending traditions.' }
  },
  boss: {
    at: [29, 19], stat: 'hei', need: 3,
    name: { en: 'The Void' },
    appear: { en: 'The Void has opened in the gardens across the river. The prayers go quiet.' },
    taunt: { en: 'Faiths split. Wars follow. Let the dark hide how and why belief changed.' },
    win: { en: 'The Void closes over the river. The page on belief systems floats down into your hands.' },
    questions: [
      {
        stim: { text: { en: '"Everything has come to pass and is fulfilled: ... the world is crackling in all places, as if it is going break apart and crumble."' }, src: { en: 'Martin Luther, 1530; quoted in "Transformations in Eurasian Belief Systems, 1450–1750," World History Project' } },
        q: { en: 'Which of the following best explains the historical context of the excerpt?' },
        choices: [{ en: 'Colder climate, hunger, rising prices, new states' }, { en: 'The Black Death killing much of Europe\'s people' }, { en: 'The Ottoman cannon conquest of Constantinople' }, { en: 'The close of the Thirty Years War in eastern Europe' }],
        answer: 0,
        why: { en: 'In the 1500s the Little Ice Age, hunger, rising prices and new absolutist states made many feel the world was shifting. The Black Death (1331–1352) and the fall of Constantinople (1453) came earlier; the Thirty Years War ended in 1648.' }
      },
      {
        stim: { text: { en: 'Ottoman leaders and scholars did not think it necessary for their empire to be a caliphate. ... In 1517, Selim I proclaimed himself caliph.' }, src: { en: 'Adapted from "Transformations in Eurasian Belief Systems, 1450–1750," World History Project' } },
        q: { en: 'Which of the following best explains the change described in the passage?' },
        choices: [{ en: 'A Shi\'a rival challenged Ottoman claims to lead Islam' }, { en: 'Protestant princes attacked the Ottoman frontier in Europe' }, { en: 'Mughal toleration drew many Ottoman Muslims to India' }, { en: 'Jesuit missionaries began converting Ottoman subjects' }],
        answer: 0,
        why: { en: 'In 1501 Ismail founded the Twelver Shi\'a Safavid Empire on the Ottomans\' eastern edge, a crisis for Selim I. Both empires then claimed to be the protector of Islam.' }
      },
      {
        stim: { title: { en: 'Events in Catholic Europe' }, rows: [[{ en: 'Year' }, { en: 'Event' }], [{ en: '1536' }, { en: 'Portuguese Inquisition set up' }], [{ en: '1540' }, { en: 'Ignatius of Loyola founds the Jesuits' }], [{ en: '1542' }, { en: 'Roman Inquisition set up' }], [{ en: '1545–1563' }, { en: 'Council of Trent meets' }]], src: { en: 'From "Transformations in Eurasian Belief Systems, 1450–1750," World History Project' } },
        q: { en: 'The developments in the table most directly reflect...' },
        choices: [{ en: 'a Catholic response to the spread of Protestantism' }, { en: 'princes using Protestant ideas to escape Church power' }, { en: 'peasants demanding, as in 1524, an end to serfdom' }, { en: 'Erasmus\'s critique of the Church\'s wealth and power' }],
        answer: 0,
        why: { en: 'Inquisitions, the Jesuits and the Council of Trent made up the Catholic Reformation, the Church\'s answer to the Protestants. Princes, peasants and Erasmus were challengers of the Church, not its defenders.' }
      },
      {
        stim: { text: { en: '"No one but God, our creator ... shall have bondsmen [serfs or slaves]."' }, src: { en: 'German villagers during the Peasant War, 1524; quoted in "Transformations in Eurasian Belief Systems, 1450–1750," World History Project' } },
        q: { en: 'The villagers\' statement most directly reflects which development?' },
        choices: [{ en: 'Commoners saw in Protestantism a path to change' }, { en: 'Merchant elites gained a new sense of independence' }, { en: 'Monarchs used Protestantism to evade Church power' }, { en: 'Inquisitions policed Catholic behavior across Europe' }],
        answer: 0,
        why: { en: 'Many peasants, artisans and craftspeople believed Protestantism could offer a path toward social and economic change, such as an end to bondage. Merchants and monarchs embraced it for other reasons.' }
      },
      {
        stim: { text: { en: '"So many grievous crimes religion has inspired!"' }, src: { en: 'Michel de Montaigne, French Catholic writer with Protestant patrons and friends; quoted in "Transformations in Eurasian Belief Systems, 1450–1750," World History Project' } },
        q: { en: 'Montaigne\'s statement best supports which claim about Europe in the age of the Reformations?' },
        choices: [{ en: 'Some people spoke out against violence over faith' }, { en: 'Catholic writers led the drive for the witch-hunts' }, { en: 'The printing press ended the wars of religion' }, { en: 'People of different faiths no longer lived together' }],
        answer: 0,
        why: { en: 'Montaigne, a Catholic with Protestant friends, condemned crimes done in religion\'s name. Despite war and persecution, many Europeans still lived and worked beside people of other faiths.' }
      },
      {
        stim: { text: { en: '"There is no Hindu, there is no Muslim."' }, src: { en: 'Guru Nanak, after his mystical experience; quoted in "Transformations in Eurasian Belief Systems, 1450–1750," World History Project' } },
        q: { en: 'Compared with the Sunni–Shi\'a rift, the rise of Sikhism is best described as...' },
        choices: [{ en: 'a new faith born of syncretism in the Punjab' }, { en: 'a split within one old faith over who should lead' }, { en: 'a Sufi reform movement that stayed inside Islam' }, { en: 'a faith spread mainly by an empire\'s conquests' }],
        answer: 0,
        why: { en: 'The Sunni–Shi\'a rift was a division within Islam over rightful leadership. Sikhism was a new religion that grew out of the blending of Hindu, Muslim and popular traditions, and spread along merchant networks.' }
      },
      {
        stim: { title: { en: 'Sikhs and the Mughal Empire' }, rows: [[{ en: 'When' }, { en: 'What happened' }], [{ en: 'Early Mughal rule' }, { en: 'Sulh-i kull: all faiths tolerated' }], [{ en: '1600s' }, { en: 'Several Sikh gurus executed; gurus keep armed guards' }], [{ en: '1699' }, { en: 'Guru Gobind Singh founds the Khalsa' }], [{ en: 'Early 1700s' }, { en: 'Punjabi Sikhs in open rebellion' }]], src: { en: 'From "Transformations in Eurasian Belief Systems, 1450–1750," World History Project' } },
        q: { en: 'Which of the following best explains the changes shown in the table?' },
        choices: [{ en: 'Later Mughal rulers insisted on Muslim dominance' }, { en: 'Ottoman scholars declared all Shi\'a to be heretics' }, { en: 'Sikh gurus brought back caste ranks for followers' }, { en: 'The Timurid invasion brought Muslim kings to India' }],
        answer: 0,
        why: { en: 'Early Mughal rulers tolerated every faith, but later emperors insisted on Muslim dominance and executed several gurus. In response Sikhism grew more militant, from armed guards to the Khalsa to open rebellion.' }
      },
      {
        q: { en: 'Which of the following was a continuity in Ottoman and Safavid rule from the 1500s to the mid-1700s?' },
        choices: [{ en: 'Each claimed to be the true protector of Islam' }, { en: 'Each kept growing mainly through warlike expansion' }, { en: 'Each steadily gained territory and economic power' }, { en: 'Each accepted the other as a rightful Muslim ruler' }],
        answer: 0,
        why: { en: 'Both claimed throughout to protect Islam. But in the 1600s and 1700s they relied less on war and more on costly symbols, and both lost territory and economic power by the mid-1700s.' }
      }
    ]
  },
  learned: [
    { en: 'The Shi\'a [[safavid|Safavids]] and the Sunni Ottomans each claimed to protect Islam; their rivalry hardened the Sunni–Shi\'a divide.' },
    { en: 'Luther\'s [[ninety-five theses|Ninety-Five Theses]] began the [[protestant reformation|Protestant Reformation]]; the [[catholic reformation|Catholic Reformation]] answered with the Jesuits, Inquisitions and the Council of Trent.' },
    { en: '[[sikhism|Sikhism]] grew out of [[syncretism|syncretism]] in the Punjab, rejected caste, and grew more militant as Mughal tolerance faded.' }
  ],
  reflect: {
    q: { en: 'AP practice: Explain one way political rivalry between states shaped a change in belief systems between 1450 and 1750.' },
    starter: { en: 'One way political rivalry shaped belief systems was' }
  }
};
