'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function PageLoader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDone(true);
      document.documentElement.classList.add('app-ready');
    }, 450);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ backgroundColor: '#050816' }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="relative flex flex-col items-center gap-5"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <motion.div
              className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-neon-purple/40 shadow-neon-purple"
              style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
            >
              <span className="text-base font-bold text-gradient">NB</span>
            </motion.div>
            <motion.div
              className="h-0.5 w-32 overflow-hidden rounded-full"
              style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-neon-purple to-neon-blue"
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.div>
            <p className="text-[10px] tracking-[0.3em]" style={{ color: 'rgba(248,250,252,0.45)' }}>
              LOADING
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
