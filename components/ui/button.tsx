'use client';
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  /* Змінюємо базовий трекінг: на мобайлі він мінімальний, на десктопі — ваш 0.2em */
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-bold uppercase transition-all duration-500 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 active:scale-[0.96] hover:scale-[1.03] relative overflow-hidden after:content-[''] after:absolute after:inset-0 after:z-20 after:bg-gradient-to-r after:from-transparent after:via-white/30 after:to-transparent after:-translate-x-full hover:after:translate-x-full after:transition-transform after:duration-1000 after:ease-in-out after:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          'bg-gradient-to-b from-accent to-accent-dark !text-night shadow-accent-glow border-t border-white/40',
        outline:
          'border border-accent/45 bg-transparent !text-accent hover:!bg-accent hover:!text-night',
        ghost: '!text-cream-muted hover:!text-accent hover:!bg-white/5',
        // інші варіанти без змін...
      },
      size: {
        default: 'h-12 px-8 text-sm tracking-[0.1em]',
        sm: 'h-9 px-4 text-xs tracking-wider',
        /* LG FIX: 
           - h-14 та px-5 для 320px
           - tracking-wider (менший інтервал)
           - text-[10px] щоб текст не розривав кнопку
        */
        lg: 'h-14 px-5 text-[10px] tracking-wider sm:h-16 sm:px-12 sm:text-base sm:tracking-[0.2em]',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
