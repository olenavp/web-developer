'use client';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import CtaButton from '../CtaButton';
import { testimonials } from '@/assets/data/testimonials';
import { Quote } from 'lucide-react';
import { SectionHeader } from './section-header';
import VerticalLine from '../VerticalLine';
import HorizontalLine from '../HorizontalLine';
import { Section } from '../Section';

export function TestimonialsSection() {
  return (
    <Section
      id="testimonials"
      className="bg-graphite"
      withGlow={true}
      glowPosition="center"
    >
      <div className="max-w-7xl mx-auto relative">
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-5 gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center">
                <SectionHeader
                  label="Довіра та результати"
                  title="Досвід тих, хто"
                  subtitle="вже довірив мені свій проєкт"
                />
              </div>
            </div>

            <div className="flex gap-4 mb-2">
              <CarouselPrevious className="static translate-y-0 w-14 h-14 rounded-full border border-card-border bg-night text-accent hover:bg-accent hover:text-night transition-all duration-500 shadow-xl" />
              <CarouselNext className="static translate-y-0 w-14 h-14 rounded-full border border-card-border bg-night text-accent hover:bg-accent hover:text-night transition-all duration-500 shadow-xl" />
            </div>
          </div>

          <CarouselContent className="-ml-6">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-6 md:basis-1/2 lg:basis-1/2 xl:basis-1/3 flex"
              >
                <div className="h-full w-full py-4 flex">
                  <Card className="flex flex-col w-full bg-gradient-to-br from-graphite-light to-night border border-card-border rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] transition-all duration-700 hover:border-accent/30 hover:-translate-y-2 group relative overflow-hidden">
                    <div className="absolute inset-x-0 top-0 h-[1px] bg-white/20 group-hover:bg-accent/40 transition-colors duration-700" />

                    <CardContent className="p-8 flex flex-col h-full relative">
                      <div className="mb-4 relative">
                        <Quote className="w-10 h-10 text-accent opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                      </div>

                      <blockquote className="text-lg text-cream/95 flex-grow italic font-serif leading-relaxed">
                        «{testimonial.quote}»
                      </blockquote>

                      <div className="pt-4 mt-4 border-t border-card-border shrink-0 flex items-center gap-4">
                        <div className="w-1 h-10 bg-accent/45 rounded-full" />
                        <div>
                          <div className="font-bold text-lg text-cream tracking-tight group-hover:text-accent transition-colors duration-500">
                            {testimonial.author}
                          </div>
                          <div className="text-[12px] font-mono text-accent/80 uppercase tracking-[0.3em] mt-1.5 font-bold">
                            {testimonial.position}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="mt-24 flex flex-col items-center gap-12">
          <HorizontalLine />
          <div className="flex flex-col items-center gap-8">
            <VerticalLine />
            <CtaButton />
          </div>
        </div>
      </div>
    </Section>
  );
}
