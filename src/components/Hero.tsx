import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail, Phone, Linkedin, MessageSquare } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Hero = () => {
  const isMobile = useIsMobile();

  const industries = [
    {
      title: "EdTech",
      content:
        "Led UX strategy and design for SIS, LMS, Recruitment App, and Student Portals.   Revamped SIS through evaluation, design systems, and redesign of 30+ features.    Directed LMS design focusing on accessibility, usability, and scalable workflows.    Designed Student Portal for seamless navigation and mobile responsiveness.    Created eLearning platform for trading courses.",
    },
    {
      title: "eCommerce",
      content:
        "Redesigned key flows for a B2B pharma eCommerce site.   Designed eCommerce experiences for brands like Robinson Co. and Natural Partners.    Improved product discovery, navigation, and checkout flows.    Crafted scalable UI systems for quick orders, subscriptions, and account management.",
    },
    {
      title: "Connected Home",
      content:
        "Led design for connected home interfaces (consumer & industrial IoT).   Founding member of product/design team, revamped platform, built design system.    Designed subscription-based water purifier interface and mobile app. Designed machine interface and mobile app for idly dosa batter making machine.",
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
    <section className="py-10 md:py-16 bg-background text-foreground relative"> {/* Removed overflow-hidden, no abstract elements */}
      {/* Abstract background elements REMOVED for Intercom style */}
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 items-start"> {/* Adjusted gap */}
          {/* Left Column: Professional Information */}
          <div className="space-y-8 md:space-y-10"> {/* Increased spacing */}
            <div>
              <Badge className="bg-brand-badge-bg text-foreground px-3 py-1.5 text-sm font-medium rounded"> {/* Intercom badge style */}
                Enterprise UX Designer
              </Badge>
              
              {/* Intercom uses large serif headings */}
              <h1 className="mt-4 mb-6 text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight">
                Simplifying Enterprise Experiences
              </h1>
              
              <div className="flex items-center mb-8 space-x-2">
                <span role="img" aria-label="wave" className="text-2xl">👋</span>
                <span className="text-xl md:text-2xl font-sans font-medium text-foreground">Hi, I'm Elanthamilan</span>
                <span role="img" aria-label="peace" className="text-2xl">✌️</span>
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
                  <h3 className="font-serif font-semibold text-foreground mb-4 text-lg">Brands I Have Worked With</h3>
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
                <h3 className="font-serif font-semibold text-foreground mb-4 text-lg">Industries I have Worked In</h3>
                {/* Accordion styling relies on ui/accordion.tsx adapting to theme variables */}
                <Accordion type="single" collapsible defaultValue="EdTech" className="w-full">
                  {industries.map((industry) => (
                    <AccordionItem value={industry.title} key={industry.title} className="border-b border-brand-light-gray-accent last:border-b-0">
                      <AccordionTrigger className="py-3 text-left font-medium text-foreground hover:no-underline data-[state=open]:text-brand-link-text">
                        {industry.title}
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
                 <h3 className="font-serif font-semibold text-foreground mb-4 text-lg">Get In Touch</h3>
                 {/* Using 2x2 grid and consistent secondary button style */}
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                   <a
                     href="mailto:elanthamilan12@gmail.com"
                     className="inline-flex items-center justify-center px-4 py-2.5 bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors rounded text-sm font-medium"
                     aria-label="Contact via Email"
                   >
                     <Mail size={16} className="mr-2 flex-shrink-0" aria-hidden="true" />
                     <span>Email</span> 
                     {/* Shortened text for grid */}
                   </a>
                   <a
                     href="tel:+918148622302"
                     className="inline-flex items-center justify-center px-4 py-2.5 bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors rounded text-sm font-medium"
                     aria-label="Contact via Phone"
                   >
                     <Phone size={16} className="mr-2 flex-shrink-0" aria-hidden="true" />
                     <span>Phone</span> 
                     {/* Shortened text for grid */}
                   </a>
                   <a
                     href="https://linkedin.com/in/elanthamilan"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-flex items-center justify-center px-4 py-2.5 bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors rounded text-sm font-medium"
                     aria-label="Visit LinkedIn Profile"
                   >
                     <Linkedin size={16} className="mr-2 flex-shrink-0" aria-hidden="true" />
                     <span>LinkedIn</span>
                   </a>
                   <a
                     href="https://wa.me/918148622302"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-flex items-center justify-center px-4 py-2.5 bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors rounded text-sm font-medium"
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
          <div className={isMobile ? "mt-8" : "mt-2"}> {/* Adjusted top margin for desktop */}
            <div className="h-full">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">Case Studies</h2>
              </div>

              <div className="space-y-8"> {/* Increased spacing between cards */}
                <Link
                  to="/case-study/student-planner"
                  className="block group"
                  aria-label="View Student Planner Case Study"
                >
                  {/* Intercom style cards are often very flat or use subtle borders/shadows */}
                  <Card className="overflow-hidden bg-background border border-brand-light-gray-accent/50 rounded-lg group-hover:shadow-xl transition-all duration-300">
                    <div className="aspect-video w-full bg-gray-200 overflow-hidden"> {/* Neutral placeholder bg for image */}
                      <img
                        src="/Elanable-uploads/Student Course Planner Redesign.png"
                        alt="Student Course Planner Redesign"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardHeader className="p-6"> {/* Increased padding */}
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-serif font-semibold text-xl md:text-2xl text-foreground">Student Course Planner Redesign</h3>
                        <Badge className="bg-brand-badge-bg text-foreground px-2.5 py-1 text-xs font-medium rounded">2021</Badge>
                      </div>
                      <p className="text-sm md:text-base text-foreground/70">Academic planning platform for students</p>
                    </CardHeader>
                    <CardContent className="p-6 pt-0">
                       {/* Simplified content display */}
                      <div className="space-y-3 text-sm text-foreground/70">
                        <p><strong className="font-medium text-foreground/90">Key Focus:</strong> AI-powered course scheduling, enhanced usability for students and advisors.</p>
                        <p><strong className="font-medium text-foreground/90">Impact:</strong> Achieved 60% reduction in planning time and a 92% task success rate.</p>
                      </div>
                       <div className="flex gap-2 mt-4">
                        <Badge className="bg-brand-badge-bg text-foreground/90 px-2.5 py-1 text-xs font-medium rounded">AI Integration</Badge>
                        <Badge className="bg-brand-badge-bg text-foreground/90 px-2.5 py-1 text-xs font-medium rounded">UX Research</Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-2">
                      <span className="text-sm font-medium text-foreground group-hover:text-brand-link-text transition-colors">
                        View Full Case Study
                        <ArrowRight className="ml-1.5 h-4 w-4 inline-block group-hover:translate-x-0.5 transition-transform duration-300" aria-hidden="true" />
                      </span>
                    </CardFooter>
                  </Card>
                </Link>
                
                 <Link
                  to="/case-study/campus-hiring"
                  className="block group"
                  aria-label="View Campus Hiring Case Study"
                >
                  <Card className="overflow-hidden bg-background border border-brand-light-gray-accent/50 rounded-lg group-hover:shadow-xl transition-all duration-300">
                     <div className="aspect-video w-full bg-gray-200 overflow-hidden"> {/* Neutral placeholder bg */}
                      <img
                        src="/Elanable-uploads/Camu Campus Recruitment App.png"
                        alt="Camu Campus Recruitment App"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardHeader className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-serif font-semibold text-xl md:text-2xl text-foreground">Camu Campus Recruitment App</h3>
                        <Badge className="bg-brand-badge-bg text-foreground px-2.5 py-1 text-xs font-medium rounded">2025</Badge>
                      </div>
                      <p className="text-sm md:text-base text-foreground/70">HR Tech platform for streamlined recruiting</p>
                    </CardHeader>
                    <CardContent className="p-6 pt-0">
                      <div className="space-y-3 text-sm text-foreground/70">
                        <p><strong className="font-medium text-foreground/90">Key Focus:</strong> Unified campus hiring platform for HR teams, recruiters, and students.</p>
                        <p><strong className="font-medium text-foreground/90">Impact:</strong> Resulted in 40% faster hiring processes and 85% user satisfaction.</p>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Badge className="bg-brand-badge-bg text-foreground/90 px-2.5 py-1 text-xs font-medium rounded">AI Integration</Badge>
                        <Badge className="bg-brand-badge-bg text-foreground/90 px-2.5 py-1 text-xs font-medium rounded">UX Research</Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-2">
                      <span className="text-sm font-medium text-foreground group-hover:text-brand-link-text transition-colors">
                        View Full Case Study
                        <ArrowRight className="ml-1.5 h-4 w-4 inline-block group-hover:translate-x-0.5 transition-transform duration-300" aria-hidden="true" />
                      </span>
                    </CardFooter>
                  </Card>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
