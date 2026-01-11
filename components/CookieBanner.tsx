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
    } else {
      console.log('GA gtag function not found');
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
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-12 md:max-w-md z-[100]"
        >
          <div className="bg-night/80 backdrop-blur-xl border border-white/5 p-6 rounded-[2rem] shadow-2xl relative overflow-hidden group">
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-accent/10 blur-3xl rounded-full" />

            <div className="relative space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="font-mono text-[10px] text-accent uppercase tracking-[0.3em] font-bold">
                  Cookie Policy
                </span>
              </div>

              <p className="text-[13px] text-cream/60 leading-relaxed font-light">
                Я використовую файли cookie, щоб зрозуміти, як ви взаємодієте з
                сайтом, та покращити ваш досвід. Продовжуючи, ви погоджуєтесь із
                моєю{' '}
                <Link
                  href="/privacy-policy"
                  className="text-accent hover:underline underline-offset-4 transition-all"
                >
                  Політикою конфіденційності
                </Link>
                .
              </p>

              <div className="flex gap-4 pt-2">
                <button
                  onClick={acceptCookies}
                  className="flex-1 bg-accent text-night text-[11px] font-mono font-bold uppercase tracking-widest py-3 rounded-full hover:bg-cream transition-all duration-500 shadow-lg shadow-accent/10"
                >
                  Прийняти
                </button>
                <button
                  onClick={declineCookies}
                  className="px-6 border border-white/10 text-cream/40 text-[11px] font-mono font-bold uppercase tracking-widest rounded-full hover:text-cream hover:border-white/30 transition-all duration-500"
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
