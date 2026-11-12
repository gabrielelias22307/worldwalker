/* TRAILWALKER · Episode 2.1 · Enlightenment Ideas and the French and Indian War (VUS)
   The Forks of the Ohio, late 1758 (today Pittsburgh). The Allegheny River comes from the northeast and the
   Monongahela from the southeast; they meet at the point (x 11) and become the Ohio, which flows west.
   On the point: the ruins of the French Fort Duquesne (r at the tip), the walls the British are starting to build,
   a soldiers' camp and a trading post. North bank (NW): a Lenape (Delaware) village with corn and beans.
   South bank (SW): a Shawnee town. Southeast: a settler's cabin and the hills across the Monongahela.
   Wooden rafts (k) are the ferry crossings. */
window.EPISODE = {
  id: '2.1',
  realm: 2,
  sol: 'VUS',
  title: { en: 'A War for the Ohio Valley', es: 'Una guerra por el valle del Ohio', fa: 'جنگی برای درهٔ اوهایو' },
  weather: { sky: 'leaves', time: 'day' },
  place: { en: 'Forks of the Ohio, 1758', es: 'La confluencia del Ohio, 1758', fa: 'محل پیوستن دریاهای اوهایو، ۱۷۵۸' },
  intro: [
    { en: 'The Grump blurred the [[french and indian war|French and Indian War]] page. People forgot its effects.',
      es: 'El Gruñón borró la página de la [[french and indian war|guerra franco-india]]. La gente olvidó sus efectos.',
      fa: 'غرغرو صفحهٔ [[french and indian war|جنگ فرانسوی‌ها و بومیان]] را تار کرد. مردم نتیجه‌هایش را فراموش کردند.' },
    { en: 'Talk to the 3 people here, then fix the journal stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del diario.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ روزنامچه را درست کن.' }
  ],
  scenes: {
    at: [-80.01, 40.44],
    year: 1758,
    start: [
      { en: 'Here, the Allegheny and Monongahela rivers meet. They make the Ohio River.',
        es: 'Aquí se juntan los ríos Allegheny y Monongahela. Juntos forman el río Ohio.',
        fa: 'اینجا دریاهای الگنی و مونونگاهیلا یکجا می‌شوند. با هم دریای اوهایو را می‌سازند.' },
      { en: 'Native nations lived here. Britain and France both wanted this valley.',
        es: 'Aquí vivían naciones indígenas. Gran Bretaña y Francia querían este valle.',
        fa: 'ملت‌های بومی اینجا زندگی می‌کردند. بریتانیا و فرانسه هر دو این دره را می‌خواستند.' },
      { en: 'From 1754 to 1763, they fought the French and Indian War.',
        es: 'De 1754 a 1763 pelearon la guerra franco-india.',
        fa: 'از ۱۷۵۴ تا ۱۷۶۳، آن‌ها جنگ فرانسوی‌ها و بومیان را جنگیدند.' }
    ],
    page: { en: 'Today the city of Pittsburgh stands where the three rivers meet.',
      es: 'Hoy la ciudad de Pittsburgh está donde se juntan los tres ríos.',
      fa: 'امروز شهر پیتسبرگ در جایی است که سه دریا به هم می‌رسند.' },
    guess: {
      q: { en: 'Who do you think won the French and Indian War?', es: '¿Quién crees que ganó la guerra franco-india?', fa: 'به نظر تو کی جنگ فرانسوی‌ها و بومیان را برد؟' },
      choices: [
        { t: { en: '🇬🇧 Britain', es: '🇬🇧 Gran Bretaña', fa: '🇬🇧 بریتانیا' }, ok: true },
        { t: { en: '🇫🇷 France', es: '🇫🇷 Francia', fa: '🇫🇷 فرانسه' } }
      ],
      why: { en: 'Britain won in 1763. France lost almost all its land in North America.', es: 'Gran Bretaña ganó en 1763. Francia perdió casi toda su tierra en América del Norte.', fa: 'بریتانیا در ۱۷۶۳ برد. فرانسه تقریباً همهٔ زمین خود را در امریکای شمالی از دست داد.' }
    },
    next: {
      q: { en: 'Next: Boston, 1773. Why did colonists dump tea into the harbor?', es: 'Ahora: Boston, 1773. ¿Por qué los colonos tiraron té al puerto?', fa: 'بعدی: بوستون، ۱۷۷۳. چرا مردم مستعمره چای را در بندر ریختند؟' },
      choices: [
        { t: { en: '📜 To protest a tax', es: '📜 Para protestar un impuesto', fa: '📜 برای اعتراض به یک مالیات' }, ok: true },
        { t: { en: '🍵 The tea tasted bad', es: '🍵 El té sabía mal', fa: '🍵 مزهٔ چای بد بود' } }
      ],
      why: { en: 'They were angry about a tax on tea. Parliament made it, and colonists had no vote there.', es: 'Estaban enojados por un impuesto al té. Lo hizo el Parlamento, y los colonos no votaban allí.', fa: 'از مالیات چای قهر بودند. پارلمان آن را ساخت و مردم مستعمره آنجا رأی نداشتند.' }
    }
  },
  /* houses: who lives behind each door; walk in and talk (2 lines each) */
  houses: [
    { at: [4, 3], name: { en: 'Grandpa Gray Hawk', es: 'Abuelo Halcón Gris', fa: 'پدرکلان شاهین خاکستری' },
      look: { skin: 4, hair: '#d8d8d8', shirt: '#8a5a3a', pants: '#4a3a2a', style: 'long' },
      lines: [
        { en: 'We are the Lenape. The English call us the Delaware.', es: 'Somos los lenape. Los ingleses nos llaman delaware.', fa: 'ما لناپی هستیم. انگلیسی‌ها ما را دلاویر می‌گویند.' },
        { en: 'Settlers pushed us out of the east. So we moved west, to this valley.', es: 'Los colonos nos echaron del este. Por eso vinimos al oeste, a este valle.', fa: 'مهاجران ما را از شرق بیرون کردند. پس به غرب، به این دره آمدیم.' }
      ] },
    { at: [9, 3], name: { en: 'Little Fawn', es: 'Pequeña Cervatilla', fa: 'آهوبرهٔ کوچک' },
      look: { skin: 4, hair: '#120c08', shirt: '#2f8f6f', pants: '#6a3a2a', style: 'long' },
      lines: [
        { en: 'We grow corn, beans and squash. In the fall, the men hunt deer.', es: 'Sembramos maíz, frijoles y calabaza. En otoño, los hombres cazan venados.', fa: 'ما جواری، لوبیا و کدو می‌کاریم. در خزان، مردها آهو شکار می‌کنند.' },
        { en: 'Traders give metal kettles and wool cloth for deer skins.', es: 'Los comerciantes dan ollas de metal y tela de lana por pieles de venado.', fa: 'سوداگرها در بدل پوست آهو دیگ فلزی و تکهٔ پشمی می‌دهند.' }
      ] },
    { at: [3, 15], name: { en: 'Aunt Blue Water', es: 'Tía Agua Azul', fa: 'خاله آب آبی' },
      look: { skin: 5, hair: '#1a1008', shirt: '#6a4a8a', pants: '#3a2a20', style: 'bun' },
      lines: [
        { en: 'Shawnee towns stand along the Ohio River.', es: 'Los pueblos shawnee están a lo largo del río Ohio.', fa: 'قریه‌های شاونی در کنار دریای اوهایو هستند.' },
        { en: 'The British say their soldiers will leave after the war. We will see.', es: 'Los británicos dicen que sus soldados se irán después de la guerra. Ya veremos.', fa: 'بریتانوی‌ها می‌گویند عسکرهایشان بعد از جنگ می‌روند. می‌بینیم.' }
      ] },
    { at: [28, 7], name: { en: 'Private Hugh', es: 'El soldado Hugh', fa: 'عسکر هیو' },
      look: { skin: 1, hair: '#a05a2a', shirt: '#a02a2a', pants: '#e8e0d0', hat: '#1a1a2a' },
      lines: [
        { en: 'General Forbes led thousands of soldiers over the mountains to this place.', es: 'El general Forbes trajo a miles de soldados por las montañas hasta aquí.', fa: 'جنرال فوربس هزاران عسکر را از کوه‌ها گذراند و اینجا آورد.' },
        { en: 'The French burned their fort and left before we arrived.', es: 'Los franceses quemaron su fuerte y se fueron antes de que llegáramos.', fa: 'فرانسوی‌ها قلعهٔ خود را سوختاندند و پیش از رسیدن ما رفتند.' }
      ] },
    { at: [26, 14], name: { en: 'Mrs. Dunn', es: 'La señora Dunn', fa: 'خانم دان' },
      look: { skin: 1, hair: '#4a2a1a', shirt: '#3a5a8a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'Our skins and furs go east on pack horses, then on ships to London.', es: 'Nuestras pieles van al este en caballos de carga y luego en barcos a Londres.', fa: 'پوست‌ها با اسپ‌های بارکش به شرق می‌روند، بعد با کشتی به لندن.' },
        { en: 'Britain and France both want this rich [[fur trade|fur trade]].', es: 'Gran Bretaña y Francia quieren este rico [[fur trade|comercio de pieles]].', fa: 'بریتانیا و فرانسه هر دو این [[fur trade|تجارت پوست]] پرسود را می‌خواهند.' }
      ] },
    { at: [18, 19], name: { en: 'Peggy', es: 'Peggy', fa: 'پگی' },
      look: { skin: 1, hair: '#c08a3a', shirt: '#8a6a3a', pants: '#5a4630', style: 'long' },
      lines: [
        { en: 'My father wants to farm here when the war ends.', es: 'Mi padre quiere sembrar aquí cuando termine la guerra.', fa: 'پدرم می‌خواهد وقتی جنگ تمام شد، اینجا دهقانی کند.' },
        { en: 'Many colonists want new land west of the mountains.', es: 'Muchos colonos quieren tierras nuevas al oeste de las montañas.', fa: 'بسیاری از مردم مستعمره زمین نو در غرب کوه‌ها می‌خواهند.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens. ~ rivers, k raft crossings, W/F the new British walls (f inside), r the ruins at the tip,
     H/N bark houses with corn (2) and beans (1), R/h barracks, Q/h the trading post, m stalls, K the hills south of the Monongahela. */
  map: [
    'PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP',
    'P................P......P...P..P',
    'P..HHH..HHH.x..T.....P....P....P',
    'P..NdN..NdN..T....P...x...~~~~~~',
    'PT.....:............P....~~~~~~~',
    'P.2222.:.........P...~~k~~~....P',
    'P.1111.:..T.........~~~k~~.RRR.P',
    'P......::::::::.~~~~~~...x.hdh.P',
    'P.T..T....~~~~k~~~~~...........P',
    'P.........~~~~k~~.x.WWWWW.::...P',
    '~~~~~~~~~~~r...:::::WfffW.....xP',
    '~~~~~~~~~~~r........WWfFF......P',
    'P.........~~~~k~~..............P',
    'P.........~~~~k~~~~~~....QQQ.mmP',
    'P.HHH....x......~~~~~~...hdh...P',
    'P.NdN......T........~~~k~~.....P',
    'P....................~~k~~~....P',
    'P.....2222...T..T........~~~~~~~',
    'P.....1111.......RRR......~~~~~~',
    'P...T............hdh.T.........P',
    'PT........T.T..T......T..KKKK..P',
    'PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP'
  ],
  start: [17, 10],

  finds: [
    { clueAt: [12, 6], at: [12, 3], decor: 'shell',
      clue: { en: 'From this note, walk 3 steps north. Look next to the village sign.', es: 'Desde esta nota, camina 3 pasos al norte. Busca junto al letrero del pueblo.', fa: 'از این یادداشت، ۳ قدم به شمال برو. کنار تختهٔ قریه را ببین.' },
      text: { en: 'Lenape leaders used belts of shell beads, called wampum, to remember treaties.', es: 'Los líderes lenape usaban cinturones de cuentas de concha, llamados wampum, para recordar tratados.', fa: 'رهبران لناپی کمربندهایی از مهره‌های صدف، به نام ومپم، برای یاد نگه داشتن پیمان‌ها داشتند.' } },
    { clueAt: [17, 9], at: [12, 10], decor: 'coinold',
      clue: { en: 'From this note, walk 5 steps west, then 1 step south. Look by the ruins.', es: 'Desde esta nota, camina 5 pasos al oeste y luego 1 paso al sur. Busca junto a las ruinas.', fa: 'از این یادداشت، ۵ قدم به غرب برو، بعد ۱ قدم به جنوب. نزدیک خرابه‌ها را ببین.' },
      text: { en: 'An old French coin from Fort Duquesne. By 1763, France lost almost all its North American land.', es: 'Una moneda francesa del fuerte Duquesne. Para 1763, Francia perdió casi toda su tierra en América del Norte.', fa: 'یک سکهٔ کهنهٔ فرانسوی از قلعهٔ دوکین. تا ۱۷۶۳، فرانسه تقریباً همهٔ زمینش را در امریکای شمالی باخت.' } }
  ],

  words: {
    'french and indian war': { en: 'the war from 1754 to 1763 between Britain and France, with Native allies on both sides', es: 'la guerra de 1754 a 1763 entre Gran Bretaña y Francia, con aliados indígenas en ambos lados', fa: 'جنگ ۱۷۵۴ تا ۱۷۶۳ میان بریتانیا و فرانسه، با یاران بومی در هر دو طرف' },
    'natural rights': { en: 'rights every person is born with: life, liberty and property', es: 'derechos con los que nace toda persona: la vida, la libertad y la propiedad', fa: 'حق‌هایی که هر انسان با آن‌ها به دنیا می‌آید: زندگی، آزادی و دارایی' },
    consent: { en: 'saying yes; agreeing to something', es: 'decir que sí; estar de acuerdo con algo', fa: 'بله گفتن؛ راضی بودن به چیزی' },
    'separation of powers': { en: 'splitting government power into parts, so no one person has it all', es: 'dividir el poder del gobierno en partes, para que nadie lo tenga todo', fa: 'تقسیم قدرت حکومت به چند بخش، تا یک نفر همه‌اش را نداشته باشد' },
    'social contract': { en: 'an agreement: people give government power, and it must protect them', es: 'un acuerdo: la gente le da poder al gobierno, y este debe protegerla', fa: 'یک توافق: مردم به حکومت قدرت می‌دهند و حکومت باید از آن‌ها نگهداری کند' },
    pamphlet: { en: 'a short, thin booklet with ideas or news', es: 'un folleto corto y delgado con ideas o noticias', fa: 'یک کتابچهٔ کوتاه و نازک با فکرها یا خبرها' },
    'fur trade': { en: 'buying and selling animal skins and furs', es: 'la compra y venta de pieles de animales', fa: 'خرید و فروش پوست حیوان‌ها' },
    homeland: { en: 'the land where a people has lived for a long time', es: 'la tierra donde un pueblo ha vivido por mucho tiempo', fa: 'سرزمینی که یک مردم مدت درازی در آن زندگی کرده‌اند' },
    debt: { en: 'money that you owe and must pay back', es: 'dinero que debes y tienes que devolver', fa: 'پولی که قرضدار هستی و باید پس بدهی' },
    parliament: { en: 'the group that makes laws for Britain', es: 'el grupo que hace las leyes de Gran Bretaña', fa: 'گروهی که برای بریتانیا قانون می‌سازد' },
    proclamation: { en: 'an official order from a king or government', es: 'una orden oficial de un rey o un gobierno', fa: 'یک فرمان رسمی از پادشاه یا حکومت' }
  },

  npcs: [
    {
      x: 26, y: 8,
      name: { en: 'Samuel', es: 'Samuel', fa: 'ساموئل' },
      role: { en: 'Virginia soldier', es: 'Soldado de Virginia', fa: 'عسکر ویرجینیا' },
      look: { skin: 2, hair: '#3a2416', shirt: '#2f4f8a', pants: '#e8e0d0', hat: '#1a1a2a' },
      lines: [
        { en: 'At night, by the fire, I read [[pamphlet|pamphlets]] from England and France.', es: 'De noche, junto al fuego, leo [[pamphlet|folletos]] de Inglaterra y Francia.', fa: 'شب‌ها کنار آتش، [[pamphlet|کتابچه‌هایی]] از انگلستان و فرانسه می‌خوانم.' },
        { en: 'John Locke wrote that people have [[natural rights|natural rights]]: life, liberty and property.', es: 'John Locke escribió que la gente tiene [[natural rights|derechos naturales]]: vida, libertad y propiedad.', fa: 'جان لاک نوشت که مردم [[natural rights|حقوق طبیعی]] دارند: زندگی، آزادی و دارایی.' },
        { en: 'He said a fair government needs the [[consent|consent]] of the people.', es: 'Dijo que un gobierno justo necesita el [[consent|consentimiento]] del pueblo.', fa: 'او گفت حکومت عادل به [[consent|رضایت]] مردم نیاز دارد.' },
        { en: 'Montesquieu wanted [[separation of powers|power split]]. Rousseau wrote about a [[social contract|social contract]].', es: 'Montesquieu quería [[separation of powers|dividir el poder]]. Rousseau escribió sobre un [[social contract|contrato social]].', fa: 'مونتسکیو [[separation of powers|تقسیم قدرت]] را می‌خواست. روسو از [[social contract|قرارداد اجتماعی]] نوشت.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'John Locke wrote about natural rights. What are they?', es: 'John Locke escribió sobre los derechos naturales. ¿Cuáles son?', fa: 'جان لاک دربارهٔ حقوق طبیعی نوشت. آن‌ها کدام‌ها هستند؟' },
        choices: [
          { ok: true, t: { en: 'Life, liberty and property', es: 'Vida, libertad y propiedad', fa: 'زندگی، آزادی و دارایی' },
            why: { en: 'Yes! Locke said every person is born with these rights. A government must protect them.', es: '¡Sí! Locke dijo que toda persona nace con estos derechos. Un gobierno debe protegerlos.', fa: 'بله! لاک گفت هر انسان با این حق‌ها به دنیا می‌آید. حکومت باید از آن‌ها نگهداری کند.' } },
          { t: { en: 'Gold, ships and big armies', es: 'Oro, barcos y grandes ejércitos', fa: 'طلا، کشتی و لشکر بزرگ' },
            why: { en: 'Those are things a king may want. Locke wrote about life, liberty and property.', es: 'Eso es lo que un rey puede querer. Locke escribió sobre vida, libertad y propiedad.', fa: 'این‌ها چیزهایی است که شاید پادشاه بخواهد. لاک از زندگی، آزادی و دارایی نوشت.' } },
          { t: { en: 'Taxes, kings and strong forts', es: 'Impuestos, reyes y fuertes', fa: 'مالیات، پادشاه و قلعهٔ محکم' },
            why: { en: 'No. Natural rights belong to people, not to kings. They are life, liberty and property.', es: 'No. Los derechos naturales son de las personas, no de los reyes: vida, libertad y propiedad.', fa: 'نه. حقوق طبیعی مال مردم است، نه پادشاه: زندگی، آزادی و دارایی.' } }
        ]
      }
    },
    {
      x: 18, y: 12,
      name: { en: 'Margaret', es: 'Margaret', fa: 'مارگرت' },
      role: { en: 'Camp cook', es: 'Cocinera del campamento', fa: 'آشپز اردوگاه' },
      look: { skin: 1, hair: '#6a3a1a', shirt: '#e8dcc0', pants: '#5a3a2a', style: 'bun' },
      lines: [
        { en: 'Britain and France both said this Ohio River Valley was theirs.', es: 'Gran Bretaña y Francia decían que este valle del río Ohio era suyo.', fa: 'بریتانیا و فرانسه هر دو می‌گفتند درهٔ دریای اوهایو مال آن‌هاست.' },
        { en: 'In 1754, young George Washington fought the French south of here.', es: 'En 1754, el joven George Washington peleó contra los franceses al sur de aquí.', fa: 'در ۱۷۵۴، جورج واشنگتن جوان در جنوب اینجا با فرانسوی‌ها جنگید.' },
        { en: 'Those fights started the war. Native nations fought on both sides.', es: 'Esas peleas empezaron la guerra. Naciones indígenas pelearon en ambos lados.', fa: 'این جنگ‌ها جنگ بزرگ را شروع کرد. ملت‌های بومی در هر دو طرف جنگیدند.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'What was one big cause of the French and Indian War?', es: '¿Cuál fue una gran causa de la guerra franco-india?', fa: 'یک علت بزرگ جنگ فرانسوی‌ها و بومیان چه بود؟' },
        choices: [
          { ok: true, t: { en: 'Both wanted the Ohio River Valley', es: 'Los dos querían el valle del Ohio', fa: 'هر دو درهٔ اوهایو را می‌خواستند' },
            why: { en: 'Yes. Britain and France both claimed this valley and its rich fur trade.', es: 'Sí. Gran Bretaña y Francia reclamaban este valle y su rico comercio de pieles.', fa: 'بله. بریتانیا و فرانسه هر دو این دره و تجارت پرسود پوستش را می‌خواستند.' } },
          { t: { en: 'Both wanted to sell tea in Boston', es: 'Los dos querían vender té en Boston', fa: 'هر دو می‌خواستند در بوستون چای بفروشند' },
            why: { en: 'No. The war began over land here, by the Ohio River.', es: 'No. La guerra empezó por la tierra de aquí, junto al río Ohio.', fa: 'نه. جنگ بر سر زمین همین‌جا، کنار دریای اوهایو شروع شد.' } },
          { t: { en: 'Both wanted Washington as king', es: 'Los dos querían a Washington de rey', fa: 'هر دو واشنگتن را پادشاه می‌خواستند' },
            why: { en: 'No. Washington was a young Virginia officer then. The fight was over land.', es: 'No. Washington era entonces un joven oficial de Virginia. Peleaban por tierras.', fa: 'نه. واشنگتن آن وقت افسر جوان ویرجینیا بود. جنگ بر سر زمین بود.' } }
        ]
      }
    },
    {
      x: 11, y: 4,
      name: { en: 'Grandmother Willow', es: 'Abuela Sauce', fa: 'مادرکلان بید' },
      role: { en: 'Lenape elder', es: 'Anciana lenape', fa: 'بزرگ لناپی' },
      look: { skin: 4, hair: '#cfcfcf', shirt: '#7a3a2a', pants: '#3a2a20', robe: true, style: 'long' },
      lines: [
        { en: 'This valley is our [[homeland|homeland]]. Our families hunt and farm here.', es: 'Este valle es nuestra [[homeland|tierra natal]]. Nuestras familias cazan y siembran aquí.', fa: 'این دره [[homeland|سرزمین ما]] است. خانواده‌های ما اینجا شکار و کشت می‌کنند.' },
        { en: 'The French and British both say it is theirs. We do not agree.', es: 'Los franceses y los británicos dicen que es suyo. No estamos de acuerdo.', fa: 'فرانسوی‌ها و بریتانوی‌ها هر دو می‌گویند مال آن‌هاست. ما قبول نداریم.' },
        { en: 'Native nations chose sides to protect their own lands and people.', es: 'Las naciones indígenas eligieron un lado para proteger sus tierras y su gente.', fa: 'ملت‌های بومی برای نگهداری زمین و مردم خود یک طرف را انتخاب کردند.' },
        { en: 'This fall, the British promised: no settlers west of the mountains.', es: 'Este otoño, los británicos prometieron: no habrá colonos al oeste de las montañas.', fa: 'این خزان، بریتانوی‌ها وعده دادند: هیچ مهاجری در غرب کوه‌ها نیاید.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Why did many Native nations fight in the war?', es: '¿Por qué muchas naciones indígenas pelearon en la guerra?', fa: 'چرا بسیاری از ملت‌های بومی در جنگ جنگیدند؟' },
        choices: [
          { ok: true, t: { en: 'To protect their homelands', es: 'Para proteger sus tierras', fa: 'برای نگهداری سرزمین خود' },
            why: { en: 'Yes. They chose sides to keep their land, their towns and their families safe.', es: 'Sí. Eligieron un lado para cuidar sus tierras, sus pueblos y sus familias.', fa: 'بله. یک طرف را انتخاب کردند تا زمین، قریه و خانواده خود را حفظ کنند.' } },
          { t: { en: 'To win land in Europe', es: 'Para ganar tierras en Europa', fa: 'برای بردن زمین در اروپا' },
            why: { en: 'No. They did not want land across the ocean. They fought for their land here.', es: 'No. No querían tierras al otro lado del mar. Pelearon por su tierra de aquí.', fa: 'نه. زمین آن طرف بحر را نمی‌خواستند. برای زمین خود همین‌جا جنگیدند.' } },
          { t: { en: 'To help Parliament make laws', es: 'Para ayudar al Parlamento con leyes', fa: 'برای کمک به پارلمان در قانون‌سازی' },
            why: { en: 'No. Parliament was in London. Native nations had their own leaders and their own reasons.', es: 'No. El Parlamento estaba en Londres. Las naciones indígenas tenían sus propios líderes y razones.', fa: 'نه. پارلمان در لندن بود. ملت‌های بومی رهبران و دلیل‌های خود را داشتند.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 12, y: 2, text: { en: 'LENAPE (DELAWARE) TOWN · 1758 · Bark houses, cornfields and bean fields.', es: 'PUEBLO LENAPE (DELAWARE) · 1758 · Casas de corteza, maizales y campos de frijol.', fa: 'قریهٔ لناپی (دلاویر) · ۱۷۵۸ · خانه‌های پوست درخت، کشتزار جواری و لوبیا.' } },
    { x: 22, y: 3, text: { en: 'ALLEGHENY RIVER · It flows from the north and meets the Monongahela at the point.', es: 'RÍO ALLEGHENY · Viene del norte y se junta con el Monongahela en la punta.', fa: 'دریای الگنی · از شمال می‌آید و در نوک زمین با مونونگاهیلا یکجا می‌شود.' } },
    { x: 18, y: 9, text: { en: 'FORKS OF THE OHIO · November 1758 · The French left. The British named this place Pittsburgh.', es: 'CONFLUENCIA DEL OHIO · Noviembre de 1758 · Los franceses se fueron. Los británicos lo llamaron Pittsburgh.', fa: 'محل پیوستن اوهایو · نوامبر ۱۷۵۸ · فرانسوی‌ها رفتند. بریتانوی‌ها اینجا را پیتسبرگ نامیدند.' } },
    { x: 25, y: 7, text: { en: 'SOLDIERS\' CAMP · British soldiers and colonial soldiers from Virginia and Pennsylvania.', es: 'CAMPAMENTO · Soldados británicos y soldados coloniales de Virginia y Pensilvania.', fa: 'اردوگاه عسکرها · عسکرهای بریتانوی و عسکرهای مستعمره از ویرجینیا و پنسلوانیا.' } },
    { x: 30, y: 10, text: { en: 'EAST · Over these hills are the Appalachian Mountains, and the colonies beyond them.', es: 'ESTE · Pasando estas colinas están los montes Apalaches, y detrás, las colonias.', fa: 'شرق · آن طرف این تپه‌ها کوه‌های اپلیشن است و پشت آن‌ها مستعمره‌ها.' } },
    { x: 9, y: 14, text: { en: 'SHAWNEE TOWN · The Shawnee hunt and farm along the Ohio River.', es: 'PUEBLO SHAWNEE · Los shawnee cazan y siembran junto al río Ohio.', fa: 'قریهٔ شاونی · شاونی‌ها در کنار دریای اوهایو شکار و کشت می‌کنند.' } }
  ],

  /* the quest: Morning Star (Lenape town, NW) needs wool cloth for winter -> Swift Deer, a Shawnee hunter (SW),
     says what traders want -> William Dunn at the trading post (SE): bring him the deerskins -> back to Morning Star */
  quest: {
    stat: 'loc',
    title: { en: 'Warm Cloth for Winter', es: 'Tela abrigada para el invierno', fa: 'تکهٔ گرم برای زمستان' },
    giver: {
      x: 3, y: 8,
      name: { en: 'Morning Star', es: 'Estrella de la Mañana', fa: 'ستارهٔ صبح' },
      role: { en: 'Lenape mother', es: 'Madre lenape', fa: 'مادر لناپی' },
      look: { skin: 4, hair: '#120c08', shirt: '#c04a2a', pants: '#3a2a20', style: 'long' },
      lines: [
        { en: 'Hello, friend. Winter is coming, and my children need warm clothes.', es: 'Hola, amigo. Viene el invierno, y mis hijos necesitan ropa abrigada.', fa: 'سلام دوست. زمستان می‌آید و اولادهایم لباس گرم می‌خواهند.' },
        { en: 'The trader on the point has wool cloth. He wants goods in return.', es: 'El comerciante de la punta tiene tela de lana. Quiere algo a cambio.', fa: 'سوداگر نوک زمین تکهٔ پشمی دارد. در بدلش جنس می‌خواهد.' },
        { en: 'Swift Deer, a Shawnee hunter, knows what traders want. Find him south.', es: 'Venado Veloz, un cazador shawnee, sabe qué quieren. Búscalo al sur.', fa: 'آهوی تیز، شکارچی شاونی، می‌داند سوداگرها چه می‌خواهند. در جنوب پیدایش کن.' }
      ],
      wait: { en: 'Swift Deer is south, across the Monongahela River raft.', es: 'Venado Veloz está al sur, cruzando la balsa del río Monongahela.', fa: 'آهوی تیز در جنوب است، آن طرف جالهٔ دریای مونونگاهیلا.' },
      thanks: { en: 'Wool cloth! My children will stay warm this winter. Thank you!', es: '¡Tela de lana! Mis hijos estarán abrigados este invierno. ¡Gracias!', fa: 'تکهٔ پشمی! اولادهایم این زمستان گرم می‌مانند. تشکر!' }
    },
    contact: {
      x: 6, y: 13,
      name: { en: 'Swift Deer', es: 'Venado Veloz', fa: 'آهوی تیز' },
      role: { en: 'Shawnee hunter', es: 'Cazador shawnee', fa: 'شکارچی شاونی' },
      look: { skin: 4, hair: '#1a1008', shirt: '#8a6a3a', pants: '#4a3a2a', style: 'short' },
      lines: [
        { en: 'Traders do not want our corn. Across the ocean, people want skins.', es: 'Los comerciantes no quieren nuestro maíz. Al otro lado del mar quieren pieles.', fa: 'سوداگرها جواری ما را نمی‌خواهند. آن طرف بحر، مردم پوست می‌خواهند.' },
        { en: 'In Europe they make leather and hats from skins and furs.', es: 'En Europa hacen cuero y sombreros con pieles.', fa: 'در اروپا از پوست، چرم و کلاه می‌سازند.' },
        { en: 'Bring the right goods to the trader. His post is east, past the fort.', es: 'Lleva lo correcto al comerciante. Su puesto está al este, pasando el fuerte.', fa: 'جنس درست را پیش سوداگر ببر. دکانش در شرق است، بعد از قلعه.' }
      ]
    },
    action: {
      type: 'trade',
      trader: {
        x: 28, y: 15,
        name: { en: 'William Dunn', es: 'William Dunn', fa: 'ویلیام دان' },
        role: { en: 'Trader', es: 'Comerciante', fa: 'سوداگر' },
        look: { skin: 1, hair: '#5a3a1a', shirt: '#4a6a3a', pants: '#3a2a1a', hat: '#3a2a1a' },
        lines: [
          { en: 'Welcome to my trading post! I trade cloth, kettles and tools.', es: '¡Bienvenido a mi puesto! Cambio telas, ollas y herramientas.', fa: 'به دکان تجارتی من خوش آمدی! تکه، دیگ و ابزار عوض می‌کنم.' }
        ]
      },
      q: { en: 'I trade wool cloth for goods that sell well in Europe. Bring me the right one.', es: 'Cambio tela de lana por cosas que se venden bien en Europa. Tráeme la correcta.', fa: 'تکهٔ پشمی را با جنسی عوض می‌کنم که در اروپا خوب فروش شود. جنس درست را بیاور.' },
      choices: [
        { ok: true, at: [11, 19], icon: '🦌', t: { en: 'A bundle of deerskins', es: 'Un atado de pieles de venado', fa: 'یک بسته پوست آهو' },
          why: { en: 'Yes! Europe wanted skins and furs. This rich trade is one reason Britain and France fought.', es: '¡Sí! Europa quería pieles. Este rico comercio es una razón por la que pelearon Gran Bretaña y Francia.', fa: 'بله! اروپا پوست می‌خواست. این تجارت پرسود یک دلیل جنگ بریتانیا و فرانسه است.' } },
        { at: [30, 7], icon: '🍵', t: { en: 'A crate of tea', es: 'Una caja de té', fa: 'یک صندوق چای' },
          why: { en: 'Tea comes here on ships from Britain. I sell tea; I do not buy it.', es: 'El té llega aquí en barcos desde Gran Bretaña. Yo vendo té; no lo compro.', fa: 'چای با کشتی از بریتانیا اینجا می‌آید. من چای می‌فروشم، نمی‌خرم.' } },
        { at: [14, 4], icon: '🪵', t: { en: 'A load of firewood', es: 'Una carga de leña', fa: 'یک بار هیزم' },
          why: { en: 'Firewood is everywhere in these forests. No one in Europe will pay for it.', es: 'Aquí hay leña en todos los bosques. Nadie en Europa pagaría por ella.', fa: 'هیزم در همهٔ این جنگل‌ها هست. هیچ کس در اروپا برایش پول نمی‌دهد.' } }
      ],
      item: { icon: '🦌', name: { en: 'A bundle of deerskins', es: 'Un atado de pieles de venado', fa: 'یک بسته پوست آهو' } }
    }
  },

  scraps: [[1, 1], [30, 1], [30, 20]],
  smudges: [[9, 6], [20, 17]],

  challenge: {
    at: [12, 11],
    type: 'levers', // in the world; the card version (combo) is the fallback
    // who won: inside the new British walls · the debt: by the trading post · Parliament: at the soldiers' camp · the 1763 line: the east edge, toward the mountains
    spots: [[22, 10], [30, 15], [24, 8], [30, 11]],
    stat: 'loc',
    title: { en: 'The Chain of Causes', es: 'La cadena de causas', fa: 'زنجیر علت‌ها' },
    intro: { en: 'The Grump broke history\'s chain. Set the four levers so each cause leads to its true effect.',
      es: 'El Gruñón rompió la cadena de la historia. Mueve las cuatro palancas para que cada causa lleve a su efecto real.',
      fa: 'غرغرو زنجیر تاریخ را شکست. چهار دسته را طوری بگذار که هر علت به نتیجهٔ درست برسد.' },
    switches: [
      { name: { en: 'Who won the war?', es: '¿Quién ganó la guerra?', fa: 'کی جنگ را برد؟' }, icon: '🏆', start: 1,
        states: [{ en: 'Britain', es: 'Gran Bretaña', fa: 'بریتانیا' }, { en: 'France', es: 'Francia', fa: 'فرانسه' }] },
      { name: { en: 'What Britain had after the war', es: 'Lo que tenía Gran Bretaña después', fa: 'آنچه بریتانیا بعد از جنگ داشت' }, icon: '💰', start: 0,
        states: [{ en: 'Extra gold', es: 'Oro de sobra', fa: 'طلای اضافه' }, { en: 'A huge debt', es: 'Una deuda enorme', fa: 'قرض بسیار بزرگ' }] },
      { name: { en: 'What Parliament did next', es: 'Lo que hizo el Parlamento', fa: 'کار بعدی پارلمان' }, icon: '📜', start: 1,
        states: [{ en: 'Taxed the colonies', es: 'Puso impuestos a las colonias', fa: 'بر مستعمره‌ها مالیات بست' }, { en: 'Lowered taxes', es: 'Bajó los impuestos', fa: 'مالیات را کم کرد' }] },
      { name: { en: 'The line of 1763', es: 'La línea de 1763', fa: 'خط ۱۷۶۳' }, icon: '⛰️', start: 0,
        states: [{ en: 'Open land in the west', es: 'Tierra abierta en el oeste', fa: 'زمین باز در غرب' }, { en: 'No settling west of the Appalachians', es: 'Prohibido poblar al oeste de los Apalaches', fa: 'ممنوع: خانه‌سازی در غرب اپلیشن' }] }
    ],
    results: {
      '0,1,0,1': { ok: true,
        t: { en: 'The chain holds! Britain won, but debt led to new taxes and a closed west.', es: '¡La cadena aguanta! Gran Bretaña ganó, pero la deuda trajo impuestos y un oeste cerrado.', fa: 'زنجیر محکم است! بریتانیا برد، اما قرض به مالیات نو و غرب بسته رسید.' },
        show: [
          { icon: '🏆', ok: true, t: { en: 'Britain won', es: 'Ganó Gran Bretaña', fa: 'بریتانیا برد' } },
          { icon: '💸', ok: true, t: { en: 'huge debt', es: 'deuda enorme', fa: 'قرض بزرگ' } },
          { icon: '📜', ok: true, t: { en: 'new taxes', es: 'impuestos nuevos', fa: 'مالیات نو' } },
          { icon: '⛰️', ok: true, t: { en: 'line of 1763', es: 'línea de 1763', fa: 'خط ۱۷۶۳' } }] },
      '1,1,0,1': { ok: false,
        t: { en: 'France did not win. In 1763 Britain won and took French land east of the Mississippi.', es: 'Francia no ganó. En 1763 ganó Gran Bretaña y tomó la tierra francesa al este del Misisipi.', fa: 'فرانسه نبرد. در ۱۷۶۳ بریتانیا برد و زمین فرانسه را در شرق میسیسیپی گرفت.' },
        show: [
          { icon: '🏆', ok: false, t: { en: 'France won?', es: '¿Ganó Francia?', fa: 'فرانسه برد؟' } },
          { icon: '💸', ok: true, t: { en: 'huge debt', es: 'deuda enorme', fa: 'قرض بزرگ' } },
          { icon: '📜', ok: true, t: { en: 'new taxes', es: 'impuestos nuevos', fa: 'مالیات نو' } },
          { icon: '⛰️', ok: true, t: { en: 'line of 1763', es: 'línea de 1763', fa: 'خط ۱۷۶۳' } }] },
      '0,0,0,1': { ok: false,
        t: { en: 'Wars cost a lot of money. Britain ended the war deep in debt, not rich.', es: 'Las guerras cuestan mucho dinero. Gran Bretaña terminó la guerra con muchas deudas, no rica.', fa: 'جنگ پول زیاد مصرف می‌کند. بریتانیا جنگ را با قرض زیاد تمام کرد، نه پولدار.' },
        show: [
          { icon: '🏆', ok: true, t: { en: 'Britain won', es: 'Ganó Gran Bretaña', fa: 'بریتانیا برد' } },
          { icon: '💰', ok: false, t: { en: 'extra gold?', es: '¿oro de sobra?', fa: 'طلای اضافه؟' } },
          { icon: '📜', ok: true, t: { en: 'new taxes', es: 'impuestos nuevos', fa: 'مالیات نو' } },
          { icon: '⛰️', ok: true, t: { en: 'line of 1763', es: 'línea de 1763', fa: 'خط ۱۷۶۳' } }] },
      '0,1,1,1': { ok: false,
        t: { en: 'With a huge debt, Parliament did not lower taxes. It taxed the colonies to help pay.', es: 'Con una deuda enorme, el Parlamento no bajó impuestos. Cobró impuestos a las colonias para pagar.', fa: 'با قرض بزرگ، پارلمان مالیات را کم نکرد. بر مستعمره‌ها مالیات بست تا قرض را بپردازد.' },
        show: [
          { icon: '🏆', ok: true, t: { en: 'Britain won', es: 'Ganó Gran Bretaña', fa: 'بریتانیا برد' } },
          { icon: '💸', ok: true, t: { en: 'huge debt', es: 'deuda enorme', fa: 'قرض بزرگ' } },
          { icon: '📜', ok: false, t: { en: 'lower taxes?', es: '¿menos impuestos?', fa: 'مالیات کمتر؟' } },
          { icon: '⛰️', ok: true, t: { en: 'line of 1763', es: 'línea de 1763', fa: 'خط ۱۷۶۳' } }] },
      '0,1,0,0': { ok: false,
        t: { en: 'The west did not open. The Proclamation of 1763 said: no settling west of the Appalachians.', es: 'El oeste no se abrió. La Proclamación de 1763 dijo: nadie se asienta al oeste de los Apalaches.', fa: 'غرب باز نشد. فرمان ۱۷۶۳ گفت: هیچ کس در غرب کوه‌های اپلیشن خانه نسازد.' },
        show: [
          { icon: '🏆', ok: true, t: { en: 'Britain won', es: 'Ganó Gran Bretaña', fa: 'بریتانیا برد' } },
          { icon: '💸', ok: true, t: { en: 'huge debt', es: 'deuda enorme', fa: 'قرض بزرگ' } },
          { icon: '📜', ok: true, t: { en: 'new taxes', es: 'impuestos nuevos', fa: 'مالیات نو' } },
          { icon: '⛰️', ok: false, t: { en: 'open west?', es: '¿oeste abierto?', fa: 'غرب باز؟' } }] }
    },
    otherwise: { ok: false,
      t: { en: 'The chain breaks in more than one place. Start with who won the war.', es: 'La cadena se rompe en más de un lugar. Empieza por quién ganó la guerra.', fa: 'زنجیر در بیشتر از یک جا شکسته است. از اینکه کی جنگ را برد شروع کن.' } },
    success: { en: 'The chain holds! Britain won but owed a lot. New taxes and the 1763 line made colonists angry.',
      es: '¡La cadena aguanta! Gran Bretaña ganó pero debía mucho. Los impuestos y la línea de 1763 enojaron a los colonos.',
      fa: 'زنجیر محکم است! بریتانیا برد اما قرض زیاد داشت. مالیات نو و خط ۱۷۶۳ مردم مستعمره را قهر ساخت.' }
  },

  boss: {
    at: [3, 18],
    stat: 'loc',
    need: 3,
    name: { en: 'The Tangled Grump', es: 'El Gruñón Enredado', fa: 'غرغروی گره‌خورده' },
    appear: { en: 'The Tangled Grump is hiding in the woods by the Shawnee town!', es: '¡El Gruñón Enredado se esconde en el bosque junto al pueblo shawnee!', fa: 'غرغروی گره‌خورده در جنگل کنار قریهٔ شاونی پنهان است!' },
    taunt: { en: 'Causes, effects… who cares? I tied them all in knots!', es: 'Causas, efectos… ¿a quién le importa? ¡Los até todos en nudos!', fa: 'علت، نتیجه… کی پروا دارد؟ همه را گره زدم!' },
    win: { en: 'The knots fall loose over the rivers. Journal page 2.1 floats down into your hands!', es: 'Los nudos se sueltan sobre los ríos. ¡La página 2.1 del diario cae en tus manos!', fa: 'گره‌ها بالای دریاها باز می‌شوند. صفحهٔ ۲.۱ روزنامچه به دستت می‌افتد!' },
    questions: [
      { q: { en: 'Which natural rights did John Locke write about?', es: '¿Sobre qué derechos naturales escribió John Locke?', fa: 'جان لاک دربارهٔ کدام حقوق طبیعی نوشت؟' },
        choices: [
          { en: 'Life, liberty and property', es: 'Vida, libertad y propiedad', fa: 'زندگی، آزادی و دارایی' },
          { en: 'Gold, ships and big armies', es: 'Oro, barcos y grandes ejércitos', fa: 'طلا، کشتی و لشکر بزرگ' },
          { en: 'Taxes, kings and churches', es: 'Impuestos, reyes e iglesias', fa: 'مالیات، پادشاه و کلیسا' },
          { en: 'Forts, roads and rivers', es: 'Fuertes, caminos y ríos', fa: 'قلعه، سرک و دریا' }],
        answer: 0,
        why: { en: 'Locke said every person is born with rights to life, liberty and property.', es: 'Locke dijo que toda persona nace con derecho a la vida, la libertad y la propiedad.', fa: 'لاک گفت هر انسان با حق زندگی، آزادی و دارایی به دنیا می‌آید.' } },
      { q: { en: 'Locke said a fair government gets its power from what?', es: 'Locke dijo que un gobierno justo recibe su poder de… ¿qué?', fa: 'لاک گفت حکومت عادل قدرتش را از چه می‌گیرد؟' },
        choices: [
          { en: 'The consent of the people', es: 'El consentimiento del pueblo', fa: 'رضایت مردم' },
          { en: 'The strongest army in the land', es: 'El ejército más fuerte del país', fa: 'قوی‌ترین لشکر کشور' },
          { en: 'The oldest family of kings', es: 'La familia de reyes más antigua', fa: 'کهنه‌ترین خانوادهٔ پادشاهان' },
          { en: 'The gold in the royal bank', es: 'El oro del banco real', fa: 'طلای بانک شاهی' }],
        answer: 0,
        why: { en: 'Locke wrote that government needs the consent of the governed. People agree to be ruled.', es: 'Locke escribió que el gobierno necesita el consentimiento de los gobernados. La gente acepta ser gobernada.', fa: 'لاک نوشت حکومت به رضایت مردم نیاز دارد. مردم قبول می‌کنند که حکومت شوند.' } },
      { q: { en: 'What did Montesquieu say about government power?', es: '¿Qué dijo Montesquieu sobre el poder del gobierno?', fa: 'مونتسکیو دربارهٔ قدرت حکومت چه گفت؟' },
        choices: [
          { en: 'Split it so no one has it all', es: 'Dividirlo para que nadie lo tenga todo', fa: 'تقسیمش کن تا کسی همه‌اش را نداشته باشد' },
          { en: 'Give all of it to one wise king', es: 'Dárselo todo a un rey sabio', fa: 'همه‌اش را به یک پادشاه دانا بده' },
          { en: 'Let only rich landowners hold it', es: 'Que solo lo tengan los ricos con tierras', fa: 'فقط به زمین‌داران پولدار بده' },
          { en: 'Keep it inside the army forever', es: 'Dejarlo siempre en manos del ejército', fa: 'همیشه در دست لشکر نگهش دار' }],
        answer: 0,
        why: { en: 'Montesquieu wanted separation of powers: different parts of government check each other.', es: 'Montesquieu quería la separación de poderes: cada parte del gobierno vigila a las otras.', fa: 'مونتسکیو تقسیم قدرت را می‌خواست: بخش‌های حکومت همدیگر را کنترول کنند.' } },
      { q: { en: 'Why did Britain and France fight the French and Indian War?', es: '¿Por qué pelearon Gran Bretaña y Francia en la guerra franco-india?', fa: 'چرا بریتانیا و فرانسه جنگ فرانسوی‌ها و بومیان را جنگیدند؟' },
        choices: [
          { en: 'Both wanted the Ohio River Valley', es: 'Los dos querían el valle del río Ohio', fa: 'هر دو درهٔ دریای اوهایو را می‌خواستند' },
          { en: 'Both wanted to rule Spain and Mexico', es: 'Los dos querían gobernar España y México', fa: 'هر دو می‌خواستند بر هسپانیه و مکسیکو حکومت کنند' },
          { en: 'Both wanted to end all fur trading', es: 'Los dos querían terminar el comercio de pieles', fa: 'هر دو می‌خواستند تجارت پوست را تمام کنند' },
          { en: 'Both wanted to free the colonies', es: 'Los dos querían liberar las colonias', fa: 'هر دو می‌خواستند مستعمره‌ها را آزاد کنند' }],
        answer: 0,
        why: { en: 'Britain and France both claimed the Ohio River Valley and its fur trade.', es: 'Gran Bretaña y Francia reclamaban el valle del río Ohio y su comercio de pieles.', fa: 'بریتانیا و فرانسه هر دو درهٔ اوهایو و تجارت پوستش را از خود می‌دانستند.' } },
      { q: { en: 'Who won the war, and what did they get in 1763?', es: '¿Quién ganó la guerra y qué recibió en 1763?', fa: 'کی جنگ را برد و در ۱۷۶۳ چه گرفت؟' },
        choices: [
          { en: 'Britain: French land east of the Mississippi', es: 'Gran Bretaña: tierra francesa al este del Misisipi', fa: 'بریتانیا: زمین فرانسه در شرق میسیسیپی' },
          { en: 'France: all thirteen British colonies', es: 'Francia: las trece colonias británicas', fa: 'فرانسه: همهٔ سیزده مستعمرهٔ بریتانیا' },
          { en: 'Spain: the whole Ohio River Valley', es: 'España: todo el valle del río Ohio', fa: 'هسپانیه: تمام درهٔ دریای اوهایو' },
          { en: 'The colonists: a new country of their own', es: 'Los colonos: un país nuevo y propio', fa: 'مردم مستعمره: یک کشور نو برای خود' }],
        answer: 0,
        why: { en: 'In the Treaty of Paris of 1763, Britain took French land east of the Mississippi River.', es: 'En el Tratado de París de 1763, Gran Bretaña tomó la tierra francesa al este del río Misisipi.', fa: 'در معاهدهٔ پاریس ۱۷۶۳، بریتانیا زمین فرانسه را در شرق دریای میسیسیپی گرفت.' } },
      { q: { en: 'Why did Parliament tax the colonies after the war?', es: '¿Por qué el Parlamento cobró impuestos a las colonias después de la guerra?', fa: 'چرا پارلمان بعد از جنگ بر مستعمره‌ها مالیات بست؟' },
        choices: [
          { en: 'To pay its huge war debt', es: 'Para pagar su enorme deuda de guerra', fa: 'برای پرداخت قرض بزرگ جنگ' },
          { en: 'To punish France for losing', es: 'Para castigar a Francia por perder', fa: 'برای جزا دادن فرانسه' },
          { en: 'To build schools for the colonies', es: 'Para construir escuelas en las colonias', fa: 'برای ساختن مکتب در مستعمره‌ها' },
          { en: 'To give gold to the colonists', es: 'Para darles oro a los colonos', fa: 'برای دادن طلا به مردم مستعمره' }],
        answer: 0,
        why: { en: 'The war cost Britain a fortune. Parliament said colonists should help pay the debt.', es: 'La guerra le costó una fortuna a Gran Bretaña. El Parlamento dijo que los colonos debían ayudar a pagar.', fa: 'جنگ برای بریتانیا بسیار گران تمام شد. پارلمان گفت مردم مستعمره باید در پرداخت قرض کمک کنند.' } },
      { q: { en: 'What did the Proclamation of 1763 say?', es: '¿Qué decía la Proclamación de 1763?', fa: 'فرمان ۱۷۶۳ چه می‌گفت؟' },
        choices: [
          { en: 'No settling west of the Appalachians', es: 'Nadie se asienta al oeste de los Apalaches', fa: 'هیچ کس در غرب اپلیشن خانه نسازد' },
          { en: 'All colonists must move to Canada', es: 'Todos los colonos deben irse a Canadá', fa: 'همهٔ مردم مستعمره باید به کانادا بروند' },
          { en: 'Colonists may now vote for Parliament', es: 'Los colonos ya pueden votar al Parlamento', fa: 'مردم مستعمره حالا برای پارلمان رأی بدهند' },
          { en: 'Trade with France is open again', es: 'El comercio con Francia se abre otra vez', fa: 'تجارت با فرانسه دوباره باز است' }],
        answer: 0,
        why: { en: 'Britain drew a line on the mountains to keep peace with Native nations. Many colonists were angry.', es: 'Gran Bretaña trazó una línea en las montañas para tener paz con las naciones indígenas. Muchos colonos se enojaron.', fa: 'بریتانیا روی کوه‌ها خطی کشید تا با ملت‌های بومی صلح کند. بسیاری از مردم مستعمره قهر شدند.' } },
      { q: { en: 'In 1763, why did Pontiac and many Native nations fight the British?', es: 'En 1763, ¿por qué Pontiac y muchas naciones indígenas pelearon contra los británicos?', fa: 'در ۱۷۶۳، چرا پونتیاک و بسیاری از ملت‌های بومی با بریتانوی‌ها جنگیدند؟' },
        choices: [
          { en: 'To protect their homelands', es: 'Para proteger sus tierras', fa: 'برای نگهداری سرزمین خود' },
          { en: 'To win new lands in Europe', es: 'Para ganar tierras en Europa', fa: 'برای گرفتن زمین نو در اروپا' },
          { en: 'To help Parliament collect taxes', es: 'Para ayudar al Parlamento a cobrar', fa: 'برای کمک به پارلمان در گرفتن مالیات' },
          { en: 'To move their towns to Britain', es: 'Para llevar sus pueblos a Gran Bretaña', fa: 'برای بردن قریه‌هایشان به بریتانیا' }],
        answer: 0,
        why: { en: 'British soldiers stayed in their forts and settlers kept coming. Native nations fought to keep their land.', es: 'Los soldados británicos se quedaron en sus fuertes y seguían llegando colonos. Las naciones indígenas pelearon por su tierra.', fa: 'عسکرهای بریتانوی در قلعه‌ها ماندند و مهاجران می‌آمدند. ملت‌های بومی برای زمین خود جنگیدند.' } }
    ]
  },

  learned: [
    { en: 'John Locke wrote about [[natural rights|natural rights]] and [[consent|consent]]. Montesquieu wrote about [[separation of powers|separation of powers]]. Colonists read these ideas.', es: 'John Locke escribió sobre los [[natural rights|derechos naturales]] y el [[consent|consentimiento]]. Montesquieu, sobre la [[separation of powers|separación de poderes]]. Los colonos leían estas ideas.', fa: 'جان لاک از [[natural rights|حقوق طبیعی]] و [[consent|رضایت]] نوشت. مونتسکیو از [[separation of powers|تقسیم قدرت]] نوشت. مردم مستعمره این فکرها را می‌خواندند.' },
    { en: 'Britain and France fought over the Ohio River Valley. Britain won the [[french and indian war|French and Indian War]] in 1763.', es: 'Gran Bretaña y Francia pelearon por el valle del Ohio. Gran Bretaña ganó la [[french and indian war|guerra franco-india]] en 1763.', fa: 'بریتانیا و فرانسه بر سر درهٔ اوهایو جنگیدند. بریتانیا [[french and indian war|جنگ فرانسوی‌ها و بومیان]] را در ۱۷۶۳ برد.' },
    { en: 'Britain\'s [[debt|debt]] led to new taxes. The [[proclamation|Proclamation]] of 1763 closed the west. Native nations fought for their [[homeland|homelands]].', es: 'La [[debt|deuda]] británica trajo impuestos nuevos. La [[proclamation|Proclamación]] de 1763 cerró el oeste. Las naciones indígenas lucharon por sus [[homeland|tierras]].', fa: '[[debt|قرض]] بریتانیا به مالیات‌های نو رسید. [[proclamation|فرمان]] ۱۷۶۳ غرب را بست. ملت‌های بومی برای [[homeland|سرزمین]] خود جنگیدند.' }
  ],
  reflect: {
    q: { en: 'Locke said government needs the people\'s consent. Should people pay a tax they did not vote for? Why?', es: 'Locke dijo que el gobierno necesita el consentimiento del pueblo. ¿Hay que pagar un impuesto que no votaste? ¿Por qué?', fa: 'لاک گفت حکومت به رضایت مردم نیاز دارد. آیا مردم باید مالیاتی بدهند که به آن رأی نداده‌اند؟ چرا؟' },
    starter: { en: 'I think people should', es: 'Creo que la gente debería', fa: 'فکر می‌کنم مردم باید' }
  }
};
