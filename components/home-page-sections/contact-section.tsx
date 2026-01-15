'use client';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, MessageCircle } from 'lucide-react';
import { SectionHeader } from './section-header';
import VerticalLine from '../VerticalLine';
import { Section } from '../Section';

export function ContactSection() {
  return (
    <Section
      id="faq"
      className="bg-graphite"
      withGlow={true}
      glowPosition="top-left"
    >
      <div className="max-w-6xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-12">
            <SectionHeader
              label="Зв'язок"
              title="Почнімо роботу"
              subtitle="над вашим проєктом"
            />

            <div className="pt-8 border-t border-white/15 max-w-sm">
              <p className="text-xl text-cream/85 leading-relaxed font-serif italic">
                Я відповім протягом декількох годин. Обговоримо ваші цілі та
                сформуємо чіткий план дій.
              </p>
            </div>
          </div>

          <div className="grid gap-6 w-full">
            <a
              href="https://t.me/olena_web"
              target="_blank"
              className="group relative bg-gradient-to-br from-graphite-light to-night p-10 rounded-[3rem] border border-card-border hover:border-accent/30 transition-all duration-700 shadow-2xl overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-[1px] bg-white/20 group-hover:bg-accent/40 transition-colors duration-700" />

              <div className="flex items-center justify-between relative">
                <div className="flex items-center gap-8">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-500 border border-accent/20">
                    <MessageCircle className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="text-[12px] font-mono text-accent uppercase tracking-[0.3em] mb-2 font-bold">
                      Написати в месенджер
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-cream">
                      Telegram
                    </div>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-accent group-hover:text-night transition-all duration-500">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </div>
            </a>

            <a
              href="mailto:pobehailo.olena@gmail.com"
              className="group relative bg-gradient-to-br from-graphite-light to-night p-10 rounded-[3rem] border border-card-border hover:border-accent/30 transition-all duration-700 shadow-2xl overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-[1px] bg-white/20 group-hover:bg-accent/40 transition-colors duration-700" />

              <div className="flex items-center justify-between relative">
                <div className="flex items-center gap-8">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-500 border border-accent/20">
                    <Mail className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="text-[12px] font-mono text-accent uppercase tracking-[0.3em] mb-2 font-bold">
                      Надіслати листа
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-cream">
                      Email
                    </div>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-accent group-hover:text-night transition-all duration-500">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </div>
            </a>

            <div className="pt-8 flex justify-start lg:justify-end">
              <div className="flex flex-col items-center gap-6">
                <VerticalLine />
                <span className="text-[9px] font-mono text-cream/45 uppercase tracking-[0.5em]">
                  Available for new projects
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
