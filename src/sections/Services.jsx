'use client';

import { motion } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';
import Reveal from '@/components/ui/Reveal';

const services = [
  'Front End Development',
  'Graphic Design',
  'Video Editing',
  'UI/UX Design',
  'Project Management',
  'Basic Computer System Servicing',
];

export default function Services() {
  return (
    <section id="services" className="section-padding relative z-10 py-20 md:py-28">
      <motion.div
        className="mx-auto max-w-7xl"
        initial={false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionTitle
          eyebrow="Services"
          title="End-to-end creative partnership."
          subtitle="From first sketch to shipped interface — I help teams move fast without sacrificing luxury-level craft."
        />

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((title, i) => (
            <Reveal key={title} delay={i * 0.05}>
              <motion.article
                whileHover={{ y: -6 }}
                className="glass-panel flex items-center gap-4 rounded-2xl p-6 transition-shadow duration-300 hover:shadow-neon-blue"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-neon-purple/30 to-neon-blue/25 text-sm font-bold text-white">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-base font-semibold leading-snug text-white sm:text-lg">{title}</h3>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
