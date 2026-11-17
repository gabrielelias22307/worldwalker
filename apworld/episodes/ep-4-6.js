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
    { en: 'The Grump smeared the page on [[resistance|resistance]]. In Santa Fe, people are forgetting why they push back against growing states.' },
    { en: 'Talk to the 4 people here, help a trader find his book of news, then wake the time stone.' }
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
        { en: 'Centralizing states bring more taxes, more laws and often more oppression. Even nobles can lose power and profits.' },
        { en: 'In France in 1648, lords revolted when the [[regent|regent]] Anne of Austria and Cardinal Mazarin sold noble titles to raise tax money. That civil war was the [[fronde|Fronde]].' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Compared with the Pueblo Revolt, who led the Fronde in France, and why?' },
        choices: [
          { ok: true, t: { en: 'Nobles, to keep their power and tax income' }, why: { en: 'Yes. The Pueblos resisted colonizers. In France, elites resisted a centralizing crown that sold titles to new aristocrats. Too divided, they lost by 1653.' } },
          { t: { en: 'Peasants, to escape a foreign colonial army' }, why: { en: 'No. The Fronde was a civil war between the crown and much of the French nobility, not peasants against colonizers.' } },
          { t: { en: 'Priests, to force a new religion on France' }, why: { en: 'No. The Fronde was about power and tax money. Land-owning lords wanted the old system back.' } }
        ]
      }
    },
    {
      x: 24, y: 9, name: { en: 'Swift Deer' }, role: { en: 'Pueblo runner' },
      look: { skin: 3, hair: '#1b1410', shirt: '#b8562b', pants: '#5a4a3a', style: 'long' },
      lines: [
        { en: 'I carry messages between the Pueblo towns. Spanish priests try to force us to give up our own religion. Our leaders will not let it die.' },
        { en: 'A religious leader named Popé is uniting the towns. He even recruits our Apache and Navajo neighbors. The goal: drive out the Spanish and restore the old order.' },
        { en: 'When one person suffers alone, [[resistance|resistance]] is quiet. When a whole people suffers together, it becomes organized.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'What did Popé want to happen after the Spanish were driven out?' },
        choices: [
          { ok: true, t: { en: 'A return to traditional religion and ways' }, why: { en: 'Yes. In 1680 the revolt drove the Spanish off most Pueblo land. Popé then ordered everyone to return to their traditional religion and abandon Spanish culture.' } },
          { t: { en: 'A blend of Pueblo and Spanish religions together' }, why: { en: 'No. Popé ordered people to abandon any Spanish culture, not to mix it with their own.' } },
          { t: { en: 'A new Pueblo empire ruling over all New Spain' }, why: { en: 'No. The goal was to expel the Spanish from Pueblo lands and restore the old order, not to conquer New Spain.' } }
        ]
      }
    },
    {
      x: 26, y: 15, name: { en: 'Blue Corn' }, role: { en: 'Pueblo farmer' },
      look: { skin: 4, hair: '#1b1410', shirt: '#3a6a8a', pants: '#5a3a2a', style: 'bun' },
      lines: [
        { en: 'My people, the Pueblo, lived in this land long before the Spanish came. We will still be here after them.' },
        { en: 'Beginning in the 1540s, Spanish forces pushed north from New Spain. Waves of settlers followed and took over vast areas of land.' },
        { en: 'They take our land so we cannot live on our own, then force us to work for them. And new diseases spread among us.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why was it hard for Pueblo people to live independently under Spanish rule?' },
        choices: [
          { ok: true, t: { en: 'Settlers seized land and forced their labor' }, why: { en: 'Yes. Without their land, Pueblo families could not live on their own, so settlers could force them to work. That was one cause of the revolt.' } },
          { t: { en: 'The Pueblo had never farmed before the 1540s' }, why: { en: 'No. Blue Corn\'s people lived and farmed here long before the Spanish. The settlers took that land.' } },
          { t: { en: 'Settlers paid them to move south to New Spain' }, why: { en: 'No. Settlers took land and forced Pueblo people to work for them. Nothing was freely chosen.' } }
        ]
      }
    },
    {
      x: 13, y: 17, name: { en: 'Diego' }, role: { en: 'Mule driver' },
      look: { skin: 5, hair: '#1b1410', shirt: '#c9a24a', pants: '#3a3a2a', hat: '#6a4a2a', style: 'short' },
      lines: [
        { en: 'Not all [[resistance|resistance]] is war. People with little power work slowly, pretend to obey, steal or run away. Historians call it [[everyday resistance|everyday resistance]].' },
        { en: 'Enslaved people who escape plantations are [[maroon|maroons]]. Running away, [[marronage|marronage]], denies slavers the labor they depend on.' },
        { en: 'In Brazil, runaways build free towns. Bahia had thirteen. The biggest, Palmares, had as many as 220 buildings in 1645. It even allied with the Dutch against the Portuguese.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why was running away a form of resistance to slavery?' },
        choices: [
          { ok: true, t: { en: 'It took away labor the slavers relied on' }, why: { en: 'Yes. Plantations depended on enslaved labor. Marronage denied it, and maroon towns could attack plantations and free others.' } },
          { t: { en: 'It was the only way to join the Spanish army' }, why: { en: 'No. Maroons escaped to be free, and many built their own communities.' } },
          { t: { en: 'Plantation owners paid people to leave' }, why: { en: 'No. Slavers relied on enslaved labor. Losing it hurt them, which is why running away was resistance.' } }
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
        { en: 'The Grump\'s Ink Thief tore my book of news into three pieces! Ask Grandmother Willow, the potter. She lives across the river, by the Pueblo houses.' }
      ],
      wait: { en: 'Grandmother Willow works south of the river. Cross the west bridge and look by the Pueblo houses.' },
      thanks: { en: 'My book is whole! Pueblo towns, French lords, Korean nobles, Brazilian maroons: all resisted growing states, in very different ways.' }
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
    intro: { en: 'The Grump says no one ever pushed back against powerful states. Pick one movement. Back it up with what it resisted and how it resisted.' },
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
    name: { en: 'The Silent Grump' },
    appear: { en: 'The Silent Grump waits at the edge of the cornfields.' },
    taunt: { en: 'Powerful states write the history. Why remember the people who resisted them?' },
    win: { en: 'The dust settles over the river valley. Chronicle page 4.6 floats down into your hands.' },
    questions: [
      {
        stim: { text: { en: '"...the ordinary weapons of relatively powerless groups: foot dragging, dissimulation, desertion, false compliance, pilfering, feigned ignorance, slander, arson, sabotage, and so on."' }, src: { en: 'Historian James Scott, quoted in "State Centralization and Resistance," World History Project' } },
        q: { en: 'The historian\'s list best describes which kind of resistance?' },
        choices: [{ en: 'Everyday resistance by people with little power' }, { en: 'Large armies fighting to build a new state' }, { en: 'Nobles revolting against a regent in France' }, { en: 'Priests working to convert people to a new faith' }],
        answer: 0,
        why: { en: 'Working slowly, pretending to obey, stealing and running away are everyday resistance: strategies for people with almost no power.' }
      },
      {
        stim: { text: { en: 'Settlers tried to force the local populations to work for them, often by taking their land. Meanwhile, priests often tried to force the Pueblo to abandon their own religious practices.' }, src: { en: 'Adapted from "State Centralization and Resistance," World History Project' } },
        q: { en: 'The excerpt best explains which development?' },
        choices: [{ en: 'The Pueblo Revolt of 1680' }, { en: 'The Fronde in France' }, { en: 'The rise of the Qing dynasty' }, { en: 'Palmares\' alliance with the Dutch' }],
        answer: 0,
        why: { en: 'Land seizures, forced labor and attacks on Pueblo religion led Pueblo leaders like Popé to organize the revolt of 1680.' }
      },
      {
        stim: { text: { en: 'The victorious Popé ordered that everyone return to their traditional religion and abandon any Spanish culture.' }, src: { en: 'Adapted from "State Centralization and Resistance," World History Project' } },
        q: { en: 'Popé\'s order best reflects a goal of...' },
        choices: [{ en: 'restoring the order from before the Spanish' }, { en: 'blending Spanish and Pueblo religions together' }, { en: 'building a Pueblo empire over New Spain' }, { en: 'joining the French nobles in their revolt' }],
        answer: 0,
        why: { en: 'Popé and his followers set out to expel the Spanish and restore the old order, including traditional religion.' }
      },
      {
        stim: { text: { en: 'To bring more tax money directly to the state, the regent and Cardinal Mazarin sold government positions, and the aristocratic titles that went with them, to the highest bidders.' }, src: { en: 'Adapted from "State Centralization and Resistance," World History Project' } },
        q: { en: 'Which group most strongly opposed the policy described above?' },
        choices: [{ en: 'Land-owning French lords' }, { en: 'Enslaved workers in Brazil' }, { en: 'Pueblo religious leaders' }, { en: 'Apache and Navajo allies' }],
        answer: 0,
        why: { en: 'The old lords lost tax money and power, and disliked the new aristocrats. In 1648 they revolted: the Fronde.' }
      },
      {
        q: { en: 'Compared with the Pueblo Revolt, the Fronde was different because it was...' },
        choices: [{ en: 'led by elites defending their own power' }, { en: 'led by enslaved people seeking freedom' }, { en: 'a revolt against a foreign colonizer' }, { en: 'aimed at restoring a traditional religion' }],
        answer: 0,
        why: { en: 'The Pueblos resisted colonizers who took land and attacked their religion. The Fronde was nobles resisting their own centralizing crown.' }
      },
      {
        stim: { text: { en: 'Joseon aristocrats continued to wear the clothing and hairstyles popular during the Ming dynasty, and did not adopt the long "queue" hairstyle the Qing demanded.' }, src: { en: 'Adapted from "State Centralization and Resistance," World History Project' } },
        q: { en: 'The practice described above is best understood as...' },
        choices: [{ en: 'quiet resistance to a new ruling dynasty' }, { en: 'proof that Korea welcomed the Qing' }, { en: 'a revolt of enslaved people seeking freedom' }, { en: 'a Spanish effort to change local culture' }],
        answer: 0,
        why: { en: 'Joseon stayed loyal to the Ming. Keeping Ming styles and refusing the queue was a sign of continued resistance to the Qing.' }
      },
      {
        stim: { title: { en: 'Maroon communities in Bahia, Brazil (1600s)' }, rows: [[{ en: 'Fact' }, { en: 'Number' }], [{ en: 'Runaway communities in Bahia' }, { en: '13' }], [{ en: 'Buildings at Palmares, 1645' }, { en: 'as many as 220' }]], src: { en: 'From "State Centralization and Resistance," World History Project' } },
        q: { en: 'The data best support which claim about marronage?' },
        choices: [{ en: 'Runaways built large, organized communities' }, { en: 'Few enslaved people ever tried to escape' }, { en: 'Portuguese officials ran the maroon towns' }, { en: 'Running away was legal under Portuguese rule' }],
        answer: 0,
        why: { en: 'Thirteen communities in one province and a town of 220 buildings show organized societies. Palmares even had its own alliance with the Dutch.' }
      },
      {
        q: { en: 'Which best explains why growing states faced resistance between 1450 and 1750?' },
        choices: [{ en: 'They raised taxes and laws, ruling from afar' }, { en: 'They gave power back to local lords everywhere' }, { en: 'They stopped collecting taxes from peasants' }, { en: 'They let every group keep its own old ways' }],
        answer: 0,
        why: { en: 'Centralization moved decisions far from the people affected and brought more taxes, more laws and often more oppression.' }
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
