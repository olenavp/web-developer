'use client';
import { Check } from 'lucide-react';
import CtaButton from './CtaButton';

export function WhySection() {
  const values = [
    {
      title: 'Прямий доступ до виконавця',
      description:
        'Ви працюєте безпосередньо з виконавцем. Жодних менеджерів та втрачених змістів у ланцюжку передачі інформації.',
    },
    {
      title: 'Дизайн як стратегія',
      description:
        'Для мене дизайн – це не те, як сайт виглядає, а те, як він працює. Естетика має сенс лише тоді, коли вона не заважає користувачу сприймати інформацію.',
    },
    {
      title: 'Повна прозорість',
      description:
        'Ви бачите прогрес у реальному часі. Процес розбитий на чіткі етапи з конкретними результатами в кінці кожного.',
    },
    {
      title: 'Партнерство',
      description:
        'Я не зникаю після запуску. Мій пріоритет — стабільна робота та розвиток вашого продукту в довгу.',
    },
  ];

  return (
    <section className="py-32 px-6 sm:px-10 lg:px-12 bg-[#16181A] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[#D4AF37]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[px] bg-[#D4AF37]" />
            <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-[0.4em]">
              [ Формат роботи ]
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F0] tracking-tight font-serif italic leading-[1.1]">
            Більше ніж розробка: <br />
            <span className="font-sans not-italic text-[#F5F5F0]/20">
              принципи моєї роботи
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {values.map((v, i) => (
            <div
              key={i}
              className="relative group bg-gradient-to-br from-[#1A1C1E] to-[#0D0D0E] p-10 rounded-[3rem] border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-700 shadow-2xl hover:shadow-[#D4AF37]/10"
            >
              <div className="absolute inset-x-0 top-0 h-[1px] bg-white/10 group-hover:bg-[#D4AF37]/40 transition-colors duration-700 rounded-t-[3rem]" />

              <div className="relative">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] shadow-inner transform group-hover:scale-110 transition-transform duration-500">
                    <Check className="w-7 h-7" strokeWidth={2.5} />
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-[#F5F5F0] tracking-tight group-hover:text-[#D4AF37] transition-colors duration-500">
                    {v.title}
                  </h3>
                </div>
                <p className="text-[#F5F5F0]/50 leading-relaxed font-medium text-lg md:text-xl italic font-serif border-l border-white/5 pl-6">
                  {v.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative p-12 md:p-20 bg-[#0D0D0E] rounded-[4rem] border-t-2 border-l border-white/10 overflow-hidden mb-24 shadow-[0_80px_150px_-30px_rgba(0,0,0,0.9),0_0_50px_rgba(214,175,55,0.05)] group">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#D4AF37]/10 blur-[120px] rounded-full pointer-events-none group-hover:bg-[#D4AF37]/15 transition-colors duration-1000" />
          <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-[#D4AF37]/5 blur-[100px] rounded-full pointer-events-none" />

          <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

          <div className="relative">
            <div className="flex flex-col gap-10">
              <div className="flex items-center gap-6">
                <div className="text-8xl text-[#D4AF37] font-serif leading-none select-none opacity-80 h-10 flex items-center mb-4">
                  “
                </div>
                <div className="h-[1px] flex-grow bg-gradient-to-r from-[#D4AF37]/40 to-transparent" />
              </div>

              <p className="text-2xl md:text-4xl text-[#F5F5F0] font-medium italic leading-[1.4] font-serif max-w-4xl tracking-tight">
                «Навіть якщо зараз у вас немає готового ТЗ чи контенту – це не
                проблема. Ми почнемо з діалогу, і я допоможу перетворити ваші
                ідеї на результат».
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-12 gap-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]" >
                    <Check className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-[0.4em] mb-1">
                      Personal approach
                    </span>
                    <span className="text-[#F5F5F0]/40 text-xs font-mono uppercase tracking-widest">
                      Consultation first
                    </span>
                  </div>
                </div>

                <div className="hidden md:block h-10 w-[1px] bg-white/10" />

                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-[#F5F5F0]/40 uppercase tracking-[0.4em] mb-1">
                    Status 2026
                  </span>
                  <span className="text-[#D4AF37] text-xs font-mono uppercase tracking-widest flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#D4AF37] animate-pulse" />
                    Ready to start
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
        </div>

        <div className="flex flex-col items-center gap-8">
          <div className="w-px h-16 bg-gradient-to-b from-[#D4AF37] to-transparent" />
          <CtaButton />
        </div>
      </div>
    </section>
  );
}
