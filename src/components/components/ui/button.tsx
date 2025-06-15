
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/components/lib/utils"

const buttonVariants = cva(
  // Increased height, no shadow, no scaling for all
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-brand-primary text-white font-semibold border border-brand-primary/20", // Removed shadow, scaling
        destructive:
          "bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold hover:from-red-700 hover:to-red-800 border-none", // No shadow, no scaling
        outline:
          "border-2 border-gray-300 bg-white text-gray-700 font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300", // No shadow, flat
        secondary:
          "bg-brand-secondary text-white font-semibold border border-brand-secondary/20", // No shadow, flat
        ghost:
          "text-foreground hover:bg-brand-secondary/10 hover:text-brand-secondary transition-all duration-300 border-none",
        link:
          "text-brand-secondary underline-offset-4 hover:underline hover:text-brand-secondary/80 transition-all duration-300 border-none",
        purple:
          "bg-gradient-to-r from-purple-primary to-purple-secondary text-white font-semibold border border-purple-primary/20", // No shadow
      },
      size: {
        default: "h-14 px-8 py-3 text-base",    // Height increased from h-11 to h-14, font a bit bigger
        sm: "h-11 rounded-lg px-6 text-sm",     // Height increased from h-9 to h-11
        lg: "h-16 rounded-xl px-10 text-lg",    // Height increased from h-12 to h-16
        icon: "h-14 w-14 rounded-xl",           // Height increased from h-11 to h-14
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
