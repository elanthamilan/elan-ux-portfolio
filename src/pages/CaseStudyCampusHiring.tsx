
import Header from "../components/layout/Header.tsx";
import Footer from "../components/layout/Footer.tsx";
// Removed CaseStudySection and ElanThinking imports as their content will be integrated directly
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "../components/ui/badge.tsx";

import ZoomableImage from "../components/ui/ZoomableImage.tsx";
import SectionReveal from '../components/SectionReveal.tsx';
import BigImageCarousel from "../components/ui/BigImageCarousel.tsx";

const CaseStudyCampusHiring = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main id="main-content" className="flex-grow bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <Link to="/" className="inline-flex items-center text-brand-primary hover:text-brand-secondary transition-colors mb-8 text-sm font-medium group">
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>

          <article className="max-w-4xl mx-auto space-y-12">
            {/* Hero Section */}
            <SectionReveal>
              <div className="text-center space-y-6">
                <div className="flex items-center justify-center space-x-3">
                  <Badge variant="brand" className="bg-brand-primary text-white text-sm">Case Study</Badge>
                  <span className="text-sm text-foreground/70">Published April 2025</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary leading-tight font-heading">
                  40% Faster Campus Hiring
                </h1>
                <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
                  Redesigning Camu's Campus Recruitment App to streamline hiring processes for universities, recruiters, and students
                </p>
              </div>
            </SectionReveal>

            {/* Hero Image */}
            <SectionReveal>
              <div className="w-full bg-white rounded-xl shadow-lg overflow-hidden border border-brand-primary/20">
                <BigImageCarousel
                  images={[
                    { src: "/Elanable-uploads/Camu Campus Recruitment App.png", alt: "Camu Campus Recruitment App Interface" },
                  ]}
                />
              </div>
            </SectionReveal>

            {/* Project Overview */}
            <SectionReveal>
              <div className="bg-gradient-to-br from-accent-light to-white p-8 md:p-12 rounded-2xl shadow-lg border border-brand-primary/20">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-brand-primary uppercase tracking-wide">Timeline</h3>
                    <p className="text-lg font-medium text-foreground">6 months</p>
                    <p className="text-sm text-foreground/70">Jan - June 2024</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-brand-primary uppercase tracking-wide">My Role</h3>
                    <p className="text-lg font-medium text-foreground">Lead UX Designer</p>
                    <p className="text-sm text-foreground/70">Research, Design, Testing</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-brand-primary uppercase tracking-wide">Impact</h3>
                    <p className="text-lg font-medium text-foreground">40% faster hiring</p>
                    <p className="text-sm text-foreground/70">$500K new revenue</p>
                  </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-primary font-heading">The Reality of Campus Hiring Chaos</h2>
                <p className="text-lg leading-relaxed text-foreground mb-6">
                  "We're losing good candidates because our system is a nightmare." That's what the placement officer told me during our first user interview. She wasn't exaggerating. I watched recruiters abandon job postings halfway through, students miss deadlines because they couldn't find applications, and placement officers drowning in email chains trying to coordinate interviews.
                </p>
                <p className="text-lg leading-relaxed text-foreground mb-6">
                  The existing Camu recruitment system wasn't just broken—it was actively working against everyone trying to use it. But here's the thing: each user group had learned to work around the problems in their own way, creating an even more complex web of workarounds and frustrations.
                </p>
                <div className="text-foreground text-base xs:text-lg leading-relaxed space-y-4 reveal">
                  <p className="reveal"><strong className="font-medium text-foreground">What I Discovered in the Trenches:</strong></p>

                  <div className="bg-card p-6 rounded-lg border-l-4 border-brand-primary/50 shadow-sm">
                    <h4 className="font-semibold text-lg text-brand-primary mb-2">The Recruiter's Nightmare</h4>
                    <p className="text-foreground">I shadowed a recruiter from TCS during placement week. She had 47 browser tabs open, was switching between 3 different platforms, and had to re-enter the same job details 5 times. "I spend more time fighting the system than actually recruiting," she told me while frantically trying to meet a posting deadline.</p>
                  </div>

                  <div className="bg-card p-6 rounded-lg border-l-4 border-brand-secondary/50 shadow-sm">
                    <h4 className="font-semibold text-lg text-brand-secondary mb-2">The Student's Confusion</h4>
                    <p className="text-foreground">Priya, a final-year CS student, showed me her application process. She had filled out her basic information 23 times across different job applications. "I gave up on three companies because I couldn't figure out how to apply," she said. The irony? Two of those were her dream jobs.</p>
                  </div>

                  <div className="bg-card p-6 rounded-lg border-l-4 border-brand-tertiary/50 shadow-sm">
                    <h4 className="font-semibold text-lg text-brand-tertiary mb-2">The Placement Officer's Overwhelm</h4>
                    <p className="text-foreground">Dr. Sharma, the placement head, had 247 unread emails about interview scheduling. Her desk was covered with printed spreadsheets because "the digital system doesn't show me what I need to see." She was manually tracking everything because the system's reports were useless.</p>
                  </div>

                  <p className="mt-6 reveal bg-accent-light p-4 rounded-lg">
                    <strong>The Real Challenge:</strong> This wasn't just about building a better job board. We needed to create a system that worked with how people actually behave under the intense pressure of placement season, not how we thought they should behave.
                  </p>
                </div>
              </div>
            </SectionReveal>



          <SectionReveal>
            {/* Responsive padding and mb. */}
            <section className="mb-12 xs:mb-16 reveal px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-accent-off-white shadow-lg border border-brand-tertiary/20">
               {/* Adaptive Typography for H2. Adjusted mb. */}
              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-semibold mb-4 xs:mb-6 text-brand-tertiary font-heading reveal">Getting to the Heart of the Problem</h2>

              {/* Adaptive Typography for H3. Adjusted mb. */}
              <h3 className="text-xl xs:text-2xl sm:text-3xl font-semibold mb-3 xs:mb-4 text-brand-primary font-heading reveal">What I Learned from Living in Their World</h3>
              <p className="text-foreground leading-relaxed text-base xs:text-lg mb-3 xs:mb-4 reveal">
                I spent two weeks during peak placement season embedded with users. Not just interviewing them—actually sitting with them, watching them work, feeling their frustration. What I discovered changed everything I thought I knew about campus recruitment.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xs:gap-6 mb-6 xs:mb-8 reveal"> {/* Adjusted gap and mb */}
                 {/* Responsive padding for info boxes: p-3 xs:p-4 sm:p-5 */}
                <div className="border border-brand-primary/30 rounded-lg p-3 xs:p-4 sm:p-5 reveal bg-card shadow-sm">
                  {/* Adaptive Typography for H4 (used as sub-sub-heading). Adjusted mb. */}
                  <h4 className="font-semibold text-lg xs:text-xl mb-1.5 xs:mb-2 text-brand-primary font-heading">Recruiters</h4>
                  <p className="text-foreground text-sm xs:text-base leading-relaxed">Needed quick job posting, candidate targeting, and easy application tracking.</p>
                </div>
                <div className="border border-brand-primary/30 rounded-lg p-3 xs:p-4 sm:p-5 reveal bg-card shadow-sm">
                  <h4 className="font-semibold text-lg xs:text-xl mb-1.5 xs:mb-2 text-brand-primary font-heading">Placement Officers</h4>
                  <p className="text-foreground text-sm xs:text-base leading-relaxed">Required centralized policy management, interview scheduling, and reporting.</p>
                </div>
                <div className="border border-brand-primary/30 rounded-lg p-3 xs:p-4 sm:p-5 reveal bg-card shadow-sm">
                  <h4 className="font-semibold text-lg xs:text-xl mb-1.5 xs:mb-2 text-brand-primary font-heading">Students</h4>
                  <p className="text-foreground text-sm xs:text-base leading-relaxed">Wanted intuitive job discovery, simple applications, and progress tracking.</p>
                </div>
              </div>
              <p className="text-foreground leading-relaxed text-base xs:text-lg mb-3 xs:mb-4 reveal">
                A user-centric approach involved interviews and surveys to identify key pain points and goals for these personas. This foundational research was critical in shaping the design direction.
              </p>
              {/* Full width image container, adjust vertical margin */}
              <div className="w-full bg-accent-bg rounded-lg my-8 xs:my-12 shadow-lg overflow-hidden reveal border border-brand-primary/20">
                <ZoomableImage
                  src="/Elanable-uploads/user-personas.png"
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
              <blockquote className="border-l-4 border-brand-secondary/50 pl-3 xs:pl-4 sm:pl-6 italic text-foreground/80 my-6 xs:my-8 bg-card p-3 xs:p-4 rounded-r-lg shadow-sm reveal">
                <p className="mb-1.5 xs:mb-2"><strong className="not-italic font-medium text-brand-secondary text-base xs:text-lg">Elan's Thinking: Systemic Solutions & User Advocacy</strong></p>
                <p className="mb-1.5 xs:mb-2 text-foreground text-sm xs:text-base">"The initial 'Quick Post' concept, while aiming for speed, failed because it didn't integrate well with the Placement Officer's approval workflow or provide enough detail for students—a classic systems thinking oversight. We realized optimizing one red route (recruiter posting) couldn't come at the expense of others. The multi-step form was a trade-off: slightly more steps for recruiters, but vastly improved data quality for student discovery and PO approvals. This structured data was also key for the AI matching features, a win-win for Camu and all user groups. Convincing stakeholders involved showcasing how this more deliberate recruiter input directly fueled more relevant student matches and streamlined PO oversight, reducing downstream friction for everyone. It was about advocating for a solution that, while requiring some upfront effort from one user group, created a more efficient and trustworthy ecosystem overall. For instance, while pre-filling student data offered immense convenience (a key student need), we built in clear review steps to ensure data accuracy, balancing speed with reliability—a crucial trade-off for maintaining trust."</p>
              </blockquote>
              <p className="text-foreground leading-relaxed text-base xs:text-lg mb-3 xs:mb-4 reveal">
                The design for recruiters focused on this four-step job creation process with AI assistance and autosave. For students, the design aimed for effortless discovery of jobs within their SIS feed and frictionless applications with pre-filled forms. The <strong className="font-medium text-foreground">Placement Officer's Journey</strong> was enhanced through a centralized dashboard for approvals and analytics, directly fed by the structured data from the new recruiter and student flows.
              </p>
              {/* REVISED Ideation & Design END */}

              {/* Full width image container, adjust vertical margin */}
              <div className="w-full bg-accent-bg rounded-lg my-8 xs:my-12 shadow-lg overflow-hidden reveal border border-brand-secondary/20">
                <ZoomableImage
                  src="/Elanable-uploads/wireframes.png"
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
                <div className="border border-brand-tertiary/30 rounded-lg p-3 xs:p-4 sm:p-6 reveal bg-card shadow-sm">
                  {/* Adaptive Typography for H4. Adjusted mb. */}
                  <h4 className="font-semibold text-lg xs:text-xl mb-1.5 xs:mb-2 text-brand-tertiary font-heading">Iteration 1: Form Structure</h4>
                  <p className="text-base xs:text-lg text-foreground leading-relaxed"><strong className="font-medium text-foreground">Challenge:</strong> Single-page form overwhelmed users.</p>
                  <p className="text-base xs:text-lg text-foreground leading-relaxed"><strong className="font-medium text-foreground">Solution:</strong> Multi-step form with autosave, improving clarity and reducing cognitive load.</p>
                </div>
                <div className="border border-brand-tertiary/30 rounded-lg p-3 xs:p-4 sm:p-6 reveal bg-card shadow-sm">
                  <h4 className="font-semibold text-lg xs:text-xl mb-1.5 xs:mb-2 text-brand-tertiary font-heading">Iteration 2: AI Autofill</h4>
                  <p className="text-base xs:text-lg text-foreground leading-relaxed"><strong className="font-medium text-foreground">Challenge:</strong> User distrust of full automation for job posting details.</p>
                  <p className="text-base xs:text-lg text-foreground leading-relaxed"><strong className="font-medium text-foreground">Solution:</strong> Implemented optional autofill with easy overrides, giving users control while still offering assistance.</p>
                </div>
                <div className="border border-brand-tertiary/30 rounded-lg p-3 xs:p-4 sm:p-6 reveal bg-card shadow-sm">
                  <h4 className="font-semibold text-lg xs:text-xl mb-1.5 xs:mb-2 text-brand-tertiary font-heading">Iteration 3: External Tracking Links</h4>
                  <p className="text-base xs:text-lg text-foreground leading-relaxed"><strong className="font-medium text-foreground">Challenge:</strong> Confusing popups and unclear messaging when users clicked on external application tracking links.</p>
                  <p className="text-base xs:text-lg text-foreground leading-relaxed"><strong className="font-medium text-foreground">Solution:</strong> Simplified wording and provided clearer context for external links, improving user trust and understanding.</p>
                </div>
              </div>
               {/* Full width image container, adjust vertical margin */}
              <div className="w-full bg-accent-bg rounded-lg my-8 xs:my-12 shadow-lg overflow-hidden reveal border border-brand-tertiary/20">
                <ZoomableImage
                  src="/Elanable-uploads/iterations.png"
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
              <div className="w-full bg-accent-bg rounded-lg my-8 xs:my-12 shadow-lg overflow-hidden reveal border border-brand-primary/20">
                <ZoomableImage
                  src="/Elanable-uploads/final-ui.png"
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
                <div className="border border-brand-secondary/30 bg-card p-3 xs:p-4 sm:p-6 rounded-lg text-center reveal shadow-sm">
                  {/* Adaptive Typography for stats. Adjusted mb. */}
                  <p className="text-3xl xs:text-4xl sm:text-5xl font-semibold text-brand-secondary mb-0.5 xs:mb-1">30%</p>
                  <p className="text-foreground text-sm xs:text-base leading-relaxed">Faster Time-to-Hire (Recruiter & Student Journey Improvement)</p>
                </div>
                <div className="border border-brand-secondary/30 bg-card p-3 xs:p-4 sm:p-6 rounded-lg text-center reveal shadow-sm">
                  <p className="text-3xl xs:text-4xl sm:text-5xl font-semibold text-brand-secondary mb-0.5 xs:mb-1">40%</p>
                  <p className="text-foreground text-sm xs:text-base leading-relaxed">Reduced PO Workload (Placement Officer Journey Improvement)</p>
                </div>
                <div className="border border-brand-secondary/30 bg-card p-3 xs:p-4 sm:p-6 rounded-lg text-center reveal shadow-sm">
                  <p className="text-3xl xs:text-4xl sm:text-5xl font-semibold text-brand-secondary mb-0.5 xs:mb-1">25%</p>
                  <p className="text-foreground text-sm xs:text-base leading-relaxed">Increased SIS Engagement (Student & Recruiter Journey Benefit)</p>
                </div>
                <div className="border border-brand-secondary/30 bg-card p-3 xs:p-4 sm:p-6 rounded-lg text-center reveal shadow-sm">
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
              <blockquote className="border-l-4 border-brand-tertiary/50 pl-3 xs:pl-4 sm:pl-6 italic text-foreground/80 my-6 xs:my-8 bg-card p-3 xs:p-4 rounded-r-lg shadow-sm reveal">
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

               {/* End of Case Study and Navigation */}
          <SectionReveal>
            {/* Next Case Study - Prominent Section */}
            <div className="mt-12 xs:mt-16 reveal">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-primary font-heading mb-4">Continue Reading</h2>
                <p className="text-foreground/80 text-lg">Explore my next case study</p>
              </div>

              <Link to="/case-study/student-planner" className="block group">
                <div className="bg-accent-bg dark:bg-slate-800/50 p-6 md:p-8 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 border-b-4 border-brand-secondary group-hover:shadow-xl overflow-hidden">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-background/80 backdrop-blur-sm px-2.5 py-1 rounded-md text-xs font-medium text-foreground shadow-sm">
                          2025
                        </div>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-brand-secondary font-heading mb-3 group-hover:text-brand-primary transition-colors">
                        AI Student Course Planner
                      </h3>
                      <div className="mb-4 text-sm text-foreground/80">
                        <ul className="space-y-2">
                          <li>
                            <span className="font-bold text-foreground">Who:</span>
                            <span className="text-foreground/90 ml-1">University Students</span>
                          </li>
                          <li>
                            <span className="font-bold text-foreground">What:</span>
                            <span className="text-foreground/90 ml-1">AI-powered course planning tool</span>
                          </li>
                          <li>
                            <span className="font-bold text-foreground">Result:</span>
                            <span className="text-foreground/90 ml-1">60% less scheduling time</span>
                          </li>
                        </ul>
                      </div>
                      <p className="text-foreground/80 mb-4 leading-relaxed text-sm">
                        A redesign of a student course planning tool with AI integration that adapts to students' real-life constraints and preferences.
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        <span className="px-2.5 py-0.5 text-xs border bg-brand-secondary/10 text-brand-secondary border-brand-secondary/20 rounded">AI</span>
                        <span className="px-2.5 py-0.5 text-xs border bg-brand-secondary/10 text-brand-secondary border-brand-secondary/20 rounded">UX Research</span>
                        <span className="px-2.5 py-0.5 text-xs border bg-brand-secondary/10 text-brand-secondary border-brand-secondary/20 rounded">EdTech</span>
                      </div>
                      <div className="flex items-center text-brand-secondary group-hover:text-brand-primary transition-colors font-medium">
                        <span>View Case Study</span>
                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                    <div className="w-full md:w-48 h-32 bg-accent-light rounded-lg flex items-center justify-center border border-brand-secondary/20 overflow-hidden">
                      <span className="text-brand-secondary/60 text-sm">Preview Coming Soon</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

              {/* Back to Home */}
              <div className="text-center mt-8">
                <Link to="/" className="inline-flex items-center text-brand-primary hover:text-brand-secondary transition-colors font-medium px-6 py-3 rounded-lg hover:bg-brand-primary/5">
                  <ArrowLeft size={18} className="mr-2" />
                  <span>Back to Home</span>
                </Link>
              </div>
          </SectionReveal>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudyCampusHiring;
