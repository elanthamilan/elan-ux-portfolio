import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/components/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 transform", // Added transform for better animations
  {
    variants: {
      variant: {
        default: // Primary action button with gradient and lively effects
          "bg-gradient-to-r from-[#177863] to-[#177863]/90 text-white font-semibold shadow-lg hover:from-[#177863]/90 hover:to-[#177863] hover:shadow-2xl hover:scale-105 active:scale-95 border border-[#177863]/20",
        destructive: // For destructive actions
          "bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold shadow-lg hover:from-red-700 hover:to-red-800 hover:shadow-xl hover:scale-105 active:scale-95",
        outline: // Secondary action with vibrant hover
          "border-2 border-[#177863] bg-transparent text-[#177863] font-semibold shadow-md hover:bg-[#177863] hover:text-white hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300",
        secondary: // Alternative secondary action with gradient
          "bg-gradient-to-r from-[#16325A] to-[#16325A]/90 text-white font-semibold shadow-lg hover:from-[#16325A]/90 hover:to-[#16325A] hover:shadow-2xl hover:scale-105 active:scale-95 border border-[#16325A]/20",
        ghost: // For subtle actions with lively hover
          "text-foreground hover:bg-gradient-to-r hover:from-[#F8F4F2] hover:to-[#177863]/10 hover:text-[#177863] hover:scale-105 active:scale-95 transition-all duration-300",
        link: // For navigation with smooth transitions
          "text-[#177863] underline-offset-4 hover:underline hover:text-[#16325A] hover:scale-105 active:scale-95 transition-all duration-300",
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
