'use client';
import { Button } from './ui/button';
import { Send } from 'lucide-react';

export default function CtaButton() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Button
      onClick={scrollToContact}
      variant="default"
      size="lg"
      className="group relative
        max-w-full
        w-full sm:w-auto
        px-4 sm:px-8
    "
    >
      <span className="relative flex items-center gap-4">
        Обговорити задачу
        <span className="relative flex items-center justify-center">
          <Send className="w-5 h-5 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-110" />
          <div className="absolute inset-0 bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </span>
      </span>

      <span className="absolute inset-0 bg-gradient-to-tr from-white/0 via-card-border to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </Button>
  );
}
