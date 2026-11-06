/* TIMEWALKER · Episode 6.2 · The Russian Revolution (WHII)
   Petrograd (today St. Petersburg), late 1917, after the October Revolution.
   North of the Neva River: the Vyborg side, with workers' houses, a cloth mill (X) and the Finland Station (J, railway).
   The Neva (rows 11-12) has two bridges (B). South of it: the Winter Palace (Q over h) and Palace Square (l),
   and Nevsky Prospect (row 17) with the bakery, a bread line and market stalls.
   Many points of view: a mill worker, a peasant soldier, a teacher who fears for free speech, a Jewish seamstress. */
window.EPISODE = {
  id: '6.2',
  realm: 6,
  sol: 'WHII',
  title: { en: 'The Russian Revolution', es: 'La Revolución rusa', fa: 'انقلاب روسیه' },
  place: { en: 'Petrograd, Russia, 1917', es: 'Petrogrado, Rusia, 1917', fa: 'پتروگراد، روسیه، ۱۹۱۷' },
  intro: [
    { en: 'The Grump blurred the [[russian revolution|Russian Revolution]] page. Its story is all mixed up.',
      es: 'El Gruñón borró la página de la [[russian revolution|Revolución rusa]]. Su historia está toda revuelta.',
      fa: 'غرغرو صفحهٔ [[russian revolution|انقلاب روسیه]] را تار کرد. داستانش کاملاً درهم شده است.' },
    { en: 'Talk to the 3 people here, then fix the time stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del tiempo.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ زمان را درست کن.' }
  ],
  /* cut scenes: Petrograd on the world map, 1917 on the timeline */
  scenes: {
    at: [30.3, 59.9],
    year: 1917,
    start: [
      { en: 'Russia was a huge empire. A [[tsar|tsar]] ruled it with total power.',
        es: 'Rusia era un imperio enorme. Un [[tsar|zar]] lo gobernaba con todo el poder.',
        fa: 'روسیه یک امپراتوری بسیار بزرگ بود. یک [[tsar|تزار]] با قدرت کامل بر آن حکومت می‌کرد.' },
      { en: 'In World War I, millions of Russian soldiers died. Food ran short.',
        es: 'En la Primera Guerra Mundial murieron millones de soldados rusos. Faltaba comida.',
        fa: 'در جنگ جهانی اول، میلیون‌ها سرباز روس کشته شدند. غذا کم شد.' },
      { en: 'In 1917, the people of Petrograd rose up. Russia changed forever.',
        es: 'En 1917, el pueblo de Petrogrado se levantó. Rusia cambió para siempre.',
        fa: 'در ۱۹۱۷، مردم پتروگراد قیام کردند. روسیه برای همیشه تغییر کرد.' }
    ],
    page: { en: 'In 1922, the Bolsheviks formed the Soviet Union, the first communist country.',
      es: 'En 1922, los bolcheviques formaron la Unión Soviética, el primer país comunista.',
      fa: 'در ۱۹۲۲، بلشویک‌ها اتحاد شوروی را ساختند، اولین کشور کمونیستی.' },
    guess: {
      q: { en: 'Russia was losing the war, and bread was scarce. Were people happy with the tsar?', es: 'Rusia perdía la guerra y faltaba el pan. ¿La gente estaba contenta con el zar?', fa: 'روسیه در جنگ می‌باخت و نان کم بود. آیا مردم از تزار راضی بودند؟' },
      choices: [
        { t: { en: '😠 No, very angry', es: '😠 No, muy enojados', fa: '😠 نه، خیلی خشمگین' }, ok: true },
        { t: { en: '😊 Yes, very happy', es: '😊 Sí, muy contentos', fa: '😊 بله، خیلی راضی' } }
      ],
      why: { en: 'War deaths, hunger and low pay made many Russians angry with the tsar.', es: 'Las muertes en la guerra, el hambre y los sueldos bajos enojaron a muchos rusos con el zar.', fa: 'کشته‌های جنگ، گرسنگی و مزد کم بسیاری از روس‌ها را از تزار خشمگین ساخت.' }
    },
    next: {
      q: { en: 'Next: the Great Depression. In 1929, the US stock market crashed. Who did it hurt?', es: 'Ahora: la Gran Depresión. En 1929 se cayó la bolsa de Estados Unidos. ¿A quién afectó?', fa: 'بعدی: رکود بزرگ. در ۱۹۲۹ بازار سهام امریکا سقوط کرد. به چه کسانی زیان رساند؟' },
      choices: [
        { t: { en: '🌍 The whole world', es: '🌍 A todo el mundo', fa: '🌍 همهٔ جهان' }, ok: true },
        { t: { en: '🏦 Only the US', es: '🏦 Solo a Estados Unidos', fa: '🏦 فقط امریکا' } }
      ],
      why: { en: 'Banks, trade and jobs were linked. The crash hurt countries all over the world.', es: 'Los bancos, el comercio y los trabajos estaban conectados. La caída dañó a países de todo el mundo.', fa: 'بانک‌ها، تجارت و کارها به هم وصل بودند. این سقوط به کشورهای سراسر جهان زیان رساند.' }
    }
  },
  /* houses: who lives behind each door */
  houses: [
    { at: [3, 2], name: { en: 'Masha Ivanova', es: 'Masha Ivánova', fa: 'ماشا ایوانووا' },
      look: { skin: 1, hair: '#7a5a3a', shirt: '#6a4a3a', pants: '#3a2a2a', style: 'long' },
      lines: [
        { en: 'Six of us live in this one small room near the mill.', es: 'Seis de nosotros vivimos en este cuarto pequeño cerca de la fábrica.', fa: 'شش نفر ما در همین یک اتاق کوچک نزدیک فابریکه زندگی می‌کنیم.' },
        { en: 'My children ask for bread at night. Some nights I have none.', es: 'Mis hijos piden pan por la noche. Algunas noches no tengo.', fa: 'اطفالم شب‌ها نان می‌خواهند. بعضی شب‌ها هیچ ندارم.' }
      ] },
    { at: [8, 2], name: { en: 'Old Semyon', es: 'El viejo Semión', fa: 'سمیون پیر' },
      look: { skin: 2, hair: '#d8d8d8', shirt: '#3a3a4a', pants: '#2a2a2a', style: 'short', hat: '#2a2a2a' },
      lines: [
        { en: 'I joined the [[soviet|soviet]], a council of workers and soldiers.', es: 'Me uní al [[soviet|sóviet]], un consejo de obreros y soldados.', fa: 'من به [[soviet|شورا]] پیوستم، یک مجلس کارگران و سربازان.' },
        { en: 'All year, workers met at night to argue and to vote.', es: 'Todo el año, los obreros se reunían de noche para discutir y votar.', fa: 'تمام سال، کارگران شب‌ها جمع می‌شدند تا بحث کنند و رأی بدهند.' }
      ] },
    { at: [19, 15], name: { en: 'Marfa', es: 'Marfa', fa: 'مارفا' },
      look: { skin: 1, hair: '#a8a8a8', shirt: '#f2f2f2', pants: '#5a3a2a', style: 'bun' },
      lines: [
        { en: 'I am the baker. Flour comes on slow trains, so some days I bake nothing.', es: 'Soy la panadera. La harina llega en trenes lentos, y algunos días no horneo nada.', fa: 'من نانوا هستم. آرد با قطارهای آهسته می‌آید، پس بعضی روزها هیچ نمی‌پزم.' },
        { en: 'People wait in line all night in the cold, just for bread.', es: 'La gente espera en fila toda la noche en el frío, solo por pan.', fa: 'مردم تمام شب در سرما در قطار می‌ایستند، فقط برای نان.' }
      ] },
    { at: [26, 15], name: { en: 'Leah', es: 'Lea', fa: 'لیا' },
      look: { skin: 1, hair: '#2a1a10', shirt: '#4a2a5a', pants: '#2a2a3a', style: 'long' },
      lines: [
        { en: 'I am a Jewish seamstress. The tsar had many unfair laws for Jews.', es: 'Soy una costurera judía. El zar tenía muchas leyes injustas contra los judíos.', fa: 'من یک خیاط یهودی هستم. تزار قانون‌های ناعادلانهٔ زیادی برای یهودیان داشت.' },
        { en: 'In March 1917, the new government ended those laws.', es: 'En marzo de 1917, el nuevo gobierno acabó con esas leyes.', fa: 'در مارچ ۱۹۱۷، حکومت تازه آن قانون‌ها را لغو کرد.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     NW (x 0-15, y 0-10): the Vyborg side. Workers' houses (R over h), the cloth mill (X), dirt lanes (:).
     NE (x 16-31, y 0-10): the Finland Station (J), its platform (l) and the railway (row 3).
     Rows 11-12: the Neva River (~) with two bridges (B) at x 6 and x 25.
     SW (x 0-15, y 13-21): the Winter Palace (Q over h) and Palace Square (l).
     SE (x 16-31, y 13-21): Nevsky Prospect (row 17), the bakery and Leah's house, market stalls (m). */
  map: [
    'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
    'W.RRR..RRR..XXXW..JJJJJJ.......W',
    'W.hdh..hdh..XXXW..JJJJJJ.......W',
    'W..:....:...XXXW..llllll-------W',
    'W.:::::::::::::::::::::::......W',
    'W.:.......,....W...............W',
    'W.:.......x....W...x...........W',
    'W.:............W..........,....W',
    'W.:............................W',
    'W.:...:........W.........:.....W',
    'W.....:........W.........:.....W',
    '~~~~~~B~~~~~~~~~~~~~~~~~~B~~~~~~',
    '~~~~~~B~~~~~~~~~~~~~~~~~~B~~~~~~',
    'W.....:..........:.......:.....W',
    'W.QQQQQQQQQ.......RRR....RRR...W',
    'W.hhhhhhhhh.......hdh....hdh...W',
    'W.................:......:.....W',
    'W..lllllllll....lllllllllllllllW',
    'W..llllxllll...................W',
    'W..lllllllll......mmm...mmm..,.W',
    'W..............................W',
    'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW'
  ],
  start: [4, 8],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [1, 13], at: [1, 19], decor: 'coinold',
      clue: { en: 'From this note, walk 6 steps south, along the palace wall.', es: 'Desde esta nota, camina 6 pasos al sur, junto al muro del palacio.', fa: 'از این یادداشت، ۶ قدم به جنوب برو، کنار دیوار قصر.' },
      text: { en: 'A ruble coin with the tsar\'s face. In the war, prices in Petrograd rose many times over.', es: 'Un rublo con la cara del zar. En la guerra, los precios en Petrogrado subieron muchísimo.', fa: 'یک سکهٔ روبل با تصویر تزار. در جنگ، قیمت‌ها در پتروگراد چند برابر شد.' } },
    { clueAt: [30, 9], at: [30, 5], decor: 'feather',
      clue: { en: 'From this note, walk 4 steps north, toward the railway.', es: 'Desde esta nota, camina 4 pasos al norte, hacia el ferrocarril.', fa: 'از این یادداشت، ۴ قدم به شمال برو، به طرف خط آهن.' },
      text: { en: 'An old pen. Russia used an old calendar. Its "February" revolution was in March on ours.', es: 'Una pluma vieja. Rusia usaba un calendario antiguo. Su revolución de "febrero" fue en marzo en el nuestro.', fa: 'یک قلم کهنه. روسیه تقویم کهنه داشت. انقلاب «فبروری» آن‌ها در تقویم ما در مارچ بود.' } }
  ],

  words: {
    'russian revolution': { en: 'the events of 1917, when Russians ended the tsar\'s rule and the Bolsheviks took power', es: 'los hechos de 1917, cuando los rusos acabaron con el zar y los bolcheviques tomaron el poder', fa: 'رویدادهای ۱۹۱۷، وقتی روس‌ها به حکومت تزار پایان دادند و بلشویک‌ها قدرت را گرفتند' },
    tsar: { en: 'the emperor of Russia, who ruled with total power', es: 'el emperador de Rusia, que gobernaba con todo el poder', fa: 'امپراتور روسیه که با قدرت کامل حکومت می‌کرد' },
    strike: { en: 'when workers stop working together to demand better pay or rights', es: 'cuando los obreros dejan de trabajar juntos para pedir mejor paga o derechos', fa: 'وقتی کارگران با هم کار را بس می‌کنند تا مزد یا حق بهتر بخواهند' },
    soviet: { en: 'a council of workers and soldiers (a Russian word)', es: 'un consejo de obreros y soldados (palabra rusa)', fa: 'یک مجلس کارگران و سربازان (یک کلمهٔ روسی)' },
    bolshevik: { en: 'a member of Lenin\'s party, which took power in October 1917', es: 'un miembro del partido de Lenin, que tomó el poder en octubre de 1917', fa: 'عضو حزب لنین که در اکتوبر ۱۹۱۷ قدرت را گرفت' },
    communism: { en: 'the idea that workers should own factories and land together, with no rich owners', es: 'la idea de que los obreros deben ser dueños juntos de fábricas y tierras, sin patrones ricos', fa: 'این فکر که کارگران باید با هم صاحب فابریکه‌ها و زمین باشند، بدون مالکان ثروتمند' },
    peasant: { en: 'a poor farmer who works the land, often for a landlord', es: 'un campesino pobre que trabaja la tierra, muchas veces para un terrateniente', fa: 'دهقان فقیری که روی زمین کار می‌کند، اکثراً برای یک ملاک' },
    'primary source': { en: 'something made by people who lived at that time, like a diary or a letter', es: 'algo hecho por personas de esa época, como un diario o una carta', fa: 'چیزی که مردم همان زمان ساخته‌اند، مثل یک یادداشت روزانه یا یک نامه' },
    'civil war': { en: 'a war between groups of people in the same country', es: 'una guerra entre grupos de personas del mismo país', fa: 'جنگ میان گروه‌های مردم در یک کشور' }
  },

  npcs: [
    {
      x: 11, y: 5,
      name: { en: 'Anya', es: 'Ania', fa: 'آنیا' },
      role: { en: 'Cloth mill worker', es: 'Obrera textil', fa: 'کارگر فابریکهٔ تکه' },
      look: { skin: 1, hair: '#c8a060', shirt: '#8a3a3a', pants: '#3a3a3a', style: 'long' },
      lines: [
        { en: 'I work 11 hours a day in the cloth mill. The pay is very low.', es: 'Trabajo 11 horas al día en la fábrica de tela. La paga es muy baja.', fa: 'من روزی ۱۱ ساعت در فابریکهٔ تکه کار می‌کنم. مزد بسیار کم است.' },
        { en: 'In February, we women waited hours in bread lines. Then we marched.', es: 'En febrero, las mujeres esperamos horas en las filas del pan. Luego marchamos.', fa: 'در فبروری، ما زنان ساعت‌ها در قطار نان ایستادیم. بعد راهپیمایی کردیم.' },
        { en: 'Workers went on [[strike|strike]]. Soldiers joined us. The [[tsar|tsar]] gave up his throne.', es: 'Los obreros hicieron [[strike|huelga]]. Los soldados se unieron. El [[tsar|zar]] dejó el trono.', fa: 'کارگران [[strike|اعتصاب]] کردند. سربازان با ما یکجا شدند. [[tsar|تزار]] از تخت کنار رفت.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'What caused the protests in Petrograd in February 1917?', es: '¿Qué causó las protestas en Petrogrado en febrero de 1917?', fa: 'چه چیزی باعث مظاهره‌ها در پتروگراد در فبروری ۱۹۱۷ شد؟' },
        choices: [
          { ok: true, t: { en: 'Hunger, low pay and a war going badly', es: 'El hambre, la paga baja y una guerra que iba mal', fa: 'گرسنگی، مزد کم و جنگی که خراب پیش می‌رفت' },
            why: { en: 'Yes. People were hungry and tired of the war. Women\'s bread protests grew into a revolution.', es: 'Sí. La gente tenía hambre y estaba cansada de la guerra. Las protestas por el pan se volvieron revolución.', fa: 'بله. مردم گرسنه و از جنگ خسته بودند. مظاهرهٔ زنان برای نان به انقلاب تبدیل شد.' } },
          { t: { en: 'A new law that made all the bread free', es: 'Una ley nueva que hacía gratis todo el pan', fa: 'قانون تازه‌ای که همهٔ نان را مفت ساخت' },
            why: { en: 'Bread was not free. It was scarce and costly, and that made people angry.', es: 'El pan no era gratis. Era escaso y caro, y eso enojó a la gente.', fa: 'نان مفت نبود. کم و گران بود و همین مردم را خشمگین کرد.' } },
          { t: { en: 'A big flood of the Neva River in spring', es: 'Una gran inundación del río Nevá en primavera', fa: 'یک سیلاب بزرگ دریای نیوا در بهار' },
            why: { en: 'There was no great flood. Hunger and the war pushed people into the streets.', es: 'No hubo una gran inundación. El hambre y la guerra sacaron a la gente a la calle.', fa: 'سیلاب بزرگی نبود. گرسنگی و جنگ مردم را به سرک‌ها کشاند.' } }
        ]
      }
    },
    {
      x: 21, y: 5,
      name: { en: 'Grigori', es: 'Grigori', fa: 'گریگوری' },
      role: { en: 'Peasant soldier', es: 'Soldado campesino', fa: 'سرباز دهقان' },
      look: { skin: 2, hair: '#5a3a20', shirt: '#6a6a4a', pants: '#4a4a3a', style: 'short', hat: '#4a4a3a' },
      lines: [
        { en: 'I am a [[peasant|peasant]]. In 1914, the army took me to fight Germany.', es: 'Soy [[peasant|campesino]]. En 1914, el ejército me llevó a luchar contra Alemania.', fa: 'من [[peasant|دهقان]] هستم. در ۱۹۱۴، لشکر مرا برای جنگ با آلمان برد.' },
        { en: 'Millions of Russian soldiers died or were hurt. We had too few boots and guns.', es: 'Millones de soldados rusos murieron o fueron heridos. Teníamos pocas botas y pocos fusiles.', fa: 'میلیون‌ها سرباز روس کشته یا زخمی شدند. موزه و تفنگ کم داشتیم.' },
        { en: 'Lenin promised "Peace, Land and Bread." Landlords own most good land.', es: 'Lenin prometió "Paz, tierra y pan". Los terratenientes tienen casi toda la buena tierra.', fa: 'لنین وعده داد: «صلح، زمین و نان.» ملاکان بیشتر زمین‌های خوب را دارند.' },
        { en: 'Now his [[bolshevik|Bolsheviks]] rule. I just want to go home and farm.', es: 'Ahora gobiernan sus [[bolshevik|bolcheviques]]. Yo solo quiero volver a casa a sembrar.', fa: 'حالا [[bolshevik|بلشویک‌های]] او حکومت می‌کنند. من فقط می‌خواهم به خانه بروم و کشت کنم.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Why did many peasant soldiers like the Bolsheviks in 1917?', es: '¿Por qué a muchos soldados campesinos les gustaban los bolcheviques en 1917?', fa: 'چرا بسیاری از سربازان دهقان در ۱۹۱۷ بلشویک‌ها را دوست داشتند؟' },
        choices: [
          { ok: true, t: { en: 'They promised peace and land for peasants', es: 'Prometían paz y tierra para los campesinos', fa: 'به دهقانان وعدهٔ صلح و زمین دادند' },
            why: { en: 'Yes. Peasant soldiers were tired of war and wanted land of their own.', es: 'Sí. Los soldados campesinos estaban cansados de la guerra y querían tierra propia.', fa: 'بله. سربازان دهقان از جنگ خسته بودند و زمین خودشان را می‌خواستند.' } },
          { t: { en: 'They promised to fight Germany for years', es: 'Prometían luchar contra Alemania por años', fa: 'وعده دادند سال‌ها با آلمان بجنگند' },
            why: { en: 'It was the other way. The Bolsheviks promised to end the war.', es: 'Fue al revés. Los bolcheviques prometían terminar la guerra.', fa: 'برعکس بود. بلشویک‌ها وعده دادند جنگ را تمام کنند.' } },
          { t: { en: 'They promised to bring back the old tsar', es: 'Prometían traer de vuelta al viejo zar', fa: 'وعده دادند تزار کهنه را برگردانند' },
            why: { en: 'The Bolsheviks were against the tsar. They wanted a new kind of country.', es: 'Los bolcheviques estaban contra el zar. Querían un país de otro tipo.', fa: 'بلشویک‌ها ضد تزار بودند. یک نوع کشور تازه می‌خواستند.' } }
        ]
      }
    },
    {
      x: 8, y: 16,
      name: { en: 'Olga Petrovna', es: 'Olga Petrovna', fa: 'اولگا پتروونا' },
      role: { en: 'Teacher', es: 'Maestra', fa: 'معلم' },
      look: { skin: 1, hair: '#3a2a1a', shirt: '#2a4a5a', pants: '#2a2a2a', style: 'bun' },
      lines: [
        { en: 'In October, the [[bolshevik|Bolsheviks]] took power here, at the Winter Palace.', es: 'En octubre, los [[bolshevik|bolcheviques]] tomaron el poder aquí, en el Palacio de Invierno.', fa: 'در اکتوبر، [[bolshevik|بلشویک‌ها]] اینجا، در قصر زمستانی، قدرت را گرفتند.' },
        { en: 'Their leader is Lenin. He follows the ideas of Karl Marx, called [[communism|communism]].', es: 'Su líder es Lenin. Sigue las ideas de Karl Marx, llamadas [[communism|comunismo]].', fa: 'رهبرشان لنین است. او از فکرهای کارل مارکس پیروی می‌کند که [[communism|کمونیزم]] نام دارد.' },
        { en: 'Now they close newspapers that disagree with them. I fear for free speech.', es: 'Ahora cierran los periódicos que no están de acuerdo con ellos. Temo por la libertad de palabra.', fa: 'حالا روزنامه‌هایی را که با آن‌ها موافق نیستند می‌بندند. برای آزادی بیان می‌ترسم.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'What changed for newspapers after the Bolsheviks took power?', es: '¿Qué cambió para los periódicos cuando los bolcheviques tomaron el poder?', fa: 'بعد از این که بلشویک‌ها قدرت را گرفتند، برای روزنامه‌ها چه تغییر کرد؟' },
        choices: [
          { ok: true, t: { en: 'Papers that disagreed were shut down', es: 'Cerraron los periódicos que no estaban de acuerdo', fa: 'روزنامه‌های مخالف بسته شدند' },
            why: { en: 'Yes. The Bolsheviks closed papers that opposed them. Soon only one party could rule.', es: 'Sí. Los bolcheviques cerraron los periódicos que se les oponían. Pronto solo un partido podía gobernar.', fa: 'بله. بلشویک‌ها روزنامه‌های مخالف را بستند. زود فقط یک حزب می‌توانست حکومت کند.' } },
          { t: { en: 'Every paper could print what it liked', es: 'Cada periódico podía publicar lo que quería', fa: 'هر روزنامه هر چه می‌خواست چاپ می‌کرد' },
            why: { en: 'It was the opposite. Free speech shrank after the Bolsheviks took power.', es: 'Fue lo contrario. La libertad de palabra se redujo con los bolcheviques.', fa: 'برعکس بود. بعد از آمدن بلشویک‌ها، آزادی بیان کم شد.' } },
          { t: { en: 'Newspapers were printed only in French', es: 'Los periódicos se imprimían solo en francés', fa: 'روزنامه‌ها فقط به فرانسوی چاپ می‌شدند' },
            why: { en: 'Papers stayed in Russian. What changed was who was allowed to print.', es: 'Los periódicos siguieron en ruso. Lo que cambió fue quién podía publicar.', fa: 'روزنامه‌ها روسی ماندند. چیزی که تغییر کرد این بود که چه کسی اجازهٔ چاپ داشت.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 10, y: 6, text: { en: 'THE VYBORG SIDE · Petrograd\'s factory district. Many protests and strikes began here.', es: 'EL LADO DE VYBORG · El barrio de fábricas de Petrogrado. Aquí empezaron muchas protestas y huelgas.', fa: 'طرف ویبورگ · محلهٔ فابریکه‌های پتروگراد. بسیاری از مظاهره‌ها و اعتصاب‌ها اینجا شروع شد.' } },
    { x: 19, y: 6, text: { en: 'FINLAND STATION · Lenin arrived here by train in April 1917.', es: 'ESTACIÓN DE FINLANDIA · Lenin llegó aquí en tren en abril de 1917.', fa: 'ایستگاه فنلاند · لنین در اپریل ۱۹۱۷ با قطار اینجا رسید.' } },
    { x: 7, y: 18, text: { en: 'PALACE SQUARE · The Winter Palace was the tsar\'s home. In 1917 the new government met here.', es: 'PLAZA DEL PALACIO · El Palacio de Invierno era la casa del zar. En 1917 se reunía aquí el nuevo gobierno.', fa: 'میدان قصر · قصر زمستانی خانهٔ تزار بود. در ۱۹۱۷ حکومت تازه اینجا جلسه می‌کرد.' } }
  ],

  /* the quest: Pavel the newspaper seller (gold !) on Nevsky Prospect -> Lena on the Vyborg side
     -> the Ink Thief hid 3 diary pages where 1917 happened: the bread line (February), the Finland Station (April),
        Palace Square (October) -> catch the thief -> back to Pavel */
  quest: {
    stat: 'hei',
    title: { en: 'The Torn Diary', es: 'El diario roto', fa: 'یادداشت روزانهٔ پاره' },
    giver: {
      x: 22, y: 19,
      name: { en: 'Pavel', es: 'Pável', fa: 'پاول' },
      role: { en: 'Newspaper seller', es: 'Vendedor de periódicos', fa: 'روزنامه‌فروش' },
      look: { skin: 1, hair: '#6a4a2a', shirt: '#4a3a2a', pants: '#2a2a2a', style: 'short', hat: '#3a3a3a' },
      lines: [
        { en: 'Help! An Ink Thief tore my sister Nadia\'s diary into 3 pages!', es: '¡Ayuda! ¡Un Ladrón de Tinta rompió el diario de mi hermana Nadia en 3 páginas!', fa: 'کمک! یک دزد رنگ یادداشت روزانهٔ خواهرم نادیا را سه پاره کرد!' },
        { en: 'She wrote what she saw in 1917. It is a [[primary source|primary source]].', es: 'Ella escribió lo que vio en 1917. Es una [[primary source|fuente primaria]].', fa: 'او نوشت که در ۱۹۱۷ چه دید. این یک [[primary source|منبع اصلی]] است.' },
        { en: 'Lena saw the thief. She is north of the river, on the Vyborg side.', es: 'Lena vio al ladrón. Está al norte del río, en el lado de Vyborg.', fa: 'لنا دزد را دید. او شمال دریا، در طرف ویبورگ است.' }
      ],
      wait: { en: 'Lena is north of the river, on the Vyborg side. Cross a bridge.', es: 'Lena está al norte del río, en el lado de Vyborg. Cruza un puente.', fa: 'لنا شمال دریا، در طرف ویبورگ است. از یک پل بگذر.' },
      thanks: { en: 'Nadia\'s diary is whole again! Her story of 1917 is not lost.', es: '¡El diario de Nadia está completo otra vez! Su historia de 1917 no se perdió.', fa: 'یادداشت روزانهٔ نادیا دوباره کامل شد! داستان ۱۹۱۷ او گم نشد.' }
    },
    contact: {
      x: 5, y: 5,
      name: { en: 'Lena', es: 'Lena', fa: 'لنا' },
      role: { en: 'Student', es: 'Estudiante', fa: 'شاگرد' },
      look: { skin: 3, hair: '#1a1208', shirt: '#3a6a5a', pants: '#2a2a3a', style: 'long' },
      lines: [
        { en: 'Yes, I saw the thief! It hid each page where something big happened.', es: '¡Sí, vi al ladrón! Escondió cada página donde pasó algo importante.', fa: 'بله، دزد را دیدم! هر صفحه را جایی پنهان کرد که یک واقعهٔ بزرگ رخ داد.' },
        { en: 'Follow the clues to each page, from February to October.', es: 'Sigue las pistas hasta cada página, de febrero a octubre.', fa: 'رهنمایی‌ها را تا هر صفحه دنبال کن، از فبروری تا اکتوبر.' }
      ]
    },
    action: {
      type: 'chase',
      at: [1, 16],
      hops: [[14, 18], [2, 20]],
      name: { en: 'The Ink Thief', es: 'El Ladrón de Tinta', fa: 'دزد رنگ' },
      taunt: { en: 'The Ink Thief hisses: "I hid 3 diary pages around Petrograd. Can you follow 1917?"', es: 'El Ladrón de Tinta sisea: "Escondí 3 páginas por Petrogrado. ¿Puedes seguir 1917?"', fa: 'دزد رنگ فش‌فش می‌کند: «سه صفحه را در پتروگراد پنهان کردم. می‌توانی ۱۹۱۷ را دنبال کنی؟»' },
      clues: [
        { t: { en: 'Page 1, February: hungry women started the protests while waiting for bread. Find the bakery line.', es: 'Página 1, febrero: mujeres con hambre empezaron las protestas en la fila del pan. Busca la panadería.', fa: 'صفحهٔ ۱، فبروری: زنان گرسنه در قطار نان مظاهره را شروع کردند. قطار نانوایی را پیدا کن.' },
          zones: [{ x: 17, y: 16, w: 5, h: 1 }],
          noBy: [{ x: 3, y: 17, w: 9, h: 3, t: { en: 'This is Palace Square. The protests began in the bread lines of the city.', es: 'Esta es la Plaza del Palacio. Las protestas empezaron en las filas del pan.', fa: 'این میدان قصر است. مظاهره‌ها در قطارهای نان شهر شروع شدند.' } },
            { x: 18, y: 3, w: 6, h: 2, t: { en: 'This is the train station. Look where people waited for bread.', es: 'Esta es la estación de tren. Busca donde la gente esperaba pan.', fa: 'این ایستگاه قطار است. جایی را ببین که مردم منتظر نان بودند.' } }],
          found: { en: 'Page 1! "We waited for bread for hours. Then we marched."', es: '¡Página 1! "Esperamos pan por horas. Luego marchamos."', fa: 'صفحهٔ ۱! «ساعت‌ها منتظر نان بودیم. بعد راهپیمایی کردیم.»' } },
        { t: { en: 'Page 2, April: Lenin came home by train from Switzerland. Find the station where he arrived.', es: 'Página 2, abril: Lenin volvió en tren desde Suiza. Busca la estación adonde llegó.', fa: 'صفحهٔ ۲، اپریل: لنین با قطار از سویس برگشت. ایستگاهی را پیدا کن که در آن رسید.' },
          zones: [{ x: 18, y: 3, w: 6, h: 2 }],
          noBy: [{ x: 17, y: 16, w: 5, h: 1, t: { en: 'This is the bread line. Lenin came by train. Find the station.', es: 'Esta es la fila del pan. Lenin llegó en tren. Busca la estación.', fa: 'این قطار نان است. لنین با قطار آمد. ایستگاه را پیدا کن.' } },
            { x: 3, y: 17, w: 9, h: 3, t: { en: 'This is Palace Square. Lenin arrived at a train station, north of the river.', es: 'Esta es la Plaza del Palacio. Lenin llegó a una estación de tren, al norte del río.', fa: 'این میدان قصر است. لنین به یک ایستگاه قطار در شمال دریا رسید.' } }],
          found: { en: 'Page 2! "Lenin spoke at the Finland Station: Peace, Land and Bread!"', es: '¡Página 2! "Lenin habló en la Estación de Finlandia: ¡Paz, tierra y pan!"', fa: 'صفحهٔ ۲! «لنین در ایستگاه فنلاند گفت: صلح، زمین و نان!»' } },
        { t: { en: 'Page 3, October: the Bolsheviks took the palace where the government met. Find its square.', es: 'Página 3, octubre: los bolcheviques tomaron el palacio donde se reunía el gobierno. Busca su plaza.', fa: 'صفحهٔ ۳، اکتوبر: بلشویک‌ها قصری را گرفتند که حکومت در آن جلسه می‌کرد. میدانش را پیدا کن.' },
          zones: [{ x: 3, y: 16, w: 9, h: 4 }],
          noBy: [{ x: 18, y: 3, w: 6, h: 2, t: { en: 'This is the train station. The government met in a palace, south of the river.', es: 'Esta es la estación. El gobierno se reunía en un palacio, al sur del río.', fa: 'این ایستگاه است. حکومت در یک قصر، جنوب دریا، جلسه می‌کرد.' } },
            { x: 17, y: 16, w: 5, h: 1, t: { en: 'This is the bread line. Look for the Winter Palace and its big square.', es: 'Esta es la fila del pan. Busca el Palacio de Invierno y su gran plaza.', fa: 'این قطار نان است. قصر زمستانی و میدان بزرگش را پیدا کن.' } }],
          found: { en: 'Page 3! "The Bolsheviks took the Winter Palace. Lenin\'s party now rules."', es: '¡Página 3! "Los bolcheviques tomaron el Palacio de Invierno. Ahora manda el partido de Lenin."', fa: 'صفحهٔ ۳! «بلشویک‌ها قصر زمستانی را گرفتند. حالا حزب لنین حکومت می‌کند.»' } }
      ],
      win: { en: 'Got you! The Ink Thief gives back all 3 pages. The diary is whole again.', es: '¡Te atrapé! El Ladrón de Tinta devuelve las 3 páginas. El diario está completo otra vez.', fa: 'گرفتمت! دزد رنگ هر سه صفحه را پس می‌دهد. یادداشت روزانه دوباره کامل است.' },
      item: { icon: '📔', name: { en: 'Nadia\'s 1917 diary', es: 'El diario de Nadia de 1917', fa: 'یادداشت روزانهٔ نادیا از ۱۹۱۷' } }
    }
  },

  scraps: [[1, 1], [30, 1], [30, 20]],
  smudges: [[10, 9], [28, 13], [8, 20]],

  challenge: {
    at: [13, 14],
    type: 'claim',
    stat: 'mov',
    title: { en: 'Who wanted what in 1917?', es: '¿Quién quería qué en 1917?', fa: 'در ۱۹۱۷ چه کسی چه می‌خواست؟' },
    intro: { en: 'The Grump says everyone in 1917 wanted the same thing. Pick one person. Then choose what they wanted, and why.',
      es: 'El Gruñón dice que en 1917 todos querían lo mismo. Elige a una persona. Luego elige qué quería y por qué.',
      fa: 'غرغرو می‌گوید در ۱۹۱۷ همه یک چیز می‌خواستند. یک نفر را انتخاب کن. بعد انتخاب کن او چه می‌خواست و چرا.' },
    options: [
      { icon: '🏭', name: { en: 'A factory worker in Petrograd', es: 'Una obrera de fábrica en Petrogrado', fa: 'یک کارگر فابریکه در پتروگراد' }, desc: { en: 'Works long hours in a mill', es: 'Trabaja muchas horas en una fábrica', fa: 'ساعت‌های زیاد در فابریکه کار می‌کند' },
        result: { en: 'Workers led strikes and joined the soviets. Many backed the Bolsheviks in October.', es: 'Los obreros hicieron huelgas y se unieron a los sóviets. Muchos apoyaron a los bolcheviques en octubre.', fa: 'کارگران اعتصاب کردند و به شوراها پیوستند. بسیاری در اکتوبر از بلشویک‌ها حمایت کردند.' } },
      { icon: '🌾', name: { en: 'A peasant soldier', es: 'Un soldado campesino', fa: 'یک سرباز دهقان' }, desc: { en: 'A farmer sent to the front in 1914', es: 'Un campesino enviado al frente en 1914', fa: 'دهقانی که در ۱۹۱۴ به جبهه فرستاده شد' },
        result: { en: 'Many soldiers left the front and went home. Peasants took land from big estates.', es: 'Muchos soldados dejaron el frente y volvieron a casa. Los campesinos tomaron tierras de las grandes fincas.', fa: 'بسیاری از سربازان جبهه را ترک کردند و به خانه رفتند. دهقانان زمین ملاکان بزرگ را گرفتند.' } },
      { icon: '🏰', name: { en: 'A rich landowner', es: 'Un terrateniente rico', fa: 'یک ملاک ثروتمند' }, desc: { en: 'Owns big farms and a city house', es: 'Tiene grandes fincas y una casa en la ciudad', fa: 'فارم‌های بزرگ و یک خانه در شهر دارد' },
        result: { en: 'Many landowners lost their land. Some fled Russia; some fought the Bolsheviks in the civil war.', es: 'Muchos terratenientes perdieron sus tierras. Algunos huyeron de Rusia; otros lucharon contra los bolcheviques.', fa: 'بسیاری از ملاکان زمین‌شان را از دست دادند. بعضی از روسیه فرار کردند؛ بعضی با بلشویک‌ها جنگیدند.' } }
    ],
    kinds: [
      { id: 'want', label: { en: 'What they wanted', es: 'Lo que quería', fa: 'او چه می‌خواست' } },
      { id: 'why', label: { en: 'Why they wanted it', es: 'Por qué lo quería', fa: 'چرا آن را می‌خواست' } }
    ],
    reasons: [
      { kind: 'want', fits: [0], t: { en: 'Bread, fair pay and shorter work days', es: 'Pan, paga justa y jornadas más cortas', fa: 'نان، مزد عادلانه و روزهای کاری کوتاه‌تر' },
        why: { en: 'That is what factory workers asked for in their strikes.', es: 'Eso pedían los obreros de fábrica en sus huelgas.', fa: 'کارگران فابریکه در اعتصاب‌هایشان همین را می‌خواستند.' } },
      { kind: 'want', fits: [1], t: { en: 'Peace, and land of their own to farm', es: 'Paz, y tierra propia para sembrar', fa: 'صلح، و زمین خودشان برای کشت' },
        why: { en: 'That is what peasant soldiers wanted most.', es: 'Eso era lo que más querían los soldados campesinos.', fa: 'سربازان دهقان بیشتر از همه همین را می‌خواستند.' } },
      { kind: 'want', fits: [2], t: { en: 'To keep their estates and stop the revolution', es: 'Conservar sus fincas y detener la revolución', fa: 'زمین‌هایشان را نگه دارند و انقلاب را متوقف کنند' },
        why: { en: 'That is what many rich landowners wanted.', es: 'Eso querían muchos terratenientes ricos.', fa: 'بسیاری از ملاکان ثروتمند همین را می‌خواستند.' } },
      { kind: 'want', fits: [], t: { en: 'Nothing; everyone was happy with the tsar', es: 'Nada; todos estaban contentos con el zar', fa: 'هیچ؛ همه از تزار راضی بودند' },
        why: { en: 'In 1917, almost no one was happy. Even many nobles turned against the tsar.', es: 'En 1917 casi nadie estaba contento. Hasta muchos nobles se pusieron contra el zar.', fa: 'در ۱۹۱۷ تقریباً هیچ‌کس راضی نبود. حتی بسیاری از اشراف ضد تزار شدند.' } },
      { kind: 'why', fits: [0], t: { en: 'Prices rose fast, but their pay did not', es: 'Los precios subían rápido, pero su paga no', fa: 'قیمت‌ها زود بالا رفت، اما مزدشان نه' },
        why: { en: 'That is true for city workers in the war years.', es: 'Eso es cierto para los obreros de la ciudad en los años de guerra.', fa: 'این برای کارگران شهر در سال‌های جنگ درست است.' } },
      { kind: 'why', fits: [1], t: { en: 'Millions died at the front, and landlords owned the best land', es: 'Millones murieron en el frente, y los terratenientes tenían la mejor tierra', fa: 'میلیون‌ها نفر در جبهه مردند و ملاکان بهترین زمین را داشتند' },
        why: { en: 'That is true for peasant soldiers.', es: 'Eso es cierto para los soldados campesinos.', fa: 'این برای سربازان دهقان درست است.' } },
      { kind: 'why', fits: [2], t: { en: 'Peasants were taking land from big estates', es: 'Los campesinos estaban tomando tierras de las grandes fincas', fa: 'دهقانان زمین ملکیت‌های بزرگ را می‌گرفتند' },
        why: { en: 'That is true for landowners in 1917.', es: 'Eso es cierto para los terratenientes en 1917.', fa: 'این برای ملاکان در ۱۹۱۷ درست است.' } },
      { kind: 'why', fits: [], t: { en: 'The tsar had given every family a new house', es: 'El zar le había dado una casa nueva a cada familia', fa: 'تزار به هر خانواده یک خانهٔ نو داده بود' },
        why: { en: 'That never happened. Most families were poor and crowded.', es: 'Eso nunca pasó. La mayoría de las familias eran pobres y vivían apretadas.', fa: 'هرگز چنین نشد. بیشتر خانواده‌ها فقیر بودند و تنگ زندگی می‌کردند.' } }
    ],
    mismatch: { en: 'That reason does not fit the person you picked.', es: 'Esa razón no corresponde a la persona que elegiste.', fa: 'این دلیل با کسی که انتخاب کردی جور نمی‌آید.' },
    success: { en: 'Different people wanted different things in 1917. History needs many points of view.', es: 'En 1917, personas distintas querían cosas distintas. La historia necesita muchos puntos de vista.', fa: 'در ۱۹۱۷ مردم مختلف چیزهای مختلف می‌خواستند. تاریخ به دیدگاه‌های زیاد نیاز دارد.' }
  },

  boss: {
    at: [27, 8],
    stat: 'mov',
    need: 3,
    name: { en: 'The Rumor Grump', es: 'El Gruñón de los Rumores', fa: 'غرغروی افواه' },
    appear: { en: 'The Rumor Grump is hiding near the Finland Station, shouting rumors!', es: '¡El Gruñón de los Rumores se esconde cerca de la Estación de Finlandia, gritando rumores!', fa: 'غرغروی افواه نزدیک ایستگاه فنلاند پنهان است و افواه فریاد می‌زند!' },
    taunt: { en: 'Only one side is right! Why listen to anyone else?', es: '¡Solo un lado tiene razón! ¿Para qué escuchar a los demás?', fa: 'فقط یک طرف حق دارد! چرا به دیگران گوش بدهی؟' },
    win: { en: 'The rumors fade away. Chronicle page 6.2 floats down into your hands!', es: 'Los rumores se apagan. ¡La página 6.2 de la crónica cae en tus manos!', fa: 'افواه‌ها خاموش می‌شوند. صفحهٔ ۶.۲ تاریخ‌نامه به دستت می‌افتد!' },
    questions: [
      { q: { en: 'Who ruled Russia before 1917?', es: '¿Quién gobernaba Rusia antes de 1917?', fa: 'پیش از ۱۹۱۷ چه کسی بر روسیه حکومت می‌کرد؟' },
        choices: [
          { en: 'Tsar Nicholas II', es: 'El zar Nicolás II', fa: 'تزار نیکلای دوم' },
          { en: 'An elected president', es: 'Un presidente elegido', fa: 'یک رئیس‌جمهور انتخابی' },
          { en: 'A council of workers', es: 'Un consejo de obreros', fa: 'یک مجلس کارگران' },
          { en: 'The king of Britain', es: 'El rey de Gran Bretaña', fa: 'شاه بریتانیا' }],
        answer: 0,
        why: { en: 'Tsar Nicholas II ruled with total power. People could not vote him out.', es: 'El zar Nicolás II gobernaba con todo el poder. La gente no podía sacarlo con votos.', fa: 'تزار نیکلای دوم با قدرت کامل حکومت می‌کرد. مردم نمی‌توانستند با رأی او را بردارند.' } },
      { q: { en: 'Why were so many Russians angry in 1917?', es: '¿Por qué tantos rusos estaban enojados en 1917?', fa: 'چرا در ۱۹۱۷ این‌قدر زیاد روس‌ها خشمگین بودند؟' },
        choices: [
          { en: 'War deaths, hunger and low pay', es: 'Muertes en la guerra, hambre y paga baja', fa: 'کشته‌های جنگ، گرسنگی و مزد کم' },
          { en: 'A new tax on tea from China', es: 'Un impuesto nuevo al té de China', fa: 'مالیهٔ تازه بر چای چین' },
          { en: 'Too many holidays at the mills', es: 'Demasiados días libres en las fábricas', fa: 'رخصتی‌های بسیار زیاد در فابریکه‌ها' },
          { en: 'The tsar gave away all his land', es: 'El zar regaló todas sus tierras', fa: 'تزار همهٔ زمینش را بخشید' }],
        answer: 0,
        why: { en: 'Millions of soldiers died, food was scarce, and pay was low. Anger grew everywhere.', es: 'Murieron millones de soldados, faltaba comida y la paga era baja. El enojo creció por todas partes.', fa: 'میلیون‌ها سرباز کشته شدند، غذا کم بود و مزد پایین. خشم همه جا بیشتر شد.' } },
      { q: { en: 'What happened after the bread protests of February 1917?', es: '¿Qué pasó después de las protestas por el pan de febrero de 1917?', fa: 'بعد از مظاهره‌های نان در فبروری ۱۹۱۷ چه شد؟' },
        choices: [
          { en: 'The tsar gave up his throne', es: 'El zar dejó el trono', fa: 'تزار از تخت کنار رفت' },
          { en: 'Lenin was crowned as the new tsar', es: 'Coronaron a Lenin como nuevo zar', fa: 'لنین تزار تازه شد' },
          { en: 'Russia won the war with Germany', es: 'Rusia ganó la guerra contra Alemania', fa: 'روسیه جنگ با آلمان را برد' },
          { en: 'Bread became free for everyone', es: 'El pan se volvió gratis para todos', fa: 'نان برای همه مفت شد' }],
        answer: 0,
        why: { en: 'Soldiers joined the protesters, and the tsar gave up power. A Provisional Government took over.', es: 'Los soldados se unieron a los que protestaban, y el zar dejó el poder. Llegó un Gobierno Provisional.', fa: 'سربازان با مظاهره‌کنندگان یکجا شدند و تزار قدرت را رها کرد. یک حکومت موقت آمد.' } },
      { q: { en: 'What did Lenin\'s slogan "Peace, Land and Bread" promise?', es: '¿Qué prometía el lema de Lenin "Paz, tierra y pan"?', fa: 'شعار لنین «صلح، زمین و نان» چه وعده‌ای می‌داد؟' },
        choices: [
          { en: 'End the war, land for peasants, food', es: 'Fin de la guerra, tierra y comida', fa: 'پایان جنگ، زمین برای دهقان، غذا' },
          { en: 'More soldiers and more battles', es: 'Más soldados y más batallas', fa: 'سربازان بیشتر و جنگ‌های بیشتر' },
          { en: 'Bigger farms for the rich nobles', es: 'Fincas más grandes para los nobles', fa: 'فارم‌های بزرگ‌تر برای اشراف' },
          { en: 'A new palace for the tsar and family', es: 'Un palacio nuevo para el zar y su familia', fa: 'قصر تازه برای تزار و خانواده‌اش' }],
        answer: 0,
        why: { en: 'Lenin spoke to what tired, hungry people wanted most: peace, land and food.', es: 'Lenin habló de lo que más querían las personas cansadas y con hambre: paz, tierra y comida.', fa: 'لنین از چیزی گفت که مردم خسته و گرسنه بیشتر از همه می‌خواستند: صلح، زمین و غذا.' } },
      { q: { en: 'Who took power in Petrograd in October 1917?', es: '¿Quién tomó el poder en Petrogrado en octubre de 1917?', fa: 'در اکتوبر ۱۹۱۷ چه کسی در پتروگراد قدرت را گرفت؟' },
        choices: [
          { en: 'Lenin and the Bolsheviks', es: 'Lenin y los bolcheviques', fa: 'لنین و بلشویک‌ها' },
          { en: 'The tsar and his family', es: 'El zar y su familia', fa: 'تزار و خانواده‌اش' },
          { en: 'The army of Germany', es: 'El ejército de Alemania', fa: 'لشکر آلمان' },
          { en: 'The king of Sweden', es: 'El rey de Suecia', fa: 'شاه سویدن' }],
        answer: 0,
        why: { en: 'The Bolsheviks took the Winter Palace and the city. Lenin became the leader of Russia.', es: 'Los bolcheviques tomaron el Palacio de Invierno y la ciudad. Lenin se volvió el líder de Rusia.', fa: 'بلشویک‌ها قصر زمستانی و شهر را گرفتند. لنین رهبر روسیه شد.' } },
      { q: { en: 'What is the main idea of communism?', es: '¿Cuál es la idea principal del comunismo?', fa: 'فکر اصلی کمونیزم چیست؟' },
        choices: [
          { en: 'Workers share factories and land', es: 'Los obreros comparten fábricas y tierras', fa: 'کارگران فابریکه و زمین را شریک‌اند' },
          { en: 'A king owns all the land forever', es: 'Un rey es dueño de toda la tierra', fa: 'یک شاه برای همیشه صاحب همهٔ زمین است' },
          { en: 'Each person must pay rich owners', es: 'Cada persona debe pagar a los ricos', fa: 'هر کس باید به مالکان ثروتمند بپردازد' },
          { en: 'Only nobles may vote or own homes', es: 'Solo los nobles votan o tienen casa', fa: 'فقط اشراف حق رأی و خانه دارند' }],
        answer: 0,
        why: { en: 'Karl Marx wrote that workers should own things together. In practice, the government took control.', es: 'Karl Marx escribió que los obreros debían ser dueños juntos. En la práctica, el gobierno tomó el control.', fa: 'کارل مارکس نوشت که کارگران باید با هم صاحب چیزها باشند. در عمل، حکومت کنترول را گرفت.' } },
      { q: { en: 'How did Russia leave World War I?', es: '¿Cómo salió Rusia de la Primera Guerra Mundial?', fa: 'روسیه چطور از جنگ جهانی اول بیرون شد؟' },
        choices: [
          { en: 'It signed a treaty with Germany', es: 'Firmó un tratado con Alemania', fa: 'با آلمان پیمان امضا کرد' },
          { en: 'It won a big battle at sea', es: 'Ganó una gran batalla en el mar', fa: 'یک جنگ بزرگ را در بحر برد' },
          { en: 'It joined the Central Powers', es: 'Se unió a las Potencias Centrales', fa: 'به قدرت‌های مرکزی پیوست' },
          { en: 'It never left; it fought to 1918', es: 'Nunca salió; luchó hasta 1918', fa: 'بیرون نشد؛ تا ۱۹۱۸ جنگید' }],
        answer: 0,
        why: { en: 'In March 1918, the Treaty of Brest-Litovsk ended Russia\'s war. Russia gave up much land.', es: 'En marzo de 1918, el Tratado de Brest-Litovsk terminó la guerra de Rusia. Rusia perdió mucha tierra.', fa: 'در مارچ ۱۹۱۸، پیمان برست-لیتوفسک جنگ روسیه را تمام کرد. روسیه زمین زیادی از دست داد.' } },
      { q: { en: 'What came after the revolution of 1917?', es: '¿Qué vino después de la revolución de 1917?', fa: 'بعد از انقلاب ۱۹۱۷ چه آمد؟' },
        choices: [
          { en: 'A civil war, then one-party rule', es: 'Una guerra civil y luego un solo partido', fa: 'جنگ داخلی، بعد حکومت یک حزب' },
          { en: 'Free elections with many parties', es: 'Elecciones libres con muchos partidos', fa: 'انتخابات آزاد با حزب‌های زیاد' },
          { en: 'The tsar came back to the throne', es: 'El zar volvió al trono', fa: 'تزار دوباره به تخت برگشت' },
          { en: 'Russia became a British colony', es: 'Rusia se volvió colonia británica', fa: 'روسیه مستعمرهٔ بریتانیا شد' }],
        answer: 0,
        why: { en: 'Reds fought Whites in a [[civil war|civil war]] until about 1921. Then the Communist Party alone ruled the Soviet Union.', es: 'Rojos y blancos lucharon en una [[civil war|guerra civil]] hasta cerca de 1921. Luego solo el Partido Comunista gobernó la Unión Soviética.', fa: 'سرخ‌ها و سفیدها تا حدود ۱۹۲۱ در [[civil war|جنگ داخلی]] جنگیدند. بعد فقط حزب کمونیست بر اتحاد شوروی حکومت کرد.' } }
    ]
  },

  learned: [
    { en: 'War deaths, hunger and low pay made Russians angry. In 1917 the [[tsar|tsar]] gave up his throne.', es: 'Las muertes en la guerra, el hambre y la paga baja enojaron a los rusos. En 1917 el [[tsar|zar]] dejó el trono.', fa: 'کشته‌های جنگ، گرسنگی و مزد کم روس‌ها را خشمگین ساخت. در ۱۹۱۷ [[tsar|تزار]] از تخت کنار رفت.' },
    { en: 'Lenin promised "Peace, Land and Bread." In October 1917 his [[bolshevik|Bolsheviks]] took power.', es: 'Lenin prometió "Paz, tierra y pan". En octubre de 1917 sus [[bolshevik|bolcheviques]] tomaron el poder.', fa: 'لنین وعدهٔ «صلح، زمین و نان» داد. در اکتوبر ۱۹۱۷ [[bolshevik|بلشویک‌های]] او قدرت را گرفتند.' },
    { en: 'After a [[civil war|civil war]], the Soviet Union became a [[communism|communist]] country ruled by one party.', es: 'Después de una [[civil war|guerra civil]], la Unión Soviética fue un país [[communism|comunista]] de un solo partido.', fa: 'بعد از یک [[civil war|جنگ داخلی]]، اتحاد شوروی یک کشور [[communism|کمونیستی]] با حکومت یک حزب شد.' }
  ],
  reflect: {
    q: { en: 'Workers, peasants and landowners saw 1917 in different ways. Why should we hear many sides?', es: 'Obreros, campesinos y terratenientes vieron 1917 de formas distintas. ¿Por qué escuchar a muchos lados?', fa: 'کارگران، دهقانان و ملاکان ۱۹۱۷ را به شکل‌های مختلف دیدند. چرا باید به طرف‌های زیاد گوش بدهیم؟' },
    starter: { en: 'We should hear many sides because', es: 'Debemos escuchar a muchos lados porque', fa: 'باید به طرف‌های زیاد گوش بدهیم، چون' }
  }
};
