'use client';
import { Code2 } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-night pt-12 pb-12 px-6 sm:px-10 lg:px-12 border-t border-white/10 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-12">
          
          <div className="md:col-span-4 space-y-6">
            <Link
              href="/"
              className="flex items-center gap-3 opacity-90 hover:opacity-100 transition-opacity group"
            >
              <Code2 size={32} className="text-accent group-hover:rotate-12 transition-transform duration-500" />
            </Link>
            <p className="text-[14px] text-cream/55 leading-relaxed font-light tracking-wide max-w-xs">
              Проєктування та розробка сайтів з фокусом на бізнес-результат
            </p>
          </div>

          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-12">

            <div className="space-y-6">
              <ul className="space-y-4">
                <li><Link href="#projects" className="text-[13px] text-cream/75 hover:text-accent transition-colors">Проєкти</Link></li>
                <li><Link href="#process" className="text-[13px] text-cream/75 hover:text-accent transition-colors">Метод</Link></li>
                <li><Link href="#faq" className="text-[13px] text-cream/75 hover:text-accent transition-colors">Питання</Link></li>
              </ul>
            </div>

            <div className="space-y-6">
              <ul className="space-y-4">
                <li><Link href="/privacy-policy" className="text-[13px] text-cream/75 hover:text-accent transition-colors">Політика конфіденційності</Link></li>
                <li><Link href="/public-offer" className="text-[13px] text-cream/75 hover:text-accent transition-colors">Публічна оферта</Link></li>
              </ul>
            </div>

            {/* <div className="space-y-6">
              <ul className="space-y-4">
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[13px] text-cream/75 hover:text-accent transition-colors flex items-center gap-2">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <span className="text-[10px] font-mono text-cream/45 uppercase tracking-[0.4em]">
              © {currentYear} All rights reserved
            </span>
            <div className="hidden md:block w-px h-3 bg-white/20" />
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-[10px] font-mono text-accent/80 uppercase tracking-[0.2em]">
                Available for new projects
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}