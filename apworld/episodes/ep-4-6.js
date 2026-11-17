/* HISTORYWALKER · Episode 4.6 · Internal and External Challenges to State Power (AP World Topic 4.6, c. 1450–1750)
   Santa Fe, in Nuevo México on the northern edge of New Spain, in 1680, the year of the Pueblo Revolt. From here the
   student also compares other challenges to growing states: the Fronde in France, Joseon resistance to the Qing, and
   the maroon communities of Brazil.
   Map: north of the river (rows 1-10) the Spanish town: the governor's palace (D, door 17,3) on the north side of the
   plaza, the church (D, door 27,8) east of it, adobe houses. The river (rows 11-12) with two bridges. South of it:
   Pueblo family houses (J, flat roofs), the road from New Spain (x 8) and cornfields (x 22-28). Mountains to the east.
   Content source: Khan Academy, AP World History (World History Project), Unit 4 Lesson "Internal and External
   Challenges to State Power from 1450 to 1750": "State Centralization and Resistance" (Trevor Getz), "Colonization and
   Resistance: Pueblo Revolt of 1680" (video page), "Quick-Sourcing: Imperial Expansion, Competition, and Resistance";
   and the Unit 4 overview: "Unit 4 Introduction: Transoceanic Interconnections 1450 to 1750" (Trevor Getz).
   World History Project content is CC BY-NC 4.0. Facts here come from those readings. English only, AP level. */
