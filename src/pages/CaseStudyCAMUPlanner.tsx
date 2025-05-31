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
              <div className="flex justify-center gap-2 mb-4">
                <Badge style={{ backgroundColor: primaryColor, color: 'white' }}>Case Study</Badge>
                <Badge style={{ backgroundColor: primaryColor, color: 'white' }}>EdTech</Badge>
                <Badge style={{ backgroundColor: primaryColor, color: 'white' }}>AI Integration</Badge>
              </div>
              <h1 className="text-3xl xs:text-4xl sm:text-5xl font-bold mb-3 xs:mb-4" style={{ color: primaryColor }}>
                CAMU Course Compass: Revolutionizing Student Planning
              </h1>
              <p className="text-base xs:text-lg sm:text-xl text-foreground/80">
                Transforming a 4-6 hour manual scheduling process into an intuitive, 45-minute automated experience, dramatically reducing stress and improving student outcomes.
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
                <p className="text-2xl xs:text-3xl font-bold mb-1" style={{ color: primaryColor }}>80% Faster</p>
                <p className="text-xs xs:text-sm text-foreground/70 uppercase tracking-wider">Planning Time Reduction</p>
              </div>
            </div>

            <CSSCarousel images={carouselImages} label="CAMU Course Compass Planner Showcase" />
          </SectionReveal>

          {/* Overview/Challenge Section */}
          <SectionReveal>
            <section className={`mb-12 xs:mb-16 reveal px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-gradient-to-br from-[${primaryColor}]/10 to-[${primaryColor}]/5 shadow-lg border border-[${primaryColor}]/20`}>
              <h2 className="text-2xl xs:text-3xl font-semibold mb-4 xs:mb-6" style={{ color: primaryColor }}>
                The Challenge: Hours Wasted, Opportunities Missed
              </h2>
              <p className="text-base xs:text-lg text-foreground/90 mb-4">
                University students traditionally spent an arduous 4-6 hours each semester wrestling with clunky, outdated systems to manually piece together their course schedules. This inefficient process was a significant source of frustration and anxiety.
              </p>
              <Accordion type="single" collapsible className="w-full space-y-2 reveal mb-4">
                <AccordionItem value="item-camu-detailed-pain-points">
                  <AccordionTrigger className={`text-base xs:text-lg font-medium text-[${primaryColor}] hover:text-[${primaryColor}]/80`}>View Detailed Pain Points</AccordionTrigger>
                  <AccordionContent className="pt-2">
                    <ul className="list-disc list-inside text-base xs:text-lg text-foreground/80 pl-2 space-y-1">
                      <li>Approximately 40% of students faced scheduling conflicts during the critical registration period.</li>
                      <li>The manual effort led to significant stress, potential academic delays, and ultimately, poorer student outcomes.</li>
                      <li>Key information was often fragmented across multiple platforms, requiring manual conflict checking and deciphering confusing prerequisite chains.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <blockquote className={`border-l-4 border-[${primaryColor}]/50 pl-3 xs:pl-4 sm:pl-6 italic text-foreground/80 my-6 xs:my-8 bg-white p-3 xs:p-4 rounded-r-lg shadow-sm reveal`}>
                <p>"I literally spent my entire weekend trying to figure out my schedule, and when registration opened, half my classes were full. It was incredibly stressful."</p>
                <cite className="block text-sm text-right mt-2 not-italic">- Sarah, Junior Year Student</cite>
              </blockquote>
              <p className="text-base xs:text-lg text-foreground/90">
                To address these profound challenges, we designed and launched the CAMU Course Compass Planner, a user-centered platform aimed at intelligent automation and intuitive design, transforming this critical aspect of the student journey.
              </p>
            </section>
          </SectionReveal>

          {/* My Role & Responsibilities Section */}
          <SectionReveal>
            <section className={`mb-12 xs:mb-16 reveal px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-gradient-to-br from-[${secondaryColor}]/10 to-[${secondaryColor}]/5 shadow-lg border border-[${secondaryColor}]/20`}>
              <h2 className="text-2xl xs:text-3xl font-semibold mb-4 xs:mb-6" style={{ color: secondaryColor }}>
                My Role & Responsibilities
              </h2>
              <p className="text-base xs:text-lg text-foreground/90 mb-4">
                As the Lead UX Designer on a cross-functional team (2 UX Designers, 1 UX Researcher, 3 Product Managers, and 8 Engineers), I spearheaded the user experience strategy and design for the CAMU Course Compass Planner. The project spanned 12 months and targeted a Web Application platform, compatible with both Desktop and Mobile devices.
              </p>
              <Accordion type="single" collapsible className="w-full space-y-2 reveal mt-4">
                <AccordionItem value="item-camu-responsibilities">
                  <AccordionTrigger className={`text-base xs:text-lg font-medium text-[${secondaryColor}] hover:text-[${secondaryColor}]/80`}>View All Key Responsibilities</AccordionTrigger>
                  <AccordionContent className="pt-2">
                    <ul className="list-disc list-inside text-base xs:text-lg text-foreground/80 space-y-2 pl-2">
                      <li>User Research: Conducting 45+ student interviews, ethnographic studies (shadowing 12 students), journey mapping workshops, and usability tests on existing systems.</li>
                      <li>Persona Development: Creating data-driven personas such as "Planning Paige" (organized, seeks efficiency) and "Last-Minute Luke" (needs guidance) to inform design decisions.</li>
                      <li>UX Strategy: Defining the strategic approach for an AI-driven planning experience, focusing on user needs and pain points.</li>
                      <li>Interaction Design: Developing wireframes, interactive prototypes, and user flows to visualize and test design concepts.</li>
                      <li>User Interface Design: Crafting a visually appealing, intuitive, and accessible interface.</li>
                      <li>Iterative Design & Usability Testing: Leading multiple cycles of testing and refinement based on user feedback.</li>
                      <li>Cross-functional Collaboration: Working closely with product management to align on goals and with engineering to ensure design feasibility and quality.</li>
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
                Our User-Centered Design Process
              </h2>

              {/* Discovery & Research Subsection */}
              <div className="mb-8 xs:mb-10">
                <h3 className="text-xl xs:text-2xl font-semibold mb-3" style={{ color: primaryColor }}>
                  1. Deep User Understanding (Discovery & Research)
                </h3>
                <p className="text-base xs:text-lg text-foreground/90 mb-4">
                  Our process began with extensive user research to deeply understand the student experience. We conducted over 45 student interviews, shadowed 12 students during their planning process (ethnographic studies), organized journey mapping workshops, and performed usability tests on the then-current systems.
                </p>
                <Accordion type="single" collapsible className="w-full space-y-2 reveal mb-4">
                  <AccordionItem value="item-camu-research-pain-points">
                    <AccordionTrigger className={`text-base xs:text-lg font-medium text-[${primaryColor}] hover:text-[${primaryColor}]/80`}>Detailed Pain Points from Research</AccordionTrigger>
                    <AccordionContent className="pt-2">
                      <p className="text-base xs:text-lg text-foreground/80 mb-2">Key pain points identified included:</p>
                      <ul className="list-disc list-inside text-base xs:text-lg text-foreground/80 pl-2 space-y-1">
                        <li>Information fragmentation across multiple university portals.</li>
                        <li>Manual and error-prone conflict detection for course timings.</li>
                        <li>Confusion surrounding course prerequisites and degree requirements.</li>
                        <li>High levels of anxiety related to the registration process.</li>
                        <li>A suboptimal experience on mobile devices.</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <ZoomableImage src="/Elanable-uploads/camu-planner-research.png" alt="CAMU Planner - User Research Artifacts" caption="User journey maps and persona highlights from the discovery phase." svgPlaceholder={true} />
                <Accordion type="single" collapsible className="w-full space-y-2 reveal my-6 xs:my-8">
                  <AccordionItem value="item-camu-elan-thinking-discovery">
                    <AccordionTrigger className={`text-base xs:text-lg font-medium text-[${primaryColor}] hover:text-[${primaryColor}]/80`}>Elan's Thinking: Understanding Student Struggles</AccordionTrigger>
                    <AccordionContent className="pt-2">
                      <blockquote className={`border-l-4 border-[${primaryColor}]/50 pl-3 xs:pl-4 sm:pl-6 italic text-foreground/80 bg-white p-3 xs:p-4 rounded-r-lg shadow-sm`}>
                        <p>"Understanding the nuances of student struggles was foundational. We didn't just want to build a new tool; we wanted to solve their core problems. The 'Aha!' moments from direct observation were invaluable."</p>
                      </blockquote>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <p className="text-base xs:text-lg text-foreground/90">
                  This research culminated in data-driven personas like "Planning Paige" (highly organized, values efficiency) and "Last-Minute Luke" (often overwhelmed, needs clear guidance), which served as constant reference points.
                </p>
              </div>

              {/* Ideation & Design Subsection */}
              <div className="mb-8 xs:mb-10">
                <h3 className="text-xl xs:text-2xl font-semibold mb-3" style={{ color: primaryColor }}>
                  2. Focus on Key Journeys (Ideation & Design)
                </h3>
                <p className="text-base xs:text-lg text-foreground/90 mb-4">
                  We focused on redesigning the critical "First-Time Course Planning" journey.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                    <h4 className="font-semibold text-red-700 mb-1">Before:</h4>
                    <p className="text-sm text-red-600">A 4+ hour ordeal, often involving multiple spreadsheets, confusing website tabs, and a 35% abandonment rate before a satisfactory schedule was drafted.</p>
                  </div>
                  <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                    <h4 className="font-semibold text-green-700 mb-1">After (New Journey):</h4>
                    <p className="text-sm text-green-600 mb-2">A streamlined ~45-minute experience with a 90% task completion rate.</p>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-camu-new-journey-details">
                        <AccordionTrigger className="text-sm font-medium text-green-700 hover:text-green-700/80 py-1">View New Journey Details</AccordionTrigger>
                        <AccordionContent className="pt-1">
                          <ul className="list-disc list-inside text-sm text-green-600 space-y-1 pl-2">
                            <li>Quick Setup</li>
                            <li>Intelligent Course Discovery</li>
                            <li>Automated Schedule Planning</li>
                            <li>Easy Optimization & Confirmation</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
                <ZoomableImage src="/Elanable-uploads/camu-planner-design.png" alt="CAMU Planner - Ideation and Wireframes" caption="Early wireframes and user flow diagrams for the new planning journey." svgPlaceholder={true} />
                <Accordion type="single" collapsible className="w-full space-y-2 reveal my-6 xs:my-8">
                  <AccordionItem value="item-camu-elan-thinking-ideation">
                    <AccordionTrigger className={`text-base xs:text-lg font-medium text-[${primaryColor}] hover:text-[${primaryColor}]/80`}>Elan's Thinking: Balancing User Needs & Technical Feasibility</AccordionTrigger>
                    <AccordionContent className="pt-2">
                      <blockquote className={`border-l-4 border-[${primaryColor}]/50 pl-3 xs:pl-4 sm:pl-6 italic text-foreground/80 bg-white p-3 xs:p-4 rounded-r-lg shadow-sm`}>
                        <p>"The challenge was to simplify a complex, multi-variable problem. We constantly asked: 'How can we make this smarter for the student?' This involved balancing user desires with what was technically feasible for our AI engine."</p>
                      </blockquote>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                 <p className="text-base xs:text-lg text-foreground/90">
                  Design sprints were focused on key areas like Information Architecture (IA), the core scheduling Algorithm's UX, and ensuring a robust Mobile Experience.
                </p>
              </div>

              {/* Key UX Innovations & Iterations Subsection */}
              <div>
                <h3 className="text-xl xs:text-2xl font-semibold mb-3" style={{ color: primaryColor }}>
                  3. Key UX Innovations & Iterations (Testing & Iteration)
                </h3>
                <p className="text-base xs:text-lg text-foreground/90 mb-4">
                  Through iterative design and testing, we developed several key UX innovations:
                </p>
                <Accordion type="single" collapsible className="w-full space-y-2 reveal">
                  <AccordionItem value="item-camu-ux-innovations">
                    <AccordionTrigger className={`text-base xs:text-lg font-medium text-[${primaryColor}] hover:text-[${primaryColor}]/80`}>Explore Key UX Innovations</AccordionTrigger>
                    <AccordionContent className="pt-2">
                      <ul className="list-none space-y-6">
                        <li className="p-4 border border-border rounded-md shadow-sm bg-white">
                          <h4 className="font-semibold text-lg mb-1" style={{color: primaryColor}}>Smart Course Discovery</h4>
                          <p className="text-sm text-foreground/80 mb-1">Natural language input for course search (e.g., "intro marketing classes on Tuesdays"), contextual filters based on major/minor, visual mapping of degree requirements, and instant prerequisite validation.</p>
                          <p className="text-sm font-medium text-green-600">Impact: 70% faster course discovery compared to old systems.</p>
                        </li>
                        <li className="p-4 border border-border rounded-md shadow-sm bg-white">
                          <h4 className="font-semibold text-lg mb-1" style={{color: primaryColor}}>Conflict-Free Schedule Generation</h4>
                          <p className="text-sm text-foreground/80 mb-1">One-click generation of multiple optimized, conflict-free schedule options. Visual calendar view for easy understanding and side-by-side comparison of alternatives.</p>
                          <p className="text-sm font-medium text-green-600">Impact: 99.9% accuracy in generating valid schedules, drastically reducing errors.</p>
                        </li>
                        <li className="p-4 border border-border rounded-md shadow-sm bg-white">
                          <h4 className="font-semibold text-lg mb-1" style={{color: primaryColor}}>Mobile-First Calendar Interface</h4>
                          <p className="text-sm text-foreground/80 mb-1">A fully responsive design ensuring students could plan effectively on any device, with a touch-friendly calendar and intuitive navigation.</p>
                          <p className="text-sm font-medium text-green-600">Impact: 40% of all planning sessions occurred on mobile devices post-launch.</p>
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
            <section className={`mb-12 xs:mb-16 reveal px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-gradient-to-br from-[${secondaryColor}]/10 to-[${secondaryColor}]/5 shadow-lg border border-[${secondaryColor}]/20`}>
              <h2 className="text-2xl xs:text-3xl font-semibold mb-4 xs:mb-6" style={{ color: secondaryColor }}>
                Measurable Success: Transforming the Student Experience
              </h2>
              <p className="text-base xs:text-lg text-foreground/90 mb-6 xs:mb-8">
                The CAMU Course Compass Planner delivered significant, quantifiable improvements to the student academic planning experience and provided substantial value to the institution.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {[
                  { label: "Time to Plan Courses", before: "4.2 hours", after: "45 minutes", improvement: "82% Reduction", color: primaryColor },
                  { label: "Scheduling Conflicts", before: "42% students", after: "2% students", improvement: "95% Reduction", color: primaryColor },
                  { label: "Task Completion Rate", before: "65%", after: "90%", improvement: "38% Increase", color: primaryColor },
                  { label: "User Satisfaction (NPS)", before: "23", after: "72", improvement: "+49 points", color: primaryColor },
                  { label: "Mobile Usage (Planning)", before: "15%", after: "40%", improvement: "167% Increase", color: primaryColor },
                  { label: "Advisor Workload", before: "High", after: "40% Reduction", improvement: "Efficiency Gain", color: secondaryColor },
                  { label: "Est. Annual Business Value", before: "", after: "$2.6M", improvement: "ROI in 4.9 months", color: secondaryColor },
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
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </SectionReveal>

          {/* Learnings/Reflections Section */}
          <SectionReveal>
            <section className={`mb-12 xs:mb-16 reveal px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-gradient-to-br from-[${primaryColor}]/10 to-[${primaryColor}]/5 shadow-lg border border-[${primaryColor}]/20`}>
              <h2 className="text-2xl xs:text-3xl font-semibold mb-4 xs:mb-6" style={{ color: primaryColor }}>
                Learnings, Principles & Future Impact
              </h2>
              <p className="text-base xs:text-lg text-foreground/90 mb-4">
                The CAMU Course Compass Planner project was a transformative initiative, not just for the student experience but also in terms of the insights gained throughout its lifecycle.
              </p>
              <Accordion type="single" collapsible className="w-full space-y-4 reveal mb-6">
                <AccordionItem value="item-camu-lessons-learned">
                  <AccordionTrigger className={`text-base xs:text-lg font-medium text-[${primaryColor}] hover:text-[${primaryColor}]/80`}>View Key Lessons Learned</AccordionTrigger>
                  <AccordionContent className="pt-2">
                    <ul className="list-disc list-inside text-base xs:text-lg text-foreground/80 space-y-1 pl-2">
                      <li>User Research is Paramount: Deep ethnographic research and continuous user touchpoints were critical to understanding true needs vs. stated desires.</li>
                      <li>Iterative Testing Pays Off: Regular usability testing with tangible prototypes allowed for early course correction and validation of design choices.</li>
                      <li>Cross-Functional Collaboration is Key: Tight alignment between UX, Product, and Engineering from day one ensured we built the *right* product *right*.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-camu-design-principles">
                  <AccordionTrigger className={`text-base xs:text-lg font-medium text-[${primaryColor}] hover:text-[${primaryColor}]/80`}>View Key Design Principles Applied</AccordionTrigger>
                  <AccordionContent className="pt-2">
                    <ul className="list-disc list-inside text-base xs:text-lg text-foreground/80 space-y-1 pl-2">
                      <li>Progressive Disclosure: Revealing complexity gradually to avoid overwhelming users.</li>
                      <li>Intelligent Defaults: Providing smart suggestions based on user data and common patterns.</li>
                      <li>Real-Time Feedback: Instant validation and conflict notifications to guide users.</li>
                      <li>Mobile-First Design: Prioritizing the mobile experience ensured accessibility and convenience.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type="single" collapsible className="w-full space-y-2 reveal my-6 xs:my-8">
                <AccordionItem value="item-camu-elan-thinking-learnings">
                  <AccordionTrigger className={`text-base xs:text-lg font-medium text-[${primaryColor}] hover:text-[${primaryColor}]/80`}>Elan's Thinking: The Driving Force</AccordionTrigger>
                  <AccordionContent className="pt-2">
                    <blockquote className={`border-l-4 border-[${primaryColor}]/50 pl-3 xs:pl-4 sm:pl-6 italic text-foreground/80 bg-white p-3 xs:p-4 rounded-r-lg shadow-sm`}>
                      <p>"The driving force was to transform a universally frustrating student experience into something empowering and efficient. Seeing the direct impact on students' lives and the institution's operational efficiency was incredibly rewarding."</p>
                    </blockquote>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <p className="text-base xs:text-lg text-foreground/90">
                This project not only significantly improved the student course planning journey but also delivered substantial business value through increased efficiency and student retention. It laid the groundwork for future AI-driven student support tools at CAMU.
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
