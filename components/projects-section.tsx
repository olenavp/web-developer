"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "../assets/project-data";
import CtaButton from "./CtaButton";
import { ArrowRight } from "lucide-react";

export function ProjectsSection() {
    return (
        <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1A1C1E]">
            <div className="max-w-6xl mx-auto">

                <div className="mb-20">
                    <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-[0.2em] block mb-4">
                        [ Вибрані роботи ]
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F0] tracking-tight font-serif italic">
                        Від ідеї <span className="font-sans not-italic text-[#F5F5F0]/30">до реалізації</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link href={`/projects/${project.id}`} className="group block">
                                <div className="bg-[#232629] rounded-[2rem] overflow-hidden border border-white/5 shadow-sm transition-all duration-700 ease-out group-hover:shadow-2xl group-hover:shadow-black/50 group-hover:-translate-y-2">

                                    <div className="relative aspect-[16/10] overflow-hidden rounded-t-[2rem] bg-[#1A1C1E]">
                                        <Image
                                            src={project.image}
                                            alt={project.projectName}
                                            fill
                                            className="object-contain object-top transition-transform duration-1000 ease-out group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1C1E]/60 to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-500" />
                                    </div>

                                    <div className="p-8 pt-6">
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="text-xl font-bold text-[#F5F5F0] tracking-tight leading-tight">
                                                {project.projectName}
                                            </h3>
                                        </div>

                                        <p className="text-[#F5F5F0]/50 text-sm leading-relaxed font-medium mb-8 line-clamp-2">
                                            {project.about}
                                        </p>

                                        <div className="flex items-center gap-3 text-[#D4AF37] font-bold text-[10px] uppercase tracking-widest transition-all group-hover:gap-5">
                                            <span>Переглянути</span>
                                            <div className="w-8 h-8 rounded-full border border-[#D4AF37]/20 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-[#1A1C1E] transition-all">
                                                <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 flex justify-center">
                    <div className="text-center space-y-8">
                        <p className="text-[#F5F5F0]/30 font-serif italic text-xl">
                            Кожен проєкт — це окрема історія трансформації бізнесу.
                        </p>
                        <CtaButton />
                    </div>
                </div>
            </div>
        </section>
    );
}