/* WORLDWALKER · Episode 8.3 · Borders, Conflict and Cooperation (WG.17) · THE FINALE
   The Council Hall stands where many kinds of land meet: snow and mountains to the west, desert to the east,
   forest and farms to the south, the sea to the south-east. A river runs across the whole map and is the border
   between two neighbors, North Bank and South Bank. The main bridge leads straight down from the hall door. */
window.EPISODE = {
  id: '8.3',
  realm: 8,
  sol: 'WG.17',
  title: { en: 'Borders and Working Together', es: 'Fronteras y cooperación', fa: 'سرحدها و همکاری' },
  place: { en: 'The Council of Realms', es: 'El Consejo de los Reinos', fa: 'شورای سرزمین‌ها' },
  intro: [
    { en: 'Pip: "This is it, the last page! People from all eight realms have come to the Council Hall to rebuild the Great Atlas. But the Great Smudge is turning neighbors against each other."',
      es: 'Pip: "¡Llegamos a la última página! Gente de los ocho reinos vino al Salón del Consejo para reconstruir el Gran Atlas. Pero el Gran Borrón está poniendo a los vecinos en contra unos de otros."',
      fa: 'پیپ: «این آخرین صفحه است! مردم از هر هشت سرزمین به تالار شورا آمده‌اند تا اطلس بزرگ را دوباره بسازند. اما لکهٔ بزرگ همسایه‌ها را با هم دشمن می‌کند.»' },
    { en: 'Pip: "Talk to the four guests. Then go to the compass stone in the hall and help two neighbors settle their river fight."',
      es: 'Pip: "Habla con los cuatro invitados. Luego ve a la piedra de la brújula en el salón y ayuda a dos vecinos a resolver su pelea por el río."',
      fa: 'پیپ: «با چهار مهمان گپ بزن. بعد به سنگ قطب‌نما در تالار برو و به دو همسایه کمک کن تا دعوای دریا را حل کنند.»' }
  ],

  /* 48 x 22 tiles = 3 x 2 screens.
     Top: snow and the Andes-like mountains (west) · the Council Hall (middle) · desert with an oasis (east).
     Bottom: forest (west) · the two neighbor villages, North Bank and South Bank, with farms (middle) · the river mouth and the sea (east).
     The river (rows 14-15) is the border. Two bridges cross it; the main one is right below the hall door. */
  map: [
    'AAAAAAAAAAAAAAAAPPPTTTTTTTTTTrrrrrrrrrrrrrrrrrrr',
    'AnnnPnnnnnPnnnzz..WWWWWWWWWWWW.sssuussssuussssur',
    'AnPnnnnAAnnnnnzz..WffffffffxfW.ssssuusssssssuusr',
    'AnnnnnAAAnnPnnzz..WffffffffffW.ssssssspOpssuussr',
    'AnnPnnnnnnnnnzz...WffffffffffW.sssuussssssssssur',
    'AnnnnnnPnnnnzzz...WffffffffffW.uuussssuusssssssr',
    'AnPnnnnnnnPnzz....WffffffffffW.ssssssssssuusssur',
    'AnnnnPnnnnnnzz....WWWWWWdWWWWW.sssuusssssssssssr',
    'AnnnnnnnnnzzzT..........:.......ssssssuussssuusr',
    'AnPnnnnnnzzz......,.....:....,.sgsssssssssssuusr',
    'Annnnnzzzzz..T....T.....:.....ssggsssssssssssssr',
    'A....T..T....T....RRR...:.......s.....ssss~~~~~=',
    'A.T.....T..,.....,hdh...:...,.....p..ssss~~~~~~=',
    'A....T.....T..........x.:...........sss~~~~~~~~=',
    '~~~~~~~~B~~~~~~~~~~~~~~~B~~~~~~~~~~~~~~~~~~~~~~=',
    '~~~~~~~~B~~~~~~~~~~~~~~~B~~~~~~~~~~~~~~~~~~~~~~=',
    'T...,...:....T..........:..QQQ.....sss~~~~~~~~~=',
    'T.TT....:..TT...........:..hdh...p..ssskk~~~~~~=',
    'T.TTT...:...............:...........sss~~~~~~~~=',
    'T..T....:...T,...oo1o...:..www....p..sss~~~~~~~=',
    'T.......:........o2oo.......www.......ssss~~~~~=',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT================'
  ],
  start: [24, 9],

  words: {
    border: { en: 'a line that shows where one country ends and another begins', es: 'una línea que muestra dónde termina un país y empieza otro', fa: 'خطی که نشان می‌دهد یک کشور کجا تمام می‌شود و کشور دیگر کجا شروع می‌شود' },
    'natural border': { en: 'a border that follows a river, a mountain range or a coastline', es: 'una frontera que sigue un río, una cordillera o una costa', fa: 'سرحدی که از یک دریا، رشته‌کوه یا ساحل پیروی می‌کند' },
    'geometric border': { en: 'a straight-line border drawn by people that does not follow any river or mountain', es: 'una frontera en línea recta dibujada por personas, que no sigue ningún río ni montaña', fa: 'سرحد خط راست که مردم کشیده‌اند و از هیچ دریا یا کوهی پیروی نمی‌کند' },
    'boundary dispute': { en: 'when two countries argue over where a border should be', es: 'cuando dos países discuten sobre dónde debe estar una frontera', fa: 'وقتی دو کشور دربارهٔ جای یک سرحد اختلاف دارند' },
    treaty: { en: 'a written agreement between countries', es: 'un acuerdo escrito entre países', fa: 'یک توافق نوشته‌شده بین کشورها' },
    neutral: { en: 'not on either side; fair to both', es: 'que no está de ningún lado; justo con los dos', fa: 'به طرف هیچ کس نیست؛ با هر دو طرف منصف است' },
    'united nations': { en: 'a group where almost every country in the world meets to talk and work together', es: 'un grupo donde casi todos los países del mundo se reúnen para hablar y trabajar juntos', fa: 'سازمانی که تقریباً همهٔ کشورهای جهان در آن جمع می‌شوند تا گپ بزنند و با هم کار کنند' },
    'trade bloc': { en: 'a group of countries that agree to make trade easier between them', es: 'un grupo de países que acuerdan hacer más fácil el comercio entre ellos', fa: 'گروهی از کشورها که توافق می‌کنند تجارت بین خود را آسان‌تر کنند' },
    upstream: { en: 'closer to where a river starts', es: 'más cerca de donde empieza un río', fa: 'نزدیک‌تر به جایی که دریا شروع می‌شود' }
  },

  npcs: [
    {
      x: 21, y: 3,
      name: { en: 'Rosa', es: 'Rosa', fa: 'روزا' },
      role: { en: 'Mapmaker and host of the Council', es: 'Cartógrafa y anfitriona del Consejo', fa: 'نقشه‌کش و میزبان شورا' },
      look: { skin: 2, hair: '#3a2a1a', shirt: '#c0392b' },
      lines: [
        { en: 'Welcome to the Council Hall! You know me: Rosa, from Mapmaker\'s Valley, where your journey began. Guests from all eight realms are here. Together we will put the last page back into the Great Atlas.',
          es: '¡Bienvenido al Salón del Consejo! Ya me conoces: soy Rosa, del Valle del Cartógrafo, donde empezó tu viaje. Aquí hay invitados de los ocho reinos. Juntos vamos a poner la última página en el Gran Atlas.',
          fa: 'به تالار شورا خوش آمدی! مرا می‌شناسی: روزا، از درهٔ نقشه‌کش، جایی که سفرت شروع شد. مهمانان هر هشت سرزمین اینجا هستند. با هم آخرین صفحه را دوباره در اطلس بزرگ می‌گذاریم.',
          easy: { en: 'Hi, it is Rosa from Mapmaker\'s Valley! People from all eight realms are here to fix the Great Atlas.', es: '¡Hola, soy Rosa del Valle del Cartógrafo! Gente de los ocho reinos vino a arreglar el Gran Atlas.', fa: 'سلام، من روزا از درهٔ نقشه‌کش هستم! مردم هر هشت سرزمین برای درست کردن اطلس بزرگ اینجا هستند.' } },
        { en: 'Every country sits inside lines called [[border|borders]]. Most borders are calm. Trucks and trains cross them every day. But when neighbors disagree, they need good ways to work together.',
          es: 'Cada país está dentro de líneas llamadas [[border|fronteras]]. La mayoría de las fronteras son tranquilas. Camiones y trenes las cruzan todos los días. Pero cuando los vecinos no están de acuerdo, necesitan buenas formas de trabajar juntos.',
          fa: 'هر کشور داخل خط‌هایی به نام [[border|سرحد]] است. بیشتر سرحدها آرام هستند. موترهای باربری و قطارها هر روز از آن‌ها می‌گذرند. اما وقتی همسایه‌ها موافق نیستند، به راه‌های خوب برای همکاری نیاز دارند.',
          easy: { en: 'Countries have [[border|borders]]. Most are calm. When neighbors disagree, they must find ways to work together.', es: 'Los países tienen [[border|fronteras]]. La mayoría son tranquilas. Cuando los vecinos no están de acuerdo, deben buscar formas de trabajar juntos.', fa: 'کشورها [[border|سرحد]] دارند. بیشترشان آرام هستند. وقتی همسایه‌ها موافق نیستند، باید راه همکاری پیدا کنند.' } },
        { en: 'Countries also work together in groups. The [[united nations|United Nations]] has 193 member countries. A [[trade bloc|trade bloc]], like the European Union, helps its members trade more easily.',
          es: 'Los países también trabajan juntos en grupos. Las [[united nations|Naciones Unidas]] tienen 193 países miembros. Un [[trade bloc|bloque comercial]], como la Unión Europea, ayuda a sus miembros a comerciar más fácilmente.',
          fa: 'کشورها در گروه‌ها هم با هم کار می‌کنند. [[united nations|سازمان ملل متحد]] ۱۹۳ کشور عضو دارد. یک [[trade bloc|گروه تجارتی]]، مثل اتحادیهٔ اروپا، به اعضای خود کمک می‌کند آسان‌تر تجارت کنند.',
          easy: { en: 'Countries work in groups too, like the [[united nations|United Nations]] and the European Union.', es: 'Los países también trabajan en grupos, como las [[united nations|Naciones Unidas]] y la Unión Europea.', fa: 'کشورها در گروه‌ها هم کار می‌کنند، مثل [[united nations|سازمان ملل متحد]] و اتحادیهٔ اروپا.' } }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Why do countries join groups like the United Nations?', es: '¿Por qué los países se unen a grupos como las Naciones Unidas?', fa: 'چرا کشورها به گروه‌هایی مثل سازمان ملل متحد می‌پیوندند؟' },
        choices: [
          { ok: true, t: { en: 'To talk and work together on shared problems', es: 'Para hablar y trabajar juntos en problemas que comparten', fa: 'تا دربارهٔ مشکلات مشترک گپ بزنند و با هم کار کنند' },
            why: { en: 'Groups give countries a place to meet, talk and solve problems together.', es: 'Los grupos dan a los países un lugar para reunirse, hablar y resolver problemas juntos.', fa: 'گروه‌ها به کشورها جایی برای دیدار، گپ زدن و حل مشکلات با هم می‌دهند.' } },
          { t: { en: 'To erase all the borders in the world', es: 'Para borrar todas las fronteras del mundo', fa: 'تا همهٔ سرحدهای جهان را پاک کنند' },
            why: { en: 'Member countries keep their own borders. They work together across them.', es: 'Los países miembros mantienen sus fronteras. Trabajan juntos a través de ellas.', fa: 'کشورهای عضو سرحدهای خود را نگه می‌دارند. از دو طرف سرحد با هم کار می‌کنند.' } },
          { t: { en: 'To make every country exactly the same', es: 'Para que todos los países sean exactamente iguales', fa: 'تا همهٔ کشورها دقیقاً یک‌رقم شوند' },
            why: { en: 'Each country keeps its own language, laws and ways. They just cooperate.', es: 'Cada país mantiene su idioma, sus leyes y sus costumbres. Solo cooperan.', fa: 'هر کشور زبان، قانون و رسم خود را نگه می‌دارد. فقط با هم همکاری می‌کنند.' } }
        ]
      }
    },
    {
      x: 6, y: 5,
      name: { en: 'Camila Rojas', es: 'Camila Rojas', fa: 'کامیلا روخاس' },
      role: { en: 'Mountain guide from Chile', es: 'Guía de montaña de Chile', fa: 'رهنمای کوه از چیلی' },
      look: { skin: 2, hair: '#2b1d14', shirt: '#d64545', pants: '#3a3a3a', hat: '#2f6fd6' },
      lines: [
        { en: '¡Hola! I guide hikers in the Andes Mountains. The Andes form part of the border between Chile and Argentina. That is a [[natural border|natural border]]. It follows a mountain range, a river or a coastline.',
          es: '¡Hola! Guío a excursionistas en la cordillera de los Andes. Los Andes forman parte de la frontera entre Chile y Argentina. Esa es una [[natural border|frontera natural]]. Sigue una cordillera, un río o una costa.',
          fa: 'اولا! من رهنمای کوه‌پیمایان در کوه‌های اندیز هستم. اندیز بخشی از سرحد بین چیلی و ارجنتاین است. این یک [[natural border|سرحد طبیعی]] است. از یک رشته‌کوه، دریا یا ساحل پیروی می‌کند.',
          easy: { en: 'The Andes Mountains are part of the border of Chile and Argentina. That is a [[natural border|natural border]].', es: 'Los Andes son parte de la frontera de Chile y Argentina. Esa es una [[natural border|frontera natural]].', fa: 'کوه‌های اندیز بخشی از سرحد چیلی و ارجنتاین هستند. این [[natural border|سرحد طبیعی]] است.' } },
        { en: 'There are more. The Rio Grande, a river, forms a long part of the border between the United States and Mexico. Some of the Great Lakes are part of the border with Canada. Japan is an island country, so its coastline is a border on every side.',
          es: 'Hay más. El río Bravo (Rio Grande) forma una parte larga de la frontera entre Estados Unidos y México. Algunos de los Grandes Lagos son parte de la frontera con Canadá. Japón es un país de islas, así que su costa es una frontera por todos lados.',
          fa: 'بیشتر هم هست. دریای ریو گرانده بخش درازی از سرحد بین ایالات متحده و مکسیکو است. بعضی از جهیل‌های بزرگ بخشی از سرحد با کانادا هستند. جاپان کشور جزیره‌ای است، پس ساحلش از هر طرف سرحد است.',
          easy: { en: 'A river, the Rio Grande, is part of the border of the US and Mexico. Japan\'s coast is its border.', es: 'Un río, el río Bravo, es parte de la frontera de Estados Unidos y México. La costa de Japón es su frontera.', fa: 'یک دریا، ریو گرانده، بخشی از سرحد امریکا و مکسیکو است. ساحل جاپان سرحد آن است.' } },
        { en: 'Natural borders are easy to see on a map. But nature does not always draw a clean line. A river can change its path over the years, and a mountain top can be hard to measure.',
          es: 'Las fronteras naturales son fáciles de ver en un mapa. Pero la naturaleza no siempre dibuja una línea limpia. Un río puede cambiar su camino con los años, y la cima de una montaña puede ser difícil de medir.',
          fa: 'سرحدهای طبیعی روی نقشه آسان دیده می‌شوند. اما طبیعت همیشه یک خط پاک نمی‌کشد. یک دریا ممکن است در طول سال‌ها راهش را تغییر دهد و اندازه کردن سر کوه ممکن است سخت باشد.',
          easy: { en: 'Rivers can move. So even natural borders are not always simple.', es: 'Los ríos se pueden mover. Por eso, ni las fronteras naturales son siempre simples.', fa: 'دریاها می‌توانند جا عوض کنند. پس حتی سرحدهای طبیعی همیشه ساده نیستند.' } }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Which one is a natural border?', es: '¿Cuál es una frontera natural?', fa: 'کدام یک سرحد طبیعی است؟' },
        choices: [
          { ok: true, t: { en: 'The Andes Mountains between Chile and Argentina', es: 'La cordillera de los Andes entre Chile y Argentina', fa: 'کوه‌های اندیز بین چیلی و ارجنتاین' },
            why: { en: 'It follows a mountain range, so it is natural.', es: 'Sigue una cordillera, así que es natural.', fa: 'از یک رشته‌کوه پیروی می‌کند، پس طبیعی است.' } },
          { t: { en: 'A straight line drawn with a ruler on a map', es: 'Una línea recta dibujada con una regla en un mapa', fa: 'یک خط راست که با خط‌کش روی نقشه کشیده شده' },
            why: { en: 'A straight line drawn by people is a geometric border.', es: 'Una línea recta dibujada por personas es una frontera geométrica.', fa: 'خط راستی که مردم کشیده‌اند سرحد هندسی است.' } },
          { t: { en: 'A line chosen by drawing names from a hat', es: 'Una línea elegida sacando nombres de un sombrero', fa: 'خطی که با قرعه‌کشی انتخاب شده' },
            why: { en: 'Borders are not chosen that way, and this has nothing to do with nature.', es: 'Las fronteras no se eligen así, y esto no tiene nada que ver con la naturaleza.', fa: 'سرحدها این‌طور انتخاب نمی‌شوند و این هیچ ربطی به طبیعت ندارد.' } }
        ]
      }
    },
    {
      x: 37, y: 6,
      name: { en: 'Mr. Kwame Mensah', es: 'Sr. Kwame Mensah', fa: 'استاد کوامی منسا' },
      role: { en: 'History teacher from Ghana', es: 'Maestro de historia de Ghana', fa: 'معلم تاریخ از غانا' },
      look: { skin: 5, hair: '#1b1410', shirt: '#2e8b57', pants: '#3b2f2f' },
      lines: [
        { en: 'Akwaaba! I teach history in Ghana. Look at a map of Africa. Many borders are straight lines. A straight border drawn by people is a [[geometric border|geometric border]]. It does not follow any river or mountain.',
          es: '¡Akwaaba! Enseño historia en Ghana. Mira un mapa de África. Muchas fronteras son líneas rectas. Una frontera recta dibujada por personas es una [[geometric border|frontera geométrica]]. No sigue ningún río ni montaña.',
          fa: 'اکوابا! من در غانا تاریخ درس می‌دهم. به نقشهٔ افریقا نگاه کن. بسیاری از سرحدها خط راست هستند. سرحد راستی که مردم کشیده‌اند [[geometric border|سرحد هندسی]] است. از هیچ دریا یا کوهی پیروی نمی‌کند.',
          easy: { en: 'Many borders in Africa are straight lines drawn by people. They are [[geometric border|geometric borders]].', es: 'Muchas fronteras en África son líneas rectas dibujadas por personas. Son [[geometric border|fronteras geométricas]].', fa: 'بسیاری از سرحدهای افریقا خط‌های راستی هستند که مردم کشیده‌اند. این‌ها [[geometric border|سرحدهای هندسی]] هستند.' } },
        { en: 'European countries drew many of those lines in the late 1800s, sometimes with only a ruler and a map. They did not always think about the people already living there. Some families and villages ended up split between two countries.',
          es: 'Países europeos dibujaron muchas de esas líneas a fines del siglo XIX, a veces solo con una regla y un mapa. No siempre pensaron en la gente que ya vivía allí. Algunas familias y pueblos quedaron divididos entre dos países.',
          fa: 'کشورهای اروپایی بسیاری از این خط‌ها را در اواخر دههٔ ۱۸۰۰ کشیدند، گاهی فقط با یک خط‌کش و یک نقشه. آن‌ها همیشه به مردمی که از قبل آنجا زندگی می‌کردند فکر نکردند. بعضی خانواده‌ها و قریه‌ها بین دو کشور تقسیم شدند.',
          easy: { en: 'Europeans drew these lines long ago. Some villages and families were split in two.', es: 'Los europeos dibujaron estas líneas hace mucho. Algunos pueblos y familias quedaron divididos.', fa: 'اروپایی‌ها این خط‌ها را مدت‌ها پیش کشیدند. بعضی قریه‌ها و خانواده‌ها دو تکه شدند.' } },
        { en: 'Sometimes two countries do not agree on where a border is. That is a [[boundary dispute|boundary dispute]]. Old maps, history and resources can all start one. For example, China and India both claim some land high in the Himalaya Mountains.',
          es: 'A veces dos países no están de acuerdo sobre dónde está una frontera. Eso es una [[boundary dispute|disputa fronteriza]]. Mapas viejos, la historia y los recursos pueden empezar una. Por ejemplo, China e India reclaman tierras en lo alto de las montañas del Himalaya.',
          fa: 'گاهی دو کشور دربارهٔ جای یک سرحد موافق نیستند. این یک [[boundary dispute|اختلاف سرحدی]] است. نقشه‌های کهنه، تاریخ و منابع می‌توانند آن را شروع کنند. مثلاً چین و هند هر دو بعضی زمین‌های بلند در کوه‌های هیمالیا را از خود می‌دانند.',
          easy: { en: 'When two countries argue about where a border is, it is a [[boundary dispute|boundary dispute]].', es: 'Cuando dos países discuten dónde está una frontera, es una [[boundary dispute|disputa fronteriza]].', fa: 'وقتی دو کشور دربارهٔ جای سرحد اختلاف دارند، این [[boundary dispute|اختلاف سرحدی]] است.' } }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why do some borders in Africa cut through villages and family land?', es: '¿Por qué algunas fronteras en África cruzan pueblos y tierras de familias?', fa: 'چرا بعضی سرحدها در افریقا از وسط قریه‌ها و زمین خانواده‌ها می‌گذرند؟' },
        choices: [
          { ok: true, t: { en: 'People far away drew straight lines without thinking about who lived there', es: 'Gente lejana dibujó líneas rectas sin pensar en quién vivía allí', fa: 'مردمی از جای دور خط‌های راست کشیدند بدون فکر به کسانی که آنجا زندگی می‌کردند' },
            why: { en: 'The lines were drawn on maps in Europe, not by the people living on the land.', es: 'Las líneas se dibujaron en mapas en Europa, no por la gente que vivía en esa tierra.', fa: 'این خط‌ها در اروپا روی نقشه کشیده شدند، نه به دست مردمی که روی آن زمین زندگی می‌کردند.' } },
          { t: { en: 'The villages moved after the borders were drawn', es: 'Los pueblos se movieron después de que se dibujaron las fronteras', fa: 'قریه‌ها بعد از کشیدن سرحدها جا عوض کردند' },
            why: { en: 'The villages were already there. The lines were drawn across them.', es: 'Los pueblos ya estaban allí. Las líneas se dibujaron encima de ellos.', fa: 'قریه‌ها از قبل آنجا بودند. خط‌ها از روی آن‌ها کشیده شدند.' } },
          { t: { en: 'Rivers pushed the villages across the line', es: 'Los ríos empujaron los pueblos al otro lado de la línea', fa: 'دریاها قریه‌ها را به آن طرف خط بردند' },
            why: { en: 'These are geometric borders. They do not follow rivers at all.', es: 'Estas son fronteras geométricas. No siguen ríos.', fa: 'این‌ها سرحدهای هندسی هستند. اصلاً از دریاها پیروی نمی‌کنند.' } }
        ]
      }
    },
    {
      x: 35, y: 16,
      name: { en: 'Dr. Linh Nguyen', es: 'Dra. Linh Nguyen', fa: 'داکتر لین نگوین' },
      role: { en: 'River scientist from Vietnam', es: 'Científica de ríos de Vietnam', fa: 'دانشمند دریا از ویتنام' },
      look: { skin: 1, hair: '#1b1410', shirt: '#f2c14e', pants: '#2b4a6b' },
      lines: [
        { en: 'Xin chào! I study the Mekong River. It flows through several countries. Laos, Thailand, Cambodia and Vietnam all depend on it for fish and for farm water. Rivers do not stop at a border sign. A dam [[upstream|upstream]] changes the water for everyone below.',
          es: '¡Xin chào! Estudio el río Mekong. Pasa por varios países. Laos, Tailandia, Camboya y Vietnam dependen de él para pescar y para regar sus cultivos. Los ríos no se detienen en un letrero de frontera. Una represa [[upstream|río arriba]] cambia el agua para todos los de abajo.',
          fa: 'سین چائو! من دریای میکانگ را مطالعه می‌کنم. این دریا از چند کشور می‌گذرد. لائوس، تایلند، کمبودیا و ویتنام برای ماهی و آب کشت به آن وابسته‌اند. دریاها کنار تابلوی سرحد نمی‌ایستند. یک بند آب در [[upstream|بالای دریا]] آب را برای همهٔ پایینی‌ها تغییر می‌دهد.',
          easy: { en: 'Many countries share the Mekong River. A river crosses borders. A dam [[upstream|upstream]] changes the water below.', es: 'Muchos países comparten el río Mekong. Un río cruza fronteras. Una represa [[upstream|río arriba]] cambia el agua de abajo.', fa: 'چند کشور در دریای میکانگ شریک هستند. دریا از سرحدها می‌گذرد. بند آب در [[upstream|بالای دریا]] آب پایین را تغییر می‌دهد.' } },
        { en: 'So in 1995 these countries formed the Mekong River Commission. They share water data and plan together. It does not stop every argument, but it gives them a table to sit at. A [[treaty|treaty]], a written agreement between countries, can do the same.',
          es: 'Por eso en 1995 estos países formaron la Comisión del Río Mekong. Comparten datos del agua y planean juntos. No detiene todas las discusiones, pero les da una mesa donde sentarse. Un [[treaty|tratado]], un acuerdo escrito entre países, puede hacer lo mismo.',
          fa: 'برای همین در سال ۱۹۹۵ این کشورها کمیسیون دریای میکانگ را ساختند. آن‌ها معلومات آب را با هم شریک می‌کنند و با هم پلان می‌سازند. این همهٔ اختلاف‌ها را ختم نمی‌کند، اما به آن‌ها میزی برای نشستن می‌دهد. یک [[treaty|معاهده]]، یعنی توافق نوشته‌شده بین کشورها، هم همین کار را می‌کند.',
          easy: { en: 'In 1995 they made a group to share water facts and plan together.', es: 'En 1995 formaron un grupo para compartir datos del agua y planear juntos.', fa: 'در سال ۱۹۹۵ گروهی ساختند تا معلومات آب را شریک کنند و با هم پلان بسازند.' } },
        { en: 'In 1960 India and Pakistan signed the Indus Waters Treaty. The World Bank, a [[neutral|neutral]] helper, helped them agree. It held for more than sixty years, even when the two countries fought. But the Aral Sea had no strong agreement. Its rivers were sent to cotton fields, and the sea lost most of its water.',
          es: 'En 1960 India y Pakistán firmaron el Tratado de las Aguas del Indo. El Banco Mundial, un ayudante [[neutral|neutral]], los ayudó a ponerse de acuerdo. Duró más de sesenta años, incluso cuando los dos países pelearon. Pero el mar de Aral no tenía un acuerdo fuerte. Sus ríos se usaron para campos de algodón, y el mar perdió casi toda su agua.',
          fa: 'در سال ۱۹۶۰ هند و پاکستان معاهدهٔ آب‌های سند را امضا کردند. بانک جهانی، یک کمک‌کنندهٔ [[neutral|بی‌طرف]]، به آن‌ها کمک کرد تا موافقه کنند. این معاهده بیشتر از شصت سال پابرجا ماند، حتی وقتی دو کشور جنگیدند. اما بحیرهٔ ارال توافق محکمی نداشت. دریاهای آن به کشتزارهای پخته برده شدند و بحیره بیشتر آبش را از دست داد.',
          easy: { en: 'A treaty helped India and Pakistan share rivers for over 60 years. The Aral Sea had no deal, and it dried up a lot.', es: 'Un tratado ayudó a India y Pakistán a compartir ríos por más de 60 años. El mar de Aral no tenía acuerdo y se secó mucho.', fa: 'یک معاهده به هند و پاکستان کمک کرد بیشتر از ۶۰ سال دریاها را شریک باشند. بحیرهٔ ارال توافقی نداشت و بسیار خشک شد.' } }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'What happened to the Aral Sea?', es: '¿Qué le pasó al mar de Aral?', fa: 'بر سر بحیرهٔ ارال چه آمد؟' },
        choices: [
          { ok: true, t: { en: 'Its rivers were sent to water cotton fields, and it lost most of its water', es: 'Sus ríos se usaron para regar campos de algodón, y perdió casi toda su agua', fa: 'دریاهایش برای آبیاری کشتزارهای پخته برده شدند و بیشتر آبش را از دست داد' },
            why: { en: 'With no strong agreement to protect it, the sea shrank over many years.', es: 'Sin un acuerdo fuerte que lo protegiera, el mar se encogió durante muchos años.', fa: 'بدون یک توافق محکم برای حفاظت، بحیره در طول سال‌ها کوچک شد.' } },
          { t: { en: 'It froze over and never thawed', es: 'Se congeló y nunca se descongeló', fa: 'یخ بست و دیگر آب نشد' },
            why: { en: 'The sea shrank because people took its river water, not because of ice.', es: 'El mar se encogió porque la gente tomó el agua de sus ríos, no por el hielo.', fa: 'بحیره کوچک شد چون مردم آب دریاهایش را گرفتند، نه به خاطر یخ.' } },
          { t: { en: 'A treaty split it evenly between two countries', es: 'Un tratado lo dividió por igual entre dos países', fa: 'یک معاهده آن را مساوی بین دو کشور تقسیم کرد' },
            why: { en: 'There was no strong agreement. That is part of why it was lost.', es: 'No hubo un acuerdo fuerte. Eso es parte de por qué se perdió.', fa: 'توافق محکمی نبود. این بخشی از دلیل از دست رفتنش است.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 27, y: 2, text: { en: 'THE GREAT ATLAS · 24 pages, one for every place you have walked, from Mapmaker\'s Valley to the far Pacific islands. 23 pages are home again. One page is still missing.',
      es: 'EL GRAN ATLAS · 24 páginas, una por cada lugar que recorriste, desde el Valle del Cartógrafo hasta las lejanas islas del Pacífico. 23 páginas ya volvieron. Todavía falta una.',
      fa: 'اطلس بزرگ · ۲۴ صفحه، یکی برای هر جایی که رفتی، از درهٔ نقشه‌کش تا جزیره‌های دور اقیانوس آرام. ۲۳ صفحه دوباره سر جایشان هستند. هنوز یک صفحه کم است.' } },
    { x: 22, y: 13, text: { en: 'SILVER RIVER · This river is the [[border|border]] between two neighbors, North Bank and South Bank. Both use its water for farms, drinking and fishing. The river does not belong to just one side.',
      es: 'RÍO PLATEADO · Este río es la [[border|frontera]] entre dos vecinos, Orilla Norte y Orilla Sur. Los dos usan su agua para cultivos, para beber y para pescar. El río no es de un solo lado.',
      fa: 'دریای نقره‌ای · این دریا [[border|سرحد]] بین دو همسایه است، ساحل شمالی و ساحل جنوبی. هر دو از آب آن برای کشت، نوشیدن و ماهیگیری استفاده می‌کنند. این دریا مال فقط یک طرف نیست.' } }
  ],

  scraps: [[1, 1], [46, 1], [1, 20]],
  smudges: [[6, 8], [5, 18], [42, 8]],

  challenge: {
    at: [24, 4],
    type: 'claim',
    stat: 'hei',
    title: { en: 'Settle the river fight', es: 'Resuelve la pelea por el río', fa: 'دعوای دریا را حل کن' },
    intro: { en: 'North Bank and South Bank share the Silver River. In a dry year, both need its water for their farms. The Smudge whispers, "Fight!" Choose how the neighbors should settle it. Then pick one reason it is fair and one reason it will last.',
      es: 'Orilla Norte y Orilla Sur comparten el Río Plateado. En un año seco, los dos necesitan su agua para sus cultivos. El Borrón susurra: "¡Peleen!" Elige cómo deben resolverlo los vecinos. Luego elige una razón por la que es justo y una razón por la que va a durar.',
      fa: 'ساحل شمالی و ساحل جنوبی در دریای نقره‌ای شریک هستند. در یک سال خشک، هر دو برای کشت خود به آب آن نیاز دارند. لکه آهسته می‌گوید: «بجنگید!» انتخاب کن همسایه‌ها چطور آن را حل کنند. بعد یک دلیل برای منصفانه بودن و یک دلیل برای دوام آن انتخاب کن.' },
    options: [
      { icon: '🧱', name: { en: 'A: Build a wall and stop talking', es: 'A: Construir un muro y dejar de hablar', fa: 'الف: دیوار بسازند و گپ زدن را بس کنند' },
        desc: { en: 'Each side keeps to itself.', es: 'Cada lado se queda solo.', fa: 'هر طرف به کار خودش.' },
        result: { en: 'The wall goes up, but the river keeps flowing. In the next dry year nobody talks, and the fight grows. Like the Aral Sea, shared water with no agreement can be lost.', es: 'El muro se levanta, pero el río sigue corriendo. En el próximo año seco nadie habla, y la pelea crece. Como el mar de Aral, el agua compartida sin acuerdo se puede perder.', fa: 'دیوار ساخته می‌شود، اما دریا جاری است. در سال خشک بعدی کسی گپ نمی‌زند و دعوا بزرگ‌تر می‌شود. مثل بحیرهٔ ارال، آب مشترک بدون توافق ممکن است از دست برود.' } },
      { icon: '📜', name: { en: 'B: Sign a treaty to share the water and meet every year', es: 'B: Firmar un tratado para compartir el agua y reunirse cada año', fa: 'ب: معاهده امضا کنند تا آب را شریک باشند و هر سال جلسه کنند' },
        desc: { en: 'Write down how much water each side gets.', es: 'Escribir cuánta agua recibe cada lado.', fa: 'بنویسند که هر طرف چقدر آب می‌گیرد.' },
        result: { en: 'The treaty is signed! Each side gets a fair share, and they meet every year to fix new problems. The Mekong River Commission works a lot like this.', es: '¡Se firma el tratado! Cada lado recibe una parte justa, y se reúnen cada año para arreglar problemas nuevos. La Comisión del Río Mekong funciona de forma parecida.', fa: 'معاهده امضا شد! هر طرف سهم منصفانه می‌گیرد و هر سال جلسه می‌کنند تا مشکلات تازه را حل کنند. کمیسیون دریای میکانگ هم تقریباً همین‌طور کار می‌کند.' } },
      { icon: '⚖️', name: { en: 'C: Ask a neutral group to help decide', es: 'C: Pedir ayuda a un grupo neutral para decidir', fa: 'ج: از یک گروه بی‌طرف بخواهند در تصمیم کمک کند' },
        desc: { en: 'A helper who takes no side listens to both.', es: 'Un ayudante que no está de ningún lado escucha a los dos.', fa: 'کمک‌کننده‌ای که طرف کسی نیست به هر دو گوش می‌دهد.' },
        result: { en: 'A neutral helper listens to both sides and helps them write fair rules. In 1960 the World Bank helped India and Pakistan agree on the Indus Waters Treaty.', es: 'Un ayudante neutral escucha a los dos lados y los ayuda a escribir reglas justas. En 1960 el Banco Mundial ayudó a India y Pakistán a acordar el Tratado de las Aguas del Indo.', fa: 'یک کمک‌کنندهٔ بی‌طرف به هر دو طرف گوش می‌دهد و کمک می‌کند قانون‌های منصفانه بنویسند. در سال ۱۹۶۰ بانک جهانی به هند و پاکستان کمک کرد تا بر معاهدهٔ آب‌های سند موافقه کنند.' } }
    ],
    kinds: [
      { id: 'fair', label: { en: 'Why is it fair?', es: '¿Por qué es justo?', fa: 'چرا منصفانه است؟' } },
      { id: 'lasting', label: { en: 'Why will it last?', es: '¿Por qué va a durar?', fa: 'چرا دوام می‌کند؟' } }
    ],
    reasons: [
      { kind: 'fair', fits: [1], t: { en: 'Both neighbors write the rules together, and each gets a share of the water.', es: 'Los dos vecinos escriben las reglas juntos, y cada uno recibe una parte del agua.', fa: 'هر دو همسایه با هم قانون می‌نویسند و هر کدام سهمی از آب می‌گیرد.' },
        why: { en: 'This reason is about the neighbors writing a treaty together.', es: 'Esta razón habla de que los vecinos escriben un tratado juntos.', fa: 'این دلیل دربارهٔ نوشتن معاهده توسط خود همسایه‌ها است.' } },
      { kind: 'fair', fits: [2], t: { en: 'A helper who takes no side listens to both neighbors the same way.', es: 'Un ayudante que no está de ningún lado escucha a los dos vecinos de la misma forma.', fa: 'کمک‌کننده‌ای که طرف کسی نیست به هر دو همسایه یک‌رقم گوش می‌دهد.' },
        why: { en: 'This reason is about a neutral helper, which is choice C.', es: 'Esta razón habla de un ayudante neutral, que es la opción C.', fa: 'این دلیل دربارهٔ کمک‌کنندهٔ بی‌طرف است، یعنی انتخاب ج.' } },
      { kind: 'fair', fits: [1, 2], t: { en: 'Each neighbor gets a voice before anything is decided.', es: 'Cada vecino tiene voz antes de que se decida algo.', fa: 'هر همسایه پیش از هر تصمیم حق گپ زدن دارد.' },
        why: { en: 'With a wall and no talking, nobody gets a voice.', es: 'Con un muro y sin hablar, nadie tiene voz.', fa: 'با دیوار و بدون گپ زدن، هیچ کس حق گپ زدن ندارد.' } },
      { kind: 'fair', fits: [], t: { en: 'The stronger neighbor keeps all the water on its side.', es: 'El vecino más fuerte se queda con toda el agua de su lado.', fa: 'همسایهٔ قوی‌تر تمام آب را در طرف خود نگه می‌دارد.' },
        why: { en: 'That is not fair. The other neighbor\'s farms would dry up.', es: 'Eso no es justo. Los cultivos del otro vecino se secarían.', fa: 'این منصفانه نیست. کشت همسایهٔ دیگر خشک می‌شود.' } },
      { kind: 'lasting', fits: [1], t: { en: 'They meet every year, so they can fix new problems before they grow.', es: 'Se reúnen cada año, así que pueden arreglar problemas nuevos antes de que crezcan.', fa: 'هر سال جلسه می‌کنند، پس می‌توانند مشکلات تازه را پیش از بزرگ شدن حل کنند.' },
        why: { en: 'Meeting every year is part of the treaty choice, B.', es: 'Reunirse cada año es parte de la opción del tratado, B.', fa: 'هر سال جلسه کردن بخشی از انتخاب معاهده، یعنی ب، است.' } },
      { kind: 'lasting', fits: [1, 2], t: { en: 'Both sides agree to clear, written rules, so everyone knows what to do in a dry year.', es: 'Los dos lados aceptan reglas claras y escritas, así todos saben qué hacer en un año seco.', fa: 'هر دو طرف قانون‌های روشن و نوشته‌شده را قبول می‌کنند، پس همه می‌دانند در سال خشک چه کنند.' },
        why: { en: 'A wall gives no rules for sharing water.', es: 'Un muro no da reglas para compartir el agua.', fa: 'دیوار هیچ قانونی برای شریک شدن آب نمی‌دهد.' } },
      { kind: 'lasting', fits: [2], t: { en: 'A trusted outside group can come back and help if a new fight starts.', es: 'Un grupo de afuera de confianza puede volver a ayudar si empieza una pelea nueva.', fa: 'یک گروه بیرونی قابل اعتماد می‌تواند اگر دعوای تازه شروع شود دوباره کمک کند.' },
        why: { en: 'This reason is about a neutral group, which is choice C.', es: 'Esta razón habla de un grupo neutral, que es la opción C.', fa: 'این دلیل دربارهٔ گروه بی‌طرف است، یعنی انتخاب ج.' } },
      { kind: 'lasting', fits: [], t: { en: 'A wall stops the neighbors from ever arguing again.', es: 'Un muro hace que los vecinos nunca vuelvan a discutir.', fa: 'دیوار نمی‌گذارد همسایه‌ها دیگر هرگز دعوا کنند.' },
        why: { en: 'A wall does not stop the river or the need for water. When nobody talks, problems grow.', es: 'Un muro no detiene el río ni la necesidad de agua. Cuando nadie habla, los problemas crecen.', fa: 'دیوار نه دریا را متوقف می‌کند و نه نیاز به آب را. وقتی کسی گپ نزند، مشکلات بزرگ می‌شوند.' } }
    ],
    mismatch: { en: 'That reason does not back up your choice.', es: 'Esa razón no apoya tu elección.', fa: 'آن دلیل از انتخاب تو پشتیبانی نمی‌کند.' },
    success: { en: 'North Bank and South Bank shake hands across the bridge. Talking, fair rules and neutral helpers turn a fight into a plan.', es: 'Orilla Norte y Orilla Sur se dan la mano sobre el puente. Hablar, tener reglas justas y ayudantes neutrales convierte una pelea en un plan.', fa: 'ساحل شمالی و ساحل جنوبی روی پل با هم دست می‌دهند. گپ زدن، قانون‌های منصفانه و کمک‌کننده‌های بی‌طرف یک دعوا را به یک پلان تبدیل می‌کنند.' }
  },

  boss: {
    at: [24, 14],
    stat: 'reg',
    need: 3,
    name: { en: 'The Great Smudge', es: 'El Gran Borrón', fa: 'لکهٔ بزرگ' },
    appear: { en: 'The Great Smudge has risen over the river bridge, right below the hall! It is the very last one. Go!', es: '¡El Gran Borrón apareció sobre el puente del río, justo debajo del salón! Es el último de todos. ¡Ve!', fa: 'لکهٔ بزرگ بالای پل دریا، درست پایین تالار، پیدا شد! این آخرین لکه است. برو!' },
    taunt: { en: 'I am the Great Smudge! I blur every border and turn every neighbor against the other. Without the last page, the Atlas stays torn forever!', es: '¡Soy el Gran Borrón! Borro cada frontera y pongo a cada vecino contra el otro. ¡Sin la última página, el Atlas se queda roto para siempre!', fa: 'من لکهٔ بزرگ هستم! هر سرحد را تار می‌کنم و هر همسایه را با دیگری دشمن می‌کنم. بدون صفحهٔ آخر، اطلس برای همیشه پاره می‌ماند!' },
    win: { en: 'The Great Smudge breaks into a shower of light. The 24th page flies home, and the Great Atlas is whole again! Every realm, river and road is back on the map. Thank you, Worldwalker. The world is wide, and now you know how to read it.',
      es: 'El Gran Borrón se rompe en una lluvia de luz. ¡La página 24 vuelve a casa y el Gran Atlas está completo otra vez! Cada reino, río y camino está de nuevo en el mapa. Gracias, Caminante del Mundo. El mundo es grande, y ahora sabes cómo leerlo.',
      fa: 'لکهٔ بزرگ به بارانی از نور تبدیل می‌شود. صفحهٔ ۲۴ به خانه برمی‌گردد و اطلس بزرگ دوباره کامل است! هر سرزمین، دریا و راه دوباره روی نقشه است. تشکر، جهان‌گرد. جهان بزرگ است و حالا تو می‌دانی چطور آن را بخوانی.' },
    questions: [
      { q: { en: 'What is a natural border?', es: '¿Qué es una frontera natural?', fa: 'سرحد طبیعی چیست؟' },
        choices: [{ en: 'A border that follows a river, a mountain range or a coastline', es: 'Una frontera que sigue un río, una cordillera o una costa', fa: 'سرحدی که از دریا، رشته‌کوه یا ساحل پیروی می‌کند' }, { en: 'A border drawn with a ruler on a map', es: 'Una frontera dibujada con regla en un mapa', fa: 'سرحدی که با خط‌کش روی نقشه کشیده شده' }, { en: 'A border that two countries still argue about', es: 'Una frontera que dos países todavía discuten', fa: 'سرحدی که دو کشور هنوز بر سرش اختلاف دارند' }, { en: 'A border guarded by soldiers', es: 'Una frontera vigilada por soldados', fa: 'سرحدی که عسکرها از آن نگهبانی می‌کنند' }], answer: 0,
        why: { en: 'Natural borders follow things in nature, like the Andes or the Rio Grande.', es: 'Las fronteras naturales siguen cosas de la naturaleza, como los Andes o el río Bravo.', fa: 'سرحدهای طبیعی از چیزهای طبیعت پیروی می‌کنند، مثل اندیز یا ریو گرانده.' } },
      { q: { en: 'What is a geometric border?', es: '¿Qué es una frontera geométrica?', fa: 'سرحد هندسی چیست؟' },
        choices: [{ en: 'A straight line drawn by people', es: 'Una línea recta dibujada por personas', fa: 'خط راستی که مردم کشیده‌اند' }, { en: 'A border that follows a mountain ridge', es: 'Una frontera que sigue la cima de una montaña', fa: 'سرحدی که از تیغهٔ کوه پیروی می‌کند' }, { en: 'A border along a seacoast', es: 'Una frontera a lo largo de una costa', fa: 'سرحدی در امتداد ساحل بحر' }, { en: 'A border that moves every few years', es: 'Una frontera que se mueve cada pocos años', fa: 'سرحدی که هر چند سال جا عوض می‌کند' }], answer: 0,
        why: { en: 'Geometric borders are straight lines. Many borders in Africa are like this.', es: 'Las fronteras geométricas son líneas rectas. Muchas fronteras de África son así.', fa: 'سرحدهای هندسی خط راست هستند. بسیاری از سرحدهای افریقا این‌طور هستند.' } },
      { q: { en: 'What is a boundary dispute?', es: '¿Qué es una disputa fronteriza?', fa: 'اختلاف سرحدی چیست؟' },
        choices: [{ en: 'Two countries arguing over the same land', es: 'Dos países que discuten por la misma tierra', fa: 'دو کشور که بر سر یک زمین اختلاف دارند' }, { en: 'A treaty that ends a war', es: 'Un tratado que termina una guerra', fa: 'معاهده‌ای که جنگ را ختم می‌کند' }, { en: 'A tax charged at a border crossing', es: 'Un impuesto que se cobra al cruzar una frontera', fa: 'مالیه‌ای که هنگام گذشتن از سرحد گرفته می‌شود' }, { en: 'A fence built along a river', es: 'Una cerca construida junto a un río', fa: 'کتاره‌ای که کنار دریا ساخته شده' }], answer: 0,
        why: { en: 'In a boundary dispute, two countries do not agree on where the border is.', es: 'En una disputa fronteriza, dos países no están de acuerdo sobre dónde está la frontera.', fa: 'در اختلاف سرحدی، دو کشور دربارهٔ جای سرحد موافق نیستند.' } },
      { q: { en: 'What is a treaty?', es: '¿Qué es un tratado?', fa: 'معاهده چیست؟' },
        choices: [{ en: 'A written agreement between countries', es: 'Un acuerdo escrito entre países', fa: 'توافق نوشته‌شده بین کشورها' }, { en: 'A meeting that happens once a year', es: 'Una reunión que pasa una vez al año', fa: 'جلسه‌ای که سالی یک بار برگزار می‌شود' }, { en: 'A wall built along a border', es: 'Un muro construido en una frontera', fa: 'دیواری که کنار سرحد ساخته شده' }, { en: 'A map that shows where a border runs', es: 'Un mapa que muestra por dónde va una frontera', fa: 'نقشه‌ای که نشان می‌دهد سرحد از کجا می‌گذرد' }], answer: 0,
        why: { en: 'A treaty is written down and signed. It can say how countries share water or land.', es: 'Un tratado se escribe y se firma. Puede decir cómo los países comparten agua o tierra.', fa: 'معاهده نوشته و امضا می‌شود. می‌تواند بگوید کشورها چطور آب یا زمین را شریک شوند.' } },
      { q: { en: 'Why did Laos, Thailand, Cambodia and Vietnam form the Mekong River Commission in 1995?', es: '¿Por qué Laos, Tailandia, Camboya y Vietnam formaron la Comisión del Río Mekong en 1995?', fa: 'چرا لائوس، تایلند، کمبودیا و ویتنام در سال ۱۹۹۵ کمیسیون دریای میکانگ را ساختند؟' },
        choices: [{ en: 'To share water data and plan together', es: 'Para compartir datos del agua y planear juntos', fa: 'تا معلومات آب را شریک کنند و با هم پلان بسازند' }, { en: 'To close the river to foreign ships', es: 'Para cerrar el río a barcos extranjeros', fa: 'تا دریا را به روی کشتی‌های خارجی ببندند' }, { en: 'To divide the river into private parts', es: 'Para dividir el río en partes privadas', fa: 'تا دریا را به بخش‌های شخصی تقسیم کنند' }, { en: 'To build one dam they would all own', es: 'Para construir una sola represa de todos', fa: 'تا یک بند آب بسازند که مال همه باشد' }], answer: 0,
        why: { en: 'The commission gives the countries a table to sit at and share what they know.', es: 'La comisión les da a los países una mesa donde sentarse y compartir lo que saben.', fa: 'این کمیسیون به کشورها میزی برای نشستن و شریک کردن دانسته‌هایشان می‌دهد.' } },
      { q: { en: 'What is surprising about the Indus Waters Treaty?', es: '¿Qué tiene de sorprendente el Tratado de las Aguas del Indo?', fa: 'چه چیز معاهدهٔ آب‌های سند تعجب‌آور است؟' },
        choices: [{ en: 'It held for more than sixty years, even when India and Pakistan fought', es: 'Duró más de sesenta años, incluso cuando India y Pakistán pelearon', fa: 'بیشتر از شصت سال پابرجا ماند، حتی وقتی هند و پاکستان جنگیدند' }, { en: 'It was signed by every country in the world', es: 'Lo firmaron todos los países del mundo', fa: 'همهٔ کشورهای جهان آن را امضا کردند' }, { en: 'It gave all the water to one country', es: 'Le dio toda el agua a un solo país', fa: 'تمام آب را به یک کشور داد' }, { en: 'It was never written down', es: 'Nunca se escribió', fa: 'هرگز نوشته نشد' }], answer: 0,
        why: { en: 'With help from the World Bank, the treaty held longer than many treaties in calmer places.', es: 'Con ayuda del Banco Mundial, el tratado duró más que muchos tratados en lugares más tranquilos.', fa: 'با کمک بانک جهانی، این معاهده از بسیاری معاهده‌ها در جاهای آرام‌تر بیشتر دوام کرد.' } },
      { q: { en: 'What happened to the Aral Sea?', es: '¿Qué le pasó al mar de Aral?', fa: 'بر سر بحیرهٔ ارال چه آمد؟' },
        choices: [{ en: 'Rivers that fed it were sent to water cotton fields', es: 'Los ríos que lo alimentaban se usaron para regar campos de algodón', fa: 'دریاهایی که به آن آب می‌دادند به کشتزارهای پخته برده شدند' }, { en: 'An earthquake opened a channel to the ocean', es: 'Un terremoto abrió un canal hacia el océano', fa: 'یک زلزله راهی به سوی بحر باز کرد' }, { en: 'It froze over and never thawed', es: 'Se congeló y nunca se descongeló', fa: 'یخ بست و دیگر آب نشد' }, { en: 'A treaty split it evenly', es: 'Un tratado lo dividió por igual', fa: 'یک معاهده آن را مساوی تقسیم کرد' }], answer: 0,
        why: { en: 'No strong agreement protected the sea, so it lost most of its water.', es: 'Ningún acuerdo fuerte protegió el mar, así que perdió casi toda su agua.', fa: 'هیچ توافق محکمی از بحیره حفاظت نکرد، پس بیشتر آبش را از دست داد.' } },
      { q: { en: 'Two countries share one river. Why do they need to work together?', es: 'Dos países comparten un río. ¿Por qué necesitan trabajar juntos?', fa: 'دو کشور در یک دریا شریک هستند. چرا باید با هم کار کنند؟' },
        choices: [{ en: 'The river keeps flowing across the border, so what one side does changes the other', es: 'El río sigue corriendo a través de la frontera, así que lo que hace un lado cambia al otro', fa: 'دریا از سرحد می‌گذرد، پس کار یک طرف طرف دیگر را تغییر می‌دهد' }, { en: 'Rivers stop flowing at the border', es: 'Los ríos dejan de correr en la frontera', fa: 'دریاها کنار سرحد از جریان می‌ایستند' }, { en: 'Only one country can ever use a river', es: 'Solo un país puede usar un río', fa: 'فقط یک کشور می‌تواند از دریا استفاده کند' }, { en: 'Rivers are not useful for farms', es: 'Los ríos no sirven para los cultivos', fa: 'دریاها برای کشت به درد نمی‌خورند' }], answer: 0,
        why: { en: 'Rivers do not stop for a border sign. A dam upstream changes the water downstream.', es: 'Los ríos no se detienen por un letrero de frontera. Una represa río arriba cambia el agua río abajo.', fa: 'دریاها برای تابلوی سرحد نمی‌ایستند. بند آب در بالای دریا آب پایین را تغییر می‌دهد.' } }
    ]
  },

  learned: [
    { en: 'A [[natural border|natural border]] follows a river, mountains or a coast. A [[geometric border|geometric border]] is a straight line drawn by people.', es: 'Una [[natural border|frontera natural]] sigue un río, montañas o una costa. Una [[geometric border|frontera geométrica]] es una línea recta dibujada por personas.', fa: '[[natural border|سرحد طبیعی]] از دریا، کوه یا ساحل پیروی می‌کند. [[geometric border|سرحد هندسی]] خط راستی است که مردم کشیده‌اند.' },
    { en: 'Countries can argue over land, water and resources. That can lead to a [[boundary dispute|boundary dispute]]. Rivers do not stop at borders, so neighbors must share them.', es: 'Los países pueden discutir por tierra, agua y recursos. Eso puede llevar a una [[boundary dispute|disputa fronteriza]]. Los ríos no se detienen en las fronteras, así que los vecinos deben compartirlos.', fa: 'کشورها ممکن است بر سر زمین، آب و منابع اختلاف کنند. این می‌تواند به [[boundary dispute|اختلاف سرحدی]] برسد. دریاها کنار سرحد نمی‌ایستند، پس همسایه‌ها باید آن‌ها را شریک باشند.' },
    { en: 'A [[treaty|treaty]], a shared group like the Mekong River Commission, a [[neutral|neutral]] helper, or the [[united nations|United Nations]] can help neighbors work together for a long time.', es: 'Un [[treaty|tratado]], un grupo compartido como la Comisión del Río Mekong, un ayudante [[neutral|neutral]] o las [[united nations|Naciones Unidas]] pueden ayudar a los vecinos a trabajar juntos por mucho tiempo.', fa: 'یک [[treaty|معاهده]]، یک گروه مشترک مثل کمیسیون دریای میکانگ، یک کمک‌کنندهٔ [[neutral|بی‌طرف]] یا [[united nations|سازمان ملل متحد]] می‌توانند به همسایه‌ها کمک کنند تا مدت درازی با هم کار کنند.' }
  ],
  reflect: {
    q: { en: 'Think about something people share in your school or neighborhood, like a field, a park or a bus. How do people share it fairly? What rule would you add to help everyone get along?', es: 'Piensa en algo que la gente comparte en tu escuela o tu barrio, como una cancha, un parque o un autobús. ¿Cómo lo comparten de forma justa? ¿Qué regla agregarías para que todos se lleven bien?', fa: 'به چیزی فکر کن که مردم در مکتب یا محلهٔ تو شریک هستند، مثل میدان، پارک یا سرویس. مردم چطور آن را منصفانه شریک می‌شوند؟ چه قانونی اضافه می‌کنی تا همه با هم خوب باشند؟' },
    starter: { en: 'In my community, people share', es: 'En mi comunidad, la gente comparte', fa: 'در محلهٔ من، مردم شریک هستند در' }
  }
};
