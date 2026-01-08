'use client';
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-bold uppercase tracking-[0.2em] transition-all duration-500 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 active:scale-[0.96] hover:scale-[1.03] relative overflow-hidden after:content-[''] after:absolute after:inset-0 after:z-20 after:bg-gradient-to-r after:from-transparent after:via-white/40 after:to-transparent after:-translate-x-full hover:after:translate-x-full after:transition-transform after:duration-1000 after:ease-in-out after:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          'bg-gradient-to-b from-accent to-accent-dark !text-night shadow-accent-glow border-t border-white/30',

        outline:
          'border border-accent/30 bg-transparent !text-accent hover:!bg-accent hover:!text-night',

        secondary:
          'bg-cream !text-night hover:bg-surface text-cream shadow-lg shadow-black/20',

        ghost: '!text-cream-muted hover:!text-accent hover:!bg-card-border',

        link: '!text-accent underline-offset-8 hover:underline',
      },
      size: {
        default: 'h-12 px-8',
        sm: 'h-9 px-4 text-xs',
        lg: 'h-16 px-12 text-base md:text-lg',
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
