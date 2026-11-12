/* TRAILWALKER · Episode 7.3 · World War II at Home and at War (VUS)
   Norfolk, Virginia, in 1943: a busy Navy town on the harbor. (The navy yard itself is across the river,
   in Portsmouth; here it is simply "the navy yard", by the water.)
   NW: two homes with blackout curtains (doors 3,2 and 8,2), the ration-book office (J, door 13,2),
   and a home (door 4,7). NE: the soldiers' canteen (Q, door 22,2), the war bond booth (m) and two homes
   (doors 21,6 and 26,6). Row 9: the main street. Column 17: the street down to the harbor.
   SW: a victory garden (crop rows inside a dirt path) and Grandpa Sal's home (door 14,13).
   SE: the navy yard (X), where women weld and fix warships. Row 16: the waterfront. Below: the harbor and docks (k).
   War topic: plain, true words, no gore. The Grump's taunts are serious. */
window.EPISODE = {
  id: '7.3',
  realm: 7,
  sol: 'VUS',
  title: { en: 'World War II at Home and at War', es: 'La Segunda Guerra Mundial en casa y en el frente', fa: 'جنگ جهانی دوم در خانه و در جبهه' },
  place: { en: 'Norfolk, 1943', es: 'Norfolk, 1943', fa: 'نورفک، ۱۹۴۳' },
  intro: [
    { en: 'The Grump blurred the [[home front|home front]] page. People forget how everyone helped win the war.',
      es: 'El Gruñón borró la página del [[home front|frente interno]]. La gente olvida cómo todos ayudaron a ganar la guerra.',
      fa: 'غرغرو صفحهٔ [[home front|جبههٔ داخلی]] را تار کرد. مردم فراموش می‌کنند همه چطور برای بردن جنگ کمک کردند.' },
    { en: 'Talk to the 3 people here, then fix the journal stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del diario.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ روزنامچه را درست کن.' }
  ],
  /* cut scenes: Norfolk, Virginia on the map, 1943 on the timeline */
  scenes: {
    at: [-76.30, 36.85],
    year: 1943,
    start: [
      { en: 'In the 1930s, dictators and military leaders took power in Germany, Italy and Japan.',
        es: 'En los años treinta, dictadores y jefes militares tomaron el poder en Alemania, Italia y Japón.',
        fa: 'در دههٔ ۱۹۳۰، دیکتاتورها و رهبران نظامی در آلمان، ایتالیا و جاپان قدرت را گرفتند.' },
      { en: 'On December 7, 1941, Japan attacked Pearl Harbor. The US joined the war.',
        es: 'El 7 de diciembre de 1941, Japón atacó Pearl Harbor. Estados Unidos entró en la guerra.',
        fa: 'در ۷ دسامبر ۱۹۴۱، جاپان به پرل هاربر حمله کرد. امریکا وارد جنگ شد.' },
      { en: 'By 1943, the whole country worked to win. This was the home front.',
        es: 'Para 1943, todo el país trabajaba para ganar. Esto era el frente interno.',
        fa: 'تا سال ۱۹۴۳، تمام کشور برای پیروزی کار می‌کرد. این جبههٔ داخلی بود.' }
    ],
    page: { en: 'The enemy never broke the Navajo Code Talkers\' code. It stayed secret until 1968.',
      es: 'El enemigo nunca descifró el código de los Code Talkers navajos. Fue secreto hasta 1968.',
      fa: 'دشمن هرگز رمز رمزگویان ناواهو را نشکست. این کار تا سال ۱۹۶۸ پنهان ماند.' },
    guess: {
      q: { en: 'In 1943, could a family buy all the sugar it wanted?', es: 'En 1943, ¿una familia podía comprar todo el azúcar que quería?', fa: 'در سال ۱۹۴۳، آیا یک خانواده می‌توانست هر قدر بوره که می‌خواست بخرد؟' },
      choices: [
        { t: { en: '🎟️ No, it was rationed', es: '🎟️ No, estaba racionado', fa: '🎟️ نه، جیره‌بندی بود' }, ok: true },
        { t: { en: '🍬 Yes, any amount', es: '🍬 Sí, cualquier cantidad', fa: '🍬 بله، هر قدر' } }
      ],
      why: { en: 'Sugar was rationed. Families needed stamps from a ration book to buy it.', es: 'El azúcar estaba racionado. Las familias necesitaban estampillas de una libreta para comprarlo.', fa: 'بوره جیره‌بندی بود. خانواده‌ها برای خریدنش تکت‌های کتابچهٔ جیره لازم داشتند.' }
    },
    next: {
      q: { en: 'Next: the US and the Soviet Union became rivals. What was the Cold War?', es: 'Ahora: después de la guerra, EE. UU. y la Unión Soviética fueron rivales. ¿Qué fue la Guerra Fría?', fa: 'بعدی: بعد از جنگ، امریکا و اتحاد شوروی رقیب شدند. جنگ سرد چه بود؟' },
      choices: [
        { t: { en: 'A rivalry without direct war', es: 'Una larga rivalidad, sin guerra directa', fa: 'رقابت دراز، بدون جنگ مستقیم' }, ok: true },
        { t: { en: 'A war fought in snow', es: 'Una guerra peleada en la nieve', fa: 'جنگی که در برف شد' } }
      ],
      why: { en: 'For about 45 years, the two powers competed. They never fought each other directly.', es: 'Durante unos 45 años, las dos potencias compitieron. Nunca pelearon entre sí directamente.', fa: 'تقریباً ۴۵ سال، این دو قدرت رقابت کردند. هرگز مستقیم با هم نجنگیدند.' }
    }
  },
  /* houses: who lives or works behind each door */
  houses: [
    { at: [3, 2], name: { en: 'Mrs. Parker', es: 'Señora Parker', fa: 'خانم پارکر' },
      look: { skin: 1, hair: '#8a5a2b', shirt: '#4a6a8a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'At night, we close our [[blackout|blackout]] curtains tight.', es: 'De noche cerramos bien nuestras cortinas de [[blackout|apagón]].', fa: 'شب‌ها پرده‌های [[blackout|خاموشی]] خود را محکم می‌بندیم.' },
        { en: 'Enemy submarines hunted ships off our coast. Bright city lights helped them see.', es: 'Submarinos enemigos cazaban barcos cerca de la costa. Las luces de la ciudad los ayudaban a ver.', fa: 'زیردریایی‌های دشمن نزدیک ساحل ما کشتی‌ها را شکار می‌کردند. چراغ‌های شهر به دیدن‌شان کمک می‌کرد.' }
      ] },
    { at: [8, 2], name: { en: 'Miss Brooks', es: 'Señorita Brooks', fa: 'خانم بروکس' },
      look: { skin: 2, hair: '#3a2416', shirt: '#7a4a6a', pants: '#2a2a2a', style: 'long' },
      lines: [
        { en: 'I am a teacher. My college friend Mary is Japanese American, born in California.', es: 'Soy maestra. Mi amiga de la universidad, Mary, es japonesa estadounidense, nacida en California.', fa: 'من معلم هستم. دوست پوهنتونم مری، امریکایی جاپانی‌تبار است و در کالیفورنیا به دنیا آمده.' },
        { en: 'In 1942, [[executive order 9066|Executive Order 9066]] forced her family into a camp.', es: 'En 1942, la [[executive order 9066|Orden Ejecutiva 9066]] obligó a su familia a ir a un campo.', fa: 'در سال ۱۹۴۲، [[executive order 9066|فرمان اجرایی ۹۰۶۶]] خانواده‌اش را به زور به یک کمپ فرستاد.' },
        { en: 'About 120,000 people were sent away. Most were US citizens. It was wrong.', es: 'Unas 120,000 personas fueron enviadas lejos. La mayoría eran ciudadanos. Fue injusto.', fa: 'حدود ۱۲۰٬۰۰۰ نفر فرستاده شدند. بیشترشان تبعهٔ امریکا بودند. این کار نادرست بود.' }
      ] },
    { at: [13, 2], name: { en: 'Mr. Dawson', es: 'Señor Dawson', fa: 'آقای داوسن' },
      look: { skin: 1, hair: '#d8d8d8', shirt: '#e8e0d0', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'This is the ration-book office. Every family gets [[ration book|ration books]].', es: 'Esta es la oficina de racionamiento. Cada familia recibe [[ration book|libretas de racionamiento]].', fa: 'اینجا دفتر کتابچه‌های جیره است. هر خانواده [[ration book|کتابچهٔ جیره]] می‌گیرد.' },
        { en: 'To buy sugar, meat or butter, you need money AND stamps.', es: 'Para comprar azúcar, carne o mantequilla, necesitas dinero Y estampillas.', fa: 'برای خریدن بوره، گوشت یا مسکه، پول و تکت هر دو لازم است.' },
        { en: '[[rationing|Rationing]] shares food fairly and saves more for the troops.', es: 'El [[rationing|racionamiento]] reparte la comida con justicia y guarda más para las tropas.', fa: '[[rationing|جیره‌بندی]] غذا را عادلانه تقسیم می‌کند و بیشتر برای سربازان نگه می‌دارد.' }
      ] },
    { at: [22, 2], name: { en: 'Mrs. Reyes', es: 'Señora Reyes', fa: 'خانم ری‌یس' },
      look: { skin: 3, hair: '#1a1208', shirt: '#c04a4a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'This is a soldiers\' canteen. We serve coffee and play dance music.', es: 'Esta es una cantina para soldados. Servimos café y ponemos música para bailar.', fa: 'اینجا باشگاه سربازان است. ما قهوه می‌دهیم و موسیقی رقص می‌گذاریم.' },
        { en: 'Volunteers help sailors far from home feel welcome.', es: 'Los voluntarios ayudan a que los marineros lejos de casa se sientan bienvenidos.', fa: 'رضاکاران کمک می‌کنند ملاحانی که از خانه دورند احساس خوش‌آمد کنند.' },
        { en: 'But here, Black and white sailors must use separate canteens. That is unfair.', es: 'Pero aquí, los marineros negros y blancos deben usar cantinas separadas. Eso es injusto.', fa: 'اما اینجا ملاحان سیاه‌پوست و سفیدپوست باید به باشگاه‌های جدا بروند. این ناعادلانه است.' }
      ] },
    { at: [21, 6], name: { en: 'Mrs. Kowalski', es: 'Señora Kowalski', fa: 'خانم کوالسکی' },
      look: { skin: 1, hair: '#d8b060', shirt: '#4a7a5a', pants: '#3a2a20', style: 'bun' },
      lines: [
        { en: 'My son Pete is a sailor in the Pacific Ocean.', es: 'Mi hijo Pete es marinero en el océano Pacífico.', fa: 'پسرم پیت ملاح در بحر آرام است.' },
        { en: 'Our forces take islands one by one, moving closer to Japan.', es: 'Nuestras fuerzas toman islas una por una, cada vez más cerca de Japón.', fa: 'نیروهای ما جزیره‌ها را یکی پس از دیگری می‌گیرند و به جاپان نزدیک‌تر می‌شوند.' },
        { en: 'His letters come by V-mail, on tiny film, to save space on ships.', es: 'Sus cartas llegan por V-mail, en película pequeñita, para ahorrar espacio en los barcos.', fa: 'نامه‌هایش با وی‌میل، روی فلم بسیار کوچک، می‌آید تا در کشتی جا کم بگیرد.' }
      ] },
    { at: [26, 6], name: { en: 'Tommy', es: 'Tommy', fa: 'تامی' },
      look: { skin: 4, hair: '#1a1008', shirt: '#7a6a4a', pants: '#3a3a5a', style: 'short' },
      lines: [
        { en: 'I am 10. My scout troop collects old pots, cans and tires.', es: 'Tengo 10 años. Mi tropa de scouts junta ollas, latas y llantas viejas.', fa: 'من ۱۰ ساله هستم. گروه پیشاهنگ ما دیگ، قوطی و تایر کهنه جمع می‌کند.' },
        { en: 'It is a [[scrap drive|scrap drive]]. Factories melt the metal to build ships.', es: 'Es una [[scrap drive|colecta de chatarra]]. Las fábricas funden el metal para hacer barcos.', fa: 'این یک [[scrap drive|جمع‌آوری آهن کهنه]] است. فابریکه‌ها فلز را آب می‌کنند تا کشتی بسازند.' }
      ] },
    { at: [4, 7], name: { en: 'Mrs. Johnson', es: 'Señora Johnson', fa: 'خانم جانسن' },
      look: { skin: 5, hair: '#1a1a1a', shirt: '#6a4a8a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'My husband builds ships at the navy yard.', es: 'Mi esposo construye barcos en el astillero naval.', fa: 'شوهرم در کشتی‌سازی نیروی بحری کشتی می‌سازد.' },
        { en: 'In 1941, a new order said war factories must hire fairly, by any race.', es: 'En 1941, una orden nueva dijo que las fábricas de guerra debían contratar sin importar la raza.', fa: 'در سال ۱۹۴۱، یک فرمان نو گفت فابریکه‌های جنگی باید از هر نژاد عادلانه استخدام کنند.' },
        { en: 'We still face unfair laws here. That is why we fight for [[double v|Double V]].', es: 'Aquí todavía hay leyes injustas. Por eso luchamos por la [[double v|Doble V]].', fa: 'ما اینجا هنوز با قانون‌های ناعادلانه روبه‌رو هستیم. برای همین برای [[double v|دوبل وی]] مبارزه می‌کنیم.' }
      ] },
    { at: [14, 13], name: { en: 'Grandpa Sal', es: 'Abuelo Sal', fa: 'پدرکلان سال' },
      look: { skin: 2, hair: '#d8d8d8', shirt: '#8a6a3a', pants: '#3a3a2a', style: 'short', hat: '#6a5a3a' },
      lines: [
        { en: 'That is my [[victory garden|victory garden]]. I grow beans, tomatoes and potatoes.', es: 'Ese es mi [[victory garden|huerto de la victoria]]. Siembro frijoles, tomates y papas.', fa: 'آن [[victory garden|باغچهٔ پیروزی]] من است. لوبیا، بادنجان رومی و کچالو می‌کارم.' },
        { en: 'Millions of families grow gardens like this.', es: 'Millones de familias tienen huertos como este.', fa: 'میلیون‌ها خانواده باغچه‌هایی مثل این دارند.' },
        { en: 'Then farms can send more food to soldiers and our allies.', es: 'Así las granjas pueden mandar más comida a los soldados y a los aliados.', fa: 'آن وقت کشتزارها می‌توانند غذای بیشتر به سربازان و متحدان ما بفرستند.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens. See the note at the top. */
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT',
    'T.RRR..RRR..JJJJ.l..QQQQQ......T',
    'T.hdh..hdh..JdJJ.l..hhdhh.mmmx.T',
    'T................l.............T',
    'T.x..............l.............T',
    'T................l..RRR..RRR...T',
    'T..RRR...........l..hdh..hdh...T',
    'T..hdh...........l.............T',
    'T................l.............T',
    'TllllllllllllllllllllllllllllllT',
    'T................l.............T',
    'T.:::::::::......l..x..........T',
    'T.:22v11v2:..RRR.l....XXXXXXX..T',
    'T.:22v11v2:..hdh.l....XXXXXXX..T',
    'T.:22v11v2:......l....XXXXXXX..T',
    'T.:::::::::...x..l.............T',
    'TllllllllllllllllllllllllllllllT',
    '~~~kk~~~~~~~~~~~~~~~~kkk~~~~kk~~',
    '~~~kk~~~~~~~~~~~~~~~~kkk~~~~kk~~',
    '~~~kk~~~~~~~~~~~~~~~~kkk~~~~kk~~',
    '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',
    '================================'
  ],
  start: [16, 9],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [30, 5], at: [30, 8], decor: 'coinold',
      clue: { en: 'From this note, walk 3 steps south, past the homes.', es: 'Desde esta nota, camina 3 pasos al sur, junto a las casas.', fa: 'از این یادداشت، ۳ قدم به جنوب برو، از کنار خانه‌ها.' },
      text: { en: 'An old dime. Children bought war stamps for 10 cents. A full book became a war bond.', es: 'Una moneda vieja de 10 centavos. Los niños compraban estampillas de guerra. Una libreta llena se volvía un bono.', fa: 'یک سکهٔ کهنهٔ ده سنتی. کودکان تکت جنگ ۱۰ سنتی می‌خریدند. کتابچهٔ پُر یک اوراق قرضه می‌شد.' } },
    { clueAt: [1, 16], at: [5, 16], decor: 'shell',
      clue: { en: 'From this note, walk 4 steps east along the waterfront.', es: 'Desde esta nota, camina 4 pasos al este por la orilla.', fa: 'از این یادداشت، ۴ قدم به شرق در کنار آب برو.' },
      text: { en: 'Sailors from Norfolk served on ships all over the world. Here is a shell from the harbor.', es: 'Marineros de Norfolk sirvieron en barcos por todo el mundo. Aquí hay una concha del puerto.', fa: 'ملاحان نورفک در کشتی‌ها در سراسر جهان خدمت کردند. اینجا یک صدف از بندر است.' } }
  ],

  words: {
    'home front': { en: 'the work people do at home to help win a war', es: 'el trabajo que la gente hace en casa para ayudar a ganar una guerra', fa: 'کاری که مردم در خانه و وطن برای بردن جنگ می‌کنند' },
    dictator: { en: 'a ruler with total power who does not let people vote freely', es: 'un gobernante con todo el poder que no deja votar libremente', fa: 'حاکمی با تمام قدرت که نمی‌گذارد مردم آزادانه رأی بدهند' },
    appeasement: { en: 'giving an attacker what he wants, hoping he will stop', es: 'darle al agresor lo que quiere, esperando que se detenga', fa: 'دادن خواستهٔ حمله‌کننده به او، به امید این‌که بس کند' },
    neutral: { en: 'not taking either side in a fight', es: 'que no toma partido por ningún lado en una pelea', fa: 'طرف هیچ کس را در یک دعوا نگرفتن' },
    'lend-lease': { en: 'a 1941 law to send weapons and supplies to Britain and its allies', es: 'una ley de 1941 para enviar armas y provisiones a Gran Bretaña y sus aliados', fa: 'قانونی در ۱۹۴۱ برای فرستادن سلاح و تجهیزات به بریتانیا و متحدانش' },
    rationing: { en: 'limits on how much of some things each family can buy', es: 'límites a cuánto puede comprar cada familia de algunas cosas', fa: 'حد گذاشتن بر این‌که هر خانواده از بعضی چیزها چقدر بخرد' },
    'ration book': { en: 'a book of stamps you need to buy rationed things', es: 'una libreta de estampillas que necesitas para comprar cosas racionadas', fa: 'کتابچهٔ تکت که برای خریدن چیزهای جیره‌بندی لازم است' },
    'victory garden': { en: 'a home vegetable garden that saved farm food for the war', es: 'un huerto en casa que guardaba comida de las granjas para la guerra', fa: 'باغچهٔ سبزی در خانه که غذای کشتزارها را برای جنگ نگه می‌داشت' },
    'war bond': { en: 'a paper you bought to lend money to the government for the war', es: 'un papel que comprabas para prestarle dinero al gobierno para la guerra', fa: 'کاغذی که می‌خریدی تا برای جنگ به حکومت پول قرض بدهی' },
    'scrap drive': { en: 'collecting old metal, rubber and paper to make war supplies', es: 'juntar metal, caucho y papel viejos para hacer cosas para la guerra', fa: 'جمع کردن فلز، رابر و کاغذ کهنه برای ساختن وسایل جنگ' },
    'double v': { en: 'victory over enemies abroad and over racism at home', es: 'victoria sobre los enemigos afuera y sobre el racismo en casa', fa: 'پیروزی بر دشمنان در بیرون و بر نژادپرستی در داخل کشور' },
    blackout: { en: 'turning off or covering all lights at night so enemies cannot see', es: 'apagar o tapar todas las luces de noche para que el enemigo no vea', fa: 'خاموش کردن یا پوشاندن همهٔ چراغ‌ها در شب تا دشمن نبیند' },
    'executive order 9066': { en: 'the 1942 order that forced Japanese Americans on the West Coast into camps', es: 'la orden de 1942 que obligó a los japoneses estadounidenses de la costa oeste a ir a campos', fa: 'فرمان سال ۱۹۴۲ که امریکایی‌های جاپانی‌تبار ساحل غربی را به زور به کمپ‌ها فرستاد' }
  },

  npcs: [
    {
      x: 20, y: 13,
      name: { en: 'Dot', es: 'Dot', fa: 'دات' },
      role: { en: 'Welder at the navy yard', es: 'Soldadora del astillero naval', fa: 'جوشکار کشتی‌سازی نیروی بحری' },
      look: { skin: 1, hair: '#b0502a', shirt: '#2f4f8a', pants: '#3a3a4a', style: 'bun', hat: '#c03030' },
      lines: [
        { en: 'I am a welder at the navy yard. I join steel plates on warships.', es: 'Soy soldadora en el astillero naval. Uno placas de acero en barcos de guerra.', fa: 'من در کشتی‌سازی نیروی بحری جوشکار هستم. صفحه‌های فولاد کشتی‌های جنگی را جوش می‌دهم.' },
        { en: 'Before the war, few women had jobs like this one.', es: 'Antes de la guerra, pocas mujeres tenían trabajos como este.', fa: 'پیش از جنگ، کم زنان چنین کاری داشتند.' },
        { en: 'Men left to fight, so millions of women took war jobs.', es: 'Los hombres se fueron a pelear, así que millones de mujeres tomaron trabajos de guerra.', fa: 'مردها به جنگ رفتند، پس میلیون‌ها زن کارهای جنگی گرفتند.' },
        { en: 'Posters call women like us "Rosie the Riveter."', es: 'Los carteles llaman a mujeres como nosotras "Rosie la Remachadora".', fa: 'اعلان‌ها زنانی مثل ما را «روزی پرچ‌کار» می‌نامند.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'How did World War II change work for many women?', es: '¿Cómo cambió la Segunda Guerra Mundial el trabajo de muchas mujeres?', fa: 'جنگ جهانی دوم کار بسیاری از زنان را چطور تغییر داد؟' },
        choices: [
          { ok: true, t: { en: 'They took factory and shipyard jobs', es: 'Tomaron trabajos en fábricas y astilleros', fa: 'در فابریکه‌ها و کشتی‌سازی‌ها کار گرفتند' },
            why: { en: 'Yes! Men left to fight, so millions of women built ships, planes and tanks.', es: '¡Sí! Los hombres se fueron a pelear, y millones de mujeres hicieron barcos, aviones y tanques.', fa: 'بله! مردها به جنگ رفتند، پس میلیون‌ها زن کشتی، طیاره و تانک ساختند.' } },
          { t: { en: 'They had to stop all work outside home', es: 'Tuvieron que dejar todo trabajo fuera de casa', fa: 'مجبور شدند همهٔ کار بیرون از خانه را بس کنند' },
            why: { en: 'It was the opposite. Millions of women went to work in war factories.', es: 'Fue al revés. Millones de mujeres fueron a trabajar en fábricas de guerra.', fa: 'برعکس بود. میلیون‌ها زن در فابریکه‌های جنگی به کار رفتند.' } },
          { t: { en: 'They all became army pilots overseas', es: 'Todas fueron pilotos del ejército en el extranjero', fa: 'همه پیلوت اردو در خارج شدند' },
            why: { en: 'Some women flew planes inside the US. Most war jobs for women were in factories.', es: 'Algunas mujeres pilotaban aviones dentro de EE. UU. La mayoría trabajaba en fábricas.', fa: 'بعضی زنان در داخل امریکا طیاره راندند. بیشتر کارهای جنگی زنان در فابریکه‌ها بود.' } }
        ]
      }
    },
    {
      x: 23, y: 4,
      name: { en: 'Mr. Grant', es: 'Señor Grant', fa: 'آقای گرانت' },
      role: { en: 'Newspaper reporter', es: 'Reportero', fa: 'خبرنگار' },
      look: { skin: 5, hair: '#1a1a1a', shirt: '#e8e0d0', pants: '#2a2a3a', style: 'short', hat: '#3a3a3a' },
      lines: [
        { en: 'I write for a Black newspaper here in Norfolk.', es: 'Escribo para un periódico afroamericano aquí en Norfolk.', fa: 'من برای یک روزنامهٔ سیاه‌پوستان اینجا در نورفک می‌نویسم.' },
        { en: 'We call for [[double v|Double V]]: victory abroad, and victory over racism at home.', es: 'Pedimos la [[double v|Doble V]]: victoria afuera y victoria sobre el racismo en casa.', fa: 'ما [[double v|دوبل وی]] می‌خواهیم: پیروزی در بیرون، و پیروزی بر نژادپرستی در وطن.' },
        { en: 'The armed forces still keep Black and white troops apart.', es: 'Las fuerzas armadas todavía separan a las tropas negras y blancas.', fa: 'نیروهای مسلح هنوز سربازان سیاه‌پوست و سفیدپوست را جدا نگه می‌دارند.' },
        { en: 'Black pilots trained at Tuskegee, Alabama. Now the Tuskegee Airmen fly in North Africa.', es: 'Pilotos negros se entrenaron en Tuskegee, Alabama. Ahora los aviadores de Tuskegee vuelan en África del Norte.', fa: 'پیلوت‌های سیاه‌پوست در توسکیجی، الاباما آموزش دیدند. حالا هوانوردان توسکیجی در شمال افریقا پرواز می‌کنند.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'What did the Double V campaign ask for?', es: '¿Qué pedía la campaña de la Doble V?', fa: 'کمپاین دوبل وی چه می‌خواست؟' },
        choices: [
          { ok: true, t: { en: 'Win the war, and beat racism at home', es: 'Ganar la guerra y vencer el racismo en casa', fa: 'جنگ را ببریم و نژادپرستی را در وطن شکست دهیم' },
            why: { en: 'Yes. Black Americans fought for freedom abroad, and for equal rights at home.', es: 'Sí. Los afroamericanos luchaban por la libertad afuera y por la igualdad en casa.', fa: 'بله. امریکایی‌های سیاه‌پوست برای آزادی در بیرون و حقوق برابر در وطن مبارزه کردند.' } },
          { t: { en: 'Win two big battles in North Africa', es: 'Ganar dos grandes batallas en África del Norte', fa: 'دو جنگ بزرگ را در شمال افریقا ببریم' },
            why: { en: 'No. The two V\'s meant victory in the war and victory over racism at home.', es: 'No. Las dos V eran victoria en la guerra y victoria sobre el racismo en casa.', fa: 'نه. دو وی یعنی پیروزی در جنگ و پیروزی بر نژادپرستی در وطن.' } },
          { t: { en: 'Grow victory gardens in every US town', es: 'Sembrar huertos de la victoria en cada pueblo', fa: 'در هر شهر باغچهٔ پیروزی بکاریم' },
            why: { en: 'Gardens helped the war, but Double V was about winning equal rights at home too.', es: 'Los huertos ayudaban, pero la Doble V era también ganar la igualdad en casa.', fa: 'باغچه‌ها به جنگ کمک کردند، اما دوبل وی دربارهٔ گرفتن حقوق برابر در وطن هم بود.' } }
        ]
      }
    },
    {
      x: 12, y: 11,
      name: { en: 'Mr. Ortiz', es: 'Señor Ortiz', fa: 'آقای اورتیز' },
      role: { en: 'Radio repairman', es: 'Reparador de radios', fa: 'ترمیم‌کار رادیو' },
      look: { skin: 3, hair: '#2a1a10', shirt: '#5a6a4a', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'I fix radios. In the 1930s, Hitler and Mussolini became [[dictator|dictators]].', es: 'Arreglo radios. En los años treinta, Hitler y Mussolini se volvieron [[dictator|dictadores]].', fa: 'من رادیو ترمیم می‌کنم. در دههٔ ۱۹۳۰، هیتلر و موسولینی [[dictator|دیکتاتور]] شدند.' },
        { en: 'Japan\'s military leaders invaded China. Hitler\'s Germany took land in Europe.', es: 'Los jefes militares de Japón invadieron China. La Alemania de Hitler tomó tierras en Europa.', fa: 'رهبران نظامی جاپان به چین حمله کردند. آلمانِ هیتلر سرزمین‌هایی در اروپا گرفت.' },
        { en: 'At first, Britain and France gave Hitler what he wanted. That was [[appeasement|appeasement]].', es: 'Al principio, Gran Bretaña y Francia le dieron a Hitler lo que quería. Eso fue el [[appeasement|apaciguamiento]].', fa: 'اول، بریتانیا و فرانسه هر چه هیتلر خواست به او دادند. این [[appeasement|سیاست سازش]] بود.' },
        { en: 'The US stayed [[neutral|neutral]] until Japan attacked Pearl Harbor on December 7, 1941.', es: 'EE. UU. fue [[neutral|neutral]] hasta que Japón atacó Pearl Harbor el 7 de diciembre de 1941.', fa: 'امریکا [[neutral|بی‌طرف]] ماند تا جاپان در ۷ دسامبر ۱۹۴۱ به پرل هاربر حمله کرد.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'What brought the United States into World War II?', es: '¿Qué hizo que Estados Unidos entrara en la Segunda Guerra Mundial?', fa: 'چه چیز امریکا را وارد جنگ جهانی دوم کرد؟' },
        choices: [
          { ok: true, t: { en: 'Japan attacked Pearl Harbor in 1941', es: 'Japón atacó Pearl Harbor en 1941', fa: 'جاپان در ۱۹۴۱ به پرل هاربر حمله کرد' },
            why: { en: 'Right. After the attack on December 7, 1941, the US declared war.', es: 'Correcto. Después del ataque del 7 de diciembre de 1941, EE. UU. declaró la guerra.', fa: 'درست. بعد از حملهٔ ۷ دسامبر ۱۹۴۱، امریکا اعلان جنگ کرد.' } },
          { t: { en: 'Germany attacked New York City in 1941', es: 'Alemania atacó Nueva York en 1941', fa: 'آلمان در ۱۹۴۱ به شهر نیویارک حمله کرد' },
            why: { en: 'Germany never attacked New York. The attack on Pearl Harbor brought the US in.', es: 'Alemania nunca atacó Nueva York. El ataque a Pearl Harbor metió a EE. UU. en la guerra.', fa: 'آلمان هرگز به نیویارک حمله نکرد. حمله به پرل هاربر امریکا را وارد جنگ کرد.' } },
          { t: { en: 'Britain paid the US to send soldiers', es: 'Gran Bretaña le pagó a EE. UU. por soldados', fa: 'بریتانیا به امریکا پول داد تا سرباز بفرستد' },
            why: { en: 'Britain did not pay for soldiers. The attack on Pearl Harbor brought the US in.', es: 'Gran Bretaña no pagó por soldados. El ataque a Pearl Harbor metió a EE. UU. en la guerra.', fa: 'بریتانیا برای سرباز پول نداد. حمله به پرل هاربر امریکا را وارد جنگ کرد.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 2, y: 4, text: { en: 'NORFOLK, VIRGINIA · 1943 · A busy Navy town. Warships are built and fixed here, day and night.', es: 'NORFOLK, VIRGINIA · 1943 · Una ciudad naval muy activa. Aquí se hacen y reparan barcos de guerra, día y noche.', fa: 'نورفک، ویرجینیا · ۱۹۴۳ · یک شهر پرکار نیروی بحری. اینجا شب و روز کشتی جنگی ساخته و ترمیم می‌شود.' } },
    { x: 29, y: 2, text: { en: 'WAR BONDS · Buy a [[war bond|war bond]]! You lend money to pay for the war.', es: 'BONOS DE GUERRA · ¡Compra un [[war bond|bono de guerra]]! Le prestas dinero al país para la guerra.', fa: 'اوراق قرضهٔ جنگ · یک [[war bond|اوراق قرضهٔ جنگ]] بخر! برای هزینهٔ جنگ پول قرض می‌دهی.' } },
    { x: 20, y: 11, text: { en: 'THE NAVY YARD · Workers build and repair warships for the US Navy.', es: 'EL ASTILLERO NAVAL · Los obreros construyen y reparan barcos de guerra para la Marina.', fa: 'کشتی‌سازی نیروی بحری · کارگران برای نیروی بحری امریکا کشتی جنگی می‌سازند و ترمیم می‌کنند.' } },
    { x: 14, y: 15, text: { en: 'THE HARBOR · Since 1941, [[lend-lease|Lend-Lease]] ships carry American weapons and food to Britain and its allies.', es: 'EL PUERTO · Desde 1941, barcos de [[lend-lease|Préstamo y Arriendo]] llevan armas y comida a Gran Bretaña y sus aliados.', fa: 'بندر · از ۱۹۴۱، کشتی‌های [[lend-lease|قرض و اجاره]] سلاح و غذای امریکایی را به بریتانیا و متحدانش می‌برند.' } }
  ],

  /* the quest: Ruby (NW) wrote a letter to her brother on a Navy ship -> Mr. Bell the air raid warden (NE)
     saw the Grump's Gust tear it into 3 pieces -> the victory garden (SW), the bond booth (NE), the navy yard (SE)
     -> catch the gust on the docks -> back to Ruby */
  quest: {
    stat: 'mov',
    title: { en: 'Ruby\'s Letter', es: 'La carta de Ruby', fa: 'نامهٔ روبی' },
    giver: {
      x: 10, y: 5,
      name: { en: 'Ruby', es: 'Ruby', fa: 'روبی' },
      role: { en: 'Student, age 11', es: 'Estudiante, 11 años', fa: 'شاگرد، ۱۱ ساله' },
      look: { skin: 4, hair: '#2a1a10', shirt: '#e0a020', pants: '#2a4a7a', style: 'long' },
      lines: [
        { en: 'My brother Sam is a sailor on a Navy ship.', es: 'Mi hermano Sam es marinero en un barco de la Marina.', fa: 'برادرم سام ملاح یک کشتی نیروی بحری است.' },
        { en: 'I wrote him a letter. A strong gust tore it and blew it away!', es: 'Le escribí una carta. ¡Un viento fuerte la rompió y se la llevó!', fa: 'برایش نامه نوشتم. یک باد تند آن را پاره کرد و برد!' },
        { en: 'Mr. Bell, the air raid warden, saw it fly. He is by the homes, north-east.', es: 'El señor Bell, el vigilante antiaéreo, la vio volar. Está junto a las casas, al noreste.', fa: 'آقای بِل، نگهبان حملهٔ هوایی، پریدنش را دید. او کنار خانه‌ها، شمال شرق است.' }
      ],
      wait: { en: 'Mr. Bell the air raid warden stands by the homes in the north-east.', es: 'El señor Bell, el vigilante antiaéreo, está junto a las casas del noreste.', fa: 'آقای بِل، نگهبان حملهٔ هوایی، کنار خانه‌های شمال شرق ایستاده است.' },
      thanks: { en: 'My letter is whole again! Sam will read all our home front news.', es: '¡Mi carta está completa otra vez! Sam leerá todas las noticias de casa.', fa: 'نامه‌ام دوباره کامل شد! سام همهٔ خبرهای وطن را می‌خواند.' }
    },
    contact: {
      x: 28, y: 8,
      name: { en: 'Mr. Bell', es: 'Señor Bell', fa: 'آقای بِل' },
      role: { en: 'Air raid warden', es: 'Vigilante antiaéreo', fa: 'نگهبان حملهٔ هوایی' },
      look: { skin: 1, hair: '#5a4020', shirt: '#5a5a3a', pants: '#3a3a2a', style: 'short', hat: '#e8e8e8' },
      lines: [
        { en: 'I check that every home closes its blackout curtains at night.', es: 'Reviso que cada casa cierre sus cortinas de apagón por la noche.', fa: 'من بررسی می‌کنم که هر خانه شب پرده‌های خاموشی‌اش را ببندد.' },
        { en: 'Yes, I saw it! The Grump\'s Gust tore the letter into 3 pieces.', es: '¡Sí, la vi! La Ráfaga del Gruñón rompió la carta en 3 pedazos.', fa: 'بله، دیدمش! باد غرغرو نامه را ۳ تکه کرد.' },
        { en: 'Each piece blew to a home front place. Follow the clues!', es: 'Cada pedazo voló a un lugar del frente interno. ¡Sigue las pistas!', fa: 'هر تکه به یک جای جبههٔ داخلی پرید. سرنخ‌ها را دنبال کن!' }
      ]
    },
    action: {
      type: 'chase',
      at: [29, 19],
      hops: [[30, 13], [22, 19]],
      name: { en: 'The Grump\'s Gust', es: 'La Ráfaga del Gruñón', fa: 'باد غرغرو' },
      taunt: { en: 'Whoosh! Letters get lost in wartime. Sam will never read this one!', es: '¡Fiuuu! Las cartas se pierden en la guerra. ¡Sam nunca leerá esta!', fa: 'ووش! نامه‌ها در زمان جنگ گم می‌شوند. سام هرگز این یکی را نمی‌خواند!' },
      clues: [
        { t: { en: 'Piece 1 blew where families grow their own vegetables, so more farm food goes to soldiers.', es: 'El pedazo 1 voló a donde las familias siembran sus verduras, para que haya más comida para los soldados.', fa: 'تکهٔ ۱ به جایی رفت که خانواده‌ها سبزی خود را می‌کارند تا غذای بیشتر به سربازان برسد.' },
          zones: [{ x: 3, y: 12, w: 7, h: 3 }],
          noBy: [{ x: 11, y: 3, w: 4, h: 1, t: { en: 'This is the ration-book office. The garden is south-west, near Grandpa Sal\'s home.', es: 'Esta es la oficina de racionamiento. El huerto está al suroeste, cerca de la casa del abuelo Sal.', fa: 'این دفتر کتابچه‌های جیره است. باغچه در جنوب غرب، نزدیک خانهٔ پدرکلان سال است.' } }],
          found: { en: 'Piece 1, in the victory garden! It says: "We grew beans and tomatoes."', es: '¡El pedazo 1, en el huerto de la victoria! Dice: "Sembramos frijoles y tomates".', fa: 'تکهٔ ۱، در باغچهٔ پیروزی! نوشته: «ما لوبیا و بادنجان رومی کاشتیم.»' } },
        { t: { en: 'Piece 2 blew to the booth where people lend money to the government for the war.', es: 'El pedazo 2 voló al puesto donde la gente le presta dinero al gobierno para la guerra.', fa: 'تکهٔ ۲ به غرفه‌ای رفت که مردم برای جنگ به حکومت پول قرض می‌دهند.' },
          zones: [{ x: 25, y: 3, w: 5, h: 1 }],
          noBy: [{ x: 19, y: 3, w: 5, h: 1, t: { en: 'This is the soldiers\' canteen. The bond booth is just east of it.', es: 'Esta es la cantina para soldados. El puesto de bonos está justo al este.', fa: 'این باشگاه سربازان است. غرفهٔ اوراق قرضه درست شرقِ آن است.' } }],
          found: { en: 'Piece 2, at the bond booth! It says: "I bought a war stamp at school."', es: '¡El pedazo 2, en el puesto de bonos! Dice: "Compré una estampilla de guerra en la escuela".', fa: 'تکهٔ ۲، کنار غرفهٔ اوراق قرضه! نوشته: «در مکتب یک تکت جنگ خریدم.»' } },
        { t: { en: 'Piece 3 blew to where women weld and fix warships, near the water.', es: 'El pedazo 3 voló a donde las mujeres sueldan y reparan barcos de guerra, junto al agua.', fa: 'تکهٔ ۳ به جایی رفت که زنان کشتی‌های جنگی را جوش می‌دهند و ترمیم می‌کنند، کنار آب.' },
          zones: [{ x: 22, y: 15, w: 7, h: 1 }],
          noBy: [{ x: 1, y: 16, w: 8, h: 1, t: { en: 'This is the west end of the waterfront. The navy yard is far to the east.', es: 'Este es el extremo oeste de la orilla. El astillero naval está lejos, al este.', fa: 'این سر غربی کنار آب است. کشتی‌سازی نیروی بحری دور، در شرق است.' } }],
          found: { en: 'Piece 3, at the navy yard! It says: "Mom works at the navy yard now!"', es: '¡El pedazo 3, en el astillero! Dice: "¡Mamá ahora trabaja en el astillero naval!"', fa: 'تکهٔ ۳، در کشتی‌سازی! نوشته: «مادر حالا در کشتی‌سازی نیروی بحری کار می‌کند!»' } }
      ],
      win: { en: 'Caught you! The gust dies down. All 3 pieces of Ruby\'s letter fit together.', es: '¡Te atrapé! La ráfaga se calma. Los 3 pedazos de la carta de Ruby encajan.', fa: 'گرفتمت! باد آرام شد. هر ۳ تکهٔ نامهٔ روبی با هم جور شد.' },
      item: { icon: '✉️', name: { en: 'Ruby\'s letter to Sam', es: 'La carta de Ruby a Sam', fa: 'نامهٔ روبی به سام' } }
    }
  },

  scraps: [[1, 1], [30, 6], [1, 15]],
  smudges: [[8, 4], [11, 15]],

  challenge: {
    at: [19, 10],
    type: 'carry', // in the world; the card version (sort) is the fallback
    // saving by the ration-book office, working by the navy yard, bonds and giving by the bond booth
    zones: [{ bin: 'save', x: 11, y: 3, w: 4, h: 2 }, { bin: 'work', x: 22, y: 15, w: 6, h: 2 }, { bin: 'give', x: 25, y: 3, w: 5, h: 2 }],
    stat: 'pla',
    title: { en: 'How did people help?', es: '¿Cómo ayudó la gente?', fa: 'مردم چطور کمک کردند؟' },
    intro: { en: 'The Grump scattered the home front cards. Carry each card to the way people helped.',
      es: 'El Gruñón regó las tarjetas del frente interno. Lleva cada tarjeta a la forma en que la gente ayudó.',
      fa: 'غرغرو کارت‌های جبههٔ داخلی را پراگنده کرد. هر کارت را به راهی ببر که مردم کمک کردند.' },
    bins: [
      { id: 'save', icon: '🎟️', label: { en: 'Rationing & saving', es: 'Racionar y ahorrar', fa: 'جیره‌بندی و صرفه‌جویی' },
        sub: { en: 'using less, so troops have enough', es: 'usar menos, para que las tropas tengan suficiente', fa: 'کمتر مصرف کردن تا سربازان به اندازه داشته باشند' } },
      { id: 'work', icon: '🔧', label: { en: 'Working for the war', es: 'Trabajar para la guerra', fa: 'کار برای جنگ' },
        sub: { en: 'new jobs building ships and planes', es: 'trabajos nuevos haciendo barcos y aviones', fa: 'کارهای نو در ساختن کشتی و طیاره' } },
      { id: 'give', icon: '💵', label: { en: 'Buying bonds & giving', es: 'Comprar bonos y donar', fa: 'خریدن اوراق قرضه و بخشیدن' },
        sub: { en: 'lending money and giving scrap', es: 'prestar dinero y donar chatarra', fa: 'قرض دادن پول و بخشیدن آهن کهنه' } }
    ],
    items: [
      { bin: 'save', icon: '🍬', t: { en: 'Sugar and meat stamps in the ration book', es: 'Estampillas de azúcar y carne en la libreta', fa: 'تکت‌های بوره و گوشت در کتابچهٔ جیره' },
        why: { en: 'Families needed ration stamps to buy sugar and meat. Then the troops had enough food.', es: 'Las familias necesitaban estampillas para comprar azúcar y carne. Así las tropas tenían comida.', fa: 'خانواده‌ها برای خریدن بوره و گوشت تکت جیره لازم داشتند. آن وقت سربازان غذای کافی داشتند.' } },
      { bin: 'save', icon: '⛽', t: { en: 'A gas ration sticker on the car', es: 'Una calcomanía de gasolina en el carro', fa: 'برچسپ جیرهٔ تیل روی موتر' },
        why: { en: 'Gas was rationed. Driving less also saved tires, because rubber was needed for the war.', es: 'La gasolina estaba racionada. Manejar menos también ahorraba llantas, porque el caucho era para la guerra.', fa: 'تیل جیره‌بندی بود. کمتر موتر راندن تایر را هم نگه می‌داشت، چون رابر برای جنگ لازم بود.' } },
      { bin: 'save', icon: '🥕', t: { en: 'Vegetables from a victory garden', es: 'Verduras de un huerto de la victoria', fa: 'سبزی از باغچهٔ پیروزی' },
        why: { en: 'Families grew their own food. Then more farm food could go to the troops.', es: 'Las familias sembraban su propia comida. Así más comida de las granjas iba a las tropas.', fa: 'خانواده‌ها غذای خود را کاشتند. آن وقت غذای بیشتر کشتزارها به سربازان می‌رسید.' } },
      { bin: 'work', icon: '🔥', t: { en: 'Women weld warships at the navy yard', es: 'Mujeres sueldan barcos en el astillero naval', fa: 'زنان در کشتی‌سازی کشتی جنگی جوش می‌دهند' },
        why: { en: 'Millions of women took war jobs. "Rosie the Riveter" became their symbol.', es: 'Millones de mujeres tomaron trabajos de guerra. "Rosie la Remachadora" fue su símbolo.', fa: 'میلیون‌ها زن کارهای جنگی گرفتند. «روزی پرچ‌کار» نشانهٔ آن‌ها شد.' } },
      { bin: 'work', icon: '🏭', t: { en: 'Black workers win new war factory jobs', es: 'Obreros negros consiguen trabajos en fábricas de guerra', fa: 'کارگران سیاه‌پوست کار نو در فابریکه‌های جنگی می‌گیرند' },
        why: { en: 'A 1941 order banned unfair hiring by race in war factories. Many Black workers got new jobs.', es: 'Una orden de 1941 prohibió contratar de forma injusta por raza en fábricas de guerra. Muchos obreros negros consiguieron trabajo.', fa: 'فرمانی در ۱۹۴۱ استخدام ناعادلانه بر اساس نژاد را منع کرد. بسیاری از کارگران سیاه‌پوست کار نو گرفتند.' } },
      { bin: 'give', icon: '💵', t: { en: 'Buying a war bond', es: 'Comprar un bono de guerra', fa: 'خریدن اوراق قرضهٔ جنگ' },
        why: { en: 'A war bond lent money to the government. Years later, it paid back more.', es: 'Un bono de guerra le prestaba dinero al gobierno. Años después, devolvía más.', fa: 'اوراق قرضه به حکومت پول قرض می‌داد. سال‌ها بعد، بیشتر پس می‌داد.' } },
      { bin: 'give', icon: '🎫', t: { en: 'Kids buy war stamps at school', es: 'Niños compran estampillas de guerra en la escuela', fa: 'کودکان در مکتب تکت جنگ می‌خرند' },
        why: { en: 'Children bought stamps for a dime or more. A full stamp book could become a war bond.', es: 'Los niños compraban estampillas de 10 centavos o más. Una libreta llena podía volverse un bono.', fa: 'کودکان تکت ده سنتی یا بیشتر می‌خریدند. کتابچهٔ پُر می‌توانست اوراق قرضه شود.' } },
      { bin: 'give', icon: '🥫', t: { en: 'Old pots, cans and tires for the scrap drive', es: 'Ollas, latas y llantas viejas para la colecta', fa: 'دیگ، قوطی و تایر کهنه برای جمع‌آوری آهن کهنه' },
        why: { en: 'People gave old metal and rubber. Factories turned it into ships, tanks and planes.', es: 'La gente donaba metal y caucho viejos. Las fábricas los volvían barcos, tanques y aviones.', fa: 'مردم فلز و رابر کهنه دادند. فابریکه‌ها از آن کشتی، تانک و طیاره ساختند.' } }
    ],
    success: { en: 'The home front is clear again! Everyone helped: saving, working and giving.', es: '¡El frente interno está claro otra vez! Todos ayudaron: ahorrando, trabajando y donando.', fa: 'جبههٔ داخلی دوباره روشن شد! همه کمک کردند: با صرفه‌جویی، کار و بخشش.' }
  },

  boss: {
    at: [26, 11],
    stat: 'pla',
    need: 3,
    name: { en: 'The Blackout Grump', es: 'El Gruñón del Apagón', fa: 'غرغروی خاموشی' },
    appear: { en: 'The Blackout Grump is hiding in the dark fog by the navy yard!', es: '¡El Gruñón del Apagón se esconde en la niebla oscura junto al astillero!', fa: 'غرغروی خاموشی در مه تاریک کنار کشتی‌سازی پنهان است!' },
    taunt: { en: 'So many people suffered in this war. Soon no one will remember them.', es: 'Tanta gente sufrió en esta guerra. Pronto nadie los recordará.', fa: 'مردم بسیاری در این جنگ رنج کشیدند. به زودی هیچ‌کس آن‌ها را به یاد نمی‌آورد.' },
    win: { en: 'The dark fog lifts over the harbor. Journal page 7.3 floats down into your hands!', es: 'La niebla oscura se va del puerto. ¡La página 7.3 del diario cae en tus manos!', fa: 'مه تاریک از روی بندر کنار می‌رود. صفحهٔ ۷.۳ روزنامچه به دستت می‌افتد!' },
    questions: [
      { q: { en: 'Who was the dictator of Nazi Germany?', es: '¿Quién era el dictador de la Alemania nazi?', fa: 'دیکتاتور آلمان نازی چه کسی بود؟' },
        choices: [
          { en: 'Adolf Hitler', es: 'Adolf Hitler', fa: 'آدولف هیتلر' },
          { en: 'Benito Mussolini', es: 'Benito Mussolini', fa: 'بنیتو موسولینی' },
          { en: 'Winston Churchill', es: 'Winston Churchill', fa: 'وینستون چرچیل' },
          { en: 'Franklin Roosevelt', es: 'Franklin Roosevelt', fa: 'فرانکلین روزولت' }],
        answer: 0,
        why: { en: 'Hitler ruled Germany. Mussolini ruled Italy. Churchill led Britain, and Roosevelt led the US.', es: 'Hitler gobernaba Alemania. Mussolini, Italia. Churchill dirigía Gran Bretaña, y Roosevelt, EE. UU.', fa: 'هیتلر بر آلمان حکومت می‌کرد. موسولینی بر ایتالیا. چرچیل رهبر بریتانیا و روزولت رهبر امریکا بود.' } },
      { q: { en: 'Britain and France let Hitler take land, hoping to avoid war. What is this called?', es: 'Gran Bretaña y Francia dejaron que Hitler tomara tierras para evitar la guerra. ¿Cómo se llama?', fa: 'بریتانیا و فرانسه گذاشتند هیتلر سرزمین بگیرد تا جنگ نشود. این را چه می‌گویند؟' },
        choices: [
          { en: 'Appeasement', es: 'Apaciguamiento', fa: 'سیاست سازش' },
          { en: 'Lend-Lease', es: 'Préstamo y Arriendo', fa: 'قرض و اجاره' },
          { en: 'Rationing', es: 'Racionamiento', fa: 'جیره‌بندی' },
          { en: 'Isolationism', es: 'Aislacionismo', fa: 'انزواطلبی' }],
        answer: 0,
        why: { en: 'Appeasement means giving in, hoping an attacker will stop. It did not work. Hitler wanted more.', es: 'Apaciguar es ceder, esperando que el agresor pare. No funcionó. Hitler quería más.', fa: 'سیاست سازش یعنی کوتاه آمدن به امید این‌که حمله‌کننده بس کند. نتیجه نداد. هیتلر بیشتر خواست.' } },
      { q: { en: 'What event brought the United States into World War II?', es: '¿Qué hecho metió a Estados Unidos en la Segunda Guerra Mundial?', fa: 'کدام واقعه امریکا را وارد جنگ جهانی دوم کرد؟' },
        choices: [
          { en: 'Japan\'s attack on Pearl Harbor', es: 'El ataque de Japón a Pearl Harbor', fa: 'حملهٔ جاپان به پرل هاربر' },
          { en: 'Germany\'s attack on Norfolk, Virginia', es: 'El ataque de Alemania a Norfolk, Virginia', fa: 'حملهٔ آلمان به نورفک، ویرجینیا' },
          { en: 'Italy\'s attack on New York', es: 'El ataque de Italia a Nueva York', fa: 'حملهٔ ایتالیا به نیویارک' },
          { en: 'A British vote in London', es: 'Una votación británica en Londres', fa: 'یک رأی‌گیری بریتانیا در لندن' }],
        answer: 0,
        why: { en: 'On December 7, 1941, Japan attacked Pearl Harbor, Hawaii. The next day, the US declared war.', es: 'El 7 de diciembre de 1941, Japón atacó Pearl Harbor, Hawái. Al día siguiente, EE. UU. declaró la guerra.', fa: 'در ۷ دسامبر ۱۹۴۱، جاپان به پرل هاربر در هاوایی حمله کرد. روز بعد، امریکا اعلان جنگ کرد.' } },
      { q: { en: 'What happened on D-Day, June 6, 1944?', es: '¿Qué pasó el Día D, el 6 de junio de 1944?', fa: 'در روز دی، ۶ جون ۱۹۴۴، چه شد؟' },
        choices: [
          { en: 'Allied troops landed in France', es: 'Tropas aliadas desembarcaron en Francia', fa: 'سربازان متحد در فرانسه پیاده شدند' },
          { en: 'Japan attacked Pearl Harbor', es: 'Japón atacó Pearl Harbor', fa: 'جاپان به پرل هاربر حمله کرد' },
          { en: 'Germany won the whole war in Europe', es: 'Alemania ganó toda la guerra en Europa', fa: 'آلمان تمام جنگ اروپا را برد' },
          { en: 'The US sent its first bonds', es: 'EE. UU. vendió sus primeros bonos', fa: 'امریکا اولین اوراق قرضه را فروخت' }],
        answer: 0,
        why: { en: 'Allied troops crossed the sea and landed in Normandy, France. They began to free Western Europe.', es: 'Las tropas aliadas cruzaron el mar y desembarcaron en Normandía, Francia. Empezaron a liberar Europa occidental.', fa: 'سربازان متحد از بحر گذشتند و در نورماندی فرانسه پیاده شدند. آزادی اروپای غربی را شروع کردند.' } },
      { q: { en: 'What did Black Americans mean by the "Double V" campaign?', es: '¿Qué querían decir los afroamericanos con la campaña de la "Doble V"?', fa: 'امریکایی‌های سیاه‌پوست از کمپاین «دوبل وی» چه منظور داشتند؟' },
        choices: [
          { en: 'Beat racism at home, win the war', es: 'Vencer el racismo en casa y ganar la guerra', fa: 'نژادپرستی را در وطن شکست بدهیم و جنگ را ببریم' },
          { en: 'Win two big battles in North Africa', es: 'Ganar dos grandes batallas en África del Norte', fa: 'دو جنگ بزرگ را در شمال افریقا ببریم' },
          { en: 'Vote two times in every election', es: 'Votar dos veces en cada elección', fa: 'در هر انتخابات دو بار رأی بدهیم' },
          { en: 'Build twice as many warships', es: 'Hacer el doble de barcos de guerra', fa: 'دو برابر کشتی جنگی بسازیم' }],
        answer: 0,
        why: { en: 'They fought for freedom abroad and equal rights at home. The Tuskegee Airmen showed their skill.', es: 'Luchaban por la libertad afuera y la igualdad en casa. Los aviadores de Tuskegee mostraron su talento.', fa: 'آن‌ها برای آزادی در بیرون و حقوق برابر در وطن مبارزه کردند. هوانوردان توسکیجی مهارت خود را نشان دادند.' } },
      { q: { en: 'What did Executive Order 9066 do in 1942?', es: '¿Qué hizo la Orden Ejecutiva 9066 en 1942?', fa: 'فرمان اجرایی ۹۰۶۶ در سال ۱۹۴۲ چه کرد؟' },
        choices: [
          { en: 'Forced Japanese Americans into camps', es: 'Obligó a japoneses estadounidenses a ir a campos', fa: 'امریکایی‌های جاپانی‌تبار را به زور به کمپ فرستاد' },
          { en: 'Started rationing of sugar and gas', es: 'Empezó a racionar azúcar y gasolina', fa: 'جیره‌بندی بوره و تیل را شروع کرد' },
          { en: 'Sent weapons to Britain and its allies', es: 'Envió armas a Gran Bretaña y sus aliados', fa: 'به بریتانیا و متحدانش سلاح فرستاد' },
          { en: 'Gave women new jobs in the navy yards', es: 'Dio trabajos nuevos a mujeres en astilleros', fa: 'به زنان در کشتی‌سازی‌ها کار نو داد' }],
        answer: 0,
        why: { en: 'About 120,000 people of Japanese descent, most US citizens, were forced into camps. In 1988, the US apologized and paid.', es: 'Unas 120,000 personas de origen japonés, la mayoría ciudadanos, fueron llevadas a campos. En 1988, EE. UU. pidió perdón y pagó.', fa: 'حدود ۱۲۰٬۰۰۰ نفر جاپانی‌تبار، بیشترشان تبعهٔ امریکا، به زور به کمپ‌ها فرستاده شدند. در ۱۹۸۸ امریکا معذرت خواست و پول داد.' } },
      { q: { en: 'What was the Holocaust?', es: '¿Qué fue el Holocausto?', fa: 'هولوکاست چه بود؟' },
        choices: [
          { en: 'The Nazis\' murder of six million Jews', es: 'El asesinato de seis millones de judíos por los nazis', fa: 'قتل شش میلیون یهودی به دست نازی‌ها' },
          { en: 'A large battle on the beaches of France', es: 'Una gran batalla en las playas de Francia', fa: 'یک جنگ بزرگ در ساحل‌های فرانسه' },
          { en: 'A plan to ship food to Britain', es: 'Un plan para mandar comida a Gran Bretaña', fa: 'نقشه‌ای برای فرستادن غذا به بریتانیا' },
          { en: 'The attack on Pearl Harbor', es: 'El ataque a Pearl Harbor', fa: 'حمله به پرل هاربر' }],
        answer: 0,
        why: { en: 'Nazi Germany murdered six million Jews and millions of others. We remember them, so it never happens again.', es: 'La Alemania nazi asesinó a seis millones de judíos y a millones de otras personas. Los recordamos para que nunca se repita.', fa: 'آلمان نازی شش میلیون یهودی و میلیون‌ها نفر دیگر را کشت. ما آن‌ها را به یاد می‌آوریم تا دیگر هرگز تکرار نشود.' } },
      { q: { en: 'What happened after atomic bombs hit Hiroshima and Nagasaki in August 1945?', es: '¿Qué pasó después de que bombas atómicas cayeran en Hiroshima y Nagasaki en agosto de 1945?', fa: 'بعد از این‌که بم‌های اتمی در اگست ۱۹۴۵ بر هیروشیما و ناگاساکی افتادند، چه شد؟' },
        choices: [
          { en: 'Japan surrendered, and the war ended', es: 'Japón se rindió y la guerra terminó', fa: 'جاپان تسلیم شد و جنگ تمام شد' },
          { en: 'Germany started fighting the war again', es: 'Alemania volvió a pelear la guerra', fa: 'آلمان دوباره جنگیدن را شروع کرد' },
          { en: 'The US went back to being neutral', es: 'EE. UU. volvió a ser neutral', fa: 'امریکا دوباره بی‌طرف شد' },
          { en: 'D-Day began on the coast of France', es: 'El Día D empezó en la costa de Francia', fa: 'روز دی در ساحل فرانسه شروع شد' }],
        answer: 0,
        why: { en: 'Germany surrendered on May 8 (V-E Day). Japan gave up in August (V-J Day) and signed on September 2.', es: 'Alemania se rindió el 8 de mayo (Día V-E). Japón se rindió en agosto (Día V-J) y firmó el 2 de septiembre.', fa: 'آلمان در ۸ می تسلیم شد (روز وی-ای). جاپان در اگست تسلیم شد (روز وی-جی) و در ۲ سپتمبر امضا کرد.' } }
    ]
  },

  learned: [
    { en: '[[dictator|Dictators]] in Germany and Italy and Japan\'s military leaders attacked other lands. Pearl Harbor brought the US into the war.', es: 'Los [[dictator|dictadores]] de Alemania e Italia y los jefes militares de Japón atacaron otras tierras. Pearl Harbor metió a EE. UU. en la guerra.', fa: '[[dictator|دیکتاتورهای]] آلمان و ایتالیا و رهبران نظامی جاپان به سرزمین‌های دیگر حمله کردند. پرل هاربر امریکا را وارد جنگ کرد.' },
    { en: 'On the [[home front|home front]], people used [[rationing|rationing]], [[victory garden|victory gardens]], [[war bond|war bonds]] and new war jobs to help.', es: 'En el [[home front|frente interno]], la gente ayudó con el [[rationing|racionamiento]], los [[victory garden|huertos de la victoria]], los [[war bond|bonos de guerra]] y nuevos trabajos.', fa: 'در [[home front|جبههٔ داخلی]]، مردم با [[rationing|جیره‌بندی]]، [[victory garden|باغچه‌های پیروزی]]، [[war bond|اوراق قرضهٔ جنگ]] و کارهای نو کمک کردند.' },
    { en: 'Black Americans fought for [[double v|Double V]]. Japanese Americans were unfairly forced into camps. After D-Day and island hopping, the Allies won in 1945.', es: 'Los afroamericanos lucharon por la [[double v|Doble V]]. Los japoneses estadounidenses fueron enviados injustamente a campos. Tras el Día D y la toma de islas, los Aliados ganaron en 1945.', fa: 'امریکایی‌های سیاه‌پوست برای [[double v|دوبل وی]] مبارزه کردند. امریکایی‌های جاپانی‌تبار ناعادلانه به کمپ‌ها فرستاده شدند. بعد از روز دی و گرفتن جزیره‌ها، متحدان در ۱۹۴۵ پیروز شدند.' }
  ],
  reflect: {
    q: { en: 'On the home front, everyone helped. How do people in your community help each other in hard times?', es: 'En el frente interno, todos ayudaron. ¿Cómo se ayudan las personas de tu comunidad en tiempos difíciles?', fa: 'در جبههٔ داخلی، همه کمک کردند. مردم محل تو در روزهای سخت چطور به همدیگر کمک می‌کنند؟' },
    starter: { en: 'In hard times, people in my community', es: 'En tiempos difíciles, la gente de mi comunidad', fa: 'در روزهای سخت، مردم محل من' }
  }
};
