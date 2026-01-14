'use client';
import Link from 'next/link';
import { AnimatedNumber } from '../Counter';
import { Button } from '../ui/button';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export function ProjectResults({
  project,
  nextProject,
}: {
  project: any;
  nextProject?: any;
}) {
  const stats = [
    { label: 'Performance', value: project.stats?.performance || 100 },
    { label: 'Accessibility', value: project.stats?.accessibility || 100 },
    { label: 'Best Practices', value: project.stats?.bestPractices || 100 },
    { label: 'SEO Score', value: project.stats?.seo || 100 },
  ];

  return (
    /* bg-night тепер використовує #111112 */
    <section className="py-32 bg-night relative overflow-hidden">
      {/* Підняли світіння внизу секції до 10% для фінального акценту */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[40%] bg-accent/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-24">
          {/* Мітка Lighthouse піднята до accent/80 — це критично важливий заголовок */}
          <span className="text-[12px] font-mono text-accent/80 uppercase tracking-[0.4em] mb-16 block font-bold">
            [ Технічні показники Google Lighthouse ]
          </span>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="space-y-4">
                {/* Цифри залишаємо в чистому accent для максимального фокусу */}
                <div className="text-4xl md:text-7xl font-bold text-accent font-mono tracking-tighter flex items-center justify-center">
                  <AnimatedNumber value={stat.value} />
                  <span>%</span>
                </div>
                {/* Підписи показників Lighthouse підняті з cream/30 до cream/60 */}
                <div className="text-[9px] md:text-[11px] text-cream/60 uppercase tracking-[0.2em] font-bold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/*  */}

        {/* Блок резюме: роздільна лінія піднята до white/10 */}
        <div className="relative py-24 border-t border-white/10 mb-24 text-left">
          <div className="max-w-3xl mx-auto space-y-10">
            {/* Мітка Резюме піднята до accent/80 */}
            <span className="text-[12px] font-mono text-accent/80 uppercase tracking-[0.4em] font-bold">
              [ Резюме проєкту ]
            </span>
            {/* Текст висновку піднято з cream/80 до cream/95 */}
            <p className="text-xl md:text-2xl text-cream/95 font-serif italic leading-relaxed tracking-wide">
              {project.conclusion ||
                'Проєкт реалізований із фокусом на архітектурну чистоту та максимальну продуктивність.'}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-16">
          <Link href={project.link} target="_blank">
            {/* Кнопка Відвідати сайт стала ще помітнішою завдяки насиченому градієнту */}
            <Button
              variant="default"
              size="lg"
              className="h-20 px-12 rounded-full text-lg group bg-gradient-to-b from-accent-light to-accent text-night font-bold shadow-2xl"
            >
              Відвідати сайт
              <ArrowUpRight className="ml-3 w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
            </Button>
          </Link>

          {nextProject && (
            <Link
              href={`/projects/${nextProject.id}`}
              className="group flex flex-col items-center gap-4 transition-all duration-500 hover:scale-105"
            >
              {/* Підпис наступного кейсу піднято до cream/70 */}
              <span className="text-[12px] font-mono text-cream/70 uppercase tracking-[0.4em]">
                Наступний кейс
              </span>
              <div className="flex items-center gap-4 text-cream/95 group-hover:text-accent transition-colors">
                <span className="text-2xl font-serif italic">
                  {nextProject.projectName}
                </span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
