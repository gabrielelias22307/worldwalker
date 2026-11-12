/* TRAILWALKER · Episode 5.1 · Reform Leaders, Abolition and John Brown (VUS)
   Harpers Ferry, Virginia (now West Virginia), October 1859, where the Potomac and Shenandoah rivers meet.
   North (rows 1-2): the Maryland shore under Maryland Heights, with the C&O Canal (~) and its towpath.
   Rows 3-4: the Potomac River, crossed by the railroad bridge (B) at x 24.
   Row 5: the railroad along the Virginia shore. Rows 6-7: the federal armory workshops (X), the fire engine
   house ("John Brown's Fort", door at 20,7) and the hotel (J) by the station. Row 8: the town street.
   West (x 1-12): the hillside with homes, a church, a schoolhouse and Jefferson Rock (r).
   East (x 27-28): the Shenandoah River; beyond it, Loudoun Heights (M). Rows 17-18: the rifle works.
   Hard topic (slavery, a raid): plain, true, serious words. No person is ever an item or a prize. */
window.EPISODE = {
  id: '5.1',
  realm: 5,
  sol: 'VUS',
  title: { en: 'Reformers and John Brown', es: 'Los reformistas y John Brown', fa: 'اصلاح‌گران و جان براون' },
  place: { en: 'Harpers Ferry, 1859', es: 'Harpers Ferry, 1859', fa: 'هارپرز فری، ۱۸۵۹' },
  weather: { sky: 'leaves', time: 'day' },
  intro: [
    { en: 'The Grump smudged the [[reform|reform]] page. People forgot who spoke up against wrongs.',
      es: 'El Gruñón manchó la página de la [[reform|reforma]]. La gente olvidó quién luchó contra las injusticias.',
      fa: 'غرغرو صفحهٔ [[reform|اصلاحات]] را لکه‌دار کرد. مردم فراموش کردند چه کسانی در برابر بی‌عدالتی صدا بلند کردند.' },
    { en: 'Talk to the 3 people here, then fix the journal stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del diario.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ روزنامچه را درست کن.' }
  ],
  /* cut scenes: Beacon flies to Harpers Ferry; the timeline marks 1859 */
  scenes: {
    at: [-77.73, 39.32],
    year: 1859,
    start: [
      { en: 'From the 1830s to the 1850s, many Americans worked to reform their country.',
        es: 'De los años 1830 a los 1850, muchos estadounidenses trabajaron para reformar su país.',
        fa: 'از دههٔ ۱۸۳۰ تا دههٔ ۱۸۵۰، بسیاری از امریکایی‌ها برای اصلاح کشور خود کار کردند.' },
      { en: 'Some worked to end slavery. Others worked for women\'s rights and schools.',
        es: 'Algunos lucharon para acabar con la esclavitud. Otros, por los derechos de la mujer y las escuelas.',
        fa: 'بعضی برای پایان برده‌داری کار کردند. دیگران برای حقوق زنان و مکتب‌ها.' },
      { en: 'In October 1859, John Brown led a raid on Harpers Ferry, Virginia.',
        es: 'En octubre de 1859, John Brown dirigió un ataque contra Harpers Ferry, Virginia.',
        fa: 'در ماه اکتوبر ۱۸۵۹، جان براون به هارپرز فری در ورجینیا حمله کرد.' }
    ],
    page: { en: 'Harpers Ferry is now in West Virginia. It is a national historical park.',
      es: 'Hoy Harpers Ferry está en Virginia Occidental. Es un parque histórico nacional.',
      fa: 'هارپرز فری امروز در ورجینیای غربی است. یک پارک تاریخی ملی است.' },
    guess: {
      q: { en: 'John Brown wanted to start an uprising against slavery. Did it work?', es: 'John Brown quería empezar un levantamiento contra la esclavitud. ¿Funcionó?', fa: 'جان براون می‌خواست قیامی علیه برده‌داری شروع کند. آیا موفق شد؟' },
      choices: [
        { t: { en: 'No, it failed fast', es: 'No, fracasó rápido', fa: 'نه، زود ناکام شد' }, ok: true },
        { t: { en: 'Yes, slavery ended', es: 'Sí, terminó la esclavitud', fa: 'بله، برده‌داری تمام شد' } }
      ],
      why: { en: 'No. Brown was captured within two days. But the raid made North and South angrier.', es: 'No. Brown fue capturado en dos días. Pero el ataque enojó más al Norte y al Sur.', fa: 'نه. براون در دو روز دستگیر شد. اما این حمله شمال و جنوب را خشمگین‌تر ساخت.' }
    },
    next: {
      q: { en: 'Next: Fort Monroe, Virginia, 1861. Why did freedom seekers call it "Freedom\'s Fortress"?', es: 'Ahora: Fort Monroe, Virginia, 1861. ¿Por qué quienes buscaban la libertad lo llamaron "Fortaleza de la Libertad"?', fa: 'بعدی: فورت مونرو، ورجینیا، ۱۸۶۱. چرا آزادی‌خواهان آن را «قلعهٔ آزادی» نامیدند؟' },
      choices: [
        { t: { en: 'They found safety there', es: 'Allí encontraron refugio', fa: 'آنجا پناه یافتند' }, ok: true },
        { t: { en: 'It held the Union\'s gold', es: 'Guardaba el oro de la Unión', fa: 'طلای اتحادیه آنجا بود' } }
      ],
      why: { en: 'In 1861, Union officers there refused to send freedom seekers back to slavery.', es: 'En 1861, los oficiales de la Unión allí se negaron a devolver a la esclavitud a quienes huían.', fa: 'در سال ۱۸۶۱، افسران اتحادیه آنجا آزادی‌خواهان را دوباره به برده‌داری پس نفرستادند.' }
    }
  },
  /* houses: who lives or works behind each door (2-3 lines each) */
  houses: [
    { at: [4, 10], name: { en: 'Mary Ellis', es: 'Mary Ellis', fa: 'مری الیس' },
      look: { skin: 1, hair: '#6a4a2a', shirt: '#7a8aa0', pants: '#3a3a4a', style: 'bun' },
      lines: [
        { en: 'I am a nurse. I read about the reformer Dorothea Dix.', es: 'Soy enfermera. Leí sobre la reformista Dorothea Dix.', fa: 'من نرس هستم. دربارهٔ اصلاح‌گر، دوروتیا دیکس، خوانده‌ام.' },
        { en: 'She visited jails and hospitals. People with mental illness were treated badly there.', es: 'Ella visitó cárceles y hospitales. Allí trataban mal a las personas con enfermedades mentales.', fa: 'او زندان‌ها و شفاخانه‌ها را دید. آنجا با مریضان روانی بد رفتار می‌شد.' },
        { en: 'She asked states to build better hospitals for them. Many states did.', es: 'Pidió a los estados construir mejores hospitales para ellos. Muchos lo hicieron.', fa: 'او از ایالت‌ها خواست برای‌شان شفاخانه‌های بهتر بسازند. بسیاری ساختند.' }
      ] },
    { at: [20, 7], name: { en: 'Mr. Hale', es: 'Señor Hale', fa: 'آقای هیل' },
      look: { skin: 2, hair: '#9a9a9a', shirt: '#4a5a3a', pants: '#2a2a2a', hat: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'This is the armory\'s fire engine house. It holds the fire engines.', es: 'Esta es la casa de las bombas contra incendios de la armería.', fa: 'این خانهٔ ماشین‌های آتش‌نشانی اسلحه‌خانه است.' },
        { en: 'At the end, Brown\'s men and their hostages were inside this building.', es: 'Al final, los hombres de Brown y sus rehenes estaban dentro de este edificio.', fa: 'در آخر، افراد براون و گروگان‌هایشان داخل همین تعمیر بودند.' },
        { en: 'People now call this small building John Brown\'s Fort.', es: 'Ahora la gente llama a este pequeño edificio el Fuerte de John Brown.', fa: 'حالا مردم این تعمیر کوچک را «قلعهٔ جان براون» می‌گویند.' }
      ] },
    { at: [4, 14], name: { en: 'Hannah Price', es: 'Hannah Price', fa: 'هانا پرایس' },
      look: { skin: 3, hair: '#2a1a10', shirt: '#5a3a6a', pants: '#2a2a3a', style: 'long' },
      lines: [
        { en: 'Many reformers believed their faith called them to fix wrongs.', es: 'Muchos reformistas creían que su fe los llamaba a corregir injusticias.', fa: 'بسیاری از اصلاح‌گران باور داشتند که ایمان‌شان آن‌ها را به رفع بی‌عدالتی می‌خواند.' },
        { en: 'Sojourner Truth walked away from slavery in New York in 1826.', es: 'Sojourner Truth se liberó de la esclavitud en Nueva York en 1826.', fa: 'سوجرنر تروث در سال ۱۸۲۶ در نیویارک از برده‌داری فرار کرد.' },
        { en: 'She spoke for the freedom of Black people and for women\'s rights.', es: 'Ella habló por la libertad de las personas negras y por los derechos de la mujer.', fa: 'او برای آزادی سیاه‌پوستان و برای حقوق زنان سخنرانی کرد.' }
      ] },
    { at: [11, 14], name: { en: 'Sam', es: 'Sam', fa: 'سام' },
      look: { skin: 2, hair: '#3a2416', shirt: '#2f6f9a', pants: '#4a3a2a', style: 'short' },
      lines: [
        { en: 'I love school, but many children never get to go.', es: 'Me encanta la escuela, pero muchos niños nunca pueden ir.', fa: 'من مکتب را دوست دارم، اما بسیاری از کودکان هرگز به مکتب نمی‌روند.' },
        { en: 'Horace Mann of Massachusetts worked for free public schools for all children.', es: 'Horace Mann, de Massachusetts, luchó por escuelas públicas gratis para todos los niños.', fa: 'هوریس من از ماساچوست برای مکتب‌های دولتی رایگان برای همهٔ کودکان کار کرد.' },
        { en: 'He also wanted trained teachers. Many states copied his ideas.', es: 'También quería maestros preparados. Muchos estados copiaron sus ideas.', fa: 'او معلمان آموزش‌دیده هم می‌خواست. بسیاری از ایالت‌ها از نظرهایش پیروی کردند.' }
      ] },
    { at: [23, 13], name: { en: 'Isaac Bell', es: 'Isaac Bell', fa: 'آیزاک بل' },
      look: { skin: 5, hair: '#120c08', shirt: '#8a5a2a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'I am a free Black blacksmith. I must carry papers that prove I am free.', es: 'Soy un herrero negro y libre. Debo llevar papeles que prueban que soy libre.', fa: 'من آهنگر سیاه‌پوست آزاد هستم. باید کاغذی همراه داشته باشم که آزادی‌ام را ثابت کند.' },
        { en: 'Many people in this county are [[enslaved|enslaved]]. My own cousins are.', es: 'Muchas personas de este condado están [[enslaved|esclavizadas]]. Mis propios primos lo están.', fa: 'بسیاری از مردم این ولسوالی [[enslaved|برده]] هستند. پسرکاکاهای خودم هم.' },
        { en: 'In Virginia, the law keeps Black children out of school.', es: 'En Virginia, la ley no deja que los niños negros vayan a la escuela.', fa: 'در ورجینیا، قانون نمی‌گذارد کودکان سیاه‌پوست به مکتب بروند.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens (see the note at the top) */
  map: [
    'MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM',
    'MPPPPP~~~~~~~~~~~~~~~~~~..,.MMMM',
    'MPPPPx:::::::::::::::::::::::MMM',
    '========================B=======',
    '~~~~~~~~~~~~~~~~~~~~~~~~B~~~~~~~',
    'T-----------------------lls~~~~~',
    'TTT..,..TXXXXXXXXX.RRR.JJJl~~MMM',
    'TT......TXXXXXXXXX.hdh.JJJl~~MMM',
    'T..::::::llllllllllllllllll~~MMM',
    'T..RRR..:l.QQQ..QQQx.,..x..~~MMM',
    'T..hdh..:l.hhh..hhh........~~MMM',
    'T...:::::l.................~~MMM',
    'T.,..:...l............RRRls~~MMM',
    'T.RRRRR..lQQQ.........hdhls~~MMM',
    'T.hhdhh..lhdh............ls~~MMM',
    'T...:::::::::::::::::::::ls~~MMM',
    'T........................ls~~MMM',
    'T.,................XXXX..ls~~MMM',
    'T.xrr.....,........XXXX..ls~~MMM',
    'T..rr....................ls~~MMM',
    'TTT........,.......,.....ls~~MMM',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTT~~MMM'
  ],
  start: [21, 8],

  /* finds: a clue note leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [7, 19], at: [4, 17], decor: 'gem',
      clue: { en: 'From this note, walk 2 steps north, then 3 steps west. Stand near the big rock.', es: 'Desde esta nota, camina 2 pasos al norte y luego 3 pasos al oeste. Párate cerca de la roca grande.', fa: 'از این یادداشت، ۲ قدم به شمال برو، بعد ۳ قدم به غرب. نزدیک سنگ بزرگ بایست.' },
      text: { en: 'In 1783, Thomas Jefferson stood near here. He called this river view one of nature\'s greatest.', es: 'En 1783, Thomas Jefferson estuvo cerca de aquí. Dijo que esta vista del río era de las más grandiosas.', fa: 'در سال ۱۷۸۳، توماس جفرسون نزدیک اینجا ایستاد. او این منظرهٔ دریا را از بزرگ‌ترین منظره‌های طبیعت گفت.' } },
    { clueAt: [24, 1], at: [14, 2], decor: 'shell',
      clue: { en: 'From this note, walk 1 step south, then 10 steps west along the towpath.', es: 'Desde esta nota, camina 1 paso al sur y luego 10 pasos al oeste por el camino del canal.', fa: 'از این یادداشت، ۱ قدم به جنوب برو، بعد ۱۰ قدم به غرب در راه کنار کانال.' },
      text: { en: 'The C&O Canal runs here beside the Potomac. Mules pull boats full of coal.', es: 'El canal C&O pasa aquí junto al Potomac. Las mulas tiran de botes llenos de carbón.', fa: 'کانال سی‌اند‌او اینجا کنار دریای پوتومک است. قاطرها کشتی‌های پر از زغال را می‌کشند.' } }
  ],

  words: {
    reform: { en: 'a change that makes something better or more fair', es: 'un cambio que hace algo mejor o más justo', fa: 'تغییری که چیزی را بهتر یا عادلانه‌تر می‌سازد' },
    abolitionist: { en: 'a person who worked to end slavery', es: 'una persona que luchaba para acabar con la esclavitud', fa: 'کسی که برای پایان برده‌داری کار می‌کرد' },
    enslaved: { en: 'forced to work for no pay and kept as someone\'s property', es: 'obligado a trabajar sin pago y tratado como propiedad de otra persona', fa: 'مجبور به کار بی‌مزد و مثل مال کس دیگری نگه داشته شده' },
    'underground railroad': { en: 'a secret network of people and safe houses that helped freedom seekers escape slavery', es: 'una red secreta de personas y casas seguras que ayudaba a escapar de la esclavitud', fa: 'یک شبکهٔ پنهانی از مردم و خانه‌های امن که به فرار از برده‌داری کمک می‌کرد' },
    'fugitive slave act': { en: 'an 1850 law that made people help catch freedom seekers and return them to slavery', es: 'una ley de 1850 que obligaba a ayudar a atrapar a quienes huían y devolverlos a la esclavitud', fa: 'قانونی در سال ۱۸۵۰ که مردم را مجبور می‌کرد فراری‌ها را بگیرند و دوباره به برده‌داری بسپارند' },
    'seneca falls': { en: 'a town in New York where a women\'s rights meeting was held in 1848', es: 'un pueblo de Nueva York donde hubo una reunión por los derechos de la mujer en 1848', fa: 'شهرکی در نیویارک که در سال ۱۸۴۸ جلسهٔ حقوق زنان در آن برگزار شد' },
    'declaration of sentiments': { en: 'the paper from Seneca Falls that said men and women are created equal', es: 'el documento de Seneca Falls que decía que hombres y mujeres son creados iguales', fa: 'سندی از سنکا فالز که می‌گفت مردان و زنان برابر آفریده شده‌اند' },
    armory: { en: 'a place where weapons are made and kept', es: 'un lugar donde se fabrican y guardan armas', fa: 'جایی که سلاح ساخته و نگهداری می‌شود' },
    uprising: { en: 'when many people rise up together against those in power', es: 'cuando mucha gente se levanta junta contra quienes tienen el poder', fa: 'وقتی مردم زیاد با هم در برابر صاحبان قدرت برمی‌خیزند' },
    'bleeding kansas': { en: 'fighting in Kansas from 1854 to 1856 over whether it would allow slavery', es: 'luchas en Kansas de 1854 a 1856 sobre si allí se permitiría la esclavitud', fa: 'جنگ‌ها در کانزاس از ۱۸۵۴ تا ۱۸۵۶ بر سر اینکه برده‌داری آنجا اجازه داشته باشد یا نه' },
    'dred scott': { en: 'an 1857 Supreme Court decision that said Black Americans could not be citizens', es: 'una decisión de la Corte Suprema de 1857 que dijo que los afroamericanos no podían ser ciudadanos', fa: 'فیصلهٔ ستره محکمه در سال ۱۸۵۷ که گفت سیاه‌پوستان امریکایی تبعه شده نمی‌توانند' },
    martyr: { en: 'a person who dies for a cause and is honored for it', es: 'una persona que muere por una causa y es honrada por ello', fa: 'کسی که در راه یک هدف جان می‌دهد و به این خاطر گرامی داشته می‌شود' }
  },

  npcs: [
    {
      x: 22, y: 10,
      name: { en: 'Nancy', es: 'Nancy', fa: 'نانسی' },
      role: { en: 'Free Black cook at the hotel', es: 'Cocinera negra y libre del hotel', fa: 'آشپز سیاه‌پوست آزاد در هوتل' },
      look: { skin: 5, hair: '#120c08', shirt: '#b8b0a0', pants: '#4a2a2a', style: 'bun' },
      lines: [
        { en: 'I am free, and I cook at the hotel. Many Black people here are enslaved.', es: 'Soy libre y cocino en el hotel. Muchas personas negras aquí están esclavizadas.', fa: 'من آزاد هستم و در هوتل آشپزی می‌کنم. بسیاری از سیاه‌پوستان اینجا برده هستند.' },
        { en: '[[abolitionist|Abolitionists]] want to end slavery. Frederick Douglass escaped slavery and now speaks against it.', es: 'Los [[abolitionist|abolicionistas]] quieren acabar con la esclavitud. Frederick Douglass escapó de ella y ahora habla en su contra.', fa: '[[abolitionist|مخالفان برده‌داری]] می‌خواهند برده‌داری را تمام کنند. فردریک داگلس از برده‌داری فرار کرد و حالا علیه آن سخن می‌گوید.' },
        { en: 'Harriet Tubman escaped, then led others north on the [[underground railroad|Underground Railroad]].', es: 'Harriet Tubman escapó y luego guió a otros al norte por el [[underground railroad|Ferrocarril Subterráneo]].', fa: 'هریت تبمن فرار کرد، بعد دیگران را از راه [[underground railroad|راه‌آهن زیرزمینی]] به شمال رساند.' },
        { en: 'The 1850 [[fugitive slave act|Fugitive Slave Act]] said Northerners must help catch freedom seekers.', es: 'La [[fugitive slave act|Ley de Esclavos Fugitivos]] de 1850 obligó al Norte a ayudar a atrapar a quienes huían.', fa: '[[fugitive slave act|قانون بردگان فراری]] در سال ۱۸۵۰ گفت مردم شمال باید در گرفتن فراری‌ها کمک کنند.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why did the Fugitive Slave Act make many Northerners angry?', es: '¿Por qué la Ley de Esclavos Fugitivos enojó a muchas personas del Norte?', fa: 'چرا قانون بردگان فراری بسیاری از مردم شمال را خشمگین ساخت؟' },
        choices: [
          { ok: true, t: { en: 'It forced them to help send people back to slavery', es: 'Los obligaba a ayudar a devolver gente a la esclavitud', fa: 'آن‌ها را مجبور می‌کرد مردم را به برده‌داری پس بفرستند' },
            why: { en: 'Yes. Many Northerners did not want to help return people to slavery.', es: 'Sí. Muchos en el Norte no querían ayudar a devolver personas a la esclavitud.', fa: 'بله. بسیاری از مردم شمال نمی‌خواستند در پس فرستادن مردم به برده‌داری کمک کنند.' } },
          { t: { en: 'It raised the price of every train ticket going South', es: 'Subió el precio de cada boleto de tren hacia el Sur', fa: 'قیمت هر تکت ریل به طرف جنوب را بالا برد' },
            why: { en: 'It was not about trains. It forced Northerners to help catch freedom seekers.', es: 'No trataba de trenes. Obligaba al Norte a ayudar a atrapar a quienes huían.', fa: 'دربارهٔ ریل نبود. مردم شمال را مجبور می‌کرد در گرفتن فراری‌ها کمک کنند.' } },
          { t: { en: 'It closed every school and church in the North', es: 'Cerró todas las escuelas e iglesias del Norte', fa: 'همهٔ مکتب‌ها و کلیساهای شمال را بست' },
            why: { en: 'No schools closed. The law forced Northerners to help catch freedom seekers.', es: 'No se cerró ninguna escuela. La ley obligaba a ayudar a atrapar a quienes huían.', fa: 'هیچ مکتبی بسته نشد. قانون مردم شمال را مجبور می‌کرد در گرفتن فراری‌ها کمک کنند.' } }
        ]
      }
    },
    {
      x: 8, y: 12,
      name: { en: 'Clara', es: 'Clara', fa: 'کلارا' },
      role: { en: 'Train traveler from New York', es: 'Viajera de tren de Nueva York', fa: 'مسافر ریل از نیویارک' },
      look: { skin: 1, hair: '#8a5a2a', shirt: '#3a6a5a', pants: '#2a2a3a', style: 'bun', hat: '#5a2a3a' },
      lines: [
        { en: 'I am from New York. Our train got stuck here last night.', es: 'Soy de Nueva York. Nuestro tren se quedó atrapado aquí anoche.', fa: 'من از نیویارک هستم. ریل ما دیشب اینجا ماند.' },
        { en: 'In 1848, about 300 people met at [[seneca falls|Seneca Falls]], New York, for women\'s rights.', es: 'En 1848, unas 300 personas se reunieron en [[seneca falls|Seneca Falls]], Nueva York, por los derechos de la mujer.', fa: 'در سال ۱۸۴۸، حدود ۳۰۰ نفر در [[seneca falls|سنکا فالز]] نیویارک برای حقوق زنان جمع شدند.' },
        { en: 'Elizabeth Cady Stanton wrote the [[declaration of sentiments|Declaration of Sentiments]] for that meeting.', es: 'Elizabeth Cady Stanton escribió la [[declaration of sentiments|Declaración de Sentimientos]] para esa reunión.', fa: 'الیزابت کیدی استنتن برای آن جلسه [[declaration of sentiments|اعلامیهٔ احساسات]] را نوشت.' },
        { en: 'It said all men and women are created equal. Women wanted the vote.', es: 'Decía que todos los hombres y mujeres son creados iguales. Las mujeres querían votar.', fa: 'در آن آمده بود که همهٔ مردان و زنان برابر آفریده شده‌اند. زنان حق رأی می‌خواستند.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'What did the women and men at Seneca Falls ask for?', es: '¿Qué pidieron las mujeres y los hombres de Seneca Falls?', fa: 'زنان و مردان در سنکا فالز چه خواستند؟' },
        choices: [
          { ok: true, t: { en: 'Equal rights, including the right to vote', es: 'Derechos iguales, incluido el derecho al voto', fa: 'حقوق برابر، از جمله حق رأی' },
            why: { en: 'Yes. The Declaration of Sentiments asked for equal rights, including the vote.', es: 'Sí. La Declaración de Sentimientos pedía derechos iguales, incluido el voto.', fa: 'بله. اعلامیهٔ احساسات حقوق برابر، از جمله حق رأی، را خواست.' } },
          { t: { en: 'Lower taxes on farms and on all factories', es: 'Menos impuestos para granjas y fábricas', fa: 'مالیات کمتر بر فارم‌ها و فابریکه‌ها' },
            why: { en: 'Taxes were not the main idea. They asked for equal rights and the vote.', es: 'Los impuestos no eran la idea principal. Pidieron derechos iguales y el voto.', fa: 'مالیات موضوع اصلی نبود. آن‌ها حقوق برابر و حق رأی خواستند.' } },
          { t: { en: 'A new railroad line from New York to Ohio', es: 'Una nueva línea de tren de Nueva York a Ohio', fa: 'یک خط ریل نو از نیویارک تا اوهایو' },
            why: { en: 'Railroads were not the topic. Women asked for equal rights and the vote.', es: 'Los trenes no eran el tema. Las mujeres pidieron derechos iguales y el voto.', fa: 'ریل موضوع نبود. زنان حقوق برابر و حق رأی خواستند.' } }
        ]
      }
    },
    {
      x: 14, y: 9,
      name: { en: 'Thomas', es: 'Thomas', fa: 'توماس' },
      role: { en: 'Armory gunsmith', es: 'Armero de la armería', fa: 'تفنگ‌ساز اسلحه‌خانه' },
      look: { skin: 2, hair: '#4a3020', shirt: '#6a5a4a', pants: '#2a2a2a', hat: '#3a2a1a' },
      lines: [
        { en: 'I make rifles here. On October 16, John Brown and 21 men seized the [[armory|armory]].', es: 'Aquí hago rifles. El 16 de octubre, John Brown y 21 hombres tomaron la [[armory|armería]].', fa: 'من اینجا تفنگ می‌سازم. در ۱۶ اکتوبر، جان براون و ۲۱ مرد [[armory|اسلحه‌خانه]] را گرفتند.' },
        { en: 'Five of his men were Black. They hoped enslaved people would join an [[uprising|uprising]].', es: 'Cinco de sus hombres eran negros. Esperaban que los esclavizados se unieran a un [[uprising|levantamiento]].', fa: 'پنج نفر از افرادش سیاه‌پوست بودند. امید داشتند بردگان به یک [[uprising|قیام]] بپیوندند.' },
        { en: 'On October 18, US Marines under Robert E. Lee captured them.', es: 'El 18 de octubre, los infantes de marina de EE. UU. bajo Robert E. Lee los capturaron.', fa: 'در ۱۸ اکتوبر، تفنگداران بحری امریکا به فرماندهی رابرت ای. لی آن‌ها را دستگیر کردند.' },
        { en: 'Some Northerners call Brown a hero. Many Southerners call him a terrorist.', es: 'Algunos en el Norte llaman héroe a Brown. Muchos en el Sur lo llaman terrorista.', fa: 'بعضی از مردم شمال براون را قهرمان می‌گویند. بسیاری از مردم جنوب او را تروریست می‌گویند.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Why did people in the North and South see John Brown so differently?', es: '¿Por qué la gente del Norte y del Sur veía a John Brown de forma tan distinta?', fa: 'چرا مردم شمال و جنوب جان براون را این‌قدر متفاوت می‌دیدند؟' },
        choices: [
          { ok: true, t: { en: 'They disagreed deeply about slavery', es: 'No estaban de acuerdo sobre la esclavitud', fa: 'دربارهٔ برده‌داری سخت اختلاف داشتند' },
            why: { en: 'Yes. Some Northerners saw a hero against slavery. Many Southerners saw a dangerous attack.', es: 'Sí. Algunos en el Norte vieron a un héroe contra la esclavitud. Muchos en el Sur vieron un ataque peligroso.', fa: 'بله. بعضی در شمال قهرمانی علیه برده‌داری دیدند. بسیاری در جنوب یک حملهٔ خطرناک دیدند.' } },
          { t: { en: 'They all read the same newspapers', es: 'Todos leían los mismos periódicos', fa: 'همه روزنامه‌های یکسان می‌خواندند' },
            why: { en: 'They read different papers, and they disagreed about slavery. That split their views.', es: 'Leían periódicos distintos y no estaban de acuerdo sobre la esclavitud. Eso dividió sus opiniones.', fa: 'آن‌ها روزنامه‌های مختلف می‌خواندند و دربارهٔ برده‌داری اختلاف داشتند. این نظرهایشان را جدا کرد.' } },
          { t: { en: 'Brown was born in a faraway country', es: 'Brown nació en un país lejano', fa: 'براون در یک کشور دور به دنیا آمده بود' },
            why: { en: 'Brown was born in Connecticut. Views on slavery shaped how people saw him.', es: 'Brown nació en Connecticut. Las ideas sobre la esclavitud formaron cómo lo veían.', fa: 'براون در کنتیکت به دنیا آمد. نظر مردم دربارهٔ برده‌داری دید آن‌ها را به او شکل داد.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 24, y: 9, text: { en: 'HARPERS FERRY, VIRGINIA · 1859 · Here the Potomac and Shenandoah rivers meet.', es: 'HARPERS FERRY, VIRGINIA · 1859 · Aquí se juntan los ríos Potomac y Shenandoah.', fa: 'هارپرز فری، ورجینیا · ۱۸۵۹ · اینجا دریاهای پوتومک و شناندوا به هم می‌رسند.' } },
    { x: 19, y: 9, text: { en: 'ENGINE HOUSE · Brown\'s men were captured here on October 18. Virginia will put Brown on trial.', es: 'CASA DE BOMBAS · Aquí capturaron a los hombres de Brown el 18 de octubre. Virginia juzgará a Brown.', fa: 'خانهٔ ماشین آتش‌نشانی · افراد براون در ۱۸ اکتوبر اینجا دستگیر شدند. ورجینیا براون را محاکمه می‌کند.' } },
    { x: 2, y: 18, text: { en: 'JEFFERSON ROCK · Look east. Two rivers join and cut through the Blue Ridge mountains.', es: 'ROCA DE JEFFERSON · Mira al este. Dos ríos se juntan y cruzan las montañas Blue Ridge.', fa: 'سنگ جفرسون · به شرق ببین. دو دریا به هم می‌پیوندند و از کوه‌های بلوریج می‌گذرند.' } },
    { x: 5, y: 2, text: { en: 'MARYLAND · Across the Potomac. The railroad bridge joins Maryland and Virginia.', es: 'MARYLAND · Al otro lado del Potomac. El puente del tren une Maryland y Virginia.', fa: 'مریلند · آن طرف دریای پوتومک. پل ریل مریلند و ورجینیا را وصل می‌کند.' } }
  ],

  /* the quest: Mrs. Moore, a stranded train traveler (top right) -> Joe the railroad worker by the Shenandoah
     (bottom right) -> Miss Ada the teacher by the school (bottom left): bring her the right book -> back to Mrs. Moore */
  quest: {
    stat: 'loc',
    title: { en: 'The Lost Book', es: 'El libro perdido', fa: 'کتاب گم‌شده' },
    giver: {
      x: 26, y: 6,
      name: { en: 'Mrs. Moore', es: 'Señora Moore', fa: 'خانم مور' },
      role: { en: 'Train traveler', es: 'Viajera de tren', fa: 'مسافر ریل' },
      look: { skin: 0, hair: '#5a3a1a', shirt: '#2a4a6a', pants: '#3a2a3a', style: 'bun', hat: '#2a2a3a' },
      lines: [
        { en: 'Our train was stopped here in the night. Everyone was frightened.', es: 'Nuestro tren fue detenido aquí en la noche. Todos teníamos miedo.', fa: 'ریل ما شب اینجا متوقف شد. همه ترسیده بودند.' },
        { en: 'In the rush, I lost my book. Joe, the railroad worker, may know.', es: 'Con las prisas, perdí mi libro. Joe, el trabajador del tren, puede saber.', fa: 'در آن شتاب، کتابم را گم کردم. جو، کارگر ریل، شاید بداند.' }
      ],
      wait: { en: 'Joe works by the Shenandoah River. Walk south along the river street.', es: 'Joe trabaja junto al río Shenandoah. Camina al sur por la calle del río.', fa: 'جو کنار دریای شناندوا کار می‌کند. در سرک کنار دریا به جنوب برو.' },
      thanks: { en: 'My book! It helped many Northerners see how cruel slavery was. Thank you!', es: '¡Mi libro! Ayudó a muchos en el Norte a ver lo cruel que era la esclavitud. ¡Gracias!', fa: 'کتابم! این کتاب به بسیاری در شمال نشان داد برده‌داری چقدر ظالمانه است. تشکر!' }
    },
    contact: {
      x: 24, y: 16,
      name: { en: 'Joe', es: 'Joe', fa: 'جو' },
      role: { en: 'Railroad worker', es: 'Trabajador del ferrocarril', fa: 'کارگر ریل' },
      look: { skin: 3, hair: '#1a1208', shirt: '#6a3a2a', pants: '#2a3a5a', hat: '#3a3a3a' },
      lines: [
        { en: 'From 1854 to 1856, people in Kansas fought over slavery. It was called [[bleeding kansas|Bleeding Kansas]].', es: 'De 1854 a 1856, en Kansas pelearon por la esclavitud. Se llamó [[bleeding kansas|Kansas Sangrante]].', fa: 'از ۱۸۵۴ تا ۱۸۵۶، مردم در کانزاس بر سر برده‌داری جنگیدند. این را [[bleeding kansas|کانزاسِ خونین]] گفتند.' },
        { en: 'In 1857, the Supreme Court\'s [[dred scott|Dred Scott]] decision said Black Americans were not citizens.', es: 'En 1857, la decisión [[dred scott|Dred Scott]] de la Corte Suprema dijo que los afroamericanos no eran ciudadanos.', fa: 'در سال ۱۸۵۷، فیصلهٔ [[dred scott|درد اسکات]] ستره محکمه گفت سیاه‌پوستان امریکایی تبعه نیستند.' },
        { en: 'Miss Ada kept the lost things. Find her by the school, up the hill west.', es: 'La maestra Ada guardó las cosas perdidas. Búscala junto a la escuela, cerro arriba al oeste.', fa: 'خانم ادا چیزهای گم‌شده را نگه داشت. او را کنار مکتب، بالای تپه در غرب، پیدا کن.' }
      ]
    },
    action: {
      type: 'trade',
      trader: {
        x: 14, y: 15,
        name: { en: 'Miss Ada', es: 'Maestra Ada', fa: 'خانم ادا' },
        role: { en: 'Teacher', es: 'Maestra', fa: 'معلم' },
        look: { skin: 4, hair: '#2a1a10', shirt: '#7a2a2a', pants: '#2a2a3a', style: 'long' },
        lines: [
          { en: 'People dropped three books and papers in town. I left them where I found them.', es: 'La gente dejó tres libros y periódicos en el pueblo. Los dejé donde los encontré.', fa: 'مردم سه کتاب و روزنامه را در شهر انداختند. آن‌ها را همان جا ماندم که یافتم.' }
        ]
      },
      q: { en: 'Which one is Mrs. Moore\'s? She said: a novel from 1852 about the cruelty of slavery.', es: '¿Cuál es el de la señora Moore? Dijo: una novela de 1852 sobre la crueldad de la esclavitud.', fa: 'کدام از خانم مور است؟ او گفت: یک ناول از سال ۱۸۵۲ دربارهٔ ظلم برده‌داری.' },
      choices: [
        { ok: true, at: [27, 1], icon: '📕', t: { en: 'Uncle Tom\'s Cabin, by Harriet Beecher Stowe', es: 'La cabaña del tío Tom, de Harriet Beecher Stowe', fa: 'کلبهٔ کاکا تام، نوشتهٔ هریت بیچر استو' },
          why: { en: 'Yes! Stowe\'s 1852 novel showed slavery\'s cruelty. It turned many Northerners against slavery.', es: '¡Sí! La novela de Stowe de 1852 mostró la crueldad de la esclavitud. Puso a muchos en el Norte en su contra.', fa: 'بله! ناول ۱۸۵۲ استو ظلم برده‌داری را نشان داد. بسیاری از مردم شمال را مخالف برده‌داری ساخت.' } },
        { at: [20, 20], icon: '📰', t: { en: 'The Liberator, William Lloyd Garrison\'s newspaper', es: 'The Liberator, el periódico de William Lloyd Garrison', fa: 'لیبریتر، روزنامهٔ ویلیام لوید گریسن' },
          why: { en: 'This is a newspaper, not a novel. Garrison began printing it in 1831 to fight slavery.', es: 'Es un periódico, no una novela. Garrison empezó a publicarlo en 1831 contra la esclavitud.', fa: 'این روزنامه است، نه ناول. گریسن در سال ۱۸۳۱ چاپ آن را علیه برده‌داری شروع کرد.' } },
        { at: [2, 7], icon: '📘', t: { en: 'Frederick Douglass\'s book about his own life', es: 'El libro de Frederick Douglass sobre su propia vida', fa: 'کتاب فردریک داگلس دربارهٔ زندگی خودش' },
          why: { en: 'Douglass wrote his true life story in 1845. It is not a novel.', es: 'Douglass escribió la historia real de su vida en 1845. No es una novela.', fa: 'داگلس داستان واقعی زندگی‌اش را در سال ۱۸۴۵ نوشت. ناول نیست.' } }
      ],
      item: { icon: '📕', name: { en: 'Uncle Tom\'s Cabin', es: 'La cabaña del tío Tom', fa: 'کلبهٔ کاکا تام' } }
    }
  },

  scraps: [[6, 2], [3, 20], [26, 20]],
  smudges: [[6, 7], [21, 19]],

  challenge: {
    at: [14, 12],
    type: 'carry', // in the world; the card version (sort) is the fallback
    // abolition by the free blacksmith's home, women's rights by the church, schools and care by the schoolhouse
    zones: [{ bin: 'abol', x: 17, y: 12, w: 4, h: 2 }, { bin: 'women', x: 6, y: 16, w: 3, h: 2 }, { bin: 'care', x: 10, y: 16, w: 3, h: 2 }],
    stat: 'mov',
    title: { en: 'Which cause?', es: '¿Qué causa?', fa: 'کدام هدف؟' },
    intro: { en: 'The Grump mixed up the reformers\' records. Carry each card to the cause that person worked for.',
      es: 'El Gruñón revolvió los registros de los reformistas. Lleva cada tarjeta a la causa de esa persona.',
      fa: 'غرغرو ثبت‌های اصلاح‌گران را به هم زد. هر کارت را به هدفی ببر که آن شخص برایش کار کرد.' },
    bins: [
      { id: 'abol', icon: '🕊️', label: { en: 'Ending slavery', es: 'Acabar con la esclavitud', fa: 'پایان برده‌داری' },
        sub: { en: 'abolition', es: 'abolición', fa: 'لغو برده‌داری' } },
      { id: 'women', icon: '🗳️', label: { en: 'Women\'s rights', es: 'Derechos de la mujer', fa: 'حقوق زنان' },
        sub: { en: 'equal rights and the vote', es: 'derechos iguales y el voto', fa: 'حقوق برابر و حق رأی' } },
      { id: 'care', icon: '📚', label: { en: 'Schools and care', es: 'Escuelas y cuidado', fa: 'مکتب و مراقبت' },
        sub: { en: 'education and other reforms', es: 'educación y otras reformas', fa: 'آموزش و اصلاحات دیگر' } }
    ],
    items: [
      { bin: 'abol', t: { en: 'Frederick Douglass escaped slavery and spoke against it', es: 'Frederick Douglass escapó de la esclavitud y habló en su contra', fa: 'فردریک داگلس از برده‌داری فرار کرد و علیه آن سخن گفت' },
        why: { en: 'Douglass told his own story to show slavery\'s cruelty. He worked to end it.', es: 'Douglass contó su propia historia para mostrar la crueldad de la esclavitud. Luchó para acabarla.', fa: 'داگلس داستان خودش را گفت تا ظلم برده‌داری را نشان دهد. برای پایان آن کار کرد.' } },
      { bin: 'abol', t: { en: 'William Lloyd Garrison printed The Liberator', es: 'William Lloyd Garrison publicó The Liberator', fa: 'ویلیام لوید گریسن روزنامهٔ لیبریتر را چاپ کرد' },
        why: { en: 'Starting in 1831, Garrison\'s newspaper demanded an end to slavery.', es: 'Desde 1831, el periódico de Garrison exigió el fin de la esclavitud.', fa: 'از سال ۱۸۳۱، روزنامهٔ گریسن پایان برده‌داری را خواست.' } },
      { bin: 'abol', t: { en: 'Harriet Tubman led people north to freedom', es: 'Harriet Tubman guió a personas al norte, a la libertad', fa: 'هریت تبمن مردم را به شمال و به آزادی رساند' },
        why: { en: 'Tubman escaped slavery, then guided others to freedom on the Underground Railroad.', es: 'Tubman escapó de la esclavitud y luego guió a otros a la libertad por el Ferrocarril Subterráneo.', fa: 'تبمن از برده‌داری فرار کرد، بعد دیگران را از راه‌آهن زیرزمینی به آزادی رساند.' } },
      { bin: 'women', t: { en: 'Elizabeth Cady Stanton wrote the Declaration of Sentiments', es: 'Elizabeth Cady Stanton escribió la Declaración de Sentimientos', fa: 'الیزابت کیدی استنتن اعلامیهٔ احساسات را نوشت' },
        why: { en: 'It said men and women are created equal, and asked for women\'s right to vote.', es: 'Decía que hombres y mujeres son creados iguales y pedía el voto para la mujer.', fa: 'در آن آمده بود مردان و زنان برابر آفریده شده‌اند، و حق رأی زنان را خواست.' } },
      { bin: 'women', t: { en: 'About 300 people met at Seneca Falls in 1848', es: 'Unas 300 personas se reunieron en Seneca Falls en 1848', fa: 'حدود ۳۰۰ نفر در سال ۱۸۴۸ در سنکا فالز جمع شدند' },
        why: { en: 'This was the first big women\'s rights meeting in the United States.', es: 'Fue la primera gran reunión por los derechos de la mujer en Estados Unidos.', fa: 'این اولین جلسهٔ بزرگ حقوق زنان در امریکا بود.' } },
      { bin: 'women', t: { en: 'Sojourner Truth spoke at a women\'s rights meeting in Ohio', es: 'Sojourner Truth habló en una reunión por los derechos de la mujer en Ohio', fa: 'سوجرنر تروث در جلسهٔ حقوق زنان در اوهایو سخنرانی کرد' },
        why: { en: 'Truth fought slavery too. At this 1851 meeting in Ohio, she spoke for women\'s rights.', es: 'Truth también luchó contra la esclavitud. En esta reunión de 1851 en Ohio, habló por los derechos de la mujer.', fa: 'تروث علیه برده‌داری هم مبارزه کرد. در این جلسهٔ ۱۸۵۱ در اوهایو، برای حقوق زنان سخن گفت.' } },
      { bin: 'care', t: { en: 'Horace Mann worked for free public schools', es: 'Horace Mann luchó por escuelas públicas gratis', fa: 'هوریس من برای مکتب‌های دولتی رایگان کار کرد' },
        why: { en: 'Mann believed every child should go to school. Many states followed Massachusetts.', es: 'Mann creía que todo niño debía ir a la escuela. Muchos estados siguieron a Massachusetts.', fa: 'من باور داشت هر کودک باید به مکتب برود. بسیاری از ایالت‌ها از ماساچوست پیروی کردند.' } },
      { bin: 'care', t: { en: 'Dorothea Dix asked for better care for people with mental illness', es: 'Dorothea Dix pidió mejor cuidado para personas con enfermedades mentales', fa: 'دوروتیا دیکس مراقبت بهتر برای مریضان روانی خواست' },
        why: { en: 'Dix visited jails and hospitals. She asked states to build better hospitals.', es: 'Dix visitó cárceles y hospitales. Pidió a los estados construir mejores hospitales.', fa: 'دیکس زندان‌ها و شفاخانه‌ها را دید. از ایالت‌ها خواست شفاخانه‌های بهتر بسازند.' } }
    ],
    success: { en: 'The reformers\' records are right again! Many people worked to make the country fairer.', es: '¡Los registros de los reformistas están bien otra vez! Mucha gente trabajó para hacer el país más justo.', fa: 'ثبت‌های اصلاح‌گران دوباره درست شد! مردم زیادی کار کردند تا کشور عادلانه‌تر شود.' }
  },

  boss: {
    at: [11, 19],
    stat: 'loc',
    need: 3,
    name: { en: 'The Hushing Grump', es: 'El Gruñón del Silencio', fa: 'غرغروی خاموشی' },
    appear: { en: 'The Hushing Grump hides in the fog above the two rivers.', es: 'El Gruñón del Silencio se esconde en la niebla sobre los dos ríos.', fa: 'غرغروی خاموشی در مه بالای دو دریا پنهان است.' },
    taunt: { en: 'Why speak up? Words change nothing. No one will remember them.', es: '¿Para qué alzar la voz? Las palabras no cambian nada. Nadie los recordará.', fa: 'چرا صدا بلند کنی؟ سخن چیزی را تغییر نمی‌دهد. هیچ کس آن‌ها را به یاد نمی‌آورد.' },
    win: { en: 'The fog lifts over the rivers. Journal page 5.1 floats down into your hands.', es: 'La niebla se va de los ríos. La página 5.1 del diario cae en tus manos.', fa: 'مه از روی دریاها کنار می‌رود. صفحهٔ ۵.۱ روزنامچه به دستت می‌افتد.' },
    questions: [
      { q: { en: 'What was Bleeding Kansas?', es: '¿Qué fue Kansas Sangrante?', fa: 'کانزاسِ خونین چه بود؟' },
        choices: [
          { en: 'Fighting in Kansas over allowing slavery', es: 'Luchas en Kansas sobre permitir la esclavitud', fa: 'جنگ در کانزاس بر سر اجازهٔ برده‌داری' },
          { en: 'A sickness that spread across Kansas farms', es: 'Una enfermedad que se extendió por las granjas de Kansas', fa: 'مریضی‌ای که در فارم‌های کانزاس پخش شد' },
          { en: 'A women\'s rights meeting held in Kansas', es: 'Una reunión por los derechos de la mujer en Kansas', fa: 'جلسهٔ حقوق زنان که در کانزاس برگزار شد' },
          { en: 'A court case about a farmer in Kansas', es: 'Un caso de la corte sobre un granjero de Kansas', fa: 'یک دعوای محکمه دربارهٔ دهقانی در کانزاس' }],
        answer: 0,
        why: { en: 'From 1854 to 1856, people fought in Kansas over whether it would allow slavery.', es: 'De 1854 a 1856, la gente peleó en Kansas sobre si se permitiría la esclavitud.', fa: 'از ۱۸۵۴ تا ۱۸۵۶، مردم در کانزاس بر سر اجازهٔ برده‌داری جنگیدند.' } },
      { q: { en: 'Who escaped slavery and became a famous speaker and writer against it?', es: '¿Quién escapó de la esclavitud y se volvió un famoso orador y escritor en su contra?', fa: 'کی از برده‌داری فرار کرد و سخنران و نویسندهٔ مشهور علیه آن شد؟' },
        choices: [
          { en: 'Frederick Douglass', es: 'Frederick Douglass', fa: 'فردریک داگلس' },
          { en: 'Horace Mann', es: 'Horace Mann', fa: 'هوریس من' },
          { en: 'Robert E. Lee', es: 'Robert E. Lee', fa: 'رابرت ای. لی' },
          { en: 'Elizabeth Cady Stanton', es: 'Elizabeth Cady Stanton', fa: 'الیزابت کیدی استنتن' }],
        answer: 0,
        why: { en: 'Douglass escaped slavery in Maryland. He spoke and wrote to end it.', es: 'Douglass escapó de la esclavitud en Maryland. Habló y escribió para acabarla.', fa: 'داگلس از برده‌داری در مریلند فرار کرد. برای پایان آن سخن گفت و نوشت.' } },
      { q: { en: 'What did Harriet Tubman do?', es: '¿Qué hizo Harriet Tubman?', fa: 'هریت تبمن چه کرد؟' },
        choices: [
          { en: 'She led people to freedom on the Underground Railroad', es: 'Guió a personas a la libertad por el Ferrocarril Subterráneo', fa: 'مردم را از راه‌آهن زیرزمینی به آزادی رساند' },
          { en: 'She wrote the Declaration of Sentiments at Seneca Falls', es: 'Escribió la Declaración de Sentimientos en Seneca Falls', fa: 'اعلامیهٔ احساسات را در سنکا فالز نوشت' },
          { en: 'She started The Liberator newspaper in 1831', es: 'Empezó el periódico The Liberator en 1831', fa: 'روزنامهٔ لیبریتر را در سال ۱۸۳۱ شروع کرد' },
          { en: 'She built free public schools in Massachusetts', es: 'Construyó escuelas públicas gratis en Massachusetts', fa: 'مکتب‌های دولتی رایگان در ماساچوست ساخت' }],
        answer: 0,
        why: { en: 'Tubman escaped slavery. Then she went back many times to guide others to freedom.', es: 'Tubman escapó de la esclavitud. Luego volvió muchas veces para guiar a otros a la libertad.', fa: 'تبمن از برده‌داری فرار کرد. بعد بارها برگشت تا دیگران را به آزادی برساند.' } },
      { q: { en: 'What happened at Seneca Falls, New York, in 1848?', es: '¿Qué pasó en Seneca Falls, Nueva York, en 1848?', fa: 'در سال ۱۸۴۸ در سنکا فالز نیویارک چه شد؟' },
        choices: [
          { en: 'A meeting for women\'s rights', es: 'Una reunión por los derechos de la mujer', fa: 'جلسه‌ای برای حقوق زنان' },
          { en: 'A battle over slavery in Kansas', es: 'Una batalla por la esclavitud en Kansas', fa: 'جنگی بر سر برده‌داری در کانزاس' },
          { en: 'A raid on a federal armory', es: 'Un ataque a una armería federal', fa: 'حمله به یک اسلحه‌خانهٔ فدرال' },
          { en: 'A court case about Dred Scott', es: 'Un caso de la corte sobre Dred Scott', fa: 'دعوای محکمه دربارهٔ درد اسکات' }],
        answer: 0,
        why: { en: 'About 300 people met there. The Declaration of Sentiments said men and women are equal.', es: 'Unas 300 personas se reunieron allí. La Declaración de Sentimientos dijo que hombres y mujeres son iguales.', fa: 'حدود ۳۰۰ نفر آنجا جمع شدند. اعلامیهٔ احساسات گفت مردان و زنان برابرند.' } },
      { q: { en: 'Why did the novel Uncle Tom\'s Cabin (1852) matter?', es: '¿Por qué fue importante la novela La cabaña del tío Tom (1852)?', fa: 'چرا ناول کلبهٔ کاکا تام (۱۸۵۲) مهم بود؟' },
        choices: [
          { en: 'It turned many Northerners against slavery', es: 'Puso a muchos en el Norte contra la esclavitud', fa: 'بسیاری از مردم شمال را مخالف برده‌داری ساخت' },
          { en: 'It ended the Fugitive Slave Act at once', es: 'Terminó de inmediato la Ley de Esclavos Fugitivos', fa: 'قانون بردگان فراری را فوراً لغو کرد' },
          { en: 'It made Kansas a free state in 1852', es: 'Hizo de Kansas un estado libre en 1852', fa: 'کانزاس را در سال ۱۸۵۲ ایالت آزاد ساخت' },
          { en: 'It started the first public schools', es: 'Empezó las primeras escuelas públicas', fa: 'اولین مکتب‌های دولتی را شروع کرد' }],
        answer: 0,
        why: { en: 'Harriet Beecher Stowe\'s novel showed slavery\'s cruelty. Many Northern readers turned against slavery.', es: 'La novela de Harriet Beecher Stowe mostró la crueldad de la esclavitud. Muchos lectores del Norte se opusieron a ella.', fa: 'ناول هریت بیچر استو ظلم برده‌داری را نشان داد. بسیاری از خوانندگان شمال مخالف برده‌داری شدند.' } },
      { q: { en: 'What did the Supreme Court say in the Dred Scott decision (1857)?', es: '¿Qué dijo la Corte Suprema en la decisión Dred Scott (1857)?', fa: 'ستره محکمه در فیصلهٔ درد اسکات (۱۸۵۷) چه گفت؟' },
        choices: [
          { en: 'Black Americans could not be citizens', es: 'Los afroamericanos no podían ser ciudadanos', fa: 'سیاه‌پوستان امریکایی تبعه شده نمی‌توانند' },
          { en: 'Every state must end slavery at once', es: 'Cada estado debía acabar ya con la esclavitud', fa: 'هر ایالت باید فوراً برده‌داری را تمام کند' },
          { en: 'Women had the right to vote in all states', es: 'Las mujeres podían votar en todos los estados', fa: 'زنان در همهٔ ایالت‌ها حق رأی دارند' },
          { en: 'Kansas had to become a free state', es: 'Kansas tenía que ser un estado libre', fa: 'کانزاس باید ایالت آزاد شود' }],
        answer: 0,
        why: { en: 'The court said Black Americans were not citizens. Many Northerners were angry.', es: 'La corte dijo que los afroamericanos no eran ciudadanos. Muchos en el Norte se enojaron.', fa: 'محکمه گفت سیاه‌پوستان امریکایی تبعه نیستند. بسیاری از مردم شمال خشمگین شدند.' } },
      { q: { en: 'What did John Brown want to do at Harpers Ferry in 1859?', es: '¿Qué quería hacer John Brown en Harpers Ferry en 1859?', fa: 'جان براون در سال ۱۸۵۹ در هارپرز فری چه می‌خواست؟' },
        choices: [
          { en: 'Start an uprising to end slavery', es: 'Empezar un levantamiento para acabar con la esclavitud', fa: 'قیامی برای پایان برده‌داری شروع کند' },
          { en: 'Guard the armory for Virginia', es: 'Proteger la armería para Virginia', fa: 'از اسلحه‌خانه برای ورجینیا نگهبانی کند' },
          { en: 'Build a new bridge to Maryland', es: 'Construir un puente nuevo a Maryland', fa: 'یک پل نو به مریلند بسازد' },
          { en: 'Win an election for governor', es: 'Ganar una elección para gobernador', fa: 'در انتخابات والی برنده شود' }],
        answer: 0,
        why: { en: 'Brown and 21 men seized the armory. They hoped enslaved people would rise up.', es: 'Brown y 21 hombres tomaron la armería. Esperaban que los esclavizados se levantaran.', fa: 'براون و ۲۱ مرد اسلحه‌خانه را گرفتند. امید داشتند بردگان قیام کنند.' } },
      { q: { en: 'How did North and South see John Brown after the raid?', es: '¿Cómo vieron el Norte y el Sur a John Brown después del ataque?', fa: 'شمال و جنوب بعد از حمله جان براون را چطور دیدند؟' },
        choices: [
          { en: 'Some saw a martyr; others, a terrorist', es: 'Unos vieron un mártir; otros, un terrorista', fa: 'بعضی شهید دیدند؛ دیگران، تروریست' },
          { en: 'Nearly everyone agreed he was a hero', es: 'Casi todos estuvieron de acuerdo en que era un héroe', fa: 'تقریباً همه قبول داشتند که قهرمان بود' },
          { en: 'Nearly everyone agreed he was a criminal', es: 'Casi todos estuvieron de acuerdo en que era un criminal', fa: 'تقریباً همه قبول داشتند که مجرم بود' },
          { en: 'Almost nobody heard about the raid', es: 'Casi nadie supo del ataque', fa: 'تقریباً هیچ کس از حمله خبر نشد' }],
        answer: 0,
        why: { en: 'Brown was hanged on December 2, 1859. Some Northerners called him a [[martyr|martyr]]; many Southerners, a terrorist.', es: 'Brown fue ahorcado el 2 de diciembre de 1859. Algunos en el Norte lo llamaron [[martyr|mártir]]; muchos en el Sur, terrorista.', fa: 'براون در ۲ دسامبر ۱۸۵۹ اعدام شد. بعضی در شمال او را [[martyr|شهید]] گفتند؛ بسیاری در جنوب، تروریست.' } }
    ]
  },

  learned: [
    { en: '[[reform|Reformers]] worked to end slavery, win women\'s rights, and open free public schools.', es: 'Los [[reform|reformistas]] lucharon para acabar con la esclavitud, ganar derechos para la mujer y abrir escuelas públicas gratis.', fa: '[[reform|اصلاح‌گران]] برای پایان برده‌داری، حقوق زنان و مکتب‌های دولتی رایگان کار کردند.' },
    { en: 'The Fugitive Slave Act, Uncle Tom\'s Cabin, Bleeding Kansas and Dred Scott made North and South angrier.', es: 'La Ley de Esclavos Fugitivos, La cabaña del tío Tom, Kansas Sangrante y Dred Scott enojaron más al Norte y al Sur.', fa: 'قانون بردگان فراری، کلبهٔ کاکا تام، کانزاسِ خونین و درد اسکات شمال و جنوب را خشمگین‌تر ساختند.' },
    { en: 'In 1859, John Brown raided Harpers Ferry to end slavery. He was hanged on December 2, 1859.', es: 'En 1859, John Brown atacó Harpers Ferry para acabar con la esclavitud. Fue ahorcado el 2 de diciembre de 1859.', fa: 'در سال ۱۸۵۹، جان براون برای پایان برده‌داری به هارپرز فری حمله کرد. او در ۲ دسامبر ۱۸۵۹ اعدام شد.' }
  ],
  reflect: {
    q: { en: 'Reformers spoke up to make things fairer. What change would you work for today? How?', es: 'Los reformistas alzaron la voz para hacer las cosas más justas. ¿Por qué cambio lucharías hoy? ¿Cómo?', fa: 'اصلاح‌گران صدا بلند کردند تا کارها عادلانه‌تر شود. تو امروز برای کدام تغییر کار می‌کنی؟ چطور؟' },
    starter: { en: 'One change I would work for is', es: 'Un cambio por el que lucharía es', fa: 'یک تغییری که برایش کار می‌کنم' }
  }
};
