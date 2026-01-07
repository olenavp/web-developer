'use client';
import Link from 'next/link';
import { Code2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full !bg-[#1A1C1E] py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-20">
          <div className="space-y-4">
            <Link
              href="/"
              className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity group"
            >
              <Code2 size={28} className="text-[#D4AF37]" />
              <span className="text-[#F5F5F0] font-bold tracking-tighter text-lg">
                PORTFOLIO
              </span>
            </Link>
          </div>

          <div className="flex gap-8">
            <a
              href="#"
              className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#F5F5F0]/40 hover:!text-[#D4AF37] transition-colors"
            >
              Telegram
            </a>
            <a
              href="#"
              className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#F5F5F0]/40 hover:!text-[#D4AF37] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#F5F5F0]/40 hover:!text-[#D4AF37] transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[#F5F5F0]/20 font-mono text-[9px] uppercase tracking-[0.3em]">
          <div className="flex items-center gap-4">
            <span>© 2026 Всі права захищені</span>
            <div className="w-1 h-1 rounded-full bg-[#D4AF37]/30" />
          </div>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#81B29A] animate-pulse" />{' '}
              <span>Available for projects</span>
            </div>
            <span className="hidden sm:inline text-[#F5F5F0]/40">
              Ukraine / Worldwide
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
