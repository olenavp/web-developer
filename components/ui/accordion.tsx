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
      className={`mb-4 overflow-hidden transition-all duration-500 ease-out border ${
        isOpen
          ? 'rounded-[2.5rem] shadow-2xl shadow-black/40 border-[#D4AF37]/20'
          : 'rounded-[1.5rem] shadow-sm border-white/5'
      }`}
    >
      <button
        onClick={onClick}
        className={`w-full flex items-center justify-between text-left transition-all duration-500 group ${
          isOpen
            ? 'bg-[#D4AF37] px-8 py-10 text-[#1A1C1E]'
            : 'bg-[#2A2D31] px-8 py-8 text-[#F5F5F0] hover:bg-[#32353B]'
        }`}
      >
        <div className="flex items-center gap-6 md:gap-10">
          {number && (
            <span
              className={`text-xs font-mono font-bold px-3 py-1 rounded-full transition-colors duration-300 ${
                isOpen
                  ? 'bg-[#1A1C1E]/10 text-[#1A1C1E]'
                  : 'bg-[#1A1C1E] text-[#D4AF37]'
              }`}
            >
              {number}
            </span>
          )}
          <h3
            className={`text-xl md:text-2xl font-bold tracking-tight transition-all duration-300 ${
              isOpen
                ? 'text-[#1A1C1E]'
                : 'text-[#F5F5F0]/85 group-hover:text-[#F5F5F0]'
            }`}
          >
            {title}
          </h3>
        </div>

        <div
          className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500 ${
            isOpen
              ? 'rotate-45 border-[#1A1C1E]/20 text-[#1A1C1E] bg-[#1A1C1E]/5'
              : 'rotate-0 border-white/10 text-[#D4AF37] bg-[#1A1C1E]/30 group-hover:bg-[#1A1C1E]/50'
          }`}
        >
          <Plus className="w-6 h-6" strokeWidth={2} />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#D4AF37] overflow-hidden"
          >
            <div className="pb-12 px-8 md:pl-28 pr-12">
              {description && (
                <p className="text-lg text-[#1A1C1E]/80 leading-relaxed mb-10 max-w-3xl italic font-serif">
                  «{description}»
                </p>
              )}

              {(clientRole || result) && (
                <div className="grid sm:grid-cols-2 gap-8 py-8 border-t border-[#1A1C1E]/10 max-w-3xl">
                  {clientRole && (
                    <div className="space-y-2">
                      <div className="text-[10px] font-mono text-[#1A1C1E]/40 uppercase tracking-[0.2em] font-bold">
                        Ваша участь
                      </div>
                      <div className="text-[#1A1C1E] font-bold leading-snug">
                        {clientRole}
                      </div>
                    </div>
                  )}
                  {result && (
                    <div className="space-y-2">
                      <div className="text-[10px] font-mono text-[#1A1C1E]/40 uppercase tracking-[0.2em] font-bold">
                        Результат етапу
                      </div>
                      <div className="text-[#1A1C1E] font-bold leading-snug">
                        {result}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {children && (
                <div className="text-lg text-[#1A1C1E]/80 leading-relaxed max-w-3xl pb-4">
                  {children}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
