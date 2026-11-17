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
    { en: 'The Grump blurred the page on Europe. This manor near Paris is forgetting who owns the land, who rules and what it believes!' },
    { en: 'Talk to the 4 people here, help a baker from Paris, then wake the time stone.' }
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
        { en: 'My family works fields that belong to the lord of the [[manor|manor]]. Most of us here are [[peasant|peasants]]: farmers who do not control their own land.' },
        { en: 'In return for the land, we give the lord part of our harvest. We must grind grain at his mill, and we cannot leave the village without permission.' },
        { en: 'Some families are bound to lord and land even more tightly. They are [[serf|serfs]], and many are very poor. People call this the [[manorial system|manorial system]].' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Why did peasants like Jeanne accept so many duties to the lord of the manor?' },
        choices: [
          { ok: true, t: { en: 'The lord owned the land they farmed' }, why: { en: 'Yes. Peasants got access to the lord\'s fields in exchange for giving up rights and taking on duties.' } },
          { t: { en: 'The king paid them wages to obey' }, why: { en: 'No. The king paid no wages. Peasants worked the lord\'s land and owed him part of the harvest.' } },
          { t: { en: 'They grew rich selling grain abroad' }, why: { en: 'No. Few families grew enough to feed themselves, let alone sell much at market.' } }
        ]
      }
    },
    {
      x: 5, y: 6, name: { en: 'Sir Raoul' }, role: { en: 'Knight' },
      look: { skin: 1, hair: '#2b1d14', shirt: '#6a7a8a', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'The king granted a great lord this province. In return, the lord promised the king military support and good government. This is [[feudalism|feudalism]].' },
        { en: 'That lord granted this village to me, and I swore to support him. Everyone owes the person above and takes from the person below.' },
        { en: 'So power is [[devolved|devolved]]. The King of France directly controls only a few provinces near Paris. Land is what we all fight over.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Why did local lords, not the king, hold most power in France around 1300?' },
        choices: [
          { ok: true, t: { en: 'Kings traded land for military support' }, why: { en: 'Yes. Each grant gave a lord the land, taxes and laws of an area in return for loyalty and soldiers.' } },
          { t: { en: 'The pope chose every lord in France' }, why: { en: 'No. The pope led the church\'s beliefs. Lords got their power through feudal grants of land.' } },
          { t: { en: 'Peasants voted for their own lords' }, why: { en: 'No. Peasants had no vote. Power rested on land grants and, in the end, on force.' } }
        ]
      }
    },
    {
      x: 23, y: 5, name: { en: 'Brother Anselm' }, role: { en: 'Monk' },
      look: { skin: 3, hair: '#1b1410', shirt: '#5a4632', robe: true, style: 'short' },
      lines: [
        { en: 'Our church is part of [[latin christendom|Latin Christendom]]. We pray in Latin, our priests do not marry, and the pope, not a king, decides what we believe.' },
        { en: 'In the east, [[byzantium|Byzantium]] stayed one unified empire. They pray in Greek, their priests may marry, and the emperor stands at the center of state and church.' },
        { en: 'The two churches officially broke apart in 1054, in the [[great schism|Great Schism]]. Now there are Roman Catholics in the west and Eastern Orthodox in the east.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Compared with Latin Christendom, how was Byzantium different?' },
        choices: [
          { ok: true, t: { en: 'It stayed one empire under an emperor' }, why: { en: 'Right. Byzantium stayed unified, and its emperor led both state and church. The West was split into many states.' } },
          { t: { en: 'It broke into hundreds of small states' }, why: { en: 'No. That describes the West, especially Germany. Byzantium remained one unified empire.' } },
          { t: { en: 'Its pope crowned kings and set beliefs' }, why: { en: 'No. That was the pope in the Latin West. In Byzantium the emperor was at the center of church and state.' } }
        ]
      }
    },
    {
      x: 21, y: 19, name: { en: 'Agnès' }, role: { en: 'Pilgrim' },
      look: { skin: 4, hair: '#1b1410', shirt: '#7a2a3a', pants: '#3a2a2a', hat: '#6a4a2a', style: 'long' },
      lines: [
        { en: 'I walked many days to pray at a saint\'s shrine. Its [[relic|relics]], remains tied to the saint\'s life, draw pilgrims who seek salvation.' },
        { en: 'The same religious passion sent armies on the [[crusades|Crusades]], to take Jerusalem from the Muslims. Thousands of ordinary people walked over 2,000 miles.' },
        { en: 'Crusaders also attacked Jews, Muslims and other minorities. On the Fourth Crusade, Latin crusaders even sacked Constantinople, a Christian city.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Which best explains why ordinary people joined the Crusades?' },
        choices: [
          { ok: true, t: { en: 'Religious passion and hope of new land' }, why: { en: 'Yes. The Crusades were military pilgrimages, driven by religious enthusiasm and the promise of new land.' } },
          { t: { en: 'The Byzantine emperor paid every soldier' }, why: { en: 'No. Byzantium asked for help, but crusaders went out of faith and hope of land, not pay.' } },
          { t: { en: 'Kings forced all serfs to leave the manor' }, why: { en: 'No. Serfs could not leave without permission. Crusaders were moved by religious enthusiasm.' } }
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
        { en: 'The Grump fogged my order with this manor! Ask Thibaut, the lord\'s steward. He keeps the manor\'s accounts.' }
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
    intro: { en: 'The Grump scrambled the chronicle of Europe from the 800s to 1400. Put the causes and effects in order, from first to last.' },
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
    name: { en: 'The Frost Grump' },
    appear: { en: 'The Frost Grump is hiding in the cold fog beside the monastery.' },
    taunt: { en: 'Lords, peasants, popes and emperors... let them all fade into the cold.' },
    win: { en: 'The frost melts from the fields. The page on Europe floats down into your hands!' },
    questions: [
      {
        stim: { text: { en: 'Peasants might be required to give a portion of their harvest to the lord, or to use the lord\'s flour mill, or be prevented from leaving the village without permission.' }, src: { en: 'Adapted from "Europe 1200–1450," World History Project' } },
        q: { en: 'The obligations in the excerpt are best understood as part of...' },
        choices: [{ en: 'the manorial system' }, { en: 'the Byzantine church' }, { en: 'the civil service exams' }, { en: 'the Great Schism' }],
        answer: 0,
        why: { en: 'Peasants farmed land owned by the lord of the manor and owed him part of the harvest, use of his mill and obedience.' }
      },
      {
        stim: { text: { en: 'A king might grant a powerful lord authority over a province. The lord gained its tax, land and laws; the king received promises of military support and good governance.' }, src: { en: 'Adapted from "Europe 1200–1450," World History Project' } },
        q: { en: 'The arrangement in the excerpt shows that political power in Europe was...' },
        choices: [{ en: 'decentralized, held by local lords' }, { en: 'centralized in one strong emperor' }, { en: 'given out by exams on old books' }, { en: 'held only by town merchants' }],
        answer: 0,
        why: { en: 'Under feudalism, kings handed power down to lords, and lords to knights and monasteries. Power was devolved and fragmented.' }
      },
      {
        q: { en: 'Which statement best describes the King of France around 1300?' },
        choices: [{ en: 'He directly ruled only lands near Paris' }, { en: 'He chose the pope and set church beliefs' }, { en: 'He owned all land and paid every lord' }, { en: 'He ruled all of Europe north of the Alps' }],
        answer: 0,
        why: { en: 'Local lords held the land, taxes and laws of most provinces. The king directly controlled only a few provinces near Paris.' }
      },
      {
        stim: { title: { en: 'Europe\'s climate (as scientists describe it)' }, rows: [[{ en: 'Period' }, { en: 'Weather' }], [{ en: 'Medieval Climate Anomaly (800s to early 1300s)' }, { en: 'warm and stable' }], [{ en: 'Little Ice Age (firmly by the 1400s)' }, { en: 'cold, wet and unstable' }]], src: { en: 'From "Europe 1200–1450," World History Project' } },
        q: { en: 'Which development is best explained by the change shown in the table?' },
        choices: [{ en: 'Crop failures and crisis in the 1300s' }, { en: 'The Great Schism of the churches in 1054' }, { en: 'Faster growth of farms and villages' }, { en: 'The first pilgrimages to saints\' shrines' }],
        answer: 0,
        why: { en: 'Warm, stable weather helped Europe grow. When the climate turned cold and wet in the 1300s, crops failed and crisis followed.' }
      },
      {
        stim: { text: { en: 'The population of European communities may have fallen by a third to half between 1300 and 1400.' }, src: { en: 'Adapted from "Europe 1200–1450," World History Project' } },
        q: { en: 'Which best explains the change described above?' },
        choices: [{ en: 'Waves of plague from the late 1340s' }, { en: 'Crusaders leaving for the Holy Land' }, { en: 'Warmer weather that ruined harvests' }, { en: 'Lords freeing serfs from the land' }],
        answer: 0,
        why: { en: 'The Black Death, bubonic plague, swept Europe in waves from the late 1340s, reversing centuries of population growth.' }
      },
      {
        q: { en: 'Which statement best compares Byzantium with Latin Christendom around 1200?' },
        choices: [{ en: 'Byzantium was unified; the West was divided' }, { en: 'The West was unified; Byzantium was divided' }, { en: 'Both prayed in Greek and let priests marry' }, { en: 'Both were led in belief by the pope in Rome' }],
        answer: 0,
        why: { en: 'Byzantium stayed one empire with its emperor over state and church. The Latin West was split into many states.' }
      },
      {
        stim: { text: { en: 'The pope excommunicated the patriarch from the church, and the patriarch did the same to the pope. In 1054 the two sides officially broke apart.' }, src: { en: 'Adapted from "Christendom," World History Project' } },
        q: { en: 'The split described in the excerpt led to...' },
        choices: [{ en: 'separate Catholic and Orthodox churches' }, { en: 'one church led by the Byzantine emperor' }, { en: 'the end of Christianity in western Europe' }, { en: 'the conversion of Byzantium to Islam' }],
        answer: 0,
        why: { en: 'The Great Schism of 1054 created two Christian churches: Roman Catholic in the west and Eastern Orthodox in the east.' }
      },
      {
        q: { en: 'Which statement best describes an effect of the Crusades?' },
        choices: [{ en: 'Latin Christians united, but minorities suffered' }, { en: 'Jerusalem became the capital of France for good' }, { en: 'Jews and Muslims won equal rights across Europe' }, { en: 'East and West joined as one church forever' }],
        answer: 0,
        why: { en: 'The Crusades united Latin Christendom against a common enemy, but crusaders also attacked Jews, Muslims and even Christian Constantinople.' }
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
