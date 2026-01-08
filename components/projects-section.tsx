'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { projects } from '../assets/project-data';
import CtaButton from './CtaButton';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from './section-header';

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-32 px-6 sm:px-10 lg:px-12 bg-night relative overflow-hidden"
    >
      <div className="absolute top-1/4 left-0 w-[40%] h-[40%] bg-accent/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[30%] h-[30%] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <SectionHeader
          label="Вибрані роботи"
          title="Від ідеї"
          subtitle="до реалізації"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-full"
            >
              <Link
                href={`/projects/${project.id}`}
                className="group block h-full"
              >
                <div className="flex flex-col h-full bg-gradient-to-br from-graphite-light to-[#121416] rounded-[2.5rem] overflow-hidden border border-card-border transition-all duration-700 ease-[0.22, 1, 0.36, 1] group-hover:border-accent/30 group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] group-hover:-translate-y-3 relative">
                  <div className="absolute left-10 right-10 top-0 h-[1px] bg-white/10 group-hover:bg-accent/40 transition-colors duration-700" />

                  <div className="relative aspect-[16/11] overflow-hidden rounded-t-[2.5rem] shrink-0">
                    <Image
                      src={project.image}
                      alt={project.projectName}
                      fill
                      className="object-contain object-top transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-graphite-light via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-700" />
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-cream mb-4 tracking-tight group-hover:text-accent transition-colors duration-500">
                      {project.projectName}
                    </h3>

                    <p className="text-cream-muted text-base leading-relaxed font-medium mb-10 line-clamp-4 italic font-serif">
                      {project.about}
                    </p>

                    <div className="mt-auto flex items-center gap-4 text-accent font-bold text-[12px] uppercase tracking-[0.2em]">
                      <div className="w-10 h-10 rounded-full border border-accent/20 flex items-center justify-center bg-night/50 group-hover:bg-accent group-hover:text-night transition-all duration-500 shadow-xl">
                        <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-0.5" />
                      </div>
                      <span className="opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                        Переглянути кейс
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center gap-10">
          <div className="text-center space-y-6">
            <p className="text-cream/30 font-serif italic text-2xl md:text-3xl max-w-2xl leading-relaxed">
              «Кожен проєкт — це окрема історія трансформації бізнесу».
            </p>
            <div className="w-12 h-[1px] bg-accent/30 mx-auto" />
          </div>

          <div className="flex flex-col items-center gap-8">
            <div className="w-px h-16 bg-gradient-to-b from-accent to-transparent" />
            <CtaButton />
          </div>
        </div>
      </div>
    </section>
  );
}
