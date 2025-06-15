
import { useEffect, useRef } from 'react';
import { useGSAP } from '../../lib/gsap/useGSAP.js';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, MessageSquare } from 'lucide-react';
import { AccessibleButton } from '../ui/AccessibleButton';

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
      icon: <Mail className="w-6 h-6" aria-hidden="true" />,
      label: 'Email',
      value: 'elanthamilan12@gmail.com',
      action: () => {
        navigator.clipboard.writeText('elanthamilan12@gmail.com');
        alert('Email copied to clipboard!');
      },
      ariaLabel: 'Copy email address to clipboard'
    },
    {
      icon: <Phone className="w-6 h-6" aria-hidden="true" />,
      label: 'Phone',
      value: '+918148622302',
      action: () => {
        navigator.clipboard.writeText('+918148622302');
        alert('Phone number copied to clipboard!');
      },
      ariaLabel: 'Copy phone number to clipboard'
    },
    {
      icon: <MessageSquare className="w-6 h-6" aria-hidden="true" />,
      label: 'WhatsApp',
      value: 'Chat on WhatsApp',
      action: () => window.open('https://wa.me/918148622302', '_blank'),
      ariaLabel: 'Open WhatsApp chat'
    },
    {
      icon: <Linkedin className="w-6 h-6" aria-hidden="true" />,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      action: () => window.open('https://www.linkedin.com/in/elanthamilan/', '_blank'),
      ariaLabel: 'Open LinkedIn profile'
    }
  ];

  return (
    <motion.section
      ref={contactRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="py-16 md:py-24 border-t border-brand-light-gray-accent"
      style={{ backgroundColor: '#C9FFC5' }}
      role="region"
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 
            id="contact-heading"
            className="text-3xl md:text-4xl font-heading font-semibold mb-4 text-foreground"
          >
            Get In Touch
          </h2>
          <p className="text-foreground/80 max-w-xl mx-auto text-lg leading-relaxed">
            Interested in collaborating or have a question? Reach out via any method below.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {contactMethods.map((method) => (
            <AccessibleButton
              key={method.label}
              onClick={method.action}
              variant="secondary"
              size="lg"
              className="h-auto flex-col gap-3 py-6 px-4 text-center bg-brand-secondary hover:bg-brand-secondary/90 text-white border-2 border-brand-secondary focus:ring-2 focus:ring-brand-secondary focus:ring-offset-2"
              aria-label={method.ariaLabel}
              type="button"
            >
              <span className="text-white">
                {method.icon}
              </span>
              <span className="font-semibold text-lg text-white">
                {method.label}
              </span>
              <span className="text-sm text-white/90">
                {method.value}
              </span>
            </AccessibleButton>
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
