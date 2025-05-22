import React, { useState } from 'react';

interface AccordionProps {
  children: React.ReactNode;
  type?: 'single' | 'multiple';
  collapsible?: boolean;
  defaultValue?: string;
  className?: string;
}

interface AccordionItemProps {
  children: React.ReactNode;
  value: string;
  className?: string;
}

interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
}

export const Accordion = ({ children, className, type, collapsible, defaultValue, ...props }: AccordionProps) => (
  <div className={className} data-type={type} data-collapsible={collapsible ? 'true' : undefined} data-default-value={defaultValue} {...props}>
    {children}
  </div>
);

export const AccordionItem = ({ children, className, value, ...props }: AccordionItemProps) => (
  <div className={className} data-value={value} {...props}>{children}</div>
);

export const AccordionTrigger = ({ children, className, ...props }: AccordionTriggerProps) => {
  const [open, setOpen] = useState(false);
  return (
    <button 
      onClick={() => setOpen(!open)} 
      className={className}
      data-state={open ? 'open' : 'closed'}
      {...props}
    >
      {children}
    </button>
  );
};

export const AccordionContent = ({ children, className }: AccordionContentProps) => (
  <div className={className}>{children}</div>
); 