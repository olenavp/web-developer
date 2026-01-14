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
    { title: 'Рішення', href: 'problems' },
    { title: 'Процес', href: 'process' },
    { title: 'Проєкти', href: 'projects' },
    { title: 'Питання', href: 'faq' },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled
          /* Підняли border-b до white/10 для чіткого відсікання контенту при скролі */
          ? 'bg-night/90 backdrop-blur-xl h-20 border-b border-white/10 shadow-2xl'
          : 'bg-transparent h-28'
      }`}
    >
      <div className="w-full h-full px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="flex items-center justify-between h-full w-full">
          <div className="flex-shrink-0 relative z-[110]">
            <Link
              href="/"
              className="flex items-center gap-4 group no-underline"
              onClick={closeMenu}
            >
              {/* Посилили рамку логотипу до accent/30 */}
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center border border-accent/30 group-hover:border-accent/60 transition-all duration-500 shadow-inner">
                <Code2
                  size={28}
                  className="text-accent transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center justify-center gap-10 lg:gap-16">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={`/#${link.href}`}
                /* Підняли з cream-muted (0.75) до cream/75 для гарантованої читабельності поверх будь-якого фону */
                className="relative text-[12px] font-mono uppercase tracking-[0.4em] text-cream/75 transition-colors duration-500 hover:text-accent group no-underline py-2"
              >
                {link.title}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-accent transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-6 md:gap-10 relative z-[110]">
            <Button
              asChild
              variant="outline"
              size="sm"
              /* Посилили рамку кнопки "Контакт" до accent/40 */
              className="hidden sm:inline-flex border-accent/40 hover:border-accent text-accent text-[12px] h-11 px-8 bg-transparent hover:bg-accent/5 transition-all duration-500"
            >
              <Link href="/#contact" className="no-underline">
                Контакт
              </Link>
            </Button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              /* Оновили кольори кнопки меню для мобайлу */
              className="md:hidden w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-accent transition-all active:scale-90 border border-white/10 hover:bg-white/10"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {typeof window !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                /* bg-night тепер #111112 */
                className="fixed inset-0 bg-night z-[100] flex flex-col p-10 pt-40"
              >
                <div className="absolute top-0 right-0 w-full h-full bg-accent/8 blur-[120px] rounded-full pointer-events-none" />

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
                        className="text-5xl font-serif italic text-cream hover:text-accent no-underline block transition-colors duration-500"
                      >
                        {/* Підняли прозорість номерів у мобайл меню до accent/50 */}
                        <span className="text-xs font-mono text-accent/50 mr-6 not-italic">
                          0{idx + 1}
                        </span>
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