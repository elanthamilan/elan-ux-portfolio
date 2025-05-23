import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/components/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", // Updated base: rounded-lg, transition-all, focus ring, disabled opacity, svg sizing
  {
    variants: {
      variant: {
        default: // Primary action button
          "bg-brand-primary text-white shadow-lg hover:bg-brand-primary/90 hover:shadow-xl active:scale-95",
        destructive: // For destructive actions
          "bg-red-600 text-white shadow-md hover:bg-red-700 hover:shadow-lg active:scale-95",
        outline: // Secondary action, often with a border
          "border border-brand-primary/50 bg-transparent text-brand-primary shadow-sm hover:bg-brand-primary/10 hover:border-brand-primary active:scale-95",
        secondary: // Alternative secondary action
          "bg-brand-secondary text-white shadow-md hover:bg-brand-secondary/90 hover:shadow-lg active:scale-95",
        ghost: // For subtle actions, no background or border initially
          "text-foreground hover:bg-accent-bg hover:text-brand-primary active:scale-95",
        link: // For navigation or actions that look like links
          "text-brand-primary underline-offset-4 hover:underline hover:text-brand-secondary active:scale-95",
      },
      size: {
        default: "h-10 px-5 py-2.5", // Slightly larger default
        sm: "h-9 rounded-md px-4 text-xs", // Adjusted sm
        lg: "h-11 rounded-lg px-8 text-base", // Adjusted lg
        icon: "h-10 w-10 rounded-lg", // Adjusted icon size & rounding
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
