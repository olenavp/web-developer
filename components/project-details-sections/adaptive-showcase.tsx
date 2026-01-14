'use client';
import Image from 'next/image';
import { motion, TargetAndTransition, Transition } from 'framer-motion';
import { SectionHeader } from '../home-page-sections/section-header';
import { Project } from '@/app/interfaces/interfaces';

type AdaptiveProps = Pick<Project, 'desktopImg' | 'tabletImg' | 'mobileImg'>;

export function AdaptiveShowcase({
  desktopImg,
  tabletImg,
  mobileImg,
}: AdaptiveProps) {
  const transition: Transition = {
    duration: 2,
    ease: [0.16, 1, 0.3, 1] as const,
  };

  const floating: TargetAndTransition = {
    y: [0, -15, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  } as const;

  return (
    <section className="py-24 md:py-40 bg-graphite overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="Multi-Device"
            title="Адаптивність як стандарт"
            subtitle="зручність на кожному пристрої"
          />

        <div className="grid grid-cols-12 gap-4 md:hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative col-span-12 aspect-[16/10] rounded-2xl overflow-hidden border-4 border-night shadow-2xl bg-night"
          >
            <Image
              src={desktopImg}
              alt="Desktop Version"
              fill
              className="object-cover object-top"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative col-span-7 aspect-[4/3] rounded-2xl overflow-hidden border-4 border-night shadow-2xl bg-night"
          >
            <Image
              src={tabletImg}
              alt="Tablet Version"
              fill
              className="object-cover object-top"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative col-span-5 aspect-[9/14] rounded-xl overflow-hidden border-4 border-night shadow-2xl bg-night"
          >
            <Image
              src={mobileImg}
              alt="Mobile Version"
              fill
              className="object-cover object-top"
            />
          </motion.div>
        </div>

        <div className="hidden md:flex relative h-[700px] justify-center perspective-[2000px]">
          <motion.div
            initial={{ opacity: 0, y: 100, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={transition}
            className="relative w-[85%] aspect-[16/10] rounded-[2.5rem] overflow-hidden border-[12px] border-night shadow-2xl bg-night"
          >
            <Image
              src={desktopImg}
              alt="Desktop View"
              fill
              className="object-cover object-top opacity-60"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100, y: 50, rotateY: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0, rotateY: 20 }}
            viewport={{ once: true }}
            transition={{ ...transition, delay: 0.4 }}
            animate={floating}
            className="absolute left-[2%] bottom-[10%] w-[48%] aspect-[4/3] rounded-[2rem] overflow-hidden border-[8px] border-night shadow-[0_50px_100px_rgba(0,0,0,0.6)] z-10 bg-night"
          >
            <Image
              src={tabletImg}
              alt="Tablet View"
              fill
              className="object-cover object-top"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100, y: 150, rotateZ: 5 }}
            whileInView={{ opacity: 1, x: 40, y: 0, rotateZ: 0, rotateY: -20 }}
            viewport={{ once: true }}
            transition={{ ...transition, delay: 0.7 }}
            animate={{
              y: [0, -20, 0],
              transition: {
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              },
            }}
            className="absolute right-[8%] -bottom-[5%] w-[24%] aspect-[9/14] rounded-2xl overflow-hidden border-[8px] border-night shadow-[0_50px_100px_rgba(0,0,0,0.7)] z-20 bg-night"
          >
            <Image
              src={mobileImg}
              alt="Mobile View"
              fill
              className="object-cover object-top"
            />
          </motion.div>

          <div className="absolute inset-0 bg-accent/10 blur-[150px] rounded-full -z-10" />
        </div>
      </div>
    </section>
  );
}
