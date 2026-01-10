import Link from "next/link";
import { AnimatedNumber } from "../Counter";
import { Button } from "../ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function ProjectResults({ project, nextProject }: { project: any, nextProject?: any }) {
  const stats = [
    { label: 'Performance', value: project.stats?.performance || 100 },
    { label: 'Accessibility', value: project.stats?.accessibility || 100 },
    { label: 'Best Practices', value: project.stats?.bestPractices || 100 },
    { label: 'SEO Score', value: project.stats?.seo || 100 }
  ];

  return (
    <section className="py-32 bg-graphite relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[40%] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <div className="mb-24">
          <span className="text-[12px] font-mono text-accent uppercase tracking-[0.4em] mb-16 block opacity-60">
            [ Технічні показники Google Lighthouse ]
          </span>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="space-y-4">
                <div className="text-4xl md:text-7xl font-bold text-accent font-mono tracking-tighter flex items-center justify-center">
                  <AnimatedNumber value={stat.value} />
                  <span>%</span>
                </div>
                <div className="text-[9px] md:text-[11px] text-cream/30 uppercase tracking-[0.2em] font-bold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative py-24 border-t border-white/5 mb-24 text-left">
          <div className="max-w-3xl mx-auto space-y-10">
             <span className="text-[12px] font-mono text-accent uppercase tracking-[0.4em] font-bold">
               [ Резюме проєкту ]
             </span>
             <p className="text-xl md:text-2xl text-cream/80 font-serif italic leading-relaxed tracking-wide">
               {project.conclusion || "Проєкт реалізований із фокусом на архітектурну чистоту та максимальну продуктивність."}
             </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-16">
          <Link href={project.link} target="_blank">
            <Button variant="default" size="lg" className="h-20 px-12 rounded-full text-lg group bg-gradient-to-b from-accent-light to-accent">
              Відвідати сайт
              <ArrowUpRight className="ml-3 w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
            </Button>
          </Link>

          {nextProject && (
            <Link href={`/projects/${nextProject.id}`} className="group flex flex-col items-center gap-4 transition-all duration-500 hover:scale-105">
              <span className="text-[12px] font-mono text-cream/20 uppercase tracking-[0.4em]">Наступний кейс</span>
              <div className="flex items-center gap-4 text-cream/40 group-hover:text-accent transition-colors">
                <span className="text-2xl font-serif italic">{nextProject.projectName}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}