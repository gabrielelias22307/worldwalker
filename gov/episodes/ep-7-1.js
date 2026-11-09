/* CIVICWALKER · Episode 7.1 · The Court's Big Power (Judicial Powers: Marbury v. Madison)
   Washington, 1803: a young, muddy capital. North-west: the President's House (no door) and a small home.
   North-east: the unfinished Capitol. Its north wing (stone, D) holds the Senate and the small room where the
   Supreme Court meets (door 22,3); the middle is stone piles; the south wing (J) is the House's temporary hall.
   Pennsylvania Avenue (:) is a dirt road across the middle (y 9). Tiber Creek (~) runs east-west (y 13-14) with
   two bridges (B). South-west: the market and the print shop. South-east: boarding houses on Capitol Hill.
   Famous people (Adams, Jefferson, Madison, Marshall, Marbury) are only MENTIONED, never characters.
   The charter stone: hear both sides at three flags, then plant the flag on judicial review and back it up. */
window.EPISODE = {
  id: '7.1',
  realm: 7,
  sol: 'GOVT',
  title: { en: 'The Court\'s Big Power', es: 'El gran poder de la Corte', fa: 'قدرت بزرگ محکمه' },
  place: { en: 'Washington, 1803', es: 'Washington, 1803', fa: 'واشنگتن، ۱۸۰۳' },
  intro: [
    { en: 'The Grump tore the page about the courts. Now people think judges obey every law.',
      es: 'El Gruñón rompió la página sobre las cortes. Ahora creen que los jueces obedecen cualquier ley.',
      fa: 'غرغرو صفحهٔ محکمه‌ها را پاره کرد. حالا مردم فکر می‌کنند قاضی‌ها باید از هر قانون اطاعت کنند.' },
    { en: 'Talk to the 3 people here, then fix the charter stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra de la carta.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ منشور را درست کن.' }
  ],
  scenes: {
    at: [-77.01, 38.89],
    start: [
      { en: 'In 1800, the US government moved to a brand-new city: Washington.',
        es: 'En 1800, el gobierno de EE. UU. se mudó a una ciudad nueva: Washington.',
        fa: 'در سال ۱۸۰۰، حکومت امریکا به یک شهر تازه رفت: واشنگتن.' },
      { en: 'In 1803, it was small and muddy. The Capitol was not finished.',
        es: 'En 1803 era pequeña y llena de lodo. El Capitolio no estaba terminado.',
        fa: 'در سال ۱۸۰۳، شهر کوچک و پر از گل بود. کاپیتول هنوز تمام نشده بود.' },
      { en: 'The Supreme Court had no building. It met in a small room in the Capitol.',
        es: 'La Corte Suprema no tenía edificio. Se reunía en un cuarto pequeño del Capitolio.',
        fa: 'ستره محکمه ساختمان نداشت. در یک اتاق کوچک در کاپیتول جمع می‌شد.' }
    ],
    page: { en: 'The Supreme Court got its own building only in 1935.',
      es: 'La Corte Suprema tuvo su propio edificio recién en 1935.',
      fa: 'ستره محکمه تازه در سال ۱۹۳۵ ساختمان خودش را گرفت.' },
    guess: {
      q: { en: 'Can a court say a law breaks the Constitution?', es: '¿Puede una corte decir que una ley va contra la Constitución?', fa: 'آیا یک محکمه می‌تواند بگوید یک قانون خلاف قانون اساسی است؟' },
      choices: [
        { t: { en: '⚖️ Yes, it can', es: '⚖️ Sí, puede', fa: '⚖️ بله، می‌تواند' }, ok: true },
        { t: { en: '🙅 No, never', es: '🙅 No, nunca', fa: '🙅 نه، هرگز' } }
      ],
      why: { en: 'Yes. Since 1803, courts can strike down a law that breaks the Constitution.', es: 'Sí. Desde 1803, las cortes pueden anular una ley que va contra la Constitución.', fa: 'بله. از سال ۱۸۰۳، محکمه‌ها می‌توانند قانونی را که خلاف قانون اساسی است باطل کنند.' }
    },
    next: {
      q: { en: 'Next: how does a case reach the Supreme Court? Does it usually start there?', es: 'Ahora: ¿cómo llega un caso a la Corte Suprema? ¿Casi siempre empieza allí?', fa: 'بعدی: یک قضیه چطور به ستره محکمه می‌رسد؟ آیا معمولاً از آنجا شروع می‌شود؟' },
      choices: [
        { t: { en: 'No, in a lower court', es: 'No, en una corte más baja', fa: 'نه، در محکمهٔ پایین‌تر' }, ok: true },
        { t: { en: 'Yes, always there first', es: 'Sí, siempre allí primero', fa: 'بله، همیشه اول آنجا' } }
      ],
      why: { en: 'Most cases start in a trial court. After an appeal, a case can climb higher.', es: 'La mayoría de los casos empieza en una corte de juicio. Con una apelación, un caso puede subir.', fa: 'بیشتر قضیه‌ها در محکمهٔ ابتدایی شروع می‌شوند. بعد از استیناف، قضیه می‌تواند بالاتر برود.' }
    }
  },

  houses: [
    { at: [13, 3], name: { en: 'Mrs. Wells', es: 'Señora Wells', fa: 'خانم ولز' },
      look: { skin: 1, hair: '#6a4a2a', shirt: '#8a6aaa', pants: '#3a3a4a', style: 'bun' },
      lines: [
        { en: 'Washington is new. Our streets are dirt, and rain makes deep mud.', es: 'Washington es nueva. Las calles son de tierra, y la lluvia hace mucho lodo.', fa: 'واشنگتن تازه است. سرک‌های ما خاکی است، و باران گل زیاد می‌سازد.' },
        { en: 'My husband says judges must obey every law Congress makes.', es: 'Mi esposo dice que los jueces deben obedecer toda ley que hace el Congreso.', fa: 'شوهرم می‌گوید قاضی‌ها باید از هر قانونی که کانگرس می‌سازد اطاعت کنند.' },
        { en: 'He says the people elected Congress. Nobody elected the judges.', es: 'Dice que el pueblo eligió al Congreso. Nadie eligió a los jueces.', fa: 'او می‌گوید مردم کانگرس را انتخاب کردند. هیچ کس قاضی‌ها را انتخاب نکرد.' }
      ] },
    { at: [22, 3], name: { en: 'Peter', es: 'Peter', fa: 'پیتر' },
      look: { skin: 4, hair: '#1a1008', shirt: '#2a3a5a', pants: '#2a2a2a', hat: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'Shh! I keep the door. This small room is the Supreme Court.', es: '¡Shh! Yo cuido la puerta. Este cuarto pequeño es la Corte Suprema.', fa: 'هیس! من دروازه‌بان هستم. این اتاق کوچک ستره محکمه است.' },
        { en: 'In 1803, six justices sit here. The Chief Justice is John Marshall.', es: 'En 1803, seis jueces se sientan aquí. El presidente de la Corte es John Marshall.', fa: 'در سال ۱۸۰۳، شش قاضی اینجا می‌نشینند. رئیس ستره محکمه جان مارشال است.' },
        { en: 'The room is small, but big cases are decided here.', es: 'El cuarto es pequeño, pero aquí se deciden casos grandes.', fa: 'اتاق کوچک است، اما قضیه‌های بزرگ اینجا فیصله می‌شود.' }
      ] },
    { at: [13, 17], name: { en: 'Lucy', es: 'Lucy', fa: 'لوسی' },
      look: { skin: 2, hair: '#3a2416', shirt: '#c05a3a', pants: '#3a2a20', style: 'long' },
      lines: [
        { en: 'I set the metal letters for our newspaper, one by one.', es: 'Pongo las letras de metal del periódico, una por una.', fa: 'من حروف فلزی روزنامهٔ ما را یکی یکی می‌چینم.' },
        { en: 'Today we print the news of Marbury against Madison.', es: 'Hoy imprimimos la noticia de Marbury contra Madison.', fa: 'امروز خبر قضیهٔ ماربری علیه مدیسن را چاپ می‌کنیم.' },
        { en: 'People all over the country will read what the Court decided.', es: 'Gente de todo el país leerá lo que decidió la Corte.', fa: 'مردم در سراسر کشور می‌خوانند که محکمه چه فیصله کرد.' }
      ] },
    { at: [20, 17], name: { en: 'Ruth', es: 'Ruth', fa: 'روت' },
      look: { skin: 5, hair: '#120c08', shirt: '#e8e0d0', pants: '#5a3a2a', style: 'bun' },
      lines: [
        { en: 'I cook for the boarders here: bread, ham and hot soup.', es: 'Cocino para los huéspedes de aquí: pan, jamón y sopa caliente.', fa: 'من برای مهمان‌های اینجا آشپزی می‌کنم: نان، گوشت و شوربای گرم.' },
        { en: 'One boarder says the Constitution is above every other law.', es: 'Un huésped dice que la Constitución está por encima de toda otra ley.', fa: 'یک مهمان می‌گوید قانون اساسی بالاتر از هر قانون دیگر است.' },
        { en: 'He says a law that breaks it should not count at all.', es: 'Dice que una ley que va contra ella no debe valer nada.', fa: 'او می‌گوید قانونی که خلاف آن باشد هیچ اعتبار ندارد.' }
      ] },
    { at: [26, 17], name: { en: 'Mr. Cole', es: 'Señor Cole', fa: 'آقای کول' },
      look: { skin: 3, hair: '#d8d8d8', shirt: '#7a6a5a', pants: '#3a3020', hat: '#8a6a3a', style: 'short' },
      lines: [
        { en: 'I cut stone for the Capitol. It will take many more years.', es: 'Corto piedra para el Capitolio. Faltan muchos años para terminarlo.', fa: 'من برای کاپیتول سنگ می‌تراشم. سال‌های زیادی کار دارد.' },
        { en: 'Many workers on the Capitol are enslaved. Their owners take their pay.', es: 'Muchos trabajadores del Capitolio están esclavizados. Sus dueños se quedan con su pago.', fa: 'بسیاری از کارگران کاپیتول برده هستند. مالکان‌شان مزد آن‌ها را می‌گیرند.' },
        { en: 'The Constitution of 1787 allowed slavery. That is a hard truth.', es: 'La Constitución de 1787 permitía la esclavitud. Es una verdad dura.', fa: 'قانون اساسی ۱۷۸۷ برده‌داری را اجازه می‌داد. این یک حقیقت تلخ است.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     NW: the President's House (J over h, x 3-9, no door), its sign (2,6), a small home (R, door 13,3).
     NE: the Capitol. The Senate side is open ground at x 18-19 (y 1-3), the north wing D (x 20-25, court door 22,3),
     stone piles r (y 5), the south wing J over h (y 6-7). Capitol sign (19,8).
     Pennsylvania Avenue (:) at y 9, paths down to two bridges B (x 7 and x 24) over Tiber Creek (~, y 13-14).
     SW: the market (l paving, m stalls) and the print shop (Q, door 13,17), market sign (12,15).
     SE: two boarding houses (R door 20,17; Q door 26,17). */
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT',
    'T...................DDDDDD.T...T',
    'T..JJJJJJJ..RRR.....DDDDDD.....T',
    'T..JJJJJJJ..hdh.....DDdDDD.....T',
    'T..hhhhhhh.....................T',
    'T.....:.............rr..rr.....T',
    'T.x...:.....T.......JJJJJJ..T..T',
    'T.....:.............hhhhhh.....T',
    'T..T..:............x...........T',
    'T.::::::::::::::::::::::::::...T',
    'T......:.......:........:..T...T',
    'T......:.......:........:......T',
    'T......:................:......T',
    'T~~~~~~B~~~~~~~~~~~~~~~~B~~~~~~T',
    'T~~~~~~B~~~~~~~~~~~~~~~~B~~~~~~T',
    'T.llllllllllx..................T',
    'T.lmmllllmmlQQQ...RRRR...QQQQ..T',
    'T.llllllllllhdh...hhdh...hdhh..T',
    'T.llllllllll...................T',
    'T....T.........................T',
    'T..........T.........T.........T',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT'
  ],
  start: [15, 10],

  finds: [
    { clueAt: [28, 4], at: [28, 8], decor: 'coinold',
      clue: { en: 'From this note, walk 4 steps south, past the Capitol\'s south wing.', es: 'Desde esta nota, camina 4 pasos al sur, pasando el ala sur del Capitolio.', fa: 'از این یادداشت، ۴ قدم به جنوب برو، از کنار بخش جنوبی کاپیتول.' },
      text: { en: 'An old copper cent! The US Mint made big copper cents like this in 1803.', es: '¡Un viejo centavo de cobre! La Casa de Moneda de EE. UU. hacía centavos así en 1803.', fa: 'یک سکهٔ مسی کهنه! ضرابخانهٔ امریکا در سال ۱۸۰۳ چنین سکه‌های مسی بزرگ می‌ساخت.' } },
    { clueAt: [3, 19], at: [3, 15], decor: 'feather',
      clue: { en: 'From this note, walk 4 steps north, into the market.', es: 'Desde esta nota, camina 4 pasos al norte, hacia el mercado.', fa: 'از این یادداشت، ۴ قدم به شمال برو، داخل بازار.' },
      text: { en: 'A goose-feather pen! Clerks and judges wrote with pens like this.', es: '¡Una pluma de ganso! Los escribanos y los jueces escribían con plumas así.', fa: 'یک قلم پَر غاز! کاتبان و قاضی‌ها با چنین قلم‌هایی می‌نوشتند.' } }
  ],

  words: {
    'supreme court': { en: 'the highest court in the United States', es: 'el tribunal más alto de Estados Unidos', fa: 'بالاترین محکمه در امریکا' },
    'article iii': { en: 'the part of the Constitution about the courts', es: 'la parte de la Constitución sobre las cortes', fa: 'بخشی از قانون اساسی دربارهٔ محکمه‌ها' },
    'lower courts': { en: 'federal courts below the Supreme Court; Congress creates them', es: 'cortes federales debajo de la Corte Suprema; el Congreso las crea', fa: 'محکمه‌های فدرال پایین‌تر از ستره محکمه؛ کانگرس آن‌ها را می‌سازد' },
    capitol: { en: 'the building where Congress meets', es: 'el edificio donde se reúne el Congreso', fa: 'ساختمانی که کانگرس در آن جمع می‌شود' },
    commission: { en: 'an official paper that gives a person a government job', es: 'un papel oficial que le da a alguien un puesto del gobierno', fa: 'یک کاغذ رسمی که به کسی یک وظیفهٔ دولتی می‌دهد' },
    'justice of the peace': { en: 'a local judge for small cases', es: 'un juez local para casos pequeños', fa: 'یک قاضی محلی برای قضیه‌های کوچک' },
    'judiciary act': { en: 'the law of 1789 that set up the federal courts', es: 'la ley de 1789 que organizó las cortes federales', fa: 'قانون سال ۱۷۸۹ که محکمه‌های فدرال را ساخت' },
    'judicial review': { en: 'the power of courts to strike down a law or act that breaks the Constitution', es: 'el poder de las cortes de anular una ley o acto que va contra la Constitución', fa: 'قدرت محکمه‌ها برای باطل کردن قانون یا کاری که خلاف قانون اساسی است' },
    unconstitutional: { en: 'against the Constitution', es: 'contra la Constitución', fa: 'خلاف قانون اساسی' },
    void: { en: 'not a law any more; it does not count', es: 'ya no es ley; no vale', fa: 'دیگر قانون نیست؛ اعتبار ندارد' },
    nominate: { en: 'to name a person for a job', es: 'proponer a una persona para un puesto', fa: 'کسی را برای یک وظیفه معرفی کردن' },
    confirm: { en: 'to vote yes on a person the President named', es: 'votar sí por una persona que propuso el presidente', fa: 'به کسی که رئیس جمهور معرفی کرده رأی بله دادن' },
    'good behavior': { en: 'judges keep the job as long as they act rightly, often for life', es: 'los jueces siguen en el puesto mientras actúen bien, muchas veces de por vida', fa: 'قاضی‌ها تا وقتی درست رفتار کنند وظیفه را نگه می‌دارند، اکثراً تا آخر عمر' },
    'chief justice': { en: 'the head judge of the Supreme Court', es: 'el juez principal de la Corte Suprema', fa: 'قاضی اول و رئیس ستره محکمه' }
  },

  npcs: [
    {
      x: 10, y: 6,
      name: { en: 'Samuel', es: 'Samuel', fa: 'ساموئل' },
      role: { en: 'Law student', es: 'Estudiante de derecho', fa: 'شاگرد حقوق' },
      look: { skin: 0, hair: '#8a5a3a', shirt: '#2f5f9a', pants: '#3a3a3a', hat: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'I study law. Everyone in Washington talks about William Marbury.', es: 'Estudio derecho. Todos en Washington hablan de William Marbury.', fa: 'من حقوق می‌خوانم. همه در واشنگتن از ویلیام ماربری گپ می‌زنند.' },
        { en: 'In 1801, President Adams named many judges at the last minute: the midnight judges.', es: 'En 1801, el presidente Adams nombró muchos jueces al último momento: los jueces de medianoche.', fa: 'در سال ۱۸۰۱، رئیس جمهور ادامز در آخرین لحظه قاضی‌های زیادی تعیین کرد: قاضی‌های نیمه‌شب.' },
        { en: 'Marbury was named a [[justice of the peace|justice of the peace]]. His [[commission|commission]] never came.', es: 'Marbury fue nombrado [[justice of the peace|juez de paz]]. Su [[commission|nombramiento]] nunca llegó.', fa: 'ماربری [[justice of the peace|قاضی صلح]] تعیین شد. [[commission|فرمان تقرر]] او هرگز نرسید.' },
        { en: 'The new Secretary of State, James Madison, did not deliver it.', es: 'El nuevo secretario de Estado, James Madison, no lo entregó.', fa: 'وزیر خارجهٔ تازه، جیمز مدیسن، آن را تسلیم نکرد.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Who did not deliver William Marbury\'s commission?', es: '¿Quién no entregó el nombramiento de William Marbury?', fa: 'کی فرمان تقرر ویلیام ماربری را تسلیم نکرد؟' },
        choices: [
          { ok: true, t: { en: 'Secretary of State James Madison', es: 'El secretario de Estado James Madison', fa: 'وزیر خارجه جیمز مدیسن' },
            why: { en: 'Yes. Madison worked for the new President, Thomas Jefferson. He did not deliver it.', es: 'Sí. Madison trabajaba para el nuevo presidente, Thomas Jefferson. No lo entregó.', fa: 'بله. مدیسن برای رئیس جمهور تازه، توماس جفرسن، کار می‌کرد. او آن را تسلیم نکرد.' } },
          { t: { en: 'The Senate, after a no vote', es: 'El Senado, tras votar que no', fa: 'سنا، بعد از رأی نه' },
            why: { en: 'No. The Senate had voted yes on Marbury. The paper just never reached him.', es: 'No. El Senado había votado sí por Marbury. El papel nunca le llegó.', fa: 'نه. سنا به ماربری رأی بله داده بود. فقط کاغذ هرگز به او نرسید.' } },
          { t: { en: 'President Adams, who changed his mind', es: 'El presidente Adams, que cambió de idea', fa: 'رئیس جمهور ادامز، که نظرش را عوض کرد' },
            why: { en: 'No. Adams signed the commission. The new government did not deliver it.', es: 'No. Adams firmó el nombramiento. El nuevo gobierno no lo entregó.', fa: 'نه. ادامز فرمان تقرر را امضا کرد. حکومت تازه آن را تسلیم نکرد.' } }
        ]
      }
    },
    {
      x: 18, y: 5,
      name: { en: 'Josiah', es: 'Josías', fa: 'جوزایا' },
      role: { en: 'Court clerk', es: 'Secretario de la Corte', fa: 'کاتب محکمه' },
      look: { skin: 1, hair: '#d8d8d8', shirt: '#3a2a20', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'I am a clerk of the [[supreme court|Supreme Court]]. We meet in a small room.', es: 'Soy secretario de la [[supreme court|Corte Suprema]]. Nos reunimos en un cuarto pequeño.', fa: 'من کاتب [[supreme court|ستره محکمه]] هستم. ما در یک اتاق کوچک جمع می‌شویم.' },
        { en: 'The [[capitol|Capitol]] is not finished. Workers still cut stone all day.', es: 'El [[capitol|Capitolio]] no está terminado. Los obreros todavía cortan piedra todo el día.', fa: '[[capitol|کاپیتول]] تمام نشده. کارگران هنوز تمام روز سنگ می‌تراشند.' },
        { en: '[[article iii|Article III]] of the Constitution creates the Supreme Court.', es: 'El [[article iii|Artículo III]] de la Constitución crea la Corte Suprema.', fa: '[[article iii|مادهٔ سوم]] قانون اساسی ستره محکمه را می‌سازد.' },
        { en: 'Congress creates the [[lower courts|lower courts]] with its laws.', es: 'El Congreso crea las [[lower courts|cortes más bajas]] con sus leyes.', fa: 'کانگرس با قانون‌هایش [[lower courts|محکمه‌های پایین‌تر]] را می‌سازد.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Which part of the Constitution creates the Supreme Court?', es: '¿Qué parte de la Constitución crea la Corte Suprema?', fa: 'کدام بخش قانون اساسی ستره محکمه را می‌سازد؟' },
        choices: [
          { ok: true, t: { en: 'Article III', es: 'El Artículo III', fa: 'مادهٔ سوم' },
            why: { en: 'Yes! Article III creates the Supreme Court. Congress may create lower courts.', es: '¡Sí! El Artículo III crea la Corte Suprema. El Congreso puede crear cortes más bajas.', fa: 'بله! مادهٔ سوم ستره محکمه را می‌سازد. کانگرس می‌تواند محکمه‌های پایین‌تر بسازد.' } },
          { t: { en: 'Article I', es: 'El Artículo I', fa: 'مادهٔ اول' },
            why: { en: 'No. Article I sets up Congress, the lawmakers. Article III creates the Court.', es: 'No. El Artículo I organiza el Congreso, que hace las leyes. El Artículo III crea la Corte.', fa: 'نه. مادهٔ اول کانگرس، یعنی قانون‌سازان، را می‌سازد. مادهٔ سوم محکمه را می‌سازد.' } },
          { t: { en: 'Article II', es: 'El Artículo II', fa: 'مادهٔ دوم' },
            why: { en: 'No. Article II sets up the President. Article III creates the Court.', es: 'No. El Artículo II organiza la presidencia. El Artículo III crea la Corte.', fa: 'نه. مادهٔ دوم رئیس جمهور را می‌سازد. مادهٔ سوم محکمه را می‌سازد.' } }
        ]
      }
    },
    {
      x: 23, y: 18,
      name: { en: 'Hannah', es: 'Hannah', fa: 'هانا' },
      role: { en: 'Boarding-house keeper', es: 'Dueña de la pensión', fa: 'صاحب مهمانخانه' },
      look: { skin: 2, hair: '#3a2416', shirt: '#2f8f6f', pants: '#4a3a3a', hat: '#e8e0d0', style: 'bun' },
      lines: [
        { en: 'Welcome! I rent rooms to judges and lawmakers when they are in town.', es: '¡Bienvenido! Alquilo cuartos a jueces y legisladores cuando están en la ciudad.', fa: 'خوش آمدی! وقتی قاضی‌ها و قانون‌سازان در شهر هستند، به آن‌ها اتاق کرایه می‌دهم.' },
        { en: 'The President [[nominate|names]] federal judges. The Senate must [[confirm|confirm]] them.', es: 'El presidente [[nominate|propone]] a los jueces federales. El Senado debe [[confirm|confirmarlos]].', fa: 'رئیس جمهور قاضی‌های فدرال را [[nominate|معرفی می‌کند]]. سنا باید آن‌ها را [[confirm|تأیید کند]].' },
        { en: 'Then judges serve during [[good behavior|good behavior]]. That usually means for life.', es: 'Luego los jueces sirven mientras tengan [[good behavior|buena conducta]]. Casi siempre es de por vida.', fa: 'بعد قاضی‌ها تا وقت [[good behavior|رفتار نیک]] کار می‌کنند. یعنی معمولاً تا آخر عمر.' },
        { en: 'No one can fire them for a ruling. So they can judge without fear.', es: 'Nadie puede despedirlos por un fallo. Así pueden juzgar sin miedo.', fa: 'هیچ کس آن‌ها را به خاطر یک حکم برکنار نمی‌کند. پس بدون ترس قضاوت می‌کنند.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Why do federal judges serve during good behavior, often for life?', es: '¿Por qué los jueces federales sirven mientras tengan buena conducta, casi siempre de por vida?', fa: 'چرا قاضی‌های فدرال تا وقت رفتار نیک، اکثراً تا آخر عمر، کار می‌کنند؟' },
        choices: [
          { ok: true, t: { en: 'So they can rule without fear', es: 'Para que juzguen sin miedo', fa: 'تا بدون ترس حکم کنند' },
            why: { en: 'Yes. Judges who cannot lose their jobs can rule fairly, even when people are angry.', es: 'Sí. Los jueces que no pueden perder el puesto pueden juzgar con justicia, aunque la gente se enoje.', fa: 'بله. قاضی‌ای که وظیفه‌اش را از دست نمی‌دهد، عادلانه حکم می‌کند، حتی وقتی مردم قهر باشند.' } },
          { t: { en: 'So voters can elect them yearly', es: 'Para que los votantes los elijan cada año', fa: 'تا رأی‌دهندگان هر سال آن‌ها را انتخاب کنند' },
            why: { en: 'No. Voters do not elect federal judges. The President names them, and the Senate confirms them.', es: 'No. Los votantes no eligen a los jueces federales. El presidente los propone y el Senado los confirma.', fa: 'نه. رأی‌دهندگان قاضی فدرال را انتخاب نمی‌کنند. رئیس جمهور معرفی می‌کند و سنا تأیید می‌کند.' } },
          { t: { en: 'So they can write new laws', es: 'Para que escriban leyes nuevas', fa: 'تا قانون‌های تازه بنویسند' },
            why: { en: 'No. Congress writes laws. Judges decide cases and say what the law means.', es: 'No. El Congreso escribe las leyes. Los jueces deciden casos y dicen qué significa la ley.', fa: 'نه. کانگرس قانون می‌نویسد. قاضی‌ها قضیه‌ها را فیصله می‌کنند و معنی قانون را می‌گویند.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 2, y: 6, text: { en: 'THE PRESIDENT\'S HOUSE · President Thomas Jefferson lives here. The Capitol is east, up the avenue.', es: 'LA CASA DEL PRESIDENTE · Aquí vive el presidente Thomas Jefferson. El Capitolio está al este, por la avenida.', fa: 'خانهٔ رئیس جمهور · رئیس جمهور توماس جفرسن اینجا زندگی می‌کند. کاپیتول در شرق، بالای سرک است.' } },
    { x: 19, y: 8, text: { en: 'THE CAPITOL · NOT FINISHED · Senate and Supreme Court in the north wing. House in the south wing.', es: 'EL CAPITOLIO · SIN TERMINAR · Senado y Corte Suprema en el ala norte. Cámara en el ala sur.', fa: 'کاپیتول · تمام نشده · سنا و ستره محکمه در بخش شمالی. مجلس نمایندگان در بخش جنوبی.' } },
    { x: 12, y: 15, text: { en: 'MARKET · TIBER CREEK · Fresh fish, bread and news. Mind the mud on the bridge!', es: 'MERCADO · ARROYO TIBER · Pescado fresco, pan y noticias. ¡Cuidado con el lodo del puente!', fa: 'بازار · جوی تایبر · ماهی تازه، نان و خبر. مواظب گل روی پل باش!' } }
  ],

  /* the quest: Mr. Gale the printer (gold !) by the market, south-west -> Ben the messenger on the avenue, north-west
     -> chase the Paper Gust: take each torn page to the place where that power is (President's House, Senate side,
     the Court's door) -> the gust shows itself, hops, and is caught on Capitol Hill, south-east -> back to Mr. Gale */
  quest: {
    stat: 'pla',
    title: { en: 'The Paper Gust', es: 'La ráfaga de papel', fa: 'تندباد کاغذ' },
    giver: {
      x: 10, y: 19,
      name: { en: 'Mr. Gale', es: 'Señor Gale', fa: 'آقای گیل' },
      role: { en: 'Printer', es: 'Impresor', fa: 'چاپگر' },
      look: { skin: 3, hair: '#2a1a10', shirt: '#8a7a5a', pants: '#3a3a3a', hat: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'I print the Tiber Gazette. A gust of wind blew my pages away!', es: 'Imprimo la Gaceta del Tiber. ¡Una ráfaga de viento se llevó mis páginas!', fa: 'من روزنامهٔ تایبر را چاپ می‌کنم. یک تندباد صفحه‌هایم را برد!' },
        { en: 'My story about judges is in pieces. Ask Ben the messenger. He sees everything.', es: 'Mi noticia sobre los jueces está en pedazos. Pregúntale a Ben, el mensajero. Él lo ve todo.', fa: 'خبر من دربارهٔ قاضی‌ها تکه تکه شد. از بن پیام‌رسان بپرس. او همه چیز را می‌بیند.' }
      ],
      wait: { en: 'Ben the messenger waits on the avenue, near the President\'s House.', es: 'Ben, el mensajero, espera en la avenida, cerca de la Casa del Presidente.', fa: 'بن پیام‌رسان کنار سرک، نزدیک خانهٔ رئیس جمهور منتظر است.' },
      thanks: { en: 'My pages! Now readers learn who names judges and who decides cases.', es: '¡Mis páginas! Ahora los lectores sabrán quién nombra jueces y quién decide casos.', fa: 'صفحه‌هایم! حالا خواننده‌ها می‌دانند کی قاضی معرفی می‌کند و کی قضیه فیصله می‌کند.' }
    },
    contact: {
      x: 11, y: 8,
      name: { en: 'Ben', es: 'Ben', fa: 'بن' },
      role: { en: 'Messenger', es: 'Mensajero', fa: 'پیام‌رسان' },
      look: { skin: 4, hair: '#120c08', shirt: '#c0392b', pants: '#2a3a5a', style: 'short' },
      lines: [
        { en: 'I run letters all over town. I saw the pages fly by!', es: 'Llevo cartas por toda la ciudad. ¡Vi pasar volando las páginas!', fa: 'من در تمام شهر نامه می‌برم. دیدم صفحه‌ها پرواز کردند!' },
        { en: 'Read each page, then walk to the place where that job is done!', es: 'Lee cada página y luego camina al lugar donde se hace ese trabajo.', fa: 'هر صفحه را بخوان، بعد به جایی برو که آن کار انجام می‌شود!' }
      ]
    },
    action: {
      type: 'chase',
      at: [28, 12],
      hops: [[26, 5], [17, 12]],
      name: { en: 'The Paper Gust', es: 'La ráfaga de papel', fa: 'تندباد کاغذ' },
      taunt: { en: 'Whoosh! The Paper Gust spins: "Catch my pages if you know who holds each power!"', es: '¡Fiuuu! La ráfaga de papel gira: "¡Atrapa mis páginas si sabes quién tiene cada poder!"', fa: 'ووش! تندباد کاغذ می‌چرخد: «اگر می‌دانی هر قدرت دست کیست، صفحه‌هایم را بگیر!»' },
      clues: [
        { t: { en: 'Page 1 says: "He names every federal judge." Take it to where that leader lives.', es: 'La página 1 dice: "Él propone a cada juez federal." Llévala a donde vive ese líder.', fa: 'صفحهٔ ۱ می‌گوید: «او هر قاضی فدرال را معرفی می‌کند.» آن را به خانهٔ آن رهبر ببر.' },
          zones: [{ x: 3, y: 5, w: 7, h: 1 }],
          noBy: [
            { x: 18, y: 1, w: 2, h: 3, t: { en: 'This is the Senate side. Senators vote on judges, but they do not name them.', es: 'Este es el lado del Senado. Los senadores votan sobre los jueces, pero no los proponen.', fa: 'این طرف سنا است. سناتورها به قاضی‌ها رأی می‌دهند، اما آن‌ها را معرفی نمی‌کنند.' } },
            { x: 21, y: 4, w: 3, h: 1, t: { en: 'This is the Court\'s door. Judges do not pick new judges.', es: 'Esta es la puerta de la Corte. Los jueces no escogen nuevos jueces.', fa: 'این دروازهٔ محکمه است. قاضی‌ها قاضی تازه انتخاب نمی‌کنند.' } }
          ],
          found: { en: 'The President names federal judges. President Jefferson lives here.', es: 'El presidente propone a los jueces federales. Aquí vive el presidente Jefferson.', fa: 'رئیس جمهور قاضی‌های فدرال را معرفی می‌کند. رئیس جمهور جفرسن اینجا زندگی می‌کند.' } },
        { t: { en: 'Page 2 says: "They vote yes or no on each judge." Find where they meet.', es: 'La página 2 dice: "Votan sí o no por cada juez." Busca dónde se reúnen.', fa: 'صفحهٔ ۲ می‌گوید: «آن‌ها به هر قاضی رأی بله یا نه می‌دهند.» جای جلسهٔ آن‌ها را پیدا کن.' },
          zones: [{ x: 18, y: 1, w: 2, h: 3 }],
          noBy: [
            { x: 3, y: 5, w: 7, h: 1, t: { en: 'This is the President\'s House. The President names judges. Others vote on them.', es: 'Esta es la Casa del Presidente. El presidente propone jueces. Otros votan sobre ellos.', fa: 'این خانهٔ رئیس جمهور است. رئیس جمهور قاضی معرفی می‌کند. دیگران به آن‌ها رأی می‌دهند.' } },
            { x: 20, y: 8, w: 6, h: 1, t: { en: 'This is the House wing. The House does not vote on judges.', es: 'Esta es el ala de la Cámara. La Cámara no vota sobre los jueces.', fa: 'این بخش مجلس نمایندگان است. مجلس نمایندگان به قاضی‌ها رأی نمی‌دهد.' } },
            { x: 21, y: 4, w: 3, h: 1, t: { en: 'This is the Court\'s door. Judges do not vote on new judges.', es: 'Esta es la puerta de la Corte. Los jueces no votan sobre nuevos jueces.', fa: 'این دروازهٔ محکمه است. قاضی‌ها به قاضی‌های تازه رأی نمی‌دهند.' } }
          ],
          found: { en: 'The Senate confirms judges. It meets in the north wing of the Capitol.', es: 'El Senado confirma a los jueces. Se reúne en el ala norte del Capitolio.', fa: 'سنا قاضی‌ها را تأیید می‌کند. در بخش شمالی کاپیتول جمع می‌شود.' } },
        { t: { en: 'Page 3 says: "They decide cases under the Constitution." Find their small room.', es: 'La página 3 dice: "Deciden casos según la Constitución." Busca su cuarto pequeño.', fa: 'صفحهٔ ۳ می‌گوید: «آن‌ها قضیه‌ها را مطابق قانون اساسی فیصله می‌کنند.» اتاق کوچک‌شان را پیدا کن.' },
          zones: [{ x: 21, y: 4, w: 3, h: 1 }],
          noBy: [
            { x: 3, y: 5, w: 7, h: 1, t: { en: 'This is the President\'s House. The President does not decide court cases.', es: 'Esta es la Casa del Presidente. El presidente no decide casos de la corte.', fa: 'این خانهٔ رئیس جمهور است. رئیس جمهور قضیه‌های محکمه را فیصله نمی‌کند.' } },
            { x: 18, y: 1, w: 2, h: 3, t: { en: 'This is the Senate side. The Senate makes laws, not court rulings.', es: 'Este es el lado del Senado. El Senado hace leyes, no fallos de la corte.', fa: 'این طرف سنا است. سنا قانون می‌سازد، نه حکم محکمه.' } }
          ],
          found: { en: 'The Supreme Court decides cases. In 1803, it meets in this small room.', es: 'La Corte Suprema decide casos. En 1803, se reúne en este cuarto pequeño.', fa: 'ستره محکمه قضیه‌ها را فیصله می‌کند. در ۱۸۰۳، در همین اتاق کوچک جمع می‌شود.' } }
      ],
      win: { en: 'Caught! The Paper Gust falls flat. Every page is back in order!', es: '¡Atrapada! La ráfaga de papel cae al suelo. ¡Todas las páginas vuelven a su orden!', fa: 'گرفتمش! تندباد کاغذ به زمین می‌افتد. همهٔ صفحه‌ها دوباره به ترتیب است!' },
      item: { icon: '📰', name: { en: 'The printer\'s pages', es: 'Las páginas del impresor', fa: 'صفحه‌های چاپگر' } }
    }
  },

  scraps: [[1, 1], [30, 1], [30, 20]],
  smudges: [[5, 20], [27, 11]],

  challenge: {
    at: [16, 11],
    type: 'site', // in the world; the card version (claim) is the fallback
    // a flag for each answer: by the House wing, by the Court's door, in the market
    spots: [[27, 7], [24, 4], [6, 16]],
    stat: 'pla',
    title: { en: 'Plant the flag on the answer', es: 'Pon la bandera en la respuesta', fa: 'بیرق را روی جواب بگذار' },
    intro: { en: 'Can a court strike down a law that breaks the Constitution? Hear each flag, then choose and give two reasons.',
      es: '¿Puede una corte anular una ley que va contra la Constitución? Escucha cada bandera, elige y da dos razones.',
      fa: 'آیا محکمه می‌تواند قانونی را که خلاف قانون اساسی است باطل کند؟ به هر بیرق گوش بده، بعد انتخاب کن و دو دلیل بده.' },
    options: [
      { icon: '📜', name: { en: 'Courts must obey every law', es: 'Las cortes obedecen toda ley', fa: 'محکمه‌ها از هر قانون اطاعت کنند' },
        desc: { en: 'One side says: Congress was elected, so judges should never undo its laws.', es: 'Un lado dice: el Congreso fue elegido, así que los jueces nunca deben deshacer sus leyes.', fa: 'یک طرف می‌گوید: کانگرس انتخاب شده، پس قاضی‌ها هرگز نباید قانون‌هایش را باطل کنند.' },
        result: { en: 'Then Congress could pass a law that breaks the Constitution, and no one could stop it.', es: 'Entonces el Congreso podría pasar una ley contra la Constitución, y nadie podría frenarla.', fa: 'آن وقت کانگرس می‌توانست قانونی خلاف قانون اساسی بسازد، و هیچ کس جلویش را نمی‌گرفت.' } },
      { icon: '⚖️', name: { en: 'Courts can strike down a law against the Constitution', es: 'Las cortes pueden anular una ley contra la Constitución', fa: 'محکمه قانون خلاف قانون اساسی را باطل می‌کند' },
        desc: { en: 'The other side says: the Constitution is the highest law. A law against it is void.', es: 'El otro lado dice: la Constitución es la ley más alta. Una ley contra ella no vale.', fa: 'طرف دیگر می‌گوید: قانون اساسی بالاترین قانون است. قانون خلاف آن باطل است.' },
        result: { en: 'This is the real ruling! In Marbury v. Madison, 1803, the Court struck down part of a law.', es: '¡Este es el fallo real! En Marbury contra Madison, 1803, la Corte anuló parte de una ley.', fa: 'این حکم واقعی است! در قضیهٔ ماربری علیه مدیسن، ۱۸۰۳، محکمه بخشی از یک قانون را باطل کرد.' } },
      { icon: '🖋️', name: { en: 'The Court may write new laws', es: 'La Corte puede escribir leyes nuevas', fa: 'محکمه قانون تازه بنویسد' },
        desc: { en: 'Some people say judges should make any law they think is good.', es: 'Algunos dicen que los jueces deben hacer cualquier ley que crean buena.', fa: 'بعضی می‌گویند قاضی‌ها باید هر قانونی را که خوب می‌دانند بسازند.' },
        result: { en: 'No. Congress makes laws. Courts decide cases and say what the law means.', es: 'No. El Congreso hace las leyes. Las cortes deciden casos y dicen qué significa la ley.', fa: 'نه. کانگرس قانون می‌سازد. محکمه‌ها قضیه فیصله می‌کنند و معنی قانون را می‌گویند.' } }
    ],
    kinds: [
      { id: 'law', label: { en: 'What the Constitution says', es: 'Lo que dice la Constitución', fa: 'آنچه قانون اساسی می‌گوید' } },
      { id: 'case', label: { en: 'Proof from Marbury\'s case', es: 'Pruebas del caso de Marbury', fa: 'ثبوت از قضیهٔ ماربری' } }
    ],
    reasons: [
      { kind: 'law', fits: [1], t: { en: 'The Constitution is the supreme law of the land.', es: 'La Constitución es la ley suprema del país.', fa: 'قانون اساسی عالی‌ترین قانون کشور است.' },
        why: { en: 'Yes. Article VI says so. A law that breaks it cannot stand.', es: 'Sí. El Artículo VI lo dice. Una ley que va contra ella no puede valer.', fa: 'بله. مادهٔ ششم این را می‌گوید. قانونی که خلاف آن باشد پابرجا نمی‌ماند.' } },
      { kind: 'law', fits: [1], t: { en: 'Judges swear to support the Constitution.', es: 'Los jueces juran apoyar la Constitución.', fa: 'قاضی‌ها قسم می‌خورند از قانون اساسی حمایت کنند.' },
        why: { en: 'Right. So a judge cannot follow a law that goes against it.', es: 'Correcto. Por eso un juez no puede seguir una ley que va contra ella.', fa: 'درست. پس قاضی نمی‌تواند از قانونی که خلاف آن است پیروی کند.' } },
      { kind: 'law', fits: [], t: { en: 'The Constitution lets judges make new laws.', es: 'La Constitución deja que los jueces hagan leyes nuevas.', fa: 'قانون اساسی اجازه می‌دهد قاضی‌ها قانون تازه بسازند.' },
        why: { en: 'No. Article I gives the power to make laws to Congress.', es: 'No. El Artículo I le da al Congreso el poder de hacer leyes.', fa: 'نه. مادهٔ اول قدرت ساختن قانون را به کانگرس می‌دهد.' } },
      { kind: 'law', fits: [], t: { en: 'Congress can change the Constitution with a simple law.', es: 'El Congreso puede cambiar la Constitución con una ley simple.', fa: 'کانگرس می‌تواند با یک قانون ساده قانون اساسی را تغییر دهد.' },
        why: { en: 'No. Changing the Constitution takes an amendment. That is much harder.', es: 'No. Cambiar la Constitución necesita una enmienda. Eso es mucho más difícil.', fa: 'نه. تغییر قانون اساسی متمم لازم دارد. این خیلی سخت‌تر است.' } },
      { kind: 'case', fits: [1], t: { en: 'Part of the Judiciary Act gave the Court a power the Constitution did not.', es: 'Parte de la Ley Judicial le dio a la Corte un poder que la Constitución no daba.', fa: 'بخشی از قانون محاکم به محکمه قدرتی داد که قانون اساسی نداده بود.' },
        why: { en: 'Yes. It let Marbury go straight to the Supreme Court. That broke the Constitution, so it was void.', es: 'Sí. Dejaba a Marbury ir directo a la Corte Suprema. Eso iba contra la Constitución, así que no valía.', fa: 'بله. به ماربری اجازه داد مستقیم به ستره محکمه برود. این خلاف قانون اساسی بود، پس باطل شد.' } },
      { kind: 'case', fits: [1], t: { en: 'Marshall wrote: it is the job of courts to say what the law is.', es: 'Marshall escribió: el trabajo de las cortes es decir qué es la ley.', fa: 'مارشال نوشت: کار محکمه‌ها این است که بگویند قانون چیست.' },
        why: { en: 'Yes. So when a law and the Constitution clash, the court follows the Constitution.', es: 'Sí. Así que cuando una ley y la Constitución chocan, la corte sigue la Constitución.', fa: 'بله. پس وقتی قانون و قانون اساسی با هم ناسازگار باشند، محکمه از قانون اساسی پیروی می‌کند.' } },
      { kind: 'case', fits: [], t: { en: 'Marbury got his commission on time.', es: 'Marbury recibió su nombramiento a tiempo.', fa: 'ماربری فرمان تقررش را به وقت گرفت.' },
        why: { en: 'No. Madison never delivered it. That is why Marbury went to court.', es: 'No. Madison nunca lo entregó. Por eso Marbury fue a la corte.', fa: 'نه. مدیسن هرگز آن را تسلیم نکرد. به همین خاطر ماربری به محکمه رفت.' } },
      { kind: 'case', fits: [], t: { en: 'The Court ordered Madison to give Marbury the job.', es: 'La Corte le ordenó a Madison darle el puesto a Marbury.', fa: 'محکمه به مدیسن امر کرد وظیفه را به ماربری بدهد.' },
        why: { en: 'No. Marshall said Marbury had a right to the job, but the Court could not order it here.', es: 'No. Marshall dijo que Marbury tenía derecho al puesto, pero la Corte no podía ordenarlo en este caso.', fa: 'نه. مارشال گفت ماربری حق آن وظیفه را داشت، اما محکمه در این قضیه نمی‌توانست امر کند.' } }
    ],
    mismatch: { en: 'That reason does not back up the answer you picked.', es: 'Esa razón no apoya la respuesta que elegiste.', fa: 'این دلیل از جوابی که انتخاب کردی پشتیبانی نمی‌کند.' },
    success: { en: 'Yes! Courts can strike down a law that breaks the Constitution. That is judicial review.', es: '¡Sí! Las cortes pueden anular una ley que va contra la Constitución. Eso es la revisión judicial.', fa: 'بله! محکمه‌ها می‌توانند قانون خلاف قانون اساسی را باطل کنند. این بررسی قضایی است.' }
  },

  boss: {
    at: [29, 19],
    stat: 'pla',
    need: 3,
    name: { en: 'The Rubber-Stamp Grump', es: 'El Gruñón del Sello', fa: 'غرغروی مُهرزن' },
    appear: { en: 'The Rubber-Stamp Grump is hiding in the creek mist on Capitol Hill!', es: '¡El Gruñón del Sello se esconde en la neblina del arroyo, en la colina del Capitolio!', fa: 'غرغروی مُهرزن در مه جوی، روی تپهٔ کاپیتول پنهان است!' },
    taunt: { en: 'Stamp, stamp! Courts should say YES to every law, even bad ones!', es: '¡Sello, sello! ¡Las cortes deben decir SÍ a toda ley, hasta a las malas!', fa: 'مُهر، مُهر! محکمه‌ها باید به هر قانون بله بگویند، حتی قانون بد!' },
    win: { en: 'The mist lifts off the hill. Charter page 7.1 floats down into your hands!', es: 'La neblina se va de la colina. ¡La página 7.1 de la carta cae en tus manos!', fa: 'مه از روی تپه کنار می‌رود. صفحهٔ ۷.۱ منشور به دستت می‌افتد!' },
    questions: [
      { q: { en: 'Which article of the Constitution creates the Supreme Court?', es: '¿Qué artículo de la Constitución crea la Corte Suprema?', fa: 'کدام مادهٔ قانون اساسی ستره محکمه را می‌سازد؟' },
        choices: [
          { en: 'Article III', es: 'El Artículo III', fa: 'مادهٔ سوم' },
          { en: 'Article I', es: 'El Artículo I', fa: 'مادهٔ اول' },
          { en: 'Article II', es: 'El Artículo II', fa: 'مادهٔ دوم' },
          { en: 'Article VII', es: 'El Artículo VII', fa: 'مادهٔ هفتم' }],
        answer: 0,
        why: { en: 'Article III creates the Supreme Court. Article I is Congress, and Article II is the President.', es: 'El Artículo III crea la Corte Suprema. El Artículo I es el Congreso y el II es el presidente.', fa: 'مادهٔ سوم ستره محکمه را می‌سازد. مادهٔ اول کانگرس است و مادهٔ دوم رئیس جمهور.' } },
      { q: { en: 'Who creates the lower federal courts?', es: '¿Quién crea las cortes federales más bajas?', fa: 'کی محکمه‌های فدرال پایین‌تر را می‌سازد؟' },
        choices: [
          { en: 'Congress, by passing laws', es: 'El Congreso, con leyes', fa: 'کانگرس، با قانون' },
          { en: 'The President, by an order', es: 'El presidente, con una orden', fa: 'رئیس جمهور، با یک فرمان' },
          { en: 'The Chief Justice, alone', es: 'El presidente de la Corte, solo', fa: 'رئیس ستره محکمه، تنها' },
          { en: 'Each state governor', es: 'Cada gobernador de estado', fa: 'هر والی ایالت' }],
        answer: 0,
        why: { en: 'Article III lets Congress create lower courts. Congress made the first ones in the Judiciary Act of 1789.', es: 'El Artículo III deja al Congreso crear cortes más bajas. Hizo las primeras con la Ley Judicial de 1789.', fa: 'مادهٔ سوم به کانگرس اجازه می‌دهد محکمه‌های پایین‌تر بسازد. اولین‌ها را با قانون محاکم ۱۷۸۹ ساخت.' } },
      { q: { en: 'How does a person become a federal judge?', es: '¿Cómo llega una persona a ser juez federal?', fa: 'یک نفر چطور قاضی فدرال می‌شود؟' },
        choices: [
          { en: 'The President names, the Senate confirms', es: 'El presidente propone, el Senado confirma', fa: 'رئیس جمهور معرفی، سنا تأیید می‌کند' },
          { en: 'Voters elect the judge every four years', es: 'Los votantes lo eligen cada cuatro años', fa: 'رأی‌دهندگان هر چهار سال قاضی را انتخاب می‌کنند' },
          { en: 'The Chief Justice picks the judge alone', es: 'El presidente de la Corte lo escoge solo', fa: 'رئیس ستره محکمه تنها قاضی را می‌گزیند' },
          { en: 'The House of Representatives votes on it', es: 'La Cámara de Representantes lo vota', fa: 'مجلس نمایندگان به آن رأی می‌دهد' }],
        answer: 0,
        why: { en: 'The President nominates federal judges. Then the Senate votes to confirm them.', es: 'El presidente propone a los jueces federales. Luego el Senado vota para confirmarlos.', fa: 'رئیس جمهور قاضی‌های فدرال را معرفی می‌کند. بعد سنا برای تأیید آن‌ها رأی می‌دهد.' } },
      { q: { en: 'How long do federal judges serve?', es: '¿Cuánto tiempo sirven los jueces federales?', fa: 'قاضی‌های فدرال چقدر وقت کار می‌کنند؟' },
        choices: [
          { en: 'For life, during good behavior', es: 'De por vida, con buena conducta', fa: 'تا آخر عمر، با رفتار نیک' },
          { en: 'Two years, like a House member', es: 'Dos años, como un representante', fa: 'دو سال، مثل عضو مجلس نمایندگان' },
          { en: 'Four years, like the President', es: 'Cuatro años, como el presidente', fa: 'چهار سال، مثل رئیس جمهور' },
          { en: 'Six years, like a senator', es: 'Seis años, como un senador', fa: 'شش سال، مثل یک سناتور' }],
        answer: 0,
        why: { en: 'Judges serve during good behavior, often for life. So they can rule without fear.', es: 'Los jueces sirven mientras tengan buena conducta, casi siempre de por vida. Así juzgan sin miedo.', fa: 'قاضی‌ها تا وقت رفتار نیک، اکثراً تا آخر عمر، کار می‌کنند. پس بدون ترس حکم می‌کنند.' } },
      { q: { en: 'In Marbury v. Madison, what did William Marbury want?', es: 'En Marbury contra Madison, ¿qué quería William Marbury?', fa: 'در قضیهٔ ماربری علیه مدیسن، ویلیام ماربری چه می‌خواست؟' },
        choices: [
          { en: 'His commission as justice of the peace', es: 'Su nombramiento como juez de paz', fa: 'فرمان تقررش به حیث قاضی صلح' },
          { en: 'A seat in the United States Senate', es: 'Un asiento en el Senado del país', fa: 'یک چوکی در سنای امریکا' },
          { en: 'Payment for land the city took', es: 'Pago por tierra que tomó la ciudad', fa: 'پول زمینی که شهر گرفت' },
          { en: 'The job of Chief Justice of the US', es: 'El puesto de presidente de la Corte', fa: 'وظیفهٔ رئیس ستره محکمه' }],
        answer: 0,
        why: { en: 'Marbury was named a justice of the peace. He asked the Court to order delivery of his commission.', es: 'Marbury fue nombrado juez de paz. Pidió a la Corte ordenar que le entregaran su nombramiento.', fa: 'ماربری قاضی صلح تعیین شده بود. از محکمه خواست امر کند فرمان تقررش تسلیم شود.' } },
      { q: { en: 'What did John Marshall say about part of the Judiciary Act of 1789?', es: '¿Qué dijo John Marshall sobre una parte de la Ley Judicial de 1789?', fa: 'جان مارشال دربارهٔ بخشی از قانون محاکم ۱۷۸۹ چه گفت؟' },
        choices: [
          { en: 'It broke the Constitution, so it was void', es: 'Iba contra la Constitución, así que no valía', fa: 'خلاف قانون اساسی بود، پس باطل شد' },
          { en: 'It was fine, so everyone must obey it', es: 'Estaba bien, así que todos debían obedecerla', fa: 'درست بود، پس همه باید اطاعت کنند' },
          { en: 'Congress had to vote on it once more', es: 'El Congreso debía votarla otra vez', fa: 'کانگرس باید یک بار دیگر رأی می‌داد' },
          { en: 'The President could ignore it if he liked', es: 'El presidente podía ignorarla si quería', fa: 'رئیس جمهور اگر می‌خواست آن را نادیده می‌گرفت' }],
        answer: 0,
        why: { en: 'Marshall said that part went against the Constitution. So it was [[void|void]], not a law any more.', es: 'Marshall dijo que esa parte iba contra la Constitución. Así que era [[void|nula]], ya no era ley.', fa: 'مارشال گفت آن بخش خلاف قانون اساسی بود. پس [[void|باطل]] شد و دیگر قانون نبود.' } },
      { q: { en: 'What is judicial review?', es: '¿Qué es la revisión judicial?', fa: 'بررسی قضایی چیست؟' },
        choices: [
          { en: 'Courts checking if laws fit the Constitution', es: 'Las cortes revisan si las leyes siguen la Constitución', fa: 'محکمه‌ها می‌بینند قانون با قانون اساسی جور است یا نه' },
          { en: 'The President\'s power to veto a law from Congress', es: 'El poder del presidente de vetar una ley del Congreso', fa: 'قدرت رئیس جمهور برای رد کردن قانون کانگرس' },
          { en: 'The Senate\'s power to approve new judges', es: 'El poder del Senado de aprobar jueces nuevos', fa: 'قدرت سنا برای تأیید قاضی‌های تازه' },
          { en: 'Voters choosing judges in each election', es: 'Los votantes eligen jueces en cada elección', fa: 'رأی‌دهندگان در هر انتخابات قاضی انتخاب می‌کنند' }],
        answer: 0,
        why: { en: '[[judicial review|Judicial review]] is the power of courts to strike down laws that break the Constitution.', es: 'La [[judicial review|revisión judicial]] es el poder de las cortes de anular leyes contra la Constitución.', fa: '[[judicial review|بررسی قضایی]] قدرت محکمه‌ها برای باطل کردن قانون‌های خلاف قانون اساسی است.' } },
      { q: { en: 'With judicial review, the courts can check which branches?', es: 'Con la revisión judicial, ¿a qué ramas pueden controlar las cortes?', fa: 'با بررسی قضایی، محکمه‌ها کدام قوه‌ها را کنترول می‌کنند؟' },
        choices: [
          { en: 'Congress and the President', es: 'El Congreso y el presidente', fa: 'کانگرس و رئیس جمهور' },
          { en: 'Only the state governors', es: 'Solo los gobernadores', fa: 'فقط والیان ایالت‌ها' },
          { en: 'Only the voters and the press', es: 'Solo los votantes y la prensa', fa: 'فقط رأی‌دهندگان و مطبوعات' },
          { en: 'No one; it is only advice', es: 'A nadie; es solo un consejo', fa: 'هیچ کس؛ فقط یک مشوره است' }],
        answer: 0,
        why: { en: 'Courts can strike down laws of Congress and acts of the President that break the Constitution.', es: 'Las cortes pueden anular leyes del Congreso y actos del presidente que van contra la Constitución.', fa: 'محکمه‌ها می‌توانند قانون کانگرس و کار رئیس جمهور را که خلاف قانون اساسی باشد باطل کنند.' } }
    ]
  },

  learned: [
    { en: '[[article iii|Article III]] creates the Supreme Court. Congress creates the [[lower courts|lower courts]].', es: 'El [[article iii|Artículo III]] crea la Corte Suprema. El Congreso crea las [[lower courts|cortes más bajas]].', fa: '[[article iii|مادهٔ سوم]] ستره محکمه را می‌سازد. کانگرس [[lower courts|محکمه‌های پایین‌تر]] را می‌سازد.' },
    { en: 'The President names federal judges, the Senate confirms them, and they serve during [[good behavior|good behavior]].', es: 'El presidente propone a los jueces federales, el Senado los confirma y sirven con [[good behavior|buena conducta]].', fa: 'رئیس جمهور قاضی‌های فدرال را معرفی می‌کند، سنا تأیید می‌کند، و آن‌ها تا وقت [[good behavior|رفتار نیک]] کار می‌کنند.' },
    { en: 'Marbury v. Madison (1803) set up [[judicial review|judicial review]]: courts can strike down unconstitutional laws.', es: 'Marbury contra Madison (1803) creó la [[judicial review|revisión judicial]]: las cortes pueden anular leyes inconstitucionales.', fa: 'قضیهٔ ماربری علیه مدیسن (۱۸۰۳) [[judicial review|بررسی قضایی]] را بنا کرد: محکمه‌ها قانون خلاف قانون اساسی را باطل می‌کنند.' }
  ],
  reflect: {
    q: { en: 'Think of a rule at school or home that seemed unfair. Who could check it, and how?', es: 'Piensa en una regla de la escuela o la casa que te pareció injusta. ¿Quién podría revisarla y cómo?', fa: 'به یک قانون در مکتب یا خانه فکر کن که ناعادلانه به نظر می‌رسید. کی می‌تواند آن را بررسی کند، و چطور؟' },
    starter: { en: 'A rule I would ask someone to check is', es: 'Una regla que pediría revisar es', fa: 'قانونی که می‌خواهم کسی بررسی کند این است:' }
  }
};
