'use client';
import CtaButton from './CtaButton';

export function ClientsProblemsSection() {
  const items = [
    {
      number: '01',
      title: 'Немає сайту та стратегії',
      problem: 'Маєте ідею, але не знаєте, як перетворити її на працюючий продукт.',
      solution: 'Проектую структуру та логіку, де кожен елемент веде до цільової дії.',
      result: 'Готовий фундамент',
    },
    {
      number: '02',
      title: 'Обмеження конструкторів',
      problem: 'Конструктори гальмують завантаження та не дають унікальності.',
      solution: 'Розробка на чистому коді: повна свобода функцій та миттєве завантаження.',
      result: 'Технологічна свобода',
    },
    {
      number: '03',
      title: 'Втрата мобільного трафіку',
      problem: 'Сайт незручний на смартфонах, через що ви втрачаєте до 70% клієнтів.',
      solution: 'Mobile-first підхід та оптимізація швидкості до рівня Google Green Zone.',
      result: 'Максимальна конверсія',
    },
  ];

  return (
    <section id="problems" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1F2124] border-y border-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-16">
          <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-[0.2em] block mb-3">
            [ Навіщо вам сайт під ключ ]
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#F5F5F0] tracking-tight font-serif italic">
            Вирішую проблеми,{' '}
            <span className="font-sans not-italic text-[#F5F5F0]/40">
              що заважають рости
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="group relative h-[320px] bg-[#232629] rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-black/40 transition-all duration-500 ease-out border border-white/5"
            >
              <div className="p-10 h-full flex flex-col justify-between transition-transform duration-500 group-hover:-translate-y-4">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-[12px] font-mono text-[#D4AF37] uppercase tracking-widest">
                      Проблема {item.number}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#F5F5F0] mb-4 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#F5F5F0]/60 leading-relaxed font-medium">
                    {item.problem}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#D4AF37]/50 font-bold group-hover:text-[#D4AF37] transition-colors">
                  <span>Рішення</span>
                  <span className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center">
                    →
                  </span>
                </div>
              </div>

              <div className="absolute inset-0 p-10 flex flex-col justify-center bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16, 1, 0.3, 1]">
                <span className="text-[10px] font-mono text-[#1A1C1E]/60 mb-4 block uppercase tracking-widest">
                  [ Мій метод ]
                </span>
                <h4 className="text-[#1A1C1E] text-xl font-bold mb-4 leading-tight">
                  Ваш новий стандарт
                </h4>
                <p className="text-sm text-[#1A1C1E]/80 font-medium leading-relaxed mb-8">
                  {item.solution}
                </p>
                <div className="pt-6 border-t border-[#1A1C1E]/20">
                  <span className="text-[9px] uppercase text-[#1A1C1E]/60 font-bold block mb-1">
                    Очікуваний результат
                  </span>
                  <span className="text-[#1A1C1E] font-bold text-sm uppercase tracking-wide">
                    {item.result}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <CtaButton />
        </div>
      </div>
    </section>
  );
}
