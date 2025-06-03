
import { useEffect } from 'react';
import Header from "../components/layout/Header.tsx";
import Footer from "../components/layout/Footer.tsx";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "../components/ui/badge.tsx";
// import ImageCarousel from "../components/ui/ImageCarousel.tsx"; // Replaced with BigImageCarousel
import CSSCarousel from "../components/ui/CSSCarousel.tsx";
import ZoomableImage from "../components/ui/ZoomableImage.tsx";
import SectionReveal from '../components/SectionReveal.tsx';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/components/ui/accordion";



const CaseStudyStudentPlanner = () => {
  useEffect(() => {
    document.title = "Case Study: Student Planner - Elanthamilan - UX Designer";
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Subtle mesh gradient background for case study */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(circle at 20% 20%, rgba(22, 50, 90, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 80% 25%, rgba(248, 244, 242, 0.12) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(22, 50, 90, 0.06) 0%, transparent 50%),
              radial-gradient(circle at 90% 90%, rgba(248, 244, 242, 0.10) 0%, transparent 50%),
              linear-gradient(135deg, rgba(22, 50, 90, 0.04) 0%, rgba(255, 255, 255, 0.9) 50%, rgba(248, 244, 242, 0.08) 100%)
            `
          }}
        />
        {/* Additional mesh layer for depth */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            background: `
              conic-gradient(from 30deg at 30% 30%, rgba(22, 50, 90, 0.04), rgba(248, 244, 242, 0.06), rgba(22, 50, 90, 0.03), rgba(248, 244, 242, 0.05)),
              conic-gradient(from 210deg at 70% 70%, rgba(248, 244, 242, 0.04), rgba(22, 50, 90, 0.02), rgba(248, 244, 242, 0.06), rgba(22, 50, 90, 0.03))
            `
          }}
        />
      </div>
      <Header />

      {/* Adjusted page container padding: px-2 xs:px-4 sm:px-6, py-8 xs:py-12 md:py-16 */}
      <main id="main-content" className="flex-grow container mx-auto px-2 xs:px-4 sm:px-6 py-8 xs:py-12 md:py-16">
        <Link to="/" className="inline-flex items-center text-[#16325A] hover:text-[#16325A]/80 transition-colors mb-6 xs:mb-8 text-sm font-medium bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm border border-[#16325A]/20"> {/* Adjusted margin */}
          <ArrowLeft size={16} className="mr-1.5" />
          <span>Back to Home</span>
        </Link>

        <article className="max-w-4xl mx-auto space-y-12">
           {/* Hero Section - Enhanced with better visual hierarchy */}
          <SectionReveal>
            <div className="reveal">
              {/* Meta badges and info */}
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <Badge className="bg-[#16325A] text-white px-3 py-1.5 text-sm font-medium rounded-md shadow-sm border border-[#16325A]">
                  Case Study
                </Badge>
                <Badge className="bg-[#177863]/15 text-[#177863] border-[#177863]/30 px-3 py-1.5 text-sm font-medium rounded-md border">
                  AI Integration
                </Badge>
                <Badge className="bg-[#F8F4F2] text-[#16325A] border-[#16325A]/25 px-3 py-1.5 text-sm font-medium rounded-md border">
                  EdTech
                </Badge>
                <span className="text-sm text-foreground/70 ml-auto">Published May 2025</span>
              </div>

              {/* Main title with enhanced typography */}
              <h1 className="text-4xl xs:text-5xl sm:text-6xl font-bold mb-6 text-[#16325A] dark:text-[#16325A] leading-tight font-heading">
                AI Course Planner: Chaos to Clarity for Students
              </h1>

              {/* Subtitle with better contrast */}
              <p className="text-xl xs:text-2xl text-foreground/80 mb-8 leading-relaxed font-medium">
                Led the UX for an AI-powered Student Course Planner, slashing scheduling frustrations and empowering students to build academic plans that fit their lives.
              </p>

              {/* Key metrics in a clean grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 p-6 bg-gradient-to-br from-[#16325A]/8 to-[#177863]/8 rounded-2xl border border-[#16325A]/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-secondary mb-1">Staff UX Lead</div>
                  <div className="text-sm text-foreground/70 uppercase tracking-wider">My Role</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-primary mb-1">9 Months</div>
                  <div className="text-sm text-foreground/70 uppercase tracking-wider">Timeline</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-tertiary mb-1">AI-Driven Personalization</div>
                  <div className="text-sm text-foreground/70 uppercase tracking-wider">Key Focus</div>
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* Hero Image Section */}
          <SectionReveal>
            <div className="reveal w-full bg-card rounded-3xl overflow-hidden shadow-xl border border-brand-secondary/10">
              <CSSCarousel
                images={[
                  { src: "/Elanable-uploads/AI-Course-Planner-Dashboard.png", alt: "Student Course Planner AI Advisor Interface" },
                  { src: "/Elanable-uploads/Geninfy.jpg", alt: "AI Recommendation Engine" },
                  { svgPlaceholder: true, alt: "Calendar Visualization System" }
                ]}
                carouselLabel="Student Planner Case Study Images"
              />
            </div>
          </SectionReveal>

               {/* New Storytelling Structure Starts Here */}
            {/* Standard sections below hero image will retain their original padding and styling */}
          <SectionReveal>
            {/* Responsive padding: px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8. Adjusted mb. */}
            <section className="mb-12 xs:mb-16 reveal px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-gradient-to-br from-[#16325A]/6 to-[#16325A]/3 shadow-lg border border-[#16325A]/20">
               {/* Adaptive Typography for H2: text-2xl xs:text-3xl sm:text-4xl. Adjusted mb. */}
              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-semibold mb-4 xs:mb-6 text-[#16325A] dark:text-[#16325A] font-heading reveal text-center">The Challenge: Overcoming Student Scheduling Overwhelm</h2>
              <p className="text-foreground leading-relaxed text-base xs:text-lg mb-3 xs:mb-4 reveal">
                <strong className="font-medium text-foreground">Project Name:</strong> Student Course Planner Redesign (AI Advisor Integration) (Shipped: May 2025).
              </p>
              <p className="text-foreground leading-relaxed text-base xs:text-lg mb-3 xs:mb-4 reveal">
                The existing Student Course Planner was outdated, causing significant frustration. Students like Priya, a part-time undergrad juggling work, found it a major bottleneck: "I spend hours cross-referencing courses, and I still end up with conflicts. I just want something that fits my life!"
              </p>
              <p className="text-foreground leading-relaxed text-base xs:text-lg mb-3 xs:mb-4 reveal">
                The planner overwhelmed students with manual conflict checks, poor visualization, and a disjointed registration flow, leading to high stress and numerous support tickets.
              </p>
              <div className="text-foreground text-base xs:text-lg leading-relaxed space-y-2.5 xs:space-y-3 reveal">
                <p className="reveal"><strong className="font-medium text-foreground">Business Goals:</strong></p>
                <ul className="list-disc pl-4 xs:pl-5 space-y-1 xs:space-y-1.5 reveal"> {/* Adjusted padding and spacing */}
                  <li className="reveal">Cut scheduling bottlenecks by 60%.</li>
                  <li className="reveal">Boost schedule-to-cart conversions by 30%.</li>
                  <li className="reveal">Drive 40% adoption of the new AI recommendation feature.</li>
                </ul>
                <p className="mt-2.5 xs:mt-3 reveal"><strong className="font-medium text-foreground">User Pain Points (Accordion Content for "View Detailed Pain Points"):</strong></p>
                <ul className="list-disc pl-4 xs:pl-5 space-y-1 xs:space-y-1.5 reveal">
                  <li className="reveal"><strong className="font-medium text-foreground">Manual Conflict Checks:</strong> Tedious and error-prone.</li>
                  <li className="reveal"><strong className="font-medium text-foreground">Cognitive Overload:</strong> Difficulty managing personal constraints (work, time zones).</li>
                  <li className="reveal"><strong className="font-medium text-foreground">Poor Visualization:</strong> No intuitive way to view schedules or busy times.</li>
                  <li className="reveal"><strong className="font-medium text-foreground">Disconnected Flow:</strong> Clunky handoff between planning and registration.</li>
                </ul>
                <p className="mt-2.5 xs:mt-3 reveal">
                  Our mission: Modernize the tool with an AI Advisor for personalized, controllable schedules that adapt to students' lives.
                </p>
              </div>
              {/* Responsive padding and margin for blockquote */}
              <Accordion type="single" collapsible className="w-full space-y-2 reveal my-6 xs:my-8">
                <AccordionItem value="item-elan-thinking-core-problem-sp">
                  <AccordionTrigger className="text-base xs:text-lg font-medium text-brand-secondary hover:text-brand-secondary/80">Insight: Identifying the Core Problem</AccordionTrigger>
                  <AccordionContent className="pt-2">
                    <blockquote className="border-l-4 border-brand-secondary/50 pl-3 xs:pl-4 sm:pl-6 italic text-foreground/80 bg-white p-3 xs:p-4 rounded-r-lg shadow-sm">
                      <p className="text-foreground text-sm xs:text-base">Priya's frustration highlighted a broken experience, not just a flawed tool. Manual checks wasted hours; poor visualization hindered understanding; disconnected steps created friction. The core problem: the tool didn't adapt to students' complex lives. My focus became: how do we make the system bend to them?</p>
                    </blockquote>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>
          </SectionReveal>

          <SectionReveal>
            {/* Responsive padding and mb. */}
            <section className="mb-12 xs:mb-16 reveal px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-gradient-to-br from-[#177863]/6 to-[#177863]/3 shadow-lg border border-[#177863]/20">
              {/* Adaptive Typography for H2. Adjusted mb. */}
              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-semibold mb-4 xs:mb-6 text-[#177863] dark:text-[#177863] font-heading reveal text-center">My Role: Staff UX Lead & Strategist</h2>
              <p className="text-foreground leading-relaxed text-base xs:text-lg mb-3 xs:mb-4 reveal">
                As Staff UX Designer (Lead), I led the user research, UX strategy for AI integration, and the complete interaction and interface design to create a personalized and intuitive planner. I collaborated closely with product and engineering teams to bring this vision to life.
              </p>
              <Accordion type="single" collapsible className="w-full space-y-2 reveal">
                <AccordionItem value="item-responsibilities-sp">
                  <AccordionTrigger className="text-base xs:text-lg font-medium text-foreground hover:text-brand-primary">Key Contributions & Responsibilities</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-4 xs:pl-5 text-foreground text-base xs:text-lg leading-relaxed space-y-1 xs:space-y-1.5 pt-2">
                      <li className="reveal">Led user research (focus groups, surveys, interviews) to uncover core needs.</li>
                      <li className="reveal">Developed key personas (e.g., 'Priya') and mapped critical user journeys.</li>
                      <li className="reveal">Defined UX strategy for AI-driven personalization, ensuring user control.</li>
                      <li className="reveal">Drove interaction design from lo-fi wireframes to hi-fi prototypes.</li>
                      <li className="reveal">Designed a user interface focused on clear visualization and usability.</li>
                      <li className="reveal">Conducted and analyzed usability tests, iterating designs based on findings.</li>
                      <li className="reveal">Collaborating with product management and engineering teams.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>
          </SectionReveal>

            {/* Responsive padding and mb. */}
          <SectionReveal>
            <section className="mb-12 xs:mb-16 reveal px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-gradient-to-br from-[#F8F4F2]/40 to-[#F8F4F2]/60 shadow-lg border border-[#177863]/15">
               {/* Adaptive Typography for H2. Adjusted mb. */}
              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-semibold mb-4 xs:mb-6 text-[#177863] dark:text-[#177863] font-heading reveal text-center">Design Process: Empathy, AI, and Iteration</h2>

              {/* Adaptive Typography for H3. Adjusted mb. */}
              <h3 className="text-xl xs:text-2xl sm:text-3xl font-semibold mb-3 xs:mb-4 text-[#16325A] dark:text-[#16325A] font-heading reveal text-center">Uncovering Student Needs (Discovery & Research)</h3>
              <p className="text-foreground leading-relaxed text-base xs:text-lg mb-3 xs:mb-4 reveal">
                Deep user research, including surveys and interviews, revealed that 75% of students felt overwhelmed and 60% craved a simpler planner. Critically, personas like 'Priya'—a part-time student needing to schedule around work (1-2 PM, Mon-Thu) and prioritize morning classes—highlighted that existing tools couldn't handle such nuanced, real-life constraints. This insight directly led to 'Advanced Constraint Input' becoming a cornerstone of our solution.
              </p>
              <Accordion type="single" collapsible className="w-full space-y-2 reveal my-4 xs:my-6">
                <AccordionItem value="item-pain-points-sp">
                  <AccordionTrigger className="text-base xs:text-lg font-medium text-brand-secondary hover:text-brand-secondary/80">View Detailed Pain Points</AccordionTrigger>
                  <AccordionContent className="pt-2">
                    <div className="border border-brand-secondary/30 rounded-lg p-3 xs:p-4 sm:p-6 bg-white shadow-sm">
                      <h4 className="text-lg xs:text-xl font-semibold mb-2 xs:mb-3 text-brand-secondary font-heading">Key Pain Points Highlighted:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 xs:gap-x-6 gap-y-2 xs:gap-y-3 text-foreground text-sm xs:text-base">
                        <div className="flex items-start"><div className="flex-shrink-0 w-4 h-4 xs:w-5 xs:h-5 text-brand-secondary mr-2 xs:mr-3 mt-0.5 xs:mt-1"><svg fill="currentColor" viewBox="0 0 20 20"> <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd"></path> </svg></div><div><strong className="font-medium text-foreground">Manual Conflict Checks:</strong> Tedious and error-prone.</div></div>
                        <div className="flex items-start"><div className="flex-shrink-0 w-4 h-4 xs:w-5 xs:h-5 text-brand-secondary mr-2 xs:mr-3 mt-0.5 xs:mt-1"><svg fill="currentColor" viewBox="0 0 20 20"> <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path> </svg></div><div><strong className="font-medium text-foreground">Cognitive Overload:</strong> Difficulty managing personal constraints (work, time zones).</div></div>
                        <div className="flex items-start"><div className="flex-shrink-0 w-4 h-4 xs:w-5 xs:h-5 text-brand-secondary mr-2 xs:mr-3 mt-0.5 xs:mt-1"><svg fill="currentColor" viewBox="0 0 20 20"> <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm4 9a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1zm0-4a1 1 0 011-1h4a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd"></path> </svg></div><div><strong className="font-medium text-foreground">Poor Visualization:</strong> No intuitive way to view schedules or busy times.</div></div>
                        <div className="flex items-start"><div className="flex-shrink-0 w-4 h-4 xs:w-5 xs:h-5 text-brand-secondary mr-2 xs:mr-3 mt-0.5 xs:mt-1"><svg fill="currentColor" viewBox="0 0 20 20"> <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clipRule="evenodd"></path> </svg></div><div><strong className="font-medium text-foreground">Disconnected Flow:</strong> Clunky handoff between planning and registration.</div></div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible className="w-full space-y-2 reveal my-6 xs:my-8">
                <AccordionItem value="item-elan-thinking-discovery-sp">
                  <AccordionTrigger className="text-base xs:text-lg font-medium text-brand-secondary hover:text-brand-secondary/80">Insight: Digging Deeper into User Needs</AccordionTrigger>
                  <AccordionContent className="pt-2">
                    <blockquote className="border-l-4 border-brand-secondary/50 pl-3 xs:pl-4 sm:pl-6 italic text-foreground/80 bg-white p-3 xs:p-4 rounded-r-lg shadow-sm">
                      <p className="text-foreground text-sm xs:text-base">Priya's story underscored that students weren't just battling a tool, but fitting education into complex lives. Data showed widespread overwhelm; stories revealed *why*—rigid systems. I sketched scenarios for diverse student needs (night shifts, family care, intensive labs). The system had to adapt to *them*.</p>
                    </blockquote>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
                 {/* Full-width carousel: Vertical padding py-4 xs:py-6. Adjusted my. */}
                 <div className="bg-accent-bg rounded-lg my-8 xs:my-12 shadow-lg reveal border border-brand-secondary/20">
                   <ZoomableImage src="/placeholder.svg" alt="User research insights summary showing key pain points and student quotes" caption="Key insights from student interviews and surveys that shaped our understanding." className="aspect-video" svgPlaceholder={true} />
              </div>

              {/* Adaptive Typography for H3. Adjusted margins. */}
              <h3 className="text-xl xs:text-2xl sm:text-3xl font-semibold mb-3 xs:mb-4 mt-8 xs:mt-12 text-[#177863] dark:text-[#177863] font-heading reveal text-center">Solution Principles & Early Designs (Ideation & Design)</h3>
              <p className="text-foreground leading-relaxed text-base xs:text-lg mb-3 xs:mb-4 reveal">
                Reimagined the planner around three core principles: <strong className="font-medium text-foreground">Flexibility</strong> (nuanced constraints), <strong className="font-medium text-foreground">Visualization</strong> (clear calendars), and <strong className="font-medium text-foreground">AI Integration</strong> (personalized, controllable suggestions). Early lo-fi wireframes focused on the flow: input constraints, view AI suggestions, customize, register. The AI Advisor was key, but designed to be transparent, not a 'black box,' ensuring students understood suggestions and could easily override them.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xs:gap-6 my-6 xs:my-8 reveal"> {/* Adjusted gap and my */}
                 {/* Responsive padding and typography for principle boxes */}
                <div className="border border-brand-primary/30 rounded-lg p-3 xs:p-4 sm:p-5 reveal bg-white shadow-sm"><h4 className="font-heading text-base xs:text-lg mb-1 xs:mb-1.5 text-brand-primary font-semibold">Flexibility</h4><p className="text-foreground text-xs xs:text-sm leading-relaxed">Allow students to input nuanced constraints, like work hours and preferred times.</p></div>
                <div className="border border-brand-primary/30 rounded-lg p-3 xs:p-4 sm:p-5 reveal bg-white shadow-sm"><h4 className="font-heading text-base xs:text-lg mb-1 xs:mb-1.5 text-brand-primary font-semibold">Visualization</h4><p className="text-foreground text-xs xs:text-sm leading-relaxed">Offer a clear, intuitive calendar view that highlights conflicts and available options.</p></div>
                <div className="border border-brand-primary/30 rounded-lg p-3 xs:p-4 sm:p-5 reveal bg-white shadow-sm"><h4 className="font-heading text-base xs:text-lg mb-1 xs:mb-1.5 text-brand-primary font-semibold">AI Integration</h4><p className="text-foreground text-xs xs:text-sm leading-relaxed">Use AI to suggest personalized schedules while keeping students in control.</p></div>
              </div>
              <Accordion type="single" collapsible className="w-full space-y-2 reveal my-6 xs:my-8">
                <AccordionItem value="item-elan-thinking-ideation-sp">
                  <AccordionTrigger className="text-base xs:text-lg font-medium text-brand-primary hover:text-brand-primary/80">Design Rationale: Balancing AI and User Control</AccordionTrigger>
                  <AccordionContent className="pt-2">
                    <blockquote className="border-l-4 border-brand-primary/50 pl-3 xs:pl-4 sm:pl-6 italic text-foreground/80 bg-white p-3 xs:p-4 rounded-r-lg shadow-sm">
                      <p className="text-foreground text-sm xs:text-base">AI was crucial for personalization, but not as a 'magic box.' Students needed to understand AI rationale (e.g., 'This schedule avoids work hours') and retain control. Sketches focused on transparent AI suggestions and easy customization, empowering students.</p>
                    </blockquote>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
                 {/* Full-width carousel: Vertical padding py-4 xs:py-6. Adjusted my. */}
                 <div className="bg-accent-bg rounded-lg my-8 xs:my-12 shadow-lg reveal border border-brand-primary/20">
                   <ZoomableImage src="/placeholder.svg" alt="Early wireframes and sketches of the AI course planner interface" caption="Initial concepts exploring constraint input and AI-driven schedule suggestions." className="aspect-video" svgPlaceholder={true} />
              </div>

              {/* Adaptive Typography for H3. Adjusted margins. */}
              <h3 className="text-xl xs:text-2xl sm:text-3xl font-semibold mb-3 xs:mb-4 mt-8 xs:mt-12 text-[#16325A] dark:text-[#16325A] font-heading reveal text-center">Refining with User Feedback (Testing & Iteration)</h3>
              <p className="text-foreground leading-relaxed text-base xs:text-lg mb-3 xs:mb-4 reveal">
                Progressed to high-fidelity prototypes, testing calendar views and AI interfaces. Usability testing was vital: students loved AI suggestions but wanted more granular calendar control. This feedback led to adding filters for course types/instructors for finer schedule tuning.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xs:gap-8 my-6 xs:my-8 reveal"> {/* Adjusted gap and my */}
                 {/* Responsive padding and typography for iteration boxes */}
                <div className="border border-brand-tertiary/30 rounded-lg p-3 xs:p-4 sm:p-6 reveal bg-white shadow-sm">
                  <h4 className="font-heading text-base xs:text-lg mb-1 xs:mb-1.5 text-brand-tertiary font-semibold">Wireframes</h4>
                  <p className="text-foreground text-xs xs:text-sm leading-relaxed">Focused on the core flow: inputting constraints, viewing suggestions, and registering for courses.</p>
                </div>
                <div className="border border-brand-tertiary/30 rounded-lg p-3 xs:p-4 sm:p-6 reveal bg-white shadow-sm">
                  <h4 className="font-heading text-base xs:text-lg mb-1 xs:mb-1.5 text-brand-tertiary font-semibold">Prototypes</h4>
                  <p className="text-foreground text-xs xs:text-sm leading-relaxed">Tested different calendar views and AI suggestion interfaces, gathering critical user feedback.</p>
                </div>
              </div>
              <Accordion type="single" collapsible className="w-full space-y-2 reveal my-6 xs:my-8">
                <AccordionItem value="item-elan-thinking-iteration-sp">
                  <AccordionTrigger className="text-base xs:text-lg font-medium text-brand-tertiary hover:text-brand-tertiary/80">Reflection: Iterating Based on User Feedback</AccordionTrigger>
                  <AccordionContent className="pt-2">
                    <blockquote className="border-l-4 border-brand-tertiary/50 pl-3 xs:pl-4 sm:pl-6 italic text-foreground/80 bg-white p-3 xs:p-4 rounded-r-lg shadow-sm">
                      <p className="text-foreground text-sm xs:text-base">Usability testing was essential. While AI suggestions were popular, users demanded better calendar control (filters, zoom). This feedback was a humbling reminder: AI is powerful, but can't replace a solid foundational UX.</p>
                    </blockquote>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
                 {/* Full-width carousel: Vertical padding py-4 xs:py-6. Adjusted my. */}
                 <div className="bg-accent-bg rounded-lg my-8 xs:my-12 shadow-lg reveal border border-brand-tertiary/20">
                   <ZoomableImage src="/placeholder.svg" alt="High-fidelity prototype of the student planner calendar view and AI suggestions" caption="High-fidelity prototypes used in usability testing to refine interactions and visual design." className="aspect-video" svgPlaceholder={true} />
              </div>
            </section>
          </SectionReveal>

          <SectionReveal>
             {/* The Solution Section - Content part with padding, Carousel container full width */}
            {/* Responsive padding and mb. */}
            <section className="mb-12 xs:mb-16 reveal rounded-lg bg-gradient-to-br from-[#16325A]/6 to-[#16325A]/10 shadow-lg border border-[#16325A]/25">
              {/* Responsive padding for text content container */}
              <div className="px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8">
                {/* Adaptive Typography for H2. Adjusted mb. */}
                <h2 className="text-2xl xs:text-3xl sm:text-4xl font-semibold mb-4 xs:mb-6 text-[#16325A] dark:text-[#16325A] font-heading reveal text-center">The Solution: An AI-Powered, Flexible Course Planner</h2>
                <p className="text-foreground leading-relaxed text-base xs:text-lg mb-4 xs:mb-6 reveal">
                  The redesigned Student Course Planner delivered a flexible, intuitive, and AI-assisted scheduling experience.
                </p>
                <Accordion type="single" collapsible className="w-full space-y-2 reveal mb-6 xs:mb-8">
                  <AccordionItem value="item-key-features-sp">
                    <AccordionTrigger className="text-base xs:text-lg font-medium text-foreground hover:text-brand-secondary">Key Features Delivered</AccordionTrigger>
                    <AccordionContent className="pt-2">
                      <ul className="list-disc pl-4 xs:pl-5 text-foreground text-base xs:text-lg leading-relaxed space-y-1.5 xs:space-y-2">
                        <li><strong className="font-medium text-foreground">Advanced Constraint Input:</strong> Easily define work hours, preferred class times, and personal commitments.</li>
                        <li><strong className="font-medium text-foreground">AI-Powered Schedule Suggestions:</strong> AI Advisor generates multiple optimized schedules based on preferences, requirements, and availability, with clear rationale.</li>
                        <li><strong className="font-medium text-foreground">Interactive Calendar View:</strong> Visually manage potential schedules, identify conflicts, and directly customize.</li>
                        <li><strong className="font-medium text-foreground">Smart Filtering & Sorting:</strong> Filter courses (type, instructor, department) and sort schedules by various criteria.</li>
                        <li><strong className="font-medium text-foreground">Seamless Registration:</strong> Clear, direct path from finalized schedule to course registration.</li>
                        <li><strong className="font-medium text-foreground">Full User Control:</strong> Students can easily modify AI suggestions or build schedules manually.</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              {/* Full-width carousel: Vertical padding py-4 xs:py-6. Adjusted my (removed from here, applied to section). */}
              <div className="bg-accent-bg py-4 xs:py-6 rounded-b-lg shadow-inner reveal border-t border-brand-secondary/20">
                 <ZoomableImage src="/Elanable-uploads/AI-Course-Planner-Dashboard.png" alt="Final UI of the AI Student Course Planner showing a generated schedule" caption="Final interface of the AI Course Planner, showcasing a generated schedule with constraints applied." className="aspect-video" />
              </div>
            </section>
          </SectionReveal>

          <SectionReveal>
            {/* Responsive padding and mb. */}
            <section className="mb-12 xs:mb-16 reveal px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-gradient-to-br from-[#177863]/6 to-[#177863]/10 shadow-lg border border-[#177863]/25">
              {/* Adaptive Typography for H2. Adjusted mb. */}
              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-semibold mb-4 xs:mb-6 text-[#177863] dark:text-[#177863] font-heading reveal text-center">Impact: Towards Smarter Student Scheduling</h2>
              <p className="text-foreground leading-relaxed text-base xs:text-lg mb-4 xs:mb-6 reveal">
                The project targeted significant improvements in efficiency and user satisfaction, with strong positive indicators from usability testing.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xs:gap-6 mb-4 xs:mb-6 reveal"> {/* Adjusted gap and mb */}
                 {/* Responsive padding for stat boxes */}
                <div className="border border-brand-primary/30 bg-white p-3 xs:p-4 sm:p-6 rounded-lg text-center reveal shadow-sm">
                  {/* Adaptive Typography for stats. Adjusted mb. */}
                  <p className="text-2xl xs:text-3xl sm:text-4xl font-semibold text-brand-primary mb-0.5 xs:mb-1">60%</p>
                  <p className="text-foreground text-xs xs:text-sm leading-relaxed">Targeted Reduction in Scheduling Bottlenecks</p>
                </div>
                <div className="border border-brand-primary/30 bg-white p-3 xs:p-4 sm:p-6 rounded-lg text-center reveal shadow-sm">
                  <p className="text-2xl xs:text-3xl sm:text-4xl font-semibold text-brand-primary mb-0.5 xs:mb-1">30%</p>
                  <p className="text-foreground text-xs xs:text-sm leading-relaxed">Targeted Increase in Schedule-to-Cart Conversions</p>
                </div>
                <div className="border border-brand-primary/30 bg-white p-3 xs:p-4 sm:p-6 rounded-lg text-center reveal shadow-sm">
                  <p className="text-2xl xs:text-3xl sm:text-4xl font-semibold text-brand-primary mb-0.5 xs:mb-1">40%</p>
                  <p className="text-foreground text-xs xs:text-sm leading-relaxed">Targeted Adoption of AI Recommendations</p>
                </div>
              </div>
              <p className="text-foreground leading-relaxed text-base xs:text-lg reveal">
                Qualitative feedback from usability testing was highly positive, with students praising the new design's intuitiveness, reduced overwhelm, and ability to handle complex scheduling needs.
              </p>
            </section>
          </SectionReveal>

          <SectionReveal>
            {/* Responsive padding and mb. */}
            <section className="mb-12 xs:mb-16 reveal px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-gradient-to-br from-[#F8F4F2]/50 to-[#F8F4F2]/70 shadow-lg border border-[#177863]/15">
              {/* Adaptive Typography for H2. Adjusted mb. */}
              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-semibold mb-4 xs:mb-6 text-[#177863] dark:text-[#177863] font-heading reveal text-center">Key Learnings & Design Philosophy</h2>
              <p className="text-foreground leading-relaxed text-base xs:text-lg mb-3 xs:mb-4 reveal">
                This redesign underscored how balancing advanced AI with core user needs for control and clarity leads to successful adoption.
              </p>
              <Accordion type="single" collapsible className="w-full space-y-2 reveal my-6 xs:my-8">
                <AccordionItem value="item-detailed-learnings-sp">
                  <AccordionTrigger className="text-base xs:text-lg font-medium text-brand-tertiary hover:text-brand-tertiary/80">Core Design Learnings</AccordionTrigger>
                  <AccordionContent className="pt-2">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xs:gap-6">
                      <div className="border border-brand-tertiary/30 rounded-lg p-3 xs:p-4 sm:p-6 bg-white shadow-sm">
                        <h3 className="font-heading text-base xs:text-lg mb-1 xs:mb-1.5 text-brand-tertiary font-semibold">Empathy is Key:</h3>
                        <p className="text-foreground text-xs xs:text-sm leading-relaxed">Deeply understanding user frustrations (like Priya's) is vital for meaningful solutions.</p>
                      </div>
                      <div className="border border-brand-tertiary/30 rounded-lg p-3 xs:p-4 sm:p-6 bg-white shadow-sm">
                        <h3 className="font-heading text-base xs:text-lg mb-1 xs:mb-1.5 text-brand-tertiary font-semibold">Iterate Relentlessly:</h3>
                        <p className="text-foreground text-xs xs:text-sm leading-relaxed">User feedback from testing is crucial for refinement (e.g., enhancing calendar controls).</p>
                      </div>
                      <div className="border border-brand-tertiary/30 rounded-lg p-3 xs:p-4 sm:p-6 bg-white shadow-sm">
                        <h3 className="font-heading text-base xs:text-lg mb-1 xs:mb-1.5 text-brand-tertiary font-semibold">AI Augments, Not Replaces:</h3>
                        <p className="text-foreground text-xs xs:text-sm leading-relaxed">Use AI to empower and simplify, ensuring users remain in control and understand suggestions.</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <p className="text-foreground leading-relaxed text-base xs:text-lg mb-3 xs:mb-4 reveal">
                This project reinforced that core user-centered design principles—empathy, clarity, and iteration—are paramount, even with advanced technology.
              </p>
              <Accordion type="single" collapsible className="w-full space-y-2 reveal my-6 xs:my-8">
                <AccordionItem value="item-elan-thinking-bigger-picture-sp">
                  <AccordionTrigger className="text-base xs:text-lg font-medium text-brand-tertiary hover:text-brand-tertiary/80">Reflection: The Bigger Picture</AccordionTrigger>
                  <AccordionContent className="pt-2">
                    <blockquote className="border-l-4 border-brand-tertiary/50 pl-3 xs:pl-4 sm:pl-6 italic text-foreground/80 bg-white p-3 xs:p-4 rounded-r-lg shadow-sm">
                      <p className="text-foreground text-sm xs:text-base">This project showed UX design's potential to positively impact lives. Understanding struggles and creating solutions that ease them contributes to a better experience for everyone.</p>
                    </blockquote>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>
          </SectionReveal>

          {/* Continue Reading Section - Inspired by case study cards design */}
          <SectionReveal>
            <section className="mb-12 xs:mb-16 reveal">
              <div className="bg-gradient-to-br from-brand-secondary/12 to-brand-secondary/6 border-brand-secondary/20 shadow-brand-secondary/20 rounded-3xl overflow-hidden shadow-lg border-2 hover:shadow-xl transition-all duration-300 ease-in-out">
                <div className="px-6 py-8 md:px-8 md:py-10">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl xs:text-3xl sm:text-4xl font-bold font-heading text-[#16325A] dark:text-[#16325A] mb-3">
                      Continue Reading
                    </h3>
                    <p className="text-foreground/80 text-base xs:text-lg leading-relaxed">
                      Explore more case studies and design insights
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* Next Case Study Card - Fully clickable with improved styling */}
                    <Link
                      to="/case-study/campus-hiring"
                      className="group block bg-card dark:bg-card text-card-foreground bg-gradient-to-br from-[#177863]/5 to-[#177863]/10 border-[#177863]/20 dark:border-slate-700 rounded-3xl overflow-hidden transition-all duration-300 ease-in-out flex flex-col h-full shadow-xl hover:shadow-2xl border-2 border-b-4 border-b-[#177863] hover:scale-[1.02]"
                    >
                      <div className="flex items-start space-x-4 p-6 flex-grow">
                        <div className="flex-shrink-0 w-12 h-12 bg-[#177863]/15 dark:bg-[#177863]/25 rounded-xl flex items-center justify-center group-hover:bg-[#177863]/20 dark:group-hover:bg-[#177863]/30 transition-colors duration-200">
                          <span className="material-symbols-outlined text-2xl text-[#177863]">school</span>
                        </div>
                        <div className="flex-1 flex flex-col h-full">
                          <h4 className="font-semibold text-lg text-[#177863] dark:text-[#177863] mb-2 group-hover:text-[#16325A] dark:group-hover:text-[#16325A] transition-colors duration-200">
                            Redesigning Campus Recruitment: From 15 Steps to 2 Days
                          </h4>
                          <p className="text-foreground/70 dark:text-card-foreground/70 text-sm mb-4 leading-relaxed flex-grow">
                            Streamlining University-to-Industry Hiring Workflows
                          </p>
                          <div className="inline-flex items-center text-[#177863] dark:text-[#177863] group-hover:text-[#16325A] dark:group-hover:text-[#16325A] transition-colors duration-200 text-sm font-medium group-hover:translate-x-1 transform mt-auto">
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
                        className="inline-flex items-center text-foreground/50 hover:text-brand-secondary transition-colors duration-200 text-sm font-medium py-2 px-4 rounded-lg hover:bg-gray-50/50 dark:hover:bg-slate-800/30"
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

export default CaseStudyStudentPlanner;
