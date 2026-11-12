/* TRAILWALKER · Episode 7.1 · World War I and Versailles (VUS)
   Newport News, Virginia, in October 1918: the Hampton Roads Port of Embarkation, where soldiers boarded ships for France.
   North (rows 1-8): the train depot (NW), the church (NE), the railway (row 4), homes, a print shop,
   the Red Cross station and a soldiers' rest hut. Row 9: the main street.
   South-west: the shipyard (X) and its office. South-east: warehouses (J) and market stalls (m).
   Row 15: the waterfront. Rows 16-21: the harbor, with three piers (k).
   War topic: plain, true words, no gore. The Grump's taunts are serious. */
window.EPISODE = {
  id: '7.1',
  realm: 7,
  sol: 'VUS',
  title: { en: 'World War I and Versailles', es: 'La Primera Guerra Mundial y Versalles', fa: 'جنگ جهانی اول و ورسای' },
  weather: { sky: 'drizzle', time: 'day' },
  place: { en: 'Newport News, 1918', es: 'Newport News, 1918', fa: 'نیوپورت نیوز، ۱۹۱۸' },
  intro: [
    { en: 'The Grump blurred the [[world war i|World War I]] page. People forget why America went to war.',
      es: 'El Gruñón borró la página de la [[world war i|Primera Guerra Mundial]]. La gente olvida por qué Estados Unidos fue a la guerra.',
      fa: 'غرغرو صفحهٔ [[world war i|جنگ جهانی اول]] را تار کرد. مردم فراموش می‌کنند چرا امریکا به جنگ رفت.' },
    { en: 'Talk to the 3 people here, then fix the journal stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del diario.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ روزنامچه را درست کن.' }
  ],
  /* cut scenes: Hampton Roads, Virginia on the map, 1918 on the timeline */
  scenes: {
    at: [-76.43, 36.98],
    year: 1918,
    start: [
      { en: 'In 1914, a great war began in Europe.',
        es: 'En 1914 empezó una gran guerra en Europa.',
        fa: 'در سال ۱۹۱۴ یک جنگ بزرگ در اروپا شروع شد.' },
      { en: 'In April 1917, the United States joined the war.',
        es: 'En abril de 1917, Estados Unidos entró en la guerra.',
        fa: 'در اپریل ۱۹۱۷، ایالات متحده وارد جنگ شد.' },
      { en: 'Many soldiers sailed to France from Newport News, Virginia.',
        es: 'Muchos soldados salieron en barco hacia Francia desde Newport News, Virginia.',
        fa: 'بسیاری از سربازان از نیوپورت نیوز، ویرجینیا، با کشتی به فرانسه رفتند.' }
    ],
    page: { en: 'On November 11, 1918, the fighting stopped. This was the armistice.',
      es: 'El 11 de noviembre de 1918 terminaron los combates. Fue el armisticio.',
      fa: 'در ۱۱ نومبر ۱۹۱۸ جنگ بس شد. این آتش‌بس بود.' },
    guess: {
      q: { en: 'The war was far away in Europe. Did America join right away?', es: 'La guerra estaba lejos, en Europa. ¿Estados Unidos entró enseguida?', fa: 'جنگ دور، در اروپا بود. آیا امریکا فوراً وارد جنگ شد؟' },
      choices: [
        { t: { en: 'No, it waited', es: 'No, esperó', fa: 'نه، صبر کرد' }, ok: true },
        { t: { en: 'Yes, at once', es: 'Sí, enseguida', fa: 'بله، فوراً' } }
      ],
      why: { en: 'For almost three years, the US stayed neutral. It joined the war in 1917.', es: 'Durante casi tres años, Estados Unidos fue neutral. Entró en la guerra en 1917.', fa: 'تقریباً سه سال، امریکا بی‌طرف ماند. در سال ۱۹۱۷ وارد جنگ شد.' }
    },
    next: {
      q: { en: 'Next: the 1920s roared. Then in 1929 the stock market crashed. What came next?', es: 'Ahora: los años veinte fueron alegres. Luego, en 1929, cayó la bolsa. ¿Qué vino después?', fa: 'بعدی: دههٔ ۱۹۲۰ پر از شور بود. بعد در ۱۹۲۹ بازار سهام سقوط کرد. بعد چه شد؟' },
      choices: [
        { t: { en: 'Hard times for many', es: 'Tiempos duros para muchos', fa: 'روزهای سخت برای بسیاری' }, ok: true },
        { t: { en: 'Everyone got rich', es: 'Todos se hicieron ricos', fa: 'همه پولدار شدند' } }
      ],
      why: { en: 'The Great Depression began. Millions of people lost their jobs and savings.', es: 'Empezó la Gran Depresión. Millones de personas perdieron su trabajo y sus ahorros.', fa: 'رکود بزرگ شروع شد. میلیون‌ها نفر کار و پس‌انداز خود را از دست دادند.' }
    }
  },
  /* houses: who lives or works behind each door */
  houses: [
    { at: [5, 2], name: { en: 'Mr. Greene', es: 'Señor Greene', fa: 'آقای گرین' },
      look: { skin: 5, hair: '#2a2a2a', shirt: '#3a4a6a', pants: '#2a2a2a', style: 'short', hat: '#2a2a3a' },
      lines: [
        { en: 'I sell tickets at the train depot. Many Black families ride north.', es: 'Vendo boletos en la estación de tren. Muchas familias negras viajan al norte.', fa: 'من در ایستگاه ریل تکت می‌فروشم. بسیاری از خانواده‌های سیاه‌پوست به شمال می‌روند.' },
        { en: 'They want factory jobs, and to escape unfair laws in the South.', es: 'Quieren trabajo en fábricas y escapar de leyes injustas en el Sur.', fa: 'آن‌ها کار در فابریکه می‌خواهند و می‌خواهند از قانون‌های ناعادلانهٔ جنوب دور شوند.' },
        { en: 'People call it the [[great migration|Great Migration]].', es: 'La gente lo llama la [[great migration|Gran Migración]].', fa: 'مردم این را [[great migration|کوچ بزرگ]] می‌نامند.' }
      ] },
    { at: [25, 2], name: { en: 'Pastor Ellis', es: 'Pastor Ellis', fa: 'کشیش الیس' },
      look: { skin: 4, hair: '#1a1a1a', shirt: '#1a1a2a', pants: '#1a1a2a', style: 'short' },
      lines: [
        { en: 'Every Sunday, we pray for the soldiers sailing to France.', es: 'Cada domingo rezamos por los soldados que van a Francia.', fa: 'هر یکشنبه برای سربازانی که به فرانسه می‌روند دعا می‌کنیم.' },
        { en: 'Families here buy [[liberty bond|Liberty Bonds]] to help pay for the war.', es: 'Las familias de aquí compran [[liberty bond|Bonos de la Libertad]] para ayudar a pagar la guerra.', fa: 'خانواده‌های اینجا [[liberty bond|اوراق آزادی]] می‌خرند تا در پرداخت هزینهٔ جنگ کمک کنند.' }
      ] },
    { at: [3, 7], name: { en: 'Grandma Rose', es: 'Abuela Rose', fa: 'مادرکلان رز' },
      look: { skin: 1, hair: '#d8d8d8', shirt: '#6a4a6a', pants: '#2a2a2a', style: 'bun' },
      lines: [
        { en: 'My grandson was [[draft|drafted]] last year. He did not choose to go.', es: 'A mi nieto lo [[draft|reclutaron]] el año pasado. Él no eligió ir.', fa: 'نواسه‌ام سال گذشته [[draft|به عسکری خواسته شد]]. خودش رفتن را انتخاب نکرد.' },
        { en: 'The Selective Service Act of 1917 made young men sign up.', es: 'La Ley de Servicio Selectivo de 1917 obligó a los jóvenes a inscribirse.', fa: 'قانون خدمت انتخابی سال ۱۹۱۷ مردان جوان را مجبور کرد نام‌نویسی کنند.' }
      ] },
    { at: [8, 7], name: { en: 'Mr. Novak', es: 'Señor Novak', fa: 'آقای نوواک' },
      look: { skin: 1, hair: '#6a4a2a', shirt: '#e8e0d0', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'I print the town newspaper. New laws limit what we can say.', es: 'Imprimo el periódico del pueblo. Unas leyes nuevas limitan lo que podemos decir.', fa: 'من روزنامهٔ شهر را چاپ می‌کنم. قانون‌های نو حد می‌گذارند که چه بگوییم.' },
        { en: 'Under the Espionage and Sedition Acts, speaking against the war can mean jail.', es: 'Con las leyes de Espionaje y Sedición, hablar contra la guerra puede llevar a la cárcel.', fa: 'با قانون‌های جاسوسی و فتنه، حرف زدن ضد جنگ می‌تواند به زندان ببرد.' }
      ] },
    { at: [22, 7], name: { en: 'Miss Hattie', es: 'Señorita Hattie', fa: 'خانم هتی' },
      look: { skin: 3, hair: '#3a2416', shirt: '#f2f2f2', pants: '#8a2a2a', style: 'bun' },
      lines: [
        { en: 'This is the Red Cross station. We roll bandages and knit socks.', es: 'Esta es la estación de la Cruz Roja. Hacemos vendas y tejemos medias.', fa: 'اینجا ایستگاه صلیب سرخ است. ما بنداژ می‌پیچیم و جوراب می‌بافیم.' },
        { en: 'Women also work as nurses and drive ambulances in France.', es: 'Las mujeres también trabajan de enfermeras y manejan ambulancias en Francia.', fa: 'زنان در فرانسه نرس هم هستند و امبولانس هم می‌رانند.' }
      ] },
    { at: [27, 7], name: { en: 'Corporal Ramírez', es: 'Cabo Ramírez', fa: 'سرجوخه رامیرز' },
      look: { skin: 3, hair: '#1a1208', shirt: '#7a7a4a', pants: '#6a6a3a', style: 'short' },
      lines: [
        { en: 'This is a soldiers\' rest hut. We write letters home here.', es: 'Esta es una cabaña de descanso para soldados. Aquí escribimos cartas a casa.', fa: 'اینجا کلبهٔ استراحت سربازان است. اینجا به خانه نامه می‌نویسیم.' },
        { en: 'The army keeps Black and white soldiers in separate units.', es: 'El ejército pone a los soldados negros y blancos en unidades separadas.', fa: 'اردو سربازان سیاه‌پوست و سفیدپوست را در قطعه‌های جدا نگه می‌دارد.' },
        { en: 'The 369th, Black soldiers from New York, fight beside the French army.', es: 'El 369.º, soldados negros de Nueva York, pelea junto al ejército francés.', fa: 'قطعهٔ ۳۶۹، سربازان سیاه‌پوست نیویارک، کنار اردوی فرانسه می‌جنگند.' }
      ] },
    { at: [12, 12], name: { en: 'Miss Florence', es: 'Señorita Florence', fa: 'خانم فلورنس' },
      look: { skin: 2, hair: '#5a3a1a', shirt: '#3a6a8a', pants: '#2a2a3a', style: 'long' },
      lines: [
        { en: 'I work in the shipyard office now. Few women worked here before.', es: 'Ahora trabajo en la oficina del astillero. Antes pocas mujeres trabajaban aquí.', fa: 'حالا در دفتر کشتی‌سازی کار می‌کنم. پیش از این کم زنان اینجا کار می‌کردند.' },
        { en: 'The men went to war, so women took many new jobs.', es: 'Los hombres se fueron a la guerra, así que las mujeres tomaron muchos trabajos nuevos.', fa: 'مردها به جنگ رفتند، پس زنان کارهای نو زیادی گرفتند.' },
        { en: 'The yard builds ships for the Navy, day and night.', es: 'El astillero construye barcos para la Marina, de día y de noche.', fa: 'کشتی‌سازی شب و روز برای نیروی بحری کشتی می‌سازد.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     NW: the train depot (Q over h, door 5,2), a home and the print shop (row 7). NE: the church (R, door 25,2),
     the Red Cross station (door 22,7) and the soldiers' rest hut (J, door 27,7).
     Row 4: the railway. Row 9: the main street. Column 15: the street down to the harbor.
     SW: the shipyard (X) and its office (door 12,12). SE: warehouses (J) and market stalls (m).
     Row 15: the waterfront. Below: the harbor (~, = deep) with three piers (k). */
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT',
    'T..QQQQQ...............RRRRR...T',
    'T..hhdhh..x............hhdhh...T',
    'T..............l...........x...T',
    'T------------------------------T',
    'T..............l...............T',
    'T.RRR..QQQ.....l.....RRR..JJJ..T',
    'T.hdh..hdh.....l.....hdh..JdJ..T',
    'T..............l...............T',
    'TllllllllllllllllllllllllllllllT',
    'T..............l...............T',
    'T.XXXX.XXXXRRR.l....JJJ...mmm..T',
    'T.XXXX.XXXXhdh.l....JJJ...mmm..T',
    'T..............l...............T',
    'T.............xl...............T',
    'TllllllllllllllllllllllllllllllT',
    '~~kk~~~~~~~~~~~~~~~~kk~~~~kk~~~~',
    '~~kk~~~~~~~~~~~~~~~~kk~~~~kk~~~~',
    '~~kk~~~~~~~~~~~~~~~~kk~~~~kk~~~~',
    '~~kk~~~~~~~~~~~~~~~~kk~~~~kk~~~~',
    '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',
    '================================'
  ],
  start: [15, 10],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [18, 6], at: [18, 2], decor: 'coinold',
      clue: { en: 'From this note, walk 4 steps north. Cross the railroad tracks.', es: 'Desde esta nota, camina 4 pasos al norte. Cruza las vías del tren.', fa: 'از این یادداشت، ۴ قدم به شمال برو. از خط ریل بگذر.' },
      text: { en: 'A Liberty Bond button. People lent money to the government, and it paid them back later.', es: 'Un botón de los Bonos de la Libertad. La gente prestó dinero al gobierno, y luego se lo devolvieron.', fa: 'یک نشان اوراق آزادی. مردم به حکومت پول قرض دادند و بعداً پس گرفتند.' } },
    { clueAt: [28, 15], at: [27, 19], decor: 'shell',
      clue: { en: 'From this note, walk 1 step west, then 4 steps south, to the end of the pier.', es: 'Desde esta nota, camina 1 paso al oeste y luego 4 pasos al sur, hasta el final del muelle.', fa: 'از این یادداشت، ۱ قدم به غرب برو، بعد ۴ قدم به جنوب، تا آخر بندرگاه.' },
      text: { en: 'Some ships were painted in wild stripes. The stripes made them hard for submarines to aim at.', es: 'Algunos barcos tenían rayas locas pintadas. Las rayas hacían difícil que los submarinos apuntaran.', fa: 'بعضی کشتی‌ها با خط‌های عجیب رنگ شده بودند. این خط‌ها نشانه گرفتن را برای زیردریایی‌ها سخت می‌کرد.' } }
  ],

  words: {
    'world war i': { en: 'the great war from 1914 to 1918, fought by many countries', es: 'la gran guerra de 1914 a 1918, en la que lucharon muchos países', fa: 'جنگ بزرگ از ۱۹۱۴ تا ۱۹۱۸ که کشورهای زیادی در آن جنگیدند' },
    militarism: { en: 'building big armies and being ready to use them', es: 'formar ejércitos grandes y estar listos para usarlos', fa: 'ساختن اردوهای بزرگ و آماده بودن برای به کار بردن آن‌ها' },
    alliance: { en: 'a promise between countries to help each other in a war', es: 'una promesa entre países de ayudarse en una guerra', fa: 'پیمانی میان کشورها که در جنگ به همدیگر کمک کنند' },
    imperialism: { en: 'strong countries taking control of other lands', es: 'países fuertes que toman el control de otras tierras', fa: 'کشورهای قوی که سرزمین‌های دیگر را زیر کنترول می‌گیرند' },
    nationalism: { en: 'strong pride in your own nation, sometimes against others', es: 'mucho orgullo por tu propia nación, a veces contra otras', fa: 'افتخار زیاد به ملت خود، گاهی ضد دیگران' },
    neutral: { en: 'not taking either side in a fight', es: 'que no toma partido por ningún lado en una pelea', fa: 'طرف هیچ کس را در یک دعوا نگرفتن' },
    submarine: { en: 'a ship that travels under the water', es: 'un barco que viaja debajo del agua', fa: 'کشتی‌ای که زیر آب حرکت می‌کند' },
    draft: { en: 'a law that makes people join the army', es: 'una ley que obliga a la gente a entrar al ejército', fa: 'قانونی که مردم را مجبور می‌کند به اردو بپیوندند' },
    'liberty bond': { en: 'a paper you bought to lend money to the government for the war', es: 'un papel que comprabas para prestarle dinero al gobierno para la guerra', fa: 'کاغذی که می‌خریدی تا برای جنگ به حکومت پول قرض بدهی' },
    'great migration': { en: 'when millions of Black Americans moved from the South to cities in the North', es: 'cuando millones de afroamericanos se mudaron del Sur a ciudades del Norte', fa: 'وقتی میلیون‌ها امریکایی سیاه‌پوست از جنوب به شهرهای شمال کوچ کردند' },
    armistice: { en: 'an agreement to stop fighting', es: 'un acuerdo para dejar de pelear', fa: 'توافق برای بس کردن جنگ' },
    'fourteen points': { en: 'President Wilson\'s plan for a fair and lasting peace', es: 'el plan del presidente Wilson para una paz justa y duradera', fa: 'نقشهٔ رئیس‌جمهور ویلسن برای یک صلح عادلانه و پایدار' },
    'league of nations': { en: 'a group where countries would talk out problems instead of fighting', es: 'un grupo donde los países hablarían de sus problemas en vez de pelear', fa: 'گروهی که کشورها در آن به جای جنگ دربارهٔ مشکلات گپ بزنند' },
    'treaty of versailles': { en: 'the 1919 peace treaty that ended the war with Germany', es: 'el tratado de paz de 1919 que terminó la guerra con Alemania', fa: 'پیمان صلح سال ۱۹۱۹ که جنگ با آلمان را پایان داد' },
    isolationism: { en: 'staying out of other countries\' problems and wars', es: 'mantenerse fuera de los problemas y guerras de otros países', fa: 'دور ماندن از مشکلات و جنگ‌های کشورهای دیگر' }
  },

  npcs: [
    {
      x: 12, y: 5,
      name: { en: 'Mr. Rossi', es: 'Señor Rossi', fa: 'آقای روسی' },
      role: { en: 'Newspaper seller', es: 'Vendedor de periódicos', fa: 'روزنامه‌فروش' },
      look: { skin: 2, hair: '#2a1a10', shirt: '#8a6a4a', pants: '#3a3a3a', style: 'short', hat: '#4a3a2a' },
      lines: [
        { en: 'Paper! I came from Italy. I read the war news every day.', es: '¡Periódico! Vine de Italia. Leo las noticias de la guerra todos los días.', fa: 'روزنامه! من از ایتالیا آمدم. هر روز خبرهای جنگ را می‌خوانم.' },
        { en: 'Four causes built up for years: [[militarism|militarism]], [[alliance|alliances]], [[imperialism|imperialism]], [[nationalism|nationalism]].', es: 'Cuatro causas crecieron por años: [[militarism|militarismo]], [[alliance|alianzas]], [[imperialism|imperialismo]] y [[nationalism|nacionalismo]].', fa: 'چهار علت سال‌ها بزرگ شد: [[militarism|نظامی‌گری]]، [[alliance|اتحادها]]، [[imperialism|امپریالیزم]] و [[nationalism|ملی‌گرایی]].' },
        { en: 'In 1914, a man killed Archduke Franz Ferdinand of Austria-Hungary.', es: 'En 1914, un hombre mató al archiduque Francisco Fernando de Austria-Hungría.', fa: 'در سال ۱۹۱۴، یک مرد آرشیدوک فرانتس فردیناند اتریش-هنگری را کشت.' },
        { en: 'Allies promised to help each other. So one war pulled in many nations.', es: 'Los aliados prometieron ayudarse. Así una guerra arrastró a muchas naciones.', fa: 'متحدان وعده داده بودند به هم کمک کنند. پس یک جنگ کشورهای زیادی را کشاند.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'One killing in 1914 started a war across Europe. Why did so many countries join?', es: 'Un asesinato en 1914 empezó una guerra en Europa. ¿Por qué entraron tantos países?', fa: 'یک قتل در ۱۹۱۴ جنگی در سراسر اروپا را شروع کرد. چرا این‌قدر کشورها وارد شدند؟' },
        choices: [
          { ok: true, t: { en: 'Alliances made them help each other', es: 'Las alianzas los obligaban a ayudarse', fa: 'اتحادها آن‌ها را به کمک هم واداشت' },
            why: { en: 'Yes. Allies had promised help, so one fight became a world war.', es: 'Sí. Los aliados habían prometido ayuda, así que una pelea se volvió guerra mundial.', fa: 'بله. متحدان وعدهٔ کمک داده بودند، پس یک دعوا جنگ جهانی شد.' } },
          { t: { en: 'They all wanted the same small island', es: 'Todos querían la misma isla pequeña', fa: 'همه یک جزیرهٔ کوچک را می‌خواستند' },
            why: { en: 'No. Promises between allies pulled countries in, one after another.', es: 'No. Las promesas entre aliados arrastraron a los países, uno tras otro.', fa: 'نه. وعده‌های میان متحدان کشورها را یکی پس از دیگری کشاند.' } },
          { t: { en: 'A world vote told them to fight', es: 'Una votación mundial les dijo que pelearan', fa: 'یک رأی جهانی گفت بجنگند' },
            why: { en: 'There was no world vote. Alliances pulled one country after another into war.', es: 'No hubo votación mundial. Las alianzas metieron a un país tras otro en la guerra.', fa: 'هیچ رأی جهانی نبود. اتحادها یک کشور پس از دیگری را به جنگ کشاندند.' } }
        ]
      }
    },
    {
      x: 21, y: 17,
      name: { en: 'Private Brooks', es: 'Soldado Brooks', fa: 'سرباز بروکس' },
      role: { en: 'Soldier from Virginia', es: 'Soldado de Virginia', fa: 'سرباز ویرجینیا' },
      look: { skin: 4, hair: '#1a1208', shirt: '#7a7a4a', pants: '#6a6a3a', style: 'short', hat: '#6a6a3a' },
      lines: [
        { en: 'I wait at Camp Stuart. Tomorrow my ship sails for France.', es: 'Espero en el Campamento Stuart. Mañana mi barco sale para Francia.', fa: 'من در کمپ استوارت منتظرم. فردا کشتی‌ام به فرانسه می‌رود.' },
        { en: 'At first, America stayed [[neutral|neutral]]. Then German [[submarine|submarines]] sank ships.', es: 'Al principio, Estados Unidos fue [[neutral|neutral]]. Luego los [[submarine|submarinos]] alemanes hundieron barcos.', fa: 'اول، امریکا [[neutral|بی‌طرف]] ماند. بعد [[submarine|زیردریایی‌های]] آلمانی کشتی‌ها را غرق کردند.' },
        { en: 'In 1915, they sank the Lusitania. Over 100 Americans died.', es: 'En 1915 hundieron el Lusitania. Murieron más de 100 estadounidenses.', fa: 'در سال ۱۹۱۵، کشتی لوسیتانیا را غرق کردند. بیش از ۱۰۰ امریکایی مردند.' },
        { en: 'In 1917, the Zimmermann Telegram asked Mexico to fight the US.', es: 'En 1917, el telegrama Zimmermann le pidió a México pelear contra Estados Unidos.', fa: 'در سال ۱۹۱۷، تلگرام زیمرمن از مکسیکو خواست با امریکا بجنگد.' },
        { en: 'President Wilson said we fight to make the world safe for democracy.', es: 'El presidente Wilson dijo que luchamos para que el mundo sea seguro para la democracia.', fa: 'رئیس‌جمهور ویلسن گفت ما می‌جنگیم تا جهان برای دموکراسی امن شود.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why did the United States join the war in April 1917?', es: '¿Por qué Estados Unidos entró en la guerra en abril de 1917?', fa: 'چرا ایالات متحده در اپریل ۱۹۱۷ وارد جنگ شد؟' },
        choices: [
          { ok: true, t: { en: 'Submarine attacks and the Zimmermann Telegram', es: 'Ataques de submarinos y el telegrama Zimmermann', fa: 'حملهٔ زیردریایی‌ها و تلگرام زیمرمن' },
            why: { en: 'Right. Ships were sunk, and Germany asked Mexico to attack the US.', es: 'Correcto. Hundieron barcos, y Alemania le pidió a México atacar a Estados Unidos.', fa: 'درست. کشتی‌ها غرق شدند و آلمان از مکسیکو خواست به امریکا حمله کند.' } },
          { t: { en: 'Germany invaded the coast of Virginia', es: 'Alemania invadió la costa de Virginia', fa: 'آلمان به ساحل ویرجینیا حمله کرد' },
            why: { en: 'No army landed in Virginia. Submarine attacks at sea and the telegram angered Americans.', es: 'Ningún ejército llegó a Virginia. Los ataques en el mar y el telegrama enojaron a la gente.', fa: 'هیچ اردویی به ویرجینیا نرسید. حمله‌ها در بحر و تلگرام امریکایی‌ها را خشمگین کرد.' } },
          { t: { en: 'The United States wanted new colonies in Europe', es: 'Estados Unidos quería colonias nuevas en Europa', fa: 'امریکا مستعمره‌های نو در اروپا می‌خواست' },
            why: { en: 'The US did not want land in Europe. It joined after attacks on ships.', es: 'Estados Unidos no quería tierras en Europa. Entró después de los ataques a barcos.', fa: 'امریکا زمینی در اروپا نمی‌خواست. بعد از حمله بر کشتی‌ها وارد شد.' } }
        ]
      }
    },
    {
      x: 24, y: 8,
      name: { en: 'Nurse Ruth', es: 'Enfermera Ruth', fa: 'نرس روت' },
      role: { en: 'Army nurse', es: 'Enfermera del ejército', fa: 'نرس اردو' },
      look: { skin: 0, hair: '#7a4a2a', shirt: '#f2f2f2', pants: '#3a4a6a', style: 'bun' },
      lines: [
        { en: 'I came home from France to help here. The flu is spreading fast.', es: 'Volví de Francia para ayudar aquí. La gripe se está contagiando rápido.', fa: 'از فرانسه برگشتم تا اینجا کمک کنم. زکام زود پخش می‌شود.' },
        { en: 'In 1918, the flu made millions sick around the world. Many died.', es: 'En 1918, la gripe enfermó a millones en el mundo. Muchos murieron.', fa: 'در سال ۱۹۱۸، زکام میلیون‌ها نفر را در جهان مریض کرد. بسیاری مردند.' },
        { en: 'In France, soldiers live in long, muddy ditches called trenches.', es: 'En Francia, los soldados viven en zanjas largas y con lodo llamadas trincheras.', fa: 'در فرانسه، سربازان در کنده‌های دراز و گِلی به نام خندق زندگی می‌کنند.' },
        { en: 'New weapons, like machine guns, tanks and poison gas, made this war deadly.', es: 'Armas nuevas, como ametralladoras, tanques y gas venenoso, hicieron muy mortal esta guerra.', fa: 'سلاح‌های نو، مثل ماشیندار، تانک و گاز زهری، این جنگ را بسیار کشنده ساخت.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Soldiers boarded ships here in Newport News. Where did the ships take them?', es: 'Los soldados subían a los barcos aquí en Newport News. ¿A dónde los llevaban?', fa: 'سربازان اینجا در نیوپورت نیوز سوار کشتی شدند. کشتی‌ها آن‌ها را کجا بردند؟' },
        choices: [
          { ok: true, t: { en: 'Across the Atlantic to France', es: 'Cruzando el Atlántico, a Francia', fa: 'از بحر اطلس به فرانسه' },
            why: { en: 'Yes. Ships crossed the Atlantic Ocean to France, where the fighting was.', es: 'Sí. Los barcos cruzaban el océano Atlántico hasta Francia, donde eran los combates.', fa: 'بله. کشتی‌ها از بحر اطلس به فرانسه رفتند، جایی که جنگ بود.' } },
          { t: { en: 'Across the Pacific to Japan', es: 'Cruzando el Pacífico, a Japón', fa: 'از بحر آرام به جاپان' },
            why: { en: 'Virginia is on the Atlantic coast. The war was in Europe, not Japan.', es: 'Virginia está en la costa del Atlántico. La guerra era en Europa, no en Japón.', fa: 'ویرجینیا در ساحل اطلس است. جنگ در اروپا بود، نه جاپان.' } },
          { t: { en: 'South along the coast to Florida', es: 'Al sur por la costa, a Florida', fa: 'به جنوب، کنار ساحل تا فلوریدا' },
            why: { en: 'The fighting was not in Florida. Soldiers sailed east, across the ocean, to France.', es: 'Los combates no eran en Florida. Los soldados navegaban al este, hasta Francia.', fa: 'جنگ در فلوریدا نبود. سربازان به طرف شرق، از بحر، به فرانسه رفتند.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 10, y: 2, text: { en: 'NEWPORT NEWS · 1918 · Hampton Roads Port of Embarkation. Soldiers board ships for France here.', es: 'NEWPORT NEWS · 1918 · Puerto de Embarque de Hampton Roads. Aquí los soldados suben a barcos hacia Francia.', fa: 'نیوپورت نیوز · ۱۹۱۸ · بندر سوار شدن همپتن رودز. سربازان اینجا سوار کشتی به فرانسه می‌شوند.' } },
    { x: 14, y: 14, text: { en: 'TO THE PIERS · Soldiers from Camp Stuart and Camp Hill march down this street.', es: 'A LOS MUELLES · Los soldados de los campamentos Stuart y Hill bajan por esta calle.', fa: 'به طرف بندرگاه · سربازان کمپ استوارت و کمپ هیل از این سرک پایین می‌روند.' } },
    { x: 27, y: 3, text: { en: 'BUY LIBERTY BONDS · Lend your money to win the war!', es: 'COMPRE BONOS DE LA LIBERTAD · ¡Preste su dinero para ganar la guerra!', fa: 'اوراق آزادی بخرید · پول خود را قرض بدهید تا جنگ را ببریم!' } }
  ],

  /* the quest: Mrs. Johnson (gold !) by the church -> Mr. Lee the postal clerk at the depot
     -> Miss Clara at the Red Cross table on the waterfront: carry her what soldiers in wet trenches need -> back */
  quest: {
    stat: 'reg',
    title: { en: 'A Package for France', es: 'Un paquete para Francia', fa: 'بسته‌ای برای فرانسه' },
    giver: {
      x: 29, y: 2,
      name: { en: 'Mrs. Johnson', es: 'Señora Johnson', fa: 'خانم جانسن' },
      role: { en: 'A soldier\'s mother', es: 'Madre de un soldado', fa: 'مادر یک سرباز' },
      look: { skin: 5, hair: '#2a2a2a', shirt: '#4a6a4a', pants: '#2a2a3a', style: 'bun', hat: '#6a2a3a' },
      lines: [
        { en: 'My son James is a soldier in France. I miss him so much.', es: 'Mi hijo James es soldado en Francia. Lo extraño mucho.', fa: 'پسرم جیمز در فرانسه سرباز است. خیلی دلم برایش تنگ است.' },
        { en: 'I want to send him something useful. Mr. Lee at the depot can help.', es: 'Quiero mandarle algo útil. El señor Lee, en la estación, puede ayudar.', fa: 'می‌خواهم برایش چیزی به‌درد‌بخور بفرستم. آقای لی در ایستگاه ریل کمک می‌کند.' }
      ],
      wait: { en: 'Mr. Lee works by the train depot, to the west, past the railroad.', es: 'El señor Lee trabaja junto a la estación de tren, al oeste, por las vías.', fa: 'آقای لی کنار ایستگاه ریل، به طرف غرب، کنار خط ریل کار می‌کند.' },
      thanks: { en: 'Warm wool socks! His feet will stay dry in the trenches. Thank you!', es: '¡Medias de lana calientes! Sus pies estarán secos en las trincheras. ¡Gracias!', fa: 'جوراب‌های پشمی گرم! پاهایش در خندق خشک می‌ماند. تشکر!' }
    },
    contact: {
      x: 7, y: 3,
      name: { en: 'Mr. Lee', es: 'Señor Lee', fa: 'آقای لی' },
      role: { en: 'Postal clerk', es: 'Empleado de correos', fa: 'کارمند پسته‌خانه' },
      look: { skin: 2, hair: '#141010', shirt: '#2a3a5a', pants: '#2a2a2a', style: 'short', hat: '#2a3a5a' },
      lines: [
        { en: 'Mail for soldiers goes by train to the piers, then by ship.', es: 'El correo para los soldados va en tren a los muelles, y luego en barco.', fa: 'نامه‌های سربازان با ریل به بندرگاه می‌رود، بعد با کشتی.' },
        { en: 'Go south to the waterfront. Miss Clara of the Red Cross packs boxes there.', es: 'Ve al sur, a la orilla del agua. Allí la señorita Clara, de la Cruz Roja, prepara cajas.', fa: 'به جنوب، کنار آب برو. خانم کلارا از صلیب سرخ آنجا بسته‌ها را آماده می‌کند.' }
      ]
    },
    action: {
      type: 'trade',
      trader: {
        x: 24, y: 14,
        name: { en: 'Miss Clara', es: 'Señorita Clara', fa: 'خانم کلارا' },
        role: { en: 'Red Cross volunteer', es: 'Voluntaria de la Cruz Roja', fa: 'رضاکار صلیب سرخ' },
        look: { skin: 1, hair: '#c89a5a', shirt: '#f2f2f2', pants: '#8a2a2a', style: 'bun' },
        lines: [
          { en: 'I pack boxes for the ships to France. They cross a cold, wide ocean.', es: 'Preparo cajas para los barcos a Francia. Cruzan un océano frío y ancho.', fa: 'من برای کشتی‌های فرانسه بسته آماده می‌کنم. آن‌ها از یک بحر سرد و پهن می‌گذرند.' }
        ]
      },
      q: { en: 'Soldiers in France stand in cold, wet trenches. What helps them most? Bring it to me.', es: 'Los soldados en Francia están en trincheras frías y mojadas. ¿Qué les ayuda más? Tráemelo.', fa: 'سربازان در فرانسه در خندق‌های سرد و تر ایستاده‌اند. چه چیزی بیشتر کمک می‌کند؟ پیش من بیاور.' },
      choices: [
        { ok: true, at: [19, 8], icon: '🧦', t: { en: 'A pair of wool socks', es: 'Un par de medias de lana', fa: 'یک جوره جوراب پشمی' },
          why: { en: 'Yes! Wet feet got sick in the trenches. Volunteers knitted millions of warm socks.', es: '¡Sí! Los pies mojados se enfermaban en las trincheras. Voluntarios tejieron millones de medias.', fa: 'بله! پاهای تر در خندق مریض می‌شد. رضاکاران میلیون‌ها جوراب گرم بافتند.' } },
        { at: [27, 13], icon: '🍑', t: { en: 'A basket of fresh peaches', es: 'Una canasta de duraznos frescos', fa: 'یک سبد شفتالوی تازه' },
          why: { en: 'The trip across the ocean takes about two weeks. Fresh peaches would rot.', es: 'El viaje por el océano dura unas dos semanas. Los duraznos se pudrirían.', fa: 'سفر از بحر حدود دو هفته طول می‌کشد. شفتالوی تازه خراب می‌شود.' } },
        { at: [6, 10], icon: '👒', t: { en: 'A straw summer hat', es: 'Un sombrero de paja de verano', fa: 'یک کلاه کاهی تابستانی' },
          why: { en: 'France in fall and winter is cold and rainy. A straw hat will not keep him warm.', es: 'Francia en otoño e invierno es fría y lluviosa. Un sombrero de paja no da calor.', fa: 'فرانسه در خزان و زمستان سرد و بارانی است. کلاه کاهی گرمش نمی‌کند.' } }
      ],
      item: { icon: '🧦', name: { en: 'A pair of wool socks', es: 'Un par de medias de lana', fa: 'یک جوره جوراب پشمی' } }
    }
  },

  scraps: [[1, 1], [30, 8], [3, 19]],
  smudges: [[11, 8], [29, 13]],

  challenge: {
    at: [8, 13],
    type: 'levers', // in the world; the card version (combo) is the fallback
    // three levers by the shipyard, one for each part of the peace story
    spots: [[3, 13], [5, 14], [11, 14]],
    stat: 'loc',
    title: { en: 'The Story of the Peace', es: 'La historia de la paz', fa: 'داستان صلح' },
    intro: { en: 'The war ended in 1918. The Grump mixed up the peace that came after. Set each lever to what really happened, then test it at the stone.',
      es: 'La guerra terminó en 1918. El Gruñón revolvió la paz que vino después. Pon cada palanca en lo que pasó de verdad y pruébalo en la piedra.',
      fa: 'جنگ در ۱۹۱۸ تمام شد. غرغرو صلحی را که بعد آمد به هم زد. هر دسته را به آنچه واقعاً شد بگذار، بعد کنار سنگ امتحان کن.' },
    switches: [
      { name: { en: 'What Wilson wanted most', es: 'Lo que Wilson más quería', fa: 'آنچه ویلسن بیشتر از همه می‌خواست' }, icon: '🕊️', start: 1,
        states: [{ en: 'A League of Nations', es: 'Una Sociedad de Naciones', fa: 'یک جامعهٔ ملل' }, { en: 'Huge payments from Germany', es: 'Pagos enormes de Alemania', fa: 'پول بسیار زیاد از آلمان' }] },
      { name: { en: 'What the treaty did to Germany', es: 'Lo que el tratado le hizo a Alemania', fa: 'آنچه پیمان با آلمان کرد' }, icon: '📜', start: 0,
        states: [{ en: 'Gentle: no blame, no payments', es: 'Suave: sin culpa ni pagos', fa: 'نرم: بی‌گناه، بی‌پرداخت' }, { en: 'Harsh: blame and big payments', es: 'Duro: culpa y pagos grandes', fa: 'سخت: گناه و پرداخت‌های بزرگ' }] },
      { name: { en: 'What the US Senate did', es: 'Lo que hizo el Senado de EE. UU.', fa: 'آنچه سنای امریکا کرد' }, icon: '🏛️', start: 0,
        states: [{ en: 'Ratified the treaty', es: 'Ratificó el tratado', fa: 'پیمان را تصویب کرد' }, { en: 'Refused the treaty', es: 'Rechazó el tratado', fa: 'پیمان را رد کرد' }] }
    ],
    results: {
      '0,1,1': { ok: true,
        t: { en: 'That is what happened! Wilson wanted a League. The treaty was harsh on Germany. The Senate said no.', es: '¡Eso fue lo que pasó! Wilson quería una Sociedad. El tratado fue duro con Alemania. El Senado dijo que no.', fa: 'همین شد! ویلسن جامعهٔ ملل می‌خواست. پیمان با آلمان سخت بود. سنا نه گفت.' },
        show: [{ icon: '🕊️', ok: true, t: { en: 'Wilson: a League of Nations', es: 'Wilson: una Sociedad de Naciones', fa: 'ویلسن: جامعهٔ ملل' } }, { icon: '📜', ok: true, t: { en: 'Germany: blame and payments', es: 'Alemania: culpa y pagos', fa: 'آلمان: گناه و پرداخت' } }, { icon: '🏛️', ok: true, t: { en: 'Senate: refused', es: 'Senado: rechazó', fa: 'سنا: رد کرد' } }] },
      '1,1,1': { ok: false,
        t: { en: 'Wilson did not want to punish Germany hard. France and Britain wanted big payments. Wilson wanted a League.', es: 'Wilson no quería castigar duro a Alemania. Francia y Gran Bretaña querían pagos grandes. Wilson quería una Sociedad.', fa: 'ویلسن نمی‌خواست آلمان را سخت جزا بدهد. فرانسه و بریتانیا پرداخت‌های بزرگ می‌خواستند. ویلسن جامعهٔ ملل می‌خواست.' },
        show: [{ icon: '🕊️', ok: false, t: { en: 'Wilson: check his Fourteen Points', es: 'Wilson: revisa sus Catorce Puntos', fa: 'ویلسن: چهارده نکته‌اش را ببین' } }, { icon: '📜', ok: true, t: { en: 'Germany: blame and payments', es: 'Alemania: culpa y pagos', fa: 'آلمان: گناه و پرداخت' } }, { icon: '🏛️', ok: true, t: { en: 'Senate: refused', es: 'Senado: rechazó', fa: 'سنا: رد کرد' } }] },
      '0,0,1': { ok: false,
        t: { en: 'The treaty was not gentle. Germany had to take the blame for the war and pay huge sums.', es: 'El tratado no fue suave. Alemania tuvo que aceptar la culpa de la guerra y pagar sumas enormes.', fa: 'پیمان نرم نبود. آلمان باید گناه جنگ را می‌پذیرفت و پول بسیار زیاد می‌پرداخت.' },
        show: [{ icon: '🕊️', ok: true, t: { en: 'Wilson: a League of Nations', es: 'Wilson: una Sociedad de Naciones', fa: 'ویلسن: جامعهٔ ملل' } }, { icon: '📜', ok: false, t: { en: 'Germany: not gentle at all', es: 'Alemania: nada suave', fa: 'آلمان: اصلاً نرم نبود' } }, { icon: '🏛️', ok: true, t: { en: 'Senate: refused', es: 'Senado: rechazó', fa: 'سنا: رد کرد' } }] },
      '0,1,0': { ok: false,
        t: { en: 'The Senate did not ratify the treaty. Many senators feared the League would pull America into wars.', es: 'El Senado no ratificó el tratado. Muchos senadores temían que la Sociedad metiera a EE. UU. en guerras.', fa: 'سنا پیمان را تصویب نکرد. بسیاری از سناتورها می‌ترسیدند جامعهٔ ملل امریکا را به جنگ‌ها بکشاند.' },
        show: [{ icon: '🕊️', ok: true, t: { en: 'Wilson: a League of Nations', es: 'Wilson: una Sociedad de Naciones', fa: 'ویلسن: جامعهٔ ملل' } }, { icon: '📜', ok: true, t: { en: 'Germany: blame and payments', es: 'Alemania: culpa y pagos', fa: 'آلمان: گناه و پرداخت' } }, { icon: '🏛️', ok: false, t: { en: 'Senate: it did not ratify', es: 'Senado: no ratificó', fa: 'سنا: تصویب نکرد' } }] }
    },
    otherwise: { ok: false,
      t: { en: 'More than one lever is wrong. Ask: what did Wilson want? What did Germany get? What did the Senate do?', es: 'Hay más de una palanca mal. Pregunta: ¿qué quería Wilson? ¿Qué recibió Alemania? ¿Qué hizo el Senado?', fa: 'بیش از یک دسته غلط است. بپرس: ویلسن چه می‌خواست؟ آلمان چه دید؟ سنا چه کرد؟' },
      show: [{ icon: '❓', ok: false, t: { en: 'The story does not match', es: 'La historia no coincide', fa: 'داستان جور نمی‌آید' } }] },
    success: { en: 'The peace story is right again! Wilson wanted a League of Nations, but the treaty was harsh, and the Senate refused it. America never joined the League.',
      es: '¡La historia de la paz está bien otra vez! Wilson quería una Sociedad de Naciones, pero el tratado fue duro y el Senado lo rechazó. Estados Unidos nunca entró en la Sociedad.',
      fa: 'داستان صلح دوباره درست شد! ویلسن جامعهٔ ملل می‌خواست، اما پیمان سخت بود و سنا آن را رد کرد. امریکا هرگز عضو جامعهٔ ملل نشد.' }
  },

  boss: {
    at: [24, 12],
    stat: 'reg',
    need: 3,
    name: { en: 'The Storm Grump', es: 'El Gruñón de la Tormenta', fa: 'غرغروی طوفان' },
    appear: { en: 'The Storm Grump is hiding in the fog by the warehouses!', es: '¡El Gruñón de la Tormenta se esconde en la niebla junto a los almacenes!', fa: 'غرغروی طوفان در مه کنار گدام‌ها پنهان است!' },
    taunt: { en: 'Wars end, and people forget why. Soon no one will remember them.', es: 'Las guerras terminan y la gente olvida por qué. Pronto nadie los recordará.', fa: 'جنگ‌ها تمام می‌شوند و مردم فراموش می‌کنند چرا. به زودی هیچ‌کس آن‌ها را به یاد نمی‌آورد.' },
    win: { en: 'The fog lifts off the harbor. Journal page 7.1 floats down into your hands.', es: 'La niebla se va del puerto. La página 7.1 del diario cae en tus manos.', fa: 'مه از روی بندر کنار می‌رود. صفحهٔ ۷.۱ روزنامچه به دستت می‌افتد.' },
    questions: [
      { q: { en: 'Which four long-term causes led to World War I?', es: '¿Qué cuatro causas de largo plazo llevaron a la Primera Guerra Mundial?', fa: 'کدام چهار علت درازمدت به جنگ جهانی اول انجامید؟' },
        choices: [
          { en: 'Militarism, alliances, imperialism, nationalism', es: 'Militarismo, alianzas, imperialismo, nacionalismo', fa: 'نظامی‌گری، اتحادها، امپریالیزم، ملی‌گرایی' },
          { en: 'Slavery, tariffs, gold rushes and railroads', es: 'Esclavitud, aranceles, fiebres del oro y ferrocarriles', fa: 'برده‌داری، تعرفه‌ها، هجوم طلا و خط‌های ریل' },
          { en: 'Floods, droughts, the flu and bad harvests', es: 'Inundaciones, sequías, la gripe y malas cosechas', fa: 'سیلاب، خشکسالی، زکام و حاصل‌های بد' },
          { en: 'Elections, taxes, new schools and big new cities', es: 'Elecciones, impuestos, escuelas nuevas y ciudades grandes y nuevas', fa: 'انتخابات، مالیه، مکتب‌های نو و شهرهای بزرگ و نو' }],
        answer: 0,
        why: { en: 'Big armies, alliances, the race for colonies and strong national pride built up for years.', es: 'Ejércitos grandes, alianzas, la carrera por colonias y un fuerte orgullo nacional crecieron por años.', fa: 'اردوهای بزرگ، اتحادها، مسابقه برای مستعمره و غرور ملی شدید سال‌ها بزرگ شد.' } },
      { q: { en: 'What event was the spark that started the war in 1914?', es: '¿Qué hecho fue la chispa que empezó la guerra en 1914?', fa: 'کدام رویداد جرقه‌ای بود که جنگ را در ۱۹۱۴ شروع کرد؟' },
        choices: [
          { en: 'The killing of Archduke Franz Ferdinand', es: 'El asesinato del archiduque Francisco Fernando', fa: 'کشته شدن آرشیدوک فرانتس فردیناند' },
          { en: 'The sinking of the ship Lusitania', es: 'El hundimiento del barco Lusitania', fa: 'غرق شدن کشتی لوسیتانیا' },
          { en: 'The Zimmermann Telegram sent to Mexico City', es: 'El telegrama Zimmermann enviado a Ciudad de México', fa: 'تلگرام زیمرمن که به شهر مکسیکو فرستاده شد' },
          { en: 'A big flu outbreak in a city', es: 'Un gran brote de gripe en una ciudad', fa: 'پخش شدن بزرگ زکام در یک شهر' }],
        answer: 0,
        why: { en: 'In June 1914, the heir to Austria-Hungary\'s throne was killed. Alliances turned it into a world war.', es: 'En junio de 1914 mataron al heredero del trono de Austria-Hungría. Las alianzas lo volvieron guerra mundial.', fa: 'در جون ۱۹۱۴، ولیعهد اتریش-هنگری کشته شد. اتحادها آن را جنگ جهانی ساختند.' } },
      { q: { en: 'What pulled the United States into the war in 1917?', es: '¿Qué metió a Estados Unidos en la guerra en 1917?', fa: 'چه چیزی امریکا را در ۱۹۱۷ به جنگ کشاند؟' },
        choices: [
          { en: 'Submarine attacks and a secret telegram', es: 'Ataques de submarinos y un telegrama secreto', fa: 'حملهٔ زیردریایی و یک تلگرام پنهانی' },
          { en: 'A German army marching into Texas', es: 'Un ejército alemán que entró en Texas', fa: 'اردوی آلمان که به تکزاس آمد' },
          { en: 'A promise to help Austria-Hungary win the war', es: 'Una promesa de ayudar a Austria-Hungría a ganar la guerra', fa: 'وعدهٔ کمک به اتریش-هنگری برای بردن جنگ' },
          { en: 'A plan to take colonies in Africa', es: 'Un plan para tomar colonias en África', fa: 'نقشه‌ای برای گرفتن مستعمره در افریقا' }],
        answer: 0,
        why: { en: 'German submarines sank ships, and the Zimmermann Telegram asked Mexico to attack the US.', es: 'Los submarinos alemanes hundieron barcos, y el telegrama Zimmermann le pidió a México atacar a EE. UU.', fa: 'زیردریایی‌های آلمانی کشتی‌ها را غرق کردند و تلگرام زیمرمن از مکسیکو خواست به امریکا حمله کند.' } },
      { q: { en: 'What did the Selective Service Act of 1917 do?', es: '¿Qué hizo la Ley de Servicio Selectivo de 1917?', fa: 'قانون خدمت انتخابی سال ۱۹۱۷ چه کرد؟' },
        choices: [
          { en: 'It drafted men into the army', es: 'Reclutó hombres para el ejército', fa: 'مردان را به زور به اردو برد' },
          { en: 'It let women vote in elections', es: 'Dejó votar a las mujeres', fa: 'به زنان حق رأی داد' },
          { en: 'It paid farmers to grow more food', es: 'Pagó a granjeros por más comida', fa: 'به دهقانان برای غذای بیشتر پول داد' },
          { en: 'It closed all ports to ships', es: 'Cerró todos los puertos a los barcos', fa: 'همهٔ بندرها را به کشتی‌ها بست' }],
        answer: 0,
        why: { en: 'The draft made millions of young men sign up. Many were sent to fight in France.', es: 'El reclutamiento obligó a millones de jóvenes a inscribirse. Muchos fueron a pelear en Francia.', fa: 'سربازگیری اجباری میلیون‌ها مرد جوان را به نام‌نویسی واداشت. بسیاری برای جنگ به فرانسه رفتند.' } },
      { q: { en: 'What did the Espionage and Sedition Acts do at home?', es: '¿Qué hicieron en casa las leyes de Espionaje y Sedición?', fa: 'قانون‌های جاسوسی و فتنه در داخل کشور چه کردند؟' },
        choices: [
          { en: 'They limited speech against the war', es: 'Limitaron hablar contra la guerra', fa: 'حرف زدن ضد جنگ را محدود کردند' },
          { en: 'They gave every family free bread', es: 'Dieron pan gratis a cada familia', fa: 'به هر خانواده نان مفت دادند' },
          { en: 'They ended the draft for all men', es: 'Acabaron el reclutamiento para todos', fa: 'سربازگیری را برای همه تمام کردند' },
          { en: 'They built new piers in Virginia', es: 'Construyeron muelles nuevos en Virginia', fa: 'بندرگاه‌های نو در ویرجینیا ساختند' }],
        answer: 0,
        why: { en: 'These laws made it a crime to speak against the war or the draft. Some people went to jail.', es: 'Estas leyes volvieron delito hablar contra la guerra o el reclutamiento. Algunos fueron a la cárcel.', fa: 'این قانون‌ها حرف زدن ضد جنگ یا سربازگیری را جرم ساخت. بعضی‌ها زندانی شدند.' } },
      { q: { en: 'What was the Great Migration?', es: '¿Qué fue la Gran Migración?', fa: 'کوچ بزرگ چه بود؟' },
        choices: [
          { en: 'Black Americans moving to Northern cities', es: 'Afroamericanos que se mudaron a ciudades del Norte', fa: 'کوچ امریکایی‌های سیاه‌پوست به شهرهای شمال' },
          { en: 'Soldiers sailing home after the war', es: 'Soldados que volvían a casa después de la guerra', fa: 'سربازانی که بعد از جنگ به خانه برگشتند' },
          { en: 'Farmers moving west to dig for gold in the hills', es: 'Granjeros que iban al oeste a buscar oro en los cerros', fa: 'دهقانانی که برای کندن طلا به تپه‌های غرب رفتند' },
          { en: 'Germans moving to Mexico in 1917', es: 'Alemanes que se mudaron a México en 1917', fa: 'آلمانی‌هایی که در ۱۹۱۷ به مکسیکو رفتند' }],
        answer: 0,
        why: { en: 'Millions of Black Southerners moved north for factory jobs and to escape unfair laws.', es: 'Millones de afroamericanos del Sur se mudaron al norte por trabajo y para escapar de leyes injustas.', fa: 'میلیون‌ها سیاه‌پوست جنوب برای کار در فابریکه و دوری از قانون‌های ناعادلانه به شمال رفتند.' } },
      { q: { en: 'Wilson\'s Fourteen Points asked for open talks, free seas, self-rule and what else?', es: 'Los Catorce Puntos de Wilson pedían diálogo abierto, mares libres, autogobierno y ¿qué más?', fa: 'چهارده نکتهٔ ویلسن گفتگوی آشکار، بحرهای آزاد، خودمختاری و دیگر چه می‌خواست؟' },
        choices: [
          { en: 'A League of Nations', es: 'Una Sociedad de Naciones', fa: 'یک جامعهٔ ملل' },
          { en: 'A bigger army for every nation', es: 'Un ejército más grande para cada país', fa: 'اردوی بزرگ‌تر برای هر کشور' },
          { en: 'New colonies for the winners', es: 'Colonias nuevas para los ganadores', fa: 'مستعمره‌های نو برای برندگان' },
          { en: 'Secret deals between kings', es: 'Tratos secretos entre reyes', fa: 'معامله‌های پنهانی میان پادشاهان' }],
        answer: 0,
        why: { en: 'Wilson hoped a League of Nations would let countries solve problems by talking, not fighting.', es: 'Wilson esperaba que una Sociedad de Naciones ayudara a resolver problemas hablando, no peleando.', fa: 'ویلسن امید داشت جامعهٔ ملل به کشورها کمک کند مشکلات را با گپ حل کنند، نه با جنگ.' } },
      { q: { en: 'What did the US Senate do with the Treaty of Versailles?', es: '¿Qué hizo el Senado de EE. UU. con el Tratado de Versalles?', fa: 'سنای امریکا با پیمان ورسای چه کرد؟' },
        choices: [
          { en: 'It refused to ratify it', es: 'Se negó a ratificarlo', fa: 'از تصویب آن انکار کرد' },
          { en: 'It signed it on the first day', es: 'Lo firmó el primer día', fa: 'روز اول امضا کرد' },
          { en: 'It made the payments bigger', es: 'Hizo los pagos más grandes', fa: 'پرداخت‌ها را بزرگ‌تر کرد' },
          { en: 'It moved the League to Virginia', es: 'Llevó la Sociedad a Virginia', fa: 'جامعهٔ ملل را به ویرجینیا برد' }],
        answer: 0,
        why: { en: 'The Senate refused, and the US never joined the League. America turned toward isolationism.', es: 'El Senado se negó, y EE. UU. nunca entró en la Sociedad. El país se volvió aislacionista.', fa: 'سنا رد کرد و امریکا هرگز عضو جامعهٔ ملل نشد. امریکا به انزواطلبی رو آورد.' } }
    ]
  },

  learned: [
    { en: '[[militarism|Militarism]], [[alliance|alliances]], [[imperialism|imperialism]] and [[nationalism|nationalism]] caused the war. A killing in 1914 was the spark.', es: 'El [[militarism|militarismo]], las [[alliance|alianzas]], el [[imperialism|imperialismo]] y el [[nationalism|nacionalismo]] causaron la guerra. Un asesinato en 1914 fue la chispa.', fa: '[[militarism|نظامی‌گری]]، [[alliance|اتحادها]]، [[imperialism|امپریالیزم]] و [[nationalism|ملی‌گرایی]] باعث جنگ شدند. یک قتل در ۱۹۱۴ جرقه بود.' },
    { en: 'The US joined in 1917 after [[submarine|submarine]] attacks and the Zimmermann Telegram. At home, people bought bonds, women took new jobs, and many moved north.', es: 'EE. UU. entró en 1917 tras los ataques de [[submarine|submarinos]] y el telegrama Zimmermann. En casa, la gente compró bonos, las mujeres tomaron trabajos nuevos y muchos se mudaron al norte.', fa: 'امریکا در ۱۹۱۷ بعد از حمله‌های [[submarine|زیردریایی]] و تلگرام زیمرمن وارد جنگ شد. در داخل، مردم اوراق خریدند، زنان کارهای نو گرفتند و بسیاری به شمال کوچ کردند.' },
    { en: 'Wilson wanted a [[league of nations|League of Nations]]. The [[treaty of versailles|Treaty of Versailles]] was harsh on Germany. The Senate refused it, and [[isolationism|isolationism]] followed.', es: 'Wilson quería una [[league of nations|Sociedad de Naciones]]. El [[treaty of versailles|Tratado de Versalles]] fue duro con Alemania. El Senado lo rechazó y siguió el [[isolationism|aislacionismo]].', fa: 'ویلسن [[league of nations|جامعهٔ ملل]] می‌خواست. [[treaty of versailles|پیمان ورسای]] با آلمان سخت بود. سنا آن را رد کرد و [[isolationism|انزواطلبی]] آمد.' }
  ],
  reflect: {
    q: { en: 'In 1918, people at home helped in many ways. How do people in your community help in hard times?', es: 'En 1918, la gente en casa ayudó de muchas formas. ¿Cómo ayuda la gente de tu comunidad en tiempos difíciles?', fa: 'در ۱۹۱۸، مردم در وطن به راه‌های زیادی کمک کردند. مردم محلهٔ تو در روزهای سخت چطور کمک می‌کنند؟' },
    starter: { en: 'In hard times, people in my community', es: 'En tiempos difíciles, la gente de mi comunidad', fa: 'در روزهای سخت، مردم محلهٔ من' }
  }
};
