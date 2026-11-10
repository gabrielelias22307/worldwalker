/* CIVICWALKER · Episode 6.2 · Changes in Presidential Power (Succession and the Amendments on the Presidency)
   Washington, DC, today: "Presidents' Hall", a made-up visitor museum about the presidency near the White House.
   North half: the museum (D walls, f floor). West: the 1800s room (12th Amendment). Middle: the main hall (the line
   of succession, the 25th Amendment, the charter stone). East: the 1900s room (20th and 22nd Amendments). Doorways
   join the rooms on row 5; three doors open south onto the paved walk.
   South half: the museum garden (a small fountain in the west, the open east lawn where the Grump hides), then a row
   of small shops (gift shop, cafe, bookshop) on the street, with a bus stop.
   The charter stone asks the student to walk the line of succession in order: Vice President, Speaker of the House,
   President pro tempore, Secretary of State. No living presidents appear or are named. */
window.EPISODE = {
  id: '6.2',
  realm: 6,
  sol: 'GOVT',
  title: { en: 'Changes in Presidential Power', es: 'Cambios en el poder presidencial', fa: 'تغییرها در قدرت رئیس جمهور' },
  weather: { sky: 'clear', time: 'day' },
  place: { en: 'Washington, DC, today', es: 'Washington, D. C., hoy', fa: 'واشنگتن دی‌سی، امروز' },
  intro: [
    { en: 'The Grump tore the page on who takes over. Now nobody knows the line!',
      es: 'El Gruñón rompió la página sobre quién toma el mando. ¡Ahora nadie conoce el orden!',
      fa: 'غرغرو صفحهٔ «کی جای رئیس جمهور را می‌گیرد» را پاره کرد. حالا هیچ کس ترتیب را نمی‌داند!' },
    { en: 'Talk to the 3 people here, then fix the charter stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra de la carta.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ منشور را درست کن.' }
  ],
  /* cut scenes (fun-pass-4): Washington, DC on the world map (no timeline in this game) */
  scenes: {
    at: [-77.04, 38.90],
    start: [
      { en: 'Washington, DC, is the capital of the United States.',
        es: 'Washington, D. C., es la capital de Estados Unidos.',
        fa: 'واشنگتن دی‌سی پایتخت ایالات متحدهٔ امریکا است.' },
      { en: 'The President lives and works in the White House.',
        es: 'El presidente vive y trabaja en la Casa Blanca.',
        fa: 'رئیس جمهور در کاخ سفید زندگی و کار می‌کند.' },
      { en: 'In our story, a museum near it shows how the job changed.',
        es: 'En nuestra historia, un museo cercano muestra cómo cambió el puesto.',
        fa: 'در قصهٔ ما، یک موزیم نزدیک آن نشان می‌دهد این کار چطور تغییر کرد.' }
    ],
    page: { en: 'Eight Presidents died in office. Each time, the Vice President took over.',
      es: 'Ocho presidentes murieron en el cargo. Cada vez, el vicepresidente tomó el mando.',
      fa: 'هشت رئیس جمهور در زمان کار خود مردند. هر بار، معاون رئیس جمهور جای او را گرفت.' },
    guess: {
      q: { en: 'If a President dies, who becomes President?', es: 'Si un presidente muere, ¿quién se vuelve presidente?', fa: 'اگر رئیس جمهور بمیرد، کی رئیس جمهور می‌شود؟' },
      choices: [
        { t: { en: '🥈 The Vice President', es: '🥈 El vicepresidente', fa: '🥈 معاون رئیس جمهور' }, ok: true },
        { t: { en: '🗳️ A new election', es: '🗳️ Una nueva elección', fa: '🗳️ یک انتخابات نو' } }
      ],
      why: { en: 'The Vice President takes the oath and becomes President right away. No new election.', es: 'El vicepresidente hace el juramento y se vuelve presidente enseguida. No hay nueva elección.', fa: 'معاون رئیس جمهور فوراً سوگند یاد می‌کند و رئیس جمهور می‌شود. انتخابات نو نمی‌شود.' }
    },
    next: {
      q: { en: 'Next: the Oval Office. What can a President do without Congress?', es: 'Ahora: la Oficina Oval. ¿Qué puede hacer un presidente sin el Congreso?', fa: 'بعدی: دفتر بیضی. رئیس جمهور بدون کانگرس چه کرده می‌تواند؟' },
      choices: [
        { t: { en: '📝 Sign an executive order', es: '📝 Firmar una orden ejecutiva', fa: '📝 یک فرمان اجرایی امضا کند' }, ok: true },
        { t: { en: '💵 Pass a new tax law', es: '💵 Aprobar una ley de impuestos', fa: '💵 یک قانون مالیات نو تصویب کند' } }
      ],
      why: { en: 'An executive order tells government workers how to carry out laws. Only Congress passes tax laws.', es: 'Una orden ejecutiva les dice a los trabajadores del gobierno cómo cumplir las leyes. Solo el Congreso aprueba impuestos.', fa: 'فرمان اجرایی به کارمندان حکومت می‌گوید قانون‌ها را چطور اجرا کنند. فقط کانگرس قانون مالیات تصویب می‌کند.' }
    }
  },
  /* houses (fun-pass-4): who works behind each shop door on the street; walk in and talk */
  houses: [
    { at: [4, 17], name: { en: 'Mrs. Patel', es: 'Sra. Patel', fa: 'خانم پاتل' },
      look: { skin: 3, hair: '#1a1008', shirt: '#b03a5a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'In the first elections, each elector cast two votes for President.', es: 'En las primeras elecciones, cada [[elector|elector]] daba dos votos para presidente.', fa: 'در انتخابات اول، هر [[elector|انتخاب‌کننده]] دو رأی برای رئیس جمهور می‌داد.' },
        { en: 'First place became President. Second place became Vice President.', es: 'El primer lugar era presidente. El segundo lugar era vicepresidente.', fa: 'نفر اول رئیس جمهور می‌شد. نفر دوم معاون رئیس جمهور می‌شد.' },
        { en: 'The [[amendment|12th Amendment]] of 1804 changed that: a separate vote for each job.', es: 'La [[amendment|Enmienda 12]], de 1804, cambió eso: un voto aparte para cada puesto.', fa: '[[amendment|متمم دوازدهم]] در سال ۱۸۰۴ این را تغییر داد: یک رأی جدا برای هر کار.' }
      ] },
    { at: [12, 17], name: { en: 'Mr. Nguyen', es: 'Sr. Nguyen', fa: 'آقای نگوین' },
      look: { skin: 2, hair: '#1a1a1a', shirt: '#3a6a5a', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'Eight Presidents died in office. Four of them were killed.', es: 'Ocho presidentes murieron en el cargo. A cuatro de ellos los mataron.', fa: 'هشت رئیس جمهور در زمان کار خود مردند. چهار نفر آن‌ها کشته شدند.' },
        { en: 'In 1974, President Richard Nixon [[resign|resigned]]. Gerald Ford took the oath.', es: 'En 1974, el presidente Richard Nixon [[resign|renunció]]. Gerald Ford hizo el juramento.', fa: 'در سال ۱۹۷۴، رئیس جمهور ریچارد نیکسون [[resign|استعفا داد]]. جرالد فورد سوگند یاد کرد.' },
        { en: 'Ford was never elected President or Vice President.', es: 'Ford nunca fue elegido presidente ni vicepresidente.', fa: 'فورد هیچ وقت به عنوان رئیس جمهور یا معاون رئیس جمهور انتخاب نشد.' }
      ] },
    { at: [22, 17], name: { en: 'Ms. Haddad', es: 'Sra. Haddad', fa: 'خانم حداد' },
      look: { skin: 1, hair: '#3a2416', shirt: '#5a4a8a', pants: '#2a2a2a', style: 'long' },
      lines: [
        { en: 'This book is about the [[amendment|20th Amendment]], from 1933.', es: 'Este libro trata de la [[amendment|Enmienda 20]], de 1933.', fa: 'این کتاب دربارهٔ [[amendment|متمم بیستم]] است، از سال ۱۹۳۳.' },
        { en: 'A President\'s [[term|term]] now starts January 20. Congress starts January 3.', es: 'El [[term|mandato]] del presidente ahora empieza el 20 de enero. El Congreso empieza el 3 de enero.', fa: '[[term|دورهٔ کار]] رئیس جمهور حالا ۲۰ جنوری شروع می‌شود. کانگرس ۳ جنوری شروع می‌شود.' },
        { en: 'That made the [[lame duck|lame duck]] time much shorter.', es: 'Eso hizo mucho más corto el tiempo de [[lame duck|pato cojo]].', fa: 'این کار زمان [[lame duck|رهبر رفتنی]] را خیلی کوتاه‌تر ساخت.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     North (y 1-9): the museum, D walls and f floor. West room x 2-9 (the 1800s), main hall x 11-18, east room
     x 20-29 (the 1900s). Doorways between the rooms on row 5; doors to the walk at x 5-6, 14-15 and 26-27 on row 9.
     Signs (x) on the north wall of each room.
     Row 10: the paved walk (l) in front, with the museum sign.
     South (y 11-15): the garden, a small fountain (O) in the west, the dirt path (:) down the middle, the east lawn.
     y 16-17: three shops (roof over wall with a door). y 18-19: the street (l) with a bus stop sign. */
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT',
    'TDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDT',
    'TDfxffffffDfxffffxfDffxffxffffDT',
    'TDffffffffDffffffffDffffffffffDT',
    'TDffffffffDffffffffDffffffffffDT',
    'TDffffffffffffffffffffffffffffDT',
    'TDffffffffDffffffffDffffffffffDT',
    'TDffffffffDffffffffDffffffffffDT',
    'TDffffffffDffffffffDffffffffffDT',
    'TDDDDffDDDDDDDffDDDDDDDDDDffDDDT',
    'TllllllllllxlllllllllllllllllllT',
    'T.T..,,..T....::....T....,,..T.T',
    'T.,,....O.....::.............,.T',
    'T.,,..........::..T...........,T',
    'T....T...,....::......,........T',
    'T.T.......T...::..........T....T',
    'T..RRR.....QQQ::.....RRR.......T',
    'T..hdh.....hdh::.....hdh.......T',
    'TlllllllllllllllllllllllxllllllT',
    'TllllllllllllllllllllllllllllllT',
    'T.T....T.......T.......T....T..T',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT'
  ],
  start: [14, 12],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [28, 8], at: [28, 5], decor: 'feather',
      clue: { en: 'From this note, walk 3 steps north, inside the 1900s room.', es: 'Desde esta nota, camina 3 pasos al norte, dentro de la sala de los 1900.', fa: 'از این یادداشت، ۳ قدم به شمال برو، داخل اتاق سال‌های ۱۹۰۰.' },
      text: { en: 'A feather pen, like the pens early Presidents used to sign laws!', es: '¡Una pluma de ave, como las que usaban los primeros presidentes para firmar leyes!', fa: 'یک قلم پَر، مثل قلم‌هایی که رئیس جمهورهای اول با آن قانون امضا می‌کردند!' } },
    { clueAt: [17, 11], at: [17, 15], decor: 'coinold',
      clue: { en: 'From this note, walk 4 steps south through the garden.', es: 'Desde esta nota, camina 4 pasos al sur por el jardín.', fa: 'از این یادداشت، ۴ قدم به جنوب از میان باغ برو.' },
      text: { en: 'An old coin! Many US coins show the faces of past Presidents.', es: '¡Una moneda antigua! Muchas monedas de EE. UU. muestran la cara de presidentes del pasado.', fa: 'یک سکهٔ قدیمی! بسیاری از سکه‌های امریکا روی رئیس جمهورهای گذشته را نشان می‌دهند.' } }
  ],

  words: {
    succession: { en: 'the order of who takes over a job', es: 'el orden de quién toma un puesto', fa: 'ترتیب کسانی که جای یک نفر را می‌گیرند' },
    'vice president': { en: 'the person second in power, who works beside the President', es: 'la persona segunda en poder, que trabaja junto al presidente', fa: 'شخص دوم در قدرت، که کنار رئیس جمهور کار می‌کند' },
    speaker: { en: 'the leader of the House of Representatives, chosen by its members', es: 'el líder de la Cámara de Representantes, elegido por sus miembros', fa: 'رهبر مجلس نمایندگان، که اعضای آن انتخابش می‌کنند' },
    'pro tempore': { en: 'the senator who leads the Senate when the Vice President is away', es: 'el senador que dirige el Senado cuando el vicepresidente no está', fa: 'سناتوری که وقتی معاون رئیس جمهور نیست، سنا را رهبری می‌کند' },
    cabinet: { en: 'the heads of the big departments, who advise the President', es: 'los jefes de los grandes departamentos, que aconsejan al presidente', fa: 'رئیسان وزارت‌های بزرگ، که به رئیس جمهور مشوره می‌دهند' },
    amendment: { en: 'a change added to the Constitution', es: 'un cambio que se agrega a la Constitución', fa: 'تغییری که به قانون اساسی اضافه می‌شود' },
    oath: { en: 'a serious promise said out loud', es: 'una promesa seria dicha en voz alta', fa: 'یک وعدهٔ جدی که بلند گفته می‌شود' },
    term: { en: 'the set time a leader serves in office', es: 'el tiempo fijo que un líder sirve en su cargo', fa: 'زمان معین که یک رهبر سر کار می‌ماند' },
    'lame duck': { en: 'a leader still in office after someone else won the job', es: 'un líder que sigue en el cargo después de que otro ganó el puesto', fa: 'رهبری که هنوز سر کار است، بعد از آن که کس دیگری کار را برده' },
    resign: { en: 'to leave a job by choice', es: 'dejar un trabajo por decisión propia', fa: 'به خواست خود کار را ترک کردن' },
    elector: { en: 'a person who casts a state\'s vote for President', es: 'una persona que da el voto de un estado para presidente', fa: 'شخصی که رأی یک ایالت را برای رئیس جمهور می‌دهد' }
  },

  npcs: [
    {
      x: 13, y: 7,
      name: { en: 'Ms. Reyes', es: 'Sra. Reyes', fa: 'خانم ریس' },
      role: { en: 'Museum guide', es: 'Guía del museo', fa: 'رهنمای موزیم' },
      look: { skin: 2, hair: '#2a1a10', shirt: '#2f4f8a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'Welcome to Presidents\' Hall! Each room shows a different time.', es: '¡Bienvenido a la Sala de los Presidentes! Cada sala muestra otra época.', fa: 'به تالار رئیس جمهورها خوش آمدی! هر اتاق یک زمان دیگر را نشان می‌دهد.' },
        { en: 'Over time, the President\'s power grew: in wars, in the New Deal, on TV.', es: 'Con el tiempo, el poder del presidente creció: en las guerras, en el Nuevo Trato, en la tele.', fa: 'با گذشت زمان، قدرت رئیس جمهور زیاد شد: در جنگ‌ها، در «معاملهٔ نو»، در تلویزیون.' },
        { en: 'If a President dies or [[resign|resigns]], the [[vice president|Vice President]] takes over.', es: 'Si un presidente muere o [[resign|renuncia]], el [[vice president|vicepresidente]] toma el mando.', fa: 'اگر رئیس جمهور بمیرد یا [[resign|استعفا بدهد]]، [[vice president|معاون رئیس جمهور]] جای او را می‌گیرد.' },
        { en: 'The Vice President is first in the [[succession|line of succession]].', es: 'El vicepresidente es el primero en la [[succession|línea de sucesión]].', fa: 'معاون رئیس جمهور اولین نفر در [[succession|ترتیب جانشینی]] است.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Over the years, how did the President\'s power change?', es: 'Con los años, ¿cómo cambió el poder del presidente?', fa: 'در طول سال‌ها، قدرت رئیس جمهور چطور تغییر کرد؟' },
        choices: [
          { ok: true, t: { en: 'It grew, with wars, the New Deal and media', es: 'Creció, con guerras, el Nuevo Trato y los medios', fa: 'زیاد شد، با جنگ‌ها، معاملهٔ نو و رسانه‌ها' },
            why: { en: 'Yes. Wars, the New Deal and radio and TV made the President more powerful.', es: 'Sí. Las guerras, el Nuevo Trato, la radio y la tele hicieron más poderoso al presidente.', fa: 'بله. جنگ‌ها، معاملهٔ نو، رادیو و تلویزیون رئیس جمهور را قوی‌تر ساختند.' } },
          { t: { en: 'It shrank, because Congress took all of it', es: 'Se achicó, porque el Congreso lo tomó todo', fa: 'کم شد، چون کانگرس همه‌اش را گرفت' },
            why: { en: 'No. Congress still shares power, but the President\'s power grew over time.', es: 'No. El Congreso todavía comparte el poder, pero el poder del presidente creció.', fa: 'نه. کانگرس هنوز در قدرت شریک است، اما قدرت رئیس جمهور با زمان زیاد شد.' } },
          { t: { en: 'It stayed exactly the same since 1789', es: 'Se quedó exactamente igual desde 1789', fa: 'از ۱۷۸۹ تا حالا دقیقاً همان‌طور ماند' },
            why: { en: 'No. Wars, the New Deal and the media all made the job bigger.', es: 'No. Las guerras, el Nuevo Trato y los medios hicieron más grande el puesto.', fa: 'نه. جنگ‌ها، معاملهٔ نو و رسانه‌ها این کار را بزرگ‌تر ساختند.' } }
        ]
      }
    },
    {
      x: 23, y: 7,
      name: { en: 'Dr. Okafor', es: 'Dr. Okafor', fa: 'داکتر اوکافور' },
      role: { en: 'Historian', es: 'Historiador', fa: 'تاریخ‌دان' },
      look: { skin: 5, hair: '#1a1008', shirt: '#7a5a2a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'Franklin D. Roosevelt won four elections for President, in a row.', es: 'Franklin D. Roosevelt ganó cuatro elecciones para presidente, una tras otra.', fa: 'فرانکلین روزولت چهار انتخابات ریاست جمهوری را پشت سر هم برد.' },
        { en: 'In 1951, the [[amendment|22nd Amendment]] said: a President can be elected only twice.', es: 'En 1951, la [[amendment|Enmienda 22]] dijo: un presidente solo puede ser elegido dos veces.', fa: 'در سال ۱۹۵۱، [[amendment|متمم بیست و دوم]] گفت: رئیس جمهور فقط دو بار انتخاب شده می‌تواند.' },
        { en: 'In the line, after the Vice President comes the [[speaker|Speaker of the House]].', es: 'En la línea, después del vicepresidente viene el [[speaker|presidente de la Cámara]].', fa: 'در ترتیب، بعد از معاون رئیس جمهور، [[speaker|رئیس مجلس نمایندگان]] می‌آید.' },
        { en: 'Then the [[pro tempore|President pro tempore]] of the Senate, then the Secretary of State.', es: 'Luego el [[pro tempore|presidente pro tempore]] del Senado, y luego el secretario de Estado.', fa: 'بعد [[pro tempore|رئیس موقت سنا]]، و بعد وزیر خارجه.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Why did the 22nd Amendment come after Franklin D. Roosevelt?', es: '¿Por qué llegó la Enmienda 22 después de Franklin D. Roosevelt?', fa: 'چرا متمم بیست و دوم بعد از فرانکلین روزولت آمد؟' },
        choices: [
          { ok: true, t: { en: 'He won four elections in a row', es: 'Ganó cuatro elecciones seguidas', fa: 'او چهار انتخابات را پشت سر هم برد' },
            why: { en: 'Right! After four wins, the country set a limit: only two elections.', es: '¡Correcto! Después de cuatro triunfos, el país puso un límite: solo dos elecciones.', fa: 'درست! بعد از چهار برد، کشور یک حد گذاشت: فقط دو انتخابات.' } },
          { t: { en: 'He was never elected at all', es: 'Nunca fue elegido', fa: 'او هیچ وقت انتخاب نشد' },
            why: { en: 'No. Roosevelt was elected four times. That is why the limit came.', es: 'No. Roosevelt fue elegido cuatro veces. Por eso llegó el límite.', fa: 'نه. روزولت چهار بار انتخاب شد. به همین دلیل حد گذاشته شد.' } },
          { t: { en: 'He lost his first four elections', es: 'Perdió sus primeras cuatro elecciones', fa: 'او چهار انتخابات اولش را باخت' },
            why: { en: 'No. He won all four. The amendment stops anyone from winning more than two.', es: 'No. Las ganó las cuatro. La enmienda impide ganar más de dos.', fa: 'نه. هر چهار را برد. این متمم نمی‌گذارد کسی بیشتر از دو بار ببرد.' } }
        ]
      }
    },
    {
      x: 11, y: 13,
      name: { en: 'Farid', es: 'Farid', fa: 'فرید' },
      role: { en: 'Student', es: 'Estudiante', fa: 'شاگرد' },
      look: { skin: 3, hair: '#1a1208', shirt: '#d9542b', pants: '#2a4a3a', style: 'short' },
      lines: [
        { en: 'I am writing a school report on the [[amendment|25th Amendment]], from 1967.', es: 'Escribo un informe escolar sobre la [[amendment|Enmienda 25]], de 1967.', fa: 'من یک گزارش مکتب دربارهٔ [[amendment|متمم بیست و پنجم]] می‌نویسم، از سال ۱۹۶۷.' },
        { en: 'If the Vice President job is empty, the President picks a new one.', es: 'Si el puesto de vicepresidente está vacío, el presidente escoge a uno nuevo.', fa: 'اگر جای معاون رئیس جمهور خالی باشد، رئیس جمهور یک نفر نو را می‌گزیند.' },
        { en: 'Then both houses of Congress must vote yes.', es: 'Luego las dos cámaras del Congreso deben votar que sí.', fa: 'بعد هر دو مجلس کانگرس باید رأی «بله» بدهند.' },
        { en: 'That is how Gerald Ford became Vice President, and then President!', es: '¡Así llegó Gerald Ford a vicepresidente, y luego a presidente!', fa: 'جرالد فورد همین‌طور معاون رئیس جمهور شد، و بعد رئیس جمهور!' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Under the 25th Amendment, how is a new Vice President chosen?', es: 'Según la Enmienda 25, ¿cómo se escoge a un nuevo vicepresidente?', fa: 'طبق متمم بیست و پنجم، معاون نو رئیس جمهور چطور انتخاب می‌شود؟' },
        choices: [
          { ok: true, t: { en: 'The President picks; both houses confirm', es: 'El presidente escoge; las dos cámaras confirman', fa: 'رئیس جمهور می‌گزیند؛ هر دو مجلس تأیید می‌کنند' },
            why: { en: 'Yes! The President picks, and both the House and the Senate must vote yes.', es: '¡Sí! El presidente escoge, y la Cámara y el Senado deben votar que sí.', fa: 'بله! رئیس جمهور می‌گزیند، و مجلس نمایندگان و سنا باید رأی «بله» بدهند.' } },
          { t: { en: 'The voters hold a special election', es: 'Los votantes hacen una elección especial', fa: 'رأی‌دهندگان یک انتخابات خاص می‌کنند' },
            why: { en: 'No. There is no new election. The President picks, and Congress confirms.', es: 'No. No hay nueva elección. El presidente escoge y el Congreso confirma.', fa: 'نه. انتخابات نو نمی‌شود. رئیس جمهور می‌گزیند و کانگرس تأیید می‌کند.' } },
          { t: { en: 'The Speaker of the House takes the empty job', es: 'El presidente de la Cámara toma el puesto vacío', fa: 'رئیس مجلس نمایندگان جای خالی را می‌گیرد' },
            why: { en: 'No. The Speaker stays Speaker. The President picks a new Vice President.', es: 'No. El presidente de la Cámara sigue en su puesto. El presidente escoge un nuevo vicepresidente.', fa: 'نه. رئیس مجلس سر کار خود می‌ماند. رئیس جمهور معاون نو را می‌گزیند.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 11, y: 10, text: { en: 'PRESIDENTS\' HALL · A museum of the presidency. Rooms: the 1800s, the main hall, the 1900s.', es: 'SALA DE LOS PRESIDENTES · Un museo de la presidencia. Salas: los 1800, la sala principal, los 1900.', fa: 'تالار رئیس جمهورها · موزیم ریاست جمهوری. اتاق‌ها: سال‌های ۱۸۰۰، تالار اصلی، سال‌های ۱۹۰۰.' } },
    { x: 3, y: 2, text: { en: '12th AMENDMENT (1804) · Electors cast separate votes for President and for Vice President.', es: 'ENMIENDA 12 (1804) · Los electores votan aparte para presidente y para vicepresidente.', fa: 'متمم دوازدهم (۱۸۰۴) · انتخاب‌کنندگان برای رئیس جمهور و معاون او جدا رأی می‌دهند.' } },
    { x: 12, y: 2, text: { en: 'SUCCESSION ACT OF 1947 · This law sets who takes over if there is no President.', es: 'LEY DE SUCESIÓN DE 1947 · Esta ley dice quién toma el mando si no hay presidente.', fa: 'قانون جانشینی ۱۹۴۷ · این قانون می‌گوید اگر رئیس جمهور نباشد، کی جای او را می‌گیرد.' } },
    { x: 17, y: 2, text: { en: '25th AMENDMENT (1967) · If the President dies, resigns or is removed, the Vice President becomes President.', es: 'ENMIENDA 25 (1967) · Si el presidente muere, renuncia o es destituido, el vicepresidente se vuelve presidente.', fa: 'متمم بیست و پنجم (۱۹۶۷) · اگر رئیس جمهور بمیرد، استعفا بدهد یا برکنار شود، معاونش رئیس جمهور می‌شود.' } },
    { x: 22, y: 2, text: { en: '20th AMENDMENT (1933) · The President\'s term starts January 20. Congress starts January 3.', es: 'ENMIENDA 20 (1933) · El mandato del presidente empieza el 20 de enero. El Congreso, el 3 de enero.', fa: 'متمم بیستم (۱۹۳۳) · دورهٔ رئیس جمهور ۲۰ جنوری شروع می‌شود. کانگرس ۳ جنوری.' } },
    { x: 25, y: 2, text: { en: '22nd AMENDMENT (1951) · A President can be elected only two times.', es: 'ENMIENDA 22 (1951) · Un presidente solo puede ser elegido dos veces.', fa: 'متمم بیست و دوم (۱۹۵۱) · رئیس جمهور فقط دو بار انتخاب شده می‌تواند.' } },
    { x: 24, y: 18, text: { en: 'BUS STOP · The White House is a short walk from here.', es: 'PARADA DE BUS · La Casa Blanca está a poca distancia a pie.', fa: 'ایستگاه بس · کاخ سفید از اینجا با پای پیاده نزدیک است.' } }
  ],

  /* the quest: Ms. Baker the teacher (gold !) on the street, south-east -> Mr. Ortiz the guard in the 1800s room,
     north-west -> find the oath card in the garden, south-west, just south of the small fountain -> back to Ms. Baker */
  quest: {
    stat: 'pla',
    title: { en: 'The Lost Oath Card', es: 'La tarjeta del juramento perdida', fa: 'کارت گمشدهٔ سوگند' },
    giver: {
      x: 28, y: 19,
      name: { en: 'Ms. Baker', es: 'Sra. Baker', fa: 'خانم بیکر' },
      role: { en: 'Teacher', es: 'Maestra', fa: 'معلم' },
      look: { skin: 0, hair: '#8a5a2b', shirt: '#3a7a4a', pants: '#2a2a3a', style: 'long' },
      lines: [
        { en: 'My class will read the President\'s [[oath|oath]] out loud in the museum.', es: 'Mi clase va a leer en voz alta el [[oath|juramento]] del presidente en el museo.', fa: 'صنف من [[oath|سوگند]] رئیس جمهور را در موزیم بلند می‌خواند.' },
        { en: 'But my oath card is gone! Ask Mr. Ortiz, the guard in the west room.', es: '¡Pero mi tarjeta del juramento desapareció! Pregúntale a Ortiz, el guardia de la sala oeste.', fa: 'اما کارت سوگندم گم شده! از آقای اورتیز، نگهبان اتاق غربی، بپرس.' }
      ],
      wait: { en: 'Mr. Ortiz guards the 1800s room, on the west side of the museum.', es: 'El Sr. Ortiz cuida la sala de los 1800, en el lado oeste del museo.', fa: 'آقای اورتیز نگهبان اتاق سال‌های ۱۸۰۰ است، در طرف غرب موزیم.' },
      thanks: { en: 'My oath card! Now my class can read the oath together. Thank you!', es: '¡Mi tarjeta! Ahora mi clase puede leer el juramento junta. ¡Gracias!', fa: 'کارت سوگندم! حالا صنفم می‌تواند سوگند را با هم بخواند. تشکر!' }
    },
    contact: {
      x: 6, y: 3,
      name: { en: 'Mr. Ortiz', es: 'Sr. Ortiz', fa: 'آقای اورتیز' },
      role: { en: 'Museum guard', es: 'Guardia del museo', fa: 'نگهبان موزیم' },
      look: { skin: 4, hair: '#1a1a1a', shirt: '#2a2a4a', pants: '#1a1a2a', hat: '#2a2a4a', style: 'short' },
      lines: [
        { en: 'Every new President takes the [[oath|oath]]. Only the right person may take it.', es: 'Cada nuevo presidente hace el [[oath|juramento]]. Solo la persona correcta puede hacerlo.', fa: 'هر رئیس جمهور نو [[oath|سوگند]] یاد می‌کند. فقط شخص درست می‌تواند آن را یاد کند.' },
        { en: 'A boy took the card outside. Look just south of the small garden fountain.', es: 'Un niño sacó la tarjeta. Busca justo al sur de la fuente pequeña del jardín.', fa: 'یک پسر کارت را بیرون برد. درست جنوب فوارهٔ کوچک باغ را ببین.' }
      ]
    },
    action: {
      type: 'find',
      at: [8, 13],
      hint: { en: 'Look just south of the small fountain in the garden', es: 'Busca justo al sur de la fuente pequeña del jardín', fa: 'درست جنوب فوارهٔ کوچک باغ را ببین' },
      found: { en: 'The oath card! It says: "preserve, protect and defend the Constitution of the United States."', es: '¡La tarjeta! Dice: "preservar, proteger y defender la Constitución de los Estados Unidos".', fa: 'کارت سوگند! رویش نوشته: «قانون اساسی ایالات متحده را نگه دارم، محافظت کنم و از آن دفاع کنم».' },
      item: { icon: '📜', name: { en: 'The oath card', es: 'La tarjeta del juramento', fa: 'کارت سوگند' } }
    }
  },

  scraps: [[2, 8], [29, 3], [30, 20]],
  smudges: [[7, 19], [22, 4]],

  challenge: {
    at: [15, 6],
    type: 'route', // in the world; the card version (order) is the fallback
    // four name plates, in the order of succession: Vice President (main hall) -> Speaker of the House (1800s room,
    // west) -> President pro tempore (1900s room, east) -> Secretary of State (the garden, south-west)
    spots: [[17, 4], [4, 7], [27, 7], [6, 15]],
    stat: 'pla',
    title: { en: 'Walk the line of succession', es: 'Recorre la línea de sucesión', fa: 'ترتیب جانشینی را طی کن' },
    intro: { en: 'Pretend the President cannot serve. Walk to each name plate in the line of succession, in order.',
      es: 'Imagina que el presidente no puede servir. Camina a cada placa en el orden de la línea de sucesión.',
      fa: 'فرض کن رئیس جمهور نمی‌تواند کار کند. به ترتیب جانشینی، پیش هر لوحهٔ نام برو.' },
    items: [
      { icon: '🥈', t: { en: 'Vice President · works beside the President', es: 'Vicepresidente · trabaja junto al presidente', fa: 'معاون رئیس جمهور · کنار رئیس جمهور کار می‌کند' } },
      { icon: '🔨', t: { en: 'Speaker of the House · leads the House', es: 'Presidente de la Cámara · dirige la Cámara', fa: 'رئیس مجلس نمایندگان · مجلس را رهبری می‌کند' } },
      { icon: '🏛️', t: { en: 'President pro tempore · leads the Senate when the VP is away', es: 'Presidente pro tempore · dirige el Senado cuando el vicepresidente no está', fa: 'رئیس موقت سنا · وقتی معاون نیست، سنا را رهبری می‌کند' } },
      { icon: '🌐', t: { en: 'Secretary of State · leads the State Department', es: 'Secretario de Estado · dirige el Departamento de Estado', fa: 'وزیر خارجه · وزارت خارجه را رهبری می‌کند' } }
    ],
    why: { en: 'The wrong person cannot take the oath. Order: Vice President, Speaker, President pro tempore, Secretary of State.',
      es: 'La persona equivocada no puede hacer el juramento. Orden: vicepresidente, presidente de la Cámara, pro tempore, secretario de Estado.',
      fa: 'شخص اشتباه نمی‌تواند سوگند یاد کند. ترتیب: معاون رئیس جمهور، رئیس مجلس، رئیس موقت سنا، وزیر خارجه.' },
    success: { en: 'The line is in order again! The right person can always take the oath.', es: '¡La línea está en orden otra vez! La persona correcta siempre puede hacer el juramento.', fa: 'ترتیب دوباره درست شد! شخص درست همیشه می‌تواند سوگند یاد کند.' }
  },

  boss: {
    at: [26, 13],
    stat: 'pla',
    need: 3,
    name: { en: 'The Forever Grump', es: 'El Gruñón Eterno', fa: 'غرغروی همیشگی' },
    appear: { en: 'The Forever Grump is hiding in the fog on the east lawn of the garden!', es: '¡El Gruñón Eterno se esconde en la niebla del césped este del jardín!', fa: 'غرغروی همیشگی در مه چمن شرقی باغ پنهان است!' },
    taunt: { en: 'Two terms? Bah! I want to be President forever, and pick who comes next!', es: '¿Dos mandatos? ¡Bah! ¡Quiero ser presidente para siempre y escoger quién sigue!', fa: 'دو دوره؟ بَه! می‌خواهم برای همیشه رئیس جمهور باشم و خودم بعدی را بگزینم!' },
    win: { en: 'The fog lifts off the garden. Charter page 6.2 floats down into your hands!', es: 'La niebla se va del jardín. ¡La página 6.2 de la carta cae en tus manos!', fa: 'مه از روی باغ کنار می‌رود. صفحهٔ ۶.۲ منشور به دستت می‌افتد!' },
    questions: [
      { q: { en: 'If the President dies in office, who becomes President?', es: 'Si el presidente muere en el cargo, ¿quién se vuelve presidente?', fa: 'اگر رئیس جمهور در زمان کار بمیرد، کی رئیس جمهور می‌شود؟' },
        choices: [
          { en: 'The Vice President', es: 'El vicepresidente', fa: 'معاون رئیس جمهور' },
          { en: 'The Speaker of the House', es: 'El presidente de la Cámara', fa: 'رئیس مجلس نمایندگان' },
          { en: 'The Chief Justice', es: 'El presidente de la Corte Suprema', fa: 'رئیس دیوان عالی' },
          { en: 'The Secretary of State', es: 'El secretario de Estado', fa: 'وزیر خارجه' }],
        answer: 0,
        why: { en: 'The Vice President is first in line. The 25th Amendment says the VP becomes President.', es: 'El vicepresidente es el primero en la línea. La Enmienda 25 dice que se vuelve presidente.', fa: 'معاون رئیس جمهور اول در ترتیب است. متمم بیست و پنجم می‌گوید او رئیس جمهور می‌شود.' } },
      { q: { en: 'Who is next in line after the Vice President?', es: '¿Quién sigue en la línea después del vicepresidente?', fa: 'بعد از معاون رئیس جمهور، کی در ترتیب است؟' },
        choices: [
          { en: 'The Speaker of the House', es: 'El presidente de la Cámara', fa: 'رئیس مجلس نمایندگان' },
          { en: 'The President pro tempore', es: 'El presidente pro tempore', fa: 'رئیس موقت سنا' },
          { en: 'The Secretary of State', es: 'El secretario de Estado', fa: 'وزیر خارجه' },
          { en: 'The Secretary of Defense', es: 'El secretario de Defensa', fa: 'وزیر دفاع' }],
        answer: 0,
        why: { en: 'The 1947 law puts the Speaker of the House next, then the President pro tempore.', es: 'La ley de 1947 pone después al presidente de la Cámara, y luego al pro tempore.', fa: 'قانون ۱۹۴۷ بعد از او رئیس مجلس نمایندگان را می‌گذارد، بعد رئیس موقت سنا را.' } },
      { q: { en: 'Who comes right after the President pro tempore in the line?', es: '¿Quién viene justo después del presidente pro tempore en la línea?', fa: 'در ترتیب، درست بعد از رئیس موقت سنا کی می‌آید؟' },
        choices: [
          { en: 'The Secretary of State', es: 'El secretario de Estado', fa: 'وزیر خارجه' },
          { en: 'The Speaker of the House', es: 'El presidente de la Cámara', fa: 'رئیس مجلس نمایندگان' },
          { en: 'The Vice President', es: 'El vicepresidente', fa: 'معاون رئیس جمهور' },
          { en: 'The Chief Justice', es: 'El presidente de la Corte Suprema', fa: 'رئیس دیوان عالی' }],
        answer: 0,
        why: { en: 'Next is the Secretary of State. Then the other Cabinet heads follow, in order.', es: 'Sigue el secretario de Estado. Luego vienen los otros jefes del gabinete, en orden.', fa: 'بعد وزیر خارجه است. بعد دیگر اعضای کابینه به ترتیب می‌آیند.' } },
      { q: { en: 'What does the 22nd Amendment say?', es: '¿Qué dice la Enmienda 22?', fa: 'متمم بیست و دوم چه می‌گوید؟' },
        choices: [
          { en: 'A President can be elected only twice', es: 'Un presidente solo puede ser elegido dos veces', fa: 'رئیس جمهور فقط دو بار انتخاب شده می‌تواند' },
          { en: 'A President serves one six-year term', es: 'Un presidente sirve un mandato de seis años', fa: 'رئیس جمهور یک دورهٔ شش ساله کار می‌کند' },
          { en: 'A President can be elected four times', es: 'Un presidente puede ser elegido cuatro veces', fa: 'رئیس جمهور چهار بار انتخاب شده می‌تواند' },
          { en: 'Congress picks the President each year', es: 'El Congreso escoge al presidente cada año', fa: 'کانگرس هر سال رئیس جمهور را می‌گزیند' }],
        answer: 0,
        why: { en: 'Since 1951, a President can be elected only two times. It came after Roosevelt won four.', es: 'Desde 1951, un presidente solo puede ser elegido dos veces. Llegó después de que Roosevelt ganó cuatro.', fa: 'از ۱۹۵۱، رئیس جمهور فقط دو بار انتخاب شده می‌تواند. این بعد از چهار برد روزولت آمد.' } },
      { q: { en: 'Under the 20th Amendment, when does a new President\'s term start?', es: 'Según la Enmienda 20, ¿cuándo empieza el mandato de un nuevo presidente?', fa: 'طبق متمم بیستم، دورهٔ رئیس جمهور نو چه وقت شروع می‌شود؟' },
        choices: [
          { en: 'January 20', es: 'El 20 de enero', fa: '۲۰ جنوری' },
          { en: 'January 3', es: 'El 3 de enero', fa: '۳ جنوری' },
          { en: 'March 4', es: 'El 4 de marzo', fa: '۴ مارچ' },
          { en: 'July 4', es: 'El 4 de julio', fa: '۴ جولای' }],
        answer: 0,
        why: { en: 'The term starts January 20. Congress starts January 3. This made the lame duck time shorter.', es: 'El mandato empieza el 20 de enero. El Congreso, el 3 de enero. Así se acortó el tiempo de pato cojo.', fa: 'دوره ۲۰ جنوری شروع می‌شود. کانگرس ۳ جنوری. این کار زمان رهبر رفتنی را کوتاه‌تر ساخت.' } },
      { q: { en: 'The Vice President job is empty. What does the 25th Amendment say?', es: 'El puesto de vicepresidente está vacío. ¿Qué dice la Enmienda 25?', fa: 'جای معاون رئیس جمهور خالی است. متمم بیست و پنجم چه می‌گوید؟' },
        choices: [
          { en: 'The President picks; Congress confirms', es: 'El presidente escoge; el Congreso confirma', fa: 'رئیس جمهور می‌گزیند؛ کانگرس تأیید می‌کند' },
          { en: 'The voters hold a new election', es: 'Los votantes hacen una nueva elección', fa: 'رأی‌دهندگان یک انتخابات نو می‌کنند' },
          { en: 'The Speaker becomes Vice President', es: 'El presidente de la Cámara se vuelve vicepresidente', fa: 'رئیس مجلس معاون رئیس جمهور می‌شود' },
          { en: 'The job stays empty until the next election', es: 'El puesto queda vacío hasta la próxima elección', fa: 'این جای تا انتخابات بعدی خالی می‌ماند' }],
        answer: 0,
        why: { en: 'The President picks a new Vice President. Both houses of Congress must confirm.', es: 'El presidente escoge un nuevo vicepresidente. Las dos cámaras del Congreso deben confirmarlo.', fa: 'رئیس جمهور معاون نو را می‌گزیند. هر دو مجلس کانگرس باید تأیید کنند.' } },
      { q: { en: 'What did the 12th Amendment (1804) change?', es: '¿Qué cambió la Enmienda 12 (1804)?', fa: 'متمم دوازدهم (۱۸۰۴) چه چیز را تغییر داد؟' },
        choices: [
          { en: 'Separate elector votes for each job', es: 'Votos de electores aparte para cada puesto', fa: 'رأی جدای انتخاب‌کنندگان برای هر کار' },
          { en: 'It gave women the right to vote', es: 'Les dio a las mujeres el derecho a votar', fa: 'به زنان حق رأی داد' },
          { en: 'It made the term four years long', es: 'Hizo que el mandato durara cuatro años', fa: 'دوره را چهار ساله ساخت' },
          { en: 'The Senate now picks the Vice President', es: 'Ahora el Senado escoge al vicepresidente', fa: 'حالا سنا معاون رئیس جمهور را می‌گزیند' }],
        answer: 0,
        why: { en: 'Electors now cast one vote for President and a separate vote for Vice President.', es: 'Ahora los electores dan un voto para presidente y otro voto aparte para vicepresidente.', fa: 'حالا انتخاب‌کنندگان یک رأی برای رئیس جمهور و یک رأی جدا برای معاون می‌دهند.' } },
      { q: { en: 'In 1974, President Richard Nixon resigned. Who became President?', es: 'En 1974, el presidente Richard Nixon renunció. ¿Quién se volvió presidente?', fa: 'در سال ۱۹۷۴، رئیس جمهور ریچارد نیکسون استعفا داد. کی رئیس جمهور شد؟' },
        choices: [
          { en: 'Gerald Ford, the Vice President', es: 'Gerald Ford, el vicepresidente', fa: 'جرالد فورد، معاون رئیس جمهور' },
          { en: 'The Speaker of the House', es: 'El presidente de la Cámara', fa: 'رئیس مجلس نمایندگان' },
          { en: 'The winner of a special election', es: 'El ganador de una elección especial', fa: 'برندهٔ یک انتخابات خاص' },
          { en: 'The Secretary of State', es: 'El secretario de Estado', fa: 'وزیر خارجه' }],
        answer: 0,
        why: { en: 'Vice President Gerald Ford took the oath. He had been picked under the 25th Amendment.', es: 'El vicepresidente Gerald Ford hizo el juramento. Lo habían escogido según la Enmienda 25.', fa: 'معاون رئیس جمهور جرالد فورد سوگند یاد کرد. او طبق متمم بیست و پنجم گزیده شده بود.' } }
    ]
  },

  learned: [
    { en: 'If a President cannot serve, the [[vice president|Vice President]] takes over first.', es: 'Si un presidente no puede servir, el [[vice president|vicepresidente]] toma el mando primero.', fa: 'اگر رئیس جمهور نتواند کار کند، اول [[vice president|معاون رئیس جمهور]] جای او را می‌گیرد.' },
    { en: 'Next come the Speaker, the President pro tempore, then the Secretary of State.', es: 'Luego vienen el presidente de la Cámara, el pro tempore y el secretario de Estado.', fa: 'بعد رئیس مجلس نمایندگان، رئیس موقت سنا و بعد وزیر خارجه می‌آیند.' },
    { en: 'The 12th, 20th, 22nd and 25th [[amendment|Amendments]] changed the President\'s job.', es: 'Las [[amendment|Enmiendas]] 12, 20, 22 y 25 cambiaron el puesto del presidente.', fa: '[[amendment|متمم‌های]] دوازدهم، بیستم، بیست و دوم و بیست و پنجم کار رئیس جمهور را تغییر دادند.' }
  ],
  reflect: {
    q: { en: 'Should a President be elected only two times? Why or why not?', es: '¿Debe un presidente ser elegido solo dos veces? ¿Por qué sí o por qué no?', fa: 'آیا رئیس جمهور باید فقط دو بار انتخاب شود؟ چرا یا چرا نه؟' },
    starter: { en: 'I think a two-term limit is', es: 'Creo que un límite de dos mandatos es', fa: 'فکر می‌کنم حد دو دوره ... است' }
  }
};
