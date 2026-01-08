'use client';
import CtaButton from './CtaButton';
import { motion } from 'framer-motion';

export function ClientsProblemsSection() {
  const items = [
    {
      number: '01',
      title: 'Немає сайту',
      problem:
        'Маєте ідею, але не знаєте, як перетворити її на працюючий продукт.',
      solution:
        'Проектую структуру та логіку, де кожен елемент веде до цільової дії.',
      result: 'Фундамент для масштабування',
    },
    {
      number: '02',
      title: 'Обмеження конструкторів',
      problem: 'Конструктори гальмують завантаження та не дають унікальності. Типові шаблони гальмують розвиток та роблять вас "одним із багатьох".',
      solution:
        'Розробка на чистому коді: повна свобода функцій та миттєве завантаження.',
      result: 'Технологічна свобода',
    },
    {
      number: '03',
      title: 'Низька швидкість та погана адаптивність',
      problem:
        'Сайт довго вантажиться, це дратує відвідувачів.',
      solution:
        'Ультра-швидке завантаження та бездоганний досвід на смартфонах. Оптимізація швидкості до рівня Google Green Zone.',
      result: 'Максимальна конверсія',
    },
  ];

  return (
    <section
      id="problems"
      className="py-32 px-6 sm:px-10 lg:px-12 bg-[#16181A] relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[30%] h-[30%] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[1px] bg-[#D4AF37]" />
            <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-[0.4em]">
              Навіщо це вам
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[#F5F5F0] leading-[1.1] tracking-tight font-serif italic">
            Вирішую проблеми, <br />
            <span className="font-sans not-italic text-[#F5F5F0]/20">
              що зупиняють ваш ріст
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="group relative h-[400px] bg-[#0D0D0E] rounded-[3rem] overflow-hidden border border-white/[0.03] transition-all duration-700 hover:border-[#D4AF37]/30 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)]"
            >
              <div className="p-8 h-full flex flex-col justify-between transition-all duration-700 group-hover:scale-95 group-hover:opacity-0">
                <div>
                  <div className="text-5xl font-serif italic text-[#D4AF37]/50 mb-4 group-hover:text-[#D4AF37]/30 transition-colors">
                    {item.number}
                  </div>
                  <h3 className="text-2xl font-bold text-[#F5F5F0] mb-2 leading-tight tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-base text-[#F5F5F0]/50 leading-relaxed font-medium">
                    {item.problem}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-bold">
                  <span className="w-8 h-8 rounded-full border border-[#D4AF37]/20 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-[#0D0D0E] transition-all">
                    →
                  </span>
                  <span>Як я це вирішу</span>
                </div>
              </div>

              <div className="absolute inset-0 p-8 flex flex-col justify-center bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.22, 1, 0.36, 1]">
                <div className="mb-8">
                  <span className="text-[10px] font-mono text-[#0D0D0E]/50 mb-2 block uppercase tracking-[0.3em]">
                    [ Рішення ]
                  </span>
                  <h4 className="text-[#0D0D0E] text-2xl font-bold leading-tight tracking-tight">
                    Мій метод
                  </h4>
                </div>

                <p className="text-base text-[#0D0D0E]/90 font-medium leading-relaxed mb-10">
                  {item.solution}
                </p>

                <div className="pt-8 border-t border-[#0D0D0E]/10">
                  <span className="text-[10px] uppercase text-[#0D0D0E]/40 font-bold block mb-2 tracking-widest">
                    Результат
                  </span>
                  <span className="text-[#0D0D0E] font-bold text-lg leading-none">
                    {item.result}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 flex flex-col items-center gap-6">
          <div className="w-px h-16 bg-gradient-to-b from-[#D4AF37] to-transparent" />
          <CtaButton />
        </div>
      </div>
    </section>
  );
}
