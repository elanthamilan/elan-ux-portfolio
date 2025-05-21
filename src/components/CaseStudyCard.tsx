import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";
import React, { useRef } from "react";

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

  return (
    <div className="group">
      <Card
        className="case-study-card" // Added case-study-card class
        style={{ transform: "translateZ(0)", backgroundColor: backgroundColor }}
        ref={cardRef}
      >
        <div className="aspect-video w-full bg-gray-200 overflow-hidden">
          <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500"
          loading="lazy" // Added lazy loading
        />
      </div>
      <CardHeader className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-heading font-semibold text-xl md:text-2xl">{title}</h3>
            {description && <p className="text-sm text-foreground/80">{description}</p>}
          </div>
          <Badge className="bg-secondary text-secondary-foreground px-2.5 py-1 text-xs font-medium rounded">
            {year}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="relative p-6 pt-0">
        <div className="space-y-3 text-sm text-foreground">
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
        <div className="flex gap-2 mt-4">
          {badges.map(badge => (
            <Badge
              key={badge}
              className="bg-accent text-accent-foreground px-2.5 py-1 text-xs font-medium rounded"
            >
              {badge}
            </Badge>
          ))}
        </div>
        {longDescription && (
          <div
            className="long-description mt-4 text-sm text-foreground overflow-hidden h-auto  bg-brand-light-gray-accent/50 p-4 rounded-md"
          >
            <p className="text-lg">{longDescription}</p>
          </div>
        )}
        </CardContent>
        <CardFooter className="p-6 pt-2">
          <Link to={caseStudyLink} style={{ backgroundColor: buttonColor }} className="w-full text-primary-foreground transition-colors shadow-md text-base font-medium py-2 px-4 rounded inline-flex items-center justify-center" aria-label={`View ${title} Case Study`}>
            View Case Study
            <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden="true" />
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CaseStudyCard;
