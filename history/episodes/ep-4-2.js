/* TIMEWALKER · Episode 4.2 · The American and French Revolutions (WHII)
   Paris in the summer of 1789. North-west: the Palais-Royal garden, where crowds gather to hear speeches.
   North-east: the Bastille, an old royal prison with thick walls, a courtyard (f), a moat and a bridge.
   Row 8: the rue Saint-Antoine. South: a print shop, homes, the bakery stalls (m), the newspaper stalls,
   the furniture workshops of the Faubourg Saint-Antoine (J) and the river Seine (rows 19-20). */
window.EPISODE = {
  id: '4.2',
  realm: 4,
  sol: 'WHII',
  title: { en: 'The American and French Revolutions', es: 'Las revoluciones de Estados Unidos y Francia', fa: 'انقلاب‌های امریکا و فرانسه' },
  place: { en: 'Paris, 1789', es: 'París, 1789', fa: 'پاریس، ۱۷۸۹' },
  intro: [
    { en: 'The Grump tore the page about the American and French [[revolution|Revolutions]]. Rights are fading!',
      es: 'El Gruñón rompió la página de las [[revolution|revoluciones]] de Estados Unidos y Francia. ¡Los derechos se borran!',
      fa: 'غرغرو صفحهٔ [[revolution|انقلاب‌های]] امریکا و فرانسه را پاره کرد. حقوق دارد پاک می‌شود!' },
    { en: 'Talk to the 3 people here, then fix the time stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del tiempo.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ زمان را درست کن.' }
  ],
  /* cut scenes: Paris on the world map, 1789 on the timeline */
  scenes: {
    at: [2.37, 48.85],
    year: 1789,
    start: [
      { en: 'In 1776, thirteen British colonies in America declared [[independence|independence]].',
        es: 'En 1776, trece colonias británicas de América declararon su [[independence|independencia]].',
        fa: 'در سال ۱۷۷۶، سیزده مستعمرهٔ بریتانیا در امریکا [[independence|استقلال]] خود را اعلام کردند.' },
      { en: 'In 1789, the people of France started a [[revolution|revolution]] against unfair rule.',
        es: 'En 1789, el pueblo de Francia empezó una [[revolution|revolución]] contra un gobierno injusto.',
        fa: 'در سال ۱۷۸۹، مردم فرانسه علیه حکومت ناعادلانه یک [[revolution|انقلاب]] را شروع کردند.' },
      { en: 'Both revolutions used Enlightenment ideas about rights and freedom.',
        es: 'Las dos revoluciones usaron ideas de la Ilustración sobre los derechos y la libertad.',
        fa: 'هر دو انقلاب از اندیشه‌های روشنگری دربارهٔ حقوق و آزادی کار گرفتند.' }
    ],
    page: { en: 'France\'s motto came from the revolution: Liberty, Equality, Fraternity.',
      es: 'El lema de Francia viene de la revolución: Libertad, Igualdad, Fraternidad.',
      fa: 'شعار فرانسه از انقلاب آمده است: آزادی، برابری، برادری.' },
    guess: {
      q: { en: 'France helped the Americans win their war. Did that cost France much?', es: 'Francia ayudó a los estadounidenses a ganar su guerra. ¿Le costó mucho a Francia?', fa: 'فرانسه به امریکایی‌ها کمک کرد جنگ را ببرند. آیا برای فرانسه گران تمام شد؟' },
      choices: [
        { t: { en: '💰 Yes, a fortune', es: '💰 Sí, una fortuna', fa: '💰 بله، خیلی زیاد' }, ok: true },
        { t: { en: '🪙 No, almost nothing', es: '🪙 No, casi nada', fa: '🪙 نه، تقریباً هیچ' } }
      ],
      why: { en: 'France borrowed huge sums to help America. The [[debt|debt]] helped cause France\'s own revolution.', es: 'Francia pidió prestadas sumas enormes para ayudar a América. La [[debt|deuda]] ayudó a causar su propia revolución.', fa: 'فرانسه برای کمک به امریکا پول بسیار زیاد قرض گرفت. این [[debt|قرض]] یکی از علت‌های انقلاب خود فرانسه شد.' }
    },
    next: {
      q: { en: 'Next: Latin America. Did revolutions spread to the colonies there?', es: 'Ahora: América Latina. ¿Llegaron las revoluciones a las colonias de allí?', fa: 'بعدی: امریکای لاتین. آیا انقلاب‌ها به مستعمره‌های آنجا رسید؟' },
      choices: [
        { t: { en: '🌎 Yes, they spread', es: '🌎 Sí, se extendieron', fa: '🌎 بله، پخش شدند' }, ok: true },
        { t: { en: '🚫 No, never', es: '🚫 No, nunca', fa: '🚫 نه، هرگز' } }
      ],
      why: { en: 'Starting in Haiti in 1791, people across Latin America fought for freedom and independence.', es: 'Desde Haití en 1791, gente de toda América Latina luchó por la libertad y la independencia.', fa: 'از هائیتی در سال ۱۷۹۱ شروع شد. مردم در سراسر امریکای لاتین برای آزادی و استقلال جنگیدند.' }
    }
  },
  /* houses: who lives behind each door; walk in and talk (2-3 lines each). Paris rooms use the realm 1 look. */
  houses: [
    { at: [3, 2], style: 1, name: { en: 'Sister Agnès', es: 'Sor Agnès', fa: 'خواهر آنیس' },
      look: { skin: 1, hair: '#2a2a2a', shirt: '#2a2a3a', pants: '#2a2a3a', robe: true, style: 'bun' },
      lines: [
        { en: 'I am a nun. The church is the First Estate of France.', es: 'Soy monja. La iglesia es el Primer Estado de Francia.', fa: 'من راهبه هستم. کلیسا طبقهٔ اول فرانسه است.' },
        { en: 'The church owns much land, and it pays almost no taxes.', es: 'La iglesia tiene muchas tierras y casi no paga impuestos.', fa: 'کلیسا زمین زیاد دارد و تقریباً هیچ مالیه نمی‌دهد.' },
        { en: 'In June, many priests joined the [[third estate|Third Estate]]. They wanted fair change.', es: 'En junio, muchos sacerdotes se unieron al [[third estate|Tercer Estado]]. Querían un cambio justo.', fa: 'در ماه جون، بسیاری از کشیش‌ها به [[third estate|طبقهٔ سوم]] پیوستند. آن‌ها تغییر عادلانه می‌خواستند.' }
      ] },
    { at: [7, 2], style: 1, name: { en: 'Monsieur de Vaux', es: 'Monsieur de Vaux', fa: 'موسیو دو وو' },
      look: { skin: 0, hair: '#e8e8e8', shirt: '#6a2a5a', pants: '#2a2a3a', style: 'short' },
      lines: [
        { en: 'My family has been noble for 300 years. We pay few taxes.', es: 'Mi familia es noble desde hace 300 años. Pagamos pocos impuestos.', fa: 'خانوادهٔ من ۳۰۰ سال است که از اشراف است. ما مالیهٔ کم می‌دهیم.' },
        { en: 'Now the people want to end our special rights. I am afraid.', es: 'Ahora el pueblo quiere quitarnos los privilegios. Tengo miedo.', fa: 'حالا مردم می‌خواهند امتیازهای خاص ما را تمام کنند. من می‌ترسم.' }
      ] },
    { at: [4, 12], style: 1, name: { en: 'Étienne', es: 'Étienne', fa: 'اتین' },
      look: { skin: 2, hair: '#3a2416', shirt: '#e8dcc0', pants: '#4a3a2a', style: 'short' },
      lines: [
        { en: 'We print new newspapers every day. Everyone in Paris wants the news.', es: 'Imprimimos periódicos nuevos cada día. Todo París quiere noticias.', fa: 'ما هر روز روزنامه‌های نو چاپ می‌کنیم. همه در پاریس خبر می‌خواهند.' },
        { en: 'Many people cannot read, so they listen while others read aloud.', es: 'Mucha gente no sabe leer, así que escucha mientras otros leen en voz alta.', fa: 'بسیاری از مردم سواد ندارند، پس گوش می‌دهند وقتی دیگران بلند می‌خوانند.' }
      ] },
    { at: [12, 12], style: 1, name: { en: 'Widow Lefèvre', es: 'La viuda Lefèvre', fa: 'بیوه لوفور' },
      look: { skin: 3, hair: '#8a8a8a', shirt: '#6a7a8a', pants: '#3a3a3a', style: 'bun' },
      lines: [
        { en: 'I wash clothes all day. A loaf of bread costs half my pay.', es: 'Lavo ropa todo el día. Un pan cuesta la mitad de mi pago.', fa: 'من تمام روز کالا می‌شویم. یک نان نصف مزد مرا می‌گیرد.' },
        { en: 'My children are hungry. Many hungry people are angry at the king.', es: 'Mis hijos tienen hambre. Mucha gente con hambre está enojada con el rey.', fa: 'اولادهایم گرسنه هستند. بسیاری از مردم گرسنه از پادشاه قهر هستند.' }
      ] },
    { at: [26, 12], style: 1, name: { en: 'Henri', es: 'Henri', fa: 'آنری' },
      look: { skin: 4, hair: '#1a1208', shirt: '#f2f2f2', pants: '#5a4630', style: 'short' },
      lines: [
        { en: 'In 1788, hail and a bad harvest ruined the wheat.', es: 'En 1788, el granizo y una mala cosecha arruinaron el trigo.', fa: 'در سال ۱۷۸۸، ژاله و حاصل بد گندم را خراب کرد.' },
        { en: 'I bake all night. Still, there is not enough bread for Paris.', es: 'Horneo toda la noche. Aun así, no hay pan suficiente para París.', fa: 'تمام شب نان می‌پزم. باز هم برای پاریس نان کافی نیست.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     North-west (x 1-19, rows 1-7): houses around the Palais-Royal garden (rows of trees T and paths l).
     North-east (x 20-29, rows 1-7): the Bastille: thick walls (W), its courtyard (f), the gate, the moat (~) and its bridge (B).
     Row 8: the rue Saint-Antoine. Rows 11-13: the print shop (x 3-5), a home (x 10-13), the bakery stalls (m, x 19-21)
     and the bakery (x 25-27). Row 14: a street. Rows 15-18: newspaper stalls (m), workshops (J). Rows 19-20: the Seine. */
  map: [
    'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
    'WRRRR.QQQ.RRR.....,.WWWWWWWWWW.W',
    'Whhdh.hdh.hhh.......WWffffffWW.W',
    'W...................WWffffffWW.W',
    'W.T.T.T.T.T.T.......WWffffffWW.W',
    'W..l...l...l........WWffffffWW.W',
    'W.T.T.T.T.T.T.......WWWWffWWWW.W',
    'W..................x~~~~BB~~~~.W',
    'Wxllllllllllllllllllllllllllll.W',
    'W......l................l......W',
    'W......l................l......W',
    'W..QQQ.l..RRRR.....m.m..lRRR...W',
    'W..hdh.l..hhdh..........lhdh...W',
    'W......l........,.......l......W',
    'Wlllllllllllllllllllllllllllll.W',
    'W..m.m...............T.....,...W',
    'W.......T.....JJJ.......JJJ....W',
    'W.............JJJ.......JJJ..,.W',
    'W.,.....T.........,......T.....W',
    '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',
    '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',
    'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW'
  ],
  start: [12, 18],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [14, 9], at: [14, 5], decor: 'flower',
      clue: { en: 'From this note, walk 4 steps north, toward the garden.', es: 'Desde esta nota, camina 4 pasos al norte, hacia el jardín.', fa: 'از این یادداشت، ۴ قدم به شمال برو، به طرف باغ.' },
      text: { en: 'A cockade: a ribbon flower in blue, white and red. People wore it to back the revolution.', es: 'Una escarapela: una flor de cinta azul, blanca y roja. La gente la usaba para apoyar la revolución.', fa: 'یک گل نواری به رنگ آبی، سفید و سرخ. مردم آن را برای پشتیبانی از انقلاب می‌زدند.' } },
    { clueAt: [22, 17], at: [28, 18], decor: 'drum',
      clue: { en: 'From this note, walk 1 step south, then 6 steps east along the river.', es: 'Desde esta nota, camina 1 paso al sur y luego 6 pasos al este junto al río.', fa: 'از این یادداشت، ۱ قدم به جنوب برو، بعد ۶ قدم به شرق در کنار دریا.' },
      text: { en: 'A drum. In October 1789, thousands of women marched to Versailles to demand bread.', es: 'Un tambor. En octubre de 1789, miles de mujeres marcharon a Versalles para pedir pan.', fa: 'یک دُهل. در اکتوبر ۱۷۸۹، هزاران زن برای خواستن نان به ورسای رفتند.' } }
  ],

  words: {
    revolution: { en: 'a big change, often a fight, when people replace their government', es: 'un gran cambio, muchas veces una lucha, cuando la gente reemplaza a su gobierno', fa: 'یک تغییر بزرگ، اکثراً با مبارزه، وقتی مردم حکومت خود را عوض می‌کنند' },
    independence: { en: 'freedom from rule by another country', es: 'libertad de no ser gobernado por otro país', fa: 'آزادی از حکومت یک کشور دیگر' },
    debt: { en: 'money that is borrowed and must be paid back', es: 'dinero prestado que hay que devolver', fa: 'پولی که قرض گرفته شده و باید پس داده شود' },
    'third estate': { en: 'in old France, everyone who was not a priest or a noble: almost all the people', es: 'en la Francia antigua, todos los que no eran sacerdotes ni nobles: casi todo el pueblo', fa: 'در فرانسهٔ قدیم، همه به جز کشیش‌ها و اشراف: تقریباً همهٔ مردم' },
    declaration: { en: 'an important statement, written down for everyone', es: 'un anuncio importante, escrito para todos', fa: 'یک بیانیهٔ مهم که برای همه نوشته شده است' },
    'reign of terror': { en: 'the time in 1793 and 1794 when French leaders killed thousands they called enemies', es: 'la época de 1793 y 1794 en que líderes franceses mataron a miles que llamaban enemigos', fa: 'زمانی در ۱۷۹۳ و ۱۷۹۴ که رهبران فرانسه هزاران نفر را که دشمن می‌خواندند کشتند' },
    enslaved: { en: 'forced to work for no pay and kept as someone\'s property', es: 'obligado a trabajar sin pago y tratado como propiedad de otra persona', fa: 'مجبور به کار بی‌مزد و مثل مال کس دیگری نگه داشته شده' }
  },

  npcs: [
    {
      x: 5, y: 3,
      name: { en: 'Gaston', es: 'Gaston', fa: 'گاستون' },
      role: { en: 'Old soldier', es: 'Soldado viejo', fa: 'عسکر پیر' },
      look: { skin: 2, hair: '#c8c8c8', shirt: '#2a4a8a', pants: '#e8e0d0', hat: '#2a2a2a' },
      lines: [
        { en: 'I was a French soldier. In 1781, I fought beside the Americans at Yorktown.', es: 'Fui soldado francés. En 1781, luché junto a los estadounidenses en Yorktown.', fa: 'من عسکر فرانسوی بودم. در سال ۱۷۸۱ در یورک‌تاون در کنار امریکایی‌ها جنگیدم.' },
        { en: 'In 1776, the American colonies declared [[independence|independence]] from Britain.', es: 'En 1776, las colonias de América declararon su [[independence|independencia]] de Gran Bretaña.', fa: 'در سال ۱۷۷۶، مستعمره‌های امریکا [[independence|استقلال]] خود را از بریتانیا اعلام کردند.' },
        { en: 'They said all men are created equal. They used Locke\'s ideas!', es: 'Dijeron que todos los hombres son creados iguales. ¡Usaron las ideas de Locke!', fa: 'گفتند همهٔ انسان‌ها برابر آفریده شده‌اند. از اندیشه‌های لاک کار گرفتند!' },
        { en: 'But that war cost France a fortune. Now France is deep in [[debt|debt]].', es: 'Pero esa guerra le costó una fortuna a Francia. Ahora Francia tiene una gran [[debt|deuda]].', fa: 'اما آن جنگ برای فرانسه بسیار گران تمام شد. حالا فرانسه زیر [[debt|قرض]] سنگین است.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'How did helping the American Revolution hurt France?', es: '¿Cómo dañó a Francia ayudar a la Revolución estadounidense?', fa: 'کمک به انقلاب امریکا چطور به فرانسه ضرر رساند؟' },
        choices: [
          { ok: true, t: { en: 'It left France deep in debt', es: 'Dejó a Francia con una gran deuda', fa: 'فرانسه را زیر قرض سنگین برد' },
            why: { en: 'Yes. France borrowed huge sums for the war. Then the king needed new taxes.', es: 'Sí. Francia pidió prestadas sumas enormes para la guerra. Luego el rey necesitó impuestos nuevos.', fa: 'بله. فرانسه برای جنگ پول بسیار قرض گرفت. بعد پادشاه به مالیهٔ نو ضرورت داشت.' } },
          { t: { en: 'It ended all of France\'s trade with Spain', es: 'Terminó todo el comercio de Francia con España', fa: 'همهٔ تجارت فرانسه با هسپانیه را تمام کرد' },
            why: { en: 'France still traded with Spain. The real problem was the money France spent on the war.', es: 'Francia siguió comerciando con España. El problema real fue el dinero que gastó en la guerra.', fa: 'فرانسه با هسپانیه تجارت می‌کرد. مشکل اصلی پولی بود که فرانسه در جنگ خرج کرد.' } },
          { t: { en: 'It made France lose its army and navy', es: 'Hizo que Francia perdiera su ejército y su marina', fa: 'باعث شد فرانسه اردو و نیروی بحری خود را از دست بدهد' },
            why: { en: 'France still had its army. The war\'s huge cost left France deep in debt.', es: 'Francia todavía tenía su ejército. El enorme costo de la guerra la dejó muy endeudada.', fa: 'فرانسه هنوز اردو داشت. خرج بسیار زیاد جنگ فرانسه را زیر قرض برد.' } }
        ]
      }
    },
    {
      x: 20, y: 12,
      name: { en: 'Marguerite', es: 'Marguerite', fa: 'مارگریت' },
      role: { en: 'Market seller', es: 'Vendedora del mercado', fa: 'فروشندهٔ بازار' },
      look: { skin: 1, hair: '#8a4a20', shirt: '#c83a3a', pants: '#3a3a5a', style: 'bun' },
      lines: [
        { en: 'Bread costs more than ever this year. My children are hungry.', es: 'El pan cuesta más que nunca este año. Mis hijos tienen hambre.', fa: 'امسال نان از همیشه گران‌تر است. اولادهایم گرسنه هستند.' },
        { en: 'France has three estates, or groups. Priests are the First. Nobles are the Second.', es: 'Francia tiene tres estados, o grupos. Los sacerdotes son el Primero. Los nobles, el Segundo.', fa: 'فرانسه سه طبقه دارد. کشیش‌ها طبقهٔ اول هستند. اشراف طبقهٔ دوم.' },
        { en: 'The rest of us, almost everyone, are the [[third estate|Third Estate]].', es: 'Todos los demás, casi todo el pueblo, somos el [[third estate|Tercer Estado]].', fa: 'باقی ما، تقریباً همهٔ مردم، [[third estate|طبقهٔ سوم]] هستیم.' },
        { en: 'We pay most of the taxes, but we have almost no say!', es: '¡Pagamos casi todos los impuestos, pero casi no tenemos voz!', fa: 'ما بیشتر مالیه را می‌دهیم، اما تقریباً هیچ صدایی نداریم!' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Why were people of the Third Estate angry?', es: '¿Por qué estaba enojada la gente del Tercer Estado?', fa: 'چرا مردم طبقهٔ سوم قهر بودند؟' },
        choices: [
          { ok: true, t: { en: 'They paid most taxes but had little say', es: 'Pagaban casi todos los impuestos y no tenían voz', fa: 'بیشتر مالیه را می‌دادند اما صدایی نداشتند' },
            why: { en: 'Yes. Priests and nobles paid few taxes. The Third Estate paid most and had little power.', es: 'Sí. Sacerdotes y nobles pagaban pocos impuestos. El Tercer Estado pagaba casi todo y tenía poco poder.', fa: 'بله. کشیش‌ها و اشراف مالیهٔ کم می‌دادند. طبقهٔ سوم بیشترش را می‌داد و قدرت کم داشت.' } },
          { t: { en: 'They had to serve as priests in churches', es: 'Tenían que servir como sacerdotes en las iglesias', fa: 'مجبور بودند در کلیساها کشیش باشند' },
            why: { en: 'Priests were the First Estate. The Third Estate was angry about unfair taxes and no say.', es: 'Los sacerdotes eran el Primer Estado. El Tercer Estado estaba enojado por los impuestos injustos.', fa: 'کشیش‌ها طبقهٔ اول بودند. طبقهٔ سوم از مالیهٔ ناعادلانه و بی‌صدایی قهر بود.' } },
          { t: { en: 'They were not allowed to buy any bread', es: 'No los dejaban comprar nada de pan', fa: 'اجازه نداشتند هیچ نانی بخرند' },
            why: { en: 'They could buy bread, but it cost too much. And the taxes were unfair.', es: 'Podían comprar pan, pero costaba demasiado. Y los impuestos eran injustos.', fa: 'می‌توانستند نان بخرند، اما خیلی گران بود. و مالیه ناعادلانه بود.' } }
        ]
      }
    },
    {
      x: 6, y: 16,
      name: { en: 'Julien', es: 'Julien', fa: 'ژولین' },
      role: { en: 'Visitor from Saint-Domingue', es: 'Visitante de Saint-Domingue', fa: 'مهمانی از سن دومینگ' },
      look: { skin: 5, hair: '#120c08', shirt: '#e0a020', pants: '#2a3a5a', style: 'short' },
      lines: [
        { en: 'I came from Saint-Domingue, a French colony in the Caribbean.', es: 'Vengo de Saint-Domingue, una colonia francesa en el Caribe.', fa: 'من از سن دومینگ آمده‌ام، یک مستعمرهٔ فرانسه در کارائیب.' },
        { en: 'In August, the Assembly said men are born free and equal in rights.', es: 'En agosto, la Asamblea dijo que los hombres nacen libres e iguales en derechos.', fa: 'در ماه اگست، مجلس گفت انسان‌ها آزاد و با حقوق برابر به دنیا می‌آیند.' },
        { en: 'But on my island, about 500,000 people are [[enslaved|enslaved]].', es: 'Pero en mi isla hay unas 500,000 personas [[enslaved|esclavizadas]].', fa: 'اما در جزیرهٔ من، حدود ۵۰۰٬۰۰۰ نفر [[enslaved|برده]] هستند.' },
        { en: 'Will these rights reach them? Many people there are asking.', es: '¿Llegarán a ellos estos derechos? Mucha gente allá se lo pregunta.', fa: 'آیا این حقوق به آن‌ها می‌رسد؟ بسیاری از مردم آنجا می‌پرسند.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Why did people in Saint-Domingue care about the new Declaration?', es: '¿Por qué le importaba la nueva Declaración a la gente de Saint-Domingue?', fa: 'چرا اعلامیهٔ نو برای مردم سن دومینگ مهم بود؟' },
        choices: [
          { ok: true, t: { en: 'Its words about freedom could apply to them', es: 'Sus palabras sobre la libertad podían valer para ellos', fa: 'حرف‌هایش دربارهٔ آزادی شامل آن‌ها هم می‌شد' },
            why: { en: 'Yes. Enslaved and free Black people asked: if all men are equal, why not us?', es: 'Sí. Las personas negras, esclavizadas y libres, preguntaron: si todos son iguales, ¿por qué nosotros no?', fa: 'بله. سیاه‌پوستان برده و آزاد پرسیدند: اگر همه برابرند، چرا ما نه؟' } },
          { t: { en: 'It lowered the price of sugar on the island', es: 'Bajó el precio del azúcar en la isla', fa: 'قیمت شکر را در جزیره پایین آورد' },
            why: { en: 'The Declaration was about rights, not prices. Its words gave people hope for freedom.', es: 'La Declaración hablaba de derechos, no de precios. Sus palabras dieron esperanza de libertad.', fa: 'اعلامیه دربارهٔ حقوق بود، نه قیمت. حرف‌هایش به مردم امید آزادی داد.' } },
          { t: { en: 'It made their island a part of Spain', es: 'Hizo que su isla fuera parte de España', fa: 'جزیرهٔ آن‌ها را بخشی از هسپانیه ساخت' },
            why: { en: 'Saint-Domingue stayed a French colony. People cared because the words spoke of freedom for all.', es: 'Saint-Domingue siguió siendo colonia francesa. Importaba porque las palabras hablaban de libertad para todos.', fa: 'سن دومینگ مستعمرهٔ فرانسه ماند. مهم بود، چون حرف‌ها از آزادی برای همه می‌گفت.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 1, y: 8, text: { en: 'PARIS · 1789 · Bread costs more than ever. People are hungry and angry.', es: 'PARÍS · 1789 · El pan cuesta más que nunca. La gente tiene hambre y está enojada.', fa: 'پاریس · ۱۷۸۹ · نان از همیشه گران‌تر است. مردم گرسنه و قهر هستند.' } },
    { x: 19, y: 7, text: { en: 'THE BASTILLE · An old royal prison. Crowds stormed it on July 14, 1789.', es: 'LA BASTILLA · Una vieja cárcel del rey. La multitud la tomó el 14 de julio de 1789.', fa: 'باستیل · یک زندان کهنهٔ شاهی. مردم در ۱۴ جولای ۱۷۸۹ به آن حمله کردند.' } }
  ],

  /* the quest: Madame Roux the teacher (gold !) by the Bastille -> Pierre at the newspaper stalls (south-west)
     -> chase: the Ink Thief tore her copy of the Declaration into 3 pieces: the Bastille courtyard, the bakery line,
     the print shop -> catch the thief on the street -> back to Madame Roux */
  quest: {
    stat: 'hei',
    title: { en: 'The Torn Declaration', es: 'La Declaración rota', fa: 'اعلامیهٔ پاره' },
    giver: {
      x: 18, y: 4,
      name: { en: 'Madame Roux', es: 'Madame Roux', fa: 'مادام رو' },
      role: { en: 'Teacher', es: 'Maestra', fa: 'معلم' },
      look: { skin: 3, hair: '#3a2416', shirt: '#2a6a8a', pants: '#3a2a3a', style: 'long' },
      lines: [
        { en: 'I teach children to read. I want to read them the new [[declaration|Declaration]].', es: 'Enseño a leer a los niños. Quiero leerles la nueva [[declaration|Declaración]].', fa: 'من به اطفال خواندن یاد می‌دهم. می‌خواهم [[declaration|اعلامیهٔ]] نو را برایشان بخوانم.' },
        { en: 'But an Ink Thief tore my copy and ran away!', es: '¡Pero un Ladrón de Tinta rompió mi copia y huyó!', fa: 'اما یک دزد رنگ نسخهٔ مرا پاره کرد و فرار کرد!' },
        { en: 'Pierre sells newspapers in the south-west. Maybe he saw the thief.', es: 'Pierre vende periódicos en el suroeste. Quizás vio al ladrón.', fa: 'پیر در جنوب غرب روزنامه می‌فروشد. شاید دزد را دیده باشد.' }
      ],
      wait: { en: 'Pierre is at the newspaper stalls, south of the print shop.', es: 'Pierre está en los puestos de periódicos, al sur de la imprenta.', fa: 'پیر کنار دکان‌های روزنامه، جنوبِ چاپخانه است.' },
      thanks: { en: '"Men are born and remain free and equal in rights." Thank you!', es: '"Los hombres nacen y permanecen libres e iguales en derechos." ¡Gracias!', fa: '«انسان‌ها آزاد و با حقوق برابر به دنیا می‌آیند و می‌مانند.» تشکر!' }
    },
    contact: {
      x: 4, y: 16,
      name: { en: 'Pierre', es: 'Pierre', fa: 'پیر' },
      role: { en: 'Newspaper seller', es: 'Vendedor de periódicos', fa: 'روزنامه‌فروش' },
      look: { skin: 1, hair: '#d8a040', shirt: '#5a7a4a', pants: '#3a2a1a', hat: '#6a3a1a' },
      lines: [
        { en: 'Yes, I saw it! A little thief with ink all over its hands.', es: '¡Sí, lo vi! Un ladroncito con las manos llenas de tinta.', fa: 'بله، دیدمش! یک دزد کوچک که دست‌هایش پر از رنگ بود.' },
        { en: 'It tore the Declaration into 3 pieces and hid them around Paris.', es: 'Rompió la Declaración en 3 pedazos y los escondió por París.', fa: 'اعلامیه را سه تکه کرد و تکه‌ها را در پاریس پنهان کرد.' },
        { en: 'Follow its riddles about 1789 to the right places. Then catch the thief!', es: 'Sigue sus acertijos sobre 1789 hasta los lugares correctos. ¡Después atrapa al ladrón!', fa: 'چیستان‌هایش دربارهٔ ۱۷۸۹ را تا جاهای درست دنبال کن. بعد دزد را بگیر!' }
      ]
    },
    action: {
      type: 'chase',
      at: [16, 9],
      hops: [[9, 13], [15, 10]],
      name: { en: 'The Ink Thief', es: 'El Ladrón de Tinta', fa: 'دزد رنگ' },
      taunt: { en: 'Hee hee! The Declaration is in 3 pieces. Follow my riddles about Paris!', es: '¡Ji ji! La Declaración está en 3 pedazos. ¡Sigue mis acertijos sobre París!', fa: 'هی هی! اعلامیه سه تکه است. چیستان‌هایم را دربارهٔ پاریس دنبال کن!' },
      clues: [
        { t: { en: 'Piece 1 is inside the old prison that crowds stormed on July 14.', es: 'El pedazo 1 está dentro de la vieja cárcel que la multitud tomó el 14 de julio.', fa: 'تکهٔ ۱ داخل زندان کهنه‌ای است که مردم در ۱۴ جولای به آن حمله کردند.' },
          zones: [{ x: 22, y: 2, w: 6, h: 4 }],
          noBy: [{ x: 1, y: 3, w: 12, h: 4, t: { en: 'This is the Palais-Royal garden, where people give speeches. The prison has thick stone walls, in the east.', es: 'Este es el jardín del Palais-Royal, donde la gente da discursos. La cárcel tiene muros gruesos, en el este.', fa: 'این باغ پاله رویال است که مردم در آن سخنرانی می‌کنند. زندان دیوارهای سنگی ضخیم دارد، در شرق.' } }],
          found: { en: 'Piece 1, inside the Bastille! Its fall became a sign of freedom.', es: '¡El pedazo 1, dentro de la Bastilla! Su caída se volvió un símbolo de libertad.', fa: 'تکهٔ ۱، داخل باستیل! سقوط آن نشانهٔ آزادی شد.' } },
        { t: { en: 'Piece 2 is where hungry people wait in line for bread.', es: 'El pedazo 2 está donde la gente con hambre hace fila para comprar pan.', fa: 'تکهٔ ۲ جایی است که مردم گرسنه برای نان در صف می‌ایستند.' },
          zones: [{ x: 18, y: 12, w: 5, h: 2 }],
          noBy: [{ x: 13, y: 15, w: 15, h: 3, t: { en: 'These are workshops where people make furniture. Look for the bakery stalls by the street.', es: 'Estos son talleres donde se hacen muebles. Busca los puestos de pan junto a la calle.', fa: 'این‌ها کارگاه‌هایی هستند که در آن فرنیچر می‌سازند. دکان‌های نان را کنار سرک پیدا کن.' } }],
          found: { en: 'Piece 2, by the bakery! High bread prices helped start the revolution.', es: '¡El pedazo 2, junto a la panadería! El pan caro ayudó a empezar la revolución.', fa: 'تکهٔ ۲، کنار نانوایی! نان گران به شروع انقلاب کمک کرد.' } },
        { t: { en: 'Piece 3 is where workers print newspapers for the people of Paris.', es: 'El pedazo 3 está donde los trabajadores imprimen periódicos para la gente de París.', fa: 'تکهٔ ۳ جایی است که کارگران برای مردم پاریس روزنامه چاپ می‌کنند.' },
          zones: [{ x: 2, y: 13, w: 5, h: 1 }],
          noBy: [{ x: 25, y: 13, w: 5, h: 1, t: { en: 'This is the bakery. The print shop is on the west side, near the newspaper stalls.', es: 'Esta es la panadería. La imprenta está en el oeste, cerca de los puestos de periódicos.', fa: 'این نانوایی است. چاپخانه در طرف غرب، نزدیک دکان‌های روزنامه است.' } }],
          found: { en: 'Piece 3, at the print shop! Newspapers spread the revolution\'s ideas fast.', es: '¡El pedazo 3, en la imprenta! Los periódicos difundieron rápido las ideas de la revolución.', fa: 'تکهٔ ۳، کنار چاپخانه! روزنامه‌ها اندیشه‌های انقلاب را زود پخش کردند.' } }
      ],
      win: { en: 'Got you! The thief drops the last piece. The Declaration is whole again.', es: '¡Te atrapé! El ladrón suelta el último pedazo. La Declaración está completa otra vez.', fa: 'گرفتمت! دزد آخرین تکه را می‌اندازد. اعلامیه دوباره کامل است.' },
      item: { icon: '📜', name: { en: 'Madame Roux\'s Declaration', es: 'La Declaración de Madame Roux', fa: 'اعلامیهٔ مادام رو' } }
    }
  },

  scraps: [[30, 1], [1, 17], [30, 18]],
  smudges: [[14, 3], [10, 17]],

  challenge: {
    at: [28, 16],
    type: 'order',
    stat: 'pla',
    title: { en: 'Put the revolutions in order', es: 'Ordena las revoluciones', fa: 'انقلاب‌ها را به ترتیب بگذار' },
    intro: { en: 'The Grump mixed up the timeline! Put these events in order, from first to last.',
      es: '¡El Gruñón revolvió la línea del tiempo! Ordena estos hechos, del primero al último.',
      fa: 'غرغرو خط زمان را درهم کرد! این رویدادها را از اول تا آخر به ترتیب بگذار.' },
    items: [
      { icon: '📜', t: { en: '1776 · Americans declare independence from Britain', es: '1776 · Los estadounidenses declaran su independencia de Gran Bretaña', fa: '۱۷۷۶ · امریکایی‌ها استقلال خود را از بریتانیا اعلام می‌کنند' } },
      { icon: '🤝', t: { en: '1781 · Americans and French win at Yorktown', es: '1781 · Estadounidenses y franceses ganan en Yorktown', fa: '۱۷۸۱ · امریکایی‌ها و فرانسوی‌ها در یورک‌تاون پیروز می‌شوند' } },
      { icon: '🏛️', t: { en: '1787 · Americans write the U.S. Constitution', es: '1787 · Los estadounidenses escriben la Constitución', fa: '۱۷۸۷ · امریکایی‌ها قانون اساسی را می‌نویسند' } },
      { icon: '👥', t: { en: 'May 1789 · The Estates-General meets at Versailles', es: 'Mayo de 1789 · Los Estados Generales se reúnen en Versalles', fa: 'می ۱۷۸۹ · مجلس طبقات در ورسای جمع می‌شود' } },
      { icon: '🏰', t: { en: 'July 14, 1789 · Crowds storm the Bastille', es: '14 de julio de 1789 · La multitud toma la Bastilla', fa: '۱۴ جولای ۱۷۸۹ · مردم به باستیل حمله می‌کنند' } },
      { icon: '⚖️', t: { en: 'August 1789 · The Declaration of the Rights of Man', es: 'Agosto de 1789 · La Declaración de los Derechos del Hombre', fa: 'اگست ۱۷۸۹ · اعلامیهٔ حقوق بشر و شهروند' } },
      { icon: '🕯️', t: { en: '1793 · The Reign of Terror begins', es: '1793 · Empieza el Reinado del Terror', fa: '۱۷۹۳ · دورهٔ وحشت شروع می‌شود' } },
      { icon: '👑', t: { en: '1799 · Napoleon takes control of France', es: '1799 · Napoleón toma el control de Francia', fa: '۱۷۹۹ · ناپلئون فرانسه را در دست می‌گیرد' } }
    ],
    why: { en: 'America comes first: 1776, 1781, 1787. Then France: May, July and August 1789, the Terror in 1793, Napoleon in 1799.',
      es: 'Primero América: 1776, 1781, 1787. Luego Francia: mayo, julio y agosto de 1789, el Terror en 1793 y Napoleón en 1799.',
      fa: 'اول امریکا: ۱۷۷۶، ۱۷۸۱، ۱۷۸۷. بعد فرانسه: می، جولای و اگست ۱۷۸۹، دورهٔ وحشت در ۱۷۹۳ و ناپلئون در ۱۷۹۹.' },
    success: { en: 'The timeline is right again! One revolution helped spark the next.', es: '¡La línea del tiempo está bien otra vez! Una revolución ayudó a encender la siguiente.', fa: 'خط زمان دوباره درست شد! یک انقلاب به روشن شدن انقلاب بعدی کمک کرد.' }
  },

  boss: {
    at: [6, 5],
    stat: 'mov',
    need: 3,
    name: { en: 'The Crown Grump', es: 'El Gruñón Coronado', fa: 'غرغروی تاج‌دار' },
    appear: { en: 'The Crown Grump is hiding in the Palais-Royal garden!', es: '¡El Gruñón Coronado se esconde en el jardín del Palais-Royal!', fa: 'غرغروی تاج‌دار در باغ پاله رویال پنهان است!' },
    taunt: { en: 'Rights for everyone? Never! Only kings and nobles matter!', es: '¿Derechos para todos? ¡Nunca! ¡Solo importan los reyes y los nobles!', fa: 'حقوق برای همه؟ هرگز! فقط پادشاهان و اشراف مهم هستند!' },
    win: { en: 'The crown cracks and the fog lifts. Chronicle page 4.2 floats down into your hands!', es: 'La corona se rompe y la niebla se va. ¡La página 4.2 de la crónica cae en tus manos!', fa: 'تاج می‌شکند و مه کنار می‌رود. صفحهٔ ۴.۲ تاریخ‌نامه به دستت می‌افتد!' },
    questions: [
      { q: { en: 'What did the Declaration of Independence say in 1776?', es: '¿Qué decía la Declaración de Independencia en 1776?', fa: 'اعلامیهٔ استقلال در سال ۱۷۷۶ چه می‌گفت؟' },
        choices: [
          { en: 'All men are created equal, with rights', es: 'Todos los hombres son creados iguales, con derechos', fa: 'همهٔ انسان‌ها برابر و با حقوق آفریده شده‌اند' },
          { en: 'The king of Britain owns all of America', es: 'El rey de Gran Bretaña es dueño de toda América', fa: 'پادشاه بریتانیا مالک همهٔ امریکا است' },
          { en: 'Only rich people may vote or speak', es: 'Solo los ricos pueden votar o hablar', fa: 'فقط ثروتمندان می‌توانند رای بدهند یا حرف بزنند' },
          { en: 'The colonies must pay more taxes', es: 'Las colonias deben pagar más impuestos', fa: 'مستعمره‌ها باید مالیهٔ بیشتر بدهند' }],
        answer: 0,
        why: { en: 'Thomas Jefferson wrote it. It used Locke\'s idea that people have rights a government must protect.', es: 'Thomas Jefferson la escribió. Usó la idea de Locke: la gente tiene derechos que el gobierno debe proteger.', fa: 'توماس جفرسون آن را نوشت. از اندیشهٔ لاک کار گرفت: مردم حقوقی دارند که حکومت باید نگهداری کند.' } },
      { q: { en: 'Why were the American colonists angry at Britain?', es: '¿Por qué los colonos estadounidenses estaban enojados con Gran Bretaña?', fa: 'چرا مستعمره‌نشینان امریکا از بریتانیا قهر بودند؟' },
        choices: [
          { en: 'They paid taxes but had no vote in Parliament', es: 'Pagaban impuestos pero no votaban en el Parlamento', fa: 'مالیه می‌دادند اما در پارلمان رای نداشتند' },
          { en: 'Britain gave them too much land and money', es: 'Gran Bretaña les daba demasiada tierra y dinero', fa: 'بریتانیا به آن‌ها زمین و پول بسیار زیاد می‌داد' },
          { en: 'Britain made them speak French in school', es: 'Gran Bretaña los obligaba a hablar francés en la escuela', fa: 'بریتانیا آن‌ها را مجبور می‌کرد در مکتب فرانسوی حرف بزنند' },
          { en: 'They wanted a new king of their own to rule them', es: 'Querían un rey nuevo propio que los gobernara', fa: 'یک پادشاه نو از خودشان می‌خواستند' }],
        answer: 0,
        why: { en: '"No taxation without representation!" Colonists wanted a say in their laws and taxes.', es: '"¡No a los impuestos sin representación!" Los colonos querían voz en sus leyes e impuestos.', fa: '«مالیه بدون نماینده نه!» مستعمره‌نشینان در قانون و مالیهٔ خود صدا می‌خواستند.' } },
      { q: { en: 'How did helping the Americans cause trouble in France?', es: '¿Cómo causó problemas en Francia ayudar a los estadounidenses?', fa: 'کمک به امریکایی‌ها چطور در فرانسه دردسر ساخت؟' },
        choices: [
          { en: 'France went deep into debt', es: 'Francia se llenó de deudas', fa: 'فرانسه زیر قرض سنگین رفت' },
          { en: 'France gained too many colonies', es: 'Francia ganó demasiadas colonias', fa: 'فرانسه مستعمره‌های بسیار زیاد گرفت' },
          { en: 'France lost all its farms', es: 'Francia perdió todas sus granjas', fa: 'فرانسه همهٔ فارم‌هایش را از دست داد' },
          { en: 'The king moved to America', es: 'El rey se mudó a América', fa: 'پادشاه به امریکا رفت' }],
        answer: 0,
        why: { en: 'France spent huge sums on the war. To pay its debts, the king wanted new taxes.', es: 'Francia gastó sumas enormes en la guerra. Para pagar sus deudas, el rey quiso impuestos nuevos.', fa: 'فرانسه در جنگ پول بسیار زیاد خرج کرد. پادشاه برای پرداخت قرض مالیهٔ نو خواست.' } },
      { q: { en: 'In France, who paid most of the taxes?', es: 'En Francia, ¿quién pagaba casi todos los impuestos?', fa: 'در فرانسه، کی بیشتر مالیه را می‌داد؟' },
        choices: [
          { en: 'The Third Estate: common people', es: 'El Tercer Estado: la gente común', fa: 'طبقهٔ سوم: مردم عادی' },
          { en: 'The First Estate: the clergy', es: 'El Primer Estado: el clero', fa: 'طبقهٔ اول: روحانیون' },
          { en: 'The Second Estate: the rich nobles', es: 'El Segundo Estado: los nobles ricos', fa: 'طبقهٔ دوم: اشراف ثروتمند' },
          { en: 'The king and the royal family', es: 'El rey y la familia real', fa: 'پادشاه و خانوادهٔ شاهی' }],
        answer: 0,
        why: { en: 'The Third Estate was about 97 out of 100 people. They paid most taxes but had little say.', es: 'El Tercer Estado era unas 97 de cada 100 personas. Pagaba casi todo y tenía poca voz.', fa: 'طبقهٔ سوم حدود ۹۷ نفر از هر ۱۰۰ نفر بود. بیشتر مالیه را می‌داد اما صدای کم داشت.' } },
      { q: { en: 'What happened on July 14, 1789?', es: '¿Qué pasó el 14 de julio de 1789?', fa: 'در ۱۴ جولای ۱۷۸۹ چه شد؟' },
        choices: [
          { en: 'Crowds in Paris stormed the Bastille prison', es: 'La multitud de París tomó la cárcel de la Bastilla', fa: 'مردم پاریس به زندان باستیل حمله کردند' },
          { en: 'The king signed the U.S. Constitution', es: 'El rey firmó la Constitución de Estados Unidos', fa: 'پادشاه قانون اساسی امریکا را امضا کرد' },
          { en: 'Napoleon was crowned emperor of France', es: 'Napoleón fue coronado emperador de Francia', fa: 'ناپلئون امپراتور فرانسه شد' },
          { en: 'France and Britain signed a peace treaty', es: 'Francia y Gran Bretaña firmaron la paz', fa: 'فرانسه و بریتانیا پیمان صلح امضا کردند' }],
        answer: 0,
        why: { en: 'People stormed the Bastille to get gunpowder. July 14 is now France\'s national holiday.', es: 'La gente tomó la Bastilla para conseguir pólvora. El 14 de julio es hoy la fiesta nacional de Francia.', fa: 'مردم برای گرفتن باروت به باستیل حمله کردند. ۱۴ جولای حالا روز ملی فرانسه است.' } },
      { q: { en: 'What does Article 1 of the Declaration of the Rights of Man say?', es: '¿Qué dice el artículo 1 de la Declaración de los Derechos del Hombre?', fa: 'مادهٔ ۱ اعلامیهٔ حقوق بشر و شهروند چه می‌گوید؟' },
        choices: [
          { en: 'Men are born and remain free and equal in rights', es: 'Los hombres nacen y permanecen libres e iguales en derechos', fa: 'انسان‌ها آزاد و با حقوق برابر به دنیا می‌آیند و می‌مانند' },
          { en: 'The king\'s word will always be the highest law in France', es: 'La palabra del rey siempre será la ley más alta de Francia', fa: 'حرف پادشاه همیشه بالاترین قانون فرانسه می‌ماند' },
          { en: 'Nobles and priests never pay taxes', es: 'Los nobles y los sacerdotes nunca pagan impuestos', fa: 'اشراف و کشیش‌ها هرگز مالیه نمی‌دهند' },
          { en: 'Only men who own land may live in Paris', es: 'Solo los hombres con tierras pueden vivir en París', fa: 'فقط مردانی که زمین دارند می‌توانند در پاریس زندگی کنند' }],
        answer: 0,
        why: { en: 'The Declaration came in August 1789. It used Enlightenment ideas about natural rights.', es: 'La Declaración llegó en agosto de 1789. Usó ideas de la Ilustración sobre los derechos naturales.', fa: 'اعلامیه در اگست ۱۷۸۹ آمد. از اندیشه‌های روشنگری دربارهٔ حقوق طبیعی کار گرفت.' } },
      { q: { en: 'What was the Reign of Terror?', es: '¿Qué fue el Reinado del Terror?', fa: 'دورهٔ وحشت چه بود؟' },
        choices: [
          { en: 'Leaders killed thousands they called enemies', es: 'Los líderes mataron a miles que llamaban enemigos', fa: 'رهبران هزاران نفر را که دشمن می‌خواندند کشتند' },
          { en: 'A war in which France took over all of Spain', es: 'Una guerra en que Francia conquistó toda España', fa: 'جنگی که در آن فرانسه همهٔ هسپانیه را گرفت' },
          { en: 'A time of peace when France had no army', es: 'Una época de paz en que Francia no tenía ejército', fa: 'زمان صلحی که فرانسه اردو نداشت' },
          { en: 'A storm that ruined the harvest of 1788', es: 'Una tormenta que arruinó la cosecha de 1788', fa: 'توفانی که حاصل ۱۷۸۸ را خراب کرد' }],
        answer: 0,
        why: { en: 'In 1793 and 1794, about 17,000 people were put to death, often without fair trials.', es: 'En 1793 y 1794, unas 17,000 personas fueron ejecutadas, muchas veces sin juicios justos.', fa: 'در ۱۷۹۳ و ۱۷۹۴، حدود ۱۷٬۰۰۰ نفر اعدام شدند، اکثراً بدون محکمهٔ عادلانه.' } },
      { q: { en: 'Who took control of France in 1799?', es: '¿Quién tomó el control de Francia en 1799?', fa: 'در سال ۱۷۹۹ کی فرانسه را در دست گرفت؟' },
        choices: [
          { en: 'Napoleon Bonaparte', es: 'Napoleón Bonaparte', fa: 'ناپلئون بناپارت' },
          { en: 'King Louis XVI', es: 'El rey Luis XVI', fa: 'پادشاه لویی شانزدهم' },
          { en: 'General George Washington', es: 'El general George Washington', fa: 'جنرال جورج واشنگتن' },
          { en: 'Thomas Jefferson', es: 'Thomas Jefferson', fa: 'توماس جفرسون' }],
        answer: 0,
        why: { en: 'Napoleon was an army general. He took control in 1799 and made himself emperor in 1804.', es: 'Napoleón era un general. Tomó el control en 1799 y se hizo emperador en 1804.', fa: 'ناپلئون یک جنرال اردو بود. در ۱۷۹۹ قدرت را گرفت و در ۱۸۰۴ خود را امپراتور ساخت.' } }
    ]
  },

  learned: [
    { en: 'In 1776, Americans declared [[independence|independence]] from Britain, using Locke\'s ideas about rights.', es: 'En 1776, los estadounidenses declararon su [[independence|independencia]] de Gran Bretaña con las ideas de Locke sobre los derechos.', fa: 'در سال ۱۷۷۶، امریکایی‌ها با اندیشه‌های لاک دربارهٔ حقوق، [[independence|استقلال]] خود را از بریتانیا اعلام کردند.' },
    { en: 'In 1789, the [[third estate|Third Estate]] rose up against unfair taxes. Crowds stormed the Bastille.', es: 'En 1789, el [[third estate|Tercer Estado]] se levantó contra los impuestos injustos. La multitud tomó la Bastilla.', fa: 'در سال ۱۷۸۹، [[third estate|طبقهٔ سوم]] علیه مالیهٔ ناعادلانه برخاست. مردم به باستیل حمله کردند.' },
    { en: 'France declared that men are born free and equal. Then came the [[reign of terror|Reign of Terror]] and Napoleon.', es: 'Francia declaró que los hombres nacen libres e iguales. Después llegaron el [[reign of terror|Reinado del Terror]] y Napoleón.', fa: 'فرانسه اعلام کرد انسان‌ها آزاد و برابر به دنیا می‌آیند. بعد [[reign of terror|دورهٔ وحشت]] و ناپلئون آمدند.' }
  ],
  reflect: {
    q: { en: 'France\'s motto is Liberty, Equality, Fraternity. Which word matters most to you? Why?', es: 'El lema de Francia es Libertad, Igualdad, Fraternidad. ¿Qué palabra es más importante para ti? ¿Por qué?', fa: 'شعار فرانسه آزادی، برابری، برادری است. کدام کلمه برای تو مهم‌تر است؟ چرا؟' },
    starter: { en: 'The word that matters most to me is', es: 'La palabra más importante para mí es', fa: 'کلمه‌ای که برای من از همه مهم‌تر است' }
  }
};
