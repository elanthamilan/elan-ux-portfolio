
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail, Phone, Linkedin, MessageSquare } from "lucide-react";
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
import { gsap } from "@/lib/gsapUtils"; // Corrected import path
import { useEffect, useRef } from "react"; // Removed useState

const Hero = () => {
  // const [loaded, setLoaded] = useState(false); // Removed loaded state
  const isMobile = useIsMobile();

  // Refs for animations
  const heroVisualRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const waveAndNameRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const resumeButtonRef = useRef<HTMLDivElement>(null);
  const brandsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const caseStudiesTitleRef = useRef<HTMLHeadingElement>(null);
  const caseStudyCardsWrapperRef = useRef<HTMLDivElement>(null);

  // Hover effect for resume button
  const handleMouseEnterResume = () => {
    if (resumeButtonRef.current) {
      gsap.to(resumeButtonRef.current, { y: -3, scale: 1.03, duration: 0.25, ease: 'power1.out' });
    }
  };

  const handleMouseLeaveResume = () => {
    if (resumeButtonRef.current) {
      gsap.to(resumeButtonRef.current, { y: 0, scale: 1, duration: 0.2, ease: 'power1.in' });
    }
  };

  useEffect(() => {
    // setLoaded(true); // Removed, GSAP handles entry
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    if (heroVisualRef.current) {
      tl.from(heroVisualRef.current, { opacity: 0, scale: 1.05, duration: 0.8 });
    }
    if (badgeRef.current) {
      tl.from(badgeRef.current, { opacity: 0, y: 30, duration: 0.5 }, "-=0.6");
    }
    if (headlineRef.current) {
      tl.from(headlineRef.current, { opacity: 0, y: 50, duration: 0.6 }, "-=0.4");
    }
    if (waveAndNameRef.current) {
      tl.from(waveAndNameRef.current, { opacity: 0, y: 40, duration: 0.5 }, "-=0.4");
    }
    if (descriptionRef.current) {
      tl.from(descriptionRef.current, { opacity: 0, y: 40, duration: 0.5 }, "-=0.3");
    }
    if (resumeButtonRef.current) {
      tl.from(resumeButtonRef.current, { opacity: 0, y: 30, duration: 0.4 }, "-=0.3"); // Entry animation
    }
    if (brandsRef.current) {
      tl.from(brandsRef.current, { opacity: 0, y: 30, duration: 0.5 }, "-=0.2");
    }
    if (statsRef.current) {
      tl.from(statsRef.current, { opacity: 0, y: 30, duration: 0.5 }, "-=0.3");
    }
    if (industriesRef.current) {
      tl.from(industriesRef.current, { opacity: 0, y: 30, duration: 0.5 }, "-=0.3");
    }
    if (contactRef.current) {
      tl.from(contactRef.current, { opacity: 0, y: 30, duration: 0.5 }, "-=0.3");
    }
    if (caseStudiesTitleRef.current) {
      tl.from(caseStudiesTitleRef.current, { opacity: 0, y: 40, duration: 0.5 }, "-=0.7"); // Start this earlier
    }
    if (caseStudyCardsWrapperRef.current && caseStudyCardsWrapperRef.current.children.length > 0) {
      tl.from(caseStudyCardsWrapperRef.current.children, { 
        opacity: 0, 
        y: 30, 
        stagger: 0.2, 
        duration: 0.4 
      }, "-=0.3");
    }

  }, []);

  const industries = [
    {
      title: "EdTech",
      content:
        "Led UX strategy and design for SIS, LMS, Recruitment App, and Student Portals.   Revamped SIS through evaluation, design systems, and redesign of 30+ features.    Directed LMS design focusing on accessibility, usability, and scalable workflows.    Designed Student Portal for seamless navigation and mobile responsiveness.    Created eLearning platform for trading courses.",
    },
    {
      title: "eCommerce",
      content:
        "Redesigned key flows for a B2B pharma eCommerce site.   Designed eCommerce experiences for brands like Robinson Co. and Natural Partners.    Improved product discovery, navigation and checkout flows.    Crafted scalable UI systems for quick orders, subscriptions, and account management.",
    },
    {
      title: "Connected Home",
      content:
        "Led design for connected home interfaces (consumer & industrial IoT).   Founding member of product/design team, revamped platform, built design system.    Designed subscription-based water purifier interface and mobile app for idly dosa batter making machine.",
    },
    {
      title: "Construction",
      content:
        "Designed construction asset management app for real-time tool tracking.   ",
    },
    {
      title: "Startup",
      content: "Contributed to the design and development of various startup products, focusing on user-centered design and rapid iteration.  ",
    }
  ];

  return (
    <section ref={heroVisualRef} className={`py-8 sm:py-10 md:py-16 text-foreground relative bg-gradient-to-br from-mesh-gradient-start via-mesh-gradient-middle to-mesh-gradient-end`}>
      {/* Abstract background elements REMOVED for Intercom style */}
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 md:gap-y-8 items-start">
          {/* Left Column: Professional Information */}
          <div className="space-y-6 md:space-y-8"> {/* Adjusted spacing for mobile and desktop */}
            <div>
              <div ref={badgeRef}>
                <Badge className="bg-accent text-foreground px-3 py-1.5 text-sm font-medium rounded"> {/* Replaced bg-brand-badge-bg with bg-accent */}
                  Enterprise UX Designer
                </Badge>
              </div>
              
              <h1 ref={headlineRef} className="mt-3 sm:mt-4 mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-semibold leading-tight">
                Simplifying Enterprise Experiences
              </h1>
              
              <div ref={waveAndNameRef} className="flex items-center mb-6 sm:mb-8 space-x-2">
                <span role="img" aria-label="wave" className="text-xl sm:text-2xl">👋</span>
                <span className="text-lg sm:text-xl md:text-2xl font-sans font-medium text-foreground font-dm-sans">Hi, I'm Elanthamilan</span>
              </div>
              
              <p ref={descriptionRef} className="text-foreground/80 text-base sm:text-lg md:text-xl max-w-xl mb-8 sm:mb-10 leading-relaxed">
                Experienced UX designer specializing in enterprise SaaS, EdTech, and HR Tech. 
                I transform complex business challenges into intuitive, user-centered solutions 
                that drive measurable impact and enhance usability for large-scale products.
              </p>

              {/* Download Resume Button - Intercom primary CTA style */}
              <div 
                ref={resumeButtonRef} 
                className="w-full sm:w-auto mb-8 inline-block" // Adjusted width for mobile, sm:w-auto for larger
                onMouseEnter={handleMouseEnterResume}
                onMouseLeave={handleMouseLeaveResume}
              >
                <Button 
                  className="bg-primary text-primary-foreground hover:bg-gray-800 transition-colors shadow-md text-base font-medium py-3 px-6 rounded w-full sm:w-auto" // Full width on mobile
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
                  <a href="/Elanable-uploads/Camu.png" alt="Camu" className="w-16 sm:w-20 h-auto mx-auto" style={{ objectFit: 'contain' }} />
                  <p className="text-xs text-foreground/80 mt-1 sm:mt-2">Camu</p> {/* text-foreground/70 to text-foreground/80 */}
                    </div>
                    <div className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all text-center">
                  <img src="/Elanable-uploads/Mastek.png" alt="Mastek" className="w-16 sm:w-20 h-auto mx-auto" style={{ objectFit: 'contain' }} />
                  <p className="text-xs text-foreground/80 mt-1 sm:mt-2">Mastek</p> {/* text-foreground/70 to text-foreground/80 */}
                    </div>
                    <div className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all text-center">
                  <img src="/Elanable-uploads/Geninfy.jpg" alt="Geninfy" className="w-16 sm:w-20 h-auto mx-auto" style={{ objectFit: 'contain' }} />
                  <p className="text-xs text-foreground/80 mt-1 sm:mt-2">Geninfy</p> {/* text-foreground/70 to text-foreground/80 */}
                    </div>
                    <div className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all text-center">
                  <img src="/Elanable-uploads/Oceo.svg" alt="Oceo" className="w-16 sm:w-20 h-auto mx-auto" style={{ objectFit: 'contain' }} />
                  <p className="text-xs text-foreground/80 mt-1 sm:mt-2">Oceo</p> {/* text-foreground/70 to text-foreground/80 */}
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Stats - Re-added and styled for Intercom theme */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 border-t border-b border-brand-light-gray-accent py-5 sm:py-6">
                 {/* Removed card structure, using simple text */}
                <div className="text-center">
              <span className="text-xs text-foreground/80 block uppercase tracking-wider">Experience</span> {/* text-foreground/60 to text-foreground/80 */}
              <span className="font-semibold text-lg sm:text-xl md:text-2xl block text-foreground mt-1">8+ Years</span>
                </div>
                <div className="text-center">
              <span className="text-xs text-foreground/80 block uppercase tracking-wider">Products</span> {/* text-foreground/60 to text-foreground/80 */}
              <span className="font-semibold text-lg sm:text-xl md:text-2xl block text-foreground mt-1">10+</span>
                </div>
                 <div className="text-center">
              <span className="text-xs text-foreground/80 block uppercase tracking-wider">Features</span> {/* text-foreground/60 to text-foreground/80 */}
              <span className="font-semibold text-lg sm:text-xl md:text-2xl block text-foreground mt-1">30+</span>
                </div>
                 <div className="text-center">
              <span className="text-xs text-foreground/80 block uppercase tracking-wider">Systems</span> {/* text-foreground/60 to text-foreground/80 */}
              <span className="font-semibold text-lg sm:text-xl md:text-2xl block text-foreground mt-1">2</span>
                </div>
              </div>

              {/* Industries I have Worked In - Re-added and styled for Intercom theme */}
          <div className="py-5 sm:py-6 border-b border-brand-light-gray-accent">
            <h3 className="font-heading font-semibold text-foreground mb-3 sm:mb-4 text-lg">Industries I have Worked In</h3>
                {/* Accordion styling relies on ui/accordion.tsx adapting to theme variables */}
                <Accordion type="single" collapsible defaultValue="EdTech" className="w-full">
                  {industries.map((industry) => (
                    <AccordionItem value={industry.title} key={industry.title} className="border-b border-brand-light-gray-accent last:border-b-0">
                  <AccordionTrigger className="py-2.5 sm:py-3 text-left font-medium text-foreground hover:no-underline data-[state=open]:text-brand-link-text text-sm sm:text-base">
                        {industry.title}
                      </AccordionTrigger>
                  <AccordionContent className="pt-1 pb-2 sm:pb-3 text-foreground/80 text-sm sm:text-base"> {/* Accordion content already text-foreground/80 which is fine */}
                        {industry.content}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Contact Buttons - Re-added and styled for Intercom theme (2x2 Grid) */}
           <div className="py-5 sm:py-6 border-t border-brand-light-gray-accent"> {/* Added border */}
             <h3 className="font-heading font-semibold text-foreground mb-3 sm:mb-4 text-lg">Get In Touch</h3>
                 {/* Using 2x2 grid and consistent secondary button style */}
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
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
                      href="https://linkedin.com/in/elanthamilan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2.5 bg-accent text-accent-foreground hover:bg-accent/80 transition-colors rounded text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      aria-label="Visit LinkedIn Profile"
                    >
                      <Linkedin size={16} className="mr-2 flex-shrink-0" aria-hidden="true" />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href="https://wa.me/918148622302"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2.5 bg-accent text-accent-foreground hover:bg-accent/80 transition-colors rounded text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      aria-label="Contact via WhatsApp"
                    >
                      <MessageSquare size={16} className="mr-2 flex-shrink-0" aria-hidden="true" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
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
