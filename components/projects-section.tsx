"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "../assets/project-data";
import CtaButton from "./CtaButton";
import { ArrowRight } from "lucide-react";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-6 sm:px-10 lg:px-12 bg-[#0D0D0E] relative overflow-hidden">
      
      <div className="absolute top-1/4 left-0 w-[40%] h-[40%] bg-[#D4AF37]/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[30%] h-[30%] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">

        <div className="mb-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[1px] bg-[#D4AF37]" />
            <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-[0.4em]">
              [ Вибрані роботи ]
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[#F5F5F0] tracking-tight font-serif italic leading-[1.1]">
            Від ідеї <span className="font-sans not-italic text-[#F5F5F0]/20">до реалізації</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href={`/projects/${project.id}`} className="group block h-full">
                <div className="h-full bg-gradient-to-br from-[#1A1C1E] to-[#121416] rounded-[2.5rem] overflow-hidden border border-white/5 transition-all duration-700 ease-[0.22, 1, 0.36, 1] group-hover:border-[#D4AF37]/30 group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] group-hover:-translate-y-3 relative">
                  
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-white/10 group-hover:bg-[#D4AF37]/40 transition-colors duration-700" />

                  <div className="relative aspect-[16/11] overflow-hidden rounded-t-[2.5rem]">
                    <Image
                      src={project.image}
                      alt={project.projectName}
                      fill
                      className="object-contain object-top transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1C1E] via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-700" />
                  </div>

                  <div className="p-6 pt-4 flex flex-col h-fit">
                    <h3 className="text-2xl font-bold text-[#F5F5F0] mb-4 tracking-tight group-hover:text-[#D4AF37] transition-colors duration-500">
                      {project.projectName}
                    </h3>

                    <p className="text-[#F5F5F0]/50 text-base leading-relaxed font-medium mb-10 line-clamp-3 italic font-serif">
                      {project.about}
                    </p>

                    <div className="mt-auto flex items-center gap-4 text-[#D4AF37] font-bold text-[10px] uppercase tracking-[0.2em]">
                      <div className="w-10 h-10 rounded-full border border-[#D4AF37]/20 flex items-center justify-center bg-[#0D0D0E]/50 group-hover:bg-[#D4AF37] group-hover:text-[#0D0D0E] transition-all duration-500 shadow-xl">
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

        <div className="mt-32 flex flex-col items-center gap-10">
          <div className="text-center space-y-6">
            <p className="text-[#F5F5F0]/30 font-serif italic text-2xl md:text-3xl max-w-2xl leading-relaxed">
              «Кожен проєкт — це окрема історія трансформації бізнесу».
            </p>
            <div className="w-12 h-[1px] bg-[#D4AF37]/30 mx-auto" />
          </div>
          
          <div className="flex flex-col items-center gap-8">
            <div className="w-px h-16 bg-gradient-to-b from-[#D4AF37] to-transparent" />
            <CtaButton />
          </div>
        </div>
      </div>
    </section>
  );
}