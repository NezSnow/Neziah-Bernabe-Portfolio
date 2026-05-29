'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import MagneticButton from '@/components/ui/MagneticButton';

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'multimedia', label: 'Multimedia' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const scrollRaf = useRef(0);
  const lastScrolled = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (scrollRaf.current) return;
      scrollRaf.current = requestAnimationFrame(() => {
        scrollRaf.current = 0;
        const next = window.scrollY > 24;
        if (lastScrolled.current !== next) {
          lastScrolled.current = next;
          setScrolled(next);
        }
      });
    };
    lastScrolled.current = window.scrollY > 24;
    setScrolled(lastScrolled.current);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (scrollRaf.current) cancelAnimationFrame(scrollRaf.current);
    };
  }, []);

  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.35, rootMargin: '-20% 0px -55% 0px' },
    );
    sections.forEach((s) => s && obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <motion.header
      className={`fixed left-0 right-0 top-0 z-[80] transition-[background,box-shadow,backdrop-filter] duration-300 ${
        scrolled ? 'glass-nav shadow-[0_8px_40px_rgba(0,0,0,0.35)]' : 'border-transparent bg-transparent'
      }`}
      initial={false}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="section-padding mx-auto flex max-w-7xl items-center justify-between gap-6 py-4">
        <Link href="#hero" className="group flex items-center gap-2">
          <span className="text-xl font-bold text-gradient">NB</span>
          <span className="text-sm font-medium tracking-wide text-white/80 group-hover:text-white">
            portfolio
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => {
            const isActive = active === item.id;
            return (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className="relative px-3 py-2 text-sm text-white/55 transition-colors hover:text-white"
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-x-1 bottom-1 h-0.5 rounded-full bg-gradient-to-r from-neon-purple to-neon-blue"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="#contact" className="hidden sm:block">
            <MagneticButton strength={0.2}>
              <span className="inline-flex rounded-full border border-neon-purple/50 bg-neon-purple/10 px-5 py-2 text-sm font-medium text-white shadow-neon-purple transition hover:border-neon-purple hover:bg-neon-purple/20">
                Hire Me
              </span>
            </MagneticButton>
          </Link>
          <Link
            href="#contact"
            className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/80 lg:hidden"
          >
            Menu
          </Link>
        </div>
      </div>

      <div className="section-padding flex gap-2 overflow-x-auto pb-3 lg:hidden">
        {NAV.map((item) => (
          <Link
            key={item.id}
            href={`#${item.id}`}
            className={`whitespace-nowrap rounded-full border px-3 py-1 text-xs ${
              active === item.id
                ? 'border-neon-purple/50 bg-neon-purple/15 text-white'
                : 'border-white/10 text-white/55'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </motion.header>
  );
}
