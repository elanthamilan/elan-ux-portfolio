import React from "react";
import SectionReveal from "../SectionReveal.tsx";
import { Button } from "../ui/button";
import { Download, GraduationCap, ShoppingCart, Network, Rocket, ExternalLink, Mail, Phone, MessageSquare } from "lucide-react";
import { useIsMobile } from "../hooks/use-mobile";
import { Badge } from "../ui/badge";
// Card components are not directly used in Hero, but CaseStudyCard might use them.
// import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import CaseStudyCard from "../CaseStudyCard.tsx";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useEffect, useState, useRef } from "react";
import SkillsBentoGrid from "../Skills";
import UXAnimatedBackground from "../ui/UXAnimatedBackground";

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
    <section className={`py-12 xs:py-16 md:py-24 text-foreground relative bg-background fade-in ${loaded ? 'loaded' : ''}`} style={{ opacity: loaded ? 1 : 0 }} aria-labelledby="hero-headline">
      <UXAnimatedBackground />
      <div className="container mx-auto px-2 xs:px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 items-start">
          {/* Left Column */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <Badge className="bg-brand-primary text-white px-3 py-1.5 text-sm font-medium rounded-md shadow-sm">
                Enterprise UX Designer
              </Badge>
              <h1 ref={headlineRef} id="hero-headline" className="mt-3 mb-5 text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-heading font-semibold leading-tight text-foreground" style={{ minHeight: '120px' }}>
                {PHRASES[0]}
              </h1>
              <div className="flex items-center mb-6 space-x-2">
                <span className="text-xl md:text-2xl font-sans font-medium text-foreground">Hi, I'm <span className="font-heading text-brand-primary">Elanthamilan</span> <span role='img' aria-label='wave'>👋</span><span role='img' aria-label='nerd face'>🤓</span></span>
              </div>
              <p className="text-foreground text-base xs:text-lg md:text-xl max-w-xl mb-8 leading-relaxed"> {/* Adjusted typography and margin */}
                Experienced UX designer specializing in enterprise SaaS, EdTech, and HR Tech. I transform complex business challenges into intuitive, user-centered solutions that drive measurable impact and enhance usability for large-scale products.
              </p>
              <div className="w-full mb-6 flex justify-start"> {/* Adjusted margin */}
                <Button
                  variant="default"
                  size="lg"
                  asChild
                  className="w-full flex flex-row items-center justify-center gap-2.5 min-h-[56px] text-base font-medium"
                >
                  <a href="/Elanthamilan_UX_Resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Download Resume">
                    <Download className="h-5 w-5" aria-hidden="true" />
                    Download Resume
                  </a>
                </Button>
              </div>
              {/* Brands Section */}
              <div className="py-5 border-t border-b border-slate-200 dark:border-slate-700"> {/* Adjusted padding */}
                <div className="px-0">
                  <h3 className="font-heading font-semibold text-foreground mb-3 text-md xs:text-lg">Brands I Have Worked With</h3> {/* Adjusted typography and margin */}
<div className="flex flex-row items-center overflow-x-auto space-x-12 py-2 w-full">
                    {[{src:"/Elanable-uploads/Camu.png", alt:"Camu"}, {src:"/Elanable-uploads/Mastek.png", alt:"Mastek"}, {src:"/Elanable-uploads/Geninfy.jpg", alt:"Geninfy"}, {src:"/Elanable-uploads/Oceo.svg", alt:"Oceo"}].map(brand => (
                      <div key={brand.alt} className="flex-auto flex flex-col items-center justify-center min-w-[120px] max-w-[180px] px-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all text-center p-4 md:p-6">
                        <img src={brand.src} alt={brand.alt} width="100" height="48" className="object-contain mx-auto" />
                        <p className="text-xs text-foreground/80 mt-2">{brand.alt}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Stats Section */}
              <div className="grid grid-cols-2 gap-3 xs:gap-4 sm:grid-cols-4 border-b border-slate-200 dark:border-slate-700 py-5"> {/* Adjusted padding and gap */}
                {[{label:"Experience", value:"8+ Years"}, {label:"Products", value:"10+"}, {label:"Features", value:"30+"}, {label:"Design systems", value:"2"}].map(stat => (
                  <div key={stat.label} className="text-center">
                    <span className="text-xs text-foreground/70 block uppercase tracking-wider">{stat.label}</span>
                    <span className="font-semibold text-lg xs:text-xl md:text-2xl block text-foreground mt-0.5">{stat.value}</span> {/* Adjusted typography and margin */}
                  </div>
                ))}
              </div>
              {/* Industries Accordion */}
              <div className="py-5 border-b border-slate-200 dark:border-slate-700"> {/* Adjusted padding */}
                <h3 className="font-heading font-semibold text-foreground mb-3 text-md xs:text-lg">Industries I have Worked In</h3> {/* Adjusted typography and margin */}
                <Accordion type="single" collapsible defaultValue="EdTech" className="w-full text-foreground">
                  {INDUSTRIES.map((industry) => (
                    <AccordionItem value={industry.title} key={industry.title} className="border-b border-slate-200 dark:border-slate-700 last:border-b-0">
                      <AccordionTrigger className="flex items-center w-full py-3 px-1 text-left font-semibold text-base xs:text-lg rounded-md hover:bg-accent-bg focus-visible:bg-accent-bg focus-visible:ring-1 focus-visible:ring-brand-primary transition-colors data-[state=open]:bg-accent-light data-[state=open]:text-brand-primary"> {/* Adjusted padding and typography */}
                        {(() => {
                          const IconComponent = ICON_MAP[industry.iconName];
                          return IconComponent ? <IconComponent className="mr-2.5 h-4 w-4 xs:h-5 xs:w-5 flex-shrink-0 text-brand-primary" aria-hidden="true" /> : null; {/* Adjusted size and margin */}
                        })()}
                        <span>{industry.title}</span>
                      </AccordionTrigger>
                      <AccordionContent className="pt-2 pb-3 px-1 text-foreground text-sm xs:text-base leading-relaxed bg-transparent rounded-b-md"> {/* Adjusted padding and typography */}
                        {industry.content}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
              {/* Get In Touch Section */}
              <div className="pt-5"> {/* Adjusted padding */}
                <h3 className="font-heading font-semibold text-foreground mb-3 text-md xs:text-lg">Get In Touch</h3> {/* Adjusted typography and margin */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 w-full max-w-2xl mx-auto">
                  <a
                    href="mailto:elanthamilan12@gmail.com"
                    className="flex flex-row items-center gap-3 border border-brand-primary text-brand-primary rounded-lg py-4 px-4 hover:bg-brand-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary transition-all w-full min-h-[56px] text-base font-medium justify-center"
                    aria-label="Send Email"
                  >
                    <Mail className="w-5 h-5" />
                    elanthamilan12@gmail.com
                  </a>
                  <a
                    href="tel:+918148622302"
                    className="flex flex-row items-center gap-3 border border-brand-primary text-brand-primary rounded-lg py-4 px-4 hover:bg-brand-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary transition-all w-full min-h-[56px] text-base font-medium justify-center"
                    aria-label="Call Phone"
                  >
                    <Phone className="w-5 h-5" />
                    +918148622302
                  </a>
                  <a
                    href="https://wa.me/918148622302"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row items-center gap-3 border border-brand-primary text-brand-primary rounded-lg py-4 px-4 hover:bg-brand-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary transition-all w-full min-h-[56px] text-base font-medium justify-center"
                    aria-label="Chat on WhatsApp"
                  >
                    <MessageSquare className="w-5 h-5" />
                    WhatsApp
                  </a>
                  <a
                    href="https://linkedin.com/in/elanthamilan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row items-center gap-3 border border-brand-primary text-brand-primary rounded-lg py-4 px-4 hover:bg-brand-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary transition-all w-full min-h-[56px] text-base font-medium justify-center"
                    aria-label="Connect on LinkedIn"
                  >
                    <ExternalLink className="w-5 h-5" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Right Column - Case Studies */}
          <div className={isMobile ? "mt-8 w-full" : "mt-0 md:mt-12"} style={{maxWidth: "720px", width: "100%"}}>
            <div className="h-full">
              <div className="mb-6">
                <h2 className="text-2xl xs:text-3xl md:text-4xl font-heading font-semibold text-foreground" id="case-studies-heading">
                  Case Studies
                </h2>
              </div>
              <div className="space-y-6" role="list" aria-labelledby="case-studies-heading">
                <CaseStudyCard
                  title="Campus Hiring Platform"
                  year="2023"
                  who="Top Indian University"
                  what="End-to-end campus hiring solution"
                  result="50% faster hiring"
                  image="/Elanable-uploads/Camu Campus Recruitment App.png"
                  link="/case-study/campus-hiring"
                  tags={['EdTech', 'SaaS', 'UX/UI']}
                  description={<>
                    <p className="mb-2 text-sm text-foreground">A platform to streamline campus hiring processes.</p>
                  </>}
                  index={0}
                  cardClassName="bg-accent-light dark:bg-slate-800/60 w-full"
                  accentColorName="brand-primary"
                />
                <CaseStudyCard
                  title="AI Student Course Planner"
                  year="2025"
                  who="University Students"
                  what="AI-powered course planning tool"
                  result="60% less scheduling time"
                  image="/Elanable-uploads/78be9a59-8230-4ea5-b024-d96fd3cdd83e.png"
                  link="/case-study/student-planner"
                  tags={["AI", "UX Research", "EdTech"]}
                  description={<>
                    <p className="mb-2 text-sm text-foreground">A redesign of a student course planning tool with AI integration.</p>
                  </>}
                  index={1}
                  cardClassName="bg-accent-bg w-full"
                  accentColorName="brand-secondary"
                  buttonVariant="secondary"
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
