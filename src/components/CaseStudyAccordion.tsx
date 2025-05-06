
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface ElanThinkingProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export function ElanThinking({ id, title, children }: ElanThinkingProps) {
  return (
    <div className="my-6 bg-white/90 backdrop-blur-sm border border-purple-100 rounded-lg p-1">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value={id} className="border-none">
          <AccordionTrigger className="py-4 px-5 hover:bg-purple-50/70 rounded-md transition-all">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-600 rounded-full mr-3 animate-pulse" aria-hidden="true"></div>
              <span className="text-purple-900 font-medium">Elan's Thinking: {title}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-5 pb-4 pt-2 text-gray-800 italic bg-gradient-to-r from-purple-50/70 to-white rounded-b-md">
            {children}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export function CaseStudySection({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <section className={`py-8 ${className}`}>
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 inline-block relative">
        {title}
        <span className="absolute -bottom-1 left-0 w-1/4 h-1 bg-gradient-to-r from-purple-600 to-transparent" aria-hidden="true"></span>
      </h2>
      <div className="space-y-4">
        {children}
      </div>
    </section>
  );
}
