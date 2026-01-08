'use client';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, MessageCircle } from 'lucide-react';

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-32 px-6 sm:px-10 lg:px-12 bg-[#16181A] overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[1px] bg-[#D4AF37]" />
                <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-[0.4em]">
                  [ Зв'язок ]
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold text-[#F5F5F0] tracking-tight font-serif italic leading-[1.1]">
                Почнімо роботу <br />
                <span className="font-sans not-italic text-[#F5F5F0]/20">
                  над вашим проєктом
                </span>
              </h2>
            </div>

            <div className="pt-8 border-t border-white/5 max-w-sm">
              <p className="text-xl text-[#F5F5F0]/40 leading-relaxed font-serif italic">
                Я відповім протягом декількох годин. Обговоримо ваші цілі та сформуємо чіткий план дій.
              </p>
            </div>
          </div>

          <div className="grid gap-6 w-full">
            
            <a
              href="https://t.me/yourusername"
              target="_blank"
              className="group relative bg-gradient-to-br from-[#1A1C1E] to-[#0D0D0E] p-10 rounded-[3rem] border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-700 shadow-2xl overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-[1px] bg-white/10 group-hover:bg-[#D4AF37]/40 transition-colors duration-700" />
              
              <div className="flex items-center justify-between relative">
                <div className="flex items-center gap-8">
                  <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 transition-transform duration-500">
                    <MessageCircle className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-[0.3em] mb-2 font-bold">
                      Написати в месенджер
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-[#F5F5F0]">Telegram</div>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-[#0D0D0E] transition-all duration-500">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </div>
            </a>

            <a
              href="mailto:hello@example.com"
              className="group relative bg-gradient-to-br from-[#1A1C1E] to-[#0D0D0E] p-10 rounded-[3rem] border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-700 shadow-2xl overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-[1px] bg-white/10 group-hover:bg-[#D4AF37]/40 transition-colors duration-700" />
              
              <div className="flex items-center justify-between relative">
                <div className="flex items-center gap-8">
                  <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 transition-transform duration-500">
                    <Mail className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-[0.3em] mb-2 font-bold">
                      Надіслати листа
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-[#F5F5F0]">Email</div>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-[#0D0D0E] transition-all duration-500">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </div>
            </a>

            <div className="pt-8 flex justify-start lg:justify-end">
               <div className="flex flex-col items-center gap-6">
                  <div className="w-px h-12 bg-gradient-to-b from-[#D4AF37]/30 to-transparent" />
                  <span className="text-[9px] font-mono text-[#F5F5F0]/20 uppercase tracking-[0.5em]">
                    Available for new projects
                  </span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}