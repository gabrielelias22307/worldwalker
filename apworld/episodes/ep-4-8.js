/* HISTORYWALKER · Episode 4.8 · Continuity and Change from 1450 to 1750 (AP World Topic 4.8, c. 1450–1750)
   The last episode: Amsterdam, capital of the Dutch Republic, in 1700, where the new sea trade of the Dutch
   East India Company meets older merchant networks (Armenian, Jewish) that reach the land-based empires of Asia.
   Content source: Khan Academy, AP World History (World History Project), Unit 4 Lessons "Continuity and Change
   from 1450 to 1750 CE | 4.8" (Unit 4 LEQ and DBQ prompts) and "Unit 4 Overview | 4.0": "Unit 4 Introduction:
   Transoceanic Interconnections 1450 to 1750" (Trevor Getz) and the Unit 4 Overview video page; the CCOT activities
   "CCOT: Land-Based Empires to Transoceanic Interconnections" (4.7) and "CCOT: Networks of Exchange to Land-Based
   Empires" (3.3); "Transformations in Eurasian Belief Systems, 1450–1750" (Amy Elizabeth Robinson, 3.3);
   "Transatlantic Migration Patterns" (Burleigh Hendrickson, 4.7); and for the facts compared:
   "Origins of Oceanic Connections" (Bennett Sherry, 4.2), "The Columbian Exchange" (Eman M. Elshaikh, 4.3),
   "Oceanic Empires, 1450 to 1750" (Jack Bouchard, 4.4), "The Cosmopolitan Indian Ocean, c. 1450–1700"
   (Bennett Sherry, 4.4), "The Transatlantic Slave Trade" (4.4), "Overview of New Economic Systems"
   (Eman M. Elshaikh, 4.5). World History Project content is CC BY-NC 4.0. Facts here come from those readings.
   English only, AP level. Hard history (the Atlantic slave trade, forced labor in the silver mines) is told
   plainly and with care. */
