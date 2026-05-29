'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { FiArrowUpRight, FiMail, FiCode, FiPenTool, FiVideo, FiLayers, FiCpu } from 'react-icons/fi';
import MagneticButton from '@/components/ui/MagneticButton';

/** Portrait: place your file in `public` as `paul.jpg` (or `PAUL.jpg` on disk — Windows treats them the same). */
const HERO_PORTRAIT = '/paul.jpg';

const tech = ['CapCut', 'MS Office', 'Photoshop', 'Canva', 'Figma', 'Cursor'];

const services = [
  { label: 'Front End Development', Icon: FiCode },
  { label: 'Graphic Design', Icon: FiPenTool },
  { label: 'Video Editing', Icon: FiVideo },
  { label: 'UI/UX Design', Icon: FiLayers },
  { label: 'Project Management', Icon: FiCpu },
];

function ProfileCard() {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smoothX = useSpring(mx, { stiffness: 140, damping: 18 });
  const smoothY = useSpring(my, { stiffness: 140, damping: 18 });
  const rotateX = useTransform(smoothY, [-40, 40], [8, -8]);
  const rotateY = useTransform(smoothX, [-40, 40], [-8, 8]);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = e.clientX - r.left;
    const py = e.clientY - r.top;
    const nx = (px / r.width - 0.5) * 80;
    const ny = (py / r.height - 0.5) * 80;
    mx.set(nx);
    my.set(ny);
  };

  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div className="relative [perspective:1200px]">
      <motion.div
        ref={ref}
        onPointerMove={handleMove}
        onPointerLeave={reset}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative"
      >
      <div className="relative overflow-hidden rounded-3xl border border-white/[0.1] bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-[1px] shadow-card-glow">
        <div className="relative rounded-3xl bg-[#0b1020]/80 backdrop-blur-md">
          <motion.div
            className="absolute -inset-10 rounded-full bg-gradient-to-tr from-neon-purple/40 to-neon-blue/25 blur-3xl"
            animate={{ opacity: [0.4, 0.75, 0.4] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl sm:aspect-[3/4]">
            <Image
              src={HERO_PORTRAIT}
              alt="Profile photo"
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 420px"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-80" />
          </div>

          <div className="relative z-[1] grid grid-cols-3 gap-px border-t border-white/[0.08] bg-white/[0.04] text-center text-[11px] text-white/60 sm:text-xs">
            <div className="px-2 py-4">
              <p className="text-lg font-semibold text-white">3+</p>
              <p className="mt-1 text-[10px] uppercase tracking-wider text-white/45">Years Exp.</p>
            </div>
            <div className="border-x border-white/[0.06] px-2 py-4">
              <p className="text-lg font-semibold text-white">15+</p>
              <p className="mt-1 text-[10px] uppercase tracking-wider text-white/45">Projects</p>
            </div>
            <div className="px-2 py-4">
              <p className="text-lg font-semibold text-white">10+</p>
              <p className="mt-1 text-[10px] uppercase tracking-wider text-white/45">Clients</p>
            </div>
          </div>
        </div>
      </div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="section-padding relative z-10 pb-20 pt-28 md:pb-28 md:pt-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="glass-panel relative overflow-hidden rounded-[28px] p-6 sm:p-10 md:p-12 lg:p-14">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-neon-purple/10 via-transparent to-neon-blue/10" />

          <div className="relative grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-wrap gap-2"
              >
                <span className="rounded-full border border-neon-purple/35 bg-neon-purple/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-neon-purple/95 sm:text-[11px]">
                  Creative Technologist
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white/55 sm:text-[11px]">
                  Front End Developer
                </span>
              </motion.div>

              <div className="mt-8 flex gap-5">
                <motion.div
                  aria-hidden
                  className="relative mt-1 w-1.5 shrink-0 overflow-hidden rounded-full bg-gradient-to-b from-neon-purple via-fuchsia-400 to-neon-blue shadow-[0_0_24px_rgba(139,92,246,0.9)]"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformOrigin: 'top' }}
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/30"
                    animate={{ y: ['-100%', '100%'] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: 'linear' }}
                  />
                </motion.div>

                <div>
                  <motion.h1
                    className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span className="block">Neziah</span>
                    <span className="text-gradient block">Bernabe</span>
                  </motion.h1>

                  <motion.p
                    className="mt-5 max-w-xl text-lg text-white/75 sm:text-xl"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.16, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    Creative Technologist & Front End Developer
                  </motion.p>
                  <motion.p
                    className="mt-3 max-w-lg text-sm leading-relaxed text-white/50 sm:text-base"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.24, duration: 0.55 }}
                  >
                    Creative work with clean execution.
                  </motion.p>
                </div>
              </div>

              <motion.div
                className="mt-8 flex flex-wrap gap-2"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, duration: 0.55 }}
              >
                {tech.map((t, i) => (
                  <motion.span
                    key={t}
                    className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs font-medium text-white/80"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.32 + i * 0.05 }}
                    whileHover={{ y: -3, borderColor: 'rgba(139,92,246,0.45)' }}
                  >
                    {t}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div
                className="mt-6 flex flex-wrap gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45, duration: 0.5 }}
              >
                {services.map(({ label, Icon }, i) => (
                  <motion.span
                    key={label}
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/[0.08] bg-[#0a0f1f]/80 px-3 py-2 text-xs text-white/75 shadow-[inset_0_0_0_1px_rgba(139,92,246,0.08)]"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.06 }}
                    whileHover={{ scale: 1.02, borderColor: 'rgba(0,212,255,0.35)' }}
                  >
                    <Icon className="text-neon-blue" />
                    {label}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div
                className="mt-10 flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.55 }}
              >
                <Link href="#projects">
                  <MagneticButton>
                    <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon-purple to-violet-500 px-7 py-3 text-sm font-semibold text-white shadow-neon-purple transition hover:brightness-110">
                      View My Work
                      <FiArrowUpRight className="text-lg" />
                    </span>
                  </MagneticButton>
                </Link>
                <Link href="#contact">
                  <MagneticButton strength={0.28}>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:border-neon-blue/45 hover:bg-white/[0.06]">
                      <FiMail />
                      Contact Me
                    </span>
                  </MagneticButton>
                </Link>
              </motion.div>
            </div>

            <motion.div style={{ y }} className="relative mx-auto w-full max-w-md lg:mx-0 lg:ml-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="pointer-events-none absolute -inset-6 rounded-[36px] bg-gradient-to-br from-neon-purple/45 to-neon-blue/25 opacity-70 blur-3xl" />
                <ProfileCard />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
