import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Політика конфіденційності | Digital Architect',
  description: 'Політика щодо обробки персональних даних та використання файлів cookie.',
  robots: { index: false, follow: true },
};

export default function PrivacyPolicy() {
  const lastUpdated = "11 Січня, 2026";

  return (
    <div className="min-h-screen bg-night text-cream/80 pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        
        <Link 
          href="/" 
          className="group inline-flex items-center gap-2 text-accent font-mono text-[10px] uppercase tracking-[0.3em] mb-16 hover:text-cream transition-colors"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-300" />
          <span>Повернутися на головну</span>
        </Link>

        <div className="mb-20">
          <h1 className="text-4xl md:text-6xl font-serif italic text-cream mb-6 leading-tight">
            Політика <br />
            <span className="text-accent not-italic">конфіденційності</span>
          </h1>
          <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-accent/30" />
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cream/30">
              Останнє оновлення: {lastUpdated}
            </p>
          </div>
        </div>

        <article className="space-y-16 font-sans text-lg font-light leading-relaxed tracking-wide">
          
          <section className="space-y-6">
            <h2 className="text-accent font-mono text-xs uppercase tracking-[0.4em] font-bold">
              1. Загальні положення
            </h2>
            <div className="space-y-4">
              <p>
                1.1. Ця Політика конфіденційності розроблена <span className="text-cream font-medium">ФОП Побегайло Олена Влаленівна</span> (надалі — Виконавець) відповідно до діючого законодавства України «Про захист персональних даних».
              </p>
              <p>
                1.2. Використовуючи цей сайт, ви погоджуєтесь із умовами збору та обробки даних, описаними нижче.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-accent font-mono text-xs uppercase tracking-[0.4em] font-bold">
              2. Які дані збираються
            </h2>
            <div className="space-y-6">
              <p className="text-cream">
                2.1. Дані, які ви надаєте добровільно:  Ім’я, номер телефону, адреса електронної пошти, повідомлення, надіслані через форму зворотного зв'язку.
              </p>
              <p className="text-cream">
                2.2. Автоматичний збір даних: IP-адреса, тип браузера, тривалість сесії, сторінки, які ви відвідали (через інструменти аналітики, такі як Google Analytics або Vercel Analytics).
              </p>
              <p className="text-cream">
                2.3. Файли Cookie: Текстові файли, що зберігаються на вашому пристрої для покращення роботи сайту та аналізу трафіку.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-accent font-mono text-xs uppercase tracking-[0.4em] font-bold">
              3. Мета обробки даних
            </h2>
            <div className="space-y-4">
              <p>3.1. Обробка даних здійснюється з метою:</p>
              <ul className="list-none space-y-3 pl-6 border-l border-white/10">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-accent/40" />
                  <span>Зв'язку із Замовником для обговорення проєктів.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-accent/40" />
                  <span>Надсилання комерційних пропозицій та інформації про послуги.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-accent/40" />
                  <span>Аналізу роботи сайту для покращення користувацького досвіду (UX/UI).</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-accent font-mono text-xs uppercase tracking-[0.4em] font-bold">
              4. Передача даних третім особам
            </h2>
            <div className="space-y-4">
              <p>
                4.1. Виконавець не продає та не передає ваші дані третім особам для маркетингових цілей.
              </p>
              <p>
                4.2. Дані можуть бути передані лише сервісам, необхідним для роботи сайту (наприклад, сервіси хостингу Vercel, сервіси розсилок або CRM), виключно в рамках надання послуг.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-accent font-mono text-xs uppercase tracking-[0.4em] font-bold">
              5. Захист та зберігання даних
            </h2>
            <div className="space-y-4">
              <p>
                5.1. Виконавець вживає необхідних технічних заходів (SSL-шифрування, безпечні сервери) для захисту ваших даних від несанкціонованого доступу.
              </p>
              <p>
                5.2. Дані зберігаються протягом часу, необхідного для досягнення цілей обробки, але не довше, ніж це передбачено законодавством.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-accent font-mono text-xs uppercase tracking-[0.4em] font-bold">
              6. Ваші права
            </h2>
            <div className="space-y-4">
              <p>6.1. Ви маєте право:</p>
              <ul className="list-none space-y-3 pl-6 border-l border-white/10 text-cream/60">
                <li>• Знати, які дані ми зберігаємо.</li>
                <li>• Вимагати виправлення або повного видалення ваших даних.</li>
                <li>• Відмовитися від використання файлів cookie через налаштування вашого браузера.</li>
              </ul>
            </div>
          </section>

          <section className="pt-12 border-t border-white/5 space-y-6">
            <h2 className="text-accent font-mono text-xs uppercase tracking-[0.4em] font-bold">
              7. Контактна інформація
            </h2>
            <p className="text-xl">
              З питань обробки даних ви можете звернутися за адресою: <br />
              <a href="mailto:pobehailo.olena@gmail.com" className="text-cream hover:text-accent transition-colors font-medium">
                pobehailo.olena@gmail.com
              </a>
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}