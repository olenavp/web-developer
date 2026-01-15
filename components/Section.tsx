'use client';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  withGlow?: boolean;
  glowPosition?: 'top-right' | 'top-left' | 'center';
}

export function Section({
  id,
  children,
  className,
  containerClassName,
  withGlow = false,
  glowPosition = 'top-right',
}: SectionProps) {
  const glowStyles = {
    'top-right': 'top-0 right-0 w-[30%] h-[30%]',
    'top-left': 'top-0 left-0 w-[30%] h-[30%]',
    center:
      'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%]',
  };

  return (
    <section
      id={id}
      className={cn(
        'relative py-32 px-6 sm:px-10 lg:px-12 overflow-hidden',
        className 
      )}
    >
      {withGlow && (
        <div
          className={cn(
            'absolute bg-accent/10 blur-[120px] rounded-full pointer-events-none z-0',
            glowStyles[glowPosition]
          )}
        />
      )}

      <div
        className={cn('max-w-6xl mx-auto relative z-10', containerClassName)}
      >
        {children}
      </div>
    </section>
  );
}
