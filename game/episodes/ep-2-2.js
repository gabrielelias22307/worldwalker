/* WORLDWALKER · Episode 2.2 · Latin America & the Caribbean (WG.4)
   Elevation zones on one mountainside in Ecuador: the map climbs from the hot coast (bottom)
   through coffee to potatoes and wheat, then high grass and snow (top). A dirt road zig-zags up. */
window.EPISODE = {
  id: '2.2',
  realm: 2,
  sol: 'WG.4',
  title: { en: 'Latin America & the Caribbean', es: 'América Latina y el Caribe', fa: 'امریکای لاتین و کارائیب' },
  place: { en: 'The Coffee Mountain, Ecuador', es: 'La Montaña del Café, Ecuador', fa: 'کوه قهوه، اکوادور' },
  intro: [
    { en: 'Pip: "The Smudge mixed up the seasons on this mountain in Ecuador! Now farmers are planting crops at the wrong height. Climb from the hot coast up to the snow. Talk to the banana worker, the coffee grower and the potato farmer. Then fix the compass stone."',
      es: 'Pip: "¡El Borrón revolvió las estaciones en esta montaña de Ecuador! Ahora los agricultores siembran a la altura equivocada. Sube desde la costa caliente hasta la nieve. Habla con la trabajadora del banano, el cafetero y la agricultora de papas. Luego arregla la piedra de la brújula."',
      fa: 'پیپ: «لکه فصل‌های این کوه را در اکوادور به هم زد! حالا دهقانان حاصلات را در ارتفاع غلط می‌کارند. از ساحل گرم تا برف بالا برو. با کارگر کیله، دهقان قهوه و دهقان کچالو گپ بزن. بعد سنگ قطب‌نما را درست کن.»' }
  ],

  /* 32 x 22 = 2 x 2 screens. Bottom to top:
     rows 19-20 beach, rows 14-17 tierra caliente (bananas y, sugarcane e),
     rows 9-12 tierra templada (coffee 1 2 3), rows 5-7 tierra fría (potatoes v, wheat w),
     rows 1-4 tierra helada (high grass g, then snow n and snowy peaks A). */
  map: [
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
    'AAnnnAAnnnnnnAAAnnnnnnnAAnnnnAAA',
    'AnnnnnnnninnnnnnnnnnnnnnnninnnnA',
    'AnnnAnnnxnnnnnnnnnnnnnnAnnnnnnnA',
    'K"ggg:::::::::::::::::::::::"ggK',
    'Kvvvv.wwwww.QQQ.vvvvv.wwwww:vvvK',
    'Kvvvv.wwwww.hdh.vvvvv.wwwww:vvvK',
    'Kvvvv.wwwww.....vvvvv.wwwww:vvvK',
    'M...::::::::::::::::::::::::K..M',
    'M332:.33T33.3323.3T33.3323.33.3M',
    'M23.:.33333.32T3.3333.RRR.333.3M',
    'M333:.3T333.3333.33T3.hdh.3T3.3M',
    'M323:.33333.3323.3333.....3333.M',
    'K...:::::::::::::::::::::::::..K',
    'pyyyy.eeeee.yyyy.eeeee.yyyyy:..p',
    'pyyyy.eeeee.yyyy.eeeee.yyyyy:yyp',
    'py.yy.eeeee.yyyy.eeeee.yy.yy:yyp',
    'pyyyy.eeeee.y.yy.eeeee.yyyyy:.Jp',
    'p..::::::::::::::::::::::::::..p',
    'ps.sxsssspsssssssssssspssssssssp',
    'pssssssssssssskksssssssssssssssp',
    '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'
  ],
  start: [2, 19],

  words: {
    altitude: { en: 'how high a place is above sea level', es: 'qué tan alto está un lugar sobre el nivel del mar', fa: 'اینکه یک جا چقدر از سطح بحر بلندتر است' },
    'tierra caliente': { en: 'the "hot land": from sea level up to about 3,000 feet (900 m); bananas and sugarcane grow here', es: 'la tierra caliente: desde el nivel del mar hasta unos 3,000 pies (900 m); aquí crecen el banano y la caña de azúcar', fa: 'تیرا کالینته یا «زمین گرم»: از سطح بحر تا حدود ۳۰۰۰ فوت (۹۰۰ متر)؛ کیله و نیشکر اینجا می‌روید' },
    'tierra templada': { en: 'the "mild land": about 3,000 to 6,000 feet (900–1,800 m); coffee and corn grow here', es: 'la tierra templada: de unos 3,000 a 6,000 pies (900–1,800 m); aquí crecen el café y el maíz', fa: 'تیرا تمپلادا یا «زمین معتدل»: حدود ۳۰۰۰ تا ۶۰۰۰ فوت (۹۰۰ تا ۱۸۰۰ متر)؛ قهوه و جواری اینجا می‌روید' },
    'tierra fria': { en: 'the "cold land": about 6,000 to 12,000 feet (1,800–3,600 m); potatoes and wheat grow here', es: 'la tierra fría: de unos 6,000 a 12,000 pies (1,800–3,600 m); aquí crecen la papa y el trigo', fa: 'تیرا فریا یا «زمین سرد»: حدود ۶۰۰۰ تا ۱۲۰۰۰ فوت (۱۸۰۰ تا ۳۶۰۰ متر)؛ کچالو و گندم اینجا می‌روید' },
    'tierra helada': { en: 'the "frozen land": above about 12,000 feet (3,600 m); only tough grass for llamas and alpacas, then snow and ice', es: 'la tierra helada: más de unos 12,000 pies (3,600 m); solo pasto duro para llamas y alpacas, y luego nieve y hielo', fa: 'تیرا الادا یا «زمین یخ‌زده»: بالاتر از حدود ۱۲۰۰۰ فوت (۳۶۰۰ متر)؛ فقط علف سخت برای لاما و آلپاکا، بعد برف و یخ' },
    'cash crop': { en: 'a crop grown mainly to sell, not to eat at home', es: 'un cultivo que se siembra sobre todo para vender, no para comer en casa', fa: 'حاصلی که بیشتر برای فروش کاشته می‌شود، نه برای خوردن در خانه' },
    'highland climate': { en: 'the cool climate of a place near the equator that stays cool because it is high up', es: 'el clima fresco de un lugar cerca del ecuador que se mantiene fresco porque está alto', fa: 'آب و هوای سرد جایی نزدیک خط استوا که چون بلند است سرد می‌ماند' }
  },

  npcs: [
    {
      x: 13, y: 17,
      name: { en: 'Yesenia', es: 'Yesenia', fa: 'یسنیا' },
      role: { en: 'Banana farm worker', es: 'Trabajadora bananera', fa: 'کارگر فارم کیله' },
      look: { skin: 5, hair: '#120c08', shirt: '#f2c14e', pants: '#2f6fd6' },
      lines: [
        { en: '¡Hola! Welcome to the hot coast of Ecuador. We are near sea level, in the [[tierra caliente|tierra caliente]], the hot land. It is hot and wet all year.',
          es: '¡Hola! Bienvenido a la costa caliente de Ecuador. Estamos cerca del nivel del mar, en la [[tierra caliente|tierra caliente]]. Aquí hace calor y llueve todo el año.',
          fa: 'سلام! به ساحل گرم اکوادور خوش آمدی. ما نزدیک سطح بحر هستیم، در [[tierra caliente|تیرا کالینته]] یعنی زمین گرم. اینجا تمام سال گرم و مرطوب است.',
          easy: { en: 'This is the hot coast, near sea level. It is the [[tierra caliente|tierra caliente]].', es: 'Esta es la costa caliente, cerca del nivel del mar. Es la [[tierra caliente|tierra caliente]].', fa: 'اینجا ساحل گرم نزدیک سطح بحر است. نامش [[tierra caliente|تیرا کالینته]] است.' } },
        { en: 'Bananas and sugarcane love this heat. Ecuador sells more bananas to other countries than any other country in the world.',
          es: 'Al banano y a la caña de azúcar les encanta este calor. Ecuador vende más bananos a otros países que cualquier otro país del mundo.',
          fa: 'کیله و نیشکر این گرما را دوست دارند. اکوادور از هر کشور دیگر جهان بیشتر کیله به کشورهای دیگر می‌فروشد.',
          easy: { en: 'Bananas and sugarcane like heat. Ecuador sells the most bananas in the world.', es: 'Al banano y a la caña les gusta el calor. Ecuador vende más bananos que nadie.', fa: 'کیله و نیشکر گرما را دوست دارند. اکوادور از همه بیشتر کیله می‌فروشد.' } },
        { en: 'Most of these bananas get shipped far away to be sold. A crop grown mainly to sell, not to eat at home, is a [[cash crop|cash crop]].',
          es: 'La mayoría de estos bananos se mandan lejos para venderse. Un cultivo que se siembra sobre todo para vender, no para comer en casa, es un [[cash crop|cultivo comercial]].',
          fa: 'بیشتر این کیله‌ها به جاهای دور فرستاده می‌شوند تا فروخته شوند. حاصلی که بیشتر برای فروش است، نه برای خوردن در خانه، [[cash crop|حاصل نقدی]] نام دارد.',
          easy: { en: 'We grow bananas to sell. That makes them a [[cash crop|cash crop]].', es: 'Sembramos bananos para vender. Por eso son un [[cash crop|cultivo comercial]].', fa: 'ما کیله را برای فروش می‌کاریم. پس [[cash crop|حاصل نقدی]] است.' } }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Why do bananas and sugarcane grow down here on the coast?', es: '¿Por qué el banano y la caña de azúcar crecen aquí abajo, en la costa?', fa: 'چرا کیله و نیشکر اینجا پایین در ساحل می‌رویند؟' },
        choices: [
          { ok: true, t: { en: 'The low land is hot all year, and they need heat', es: 'La tierra baja es caliente todo el año, y ellos necesitan calor', fa: 'زمین پایین تمام سال گرم است و آن‌ها به گرما ضرورت دارند' },
            why: { en: 'Yes! Down low, near sea level, the air stays hot. That is the tierra caliente.', es: '¡Sí! Abajo, cerca del nivel del mar, el aire se mantiene caliente. Esa es la tierra caliente.', fa: 'بله! پایین، نزدیک سطح بحر، هوا گرم می‌ماند. این تیرا کالینته است.' } },
          { t: { en: 'They need snow to grow', es: 'Necesitan nieve para crecer', fa: 'برای روییدن به برف ضرورت دارند' },
            why: { en: 'Snow would kill them. They need steady heat.', es: 'La nieve los mataría. Necesitan calor todo el tiempo.', fa: 'برف آن‌ها را از بین می‌برد. آن‌ها به گرمای دایمی ضرورت دارند.' } },
          { t: { en: 'The coast is the only place with soil', es: 'La costa es el único lugar con tierra', fa: 'ساحل تنها جایی است که خاک دارد' },
            why: { en: 'The whole mountain has soil. The difference is how hot or cold each height is.', es: 'Toda la montaña tiene tierra. La diferencia es qué tan caliente o fría es cada altura.', fa: 'تمام کوه خاک دارد. فرق در این است که هر ارتفاع چقدر گرم یا سرد است.' } }
        ]
      }
    },
    {
      x: 24, y: 12,
      name: { en: 'Don Julián', es: 'Don Julián', fa: 'دون خولیان' },
      role: { en: 'Coffee grower', es: 'Cafetero', fa: 'دهقان قهوه' },
      look: { skin: 2, hair: '#4a3a2a', shirt: '#ffffff', pants: '#5a4630' },
      lines: [
        { en: 'Buenos días! My coffee farm sits in the [[tierra templada|tierra templada]], the mild land in the middle of the mountain. The days are warm and the nights are cool.',
          es: '¡Buenos días! Mi finca de café está en la [[tierra templada|tierra templada]], en el medio de la montaña. Los días son cálidos y las noches son frescas.',
          fa: 'صبح بخیر! فارم قهوهٔ من در [[tierra templada|تیرا تمپلادا]] است، یعنی زمین معتدل در میانهٔ کوه. روزها گرم و شب‌ها خنک است.',
          easy: { en: 'My coffee grows in the middle of the mountain, the [[tierra templada|tierra templada]].', es: 'Mi café crece en el medio de la montaña, la [[tierra templada|tierra templada]].', fa: 'قهوهٔ من در میانهٔ کوه می‌روید، در [[tierra templada|تیرا تمپلادا]].' } },
        { en: 'Air gets cooler as you climb. It drops about 3.5 degrees Fahrenheit for every 1,000 feet of [[altitude|altitude]]. So two towns the same distance from the equator can feel nothing alike.',
          es: 'El aire se enfría a medida que subes. Baja unos 3.5 grados Fahrenheit por cada 1,000 pies de [[altitude|altitud]]. Por eso dos pueblos a la misma distancia del ecuador pueden sentirse muy distintos.',
          fa: 'هر چه بالاتر بروی هوا سردتر می‌شود. برای هر ۱۰۰۰ فوت [[altitude|ارتفاع]] حدود ۳.۵ درجهٔ فارنهایت سردتر می‌شود. پس دو شهرک با یک فاصله از خط استوا می‌توانند هیچ شباهتی نداشته باشند.',
          easy: { en: 'The higher you go, the colder the air. That is because of [[altitude|altitude]].', es: 'Mientras más subes, más frío es el aire. Eso es por la [[altitude|altitud]].', fa: 'هر چه بالاتر بروی، هوا سردتر است. این به خاطر [[altitude|ارتفاع]] است.' } },
        { en: 'Coffee plants are picky. They do not like frost, and they do not like steady heat. Mountain slopes give them cool, wet air all year. That is why coffee comes from the highlands of Colombia, Guatemala and Honduras too.',
          es: 'Las plantas de café son exigentes. No les gusta la helada ni el calor constante. Las laderas de la montaña les dan aire fresco y húmedo todo el año. Por eso el café también viene de las tierras altas de Colombia, Guatemala y Honduras.',
          fa: 'بوتهٔ قهوه سخت‌گیر است. نه یخبندان را دوست دارد و نه گرمای دایمی را. شیب کوه تمام سال به آن هوای خنک و مرطوب می‌دهد. به همین خاطر قهوه از کوهستان‌های کلمبیا، گواتمالا و هندوراس هم می‌آید.',
          easy: { en: 'Coffee does not like frost or too much heat. The cool, wet mountain slopes are just right.', es: 'Al café no le gusta la helada ni el exceso de calor. Las laderas frescas y húmedas son perfectas.', fa: 'قهوه نه یخبندان را دوست دارد نه گرمای زیاد را. شیب خنک و مرطوب کوه برایش درست است.' } }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Why does coffee grow on the mountain slopes instead of on the hot coast?', es: '¿Por qué el café crece en las laderas de la montaña y no en la costa caliente?', fa: 'چرا قهوه روی شیب کوه می‌روید، نه در ساحل گرم؟' },
        choices: [
          { ok: true, t: { en: 'The coast is too hot for coffee plants', es: 'La costa es demasiado caliente para el café', fa: 'ساحل برای بوتهٔ قهوه خیلی گرم است' },
            why: { en: 'Right. Coffee needs air that stays cool and wet, and the slopes give it that.', es: 'Correcto. El café necesita aire fresco y húmedo, y las laderas se lo dan.', fa: 'درست. قهوه به هوای خنک و مرطوب ضرورت دارد و شیب کوه همین را به آن می‌دهد.' } },
          { t: { en: 'Coffee needs snow on its leaves', es: 'El café necesita nieve en sus hojas', fa: 'قهوه روی برگ‌هایش برف لازم دارد' },
            why: { en: 'Coffee does not like frost at all. Snow is far too cold.', es: 'Al café no le gusta nada la helada. La nieve es demasiado fría.', fa: 'قهوه اصلاً یخبندان را دوست ندارد. برف خیلی سرد است.' } },
          { t: { en: 'Mountain soil is the only soil coffee can use', es: 'La tierra de montaña es la única que sirve para el café', fa: 'خاک کوه تنها خاکی است که قهوه می‌تواند به کار ببرد' },
            why: { en: 'The key is the air temperature, not a special soil. Height makes the air cooler.', es: 'Lo importante es la temperatura del aire, no un suelo especial. La altura enfría el aire.', fa: 'مهم گرمی و سردی هواست، نه خاک خاص. ارتفاع هوا را سردتر می‌کند.' } }
        ]
      }
    },
    {
      x: 14, y: 7,
      name: { en: 'Sisa', es: 'Sisa', fa: 'سیسا' },
      role: { en: 'Potato farmer and alpaca herder', es: 'Agricultora de papas y pastora de alpacas', fa: 'دهقان کچالو و چوپان آلپاکا' },
      look: { skin: 3, hair: '#120c08', shirt: '#c0392b', pants: '#22324f', robe: true },
      lines: [
        { en: 'Alli puncha! That means "good day" in Kichwa, my language. I farm potatoes up here in the [[tierra fria|tierra fría]], the cold land. Potatoes were first grown in the Andes thousands of years ago.',
          es: '¡Alli puncha! Eso quiere decir "buen día" en kichwa, mi idioma. Yo siembro papas aquí arriba, en la [[tierra fria|tierra fría]]. Las papas se sembraron por primera vez en los Andes hace miles de años.',
          fa: 'اَلی پونچا! این در زبان من، کیچوا، یعنی «روز بخیر». من اینجا بالا در [[tierra fria|تیرا فریا]] یعنی زمین سرد کچالو می‌کارم. کچالو اولین بار هزاران سال پیش در کوه‌های اندیز کاشته شد.',
          easy: { en: 'I grow potatoes in the cold land, the [[tierra fria|tierra fría]]. Potatoes first came from the Andes.', es: 'Yo siembro papas en la [[tierra fria|tierra fría]]. Las papas vienen de los Andes.', fa: 'من در زمین سرد، [[tierra fria|تیرا فریا]]، کچالو می‌کارم. کچالو اول از اندیز آمد.' } },
        { en: 'Potatoes and wheat can take the cold. Higher up is the [[tierra helada|tierra helada]], the frozen land. Only tough grass grows there, and our llamas and alpacas graze on it. Above that is only snow and ice.',
          es: 'La papa y el trigo aguantan el frío. Más arriba está la [[tierra helada|tierra helada]]. Allí solo crece pasto duro, y nuestras llamas y alpacas lo comen. Más arriba solo hay nieve y hielo.',
          fa: 'کچالو و گندم سرما را تحمل می‌کنند. بالاتر [[tierra helada|تیرا الادا]] یعنی زمین یخ‌زده است. آنجا فقط علف سخت می‌روید و لاماها و آلپاکاهای ما آن را می‌چرند. بالاتر از آن فقط برف و یخ است.',
          easy: { en: 'Higher up is the frozen land, the [[tierra helada|tierra helada]]. Llamas and alpacas eat the grass. Then there is only snow.', es: 'Más arriba está la [[tierra helada|tierra helada]]. Las llamas y alpacas comen el pasto. Luego solo hay nieve.', fa: 'بالاتر زمین یخ‌زده یا [[tierra helada|تیرا الادا]] است. لاما و آلپاکا علف می‌خورند. بعد فقط برف است.' } },
        { en: 'Many big cities in Latin America were built high up, like Quito, Bogotá and Mexico City. The cool air is easier to live in than the heavy heat of the coast. This cool weather near the equator is a [[highland climate|highland climate]].',
          es: 'Muchas ciudades grandes de América Latina se construyeron en lo alto, como Quito, Bogotá y Ciudad de México. El aire fresco es más cómodo que el calor pesado de la costa. Este clima fresco cerca del ecuador es un [[highland climate|clima de montaña]].',
          fa: 'بسیاری از شهرهای بزرگ امریکای لاتین در بلندی ساخته شدند، مثل کیتو، بوگوتا و مکسیکوسیتی. زندگی در هوای خنک آسان‌تر از گرمای سنگین ساحل است. این هوای خنک نزدیک خط استوا [[highland climate|آب و هوای کوهستانی]] نام دارد.',
          easy: { en: 'Quito, Bogotá and Mexico City are high up, where the air is cool. That is a [[highland climate|highland climate]].', es: 'Quito, Bogotá y Ciudad de México están en lo alto, donde el aire es fresco. Eso es un [[highland climate|clima de montaña]].', fa: 'کیتو، بوگوتا و مکسیکوسیتی در بلندی هستند، جایی که هوا خنک است. این [[highland climate|آب و هوای کوهستانی]] است.' } }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Two towns in Ecuador sit the same distance from the equator. One is hot all year. The other needs a jacket at night. What best explains the difference?', es: 'Dos pueblos de Ecuador están a la misma distancia del ecuador. Uno es caliente todo el año. En el otro se necesita chaqueta de noche. ¿Qué explica mejor la diferencia?', fa: 'دو شهرک در اکوادور به یک فاصله از خط استوا هستند. یکی تمام سال گرم است. در دیگری شب‌ها جاکت لازم است. بهترین توضیح این فرق چیست؟' },
        choices: [
          { ok: true, t: { en: 'The cool town sits much higher above sea level', es: 'El pueblo fresco está mucho más alto sobre el nivel del mar', fa: 'شهرک سرد خیلی بلندتر از سطح بحر است' },
            why: { en: 'Yes. Air cools as you climb, so climate stacks in bands up a mountain.', es: 'Sí. El aire se enfría al subir, así que el clima se ordena en franjas en la montaña.', fa: 'بله. هوا با بالا رفتن سرد می‌شود، پس آب و هوا در کوه طبقه به طبقه تغییر می‌کند.' } },
          { t: { en: 'The cool town gets far more rain', es: 'El pueblo fresco recibe mucha más lluvia', fa: 'در شهرک سرد باران خیلی بیشتر می‌بارد' },
            why: { en: 'Rain can change how a day feels, but height is what changes the temperature here.', es: 'La lluvia cambia cómo se siente un día, pero aquí lo que cambia la temperatura es la altura.', fa: 'باران حس روز را تغییر می‌دهد، اما اینجا ارتفاع است که گرمی و سردی را تغییر می‌دهد.' } },
          { t: { en: 'The cool town has more trees for shade', es: 'El pueblo fresco tiene más árboles con sombra', fa: 'شهرک سرد درختان سایه‌دار بیشتر دارد' },
            why: { en: 'Trees give shade, but they cannot cool a whole town that much.', es: 'Los árboles dan sombra, pero no pueden enfriar tanto todo un pueblo.', fa: 'درخت سایه می‌دهد، اما نمی‌تواند یک شهرک کامل را این‌قدر سرد کند.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 4, y: 19, text: { en: 'HEIGHT MARKER · You are at sea level. Climb the road and watch the land change. The air cools about 3.5°F for every 1,000 feet of [[altitude|altitude]].',
      es: 'MARCA DE ALTURA · Estás al nivel del mar. Sube por el camino y mira cómo cambia la tierra. El aire se enfría unos 3.5 °F por cada 1,000 pies de [[altitude|altitud]].',
      fa: 'نشانهٔ ارتفاع · تو در سطح بحر هستی. از سرک بالا برو و ببین زمین چطور تغییر می‌کند. برای هر ۱۰۰۰ فوت [[altitude|ارتفاع]] هوا حدود ۳.۵ درجهٔ فارنهایت سردتر می‌شود.' } },
    { x: 8, y: 3, text: { en: 'TIERRA HELADA · above about 12,000 feet (3,600 m). Only tough grass grows here for llamas and alpacas. Higher still: snow and ice all year.',
      es: 'TIERRA HELADA · más de unos 12,000 pies (3,600 m). Aquí solo crece pasto duro para llamas y alpacas. Más arriba: nieve y hielo todo el año.',
      fa: 'تیرا الادا · بالاتر از حدود ۱۲۰۰۰ فوت (۳۶۰۰ متر). اینجا فقط علف سخت برای لاما و آلپاکا می‌روید. بالاتر: تمام سال برف و یخ.' } }
  ],

  /* the quest: Taita Inti (gold !) -> Wilson the mule driver -> trade with Doña Nelly on the hot coast -> back to Inti */
  quest: {
    stat: 'mov',
    title: { en: 'Bananas for a Birthday', es: 'Bananos para un cumpleaños', fa: 'کیله برای روز تولد' },
    giver: {
      x: 29, y: 6,
      name: { en: 'Taita Inti', es: 'Taita Inti', fa: 'تایتا اینتی' },
      role: { en: 'Wool weaver', es: 'Tejedor de lana', fa: 'بافندهٔ پشم' },
      look: { skin: 3, hair: '#3a3a3a', shirt: '#7a3a8a', pants: '#22324f', robe: true, hat: '#3a2a1a' },
      lines: [
        { en: 'Alli puncha, friend! Tomorrow is my granddaughter\'s birthday. She loves bananas more than anything.',
          es: '¡Alli puncha, amigo! Mañana es el cumpleaños de mi nieta. A ella le encantan los bananos más que nada.',
          fa: 'اَلی پونچا، دوست من! فردا روز تولد نواسه‌ام است. او کیله را از همه چیز بیشتر دوست دارد.' },
        { en: 'But bananas cannot grow up here. It is far too cold. Wilson takes his mule up and down the mountain road. Please ask him what to do.',
          es: 'Pero los bananos no crecen aquí arriba. Hace demasiado frío. Wilson sube y baja el camino de la montaña con su mula. Por favor, pregúntale qué hacer.',
          fa: 'اما کیله اینجا بالا نمی‌روید. اینجا خیلی سرد است. ویلسون با قاطرش در سرک کوه بالا و پایین می‌رود. لطفاً از او بپرس چه کنم.' }
      ],
      wait: { en: 'Wilson rests with his mule by the coffee farms, on the west side of the mountain.',
        es: 'Wilson descansa con su mula junto a los cafetales, en el lado oeste de la montaña.',
        fa: 'ویلسون با قاطرش کنار فارم‌های قهوه، در طرف غرب کوه، استراحت می‌کند.' },
      thanks: { en: 'Bananas from the hot coast! Each height grows something different. When we trade, every family eats better. Thank you!',
        es: '¡Bananos de la costa caliente! Cada altura da algo diferente. Cuando intercambiamos, cada familia come mejor. ¡Gracias!',
        fa: 'کیله از ساحل گرم! هر ارتفاع چیز دیگری می‌رویاند. وقتی تجارت می‌کنیم، هر خانواده بهتر می‌خورد. تشکر!' }
    },
    contact: {
      x: 5, y: 10,
      name: { en: 'Wilson', es: 'Wilson', fa: 'ویلسون' },
      role: { en: 'Mule driver', es: 'Arriero', fa: 'قاطربان' },
      look: { skin: 1, hair: '#4a2c1a', shirt: '#3fa34d', pants: '#5a4630', hat: '#d8c8a0' },
      lines: [
        { en: 'Every height on this mountain grows something different. Up high there are potatoes and wool. Down on the coast there are bananas and sugarcane. So people trade up and down the road.',
          es: 'Cada altura de esta montaña da algo diferente. Arriba hay papas y lana. Abajo, en la costa, hay bananos y caña de azúcar. Por eso la gente intercambia cosas subiendo y bajando el camino.',
          fa: 'هر ارتفاع این کوه چیز دیگری می‌رویاند. بالا کچالو و پشم است. پایین در ساحل کیله و نیشکر است. پس مردم در سرک کوه بالا و پایین تجارت می‌کنند.' },
        { en: 'Go down to the beach in the [[tierra caliente|tierra caliente]]. Doña Nelly sells fruit on the east side of the beach. Offer her something the hot coast cannot grow.',
          es: 'Baja a la playa, en la [[tierra caliente|tierra caliente]]. Doña Nelly vende fruta en el lado este de la playa. Ofrécele algo que no crece en la costa caliente.',
          fa: 'پایین به ساحل در [[tierra caliente|تیرا کالینته]] برو. دونیا نِلی در طرف شرق ساحل میوه می‌فروشد. چیزی به او پیشنهاد کن که در ساحل گرم نمی‌روید.' }
      ]
    },
    action: {
      type: 'trade',
      trader: {
        x: 24, y: 20,
        name: { en: 'Doña Nelly', es: 'Doña Nelly', fa: 'دونیا نِلی' },
        role: { en: 'Fruit seller', es: 'Vendedora de fruta', fa: 'میوه‌فروش' },
        look: { skin: 4, hair: '#120c08', shirt: '#e05a7a', pants: '#f2c14e', style: 'bun' },
        lines: [
          { en: 'Bananas! Sweet bananas from the [[tierra caliente|tierra caliente]]! I have more bananas than I can sell.',
            es: '¡Bananos! ¡Bananos dulces de la [[tierra caliente|tierra caliente]]! Tengo más bananos de los que puedo vender.',
            fa: 'کیله! کیلهٔ شیرین از [[tierra caliente|تیرا کالینته]]! من بیشتر از آنچه بتوانم بفروشم کیله دارم.' }
        ]
      },
      q: { en: 'You want a bunch of bananas? What will you trade me for it?', es: '¿Quieres un racimo de bananos? ¿Qué me das a cambio?', fa: 'یک خوشه کیله می‌خواهی؟ در بدل آن به من چه می‌دهی؟' },
      choices: [
        { ok: true, t: { en: 'A sack of potatoes from the cold land', es: 'Un saco de papas de la tierra fría', fa: 'یک بوجی کچالو از زمین سرد' },
          why: { en: 'Yes! Potatoes like the cold, so they do not grow well on the hot coast. Nelly has none, so she wants them.', es: '¡Sí! A la papa le gusta el frío, así que no crece bien en la costa caliente. Nelly no tiene, así que las quiere.', fa: 'بله! کچالو سرما را دوست دارد، پس در ساحل گرم خوب نمی‌روید. نلی کچالو ندارد، پس آن را می‌خواهد.' } },
        { t: { en: 'A bundle of sugarcane', es: 'Un atado de caña de azúcar', fa: 'یک بسته نیشکر' },
          why: { en: 'Sugarcane grows all around Nelly on the hot coast. She already has plenty.', es: 'La caña crece por todas partes en la costa caliente. Nelly ya tiene mucha.', fa: 'نیشکر در همه جای ساحل گرم، اطراف نلی، می‌روید. او خودش زیاد دارد.' } },
        { t: { en: 'A bunch of ripe bananas', es: 'Un racimo de bananos maduros', fa: 'یک خوشه کیلهٔ پخته' },
          why: { en: 'Nelly sells bananas! Trading bananas for bananas makes no sense.', es: '¡Nelly vende bananos! Cambiar bananos por bananos no tiene sentido.', fa: 'نلی کیله می‌فروشد! کیله در بدل کیله معنا ندارد.' } }
      ],
      item: { icon: '🍌', name: { en: 'A bunch of bananas', es: 'Un racimo de bananos', fa: 'یک خوشه کیله' } }
    }
  },

  scraps: [[2, 2], [30, 19], [30, 11]],
  smudges: [[24, 15], [20, 6]],

  challenge: {
    at: [11, 10],
    type: 'sort',
    style: 'bands',
    stat: 'hei',
    title: { en: 'What grows at each height?', es: '¿Qué crece en cada altura?', fa: 'در هر ارتفاع چه می‌روید؟' },
    intro: { en: 'The Smudge planted every crop at the wrong height! Put each card in the right zone, from the frozen top down to the hot coast.',
      es: '¡El Borrón sembró cada cultivo a la altura equivocada! Pon cada tarjeta en la zona correcta, desde la cima helada hasta la costa caliente.',
      fa: 'لکه هر حاصل را در ارتفاع غلط کاشت! هر کارت را در منطقهٔ درست بگذار، از بالای یخ‌زده تا ساحل گرم.' },
    bins: [
      { id: 'helada', icon: '❄️', tile: 'n', label: { en: 'Tierra helada · frozen land', es: 'Tierra helada', fa: 'تیرا الادا · زمین یخ‌زده' }, sub: { en: 'above about 12,000 ft (3,600 m)', es: 'más de unos 12,000 pies (3,600 m)', fa: 'بالاتر از حدود ۱۲۰۰۰ فوت (۳۶۰۰ متر)' } },
      { id: 'fria', icon: '🥔', tile: 'v', label: { en: 'Tierra fría · cold land', es: 'Tierra fría', fa: 'تیرا فریا · زمین سرد' }, sub: { en: 'about 6,000–12,000 ft (1,800–3,600 m)', es: 'unos 6,000–12,000 pies (1,800–3,600 m)', fa: 'حدود ۶۰۰۰ تا ۱۲۰۰۰ فوت (۱۸۰۰ تا ۳۶۰۰ متر)' } },
      { id: 'templada', icon: '☕', tile: '3', label: { en: 'Tierra templada · mild land', es: 'Tierra templada', fa: 'تیرا تمپلادا · زمین معتدل' }, sub: { en: 'about 3,000–6,000 ft (900–1,800 m)', es: 'unos 3,000–6,000 pies (900–1,800 m)', fa: 'حدود ۳۰۰۰ تا ۶۰۰۰ فوت (۹۰۰ تا ۱۸۰۰ متر)' } },
      { id: 'caliente', icon: '🍌', tile: 'y', label: { en: 'Tierra caliente · hot land', es: 'Tierra caliente', fa: 'تیرا کالینته · زمین گرم' }, sub: { en: 'sea level to about 3,000 ft (900 m)', es: 'del nivel del mar a unos 3,000 pies (900 m)', fa: 'از سطح بحر تا حدود ۳۰۰۰ فوت (۹۰۰ متر)' } }
    ],
    items: [
      { bin: 'caliente', t: { en: 'Bananas', es: 'Banano', fa: 'کیله' },
        why: { en: 'Bananas need steady heat, so they grow down low in the tierra caliente.', es: 'El banano necesita calor constante, así que crece abajo, en la tierra caliente.', fa: 'کیله به گرمای دایمی ضرورت دارد، پس پایین در تیرا کالینته می‌روید.' } },
      { bin: 'caliente', t: { en: 'Sugarcane', es: 'Caña de azúcar', fa: 'نیشکر' },
        why: { en: 'Sugarcane loves heat and rain. It grows in the hot lowlands.', es: 'A la caña le encanta el calor y la lluvia. Crece en las tierras bajas calientes.', fa: 'نیشکر گرما و باران را دوست دارد. در زمین‌های پست گرم می‌روید.' } },
      { bin: 'templada', t: { en: 'Coffee', es: 'Café', fa: 'قهوه' },
        why: { en: 'Coffee hates frost and steady heat. The mild middle slopes, the tierra templada, are just right.', es: 'Al café no le gusta la helada ni el calor constante. Las laderas del medio, la tierra templada, son perfectas.', fa: 'قهوه نه یخبندان را دوست دارد نه گرمای دایمی را. شیب‌های میانی معتدل، یعنی تیرا تمپلادا، برایش درست است.' } },
      { bin: 'templada', t: { en: 'Corn', es: 'Maíz', fa: 'جواری' },
        why: { en: 'Corn grows well in the mild tierra templada, with warm days and cool nights.', es: 'El maíz crece bien en la tierra templada, con días cálidos y noches frescas.', fa: 'جواری در تیرا تمپلادا با روزهای گرم و شب‌های خنک خوب می‌روید.' } },
      { bin: 'fria', t: { en: 'Potatoes', es: 'Papas', fa: 'کچالو' },
        why: { en: 'Potatoes can take the cold. They grow high up in the tierra fría.', es: 'La papa aguanta el frío. Crece en lo alto, en la tierra fría.', fa: 'کچالو سرما را تحمل می‌کند. بالا در تیرا فریا می‌روید.' } },
      { bin: 'fria', t: { en: 'Wheat', es: 'Trigo', fa: 'گندم' },
        why: { en: 'Wheat grows in cool air, so it belongs in the tierra fría.', es: 'El trigo crece con aire fresco, así que va en la tierra fría.', fa: 'گندم در هوای خنک می‌روید، پس جایش در تیرا فریا است.' } },
      { bin: 'helada', t: { en: 'Llamas and alpacas grazing on tough grass', es: 'Llamas y alpacas comiendo pasto duro', fa: 'لاما و آلپاکا که علف سخت می‌چرند' },
        why: { en: 'Almost no crops grow this high. Only tough grass, so herders graze llamas and alpacas in the tierra helada.', es: 'Casi ningún cultivo crece tan alto. Solo pasto duro, así que los pastores llevan llamas y alpacas a la tierra helada.', fa: 'در این بلندی تقریباً هیچ حاصلی نمی‌روید. فقط علف سخت است، پس چوپانان لاما و آلپاکا را در تیرا الادا می‌چرانند.' } },
      { bin: 'helada', t: { en: 'Snow and ice: nothing grows', es: 'Nieve y hielo: no crece nada', fa: 'برف و یخ: هیچ چیز نمی‌روید' },
        why: { en: 'At the very top it is frozen all year. That is the tierra helada.', es: 'En la cima todo está congelado todo el año. Esa es la tierra helada.', fa: 'در بالاترین جا تمام سال یخ است. این تیرا الادا است.' } }
    ],
    success: { en: 'Every crop is back at the right height. The mountain is green again from the beach to the snow!', es: '¡Cada cultivo volvió a su altura! ¡La montaña está verde otra vez, de la playa a la nieve!', fa: 'هر حاصل دوباره در ارتفاع درست است. کوه از ساحل تا برف دوباره سبز است!' }
  },

  boss: {
    at: [20, 2],
    stat: 'reg',
    need: 3,
    name: { en: 'The Frost Smudge', es: 'El Borrón de Escarcha', fa: 'لکهٔ یخبندان' },
    appear: { en: 'The Frost Smudge is hiding in the snow at the top of the mountain!', es: '¡El Borrón de Escarcha se esconde en la nieve, en la cima de la montaña!', fa: 'لکهٔ یخبندان در برف بالای کوه پنهان است!' },
    taunt: { en: 'Brrr! I will freeze the coffee and cook the potatoes. Nothing will grow in the right place!', es: '¡Brrr! Voy a congelar el café y a cocinar las papas. ¡Nada crecerá en su lugar!', fa: 'بررر! قهوه را یخ می‌زنم و کچالو را می‌پزم. هیچ چیز در جای درست نمی‌روید!' },
    win: { en: 'The frost melts into a cool mountain stream. Atlas page 2.2 floats down into your hands!', es: 'La escarcha se derrite en un arroyo fresco de montaña. ¡La página 2.2 del atlas cae en tus manos!', fa: 'یخبندان آب می‌شود و یک جوی خنک کوهستانی می‌سازد. صفحهٔ ۲.۲ اطلس به دستت می‌افتد!' },
    questions: [
      { q: { en: 'Two towns in Colombia sit the same distance from the equator. One is hot all year. The other needs a jacket at night. What best explains the difference?', es: 'Dos pueblos de Colombia están a la misma distancia del ecuador. Uno es caliente todo el año. En el otro se necesita chaqueta de noche. ¿Qué explica mejor la diferencia?', fa: 'دو شهرک در کلمبیا به یک فاصله از خط استوا هستند. یکی تمام سال گرم است. در دیگری شب‌ها جاکت لازم است. بهترین توضیح چیست؟' },
        choices: [{ en: 'The cooler town sits much higher above sea level', es: 'El pueblo más fresco está mucho más alto sobre el nivel del mar', fa: 'شهرک سردتر خیلی بلندتر از سطح بحر است' }, { en: 'The cooler town gets far more rain', es: 'El pueblo más fresco recibe mucha más lluvia', fa: 'در شهرک سردتر باران خیلی بیشتر می‌بارد' }, { en: 'The cooler town is closer to the Pacific Ocean', es: 'El pueblo más fresco está más cerca del océano Pacífico', fa: 'شهرک سردتر به بحر آرام نزدیک‌تر است' }, { en: 'The cooler town has more trees for shade', es: 'El pueblo más fresco tiene más árboles con sombra', fa: 'شهرک سردتر درختان سایه‌دار بیشتر دارد' }], answer: 0,
        why: { en: 'Air cools as you climb, so climate stacks in bands up a mountainside.', es: 'El aire se enfría al subir, así que el clima se ordena en franjas en la montaña.', fa: 'هوا با بالا رفتن سرد می‌شود، پس آب و هوا در شیب کوه طبقه به طبقه است.' } },
      { q: { en: 'About how much does the air cool for every 1,000 feet you climb?', es: '¿Cuánto se enfría el aire más o menos por cada 1,000 pies que subes?', fa: 'برای هر ۱۰۰۰ فوت بالا رفتن، هوا حدوداً چقدر سرد می‌شود؟' },
        choices: [{ en: 'About 3.5 degrees Fahrenheit', es: 'Unos 3.5 grados Fahrenheit', fa: 'حدود ۳.۵ درجهٔ فارنهایت' }, { en: 'About 0.5 degrees Fahrenheit', es: 'Unos 0.5 grados Fahrenheit', fa: 'حدود ۰.۵ درجهٔ فارنهایت' }, { en: 'About 15 degrees Fahrenheit', es: 'Unos 15 grados Fahrenheit', fa: 'حدود ۱۵ درجهٔ فارنهایت' }, { en: 'About 30 degrees Fahrenheit', es: 'Unos 30 grados Fahrenheit', fa: 'حدود ۳۰ درجهٔ فارنهایت' }], answer: 0,
        why: { en: 'About 3.5°F per 1,000 feet. Climb 5,000 feet and the air can be about 17 degrees cooler.', es: 'Unos 3.5 °F por cada 1,000 pies. Si subes 5,000 pies, el aire puede estar unos 17 grados más frío.', fa: 'حدود ۳.۵ درجه برای هر ۱۰۰۰ فوت. اگر ۵۰۰۰ فوت بالا بروی، هوا می‌تواند حدود ۱۷ درجه سردتر باشد.' } },
      { q: { en: 'Mexico City sits about 2,200 meters above sea level. What do the lessons say about building a city high up?', es: 'Ciudad de México está a unos 2,200 metros sobre el nivel del mar. ¿Qué dicen las lecciones sobre construir una ciudad en lo alto?', fa: 'مکسیکوسیتی حدود ۲۲۰۰ متر از سطح بحر بلندتر است. درس‌ها دربارهٔ ساختن شهر در بلندی چه می‌گویند؟' },
        choices: [{ en: 'The air is cooler up high, so a city near the equator is not too hot', es: 'El aire es más fresco en lo alto, así que una ciudad cerca del ecuador no es tan caliente', fa: 'هوا در بلندی خنک‌تر است، پس شهری نزدیک خط استوا خیلی گرم نیست' }, { en: 'All the mines of the region are on mountain tops', es: 'Todas las minas de la región están en las cimas', fa: 'همهٔ معدن‌های منطقه بالای کوه هستند' }, { en: 'Ships from the coast cannot reach a city in the mountains', es: 'Los barcos de la costa no llegan a una ciudad en las montañas', fa: 'کشتی‌های ساحل به شهر کوهستانی نمی‌رسند' }, { en: 'The flattest land is high in the Andes', es: 'La tierra más plana está en lo alto de los Andes', fa: 'هموارترین زمین بالای اندیز است' }], answer: 0,
        why: { en: 'Cool, dry air up high is easier to live in than the heavy heat of the coast.', es: 'El aire fresco y seco de lo alto es más cómodo que el calor pesado de la costa.', fa: 'زندگی در هوای خنک و خشک بلندی آسان‌تر از گرمای سنگین ساحل است.' } },
      { q: { en: 'Why does coffee grow on mountain slopes instead of in the nearby lowlands?', es: '¿Por qué el café crece en las laderas y no en las tierras bajas cercanas?', fa: 'چرا قهوه روی شیب کوه می‌روید، نه در زمین‌های پست نزدیک؟' },
        choices: [{ en: 'The lowlands are too hot for the plant', es: 'Las tierras bajas son demasiado calientes para la planta', fa: 'زمین‌های پست برای این بوته خیلی گرم است' }, { en: 'No farmers live in the lowlands', es: 'No viven agricultores en las tierras bajas', fa: 'هیچ دهقانی در زمین‌های پست زندگی نمی‌کند' }, { en: 'The lowlands get far too much snow', es: 'En las tierras bajas cae demasiada nieve', fa: 'در زمین‌های پست برف خیلی زیاد می‌بارد' }, { en: 'Coffee can only use mountain soil', es: 'El café solo puede usar tierra de montaña', fa: 'قهوه فقط خاک کوه را به کار می‌برد' }], answer: 0,
        why: { en: 'Coffee does not like steady heat or frost. The cool, wet slopes fit it best.', es: 'Al café no le gusta el calor constante ni la helada. Las laderas frescas y húmedas le quedan mejor.', fa: 'قهوه گرمای دایمی و یخبندان را دوست ندارد. شیب‌های خنک و مرطوب برایش بهترین است.' } },
      { q: { en: 'What is a cash crop?', es: '¿Qué es un cultivo comercial?', fa: 'حاصل نقدی چیست؟' },
        choices: [{ en: 'A crop grown mainly to sell, not to eat at home', es: 'Un cultivo que se siembra sobre todo para vender, no para comer en casa', fa: 'حاصلی که بیشتر برای فروش کاشته می‌شود، نه برای خوردن در خانه' }, { en: 'A crop that only grows on high mountain slopes', es: 'Un cultivo que solo crece en laderas altas', fa: 'حاصلی که فقط روی شیب‌های بلند کوه می‌روید' }, { en: 'A crop a family grows to feed itself', es: 'Un cultivo que una familia siembra para comer', fa: 'حاصلی که یک خانواده برای خوراک خود می‌کارد' }, { en: 'A crop a government pays farmers to plant', es: 'Un cultivo que el gobierno paga para sembrar', fa: 'حاصلی که حکومت پول می‌دهد تا کاشته شود' }], answer: 0,
        why: { en: 'Coffee, bananas and sugar are all cash crops in this region.', es: 'El café, el banano y el azúcar son cultivos comerciales en esta región.', fa: 'قهوه، کیله و شکر همه در این منطقه حاصل نقدی هستند.' } },
      { q: { en: 'Where do the Andes Mountains run?', es: '¿Por dónde pasan los Andes?', fa: 'کوه‌های اندیز از کجا می‌گذرند؟' },
        choices: [{ en: 'Down the west side of South America, about 7,000 km long', es: 'Por el lado oeste de América del Sur, unos 7,000 km de largo', fa: 'در طول غرب امریکای جنوبی، حدود ۷۰۰۰ کیلومتر' }, { en: 'Across the middle of Brazil from east to west', es: 'Por el medio de Brasil, de este a oeste', fa: 'از وسط برازیل، از شرق به غرب' }, { en: 'Along the north coast of the Caribbean islands', es: 'Por la costa norte de las islas del Caribe', fa: 'در ساحل شمالی جزیره‌های کارائیب' }, { en: 'Only through the middle of Mexico', es: 'Solo por el centro de México', fa: 'فقط از وسط مکسیکو' }], answer: 0,
        why: { en: 'The Andes run down the whole west side of South America. Ecuador sits on them.', es: 'Los Andes recorren todo el lado oeste de América del Sur. Ecuador está sobre ellos.', fa: 'اندیز در تمام غرب امریکای جنوبی کشیده شده. اکوادور روی آن است.' } },
      { q: { en: 'What is an isthmus?', es: '¿Qué es un istmo?', fa: 'تنگه (بَرزخ) چیست؟' },
        choices: [{ en: 'A thin strip of land joining two larger pieces of land', es: 'Una franja delgada de tierra que une dos tierras más grandes', fa: 'نوار باریک خشکه که دو خشکهٔ بزرگ‌تر را به هم وصل می‌کند' }, { en: 'A chain of islands between two continents', es: 'Una cadena de islas entre dos continentes', fa: 'رشته‌ای از جزیره‌ها میان دو قاره' }, { en: 'A narrow channel of water joining two seas', es: 'Un canal angosto de agua que une dos mares', fa: 'یک آبراه باریک که دو بحر را وصل می‌کند' }, { en: 'A long mountain range along a coast', es: 'Una cordillera larga junto a una costa', fa: 'یک رشته‌کوه دراز در امتداد ساحل' }], answer: 0,
        why: { en: 'Central America is an isthmus. It joins North America to South America.', es: 'América Central es un istmo. Une América del Norte con América del Sur.', fa: 'امریکای مرکزی یک برزخ است. امریکای شمالی را به امریکای جنوبی وصل می‌کند.' } },
      { q: { en: 'What did the Panama Canal let ships do after 1914?', es: '¿Qué les permitió hacer a los barcos el Canal de Panamá después de 1914?', fa: 'کانال پاناما بعد از ۱۹۱۴ به کشتی‌ها چه امکانی داد؟' },
        choices: [{ en: 'Cross between the Atlantic and Pacific Oceans', es: 'Cruzar entre los océanos Atlántico y Pacífico', fa: 'میان بحر اطلس و بحر آرام بگذرند' }, { en: 'Carry coffee from the highlands down to the coast', es: 'Llevar café de las tierras altas a la costa', fa: 'قهوه را از کوهستان به ساحل ببرند' }, { en: 'Hide from hurricanes during storm season', es: 'Esconderse de los huracanes en temporada de tormentas', fa: 'در فصل طوفان از طوفان‌ها پنهان شوند' }, { en: 'Carry drinking water into Panama City', es: 'Llevar agua potable a Ciudad de Panamá', fa: 'آب نوشیدنی را به شهر پاناما ببرند' }], answer: 0,
        why: { en: 'Before 1914, ships sailed all the way around South America. The canal saves weeks.', es: 'Antes de 1914, los barcos daban toda la vuelta a América del Sur. El canal ahorra semanas.', fa: 'پیش از ۱۹۱۴ کشتی‌ها دور تمام امریکای جنوبی می‌چرخیدند. کانال هفته‌ها وقت را صرفه‌جویی می‌کند.' } }
    ]
  },

  learned: [
    { en: 'Air cools about 3.5°F for every 1,000 feet of [[altitude|altitude]], so a mountain near the equator has bands of climate from hot to frozen.', es: 'El aire se enfría unos 3.5 °F por cada 1,000 pies de [[altitude|altitud]], así que una montaña cerca del ecuador tiene franjas de clima, de caliente a helado.', fa: 'هوا برای هر ۱۰۰۰ فوت [[altitude|ارتفاع]] حدود ۳.۵ درجهٔ فارنهایت سرد می‌شود، پس کوهی نزدیک خط استوا طبقه‌های آب و هوا از گرم تا یخ‌زده دارد.' },
    { en: 'Bananas and sugarcane grow in the [[tierra caliente|tierra caliente]], coffee in the [[tierra templada|tierra templada]], potatoes and wheat in the [[tierra fria|tierra fría]], and llamas graze in the [[tierra helada|tierra helada]].', es: 'El banano y la caña crecen en la [[tierra caliente|tierra caliente]], el café en la [[tierra templada|tierra templada]], la papa y el trigo en la [[tierra fria|tierra fría]], y las llamas pastan en la [[tierra helada|tierra helada]].', fa: 'کیله و نیشکر در [[tierra caliente|تیرا کالینته]]، قهوه در [[tierra templada|تیرا تمپلادا]]، کچالو و گندم در [[tierra fria|تیرا فریا]] می‌رویند، و لاماها در [[tierra helada|تیرا الادا]] می‌چرند.' },
    { en: 'Height shapes where crops grow and where people build. Quito, Bogotá and Mexico City sit high up, in a cool [[highland climate|highland climate]].', es: 'La altura decide dónde crecen los cultivos y dónde construye la gente. Quito, Bogotá y Ciudad de México están en lo alto, con un [[highland climate|clima de montaña]] fresco.', fa: 'ارتفاع تعیین می‌کند حاصلات کجا بروید و مردم کجا خانه بسازند. کیتو، بوگوتا و مکسیکوسیتی در بلندی هستند، با [[highland climate|آب و هوای کوهستانی]] خنک.' }
  ],
  reflect: {
    q: { en: 'Think of a place you have lived in or visited that is high in the mountains or low by the sea. How did its height change the weather, the food or the way people lived?', es: 'Piensa en un lugar donde viviste o que visitaste que esté alto en las montañas o bajo junto al mar. ¿Cómo cambió su altura el clima, la comida o la forma de vivir de la gente?', fa: 'به جایی فکر کن که در آن زندگی کرده‌ای یا دیده‌ای که در کوه بلند یا پایین کنار بحر است. ارتفاع آن چطور هوا، غذا یا زندگی مردم را تغییر داد؟' },
    starter: { en: 'A place I know that is', es: 'Un lugar que conozco que está', fa: 'جایی که می‌شناسم و' }
  }
};
