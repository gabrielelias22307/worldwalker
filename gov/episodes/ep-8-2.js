/* CIVICWALKER · Episode 8.2 · Foreign Policy and National Interests (also the course's "US Foreign Policy" lesson)
   New York City, the United Nations headquarters today. North is up. West: apartment blocks and First Avenue, with
   the row of member flags along the plaza edge (the five flag spots of the charter stone stand in that row). North:
   the garden with peace sculptures, by the river. Middle: the visitor plaza and the General Assembly building.
   South: the tall Secretariat building, the library in the south-west corner, a fountain, the south lawn.
   East: the Conference building on the riverside walk, the East River and a ferry pier.
   The charter stone gives an invented world problem (the US and its friendly neighbor Marenko must share a river)
   and asks the student to plant the flag on the right tool of foreign policy (a treaty), with one reason why it
   fits and one reason about who makes it (the President) and who approves it (two thirds of the Senate). */
window.EPISODE = {
  id: '8.2',
  realm: 8,
  sol: 'GOVT',
  title: { en: 'Foreign Policy and National Interests', es: 'Política exterior e intereses nacionales', fa: 'سیاست خارجی و منافع ملی' },
  weather: { sky: 'clear', time: 'sunset' },
  place: { en: 'The United Nations, New York, today', es: 'Las Naciones Unidas, Nueva York, hoy', fa: 'سازمان ملل متحد، نیویارک، امروز' },
  intro: [
    { en: 'The Grump tore the page about how the US deals with other countries.',
      es: 'El Gruñón rompió la página sobre cómo EE. UU. trata con otros países.',
      fa: 'غرغرو صفحهٔ «امریکا چطور با کشورهای دیگر رابطه دارد» را پاره کرد.' },
    { en: 'Talk to the 3 people here, then fix the charter stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra de la carta.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ منشور را درست کن.' }
  ],
  /* cut scenes: New York on the world map (no timeline in this game) */
  scenes: {
    at: [-73.968, 40.749],
    start: [
      { en: 'The United Nations meets here in New York, by the East River.',
        es: 'Las Naciones Unidas se reúnen aquí en Nueva York, junto al río Este.',
        fa: 'سازمان ملل متحد اینجا در نیویارک، کنار دریای شرقی، جلسه می‌کند.' },
      { en: 'It began in 1945, after World War II, to help keep peace.',
        es: 'Comenzó en 1945, después de la Segunda Guerra Mundial, para ayudar a mantener la paz.',
        fa: 'در سال ۱۹۴۵، بعد از جنگ جهانی دوم، برای کمک به حفظ صلح شروع شد.' },
      { en: 'Today 193 countries are members. Their flags fly along First Avenue.',
        es: 'Hoy 193 países son miembros. Sus banderas ondean en la Primera Avenida.',
        fa: 'امروز ۱۹۳ کشور عضو هستند. بیرق‌هایشان در سرک اول بلند است.' }
    ],
    page: { en: 'NATO began in 1949. Its members promise to defend each other.',
      es: 'La OTAN comenzó en 1949. Sus miembros prometen defenderse unos a otros.',
      fa: 'ناتو در سال ۱۹۴۹ شروع شد. عضوهایش وعده می‌دهند از همدیگر دفاع کنند.' },
    guess: {
      q: { en: 'Who do you think leads US foreign policy?', es: '¿Quién crees que dirige la política exterior de EE. UU.?', fa: 'فکر می‌کنی کی سیاست خارجی امریکا را رهبری می‌کند؟' },
      choices: [
        { t: { en: '🏛️ The President', es: '🏛️ El presidente', fa: '🏛️ رئیس جمهور' }, ok: true },
        { t: { en: '⚖️ The Supreme Court', es: '⚖️ La Corte Suprema', fa: '⚖️ ستره محکمه' } }
      ],
      why: { en: 'The President leads, with help from the Secretary of State. Congress has big powers too.', es: 'El presidente dirige, con ayuda del secretario de Estado. El Congreso también tiene grandes poderes.', fa: 'رئیس جمهور رهبری می‌کند، با کمک وزیر خارجه. کانگرس هم قدرت‌های بزرگ دارد.' }
    },
    next: {
      q: { en: 'Next: the Port of Virginia. A tariff taxes imports. What happens to prices?', es: 'Ahora: el puerto de Virginia. Un arancel es un impuesto a lo importado. ¿Qué pasa con los precios?', fa: 'بعدی: بندر ویرجینیا. تعرفه مالیه بر کالای وارداتی است. با قیمت‌ها چه می‌شود؟' },
      choices: [
        { t: { en: '📈 They often go up', es: '📈 Muchas veces suben', fa: '📈 اکثراً بالا می‌روند' }, ok: true },
        { t: { en: '📉 They always go down', es: '📉 Siempre bajan', fa: '📉 همیشه پایین می‌آیند' } }
      ],
      why: { en: 'Importers pay the tariff. They often pass the cost on to the people who buy.', es: 'Los importadores pagan el arancel. Muchas veces pasan ese costo a quienes compran.', fa: 'واردکننده‌ها تعرفه را می‌پردازند. اکثراً این خرچ را بالای خریداران می‌اندازند.' }
    }
  },
  /* houses: who lives behind each door on the west side of First Avenue */
  houses: [
    { at: [2, 2], name: { en: 'Grandma Ruth', es: 'Abuela Ruth', fa: 'مادرکلان روت' },
      look: { skin: 1, hair: '#e0e0e0', shirt: '#7a9a5a', pants: '#3a3a4a', style: 'bun' },
      lines: [
        { en: 'When I was young, I joined the Peace Corps. I taught in a village school.', es: 'De joven entré al Cuerpo de Paz. Enseñé en una escuela de un pueblo.', fa: 'وقتی جوان بودم، در سپاه صلح شامل شدم. در مکتب یک قریه درس دادم.' },
        { en: 'That was [[foreign aid|foreign aid]]: the US sending help to another country.', es: 'Eso era [[foreign aid|ayuda exterior]]: EE. UU. enviando ayuda a otro país.', fa: 'این [[foreign aid|کمک خارجی]] بود: امریکا به یک کشور دیگر کمک می‌فرستد.' },
        { en: 'Aid can be food, money, doctors or teachers. Friends help friends.', es: 'La ayuda puede ser comida, dinero, médicos o maestros. Los amigos se ayudan.', fa: 'کمک می‌تواند غذا، پول، داکتر یا معلم باشد. دوستان به دوستان کمک می‌کنند.' }
      ] },
    { at: [2, 15], name: { en: 'Mr. Haddad', es: 'Señor Haddad', fa: 'آقای حداد' },
      look: { skin: 3, hair: '#2a1a10', shirt: '#b0602a', pants: '#2a2a3a', style: 'short' },
      lines: [
        { en: 'I sell spices and tea from many countries in my little shop.', es: 'En mi pequeña tienda vendo especias y té de muchos países.', fa: 'در دکان کوچکم مساله و چای از کشورهای زیاد می‌فروشم.' },
        { en: 'Trade agreements make it easier for countries to buy and sell.', es: 'Los acuerdos comerciales facilitan que los países compren y vendan.', fa: 'موافقت‌نامه‌های تجارتی خرید و فروش را بین کشورها آسان‌تر می‌کنند.' },
        { en: 'But [[sanctions|sanctions]] can stop some goods. They limit trade to pressure a country.', es: 'Pero las [[sanctions|sanciones]] pueden frenar algunos productos. Limitan el comercio para presionar a un país.', fa: 'اما [[sanctions|تحریم‌ها]] بعضی کالاها را بند می‌کنند. تجارت را محدود می‌کنند تا بالای یک کشور فشار بیاورند.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens. North is up.
     West (x 1-4): apartment blocks (R roofs over h walls) with two homes. First Avenue (l, x 5-7) runs north-south;
     the five charter-stone flags stand at x 7, the row of member flags.
     North (y 1-6): the garden with trees (T), flowers (,) and peace sculptures (r).
     Middle: the visitor plaza (l), the General Assembly building (J, x 10-16), the Conference building (J, x 22-25).
     South: the tall Secretariat (U, x 18-20), the library (J, south-west), a fountain (O), the south lawn.
     East: the riverside walk (x 26), the East River (~ and deep =) and the ferry pier (k). */
  map: [
    'UUUUUUUUUUUUUUUUUUUUUUUUUUU~~===',
    'URRR.ll.T..,,...T....,,.T..~~===',
    'Uhdh.ll..,.....T.....T.....~~===',
    'U....ll.....,r........,....~~===',
    'U.T..ll..T.......,.T...r...~~===',
    'U....ll....,,.....,,.......~~===',
    'U.x..ll..x.................~~===',
    'U....llllllllllllllllllllll~~===',
    'U....lllllJJJJJJJlllllJJJJl~~===',
    'U....lllllJJJJJJJlllllJJJJl~~===',
    'U....lllllJJJJJJJlllllJJJJl~~===',
    'U....lllllJJJJJJJlllllJJJJl~~===',
    'U.T..lllllllllllllUUUlJJJJl~~===',
    'U....llll.O.......UUUlJJJJl~~===',
    'URRR.lll..........UUUl.....~~===',
    'Uhdh.lll..T.......UUUl.....~~===',
    'U....lllJJJ.......UUUl...x.~~===',
    'U....lllJJJ.......UUUl....lkkk==',
    'U....lllJJJ.......UUUl.....~~===',
    'U....lll...................~~===',
    'U....lll..T.....,,......T..~~===',
    'UUUUUUUUUUUUUUUUUUUUUUUUUUU~~==='
  ],
  start: [8, 7],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [14, 2], at: [14, 5], decor: 'coinold',
      clue: { en: 'From this note, walk 3 steps south, into the garden.', es: 'Desde esta nota, camina 3 pasos al sur, hacia el jardín.', fa: 'از این یادداشت، ۳ قدم به جنوب برو، داخل باغ.' },
      text: { en: 'A peace bell hangs at the UN. People from many countries gave coins to make it.', es: 'Una campana de la paz cuelga en la ONU. Gente de muchos países dio monedas para hacerla.', fa: 'یک زنگ صلح در سازمان ملل آویزان است. مردم کشورهای زیاد برای ساختنش سکه دادند.' } },
    { clueAt: [12, 19], at: [16, 19], decor: 'feather',
      clue: { en: 'From this note, walk 4 steps east, across the south lawn.', es: 'Desde esta nota, camina 4 pasos al este, por el césped del sur.', fa: 'از این یادداشت، ۴ قدم به شرق برو، از چمن جنوبی بگذر.' },
      text: { en: 'The UN has six official languages: Arabic, Chinese, English, French, Russian and Spanish.', es: 'La ONU tiene seis idiomas oficiales: árabe, chino, inglés, francés, ruso y español.', fa: 'سازمان ملل شش زبان رسمی دارد: عربی، چینی، انگلیسی، فرانسوی، روسی و هسپانوی.' } }
  ],

  words: {
    'foreign policy': { en: "a nation's plan for dealing with other countries", es: 'el plan de un país para tratar con otros países', fa: 'نقشهٔ یک کشور برای رابطه با کشورهای دیگر' },
    'national interest': { en: 'what is good for a country: safety, jobs, trade and peace', es: 'lo que es bueno para un país: seguridad, empleos, comercio y paz', fa: 'آنچه برای یک کشور خوب است: امنیت، کار، تجارت و صلح' },
    diplomacy: { en: 'talks and meetings between countries to solve problems', es: 'conversaciones y reuniones entre países para resolver problemas', fa: 'گفتگو و جلسه بین کشورها برای حل مشکلات' },
    treaty: { en: 'a formal written agreement between countries', es: 'un acuerdo formal y escrito entre países', fa: 'یک موافقت‌نامهٔ رسمی و نوشته‌شده بین کشورها' },
    ambassador: { en: 'a person who speaks for their country in another country', es: 'una persona que habla por su país en otro país', fa: 'کسی که در یک کشور دیگر از طرف کشورش گپ می‌زند' },
    embassy: { en: "a country's office in another country, where its diplomats work", es: 'la oficina de un país en otro país, donde trabajan sus diplomáticos', fa: 'دفتر یک کشور در کشور دیگر، جایی که دیپلومات‌هایش کار می‌کنند' },
    sanctions: { en: 'limits on trade to pressure a country to change', es: 'límites al comercio para presionar a un país a cambiar', fa: 'محدودیت تجارت برای فشار آوردن بالای یک کشور تا تغییر کند' },
    alliance: { en: 'a group of countries that promise to help defend each other', es: 'un grupo de países que prometen defenderse unos a otros', fa: 'گروهی از کشورها که وعده می‌دهند از همدیگر دفاع کنند' },
    'foreign aid': { en: 'money, food or help one country gives another', es: 'dinero, comida o ayuda que un país da a otro', fa: 'پول، غذا یا کمکی که یک کشور به کشور دیگر می‌دهد' },
    veto: { en: 'the power to say no and stop a decision', es: 'el poder de decir que no y frenar una decisión', fa: 'قدرت «نه» گفتن و بند کردن یک تصمیم' },
    interpreter: { en: 'a person who turns speech into another language, out loud', es: 'una persona que pasa lo que se dice a otro idioma, en voz alta', fa: 'کسی که گپ را با صدای بلند به زبان دیگر برمی‌گرداند' }
  },

  npcs: [
    {
      x: 12, y: 14,
      name: { en: 'Grace', es: 'Grace', fa: 'گریس' },
      role: { en: 'UN tour guide', es: 'Guía de la ONU', fa: 'رهنمای سازمان ملل' },
      look: { skin: 5, hair: '#120c08', shirt: '#3a7ac0', pants: '#2a2a3a', style: 'short' },
      lines: [
        { en: 'Welcome to the United Nations! Countries started it in 1945 to keep peace.', es: '¡Bienvenido a las Naciones Unidas! Los países la crearon en 1945 para mantener la paz.', fa: 'به سازمان ملل متحد خوش آمدی! کشورها آن را در ۱۹۴۵ برای حفظ صلح ساختند.' },
        { en: 'Today 193 countries are members. In the General Assembly, each one gets one vote.', es: 'Hoy hay 193 países miembros. En la Asamblea General, cada uno tiene un voto.', fa: 'امروز ۱۹۳ کشور عضو هستند. در مجمع عمومی، هر کدام یک رأی دارد.' },
        { en: 'The Security Council works on war and peace. Five members are permanent.', es: 'El Consejo de Seguridad trata la guerra y la paz. Cinco miembros son permanentes.', fa: 'شورای امنیت روی جنگ و صلح کار می‌کند. پنج عضو آن دائمی هستند.' },
        { en: 'The US, UK, France, Russia and China. Each can [[veto|veto]], or stop, a decision.', es: 'EE. UU., Reino Unido, Francia, Rusia y China. Cada uno puede usar el [[veto|veto]] y frenar una decisión.', fa: 'امریکا، بریتانیا، فرانسه، روسیه و چین. هر کدام می‌تواند [[veto|وتو]] کند، یعنی تصمیم را بند کند.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'In the UN General Assembly, how many votes does each member country get?', es: 'En la Asamblea General de la ONU, ¿cuántos votos tiene cada país miembro?', fa: 'در مجمع عمومی سازمان ملل، هر کشور عضو چند رأی دارد؟' },
        choices: [
          { ok: true, t: { en: 'One vote each, big or small', es: 'Un voto cada uno, grande o pequeño', fa: 'هر کدام یک رأی، کلان یا کوچک' },
            why: { en: 'Yes! In the General Assembly, every member country gets one vote.', es: '¡Sí! En la Asamblea General, cada país miembro tiene un voto.', fa: 'بله! در مجمع عمومی، هر کشور عضو یک رأی دارد.' } },
          { t: { en: 'One vote for each million people', es: 'Un voto por cada millón de personas', fa: 'یک رأی برای هر یک میلیون نفر' },
            why: { en: 'No. Size does not matter there. Each member gets just one vote.', es: 'No. Allí el tamaño no importa. Cada miembro tiene solo un voto.', fa: 'نه. آنجا اندازه مهم نیست. هر عضو فقط یک رأی دارد.' } },
          { t: { en: 'Only the five permanent members vote', es: 'Solo votan los cinco miembros permanentes', fa: 'فقط پنج عضو دائمی رأی می‌دهند' },
            why: { en: 'No. The five permanent members are on the Security Council. All 193 vote in the Assembly.', es: 'No. Los cinco permanentes están en el Consejo de Seguridad. Los 193 votan en la Asamblea.', fa: 'نه. پنج عضو دائمی در شورای امنیت هستند. همهٔ ۱۹۳ کشور در مجمع رأی می‌دهند.' } }
        ]
      }
    },
    {
      x: 19, y: 3,
      name: { en: 'Lucía', es: 'Lucía', fa: 'لوسیا' },
      role: { en: 'Student from abroad', es: 'Estudiante extranjera', fa: 'شاگرد خارجی' },
      look: { skin: 2, hair: '#3a2416', shirt: '#d9542b', pants: '#2a4a6a', style: 'long' },
      lines: [
        { en: 'I am from Chile. I study world politics here in New York.', es: 'Soy de Chile. Estudio política mundial aquí en Nueva York.', fa: 'من از چیلی هستم. اینجا در نیویارک سیاست جهانی می‌خوانم.' },
        { en: "[[foreign policy|Foreign policy]] is a nation's plan for dealing with other countries.", es: 'La [[foreign policy|política exterior]] es el plan de un país para tratar con otros países.', fa: '[[foreign policy|سیاست خارجی]] نقشهٔ یک کشور برای رابطه با کشورهای دیگر است.' },
        { en: 'The plan protects [[national interest|national interests]]: what is good for the country.', es: 'El plan protege los [[national interest|intereses nacionales]]: lo que es bueno para el país.', fa: 'این نقشه از [[national interest|منافع ملی]] محافظت می‌کند: آنچه برای کشور خوب است.' },
        { en: 'For the US: safety, a strong economy and trade, peace, democracy and human rights.', es: 'Para EE. UU.: seguridad, una economía y comercio fuertes, paz, democracia y derechos humanos.', fa: 'برای امریکا: امنیت، اقتصاد و تجارت قوی، صلح، دموکراسی و حقوق بشر.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Which is one of the main US national interests?', es: '¿Cuál es uno de los principales intereses nacionales de EE. UU.?', fa: 'کدام یکی از منافع ملی اصلی امریکا است؟' },
        choices: [
          { ok: true, t: { en: 'Keeping the country safe', es: 'Mantener seguro al país', fa: 'امن نگه داشتن کشور' },
            why: { en: 'Yes! National security is a top interest, with trade, peace and human rights.', es: '¡Sí! La seguridad nacional es un interés principal, junto al comercio, la paz y los derechos humanos.', fa: 'بله! امنیت ملی یک منفعت مهم است، با تجارت، صلح و حقوق بشر.' } },
          { t: { en: 'Stopping all trade with others', es: 'Detener todo el comercio con otros', fa: 'بند کردن همهٔ تجارت با دیگران' },
            why: { en: 'No. A strong economy needs trade. The US wants more trade, not none.', es: 'No. Una economía fuerte necesita comercio. EE. UU. quiere más comercio, no cero.', fa: 'نه. اقتصاد قوی به تجارت نیاز دارد. امریکا تجارت بیشتر می‌خواهد، نه هیچ.' } },
          { t: { en: 'Ruling over other countries', es: 'Gobernar a otros países', fa: 'حکومت کردن بالای کشورهای دیگر' },
            why: { en: 'No. The US wants peace and friendly partners, not to rule other nations.', es: 'No. EE. UU. quiere paz y socios amigos, no gobernar otras naciones.', fa: 'نه. امریکا صلح و شریکان دوست می‌خواهد، نه حکومت بر ملت‌های دیگر.' } }
        ]
      }
    },
    {
      x: 28, y: 17,
      name: { en: 'Marcus', es: 'Marcus', fa: 'مارکوس' },
      role: { en: 'Ferry worker', es: 'Trabajador del ferri', fa: 'کارگر کشتی' },
      look: { skin: 4, hair: '#1a1008', shirt: '#e0a020', pants: '#2a3a5a', hat: '#2a4a8a', style: 'short' },
      lines: [
        { en: 'My ferry carries visitors from all over the world. I hear many languages!', es: 'Mi ferri lleva visitantes de todo el mundo. ¡Escucho muchos idiomas!', fa: 'کشتی من مهمانان را از سراسر جهان می‌برد. زبان‌های زیادی می‌شنوم!' },
        { en: 'Who makes US foreign policy? The President is the Chief Diplomat.', es: '¿Quién hace la política exterior de EE. UU.? El presidente es el Diplomático en Jefe.', fa: 'کی سیاست خارجی امریکا را می‌سازد؟ رئیس جمهور دیپلومات اول است.' },
        { en: 'The President makes [[treaty|treaties]]. Then two thirds of the Senate must approve.', es: 'El presidente hace los [[treaty|tratados]]. Luego dos tercios del Senado deben aprobarlos.', fa: 'رئیس جمهور [[treaty|معاهده]] می‌بندد. بعد دو سوم سنا باید آن را تأیید کند.' },
        { en: 'Congress declares war and controls the money, like foreign aid and the military.', es: 'El Congreso declara la guerra y controla el dinero, como la ayuda exterior y el ejército.', fa: 'کانگرس اعلان جنگ می‌کند و پول را کنترول می‌کند، مثل کمک خارجی و اردو.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'The President signs a treaty with another country. What must happen next?', es: 'El presidente firma un tratado con otro país. ¿Qué debe pasar después?', fa: 'رئیس جمهور با یک کشور دیگر معاهده امضا می‌کند. بعد چه باید شود؟' },
        choices: [
          { ok: true, t: { en: 'Two thirds of senators approve it', es: 'Dos tercios de los senadores lo aprueban', fa: 'دو سوم سنا آن را تأیید کند' },
            why: { en: 'Right! A treaty needs a two-thirds vote of the Senate. That is a check on the President.', es: '¡Correcto! Un tratado necesita el voto de dos tercios del Senado. Es un control al presidente.', fa: 'درست! معاهده به رأی دو سوم سنا نیاز دارد. این یک کنترول بالای رئیس جمهور است.' } },
          { t: { en: 'The Supreme Court must vote on it', es: 'La Corte Suprema debe votar sobre él', fa: 'ستره محکمه باید به آن رأی بدهد' },
            why: { en: 'No. The Court does not approve treaties. The Senate does.', es: 'No. La Corte no aprueba tratados. Lo hace el Senado.', fa: 'نه. محکمه معاهده‌ها را تأیید نمی‌کند. سنا تأیید می‌کند.' } },
          { t: { en: 'All 50 state governors must sign it', es: 'Los 50 gobernadores estatales deben firmarlo', fa: 'همهٔ ۵۰ والی باید امضا کنند' },
            why: { en: 'No. States do not make treaties. The national government deals with other countries.', es: 'No. Los estados no hacen tratados. El gobierno nacional trata con otros países.', fa: 'نه. ایالت‌ها معاهده نمی‌بندند. حکومت ملی با کشورهای دیگر رابطه دارد.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 2, y: 6, text: { en: 'FIRST AVENUE · NEW YORK CITY · The flags of the member countries fly here.', es: 'PRIMERA AVENIDA · CIUDAD DE NUEVA YORK · Aquí ondean las banderas de los países miembros.', fa: 'سرک اول · شهر نیویارک · بیرق‌های کشورهای عضو اینجا بلند است.' } },
    { x: 9, y: 6, text: { en: 'UNITED NATIONS · Countries meet here to talk, solve problems and keep peace.', es: 'NACIONES UNIDAS · Aquí los países se reúnen para hablar, resolver problemas y mantener la paz.', fa: 'سازمان ملل متحد · کشورها اینجا جمع می‌شوند تا گپ بزنند، مشکلات را حل کنند و صلح را نگه دارند.' } },
    { x: 25, y: 16, text: { en: 'FERRY PIER · EAST RIVER · Boats carry people up and down the river.', es: 'MUELLE DEL FERRI · RÍO ESTE · Los barcos llevan gente río arriba y río abajo.', fa: 'اسکلهٔ کشتی · دریای شرقی · کشتی‌ها مردم را در دریا بالا و پایین می‌برند.' } }
  ],

  /* the quest: Yasmin the interpreter (gold !) on the visitor plaza -> Mr. Brooks, a diplomat's driver, on
     First Avenue in the south -> find the headset case in the north garden, by the statue near the river -> back */
  quest: {
    stat: 'reg',
    title: { en: 'The Lost Headsets', es: 'Los audífonos perdidos', fa: 'گوشی‌های گمشده' },
    giver: {
      x: 13, y: 7,
      name: { en: 'Yasmin', es: 'Yasmin', fa: 'یاسمین' },
      role: { en: 'Interpreter', es: 'Intérprete', fa: 'ترجمان' },
      look: { skin: 3, hair: '#1a1008', shirt: '#8a2a5a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'I am an [[interpreter|interpreter]]. I turn speeches into another language.', es: 'Soy [[interpreter|intérprete]]. Paso los discursos a otro idioma.', fa: 'من [[interpreter|ترجمان]] هستم. سخنرانی‌ها را به زبان دیگر برمی‌گردانم.' },
        { en: 'My case of headsets is gone! Delegates need them to hear me.', es: '¡Mi estuche de audífonos desapareció! Los delegados los necesitan para oírme.', fa: 'بکس گوشی‌هایم گم شده! نماینده‌ها برای شنیدن صدایم به آنها نیاز دارند.' },
        { en: 'Ask Mr. Brooks, the driver on First Avenue. He drove me today.', es: 'Pregúntale al señor Brooks, el chofer de la Primera Avenida. Él me trajo hoy.', fa: 'از آقای بروکس، دریور سرک اول، بپرس. امروز او مرا آورد.' }
      ],
      wait: { en: 'Mr. Brooks waits by his car on First Avenue, in the south.', es: 'El señor Brooks espera junto a su carro en la Primera Avenida, al sur.', fa: 'آقای بروکس کنار موترش در سرک اول، در جنوب، منتظر است.' },
      thanks: { en: 'My headsets! Now every delegate can hear the talks. Thank you!', es: '¡Mis audífonos! Ahora cada delegado puede oír las conversaciones. ¡Gracias!', fa: 'گوشی‌هایم! حالا هر نماینده گفتگوها را می‌شنود. تشکر!' }
    },
    contact: {
      x: 6, y: 19,
      name: { en: 'Mr. Brooks', es: 'Señor Brooks', fa: 'آقای بروکس' },
      role: { en: "A diplomat's driver", es: 'Chofer de una diplomática', fa: 'دریور یک دیپلومات' },
      look: { skin: 0, hair: '#5a3a1a', shirt: '#2a2a2a', pants: '#2a2a2a', hat: '#1a1a1a', style: 'short' },
      lines: [
        { en: 'I drive a US [[ambassador|ambassador]]. She works for the State Department.', es: 'Manejo para una [[ambassador|embajadora]] de EE. UU. Ella trabaja para el Departamento de Estado.', fa: 'من دریور یک [[ambassador|سفیر]] امریکا هستم. او برای وزارت خارجه کار می‌کند.' },
        { en: 'Yasmin read on a bench before work. It was in the north garden.', es: 'Yasmin leyó en un banco antes del trabajo. Fue en el jardín del norte.', fa: 'یاسمین پیش از کار روی یک چوکی کتاب خواند. در باغ شمالی بود.' },
        { en: 'Go north to the garden. Look east, by the statue near the river.', es: 'Ve al norte, al jardín. Busca al este, junto a la estatua cerca del río.', fa: 'به شمال، به باغ برو. در شرق، کنار مجسمهٔ نزدیک دریا، ببین.' }
      ]
    },
    action: {
      type: 'find',
      at: [24, 4],
      hint: { en: 'Look in the north garden, by the statue near the river', es: 'Busca en el jardín del norte, junto a la estatua cerca del río', fa: 'در باغ شمالی، کنار مجسمهٔ نزدیک دریا، ببین' },
      found: { en: 'The headset case! It was under the bench beside the peace statue.', es: '¡El estuche de audífonos! Estaba bajo el banco junto a la estatua de la paz.', fa: 'بکس گوشی‌ها! زیر چوکی کنار مجسمهٔ صلح بود.' },
      item: { icon: '🎧', name: { en: 'A case of headsets', es: 'Un estuche de audífonos', fa: 'یک بکس گوشی' } }
    }
  },

  scraps: [[1, 9], [26, 1], [8, 20]],
  smudges: [[11, 4], [13, 17]],

  challenge: {
    at: [16, 14],
    type: 'site', // in the world; the card version (claim) is the fallback
    // one flag for each tool, in the row of member flags along First Avenue
    spots: [[7, 3], [7, 7], [7, 11], [7, 15], [7, 19]],
    stat: 'reg',
    title: { en: 'Plant the flag on the right tool', es: 'Pon la bandera en la herramienta correcta', fa: 'بیرق را روی ابزار درست بگذار' },
    intro: { en: 'The US and its friend Marenko share a river. Both need a fair water plan that lasts.',
      es: 'EE. UU. y su amigo Marenko comparten un río. Ambos necesitan un plan de agua justo y duradero.',
      fa: 'امریکا و دوستش مارنکو یک دریا را شریک هستند. هر دو یک نقشهٔ عادلانه و ماندگار آب لازم دارند.' },
    options: [
      { icon: '🗣️', name: { en: 'Diplomacy', es: 'Diplomacia', fa: 'دیپلوماسی' },
        desc: { en: 'Leaders and diplomats meet and talk to solve a problem.', es: 'Líderes y diplomáticos se reúnen y hablan para resolver un problema.', fa: 'رهبران و دیپلومات‌ها جلسه می‌کنند و گپ می‌زنند تا مشکل را حل کنند.' },
        result: { en: 'Talks are a good start. But spoken words alone may not last.', es: 'Hablar es un buen comienzo. Pero las palabras solas pueden no durar.', fa: 'گفتگو شروع خوبی است. اما گپ تنها شاید دوام نکند.' } },
      { icon: '📜', name: { en: 'Treaty', es: 'Tratado', fa: 'معاهده' },
        desc: { en: 'A formal written agreement between countries.', es: 'Un acuerdo formal y escrito entre países.', fa: 'یک موافقت‌نامهٔ رسمی و نوشته‌شده بین کشورها.' },
        result: { en: 'The treaty is signed and approved. Both countries share the river fairly, year after year.', es: 'El tratado se firma y se aprueba. Los dos países comparten el río con justicia, año tras año.', fa: 'معاهده امضا و تأیید شد. هر دو کشور دریا را سال به سال عادلانه شریک می‌شوند.' } },
      { icon: '🚫', name: { en: 'Sanctions', es: 'Sanciones', fa: 'تحریم‌ها' },
        desc: { en: 'Limits on trade to pressure a country to change.', es: 'Límites al comercio para presionar a un país a cambiar.', fa: 'محدودیت تجارت برای فشار بالای یک کشور تا تغییر کند.' },
        result: { en: 'Trade stops, and families on both sides lose jobs. The friend grows angry.', es: 'El comercio se detiene y familias de ambos lados pierden empleos. El amigo se enoja.', fa: 'تجارت بند می‌شود و خانواده‌های هر دو طرف کار را از دست می‌دهند. دوست قهر می‌شود.' } },
      { icon: '🛡️', name: { en: 'Alliance', es: 'Alianza', fa: 'اتحاد' },
        desc: { en: 'Countries promise to defend each other, like NATO.', es: 'Los países prometen defenderse unos a otros, como la OTAN.', fa: 'کشورها وعده می‌دهند از همدیگر دفاع کنند، مثل ناتو.' },
        result: { en: 'An alliance is for defense. It does not say who gets the water.', es: 'Una alianza es para la defensa. No dice quién recibe el agua.', fa: 'اتحاد برای دفاع است. نمی‌گوید آب به کی برسد.' } },
      { icon: '🎁', name: { en: 'Foreign aid', es: 'Ayuda exterior', fa: 'کمک خارجی' },
        desc: { en: 'Money, food or help sent to another country.', es: 'Dinero, comida o ayuda enviada a otro país.', fa: 'پول، غذا یا کمکی که به کشور دیگر فرستاده می‌شود.' },
        result: { en: 'Aid helps for a while. But it does not settle how to share the river.', es: 'La ayuda sirve un tiempo. Pero no decide cómo compartir el río.', fa: 'کمک برای مدتی خوب است. اما تعیین نمی‌کند دریا چطور شریک شود.' } }
    ],
    kinds: [
      { id: 'fit', label: { en: 'Why this tool fits the problem', es: 'Por qué esta herramienta sirve para el problema', fa: 'چرا این ابزار به این مشکل می‌خورد' } },
      { id: 'who', label: { en: 'Who makes it, and who approves it', es: 'Quién la hace y quién la aprueba', fa: 'کی آن را می‌سازد و کی تأیید می‌کند' } }
    ],
    reasons: [
      { kind: 'fit', fits: [1], t: { en: 'Both countries want a written promise that lasts for many years.', es: 'Los dos países quieren una promesa escrita que dure muchos años.', fa: 'هر دو کشور یک وعدهٔ نوشته‌شده می‌خواهند که سال‌ها دوام کند.' },
        why: { en: 'A written promise between countries that lasts is a treaty. Is your flag a treaty?', es: 'Una promesa escrita y duradera entre países es un tratado. ¿Tu bandera es un tratado?', fa: 'وعدهٔ نوشته‌شده و ماندگار بین کشورها معاهده است. آیا بیرق تو معاهده است؟' } },
      { kind: 'fit', fits: [0, 1], t: { en: 'Marenko is a friend, so talking it out is the right start.', es: 'Marenko es un amigo, así que hablar es el comienzo correcto.', fa: 'مارنکو دوست است، پس گپ زدن شروع درست است.' },
        why: { en: 'Talking fits diplomacy or a treaty. Your tool does not start with talks.', es: 'Hablar va con la diplomacia o un tratado. Tu herramienta no empieza hablando.', fa: 'گپ زدن به دیپلوماسی یا معاهده می‌خورد. ابزار تو با گفتگو شروع نمی‌شود.' } },
      { kind: 'fit', fits: [], t: { en: 'A storm hit Marenko, and its families need food.', es: 'Una tormenta golpeó a Marenko y sus familias necesitan comida.', fa: 'یک طوفان به مارنکو زد و خانواده‌هایش غذا لازم دارند.' },
        why: { en: 'No storm hit. Aid helps after a disaster, but this problem is sharing water.', es: 'No hubo tormenta. La ayuda sirve tras un desastre, pero este problema es compartir agua.', fa: 'هیچ طوفانی نیامد. کمک بعد از آفت خوب است، اما این مشکل شریک کردن آب است.' } },
      { kind: 'fit', fits: [], t: { en: 'Marenko is under attack, so we must promise to defend it.', es: 'Marenko está bajo ataque, así que debemos prometer defenderlo.', fa: 'بالای مارنکو حمله شده، پس باید وعدهٔ دفاع بدهیم.' },
        why: { en: 'No one is attacking. An alliance is for defense, and this is a water problem.', es: 'Nadie está atacando. Una alianza es para la defensa, y este es un problema de agua.', fa: 'هیچ کس حمله نکرده. اتحاد برای دفاع است، و این یک مشکل آب است.' } },
      { kind: 'fit', fits: [], t: { en: 'Cutting off trade will make our friend agree fast.', es: 'Cortar el comercio hará que nuestro amigo acepte rápido.', fa: 'بند کردن تجارت دوست ما را زود راضی می‌کند.' },
        why: { en: 'Sanctions pressure a country that causes harm. They would hurt a friend and our own trade.', es: 'Las sanciones presionan a un país que hace daño. Dañarían a un amigo y nuestro comercio.', fa: 'تحریم بالای کشوری فشار می‌آورد که آسیب می‌رساند. به دوست و تجارت خود ما ضرر می‌زند.' } },
      { kind: 'who', fits: [1], t: { en: 'The President makes it. Two thirds of the Senate must approve.', es: 'El presidente lo hace. Dos tercios del Senado deben aprobarlo.', fa: 'رئیس جمهور آن را می‌سازد. دو سوم سنا باید تأیید کند.' },
        why: { en: 'That is how a treaty is made and approved. Is your flag a treaty?', es: 'Así se hace y se aprueba un tratado. ¿Tu bandera es un tratado?', fa: 'معاهده این‌طور ساخته و تأیید می‌شود. آیا بیرق تو معاهده است؟' } },
      { kind: 'who', fits: [], t: { en: 'The President makes it. The Supreme Court must approve.', es: 'El presidente lo hace. La Corte Suprema debe aprobarlo.', fa: 'رئیس جمهور آن را می‌سازد. ستره محکمه باید تأیید کند.' },
        why: { en: 'No. The Supreme Court does not approve deals with other countries. The Senate approves treaties.', es: 'No. La Corte Suprema no aprueba acuerdos con otros países. El Senado aprueba los tratados.', fa: 'نه. ستره محکمه موافقت با کشورهای دیگر را تأیید نمی‌کند. سنا معاهده‌ها را تأیید می‌کند.' } },
      { kind: 'who', fits: [], t: { en: 'The governor of each state signs it with Marenko.', es: 'El gobernador de cada estado lo firma con Marenko.', fa: 'والی هر ایالت آن را با مارنکو امضا می‌کند.' },
        why: { en: 'No. States cannot make treaties. Dealing with other countries is a national job.', es: 'No. Los estados no pueden hacer tratados. Tratar con otros países es tarea nacional.', fa: 'نه. ایالت‌ها معاهده بسته نمی‌توانند. رابطه با کشورهای دیگر کار حکومت ملی است.' } },
      { kind: 'who', fits: [], t: { en: 'The House approves it alone, by a simple majority.', es: 'La Cámara lo aprueba sola, por mayoría simple.', fa: 'مجلس نمایندگان آن را تنها، با اکثریت ساده، تأیید می‌کند.' },
        why: { en: 'No. The Senate approves treaties, and it needs a two-thirds vote.', es: 'No. El Senado aprueba los tratados, y necesita el voto de dos tercios.', fa: 'نه. سنا معاهده‌ها را تأیید می‌کند، و رأی دو سوم لازم است.' } }
    ],
    mismatch: { en: 'That reason does not back up the tool you picked.', es: 'Esa razón no apoya la herramienta que elegiste.', fa: 'این دلیل از ابزاری که انتخاب کردی پشتیبانی نمی‌کند.' },
    success: { en: 'The treaty is approved! The US and Marenko will share the river fairly.', es: '¡El tratado está aprobado! EE. UU. y Marenko compartirán el río con justicia.', fa: 'معاهده تأیید شد! امریکا و مارنکو دریا را عادلانه شریک می‌شوند.' }
  },

  boss: {
    at: [23, 18],
    stat: 'reg',
    need: 3,
    name: { en: 'The Lonely Grump', es: 'El Gruñón Solitario', fa: 'غرغروی تنها' },
    appear: { en: 'The Lonely Grump is sulking in the fog by the East River!', es: '¡El Gruñón Solitario está enfurruñado en la niebla junto al río Este!', fa: 'غرغروی تنها در مه کنار دریای شرقی قهر نشسته است!' },
    taunt: { en: 'Neighbors? Bah! I never talk, never share and never shake hands!', es: '¿Vecinos? ¡Bah! ¡Nunca hablo, nunca comparto y nunca doy la mano!', fa: 'همسایه؟ بَه! من هرگز گپ نمی‌زنم، شریک نمی‌شوم و دست نمی‌دهم!' },
    win: { en: 'The fog lifts off the East River. Charter page 8.2 floats down into your hands!', es: 'La niebla se va del río Este. ¡La página 8.2 de la carta cae en tus manos!', fa: 'مه از روی دریای شرقی کنار می‌رود. صفحهٔ ۸.۲ منشور به دستت می‌افتد!' },
    questions: [
      { q: { en: 'What is foreign policy?', es: '¿Qué es la política exterior?', fa: 'سیاست خارجی چیست؟' },
        choices: [
          { en: "A nation's plan for other countries", es: 'El plan de un país para otros países', fa: 'نقشهٔ یک کشور برای کشورهای دیگر' },
          { en: "A state's plan for its own schools", es: 'El plan de un estado para sus escuelas', fa: 'نقشهٔ یک ایالت برای مکتب‌هایش' },
          { en: "A city's rules for its roads and parks", es: 'Las reglas de una ciudad para calles y parques', fa: 'قانون‌های یک شهر برای سرک و پارک' },
          { en: "The Court's plan for hearing cases", es: 'El plan de la Corte para oír casos', fa: 'نقشهٔ محکمه برای شنیدن قضیه‌ها' }],
        answer: 0,
        why: { en: "Foreign policy is a nation's plan for dealing with other countries.", es: 'La política exterior es el plan de un país para tratar con otros países.', fa: 'سیاست خارجی نقشهٔ یک کشور برای رابطه با کشورهای دیگر است.' } },
      { q: { en: 'Which is a main US national interest?', es: '¿Cuál es un interés nacional principal de EE. UU.?', fa: 'کدام یک منفعت ملی اصلی امریکا است؟' },
        choices: [
          { en: 'Peace and a strong economy', es: 'La paz y una economía fuerte', fa: 'صلح و یک اقتصاد قوی' },
          { en: 'Closing every border to trade', es: 'Cerrar cada frontera al comercio', fa: 'بستن هر سرحد به روی تجارت' },
          { en: 'Taking land from its neighbors', es: 'Quitarles tierra a sus vecinos', fa: 'گرفتن زمین از همسایه‌ها' },
          { en: 'Leaving all other countries alone', es: 'No tratar con ningún otro país', fa: 'هیچ رابطه با کشورهای دیگر نداشتن' }],
        answer: 0,
        why: { en: 'US interests are security, a strong economy and trade, peace, democracy and human rights.', es: 'Los intereses de EE. UU. son la seguridad, la economía y el comercio, la paz, la democracia y los derechos humanos.', fa: 'منافع امریکا امنیت، اقتصاد و تجارت قوی، صلح، دموکراسی و حقوق بشر است.' } },
      { q: { en: 'Who is the Chief Diplomat and Commander in Chief?', es: '¿Quién es el Diplomático en Jefe y el Comandante en Jefe?', fa: 'دیپلومات اول و سرقوماندان اعلی کیست؟' },
        choices: [
          { en: 'The President', es: 'El presidente', fa: 'رئیس جمهور' },
          { en: 'The Secretary of State', es: 'El secretario de Estado', fa: 'وزیر خارجه' },
          { en: 'The Speaker of the House', es: 'El presidente de la Cámara', fa: 'رئیس مجلس نمایندگان' },
          { en: 'The Chief Justice', es: 'El presidente de la Corte Suprema', fa: 'رئیس ستره محکمه' }],
        answer: 0,
        why: { en: 'The President leads foreign policy and the military. The Secretary of State helps the President.', es: 'El presidente dirige la política exterior y el ejército. El secretario de Estado lo ayuda.', fa: 'رئیس جمهور سیاست خارجی و اردو را رهبری می‌کند. وزیر خارجه به رئیس جمهور کمک می‌کند.' } },
      { q: { en: 'What does the Senate do with a treaty?', es: '¿Qué hace el Senado con un tratado?', fa: 'سنا با معاهده چه می‌کند؟' },
        choices: [
          { en: 'Approves it with a two-thirds vote', es: 'Lo aprueba con dos tercios de los votos', fa: 'با رأی دو سوم آن را تأیید می‌کند' },
          { en: 'Writes it alone with no President', es: 'Lo escribe solo, sin el presidente', fa: 'بدون رئیس جمهور تنها آن را می‌نویسد' },
          { en: 'Sends it to each state to vote on', es: 'Lo manda a cada estado para votar', fa: 'آن را برای رأی به هر ایالت می‌فرستد' },
          { en: 'Nothing, because the Court decides', es: 'Nada, porque la Corte decide', fa: 'هیچ، چون محکمه تصمیم می‌گیرد' }],
        answer: 0,
        why: { en: 'The President makes treaties. Two thirds of the Senate must approve them.', es: 'El presidente hace los tratados. Dos tercios del Senado deben aprobarlos.', fa: 'رئیس جمهور معاهده می‌بندد. دو سوم سنا باید آن را تأیید کند.' } },
      { q: { en: 'Which foreign policy power belongs to Congress?', es: '¿Qué poder de política exterior tiene el Congreso?', fa: 'کدام قدرت سیاست خارجی مال کانگرس است؟' },
        choices: [
          { en: 'Declaring war', es: 'Declarar la guerra', fa: 'اعلان جنگ' },
          { en: 'Leading the army', es: 'Dirigir el ejército', fa: 'رهبری اردو' },
          { en: 'Picking ambassadors', es: 'Escoger embajadores', fa: 'گزینش سفیران' },
          { en: 'Making treaties', es: 'Hacer tratados', fa: 'بستن معاهده' }],
        answer: 0,
        why: { en: 'Congress declares war and controls money for aid and the military. The President leads the army.', es: 'El Congreso declara la guerra y controla el dinero de la ayuda y el ejército. El presidente dirige el ejército.', fa: 'کانگرس اعلان جنگ می‌کند و پول کمک و اردو را کنترول می‌کند. رئیس جمهور اردو را رهبری می‌کند.' } },
      { q: { en: 'What are economic sanctions?', es: '¿Qué son las sanciones económicas?', fa: 'تحریم‌های اقتصادی چیست؟' },
        choices: [
          { en: 'Limits on trade to pressure a country', es: 'Límites al comercio para presionar a un país', fa: 'محدودیت تجارت برای فشار بالای یک کشور' },
          { en: 'Gifts of food sent after a big storm', es: 'Regalos de comida enviados tras una tormenta', fa: 'تحفهٔ غذا بعد از یک طوفان بزرگ' },
          { en: 'A promise to defend a friend in war', es: 'Una promesa de defender a un amigo en guerra', fa: 'وعدهٔ دفاع از یک دوست در جنگ' },
          { en: 'Meetings where leaders talk it out', es: 'Reuniones donde los líderes conversan', fa: 'جلسه‌هایی که رهبران گپ می‌زنند' }],
        answer: 0,
        why: { en: 'Sanctions limit trade to pressure a country to change. Military force is only a last resort.', es: 'Las sanciones limitan el comercio para presionar a un país. La fuerza militar es solo el último recurso.', fa: 'تحریم تجارت را محدود می‌کند تا کشوری تغییر کند. زور نظامی فقط آخرین راه است.' } },
      { q: { en: 'What is NATO?', es: '¿Qué es la OTAN?', fa: 'ناتو چیست؟' },
        choices: [
          { en: 'An alliance to defend each other', es: 'Una alianza para defenderse entre sí', fa: 'یک اتحاد برای دفاع از همدیگر' },
          { en: 'A fund that sends food to farms', es: 'Un fondo que manda comida a granjas', fa: 'یک صندوق که به کشتزارها غذا می‌فرستد' },
          { en: 'A court for cases between people', es: 'Una corte para casos entre personas', fa: 'یک محکمه برای قضیه‌های بین مردم' },
          { en: 'A ship that carries world mail', es: 'Un barco que lleva el correo mundial', fa: 'یک کشتی که پُست جهان را می‌برد' }],
        answer: 0,
        why: { en: 'NATO began in 1949. Its members, like the US, promise to defend each other.', es: 'La OTAN comenzó en 1949. Sus miembros, como EE. UU., prometen defenderse unos a otros.', fa: 'ناتو در ۱۹۴۹ شروع شد. عضوهایش، مثل امریکا، وعده می‌دهند از همدیگر دفاع کنند.' } },
      { q: { en: 'On the UN Security Council, who can veto a decision?', es: 'En el Consejo de Seguridad de la ONU, ¿quién puede vetar una decisión?', fa: 'در شورای امنیت سازمان ملل، کی می‌تواند تصمیم را وتو کند؟' },
        choices: [
          { en: 'The 5 permanent members', es: 'Los 5 miembros permanentes', fa: '۵ عضو دائمی' },
          { en: 'All 193 member countries', es: 'Los 193 países miembros', fa: 'همهٔ ۱۹۳ کشور عضو' },
          { en: 'Only the United States', es: 'Solo Estados Unidos', fa: 'فقط امریکا' },
          { en: 'The newest member country', es: 'El país miembro más nuevo', fa: 'تازه‌ترین کشور عضو' }],
        answer: 0,
        why: { en: 'The US, UK, France, Russia and China are permanent. Each one can veto, or stop, a decision.', es: 'EE. UU., Reino Unido, Francia, Rusia y China son permanentes. Cada uno puede vetar una decisión.', fa: 'امریکا، بریتانیا، فرانسه، روسیه و چین دائمی هستند. هر کدام می‌تواند تصمیم را وتو کند.' } }
    ]
  },

  learned: [
    { en: "[[foreign policy|Foreign policy]] is a nation's plan for dealing with other countries.", es: 'La [[foreign policy|política exterior]] es el plan de un país para tratar con otros países.', fa: '[[foreign policy|سیاست خارجی]] نقشهٔ یک کشور برای رابطه با کشورهای دیگر است.' },
    { en: 'The President leads it. The Senate approves treaties, and Congress declares war and pays.', es: 'El presidente la dirige. El Senado aprueba tratados, y el Congreso declara la guerra y paga.', fa: 'رئیس جمهور آن را رهبری می‌کند. سنا معاهده‌ها را تأیید می‌کند و کانگرس اعلان جنگ می‌کند و پول می‌دهد.' },
    { en: 'Tools include [[diplomacy|diplomacy]], treaties, aid, sanctions and alliances. The UN helps keep peace.', es: 'Las herramientas incluyen la [[diplomacy|diplomacia]], tratados, ayuda, sanciones y alianzas. La ONU ayuda a mantener la paz.', fa: 'ابزارها [[diplomacy|دیپلوماسی]]، معاهده، کمک، تحریم و اتحاد هستند. سازمان ملل به حفظ صلح کمک می‌کند.' }
  ],
  reflect: {
    q: { en: 'Think of a fight between two friends. Would you talk, write a deal, or ask for help? Why?', es: 'Piensa en una pelea entre dos amigos. ¿Hablarías, escribirías un acuerdo o pedirías ayuda? ¿Por qué?', fa: 'به دعوای بین دو دوست فکر کن. گپ می‌زنی، یک موافقت می‌نویسی یا کمک می‌خواهی؟ چرا؟' },
    starter: { en: 'I would choose to', es: 'Yo elegiría', fa: 'من انتخاب می‌کنم که' }
  }
};
