/* HISTORYWALKER · Episode 4.5 · Maritime Empires Maintained and Developed (AP World Topic 4.5, c. 1450–1750)
   Potosí, a silver-mining town in Spanish Peru, about 1600.
   Content source: Khan Academy, AP World History (World History Project), Unit 4 Lesson "Maritime Empires Maintained and
   Developed | 4.5": "Overview of New Economic Systems" (Eman M. Elshaikh), "The East India Company: Pioneering Corporation
   or Plundering Pirates?" (Trevor R. Getz), "Opener: Which Theme?", "The Spanish Empire, Silver, and Runaway Inflation"
   (Crash Course #25, its guiding questions); the unit overview "Unit 4 Introduction: Transoceanic Interconnections 1450 to
   1750" (Trevor Getz). A few facts come from the same unit's other lessons: "The Columbian Exchange" (4.3: encomienda,
   disease and the labor shortage), "Origins of Oceanic Connections" (4.2: silver to China and India via the Philippines
   from the 1570s), "Survey of Transoceanic Empires" and "European Colonies in the Americas" (4.4: the Andes under Spanish
   control by the 1550s, the richest silver mines, ethnic hierarchy, pirates), "Opener: Empire and Hierarchy" (4.7: the
   mita and chattel slavery as labor systems). World History Project content is CC BY-NC 4.0. Facts here come from those
   readings. English only, AP level. Hard history (forced labor, slavery, epidemics) is told plainly and with care:
   nothing about suffering is a prize, and the Grump is quiet and serious.
   Map: the plaza with the church and the royal treasury (north-west), the market and merchants' houses (north-east),
   the road across the town (row 10), Andean workers' houses (south-west), the llama corral (south-east), and the
   mountain of the mines along the south. The four levers: the labor lever by the mine, the Atlantic lever at the east
   end of the road, the Pacific lever at the west end, the policy lever by the treasury. */
