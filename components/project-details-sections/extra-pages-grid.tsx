'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function ExtraPagesGrid({
  images,
}: {
  images: { title: string; src: any }[];
}) {
  if (!images || images.length === 0) return null;

  return (
    <section className="py-32 bg-night px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-accent font-mono text-[12px] uppercase tracking-[0.4em] font-bold block mb-4">
            [ Architecture Depth ]
          </span>
          <h2 className="text-4xl md:text-5xl font-serif italic text-cream">
            Внутрішні сторінки та модулі
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group space-y-6"
            >
              <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden border border-white/5 bg-graphite shadow-2xl">
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-night/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="flex items-center gap-4 px-4">
                <span className="text-accent font-mono text-[12px]">
                  0{index + 1}
                </span>
                <div className="h-px w-8 bg-accent/30" />
                <h4 className="text-cream text-xl font-serif italic tracking-wide group-hover:text-accent transition-colors">
                  {img.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
