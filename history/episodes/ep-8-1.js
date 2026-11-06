/* TIMEWALKER · Episode 8.1 · The Cold War (WHII)
   Berlin in August 1961, days after the border was closed. The Wall (W, with barbed wire F beside it) runs north to
   south down the middle of the city. West half (x 0-14): West Berlin, with Bernauer Strasse and a wooden viewing
   platform (k) in the north, a park, homes and the street to Checkpoint Charlie. East half (x 17-31): East Berlin,
   with apartment blocks, a radio factory (X) and state shops (m). Row 15 is Friedrichstrasse: the one gap in the
   wall is Checkpoint Charlie, where visitors from other countries could still cross. */
window.EPISODE = {
  id: '8.1',
  realm: 8,
  sol: 'WHII',
  title: { en: 'The Cold War', es: 'La Guerra Fría', fa: 'جنگ سرد' },
  place: { en: 'Berlin, 1961', es: 'Berlín, 1961', fa: 'برلین، ۱۹۶۱' },
  intro: [
    { en: 'The Grump blurred the [[cold war|Cold War]] page. People forgot why Berlin was split.',
      es: 'El Gruñón borró la página de la [[cold war|Guerra Fría]]. La gente olvidó por qué Berlín estaba dividida.',
      fa: 'غرغرو صفحهٔ [[cold war|جنگ سرد]] را تار کرد. مردم فراموش کردند چرا برلین دو تکه شد.' },
    { en: 'Talk to the 3 people here, then fix the time stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del tiempo.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ زمان را درست کن.' }
  ],
  /* cut scenes: Berlin on the world map, 1961 on the timeline */
  scenes: {
    at: [13.4, 52.5],
    year: 1961,
    start: [
      { en: 'After World War II, the US and the Soviet Union became rivals.',
        es: 'Después de la Segunda Guerra Mundial, Estados Unidos y la Unión Soviética se volvieron rivales.',
        fa: 'بعد از جنگ جهانی دوم، امریکا و اتحاد شوروی رقیب هم شدند.' },
      { en: 'They never fought each other directly. People called it the Cold War.',
        es: 'Nunca pelearon directamente entre ellos. La gente lo llamó la Guerra Fría.',
        fa: 'آن‌ها هرگز مستقیم با هم نجنگیدند. مردم آن را جنگ سرد نامیدند.' },
      { en: 'Germany and its capital, Berlin, were split into East and West.',
        es: 'Alemania y su capital, Berlín, quedaron divididas en Este y Oeste.',
        fa: 'جرمنی و پایتختش برلین به شرق و غرب تقسیم شدند.' }
    ],
    page: { en: 'The Berlin Wall stood for 28 years. It fell in 1989.',
      es: 'El Muro de Berlín estuvo en pie 28 años. Cayó en 1989.',
      fa: 'دیوار برلین ۲۸ سال پابرجا ماند. در سال ۱۹۸۹ فرو ریخت.' },
    guess: {
      q: { en: 'Before 1961, how many people left East Germany for the West?', es: 'Antes de 1961, ¿cuántas personas se fueron de Alemania Oriental al Oeste?', fa: 'پیش از ۱۹۶۱، چند نفر جرمنی شرقی را به طرف غرب ترک کردند؟' },
      choices: [
        { t: { en: '🚶 More than 2 million', es: '🚶 Más de 2 millones', fa: '🚶 بیشتر از ۲ میلیون' }, ok: true },
        { t: { en: '🏠 Almost nobody', es: '🏠 Casi nadie', fa: '🏠 تقریباً هیچ کس' } }
      ],
      why: { en: 'About 2.7 million people left from 1949 to 1961. Many were young workers.', es: 'Unos 2.7 millones de personas se fueron entre 1949 y 1961. Muchos eran trabajadores jóvenes.', fa: 'از ۱۹۴۹ تا ۱۹۶۱ حدود ۲.۷ میلیون نفر رفتند. بسیاری کارگران جوان بودند.' }
    },
    next: {
      q: { en: 'Next: India and Ghana. How did they mostly win their freedom?', es: 'Ahora: India y Ghana. ¿Cómo ganaron casi siempre su libertad?', fa: 'بعدی: هند و گانا. بیشتر با چه راهی آزادی خود را گرفتند؟' },
      choices: [
        { t: { en: '✊ Peaceful protest', es: '✊ Protesta pacífica', fa: '✊ اعتراض صلح‌آمیز' }, ok: true },
        { t: { en: '⚔️ A long war', es: '⚔️ Una guerra larga', fa: '⚔️ یک جنگ طولانی' } }
      ],
      why: { en: 'Millions protested without weapons, with leaders like Gandhi and Nkrumah. India was free in 1947.', es: 'Millones protestaron sin armas, con líderes como Gandhi y Nkrumah. India fue libre en 1947.', fa: 'میلیون‌ها نفر بدون سلاح اعتراض کردند، با رهبرانی مثل گاندی و نکرومه. هند در ۱۹۴۷ آزاد شد.' }
    }
  },
  /* houses: who lives behind each door; walk in and talk */
  houses: [
    { at: [3, 2], name: { en: 'Mr. Mensah', es: 'Sr. Mensah', fa: 'آقای منسا' },
      look: { skin: 5, hair: '#120c08', shirt: '#e0a020', pants: '#2a2a3a', style: 'short' },
      lines: [
        { en: 'I came from Ghana to study engineering here in Berlin.', es: 'Vine de Ghana a estudiar ingeniería aquí en Berlín.', fa: 'من از گانا آمدم تا اینجا در برلین انجنیری بخوانم.' },
        { en: 'Ghana won freedom from Britain in 1957. We chose neither Cold War side.', es: 'Ghana se liberó de Gran Bretaña en 1957. No elegimos ningún lado de la Guerra Fría.', fa: 'گانا در ۱۹۵۷ از بریتانیا آزاد شد. ما طرف هیچ کدام در جنگ سرد را نگرفتیم.' },
        { en: 'Next month, leaders of [[non-aligned|non-aligned]] countries will meet in Belgrade.', es: 'El mes que viene, líderes de países [[non-aligned|no alineados]] se reunirán en Belgrado.', fa: 'ماه آینده، رهبران کشورهای [[non-aligned|بی‌طرف]] در بلگراد جمع می‌شوند.' }
      ] },
    { at: [3, 13], name: { en: 'Nurse Schulz', es: 'Enfermera Schulz', fa: 'نرس شولتز' },
      look: { skin: 1, hair: '#c8a060', shirt: '#f2f2f2', pants: '#3a4a6a', style: 'bun' },
      lines: [
        { en: 'I am a nurse. Many of my coworkers lived in East Berlin.', es: 'Soy enfermera. Muchos de mis compañeros vivían en Berlín Este.', fa: 'من نرس هستم. بسیاری از همکارانم در برلین شرقی زندگی می‌کردند.' },
        { en: 'Since Sunday, they cannot come to work. Our hospital is half empty.', es: 'Desde el domingo no pueden venir a trabajar. Nuestro hospital está medio vacío.', fa: 'از روز یکشنبه نمی‌توانند سر کار بیایند. شفاخانهٔ ما نیمه خالی است.' }
      ] },
    { at: [19, 2], name: { en: 'Mr. Lange', es: 'Sr. Lange', fa: 'آقای لانگه' },
      look: { skin: 1, hair: '#6a5a4a', shirt: '#5a6a5a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'I teach school in East Berlin. We teach that [[communism|communism]] shares things fairly.', es: 'Soy maestro en Berlín Este. Enseñamos que el [[communism|comunismo]] reparte las cosas con justicia.', fa: 'من در برلین شرقی معلم مکتب هستم. درس می‌دهیم که [[communism|کمونیزم]] همه چیز را عادلانه تقسیم می‌کند.' },
        { en: 'In April, the Soviets sent Yuri Gagarin into space. He was the first person there!', es: 'En abril, los soviéticos mandaron a Yuri Gagarin al espacio. ¡Fue la primera persona allí!', fa: 'در ماه اپریل، شوروی یوری گاگارین را به فضا فرستاد. او اولین انسان آنجا بود!' },
        { en: 'But I must be careful. Secret police listen for anyone who complains.', es: 'Pero debo tener cuidado. La policía secreta escucha a quien se queje.', fa: 'اما باید محتاط باشم. پولیس مخفی به هر کسی که شکایت کند گوش می‌دهد.' }
      ] },
    { at: [21, 13], name: { en: 'Anja', es: 'Anja', fa: 'آنیا' },
      look: { skin: 1, hair: '#8a5a2a', shirt: '#c04a4a', pants: '#2a3a5a', style: 'long' },
      lines: [
        { en: 'My father worked in West Berlin, like many people on our street.', es: 'Mi papá trabajaba en Berlín Oeste, como mucha gente de nuestra calle.', fa: 'پدرم در برلین غربی کار می‌کرد، مثل بسیاری از مردم سرک ما.' },
        { en: 'Now he cannot cross. He must find a new job here in the East.', es: 'Ahora no puede cruzar. Tiene que buscar otro trabajo aquí en el Este.', fa: 'حالا نمی‌تواند بگذرد. باید اینجا در شرق کار نو پیدا کند.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     x 15: the Wall (W); x 16: barbed wire (F). The only gap is row 15, Checkpoint Charlie on Friedrichstrasse.
     West (x 0-14): homes (R/Q over h), the viewing platform (k) by the wall, Bernauer Strasse (row 5), a park (T).
     East (x 17-31): apartment blocks (J over h), homes, the radio factory (X), state shops with queues (m). */
  map: [
    'UUUUUUUUUUUUUUUWFJJJJJJJJJJJJJJJ',
    'U.RRR...QQQ....WF.JJJ....QQQ...J',
    'U.hdh...hhh.x..WF.hdh....hhh...J',
    'U............kkWF..............J',
    'U............kkWF..JJJJ..JJJJ..J',
    'UllllllllllllllWF..hhhh..hhhh..J',
    'U.TT..,...TT...WF..............J',
    'U.T..........T.WF...:::::::....J',
    'U.TT.......TT..WF..T........T..J',
    'U..............WF..............J',
    'U......::......WF......::......J',
    'U......::......WF......::......J',
    'U.RRR......QQQ.WF...RRR...XXXXXJ',
    'U.hdh......hhh.WF...hdh...XXXXXJ',
    'U............x.WF.x............J',
    'UllllllllllllllllllllllllllllllJ',
    'U..............WF..............J',
    'U.TTT.....T....WF..mmm....mmm..J',
    'U.T.......TT...WF..............J',
    'U...,..........WF.....,........J',
    'U..............WF..............J',
    'UUUUUUUUUUUUUUUWFJJJJJJJJJJJJJJJ'
  ],
  start: [7, 16],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [17, 9], at: [23, 9], decor: 'coinold',
      clue: { en: 'From this note, walk 6 steps east. Stay on the same row.', es: 'Desde esta nota, camina 6 pasos al este. Quédate en la misma fila.', fa: 'از این یادداشت، ۶ قدم به شرق برو. در همان قطار بمان.' },
      text: { en: 'East and West Germany each had their own money. Here is an old East German coin.', es: 'Alemania Oriental y Occidental tenían cada una su propio dinero. Aquí hay una moneda vieja del Este.', fa: 'جرمنی شرقی و غربی هر کدام پول خود را داشتند. اینجا یک سکهٔ کهنهٔ جرمنی شرقی است.' } },
    { clueAt: [1, 17], at: [1, 20], decor: 'flower',
      clue: { en: 'From this note, walk 3 steps south, to the corner of the park.', es: 'Desde esta nota, camina 3 pasos al sur, hasta la esquina del parque.', fa: 'از این یادداشت، ۳ قدم به جنوب برو، تا کنج پارک.' },
      text: { en: 'After the war, Berliners grew gardens on bombed land. Here is a small flower.', es: 'Después de la guerra, la gente de Berlín sembró huertos en tierra bombardeada. Aquí hay una florecita.', fa: 'بعد از جنگ، مردم برلین در زمین‌های بم‌خورده باغچه ساختند. اینجا یک گل کوچک است.' } }
  ],

  words: {
    'cold war': { en: 'the long rivalry between the US and the Soviet Union, from 1945 to 1991', es: 'la larga rivalidad entre Estados Unidos y la Unión Soviética, de 1945 a 1991', fa: 'رقابت طولانی میان امریکا و اتحاد شوروی، از ۱۹۴۵ تا ۱۹۹۱' },
    superpower: { en: 'a country with huge power over much of the world', es: 'un país con un poder enorme sobre gran parte del mundo', fa: 'کشوری که بر بخش بزرگی از جهان قدرت بسیار زیاد دارد' },
    communism: { en: 'a system where the government owns farms and factories, and one party rules', es: 'un sistema donde el gobierno es dueño de fincas y fábricas, y manda un solo partido', fa: 'نظامی که دولت مالک فارم‌ها و فابریکه‌ها است و یک حزب حکومت می‌کند' },
    capitalism: { en: 'a system where people and companies own businesses and trade freely', es: 'un sistema donde las personas y las empresas tienen negocios y comercian libremente', fa: 'نظامی که مردم و شرکت‌ها مالک کاروبار هستند و آزادانه تجارت می‌کنند' },
    blockade: { en: 'closing roads, rails or ports so nothing can get in or out', es: 'cerrar caminos, trenes o puertos para que nada entre ni salga', fa: 'بستن سرک‌ها، ریل یا بندرها تا هیچ چیز داخل یا خارج نشود' },
    airlift: { en: 'carrying food and supplies by plane when roads are closed', es: 'llevar comida y provisiones en avión cuando los caminos están cerrados', fa: 'بردن غذا و سامان با طیاره وقتی سرک‌ها بسته هستند' },
    'non-aligned': { en: 'not joining either side in the Cold War', es: 'que no se une a ningún lado en la Guerra Fría', fa: 'طرف هیچ کدام را در جنگ سرد نگرفتن' },
    refugee: { en: 'a person who leaves home to escape danger or harsh rule', es: 'una persona que deja su hogar para escapar del peligro o de un gobierno duro', fa: 'کسی که برای فرار از خطر یا حکومت سخت خانه‌اش را ترک می‌کند' }
  },

  npcs: [
    {
      x: 6, y: 8,
      name: { en: 'Helga', es: 'Helga', fa: 'هلگا' },
      role: { en: 'Baker', es: 'Panadera', fa: 'نانوا' },
      look: { skin: 1, hair: '#d8d8d8', shirt: '#7a4a2a', pants: '#3a3a3a', style: 'bun' },
      lines: [
        { en: 'In 1945, after the war, four countries split Berlin into parts.', es: 'En 1945, después de la guerra, cuatro países dividieron Berlín en partes.', fa: 'در ۱۹۴۵، بعد از جنگ، چهار کشور برلین را به چند بخش تقسیم کردند.' },
        { en: 'The US, Britain and France had the west. The Soviets had the east.', es: 'Estados Unidos, Gran Bretaña y Francia tenían el oeste. Los soviéticos, el este.', fa: 'امریکا، بریتانیا و فرانسه غرب را داشتند. شوروی شرق را داشت.' },
        { en: 'In 1948, the Soviets started a [[blockade|blockade]]. All roads and trains here were closed.', es: 'En 1948, los soviéticos hicieron un [[blockade|bloqueo]]. Cerraron todos los caminos y trenes.', fa: 'در ۱۹۴۸، شوروی [[blockade|محاصره]] را شروع کرد. همهٔ سرک‌ها و ریل‌ها بسته شدند.' },
        { en: 'So planes flew in food and coal for almost a year: the [[airlift|airlift]].', es: 'Entonces los aviones trajeron comida y carbón por casi un año: el [[airlift|puente aéreo]].', fa: 'پس طیاره‌ها تقریباً یک سال غذا و ذغال آوردند: [[airlift|پل هوایی]].' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why did planes fly food into West Berlin in 1948?', es: '¿Por qué los aviones llevaron comida a Berlín Oeste en 1948?', fa: 'چرا در ۱۹۴۸ طیاره‌ها به برلین غربی غذا بردند؟' },
        choices: [
          { ok: true, t: { en: 'The Soviets closed the roads and trains', es: 'Los soviéticos cerraron caminos y trenes', fa: 'شوروی سرک‌ها و ریل‌ها را بست' },
            why: { en: 'Yes. Nothing could come in by land, so the US and Britain flew it in.', es: 'Sí. Nada podía entrar por tierra, así que Estados Unidos y Gran Bretaña lo llevaron en avión.', fa: 'بله. از راه زمین هیچ چیز نمی‌آمد، پس امریکا و بریتانیا با طیاره آوردند.' } },
          { t: { en: 'West Berlin farms had a very bad harvest', es: 'Las fincas de Berlín Oeste tuvieron mala cosecha', fa: 'فارم‌های برلین غربی حاصل بسیار بد داشتند' },
            why: { en: 'The problem was not the harvest. The Soviets blocked every road and rail line.', es: 'El problema no fue la cosecha. Los soviéticos bloquearon cada camino y vía de tren.', fa: 'مشکل حاصل نبود. شوروی هر سرک و خط ریل را بست.' } },
          { t: { en: 'Planes were much cheaper than trucks then', es: 'Los aviones eran más baratos que los camiones', fa: 'آن وقت طیاره از لاری خیلی ارزان‌تر بود' },
            why: { en: 'Planes cost far more than trucks. They flew because the land routes were closed.', es: 'Los aviones costaban mucho más que los camiones. Volaron porque las rutas por tierra estaban cerradas.', fa: 'طیاره خیلی گران‌تر از لاری بود. پرواز کردند چون راه‌های زمینی بسته بود.' } }
        ]
      }
    },
    {
      x: 11, y: 16,
      name: { en: 'Greta', es: 'Greta', fa: 'گرِتا' },
      role: { en: 'Radio reporter', es: 'Reportera de radio', fa: 'خبرنگار رادیو' },
      look: { skin: 2, hair: '#3a2416', shirt: '#2f5f9a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'I report for a radio station in West Berlin.', es: 'Soy reportera de una estación de radio de Berlín Oeste.', fa: 'من برای یک رادیو در برلین غربی خبر می‌گیرم.' },
        { en: 'Two [[superpower|superpowers]] lead the world now: the United States and the Soviet Union.', es: 'Dos [[superpower|superpotencias]] dirigen el mundo: Estados Unidos y la Unión Soviética.', fa: 'حالا دو [[superpower|ابرقدرت]] جهان را رهبری می‌کنند: امریکا و اتحاد شوروی.' },
        { en: 'The West has [[capitalism|capitalism]] and free elections. The East has [[communism|communism]] and one party.', es: 'El Oeste tiene [[capitalism|capitalismo]] y elecciones libres. El Este tiene [[communism|comunismo]] y un solo partido.', fa: 'غرب [[capitalism|سرمایه‌داری]] و انتخابات آزاد دارد. شرق [[communism|کمونیزم]] و یک حزب دارد.' },
        { en: 'They never fight each other head-on. They build bombs and win friends instead.', es: 'Nunca pelean de frente. En cambio, fabrican bombas y buscan aliados.', fa: 'هرگز رو در رو نمی‌جنگند. به جایش بم می‌سازند و دوست پیدا می‌کنند.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Why do people call it the Cold War?', es: '¿Por qué la gente la llama la Guerra Fría?', fa: 'چرا مردم آن را جنگ سرد می‌نامند؟' },
        choices: [
          { ok: true, t: { en: 'The two superpowers never fought head-on', es: 'Las superpotencias nunca pelearon de frente', fa: 'دو ابرقدرت هرگز رو در رو نجنگیدند' },
            why: { en: 'Right. They were rivals, but their armies never fought each other directly.', es: 'Correcto. Eran rivales, pero sus ejércitos nunca pelearon directamente.', fa: 'درست. رقیب بودند، اما عسکرهایشان هرگز مستقیم با هم نجنگیدند.' } },
          { t: { en: 'All its battles were fought in snowy places', es: 'Sus batallas fueron en lugares con nieve', fa: 'همهٔ جنگ‌هایش در جاهای برفی بود' },
            why: { en: '"Cold" does not mean the weather. It means no direct fighting between the superpowers.', es: '"Fría" no habla del clima. Significa que las superpotencias no pelearon directamente.', fa: '«سرد» دربارهٔ هوا نیست. یعنی ابرقدرت‌ها مستقیم با هم نجنگیدند.' } },
          { t: { en: 'It started and ended in one cold winter', es: 'Empezó y terminó en un solo invierno frío', fa: 'در یک زمستان سرد شروع و تمام شد' },
            why: { en: 'The Cold War lasted more than 40 years, from about 1945 to 1991.', es: 'La Guerra Fría duró más de 40 años, de 1945 a 1991 más o menos.', fa: 'جنگ سرد بیشتر از ۴۰ سال طول کشید، تقریباً از ۱۹۴۵ تا ۱۹۹۱.' } }
        ]
      }
    },
    {
      x: 23, y: 18,
      name: { en: 'Petra', es: 'Petra', fa: 'پترا' },
      role: { en: 'Factory worker', es: 'Obrera de fábrica', fa: 'کارگر فابریکه' },
      look: { skin: 1, hair: '#4a2a1a', shirt: '#4a6a8a', pants: '#3a3a3a', style: 'long' },
      lines: [
        { en: 'Hello. I build radios in that factory here in East Berlin.', es: 'Hola. Armo radios en esa fábrica de Berlín Este.', fa: 'سلام. من در آن فابریکه در برلین شرقی رادیو می‌سازم.' },
        { en: 'Our leaders say the wall protects us from enemies in the West.', es: 'Nuestros líderes dicen que el muro nos protege de los enemigos del Oeste.', fa: 'رهبران ما می‌گویند دیوار ما را از دشمنان غرب حفاظت می‌کند.' },
        { en: 'But it really stops us from leaving. Millions of [[refugee|refugees]] already left.', es: 'Pero en realidad nos impide salir. Millones de [[refugee|refugiados]] ya se fueron.', fa: 'اما در اصل جلوی رفتن ما را می‌گیرد. میلیون‌ها [[refugee|پناهنده]] قبلاً رفته‌اند.' },
        { en: 'Some of us like our free schools and sure jobs. But we cannot speak freely.', es: 'A algunos nos gustan las escuelas gratis y el trabajo seguro. Pero no podemos hablar libremente.', fa: 'بعضی از ما مکتب مفت و کار مطمئن را دوست داریم. اما آزادانه گپ زده نمی‌توانیم.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'What was the main reason East Germany built the wall?', es: '¿Cuál fue la razón principal por la que Alemania Oriental construyó el muro?', fa: 'دلیل اصلی ساختن دیوار توسط جرمنی شرقی چه بود؟' },
        choices: [
          { ok: true, t: { en: 'To stop its own people from leaving', es: 'Para que su propia gente no se fuera', fa: 'تا مردم خودش نتوانند بروند' },
            why: { en: 'Yes. So many people were leaving that East Germany was losing its workers.', es: 'Sí. Se iba tanta gente que Alemania Oriental se estaba quedando sin trabajadores.', fa: 'بله. این‌قدر زیاد مردم می‌رفتند که جرمنی شرقی کارگرانش را از دست می‌داد.' } },
          { t: { en: 'To stop armies from the West invading', es: 'Para frenar a ejércitos del Oeste', fa: 'تا جلوی حملهٔ عسکرهای غرب را بگیرد' },
            why: { en: 'That is what the leaders said. But the wall was built to keep East Germans in.', es: 'Eso decían los líderes. Pero el muro se hizo para que los alemanes del Este no salieran.', fa: 'رهبران این را می‌گفتند. اما دیوار برای نگه داشتن مردم جرمنی شرقی ساخته شد.' } },
          { t: { en: 'To make a long park through Berlin', es: 'Para hacer un parque largo en Berlín', fa: 'تا یک پارک دراز در برلین بسازد' },
            why: { en: 'The wall was no park. It cut through streets, homes and families.', es: 'El muro no era un parque. Cortó calles, casas y familias.', fa: 'دیوار پارک نبود. سرک‌ها، خانه‌ها و خانواده‌ها را از هم جدا کرد.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 12, y: 2, text: { en: 'BERNAUER STRASSE · WEST BERLIN · The new wall runs right along this street.', es: 'BERNAUER STRASSE · BERLÍN OESTE · El muro nuevo pasa justo por esta calle.', fa: 'سرک برناوئر · برلین غربی · دیوار نو درست در کنار همین سرک است.' } },
    { x: 13, y: 14, text: { en: 'CHECKPOINT CHARLIE · Visitors from other countries and Allied soldiers may cross here.', es: 'CHECKPOINT CHARLIE · Aquí pueden cruzar visitantes de otros países y soldados aliados.', fa: 'ایست بازرسی چارلی · مهمانان کشورهای دیگر و عسکرهای متحد می‌توانند از اینجا بگذرند.' } },
    { x: 18, y: 14, text: { en: 'EAST BERLIN · 1961 · The capital of [[communism|communist]] East Germany.', es: 'BERLÍN ESTE · 1961 · La capital de la Alemania Oriental [[communism|comunista]].', fa: 'برلین شرقی · ۱۹۶۱ · پایتخت جرمنی شرقی [[communism|کمونیست]].' } }
  ],

  /* the quest: Jonas the bus driver (gold !) in West Berlin -> Liesel in East Berlin, across Checkpoint Charlie
     -> the wooden viewing platform by the wall in the north of West Berlin -> back to Jonas */
  quest: {
    stat: 'pla',
    title: { en: 'A Wave Across the Wall', es: 'Un saludo sobre el muro', fa: 'دست تکان دادن از روی دیوار' },
    giver: {
      x: 8, y: 18,
      name: { en: 'Jonas', es: 'Jonas', fa: 'یوناس' },
      role: { en: 'Bus driver', es: 'Chofer de autobús', fa: 'دریور بس' },
      look: { skin: 1, hair: '#c8a060', shirt: '#3a5a3a', pants: '#2a2a3a', hat: '#2a3a5a' },
      lines: [
        { en: 'On August 13, soldiers closed the border in one night.', es: 'El 13 de agosto, los soldados cerraron la frontera en una sola noche.', fa: 'در ۱۳ اگست، عسکرها مرز را در یک شب بستند.' },
        { en: 'My mother lives in East Berlin. Now I cannot visit her.', es: 'Mi mamá vive en Berlín Este. Ahora no puedo visitarla.', fa: 'مادرم در برلین شرقی زندگی می‌کند. حالا نمی‌توانم پیشش بروم.' },
        { en: 'Visitors from other countries can still cross at Checkpoint Charlie.', es: 'Los visitantes de otros países todavía pueden cruzar en Checkpoint Charlie.', fa: 'مهمانان کشورهای دیگر هنوز می‌توانند از ایست بازرسی چارلی بگذرند.' },
        { en: 'Please find Liesel, her neighbor. She will know where I can see Mother.', es: 'Por favor, busca a Liesel, su vecina. Ella sabrá dónde puedo ver a mamá.', fa: 'لطفاً لیزل، همسایهٔ مادرم را پیدا کن. او می‌داند کجا مادرم را دیده می‌توانم.' }
      ],
      wait: { en: 'Liesel lives in East Berlin, north of the checkpoint. Cross at Checkpoint Charlie.', es: 'Liesel vive en Berlín Este, al norte del puesto. Cruza en Checkpoint Charlie.', fa: 'لیزل در برلین شرقی، شمالِ ایست بازرسی زندگی می‌کند. از ایست بازرسی چارلی بگذر.' },
      thanks: { en: 'You saw her wave? She is well! One day, this wall will fall.', es: '¿La viste saludar? ¡Está bien! Algún día este muro caerá.', fa: 'دیدی که دست تکان داد؟ او خوب است! یک روز این دیوار می‌افتد.' }
    },
    contact: {
      x: 24, y: 8,
      name: { en: 'Liesel', es: 'Liesel', fa: 'لیزل' },
      role: { en: 'Seamstress', es: 'Costurera', fa: 'خیاط' },
      look: { skin: 1, hair: '#9a9a9a', shirt: '#8a2a3a', pants: '#3a2a2a', style: 'bun' },
      lines: [
        { en: 'Jonas\'s mother lives in my building. She misses him every day.', es: 'La mamá de Jonas vive en mi edificio. Lo extraña todos los días.', fa: 'مادر یوناس در تعمیر ما زندگی می‌کند. هر روز دلش برای او تنگ می‌شود.' },
        { en: 'Every day at noon, she waves a white scarf from her window.', es: 'Cada día al mediodía, ella agita un pañuelo blanco desde su ventana.', fa: 'هر روز چاشت، او از کلکینش یک دستمال سفید تکان می‌دهد.' },
        { en: 'Go to the wooden platform in West Berlin, in the north, right by the wall.', es: 'Ve a la plataforma de madera en Berlín Oeste, en el norte, junto al muro.', fa: 'به سکوی چوبی در برلین غربی برو، در شمال، درست کنار دیوار.' }
      ]
    },
    action: {
      type: 'find',
      at: [14, 3],
      hint: { en: 'the wooden platform, north in West Berlin, by the wall', es: 'la plataforma de madera, al norte de Berlín Oeste, junto al muro', fa: 'سکوی چوبی، شمال برلین غربی، کنار دیوار' },
      found: { en: 'You climb the platform. Across the wall, a woman waves a white scarf.', es: 'Subes a la plataforma. Al otro lado del muro, una mujer agita un pañuelo blanco.', fa: 'از سکو بالا می‌روی. آن طرف دیوار، یک زن دستمال سفید تکان می‌دهد.' },
      item: { icon: '👋', name: { en: 'News: his mother is well', es: 'Noticia: su mamá está bien', fa: 'خبر: مادرش خوب است' } }
    }
  },

  scraps: [[1, 1], [30, 1], [30, 20]],
  smudges: [[10, 20], [21, 10]],

  challenge: {
    at: [28, 19],
    type: 'table',
    stat: 'hei',
    title: { en: 'Who left, and why it stopped', es: 'Quiénes se fueron y por qué paró', fa: 'چه کسانی رفتند و چرا متوقف شد' },
    intro: { en: 'The Grump smudged the [[refugee|refugee]] records. Read the table and the leader\'s words, then answer.',
      es: 'El Gruñón manchó los registros de [[refugee|refugiados]]. Lee la tabla y las palabras del líder, y luego responde.',
      fa: 'غرغرو ثبت‌های [[refugee|پناهندگان]] را لکه‌دار کرد. جدول و گفتهٔ رهبر را بخوان، بعد جواب بده.' },
    table: {
      head: [
        { en: 'Year', es: 'Año', fa: 'سال' },
        { en: 'People who left East Germany for the West', es: 'Personas que se fueron de Alemania Oriental al Oeste', fa: 'کسانی که جرمنی شرقی را به طرف غرب ترک کردند' }
      ],
      rows: [
        [{ en: '1950', es: '1950', fa: '۱۹۵۰' }, { en: 'about 198,000', es: 'unas 198,000', fa: 'حدود ۱۹۸٬۰۰۰' }],
        [{ en: '1953', es: '1953', fa: '۱۹۵۳' }, { en: 'about 331,000', es: 'unas 331,000', fa: 'حدود ۳۳۱٬۰۰۰' }],
        [{ en: '1957', es: '1957', fa: '۱۹۵۷' }, { en: 'about 262,000', es: 'unas 262,000', fa: 'حدود ۲۶۲٬۰۰۰' }],
        [{ en: '1960', es: '1960', fa: '۱۹۶۰' }, { en: 'about 199,000', es: 'unas 199,000', fa: 'حدود ۱۹۹٬۰۰۰' }],
        [{ en: '1961', es: '1961', fa: '۱۹۶۱' }, { en: 'about 207,000 (most before August 13)', es: 'unas 207,000 (casi todas antes del 13 de agosto)', fa: 'حدود ۲۰۷٬۰۰۰ (بیشترشان پیش از ۱۳ اگست)' }],
        [{ en: '1962', es: '1962', fa: '۱۹۶۲' }, { en: 'about 21,000', es: 'unas 21,000', fa: 'حدود ۲۱٬۰۰۰' }]
      ],
      note: { en: 'Rounded numbers. In June 1961, East Germany\'s leader said: "No one intends to build a wall."',
        es: 'Números redondeados. En junio de 1961, el líder de Alemania Oriental dijo: "Nadie tiene la intención de construir un muro".',
        fa: 'عددها گرد شده‌اند. در جون ۱۹۶۱، رهبر جرمنی شرقی گفت: «هیچ کس قصد ساختن دیوار را ندارد.»' }
    },
    questions: [
      { q: { en: 'In which year did the most people leave?', es: '¿En qué año se fue más gente?', fa: 'در کدام سال بیشترین مردم رفتند؟' },
        choices: [{ en: '1953', es: '1953', fa: '۱۹۵۳' }, { en: '1950', es: '1950', fa: '۱۹۵۰' }, { en: '1960', es: '1960', fa: '۱۹۶۰' }, { en: '1962', es: '1962', fa: '۱۹۶۲' }],
        answer: 0,
        why: { en: 'About 331,000 left in 1953. That year, Soviet tanks crushed a workers\' uprising in East Germany.', es: 'Unas 331,000 personas se fueron en 1953. Ese año, tanques soviéticos aplastaron una rebelión obrera.', fa: 'در ۱۹۵۳ حدود ۳۳۱٬۰۰۰ نفر رفتند. آن سال تانک‌های شوروی قیام کارگران را سرکوب کردند.' } },
      { q: { en: 'How did the number change from 1961 to 1962?', es: '¿Cómo cambió el número de 1961 a 1962?', fa: 'عدد از ۱۹۶۱ تا ۱۹۶۲ چطور تغییر کرد؟' },
        choices: [{ en: 'It fell to about one tenth', es: 'Bajó a más o menos una décima parte', fa: 'تقریباً به یک دهم پایین آمد' }, { en: 'It went up by a lot', es: 'Subió mucho', fa: 'خیلی زیاد شد' }, { en: 'It stayed about the same', es: 'Quedó casi igual', fa: 'تقریباً همان ماند' }],
        answer: 0,
        why: { en: 'It fell from about 207,000 to about 21,000. Almost no one could get out.', es: 'Bajó de unas 207,000 a unas 21,000. Casi nadie podía salir.', fa: 'از حدود ۲۰۷٬۰۰۰ به حدود ۲۱٬۰۰۰ رسید. تقریباً هیچ کس بیرون شده نمی‌توانست.' } },
      { q: { en: 'What most likely caused that change?', es: '¿Qué causó ese cambio, lo más probable?', fa: 'به احتمال زیاد چه چیزی باعث آن تغییر شد؟' },
        choices: [{ en: 'The wall, built in August 1961', es: 'El muro, construido en agosto de 1961', fa: 'دیوار، که در اگست ۱۹۶۱ ساخته شد' }, { en: 'Life in the East got much easier', es: 'La vida en el Este se hizo mucho más fácil', fa: 'زندگی در شرق خیلی آسان‌تر شد' }, { en: 'The West closed its doors to them', es: 'El Oeste les cerró las puertas', fa: 'غرب دروازه‌هایش را به رویشان بست' }],
        answer: 0,
        why: { en: 'The wall and the guards stopped people from leaving. West Germany still welcomed them.', es: 'El muro y los guardias impidieron que la gente saliera. Alemania Occidental todavía los recibía.', fa: 'دیوار و نگهبانان جلوی رفتن مردم را گرفتند. جرمنی غربی هنوز آن‌ها را می‌پذیرفت.' } },
      { q: { en: 'The leader said no one planned a wall. Two months later, it went up. What does this show?', es: 'El líder dijo que nadie planeaba un muro. Dos meses después, lo construyeron. ¿Qué muestra esto?', fa: 'رهبر گفت کسی نقشهٔ دیوار ندارد. دو ماه بعد ساخته شد. این چه را نشان می‌دهد؟' },
        choices: [{ en: 'Check what leaders say against what they do', es: 'Hay que comparar lo que dicen los líderes con lo que hacen', fa: 'گفتهٔ رهبران را با کارشان مقایسه کن' }, { en: 'Leaders always tell the whole truth', es: 'Los líderes siempre dicen toda la verdad', fa: 'رهبران همیشه تمام حقیقت را می‌گویند' }, { en: 'The wall was built by accident', es: 'El muro se construyó por accidente', fa: 'دیوار تصادفی ساخته شد' }],
        answer: 0,
        why: { en: 'A source can hide the truth. Historians compare people\'s words with their actions.', es: 'Una fuente puede ocultar la verdad. Los historiadores comparan las palabras con las acciones.', fa: 'یک منبع می‌تواند حقیقت را پنهان کند. تاریخ‌دانان گفته‌ها را با کارها مقایسه می‌کنند.' } }
    ],
    success: { en: 'The records are clear again! The wall stopped people from leaving.', es: '¡Los registros están claros otra vez! El muro impidió que la gente se fuera.', fa: 'ثبت‌ها دوباره روشن شدند! دیوار جلوی رفتن مردم را گرفت.' }
  },

  boss: {
    at: [6, 5],
    stat: 'loc',
    need: 3,
    name: { en: 'The Forgetting', es: 'El Olvido', fa: 'فراموشی' },
    appear: { en: 'The Forgetting drifts like gray fog along Bernauer Strasse.', es: 'El Olvido flota como niebla gris por la Bernauer Strasse.', fa: 'فراموشی مثل مه خاکستری در سرک برناوئر می‌چرخد.' },
    taunt: { en: 'No one will remember the families this wall split apart.', es: 'Nadie recordará a las familias que este muro separó.', fa: 'هیچ کس خانواده‌هایی را که این دیوار جدا کرد به یاد نخواهد داشت.' },
    win: { en: 'The fog lifts over Berlin. Chronicle page 8.1 floats down into your hands.', es: 'La niebla se levanta sobre Berlín. La página 8.1 de la crónica cae en tus manos.', fa: 'مه از روی برلین کنار می‌رود. صفحهٔ ۸.۱ تاریخ‌نامه به دستت می‌افتد.' },
    questions: [
      { q: { en: 'What was the Cold War?', es: '¿Qué fue la Guerra Fría?', fa: 'جنگ سرد چه بود؟' },
        choices: [
          { en: 'A rivalry between the US and the Soviet Union', es: 'Una rivalidad entre Estados Unidos y la Unión Soviética', fa: 'رقابت میان امریکا و اتحاد شوروی' },
          { en: 'A short war between Germany and France in 1961', es: 'Una guerra corta entre Alemania y Francia en 1961', fa: 'یک جنگ کوتاه میان جرمنی و فرانسه در ۱۹۶۱' },
          { en: 'A war fought only in the snow of Russia', es: 'Una guerra solo en la nieve de Rusia', fa: 'جنگی که فقط در برف روسیه بود' },
          { en: 'A trade deal between East and West Berlin', es: 'Un acuerdo de comercio entre Berlín Este y Oeste', fa: 'یک قرارداد تجارت میان برلین شرقی و غربی' }],
        answer: 0,
        why: { en: 'From about 1945 to 1991, the two superpowers competed for power, but never fought directly.', es: 'De 1945 a 1991, las dos superpotencias compitieron por el poder, pero nunca pelearon directamente.', fa: 'تقریباً از ۱۹۴۵ تا ۱۹۹۱، دو ابرقدرت بر سر قدرت رقابت کردند، اما مستقیم نجنگیدند.' } },
      { q: { en: 'Which two superpowers led the two sides?', es: '¿Qué dos superpotencias dirigían los dos lados?', fa: 'کدام دو ابرقدرت دو طرف را رهبری می‌کردند؟' },
        choices: [
          { en: 'The United States and the Soviet Union', es: 'Estados Unidos y la Unión Soviética', fa: 'امریکا و اتحاد شوروی' },
          { en: 'Britain and France, with their allies', es: 'Gran Bretaña y Francia, con sus aliados', fa: 'بریتانیا و فرانسه، با متحدانشان' },
          { en: 'China and Japan, with all their allies', es: 'China y Japón, con todos sus aliados', fa: 'چین و جاپان، با همهٔ متحدانشان' },
          { en: 'Germany and Italy, with their allies', es: 'Alemania e Italia, con sus aliados', fa: 'جرمنی و ایتالیا، با متحدانشان' }],
        answer: 0,
        why: { en: 'The US led the West. The Soviet Union led the communist East.', es: 'Estados Unidos dirigía el Oeste. La Unión Soviética dirigía el Este comunista.', fa: 'امریکا غرب را رهبری می‌کرد. اتحاد شوروی شرق کمونیست را.' } },
      { q: { en: 'What was the Berlin Airlift of 1948 and 1949?', es: '¿Qué fue el puente aéreo de Berlín de 1948 y 1949?', fa: 'پل هوایی برلین در ۱۹۴۸ و ۱۹۴۹ چه بود؟' },
        choices: [
          { en: 'Planes flying food and coal into West Berlin', es: 'Aviones que llevaban comida y carbón a Berlín Oeste', fa: 'طیاره‌هایی که غذا و ذغال به برلین غربی می‌بردند' },
          { en: 'Trains carrying soldiers out of East Berlin', es: 'Trenes que sacaban soldados de Berlín Este', fa: 'ریل‌هایی که عسکرها را از برلین شرقی می‌بردند' },
          { en: 'Ships taking families from Berlin to America', es: 'Barcos que llevaban familias de Berlín a América', fa: 'کشتی‌هایی که خانواده‌ها را از برلین به امریکا می‌بردند' },
          { en: 'Balloons that carried letters over the wall', es: 'Globos que llevaban cartas sobre el muro', fa: 'بالون‌هایی که نامه‌ها را از روی دیوار می‌بردند' }],
        answer: 0,
        why: { en: 'The Soviets blocked the roads, so US and British planes flew in supplies for almost a year.', es: 'Los soviéticos bloquearon los caminos, así que aviones de EE. UU. y Gran Bretaña llevaron provisiones casi un año.', fa: 'شوروی سرک‌ها را بست، پس طیاره‌های امریکا و بریتانیا تقریباً یک سال سامان آوردند.' } },
      { q: { en: 'Why did East Germany build the Berlin Wall in 1961?', es: '¿Por qué Alemania Oriental construyó el Muro de Berlín en 1961?', fa: 'چرا جرمنی شرقی در ۱۹۶۱ دیوار برلین را ساخت؟' },
        choices: [
          { en: 'Too many of its people were leaving for the West', es: 'Demasiada gente suya se iba al Oeste', fa: 'مردم بسیار زیادش به غرب می‌رفتند' },
          { en: 'West Berlin\'s army was about to attack the East', es: 'El ejército de Berlín Oeste iba a atacar el Este', fa: 'عسکرهای برلین غربی می‌خواستند به شرق حمله کنند' },
          { en: 'The city needed a wall to stop floods from rivers', es: 'La ciudad necesitaba un muro contra las inundaciones', fa: 'شهر برای جلوگیری از سیلاب دریاها دیوار لازم داشت' }],
        answer: 0,
        why: { en: 'About 2.7 million people had fled. The wall was built to keep the rest from leaving.', es: 'Unos 2.7 millones de personas habían huido. El muro se hizo para que los demás no se fueran.', fa: 'حدود ۲.۷ میلیون نفر فرار کرده بودند. دیوار ساخته شد تا باقی نروند.' } },
      { q: { en: 'Under communism in the Soviet Union, who owned the farms and factories?', es: 'Bajo el comunismo en la Unión Soviética, ¿quién era dueño de las fincas y fábricas?', fa: 'در کمونیزم اتحاد شوروی، مالک فارم‌ها و فابریکه‌ها چه کسی بود؟' },
        choices: [
          { en: 'The government, run by one party', es: 'El gobierno, dirigido por un solo partido', fa: 'دولت، که یک حزب آن را می‌گرداند' },
          { en: 'Private companies that people bought into', es: 'Empresas privadas donde la gente invertía', fa: 'شرکت‌های شخصی که مردم در آن سهم می‌خریدند' },
          { en: 'Kings and nobles, as in the Middle Ages', es: 'Reyes y nobles, como en la Edad Media', fa: 'پادشاهان و اشراف، مثل قرون وسطی' },
          { en: 'Each family owned its own big factory', es: 'Cada familia tenía su propia fábrica grande', fa: 'هر خانواده فابریکهٔ بزرگ خودش را داشت' }],
        answer: 0,
        why: { en: 'In communism, the state owned the land and factories, and the Communist Party ruled.', es: 'En el comunismo, el Estado era dueño de la tierra y las fábricas, y mandaba el Partido Comunista.', fa: 'در کمونیزم، دولت مالک زمین و فابریکه‌ها بود و حزب کمونیست حکومت می‌کرد.' } },
      { q: { en: 'NATO and the Warsaw Pact were two groups. What were they?', es: 'La OTAN y el Pacto de Varsovia eran dos grupos. ¿Qué eran?', fa: 'ناتو و پیمان وارسا دو گروه بودند. چه بودند؟' },
        choices: [
          { en: 'Military alliances on each side of the Cold War', es: 'Alianzas militares de cada lado de la Guerra Fría', fa: 'اتحادهای نظامی هر طرف جنگ سرد' },
          { en: 'Two banks that printed all the money for Berlin', es: 'Dos bancos que imprimían todo el dinero de Berlín', fa: 'دو بانک که همهٔ پول برلین را چاپ می‌کردند' },
          { en: 'Sports clubs from East and West Berlin', es: 'Clubes deportivos de Berlín Este y Oeste', fa: 'کلپ‌های ورزشی برلین شرقی و غربی' },
          { en: 'Two radio stations that played music', es: 'Dos estaciones de radio que ponían música', fa: 'دو رادیو که موسیقی پخش می‌کردند' }],
        answer: 0,
        why: { en: 'In NATO, the US and its allies promised to defend each other. The Soviets led the Warsaw Pact.', es: 'En la OTAN, EE. UU. y sus aliados prometieron defenderse. Los soviéticos dirigían el Pacto de Varsovia.', fa: 'در ناتو، امریکا و متحدانش وعده دادند از هم دفاع کنند. شوروی پیمان وارسا را رهبری می‌کرد.' } },
      { q: { en: 'Many countries, like India and Ghana, joined neither side. What were they called?', es: 'Muchos países, como India y Ghana, no se unieron a ningún lado. ¿Cómo se llamaban?', fa: 'بسیاری از کشورها، مثل هند و گانا، طرف هیچ کدام را نگرفتند. نام‌شان چه بود؟' },
        choices: [
          { en: 'Non-aligned countries', es: 'Países no alineados', fa: 'کشورهای بی‌طرف' },
          { en: 'Superpower countries', es: 'Países superpotencia', fa: 'کشورهای ابرقدرت' },
          { en: 'Occupied countries', es: 'Países ocupados', fa: 'کشورهای اشغال‌شده' },
          { en: 'Iron Curtain countries', es: 'Países del Telón de Acero', fa: 'کشورهای پردهٔ آهنین' }],
        answer: 0,
        why: { en: 'The non-aligned countries refused to pick a side. Many had just won freedom from colonial rule.', es: 'Los países no alineados no quisieron elegir lado. Muchos acababan de liberarse del dominio colonial.', fa: 'کشورهای بی‌طرف نخواستند طرفی بگیرند. بسیاری تازه از حکومت استعماری آزاد شده بودند.' } },
      { q: { en: 'What was the arms race?', es: '¿Qué fue la carrera armamentista?', fa: 'مسابقهٔ تسلیحاتی چه بود؟' },
        choices: [
          { en: 'Each side building more and more nuclear weapons', es: 'Cada lado fabricando más y más armas nucleares', fa: 'هر طرف بیشتر و بیشتر سلاح هسته‌ای ساخت' },
          { en: 'A race between East and West runners at the Olympics', es: 'Una carrera entre corredores del Este y del Oeste en las Olimpiadas', fa: 'مسابقهٔ دویدن میان ورزشکاران شرق و غرب در المپیک' },
          { en: 'A contest to build the longest wall in Europe', es: 'Un concurso para construir el muro más largo de Europa', fa: 'رقابتی برای ساختن درازترین دیوار اروپا' },
          { en: 'A race to sell the most cars to Africa', es: 'Una carrera para vender más carros en África', fa: 'رقابتی برای فروش بیشترین موتر به افریقا' }],
        answer: 0,
        why: { en: 'Both superpowers built thousands of nuclear bombs. People all over the world feared a nuclear war.', es: 'Las dos superpotencias fabricaron miles de bombas nucleares. En todo el mundo se temía una guerra nuclear.', fa: 'هر دو ابرقدرت هزاران بم هسته‌ای ساختند. مردم در همهٔ جهان از جنگ هسته‌ای می‌ترسیدند.' } }
    ]
  },

  learned: [
    { en: 'After World War II, the US and the Soviet Union became rivals in the [[cold war|Cold War]].', es: 'Después de la Segunda Guerra Mundial, Estados Unidos y la Unión Soviética fueron rivales en la [[cold war|Guerra Fría]].', fa: 'بعد از جنگ جهانی دوم، امریکا و اتحاد شوروی در [[cold war|جنگ سرد]] رقیب شدند.' },
    { en: 'Berlin was split. In 1961, East Germany built a wall to stop its people from leaving.', es: 'Berlín estaba dividida. En 1961, Alemania Oriental construyó un muro para que su gente no se fuera.', fa: 'برلین تقسیم شده بود. در ۱۹۶۱، جرمنی شرقی دیواری ساخت تا مردمش نروند.' },
    { en: 'The superpowers raced to build weapons. Many countries took a side, or stayed [[non-aligned|non-aligned]].', es: 'Las superpotencias compitieron por fabricar armas. Muchos países eligieron un lado o fueron [[non-aligned|no alineados]].', fa: 'ابرقدرت‌ها در ساختن سلاح مسابقه دادند. بسیاری از کشورها طرفی گرفتند یا [[non-aligned|بی‌طرف]] ماندند.' }
  ],
  reflect: {
    q: { en: 'The wall split families in one night. How would you stay close to someone you could not visit?', es: 'El muro separó familias en una noche. ¿Cómo seguirías cerca de alguien a quien no puedes visitar?', fa: 'دیوار در یک شب خانواده‌ها را جدا کرد. با کسی که نمی‌توانی ببینی چطور نزدیک می‌مانی؟' },
    starter: { en: 'I would stay close by', es: 'Yo seguiría cerca al', fa: 'من نزدیک می‌مانم با' }
  }
};
