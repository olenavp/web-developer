'use client';
import { useState } from 'react';
import CtaButton from '../CtaButton';
import { CustomAccordionItem } from '../ui/accordion';
import { SectionHeader } from './section-header';
import VerticalLine from '../VerticalLine';
import HorizontalLine from '../HorizontalLine';

export function FAQSection() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="py-32 px-6 sm:px-10 lg:px-12 bg-night relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-accent/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <SectionHeader
              label="Питання та відповіді"
              title="Часті питання:"
              subtitle="що варто знати перед стартом"
            />
          </div>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <CustomAccordionItem
              key={index}
              title={faq.question}
              description={faq.answer}
              isOpen={activeFaq === index}
              onClick={() => setActiveFaq(activeFaq === index ? null : index)}
              number={(index + 1).toString().padStart(2, '0')}
            />
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center text-center">
          <div className="space-y-8 mb-12">
            <p className="text-cream-muted font-serif italic text-2xl md:text-3xl max-w-xl leading-relaxed">
              «Не знайшли відповіді на своє питання? Обговорімо його особисто».
            </p>
            <HorizontalLine />
          </div>

          <div className="flex flex-col items-center gap-8">
            <VerticalLine />
            <CtaButton />
          </div>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    question: 'Скільки часу займає створення сайту?',
    answer:
      'Терміни залежать від масштабу. Простий лендінг ми запустимо за 7-10 днів. Складні корпоративні сайти або сервіси потребують від 4 до 8 тижнів для повного циклу розробки «під ключ».',
  },
  {
    question: 'Чи зможу я самостійно редагувати контент?',
    answer:
      'Так, якщо це потрібно. Я інтегрую зручну систему управління (CMS), де ви зможете змінювати тексти, додавати фото та публікувати новини. Я також надаю інструкцію з користування.',
  },
  {
    question: 'Що входить у підтримку після запуску?',
    answer:
      'Перший місяць технічної підтримки безкоштовний: я стежу за стабільністю, виправляю баги, якщо вони є, та консультую. Далі ми можемо домовитись про регулярний супровід та розвиток функціоналу.',
  },
  {
    question: 'Як відбувається оплата?',
    answer:
      'Фінансові умови ми обговорюємо індивідуально, виходячи з масштабу проєкту. Основний розрахунок відбувається після того, як ви протестували сайт та ми переконалися в його повній готовності до публічного запуску. Тільки після фінального узгодження результату я передаю вам повний доступ до проєкту та відкриваю його для відвідувачів.',
  },
];
