'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Send } from 'lucide-react';

export function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#1A1C1E] overflow-hidden"
    >
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div>
              <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-[0.2em] block mb-4">
                [ Контакти ]
              </span>
              <h2 className="text-5xl md:text-7xl font-bold text-[#F5F5F0] tracking-tight font-serif italic leading-[1.1]">
                Почнімо роботу <br />
                <span className="font-sans not-italic text-[#F5F5F0]/20">
                  над вашим проєктом
                </span>
              </h2>
            </div>

            <div className="pt-8 border-t border-white/5 max-w-sm">
              <p className="text-base text-[#F5F5F0]/40 leading-relaxed font-medium">
                Я відповім протягом декількох годин. <br />
                Обговоримо ваші цілі та сформуємо чіткий план дій.
              </p>
            </div>

            <div className="space-y-8">
              <div className="group">
                <div className="text-[12px] font-mono text-[#D4AF37] uppercase tracking-widest mb-4">
                  Швидкий зв'язок
                </div>
                <a
                  href="https://t.me/yourusername"
                  target="_blank"
                  className="inline-flex items-center gap-4 text-2xl font-bold text-[#F5F5F0] hover:text-[#D4AF37] transition-all"
                >
                  <span className="underline underline-offset-8 decoration-white/10 group-hover:decoration-[#D4AF37]/40 transition-all">
                    Telegram
                  </span>
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-[#1A1C1E] transition-all">
                    <ArrowRight className="w-5 h-5" strokeWidth={2} />
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="relative bg-[#232629]/50 backdrop-blur-xl p-8 md:p-12 rounded-[3rem] border border-white/5 shadow-2xl">
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-[400px] flex flex-col justify-center items-center text-center space-y-6"
              >
                <div className="w-20 h-20 bg-[#D4AF37] rounded-full flex items-center justify-center text-[#1A1C1E] shadow-lg shadow-[#D4AF37]/20">
                  <Check className="w-10 h-10" strokeWidth={3} />
                </div>
                <h3 className="text-3xl font-bold text-[#F5F5F0] font-serif italic">
                  Запит отримано
                </h3>
                <p className="text-[#F5F5F0]/50 max-w-xs">
                  Дякую! Я сконтактую з вами найближчим часом для обговорення
                  деталей.
                </p>
                <Button
                  onClick={() => setStatus('idle')}
                  variant="link"
                  className="text-[#D4AF37] font-mono uppercase tracking-widest text-xs"
                >
                  Відправити ще один
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-[0.2em]">
                    Ваше ім'я
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full bg-transparent border-b border-white/10 py-3 focus:border-[#D4AF37] outline-none transition-all text-lg text-[#F5F5F0] placeholder:text-white/30"
                    placeholder="Як до вас звертатися?"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-[0.2em]">
                    Email або Telegram
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full bg-transparent border-b border-white/10 py-3 focus:border-[#D4AF37] outline-none transition-all text-lg text-[#F5F5F0]  placeholder:text-white/30"
                    placeholder="@username або email@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-[0.2em]">
                    Про проєкт
                  </label>
                  <textarea
                    rows={2}
                    className="w-full bg-transparent border-b border-white/10 py-3 focus:border-[#D4AF37] outline-none transition-all text-lg text-[#F5F5F0] resize-none placeholder:text-white/30"
                    placeholder="Коротко про вашу ідею..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full h-16 bg-[#F5F5F0] text-[#1A1C1E] font-bold text-sm uppercase tracking-[0.2em] rounded-full hover:bg-[#D4AF37] hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 disabled:opacity-50 flex items-center justify-center gap-3 group leading-none"
                >
                  {status === 'loading' ? (
                    'Відправка...'
                  ) : (
                    <span className="flex items-center justify-center gap-3">
                      <span className="inline-block">Надіслати запит</span>
                      <Send
                        className="w-8 h-8 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                        strokeWidth={2.5}
                      />
                    </span>
                  )}
                </button>

                <p className="text-[9px] text-center text-[#F5F5F0]/20 uppercase tracking-widest leading-relaxed">
                  Натискаючи кнопку, ви погоджуєтесь на <br /> обробку
                  персональних даних
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
