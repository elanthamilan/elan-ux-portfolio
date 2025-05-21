import { useRef, useEffect } from 'react'; // Fixed typo 'nimport'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SectionReveal({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    gsap.from(ref.current.querySelectorAll('.reveal'), {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
      },
    });
  }, []);

  return <section ref={ref}>{children}</section>;
}
