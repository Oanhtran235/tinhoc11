// Web Audio API sound generator for zero-latency feedback
class SoundManager {
  private ctx: AudioContext | null = null;
  private enabled: boolean = true;

  constructor() {
    // AudioContext will be initialized on first user interaction
  }

  private initContext() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setEnabled(enabled: boolean) {
    this.enabled = enabled;
  }

  public isEnabled(): boolean {
    return this.enabled;
  }

  // Play pleasant chime on correct answer
  public playCorrect() {
    if (!this.enabled) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc1.type = 'sine';
      osc2.type = 'triangle';

      osc1.frequency.setValueAtTime(523.25, now); // C5
      osc1.frequency.exponentialRampToValueAtTime(659.25, now + 0.1); // E5
      osc1.frequency.exponentialRampToValueAtTime(783.99, now + 0.2); // G5
      osc1.frequency.exponentialRampToValueAtTime(1046.5, now + 0.3); // C6

      osc2.frequency.setValueAtTime(523.25 * 0.5, now);
      osc2.frequency.exponentialRampToValueAtTime(1046.5 * 0.5, now + 0.3);

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(this.ctx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 0.45);
      osc2.stop(now + 0.45);
    } catch {
      // Ignore audio failure
    }
  }

  // Play soft low tone on incorrect answer
  public playIncorrect() {
    if (!this.enabled) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(260, now);
      osc.frequency.exponentialRampToValueAtTime(180, now + 0.25);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.3);
    } catch {
      // Ignore audio failure
    }
  }

  // Play crisp click sound for UI feedback
  public playClick() {
    if (!this.enabled) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(400, now + 0.05);

      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.05);
    } catch {
      // Ignore audio failure
    }
  }

  // Play classroom chime for timer completion
  public playChime() {
    if (!this.enabled) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      [440, 554.37, 659.25, 880].forEach((freq, index) => {
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + index * 0.1);
        gain.gain.setValueAtTime(0.15, now + index * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, now + index * 0.1 + 0.6);
        osc.connect(gain);
        gain.connect(this.ctx!.destination);
        osc.start(now + index * 0.1);
        osc.stop(now + index * 0.1 + 0.6);
      });
    } catch {
      // Ignore audio failure
    }
  }

  // Play fanfare when a player wins or finishes match
  public playFanfare() {
    if (!this.enabled) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const notes = [
        { f: 523.25, t: 0.0, d: 0.12 }, // C5
        { f: 659.25, t: 0.14, d: 0.12 }, // E5
        { f: 783.99, t: 0.28, d: 0.12 }, // G5
        { f: 1046.5, t: 0.44, d: 0.4 },  // C6
      ];

      notes.forEach((note) => {
        const now = this.ctx!.currentTime + note.t;
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(note.f, now);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + note.d);
        osc.connect(gain);
        gain.connect(this.ctx!.destination);
        osc.start(now);
        osc.stop(now + note.d);
      });
    } catch {
      // Ignore audio failure
    }
  }

  // Play buzzer on wrong answer or penalty
  public playBuzzer() {
    if (!this.enabled) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(150, now);
      osc.frequency.linearRampToValueAtTime(120, now + 0.35);

      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.35);
    } catch {
      // Ignore audio failure
    }
  }
}

export const sound = new SoundManager();
