"use client"
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-bold uppercase tracking-[0.2em] transition-all duration-500 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] hover:scale-[1.02]",
  {
    variants: {
      variant: {
        default:
          "!bg-[#D4AF37] !text-[#1A1C1E] shadow-lg shadow-[#D4AF37]/10 hover:!bg-[#F5F5F0]",
        outline:
          "border border-[#D4AF37]/30 bg-transparent !text-[#D4AF37] hover:!bg-[#D4AF37] hover:!text-[#1A1C1E]",
        secondary:
          "!bg-[#F5F5F0] !text-[#1A1C1E] hover:!bg-[#D4AF37]",
        ghost: "!text-[#F5F5F0]/50 hover:!text-[#D4AF37] hover:!bg-white/5",
        link: "!text-[#D4AF37] underline-offset-8 hover:underline",
      },
      size: {
        default: "h-12 px-8",
        sm: "h-9 px-4 text-xs",
        lg: "h-16 px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }