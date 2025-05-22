import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Default scroll trigger settings
ScrollTrigger.defaults({
  markers: false,
  toggleActions: 'play none none reverse'
});

// Export configured GSAP instance
export { gsap, ScrollTrigger }; 