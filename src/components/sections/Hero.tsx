import React from "react";
import SectionReveal from "../SectionReveal.tsx";
import { Button } from "@/components/ui/button"; // Updated path
import { ArrowRight, Download, GraduationCap, ShoppingCart, Network, Rocket, Linkedin, Mail, Phone, MessageSquare } from "lucide-react"; // Added Mail, Phone, MessageSquare
import { useIsMobile } from "@/components/hooks/use-mobile"; // Updated path
import { Badge } from "@/components/ui/badge"; // Updated path
// Card components are not directly used in Hero, but CaseStudyCard might use them.
// import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"; 
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // Updated path
import CaseStudyCard from "../CaseStudyCard.tsx";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useEffect, useState, useRef } from "react";
import SkillsBentoGrid from "@/components/Skills"; // Import the actual SkillsBentoGrid
import AnimatedHeroBackground from "@/components/ui/AnimatedHeroBackground"; // Import the new background component

gsap.registerPlugin(TextPlugin);

interface MatchMediaConditions {
  isReduced: boolean;
  isNotReduced: boolean;
}

// These are static and can be defined outside the component
const PHRASES = [
  "Simplifying Enterprise Experiences",
  "UX Designer specializing in Enterprise SaaS",
  "Crafting User-Centric Digital Experiences",
  "Transforming Complexity into Clarity",
  "Expert in EdTech & HR Tech"
];

const INDUSTRIES = [
  { title: "EdTech", iconName: "GraduationCap", content: "Led UX strategy and design for SIS, LMS, Recruitment App, and Student Portals.   Revamped SIS through evaluation, design systems, and redesign of 30+ features.    Directed LMS design focusing on accessibility, usability, and scalable workflows.    Designed Student Portal for seamless navigation and mobile responsiveness.    Created eLearning platform for trading courses." },
  { title: "eCommerce", iconName: "ShoppingCart", content: "Redesigned key flows for a B2B pharma eCommerce site.   Designed eCommerce experiences for brands like Robinson Co. and Natural Partners.    Improved product discovery, navigation and checkout flows.    Crafted scalable UI systems for quick orders, subscriptions, and account management." },
  { title: "Connected Tech", iconName: "Network", content: "Led design for connected home interfaces (consumer & industrial IoT).   Founding member of product/design team, revamped platform, built design system.    Designed subscription-based water purifier interface and mobile app for idly dosa batter making machine. Experience includes designing asset management solutions for real-time tool tracking in industrial IoT settings." },
  { title: "Startup", iconName: "Rocket", content: "Contributed to the design and development of various startup products, focusing on user-centered design and rapid iteration.  " }
];

const ICON_MAP: { [key: string]: React.ElementType } = {
  GraduationCap: GraduationCap, ShoppingCart: ShoppingCart, Network: Network, Rocket: Rocket,
};


