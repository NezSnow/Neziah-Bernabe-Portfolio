'use client';

import { motion } from 'framer-motion';
import { FiBook, FiCalendar, FiBriefcase, FiMapPin } from 'react-icons/fi';
import SectionTitle from '@/components/ui/SectionTitle';
import Reveal from '@/components/ui/Reveal';

const infoCards = [
  {
    label: 'Education',
    Icon: FiBook,
    iconClass: 'from-neon-purple/30 to-violet-600/40 text-neon-purple',
    main: 'Undergraduate',
    sub: 'Bachelor of Science in Information Technology',
    tag: 'Currently Enrolled',
    tagClass: 'border-neon-purple/40 bg-neon-purple/15 text-neon-purple',
  },
  {
    label: 'Birthdate',
    Icon: FiCalendar,
    iconClass: 'from-neon-blue/25 to-cyan-500/30 text-neon-blue',
    main: 'March 22, 2003',
    sub: '23 years old',
    tag: 'Aries ♈',
    tagClass: 'border-neon-blue/40 bg-neon-blue/15 text-neon-blue',
  },
  {
    label: 'Experience',
    Icon: FiBriefcase,
    iconClass: 'from-neon-purple/30 to-violet-600/40 text-neon-purple',
    main: '1+ Years',
    sub: 'Front End Development',
    tag: 'Full-time',
    tagClass: 'border-neon-purple/40 bg-neon-purple/15 text-neon-purple',
  },
  {
    label: 'Location',
    Icon: FiMapPin,
    iconClass: 'from-neon-blue/25 to-cyan-500/30 text-neon-blue',
    main: 'Philippines',
    sub: 'Available for opportunities',
    tag: 'Open to Work',
    tagClass: 'border-neon-blue/40 bg-neon-blue/15 text-neon-blue',
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative z-10 py-20 md:py-28">
      <motion.div
        className="mx-auto max-w-7xl"
        initial={false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionTitle
          eyebrow="About Me"
          title="Get to know me better."
          subtitle="Here's some basic information about me. I'm currently an undergraduate student, passionate about building digital experiences and growing as a developer."
        />

        <motion.div
          className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {infoCards.map((card) => {
            const Icon = card.Icon;
            return (
              <motion.article
                key={card.label}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                }}
                whileHover={{ y: -4 }}
                className="glass-panel flex h-full flex-col rounded-2xl p-6 transition-shadow duration-300 hover:shadow-neon-purple"
              >
                <motion.div
                  className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${card.iconClass}`}
                  whileHover={{ scale: 1.05 }}
                >
                  <Icon className="text-xl text-white" />
                </motion.div>

                <p className="text-xs font-medium uppercase tracking-wider text-white/45">{card.label}</p>
                <p className="mt-2 text-lg font-semibold text-white">{card.main}</p>
                <p className="mt-1 text-sm leading-relaxed text-white/50">{card.sub}</p>

                <span
                  className={`mt-5 inline-flex w-fit rounded-full border px-3 py-1 text-[11px] font-medium ${card.tagClass}`}
                >
                  {card.tag}
                </span>
              </motion.article>
            );
          })}
        </motion.div>

        <Reveal delay={0.2}>
          <p className="mt-10 flex items-center gap-2.5 text-sm text-white/55">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Always learning. Always building.
          </p>
        </Reveal>
      </motion.div>
    </section>
  );
}
