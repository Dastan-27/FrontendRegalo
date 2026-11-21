// ── Generador de Efectos de Sonido Tiernos con Web Audio API ───────────
// Produce micro-sonidos tiernos y cálidos (pop, campanita, gota) directamente
// en el navegador sin latencia, sin archivos pesados ni dependencias externas.

let audioCtx = null;

function getAudioContext() {
  if (!audioCtx && typeof window !== "undefined") {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * Sonido "Pop" tierno y suave (ideal para clicks de botones).
 */
export function playCutePop(volume = 0.18) {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    const now = ctx.currentTime;

    // Frecuencia que sube rápido como una burbuja suave (480Hz -> 820Hz)
    osc.frequency.setValueAtTime(480, now);
    osc.frequency.exponentialRampToValueAtTime(820, now + 0.08);

    // Envolvente de volumen (ataque instantáneo y caída rápida)
    gain.gain.setValueAtTime(volume, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.09);
  } catch {
    // Si el navegador bloquea audio, silenciar sin errores
  }
}

/**
 * Sonido "Campanita / Brillo Mágico" (ideal para cartas o acciones especiales).
 */
export function playSoftChime(volume = 0.15) {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const notes = [1046.5, 1318.51, 1567.98]; // C6, E6, G6 (Acorde brillante dulce)
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      const now = ctx.currentTime + idx * 0.04;

      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(volume, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.36);
    });
  } catch {
    // silenciar
  }
}

/**
 * Sonido "Latido / Toque Dulce" (ideal para corazones o favoritos).
 */
export function playHeartTap(volume = 0.2) {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    const now = ctx.currentTime;

    osc.frequency.setValueAtTime(260, now);
    osc.frequency.exponentialRampToValueAtTime(140, now + 0.12);

    gain.gain.setValueAtTime(volume, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.14);
  } catch {
    // silenciar
  }
}
