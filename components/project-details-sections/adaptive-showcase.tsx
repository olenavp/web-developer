import Image from 'next/image';
import { SectionHeader } from '../home-page-sections/section-header';

export function AdaptiveShowcase({ tabletImg, mobileImg }) {
  return (
    <section className="py-24 bg-graphite">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5 space-y-8">
          <SectionHeader
            label="Адаптивність"
            title="Зручність на"
            subtitle="будь-якому пристрої"
          />
          <p className="text-cream/50 text-lg leading-relaxed italic font-serif border-l border-accent/20 pl-6">
            «Більше 70% користувачів заходять зі смартфонів. Розроблено
            інтерфейс, яким днаково користуватися з телефону, планшета чи компʼютера.»
          </p>
        </div>

        <div className="md:col-span-7 flex items-end gap-6">
          <div className="relative w-2/3 aspect-[4/3] rounded-3xl overflow-hidden border-8 border-night shadow-2xl">
            <Image
              src={tabletImg}
              alt="Tablet View"
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="relative w-1/3 aspect-[9/19] rounded-[2.5rem] overflow-hidden border-8 border-night shadow-2xl -mb-10 z-10">
            <Image
              src={mobileImg}
              alt="Mobile View"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
