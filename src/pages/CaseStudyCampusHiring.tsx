import React, { useEffect, useRef } from "react"; // Added useRef
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// Removed ElanThinking and CaseStudySection as they are not used, assuming blockquote is directly styled or a different component is used.
// import { ElanThinking, CaseStudySection } from "@/components/CaseStudyAccordion"; 
import { gsap, ScrollTrigger } from "@/lib/gsapUtils";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const CaseStudyCampusHiring = () => {
  const backToHomeLinkRef = useRef<HTMLAnchorElement>(null);
  const arrowIconRef = useRef<HTMLSpanElement>(null);
  const buttonTextRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const sections = gsap.utils.toArray<HTMLElement>('.scroll-animate-section');
    sections.forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          toggleActions: 'play none none none',
          once: true,
          // markers: true, // For debugging
        }
      });
    });

    const staggerParents = gsap.utils.toArray<HTMLElement>('.stagger-scroll-items-parent');
    staggerParents.forEach((parent) => {
      const items = gsap.utils.toArray<HTMLElement>('.stagger-scroll-item', parent);
      if (items.length > 0) {
        gsap.from(items, {
          opacity: 0,
          y: 30,
          duration: 0.5,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: parent,
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true,
          }
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleBackToHomeEnter = () => {
    if (arrowIconRef.current) {
      gsap.to(arrowIconRef.current, { x: -3, duration: 0.25, ease: 'power1.out' });
    }
    if (buttonTextRef.current) {
      gsap.to(buttonTextRef.current, { x: -1, duration: 0.25, ease: 'power1.out' });
    }
  };

  const handleBackToHomeLeave = () => {
    if (arrowIconRef.current) {
      gsap.to(arrowIconRef.current, { x: 0, duration: 0.2, ease: 'power1.in' });
    }
    if (buttonTextRef.current) {
      gsap.to(buttonTextRef.current, { x: 0, duration: 0.2, ease: 'power1.in' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8 sm:py-10 md:py-16 bg-brand-light-gray-accent/50">
        <Link 
          to="/" 
          ref={backToHomeLinkRef}
          onMouseEnter={handleBackToHomeEnter}
          onMouseLeave={handleBackToHomeLeave}
          className="inline-flex items-center text-foreground/80 hover:text-foreground transition-colors mb-6 sm:mb-8 text-sm font-medium group focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-background rounded-sm" 
        >
          <span ref={arrowIconRef} className="inline-block">
            <ArrowLeft size={16} className="mr-1.5" aria-hidden="true" />
          </span>
          <span ref={buttonTextRef} className="inline-block">Back to Home</span>
        </Link>

        <article className="max-w-3xl mx-auto">
           {/* Meta Info */}
           <Card isExpanded={true}>
             <CardContent className="p-4 sm:p-6 md:p-8"> {/* Adjusted CardContent padding */}
               <div className="mb-3 sm:mb-4 flex items-center space-x-3 scroll-animate-section">
                 <Badge className="bg-accent text-foreground px-2 sm:px-2.5 py-0.5 sm:py-1 text-xs font-medium rounded">Case Study</Badge>
                 <span className="text-xs text-foreground/80">Published April 2025</span>
               </div>

               <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 sm:mb-8 text-foreground leading-tight scroll-animate-section">
                 Streamlining Campus Recruitment by 40%: A Case Study of the Camu Campus Recruitment App
               </h1>

               <div className="aspect-video w-full bg-gray-200 rounded-lg overflow-hidden mb-8 sm:mb-12 shadow-lg scroll-animate-section">
                 <img
                   src="/Elanable-uploads/d194dd7b-4980-4860-bf9d-ece30b18149d.png"
                   alt="Camu Campus Recruitment App Interface"
                   className="w-full h-full object-cover"
                 />
               </div>

               {/* Using standard HTML sections with Tailwind prose classes for styling */}
               <section className="mb-10 sm:mb-12 md:mb-16 scroll-animate-section">
                 <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 text-foreground">Project Overview</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-foreground/80 text-base sm:text-lg leading-relaxed">
                   <div className="space-y-3 sm:space-y-4">
                     <p><strong className="font-medium text-foreground">Project Name:</strong> Camu Campus Recruitment App</p>
                     <p><strong className="font-medium text-foreground">My Role:</strong> Lead Interaction Designer</p>
                     <p><strong className="font-medium text-foreground">Date Shipped:</strong> April 2025</p>
                   </div>

                   <div>
                     <h3 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 text-foreground">Identified User Pain Points:</h3>
                     <ul className="space-y-2 sm:space-y-2.5 list-disc pl-5 text-sm sm:text-base">
                       <li><strong className="font-medium text-foreground">Recruiters:</strong> Grappled with fragmented workflows across multiple platforms, tedious manual data entry, and inadequate visibility into comprehensive student profiles.</li>
                       <li><strong className="font-medium text-foreground">Placement Officers:</strong> Overwhelmed by managing communications through disparate email threads, relying on cumbersome spreadsheets, and using disjointed tools for critical approval and scheduling tasks.</li>
                       <li><strong className="font-medium text-foreground">Students:</strong> Experienced frustration with repetitive data entry in application forms and often missed out on relevant opportunities due to the system's complexity.</li>
                     </ul>
                   </div>
                 </div>

                 <div className="mt-8 sm:mt-10 md:mt-12">
                   <h3 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 text-foreground">The Business Challenge:</h3>
                   <p className="text-foreground/80 leading-relaxed text-base sm:text-lg">
                     Camu, a leading Student Information System (SIS) provider, aimed to significantly streamline the campus recruitment process. The key objectives were to <strong className="font-medium text-foreground">boost user engagement</strong> across its platform, <strong className="font-medium text-foreground">improve student placement rates</strong>, and consequently, <strong className="font-medium text-foreground">drive new revenue streams</strong> by effectively leveraging its existing SIS infrastructure and extensive user base.
                   </p>
                 </div>

                 <div className="mt-8 sm:mt-10 md:mt-12">
                   <h3 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 text-foreground">Strategic Context:</h3>
                   <p className="text-foreground/80 leading-relaxed text-base sm:text-lg">
                     By integrating a dedicated recruitment module, Camu sought to transform its trusted SIS into a <strong className="font-medium text-foreground">unified hiring ecosystem</strong>. This approach capitalized on readily available student data and a familiar platform for its existing users, promising a seamless and efficient experience.
                   </p>
                 </div>
               </section>

               <section className="mb-10 sm:mb-12 md:mb-16 scroll-animate-section">
                 <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 text-foreground">Understanding Our Users: Key Personas</h2>
                 <p className="text-foreground/80 leading-relaxed mb-6 sm:mb-8 text-base sm:text-lg">
                   Our initial research phase identified three core user personas, each with distinct needs and goals, yet all converging on the shared objectives of <strong className="font-medium text-foreground">simplicity and operational efficiency</strong>:
                 </p>
                 {/* Restyled persona blocks */}
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8 stagger-scroll-items-parent">
                   <div className="border border-brand-light-gray-accent rounded-lg p-4 sm:p-5 stagger-scroll-item">
                     <h3 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2 text-foreground">Recruiters</h3>
                     <p className="text-foreground/80 text-sm sm:text-base leading-relaxed">Key Needs: Rapid job posting, precise candidate targeting via filters, and streamlined application tracking. </p>
                   </div>
                   <div className="border border-brand-light-gray-accent rounded-lg p-4 sm:p-5 stagger-scroll-item">
                     <h3 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2 text-foreground">Placement Officers</h3>
                     <p className="text-foreground/80 text-sm sm:text-base leading-relaxed">Key Needs: Centralized policy enforcement, efficient interview scheduling capabilities, and comprehensive reporting tools.</p>
                   </div>
                   <div className="border border-brand-light-gray-accent rounded-lg p-4 sm:p-5 stagger-scroll-item">
                     <h3 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2 text-foreground">Students</h3>
                     <p className="text-foreground/80 text-sm sm:text-base leading-relaxed">Key Needs: Intuitive job discovery, simplified application processes, and transparent progress tracking.</p>
                   </div>
                 </div>
               </section>

               {/* Placeholder for large image */}
               <div className="aspect-video w-full bg-gray-200 dark:bg-gray-700 rounded-lg my-8 sm:my-12 shadow-md flex items-center justify-center text-gray-500 dark:text-gray-400 scroll-animate-section">
                 <img src="https://placehold.co/800x450?text=User+Personas+and+Journey+Map" alt="Placeholder image representing User Personas and Journey Map" className="w-full h-full object-cover" />
               </div>

               <section className="mb-10 sm:mb-12 md:mb-16 scroll-animate-section">
                 <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 text-foreground">Our Design Process: A User-Centric Approach</h2>
                 <p className="text-foreground/80 leading-relaxed mb-6 sm:mb-8 text-base sm:text-lg">
                   We adopted a comprehensive, user-centric design methodology. This iterative process involved several key phases: <strong className="font-medium text-foreground">Discovery</strong> (interviews, surveys), <strong className="font-medium text-foreground">Ideation</strong> (brainstorming, sketching), <strong className="font-medium text-foreground">Prototyping</strong> (wireframing, interactive mockups), <strong className="font-medium text-foreground">Testing</strong> (usability studies), and continuous <strong className="font-medium text-foreground">Iteration</strong> based on feedback.
                 </p>
                 {/* Example artifact block */}
                 <div className="border border-brand-light-gray-accent rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
                   <h3 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 text-foreground">Key Artifacts & Methods:</h3>
                   <ul className="list-disc pl-5 space-y-1.5 sm:space-y-2 text-foreground/80 text-sm sm:text-base leading-relaxed stagger-scroll-items-parent">
                     <li className="stagger-scroll-item"><strong className="font-medium text-foreground">User Interviews & Surveys:</strong> Uncovered critical pain points and validated user needs.</li>
                     <li className="stagger-scroll-item"><strong className="font-medium text-foreground">Competitive Analysis:</strong> Identified industry best practices and differentiation opportunities.</li>
                     <li className="stagger-scroll-item"><strong className="font-medium text-foreground">User Journey Maps:</strong> Visualized end-to-end user experiences, highlighting areas for improvement.</li>
                     <li className="stagger-scroll-item"><strong className="font-medium text-foreground">Wireframes & Prototypes:</strong> Iteratively designed and refined information architecture and user flows.</li>
                     <li className="stagger-scroll-item"><strong className="font-medium text-foreground">Usability Testing Sessions:</strong> Gathered direct user feedback on prototypes to ensure intuitive design.</li>
                   </ul>
                 </div>
               </section>

               {/* Placeholder for large image */}
               <div className="aspect-video w-full bg-gray-200 dark:bg-gray-700 rounded-lg my-8 sm:my-12 shadow-md flex items-center justify-center text-gray-500 dark:text-gray-400 scroll-animate-section">
                 <img src="https://placehold.co/800x450?text=Wireframes+and+Prototypes" alt="Placeholder image representing Wireframes and Prototypes" className="w-full h-full object-cover" />
               </div>

               <section className="mb-10 sm:mb-12 md:mb-16 scroll-animate-section">
                 <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 text-foreground">The Breakthrough: A Unified and Familiar Workflow</h2>
                 <p className="text-foreground/80 leading-relaxed mb-6 sm:mb-8 text-base sm:text-lg">
                   Our design solution drew inspiration from familiar, widely-used platforms, but was meticulously tailored to the specific needs of the university recruitment ecosystem. A key innovation was the adoption of a <strong className="font-medium text-foreground">multi-step form approach</strong> for job posting. This design choice carefully balanced clarity with efficiency, significantly <strong className="font-medium text-foreground">reducing form abandonment by 38%</strong> when compared to an initial single-page concept.
                 </p>
                 {/* Restyled ElanThinking as blockquote */}
                  <blockquote className="elans-thinking-blockquote border-l-4 border-brand-primary pl-4 sm:pl-6 italic text-foreground/80 my-6 sm:my-8 scroll-animate-section">
                   <p className="mb-2"><strong className="not-italic font-medium text-foreground/90 text-base sm:text-lg">Elan's Thinking: Discovering the Optimal Flow</strong></p>
                   <p className="text-sm sm:text-base text-foreground/80">"The initial 'Quick Post' feature, which was a single, long form, unfortunately flopped during early testing. Users found it overwhelming. Simultaneously, managing external job link tracking created another layer of complexity. This experience was a stark reminder: I had to learn to prioritize data and user feedback, even if it meant abandoning ideas I initially thought were 'cool' or innovative. While business objectives were always a consideration, establishing and maintaining <strong className="font-medium text-foreground">user trust</strong> became my guiding principle, my true north star."</p> {/* Ensured inner p has sufficient contrast if blockquote itself is just /80 */}
                 </blockquote>
               </section>

               <section className="mb-10 sm:mb-12 md:mb-16 scroll-animate-section">
                 <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 text-foreground">Iterative Design: Adapting to User Needs and Technical Constraints</h2>
                 <p className="text-foreground/80 leading-relaxed mb-6 sm:mb-8 text-base sm:text-lg">
                   The design evolved through three pivotal iterations, each directly addressing user feedback and technical feasibility:
                 </p>
                 {/* Restyled iteration blocks */}
                 <div className="space-y-4 sm:space-y-6 stagger-scroll-items-parent">
                   <div className="border border-brand-light-gray-accent rounded-lg p-4 sm:p-6 stagger-scroll-item">
                     <h3 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 text-foreground">Iteration 1: Refining Form Structure & Flow</h3>
                     <p className="text-sm sm:text-base text-foreground/80 leading-relaxed"><strong className="font-medium text-foreground">Challenge Identified:</strong> The initial single-page job posting form was perceived as overwhelming by users. <strong className="font-medium text-foreground">Solution Implemented:</strong> We transitioned to a multi-step, tabbed form design with clear progress indicators and an autosave feature, improving user guidance and reducing cognitive load.</p>
                   </div>
                   <div className="border border-brand-light-gray-accent rounded-lg p-4 sm:p-6 stagger-scroll-item">
                     <h3 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 text-foreground">Iteration 2: Addressing AI Autofill Concerns</h3>
                     <p className="text-sm sm:text-base text-foreground/80 leading-relaxed"><strong className="font-medium text-foreground">Challenge Identified:</strong> Users expressed apprehension and distrust towards fully automated AI-driven form filling. <strong className="font-medium text-foreground">Solution Implemented:</strong> We modified the AI autofill to be an optional, user-triggered feature, providing suggestions rather than direct population, and ensuring easy manual overrides. This empowered users while still offering assistance.</p>
                   </div>
                   <div className="border border-brand-light-gray-accent rounded-lg p-4 sm:p-6 stagger-scroll-item">
                     <h3 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 text-foreground">Iteration 3: Clarifying External Application Tracking</h3>
                     <p className="text-sm sm:text-base text-foreground/80 leading-relaxed"><strong className="font-medium text-foreground">Challenge Identified:</strong> Pop-up modals for tracking applications on external (non-Camu) platforms caused confusion. <strong className="font-medium text-foreground">Solution Implemented:</strong> We simplified the language used in these modals, provided clearer contextual information about why tracking was beneficial, and offered a more intuitive opt-out option.</p>
                   </div>
                 </div>
               </section>

               {/* Placeholder for large image */}
               <div className="aspect-video w-full bg-gray-200 dark:bg-gray-700 rounded-lg my-8 sm:my-12 shadow-md flex items-center justify-center text-gray-500 dark:text-gray-400 scroll-animate-section">
                 <img src="https://placehold.co/800x450?text=Iteration+Examples+and+UI+Mockups" alt="Placeholder image representing Iteration Examples and UI Mockups" className="w-full h-full object-cover" />
               </div>

               <section className="mb-10 sm:mb-12 md:mb-16 scroll-animate-section">
                 <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 text-foreground">The Recruiter's Journey: Transformed from Chaos to Control</h2>
                 <p className="text-foreground/80 leading-relaxed mb-6 sm:mb-8 text-base sm:text-lg">
                   The redesigned application provided recruiters with an intuitive, data-driven experience, streamlining their entire workflow:
                 </p>
                 {/* Restyled journey steps */}
                 <ol className="space-y-4 sm:space-y-6 list-decimal list-inside marker:font-semibold marker:text-foreground text-base sm:text-lg stagger-scroll-items-parent">
                   <li className="border border-brand-light-gray-accent rounded-lg p-4 sm:p-6 stagger-scroll-item">
                     <h3 className="font-semibold text-base sm:text-lg md:text-xl mb-1 text-foreground inline align-middle mr-2">Seamless & Secure Access:</h3>
                     <p className="text-foreground/80 leading-relaxed inline align-middle text-sm sm:text-base">Institutional credentials enabled secure, role-scoped login. Trusted corporate partners benefited from an expedited approval process, minimizing onboarding friction.</p>
                   </li>
                   <li className="border border-brand-light-gray-accent rounded-lg p-4 sm:p-6 stagger-scroll-item">
                     <h3 className="font-semibold text-base sm:text-lg md:text-xl mb-1 text-foreground inline align-middle mr-2">Simplified Job Creation:</h3>
                     <p className="text-foreground/80 leading-relaxed inline align-middle text-sm sm:text-base">A guided four-step form (Basic Information, Position Details, Location/Schedule, Compensation) facilitated easy job posting, enhanced with optional AI assistance and automatic data saving.</p>
                   </li>
                   <li className="border border-brand-light-gray-accent rounded-lg p-4 sm:p-6 stagger-scroll-item">
                     <h3 className="font-semibold text-base sm:text-lg md:text-xl mb-1 text-foreground inline align-middle mr-2">Powerful SIS Data Integration:</h3>
                     <p className="text-foreground/80 leading-relaxed inline align-middle text-sm sm:text-base">Advanced filtering capabilities pulled student data directly from the SIS, eliminating the need for manual data uploads and ensuring accuracy.</p>
                   </li>
                   <li className="border border-brand-light-gray-accent rounded-lg p-4 sm:p-6 stagger-scroll-item">
                     <h3 className="font-semibold text-base sm:text-lg md:text-xl mb-1 text-foreground inline align-middle mr-2">Efficient Approval & Tracking:</h3>
                     <p className="text-foreground/80 leading-relaxed inline align-middle text-sm sm:text-base">Automated approval workflows and a centralized, real-time dashboard replaced convoluted email chains and spreadsheet management.</p>
                   </li>
                 </ol>
               </section>

               {/* Note: Removed duplicate "Design Process: Methods and Artifacts" section as its content was integrated earlier. */}

               <section className="mb-10 sm:mb-12 md:mb-16 scroll-animate-section">
                 <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 text-foreground">The Student's Experience: Opportunities at Their Fingertips</h2>
                 <p className="text-foreground/80 leading-relaxed mb-6 sm:mb-8 text-base sm:text-lg">
                   For students, the platform offered a seamless, integrated job-hunting journey from discovery to application:
                 </p>
                 <div className="space-y-4 sm:space-y-6 stagger-scroll-items-parent">
                   <div className="border border-brand-light-gray-accent rounded-lg p-4 sm:p-6 stagger-scroll-item">
                     <h3 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2 text-foreground">Effortless Opportunity Discovery</h3>
                     <p className="text-foreground/80 leading-relaxed text-sm sm:text-base">Relevant job openings seamlessly appeared directly within their familiar SIS dashboard, augmented by <strong className="font-medium text-foreground">AI-powered recommendations</strong>.</p>
                   </div>
                   <div className="border border-brand-light-gray-accent rounded-lg p-4 sm:p-6 stagger-scroll-item">
                     <h3 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2 text-foreground">Frictionless Application Process</h3>
                     <p className="text-foreground/80 leading-relaxed text-sm sm:text-base">Application forms were <strong className="font-medium text-foreground">pre-filled using existing SIS data</strong>, significantly reducing manual entry and halving the average application completion time.</p>
                   </div>
                   <div className="border border-brand-light-gray-accent rounded-lg p-4 sm:p-6 stagger-scroll-item">
                     <h3 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2 text-foreground">Clear & Transparent Next Steps</h3>
                     <p className="text-foreground/80 leading-relaxed text-sm sm:text-base">The system provided straightforward interview scheduling tools and <strong className="font-medium text-foreground">real-time status tracking</strong> for all applications, keeping students informed.</p>
                   </div>
                 </div>
               </section>

               <section className="mb-10 sm:mb-12 md:mb-16 scroll-animate-section">
                 <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 text-foreground">Final Design Highlights: A Cohesive, Data-Driven Experience</h2>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-base sm:text-lg stagger-scroll-items-parent">
                   <div className="border border-brand-light-gray-accent rounded-lg p-4 sm:p-5 stagger-scroll-item">
                     <h3 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2 text-foreground">Recruiter Workflow</h3>
                     <ul className="space-y-1.5 sm:space-y-2 text-foreground/80 list-disc pl-5 text-sm sm:text-base">
                       <li>Intuitive four-step job creation wizard</li>
                       <li>Centralized real-time application tracking</li>
                       <li>Automated approval routing to Placement Officers</li>
                       <li>Direct SIS data integration for candidate filtering</li>
                     </ul>
                   </div>
                   <div className="border border-brand-light-gray-accent rounded-lg p-4 sm:p-5 stagger-scroll-item">
                     <h3 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2 text-foreground">Placement Officer Workflow</h3>
                     <ul className="space-y-1.5 sm:space-y-2 text-foreground/80 list-disc pl-5 text-sm sm:text-base">
                       <li>Consolidated job queue for all recruiter postings</li>
                       <li>Integrated interview scheduling and management tools</li>
                       <li>Comprehensive data dashboards for reporting and analytics</li>
                       <li>Policy enforcement and approval management</li>
                     </ul>
                   </div>
                   <div className="border border-brand-light-gray-accent rounded-lg p-4 sm:p-5 stagger-scroll-item">
                     <h3 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2 text-foreground">Student Workflow</h3>
                     <ul className="space-y-1.5 sm:space-y-2 text-foreground/80 list-disc pl-5 text-sm sm:text-base">
                       <li>Personalized job recommendations within SIS dashboard</li>
                       <li>Simplified, pre-filled application forms</li>
                       <li>Easy interview scheduling and management</li>
                       <li>Transparent application status tracking</li>
                     </ul>
                   </div>
                 </div>
               </section>

               {/* Placeholder for large image */}
               <div className="aspect-video w-full bg-gray-200 dark:bg-gray-700 rounded-lg my-8 sm:my-12 shadow-md flex items-center justify-center text-gray-500 dark:text-gray-400 scroll-animate-section">
                 <img src="https://placehold.co/800x450?text=Final+UI+Screens+and+Key+Flows" alt="Placeholder image representing Final UI Screens and Key Flows" className="w-full h-full object-cover" />
               </div>

               <section className="mb-10 sm:mb-12 md:mb-16 scroll-animate-section">
                 <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 text-foreground">Navigating Roadblocks: Lessons in Resilience and User Trust</h2>
                 <p className="text-foreground/80 leading-relaxed mb-6 sm:mb-8 text-base sm:text-lg">
                   The journey wasn't without its obstacles. Key challenges, such as initial user resistance to AI-powered autofill features and confusion surrounding the tracking of external job application links, underscored a critical lesson: the paramount importance of <strong className="font-medium text-foreground">prioritizing user trust and ensuring utmost clarity</strong> in every design decision. These experiences reinforced the need for iterative feedback loops and a willingness to adapt designs based on real-world user interactions.
                 </p>
                 {/* Restyled ElanThinking as blockquote */}
                  <blockquote className="elans-thinking-blockquote border-l-4 border-brand-primary pl-4 sm:pl-6 italic text-foreground/80 my-6 sm:my-8 scroll-animate-section">
                   <p className="mb-2"><strong className="not-italic font-medium text-foreground/90 text-base sm:text-lg">Elan's Thinking: Embracing Challenges as Growth Opportunities</strong></p>
                   <p className="text-sm sm:text-base text-foreground/80">"The 'Quick Post' feature's lukewarm reception was a tough pill to swallow, and the complexities of external application tracking presented another significant hurdle. These moments, however, were invaluable learning experiences. They taught me the criticality of allowing empirical data and direct user feedback to steer the design direction, even if it meant shelving ideas that initially seemed promising or 'cool.' While business objectives remained a constant, the unwavering commitment to <strong className="font-medium text-foreground">building and maintaining user trust</strong> truly became my compass, guiding every critical decision."</p> {/* Ensured inner p has sufficient contrast */}
                 </blockquote>
               </section>

               <section className="mb-10 sm:mb-12 md:mb-16 scroll-animate-section">
                 <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 text-foreground">Measurable Impact: Key Results and Outcomes</h2>
                 <p className="text-foreground/80 leading-relaxed mb-6 sm:mb-8 text-base sm:text-lg">
                   The Camu Campus Recruitment App delivered significant, quantifiable improvements across the board:
                 </p>
                 {/* Restyled results display */}
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 stagger-scroll-items-parent">
                   <div className="border border-brand-primary/50 bg-brand-primary/5 hover:shadow-lg transition-shadow p-4 sm:p-5 md:p-6 rounded-lg text-center stagger-scroll-item">
                     <p className="text-4xl sm:text-5xl font-bold text-brand-primary mb-1">30%</p>
                     <p className="text-foreground/80 text-base sm:text-lg leading-relaxed font-medium">Faster Time-to-Hire</p>
                     <p className="text-xs sm:text-sm text-foreground/80 mt-1">Average reduction in hiring cycle duration.</p> {/* text-foreground/60 to text-foreground/80 */}
                   </div>
                   <div className="border border-brand-primary/50 bg-brand-primary/5 hover:shadow-lg transition-shadow p-4 sm:p-5 md:p-6 rounded-lg text-center stagger-scroll-item">
                     <p className="text-4xl sm:text-5xl font-bold text-brand-primary mb-1">40%</p>
                     <p className="text-foreground/80 text-base sm:text-lg leading-relaxed font-medium">Reduced PO Workload</p>
                     <p className="text-xs sm:text-sm text-foreground/80 mt-1">Decrease in manual tasks for Placement Officers.</p> {/* text-foreground/60 to text-foreground/80 */}
                   </div>
                   <div className="border border-brand-primary/50 bg-brand-primary/5 hover:shadow-lg transition-shadow p-4 sm:p-5 md:p-6 rounded-lg text-center stagger-scroll-item">
                     <p className="text-4xl sm:text-5xl font-bold text-brand-primary mb-1">25%</p>
                     <p className="text-foreground/80 text-base sm:text-lg leading-relaxed font-medium">Increased SIS Engagement</p>
                     <p className="text-xs sm:text-sm text-foreground/80 mt-1">Higher platform usage by students and faculty.</p> {/* text-foreground/60 to text-foreground/80 */}
                   </div>
                   <div className="border border-brand-primary/50 bg-brand-primary/5 hover:shadow-lg transition-shadow p-4 sm:p-5 md:p-6 rounded-lg text-center stagger-scroll-item">
                     <p className="text-4xl sm:text-5xl font-bold text-brand-primary mb-1">$500K</p>
                     <p className="text-foreground/80 text-base sm:text-lg leading-relaxed font-medium">New Annual Revenue</p>
                     <p className="text-xs sm:text-sm text-foreground/80 mt-1">Generated through premium recruiter features.</p> {/* text-foreground/60 to text-foreground/80 */}
                   </div>
                 </div>
               </section>

               <div className="text-center mt-12 sm:mt-16 md:mt-20 scroll-animate-section"> 
                 <p className="text-base sm:text-lg text-foreground/80 mb-6 sm:mb-8">⭐ End of Case Study ⭐</p>

                 {/* Link to the other case study */}
                 <div className="mb-6 sm:mb-8">
                   <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 sm:mb-3 text-foreground">Next Case Study</h3>
                   <Link to="/case-study/student-planner" className="text-brand-primary hover:underline font-medium text-base sm:text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-background rounded-sm">
                     Student Course Planner Redesign →
                   </Link>
                 </div>

                 <Link to="/" className="inline-flex items-center text-foreground/80 hover:text-foreground transition-colors text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-background rounded-sm">
                   <ArrowLeft size={16} className="mr-1.5" aria-hidden="true" />
                   <span>Back to Portfolio</span>
                 </Link>
               </div>
             </CardContent>
           </Card>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudyCampusHiring;
