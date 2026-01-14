'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import FadeIn from '../FadeIn';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';

const results = [
  'результат',
  'прибуток',
  'клієнтів',
  'зростання',
  'довіру',
  'стабільність',
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
    <section className="relative overflow-hidden bg-night pt-24 pb-12 px-6 sm:px-10 lg:px-12 min-h-screen flex items-center">
      <div className="absolute top-[-5%] left-[-2%] w-[50%] h-[50%] bg-accent/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-[-5%] left-[-2%] w-[50%] h-[50%] bg-accent/20 blur-[300px] rounded-full pointer-events-none" />

      <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-accent/10 blur-[250px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-cream/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-1 max-w-6xl mx-auto w-full">
        <div className="space-y-10 md:space-y-12">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-cream leading-[1.1] tracking-tight font-serif italic">
              Я створюю сайти
              <span className="text-accent text-5xl md:text-6xl lg:text-7xl xl:text-8xl not-italic ml-1 inline-block animate-pulse">
                .
              </span>
              <br />
              <span className="flex flex-col items-start not-italic mt-4 gap-1">
                <span className="font-sans font-medium text-2xl md:text-4xl lg:text-5xl text-cream-muted tracking-tight">
                  Ви отримуєте
                </span>

                <span className="relative inline-flex h-[1.2em] items-center overflow-hidden align-bottom">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={results[index]}
                      initial={{ y: '70%', opacity: 0, filter: 'blur(8px)' }}
                      animate={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
                      exit={{ y: '-70%', opacity: 0, filter: 'blur(8px)' }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="text-accent italic font-serif border-b-[3px] border-accent pb-1 whitespace-nowrap leading-none"
                    >
                      {results[index]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="max-w-xl border-l-2 border-accent pl-8 py-1 ml-1">
              <p className="text-lg md:text-xl text-cream-muted leading-relaxed font-medium italic font-serif">
                Повний цикл розробки, від дизайну до реалізації і запуску
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-col items-start sm:flex-row sm:items-center gap-6 pt-6 md:pt-10">
              <Button
                asChild
                size="lg"
                className="relative group overflow-hidden w-full sm:w-auto h-14 md:h-16 px-10 text-base md:text-lg font-bold bg-accent text-night hover:bg-cream transition-all duration-500 rounded-full shadow-[0_10px_30px_-10px_rgba(212,175,55,0.3)] hover:shadow-[0_15px_35px_-10px_rgba(245,245,240,0.2)]"
              >
                <Link
                  href="#contact"
                  className="flex items-center justify-center gap-3"
                >
                  <span className="relative">Обговорити проєкт</span>
                  <span className="relative  group-hover:translate-x-1.5 transition-transform duration-300">
                    →
                  </span>

                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </Link>
              </Button>

              <Link
                href="/#process"
                className="group flex items-center gap-4 py-2 px-1 text-sm font-bold text-cream-muted hover:text-accent transition-all duration-300"
              >
                <div className="relative">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-card-border flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/5 transition-all duration-500">
                    <span className="text-accent text-sm group-hover:translate-x-0.5 transition-transform">
                      <ArrowRightIcon />
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-start">
                  <span className="uppercase tracking-[0.2em] text-[12px] md:text-[14px] font-mono leading-none mb-1">
                    Як я працюю
                  </span>
                  <div className="h-[2px] w-0 group-hover:w-full bg-accent/40 transition-all duration-500" />
                </div>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
