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
    { en: 'The Grump blurred the page on belief systems! From 1450 to 1750, a colder climate, hunger, rising prices and new states stressed people. Many sought new ways to worship.' },
    { en: 'Talk to the 4 people here, help a merchant from the German lands, then wake the time stone.' }
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
        { en: 'In 1501 a young warrior named Ismail took the city of Tabriz and proclaimed himself [[shah|shah]]. He founded our [[safavid|Safavid]] Empire at age fourteen.' },
        { en: 'Ismail claimed descent from Ali, the first Shi\'a successor to Muhammad. We are [[twelver shia|Twelver Shi\'a]]: only twelve rightful successors, and the twelfth is alive but hidden.' },
        { en: 'Shah Abbas builds [[madrasa|madrasas]] like mine to display his piety. The Ottoman sultan Suleiman rebuilt Jerusalem. Both empires claim to be the true protector of Islam.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'What did Twelver Shi\'a teaching say about who could rightly be [[caliph|caliph]], ruler of the Muslim world?' },
        choices: [
          { ok: true, t: { en: 'Only a divinely-ordained imam' }, why: { en: 'Yes. Like other Shi\'a groups, Twelvers held that only divinely-ordained imams could rule, not leaders chosen by scholars or politics.' } },
          { t: { en: 'Any leader chosen by a council of scholars' }, why: { en: 'No. Twelver Shi\'a teaching excluded leaders chosen through a scholarly or political process.' } },
          { t: { en: 'Whichever sultan won the most battles' }, why: { en: 'No. Winning battles did not make a rightful leader. Only a divinely-ordained imam could serve as caliph.' } }
        ]
      }
    },
    {
      x: 5, y: 14, name: { en: 'Old Rostam' }, role: { en: 'Veteran soldier' },
      look: { skin: 3, hair: '#9a9a9a', shirt: '#7a3a2a', pants: '#3a2a20', hat: '#e8e0d0', style: 'short' },
      lines: [
        { en: 'When Shah Ismail rose on the Ottomans\' eastern edge, Sultan Selim I faced a crisis: Spain and Portugal to his west, the Safavids to his east.' },
        { en: 'At the Battle of Chaldiran, Selim\'s army defeated Ismail. The Ottomans seized eastern Anatolia and part of Iraq.' },
        { en: 'Shi\'a Muslims lived inside Ottoman lands too. Selim\'s [[sunni|Sunni]] scholars named all Safavids and Shi\'a [[heretic|heretics]]. Orders allowed their arrest and killing, and Sunni–Shi\'a marriage was outlawed.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why did Selim I and Ottoman scholars declare all Shi\'a Muslims heretics?' },
        choices: [
          { ok: true, t: { en: 'Safavid power threatened the Ottomans' }, why: { en: 'Yes. A strong Shi\'a empire on the eastern border, with Shi\'a subjects inside, looked like a danger to the Sunni Ottoman state.' } },
          { t: { en: 'The Safavids refused to trade with them' }, why: { en: 'No. The crisis was about power and belief: a militant Shi\'a empire rising on the Ottoman border.' } },
          { t: { en: 'Shi\'a Muslims had left Islam for Christianity' }, why: { en: 'No. Shi\'a and Sunni are both branches of Islam. "Heretic" was the label Ottoman scholars used for their rivals.' } }
        ]
      }
    },
    {
      x: 18, y: 9, name: { en: 'Harjit' }, role: { en: 'Cloth merchant from the Punjab' },
      look: { skin: 4, hair: '#120c08', shirt: '#e0a020', pants: '#2a3a5a', hat: '#2a4a8a', style: 'short' },
      lines: [
        { en: 'In my Punjab, in northern India, Hindus, Muslims and Sufis live side by side. Rulers ask blessings from leaders of either faith. We call this blending [[syncretism|syncretism]].' },
        { en: 'Guru Nanak came from a Hindu Khatri merchant family. He sat with Hindu and Sufi teachers. After a mystical experience he said, "There is no Hindu, there is no Muslim."' },
        { en: 'We [[sikhism|Sikhs]] reject [[caste|caste]] divisions. Our scriptures are in everyday languages, so anyone can read them. Our faith travels along merchant networks, like me.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'What was new about Sikhism compared with the caste order around it?' },
        choices: [
          { ok: true, t: { en: 'It welcomed people of every caste' }, why: { en: 'Yes. Converts came from all castes, even "outcaste" groups, and from Islam. The divine was open to farmers and traders, women and men.' } },
          { t: { en: 'It kept priests above all other castes' }, why: { en: 'No. Guru Nanak taught that the divine was open to everyone, not only to priests or mystics.' } },
          { t: { en: 'It was forced on India by the Mughals' }, why: { en: 'No. Early Mughal rulers promoted [[sulh-i kull|sulh-i kull]], "peace with all," and tolerated every faith. Sikhism grew from India\'s own blending.' } }
        ]
      }
    },
    {
      x: 25, y: 14, name: { en: 'Duarte' }, role: { en: 'Merchant from Portugal' },
      look: { skin: 0, hair: '#5a3a1a', shirt: '#2a5a3a', pants: '#3a3a4a', hat: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'At home the Catholic Church answered the Protestants with its own [[catholic reformation|Catholic Reformation]]. Inquisitions in Portugal (1536) and Rome (1542) police how Catholics behave.' },
        { en: 'In 1540 Ignatius of Loyola founded the [[jesuits|Jesuits]]. They vow obedience to the pope and carry Catholicism as missionaries from South America to China and Japan.' },
        { en: 'The Council of Trent (1545–1563) decided what counts as heresy. Faith now sparks wars in Europe, like the French Wars of Religion that ended in 1598.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Compare the Catholic Reformation with the Ottoman response to the Safavids. What did both do?' },
        choices: [
          { ok: true, t: { en: 'Defined heresy to defend one faith' }, why: { en: 'Yes. The Council of Trent and Ottoman Sunni scholars both drew lines around true belief, and both states punished those outside them.' } },
          { t: { en: 'Welcomed every belief in equal measure' }, why: { en: 'No. Inquisitions policed Catholic behavior, and Ottoman orders punished Shi\'a loyalty. Neither welcomed every belief.' } },
          { t: { en: 'Ended all debate about religion for good' }, why: { en: 'No. The debates went on: Europe had wars of religion, and Sunni and Shi\'a claims still compete today.' } }
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
        { en: 'In 1517 a German priest, Martin Luther, wrote the [[ninety-five theses|Ninety-Five Theses]] against the Church\'s sale of [[indulgences|indulgences]]. He only wanted a debate.' },
        { en: 'Instead he started the [[protestant reformation|Protestant Reformation]]. The Grump\'s wind stole my printed copy! Ask the caravan guard by the west wall.' }
      ],
      wait: { en: 'The caravan guard stands by the west wall, south of the main street.' },
      thanks: { en: 'My Theses! Printing presses spread Luther\'s ideas, like the [[priesthood of all believers|priesthood of all believers]]. Princes used them to challenge the Church; Henry VIII of England left it.' }
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
    intro: { en: 'The Grump scrambled the chronicle of belief, 1450–1750. Sort each card: the Sunni–Shi\'a rift, Europe\'s Reformations, or the rise of Sikhism in India.' },
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
      { bin: 'india', t: { en: 'Guru Gobind Singh founds the Khalsa (1699).' }, why: { en: 'Later Mughal emperors insisted on Muslim dominance and executed several Sikh gurus. Sikhism grew more militant, and the [[khalsa|Khalsa]] set Sikhs apart.' } }
    ],
    success: { en: 'Every card is home! Two old faiths split from within, Islam and Christianity, while a new faith, Sikhism, grew out of blending traditions.' }
  },
  boss: {
    at: [29, 19], stat: 'hei', need: 3,
    name: { en: 'The Fog Grump' },
    appear: { en: 'The Fog Grump is hiding in the gardens across the river.' },
    taunt: { en: 'Splits, reforms, new faiths. Let the fog hide how and why belief changed.' },
    win: { en: 'The fog lifts from the river. The page on belief systems floats down into your hands.' },
    questions: [
      {
        stim: { text: { en: '"Everything has come to pass and is fulfilled: ... the world is crackling in all places, as if it is going break apart and crumble."' }, src: { en: 'Martin Luther, 1530' } },
        q: { en: 'Which context best explains the mood of the excerpt?' },
        choices: [{ en: 'A colder climate, hunger, rising prices and new states' }, { en: 'A long era of peace and steadily falling prices in Europe' }, { en: 'The sudden end of printing and the decline of every city' }, { en: 'The Mongol conquest of the German lands and of Rome' }],
        answer: 0,
        why: { en: 'The Little Ice Age, hunger, rising prices and new absolutist states made many people feel the world was shifting, and they reached for new forms of worship.' }
      },
      {
        stim: { text: { en: 'Ismail belonged to the Twelver Shi\'a community. They believe there are only twelve legitimate successors to Muhammad, and that the twelfth is alive but in hiding.' }, src: { en: 'Adapted from "Transformations in Eurasian Belief Systems, 1450–1750," World History Project' } },
        q: { en: 'Based on this belief, Twelver Shi\'a held that the rightful ruler of the Muslim world must be...' },
        choices: [{ en: 'a divinely-ordained imam' }, { en: 'a sultan chosen by a council of scholars' }, { en: 'the ruler with the largest gunpowder army' }, { en: 'elected by all believers each year' }],
        answer: 0,
        why: { en: 'Like other Shi\'a groups, Twelvers held that only divinely-ordained imams could serve as caliph, not leaders chosen by scholars or politics.' }
      },
      {
        stim: { text: { en: 'Selim and Ottoman Sunni scholars defined all Safavids and Shi\'a Muslims, inside or outside of Ottoman territory, as heretics.' }, src: { en: 'Adapted from "Transformations in Eurasian Belief Systems, 1450–1750," World History Project' } },
        q: { en: 'Which best explains the Ottoman policy described above?' },
        choices: [{ en: 'The Safavids threatened the Ottomans\' eastern border' }, { en: 'The Safavids had become Protestant Christians' }, { en: 'The Ottomans wanted to give up gunpowder weapons' }, { en: 'Shi\'a scholars had refused to build any madrasas' }],
        answer: 0,
        why: { en: 'A powerful Shi\'a empire rose on the Ottomans\' eastern edge, and Shi\'a lived inside Ottoman lands. Selim treated their loyalty as a threat.' }
      },
      {
        stim: { text: { en: '"No one but God, our creator ... shall have bondsmen [serfs or slaves]."' }, src: { en: 'German villagers during the Peasant War, 1524' } },
        q: { en: 'The excerpt best shows that, for many peasants, Protestant ideas...' },
        choices: [{ en: 'offered a path toward social change' }, { en: 'were a way for kings to end their marriages' }, { en: 'meant obeying the pope more strictly than ever' }, { en: 'were spread mainly by Jesuit missionaries' }],
        answer: 0,
        why: { en: 'Many peasants, artisans and craftspeople believed Protestantism could offer a path toward social and economic change, such as an end to serfdom.' }
      },
      {
        stim: { title: { en: 'Events in Catholic Europe' }, rows: [[{ en: 'Year' }, { en: 'Event' }], [{ en: '1536' }, { en: 'Portuguese Inquisition set up' }], [{ en: '1540' }, { en: 'Ignatius of Loyola founds the Jesuits' }], [{ en: '1542' }, { en: 'Roman Inquisition set up' }], [{ en: '1545–1563' }, { en: 'Council of Trent meets' }]], src: { en: 'From "Transformations in Eurasian Belief Systems, 1450–1750," World History Project' } },
        q: { en: 'The developments in the table are best understood as part of...' },
        choices: [{ en: 'the Catholic Reformation' }, { en: 'the Protestant Reformation of Martin Luther' }, { en: 'the Safavid spread of Twelver Shi\'a Islam' }, { en: 'the Mughal policy of sulh-i kull' }],
        answer: 0,
        why: { en: 'Inquisitions, the Jesuits and the Council of Trent were the Catholic Church\'s response to the Protestant challenge.' }
      },
      {
        q: { en: 'Compared with the Sunni–Shi\'a rift, how did Sikhism come about?' },
        choices: [{ en: 'As a new faith born from blending traditions' }, { en: 'As a split inside one long-established faith' }, { en: 'As a faith carried to India by the Jesuits' }, { en: 'As the official state religion of the Ottomans' }],
        answer: 0,
        why: { en: 'The Sunni–Shi\'a rift was a division within Islam. Sikhism was a new religion that grew out of Hindu, Muslim and popular traditions in the Punjab.' }
      },
      {
        q: { en: 'Which best explains why Sikhism grew more militant in the 1600s?' },
        choices: [{ en: 'Later Mughal rulers became less tolerant' }, { en: 'Guru Nanak called for war on the Safavids' }, { en: 'Sikhs took up strict caste divisions' }, { en: 'The Council of Trent condemned the gurus' }],
        answer: 0,
        why: { en: 'Early Mughal rulers promoted "peace with all," but later emperors insisted on Muslim dominance and executed several Sikh gurus. The Khalsa followed in 1699.' }
      },
      {
        q: { en: 'Shah Abbas I founded madrasas, and Suleiman the Magnificent rebuilt Jerusalem. Both projects best show that...' },
        choices: [{ en: 'each empire claimed to protect Islam' }, { en: 'both rulers had joined the Protestant cause' }, { en: 'the two empires had united against Spain' }, { en: 'each ruler wanted to end religious learning' }],
        answer: 0,
        why: { en: 'Both the Sunni Ottomans and the Shi\'a Safavids claimed to be protectors of Islam, and showed it with costly religious projects.' }
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