const Hero = React.memo(() => { // Wrapped Hero with React.memo
  const [loaded, setLoaded] = useState(false);
  const isMobile = useIsMobile(); // useIsMobile itself should be optimized or be very cheap
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    setLoaded(true);
    if (headlineRef.current) {
      try {
        const mm = gsap.matchMedia();
        mm.add({
          isReduced: "(prefers-reduced-motion: reduce)",
          isNotReduced: "(prefers-reduced-motion: no-preference)"
        }, (context) => {
          if (!context.conditions) return;
          const { isReduced, isNotReduced } = context.conditions as unknown as MatchMediaConditions;
          if (isNotReduced) {
            gsap.set(headlineRef.current, { text: "" });
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
            PHRASES.forEach((phrase, index) => { // Use PHRASES constant
              if (index === 0) {
                tl.set(headlineRef.current, { text: "", opacity: 0, y: 20 })
                  .to(headlineRef.current, { opacity: 1, y: 0, duration: 0.4, ease: "power1.out" })
                  .to(headlineRef.current, { text: phrase, duration: phrase.length * 0.06, ease: "none" }, "+=0.2")
                  .to(headlineRef.current, { duration: 2 }, "+=0.5");
              } else {
                tl.to(headlineRef.current, { opacity: 0, y: -20, duration: 0.4, ease: "power1.in" });
                tl.set(headlineRef.current, { text: "", opacity: 0, y: 20 })
                  .to(headlineRef.current, { opacity: 1, y: 0, duration: 0.4, ease: "power1.out" })
                  .to(headlineRef.current, { text: phrase, duration: phrase.length * 0.06, ease: "none" }, "+=0.2")
                  .to(headlineRef.current, { duration: 2 }, "+=0.5");
              }
            });
            tl.to(headlineRef.current, { opacity: 0, y: -20, duration: 0.4, ease: "power1.in" });
          } else if (isReduced) {
            gsap.set(headlineRef.current, { text: PHRASES[0], opacity: 0 }); // Use PHRASES constant
            gsap.to(headlineRef.current, { opacity: 1, duration: 1, ease: "power1.out" });
          }
          return () => { gsap.killTweensOf(headlineRef.current); };
        });
        return () => { mm.revert(); };
      } catch (error) {
        console.error('Error in Hero animation:', error);
        if (headlineRef.current) {
          headlineRef.current.textContent = PHRASES[0]; // Use PHRASES constant
        }
      }
    }
  }, []); // Empty dependency array is fine as PHRASES is stable and headlineRef.current changes don't need to re-trigger this effect.

  return (
    <section className={`py-16 md:py-24 text-foreground relative bg-background fade-in ${loaded ? 'loaded' : ''}`} style={{ opacity: loaded ? 1 : 0 }} aria-labelledby="hero-headline">
      <AnimatedHeroBackground /> {/* Added the animated background component here */}
      <div className="container mx-auto px-4 relative z-10"> {/* Ensure this content stays above the background */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 items-start">
          {/* Left Column */}
          <div className="space-y-8 md:space-y-10">
            <div>
              <Badge className="bg-brand-primary text-white px-3 py-1.5 text-sm font-medium rounded-md shadow-sm">
                Enterprise UX Designer
              </Badge>
              <h1 ref={headlineRef} id="hero-headline" className="mt-4 mb-6 text-4xl md:text-5xl lg:text-6xl font-heading font-semibold leading-tight text-foreground" style={{ minHeight: '150px' }}>
                {PHRASES[0]} {/* Use PHRASES constant */}
              </h1>
              <div className="flex items-center mb-8 space-x-2">
                <span className="text-xl md:text-2xl font-sans font-medium text-foreground">Hi, I'm <span className="font-heading text-brand-primary">Elan</span> <span role='img' aria-label='wave'>👋</span><span role='img' aria-label='nerd face'>🤓</span></span>
              </div>
              <p className="text-foreground text-lg md:text-xl max-w-xl mb-10 leading-relaxed"> {/* text-foreground/80 to text-foreground */}
                Experienced UX designer specializing in enterprise SaaS, EdTech, and HR Tech. I transform complex business challenges into intuitive, user-centered solutions that drive measurable impact and enhance usability for large-scale products.
              </p>
              <div className="w-full mb-8 flex justify-start">
                <Button // This button is already styled by buttonVariants, which was updated
                  variant="default" // Uses bg-brand-primary, text-white, shadow-lg
                  size="lg" // Use larger size for hero CTA
                  asChild
                >
                  <a href="/Elanthamilan_UX_Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5"> {/* Adjusted gap */}
                    <Download className="h-5 w-5" aria-hidden="true" />
                    Download Resume
                  </a>
                </Button>
              </div>
              {/* Brands Section */}
              <div className="py-6 border-t border-b border-slate-200 dark:border-slate-700"> {/* Themed border */}
                <div className="px-0">
                  <h3 className="font-heading font-semibold text-foreground mb-4 text-lg">Brands I Have Worked With</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-items-center"> {/* Adjusted gap for responsiveness */}
                    {[{src:"/Elanable-uploads/Camu.png", alt:"Camu"}, {src:"/Elanable-uploads/Mastek.png", alt:"Mastek"}, {src:"/Elanable-uploads/Geninfy.jpg", alt:"Geninfy"}, {src:"/Elanable-uploads/Oceo.svg", alt:"Oceo"}].map(brand => (
                      <div key={brand.alt} className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all text-center">
                        <img src={brand.src} alt={brand.alt} width="90" height="45" className="object-contain mx-auto" /> {/* Slightly increased size */}
                        <p className="text-xs text-foreground/80 mt-2">{brand.alt}</p> {/* text-foreground/70 to text-foreground/80 */}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Stats Section */}
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 border-b border-slate-200 dark:border-slate-700 py-6"> {/* Themed border, removed border-t as previous section has border-b */}
                {[{label:"Experience", value:"8+ Years"}, {label:"Products", value:"10+"}, {label:"Features", value:"30+"}, {label:"Systems", value:"2"}].map(stat => (
                  <div key={stat.label} className="text-center">
                    <span className="text-xs text-foreground/70 block uppercase tracking-wider">{stat.label}</span> {/* text-foreground/60 to text-foreground/70 */}
                    <span className="font-semibold text-xl md:text-2xl block text-foreground mt-1">{stat.value}</span>
                  </div>
                ))}
              </div>
              {/* Industries Accordion */}
              <div className="py-6 border-b border-slate-200 dark:border-slate-700">
                <h3 className="font-heading font-semibold text-foreground mb-4 text-lg">Industries I have Worked In</h3>
                <Accordion type="single" collapsible defaultValue="EdTech" className="w-full text-foreground">
                  {INDUSTRIES.map((industry) => ( // Use INDUSTRIES constant
                    <AccordionItem value={industry.title} key={industry.title} className="border-b border-slate-200 dark:border-slate-700 last:border-b-0">
                      <AccordionTrigger className="flex items-center w-full py-4 px-2 text-left font-semibold text-lg rounded-md hover:bg-accent-bg focus-visible:bg-accent-bg focus-visible:ring-1 focus-visible:ring-brand-primary transition-colors data-[state=open]:bg-accent-light data-[state=open]:text-brand-primary">
                        {(() => {
                          const IconComponent = ICON_MAP[industry.iconName]; // Use ICON_MAP constant
                          return IconComponent ? <IconComponent className="mr-3 h-5 w-5 flex-shrink-0 text-brand-primary" aria-hidden="true" /> : null;
                        })()}
                        <span>{industry.title}</span>
                      </AccordionTrigger>
                      <AccordionContent className="pt-2 pb-4 px-2 text-foreground text-base leading-relaxed bg-transparent rounded-b-md">
                        {industry.content} {/* Content is a string, stable */}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
              {/* Get In Touch Section */}
              <div className="pt-6"> {/* Removed border-t as previous section has border-b */}
                <h3 className="font-heading font-semibold text-foreground mb-4 text-lg">Get In Touch</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { label: "elanthamilan12@gmail.com", text: "elanthamilan12@gmail.com", icon: Mail, action: () => { navigator.clipboard.writeText("elanthamilan12@gmail.com"); alert("Email copied to clipboard!"); }, aria: "Copy Email to Clipboard" },
                    { label: "+918148622302", text: "+918148622302", icon: Phone, action: () => { navigator.clipboard.writeText("+918148622302"); alert("Phone number copied to clipboard!"); }, aria: "Copy Phone to Clipboard" },
                    { label: "WhatsApp", text: "WhatsApp", icon: MessageSquare, href: "https://wa.me/918148622302", aria: "Chat on WhatsApp" },
                    { label: "LinkedIn", text: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/elanthamilan", aria: "Visit LinkedIn Profile" }
                  ].map(item => (
                    item.href ? (
                      <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
                         className="inline-flex items-center justify-center px-4 py-2.5 bg-accent-bg text-foreground hover:bg-brand-primary/10 hover:text-brand-primary transition-colors rounded-md text-sm font-medium shadow-sm focus-visible:ring-1 focus-visible:ring-brand-primary"
                         aria-label={item.aria}>
                        <item.icon className="mr-2 h-4 w-4 flex-shrink-0" aria-hidden="true" />
                        <span>{item.text}</span>
                      </a>
                    ) : (
                      <Button key={item.label} variant="outline" // Using outline for copy buttons
                              onClick={item.action}
                              className="inline-flex items-center justify-center px-4 py-2.5 hover:bg-accent-bg transition-colors rounded-md text-sm font-medium border-slate-300 dark:border-slate-600 focus-visible:ring-1 focus-visible:ring-brand-primary" // Themed border for outline
                              aria-label={item.aria}>
                        <item.icon className="mr-2 h-4 w-4 flex-shrink-0" aria-hidden="true" />
                        <span>{item.text}</span>
                      </Button>
                    )
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Right Column - Case Studies */}
          <div className={isMobile ? "mt-12 w-full" : "mt-0 md:mt-12"} style={{maxWidth: "720px", width: "100%"}}> {/* Adjusted mt for desktop */}
            <div className="h-full">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground" id="case-studies-heading"> {/* Added id for aria-labelledby */}
                  Case Studies
                </h2>
              </div>
              <div className="space-y-8" role="list" aria-labelledby="case-studies-heading"> {/* ARIA list role */}
                <CaseStudyCard
                  title="Campus Hiring Platform" // Slightly shortened
                  year="2023"
                  who="Top Indian University"
                  what="End-to-end campus hiring solution" // Slightly shortened
                  result="50% faster hiring" // More concise
                  image="/Elanable-uploads/Camu Campus Recruitment App.png"
                  link="/case-study/campus-hiring"
                  tags={['EdTech', 'SaaS', 'UX/UI']} // Standardized tags
                  description={<>
                    <p className="mb-2 text-sm text-foreground">A platform to streamline campus hiring processes.</p> {/* text-foreground/90 to text-foreground */}
                  </>}
                  index={0}
                  backgroundColor="bg-accent-light" // Themed background
                  // buttonColor prop seems unused by CaseStudyCard, styling is via Button component variants
                />
                <CaseStudyCard
                  title="AI Student Course Planner" // Slightly shortened
                  year="2025"
                  who="University Students"
                  what="AI-powered course planning tool"
                  result="60% less scheduling time" // More concise
                  image="/Elanable-uploads/78be9a59-8230-4ea5-b024-d96fd3cdd83e.png"
                  link="/case-study/student-planner"
                  tags={["AI", "UX Research", "EdTech"]} // Standardized tags
                  description={<>
                    <p className="mb-2 text-sm text-foreground">A redesign of a student course planning tool with AI integration.</p> {/* text-foreground/90 to text-foreground */}
                  </>}
                  index={1}
                  backgroundColor="bg-accent-bg" // Themed background
                  // buttonColor prop seems unused
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
Hero.displayName = "Hero"; // For better debugging

// HeroWithSkills component will now render SkillsBentoGrid
const HeroWithSkills = React.memo(() => { // Wrapped HeroWithSkills with React.memo
  return (
    <>
      <Hero />
      {/* Render the actual SkillsBentoGrid component within a SectionReveal for animations */}
      {/* The SkillsBentoGrid already has its own <section> and theming, so no need to wrap it in another one here. */}
      {/* SkillsBentoGrid itself should be memoized if it's expensive or takes complex props */}
      <SectionReveal> 
        <SkillsBentoGrid />
      </SectionReveal>
    </>
  );
});
HeroWithSkills.displayName = "HeroWithSkills"; // For better debugging

export default HeroWithSkills;
// Removed the hardcoded skills list from Hero.tsx as SkillsBentoGrid is now imported and used.
