'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import FadeIn from './FadeIn';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const results = [
  'результат',
  'прибуток',
  'клієнтів',
  'впевненість',
  'стабільність',
  'зростання',
  'довіру',
];

export function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % results.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#1A1C1E] pt-28 pb-16 px-4 sm:px-6 lg:px-8 min-h-[85vh] flex items-center">
      <div className="absolute top-0 left-0 w-[40%] h-[40%] bg-[#D4AF37]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-0 w-[30%] h-[30%] bg-[#F5F5F0]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>

      <div className="relative z-1 max-w-5xl mx-auto w-full">
        <div className="space-y-10">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#F5F5F0] leading-tight tracking-tight font-serif italic">
              Я створюю сайти
              <span className="text-[#D4AF37] not-italic">.</span> <br />
              <div className="flex flex-wrap items-center gap-x-[0.3em] not-italic">
                <span className="font-sans font-medium text-3xl md:text-5xl lg:text-6xl text-[#F5F5F0]/40">
                  Ви отримуєте
                </span>
                <div className="relative inline-flex h-[1.1em] items-center overflow-hidden align-bottom">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={results[index]}
                      initial={{ y: '30%', opacity: 0 }}
                      animate={{ y: '0%', opacity: 1 }}
                      exit={{ y: '-30%', opacity: 0 }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      className="text-[#D4AF37] italic underline decoration-[#D4AF37]/30 underline-offset-4"
                    >
                      {results[index]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="max-w-lg border-l border-[#D4AF37]/40 pl-6 ml-1">
              <p className="text-lg md:text-xl text-[#F5F5F0]/60 leading-relaxed font-medium italic font-serif">
                «Повний цикл розробки, від дизайну до реалізації і запуску».
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center gap-8 pt-4">
              <Button
                asChild
                size="lg"
                className="h-14 px-8 text-base font-bold bg-[#F5F5F0] text-[#1A1C1E] hover:bg-[#D4AF37] hover:text-[#1A1C1E] transition-all duration-300 rounded-full shadow-lg shadow-black/20"
              >
                <Link href="#contact">Обговорити проєкт</Link>
              </Button>

              <Link
                href="/#process"
                className="group flex items-center gap-3 text-base font-bold text-[#F5F5F0]/40 hover:text-[#F5F5F0] transition-all"
              >
                <span className="w-10 h-10 rounded-full border border-[#F5F5F0]/10 flex items-center justify-center group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-all">
                  <span className="group-hover:translate-x-0.5 transition-transform text-xs text-[#D4AF37]">
                    →
                  </span>
                </span>
                <span>Мій метод</span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="absolute bottom-10 left-10 flex items-center gap-3 hidden lg:flex">
        <div className="w-8 h-[1px] bg-[#F5F5F0]/10" />
        <div className="text-[9px] font-mono text-[#F5F5F0]/20 uppercase tracking-[0.2em]">
          Available for 2026
        </div>
      </div>
    </section>
  );
}