window.EPISODE = {
  id: '4.5',
  realm: 4,
  sol: 'AP 4.5',
  style: 'andes',
  weather: { sky: 'clear', time: 'sunset' },
  title: { en: 'Maritime Empires Maintained' },
  place: { en: 'Potosí, Spanish Peru, 1600' },
  intro: [
    { en: 'The Grump blurred the page on maritime empires. Potosí is forgetting how silver, forced labor and new kinds of business remade the world.' },
    { en: 'Talk to the 4 people here, help a seamstress, then wake the time stone.' }
  ],
  scenes: {
    at: [-65.75, -19.58],
    year: 1600,
    start: [
      { en: 'By the 1550s, wars and epidemics had brought the Andes under Spanish control.' },
      { en: 'Spanish Peru held some of the richest silver mines in the world.' },
      { en: 'Silver, a precious metal, was used as money around the globe.' }
    ],
    guess: {
      q: { en: 'Spain needed many workers to dig its silver. Who do you think did most of the work?' },
      choices: [{ t: { en: '⛏️ Indigenous people, by force' }, ok: true }, { t: { en: '🚢 Settlers from Spain' } }],
      why: { en: 'The Spanish forced Indigenous people to mine the silver. That forced labor made the global silver trade possible.' }
    },
    page: { en: 'Silver became the great facilitator of global trade, benefiting Spain, Western Europe and China.' },
    next: {
      q: { en: 'Next: challenges to state power. Did any colonized people ever drive out Spanish rulers?' },
      choices: [{ t: { en: 'Yes, some did' }, ok: true }, { t: { en: 'No, never' } }],
      why: { en: 'In 1680 the Pueblos of New Mexico revolted and drove the Spanish off most of their land. You go there next.' }
    }
  },
  start: [15, 6],
  map: [
    'MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM',
    'M.DDDDDD.DDDDDD...RRR.....QQQQ.M',
    'M.DDDDDD.DDDDDD...hdh.....hhdh.M',
    'M.DDDdDD.DDdDDDx...:....x...:..M',
    'MllllllllllllllllllllllllllllllM',
    'MllllllllllllllllllllllllllllllM',
    'M.llllllllllll..llllllllllll...M',
    'M.llllllllllll..lmlmlmlmlmll...M',
    'M.llllllllllll..llllllllllll...M',
    'M..g......g....:....g.....g...xM',
    'M::::::::::::::::::::::::::::::M',
    'M....g.......g.:.......g.......M',
    'MrHHH...HHH..r.:..FFFFF...RRRRrM',
    'M.NdN...NdN....:..FgggF...hhdh.M',
    'M.::::::::::::::x.FgggF.....:..M',
    'M...........g..:..FFgFF.r......M',
    'M..g.....g..r..:..g.........g..M',
    'M.g..KKMMMMMMMMfMMMMMMMMMK.....M',
    'Mr...MMMMMMMMMMMMMMMMMMMMMM..g.M',
    'M...KMMMMMMMMMMMMMMMMMMMMMMK...M',
    'M...KMMMMMMMMMMMMMMMMMMMMMMK..rM',
    'MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM'
  ],
  words: {
    'coerced labor': { en: 'work that people are forced to do, by law, threat or violence, for little or no pay' },
    'mita': { en: 'a Spanish colonial system of forced labor that made Indigenous Andean people work, for example in the silver mines' },
    'encomienda': { en: 'part of the Spanish colonial legal system used to control Indigenous American labor; a form of enslavement' },
    'chattel slavery': { en: 'slavery in which enslaved people are treated as property, owned for life, and their children are enslaved too' },
    'galleon': { en: 'a very large sailing ship; Spanish galleons carried silver across the Pacific to the Philippines' },
    'mercantilism': { en: 'an economic policy: the government uses trade to build its power, bans free trade, and tries to sell more than it buys' },
    'joint-stock company': { en: 'a company owned by many investors who split its costs and share its profits, so no one person carries all the risk' },
    'chartered company': { en: 'a company licensed by a ruler to do business, like the English East India Company (1600)' },
    'inflation': { en: 'a general rise in prices: each coin buys less than before' },
    'casta system': { en: 'the ranking of people in Spanish America by their ancestry: European, Indigenous, African or mixed' }
  },
  npcs: [
    {
      x: 13, y: 16, name: { en: 'Quispe' }, role: { en: 'Mine worker (forced labor)' },
      look: { skin: 3, hair: '#1b1410', shirt: '#8a5a3a', pants: '#3a2e24', hat: '#7a2a2a', style: 'short' },
      lines: [
        { en: 'Spanish officials forced me to leave my village and work in these mines. They call it the [[mita|mita]].' },
        { en: 'Spain also uses the [[encomienda|encomienda]], part of its colonial law to control Indigenous labor. It is a form of enslavement.' },
        { en: 'Diseases from across the ocean killed millions of our people. To replace them, Europeans forced enslaved Africans to the Americas: [[chattel slavery|chattel slavery]].' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Which best explains how Spain got so much silver from mines like these?' },
        choices: [
          { ok: true, t: { en: 'Indigenous people were forced to dig' }, why: { en: 'Yes. Spain\'s silver rested on [[coerced labor|coerced labor]]: systems like the mita forced Indigenous people into the mines.' } },
          { t: { en: 'Settlers from Spain did all the digging' }, why: { en: 'No. The Spanish forced Indigenous people to do the mining. Settlers came to grow rich, not to dig.' } },
          { t: { en: 'Workers came freely for high wages' }, why: { en: 'No. Quispe was forced to leave his village. The silver trade was made possible by forced Indigenous labor.' } }
        ]
      }
    },
    {
      x: 24, y: 13, name: { en: 'Rosa' }, role: { en: 'Llama driver' },
      look: { skin: 4, hair: '#1b1410', shirt: '#c0392b', pants: '#2e3a5a', hat: '#5a3a2a', style: 'long' },
      lines: [
        { en: 'My llamas carry loads down from the mines. Silver bars go to Spain, then on to the rest of Europe.' },
        { en: 'Since the 1570s, huge ships called [[galleon|galleons]] carry our silver across the Pacific, by way of the Philippines, to China and India.' },
        { en: 'Silver is money everywhere in the world now. It makes Spain, Western Europe and China rich.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Why did silver from the Andes matter far beyond Peru?' },
        choices: [
          { ok: true, t: { en: 'It served as money around the world' }, why: { en: 'Right. Silver moved to Europe, India and China. It became the great facilitator of global trade.' } },
          { t: { en: 'It stayed in Peru to build churches' }, why: { en: 'No. Most silver left: across the Atlantic to Spain, and across the Pacific to Asia.' } },
          { t: { en: 'Only Spain had any real use for silver' }, why: { en: 'No. China and India were huge markets for silver, reached by galleons through the Philippines.' } }
        ]
      }
    },
    {
      x: 10, y: 7, name: { en: 'Don Diego' }, role: { en: 'Royal official' },
      look: { skin: 1, hair: '#3a2a1a', shirt: '#2a2a3a', pants: '#1a1a24', robe: true, hat: '#1a1a1a', style: 'short' },
      lines: [
        { en: 'The crown follows [[mercantilism|mercantilism]]: use trade to build the kingdom\'s power, ban free trade, and sell more than you buy.' },
        { en: 'Colonies send raw materials like silver to Spain and buy Spain\'s finished goods. Colonists may not trade with other countries.' },
        { en: 'We hold this distant land through royal officials, local elites who work with us, and soldiers with guns.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Which policy best reflects mercantilism?' },
        choices: [
          { ok: true, t: { en: 'Colonies trade only with the home country' }, why: { en: 'Yes. Colonies supply raw materials and buy finished goods, all inside one empire, so the home country sells more than it buys.' } },
          { t: { en: 'Every colony trades freely with any nation' }, why: { en: 'No. Mercantilism prohibits free trade. Colonists were not able to trade with other countries.' } },
          { t: { en: 'The home country buys more than it sells' }, why: { en: 'No. That is the opposite of the goal. Mercantilists wanted to sell more than they bought.' } }
        ]
      }
    },
    {
      x: 20, y: 8, name: { en: 'Isabel' }, role: { en: 'Cloth merchant' },
      look: { skin: 0, hair: '#5a3a1a', shirt: '#2a6a5a', robe: true, style: 'bun' },
      lines: [
        { en: 'Letters from Europe say London merchants have founded an East India Company, a [[chartered company|chartered company]] licensed by their king.' },
        { en: 'It is a [[joint-stock company|joint-stock company]]: many investors split the cost of the voyages and share the profits. One shipwreck no longer ruins one man.' },
        { en: 'English and Dutch pirates already raid Spanish ships. They want a share of the riches Spain and Portugal claim.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why did European merchants form joint-stock companies?' },
        choices: [
          { ok: true, t: { en: 'To share the cost and risk of voyages' }, why: { en: 'Yes. Ocean trade was a costly gamble. Splitting costs among many investors kept each one\'s losses small.' } },
          { t: { en: 'To let the king run all of the trade himself' }, why: { en: 'No. They were private companies. Some, like the East India Company, were licensed by the king, but investors owned them.' } },
          { t: { en: 'Because ocean trade had become safe' }, why: { en: 'No. Ships still sank. Joint-stock companies spread the losses among many investors.' } }
        ]
      }
    }
  ],
  houses: [
    { at: [5, 3], name: { en: 'Father Lucas' }, look: { skin: 1, hair: '#6e6e6e', shirt: '#2a2a2a', robe: true, style: 'short' },
      lines: [{ en: 'Every Sunday, Spaniards and Andean people fill this church.' }, { en: 'Spanish towns here celebrate Catholic practices and Spanish culture.' }] },
    { at: [11, 3], name: { en: 'Clerk Beltrán' }, look: { skin: 1, hair: '#2b1d14', shirt: '#4a4a6a', robe: true, style: 'short' },
      lines: [{ en: 'This is the royal treasury. We weigh and record every silver bar.' }, { en: 'This silver makes Spain rich, so the crown watches every bar.' }] },
    { at: [19, 2], name: { en: 'Doña Catalina' }, look: { skin: 0, hair: '#3a2a1a', shirt: '#7a2a4a', robe: true, style: 'bun' },
      lines: [{ en: 'My husband sailed from Spain to make his fortune in the silver mines.' }, { en: 'This town holds Indigenous, African, Asian and Spanish people.' }] },
    { at: [28, 2], name: { en: 'Shopkeeper Mendoza' }, look: { skin: 2, hair: '#1b1410', shirt: '#8a6a2a', style: 'short' },
      lines: [{ en: 'Silver, sugar, and red and blue dyes are the riches of Spain\'s colonies.' }, { en: 'Everything on my shelves came on the king\'s ships from Spain.' }] },
    { at: [3, 13], name: { en: 'Sisa' }, look: { skin: 4, hair: '#1b1410', shirt: '#6a3a7a', style: 'long' },
      lines: [{ en: 'My husband was sent to the mines. I wait for him to come home.' }, { en: 'We keep our language and our ways, even under Spanish rule.' }] },
    { at: [9, 13], name: { en: 'Grandmother Wayra' }, look: { skin: 3, hair: '#8a8a8a', shirt: '#2a5a8a', style: 'bun' },
      lines: [{ en: 'The sicknesses that came with the Spanish took many in our village.' }, { en: 'Fewer hands remain, yet the mines still demand workers.' }] },
    { at: [28, 13], name: { en: 'Lorenzo' }, look: { skin: 2, hair: '#2b1d14', shirt: '#4a7a4a', style: 'short' },
      lines: [{ en: 'My father is Spanish and my mother is Andean.' }, { en: 'Colonial society ranks people by ancestry. People call it the [[casta system|casta system]].' }] }
  ],
  signs: [
    { x: 15, y: 3, text: { en: 'PLAZA OF POTOSÍ · The church and the royal treasury. Every silver bar is recorded here.' } },
    { x: 24, y: 3, text: { en: 'MERCHANTS\' STREET · Goods from Spain only, by order of the crown.' } },
    { x: 16, y: 14, text: { en: 'TO THE MINES · The richest silver mines in the world.' } },
    { x: 30, y: 9, text: { en: 'ROAD EAST · Silver bound for Spain and the rest of Europe.' } }
  ],
  finds: [
    { clueAt: [27, 8], at: [29, 9], decor: 'coinold', clue: { en: 'From this note, walk 2 steps east and 1 step south, toward the road sign.' },
      text: { en: 'A worn silver coin. Coins like this traveled as far as China and India.' } }
  ],
  scraps: [[1, 1], [30, 1], [1, 20]],
  smudges: [[22, 16], [6, 9]],
  quest: {
    stat: 'hei',
    title: { en: 'Linen from Spain' },
    giver: {
      x: 3, y: 7, name: { en: 'Ana' }, role: { en: 'Seamstress' },
      look: { skin: 2, hair: '#1b1410', shirt: '#b98250', pants: '#4a3a2a', style: 'long' },
      lines: [
        { en: 'I sew clothes for Spanish families. They want fine linen made in Spain, and I have none left.' },
        { en: 'Under Spain\'s rules, finished goods come from Spain and the colony pays with its riches. Ask Felipe the porter. He works in the southeast, past the llama corral.' }
      ],
      wait: { en: 'Felipe carries loads in the southeast, east of the llama corral, south of the road.' },
      thanks: { en: 'Spanish linen! The colony sends out raw wealth and buys back finished goods. That is mercantilism at work.' }
    },
    contact: {
      x: 27, y: 16, name: { en: 'Felipe' }, role: { en: 'Porter' },
      look: { skin: 5, hair: '#1b1410', shirt: '#e0d8c0', pants: '#4a4a3a', style: 'short' },
      lines: [
        { en: 'Sailors\' letters say prices in Spain keep climbing. So much American silver pours in that each coin buys less. That is [[inflation|inflation]].' },
        { en: 'Gonzalo sells Spanish cloth. Go north across the road, then east along the main street, past the market. His stall is at the far end.' }
      ]
    },
    action: {
      type: 'trade',
      trader: {
        x: 29, y: 7, name: { en: 'Gonzalo' }, role: { en: 'Licensed merchant' },
        look: { skin: 1, hair: '#5a4030', shirt: '#6a2a2a', pants: '#2a2a2a', hat: '#2a2a2a', style: 'short' },
        lines: [
          { en: 'I sell only goods shipped from Spain. The crown allows no other trade.' }
        ]
      },
      q: { en: 'I will trade a bolt of linen for what the crown wants. Bring me what this colony is meant to send to Spain.' },
      choices: [
        { ok: true, at: [17, 16], icon: '🛒', t: { en: 'A cart of silver ore' },
          why: { en: 'Yes. Under mercantilism, colonies send raw materials like silver to the home country. Remember who dug it: Indigenous people, by force.' } },
        { at: [2, 19], icon: '📦', t: { en: 'Dutch cloth from a smuggler' },
          why: { en: 'No. Mercantilism bans colonists from trading with other nations. Dutch goods are forbidden here.' } },
        { at: [6, 15], icon: '🧶', t: { en: 'Cloth woven in Andean homes' },
          why: { en: 'No. The colony is meant to send raw materials and buy Spain\'s finished goods, not sell finished goods of its own.' } }
      ],
      item: { icon: '🧵', name: { en: 'A bolt of Spanish linen' } }
    }
  },
  challenge: {
    at: [7, 7],
    type: 'levers', // in the world; the card version (combo) is the fallback
    // four levers: labor by the mine, the Atlantic at the east end of the road, the Pacific at the west end, policy by the treasury
    spots: [[14, 16], [30, 11], [1, 11], [13, 6]],
    stat: 'loc',
    title: { en: 'Follow the silver' },
    intro: { en: 'The Grump scrambled how American silver moved the world. Set the four levers: who dug the silver, what a flood of silver did to prices in Spain, where the Pacific galleons went, and Spain\'s trade policy. Then test them at the stone.' },
    switches: [
      { name: { en: 'Labor: who dug the silver?' }, icon: '⛏️', start: 0,
        states: [{ en: 'Settlers from Spain' }, { en: 'Indigenous people, by force' }, { en: 'Machines, with few workers' }] },
      { name: { en: 'Atlantic: silver floods into Spain' }, icon: '💰', start: 0,
        states: [{ en: 'Prices in Spain fall' }, { en: 'Prices in Spain rise' }] },
      { name: { en: 'Pacific: where the galleons go' }, icon: '⛵', start: 0,
        states: [{ en: 'Silver stays in the Americas' }, { en: 'To China and India, via the Philippines' }, { en: 'To West Africa only' }] },
      { name: { en: 'Policy: Spain\'s trade rules' }, icon: '👑', start: 0,
        states: [{ en: 'Free trade with every nation' }, { en: 'Mercantilism: trade only with Spain' }] }
    ],
    results: {
      '0,0,0,0': { ok: false, t: { en: '4 levers are not right yet. Read the red lines and pull again.' },
        show: [{ icon: '⛏️', ok: false, t: { en: 'Not settlers: Spain forced Indigenous people to mine' } }, { icon: '💰', ok: false, t: { en: 'More silver means each coin buys less: prices rose' } }, { icon: '⛵', ok: false, t: { en: 'Silver left the Americas: it was money worldwide' } }, { icon: '👑', ok: false, t: { en: 'Spain banned colonists from trading with other nations' } }] },
      '0,0,0,1': { ok: false, t: { en: '3 levers are not right yet. Read the red lines and pull again.' },
        show: [{ icon: '⛏️', ok: false, t: { en: 'Not settlers: Spain forced Indigenous people to mine' } }, { icon: '💰', ok: false, t: { en: 'More silver means each coin buys less: prices rose' } }, { icon: '⛵', ok: false, t: { en: 'Silver left the Americas: it was money worldwide' } }, { icon: '👑', ok: true, t: { en: 'Mercantilism: colonies trade only with Spain' } }] },
      '0,0,1,0': { ok: false, t: { en: '3 levers are not right yet. Read the red lines and pull again.' },
        show: [{ icon: '⛏️', ok: false, t: { en: 'Not settlers: Spain forced Indigenous people to mine' } }, { icon: '💰', ok: false, t: { en: 'More silver means each coin buys less: prices rose' } }, { icon: '⛵', ok: true, t: { en: 'Galleons carried silver to China and India' } }, { icon: '👑', ok: false, t: { en: 'Spain banned colonists from trading with other nations' } }] },
      '0,0,1,1': { ok: false, t: { en: '2 levers are not right yet. Read the red lines and pull again.' },
        show: [{ icon: '⛏️', ok: false, t: { en: 'Not settlers: Spain forced Indigenous people to mine' } }, { icon: '💰', ok: false, t: { en: 'More silver means each coin buys less: prices rose' } }, { icon: '⛵', ok: true, t: { en: 'Galleons carried silver to China and India' } }, { icon: '👑', ok: true, t: { en: 'Mercantilism: colonies trade only with Spain' } }] },
      '0,0,2,0': { ok: false, t: { en: '4 levers are not right yet. Read the red lines and pull again.' },
        show: [{ icon: '⛏️', ok: false, t: { en: 'Not settlers: Spain forced Indigenous people to mine' } }, { icon: '💰', ok: false, t: { en: 'More silver means each coin buys less: prices rose' } }, { icon: '⛵', ok: false, t: { en: 'Galleons crossed the Pacific, west to Asia' } }, { icon: '👑', ok: false, t: { en: 'Spain banned colonists from trading with other nations' } }] },
      '0,0,2,1': { ok: false, t: { en: '3 levers are not right yet. Read the red lines and pull again.' },
        show: [{ icon: '⛏️', ok: false, t: { en: 'Not settlers: Spain forced Indigenous people to mine' } }, { icon: '💰', ok: false, t: { en: 'More silver means each coin buys less: prices rose' } }, { icon: '⛵', ok: false, t: { en: 'Galleons crossed the Pacific, west to Asia' } }, { icon: '👑', ok: true, t: { en: 'Mercantilism: colonies trade only with Spain' } }] },
      '0,1,0,0': { ok: false, t: { en: '3 levers are not right yet. Read the red lines and pull again.' },
        show: [{ icon: '⛏️', ok: false, t: { en: 'Not settlers: Spain forced Indigenous people to mine' } }, { icon: '💰', ok: true, t: { en: 'A flood of silver made prices in Spain rise: inflation' } }, { icon: '⛵', ok: false, t: { en: 'Silver left the Americas: it was money worldwide' } }, { icon: '👑', ok: false, t: { en: 'Spain banned colonists from trading with other nations' } }] },
      '0,1,0,1': { ok: false, t: { en: '2 levers are not right yet. Read the red lines and pull again.' },
        show: [{ icon: '⛏️', ok: false, t: { en: 'Not settlers: Spain forced Indigenous people to mine' } }, { icon: '💰', ok: true, t: { en: 'A flood of silver made prices in Spain rise: inflation' } }, { icon: '⛵', ok: false, t: { en: 'Silver left the Americas: it was money worldwide' } }, { icon: '👑', ok: true, t: { en: 'Mercantilism: colonies trade only with Spain' } }] },
      '0,1,1,0': { ok: false, t: { en: '2 levers are not right yet. Read the red lines and pull again.' },
        show: [{ icon: '⛏️', ok: false, t: { en: 'Not settlers: Spain forced Indigenous people to mine' } }, { icon: '💰', ok: true, t: { en: 'A flood of silver made prices in Spain rise: inflation' } }, { icon: '⛵', ok: true, t: { en: 'Galleons carried silver to China and India' } }, { icon: '👑', ok: false, t: { en: 'Spain banned colonists from trading with other nations' } }] },
      '0,1,1,1': { ok: false, t: { en: 'One lever is not right yet. Read the red line and pull again.' },
        show: [{ icon: '⛏️', ok: false, t: { en: 'Not settlers: Spain forced Indigenous people to mine' } }, { icon: '💰', ok: true, t: { en: 'A flood of silver made prices in Spain rise: inflation' } }, { icon: '⛵', ok: true, t: { en: 'Galleons carried silver to China and India' } }, { icon: '👑', ok: true, t: { en: 'Mercantilism: colonies trade only with Spain' } }] },
      '0,1,2,0': { ok: false, t: { en: '3 levers are not right yet. Read the red lines and pull again.' },
        show: [{ icon: '⛏️', ok: false, t: { en: 'Not settlers: Spain forced Indigenous people to mine' } }, { icon: '💰', ok: true, t: { en: 'A flood of silver made prices in Spain rise: inflation' } }, { icon: '⛵', ok: false, t: { en: 'Galleons crossed the Pacific, west to Asia' } }, { icon: '👑', ok: false, t: { en: 'Spain banned colonists from trading with other nations' } }] },
      '0,1,2,1': { ok: false, t: { en: '2 levers are not right yet. Read the red lines and pull again.' },
        show: [{ icon: '⛏️', ok: false, t: { en: 'Not settlers: Spain forced Indigenous people to mine' } }, { icon: '💰', ok: true, t: { en: 'A flood of silver made prices in Spain rise: inflation' } }, { icon: '⛵', ok: false, t: { en: 'Galleons crossed the Pacific, west to Asia' } }, { icon: '👑', ok: true, t: { en: 'Mercantilism: colonies trade only with Spain' } }] },
      '1,0,0,0': { ok: false, t: { en: '3 levers are not right yet. Read the red lines and pull again.' },
        show: [{ icon: '⛏️', ok: true, t: { en: 'Forced Indigenous labor dug the silver' } }, { icon: '💰', ok: false, t: { en: 'More silver means each coin buys less: prices rose' } }, { icon: '⛵', ok: false, t: { en: 'Silver left the Americas: it was money worldwide' } }, { icon: '👑', ok: false, t: { en: 'Spain banned colonists from trading with other nations' } }] },
      '1,0,0,1': { ok: false, t: { en: '2 levers are not right yet. Read the red lines and pull again.' },
        show: [{ icon: '⛏️', ok: true, t: { en: 'Forced Indigenous labor dug the silver' } }, { icon: '💰', ok: false, t: { en: 'More silver means each coin buys less: prices rose' } }, { icon: '⛵', ok: false, t: { en: 'Silver left the Americas: it was money worldwide' } }, { icon: '👑', ok: true, t: { en: 'Mercantilism: colonies trade only with Spain' } }] },
      '1,0,1,0': { ok: false, t: { en: '2 levers are not right yet. Read the red lines and pull again.' },
        show: [{ icon: '⛏️', ok: true, t: { en: 'Forced Indigenous labor dug the silver' } }, { icon: '💰', ok: false, t: { en: 'More silver means each coin buys less: prices rose' } }, { icon: '⛵', ok: true, t: { en: 'Galleons carried silver to China and India' } }, { icon: '👑', ok: false, t: { en: 'Spain banned colonists from trading with other nations' } }] },
      '1,0,1,1': { ok: false, t: { en: 'One lever is not right yet. Read the red line and pull again.' },
        show: [{ icon: '⛏️', ok: true, t: { en: 'Forced Indigenous labor dug the silver' } }, { icon: '💰', ok: false, t: { en: 'More silver means each coin buys less: prices rose' } }, { icon: '⛵', ok: true, t: { en: 'Galleons carried silver to China and India' } }, { icon: '👑', ok: true, t: { en: 'Mercantilism: colonies trade only with Spain' } }] },
      '1,0,2,0': { ok: false, t: { en: '3 levers are not right yet. Read the red lines and pull again.' },
        show: [{ icon: '⛏️', ok: true, t: { en: 'Forced Indigenous labor dug the silver' } }, { icon: '💰', ok: false, t: { en: 'More silver means each coin buys less: prices rose' } }, { icon: '⛵', ok: false, t: { en: 'Galleons crossed the Pacific, west to Asia' } }, { icon: '👑', ok: false, t: { en: 'Spain banned colonists from trading with other nations' } }] },
      '1,0,2,1': { ok: false, t: { en: '2 levers are not right yet. Read the red lines and pull again.' },
        show: [{ icon: '⛏️', ok: true, t: { en: 'Forced Indigenous labor dug the silver' } }, { icon: '💰', ok: false, t: { en: 'More silver means each coin buys less: prices rose' } }, { icon: '⛵', ok: false, t: { en: 'Galleons crossed the Pacific, west to Asia' } }, { icon: '👑', ok: true, t: { en: 'Mercantilism: colonies trade only with Spain' } }] },
      '1,1,0,0': { ok: false, t: { en: '2 levers are not right yet. Read the red lines and pull again.' },
        show: [{ icon: '⛏️', ok: true, t: { en: 'Forced Indigenous labor dug the silver' } }, { icon: '💰', ok: true, t: { en: 'A flood of silver made prices in Spain rise: inflation' } }, { icon: '⛵', ok: false, t: { en: 'Silver left the Americas: it was money worldwide' } }, { icon: '👑', ok: false, t: { en: 'Spain banned colonists from trading with other nations' } }] },
      '1,1,0,1': { ok: false, t: { en: 'One lever is not right yet. Read the red line and pull again.' },
        show: [{ icon: '⛏️', ok: true, t: { en: 'Forced Indigenous labor dug the silver' } }, { icon: '💰', ok: true, t: { en: 'A flood of silver made prices in Spain rise: inflation' } }, { icon: '⛵', ok: false, t: { en: 'Silver left the Americas: it was money worldwide' } }, { icon: '👑', ok: true, t: { en: 'Mercantilism: colonies trade only with Spain' } }] },
      '1,1,1,0': { ok: false, t: { en: 'One lever is not right yet. Read the red line and pull again.' },
        show: [{ icon: '⛏️', ok: true, t: { en: 'Forced Indigenous labor dug the silver' } }, { icon: '💰', ok: true, t: { en: 'A flood of silver made prices in Spain rise: inflation' } }, { icon: '⛵', ok: true, t: { en: 'Galleons carried silver to China and India' } }, { icon: '👑', ok: false, t: { en: 'Spain banned colonists from trading with other nations' } }] },
      '1,1,1,1': { ok: true, t: { en: 'Forced labor dug the silver, it flooded Spain with inflation, galleons carried it to Asia, and mercantilism tied the colony to Spain. The chain holds!' },
        show: [{ icon: '⛏️', ok: true, t: { en: 'Forced Indigenous labor dug the silver' } }, { icon: '💰', ok: true, t: { en: 'A flood of silver made prices in Spain rise: inflation' } }, { icon: '⛵', ok: true, t: { en: 'Galleons carried silver to China and India' } }, { icon: '👑', ok: true, t: { en: 'Mercantilism: colonies trade only with Spain' } }] },
      '1,1,2,0': { ok: false, t: { en: '2 levers are not right yet. Read the red lines and pull again.' },
        show: [{ icon: '⛏️', ok: true, t: { en: 'Forced Indigenous labor dug the silver' } }, { icon: '💰', ok: true, t: { en: 'A flood of silver made prices in Spain rise: inflation' } }, { icon: '⛵', ok: false, t: { en: 'Galleons crossed the Pacific, west to Asia' } }, { icon: '👑', ok: false, t: { en: 'Spain banned colonists from trading with other nations' } }] },
      '1,1,2,1': { ok: false, t: { en: 'One lever is not right yet. Read the red line and pull again.' },
        show: [{ icon: '⛏️', ok: true, t: { en: 'Forced Indigenous labor dug the silver' } }, { icon: '💰', ok: true, t: { en: 'A flood of silver made prices in Spain rise: inflation' } }, { icon: '⛵', ok: false, t: { en: 'Galleons crossed the Pacific, west to Asia' } }, { icon: '👑', ok: true, t: { en: 'Mercantilism: colonies trade only with Spain' } }] },
      '2,0,0,0': { ok: false, t: { en: '4 levers are not right yet. Read the red lines and pull again.' },
        show: [{ icon: '⛏️', ok: false, t: { en: 'No machines: forced Indigenous labor did the digging' } }, { icon: '💰', ok: false, t: { en: 'More silver means each coin buys less: prices rose' } }, { icon: '⛵', ok: false, t: { en: 'Silver left the Americas: it was money worldwide' } }, { icon: '👑', ok: false, t: { en: 'Spain banned colonists from trading with other nations' } }] },
      '2,0,0,1': { ok: false, t: { en: '3 levers are not right yet. Read the red lines and pull again.' },
        show: [{ icon: '⛏️', ok: false, t: { en: 'No machines: forced Indigenous labor did the digging' } }, { icon: '💰', ok: false, t: { en: 'More silver means each coin buys less: prices rose' } }, { icon: '⛵', ok: false, t: { en: 'Silver left the Americas: it was money worldwide' } }, { icon: '👑', ok: true, t: { en: 'Mercantilism: colonies trade only with Spain' } }] },
      '2,0,1,0': { ok: false, t: { en: '3 levers are not right yet. Read the red lines and pull again.' },
        show: [{ icon: '⛏️', ok: false, t: { en: 'No machines: forced Indigenous labor did the digging' } }, { icon: '💰', ok: false, t: { en: 'More silver means each coin buys less: prices rose' } }, { icon: '⛵', ok: true, t: { en: 'Galleons carried silver to China and India' } }, { icon: '👑', ok: false, t: { en: 'Spain banned colonists from trading with other nations' } }] },
      '2,0,1,1': { ok: false, t: { en: '2 levers are not right yet. Read the red lines and pull again.' },
        show: [{ icon: '⛏️', ok: false, t: { en: 'No machines: forced Indigenous labor did the digging' } }, { icon: '💰', ok: false, t: { en: 'More silver means each coin buys less: prices rose' } }, { icon: '⛵', ok: true, t: { en: 'Galleons carried silver to China and India' } }, { icon: '👑', ok: true, t: { en: 'Mercantilism: colonies trade only with Spain' } }] },
      '2,0,2,0': { ok: false, t: { en: '4 levers are not right yet. Read the red lines and pull again.' },
        show: [{ icon: '⛏️', ok: false, t: { en: 'No machines: forced Indigenous labor did the digging' } }, { icon: '💰', ok: false, t: { en: 'More silver means each coin buys less: prices rose' } }, { icon: '⛵', ok: false, t: { en: 'Galleons crossed the Pacific, west to Asia' } }, { icon: '👑', ok: false, t: { en: 'Spain banned colonists from trading with other nations' } }] },
      '2,0,2,1': { ok: false, t: { en: '3 levers are not right yet. Read the red lines and pull again.' },
        show: [{ icon: '⛏️', ok: false, t: { en: 'No machines: forced Indigenous labor did the digging' } }, { icon: '💰', ok: false, t: { en: 'More silver means each coin buys less: prices rose' } }, { icon: '⛵', ok: false, t: { en: 'Galleons crossed the Pacific, west to Asia' } }, { icon: '👑', ok: true, t: { en: 'Mercantilism: colonies trade only with Spain' } }] },
      '2,1,0,0': { ok: false, t: { en: '3 levers are not right yet. Read the red lines and pull again.' },
        show: [{ icon: '⛏️', ok: false, t: { en: 'No machines: forced Indigenous labor did the digging' } }, { icon: '💰', ok: true, t: { en: 'A flood of silver made prices in Spain rise: inflation' } }, { icon: '⛵', ok: false, t: { en: 'Silver left the Americas: it was money worldwide' } }, { icon: '👑', ok: false, t: { en: 'Spain banned colonists from trading with other nations' } }] },
      '2,1,0,1': { ok: false, t: { en: '2 levers are not right yet. Read the red lines and pull again.' },
        show: [{ icon: '⛏️', ok: false, t: { en: 'No machines: forced Indigenous labor did the digging' } }, { icon: '💰', ok: true, t: { en: 'A flood of silver made prices in Spain rise: inflation' } }, { icon: '⛵', ok: false, t: { en: 'Silver left the Americas: it was money worldwide' } }, { icon: '👑', ok: true, t: { en: 'Mercantilism: colonies trade only with Spain' } }] },
      '2,1,1,0': { ok: false, t: { en: '2 levers are not right yet. Read the red lines and pull again.' },
        show: [{ icon: '⛏️', ok: false, t: { en: 'No machines: forced Indigenous labor did the digging' } }, { icon: '💰', ok: true, t: { en: 'A flood of silver made prices in Spain rise: inflation' } }, { icon: '⛵', ok: true, t: { en: 'Galleons carried silver to China and India' } }, { icon: '👑', ok: false, t: { en: 'Spain banned colonists from trading with other nations' } }] },
      '2,1,1,1': { ok: false, t: { en: 'One lever is not right yet. Read the red line and pull again.' },
        show: [{ icon: '⛏️', ok: false, t: { en: 'No machines: forced Indigenous labor did the digging' } }, { icon: '💰', ok: true, t: { en: 'A flood of silver made prices in Spain rise: inflation' } }, { icon: '⛵', ok: true, t: { en: 'Galleons carried silver to China and India' } }, { icon: '👑', ok: true, t: { en: 'Mercantilism: colonies trade only with Spain' } }] },
      '2,1,2,0': { ok: false, t: { en: '3 levers are not right yet. Read the red lines and pull again.' },
        show: [{ icon: '⛏️', ok: false, t: { en: 'No machines: forced Indigenous labor did the digging' } }, { icon: '💰', ok: true, t: { en: 'A flood of silver made prices in Spain rise: inflation' } }, { icon: '⛵', ok: false, t: { en: 'Galleons crossed the Pacific, west to Asia' } }, { icon: '👑', ok: false, t: { en: 'Spain banned colonists from trading with other nations' } }] },
      '2,1,2,1': { ok: false, t: { en: '2 levers are not right yet. Read the red lines and pull again.' },
        show: [{ icon: '⛏️', ok: false, t: { en: 'No machines: forced Indigenous labor did the digging' } }, { icon: '💰', ok: true, t: { en: 'A flood of silver made prices in Spain rise: inflation' } }, { icon: '⛵', ok: false, t: { en: 'Galleons crossed the Pacific, west to Asia' } }, { icon: '👑', ok: true, t: { en: 'Mercantilism: colonies trade only with Spain' } }] }
    },
    otherwise: { ok: false, t: { en: 'Some levers are not right yet. Follow the silver: who dug it, what it did to prices, where it sailed, and who could trade it.' } },
    success: { en: 'The chain holds! [[coerced labor|Coerced labor]] dug the silver; it flooded Spain and caused [[inflation|inflation]]; galleons carried it to China and India; and mercantilism tied the colony to Spain.' }
  },
  boss: {
    at: [29, 19], stat: 'hei', need: 3,
    name: { en: 'The Cold Grump' },
    appear: { en: 'The Cold Grump waits in the mist below the mountain.' },
    taunt: { en: 'Silver, ships and profits are what people remember. Who dug the silver? Let that be forgotten.' },
    win: { en: 'The mist lifts from the mountain. The page on maritime empires returns, and so does the memory of those who carried its weight.' },
    questions: [
      {
        stim: { text: { en: 'The global silver trade, which benefited Spain, Western Europe, and China, was made possible by the forced labor of indigenous people in South American mines.' }, src: { en: 'Adapted from "Unit 4 Introduction: Transoceanic Interconnections 1450 to 1750," World History Project' } },
        q: { en: 'The excerpt best supports which claim about the global economy, 1450–1750?' },
        choices: [{ en: 'Forced labor in the Americas fueled world trade' }, { en: 'Free wage labor from Europe ran the silver mines' }, { en: 'China supplied most of the world\'s silver' }, { en: 'Silver mattered only to merchants in Spain' }],
        answer: 0,
        why: { en: 'The silver that linked Europe, the Americas and Asia was dug by Indigenous people forced to work under systems like the mita.' }
      },
      {
        stim: { title: { en: 'Where silver from Spanish America went' }, rows: [[{ en: 'Route' }, { en: 'Destination' }], [{ en: 'Across the Atlantic' }, { en: 'Spain, then the rest of Europe' }], [{ en: 'Across the Pacific by galleon (from the 1570s)' }, { en: 'China and India, via the Philippines' }]], src: { en: 'From "Origins of Oceanic Connections" and "Survey of Transoceanic Empires," World History Project' } },
        q: { en: 'The table best supports which conclusion?' },
        choices: [{ en: 'Silver linked the Americas, Europe and Asia' }, { en: 'Silver trade stayed inside the Atlantic world' }, { en: 'Asia sent its own silver to the Americas' }, { en: 'Spain kept all of its silver at home' }],
        answer: 0,
        why: { en: 'American silver crossed both oceans. It became money for the world and the great facilitator of global trade.' }
      },
      {
        stim: { text: { en: 'Mercantilism is an economic philosophy in which a government uses its economy to expand political power, prohibiting free trade. The goal is to sell more than you buy.' }, src: { en: 'Adapted from "Overview of New Economic Systems," World History Project' } },
        q: { en: 'Which Spanish colonial rule best reflects the philosophy described above?' },
        choices: [{ en: 'Colonists may trade only with Spain' }, { en: 'Colonists may trade with any nation' }, { en: 'Spain must import more than it exports' }, { en: 'Colonies must make all their own goods' }],
        answer: 0,
        why: { en: 'Under mercantilism, colonies supplied raw materials, bought the home country\'s finished goods and were not able to trade with other countries.' }
      },
      {
        stim: { text: { en: 'The East India Company was founded in London, England, in 1600. It was a new kind of joint stock company, with lots of small stockholders. But it was also a chartered company, licensed to operate by the King of England.' }, src: { en: 'Adapted from "The East India Company: Pioneering Corporation or Plundering Pirates?," World History Project' } },
        q: { en: 'The company described above is best understood as an example of...' },
        choices: [{ en: 'investors sharing the risk of licensed trade' }, { en: 'a government office staffed by royal officials' }, { en: 'a single rich merchant risking his own ships' }, { en: 'a religious order sent to spread Christianity' }],
        answer: 0,
        why: { en: 'Many investors split the costs and shared the profits, which kept each one\'s losses small, and the king licensed the company to trade.' }
      },
      {
        q: { en: 'Which development best explains the rising prices in Spain in this period?' },
        choices: [{ en: 'A flood of silver from the Americas' }, { en: 'The end of trade with the colonies' }, { en: 'A shortage of coins in Spanish markets' }, { en: 'Galleons carrying silver back from China' }],
        answer: 0,
        why: { en: 'So much American silver poured into Spain that each coin bought less. That rise in prices is inflation.' }
      },
      {
        stim: { text: { en: 'Encomienda was part of the colonial Spanish legal system used to control the Indigenous American labor force, and it was a form of enslavement.' }, src: { en: 'Adapted from "The Columbian Exchange," World History Project' } },
        q: { en: 'The excerpt best reflects which way Spain maintained its American empire?' },
        choices: [{ en: 'Legal systems that coerced Indigenous labor' }, { en: 'Paying Indigenous workers more than settlers' }, { en: 'Leaving Indigenous lands under Inca rule' }, { en: 'Ending all forced labor in its colonies' }],
        answer: 0,
        why: { en: 'Spain used laws like the encomienda and the mita to force Indigenous people to work for the colonial economy.' }
      },
      {
        q: { en: 'Which statement best compares the mita and chattel slavery in the Americas?' },
        choices: [{ en: 'Both coerced labor for colonial profit' }, { en: 'Both were systems of paid and free labor' }, { en: 'Only the mita was a form of forced labor' }, { en: 'Both brought workers across the Atlantic' }],
        answer: 0,
        why: { en: 'The mita forced Indigenous people into the mines; chattel slavery forced enslaved Africans across the ocean. Both were coerced labor serving colonial economies.' }
      },
      {
        q: { en: 'Which best describes how Spain kept control of distant colonies like Peru?' },
        choices: [{ en: 'Officials, local elites and armed soldiers' }, { en: 'Letting each of the colonies elect its own king' }, { en: 'A joint-stock company run from London' }, { en: 'Treaties that let rivals share the silver' }],
        answer: 0,
        why: { en: 'Colonial governments worked through royal officials and local elites, and used gunpowder weapons to put down resistance.' }
      }
    ]
  },
  learned: [
    { en: '[[coerced labor|Coerced labor]] built Spain\'s silver wealth: the [[mita|mita]] and [[encomienda|encomienda]] forced Indigenous people to work, and [[chattel slavery|chattel slavery]] forced enslaved Africans to the Americas.' },
    { en: 'American silver became money for the world: it flooded Spain, causing [[inflation|inflation]], and crossed the Pacific on [[galleon|galleons]] to China and India.' },
    { en: '[[mercantilism|Mercantilism]] tied colonies to their home country, and [[joint-stock company|joint-stock companies]] let investors share the risks of overseas trade and empire.' }
  ],
  reflect: {
    q: { en: 'AP practice: Explain one way silver from the Spanish Americas changed the global economy between 1450 and 1750.' },
    starter: { en: 'Silver from the Spanish Americas changed the global economy because' }
  }
};
