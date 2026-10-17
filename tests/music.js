// node tests/music.js   renders every song to shots/music/<name>.wav and checks it is not silent and not too loud
const { chromium } = require('playwright');
const path = require('path'), fs = require('fs');
const ROOT = path.join(__dirname, '..'), OUT = path.join(ROOT, 'shots', 'music');
fs.mkdirSync(OUT, { recursive: true });
(async () => {
  const b = await chromium.launch(), p = await b.newPage();
  await p.setContent('<html><body></body></html>');
  await p.evaluate(() => { window.WW = { save: { music: true } }; });
  await p.addScriptTag({ path: path.join(ROOT, 'game/engine/music.js') });
  const names = await p.evaluate(() => Object.keys(WW.music.SONGS));
  let failed = 0;
  for (const name of names) {
    const r = await p.evaluate(async name => {
      const s = WW.music.SONGS[name], loops = s.once ? 1 : 2, sr = 22050;
      const secs = s.len * loops * 60 / s.bpm / 2 + 1;
      const ctx = new OfflineAudioContext(1, Math.ceil(secs * sr), sr);
      WW.music.renderInto(ctx, name, loops);
      const buf = await ctx.startRendering(), d = buf.getChannelData(0);
      let peak = 0, sum = 0; for (const v of d) { peak = Math.max(peak, Math.abs(v)); sum += v * v; }
      const pcm = new Int16Array(d.length); for (let i = 0; i < d.length; i++) pcm[i] = Math.max(-1, Math.min(1, d[i])) * 32767;
      const head = new DataView(new ArrayBuffer(44)), w = (o, s) => [...s].forEach((c, i) => head.setUint8(o + i, c.charCodeAt(0)));
      w(0, 'RIFF'); head.setUint32(4, 36 + pcm.byteLength, true); w(8, 'WAVEfmt '); head.setUint32(16, 16, true); head.setUint16(20, 1, true); head.setUint16(22, 1, true);
      head.setUint32(24, sr, true); head.setUint32(28, sr * 2, true); head.setUint16(32, 2, true); head.setUint16(34, 16, true); w(36, 'data'); head.setUint32(40, pcm.byteLength, true);
      const bytes = new Uint8Array(44 + pcm.byteLength); bytes.set(new Uint8Array(head.buffer), 0); bytes.set(new Uint8Array(pcm.buffer), 44);
      let bin = ''; for (let i = 0; i < bytes.length; i += 32768) bin += String.fromCharCode.apply(null, bytes.subarray(i, i + 32768));
      return { peak, rms: Math.sqrt(sum / d.length), secs, b64: btoa(bin) };
    }, name);
    fs.writeFileSync(path.join(OUT, name + '.wav'), Buffer.from(r.b64, 'base64'));
    const ok = r.rms > 0.01 && r.peak <= 1;
    if (!ok) failed++;
    console.log(`${ok ? '✓' : '✗'} ${name.padEnd(7)} ${r.secs.toFixed(1)}s  peak ${r.peak.toFixed(2)}  loudness ${r.rms.toFixed(3)}`);
  }
  await b.close();
  process.exitCode = failed ? 1 : 0;
})();