window.EPISODE = {
  id: '4.6',
  realm: 4,
  sol: 'AP 4.6',
  style: 'sahel',
  weather: { sky: 'dust', time: 'day' },
  title: { en: 'Challenges to State Power' },
  place: { en: 'Santa Fe, Nuevo México, New Spain, 1680' },
  intro: [
    { en: 'The Void smeared the page on [[resistance|resistance]]. In Santa Fe, people are forgetting why they push back against growing states.' },
    { en: 'Talk to the 4 people here, read the 2 sources on the lecterns, help a trader find his book of news, then wake the time stone.' }
  ],
  scenes: {
    at: [-105.94, 35.69],
    year: 1680,
    start: [
      { en: 'Beginning in the 1540s, Spanish forces pushed north from New Spain into Pueblo lands.' },
      { en: 'Spanish settlers took land and forced Pueblo people to work for them.' },
      { en: 'In 1680, the Pueblos of Nuevo México rose up against their Spanish colonizers.' }
    ],
    guess: {
      q: { en: 'Settlers took Pueblo land, and priests attacked Pueblo religion. What do you think the Pueblos did?' },
      choices: [{ t: { en: '✊ They resisted' }, ok: true }, { t: { en: '🙇 They accepted it' } }],
      why: { en: 'They resisted. In 1680 the Pueblo Revolt drove the Spanish off most Pueblo land.' }
    },
    page: { en: 'The Pueblo Revolt: the first successful revolt against European colonialism in the future US.' },
    next: {
      q: { en: 'Next: changing social hierarchies. Did Spanish colonies rank people by their ancestry?' },
      choices: [{ t: { en: 'Yes, they did' }, ok: true }, { t: { en: 'No, everyone was equal' } }],
      why: { en: 'Yes. Spanish colonies ranked people by ancestry in the casta system. You go there next.' }
    }
  },
  start: [10, 6],
  map: [
    'PPPPPPPPPPPPPPPPPPPPPPPPPPPPMMMM',
    'P.g....RRR...DDDDDDDDD...g..KMMM',
    'P......hdh.x.DDDDDDDDD.......MMM',
    'P.g..........DDDDdDDDD.RRRR..KMM',
    'P.......:::::llllllllllxhhdh..MM',
    'P.......:...llllllllllll......MM',
    'P.g.....:...llllllllllll..DDD.MM',
    'P.......:...lllllOllllll..DDD.MM',
    'P.RRR...:...llllllllllll..DdD.MM',
    'P.hdh..x:...........:.......g.MM',
    'P.......:.....g.....:.....,...MM',
    '~~~~~~~~B~~~~~~~~~~~B~~~~~~~~~MM',
    '~~~~~~~~B~~~~~~~~~~~B~~~~~~~~~MM',
    'P.......:.....x.....:.........MM',
    'P.JJJJJJ:...........:.2222.22.MM',
    'P.JdJJdJ:..g........:.2222.22.MM',
    'P.......:...........:::::::::.MM',
    'P.JJJJ..:...........:.2222.22.MM',
    'P.JJdJ..:.....g.....:.2222.22.MM',
    'P.......:...........:.........MM',
    'Pg..g...:......g....:...g....gMM',
    'PPPPPPPPPPPPPPPPPPPPPPPPPPPPPMMM'
  ],
  words: {
    'centralization': { en: 'gathering power at the top of a state, so decisions are made far from the people they affect' },
    'resistance': { en: 'pushing back against those in power, from quiet acts like running away to open revolts and wars' },
    'everyday resistance': { en: 'small acts by people with little power: working slowly, pretending to obey, stealing, running away, sabotage' },
    'maroon': { en: 'an enslaved person who escaped from a plantation; maroons often formed runaway communities' },
    'marronage': { en: 'escaping from slavery by running away; it denied slavers the labor they relied on' },
    'new spain': { en: 'Spain\'s colony in what is now Mexico; Spanish forces pushed north from it into Pueblo lands' },
    'colonialism': { en: 'one people ruling another people\'s land, settling it and using its land and labor' },
    'regent': { en: 'a person who rules for a monarch who is too young, like Anne of Austria for the boy king Louis XIV' },
    'fronde': { en: 'the civil war of 1648–1653 between the French crown and many of its nobles' },
    'joseon': { en: 'the state that ruled Korea in this period; it was an ally of the Ming dynasty' },
    'queue': { en: 'the long braided hairstyle the Qing dynasty demanded that men wear' }
  },
  npcs: [
    {
      x: 10, y: 3, name: { en: 'Antonio' }, role: { en: 'Government clerk' },
      look: { skin: 1, hair: '#3a2416', shirt: '#2a3a5a', pants: '#2a2a2a', hat: '#1b1410', style: 'short' },
      lines: [
        { en: 'I copy the orders for this colony. They come from [[new spain|New Spain]] and from Spain, far away. Power gathered at the top: that is [[centralization|centralization]].' },
        { en: 'Centralizing states bring more taxes, more laws and often more oppression. Even elites, like nobles or wealthy merchants, can lose power and profits.' },
        { en: 'In France, King Louis XIV was only 10. His [[regent|regent]], Anne of Austria, and Cardinal Mazarin needed tax money for costly wars, so they sold offices and noble titles.' },
        { en: 'In 1648 the lords revolted and drove the court into the countryside: the [[fronde|Fronde]]. But they were too divided. By 1653 the crown was back in charge.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Compared with the Pueblo Revolt, the Fronde was led by whom, and against what?' },
        choices: [
          { ok: true, t: { en: 'Nobles, against their own centralizing crown' }, why: { en: 'Yes. The Pueblos resisted colonizers. In France, land-owning lords resisted their own king\'s government, which sold titles to new aristocrats and cut their tax income.' } },
          { t: { en: 'Merchants, against a king who sold noble titles' }, why: { en: 'No. Antonio says wealthy merchants could lose out too, but the Fronde was a civil war between the crown and much of the French nobility.' } },
          { t: { en: 'Peasants, against the crown\'s new war taxes' }, why: { en: 'No. Centralizing states did bring more taxes, but the Fronde was led by land-owning lords, who lost power when the crown sold offices and titles.' } },
          { t: { en: 'Aristocrats, against an invading foreign dynasty' }, why: { en: 'No. That fits Joseon nobles in Korea, loyal to the Ming as the Qing rose. French lords revolted against their own king\'s government.' } }
        ]
      }
    },
    {
      x: 24, y: 9, name: { en: 'Swift Deer' }, role: { en: 'Pueblo runner' },
      look: { skin: 3, hair: '#1b1410', shirt: '#b8562b', pants: '#5a4a3a', style: 'long' },
      lines: [
        { en: 'I carry messages between the Pueblo towns. Spanish priests try to force us to abandon our own religious practices. Our religious leaders will not let them die.' },
        { en: 'A shaman named Popé leads the resistance to settlers and priests. He even recruits our Apache and Navajo neighbors. The goal: expel the Spanish and restore the old order.' },
        { en: 'When one person suffers alone, [[resistance|resistance]] is quiet. When a whole people suffers together, it becomes organized: a revolt of many towns at once.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'In 1680 the revolt drove the Spanish off most Pueblo land. What did Popé then order?' },
        choices: [
          { ok: true, t: { en: 'A return to traditional Pueblo religion' }, why: { en: 'Yes. Popé ordered everyone to return to their traditional religion and abandon any Spanish culture. Fighting went on, and Spanish troops later recaptured the region.' } },
          { t: { en: 'A blend of Pueblo and Catholic practice' }, why: { en: 'No. Popé ordered people to abandon any Spanish culture, not to mix it with their own.' } },
          { t: { en: 'An alliance with the Dutch against Spain' }, why: { en: 'No. That was Palmares, the maroon town in Brazil, which allied with the Dutch against the Portuguese. Popé\'s goal was to restore the old Pueblo order.' } },
          { t: { en: 'Pueblo rule over its Apache and Navajo allies' }, why: { en: 'No. Popé recruited Apache and Navajo neighbors as allies. His goal was to expel the Spanish and restore the old order, not to rule his allies.' } }
        ]
      }
    },
    {
      x: 26, y: 15, name: { en: 'Blue Corn' }, role: { en: 'Pueblo farmer' },
      look: { skin: 4, hair: '#1b1410', shirt: '#3a6a8a', pants: '#5a3a2a', style: 'bun' },
      lines: [
        { en: 'My people, the Pueblo, lived in this land, in the Southwest, long before the Spanish came. We will still be here after them.' },
        { en: 'Beginning in the 1540s, Spanish forces pushed north from New Spain, the land you call Mexico. Waves of settlers followed and took over vast areas of land.' },
        { en: 'They take our land so we cannot live on our own, then force us to work for them. That is how they get our labor.' },
        { en: 'New diseases came with the settlers and spread fast among us. So many sick and dying makes it harder to fight back. Still, we resist.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Which of the following best explains how settlers made Pueblo people work for them?' },
        choices: [
          { ok: true, t: { en: 'They took the land families lived on' }, why: { en: 'Yes. Without their land, Pueblo families could not live independently, so settlers could force them to work. That was one cause of the revolt.' } },
          { t: { en: 'They paid wages in silver from the mines' }, why: { en: 'No. Settlers did not hire Pueblo workers for wages. They took land and forced people to work.' } },
          { t: { en: 'Priests ordered work as a religious duty' }, why: { en: 'No. Priests pressed the Pueblo to abandon their religion. Labor was forced by settlers who seized the land.' } },
          { t: { en: 'Disease left them too weak to refuse the work' }, why: { en: 'No. New diseases made resistance harder, but Blue Corn names the method: settlers took the land, so families could not live on their own.' } }
        ]
      }
    },
    {
      x: 13, y: 17, name: { en: 'Diego' }, role: { en: 'Mule driver' },
      look: { skin: 5, hair: '#1b1410', shirt: '#c9a24a', pants: '#3a3a2a', hat: '#6a4a2a', style: 'short' },
      lines: [
        { en: 'Not all [[resistance|resistance]] is war. People with little power work slowly, pretend to obey, steal or run away. Historians call it [[everyday resistance|everyday resistance]].' },
        { en: 'Enslaved people who escape plantations are [[maroon|maroons]]. Running away, [[marronage|marronage]], denies slavers the labor they depend on.' },
        { en: 'In Brazil, runaways build communities called palenques or macambos. The province of Bahia had thirteen. The biggest, Palmares, had as many as 220 buildings in 1645.' },
        { en: 'Palmares even has its own foreign policy: an alliance with the Dutch against the Portuguese. From such towns, maroons raid plantations and free others.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Which of the following best explains why running away was a form of resistance to slavery?' },
        choices: [
          { ok: true, t: { en: 'It denied slavers the labor they relied on' }, why: { en: 'Yes. Plantations depended on enslaved labor. Marronage denied it, and maroon towns could attack plantations and free others.' } },
          { t: { en: 'It forced the Portuguese crown to end slavery' }, why: { en: 'No. Running away did not end slavery. It hurt slavers by taking away the labor they relied on.' } },
          { t: { en: 'It let runaways join the Dutch army in Brazil' }, why: { en: 'No. Palmares as a community allied with the Dutch, but maroons ran away to be free and built their own towns.' } },
          { t: { en: 'It made colonists recognize runaways as free' }, why: { en: 'No. Only some won that: Jamaica\'s maroons fought the British to a draw in the 1730s, and the promise was not always honored. Running away hurt slavers by taking their labor.' } }
        ]
      }
    },
    {
      doc: true, x: 3, y: 5, icon: '📜',
      name: { en: 'Weapons of the Weak' }, role: { en: 'A historian\'s words' },
      src: { en: 'Historian James Scott, on "everyday forms of peasant resistance"; quoted in "State Centralization and Resistance," World History Project' },
      lines: [
        { en: '"... to understand what we might call everyday forms of peasant resistance—the prosaic [humdrum] but constant struggle between peasantry and those who seek to extract labor, food, taxes, rents and interest from them."' },
        { en: '"Most forms of this struggle stop well short of outright collective defiance. Here I have in mind the ordinary weapons of relatively powerless groups: foot dragging, dissimulation, desertion, false compliance, pilfering, feigned ignorance, slander, arson, sabotage, and so on."' },
        { en: 'Context: James Scott is a historian, not a person of this era. He called these strategies the "peasant weapons of the weak." When we think of resistance, we usually think of violence and large revolts. Scott wanted readers to see a different kind, everyday resistance, open to people with almost no power.' },
        { en: 'In plain words: weak people lied to escape or oppose the powerful. They ran away. They pretended to obey but did not. They stole. They slowed their work. They destroyed things when they could get away with it.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Sourcing: what is the historian\'s main purpose in this passage?' },
        choices: [
          { ok: true, t: { en: 'To show that powerless people resisted in daily ways' }, why: { en: 'Yes. Scott points past wars and big revolts to the constant, quiet struggle of peasants against those who took their labor, food and taxes.' } },
          { t: { en: 'To argue that peasants seldom resisted their rulers' }, why: { en: 'No. Scott calls the struggle constant. It simply stopped short of outright collective defiance.' } },
          { t: { en: 'To show peasants mostly resisted by open revolt' }, why: { en: 'No. Scott says most of this struggle stopped well short of outright collective defiance. He points past big revolts to quiet, everyday acts.' } },
          { t: { en: 'To give an eyewitness account of peasant life' }, why: { en: 'No. Scott is a historian, not a person of this era or a witness. He offers a way to see the everyday struggles of relatively powerless groups.' } }
        ]
      }
    },
    {
      doc: true, x: 16, y: 15, icon: '📖',
      name: { en: 'Growing States, Many Resisters' }, role: { en: 'Reading' },
      src: { en: 'Adapted from "State Centralization and Resistance" by Trevor Getz, World History Project (Khan Academy)' },
      lines: [
        { en: 'From 1400 to 1750, states grew bigger. Safavid, Ottoman, Mughal and Ming (later Qing) rulers split Eurasia; European states built oceanic empires. Government centralized: decisions were made far from the people affected, with more taxes, more laws and often more oppression. Most resistance targeted a particular policy, not the whole government. But resistance to European regimes that supported plantation slavery was aimed at the entire system.' },
        { en: 'Enslaved people fled plantations and formed maroon communities. In the 1730s, maroons in Jamaica fought the British colony to a draw, forcing the colonists to recognize their freedom, a promise not always honored. In 1760 Takyi (Tacky), once a leader among the Fante people of West Africa, launched a major rebellion. It took over several plantations and was put down only through brute force. It was one of as many as 100 rebellions.' },
        { en: 'Beginning in the 1540s, Spanish forces pushed from New Spain into the Southwest. Settlers took vast areas of land and forced local people to work; priests tried to force the Pueblo to abandon their religion. Resistance was difficult because new diseases spread rapidly. In 1680 Popé, a religious leader, with Apache and Navajo recruits, drove the Spanish off most Pueblo territory. Fighting continued, and Spanish troops later recaptured the region.' },
        { en: 'Elites resisted too. In France, nobles fought the crown in the Fronde (1648–1653). In Korea, Joseon nobles stayed loyal to the Ming as the Manchu Qing rose. One overthrew a neutral king and became King Injo (r. 1623–1649). Even after the Qing invaded Joseon, its aristocrats kept Ming clothing and hairstyles and refused the long "queue" the Qing demanded.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Comparison: which of the following best describes a pattern across the cases in the reading?' },
        choices: [
          { ok: true, t: { en: 'Groups resisted different things in different ways' }, why: { en: 'Yes. Invasion, forced cultural change, a centralizing king, enslavement: people resisted with wars, flight and even hairstyles.' } },
          { t: { en: 'Elites backed the state; only commoners resisted' }, why: { en: 'No. Elites resisted too: French nobles fought their crown in the Fronde, and Joseon aristocrats refused the queue the Qing demanded.' } },
          { t: { en: 'Most resisters aimed to overthrow the whole system' }, why: { en: 'No. The reading says most resistance targeted a particular policy. Only resistance to regimes that supported plantation slavery aimed at the entire system.' } },
          { t: { en: 'Each resistance movement won lasting victory' }, why: { en: 'No. The Fronde lost by 1653, Takyi\'s rebellion was crushed, and Spain later retook Pueblo lands.' } }
        ]
      }
    }
  ],
  houses: [
    { at: [8, 2], name: { en: 'Settler Doña Inés' }, look: { skin: 1, hair: '#3a2416', shirt: '#7a2a3a', robe: true, style: 'bun' },
      lines: [{ en: 'Settlers here hold wide lands. Pueblo people are made to work them.' }, { en: 'My family came north from New Spain to get land.' }] },
    { at: [17, 3], name: { en: 'Soldier Martín' }, look: { skin: 2, hair: '#2b1d14', shirt: '#6a6a7a', pants: '#3a3a3a', hat: '#2a2a2a', style: 'short' },
      lines: [{ en: 'This is the governor\'s palace. Orders reach us from far to the south.' }, { en: 'Spanish forces first came up this way in the 1540s.' }] },
    { at: [26, 4], name: { en: 'Shopkeeper Ana' }, look: { skin: 2, hair: '#1b1410', shirt: '#2a7a6a', style: 'long' },
      lines: [{ en: 'Our cloth and iron tools come up the long road from New Spain.' }, { en: 'Everything here depends on that one road south.' }] },
    { at: [27, 8], name: { en: 'Fray Lucas' }, look: { skin: 1, hair: '#8a8a8a', shirt: '#6a5a4a', robe: true, style: 'short' },
      lines: [{ en: 'We priests came north with the settlers.' }, { en: 'We want the Pueblo to give up their old religion. Many refuse.' }] },
    { at: [3, 9], name: { en: 'Carpenter Juan' }, look: { skin: 3, hair: '#2b1d14', shirt: '#8a6a3a', pants: '#3a2a1a', style: 'short' },
      lines: [{ en: 'I build doors and beams for the settlers\' houses.' }, { en: 'Pueblo workers haul the timber down from the mountains.' }] },
    { at: [3, 15], name: { en: 'Grandfather Red Shell' }, look: { skin: 4, hair: '#d8d8d8', shirt: '#8a4a2a', style: 'long' },
      lines: [{ en: 'Our people lived here before the Spanish came.' }, { en: 'And our grandchildren\'s grandchildren will still live here.' }] },
    { at: [6, 15], name: { en: 'Corn Tassel' }, look: { skin: 3, hair: '#1b1410', shirt: '#4a7a4a', style: 'bun' },
      lines: [{ en: 'New diseases came with the settlers. Many of our people have died.' }, { en: 'Still, we have not given up our ways.' }] },
    { at: [4, 18], name: { en: 'Young Hawk' }, look: { skin: 4, hair: '#1b1410', shirt: '#2a4a6a', pants: '#4a3a2a', style: 'short' },
      lines: [{ en: 'Apache and Navajo neighbors listen to Popé too.' }, { en: 'Together we may be strong enough to drive the Spanish out.' }] }
  ],
  signs: [
    { x: 11, y: 2, text: { en: 'SANTA FE · A Spanish town in Nuevo México, far north of New Spain.' } },
    { x: 23, y: 4, text: { en: 'THE PLAZA · North: the governor\'s palace. East: the church.' } },
    { x: 7, y: 9, text: { en: 'THE ROAD SOUTH · To New Spain, where orders and settlers come from.' } },
    { x: 14, y: 13, text: { en: 'SOUTH OF THE RIVER · Pueblo houses to the west, cornfields to the east.' } }
  ],
  finds: [
    { clueAt: [2, 13], at: [6, 13], decor: 'vase', clue: { en: 'From this note, walk 4 steps east along the riverbank.' },
      text: { en: 'A clay water jar. The Pueblo lived here before the Spanish came, and still live here today.' } }
  ],
  scraps: [[1, 1], [29, 13], [1, 20]],
  smudges: [[13, 20], [27, 2]],
  quest: {
    stat: 'reg',
    title: { en: 'The Book of News' },
    giver: {
      x: 5, y: 6, name: { en: 'Tomás' }, role: { en: 'Trader from New Spain' },
      look: { skin: 2, hair: '#2b1d14', shirt: '#8a5a2a', pants: '#3a3a4a', hat: '#c9a24a', style: 'short' },
      lines: [
        { en: 'I bring goods up the long road from New Spain. I collect news too: how people across the world push back against growing states.' },
        { en: 'The Void\'s Ink Thief tore my book of news into three pieces! Ask Grandmother Willow, the potter. She lives across the river, by the Pueblo houses.' }
      ],
      wait: { en: 'Grandmother Willow works south of the river. Cross the west bridge and look by the Pueblo houses.' },
      thanks: { en: 'My book is whole! Pueblo towns, French lords, Korean nobles loyal to the Ming, Brazilian maroons: all resisted growing states, in different ways.' }
    },
    contact: {
      x: 5, y: 16, name: { en: 'Grandmother Willow' }, role: { en: 'Pueblo potter' },
      look: { skin: 3, hair: '#bdbdbd', shirt: '#9a4a3a', pants: '#4a3a2a', style: 'bun' },
      lines: [
        { en: 'Yes, an inky thief ran past my kiln. It hid the pieces in the places where our troubles began.' },
        { en: 'Find where the far-away orders are given, where priests attack our religion, and where settlers took our fields.' }
      ]
    },
    action: {
      type: 'chase',
      at: [12, 19],
      hops: [[24, 19], [17, 19]],
      name: { en: 'The Ink Thief' },
      taunt: { en: 'The Ink Thief whispers: "Three pieces, three hard truths about this place. Find them."' },
      clues: [
        { t: { en: 'Piece 1 is where the governor gives orders for rulers far away. Look on the north side of the plaza.' },
          zones: [{ x: 13, y: 4, w: 9, h: 1 }],
          noBy: [{ x: 25, y: 9, w: 5, h: 1, t: { en: 'This is the church. The governor\'s palace stands on the north side of the plaza.' } }],
          found: { en: 'Piece 1, at the governor\'s palace! Decisions here were made far from the people they affected.' } },
        { t: { en: 'Piece 2 is where priests try to make the Pueblo give up their own religion. Look east of the plaza.' },
          zones: [{ x: 25, y: 9, w: 5, h: 1 }],
          noBy: [{ x: 13, y: 4, w: 9, h: 1, t: { en: 'This is the governor\'s palace. The church is east of the plaza.' } }],
          found: { en: 'Piece 2, at the church! Forced religious change was one cause of the revolt.' } },
        { t: { en: 'Piece 3 is in the fields the settlers took. Cross the river, then go east of the road.' },
          zones: [{ x: 22, y: 14, w: 7, h: 5 }],
          noBy: [{ x: 1, y: 13, w: 7, h: 7, t: { en: 'These are Pueblo family houses. The cornfields are east of the road, across from here.' } }],
          found: { en: 'Piece 3, in the cornfields! Settlers took land and forced Pueblo people to work it.' } }
      ],
      win: { en: 'Caught! The Ink Thief drops the last page and slips away along the river. Tomás\'s book is whole.' },
      item: { icon: '📜', name: { en: 'Tomás\'s book of news' } }
    }
  },
  challenge: {
    at: [15, 7], type: 'claim', stat: 'hei',
    title: { en: 'Who resisted, and how?' },
    intro: { en: 'The Void says no one ever pushed back against powerful states. Pick one movement. Back it up with what it resisted and how it resisted.' },
    options: [
      { icon: '🌽', name: { en: 'The Pueblo Revolt, 1680' }, desc: { en: 'Nuevo México, against Spanish colonial rule' },
        result: { en: 'Yes! The revolt drove the Spanish off most Pueblo land. Fighting went on, and Spanish troops later retook the region.' } },
      { icon: '👑', name: { en: 'The Fronde, 1648–1653' }, desc: { en: 'France, nobles against the crown' },
        result: { en: 'Yes! The lords drove the royal court into the countryside, but they were too divided. By 1653 the crown was back in charge and pardoned them.' } },
      { icon: '🎎', name: { en: 'Joseon aristocrats' }, desc: { en: 'Korea, loyal to the fallen Ming dynasty' },
        result: { en: 'Yes! Joseon backed the Ming resistance until it ended. Even after the Qing invaded Korea, its aristocrats kept Ming styles as a protest.' } },
      { icon: '⛓️', name: { en: 'The maroons of Palmares' }, desc: { en: 'Brazil, escaping plantation slavery' },
        result: { en: 'Yes! Palmares had as many as 220 buildings in 1645, and maroons attacked plantations and freed others.' } }
    ],
    kinds: [
      { id: 'what', label: { en: 'What they resisted' } },
      { id: 'how', label: { en: 'How they resisted' } }
    ],
    reasons: [
      { kind: 'what', fits: [0], t: { en: 'Settlers took their land, forced their labor and attacked their religion' },
        why: { en: 'That was Spanish colonial rule in Pueblo lands: settlers took land and forced work, and priests pushed people to abandon their religion.' } },
      { kind: 'what', fits: [1], t: { en: 'The crown sold noble titles and took their tax income' },
        why: { en: 'The regent and Mazarin needed money for wars, so they sold offices and titles and sent taxes straight to the state.' } },
      { kind: 'what', fits: [2], t: { en: 'The Qing, invading Manchu, replaced the Ming they were loyal to' },
        why: { en: 'Joseon was a Ming ally; the Ming had helped defend Korea from Japan in the 1590s. Its nobles even overthrew a neutral king and made Injo king.' } },
      { kind: 'what', fits: [3], t: { en: 'Plantation slavery took their freedom and their labor' },
        why: { en: 'Maroons were enslaved people who escaped the terrible oppression of the plantation.' } },
      { kind: 'what', fits: [], t: { en: 'A state that lowered their taxes and left them alone' },
        why: { en: 'Not true for any of these. Each group resisted a state that was growing stronger and asking more of them.' } },
      { kind: 'how', fits: [0], t: { en: 'A religious leader, Popé, united towns and Apache and Navajo allies to drive out the Spanish' },
        why: { en: 'Popé led an organized revolt with neighboring peoples, the first successful revolt against European colonialism in the future United States.' } },
      { kind: 'how', fits: [1], t: { en: 'A revolt in 1648 drove the royal court into the countryside' },
        why: { en: 'The Fronde was a civil war between the crown and much of the nobility.' } },
      { kind: 'how', fits: [2], t: { en: 'They kept Ming clothes and hairstyles and refused the Qing queue' },
        why: { en: 'Not adopting the long queue the Qing demanded was a quiet, lasting sign of resistance.' } },
      { kind: 'how', fits: [3], t: { en: 'They ran away and built free towns that allied with the Dutch' },
        why: { en: 'Marronage built runaway communities. Palmares allied with the Dutch against the Portuguese.' } },
      { kind: 'how', fits: [], t: { en: 'They asked the ruler politely and waited for change' },
        why: { en: 'Not true for any of these. They resisted with wars, revolts, flight and protest.' } }
    ],
    mismatch: { en: 'That is true, but not for the movement you picked.' },
    success: { en: 'Invaded, enslaved, or squeezed by a king: people everywhere resisted growing states. Some fought wars, some ran away, some protested with a hairstyle.' }
  },
  boss: {
    at: [28, 19], stat: 'mov', need: 3,
    name: { en: 'The Void' },
    appear: { en: 'The Void waits at the edge of the cornfields. Nothing moves.' },
    taunt: { en: 'Powerful states write the history. Why remember the people who resisted them?' },
    win: { en: 'The Void closes over the river valley. Chronicle page 4.6 floats down into your hands.' },
    questions: [
      {
        stim: { text: { en: '"Most forms of this struggle stop well short of outright collective defiance. Here I have in mind the ordinary weapons of relatively powerless groups: foot dragging, dissimulation, desertion, false compliance, pilfering, feigned ignorance..."' }, src: { en: 'Historian James Scott, quoted in "State Centralization and Resistance," World History Project' } },
        q: { en: 'The historian\'s point of view in the excerpt best supports the claim that...' },
        choices: [{ en: 'resistance often took forms short of open revolt' }, { en: 'peasants seldom resisted those who taxed them' }, { en: 'organized revolts were the most common resistance' }, { en: 'elites led most resistance to centralizing states' }],
        answer: 0,
        why: { en: 'Scott calls the struggle constant but says most of it stopped short of outright collective defiance: slow work, false compliance, desertion, theft. That is everyday resistance.' }
      },
      {
        stim: { text: { en: 'Settlers tried to force the local populations to work for them, often by taking their land and depriving them of the ability to live independently. Meanwhile, priests often tried to force the Pueblo to abandon their own religious practices.' }, src: { en: 'Adapted from "State Centralization and Resistance," World History Project' } },
        q: { en: 'The conditions described in the excerpt most directly contributed to which development?' },
        choices: [{ en: 'The Pueblo Revolt of 1680' }, { en: 'The Fronde of 1648' }, { en: 'Takyi\'s rebellion of 1760' }, { en: 'Joseon\'s support for the Ming' }],
        answer: 0,
        why: { en: 'Land seizures, forced labor and pressure on Pueblo religion led Pueblo religious leaders like Popé to organize the revolt of 1680.' }
      },
      {
        stim: { text: { en: 'Popé and his followers set a goal to expel the Spanish and restore the old order. The victorious Popé ordered that everyone return to their traditional religion and abandon any Spanish culture.' }, src: { en: 'Adapted from "State Centralization and Resistance," World History Project' } },
        q: { en: 'Popé\'s order most directly reflects which goal of the revolt?' },
        choices: [{ en: 'restoring Pueblo ways from before Spanish rule' }, { en: 'blending Pueblo and Catholic religious practice' }, { en: 'allying with the Dutch against the Spanish crown' }, { en: 'extending Pueblo rule south over New Spain' }],
        answer: 0,
        why: { en: 'The goal was to expel the Spanish and restore the old order, so Popé ordered a return to traditional religion. The Dutch alliance belongs to Palmares in Brazil.' }
      },
      {
        stim: { text: { en: 'Needing more tax money for costly wars, the regent Anne of Austria and Cardinal Mazarin sold government positions, and the aristocratic titles that went with them, to the highest bidders.' }, src: { en: 'Adapted from "State Centralization and Resistance," World History Project' } },
        q: { en: 'Which of the following best explains why land-owning lords opposed the policy described above?' },
        choices: [{ en: 'It cut their power and made new aristocrats' }, { en: 'It raised taxes on peasants who then revolted' }, { en: 'It forced nobles to fight wars against the Qing' }, { en: 'It ended the regency of Anne of Austria' }],
        answer: 0,
        why: { en: 'The lords disliked new aristocrats, losing access to tax money and losing power. In 1648 they revolted: the Fronde, a civil war between crown and nobility.' }
      },
      {
        stim: { title: { en: 'Two challenges to state power' }, rows: [[{ en: 'Feature' }, { en: 'Pueblo Revolt' }, { en: 'The Fronde' }], [{ en: 'Who resisted' }, { en: 'Pueblo towns, with Apache and Navajo recruits' }, { en: 'Land-owning French nobles' }], [{ en: 'Resisted whom' }, { en: 'Spanish settlers, priests and soldiers' }, { en: 'Their own king\'s government' }], [{ en: 'Outcome' }, { en: 'Spanish driven off; region later retaken' }, { en: 'Crown back in charge by 1653' }]], src: { en: 'From "State Centralization and Resistance," World History Project' } },
        q: { en: 'Which of the following best describes a similarity between the two movements in the table?' },
        choices: [{ en: 'Both resisted a state extending its power over them' }, { en: 'Both were led by religious leaders seeking old ways' }, { en: 'Both left the rebels in lasting, secure control' }, { en: 'Both opposed a foreign colonial empire\'s settlers' }],
        answer: 0,
        why: { en: 'The Pueblos fought colonizers and the nobles fought their own crown, but both pushed back against a growing state. Neither kept lasting control.' }
      },
      {
        stim: { text: { en: 'Even after the Qing dynasty invaded Joseon itself, Joseon aristocrats continued to wear the clothing and hairstyles popular during the Ming dynasty, and did not adopt the long "queue" hairstyle the Qing demanded.' }, src: { en: 'Adapted from "State Centralization and Resistance," World History Project' } },
        q: { en: 'The practice described above most directly reflects...' },
        choices: [{ en: 'Joseon\'s lasting loyalty to the fallen Ming' }, { en: 'Joseon\'s alliance with Japan against the Ming' }, { en: 'Korean nobles\' support for the Qing conquest' }, { en: 'a Qing policy of tolerating Ming styles' }],
        answer: 0,
        why: { en: 'Joseon had been a Ming ally; the Ming helped defend it from Japan in the 1590s. Keeping Ming styles and refusing the queue was quiet resistance to the Qing.' }
      },
      {
        stim: { text: { en: 'In the 1730s, maroons in Jamaica fought the government of that British island colony to a draw. Then, in 1760, Takyi launched a major rebellion that took over several plantations. It was put down only through brute force.' }, src: { en: 'Adapted from "State Centralization and Resistance," World History Project' } },
        q: { en: 'Compared with most resistance in this period, the resistance described above was distinctive because it...' },
        choices: [{ en: 'targeted the whole system of plantation slavery' }, { en: 'aimed at one tax policy, not the whole state' }, { en: 'was led by nobles defending their privileges' }, { en: 'relied only on everyday acts like foot dragging' }],
        answer: 0,
        why: { en: 'Most resistance was against a particular policy. Resistance to European regimes that supported plantation slavery was aimed at the entire system.' }
      },
      {
        q: { en: 'Which of the following best explains why growing states faced resistance between 1450 and 1750?' },
        choices: [{ en: 'Centralized rule brought more taxes, laws and oppression' }, { en: 'States handed power back to regional lords and nobles' }, { en: 'Eurasian empires stopped taxing merchants and elites' }, { en: 'Rulers let every group keep its own customs and faith' }],
        answer: 0,
        why: { en: 'Centralization moved decisions far from the people affected and brought more taxes, more laws and often more oppression, even for some elites.' }
      }
    ]
  },
  learned: [
    { en: 'As states grew more centralized, they brought more taxes, laws and oppression, and many people pushed back with [[resistance|resistance]].' },
    { en: 'In the Pueblo Revolt of 1680, Popé united Pueblo towns against Spanish land seizures, forced labor and religious pressure.' },
    { en: 'Others resisted too: French nobles in the [[fronde|Fronde]], Joseon aristocrats against the Qing, and [[maroon|maroons]] who fled slavery.' }
  ],
  reflect: {
    q: { en: 'AP practice: Explain one similarity or one difference between the Pueblo Revolt and the Fronde as challenges to state power.' },
    starter: { en: 'One difference between the Pueblo Revolt and the Fronde is' }
  }
};
