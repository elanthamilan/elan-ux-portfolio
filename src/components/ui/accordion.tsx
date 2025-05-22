import React, { useState } from 'react';
export const Accordion = ({ children }: { children: React.ReactNode }) => <div>{children}</div>;
export const AccordionItem = ({ children }: { children: React.ReactNode }) => <div>{children}</div>;
export const AccordionTrigger = ({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const [open, setOpen] = useState(false);
  return <button onClick={() => setOpen(!open)} {...props}>{children}</button>;
};
export const AccordionContent = ({ children }: { children: React.ReactNode }) => <div>{children}</div>; 