'use client';

/**
 * Ambient background: CSS-only motion (no per-node Framer subscriptions).
 * Keeps GPU/compositor work predictable and scroll smooth.
 */
export default function BackgroundLayer() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div
        className="absolute inset-0 bg-luxury-bg"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, transparent 0%, #050816 92%), linear-gradient(to right, rgba(139,92,246,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(139,92,246,0.06) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 56px 56px, 56px 56px',
        }}
      />

      <div
        aria-hidden
        className="bg-blob bg-blob-1 absolute -left-32 top-24 h-[380px] w-[380px] rounded-full bg-neon-purple/25 blur-[100px] md:h-[420px] md:w-[420px] md:blur-[120px]"
      />
      <div
        aria-hidden
        className="bg-blob bg-blob-2 absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-neon-blue/15 blur-[100px] md:h-[480px] md:w-[480px] md:blur-[130px]"
      />
      <div
        aria-hidden
        className="bg-blob bg-blob-3 absolute bottom-10 left-1/3 h-[300px] w-[300px] rounded-full bg-violet-600/15 blur-[90px] md:h-[360px] md:w-[360px] md:blur-[100px]"
      />

      <div aria-hidden className="starfield absolute inset-0 overflow-hidden" />

      <div aria-hidden className="particles absolute inset-0 overflow-hidden">
        <span className="particle particle-1" />
        <span className="particle particle-2" />
        <span className="particle particle-3" />
        <span className="particle particle-4" />
        <span className="particle particle-5" />
      </div>

      <div className="noise-overlay absolute inset-0" />
    </div>
  );
}
