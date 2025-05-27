
import { useEffect, useRef } from 'react';
import { useGSAP } from '../../lib/gsap/useGSAP.js';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, MessageSquare } from 'lucide-react';
import { Button } from '../components/ui/button.tsx';

const Contact = () => {
  const { scrollAnimation } = useGSAP();
  const contactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (contactRef.current) {
      scrollAnimation({
        element: contactRef.current,
        animation: {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out'
        }
      });
    }
  }, [scrollAnimation]);

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'elanthamilan12@gmail.com',
      action: () => {
        navigator.clipboard.writeText('elanthamilan12@gmail.com');
        alert('Email copied to clipboard!');
      }
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+918148622302',
      action: () => {
        navigator.clipboard.writeText('+918148622302');
        alert('Phone number copied to clipboard!');
      }
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      label: 'WhatsApp',
      value: 'Chat on WhatsApp',
      action: () => window.open('https://wa.me/918148622302', '_blank')
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      action: () => window.open('https://www.linkedin.com/in/elanthamilan/', '_blank')
    }
  ];

  return (
    <motion.section
      ref={contactRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="py-16 md:py-24 bg-background text-foreground border-t border-brand-light-gray-accent"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4 text-foreground">
            Get In Touch
          </h2>
          <p className="text-foreground/80 max-w-xl mx-auto text-lg leading-relaxed">
            Interested in collaborating or have a question? Reach out via any method below.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {contactMethods.map((method) => (
            <Button
              key={method.label}
              onClick={method.action}
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-md text-base font-medium py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 flex items-center gap-2"
              aria-label={method.label}
              type="button"
            >
              <span className="mb-2 text-primary group-hover:scale-110 transition-transform">
                {method.icon}
              </span>
              <span className="font-semibold text-lg mb-1 text-foreground">
                {method.label}
              </span>
              <span className="text-sm text-foreground/70">
                {method.value}
              </span>
            </Button>
          ))}
        </div>
        <p className="mt-8 text-sm text-foreground/80 text-center">
          Email: <span className="font-medium">elanthamilan12@gmail.com</span>
        </p>
      </div>
    </motion.section>
  );
};

export default Contact;
