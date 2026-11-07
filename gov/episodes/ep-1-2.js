/* CIVICWALKER · Episode 1.2 · Big Ideas About Government (Hobbes, Locke, Montesquieu)
   London, 1690, two years after the Glorious Revolution. North half: a paved street of coffee houses, a print shop
   and homes, with book stalls on its south side. A hedge with three gates opens onto a garden by the River Thames
   (south half): paths, flower beds, a fountain, the sandy riverbank and a wooden dock. People argue about new books;
   the charter stone asks the student to fix a town where one mayor holds every power. */
window.EPISODE = {
  id: '1.2',
  realm: 1,
  sol: 'GOVT',
  title: { en: 'Big Ideas About Government', es: 'Grandes ideas sobre el gobierno', fa: 'اندیشه‌های بزرگ دربارهٔ حکومت' },
  place: { en: 'London, 1690', es: 'Londres, 1690', fa: 'لندن، ۱۶۹۰' },
  intro: [
    { en: 'The Grump tore the page of big ideas. People forget why governments exist.',
      es: 'El Gruñón rompió la página de las grandes ideas. La gente olvida por qué existen los gobiernos.',
      fa: 'غرغرو صفحهٔ اندیشه‌های بزرگ را پاره کرد. مردم فراموش می‌کنند چرا حکومت‌ها وجود دارند.' },
    { en: 'Hear 3 big ideas from the people here, then fix the charter stone.',
      es: 'Escucha 3 grandes ideas de la gente de aquí y luego arregla la piedra de la carta.',
      fa: '۳ اندیشهٔ بزرگ را از مردم اینجا بشنو، بعد سنگ منشور را درست کن.' }
  ],
  /* cut scenes: London on the world map (no timeline in this game) */
  scenes: {
    at: [-0.12, 51.51],
    start: [
      { en: 'London, 1690. England has a new king and queen: William and Mary.',
        es: 'Londres, 1690. Inglaterra tiene un rey y una reina nuevos: Guillermo y María.',
        fa: 'لندن، ۱۶۹۰. انگلستان یک پادشاه و ملکهٔ تازه دارد: ویلیام و مری.' },
      { en: 'In 1688, King James II lost his throne. People call it the Glorious Revolution.',
        es: 'En 1688, el rey Jacobo II perdió su trono. Lo llaman la Revolución Gloriosa.',
        fa: 'در ۱۶۸۸، پادشاه جیمز دوم تختش را از دست داد. به آن انقلاب شکوهمند می‌گویند.' },
      { en: 'In coffee houses, people read new books and argue about government.',
        es: 'En los cafés, la gente lee libros nuevos y discute sobre el gobierno.',
        fa: 'در قهوه‌خانه‌ها، مردم کتاب‌های تازه می‌خوانند و دربارهٔ حکومت بحث می‌کنند.' }
    ],
    page: { en: 'Locke\'s ideas later shaped the US Declaration of Independence, in 1776.',
      es: 'Las ideas de Locke luego influyeron en la Declaración de Independencia de EE. UU., en 1776.',
      fa: 'اندیشه‌های لاک بعداً در اعلامیهٔ استقلال امریکا، در ۱۷۷۶، اثر گذاشت.' },
    guess: {
      q: { en: 'Hobbes asked: what would life be like with no government at all?', es: 'Hobbes preguntó: ¿cómo sería la vida sin ningún gobierno?', fa: 'هابز پرسید: زندگی بدون هیچ حکومتی چطور می‌بود؟' },
      choices: [
        { t: { en: '😖 Nasty, brutish and short', es: '😖 Horrible, brutal y corta', fa: '😖 زشت، وحشیانه و کوتاه' }, ok: true },
        { t: { en: '😊 Calm and happy', es: '😊 Tranquila y feliz', fa: '😊 آرام و خوش' } }
      ],
      why: { en: 'Hobbes thought people with no government would fight all the time. Life would be hard and short.', es: 'Hobbes pensaba que sin gobierno la gente pelearía siempre. La vida sería dura y corta.', fa: 'هابز فکر می‌کرد بدون حکومت مردم همیشه جنگ می‌کنند. زندگی سخت و کوتاه می‌شد.' }
    },
    next: {
      q: { en: 'Next: Magna Carta, 1215. Did it say even the king must obey the law?', es: 'Ahora: la Carta Magna, 1215. ¿Decía que hasta el rey debe obedecer la ley?', fa: 'بعدی: مگنا کارتا، ۱۲۱۵. آیا گفت حتی پادشاه باید از قانون اطاعت کند؟' },
      choices: [
        { t: { en: 'Yes, even the king', es: 'Sí, hasta el rey', fa: 'بله، حتی پادشاه' }, ok: true },
        { t: { en: 'No, kings were above it', es: 'No, los reyes estaban por encima', fa: 'نه، پادشاه بالاتر از قانون بود' } }
      ],
      why: { en: 'In 1215, Magna Carta said the king must follow the law too.', es: 'En 1215, la Carta Magna dijo que el rey también debe seguir la ley.', fa: 'در ۱۲۱۵، مگنا کارتا گفت پادشاه هم باید از قانون پیروی کند.' }
    }
  },
  /* houses: who lives behind each door on the coffee-house street */
  houses: [
    { at: [3, 2], name: { en: 'Widow Ann', es: 'La viuda Ana', fa: 'بیوه‌زن آن' },
      look: { skin: 0, hair: '#d8d8d8', shirt: '#5a4a6a', pants: '#3a3030', robe: true, style: 'bun' },
      lines: [
        { en: 'When I was a girl, the king and Parliament went to war.', es: 'Cuando yo era niña, el rey y el Parlamento fueron a la guerra.', fa: 'وقتی من دختر خرد بودم، پادشاه و پارلمان با هم جنگ کردند.' },
        { en: 'Thomas Hobbes wrote his book Leviathan in those hard years, in 1651.', es: 'Thomas Hobbes escribió su libro Leviatán en esos años duros, en 1651.', fa: 'توماس هابز کتاب «لویاتان» را در همان سال‌های سخت، در ۱۶۵۱، نوشت.' },
        { en: 'He feared war more than a strong king. I understand why.', es: 'Él le temía más a la guerra que a un rey fuerte. Entiendo por qué.', fa: 'او از جنگ بیشتر از یک پادشاه قوی می‌ترسید. می‌فهمم چرا.' }
      ] },
    { at: [8, 2], name: { en: 'Pieter', es: 'Pieter', fa: 'پیتر' },
      look: { skin: 1, hair: '#c8a060', shirt: '#e07a20', pants: '#2a2a3a', hat: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'I am a clerk from the Netherlands. I came with King William in 1688.', es: 'Soy un escribano de los Países Bajos. Vine con el rey Guillermo en 1688.', fa: 'من یک منشی از هالند هستم. در ۱۶۸۸ با پادشاه ویلیام آمدم.' },
        { en: 'King James II fled. People call it the [[glorious revolution|Glorious Revolution]].', es: 'El rey Jacobo II huyó. Lo llaman la [[glorious revolution|Revolución Gloriosa]].', fa: 'پادشاه جیمز دوم فرار کرد. به آن [[glorious revolution|انقلاب شکوهمند]] می‌گویند.' },
        { en: 'In 1689, [[parliament|Parliament]] passed the Bill of Rights. It puts limits on the king.', es: 'En 1689, el [[parliament|Parlamento]] aprobó la Declaración de Derechos. Pone límites al rey.', fa: 'در ۱۶۸۹، [[parliament|پارلمان]] قانون حقوق را تصویب کرد. این قانون پادشاه را محدود می‌کند.' }
      ] },
    { at: [22, 2], name: { en: 'Josiah', es: 'Josías', fa: 'یوشیا' },
      look: { skin: 5, hair: '#120c08', shirt: '#3a6a9a', pants: '#3a2a1a', style: 'short' },
      lines: [
        { en: 'I work in a print shop. We print pamphlets every day.', es: 'Trabajo en una imprenta. Imprimimos folletos todos los días.', fa: 'من در یک چاپخانه کار می‌کنم. هر روز رساله‌های کوچک چاپ می‌کنیم.' },
        { en: 'A pamphlet is a thin little book full of opinions.', es: 'Un folleto es un librito delgado lleno de opiniones.', fa: 'رسالهٔ کوچک یک کتاب نازک پر از نظرهای مردم است.' },
        { en: 'People read them in the coffee houses and argue for hours!', es: '¡La gente los lee en los cafés y discute por horas!', fa: 'مردم آن‌ها را در قهوه‌خانه‌ها می‌خوانند و ساعت‌ها بحث می‌کنند!' }
      ] },
    { at: [27, 2], name: { en: 'Martha', es: 'Marta', fa: 'مارتا' },
      look: { skin: 2, hair: '#5a3a1a', shirt: '#8a2a3a', pants: '#2a3a2a', robe: true, style: 'long' },
      lines: [
        { en: 'My brother owns land, so he may vote for Parliament.', es: 'Mi hermano tiene tierras, así que puede votar por el Parlamento.', fa: 'برادرم زمین دارد، پس می‌تواند برای پارلمان رأی بدهد.' },
        { en: 'I am a woman, so I cannot vote at all.', es: 'Soy mujer, así que no puedo votar para nada.', fa: 'من زن هستم، پس اصلاً رأی داده نمی‌توانم.' },
        { en: 'People say all of us have rights. When will that include women?', es: 'Dicen que todos tenemos derechos. ¿Cuándo incluirá eso a las mujeres?', fa: 'مردم می‌گویند همهٔ ما حقوق داریم. چه وقت این شامل زنان هم می‌شود؟' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     North (y 0-7): the coffee-house street (l), houses (R/Q over h) and the big coffee house (J) on the north side,
     book stalls (m) on the south side. A hedge (T, y 8) with three gates leads into the garden.
     South (y 9-17): the garden by the Thames: paths (:), flower beds (,), a fountain (O).
     The sandy riverbank (s), the wooden dock (k) and the River Thames (~ and =) along the bottom. */
  map: [
    'JJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ',
    'J.RRR..QQQ..JJJJJJJ..RRR..QQQ..J',
    'J.hdh..hdh..JJJJJJJ..hdh..hdh..J',
    'JllllllllllllllllllllllllllllllJ',
    'JllllllllllllllllllllllllllllllJ',
    'JllllllllllllllllllllllllllllllJ',
    'JllllllllllllllllllllllllllllllJ',
    'J.x...mm..................mm...J',
    'JTTTTTT.TTTTTTTT.TTTTTTT.TTTTTTJ',
    'T.....,,......:.......,,.......T',
    'T..x.,,,......:......,,,.......T',
    'T......T......::......T........T',
    'T..,,.........::..........,,...T',
    'T..,,..::::::::::::::::...,,...T',
    'T.......:.....::.....:.........T',
    'T..T....:.....O......:......T..T',
    'T.......:.....:......:.........T',
    'T.,,,...:...,,:,,....:...,,,...T',
    'TssssssssssssssssssssssssssssssT',
    '~~~~~~~~~~~~~~~~kk~~~~~~~~~~~~~~',
    '~~~~~~~~~~~~~~~~kk~~~~~~~~~~~~~~',
    '================================'
  ],
  start: [15, 5],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [9, 7], at: [13, 7], decor: 'coinold',
      clue: { en: 'From this note, walk 4 steps east, along the south side of the street.', es: 'Desde esta nota, camina 4 pasos al este, por el lado sur de la calle.', fa: 'از این یادداشت، ۴ قدم به شرق برو، در طرف جنوب سرک.' },
      text: { en: 'Many coffee houses charged a penny to come in. Here is an old English penny!', es: 'Muchos cafés cobraban un penique para entrar. ¡Aquí hay un penique inglés antiguo!', fa: 'بسیاری از قهوه‌خانه‌ها برای داخل شدن یک پنی می‌گرفتند. اینجا یک پنی کهنهٔ انگلیسی است!' } },
    { clueAt: [4, 12], at: [4, 17], decor: 'feather',
      clue: { en: 'From this note, walk 5 steps south, toward the River Thames.', es: 'Desde esta nota, camina 5 pasos al sur, hacia el río Támesis.', fa: 'از این یادداشت، ۵ قدم به جنوب برو، به طرف دریای تیمز.' },
      text: { en: 'Writers in 1690 used a quill, a feather pen dipped in ink. Here is one!', es: 'En 1690 se escribía con una pluma de ave mojada en tinta. ¡Aquí hay una!', fa: 'نویسنده‌ها در ۱۶۹۰ با قلم پَر می‌نوشتند که در رنگ فرو می‌شد. اینجا یکی است!' } }
  ],

  words: {
    'social contract': { en: 'a deal: people give a government power, and it keeps them safe', es: 'un acuerdo: la gente le da poder a un gobierno y este la protege', fa: 'یک توافق: مردم به حکومت قدرت می‌دهند و حکومت از آن‌ها محافظت می‌کند' },
    'natural rights': { en: 'rights every person is born with: life, liberty and property', es: 'derechos con los que nace cada persona: la vida, la libertad y la propiedad', fa: 'حقوقی که هر انسان با آن به دنیا می‌آید: زندگی، آزادی و دارایی' },
    consent: { en: 'saying yes; agreeing to something', es: 'decir que sí; estar de acuerdo con algo', fa: 'بله گفتن؛ موافقت با چیزی' },
    'separation of powers': { en: 'splitting government power into parts, so no one has it all', es: 'dividir el poder del gobierno en partes, para que nadie lo tenga todo', fa: 'تقسیم قدرت حکومت به چند بخش، تا هیچ کس همهٔ آن را نداشته باشد' },
    branch: { en: 'one part of a government, with its own job', es: 'una parte del gobierno, con su propio trabajo', fa: 'یک بخش حکومت، با کار خودش' },
    parliament: { en: 'the group in England that makes the laws', es: 'el grupo en Inglaterra que hace las leyes', fa: 'گروهی در انگلستان که قانون می‌سازد' },
    'glorious revolution': { en: 'in 1688, King James II lost his throne to William and Mary, with little fighting in England', es: 'en 1688, el rey Jacobo II perdió el trono ante Guillermo y María, con poca lucha en Inglaterra', fa: 'در ۱۶۸۸، پادشاه جیمز دوم تخت را به ویلیام و مری باخت، با جنگ کم در انگلستان' }
  },

  npcs: [
    {
      x: 5, y: 5,
      name: { en: 'Bess', es: 'Bess', fa: 'بِس' },
      role: { en: 'News seller', es: 'Vendedora de noticias', fa: 'اخبارفروش' },
      look: { skin: 1, hair: '#8a3a1a', shirt: '#2f8f5f', pants: '#4a3a2a', robe: true, style: 'long' },
      lines: [
        { en: 'News! Books! Here is an old book by Thomas Hobbes: Leviathan, from 1651.', es: '¡Noticias! ¡Libros! Aquí hay un libro viejo de Thomas Hobbes: Leviatán, de 1651.', fa: 'خبر! کتاب! این یک کتاب کهنهٔ توماس هابز است: «لویاتان»، از ۱۶۵۱.' },
        { en: 'Hobbes said life with no government is "nasty, brutish and short."', es: 'Hobbes dijo que la vida sin gobierno es "horrible, brutal y corta".', fa: 'هابز گفت زندگی بدون حکومت «زشت، وحشیانه و کوتاه» است.' },
        { en: 'So people give up some freedom to a strong ruler. In return, they are safe.', es: 'Por eso la gente cede algo de libertad a un gobernante fuerte. A cambio, está segura.', fa: 'پس مردم کمی از آزادی خود را به یک حاکم قوی می‌دهند. در بدل، امن هستند.' },
        { en: 'He called this deal a [[social contract|social contract]].', es: 'Él llamó a este acuerdo un [[social contract|contrato social]].', fa: 'او این توافق را [[social contract|قرارداد اجتماعی]] نامید.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why did Hobbes think people give power to a strong ruler?', es: '¿Por qué pensaba Hobbes que la gente le da poder a un gobernante fuerte?', fa: 'چرا هابز فکر می‌کرد مردم به یک حاکم قوی قدرت می‌دهند؟' },
        choices: [
          { ok: true, t: { en: 'To be safe from war and crime', es: 'Para estar a salvo de la guerra y el crimen', fa: 'برای امن بودن از جنگ و جرم' },
            why: { en: 'Yes! Hobbes said people trade some freedom for safety. That deal is the social contract.', es: '¡Sí! Hobbes dijo que la gente cambia algo de libertad por seguridad. Ese acuerdo es el contrato social.', fa: 'بله! هابز گفت مردم کمی آزادی را در بدل امنیت می‌دهند. این توافق قرارداد اجتماعی است.' } },
          { t: { en: 'To get a share of the ruler\'s gold', es: 'Para recibir parte del oro del gobernante', fa: 'برای گرفتن سهمی از طلای حاکم' },
            why: { en: 'No. Hobbes was not thinking about gold. He wanted people safe from fighting.', es: 'No. Hobbes no pensaba en el oro. Quería a la gente a salvo de las peleas.', fa: 'نه. هابز به طلا فکر نمی‌کرد. او می‌خواست مردم از جنگ امن باشند.' } },
          { t: { en: 'So they can vote on every law', es: 'Para poder votar cada ley', fa: 'تا بتوانند به هر قانون رأی بدهند' },
            why: { en: 'No. Hobbes wanted a strong ruler, not people voting on every law.', es: 'No. Hobbes quería un gobernante fuerte, no que la gente votara cada ley.', fa: 'نه. هابز یک حاکم قوی می‌خواست، نه این‌که مردم به هر قانون رأی بدهند.' } }
        ]
      }
    },
    {
      x: 26, y: 5,
      name: { en: 'Ezra', es: 'Esdras', fa: 'عزرا' },
      role: { en: 'Bookseller', es: 'Librero', fa: 'کتاب‌فروش' },
      look: { skin: 0, hair: '#9a9a9a', shirt: '#6a4a2a', pants: '#2a2a2a', hat: '#1a1a1a', style: 'short' },
      lines: [
        { en: 'A new book! Two Treatises of Government, from 1689.', es: '¡Un libro nuevo! Dos tratados sobre el gobierno, de 1689.', fa: 'یک کتاب تازه! «دو رساله دربارهٔ حکومت»، از ۱۶۸۹.' },
        { en: 'The author did not sign it. People say John Locke wrote it.', es: 'El autor no lo firmó. Dicen que lo escribió John Locke.', fa: 'نویسنده نامش را ننوشت. مردم می‌گویند جان لاک آن را نوشته است.' },
        { en: 'Locke says all people are born with [[natural rights|natural rights]]: life, liberty and property.', es: 'Locke dice que todos nacen con [[natural rights|derechos naturales]]: la vida, la libertad y la propiedad.', fa: 'لاک می‌گوید همهٔ مردم با [[natural rights|حقوق طبیعی]] به دنیا می‌آیند: زندگی، آزادی و دارایی.' },
        { en: 'A government needs the people\'s [[consent|consent]]. If it breaks the deal, they may change it.', es: 'Un gobierno necesita el [[consent|consentimiento]] del pueblo. Si rompe el trato, pueden cambiarlo.', fa: 'حکومت به [[consent|رضایت]] مردم نیاز دارد. اگر توافق را بشکند، مردم می‌توانند آن را تغییر بدهند.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Which rights did Locke say every person is born with?', es: '¿Con qué derechos dijo Locke que nace cada persona?', fa: 'لاک گفت هر انسان با کدام حقوق به دنیا می‌آید؟' },
        choices: [
          { ok: true, t: { en: 'Life, liberty and property', es: 'La vida, la libertad y la propiedad', fa: 'زندگی، آزادی و دارایی' },
            why: { en: 'Right! Locke called life, liberty and property natural rights. No government gives them; people are born with them.', es: '¡Correcto! Locke llamó derechos naturales a la vida, la libertad y la propiedad. La gente nace con ellos.', fa: 'درست! لاک زندگی، آزادی و دارایی را حقوق طبیعی نامید. مردم با آن‌ها به دنیا می‌آیند.' } },
          { t: { en: 'Only the rights a king gives', es: 'Solo los derechos que da un rey', fa: 'فقط حقوقی که پادشاه می‌دهد' },
            why: { en: 'No. Locke said rights come with being born, not from a king.', es: 'No. Locke dijo que los derechos vienen al nacer, no de un rey.', fa: 'نه. لاک گفت حقوق با به دنیا آمدن می‌آید، نه از پادشاه.' } },
          { t: { en: 'Free coffee, books and travel', es: 'Café, libros y viajes gratis', fa: 'قهوه، کتاب و سفر مفت' },
            why: { en: 'No, that is a fun wish! Locke\'s natural rights are life, liberty and property.', es: 'No, ¡ese es un deseo divertido! Los derechos naturales de Locke son la vida, la libertad y la propiedad.', fa: 'نه، این یک آرزوی جالب است! حقوق طبیعی لاک زندگی، آزادی و دارایی است.' } }
        ]
      }
    },
    {
      x: 5, y: 14,
      name: { en: 'Daniel', es: 'Daniel', fa: 'دانیل' },
      role: { en: 'Law student', es: 'Estudiante de leyes', fa: 'شاگرد حقوق' },
      look: { skin: 3, hair: '#2a1a10', shirt: '#2a2a4a', pants: '#3a3a3a', robe: true, style: 'short' },
      lines: [
        { en: 'I study the law. Now the king and Parliament share the power.', es: 'Estudio leyes. Ahora el rey y el Parlamento comparten el poder.', fa: 'من حقوق می‌خوانم. حالا پادشاه و پارلمان قدرت را شریک هستند.' },
        { en: 'I think power is safest when it is split into parts.', es: 'Creo que el poder es más seguro cuando se divide en partes.', fa: 'فکر می‌کنم قدرت وقتی به چند بخش تقسیم شود امن‌تر است.' },
        { en: '🔔 Liberty rings: In 1748, Montesquieu will call this [[separation of powers|separation of powers]].', es: '🔔 Liberty suena: En 1748, Montesquieu llamará a esto [[separation of powers|separación de poderes]].', fa: '🔔 لیبرتی زنگ می‌زند: در ۱۷۴۸، مونتسکیو این را [[separation of powers|تفکیک قوا]] می‌نامد.' },
        { en: 'Three [[branch|branches]]: one makes laws, one carries them out, one judges.', es: 'Tres [[branch|ramas]]: una hace las leyes, otra las cumple y otra juzga.', fa: 'سه [[branch|قوه]]: یکی قانون می‌سازد، یکی آن را اجرا می‌کند، یکی قضاوت می‌کند.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Montesquieu said to split power into three branches. Why?', es: 'Montesquieu dijo que hay que dividir el poder en tres ramas. ¿Por qué?', fa: 'مونتسکیو گفت قدرت را به سه قوه تقسیم کنید. چرا؟' },
        choices: [
          { ok: true, t: { en: 'So no one gets too much power', es: 'Para que nadie tenga demasiado poder', fa: 'تا هیچ کس قدرت زیاد نداشته باشد' },
            why: { en: 'Yes! Each branch checks the others, so no person or group holds all the power.', es: '¡Sí! Cada rama vigila a las otras, así nadie tiene todo el poder.', fa: 'بله! هر قوه قوه‌های دیگر را کنترول می‌کند، تا هیچ کس همهٔ قدرت را نداشته باشد.' } },
          { t: { en: 'So the king can rule all alone', es: 'Para que el rey gobierne solo', fa: 'تا پادشاه تنها حکومت کند' },
            why: { en: 'No. Splitting power is the opposite of one person ruling alone.', es: 'No. Dividir el poder es lo contrario de que una persona gobierne sola.', fa: 'نه. تقسیم قدرت برعکسِ حکومت تنهای یک نفر است.' } },
          { t: { en: 'So the judges make every law', es: 'Para que los jueces hagan cada ley', fa: 'تا قاضی‌ها هر قانون را بسازند' },
            why: { en: 'No. In his plan, judges only judge. Another branch makes the laws.', es: 'No. En su plan, los jueces solo juzgan. Otra rama hace las leyes.', fa: 'نه. در نقشهٔ او، قاضی‌ها فقط قضاوت می‌کنند. قوهٔ دیگری قانون می‌سازد.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 2, y: 7, text: { en: 'A LONDON STREET · 1690 · Coffee houses, print shops and booksellers. People talk about new ideas here.', es: 'UNA CALLE DE LONDRES · 1690 · Cafés, imprentas y librerías. Aquí la gente habla de ideas nuevas.', fa: 'یک سرک لندن · ۱۶۹۰ · قهوه‌خانه‌ها، چاپخانه‌ها و کتاب‌فروشی‌ها. مردم اینجا از اندیشه‌های تازه گپ می‌زنند.' } },
    { x: 3, y: 10, text: { en: 'GARDEN BY THE THAMES · The River Thames flows east through London to the sea.', es: 'JARDÍN JUNTO AL TÁMESIS · El río Támesis corre hacia el este por Londres hasta el mar.', fa: 'باغ کنار تیمز · دریای تیمز از میان لندن به طرف شرق تا بحر می‌رود.' } }
  ],

  /* the quest: Molly the coffee-house keeper (gold !) on the west street -> Sam the porter on the east street
     -> Captain Joost on the riverbank wants a book his passengers to America can use; the goods: Locke's book at the
     east book stall, Hobbes's Leviathan at the west end of the street, a sack of beans by the dock -> back to Molly */
  quest: {
    stat: 'loc',
    title: { en: 'Beans for the Coffee House', es: 'Café para el café', fa: 'قهوه برای قهوه‌خانه' },
    giver: {
      x: 12, y: 4,
      name: { en: 'Molly', es: 'Molly', fa: 'مالی' },
      role: { en: 'Coffee-house keeper', es: 'Dueña del café', fa: 'صاحب قهوه‌خانه' },
      look: { skin: 2, hair: '#3a2416', shirt: '#b04a2a', pants: '#3a3a3a', robe: true, style: 'bun' },
      lines: [
        { en: 'Welcome to my coffee house! People come here to argue about new books.', es: '¡Bienvenido a mi café! La gente viene aquí a discutir sobre libros nuevos.', fa: 'به قهوه‌خانهٔ من خوش آمدی! مردم اینجا می‌آیند تا دربارهٔ کتاب‌های تازه بحث کنند.' },
        { en: 'But I am out of coffee beans! Sam the porter knows the ships.', es: '¡Pero no me queda café en grano! Sam, el cargador, conoce los barcos.', fa: 'اما دانهٔ قهوه‌ام تمام شده! سَم باربر کشتی‌ها را می‌شناسد.' }
      ],
      wait: { en: 'Sam the porter is east along the street, near the book stall.', es: 'Sam, el cargador, está al este por la calle, cerca del puesto de libros.', fa: 'سَم باربر در شرق سرک است، نزدیک دکان کتاب.' },
      thanks: { en: 'Beans at last! Now people can drink and argue about rights again. Thanks!', es: '¡Por fin café! Ahora la gente puede tomar y discutir sobre derechos otra vez. ¡Gracias!', fa: 'بالاخره قهوه! حالا مردم دوباره می‌نوشند و دربارهٔ حقوق بحث می‌کنند. تشکر!' }
    },
    contact: {
      x: 19, y: 4,
      name: { en: 'Sam', es: 'Sam', fa: 'سَم' },
      role: { en: 'Porter', es: 'Cargador', fa: 'باربر' },
      look: { skin: 4, hair: '#1a1008', shirt: '#7a6a3a', pants: '#2a3a5a', hat: '#5a4a2a', style: 'short' },
      lines: [
        { en: 'Coffee beans come to London by ship, up the River Thames.', es: 'El café en grano llega a Londres en barco, por el río Támesis.', fa: 'دانهٔ قهوه با کشتی، از راه دریای تیمز، به لندن می‌آید.' },
        { en: 'Captain Joost is on the riverbank, south-east. He wants a book to trade.', es: 'El capitán Joost está en la orilla del río, al sureste. Quiere cambiar por un libro.', fa: 'کپتان یوست در کنار دریا، در جنوب شرق است. او در بدل یک کتاب معامله می‌کند.' }
      ]
    },
    action: {
      type: 'trade',
      trader: {
        x: 24, y: 17,
        name: { en: 'Captain Joost', es: 'Capitán Joost', fa: 'کپتان یوست' },
        role: { en: 'Ship captain', es: 'Capitán de barco', fa: 'کپتان کشتی' },
        look: { skin: 1, hair: '#d0b070', shirt: '#2a3a6a', pants: '#3a2a1a', hat: '#1a1a2a', style: 'short' },
        lines: [
          { en: 'I have coffee beans to sell. Next week my ship sails to the American colonies.', es: 'Tengo café en grano para vender. La próxima semana mi barco va a las colonias de América.', fa: 'من دانهٔ قهوه برای فروش دارم. هفتهٔ آینده کشتی‌ام به مستعمره‌های امریکا می‌رود.' },
          { en: 'My passengers want a book about their rights and their say in government.', es: 'Mis pasajeros quieren un libro sobre sus derechos y su voz en el gobierno.', fa: 'مسافرانم کتابی دربارهٔ حقوق‌شان و نقش‌شان در حکومت می‌خواهند.' }
        ]
      },
      q: { en: 'Which book will you bring Captain Joost for a sack of coffee beans?', es: '¿Qué libro le llevas al capitán Joost a cambio de un saco de café?', fa: 'در بدل یک بوجی قهوه، کدام کتاب را برای کپتان یوست می‌بری؟' },
      choices: [
        { ok: true, at: [29, 6], icon: '📘', t: { en: 'Two Treatises of Government (1689)', es: 'Dos tratados sobre el gobierno (1689)', fa: '«دو رساله دربارهٔ حکومت» (۱۶۸۹)' },
          why: { en: 'Good trade! It is about natural rights and consent. Later, Americans used these ideas in 1776.', es: '¡Buen trato! Habla de derechos naturales y consentimiento. Luego, en 1776, los estadounidenses usaron estas ideas.', fa: 'معاملهٔ خوب! دربارهٔ حقوق طبیعی و رضایت است. بعداً امریکایی‌ها در ۱۷۷۶ از این اندیشه‌ها کار گرفتند.' } },
        { at: [2, 6], icon: '📕', t: { en: 'Leviathan by Hobbes (1651)', es: 'Leviatán, de Hobbes (1651)', fa: '«لویاتان» از هابز (۱۶۵۱)' },
          why: { en: 'Leviathan says obey a strong ruler for safety. The passengers want a book about rights and consent.', es: 'Leviatán dice: obedece a un gobernante fuerte para estar seguro. Ellos quieren un libro sobre derechos y consentimiento.', fa: '«لویاتان» می‌گوید برای امنیت از حاکم قوی اطاعت کن. مسافران کتابی دربارهٔ حقوق و رضایت می‌خواهند.' } },
        { at: [27, 18], icon: '🌾', t: { en: 'A sack of coffee beans', es: 'Un saco de café en grano', fa: 'یک بوجی دانهٔ قهوه' },
          why: { en: 'The captain is selling beans! He already has plenty. Bring him a book instead.', es: '¡El capitán vende café! Ya tiene mucho. Mejor llévale un libro.', fa: 'کپتان خودش قهوه می‌فروشد! او زیاد دارد. به جایش یک کتاب برایش ببر.' } }
      ],
      item: { icon: '☕', name: { en: 'A sack of coffee beans', es: 'Un saco de café en grano', fa: 'یک بوجی دانهٔ قهوه' } }
    }
  },

  scraps: [[1, 1], [30, 9], [1, 17]],
  smudges: [[9, 5], [24, 13]],

  challenge: {
    at: [15, 12],
    type: 'site', // in the world; the card version (claim) is the fallback
    // a flag for each thinker's idea in the garden: Hobbes by the west path, Locke by the east gate, Montesquieu in the east beds
    spots: [[9, 16], [20, 11], [28, 13]],
    stat: 'pla',
    title: { en: 'Fix Grumbleton!', es: '¡Arregla Gruñónpolis!', fa: 'شهر غرغرو را درست کن!' },
    intro: { en: 'The people of Grumbleton chose Mayor Hoard. Now he makes the laws, runs the guards and judges every trial. He jails anyone who complains! Visit each thinker\'s flag. Plant your flag on the idea that fixes Grumbleton. Then give two reasons.',
      es: 'La gente de Gruñónpolis eligió al alcalde Acaparo. Ahora él hace las leyes, manda a los guardias y juzga cada juicio. ¡Encarcela a quien se queja! Visita la bandera de cada pensador. Pon tu bandera en la idea que arregla Gruñónpolis. Luego da dos razones.',
      fa: 'مردم شهر غرغرو شاروال اندوخته را انتخاب کردند. حالا او قانون می‌سازد، نگهبانان را اداره می‌کند و هر محاکمه را قضاوت می‌کند. هر کس شکایت کند او را زندانی می‌کند! به بیرق هر اندیشمند سر بزن. بیرقت را روی اندیشه‌ای بگذار که شهر غرغرو را درست می‌کند. بعد دو دلیل بیاور.' },
    options: [
      { icon: '👑', name: { en: 'A: One strong ruler (Hobbes)', es: 'A: Un gobernante fuerte (Hobbes)', fa: 'الف: یک حاکم قوی (هابز)' },
        desc: { en: 'Give one ruler great power, so people stay safe.', es: 'Dar gran poder a un gobernante, para que la gente esté segura.', fa: 'به یک حاکم قدرت زیاد بده، تا مردم امن بمانند.' },
        result: { en: 'Mayor Hoard gets even more power. People are safe from thieves, but not from him.', es: 'El alcalde Acaparo recibe aún más poder. La gente está a salvo de los ladrones, pero no de él.', fa: 'شاروال اندوخته قدرت بیشتری می‌گیرد. مردم از دزدها امن هستند، اما از خود او نه.' } },
      { icon: '📜', name: { en: 'B: Rights and consent (Locke)', es: 'B: Derechos y consentimiento (Locke)', fa: 'ب: حقوق و رضایت (لاک)' },
        desc: { en: 'People have natural rights. A government needs their consent.', es: 'La gente tiene derechos naturales. Un gobierno necesita su consentimiento.', fa: 'مردم حقوق طبیعی دارند. حکومت به رضایت آن‌ها نیاز دارد.' },
        result: { en: 'The people already gave their consent. But Hoard still holds every power, and he can still jail them.', es: 'La gente ya dio su consentimiento. Pero Acaparo aún tiene todo el poder y todavía puede encarcelarlos.', fa: 'مردم قبلاً رضایت داده بودند. اما اندوخته هنوز همهٔ قدرت را دارد و هنوز می‌تواند آن‌ها را زندانی کند.' } },
      { icon: '⚖️', name: { en: 'C: Split the power (Montesquieu)', es: 'C: Dividir el poder (Montesquieu)', fa: 'ج: قدرت را تقسیم کن (مونتسکیو)' },
        desc: { en: 'Three branches: one makes laws, one carries them out, one judges.', es: 'Tres ramas: una hace las leyes, otra las cumple y otra juzga.', fa: 'سه قوه: یکی قانون می‌سازد، یکی اجرا می‌کند، یکی قضاوت می‌کند.' },
        result: { en: 'A council makes the laws, the mayor runs the guards, and judges hold trials. Each branch checks the others!', es: 'Un consejo hace las leyes, el alcalde manda a los guardias y los jueces hacen los juicios. ¡Cada rama vigila a las otras!', fa: 'یک شورا قانون می‌سازد، شاروال نگهبانان را اداره می‌کند و قاضی‌ها محاکمه می‌کنند. هر قوه دیگران را کنترول می‌کند!' } }
    ],
    kinds: [
      { id: 'idea', label: { en: 'What the thinker said', es: 'Lo que dijo el pensador', fa: 'آنچه اندیشمند گفت' } },
      { id: 'fix', label: { en: 'How it fixes Grumbleton', es: 'Cómo arregla Gruñónpolis', fa: 'چطور شهر غرغرو را درست می‌کند' } }
    ],
    reasons: [
      { kind: 'idea', fits: [0], t: { en: 'People give up some freedom to a strong ruler, for safety.', es: 'La gente cede algo de libertad a un gobernante fuerte, por seguridad.', fa: 'مردم برای امنیت کمی از آزادی خود را به یک حاکم قوی می‌دهند.' },
        why: { en: 'That is Hobbes\'s idea, the social contract.', es: 'Esa es la idea de Hobbes, el contrato social.', fa: 'این اندیشهٔ هابز است، قرارداد اجتماعی.' } },
      { kind: 'idea', fits: [1], t: { en: 'Everyone has natural rights to life, liberty and property.', es: 'Todos tienen derechos naturales a la vida, la libertad y la propiedad.', fa: 'هر کس حق طبیعی زندگی، آزادی و دارایی دارد.' },
        why: { en: 'That is Locke\'s idea.', es: 'Esa es la idea de Locke.', fa: 'این اندیشهٔ لاک است.' } },
      { kind: 'idea', fits: [2], t: { en: 'Power should be split into three branches.', es: 'El poder debe dividirse en tres ramas.', fa: 'قدرت باید به سه قوه تقسیم شود.' },
        why: { en: 'That is Montesquieu\'s idea, the separation of powers.', es: 'Esa es la idea de Montesquieu, la separación de poderes.', fa: 'این اندیشهٔ مونتسکیو است، تفکیک قوا.' } },
      { kind: 'fix', fits: [2], t: { en: 'Judges who do not work for the mayor can hold fair trials.', es: 'Jueces que no trabajan para el alcalde pueden hacer juicios justos.', fa: 'قاضی‌هایی که برای شاروال کار نمی‌کنند می‌توانند محاکمهٔ عادلانه کنند.' },
        why: { en: 'When the courts are separate, even the mayor can be judged.', es: 'Cuando los tribunales están separados, hasta el alcalde puede ser juzgado.', fa: 'وقتی محکمه‌ها جدا باشند، حتی شاروال هم محاکمه شده می‌تواند.' } },
      { kind: 'fix', fits: [2], t: { en: 'A council that makes the laws can stop the mayor\'s unfair rules.', es: 'Un consejo que hace las leyes puede frenar las reglas injustas del alcalde.', fa: 'شورایی که قانون می‌سازد می‌تواند قانون‌های ناعادلانهٔ شاروال را بند کند.' },
        why: { en: 'Each branch checks the others, so no one holds all the power.', es: 'Cada rama vigila a las otras, así nadie tiene todo el poder.', fa: 'هر قوه دیگران را کنترول می‌کند، تا هیچ کس همهٔ قدرت را نداشته باشد.' } },
      { kind: 'fix', fits: [], t: { en: 'Give Mayor Hoard even more guards, so he keeps order.', es: 'Darle al alcalde Acaparo aún más guardias, para que mantenga el orden.', fa: 'به شاروال اندوخته نگهبانان بیشتری بده، تا نظم را نگه دارد.' },
        why: { en: 'That makes things worse. Hoard already has too much power.', es: 'Eso empeora las cosas. Acaparo ya tiene demasiado poder.', fa: 'این کار را بدتر می‌کند. اندوخته همین حالا قدرت زیاد دارد.' } },
      { kind: 'fix', fits: [], t: { en: 'The people chose Hoard, so they must obey him no matter what.', es: 'La gente eligió a Acaparo, así que debe obedecerle pase lo que pase.', fa: 'مردم اندوخته را انتخاب کردند، پس باید در هر حال از او اطاعت کنند.' },
        why: { en: 'No. Locke said people may change a government that breaks their rights.', es: 'No. Locke dijo que la gente puede cambiar un gobierno que viola sus derechos.', fa: 'نه. لاک گفت مردم می‌توانند حکومتی را که حقوق‌شان را می‌شکند تغییر بدهند.' } }
    ],
    mismatch: { en: 'That reason is not true for the idea you picked. Choose reasons that fit your idea.', es: 'Esa razón no es cierta para la idea que elegiste. Elige razones que vayan con tu idea.', fa: 'این دلیل برای اندیشه‌ای که انتخاب کردی درست نیست. دلیل‌هایی انتخاب کن که با اندیشه‌ات جور باشد.' },
    success: { en: 'Grumbleton splits its power into three branches. Now no one rules alone!', es: 'Gruñónpolis divide su poder en tres ramas. ¡Ahora nadie gobierna solo!', fa: 'شهر غرغرو قدرتش را به سه قوه تقسیم کرد. حالا هیچ کس تنها حکومت نمی‌کند!' }
  },

  boss: {
    at: [17, 20],
    stat: 'loc',
    need: 3,
    name: { en: 'The Leviathan Grump', es: 'El Gruñón Leviatán', fa: 'غرغروی لویاتان' },
    appear: { en: 'The Leviathan Grump rises from the River Thames, at the end of the dock!', es: '¡El Gruñón Leviatán sale del río Támesis, al final del muelle!', fa: 'غرغروی لویاتان از دریای تیمز، در آخر اسکله، بیرون می‌آید!' },
    taunt: { en: 'Rights? Consent? Bah! Give ME all the power and stop arguing!', es: '¿Derechos? ¿Consentimiento? ¡Bah! ¡Denme TODO el poder y dejen de discutir!', fa: 'حقوق؟ رضایت؟ بَه! همهٔ قدرت را به من بدهید و بحث را بس کنید!' },
    win: { en: 'The Grump sinks into the river. Charter page 1.2 floats down into your hands!', es: 'El Gruñón se hunde en el río. ¡La página 1.2 de la carta cae en tus manos!', fa: 'غرغرو در دریا فرو می‌رود. صفحهٔ ۱.۲ منشور به دستت می‌افتد!' },
    questions: [
      { q: { en: 'Who wrote that life with no government is "nasty, brutish and short"?', es: '¿Quién escribió que la vida sin gobierno es "horrible, brutal y corta"?', fa: 'کی نوشت که زندگی بدون حکومت «زشت، وحشیانه و کوتاه» است؟' },
        choices: [
          { en: 'Thomas Hobbes', es: 'Thomas Hobbes', fa: 'توماس هابز' },
          { en: 'John Locke', es: 'John Locke', fa: 'جان لاک' },
          { en: 'Montesquieu', es: 'Montesquieu', fa: 'مونتسکیو' },
          { en: 'King James II', es: 'El rey Jacobo II', fa: 'پادشاه جیمز دوم' }],
        answer: 0,
        why: { en: 'Thomas Hobbes wrote it in Leviathan, in 1651. He feared life with no government.', es: 'Thomas Hobbes lo escribió en Leviatán, en 1651. Temía la vida sin gobierno.', fa: 'توماس هابز این را در «لویاتان»، در ۱۶۵۱، نوشت. او از زندگی بدون حکومت می‌ترسید.' } },
      { q: { en: 'What is a [[social contract|social contract]]?', es: '¿Qué es un [[social contract|contrato social]]?', fa: '[[social contract|قرارداد اجتماعی]] چیست؟' },
        choices: [
          { en: 'People give a government power for safety', es: 'La gente da poder a un gobierno por seguridad', fa: 'مردم برای امنیت به حکومت قدرت می‌دهند' },
          { en: 'A paper that lets one king rule forever', es: 'Un papel que deja a un rey gobernar para siempre', fa: 'کاغذی که می‌گذارد یک پادشاه همیشه حکومت کند' },
          { en: 'A deal to trade coffee beans for books', es: 'Un trato para cambiar café por libros', fa: 'معامله‌ای برای عوض کردن قهوه با کتاب' },
          { en: 'A rule that only rich people may vote', es: 'Una regla de que solo los ricos votan', fa: 'قانونی که فقط پولدارها رأی بدهند' }],
        answer: 0,
        why: { en: 'In a social contract, people agree to give a government power. In return, it protects them.', es: 'En un contrato social, la gente acepta darle poder a un gobierno. A cambio, este la protege.', fa: 'در قرارداد اجتماعی، مردم قبول می‌کنند به حکومت قدرت بدهند. در بدل، حکومت از آن‌ها محافظت می‌کند.' } },
      { q: { en: 'John Locke said every person is born with which [[natural rights|natural rights]]?', es: 'John Locke dijo que cada persona nace con qué [[natural rights|derechos naturales]]?', fa: 'جان لاک گفت هر انسان با کدام [[natural rights|حقوق طبیعی]] به دنیا می‌آید؟' },
        choices: [
          { en: 'Life, liberty and property', es: 'La vida, la libertad y la propiedad', fa: 'زندگی، آزادی و دارایی' },
          { en: 'Land, gold and a fine horse', es: 'Tierra, oro y un buen caballo', fa: 'زمین، طلا و یک اسپ خوب' },
          { en: 'Only the rights a king gives', es: 'Solo los derechos que da un rey', fa: 'فقط حقوقی که پادشاه می‌دهد' },
          { en: 'The right to rule over others', es: 'El derecho a gobernar a otros', fa: 'حق حکومت کردن بر دیگران' }],
        answer: 0,
        why: { en: 'Locke said life, liberty and property are natural rights. No king gives them.', es: 'Locke dijo que la vida, la libertad y la propiedad son derechos naturales. Ningún rey los da.', fa: 'لاک گفت زندگی، آزادی و دارایی حقوق طبیعی هستند. هیچ پادشاهی آن‌ها را نمی‌دهد.' } },
      { q: { en: 'Locke said a government gets its power from where?', es: 'Locke dijo que un gobierno recibe su poder ¿de dónde?', fa: 'لاک گفت حکومت قدرتش را از کجا می‌گیرد؟' },
        choices: [
          { en: 'The consent of the governed', es: 'El consentimiento de los gobernados', fa: 'رضایت مردمی که حکومت می‌شوند' },
          { en: 'The oldest royal family', es: 'La familia real más antigua', fa: 'کهنه‌ترین خانوادهٔ شاهی' },
          { en: 'The biggest and strongest army', es: 'El ejército más grande y fuerte', fa: 'بزرگ‌ترین و قوی‌ترین اردو' },
          { en: 'The richest merchants in town', es: 'Los comerciantes más ricos', fa: 'پولدارترین سوداگران شهر' }],
        answer: 0,
        why: { en: 'Locke said a government\'s power comes from the [[consent|consent]] of the people it rules.', es: 'Locke dijo que el poder de un gobierno viene del [[consent|consentimiento]] del pueblo que gobierna.', fa: 'لاک گفت قدرت حکومت از [[consent|رضایت]] مردمی می‌آید که بر آن‌ها حکومت می‌کند.' } },
      { q: { en: 'Locke said people may do what if a government breaks the social contract?', es: 'Locke dijo que la gente puede hacer qué si un gobierno rompe el contrato social?', fa: 'لاک گفت اگر حکومت قرارداد اجتماعی را بشکند، مردم چه کرده می‌توانند؟' },
        choices: [
          { en: 'Change the government', es: 'Cambiar el gobierno', fa: 'حکومت را تغییر بدهند' },
          { en: 'Obey it no matter what', es: 'Obedecerlo pase lo que pase', fa: 'در هر حال اطاعت کنند' },
          { en: 'Give the ruler more power', es: 'Darle más poder al gobernante', fa: 'به حاکم قدرت بیشتر بدهند' },
          { en: 'Never make laws again', es: 'No hacer leyes nunca más', fa: 'دیگر هرگز قانون نسازند' }],
        answer: 0,
        why: { en: 'Locke said a government must protect rights. If it breaks the deal, people may replace it.', es: 'Locke dijo que un gobierno debe proteger los derechos. Si rompe el trato, la gente puede reemplazarlo.', fa: 'لاک گفت حکومت باید از حقوق محافظت کند. اگر توافق را بشکند، مردم می‌توانند آن را عوض کنند.' } },
      { q: { en: 'Montesquieu wrote The Spirit of the Laws in 1748. What was his big idea?', es: 'Montesquieu escribió El espíritu de las leyes en 1748. ¿Cuál era su gran idea?', fa: 'مونتسکیو «روح القوانین» را در ۱۷۴۸ نوشت. اندیشهٔ بزرگ او چه بود؟' },
        choices: [
          { en: 'Split power into three branches', es: 'Dividir el poder en tres ramas', fa: 'قدرت را به سه قوه تقسیم کنید' },
          { en: 'Give one king every power', es: 'Darle todo el poder a un rey', fa: 'همهٔ قدرت را به یک پادشاه بدهید' },
          { en: 'Let the judges make all laws', es: 'Que los jueces hagan todas las leyes', fa: 'بگذارید قاضی‌ها همهٔ قانون‌ها را بسازند' },
          { en: 'Let the richest families rule', es: 'Que gobiernen las familias más ricas', fa: 'بگذارید پولدارترین خانواده‌ها حکومت کنند' }],
        answer: 0,
        why: { en: 'Montesquieu said split power into three branches, so no one has too much. This is [[separation of powers|separation of powers]].', es: 'Montesquieu dijo dividir el poder en tres ramas, para que nadie tenga demasiado. Es la [[separation of powers|separación de poderes]].', fa: 'مونتسکیو گفت قدرت را به سه قوه تقسیم کنید تا کسی قدرت زیاد نداشته باشد. این [[separation of powers|تفکیک قوا]] است.' } },
      { q: { en: 'The Declaration of Independence (1776) names the rights to life, liberty and what?', es: 'La Declaración de Independencia (1776) nombra los derechos a la vida, la libertad y ¿qué más?', fa: 'اعلامیهٔ استقلال (۱۷۷۶) از حق زندگی، آزادی و چه چیز دیگر نام می‌برد؟' },
        choices: [
          { en: 'The pursuit of happiness', es: 'La búsqueda de la felicidad', fa: 'جستجوی خوشبختی' },
          { en: 'A king\'s kind protection', es: 'La protección amable de un rey', fa: 'حمایت مهربان یک پادشاه' },
          { en: 'Free land for every family', es: 'Tierra gratis para cada familia', fa: 'زمین مفت برای هر خانواده' },
          { en: 'A seat in the Parliament', es: 'Un asiento en el Parlamento', fa: 'یک چوکی در پارلمان' }],
        answer: 0,
        why: { en: 'Thomas Jefferson borrowed from Locke: "life, liberty and the pursuit of happiness."', es: 'Thomas Jefferson tomó ideas de Locke: "la vida, la libertad y la búsqueda de la felicidad".', fa: 'توماس جفرسن از لاک گرفت: «زندگی، آزادی و جستجوی خوشبختی».' } },
      { q: { en: 'The US Constitution (1787) splits power into three branches. Whose idea is that?', es: 'La Constitución de EE. UU. (1787) divide el poder en tres ramas. ¿De quién es esa idea?', fa: 'قانون اساسی امریکا (۱۷۸۷) قدرت را به سه قوه تقسیم می‌کند. این اندیشهٔ کیست؟' },
        choices: [
          { en: 'Montesquieu', es: 'Montesquieu', fa: 'مونتسکیو' },
          { en: 'Thomas Hobbes', es: 'Thomas Hobbes', fa: 'توماس هابز' },
          { en: 'King James II', es: 'El rey Jacobo II', fa: 'پادشاه جیمز دوم' },
          { en: 'Captain Joost', es: 'El capitán Joost', fa: 'کپتان یوست' }],
        answer: 0,
        why: { en: 'The Constitution uses Montesquieu\'s idea: Congress makes laws, the President carries them out, courts judge.', es: 'La Constitución usa la idea de Montesquieu: el Congreso hace leyes, el presidente las cumple y los tribunales juzgan.', fa: 'قانون اساسی اندیشهٔ مونتسکیو را به کار می‌برد: کانگرس قانون می‌سازد، رئیس جمهور اجرا می‌کند، محکمه‌ها قضاوت می‌کنند.' } }
    ]
  },

  learned: [
    { en: 'Hobbes: people make a [[social contract|social contract]], trading some freedom to a strong ruler for safety.', es: 'Hobbes: la gente hace un [[social contract|contrato social]] y cambia algo de libertad por seguridad.', fa: 'هابز: مردم یک [[social contract|قرارداد اجتماعی]] می‌بندند و کمی آزادی را در بدل امنیت به حاکم قوی می‌دهند.' },
    { en: 'Locke: people have [[natural rights|natural rights]], and government needs their [[consent|consent]].', es: 'Locke: la gente tiene [[natural rights|derechos naturales]] y el gobierno necesita su [[consent|consentimiento]].', fa: 'لاک: مردم [[natural rights|حقوق طبیعی]] دارند و حکومت به [[consent|رضایت]] آن‌ها نیاز دارد.' },
    { en: 'Montesquieu: split power into three [[branch|branches]]. These ideas shaped the US Declaration and Constitution.', es: 'Montesquieu: dividir el poder en tres [[branch|ramas]]. Estas ideas influyeron en la Declaración y la Constitución de EE. UU.', fa: 'مونتسکیو: قدرت را به سه [[branch|قوه]] تقسیم کن. این اندیشه‌ها در اعلامیه و قانون اساسی امریکا اثر گذاشت.' }
  ],
  reflect: {
    q: { en: 'Hobbes, Locke or Montesquieu: whose idea would help your school most? Why?', es: 'Hobbes, Locke o Montesquieu: ¿la idea de quién ayudaría más a tu escuela? ¿Por qué?', fa: 'هابز، لاک یا مونتسکیو: اندیشهٔ کدام یک بیشتر به مکتب تو کمک می‌کند؟ چرا؟' },
    starter: { en: 'I would use the idea of ... because', es: 'Yo usaría la idea de ... porque', fa: 'من از اندیشهٔ ... کار می‌گیرم، چون' }
  }
};
