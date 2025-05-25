import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-brand-primary text-aaa-on-brand shadow-lg hover:bg-brand-primary hover:text-aaa-on-brand hover:shadow-xl hover:font-semibold active:scale-95 [&_svg]:text-aaa-on-brand hover:[&_svg]:text-aaa-on-brand",
        destructive: "bg-red-600 text-white shadow-md hover:bg-red-700 hover:text-white hover:shadow-lg hover:font-semibold active:scale-95 [&_svg]:text-white hover:[&_svg]:text-white",
        outline: "border border-brand-primary/50 bg-transparent text-brand-primary shadow-sm hover:bg-brand-primary/10 hover:border-brand-primary hover:font-semibold active:scale-95",
        secondary: "bg-brand-secondary text-aaa-on-brand shadow-md hover:bg-brand-secondary hover:text-aaa-on-brand hover:shadow-lg hover:font-semibold active:scale-95 [&_svg]:text-aaa-on-brand hover:[&_svg]:text-aaa-on-brand",
        ghost: "text-foreground hover:bg-accent-bg hover:text-brand-primary hover:font-semibold active:scale-95",
        link: "text-brand-primary underline-offset-4 hover:underline hover:text-brand-secondary hover:font-semibold active:scale-95"
      },
      size: {
        default: "h-10 px-5 py-2.5",
        sm: "h-9 rounded-md px-4 text-xs",
        lg: "h-11 rounded-lg px-8 text-base",
        icon: "h-10 w-10 rounded-lg"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
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
