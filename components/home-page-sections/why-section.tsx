'use client';
import { Check } from 'lucide-react';
import CtaButton from '../CtaButton';
import { SectionHeader } from './section-header';
import VerticalLine from '../VerticalLine';

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
    <section className="py-32 px-6 sm:px-10 lg:px-12 bg-graphite relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-accent/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <SectionHeader
          label="Формат роботи"
          title="Більше ніж розробка:"
          subtitle="принципи моєї роботи"
        />
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {values.map((v, i) => (
            <div
              key={i}
              className="relative group bg-gradient-to-br from-graphite-light to-night p-6 lg:p-10 rounded-[2.5rem] border border-card-border hover:border-accent/30 transition-all duration-700 shadow-2xl"
            >
              <div className="absolute left-8 right-8 top-0 h-[1px] bg-white/10 group-hover:bg-accent/40 transition-colors duration-700" />

              <div className="relative">
                <div className="flex items-center gap-4 lg:gap-6 mb-6 lg:mb-8">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 shrink-0 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shadow-inner transform group-hover:scale-110 transition-transform duration-500">
                    <Check
                      className="w-6 h-6 lg:w-7 lg:h-7"
                      strokeWidth={2.5}
                    />
                  </div>

                  <h3 className="text-lg lg:text-2xl font-bold text-cream tracking-tight group-hover:text-accent transition-colors duration-500">
                    {v.title}
                  </h3>
                </div>

                <p className="text-cream-muted leading-relaxed font-medium text-base lg:text-xl italic font-serif border-l border-card-border pl-5 lg:pl-6">
                  {v.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative p-12 md:p-20 bg-night rounded-[4rem] border-t-2 border-l border-white/10 overflow-hidden mb-24 shadow-[0_80px_150px_-30px_rgba(0,0,0,0.9),0_0_50px_rgba(214,175,55,0.05)] group">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-accent/10 blur-[120px] rounded-full pointer-events-none group-hover:bg-accent/15 transition-colors duration-1000" />
          <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-accent]/5 blur-[100px] rounded-full pointer-events-none" />

          <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

          <div className="relative">
            <div className="flex flex-col gap-10">
              <div className="flex items-center gap-6">
                <div className="text-8xl text-accent font-serif leading-none select-none opacity-80 h-10 flex items-center mb-4">
                  “
                </div>
                <div className="h-[1px] flex-grow bg-gradient-to-r from-accent/40 to-transparent" />
              </div>

              <p className="text-2xl md:text-4xl text-cream font-medium italic leading-[1.4] font-serif max-w-4xl tracking-tight">
                «Навіть якщо зараз у вас немає готового ТЗ чи контенту – це не
                проблема. Ми почнемо з діалогу, і я допоможу перетворити ваші
                ідеї на результат».
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-12 gap-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-accent/30 flex items-center justify-center text-accent">
                    <Check className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[12px] font-mono text-accent uppercase tracking-[0.4em] mb-1">
                      Personal approach
                    </span>
                    <span className="text-cream-muted text-xs font-mono uppercase tracking-widest">
                      Consultation first
                    </span>
                  </div>
                </div>

                <div className="hidden md:block h-10 w-[1px] bg-white/10" />

                <div className="flex flex-col">
                  <span className="text-[12px] font-mono text-cream-muted uppercase tracking-[0.4em] mb-1">
                    Status 2026
                  </span>
                  <span className="text-accent text-xs font-mono uppercase tracking-widest flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-accent animate-pulse" />
                    Ready to start
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
        </div>

        <div className="flex flex-col items-center gap-8">
          <VerticalLine />
          <CtaButton />
        </div>
      </div>
    </section>
  );
}
