'use client';
import { motion } from 'framer-motion';

const techStack = [
  'Next.js', 'TypeScript', 'React', "Redux", 'Node.js', 
  'PostgreSQL', 'MongoDB', 'Supabase', 'Firebase', 
  'Tailwind CSS', 'SCSS', 'JavaScript', 'HTML5'
];

const roles = ['Frontend', 'Backend', 'Fullstack'];

export function TechLine() {
  return (
    <div className="py-12 bg-graphite/95 overflow-hidden border-y border-white/5 relative">
      
      <div className="flex flex-col items-center mb-10 px-6">
        {/* <div className="px-6 py-2 rounded-full border border-accent/40 bg-accent/5 backdrop-blur-md mb-4">
          <h2 className="text-[14px] md:text-[16px] font-mono text-accent uppercase tracking-[0.3em] font-bold">
            Fullstack Developer
          </h2>
        </div> */}
        
        <p className="text-[11px] md:text-[12px] font-mono text-cream/50 uppercase tracking-[0.15em]">
          Expertise in <span className="text-accent/80">Frontend</span> & <span className="text-accent/80">Backend</span>
        </p>
      </div>

      {/* 2. Секція Технологій (Рухома лінія) */}
      <div className="relative">
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
                  <div className="w-1 h-1 rounded-full bg-accent/40" />
                  <span className="text-[14px] font-mono text-cream/70 uppercase tracking-[0.1em] font-medium">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* 3. Текстовий опис */}
      <div className="mt-8 flex justify-center px-6 text-center">
        <p className="text-[14px] font-mono text-cream/40 max-w-md leading-relaxed">
          Використовую сучасний стек для створення 
          високопродуктивних сайтів
        </p>
      </div>
    </div>
  );
}