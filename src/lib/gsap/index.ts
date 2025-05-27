
import { gsap } from 'gsap';

// Register commonly used plugins
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

// Export animation functions
export * from './animations';
export * from './config';

// Export GSAP instance
export { gsap };
