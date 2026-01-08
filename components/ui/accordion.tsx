'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  isOpen: boolean;
  onClick: () => void;
  number?: string;
  description?: string;
  clientRole?: string;
  result?: string;
  children?: React.ReactNode;
}

export function CustomAccordionItem({
  title,
  isOpen,
  onClick,
  number,
  description,
  clientRole,
  result,
  children,
}: AccordionItemProps) {
  return (
    <div
      className={`overflow-hidden transition-all duration-700 ease-[0.22, 1, 0.36, 1] ${
        isOpen
          ? 'rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(212,175,55,0.25)] scale-[1.02] relative'
          : 'rounded-[2rem] shadow-lg border-white/[0.02]'
      }`}
    >
      <button
        onClick={onClick}
        className={`w-full flex items-center justify-between text-left transition-all duration-700 group relative ${
          isOpen
            ? 
              'bg-gradient-to-r from-[#D4AF37] via-[#F3D37A] to-[#D4AF37] px-6 py-4 text-[#0D0D0E]'
            : 
              'bg-gradient-to-br from-[#2A2D31] to-[#121416] px-6 py-4 text-[#F5F5F0] hover:from-[#32363B] hover:to-[#16181A]'
        }`}
      >
        <div
          className={`absolute inset-x-0 top-0 h-[1px] transition-opacity duration-700 ${
            isOpen ? 'bg-white/40' : 'bg-white/10'
          }`}
        />

        <div className="flex items-center gap-8 md:gap-12 relative">
          {number && (
            <div className="relative">
              {isOpen && (
                <div className="absolute inset-0 bg-[#0D0D0E]/20 blur-xl rounded-full" />
              )}
              <span
                className={`relative text-[10px] font-mono font-bold px-4 py-2 rounded-full transition-all duration-500 border ${
                  isOpen
                    ? 'bg-[#0D0D0E] text-[#D4AF37] border-[#0D0D0E]'
                    : 'bg-[#0D0D0E]/40 text-[#D4AF37] border-[#D4AF37]/20 shadow-inner'
                }`}
              >
                {number}
              </span>
            </div>
          )}
          <h3
            className={`text-2xl md:text-3xl font-bold tracking-tight transition-all duration-500 ${
              isOpen
                ? 'text-[#0D0D0E] drop-shadow-sm'
                : 'text-[#F5F5F0]/90 group-hover:text-[#F5F5F0]'
            }`}
          >
            {title}
          </h3>
        </div>

        <div
          className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-700 shadow-2xl ${
            isOpen
              ? 'rotate-45 border-[#0D0D0E]/20 text-[#0D0D0E] bg-[#0D0D0E]/10 scale-110'
              : 'rotate-0 border-white/10 text-[#D4AF37] bg-[#0D0D0E]/30 group-hover:border-[#D4AF37]/50 group-hover:scale-110'
          }`}
        >
          <Plus className="w-7 h-7" strokeWidth={1.5} />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="bg-gradient-to-b from-[#D4AF37] to-[#B89528] overflow-hidden shadow-inner"
          >
            <div className="pb-20 px-10 md:pl-32 pr-12 relative">
              <div className="absolute inset-0 opacity-[0.15] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] mix-blend-overlay" />

              <div className="relative">
                {description && (
                  <p className="text-2xl md:text-3xl text-[#0D0D0E]/90 leading-snug mb-16 max-w-4xl italic font-serif border-l-4 border-[#0D0D0E]/10 pl-10 pt-4">
                    {description}
                  </p>
                )}

                {(clientRole || result) && (
                  <div className="grid sm:grid-cols-2 gap-16 py-12 border-t border-[#0D0D0E]/10 max-w-4xl">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0D0D0E]/40" />
                        <span className="text-[11px] font-mono text-[#0D0D0E]/50 uppercase tracking-[0.4em] font-bold">
                          Ваша участь
                        </span>
                      </div>
                      <div className="text-[#0D0D0E] font-bold text-xl md:text-2xl leading-tight">
                        {clientRole}
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0D0D0E]/40" />
                        <span className="text-[11px] font-mono text-[#0D0D0E]/50 uppercase tracking-[0.4em] font-bold">
                          Результат етапу
                        </span>
                      </div>
                      <div className="text-[#0D0D0E] font-bold text-xl md:text-2xl leading-tight">
                        {result}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
