/* HISTORYWALKER · Episode 1.6 · Developments in Europe (AP World Topic 1.6, c. 1200–1450)
   A manor village near Paris, Kingdom of France, in 1300: the lord's manor house and barn (north-west), a monastery and
   the village church (north-east), peasant cottages, the lord's mill on the stream and his wheat fields (south-west),
   and a small market on the road to Paris (south-east).
   Content source: Khan Academy, AP World History (World History Project), Unit 1 Lesson "Developments in Europe | 1.6":
   "Europe 1200–1450" (Jack Bouchard), "Christendom" (Jesse Lynch), and the unit overview "Unit 1 Introduction: The
   Global Tapestry, 1200 to 1450". World History Project content is CC BY-NC 4.0. Facts here come from those readings.
   English only, AP level. */
window.EPISODE = {
  id: '1.6',
  realm: 1,
  sol: 'AP 1.6',
  style: 'europe',
  weather: { sky: 'leaves', time: 'day' },
  title: { en: 'Developments in Europe' },
  place: { en: 'A manor near Paris, Kingdom of France, 1300' },
  intro: [
    { en: 'The Void blurred the page on Europe. This manor near Paris is forgetting who owns the land, who rules and what it believes!' },
    { en: 'Talk to the 4 people here and read the 2 sources on the lecterns. Help a baker from Paris, then wake the time stone.' }
  ],
  scenes: {
    at: [2.35, 48.85],
    year: 1300,
    start: [
      { en: 'Around 1300, Europe was a world of villages, each ruled by a local lord from his manor.' },
      { en: 'Perhaps 80 to 90 percent of Europeans were farmers, and most did not own their land.' },
      { en: 'Western Europe was Latin Christendom: many states, divided in politics but tied by one Christian faith.' }
    ],
    guess: {
      q: { en: 'Around 1300, who do you think held most of the real power in France?' },
      choices: [{ t: { en: '🏰 Local lords' }, ok: true }, { t: { en: '👑 The king alone' } }],
      why: { en: 'Power was devolved to local lords. The King of France directly controlled only a few provinces near Paris.' }
    },
    page: { en: 'In many places, Europe\'s population around 1300 was not reached again until the 1700s.' },
    next: {
      q: { en: 'Next: comparing regions, 1200–1450. Was Europe as politically unified as Song China?' },
      choices: [{ t: { en: 'No, far more divided' }, ok: true }, { t: { en: 'Yes, just as unified' } }],
      why: { en: 'Europe was fragmented and decentralized, while one government ruled the vastness of China. You compare regions next.' }
    }
  },
  start: [16, 8],
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT',
    'TTT.DDDDDD.......T.......DDDDD.T',
    'TT..DDDDDD....T....RRR...DDDDD.T',
    'T...DDDdDD.x.......hdh...DDdDD.T',
    'T...lllllll........:.....::l:..T',
    'TT.....:...RRR.....:.......:...T',
    'TTT....:...hdh.....:.......:.x.T',
    'TT.T...:....:......:.......:...T',
    'TTT....::::::::::::::::::::::::T',
    'TT.....:...........:...........T',
    'T......:...........:.....,.....T',
    'T......:......~~...:...........T',
    'T.HHH..:..RRR.~~...:...........T',
    'T.NdN..:..hdh.~~.x.:..mm.mm....T',
    'Tx.....:......~~...:...........T',
    'T::::::::::::::bb:::::::::::::.T',
    'T.wwwww:wwwww.~~...:..mm.mm....T',
    'T.wwwww:wwwww.~~...:...........T',
    'T.wwwww:wwwww.~~...:.....HHH...T',
    'T.wwwww:wwwww.~~...:.....NdN...T',
    'T..,....,.....~~...:..........,T',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT'
  ],
  words: {
    'manor': { en: 'a lord\'s large home or estate, from which he controlled a village and stored and showed off his wealth' },
    'peasant': { en: 'a farm worker who faced legal limits and did not control the land he or she worked' },
    'serf': { en: 'a peasant bound to the land and the lord by law, often deeply poor' },
    'manorial system': { en: 'the way rural life worked: peasants farmed a lord\'s land and owed him labor, harvest and obedience' },
    'feudalism': { en: 'a system of grants and promises: kings gave lords land and power in return for military support and loyalty' },
    'devolved': { en: 'handed down: more power held by local authorities than by central ones like kings' },
    'latin christendom': { en: 'the Christian states of western Europe, led in belief by the pope in Rome (Roman Catholic)' },
    'byzantium': { en: 'the eastern Christian empire centered on Constantinople, which spoke Greek and called itself Roman' },
    'great schism': { en: 'the official split of 1054 between the Roman Catholic and Eastern Orthodox churches' },
    'relic': { en: 'a remain or object connected to a saint\'s life, kept at a shrine' },
    'crusades': { en: 'holy wars of the 1000s–1200s in which Latin Christians tried to take Jerusalem from Muslims' },
    'medieval climate anomaly': { en: 'warm, stable weather in the northern hemisphere from about the 800s to the early 1300s' },
    'little ice age': { en: 'a long period of cold, wet, unstable weather that gripped Europe by the 1400s' },
    'black death': { en: 'the bubonic plague that struck the Mediterranean and Europe from the late 1340s' }
  },
  npcs: [
    {
      x: 10, y: 14, name: { en: 'Jeanne' }, role: { en: 'Peasant farmer' },
      look: { skin: 2, hair: '#5a3a1e', shirt: '#8a6a3a', pants: '#4a3a2a', style: 'bun' },
      lines: [
        { en: 'My family works fields owned by the lord of the [[manor|manor]]. Perhaps 80 to 90 percent of Europeans are farmers like us, and most do not own their land.' },
        { en: 'For the right to farm, we give the lord part of our harvest, grind our grain at his mill, and never leave the village without permission. We are [[peasant|peasants]].' },
        { en: 'Some households are bound to lord and land even more tightly, by law and in body. They are [[serf|serfs]], and many are deeply poor. This is the [[manorial system|manorial system]].' },
        { en: 'Even in warm years, crops fail and famine comes. Few families grow enough to feed themselves. The only sure way to make more food is to farm more land.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Which of the following best explains why land was the most valuable resource in medieval Europe?' },
        choices: [
          { ok: true, t: { en: 'More land was the only sure way to more food' }, why: { en: 'Yes. Farming was not efficient, so working more land was the only reliable way to grow more. As people multiplied, land grew scarce.' } },
          { t: { en: 'Lords sold their land to the king for silver' }, why: { en: 'No. Lords did not sell land to kings. Kings granted land to lords in return for loyalty and military support.' } },
          { t: { en: 'Grain sold abroad paid for spices from Asia' }, why: { en: 'No. Few families grew enough to feed themselves, let alone sell to the market. Land mattered because it meant food.' } }
        ]
      }
    },
    {
      x: 5, y: 6, name: { en: 'Sir Raoul' }, role: { en: 'Knight' },
      look: { skin: 1, hair: '#2b1d14', shirt: '#6a7a8a', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'The king granted a great lord this province: its taxes, land and laws. In return, the lord promised military support and good government. This is [[feudalism|feudalism]].' },
        { en: 'That lord granted this village to me, and I swore to support him. The next village went to a monastery that prays for his soul. Each grant differs.' },
        { en: 'So power is [[devolved|devolved]]. The King of France directly controls only a few provinces near Paris. In Germany, one state broke into hundreds of small units under a weak emperor.' },
        { en: 'Now great lords demand a share of power. With church leaders, they sit in bodies like the Parliament in England, the Estates in France and the Cortes in Spain.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Why did local lords, not the king, hold most power in France around 1300?' },
        choices: [
          { ok: true, t: { en: 'Kings traded land for military support' }, why: { en: 'Yes. Each grant gave a lord the taxes, land and laws of a province in return for loyalty and soldiers.' } },
          { t: { en: 'The pope appointed every French lord' }, why: { en: 'No. The pope led the church\'s beliefs. Lords got their power through feudal grants of land.' } },
          { t: { en: 'The Estates had stripped the king\'s power' }, why: { en: 'No. Bodies like the Estates sought to share power with the monarch, not remove it. Feudal grants made lords strong.' } }
        ]
      }
    },
    {
      x: 23, y: 5, name: { en: 'Brother Anselm' }, role: { en: 'Monk' },
      look: { skin: 3, hair: '#1b1410', shirt: '#5a4632', robe: true, style: 'short' },
      lines: [
        { en: 'Our church is part of [[latin christendom|Latin Christendom]]. We pray in Latin, our priests do not marry, and we use unleavened bread. Doctrine is the pope\'s job, not a king\'s.' },
        { en: 'In the east, [[byzantium|Byzantium]] stayed one unified empire. They pray in Greek, their priests marry, and they use leavened bread. The emperor stands at the center of state and church.' },
        { en: 'In the 700s, the Byzantine emperor Leo III banned images of Christ and Mary, and icons were smashed. This iconoclasm controversy deepened the tension between east and west.' },
        { en: 'Then each side closed the other\'s churches, and pope and patriarch excommunicated each other. In 1054 the [[great schism|Great Schism]] split them: Roman Catholic and Eastern Orthodox.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Compared with Latin Christendom, Byzantium differed most in that...' },
        choices: [
          { ok: true, t: { en: 'its emperor led both state and church' }, why: { en: 'Right. Byzantium stayed one empire, and its emperor stood at the center of state and church. In the West, doctrine was the pope\'s job.' } },
          { t: { en: 'its pope crowned the western emperors' }, why: { en: 'No. That was the pope in Rome, in the Latin West. Byzantium had a patriarch, and the emperor stood over church and state.' } },
          { t: { en: 'it split into hundreds of small states' }, why: { en: 'No. That describes the West, especially Germany. Byzantium remained one unified empire.' } }
        ]
      }
    },
    {
      x: 21, y: 19, name: { en: 'Agnès' }, role: { en: 'Pilgrim' },
      look: { skin: 4, hair: '#1b1410', shirt: '#7a2a3a', pants: '#3a2a2a', hat: '#6a4a2a', style: 'long' },
      lines: [
        { en: 'I walked many days to pray at a saint\'s shrine. Its [[relic|relics]], remains tied to the saint\'s life, draw pilgrims who seek personal salvation.' },
        { en: 'About 40 years after the schism, Byzantium asked the Catholic Church for help against Muslims threatening Constantinople. Popes, patriarchs, emperors and kings promoted the [[crusades|Crusades]].' },
        { en: 'Thousands of ordinary people walked over 2,000 miles to reclaim Jerusalem: a military pilgrimage driven by religious enthusiasm and the promise of new land.' },
        { en: 'The Crusades united Latin Christendom and mended the rift with Byzantium for a time. But crusaders attacked Jews and Muslims, and the Fourth Crusade sacked Christian Constantinople.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Which best explains why ordinary people joined the Crusades?' },
        choices: [
          { ok: true, t: { en: 'Religious passion and hope of new land' }, why: { en: 'Yes. The Crusades were military pilgrimages, driven by religious enthusiasm and the promise of new land.' } },
          { t: { en: 'Wages paid by the Byzantine emperor' }, why: { en: 'No. Byzantium asked for help, but crusaders went out of faith and hope of land, not for pay.' } },
          { t: { en: 'Orders to defend Paris from the Muslims' }, why: { en: 'No. The goal was far away: to reclaim the Holy Land, Jerusalem, from the Muslims.' } }
        ]
      }
    },
    {
      doc: true, x: 29, y: 4, icon: '📜',
      name: { en: 'Words from Christendom' }, role: { en: 'Primary source' },
      src: { en: 'Roman name for the Mediterranean; Pope Leo III\'s title for Charlemagne (800 CE); crusaders\' name for their targets (1100s–1200s); all quoted in "Christendom" by Jesse Lynch, World History Project' },
      lines: [
        { en: 'Three phrases from the past, as the reading "Christendom" quotes them. First, the Romans called the Mediterranean "mare nostrum," meaning "our sea." Through its networks of exchange, the Roman way of life spread. Few expected the empire to split into hostile parts.' },
        { en: 'Second: on Christmas Day in the year 800 CE, Pope Leo III crowned the Carolingian ruler Charlemagne "emperor of the Romans." The crowning affirmed the pope\'s authority to crown emperors and declared a firm separation from Byzantine control.' },
        { en: 'Third: by the 1100s, peaceful pilgrimages had turned into armed crusades against "enemies of Christ." These enemies often included Jews, Muslims, and even members of the Byzantine church.' },
        { en: 'Who used these words, and why? Two Christian successors claimed Rome\'s legacy. Byzantines proudly called themselves Romans, and their emperor led state and church. In the Latin West, doctrine was the pope\'s job, so a pope naming an "emperor of the Romans" was a claim of power. Always ask: who spoke, for whom, and why?' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Point of view: what did Pope Leo III most likely mean to show by crowning Charlemagne "emperor of the Romans"?' },
        choices: [
          { ok: true, t: { en: 'Popes held the authority to crown emperors' }, why: { en: 'Yes. The crowning affirmed papal authority to crown emperors and declared a firm separation from Byzantine control.' } },
          { t: { en: 'The Byzantine emperor now ruled the West' }, why: { en: 'No. It was the opposite: the crowning declared the West\'s separation from Byzantine control.' } },
          { t: { en: 'Western kings would now set church doctrine' }, why: { en: 'No. In the Latin West, Christian rulers did not set doctrine. That was the pope\'s job, and the crowning showed his authority.' } }
        ]
      }
    },
    {
      doc: true, x: 3, y: 5, icon: '📖',
      name: { en: 'Europe 1200–1450' }, role: { en: 'Reading' },
      src: { en: 'Adapted from "Europe 1200–1450" by Jack Bouchard, World History Project (Khan Academy)' },
      lines: [
        { en: 'From the 900s to the 1300s, European communities grew. Populations rose rapidly, commerce grew in scale and complexity, and cities multiplied. Warm, stable weather, the Medieval Climate Anomaly, made farming easier and travel safer.' },
        { en: 'In the 1300s, everything began to change. After crop failures and cattle epidemics, the Black Death struck in the late 1340s. Between 1300 and 1400, the population may have fallen by a third to half. New wars broke out too, like the Hundred Years\' War in France.' },
        { en: 'Perhaps 80 to 90 percent of Europeans were farmers, yet most did not own their land. The lord of the manor owned it and claimed part of the village\'s labor and produce. Farming was not efficient: the only reliable way to make more food was to work more land. As the population grew, land became by far the most valuable resource. Control of land dominated politics for centuries.' },
        { en: 'Just as the manorial system tied peasants to the land, feudalism organized the relationship between local leaders and kings. Power was devolved, partly because communication and travel were slow, so locals could more easily gather resources and answer threats. Kings were often weak. As local lords grew stronger, they demanded a share of power in bodies like the Parliament in England, the Estates in France and the Cortes in Spain.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Which of the following best explains why political power in Europe was devolved to local authorities?' },
        choices: [
          { ok: true, t: { en: 'Slow travel let locals act faster than kings' }, why: { en: 'Yes. With slow, uncertain communication, local lords could more easily gather resources and answer security threats.' } },
          { t: { en: 'The Black Death killed most kings and nobles' }, why: { en: 'No. Power was already devolved by 1200, long before the plague of the late 1340s.' } },
          { t: { en: 'The pope forbade kings to rule provinces' }, why: { en: 'No. In the Latin West the pope set belief, not who ruled provinces. Devolved power fit a time of slow, uncertain travel.' } }
        ]
      }
    }
  ],
  houses: [
    { at: [7, 3], name: { en: 'Lady Isabeau' }, look: { skin: 0, hair: '#8a5a2a', shirt: '#4a2a6a', robe: true, style: 'bun' },
      lines: [{ en: 'This manor is where the lord stores and shows his wealth. Everyone in the village can see who rules here.' }, { en: 'From this hall the lord gives out justice to the whole village.' }] },
    { at: [20, 3], name: { en: 'Brother Gilles' }, look: { skin: 2, hair: '#6e6e6e', shirt: '#4a3a2a', robe: true, style: 'short' },
      lines: [{ en: 'The lord granted our monastery rights here. In return, we pray for his soul.' }, { en: 'We may claim one bushel of wheat from the mill, but we may not tax it. Every grant is different.' }] },
    { at: [27, 3], name: { en: 'Father Étienne' }, look: { skin: 1, hair: '#3a2a1a', shirt: '#2a2a2a', robe: true, style: 'short' },
      lines: [{ en: 'A village is its families, its fields and pastures, and its church.' }, { en: 'Across Latin Christendom, travelers speak many languages but share one faith. That bond lets people travel and trade.' }] },
    { at: [12, 6], name: { en: 'Hugues the granary keeper' }, look: { skin: 2, hair: '#5a3a1e', shirt: '#6a5a3a', pants: '#3a2a1a', style: 'short' },
      lines: [{ en: 'The lord\'s share of every harvest is stored in this barn.' }, { en: 'Even in good years, crops fail and famine comes often. Farming here is a lot of things, but not efficient.' }] },
    { at: [11, 13], name: { en: 'Robert the miller' }, look: { skin: 3, hair: '#2b1d14', shirt: '#d8d0b8', pants: '#5a4a3a', style: 'short' },
      lines: [{ en: 'Every family must grind its grain here, at the lord\'s mill. Sir Raoul has the right to tax this mill.' }, { en: 'Each grant of rights is its own deal, so every lord and monastery holds different powers.' }] },
    { at: [3, 13], name: { en: 'Guillemette' }, look: { skin: 1, hair: '#c9a24a', shirt: '#6a8a5a', pants: '#4a3a2a', style: 'long' },
      lines: [{ en: 'Our village shares some common resources: the woods, some fields and the stream.' }, { en: 'Most years we barely grow enough to feed ourselves, let alone sell at market.' }] },
    { at: [26, 19], name: { en: 'Old Pons' }, look: { skin: 2, hair: '#d8d8d8', shirt: '#7a5a3a', pants: '#3a3a2a', style: 'short' },
      lines: [{ en: 'In my grandfather\'s time, this was wild land. Families cleared it to make new farms.' }, { en: 'Now nearly every field is claimed. Land is the most valuable thing a person can hold.' }] }
  ],
  signs: [
    { x: 11, y: 3, text: { en: 'THE MANOR · Home of the lord, who controls the village\'s land, labor and justice.' } },
    { x: 29, y: 6, text: { en: 'ROAD TO PARIS · Seat of the King of France, who directly rules only a few provinces near the city.' } },
    { x: 1, y: 14, text: { en: 'THE LORD\'S FIELDS · Peasants farm them and give a share of every harvest to the lord.' } },
    { x: 17, y: 13, text: { en: 'MARKET · Grain goes up the road to the cities. Cities grow on food from the countryside.' } }
  ],
  finds: [
    { clueAt: [13, 4], at: [16, 1], decor: 'coinold', clue: { en: 'From this note, walk 3 steps east and 3 steps north. Look beside the lone tree.' },
      text: { en: 'A silver penny! Before 1300, commerce across Europe grew in scale and complexity, and cities multiplied.' } }
  ],
  scraps: [[1, 4], [30, 1], [1, 20]],
  smudges: [[12, 10], [27, 12]],
  quest: {
    stat: 'mov',
    title: { en: 'Bread for Paris' },
    giver: {
      x: 22, y: 7, name: { en: 'Odile' }, role: { en: 'Baker from Paris' },
      look: { skin: 3, hair: '#2b1d14', shirt: '#b98250', pants: '#4a3a2a', style: 'bun' },
      lines: [
        { en: 'I bake bread in Paris. Our city keeps growing, and it eats the grain of villages like this one.' },
        { en: 'The Void fogged my order with this manor! Ask Thibaut, the lord\'s steward. He keeps the manor\'s accounts.' }
      ],
      wait: { en: 'Thibaut stands west along the road, between the manor house and the lord\'s barn.' },
      thanks: { en: 'Wheat from the lord\'s fields! Cities can grow only when the countryside sends them food. Paris thanks you.' }
    },
    contact: {
      x: 9, y: 5, name: { en: 'Thibaut' }, role: { en: 'The lord\'s steward' },
      look: { skin: 1, hair: '#6e4a2a', shirt: '#3a5a4a', pants: '#2a2a3a', hat: '#3a2a1a', style: 'short' },
      lines: [
        { en: 'The lord takes a share of every harvest. Few peasants grow enough to sell, but the lord\'s share fills his barn.' },
        { en: 'He sells it at the market. Take the path south to the fields, cross the stream bridge east, and find Marthe by the stalls.' }
      ]
    },
    action: {
      type: 'trade',
      trader: {
        x: 21, y: 14, name: { en: 'Marthe' }, role: { en: 'Market trader' },
        look: { skin: 5, hair: '#1b1410', shirt: '#2a6a8a', pants: '#3a2a2a', style: 'long' },
        lines: [
          { en: 'Welcome to the market on the road to Paris. Goods from near and very far pass through here.' }
        ]
      },
      q: { en: 'Odile\'s bakers need what this manor grows. Bring it to me, and I will send it up the road.' },
      choices: [
        { ok: true, at: [13, 17], icon: '🌾', t: { en: 'A sack of the lord\'s wheat' },
          why: { en: 'Yes. The manor grows grain, and a city like Paris depends on food from its countryside.' } },
        { at: [30, 9], icon: '📦', t: { en: 'A box of spices from the east' },
          why: { en: 'These spices crossed many trading circuits from Asia. This manor did not grow them, and bakers need grain.' } },
        { at: [2, 9], icon: '🪵', t: { en: 'A bundle of firewood' },
          why: { en: 'This wood comes from the village\'s common woods, shared by its families. Odile asked for grain for bread.' } }
      ],
      item: { icon: '🌾', name: { en: 'A sack of the lord\'s wheat' } }
    }
  },
  challenge: {
    at: [28, 16], type: 'order', stat: 'loc',
    title: { en: 'From growth to crisis' },
    intro: { en: 'The Void scrambled the chronicle of Europe from the 800s to 1400. Put the causes and effects in order, from first to last.' },
    items: [
      { icon: '🌤️', t: { en: 'From the 800s: warm, stable weather, the Medieval Climate Anomaly, makes farming easier and travel safer.' } },
      { icon: '👪', t: { en: 'Populations rise fast, and villages turn uncultivated land into new farms.' } },
      { icon: '⚔️', t: { en: 'Land grows scarce. It becomes Europe\'s most valuable resource, worth fighting for.' } },
      { icon: '❄️', t: { en: '1300s: the climate turns cold and wet, toward the Little Ice Age. Crops fail and cattle epidemics strike.' } },
      { icon: '☠️', t: { en: 'Late 1340s: the Black Death, the bubonic plague, strikes the Mediterranean, then Europe.' } },
      { icon: '📉', t: { en: '1300 to 1400: Europe\'s population may fall by a third to a half.' } }
    ],
    why: { en: 'Growth came first, under warm weather, until land grew scarce. Then the climate turned, crops failed, and waves of plague cut the population.' },
    success: { en: 'The chronicle is in order! A cooling climate and the Black Death turned centuries of growth into the crisis of the 1300s.' }
  },
  boss: {
    at: [22, 2], stat: 'hei', need: 3,
    name: { en: 'The Void' },
    appear: { en: 'The Void has opened in the cold beside the monastery. Frost creeps toward it.' },
    taunt: { en: 'Lords, peasants, popes, emperors. The cold took a third of them. I will take the rest.' },
    win: { en: 'The Void closes and the frost melts from the fields. The page on Europe floats down into your hands.' },
    questions: [
      {
        stim: { text: { en: 'On Christmas Day in the year 800 CE, Pope Leo III crowned the Carolingian ruler Charlemagne "emperor of the Romans."' }, src: { en: 'Quoted in "Christendom," World History Project' } },
        q: { en: 'The pope\'s choice of title in the excerpt most directly reflects...' },
        choices: [{ en: 'a claim of papal authority apart from Byzantium' }, { en: 'the Byzantine emperor\'s rule over state and church' }, { en: 'a feudal grant of land in return for loyalty' }, { en: 'the excommunications that split the church in 1054' }],
        answer: 0,
        why: { en: 'Crowning Charlemagne "emperor of the Romans" affirmed the pope\'s authority to crown emperors and declared a firm separation from Byzantine control.' }
      },
      {
        stim: { text: { en: 'Peasants might be required to give a portion of their harvest to the lord, or to use the lord\'s flour mill, or be prevented from leaving the village without permission.' }, src: { en: 'Adapted from "Europe 1200–1450," World History Project' } },
        q: { en: 'The obligations in the excerpt most directly reflect which of the following?' },
        choices: [{ en: 'The manorial system tying peasants to land' }, { en: 'Feudal bonds between kings and great lords' }, { en: 'Deliberative bodies sharing power with kings' }, { en: 'Byzantine control of the church by emperors' }],
        answer: 0,
        why: { en: 'The manorial system tied peasants to the lord\'s land. Feudalism, by contrast, organized the relationship between local leaders and kings.' }
      },
      {
        stim: { text: { en: 'A king might grant a powerful lord authority over a province. The lord gained control of its tax, land and laws; the king received promises of military support. The lord would then grant parts of the province to his followers in the same manner.' }, src: { en: 'Adapted from "Europe 1200–1450," World History Project' } },
        q: { en: 'The process in the excerpt best supports the claim that political power in Europe was...' },
        choices: [{ en: 'devolved to many local authorities' }, { en: 'centralized under the King of France' }, { en: 'controlled by the pope through monks' }, { en: 'shared equally with peasant villages' }],
        answer: 0,
        why: { en: 'Each grant passed taxes, land and laws downward, so power was devolved and fragmented. The King of France directly ruled only a few provinces near Paris.' }
      },
      {
        q: { en: 'Which of the following best explains the rise of bodies such as the Parliament in England and the Cortes in Spain?' },
        choices: [{ en: 'Stronger local lords demanded a share of power' }, { en: 'Kings created them to govern the Holy Land' }, { en: 'The pope ordered kings to obey their clergy' }, { en: 'Peasants won the right to elect their lords' }],
        answer: 0,
        why: { en: 'As local lords grew more powerful, they demanded political participation. Elites and church leaders formed bodies to share power with the monarch.' }
      },
      {
        stim: { title: { en: 'Europe\'s climate (as scientists describe it)' }, rows: [[{ en: 'Period' }, { en: 'Weather' }], [{ en: 'Medieval Climate Anomaly (800s to early 1300s)' }, { en: 'warm and stable' }], [{ en: 'Little Ice Age (firmly by the 1400s)' }, { en: 'cold, wet and unstable' }]], src: { en: 'From "Europe 1200–1450," World History Project' } },
        q: { en: 'The change shown in the table best helps explain which shift in European history?' },
        choices: [{ en: 'From centuries of growth to crisis in the 1300s' }, { en: 'From one Christian church to the schism of 1054' }, { en: 'From devolved power to strong central kings' }, { en: 'From subsistence farming to selling at market' }],
        answer: 0,
        why: { en: 'Warm, stable weather helped populations and cities grow. When the climate turned cold and wet in the 1300s, crops failed and crisis followed.' }
      },
      {
        stim: { text: { en: 'The population of European communities may have fallen by a third to half between 1300 and 1400.' }, src: { en: 'Adapted from "Europe 1200–1450," World History Project' } },
        q: { en: 'Which of the following best explains the change described in the excerpt?' },
        choices: [{ en: 'Waves of bubonic plague from the late 1340s' }, { en: 'Battles of the Hundred Years\' War in France' }, { en: 'Crusaders who walked 2,000 miles to Jerusalem' }, { en: 'Warm weather of the Medieval Climate Anomaly' }],
        answer: 0,
        why: { en: 'After crop failures and cattle epidemics, the Black Death (bubonic plague) swept Europe in waves from the late 1340s. The Hundred Years\' War was real, but it was in France, not all of Europe.' }
      },
      {
        stim: { title: { en: 'Two Christian communities' }, rows: [[{ en: 'Feature' }, { en: 'Latin Christendom' }, { en: 'Byzantium' }], [{ en: 'Language of the church' }, { en: 'Latin' }, { en: 'Greek' }], [{ en: 'Priests' }, { en: 'do not marry' }, { en: 'may marry' }], [{ en: 'Bread used in worship' }, { en: 'unleavened' }, { en: 'leavened' }], [{ en: 'At the center of doctrine' }, { en: 'the pope' }, { en: 'the emperor' }]], src: { en: 'From "Christendom," World History Project' } },
        q: { en: 'Differences like those in the table, deepened by the iconoclasm controversy, most directly led to...' },
        choices: [{ en: 'the Great Schism of 1054' }, { en: 'the Fourth Crusade\'s sack of Constantinople' }, { en: 'the crowning of Charlemagne in 800' }, { en: 'the rise of feudalism in France' }],
        answer: 0,
        why: { en: 'Tension grew until each side closed the other\'s churches and pope and patriarch excommunicated each other. In 1054 they split into Roman Catholic and Eastern Orthodox.' }
      },
      {
        stim: { text: { en: 'This campaign was remarkably successful in uniting Latin Christendom and even mending the rift between eastern and western Christianity for a time, but the truce didn\'t last very long. By the fourth Crusade, Latin crusaders sacked the Christian city of Constantinople.' }, src: { en: 'Adapted from "Christendom," World History Project' } },
        q: { en: 'The excerpt best supports which claim about the Crusades?' },
        choices: [{ en: 'They united the West but did not heal the schism' }, { en: 'They ended the Great Schism and joined the churches' }, { en: 'They were planned by Byzantium to conquer Rome' }, { en: 'They turned Latin Christians against the pope' }],
        answer: 0,
        why: { en: 'The Crusades united Latin Christendom and mended the rift only for a time. The Fourth Crusade\'s sack of Constantinople showed the split remained.' }
      }
    ]
  },
  learned: [
    { en: 'Under the [[manorial system|manorial system]], most Europeans were [[peasant|peasants]] or [[serf|serfs]] who farmed a lord\'s land and owed him harvest, labor and obedience.' },
    { en: 'Under [[feudalism|feudalism]], power was [[devolved|devolved]] to local lords, so kings were often weak and Europe was politically fragmented.' },
    { en: 'Europe grew during the [[medieval climate anomaly|Medieval Climate Anomaly]]; the [[little ice age|Little Ice Age]] and the [[black death|Black Death]] brought crisis after 1300. One faith tied Latin Christendom together.' }
  ],
  reflect: {
    q: { en: 'AP practice: Explain one way the manorial system or feudalism kept political power local in Europe, c. 1200–1450.' },
    starter: { en: 'Political power in Europe stayed local because' }
  }
};
