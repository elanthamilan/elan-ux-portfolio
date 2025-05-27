import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'; // Import the hook

const LoadingScreen = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const mainTransition = prefersReducedMotion ? { duration: 0 } : { duration: 0.5 };
  const textTransition = prefersReducedMotion
    ? { duration: 0, delay: 0 }
    : { duration: 0.5, ease: [0, 0.71, 0.2, 1.01] };
  const barTransition = prefersReducedMotion
    ? { duration: 0, delay: 0 }
    : { duration: 1, ease: 'easeInOut' };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={mainTransition}
      className="fixed inset-0 bg-background dark:bg-background z-[10001] flex items-center justify-center" // Use theme colors, ensure high z-index
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: prefersReducedMotion ? 1 : 0.5, opacity: prefersReducedMotion ? 1 : 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={textTransition}
          className="text-4xl font-heading font-bold text-foreground dark:text-foreground mb-4" // Use theme colors
        >
          Elanthamilan
        </motion.div>
        {!prefersReducedMotion && ( // Conditionally render progress bar animation
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={barTransition}
            className="h-1 bg-primary rounded-full" // Use theme colors
          />
        )}
        {prefersReducedMotion && ( // Static bar for reduced motion
           <div className="h-1 w-full bg-primary rounded-full" />
        )}
      </div>
    </motion.div>
  );
};

export default LoadingScreen;