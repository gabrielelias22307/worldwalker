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
    { en: 'The Grump blurred the page on the gunpowder empires. Istanbul is forgetting how the Ottomans rose and ruled!' },
    { en: 'Talk to the 4 people here, help a young mapmaker, then wake the time stone.' }
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
        { en: 'I am a [[janissary|janissary]], a soldier of the sultan\'s elite corps. Sultan Murad I first built our corps of enslaved soldiers.' },
        { en: 'Under the [[devshirme|devshirme]], I was taken as a boy from my Christian family in the Balkans. I was made Muslim and trained for years.' },
        { en: 'The best of us become janissaries or officials. Land granted for service goes back to the sultan when we die, not to our children.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why did the devshirme make janissaries so loyal to the sultan?' },
        choices: [
          { ok: true, t: { en: 'They owed everything to the sultan alone' }, why: { en: 'Yes. Taken young and trained by the state, they had no noble family or inherited land to turn to.' } },
          { t: { en: 'They were nobles who owned their castles' }, why: { en: 'No. The system was built to avoid a class of nobles who could challenge the sultan.' } },
          { t: { en: 'They were paid by the Balkan churches' }, why: { en: 'No. They were converted to Islam and served the sultan, who rewarded them.' } }
        ]
      }
    },
    {
      x: 18, y: 6, name: { en: 'Mustafa' }, role: { en: 'Court clerk' },
      look: { skin: 3, hair: '#1b1410', shirt: '#7a2a2a', robe: true, hat: '#f2ece0', style: 'short' },
      lines: [
        { en: 'I keep records for the [[qadi|qadi]], a religious judge. Our strong legal system helps the sultan tax and govern efficiently.' },
        { en: 'Since Selim I took Egypt, Mecca and Medina in 1517, our sultan also claims the title [[caliph|caliph]], leader of [[sunni|Sunni]] Islam.' },
        { en: 'Guns win battles. But paid officials like me, a [[bureaucracy|bureaucracy]], keep this huge, [[centralized|centralized]] empire running.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Besides guns, what helped the sultans rule such a huge empire?' },
        choices: [
          { ok: true, t: { en: 'Paid officials and ties to religious leaders' }, why: { en: 'Yes. A bureaucracy and an alliance with religion, like the qadi judges, were "political technologies" that held the empire together.' } },
          { t: { en: 'Powerful nobles who ruled in their own name' }, why: { en: 'No. The Ottoman system was designed to limit nobles. Power was centralized in the sultan.' } },
          { t: { en: 'One faith that every subject had to follow' }, why: { en: 'No. Christians and Jews lived in the empire and kept their faith if they stayed loyal.' } }
        ]
      }
    },
    {
      x: 3, y: 15, name: { en: 'Master Hasan' }, role: { en: 'Cannon founder' },
      look: { skin: 2, hair: '#3a2a1a', shirt: '#5a3a2a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'I cast cannon for the sultan. [[gunpowder empire|Gunpowder]] weapons cost so much that only rulers can buy many of them.' },
        { en: 'In 1453, Sultan Mehmet II\'s great cannon broke the walls of Constantinople. Cannon turn any noble\'s castle walls to rubble.' },
        { en: 'Traders say a ruler named Babur used cannon and muskets to beat the Sultan of Delhi in 1526. He founded the Mughal Empire in India.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'How did gunpowder change the balance between rulers and local nobles?' },
        choices: [
          { ok: true, t: { en: 'Rulers bought cannon that broke nobles\' walls' }, why: { en: 'Yes. Costly cannon gave rulers an edge that nobles could not match, so power moved to the center.' } },
          { t: { en: 'Nobles bought more guns than any ruler could' }, why: { en: 'No. Gunpowder weapons were so expensive that local nobles usually could not afford them.' } },
          { t: { en: 'Castles grew stronger and harder to capture' }, why: { en: 'No. Cannon reduced castle walls to rubble, so nobles could no longer hide behind them.' } }
        ]
      }
    },
    {
      x: 25, y: 15, name: { en: 'Rivka' }, role: { en: 'Cloth merchant' },
      look: { skin: 0, hair: '#4a2a1a', shirt: '#2a7a6a', robe: true, style: 'long' },
      lines: [
        { en: 'My family fled persecution in Europe and found the sultan\'s protection here. Some of our people even serve as officials.' },
        { en: 'Christian and Jewish communities, called [[millet|millets]], run many of their own affairs here, if we pay taxes and stay loyal.' },
        { en: 'Persian traders say the [[safavid|Safavid]] shahs, rulers since 1501, force their people to become [[shia|Shi\'a]] Muslims. Here we keep our faith.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Compared with the Safavid Empire, how did the Ottomans treat religious minorities?' },
        choices: [
          { ok: true, t: { en: 'They let loyal minorities keep their faith' }, why: { en: 'Yes. Ottoman millets kept their faith and some self-rule. The Safavids required conversion to Shi\'a Islam.' } },
          { t: { en: 'They forced everyone to become Shi\'a Muslims' }, why: { en: 'No. That was Safavid policy. The Ottomans were Sunni and let minorities govern many of their own affairs.' } },
          { t: { en: 'They banned Jews and Christians from the land' }, why: { en: 'No. Christians and Jews lived in the empire, and Jewish refugees came seeking the sultan\'s protection.' } }
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
        { en: 'The Grump\'s Ink Thief tore my copy of Piri Reis\'s 1513 world map! Ask the ferryman at the east dock. He sees everything.' }
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
      taunt: { en: 'The Grump wants this map gone. Without maps, who remembers how far the empire reached?' },
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
    intro: { en: 'Empires like this one grew in the space left when the Mongol Empire collapsed. The Grump scrambled the Ottoman rise. Put it in order, oldest first.' },
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
    name: { en: 'The Smoke Grump' },
    appear: { en: 'The Smoke Grump is hiding by the palace walls!' },
    taunt: { en: 'Cannon, sultans, caliphs... I will blow smoke over the whole empire.' },
    win: { en: 'The smoke clears over Istanbul. The page on expanding empires floats into your hands!' },
    questions: [
      {
        stim: { text: { en: 'Gunpowder weapons were so expensive that local nobles usually could not afford them. Only sultans, kings and emperors could pay for large numbers of muskets and cannon.' }, src: { en: 'Adapted from "Gunpowder Empires," World History Project' } },
        q: { en: 'The excerpt best explains which development of the 1400s and 1500s?' },
        choices: [{ en: 'Rulers gained power over local nobles' }, { en: 'Nobles built stronger castles to resist' }, { en: 'Peasants overthrew the sultans\' armies' }, { en: 'Trade with Europe came to a halt' }],
        answer: 0,
        why: { en: 'Only rulers could afford many cannon, and cannon broke nobles\' walls. Power became more centralized in the ruler\'s hands.' }
      },
      {
        stim: { text: { en: 'The Ottomans forced Christian families in the Balkans to give up their sons. The boys were converted to Islam and trained; the best became officials or janissaries.' }, src: { en: 'Adapted from "A Sublime Empire: Ottoman Rule on Land and Sea," World History Project' } },
        q: { en: 'The Ottoman state used the system described above mainly to...' },
        choices: [{ en: 'build soldiers and officials loyal to the sultan' }, { en: 'train Christian priests for the Balkan churches' }, { en: 'create a noble class with inherited lands' }, { en: 'pay for the navy that fought Venice and Spain' }],
        answer: 0,
        why: { en: 'The devshirme gave the sultan servants with no noble family to turn to. Their lands went back to him, not to their children.' }
      },
      {
        stim: { title: { en: 'Ottoman expansion' }, rows: [[{ en: 'Year' }, { en: 'Event' }], [{ en: '1453' }, { en: 'Mehmet II takes Constantinople' }], [{ en: '1517' }, { en: 'Selim I conquers Egypt, Mecca and Medina' }], [{ en: '1520–1566' }, { en: 'Suleiman conquers Mesopotamia and besieges Vienna' }]], src: { en: 'From "A Sublime Empire: Ottoman Rule on Land and Sea," World History Project' } },
        q: { en: 'Which event in the table most strengthened the sultan\'s claim to be caliph?' },
        choices: [{ en: 'Taking Mecca and Medina in 1517' }, { en: 'Taking Constantinople in 1453' }, { en: 'Besieging the Habsburg capital, Vienna' }, { en: 'Conquering Mesopotamia under Suleiman' }],
        answer: 0,
        why: { en: 'Holding the holy cities placed the sultan at the heart of Sunni Islam and backed his claim to be caliph.' }
      },
      {
        stim: { text: { en: 'The many Christian and Jewish communities in the empire were permitted to maintain a level of self-governance if they paid taxes and remained loyal to the sultan.' }, src: { en: 'Adapted from "A Sublime Empire: Ottoman Rule on Land and Sea," World History Project' } },
        q: { en: 'Compared with the Safavid Empire, the Ottoman policy above shows that...' },
        choices: [{ en: 'the Ottomans allowed more religious diversity' }, { en: 'both empires forced conversion to Shi\'a Islam' }, { en: 'the Safavids gave minorities more self-rule' }, { en: 'neither empire had any religious minorities' }],
        answer: 0,
        why: { en: 'Ottoman millets kept their faith if loyal. The Safavid shahs required their people to become Shi\'a Muslims.' }
      },
      {
        q: { en: 'Which best explains why the Ottoman, Safavid and Mughal empires all rose in the same era?' },
        choices: [{ en: 'They filled the gap left by the Mongol collapse' }, { en: 'They shared one sultan who ruled all three lands' }, { en: 'They united to drive the Portuguese from Asia' }, { en: 'European kings helped them conquer their lands' }],
        answer: 0,
        why: { en: 'These empires grew in the space left when the Mongol Empire collapsed, and gunpowder helped them expand.' }
      },
      {
        q: { en: 'Some historians say the label "gunpowder empires" can mislead. Which best explains why?' },
        choices: [{ en: 'Officials and faith also held them together' }, { en: 'These empires never used cannon or muskets' }, { en: 'Gunpowder was invented in Europe after 1750' }, { en: 'Only small kingdoms used gunpowder weapons' }],
        answer: 0,
        why: { en: 'Guns mattered, but bureaucracies of paid officials and alliances with religious leaders were just as important.' }
      },
      {
        stim: { text: { en: 'Merchants from the Indian Ocean carried valuable spices and luxury goods to the markets of Istanbul.' }, src: { en: 'Adapted from "A Sublime Empire: Ottoman Rule on Land and Sea," World History Project' } },
        q: { en: 'Which best explains the trade described in the excerpt?' },
        choices: [{ en: 'Ottomans held the Europe–Indian Ocean routes' }, { en: 'The Portuguese ruled the markets of Istanbul' }, { en: 'Chinese treasure fleets sailed to Istanbul' }, { en: 'The sultans banned all trade with outsiders' }],
        answer: 0,
        why: { en: 'With land on three continents, the Ottomans controlled the trade routes linking Europe to the Indian Ocean.' }
      },
      {
        q: { en: 'Mehmet II at Constantinople (1453) and Babur in India (1526) were similar because both...' },
        choices: [{ en: 'used cannon to defeat their rivals' }, { en: 'were Christian kings from Europe' }, { en: 'founded empires on the Pacific coast' }, { en: 'refused to use gunpowder weapons' }],
        answer: 0,
        why: { en: 'Mehmet II\'s cannon broke Constantinople\'s walls; Babur\'s cannon and muskets beat the Sultan of Delhi and began the Mughal Empire.' }
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
