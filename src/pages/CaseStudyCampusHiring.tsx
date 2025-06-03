
import { useEffect } from 'react';
import Header from "../components/layout/Header.tsx";
import Footer from "../components/layout/Footer.tsx";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "../components/ui/badge.tsx";
import ZoomableImage from "../components/ui/ZoomableImage.tsx";
import CSSCarousel from "../components/ui/CSSCarousel.tsx";
import SectionReveal from '../components/SectionReveal.tsx';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion"; // Adjusted path

const CaseStudyCampusHiring = () => {
  useEffect(() => {
    document.title = "Case Study: Campus Hiring - Elanthamilan - UX Designer";
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Subtle mesh gradient background for case study */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(circle at 15% 25%, rgba(248, 244, 242, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 85% 15%, rgba(23, 120, 99, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 45% 75%, rgba(248, 244, 242, 0.12) 0%, transparent 50%),
              radial-gradient(circle at 95% 85%, rgba(23, 120, 99, 0.06) 0%, transparent 50%),
              linear-gradient(135deg, rgba(248, 244, 242, 0.08) 0%, rgba(255, 255, 255, 0.9) 50%, rgba(23, 120, 99, 0.04) 100%)
            `
          }}
        />
        {/* Additional mesh layer for depth */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            background: `
              conic-gradient(from 45deg at 25% 25%, rgba(248, 244, 242, 0.06), rgba(23, 120, 99, 0.03), rgba(248, 244, 242, 0.08), rgba(23, 120, 99, 0.04)),
              conic-gradient(from 225deg at 75% 75%, rgba(23, 120, 99, 0.03), rgba(248, 244, 242, 0.05), rgba(23, 120, 99, 0.02), rgba(248, 244, 242, 0.04))
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
                  UX Research
                </Badge>
                <span className="text-sm text-foreground/70 ml-auto">Published April 2025</span>
              </div>

              {/* Main title with enhanced typography */}
              <h1 className="text-4xl xs:text-5xl sm:text-6xl font-bold mb-6 text-[#177863] dark:text-[#177863] leading-tight font-heading">
                Streamlined Campus Hiring: 40% Faster
              </h1>

              {/* Subtitle with better contrast */}
              <p className="text-xl xs:text-2xl text-foreground/80 mb-8 leading-relaxed font-medium">
                Revamped Camu's recruitment app, transforming a complex process into an efficient platform for universities, recruiters, and students, driving significant revenue.
              </p>

              {/* Key metrics in a clean grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 p-6 bg-gradient-to-br from-[#177863]/8 to-[#16325A]/8 rounded-2xl border border-[#177863]/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#177863] mb-1">6 months</div>
                  <div className="text-sm text-foreground/70 uppercase tracking-wider">Timeline</div>
                  <div className="text-sm text-foreground/60">Jan - June 2024</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#16325A] mb-1">Lead UX</div>
                  <div className="text-sm text-foreground/70 uppercase tracking-wider">My Role</div>
                  <div className="text-sm text-foreground/60">Research, Design, Testing</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#177863] mb-1">$500K Revenue Uplift & 40% Faster Hiring</div>
                  <div className="text-sm text-foreground/70 uppercase tracking-wider">Impact</div>
                  <div className="text-sm text-foreground/60">Driving business growth & streamlining operations.</div>
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* Hero Image Section */}
          <SectionReveal>
            <div className="reveal w-full bg-card rounded-3xl overflow-hidden shadow-xl border border-brand-primary/10">
              <CSSCarousel
                images={[
                  { src: "/Elanable-uploads/Camu-Recruitment-Dashboard.png", alt: "Camu Campus Recruitment App Interface" },
                  { src: "/Elanable-uploads/Camu Campus Recruitment App.png", alt: "Camu Campus Recruitment App Interface" },
                  { svgPlaceholder: true, alt: "User Journey Mapping" }
                ]}
                carouselLabel="Campus Hiring Case Study Images"
              />
            </div>
          </SectionReveal>

            {/* REVISED Overview/Challenge START */}
            <SectionReveal>
              {/* Responsive padding: px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8. Adjusted mb. */}
              <section className="mb-12 xs:mb-16 reveal px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-gradient-to-br from-[#177863]/6 to-[#177863]/3 shadow-lg border border-[#177863]/20">
                {/* Adaptive Typography for H2: text-2xl xs:text-3xl sm:text-4xl. Adjusted mb. */}
                <h2 className="text-2xl xs:text-3xl sm:text-4xl font-semibold mb-4 xs:mb-6 text-[#177863] font-heading reveal">The Challenge: Untangling Complex Campus Recruitment</h2>
                <p className="text-foreground leading-relaxed text-base xs:text-lg mb-3 xs:mb-4 reveal">
                  <strong className="font-medium text-foreground">Project Name:</strong> Camu Campus Recruitment App (Shipped: April 2025).
                </p>
                <p className="text-foreground leading-relaxed text-base xs:text-lg mb-3 xs:mb-4 reveal">
                  Camu's campus recruitment was bogged down by inefficiency, frustrating recruiters, students, and placement officers. The goal: Transform the SIS-based hiring model to boost engagement, improve placement rates, and unlock new revenue.
                </p>
                <div className="text-foreground text-base xs:text-lg leading-relaxed space-y-2.5 xs:space-y-3 reveal">
                  <p className="reveal"><strong className="font-medium text-foreground">User Pain Points Along Critical Paths:</strong></p>
                  <ul className="list-disc pl-4 xs:pl-5 space-y-1 xs:space-y-1.5 reveal"> {/* Adjusted padding and spacing */}
                    <li className="reveal"><strong className="font-medium text-foreground">Recruiter's Journey (Posting & Candidate Sourcing):</strong> Struggled with cumbersome job postings, manual data uploads, and poor candidate visibility, hindering efficient talent sourcing.</li>
                    <li className="reveal"><strong className="font-medium text-foreground">Student's Journey (Discovery & Application):</strong> Faced repetitive applications and often missed opportunities due to a disjointed job discovery process.</li>
                    <li className="reveal"><strong className="font-medium text-foreground">Placement Officer's Journey (Management & Analytics):</strong> Overwhelmed by manual approvals, scheduling via email/spreadsheets, and no analytics for effective oversight.</li>
                  </ul>
                  <p className="mt-2.5 xs:mt-3 reveal">
                    The clear need: A unified, user-friendly platform leveraging the SIS to streamline these critical journeys and create a cohesive hiring ecosystem.
                  </p>
                </div>
              </section>
            </SectionReveal>
            {/* REVISED Overview/Challenge END */}

          <SectionReveal>
             {/* Responsive padding and mb. */}
            <section className="mb-12 xs:mb-16 reveal px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-gradient-to-br from-[#16325A]/6 to-[#16325A]/3 shadow-lg border border-[#16325A]/20">
              {/* Adaptive Typography for H2. Adjusted mb. */}
              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-semibold mb-4 xs:mb-6 text-[#16325A] font-heading reveal">My Role & Responsibilities</h2>
              <p className="text-foreground leading-relaxed text-base xs:text-lg mb-3 xs:mb-4 reveal">
                As Lead Interaction Designer, I drove the UX strategy and design, collaborating with product and engineering teams to deliver a seamless user experience. This project involved collaboration with a dedicated team of product managers, engineers, and fellow designers.
              </p>
              <Accordion type="single" collapsible className="w-full space-y-2 reveal">
                <AccordionItem value="item-responsibilities">
                  <AccordionTrigger className="text-base xs:text-lg font-medium text-foreground hover:text-brand-secondary">Key Contributions & Responsibilities</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-4 xs:pl-5 text-foreground text-base xs:text-lg leading-relaxed space-y-1 xs:space-y-1.5 pt-2">
                      <li>Led user research (interviews, surveys) defining core user needs.</li>
                      <li>Developed data-driven personas and journey maps.</li>
                      <li>Designed intuitive interaction flows, wireframes, and prototypes.</li>
                      <li>Crafted the user interface focusing on clarity and efficiency.</li>
                      <li>Conducted usability testing and iterated designs based on feedback.</li>
                      <li>Ensured cross-functional collaboration with product managers and engineers.</li>
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
              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-semibold mb-4 xs:mb-6 text-[#177863] font-heading reveal">Design Process: From User Insights to Impactful Solution</h2>

              {/* Adaptive Typography for H3. Adjusted mb. */}
              <h3 className="text-xl xs:text-2xl sm:text-3xl font-semibold mb-3 xs:mb-4 text-brand-primary font-heading reveal">Understanding User Needs (Discovery & Research)</h3>
              <p className="text-foreground leading-relaxed text-base xs:text-lg mb-3 xs:mb-4 reveal">
                Began by deeply understanding the three core user groups—Recruiters, Placement Officers, and Students—through interviews and surveys. While needs varied, a common desire for simplicity and efficiency emerged.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xs:gap-6 mb-6 xs:mb-8 reveal"> {/* Adjusted gap and mb */}
                 {/* Responsive padding for info boxes: p-3 xs:p-4 sm:p-5 */}
                <div className="border border-brand-primary/30 rounded-lg p-3 xs:p-4 sm:p-5 reveal bg-white shadow-sm">
                  {/* Adaptive Typography for H4 (used as sub-sub-heading). Adjusted mb. */}
                  <h4 className="font-semibold text-lg xs:text-xl mb-1.5 xs:mb-2 text-brand-primary font-heading">Recruiters</h4>
                  <p className="text-foreground text-sm xs:text-base leading-relaxed">Needed quick job posting, candidate targeting, and easy application tracking.</p>
                </div>
                <div className="border border-brand-primary/30 rounded-lg p-3 xs:p-4 sm:p-5 reveal bg-white shadow-sm">
                  <h4 className="font-semibold text-lg xs:text-xl mb-1.5 xs:mb-2 text-brand-primary font-heading">Placement Officers</h4>
                  <p className="text-foreground text-sm xs:text-base leading-relaxed">Required centralized policy management, interview scheduling, and reporting.</p>
                </div>
                <div className="border border-brand-primary/30 rounded-lg p-3 xs:p-4 sm:p-5 reveal bg-white shadow-sm">
                  <h4 className="font-semibold text-lg xs:text-xl mb-1.5 xs:mb-2 text-brand-primary font-heading">Students</h4>
                  <p className="text-foreground text-sm xs:text-base leading-relaxed">Wanted intuitive job discovery, simple applications, and progress tracking.</p>
                </div>
              </div>
              <Accordion type="single" collapsible className="w-full space-y-2 reveal mt-4">
                <AccordionItem value="item-discovery-more">
                  <AccordionTrigger className="text-base xs:text-lg font-medium text-foreground hover:text-brand-primary">Key Research Insights</AccordionTrigger>
                  <AccordionContent className="pt-2">
                    <p className="text-foreground leading-relaxed text-base xs:text-lg">
                      Identified critical pain points and goals, forming the foundation for a user-centric design strategy. This research directly shaped the product roadmap.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              {/* Full width image container, adjust vertical margin */}
              <div className="w-full bg-accent-bg rounded-lg my-8 xs:my-12 shadow-lg reveal border border-brand-primary/20"> {/* Removed overflow-hidden */}
                <ZoomableImage
                  src="/Elanable-uploads/Camu.png"
                  alt="Collage of user personas and journey map sketches for campus hiring"
                  caption="User personas and journey maps developed during the discovery phase."
                  className="aspect-video"
                />
              </div>
              {/* End of Discovery & Research (Original Content) */}

              {/* REVISED Ideation & Design START */}
              {/* Adaptive Typography for H3. Adjusted margins. */}
              <h3 className="text-xl xs:text-2xl sm:text-3xl font-semibold mb-3 xs:mb-4 mt-8 xs:mt-12 text-brand-secondary font-heading reveal">Crafting Intuitive Workflows (Ideation & Design)</h3>
              <p className="text-foreground leading-relaxed text-base xs:text-lg mb-3 xs:mb-4 reveal">
                User research highlighted recruiters' frustration with lengthy, single-page forms. Based on this, we conceptualized and prototyped a multi-step job posting form for Recruiters, focusing on balancing clarity with efficiency. This structured approach, a direct response to user feedback and a shift from an initial single-page concept, cut form abandonment by 38% and improved data quality for students and placement officers.
              </p>
              <Accordion type="single" collapsible className="w-full space-y-2 reveal my-6 xs:my-8">
                <AccordionItem value="item-elan-thinking-ideation">
                  <AccordionTrigger className="text-base xs:text-lg font-medium text-brand-secondary hover:text-brand-secondary/80">Design Rationale: Systemic Thinking & User Advocacy</AccordionTrigger>
                  <AccordionContent className="pt-2">
                    <blockquote className="border-l-4 border-brand-secondary/50 pl-3 xs:pl-4 sm:pl-6 italic text-foreground/80 bg-white p-3 xs:p-4 rounded-r-lg shadow-sm">
                      <p className="mb-1.5 xs:mb-2 text-foreground text-sm xs:text-base">Initial 'Quick Post' concepts failed systemically by not integrating with Placement Officer approvals or providing student clarity. The multi-step form, though slightly longer for recruiters, vastly improved data quality, fueling AI matching and streamlining PO oversight—a win for the entire ecosystem. Advocating for this required demonstrating how deliberate recruiter input reduced downstream friction for all.</p>
                    </blockquote>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <p className="text-foreground leading-relaxed text-base xs:text-lg mb-3 xs:mb-4 reveal">
                This led to a four-step, AI-assisted job creation for recruiters, effortless SIS-integrated job discovery for students, and a centralized dashboard for Placement Officers.
              </p>
              {/* REVISED Ideation & Design END */}

              {/* Full width image container, adjust vertical margin */}
              <div className="w-full bg-accent-bg rounded-lg my-8 xs:my-12 shadow-lg reveal border border-brand-secondary/20"> {/* Removed overflow-hidden */}
                <ZoomableImage
                  src="/Elanable-uploads/Camu-Recruitment-Dashboard.png"
                  alt="Early wireframes and high-fidelity prototypes of the Camu recruitment app"
                  caption="Wireframes and prototypes illustrating the evolution of the job posting and candidate management flows."
                  className="aspect-video"
                />
              </div>

              {/* Testing & Iteration (Original Content) */}
              {/* Adaptive Typography for H3. Adjusted margins. */}
              <h3 className="text-xl xs:text-2xl sm:text-3xl font-semibold mb-3 xs:mb-4 mt-8 xs:mt-12 text-[#177863] dark:text-[#177863] font-heading reveal">Refining Through User Feedback (Testing & Iteration)</h3>
              <p className="text-foreground leading-relaxed text-base xs:text-lg mb-3 xs:mb-4 reveal">
                Conducted iterative usability testing, leading to key design refinements that significantly improved user experience.
              </p>
              <Accordion type="single" collapsible className="w-full space-y-2 reveal mb-6 xs:mb-8">
                <AccordionItem value="item-iteration-details">
                  <AccordionTrigger className="text-base xs:text-lg font-medium text-foreground hover:text-brand-tertiary">Key Iteration Highlights</AccordionTrigger>
                  <AccordionContent className="pt-2">
                    <div className="space-y-4 xs:space-y-6"> {/* Adjusted spacing and mb */}
                      {/* Responsive padding for iteration boxes */}
                      <div className="border border-brand-tertiary/30 rounded-lg p-3 xs:p-4 sm:p-6 bg-white shadow-sm">
                        <h4 className="font-semibold text-lg xs:text-xl mb-1.5 xs:mb-2 text-brand-tertiary font-heading">Form Structure Refined:</h4>
                        <p className="text-base xs:text-lg text-foreground leading-relaxed">Replaced overwhelming single-page forms with a multi-step approach and autosave, boosting clarity and task completion.</p>
                      </div>
                      <div className="border border-brand-tertiary/30 rounded-lg p-3 xs:p-4 sm:p-6 bg-white shadow-sm">
                        <h4 className="font-semibold text-lg xs:text-xl mb-1.5 xs:mb-2 text-brand-tertiary font-heading">AI Autofill Optimized:</h4>
                        <p className="text-base xs:text-lg text-foreground leading-relaxed">Balanced automation with user control by making AI autofill optional with easy overrides, building trust.</p>
                      </div>
                      <div className="border border-brand-tertiary/30 rounded-lg p-3 xs:p-4 sm:p-6 bg-white shadow-sm">
                        <h4 className="font-semibold text-lg xs:text-xl mb-1.5 xs:mb-2 text-brand-tertiary font-heading">External Tracking Clarified:</h4>
                        <p className="text-base xs:text-lg text-foreground leading-relaxed">Simplified messaging for external application links, enhancing user understanding and confidence.</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
               {/* Full width image container, adjust vertical margin */}
              <div className="w-full bg-accent-bg rounded-lg my-8 xs:my-12 shadow-lg reveal border border-brand-tertiary/20"> {/* Removed overflow-hidden */}
                <ZoomableImage
                  src="/Elanable-uploads/Camu.png"
                  alt="UI mockups showing iterations of the external tracking link modal and AI autofill suggestions"
                  caption="Iterations on AI autofill suggestions and external tracking link modals based on usability feedback."
                  className="aspect-video"
                />
              </div>
              {/* End of Testing & Iteration (Original Content) */}
            </section>
          </SectionReveal>

          {/* REVISED The Solution START */}
          <SectionReveal>
             {/* Responsive padding and mb. */}
            <section className="mb-12 xs:mb-16 reveal px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-gradient-to-br from-[#177863]/6 to-[#177863]/10 shadow-lg border border-[#177863]/25">
              {/* Adaptive Typography for H2. Adjusted mb. */}
              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-semibold mb-4 xs:mb-6 text-brand-primary font-heading reveal">The Solution: A Unified & Efficient Recruitment App</h2>
              <p className="text-foreground leading-relaxed text-base xs:text-lg mb-4 xs:mb-6 reveal">
                The redesigned Camu app delivered a seamless, data-driven recruitment experience integrated within the SIS, with distinct, intuitive flows for each user.
              </p>
              <div className="space-y-6 xs:space-y-8 reveal"> {/* Adjusted spacing */}
                <div className="reveal">
                  {/* Adaptive Typography for H3. Adjusted mb. */}
                  <h3 className="text-xl xs:text-2xl sm:text-3xl font-semibold mb-2 xs:mb-3 text-brand-primary font-heading reveal">Recruiter Flow: Efficient Job Posting & Candidate Sourcing</h3>
                  <ul className="list-disc pl-4 xs:pl-5 text-foreground text-base xs:text-lg leading-relaxed space-y-1 xs:space-y-1.5 reveal">
                    <li className="reveal"><strong className="font-medium text-foreground">Effortless Login & Job Posting:</strong> Scoped institutional login and a guided 4-step, AI-assisted job creation process.</li>
                    <li className="reveal"><strong className="font-medium text-foreground">Precise Candidate Targeting:</strong> Leveraged SIS data for accurate filtering, eliminating manual uploads.</li>
                    <li className="reveal"><strong className="font-medium text-foreground">Streamlined Management:</strong> Real-time dashboard for approvals and application tracking.</li>
                  </ul>
                </div>
                <div className="reveal">
                  <h3 className="text-xl xs:text-2xl sm:text-3xl font-semibold mb-2 xs:mb-3 text-brand-secondary font-heading reveal">Placement Officer Flow: Effective Management & Oversight</h3>
                  <ul className="list-disc pl-4 xs:pl-5 text-foreground text-base xs:text-lg leading-relaxed space-y-1 xs:space-y-1.5 reveal">
                    <li className="reveal"><strong className="font-medium text-foreground">Centralized Job Management:</strong> Dedicated job queue for streamlined approval workflows.</li>
                    <li className="reveal"><strong className="font-medium text-foreground">Integrated Scheduling:</strong> Coordinated interviews directly within the platform.</li>
                    <li className="reveal"><strong className="font-medium text-foreground">Actionable Analytics:</strong> Dashboards for data-driven placement decisions.</li>
                  </ul>
                </div>
                <div className="reveal">
                  <h3 className="text-xl xs:text-2xl sm:text-3xl font-semibold mb-2 xs:mb-3 text-[#177863] dark:text-[#177863] font-heading reveal">Student Flow: Seamless Job Discovery & Application</h3>
                  <ul className="list-disc pl-4 xs:pl-5 text-foreground text-base xs:text-lg leading-relaxed space-y-1 xs:space-y-1.5 reveal">
                    <li className="reveal"><strong className="font-medium text-foreground">Targeted Job Discovery:</strong> SIS feed with AI-powered job recommendations.</li>
                    <li className="reveal"><strong className="font-medium text-foreground">Simplified Applications:</strong> Pre-filled forms from SIS data to reduce effort.</li>
                    <li className="reveal"><strong className="font-medium text-foreground">Clear Progress Tracking:</strong> Real-time updates on application status.</li>
                  </ul>
                </div>
              </div>
              {/* Full width image container, adjust vertical margin */}
              <div className="w-full bg-accent-bg rounded-lg my-8 xs:my-12 shadow-lg reveal border border-brand-primary/20"> {/* Removed overflow-hidden */}
                <ZoomableImage
                  src="/Elanable-uploads/Camu-Recruitment-Dashboard.png"
                  alt="Final UI of the Camu Campus Recruitment dashboard showing job postings and candidate lists"
                  caption="The final dashboard UI for recruiters, showcasing clear job management and candidate tracking features."
                  className="aspect-video"
                />
              </div>
            </section>
          </SectionReveal>
          {/* REVISED The Solution END */}

          {/* REVISED Impact/Results START */}
          <SectionReveal>
            {/* Responsive padding and mb. */}
            <section className="mb-12 xs:mb-16 reveal px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-gradient-to-br from-[#16325A]/6 to-[#16325A]/10 shadow-lg border border-[#16325A]/25">
              {/* Adaptive Typography for H2. Adjusted mb. */}
              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-semibold mb-4 xs:mb-6 text-[#16325A] dark:text-[#16325A] font-heading reveal">Results: Driving Efficiency and Growth</h2>
              <p className="text-foreground leading-relaxed text-base xs:text-lg mb-4 xs:mb-6 reveal">
                The redesigned app significantly improved key metrics across user journeys, delivering substantial user and business value.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6 reveal"> {/* Adjusted gap */}
                 {/* Responsive padding for stat boxes */}
                <div className="border border-brand-secondary/30 bg-white p-3 xs:p-4 sm:p-6 rounded-lg text-center reveal shadow-sm">
                  {/* Adaptive Typography for stats. Adjusted mb. */}
                  <p className="text-3xl xs:text-4xl sm:text-5xl font-semibold text-brand-secondary mb-0.5 xs:mb-1">30%</p>
                  <p className="text-foreground text-sm xs:text-base leading-relaxed">Faster Time-to-Hire (Recruiter & Student Journey Improvement)</p>
                </div>
                <div className="border border-brand-secondary/30 bg-white p-3 xs:p-4 sm:p-6 rounded-lg text-center reveal shadow-sm">
                  <p className="text-3xl xs:text-4xl sm:text-5xl font-semibold text-brand-secondary mb-0.5 xs:mb-1">40%</p>
                  <p className="text-foreground text-sm xs:text-base leading-relaxed">Reduced PO Workload (Placement Officer Journey Improvement)</p>
                </div>
                <div className="border border-brand-secondary/30 bg-white p-3 xs:p-4 sm:p-6 rounded-lg text-center reveal shadow-sm">
                  <p className="text-3xl xs:text-4xl sm:text-5xl font-semibold text-brand-secondary mb-0.5 xs:mb-1">25%</p>
                  <p className="text-foreground text-sm xs:text-base leading-relaxed">Increased SIS Engagement (Student & Recruiter Journey Benefit)</p>
                </div>
                <div className="border border-brand-secondary/30 bg-white p-3 xs:p-4 sm:p-6 rounded-lg text-center reveal shadow-sm">
                  <p className="text-3xl xs:text-4xl sm:text-5xl font-semibold text-brand-secondary mb-0.5 xs:mb-1">$500K</p>
                  <p className="text-foreground text-sm xs:text-base leading-relaxed">New Revenue Stream (Business Outcome from improved journeys)</p>
                </div>
              </div>
              <p className="text-foreground leading-relaxed text-base xs:text-lg mt-4 xs:mt-6 reveal">
                These outcomes highlight the app's success in optimizing recruitment workflows, boosting user satisfaction, and creating tangible business impact.
              </p>
            </section>
          </SectionReveal>
          {/* REVISED Impact/Results END */}

          {/* Learnings/Reflections (Original Content) */}
          <SectionReveal>
            {/* Responsive padding and mb. */}
            <section className="mb-12 xs:mb-16 reveal px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-gradient-to-br from-[#16325A]/8 to-[#16325A]/12 shadow-lg border border-[#16325A]/20">
              {/* Adaptive Typography for H2. Adjusted mb. */}
              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-semibold mb-4 xs:mb-6 text-[#16325A] font-heading reveal">Key Learnings & Design Principles</h2>
              <p className="text-foreground leading-relaxed text-base xs:text-lg mb-3 xs:mb-4 reveal">
                This project reinforced the power of user-centric design and iterative development in solving complex challenges and delivering measurable results.
              </p>
              <Accordion type="single" collapsible className="w-full space-y-2 reveal my-6 xs:my-8">
                <AccordionItem value="item-elan-thinking-learnings">
                  <AccordionTrigger className="text-base xs:text-lg font-medium text-brand-tertiary hover:text-brand-tertiary/80">Reflection: Navigating Challenges</AccordionTrigger>
                  <AccordionContent className="pt-2">
                    <blockquote className="border-l-4 border-brand-tertiary/50 pl-3 xs:pl-4 sm:pl-6 italic text-foreground/80 bg-white p-3 xs:p-4 rounded-r-lg shadow-sm">
                      <p className="mb-1.5 xs:mb-2 text-foreground text-sm xs:text-base">Initial setbacks, like the 'Quick Post' concept, were vital learning experiences. It taught me to rigorously prioritize data and user feedback over personal attachment to ideas, ensuring user trust remained the guiding principle for true problem-solving.</p>
                    </blockquote>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type="single" collapsible className="w-full space-y-2 reveal mt-4">
                <AccordionItem value="item-key-takeaways">
                  <AccordionTrigger className="text-base xs:text-lg font-medium text-foreground hover:text-brand-secondary">View Key Takeaways</AccordionTrigger>
                  <AccordionContent className="pt-2">
                    <ul className="list-disc pl-4 xs:pl-5 text-foreground text-base xs:text-lg leading-relaxed space-y-1 xs:space-y-1.5">
                      <li><strong className="font-medium text-foreground">Deep User Empathy Drives Innovation:</strong> Uncovering true user needs, not just stated desires, is crucial for breakthrough solutions.</li>
                      <li><strong className="font-medium text-foreground">Balance Automation with User Control:</strong> AI should empower, not confuse. Provide transparency and control to build trust.</li>
                      <li><strong className="font-medium text-foreground">Clarity in Complexity:</strong> Simple language, clear navigation, and predictable system behavior are essential, especially in intricate workflows.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <p className="text-foreground leading-relaxed text-lg mt-6 reveal"> {/* Adjusted margin top */}
                A future iteration would involve even earlier co-design with placement officers for their specific approval workflows to further refine that critical journey.
              </p>
            </section>
          </SectionReveal>
          {/* End of Learnings/Reflections (Original Content) */}

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

export default CaseStudyCampusHiring;
