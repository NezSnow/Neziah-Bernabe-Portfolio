'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delaySec = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: delaySec, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Reveal({
  children,
  className = '',
  delay = 0,
  amount = 0.2,
  once = true,
}) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial={false}
      whileInView="show"
      viewport={{ once, amount }}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}
