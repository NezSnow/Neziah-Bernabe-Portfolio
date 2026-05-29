'use client';

import Link from 'next/link';
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';
import Reveal from '@/components/ui/Reveal';

const social = [
  { href: 'https://github.com', icon: FiGithub, label: 'GitHub' },
  { href: 'https://linkedin.com', icon: FiLinkedin, label: 'LinkedIn' },
  { href: 'https://twitter.com', icon: FiTwitter, label: 'Twitter' },
  { href: 'mailto:hello@example.com', icon: FiMail, label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.06] bg-[#050816]/90">
      <div className="section-padding mx-auto flex max-w-7xl flex-col gap-10 py-14 md:flex-row md:items-end md:justify-between">
        <Reveal>
          <div>
            <p className="text-2xl font-bold text-gradient">NB</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/50">
              Creative Technologist & Front End Developer — crafting cinematic digital experiences with
              precision and polish.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="flex flex-wrap gap-4">
            {social.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-white/70 transition hover:border-neon-purple/40 hover:text-white hover:shadow-neon-purple"
                >
                  <Icon className="text-lg" />
                </Link>
              );
            })}
          </div>
        </Reveal>
      </div>
      <div className="border-t border-white/[0.05] py-6 text-center text-xs text-white/35">
        © {new Date().getFullYear()} Neziah Bernabe. Built with Next.js & Framer Motion.
      </div>
    </footer>
  );
}
