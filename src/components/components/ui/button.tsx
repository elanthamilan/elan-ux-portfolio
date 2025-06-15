
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/components/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 transform btn-hover",
  {
    variants: {
      variant: {
        default: // Primary button using brand-primary (#171717)
          "bg-brand-primary text-white font-semibold shadow-lg hover:bg-brand-primary/90 hover:shadow-xl hover:scale-105 active:scale-95 border border-brand-primary/20",
        destructive: // Red destructive actions
          "bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold shadow-lg hover:from-red-700 hover:to-red-800 hover:shadow-xl hover:scale-105 active:scale-95",
        outline: // Outline button with brand-primary
          "border-2 border-brand-primary bg-white text-brand-primary font-semibold shadow-md hover:bg-brand-primary hover:text-white hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300",
        secondary: // Secondary button using brand-secondary (#14B789)
          "bg-brand-secondary text-white font-semibold shadow-lg hover:bg-brand-secondary/90 hover:shadow-xl hover:scale-105 active:scale-95 border border-brand-secondary/20",
        ghost: // Subtle hover effects
          "text-brand-primary hover:bg-brand-secondary/10 hover:text-brand-secondary hover:scale-105 active:scale-95 transition-all duration-300",
        link: // Link style
          "text-brand-secondary underline-offset-4 hover:underline hover:text-brand-secondary/80 hover:scale-105 active:scale-95 transition-all duration-300",
        purple: // Purple variant for special features
          "bg-gradient-to-r from-purple-primary to-purple-secondary text-white font-semibold shadow-lg hover:from-purple-secondary hover:to-purple-primary hover:shadow-xl hover:scale-105 active:scale-95 border border-purple-primary/20",
      },
      size: {
        default: "h-11 px-6 py-3 text-sm",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-12 rounded-xl px-8 text-base",
        icon: "h-11 w-11 rounded-xl",
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
