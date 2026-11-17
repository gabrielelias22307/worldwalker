/* HISTORYWALKER · Episode 1.1 · Developments in East Asia (AP World Topic 1.1, c. 1200–1450)
   The model HistoryWalker episode: Hangzhou, capital of Song China, in 1200.
   Content source: Khan Academy, AP World History (World History Project), Unit 1 Lesson "Developments in East Asia":
   "East Asia 1200–1450" (Merry Wiesner-Hanks), "Confucianism", "Why do Belief Systems Spread? How China Made Buddhism
   its Own". World History Project content is CC BY-NC 4.0. Facts here come from those readings. English only, AP level. */
window.EPISODE = {
  id: '1.1',
  realm: 1,
  sol: 'AP 1.1',
  style: 'china',
  weather: { sky: 'petals', time: 'day' },
  title: { en: 'Developments in East Asia' },
  place: { en: 'Hangzhou, Song China, 1200' },
  intro: [
    { en: 'The Grump blurred the page on Song China. Hangzhou is forgetting how it rules, grows and believes!' },
    { en: 'Talk to the 4 people here, help a traveler from Japan, then wake the time stone.' }
  ],
  scenes: {
    at: [120.15, 30.25],
    year: 1200,
    start: [
      { en: 'In 1200, the Song dynasty ruled southern China. Its capital was Hangzhou.' },
      { en: 'Eastern China was the most urbanized part of the world, with at least six cities over 100,000 people.' },
      { en: 'Hangzhou grew from a rice-growing village into perhaps the largest city on Earth.' }
    ],
    guess: {
      q: { en: 'Song China had about 100 million people by the 1100s. What do you think fed them?' },
      choices: [{ t: { en: '🌾 More rice' }, ok: true }, { t: { en: '🐟 Only fish' } }],
      why: { en: 'Farmers turned forests and swamps into rice paddies and grew two harvests a year.' }
    },
    page: { en: 'Song China printed the world\'s first government-issued paper money, in the 1120s.' },
    next: {
      q: { en: 'Next: Dar al-Islam. Did Muslim scholars keep and build on Greek learning?' },
      choices: [{ t: { en: 'Yes, they did' }, ok: true }, { t: { en: 'No, it was lost' } }],
      why: { en: 'Scholars in Muslim cities translated and added to Greek, Persian and Indian knowledge. You go there next.' }
    }
  },
  start: [16, 9],
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT',
    'T~~~~~~~~T.DDDDDl.RRR..RRRR....T',
    'T~~~~~~~~..DDDDDl.hdh..hhdh....T',
    'T~~====~~..DDdDDlx.l.....l.....T',
    'T~~====~~k.llllll..l.....l.....T',
    'T~~====~~llllllllllllllllllllllT',
    'T~~====~~......xl.lllllllll....T',
    'T~~~~~~~~...,...l.lmlmlmlml..T.T',
    'T~~~~~~~~TTT....l.lllllllll...TT',
    'T~~~~~~~~.....T.l..........~~..T',
    'TT..T...T.......l..T..,..T.~~..T',
    'T.RRR...........lllllll....~~.,T',
    'T.hdh.....,.....lllllll....~~..T',
    'T::::x::::::::::lllllll....~~..T',
    'T.qqqqq:qqqqq...lllllllllllbb::T',
    'T.qqqqq:qqqqq...l..........~~x.T',
    'T.qqqqq:qqqqq...l.........k~~..T',
    'T.:::::::::::...l...QQQQ..k~~..T',
    'T.qqqqq:qqqqq.T.l...hhdh...~~T.T',
    'T.qqqqq:qqqqqT..llllllll...~~.TT',
    'T..,.......,....l........,.~~..T',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT'
  ],
  words: {
    'dynasty': { en: 'a family that rules a state for many generations, like the Song (960–1279)' },
    'civil service exam': { en: 'a hard written test on Confucian books; passing it could win a man a government job' },
    'scholar-official': { en: 'an educated man who passed the exams and worked for the government' },
    'confucianism': { en: 'the ideas of the thinker Confucius: proper relationships, respect for elders and good government' },
    'filial piety': { en: 'respect and honor for parents and elder family members' },
    'social hierarchy': { en: 'a ranking of people from higher to lower, like ruler over subject or father over son' },
    'wet-field rice': { en: 'rice grown in flooded, leveled fields called paddies' },
    'paper money': { en: 'printed paper used in place of coins; the Song government issued it from the 1120s' },
    'buddhism': { en: 'a belief system that began in India with the teachings of Siddhartha Gautama, the Buddha' },
    'pure land': { en: 'a popular form of Buddhism: simple devotion to the Buddha Amitabha can bring rebirth in paradise' },
    'sinicized': { en: 'changed by Chinese influence to fit Chinese ideas and customs' },
    'shogun': { en: 'the top general who ran Japan\'s military government' }
  },
  npcs: [
    {
      x: 14, y: 6, name: { en: 'Wen' }, role: { en: 'Exam student' },
      look: { skin: 1, hair: '#1b1410', shirt: '#3a5a8a', robe: true, style: 'bun' },
      lines: [
        { en: 'I have studied for years to take the [[civil service exam|civil service exams]]. Hundreds of thousands of young men try.' },
        { en: 'Family name is still the easiest path to power. But passing the exams can make even a poor man a [[scholar-official|scholar-official]].' },
        { en: 'We study [[confucianism|Confucian]] books gathered by Zhu Xi. They teach a [[social hierarchy|hierarchy]]: ruler over subject, father over son, husband over wife.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'What did the civil service exams change in Song China?' },
        choices: [
          { ok: true, t: { en: 'More able men could win government jobs' }, why: { en: 'Yes. Aristocratic family was still the easiest path, but the exams opened a second path to power for educated men.' } },
          { t: { en: 'Women could now take and pass the exams' }, why: { en: 'No. The exams were not open to women. Confucian teaching said a woman\'s place was the household.' } },
          { t: { en: 'The exams now chose who became emperor' }, why: { en: 'No. The emperor came from the ruling dynasty. The exams chose officials who served him.' } }
        ]
      }
    },
    {
      x: 22, y: 9, name: { en: 'Mei' }, role: { en: 'Silk weaver' },
      look: { skin: 1, hair: '#1b1410', shirt: '#c0392b', robe: true, style: 'long' },
      lines: [
        { en: 'My mother and I raise silkworms, spin the thread and weave cloth at home. Our silk pays our rent and taxes.' },
        { en: 'We trade with coins or [[paper money|paper money]]. Merchants invented it, and since the 1120s our government prints it too.' },
        { en: 'Hangzhou became the Song capital in 1132. People pour in from the countryside and the lost north. Soon we may be a million!' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Confucian books say a woman\'s place is the household. What does Mei\'s work show about that?' },
        choices: [
          { ok: true, t: { en: 'Work at home could earn the family money' }, why: { en: 'Right. Household silk making was real production: it paid rents and taxes and bought goods.' } },
          { t: { en: 'Women never worked in Song China' }, why: { en: 'No. Village women raised silkworms, spun thread and wove cloth that supported the family.' } },
          { t: { en: 'Women ran the silk trade with Europe' }, why: { en: 'No. Mei weaves at home and sells in Hangzhou. Nothing here says women ran trade with Europe.' } }
        ]
      }
    },
    {
      x: 6, y: 16, name: { en: 'Old Lu' }, role: { en: 'Rice farmer' },
      look: { skin: 2, hair: '#8a8a8a', shirt: '#6a7a4a', pants: '#3a3a2a', hat: '#c9a24a', style: 'short' },
      lines: [
        { en: 'My grandfather\'s village turned this swamp into flooded paddies. Now rain does not decide if we eat.' },
        { en: 'We grow seedlings in a seed bed, then every family member helps move them into the flooded field. It is hard work!' },
        { en: 'That way we reap two harvests a year. More rice means more people: China has doubled since the old days.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why could China\'s population grow from about 50 million to about 100 million by the 1100s?' },
        choices: [
          { ok: true, t: { en: 'Wet-field rice gave two harvests a year' }, why: { en: 'Yes. Irrigated paddies and transplanted seedlings expanded the food supply, so more people could be fed.' } },
          { t: { en: 'Farmers stopped growing rice for cash crops' }, why: { en: 'No. Villagers grew cash crops like tea and mulberry, but rice paddies were what fed the growing population.' } },
          { t: { en: 'The rains in China became regular' }, why: { en: 'No. Paddies were irrigated so farmers depended less on irregular rain.' } }
        ]
      }
    },
    {
      x: 24, y: 20, name: { en: 'Brother Jun' }, role: { en: 'Buddhist monk' },
      look: { skin: 1, hair: '#2b1d14', shirt: '#d9822b', robe: true, style: 'short' },
      lines: [
        { en: '[[buddhism|Buddhism]] began in India. Merchants on the Silk Roads carried it here long ago, with their goods.' },
        { en: 'The Chinese made it their own. They mixed it with Daoist ideas and Chinese customs. We say it became [[sinicized|Sinicized]].' },
        { en: 'Many ordinary people love [[pure land|Pure Land]] Buddhism. Monks from Japan study it here and carry it home.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'What happened to Buddhism after it reached China?' },
        choices: [
          { ok: true, t: { en: 'It blended with Chinese beliefs' }, why: { en: 'Yes. Buddhism mixed with Daoism and Chinese customs. Belief systems often change as they spread.' } },
          { t: { en: 'It stayed exactly as it was in India' }, why: { en: 'No. The Chinese changed it, for example in how they understood the Pure Land and nirvana.' } },
          { t: { en: 'The Song government banned it for good' }, why: { en: 'No. Buddhism never disappeared in China. It was practiced alongside Daoism and Confucianism.' } }
        ]
      }
    },
    {
      doc: true, x: 12, y: 9, icon: '📜',
      name: { en: 'The Analects of Confucius' }, role: { en: 'Primary source' },
      src: { en: 'Confucius, The Analects 1.6 and 1.9 (about 500 BCE); quoted in "Confucianism," World History Project' },
      lines: [
        { en: '"The Master said: A young man should be filial within his home and respectful of elders when outside, should be careful and trustworthy, broadly caring of people at large, and should cleave to those who are ren [virtuous in all things]."' },
        { en: '"Master Zeng said: Devote care to life\'s end and pursue respect for the distant dead; in this way, the virtue of the people will return to fullness."' },
        { en: 'Song scholars studied these words for the exams. The family was seen as a small government: order at home made order in the state.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Sourcing: why would the Song state want its officials to master these passages?' },
        choices: [
          { ok: true, t: { en: 'They taught duty, respect and order' }, why: { en: 'Yes. Filial piety at home was meant to become loyalty and order in the state. That served the government.' } },
          { t: { en: 'They taught how to grow more rice' }, why: { en: 'No. The passages are about duty and virtue, not farming.' } },
          { t: { en: 'They praised merchants over scholars' }, why: { en: 'No. Nothing here is about merchants. It is about family duty and virtue.' } }
        ]
      }
    }
  ],
  houses: [
    { at: [13, 3], name: { en: 'Examiner Gao' }, look: { skin: 1, hair: '#6e6e6e', shirt: '#7a2a2a', robe: true, style: 'bun' },
      lines: [{ en: 'This is the examination hall. Candidates write for days in tiny rooms.' }, { en: 'Success brings an important post. Failure brings shame to the whole family.' }] },
    { at: [19, 2], name: { en: 'Silk merchant Pan' }, look: { skin: 1, hair: '#1b1410', shirt: '#8e5bd6', robe: true, style: 'short' },
      lines: [{ en: 'Silk from village homes fills my shelves. Buyers come from all over the empire.' }, { en: 'We also sell porcelain cups. Everyone wants them for drinking tea!' }] },
    { at: [25, 2], name: { en: 'Teahouse keeper Bai' }, look: { skin: 0, hair: '#2b1d14', shirt: '#2a8a6a', robe: true, style: 'long' },
      lines: [{ en: 'Welcome! Tea is one of China\'s most important trade goods.' }, { en: 'Hangzhou has markets, bathhouses, silk shops and painted ships. Visitors are amazed.' }] },
    { at: [3, 12], name: { en: 'Lu\'s daughter-in-law' }, look: { skin: 2, hair: '#1b1410', shirt: '#4a7aa8', style: 'long' },
      lines: [{ en: 'In transplanting season, even the children wade into the paddies.' }, { en: 'Our family also grows mulberry leaves to feed silkworms.' }] },
    { at: [22, 18], name: { en: 'Abbess Hui' }, look: { skin: 1, hair: '#2b1d14', shirt: '#b98250', robe: true, style: 'bun' },
      lines: [{ en: 'Here people chant the name of the Buddha Amitabha and hope for rebirth in the Pure Land.' }, { en: 'Some people here follow Buddhist, Daoist and Confucian ways all at once.' }] }
  ],
  signs: [
    { x: 17, y: 3, text: { en: 'EXAMINATION HALL · Pass the Confucian exams, become a scholar-official.' } },
    { x: 15, y: 6, text: { en: 'HANGZHOU · Capital of the Song dynasty since 1132. Maybe the largest city in the world.' } },
    { x: 5, y: 13, text: { en: 'RICE PADDIES · Seedlings are moved by hand into flooded fields. Two harvests a year.' } },
    { x: 29, y: 15, text: { en: 'TO THE YANGZI DELTA · Canals carry rice, silk and tea to the capital.' } }
  ],
  finds: [
    { clueAt: [18, 3], at: [20, 4], decor: 'coinold', clue: { en: 'From this note, walk 2 steps east and 1 step south. Look below the silk shop.' },
      text: { en: 'A string of Song copper coins! Paper money was easier to carry than heavy strings like this.' } }
  ],
  scraps: [[10, 2], [30, 1], [1, 20]],
  smudges: [[24, 12], [10, 19]],
  quest: {
    stat: 'reg',
    title: { en: 'The Monk from Japan' },
    giver: {
      x: 11, y: 10, name: { en: 'Kenji' }, role: { en: 'Monk from Japan' },
      look: { skin: 0, hair: '#1b1410', shirt: '#4a4a5a', robe: true, style: 'short' },
      lines: [
        { en: 'I sailed from Japan to study Buddhism here. Japanese monks bring Chinese teachings home, like Zen and Pure Land.' },
        { en: 'The Grump\'s helpers scattered my printed sutras! Ask the printer by the canal. Printers know every book in this city.' }
      ],
      wait: { en: 'The printer works on the east side, by the canal dock, south of the bridge.' },
      thanks: { en: 'My sutras! Chinese writing and Buddhist teachings, carried home, will shape Japan in its own way. Thank you.' }
    },
    contact: {
      x: 25, y: 16, name: { en: 'Printer Shen' }, role: { en: 'Book printer' },
      look: { skin: 1, hair: '#2b1d14', shirt: '#5a3a2a', pants: '#2a2a3a', style: 'short' },
      lines: [
        { en: 'We carve whole pages on wood blocks and print many copies. Exam students buy our Confucian manuals.' },
        { en: 'A bundle of sutras blew across the bridge. Cross it, then walk 2 steps east along the path.' }
      ]
    },
    action: {
      type: 'find', at: [30, 14],
      hint: { en: 'Cross the canal bridge, then 2 steps east' },
      found: { en: 'There they are, against the far wall: Kenji\'s printed sutras, safe and dry.' },
      item: { icon: '📜', name: { en: 'Kenji\'s printed sutras' } }
    }
  },
  challenge: {
    at: [19, 13], type: 'carry', stat: 'pla',
    title: { en: 'Sort the Song world' },
    intro: { en: 'The Grump scrambled the record of Song China. Carry each card to its AP theme: government, economy, or belief and culture.' },
    zones: [
      { bin: 'gov', x: 17, y: 11, w: 3, h: 2 },
      { bin: 'ecn', x: 20, y: 11, w: 3, h: 2 },
      { bin: 'cdi', x: 18, y: 15, w: 4, h: 2 }
    ],
    bins: [
      { id: 'gov', icon: '🏛️', label: { en: 'Government' }, sub: { en: 'who rules, and how' } },
      { id: 'ecn', icon: '💰', label: { en: 'Economy' }, sub: { en: 'farming, making, trading' } },
      { id: 'cdi', icon: '🙏', label: { en: 'Belief and culture' }, sub: { en: 'religions and ideas' } }
    ],
    items: [
      { bin: 'gov', t: { en: 'Young men pass civil service exams and become officials.' }, why: { en: 'Choosing officials by exam is how the Song state was run: government.' } },
      { bin: 'gov', t: { en: 'Korea\'s Koryŏ rulers model their government and capital on China.' }, why: { en: 'Copying a way to rule and build a capital is about government. China influenced its neighbors.' } },
      { bin: 'ecn', t: { en: 'Villagers transplant rice seedlings and reap two harvests a year.' }, why: { en: 'Growing more food is the economy, and it let China\'s population double.' } },
      { bin: 'ecn', t: { en: 'The Song government issues paper money in the 1120s.' }, why: { en: 'Money is how people trade: the economy. This was the world\'s first government paper money.' } },
      { bin: 'cdi', t: { en: 'Zhu Xi gathers Confucian writings into one official version.' }, why: { en: 'Confucian ideas about hierarchy and family are beliefs. Zhu Xi\'s version became the basis of the exams.' } },
      { bin: 'cdi', t: { en: 'Pure Land Buddhism promises paradise through simple devotion.' }, why: { en: 'A form of Buddhism is a belief system. It spread from China to Japan.' } }
    ],
    success: { en: 'Every card is home! Government, economy and belief were tied together in Song China: the exams ran on Confucian books.' }
  },
  boss: {
    at: [29, 3], stat: 'hei', need: 3,
    name: { en: 'The Fog Grump' },
    appear: { en: 'The Fog Grump is hiding behind the teahouse!' },
    taunt: { en: 'Exams, rice, paper money... who cares? I will fog up all of Song China!' },
    win: { en: 'The fog lifts over West Lake. The page on East Asia floats down into your hands!' },
    questions: [
      {
        stim: { text: { en: '"A young man should be filial within his home and respectful of elders when outside, should be careful and trustworthy..."' }, src: { en: 'Confucius, The Analects, 1.6 (about 500 BCE)' } },
        q: { en: 'Song scholars studied passages like this one. Which value does the passage teach?' },
        choices: [{ en: 'Respect for elders and family duty' }, { en: 'Equality between rulers and subjects' }, { en: 'Escape from all earthly duties' }, { en: 'Trade as the surest path to success' }],
        answer: 0,
        why: { en: 'Being filial means honoring parents and elders. Confucian teaching built society on respect inside the family and a hierarchy outside it.' }
      },
      {
        stim: { title: { en: 'Population of China (estimates)' }, rows: [[{ en: 'Time' }, { en: 'People' }], [{ en: '700s CE' }, { en: 'about 50 million' }], [{ en: '1100s CE' }, { en: 'about 100 million' }]], src: { en: 'From "East Asia 1200–1450," World History Project' } },
        q: { en: 'Which development best explains the change shown in the table?' },
        choices: [{ en: 'Wet-field rice and two harvests a year' }, { en: 'The Mongol conquest of southern China' }, { en: 'Buddhism arriving from India' }, { en: 'The end of the civil service exams' }],
        answer: 0,
        why: { en: 'Turning forests and swamps into irrigated paddies expanded the food supply, which let the population grow.' }
      },
      {
        q: { en: 'Which statement best describes how a man gained power in the Song government?' },
        choices: [{ en: 'Family helped most, but exams offered another path' }, { en: 'Only soldiers who won battles could hold any office' }, { en: 'Rich merchants bought every post in the government' }, { en: 'Buddhist monks chose all the officials of the state' }],
        answer: 0,
        why: { en: 'Aristocratic family was still the easiest path, but passing the civil service exams let many able men gain influence.' }
      },
      {
        stim: { text: { en: 'In the 1120s the Song government itself began issuing money, producing the world\'s first government-issued paper money.' }, src: { en: 'Adapted from "East Asia 1200–1450," World History Project' } },
        q: { en: 'The development described above shows that Song China\'s economy was...' },
        choices: [{ en: 'growing more commercial, with new ways to trade' }, { en: 'shrinking because farmers stopped selling goods' }, { en: 'run only by barter, with no money' }, { en: 'controlled by merchants from Europe' }],
        answer: 0,
        why: { en: 'Coins, merchant paper money and then government paper money all show a busy, commercial economy that traded silk, tea and porcelain.' }
      },
      {
        q: { en: 'Confucian writings said a woman\'s proper realm was the household. Which evidence from this episode complicates that idea?' },
        choices: [{ en: 'Women\'s silk work at home paid rents and taxes' }, { en: 'Women wrote and graded the civil service exams' }, { en: 'Women served as generals in the Song army' }, { en: 'Women were barred from making any goods' }],
        answer: 0,
        why: { en: 'Even inside the household, village women produced silk thread and cloth that supported the family\'s income.' }
      },
      {
        stim: { text: { en: 'As Buddhist ideas spread from Indian merchants throughout China, some became mixed with similar beliefs that already existed, like Daoism.' }, src: { en: 'Adapted from "How China Made Buddhism its Own," World History Project' } },
        q: { en: 'The process described above is best explained as...' },
        choices: [{ en: 'a belief system changing as it spread to a new place' }, { en: 'a government forcing everyone to give up their faith' }, { en: 'a religion that stayed the same everywhere it went' }, { en: 'Confucian officials inventing Buddhism' }],
        answer: 0,
        why: { en: 'Carried by merchants along trade routes, Buddhism blended with Daoism and Chinese customs. It became Sinicized.' }
      },
      {
        q: { en: 'Which statement best compares Chinese influence on Korea and Japan in this period?' },
        choices: [{ en: 'Both adopted Chinese ideas but adapted them' }, { en: 'Both rejected everything that came from China' }, { en: 'Both were ruled directly by Song officials' }, { en: 'Only Japan ever used Chinese writing' }],
        answer: 0,
        why: { en: 'Korea\'s Koryŏ copied China\'s government and capital; Japanese monks brought home Chinese Buddhism. Each fit these ideas to its own traditions.' }
      },
      {
        q: { en: 'Why did Hangzhou grow into perhaps the largest city in the world by the 1200s?' },
        choices: [{ en: 'It was the Song capital and a trade center' }, { en: 'It was the only city left in all of China' }, { en: 'The Mongols moved their capital there first' }, { en: 'Its people moved north to farm new lands' }],
        answer: 0,
        why: { en: 'After 1132 Hangzhou was the Song capital. Trade, production and newcomers from the countryside and the north made it huge.' }
      }
    ]
  },
  learned: [
    { en: 'Song China chose many officials by [[civil service exam|civil service exams]] based on [[confucianism|Confucian]] books, which taught [[filial piety|filial piety]] and hierarchy.' },
    { en: '[[wet-field rice|Wet-field rice]], cash crops, silk, porcelain and [[paper money|paper money]] made Song China\'s economy grow, and its cities with it.' },
    { en: 'Buddhism came from India and was [[sinicized|Sinicized]]; Korea and Japan adapted Chinese government, writing and Buddhism in their own ways.' }
  ],
  reflect: {
    q: { en: 'AP practice: Explain one way the Song dynasty used Confucian ideas to rule China.' },
    starter: { en: 'The Song dynasty used Confucian ideas when' }
  }
};
