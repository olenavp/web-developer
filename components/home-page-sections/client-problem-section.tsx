'use client';
import CtaButton from '../CtaButton';
import { motion } from 'framer-motion';
import FadeIn from '../FadeIn';
import { Send } from 'lucide-react';
import { SectionHeader } from './section-header';
import VerticalLine from '../VerticalLine';

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
      problem:
        'Конструктори гальмують завантаження та не дають унікальності. Типові шаблони гальмують розвиток та роблять вас "одним із багатьох".',
      solution:
        'Розробка на чистому коді: повна свобода функцій та миттєве завантаження.',
      result: 'Технологічна свобода',
    },
    {
      number: '03',
      title: 'Низька швидкість та погана адаптивність',
      problem: 'Сайт довго вантажиться, це дратує відвідувачів.',
      solution:
        'Ультра-швидке завантаження та бездоганний досвід на смартфонах. Оптимізація швидкості до рівня Google Green Zone.',
      result: 'Максимальна конверсія',
    },
  ];

  return (
    <section
      id="problems"
      className="py-32 px-6 sm:px-10 lg:px-12 bg-graphite relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[30%] h-[30%] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Навіщо це вам"
          title="Вирішую проблеми"
          subtitle="що зупиняють ваш ріст"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item, index) => (
            <FadeIn key={index} delay={0.2 + index * 0.1}>
              <div className="group relative h-[420px] md:h-[450px] bg-gradient-to-br from-graphite-light to-night rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border border-card-border transition-all duration-700 hover:border-accent/30 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)]">
                <div className="absolute left-8 right-8 top-0 h-[1px] bg-white/10 group-hover:bg-accent/40 transition-colors duration-700" />

                <div className="p-5 md:p-6 lg:p-8 h-full flex flex-col justify-between transition-all duration-700 ease-[0.22, 1, 0.36, 1] group-hover:scale-95 group-hover:opacity-0">
                  <div>
                    <div className="text-5xl lg:text-6xl font-serif italic text-accent/20 mb-4 lg:mb-6 group-hover:text-accent/40 transition-colors">
                      {item.number}
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-cream mb-3 lg:mb-4 leading-tight tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm lg:text-base text-cream-muted leading-relaxed font-medium italic font-serif">
                      {item.problem}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] text-accent font-bold">
                    <div className="w-10 h-10 rounded-full border border-accent/20 flex items-center justify-center bg-night/50">
                      <span className="text-lg">→</span>
                    </div>
                    <span className="hidden sm:inline">Як я це вирішу</span>
                  </div>
                </div>

                <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-center bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.22, 1, 0.36, 1]">
                  <div className="mb-6 lg:mb-8 relative">
                    <Send className="absolute -top-10 -right-4 w-24 h-24 lg:w-32 lg:h-32 text-night/5 rotate-12" />

                    <span className="text-[12px] lg:text-[12px] font-mono text-night/50 mb-2 block uppercase tracking-[0.4em] font-bold">
                      [ Рішення ]
                    </span>
                    <h4 className="text-night text-2xl lg:text-3xl font-bold leading-tight tracking-tight">
                      Мій метод
                    </h4>
                  </div>

                  <p className="text-base lg:text-lg text-night font-medium leading-[1.25] mb-8 lg:mb-12 italic font-serif">
                    {item.solution}
                  </p>

                  <div className="pt-6 lg:pt-8 border-t border-night/15">
                    <span className="text-[12px] lg:text-[12px] uppercase text-night/40 font-bold block mb-2 tracking-[0.3em]">
                      Результат
                    </span>
                    <span className="text-night font-bold text-lg lg:text-xl leading-none">
                      {item.result}
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.6}>
          <div className="mt-20 flex flex-col items-center gap-10">
            <VerticalLine />
            <CtaButton />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
