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
    { en: 'The Void blurred the page on Song China. Hangzhou is forgetting how it rules, grows and believes!' },
    { en: 'Talk to the 4 people here and read the 2 sources on their stands. Help a traveler from Japan, then wake the time stone.' }
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
    'cash crop': { en: 'a crop grown to sell, like tea, sugar, cotton or mulberry leaves' },
    'aristocracy': { en: 'old, powerful families whose rank passed from parents to children' },
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
        { en: 'I have studied for years for the [[civil service exam|civil service exams]], a Chinese invention. Hundreds of thousands of young men take them.' },
        { en: 'Birth into the [[aristocracy|aristocracy]] is still the easiest path to power. But passing the exams can make even a poor man a [[scholar-official|scholar-official]]. Women may not take them.' },
        { en: 'The scholar Zhu Xi, born in 1130, gathered the [[confucianism|Confucian]] writings into one official version. The exams are based on it now.' },
        { en: 'They teach a [[social hierarchy|hierarchy]]: ruler over subject, father over son, husband over wife, like Heaven over Earth. An official must also know poetry, music and art.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'What did the civil service exams change in Song China?' },
        choices: [
          { ok: true, t: { en: 'They gave able men another path to office' }, why: { en: 'Yes. Aristocratic family was still the easiest path, but the exams let many able, educated men gain influence.' } },
          { t: { en: 'They ended the power of aristocratic families' }, why: { en: 'No. That overstates it. Aristocratic lineage was still the easiest path to power. The exams added another path.' } },
          { t: { en: 'They opened government posts to educated women' }, why: { en: 'No. The exams were not open to women. Confucian teaching said a woman\'s place was the household.' } }
        ]
      }
    },
    {
      x: 22, y: 9, name: { en: 'Mei' }, role: { en: 'Silk weaver' },
      look: { skin: 1, hair: '#1b1410', shirt: '#c0392b', robe: true, style: 'long' },
      lines: [
        { en: 'My mother and I raise silkworms, spin the thread and weave cloth at home. Our silk pays our rents and taxes, and buys tea, oil and charcoal.' },
        { en: 'We trade with coins or [[paper money|paper money]]. Merchants invented it, and since the 1120s our government prints it too: the first government paper money in the world.' },
        { en: 'Hangzhou became the Song capital in 1132, after the Jurchens conquered most of the north. People pour in from the countryside and the lost north.' },
        { en: 'Grandmother says Hangzhou began as a rice-growing village in the Yangzi River Delta. Soon we may be a million people!' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Confucian books say a woman\'s place is the household. What does Mei\'s work show about that?' },
        choices: [
          { ok: true, t: { en: 'Work at home could earn the family money' }, why: { en: 'Right. Household silk making was real production: it paid rents and taxes and bought goods.' } },
          { t: { en: 'Confucian ideas about women had lost their hold' }, why: { en: 'No. Mei still works inside the household, as Confucian teaching expected. Her work shows what that household role could include.' } },
          { t: { en: 'Women\'s silk was made only for their own clothes' }, why: { en: 'No. Mei\'s silk is sold. The profits pay rents and taxes and buy other goods.' } }
        ]
      }
    },
    {
      x: 6, y: 16, name: { en: 'Old Lu' }, role: { en: 'Rice farmer' },
      look: { skin: 2, hair: '#8a8a8a', shirt: '#6a7a4a', pants: '#3a3a2a', hat: '#c9a24a', style: 'short' },
      lines: [
        { en: 'My grandfather\'s village leveled this swamp into irrigated paddies. Now irregular rain does not decide if we eat.' },
        { en: 'We grow seedlings in a seed bed, then every family member helps move them into the flooded field. It is hard work!' },
        { en: 'That way we reap two harvests a year. China grew from about 50 million people in the 700s to about 100 million in the 1100s.' },
        { en: 'We also grow [[cash crop|cash crops]] to sell: tea, sugar, cotton, and mulberry leaves to feed silkworms.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why could China\'s population grow from about 50 million to about 100 million by the 1100s?' },
        choices: [
          { ok: true, t: { en: 'Wet-field rice gave two harvests a year' }, why: { en: 'Yes. Irrigated paddies and transplanted seedlings expanded the food supply, so more people could be fed.' } },
          { t: { en: 'Cash crops like tea replaced rice paddies' }, why: { en: 'No. Villagers did grow tea and other cash crops, but rice paddies were what fed the growing population.' } },
          { t: { en: 'The rains over China became more regular' }, why: { en: 'No. The rains stayed irregular. Paddies were irrigated so farmers depended less on rain.' } }
        ]
      }
    },
    {
      x: 24, y: 20, name: { en: 'Brother Jun' }, role: { en: 'Buddhist monk' },
      look: { skin: 1, hair: '#2b1d14', shirt: '#d9822b', robe: true, style: 'short' },
      lines: [
        { en: '[[buddhism|Buddhism]] began in India with Siddhartha Gautama. Merchants on the Silk Road carried it here long ago, along with their goods.' },
        { en: 'The Chinese mixed it with Daoism and Chinese customs: it became [[sinicized|Sinicized]]. Some Daoists even say Laozi traveled to India and was reborn as the Buddha.' },
        { en: 'We kept the Indian sutras. But in India, rebirth in the [[pure land|Pure Land]] meant a complete break with earthly life. Here it means an extension of earthly living.' },
        { en: 'Our golden age was under the Tang. Then in the 800s the state destroyed over 4,000 monasteries. Buddhism declined, but it never disappeared.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'What happened to Buddhism after it reached China?' },
        choices: [
          { ok: true, t: { en: 'It blended with Chinese beliefs' }, why: { en: 'Yes. Buddhism mixed with Daoism and Chinese customs. Belief systems often change as they spread.' } },
          { t: { en: 'It kept every Indian belief unchanged' }, why: { en: 'No. The Chinese kept the sutras but changed ideas like nirvana and the Pure Land.' } },
          { t: { en: 'The state wiped it out after the Tang' }, why: { en: 'No. Monasteries were destroyed in the 800s, but Buddhism never disappeared. It was practiced alongside Daoism and Confucianism.' } }
        ]
      }
    },
    {
      doc: true, x: 12, y: 9, icon: '📜',
      name: { en: 'The Analects of Confucius' }, role: { en: 'Primary source' },
      src: { en: 'Confucius, The Analects 1.6 and 1.9 (about 500 BCE); quoted in "Confucianism," World History Project' },
      lines: [
        { en: '"1.6 The Master said: A young man should be filial within his home and respectful of elders when outside, should be careful and trustworthy, broadly caring of people at large, and should cleave to [embrace] those who are ren [virtuous in all things]."' },
        { en: '"1.9 Master Zeng said: Devote care to life\'s end and pursue respect for the distant dead; in this way, the virtue of the people will return to fullness…"' },
        { en: 'Context: Confucius (551–479 BCE) lived in a time of frequent wars and wanted to restore order. He left no writings; after his death his followers compiled his teachings into The Analects.' },
        { en: 'Centuries later, Song officials had to master these teachings to pass the civil service exams. The family was seen as a mini-government: order at home made order in the state.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Sourcing: why would the Song state want its officials to master these passages?' },
        choices: [
          { ok: true, t: { en: 'They taught duty, respect and order' }, why: { en: 'Yes. Filial piety at home was meant to become loyalty and order in the state. That served the government.' } },
          { t: { en: 'They taught harsh laws and punishments' }, why: { en: 'No. Confucianism aimed to make people want to be good through virtue, not to rule by punishment.' } },
          { t: { en: 'They taught escape from earthly duties' }, why: { en: 'No. Confucius focused on practical, worldly duties: family, government and community.' } }
        ]
      }
    },
    {
      doc: true, x: 28, y: 7, icon: '📖',
      name: { en: 'Rice, Money and Cities' }, role: { en: 'Reading' },
      src: { en: 'Adapted from "East Asia 1200–1450" by Merry Wiesner-Hanks, World History Project (Khan Academy)' },
      lines: [
        { en: 'Ordinary people led important innovations, including wet-field rice in central and southern China. Villagers leveled forests, swamps and coastal plains into irrigated paddies, less dependent on irregular rainfall. To reap two harvests a year, they transplanted seedlings into flooded fields, work for every family member. The food supply grew, and China\'s population rose from about 50 million in the 700s to about 100 million in the 1100s.' },
        { en: 'Villagers also grew cash crops: sugar, tea, mulberry leaves and cotton. Women in village households raised silkworms, spun thread and wove cloth; the profits paid rents and taxes. The economy was commercial. Trade used coins, or paper money invented by merchants. In the 1120s the Song government issued the world\'s first government paper money. Iron production grew six-fold from the 800s to the 1100s, mostly for armor and weapons.' },
        { en: 'Economic growth fueled cities. By 1200 eastern China was the most urbanized part of the world, with at least six cities of over 100,000 people. Hangzhou began as a rice-growing village in the Yangzi River Delta. After 1132 it was the Song capital. Immigrants poured in from the countryside and the conquered north, and a century later it may have held one million people.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Causation: which chain of causes and effects best fits the reading?' },
        choices: [
          { ok: true, t: { en: 'More rice fed more people; trade drew many to cities' }, why: { en: 'Yes. Wet-field rice grew the food supply and the population; a commercial economy and the capital drew people into cities like Hangzhou.' } },
          { t: { en: 'Iron weapons won new lands that fed the growing cities' }, why: { en: 'No. Iron was mostly for armor and weapons, but Song lands shrank: the Jurchens conquered most of the north.' } },
          { t: { en: 'Paper money let cities buy food, so farming declined' }, why: { en: 'No. Paper money helped trade, but farming grew: paddies and two harvests a year fed the cities.' } }
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
        { en: 'I sailed from Japan to study Buddhism here. Japanese monks bring Chinese teachings home, like Chan, which we call Zen, and Pure Land.' },
        { en: 'At home, ordinary people blend Pure Land with our own Shinto. Since our civil war, a [[shogun|shogun]], our top general, heads a military government.' },
        { en: 'The Void\'s helpers scattered my printed sutras! Ask the printer by the canal. Printers know every book in this city.' }
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
    intro: { en: 'The Void scrambled the record of Song China. Carry each card to its AP theme: government, economy, or belief and culture.' },
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
    name: { en: 'The Void' },
    appear: { en: 'The Void has opened behind the teahouse. The lake light bends toward it.' },
    taunt: { en: 'Every exam, every harvest, every coin. I swallow them all, and Hangzhou will not remember it ever was.' },
    win: { en: 'The Void closes over West Lake. The page on East Asia floats down into your hands.' },
    questions: [
      {
        stim: { text: { en: '"The Master said: A young man should be filial within his home and respectful of elders when outside, should be careful and trustworthy, broadly caring of people at large..."' }, src: { en: 'Confucius, The Analects, 1.6 (about 500 BCE)' } },
        q: { en: 'The passage most directly reflects which Confucian idea?' },
        choices: [{ en: 'Order in society begins with right conduct in the family' }, { en: 'A ruler should govern mainly through laws and punishments' }, { en: 'Suffering ends only when a person lets go of all desire' }, { en: 'All relationships in society should be between equals' }],
        answer: 0,
        why: { en: 'Being filial means honoring parents and elders. Confucians saw the family as a mini-government: order at home made order in the state.' }
      },
      {
        stim: { text: { en: 'One outstanding scholar, Zhu Xi (1130–1200 CE), brought together Confucian writings into what became the official version and the basis of examinations from then on.' }, src: { en: 'Adapted from "East Asia 1200–1450," World History Project' } },
        q: { en: 'Which of the following best explains the significance of the development described in the passage?' },
        choices: [{ en: 'It made one official Confucian version the test for officials' }, { en: 'It ended the advantage aristocratic families had in government' }, { en: 'It replaced Confucian books with Buddhist sutras on the exams' }, { en: 'It opened the civil service exams to women for the first time' }],
        answer: 0,
        why: { en: 'Officials had to master Confucian teachings to pass the exams, and Zhu Xi\'s version became the basis of the exams. Aristocratic family still remained the easiest path to power.' }
      },
      {
        q: { en: 'Which of the following was a continuity in how men gained power in Song China, even as the civil service exams spread?' },
        choices: [{ en: 'Aristocratic lineage stayed the easiest path to office' }, { en: 'Winning battles stayed the only real route to high office' }, { en: 'Buddhist monasteries kept choosing the officials' }, { en: 'Rich merchants kept buying most government posts' }],
        answer: 0,
        why: { en: 'Birth into the aristocracy was still the easiest path to power. The exams added a second path for able men; they did not replace the old one.' }
      },
      {
        stim: { title: { en: 'Population of China (estimates)' }, rows: [[{ en: 'Time' }, { en: 'People' }], [{ en: '700s CE' }, { en: 'about 50 million' }], [{ en: '1100s CE' }, { en: 'about 100 million' }]], src: { en: 'From "East Asia 1200–1450," World History Project' } },
        q: { en: 'Which of the following best explains the change shown in the table?' },
        choices: [{ en: 'Irrigated paddies that gave two rice harvests a year' }, { en: 'Paper money that let villagers buy grain from abroad' }, { en: 'Iron tools from a six-fold rise in iron production' }, { en: 'The Mongol Yuan dynasty uniting north and south China' }],
        answer: 0,
        why: { en: 'Wet-field rice expanded the food supply, which let the population double. Most iron went to armor and weapons, and the Mongols came only in the 1270s.' }
      },
      {
        stim: { text: { en: 'Women in village households raised silkworms, spun silk thread, and wove textiles. Profits from these household enterprises paid their rents and taxes.' }, src: { en: 'Adapted from "East Asia 1200–1450," World History Project' } },
        q: { en: 'The passage best supports which claim about women in Song China?' },
        choices: [{ en: 'Their household work was part of a commercial economy' }, { en: 'Confucian ideas about women had lost all their influence' }, { en: 'Their silk work won them the right to take the exams' }, { en: 'They did housework only, which earned no money at all' }],
        answer: 0,
        why: { en: 'Women still worked inside the household, as Confucian teaching expected, but their silk was sold and paid rents and taxes. Women could not take the exams.' }
      },
      {
        stim: { text: { en: 'Trade was carried out in coins, or in paper money, invented by Chinese merchants. In the 1120s the Song government itself began issuing money, producing the world\'s first government issued paper money.' }, src: { en: 'Adapted from "East Asia 1200–1450," World History Project' } },
        q: { en: 'The developments described in the passage most directly reflect...' },
        choices: [{ en: 'the growth of a commercial economy in Song China' }, { en: 'a sudden shortage of trade goods such as silk and tea' }, { en: 'Mongol rulers bringing new ideas into China' }, { en: 'the shrinking of Chinese cities after 1132' }],
        answer: 0,
        why: { en: 'Coins, merchant paper money and then government paper money show a busy, commercial economy. Cities grew, and Hangzhou became the capital in 1132.' }
      },
      {
        stim: { text: { en: '"While in India rebirth in the Pure Land meant a complete break with earthly life, which was considered a life of suffering, in the Chinese Pure Land School it means an extension of earthly living."' }, src: { en: 'Quoted in "Why do Belief Systems Spread? How China Made Buddhism its Own," World History Project' } },
        q: { en: 'Compared with Indian Buddhism, the Chinese Pure Land School described in the excerpt...' },
        choices: [{ en: 'reshaped a Buddhist idea to fit Chinese beliefs' }, { en: 'threw out the Indian sutras in favor of Daoist texts' }, { en: 'kept the Indian meaning of rebirth unchanged' }, { en: 'was made by officials to train exam students' }],
        answer: 0,
        why: { en: 'The Chinese kept the Indian sutras but changed what the Pure Land meant. Buddhism was Sinicized: changed through Chinese influence.' }
      },
      {
        stim: { title: { en: 'China\'s neighbors' }, rows: [[{ en: 'Korea (Koryŏ)' }, { en: 'Modeled its government and capital city on China' }], [{ en: 'Japan' }, { en: 'Monks brought Zen and Pure Land from China; ordinary people blended Pure Land with Shinto' }]], src: { en: 'From "East Asia 1200–1450," World History Project' } },
        q: { en: 'Which of the following best explains the pattern shown in the table?' },
        choices: [{ en: 'Neighbors adopted Chinese ideas and adapted them' }, { en: 'Song officials ruled both Korea and Japan directly' }, { en: 'Both took Chinese ideas after Mongol conquest' }, { en: 'Buddhism reached both straight from India' }],
        answer: 0,
        why: { en: 'Chinese government and Buddhism shaped Korea and Japan, but each fit them to its own traditions. The Mongols never conquered Japan.' }
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
