import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ZoomableImage from '@/components/ui/ZoomableImage';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./components/ui/card.tsx";
import { Button } from "@/components/ui/button";

interface CaseStudyCardProps {
  title: string;
  year: string;
  who: string;
  what: string;
  result: string;
  image: string;
  link: string;
  tags: string[];
  backgroundColor: string;
  buttonColor: string;
  description: React.ReactNode;
  index: number;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  title,
  year,
  who,
  what,
  result,
  image,
  link,
  tags,
  backgroundColor,
  buttonColor,
  description,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="rounded-3xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300" style={{ backgroundColor }}>
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
          <CardTitle className="text-2xl font-bold text-foreground mb-4">{title}</CardTitle>
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
              <span
                key={tag}
                className="px-3 py-1 bg-secondary/20 text-secondary-foreground text-sm rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
        <Button asChild className="inline-flex items-center justify-center w-full text-white hover:opacity-90 px-6 py-3 text-base font-medium rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2" style={{ backgroundColor: buttonColor }}>
          <Link to={link}>
            <span>View Case Study</span>
            <span className="material-symbols-outlined ml-2" aria-hidden="true">arrow_forward</span>
          </Link>
        </Button>
      </Card>
    </motion.div>
  );
};

export default CaseStudyCard;
