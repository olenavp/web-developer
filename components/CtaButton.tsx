'use client';
import { Button } from './ui/button';
import { Send } from 'lucide-react';

export default function CtaButton() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full flex justify-center px-2"> 
      {/* Додали контейнер з мінімальним px-2, щоб кнопка не торкалася країв на 320px */}
      <Button
        onClick={scrollToContact}
        variant="default"
        size="lg"
        className="group relative w-full sm:w-auto"
      >
        <span className="relative flex items-center justify-center gap-2 sm:gap-4">
          Обговорити задачу
          <span className="relative flex items-center justify-center">
            <Send className="w-4 h-4 sm:w-5 h-5 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-110" />
            <div className="absolute inset-0 bg-white/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </span>
        </span>

        <span className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/15 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </Button>
    </div>
  );
}