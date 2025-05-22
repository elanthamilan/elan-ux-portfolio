import { useEffect, useRef, useState } from 'react';

interface TypingAnimationProps {
  phrases: string[];
  className?: string;
}

const TypingAnimation = ({ phrases, className = '' }: TypingAnimationProps) => {
  const [currentPhrase, setCurrentPhrase] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentText = phrases[currentIndex];
    const shouldDelete = isDeleting;
    const speed = shouldDelete ? 50 : 100;

    const timer = setTimeout(() => {
      if (!shouldDelete) {
        setCurrentPhrase(currentText.slice(0, currentPhrase.length + 1));
        if (currentPhrase === currentText) {
          setIsDeleting(true);
          setTypingSpeed(1000); // Pause at the end
        }
      } else {
        setCurrentPhrase(currentText.slice(0, currentPhrase.length - 1));
        if (currentPhrase === '') {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % phrases.length);
          setTypingSpeed(500); // Pause before typing next phrase
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [currentPhrase, isDeleting, currentIndex, phrases]);

  return (
    <span
      className={`inline-block ${className}`}
      role="status"
      aria-live="polite"
    >
      {currentPhrase}
      <span className="animate-blink">|</span>
    </span>
  );
};

export default TypingAnimation; 