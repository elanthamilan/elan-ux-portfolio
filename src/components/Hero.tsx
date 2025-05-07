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
    <section className="py-10 md:py-16 bg-gradient-to-br from-purple-50/50 to-white relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-200/20 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Column: Professional Information */}
          <div className="space-y-6">
            <div>
<Badge variant="outline" className="px-3 py-1 text-sm">
                Enterprise UX Designer
              </Badge>
              
              <h1 className="mt-3 mb-4 text-4xl md:text-5xl font-script font-bold">
                Simplifying <span className="text-purple-600">Enterprise Experiences</span>
              </h1>
              
              <div className="flex items-center mb-6 space-x-2">
                <span role="img" aria-label="wave" className="text-2xl">👋</span>
                <span className="text-xl md:text-2xl font-medium">Hi, I'm Elanthamilan</span>
                <span role="img" aria-label="peace" className="text-2xl">✌️</span>
              </div>
              
              <p className="text-gray-600 text-lg max-w-2xl mb-8">
                Experienced UX designer specializing in enterprise SaaS, EdTech, and HR Tech. 
                I transform complex business challenges into intuitive, user-centered solutions 
                that drive measurable impact and enhance usability for large-scale products.
              </p>

              {/* Download Resume Button */}
              <div className="w-full mb-8">
                <Button className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-purple-800 hover:opacity-90 transition-all shadow-lg hover:shadow-purple-200/50 text-lg py-6 px-8" asChild>
                  <a href="/Elanthamilan_UX_Resume.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2" aria-hidden="true" />
                    Download Resume
                  </a>
                </Button>
              </div>

              {/* Brands section */}
              <div className="py-6 bg-white/70 backdrop-blur-sm relative rounded-lg border border-purple-50 shadow-sm mb-8">
                <div className="px-6">
                  <h3 className="font-semibold text-gray-900 mb-4 text-xl">Brands I Have Worked With</h3>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
                    <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                      <img src="/Elanable-uploads/Camu.png" alt="Camu" width="80" height="40" style={{ objectFit: 'contain' }} />
                      <p className="text-center text-gray-500 mt-2">Camu</p>
                    </div>
                    
                    <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                      <img src="/Elanable-uploads/Mastek.png" alt="Mastek" width="80" height="40" style={{ objectFit: 'contain' }} />
                      <p className="text-center text-gray-500 mt-2">Mastek</p>
                    </div>
                    
                    <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                      <img src="/Elanable-uploads/Geninfy.jpg" alt="Geninfy" width="80" height="40" style={{ objectFit: 'contain' }} />
                      <p className="text-center text-gray-500 mt-2">Geninfy</p>
                    </div>
                    
                    <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                      <img src="/Elanable-uploads/Oceo.svg" alt="Oceo" width="80" height="40" style={{ objectFit: 'contain' }} />
                      <p className="text-center text-gray-500 mt-2">Oceo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Stats */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="stat-card p-3 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-purple-50 text-center">
                <span className="text-purple-700 text-sm block">Experience</span>
                <span className="font-bold text-xl md:text-2xl block">8+ Years</span>
                <span className="text-gray-600 text-xs block">Enterprise UX Design</span>
              </div>
              
              <div className="stat-card p-3 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-purple-50 text-center">
                <span className="text-purple-700 text-sm block">Products</span>
                <span className="font-bold text-xl md:text-2xl block">10+</span>
                <span className="text-gray-600 text-xs block">Successfully Shipped</span>
              </div>
              
              <div className="stat-card p-3 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-purple-50 text-center">
                <span className="text-purple-700 text-sm block">Features</span>
                <span className="font-bold text-xl md:text-2xl block">30+</span>
                <span className="text-gray-600 text-xs block">Designed & Implemented</span>
              </div>
              
              <div className="stat-card p-3 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-purple-50 text-center">
                <span className="text-purple-700 text-sm block">Systems</span>
                <span className="font-bold text-xl md:text-2xl block">2</span>
                <span className="text-gray-600 text-xs block">Design Systems Built</span>
              </div>
            </div>

            {/* Industries I have Worked In - replacing Features & Applications */}
            <div className="p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-purple-50">
              <h3 className="font-semibold text-gray-900 mb-3 text-xl">Industries I have Worked In</h3>
              <Accordion type="single" collapsible defaultValue="EdTech">
                {industries.map((industry) => (
                  <AccordionItem value={industry.title} key={industry.title}>
                    <AccordionTrigger aria-label={industry.title}>{industry.title}</AccordionTrigger>
                    <AccordionContent>{industry.content}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Contact Buttons with explicit text */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="mailto:elanthamilan12@gmail.com"
                className="inline-flex items-center justify-center px-4 py-3 bg-purple-600 text-white hover:bg-purple-700 transition-colors rounded-md shadow-sm"
                aria-label="Contact via Email"
              >
                <Mail size={18} className="mr-2 flex-shrink-0" aria-hidden="true" />
                <span className="font-medium">elanthamilan12@gmail.com</span>
              </a>

              <a
                href="tel:+918148622302"
                className="inline-flex items-center justify-center px-4 py-3 bg-green-600 text-white hover:bg-green-700 transition-colors rounded-md shadow-sm"
                aria-label="Contact via Phone"
              >
                <Phone size={18} className="mr-2 flex-shrink-0" aria-hidden="true" />
                <span className="font-medium">+91 8148622302</span>
              </a>

              <a
                href="https://linkedin.com/in/elanthamilan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-3 bg-blue-600 text-white hover:bg-blue-700 transition-colors rounded-md shadow-sm"
                aria-label="Visit LinkedIn Profile"
              >
                <Linkedin size={18} className="mr-2 flex-shrink-0" aria-hidden="true" />
                <span className="font-medium">linkedin.com/in/elanthamilan</span>
              </a>

              <a
                href="https://wa.me/918148622302"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-3 bg-green-500 text-white hover:bg-green-600 transition-colors rounded-md shadow-sm"
                aria-label="Contact via WhatsApp"
              >
                <MessageSquare size={18} className="mr-2 flex-shrink-0" aria-hidden="true" />
                <span className="font-medium">WhatsApp: +91 8148622302</span>
              </a>
            </div>
          </div>

          {/* Right Column: Case Studies */}
          <div className={isMobile ? "mt-8" : ""}>
            <div className="h-full">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold">Case Studies</h2>
              </div>

              <div className="space-y-5">
<Link
                  to="/case-study/student-planner"
                  className="block group"
                  aria-label="View Student Planner Case Study"
                >
                  <Card className="overflow-hidden border border-gray-100 group-hover:shadow-md transition-all duration-300 bg-white/90 backdrop-blur-sm group-hover:border-purple-500 group-hover:shadow-lg border-4">
                    
                    <div className="aspect-video w-full bg-purple-600 overflow-hidden">
                      <img
                        src="/Elanable-uploads/Student Course Planner Redesign.png"
                        alt="Student Course Planner Redesign"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-lg md:text-xl">Student Course Planner Redesign</h3>
                          <p className="text-sm md:text-base text-gray-600">Academic planning platform for students</p>
                        </div>
<Badge variant="outline">2021</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0 pb-3">
                      {/* Mobile view - List */}
                      <ul className="md:hidden space-y-2">
                        <li className="flex items-start">
                          <span className="font-medium text-purple-900 mr-2">WHO:</span>
                          <span className="text-sm text-gray-700">University students, academic advisors</span>
                        </li>
                        <li className="flex items-start">
                          <span className="font-medium text-purple-900 mr-2">WHAT:</span>
                          <span className="text-sm text-gray-700">AI-powered course scheduling</span>
                        </li>
                        <li className="flex items-start">
                          <span className="font-medium text-green-800 mr-2">RESULT:</span>
                          <span className="text-sm text-gray-700">60% time saved, 92% task success rate</span>
                        </li>
                      </ul>

                      {/* Desktop view - Horizontal */}
                      <div className="hidden md:grid grid-cols-3 gap-2">
                        <div className="bg-purple-50/80 p-3 rounded-md">
                          <p className="font-medium text-purple-900 mb-1">WHO:</p>
                          <p className="text-sm text-gray-700">University students, academic advisors</p>
                        </div>

                        <div className="bg-purple-50/80 p-3 rounded-md">
                          <p className="font-medium text-purple-900 mb-1">WHAT:</p>
                          <p className="text-sm text-gray-700">AI-powered course scheduling</p>
                        </div>

                        <div className="bg-green-50/80 p-3 rounded-md">
                          <p className="font-medium text-green-800 mb-1">RESULT:</p>
                          <p className="text-sm text-gray-700">60% time saved, 92% task success rate
                        </p>
                        </div>
                      </div>

                      <div className="flex gap-2 mt-3">
<Badge variant="outline">AI Integration</Badge>
                        <Badge variant="outline">UX Research</Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <span className="relative">
                        View Full Case Study
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-700 group-hover:w-full transition-all duration-300"></span>
                      </span>
                      <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                    </CardFooter>
                  </Card>
                </Link>
                
                 <Link
                  to="/case-study/campus-hiring"
                  className="block group"
                  aria-label="View Campus Hiring Case Study"
                >
                  <Card className="overflow-hidden border border-gray-100 group-hover:shadow-md transition-all duration-300 bg-white/90 backdrop-blur-sm group-hover:border-purple-500 group-hover:shadow-lg border-4">
                    <div className="aspect-video w-full bg-purple-600 overflow-hidden">
                      <img
                        src="/Elanable-uploads/Camu Campus Recruitment App.png"
                        alt="Camu Campus Recruitment App"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-lg md:text-xl">Camu Campus Recruitment App</h3>
                          <p className="text-sm md:text-base text-gray-600">HR Tech platform for streamlined recruiting</p>
                        </div>
<Badge variant="outline">2025</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0 pb-3">
                      {/* Mobile view - List */}
                      <ul className="md:hidden space-y-2">
                        <li className="flex items-start">
                          <span className="font-medium text-purple-900 mr-2">WHO:</span>
                          <span className="text-sm text-gray-700">HR teams, recruiters, students</span>
                        </li>
                        <li className="flex items-start">
                          <span className="font-medium text-purple-900 mr-2">WHAT:</span>
                          <span className="text-sm text-gray-700">Unified campus hiring platform</span>
                        </li>
                        <li className="flex items-start">
                          <span className="font-medium text-green-800 mr-2">RESULT:</span>
                          <span className="text-sm text-gray-700">40% faster hiring, 85% user satisfaction</span>
                        </li>
                      </ul>

                      {/* Desktop view - Horizontal */}
                      <div className="hidden md:grid grid-cols-3 gap-2">
                        <div className="bg-purple-50/80 p-3 rounded-md">
                          <p className="font-medium text-purple-900 mb-1">WHO:</p>
                          <p className="text-sm text-gray-700">HR teams, recruiters, students</p>
                        </div>

                        <div className="bg-purple-50/80 p-3 rounded-md">
                          <p className="font-medium text-purple-900 mb-1">WHAT:</p>
                          <p className="text-sm text-gray-700">Unified campus hiring platform</p>
                        </div>

                        <div className="bg-green-50/80 p-3 rounded-md">
                          <p className="font-medium text-green-800 mb-1">RESULT:</p>
                          <p className="text-sm text-gray-700">40% faster hiring, 85% user satisfaction</p>
                        </div>
                      </div>

                      <div className="flex gap-2 mt-3">
                        <Badge variant="outline">AI Integration</Badge>
                        <Badge variant="outline">UX Research</Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <span className="relative">
                        View Full Case Study
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-700 group-hover:w-full transition-all duration-300"></span>
                      </span>
                      <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
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
