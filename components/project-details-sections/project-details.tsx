'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { SectionHeader } from '../home-page-sections/section-header';

interface Detail {
  image?: string;
  video?: string;
  title: string;
  text: string;
  items?: { label: string; value: string }[];
}

export function ProjectDetails({ details }: { details?: Detail[] }) {
  if (!details || details.length === 0) return null;

  return (
    <section className="py-12 px-6 sm:px-10 lg:px-12 bg-night">
      <SectionHeader
        label="Inside the build"
        title="Логіка рішень:"
        subtitle="деталі, що створюють результат"
      />

      <div className="max-w-6xl mx-auto space-y-40">
        {details.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col-reverse ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } gap-12 md:gap-24 items-center`}
          >
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:flex-[1.5]"
            >
              <div className="relative aspect-[4/4] rounded-[2rem] overflow-hidden border border-white/5 bg-transparent">
                {item.video ? (
                  <video
                    src={item.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <Image
                    src={item.image || '/placeholder.png'}
                    fill
                    alt={item.title}
                    className="object-contain right-0"
                  />
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex-1 space-y-8"
            >
              <div className="space-y-4">
                <span className="font-mono text-accent text-[10px] uppercase tracking-[0.4em]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-3xl md:text-4xl font-serif italic text-cream leading-tight break-keep">
                  {item.title}
                </h3>
                <p className="text-cream/50 font-light leading-relaxed text-lg italic">
                  {item.text}
                </p>
              </div>

              {item.items && (
                <ul className="space-y-4 pt-6 border-t border-white/5">
                  {item.items.map((point, idx) => (
                    <li key={idx} className="flex items-baseline gap-4 group">
                      <span className="text-accent font-mono text-[10px] opacity-50 group-hover:opacity-100 transition-opacity">
                        0{idx + 1}
                      </span>
                      <div className="flex flex-col-reverse sm:flex-row sm:justify-between sm:items-baseline w-full gap-1">
                        <span className="text-cream font-mono text-xs uppercase tracking-widest">
                          {point.label}
                        </span>
                        <div className="hidden sm:block flex-grow mx-4 border-b border-white/5 border-dotted" />
                        <span className="text-cream/40 font-light text-sm">
                          {point.value}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
