'use client';
import { motion } from 'framer-motion';

const techStack = [
  'Next.js',
  'TypeScript',
  'React',
  'Node.js',
  'PostgreSQL',
  'MongoDB',
  'Supabase',
  'Firebase',
  'Tailwind CSS',
  'SCSS',
  'JavaScript',
  'HTML5',
  'Frontend',
  'Backend',
  'Fullstack',
];

export function TechLine() {
  return (
    <div className="py-8 bg-graphite/95 overflow-hidden border-y border-card-border relative">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-graphite to-transparent z-20" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-graphite to-transparent z-20" />

      <motion.div
        className="flex whitespace-nowrap w-max"
        animate={{
          x: ['0%', '-50%'],
        }}
        transition={{
          duration: 35,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {[1, 2].map((_, i) => (
          <div key={i} className="flex items-center gap-16 pr-16">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-6 flex-shrink-0"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-accent/60 shadow-[0_0_8px_rgba(212,175,55,0.3)]" />
                <span className="text-[16px] font-mono text-accent uppercase tracking-[0.1em] font-bold">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        ))}
      </motion.div>

      <div className="mt-6 flex justify-center px-6">
        <p className="text-[14px] font-mono text-cream/80 text-center max-w-sm leading-тight">
          Працюю з сучасним і масштабованим стеком технологій для створення
          високопродуктивних та безпечних сайтів.
        </p>
      </div>
    </div>
  );
}
