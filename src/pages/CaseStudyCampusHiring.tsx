
import React, { useEffect } from 'react'; // Ensure useEffect is imported
import Header from "../components/layout/Header.tsx";
import Footer from "../components/layout/Footer.tsx";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "../components/ui/badge.tsx";
import ZoomableImage from "../components/ui/ZoomableImage.tsx";
import BigImageCarousel from "../components/ui/BigImageCarousel.tsx";
import SectionReveal from '@/components/SectionReveal';

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
                40% Faster Campus Hiring
              </h1>

              {/* Subtitle with better contrast */}
              <p className="text-xl xs:text-2xl text-foreground/80 mb-8 leading-relaxed font-medium">
                Redesigning Camu's Campus Recruitment App to streamline hiring processes for universities, recruiters, and students
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
                  <div className="text-2xl font-bold text-[#177863] mb-1">40% faster</div>
                  <div className="text-sm text-foreground/70 uppercase tracking-wider">Impact</div>
                  <div className="text-sm text-foreground/60">$500K new revenue</div>
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* Hero Image Section */}
          <SectionReveal>
            <div className="reveal w-full bg-card rounded-3xl overflow-hidden shadow-xl border border-brand-primary/10">
              <BigImageCarousel
                images={[
                  { src: "/Elanable-uploads/Camu Campus Recruitment App.png", alt: "Camu Campus Recruitment App Interface" },
                  { src: "/Elanable-uploads/Camu.png", alt: "Camu Brand Identity" },
                  { svgPlaceholder: true, alt: "User Journey Mapping" }
                ]}
              />
            </div>
          </SectionReveal>

            {/* REVISED Overview/Challenge START */}
            <SectionReveal>
              {/* Responsive padding: px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8. Adjusted mb. */}
              <section className="mb-12 xs:mb-16 reveal px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-gradient-to-br from-[#177863]/6 to-[#177863]/3 shadow-lg border border-[#177863]/20">
                {/* Adaptive Typography for H2: text-2xl xs:text-3xl sm:text-4xl. Adjusted mb. */}
                <h2 className="text-2xl xs:text-3xl sm:text-4xl font-semibold mb-4 xs:mb-6 text-[#177863] font-heading reveal">Overview/Challenge</h2>
                <p className="text-foreground leading-relaxed text-base xs:text-lg mb-3 xs:mb-4 reveal">
                  <strong className="font-medium text-foreground">Project Name:</strong> Camu Campus Recruitment App (Shipped: April 2025).
                </p>
                <p className="text-foreground leading-relaxed text-base xs:text-lg mb-3 xs:mb-4 reveal">
                  The core challenge was the significant friction and inefficiency in Camu's existing campus recruitment model, impacting three critical user journeys. Camu needed to boost engagement, improve placement rates, and drive revenue by leveraging its Student Information System (SIS), but the current system created obstacles for all key stakeholders:
                </p>
                <div className="text-foreground text-base xs:text-lg leading-relaxed space-y-2.5 xs:space-y-3 reveal">
                  <p className="reveal"><strong className="font-medium text-foreground">User Pain Points Along Critical Paths:</strong></p>
                  <ul className="list-disc pl-4 xs:pl-5 space-y-1 xs:space-y-1.5 reveal"> {/* Adjusted padding and spacing */}
                    <li className="reveal"><strong className="font-medium text-foreground">Recruiter's Journey (Posting & Candidate Sourcing):</strong> Recruiters struggled with a cumbersome job posting process, juggling multiple platform logins, manually uploading data, and lacking clear visibility into student profiles. This made it difficult to efficiently target opportunities and find qualified candidates.</li>
                    <li className="reveal"><strong className="font-medium text-foreground">Student's Journey (Discovery & Application):</strong> Students faced a frustrating experience with repetitive form-filling for each application and often missed relevant opportunities due to a complex and disjointed job discovery process.</li>
                    <li className="reveal"><strong className="font-medium text-foreground">Placement Officer's Journey (Management & Analytics):</strong> Placement Officers were mired in email threads and spreadsheets for approvals and scheduling. They lacked centralized tools for managing job postings and had no effective way to monitor recruitment analytics, hindering their ability to ensure successful placement outcomes.</li>
                  </ul>
                  <p className="mt-2.5 xs:mt-3 reveal">
                    The business and user need was a unified, efficient, and user-friendly platform built upon the existing SIS. This platform had to streamline these three critical red routes—Recruiter job posting and application management, Student job discovery and application, and Placement Officer management and oversight—to create a cohesive and effective hiring ecosystem for all stakeholders.
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
                <strong className="font-medium text-foreground">Role:</strong> Lead Interaction Designer.
              </p>
              <p className="text-foreground leading-relaxed text-base xs:text-lg reveal"><strong className="font-medium text-foreground">Key Responsibilities:</strong></p>
              <ul className="list-disc pl-4 xs:pl-5 text-foreground text-base xs:text-lg leading-relaxed space-y-1 xs:space-y-1.5 reveal">
                <li className="reveal">User Research (interviews, surveys)</li>
                <li className="reveal">Persona Development</li>
                <li className="reveal">Interaction Design (wireframing, prototyping)</li>
                <li className="reveal">User Interface Design</li>
                <li className="reveal">Usability Testing and Iteration</li>
                <li className="reveal">Cross-functional collaboration with product managers and engineers</li>
              </ul>
            </section>
          </SectionReveal>

          <SectionReveal>
            {/* Responsive padding and mb. */}
            <section className="mb-12 xs:mb-16 reveal px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-gradient-to-br from-[#F8F4F2]/40 to-[#F8F4F2]/60 shadow-lg border border-[#177863]/15">
               {/* Adaptive Typography for H2. Adjusted mb. */}
              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-semibold mb-4 xs:mb-6 text-[#177863] font-heading reveal">The Process</h2>

              {/* Adaptive Typography for H3. Adjusted mb. */}
              <h3 className="text-xl xs:text-2xl sm:text-3xl font-semibold mb-3 xs:mb-4 text-brand-primary font-heading reveal">Discovery & Research</h3>
              <p className="text-foreground leading-relaxed text-base xs:text-lg mb-3 xs:mb-4 reveal">
                The initial phase focused on understanding the users. Research identified three core user groups with distinct needs but a shared desire for simplicity and efficiency: Recruiters, Placement Officers, and Students.
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
              <p className="text-foreground leading-relaxed text-base xs:text-lg mb-3 xs:mb-4 reveal">
                A user-centric approach involved interviews and surveys to identify key pain points and goals for these personas. This foundational research was critical in shaping the design direction.
              </p>
              {/* Full width image container, adjust vertical margin */}
              <div className="w-full bg-accent-bg rounded-lg my-8 xs:my-12 shadow-lg reveal border border-brand-primary/20"> {/* Removed overflow-hidden */}
                <ZoomableImage
                  src="/Elanable-uploads/Camu.png"
                  alt="User Personas and Journey Map"
                  className="aspect-video"
                />
              </div>
              {/* End of Discovery & Research (Original Content) */}

              {/* REVISED Ideation & Design START */}
              {/* Adaptive Typography for H3. Adjusted margins. */}
              <h3 className="text-xl xs:text-2xl sm:text-3xl font-semibold mb-3 xs:mb-4 mt-8 xs:mt-12 text-brand-secondary font-heading reveal">Ideation & Design</h3>
              <p className="text-foreground leading-relaxed text-base xs:text-lg mb-3 xs:mb-4 reveal">
                Design efforts began with wireframing and prototyping, focusing on optimizing the critical red routes. For the <strong className="font-medium text-foreground">Recruiter's Journey</strong>, a multi-step job posting form was conceptualized. This approach, inspired by familiar platforms but tailored for university needs, balanced clarity and efficiency by breaking down the information required into logical chunks (Basic Info, Position Details, etc.). This was a breakthrough, reducing form abandonment by 38% compared to an initial single-page concept, directly easing the recruiter's path to posting targeted opportunities. For the <strong className="font-medium text-foreground">Student's Journey</strong>, this translated into clearer job information and easier application flows with pre-filled data from the SIS.
              </p>
              {/* Responsive padding and margin for blockquote */}
              <blockquote className="border-l-4 border-brand-secondary/50 pl-3 xs:pl-4 sm:pl-6 italic text-foreground/80 my-6 xs:my-8 bg-white p-3 xs:p-4 rounded-r-lg shadow-sm reveal">
                <p className="mb-1.5 xs:mb-2"><strong className="not-italic font-medium text-brand-secondary text-base xs:text-lg">Elan's Thinking: Systemic Solutions & User Advocacy</strong></p>
                <p className="mb-1.5 xs:mb-2 text-foreground text-sm xs:text-base">"The initial 'Quick Post' concept, while aiming for speed, failed because it didn't integrate well with the Placement Officer's approval workflow or provide enough detail for students—a classic systems thinking oversight. We realized optimizing one red route (recruiter posting) couldn't come at the expense of others. The multi-step form was a trade-off: slightly more steps for recruiters, but vastly improved data quality for student discovery and PO approvals. This structured data was also key for the AI matching features, a win-win for Camu and all user groups. Convincing stakeholders involved showcasing how this more deliberate recruiter input directly fueled more relevant student matches and streamlined PO oversight, reducing downstream friction for everyone. It was about advocating for a solution that, while requiring some upfront effort from one user group, created a more efficient and trustworthy ecosystem overall. For instance, while pre-filling student data offered immense convenience (a key student need), we built in clear review steps to ensure data accuracy, balancing speed with reliability—a crucial trade-off for maintaining trust."</p>
              </blockquote>
              <p className="text-foreground leading-relaxed text-base xs:text-lg mb-3 xs:mb-4 reveal">
                The design for recruiters focused on this four-step job creation process with AI assistance and autosave. For students, the design aimed for effortless discovery of jobs within their SIS feed and frictionless applications with pre-filled forms. The <strong className="font-medium text-foreground">Placement Officer's Journey</strong> was enhanced through a centralized dashboard for approvals and analytics, directly fed by the structured data from the new recruiter and student flows.
              </p>
              {/* REVISED Ideation & Design END */}

              {/* Full width image container, adjust vertical margin */}
              <div className="w-full bg-accent-bg rounded-lg my-8 xs:my-12 shadow-lg reveal border border-brand-secondary/20"> {/* Removed overflow-hidden */}
                <ZoomableImage
                  src="/Elanable-uploads/Camu Campus Recruitment App.png"
                  alt="Wireframes and Prototypes"
                  className="aspect-video"
                />
              </div>

              {/* Testing & Iteration (Original Content) */}
              {/* Adaptive Typography for H3. Adjusted margins. */}
              <h3 className="text-xl xs:text-2xl sm:text-3xl font-semibold mb-3 xs:mb-4 mt-8 xs:mt-12 text-[#177863] dark:text-[#177863] font-heading reveal">Testing & Iteration</h3>
              <p className="text-foreground leading-relaxed text-base xs:text-lg mb-3 xs:mb-4 reveal">
                Three key iterations refined the design based on user feedback. Usability testing was conducted to identify areas of confusion and opportunities for improvement.
              </p>
              <div className="space-y-4 xs:space-y-6 mb-6 xs:mb-8 reveal"> {/* Adjusted spacing and mb */}
                 {/* Responsive padding for iteration boxes */}
                <div className="border border-brand-tertiary/30 rounded-lg p-3 xs:p-4 sm:p-6 reveal bg-white shadow-sm">
                  {/* Adaptive Typography for H4. Adjusted mb. */}
                  <h4 className="font-semibold text-lg xs:text-xl mb-1.5 xs:mb-2 text-brand-tertiary font-heading">Iteration 1: Form Structure</h4>
                  <p className="text-base xs:text-lg text-foreground leading-relaxed"><strong className="font-medium text-foreground">Challenge:</strong> Single-page form overwhelmed users.</p>
                  <p className="text-base xs:text-lg text-foreground leading-relaxed"><strong className="font-medium text-foreground">Solution:</strong> Multi-step form with autosave, improving clarity and reducing cognitive load.</p>
                </div>
                <div className="border border-brand-tertiary/30 rounded-lg p-3 xs:p-4 sm:p-6 reveal bg-white shadow-sm">
                  <h4 className="font-semibold text-lg xs:text-xl mb-1.5 xs:mb-2 text-brand-tertiary font-heading">Iteration 2: AI Autofill</h4>
                  <p className="text-base xs:text-lg text-foreground leading-relaxed"><strong className="font-medium text-foreground">Challenge:</strong> User distrust of full automation for job posting details.</p>
                  <p className="text-base xs:text-lg text-foreground leading-relaxed"><strong className="font-medium text-foreground">Solution:</strong> Implemented optional autofill with easy overrides, giving users control while still offering assistance.</p>
                </div>
                <div className="border border-brand-tertiary/30 rounded-lg p-3 xs:p-4 sm:p-6 reveal bg-white shadow-sm">
                  <h4 className="font-semibold text-lg xs:text-xl mb-1.5 xs:mb-2 text-brand-tertiary font-heading">Iteration 3: External Tracking Links</h4>
                  <p className="text-base xs:text-lg text-foreground leading-relaxed"><strong className="font-medium text-foreground">Challenge:</strong> Confusing popups and unclear messaging when users clicked on external application tracking links.</p>
                  <p className="text-base xs:text-lg text-foreground leading-relaxed"><strong className="font-medium text-foreground">Solution:</strong> Simplified wording and provided clearer context for external links, improving user trust and understanding.</p>
                </div>
              </div>
               {/* Full width image container, adjust vertical margin */}
              <div className="w-full bg-accent-bg rounded-lg my-8 xs:my-12 shadow-lg reveal border border-brand-tertiary/20"> {/* Removed overflow-hidden */}
                <ZoomableImage
                  src="/Elanable-uploads/Camu.png"
                  alt="Iteration Examples and UI Mockups"
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
              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-semibold mb-4 xs:mb-6 text-brand-primary font-heading reveal">The Solution</h2>
              <p className="text-foreground leading-relaxed text-base xs:text-lg mb-4 xs:mb-6 reveal">
                The final design delivered a seamless, data-driven campus recruitment app integrated within the Camu SIS. It provided distinct, intuitive flows for each user persona, directly addressing their critical red routes and creating a cohesive ecosystem.
              </p>
              <div className="space-y-6 xs:space-y-8 reveal"> {/* Adjusted spacing */}
                <div className="reveal">
                  {/* Adaptive Typography for H3. Adjusted mb. */}
                  <h3 className="text-xl xs:text-2xl sm:text-3xl font-semibold mb-2 xs:mb-3 text-brand-primary font-heading reveal">Recruiter Flow: Efficient Job Posting & Candidate Sourcing</h3>
                  <ul className="list-disc pl-4 xs:pl-5 text-foreground text-base xs:text-lg leading-relaxed space-y-1 xs:space-y-1.5 reveal">
                    <li className="reveal"><strong className="font-medium text-foreground">Seamless Access:</strong> Institutional credentials provide scoped login; trusted partners skip approvals, reducing login friction.</li>
                    <li className="reveal"><strong className="font-medium text-foreground">Simplified Job Creation:</strong> A guided four-step form (Basic Info, Position Details, Location/Time, Compensation) with AI assistance and autosave dramatically streamlined the process of posting targeted jobs.</li>
                    <li className="reveal"><strong className="font-medium text-foreground">Targeted Candidate Pools:</strong> Leveraging existing SIS data for filters eliminated manual uploads and enabled precise candidate targeting.</li>
                    <li className="reveal"><strong className="font-medium text-foreground">Centralized Application Management:</strong> A real-time dashboard for job posting approvals and application tracking replaced email chaos, allowing recruiters to efficiently manage incoming applications.</li>
                  </ul>
                </div>
                <div className="reveal">
                  <h3 className="text-xl xs:text-2xl sm:text-3xl font-semibold mb-2 xs:mb-3 text-brand-secondary font-heading reveal">Placement Officer Flow: Effective Management & Oversight</h3>
                  <ul className="list-disc pl-4 xs:pl-5 text-foreground text-base xs:text-lg leading-relaxed space-y-1 xs:space-y-1.5 reveal">
                    <li className="reveal"><strong className="font-medium text-foreground">Centralized Job Management:</strong> A dedicated job queue provided a clear overview of all postings, streamlining approval workflows.</li>
                    <li className="reveal"><strong className="font-medium text-foreground">Integrated Scheduling Tools:</strong> Facilitated coordination of interviews directly within the platform.</li>
                    <li className="reveal"><strong className="font-medium text-foreground">Actionable Analytics:</strong> Data dashboards offered insights into placement activities, success rates, and recruiter engagement, enabling data-driven decisions.</li>
                  </ul>
                </div>
                <div className="reveal">
                  <h3 className="text-xl xs:text-2xl sm:text-3xl font-semibold mb-2 xs:mb-3 text-[#177863] dark:text-[#177863] font-heading reveal">Student Flow: Seamless Job Discovery & Application</h3>
                  <ul className="list-disc pl-4 xs:pl-5 text-foreground text-base xs:text-lg leading-relaxed space-y-1 xs:space-y-1.5 reveal">
                    <li className="reveal"><strong className="font-medium text-foreground">Effortless Job Discovery:</strong> Relevant jobs appeared directly in the SIS feed, augmented by AI recommendations tailored to student profiles and preferences.</li>
                    <li className="reveal"><strong className="font-medium text-foreground">Frictionless Applications:</strong> Pre-filled forms using SIS data significantly reduced application time and effort, minimizing drop-off.</li>
                    <li className="reveal"><strong className="font-medium text-foreground">Transparent Progress Tracking:</strong> Clear, easy-to-understand interview scheduling and real-time status updates for applications kept students informed.</li>
                  </ul>
                </div>
              </div>
              {/* Full width image container, adjust vertical margin */}
              <div className="w-full bg-accent-bg rounded-lg my-8 xs:my-12 shadow-lg reveal border border-brand-primary/20"> {/* Removed overflow-hidden */}
                <ZoomableImage
                  src="/Elanable-uploads/Camu Campus Recruitment App.png"
                  alt="Final UI Screens and Key Flows"
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
              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-semibold mb-4 xs:mb-6 text-[#16325A] dark:text-[#16325A] font-heading reveal">Impact/Results</h2>
              <p className="text-foreground leading-relaxed text-base xs:text-lg mb-4 xs:mb-6 reveal">
                The redesigned Camu Campus Recruitment App delivered significant improvements across the board, directly enhancing the critical user journeys:
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
                These results demonstrate the app's success in streamlining the core recruitment red routes, enhancing overall user experience, and delivering tangible business value.
              </p>
            </section>
          </SectionReveal>
          {/* REVISED Impact/Results END */}

          {/* Learnings/Reflections (Original Content) */}
          <SectionReveal>
            {/* Responsive padding and mb. */}
            <section className="mb-12 xs:mb-16 reveal px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-gradient-to-br from-[#16325A]/8 to-[#16325A]/12 shadow-lg border border-[#16325A]/20">
              {/* Adaptive Typography for H2. Adjusted mb. */}
              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-semibold mb-4 xs:mb-6 text-[#16325A] font-heading reveal">Learnings/Reflections</h2>
              <p className="text-foreground leading-relaxed text-base xs:text-lg mb-3 xs:mb-4 reveal">
                The project underscored the importance of user-centric design and iterative development. Challenges like initial user resistance to AI autofill and confusion over external link tracking highlighted the need to prioritize user trust and clarity above all.
              </p>
              {/* Responsive padding and margin for blockquote */}
              <blockquote className="border-l-4 border-brand-tertiary/50 pl-3 xs:pl-4 sm:pl-6 italic text-foreground/80 my-6 xs:my-8 bg-white p-3 xs:p-4 rounded-r-lg shadow-sm reveal">
                <p className="mb-1.5 xs:mb-2"><strong className="not-italic font-medium text-brand-tertiary text-base xs:text-lg">Elan's Thinking: Overcoming Challenges & Growth</strong></p>
                <p className="mb-1.5 xs:mb-2 text-foreground text-sm xs:text-base">"The 'Quick Post' flop hurt initially because it was an idea I was attached to. Similarly, the confusion around external tracking was a blind spot. These moments were crucial learning experiences. I learned to let data and user feedback be the ultimate guide, even when it meant scrapping 'cool' ideas or rethinking assumptions. Business goals loomed large, but maintaining user trust became my north star throughout the process. It's not just about features; it's about how those features make users feel and whether they genuinely solve their problems."</p>
              </blockquote>
              <p className="text-foreground leading-relaxed text-base xs:text-lg mb-3 xs:mb-4 reveal">
                Key takeaways include:
              </p>
              <ul className="list-disc pl-4 xs:pl-5 text-foreground text-base xs:text-lg leading-relaxed space-y-1 xs:space-y-1.5 reveal">
                <li className="reveal"><strong className="font-medium text-foreground">Embrace User Feedback:</strong> Actively listen to users and be willing to pivot based on their input. Iteration is key to a successful product.</li>
                <li className="reveal"><strong className="font-medium text-foreground">Balance Innovation with Usability:</strong> While AI and automation can be powerful, ensure they are implemented in a way that empowers users and builds trust, rather than creating confusion or frustration.</li>
                <li className="reveal"><strong className="font-medium text-foreground">Clarity is Paramount:</strong> Especially with complex workflows, ensure that language, navigation, and system behaviors are clear and predictable.</li>
              </ul>
              <p className="text-foreground leading-relaxed text-lg mt-4 reveal"> {/* text-foreground/80 to text-foreground */}
                If I were to approach this project again, I would involve placement officers even more deeply in the early co-design phases for the approval workflows, potentially running more targeted prototype tests for that specific user journey.
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
