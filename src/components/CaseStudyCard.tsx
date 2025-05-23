import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ZoomableImage from '@/components/ui/ZoomableImage';
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full" // Ensure motion div takes full height of its container if any
    >
      <Card className={`rounded-3xl overflow-hidden transition-shadow duration-300 flex flex-col h-full ${cardClassName} ${cardBorderClasses}`}>
        <div className="relative">
          <ZoomableImage
            src={image}
            alt={title}
            className="w-full h-48 md:h-56 object-cover" // Slightly adjusted height
          />
          <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm px-2.5 py-1 rounded-md text-xs font-medium text-foreground shadow-sm"> {/* Adjusted padding and rounding */}
            {year}
          </div>
        </div>
        <CardHeader className="pb-4"> {/* Reduced bottom padding */}
          <CardTitle className="text-xl lg:text-2xl font-bold font-heading text-foreground mb-2">{title}</CardTitle> {/* Reduced mb */}
          <CardDescription className="text-sm text-foreground/80"> {/* text-foreground/70 to text-foreground/80 */}
            <div className="space-y-2"> {/* Reduced space-y */}
              <div>
                <span className="text-xs font-semibold text-foreground/60 uppercase tracking-wider">Client:</span> {/* Adjusted styling */}
                <p className="text-foreground mt-0.5">{who}</p> {/* text-foreground/90 to text-foreground */}
              </div>
              <div>
                <span className="text-xs font-semibold text-foreground/60 uppercase tracking-wider">Service:</span> {/* Adjusted styling */}
                <p className="text-foreground mt-0.5">{what}</p> {/* text-foreground/90 to text-foreground */}
              </div>
              <div>
                <span className="text-xs font-semibold text-foreground/60 uppercase tracking-wider">Impact:</span> {/* Adjusted styling */}
                <p className="text-foreground mt-0.5">{result}</p> {/* text-foreground/90 to text-foreground */}
              </div>
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow pt-0 pb-4"> {/* flex-grow to push footer (button) down, adjusted padding */}
          <div className="mb-4 text-sm text-foreground"> {/* Adjusted margin and text size */}
            {description}
          </div>
          <div className="flex flex-wrap gap-1.5"> {/* Adjusted gap */}
            {tags.map((tag) => (
              <Badge
                key={tag}
                // variant="outline" // Using outline variant and then theming with accentColorName
                className={`px-2.5 py-0.5 text-xs border ${tagClasses}`} // Themed tags
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
