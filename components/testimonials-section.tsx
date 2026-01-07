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

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1F2124] relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-2">
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-[0.2em] block mb-4">
                [ Довіра та результати ]
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#F5F5F0] tracking-tight font-serif italic leading-tight">
                Що кажуть клієнти, <br />
                <span className="font-sans not-italic text-[#F5F5F0]/30 text-2xl md:text-3xl">
                  про спільний шлях до їхньої мети
                </span>
              </h2>
            </div>

            <div className="flex gap-3 mb-2">
              <CarouselPrevious className="static translate-y-0 w-12 h-12 rounded-full border-white/10 bg-[#2A2D31] text-[#F5F5F0] hover:bg-[#D4AF37] hover:text-[#1A1C1E] transition-all duration-300" />
              <CarouselNext className="static translate-y-0 w-12 h-12 rounded-full border-white/10 bg-[#2A2D31] text-[#F5F5F0] hover:bg-[#D4AF37] hover:text-[#1A1C1E] transition-all duration-300" />
            </div>
          </div>
          <CarouselContent className="-ml-6">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-6 md:basis-1/2 xl:basis-1/3 flex"
              >
                <div className="h-full w-full py-2 flex">
                  <Card className="flex flex-col w-full bg-[#2A2D31] border border-white/5 rounded-[2.5rem] shadow-lg transition-all duration-500 hover:border-[#D4AF37]/30 hover:-translate-y-1 group">
                    <CardContent className="p-10 flex flex-col h-full">
                      <Quote className="w-8 h-8 text-[#D4AF37]/20 mb-6 group-hover:text-[#D4AF37]/40 transition-colors shrink-0" />

                      <blockquote className="text-lg text-[#F5F5F0]/80 leading-relaxed flex-grow italic font-serif">
                        «{testimonial.quote}»
                      </blockquote>

                      <div className="pt-8 mt-8 border-t border-white/5 shrink-0">
                        <div className="font-bold text-base text-[#F5F5F0] tracking-tight">
                          {testimonial.author}
                        </div>
                        <div className="text-[10px] font-mono text-[#D4AF37]/50 uppercase tracking-widest mt-2">
                          {testimonial.position}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>{' '}
        </Carousel>

        <div className="mt-20 flex justify-center">
          <div className="w-full max-w-xs h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />
        </div>

        <div className="flex justify-center">
          <CtaButton />
        </div>
      </div>
    </section>
  );
}
