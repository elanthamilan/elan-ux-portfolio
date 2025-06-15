
import React from 'react';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

import { usePrefersReducedMotion } from '@/components/hooks/usePrefersReducedMotion';
import { Card } from "@/components/ui/card";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/components/ui/button";

interface CaseStudyCardProps {
  title: string;
  year: string;
  who: string;
  what: string;
  result: string;
  image: string;
  link: string;
  tags: string[];
  description: React.ReactNode;
  index: number;
  cardClassName?: string;
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
  cardClassName = ""
}) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  // Define case study specific background colors - flat colors
  const getCaseStudyBackground = (index: number) => {
    const colors = ['#FCF9F4', '#D9F4D7', '#EDE1FF'];
    return colors[index % colors.length];
  };

  // Get button variant based on title
  const getButtonVariant = (title: string) => {
    if (title.includes("Redesigning Campus Recruitment")) return 'green'; // #14B789
    if (title.includes("CAMU Course Compass")) return 'dark'; // #2E2E2E
    if (title.includes("AI-Powered Course Planner")) return 'violet'; // #8330C2
    return 'default';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.5,
        delay: prefersReducedMotion ? 0 : index * 0.1
      }}
      className="h-full"
    >
      <Card 
        className={`rounded-3xl overflow-hidden flex flex-col sm:flex-row h-full border-0 ${cardClassName}`} 
        style={{ backgroundColor: getCaseStudyBackground(index), boxShadow: 'none' }}
      >
        {/* Left side - Image */}
        <div className="relative w-full sm:w-48 md:w-56 lg:w-64 xl:w-72 flex-shrink-0 h-48 sm:h-auto">
          <OptimizedImage
            src={image}
            alt={image === '/placeholder-ux-design.svg' ? `${title} case study preview` : title}
            className="w-full h-full object-cover"
            lazy={true}
            priority={false}
          />
          <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-xl text-sm font-medium text-gray-700">
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
          <div className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed flex-1">
            {description}
          </div>

          {/* Metadata */}
          <dl className="space-y-2 mb-6 text-sm sm:text-base">
            <div>
              <dt className="font-semibold text-gray-800 flex items-center">
                <span className="w-1.5 h-1.5 bg-brand-secondary rounded-full mr-2 flex-shrink-0" aria-hidden="true"></span>
                What:
              </dt>
              <dd className="text-gray-700 ml-[calc(0.375rem+0.5rem)] sm:ml-0 sm:pl-0">
                {what}
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-800 flex items-center">
                <span className="w-1.5 h-1.5 bg-brand-primary rounded-full mr-2 flex-shrink-0" aria-hidden="true"></span>
                Who:
              </dt>
              <dd className="text-gray-700 ml-[calc(0.375rem+0.5rem)] sm:ml-0 sm:pl-0">
                {who}
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-800 flex items-center">
                <span className="w-1.5 h-1.5 bg-brand-secondary rounded-full mr-2 flex-shrink-0" aria-hidden="true"></span>
                Results:
              </dt>
              <dd className="text-gray-700 ml-[calc(0.375rem+0.5rem)] sm:ml-0 sm:pl-0">
                {result}
              </dd>
            </div>
          </dl>

          {/* Button */}
          <Button
            asChild
            variant={getButtonVariant(title)}
            size="lg"
            className="mt-auto w-full sm:w-auto inline-flex items-center justify-center gap-3 font-medium focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 text-white"
            aria-label={`View ${title} case study`}
          >
            <motion.a
              href={link}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <span>View Case Study</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </motion.a>
          </Button>
        </div>
      </Card>
    </motion.div>
  );
});
CaseStudyCard.displayName = "CaseStudyCard";

export default CaseStudyCard;
