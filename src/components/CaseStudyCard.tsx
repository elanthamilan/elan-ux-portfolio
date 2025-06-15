import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Button } from './ui/button';

interface CaseStudyCardProps {
  title: string;
  year: string;
  who: string;
  what: string;
  result: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
  index: number;
  cardClassName?: string;
  accentColorName?: string;
}

const CaseStudyCard = ({
  title,
  year,
  who,
  what,
  result,
  description,
  image,
  link,
  tags,
  index,
  cardClassName = "bg-white",
  accentColorName = "brand-primary"
}: CaseStudyCardProps) => {
  return (
    <motion.a
      href={link}
      className={`relative block rounded-3xl shadow-md overflow-hidden transition-shadow hover:shadow-lg ${cardClassName}`}
      style={{ zIndex: index }}
    >
      <div className="absolute inset-0 bg-black/10 z-[1] rounded-3xl" aria-hidden="true" />
      <div className="relative p-6 md:p-8 lg:p-10">
        {/* Top Section */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-1">{title}</h3>
            <p className="text-sm text-foreground/80">{year}</p>
          </div>
          <img
            src={image}
            alt={title}
            className="h-20 w-24 object-cover rounded-xl shadow-md"
            loading="lazy"
          />
        </div>

        {/* Middle Section */}
        <div className="mb-6">
          <p className="text-foreground/90 leading-relaxed">{description}</p>
        </div>

        {/* Bottom Section */}
        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="inline-block bg-brand-light-gray-accent text-gray-600 text-xs px-2 py-1 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <Button variant="secondary" className="w-full justify-between">
            Explore <ArrowUpRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </motion.a>
  );
};

export default CaseStudyCard;
