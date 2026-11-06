/* TIMEWALKER · Episode 6.1 · World War I (WHII)
   A French village far behind the front lines near the Somme, summer 1916. No fighting is shown here.
   North-west: the village (houses, the square, the post). North-east: a field hospital (two buildings and ward huts).
   South-west: a farm run by the women of the village (wheat, potatoes, the well).
   South-east: the supply depot by the railway, where workers from China and soldiers from the colonies pass through.
   Hard topic: plain, serious words; the boss is The Forgetting; the quest returns a soldier's letter to the post. */
window.EPISODE = {
  id: '6.1',
  realm: 6,
  sol: 'WHII',
  title: { en: 'World War I', es: 'La Primera Guerra Mundial', fa: 'جنگ جهانی اول' },
  place: { en: 'Behind the lines in France, 1916', es: 'Detrás del frente en Francia, 1916', fa: 'پشت خط جنگ در فرانسه، ۱۹۱۶' },
  intro: [
    { en: 'The Grump blurred the [[world war i|World War I]] page. People forget what the war cost.',
      es: 'El Gruñón borró la página de la [[world war i|Primera Guerra Mundial]]. La gente olvida lo que costó la guerra.',
      fa: 'غرغرو صفحهٔ [[world war i|جنگ جهانی اول]] را تار کرد. مردم فراموش می‌کنند این جنگ چه بهایی داشت.' },
    { en: 'We are far behind the front. Talk to 3 people, then fix the time stone.',
      es: 'Estamos lejos, detrás del frente. Habla con 3 personas y luego arregla la piedra del tiempo.',
      fa: 'ما دور از خط جنگ هستیم. با ۳ نفر گپ بزن، بعد سنگ زمان را درست کن.' }
  ],
  /* cut scenes: northern France on the world map, 1916 on the timeline */
  scenes: {
    at: [2.7, 50],
    year: 1916,
    start: [
      { en: 'In 1914, a great war began in Europe. It lasted four years.',
        es: 'En 1914 empezó una gran guerra en Europa. Duró cuatro años.',
        fa: 'در سال ۱۹۱۴ یک جنگ بزرگ در اروپا شروع شد. چهار سال طول کشید.' },
      { en: 'People called it the Great War. Today we call it World War I.',
        es: 'La gente la llamó la Gran Guerra. Hoy la llamamos la Primera Guerra Mundial.',
        fa: 'مردم آن را جنگ بزرگ نامیدند. امروز آن را جنگ جهانی اول می‌نامیم.' },
      { en: 'Soldiers and workers came from Europe, Africa, Asia and the Americas.',
        es: 'Llegaron soldados y trabajadores de Europa, África, Asia y América.',
        fa: 'سربازان و کارگران از اروپا، افریقا، آسیا و امریکا آمدند.' }
    ],
    page: { en: 'About 9 million soldiers died in the war. Millions of other people died too.',
      es: 'Unos 9 millones de soldados murieron en la guerra. Millones de otras personas también murieron.',
      fa: 'حدود ۹ میلیون سرباز در این جنگ کشته شدند. میلیون‌ها نفر دیگر هم مردند.' },
    guess: {
      q: { en: 'The war began in Europe. Did it stay only in Europe?', es: 'La guerra empezó en Europa. ¿Se quedó solo en Europa?', fa: 'جنگ در اروپا شروع شد. آیا فقط در اروپا ماند؟' },
      choices: [
        { t: { en: 'No, it spread wider', es: 'No, llegó más lejos', fa: 'نه، دورتر رسید' }, ok: true },
        { t: { en: 'Yes, only in Europe', es: 'Sí, solo en Europa', fa: 'بله، فقط در اروپا' } }
      ],
      why: { en: 'There was fighting in Africa and the Middle East. People came from every continent.', es: 'Hubo combates en África y en el Medio Oriente. Llegó gente de todos los continentes.', fa: 'در افریقا و شرق میانه هم جنگ شد. مردم از همهٔ قاره‌ها آمدند.' }
    },
    next: {
      q: { en: 'Next: Russia, 1917. The war went badly and food ran out. What happened?', es: 'Ahora: Rusia, 1917. La guerra iba mal y faltaba comida. ¿Qué pasó?', fa: 'بعدی: روسیه، ۱۹۱۷. جنگ خراب پیش رفت و غذا تمام شد. چه شد؟' },
      choices: [
        { t: { en: 'People rose up', es: 'El pueblo se levantó', fa: 'مردم قیام کردند' }, ok: true },
        { t: { en: 'Nothing changed', es: 'Nada cambió', fa: 'هیچ چیز تغییر نکرد' } }
      ],
      why: { en: 'In 1917, protests and strikes in Petrograd ended the rule of the tsar.', es: 'En 1917, las protestas y huelgas en Petrogrado acabaron con el gobierno del zar.', fa: 'در سال ۱۹۱۷، مظاهره‌ها و اعتصاب‌ها در پتروگراد به حکومت تزار پایان دادند.' }
    }
  },
  /* houses: who lives behind each door */
  houses: [
    { at: [4, 2], name: { en: 'Madame Leroux', es: 'Madame Leroux', fa: 'خانم لورو' },
      look: { skin: 1, hair: '#8a8a8a', shirt: '#6a3a4a', pants: '#2a2a2a', style: 'bun' },
      lines: [
        { en: 'I bake bread for the village. Flour is hard to find now.', es: 'Hago pan para el pueblo. Ahora cuesta mucho encontrar harina.', fa: 'من برای قریه نان می‌پزم. حالا پیدا کردن آرد سخت است.' },
        { en: 'Soldiers rest here before they go back. They are so young.', es: 'Los soldados descansan aquí antes de volver. Son tan jóvenes.', fa: 'سربازان پیش از برگشتن اینجا استراحت می‌کنند. خیلی جوان هستند.' }
      ] },
    { at: [11, 2], name: { en: 'Monsieur Petit', es: 'Monsieur Petit', fa: 'آقای پتی' },
      look: { skin: 1, hair: '#d8d8d8', shirt: '#3a4a6a', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'I am old, so I teach the children now. Their teacher went to war.', es: 'Soy viejo, así que ahora enseño a los niños. Su maestro se fue a la guerra.', fa: 'من پیر هستم، پس حالا به اطفال درس می‌دهم. معلم‌شان به جنگ رفت.' },
        { en: 'Every day the newspaper says the battle at Verdun goes on.', es: 'Cada día el periódico dice que la batalla de Verdún sigue.', fa: 'هر روز روزنامه می‌نویسد که جنگ وردن هنوز ادامه دارد.' }
      ] },
    { at: [20, 2], name: { en: 'Private Louis', es: 'Soldado Louis', fa: 'سرباز لویی' },
      look: { skin: 2, hair: '#3a2416', shirt: '#7a8aa8', pants: '#5a6a8a', style: 'short' },
      lines: [
        { en: 'I am from Lyon. My arm is getting better in this hospital.', es: 'Soy de Lyon. Mi brazo se está curando en este hospital.', fa: 'من از لیون هستم. بازویم در این شفاخانه بهتر می‌شود.' },
        { en: 'Nurse Marguerite wrote my last letter home for me.', es: 'La enfermera Marguerite escribió por mí mi última carta a casa.', fa: 'نرس مارگریت آخرین نامه‌ام را برایم به خانه نوشت.' }
      ] },
    { at: [26, 2], name: { en: 'Doctor Bernard', es: 'Doctor Bernard', fa: 'داکتر برنار' },
      look: { skin: 3, hair: '#2a2a2a', shirt: '#f2f2f2', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'Ambulances bring the sick and hurt here, far from the fighting.', es: 'Las ambulancias traen aquí a los enfermos y heridos, lejos de los combates.', fa: 'امبولانس‌ها مریض‌ها و زخمی‌ها را دور از جنگ به اینجا می‌آورند.' },
        { en: 'Many soldiers get sick from the cold, wet [[trench|trenches]].', es: 'Muchos soldados se enferman por las [[trench|trincheras]] frías y mojadas.', fa: 'بسیاری از سربازان از [[trench|خندق‌های]] سرد و تر مریض می‌شوند.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     NW (x 0-15, y 0-10): the village. Two houses (R over h), the square (l) with the village sign, a dirt road (:).
     NE (x 16-31, y 0-10): the field hospital. Two buildings (Q over h) and four ward huts (J).
     SW (x 0-15, y 11-21): the farm. Wheat (w), potatoes (v) and the well (O).
     SE (x 16-31, y 11-21): the supply depot. Sheds (J), stacks of crates (m) and the railway (row 15). */
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT',
    'T..RRR....RRR..T..QQQQ...QQQQ..T',
    'T..hdh....hdh..T..hhdh...hdhh..T',
    'T...:......:.......:.....:.....T',
    'T.::::::::::::::::::::::::::...T',
    'T.:...llll.....T...............T',
    'T.:..lllxl..,..T..JJJ...JJJ....T',
    'T.:...llll.....T..JJJ.x.JJJ..,.T',
    'T.:..T.......,.T...............T',
    'T.:............................T',
    'T.:............T....:..........T',
    'T.:............T....:..........T',
    'T.:.wwwww......T..JJJJ.........T',
    'T.:.wwwww...O..T..JJJJ..mmm....T',
    'T.:.wwwww......T...............T',
    'T.:.............---------------T',
    'T.:.vvvv..wwww.T.....x.........T',
    'T.:.vvvv..wwww.T..mmm....mmm...T',
    'T.:.......wwww.T...............T',
    'T.:::::::......T..JJJ.....,....T',
    'T..............T...............T',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT'
  ],
  start: [3, 9],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [14, 11], at: [14, 19], decor: 'flower',
      clue: { en: 'From this note, walk 8 steps south, to the corner of the farm.', es: 'Desde esta nota, camina 8 pasos al sur, hasta la esquina de la granja.', fa: 'از این یادداشت، ۸ قدم به جنوب برو، تا کنج فارم.' },
      text: { en: 'Red [[poppy|poppies]] grew on the old battle lands. Today people wear poppies to remember.', es: 'Las [[poppy|amapolas]] rojas crecieron en los viejos campos de batalla. Hoy la gente las lleva para recordar.', fa: '[[poppy|گل‌های لالهٔ]] سرخ در میدان‌های جنگ کهنه روییدند. امروز مردم برای یادبود آن‌ها را می‌پوشند.' } },
    { clueAt: [29, 8], at: [29, 4], decor: 'coinold',
      clue: { en: 'From this note, walk 4 steps north. Look by the hospital road.', es: 'Desde esta nota, camina 4 pasos al norte. Busca junto al camino del hospital.', fa: 'از این یادداشت، ۴ قدم به شمال برو. کنار سرک شفاخانه را ببین.' },
      text: { en: 'A French coin from 1916. Prices rose fast in the war, so coins bought less.', es: 'Una moneda francesa de 1916. Los precios subieron rápido en la guerra y las monedas compraban menos.', fa: 'یک سکهٔ فرانسوی از ۱۹۱۶. در جنگ قیمت‌ها زود بالا رفت، پس سکه‌ها کمتر می‌خریدند.' } }
  ],

  words: {
    'world war i': { en: 'the great war from 1914 to 1918, fought by many countries', es: 'la gran guerra de 1914 a 1918, en la que lucharon muchos países', fa: 'جنگ بزرگ از ۱۹۱۴ تا ۱۹۱۸ که کشورهای زیادی در آن جنگیدند' },
    trench: { en: 'a long, deep ditch where soldiers lived and hid from bullets', es: 'una zanja larga y honda donde los soldados vivían y se protegían de las balas', fa: 'یک کندهٔ دراز و عمیق که سربازان در آن زندگی می‌کردند و از گلوله پنهان می‌شدند' },
    alliance: { en: 'a promise between countries to help each other in a war', es: 'una promesa entre países de ayudarse en una guerra', fa: 'پیمانی میان کشورها که در جنگ به همدیگر کمک کنند' },
    colony: { en: 'a land ruled by a faraway country', es: 'una tierra gobernada por un país lejano', fa: 'سرزمینی که یک کشور دور بر آن حکومت می‌کند' },
    tirailleur: { en: 'a soldier from a French colony in Africa (a French word)', es: 'un soldado de una colonia francesa en África (palabra francesa)', fa: 'سربازی از یک مستعمرهٔ فرانسه در افریقا (یک کلمهٔ فرانسوی)' },
    'total war': { en: 'a war where a whole country, its farms, factories and people, works for the war', es: 'una guerra en la que todo un país, sus granjas, fábricas y gente, trabaja para la guerra', fa: 'جنگی که در آن تمام کشور، فارم‌ها، فابریکه‌ها و مردمش برای جنگ کار می‌کنند' },
    armistice: { en: 'an agreement to stop fighting', es: 'un acuerdo para dejar de pelear', fa: 'توافق برای بس کردن جنگ' },
    'primary source': { en: 'something made by people who lived at that time, like a letter or a photo', es: 'algo hecho por personas de esa época, como una carta o una foto', fa: 'چیزی که مردم همان زمان ساخته‌اند، مثل یک نامه یا یک عکس' },
    reparations: { en: 'money a country must pay for damage done in a war', es: 'dinero que un país debe pagar por los daños de una guerra', fa: 'پولی که یک کشور باید برای خرابی‌های جنگ بپردازد' },
    poppy: { en: 'a red flower; people wear it to remember those who died in war', es: 'una flor roja; la gente la lleva para recordar a quienes murieron en la guerra', fa: 'یک گل سرخ؛ مردم آن را برای یاد کسانی که در جنگ مردند می‌پوشند' }
  },

  npcs: [
    {
      x: 22, y: 5,
      name: { en: 'Marguerite', es: 'Marguerite', fa: 'مارگریت' },
      role: { en: 'Nurse', es: 'Enfermera', fa: 'نرس' },
      look: { skin: 1, hair: '#5a3a20', shirt: '#f2f2f2', pants: '#3a4a6a', style: 'bun', hat: '#f2f2f2' },
      lines: [
        { en: 'Bonjour. I am a nurse in this field hospital, far behind the front.', es: 'Bonjour. Soy enfermera en este hospital de campaña, lejos del frente.', fa: 'بونژور. من نرس این شفاخانهٔ صحرایی هستم، دور از خط جنگ.' },
        { en: 'The front is a long line of [[trench|trenches]], from the sea to Switzerland.', es: 'El frente es una larga línea de [[trench|trincheras]], desde el mar hasta Suiza.', fa: 'خط جنگ یک قطار دراز [[trench|خندق‌ها]] است، از بحر تا سویس.' },
        { en: 'New weapons like machine guns made attacks very deadly. So both sides dug in.', es: 'Armas nuevas, como la ametralladora, hicieron los ataques muy mortales. Así que los dos lados cavaron.', fa: 'سلاح‌های نو مثل ماشیندار حمله را بسیار کشنده ساختند. پس هر دو طرف خندق کندند.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why did the armies stay in trenches for years?', es: '¿Por qué los ejércitos se quedaron años en las trincheras?', fa: 'چرا لشکرها سال‌ها در خندق‌ها ماندند؟' },
        choices: [
          { ok: true, t: { en: 'Machine guns made open ground too deadly', es: 'Las ametralladoras hacían mortal el campo abierto', fa: 'ماشیندار زمین باز را بسیار کشنده ساخت' },
            why: { en: 'Yes. Crossing open ground meant almost sure death, so both sides dug in.', es: 'Sí. Cruzar el campo abierto era casi una muerte segura, así que los dos lados cavaron.', fa: 'بله. گذشتن از زمین باز تقریباً مرگ حتمی بود، پس هر دو طرف خندق کندند.' } },
          { t: { en: 'The generals wanted to build new roads', es: 'Los generales querían construir caminos nuevos', fa: 'جنرال‌ها می‌خواستند سرک‌های نو بسازند' },
            why: { en: 'Trenches were not roads. Soldiers dug them to hide from bullets and shells.', es: 'Las trincheras no eran caminos. Los soldados las cavaban para protegerse de balas y bombas.', fa: 'خندق سرک نبود. سربازان آن را برای پنهان شدن از گلوله و مرمی کندند.' } },
          { t: { en: 'They waited for the snow to melt away', es: 'Esperaban a que se derritiera la nieve', fa: 'منتظر بودند تا برف آب شود' },
            why: { en: 'The trenches stayed in summer and winter. New weapons, not snow, kept them there.', es: 'Las trincheras siguieron en verano y en invierno. Las armas nuevas, no la nieve, los dejaron allí.', fa: 'خندق‌ها در تابستان و زمستان ماندند. سلاح‌های نو، نه برف، آن‌ها را آنجا نگه داشت.' } }
        ]
      }
    },
    {
      x: 24, y: 16,
      name: { en: 'Amadou', es: 'Amadou', fa: 'آمادو' },
      role: { en: 'Soldier from Senegal', es: 'Soldado de Senegal', fa: 'سرباز سنگالی' },
      look: { skin: 5, hair: '#120c08', shirt: '#4a5a8a', pants: '#4a5a8a', style: 'short', hat: '#c0392b' },
      lines: [
        { en: 'I am Amadou, from Senegal in West Africa. I am a [[tirailleur|tirailleur]].', es: 'Soy Amadou, de Senegal, en África occidental. Soy un [[tirailleur|tirailleur]].', fa: 'من آمادو هستم، از سنگال در غرب افریقا. من یک [[tirailleur|تیرایور]] هستم.' },
        { en: 'Senegal is a [[colony|colony]] of France. France brought many of us here.', es: 'Senegal es una [[colony|colonia]] de Francia. Francia trajo a muchos de nosotros aquí.', fa: 'سنگال [[colony|مستعمرهٔ]] فرانسه است. فرانسه بسیاری از ما را اینجا آورد.' },
        { en: 'Some of us chose to come. Many were forced to join.', es: 'Algunos elegimos venir. A muchos los obligaron a unirse.', fa: 'بعضی از ما خودمان آمدیم. بسیاری را به زور آوردند.' },
        { en: 'Men from India, Algeria and Vietnam serve too. Our part is often forgotten.', es: 'También sirven hombres de India, Argelia y Vietnam. Nuestra parte se olvida a menudo.', fa: 'مردانی از هند، الجزایر و ویتنام هم خدمت می‌کنند. سهم ما اکثراً فراموش می‌شود.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Why did soldiers from Africa and Asia serve in a war in Europe?', es: '¿Por qué soldados de África y Asia sirvieron en una guerra en Europa?', fa: 'چرا سربازان افریقا و آسیا در جنگی در اروپا خدمت کردند؟' },
        choices: [
          { ok: true, t: { en: 'Their lands were ruled by France or Britain', es: 'Sus tierras eran gobernadas por Francia o Gran Bretaña', fa: 'فرانسه یا بریتانیا بر سرزمین‌شان حکومت داشت' },
            why: { en: 'Yes. France and Britain ruled colonies, and they brought soldiers and workers from them.', es: 'Sí. Francia y Gran Bretaña gobernaban colonias y trajeron de allí soldados y trabajadores.', fa: 'بله. فرانسه و بریتانیا بر مستعمره‌ها حکومت داشتند و از آنجا سرباز و کارگر آوردند.' } },
          { t: { en: 'Their own countries had started the fighting', es: 'Sus propios países habían empezado la guerra', fa: 'کشورهای خودشان جنگ را شروع کرده بودند' },
            why: { en: 'The war started in Europe, between European powers. The colonies did not start it.', es: 'La guerra empezó en Europa, entre potencias europeas. Las colonias no la empezaron.', fa: 'جنگ در اروپا، میان قدرت‌های اروپایی شروع شد. مستعمره‌ها آن را شروع نکردند.' } },
          { t: { en: 'The army paid more than any other job there', es: 'El ejército pagaba más que cualquier otro trabajo de allí', fa: 'لشکر از هر کار دیگر بیشتر مزد می‌داد' },
            why: { en: 'The pay was low, and many men were forced to join. Colonial rule brought them.', es: 'La paga era baja y a muchos los obligaron. El gobierno colonial los trajo.', fa: 'مزد کم بود و بسیاری را به زور آوردند. حکومت استعماری آن‌ها را آورد.' } }
        ]
      }
    },
    {
      x: 3, y: 14,
      name: { en: 'Jeanne', es: 'Jeanne', fa: 'ژان' },
      role: { en: 'Farmer', es: 'Agricultora', fa: 'دهقان' },
      look: { skin: 2, hair: '#7a4a20', shirt: '#8a6a3a', pants: '#3a3a2a', style: 'long' },
      lines: [
        { en: 'My husband is at the front. Now I run this farm by myself.', es: 'Mi esposo está en el frente. Ahora yo sola llevo esta granja.', fa: 'شوهرم در خط جنگ است. حالا خودم تنها این فارم را اداره می‌کنم.' },
        { en: 'Women work on farms, in factories and in offices. Many make shells for the army.', es: 'Las mujeres trabajan en granjas, fábricas y oficinas. Muchas hacen bombas para el ejército.', fa: 'زنان در فارم‌ها، فابریکه‌ها و دفترها کار می‌کنند. بسیاری برای لشکر مرمی می‌سازند.' },
        { en: 'The whole country works for the war. People call it [[total war|total war]].', es: 'Todo el país trabaja para la guerra. La gente la llama [[total war|guerra total]].', fa: 'تمام کشور برای جنگ کار می‌کند. مردم آن را [[total war|جنگ همه‌جانبه]] می‌نامند.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'How did the war change work for many women?', es: '¿Cómo cambió la guerra el trabajo de muchas mujeres?', fa: 'جنگ کار بسیاری از زنان را چطور تغییر داد؟' },
        choices: [
          { ok: true, t: { en: 'They took jobs that men had done', es: 'Tomaron trabajos que hacían los hombres', fa: 'کارهایی را گرفتند که مردها می‌کردند' },
            why: { en: 'Yes. With men at the front, women ran farms and worked in factories.', es: 'Sí. Con los hombres en el frente, las mujeres llevaron granjas y trabajaron en fábricas.', fa: 'بله. وقتی مردها در جنگ بودند، زنان فارم‌ها را اداره کردند و در فابریکه‌ها کار کردند.' } },
          { t: { en: 'They had to stop working outside', es: 'Tuvieron que dejar de trabajar fuera', fa: 'مجبور شدند کار بیرون را بس کنند' },
            why: { en: 'It was the other way. More women worked outside the home than before.', es: 'Fue al revés. Más mujeres trabajaron fuera de casa que antes.', fa: 'برعکس بود. زنان بیشتری نسبت به قبل بیرون از خانه کار کردند.' } },
          { t: { en: 'They moved to the cities to rest', es: 'Se mudaron a las ciudades a descansar', fa: 'برای استراحت به شهرها رفتند' },
            why: { en: 'There was no rest. Women did the hard work that kept the country going.', es: 'No hubo descanso. Las mujeres hicieron el trabajo duro que mantuvo al país.', fa: 'استراحتی نبود. زنان کارهای سختی کردند که کشور را سرپا نگه داشت.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 8, y: 6, text: { en: 'A VILLAGE NEAR THE SOMME · 1916 · Soldiers rest here, far behind the front lines.', es: 'UN PUEBLO CERCA DEL SOMME · 1916 · Aquí descansan los soldados, lejos detrás del frente.', fa: 'قریه‌ای نزدیک سوم · ۱۹۱۶ · سربازان اینجا، دور از خط جنگ، استراحت می‌کنند.' } },
    { x: 22, y: 7, text: { en: 'FIELD HOSPITAL · Nurses and doctors care for the sick and hurt.', es: 'HOSPITAL DE CAMPAÑA · Enfermeras y médicos cuidan a los enfermos y heridos.', fa: 'شفاخانهٔ صحرایی · نرس‌ها و داکترها از مریض‌ها و زخمی‌ها مراقبت می‌کنند.' } },
    { x: 21, y: 16, text: { en: 'SUPPLY DEPOT · Trains bring food, medicine and mail for the army.', es: 'DEPÓSITO DE SUMINISTROS · Los trenes traen comida, medicinas y correo para el ejército.', fa: 'گدام تدارکات · قطارها برای لشکر غذا، دوا و نامه می‌آورند.' } }
  ],

  /* the quest: Simone the postwoman (gold !) in the village square -> Liu at the supply depot
     -> the lost letter in the wheat, 4 steps south of the farm well -> back to Simone */
  quest: {
    stat: 'hei',
    title: { en: 'The Lost Letter', es: 'La carta perdida', fa: 'نامهٔ گم‌شده' },
    giver: {
      x: 9, y: 5,
      name: { en: 'Simone', es: 'Simone', fa: 'سیمون' },
      role: { en: 'Village postwoman', es: 'Cartera del pueblo', fa: 'نامه‌رسان قریه' },
      look: { skin: 1, hair: '#2a1a10', shirt: '#2a4a7a', pants: '#2a2a3a', style: 'bun', hat: '#2a4a7a' },
      lines: [
        { en: 'Oh no! The wind took a soldier\'s letter from my mail bag.', es: '¡Ay, no! El viento se llevó la carta de un soldado de mi bolsa.', fa: 'وای! باد نامهٔ یک سرباز را از خلطهٔ نامه‌هایم برد.' },
        { en: 'It is for his mother. She waits for it every week.', es: 'Es para su madre. Ella la espera cada semana.', fa: 'برای مادرش است. او هر هفته منتظر آن است.' },
        { en: 'Liu works at the supply depot by the railway. He saw where it went.', es: 'Liu trabaja en el depósito junto al tren. Él vio adónde fue.', fa: 'لیو در گدام تدارکات کنار خط آهن کار می‌کند. او دید کجا رفت.' }
      ],
      wait: { en: 'Liu is at the supply depot, south-east of here, by the railway.', es: 'Liu está en el depósito, al sureste de aquí, junto al tren.', fa: 'لیو در گدام تدارکات است، جنوب شرق اینجا، کنار خط آهن.' },
      thanks: { en: 'Thank you! Letters are [[primary source|primary sources]]. Historians still read them today.', es: '¡Gracias! Las cartas son [[primary source|fuentes primarias]]. Los historiadores todavía las leen.', fa: 'تشکر! نامه‌ها [[primary source|منابع اصلی]] هستند. تاریخ‌دانان هنوز آن‌ها را می‌خوانند.' }
    },
    contact: {
      x: 27, y: 18,
      name: { en: 'Liu', es: 'Liu', fa: 'لیو' },
      role: { en: 'Worker from China', es: 'Trabajador de China', fa: 'کارگر چینایی' },
      look: { skin: 2, hair: '#120c08', shirt: '#5a6a4a', pants: '#3a3a2a', style: 'short', hat: '#3a4a3a' },
      lines: [
        { en: 'I am Liu. I came from China to work for France. I unload trains.', es: 'Soy Liu. Vine de China a trabajar para Francia. Descargo trenes.', fa: 'من لیو هستم. از چین آمدم تا برای فرانسه کار کنم. قطارها را خالی می‌کنم.' },
        { en: 'Many workers came from China and Vietnam to dig, build and carry.', es: 'Muchos trabajadores vinieron de China y Vietnam a cavar, construir y cargar.', fa: 'کارگران زیادی از چین و ویتنام آمدند تا بکنند، بسازند و بار ببرند.' },
        { en: 'The wind blew it west, to the farm. Look 4 steps south of the well.', es: 'El viento la llevó al oeste, a la granja. Busca 4 pasos al sur del pozo.', fa: 'باد آن را به غرب، به فارم برد. ۴ قدم جنوب چاه را ببین.' }
      ]
    },
    action: {
      type: 'find',
      at: [12, 17],
      hint: { en: 'Find the letter: 4 steps south of the farm well', es: 'Busca la carta: 4 pasos al sur del pozo de la granja', fa: 'نامه را پیدا کن: ۴ قدم جنوب چاه فارم' },
      found: { en: 'You found the letter in the wheat. It says: "Dear Mother, I am safe. I miss you."', es: 'Encontraste la carta en el trigo. Dice: "Querida madre, estoy bien. Te extraño."', fa: 'نامه را در گندم پیدا کردی. نوشته: «مادر عزیزم، من سالم هستم. دلم برایت تنگ است.»' },
      item: { icon: '✉️', name: { en: 'A soldier\'s letter home', es: 'La carta de un soldado a su casa', fa: 'نامهٔ یک سرباز به خانه' } }
    }
  },

  scraps: [[1, 1], [30, 1], [30, 20]],
  smudges: [[8, 20], [28, 13]],

  challenge: {
    at: [13, 8],
    type: 'order',
    stat: 'pla',
    title: { en: 'Four years of war, in order', es: 'Cuatro años de guerra, en orden', fa: 'چهار سال جنگ، به ترتیب' },
    intro: { en: 'The Grump mixed up the war years. Put the events in order, from first to last.',
      es: 'El Gruñón revolvió los años de la guerra. Pon los hechos en orden, del primero al último.',
      fa: 'غرغرو سال‌های جنگ را درهم کرد. رویدادها را از اول تا آخر به ترتیب بگذار.' },
    items: [
      { icon: '📰', t: { en: '1914 · Archduke Franz Ferdinand of Austria-Hungary is killed in Sarajevo', es: '1914 · Matan al archiduque Francisco Fernando de Austria-Hungría en Sarajevo', fa: '۱۹۱۴ · آرشیدوک فرانتس فردیناند اتریش-هنگری در سارایوو کشته می‌شود' } },
      { icon: '🤝', t: { en: '1914 · Alliances pull the great powers of Europe into the war', es: '1914 · Las alianzas arrastran a las grandes potencias de Europa a la guerra', fa: '۱۹۱۴ · پیمان‌ها قدرت‌های بزرگ اروپا را به جنگ می‌کشانند' } },
      { icon: '⛏️', t: { en: '1916 · Long, terrible battles at Verdun and the Somme', es: '1916 · Batallas largas y terribles en Verdún y el Somme', fa: '۱۹۱۶ · جنگ‌های دراز و وحشتناک در وردن و سوم' } },
      { icon: '🚢', t: { en: '1917 · The United States joins the war', es: '1917 · Estados Unidos entra en la guerra', fa: '۱۹۱۷ · ایالات متحده وارد جنگ می‌شود' } },
      { icon: '🕊️', t: { en: '1918 · The armistice: the fighting stops on November 11', es: '1918 · El armisticio: los combates paran el 11 de noviembre', fa: '۱۹۱۸ · آتش‌بس: جنگ در ۱۱ نوامبر بس می‌شود' } },
      { icon: '📜', t: { en: '1919 · The Treaty of Versailles is signed', es: '1919 · Se firma el Tratado de Versalles', fa: '۱۹۱۹ · پیمان ورسای امضا می‌شود' } }
    ],
    why: { en: 'Sarajevo came first. Then alliances spread the war. Then 1916, 1917, the armistice in 1918, the treaty in 1919.',
      es: 'Primero fue Sarajevo. Luego las alianzas extendieron la guerra. Después 1916, 1917, el armisticio en 1918 y el tratado en 1919.',
      fa: 'اول سارایوو بود. بعد پیمان‌ها جنگ را پخش کردند. بعد ۱۹۱۶، ۱۹۱۷، آتش‌بس در ۱۹۱۸ و پیمان در ۱۹۱۹.' },
    success: { en: 'The timeline is right again. Four years of war, remembered in order.', es: 'La línea del tiempo está bien otra vez. Cuatro años de guerra, recordados en orden.', fa: 'خط زمان دوباره درست شد. چهار سال جنگ، به ترتیب به یاد آمد.' }
  },

  boss: {
    at: [27, 9],
    stat: 'loc',
    need: 3,
    name: { en: 'The Forgetting', es: 'El Olvido', fa: 'فراموشی' },
    appear: { en: 'A cold gray fog rolls over the hospital. It is The Forgetting.', es: 'Una niebla gris y fría cubre el hospital. Es El Olvido.', fa: 'یک مه سرد و خاکستری روی شفاخانه می‌آید. این فراموشی است.' },
    taunt: { en: 'No one will remember them. Not their names, not their letters.', es: 'Nadie los recordará. Ni sus nombres, ni sus cartas.', fa: 'هیچ‌کس آن‌ها را به یاد نخواهد آورد. نه نام‌شان را، نه نامه‌هایشان را.' },
    win: { en: 'The fog lifts. Their stories are remembered. Chronicle page 6.1 comes into your hands.', es: 'La niebla se va. Sus historias se recuerdan. La página 6.1 de la crónica llega a tus manos.', fa: 'مه کنار می‌رود. داستان‌هایشان به یاد می‌ماند. صفحهٔ ۶.۱ تاریخ‌نامه به دستت می‌رسد.' },
    questions: [
      { q: { en: 'What event in 1914 was the spark that started the war?', es: '¿Qué hecho de 1914 fue la chispa que empezó la guerra?', fa: 'کدام رویداد در ۱۹۱۴ جرقهٔ شروع جنگ بود؟' },
        choices: [
          { en: 'The killing of Archduke Franz Ferdinand', es: 'El asesinato del archiduque Francisco Fernando', fa: 'کشته شدن آرشیدوک فرانتس فردیناند' },
          { en: 'A crash of the stock market in New York', es: 'Una caída de la bolsa de Nueva York', fa: 'سقوط بازار سهام در نیویارک' },
          { en: 'A fight over a new railway in China', es: 'Una pelea por un ferrocarril nuevo en China', fa: 'دعوایی بر سر یک خط آهن نو در چین' },
          { en: 'The fall of the tsar of Russia', es: 'La caída del zar de Rusia', fa: 'سقوط تزار روسیه' }],
        answer: 0,
        why: { en: 'In June 1914, the heir of Austria-Hungary was shot in Sarajevo. Austria-Hungary then attacked Serbia.', es: 'En junio de 1914 mataron en Sarajevo al heredero de Austria-Hungría. Luego Austria-Hungría atacó a Serbia.', fa: 'در جون ۱۹۱۴، ولیعهد اتریش-هنگری در سارایوو کشته شد. بعد اتریش-هنگری به صربستان حمله کرد.' } },
      { q: { en: 'How did alliances turn one fight into a world war?', es: '¿Cómo las alianzas convirtieron una pelea en una guerra mundial?', fa: 'پیمان‌ها چطور یک دعوا را به جنگ جهانی تبدیل کردند؟' },
        choices: [
          { en: 'Countries promised to fight for each other', es: 'Los países prometieron luchar unos por otros', fa: 'کشورها قول دادند برای همدیگر بجنگند' },
          { en: 'Countries promised to stay out of every war', es: 'Los países prometieron no entrar en ninguna guerra', fa: 'کشورها قول دادند از هر جنگ دور بمانند' },
          { en: 'Countries sold all their ships to Serbia', es: 'Los países le vendieron todos sus barcos a Serbia', fa: 'کشورها همهٔ کشتی‌هایشان را به صربستان فروختند' },
          { en: 'Countries asked the League of Nations to vote', es: 'Los países pidieron votar a la Sociedad de Naciones', fa: 'کشورها از جامعهٔ ملل خواستند رأی بدهد' }],
        answer: 0,
        why: { en: 'When one ally went to war, its partners joined. Soon all the great powers were fighting.', es: 'Cuando un aliado entraba en guerra, sus socios lo seguían. Pronto todas las potencias luchaban.', fa: 'وقتی یک متحد به جنگ رفت، شریکانش هم آمدند. زود همهٔ قدرت‌های بزرگ در جنگ بودند.' } },
      { q: { en: 'Which countries were the Central Powers?', es: '¿Qué países eran las Potencias Centrales?', fa: 'کدام کشورها قدرت‌های مرکزی بودند؟' },
        choices: [
          { en: 'Germany, Austria-Hungary and the Ottoman Empire', es: 'Alemania, Austria-Hungría y el Imperio otomano', fa: 'آلمان، اتریش-هنگری و امپراتوری عثمانی' },
          { en: 'France, Great Britain and the Russian Empire', es: 'Francia, Gran Bretaña y el Imperio ruso', fa: 'فرانسه، بریتانیا و امپراتوری روسیه' },
          { en: 'Italy, Japan and the United States of America', es: 'Italia, Japón y los Estados Unidos de América', fa: 'ایتالیا، جاپان و ایالات متحدهٔ امریکا' },
          { en: 'Spain, Portugal and the Netherlands', es: 'España, Portugal y los Países Bajos', fa: 'هسپانیه، پرتگال و هالند' }],
        answer: 0,
        why: { en: 'Germany, Austria-Hungary, the Ottoman Empire and Bulgaria fought the Allies: France, Britain, Russia and others.', es: 'Alemania, Austria-Hungría, el Imperio otomano y Bulgaria lucharon contra los Aliados: Francia, Gran Bretaña, Rusia y otros.', fa: 'آلمان، اتریش-هنگری، عثمانی و بلغاریا با متحدین جنگیدند: فرانسه، بریتانیا، روسیه و دیگران.' } },
      { q: { en: 'Why did so many soldiers die in trench warfare?', es: '¿Por qué murieron tantos soldados en la guerra de trincheras?', fa: 'چرا در جنگ خندقی این‌قدر سرباز کشته شدند؟' },
        choices: [
          { en: 'Attacks met machine guns and big guns', es: 'Los ataques chocaban con ametralladoras y cañones', fa: 'حمله‌ها با ماشیندار و توپ روبرو می‌شدند' },
          { en: 'The trenches were dug far too close to the sea', es: 'Las trincheras estaban muy cerca del mar', fa: 'خندق‌ها خیلی نزدیک بحر کنده شده بودند' },
          { en: 'The soldiers had no maps of the land', es: 'Los soldados no tenían mapas del terreno', fa: 'سربازان نقشهٔ زمین را نداشتند' },
          { en: 'Each side sent only a few men', es: 'Cada lado mandó solo a unos pocos hombres', fa: 'هر طرف فقط چند مرد فرستاد' }],
        answer: 0,
        why: { en: 'New weapons made attacks across open ground deadly. Huge battles moved the front only a little.', es: 'Las armas nuevas hacían mortales los ataques en campo abierto. Batallas enormes movían poco el frente.', fa: 'سلاح‌های نو حمله در زمین باز را کشنده ساختند. جنگ‌های بزرگ خط جنگ را فقط کمی جابجا کردند.' } },
      { q: { en: 'What does total war mean?', es: '¿Qué significa guerra total?', fa: 'جنگ همه‌جانبه یعنی چه؟' },
        choices: [
          { en: 'A whole country works for the war', es: 'Todo un país trabaja para la guerra', fa: 'تمام کشور برای جنگ کار می‌کند' },
          { en: 'Only soldiers take part in the war', es: 'Solo los soldados participan en la guerra', fa: 'فقط سربازان در جنگ سهم می‌گیرند' },
          { en: 'The war is fought on the sea only', es: 'La guerra se pelea solo en el mar', fa: 'جنگ فقط در بحر است' },
          { en: 'The war is over in one single day', es: 'La guerra termina en un solo día', fa: 'جنگ در یک روز تمام می‌شود' }],
        answer: 0,
        why: { en: 'Farms, factories, women, children and colonies were all put to work for the war.', es: 'Granjas, fábricas, mujeres, niños y colonias trabajaron todos para la guerra.', fa: 'فارم‌ها، فابریکه‌ها، زنان، اطفال و مستعمره‌ها همه برای جنگ به کار گرفته شدند.' } },
      { q: { en: 'Who served Britain and France, besides soldiers from Europe?', es: '¿Quiénes sirvieron a Gran Bretaña y Francia, además de los soldados europeos?', fa: 'به جز سربازان اروپایی، چه کسانی برای بریتانیا و فرانسه خدمت کردند؟' },
        choices: [
          { en: 'People from colonies in Africa and Asia', es: 'Gente de las colonias de África y Asia', fa: 'مردم مستعمره‌ها در افریقا و آسیا' },
          { en: 'No one at all; only Europeans took part', es: 'Nadie; solo participaron los europeos', fa: 'هیچ‌کس؛ فقط اروپایی‌ها سهم گرفتند' },
          { en: 'Only sailors who came from South America', es: 'Solo marineros que vinieron de América del Sur', fa: 'فقط ملاحان امریکای جنوبی' },
          { en: 'Only kings and queens of Europe', es: 'Solo los reyes y reinas de Europa', fa: 'فقط شاهان و ملکه‌های اروپا' }],
        answer: 0,
        why: { en: 'About a million soldiers came from India alone. Africa, Vietnam and China sent soldiers and workers.', es: 'Solo de India vino cerca de un millón de soldados. África, Vietnam y China mandaron soldados y trabajadores.', fa: 'فقط از هند حدود یک میلیون سرباز آمد. افریقا، ویتنام و چین سرباز و کارگر فرستادند.' } },
      { q: { en: 'What did the Treaty of Versailles do to Germany in 1919?', es: '¿Qué le hizo el Tratado de Versalles a Alemania en 1919?', fa: 'پیمان ورسای در ۱۹۱۹ با آلمان چه کرد؟' },
        choices: [
          { en: 'It blamed Germany and made it pay', es: 'Culpó a Alemania y la hizo pagar', fa: 'آلمان را مقصر دانست و وادار به پرداخت کرد' },
          { en: 'It gave Germany new colonies in Africa', es: 'Le dio a Alemania colonias nuevas en África', fa: 'به آلمان مستعمره‌های نو در افریقا داد' },
          { en: 'It made Germany the leader of Europe', es: 'Hizo a Alemania la líder de Europa', fa: 'آلمان را رهبر اروپا ساخت' },
          { en: 'It let Germany keep its whole army', es: 'Dejó que Alemania guardara todo su ejército', fa: 'اجازه داد آلمان تمام لشکرش را نگه دارد' }],
        answer: 0,
        why: { en: 'Germany lost land and colonies, had to pay [[reparations|reparations]], and kept only a small army. Many Germans felt angry.', es: 'Alemania perdió tierras y colonias, tuvo que pagar [[reparations|reparaciones]] y solo pudo tener un ejército pequeño. Muchos alemanes se enojaron.', fa: 'آلمان زمین و مستعمره‌ها را از دست داد، باید [[reparations|غرامت]] می‌پرداخت و فقط لشکر کوچک داشت. بسیاری از آلمانی‌ها خشمگین شدند.' } },
      { q: { en: 'Which empires came to an end after World War I?', es: '¿Qué imperios terminaron después de la Primera Guerra Mundial?', fa: 'بعد از جنگ جهانی اول کدام امپراتوری‌ها از بین رفتند؟' },
        choices: [
          { en: 'The Ottoman, Russian and Austro-Hungarian empires', es: 'Los imperios otomano, ruso y austrohúngaro', fa: 'امپراتوری‌های عثمانی، روسیه و اتریش-هنگری' },
          { en: 'The British, French and Japanese empires', es: 'Los imperios británico, francés y japonés', fa: 'امپراتوری‌های بریتانیا، فرانسه و جاپان' },
          { en: 'The Aztec, Inca and Maya empires of America', es: 'Los imperios azteca, inca y maya de América', fa: 'امپراتوری‌های ازتک، اینکا و مایای امریکا' },
          { en: 'The Mughal, Ming and Mali empires of old', es: 'Los antiguos imperios mogol, Ming y de Malí', fa: 'امپراتوری‌های کهنهٔ مغل، مینگ و مالی' }],
        answer: 0,
        why: { en: 'These old empires broke apart. New countries like Poland and Czechoslovakia were born.', es: 'Estos viejos imperios se rompieron. Nacieron países nuevos, como Polonia y Checoslovaquia.', fa: 'این امپراتوری‌های کهنه از هم پاشیدند. کشورهای نو مثل پولند و چکوسلواکیا به وجود آمدند.' } }
    ]
  },

  learned: [
    { en: 'In 1914, a killing in Sarajevo and a web of [[alliance|alliances]] pulled Europe into [[world war i|World War I]].', es: 'En 1914, un asesinato en Sarajevo y una red de [[alliance|alianzas]] llevaron a Europa a la [[world war i|Primera Guerra Mundial]].', fa: 'در ۱۹۱۴، یک قتل در سارایوو و شبکه‌ای از [[alliance|پیمان‌ها]] اروپا را به [[world war i|جنگ جهانی اول]] کشاند.' },
    { en: '[[trench|Trench]] warfare and new weapons killed millions. In [[total war|total war]], whole countries worked for the war.', es: 'La guerra de [[trench|trincheras]] y las armas nuevas mataron a millones. En la [[total war|guerra total]], países enteros trabajaron para la guerra.', fa: 'جنگ [[trench|خندقی]] و سلاح‌های نو میلیون‌ها نفر را کشتند. در [[total war|جنگ همه‌جانبه]]، تمام کشورها برای جنگ کار کردند.' },
    { en: 'People from [[colony|colonies]] in Africa and Asia served too. The [[armistice|armistice]] ended the fighting in 1918.', es: 'También sirvió gente de [[colony|colonias]] de África y Asia. El [[armistice|armisticio]] terminó los combates en 1918.', fa: 'مردم [[colony|مستعمره‌ها]] در افریقا و آسیا هم خدمت کردند. [[armistice|آتش‌بس]] در ۱۹۱۸ به جنگ پایان داد.' }
  ],
  reflect: {
    q: { en: 'Why is it important to remember the people who lived through this war?', es: '¿Por qué es importante recordar a las personas que vivieron esta guerra?', fa: 'چرا یاد کردن از مردمی که این جنگ را دیدند مهم است؟' },
    starter: { en: 'It is important to remember them because', es: 'Es importante recordarlos porque', fa: 'یاد کردن از آن‌ها مهم است، چون' }
  }
};
