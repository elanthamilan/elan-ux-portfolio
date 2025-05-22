import { useEffect, useRef } from 'react';
import { useGSAP } from '../lib/gsap/useGSAP.js';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface CaseStudyCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  index: number;
  year: string;
  who: string;
  what: string;
  result: string;
  backgroundColor: string;
  buttonColor: string;
}

const CaseStudyCard = ({
  title,
  description,
  image,
  tags,
  link,
  index,
  year,
  who,
  what,
  result,
  backgroundColor,
  buttonColor
}: CaseStudyCardProps) => {
  const { elementRef, scrollAnimation } = useGSAP();
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      scrollAnimation(
        cardRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out'
        },
        {
          start: 'top bottom-=100',
          end: 'bottom center',
          toggleActions: 'play none none reverse'
        }
      );
    }
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="aspect-w-16 aspect-h-9 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
          loading={index === 0 ? 'eager' : 'lazy'}
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-serif font-bold mb-3 text-gray-900 dark:text-white">
          {title}
        </h3>
        
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
          <span className="font-semibold">Year:</span> {year}
        </p>
         <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
          <span className="font-semibold">Who:</span> {who}
        </p>
         <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
          <span className="font-semibold">What:</span> {what}
        </p>
         <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          <span className="font-semibold">Result:</span> {result}
        </p>

        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <Link
          to={link}
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
          aria-label={`Read case study: ${title}`}
          style={{ color: buttonColor }}
        >
          Read Case Study
          <svg
            className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

export default CaseStudyCard;
