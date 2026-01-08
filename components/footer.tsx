'use client';
import { Code2 } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="!bg-[#0D0D0E] pt-24 pb-12 px-6 sm:px-10 lg:px-12 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-20">
          <div className="space-y-4">
            <Link
              href="/"
              className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity group"
            >
              <Code2 size={28} className="text-[#D4AF37]" />
            </Link>
            <p className="text-sm text-[#F5F5F0]/30 leading-relaxed font-medium uppercase tracking-widest">
              Створюю цифрові продукти з акцентом на та результат.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 md:gap-20">
            <div className="space-y-4">
              <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-[0.3em] font-bold">
                Навігація
              </span>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#projects"
                    className="text-sm text-[#F5F5F0]/60 hover:text-[#D4AF37] transition-colors"
                  >
                    Проєкти
                  </Link>
                </li>
                <li>
                  <Link
                    href="#process"
                    className="text-sm text-[#F5F5F0]/60 hover:text-[#D4AF37] transition-colors"
                  >
                    Метод
                  </Link>
                </li>
                <li>
                  <Link
                    href="#faq"
                    className="text-sm text-[#F5F5F0]/60 hover:text-[#D4AF37] transition-colors"
                  >
                    Питання
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-[0.3em] font-bold">
                Соціальні
              </span>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-[#F5F5F0]/60 hover:text-[#D4AF37] transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-mono text-[#F5F5F0]/20 uppercase tracking-[0.4em]">
            © {currentYear} All rights reserved
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#D4AF37] animate-pulse" />
              <span className="text-[10px] font-mono text-[#F5F5F0]/40 uppercase tracking-[0.2em]">
                Available for hire
              </span>
            </div>
            <div className="w-px h-4 bg-white/10" />
            <span className="text-[10px] font-mono text-[#F5F5F0]/20 uppercase tracking-[0.2em]">
              Designed by you
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
