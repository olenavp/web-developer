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
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#D4AF37]/10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-[0.2em] block mb-4">
            [ Формат роботи ]
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1C1E] tracking-tight font-serif italic leading-tight">
            Більше ніж розробка: <br />
            <span className="font-sans not-italic text-[#1A1C1E]/30">
              принципи моєї роботи
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {values.map((v, i) => (
            <div
              key={i}
              className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 border border-black/[0.02] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                    <Check className="w-6 h-6" strokeWidth={3} />
                  </div>

                  <h3 className="text-xl font-bold text-[#1A1C1E] uppercase tracking-tight">
                    {v.title}
                  </h3>
                </div>
                <p className="text-[#1A1C1E]/60 leading-relaxed font-medium text-base">
                  {v.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative p-10 bg-white/80 backdrop-blur-md rounded-[3.5rem] border border-white overflow-hidden mb-16 shadow-sm">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#D4AF37]/20 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#D4AF37]/20 blur-[80px] rounded-full pointer-events-none" />

          <div className="relative flex flex-col md:flex-row md:items-center gap-8">
            <div className="text-7xl text-[#D4AF37]/30 font-serif select-none h-10 flex items-center">
              “
            </div>
            <p className="text-xl md:text-2xl text-[#1A1C1E]/80 font-medium italic leading-relaxed font-serif">
              «Навіть якщо зараз у вас немає готового ТЗ чи контенту – це не
              проблема. Ми почнемо з діалогу, і я допоможу перетворити ваші ідеї
              на структурований результат».
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <CtaButton />
        </div>
      </div>
    </section>
  );
}
