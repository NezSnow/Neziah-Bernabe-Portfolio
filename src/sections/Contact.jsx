'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiMail, FiPhone } from 'react-icons/fi';
import { FaFacebook } from 'react-icons/fa';
import SectionTitle from '@/components/ui/SectionTitle';
import Reveal from '@/components/ui/Reveal';

const contacts = [
  {
    id: 'facebook',
    label: 'Facebook',
    value: 'nez.bernabe',
    href: 'https://www.facebook.com/nez.bernabe',
    icon: FaFacebook,
    external: true,
  },
  {
    id: 'email',
    label: 'Gmail',
    value: 'neziahmorningstar@gmail.com',
    href: 'mailto:neziahmorningstar@gmail.com',
    icon: FiMail,
    external: false,
  },
  {
    id: 'phone',
    label: 'Phone',
    value: '0938-399-9667',
    href: 'tel:+639383999667',
    icon: FiPhone,
    external: false,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative z-10 pb-24 pt-20 md:pb-32 md:pt-28">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Contact"
          title="Let’s build something iconic."
          subtitle="Reach out anytime — connect with me on Facebook, email, or phone."
        />

        <Reveal>
          <motion.div
            className="glass-panel mx-auto grid max-w-3xl gap-4 rounded-3xl p-6 sm:grid-cols-1 sm:p-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {contacts.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.45 }}
                >
                  <Link
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noreferrer' : undefined}
                    className="group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 transition hover:border-neon-purple/40 hover:bg-white/[0.04] hover:shadow-neon-purple"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-neon-purple/30 to-neon-blue/25 text-xl text-white transition group-hover:scale-105">
                      <Icon />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-neon-purple/80">
                        {item.label}
                      </span>
                      <span className="mt-1 block break-all text-sm font-medium text-white group-hover:text-gradient sm:break-normal sm:text-base">
                        {item.value}
                      </span>
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
