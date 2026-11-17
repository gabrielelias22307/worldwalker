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
   mita and chattel slavery as labor systems), "The Disastrous Effects of Increased Global Interactions" (4.3: the 50 to 90
   percent decline, chattel slavery), "Transatlantic Migration Patterns" (4.7, Burleigh Hendrickson: the Bernardin de
   Saint-Pierre quotation of 1773 and the sugar colonies). The two reading stands: Bernardin de Saint-Pierre (primary
   source, by the merchants' houses) and "The New Economics of Empire," adapted from "Overview of New Economic Systems"
   (by the treasury). World History Project content is CC BY-NC 4.0. Facts here come from those
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
    { en: 'Talk to the 4 people here, read the 2 sources on the lecterns, help a seamstress, then wake the time stone.' }
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
        { en: 'Spanish officials forced me to leave my village and dig silver in these mines. They call it the [[mita|mita]]. The Spanish force Indigenous people to mine the silver.' },
        { en: 'Spain also uses the [[encomienda|encomienda]], part of its colonial law to control Indigenous American labor. It is a form of enslavement.' },
        { en: 'Since 1492, smallpox, measles and influenza have killed millions of us. Historians estimate the Indigenous population of the Americas fell by 50 to 90 percent.' },
        { en: 'So few of us are left that there is a labor shortage. Europeans forcibly bring enslaved Africans instead: [[chattel slavery|chattel slavery]], owned for life, their children too.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Which of the following best explains why Europeans forcibly brought enslaved Africans to the Americas?' },
        choices: [
          { ok: true, t: { en: 'Epidemics killed millions and left a labor shortage' }, why: { en: 'Yes. Diseases new to the Americas killed 50 to 90 percent of Indigenous people. Europeans filled the labor shortage by forcing enslaved Africans across the ocean.' } },
          { t: { en: 'Spanish law forbade forcing Indigenous people to work' }, why: { en: 'No. Spanish law did the opposite: the encomienda and the mita forced Indigenous people to work. Disease, not law, caused the labor shortage.' } },
          { t: { en: 'Indigenous Americans were immune to the new diseases' }, why: { en: 'No. Indigenous Americans had never met these diseases and had no resistance to them. That is why so many died.' } }
        ]
      }
    },
    {
      x: 24, y: 13, name: { en: 'Rosa' }, role: { en: 'Llama driver' },
      look: { skin: 4, hair: '#1b1410', shirt: '#c0392b', pants: '#2e3a5a', hat: '#5a3a2a', style: 'long' },
      lines: [
        { en: 'My llamas carry silver bars down from the mines. Silver is a precious metal used as money around the globe.' },
        { en: 'Ships carry it across the Atlantic to Seville in Spain. From Spain it flows on to the rest of Europe.' },
        { en: 'Since the 1570s, huge [[galleon|galleons]] carry Spanish silver across the Pacific, from Acapulco in New Spain to Manila in the Philippines, and on to China and India.' },
        { en: 'Silver fuels trade across the world, especially with China. It enriches Spain, Western Europe and China, but it is dug by forced Indigenous labor.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Which of the following best explains why silver from the Andes mattered far beyond Peru?' },
        choices: [
          { ok: true, t: { en: 'It was money that linked the Americas, Europe and Asia' }, why: { en: 'Right. Silver crossed the Atlantic to Europe and the Pacific to China and India. It became the great facilitator of global trade.' } },
          { t: { en: 'It paid for Spain\'s trade with Africa and nowhere else' }, why: { en: 'No. Silver went to Spain and Europe, and on galleons through Manila to China and India. Rosa names Asia, not only Africa.' } },
          { t: { en: 'It stayed in the Andes to build Spanish churches' }, why: { en: 'No. Most silver left Peru: across the Atlantic to Spain, and across the Pacific to Asia.' } }
        ]
      }
    },
    {
      x: 10, y: 7, name: { en: 'Don Diego' }, role: { en: 'Royal official' },
      look: { skin: 1, hair: '#3a2a1a', shirt: '#2a2a3a', pants: '#1a1a24', robe: true, hat: '#1a1a1a', style: 'short' },
      lines: [
        { en: 'Since 1542 the Viceroyalty of Peru holds all Spanish lands in South America. A viceroy, a "vice king" in Lima, rules for the king, with councils of judges called audiencias.' },
        { en: 'The crown follows [[mercantilism|mercantilism]]: use the economy to expand political power, forbid free trade, and sell more than you buy.' },
        { en: 'So this colony sends raw materials like silver to Spain and buys Spain\'s finished goods. Colonists may not trade with other countries.' },
        { en: 'We Spaniards are few, yet we rule: through royal officials, local elites who work with us, and soldiers whose gunpowder weapons put down resistance.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Which of the following policies most directly reflects mercantilism?' },
        choices: [
          { ok: true, t: { en: 'Colonies may trade only with the home country' }, why: { en: 'Yes. Colonies supply raw materials and buy finished goods inside one empire, so the home country sells more than it buys and grows more powerful.' } },
          { t: { en: 'Private firms trade with little control by the crown' }, why: { en: 'No. That is closer to the later "let it be" (laissez-faire) idea. Under mercantilism the government controlled much of the economy.' } },
          { t: { en: 'The home country buys more goods than it sells' }, why: { en: 'No. That is the opposite of the goal. Mercantilists wanted to sell more than they bought.' } }
        ]
      }
    },
    {
      x: 20, y: 8, name: { en: 'Isabel' }, role: { en: 'Cloth merchant' },
      look: { skin: 0, hair: '#5a3a1a', shirt: '#2a6a5a', robe: true, style: 'bun' },
      lines: [
        { en: 'Letters say London merchants founded an East India Company this very year, 1600, to import textiles and spices from the Mughal Empire in India.' },
        { en: 'It is a [[joint-stock company|joint-stock company]]: many small investors split the costs and share the profits. If ships sink, no single investor loses everything.' },
        { en: 'It is also a [[chartered company|chartered company]], licensed by the King of England, like the Dutch East India Company and the Portuguese Company of the Indies.' },
        { en: 'The risk is real. Early in this century, as many as half of all Portuguese ships setting out for the Indian Ocean were lost at sea.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Which of the following best explains why European merchants formed joint-stock companies?' },
        choices: [
          { ok: true, t: { en: 'To spread the cost and risk of voyages among many' }, why: { en: 'Yes. Ocean trade was a costly gamble. Splitting costs among many investors kept each one\'s losses small.' } },
          { t: { en: 'To let the king own and run all of the trade' }, why: { en: 'No. The king licensed (chartered) the East India Company, but many private investors owned it.' } },
          { t: { en: 'Because new ships had made the voyages safe' }, why: { en: 'No. Ships still sank: half the Portuguese ships bound for the Indian Ocean were lost. Joint-stock companies spread those losses.' } }
        ]
      }
    },
    {
      doc: true, x: 27, y: 6, icon: '📜',
      name: { en: 'Coffee, Sugar and Two Continents' }, role: { en: 'Primary source' },
      src: { en: 'J.H. Bernardin de Saint-Pierre (1773); quoted in "Transatlantic Migration Patterns," World History Project' },
      lines: [
        { en: '"I do not know if coffee and sugar are essential to the happiness of Europe, but I know well that these two products have accounted for the unhappiness of two great regions of the world:"' },
        { en: '"America has been depopulated to have land on which to plant them; Africa has been depopulated so as to have the people to cultivate them."' },
        { en: 'Context: J.H. Bernardin de Saint-Pierre wrote this in 1773, more than 170 years after this day in Potosí. He writes about "the happiness of Europe": he looks at the trade from Europe, where demand for sugar and coffee had boomed. By his time there were sugar colonies in Portuguese Brazil, Spanish Cuba, British Jamaica and, most profitable of all, French Saint-Domingue.' },
        { en: 'The pattern he names began in this era. Disease killed millions of Indigenous Americans and left a labor shortage, and Europeans forced enslaved Africans to work the plantations. From 1580, enslaved Africans far outnumbered European migrants to the Americas. The Americas supplied the land, Africa the forced labor, and Europe made money from producing, shipping and using the goods.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Point of view: which best describes the author\'s point of view in this source?' },
        choices: [
          { ok: true, t: { en: 'A European questioning the human cost of Europe\'s luxuries' }, why: { en: 'Yes. He doubts that sugar and coffee are essential to Europe\'s happiness and says they cost the Americas and Africa their people.' } },
          { t: { en: 'A planter arguing that sugar needs enslaved labor to grow' }, why: { en: 'No. He does not defend the plantations. He says sugar and coffee brought "unhappiness" to two great regions of the world.' } },
          { t: { en: 'An African ruler praising the profits of the Atlantic trade' }, why: { en: 'No. He writes about "the happiness of Europe", and he condemns the trade: Africa was "depopulated".' } }
        ]
      }
    },
    {
      doc: true, x: 12, y: 8, icon: '📖',
      name: { en: 'The New Economics of Empire' }, role: { en: 'Reading' },
      src: { en: 'Adapted from "Overview of New Economic Systems" by Eman M. Elshaikh, World History Project (Khan Academy)' },
      lines: [
        { en: 'Lending money was once seen as wrong. A character in Shakespeare\'s Hamlet advises, "Neither a borrower nor a lender be." The Christian Church banned charging interest. Then Leonardo of Pisa, called Fibonacci (c. 1175–1250), wrote Liber Abaci. It brought Europe Hindu-Arabic numerals, fractions and decimals, and ways to calculate profits and interest. The first modern banks grew in Florence and Venice, using bills of exchange, related to modern checks.' },
        { en: 'Still, ocean trade was a costly gamble: if the ships sank, you lost all your money. Joint-stock companies were the answer. Several investors split the initial costs and shared the profits, so no one person took on a huge burden. They were not new: the Song dynasty in China used them around 1000 CE, and the Muslim world had another form. But in the 1500s and 1600s the model took off on an international scale, starting in Europe.' },
        { en: 'Running an empire was not cheap, and joint-stock companies often funded colonizing better than governments. The British and Dutch East India Companies were companies, not governments, yet they performed colonial administration in India. Many European states followed mercantilism: colonies supplied raw materials, bought finished goods, and could not trade with other countries. As merchants grew rich, a middle class emerged in Europe, and later capitalism.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'According to the reading, which best explains why joint-stock companies became key to building overseas empires?' },
        choices: [
          { ok: true, t: { en: 'They spread empire\'s high costs and risks among many investors' }, why: { en: 'Yes. Empire was costly and voyages were risky. Shared ownership kept each investor\'s losses small, so companies could fund colonies better than governments.' } },
          { t: { en: 'They were a European invention no earlier state had used' }, why: { en: 'No. The Song dynasty in China used joint-stock companies around 1000 CE. What was new was their international scale.' } },
          { t: { en: 'They let colonists trade freely with any country they chose' }, why: { en: 'No. Under mercantilism, colonies could not trade with other countries. Companies helped fund empire; they did not free colonial trade.' } }
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
      lines: [{ en: 'My husband sailed from Spain to make quick money in the silver mines. He means to go home a much wealthier man.' }, { en: 'This town holds Indigenous, African, Asian and Spanish people. Yet the few Spaniards run the government and the economy.' }] },
    { at: [28, 2], name: { en: 'Shopkeeper Mendoza' }, look: { skin: 2, hair: '#1b1410', shirt: '#8a6a2a', style: 'short' },
      lines: [{ en: 'Silver, sugar, and red and blue dyes are the riches of Spain\'s colonies.' }, { en: 'Everything on my shelves came on the king\'s ships from Spain.' }, { en: 'English, Dutch and French pirates raid those ships. They want a share of the riches Spain and Portugal claim.' }] },
    { at: [3, 13], name: { en: 'Sisa' }, look: { skin: 4, hair: '#1b1410', shirt: '#6a3a7a', style: 'long' },
      lines: [{ en: 'My husband was sent to the mines. I wait for him to come home.' }, { en: 'We keep our language and our ways, even under Spanish rule.' }] },
    { at: [9, 13], name: { en: 'Grandmother Wayra' }, look: { skin: 3, hair: '#8a8a8a', shirt: '#2a5a8a', style: 'bun' },
      lines: [{ en: 'The sicknesses that came with the Spanish took many in our village.' }, { en: 'Fewer hands remain, yet the mines still demand workers.' }] },
    { at: [28, 13], name: { en: 'Lorenzo' }, look: { skin: 2, hair: '#2b1d14', shirt: '#4a7a4a', style: 'short' },
      lines: [{ en: 'My father is Spanish and my mother is Andean.' }, { en: 'Mestizos like me, usually of Spanish fathers and Indigenous mothers, Africans and Indigenous people together far outnumber the Spaniards.' }, { en: 'Colonial society ranks people by ancestry. People call it the [[casta system|casta system]].' }] }
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
        { en: 'Under Spain\'s mercantilist rules, finished goods come from Spain and the colony pays with raw silver. Ask Felipe the porter, southeast, past the llama corral.' }
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
        q: { en: 'The excerpt best supports which of the following claims about the global economy, 1450–1750?' },
        choices: [{ en: 'Coerced labor in the Americas underpinned world trade' }, { en: 'Wage labor from Europe drove the American silver economy' }, { en: 'Silver enriched Spain but never reached Asian markets' }, { en: 'China\'s own mines supplied most of the world\'s silver' }],
        answer: 0,
        why: { en: 'The silver that linked Europe, the Americas and Asia was dug by Indigenous people forced to work under systems like the mita. It benefited Spain, Western Europe and China.' }
      },
      {
        stim: { title: { en: 'Where silver from Spanish America went' }, rows: [[{ en: 'Route' }, { en: 'Destination' }], [{ en: 'Across the Atlantic to Seville' }, { en: 'Spain, then the rest of Europe' }], [{ en: 'Across the Pacific by galleon, Acapulco to Manila (from the 1570s)' }, { en: 'China and India, via the Philippines' }]], src: { en: 'From "Origins of Oceanic Connections" and "Survey of Transoceanic Empires," World History Project' } },
        q: { en: 'Which of the following best explains why the trade shown in the table mattered to the global economy?' },
        choices: [{ en: 'Galleons kept every Asian good out of the Americas' }, { en: 'The Pacific route ended Spain\'s Atlantic trade' }, { en: 'Silver used as money tied American mines to Asia' }, { en: 'Dutch companies carried most of the silver to China' }],
        answer: 2,
        why: { en: 'Silver was money around the globe. Crossing both oceans, it linked the mines of the Americas to Europe and to China and India: the great facilitator of global trade.' }
      },
      {
        stim: { text: { en: '"I do not know if coffee and sugar are essential to the happiness of Europe, but I know well that these two products have accounted for the unhappiness of two great regions of the world: America has been depopulated to have land on which to plant them; Africa has been depopulated so as to have the people to cultivate them."' }, src: { en: 'J.H. Bernardin de Saint-Pierre (1773), quoted in "Transatlantic Migration Patterns," World History Project' } },
        q: { en: 'Which of the following best explains the pattern the author describes?' },
        choices: [{ en: 'Mercantilist rules banned sugar from the Americas' }, { en: 'European demand for cash crops drove forced labor' }, { en: 'Plantation wars, not disease, emptied the Americas' }, { en: 'Spanish silver paid wages to African field workers' }],
        answer: 1,
        why: { en: 'Demand for sugar and coffee boomed in Europe. Disease had left a labor shortage in the Americas, so Europeans forced enslaved Africans to work the plantations, and Europe made the money.' }
      },
      {
        stim: { text: { en: 'Mercantilism is an economic philosophy in which a government uses its economy to expand political power, prohibiting free trade. The goal is to sell more than you buy.' }, src: { en: 'Adapted from "Overview of New Economic Systems," World History Project' } },
        q: { en: 'Which Spanish colonial rule most directly reflects the philosophy described above?' },
        choices: [{ en: 'Colonists may sell silver to Dutch traders' }, { en: 'Colonists may trade only with Spain' }, { en: 'Private firms trade with little crown control' }, { en: 'Spain must import more than it exports' }],
        answer: 1,
        why: { en: 'Under mercantilism, colonies supplied raw materials, bought the home country\'s finished goods and could not trade with other countries. Little government control is the later laissez-faire idea.' }
      },
      {
        stim: { text: { en: 'Strictly speaking, joint-stock companies were not new: they were used in the Song Dynasty in China around 1000 CE, and in a different form in the Muslim world. But in the sixteenth and seventeenth centuries, the joint-stock model really took off on a more international scale, starting in Europe.' }, src: { en: 'Adapted from "Overview of New Economic Systems," World History Project' } },
        q: { en: 'Which of the following best describes the continuity and change shown in the passage?' },
        choices: [{ en: 'Europe invented shared ownership in the 1600s' }, { en: 'Shared ownership ended as Europe\'s empires grew' }, { en: 'Song China used the form to rule lands in India' }, { en: 'An older business form spread on a global scale' }],
        answer: 3,
        why: { en: 'Continuity: shared ownership was centuries old, in Song China and the Muslim world. Change: from the 1500s it took off on an international scale, starting in Europe.' }
      },
      {
        stim: { text: { en: 'Among the wealthiest were the British East India Company and the Dutch East India Company. These were companies, not governments, yet they performed colonial administration in India on behalf of the British and the Dutch.' }, src: { en: 'Adapted from "Overview of New Economic Systems," World History Project' } },
        q: { en: 'Compared with Spain\'s rule of Peru, the passage shows that the British and Dutch in India…' },
        choices: [{ en: 'could rely on private companies to govern' }, { en: 'ruled through a viceroy and audiencias' }, { en: 'banned joint-stock firms from ocean trade' }, { en: 'had no royal license for their companies' }],
        answer: 0,
        why: { en: 'Spain ruled Peru through a viceroy, royal officials and soldiers. The British and Dutch East India Companies, licensed but privately owned, ran colonial administration in India.' }
      },
      {
        q: { en: 'Which of the following best explains the rising prices in Spain around 1600?' },
        choices: [{ en: 'A shortage of silver coins in Spanish markets' }, { en: 'Galleons carried Spain\'s silver off to Asia' }, { en: 'A flood of American silver cut each coin\'s value' }, { en: 'Mercantilist bans raised the price of Dutch goods' }],
        answer: 2,
        why: { en: 'So much American silver poured into Spain that each coin bought less. That general rise in prices is inflation.' }
      },
      {
        stim: { text: { en: 'Encomienda was part of the colonial Spanish legal system used to control the Indigenous American labor force, and it was a form of enslavement.' }, src: { en: 'Adapted from "The Columbian Exchange," World History Project' } },
        q: { en: 'Compared with chattel slavery in the Americas, the system described above…' },
        choices: [{ en: 'was also coerced labor, of Indigenous Americans' }, { en: 'was a wage system that paid Indigenous workers' }, { en: 'shipped Indigenous workers across the Atlantic' }, { en: 'was used in Portuguese Brazil but not in Peru' }],
        answer: 0,
        why: { en: 'Both were coerced labor serving colonial profit. The encomienda and the mita forced Indigenous Americans to work; chattel slavery made enslaved Africans property for life, their children too.' }
      }
    ]
  },
  learned: [
    { en: '[[coerced labor|Coerced labor]] built Spain\'s silver wealth: the [[mita|mita]] and [[encomienda|encomienda]] forced Indigenous people to work, and [[chattel slavery|chattel slavery]] forced enslaved Africans to the Americas.' },
    { en: 'American silver became money for the world: it flooded Spain, causing [[inflation|inflation]], and crossed the Pacific on [[galleon|galleons]] to China and India.' },
    { en: '[[mercantilism|Mercantilism]] tied colonies to their home country, and [[joint-stock company|joint-stock companies]] let investors share the risks of overseas trade and empire; the British and Dutch East India Companies even governed lands in India.' }
  ],
  reflect: {
    q: { en: 'AP practice: Explain one way silver from the Spanish Americas changed the global economy between 1450 and 1750.' },
    starter: { en: 'Silver from the Spanish Americas changed the global economy because' }
  }
};
