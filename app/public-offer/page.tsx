import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Публічна оферта',
  robots: { index: false, follow: true },
};

export default function PublicOffer() {
  return (
    <div className="min-h-screen bg-night text-cream/85 pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="group flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-widest mb-12 hover:text-cream transition-colors"
        >
          <ArrowLeft
            size={14}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Назад до сайту
        </Link>

        <h1 className="text-4xl md:text-5xl font-serif italic text-cream mb-4">
          Публічна <span className="text-accent not-italic">оферта</span>
        </h1>
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/55 mb-16">
          Останнє оновлення: 11 Січня, 2026
        </p>

        <article className="prose prose-invert max-w-none space-y-12 font-sans font-light leading-relaxed tracking-wide text-lg">
          <section className="space-y-4">
            <h2 className="text-accent font-mono text-sm uppercase tracking-widest font-bold">
              1. Загальні положення
            </h2>
            <p>
              1.1. Цей документ є публічною офертою (пропозицією) Виконавця{' '}
              <strong className="text-cream font-medium">
                ФОП Побегайло Олена Влаленівна
              </strong>
              , адресованою будь-якій фізичній або юридичній особі (надалі —
              Замовник).
            </p>
            <div className="space-y-4">
              <p>
                1.2. Акцептом (прийняттям) цієї оферти вважається настання
                будь-якої з подій:
              </p>
              <ul className="list-none space-y-3 pl-6 border-l-2 border-accent/40 bg-accent/8 py-6 rounded-r-2xl">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-accent" />
                  <span>
                    Надання Замовником Виконавцю матеріалів та вихідних даних
                    для початку роботи.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-accent" />
                  <span>
                    Надання Замовником Виконавцю доступів до хостингу або
                    сервісів.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-accent" />
                  <span>
                    Письмове підтвердження погодженого переліку робіт (ТЗ).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-accent" />
                  <span>
                    Здійснення Замовником повної або часткової оплати послуг.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-accent font-mono text-xs uppercase tracking-[0.4em] font-bold">
              2. Предмет договору
            </h2>
            <p>
              2.1. Виконавець надає послуги з розробки, дизайну або підтримки, а
              Замовник приймає та оплачує їх за фактом виконання погоджених
              етапів.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-accent font-mono text-xs uppercase tracking-[0.4em] font-bold">
              3. Порядок оплати
            </h2>
            <div className="space-y-4">
              <p>
                3.1. Вартість робіт визначається на основі погодженої оцінки
                кожного окремого етапу.
              </p>
              <p className="text-cream font-medium">
                3.2. Оплата здійснюється за кожен фактично виконаний та
                прийнятий Замовником етап роботи. Роботи вважаються прийнятими,
                якщо Замовник протягом 3-х днів не надав письмових зауважень.
              </p>
              <p>
                3.3. Виконавець передає доступи до фінальних результатів етапу
                виключно після отримання 100% оплати за цей етап.
              </p>
            </div>
          </section>

          <section className="space-y-6 bg-accent/10 p-8 border border-accent/20 rounded-2xl relative overflow-hidden">
            <ShieldCheck className="absolute -right-4 -bottom-4 w-32 h-32 text-accent/10 rotate-12" />
            <h2 className="text-accent font-mono text-xs uppercase tracking-[0.4em] font-bold">
              4. Інтелектуальна власність
            </h2>
            <div className="space-y-4 relative z-10">
              <p>
                4.1. Усі результати робіт (код, дизайн, архітектура) є власністю
                Виконавця до моменту повної оплати відповідного етапу
                Замовником.
              </p>
              <p className="font-medium text-cream">
                4.2. У разі несплати за виконаний етап, Замовник не має права
                використовувати результати роботи.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-accent font-mono text-xs uppercase tracking-[0.4em] font-bold">
              5. Права та обов'язки
            </h2>
            <p>
              5.2. Замовник зобов’язаний надати всі необхідні доступи та контент
              протягом 3 робочих днів. Затримка з боку Замовника автоматично
              подовжує загальні терміни проєкту.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-accent font-mono text-xs uppercase tracking-[0.4em] font-bold">
              6. Відповідальність
            </h2>
            <p>
              6.2. Сукупна відповідальність Виконавця обмежена сумою, фактично
              сплаченою Замовником за поточний етап робіт.
            </p>
          </section>

          <section className="pt-12 border-t border-white/15 space-y-4 text-sm text-cream/75 italic">
            <h2 className="text-accent font-mono text-xs uppercase tracking-widest font-bold not-italic">
              7. Реквізити
            </h2>
            <p className="not-italic">
              <span className="text-cream font-medium">
                ФОП Побегайло Олена Влаленівна
              </span>
              <br />
              <a
                href="mailto:pobehailo.olena@gmail.com"
                className="text-accent hover:text-cream underline underline-offset-4 decoration-accent/30 transition-all mt-2 inline-block"
              >
                pobehailo.olena@gmail.com
              </a>
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
