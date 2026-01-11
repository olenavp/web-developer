'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="h-[100svh] bg-night flex flex-col items-center justify-center px-4 text-center">
      
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-[50px] md:text-[80px] font-serif italic text-accent opacity-10 leading-none select-none"
      >
        404
      </motion.h1>

      <div className="space-y-6">
        <h2 className="text-2xl md:text-4xl font-serif text-cream italic">
          Поза проєктом
        </h2>

        <p className="text-cream/40 font-mono text-[10px] md:text-[12px] uppercase tracking-[0.4em] max-w-md mx-auto leading-relaxed">
          Ви опинилися за межами побудованої структури. <br />
          Тут ще немає форми — лише потенціал.
        </p>

        <div className="pt-8">
          <Button
            asChild
            className="rounded-full px-10 bg-accent text-night hover:bg-cream transition-all duration-500"
          >
            <Link href="/">Повернутися на головну</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
