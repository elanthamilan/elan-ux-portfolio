import { useEffect, useRef } from 'react';
import { useGSAP } from '../../lib/gsap/useGSAP.js';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, MessageSquare } from 'lucide-react';

const Contact = () => {
  const { elementRef, scrollAnimation } = useGSAP();
  const contactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (contactRef.current) {
      scrollAnimation(
        contactRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out'
        },
        {
          start: 'top center',
          end: 'bottom center',
          toggleActions: 'play none none reverse'
        }
      );
    }
  }, []);

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
      action: () => window.open('https://linkedin.com/in/elanthamilan', '_blank')
    }
  ];

  return (
    <motion.section
      ref={contactRef}
      initial={{ opacity: 0, y: 20 }}
      className="py-20 px-4 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Let's Connect
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => (
            <motion.button
              key={method.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={method.action}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                {method.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                {method.label}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                {method.value}
              </p>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Contact; 