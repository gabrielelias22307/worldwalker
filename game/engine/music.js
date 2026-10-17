/* WORLDWALKER engine · music: retro chip songs made in code (no sound files)
   One song for each realm, a song for the Smudge trial and a short win jingle.
   A song is a few channels of notes. Each word is one step (an eighth note):
   'E5' plays a note, '-' holds the note before it, '.' is quiet, '|' is only a bar line for reading.
   Drum words: k kick, s snare, h hi-hat, c clave; they can be joined, like 'kh'. Each channel loops on its own length. */
(function () {
  const SONGS = {
    // 1 Mapmaker's Valley: cheerful march in C major
    realm1: {
      bpm: 112, lead: 'square',
      melody: `E5 - G5 - C6 - B5 A5 | G5 - - - E5 - . . | F5 - A5 - D6 - C6 B5 | C6 - - - . . G5 - |
               A5 - G5 - F5 - E5 F5 | G5 - E5 - C5 - . . | D5 - E5 - F5 - A5 G5 | C5 - - - . . . .`,
      bass: `C3 . G3 . C3 . G3 . | C3 . G3 . E3 . G3 . | F3 . C4 . F3 . C4 . | G3 . D4 . G3 . B3 . |
             F3 . C4 . F3 . A3 . | C3 . G3 . E3 . C3 . | D3 . A3 . G3 . B3 . | C3 . G3 . C3 . . .`,
      drums: 'k . h . s . h . | k . h k s . h h'
    },
    // 2 The Americas: flute tune over a clave rhythm, G major
    realm2: {
      bpm: 124, lead: 'tri',
      melody: `G5 . B5 D6 - B5 . G5 | A5 - - . F#5 . D5 . | E5 . G5 B5 - A5 . G5 | F#5 - - - . . D5 . |
               G5 . B5 D6 - E6 . D6 | C6 - B5 . A5 . G5 . | A5 . B5 C6 - B5 . A5 | G5 - - - . . . .`,
      bass: `G2 . . G3 . . D3 . | D3 . . D3 . . A2 . | E3 . . E3 . . B2 . | D3 . . D3 . . F#3 . |
             G2 . . G3 . . D3 . | C3 . . C3 . . G2 . | D3 . . D3 . . F#3 . | G2 . . D3 . . G2 .`,
      drums: 'kc . h c s h c h | k . c h sc . h .'
    },
    // 3 Europe, Russia & Central Asia: a waltz in D minor (6 steps a bar)
    realm3: {
      bpm: 150, lead: 'square',
      melody: `D5 - - - F5 - | A5 - - - G5 F5 | E5 - - - G5 - | A5 - - - - - |
               Bb5 - - - A5 G5 | F5 - - - E5 D5 | C#5 - - - E5 - | D5 - - - - -`,
      bass: `D3 - A3 - A3 - | D3 - A3 - A3 - | A2 - E3 - E3 - | D3 - F3 - A3 - |
             Bb2 - F3 - F3 - | D3 - A3 - A3 - | A2 - E3 - G3 - | D3 - A3 - D3 -`,
      drums: 'k . h . h .'
    },
    // 4 Sub-Saharan Africa: marimba-like pentatonic over busy drums
    realm4: {
      bpm: 116, lead: 'pluck',
      melody: `A4 C5 E5 . D5 C5 A4 . | G4 . A4 C5 . A4 G4 . | A4 C5 E5 . G5 E5 D5 . | E5 . D5 C5 . A4 . . |
               C5 D5 E5 . E5 G5 E5 . | D5 . C5 D5 . E5 . . | A5 G5 E5 . D5 C5 D5 . | A4 . . . E4 G4 A4 .`,
      bass: 'A2 . . A2 . . E3 . | G2 . . G2 . . D3 . | A2 . . A2 . . E3 . | C3 . . C3 . . G2 .',
      drums: 'kh h sh h k kh sh h'
    },
    // 5 North Africa & Southwest Asia: a slow tune on a drone, with a raised third (D E♭ F# G A B♭ C)
    realm5: {
      bpm: 96, lead: 'square',
      melody: `D5 - Eb5 F#5 G5 - F#5 Eb5 | D5 - - - . . A4 - | Bb4 - A4 G4 A4 - Bb4 C5 | D5 - - - . . . . |
               G5 - F#5 G5 A5 - G5 F#5 | Eb5 - F#5 - D5 - . . | C5 - Bb4 A4 Bb4 - A4 G4 | F#4 G4 A4 - D4 - - .`,
      bass: 'D3 - - - A2 - - - | D3 - - - D3 - A2 -',
      drums: 'k . h k s . h .'
    },
    // 6 South & Southeast Asia: plucked strings over a drone
    realm6: {
      bpm: 100, lead: 'pluck',
      melody: `D5 E5 F#5 - A5 - F#5 E5 | D5 - - . B4 - A4 . | D5 F#5 A5 - B5 A5 F#5 A5 | E5 - - - . . . . |
               A5 B5 D6 - B5 A5 F#5 - | A5 - F#5 E5 D5 - . . | E5 F#5 A5 - F#5 E5 D5 B4 | D5 - - - . . . .`,
      bass: 'D3 - A3 - D4 - A3 -',
      drums: 'k . h k s h . h'
    },
    // 7 East Asia: gentle five-note tune, like a plucked koto
    realm7: {
      bpm: 92, lead: 'pluck',
      melody: `E5 . D5 . B4 - A4 . | B4 - D5 - E5 - - . | G5 . E5 . D5 - B4 . | D5 - - - - . . . |
               E5 . G5 . A5 - G5 E5 | D5 - E5 - B4 - - . | A4 . B4 . D5 - E5 D5 | B4 - A4 - G4 - - .`,
      bass: 'G2 - D3 - G3 - D3 - | E2 - B2 - E3 - B2 -',
      drums: 'k . . . h . . . | k . h . h . . .'
    },
    // 8 Australia, the Pacific & the World: bright island song in F major
    realm8: {
      bpm: 128, lead: 'tri',
      melody: `C5 - F5 - A5 - G5 F5 | G5 - - - . . C5 - | D5 - G5 - Bb5 - A5 G5 | A5 - - - . . F5 G5 |
               A5 - C6 - A5 - F5 - | G5 - Bb5 - G5 - E5 - | F5 - A5 - G5 - E5 - | F5 - - - . . . .`,
      bass: `F2 . C3 . F3 . C3 . | F2 . C3 . A2 . C3 . | G2 . D3 . G3 . D3 . | C3 . G2 . C3 . E3 . |
             F2 . C3 . F3 . C3 . | C3 . G2 . C3 . G2 . | Bb2 . F3 . C3 . G2 . | F2 . C3 . F2 . . .`,
      drums: 'k h s h k k s h'
    },
    // the Smudge trial: fast and tense, A minor
    boss: {
      bpm: 150, lead: 'square',
      melody: `A5 . A5 C6 B5 . G#5 . | A5 . E5 . . . . . | F5 . F5 A5 G5 . E5 . | D5 . E5 . . . . . |
               A5 . A5 C6 B5 . G#5 . | A5 . E6 . D6 . C6 . | B5 . C6 . B5 . A5 . | G#5 - - - E5 - - -`,
      bass: `A2 A3 A2 A3 A2 A3 A2 A3 | A2 A3 A2 A3 A2 A3 A2 A3 | F2 F3 F2 F3 F2 F3 F2 F3 | D2 D3 D2 D3 D2 D3 D2 D3 |
             A2 A3 A2 A3 A2 A3 A2 A3 | F2 F3 F2 F3 F2 F3 F2 F3 | E2 E3 E2 E3 E2 E3 E2 E3 | E2 E3 E2 E3 E2 E3 E2 E3`,
      drums: 'k h s h k k s h'
    },
    // the page is won (plays once)
    win: {
      bpm: 170, lead: 'square', once: true,
      melody: 'C5 E5 G5 C6 - - G5 C6 - - - - - - - .',
      bass: 'C3 . G3 . C4 - - . G3 . C3 - - - - .',
      drums: 'k . . . s . . . k . s . k s k .'
    }
  };

  const NOTE = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
  function freq(tok) {
    const m = /^([A-G])([#b]?)(\d)$/.exec(tok); if (!m) return 0;
    const n = NOTE[m[1]] + (m[2] === '#' ? 1 : m[2] === 'b' ? -1 : 0) + (+m[3] + 1) * 12;
    return 440 * Math.pow(2, (n - 69) / 12);
  }
  const parse = s => (s || '').split(/\s+/).filter(w => w && w !== '|');
  for (const k in SONGS) { const s = SONGS[k]; s.ch = { melody: parse(s.melody), bass: parse(s.bass), drums: parse(s.drums) }; s.len = Math.max(s.ch.melody.length, s.ch.bass.length, s.ch.drums.length); }

  let ac = null, out = null, noise = null, song = null, songName = '', step = 0, nextT = 0, timer = null;

  function setup() {
    ac = WW.ac; if (!ac || out) return !!ac;
    out = ac.createGain(); out.gain.value = 0.9; out.connect(ac.destination);
    noise = ac.createBuffer(1, ac.sampleRate * 0.5, ac.sampleRate);
    const d = noise.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    return true;
  }
  function env(g, t, peak, dur, hold) {
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(peak, t + 0.01);
    if (hold) { g.gain.setValueAtTime(peak * 0.75, t + Math.max(0.02, dur * 0.7)); g.gain.exponentialRampToValueAtTime(0.0001, t + dur); }
    else g.gain.exponentialRampToValueAtTime(0.0001, t + Math.min(dur, 0.45));
  }
  function tone(type, f, t, dur, peak, hold, vib) {
    const o = ac.createOscillator(), g = ac.createGain();
    o.type = type; o.frequency.setValueAtTime(f, t);
    if (vib && dur > 0.35) { // a little wobble on long notes
      const l = ac.createOscillator(), lg = ac.createGain(); l.frequency.value = 5.5; lg.gain.value = f * 0.006;
      l.connect(lg); lg.connect(o.frequency); l.start(t + 0.15); l.stop(t + dur);
    }
    env(g, t, peak, dur, hold);
    o.connect(g); g.connect(out); o.start(t); o.stop(t + dur + 0.05);
  }
  function hit(kind, t) {
    if (kind === 'k') {
      const o = ac.createOscillator(), g = ac.createGain();
      o.frequency.setValueAtTime(150, t); o.frequency.exponentialRampToValueAtTime(42, t + 0.12);
      g.gain.setValueAtTime(0.22, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.14);
      o.connect(g); g.connect(out); o.start(t); o.stop(t + 0.16);
    } else if (kind === 'c') {
      tone('square', 2400, t, 0.03, 0.025, false);
    } else {
      const src = ac.createBufferSource(), f = ac.createBiquadFilter(), g = ac.createGain();
      src.buffer = noise; f.type = 'highpass'; f.frequency.value = kind === 's' ? 1200 : 6500;
      const d = kind === 's' ? 0.12 : 0.035, v = kind === 's' ? 0.07 : 0.03;
      g.gain.setValueAtTime(v, t); g.gain.exponentialRampToValueAtTime(0.0001, t + d);
      src.connect(f); f.connect(g); g.connect(out); src.start(t, Math.random() * 0.3); src.stop(t + d + 0.02);
    }
  }
  // how many steps a note lasts: itself plus the '-' words after it
  function length(arr, i) { let n = 1; while (arr[(i + n) % arr.length] === '-' && n < arr.length) n++; return n; }

  function schedule(s, i, t, sd) {
    const m = s.ch.melody, b = s.ch.bass, d = s.ch.drums;
    if (m.length && (!s.once || i < m.length)) {
      const w = m[i % m.length], f = freq(w);
      if (f) {
        const dur = length(m, i % m.length) * sd;
        if (s.lead === 'pluck') { tone('triangle', f, t, dur, 0.13, false); tone('square', f * 2, t, Math.min(dur, 0.12), 0.012, false); }
        else if (s.lead === 'tri') tone('triangle', f, t, dur * 0.95, 0.12, true, true);
        else tone('square', f, t, dur * 0.95, 0.035, true, true);
      }
    }
    if (b.length && (!s.once || i < b.length)) { const w = b[i % b.length], f = freq(w); if (f) tone('triangle', f, t, length(b, i % b.length) * sd * 0.9, 0.11, true); }
    if (d.length && (!s.once || i < d.length)) { const w = d[i % d.length]; if (w !== '.' && w !== '-') for (const k of w) hit(k, t); }
  }
  function tick() {
    if (!song || !ac) return;
    const sd = 60 / song.bpm / 2;
    while (nextT < ac.currentTime + 0.15) {
      if (song.once && step >= song.len) { const after = song.after; stop(); if (after) play(after); return; }
      schedule(song, step, nextT, sd);
      nextT += sd; step++;
    }
  }
  function stop() { if (timer) clearInterval(timer); timer = null; song = null; songName = ''; }
  function start() {
    if (!WW.save.music || !wanted || !setup()) return;
    if (ac.state === 'suspended') ac.resume();
    song = Object.assign({}, SONGS[wanted]); songName = wanted; step = 0; nextT = ac.currentTime + 0.08;
    if (song.once) song.after = wantedAfter;
    if (timer) clearInterval(timer);
    timer = setInterval(tick, 30); tick();
  }
  let wanted = '', wantedAfter = '';
  // play a song by name ('realm4', 'boss', 'win'); 'then' = the song to go back to after a one-time jingle
  function play(name, then) {
    wanted = name; wantedAfter = then || '';
    if (songName === name && timer) return;
    stop(); start();
  }
  document.addEventListener('visibilitychange', () => { if (!ac) return; if (document.hidden) ac.suspend(); else ac.resume(); });

  WW.music = {
    SONGS, play,
    stop() { wanted = ''; stop(); },
    wake() { if (wanted && !timer) start(); },          // call after the first tap/click, when sound is allowed
    toggle() { WW.save.music = !WW.save.music; WW.store(); if (WW.save.music) start(); else stop(); },
    get playing() { return songName; },
    // for tests/music.js: write a whole song into an OfflineAudioContext
    renderInto(ctx, name, loops = 1) {
      const keep = [ac, out, noise]; ac = ctx; out = null; WW.ac = ctx; setup();
      const s = SONGS[name], sd = 60 / s.bpm / 2;
      for (let i = 0; i < s.len * loops; i++) schedule(s, i, 0.05 + i * sd, sd);
      [ac, out, noise] = keep; WW.ac = ac;
    }
  };
})();
