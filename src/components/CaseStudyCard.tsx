import React from 'react';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

import { usePrefersReducedMotion } from '@/components/hooks/usePrefersReducedMotion'; // Import the hook
import { Card } from "@/components/ui/card";
import { OptimizedImage } from "@/components/ui/OptimizedImage"; // Import OptimizedImage

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
  cardClassName = "", // Default background
  buttonVariant = "default",
}) => {
  const prefersReducedMotion = usePrefersReducedMotion(); // Use the hook

  // The main Button component uses variants that are already themed (e.g. variant="default" uses brand-primary).
  // To make the button specifically use accentColorName, we'd either need a new variant or override styles.
  // For simplicity, we'll let the button use its default theming for now,
  // but if a specific accentColor was required for the button, it might be:
  // const buttonClasses = `bg-${accentColorName} hover:bg-${accentColorName}/90 text-white`; // (This would override the default variant)

  return (
    <motion.div
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.5,
        delay: prefersReducedMotion ? 0 : index * 0.1
      }}
      className="h-full" // Ensure motion div takes full height of its container if any
    >
      <Card className={`rounded-3xl overflow-hidden flex flex-col sm:flex-row h-full ${cardClassName}`}>
        {/* Left side - Image */}
        <div className="relative w-full sm:w-48 md:w-56 lg:w-64 xl:w-72 flex-shrink-0 h-48 sm:h-auto">
          <OptimizedImage
            src={image}
            alt={image === '/placeholder-ux-design.svg' ? "" : title}
            className="w-full h-full object-cover"
            lazy={true}
            priority={false}
            // width and height can be omitted if layout is handled by parent div and object-cover
          />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-xl text-sm font-medium text-gray-700 shadow-sm">
            {year}
          </div>
        </div>

        {/* Right side - Content */}
        <div className="flex-1 flex flex-col p-4 sm:p-6 lg:p-8">
          {/* Tags */}
          <ul className="flex flex-wrap gap-2 mb-4" aria-label="Case study tags">
            {tags.map((tag) => (
              <li key={tag}>
                <Badge
                  className="bg-gray-100 text-gray-700 border-0 font-medium px-3 py-1 rounded-xl text-xs"
                >
                  {tag}
                </Badge>
              </li>
            ))}
          </ul>

          {/* Title */}
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 leading-tight">{title}</h3>

          {/* Description */}
          <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed flex-1">
            {description}
          </p>

          {/* Metadata */}
          <dl className="space-y-2 mb-4 text-sm sm:text-base">
            <div>
              <dt className="font-semibold text-gray-800 flex items-center">
                <span className="w-1.5 h-1.5 bg-[#177863] rounded-full mr-2 flex-shrink-0"></span>
                What:
              </dt>
              <dd className="text-gray-700 ml-[calc(0.375rem+0.5rem)] sm:ml-0 sm:pl-0"> {/* Adjusted for alignment */}
                {what}
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-800 flex items-center">
                <span className="w-1.5 h-1.5 bg-[#16325A] rounded-full mr-2 flex-shrink-0"></span>
                Who:
              </dt>
              <dd className="text-gray-700 ml-[calc(0.375rem+0.5rem)] sm:ml-0 sm:pl-0"> {/* Adjusted for alignment */}
                {who}
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-800 flex items-center">
                <span className="w-1.5 h-1.5 bg-[#177863] rounded-full mr-2 flex-shrink-0"></span>
                Results:
              </dt>
              <dd className="text-gray-700 ml-[calc(0.375rem+0.5rem)] sm:ml-0 sm:pl-0"> {/* Adjusted for alignment */}
                {result}
              </dd>
            </div>
          </dl>

          {/* Button */}
          <motion.a
            href={link}
            className={`inline-flex items-center justify-center px-8 py-4 font-medium rounded-2xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              buttonVariant === "secondary"
                ? "bg-[#234574] hover:bg-[#234574]/90 text-white focus:ring-[#234574]"
                : "bg-[#177863] hover:bg-[#177863]/90 text-white focus:ring-[#177863]"
            }`}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <span className="flex items-center gap-3">
              <span>View Case Study</span>
              <ArrowRight className="h-4 w-4" />
            </span>
          </motion.a>
        </div>
      </Card>
    </motion.div>
  );
});
CaseStudyCard.displayName = "CaseStudyCard"; // Optional: for better debugging names

export default CaseStudyCard;
