/* TRAILWALKER · Episode 2.3 · The Revolutionary War (VUS)
   Yorktown, Virginia, October 1781, a few days after the British surrender. War is serious here: plain, true words,
   no gore, nothing "fun" near suffering.
   North: the York River (deep water), a sandy shore and the town dock. North-west: the small town of Yorktown.
   North-east: a farmhouse near where the surrender terms were written, and a sign looking east to the Chesapeake Bay.
   Row 12: the siege lines (earthworks, K) the American and French armies dug, with gaps to walk through.
   South-west: the French camp (tents m). South-east: the hospital tent, the American camp and the open field
   where the British laid down their guns (tall grass). */
window.EPISODE = {
  id: '2.3',
  realm: 2,
  sol: 'VUS',
  title: { en: 'The Revolutionary War', es: 'La guerra de Independencia', fa: 'جنگ انقلاب امریکا' },
  weather: { sky: 'leaves', time: 'day' },
  place: { en: 'Yorktown, 1781', es: 'Yorktown, 1781', fa: 'یورک‌تاون، ۱۷۸۱' },
  intro: [
    { en: 'The Grump blew away the Yorktown page. People forgot how the war was won.',
      es: 'El Gruñón se llevó la página de Yorktown. La gente olvidó cómo se ganó la guerra.',
      fa: 'غرغرو صفحهٔ یورک‌تاون را با باد برد. مردم فراموش کردند جنگ چطور برده شد.' },
    { en: 'Talk to the 3 people here, then fix the journal stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del diario.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ روزنامچه را درست کن.' }
  ],
  scenes: {
    at: [-76.51, 37.24],
    year: 1781,
    start: [
      { en: 'In 1775, war began between Britain and its 13 American colonies.',
        es: 'En 1775 empezó una guerra entre Gran Bretaña y sus 13 colonias americanas.',
        fa: 'در سال ۱۷۷۵، میان بریتانیا و ۱۳ مستعمرهٔ امریکایی‌اش جنگ شروع شد.' },
      { en: 'In 1781, American and French forces trapped a British army at Yorktown, Virginia.',
        es: 'En 1781, fuerzas americanas y francesas atraparon a un ejército británico en Yorktown, Virginia.',
        fa: 'در سال ۱۷۸۱، اردوهای امریکایی و فرانسوی یک اردوی انگلیس را در یورک‌تاون، ویرجینیا، گیر انداختند.' },
      { en: 'On October 19, 1781, the British general Cornwallis surrendered.',
        es: 'El 19 de octubre de 1781, el general británico Cornwallis se rindió.',
        fa: 'در ۱۹ اکتوبر ۱۷۸۱، جنرال انگلیسی کورنوالیس تسلیم شد.' }
    ],
    page: { en: 'In 1783, the Treaty of Paris said the United States was free.',
      es: 'En 1783, el Tratado de París dijo que Estados Unidos era libre.',
      fa: 'در سال ۱۷۸۳، معاهدهٔ پاریس گفت که ایالات متحده آزاد است.' },
    guess: {
      q: { en: 'Britain had a bigger army and navy. Who won the war in the end?', es: 'Gran Bretaña tenía más soldados y barcos. ¿Quién ganó la guerra al final?', fa: 'بریتانیا اردو و کشتی‌های جنگی بیشتر داشت. آخر جنگ را کی برد؟' },
      choices: [
        { t: { en: '🦅 The Americans', es: '🦅 Los americanos', fa: '🦅 امریکایی‌ها' }, ok: true },
        { t: { en: '👑 The British', es: '👑 Los británicos', fa: '👑 انگلیس‌ها' } }
      ],
      why: { en: 'The Americans won, with help from France. In 1783, Britain accepted that the United States was free.', es: 'Ganaron los americanos, con ayuda de Francia. En 1783, Gran Bretaña aceptó que Estados Unidos era libre.', fa: 'امریکایی‌ها با کمک فرانسه بردند. در ۱۷۸۳، بریتانیا قبول کرد که ایالات متحده آزاد است.' }
    },
    next: {
      q: { en: 'Next: Philadelphia, 1787. Why did leaders write a new plan of government?', es: 'Ahora: Filadelfia, 1787. ¿Por qué los líderes escribieron un nuevo plan de gobierno?', fa: 'بعدی: فیلادلفیا، ۱۷۸۷. چرا رهبران یک پلان نو برای حکومت نوشتند؟' },
      choices: [
        { t: { en: '📜 The old plan was weak', es: '📜 El plan viejo era débil', fa: '📜 پلان کهنه ضعیف بود' }, ok: true },
        { t: { en: '👑 They wanted a king again', es: '👑 Querían un rey otra vez', fa: '👑 دوباره پادشاه می‌خواستند' } }
      ],
      why: { en: 'The first national government was too weak. In 1787, leaders wrote the Constitution.', es: 'El primer gobierno nacional era demasiado débil. En 1787, los líderes escribieron la Constitución.', fa: 'اولین حکومت ملی بسیار ضعیف بود. در ۱۷۸۷، رهبران قانون اساسی را نوشتند.' }
    }
  },

  houses: [
    { at: [3, 5], name: { en: 'Mrs. Reed', es: 'Señora Reed', fa: 'خانم رید' },
      look: { skin: 1, hair: '#7a5a3a', shirt: '#6a3a5a', pants: '#3a2a2a', style: 'bun' },
      lines: [
        { en: 'In 1776, we heard the [[declaration|Declaration]] read aloud. The colonies said they were free.', es: 'En 1776 escuchamos leer la [[declaration|Declaración]]. Las colonias dijeron que eran libres.', fa: 'در ۱۷۷۶، [[declaration|اعلامیه]] را بلند خواندند. مستعمره‌ها گفتند که آزاد هستند.' },
        { en: 'That winter, Washington surprised the enemy at Trenton. People felt hope again.', es: 'Ese invierno, Washington sorprendió al enemigo en Trenton. La gente volvió a tener esperanza.', fa: 'آن زمستان، واشنگتن دشمن را در ترنتن غافلگیر کرد. مردم دوباره امید پیدا کردند.' },
        { en: 'This summer, British soldiers took over our town. Now, at last, it is quiet.', es: 'Este verano, soldados británicos tomaron nuestro pueblo. Ahora, por fin, hay calma.', fa: 'این تابستان، عسکرهای انگلیس شهر ما را گرفتند. حالا، بالاخره، آرام است.' }
      ] },
    { at: [8, 5], name: { en: 'Ben', es: 'Ben', fa: 'بن' },
      look: { skin: 5, hair: '#2a2a2a', shirt: '#8a6a3a', pants: '#3a3a4a', style: 'short', hat: '#4a3a2a' },
      lines: [
        { en: 'I am a free boatman. I carry goods up and down the York River.', es: 'Soy un barquero libre. Llevo cosas por el río York.', fa: 'من یک قایقران آزاد هستم. جنس‌ها را در دریای یورک بالا و پایین می‌برم.' },
        { en: 'James Armistead, an [[enslaved|enslaved]] Virginian, spied on the British here for the Americans.', es: 'James Armistead, un virginiano [[enslaved|esclavizado]], espió aquí a los británicos para los americanos.', fa: 'جیمز آرمیستد، یک ویرجینیایی [[enslaved|برده]]، اینجا برای امریکایی‌ها از انگلیس‌ها جاسوسی کرد.' },
        { en: 'He sent news about British plans. It helped trap their army.', es: 'Mandaba noticias sobre los planes británicos. Eso ayudó a atrapar a su ejército.', fa: 'او خبر پلان‌های انگلیس را می‌فرستاد. این کمک کرد اردوی‌شان گیر بیفتد.' }
      ] },
    { at: [22, 5], name: { en: 'Widow Harris', es: 'La viuda Harris', fa: 'بیوه هریس' },
      look: { skin: 0, hair: '#c8c8c8', shirt: '#3a5a7a', pants: '#2a2a2a', style: 'bun' },
      lines: [
        { en: 'Officers met at a farmhouse near here. They wrote the [[surrender|surrender]] terms.', es: 'Unos oficiales se reunieron en una granja cerca de aquí. Escribieron los términos de la [[surrender|rendición]].', fa: 'افسرها در یک خانهٔ دهقانی نزدیک اینجا جمع شدند. شرط‌های [[surrender|تسلیمی]] را نوشتند.' },
        { en: 'On October 19, British soldiers marched out and laid down their guns.', es: 'El 19 de octubre, los soldados británicos salieron en fila y dejaron sus armas.', fa: 'در ۱۹ اکتوبر، عسکرهای انگلیس بیرون آمدند و تفنگ‌هایشان را زمین گذاشتند.' }
      ] },
    { at: [19, 15], name: { en: 'Abel', es: 'Abel', fa: 'ایبل' },
      look: { skin: 2, hair: '#3a2416', shirt: '#e8e0d0', pants: '#4a3a2a', style: 'short' },
      lines: [
        { en: 'This is the hospital tent. I help the army doctor.', es: 'Esta es la tienda hospital. Ayudo al médico del ejército.', fa: 'این خیمهٔ شفاخانه است. من به داکتر اردو کمک می‌کنم.' },
        { en: 'Many soldiers are sick with fever. We give them rest and clean water.', es: 'Muchos soldados están enfermos de fiebre. Les damos descanso y agua limpia.', fa: 'بسیاری از عسکرها تب دارند. به آن‌ها استراحت و آب پاک می‌دهیم.' },
        { en: 'In this war, sickness took more soldiers\' lives than battles did.', es: 'En esta guerra, las enfermedades se llevaron más vidas de soldados que las batallas.', fa: 'در این جنگ، مریضی بیشتر از جنگ‌ها جان عسکرها را گرفت.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens. Rows 0-2: the York River (dock k at x 7). Row 3: the shore; sign (30,3) looks east to the bay.
     Rows 4-9: Yorktown's houses and streets (l) in the west; the farmhouse (22,5) in the east.
     Row 12: the siege lines (K) with gaps at x 1-2, 7, 15, 24, 29-30.
     South-west: the French camp tents (m). South-east: hospital tent (19,15), American tents, the surrender field (") */
  map: [
    '================================',
    '=======k========================',
    '~~~~~~~k~~~~~~~~~~~~~~~~~~~~~~~~',
    'TsssssssssssssssssssssssssssssxT',
    'T.RRR..QQQ.....:....RRRR.......T',
    'T.hdh..hdh..x..:....hhdh.......T',
    'Tllllllllllllll:::::::::::.....T',
    'T......l.......:.....,.....,...T',
    'T.TT...l.......:..........TT...T',
    'T......l.......:...............T',
    'T......:.......:...............T',
    'T......:.......................T',
    'T..KKKK.KKKKKKK.KKKKKKKK.KKKK..T',
    'T.x....:.......:........:......T',
    'T.mmm.mmm......:..QQQ...:......T',
    'T..............:..hdh...:..mmm.T',
    'T.mmm.mmm......::::::::::..mmm.T',
    'T......,.......:........"""""""T',
    'T.TT...........:........"""""""T',
    'T......,....TT.:........"""""""T',
    'T..............:........"""""""T',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT'
  ],
  start: [11, 8],

  finds: [
    { clueAt: [1, 9], at: [5, 7], decor: 'coinold',
      clue: { en: 'From this note, walk 4 steps east, then 2 steps north. Look near the street.', es: 'Desde esta nota, camina 4 pasos al este y luego 2 pasos al norte. Busca cerca de la calle.', fa: 'از این یادداشت، ۴ قدم به شرق برو، بعد ۲ قدم به شمال. نزدیک سرک را ببین.' },
      text: { en: 'Yorktown was a busy tobacco port. Ships carried tobacco to Britain. Here is an old coin.', es: 'Yorktown era un puerto de tabaco muy activo. Los barcos llevaban tabaco a Gran Bretaña. Aquí hay una moneda antigua.', fa: 'یورک‌تاون یک بندر پرکار تنباکو بود. کشتی‌ها تنباکو را به بریتانیا می‌بردند. اینجا یک سکهٔ کهنه است.' } },
    { clueAt: [30, 13], at: [27, 13], decor: 'drum',
      clue: { en: 'From this note, walk 3 steps west. Listen for a drum.', es: 'Desde esta nota, camina 3 pasos al oeste. Escucha un tambor.', fa: 'از این یادداشت، ۳ قدم به غرب برو. به صدای دُهل گوش بده.' },
      text: { en: 'On October 17, a British drummer beat a signal: the British wanted to talk. A drum!', es: 'El 17 de octubre, un tamborilero británico tocó una señal: los británicos querían hablar. ¡Un tambor!', fa: 'در ۱۷ اکتوبر، یک دهل‌زن انگلیس علامت زد: انگلیس‌ها می‌خواستند گفتگو کنند. یک دُهل!' } }
  ],

  words: {
    patriot: { en: 'an American colonist who wanted to be free from Britain', es: 'un colono americano que quería ser libre de Gran Bretaña', fa: 'یک باشندهٔ مستعمره که آزادی از بریتانیا را می‌خواست' },
    ally: { en: 'a country or person who joins your side and helps you', es: 'un país o una persona que se une a tu lado y te ayuda', fa: 'کشور یا کسی که با تو یکجا می‌شود و کمکت می‌کند' },
    'turning point': { en: 'a moment when things start to change in a big way', es: 'un momento en que las cosas empiezan a cambiar mucho', fa: 'لحظه‌ای که چیزها به شکل بزرگ تغییر می‌کنند' },
    siege: { en: 'when an army surrounds a place and traps the people inside', es: 'cuando un ejército rodea un lugar y atrapa a la gente adentro', fa: 'وقتی یک اردو یک جای را دور می‌گیرد و مردم داخل را گیر می‌اندازد' },
    earthworks: { en: 'long walls and ditches of dirt that soldiers dig for safety', es: 'muros y zanjas largos de tierra que los soldados cavan para protegerse', fa: 'دیوارها و خندق‌های دراز خاکی که عسکرها برای حفاظت می‌کنند' },
    surrender: { en: 'to give up in a fight or a war', es: 'darse por vencido en una pelea o una guerra', fa: 'دست کشیدن و شکست را قبول کردن در جنگ' },
    treaty: { en: 'a written agreement between countries', es: 'un acuerdo escrito entre países', fa: 'یک توافق نوشته‌شده میان کشورها' },
    declaration: { en: 'the Declaration of Independence (1776): the colonies said they were free from Britain', es: 'la Declaración de Independencia (1776): las colonias dijeron que eran libres de Gran Bretaña', fa: 'اعلامیهٔ استقلال (۱۷۷۶): مستعمره‌ها گفتند که از بریتانیا آزاد هستند' },
    'camp follower': { en: 'a woman or child who traveled with the army and worked for it', es: 'una mujer o un niño que viajaba con el ejército y trabajaba para él', fa: 'زن یا طفلی که با اردو سفر می‌کرد و برایش کار می‌کرد' },
    enslaved: { en: 'forced to work for no pay and kept as someone\'s property', es: 'obligado a trabajar sin pago y tratado como propiedad de otra persona', fa: 'مجبور به کار بی‌مزد و مثل مال کس دیگری نگه داشته شده' }
  },

  npcs: [
    {
      x: 24, y: 9,
      name: { en: 'Jacob', es: 'Jacob', fa: 'جیکب' },
      role: { en: 'Soldier from Rhode Island', es: 'Soldado de Rhode Island', fa: 'عسکر از رود آیلند' },
      look: { skin: 5, hair: '#141010', shirt: '#2a3a6a', pants: '#e8e0d0', hat: '#1a1a2a', style: 'short' },
      lines: [
        { en: 'I am a [[patriot|Patriot]] soldier from Rhode Island. I fight for freedom.', es: 'Soy un soldado [[patriot|patriota]] de Rhode Island. Lucho por la libertad.', fa: 'من یک عسکر [[patriot|وطن‌پرست]] از رود آیلند هستم. برای آزادی می‌جنگم.' },
        { en: 'Thousands of Black soldiers served with the Patriots in this war.', es: 'Miles de soldados negros sirvieron con los patriotas en esta guerra.', fa: 'هزاران عسکر سیاه‌پوست در این جنگ با وطن‌پرستان خدمت کردند.' },
        { en: 'In 1775, Lord Dunmore, Virginia\'s British governor, made a promise.', es: 'En 1775, Lord Dunmore, el gobernador británico de Virginia, hizo una promesa.', fa: 'در ۱۷۷۵، لارد دانمور، والی انگلیسی ویرجینیا، یک وعده داد.' },
        { en: 'Enslaved people who joined the British would be free. So some escaped to them.', es: 'Las personas esclavizadas que se unieran a los británicos serían libres. Por eso algunas escaparon.', fa: 'برده‌هایی که با انگلیس‌ها یکجا شوند آزاد می‌شوند. پس بعضی نزد آن‌ها فرار کردند.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why did some enslaved people in Virginia escape to the British side?', es: '¿Por qué algunas personas esclavizadas de Virginia escaparon al lado británico?', fa: 'چرا بعضی برده‌ها در ویرجینیا به طرف انگلیس‌ها فرار کردند؟' },
        choices: [
          { ok: true, t: { en: 'The British promised them freedom', es: 'Los británicos les prometieron la libertad', fa: 'انگلیس‌ها به آن‌ها وعدهٔ آزادی دادند' },
            why: { en: 'Yes. Lord Dunmore promised freedom in 1775. Many took a big risk to be free.', es: 'Sí. Lord Dunmore prometió la libertad en 1775. Muchos se arriesgaron mucho para ser libres.', fa: 'بله. لارد دانمور در ۱۷۷۵ وعدهٔ آزادی داد. بسیاری برای آزادی خطر بزرگی کردند.' } },
          { t: { en: 'The British paid them in gold', es: 'Los británicos les pagaban con oro', fa: 'انگلیس‌ها به آن‌ها طلا می‌دادند' },
            why: { en: 'Gold was not the promise. The British promised freedom.', es: 'El oro no era la promesa. Los británicos prometieron la libertad.', fa: 'وعده طلا نبود. انگلیس‌ها وعدهٔ آزادی دادند.' } },
          { t: { en: 'The British gave them big tobacco farms', es: 'Los británicos les daban grandes granjas de tabaco', fa: 'انگلیس‌ها به آن‌ها کشتزارهای بزرگ تنباکو دادند' },
            why: { en: 'No farms were promised. The promise was freedom from slavery.', es: 'No se prometieron granjas. La promesa era la libertad.', fa: 'زمین وعده داده نشد. وعده آزادی از بردگی بود.' } }
        ]
      }
    },
    {
      x: 10, y: 14,
      name: { en: 'Luc', es: 'Luc', fa: 'لوک' },
      role: { en: 'French soldier', es: 'Soldado francés', fa: 'عسکر فرانسوی' },
      look: { skin: 1, hair: '#5a3a1e', shirt: '#e8e8e8', pants: '#e8e8e8', hat: '#1a1a2a', style: 'short' },
      lines: [
        { en: 'Bonjour! I am a soldier in General Rochambeau\'s French army.', es: '¡Bonjour! Soy soldado del ejército francés del general Rochambeau.', fa: 'بونژور! من عسکر اردوی فرانسوی جنرال روشامبو هستم.' },
        { en: 'In 1777, the Americans won a big battle at Saratoga, New York.', es: 'En 1777, los americanos ganaron una gran batalla en Saratoga, Nueva York.', fa: 'در ۱۷۷۷، امریکایی‌ها در ساراتوگا، نیویارک، یک جنگ بزرگ را بردند.' },
        { en: 'It was the [[turning point|turning point]]. France saw the Americans could win.', es: 'Fue el [[turning point|punto decisivo]]. Francia vio que los americanos podían ganar.', fa: 'این [[turning point|نقطهٔ تغییر]] بود. فرانسه دید که امریکایی‌ها می‌توانند ببرند.' },
        { en: 'So France became their [[ally|ally]]. Our ships now block the bay.', es: 'Así Francia se hizo su [[ally|aliada]]. Ahora nuestros barcos cierran la bahía.', fa: 'پس فرانسه [[ally|متحد]] آن‌ها شد. حالا کشتی‌های ما خلیج را بسته‌اند.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'What made France join the Americans as an ally?', es: '¿Qué hizo que Francia se uniera a los americanos como aliada?', fa: 'چه چیزی باعث شد فرانسه متحد امریکایی‌ها شود؟' },
        choices: [
          { ok: true, t: { en: 'The American win at Saratoga', es: 'La victoria americana en Saratoga', fa: 'پیروزی امریکا در ساراتوگا' },
            why: { en: 'Yes! Saratoga in 1777 showed France the Americans could win.', es: '¡Sí! Saratoga, en 1777, le mostró a Francia que los americanos podían ganar.', fa: 'بله! ساراتوگا در ۱۷۷۷ به فرانسه نشان داد که امریکایی‌ها می‌توانند ببرند.' } },
          { t: { en: 'The fight at Bunker Hill', es: 'La pelea en Bunker Hill', fa: 'جنگ بنکر هیل' },
            why: { en: 'The British won at Bunker Hill. France waited for a big American win.', es: 'Los británicos ganaron en Bunker Hill. Francia esperó una gran victoria americana.', fa: 'انگلیس‌ها در بنکر هیل بردند. فرانسه منتظر یک پیروزی بزرگ امریکا ماند.' } },
          { t: { en: 'The Treaty of Paris, signed in 1783', es: 'El Tratado de París, firmado en 1783', fa: 'معاهدهٔ پاریس که در ۱۷۸۳ امضا شد' },
            why: { en: 'That treaty ended the war. France joined years before, in 1778.', es: 'Ese tratado terminó la guerra. Francia se unió años antes, en 1778.', fa: 'آن معاهده جنگ را تمام کرد. فرانسه سال‌ها پیش، در ۱۷۷۸، یکجا شد.' } }
        ]
      }
    },
    {
      x: 17, y: 15,
      name: { en: 'Martha', es: 'Martha', fa: 'مارتا' },
      role: { en: 'Camp cook and nurse', es: 'Cocinera y enfermera del campamento', fa: 'آشپز و نرس کمپ' },
      look: { skin: 3, hair: '#3a2416', shirt: '#7a4a2a', pants: '#4a4a3a', style: 'bun' },
      lines: [
        { en: 'I travel with the army. I cook, wash and care for the sick.', es: 'Viajo con el ejército. Cocino, lavo y cuido a los enfermos.', fa: 'من با اردو سفر می‌کنم. پخته می‌کنم، می‌شویم و از مریض‌ها مراقبت می‌کنم.' },
        { en: 'Women like me are [[camp follower|camp followers]]. At home, women ran farms and shops.', es: 'Las mujeres como yo seguimos al [[camp follower|campamento]]. En casa, las mujeres manejaban granjas y tiendas.', fa: 'زنانی مثل من [[camp follower|همراهان اردو]] هستند. در خانه، زنان کشتزار و دکان را می‌چرخاندند.' },
        { en: 'At Valley Forge, we lived through a hard winter. Baron von Steuben trained the army.', es: 'En Valley Forge pasamos un invierno muy duro. El barón von Steuben entrenó al ejército.', fa: 'در ولی فورج یک زمستان سخت را گذراندیم. بارون فون اشتوبن اردو را تمرین داد.' },
        { en: 'We fight on home ground. We know the land, and help is near.', es: 'Luchamos en nuestra tierra. Conocemos el lugar y la ayuda está cerca.', fa: 'ما در خاک خود می‌جنگیم. زمین را می‌شناسیم و کمک نزدیک است.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'How did fighting at home help the Americans?', es: '¿Cómo ayudó a los americanos pelear en su propia tierra?', fa: 'جنگیدن در خاک خود چطور به امریکایی‌ها کمک کرد؟' },
        choices: [
          { ok: true, t: { en: 'They knew the land, and help was near', es: 'Conocían el lugar y la ayuda estaba cerca', fa: 'زمین را می‌شناختند و کمک نزدیک بود' },
            why: { en: 'Right! The British had to bring soldiers and food across the ocean.', es: '¡Correcto! Los británicos tenían que traer soldados y comida cruzando el océano.', fa: 'درست! انگلیس‌ها باید عسکر و غذا را از آن طرف بحر می‌آوردند.' } },
          { t: { en: 'They had more ships than Britain', es: 'Tenían más barcos que Gran Bretaña', fa: 'از بریتانیا کشتی بیشتر داشتند' },
            why: { en: 'Britain had the strongest navy. The Americans knew the land better.', es: 'Gran Bretaña tenía la marina más fuerte. Los americanos conocían mejor la tierra.', fa: 'بریتانیا قوی‌ترین قوای بحری را داشت. امریکایی‌ها زمین را بهتر می‌شناختند.' } },
          { t: { en: 'Their land had no rivers or hills', es: 'Su tierra no tenía ríos ni cerros', fa: 'زمین‌شان دریا و تپه نداشت' },
            why: { en: 'The land had many rivers and hills. Americans knew them well.', es: 'La tierra tenía muchos ríos y cerros. Los americanos los conocían bien.', fa: 'زمین دریا و تپهٔ زیاد داشت. امریکایی‌ها آن‌ها را خوب می‌شناختند.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 12, y: 5, text: { en: 'YORKTOWN, VIRGINIA · 1781 · A small tobacco port on the York River.', es: 'YORKTOWN, VIRGINIA · 1781 · Un pequeño puerto de tabaco en el río York.', fa: 'یورک‌تاون، ویرجینیا · ۱۷۸۱ · یک بندر کوچک تنباکو کنار دریای یورک.' } },
    { x: 30, y: 3, text: { en: 'EAST: CHESAPEAKE BAY · French warships there kept British ships from saving Cornwallis.', es: 'AL ESTE: BAHÍA DE CHESAPEAKE · Los barcos de guerra franceses no dejaron que los británicos rescataran a Cornwallis.', fa: 'شرق: خلیج چیساپیک · کشتی‌های جنگی فرانسه نگذاشتند کشتی‌های انگلیس کورنوالیس را نجات دهند.' } },
    { x: 2, y: 13, text: { en: 'SIEGE LINES · American and French soldiers dug these [[earthworks|earthworks]] around the British.', es: 'LÍNEAS DE ASEDIO · Soldados americanos y franceses cavaron estas [[earthworks|trincheras]] alrededor de los británicos.', fa: 'خط‌های محاصره · عسکرهای امریکایی و فرانسوی این [[earthworks|سنگرهای خاکی]] را دور انگلیس‌ها کندند.' } }
  ],

  /* the quest: Ezra the drummer (gold !, south-east camp) -> Nell the washerwoman on the river shore (north-west)
     -> the Grump's Gust tore his letter: farmhouse (north-east), the siege lines (middle), the surrender field (south-east)
     -> the gust is caught in the French camp (south-west) -> back to Ezra */
  quest: {
    stat: 'reg',
    title: { en: 'The Windblown Letter', es: 'La carta que voló', fa: 'نامه‌ای که باد برد' },
    giver: {
      x: 22, y: 17,
      name: { en: 'Ezra', es: 'Ezra', fa: 'عزرا' },
      role: { en: 'Army drummer', es: 'Tamborilero del ejército', fa: 'دهل‌زن اردو' },
      look: { skin: 1, hair: '#8a5a2b', shirt: '#2a3a6a', pants: '#e8e0d0', hat: '#1a1a2a', style: 'short' },
      lines: [
        { en: 'I am a drummer. I wrote a letter to my mother on our farm.', es: 'Soy tamborilero. Le escribí una carta a mi mamá, en nuestra granja.', fa: 'من دهل‌زن هستم. برای مادرم در کشتزارمان یک نامه نوشتم.' },
        { en: 'A gust of wind tore it and blew it away! Nell saw it fly.', es: '¡Una ráfaga de viento la rompió y se la llevó! Nell la vio volar.', fa: 'یک باد تند آن را پاره کرد و برد! نِل دید که پرید.' },
        { en: 'Nell washes clothes on the river shore, north of town.', es: 'Nell lava ropa en la orilla del río, al norte del pueblo.', fa: 'نِل در ساحل دریا، شمال شهر، کالا می‌شوید.' }
      ],
      wait: { en: 'Nell washes clothes on the sandy river shore, north of town.', es: 'Nell lava ropa en la orilla arenosa del río, al norte del pueblo.', fa: 'نِل در ساحل ریگی دریا، شمال شهر، کالا می‌شوید.' },
      thanks: { en: 'My letter is whole! Now Mother will know the war is almost over.', es: '¡Mi carta está completa! Ahora mamá sabrá que la guerra casi termina.', fa: 'نامه‌ام کامل شد! حالا مادرم می‌فهمد که جنگ تقریباً تمام است.' }
    },
    contact: {
      x: 12, y: 3,
      name: { en: 'Nell', es: 'Nell', fa: 'نِل' },
      role: { en: 'Army washerwoman', es: 'Lavandera del ejército', fa: 'کالاشوی اردو' },
      look: { skin: 4, hair: '#1a1208', shirt: '#4a7a6a', pants: '#5a4a3a', style: 'long' },
      lines: [
        { en: 'Yes, I saw it! The Grump\'s Gust tore the letter into 3 pieces.', es: '¡Sí, la vi! La Ráfaga del Gruñón rompió la carta en 3 pedazos.', fa: 'بله، دیدمش! باد غرغرو نامه را ۳ تکه کرد.' },
        { en: 'Each piece blew to a place in the Yorktown story. Follow the clues!', es: 'Cada pedazo voló a un lugar de la historia de Yorktown. ¡Sigue las pistas!', fa: 'هر تکه به یک جای داستان یورک‌تاون پرید. سرنخ‌ها را دنبال کن!' }
      ]
    },
    action: {
      type: 'chase',
      at: [3, 15],
      hops: [[20, 19], [12, 20]],
      name: { en: 'The Grump\'s Gust', es: 'La Ráfaga del Gruñón', fa: 'باد غرغرو' },
      taunt: { en: 'Whoosh! Letters get lost in war. Nobody will read this one!', es: '¡Fiuuu! Las cartas se pierden en la guerra. ¡Nadie leerá esta!', fa: 'ووش! نامه‌ها در جنگ گم می‌شوند. هیچ کس این یکی را نمی‌خواند!' },
      clues: [
        { t: { en: 'Piece 1 blew to where officers wrote the surrender terms: a farmhouse east of town.', es: 'El pedazo 1 voló a donde los oficiales escribieron la rendición: una granja al este del pueblo.', fa: 'تکهٔ ۱ به جایی رفت که افسرها شرط‌های تسلیمی را نوشتند: خانهٔ دهقانی شرق شهر.' },
          zones: [{ x: 21, y: 6, w: 3, h: 1 }],
          noBy: [{ x: 1, y: 6, w: 10, h: 1, t: { en: 'These are town homes. The officers met at a farmhouse east of town.', es: 'Estas son casas del pueblo. Los oficiales se reunieron en una granja al este.', fa: 'این‌ها خانه‌های شهر هستند. افسرها در یک خانهٔ دهقانی شرق شهر جمع شدند.' } }],
          found: { en: 'Piece 1, by the farmhouse! It says: "The British gave up."', es: '¡El pedazo 1, junto a la granja! Dice: "Los británicos se rindieron".', fa: 'تکهٔ ۱، کنار خانهٔ دهقانی! نوشته: «انگلیس‌ها تسلیم شدند.»' } },
        { t: { en: 'Piece 2 blew to the long dirt walls the armies dug, south of town.', es: 'El pedazo 2 voló a los largos muros de tierra que cavaron los ejércitos, al sur del pueblo.', fa: 'تکهٔ ۲ به دیوارهای دراز خاکی رفت که اردوها جنوب شهر کندند.' },
          zones: [{ x: 8, y: 11, w: 7, h: 1 }, { x: 8, y: 13, w: 7, h: 1 }],
          noBy: [{ x: 1, y: 3, w: 10, h: 1, t: { en: 'This is the river shore. The dirt walls are south of town.', es: 'Esta es la orilla del río. Los muros de tierra están al sur del pueblo.', fa: 'این ساحل دریا است. دیوارهای خاکی جنوب شهر هستند.' } }],
          found: { en: 'Piece 2, at the [[earthworks|earthworks]]! It says: "We dug closer every night."', es: '¡El pedazo 2, en las [[earthworks|trincheras]]! Dice: "Cavábamos más cerca cada noche".', fa: 'تکهٔ ۲، کنار [[earthworks|سنگرهای خاکی]]! نوشته: «هر شب نزدیک‌تر کندیم.»' } },
        { t: { en: 'Piece 3 blew to the open field where British soldiers laid down their guns.', es: 'El pedazo 3 voló al campo abierto donde los soldados británicos dejaron sus armas.', fa: 'تکهٔ ۳ به میدان بازی رفت که عسکرهای انگلیس تفنگ‌هایشان را زمین گذاشتند.' },
          zones: [{ x: 24, y: 17, w: 7, h: 4 }],
          noBy: [{ x: 1, y: 15, w: 9, h: 1, t: { en: 'This is the French camp. The surrender field is south-east, in the tall grass.', es: 'Este es el campamento francés. El campo de la rendición está al sureste, en la hierba alta.', fa: 'این کمپ فرانسوی است. میدان تسلیمی جنوب شرق، میان علف‌های بلند است.' } }],
          found: { en: 'Piece 3, on the surrender field! It says: "October 19, 1781."', es: '¡El pedazo 3, en el campo de la rendición! Dice: "19 de octubre de 1781".', fa: 'تکهٔ ۳، در میدان تسلیمی! نوشته: «۱۹ اکتوبر ۱۷۸۱.»' } }
      ],
      win: { en: 'Caught you! The gust dies down. All 3 pieces of Ezra\'s letter fit together.', es: '¡Te atrapé! La ráfaga se calma. Los 3 pedazos de la carta de Ezra encajan.', fa: 'گرفتمت! باد آرام شد. هر ۳ تکهٔ نامهٔ عزرا با هم جور شد.' },
      item: { icon: '✉️', name: { en: 'Ezra\'s letter home', es: 'La carta de Ezra a su casa', fa: 'نامهٔ عزرا به خانه' } }
    }
  },

  scraps: [[1, 4], [30, 10], [1, 20]],
  smudges: [[20, 11], [8, 19]],

  challenge: {
    at: [11, 16],
    type: 'route', // in the world; the card version (order) is the fallback
    // six flags around the map, in the order of the war: Lexington and Concord, Bunker Hill, Saratoga,
    // Valley Forge, Yorktown (the surrender field), the Treaty of Paris (the end of the dock: ships to France)
    spots: [[12, 17], [3, 10], [20, 9], [5, 20], [27, 18], [7, 1]],
    stat: 'loc',
    title: { en: 'Walk the war in order', es: 'Recorre la guerra en orden', fa: 'جنگ را به ترتیب طی کن' },
    intro: { en: 'The Grump mixed up the war\'s story! Walk to the six flags in order, from first to last.',
      es: '¡El Gruñón revolvió la historia de la guerra! Camina a las seis banderas en orden, de la primera a la última.',
      fa: 'غرغرو داستان جنگ را درهم کرد! به ترتیب، از اول تا آخر، به شش بیرق برو.' },
    items: [
      { icon: '🔔', t: { en: 'Lexington and Concord · 1775 · the first battles', es: 'Lexington y Concord · 1775 · las primeras batallas', fa: 'لکسینگتن و کانکورد · ۱۷۷۵ · اولین جنگ‌ها' } },
      { icon: '⛰️', t: { en: 'Bunker Hill · 1775 · the British won, but lost many soldiers', es: 'Bunker Hill · 1775 · ganaron los británicos, pero perdieron muchos soldados', fa: 'بنکر هیل · ۱۷۷۵ · انگلیس‌ها بردند، اما عسکرهای زیادی از دست دادند' } },
      { icon: '🤝', t: { en: 'Saratoga · 1777 · the turning point: France joins', es: 'Saratoga · 1777 · el punto decisivo: Francia se une', fa: 'ساراتوگا · ۱۷۷۷ · نقطهٔ تغییر: فرانسه یکجا می‌شود' } },
      { icon: '❄️', t: { en: 'Valley Forge · winter 1777–78 · von Steuben trains the army', es: 'Valley Forge · invierno de 1777–78 · von Steuben entrena al ejército', fa: 'ولی فورج · زمستان ۱۷۷۷–۷۸ · فون اشتوبن اردو را تمرین می‌دهد' } },
      { icon: '🏳️', t: { en: 'Yorktown · 1781 · Cornwallis surrenders', es: 'Yorktown · 1781 · Cornwallis se rinde', fa: 'یورک‌تاون · ۱۷۸۱ · کورنوالیس تسلیم می‌شود' } },
      { icon: '📜', t: { en: 'Treaty of Paris · 1783 · Britain accepts American independence', es: 'Tratado de París · 1783 · Gran Bretaña acepta la independencia', fa: 'معاهدهٔ پاریس · ۱۷۸۳ · بریتانیا استقلال امریکا را قبول می‌کند' } }
    ],
    why: { en: 'In order: Lexington and Concord, Bunker Hill (1775), Saratoga (1777), Valley Forge, Yorktown (1781), Paris (1783).',
      es: 'En orden: Lexington y Concord, Bunker Hill (1775), Saratoga (1777), Valley Forge, Yorktown (1781), París (1783).',
      fa: 'به ترتیب: لکسینگتن و کانکورد، بنکر هیل (۱۷۷۵)، ساراتوگا (۱۷۷۷)، ولی فورج، یورک‌تاون (۱۷۸۱)، پاریس (۱۷۸۳).' },
    success: { en: 'The war\'s story is in order again! Ships carry the news of peace to Paris.', es: '¡La historia de la guerra está en orden otra vez! Los barcos llevan la noticia de la paz a París.', fa: 'داستان جنگ دوباره به ترتیب شد! کشتی‌ها خبر صلح را به پاریس می‌برند.' }
  },

  boss: {
    at: [28, 5],
    stat: 'loc',
    need: 3,
    name: { en: 'The Fog Grump', es: 'El Gruñón de Niebla', fa: 'غرغروی مه' },
    appear: { en: 'The Fog Grump is hiding in the river fog, east of town.', es: 'El Gruñón de Niebla se esconde en la niebla del río, al este del pueblo.', fa: 'غرغروی مه در مه دریا، شرق شهر، پنهان است.' },
    taunt: { en: 'Old battles, old names. No one will remember who fought here, or why.', es: 'Batallas viejas, nombres viejos. Nadie recordará quién luchó aquí, ni por qué.', fa: 'جنگ‌های کهنه، نام‌های کهنه. هیچ کس یاد نمی‌کند کی اینجا جنگید، یا چرا.' },
    win: { en: 'The fog lifts over the York River. Journal page 2.3 floats into your hands!', es: 'La niebla se va del río York. ¡La página 2.3 del diario cae en tus manos!', fa: 'مه از روی دریای یورک بلند می‌شود. صفحهٔ ۲.۳ روزنامچه به دستت می‌افتد!' },
    questions: [
      { q: { en: 'Where were the first battles of the war, in 1775?', es: '¿Dónde fueron las primeras batallas de la guerra, en 1775?', fa: 'اولین جنگ‌های این جنگ، در ۱۷۷۵، کجا بود؟' },
        choices: [
          { en: 'Lexington and Concord', es: 'Lexington y Concord', fa: 'لکسینگتن و کانکورد' },
          { en: 'Yorktown, Virginia', es: 'Yorktown, Virginia', fa: 'یورک‌تاون، ویرجینیا' },
          { en: 'Saratoga, New York', es: 'Saratoga, Nueva York', fa: 'ساراتوگا، نیویارک' },
          { en: 'Valley Forge, Pennsylvania', es: 'Valley Forge, Pensilvania', fa: 'ولی فورج، پنسلوانیا' }],
        answer: 0,
        why: { en: 'The war began at Lexington and Concord, Massachusetts, in April 1775.', es: 'La guerra empezó en Lexington y Concord, Massachusetts, en abril de 1775.', fa: 'جنگ در لکسینگتن و کانکورد، ماساچوست، در اپریل ۱۷۷۵ شروع شد.' } },
      { q: { en: 'Why is Saratoga called the turning point of the war?', es: '¿Por qué Saratoga se llama el punto decisivo de la guerra?', fa: 'چرا ساراتوگا را نقطهٔ تغییر جنگ می‌گویند؟' },
        choices: [
          { en: 'It convinced France to join', es: 'Convenció a Francia de unirse', fa: 'فرانسه را قانع کرد که یکجا شود' },
          { en: 'It ended the whole war that same day', es: 'Terminó toda la guerra ese mismo día', fa: 'تمام جنگ را همان روز ختم کرد' },
          { en: 'It was the first battle', es: 'Fue la primera batalla', fa: 'اولین جنگ بود' },
          { en: 'Britain gave up Virginia', es: 'Gran Bretaña dejó Virginia', fa: 'بریتانیا ویرجینیا را رها کرد' }],
        answer: 0,
        why: { en: 'The 1777 win at Saratoga showed the Americans could win. France joined as an ally.', es: 'La victoria de 1777 en Saratoga mostró que los americanos podían ganar. Francia se unió como aliada.', fa: 'پیروزی ۱۷۷۷ در ساراتوگا نشان داد امریکایی‌ها می‌توانند ببرند. فرانسه متحد شد.' } },
      { q: { en: 'What happened at Valley Forge in the winter of 1777–78?', es: '¿Qué pasó en Valley Forge en el invierno de 1777–78?', fa: 'در زمستان ۱۷۷۷–۷۸ در ولی فورج چه شد؟' },
        choices: [
          { en: 'Von Steuben trained the army', es: 'Von Steuben entrenó al ejército', fa: 'فون اشتوبن اردو را تمرین داد' },
          { en: 'The British army gave up', es: 'El ejército británico se rindió', fa: 'اردوی انگلیس تسلیم شد' },
          { en: 'Leaders signed a peace treaty', es: 'Los líderes firmaron la paz', fa: 'رهبران معاهدهٔ صلح را امضا کردند' },
          { en: 'French ships closed the bay', es: 'Barcos franceses cerraron la bahía', fa: 'کشتی‌های فرانسه خلیج را بستند' }],
        answer: 0,
        why: { en: 'The army was cold and hungry. Baron von Steuben trained it to fight better.', es: 'El ejército tenía frío y hambre. El barón von Steuben lo entrenó para pelear mejor.', fa: 'اردو سرد و گرسنه بود. بارون فون اشتوبن آن را برای جنگ بهتر تمرین داد.' } },
      { q: { en: 'How was the British army trapped at Yorktown?', es: '¿Cómo quedó atrapado el ejército británico en Yorktown?', fa: 'اردوی انگلیس در یورک‌تاون چطور گیر افتاد؟' },
        choices: [
          { en: 'Armies on land, French ships at sea', es: 'Ejércitos por tierra, barcos franceses por mar', fa: 'اردوها در خشکه، کشتی‌های فرانسه در بحر' },
          { en: 'Snow and ice closed every road', es: 'La nieve y el hielo cerraron los caminos', fa: 'برف و یخ همهٔ سرک‌ها را بست' },
          { en: 'Its own ships sailed back to Britain early', es: 'Sus propios barcos volvieron pronto a Gran Bretaña', fa: 'کشتی‌های خودش زود به بریتانیا برگشتند' },
          { en: 'A flood covered the whole town', es: 'Una inundación cubrió todo el pueblo', fa: 'یک سیلاب تمام شهر را گرفت' }],
        answer: 0,
        why: { en: 'Washington\'s and Rochambeau\'s armies closed the land. French ships closed the sea.', es: 'Los ejércitos de Washington y Rochambeau cerraron la tierra. Los barcos franceses cerraron el mar.', fa: 'اردوهای واشنگتن و روشامبو راه خشکه را بستند. کشتی‌های فرانسه راه بحر را بستند.' } },
      { q: { en: 'When did Cornwallis surrender at Yorktown?', es: '¿Cuándo se rindió Cornwallis en Yorktown?', fa: 'کورنوالیس کی در یورک‌تاون تسلیم شد؟' },
        choices: [
          { en: 'October 19, 1781', es: '19 de octubre de 1781', fa: '۱۹ اکتوبر ۱۷۸۱' },
          { en: 'July 4, 1776', es: '4 de julio de 1776', fa: '۴ جولای ۱۷۷۶' },
          { en: 'April 19, 1775', es: '19 de abril de 1775', fa: '۱۹ اپریل ۱۷۷۵' },
          { en: 'September 3, 1783', es: '3 de septiembre de 1783', fa: '۳ سپتمبر ۱۷۸۳' }],
        answer: 0,
        why: { en: 'Cornwallis surrendered on October 19, 1781. It was the last big battle of the war.', es: 'Cornwallis se rindió el 19 de octubre de 1781. Fue la última gran batalla de la guerra.', fa: 'کورنوالیس در ۱۹ اکتوبر ۱۷۸۱ تسلیم شد. این آخرین جنگ بزرگ بود.' } },
      { q: { en: 'What did the Treaty of Paris of 1783 do?', es: '¿Qué hizo el Tratado de París de 1783?', fa: 'معاهدهٔ پاریس در ۱۷۸۳ چه کرد؟' },
        choices: [
          { en: 'Britain accepted U.S. independence', es: 'Gran Bretaña aceptó la independencia', fa: 'بریتانیا استقلال امریکا را قبول کرد' },
          { en: 'France took over Virginia and Maryland', es: 'Francia se quedó con Virginia y Maryland', fa: 'فرانسه ویرجینیا و مریلند را گرفت' },
          { en: 'It started the war with Britain', es: 'Empezó la guerra con Gran Bretaña', fa: 'جنگ با بریتانیا را شروع کرد' },
          { en: 'Britain got its colonies back', es: 'Gran Bretaña recuperó sus colonias', fa: 'بریتانیا مستعمره‌هایش را پس گرفت' }],
        answer: 0,
        why: { en: 'The treaty ended the war. Britain accepted that the United States was free.', es: 'El tratado terminó la guerra. Gran Bretaña aceptó que Estados Unidos era libre.', fa: 'معاهده جنگ را تمام کرد. بریتانیا قبول کرد که ایالات متحده آزاد است.' } },
      { q: { en: 'Which is one reason the Americans won the war?', es: '¿Cuál es una razón por la que ganaron los americanos?', fa: 'یک دلیل بردن امریکایی‌ها در جنگ کدام است؟' },
        choices: [
          { en: 'Help from France and its navy', es: 'La ayuda de Francia y su marina', fa: 'کمک فرانسه و قوای بحری‌اش' },
          { en: 'A bigger army than Britain', es: 'Un ejército más grande que el británico', fa: 'اردوی بزرگ‌تر از بریتانیا' },
          { en: 'More warships than Britain', es: 'Más barcos de guerra que Gran Bretaña', fa: 'کشتی جنگی بیشتر از بریتانیا' },
          { en: 'Britain never sent any soldiers to America', es: 'Gran Bretaña nunca mandó soldados a América', fa: 'بریتانیا هرگز عسکری به امریکا نفرستاد' }],
        answer: 0,
        why: { en: 'France sent soldiers, ships and money. Home ground, Washington\'s leadership and the will to win helped too.', es: 'Francia mandó soldados, barcos y dinero. También ayudaron la tierra propia, el liderazgo de Washington y las ganas de ganar.', fa: 'فرانسه عسکر، کشتی و پول فرستاد. خاک خود، رهبری واشنگتن و ارادهٔ بردن هم کمک کرد.' } },
      { q: { en: 'Who helped the Patriot side in the war?', es: '¿Quiénes ayudaron al lado patriota en la guerra?', fa: 'چه کسانی در جنگ به طرف وطن‌پرستان کمک کردند؟' },
        choices: [
          { en: 'Black soldiers, women, the French', es: 'Soldados negros, mujeres, los franceses', fa: 'عسکرهای سیاه‌پوست، زنان، فرانسوی‌ها' },
          { en: 'Only rich men from Virginia', es: 'Solo hombres ricos de Virginia', fa: 'فقط مردان پولدار ویرجینیا' },
          { en: 'Only soldiers born in Britain', es: 'Solo soldados nacidos en Gran Bretaña', fa: 'فقط عسکرهای زاده‌شده در بریتانیا' },
          { en: 'Only General Washington\'s own family', es: 'Solo la propia familia del general Washington', fa: 'فقط خانوادهٔ خود جنرال واشنگتن' }],
        answer: 0,
        why: { en: 'Many people helped. Thousands of Black soldiers served. Women cooked, nursed, spied and ran farms.', es: 'Mucha gente ayudó. Sirvieron miles de soldados negros. Las mujeres cocinaron, cuidaron enfermos, espiaron y manejaron granjas.', fa: 'مردم زیادی کمک کردند. هزاران عسکر سیاه‌پوست خدمت کردند. زنان پخته کردند، نرسی کردند، جاسوسی کردند و کشتزار را چرخاندند.' } }
    ]
  },

  learned: [
    { en: 'The war began at Lexington and Concord in 1775. The win at Saratoga in 1777 was the [[turning point|turning point]]: France became an [[ally|ally]].', es: 'La guerra empezó en Lexington y Concord en 1775. La victoria en Saratoga en 1777 fue el [[turning point|punto decisivo]]: Francia se hizo [[ally|aliada]].', fa: 'جنگ در ۱۷۷۵ در لکسینگتن و کانکورد شروع شد. پیروزی ساراتوگا در ۱۷۷۷ [[turning point|نقطهٔ تغییر]] بود: فرانسه [[ally|متحد]] شد.' },
    { en: 'At Yorktown, American and French armies and French ships trapped Cornwallis. He [[surrender|surrendered]] on October 19, 1781. The [[treaty|Treaty]] of Paris (1783) ended the war.', es: 'En Yorktown, ejércitos americanos y franceses y barcos franceses atraparon a Cornwallis. Se [[surrender|rindió]] el 19 de octubre de 1781. El [[treaty|Tratado]] de París (1783) terminó la guerra.', fa: 'در یورک‌تاون، اردوهای امریکایی و فرانسوی و کشتی‌های فرانسه کورنوالیس را گیر انداختند. او در ۱۹ اکتوبر ۱۷۸۱ [[surrender|تسلیم]] شد. [[treaty|معاهدهٔ]] پاریس (۱۷۸۳) جنگ را تمام کرد.' },
    { en: 'The Americans won with home ground, French help, Washington\'s leadership and the will to win. Black soldiers, women and many others took part.', es: 'Los americanos ganaron por pelear en su tierra, la ayuda francesa, el liderazgo de Washington y las ganas de ganar. Soldados negros, mujeres y muchos más participaron.', fa: 'امریکایی‌ها با خاک خود، کمک فرانسه، رهبری واشنگتن و ارادهٔ بردن پیروز شدند. عسکرهای سیاه‌پوست، زنان و بسیاری دیگر سهم گرفتند.' }
  ],
  reflect: {
    q: { en: 'Many ordinary people helped in this war: soldiers, cooks, nurses, spies, farmers. Whose story do you think is most important to remember, and why?', es: 'Mucha gente común ayudó en esta guerra: soldados, cocineras, enfermeras, espías, agricultores. ¿Qué historia crees que es más importante recordar, y por qué?', fa: 'مردم عادی زیادی در این جنگ کمک کردند: عسکرها، آشپزها، نرس‌ها، جاسوس‌ها، دهقانان. به نظر تو یاد کردن داستان کی از همه مهم‌تر است، و چرا؟' },
    starter: { en: 'I think we should remember', es: 'Creo que debemos recordar', fa: 'فکر می‌کنم باید به یاد داشته باشیم' }
  }
};
