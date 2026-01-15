'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);

    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        ad_storage: 'granted',
        analytics_storage: 'granted',
      });
    }
  };
  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 left-4 right-4 md:bottom-8 md:right-12 md:left-auto md:max-w-sm z-[100]"
        >
          <div className="bg-night/90 backdrop-blur-xl border border-white/15 p-5 md:p-7 rounded-[2rem] shadow-2xl relative overflow-hidden group">
            
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-accent/15 blur-3xl rounded-full pointer-events-none" />

            <div className="relative space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="font-mono text-[10px] text-accent uppercase tracking-[0.3em] font-bold">
                  Cookie Policy
                </span>
              </div>

              <p className="text-[12px] md:text-[13px] text-cream/80 leading-relaxed font-light">
                Я використовую файли cookie, щоб покращити ваш досвід. Продовжуючи, ви погоджуєтесь із моєю{' '}
                <Link
                  href="/privacy-policy"
                  className="text-accent hover:text-cream underline underline-offset-4 transition-all decoration-accent/30 hover:decoration-cream"
                >
                  Політикою
                </Link>
                .
              </p>

              <div className="flex gap-3 pt-1">
                <button
                  onClick={acceptCookies}
                  className="flex-1 bg-accent text-night text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-widest py-3 rounded-full hover:bg-cream transition-all duration-500 shadow-lg shadow-accent/10 active:scale-95"
                >
                  Прийняти
                </button>
                <button
                  onClick={declineCookies}
                  className="px-5 md:px-8 border border-white/15 text-cream/60 text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-widest rounded-full hover:text-cream hover:border-white/40 transition-all duration-500 active:scale-95"
                >
                  Ні
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
