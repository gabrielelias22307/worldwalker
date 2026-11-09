/* CIVICWALKER · Episode 1.3 · The Road of Rights (Foundations of American Government)
   Williamsburg, Virginia, 1776, the colonial capital. Duke of Gloucester Street runs east to west across the middle
   and ends at the Capitol (east). North of the street: the Palace Green runs up to the walled Governor's Palace,
   with the wigmaker, the print shop (blue roof) and a tavern along the street. South of it: Market Square with its
   stalls, houses, gardens and a pond. The charter stone asks the student to walk the road of documents that limited
   rulers and named rights, in time order: Magna Carta, the English Bill of Rights, the Virginia Declaration of
   Rights, the Declaration of Independence, the Articles of Confederation. */
window.EPISODE = {
  id: '1.3',
  realm: 1,
  sol: 'GOVT',
  title: { en: 'The Road of Rights', es: 'El camino de los derechos', fa: 'راه حقوق' },
  weather: { sky: 'clear', time: 'sunset' },
  place: { en: 'Williamsburg, 1776', es: 'Williamsburg, 1776', fa: 'ویلیامزبرگ، ۱۷۷۶' },
  intro: [
    { en: 'The Grump tore the page about rights. Now people forget that rulers have limits.',
      es: 'El Gruñón rompió la página de los derechos. Ahora la gente olvida que los gobernantes tienen límites.',
      fa: 'غرغرو صفحهٔ حقوق را پاره کرد. حالا مردم فراموش می‌کنند که حاکمان هم حد دارند.' },
    { en: 'Talk to the 3 people here, then fix the charter stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra de la carta.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ منشور را درست کن.' }
  ],
  scenes: {
    at: [-76.70, 37.27],
    start: [
      { en: 'In 1776, Williamsburg was the capital of the colony of Virginia.',
        es: 'En 1776, Williamsburg era la capital de la colonia de Virginia.',
        fa: 'در سال ۱۷۷۶، ویلیامزبرگ پایتخت مستعمرهٔ ویرجینیا بود.' },
      { en: 'Its main street, Duke of Gloucester Street, ends at the Capitol.',
        es: 'Su calle principal, la calle Duke of Gloucester, termina en el Capitolio.',
        fa: 'سرک اصلی آن، سرک دوک آو گلاستر، به کاپیتول ختم می‌شود.' },
      { en: 'That year, 13 colonies broke away from the king of Great Britain.',
        es: 'Ese año, 13 colonias se separaron del rey de Gran Bretaña.',
        fa: 'در همان سال، ۱۳ مستعمره از پادشاه بریتانیای کبیر جدا شدند.' }
    ],
    page: { en: 'Virginia\'s Declaration of Rights helped shape the US Bill of Rights of 1791.',
      es: 'La Declaración de Derechos de Virginia ayudó a formar la Carta de Derechos de EE. UU. de 1791.',
      fa: 'اعلامیهٔ حقوق ویرجینیا به شکل گرفتن منشور حقوق امریکا در سال ۱۷۹۱ کمک کرد.' },
    guess: {
      q: { en: 'Can a king do anything he wants? Or must he obey the law?', es: '¿Puede un rey hacer todo lo que quiera? ¿O debe obedecer la ley?', fa: 'آیا پادشاه هر کاری که بخواهد می‌تواند؟ یا باید از قانون اطاعت کند؟' },
      choices: [
        { t: { en: '👑 Anything he wants', es: '👑 Todo lo que quiera', fa: '👑 هر کاری که بخواهد' } },
        { t: { en: '📜 He must obey the law', es: '📜 Debe obedecer la ley', fa: '📜 باید از قانون اطاعت کند' }, ok: true }
      ],
      why: { en: 'Since Magna Carta in 1215, the English said that even the king must obey the law.', es: 'Desde la Carta Magna, en 1215, los ingleses decían que hasta el rey debe obedecer la ley.', fa: 'از زمان ماگنا کارتا در سال ۱۲۱۵، انگلیسی‌ها می‌گفتند حتی پادشاه باید از قانون اطاعت کند.' }
    },
    next: {
      q: { en: 'Next: Philadelphia, 1787. The Articles were too weak. What did leaders write?', es: 'Ahora: Filadelfia, 1787. Los Artículos eran muy débiles. ¿Qué escribieron los líderes?', fa: 'بعدی: فیلادلفیا، ۱۷۸۷. مواد کنفدراسیون خیلی ضعیف بود. رهبران چه نوشتند؟' },
      choices: [
        { t: { en: '📜 A new Constitution', es: '📜 Una nueva Constitución', fa: '📜 یک قانون اساسی نو' }, ok: true },
        { t: { en: '👑 A plan for a king', es: '👑 Un plan para tener un rey', fa: '👑 یک طرح برای پادشاه' } }
      ],
      why: { en: 'Delegates met in Philadelphia in 1787. They wrote a new Constitution with a stronger national government.', es: 'Los delegados se reunieron en Filadelfia en 1787. Escribieron una nueva Constitución con un gobierno nacional más fuerte.', fa: 'نماینده‌ها در سال ۱۷۸۷ در فیلادلفیا جمع شدند. آن‌ها یک قانون اساسی نو با حکومت ملی قوی‌تر نوشتند.' }
    }
  },
  /* houses: who lives behind each door; walk in and talk */
  houses: [
    { at: [3, 3], name: { en: 'Widow Ruth', es: 'La viuda Ruth', fa: 'بیوه روت' },
      look: { skin: 0, hair: '#b0a898', shirt: '#6a4a3a', pants: '#2a2a2a', style: 'bun', hat: '#f0ece0' },
      lines: [
        { en: 'Come in! I bake bread for half the town.', es: '¡Pasa! Hago pan para medio pueblo.', fa: 'بیا داخل! من برای نیم شهر نان می‌پزم.' },
        { en: 'My son is a soldier now. The war with Britain began last year.', es: 'Mi hijo ahora es soldado. La guerra con Gran Bretaña empezó el año pasado.', fa: 'پسرم حالا عسکر است. جنگ با بریتانیا سال گذشته شروع شد.' }
      ] },
    { at: [28, 3], name: { en: 'Caleb', es: 'Caleb', fa: 'کالب' },
      look: { skin: 1, hair: '#6a4a2a', shirt: '#2f4f7a', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'I study at the College of William and Mary, here in town.', es: 'Estudio en el Colegio de William y Mary, aquí en el pueblo.', fa: 'من در کالج ویلیام و مری، همین‌جا در شهر، درس می‌خوانم.' },
        { en: 'Thomas Jefferson studied there too, before he became a lawmaker.', es: 'Thomas Jefferson también estudió allí, antes de ser legislador.', fa: 'تامس جفرسن هم آنجا درس خواند، پیش از آن که قانون‌گذار شود.' }
      ] },
    { at: [3, 9], name: { en: 'Mr. Hayes', es: 'El señor Hayes', fa: 'آقای هیز' },
      look: { skin: 2, hair: '#e8e8e8', shirt: '#7a2a3a', pants: '#2a2a3a', style: 'short' },
      lines: [
        { en: 'Welcome to my wig shop! Rich men here love fancy wigs.', es: '¡Bienvenido a mi tienda de pelucas! Aquí a los hombres ricos les encantan las pelucas.', fa: 'به دکان کلاه‌گیس من خوش آمدی! مردان پولدار اینجا کلاه‌گیس مُد را دوست دارند.' },
        { en: 'I make wigs from human hair, horse hair or goat hair.', es: 'Hago pelucas de pelo humano, de caballo o de cabra.', fa: 'من کلاه‌گیس را از موی انسان، موی اسپ یا موی بز می‌سازم.' }
      ] },
    { at: [7, 9], name: { en: 'Ned', es: 'Ned', fa: 'نِد' },
      look: { skin: 3, hair: '#1a1008', shirt: '#c07a3a', pants: '#3a2a1a', style: 'short' },
      lines: [
        { en: 'I am the printer\'s helper. I set each letter by hand.', es: 'Soy el ayudante del impresor. Pongo cada letra a mano.', fa: 'من شاگرد چاپگر هستم. هر حرف را با دست می‌چینم.' },
        { en: 'One page takes hours. But then we can print hundreds!', es: 'Una página toma horas. ¡Pero luego podemos imprimir cientos!', fa: 'یک صفحه چند ساعت وقت می‌گیرد. اما بعد صدها نسخه چاپ کرده می‌توانیم!' }
      ] },
    { at: [21, 9], name: { en: 'Sarah', es: 'Sarah', fa: 'سارا' },
      look: { skin: 1, hair: '#8a3a1a', shirt: '#2f7a5a', pants: '#3a2a20', style: 'long' },
      lines: [
        { en: 'This is my tavern. People eat, drink and argue here.', es: 'Esta es mi taberna. Aquí la gente come, bebe y discute.', fa: 'این سرای من است. مردم اینجا می‌خورند، می‌نوشند و بحث می‌کنند.' },
        { en: 'Lawmakers often meet in taverns to talk about the news.', es: 'Los legisladores muchas veces se reúnen en tabernas para hablar de las noticias.', fa: 'قانون‌گذاران اکثراً در سراها جمع می‌شوند تا دربارهٔ خبرها گپ بزنند.' }
      ] },
    { at: [3, 15], name: { en: 'Silas', es: 'Silas', fa: 'سایلس' },
      look: { skin: 5, hair: '#120c08', shirt: '#5a5a5a', pants: '#3a2a1a', style: 'short', hat: '#3a2a1a' },
      lines: [
        { en: 'I am a blacksmith. I fix tools and make horseshoes.', es: 'Soy herrero. Arreglo herramientas y hago herraduras.', fa: 'من آهنگر هستم. ابزار را ترمیم می‌کنم و نعل اسپ می‌سازم.' },
        { en: 'For years, Britain taxed the colonies. We had no vote in Parliament.', es: 'Por años, Gran Bretaña cobró impuestos a las colonias. No teníamos voto en el Parlamento.', fa: 'سال‌ها بریتانیا از مستعمره‌ها مالیه گرفت. ما در پارلمان رأی نداشتیم.' }
      ] },
    { at: [23, 15], name: { en: 'Lydia', es: 'Lydia', fa: 'لیدیا' },
      look: { skin: 4, hair: '#1a1008', shirt: '#8e5bd6', pants: '#2a2a40', style: 'bun' },
      lines: [
        { en: 'I am a seamstress. I sew coats for the soldiers.', es: 'Soy costurera. Coso abrigos para los soldados.', fa: 'من خیاط هستم. برای عسکرها کرتی می‌دوزم.' },
        { en: 'Everyone talks about rights now. I hope rights will reach my family too.', es: 'Ahora todos hablan de derechos. Espero que los derechos lleguen a mi familia también.', fa: 'حالا همه از حقوق گپ می‌زنند. امیدوارم حقوق به خانوادهٔ من هم برسد.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     North: the walled Governor's Palace (R over h, no door), its forecourt (y 4) and the gate at (15-16, 5).
     The Palace Green path (:) runs south to Duke of Gloucester Street (y 11-12). Along the north side of the
     street: the wigmaker (3,9), the print shop with the blue roof (7,9), the tavern (21,9). East end: the Capitol (J).
     South: Market Square (m stalls), two houses with doors facing south, a fenced garden (o) and a pond (~). */
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT',
    'T..........WWWWWWWWWW..........T',
    'T.RRR......WRRRRRRRRW......QQQ.T',
    'T.hdh......WhhhhhhhhW......hdh.T',
    'T..........W........W.........TT',
    'TT.........WWWW::WWWW..........T',
    'T..T....TT.....::......T....TT.T',
    'T............T.::.T......x.....T',
    'T.RRR.QQQ.....x::...RRR...JJJJJT',
    'T.hdh.hdh......::...hdh...JJJJJT',
    'T..............::.........JJJJJT',
    'T:::::::::::::::::::::::::JJJJJT',
    'T:::::::::::::::::::::::::JJJJJT',
    'TT........................JJJJJT',
    'T.RRR.....mm.mm..mm...QQQ.JJJJJT',
    'T.hdh.................hdh....T.T',
    'T.........mm.....mm............T',
    'T.....FF.FF....................T',
    'T.T...ooooo..............~~~...T',
    'T.....ooooo..TT.....TT...~~~...T',
    'T..............................T',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT'
  ],
  start: [15, 12],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [10, 13], at: [10, 15], decor: 'coinold',
      clue: { en: 'From this note, walk 2 steps south. Look between the market stalls.', es: 'Desde esta nota, camina 2 pasos al sur. Busca entre los puestos del mercado.', fa: 'از این یادداشت، ۲ قدم به جنوب برو. میان دکان‌های بازار را ببین.' },
      text: { en: 'In 1776, Virginians often paid with Spanish silver coins. Here is one!', es: 'En 1776, en Virginia la gente pagaba muchas veces con monedas de plata españolas. ¡Aquí hay una!', fa: 'در سال ۱۷۷۶، مردم ویرجینیا اکثراً با سکه‌های نقره‌ای هسپانیایی پول می‌دادند. اینجا یکی است!' } },
    { clueAt: [6, 5], at: [6, 2], decor: 'feather',
      clue: { en: 'From this note, walk 3 steps north, next to the house.', es: 'Desde esta nota, camina 3 pasos al norte, junto a la casa.', fa: 'از این یادداشت، ۳ قدم به شمال برو، کنار خانه.' },
      text: { en: 'Writers in 1776 used quill pens, made from big bird feathers. A feather!', es: 'En 1776 se escribía con plumas de ave grandes. ¡Una pluma!', fa: 'نویسنده‌ها در سال ۱۷۷۶ با قلم‌های پَر، از پَر پرنده‌های بزرگ، می‌نوشتند. یک پَر!' } }
  ],

  words: {
    'magna carta': { en: 'an English paper from 1215: even the king must obey the law', es: 'un documento inglés de 1215: hasta el rey debe obedecer la ley', fa: 'یک سند انگلیسی از سال ۱۲۱۵: حتی پادشاه باید از قانون اطاعت کند' },
    'bill of rights': { en: 'a written list of rights that the government must respect', es: 'una lista escrita de derechos que el gobierno debe respetar', fa: 'یک فهرست نوشته‌شدهٔ حقوق که حکومت باید احترام کند' },
    parliament: { en: 'the group of elected lawmakers in Great Britain', es: 'el grupo de legisladores elegidos en Gran Bretaña', fa: 'گروه قانون‌گذاران انتخاب‌شده در بریتانیای کبیر' },
    'house of burgesses': { en: 'Virginia\'s elected lawmakers, from 1619: the first in the colonies', es: 'los legisladores elegidos de Virginia, desde 1619: los primeros en las colonias', fa: 'قانون‌گذاران انتخاب‌شدهٔ ویرجینیا، از سال ۱۶۱۹: اولین در مستعمره‌ها' },
    'declaration of rights': { en: 'Virginia\'s list of rights from June 1776, written mainly by George Mason', es: 'la lista de derechos de Virginia de junio de 1776, escrita sobre todo por George Mason', fa: 'فهرست حقوق ویرجینیا از جون ۱۷۷۶، که بیشترش را جورج میسن نوشت' },
    'declaration of independence': { en: 'the paper of July 4, 1776: the colonies break away from the king', es: 'el documento del 4 de julio de 1776: las colonias se separan del rey', fa: 'سند ۴ جولای ۱۷۷۶: مستعمره‌ها از پادشاه جدا می‌شوند' },
    'natural rights': { en: 'rights every person is born with, like life and liberty', es: 'derechos con los que nace cada persona, como la vida y la libertad', fa: 'حقوقی که هر انسان با آن به دنیا می‌آید، مثل زندگی و آزادی' },
    'consent of the governed': { en: 'the people agree to be ruled; government power comes from them', es: 'el pueblo acepta ser gobernado; el poder del gobierno viene de él', fa: 'مردم قبول می‌کنند که اداره شوند؛ قدرت حکومت از آن‌ها می‌آید' },
    'articles of confederation': { en: 'the first plan of government for the United States, with a weak national government', es: 'el primer plan de gobierno de Estados Unidos, con un gobierno nacional débil', fa: 'اولین طرح حکومت برای ایالات متحده، با یک حکومت ملی ضعیف' },
    'free press': { en: 'printers may print news and ideas without the government stopping them', es: 'los impresores pueden publicar noticias e ideas sin que el gobierno los detenga', fa: 'چاپگران می‌توانند خبر و فکر را چاپ کنند و حکومت جلوی‌شان را نگیرد' }
  },

  npcs: [
    {
      x: 5, y: 10,
      name: { en: 'Elias', es: 'Elías', fa: 'الیاس' },
      role: { en: 'Printer', es: 'Impresor', fa: 'چاپگر' },
      look: { skin: 1, hair: '#5a3a1a', shirt: '#e8dcc0', pants: '#3a2a1a', hat: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'I print old papers about rights. People here love to read them.', es: 'Imprimo documentos antiguos sobre derechos. A la gente de aquí le encanta leerlos.', fa: 'من سندهای قدیمی دربارهٔ حقوق را چاپ می‌کنم. مردم اینجا خواندن آن‌ها را دوست دارند.' },
        { en: '[[magna carta|Magna Carta]], England, 1215: even the king must obey the law.', es: '[[magna carta|Carta Magna]], Inglaterra, 1215: hasta el rey debe obedecer la ley.', fa: '[[magna carta|ماگنا کارتا]]، انگلستان، ۱۲۱۵: حتی پادشاه باید از قانون اطاعت کند.' },
        { en: 'The English [[bill of rights|Bill of Rights]], 1689, put more limits on the king.', es: 'La [[bill of rights|Declaración de Derechos]] inglesa, de 1689, puso más límites al rey.', fa: '[[bill of rights|منشور حقوق]] انگلستان، ۱۶۸۹، بر پادشاه حدهای بیشتر گذاشت.' },
        { en: 'It gave [[parliament|Parliament]] more power, and it named some rights of the people.', es: 'Le dio más poder al [[parliament|Parlamento]] y nombró algunos derechos del pueblo.', fa: 'به [[parliament|پارلمان]] قدرت بیشتر داد و بعضی حقوق مردم را نام برد.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'What big idea did Magna Carta set down in 1215?', es: '¿Qué gran idea dejó escrita la Carta Magna en 1215?', fa: 'ماگنا کارتا در سال ۱۲۱۵ کدام فکر بزرگ را نوشت؟' },
        choices: [
          { ok: true, t: { en: 'Even the king must obey the law', es: 'Hasta el rey debe obedecer la ley', fa: 'حتی پادشاه باید از قانون اطاعت کند' },
            why: { en: 'Yes! Magna Carta said the king was not above the law.', es: '¡Sí! La Carta Magna dijo que el rey no estaba por encima de la ley.', fa: 'بله! ماگنا کارتا گفت پادشاه بالاتر از قانون نیست.' } },
          { t: { en: 'The people must elect each new king', es: 'El pueblo debe elegir a cada nuevo rey', fa: 'مردم باید هر پادشاه نو را انتخاب کنند' },
            why: { en: 'No. English kings were still born to the job. But they had to obey the law.', es: 'No. Los reyes ingleses seguían naciendo para el puesto. Pero debían obedecer la ley.', fa: 'نه. پادشاهان انگلیس هنوز به ارث پادشاه می‌شدند. اما باید از قانون اطاعت می‌کردند.' } },
          { t: { en: 'The colonies must be free of England', es: 'Las colonias deben ser libres de Inglaterra', fa: 'مستعمره‌ها باید از انگلستان آزاد شوند' },
            why: { en: 'No. In 1215 there were no American colonies yet. Magna Carta limited the king.', es: 'No. En 1215 todavía no había colonias en América. La Carta Magna limitó al rey.', fa: 'نه. در سال ۱۲۱۵ هنوز مستعمره‌ای در امریکا نبود. ماگنا کارتا پادشاه را محدود کرد.' } }
        ]
      }
    },
    {
      x: 22, y: 13,
      name: { en: 'Martha', es: 'Marta', fa: 'مارتا' },
      role: { en: 'Clerk at the Capitol', es: 'Secretaria del Capitolio', fa: 'منشی کاپیتول' },
      look: { skin: 4, hair: '#1a1008', shirt: '#2f5f9a', pants: '#2a2a3a', style: 'bun', hat: '#f0ece0' },
      lines: [
        { en: 'The [[house of burgesses|House of Burgesses]] began in 1619, at Jamestown.', es: 'La [[house of burgesses|Cámara de los Burgueses]] empezó en 1619, en Jamestown.', fa: '[[house of burgesses|مجلس بورجس‌ها]] در سال ۱۶۱۹ در جیمزتاون شروع شد.' },
        { en: 'It was the first elected group to make laws in the colonies.', es: 'Fue el primer grupo elegido para hacer leyes en las colonias.', fa: 'این اولین گروه انتخاب‌شده بود که در مستعمره‌ها قانون می‌ساخت.' },
        { en: 'In June 1776, Virginia adopted its [[declaration of rights|Declaration of Rights]] here, at the Capitol.', es: 'En junio de 1776, Virginia aprobó aquí, en el Capitolio, su [[declaration of rights|Declaración de Derechos]].', fa: 'در جون ۱۷۷۶، ویرجینیا [[declaration of rights|اعلامیهٔ حقوق]] خود را اینجا، در کاپیتول، تصویب کرد.' },
        { en: 'George Mason wrote most of it. It says power comes from the people.', es: 'George Mason escribió la mayor parte. Dice que el poder viene del pueblo.', fa: 'بیشتر آن را جورج میسن نوشت. می‌گوید قدرت از مردم می‌آید.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'What was the House of Burgesses, from 1619?', es: '¿Qué era la Cámara de los Burgueses, de 1619?', fa: 'مجلس بورجس‌ها، از سال ۱۶۱۹، چه بود؟' },
        choices: [
          { ok: true, t: { en: 'The first elected lawmakers in the colonies', es: 'Los primeros legisladores elegidos en las colonias', fa: 'اولین قانون‌گذاران انتخاب‌شده در مستعمره‌ها' },
            why: { en: 'Right! Virginia voters chose the Burgesses, and they made laws for the colony.', es: '¡Correcto! Los votantes de Virginia elegían a los Burgueses, y ellos hacían las leyes de la colonia.', fa: 'درست! رأی‌دهندگان ویرجینیا بورجس‌ها را انتخاب می‌کردند و آن‌ها برای مستعمره قانون می‌ساختند.' } },
          { t: { en: 'The big house where the king\'s governor lived', es: 'La casa grande donde vivía el gobernador del rey', fa: 'خانهٔ بزرگی که والی پادشاه در آن زندگی می‌کرد' },
            why: { en: 'No. That was the Governor\'s Palace. The Burgesses were elected lawmakers.', es: 'No. Ese era el Palacio del Gobernador. Los Burgueses eran legisladores elegidos.', fa: 'نه. آن قصر والی بود. بورجس‌ها قانون‌گذاران انتخاب‌شده بودند.' } },
          { t: { en: 'A group of judges sent over by the king', es: 'Un grupo de jueces enviados por el rey', fa: 'یک گروه قاضی که پادشاه فرستاده بود' },
            why: { en: 'No. The king did not send them. Voters in Virginia elected the Burgesses.', es: 'No. El rey no los envió. Los votantes de Virginia elegían a los Burgueses.', fa: 'نه. پادشاه آن‌ها را نفرستاد. رأی‌دهندگان ویرجینیا بورجس‌ها را انتخاب می‌کردند.' } }
        ]
      }
    },
    {
      x: 15, y: 15,
      name: { en: 'Rose', es: 'Rosa', fa: 'رُز' },
      role: { en: 'Market seller', es: 'Vendedora del mercado', fa: 'فروشندهٔ بازار' },
      look: { skin: 2, hair: '#3a2416', shirt: '#d9542b', pants: '#2a4a3a', style: 'long' },
      lines: [
        { en: 'Big news from Philadelphia! On July 4, Congress approved the [[declaration of independence|Declaration of Independence]].', es: '¡Gran noticia de Filadelfia! El 4 de julio, el Congreso aprobó la [[declaration of independence|Declaración de Independencia]].', fa: 'خبر بزرگ از فیلادلفیا! در ۴ جولای، کانگرس [[declaration of independence|اعلامیهٔ استقلال]] را تصویب کرد.' },
        { en: 'Thomas Jefferson wrote most of it. It lists complaints against the king.', es: 'Thomas Jefferson escribió la mayor parte. Hace una lista de quejas contra el rey.', fa: 'بیشتر آن را تامس جفرسن نوشت. فهرستی از شکایت‌ها علیه پادشاه دارد.' },
        { en: 'It names [[natural rights|natural rights]]: life, liberty and the pursuit of happiness.', es: 'Nombra los [[natural rights|derechos naturales]]: la vida, la libertad y la búsqueda de la felicidad.', fa: 'از [[natural rights|حقوق طبیعی]] نام می‌برد: زندگی، آزادی و تلاش برای خوشبختی.' },
        { en: 'Government needs the [[consent of the governed|consent of the governed]]: its power comes from the people.', es: 'El gobierno necesita el [[consent of the governed|consentimiento de los gobernados]]: su poder viene del pueblo.', fa: 'حکومت به [[consent of the governed|رضایت مردم]] نیاز دارد: قدرتش از مردم می‌آید.' },
        { en: 'But these rights did not reach enslaved people, women or Native peoples.', es: 'Pero estos derechos no llegaron a los esclavizados, a las mujeres ni a los pueblos indígenas.', fa: 'اما این حقوق به بردگان، زنان و مردمان بومی نرسید.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'The Declaration says government needs the "consent of the governed." What does that mean?', es: 'La Declaración dice que el gobierno necesita el «consentimiento de los gobernados». ¿Qué significa?', fa: 'اعلامیه می‌گوید حکومت به «رضایت مردم» نیاز دارد. این یعنی چه؟' },
        choices: [
          { ok: true, t: { en: 'Its power comes from the people', es: 'Su poder viene del pueblo', fa: 'قدرتش از مردم می‌آید' },
            why: { en: 'Yes! The people agree to be ruled. A fair government gets its power from them.', es: '¡Sí! El pueblo acepta ser gobernado. Un gobierno justo recibe su poder de él.', fa: 'بله! مردم قبول می‌کنند که اداره شوند. حکومت عادل قدرتش را از آن‌ها می‌گیرد.' } },
          { t: { en: 'Its power comes from the king', es: 'Su poder viene del rey', fa: 'قدرتش از پادشاه می‌آید' },
            why: { en: 'No. The Declaration broke away from the king. It says power comes from the people.', es: 'No. La Declaración se separó del rey. Dice que el poder viene del pueblo.', fa: 'نه. اعلامیه از پادشاه جدا شد. می‌گوید قدرت از مردم می‌آید.' } },
          { t: { en: 'Its power comes from the biggest army', es: 'Su poder viene del ejército más grande', fa: 'قدرتش از بزرگ‌ترین اردو می‌آید' },
            why: { en: 'No. Power by force is not consent. Consent means the people agree.', es: 'No. El poder por la fuerza no es consentimiento. Consentir quiere decir que el pueblo está de acuerdo.', fa: 'نه. قدرت با زور رضایت نیست. رضایت یعنی مردم قبول دارند.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 14, y: 8, text: { en: 'PALACE GREEN · The king\'s governor lived in the Palace, at the north end.', es: 'PALACE GREEN · El gobernador del rey vivía en el Palacio, en el extremo norte.', fa: 'سبزهٔ قصر · والی پادشاه در قصر، در سر شمالی، زندگی می‌کرد.' } },
    { x: 25, y: 7, text: { en: 'THE CAPITOL · WILLIAMSBURG · 1776 · Virginia\'s lawmakers meet here, at the east end of the street.', es: 'EL CAPITOLIO · WILLIAMSBURG · 1776 · Los legisladores de Virginia se reúnen aquí, al este de la calle.', fa: 'کاپیتول · ویلیامزبرگ · ۱۷۷۶ · قانون‌گذاران ویرجینیا اینجا، در سر شرقی سرک، جمع می‌شوند.' } }
  ],

  /* the quest: Jonah the town crier (gold !) south of the market -> Polly in the garden, south-west -> the Ink Thief
     tore the Declaration of Rights into 3 pieces: at the Capitol (east), at the print shop (north side of the street),
     at the Governor's Palace (north). Then catch the thief. */
  quest: {
    stat: 'loc',
    title: { en: 'The Torn Declaration', es: 'La declaración rota', fa: 'اعلامیهٔ پاره‌شده' },
    giver: {
      x: 19, y: 18,
      name: { en: 'Jonah', es: 'Jonás', fa: 'یونس' },
      role: { en: 'Town crier', es: 'Pregonero', fa: 'جارچی شهر' },
      look: { skin: 3, hair: '#2a1a10', shirt: '#8a2a3a', pants: '#2a2a2a', hat: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'Hear ye! I am the town crier. I read the news out loud.', es: '¡Oigan todos! Soy el pregonero. Leo las noticias en voz alta.', fa: 'بشنوید! من جارچی شهر هستم. خبرها را با آواز بلند می‌خوانم.' },
        { en: 'Today I must read Virginia\'s Declaration of Rights to the town.', es: 'Hoy debo leerle al pueblo la Declaración de Derechos de Virginia.', fa: 'امروز باید اعلامیهٔ حقوق ویرجینیا را برای مردم شهر بخوانم.' },
        { en: 'But the Grump\'s Ink Thief tore it up! Polly the gardener saw it.', es: '¡Pero el Ladrón de Tinta del Gruñón la rompió! Polly, la jardinera, lo vio.', fa: 'اما دزد رنگ غرغرو آن را پاره کرد! پالی باغبان آن را دید.' }
      ],
      wait: { en: 'Polly works in the garden, south-west of the market.', es: 'Polly trabaja en el huerto, al suroeste del mercado.', fa: 'پالی در باغچه، جنوب غرب بازار، کار می‌کند.' },
      thanks: { en: 'The whole paper! Hear ye: power comes from the people! Thank you!', es: '¡El documento completo! Oigan todos: ¡el poder viene del pueblo! ¡Gracias!', fa: 'سند کامل! بشنوید: قدرت از مردم می‌آید! تشکر!' }
    },
    contact: {
      x: 4, y: 19,
      name: { en: 'Polly', es: 'Polly', fa: 'پالی' },
      role: { en: 'Gardener', es: 'Jardinera', fa: 'باغبان' },
      look: { skin: 0, hair: '#c89a50', shirt: '#4a7a3a', pants: '#5a3a22', hat: '#e8c84a', style: 'long' },
      lines: [
        { en: 'I saw the Ink Thief run by! It tore the paper into 3 pieces.', es: '¡Vi pasar al Ladrón de Tinta! Rompió el documento en 3 pedazos.', fa: 'دزد رنگ را دیدم که دوید! سند را ۳ تکه کرد.' },
        { en: 'It dropped them in famous places in town.', es: 'Los dejó caer en lugares famosos del pueblo.', fa: 'تکه‌ها را در جاهای مشهور شهر انداخت.' },
        { en: 'Follow the clues to find every piece. Then catch the thief!', es: 'Sigue las pistas para encontrar cada pedazo. ¡Luego atrapa al ladrón!', fa: 'سرنخ‌ها را دنبال کن تا هر تکه را پیدا کنی. بعد دزد را بگیر!' }
      ]
    },
    action: {
      type: 'chase',
      at: [29, 20],
      hops: [[17, 6], [3, 12]],
      name: { en: 'The Ink Thief', es: 'El Ladrón de Tinta', fa: 'دزد رنگ' },
      taunt: { en: 'Hee hee! The Grump says rights are boring. So I tore them up!', es: '¡Ji ji! El Gruñón dice que los derechos son aburridos. ¡Por eso los rompí!', fa: 'هی هی! غرغرو می‌گوید حقوق خسته‌کن است. پس آن را پاره کردم!' },
      clues: [
        { t: { en: 'Piece 1 is where Virginia\'s elected lawmakers meet: the Capitol, at the east end of the street.', es: 'El pedazo 1 está donde se reúnen los legisladores elegidos de Virginia: el Capitolio, al este de la calle.', fa: 'تکهٔ ۱ جایی است که قانون‌گذاران انتخاب‌شدهٔ ویرجینیا جمع می‌شوند: کاپیتول، در سر شرقی سرک.' },
          zones: [{ x: 24, y: 9, w: 2, h: 5 }],
          noBy: [{ x: 12, y: 4, w: 8, h: 1, t: { en: 'This is the Governor\'s Palace. The king\'s governor lived here. Lawmakers meet at the Capitol.', es: 'Este es el Palacio del Gobernador. Aquí vivía el gobernador del rey. Los legisladores se reúnen en el Capitolio.', fa: 'این قصر والی است. والی پادشاه اینجا زندگی می‌کرد. قانون‌گذاران در کاپیتول جمع می‌شوند.' } }],
          found: { en: 'Piece 1, at the Capitol! The Declaration of Rights was adopted here.', es: '¡El pedazo 1, en el Capitolio! Aquí se aprobó la Declaración de Derechos.', fa: 'تکهٔ ۱، در کاپیتول! اعلامیهٔ حقوق اینجا تصویب شد.' } },
        { t: { en: 'Piece 2 is where news and laws are printed for everyone to read.', es: 'El pedazo 2 está donde se imprimen las noticias y las leyes para que todos las lean.', fa: 'تکهٔ ۲ جایی است که خبرها و قانون‌ها برای خواندن همه چاپ می‌شوند.' },
          zones: [{ x: 6, y: 10, w: 3, h: 1 }],
          noBy: [{ x: 2, y: 10, w: 3, h: 1, t: { en: 'This is the wig shop. He makes wigs, not newspapers. Try the shop with the blue roof.', es: 'Esta es la tienda de pelucas. Él hace pelucas, no periódicos. Prueba la tienda del techo azul.', fa: 'این دکان کلاه‌گیس است. او کلاه‌گیس می‌سازد، نه روزنامه. دکان بام آبی را ببین.' } }],
          found: { en: 'Piece 2, at the print shop! A [[free press|free press]] lets people share ideas.', es: '¡El pedazo 2, en la imprenta! Una [[free press|prensa libre]] deja que la gente comparta ideas.', fa: 'تکهٔ ۲، در چاپخانه! [[free press|مطبوعات آزاد]] به مردم اجازه می‌دهد فکرهای خود را شریک کنند.' } },
        { t: { en: 'Piece 3 is where the king\'s governor lived, at the north end of the Palace Green.', es: 'El pedazo 3 está donde vivía el gobernador del rey, al norte del Palace Green.', fa: 'تکهٔ ۳ جایی است که والی پادشاه زندگی می‌کرد، در سر شمالی سبزهٔ قصر.' },
          zones: [{ x: 12, y: 4, w: 8, h: 1 }],
          noBy: [{ x: 20, y: 10, w: 3, h: 1, t: { en: 'This is a tavern. People eat and talk here. Walk north up the Palace Green.', es: 'Esta es una taberna. Aquí la gente come y habla. Camina al norte por el Palace Green.', fa: 'این یک سرای است. مردم اینجا می‌خورند و گپ می‌زنند. از سبزهٔ قصر به شمال برو.' } }],
          found: { en: 'Piece 3, at the Palace! The king\'s governor ran away in 1775.', es: '¡El pedazo 3, en el Palacio! El gobernador del rey huyó en 1775.', fa: 'تکهٔ ۳، در قصر! والی پادشاه در سال ۱۷۷۵ فرار کرد.' } }
      ],
      win: { en: 'Caught you! The thief drops the pieces. The Declaration of Rights is whole again!', es: '¡Te atrapé! El ladrón suelta los pedazos. ¡La Declaración de Derechos está completa otra vez!', fa: 'گرفتمت! دزد تکه‌ها را می‌اندازد. اعلامیهٔ حقوق دوباره کامل شد!' },
      item: { icon: '📜', name: { en: 'The Declaration of Rights', es: 'La Declaración de Derechos', fa: 'اعلامیهٔ حقوق' } }
    }
  },

  scraps: [[1, 1], [30, 5], [1, 20]],
  smudges: [[11, 19], [27, 5]],

  challenge: {
    at: [20, 13],
    type: 'route', // in the world; the card version (order) is the fallback
    // Magna Carta (south of the market) -> English Bill of Rights (the royal Palace) -> Virginia Declaration of Rights
    // (the Capitol) -> Declaration of Independence (the print shop: news from Philadelphia) -> Articles (by the tavern)
    spots: [[12, 18], [18, 4], [25, 9], [9, 10], [23, 10]],
    stat: 'loc',
    title: { en: 'The road of rights', es: 'El camino de los derechos', fa: 'راه حقوق' },
    intro: { en: 'The Grump mixed up the road of rights! Walk to each paper in time order.',
      es: '¡El Gruñón revolvió el camino de los derechos! Camina a cada documento en orden de tiempo.',
      fa: 'غرغرو راه حقوق را درهم کرد! به ترتیب زمان پیش هر سند برو.' },
    items: [
      { icon: '📜', t: { en: '1215 · Magna Carta · even the king must obey the law', es: '1215 · Carta Magna · hasta el rey debe obedecer la ley', fa: '۱۲۱۵ · ماگنا کارتا · حتی پادشاه باید از قانون اطاعت کند' } },
      { icon: '👑', t: { en: '1689 · English Bill of Rights · more limits on the king', es: '1689 · Declaración de Derechos inglesa · más límites al rey', fa: '۱۶۸۹ · منشور حقوق انگلستان · حدهای بیشتر بر پادشاه' } },
      { icon: '🏛️', t: { en: 'June 1776 · Virginia Declaration of Rights · power comes from the people', es: 'Junio de 1776 · Declaración de Derechos de Virginia · el poder viene del pueblo', fa: 'جون ۱۷۷۶ · اعلامیهٔ حقوق ویرجینیا · قدرت از مردم می‌آید' } },
      { icon: '🔔', t: { en: 'July 4, 1776 · Declaration of Independence · natural rights and consent', es: '4 de julio de 1776 · Declaración de Independencia · derechos naturales y consentimiento', fa: '۴ جولای ۱۷۷۶ · اعلامیهٔ استقلال · حقوق طبیعی و رضایت مردم' } },
      { icon: '🤝', t: { en: '1777 · Articles of Confederation · first US plan, a weak national government', es: '1777 · Artículos de la Confederación · primer plan de EE. UU., un gobierno nacional débil', fa: '۱۷۷۷ · مواد کنفدراسیون · اولین طرح امریکا، یک حکومت ملی ضعیف' } }
    ],
    why: { en: 'Each paper grew from the one before it. Go in time order: 1215, 1689, June 1776, July 1776, 1777.',
      es: 'Cada documento nació del anterior. Ve en orden de tiempo: 1215, 1689, junio de 1776, julio de 1776, 1777.',
      fa: 'هر سند از سند پیش از خود پیدا شد. به ترتیب زمان برو: ۱۲۱۵، ۱۶۸۹، جون ۱۷۷۶، جولای ۱۷۷۶، ۱۷۷۷.' },
    success: { en: 'The road of rights is in order! Limits on kings led to rule by the people.', es: '¡El camino de los derechos está en orden! Los límites a los reyes llevaron al gobierno del pueblo.', fa: 'راه حقوق مرتب شد! حد گذاشتن بر پادشاهان به حکومت مردم رسید.' }
  },

  boss: {
    at: [29, 17],
    stat: 'loc',
    need: 3,
    name: { en: 'The Crowned Grump', es: 'El Gruñón Coronado', fa: 'غرغروی تاج‌دار' },
    appear: { en: 'The Crowned Grump is hiding in the fog by the pond, south-east of town!', es: '¡El Gruñón Coronado se esconde en la niebla junto al estanque, al sureste del pueblo!', fa: 'غرغروی تاج‌دار در مه کنار حوض، جنوب شرق شهر، پنهان است!' },
    taunt: { en: 'Bah! I wear a crown, so I can do anything. Laws are for other people!', es: '¡Bah! Llevo corona, así que puedo hacer lo que quiera. ¡Las leyes son para los demás!', fa: 'بَه! من تاج دارم، پس هر کاری می‌توانم. قانون برای دیگران است!' },
    win: { en: 'The fog lifts over Williamsburg. Charter page 1.3 floats down into your hands!', es: 'La niebla se va de Williamsburg. ¡La página 1.3 de la carta cae en tus manos!', fa: 'مه از روی ویلیامزبرگ کنار می‌رود. صفحهٔ ۱.۳ منشور به دستت می‌افتد!' },
    questions: [
      { q: { en: 'What big idea did Magna Carta set down in 1215?', es: '¿Qué gran idea dejó escrita la Carta Magna en 1215?', fa: 'ماگنا کارتا در سال ۱۲۱۵ کدام فکر بزرگ را نوشت؟' },
        choices: [
          { en: 'Even the king must obey the law', es: 'Hasta el rey debe obedecer la ley', fa: 'حتی پادشاه باید از قانون اطاعت کند' },
          { en: 'The people should elect their king', es: 'El pueblo debe elegir a su rey', fa: 'مردم باید پادشاه خود را انتخاب کنند' },
          { en: 'Each town may print its own money', es: 'Cada pueblo puede hacer su propio dinero', fa: 'هر شهر می‌تواند پول خود را چاپ کند' },
          { en: 'Only priests may write the new laws', es: 'Solo los sacerdotes pueden escribir las leyes', fa: 'فقط روحانیان می‌توانند قانون نو بنویسند' }],
        answer: 0,
        why: { en: 'Magna Carta, England, 1215: the king was not above the law.', es: 'Carta Magna, Inglaterra, 1215: el rey no estaba por encima de la ley.', fa: 'ماگنا کارتا، انگلستان، ۱۲۱۵: پادشاه بالاتر از قانون نبود.' } },
      { q: { en: 'What did the English Bill of Rights of 1689 do?', es: '¿Qué hizo la Declaración de Derechos inglesa de 1689?', fa: 'منشور حقوق انگلستان در سال ۱۶۸۹ چه کرد؟' },
        choices: [
          { en: 'Limited the king, gave Parliament power', es: 'Limitó al rey y dio poder al Parlamento', fa: 'پادشاه را محدود کرد، به پارلمان قدرت داد' },
          { en: 'Made the king the head of every court', es: 'Hizo al rey jefe de todos los tribunales', fa: 'پادشاه را رئیس هر محکمه ساخت' },
          { en: 'Set the American colonies free of England', es: 'Liberó a las colonias americanas de Inglaterra', fa: 'مستعمره‌های امریکا را از انگلستان آزاد کرد' },
          { en: 'Ended all taxes in England for good', es: 'Terminó para siempre todos los impuestos', fa: 'همهٔ مالیه‌ها را در انگلستان برای همیشه ختم کرد' }],
        answer: 0,
        why: { en: 'In 1689 the English Bill of Rights limited the monarch. Parliament got more power, and people got some rights.', es: 'En 1689 la Declaración de Derechos inglesa limitó al monarca. El Parlamento ganó poder y el pueblo, algunos derechos.', fa: 'در سال ۱۶۸۹ منشور حقوق انگلستان پادشاه را محدود کرد. پارلمان قدرت بیشتر و مردم بعضی حقوق گرفتند.' } },
      { q: { en: 'What was Virginia\'s House of Burgesses, from 1619?', es: '¿Qué era la Cámara de los Burgueses de Virginia, de 1619?', fa: 'مجلس بورجس‌های ویرجینیا، از سال ۱۶۱۹، چه بود؟' },
        choices: [
          { en: 'The first elected lawmakers in the colonies', es: 'Los primeros legisladores elegidos en las colonias', fa: 'اولین قانون‌گذاران انتخاب‌شده در مستعمره‌ها' },
          { en: 'The house where the king\'s governor lived', es: 'La casa donde vivía el gobernador del rey', fa: 'خانه‌ای که والی پادشاه در آن زندگی می‌کرد' },
          { en: 'The first court of judges in all the colonies', es: 'El primer tribunal de jueces en todas las colonias', fa: 'اولین محکمهٔ قاضیان در همهٔ مستعمره‌ها' },
          { en: 'A school for the sons of rich planters', es: 'Una escuela para los hijos de hacendados ricos', fa: 'یک مکتب برای پسران زمین‌داران پولدار' }],
        answer: 0,
        why: { en: 'The House of Burgesses began in 1619. It was the first elected lawmaking body in the colonies.', es: 'La Cámara de los Burgueses empezó en 1619. Fue el primer cuerpo elegido para hacer leyes en las colonias.', fa: 'مجلس بورجس‌ها در سال ۱۶۱۹ شروع شد. اولین گروه انتخاب‌شدهٔ قانون‌ساز در مستعمره‌ها بود.' } },
      { q: { en: 'Which paper did Virginia adopt at the Capitol in Williamsburg in June 1776?', es: '¿Qué documento aprobó Virginia en el Capitolio de Williamsburg en junio de 1776?', fa: 'ویرجینیا در جون ۱۷۷۶ در کاپیتول ویلیامزبرگ کدام سند را تصویب کرد؟' },
        choices: [
          { en: 'The Virginia Declaration of Rights', es: 'La Declaración de Derechos de Virginia', fa: 'اعلامیهٔ حقوق ویرجینیا' },
          { en: 'The Articles of Confederation', es: 'Los Artículos de la Confederación', fa: 'مواد کنفدراسیون' },
          { en: 'The English Bill of Rights', es: 'La Declaración de Derechos inglesa', fa: 'منشور حقوق انگلستان' },
          { en: 'The American Declaration of Independence', es: 'La Declaración de Independencia de EE. UU.', fa: 'اعلامیهٔ استقلال امریکا' }],
        answer: 0,
        why: { en: 'George Mason wrote most of it. Virginia adopted it in Williamsburg in June 1776.', es: 'George Mason escribió la mayor parte. Virginia la aprobó en Williamsburg en junio de 1776.', fa: 'بیشتر آن را جورج میسن نوشت. ویرجینیا آن را در جون ۱۷۷۶ در ویلیامزبرگ تصویب کرد.' } },
      { q: { en: 'The Declaration of Independence names natural rights. Which ones?', es: 'La Declaración de Independencia nombra derechos naturales. ¿Cuáles?', fa: 'اعلامیهٔ استقلال از حقوق طبیعی نام می‌برد. کدام‌ها؟' },
        choices: [
          { en: 'Life, liberty and the pursuit of happiness', es: 'La vida, la libertad y la búsqueda de la felicidad', fa: 'زندگی، آزادی و تلاش برای خوشبختی' },
          { en: 'Land, money and a seat in Parliament', es: 'Tierra, dinero y un puesto en el Parlamento', fa: 'زمین، پول و یک چوکی در پارلمان' },
          { en: 'Food, a warm house and a free school for all', es: 'Comida, una casa cálida y escuela gratis para todos', fa: 'غذا، یک خانهٔ گرم و مکتب مفت برای همه' },
          { en: 'A crown, a castle and a royal army', es: 'Una corona, un castillo y un ejército real', fa: 'یک تاج، یک قلعه و یک اردوی شاهی' }],
        answer: 0,
        why: { en: 'Thomas Jefferson wrote most of it. Natural rights belong to every person. No government gives them.', es: 'Thomas Jefferson escribió la mayor parte. Los derechos naturales son de cada persona. Ningún gobierno los da.', fa: 'بیشتر آن را تامس جفرسن نوشت. حقوق طبیعی مال هر انسان است. هیچ حکومتی آن را نمی‌دهد.' } },
      { q: { en: 'What does "consent of the governed" mean?', es: '¿Qué quiere decir «consentimiento de los gobernados»?', fa: '«رضایت مردم» یعنی چه؟' },
        choices: [
          { en: 'Government gets its power from the people', es: 'El gobierno recibe su poder del pueblo', fa: 'حکومت قدرتش را از مردم می‌گیرد' },
          { en: 'The king gets all his power from God alone', es: 'El rey recibe todo su poder solo de Dios', fa: 'پادشاه همهٔ قدرتش را فقط از خدا می‌گیرد' },
          { en: 'Judges get their power from the army', es: 'Los jueces reciben su poder del ejército', fa: 'قاضیان قدرت‌شان را از اردو می‌گیرند' },
          { en: 'Governors get their power from the rich', es: 'Los gobernadores reciben su poder de los ricos', fa: 'والیان قدرت‌شان را از پولدارها می‌گیرند' }],
        answer: 0,
        why: { en: 'The people agree to be ruled. A fair government\'s power comes from them.', es: 'El pueblo acepta ser gobernado. El poder de un gobierno justo viene de él.', fa: 'مردم قبول می‌کنند که اداره شوند. قدرت حکومت عادل از آن‌ها می‌آید.' } },
      { q: { en: 'What were the Articles of Confederation?', es: '¿Qué eran los Artículos de la Confederación?', fa: 'مواد کنفدراسیون چه بود؟' },
        choices: [
          { en: 'The first US plan, with a weak government', es: 'El primer plan de EE. UU., con un gobierno débil', fa: 'اولین طرح امریکا، با یک حکومت ضعیف' },
          { en: 'A list of complaints against the king', es: 'Una lista de quejas contra el rey', fa: 'فهرست شکایت‌ها علیه پادشاه' },
          { en: 'The first US plan, with a king who ruled for life', es: 'El primer plan de EE. UU., con un rey de por vida', fa: 'اولین طرح امریکا، با پادشاهی که تا آخر عمر حکومت می‌کرد' },
          { en: 'An English law that limited the king', es: 'Una ley inglesa que limitó al rey', fa: 'یک قانون انگلیسی که پادشاه را محدود کرد' }],
        answer: 0,
        why: { en: 'Written in 1777, in effect in 1781. The states kept most power, so the national government was weak.', es: 'Se escribieron en 1777 y rigieron desde 1781. Los estados guardaron casi todo el poder: el gobierno nacional era débil.', fa: 'در سال ۱۷۷۷ نوشته شد و از ۱۷۸۱ اجرا شد. ایالت‌ها بیشتر قدرت را داشتند، پس حکومت ملی ضعیف بود.' } },
      { q: { en: 'In 1776, these new rights did NOT reach which people?', es: 'En 1776, ¿a quiénes NO llegaron estos nuevos derechos?', fa: 'در سال ۱۷۷۶، این حقوق نو به کدام مردم نرسید؟' },
        choices: [
          { en: 'Enslaved people, women and Native peoples', es: 'Los esclavizados, las mujeres y los pueblos indígenas', fa: 'بردگان، زنان و مردمان بومی' },
          { en: 'White men who owned farms and land in Virginia', es: 'Los hombres blancos con granjas y tierras en Virginia', fa: 'مردان سفیدپوست که در ویرجینیا مزرعه و زمین داشتند' },
          { en: 'The lawmakers who wrote the papers', es: 'Los legisladores que escribieron los documentos', fa: 'قانون‌گذارانی که این سندها را نوشتند' },
          { en: 'Printers, farmers and shop owners', es: 'Los impresores, los granjeros y los tenderos', fa: 'چاپگران، دهقانان و دکانداران' }],
        answer: 0,
        why: { en: 'The papers said all men are created equal. But enslaved people, women and Native peoples were left out.', es: 'Los documentos decían que todos los hombres son creados iguales. Pero los esclavizados, las mujeres y los indígenas quedaron fuera.', fa: 'سندها می‌گفتند همهٔ انسان‌ها برابر آفریده شده‌اند. اما بردگان، زنان و مردمان بومی کنار ماندند.' } }
    ]
  },

  learned: [
    { en: '[[magna carta|Magna Carta]] (1215) and the English [[bill of rights|Bill of Rights]] (1689) put limits on kings.', es: 'La [[magna carta|Carta Magna]] (1215) y la [[bill of rights|Declaración de Derechos]] inglesa (1689) pusieron límites a los reyes.', fa: '[[magna carta|ماگنا کارتا]] (۱۲۱۵) و [[bill of rights|منشور حقوق]] انگلستان (۱۶۸۹) بر پادشاهان حد گذاشتند.' },
    { en: 'In 1776, Virginia\'s [[declaration of rights|Declaration of Rights]] and the [[declaration of independence|Declaration of Independence]] said power comes from the people.', es: 'En 1776, la [[declaration of rights|Declaración de Derechos]] de Virginia y la [[declaration of independence|Declaración de Independencia]] dijeron que el poder viene del pueblo.', fa: 'در سال ۱۷۷۶، [[declaration of rights|اعلامیهٔ حقوق]] ویرجینیا و [[declaration of independence|اعلامیهٔ استقلال]] گفتند قدرت از مردم می‌آید.' },
    { en: 'The [[articles of confederation|Articles of Confederation]] were the first US plan, with a weak national government.', es: 'Los [[articles of confederation|Artículos de la Confederación]] fueron el primer plan de EE. UU., con un gobierno nacional débil.', fa: '[[articles of confederation|مواد کنفدراسیون]] اولین طرح امریکا بود، با یک حکومت ملی ضعیف.' }
  ],
  reflect: {
    q: { en: 'Which right from these papers matters most to you today? Why?', es: '¿Qué derecho de estos documentos es el más importante para ti hoy? ¿Por qué?', fa: 'کدام حق از این سندها امروز برای تو از همه مهم‌تر است؟ چرا؟' },
    starter: { en: 'The right that matters most to me is', es: 'El derecho más importante para mí es', fa: 'حقی که برای من از همه مهم‌تر است' }
  }
};
