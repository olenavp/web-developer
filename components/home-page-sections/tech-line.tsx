'use client';
import { motion } from 'framer-motion';

const techStack = [
  'Next.js', 'TypeScript', 'React', "Redux", 'Node.js', 
  'PostgreSQL', 'MongoDB', 'Supabase', 'Firebase', 
  'Tailwind CSS', 'SCSS', 'JavaScript', 'HTML5'
];

export function TechLine() {
  return (
    <div className="py-16 bg-graphite/95 overflow-hidden border-y border-white/10 relative">
      
      <div className="absolute inset-0 bg-accent/[0.02] pointer-events-none" />

      <div className="flex flex-col items-center mb-10 px-6 relative z-10">
        <p className="text-[11px] md:text-[12px] font-mono text-cream/75 uppercase tracking-[0.2em]">
          Expertise in <span className="text-accent">Frontend</span> & <span className="text-accent">Backend</span>
        </p>
      </div>

      <div className="relative z-10">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-graphite to-transparent z-20" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-graphite to-transparent z-20" />

        <motion.div
          className="flex whitespace-nowrap w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 30,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {[1, 2].map((_, i) => (
            <div key={i} className="flex items-center gap-16 pr-16">
              {techStack.map((tech, index) => (
                <div key={index} className="flex items-center gap-6 flex-shrink-0">
                  <div className="w-1 h-1 rounded-full bg-accent/60" />
                  <span className="text-[14px] font-mono text-cream/90 uppercase tracking-[0.15em] font-medium">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-10 flex justify-center px-6 text-center relative z-10">
        <p className="text-[13px] md:text-[14px] font-mono text-cream/60 max-w-md leading-relaxed tracking-wide italic">
          Використовую сучасний стек для створення 
          високопродуктивних сайтів
        </p>
      </div>
    </div>
  );
}