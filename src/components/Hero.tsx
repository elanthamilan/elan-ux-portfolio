
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail, Phone, Linkedin, MessageSquare, GraduationCap, ShoppingCart, Network, Rocket } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CaseStudyCard from "./CaseStudyCard";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin"; // Import TextPlugin
import { useEffect, useState, useRef } from "react"; // Added useRef

gsap.registerPlugin(TextPlugin); // Register TextPlugin

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const isMobile = useIsMobile();
  const headlineRef = useRef(null); // Create headlineRef

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
      const mm = gsap.matchMedia();

      mm.add({
        // For users who prefer reduced motion
        isReduced: "(prefers-reduced-motion: reduce)",
        // For users who have no preference for reduced motion
        isNotReduced: "(prefers-reduced-motion: no-preference)"
      }, (context) => {
        // context.conditions has a boolean property for each condition defined above
        const { isReduced, isNotReduced } = context.conditions;

        if (isNotReduced) {
          // FULL ANIMATION LOGIC (existing timeline code)
          gsap.set(headlineRef.current, { text: "" }); // Ensure headline is initially empty
          const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
          
          phrases.forEach((phrase, index) => {
            if (index === 0) { // Initial entry for the very first phrase
              tl.set(headlineRef.current, { text: "", opacity: 0, y: 20 })
                .to(headlineRef.current, {
                    opacity: 1, y: 0, duration: 0.4, ease: "power1.out"
                })
                .to(headlineRef.current, {
                    text: phrase, duration: phrase.length * 0.06, ease: "none",
                }, "+=0.2")
                .to(headlineRef.current, { duration: 2 }, "+=0.5");
            } else { // Subsequent phrases
              tl.to(headlineRef.current, {
                  opacity: 0, y: -20, duration: 0.4, ease: "power1.in"
              });
              tl.set(headlineRef.current, { text: "", opacity: 0, y: 20 })
                .to(headlineRef.current, {
                    opacity: 1, y: 0, duration: 0.4, ease: "power1.out"
                })
                .to(headlineRef.current, {
                    text: phrase, duration: phrase.length * 0.06, ease: "none",
                }, "+=0.2")
                .to(headlineRef.current, { duration: 2 }, "+=0.5");
            }
          });
          
          tl.to(headlineRef.current, { // Final animation out for the last phrase
              opacity: 0, y: -20, duration: 0.4, ease: "power1.in"
          });

        } else if (isReduced) {
          // REDUCED MOTION: Set static text (first phrase) and fade in
          gsap.set(headlineRef.current, { text: phrases[0], opacity: 0 });
          gsap.to(headlineRef.current, { opacity: 1, duration: 1, ease: "power1.out" });
        }
        
        return () => { // Cleanup for the context
          gsap.killTweensOf(headlineRef.current); 
        };
      });
      
      // Cleanup function for the useEffect itself, to revert the matchMedia instance
      return () => {
          mm.revert();
      };
    }
  }, []); // Empty dependency array as phrases is stable and defined outside this effect's direct scope in a way that won't change.

  const industries = [
    {
      title: "EdTech",
      iconName: "GraduationCap",
      content:
        "Led UX strategy and design for SIS, LMS, Recruitment App, and Student Portals.   Revamped SIS through evaluation, design systems, and redesign of 30+ features.    Directed LMS design focusing on accessibility, usability, and scalable workflows.    Designed Student Portal for seamless navigation and mobile responsiveness.    Created eLearning platform for trading courses.",
    },
    {
      title: "eCommerce",
      iconName: "ShoppingCart",
      content:
        "Redesigned key flows for a B2B pharma eCommerce site.   Designed eCommerce experiences for brands like Robinson Co. and Natural Partners.    Improved product discovery, navigation and checkout flows.    Crafted scalable UI systems for quick orders, subscriptions, and account management.",
    },
    {
      title: "Connected Tech",
      iconName: "Network",
      content:
        "Led design for connected home interfaces (consumer & industrial IoT).   Founding member of product/design team, revamped platform, built design system.    Designed subscription-based water purifier interface and mobile app for idly dosa batter making machine. Experience includes designing asset management solutions for real-time tool tracking in industrial IoT settings.",
    },
    {
      title: "Startup",
      iconName: "Rocket",
      content: "Contributed to the design and development of various startup products, focusing on user-centered design and rapid iteration.  ",
    }
  ];

  const iconMap: { [key: string]: React.ElementType } = {
    GraduationCap: GraduationCap,
    ShoppingCart: ShoppingCart,
    Network: Network,
    Rocket: Rocket,
  };

  return (
    <section className={`py-10 md:py-16 text-foreground relative bg-gradient-to-br from-mesh-gradient-start via-mesh-gradient-middle to-mesh-gradient-end fade-in ${loaded ? 'loaded' : ''}`}>
      {/* Abstract background elements REMOVED for Intercom style */}
      
      <div className="container mx-auto px4 relative z-10"> {/* Added z-10 to ensure content is above gradient if needed */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 items-start"> {/* Adjusted gap */}
          {/* Left Column: Professional Information */}
          <div className="space-y-8 md:space-y-10"> {/* Increased spacing */}
            <div>
              <Badge className="bg-brand-badge-bg text-foreground px-3 py-1.5 text-sm font-medium rounded"> {/* Intercom badge style */}
                Enterprise UX Designer
              </Badge>
              
              {/* Intercom uses large serif headings */}
              <h1 ref={headlineRef} className="mt-4 mb-6 text-4xl md:text-5xl lg:text-6xl font-heading font-semibold leading-tight" style={{ minHeight: '150px' }}>
                {/* Initial text removed, GSAP will populate */}
              </h1>
              
              <div className="flex items-center mb-8 space-x-2">
                <span role="img" aria-label="wave" className="text-2xl">👋</span>
                <span className="text-xl md:text-2xl font-sans font-medium text-foreground font-dm-sans">Hi, I'm Elanthamilan</span>
              </div>
              
              <p className="text-foreground/80 text-lg md:text-xl max-w-xl mb-10 leading-relaxed"> {/* Intercom body text style */}
                Experienced UX designer specializing in enterprise SaaS, EdTech, and HR Tech. 
                I transform complex business challenges into intuitive, user-centered solutions 
                that drive measurable impact and enhance usability for large-scale products.
              </p>

              {/* Download Resume Button - Intercom primary CTA style */}
              <div className="w-full mb-8">
                <Button 
                  className="bg-primary text-primary-foreground hover:bg-gray-800 transition-colors shadow-md text-base font-medium py-3 px-6 rounded" 
                  asChild
                >
                  <a href="/Elanthamilan_UX_Resume.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-5 w-5" aria-hidden="true" />
                    Download Resume
                  </a>
                </Button>
              </div>

              {/* Brands section - Re-added and styled for Intercom theme */}
              <div className="py-6 border-t border-b border-brand-light-gray-accent"> {/* Simple border separator */}
                <div className="px-0"> {/* Removed extra padding */}
                  <h3 className="font-heading font-semibold text-foreground mb-4 text-lg">Brands I Have Worked With</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
                    {/* Logos remain grayscale, text adjusted */}
                    <div className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all text-center">
                      <img src="/Elanable-uploads/Camu.png" alt="Camu" width="80" height="40" style={{ objectFit: 'contain', margin: '0 auto' }} />
                      <p className="text-xs text-foreground/70 mt-2">Camu</p>
                    </div>
                    <div className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all text-center">
                      <img src="/Elanable-uploads/Mastek.png" alt="Mastek" width="80" height="40" style={{ objectFit: 'contain', margin: '0 auto' }} />
                      <p className="text-xs text-foreground/70 mt-2">Mastek</p>
                    </div>
                    <div className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all text-center">
                      <img src="/Elanable-uploads/Geninfy.jpg" alt="Geninfy" width="80" height="40" style={{ objectFit: 'contain', margin: '0 auto' }} />
                      <p className="text-xs text-foreground/70 mt-2">Geninfy</p>
                    </div>
                    <div className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all text-center">
                      <img src="/Elanable-uploads/Oceo.svg" alt="Oceo" width="80" height="40" style={{ objectFit: 'contain', margin: '0 auto' }} />
                      <p className="text-xs text-foreground/70 mt-2">Oceo</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Stats - Re-added and styled for Intercom theme */}
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 border-t border-b border-brand-light-gray-accent py-6">
                 {/* Removed card structure, using simple text */}
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

              {/* Industries I have Worked In - Re-added and styled for Intercom theme */}
              <div className="py-6 border-b border-brand-light-gray-accent">
                <h3 className="font-heading font-semibold text-foreground mb-4 text-lg">Industries I have Worked In</h3>
                {/* Accordion styling relies on ui/accordion.tsx adapting to theme variables */}
                <Accordion type="single" collapsible defaultValue="EdTech" className="w-full">
                  {industries.map((industry) => (
                    <AccordionItem value={industry.title} key={industry.title} className="border-b border-brand-light-gray-accent last:border-b-0">
                      <AccordionTrigger className="flex items-center w-full py-3 text-left font-medium text-foreground hover:no-underline data-[state=open]:text-brand-link-text">
                        {(() => {
                          const IconComponent = iconMap[industry.iconName];
                          return IconComponent ? <IconComponent className="mr-2 h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" /> : null;
                        })()}
                        <span>{industry.title}</span>
                      </AccordionTrigger>
                      <AccordionContent className="pt-1 pb-3 text-foreground/80">
                        {industry.content}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Contact Buttons - Re-added and styled for Intercom theme (2x2 Grid) */}
               <div className="py-6 border-t border-brand-light-gray-accent"> {/* Added border */}
                 <h3 className="font-heading font-semibold text-foreground mb-4 text-lg">Get In Touch</h3>
                 {/* Using 2x2 grid and consistent secondary button style */}
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Button
                      onClick={() => {
                        navigator.clipboard.writeText("elanthamilan12@gmail.com");
                        alert("Email copied to clipboard!");
                      }}
                      className="inline-flex items-center justify-center px-4 py-2.5 bg-accent text-accent-foreground hover:bg-accent/80 transition-colors rounded text-sm font-medium"
                      aria-label="Copy Email to Clipboard"
                    >
                      <Mail size={16} className="mr-2 flex-shrink-0" aria-hidden="true" />
                      <span>elanthamilan12@gmail.com</span>
                    </Button>
                    <Button
                      onClick={() => {
                        navigator.clipboard.writeText("+918148622302");
                        alert("Phone number copied to clipboard!");
                      }}
                      className="inline-flex items-center justify-center px-4 py-2.5 bg-accent text-accent-foreground hover:bg-accent/80 transition-colors rounded text-sm font-medium"
                      aria-label="Copy Phone to Clipboard"
                    >
                      <Phone size={16} className="mr-2 flex-shrink-0" aria-hidden="true" />
                      <span>+918148622302</span>
                    </Button>
                    <a
                      href="https://wa.me/918148622302"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2.5 bg-accent text-accent-foreground hover:bg-accent/80 transition-colors rounded text-sm font-medium"
                      aria-label="Contact via WhatsApp"
                    >
                      <MessageSquare size={16} className="mr-2 flex-shrink-0" aria-hidden="true" />
                      <span>WhatsApp</span>
                    </a>
                    <a
                      href="https://linkedin.com/in/elanthamilan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2.5 bg-accent text-accent-foreground hover:bg-accent/80 transition-colors rounded text-sm font-medium"
                      aria-label="Visit LinkedIn Profile"
                    >
                      <Linkedin size={16} className="mr-2 flex-shrink-0" aria-hidden="true" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                  <p className="mt-4 text-sm text-foreground/80 text-center sm:text-left">
                    Email: <span className="font-medium">elanthamilan12@gmail.com</span>
                  </p>
                </div>
            </div>
          </div>

          
                    {/* Right Column: Case Studies - Simplified and restyled for Intercom */}
                    <div className={isMobile ? "mt-8 w-full" : "mt-2"} style={{maxWidth: "720px", width: "100%"}}>
                      {/* Adjusted top margin for desktop */}
                      <div className="h-full">
                        <div className="mb-8">
                          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground">
                            Case Studies
                          </h2>
                        </div>
              <div className="space-y-8">
                {/* Increased spacing between cards */}
                <CaseStudyCard
                  title="Campus Hiring"
                  year="2023"
                  who="Top Indian University"
                  what="End-to-end campus hiring platform"
                  result="50% reduction in hiring time"
                  image="/Elanable-uploads/Camu Campus Recruitment App.png"
                  caseStudyLink="/case-study/campus-hiring"
                  badges={['Education', 'Web Application', 'UI/UX']}
                  backgroundColor="#F2F8F7"
                  buttonColor="#156152"
                  description="A platform to streamline campus hiring processes."
                />
                <CaseStudyCard
                  title="Student Course Planner Redesign"
                  year="2025"
                  who="HR Teams, Recruiters, Students"
                  what="Unified campus hiring platform."
                  result="40% faster hiring, 85% user satisfaction."
                  image="/Elanable-uploads/Camu Campus Recruitment App.png"
                  caseStudyLink="/case-study/student-planner"
                  badges={["AI Integration", "UX Research"]}
                  backgroundColor="#F3F6F9"
                  buttonColor="#16325A"
                  description="A redesign of a student course planning tool."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
