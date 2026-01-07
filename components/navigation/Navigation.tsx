'use client';
import Link from 'next/link';
import { Code2, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { title: 'Що вирішую', href: 'problems' },
    { title: 'Процес', href: 'process' },
    { title: 'Проєкти', href: 'projects' },
    { title: 'Питання', href: 'faq' },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-[#1A1C1E] border-b border-white/5">
      <div className="w-full px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0 relative z-[110]">
            <Link
              href="/"
              className="flex items-center gap-4 group no-underline"
              onClick={closeMenu}
            >
              <Code2
                size={36}
                className="text-[#D4AF37] transition-transform duration-300 group-hover:scale-110"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-12 lg:gap-16">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={`/#${link.href}`}
                className="text-xs font-mono uppercase tracking-[0.2em] text-[#F5F5F0]/50 transition-colors duration-300 hover:text-[#D4AF37] no-underline"
              >
                {link.title}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-6 relative z-[110]">
            <Link
              href="#contact"
              className="hidden sm:inline-block px-8 py-3 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-mono uppercase tracking-widest transition-all duration-500 hover:bg-[#D4AF37] hover:text-[#1A1C1E] no-underline"
            >
              Контакт
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-[#D4AF37] p-2 transition-transform active:scale-90"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {typeof window !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-[#1A1C1E] z-[99999] flex items-center justify-center"
              >
                <div className="flex flex-col items-center gap-10 text-center">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={`/#${link.href}`}
                      onClick={closeMenu}
                      className="text-3xl font-serif italic text-[#F5F5F0] transition-colors duration-300 hover:text-[#D4AF37] active:text-[#D4AF37] active:scale-95 transition-transform no-underline"
                    >
                      {link.title}
                    </Link>
                  ))}

                  <Link
                    href="#contact"
                    onClick={closeMenu}
                    className="mt-4 px-10 py-4 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] font-mono text-xs uppercase tracking-widest hover:bg-[#D4AF37] hover:text-[#1A1C1E] transition-all no-underline"
                  >
                    Контакт
                  </Link>
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
