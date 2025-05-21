// No changes needed in the imports or component function signature if already correct from previous step.
// The useEffect hook for animations should be identical to the one in CaseStudyCampusHiring.tsx
// if the class names 'scroll-animate-section', 'stagger-scroll-items-parent', 
// and 'stagger-scroll-item' are applied consistently to similar conceptual elements.

// For brevity, I will assume the useEffect hook is identical to the one implemented
// in CaseStudyCampusHiring.tsx and focus only on adding the necessary classes to the JSX.
// The actual implementation would require the full useEffect hook here as well.

import React, { useEffect, useRef } from "react"; // Added useRef
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import { ElanThinking } from "@/components/CaseStudyAccordion"; // Assuming this is not used
import { gsap, ScrollTrigger } from "@/lib/gsapUtils";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const CaseStudyStudentPlanner = () => {
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

      <main className="flex-grow container mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-16 lg:py-20 bg-brand-light-gray-accent/50">
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
                 <span className="text-xs text-foreground/80">Published May 2025</span>
               </div>

               <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 sm:mb-8 text-foreground leading-tight scroll-animate-section">
                 From Chaos to Clarity: Reimagining the Student Course Planner
               </h1>

               <div className="aspect-video w-full bg-gray-200 rounded-lg overflow-hidden mb-8 sm:mb-12 shadow-lg scroll-animate-section">
                 <img
                   src="https://placehold.co/800x450?text=Student+Course+Planner+Hero+Image"
                   alt="Student Course Planner Interface Hero Image"
                   className="w-full h-full object-cover"
                 />
               </div>

               {/* Using standard HTML sections with Tailwind prose classes for styling */}
               {/* Adjusted prose classes for responsiveness */}
               <section className="mb-10 sm:mb-12 md:mb-16 prose prose-sm sm:prose-base md:prose-lg prose-neutral dark:prose-invert max-w-none prose-headings:font-dm-serif prose-p:leading-relaxed prose-p:text-foreground/80 prose-strong:text-foreground prose-strong:font-medium prose-headings:text-foreground prose-h2:font-semibold prose-h3:font-semibold prose-li:my-1 prose-ul:pl-5 scroll-animate-section">
                 <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 text-foreground">The Challenge: Overcoming a Cumbersome and Outdated System</h2>
                 <p>
                   As a Staff UX Designer at a leading edtech company, I attended a university focus group where students voiced their frustrations with our existing Student Course Planner. Priya, a part-time undergraduate juggling academics and a job, encapsulated the core issue: <em className="text-foreground/90">"I spend hours cross-referencing courses, and I still end up with conflicts. I just want something that fits my life!"</em> Her sentiment resonated throughout the room. The planner had become a significant bottleneck, overwhelming students with <strong className="font-medium text-foreground">manual conflict checks</strong>, <strong className="font-medium text-foreground">poor schedule visualization</strong>, and a <strong className="font-medium text-foreground">disjointed user flow</strong> from planning to registration. University administrators were similarly inundated with scheduling-related support tickets. The business objectives were ambitious yet clear: <strong className="font-medium text-foreground">reduce scheduling bottlenecks by 60%</strong>, <strong className="font-medium text-foreground">boost schedule-to-cart conversion rates by 30%</strong>, and achieve a <strong className="font-medium text-foreground">40% adoption rate for a new AI-driven recommendation feature</strong>. It was evident that a comprehensive redesign, rooted in empathy and innovative thinking, was imperative.
                 </p>

                 {/* Style ElanThinking as blockquote */}
                 <blockquote className="elans-thinking-blockquote border-l-4 border-brand-primary pl-4 sm:pl-6 italic text-foreground/80 my-6 sm:my-8 scroll-animate-section">
                   <p className="mb-2"><strong className="not-italic font-sans font-medium text-foreground/90 text-base sm:text-lg">Elan's Thinking: Identifying the Core Problem</strong></p>
                   <p className="text-sm sm:text-base text-foreground/80">"Listening to Priya's palpable frustration, it struck me that our task wasn't merely to fix a tool—it was to mend a fundamentally broken experience. The laborious manual conflict checks were consuming valuable student time. The inadequate visualization capabilities meant students struggled to 'see' their schedules effectively. And the fragmented journey between planning and registration? That was pure friction. My guiding question became: how can we design a tool that adapts to the multifaceted lives of students, rather than compelling students to adapt to its rigidities?"</p>
                 </blockquote>
               </section>

               <section className="mb-10 sm:mb-12 md:mb-16 prose prose-sm sm:prose-base md:prose-lg prose-neutral dark:prose-invert max-w-none prose-headings:font-heading prose-p:leading-relaxed prose-p:text-foreground/80 prose-strong:text-foreground prose-strong:font-medium prose-headings:text-foreground prose-h2:font-semibold prose-h3:font-semibold prose-li:my-1 prose-ul:pl-5 scroll-animate-section">
                 <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 text-foreground">Project Background: A Strategic Initiative to Modernize</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-sm sm:text-base text-foreground/80">
                   <div className="space-y-3 sm:space-y-4">
                     <p><strong className="font-medium text-foreground">Project Name:</strong> Student Course Planner Redesign & AI Advisor Integration</p>
                     <p><strong className="font-medium text-foreground">My Role:</strong> Staff UX Designer (Lead)</p>
                     <p><strong className="font-medium text-foreground">Date Shipped:</strong> May 2025</p> {/* Assuming this is a target/actual ship date */}
                     </div>

                   <div>
                     <h3 className="font-heading font-semibold text-foreground text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3">Key Business Goals:</h3>
                     <ul className="list-disc pl-5 space-y-1 sm:space-y-1.5">
                       <li>Reduce student scheduling bottlenecks by <strong className="font-medium text-foreground">60%</strong>.</li>
                       <li>Increase schedule-to-registration cart conversion rates by <strong className="font-medium text-foreground">30%</strong>.</li>
                       <li>Achieve a <strong className="font-medium text-foreground">40% adoption rate</strong> for the new AI-driven recommendation feature.</li>
                     </ul>
                   </div>
                 </div>

                 <p className="mt-4 sm:mt-6">
                   The existing course planner, utilized by esteemed institutions such as Case Western Reserve University, was an aging system. Students like Priya grappled with its inflexible structure, and administrative staff were consistently bogged down by a high volume of support requests. My mission was to spearhead the modernization of this critical tool, thoughtfully integrating an <strong className="font-medium text-foreground">AI Advisor</strong> to provide personalized schedule recommendations while ensuring students retained ultimate control over their academic planning. The project stakes were considerable, but I was eager to tackle the challenge.
                 </p>
               </section>

               <section className="mb-10 sm:mb-12 md:mb-16 prose prose-sm sm:prose-base md:prose-lg prose-neutral dark:prose-invert max-w-none prose-headings:font-heading prose-p:leading-relaxed prose-p:text-foreground/80 prose-strong:text-foreground prose-strong:font-medium prose-headings:text-foreground prose-h2:font-semibold prose-h3:font-semibold prose-li:my-1 prose-ul:pl-5 scroll-animate-section">
                 <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 text-foreground">Understanding Our Users: Deep Dive into Pain Points and Needs</h2>
                 <p>
                   My design process commenced with comprehensive <strong className="font-medium text-foreground">user research</strong>, encompassing surveys and in-depth interviews with a diverse group of undergraduates, including part-time working students. The findings were illuminating: a staggering <strong className="font-medium text-foreground">75% of participants reported feeling overwhelmed</strong> by the course planning process, and <strong className="font-medium text-foreground">60% expressed a strong desire for a simpler, more intuitive tool</strong>. Priya's experience was particularly poignant—she needed to craft a schedule that meticulously avoided her work commitments (1:00 PM–2:00 PM, Monday to Thursday) and prioritized morning classes. However, the existing planner offered no effective mechanism to input such nuanced constraints, as evidenced in <em className="text-foreground/90">Attachment 1 (User Interface Screenshot)</em>, which depicted a system limited to basic busy time entries without accommodating detailed user preferences.
                 </p>

                 <div className="border border-brand-light-gray-accent rounded-lg p-4 sm:p-6 my-6 not-prose stagger-scroll-items-parent">
                   <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-foreground">Key User Pain Points Identified:</h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-3 sm:gap-y-4">
                     <div className="flex items-start stagger-scroll-item"><div className="flex-shrink-0 w-5 h-5 text-brand-primary/80 mr-2 sm:mr-3 mt-0.5 sm:mt-1"><svg fill="currentColor" viewBox="0 0 20 20"> <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd"></path> </svg></div><div><h4 className="font-medium text-foreground text-sm sm:text-base">Time-Consuming Manual Conflict Checks</h4><p className="text-foreground/80 text-xs sm:text-sm leading-relaxed">Students found cross-referencing course prerequisites, timings, and potential overlaps to be exceptionally tedious and error-prone.</p></div></div>
                     <div className="flex items-start stagger-scroll-item"><div className="flex-shrink-0 w-5 h-5 text-brand-primary/80 mr-2 sm:mr-3 mt-0.5 sm:mt-1"><svg fill="currentColor" viewBox="0 0 20 20"> <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path> </svg></div><div><h4 className="font-medium text-foreground text-sm sm:text-base">Cognitive Overload from Constraints</h4><p className="text-foreground/80 text-xs sm:text-sm leading-relaxed">Managing diverse constraints such as work schedules, different time zones for online courses, and personal commitments overwhelmed users.</p></div></div>
                     <div className="flex items-start stagger-scroll-item"><div className="flex-shrink-0 w-5 h-5 text-brand-primary/80 mr-2 sm:mr-3 mt-0.5 sm:mt-1"><svg fill="currentColor" viewBox="0 0 20 20"> <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm4 9a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1zm0-4a1 1 0 011-1h4a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd"></path> </svg></div><div><h4 className="font-medium text-foreground text-sm sm:text-base">Ineffective Schedule Visualization</h4><p className="text-foreground/80 text-xs sm:text-sm leading-relaxed">The system lacked an intuitive and customizable calendar view, making it difficult for students to visualize their busy times and potential schedule options.</p></div></div>
                     <div className="flex items-start stagger-scroll-item"><div className="flex-shrink-0 w-5 h-5 text-brand-primary/80 mr-2 sm:mr-3 mt-0.5 sm:mt-1"><svg fill="currentColor" viewBox="0 0 20 20"> <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clipRule="evenodd"></path> </svg></div><div><h4 className="font-medium text-foreground text-sm sm:text-base">Fragmented User Journey</h4><p className="text-foreground/80 text-xs sm:text-sm leading-relaxed">The processes of planning schedules and registering for courses felt disconnected, lacking a seamless and efficient handoff between these critical steps.</p></div></div>
112 |                    </div>
113 |                  </div>

                  <p>
                    Stakeholders, including administrators and academic advisors, expressed a clear need for a system that would <strong className="font-medium text-foreground">reduce their support ticket volume</strong> and provide <strong className="font-medium text-foreground">better insights into student scheduling needs and challenges</strong>. This confluence of user and stakeholder feedback presented a clear opportunity: to develop an AI-enhanced planner that could intelligently suggest optimal schedules while steadfastly respecting user autonomy and control.
                  </p>

                  <blockquote className="elans-thinking-blockquote border-l-4 border-brand-primary pl-4 sm:pl-6 italic text-foreground/80 my-6 sm:my-8 scroll-animate-section">
                    <p className="mb-2"><strong className="not-italic font-sans font-medium text-foreground/90 text-base sm:text-lg">Elan's Thinking: Unearthing Deeper User Needs</strong></p>
                   <p className="text-sm sm:text-base text-foreground/80">"Priya's narrative became a recurring motif—she wasn't merely grappling with a deficient tool; she was struggling to integrate her educational pursuits into the intricate tapestry of her life. The quantitative data indicated that 75% of students felt overwhelmed, but the qualitative stories illuminated the 'why': they were contending with rigid systems ill-equipped to accommodate the non-negotiable realities of their lives. I began sketching diverse user scenarios: the student working late-night shifts, the caregiver with mid-day family responsibilities, the science major navigating back-to-back intensive laboratory sessions requiring strategic breaks. It was evident: our system needed to adapt to their unique lives, not impose a one-size-fits-all standardization."</p>
                 </blockquote>
               </section>
             </CardContent>
           </Card>

           {/* Placeholder for large image */}
           <div className="aspect-video w-full bg-gray-200 dark:bg-gray-700 rounded-lg my-8 sm:my-12 shadow-md flex items-center justify-center text-gray-500 dark:text-gray-400 scroll-animate-section">
             <img src="https://placehold.co/800x450?text=User+Research+Insights+Affinity+Mapping" alt="Placeholder image representing User Research Insights and Affinity Mapping" className="w-full h-full object-cover" />
           </div>

           <section className="mb-10 sm:mb-12 md:mb-16 prose prose-sm sm:prose-base md:prose-lg prose-neutral dark:prose-invert max-w-none prose-headings:font-heading prose-p:leading-relaxed prose-p:text-foreground/80 prose-strong:text-foreground prose-strong:font-medium prose-headings:text-foreground prose-h2:font-semibold prose-h3:font-semibold prose-li:my-1 prose-ul:pl-5 scroll-animate-section">
             <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 text-foreground">The Solution: AI-Powered Scheduling with a Human-Centric Touch</h2>
             <p>
               My team and I reimagined the course planner, anchoring our design philosophy in three core principles:
             </p>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 my-6 sm:my-8 not-prose stagger-scroll-items-parent">
                <div className="border border-brand-light-gray-accent rounded-lg p-4 sm:p-5 hover:shadow-md transition-shadow stagger-scroll-item"><h3 className="font-heading text-lg sm:text-xl mb-2 text-foreground font-semibold">Enhanced Flexibility</h3><p className="text-foreground/80 text-xs sm:text-sm leading-relaxed">Empower students to input detailed and nuanced constraints, such as specific work hours, preferred time blocks for classes, and campus location preferences.</p></div>
                <div className="border border-brand-light-gray-accent rounded-lg p-4 sm:p-5 hover:shadow-md transition-shadow stagger-scroll-item"><h3 className="font-heading text-lg sm:text-xl mb-2 text-foreground font-semibold">Intuitive Visualization</h3><p className="text-foreground/80 text-xs sm:text-sm leading-relaxed">Provide a clear, interactive, and aesthetically pleasing calendar view that instantly highlights potential conflicts and displays available course options effectively.</p></div>
                <div className="border border-brand-light-gray-accent rounded-lg p-4 sm:p-5 hover:shadow-md transition-shadow stagger-scroll-item"><h3 className="font-heading text-lg sm:text-xl mb-2 text-foreground font-semibold">Intelligent AI Integration</h3><p className="text-foreground/80 text-xs sm:text-sm leading-relaxed">Leverage AI to suggest highly personalized and optimized schedules, while always ensuring students remain in full control with override and customization capabilities.</p></div>
             </div>
             <p>
               The <strong className="font-medium text-foreground">AI Advisor</strong> was envisioned as the cornerstone of this new experience, dynamically learning student preferences over time to suggest schedules that seamlessly fit their unique lives. However, I was acutely aware of the need to avoid a "black box" phenomenon. Transparency and user agency were paramount—students needed to be able to easily understand, modify, or reject AI suggestions, and manually customize their schedules as they saw fit.
             </p>
             <blockquote className="elans-thinking-blockquote border-l-4 border-brand-primary pl-4 sm:pl-6 italic text-foreground/80 my-6 sm:my-8 scroll-animate-section">
               <p className="mb-2"><strong className="not-italic font-sans font-medium text-foreground/90 text-base sm:text-lg">Elan's Thinking: Balancing AI Capabilities with User Control</strong></p>
               <p className="text-sm sm:text-base text-foreground/80">"AI was undoubtedly the key to unlocking deep personalization, but I was determined not to create a system that felt opaque or like an inscrutable 'magic box.' It was crucial that students could comprehend the rationale behind the AI's suggestions (e.g., 'This schedule prioritizes your morning class preference and avoids your specified work hours') and possess the unequivocal power to override or fine-tune those recommendations. My design philosophy centered on <strong className="font-medium text-foreground">empowering students with intelligent assistance</strong>, not supplanting their decision-making autonomy."</p>
             </blockquote>
           </section>

           {/* Placeholder for large image */}
           <div className="aspect-video w-full bg-gray-200 dark:bg-gray-700 rounded-lg my-8 sm:my-12 shadow-md flex items-center justify-center text-gray-500 dark:text-gray-400 scroll-animate-section">
             <img src="https://placehold.co/800x450?text=Solution+Concepts+AI+Interaction+Model" alt="Placeholder image representing Solution Concepts and AI Interaction Model" className="w-full h-full object-cover" />
           </div>

           <section className="mb-8 sm:mb-10 md:mb-12 prose prose-sm sm:prose-base md:prose-lg prose-neutral dark:prose-invert max-w-none prose-headings:font-heading prose-p:leading-relaxed prose-p:text-foreground/80 prose-strong:text-foreground prose-strong:font-medium prose-headings:text-foreground prose-h2:font-semibold prose-h3:font-semibold prose-li:my-1 prose-ul:pl-5 scroll-animate-section">
             <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 text-foreground">The Design Process: Iterative Refinement from Wireframes to High-Fidelity Prototypes</h2>
              <p>
                Our design journey began with <strong className="font-medium text-foreground">low-fidelity wireframes</strong>, meticulously mapping out the core user flow: inputting academic and personal constraints, viewing AI-generated schedule suggestions, customizing schedules, and seamlessly proceeding to course registration. Subsequently, the team transitioned to developing <strong className="font-medium text-foreground">high-fidelity, interactive prototypes</strong>. This phase involved rigorous A/B testing of different calendar view paradigms and various interfaces for presenting AI suggestions, ensuring optimal usability and user comprehension.
              </p>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 my-6 sm:my-12 not-prose stagger-scroll-items-parent">
                <div className="border border-brand-light-gray-accent rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow stagger-scroll-item">
                  <h3 className="font-heading text-lg sm:text-xl mb-2 text-foreground font-semibold">Wireframing & Core Flows</h3>
                  <p className="text-foreground/80 text-xs sm:text-sm leading-relaxed">Initial designs focused on the fundamental user journey: defining constraints, reviewing AI-driven schedule options, and navigating to course registration.</p>
                </div>
                <div className="border border-brand-light-gray-accent rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow stagger-scroll-item">
                  <h3 className="font-heading text-lg sm:text-xl mb-2 text-foreground font-semibold">Prototyping & Usability Testing</h3>
                  <p className="text-foreground/80 text-xs sm:text-sm leading-relaxed">Interactive prototypes were employed to test and refine various calendar layouts, AI suggestion presentation styles, and overall user interaction patterns.</p>
                </div>
             </div>
              <p>
                Crucially, <strong className="font-medium text-foreground">iterative usability testing</strong> sessions provided invaluable insights. While students expressed strong appreciation for the AI-generated suggestions, they also articulated a clear desire for more granular control over the calendar view. In response, I incorporated robust filtering options for course types, instructors, and campus locations, empowering students to meticulously fine-tune their schedules to their precise preferences.
              </p>
             <blockquote className="elans-thinking-blockquote border-l-4 border-brand-primary pl-4 sm:pl-6 italic text-foreground/80 my-6 sm:my-8 scroll-animate-section">
                <p className="mb-2"><strong className="not-italic font-sans font-medium text-foreground/90 text-base sm:text-lg">Elan's Thinking: Iterating Based on Direct User Feedback</strong></p>
               <p className="text-sm sm:text-base text-foreground/80">"The usability testing phase was both challenging and profoundly enlightening. Participants universally lauded the AI suggestions for their relevance and time-saving potential. However, they also voiced a need to 'zoom in' on specific calendar details and apply filters for course modalities, instructors, and even specific campus buildings. This feedback led to a crucial realization: I had perhaps over-indexed on the sophistication of the AI while under-engineering the fundamental usability of the calendar view itself. It was a humbling yet critical lesson: AI is an immensely powerful tool, but it must always complement, not supplant, a solid, user-friendly foundation."</p>
             </blockquote>
           </section>

           {/* Placeholder for large image */}
           <div className="aspect-video w-full bg-gray-200 dark:bg-gray-700 rounded-lg my-8 sm:my-12 shadow-md flex items-center justify-center text-gray-500 dark:text-gray-400 scroll-animate-section">
             <img src="https://placehold.co/800x450?text=Wireframes+Prototypes+Usability+Testing" alt="Placeholder image representing Wireframes, Prototypes, and Usability Testing Feedback" className="w-full h-full object-cover" />
           </div>

           <section className="mb-10 sm:mb-12 md:mb-16 prose prose-sm sm:prose-base md:prose-lg prose-neutral dark:prose-invert max-w-none prose-headings:font-heading prose-p:leading-relaxed prose-p:text-foreground/80 prose-strong:text-foreground prose-strong:font-medium prose-headings:text-foreground prose-h2:font-semibold prose-h3:font-semibold prose-li:my-1 prose-ul:pl-5 scroll-animate-section">
             <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 text-foreground">Outcomes and Lessons Learned: Empathy, Iteration, and the Responsible Application of AI</h2>
             <p>
               This comprehensive redesign project yielded significant improvements and imparted several key lessons:
             </p>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 my-6 sm:my-12 not-prose stagger-scroll-items-parent">
                <div className="border border-brand-primary/30 bg-brand-primary/5 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow stagger-scroll-item">
                  <h3 className="font-heading text-lg sm:text-xl mb-2 text-foreground font-semibold">The Primacy of Empathy</h3>
                  <p className="text-foreground/80 text-xs sm:text-sm leading-relaxed">Always commence with a profound and nuanced understanding of user needs, frustrations, and aspirations. <strong className="font-medium text-foreground">Empathy is the bedrock of impactful design.</strong></p>
                </div>
                <div className="border border-brand-primary/30 bg-brand-primary/5 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow stagger-scroll-item">
                  <h3 className="font-heading text-lg sm:text-xl mb-2 text-foreground font-semibold">The Power of Iteration</h3>
                  <p className="text-foreground/80 text-xs sm:text-sm leading-relaxed">Embrace continuous testing and iteration as core tenets of the design process. User feedback is an invaluable catalyst for refinement and innovation.</p>
                </div>
                <div className="border border-brand-primary/30 bg-brand-primary/5 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow stagger-scroll-item">
                  <h3 className="font-heading text-lg sm:text-xl mb-2 text-foreground font-semibold">Responsible AI Implementation</h3>
                  <p className="text-foreground/80 text-xs sm:text-sm leading-relaxed">Leverage the power of AI to create personalized and intelligent user experiences, but critically, always ensure that users remain in control and that AI assistance is transparent and understandable.</p>
                </div>
             </div>
             <p>
               The Student Course Planner redesign not only demonstrably improved the efficiency and user satisfaction of the scheduling experience (as indicated by a <strong className="font-medium text-foreground">XX% reduction in related support tickets</strong> and a <strong className="font-medium text-foreground">YY% increase in successful schedule-to-registration conversions</strong> post-launch - *Note: Insert actual or anticipated metrics here*), but it also powerfully reinforced the transformative importance of a consistently user-centered design philosophy within our organization.
             </p>
             <blockquote className="elans-thinking-blockquote border-l-4 border-brand-primary pl-4 sm:pl-6 italic text-foreground/80 my-6 sm:my-8 scroll-animate-section">
                <p className="mb-2"><strong className="not-italic font-sans font-medium text-foreground/90 text-base sm:text-lg">Elan's Thinking: Reflecting on the Broader Impact</strong></p>
               <p className="text-sm sm:text-base text-foreground/80">"This project served as a profound reminder that UX design transcends mere job function—it represents an opportunity to make a tangible, positive impact on people's lives. By earnestly striving to understand individuals' struggles and by dedicating ourselves to crafting solutions that genuinely alleviate their burdens and enhance their experiences, we, as designers, can contribute to building a more equitable and user-friendly future for everyone."</p>
             </blockquote>
           </section>

           
           <div className="text-center mt-12 sm:mt-16 md:mt-20 scroll-animate-section">
             <p className="text-base sm:text-lg text-foreground/80 mb-6 sm:mb-8">⭐ End of Case Study ⭐</p>

             {/* Link to the other case study */}
             <div className="mb-8 sm:mb-10"> 
               <h3 className="text-xl sm:text-2xl font-heading font-semibold mb-3 sm:mb-4 text-foreground">Explore Another Case Study</h3>
               <Link to="/case-study/campus-hiring" className="text-brand-primary hover:underline font-medium text-base sm:text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-background rounded-sm">
                 40% Faster Campus Hiring: Camu Campus Recruitment App →
               </Link>
             </div>

             <Link to="/" className="inline-flex items-center text-foreground/80 hover:text-foreground transition-colors text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-background rounded-sm">
               <ArrowLeft size={16} className="mr-1.5" aria-hidden="true" />
               <span>Back to Portfolio</span>
             </Link>
           </div>
         </article>
       </main>
       
       <Footer />
    </div>
  );
};

export default CaseStudyStudentPlanner;
