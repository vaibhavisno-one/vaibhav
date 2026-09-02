"use client";

let ctx = null;
let masterGain = null;

function ensureCtx() {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const AudioCtor = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtor) return null;
    ctx = new AudioCtor();
    masterGain = ctx.createGain();
    masterGain.connect(ctx.destination);
  }
  if (ctx.state === "suspended") ctx.resume();
  return ctx;
}

export function setMasterVolume(v) {
  // v 0-100
  if (!masterGain) ensureCtx();
  if (masterGain) masterGain.gain.value = Math.max(0, Math.min(1, v / 100)) * 0.7;
}

export function playTone({ freq = 800, dur = 90, type = "sine", gain = 0.12, slideTo, vol = 70 }) {
  const c = ensureCtx();
  if (!c || vol === 0) return;
  const v = Math.max(0, Math.min(1, vol / 100));
  const o = c.createOscillator();
  const g = c.createGain();
  o.type = type;
  o.frequency.value = freq;
  if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, c.currentTime + dur / 1000);
  g.gain.value = gain * v;
  g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + dur / 1000);
  o.connect(g);
  g.connect(masterGain || c.destination);
  o.start();
  o.stop(c.currentTime + dur / 1000 + 0.02);
}

export const sounds = {
  click: (vol) => playTone({ freq: 900, dur: 70, type: "sine", gain: 0.14, vol }),
  hover: (vol) => playTone({ freq: 1200, dur: 45, type: "sine", gain: 0.06, vol }),
  open: (vol) => playTone({ freq: 520, dur: 120, type: "sine", gain: 0.13, slideTo: 780, vol }),
  close: (vol) => playTone({ freq: 700, dur: 110, type: "sine", gain: 0.11, slideTo: 420, vol }),
  toggle: (vol) => playTone({ freq: 650, dur: 80, type: "triangle", gain: 0.09, vol }),
  success: (vol) => {
    playTone({ freq: 600, dur: 90, gain: 0.12, vol });
    setTimeout(() => playTone({ freq: 900, dur: 110, gain: 0.13, vol }), 90);
  },
  pop: (vol) => playTone({ freq: 300, dur: 80, type: "square", gain: 0.04, slideTo: 600, vol }),
};

export function useSounds(volume = 70) {
  return {
    click: () => sounds.click(volume),
    hover: () => sounds.hover(volume),
    open: () => sounds.open(volume),
    close: () => sounds.close(volume),
    toggle: () => sounds.toggle(volume),
    success: () => sounds.success(volume),
    pop: () => sounds.pop(volume),
    setVolume: setMasterVolume,
  };
}
