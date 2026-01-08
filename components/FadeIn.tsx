'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'none';
}

export default function FadeIn({
  children,
  delay = 0,
  direction = 'up',
}: FadeInProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: direction === 'up' ? 40 : 0,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 1.2,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
