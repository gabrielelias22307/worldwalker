/* TIMEWALKER · Episode 1.1 · The Renaissance (WHII)
   Florence, Italy, in the year 1500. The first episode a student plays: a gentle walk, kind people, a simple quest.
   North half: the cathedral with its great dome (D), workshops and a silk weaver's house, the market (m).
   Row 10 is the main street. South half: Piazza della Signoria (l, with the sign about David), a baker's house and
   the Palazzo Vecchio (J, the city hall). Rows 16-17: the Arno river, crossed by the Old Bridge (B, the Ponte Vecchio).
   Rows 18-20: the south bank, with gardens on the hill. */
window.EPISODE = {
  id: '1.1',
  realm: 1,
  sol: 'WHII',
  title: { en: 'The Renaissance', es: 'El Renacimiento', fa: 'رنسانس' },
  place: { en: 'Florence, 1500', es: 'Florencia, 1500', fa: 'فلورانس، ۱۵۰۰' },
  intro: [
    { en: 'The Grump blurred the [[renaissance|Renaissance]] page. Florence is forgetting its art and ideas!',
      es: 'El Gruñón borró la página del [[renaissance|Renacimiento]]. ¡Florencia está olvidando su arte y sus ideas!',
      fa: 'غرغرو صفحهٔ [[renaissance|رنسانس]] را تار کرد. فلورانس هنر و اندیشه‌هایش را فراموش می‌کند!' },
    { en: 'Welcome, Timewalker! Talk to the 3 people here, then fix the time stone.',
      es: '¡Bienvenido, Caminante del Tiempo! Habla con las 3 personas de aquí y luego arregla la piedra del tiempo.',
      fa: 'خوش آمدی، زمان‌گرد! با ۳ نفر اینجا گپ بزن، بعد سنگ زمان را درست کن.' }
  ],
  /* cut scenes: Florence on the world map, 1500 on the timeline */
  scenes: {
    at: [11.25, 43.77],
    year: 1500,
    start: [
      { en: 'Around 1500, Florence was a rich city in Italy.',
        es: 'Hacia 1500, Florencia era una ciudad rica de Italia.',
        fa: 'در حدود سال ۱۵۰۰، فلورانس یک شهر ثروتمند در ایتالیا بود.' },
      { en: 'Artists and thinkers there studied old Greek and Roman ideas again.',
        es: 'Sus artistas y pensadores estudiaron otra vez las viejas ideas de Grecia y Roma.',
        fa: 'هنرمندان و اندیشمندان آنجا دوباره اندیشه‌های کهن یونان و روم را خواندند.' },
      { en: 'Historians call this time the Renaissance.',
        es: 'Los historiadores llaman a esta época el Renacimiento.',
        fa: 'تاریخ‌دانان این زمان را رنسانس می‌نامند.' }
    ],
    page: { en: 'Michelangelo\'s statue David is still in Florence, more than 500 years later.',
      es: 'La estatua David de Miguel Ángel sigue en Florencia, más de 500 años después.',
      fa: 'مجسمهٔ داوود از میکل‌آنژ بعد از بیش از ۵۰۰ سال هنوز در فلورانس است.' },
    guess: {
      q: { en: 'Renaissance means "rebirth." What came back to life?', es: 'Renacimiento quiere decir "volver a nacer". ¿Qué volvió a la vida?', fa: 'رنسانس یعنی «دوباره زاده شدن». چه چیزی دوباره زنده شد؟' },
      choices: [
        { t: { en: '📚 Old Greek and Roman ideas', es: '📚 Las viejas ideas griegas y romanas', fa: '📚 اندیشه‌های کهن یونان و روم' }, ok: true },
        { t: { en: '🦖 The dinosaurs', es: '🦖 Los dinosaurios', fa: '🦖 دایناسورها' } }
      ],
      why: { en: 'People read old Greek and Roman books again. Those ideas led to new art and science.', es: 'La gente volvió a leer libros griegos y romanos. Esas ideas trajeron arte y ciencia nuevos.', fa: 'مردم دوباره کتاب‌های کهن یونان و روم را خواندند. این اندیشه‌ها هنر و دانش نو آوردند.' }
    },
    next: {
      q: { en: 'Next: trade around 1500. Did spices from India reach Europe?', es: 'Ahora: el comercio hacia 1500. ¿Las especias de la India llegaban a Europa?', fa: 'بعدی: تجارت در حدود ۱۵۰۰. آیا مصاله‌های هند به اروپا می‌رسید؟' },
      choices: [
        { t: { en: 'Yes, by long trade routes', es: 'Sí, por rutas largas', fa: 'بله، از راه‌های دراز تجارتی' }, ok: true },
        { t: { en: 'No, never', es: 'No, nunca', fa: 'نه، هرگز' } }
      ],
      why: { en: 'Ships and camels carried spices from India to Europe. Next, you visit a port in India.', es: 'Barcos y camellos llevaban especias de la India a Europa. Ahora visitarás un puerto de la India.', fa: 'کشتی‌ها و شترها مصاله را از هند به اروپا می‌بردند. حالا به یک بندر هند می‌روی.' }
    }
  },
  /* houses: who lives behind each door; walk in and talk */
  houses: [
    { at: [5, 2], name: { en: 'Maestro Nico', es: 'Maestro Nico', fa: 'استاد نیکو' },
      look: { skin: 1, hair: '#8a8a8a', shirt: '#7a3a2a', pants: '#3a2a1a', style: 'short' },
      lines: [
        { en: 'Come in! This is my workshop. Young artists learn here.', es: '¡Pasa! Este es mi taller. Aquí aprenden los artistas jóvenes.', fa: 'بیا داخل! این کارگاه من است. هنرمندان جوان اینجا یاد می‌گیرند.' },
        { en: 'Apprentices start at about age 12. First they sweep and grind colors.', es: 'Los aprendices empiezan a los 12 años más o menos. Primero barren y muelen colores.', fa: 'شاگردها در حدود ۱۲ سالگی شروع می‌کنند. اول جارو می‌کنند و رنگ می‌سایند.' }
      ] },
    { at: [22, 2], name: { en: 'Signora Alessandra', es: 'Señora Alessandra', fa: 'خانم الساندرا' },
      look: { skin: 2, hair: '#3a2416', shirt: '#2f6f8f', pants: '#4a2a3a', style: 'bun' },
      lines: [
        { en: 'Welcome! I weave silk cloth. Florence is famous for wool and silk.', es: '¡Bienvenido! Tejo tela de seda. Florencia es famosa por su lana y su seda.', fa: 'خوش آمدی! من تکهٔ ابریشمی می‌بافم. فلورانس به پشم و ابریشم مشهور است.' },
        { en: 'Our cloth is sold in many lands. That money pays for art.', es: 'Nuestra tela se vende en muchas tierras. Ese dinero paga el arte.', fa: 'تکهٔ ما در سرزمین‌های زیادی فروخته می‌شود. آن پول خرج هنر می‌شود.' }
      ] },
    { at: [13, 3], name: { en: 'Fra Paolo', es: 'Fray Paolo', fa: 'برادر پائولو' },
      look: { skin: 2, hair: '#2a1a10', shirt: '#5a4a3a', pants: '#5a4a3a', robe: true, style: 'short' },
      lines: [
        { en: 'Look up! Brunelleschi finished this great dome in 1436.', es: '¡Mira arriba! Brunelleschi terminó esta gran cúpula en 1436.', fa: 'بالا را ببین! برونلسکی این گنبد بزرگ را در سال ۱۴۳۶ تمام کرد.' },
        { en: 'He studied old Roman buildings to learn how to build it.', es: 'Estudió edificios romanos antiguos para aprender a construirla.', fa: 'او ساختمان‌های کهن روم را مطالعه کرد تا ساختن آن را یاد بگیرد.' },
        { en: 'It is still the biggest brick dome in the world.', es: 'Todavía es la cúpula de ladrillo más grande del mundo.', fa: 'هنوز هم بزرگ‌ترین گنبد خشتی پخته در جهان است.' }
      ] },
    { at: [3, 13], name: { en: 'Rosa', es: 'Rosa', fa: 'روزا' },
      look: { skin: 3, hair: '#1a1208', shirt: '#e8dcc0', pants: '#6a3a2a', style: 'long' },
      lines: [
        { en: 'Fresh bread! Have a piece. Not everyone in Florence is rich, you know.', es: '¡Pan fresco! Toma un pedazo. No todos en Florencia son ricos, ¿sabes?', fa: 'نان تازه! یک تکه بگیر. می‌دانی، همه در فلورانس ثروتمند نیستند.' },
        { en: 'Most people work hard all day: bakers, weavers, builders and boatmen.', es: 'La mayoría trabaja duro todo el día: panaderos, tejedores, albañiles y barqueros.', fa: 'بیشتر مردم تمام روز سخت کار می‌کنند: نانواها، بافنده‌ها، بناها و قایق‌ران‌ها.' }
      ] },
    { at: [27, 13], name: { en: 'Captain Guido', es: 'Capitán Guido', fa: 'کپتان گوئیدو' },
      look: { skin: 1, hair: '#4a2a1a', shirt: '#8a2a2a', pants: '#2a2a3a', style: 'short', hat: '#2a2a2a' },
      lines: [
        { en: 'This is the city hall. Florence\'s leaders meet here.', es: 'Este es el palacio de gobierno. Aquí se reúnen los líderes de Florencia.', fa: 'این ساختمان شهرداری است. رهبران فلورانس اینجا جمع می‌شوند.' },
        { en: 'Florence rules itself, like a small country. It is a [[city-state|city-state]].', es: 'Florencia se gobierna sola, como un país pequeño. Es una [[city-state|ciudad-estado]].', fa: 'فلورانس خودش بر خود حکومت می‌کند، مثل یک کشور کوچک. یک [[city-state|دولت‌شهر]] است.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     North (rows 1-9): workshop (R/h), the cathedral (D, door at 13,3), a silk weaver's house (Q/h), the market (m).
     Row 10: the main street. South: the baker (R/h), the piazza (l) with the David sign, the city hall (J).
     Row 15: the north bank path. Rows 16-17: the Arno, Old Bridge at x 12. Rows 18-20: the south bank. */
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT',
    'T,..RRR....DDDDD.....QQQ....,..T',
    'T...hdh...lDDDDDl....hdh...TT..T',
    'T....l....lDDdDDl.....l...TTT..T',
    'T....l....llllllll....l........T',
    'Tx...lllllllllllllllllllll..mm.T',
    'T....l.......l........l.....mm.T',
    'T....l.......l........l........T',
    'T.TT.l..,....l..,.....l...,....T',
    'T....l.......l........l........T',
    'TllllllllllllllllllllllllllllllT',
    'T....l.......l........l........T',
    'T.RRR.......lllllll...l..JJJJ..T',
    'T.hdh.......lllllll...l..JJdJ..T',
    'T...........lllllllx...........T',
    'T::::::::::::::::::::::::::::::T',
    '~~~~~~~~~~~~B~~~~~~~~~~~~~~~~~~~',
    '~~~~~~~~~~~~B~~~~~~~~~~~~~~~~~~~',
    'T::::::::::::::::::::::::::::::T',
    'T.TT...,...TT..,.....,...TT..,.T',
    'T..,.....,.......,......,......T',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT'
  ],
  start: [13, 6],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [24, 6], at: [30, 4], decor: 'coinold',
      clue: { en: 'From this note, walk 6 steps east, then 2 steps north. Look behind the market.', es: 'Desde esta nota, camina 6 pasos al este y luego 2 pasos al norte. Busca detrás del mercado.', fa: 'از این یادداشت، ۶ قدم به شرق برو، بعد ۲ قدم به شمال. پشت بازار را ببین.' },
      text: { en: 'Florence made a gold coin called the florin. Traders all over Europe trusted it.', es: 'Florencia hacía una moneda de oro llamada florín. Los comerciantes de toda Europa confiaban en ella.', fa: 'فلورانس یک سکهٔ طلایی به نام فلورین می‌ساخت. تاجران سراسر اروپا به آن اعتماد داشتند.' } },
    { clueAt: [16, 20], at: [23, 20], decor: 'flower',
      clue: { en: 'From this note, walk 7 steps east along the garden. Look among the flowers.', es: 'Desde esta nota, camina 7 pasos al este por el jardín. Busca entre las flores.', fa: 'از این یادداشت، ۷ قدم در باغ به شرق برو. میان گل‌ها را ببین.' },
      text: { en: 'Florence\'s old Roman name was Florentia. It means "flowering." Here is a flower.', es: 'El viejo nombre romano de Florencia era Florentia. Quiere decir "floreciente". Aquí tienes una flor.', fa: 'نام کهن رومی فلورانس «فلورنتیا» بود. یعنی «شکوفا». این یک گل است.' } }
  ],

  words: {
    renaissance: { en: 'a "rebirth" of art and learning in Europe, from about 1350 to 1600', es: 'un "renacer" del arte y del saber en Europa, de 1350 a 1600 más o menos', fa: '«دوباره زاده شدن» هنر و دانش در اروپا، از حدود ۱۳۵۰ تا ۱۶۰۰' },
    humanism: { en: 'studying old Greek and Roman books, and the power of people to learn and create', es: 'estudiar libros griegos y romanos antiguos, y la capacidad de las personas para aprender y crear', fa: 'خواندن کتاب‌های کهن یونان و روم، و باور به توان انسان برای یاد گرفتن و ساختن' },
    patron: { en: 'a rich person who pays an artist to make art', es: 'una persona rica que paga a un artista para que haga arte', fa: 'شخص ثروتمندی که به هنرمند پول می‌دهد تا هنر بسازد' },
    perspective: { en: 'a way to paint so that some things look near and others look far', es: 'una forma de pintar para que unas cosas se vean cerca y otras lejos', fa: 'روشی در نقاشی که بعضی چیزها نزدیک و بعضی دور دیده شوند' },
    'city-state': { en: 'a city that rules itself and the land around it, like a small country', es: 'una ciudad que se gobierna sola, con la tierra de alrededor, como un país pequeño', fa: 'شهری که بر خود و زمین‌های اطرافش حکومت می‌کند، مثل یک کشور کوچک' },
    'printing press': { en: 'a machine that prints many copies of a page with metal letters', es: 'una máquina que imprime muchas copias de una página con letras de metal', fa: 'ماشینی که با حروف فلزی از یک صفحه نسخه‌های زیاد چاپ می‌کند' }
  },

  npcs: [
    {
      x: 7, y: 8,
      name: { en: 'Lucia', es: 'Lucía', fa: 'لوچیا' },
      role: { en: 'Painter\'s helper', es: 'Ayudante de pintor', fa: 'شاگرد نقاش' },
      look: { skin: 2, hair: '#6a3a1a', shirt: '#d9a02b', pants: '#3a4a6a', style: 'long' },
      lines: [
        { en: 'Hi! I am Lucia. I mix paints in a painter\'s workshop.', es: '¡Hola! Soy Lucía. Mezclo pinturas en el taller de un pintor.', fa: 'سلام! من لوچیا هستم. در کارگاه یک نقاش رنگ مخلوط می‌کنم.' },
        { en: 'Old paintings looked flat. Now we use [[perspective|perspective]] to show near and far.', es: 'Las pinturas viejas se veían planas. Ahora usamos la [[perspective|perspectiva]] para mostrar lo cerca y lo lejos.', fa: 'نقاشی‌های کهنه هموار دیده می‌شدند. حالا با [[perspective|دورنمایی]] نزدیک و دور را نشان می‌دهیم.' },
        { en: 'Artists like Leonardo da Vinci study real bodies, plants and light.', es: 'Artistas como Leonardo da Vinci estudian cuerpos, plantas y luz de verdad.', fa: 'هنرمندانی مثل لئوناردو داوینچی بدن، نبات و روشنی واقعی را مطالعه می‌کنند.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'How did Renaissance paintings change?', es: '¿Cómo cambiaron las pinturas en el Renacimiento?', fa: 'نقاشی‌ها در رنسانس چطور تغییر کردند؟' },
        choices: [
          { ok: true, t: { en: 'They looked more real and deep', es: 'Se veían más reales y profundas', fa: 'واقعی‌تر و عمیق‌تر دیده می‌شدند' },
            why: { en: 'Yes! With perspective, things in the back look far away, like in real life.', es: '¡Sí! Con la perspectiva, las cosas del fondo se ven lejos, como en la vida real.', fa: 'بله! با دورنمایی، چیزهای عقب دور دیده می‌شوند، مثل زندگی واقعی.' } },
          { t: { en: 'They used only gold and no people', es: 'Usaban solo oro y ninguna persona', fa: 'فقط طلا داشتند و هیچ آدمی نداشتند' },
            why: { en: 'Renaissance paintings were full of people. Painters studied real bodies to draw them well.', es: 'Las pinturas del Renacimiento estaban llenas de personas. Los pintores estudiaban cuerpos reales.', fa: 'نقاشی‌های رنسانس پر از آدم بودند. نقاشان بدن واقعی را مطالعه می‌کردند.' } },
          { t: { en: 'They stopped showing any faces', es: 'Dejaron de mostrar caras', fa: 'دیگر هیچ چهره‌ای نشان ندادند' },
            why: { en: 'Faces became more real, not fewer. Painters showed feelings on people\'s faces.', es: 'Las caras se volvieron más reales, no desaparecieron. Los pintores mostraban sentimientos en ellas.', fa: 'چهره‌ها واقعی‌تر شدند، نه کمتر. نقاشان احساس را در چهرهٔ مردم نشان دادند.' } }
        ]
      }
    },
    {
      x: 20, y: 12,
      name: { en: 'Marco', es: 'Marco', fa: 'مارکو' },
      role: { en: 'Bank clerk', es: 'Empleado de banco', fa: 'کارمند بانک' },
      look: { skin: 1, hair: '#2a1a10', shirt: '#2a4a2a', pants: '#3a3a3a', style: 'short', hat: '#5a1a2a' },
      lines: [
        { en: 'Good day! I count coins and keep the books at a bank.', es: '¡Buen día! Cuento monedas y llevo las cuentas en un banco.', fa: 'روز خوش! من در یک بانک سکه می‌شمارم و حساب‌ها را می‌نویسم.' },
        { en: 'Florence grew rich from banking and from trade in wool cloth.', es: 'Florencia se hizo rica con los bancos y con el comercio de tela de lana.', fa: 'فلورانس از بانکداری و تجارت تکهٔ پشمی ثروتمند شد.' },
        { en: 'Rich families, like the Medici, were [[patron|patrons]]. They paid artists to make art.', es: 'Las familias ricas, como los Médici, eran [[patron|mecenas]]. Pagaban a artistas para hacer arte.', fa: 'خانواده‌های ثروتمند، مثل مدیچی، [[patron|حامی]] بودند. به هنرمندان پول می‌دادند تا هنر بسازند.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why could Florence pay for so much art?', es: '¿Por qué Florencia podía pagar tanto arte?', fa: 'چرا فلورانس می‌توانست پول این‌قدر هنر را بدهد؟' },
        choices: [
          { ok: true, t: { en: 'Banks and trade made it rich', es: 'Los bancos y el comercio la hicieron rica', fa: 'بانک‌ها و تجارت آن را ثروتمند کردند' },
            why: { en: 'Yes! Money from banks and cloth trade let patrons pay many artists.', es: '¡Sí! El dinero de los bancos y de la tela dejó que los mecenas pagaran a muchos artistas.', fa: 'بله! پول بانک‌ها و تجارت تکه به حامیان اجازه داد به هنرمندان زیادی پول بدهند.' } },
          { t: { en: 'It found gold in its hills', es: 'Encontró oro en sus cerros', fa: 'در تپه‌هایش طلا پیدا کرد' },
            why: { en: 'Florence had no big gold mines. Its money came from banking and trade.', es: 'Florencia no tenía grandes minas de oro. Su dinero venía de los bancos y el comercio.', fa: 'فلورانس معدن بزرگ طلا نداشت. پولش از بانکداری و تجارت می‌آمد.' } },
          { t: { en: 'Artists there worked for free', es: 'Allí los artistas trabajaban gratis', fa: 'هنرمندان آنجا مفت کار می‌کردند' },
            why: { en: 'Artists were paid for their work. Patrons paid them to paint and build.', es: 'A los artistas les pagaban por su trabajo. Los mecenas les pagaban por pintar y construir.', fa: 'به هنرمندان مزد داده می‌شد. حامیان برای نقاشی و ساختمان به آن‌ها پول می‌دادند.' } }
        ]
      }
    },
    {
      x: 6, y: 19,
      name: { en: 'Demetrios', es: 'Demetrio', fa: 'دیمیتریوس' },
      role: { en: 'Greek teacher', es: 'Maestro de griego', fa: 'معلم یونانی' },
      look: { skin: 2, hair: '#d8d8d8', shirt: '#2a3a6a', pants: '#3a2a1a', robe: true, style: 'short' },
      lines: [
        { en: 'Kalimera! That means good morning in Greek. I teach Greek here.', es: '¡Kalimera! Así se dice buenos días en griego. Aquí enseño griego.', fa: 'کالیمرا! این در یونانی یعنی صبح بخیر. من اینجا یونانی درس می‌دهم.' },
        { en: 'Greek and Arab scholars kept old books safe for hundreds of years.', es: 'Sabios griegos y árabes cuidaron los libros antiguos por cientos de años.', fa: 'دانشمندان یونانی و عرب صدها سال کتاب‌های کهن را حفظ کردند.' },
        { en: 'Now Florence studies them again. We call this [[humanism|humanism]].', es: 'Ahora Florencia los estudia otra vez. A esto lo llamamos [[humanism|humanismo]].', fa: 'حالا فلورانس دوباره آن‌ها را می‌خواند. این را [[humanism|انسان‌گرایی]] می‌گوییم.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Who kept many old Greek books safe for hundreds of years?', es: '¿Quiénes cuidaron muchos libros griegos antiguos por cientos de años?', fa: 'چه کسانی صدها سال کتاب‌های کهن یونانی را حفظ کردند؟' },
        choices: [
          { ok: true, t: { en: 'Greek and Arab scholars', es: 'Sabios griegos y árabes', fa: 'دانشمندان یونانی و عرب' },
            why: { en: 'Yes! Scholars in Constantinople and Baghdad copied and studied them. Then Italy read them.', es: '¡Sí! Sabios de Constantinopla y Bagdad los copiaron y estudiaron. Luego Italia los leyó.', fa: 'بله! دانشمندان قسطنطنیه و بغداد آن‌ها را نقل و مطالعه کردند. بعد ایتالیا آن‌ها را خواند.' } },
          { t: { en: 'Viking sailors in the north', es: 'Marineros vikingos del norte', fa: 'ملاحان وایکینگ در شمال' },
            why: { en: 'Vikings were sailors and traders. Greek and Arab scholars kept the old books.', es: 'Los vikingos eran marineros y comerciantes. Los sabios griegos y árabes cuidaron los libros.', fa: 'وایکینگ‌ها ملاح و تاجر بودند. دانشمندان یونانی و عرب کتاب‌ها را حفظ کردند.' } },
          { t: { en: 'Farmers in the Americas', es: 'Agricultores de América', fa: 'دهقانان قارهٔ امریکا' },
            why: { en: 'In 1500, people in the Americas did not have Greek books. Greek and Arab scholars did.', es: 'En 1500, en América no tenían libros griegos. Los sabios griegos y árabes sí.', fa: 'در سال ۱۵۰۰، مردم امریکا کتاب یونانی نداشتند. دانشمندان یونانی و عرب داشتند.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 1, y: 5, text: { en: 'FLORENCE · 1500 · A rich [[city-state|city-state]] in Italy, famous for art, cloth and banks.', es: 'FLORENCIA · 1500 · Una rica [[city-state|ciudad-estado]] de Italia, famosa por su arte, su tela y sus bancos.', fa: 'فلورانس · ۱۵۰۰ · یک [[city-state|دولت‌شهر]] ثروتمند در ایتالیا، مشهور به هنر، تکه و بانک.' } },
    { x: 19, y: 14, text: { en: 'THE CITY SQUARE · In 1504, Michelangelo\'s statue David will stand here.', es: 'LA PLAZA DE LA CIUDAD · En 1504, la estatua David de Miguel Ángel estará aquí.', fa: 'میدان شهر · در سال ۱۵۰۴، مجسمهٔ داوود از میکل‌آنژ اینجا گذاشته می‌شود.' } }
  ],

  /* the quest (simple, for a first episode): Giulia (gold !) on the north side -> Beppe the boatman on the
     north bank -> walk over the Old Bridge and 7 steps east on the south bank -> back to Giulia */
  quest: {
    stat: 'hei',
    title: { en: 'Giulia\'s Lost Book', es: 'El libro perdido de Giulia', fa: 'کتاب گمشدهٔ جولیا' },
    giver: {
      x: 20, y: 7,
      name: { en: 'Giulia', es: 'Giulia', fa: 'جولیا' },
      role: { en: 'Student', es: 'Estudiante', fa: 'شاگرد مکتب' },
      look: { skin: 3, hair: '#2a1a10', shirt: '#8a4ab0', pants: '#3a3a5a', style: 'long' },
      lines: [
        { en: 'Hello! Welcome to Florence. I am Giulia. I am glad you came!', es: '¡Hola! Bienvenido a Florencia. Soy Giulia. ¡Qué bueno que viniste!', fa: 'سلام! به فلورانس خوش آمدی. من جولیا هستم. خوشحالم که آمدی!' },
        { en: 'I lost my new printed book near the river. Can you help me?', es: 'Perdí mi libro impreso nuevo cerca del río. ¿Me ayudas?', fa: 'کتاب چاپی نوی خود را نزدیک دریا گم کردم. کمکم می‌کنی؟' },
        { en: 'Beppe the boatman works by the river. He sees everything!', es: 'Beppe el barquero trabaja junto al río. ¡Él lo ve todo!', fa: 'بپه قایق‌ران کنار دریا کار می‌کند. او همه چیز را می‌بیند!' }
      ],
      wait: { en: 'Beppe is on the north bank of the river, to the southwest.', es: 'Beppe está en la orilla norte del río, hacia el suroeste.', fa: 'بپه در کنار شمالی دریا است، به طرف جنوب غرب.' },
      thanks: { en: 'My book! Printed books cost less, so more people can read. Thank you!', es: '¡Mi libro! Los libros impresos cuestan menos y más gente puede leer. ¡Gracias!', fa: 'کتابم! کتاب چاپی ارزان‌تر است، پس مردم بیشتری می‌توانند بخوانند. تشکر!' }
    },
    contact: {
      x: 8, y: 14,
      name: { en: 'Beppe', es: 'Beppe', fa: 'بپه' },
      role: { en: 'Boatman', es: 'Barquero', fa: 'قایق‌ران' },
      look: { skin: 3, hair: '#3a2a1a', shirt: '#e8e0d0', pants: '#2a3a5a', hat: '#6a4a2a', style: 'short' },
      lines: [
        { en: 'Hello, friend! Yes, I saw a book fall from the Old Bridge.', es: '¡Hola, amigo! Sí, vi caer un libro desde el Puente Viejo.', fa: 'سلام، دوست! بله، دیدم یک کتاب از پل کهنه افتاد.' },
        { en: 'Cross the Old Bridge to the south bank. Then walk 7 steps east.', es: 'Cruza el Puente Viejo hasta la orilla sur. Luego camina 7 pasos al este.', fa: 'از پل کهنه به کنار جنوبی برو. بعد ۷ قدم به شرق برو.' }
      ]
    },
    action: {
      type: 'find',
      at: [19, 18],
      hint: { en: 'south bank: cross the Old Bridge, then 7 steps east', es: 'orilla sur: cruza el Puente Viejo y camina 7 pasos al este', fa: 'کنار جنوبی: از پل کهنه بگذر، بعد ۷ قدم به شرق' },
      found: { en: 'There it is, on the south bank! A printed book of old Greek stories.', es: '¡Ahí está, en la orilla sur! Un libro impreso de viejas historias griegas.', fa: 'آنجاست، در کنار جنوبی! یک کتاب چاپی از داستان‌های کهن یونانی.' },
      item: { icon: '📕', name: { en: 'Giulia\'s printed book', es: 'El libro impreso de Giulia', fa: 'کتاب چاپی جولیا' } }
    }
  },

  scraps: [[1, 1], [30, 1], [1, 20]],
  smudges: [[24, 9], [5, 20]],

  challenge: {
    at: [28, 19],
    type: 'order',
    stat: 'pla',
    title: { en: 'Fix the timeline', es: 'Arregla la línea del tiempo', fa: 'خط زمان را درست کن' },
    intro: { en: 'The Grump mixed up the timeline! Put the events in order, from oldest to newest.',
      es: '¡El Gruñón revolvió la línea del tiempo! Pon los hechos en orden, del más antiguo al más nuevo.',
      fa: 'غرغرو خط زمان را به هم زد! رویدادها را به ترتیب بگذار، از کهنه‌ترین تا تازه‌ترین.' },
    items: [
      { icon: '🏛️', t: { en: 'Long ago: Greeks and Romans write books and build temples', es: 'Hace mucho: griegos y romanos escriben libros y construyen templos', fa: 'خیلی پیش: یونانی‌ها و رومی‌ها کتاب می‌نویسند و معبد می‌سازند' } },
      { icon: '⛪', t: { en: '1436: Florence finishes the great dome of its cathedral', es: '1436: Florencia termina la gran cúpula de su catedral', fa: '۱۴۳۶: فلورانس گنبد بزرگ کلیسای خود را تمام می‌کند' } },
      { icon: '📖', t: { en: 'About 1450: Gutenberg builds a printing press in Germany', es: 'Hacia 1450: Gutenberg construye una imprenta en Alemania', fa: 'حدود ۱۴۵۰: گوتنبرگ در آلمان ماشین چاپ می‌سازد' } },
      { icon: '🗽', t: { en: '1504: Michelangelo\'s statue David goes up in Florence', es: '1504: ponen la estatua David de Miguel Ángel en Florencia', fa: '۱۵۰۴: مجسمهٔ داوود از میکل‌آنژ در فلورانس گذاشته می‌شود' } },
      { icon: '🎨', t: { en: '1512: Michelangelo finishes painting a chapel ceiling in Rome', es: '1512: Miguel Ángel termina de pintar el techo de una capilla en Roma', fa: '۱۵۱۲: میکل‌آنژ نقاشی سقف یک کلیسای کوچک را در روم تمام می‌کند' } }
    ],
    why: { en: 'First the old Greeks and Romans. Then the dome (1436), printing (1450), David (1504) and the ceiling (1512).',
      es: 'Primero los griegos y romanos. Luego la cúpula (1436), la imprenta (1450), el David (1504) y el techo (1512).',
      fa: 'اول یونانی‌ها و رومی‌های کهن. بعد گنبد (۱۴۳۶)، چاپ (۱۴۵۰)، داوود (۱۵۰۴) و سقف (۱۵۱۲).' },
    success: { en: 'The timeline is right again! Old ideas came back, and new art followed.', es: '¡La línea del tiempo está bien otra vez! Volvieron las ideas antiguas y llegó arte nuevo.', fa: 'خط زمان دوباره درست شد! اندیشه‌های کهن برگشتند و هنر نو پیدا شد.' }
  },

  boss: {
    at: [27, 4],
    stat: 'pla',
    need: 3,
    name: { en: 'The Gray Grump', es: 'El Gruñón Gris', fa: 'غرغروی خاکستری' },
    appear: { en: 'The Gray Grump is hiding in the fog by the market!', es: '¡El Gruñón Gris se esconde en la niebla junto al mercado!', fa: 'غرغروی خاکستری در مه کنار بازار پنهان است!' },
    taunt: { en: 'Art? Books? Boring! I will paint the whole city gray!', es: '¿Arte? ¿Libros? ¡Qué aburrido! ¡Voy a pintar toda la ciudad de gris!', fa: 'هنر؟ کتاب؟ خسته‌کننده! تمام شهر را خاکستری رنگ می‌کنم!' },
    win: { en: 'Color comes back to Florence. Chronicle page 1.1 floats down into your hands!', es: 'El color vuelve a Florencia. ¡La página 1.1 de la crónica cae en tus manos!', fa: 'رنگ به فلورانس برمی‌گردد. صفحهٔ ۱.۱ تاریخ‌نامه به دستت می‌افتد!' },
    questions: [
      { q: { en: 'What does the word Renaissance mean?', es: '¿Qué quiere decir la palabra Renacimiento?', fa: 'کلمهٔ رنسانس چه معنی دارد؟' },
        choices: [
          { en: 'Rebirth', es: 'Volver a nacer', fa: 'دوباره زاده شدن' },
          { en: 'A great war', es: 'Una gran guerra', fa: 'یک جنگ بزرگ' },
          { en: 'A new king', es: 'Un rey nuevo', fa: 'یک پادشاه نو' },
          { en: 'A long trip', es: 'Un viaje largo', fa: 'یک سفر دراز' }],
        answer: 0,
        why: { en: 'Renaissance means rebirth. Old Greek and Roman ideas came back to life.', es: 'Renacimiento quiere decir volver a nacer. Las ideas griegas y romanas volvieron a la vida.', fa: 'رنسانس یعنی دوباره زاده شدن. اندیشه‌های کهن یونان و روم دوباره زنده شدند.' } },
      { q: { en: 'Where did the Renaissance begin?', es: '¿Dónde empezó el Renacimiento?', fa: 'رنسانس از کجا شروع شد؟' },
        choices: [
          { en: 'In Italian city-states', es: 'En las ciudades-estado de Italia', fa: 'در دولت‌شهرهای ایتالیا' },
          { en: 'In the forests of Germany', es: 'En los bosques de Alemania', fa: 'در جنگل‌های آلمان' },
          { en: 'In the villages of Norway', es: 'En las aldeas de Noruega', fa: 'در قریه‌های ناروی' },
          { en: 'In the deserts of Arabia', es: 'En los desiertos de Arabia', fa: 'در صحراهای عربستان' }],
        answer: 0,
        why: { en: 'It began in rich Italian cities like Florence. Later it spread to the rest of Europe.', es: 'Empezó en ciudades ricas de Italia, como Florencia. Después pasó al resto de Europa.', fa: 'در شهرهای ثروتمند ایتالیا مثل فلورانس شروع شد. بعد به باقی اروپا رسید.' } },
      { q: { en: 'What was a patron?', es: '¿Qué era un mecenas?', fa: 'حامی چه کسی بود؟' },
        choices: [
          { en: 'A rich person who paid artists', es: 'Una persona rica que pagaba a artistas', fa: 'شخص ثروتمندی که به هنرمندان پول می‌داد' },
          { en: 'A student who mixed the paints', es: 'Un estudiante que mezclaba pinturas', fa: 'شاگردی که رنگ‌ها را مخلوط می‌کرد' },
          { en: 'A soldier who guarded the city', es: 'Un soldado que cuidaba la ciudad', fa: 'سربازی که از شهر نگهبانی می‌کرد' },
          { en: 'A sailor who brought silk', es: 'Un marinero que traía seda', fa: 'ملاحی که ابریشم می‌آورد' }],
        answer: 0,
        why: { en: 'Patrons, like the Medici family, paid artists to paint, carve and build.', es: 'Los mecenas, como la familia Médici, pagaban a artistas para pintar, tallar y construir.', fa: 'حامیان، مثل خانوادهٔ مدیچی، به هنرمندان برای نقاشی، تراش و ساختمان پول می‌دادند.' } },
      { q: { en: 'What is humanism?', es: '¿Qué es el humanismo?', fa: 'انسان‌گرایی چیست؟' },
        choices: [
          { en: 'Studying old Greek and Roman ideas', es: 'Estudiar las ideas griegas y romanas antiguas', fa: 'خواندن اندیشه‌های کهن یونان و روم' },
          { en: 'Building ships for long ocean trips', es: 'Construir barcos para viajes largos por el mar', fa: 'ساختن کشتی برای سفرهای دراز در بحر' },
          { en: 'Painting only pictures of animals', es: 'Pintar solo cuadros de animales', fa: 'فقط کشیدن تصویر حیوان‌ها' },
          { en: 'Farming with new tools and seeds', es: 'Cultivar con herramientas y semillas nuevas', fa: 'دهقانی با افزار و تخم‌های نو' }],
        answer: 0,
        why: { en: 'Humanists read old Greek and Roman books. They believed people can learn and create great things.', es: 'Los humanistas leían libros griegos y romanos. Creían que las personas pueden aprender y crear grandes cosas.', fa: 'انسان‌گرایان کتاب‌های کهن یونان و روم را می‌خواندند. باور داشتند انسان می‌تواند یاد بگیرد و چیزهای بزرگ بسازد.' } },
      { q: { en: 'How did perspective change paintings?', es: '¿Cómo cambió la perspectiva las pinturas?', fa: 'دورنمایی نقاشی‌ها را چطور تغییر داد؟' },
        choices: [
          { en: 'Things looked near and far', es: 'Las cosas se veían cerca y lejos', fa: 'چیزها نزدیک و دور دیده می‌شدند' },
          { en: 'Paintings became the size of coins', es: 'Las pinturas se volvieron del tamaño de monedas', fa: 'نقاشی‌ها به اندازهٔ سکه شدند' },
          { en: 'Painters used only one color', es: 'Los pintores usaban un solo color', fa: 'نقاشان فقط یک رنگ به کار بردند' },
          { en: 'Paintings had words, not pictures', es: 'Las pinturas tenían palabras, no imágenes', fa: 'نقاشی‌ها کلمه داشتند، نه تصویر' }],
        answer: 0,
        why: { en: 'With perspective, a flat painting seems deep, like a window into real life.', es: 'Con la perspectiva, una pintura plana parece profunda, como una ventana a la vida real.', fa: 'با دورنمایی، یک نقاشی هموار عمیق دیده می‌شود، مثل کلکینی به زندگی واقعی.' } },
      { q: { en: 'What did the printing press do?', es: '¿Qué hizo la imprenta?', fa: 'ماشین چاپ چه کرد؟' },
        choices: [
          { en: 'Made books faster and cheaper', es: 'Hizo libros más rápido y más baratos', fa: 'کتاب‌ها را تیزتر و ارزان‌تر ساخت' },
          { en: 'Made paintings bigger and brighter', es: 'Hizo pinturas más grandes y brillantes', fa: 'نقاشی‌ها را بزرگ‌تر و روشن‌تر ساخت' },
          { en: 'Made ships sail much faster', es: 'Hizo que los barcos navegaran más rápido', fa: 'کشتی‌ها را خیلی تیزتر ساخت' },
          { en: 'Made new coins out of gold', es: 'Hizo monedas nuevas de oro', fa: 'از طلا سکه‌های نو ساخت' }],
        answer: 0,
        why: { en: 'Before, people copied books by hand. Printing made many copies fast, so ideas spread.', es: 'Antes, los libros se copiaban a mano. La imprenta hizo muchas copias rápido y las ideas se esparcieron.', fa: 'پیش از آن، کتاب‌ها با دست نقل می‌شدند. چاپ زود نسخه‌های زیاد ساخت و اندیشه‌ها پخش شدند.' } },
      { q: { en: 'Who made the famous statue David in Florence?', es: '¿Quién hizo la famosa estatua David de Florencia?', fa: 'چه کسی مجسمهٔ مشهور داوود را در فلورانس ساخت؟' },
        choices: [
          { en: 'Michelangelo', es: 'Miguel Ángel', fa: 'میکل‌آنژ' },
          { en: 'Johannes Gutenberg', es: 'Johannes Gutenberg', fa: 'یوهانس گوتنبرگ' },
          { en: 'Vasco da Gama', es: 'Vasco da Gama', fa: 'واسکو دا گاما' },
          { en: 'Marco Polo', es: 'Marco Polo', fa: 'مارکوپولو' }],
        answer: 0,
        why: { en: 'Michelangelo carved David from one huge block of marble. It was finished in 1504.', es: 'Miguel Ángel talló el David en un solo bloque enorme de mármol. Lo terminó en 1504.', fa: 'میکل‌آنژ داوود را از یک تکهٔ بسیار بزرگ مرمر تراشید. در سال ۱۵۰۴ تمام شد.' } },
      { q: { en: 'Florence grew rich from banking and from what else?', es: 'Florencia se hizo rica con los bancos y ¿con qué más?', fa: 'فلورانس از بانکداری و دیگر از چه چیزی ثروتمند شد؟' },
        choices: [
          { en: 'Trade in wool and silk cloth', es: 'El comercio de tela de lana y seda', fa: 'تجارت تکهٔ پشمی و ابریشمی' },
          { en: 'Gold mines under the city', es: 'Minas de oro bajo la ciudad', fa: 'معدن‌های طلا زیر شهر' },
          { en: 'Selling horses to China', es: 'Vender caballos a China', fa: 'فروش اسپ به چین' },
          { en: 'Catching fish in the ocean', es: 'Pescar en el océano', fa: 'گرفتن ماهی در بحر' }],
        answer: 0,
        why: { en: 'Florence made fine wool and silk cloth. It sold the cloth across Europe and beyond.', es: 'Florencia hacía tela fina de lana y seda. La vendía en toda Europa y más allá.', fa: 'فلورانس تکهٔ خوب پشمی و ابریشمی می‌ساخت. آن را در سراسر اروپا و دورتر می‌فروخت.' } }
    ]
  },

  learned: [
    { en: 'The [[renaissance|Renaissance]] was a rebirth of old Greek and Roman ideas. It began in Italy.', es: 'El [[renaissance|Renacimiento]] fue un renacer de las ideas griegas y romanas. Empezó en Italia.', fa: '[[renaissance|رنسانس]] دوباره زنده شدن اندیشه‌های کهن یونان و روم بود. در ایتالیا شروع شد.' },
    { en: 'Rich [[patron|patrons]] paid artists. Painters used [[perspective|perspective]] to make art look real.', es: 'Los [[patron|mecenas]] ricos pagaban a los artistas. Los pintores usaron la [[perspective|perspectiva]] para que el arte se viera real.', fa: '[[patron|حامیان]] ثروتمند به هنرمندان پول می‌دادند. نقاشان با [[perspective|دورنمایی]] هنر را واقعی نشان دادند.' },
    { en: 'The [[printing press|printing press]] made books cheaper, so new ideas spread fast.', es: 'La [[printing press|imprenta]] hizo los libros más baratos, y las ideas nuevas se esparcieron rápido.', fa: '[[printing press|ماشین چاپ]] کتاب‌ها را ارزان‌تر ساخت، پس اندیشه‌های نو زود پخش شدند.' }
  ],
  reflect: {
    q: { en: 'Renaissance people learned from old ideas. What old idea or skill from your family would you keep alive?', es: 'La gente del Renacimiento aprendió de ideas antiguas. ¿Qué idea o habilidad antigua de tu familia mantendrías viva?', fa: 'مردم رنسانس از اندیشه‌های کهن یاد گرفتند. کدام اندیشه یا مهارت کهن خانواده‌ات را زنده نگه می‌داری؟' },
    starter: { en: 'One old skill from my family is', es: 'Una habilidad antigua de mi familia es', fa: 'یک مهارت کهن خانوادهٔ من' }
  }
};
