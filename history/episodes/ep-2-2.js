/* TIMEWALKER · Episode 2.2 · The Columbian Exchange (WHII)
   Two shores of the Atlantic around 1550. West half: a farming town in New Spain (today Mexico),
   with maize, beans and squash rows, adobe houses, a market, sugarcane and a cacao grove.
   East half: the port of Seville, Spain, with tiled houses, a plaza, market stalls and wheat.
   Between them (x 13-18) is the Atlantic; two long docks (rows 4 and 15) are the ship route. */
window.EPISODE = {
  id: '2.2',
  realm: 2,
  sol: 'WHII',
  title: { en: 'The Columbian Exchange', es: 'El intercambio colombino', fa: 'مبادلهٔ کلمبی' },
  place: { en: 'Across the Atlantic, 1550', es: 'A través del Atlántico, 1550', fa: 'دو طرف بحر اطلس، ۱۵۵۰' },
  intro: [
    { en: 'The Grump blurred the [[columbian exchange|Columbian Exchange]] page. People forgot where foods and animals came from.',
      es: 'El Gruñón borró la página del [[columbian exchange|intercambio colombino]]. La gente olvidó de dónde vienen sus comidas y animales.',
      fa: 'غرغرو صفحهٔ [[columbian exchange|مبادلهٔ کلمبی]] را تار کرد. مردم فراموش کردند غذا و حیوان‌هایشان از کجا آمده‌اند.' },
    { en: 'Talk to the 3 people here, then fix the time stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del tiempo.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ زمان را درست کن.' }
  ],
  /* cut scenes (fun-pass-4): the middle of the Atlantic on the world map, 1550 on the timeline */
  scenes: {
    at: [-30, 30],
    year: 1550,
    start: [
      { en: 'In 1492, Columbus sailed west across the Atlantic Ocean.',
        es: 'En 1492, Colón navegó hacia el oeste y cruzó el océano Atlántico.',
        fa: 'در سال ۱۴۹۲، کلمبوس به طرف غرب از بحر اطلس گذشت.' },
      { en: 'After that, plants, animals, people and diseases moved between the hemispheres.',
        es: 'Después, plantas, animales, personas y enfermedades pasaron de un hemisferio al otro.',
        fa: 'بعد از آن، نبات‌ها، حیوان‌ها، مردم و مریضی‌ها میان دو نیم‌کره رفت و آمد کردند.' },
      { en: 'Historians call this the Columbian Exchange.',
        es: 'Los historiadores llaman a esto el intercambio colombino.',
        fa: 'تاریخ‌دانان این را مبادلهٔ کلمبی می‌نامند.' }
    ],
    page: { en: 'Today, corn grows on every continent except Antarctica.',
      es: 'Hoy el maíz crece en todos los continentes menos en la Antártida.',
      fa: 'امروز جواری در همهٔ قاره‌ها به جز انتارکتیکا می‌روید.' },
    guess: {
      q: { en: 'Corn first grew in the Americas. Where did it go after 1492?', es: 'El maíz creció primero en América. ¿A dónde llegó después de 1492?', fa: 'جواری اول در قارهٔ امریکا رویید. بعد از ۱۴۹۲ به کجا رفت؟' },
      choices: [
        { t: { en: '🌍 All over the world', es: '🌍 A todo el mundo', fa: '🌍 به همهٔ جهان' }, ok: true },
        { t: { en: '🏠 Nowhere at all', es: '🏠 A ningún lugar', fa: '🏠 به هیچ جا' } }
      ],
      why: { en: 'Ships carried corn to Europe, Africa and Asia. Now it grows almost everywhere people farm.', es: 'Los barcos llevaron el maíz a Europa, África y Asia. Hoy crece casi dondequiera que se cultiva.', fa: 'کشتی‌ها جواری را به اروپا، افریقا و آسیا بردند. حالا تقریباً هر جا که کشت می‌شود، می‌روید.' }
    },
    next: {
      q: { en: 'Next: the Atlantic slave trade. Did enslaved Africans choose to go?', es: 'Ahora: la trata atlántica de esclavos. ¿Los africanos esclavizados eligieron ir?', fa: 'بعدی: تجارت برده در بحر اطلس. آیا افریقایی‌های برده خودشان رفتن را انتخاب کردند؟' },
      choices: [
        { t: { en: 'No, taken by force', es: 'No, a la fuerza', fa: 'نه، به زور برده شدند' }, ok: true },
        { t: { en: 'Yes, they chose', es: 'Sí, ellos eligieron', fa: 'بله، خودشان خواستند' } }
      ],
      why: { en: 'They were captured and taken by force. Millions suffered. We will learn their story with care.', es: 'Los capturaron y se los llevaron a la fuerza. Millones sufrieron. Aprenderemos su historia con respeto.', fa: 'آن‌ها اسیر شدند و به زور برده شدند. میلیون‌ها نفر رنج کشیدند. داستان‌شان را با احترام یاد می‌گیریم.' }
    }
  },
  /* houses (fun-pass-4): who lives behind each door; walk in and talk (2 lines each) */
  houses: [
    { at: [5, 2], name: { en: 'Grandpa Tenoch', es: 'Abuelo Tenoch', fa: 'پدرکلان تنوچ' },
      look: { skin: 3, hair: '#d8d8d8', shirt: '#e8dcc0', pants: '#5a4630', style: 'short' },
      lines: [
        { en: 'Come in! I am making tortillas from corn, like my grandparents did.', es: '¡Pasa! Estoy haciendo tortillas de maíz, como lo hacían mis abuelos.', fa: 'بیا داخل! از جواری تورتیا (نان نازک) می‌پزم، مثل پدرکلان‌هایم.' },
        { en: 'Now the Spanish people here also want bread made from wheat.', es: 'Ahora los españoles de aquí también quieren pan de trigo.', fa: 'حالا هسپانوی‌های اینجا نان گندمی هم می‌خواهند.' }
      ] },
    { at: [3, 13], name: { en: 'Yaretzi', es: 'Yaretzi', fa: 'یارتسی' },
      look: { skin: 4, hair: '#120c08', shirt: '#2f8f8f', pants: '#7a3a2a', style: 'long' },
      lines: [
        { en: 'I weave cloth. I always used cotton, a plant from this land.', es: 'Yo tejo tela. Siempre usé algodón, una planta de esta tierra.', fa: 'من تکه می‌بافم. همیشه از پخته کار گرفتم، نباتی از همین سرزمین.' },
        { en: 'Now I also spin wool. Sheep came here on Spanish ships.', es: 'Ahora también hilo lana. Las ovejas llegaron aquí en barcos españoles.', fa: 'حالا پشم هم می‌ریسم. گوسفندها با کشتی‌های هسپانوی به اینجا آمدند.' }
      ] },
    { at: [22, 2], name: { en: 'Señora Lucía', es: 'Señora Lucía', fa: 'خانم لوسیا' },
      look: { skin: 1, hair: '#3a2416', shirt: '#8a2a3a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'Welcome to Seville! Ships from the Americas sail up our river.', es: '¡Bienvenido a Sevilla! Los barcos de América suben por nuestro río.', fa: 'به سویل خوش آمدی! کشتی‌ها از امریکا از دریای ما بالا می‌آیند.' },
        { en: 'My husband tried turkey last week. The bird came from New Spain!', es: 'Mi esposo probó el pavo la semana pasada. ¡Esa ave vino de la Nueva España!', fa: 'شوهرم هفتهٔ گذشته فیل‌مرغ خورد. این پرنده از هسپانیهٔ نو آمده!' }
      ] },
    { at: [28, 13], name: { en: 'Diego', es: 'Diego', fa: 'دیگو' },
      look: { skin: 2, hair: '#1a1208', shirt: '#2a3a6a', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'I write records at the House of Trade in Seville.', es: 'Escribo registros en la Casa de Contratación de Sevilla.', fa: 'من در خانهٔ تجارت سویل ثبت‌ها را می‌نویسم.' },
        { en: 'We count every ship, and the silver it brings from the Americas.', es: 'Contamos cada barco y la plata que trae de América.', fa: 'ما هر کشتی و نقره‌ای را که از امریکا می‌آورد، حساب می‌کنیم.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     West (x 0-12): New Spain. Maize (2) and beans/squash (1) rows, wheat (w), adobe houses (H over N),
     the market (m), sugarcane (e) and a small cacao grove (T).
     x 13-18: the Atlantic (~ near the shores, = deep water). Rows 4 and 15: the docks (k) and the ship route (b).
     East (x 19-31): Seville. Tiled houses (R/Q over h), the plaza (l), market stalls (m), wheat (w). */
  map: [
    'TTTTTTTTTTTTT~====~WWWWWWWWWWWWW',
    'T.,.HHH..,..s~====~s.RRR..QQQ..W',
    'T...NdN.....s~====~s.hdh..hhh..W',
    'T.x..:......s~====~s.....l.....W',
    'T::::::::::::kbbbbkllllllllllllW',
    'T.2222.wwww.s~====~s..l...wwww.W',
    'T.1111.wwww.s~====~s..l...wwww.W',
    'T.2222......s~====~s..lllll....W',
    'T.1111.mmm..s~====~s.......,...W',
    'T......:....s~====~s.x.........W',
    'T....:::....s~====~s.....l.....W',
    'T....:......s~====~s.....l.....W',
    'T.HHH:.eeee.s~====~s.RRR.l.QQQ.W',
    'T.NdN:.eeee.s~====~s.hhh.l.hdh.W',
    'T....:......s~====~s.....l.....W',
    'T::::::::::::kbbbbklllllllllll.W',
    'T.2222..TT..s~====~s..mmm.ll...W',
    'T.1111.TTT..s~====~s......l.ww.W',
    'T.2222..T...s~====~s.,....l.ww.W',
    'T......,....s~====~s......l....W',
    'T.,.....,...s~====~s.,.........W',
    'TTTTTTTTTTTTT~====~WWWWWWWWWWWWW'
  ],
  start: [23, 19],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [20, 6], at: [24, 3], decor: 'coinold',
      clue: { en: 'From this note, walk 4 steps east, then 3 steps north. Look near the house.', es: 'Desde esta nota, camina 4 pasos al este y luego 3 pasos al norte. Busca cerca de la casa.', fa: 'از این یادداشت، ۴ قدم به شرق برو، بعد ۳ قدم به شمال. نزدیک خانه را ببین.' },
      text: { en: 'Spanish ships brought tons of silver from the Americas to Seville. Here is an old silver coin.', es: 'Los barcos españoles trajeron toneladas de plata de América a Sevilla. Aquí hay una moneda antigua de plata.', fa: 'کشتی‌های هسپانوی تُن‌ها نقره از امریکا به سویل آوردند. اینجا یک سکهٔ کهنهٔ نقره‌ای است.' } },
    { clueAt: [11, 10], at: [11, 18], decor: 'feather',
      clue: { en: 'From this note, walk 8 steps south. You will be near the cacao trees.', es: 'Desde esta nota, camina 8 pasos al sur. Llegarás cerca de los árboles de cacao.', fa: 'از این یادداشت، ۸ قدم به جنوب برو. نزدیک درختان کاکائو می‌رسی.' },
      text: { en: 'Aztec markets used [[cacao|cacao]] beans like money. Here is a bright green feather.', es: 'En los mercados aztecas, los granos de [[cacao|cacao]] se usaban como dinero. Aquí hay una pluma verde brillante.', fa: 'در بازارهای ازتک، دانه‌های [[cacao|کاکائو]] مثل پول به کار می‌رفت. اینجا یک پَر سبز روشن است.' } }
  ],

  words: {
    'columbian exchange': { en: 'the movement of plants, animals, people and diseases across the Atlantic after 1492', es: 'el paso de plantas, animales, personas y enfermedades a través del Atlántico después de 1492', fa: 'رفت و آمد نبات‌ها، حیوان‌ها، مردم و مریضی‌ها از راه بحر اطلس بعد از سال ۱۴۹۲' },
    crop: { en: 'a plant that farmers grow for food or to sell', es: 'una planta que los agricultores siembran para comer o vender', fa: 'نباتی که دهقانان برای خوراک یا فروش می‌کارند' },
    cacao: { en: 'a tree from the Americas; chocolate is made from its beans', es: 'un árbol de América; el chocolate se hace con sus granos', fa: 'درختی از قارهٔ امریکا؛ چاکلیت را از دانه‌های آن می‌سازند' },
    smallpox: { en: 'a deadly disease that spreads from person to person', es: 'una enfermedad mortal que pasa de persona a persona', fa: 'یک مریضی کشنده که از یک نفر به نفر دیگر می‌رسد' },
    immunity: { en: 'the body\'s power to fight a disease it has met before', es: 'la fuerza del cuerpo para combatir una enfermedad que ya conoce', fa: 'توان بدن برای جنگیدن با مریضی‌ای که قبلاً دیده است' },
    colony: { en: 'a land ruled by a faraway country', es: 'una tierra gobernada por un país lejano', fa: 'سرزمینی که یک کشور دور بر آن حکومت می‌کند' },
    plantation: { en: 'a huge farm that grows one crop to sell, often with forced labor', es: 'una finca enorme que siembra un solo cultivo para vender, muchas veces con trabajo forzado', fa: 'یک فارم بسیار بزرگ که یک حاصل را برای فروش می‌کارد، اکثراً با کار اجباری' },
    enslaved: { en: 'forced to work for no pay and kept as someone\'s property', es: 'obligado a trabajar sin pago y tratado como propiedad de otra persona', fa: 'مجبور به کار بی‌مزد و مثل مال کس دیگری نگه داشته شده' }
  },

  npcs: [
    {
      x: 6, y: 6,
      name: { en: 'Xochitl', es: 'Xóchitl', fa: 'سوچیتل' },
      role: { en: 'Nahua farmer', es: 'Agricultora nahua', fa: 'دهقان ناهوا' },
      look: { skin: 4, hair: '#120c08', shirt: '#d9542b', pants: '#2a4a3a', style: 'long' },
      lines: [
        { en: 'Niltze! That means hello in Nahuatl, my language.', es: '¡Niltze! Así se dice hola en náhuatl, mi idioma.', fa: 'نیلتسه! این در ناهواتل، زبان من، یعنی سلام.' },
        { en: 'Maize, or corn, is our main [[crop|crop]]. We grew it for thousands of years.', es: 'El maíz es nuestro [[crop|cultivo]] principal. Lo sembramos desde hace miles de años.', fa: 'جواری [[crop|حاصل]] اصلی ماست. هزاران سال است آن را می‌کاریم.' },
        { en: 'Beans, squash, tomatoes, chiles and [[cacao|cacao]] also first grew in the Americas.', es: 'Los frijoles, la calabaza, el tomate, el chile y el [[cacao|cacao]] también nacieron en América.', fa: 'لوبیا، کدو، بادنجان رومی، مرچ و [[cacao|کاکائو]] هم اول در قارهٔ امریکا روییدند.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Which food first grew in the Americas?', es: '¿Qué comida creció primero en América?', fa: 'کدام غذا اول در قارهٔ امریکا رویید؟' },
        choices: [
          { ok: true, t: { en: 'Corn', es: 'El maíz', fa: 'جواری' },
            why: { en: 'Yes! People in Mexico grew the first corn thousands of years ago.', es: '¡Sí! La gente de México sembró el primer maíz hace miles de años.', fa: 'بله! مردم مکسیکو هزاران سال پیش اولین جواری را کاشتند.' } },
          { t: { en: 'Wheat', es: 'El trigo', fa: 'گندم' },
            why: { en: 'Wheat first grew in Southwest Asia. Spanish ships brought it here.', es: 'El trigo creció primero en el suroeste de Asia. Los barcos españoles lo trajeron.', fa: 'گندم اول در جنوب غرب آسیا رویید. کشتی‌های هسپانوی آن را اینجا آوردند.' } },
          { t: { en: 'Rice', es: 'El arroz', fa: 'برنج' },
            why: { en: 'Rice first grew in Asia. It came to the Americas later, on ships.', es: 'El arroz creció primero en Asia. Llegó a América después, en barcos.', fa: 'برنج اول در آسیا رویید. بعدها با کشتی به قارهٔ امریکا آمد.' } }
        ]
      }
    },
    {
      x: 20, y: 16,
      name: { en: 'Pedro', es: 'Pedro', fa: 'پدرو' },
      role: { en: 'Ship\'s pilot', es: 'Piloto de barco', fa: 'رهنمای کشتی' },
      look: { skin: 2, hair: '#2a1a10', shirt: '#2f5f9a', pants: '#3a2a1a', hat: '#1a1a2a' },
      lines: [
        { en: 'I am a ship\'s pilot. I guide ships across the Atlantic Ocean.', es: 'Soy piloto de barco. Guío los barcos a través del océano Atlántico.', fa: 'من رهنمای کشتی هستم. کشتی‌ها را از بحر اطلس رهنمایی می‌کنم.' },
        { en: 'Our ships carry horses, cattle, pigs, wheat and sugarcane to the Americas.', es: 'Nuestros barcos llevan caballos, vacas, cerdos, trigo y caña de azúcar a América.', fa: 'کشتی‌های ما اسپ، گاو، خوک، گندم و نیشکر را به امریکا می‌برند.' },
        { en: 'They come back with new foods, and with silver from the mines.', es: 'Regresan con comidas nuevas y con plata de las minas.', fa: 'با غذاهای نو و نقره از معدن‌ها برمی‌گردند.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Which animal came to the Americas on European ships?', es: '¿Qué animal llegó a América en barcos europeos?', fa: 'کدام حیوان با کشتی‌های اروپایی به امریکا آمد؟' },
        choices: [
          { ok: true, t: { en: 'The horse', es: 'El caballo', fa: 'اسپ' },
            why: { en: 'Right! There were no horses in the Americas in 1492. Spanish ships brought them.', es: '¡Correcto! En 1492 no había caballos en América. Los trajeron los barcos españoles.', fa: 'درست! در سال ۱۴۹۲ در امریکا اسپ نبود. کشتی‌های هسپانوی آن‌ها را آوردند.' } },
          { t: { en: 'The turkey', es: 'El pavo', fa: 'فیل‌مرغ' },
            why: { en: 'Turkeys first lived in the Americas. Ships took them to Europe.', es: 'Los pavos vivían primero en América. Los barcos los llevaron a Europa.', fa: 'فیل‌مرغ اول در امریکا زندگی می‌کرد. کشتی‌ها آن را به اروپا بردند.' } },
          { t: { en: 'The llama', es: 'La llama', fa: 'لاما' },
            why: { en: 'Llamas come from the Andes Mountains in South America. They were already there.', es: 'Las llamas son de los Andes, en América del Sur. Ya vivían allí.', fa: 'لاما از کوه‌های اندیز در امریکای جنوبی است. از قبل آنجا بود.' } }
        ]
      }
    },
    {
      x: 4, y: 14,
      name: { en: 'Itzel', es: 'Itzel', fa: 'ایتسل' },
      role: { en: 'Healer', es: 'Curandera', fa: 'شفادهنده' },
      look: { skin: 5, hair: '#1a1008', shirt: '#6a4a8a', pants: '#3a2a20', robe: true, style: 'bun' },
      lines: [
        { en: 'I am a healer. This part of the story is sad, but important.', es: 'Soy curandera. Esta parte de la historia es triste, pero importante.', fa: 'من شفادهنده هستم. این بخش داستان غم‌انگیز، اما مهم است.' },
        { en: 'Europeans also brought diseases, like [[smallpox|smallpox]]. Native peoples had never met them.', es: 'Los europeos también trajeron enfermedades, como la [[smallpox|viruela]]. Los pueblos indígenas nunca las habían tenido.', fa: 'اروپایی‌ها مریضی‌هایی مثل [[smallpox|چیچک]] را هم آوردند. مردمان بومی هرگز آن‌ها را ندیده بودند.' },
        { en: 'Their bodies had no [[immunity|immunity]] to fight them. Millions of people died.', es: 'Sus cuerpos no tenían [[immunity|inmunidad]] para combatirlas. Murieron millones de personas.', fa: 'بدن‌شان برای جنگ با آن‌ها [[immunity|مصونیت]] نداشت. میلیون‌ها نفر مردند.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why did so many Native people get sick after 1492?', es: '¿Por qué se enfermaron tantos indígenas después de 1492?', fa: 'چرا بعد از ۱۴۹۲ این‌قدر زیاد از مردمان بومی مریض شدند؟' },
        choices: [
          { ok: true, t: { en: 'New diseases their bodies did not know', es: 'Enfermedades nuevas que su cuerpo no conocía', fa: 'مریضی‌های نو که بدن‌شان نمی‌شناخت' },
            why: { en: 'Yes. Their bodies had never met these diseases, so they had no immunity.', es: 'Sí. Su cuerpo nunca había tenido esas enfermedades, así que no tenía inmunidad.', fa: 'بله. بدن‌شان هرگز این مریضی‌ها را ندیده بود، پس مصونیت نداشت.' } },
          { t: { en: 'The winters became very cold and long', es: 'Los inviernos se volvieron muy fríos y largos', fa: 'زمستان‌ها خیلی سرد و دراز شدند' },
            why: { en: 'The weather did not change. New diseases from Europe made people sick.', es: 'El clima no cambió. Las enfermedades nuevas de Europa enfermaron a la gente.', fa: 'هوا تغییر نکرد. مریضی‌های نو از اروپا مردم را مریض کرد.' } },
          { t: { en: 'They ate too much corn every day', es: 'Comían demasiado maíz todos los días', fa: 'هر روز خیلی زیاد جواری می‌خوردند' },
            why: { en: 'Corn was healthy food for them. The sickness came from new diseases.', es: 'El maíz era comida sana para ellos. La enfermedad vino de males nuevos.', fa: 'جواری برای‌شان غذای صحی بود. مریضی از بیماری‌های نو آمد.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 2, y: 3, text: { en: 'NEW SPAIN · 1550 · A Spanish [[colony|colony]] in the land that is now Mexico.', es: 'NUEVA ESPAÑA · 1550 · Una [[colony|colonia]] española en la tierra que hoy es México.', fa: 'هسپانیهٔ نو · ۱۵۵۰ · یک [[colony|مستعمرهٔ]] هسپانیه در سرزمینی که امروز مکسیکو است.' } },
    { x: 21, y: 9, text: { en: 'SEVILLE · 1550 · Spain\'s ships to the Americas must sail from this port.', es: 'SEVILLA · 1550 · Los barcos de España hacia América deben salir de este puerto.', fa: 'سویل · ۱۵۵۰ · کشتی‌های هسپانیه به امریکا باید از این بندر حرکت کنند.' } }
  ],

  /* the quest: Doña Isabel the cook (gold !) in Seville -> Martín the sailor on the north dock
     -> Citlali at the market in New Spain: carry her the food that first grew in the Americas -> back to Isabel */
  quest: {
    stat: 'mov',
    title: { en: 'Chocolate for a Feast', es: 'Chocolate para un banquete', fa: 'چاکلیت برای مهمانی' },
    giver: {
      x: 24, y: 17,
      name: { en: 'Doña Isabel', es: 'Doña Isabel', fa: 'دونیا ایزابل' },
      role: { en: 'Cook', es: 'Cocinera', fa: 'آشپز' },
      look: { skin: 1, hair: '#4a2a1a', shirt: '#f2f2f2', pants: '#8a2a2a', style: 'bun' },
      lines: [
        { en: 'Welcome to Seville! I am cooking a big feast for the city.', es: '¡Bienvenido a Sevilla! Estoy cocinando un gran banquete para la ciudad.', fa: 'به سویل خوش آمدی! برای شهر یک مهمانی بزرگ پخته می‌کنم.' },
        { en: 'I want a new food from the Americas. Something Spain never had before!', es: 'Quiero una comida nueva de América. ¡Algo que España nunca tuvo!', fa: 'یک غذای نو از امریکا می‌خواهم. چیزی که هسپانیه هرگز نداشته!' },
        { en: 'Martín the sailor knows the ship route. Ask him on the dock.', es: 'El marinero Martín conoce la ruta de los barcos. Pregúntale en el muelle.', fa: 'مارتین ملاح راه کشتی را می‌داند. از او در بندرگاه بپرس.' }
      ],
      wait: { en: 'Martín waits by the north dock, on the west side of Seville.', es: 'Martín espera junto al muelle del norte, en el lado oeste de Sevilla.', fa: 'مارتین کنار بندرگاه شمالی، در طرف غرب سویل منتظر است.' },
      thanks: { en: 'Cacao from the Americas! We will make hot chocolate for the feast. Thank you!', es: '¡Cacao de América! Haremos chocolate caliente para el banquete. ¡Gracias!', fa: 'کاکائو از امریکا! برای مهمانی چاکلیت گرم درست می‌کنیم. تشکر!' }
    },
    contact: {
      x: 20, y: 3,
      name: { en: 'Martín', es: 'Martín', fa: 'مارتین' },
      role: { en: 'Sailor', es: 'Marinero', fa: 'ملاح' },
      look: { skin: 3, hair: '#1a1208', shirt: '#e8e0d0', pants: '#2a3a5a', hat: '#8a2a2a' },
      lines: [
        { en: 'Ships sail between Seville and New Spain. Walk this dock west across the sea.', es: 'Los barcos van entre Sevilla y la Nueva España. Camina por este muelle al oeste.', fa: 'کشتی‌ها میان سویل و هسپانیهٔ نو می‌روند. روی این بندرگاه به غرب برو.' },
        { en: 'Find Citlali at the market in New Spain. She knows the foods of that land.', es: 'Busca a Citlali en el mercado de la Nueva España. Ella conoce las comidas de esa tierra.', fa: 'سیتلالی را در بازار هسپانیهٔ نو پیدا کن. او غذاهای آن سرزمین را می‌شناسد.' }
      ]
    },
    action: {
      type: 'trade',
      trader: {
        x: 8, y: 9,
        name: { en: 'Citlali', es: 'Citlali', fa: 'سیتلالی' },
        role: { en: 'Market trader', es: 'Comerciante del mercado', fa: 'سوداگر بازار' },
        look: { skin: 4, hair: '#120c08', shirt: '#e0a020', pants: '#2a5a8a', style: 'long' },
        lines: [
          { en: 'Welcome to the market! People bring goods here from near and far.', es: '¡Bienvenido al mercado! La gente trae cosas aquí de cerca y de lejos.', fa: 'به بازار خوش آمدی! مردم از نزدیک و دور جنس به اینجا می‌آورند.' }
        ]
      },
      q: { en: 'Your cook wants a food first grown in the Americas. Find it and bring it to me.', es: 'Tu cocinera quiere una comida que nació en América. Búscala y tráemela.', fa: 'آشپز تو غذایی می‌خواهد که اول در امریکا رویید. آن را پیدا کن و پیش من بیاور.' },
      choices: [
        { ok: true, at: [10, 17], icon: '🫘', t: { en: 'A sack of cacao beans', es: 'Un saco de granos de cacao', fa: 'یک بوجی دانهٔ کاکائو' },
          why: { en: 'Yes! Cacao first grew in the Americas. Ships took it to Spain, and chocolate too.', es: '¡Sí! El cacao nació en América. Los barcos lo llevaron a España, y el chocolate también.', fa: 'بله! کاکائو اول در امریکا رویید. کشتی‌ها آن را به هسپانیه بردند، چاکلیت را هم.' } },
        { at: [9, 5], icon: '🌾', t: { en: 'A sack of wheat', es: 'Un saco de trigo', fa: 'یک بوجی گندم' },
          why: { en: 'Wheat came to the Americas from Europe. Spain already has plenty of wheat.', es: 'El trigo llegó a América desde Europa. España ya tiene mucho trigo.', fa: 'گندم از اروپا به امریکا آمد. هسپانیه خودش گندم زیاد دارد.' } },
        { at: [9, 13], icon: '🎋', t: { en: 'A bundle of sugarcane', es: 'Un atado de caña de azúcar', fa: 'یک بسته نیشکر' },
          why: { en: 'Sugarcane first grew in Asia. Europeans brought it to the Americas, so it is not new.', es: 'La caña de azúcar nació en Asia. Los europeos la trajeron a América; no es nueva.', fa: 'نیشکر اول در آسیا رویید. اروپایی‌ها آن را به امریکا آوردند، پس نو نیست.' } }
      ],
      item: { icon: '🫘', name: { en: 'A sack of cacao beans', es: 'Un saco de granos de cacao', fa: 'یک بوجی دانهٔ کاکائو' } }
    }
  },

  scraps: [[1, 20], [30, 1], [30, 20]],
  smudges: [[9, 2], [5, 19]],

  challenge: {
    at: [10, 20],
    type: 'sort',
    stat: 'reg',
    title: { en: 'Which way did it travel?', es: '¿Hacia dónde viajó?', fa: 'به کدام طرف سفر کرد؟' },
    intro: { en: 'The Grump mixed up the ship records. Sort each card. Did it leave the Americas, or come to them?',
      es: 'El Gruñón revolvió los registros de los barcos. Ordena cada tarjeta. ¿Salió de América o llegó a América?',
      fa: 'غرغرو ثبت‌های کشتی‌ها را به هم زد. هر کارت را جدا کن. از امریکا رفت، یا به امریکا آمد؟' },
    bins: [
      { id: 'from', icon: '🌽', label: { en: 'From the Americas to the rest of the world', es: 'De América al resto del mundo', fa: 'از امریکا به باقی جهان' },
        sub: { en: 'first grew or lived in the Americas', es: 'nació o vivía primero en América', fa: 'اول در امریکا رویید یا زندگی کرد' } },
      { id: 'to', icon: '⛵', label: { en: 'From Europe, Africa and Asia to the Americas', es: 'De Europa, África y Asia a América', fa: 'از اروپا، افریقا و آسیا به امریکا' },
        sub: { en: 'came on ships after 1492', es: 'llegó en barcos después de 1492', fa: 'بعد از ۱۴۹۲ با کشتی آمد' } }
    ],
    items: [
      { bin: 'from', t: { en: 'Corn', es: 'Maíz', fa: 'جواری' },
        why: { en: 'Corn first grew in Mexico. Now farmers grow it all over the world.', es: 'El maíz nació en México. Hoy se siembra en todo el mundo.', fa: 'جواری اول در مکسیکو رویید. حالا در همهٔ جهان کاشته می‌شود.' } },
      { bin: 'from', t: { en: 'Potato', es: 'Papa', fa: 'کچالو' },
        why: { en: 'Potatoes first grew in the Andes Mountains of South America.', es: 'La papa nació en los Andes, en América del Sur.', fa: 'کچالو اول در کوه‌های اندیز در امریکای جنوبی رویید.' } },
      { bin: 'from', t: { en: 'Tomato', es: 'Tomate', fa: 'بادنجان رومی' },
        why: { en: 'Tomatoes first grew in the Americas. The word comes from the Nahuatl word tomatl.', es: 'El tomate nació en América. La palabra viene del náhuatl tomatl.', fa: 'بادنجان رومی اول در امریکا رویید. نام انگلیسی‌اش از کلمهٔ ناهواتل «توماتل» است.' } },
      { bin: 'from', t: { en: 'Cacao', es: 'Cacao', fa: 'کاکائو' },
        why: { en: 'Cacao first grew in the Americas. Chocolate is made from its beans.', es: 'El cacao nació en América. El chocolate se hace con sus granos.', fa: 'کاکائو اول در امریکا رویید. چاکلیت از دانه‌هایش ساخته می‌شود.' } },
      { bin: 'from', t: { en: 'Turkey', es: 'Pavo', fa: 'فیل‌مرغ' },
        why: { en: 'Turkeys first lived in Mexico and North America. Ships took them to Europe.', es: 'Los pavos vivían primero en México y América del Norte. Los barcos los llevaron a Europa.', fa: 'فیل‌مرغ اول در مکسیکو و امریکای شمالی زندگی می‌کرد. کشتی‌ها آن را به اروپا بردند.' } },
      { bin: 'to', t: { en: 'Horse', es: 'Caballo', fa: 'اسپ' },
        why: { en: 'There were no horses in the Americas in 1492. Spanish ships brought them.', es: 'En 1492 no había caballos en América. Los trajeron los barcos españoles.', fa: 'در سال ۱۴۹۲ در امریکا اسپ نبود. کشتی‌های هسپانوی آن‌ها را آوردند.' } },
      { bin: 'to', t: { en: 'Wheat', es: 'Trigo', fa: 'گندم' },
        why: { en: 'Wheat first grew in Southwest Asia. Europeans planted it in the Americas.', es: 'El trigo nació en el suroeste de Asia. Los europeos lo sembraron en América.', fa: 'گندم اول در جنوب غرب آسیا رویید. اروپایی‌ها آن را در امریکا کاشتند.' } },
      { bin: 'to', t: { en: 'Cattle', es: 'Ganado', fa: 'گاو' },
        why: { en: 'Cows came on European ships. Soon huge herds lived in the Americas.', es: 'Las vacas llegaron en barcos europeos. Pronto hubo manadas enormes en América.', fa: 'گاوها با کشتی‌های اروپایی آمدند. زود گله‌های بزرگ در امریکا زندگی کردند.' } },
      { bin: 'to', t: { en: 'Sugarcane', es: 'Caña de azúcar', fa: 'نیشکر' },
        why: { en: 'Sugarcane first grew in Asia. Columbus brought it to the Caribbean in 1493.', es: 'La caña de azúcar nació en Asia. Colón la llevó al Caribe en 1493.', fa: 'نیشکر اول در آسیا رویید. کلمبوس در سال ۱۴۹۳ آن را به کارائیب برد.' } },
      { bin: 'to', t: { en: 'Smallpox', es: 'Viruela', fa: 'چیچک' },
        why: { en: 'Smallpox came on European ships. Native peoples had no immunity, and millions died.', es: 'La viruela llegó en barcos europeos. Los indígenas no tenían inmunidad, y murieron millones.', fa: 'چیچک با کشتی‌های اروپایی آمد. مردمان بومی مصونیت نداشتند و میلیون‌ها نفر مردند.' } }
    ],
    success: { en: 'The ship records are right again! Foods, animals and diseases moved both ways.', es: '¡Los registros de los barcos están bien otra vez! Comidas, animales y enfermedades viajaron en ambos sentidos.', fa: 'ثبت‌های کشتی‌ها دوباره درست شد! غذاها، حیوان‌ها و مریضی‌ها به هر دو طرف رفتند.' }
  },

  boss: {
    at: [25, 8],
    stat: 'loc',
    need: 3,
    name: { en: 'The Forgetful Grump', es: 'El Gruñón Olvidadizo', fa: 'غرغروی فراموش‌کار' },
    appear: { en: 'The Forgetful Grump is hiding in the fog over Seville!', es: '¡El Gruñón Olvidadizo se esconde en la niebla sobre Sevilla!', fa: 'غرغروی فراموش‌کار در مه بالای سویل پنهان است!' },
    taunt: { en: 'Who cares where food comes from? I forgot it all, and so will you!', es: '¿A quién le importa de dónde viene la comida? ¡Yo lo olvidé todo, y tú también lo olvidarás!', fa: 'کی پروا دارد غذا از کجا می‌آید؟ من همه را فراموش کردم، تو هم فراموش می‌کنی!' },
    win: { en: 'The fog clears over the sea. Chronicle page 2.2 floats down into your hands!', es: 'La niebla se va del mar. ¡La página 2.2 de la crónica cae en tus manos!', fa: 'مه از روی بحر کنار می‌رود. صفحهٔ ۲.۲ تاریخ‌نامه به دستت می‌افتد!' },
    questions: [
      { q: { en: 'What was the Columbian Exchange?', es: '¿Qué fue el intercambio colombino?', fa: 'مبادلهٔ کلمبی چه بود؟' },
        choices: [
          { en: 'Plants, animals, people and germs moving between hemispheres', es: 'Plantas, animales, personas y gérmenes que pasaban entre hemisferios', fa: 'رفت و آمد نبات، حیوان، مردم و میکروب میان نیم‌کره‌ها' },
          { en: 'A war between Spain and Portugal over gold and silver', es: 'Una guerra entre España y Portugal por el oro y la plata', fa: 'جنگی میان هسپانیه و پرتگال بر سر طلا و نقره' },
          { en: 'A trade deal that let only Spain sail across the Atlantic Ocean', es: 'Un acuerdo que dejaba solo a España cruzar el océano Atlántico', fa: 'قراردادی که فقط به هسپانیه اجازهٔ سفر در بحر اطلس می‌داد' },
          { en: 'A ship race from Seville to New Spain and back again', es: 'Una carrera de barcos de Sevilla a la Nueva España y de vuelta', fa: 'مسابقهٔ کشتی از سویل تا هسپانیهٔ نو و برگشت' }],
        answer: 0,
        why: { en: 'After 1492, living things and diseases crossed the Atlantic both ways. That is the Columbian Exchange.', es: 'Después de 1492, seres vivos y enfermedades cruzaron el Atlántico en ambos sentidos. Eso es el intercambio colombino.', fa: 'بعد از ۱۴۹۲، موجودات زنده و مریضی‌ها از هر دو طرف بحر اطلس گذشتند. این مبادلهٔ کلمبی است.' } },
      { q: { en: 'Which food traveled from the Americas to Europe, Africa and Asia?', es: '¿Qué comida viajó de América a Europa, África y Asia?', fa: 'کدام غذا از امریکا به اروپا، افریقا و آسیا رفت؟' },
        choices: [
          { en: 'Potatoes', es: 'La papa', fa: 'کچالو' },
          { en: 'Wheat', es: 'El trigo', fa: 'گندم' },
          { en: 'Sugarcane', es: 'La caña de azúcar', fa: 'نیشکر' },
          { en: 'Rice', es: 'El arroz', fa: 'برنج' }],
        answer: 0,
        why: { en: 'Potatoes first grew in the Andes. Ships carried them across the world.', es: 'La papa nació en los Andes. Los barcos la llevaron por todo el mundo.', fa: 'کچالو اول در اندیز رویید. کشتی‌ها آن را به همهٔ جهان بردند.' } },
      { q: { en: 'Which of these came to the Americas from Europe?', es: '¿Cuáles de estos llegaron a América desde Europa?', fa: 'کدام یک از این‌ها از اروپا به امریکا آمد؟' },
        choices: [
          { en: 'Wheat and cattle', es: 'Trigo y ganado', fa: 'گندم و گاو' },
          { en: 'Corn and beans', es: 'Maíz y frijoles', fa: 'جواری و لوبیا' },
          { en: 'Tomatoes and chiles', es: 'Tomates y chiles', fa: 'بادنجان رومی و مرچ' },
          { en: 'Cacao and squash', es: 'Cacao y calabaza', fa: 'کاکائو و کدو' }],
        answer: 0,
        why: { en: 'Wheat and cattle came on European ships. The others first grew in the Americas.', es: 'El trigo y el ganado llegaron en barcos europeos. Los otros nacieron en América.', fa: 'گندم و گاو با کشتی‌های اروپایی آمدند. باقی اول در امریکا روییدند.' } },
      { q: { en: 'Why did populations grow in Europe, Africa and Asia after 1500?', es: '¿Por qué creció la población en Europa, África y Asia después de 1500?', fa: 'چرا بعد از ۱۵۰۰ نفوس اروپا، افریقا و آسیا زیاد شد؟' },
        choices: [
          { en: 'New crops like potatoes and corn meant more food', es: 'Cultivos nuevos como la papa y el maíz dieron más comida', fa: 'حاصلات نو مثل کچالو و جواری غذای بیشتر دادند' },
          { en: 'Fewer ships sailed, so people stayed home much more', es: 'Salían menos barcos, así que la gente se quedaba más en casa', fa: 'کشتی‌های کمتر رفتند، پس مردم بیشتر در خانه ماندند' },
          { en: 'Smallpox made people stronger and healthier', es: 'La viruela hizo a la gente más fuerte y sana', fa: 'چیچک مردم را قوی‌تر و صحتمندتر ساخت' },
          { en: 'Horses from the Americas pulled more plows', es: 'Los caballos de América tiraban más arados', fa: 'اسپ‌های امریکایی قلبه‌های بیشتر کشیدند' }],
        answer: 0,
        why: { en: 'Potatoes and corn grow lots of food on small farms. More food helped more people live.', es: 'La papa y el maíz dan mucha comida en fincas pequeñas. Más comida ayudó a vivir a más gente.', fa: 'کچالو و جواری در زمین کوچک غذای زیاد می‌دهند. غذای بیشتر به زنده ماندن مردم بیشتر کمک کرد.' } },
      { q: { en: 'How did horses change life for many Native peoples of the Americas?', es: '¿Cómo cambiaron los caballos la vida de muchos pueblos indígenas de América?', fa: 'اسپ زندگی بسیاری از مردمان بومی امریکا را چطور تغییر داد؟' },
        choices: [
          { en: 'They used horses to hunt bison and travel far', es: 'Usaron caballos para cazar bisontes y viajar lejos', fa: 'با اسپ گاومیش شکار کردند و راه دور رفتند' },
          { en: 'They used horses to plow rice fields in the hills', es: 'Usaron caballos para arar campos de arroz en los cerros', fa: 'با اسپ کشتزارهای برنج را در تپه‌ها قلبه کردند' },
          { en: 'Horses replaced all their farms and villages', es: 'Los caballos reemplazaron todas sus fincas y pueblos', fa: 'اسپ‌ها جای همهٔ فارم‌ها و قریه‌هایشان را گرفتند' },
          { en: 'Horses carried silver across the Atlantic Ocean', es: 'Los caballos llevaban plata a través del Atlántico', fa: 'اسپ‌ها نقره را از بحر اطلس گذراندند' }],
        answer: 0,
        why: { en: 'On the Great Plains, peoples like the Comanche and Lakota rode horses to hunt bison.', es: 'En las Grandes Llanuras, pueblos como los comanches y los lakotas cazaban bisontes a caballo.', fa: 'در دشت‌های بزرگ، مردمانی مثل کومانچی و لاکوتا سوار اسپ گاومیش شکار می‌کردند.' } },
      { q: { en: 'Why did millions of Native people die after Europeans arrived?', es: '¿Por qué murieron millones de indígenas después de que llegaron los europeos?', fa: 'چرا بعد از آمدن اروپایی‌ها میلیون‌ها نفر از مردمان بومی مردند؟' },
        choices: [
          { en: 'New diseases like smallpox, and no immunity', es: 'Enfermedades nuevas como la viruela, sin inmunidad', fa: 'مریضی‌های نو مثل چیچک، بدون مصونیت' },
          { en: 'Too much corn and squash in their meals', es: 'Demasiado maíz y calabaza en sus comidas', fa: 'جواری و کدوی بسیار زیاد در غذایشان' },
          { en: 'Very cold winters across both of the Americas', es: 'Inviernos muy fríos en toda América', fa: 'زمستان‌های بسیار سرد در سراسر امریکا' },
          { en: 'Horses ate all of the crops in their fields', es: 'Los caballos se comieron todos sus cultivos', fa: 'اسپ‌ها همهٔ حاصلات کشتزارشان را خوردند' }],
        answer: 0,
        why: { en: 'Native peoples had never met smallpox. With no immunity, it spread fast. War and forced work killed many too.', es: 'Los indígenas nunca habían tenido viruela. Sin inmunidad, se extendió rápido. La guerra y el trabajo forzado también mataron a muchos.', fa: 'مردمان بومی هرگز چیچک ندیده بودند. بدون مصونیت، زود پخش شد. جنگ و کار اجباری هم بسیاری را کشت.' } },
      { q: { en: 'What was a sugar plantation?', es: '¿Qué era una plantación de azúcar?', fa: 'کشتزار بزرگ نیشکر چه بود؟' },
        choices: [
          { en: 'A huge farm that grew sugarcane to sell far away', es: 'Una finca enorme que sembraba caña para vender lejos', fa: 'یک فارم بسیار بزرگ که نیشکر را برای فروش به دور می‌کاشت' },
          { en: 'A small garden where families grew food to eat', es: 'Un huerto pequeño donde las familias sembraban su comida', fa: 'یک باغچهٔ کوچک که خانواده‌ها در آن غذای خود را می‌کاشتند' },
          { en: 'A market in Seville that sold sugar and spices', es: 'Un mercado de Sevilla que vendía azúcar y especias', fa: 'بازاری در سویل که شکر و مصاله می‌فروخت' },
          { en: 'A ship that carried sugarcane from the Americas to Asia', es: 'Un barco que llevaba caña de azúcar de América a Asia', fa: 'کشتی‌ای که نیشکر را از امریکا به آسیا می‌برد' }],
        answer: 0,
        why: { en: 'Plantations grew sugarcane to sell in Europe. The hard work was forced on people.', es: 'Las plantaciones sembraban caña para vender en Europa. El trabajo duro era forzado.', fa: 'این کشتزارها نیشکر را برای فروش در اروپا می‌کاشتند. کار سخت به زور بر مردم تحمیل می‌شد.' } },
      { q: { en: 'Who did Europeans force to work on plantations in the Americas?', es: '¿A quiénes obligaron los europeos a trabajar en las plantaciones de América?', fa: 'اروپایی‌ها چه کسانی را به زور در کشتزارهای بزرگ امریکا به کار واداشتند؟' },
        choices: [
          { en: 'Millions of enslaved Africans taken across the Atlantic', es: 'Millones de africanos esclavizados llevados por el Atlántico', fa: 'میلیون‌ها افریقایی برده که از بحر اطلس برده شدند' },
          { en: 'Sailors from Spain who were paid to stay after their trips', es: 'Marineros de España a quienes pagaban por quedarse tras sus viajes', fa: 'ملاحان هسپانوی که برای ماندن بعد از سفر مزد می‌گرفتند' },
          { en: 'Farmers from Asia who chose to move for land', es: 'Agricultores de Asia que eligieron mudarse por tierras', fa: 'دهقانان آسیایی که برای زمین خودشان کوچ کردند' },
          { en: 'Spanish cooks who wanted to learn new foods', es: 'Cocineros españoles que querían aprender comidas nuevas', fa: 'آشپزهای هسپانوی که می‌خواستند غذاهای نو یاد بگیرند' }],
        answer: 0,
        why: { en: 'Europeans took millions of Africans by force and enslaved them. It was cruel and deeply wrong.', es: 'Los europeos se llevaron a millones de africanos a la fuerza y los esclavizaron. Fue cruel y muy injusto.', fa: 'اروپایی‌ها میلیون‌ها افریقایی را به زور بردند و برده ساختند. این کار ظالمانه و بسیار نادرست بود.' } }
    ]
  },

  learned: [
    { en: 'After 1492, plants, animals, people and diseases crossed the Atlantic. This was the [[columbian exchange|Columbian Exchange]].', es: 'Después de 1492, plantas, animales, personas y enfermedades cruzaron el Atlántico. Esto fue el [[columbian exchange|intercambio colombino]].', fa: 'بعد از ۱۴۹۲، نبات‌ها، حیوان‌ها، مردم و مریضی‌ها از بحر اطلس گذشتند. این [[columbian exchange|مبادلهٔ کلمبی]] بود.' },
    { en: 'Corn, potatoes and cacao went out to the world. Horses, wheat and sugarcane came to the Americas.', es: 'El maíz, la papa y el cacao salieron al mundo. Los caballos, el trigo y la caña de azúcar llegaron a América.', fa: 'جواری، کچالو و کاکائو به جهان رفتند. اسپ، گندم و نیشکر به امریکا آمدند.' },
    { en: 'New diseases killed millions of Native people. Europeans forced millions of [[enslaved|enslaved]] Africans to work on [[plantation|plantations]].', es: 'Las enfermedades nuevas mataron a millones de indígenas. Los europeos obligaron a millones de africanos [[enslaved|esclavizados]] a trabajar en [[plantation|plantaciones]].', fa: 'مریضی‌های نو میلیون‌ها نفر از مردمان بومی را کشتند. اروپایی‌ها میلیون‌ها افریقایی [[enslaved|برده]] را به زور در [[plantation|کشتزارهای بزرگ]] به کار واداشتند.' }
  ],
  reflect: {
    q: { en: 'Think of a food you eat often. Where did it first grow? How did it get to your table?', es: 'Piensa en una comida que comes seguido. ¿Dónde creció primero? ¿Cómo llegó a tu mesa?', fa: 'به غذایی فکر کن که زیاد می‌خوری. اول در کجا رویید؟ چطور به دسترخوان تو رسید؟' },
    starter: { en: 'A food I eat often is', es: 'Una comida que como seguido es', fa: 'غذایی که زیاد می‌خورم' }
  }
};
