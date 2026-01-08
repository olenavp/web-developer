'use client';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import CtaButton from './CtaButton';
import { testimonials } from '@/assets/testimonials';
import { Quote } from 'lucide-react';
import { SectionHeader } from './section-header';

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-32 px-6 sm:px-10 lg:px-12 bg-graphite relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
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
              <CarouselPrevious className="static translate-y-0 w-14 h-14 rounded-full border-card-border bg-night text-accent hover:bg-accent hover:text-night transition-all duration-500 shadow-xl" />
              <CarouselNext className="static translate-y-0 w-14 h-14 rounded-full border-card-border bg-night text-accent hover:bg-accent hover:text-night transition-all duration-500 shadow-xl" />
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
                    <div className="absolute inset-x-0 top-0 h-[1px] bg-white/10 group-hover:bg-accent/40 transition-colors duration-700" />

                    <CardContent className="p-8 flex flex-col h-full relative">
                      <div className="mb-8 relative">
                        <Quote className="w-10 h-10 text-accent opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                      </div>

                      <blockquote className="text-xl text-cream/90 flex-grow italic font-serif">
                        «{testimonial.quote}»
                      </blockquote>

                      <div className="pt-10 mt-10 border-t border-card-border shrink-0 flex items-center gap-4">
                        <div className="w-1 h-10 bg-accent/30 rounded-full" />
                        <div>
                          <div className="font-bold text-lg text-cream tracking-tight group-hover:text-accent transition-colors duration-500">
                            {testimonial.author}
                          </div>
                          <div className="text-[12px] font-mono text-accent/50 uppercase tracking-[0.3em] mt-1.5 font-bold">
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
          <div className="w-full max-w-sm h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

          <div className="flex flex-col items-center gap-8">
            <div className="w-px h-16 bg-gradient-to-b from-accent to-transparent" />
            <CtaButton />
          </div>
        </div>
      </div>
    </section>
  );
}
