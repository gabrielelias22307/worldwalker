/* HISTORYWALKER · Episode 3.1 · Empires Expand (AP World Topic 3.1, c. 1450–1750)
   Istanbul, capital of the Ottoman Empire, about 1550 (the reign of Suleiman the Magnificent).
   Content source: Khan Academy, AP World History (World History Project), Unit 3 Lesson "Empires Expand":
   "A Sublime Empire: Ottoman Rule on Land and Sea" (Bennett Sherry), "Gunpowder Empires" (Trevor Getz),
   "The Safavid Empire" (Trevor Getz), "South Asia 1450–1750" (Hannah Archambault), "From Muscovy to the Russian Empire"
   (Trevor Getz), "China Under Ming and Qing Rule" (Trevor Getz), and "Unit 3 Introduction: Land-Based Empires 1450 to 1750"
   (Trevor Getz). World History Project content is CC BY-NC 4.0. Facts here come from those readings. English only, AP level. */
window.EPISODE = {
  id: '3.1',
  realm: 3,
  sol: 'AP 3.1',
  style: 'ottoman',
  weather: { sky: 'clear', time: 'sunset' },
  title: { en: 'Empires Expand' },
  place: { en: 'Istanbul, Ottoman Empire, 1550' },
  intro: [
    { en: 'The Void blurred the page on the gunpowder empires. Istanbul is forgetting how the Ottomans rose and ruled!' },
    { en: 'Talk to the 4 people here and read the 2 sources on their stands. Help a young mapmaker, then wake the time stone.' }
  ],
  scenes: {
    at: [28.98, 41.01],
    year: 1550,
    start: [
      { en: 'In 1453, Sultan Mehmet II took Constantinople and made it his capital, Istanbul.' },
      { en: 'By 1550 the Ottoman Empire stretched from the Indian Ocean, across the Mediterranean, into Eastern Europe.' },
      { en: 'Its sultan is Suleiman the Magnificent, who rules from 1520 to 1566.' }
    ],
    guess: {
      q: { en: 'Constantinople\'s walls were once thought impossible to break. How did the Ottomans break them in 1453?' },
      choices: [{ t: { en: '💥 Huge cannon' }, ok: true }, { t: { en: '🐘 War elephants' } }],
      why: { en: 'Giant gunpowder cannon broke the city walls. That victory launched two centuries of Ottoman conquests.' }
    },
    page: { en: 'The Ottoman Empire began expanding in 1299 and lasted until 1922: a run of 623 years.' },
    next: {
      q: { en: 'Next: Empires: Administration. Did rulers use paid officials to run their huge lands?' },
      choices: [{ t: { en: 'Yes, bureaucracies' }, ok: true }, { t: { en: 'No, only armies' } }],
      why: { en: 'Rulers built bureaucracies of paid officials to tax and govern. You see how in Episode 3.2.' }
    }
  },
  start: [14, 9],
  map: [
    '================================',
    '=~~~~~k~~~~~~~~~~~~~~k~~~~~~~===',
    '=~~~~~k~~~~~~~~~~~~~~k~~~~~~~===',
    'TWssssssssssssssssssssssssss~~==',
    'TW..RRRR.....RRR....x.DDDDD..~==',
    'TW..hhdh.....hdh......DDDDD..~==',
    'TW....................DDdDD..~==',
    'TW..........x.......lllllll..~==',
    'TWllllllllllllllllllllllllll.~==',
    'TW.....,......l......,....l..~==',
    'TW..T.........l...........l..~==',
    'TW..DDDDD.....l...........l..~==',
    'TW..DDDDD.....l..mlmlmlm..l..~==',
    'TW..DDdDD.....llllllllllllll.kk=',
    'TW..::::::....l..mlmlmlm..l..~==',
    'TW.....:..RRR.l...........l..~==',
    'TW.RRR.:..hdh.l.x..,......l..~==',
    'TW.hdh.:.....:l:::::::::::l..~==',
    'TWsssssssssssssssssssssssssss~==',
    'TW~~~~~~~~~~~~~~~~~~~~~~~~~~~===',
    'T===============================',
    '================================'
  ],
  words: {
    'gunpowder empire': { en: 'a large state whose rulers used guns and cannon to expand and control their land, like the Ottoman, Safavid and Mughal empires' },
    'sultan': { en: 'the title of the Ottoman ruler, who held both political and spiritual power' },
    'janissary': { en: 'a soldier of the sultan\'s elite corps, trained from boyhood and loyal only to him' },
    'devshirme': { en: 'the Ottoman system of taking Christian boys from Balkan families, converting them to Islam and training them to serve the sultan' },
    'centralized': { en: 'with power gathered in the hands of the ruler and his government, not spread among nobles' },
    'caliph': { en: 'the leader of Sunni Islam; Ottoman sultans claimed this title' },
    'sunni': { en: 'the largest branch of Islam; the Ottoman Empire was a Sunni state' },
    'shia': { en: 'a branch of Islam that follows Imam Ali; the Safavid Empire made it the state religion' },
    'safavid': { en: 'the Shi\'a empire in Persia, founded by Ismail I in 1501, a rival of the Ottomans' },
    'millet': { en: 'a religious community, like Christians or Jews, allowed to run many of its own affairs inside the Ottoman Empire' },
    'qadi': { en: 'a Muslim religious judge who helped the sultan rule' },
    'bureaucracy': { en: 'a large group of officials paid by the central government to tax and run the state' },
    'sipahi': { en: 'an Ottoman noble horseman who served the state each year in return for the right to tax an area' },
    'hajj': { en: 'the pilgrimage to Mecca that Muslims try to make' }
  },
  npcs: [
    {
      x: 9, y: 6, name: { en: 'Yusuf' }, role: { en: 'Janissary soldier' },
      look: { skin: 1, hair: '#6b4a2b', shirt: '#2a4a8a', pants: '#e8e0d0', hat: '#f2ece0', style: 'short' },
      lines: [
        { en: 'I am a [[janissary|janissary]], a soldier of the sultan\'s elite corps. Sultan Murad I (r. 1362–1389) first built our musket-armed corps of enslaved soldiers, loyal only to him.' },
        { en: 'Under the [[devshirme|devshirme]], the state forced my Christian family in the Balkans to give me up as a boy. I was converted to Islam and trained for years.' },
        { en: 'The best boys become government officials or janissaries. Trained so young, we are fiercely loyal to the sultan.' },
        { en: 'Some of us are granted land for good service. When we die, it cannot pass to our children. It goes back to the sultan.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Which feature of the devshirme system best explains why it kept power in the sultan\'s hands?' },
        choices: [
          { ok: true, t: { en: 'Land granted for service went back to the sultan' }, why: { en: 'Yes. With no land to pass on to their children, janissaries and officials could not grow into a hereditary nobility.' } },
          { t: { en: 'Boys were taken from Christian families in the Balkans' }, why: { en: 'True, but where they came from is not why power stayed central. Their loyalty and their lack of inherited land were.' } },
          { t: { en: 'Janissaries were armed with muskets and cannon' }, why: { en: 'Guns made them strong, but guns alone could make them a danger. Their training and the land rule kept them tied to the sultan.' } }
        ]
      }
    },
    {
      x: 18, y: 6, name: { en: 'Mustafa' }, role: { en: 'Court clerk' },
      look: { skin: 3, hair: '#1b1410', shirt: '#7a2a2a', robe: true, hat: '#f2ece0', style: 'short' },
      lines: [
        { en: 'I keep records for the [[qadi|qadi]], a religious judge. Our strong legal system helps the sultan\'s agents tax and govern efficiently.' },
        { en: 'Unlike Europe, we have no permanent nobility that owns huge lands. Power is [[centralized|centralized]] in the sultan, and provincial governors manage his far-flung lands.' },
        { en: 'Promotion here is mostly by merit. Many in the ruling class were once enslaved. Paid officials like me, a [[bureaucracy|bureaucracy]], keep this empire running.' },
        { en: 'In 1517 Selim I took Egypt, Mecca and Medina. So our sultan claims to be [[caliph|caliph]], leader of [[sunni|Sunni]] Islam. That unites us against Christian states and the Shi\'a Safavids.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Compared with kings in Europe, why could Ottoman nobles rarely challenge the sultan?' },
        choices: [
          { ok: true, t: { en: 'The empire lacked a permanent landed aristocracy' }, why: { en: 'Yes. In Europe nobles owned huge lands and their people\'s loyalty. Ottoman nobles could not raise armies of their own.' } },
          { t: { en: 'The sultan was the caliph of Sunni Islam' }, why: { en: 'The title helped unite the empire behind the sultan in war, but the key limit on nobles was that they held no permanent lands.' } },
          { t: { en: 'Provincial governors owned the lands they managed' }, why: { en: 'No. Governors managed the sultan\'s lands for him. They did not own them.' } }
        ]
      }
    },
    {
      x: 3, y: 15, name: { en: 'Master Hasan' }, role: { en: 'Cannon founder' },
      look: { skin: 2, hair: '#3a2a1a', shirt: '#5a3a2a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'I cast cannon for the sultan. [[gunpowder empire|Gunpowder]] weapons cost so much that local nobles usually cannot afford them. Only rulers can buy many.' },
        { en: 'In 1453, Sultan Mehmet II\'s great cannon broke the walls of Constantinople. Cannon turn any noble\'s castle walls to rubble.' },
        { en: 'Some say a Hungarian, Master Orban, built those guns. But skilled Turkish cannon-makers worked beside him, and Orban was killed when his own cannon exploded.' },
        { en: 'In 1526 Babur\'s muskets and cannon beat the Sultan of Delhi at Panipat; he founded the Mughal Empire. In 1532 the Russians used them against the Khanate of Crimea.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Which effect of costly gunpowder weapons is most directly shown by the fall of Constantinople\'s walls?' },
        choices: [
          { ok: true, t: { en: 'Walls no longer shielded those who defied a ruler' }, why: { en: 'Yes. Cannon reduced walls to rubble, so nobles and rebels could no longer hide behind them. Power moved to the center.' } },
          { t: { en: 'Ottoman guns depended on European engineers alone' }, why: { en: 'No. That story is doubted now. Skilled Turkish cannon-makers worked beside Orban, and the Ottomans were masters of gunpowder.' } },
          { t: { en: 'Local nobles could now afford their own cannon' }, why: { en: 'No. Gunpowder weapons were so expensive that local nobles usually could not afford them. Rulers could.' } }
        ]
      }
    },
    {
      x: 25, y: 15, name: { en: 'Rivka' }, role: { en: 'Cloth merchant' },
      look: { skin: 0, hair: '#4a2a1a', shirt: '#2a7a6a', robe: true, style: 'long' },
      lines: [
        { en: 'My family fled persecution in Europe and found the sultan\'s protection. Many Jewish refugees came here, and some now serve as officials in the government.' },
        { en: 'Christian and Jewish communities, called [[millet|millets]], keep a level of self-government if we pay taxes and stay loyal. This diversity makes the empire strong.' },
        { en: 'To the east, Shah Ismail I founded the [[safavid|Safavid]] Empire in 1501. His judges made conquered people become [[shia|Shi\'a]]. In Tabriz, up to 20,000 Sunnis were killed for resisting.' },
        { en: 'We are Sunni; they are Shi\'a. Rivals for land, tied to rival branches of Islam, and both armed with guns, our two empires clash again and again.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Compared with the early Safavid Empire, how did the Ottoman Empire treat religious minorities?' },
        choices: [
          { ok: true, t: { en: 'Loyal minorities kept their faith and some self-rule' }, why: { en: 'Yes. Ottoman millets kept their faith and some self-rule. Ismail I\'s Safavids required conquered people to become Shi\'a.' } },
          { t: { en: 'Minorities were required to accept the ruler\'s own faith' }, why: { en: 'No. That was Safavid policy under Ismail I. The Ottomans let loyal Christians and Jews keep their faith.' } },
          { t: { en: 'Minorities were kept out of every government post' }, why: { en: 'No. Many Jewish refugees became Ottoman officials, and many in the ruling class were once enslaved.' } }
        ]
      }
    },
    {
      doc: true, x: 17, y: 5, icon: '📖',
      name: { en: 'Gunpowder Empires' }, role: { en: 'Reading' },
      src: { en: 'Adapted from "Gunpowder Empires" by Trevor Getz, World History Project (Khan Academy)' },
      lines: [
        { en: 'Historians William H. McNeill and Marshall G.S. Hodgson saw three vast Islamic empires rise at about the same time: the Ottoman, the Safavid and the Mughal. Looking for a common cause, they named them "gunpowder empires." Before guns, most Eurasian rulers made deals with local nobles, who governed parts of the kingdom in the ruler\'s name. But the nobles built castles and trained soldiers. Safe behind their walls, they could do what they wanted.' },
        { en: 'Gunpowder changed this. Muskets and cannon were so expensive that only sultans, kings and emperors could pay for many. Cannon reduced castle walls to rubble. Ottoman Sultan Murad I built the janissary corps; Babur used muskets and cannon to defeat the Sultan of Delhi in 1526; Safavid Shah Abbas the Great (r. 1588–1629) gathered 12,000 musketeers and 500 cannon. The Mughal emperor Akbar forbade anyone but the emperor to own cannon.' },
        { en: 'Yet recent historians say the label may mislead. Most armies still relied mainly on swords, spears and bows. These empires rose in the vacuum left by the Mongol collapse in the 1300s and used Mongol tools of rule. Their "political technologies" were ideas and ways of organizing an empire, not physical things: bureaucracies of paid officials, more loyal to the ruler than local nobles were, and alliances with religious leaders, like the Ottoman qadi judges.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Which piece of evidence from the reading best supports the claim that "gunpowder empires" is a misleading label?' },
        choices: [
          { ok: true, t: { en: 'Most armies still relied on swords, spears and bows' }, why: { en: 'Yes. If guns were only part of the fighting, then guns alone cannot explain the empires. Bureaucracy and religion mattered too.' } },
          { t: { en: 'Only rulers could pay for large numbers of muskets and cannon' }, why: { en: 'No. That supports the label: costly guns gave rulers power over nobles.' } },
          { t: { en: 'Akbar forbade anyone else to own cannon' }, why: { en: 'No. That also supports the label: rulers tried to keep guns for themselves.' } }
        ]
      }
    },
    {
      doc: true, x: 23, y: 10, icon: '📜',
      name: { en: 'A Qing Emperor on Trade' }, role: { en: 'Primary source' },
      src: { en: 'The Qianlong Emperor of Qing China, to the British trade envoy Lord Macartney, 1791; quoted in "China Under Ming and Qing Rule," World History Project' },
      lines: [
        { en: '"Our Celestial Empire possesses all things in prolific abundance and lacks no product within its borders."' },
        { en: '"There is therefore no need to import the manufactures of outside barbarians in exchange for our own produce."' },
        { en: 'Far to the east and two centuries after this market\'s day, the Qianlong Emperor (ruled 1735–1796) gave this answer to Lord Macartney, a British envoy who wanted more trade. The Qing were Manchus who took power from the Ming. By 1750 their China was peaceful, fairly prosperous, and larger than ever. The emperor was writing to a foreign trader, as ruler of the "Celestial Empire."' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'The emperor\'s point of view in this source most directly reflects...' },
        choices: [
          { ok: true, t: { en: 'confidence that his empire needed nothing from outside' }, why: { en: 'Yes. He claims China "lacks no product," so it has no need to trade for foreign goods.' } },
          { t: { en: 'eagerness to open Chinese markets to British goods' }, why: { en: 'No. He tells the British envoy there is "no need to import" their goods.' } },
          { t: { en: 'worry that the empire was too poor to feed all its people' }, why: { en: 'No. He says the empire has "all things in prolific abundance."' } }
        ]
      }
    }
  ],
  houses: [
    { at: [6, 5], name: { en: 'Orhan, janissary cook' }, look: { skin: 2, hair: '#2b1d14', shirt: '#2a4a8a', hat: '#f2ece0', style: 'short' },
      lines: [{ en: 'The janissaries eat together, train together and serve only the sultan.' }, { en: 'We carry firearms. But most armies still fight mainly with swords, spears and bows.' }] },
    { at: [14, 5], name: { en: 'Nur, chart copyist' }, look: { skin: 3, hair: '#1b1410', shirt: '#4a6a9a', robe: true, style: 'bun' },
      lines: [{ en: 'Our fleets in the Indian Ocean often frustrate the Portuguese in the Red Sea and Persian Gulf.' }, { en: 'Turkish is the language of government. Arabic is the language of religion. Persian poetry fills the palace.' }] },
    { at: [24, 6], name: { en: 'Davud, palace guard' }, look: { skin: 4, hair: '#1b1410', shirt: '#8a2a2a', hat: '#c9a24a', style: 'short' },
      lines: [{ en: 'No great nobility challenges the sultan. Provincial governors manage his far-off lands.' }, { en: 'Promotion here comes mostly by merit. Many in the ruling class were once enslaved.' }] },
    { at: [6, 13], name: { en: 'Imam Hamza' }, look: { skin: 3, hair: '#8a8a8a', shirt: '#e8e0d0', robe: true, hat: '#f2ece0', style: 'short' },
      lines: [{ en: 'Each year, many Muslim pilgrims from Africa and the Indian Ocean cross the empire on the Hajj to Mecca.' }, { en: 'The sultan protects the holy cities. That places our empire at the heart of Sunni Islam.' }] },
    { at: [11, 16], name: { en: 'Kasim, sipahi horseman' }, look: { skin: 2, hair: '#2b1d14', shirt: '#6a4a2a', pants: '#3a3a3a', style: 'short' },
      lines: [{ en: 'I am a sipahi. Each year I serve the sultan in his wars.' }, { en: 'In return, I may tax the villages of my area. That keeps me tied to the sultan.' }] },
    { at: [4, 17], name: { en: 'Old Bayram' }, look: { skin: 1, hair: '#b0b0b0', shirt: '#4a5a3a', style: 'short' },
      lines: [{ en: 'A story says a Hungarian, Orban, built the cannon that took Constantinople.' }, { en: 'But Turkish cannon-makers were skilled too. Orban himself died when his own cannon exploded.' }] }
  ],
  signs: [
    { x: 20, y: 4, text: { en: 'THE SULTAN\'S PALACE · Suleiman the Magnificent rules here, 1520–1566.' } },
    { x: 12, y: 7, text: { en: 'ISTANBUL · Once Constantinople, capital of the Byzantine emperors. Ottoman capital since 1453.' } },
    { x: 16, y: 16, text: { en: 'MARKET · Spices and luxury goods from the Indian Ocean trade.' } }
  ],
  finds: [
    { clueAt: [9, 10], at: [11, 9], decor: 'coinold', clue: { en: 'From this note, walk 2 steps east and 1 step north.' },
      text: { en: 'An old coin! Taxes paid for the sultan\'s cannon, soldiers and officials.' } }
  ],
  scraps: [[2, 4], [28, 4], [2, 18]],
  smudges: [[10, 10], [22, 16]],
  quest: {
    stat: 'mov',
    title: { en: 'The Torn World Map' },
    giver: {
      x: 12, y: 3, name: { en: 'Kemal' }, role: { en: 'Mapmaker\'s apprentice' },
      look: { skin: 2, hair: '#1b1410', shirt: '#3a6a5a', pants: '#e8e0d0', style: 'short' },
      lines: [
        { en: 'I copy sea charts for the navy. Our fleets challenge Spain and Venice in the Mediterranean, and the Portuguese in the Indian Ocean.' },
        { en: 'The Void\'s Ink Thief tore my copy of Piri Reis\'s 1513 world map! Ask the ferryman at the east dock. He sees everything.' }
      ],
      wait: { en: 'The ferryman works at the dock on the east shore, just south of the main street.' },
      thanks: { en: 'My map is whole! Piri Reis made the first Ottoman map to show the Americas. Thank you.' }
    },
    contact: {
      x: 28, y: 12, name: { en: 'Ali' }, role: { en: 'Ferryman' },
      look: { skin: 4, hair: '#1b1410', shirt: '#8a6a3a', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'Merchants bring spices and luxury goods from the Indian Ocean. The Ottomans control the routes linking Europe to the Indian Ocean.' },
        { en: 'I saw the thief tear the map in three! Follow each clue, one piece at a time.' }
      ]
    },
    action: {
      type: 'chase',
      at: [9, 18],
      hops: [[24, 17], [16, 18]],
      name: { en: 'The Ink Thief' },
      taunt: { en: 'The Void wants this map gone. Without maps, who remembers how far the empire reached?' },
      clues: [
        { t: { en: 'Spices from the Indian Ocean are sold in Istanbul. Piece 1 is between the market stalls, south of the main street.' },
          zones: [{ x: 18, y: 12, w: 5, h: 1 }, { x: 18, y: 14, w: 5, h: 1 }],
          noBy: [{ x: 20, y: 7, w: 7, h: 1, t: { en: 'This is the palace gate. Spices are sold in the market, south of the main street.' } }],
          found: { en: 'Piece 1! Indian Ocean goods made Istanbul rich.' } },
        { t: { en: 'Ottoman fleets challenge Venice and Spain at sea. Piece 2 blew onto a wooden dock on the harbor, in the north.' },
          zones: [{ x: 6, y: 1, w: 1, h: 2 }, { x: 21, y: 1, w: 1, h: 2 }],
          noBy: [{ x: 2, y: 9, w: 2, h: 3, t: { en: 'These are the land walls in the west, far from the ships. Go north to the harbor docks.' } }],
          found: { en: 'Piece 2! The Ottomans were a land empire with a strong navy too.' } },
        { t: { en: 'Pilgrims cross the empire on the Hajj to Mecca, which the sultan protects. Piece 3 is on the caravan path by the south shore.' },
          zones: [{ x: 15, y: 17, w: 11, h: 1 }],
          noBy: [{ x: 2, y: 3, w: 4, h: 1, t: { en: 'This is the harbor shore in the north. The caravan path runs along the south shore.' } }],
          found: { en: 'Piece 3! Pilgrims crossing the empire tied it to the wider Muslim world.' } }
      ],
      win: { en: 'You caught the thief by the sea! All three pieces of the map are back.' },
      item: { icon: '🗺️', name: { en: 'Kemal\'s world map' } }
    }
  },
  challenge: {
    at: [19, 10], type: 'order', stat: 'pla',
    title: { en: 'Rebuild the rise' },
    intro: { en: 'Empires like this one grew in the space left when the Mongol Empire collapsed. The Void scrambled the Ottoman rise. Put it in order, oldest first.' },
    items: [
      { icon: '🏕️', t: { en: '1299: Osman\'s Turkish tribe begins to expand in Anatolia' } },
      { icon: '⚔️', t: { en: '1362–1389: Sultan Murad I builds the janissaries, enslaved soldiers loyal only to him' } },
      { icon: '💥', t: { en: '1453: Mehmet II\'s cannon break the walls of Constantinople' } },
      { icon: '🛡️', t: { en: '1501: Ismail I founds the Shi\'a Safavid Empire in Persia, a rival to the east' } },
      { icon: '🕋', t: { en: '1517: Selim I conquers Egypt and the holy cities of Mecca and Medina' } },
      { icon: '👑', t: { en: '1520–1566: Suleiman conquers Mesopotamia and lays siege to Vienna' } }
    ],
    why: { en: 'Osman\'s tribe (1299), Murad\'s janissaries (1300s), Constantinople (1453), the Safavids (1501), Mecca (1517), then Suleiman (1520).' },
    success: { en: 'The rise is in order! Historians call the Ottoman, Safavid and Mughal states "gunpowder empires." But officials and faith mattered as much as guns.' }
  },
  boss: {
    at: [27, 5], stat: 'hei', need: 3,
    name: { en: 'The Void' },
    appear: { en: 'The Void has opened by the palace walls. The cannon smoke drifts into it.' },
    taunt: { en: 'Walls fell to cannon. Empires will fall to me. Every sultan ends in the dark.' },
    win: { en: 'The Void closes over Istanbul. The page on expanding empires floats into your hands.' },
    questions: [
      {
        stim: { text: { en: '"Our Celestial Empire possesses all things in prolific abundance and lacks no product within its borders. There is therefore no need to import the manufactures of outside barbarians in exchange for our own produce."' }, src: { en: 'The Qianlong Emperor of Qing China to Lord Macartney, 1791; quoted in "China Under Ming and Qing Rule," World History Project' } },
        q: { en: 'Compared with the Qing view of trade in the excerpt, the Ottoman Empire of the 1500s...' },
        choices: [{ en: 'controlled trade routes from Europe to the Indian Ocean' }, { en: 'closed its ports to keep out all foreign merchant ships' }, { en: 'had to buy its spices from Portuguese traders' }, { en: 'banned Persian poetry from the sultan\'s palace' }],
        answer: 0,
        why: { en: 'The emperor saw no need for foreign goods. The Ottomans grew rich as a crossroads: Indian Ocean spices came to Istanbul along routes they controlled.' }
      },
      {
        stim: { text: { en: 'Safavid Shah Abbas the Great assembled a force of 12,000 musketeers and 500 cannon. The Mughal ruler Akbar forbade anyone but the emperor from owning cannon.' }, src: { en: 'Adapted from "Gunpowder Empires," World History Project' } },
        q: { en: 'The actions described in the excerpt most directly reflect which goal shared by these rulers?' },
        choices: [{ en: 'Making Shi\'a Islam the faith of every subject' }, { en: 'Keeping gunpowder weapons in rulers\' hands' }, { en: 'Defending their lands against Mongol invaders' }, { en: 'Arming local nobles to guard the frontiers' }],
        answer: 1,
        why: { en: 'Rulers monopolized costly guns. Cannon broke nobles\' walls, so holding the guns kept power at the center.' }
      },
      {
        stim: { text: { en: 'These new "political technologies" weren\'t physical things. Instead, they were ideas and ways of organizing the empire that allowed a central government to rule a big area.' }, src: { en: 'Adapted from "Gunpowder Empires," World History Project' } },
        q: { en: 'Which Ottoman practice is the best example of a "political technology" as described in the excerpt?' },
        choices: [{ en: 'Casting giant cannon to break city walls' }, { en: 'Building fleets to challenge Venice and Spain' }, { en: 'Relying on paid officials and qadi judges' }, { en: 'Letting nobles pass their castles to their sons' }],
        answer: 2,
        why: { en: 'A bureaucracy and an alliance with religious judges are ways of organizing rule, not things. Cannon and ships are physical; Ottoman land went back to the sultan.' }
      },
      {
        stim: { text: { en: 'The Ottomans forced Christian families in the Balkans to give up their sons. The boys were converted to Islam and trained. Land granted to them for service returned to the sultan when they died.' }, src: { en: 'Adapted from "A Sublime Empire: Ottoman Rule on Land and Sea," World History Project' } },
        q: { en: 'The system described was most directly intended to...' },
        choices: [{ en: 'spread Christianity among Balkan villagers' }, { en: 'create a class of nobles with inherited estates' }, { en: 'replace the qadi judges with trained soldiers' }, { en: 'keep a hereditary nobility from rising' }],
        answer: 3,
        why: { en: 'The devshirme made servants loyal only to the sultan, and their land could not pass to their children, so no hereditary nobility could challenge him.' }
      },
      {
        stim: { title: { en: 'Two rival empires' }, rows: [[{ en: 'Feature' }, { en: 'Ottoman Empire' }, { en: 'Safavid Empire' }], [{ en: 'Branch of Islam' }, { en: 'Sunni' }, { en: 'Shi\'a' }], [{ en: 'Rise' }, { en: 'From 1299, Osman\'s tribe' }, { en: 'From 1501, Ismail I' }], [{ en: 'Religious minorities' }, { en: 'Millets keep their faith if loyal' }, { en: 'Required to become Shi\'a' }]], src: { en: 'From "A Sublime Empire" and "Gunpowder Empires," World History Project' } },
        q: { en: 'Which of the following best explains the frequent wars between these two empires?' },
        choices: [{ en: 'Rivalry for land, joined to rival branches of Islam' }, { en: 'A shared plan to restore the Mongol Empire' }, { en: 'Safavid efforts to free the Christians of the Balkans' }, { en: 'A dispute over who would rule Mughal India' }],
        answer: 0,
        why: { en: 'The two states were rivals for territory and were tied to rival branches of Islam, Sunni and Shi\'a. Both had gunpowder weapons, so they clashed again and again.' }
      },
      {
        stim: { text: { en: 'Each of these empires emerged in a vacuum left behind by the fourteenth-century collapse of the Mongol Empire. But they also relied on the tools of governance developed by the Mongols.' }, src: { en: 'Adapted from "Gunpowder Empires," World History Project' } },
        q: { en: 'Which of the following was a continuity from the Mongol Empire to the empires that followed it?' },
        choices: [{ en: 'Rule of all Eurasia by a single khan' }, { en: 'Bureaucracies of officials paid to rule' }, { en: 'Reliance on nobles safe in their castles' }, { en: 'A shared Shi\'a faith across the empires' }],
        answer: 1,
        why: { en: 'The new empires replaced the Mongols but kept Mongol tools of rule, starting with bureaucracy: officials paid by the central government.' }
      },
      {
        stim: { title: { en: 'Ottoman expansion' }, rows: [[{ en: 'Year' }, { en: 'Event' }], [{ en: '1453' }, { en: 'Mehmet II takes Constantinople' }], [{ en: '1517' }, { en: 'Selim I conquers Egypt, Mecca and Medina' }], [{ en: '1520–1566' }, { en: 'Suleiman conquers Mesopotamia and besieges Vienna' }]], src: { en: 'From "A Sublime Empire: Ottoman Rule on Land and Sea," World History Project' } },
        q: { en: 'The 1517 conquest in the table best supports the claim that the sultan\'s power was...' },
        choices: [{ en: 'inherited from the Byzantine emperors' }, { en: 'shared with Christian and Jewish millets' }, { en: 'religious as well as political' }, { en: 'limited by the Safavid shahs of Persia' }],
        answer: 2,
        why: { en: 'Holding Mecca and Medina backed the sultan\'s claim to be caliph, leader of Sunni Islam. His rule was spiritual as well as political.' }
      },
      {
        q: { en: 'Compared with Mehmet II\'s capture of Constantinople in 1453, Babur\'s victory over the Sultan of Delhi in 1526 was similar because both rulers...' },
        choices: [{ en: 'ended a Christian empire in the Mediterranean' }, { en: 'used gunpowder weapons to build an empire' }, { en: 'were Safavid shahs who ruled from Persia' }, { en: 'won by hiring a Hungarian cannon-maker' }],
        answer: 1,
        why: { en: 'Mehmet II\'s cannon broke Constantinople\'s walls; Babur\'s muskets and cannon beat the Sultan of Delhi and founded the Mughal Empire.' }
      }
    ]
  },
  learned: [
    { en: 'Costly [[gunpowder empire|gunpowder]] weapons let rulers like Mehmet II and Babur break walls, beat rivals and take power from nobles.' },
    { en: 'The Ottoman sultans kept power [[centralized|centralized]] with the [[devshirme|devshirme]], loyal [[janissary|janissaries]], a [[bureaucracy|bureaucracy]] and the title of [[caliph|caliph]].' },
    { en: 'The Sunni Ottomans let loyal [[millet|millets]] keep their faith; the rival [[safavid|Safavids]] forced conversion to [[shia|Shi\'a]] Islam.' }
  ],
  reflect: {
    q: { en: 'AP practice: Explain one way the Ottoman sultans kept power centralized in their own hands.' },
    starter: { en: 'One way the Ottoman sultans kept power centralized was' }
  }
};