window.EPISODE = {
  id: '4.8',
  realm: 4,
  sol: 'AP 4.8',
  style: 'europe',
  weather: { sky: 'drizzle', time: 'day' },
  title: { en: 'Continuity and Change, 1450–1750' },
  place: { en: 'Amsterdam, Dutch Republic, 1700' },
  intro: [
    { en: 'The Grump blurred the last chronicle page: 1450 to 1750. Amsterdam is forgetting what changed and what stayed the same!' },
    { en: 'Talk to the 4 people here, help a cook get pepper, then wake the time stone.' }
  ],
  scenes: {
    at: [4.90, 52.37],
    year: 1700,
    start: [
      { en: 'In 1700, Amsterdam is a hub of global commerce, the capital of the Dutch Republic.' },
      { en: 'Dutch ships sail to the Indian Ocean, Africa and the Americas.' },
      { en: 'This is the last stop: what changed from 1450 to 1750, and what stayed?' }
    ],
    guess: {
      q: { en: 'Between 1600 and 1800, about what share of the ships in the Eurasian trade were Dutch?' },
      choices: [{ t: { en: '⛵ About half' }, ok: true }, { t: { en: '🛶 One in fifty' } }],
      why: { en: '49 percent! A small republic, newly free of Spain, led the sea trade with new ways of sharing risk.' }
    },
    page: { en: 'The Amsterdam Stock Exchange opened in 1602. Citizens could buy small shares of businesses.' },
    next: {
      q: { en: 'Looking back on 1200–1750: which big change mattered most?' },
      choices: [{ t: { en: '🌊 Oceans linked by ships' }, ok: true }, { t: { en: '🐎 The Mongols uniting Eurasia' } }],
      why: { en: 'Both are fair answers! The Mongols linked Afro-Eurasia by land; ocean voyages joined the whole world. A strong answer gives a why.' }
    }
  },
  start: [15, 9],
  map: [
    '================================',
    '=~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~=',
    '=~~kk~~~~~~~~~kk~~~~~~~~~~kk~~~=',
    'TllllllllllllllllllllllllllllllT',
    'T.RRRR..QQQ...l..DDDDDDDDD..,..T',
    'T.hdhh..hhh...l..DDDDdDDDD..x..T',
    'TllllllllllllllllllllllllllllllT',
    'T.RRR.mmm.....l...RRR...QQQQ...T',
    'T.hdh.........l...hdh...hhdh...T',
    'T.............l..............,.T',
    'T..x....T.....l.......T........T',
    'T~~~~~~~~~~~~~B~~~~~~~~~B~~~~~~T',
    'T.............l.........l..x...T',
    'T.RRRR..QQQ...l..DDDDDDDl.RRR..T',
    'T.hhdh..hhh...l..DDDDDDDl.hdh..T',
    'T.............l..DDDdDDDl......T',
    'TllllllllllllllllllllllllllllllT',
    'T.mmm.mmm.....l.lllllllllllllllT',
    'T.RRR..QQQQ...l.lllllllllllllllT',
    'T.hhh..hhdh...l.lllllllllllllllT',
    'T..,....T.....l.lllllllllllllllT',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT'
  ],
  words: {
    'continuity': { en: 'something that stays the same, or goes on, over a long period of time' },
    'east india company': { en: 'the Dutch East India Company (VOC), a joint-stock company that held a monopoly on Dutch trade with the Indian Ocean' },
    'joint-stock company': { en: 'a company owned by many shareholders, who split its costs, risks and profits' },
    'maritime empire': { en: 'an empire of ports, islands and colonies linked by ships across the oceans' },
    'diaspora': { en: 'a community of people living far from their homeland, often linked by language and trade' },
    'land-based empire': { en: 'a large empire that rules wide lands, like the Ottoman, Safavid and Mughal empires' },
    'columbian exchange': { en: 'the movement of plants, animals, people and diseases between the Americas and Afro-Eurasia after 1492' },
    'plantation': { en: 'a huge farm growing one cash crop, like sugar, worked by forced labor' },
    'atlantic slave trade': { en: 'the forced shipping of about 12.5 million Africans across the Atlantic to be enslaved in the Americas' },
    'protestant reformation': { en: 'the movement, begun by Martin Luther in 1517, that split from the Catholic Church' },
    'sikhism': { en: 'a religion founded by Guru Nanak in northern India in the 1500s; it rejected caste divisions' }
  },
  npcs: [
    {
      x: 13, y: 4, name: { en: 'Jan' }, role: { en: 'Company sailor' },
      look: { skin: 1, hair: '#c9a24a', shirt: '#2a4a7a', pants: '#3a3a2a', hat: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'I sail for the [[east india company|Dutch East India Company]], around Africa to the Indian Ocean. In 1450, no ships linked all the oceans. Now they do.' },
        { en: 'The Company is a [[joint-stock company|joint-stock company]]. Many shareholders split its costs and profits, so one sunken ship ruins no one.' },
        { en: 'It acts like a state: it has armies, mints coins and rules colonies in the East Indies. Yet joint-stock companies are not new. Song China used them around 1000.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why could the small Dutch Republic build a trading empire across the oceans?' },
        choices: [
          { ok: true, t: { en: 'Shareholders split the risk of voyages' }, why: { en: 'Yes. The Netherlands was a small republic, newly free of Spain. Sharing risk made people willing to trust their money to Dutch merchants.' } },
          { t: { en: 'It had the largest army in Eurasia' }, why: { en: 'No. Its strength was ships and finance. Big land empires like the Ottomans had far larger armies.' } },
          { t: { en: 'The Asian empires handed it their lands' }, why: { en: 'No. In Asia, Europeans held only small outposts: ports and islands. The great land empires stayed strong.' } }
        ]
      }
    },
    {
      x: 25, y: 15, name: { en: 'Sarkis' }, role: { en: 'Armenian merchant' },
      look: { skin: 2, hair: '#1b1410', shirt: '#7a2a2a', robe: true, hat: '#3a2a4a', style: 'short' },
      lines: [
        { en: 'My people trade from Manila to London. Couriers carry our letters about prices and who can be trusted. We are a [[diaspora|diaspora]] network.' },
        { en: 'Europeans reached the Indian Ocean, but most goods still move on the old routes. China and India still make more goods than anyone.' },
        { en: 'The great [[land-based empire|land-based empires]], Ottoman, Safavid and Mughal, still rule. Europeans hold only ports and islands, and the Silk Road is beyond their control.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'A 1600s painting of Amsterdam shows Armenian merchants trading among the Dutch. It is best used as evidence of...' },
        choices: [
          { ok: true, t: { en: 'old merchant networks joining the new sea trade' }, why: { en: 'Yes. Diaspora networks like the Armenians linked European companies with the land-based empires of Asia.' } },
          { t: { en: 'Armenians ruling a great state of their own' }, why: { en: 'No. There was no Armenian state then. The Armenians were a network of merchants, not an empire.' } },
          { t: { en: 'Dutch cities closing their ports to foreign traders' }, why: { en: 'No. The painting shows the opposite: foreign merchants at work in Amsterdam\'s busy commerce.' } }
        ]
      }
    },
    {
      x: 11, y: 17, name: { en: 'Neeltje' }, role: { en: 'Grocer' },
      look: { skin: 0, hair: '#8a5a2a', shirt: '#3a7a5a', robe: true, style: 'bun' },
      lines: [
        { en: 'My shop sells sugar, pepper, coffee and potatoes. Potatoes came from the Americas in the [[columbian exchange|Columbian Exchange]]. They grow even in our cold north.' },
        { en: 'Sugar grows on [[plantation|plantations]] in the Americas. After disease killed millions of Native people, planters forced enslaved Africans to do the work.' },
        { en: 'Dutch ships carry captives too. In the [[atlantic slave trade|Atlantic slave trade]], about 12.5 million Africans were taken. About 2.5 million died on the voyage.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Slavery existed long before 1450. What was new about the Atlantic slave trade?' },
        choices: [
          { ok: true, t: { en: 'Its huge scale and its violence' }, why: { en: 'Yes. Its sheer volume and violence set it apart from earlier slavery. It supplied forced labor for sugar and other cash crops.' } },
          { t: { en: 'It was the first slavery in history' }, why: { en: 'No. Slavery existed earlier in history. What changed was the scale and violence of this trade across the Atlantic.' } },
          { t: { en: 'Enslaved people were now paid' }, why: { en: 'No. Enslaved Africans were forced to work without pay, in brutal conditions, and many died.' } }
        ]
      }
    },
    {
      x: 17, y: 9, name: { en: 'Elisabeth' }, role: { en: 'Printer' },
      look: { skin: 1, hair: '#5a3a1a', shirt: '#4a4a6a', robe: true, style: 'long' },
      lines: [
        { en: 'Our presses print ideas of the [[protestant reformation|Protestant Reformation]]. Martin Luther challenged the Catholic Church in 1517, preaching the "priesthood of all believers."' },
        { en: 'Faith split Europe into long religious wars, and the Dutch revolted against the Spanish king. Yet many still lived beside neighbors of other faiths.' },
        { en: 'In India, Guru Nanak founded [[sikhism|Sikhism]], which rejected caste. Some people reached for new faiths; others held tighter to old ones. Beliefs changed, but endured.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Compare: what did Protestants in Europe and Sikhs in India have in common?' },
        choices: [
          { ok: true, t: { en: 'Both challenged religious hierarchies' }, why: { en: 'Yes. Protestants preached the "priesthood of all believers," and Sikhs rejected caste divisions. Both opened faith to ordinary people.' } },
          { t: { en: 'Both were spread by the Ottoman sultans' }, why: { en: 'No. The Ottomans were Sunni Muslims. Protestantism began with Luther in Germany, Sikhism with Guru Nanak in the Punjab.' } },
          { t: { en: 'Both ended religious conflict right away' }, why: { en: 'No. Europe saw long religious wars, and Sikhs later rose in rebellion against the Mughal Empire.' } }
        ]
      }
    }
  ],
  houses: [
    { at: [3, 5], name: { en: 'Sailmaker Dirk' }, look: { skin: 1, hair: '#7a7a7a', shirt: '#6a5a3a', style: 'short' },
      lines: [{ en: 'I sew sails for Company ships bound for the Indies.' }, { en: 'Ocean voyages are dangerous. Some ships never come home.' }] },
    { at: [21, 5], name: { en: 'Company clerk Pieter' }, look: { skin: 0, hair: '#3a2a1a', shirt: '#2a2a3a', robe: true, style: 'short' },
      lines: [{ en: 'The Company holds a monopoly on Dutch trade with the Indian Ocean.' }, { en: 'Shareholders wait here for news of the fleets.' }] },
    { at: [3, 8], name: { en: 'Widow Trijntje' }, look: { skin: 0, hair: '#9a9a9a', shirt: '#2a2a2a', robe: true, style: 'bun' },
      lines: [{ en: 'My husband bought small shares in many businesses.' }, { en: 'If one ship sinks, we do not lose everything.' }] },
    { at: [19, 8], name: { en: 'Mapmaker Lucas' }, look: { skin: 1, hair: '#6a4a2a', shirt: '#5a6a3a', style: 'short' },
      lines: [{ en: 'Our maps use the Mercator projection, made in 1569 to help sailors steer.' }, { en: 'It makes Europe look bigger than it really is.' }] },
    { at: [26, 8], name: { en: 'Merchant Esther' }, look: { skin: 2, hair: '#1b1410', shirt: '#6a3a5a', robe: true, style: 'long' },
      lines: [{ en: 'Like the Armenians, my Jewish family trades through relatives in distant ports.' }, { en: 'Here we live and work beside Protestant and Catholic neighbors.' }] },
    { at: [4, 14], name: { en: 'Banker Maarten' }, look: { skin: 0, hair: '#4a3020', shirt: '#2a4a3a', robe: true, style: 'short' },
      lines: [{ en: 'Bills of exchange let merchants pay without carrying coins.' }, { en: 'Banks built them partly on ideas from south and southwest Asia.' }] },
    { at: [27, 14], name: { en: 'Shopkeeper Aaltje' }, look: { skin: 3, hair: '#2b1d14', shirt: '#b8452a', style: 'bun' },
      lines: [{ en: 'Sugar, pepper and coffee were once too costly to bring to Europe.' }, { en: 'Now shoppers ask for them every day. Demand keeps growing.' }] },
    { at: [20, 15], name: { en: 'Broker Hugo' }, look: { skin: 1, hair: '#2b1d14', shirt: '#4a2a5a', robe: true, hat: '#1a1a1a', style: 'short' },
      lines: [{ en: 'This Exchange opened in 1602. People buy and sell shares here.' }, { en: 'Many more people are traders now, not just a few rich men.' }] },
    { at: [9, 19], name: { en: 'Grandma Marijke' }, look: { skin: 0, hair: '#d0d0d0', shirt: '#5a7a9a', robe: true, style: 'bun' },
      lines: [{ en: 'Before 1492, no one in Europe ate potatoes. They came from the Americas.' }, { en: 'Potatoes grow even in our cold, wet north. They feed many families.' }] }
  ],
  signs: [
    { x: 28, y: 5, text: { en: 'EAST INDIA HOUSE · The Dutch East India Company: shareholders, ships, soldiers and colonies in the East Indies.' } },
    { x: 3, y: 10, text: { en: 'THE HARBOR · Almost half the ships in the Eurasian trade are Dutch.' } },
    { x: 27, y: 12, text: { en: 'DAM SQUARE · The Exchange, opened 1602. Small shares, shared risk.' } }
  ],
  finds: [
    { clueAt: [11, 9], at: [11, 4], decor: 'coinold', clue: { en: 'From this note, walk 5 steps north, toward the harbor.' },
      text: { en: 'A Company coin! The Dutch East India Company could mint its own money, almost like a state.' } }
  ],
  scraps: [[1, 4], [30, 4], [1, 20]],
  smudges: [[12, 12], [20, 9]],
  quest: {
    stat: 'reg',
    title: { en: 'Pepper for the Kitchen' },
    giver: {
      x: 12, y: 15, name: { en: 'Grietje' }, role: { en: 'Cook' },
      look: { skin: 2, hair: '#2b1d14', shirt: '#c0392b', pants: '#4a3a2a', style: 'bun' },
      lines: [
        { en: 'Pepper once reached Europe through many middlemen: Silk Road caravans, Ottoman ports, Italian traders. Each one added a profit, so it was costly.' },
        { en: 'Now ships bring it straight around Africa. But the Grump spoiled my pepper! Ask the boatman at the harbor docks. Boatmen know every cargo.' }
      ],
      wait: { en: 'Cross the canal bridge north, then walk west along the harbor quay to the docks.' },
      thanks: { en: 'Pepper! An old Asian spice, on a new ocean route, paid for with American silver. Old and new, all in one sack. Thank you!' }
    },
    contact: {
      x: 4, y: 2, name: { en: 'Kees' }, role: { en: 'Harbor boatman' },
      look: { skin: 3, hair: '#1b1410', shirt: '#e0d8c0', pants: '#3a3a4a', style: 'short' },
      lines: [
        { en: 'My boat carries cargo from the big ships to the warehouses. Almost half the ships in the Eurasian trade are Dutch!' },
        { en: 'The Company clerk sells pepper. Walk east along the harbor quay to the great East India House. He waits on the street just south of it.' }
      ]
    },
    action: {
      type: 'trade',
      trader: {
        x: 23, y: 7, name: { en: 'Willem' }, role: { en: 'Company clerk' },
        look: { skin: 1, hair: '#4a3020', shirt: '#2a2a3a', pants: '#2a2a2a', hat: '#1a1a1a', style: 'short' },
        lines: [
          { en: 'Our ships pay Asian sellers with silver. Silver from Spanish mines in the Americas, dug by the forced labor of Native people, flows to China and India.' }
        ]
      },
      q: { en: 'I will trade a sack of pepper for what Asian markets want most. Bring it to me.' },
      choices: [
        { ok: true, at: [16, 14], icon: '🪙', t: { en: 'Spanish silver coins from the Exchange' },
          why: { en: 'Yes! Silver was the great facilitator of global trade. It linked American mines, European ships and the markets of China and India.' } },
        { at: [12, 18], icon: '🧶', t: { en: 'A bale of wool cloth' },
          why: { en: 'No. India made its own famous cotton cloth. In 1498 da Gama brought wool to Calicut, and the ruler\'s men laughed.' } },
        { at: [7, 9], icon: '🍯', t: { en: 'A pot of honey' },
          why: { en: 'No. Da Gama brought honey as a gift to the ruler of Calicut. His men laughed: it was not fit for a king.' } }
      ],
      item: { icon: '📦', name: { en: 'A sack of pepper from the Indies' } }
    }
  },
  challenge: {
    at: [23, 18], type: 'carry', stat: 'pla',
    title: { en: 'What changed, what stayed?' },
    intro: { en: 'The Grump scrambled the chronicle of 1450–1750. Carry each card to CHANGE (something new in this era) or [[continuity|CONTINUITY]] (something that went on as before).' },
    zones: [
      { bin: 'chg', x: 17, y: 18, w: 3, h: 3 },
      { bin: 'cnt', x: 27, y: 18, w: 3, h: 3 }
    ],
    bins: [
      { id: 'chg', icon: '⛵', label: { en: 'Change' }, sub: { en: 'new between 1450 and 1750' } },
      { id: 'cnt', icon: '🏛️', label: { en: 'Continuity' }, sub: { en: 'went on as before' } }
    ],
    items: [
      { bin: 'chg', t: { en: 'Ships now link all of the world\'s major oceans.' }, why: { en: 'New. Long voyages were not new, but a global network of sea routes was. It made [[maritime empire|maritime empires]] possible.' } },
      { bin: 'chg', t: { en: 'Joint-stock companies with armies rule colonies in the East Indies.' }, why: { en: 'New. The Dutch East India Company acted almost like a state, building a maritime empire of ports and islands.' } },
      { bin: 'chg', t: { en: 'Potatoes from the Americas feed families in northern Europe.' }, why: { en: 'New. Before 1492 potatoes grew only in the Americas. The Columbian Exchange carried them to Afro-Eurasia.' } },
      { bin: 'chg', t: { en: 'Millions of enslaved Africans are forced to American plantations.' }, why: { en: 'New in scale. Slavery was old, but the huge volume and violence of the Atlantic slave trade were new.' } },
      { bin: 'chg', t: { en: 'Silver from American mines pays for goods in China and India.' }, why: { en: 'New. Silver dug by forced Native labor fueled the first global system of trade.' } },
      { bin: 'cnt', t: { en: 'The Ottoman, Safavid and Mughal empires still rule vast lands.' }, why: { en: 'Continuity. Large land-based empires went on. In Asia, Europeans held only ports and islands.' } },
      { bin: 'cnt', t: { en: 'Most Asian goods still travel the old Indian Ocean and Silk Road routes.' }, why: { en: 'Continuity. Europeans arrived, but the bulk of trade kept moving along the same old routes.' } },
      { bin: 'cnt', t: { en: 'China and India still make more goods than anywhere else.' }, why: { en: 'Continuity. China and India remained the world\'s most productive manufacturers.' } },
      { bin: 'cnt', t: { en: 'Most people still farm, and wealthy elites keep the most power.' }, why: { en: 'Continuity. Farming, social hierarchies and the power of elites went on, as they had since 1200.' } }
    ],
    success: { en: 'Every card is home. Between 1450 and 1750 the oceans were linked and new empires rose, but land empires, old trade routes and old hierarchies endured.' }
  },
  boss: {
    at: [30, 9], stat: 'hei', need: 3,
    name: { en: 'The Tide Grump' },
    appear: { en: 'The Tide Grump waits quietly behind the canal houses.' },
    taunt: { en: 'Everything changed, or nothing did. Why remember which, or who paid the price?' },
    win: { en: 'The tide turns. The last chronicle page, 1450 to 1750, floats down into your hands.' },
    questions: [
      {
        stim: { title: { en: 'The Dutch Republic' }, rows: [[{ en: 'Time' }, { en: 'Fact' }], [{ en: '1600' }, { en: 'A small republic, newly independent from Spain' }], [{ en: '1600–1800' }, { en: '49 percent of all ships in the Eurasian trade were Dutch' }]], src: { en: 'From "Origins of Oceanic Connections," World History Project' } },
        q: { en: 'Which development best explains the change shown in the table?' },
        choices: [{ en: 'Joint-stock companies spreading the risk of voyages' }, { en: 'A Dutch conquest of the Mughal and the Ottoman empires' }, { en: 'The end of the silver trade with China and India' }, { en: 'A Dutch ban on trading with any Asian merchants' }],
        answer: 0,
        why: { en: 'Shareholders split the costs and risks of voyages, so people trusted their money to Dutch merchants. That let a small republic lead the sea trade.' }
      },
      {
        stim: { text: { en: 'After Europeans first arrived in the Indian Ocean, the bulk of trade goods continued to move along the same old routes in Asia and the Indian Ocean. China and India remained the most productive manufacturers.' }, src: { en: 'Adapted from "The Cosmopolitan Indian Ocean, c. 1450–1700," World History Project' } },
        q: { en: 'The excerpt best supports which claim about the period 1450–1750?' },
        choices: [{ en: 'Older Asian trade networks continued after 1500' }, { en: 'Europeans took control of all Asian trade at once' }, { en: 'The Indian Ocean trade ended after da Gama' }, { en: 'China and India stopped making goods to sell' }],
        answer: 0,
        why: { en: 'Europeans changed how some business was done, but slowly. The old routes and Asia\'s great workshops went on: a continuity.' }
      },
      {
        stim: { text: { en: '"I do not know if coffee and sugar are essential to the happiness of Europe, but I know well that these two products have accounted for the unhappiness of two great regions of the world: America has been depopulated to have land on which to plant them; Africa has been depopulated so as to have the people to cultivate them."' }, src: { en: 'J.H. Bernardin de Saint-Pierre, French writer, 1773' } },
        q: { en: 'The author is criticizing which development of the period 1450–1750?' },
        choices: [{ en: 'Plantations in the Americas using enslaved Africans' }, { en: 'Potatoes from the Americas feeding Europe\'s poorest families' }, { en: 'Joint-stock companies sharing the risk of voyages' }, { en: 'Armenian merchants linking Europe with Asia' }],
        answer: 0,
        why: { en: 'Disease emptied land in the Americas, and planters forced enslaved Africans to grow sugar and coffee there for European buyers.' }
      },
      {
        stim: { text: { en: 'The economic, social and political changes of these centuries produced tremendous stress. Some people reached for new forms of worship and understanding, while others held more tightly to their existing beliefs.' }, src: { en: 'Adapted from "Transformations in Eurasian Belief Systems, 1450–1750," World History Project' } },
        q: { en: 'The excerpt best supports which claim about belief systems from 1450 to 1750?' },
        choices: [{ en: 'They showed both change and continuity' }, { en: 'They all disappeared under new empires' }, { en: 'They stayed exactly as they were in 1450' }, { en: 'Only belief in Europe changed at all' }],
        answer: 0,
        why: { en: 'New faiths and branches appeared, like Protestantism and Sikhism, while older faiths endured. Belief systems changed and continued at once.' }
      },
      {
        q: { en: 'Which is the best example of a continuity from 1450 to 1750?' },
        choices: [{ en: 'Land-based empires like the Ottomans and Mughals still ruled' }, { en: 'Ships linked all of the world\'s major oceans for the first time' }, { en: 'Potatoes from the Americas became a staple food in Europe' }, { en: 'Joint-stock companies with armies ruled colonies in Asia' }],
        answer: 0,
        why: { en: 'Large land-based empires went on ruling in Asia. The other three were new in this era: changes.' }
      },
      {
        q: { en: 'Joint-stock companies were used in Song China around 1000. Which best describes the Dutch East India Company?' },
        choices: [{ en: 'An older idea used on a new, global scale' }, { en: 'A brand-new idea the Dutch invented alone' }, { en: 'A company owned by one rich Dutch family' }, { en: 'A small shop that never left the Netherlands' }],
        answer: 0,
        why: { en: 'The idea was old, but after 1600 it took off on an international scale, with armies, colonies and many shareholders: change built on continuity.' }
      },
      {
        q: { en: 'Which statement best compares Protestantism in Europe and Sikhism in India?' },
        choices: [{ en: 'Both challenged older religious hierarchies' }, { en: 'Both were spread by the Ottoman sultans' }, { en: 'Both ended all religious conflict in their lands' }, { en: 'Both were founded by Catholic missionaries' }],
        answer: 0,
        why: { en: 'Protestants preached the "priesthood of all believers"; Sikhs rejected caste. Both opened faith to ordinary people.' }
      },
      {
        stim: { text: { en: 'The global silver trade, which benefited Spain, Western Europe, and China, was made possible by the forced labor of indigenous people in South American mines.' }, src: { en: 'Adapted from "Unit 4 Introduction: Transoceanic Interconnections 1450 to 1750," World History Project' } },
        q: { en: 'The excerpt best supports which claim about the new global economy?' },
        choices: [{ en: 'It depended on forced labor in the Americas' }, { en: 'It was run mainly by the sultans of the Ottoman Empire' }, { en: 'It used only barter and needed no money' }, { en: 'It mostly made the Native miners rich' }],
        answer: 0,
        why: { en: 'American silver, dug by forced Native labor, paid for goods from China and India. The new global trade rested on that suffering.' }
      }
    ]
  },
  learned: [
    { en: 'Change: ships linked every ocean, and [[joint-stock company|joint-stock companies]] like the Dutch East India Company built [[maritime empire|maritime empires]].' },
    { en: 'Change: the [[columbian exchange|Columbian Exchange]], American silver and the [[atlantic slave trade|Atlantic slave trade]] created a global economy built on forced labor.' },
    { en: '[[continuity|Continuity]]: [[land-based empire|land-based empires]], old Asian trade routes, elites and the great faiths endured, even as beliefs split and changed.' }
  ],
  reflect: {
    q: { en: 'AP practice: Explain one change and one continuity in global trade networks from 1450 to 1750.' },
    starter: { en: 'One change in global trade networks was' }
  }
};
