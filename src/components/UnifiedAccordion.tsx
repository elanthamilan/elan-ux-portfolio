import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

interface UnifiedAccordionProps {
  title: string;
  items: AccordionItem[];
  className?: string;
}

const UnifiedAccordion: React.FC<UnifiedAccordionProps> = ({ title, items, className = "" }) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const [allOpen, setAllOpen] = useState(false);

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);

    // Update allOpen state based on whether all items are open
    setAllOpen(newOpenItems.size === items.length);
  };

  const toggleAll = () => {
    if (allOpen) {
      // Close all
      setOpenItems(new Set());
      setAllOpen(false);
    } else {
      // Open all
      setOpenItems(new Set(items.map(item => item.id)));
      setAllOpen(true);
    }
  };

  return (
    <div className={className}>
      {/* Section Title - Clickable to expand/collapse all */}
      <button
        onClick={toggleAll}
        className="w-full text-left group mb-4 focus:outline-none focus:ring-2 focus:ring-[#177863] focus:ring-offset-2 rounded-lg"
      >
        <h3 className="text-lg font-semibold text-black flex items-center justify-between hover:text-[#16325A] transition-colors duration-200">
          <span>{title}</span>
          <motion.div
            animate={{ rotate: allOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="text-gray-500 group-hover:text-[#177863]"
          >
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </h3>
      </button>

      {/* Accordion Items */}
      <ul className="space-y-2">
        {items.map((item, index) => {
          const isOpen = openItems.has(item.id);

          return (
            <li
              key={item.id}
              className="overflow-hidden"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full py-2 text-left flex items-center justify-between hover:bg-gray-50/50 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#177863] focus:ring-inset"
                  aria-expanded={isOpen}
                  aria-controls={item.id + "-content"}
                >
                  <div className="flex items-center gap-3">
                  {item.icon && (
                    <div className="flex items-center justify-center w-8 h-8 bg-[#177863]/10 rounded-lg">
                      <span className="material-symbols-outlined text-base text-[#177863]">
                        {item.icon}
                      </span>
                    </div>
                  )}
                  <span className="font-semibold text-black text-sm">
                    {item.title}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-gray-500"
                >
                  <ChevronDown className="h-4 w-4" />
                </motion.div>
              </button>

              {/* Accordion Content */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    id={item.id + "-content"}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-2">
                      <div className="pl-11">
                        <p className="text-gray-700 text-xs leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              </motion.div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UnifiedAccordion;
