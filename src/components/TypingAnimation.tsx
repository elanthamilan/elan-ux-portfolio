import { useEffect, useState } from 'react';

interface TypingAnimationProps {
  phrases: string[];
  className?: string;
}

const TypingAnimation = ({ phrases, className = '' }: TypingAnimationProps) => {
  const [currentPhrase, setCurrentPhrase] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const currentText = phrases[currentIndex];
    
    // Typing speed
    const typeSpeed = 100;
    // Deleting speed
    const deleteSpeed = 50;
    // Pause at the end of typing
    const pauseAtEnd = 2000;
    // Pause before starting next phrase
    const pauseBeforeNext = 500;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentPhrase !== currentText) {
          setCurrentPhrase(currentText.slice(0, currentPhrase.length + 1));
        } else {
          // Finished typing, pause before deleting
          setTimeout(() => {
            setIsDeleting(true);
          }, pauseAtEnd);
        }
      } else {
        // Deleting
        if (currentPhrase !== '') {
          setCurrentPhrase(currentText.slice(0, currentPhrase.length - 1));
        } else {
          // Finished deleting, move to next phrase
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % phrases.length);
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timer);
  }, [currentPhrase, isDeleting, currentIndex, phrases]);

  return (
    <span
      className={`inline-block ${className}`}
      role="status"
      aria-live="polite"
    >
      {currentPhrase}
      <span className="animate-blink ml-0.5">|</span>
    </span>
  );
};

export default TypingAnimation; 