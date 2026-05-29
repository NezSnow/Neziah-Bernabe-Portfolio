'use client';

import Reveal from '@/components/ui/Reveal';

export default function SectionTitle({ eyebrow, title, subtitle, align = 'left' }) {
  return (
    <div
      className={`mb-12 max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
    >
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-neon-purple/90">
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.12}>
          <p className="mt-4 text-base leading-relaxed text-white/55">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
