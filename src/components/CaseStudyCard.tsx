import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";
import React, { useRef } from "react";
import { gsap } from "@/lib/gsapUtils";

interface CaseStudyCardProps {
  title: string;
  year: string;
  who: string;
  what: string;
  result: string;
  image: string;
  caseStudyLink: string;
  badges: string[];
  longDescription?: string;
  backgroundColor?: string;
  buttonColor?: string;
  description?: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  title,
  year,
  who,
  what,
  result,
  image,
  caseStudyLink,
  badges,
  longDescription,
  backgroundColor,
  buttonColor,
  description,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        scale: 1.03,
        y: -5,
        duration: 0.25,
        ease: 'power1.out'
      });
    }
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        scale: 1,
        y: 0,
        duration: 0.2,
        ease: 'power1.in'
      });
    }
  };

  return (
    <Card
      style={{ transform: "translateZ(0)", backgroundColor: backgroundColor }} // translateZ(0) can help with performance by promoting to a new layer
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="transition-shadow duration-300 hover:shadow-xl" // Added hover:shadow-xl for a more pronounced shadow on hover
    >
      <div className="aspect-video w-full bg-gray-200 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500"
        />
      </div>
      <CardHeader className="p-4 sm:p-6">
        <div className="flex justify-between items-start mb-1 sm:mb-2">
          <div>
            <h3 className="font-heading font-semibold text-lg sm:text-xl md:text-2xl">{title}</h3>
            {description && <p className="text-xs sm:text-sm text-foreground/80 mt-0.5 sm:mt-1">{description}</p>}
          </div>
          <Badge className="bg-secondary text-secondary-foreground px-2 sm:px-2.5 py-0.5 sm:py-1 text-xs font-medium rounded whitespace-nowrap"> {/* Added whitespace-nowrap */}
            {year}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="relative p-4 sm:p-6 pt-0">
        <div className="space-y-2 sm:space-y-3 text-sm text-foreground">
          <p>
            <strong className="font-medium">Who:</strong> {who}
          </p>
          <p>
            <strong className="font-medium">What:</strong> {what}
          </p>
          <p>
            <strong className="font-medium">Result:</strong> {result}
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4"> {/* Added flex-wrap */}
          {badges.map(badge => (
            <Badge
              key={badge}
              className="bg-accent text-accent-foreground px-2 sm:px-2.5 py-0.5 sm:py-1 text-xs font-medium rounded"
            >
              {badge}
            </Badge>
          ))}
        </div>
        {longDescription && (
          <div
            className="long-description mt-3 sm:mt-4 text-xs sm:text-sm text-foreground overflow-hidden h-auto bg-brand-light-gray-accent/50 p-3 sm:p-4 rounded-md"
          >
            <p className="text-sm sm:text-base">{longDescription}</p> {/* Adjusted longDescription p tag */}
          </div>
        )}
        </CardContent>
        <CardFooter className="p-4 sm:p-6 pt-2 sm:pt-4"> {/* Adjusted padding */}
          <Link 
            to={caseStudyLink} 
            style={{ backgroundColor: buttonColor }} 
            className="w-full text-primary-foreground transition-colors shadow-md text-sm sm:text-base font-medium py-2 px-4 rounded inline-flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background" 
            aria-label={`View ${title} Case Study`}
          >
            View Case Study
            <ArrowRight className="ml-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
          </Link>
        </CardFooter>
      </Card>
  );
};

export default CaseStudyCard;
