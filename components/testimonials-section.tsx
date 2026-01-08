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
      className="py-32 px-6 sm:px-10 lg:px-12 bg-[#16181A] relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[1px] bg-[#D4AF37]" />
                <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-[0.4em]">
                  [ Довіра та результати ]
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-[#F5F5F0] tracking-tight font-serif italic leading-[1.1]">
                Що кажуть клієнти, <br />
                <span className="font-sans not-italic text-[#F5F5F0]/20 text-3xl md:text-4xl">
                  про спільний шлях до їхньої мети
                </span>
              </h2>
            </div>

            <div className="flex gap-4 mb-2">
              <CarouselPrevious className="static translate-y-0 w-14 h-14 rounded-full border-white/5 bg-[#0D0D0E] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0D0D0E] transition-all duration-500 shadow-xl" />
              <CarouselNext className="static translate-y-0 w-14 h-14 rounded-full border-white/5 bg-[#0D0D0E] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0D0D0E] transition-all duration-500 shadow-xl" />
            </div>
          </div>

          <CarouselContent className="-ml-6">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-6 md:basis-1/2 lg:basis-1/2 xl:basis-1/3 flex"
              >
                <div className="h-full w-full py-4 flex">
                  <Card className="flex flex-col w-full bg-gradient-to-br from-[#1A1C1E] to-[#0D0D0E] border border-white/5 rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] transition-all duration-700 hover:border-[#D4AF37]/30 hover:-translate-y-2 group relative overflow-hidden">
                    
                    <div className="absolute inset-x-0 top-0 h-[1px] bg-white/10 group-hover:bg-[#D4AF37]/40 transition-colors duration-700" />

                    <CardContent className="p-8 flex flex-col h-full relative">
                      <div className="mb-8 relative">
                        <Quote className="w-10 h-10 text-[#D4AF37] opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                      </div>

                      <blockquote className="text-xl text-[#F5F5F0]/90 flex-grow italic font-serif">
                        «{testimonial.quote}»
                      </blockquote>

                      <div className="pt-10 mt-10 border-t border-white/5 shrink-0 flex items-center gap-4">
                        <div className="w-1 h-10 bg-[#D4AF37]/30 rounded-full" />
                        <div>
                          <div className="font-bold text-lg text-[#F5F5F0] tracking-tight group-hover:text-[#D4AF37] transition-colors duration-500">
                            {testimonial.author}
                          </div>
                          <div className="text-[10px] font-mono text-[#D4AF37]/50 uppercase tracking-[0.3em] mt-1.5 font-bold">
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
          <div className="w-full max-w-sm h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
          
          <div className="flex flex-col items-center gap-8">
            <div className="w-px h-16 bg-gradient-to-b from-[#D4AF37] to-transparent" />
            <CtaButton />
          </div>
        </div>
      </div>
    </section>
  );
}