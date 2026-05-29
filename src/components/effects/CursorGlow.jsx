'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

const HALF = 160;

export default function CursorGlow() {
  const cx = useMotionValue(-9999);
  const cy = useMotionValue(-9999);
  const tx = useTransform(cx, (v) => v - HALF);
  const ty = useTransform(cy, (v) => v - HALF);
  const raf = useRef(0);
  const pending = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)');
    if (!mq.matches) return;

    const flush = () => {
      raf.current = 0;
      const p = pending.current;
      if (!p) return;
      pending.current = null;
      cx.set(p.clientX);
      cy.set(p.clientY);
    };

    const move = (e) => {
      pending.current = e;
      if (!raf.current) raf.current = requestAnimationFrame(flush);
    };

    window.addEventListener('pointermove', move, { passive: true });
    return () => {
      window.removeEventListener('pointermove', move);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [cx, cy]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[95] hidden h-[320px] w-[320px] rounded-full bg-gradient-to-br from-neon-purple/22 via-neon-blue/12 to-transparent mix-blend-screen blur-2xl will-change-transform md:block"
      style={{ x: tx, y: ty }}
    />
  );
}
