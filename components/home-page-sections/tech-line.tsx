'use client';
import { motion } from 'framer-motion';

const techStack = [
  'Next.js',
  'TypeScript',
  'React',
  'Redux',
  'Node.js',
  'PostgreSQL',
  'MongoDB',
  'Supabase',
  'Firebase',
  'Tailwind CSS',
  'SCSS',
  'JavaScript',
  'HTML5',
];

export function TechLine() {
  return (
    <div className="py-8 bg-night/95 overflow-hidden border-y border-white/10 relative">
      <div className="absolute -top-16 inset-x-0 h-32 bg-gradient-to-b from-accent via-accent/5 to-transparent blur-2xl pointer-events-none z-0" />

      <div className="absolute -bottom-16 inset-x-0 h-32 bg-gradient-to-t from-accent via-accent/5 to-transparent blur-2xl pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto mb-6 px-6 relative z-10">
        <div className="flex items-center gap-4">
          <div className="h-px w-8 bg-accent/40" />
          <p className="text-[10px] md:text-[11px] font-mono text-accent uppercase tracking-[0.4em] font-bold">
            Core Technical Stack
          </p>
        </div>
      </div>

      <div className="relative z-10">
        <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-night via-night/80 to-transparent z-20" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-night via-night/80 to-transparent z-20" />

        <motion.div
          className="flex whitespace-nowrap w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 40,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {[1, 2].map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-12 md:gap-20 pr-12 md:pr-20"
            >
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-6 flex-shrink-0"
                >
                  <span className="text-accent/30 font-light text-2xl">/</span>
                  <span className="text-[15px] md:text-[18px] font-mono text-cream/90 uppercase tracking-[0.2em] font-medium hover:text-accent transition-colors duration-500 cursor-default">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto mt-6 px-6 relative z-10 flex justify-end">
        <div className="text-right border-r border-accent/30 pr-6">
          <p className="text-[12px] md:text-[13px] font-mono text-cream/40 leading-relaxed tracking-wider max-w-sm">
            Використовую сучасний стек технологій <br />
            для створення високопродуктивних сайтів
          </p>
        </div>
      </div>
    </div>
  );
}
