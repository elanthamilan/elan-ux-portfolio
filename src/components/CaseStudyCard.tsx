import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
  // backgroundColor: string; // Removed to rely on shadcn/ui theming
  // buttonColor: string; // Removed as we'll use a standard variant
  description: React.ReactNode;
  index: number;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = React.memo(({ // Wrapped with React.memo
  title,
  year,
  who,
  what,
  result,
  image,
  link,
  tags,
  // backgroundColor, // Removed
  // buttonColor, // Removed
  description,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Removed inline style, explicit border, and custom shadow classes */}
      <Card className="rounded-3xl overflow-hidden transition-shadow duration-300">
        <div className="relative">
          <ZoomableImage
            src={image}
            alt={title}
            className="w-full h-48 md:h-64 object-cover"
          />
          <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-medium text-foreground">
            {year}
          </div>
        </div>
        <CardHeader>
          <CardTitle className="text-2xl font-bold font-heading text-foreground mb-4">{title}</CardTitle>
          <CardDescription>
            <div className="space-y-4">
              <div>
                <span className="text-sm font-medium text-foreground/70">Who:</span>
                <p className="text-foreground/90">{who}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-foreground/70">What:</span>
                <p className="text-foreground/90">{what}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-foreground/70">Result:</span>
                <p className="text-foreground/90">{result}</p>
              </div>
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            {description}
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="px-3 py-1 text-sm" // Kept similar padding and text size
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <Button asChild variant="default" size="lg" className="w-full">
          <Link to={link}>
            <span>View Case Study</span>
            <span className="material-symbols-outlined ml-2" aria-hidden="true">arrow_forward</span>
          </Link>
        </Button>
      </Card>
    </motion.div>
  );
});
CaseStudyCard.displayName = "CaseStudyCard"; // Optional: for better debugging names

export default CaseStudyCard;
