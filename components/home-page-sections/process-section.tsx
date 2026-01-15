'use client';
import { useState } from 'react';
import CtaButton from '../CtaButton';
import { CustomAccordionItem } from '../ui/accordion';
import { SectionHeader } from './section-header';
import VerticalLine from '../VerticalLine';
import { Section } from '../Section';

const steps = [
  {
    number: '01',
    title: 'Обговорення проєкту',
    description:
      "З'ясовуємо цілі вашого сайту та основні потреби бізнесу. Ви розповідаєте про свій продукт і цільову аудиторію, а я уточнюю деталі для планування сайту.",
    clientRole: 'Ділилися інформацією про бізнес та клієнтів',
    result: 'Чітке розуміння задач і основи для структури сайту',
  },
  {
    number: '02',
    title: 'Планування та структура',
    description:
      'Створюю логічну структуру сайту, продумую шлях користувача та узгоджую ключові рішення для дизайну та функціоналу.',
    clientRole: "Даєте зворотній зв'язок щодо структури та пріоритетів",
    result: 'План сайту з чітким розумінням розділів і сторінок',
  },
  {
    number: '03',
    title: 'Дизайн та розробка',
    description:
      'Розробляю дизайн та функціонал сайту. Ви можете переглядати проміжні результати і коригувати напрямок роботи.',
    clientRole: 'Надаєте правки та зауваження щодо дизайну і функцій',
    result:
      'Сайт, який відповідає вашим очікуванням за зовнішнім виглядом і роботою',
  },
  {
    number: '04',
    title: 'Тестування та запуск',
    description:
      'Перевіряю роботу сайту на різних пристроях та браузерах і запускаю проєкт для відвідувачів.',
    clientRole: 'Тестуєте сайт і підтверджуєте готовність до запуску',
    result: 'Сайт працює стабільно та готовий приймати відвідувачів',
  },
  {
    number: '05',
    title: 'Підтримка та розвиток',
    description:
      'Після запуску залишаюсь на зв’язку. Допомагаю з питаннями, виправляю помилки та додаю нові функції за потреби.',
    clientRole:
      'Користуєтесь сайтом та звертаєтесь за допомогою при необхідності',
    result: 'Сайт стабільний і розвивається разом з вашим бізнесом',
  },
];

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <Section
      id="process"
      className="bg-night"
      withGlow={true}
      glowPosition="top-left"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Етапи співпраці"
          title="Від ідеї до результату:"
          subtitle="прозорий шлях розробки"
        />

        <div className="space-y-6">
          {steps.map((step, index) => (
            <CustomAccordionItem
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              clientRole={step.clientRole}
              result={step.result}
              isOpen={activeStep === index}
              onClick={() => setActiveStep(activeStep === index ? null : index)}
            />
          ))}
        </div>

        <div className="mt-24 flex flex-col items-center gap-8">
          <VerticalLine />
          <CtaButton />
        </div>
      </div>
    </Section>
  );
}
