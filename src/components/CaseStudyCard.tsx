import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import ZoomableImage from '@/components/ui/ZoomableImage';
import { usePrefersReducedMotion } from '@/components/hooks/usePrefersReducedMotion'; // Import the hook
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"; // Import Badge component

interface CaseStudyCardProps {
  title: string;
  year: string;
  who: string;
  what: string;
  result: string;
  image: string;
  link: string;
  tags: string[];
  // backgroundColor: string; // Kept commented as a reminder of previous prop
  // buttonColor: string; // Kept commented
  description: React.ReactNode;
  index: number;
  cardClassName?: string; // New prop for custom card background
  accentColorName?: 'brand-primary' | 'brand-secondary' | 'brand-tertiary' | string; // New prop for accent colors
  buttonVariant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = React.memo(({
  title,
  year,
  who,
  what,
  result,
  image,
  link,
  tags,
  description,
  index,
  cardClassName = "bg-accent-bg dark:bg-slate-800/50", // Default background
  accentColorName = "brand-primary", // Default accent color
  buttonVariant = "default",
}) => {
  const prefersReducedMotion = usePrefersReducedMotion(); // Use the hook

  // Dynamically construct classes for elements based on accentColorName
  // Note: For Tailwind JIT to work, full class names should ideally be present.
  // Using string concatenation like `bg-${accentColorName}/10` might require specific Tailwind config (safelisting)
  // or using CSS variables if this approach doesn't work directly.
  // For this exercise, we'll assume direct class name construction works or would be safelisted.
  // A safer approach for arbitrary colors would be inline styles or CSS variables.

  const tagClasses = `bg-${accentColorName}/10 text-${accentColorName} border-${accentColorName}/20`;
  const cardBorderClasses = `border-b-4 border-${accentColorName}`; // Example: bottom border accent

  // The main Button component uses variants that are already themed (e.g. variant="default" uses brand-primary).
  // To make the button specifically use accentColorName, we'd either need a new variant or override styles.
  // For simplicity, we'll let the button use its default theming for now,
  // but if a specific accentColor was required for the button, it might be:
  // const buttonClasses = `bg-${accentColorName} hover:bg-${accentColorName}/90 text-white`; // (This would override the default variant)

  return (
    <motion.div
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        y: prefersReducedMotion ? 0 : -8,
        scale: prefersReducedMotion ? 1 : 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{ scale: prefersReducedMotion ? 1 : 0.98 }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.5,
        delay: prefersReducedMotion ? 0 : index * 0.1
      }}
      className="h-full cursor-pointer" // Ensure motion div takes full height of its container if any
    >
      <Card className={`rounded-3xl overflow-hidden transition-all duration-300 flex flex-col h-full shadow-xl hover:shadow-2xl border-2 ${cardClassName} ${cardBorderClasses}`}>
        <div className="relative">
          <ZoomableImage
            src={image}
            alt={title}
            className="w-full h-52 md:h-64 object-cover" // Increased height for more prominence
          />
          <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-lg font-medium text-foreground shadow-md"> {/* Enhanced year badge */}
            {year}
          </div>
        </div>
        <CardHeader className="pb-6"> {/* Increased bottom padding after moving description here */}
          <CardTitle className="text-2xl font-bold text-foreground mb-3">{title}</CardTitle>
          {/* Moved Description Here - Placed before Who/What/Result */}
          <div className="text-foreground mt-1 mb-3 font-normal"> {/* Added mt-1 and adjusted mb for spacing */}
            {description}
          </div>
          <CardDescription className="text-foreground/80">
            <div className="space-y-2">
              <div>
                <span className="font-medium text-foreground/60 uppercase tracking-wider">Client:</span>
                <p className="text-foreground mt-0.5 font-normal">{who}</p>
              </div>
              <div>
                <span className="font-medium text-foreground/60 uppercase tracking-wider">Service:</span>
                <p className="text-foreground mt-0.5 font-normal">{what}</p>
              </div>
              <div>
                <span className="font-medium text-foreground/60 uppercase tracking-wider">Impact:</span>
                <p className="text-foreground mt-0.5 font-normal">{result}</p>
              </div>
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow pt-4 pb-4"> {/* Adjusted pt to 4 as description moved out, pb remains 4 */}
          {/* Tags remain in CardContent */}
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <Badge
                key={tag}
                // variant="outline" // Using outline variant and then theming with accentColorName
                className={`px-2.5 py-0.5 border font-normal ${tagClasses}`} // Themed tags
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        {/* Button now part of CardFooter for consistent spacing if needed, or directly here */}
        {/* Using default variant for button, which is already themed with brand-primary. */}
        {/* If specific accentColorName override is needed for button: className={`w-full rounded-t-none ${buttonClasses}`} */}
        <Button asChild variant={buttonVariant} size="default" className="w-full rounded-t-none mt-auto">
          {/* Added mt-auto to push button to bottom if CardContent isn't flex-grow enough, size default */}
          <Link to={link} className="flex items-center justify-center"> {/* Ensured flex centering for link content */}
            <span>View Case Study</span>
            <ArrowRight className="ml-2 h-4 w-4" /> {/* Replaced material icon with Lucide icon */}
          </Link>
        </Button>
      </Card>
    </motion.div>
  );
});
CaseStudyCard.displayName = "CaseStudyCard"; // Optional: for better debugging names

export default CaseStudyCard;
