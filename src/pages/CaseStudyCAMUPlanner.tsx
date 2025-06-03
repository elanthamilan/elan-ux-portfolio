import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Badge } from '../components/ui/badge';
import ZoomableImage from '../components/ui/ZoomableImage';
import CSSCarousel from '../components/ui/CSSCarousel';
import SectionReveal from '../components/ui/SectionReveal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

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
    <div className="bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24 xs:pt-28 sm:pt-32">
        <SectionReveal>
          <Link
            to="/"
            className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </SectionReveal>

        <article className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <SectionReveal>
            <header className="mb-12 xs:mb-16 text-center">
              <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
                <Badge style={{ backgroundColor: primaryColor, color: 'white' }} className="px-3 py-1.5 text-sm font-medium rounded-md shadow-sm border border-transparent">Case Study</Badge>
                <Badge className="bg-[#16325A]/15 text-[#16325A] border-[#16325A]/30 px-3 py-1.5 text-sm font-medium rounded-md border">EdTech</Badge>
                <Badge className="bg-[#F8F4F2] text-[#177863] border-[#177863]/25 px-3 py-1.5 text-sm font-medium rounded-md border">AI Integration</Badge>
                <span className="text-sm text-foreground/70 ml-auto hidden xs:inline">Published June 2023</span>
              </div>
              <h1 className="text-3xl xs:text-4xl sm:text-5xl font-bold mb-3 xs:mb-4" style={{ color: primaryColor }}>
                CAMU Course Compass: 80% Faster Student Planning
              </h1>
              <p className="text-base xs:text-lg sm:text-xl text-foreground/80">
                Led UX for an AI-driven planner, transforming a 4-6 hour manual scheduling nightmare into an intuitive 45-minute experience, slashing conflicts & boosting student success.
              </p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 xs:gap-8 mb-10 xs:mb-12 text-center">
              <div>
                <p className="text-2xl xs:text-3xl font-bold mb-1" style={{ color: primaryColor }}>12 months</p>
                <p className="text-xs xs:text-sm text-foreground/70 uppercase tracking-wider">Project Duration</p>
              </div>
              <div>
                <p className="text-2xl xs:text-3xl font-bold mb-1" style={{ color: secondaryColor }}>Lead UX Designer</p>
                <p className="text-xs xs:text-sm text-foreground/70 uppercase tracking-wider">Research, Design, Strategy</p>
              </div>
              <div>
                <p className="text-2xl xs:text-3xl font-bold mb-1" style={{ color: primaryColor }}>80% Faster Planning & 95% Conflict Reduction</p>
                <p className="text-xs xs:text-sm text-foreground/70 uppercase tracking-wider">Impact</p>
                <div className="text-sm text-foreground/60">Transforming student academic journeys.</div>
              </div>
            </div>
             <span className="text-sm text-foreground/70 xs:hidden text-center block mb-4">Published June 2023</span>


            <CSSCarousel images={carouselImages} label="CAMU Course Compass Planner Showcase" />
          </SectionReveal>

          {/* Overview/Challenge Section */}
          <SectionReveal>
            <section className={`mb-12 xs:mb-16 reveal px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-gradient-to-br from-[${primaryColor}]/10 to-[${primaryColor}]/5 shadow-lg border border-[${primaryColor}]/20`}>
              <h2 className="text-2xl xs:text-3xl font-semibold mb-4 xs:mb-6" style={{ color: primaryColor }}>
                The Challenge: Student Scheduling Stress & Inefficiency
              </h2>
              <p className="text-base xs:text-lg text-foreground/90 mb-4">
                University students wasted 4-6 hours each semester on manual, error-prone course scheduling. This frustrating process led to 40% experiencing conflicts, significant stress, and academic delays.
              </p>
              <Accordion type="single" collapsible className="w-full space-y-2 reveal mb-4">
                <AccordionItem value="item-camu-detailed-pain-points">
                  <AccordionTrigger className="text-base xs:text-lg font-medium text-brand-primary hover:text-brand-primary/80">View Detailed Pain Points</AccordionTrigger>
                  <AccordionContent className="pt-2">
                    <ul className="list-disc list-inside text-base xs:text-lg text-foreground/80 pl-2 space-y-1">
                      <li><strong className="font-medium text-foreground">Widespread Conflicts:</strong> 40% of students faced registration-day schedule clashes.</li>
                      <li><strong className="font-medium text-foreground">High Stress & Delays:</strong> Manual planning caused anxiety and impacted academic progress.</li>
                      <li><strong className="font-medium text-foreground">Fragmented Information:</strong> Data scattered across systems, requiring manual cross-referencing and prerequisite checks.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <blockquote className={`border-l-4 border-[${primaryColor}]/50 pl-3 xs:pl-4 sm:pl-6 italic text-foreground/80 my-6 xs:my-8 bg-white p-3 xs:p-4 rounded-r-lg shadow-sm reveal`}>
                <p>"I literally spent my entire weekend trying to figure out my schedule, and when registration opened, half my classes were full. It was incredibly stressful."</p>
                <cite className="block text-sm text-right mt-2 not-italic">- Sarah, Junior Year Student</cite>
              </blockquote>
              <p className="text-base xs:text-lg text-foreground/90">
                The goal: Develop CAMU Course Compass, a user-centered, AI-powered platform to automate and simplify academic planning, drastically improving student outcomes.
              </p>
            </section>
          </SectionReveal>

          {/* My Role & Responsibilities Section */}
          <SectionReveal>
            <section className={`mb-12 xs:mb-16 reveal px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-gradient-to-br from-[${secondaryColor}]/10 to-[${secondaryColor}]/5 shadow-lg border border-[${secondaryColor}]/20`}>
              <h2 className="text-2xl xs:text-3xl font-semibold mb-4 xs:mb-6" style={{ color: secondaryColor }}>
                My Role: Lead UX & Product Strategy
              </h2>
              <p className="text-base xs:text-lg text-foreground/90 mb-4">
                As Lead UX Designer in a team of 2 UX Designers, 1 UX Researcher, 3 PMs, and 8 Engineers, I spearheaded the UX vision, strategy, and execution for this transformative web application (desktop & mobile) over 12 months.
              </p>
              <Accordion type="single" collapsible className="w-full space-y-2 reveal mt-4">
                <AccordionItem value="item-camu-responsibilities">
                  <AccordionTrigger className="text-base xs:text-lg font-medium text-brand-secondary hover:text-brand-secondary/80">Key Contributions & Leadership</AccordionTrigger>
                  <AccordionContent className="pt-2">
                    <ul className="list-disc list-inside text-base xs:text-lg text-foreground/80 space-y-2 pl-2">
                      <li>Led user research (45+ interviews, ethnographic studies, journey mapping) to uncover deep user needs.</li>
                      <li>Developed data-driven personas ('Planning Paige,' 'Last-Minute Luke') guiding design decisions.</li>
                      <li>Defined UX strategy for AI-driven intelligent planning & personalization.</li>
                      <li>Directed interaction design: wireframes, prototypes, and complex user flows.</li>
                      <li>Oversaw UI design, ensuring an intuitive, accessible, and mobile-first experience.</li>
                      <li>Championed iterative design through continuous usability testing and feedback analysis.</li>
                      <li>Drove cross-functional alignment with product and engineering to deliver a cohesive solution.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>
          </SectionReveal>

          {/* The Process Section */}
          <SectionReveal>
            <section className={`mb-12 xs:mb-16 reveal px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-gradient-to-br from-[${primaryColor}]/10 to-[${primaryColor}]/5 shadow-lg border border-[${primaryColor}]/20`}>
              <h2 className="text-2xl xs:text-3xl font-semibold mb-6 xs:mb-8" style={{ color: primaryColor }}>
                Process: User-Centric Design for Transformative Results
              </h2>

              {/* Discovery & Research Subsection */}
              <div className="mb-8 xs:mb-10">
                <h3 className="text-xl xs:text-2xl font-semibold mb-3" style={{ color: primaryColor }}>
                  Uncovering Deep User Needs (Discovery & Research)
                </h3>
                <p className="text-base xs:text-lg text-foreground/90 mb-4">
                  Our process was anchored in deep empathy. We conducted 45+ student interviews, shadowed 12 students (ethnographic studies), held journey mapping workshops, and usability-tested existing systems to pinpoint core frustrations.
                </p>
                <Accordion type="single" collapsible className="w-full space-y-2 reveal mb-4">
                  <AccordionItem value="item-camu-research-pain-points">
                    <AccordionTrigger className="text-base xs:text-lg font-medium text-brand-primary hover:text-brand-primary/80">Detailed Pain Points from Research</AccordionTrigger>
                    <AccordionContent className="pt-2">
                      {/* <p className="text-base xs:text-lg text-foreground/80 mb-2">Key pain points identified included:</p> */}
                      <ul className="list-disc list-inside text-base xs:text-lg text-foreground/80 pl-2 space-y-1">
                        <li>Information overload & system fragmentation.</li>
                        <li>Error-prone manual conflict checking.</li>
                        <li>Confusion over complex prerequisite chains.</li>
                        <li>Significant registration anxiety.</li>
                        <li>Poor mobile planning capabilities.</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <ZoomableImage src="/Elanable-uploads/camu-planner-research.png" alt="CAMU Planner - User Research Artifacts" caption="User journey maps and persona highlights from the discovery phase." svgPlaceholder={true} />
                <Accordion type="single" collapsible className="w-full space-y-2 reveal my-6 xs:my-8">
                  <AccordionItem value="item-camu-elan-thinking-discovery">
                    <AccordionTrigger className="text-base xs:text-lg font-medium text-brand-primary hover:text-brand-primary/80">Insight: Beyond the Tool, The Experience</AccordionTrigger>
                    <AccordionContent className="pt-2">
                      <blockquote className={`border-l-4 border-brand-primary/50 pl-3 xs:pl-4 sm:pl-6 italic text-foreground/80 bg-white p-3 xs:p-4 rounded-r-lg shadow-sm`}>
                        <p>Direct observation revealed the depth of student frustration. The 'Aha!' moment was realizing we weren't just fixing a tool, but a broken, stressful experience. This understanding became our design compass.</p>
                      </blockquote>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <p className="text-base xs:text-lg text-foreground/90">
                  This research yielded key personas like 'Planning Paige' (organized, seeking efficiency) and 'Last-Minute Luke' (needs clear guidance). These personas were instrumental in focusing our design efforts, ensuring features like 'Smart Course Discovery' and 'Automated Planning' directly addressed their distinct needs and goals.
                </p>
              </div>

              {/* Ideation & Design Subsection */}
              <div className="mb-8 xs:mb-10">
                <h3 className="text-xl xs:text-2xl font-semibold mb-3" style={{ color: primaryColor }}>
                  Reimagining Core Journeys (Ideation & Design)
                </h3>
                <p className="text-base xs:text-lg text-foreground/90 mb-4">
                  We zeroed in on the 'First-Time Course Planning' journey, a critical pain point.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                    <h4 className="font-semibold text-red-700 mb-1">Before:</h4>
                    <p className="text-sm text-red-600">A 4+ hour manual struggle with a 35% abandonment rate.</p>
                  </div>
                  <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                    <h4 className="font-semibold text-green-700 mb-1">After (New Journey):</h4>
                    <p className="text-sm text-green-600 mb-2">A ~45-minute guided experience achieving 90% completion.</p>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-camu-new-journey-details">
                        <AccordionTrigger className="text-sm font-medium text-brand-primary hover:text-brand-primary/80 py-1">View New Journey Details</AccordionTrigger>
                        <AccordionContent className="pt-1">
                          <ul className="list-disc list-inside text-sm text-green-600 space-y-1 pl-2">
                            <li><strong className="font-medium">Quick Setup:</strong> Intuitive major selection & smart defaults.</li>
                            <li><strong className="font-medium">Intelligent Discovery:</strong> AI-recommended courses & visual requirements.</li>
                            <li><strong className="font-medium">Automated Planning:</strong> Drag-and-drop with real-time conflict detection & multiple schedule options.</li>
                            <li><strong className="font-medium">Easy Optimization:</strong> Side-by-side comparison & one-click save.</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
                <ZoomableImage src="/Elanable-uploads/camu-planner-design.png" alt="CAMU Planner - Ideation and Wireframes" caption="Early wireframes and user flow diagrams for the new planning journey." svgPlaceholder={true} />
                <Accordion type="single" collapsible className="w-full space-y-2 reveal my-6 xs:my-8">
                  <AccordionItem value="item-camu-elan-thinking-ideation">
                    <AccordionTrigger className="text-base xs:text-lg font-medium text-brand-primary hover:text-brand-primary/80">Design Rationale: Smart Simplification</AccordionTrigger>
                    <AccordionContent className="pt-2">
                      <blockquote className={`border-l-4 border-brand-primary/50 pl-3 xs:pl-4 sm:pl-6 italic text-foreground/80 bg-white p-3 xs:p-4 rounded-r-lg shadow-sm`}>
                        <p>The core challenge was simplifying a multi-variable problem without sacrificing power. Constant questioning—'How do we make this smarter for the student?'—drove us to balance desired features with AI engine capabilities and iterative development.</p>
                      </blockquote>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                 <p className="text-base xs:text-lg text-foreground/90">
                  Focused design sprints on IA, scheduling algorithms, and mobile experience ensured a cohesive and robust solution.
                </p>
              </div>

              {/* Key UX Innovations & Iterations Subsection -> Now part of "The Solution" or "Testing & Iteration" */}
              {/* Content moved or to be reorganized */}
              <h3 className="text-xl xs:text-2xl font-semibold mb-3 mt-8" style={{ color: primaryColor }}>
                Validating with Users (Testing & Iteration)
              </h3>
              <p className="text-base xs:text-lg text-foreground/90 mb-4">
                Rigorous usability testing was conducted at each stage, from wireframes to high-fidelity prototypes. This iterative feedback loop was crucial for refining workflows, validating design choices, and ensuring the final product truly met student needs and expectations. For example, initial AI suggestions were perceived as too opaque, leading us to incorporate clearer explanations for why schedules were recommended.
              </p>
               <ZoomableImage src="/Elanable-uploads/camu-planner-iterations.png" alt="CAMU Planner - Iterative Design Showcase" caption="Screenshots showing evolution of the calendar interface and smart search features." svgPlaceholder={true} className="mt-6" />
            </section>
          </SectionReveal>

          {/* The Solution Section */}
          <SectionReveal>
            <section className={`mb-12 xs:mb-16 reveal px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-gradient-to-br from-[${primaryColor}]/10 to-[${primaryColor}]/5 shadow-lg border border-[${primaryColor}]/20`}>
              <h2 className="text-2xl xs:text-3xl font-semibold mb-6" style={{ color: primaryColor }}>
                The Solution: AI-Powered Clarity & Control
              </h2>
              <p className="text-base xs:text-lg text-foreground/90 mb-4">
                The CAMU Course Compass Planner offers a suite of intelligent features designed to streamline academic planning:
              </p>
              <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-1" style={{color: primaryColor}}>Smart Course Discovery:</h4>
                    <p className="text-sm text-foreground/80">Natural language search (e.g., "intro marketing classes on Tuesdays"), contextual filters based on major/minor, visual mapping of degree requirements, and instant prerequisite validation. This cut course discovery time by an estimated 70%.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1" style={{color: primaryColor}}>Conflict-Free Schedule Generation:</h4>
                    <p className="text-sm text-foreground/80">One-click generation of multiple optimized, conflict-free schedule options. A visual calendar view allows for easy understanding and side-by-side comparison of alternatives, achieving 99.9% accuracy in generating valid schedules.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1" style={{color: primaryColor}}>Mobile-First Calendar Interface:</h4>
                    <p className="text-sm text-foreground/80">A fully responsive design ensures students can plan effectively on any device, with a touch-friendly calendar and intuitive navigation. This led to 40% of all planning sessions occurring on mobile devices post-launch.</p>
                  </div>
              </div>
            </section>
          </SectionReveal>

          {/* Impact/Results Section */}
          <SectionReveal>
            <section className={`mb-12 xs:mb-16 reveal px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-gradient-to-br from-[${secondaryColor}]/10 to-[${secondaryColor}]/5 shadow-lg border border-[${secondaryColor}]/20`}>
              <h2 className="text-2xl xs:text-3xl font-semibold mb-4 xs:mb-6" style={{ color: secondaryColor }}>
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
              <h2 className="text-2xl xs:text-3xl font-semibold mb-4 xs:mb-6" style={{ color: primaryColor }}>
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

          {/* Continue Reading Section */}
          <SectionReveal>
            <section className="py-8">
              <h2 className="text-2xl xs:text-3xl font-semibold text-center mb-8" style={{ color: secondaryColor }}>
                Continue Exploring My Work
              </h2>
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl border border-border hover:shadow-xl transition-shadow duration-300">
                <div className="md:flex">
                  <div className="md:shrink-0">
                    {/* Using a generic placeholder or could be an actual image if available */}
                    <img
                      className="h-48 w-full object-cover md:h-full md:w-48"
                      src="/Elanable-uploads/student-planner-thumbnail.png" // Placeholder, replace with actual if exists
                      alt="AI Course Planner Thumbnail"
                    />
                  </div>
                  <div className="p-6 xs:p-8">
                    <div className="uppercase tracking-wide text-sm font-semibold" style={{ color: secondaryColor }}>
                      Next Case Study
                    </div>
                    <Link
                      to="/case-study/student-planner"
                      className="block mt-1 text-lg xs:text-xl leading-tight font-bold text-foreground hover:underline"
                    >
                      AI-Powered Course Planner: Eliminating Scheduling Conflicts
                    </Link>
                    <p className="mt-2 text-sm xs:text-base text-foreground/70">
                      A deep dive into designing an intelligent system for student course planning, focusing on constraint management and automated conflict resolution.
                    </p>
                    <Link
                      to="/case-study/student-planner"
                      className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white hover:bg-opacity/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[${secondaryColor}] mt-4`}
                      style={{ backgroundColor: secondaryColor }}
                    >
                      Read Case Study
                      <ArrowLeft className="w-4 h-4 ml-2 transform rotate-180" /> {/* Visually it's a right arrow */}
                    </Link>
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
