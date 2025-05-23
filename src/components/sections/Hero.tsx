import React from "react"; // Added React import
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, GraduationCap, ShoppingCart, Network, Rocket, Linkedin } from "lucide-react";
import { useIsMobile } from "@/components/hooks/use-mobile";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"; // Assuming Card related components are used, kept from original
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CaseStudyCard from "@/components/CaseStudyCard";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useEffect, useState, useRef } from "react";
// SkillsBentoGrid import was removed in original Turn 43 if not used, assuming it's used by HeroWithSkills
// import SkillsBentoGrid from "@/components/Skills"; 
// SectionReveal import was present, but not used internally in Hero in that version
// import SectionReveal from "@/components/SectionReveal"; 

gsap.registerPlugin(TextPlugin);

interface MatchMediaConditions {
  isReduced: boolean;
  isNotReduced: boolean;
}

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const isMobile = useIsMobile();
  const headlineRef = useRef<HTMLHeadingElement>(null);

  const phrases = [
    "Simplifying Enterprise Experiences",
    "UX Designer specializing in Enterprise SaaS",
    "Crafting User-Centric Digital Experiences",
    "Transforming Complexity into Clarity",
    "Expert in EdTech & HR Tech"
  ];

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
            phrases.forEach((phrase, index) => {
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
            gsap.set(headlineRef.current, { text: phrases[0], opacity: 0 });
            gsap.to(headlineRef.current, { opacity: 1, duration: 1, ease: "power1.out" });
          }
          return () => { gsap.killTweensOf(headlineRef.current); };
        });
        return () => { mm.revert(); };
      } catch (error) {
        console.error('Error in Hero animation:', error);
        if (headlineRef.current) {
          headlineRef.current.textContent = phrases[0];
        }
      }
    }
  }, []);

  const industries = [
    { title: "EdTech", iconName: "GraduationCap", content: "Led UX strategy and design for SIS, LMS, Recruitment App, and Student Portals.   Revamped SIS through evaluation, design systems, and redesign of 30+ features.    Directed LMS design focusing on accessibility, usability, and scalable workflows.    Designed Student Portal for seamless navigation and mobile responsiveness.    Created eLearning platform for trading courses." },
    { title: "eCommerce", iconName: "ShoppingCart", content: "Redesigned key flows for a B2B pharma eCommerce site.   Designed eCommerce experiences for brands like Robinson Co. and Natural Partners.    Improved product discovery, navigation and checkout flows.    Crafted scalable UI systems for quick orders, subscriptions, and account management." },
    { title: "Connected Tech", iconName: "Network", content: "Led design for connected home interfaces (consumer & industrial IoT).   Founding member of product/design team, revamped platform, built design system.    Designed subscription-based water purifier interface and mobile app for idly dosa batter making machine. Experience includes designing asset management solutions for real-time tool tracking in industrial IoT settings." },
    { title: "Startup", iconName: "Rocket", content: "Contributed to the design and development of various startup products, focusing on user-centered design and rapid iteration.  " }
  ];

  const iconMap: { [key: string]: React.ElementType } = {
    GraduationCap: GraduationCap, ShoppingCart: ShoppingCart, Network: Network, Rocket: Rocket,
  };

  return (
    <section className={`py-16 md:py-24 text-foreground relative bg-background fade-in ${loaded ? 'loaded' : ''}`} style={{ opacity: loaded ? 1 : 0 }}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 items-start">
          {/* Left Column */}
          <div className="space-y-8 md:space-y-10">
            <div>
              <Badge className="bg-primary text-primary-foreground px-3 py-1.5 text-sm font-medium rounded">
                Enterprise UX Designer
              </Badge>
              <h1 ref={headlineRef} className="mt-4 mb-6 text-4xl md:text-5xl lg:text-6xl font-heading font-semibold leading-tight" style={{ minHeight: '150px' }}>
                {phrases[0]}
              </h1>
              <div className="flex items-center mb-8 space-x-2">
                <span className="text-xl md:text-2xl font-sans font-medium text-foreground font-dm-sans">Hi, I'm <span className="font-heading text-primary">Elan</span> <span role='img' aria-label='wave'>👋</span><span role='img' aria-label='nerd'>🤓</span></span>
              </div>
              <p className="text-foreground/80 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
                Experienced UX designer specializing in enterprise SaaS, EdTech, and HR Tech. I transform complex business challenges into intuitive, user-centered solutions that drive measurable impact and enhance usability for large-scale products.
              </p>
              <div className="w-full mb-8 flex justify-start">
                <Button
                  variant="default"
                  className="shadow-md text-base font-medium py-3 px-6 rounded-lg flex items-center gap-2"
                  asChild
                >
                  <a href="/Elanthamilan_UX_Resume.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="h-5 w-5" aria-hidden="true" />
                    Download Resume
                  </a>
                </Button>
              </div>
              <div className="py-6 border-t border-b border-brand-light-gray-accent">
                <div className="px-0">
                  <h3 className="font-heading font-semibold text-foreground mb-4 text-lg">Brands I Have Worked With</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
                    <div className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all text-center">
                      <img src="/Elanable-uploads/Camu.png" alt="Camu" width="80" height="40" className="object-contain mx-auto" />
                      <p className="text-xs text-foreground/70 mt-2">Camu</p>
                    </div>
                    <div className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all text-center">
                      <img src="/Elanable-uploads/Mastek.png" alt="Mastek" width="80" height="40" className="object-contain mx-auto" />
                      <p className="text-xs text-foreground/70 mt-2">Mastek</p>
                    </div>
                    <div className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all text-center">
                      <img src="/Elanable-uploads/Geninfy.jpg" alt="Geninfy" width="80" height="40" className="object-contain mx-auto" />
                      <p className="text-xs text-foreground/70 mt-2">Geninfy</p>
                    </div>
                    <div className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all text-center">
                      <img src="/Elanable-uploads/Oceo.svg" alt="Oceo" width="80" height="40" className="object-contain mx-auto" />
                      <p className="text-xs text-foreground/70 mt-2">Oceo</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 border-t border-b border-brand-light-gray-accent py-6">
                <div className="text-center">
                  <span className="text-xs text-foreground/60 block uppercase tracking-wider">Experience</span>
                  <span className="font-semibold text-xl md:text-2xl block text-foreground mt-1">8+ Years</span>
                </div>
                <div className="text-center">
                  <span className="text-xs text-foreground/60 block uppercase tracking-wider">Products</span>
                  <span className="font-semibold text-xl md:text-2xl block text-foreground mt-1">10+</span>
                </div>
                <div className="text-center">
                  <span className="text-xs text-foreground/60 block uppercase tracking-wider">Features</span>
                  <span className="font-semibold text-xl md:text-2xl block text-foreground mt-1">30+</span>
                </div>
                <div className="text-center">
                  <span className="text-xs text-foreground/60 block uppercase tracking-wider">Systems</span>
                  <span className="font-semibold text-xl md:text-2xl block text-foreground mt-1">2</span>
                </div>
              </div>
              <div className="py-6 border-b border-brand-light-gray-accent">
                <h3 className="font-heading font-semibold text-foreground mb-4 text-lg">Industries I have Worked In</h3>
                <Accordion type="single" collapsible defaultValue="EdTech" className="w-full rounded-xl text-foreground">
                  {industries.map((industry) => (
                    <AccordionItem value={industry.title} key={industry.title} className="border-b border-brand-light-gray-accent last:border-b-0">
                      <AccordionTrigger className="flex items-center w-full py-4 px-4 text-left font-semibold text-lg rounded-lg hover:bg-gray-100 focus:bg-gray-100 transition-colors data-[state=open]:bg-gray-50 data-[state=open]:text-primary">
                        {(() => {
                          const IconComponent = iconMap[industry.iconName];
                          return IconComponent ? <IconComponent className="mr-3 h-6 w-6 flex-shrink-0 text-primary" aria-hidden="true" /> : null;
                        })()}
                        <span>{industry.title}</span>
                      </AccordionTrigger>
                      <AccordionContent className="pt-2 pb-4 px-6 text-foreground/90 text-base leading-relaxed bg-transparent rounded-b-lg">
                        {industry.content}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
              <div className="py-6 border-t border-brand-light-gray-accent">
                <h3 className="font-heading font-semibold text-foreground mb-4 text-lg">Get In Touch</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Button
                    onClick={() => { navigator.clipboard.writeText("elanthamilan12@gmail.com"); alert("Email copied to clipboard!"); }}
                    className="inline-flex items-center justify-center px-4 py-2.5 bg-accent text-accent-foreground hover:bg-gray-800 transition-colors rounded text-sm font-medium"
                    aria-label="Copy Email to Clipboard"
                  >
                    <span className="material-symbols-outlined mr-2 flex-shrink-0 text-base" aria-hidden="true">mail</span>
                    <span>elanthamilan12@gmail.com</span>
                  </Button>
                  <Button
                    onClick={() => { navigator.clipboard.writeText("+918148622302"); alert("Phone number copied to clipboard!"); }}
                    className="inline-flex items-center justify-center px-4 py-2.5 bg-accent text-accent-foreground hover:bg-gray-800 transition-colors rounded text-sm font-medium"
                    aria-label="Copy Phone to Clipboard"
                  >
                    <span className="material-symbols-outlined mr-2 flex-shrink-0 text-base" aria-hidden="true">call</span>
                    <span>+918148622302</span>
                  </Button>
                  <a
                    href="https://wa.me/918148622302" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2.5 bg-accent text-accent-foreground hover:bg-accent/80 transition-colors rounded text-sm font-medium"
                    aria-label="Copy via WhatsApp"
                  >
                    <span className="material-symbols-outlined mr-2 flex-shrink-0 text-base" aria-hidden="true">chat</span>
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/elanthamilan" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2.5 bg-accent text-accent-foreground hover:bg-accent/80 transition-colors rounded text-sm font-medium"
                    aria-label="Visit LinkedIn Profile"
                  >
                    <Linkedin className="mr-2 h-4 w-4 flex-shrink-0" aria-hidden="true" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Right Column - Case Studies */}
          <div className={isMobile ? "mt-12 w-full" : "mt-12"} style={{maxWidth: "720px", width: "100%"}}>
            <div className="h-full">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground">
                  Case Studies
                </h2>
              </div>
              <div className="space-y-8">
                <CaseStudyCard
                  title="Campus Hiring"
                  year="2023"
                  who="Top Indian University"
                  what="End-to-end campus hiring platform"
                  result="50% reduction in hiring time"
                  image="/Elanable-uploads/Camu Campus Recruitment App.png"
                  link="/case-study/campus-hiring"
                  tags={['Education', 'Web Application', 'UI/UX']}
                  description={<>
                    <p className="mb-2 text-sm text-foreground/90">A platform to streamline campus hiring processes.</p>
                  </>}
                  index={0}
                />
                <CaseStudyCard
                  title="Student Course Planner Redesign"
                  year="2025"
                  who="University Students"
                  what="AI-powered course planning tool"
                  result="60% reduction in scheduling time"
                  image="/Elanable-uploads/78be9a59-8230-4ea5-b024-d96fd3cdd83e.png"
                  link="/case-study/student-planner"
                  tags={["AI Integration", "UX Research", "Education"]}
                  description={<>
                    <p className="mb-2 text-sm text-foreground/90">A redesign of a student course planning tool with AI integration.</p>
                  </>}
                  index={1}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Note: SkillsBentoGrid and SectionReveal would be used here if this was the version with animations
// For this restored version, HeroWithSkills just exports Hero directly or includes SkillsBentoGrid without SectionReveal.
// To match the state *before* the internal SectionReveal was added to Hero itself, HeroWithSkills would look like this:

// const HeroWithSkills = () => {
//   return (
//     <>
//       <Hero />
//       {/* SkillsBentoGrid would be rendered here, possibly wrapped in its own section and container */}
//       {/* e.g., <section><div className="container"><SkillsBentoGrid /></div></section> */}
//       {/* For simplicity of restoration, I'm assuming HeroWithSkills just calls Hero if SkillsBentoGrid is complex to reintegrate without its own SectionReveal */}
//     </>
//   );
// };
// However, the last known good state before animation errors had HeroWithSkills rendering SkillsBentoGrid inside a SectionReveal.
// Since this restoration is *before* the problematic Hero internal animations,
// the HeroWithSkills structure that includes SectionReveal for the skills section is appropriate.

export default function HeroWithSkills() {
  // This is the structure that was present after Turn 35 of the main task,
  // which was before the Hero component itself had internal SectionReveal tags that caused issues.
  // This version assumes Hero itself does not have internal SectionReveal wrappers.
  return (
    <>
      <Hero />
      <SectionReveal>
        <section className="w-full py-24 bg-gradient-to-b from-background to-gray-50 dark:to-gray-900">
          <div className="max-w-7xl mx-auto px-4">
            <span className="bg-secondary text-secondary-foreground px-3 py-1.5 text-sm font-medium rounded mb-4 inline-block reveal">My Expertise</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-center text-foreground reveal">Skills & Expertise</h2>
            <p className="text-foreground/80 max-w-2xl mx-auto text-lg leading-relaxed mb-12 text-center reveal">
              With over 8 years of experience, I've developed a comprehensive skill set focused on creating exceptional user experiences for enterprise products.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
              <div className="col-span-2 row-span-2 bg-white/90 dark:bg-gray-900/80 rounded-3xl shadow-xl p-8 flex flex-col items-start justify-between border border-gray-100 dark:border-gray-800 hover:scale-[1.02] transition-transform reveal">
                <span className="text-5xl mb-4" role="img" aria-label="UI Design">🎨</span>
                <h3 className="text-2xl font-bold mb-2 text-foreground">UI Design</h3>
                <p className="text-foreground/80 text-base mb-4">Wireframing, prototyping, and visual design for enterprise products.</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-3xl shadow-lg p-6 flex flex-col items-start border border-blue-100 dark:border-blue-800 hover:scale-[1.02] transition-transform reveal">
                <span className="text-4xl mb-3" role="img" aria-label="UX Research">🔍</span>
                <h3 className="text-xl font-semibold mb-1 text-foreground">UX Research</h3>
                <p className="text-foreground/80 text-base">User interviews, surveys, usability testing, and data analysis.</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 rounded-3xl shadow-lg p-6 flex flex-col items-start border border-green-100 dark:border-green-800 hover:scale-[1.02] transition-transform reveal">
                <span className="text-4xl mb-3" role="img" aria-label="Design Systems">🎯</span>
                <h3 className="text-xl font-semibold mb-1 text-foreground">Design Systems</h3>
                <p className="text-foreground/80 text-base">Component libraries, style guides, and design tokens.</p>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-3xl shadow-lg p-6 flex flex-col items-start border border-yellow-100 dark:border-yellow-800 hover:scale-[1.02] transition-transform reveal">
                <span className="text-4xl mb-3" role="img" aria-label="Accessibility">♿</span>
                <h3 className="text-xl font-semibold mb-1 text-foreground">Accessibility</h3>
                <p className="text-foreground/80 text-base">WCAG compliance, inclusive design, and usability.</p>
              </div>
              <div className="bg-pink-50 dark:bg-pink-900/20 rounded-3xl shadow-lg p-6 flex flex-col items-start border border-pink-100 dark:border-pink-800 hover:scale-[1.02] transition-transform reveal">
                <span className="text-4xl mb-3" role="img" aria-label="Interaction Design">✨</span>
                <h3 className="text-xl font-semibold mb-1 text-foreground">Interaction Design</h3>
                <p className="text-foreground/80 text-base">Micro-interactions, animations, and motion design.</p>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 rounded-3xl shadow-lg p-6 flex flex-col items-start border border-red-100 dark:border-red-800 hover:scale-[1.02] transition-transform reveal">
                <span className="text-4xl mb-3" role="img" aria-label="Product Strategy">📈</span>
                <h3 className="text-xl font-semibold mb-1 text-foreground">Product Strategy</h3>
                <p className="text-foreground/80 text-base">User-centered design thinking and product roadmaps.</p>
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>
    </>
  );
}
// Removed SkillsBentoGrid direct export as HeroWithSkills is the default
// export default Hero; // Hero is used by HeroWithSkills, which is the default export
