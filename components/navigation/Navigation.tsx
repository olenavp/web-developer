'use client';
import Link from 'next/link';
import { Code2, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Що вирішую', href: 'problems' },
    { title: 'Процес', href: 'process' },
    { title: 'Проєкти', href: 'projects' },
    { title: 'Питання', href: 'faq' },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled 
          ? 'bg-[#0D0D0E]/90 backdrop-blur-xl h-20 border-b border-white/5 shadow-2xl' 
          : 'bg-transparent h-28'
      }`}
    >
      {/* Контейнер: розтягнутий на всю ширину з великими відступами з боків */}
      <div className="w-full h-full px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="flex items-center justify-between h-full w-full">
          
          {/* ЛІВИЙ БЛОК: Логотип */}
          <div className="flex-shrink-0 relative z-[110]">
            <Link
              href="/"
              className="flex items-center gap-4 group no-underline"
              onClick={closeMenu}
            >
              <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/20 group-hover:border-[#D4AF37]/50 transition-all duration-500 shadow-inner">
                <Code2
                  size={28}
                  className="text-[#D4AF37] transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <span className="text-xl md:text-2xl font-serif italic text-[#F5F5F0] tracking-tight hidden xs:block">
                Designer <span className="font-sans not-italic text-[#F5F5F0]/20">&</span> Dev
              </span>
            </Link>
          </div>

          {/* ЦЕНТРАЛЬНИЙ БЛОК: Меню (тільки десктоп) */}
          <div className="hidden md:flex items-center justify-center gap-10 lg:gap-16">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={`/#${link.href}`}
                className="relative text-[10px] font-mono uppercase tracking-[0.4em] text-[#F5F5F0]/40 transition-colors duration-500 hover:text-[#D4AF37] group no-underline py-2"
              >
                {link.title}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-[#D4AF37] transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* ПРАВИЙ БЛОК: CTA та Бургер */}
          <div className="flex items-center gap-6 md:gap-10 relative z-[110]">
            <Button 
              asChild
              variant="outline" 
              size="sm" 
              className="hidden sm:inline-flex border-[#D4AF37]/20 hover:border-[#D4AF37] text-[10px] h-11 px-8"
            >
              <Link href="#contact" className="no-underline">Контакт</Link>
            </Button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-[#D4AF37] transition-all active:scale-90 border border-white/5 hover:bg-white/10"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE MENU PORTAL */}
      {typeof window !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="fixed inset-0 bg-[#0D0D0E] z-[99999] flex flex-col p-10 pt-40"
              >
                <div className="absolute top-0 right-0 w-full h-full bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />

                <div className="flex flex-col gap-10 relative z-10">
                  {navLinks.map((link, idx) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <Link
                        href={`/#${link.href}`}
                        onClick={closeMenu}
                        className="text-5xl font-serif italic text-[#F5F5F0] hover:text-[#D4AF37] no-underline block"
                      >
                        <span className="text-xs font-mono text-[#D4AF37]/30 mr-6 not-italic">0{idx + 1}</span>
                        {link.title}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </nav>
  );
};

export default Navigation;