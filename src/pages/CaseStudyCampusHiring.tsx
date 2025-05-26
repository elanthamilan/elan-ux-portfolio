import React from "react";
import Header from "../components/layout/Header.tsx";
import Footer from "../components/layout/Footer.tsx";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "../components/ui/badge.tsx";
import ZoomableImage from "../components/ui/ZoomableImage.tsx";
import BigImageCarousel from "../components/ui/BigImageCarousel.tsx";
import SectionReveal from '../components/SectionReveal.tsx';

const CaseStudyCampusHiring = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Adjusted page container padding: px-2 xs:px-4 sm:px-6, py-8 xs:py-12 md:py-16 */}
      <main id="main-content" className="flex-grow container mx-auto px-2 xs:px-4 sm:px-6 py-8 xs:py-12 md:py-16 bg-background">
        <Link to="/" className="inline-flex items-center text-brand-primary hover:text-brand-secondary transition-colors mb-6 xs:mb-8 text-sm font-medium"> {/* Adjusted margin */}
          <ArrowLeft size={16} className="mr-1.5" />
          <span>Back to Home</span>
        </Link>

        <article className="max-w-4xl mx-auto space-y-12">
           {/* Hero Section - Enhanced with better visual hierarchy */}
          <SectionReveal>
            <div className="reveal">
              {/* Meta badges and info */}
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <Badge className="bg-brand-primary text-white px-3 py-1.5 text-sm font-medium rounded-md shadow-sm">
                  Case Study
                </Badge>
                <Badge className="bg-brand-secondary/10 text-brand-secondary border-brand-secondary/20 px-3 py-1.5 text-sm font-medium rounded-md">
                  EdTech
                </Badge>
                <Badge className="bg-brand-tertiary/10 text-brand-tertiary border-brand-tertiary/20 px-3 py-1.5 text-sm font-medium rounded-md">
                  UX Research
                </Badge>
                <span className="text-sm text-foreground/70 ml-auto">Published April 2025</span>
              </div>

              {/* Main title with enhanced typography */}
              <h1 className="text-4xl xs:text-5xl sm:text-6xl font-bold mb-6 text-foreground leading-tight font-heading">
                40% Faster Campus Hiring
              </h1>

              {/* Subtitle with better contrast */}
              <p className="text-xl xs:text-2xl text-foreground/80 mb-8 leading-relaxed font-medium">
                Redesigning Camu's Campus Recruitment App to streamline hiring processes for universities, recruiters, and students
              </p>

              {/* Key metrics in a clean grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 p-6 bg-accent-bg rounded-2xl border border-brand-primary/10">
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-primary mb-1">6 months</div>
                  <div className="text-sm text-foreground/70 uppercase tracking-wider">Timeline</div>
                  <div className="text-sm text-foreground/60">Jan - June 2024</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-secondary mb-1">Lead UX</div>
                  <div className="text-sm text-foreground/70 uppercase tracking-wider">My Role</div>
                  <div className="text-sm text-foreground/60">Research, Design, Testing</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-tertiary mb-1">40% faster</div>
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
              <section className="mb-12 xs:mb-16 reveal px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-accent-light shadow-lg border border-brand-primary/20">
                {/* Adaptive Typography for H2: text-2xl xs:text-3xl sm:text-4xl. Adjusted mb. */}
                <h2 className="text-2xl xs:text-3xl sm:text-4xl font-semibold mb-4 xs:mb-6 text-brand-primary font-heading reveal">Overview/Challenge</h2>
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
            <section className="mb-12 xs:mb-16 reveal px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-accent-bg shadow-lg border border-brand-secondary/20">
              {/* Adaptive Typography for H2. Adjusted mb. */}
              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-semibold mb-4 xs:mb-6 text-brand-secondary font-heading reveal">My Role & Responsibilities</h2>
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
            <section className="mb-12 xs:mb-16 reveal px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-accent-off-white shadow-lg border border-brand-tertiary/20">
               {/* Adaptive Typography for H2. Adjusted mb. */}
              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-semibold mb-4 xs:mb-6 text-brand-tertiary font-heading reveal">The Process</h2>

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
              <h3 className="text-xl xs:text-2xl sm:text-3xl font-semibold mb-3 xs:mb-4 mt-8 xs:mt-12 text-brand-tertiary font-heading reveal">Testing & Iteration</h3>
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
            <section className="mb-12 xs:mb-16 reveal px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-accent-light shadow-lg border border-brand-primary/20">
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
                  <h3 className="text-xl xs:text-2xl sm:text-3xl font-semibold mb-2 xs:mb-3 text-brand-primary font-heading reveal">Student Flow: Seamless Job Discovery & Application</h3>
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
            <section className="mb-12 xs:mb-16 reveal px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-accent-bg shadow-lg border border-brand-secondary/20">
              {/* Adaptive Typography for H2. Adjusted mb. */}
              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-semibold mb-4 xs:mb-6 text-brand-secondary font-heading reveal">Impact/Results</h2>
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
            <section className="mb-12 xs:mb-16 reveal px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-accent-off-white shadow-lg border border-brand-tertiary/20">
              {/* Adaptive Typography for H2. Adjusted mb. */}
              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-semibold mb-4 xs:mb-6 text-brand-tertiary font-heading reveal">Learnings/Reflections</h2>
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
                    <h3 className="text-2xl xs:text-3xl sm:text-4xl font-bold font-heading text-brand-primary mb-3">
                      Continue Reading
                    </h3>
                    <p className="text-foreground/80 text-base xs:text-lg leading-relaxed">
                      Explore more case studies and design insights
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Next Case Study Card - Target Theme: brand-secondary */}
                    <div className="group bg-white dark:bg-background rounded-2xl p-6 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 border border-brand-secondary/10">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-brand-secondary/10 rounded-xl flex items-center justify-center">
                          <span className="text-2xl">🎯</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg text-brand-secondary mb-2 group-hover:text-brand-primary transition-colors duration-200">
                            AI Student Course Planner
                          </h4>
                          <p className="text-foreground/70 text-sm mb-3 leading-relaxed">
                            Redesigning course planning with AI integration for better student outcomes
                          </p>
                          <Link
                            to="/case-study/student-planner"
                            className="inline-flex items-center text-brand-secondary hover:text-brand-primary transition-colors duration-200 text-sm font-medium group-hover:translate-x-1 transform"
                          >
                            Read Case Study
                            <ArrowLeft size={14} className="ml-1.5 rotate-180" />
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Back to Portfolio Card - Neutral Theme, Hover to Current Page Theme: brand-primary */}
                    <div className="group bg-white dark:bg-background rounded-2xl p-6 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 border border-slate-200 dark:border-slate-700">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center">
                          <span className="text-2xl">🏠</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg text-foreground/80 mb-2 group-hover:text-brand-primary transition-colors duration-200">
                            Back to Portfolio
                          </h4>
                          <p className="text-foreground/70 text-sm mb-3 leading-relaxed">
                            Explore all projects and design work
                          </p>
                          <Link
                            to="/"
                            className="inline-flex items-center text-foreground/70 hover:text-brand-primary transition-colors duration-200 text-sm font-medium group-hover:-translate-x-1 transform"
                          >
                            <ArrowLeft size={14} className="mr-1.5" />
                            View All Work
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </SectionReveal>

               {/* End of Case Study and Links - Stays at the bottom (Original Content) */}
          <SectionReveal>
            {/* Responsive padding and mt. */}
            <div className="text-center mt-12 xs:mt-16 reveal px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-accent-light shadow-lg border border-brand-primary/20">
              <p className="text-base xs:text-lg text-foreground/80 mb-4 xs:mb-6 reveal">⭐ End of Case Study ⭐</p> {/* Adjusted typography and mb */}
              <div className="mb-6 xs:mb-8 reveal"> {/* Adjusted mb */}
                 {/* Adaptive Typography for H3. Adjusted mb. */}
                <h3 className="text-xl xs:text-2xl sm:text-3xl font-semibold mb-2 xs:mb-3 text-brand-primary font-heading">Next Case Study</h3>
                <Link to="/case-study/student-planner" className="text-brand-secondary hover:underline font-medium text-base xs:text-lg"> {/* Adjusted typography */}
                  Student Course Planner Redesign →
                </Link>
              </div>
              <Link to="/" className="inline-flex items-center text-brand-primary hover:text-brand-secondary transition-colors text-sm font-medium reveal">
                <ArrowLeft size={16} className="mr-1.5" />
                <span>Back to Home</span>
              </Link>
            </div>
          </SectionReveal>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudyCampusHiring;
