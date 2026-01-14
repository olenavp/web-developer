import Link from 'next/link';
import { Project } from '@/app/interfaces/interfaces';

export function ProjectHero({ project }: { project: Project }) {
  return (
    <section className="pt-32 pb-20 px-6 bg-night relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-[60%] h-[60%] bg-accent/5 blur-[140px] rounded-full pointer-events-none" />
      
      <div className="mb-8 flex items-center gap-4">
        <Link
          href="/#projects"
          className="text-[12px] font-mono text-cream/60 uppercase tracking-[0.3em] hover:text-accent transition-colors"
        >
          ← Повернутись до проєктів
        </Link>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="mb-20 flex flex-col gap-8">
          <div className="space-y-6 max-w-4xl">
            <span className="text-accent/80 font-mono uppercase tracking-[0.4em] text-[12px] font-bold">
              [ Case Study ]
            </span>
            <h3 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold text-cream font-serif italic leading-[1] tracking-tighter">
              {project.projectName}
            </h3>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 border-l border-accent/30 pl-8 ml-2">
            <p className="text-xl md:text-2xl text-cream-muted font-medium max-w-2xl leading-relaxed italic font-serif">
              {project.brief}
            </p>
            <div className="flex items-center gap-3 text-accent/80 font-mono text-[12px] uppercase tracking-[0.2em]">
              <span className="text-[80px] text-accent animate-bounce">↓</span>
              Scroll
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-12 py-16 border-y border-white/10">
          {[
            { label: 'Галузь', value: project.industry },
            { label: 'Проєкт', value: project.type },
            { label: 'Фокус', value: project.focus },
          ].map((item, i) => (
            <div key={i} className="space-y-3">
              <span className="text-[12px] font-mono text-accent/80 uppercase tracking-[0.4em] font-bold">
                {item.label}
              </span>
              <p className="text-cream text-lg md:text-xl font-bold tracking-tight">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
