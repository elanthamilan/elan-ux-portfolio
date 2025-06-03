import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Badge } from '../components/ui/badge';
import ZoomableImage from '../components/ui/ZoomableImage';
import CSSCarousel from '../components/ui/CSSCarousel';
import SectionReveal from '../components/SectionReveal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/components/ui/accordion";

const CaseStudyCAMUPlanner = () => {
  useEffect(() => {
    document.title = "Case Study: CAMU Course Planner - Elanthamilan - UX Designer";
    window.scrollTo(0, 0);
  }, []);

  const primaryColor = "#177863"; // Green
  const secondaryColor = "#16325A"; // Blue

  const carouselImages = [
    { src: "/Elanable-uploads/camu-planner-hero-1.png", alt: "CAMU Planner Interface", svgPlaceholder: true },
    { src: "/Elanable-uploads/camu-planner-hero-2.png", alt: "CAMU Planner Mobile View", svgPlaceholder: true },
    { src: "/Elanable-uploads/camu-planner-hero-3.png", alt: "CAMU Planner Feature Showcase", svgPlaceholder: true },
  ];

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Subtle mesh gradient background for case study */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(circle at 20% 20%, rgba(23, 120, 99, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 80% 25%, rgba(248, 244, 242, 0.12) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(23, 120, 99, 0.06) 0%, transparent 50%),
              radial-gradient(circle at 90% 90%, rgba(248, 244, 242, 0.10) 0%, transparent 50%),
              linear-gradient(135deg, rgba(23, 120, 99, 0.04) 0%, rgba(255, 255, 255, 0.9) 50%, rgba(248, 244, 242, 0.08) 100%)
            `
          }}
        />
        {/* Additional mesh layer for depth */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            background: `
              conic-gradient(from 30deg at 30% 30%, rgba(23, 120, 99, 0.04), rgba(248, 244, 242, 0.06), rgba(23, 120, 99, 0.03), rgba(248, 244, 242, 0.05)),
              conic-gradient(from 210deg at 70% 70%, rgba(248, 244, 242, 0.04), rgba(23, 120, 99, 0.02), rgba(248, 244, 242, 0.06), rgba(23, 120, 99, 0.03))
            `
          }}
        />
      </div>
      <Header />

      {/* Adjusted page container padding: px-2 xs:px-4 sm:px-6, py-8 xs:py-12 md:py-16 */}
      <main id="main-content" className="flex-grow container mx-auto px-2 xs:px-4 sm:px-6 py-8 xs:py-12 md:py-16">
        <Link to="/" className="inline-flex items-center text-[#177863] hover:text-[#177863]/80 transition-colors mb-6 xs:mb-8 text-sm font-medium bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm border border-[#177863]/20"> {/* Adjusted margin */}
          <ArrowLeft size={16} className="mr-1.5" />
          <span>Back to Home</span>
        </Link>

        <article className="max-w-4xl mx-auto space-y-12">
           {/* Hero Section - Enhanced with better visual hierarchy */}
          <SectionReveal>
            <div className="reveal">
              {/* Meta badges and info */}
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <Badge className="bg-[#177863] text-white px-3 py-1.5 text-sm font-medium rounded-md shadow-sm border border-[#177863]">
                  Case Study
                </Badge>
                <Badge className="bg-[#16325A]/15 text-[#16325A] border-[#16325A]/30 px-3 py-1.5 text-sm font-medium rounded-md border">
                  EdTech
                </Badge>
                <Badge className="bg-[#F8F4F2] text-[#177863] border-[#177863]/25 px-3 py-1.5 text-sm font-medium rounded-md border">
                  AI Integration
                </Badge>
                <span className="text-sm text-foreground/70 ml-auto">Published June 2023</span>
              </div>

              {/* Main title with enhanced typography */}
              <h1 className="text-4xl xs:text-5xl sm:text-6xl font-bold mb-6 text-[#177863] dark:text-[#177863] leading-tight font-heading">
                CAMU Course Compass: 80% Faster Student Planning
              </h1>

              {/* Subtitle with better contrast */}
              <p className="text-xl xs:text-2xl text-foreground/80 mb-8 leading-relaxed font-medium">
                Led UX for an AI-driven planner, transforming a 4-6 hour manual scheduling nightmare into an intuitive 45-minute experience, slashing conflicts & boosting student success.
              </p>

              {/* Key metrics in a clean grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 p-6 bg-gradient-to-br from-[#177863]/8 to-[#16325A]/8 rounded-2xl border border-[#177863]/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#177863] mb-1">12 months</div>
                  <div className="text-sm text-foreground/70 uppercase tracking-wider">Timeline</div>
                  <div className="text-sm text-foreground/60">June 2022 - June 2023</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#16325A] mb-1">Lead UX Designer</div>
                  <div className="text-sm text-foreground/70 uppercase tracking-wider">My Role</div>
                  <div className="text-sm text-foreground/60">Research, Strategy, Design</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#177863] mb-1">80% Faster & 95% Conflict Reduction</div>
                  <div className="text-sm text-foreground/70 uppercase tracking-wider">Impact</div>
                  <div className="text-sm text-foreground/60">Transforming student academic journeys.</div>
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* Hero Image Section */}
          <SectionReveal>
            <div className="reveal w-full bg-card rounded-3xl overflow-hidden shadow-xl border border-brand-primary/10">
              <CSSCarousel
                images={carouselImages}
                carouselLabel="CAMU Course Compass Planner Showcase"
              />
            </div>
          </SectionReveal>

            {/* REVISED Overview/Challenge START */}
            <SectionReveal>
              {/* Responsive padding: px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8. Adjusted mb. */}
              <section className="mb-12 xs:mb-16 reveal px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-gradient-to-br from-[#177863]/6 to-[#177863]/3 shadow-lg border border-[#177863]/20">
                {/* Adaptive Typography for H2: text-2xl xs:text-3xl sm:text-4xl. Adjusted mb. */}
                <h2 className="text-2xl xs:text-3xl sm:text-4xl font-semibold mb-4 xs:mb-6 text-[#177863] font-heading reveal text-center">The Challenge: Untangling Complex Academic Planning</h2>
                <p className="text-foreground leading-relaxed text-base xs:text-lg mb-3 xs:mb-4 reveal">
                  <strong className="font-medium text-foreground">Project Name:</strong> CAMU Course Compass Planner (Shipped: June 2023).
                </p>
                <p className="text-foreground leading-relaxed text-base xs:text-lg mb-3 xs:mb-4 reveal">
                  CAMU's academic planning was broken. Students spent 4-6 hours each semester manually building schedules, only to face conflicts, stress, and academic delays. The goal: Transform this nightmare into an intelligent, user-centered experience that empowers students to succeed.
                </p>
                <div className="text-foreground text-base xs:text-lg leading-relaxed space-y-2.5 xs:space-y-3 reveal">
                  <p className="reveal"><strong className="font-medium text-foreground">User Pain Points Along Critical Paths:</strong></p>
                  <ul className="list-disc pl-4 xs:pl-5 space-y-1 xs:space-y-1.5 reveal"> {/* Adjusted padding and spacing */}
                    <li className="reveal"><strong className="font-medium text-foreground">Student's Planning Journey:</strong> Struggled with fragmented information, manual conflict checking, and overwhelming course options, leading to 40% experiencing schedule conflicts.</li>
                    <li className="reveal"><strong className="font-medium text-foreground">Academic Advisor's Journey:</strong> Faced repetitive student questions and lacked tools to provide efficient, data-driven guidance during advising sessions.</li>
                    <li className="reveal"><strong className="font-medium text-foreground">Institution's Journey:</strong> Dealt with high support ticket volumes, registration bottlenecks, and poor student satisfaction affecting retention and academic success.</li>
                  </ul>
                  <p className="mt-2.5 xs:mt-3 reveal">
                    The clear need: An AI-powered, intuitive platform that transforms academic planning from a stressful chore into an empowering experience that sets students up for success.
                  </p>
                </div>
                <blockquote className="border-l-4 border-[#177863]/50 pl-3 xs:pl-4 sm:pl-6 italic text-foreground/80 my-6 xs:my-8 bg-white p-3 xs:p-4 rounded-r-lg shadow-sm reveal">
                  <p className="mb-1.5 xs:mb-2 text-foreground text-sm xs:text-base">"I literally spent my entire weekend trying to figure out my schedule, and when registration opened, half my classes were full. It was incredibly stressful and made me question if I was even capable of managing college."</p>
                  <cite className="block text-sm text-right mt-2 not-italic">- Sarah, Junior Year Student</cite>
                </blockquote>
              </section>
            </SectionReveal>
            {/* REVISED Overview/Challenge END */}

          <SectionReveal>
             {/* Responsive padding and mb. */}
            <section className="mb-12 xs:mb-16 reveal px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-gradient-to-br from-[#16325A]/6 to-[#16325A]/3 shadow-lg border border-[#16325A]/20">
              {/* Adaptive Typography for H2. Adjusted mb. */}
              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-semibold mb-4 xs:mb-6 text-[#16325A] font-heading reveal text-center">My Role: Lead UX Designer & AI Strategy</h2>
              <p className="text-foreground leading-relaxed text-base xs:text-lg mb-3 xs:mb-4 reveal">
                As Lead UX Designer in a cross-functional team of 2 UX Designers, 1 UX Researcher, 3 Product Managers, and 8 Engineers, I spearheaded the UX vision, AI integration strategy, and end-to-end design execution for this transformative academic planning platform over 12 months.
              </p>
              <Accordion type="single" collapsible className="w-full space-y-2 reveal">
                <AccordionItem value="item-responsibilities">
                  <AccordionTrigger className="text-base xs:text-lg font-medium text-foreground hover:text-brand-secondary">Key Contributions & Leadership</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-4 xs:pl-5 text-foreground text-base xs:text-lg leading-relaxed space-y-1 xs:space-y-1.5 pt-2">
                      <li>Led comprehensive user research (45+ interviews, ethnographic studies, journey mapping) to uncover deep student needs and pain points.</li>
                      <li>Developed data-driven personas ('Planning Paige,' 'Last-Minute Luke') and user journey maps that guided all design decisions.</li>
                      <li>Defined UX strategy for AI-driven intelligent planning, ensuring transparency and user control in automated recommendations.</li>
                      <li>Directed end-to-end interaction design from lo-fi wireframes to hi-fi prototypes and complex user flows.</li>
                      <li>Oversaw comprehensive UI design system, ensuring intuitive, accessible, and mobile-first experience across all touchpoints.</li>
                      <li>Championed iterative design methodology through continuous usability testing, A/B testing, and user feedback analysis.</li>
                      <li>Drove cross-functional alignment with product management and engineering teams to deliver a cohesive, technically feasible solution.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>
          </SectionReveal>

          <SectionReveal>
            {/* Responsive padding and mb. */}
            <section className="mb-12 xs:mb-16 reveal px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-gradient-to-br from-[#F8F4F2]/40 to-[#F8F4F2]/60 shadow-lg border border-[#177863]/15">
               {/* Adaptive Typography for H2. Adjusted mb. */}
              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-semibold mb-4 xs:mb-6 text-[#177863] font-heading reveal text-center">Design Process: From User Insights to AI-Powered Solution</h2>

              {/* Adaptive Typography for H3. Adjusted mb. */}
              <h3 className="text-xl xs:text-2xl sm:text-3xl font-semibold mb-3 xs:mb-4 text-brand-primary font-heading reveal text-center">Understanding Student Needs (Discovery & Research)</h3>
              <p className="text-foreground leading-relaxed text-base xs:text-lg mb-3 xs:mb-4 reveal">
                Our process was anchored in deep empathy. We conducted 45+ student interviews, shadowed 12 students through ethnographic studies, held journey mapping workshops, and usability-tested existing systems to pinpoint core frustrations and unmet needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xs:gap-6 mb-6 xs:mb-8 reveal"> {/* Adjusted gap and mb */}
                 {/* Responsive padding for info boxes: p-3 xs:p-4 sm:p-5 */}
                <div className="border border-brand-primary/30 rounded-lg p-3 xs:p-4 sm:p-5 reveal bg-white shadow-sm">
                  {/* Adaptive Typography for H4 (used as sub-sub-heading). Adjusted mb. */}
                  <h4 className="font-semibold text-lg xs:text-xl mb-1.5 xs:mb-2 text-brand-primary font-heading">Students</h4>
                  <p className="text-foreground text-sm xs:text-base leading-relaxed">Needed intuitive course discovery, conflict-free scheduling, and mobile-friendly planning tools.</p>
                </div>
                <div className="border border-brand-primary/30 rounded-lg p-3 xs:p-4 sm:p-5 reveal bg-white shadow-sm">
                  <h4 className="font-semibold text-lg xs:text-xl mb-1.5 xs:mb-2 text-brand-primary font-heading">Academic Advisors</h4>
                  <p className="text-foreground text-sm xs:text-base leading-relaxed">Required data-driven tools to provide efficient guidance and reduce repetitive student questions.</p>
                </div>
                <div className="border border-brand-primary/30 rounded-lg p-3 xs:p-4 sm:p-5 reveal bg-white shadow-sm">
                  <h4 className="font-semibold text-lg xs:text-xl mb-1.5 xs:mb-2 text-brand-primary font-heading">Institution</h4>
                  <p className="text-foreground text-sm xs:text-base leading-relaxed">Wanted reduced support tickets, improved student satisfaction, and streamlined registration processes.</p>
                </div>
              </div>
              <Accordion type="single" collapsible className="w-full space-y-2 reveal mt-4">
                <AccordionItem value="item-discovery-more">
                  <AccordionTrigger className="text-base xs:text-lg font-medium text-foreground hover:text-brand-primary">Key Research Insights</AccordionTrigger>
                  <AccordionContent className="pt-2">
                    <div className="border border-brand-secondary/30 rounded-lg p-3 xs:p-4 sm:p-6 bg-white shadow-sm">
                      <h4 className="text-lg xs:text-xl font-semibold mb-2 xs:mb-3 text-brand-secondary font-heading">Critical Pain Points Identified:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 xs:gap-x-6 gap-y-2 xs:gap-y-3 text-foreground text-sm xs:text-base">
                        <div className="flex items-start"><div className="flex-shrink-0 w-4 h-4 xs:w-5 xs:h-5 text-brand-secondary mr-2 xs:mr-3 mt-0.5 xs:mt-1"><svg fill="currentColor" viewBox="0 0 20 20"> <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd"></path> </svg></div><div><strong className="font-medium text-foreground">Information Overload:</strong> System fragmentation and scattered data sources.</div></div>
                        <div className="flex items-start"><div className="flex-shrink-0 w-4 h-4 xs:w-5 xs:h-5 text-brand-secondary mr-2 xs:mr-3 mt-0.5 xs:mt-1"><svg fill="currentColor" viewBox="0 0 20 20"> <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path> </svg></div><div><strong className="font-medium text-foreground">Manual Conflict Checking:</strong> Error-prone and time-consuming process.</div></div>
                        <div className="flex items-start"><div className="flex-shrink-0 w-4 h-4 xs:w-5 xs:h-5 text-brand-secondary mr-2 xs:mr-3 mt-0.5 xs:mt-1"><svg fill="currentColor" viewBox="0 0 20 20"> <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm4 9a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1zm0-4a1 1 0 011-1h4a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd"></path> </svg></div><div><strong className="font-medium text-foreground">Prerequisite Confusion:</strong> Complex chains difficult to understand and navigate.</div></div>
                        <div className="flex items-start"><div className="flex-shrink-0 w-4 h-4 xs:w-5 xs:h-5 text-brand-secondary mr-2 xs:mr-3 mt-0.5 xs:mt-1"><svg fill="currentColor" viewBox="0 0 20 20"> <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clipRule="evenodd"></path> </svg></div><div><strong className="font-medium text-foreground">Registration Anxiety:</strong> High stress levels affecting academic performance.</div></div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              {/* Full width image container, adjust vertical margin */}
              <div className="w-full bg-accent-bg rounded-lg my-8 xs:my-12 shadow-lg reveal border border-brand-primary/20"> {/* Removed overflow-hidden */}
                <ZoomableImage
                  src="/Elanable-uploads/camu-planner-research.png"
                  alt="User research insights summary showing student personas and journey maps for CAMU Course Compass"
                  caption="User personas and journey maps developed during the discovery phase to guide design decisions."
                  className="aspect-video"
                  svgPlaceholder={true}
                />
              </div>
              <Accordion type="single" collapsible className="w-full space-y-2 reveal my-6 xs:my-8">
                <AccordionItem value="item-elan-thinking-discovery">
                  <AccordionTrigger className="text-base xs:text-lg font-medium text-brand-secondary hover:text-brand-secondary/80">Insight: Digging Deeper into Student Needs</AccordionTrigger>
                  <AccordionContent className="pt-2">
                    <blockquote className="border-l-4 border-brand-secondary/50 pl-3 xs:pl-4 sm:pl-6 italic text-foreground/80 bg-white p-3 xs:p-4 rounded-r-lg shadow-sm">
                      <p className="text-foreground text-sm xs:text-base">Direct observation revealed the depth of student frustration. The 'Aha!' moment was realizing we weren't just fixing a tool, but transforming a broken, stressful experience that was affecting students' confidence and academic success. This understanding became our design compass, driving every decision toward empowerment rather than just efficiency.</p>
                    </blockquote>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <p className="text-foreground leading-relaxed text-base xs:text-lg">
                This research yielded key personas like 'Planning Paige' (organized, seeking efficiency) and 'Last-Minute Luke' (needs clear guidance). These personas were instrumental in focusing our design efforts, ensuring features like 'Smart Course Discovery' and 'Automated Planning' directly addressed their distinct needs and goals.
              </p>

              {/* REVISED Ideation & Design START */}
              {/* Adaptive Typography for H3. Adjusted margins. */}
              <h3 className="text-xl xs:text-2xl sm:text-3xl font-semibold mb-3 xs:mb-4 mt-8 xs:mt-12 text-brand-secondary font-heading reveal text-center">Crafting Intelligent Workflows (Ideation & Design)</h3>
              <p className="text-foreground leading-relaxed text-base xs:text-lg mb-3 xs:mb-4 reveal">
                We zeroed in on the 'First-Time Course Planning' journey, transforming it from a 4+ hour manual struggle with 35% abandonment into a guided 45-minute experience with 90% completion rate. This transformation required reimagining every step of the student planning process.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xs:gap-8 my-6 xs:my-8 reveal"> {/* Adjusted gap and my */}
                 {/* Responsive padding and typography for iteration boxes */}
                <div className="border border-red-300 rounded-lg p-3 xs:p-4 sm:p-6 reveal bg-red-50 shadow-sm">
                  <h4 className="font-heading text-base xs:text-lg mb-1 xs:mb-1.5 text-red-700 font-semibold">Before: Broken Journey</h4>
                  <p className="text-foreground text-xs xs:text-sm leading-relaxed">4+ hour manual struggle with 35% abandonment rate, high stress, and frequent conflicts.</p>
                </div>
                <div className="border border-green-300 rounded-lg p-3 xs:p-4 sm:p-6 reveal bg-green-50 shadow-sm">
                  <h4 className="font-heading text-base xs:text-lg mb-1 xs:mb-1.5 text-green-700 font-semibold">After: Intelligent Journey</h4>
                  <p className="text-foreground text-xs xs:text-sm leading-relaxed">45-minute guided experience with 90% completion rate and AI-powered assistance.</p>
                </div>
              </div>
              <Accordion type="single" collapsible className="w-full space-y-2 reveal my-6 xs:my-8">
                <AccordionItem value="item-elan-thinking-ideation">
                  <AccordionTrigger className="text-base xs:text-lg font-medium text-brand-secondary hover:text-brand-secondary/80">Design Rationale: Balancing AI Intelligence & User Control</AccordionTrigger>
                  <AccordionContent className="pt-2">
                    <blockquote className="border-l-4 border-brand-secondary/50 pl-3 xs:pl-4 sm:pl-6 italic text-foreground/80 bg-white p-3 xs:p-4 rounded-r-lg shadow-sm">
                      <p className="mb-1.5 xs:mb-2 text-foreground text-sm xs:text-base">The core challenge was simplifying a multi-variable problem without sacrificing power. Constant questioning—'How do we make this smarter for the student?'—drove us to balance AI automation with user control. Students needed to trust the system while maintaining agency over their academic journey.</p>
                    </blockquote>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <p className="text-foreground leading-relaxed text-base xs:text-lg mb-3 xs:mb-4 reveal">
                This led to an AI-assisted planning flow with smart course discovery, automated conflict detection, and multiple schedule generation—all while keeping students in control of their final decisions.
              </p>
              {/* REVISED Ideation & Design END */}

              {/* Full width image container, adjust vertical margin */}
              <div className="w-full bg-accent-bg rounded-lg my-8 xs:my-12 shadow-lg reveal border border-brand-secondary/20"> {/* Removed overflow-hidden */}
                <ZoomableImage
                  src="/Elanable-uploads/camu-planner-design.png"
                  alt="Early wireframes and high-fidelity prototypes of the CAMU Course Compass planning interface"
                  caption="Wireframes and prototypes illustrating the evolution of the AI-powered planning flow and interface design."
                  className="aspect-video"
                  svgPlaceholder={true}
                />
              </div>

              {/* REVISED Testing & Iteration START */}
              {/* Adaptive Typography for H3. Adjusted margins. */}
              <h3 className="text-xl xs:text-2xl sm:text-3xl font-semibold mb-3 xs:mb-4 mt-8 xs:mt-12 text-brand-primary font-heading reveal text-center">Iterating to Excellence (Testing & Validation)</h3>
              <p className="text-foreground leading-relaxed text-base xs:text-lg mb-3 xs:mb-4 reveal">
                We conducted 5 comprehensive rounds of usability testing with 60+ students across different academic years and majors. Each round revealed critical insights that shaped our final solution, ensuring it truly met diverse student needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 my-6 xs:my-8 reveal"> {/* Adjusted gap and my */}
                 {/* Responsive padding and typography for testing metrics */}
                <div className="border border-brand-primary/30 rounded-lg p-3 xs:p-4 sm:p-5 reveal bg-white shadow-sm">
                  <h4 className="font-heading text-base xs:text-lg mb-1 xs:mb-1.5 text-brand-primary font-semibold">5 Testing Rounds</h4>
                  <p className="text-foreground text-xs xs:text-sm leading-relaxed">Comprehensive usability testing with iterative improvements</p>
                </div>
                <div className="border border-brand-primary/30 rounded-lg p-3 xs:p-4 sm:p-5 reveal bg-white shadow-sm">
                  <h4 className="font-heading text-base xs:text-lg mb-1 xs:mb-1.5 text-brand-primary font-semibold">60+ Students</h4>
                  <p className="text-foreground text-xs xs:text-sm leading-relaxed">Diverse participants across academic years and majors</p>
                </div>
                <div className="border border-brand-primary/30 rounded-lg p-3 xs:p-4 sm:p-5 reveal bg-white shadow-sm">
                  <h4 className="font-heading text-base xs:text-lg mb-1 xs:mb-1.5 text-brand-primary font-semibold">95% Success Rate</h4>
                  <p className="text-foreground text-xs xs:text-sm leading-relaxed">Final testing showed dramatic improvement in task completion</p>
                </div>
              </div>
              <Accordion type="single" collapsible className="w-full space-y-2 reveal my-6 xs:my-8">
                <AccordionItem value="item-testing-iterations">
                  <AccordionTrigger className="text-base xs:text-lg font-medium text-foreground hover:text-brand-primary">Key Testing Insights & Iterations</AccordionTrigger>
                  <AccordionContent className="pt-2">
                    <div className="border border-brand-primary/30 rounded-lg p-3 xs:p-4 sm:p-6 bg-white shadow-sm">
                      <div className="space-y-3 xs:space-y-4 text-foreground text-sm xs:text-base">
                        <div className="flex items-start"><div className="flex-shrink-0 w-6 h-6 xs:w-7 xs:h-7 bg-brand-primary text-white rounded-full flex items-center justify-center text-xs xs:text-sm font-bold mr-3 xs:mr-4 mt-0.5">1</div><div><strong className="font-medium text-foreground">Course Discovery Simplification:</strong> Streamlined overwhelming initial flow based on user confusion patterns.</div></div>
                        <div className="flex items-start"><div className="flex-shrink-0 w-6 h-6 xs:w-7 xs:h-7 bg-brand-primary text-white rounded-full flex items-center justify-center text-xs xs:text-sm font-bold mr-3 xs:mr-4 mt-0.5">2</div><div><strong className="font-medium text-foreground">Visual Prerequisite Mapping:</strong> Added clear dependency visualization when students struggled with course relationships.</div></div>
                        <div className="flex items-start"><div className="flex-shrink-0 w-6 h-6 xs:w-7 xs:h-7 bg-brand-primary text-white rounded-full flex items-center justify-center text-xs xs:text-sm font-bold mr-3 xs:mr-4 mt-0.5">3</div><div><strong className="font-medium text-foreground">Mobile-First Enhancement:</strong> Redesigned interface after discovering 70% of students preferred mobile planning.</div></div>
                        <div className="flex items-start"><div className="flex-shrink-0 w-6 h-6 xs:w-7 xs:h-7 bg-brand-primary text-white rounded-full flex items-center justify-center text-xs xs:text-sm font-bold mr-3 xs:mr-4 mt-0.5">4</div><div><strong className="font-medium text-foreground">AI Transparency Features:</strong> Implemented 'Why this recommendation?' to build trust in AI suggestions.</div></div>
                        <div className="flex items-start"><div className="flex-shrink-0 w-6 h-6 xs:w-7 xs:h-7 bg-brand-primary text-white rounded-full flex items-center justify-center text-xs xs:text-sm font-bold mr-3 xs:mr-4 mt-0.5">5</div><div><strong className="font-medium text-foreground">Conflict Resolution Flow:</strong> Refined based on user confusion patterns and error recovery needs.</div></div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              {/* Full width image container, adjust vertical margin */}
              <div className="w-full bg-accent-bg rounded-lg my-8 xs:my-12 shadow-lg reveal border border-brand-primary/20"> {/* Removed overflow-hidden */}
                <ZoomableImage
                  src="/Elanable-uploads/camu-planner-iterations.png"
                  alt="Usability testing sessions and iteration highlights for CAMU Course Compass"
                  caption="Testing sessions and key iterations that shaped the final user experience."
                  className="aspect-video"
                  svgPlaceholder={true}
                />
              </div>
              <Accordion type="single" collapsible className="w-full space-y-2 reveal my-6 xs:my-8">
                <AccordionItem value="item-elan-thinking-testing">
                  <AccordionTrigger className="text-base xs:text-lg font-medium text-brand-primary hover:text-brand-primary/80">Insight: Building Trust Through Transparency</AccordionTrigger>
                  <AccordionContent className="pt-2">
                    <blockquote className="border-l-4 border-brand-primary/50 pl-3 xs:pl-4 sm:pl-6 italic text-foreground/80 bg-white p-3 xs:p-4 rounded-r-lg shadow-sm">
                      <p className="mb-1.5 xs:mb-2 text-foreground text-sm xs:text-base">Each testing round revealed nuanced user behaviors we hadn't anticipated. The breakthrough came in Round 3 when we realized students needed to 'see' the AI's reasoning to trust its recommendations. This led to our transparency features that became crucial for user adoption and confidence.</p>
                    </blockquote>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <p className="text-foreground leading-relaxed text-base xs:text-lg">
                This iterative approach ensured our final solution truly met student needs, resulting in the 80% efficiency improvement and 95% conflict reduction we achieved. The testing process itself became a model for future product development at CAMU.
              </p>
              {/* REVISED Testing & Iteration END */}
            </section>
          </SectionReveal>

          <SectionReveal>
            {/* Responsive padding and mb. */}
            <section className="mb-12 xs:mb-16 reveal px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-gradient-to-br from-[#177863]/6 to-[#177863]/3 shadow-lg border border-[#177863]/20">
              {/* Adaptive Typography for H2. Adjusted mb. */}
              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-semibold mb-4 xs:mb-6 text-[#177863] font-heading reveal text-center">The Solution: AI-Powered Academic Planning</h2>
              <p className="text-foreground leading-relaxed text-base xs:text-lg mb-6 xs:mb-8 reveal">
                The CAMU Course Compass Planner transforms academic planning through intelligent automation while maintaining student agency. Our solution addresses every pain point identified in research through thoughtful design and AI integration.
              </p>

              {/* Feature grid with enhanced visual design */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xs:gap-8 mb-8 xs:mb-12 reveal">
                <div className="border border-brand-primary/30 rounded-lg p-4 xs:p-6 bg-white shadow-sm">
                  <div className="flex items-center mb-3 xs:mb-4">
                    <div className="w-8 h-8 xs:w-10 xs:h-10 bg-brand-primary rounded-lg flex items-center justify-center mr-3 xs:mr-4">
                      <svg className="w-4 h-4 xs:w-5 xs:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-lg xs:text-xl font-semibold text-brand-primary font-heading">Smart Course Discovery</h3>
                  </div>
                  <p className="text-foreground text-sm xs:text-base leading-relaxed mb-3 xs:mb-4">Natural language search, contextual filters, visual degree mapping, and instant prerequisite validation.</p>
                  <div className="text-xs xs:text-sm text-brand-primary font-medium">70% reduction in discovery time</div>
                </div>

                <div className="border border-brand-primary/30 rounded-lg p-4 xs:p-6 bg-white shadow-sm">
                  <div className="flex items-center mb-3 xs:mb-4">
                    <div className="w-8 h-8 xs:w-10 xs:h-10 bg-brand-primary rounded-lg flex items-center justify-center mr-3 xs:mr-4">
                      <svg className="w-4 h-4 xs:w-5 xs:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-lg xs:text-xl font-semibold text-brand-primary font-heading">Intelligent Scheduling</h3>
                  </div>
                  <p className="text-foreground text-sm xs:text-base leading-relaxed mb-3 xs:mb-4">One-click generation of multiple optimized, conflict-free schedule options with visual calendar comparison.</p>
                  <div className="text-xs xs:text-sm text-brand-primary font-medium">99.9% accuracy in valid schedules</div>
                </div>

                <div className="border border-brand-primary/30 rounded-lg p-4 xs:p-6 bg-white shadow-sm">
                  <div className="flex items-center mb-3 xs:mb-4">
                    <div className="w-8 h-8 xs:w-10 xs:h-10 bg-brand-primary rounded-lg flex items-center justify-center mr-3 xs:mr-4">
                      <svg className="w-4 h-4 xs:w-5 xs:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-lg xs:text-xl font-semibold text-brand-primary font-heading">Mobile-First Design</h3>
                  </div>
                  <p className="text-foreground text-sm xs:text-base leading-relaxed mb-3 xs:mb-4">Fully responsive interface with touch-friendly calendar and intuitive navigation for planning anywhere.</p>
                  <div className="text-xs xs:text-sm text-brand-primary font-medium">70% mobile usage during testing</div>
                </div>

                <div className="border border-brand-primary/30 rounded-lg p-4 xs:p-6 bg-white shadow-sm">
                  <div className="flex items-center mb-3 xs:mb-4">
                    <div className="w-8 h-8 xs:w-10 xs:h-10 bg-brand-primary rounded-lg flex items-center justify-center mr-3 xs:mr-4">
                      <svg className="w-4 h-4 xs:w-5 xs:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-lg xs:text-xl font-semibold text-brand-primary font-heading">AI Transparency</h3>
                  </div>
                  <p className="text-foreground text-sm xs:text-base leading-relaxed mb-3 xs:mb-4">'Why this recommendation?' features build trust by explaining AI reasoning and decision-making processes.</p>
                  <div className="text-xs xs:text-sm text-brand-primary font-medium">Increased user confidence & adoption</div>
                </div>
              </div>

              {/* Key innovation callout */}
              <div className="border border-brand-secondary/30 rounded-lg p-4 xs:p-6 bg-gradient-to-br from-[#16325A]/5 to-[#16325A]/10 reveal">
                <h3 className="text-lg xs:text-xl font-semibold text-brand-secondary mb-2 xs:mb-3 font-heading">Key Innovation: Balancing AI Power with User Control</h3>
                <p className="text-foreground text-sm xs:text-base leading-relaxed">
                  Our breakthrough was creating an AI system that automates complex scheduling while keeping students in control. The system generates intelligent recommendations but always allows manual override, building trust through transparency and maintaining student agency in their academic journey.
                </p>
              </div>
            </section>
          </SectionReveal>

          {/* Impact/Results Section */}
          <SectionReveal>
            <section className={`mb-12 xs:mb-16 reveal px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-gradient-to-br from-[${secondaryColor}]/10 to-[${secondaryColor}]/5 shadow-lg border border-[${secondaryColor}]/20`}>
              <h2 className="text-2xl xs:text-3xl font-semibold mb-4 xs:mb-6 text-center" style={{ color: secondaryColor }}>
                Results: Revolutionized Planning, Measurable Impact
              </h2>
              <p className="text-base xs:text-lg text-foreground/90 mb-6 xs:mb-8">
                The CAMU Course Compass Planner dramatically improved student academic planning and delivered significant institutional value.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 xs:gap-6"> {/* Changed to 2 columns for better display of 4 key metrics */}
                {[
                  { value: "82%", label: "Reduction in Time to Plan Courses", subText: "From 4.2 hours to 45 minutes", soWhat: "Giving students back valuable time & reducing stress.", color: "text-brand-primary" },
                  { value: "95%", label: "Reduction in Scheduling Conflicts", subText: "From 42% to 2% of students", soWhat: "Ensuring smoother registration & academic progress.", color: "text-brand-primary" },
                  { value: "+49 pts", label: "Increase in User Satisfaction (NPS)", subText: "From 23 to 72", soWhat: "Demonstrating high user delight & adoption.", color: "text-brand-primary" },
                  { value: "$2.6M", label: "Est. Annual Business Value", subText: "ROI in 4.9 months", soWhat: "Significant return on investment for the institution.", color: "text-brand-secondary" },
                ].map((metric, index) => (
                  <div key={index} className="border border-border bg-white p-3 xs:p-4 sm:p-6 rounded-lg text-center shadow-sm">
                    <p className={`text-3xl xs:text-4xl sm:text-5xl font-semibold ${metric.color} mb-0.5 xs:mb-1`}>{metric.value}</p>
                    <p className="text-foreground text-sm xs:text-base leading-relaxed">{metric.label}</p>
                    {metric.subText && <p className="text-xs text-foreground/60 mt-0.5">{metric.subText}</p>}
                    {metric.soWhat && <div className="text-xs text-foreground/60 mt-0.5">{metric.soWhat}</div>}
                  </div>
                ))}
              </div>
            </section>
          </SectionReveal>

          {/* Learnings/Reflections Section */}
          <SectionReveal>
            <section className={`mb-12 xs:mb-16 reveal px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-gradient-to-br from-[${primaryColor}]/10 to-[${primaryColor}]/5 shadow-lg border border-[${primaryColor}]/20`}>
              <h2 className="text-2xl xs:text-3xl font-semibold mb-4 xs:mb-6 text-center" style={{ color: primaryColor }}>
                Key Learnings & Guiding Principles
              </h2>
              <p className="text-base xs:text-lg text-foreground/90 mb-4">
                This project was a testament to user-centered design's power to solve complex problems and the importance of a deeply collaborative, iterative approach.
              </p>
              <Accordion type="single" collapsible className="w-full space-y-4 reveal mb-6">
                <AccordionItem value="item-camu-lessons-learned">
                  <AccordionTrigger className="text-base xs:text-lg font-medium text-brand-primary hover:text-brand-primary/80">View Key Lessons Learned</AccordionTrigger>
                  <AccordionContent className="pt-2">
                    <ul className="list-disc list-inside text-base xs:text-lg text-foreground/80 space-y-1 pl-2">
                      <li>User research is paramount for true innovation.</li>
                      <li>Iterative testing prevents costly errors.</li>
                      <li>Cross-functional synergy is vital.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-camu-design-principles">
                  <AccordionTrigger className="text-base xs:text-lg font-medium text-brand-primary hover:text-brand-primary/80">View Key Design Principles Applied</AccordionTrigger>
                  <AccordionContent className="pt-2">
                    <ul className="list-disc list-inside text-base xs:text-lg text-foreground/80 space-y-1 pl-2">
                      <li>Progressive disclosure for clarity.</li>
                      <li>Intelligent defaults to reduce effort.</li>
                      <li>Real-time feedback for guidance.</li>
                      <li>Mobile-first for accessibility.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type="single" collapsible className="w-full space-y-2 reveal my-6 xs:my-8">
                <AccordionItem value="item-camu-elan-thinking-learnings">
                  <AccordionTrigger className="text-base xs:text-lg font-medium text-brand-primary hover:text-brand-primary/80">Reflection: The Why Behind the Work</AccordionTrigger>
                  <AccordionContent className="pt-2">
                    <blockquote className={`border-l-4 border-brand-primary/50 pl-3 xs:pl-4 sm:pl-6 italic text-foreground/80 bg-white p-3 xs:p-4 rounded-r-lg shadow-sm`}>
                      <p>The core motivation was transforming a universally frustrating student experience into one that was empowering and efficient. Witnessing the direct, positive impact on students and the institution was the ultimate reward.</p>
                    </blockquote>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <p className="text-base xs:text-lg text-foreground/90">
                The Course Compass Planner not only solved critical student issues but also set a new standard for academic planning tools at CAMU, paving the way for future AI-driven student support.
              </p>
            </section>
          </SectionReveal>

          {/* Continue Reading Section - Inspired by case study cards design */}
          <SectionReveal>
            <section className="mb-12 xs:mb-16 reveal">
              <div className="bg-gradient-to-br from-brand-primary/12 to-brand-primary/6 border-brand-primary/20 shadow-brand-primary/20 rounded-3xl overflow-hidden shadow-lg border-2 hover:shadow-xl transition-all duration-300 ease-in-out">
                <div className="px-6 py-8 md:px-8 md:py-10">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl xs:text-3xl sm:text-4xl font-bold font-heading text-[#177863] dark:text-[#177863] mb-3">
                      Continue Reading
                    </h3>
                    <p className="text-foreground/80 text-base xs:text-lg leading-relaxed">
                      Explore more case studies and design insights
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* Next Case Study Card - Fully clickable with improved styling */}
                    <Link
                      to="/case-study/student-planner"
                      className="group block bg-card dark:bg-card text-card-foreground bg-gradient-to-br from-[#16325A]/5 to-[#16325A]/10 border-[#16325A]/20 dark:border-slate-700 rounded-3xl overflow-hidden transition-all duration-300 ease-in-out flex flex-col h-full shadow-xl hover:shadow-2xl border-2 border-b-4 border-b-[#16325A] hover:scale-[1.02]"
                    >
                      <div className="flex items-start space-x-4 p-6 flex-grow">
                        <div className="flex-shrink-0 w-12 h-12 bg-[#16325A]/15 dark:bg-[#16325A]/25 rounded-xl flex items-center justify-center group-hover:bg-[#16325A]/20 dark:group-hover:bg-[#16325A]/30 transition-colors duration-200">
                          <span className="material-symbols-outlined text-2xl text-[#16325A]">target</span>
                        </div>
                        <div className="flex-1 flex flex-col h-full">
                          <h4 className="font-semibold text-lg text-[#16325A] dark:text-[#16325A] mb-2 group-hover:text-[#177863] dark:group-hover:text-[#177863] transition-colors duration-200">
                            AI-Powered Course Planner: Eliminating Scheduling Conflicts
                          </h4>
                          <p className="text-foreground/70 dark:text-card-foreground/70 text-sm mb-4 leading-relaxed flex-grow">
                            Student Course Planning with Intelligent Constraint Management
                          </p>
                          <div className="inline-flex items-center text-[#16325A] dark:text-[#16325A] group-hover:text-[#177863] dark:group-hover:text-[#177863] transition-colors duration-200 text-sm font-medium group-hover:translate-x-1 transform mt-auto">
                            Read Case Study
                            <ArrowLeft size={14} className="ml-1.5 rotate-180" />
                          </div>
                        </div>
                      </div>
                    </Link>

                    {/* Back to Home Card - Minimal, below case study */}
                    <div className="text-center">
                      <Link
                        to="/"
                        className="inline-flex items-center text-foreground/50 hover:text-brand-primary transition-colors duration-200 text-sm font-medium py-2 px-4 rounded-lg hover:bg-gray-50/50 dark:hover:bg-slate-800/30"
                      >
                        <ArrowLeft size={14} className="mr-1.5" />
                        Back to Home
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </SectionReveal>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudyCAMUPlanner;
