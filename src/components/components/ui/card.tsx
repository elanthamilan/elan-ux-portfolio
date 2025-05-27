import * as React from "react"

import { cn } from "@/components/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border border-slate-200 bg-card text-card-foreground shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out", // Updated shadow, added hover shadow and transition, specific border
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 px-3 py-4 xs:px-4 xs:py-5 sm:p-6", className)} // Responsive padding
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    // Base font size will be inherited or set by specific usage (e.g. in CaseStudyCard)
    // Adding responsive typography here if this is a generic Title for all cards:
    // className={cn("text-lg xs:text-xl font-semibold leading-none tracking-tight", className)}
    // For now, keeping it as is, specific components like CaseStudyCard will handle title size.
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)} // text-sm is generally fine for mobile.
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("px-3 pt-0 pb-4 xs:px-4 xs:pb-5 sm:p-6 sm:pt-0", className)} {...props} /> // Responsive padding
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center px-3 pt-0 pb-4 xs:px-4 xs:pb-5 sm:p-6 sm:pt-0", className)} // Responsive padding
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
