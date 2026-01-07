'use client';
import { useState } from 'react';
import CtaButton from './CtaButton';
import { CustomAccordionItem } from './ui/accordion';

export function FAQSection() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1A1C1E]">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-[0.2em] block mb-4">
            [ Питання та відповіді ]
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F0] font-serif italic tracking-tight">
            Часті{' '}
            <span className="font-sans not-italic text-[#F5F5F0]/30">
              запитання
            </span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <CustomAccordionItem
              key={index}
              title={faq.question}
              isOpen={activeFaq === index}
              onClick={() => setActiveFaq(activeFaq === index ? null : index)}
            >
              <div className="space-y-4">
                <p className="leading-relaxed">{faq.answer}</p>
              </div>
            </CustomAccordionItem>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center text-center space-y-8">
          <p className="text-[#F5F5F0]/40 font-serif italic text-lg max-w-md">
            Не знайшли відповіді на своє питання? Давайте обговоримо його
            особисто.
          </p>
          <CtaButton />
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
