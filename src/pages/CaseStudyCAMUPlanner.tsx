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
} from "../components/ui/accordion";

const CaseStudyCAMUPlanner = () => {
  useEffect(() => {
    document.title = "Case Study: CAMU Course Planner - Elanthamilan - UX Designer";
    window.scrollTo(0, 0);
  }, []);

  // Using consistent brand colors throughout

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

        <article className="max-w-4xl mx-auto space-y-12">
          {/* Hero Section */}
          <SectionReveal>
            <header className="mb-12 xs:mb-16 text-center">
              <div className="flex justify-center gap-2 mb-4">
                <Badge className="bg-[#177863] text-white hover:bg-[#177863]/90">Case Study</Badge>
                <Badge className="bg-[#177863] text-white hover:bg-[#177863]/90">EdTech</Badge>
                <Badge className="bg-[#177863] text-white hover:bg-[#177863]/90">AI Integration</Badge>
              </div>

              {/* Main title with enhanced typography */}
              <h1 className="text-4xl xs:text-5xl sm:text-6xl font-bold mb-6 text-[#177863] dark:text-[#177863] leading-tight font-heading">
                CAMU Course Compass: 80% Faster Student Planning
              </h1>

              {/* Subtitle with better contrast */}
              <p className="text-xl xs:text-2xl text-foreground/80 mb-8 leading-relaxed font-medium">
                Led UX for an AI-driven planner, transforming a 4-6 hour manual scheduling nightmare into an intuitive 45-minute experience, slashing conflicts & boosting student success.
              </p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 xs:gap-8 mb-10 xs:mb-12 text-center">
              <div>
                <p className="text-2xl xs:text-3xl font-bold mb-1 text-[#177863] dark:text-[#177863]">12 months</p>
                <p className="text-xs xs:text-sm text-foreground/70 uppercase tracking-wider">Project Duration</p>
              </div>
              <div>
                <p className="text-2xl xs:text-3xl font-bold mb-1 text-[#16325A] dark:text-[#16325A]">Lead UX Designer</p>
                <p className="text-xs xs:text-sm text-foreground/70 uppercase tracking-wider">Research, Design, Strategy</p>
              </div>
              <div>
                <p className="text-2xl xs:text-3xl font-bold mb-1 text-[#177863] dark:text-[#177863]">80% Faster Planning & 95% Conflict Reduction</p>
                <p className="text-xs xs:text-sm text-foreground/70 uppercase tracking-wider">Impact</p>
              </div>
            </div>

            <CSSCarousel images={carouselImages} label="CAMU Course Compass Planner Showcase" />
          </SectionReveal>

          {/* Overview/Challenge Section */}
          <SectionReveal>
            <section className="mb-12 xs:mb-16 reveal px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-gradient-to-br from-[#177863]/6 to-[#177863]/3 shadow-lg border border-[#177863]/20">
              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-semibold mb-4 xs:mb-6 text-[#177863] dark:text-[#177863] font-heading reveal">
                The Challenge: Student Scheduling Stress & Inefficiency
              </h2>
              <p className="text-base xs:text-lg text-foreground/90 mb-4">
                University students wasted 4-6 hours each semester on manual, error-prone course scheduling. This frustrating process led to 40% experiencing conflicts, significant stress, and academic delays.
              </p>
              <Accordion type="single" collapsible className="w-full space-y-2 reveal mb-4">
                <AccordionItem value="item-camu-detailed-pain-points">
                  <AccordionTrigger className="text-base xs:text-lg font-medium text-[#177863] hover:text-[#177863]/80">View Detailed Pain Points</AccordionTrigger>
                  <AccordionContent className="pt-2">
                    <ul className="list-disc list-inside text-base xs:text-lg text-foreground/80 pl-2 space-y-1">
                      <li><strong className="font-medium text-foreground">Widespread Conflicts:</strong> 40% of students faced registration-day schedule clashes.</li>
                      <li><strong className="font-medium text-foreground">High Stress & Delays:</strong> Manual planning caused anxiety and impacted academic progress.</li>
                      <li><strong className="font-medium text-foreground">Fragmented Information:</strong> Data scattered across systems, requiring manual cross-referencing and prerequisite checks.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <blockquote className="border-l-4 border-[#177863]/50 pl-3 xs:pl-4 sm:pl-6 italic text-foreground/80 my-6 xs:my-8 bg-white p-3 xs:p-4 rounded-r-lg shadow-sm reveal">
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
            <section className="mb-12 xs:mb-16 reveal px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-gradient-to-br from-[#16325A]/6 to-[#16325A]/3 shadow-lg border border-[#16325A]/20">
              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-semibold mb-4 xs:mb-6 text-[#16325A] dark:text-[#16325A] font-heading reveal">
                My Role: Lead UX & Product Strategy
              </h2>
              <p className="text-base xs:text-lg text-foreground/90 mb-4">
                As Lead UX Designer in a team of 2 UX Designers, 1 UX Researcher, 3 PMs, and 8 Engineers, I spearheaded the UX vision, strategy, and execution for this transformative web application (desktop & mobile) over 12 months.
              </p>
              <Accordion type="single" collapsible className="w-full space-y-2 reveal mt-4">
                <AccordionItem value="item-camu-responsibilities">
                  <AccordionTrigger className="text-base xs:text-lg font-medium text-[#16325A] hover:text-[#16325A]/80">Key Contributions & Leadership</AccordionTrigger>
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
            <section className="mb-12 xs:mb-16 reveal px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-gradient-to-br from-[#177863]/6 to-[#177863]/10 shadow-lg border border-[#177863]/25">
              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-semibold mb-6 xs:mb-8 text-[#177863] dark:text-[#177863] font-heading reveal">
                Process: User-Centric Design for Transformative Results
              </h2>

              {/* Discovery & Research Subsection */}
              <div className="mb-8 xs:mb-10">
                <h3 className="text-xl xs:text-2xl sm:text-3xl font-semibold mb-3 text-[#177863] dark:text-[#177863] font-heading">
                  1. Uncovering Deep User Needs (Discovery & Research)
                </h3>
                <p className="text-base xs:text-lg text-foreground/90 mb-4">
                  Our process was anchored in deep empathy. We conducted 45+ student interviews, shadowed 12 students (ethnographic studies), held journey mapping workshops, and usability-tested existing systems to pinpoint core frustrations.
                </p>
                <Accordion type="single" collapsible className="w-full space-y-2 reveal mb-4">
                  <AccordionItem value="item-camu-research-pain-points">
                    <AccordionTrigger className="text-base xs:text-lg font-medium text-[#177863] hover:text-[#177863]/80">Detailed Pain Points from Research</AccordionTrigger>
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
                    <AccordionTrigger className="text-base xs:text-lg font-medium text-[#177863] hover:text-[#177863]/80">Insight: Beyond the Tool, The Experience</AccordionTrigger>
                    <AccordionContent className="pt-2">
                      <blockquote className="border-l-4 border-[#177863]/50 pl-3 xs:pl-4 sm:pl-6 italic text-foreground/80 bg-white p-3 xs:p-4 rounded-r-lg shadow-sm">
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
                <h3 className="text-xl xs:text-2xl sm:text-3xl font-semibold mb-3 text-[#177863] dark:text-[#177863] font-heading">
                  2. Reimagining Core Journeys (Ideation & Design)
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
                        <AccordionTrigger className="text-sm font-medium text-green-700 hover:text-green-700/80 py-1">View New Journey Details</AccordionTrigger>
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
                    <AccordionTrigger className="text-base xs:text-lg font-medium text-[#177863] hover:text-[#177863]/80">Design Philosophy: Smart Simplification</AccordionTrigger>
                    <AccordionContent className="pt-2">
                      <blockquote className="border-l-4 border-[#177863]/50 pl-3 xs:pl-4 sm:pl-6 italic text-foreground/80 bg-white p-3 xs:p-4 rounded-r-lg shadow-sm">
                        <p>The core challenge was simplifying a multi-variable problem without sacrificing power. Constant questioning—'How do we make this smarter for the student?'—drove us to balance desired features with AI engine capabilities and iterative development.</p>
                      </blockquote>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                 <p className="text-base xs:text-lg text-foreground/90">
                  Focused design sprints on IA, scheduling algorithms, and mobile experience ensured a cohesive and robust solution.
                </p>
              </div>

              {/* Key UX Innovations & Iterations Subsection */}
              <div>
                <h3 className="text-xl xs:text-2xl sm:text-3xl font-semibold mb-3 text-[#177863] dark:text-[#177863] font-heading">
                  3. Delivering Impactful UX Innovations (Testing & Iteration)
                </h3>
                <p className="text-base xs:text-lg text-foreground/90 mb-4">
                  Iterative design and rigorous testing led to key innovations that directly addressed student pain points:
                </p>
                <Accordion type="single" collapsible className="w-full space-y-2 reveal">
                  <AccordionItem value="item-camu-ux-innovations">
                    <AccordionTrigger className="text-base xs:text-lg font-medium text-[#177863] hover:text-[#177863]/80">Explore Key UX Innovations</AccordionTrigger>
                    <AccordionContent className="pt-2">
                      <ul className="list-none space-y-6">
                        <li className="p-4 border border-border rounded-md shadow-sm bg-white">
                          <h4 className="font-semibold text-lg mb-1 text-[#177863] dark:text-[#177863]">Smart Course Discovery:</h4>
                          <p className="text-sm text-foreground/80 mb-1">Natural language search & contextual filters cut course discovery time by 70%.</p>
                          {/* <p className="text-sm font-medium text-green-600">Impact: 70% faster course discovery compared to old systems.</p> */}
                        </li>
                        <li className="p-4 border border-border rounded-md shadow-sm bg-white">
                          <h4 className="font-semibold text-lg mb-1 text-[#177863] dark:text-[#177863]">Conflict-Free Generation:</h4>
                          <p className="text-sm text-foreground/80 mb-1">One-click, AI-powered scheduling achieved 99.9% accuracy, eliminating errors.</p>
                          {/* <p className="text-sm font-medium text-green-600">Impact: 99.9% accuracy in generating valid schedules, drastically reducing errors.</p> */}
                        </li>
                        <li className="p-4 border border-border rounded-md shadow-sm bg-white">
                          <h4 className="font-semibold text-lg mb-1 text-[#177863] dark:text-[#177863]">Mobile-First Calendar:</h4>
                          <p className="text-sm text-foreground/80 mb-1">Responsive, touch-friendly interface drove 40% of planning sessions to mobile.</p>
                          {/* <p className="text-sm font-medium text-green-600">Impact: 40% of all planning sessions occurred on mobile devices post-launch.</p> */}
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <ZoomableImage src="/Elanable-uploads/camu-planner-iterations.png" alt="CAMU Planner - Iterative Design Showcase" caption="Screenshots showing evolution of the calendar interface and smart search features." svgPlaceholder={true} className="mt-6" />
              </div>
            </section>
          </SectionReveal>

          {/* Impact/Results Section */}
          <SectionReveal>
            <section className="mb-12 xs:mb-16 reveal px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-gradient-to-br from-[#16325A]/6 to-[#16325A]/10 shadow-lg border border-[#16325A]/25">
              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-semibold mb-4 xs:mb-6 text-[#16325A] dark:text-[#16325A] font-heading reveal">
                Results: Revolutionized Planning, Measurable Impact
              </h2>
              <p className="text-base xs:text-lg text-foreground/90 mb-6 xs:mb-8">
                The CAMU Course Compass Planner dramatically improved student academic planning and delivered significant institutional value.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {[
                  { label: "Time to Plan Courses", before: "4.2 hours", after: "45 minutes", improvement: "82% Reduction", color: "#177863" },
                  { label: "Scheduling Conflicts", before: "42% students", after: "2% students", improvement: "95% Reduction", color: "#177863" },
                  { label: "Task Completion Rate", before: "65%", after: "90%", improvement: "38% Increase", color: "#177863" },
                  { label: "User Satisfaction (NPS)", before: "23", after: "72", improvement: "+49 points", color: "#177863" },
                  { label: "Mobile Usage (Planning)", before: "15%", after: "40%", improvement: "167% Increase", color: "#177863" },
                  { label: "Advisor Workload", before: "High", after: "40% Reduction", improvement: "Efficiency Gain", color: "#16325A" },
                  { label: "Est. Annual Business Value", before: "", after: "$2.6M", improvement: "ROI in 4.9 months", color: "#16325A" },
                ].map((metric, index) => (
                  <div key={index} className="p-4 rounded-md shadow-sm border border-border bg-white">
                    <h4 className="text-lg font-semibold mb-2" style={{ color: metric.color }}>{metric.label}</h4>
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="text-sm text-foreground/70">Before:</span>
                      <span className="text-sm font-medium text-foreground/90">{metric.before || "N/A"}</span>
                    </div>
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="text-sm text-foreground/70">After:</span>
                      <span className="text-sm font-bold" style={{ color: metric.color }}>{metric.after}</span>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" style={{ borderColor: metric.color, color: metric.color }}>{metric.improvement}</Badge>
                      {metric.label === "Time to Plan Courses" && (
                        <div className="text-xs text-foreground/60 mt-0.5">Giving students back valuable time & reducing stress.</div>
                      )}
                      {metric.label === "Scheduling Conflicts" && (
                        <div className="text-xs text-foreground/60 mt-0.5">Ensuring smoother registration & academic progress.</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </SectionReveal>

          {/* Learnings/Reflections Section */}
          <SectionReveal>
            <section className="mb-12 xs:mb-16 reveal px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-gradient-to-br from-[#16325A]/8 to-[#16325A]/12 shadow-lg border border-[#16325A]/20">
              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-semibold mb-4 xs:mb-6 text-[#16325A] dark:text-[#16325A] font-heading reveal">
                Key Learnings & Guiding Principles
              </h2>
              <p className="text-base xs:text-lg text-foreground/90 mb-4">
                This project was a testament to user-centered design's power to solve complex problems and the importance of a deeply collaborative, iterative approach.
              </p>
              <Accordion type="single" collapsible className="w-full space-y-4 reveal mb-6">
                <AccordionItem value="item-camu-lessons-principles">
                  <AccordionTrigger className="text-base xs:text-lg font-medium text-[#16325A] hover:text-[#16325A]/80">Key Lessons & Design Principles</AccordionTrigger>
                  <AccordionContent className="pt-2">
                    <h4 className="text-md xs:text-lg font-semibold mb-1 text-[#16325A] dark:text-[#16325A]">Lessons Learned:</h4>
                    <ul className="list-disc list-inside text-base xs:text-lg text-foreground/80 space-y-1 pl-2 mb-3">
                      <li>User research is paramount for true innovation.</li>
                      <li>Iterative testing prevents costly errors.</li>
                      <li>Cross-functional synergy is vital.</li>
                    </ul>
                    <h4 className="text-md xs:text-lg font-semibold mb-1 text-[#16325A] dark:text-[#16325A]">Design Principles:</h4>
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
                  <AccordionTrigger className="text-base xs:text-lg font-medium text-[#16325A] hover:text-[#16325A]/80">Personal Reflection: The Why Behind the Work</AccordionTrigger>
                  <AccordionContent className="pt-2">
                    <blockquote className="border-l-4 border-[#16325A]/50 pl-3 xs:pl-4 sm:pl-6 italic text-foreground/80 bg-white p-3 xs:p-4 rounded-r-lg shadow-sm">
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
              <div className="bg-gradient-to-br from-[#177863]/12 to-[#177863]/6 border-[#177863]/20 shadow-[#177863]/20 rounded-3xl overflow-hidden shadow-lg border-2 hover:shadow-xl transition-all duration-300 ease-in-out">
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
                        className="inline-flex items-center text-foreground/50 hover:text-[#177863] transition-colors duration-200 text-sm font-medium py-2 px-4 rounded-lg hover:bg-gray-50/50 dark:hover:bg-slate-800/30"
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
