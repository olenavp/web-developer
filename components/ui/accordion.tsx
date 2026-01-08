'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useEffect, useRef } from 'react';

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
}: AccordionItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && itemRef.current) {
      setTimeout(() => {
        itemRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 100);
    }
  }, [isOpen]);

  return (
    <div
      ref={itemRef} 
      className={`overflow-hidden transition-all duration-700 ease-[0.22, 1, 0.36, 1] scroll-mt-32 ${
        isOpen
          ? 'rounded-[2.5rem] shadow-accent-glow scale-[1.02] relative z-10'
          : 'rounded-[2rem] shadow-lg border-white/[0.02]'
      }`}
    >
      <button
        onClick={onClick}
        className={`w-full flex items-center justify-between text-left transition-all duration-700 group relative ${
          isOpen
            ? 'bg-gradient-to-r from-accent via-accent-light to-accent px-6 py-6 text-night'
            : 'bg-gradient-to-br from-surface to-graphite px-6 py-6 text-cream hover:from-surface-hover hover:to-graphite'
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
                <div className="absolute inset-0 bg-night/20 blur-xl rounded-full" />
              )}
              <span
                className={`relative text-[12px] font-mono font-bold px-4 py-2 rounded-full transition-all duration-500 border ${
                  isOpen
                    ? 'bg-night text-accent border-night'
                    : 'bg-night/40 text-accent border-accent/20 shadow-inner'
                }`}
              >
                {number}
              </span>
            </div>
          )}
          <h3
            className={`text-2xl md:text-3xl font-bold tracking-tight transition-all duration-500 ${
              isOpen
                ? 'text-night drop-shadow-sm'
                : 'text-cream/90 group-hover:text-cream'
            }`}
          >
            {title}
          </h3>
        </div>

        <div
          className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-700 shadow-2xl ${
            isOpen
              ? 'rotate-45 border-night/20 text-night bg-night/10 scale-110'
              : 'rotate-0 border-white/10 text-accent bg-night/30 group-hover:border-accent/50 group-hover:scale-110'
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
            className="bg-gradient-to-b from-accent to-accent-dark overflow-hidden shadow-inner"
          >
            <div className="pb-10 px-10 md:pl-20 pr-12 relative">
              <div className="relative">
                {description && (
                  <p className="text-2xl md:text-3xl text-night/90 leading-tight mb-16 max-w-4xl italic font-serif border-l-4 border-night/10 pl-10 pt-4">
                    {description}
                  </p>
                )}

                {(clientRole || result) && (
                  <div className="grid sm:grid-cols-2 gap-16 py-8 border-t border-night/10 max-w-4xl">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-night/40" />
                        <span className="text-[12px] font-mono text-night/50 uppercase tracking-[0.4em] font-bold">
                          Ваша участь
                        </span>
                      </div>
                      <div className="text-night font-medium text-xl md:text-2xl leading-tight">
                        {clientRole}
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-night/40" />
                        <span className="text-[12px] font-mono text-night/50 uppercase tracking-[0.4em] font-bold">
                          Результат етапу
                        </span>
                      </div>
                      <div className="text-night font-medium text-xl md:text-2xl leading-tight">
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
