/* TIMEWALKER · Episode 2.1 · Ocean Voyages (WHII)
   Lisbon, Portugal, in 1498, on the north bank of the Tagus River where it opens to the Atlantic.
   North: the hill streets, the castle (top right), a mapmaker's corner and an instrument maker's workshop.
   Middle: streets, a market, wheat fields at the city's edge and a small plaza.
   South: the riverside quay (row 14) and four wooden docks (k) out into the Tagus. */
window.EPISODE = {
  id: '2.1',
  realm: 2,
  sol: 'WHII',
  title: { en: 'Ocean Voyages', es: 'Viajes por el océano', fa: 'سفرهای بحری' },
  place: { en: 'Lisbon, 1498', es: 'Lisboa, 1498', fa: 'لیزبون، ۱۴۹۸' },
  intro: [
    { en: 'The Grump hid the sea maps of Lisbon. Sailors forgot how to find their way.',
      es: 'El Gruñón escondió los mapas del mar de Lisboa. Los marineros olvidaron cómo orientarse.',
      fa: 'غرغرو نقشه‌های بحری لیزبون را پنهان کرد. ملاحان فراموش کردند چطور راه را پیدا کنند.' },
    { en: 'Talk to the 3 people here, then fix the time stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del tiempo.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ زمان را درست کن.' }
  ],
  /* cut scenes (fun-pass-4): Lisbon on the world map, 1498 on the timeline */
  scenes: {
    at: [-9.1, 38.7],
    year: 1498,
    start: [
      { en: 'In the 1400s, Portuguese ships sailed farther and farther down Africa\'s coast.',
        es: 'En los años 1400, los barcos portugueses bajaron cada vez más por la costa de África.',
        fa: 'در قرن پانزدهم، کشتی‌های پرتگالی هر بار دورتر در کنار ساحل افریقا رفتند.' },
      { en: 'In 1497, Vasco da Gama left Lisbon to find a sea route to India.',
        es: 'En 1497, Vasco da Gama salió de Lisboa para buscar una ruta por mar a la India.',
        fa: 'در سال ۱۴۹۷، واسکو دا گاما از لیزبون رفت تا راه بحری به هند را پیدا کند.' },
      { en: 'In 1498, his ships sailed around Africa and reached Calicut, India.',
        es: 'En 1498, sus barcos rodearon África y llegaron a Calicut, en la India.',
        fa: 'در سال ۱۴۹۸، کشتی‌هایش دور افریقا گشتند و به کالیکوت در هند رسیدند.' }
    ],
    page: { en: 'Soon, pepper from India was sold in the markets of Lisbon.',
      es: 'Pronto, la pimienta de la India se vendía en los mercados de Lisboa.',
      fa: 'زود، مرچ سیاه هند در بازارهای لیزبون فروخته شد.' },
    guess: {
      q: { en: 'Lisbon sits where a river meets the ocean. Is that good for sailors?', es: 'Lisboa está donde un río llega al océano. ¿Es bueno para los marineros?', fa: 'لیزبون جایی است که دریا به بحر می‌رسد. آیا این برای ملاحان خوب است؟' },
      choices: [
        { t: { en: '⛵ Yes, very good', es: '⛵ Sí, muy bueno', fa: '⛵ بله، خیلی خوب' }, ok: true },
        { t: { en: '🏔️ No, it is bad', es: '🏔️ No, es malo', fa: '🏔️ نه، خوب نیست' } }
      ],
      why: { en: 'The Tagus River opens into the Atlantic, so ships sail out to sea easily.', es: 'El río Tajo se abre al Atlántico, así que los barcos salen al mar con facilidad.', fa: 'دریای تاگوس به بحر اطلس باز می‌شود، پس کشتی‌ها به آسانی به بحر می‌روند.' }
    },
    next: {
      q: { en: 'Next: the Columbian Exchange. Did ships carry plants and animals across the ocean too?', es: 'Ahora: el intercambio colombino. ¿Los barcos también llevaron plantas y animales por el océano?', fa: 'بعدی: مبادلهٔ کلمبی. آیا کشتی‌ها نبات و حیوان را هم از بحر گذراندند؟' },
      choices: [
        { t: { en: '🌽 Yes, many', es: '🌽 Sí, muchos', fa: '🌽 بله، بسیار' }, ok: true },
        { t: { en: '🚫 No, none', es: '🚫 No, ninguno', fa: '🚫 نه، هیچ' } }
      ],
      why: { en: 'After 1492, ships carried corn, horses, wheat and much more between the hemispheres.', es: 'Después de 1492, los barcos llevaron maíz, caballos, trigo y mucho más entre los hemisferios.', fa: 'بعد از ۱۴۹۲، کشتی‌ها جواری، اسپ، گندم و چیزهای بسیار دیگر را میان نیم‌کره‌ها بردند.' }
    }
  },
  /* houses (fun-pass-4): who lives behind each door; walk in and talk */
  houses: [
    { at: [3, 2], name: { en: 'Old Gil', es: 'El viejo Gil', fa: 'گیل پیر' },
      look: { skin: 2, hair: '#e0e0e0', shirt: '#4a5a7a', pants: '#3a2a1a', style: 'short' },
      lines: [
        { en: 'I am an old sailor. In 1488, I sailed with Bartolomeu Dias.', es: 'Soy un marinero viejo. En 1488 navegué con Bartolomeu Dias.', fa: 'من یک ملاح پیر هستم. در سال ۱۴۸۸ با بارتولومیو دیاس سفر کردم.' },
        { en: 'We sailed around the southern tip of Africa. Storms almost sank us!', es: 'Rodeamos la punta sur de África. ¡Las tormentas casi nos hunden!', fa: 'ما دور نوک جنوبی افریقا گشتیم. توفان‌ها نزدیک بود ما را غرق کنند!' },
        { en: 'Before that, in 1482, I helped build the fort at Elmina, in West Africa.', es: 'Antes, en 1482, ayudé a construir el fuerte de Elmina, en África occidental.', fa: 'پیش از آن، در سال ۱۴۸۲، در ساختن قلعهٔ المینا در غرب افریقا کمک کردم.' }
      ] },
    { at: [19, 2], name: { en: 'Leonor', es: 'Leonor', fa: 'لئونور' },
      look: { skin: 1, hair: '#3a2416', shirt: '#2a3a6a', pants: '#4a3a2a', style: 'bun' },
      lines: [
        { en: 'I study the stars. Sailors use star tables to find their way.', es: 'Estudio las estrellas. Los marineros usan tablas de estrellas para orientarse.', fa: 'من ستاره‌ها را مطالعه می‌کنم. ملاحان با جدول ستاره‌ها راه را پیدا می‌کنند.' },
        { en: 'Abraham Zacuto, a Jewish scholar, made the best tables for our sailors.', es: 'Abraham Zacuto, un sabio judío, hizo las mejores tablas para nuestros marineros.', fa: 'ابراهام زاکوتو، یک دانشمند یهودی، بهترین جدول‌ها را برای ملاحان ما ساخت.' },
        { en: 'In 1497, the king forced Jews to change religion or leave. Zacuto left.', es: 'En 1497, el rey obligó a los judíos a cambiar de religión o irse. Zacuto se fue.', fa: 'در سال ۱۴۹۷، پادشاه یهودیان را مجبور کرد دین خود را تغییر دهند یا بروند. زاکوتو رفت.' }
      ] },
    { at: [19, 7], name: { en: 'Maria', es: 'María', fa: 'ماریا' },
      look: { skin: 2, hair: '#2a1a10', shirt: '#7a3a4a', pants: '#3a2a2a', style: 'long' },
      lines: [
        { en: 'My son sailed with Vasco da Gama last July. We have no news yet.', es: 'Mi hijo se fue con Vasco da Gama en julio. Todavía no tenemos noticias.', fa: 'پسرم ماه جولای گذشته با واسکو دا گاما رفت. هنوز هیچ خبری نداریم.' },
        { en: 'Long voyages are hard. Many sailors get sick with [[scurvy|scurvy]].', es: 'Los viajes largos son duros. Muchos marineros se enferman de [[scurvy|escorbuto]].', fa: 'سفرهای دراز سخت است. بسیاری از ملاحان به [[scurvy|مریضی اسکوربوت]] گرفتار می‌شوند.' }
      ] },
    { at: [5, 12], name: { en: 'Rosa the baker', es: 'Rosa la panadera', fa: 'روزا نانوا' },
      look: { skin: 3, hair: '#1a1208', shirt: '#f2f2f2', pants: '#6a4a2a', style: 'bun' },
      lines: [
        { en: 'I bake ship\'s biscuit. It is hard and dry, so it lasts for months.', es: 'Hago galleta de barco. Es dura y seca, así que dura meses.', fa: 'من نان خشک کشتی می‌پزم. سخت و خشک است، پس ماه‌ها خراب نمی‌شود.' },
        { en: 'Ships also carry salted fish, beans and water in big barrels.', es: 'Los barcos también llevan pescado salado, frijoles y agua en barriles grandes.', fa: 'کشتی‌ها ماهی نمک‌سود، لوبیا و آب را هم در بشکه‌های بزرگ می‌برند.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     North (rows 1-3): houses (R/Q over h), the castle walls (W, top right). Row 4: the main street (l).
     Rows 5-13: streets (l), wheat (w) at the city's edge, market stalls (m), houses, a plaza (row 9).
     Row 14: the riverside quay. Rows 15-21: the Tagus River (~ near the quay, = deep) with four docks (k). */
  map: [
    'TTTTTTTTTTTTTTTTWWWWWWWWWWWWWWWW',
    'T.RRR..QQQ..T.....RRR..WWWWWW..W',
    'T.hdh..hhh..TT....hdh..WWWWWW..W',
    'T..............x.......WWWWWW..W',
    'T.lllllllllllllllllllll.......,W',
    'T.l......l.T....l.....l.......TW',
    'T.l.ww...l......l.RRR.l..QQQ...W',
    'T.l.ww...l..mmm.l.hdh.l..hhh...W',
    'T.l......l......l.....l........W',
    'T.l..T...l..x...lllllllllllll..W',
    'T.l......l......l...........l..W',
    'T.l.RRR..l......l.QQQ.......l..W',
    'T.l.hdh..l..mmm.l.hhh...x...l..W',
    'T.l......l......l...........l..W',
    'TllllllllllllllllllllllllllllllW',
    'T~~~~k~~~~~~~k~~~~~~k~~~~~k~~~~W',
    'T~~~~k~~~~~~~k~~~~~~k~~~~~k~~~~W',
    'T====k=======k======k=====k====W',
    'T====k=======k======k=====k====W',
    'T====k=======k======k=====k====W',
    'T==============================W',
    '================================'
  ],
  start: [25, 13],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [18, 13], at: [20, 18], decor: 'shell',
      clue: { en: 'From this note, walk 2 steps east, then 5 steps south, out along the dock.', es: 'Desde esta nota, camina 2 pasos al este y luego 5 pasos al sur, por el muelle.', fa: 'از این یادداشت، ۲ قدم به شرق برو، بعد ۵ قدم به جنوب، روی بندرگاه.' },
      text: { en: 'In West Africa, cowrie shells were used as money. Portuguese ships carried them. Here is one.', es: 'En África occidental, las conchas de cauri se usaban como dinero. Los barcos portugueses las llevaban. Aquí hay una.', fa: 'در غرب افریقا، صدف کوری مثل پول به کار می‌رفت. کشتی‌های پرتگالی آن را می‌بردند. اینجا یکی است.' } },
    { clueAt: [6, 10], at: [7, 7], decor: 'coinold',
      clue: { en: 'From this note, walk 3 steps north, then 1 step east. Look near the wheat.', es: 'Desde esta nota, camina 3 pasos al norte y luego 1 paso al este. Busca cerca del trigo.', fa: 'از این یادداشت، ۳ قدم به شمال برو، بعد ۱ قدم به شرق. نزدیک گندم را ببین.' },
      text: { en: 'Portugal made gold coins called cruzados, from West African gold. Here is an old one.', es: 'Portugal hizo monedas de oro llamadas cruzados, con oro de África occidental. Aquí hay una antigua.', fa: 'پرتگال سکه‌های طلایی به نام کروزادو را از طلای غرب افریقا ساخت. اینجا یک سکهٔ کهنه است.' } }
  ],

  words: {
    spices: { en: 'dried plant parts, like pepper and cinnamon, that give food flavor', es: 'partes secas de plantas, como la pimienta y la canela, que dan sabor a la comida', fa: 'بخش‌های خشک نبات‌ها، مثل مرچ سیاه و دارچین، که به غذا مزه می‌دهند' },
    middleman: { en: 'a trader who buys from one person and sells to another for more', es: 'un comerciante que compra a una persona y vende a otra por más', fa: 'سوداگری که از یک نفر می‌خرد و به نفر دیگر گران‌تر می‌فروشد' },
    caravel: { en: 'a small, fast sailing ship with triangle sails, used by Portugal and Spain', es: 'un barco de vela pequeño y rápido, con velas triangulares, usado por Portugal y España', fa: 'یک کشتی بادبانی کوچک و تیز با بادبان‌های سه‌کنج، که پرتگال و هسپانیه به کار می‌بردند' },
    astrolabe: { en: 'a tool that measures how high the sun or a star is', es: 'una herramienta que mide qué tan alto está el sol o una estrella', fa: 'ابزاری که بلندی آفتاب یا یک ستاره را اندازه می‌گیرد' },
    latitude: { en: 'how far north or south of the equator a place is', es: 'qué tan al norte o al sur del ecuador está un lugar', fa: 'اینکه یک جا چقدر در شمال یا جنوب خط استوا است' },
    scurvy: { en: 'a sickness that comes from eating no fresh fruit or vegetables', es: 'una enfermedad que viene de no comer fruta ni verdura fresca', fa: 'مریضی‌ای که از نخوردن میوه و سبزی تازه پیدا می‌شود' },
    treaty: { en: 'a written agreement between countries', es: 'un acuerdo escrito entre países', fa: 'یک توافق نوشته‌شده میان کشورها' }
  },

  npcs: [
    {
      x: 13, y: 8,
      name: { en: 'Beatriz', es: 'Beatriz', fa: 'بئاتریس' },
      role: { en: 'Spice merchant', es: 'Comerciante de especias', fa: 'سوداگر مصاله' },
      look: { skin: 2, hair: '#3a2416', shirt: '#b8433a', pants: '#3a2a1a', style: 'long' },
      remember: { ep: '1.2', t: { en: 'You have been to Calicut? Then you know where our pepper grows!', es: '¿Estuviste en Calicut? ¡Entonces sabes dónde crece nuestra pimienta!', fa: 'تو در کالیکوت بوده‌ای؟ پس می‌دانی مرچ سیاه ما کجا می‌روید!' } },
      lines: [
        { en: 'Pepper! Cinnamon! Cloves! These [[spices|spices]] come from Asia, very far away.', es: '¡Pimienta! ¡Canela! ¡Clavo! Estas [[spices|especias]] vienen de Asia, muy lejos.', fa: 'مرچ سیاه! دارچین! قلنفر! این [[spices|مصاله‌ها]] از آسیا می‌آیند، از جای بسیار دور.' },
        { en: 'They pass through many traders on the way. Each [[middleman|middleman]] raises the price.', es: 'Pasan por muchos comerciantes en el camino. Cada [[middleman|intermediario]] sube el precio.', fa: 'در راه از دست سوداگران زیادی می‌گذرند. هر [[middleman|دلال]] قیمت را بالا می‌برد.' },
        { en: 'A sea route to India would let Portugal buy spices there directly.', es: 'Una ruta por mar a la India dejaría a Portugal comprar especias allí directamente.', fa: 'یک راه بحری به هند به پرتگال اجازه می‌دهد مصاله را مستقیم از آنجا بخرد.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why did Portugal want a sea route to India?', es: '¿Por qué Portugal quería una ruta por mar a la India?', fa: 'چرا پرتگال یک راه بحری به هند می‌خواست؟' },
        choices: [
          { ok: true, t: { en: 'To buy spices without many middlemen', es: 'Para comprar especias sin muchos intermediarios', fa: 'برای خریدن مصاله بدون دلال‌های زیاد' },
            why: { en: 'Yes! Spices passed through many traders. Buying in India was cheaper, and made Portugal rich.', es: '¡Sí! Las especias pasaban por muchos comerciantes. Comprar en la India era más barato y enriqueció a Portugal.', fa: 'بله! مصاله از دست سوداگران زیادی می‌گذشت. خریدن در هند ارزان‌تر بود و پرتگال را پولدار ساخت.' } },
          { t: { en: 'To find new fields for growing wheat', es: 'Para buscar campos nuevos para el trigo', fa: 'برای پیدا کردن زمین نو برای گندم' },
            why: { en: 'Portugal already grew wheat. The prize it wanted was the spice trade of Asia.', es: 'Portugal ya sembraba trigo. Lo que quería era el comercio de especias de Asia.', fa: 'پرتگال خودش گندم می‌کاشت. چیزی که می‌خواست تجارت مصالهٔ آسیا بود.' } },
          { t: { en: 'To get away from the cold winters', es: 'Para escapar de los inviernos fríos', fa: 'برای فرار از زمستان‌های سرد' },
            why: { en: 'Lisbon\'s winters are mild. Sailors went to India for spices, not for warm weather.', es: 'Los inviernos de Lisboa son suaves. Los marineros iban a la India por especias, no por el clima.', fa: 'زمستان لیزبون ملایم است. ملاحان برای مصاله به هند رفتند، نه برای هوای گرم.' } }
        ]
      }
    },
    {
      x: 11, y: 13,
      name: { en: 'Afonso', es: 'Afonso', fa: 'افونسو' },
      role: { en: 'Shipbuilder', es: 'Constructor de barcos', fa: 'کشتی‌ساز' },
      look: { skin: 3, hair: '#2a1a10', shirt: '#8a6a3a', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'I build [[caravel|caravels]] here by the river. They are small, fast ships.', es: 'Construyo [[caravel|carabelas]] aquí junto al río. Son barcos pequeños y rápidos.', fa: 'من اینجا کنار دریا [[caravel|کاراول]] می‌سازم. کشتی‌های کوچک و تیز هستند.' },
        { en: 'Their triangle sails let us sail even when the wind blows against us.', es: 'Sus velas triangulares nos dejan navegar aun con el viento en contra.', fa: 'بادبان‌های سه‌کنج آن‌ها حتی وقتی باد از روبرو می‌وزد، ما را پیش می‌برند.' },
        { en: 'With caravels, our sailors went farther down Africa\'s coast each year.', es: 'Con las carabelas, nuestros marineros bajaron más por la costa de África cada año.', fa: 'با کاراول، ملاحان ما هر سال دورتر در کنار ساحل افریقا رفتند.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'What helped caravels explore far away?', es: '¿Qué ayudó a las carabelas a explorar lejos?', fa: 'چه چیزی به کاراول‌ها کمک کرد تا جاهای دور را کشف کنند؟' },
        choices: [
          { ok: true, t: { en: 'Triangle sails that could use any wind', es: 'Velas triangulares que usaban cualquier viento', fa: 'بادبان‌های سه‌کنج که از هر باد کار می‌گرفتند' },
            why: { en: 'Right! Triangle sails let caravels sail into the wind, so they could explore and come home.', es: '¡Correcto! Las velas triangulares dejaban navegar contra el viento, para explorar y volver.', fa: 'درست! بادبان سه‌کنج کاراول را در برابر باد هم پیش می‌برد، پس می‌توانست برود و برگردد.' } },
          { t: { en: 'Steam engines that turned paddle wheels', es: 'Motores de vapor que movían ruedas', fa: 'ماشین‌های بخار که چرخ‌ها را می‌گرداندند' },
            why: { en: 'Steam engines came about 300 years later. Caravels used the wind.', es: 'Los motores de vapor llegaron unos 300 años después. Las carabelas usaban el viento.', fa: 'ماشین بخار حدود ۳۰۰ سال بعد آمد. کاراول‌ها از باد کار می‌گرفتند.' } },
          { t: { en: 'Long oars pulled by hundreds of men', es: 'Remos largos movidos por cientos de hombres', fa: 'پاروهای دراز که صدها مرد می‌کشیدند' },
            why: { en: 'Caravels were small and used sails, not oars. Rowers could not cross a whole ocean.', es: 'Las carabelas eran pequeñas y usaban velas, no remos. Los remeros no cruzaban un océano entero.', fa: 'کاراول کوچک بود و بادبان داشت، نه پارو. پاروزن‌ها نمی‌توانستند از یک بحر کامل بگذرند.' } }
        ]
      }
    },
    {
      x: 22, y: 11,
      name: { en: 'Nzuzi', es: 'Nzuzi', fa: 'نزوزی' },
      role: { en: 'Student from Kongo', es: 'Estudiante del Congo', fa: 'شاگردی از کانگو' },
      look: { skin: 5, hair: '#120c08', shirt: '#e0a020', pants: '#2a4a6a', style: 'short' },
      lines: [
        { en: 'Mbote! That means hello. I come from the Kingdom of Kongo, in Central Africa.', es: '¡Mbote! Significa hola. Vengo del Reino del Congo, en África central.', fa: 'مبوته! یعنی سلام. من از پادشاهی کانگو در مرکز افریقا آمده‌ام.' },
        { en: 'Portuguese ships reached Kongo in 1483. Here, people call it a discovery.', es: 'Los barcos portugueses llegaron al Congo en 1483. Aquí lo llaman un descubrimiento.', fa: 'کشتی‌های پرتگالی در سال ۱۴۸۳ به کانگو رسیدند. اینجا آن را کشف می‌گویند.' },
        { en: 'But my people always lived there. We have a king, towns and markets.', es: 'Pero mi pueblo siempre vivió allí. Tenemos un rey, pueblos y mercados.', fa: 'اما مردم من همیشه آنجا زندگی کرده‌اند. ما پادشاه، شهرها و بازارها داریم.' },
        { en: 'Portuguese ships also take Africans away to be enslaved. That is wrong.', es: 'Los barcos portugueses también se llevan a africanos para esclavizarlos. Eso está mal.', fa: 'کشتی‌های پرتگالی افریقایی‌ها را هم می‌برند تا برده بسازند. این کار نادرست است.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Nzuzi says Kongo was not really discovered. Why?', es: 'Nzuzi dice que el Congo no fue descubierto de verdad. ¿Por qué?', fa: 'نزوزی می‌گوید کانگو واقعاً کشف نشد. چرا؟' },
        choices: [
          { ok: true, t: { en: 'People already lived there and knew it', es: 'Ya vivía gente allí que conocía la tierra', fa: 'مردم از قبل آنجا زندگی می‌کردند و آن را می‌شناختند' },
            why: { en: 'Yes. Kongo was a kingdom long before 1483. It was new only to the Portuguese.', es: 'Sí. El Congo era un reino mucho antes de 1483. Solo era nuevo para los portugueses.', fa: 'بله. کانگو مدت‌ها پیش از ۱۴۸۳ یک پادشاهی بود. فقط برای پرتگالی‌ها نو بود.' } },
          { t: { en: 'No ship ever reached the coast of Kongo', es: 'Ningún barco llegó a la costa del Congo', fa: 'هیچ کشتی به ساحل کانگو نرسید' },
            why: { en: 'Portuguese ships did reach Kongo, in 1483. But people already lived there.', es: 'Los barcos portugueses sí llegaron al Congo, en 1483. Pero ya vivía gente allí.', fa: 'کشتی‌های پرتگالی در سال ۱۴۸۳ به کانگو رسیدند. اما مردم از قبل آنجا بودند.' } },
          { t: { en: 'Kongo was an empty land with no towns', es: 'El Congo era tierra vacía sin pueblos', fa: 'کانگو زمین خالی و بدون شهر بود' },
            why: { en: 'Kongo was not empty. It had a king, towns, farms and trade.', es: 'El Congo no estaba vacío. Tenía rey, pueblos, campos y comercio.', fa: 'کانگو خالی نبود. پادشاه، شهرها، کشتزارها و تجارت داشت.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 15, y: 3, text: { en: 'LISBON · 1498 · Ships sail from this river to Africa, India and beyond.', es: 'LISBOA · 1498 · Los barcos salen de este río hacia África, la India y más allá.', fa: 'لیزبون · ۱۴۹۸ · کشتی‌ها از این دریا به افریقا، هند و دورتر می‌روند.' } },
    { x: 12, y: 9, text: { en: '1494 · In a [[treaty|treaty]], Spain and Portugal split the new lands between them.', es: '1494 · En un [[treaty|tratado]], España y Portugal se repartieron las tierras nuevas.', fa: '۱۴۹۴ · هسپانیه و پرتگال در یک [[treaty|معاهده]] سرزمین‌های نو را میان خود تقسیم کردند.' } },
    { x: 24, y: 12, text: { en: 'INDIAN OCEAN · Long before 1498, Arab, Indian, African and Chinese ships sailed there.', es: 'OCÉANO ÍNDICO · Mucho antes de 1498, barcos árabes, indios, africanos y chinos navegaban allí.', fa: 'بحر هند · مدت‌ها پیش از ۱۴۹۸، کشتی‌های عربی، هندی، افریقایی و چینی آنجا سفر می‌کردند.' } }
  ],

  /* the quest: Gonçalo the pilot (gold !) on the west dock -> Ana the mapmaker up the hill (north-west)
     -> Duarte's workshop near the castle (north-east): carry him the tool that finds latitude -> back to Gonçalo */
  quest: {
    stat: 'reg',
    title: { en: 'A Tool for the Pilot', es: 'Una herramienta para el piloto', fa: 'ابزاری برای رهنمای کشتی' },
    giver: {
      x: 5, y: 19,
      name: { en: 'Gonçalo', es: 'Gonçalo', fa: 'گونسالو' },
      role: { en: 'Ship\'s pilot', es: 'Piloto de barco', fa: 'رهنمای کشتی' },
      look: { skin: 2, hair: '#1a1208', shirt: '#2f5f9a', pants: '#3a2a1a', hat: '#6a2a2a' },
      lines: [
        { en: 'Our ship sails for Africa soon. I am the pilot. I guide the ship.', es: 'Nuestro barco sale pronto hacia África. Soy el piloto. Yo guío el barco.', fa: 'کشتی ما زود به افریقا می‌رود. من رهنمای کشتی هستم. کشتی را رهنمایی می‌کنم.' },
        { en: 'Far from land, I must know how far north or south we are.', es: 'Lejos de la tierra, debo saber qué tan al norte o al sur estamos.', fa: 'دور از خشکی، باید بدانم چقدر در شمال یا جنوب هستیم.' },
        { en: 'Ana the mapmaker knows the right tool. She works up the hill.', es: 'Ana, la cartógrafa, conoce la herramienta correcta. Trabaja arriba en la colina.', fa: 'آنا نقشه‌کش ابزار درست را می‌شناسد. او بالای تپه کار می‌کند.' }
      ],
      wait: { en: 'Ana the mapmaker is up the hill, to the north-west.', es: 'Ana, la cartógrafa, está arriba en la colina, al noroeste.', fa: 'آنا نقشه‌کش بالای تپه، در طرف شمال غرب است.' },
      thanks: { en: 'An [[astrolabe|astrolabe]]! Now I can find our [[latitude|latitude]] from the sun. Thank you!', es: '¡Un [[astrolabe|astrolabio]]! Ahora puedo hallar nuestra [[latitude|latitud]] con el sol. ¡Gracias!', fa: 'یک [[astrolabe|اسطرلاب]]! حالا با آفتاب [[latitude|عرض جغرافیایی]] خود را پیدا می‌کنم. تشکر!' }
    },
    contact: {
      x: 7, y: 5,
      name: { en: 'Ana', es: 'Ana', fa: 'آنا' },
      role: { en: 'Mapmaker', es: 'Cartógrafa', fa: 'نقشه‌کش' },
      look: { skin: 1, hair: '#6a3a1a', shirt: '#3a7a5a', pants: '#3a2a2a', style: 'bun' },
      lines: [
        { en: 'I draw sea maps. Each voyage adds more of Africa\'s coast to them.', es: 'Dibujo mapas del mar. Cada viaje les añade más costa de África.', fa: 'من نقشهٔ بحر می‌کشم. هر سفر بخش بیشتری از ساحل افریقا را به آن می‌افزاید.' },
        { en: 'Duarte makes sailors\' tools. Walk east to his workshop, south of the castle.', es: 'Duarte hace herramientas para marineros. Camina al este, a su taller al sur del castillo.', fa: 'دوارته برای ملاحان ابزار می‌سازد. به شرق برو، به کارگاهش در جنوب قلعه.' }
      ]
    },
    action: {
      type: 'trade',
      trader: {
        x: 27, y: 8,
        name: { en: 'Duarte', es: 'Duarte', fa: 'دوارته' },
        role: { en: 'Instrument maker', es: 'Fabricante de instrumentos', fa: 'سازندهٔ ابزار' },
        look: { skin: 3, hair: '#2a2a2a', shirt: '#5a4a7a', pants: '#2a2a2a', style: 'short' },
        lines: [
          { en: 'Welcome to my workshop! I make tools that help sailors find their way.', es: '¡Bienvenido a mi taller! Hago herramientas que ayudan a los marineros a orientarse.', fa: 'به کارگاه من خوش آمدی! ابزارهایی می‌سازم که به ملاحان در پیدا کردن راه کمک می‌کنند.' }
        ]
      },
      q: { en: 'Your pilot must know how far north or south he is. Bring me that tool.', es: 'Tu piloto debe saber qué tan al norte o al sur está. Tráeme esa herramienta.', fa: 'رهنمای تو باید بداند چقدر در شمال یا جنوب است. آن ابزار را پیش من بیاور.' },
      choices: [
        { ok: true, at: [29, 6], icon: '⚙️', t: { en: 'An astrolabe', es: 'Un astrolabio', fa: 'یک اسطرلاب' },
          why: { en: 'Yes! It measures how high the sun or a star is. That tells the latitude.', es: '¡Sí! Mide qué tan alto está el sol o una estrella. Eso da la latitud.', fa: 'بله! بلندی آفتاب یا ستاره را اندازه می‌گیرد. این عرض جغرافیایی را نشان می‌دهد.' } },
        { at: [24, 8], icon: '🧭', t: { en: 'A compass', es: 'Una brújula', fa: 'یک قطب‌نما' },
          why: { en: 'A compass shows which way is north. It cannot tell how far north you are.', es: 'La brújula muestra dónde está el norte. No dice qué tan al norte estás.', fa: 'قطب‌نما نشان می‌دهد شمال کدام طرف است. نمی‌گوید چقدر در شمال هستی.' } },
        { at: [29, 10], icon: '⏳', t: { en: 'An hourglass', es: 'Un reloj de arena', fa: 'یک ساعت ریگی' },
          why: { en: 'An hourglass measures time on the ship. It cannot tell the latitude.', es: 'El reloj de arena mide el tiempo en el barco. No dice la latitud.', fa: 'ساعت ریگی وقت را در کشتی اندازه می‌گیرد. عرض جغرافیایی را نمی‌گوید.' } }
      ],
      item: { icon: '⚙️', name: { en: 'An astrolabe', es: 'Un astrolabio', fa: 'یک اسطرلاب' } }
    }
  },

  scraps: [[30, 1], [1, 13], [26, 19]],
  smudges: [[10, 6], [29, 12]],

  /* the time stone in the world: walk to the 5 stops in the order they happened */
  challenge: {
    at: [14, 11],
    type: 'route',
    stat: 'pla',
    title: { en: 'Put the voyages in order', es: 'Ordena los viajes', fa: 'سفرها را به ترتیب بگذار' },
    intro: { en: 'The Grump mixed up the ship log. Walk to the 5 stops, from the oldest to the newest.',
      es: 'El Gruñón revolvió el diario de a bordo. Camina a las 5 paradas, de la más antigua a la más nueva.',
      fa: 'غرغرو دفتر کشتی را به هم زد. به ۵ ایستگاه برو، از کهنه‌ترین تا نوترین.' },
    items: [
      { icon: '🏰', t: { en: 'Portugal builds a fort at Elmina, West Africa', es: 'Portugal construye un fuerte en Elmina, África occidental', fa: 'پرتگال در المینا، غرب افریقا، قلعه می‌سازد' } },
      { icon: '⛵', t: { en: 'Dias sails around the southern tip of Africa', es: 'Dias rodea la punta sur de África', fa: 'دیاس دور نوک جنوبی افریقا می‌گردد' } },
      { icon: '🏝️', t: { en: 'Columbus reaches the Caribbean islands', es: 'Colón llega a las islas del Caribe', fa: 'کلمبوس به جزیره‌های کارائیب می‌رسد' } },
      { icon: '📜', t: { en: 'Spain and Portugal split the new lands in a treaty', es: 'España y Portugal se reparten las tierras nuevas en un tratado', fa: 'هسپانیه و پرتگال در یک معاهده سرزمین‌های نو را تقسیم می‌کنند' } },
      { icon: '🌶️', t: { en: 'Da Gama reaches Calicut, India', es: 'Da Gama llega a Calicut, en la India', fa: 'دا گاما به کالیکوت، هند، می‌رسد' } }
    ],
    spots: [[3, 6], [29, 2], [12, 10], [26, 12], [13, 19]],
    why: { en: 'Check the years: Elmina 1482, Dias 1488, Columbus 1492, the treaty 1494, Calicut 1498.',
      es: 'Mira los años: Elmina 1482, Dias 1488, Colón 1492, el tratado 1494, Calicut 1498.',
      fa: 'سال‌ها را ببین: المینا ۱۴۸۲، دیاس ۱۴۸۸، کلمبوس ۱۴۹۲، معاهده ۱۴۹۴، کالیکوت ۱۴۹۸.' },
    success: { en: 'The ship log is in order again! Each voyage went a little farther.', es: '¡El diario de a bordo está en orden otra vez! Cada viaje llegó un poco más lejos.', fa: 'دفتر کشتی دوباره به ترتیب شد! هر سفر کمی دورتر رفت.' }
  },

  boss: {
    at: [26, 4],
    stat: 'loc',
    need: 3,
    name: { en: 'The Foggy Grump', es: 'El Gruñón Neblinoso', fa: 'غرغروی مه‌آلود' },
    appear: { en: 'The Foggy Grump is hiding in the fog below the castle!', es: '¡El Gruñón Neblinoso se esconde en la niebla bajo el castillo!', fa: 'غرغروی مه‌آلود در مه پایین قلعه پنهان است!' },
    taunt: { en: 'Who needs maps? The ocean is too big. Stay home!', es: '¿Quién necesita mapas? El océano es demasiado grande. ¡Quédate en casa!', fa: 'کی به نقشه ضرورت دارد؟ بحر خیلی بزرگ است. در خانه بمان!' },
    win: { en: 'The fog lifts over the river. Chronicle page 2.1 floats down into your hands!', es: 'La niebla se va del río. ¡La página 2.1 de la crónica cae en tus manos!', fa: 'مه از روی دریا کنار می‌رود. صفحهٔ ۲.۱ تاریخ‌نامه به دستت می‌افتد!' },
    questions: [
      { q: { en: 'Why did Portugal want a sea route to Asia?', es: '¿Por qué Portugal quería una ruta por mar a Asia?', fa: 'چرا پرتگال یک راه بحری به آسیا می‌خواست؟' },
        choices: [
          { en: 'To buy spices without paying many middlemen', es: 'Para comprar especias sin pagar a muchos intermediarios', fa: 'برای خریدن مصاله بدون پول دادن به دلال‌های زیاد' },
          { en: 'To find a colder place to live in winter', es: 'Para buscar un lugar más frío para el invierno', fa: 'برای پیدا کردن جای سردتر برای زمستان' },
          { en: 'To sell wheat and olives to farmers in China', es: 'Para vender trigo y aceitunas a campesinos de China', fa: 'برای فروختن گندم و زیتون به دهقانان چین' },
          { en: 'To race Spain\'s ships across the Pacific', es: 'Para competir con los barcos de España en el Pacífico', fa: 'برای مسابقه با کشتی‌های هسپانیه در بحر آرام' }],
        answer: 0,
        why: { en: 'Spices passed through many traders on land and sea. A sea route let Portugal buy them directly.', es: 'Las especias pasaban por muchos comerciantes. Una ruta por mar dejaba a Portugal comprarlas directamente.', fa: 'مصاله از دست سوداگران زیادی می‌گذشت. راه بحری به پرتگال اجازه داد آن را مستقیم بخرد.' } },
      { q: { en: 'What did Bartolomeu Dias do in 1488?', es: '¿Qué hizo Bartolomeu Dias en 1488?', fa: 'بارتولومیو دیاس در سال ۱۴۸۸ چه کرد؟' },
        choices: [
          { en: 'Sailed around the southern tip of Africa', es: 'Navegó alrededor de la punta sur de África', fa: 'دور نوک جنوبی افریقا سفر کرد' },
          { en: 'Sailed west and reached the Caribbean', es: 'Navegó al oeste y llegó al Caribe', fa: 'به غرب رفت و به کارائیب رسید' },
          { en: 'Built the first caravel in Lisbon', es: 'Construyó la primera carabela en Lisboa', fa: 'اولین کاراول را در لیزبون ساخت' },
          { en: 'Sailed all the way around the world', es: 'Dio la vuelta completa al mundo', fa: 'دور تمام جهان سفر کرد' }],
        answer: 0,
        why: { en: 'Dias rounded the southern tip of Africa in 1488. That opened the way to the Indian Ocean.', es: 'Dias rodeó la punta sur de África en 1488. Eso abrió el camino al océano Índico.', fa: 'دیاس در سال ۱۴۸۸ دور نوک جنوبی افریقا گشت. این راه بحر هند را باز کرد.' } },
      { q: { en: 'Where did Vasco da Gama\'s ships arrive in 1498?', es: '¿A dónde llegaron los barcos de Vasco da Gama en 1498?', fa: 'کشتی‌های واسکو دا گاما در سال ۱۴۹۸ به کجا رسیدند؟' },
        choices: [
          { en: 'Calicut, India', es: 'Calicut, en la India', fa: 'کالیکوت، هند' },
          { en: 'Seville, Spain', es: 'Sevilla, en España', fa: 'سویل، هسپانیه' },
          { en: 'Beijing, China', es: 'Pekín, en China', fa: 'بیجینگ، چین' },
          { en: 'Cuzco, Peru', es: 'Cuzco, en Perú', fa: 'کوسکو، پیرو' }],
        answer: 0,
        why: { en: 'Da Gama sailed around Africa and reached Calicut, a spice port in India, in 1498.', es: 'Da Gama rodeó África y llegó a Calicut, un puerto de especias de la India, en 1498.', fa: 'دا گاما دور افریقا گشت و در سال ۱۴۹۸ به کالیکوت، بندر مصالهٔ هند، رسید.' } },
      { q: { en: 'What did an astrolabe help sailors find?', es: '¿Qué ayudaba a encontrar el astrolabio?', fa: 'اسطرلاب به ملاحان کمک می‌کرد چه چیزی را پیدا کنند؟' },
        choices: [
          { en: 'How far north or south they were', es: 'Qué tan al norte o al sur estaban', fa: 'اینکه چقدر در شمال یا جنوب بودند' },
          { en: 'How deep the water was below them', es: 'Qué tan profunda era el agua debajo', fa: 'اینکه آب زیر کشتی چقدر عمیق بود' },
          { en: 'How much the spices would cost', es: 'Cuánto costarían las especias', fa: 'اینکه مصاله چقدر قیمت دارد' },
          { en: 'Where the fish were swimming', es: 'Dónde nadaban los peces', fa: 'اینکه ماهی‌ها کجا شنا می‌کنند' }],
        answer: 0,
        why: { en: 'An astrolabe measures the height of the sun or a star. That tells your latitude.', es: 'El astrolabio mide la altura del sol o de una estrella. Eso dice tu latitud.', fa: 'اسطرلاب بلندی آفتاب یا ستاره را اندازه می‌گیرد. این عرض جغرافیایی تو را نشان می‌دهد.' } },
      { q: { en: 'What made caravels good ships for exploring?', es: '¿Qué hacía buenas a las carabelas para explorar?', fa: 'چه چیزی کاراول را برای کشف کردن خوب می‌ساخت؟' },
        choices: [
          { en: 'Triangle sails that could sail into the wind', es: 'Velas triangulares que navegaban contra el viento', fa: 'بادبان سه‌کنج که در برابر باد پیش می‌رفت' },
          { en: 'Huge size, with room for a thousand people', es: 'Un tamaño enorme, con lugar para mil personas', fa: 'اندازهٔ بسیار بزرگ، با جای هزار نفر' },
          { en: 'Engines that burned coal to turn wheels', es: 'Motores que quemaban carbón para mover ruedas', fa: 'ماشین‌هایی که با سوختن ذغال چرخ را می‌گرداندند' },
          { en: 'Metal walls that no storm could break', es: 'Paredes de metal que ninguna tormenta rompía', fa: 'دیوارهای فلزی که هیچ توفان نمی‌شکست' }],
        answer: 0,
        why: { en: 'Caravels were small and fast. Their triangle sails worked even against the wind.', es: 'Las carabelas eran pequeñas y rápidas. Sus velas triangulares servían aun contra el viento.', fa: 'کاراول کوچک و تیز بود. بادبان سه‌کنجش حتی در برابر باد کار می‌کرد.' } },
      { q: { en: 'What did the Treaty of Tordesillas do in 1494?', es: '¿Qué hizo el Tratado de Tordesillas en 1494?', fa: 'معاهدهٔ تردسیاس در سال ۱۴۹۴ چه کرد؟' },
        choices: [
          { en: 'Split new lands between Spain and Portugal', es: 'Repartió las tierras nuevas entre España y Portugal', fa: 'سرزمین‌های نو را میان هسپانیه و پرتگال تقسیم کرد' },
          { en: 'Gave the Americas back to Native peoples', es: 'Devolvió América a los pueblos indígenas', fa: 'امریکا را به مردمان بومی پس داد' },
          { en: 'Ended all trade between Europe and Asia', es: 'Terminó todo el comercio entre Europa y Asia', fa: 'همهٔ تجارت میان اروپا و آسیا را تمام کرد' },
          { en: 'Made Lisbon the capital of Spain', es: 'Hizo de Lisboa la capital de España', fa: 'لیزبون را پایتخت هسپانیه ساخت' }],
        answer: 0,
        why: { en: 'Spain and Portugal drew a line on the map and split the lands. No one asked the people living there.', es: 'España y Portugal trazaron una línea y se repartieron las tierras. Nadie preguntó a quienes vivían allí.', fa: 'هسپانیه و پرتگال روی نقشه خطی کشیدند و زمین‌ها را تقسیم کردند. از مردم آنجا کسی نپرسید.' } },
      { q: { en: 'Who sailed and traded in the Indian Ocean before 1498?', es: '¿Quiénes navegaban y comerciaban en el océano Índico antes de 1498?', fa: 'پیش از ۱۴۹۸ چه کسانی در بحر هند سفر و تجارت می‌کردند؟' },
        choices: [
          { en: 'Arab, Indian, African and Chinese sailors', es: 'Marineros árabes, indios, africanos y chinos', fa: 'ملاحان عربی، هندی، افریقایی و چینی' },
          { en: 'No one, because the ocean was empty', es: 'Nadie, porque el océano estaba vacío', fa: 'هیچ کس، چون بحر خالی بود' },
          { en: 'Only Portuguese sailors from Lisbon', es: 'Solo marineros portugueses de Lisboa', fa: 'فقط ملاحان پرتگالی از لیزبون' },
          { en: 'Only Viking ships from the far north', es: 'Solo barcos vikingos del lejano norte', fa: 'فقط کشتی‌های وایکینگ از شمال دور' }],
        answer: 0,
        why: { en: 'The Indian Ocean had busy trade for centuries. The Portuguese joined a world that already existed.', es: 'El océano Índico tuvo mucho comercio por siglos. Los portugueses se unieron a un mundo que ya existía.', fa: 'بحر هند قرن‌ها تجارت پررونق داشت. پرتگالی‌ها به دنیایی پیوستند که از قبل وجود داشت.' } },
      { q: { en: 'Why is "discover" a tricky word for these voyages?', es: '¿Por qué "descubrir" es una palabra difícil para estos viajes?', fa: 'چرا کلمهٔ «کشف» برای این سفرها مشکل است؟' },
        choices: [
          { en: 'People already lived in those lands', es: 'Ya vivía gente en esas tierras', fa: 'مردم از قبل در آن سرزمین‌ها بودند' },
          { en: 'The ships never left the river', es: 'Los barcos nunca salieron del río', fa: 'کشتی‌ها هرگز از دریا بیرون نرفتند' },
          { en: 'The sailors made up all of their maps', es: 'Los marineros inventaron todos sus mapas', fa: 'ملاحان همهٔ نقشه‌ها را از خود ساختند' },
          { en: 'Nobody wrote down any of the trips', es: 'Nadie escribió nada sobre los viajes', fa: 'هیچ کس چیزی از سفرها ننوشت' }],
        answer: 0,
        why: { en: 'Kongo, India and the Americas were home to millions of people. They were new only to Europeans.', es: 'El Congo, la India y América eran el hogar de millones de personas. Solo eran nuevos para los europeos.', fa: 'کانگو، هند و امریکا خانهٔ میلیون‌ها نفر بود. فقط برای اروپایی‌ها نو بودند.' } }
    ]
  },

  learned: [
    { en: 'Portugal wanted [[spices|spices]] from Asia. Its ships sailed around Africa to reach India in 1498.', es: 'Portugal quería [[spices|especias]] de Asia. Sus barcos rodearon África y llegaron a la India en 1498.', fa: 'پرتگال [[spices|مصاله]] آسیا را می‌خواست. کشتی‌هایش دور افریقا گشتند و در سال ۱۴۹۸ به هند رسیدند.' },
    { en: '[[caravel|Caravels]], [[astrolabe|astrolabes]] and better maps helped sailors go farther and come home.', es: 'Las [[caravel|carabelas]], los [[astrolabe|astrolabios]] y mejores mapas ayudaron a los marineros a ir más lejos y volver.', fa: '[[caravel|کاراول]]، [[astrolabe|اسطرلاب]] و نقشه‌های بهتر به ملاحان کمک کرد دورتر بروند و برگردند.' },
    { en: 'The lands they reached already had people. The voyages also began colonies and the slave trade.', es: 'Las tierras a las que llegaron ya tenían gente. Los viajes también iniciaron colonias y la trata de esclavos.', fa: 'سرزمین‌هایی که به آن رسیدند از قبل مردم داشتند. این سفرها مستعمره‌ها و تجارت برده را هم آغاز کردند.' }
  ],
  reflect: {
    q: { en: 'Think of a long trip you or your family made. What helped you find the way?', es: 'Piensa en un viaje largo que hiciste tú o tu familia. ¿Qué les ayudó a orientarse?', fa: 'به یک سفر دراز فکر کن که تو یا خانواده‌ات کردید. چه چیزی به شما در پیدا کردن راه کمک کرد؟' },
    starter: { en: 'On our trip, we found the way by', es: 'En nuestro viaje, nos orientamos con', fa: 'در سفر ما، راه را به کمک این پیدا کردیم:' }
  }
};
