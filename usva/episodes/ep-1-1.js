/* TRAILWALKER · Episode 1.1 · Jamestown, 1608 (Exploration and Early Settlements)
   The north shore of the James River in Virginia, 1608, one year after the English came.
   West half: a Powhatan town (H over N = yehakin houses) with corn, bean and squash fields, a small tobacco patch
   and a canoe landing on the river. A dirt trade path (row 12) runs east through the forest to the fort.
   East half: James Fort, the triangle fort of 1607: a log palisade (F) with a gate on the river side (23,14)
   and one on the west side (16,12). Inside: houses, the church (J) and the storehouse.
   South: the sandy shore, the ships' dock (k) and the wide James River (~ shallow, = deep). */
window.EPISODE = {
  id: '1.1',
  realm: 1,
  sol: 'VUS',
  title: { en: 'Jamestown and the Powhatan', es: 'Jamestown y los powhatan', fa: 'جیمزتاون و مردم پوهاتن' },
  place: { en: 'Jamestown, 1608', es: 'Jamestown, 1608', fa: 'جیمزتاون، ۱۶۰۸' },
  intro: [
    { en: 'The Grump tore the Jamestown page. People forgot why the English came here.',
      es: 'El Gruñón rompió la página de Jamestown. La gente olvidó por qué vinieron los ingleses.',
      fa: 'غرغرو صفحهٔ جیمزتاون را پاره کرد. مردم فراموش کردند چرا انگلیسی‌ها به اینجا آمدند.' },
    { en: 'Talk to the 3 people here, then fix the journal stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del diario.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ روزنامچه را درست کن.' }
  ],
  /* cut scenes: Jamestown Island on the world map, 1608 on the timeline */
  scenes: {
    at: [-76.78, 37.21],
    year: 1608,
    start: [
      { en: 'In 1607, about 100 English men and boys sailed up the James River.',
        es: 'En 1607, unos 100 hombres y niños ingleses subieron por el río James.',
        fa: 'در سال ۱۶۰۷، حدود ۱۰۰ مرد و پسر انگلیسی با کشتی از دریای جیمز بالا رفتند.' },
      { en: 'They built a fort called Jamestown, on land of the Powhatan people.',
        es: 'Construyeron un fuerte llamado Jamestown, en tierra del pueblo powhatan.',
        fa: 'آن‌ها یک قلعه به نام جیمزتاون ساختند، روی زمین مردم پوهاتن.' },
      { en: 'Jamestown became the first permanent English settlement in North America.',
        es: 'Jamestown fue el primer asentamiento inglés permanente en América del Norte.',
        fa: 'جیمزتاون اولین آبادی دایمی انگلیسی در امریکای شمالی شد.' }
    ],
    page: { en: 'In 1619, Jamestown held the first elected assembly in English America.',
      es: 'En 1619, Jamestown tuvo la primera asamblea elegida de la América inglesa.',
      fa: 'در سال ۱۶۱۹، اولین مجلس انتخابی امریکای انگلیسی در جیمزتاون جمع شد.' },
    guess: {
      q: { en: 'Why did an English company send settlers to Virginia?', es: '¿Por qué una compañía inglesa mandó colonos a Virginia?', fa: 'چرا یک شرکت انگلیسی مهاجران را به ورجینیا فرستاد؟' },
      choices: [
        { t: { en: '💰 To make money', es: '💰 Para ganar dinero', fa: '💰 برای پیدا کردن پول' }, ok: true },
        { t: { en: '🏖️ To rest and play', es: '🏖️ Para descansar y jugar', fa: '🏖️ برای استراحت و بازی' } }
      ],
      why: { en: 'The Virginia Company wanted profit from gold, trade and land. Life there was very hard.', es: 'La Compañía de Virginia quería ganancias del oro, el comercio y la tierra. La vida allí fue muy dura.', fa: 'شرکت ورجینیا از طلا، تجارت و زمین فایده می‌خواست. زندگی آنجا بسیار سخت بود.' }
    },
    next: {
      q: { en: 'Next: the 13 colonies. Which region had rocky soil and lots of fishing?', es: 'Ahora: las 13 colonias. ¿Qué región tenía suelo de piedras y mucha pesca?', fa: 'بعدی: ۱۳ مستعمره. کدام منطقه خاک سنگی و ماهیگیری زیاد داشت؟' },
      choices: [
        { t: { en: 'New England', es: 'Nueva Inglaterra', fa: 'نیو انگلند' }, ok: true },
        { t: { en: 'The Southern colonies', es: 'Las colonias del sur', fa: 'مستعمره‌های جنوبی' } }
      ],
      why: { en: 'New England had rocky soil and fishing. The Southern colonies had big farms called plantations.', es: 'Nueva Inglaterra tenía suelo de piedras y pesca. Las colonias del sur tenían fincas grandes llamadas plantaciones.', fa: 'نیو انگلند خاک سنگی و ماهیگیری داشت. مستعمره‌های جنوبی فارم‌های بزرگ داشتند که پلانتیشن نام داشت.' }
    }
  },
  /* houses: who lives behind each door (2 in the Powhatan town, 3 in the fort) */
  houses: [
    { at: [4, 4], name: { en: 'Grandmother Wanoka', es: 'Abuela Wanoka', fa: 'مادرکلان وانوکا' },
      look: { skin: 4, hair: '#d8d8d8', shirt: '#a8784a', pants: '#6a4a2a', style: 'long' },
      lines: [
        { en: 'Welcome to our house. We call it a yehakin.', es: 'Bienvenido a nuestra casa. La llamamos yehakin.', fa: 'به خانهٔ ما خوش آمدی. ما آن را «یه‌هاکین» می‌گوییم.' },
        { en: 'We bend young trees into a frame and cover it with mats and bark.', es: 'Doblamos árboles jóvenes para hacer el marco y lo cubrimos con esteras y corteza.', fa: 'درختان جوان را خم می‌کنیم و رویش بوریا و پوست درخت می‌پوشانیم.' },
        { en: 'Women plant the corn, beans and squash. Men hunt and fish.', es: 'Las mujeres siembran el maíz, los frijoles y la calabaza. Los hombres cazan y pescan.', fa: 'زنان جواری، لوبیا و کدو می‌کارند. مردان شکار می‌کنند و ماهی می‌گیرند.' }
      ] },
    { at: [5, 12], name: { en: 'Uncle Nawasso', es: 'Tío Nawasso', fa: 'کاکا ناواسو' },
      look: { skin: 5, hair: '#120c08', shirt: '#8a5a3a', pants: '#4a3a2a', style: 'long' },
      lines: [
        { en: 'Wahunsenacah, called Powhatan, leads about 30 nations in [[tsenacomoco|Tsenacomoco]].', es: 'Wahunsenacah, llamado Powhatan, dirige unas 30 naciones en [[tsenacomoco|Tsenacomoco]].', fa: 'واهونسناکا، که او را پوهاتن می‌گویند، حدود ۳۰ قوم را در [[tsenacomoco|سناکوموکو]] رهبری می‌کند.' },
        { en: 'Each town also has its own leader, called a werowance.', es: 'Cada pueblo también tiene su propio líder, llamado werowance.', fa: 'هر قریه هم رهبر خودش را دارد که «ویروانس» نام دارد.' },
        { en: 'Each town sends Powhatan [[tribute|tribute]], like corn and deerskins.', es: 'Cada pueblo le manda a Powhatan [[tribute|tributo]], como maíz y pieles de venado.', fa: 'هر قریه برای پوهاتن [[tribute|باج]] می‌فرستد، مثل جواری و پوست آهو.' }
      ] },
    { at: [23, 9], name: { en: 'Robert', es: 'Robert', fa: 'رابرت' },
      look: { skin: 1, hair: '#6a4a2a', shirt: '#8a7a5a', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'I am a carpenter. I build houses, but I need more help.', es: 'Soy carpintero. Construyo casas, pero necesito más ayuda.', fa: 'من نجار هستم. خانه می‌سازم، اما کمک بیشتر لازم دارم.' },
        { en: 'Many men here are gentlemen. They never did hard work at home.', es: 'Muchos hombres aquí son caballeros. En su tierra nunca hicieron trabajo duro.', fa: 'بسیاری از مردان اینجا اشراف‌زاده هستند. در وطن هرگز کار سخت نکرده‌اند.' },
        { en: 'They dig for gold instead of planting food.', es: 'Buscan oro en vez de sembrar comida.', fa: 'به جای کاشتن غذا، دنبال طلا زمین را می‌کنند.' }
      ] },
    { at: [19, 12], name: { en: 'Samuel', es: 'Samuel', fa: 'ساموئل' },
      look: { skin: 2, hair: '#c08a3a', shirt: '#5a6a8a', pants: '#4a3a2a', style: 'short' },
      lines: [
        { en: 'I came on the ship in 1607. I was only twelve.', es: 'Llegué en el barco en 1607. Solo tenía doce años.', fa: 'من سال ۱۶۰۷ با کشتی آمدم. فقط دوازده سال داشتم.' },
        { en: 'Last summer, many men got sick and died. The river water was bad.', es: 'El verano pasado, muchos hombres enfermaron y murieron. El agua del río era mala.', fa: 'تابستان گذشته، بسیاری از مردان مریض شدند و مردند. آب دریا خراب بود.' },
        { en: 'Now I am learning words in the Powhatan language.', es: 'Ahora estoy aprendiendo palabras del idioma powhatan.', fa: 'حالا کلمه‌های زبان پوهاتن را یاد می‌گیرم.' }
      ] },
    { at: [27, 12], name: { en: 'Edward', es: 'Edward', fa: 'ادوارد' },
      look: { skin: 0, hair: '#3a2416', shirt: '#2a3a5a', pants: '#2a2a2a', hat: '#1a1a1a', style: 'short' },
      lines: [
        { en: 'I keep the storehouse for the Virginia Company of London.', es: 'Cuido el almacén de la Compañía de Virginia de Londres.', fa: 'من گدام شرکت ورجینیای لندن را نگه می‌دارم.' },
        { en: 'It is a [[joint-stock company|joint-stock company]]. Many people bought shares to pay for it.', es: 'Es una [[joint-stock company|sociedad por acciones]]. Mucha gente compró acciones para pagarla.', fa: 'این یک [[joint-stock company|شرکت سهامی]] است. مردم زیادی سهم خریدند تا خرچ آن را بدهند.' },
        { en: 'They hope Virginia will make them rich. So far, it has not.', es: 'Esperan que Virginia los haga ricos. Hasta ahora, no ha pasado.', fa: 'امید دارند ورجینیا آن‌ها را پولدار کند. تا حالا نکرده است.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens. See the note at the top. */
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT',
    'TT..........TT...T.T.......T..TT',
    'T.x...........T...T.......T.TT.T',
    'T..HHH.....T.T..T......F.......T',
    'T..NdN.........T......F.F.....TT',
    'T...........T.....T..F...F...T.T',
    'T.2222.2222...T.....F.....F...TT',
    'T.1111.1111......T.F.......F..TT',
    'T.2222.2222....TT.F...RRR...F..T',
    'T............T...F....hdh....F.T',
    'TT........T....TF.............FT',
    'TT..HHH.....T...F.QQQ.JJJ.RRR.FT',
    'T...NdN..::::::::.hdh.JJJ.hdh.FT',
    'T.T..........T.TF.............FT',
    'T..2222......T..FFFFFFF.FFFFFFFT',
    'TsssssssssssssssssssxssssssssssT',
    'TssssssssssssssssssssssssssssssT',
    'T~~~~kk~~~~~~~~~~~~~~~kk~~~~~~~T',
    'T~~~~~~~~~~~~~~~~~~~~~kk~~~~~~~T',
    'T==============================T',
    'T==============================T',
    'T==============================T'
  ],
  start: [18, 16],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [25, 13], at: [25, 11], decor: 'feather',
      clue: { en: 'From this note, walk 2 steps north. Stand next to the church.', es: 'Desde esta nota, camina 2 pasos al norte. Párate junto a la iglesia.', fa: 'از این یادداشت، ۲ قدم به شمال برو. کنار کلیسا بایست.' },
      text: { en: 'In 1619, the House of Burgesses, the first elected assembly, met in Jamestown\'s church. Here is a feather pen.', es: 'En 1619, la Cámara de los Burgueses, la primera asamblea elegida, se reunió en la iglesia de Jamestown. Aquí hay una pluma para escribir.', fa: 'در سال ۱۶۱۹، مجلس برجس‌ها، اولین مجلس انتخابی، در کلیسای جیمزتاون جمع شد. اینجا یک قلم پَری است.' } },
    { clueAt: [11, 14], at: [6, 14], decor: 'flower',
      clue: { en: 'From this note, walk 5 steps west, into the tobacco field.', es: 'Desde esta nota, camina 5 pasos al oeste, hasta el campo de tabaco.', fa: 'از این یادداشت، ۵ قدم به غرب برو، داخل کشتزار تنباکو.' },
      text: { en: 'In 1612, John Rolfe planted a sweeter tobacco. It became Virginia\'s [[cash crop|cash crop]]. Here is a tobacco flower.', es: 'En 1612, John Rolfe sembró un tabaco más suave. Se volvió el [[cash crop|cultivo comercial]] de Virginia. Aquí hay una flor de tabaco.', fa: 'در سال ۱۶۱۲، جان رالف یک نوع تنباکوی ملایم‌تر کاشت. این [[cash crop|حاصل فروشی]] ورجینیا شد. اینجا یک گل تنباکو است.' } }
  ],

  words: {
    colony: { en: 'a land ruled by a faraway country', es: 'una tierra gobernada por un país lejano', fa: 'سرزمینی که یک کشور دور بر آن حکومت می‌کند' },
    permanent: { en: 'lasting a long time; it stays', es: 'que dura mucho tiempo; se queda', fa: 'چیزی که مدت درازی باقی می‌ماند' },
    'joint-stock company': { en: 'a company where many people buy shares and split the profit', es: 'una compañía donde mucha gente compra acciones y reparte las ganancias', fa: 'شرکتی که مردم زیادی در آن سهم می‌خرند و فایده را تقسیم می‌کنند' },
    tsenacomoco: { en: 'the land of the Powhatan people, about 30 nations in eastern Virginia', es: 'la tierra del pueblo powhatan, unas 30 naciones en el este de Virginia', fa: 'سرزمین مردم پوهاتن، حدود ۳۰ قوم در شرق ورجینیا' },
    tribute: { en: 'goods that a town gives to its ruler', es: 'bienes que un pueblo le da a su gobernante', fa: 'جنسی که یک قریه به حاکم خود می‌دهد' },
    'cash crop': { en: 'a crop grown to sell for money', es: 'un cultivo que se siembra para vender', fa: 'حاصلی که برای فروش و پول کاشته می‌شود' },
    astrolabe: { en: 'a tool that uses the sun or stars to find how far north you are', es: 'una herramienta que usa el sol o las estrellas para saber qué tan al norte estás', fa: 'ابزاری که با آفتاب یا ستاره‌ها نشان می‌دهد چقدر در شمال هستی' },
    caravel: { en: 'a small, fast ship that could sail into the wind', es: 'un barco pequeño y rápido que podía navegar contra el viento', fa: 'یک کشتی کوچک و تیز که می‌توانست مقابل باد حرکت کند' }
  },

  npcs: [
    {
      x: 6, y: 9,
      name: { en: 'Nahasko', es: 'Nahasko', fa: 'ناهاسکو' },
      role: { en: 'Powhatan elder', es: 'Anciano powhatan', fa: 'ریش‌سفید پوهاتن' },
      look: { skin: 4, hair: '#2a2a2a', shirt: '#9a6a3a', pants: '#5a3a1a', style: 'long' },
      lines: [
        { en: 'This is our town. Our people have lived by this river for thousands of years.', es: 'Este es nuestro pueblo. Mi gente vive junto a este río desde hace miles de años.', fa: 'این قریهٔ ماست. مردم ما هزاران سال است کنار این دریا زندگی می‌کنند.' },
        { en: 'Our land is [[tsenacomoco|Tsenacomoco]]. We have our own towns, leaders and laws.', es: 'Nuestra tierra es [[tsenacomoco|Tsenacomoco]]. Tenemos nuestros propios pueblos, líderes y leyes.', fa: 'سرزمین ما [[tsenacomoco|سناکوموکو]] است. قریه‌ها، رهبران و قانون‌های خود را داریم.' },
        { en: 'The English built their fort on our neighbors\' land. They did not ask.', es: 'Los ingleses construyeron su fuerte en la tierra de nuestros vecinos. No pidieron permiso.', fa: 'انگلیسی‌ها قلعهٔ خود را روی زمین همسایه‌های ما ساختند. اجازه نگرفتند.' },
        { en: 'We trade them corn. But they keep wanting more food and more land.', es: 'Les cambiamos maíz. Pero siempre quieren más comida y más tierra.', fa: 'ما به آن‌ها جواری سودا می‌کنیم. اما هر بار غذا و زمین بیشتر می‌خواهند.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'How did many Powhatan people see the English at Jamestown?', es: '¿Cómo veían muchos powhatan a los ingleses de Jamestown?', fa: 'بسیاری از مردم پوهاتن انگلیسی‌های جیمزتاون را چطور می‌دیدند؟' },
        choices: [
          { ok: true, t: { en: 'Strangers who took their land', es: 'Extraños que tomaron su tierra', fa: 'بیگانه‌هایی که زمین‌شان را گرفتند' },
            why: { en: 'Yes. The English built on Powhatan land without asking. Many Powhatan people did not trust them.', es: 'Sí. Los ingleses construyeron en tierra powhatan sin pedir permiso. Muchos powhatan no confiaban en ellos.', fa: 'بله. انگلیسی‌ها بدون اجازه روی زمین پوهاتن ساختند. بسیاری از مردم پوهاتن به آن‌ها اعتماد نداشتند.' } },
          { t: { en: 'Old friends from many years ago', es: 'Viejos amigos de hace muchos años', fa: 'دوستان قدیمی از سال‌های پیش' },
            why: { en: 'No. The English had just arrived in 1607. They were strangers on Powhatan land.', es: 'No. Los ingleses acababan de llegar en 1607. Eran extraños en tierra powhatan.', fa: 'نه. انگلیسی‌ها تازه در سال ۱۶۰۷ آمده بودند. روی زمین پوهاتن بیگانه بودند.' } },
          { t: { en: 'New rulers they had chosen', es: 'Nuevos gobernantes que eligieron', fa: 'حاکمان نوی که خودشان انتخاب کردند' },
            why: { en: 'No. The Powhatan already had their own leader, Wahunsenacah. Nobody chose the English to rule.', es: 'No. Los powhatan ya tenían su propio líder, Wahunsenacah. Nadie eligió a los ingleses para gobernar.', fa: 'نه. مردم پوهاتن رهبر خود، واهونسناکا، را داشتند. هیچ کس انگلیسی‌ها را برای حکومت انتخاب نکرد.' } }
        ]
      }
    },
    {
      x: 24, y: 16,
      name: { en: 'Henry', es: 'Henry', fa: 'هنری' },
      role: { en: 'Sailor', es: 'Marinero', fa: 'ملاح' },
      look: { skin: 3, hair: '#1a1208', shirt: '#e8e0d0', pants: '#2a3a5a', hat: '#8a2a2a', style: 'short' },
      lines: [
        { en: 'I sail ships across the Atlantic. Europeans have explored for over 100 years.', es: 'Navego barcos por el Atlántico. Los europeos exploran desde hace más de 100 años.', fa: 'من کشتی‌ها را از بحر اطلس می‌گذرانم. اروپایی‌ها بیش از ۱۰۰ سال است کشف می‌کنند.' },
        { en: 'New ships like the [[caravel|caravel]] could sail into the wind.', es: 'Barcos nuevos como la [[caravel|carabela]] podían navegar contra el viento.', fa: 'کشتی‌های نو مثل [[caravel|کاراول]] می‌توانستند مقابل باد حرکت کنند.' },
        { en: 'The [[astrolabe|astrolabe]] helps sailors find how far north or south they are.', es: 'El [[astrolabe|astrolabio]] ayuda a los marineros a saber qué tan al norte o al sur están.', fa: '[[astrolabe|اسطرلاب]] به ملاحان کمک می‌کند بدانند چقدر در شمال یا جنوب هستند.' },
        { en: 'Spain, France, the Dutch and England all want land over here.', es: 'España, Francia, los holandeses e Inglaterra quieren tierras aquí.', fa: 'هسپانیه، فرانسه، هالندی‌ها و انگلستان همه اینجا زمین می‌خواهند.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'What helped Europeans sail farther than ever before?', es: '¿Qué ayudó a los europeos a navegar más lejos que nunca?', fa: 'چه چیزی به اروپایی‌ها کمک کرد دورتر از همیشه با کشتی بروند؟' },
        choices: [
          { ok: true, t: { en: 'New tools like the astrolabe', es: 'Herramientas nuevas como el astrolabio', fa: 'ابزارهای نو مثل اسطرلاب' },
            why: { en: 'Yes! The astrolabe and better ships, like the caravel, made long ocean trips possible.', es: '¡Sí! El astrolabio y mejores barcos, como la carabela, hicieron posibles los viajes largos.', fa: 'بله! اسطرلاب و کشتی‌های بهتر، مثل کاراول، سفرهای دراز بحری را ممکن ساختند.' } },
          { t: { en: 'Bigger oars for all the rowers', es: 'Remos más grandes para los remeros', fa: 'پاروهای کلان‌تر برای پاروزنان' },
            why: { en: 'No. Ocean ships used sails, not oars. New ships and tools helped them go far.', es: 'No. Los barcos del océano usaban velas, no remos. Barcos y herramientas nuevas los ayudaron.', fa: 'نه. کشتی‌های بحری بادبان داشتند، نه پارو. کشتی‌ها و ابزارهای نو کمک کردند.' } },
          { t: { en: 'Calm oceans with no storms', es: 'Océanos tranquilos sin tormentas', fa: 'بحرهای آرام بدون طوفان' },
            why: { en: 'The ocean did not change. It still had storms. New ships and tools made the trips possible.', es: 'El océano no cambió. Seguía con tormentas. Los barcos y herramientas nuevas hicieron posibles los viajes.', fa: 'بحر تغییر نکرد. هنوز طوفان داشت. کشتی‌ها و ابزارهای نو سفر را ممکن ساختند.' } }
        ]
      }
    },
    {
      x: 20, y: 9,
      name: { en: 'Nicholas', es: 'Nicholas', fa: 'نیکولاس' },
      role: { en: 'Laborer', es: 'Trabajador', fa: 'کارگر' },
      look: { skin: 1, hair: '#8a5a2a', shirt: '#7a6a4a', pants: '#3a2a1a', hat: '#5a4a3a', style: 'short' },
      lines: [
        { en: 'Welcome to James Fort. We built it in 1607, in the shape of a triangle.', es: 'Bienvenido al Fuerte James. Lo construimos en 1607, en forma de triángulo.', fa: 'به قلعهٔ جیمز خوش آمدی. آن را در سال ۱۶۰۷ به شکل مثلث ساختیم.' },
        { en: 'Life here is hard. We drink salty river water, and many get sick.', es: 'La vida aquí es dura. Tomamos agua salada del río, y muchos se enferman.', fa: 'زندگی اینجا سخت است. آب شور دریا را می‌نوشیم و بسیاری مریض می‌شوند.' },
        { en: 'Hunger and sickness killed more than half of us in the first year.', es: 'El hambre y las enfermedades mataron a más de la mitad de nosotros el primer año.', fa: 'گرسنگی و مریضی در سال اول بیش از نیمی از ما را کشت.' },
        { en: 'Without Powhatan corn, we would all be dead.', es: 'Sin el maíz de los powhatan, todos estaríamos muertos.', fa: 'بدون جواری مردم پوهاتن، همهٔ ما مرده بودیم.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why did so many Jamestown settlers die in the first years?', es: '¿Por qué murieron tantos colonos de Jamestown en los primeros años?', fa: 'چرا این‌قدر زیاد از مهاجران جیمزتاون در سال‌های اول مردند؟' },
        choices: [
          { ok: true, t: { en: 'Bad water, hunger and disease', es: 'Agua mala, hambre y enfermedad', fa: 'آب خراب، گرسنگی و مریضی' },
            why: { en: 'Yes. Salty river water, too little food and sickness killed many settlers.', es: 'Sí. El agua salada del río, la poca comida y las enfermedades mataron a muchos colonos.', fa: 'بله. آب شور دریا، غذای کم و مریضی بسیاری از مهاجران را کشت.' } },
          { t: { en: 'Too much gold to carry home', es: 'Demasiado oro para llevar', fa: 'طلای زیاد برای بردن به خانه' },
            why: { en: 'No. They found no gold at all. Bad water, hunger and disease killed many.', es: 'No. No encontraron nada de oro. El agua mala, el hambre y la enfermedad mataron a muchos.', fa: 'نه. هیچ طلا پیدا نکردند. آب خراب، گرسنگی و مریضی بسیاری را کشت.' } },
          { t: { en: 'Long sea battles with Spanish ships', es: 'Largas batallas con barcos españoles', fa: 'جنگ‌های دراز با کشتی‌های هسپانوی' },
            why: { en: 'No. Spain never attacked Jamestown. Bad water, hunger and disease killed many settlers.', es: 'No. España nunca atacó Jamestown. El agua mala, el hambre y la enfermedad mataron a muchos.', fa: 'نه. هسپانیه هرگز به جیمزتاون حمله نکرد. آب خراب، گرسنگی و مریضی بسیاری را کشت.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 2, y: 2, text: { en: 'A POWHATAN TOWN · 1608 · One of many towns in [[tsenacomoco|Tsenacomoco]], led by Wahunsenacah.', es: 'UN PUEBLO POWHATAN · 1608 · Uno de muchos pueblos de [[tsenacomoco|Tsenacomoco]], dirigido por Wahunsenacah.', fa: 'یک قریهٔ پوهاتن · ۱۶۰۸ · یکی از قریه‌های زیاد [[tsenacomoco|سناکوموکو]]، به رهبری واهونسناکا.' } },
    { x: 20, y: 15, text: { en: 'JAMES FORT · 1608 · The first [[permanent|permanent]] English [[colony|colony]] in North America, started in 1607.', es: 'FUERTE JAMES · 1608 · La primera [[colony|colonia]] inglesa [[permanent|permanente]] en América del Norte, fundada en 1607.', fa: 'قلعهٔ جیمز · ۱۶۰۸ · اولین [[colony|مستعمرهٔ]] [[permanent|دایمی]] انگلیسی در امریکای شمالی، ساخته شده در ۱۶۰۷.' } }
  ],

  /* the quest: Jack (gold !) in the fort -> Wesko the hunter in the forest, north of the trade path
     -> Tapaka in the Powhatan town: carry her a good her people want (copper from the ship) -> back to Jack */
  quest: {
    stat: 'mov',
    title: { en: 'Corn for the Fort', es: 'Maíz para el fuerte', fa: 'جواری برای قلعه' },
    giver: {
      x: 28, y: 13,
      name: { en: 'Jack', es: 'Jack', fa: 'جک' },
      role: { en: 'Hungry settler', es: 'Colono con hambre', fa: 'مهاجر گرسنه' },
      look: { skin: 2, hair: '#4a2a1a', shirt: '#9a8a6a', pants: '#4a3a2a', style: 'short' },
      lines: [
        { en: 'Our storehouse is almost empty, and winter is coming.', es: 'Nuestro almacén está casi vacío, y viene el invierno.', fa: 'گدام ما تقریباً خالی است و زمستان نزدیک است.' },
        { en: 'The Powhatan people grow lots of corn. Maybe they will trade with us.', es: 'Los powhatan siembran mucho maíz. Tal vez quieran cambiar con nosotros.', fa: 'مردم پوهاتن جواری زیاد می‌کارند. شاید با ما سودا کنند.' },
        { en: 'Ask Wesko in the forest, west of the fort. He knows the way.', es: 'Pregúntale a Wesko en el bosque, al oeste del fuerte. Él conoce el camino.', fa: 'از ویسکو در جنگل، غرب قلعه، بپرس. او راه را می‌داند.' }
      ],
      wait: { en: 'Wesko hunts in the forest, west of the fort and north of the path.', es: 'Wesko caza en el bosque, al oeste del fuerte y al norte del camino.', fa: 'ویسکو در جنگل شکار می‌کند، غرب قلعه و شمال راه.' },
      thanks: { en: 'Corn! Now we can eat this winter. Thank the Powhatan farmers for us!', es: '¡Maíz! Ahora podremos comer este invierno. ¡Dales las gracias a los agricultores powhatan!', fa: 'جواری! حالا این زمستان غذا داریم. از دهقانان پوهاتن از طرف ما تشکر کن!' }
    },
    contact: {
      x: 13, y: 7,
      name: { en: 'Wesko', es: 'Wesko', fa: 'ویسکو' },
      role: { en: 'Powhatan hunter', es: 'Cazador powhatan', fa: 'شکارچی پوهاتن' },
      look: { skin: 3, hair: '#120c08', shirt: '#7a5a3a', pants: '#4a3a1a', style: 'long' },
      lines: [
        { en: 'The English are hungry again? Our town keeps corn in big baskets.', es: '¿Los ingleses tienen hambre otra vez? Mi pueblo guarda maíz en canastas grandes.', fa: 'انگلیسی‌ها باز گرسنه هستند؟ قریهٔ ما جواری را در سبدهای بزرگ نگه می‌دارد.' },
        { en: 'Find Tapaka in our town, south-west of here. Bring her a fair trade.', es: 'Busca a Tapaka en nuestro pueblo, al suroeste de aquí. Llévale un buen cambio.', fa: 'تاپاکا را در قریهٔ ما، جنوب غرب اینجا، پیدا کن. برایش یک سودای عادلانه ببر.' }
      ]
    },
    action: {
      type: 'trade',
      trader: {
        x: 7, y: 13,
        name: { en: 'Tapaka', es: 'Tapaka', fa: 'تاپاکا' },
        role: { en: 'Corn farmer', es: 'Agricultora de maíz', fa: 'دهقان جواری' },
        look: { skin: 4, hair: '#120c08', shirt: '#b0703a', pants: '#5a3a2a', style: 'long' },
        lines: [
          { en: 'I grow corn, beans and squash with the other women of our town.', es: 'Siembro maíz, frijoles y calabaza con las otras mujeres del pueblo.', fa: 'من با زنان دیگر قریه جواری، لوبیا و کدو می‌کارم.' }
        ]
      },
      q: { en: 'I will trade a basket of corn. Bring me something my people want and cannot make.', es: 'Cambiaré una canasta de maíz. Tráeme algo que mi gente quiera y no pueda hacer.', fa: 'یک سبد جواری سودا می‌کنم. چیزی بیاور که مردم ما می‌خواهند و خودشان ساخته نمی‌توانند.' },
      choices: [
        { ok: true, at: [23, 18], icon: '🟠', t: { en: 'A sheet of copper from the ship', es: 'Una lámina de cobre del barco', fa: 'یک ورق مس از کشتی' },
          why: { en: 'Yes! Powhatan people prized copper, and they had little. The English traded it for corn.', es: '¡Sí! Los powhatan valoraban mucho el cobre, y tenían poco. Los ingleses lo cambiaban por maíz.', fa: 'بله! مردم پوهاتن مس را خیلی قیمتی می‌دانستند و کم داشتند. انگلیسی‌ها آن را با جواری سودا می‌کردند.' } },
        { at: [17, 10], icon: '💰', t: { en: 'A bag of English coins', es: 'Una bolsa de monedas inglesas', fa: 'یک کیسه سکهٔ انگلیسی' },
          why: { en: 'English coins had no use here. Powhatan people traded goods, not coins.', es: 'Las monedas inglesas no servían aquí. Los powhatan cambiaban cosas, no monedas.', fa: 'سکهٔ انگلیسی اینجا به کار نمی‌آمد. مردم پوهاتن جنس سودا می‌کردند، نه سکه.' } },
        { at: [3, 14], icon: '🌿', t: { en: 'A bundle of tobacco leaves', es: 'Un atado de hojas de tabaco', fa: 'یک بسته برگ تنباکو' },
          why: { en: 'Powhatan people already grow their own tobacco. It grows right here in this field!', es: 'Los powhatan ya siembran su propio tabaco. ¡Crece aquí mismo, en este campo!', fa: 'مردم پوهاتن خودشان تنباکو می‌کارند. همین‌جا در این کشتزار می‌روید!' } }
      ],
      item: { icon: '🌽', name: { en: 'A basket of corn', es: 'Una canasta de maíz', fa: 'یک سبد جواری' } }
    }
  },

  scraps: [[30, 2], [1, 16], [23, 4]],
  smudges: [[11, 2], [28, 16]],

  challenge: {
    at: [19, 10],
    type: 'carry', // in the world; the card version (sort) is the fallback
    // God by the church, Gold by the ships at the dock, Glory at the top of the fort where the flag flies
    zones: [{ bin: 'god', x: 25, y: 9, w: 2, h: 2 }, { bin: 'gold', x: 25, y: 15, w: 4, h: 2 }, { bin: 'glory', x: 22, y: 5, w: 3, h: 2 }],
    stat: 'loc',
    title: { en: 'God, gold or glory?', es: '¿Dios, oro o gloria?', fa: 'خدا، طلا یا شهرت؟' },
    intro: { en: 'Why did Europeans explore? Carry each reason card to God, Gold or Glory.',
      es: '¿Por qué exploraron los europeos? Lleva cada tarjeta a Dios, Oro o Gloria.',
      fa: 'چرا اروپایی‌ها کشف کردند؟ هر کارت دلیل را به خدا، طلا یا شهرت ببر.' },
    bins: [
      { id: 'god', icon: '⛪', label: { en: 'God', es: 'Dios', fa: 'خدا' }, sub: { en: 'spread their religion', es: 'difundir su religión', fa: 'پخش کردن دین‌شان' } },
      { id: 'gold', icon: '💰', label: { en: 'Gold', es: 'Oro', fa: 'طلا' }, sub: { en: 'riches and trade', es: 'riquezas y comercio', fa: 'ثروت و تجارت' } },
      { id: 'glory', icon: '👑', label: { en: 'Glory', es: 'Gloria', fa: 'شهرت' }, sub: { en: 'power and fame', es: 'poder y fama', fa: 'قدرت و نام' } }
    ],
    items: [
      { bin: 'god', t: { en: 'Spread the Christian religion to new lands', es: 'Llevar la religión cristiana a tierras nuevas', fa: 'پخش کردن دین مسیحی در سرزمین‌های نو' },
        why: { en: 'Many explorers wanted to spread Christianity. That is the God reason.', es: 'Muchos exploradores querían difundir el cristianismo. Esa es la razón de Dios.', fa: 'بسیاری از کاشفان می‌خواستند مسیحیت را پخش کنند. این دلیل «خدا» است.' } },
      { bin: 'god', t: { en: 'Build churches in the colonies', es: 'Construir iglesias en las colonias', fa: 'ساختن کلیسا در مستعمره‌ها' },
        why: { en: 'Settlers built churches first. Jamestown had a church inside the fort. That is God.', es: 'Los colonos construían iglesias primero. Jamestown tenía una iglesia dentro del fuerte. Eso es Dios.', fa: 'مهاجران اول کلیسا ساختند. جیمزتاون داخل قلعه کلیسا داشت. این «خدا» است.' } },
      { bin: 'gold', t: { en: 'Find gold and silver', es: 'Encontrar oro y plata', fa: 'پیدا کردن طلا و نقره' },
        why: { en: 'Spain found silver in the Americas. Others hoped to find gold too. That is Gold.', es: 'España encontró plata en América. Otros también esperaban hallar oro. Eso es Oro.', fa: 'هسپانیه در امریکا نقره پیدا کرد. دیگران هم امید طلا داشتند. این «طلا» است.' } },
      { bin: 'gold', t: { en: 'Trade for spices and silk', es: 'Comerciar especias y seda', fa: 'تجارت مصاله و ابریشم' },
        why: { en: 'Spices and silk from Asia sold for high prices. Trade meant riches: Gold.', es: 'Las especias y la seda de Asia se vendían muy caras. Comerciar daba riquezas: Oro.', fa: 'مصاله و ابریشم آسیا به قیمت بلند فروخته می‌شد. تجارت یعنی ثروت: «طلا».' } },
      { bin: 'gold', t: { en: 'Find a faster sea route to Asia', es: 'Hallar una ruta por mar más rápida a Asia', fa: 'پیدا کردن راه بحری تیزتر به آسیا' },
        why: { en: 'A shorter route to Asia meant cheaper trade and more profit. That is Gold.', es: 'Una ruta más corta a Asia daba un comercio más barato y más ganancia. Eso es Oro.', fa: 'راه کوتاه‌تر به آسیا یعنی تجارت ارزان‌تر و فایدهٔ بیشتر. این «طلا» است.' } },
      { bin: 'glory', t: { en: 'Claim new land for the king', es: 'Reclamar tierras nuevas para el rey', fa: 'گرفتن زمین نو به نام پادشاه' },
        why: { en: 'New lands made a country stronger and its ruler proud. That is Glory.', es: 'Las tierras nuevas hacían más fuerte a un país y orgulloso a su rey. Eso es Gloria.', fa: 'زمین‌های نو کشور را قوی‌تر و پادشاه را سربلند می‌ساخت. این «شهرت» است.' } },
      { bin: 'glory', t: { en: 'Become a famous explorer', es: 'Ser un explorador famoso', fa: 'یک کاشف مشهور شدن' },
        why: { en: 'Explorers wanted fame and honor. They hoped people would remember their names. That is Glory.', es: 'Los exploradores querían fama y honor. Esperaban que recordaran sus nombres. Eso es Gloria.', fa: 'کاشفان نام و عزت می‌خواستند. امید داشتند مردم نام‌شان را به یاد داشته باشند. این «شهرت» است.' } },
      { bin: 'glory', t: { en: 'Beat Spain in the race for colonies', es: 'Ganarle a España en la carrera por colonias', fa: 'پیش افتادن از هسپانیه در مسابقهٔ مستعمره' },
        why: { en: 'England, France and Spain raced for power. Winning brought a country glory.', es: 'Inglaterra, Francia y España competían por el poder. Ganar le daba gloria a un país.', fa: 'انگلستان، فرانسه و هسپانیه برای قدرت مسابقه می‌دادند. برنده شدن برای کشور شهرت می‌آورد.' } }
    ],
    success: { en: 'Every reason is in place! God, gold and glory pulled Europeans across the ocean.', es: '¡Cada razón está en su lugar! Dios, oro y gloria llevaron a los europeos por el océano.', fa: 'هر دلیل سر جایش است! خدا، طلا و شهرت اروپایی‌ها را از بحر گذراند.' }
  },

  boss: {
    at: [9, 15],
    stat: 'mov',
    need: 3,
    name: { en: 'The Greedy Grump', es: 'El Gruñón Codicioso', fa: 'غرغروی حریص' },
    appear: { en: 'The Greedy Grump is hiding in the fog on the river shore!', es: '¡El Gruñón Codicioso se esconde en la niebla de la orilla del río!', fa: 'غرغروی حریص در مه کنار دریا پنهان است!' },
    taunt: { en: 'Forts, ships, old towns? Bah! Let this whole story sink in the river!', es: '¿Fuertes, barcos, pueblos viejos? ¡Bah! ¡Que toda esta historia se hunda en el río!', fa: 'قلعه، کشتی، قریه‌های کهنه؟ بَه! بگذار همهٔ این داستان در دریا غرق شود!' },
    win: { en: 'The fog lifts off the river. Journal page 1.1 floats down into your hands!', es: 'La niebla se va del río. ¡La página 1.1 del diario cae en tus manos!', fa: 'مه از روی دریا کنار می‌رود. صفحهٔ ۱.۱ روزنامچه به دستت می‌افتد!' },
    questions: [
      { q: { en: 'What were the three big reasons Europeans explored?', es: '¿Cuáles fueron las tres grandes razones por las que exploraron los europeos?', fa: 'سه دلیل بزرگ کشف اروپایی‌ها چه بود؟' },
        choices: [
          { en: 'God, gold and glory', es: 'Dios, oro y gloria', fa: 'خدا، طلا و شهرت' },
          { en: 'Farms, fish and forests', es: 'Fincas, peces y bosques', fa: 'فارم، ماهی و جنگل' },
          { en: 'Rest, sports and fun', es: 'Descanso, deporte y diversión', fa: 'استراحت، ورزش و تفریح' },
          { en: 'Snow, storms and stars', es: 'Nieve, tormentas y estrellas', fa: 'برف، طوفان و ستاره' }],
        answer: 0,
        why: { en: 'People call them God, gold and glory: religion, riches, and power or fame.', es: 'Se les llama Dios, oro y gloria: religión, riquezas, y poder o fama.', fa: 'این‌ها را خدا، طلا و شهرت می‌گویند: دین، ثروت، و قدرت یا نام.' } },
      { q: { en: 'Who started New Netherland, in today\'s New York?', es: '¿Quiénes fundaron Nueva Holanda, en lo que hoy es Nueva York?', fa: 'کی‌ها «هالند نو» را در جایی که امروز نیویارک است ساختند؟' },
        choices: [
          { en: 'The Dutch', es: 'Los holandeses', fa: 'هالندی‌ها' },
          { en: 'The Spanish', es: 'Los españoles', fa: 'هسپانوی‌ها' },
          { en: 'The French', es: 'Los franceses', fa: 'فرانسوی‌ها' },
          { en: 'The English', es: 'Los ingleses', fa: 'انگلیسی‌ها' }],
        answer: 0,
        why: { en: 'The Dutch settled New Netherland. Spain settled Florida and Mexico. France settled Canada, called New France.', es: 'Los holandeses poblaron Nueva Holanda. España, Florida y México. Francia, Canadá, llamada Nueva Francia.', fa: 'هالندی‌ها هالند نو را آباد کردند. هسپانیه فلوریدا و مکسیکو را. فرانسه کانادا را، به نام فرانسهٔ نو.' } },
      { q: { en: 'Who paid for and ran the Jamestown colony?', es: '¿Quién pagó y dirigió la colonia de Jamestown?', fa: 'کی خرچ مستعمرهٔ جیمزتاون را داد و آن را اداره کرد؟' },
        choices: [
          { en: 'The Virginia Company of London', es: 'La Compañía de Virginia de Londres', fa: 'شرکت ورجینیای لندن' },
          { en: 'The king and queen of Spain', es: 'El rey y la reina de España', fa: 'پادشاه و ملکهٔ هسپانیه' },
          { en: 'The leaders of the Powhatan towns', es: 'Los líderes de los pueblos powhatan', fa: 'رهبران قریه‌های پوهاتن' },
          { en: 'A small group of Dutch farmers', es: 'Un grupo pequeño de granjeros holandeses', fa: 'یک گروه کوچک دهقانان هالندی' }],
        answer: 0,
        why: { en: 'The Virginia Company was a joint-stock company. Investors bought shares and hoped for profit.', es: 'La Compañía de Virginia era una sociedad por acciones. Los inversionistas compraron acciones y esperaban ganancias.', fa: 'شرکت ورجینیا یک شرکت سهامی بود. سرمایه‌گذاران سهم خریدند و امید فایده داشتند.' } },
      { q: { en: 'What was the "starving time" at Jamestown, in 1609 and 1610?', es: '¿Qué fue el "tiempo de hambre" en Jamestown, en 1609 y 1610?', fa: '«زمان گرسنگی» در جیمزتاون، در سال‌های ۱۶۰۹ و ۱۶۱۰، چه بود؟' },
        choices: [
          { en: 'A winter when most settlers died', es: 'Un invierno en que murió la mayoría', fa: 'زمستانی که بیشتر مهاجران مردند' },
          { en: 'A season when the fort got rich', es: 'Una temporada en que el fuerte se hizo rico', fa: 'فصلی که قلعه پولدار شد' },
          { en: 'A feast for the English and Powhatan', es: 'Una fiesta de los ingleses y los powhatan', fa: 'یک مهمانی برای انگلیسی‌ها و پوهاتن' },
          { en: 'A long trip back home to England', es: 'Un viaje largo de regreso a Inglaterra', fa: 'یک سفر دراز به وطن، انگلستان' }],
        answer: 0,
        why: { en: 'Food ran out, and trade with the Powhatan stopped. Of about 500 settlers, only about 60 lived.', es: 'Se acabó la comida y paró el comercio con los powhatan. De unos 500 colonos, solo vivieron unos 60.', fa: 'غذا تمام شد و سودا با پوهاتن بند شد. از حدود ۵۰۰ مهاجر، فقط حدود ۶۰ نفر زنده ماندند.' } },
      { q: { en: 'Who led Tsenacomoco, the land of the Powhatan people?', es: '¿Quién dirigía Tsenacomoco, la tierra del pueblo powhatan?', fa: 'کی سناکوموکو، سرزمین مردم پوهاتن، را رهبری می‌کرد؟' },
        choices: [
          { en: 'Wahunsenacah, called Powhatan', es: 'Wahunsenacah, llamado Powhatan', fa: 'واهونسناکا، به نام پوهاتن' },
          { en: 'King James of England', es: 'El rey Jacobo de Inglaterra', fa: 'جیمز، پادشاه انگلستان' },
          { en: 'The captain of an English ship', es: 'El capitán de un barco inglés', fa: 'کپتان یک کشتی انگلیسی' },
          { en: 'A governor sent from Spain', es: 'Un gobernador enviado por España', fa: 'یک والی فرستاده از هسپانیه' }],
        answer: 0,
        why: { en: 'Wahunsenacah, called Powhatan, led about 30 nations. Each town also had its own leader.', es: 'Wahunsenacah, llamado Powhatan, dirigía unas 30 naciones. Cada pueblo tenía también su propio líder.', fa: 'واهونسناکا، به نام پوهاتن، حدود ۳۰ قوم را رهبری می‌کرد. هر قریه هم رهبر خود را داشت.' } },
      { q: { en: 'In 1612, John Rolfe planted a new kind of tobacco. What did it become?', es: 'En 1612, John Rolfe sembró un tabaco nuevo. ¿En qué se convirtió?', fa: 'در سال ۱۶۱۲، جان رالف نوع نوی تنباکو کاشت. چه شد؟' },
        choices: [
          { en: 'Virginia\'s big cash crop', es: 'El gran cultivo comercial de Virginia', fa: 'حاصل فروشی بزرگ ورجینیا' },
          { en: 'A food for the winter', es: 'Una comida para el invierno', fa: 'یک غذا برای زمستان' },
          { en: 'A gift for King James', es: 'Un regalo para el rey Jacobo', fa: 'یک تحفه برای پادشاه جیمز' },
          { en: 'A crop nobody would buy', es: 'Un cultivo que nadie compraba', fa: 'حاصلی که هیچ کس نمی‌خرید' }],
        answer: 0,
        why: { en: 'Tobacco sold for high prices in England. Settlers took more Powhatan land to grow it.', es: 'El tabaco se vendía caro en Inglaterra. Los colonos tomaron más tierra powhatan para sembrarlo.', fa: 'تنباکو در انگلستان به قیمت بلند فروخته می‌شد. مهاجران برای کاشتنش زمین بیشتر پوهاتن را گرفتند.' } },
      { q: { en: 'What was the House of Burgesses, which first met in 1619?', es: '¿Qué fue la Cámara de los Burgueses, que se reunió por primera vez en 1619?', fa: 'مجلس برجس‌ها، که اولین بار در سال ۱۶۱۹ جمع شد، چه بود؟' },
        choices: [
          { en: 'The first elected assembly in English America', es: 'La primera asamblea elegida de la América inglesa', fa: 'اولین مجلس انتخابی در امریکای انگلیسی' },
          { en: 'The first school for children in Virginia', es: 'La primera escuela para niños de Virginia', fa: 'اولین مکتب برای اطفال در ورجینیا' },
          { en: 'The first ship built by the English colonists', es: 'El primer barco hecho por los colonos ingleses', fa: 'اولین کشتی ساخت مهاجران انگلیسی' },
          { en: 'The big house where the governor lived', es: 'La casa grande donde vivía el gobernador', fa: 'خانهٔ بزرگی که والی در آن زندگی می‌کرد' }],
        answer: 0,
        why: { en: 'Colonists elected burgesses to help make laws. It was a start of self-government.', es: 'Los colonos eligieron burgueses para ayudar a hacer leyes. Fue un comienzo del autogobierno.', fa: 'مهاجران «برجس‌ها» را برای کمک به قانون‌سازی انتخاب کردند. این آغاز حکومت خودی بود.' } },
      { q: { en: 'What else happened in English Virginia in 1619?', es: '¿Qué más pasó en la Virginia inglesa en 1619?', fa: 'در سال ۱۶۱۹ در ورجینیای انگلیسی دیگر چه شد؟' },
        choices: [
          { en: 'Africans were brought to Point Comfort by force', es: 'Trajeron a africanos a la fuerza a Point Comfort', fa: 'افریقایی‌ها به زور به پوینت کمفرت آورده شدند' },
          { en: 'The Powhatan people moved far away to Canada', es: 'Los powhatan se mudaron lejos, a Canadá', fa: 'مردم پوهاتن به جای دور، به کانادا، رفتند' },
          { en: 'Spain took over the fort at Jamestown', es: 'España tomó el fuerte de Jamestown', fa: 'هسپانیه قلعهٔ جیمزتاون را گرفت' },
          { en: 'All the settlers sailed back home to England', es: 'Todos los colonos volvieron a Inglaterra', fa: 'همهٔ مهاجران با کشتی به انگلستان برگشتند' }],
        answer: 0,
        why: { en: 'More than 20 Africans, captured and taken by force, arrived at Point Comfort. It began a long, cruel history.', es: 'Más de 20 africanos, capturados y llevados a la fuerza, llegaron a Point Comfort. Comenzó una historia larga y cruel.', fa: 'بیش از ۲۰ افریقایی، که اسیر و به زور برده شده بودند، به پوینت کمفرت رسیدند. یک تاریخ دراز و ظالمانه شروع شد.' } }
    ]
  },

  learned: [
    { en: 'Europeans explored for God, gold and glory. New ships and tools like the [[astrolabe|astrolabe]] helped.', es: 'Los europeos exploraron por Dios, oro y gloria. Barcos nuevos y herramientas como el [[astrolabe|astrolabio]] ayudaron.', fa: 'اروپایی‌ها برای خدا، طلا و شهرت کشف کردند. کشتی‌های نو و ابزارهایی مثل [[astrolabe|اسطرلاب]] کمک کرد.' },
    { en: 'In 1607, the Virginia Company, a [[joint-stock company|joint-stock company]], started Jamestown on Powhatan land. Hunger and disease made life hard.', es: 'En 1607, la Compañía de Virginia, una [[joint-stock company|sociedad por acciones]], fundó Jamestown en tierra powhatan. El hambre y las enfermedades hicieron dura la vida.', fa: 'در سال ۱۶۰۷، شرکت ورجینیا، یک [[joint-stock company|شرکت سهامی]]، جیمزتاون را روی زمین پوهاتن ساخت. گرسنگی و مریضی زندگی را سخت کرد.' },
    { en: 'Tobacco became the [[cash crop|cash crop]]. In 1619 came the House of Burgesses, and Africans brought by force.', es: 'El tabaco se volvió el [[cash crop|cultivo comercial]]. En 1619 llegaron la Cámara de los Burgueses y africanos traídos a la fuerza.', fa: 'تنباکو [[cash crop|حاصل فروشی]] شد. در سال ۱۶۱۹ مجلس برجس‌ها ساخته شد و افریقایی‌ها به زور آورده شدند.' }
  ],
  reflect: {
    q: { en: 'The Powhatan and the English saw Jamestown very differently. Why? How would you feel?', es: 'Los powhatan y los ingleses veían Jamestown de forma muy distinta. ¿Por qué? ¿Cómo te sentirías?', fa: 'مردم پوهاتن و انگلیسی‌ها جیمزتاون را خیلی متفاوت می‌دیدند. چرا؟ تو چه احساسی می‌داشتی؟' },
    starter: { en: 'If I lived in a Powhatan town, I would feel', es: 'Si yo viviera en un pueblo powhatan, me sentiría', fa: 'اگر در یک قریهٔ پوهاتن زندگی می‌کردم، احساس می‌کردم' }
  }
};
