import React from "react";
import Header from "../components/layout/Header.tsx";
import Footer from "../components/layout/Footer.tsx";
// Removed CaseStudySection and ElanThinking imports as their content will be integrated directly
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import ZoomableImage from "@/components/ui/ZoomableImage";
import SectionReveal from '@/components/SectionReveal'; // Import SectionReveal

const CaseStudyCampusHiring = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main id="main-content" className="flex-grow container mx-auto p-6 py-12 md:py-16 bg-brand-light-gray-accent/50">
        <Link to="/" className="inline-flex items-center text-foreground/80 hover:text-foreground transition-colors mb-8 text-sm font-medium">
          <ArrowLeft size={16} className="mr-1.5" />
          <span>Back to Home</span>
        </Link>

        <article className="max-w-7xl mx-auto">
           {/* Meta Info - Stays at the top */}
          <SectionReveal>
            <Card className="reveal">
              <CardContent>
                <div className="mb-4 flex items-center space-x-3 reveal">
                  <Badge variant="brand">Case Study</Badge>
                  <span className="text-xs text-foreground/60">Published April 2025</span>
                </div>

                <h1 className="text-5xl font-semibold mb-8 text-foreground leading-tight font-heading reveal">
                  40% Faster Campus Hiring: Camu Campus Recruitment App
                </h1>

                <div className="w-full bg-gray-200 rounded-lg overflow-hidden mb-12 shadow-lg reveal">
                  <ZoomableImage
                    src="/Elanable-uploads/d194dd7b-4980-4860-bf9d-ece30b18149d.png"
                    alt="Camu Campus Recruitment App Interface"
                    className="aspect-video"
                  />
                </div>
              </CardContent>
            </Card>
          </SectionReveal>

            {/* REVISED Overview/Challenge START */}
            <SectionReveal>
              <section className="mb-16 reveal">
                <h2 className="text-4xl font-semibold mb-6 text-foreground font-heading reveal">Overview/Challenge</h2>
                <p className="text-foreground/80 leading-relaxed text-lg mb-4 reveal">
                  <strong className="font-medium text-foreground">Project Name:</strong> Camu Campus Recruitment App (Shipped: April 2025).
                </p>
                <p className="text-foreground/80 leading-relaxed text-lg mb-4 reveal">
                  The core challenge was the significant friction and inefficiency in Camu's existing campus recruitment model, impacting three critical user journeys. Camu needed to boost engagement, improve placement rates, and drive revenue by leveraging its Student Information System (SIS), but the current system created obstacles for all key stakeholders:
                </p>
                <div className="text-foreground/80 text-lg leading-relaxed space-y-3 reveal">
                  <p className="reveal"><strong className="font-medium text-foreground">User Pain Points Along Critical Paths:</strong></p>
                  <ul className="list-disc pl-5 space-y-1.5 reveal">
                    <li className="reveal"><strong className="font-medium text-foreground">Recruiter's Journey (Posting & Candidate Sourcing):</strong> Recruiters struggled with a cumbersome job posting process, juggling multiple platform logins, manually uploading data, and lacking clear visibility into student profiles. This made it difficult to efficiently target opportunities and find qualified candidates.</li>
                    <li className="reveal"><strong className="font-medium text-foreground">Student's Journey (Discovery & Application):</strong> Students faced a frustrating experience with repetitive form-filling for each application and often missed relevant opportunities due to a complex and disjointed job discovery process.</li>
                    <li className="reveal"><strong className="font-medium text-foreground">Placement Officer's Journey (Management & Analytics):</strong> Placement Officers were mired in email threads and spreadsheets for approvals and scheduling. They lacked centralized tools for managing job postings and had no effective way to monitor recruitment analytics, hindering their ability to ensure successful placement outcomes.</li>
                  </ul>
                  <p className="mt-3 reveal">
                    The business and user need was a unified, efficient, and user-friendly platform built upon the existing SIS. This platform had to streamline these three critical red routes—Recruiter job posting and application management, Student job discovery and application, and Placement Officer management and oversight—to create a cohesive and effective hiring ecosystem for all stakeholders.
                  </p>
                </div>
              </section>
            </SectionReveal>
            {/* REVISED Overview/Challenge END */}

          <SectionReveal>
            <section className="mb-16 reveal">
              <h2 className="text-4xl font-semibold mb-6 text-foreground font-heading reveal">My Role & Responsibilities</h2>
              <p className="text-foreground/80 leading-relaxed text-lg mb-4 reveal">
                <strong className="font-medium text-foreground">Role:</strong> Lead Interaction Designer.
              </p>
              <p className="text-foreground/80 leading-relaxed text-lg reveal"><strong className="font-medium text-foreground">Key Responsibilities:</strong></p>
              <ul className="list-disc pl-5 text-foreground/80 text-lg leading-relaxed space-y-1.5 reveal">
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
            <section className="mb-16 reveal">
              <h2 className="text-4xl font-semibold mb-6 text-foreground font-heading reveal">The Process</h2>

              {/* Discovery & Research (Original Content) */}
              <h3 className="text-3xl font-semibold mb-4 text-foreground font-heading reveal">Discovery & Research</h3>
              <p className="text-foreground/80 leading-relaxed text-lg mb-4 reveal">
                The initial phase focused on understanding the users. Research identified three core user groups with distinct needs but a shared desire for simplicity and efficiency: Recruiters, Placement Officers, and Students.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 reveal">
                <div className="border border-brand-light-gray-accent rounded-lg p-5 reveal">
                  <h4 className="font-semibold text-xl mb-2 text-foreground font-heading">Recruiters</h4>
                  <p className="text-foreground/80 text-lg leading-relaxed">Needed quick job posting, candidate targeting, and easy application tracking.</p>
                </div>
                <div className="border border-brand-light-gray-accent rounded-lg p-5 reveal">
                  <h4 className="font-semibold text-xl mb-2 text-foreground font-heading">Placement Officers</h4>
                  <p className="text-foreground/80 text-lg leading-relaxed">Required centralized policy management, interview scheduling, and reporting.</p>
                </div>
                <div className="border border-brand-light-gray-accent rounded-lg p-5 reveal">
                  <h4 className="font-semibold text-xl mb-2 text-foreground font-heading">Students</h4>
                  <p className="text-foreground/80 text-lg leading-relaxed">Wanted intuitive job discovery, simple applications, and progress tracking.</p>
                </div>
              </div>
              <p className="text-foreground/80 leading-relaxed text-lg mb-4 reveal">
                A user-centric approach involved interviews and surveys to identify key pain points and goals for these personas. This foundational research was critical in shaping the design direction.
              </p>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-lg my-12 shadow-md overflow-hidden reveal">
                <ZoomableImage
                  src="/Elanable-uploads/user-personas.png"
                  alt="User Personas and Journey Map"
                  className="aspect-video"
                />
              </div>
              {/* End of Discovery & Research (Original Content) */}

              {/* REVISED Ideation & Design START */}
              <h3 className="text-3xl font-semibold mb-4 mt-12 text-foreground font-heading reveal">Ideation & Design</h3>
              <p className="text-foreground/80 leading-relaxed text-lg mb-4 reveal">
                Design efforts began with wireframing and prototyping, focusing on optimizing the critical red routes. For the <strong className="font-medium text-foreground">Recruiter's Journey</strong>, a multi-step job posting form was conceptualized. This approach, inspired by familiar platforms but tailored for university needs, balanced clarity and efficiency by breaking down the information required into logical chunks (Basic Info, Position Details, etc.). This was a breakthrough, reducing form abandonment by 38% compared to an initial single-page concept, directly easing the recruiter's path to posting targeted opportunities. For the <strong className="font-medium text-foreground">Student's Journey</strong>, this translated into clearer job information and easier application flows with pre-filled data from the SIS.
              </p>
              <blockquote className="border-l-4 border-brand-light-gray-accent pl-6 italic text-foreground/70 my-8 reveal">
                <p className="mb-2"><strong className="not-italic font-medium text-foreground/90 text-lg">Elan's Thinking: Systemic Solutions & User Advocacy</strong></p>
                <p className="mb-2">"The initial 'Quick Post' concept, while aiming for speed, failed because it didn't integrate well with the Placement Officer's approval workflow or provide enough detail for students—a classic systems thinking oversight. We realized optimizing one red route (recruiter posting) couldn't come at the expense of others. The multi-step form was a trade-off: slightly more steps for recruiters, but vastly improved data quality for student discovery and PO approvals. This structured data was also key for the AI matching features, a win-win for Camu and all user groups. Convincing stakeholders involved showcasing how this more deliberate recruiter input directly fueled more relevant student matches and streamlined PO oversight, reducing downstream friction for everyone. It was about advocating for a solution that, while requiring some upfront effort from one user group, created a more efficient and trustworthy ecosystem overall. For instance, while pre-filling student data offered immense convenience (a key student need), we built in clear review steps to ensure data accuracy, balancing speed with reliability—a crucial trade-off for maintaining trust."</p>
              </blockquote>
              <p className="text-foreground/80 leading-relaxed text-lg mb-4 reveal">
                The design for recruiters focused on this four-step job creation process with AI assistance and autosave. For students, the design aimed for effortless discovery of jobs within their SIS feed and frictionless applications with pre-filled forms. The <strong className="font-medium text-foreground">Placement Officer's Journey</strong> was enhanced through a centralized dashboard for approvals and analytics, directly fed by the structured data from the new recruiter and student flows.
              </p>
              {/* REVISED Ideation & Design END */}

              {/* ZoomableImage for wireframes (Original Content) */}
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-lg my-12 shadow-md overflow-hidden reveal">
                <ZoomableImage
                  src="/Elanable-uploads/wireframes.png"
                  alt="Wireframes and Prototypes"
                  className="aspect-video"
                />
              </div>

              {/* Testing & Iteration (Original Content) */}
              <h3 className="text-3xl font-semibold mb-4 mt-12 text-foreground font-heading reveal">Testing & Iteration</h3>
              <p className="text-foreground/80 leading-relaxed text-lg mb-4 reveal">
                Three key iterations refined the design based on user feedback. Usability testing was conducted to identify areas of confusion and opportunities for improvement.
              </p>
              <div className="space-y-6 mb-8 reveal">
                <div className="border border-brand-light-gray-accent rounded-lg p-6 reveal">
                  <h4 className="font-semibold text-xl mb-3 text-foreground font-heading">Iteration 1: Form Structure</h4>
                  <p className="text-lg text-foreground/80 leading-relaxed"><strong className="font-medium text-foreground">Challenge:</strong> Single-page form overwhelmed users.</p>
                  <p className="text-lg text-foreground/80 leading-relaxed"><strong className="font-medium text-foreground">Solution:</strong> Multi-step form with autosave, improving clarity and reducing cognitive load.</p>
                </div>
                <div className="border border-brand-light-gray-accent rounded-lg p-6 reveal">
                  <h4 className="font-semibold text-xl mb-3 text-foreground font-heading">Iteration 2: AI Autofill</h4>
                  <p className="text-lg text-foreground/80 leading-relaxed"><strong className="font-medium text-foreground">Challenge:</strong> User distrust of full automation for job posting details.</p>
                  <p className="text-lg text-foreground/80 leading-relaxed"><strong className="font-medium text-foreground">Solution:</strong> Implemented optional autofill with easy overrides, giving users control while still offering assistance.</p>
                </div>
                <div className="border border-brand-light-gray-accent rounded-lg p-6 reveal">
                  <h4 className="font-semibold text-xl mb-3 text-foreground font-heading">Iteration 3: External Tracking Links</h4>
                  <p className="text-lg text-foreground/80 leading-relaxed"><strong className="font-medium text-foreground">Challenge:</strong> Confusing popups and unclear messaging when users clicked on external application tracking links.</p>
                  <p className="text-lg text-foreground/80 leading-relaxed"><strong className="font-medium text-foreground">Solution:</strong> Simplified wording and provided clearer context for external links, improving user trust and understanding.</p>
                </div>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-lg my-12 shadow-md overflow-hidden reveal">
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
            <section className="mb-16 reveal">
              <h2 className="text-4xl font-semibold mb-6 text-foreground font-heading reveal">The Solution</h2>
              <p className="text-foreground/80 leading-relaxed text-lg mb-6 reveal">
                The final design delivered a seamless, data-driven campus recruitment app integrated within the Camu SIS. It provided distinct, intuitive flows for each user persona, directly addressing their critical red routes and creating a cohesive ecosystem.
              </p>
              <div className="space-y-8 reveal">
                <div className="reveal">
                  <h3 className="text-3xl font-semibold mb-3 text-foreground font-heading reveal">Recruiter Flow: Efficient Job Posting & Candidate Sourcing</h3>
                  <ul className="list-disc pl-5 text-foreground/80 text-lg leading-relaxed space-y-1.5 reveal">
                    <li className="reveal"><strong className="font-medium text-foreground">Seamless Access:</strong> Institutional credentials provide scoped login; trusted partners skip approvals, reducing login friction.</li>
                    <li className="reveal"><strong className="font-medium text-foreground">Simplified Job Creation:</strong> A guided four-step form (Basic Info, Position Details, Location/Time, Compensation) with AI assistance and autosave dramatically streamlined the process of posting targeted jobs.</li>
                    <li className="reveal"><strong className="font-medium text-foreground">Targeted Candidate Pools:</strong> Leveraging existing SIS data for filters eliminated manual uploads and enabled precise candidate targeting.</li>
                    <li className="reveal"><strong className="font-medium text-foreground">Centralized Application Management:</strong> A real-time dashboard for job posting approvals and application tracking replaced email chaos, allowing recruiters to efficiently manage incoming applications.</li>
                  </ul>
                </div>
                <div className="reveal">
                  <h3 className="text-3xl font-semibold mb-3 text-foreground font-heading reveal">Placement Officer Flow: Effective Management & Oversight</h3>
                  <ul className="list-disc pl-5 text-foreground/80 text-lg leading-relaxed space-y-1.5 reveal">
                    <li className="reveal"><strong className="font-medium text-foreground">Centralized Job Management:</strong> A dedicated job queue provided a clear overview of all postings, streamlining approval workflows.</li>
                    <li className="reveal"><strong className="font-medium text-foreground">Integrated Scheduling Tools:</strong> Facilitated coordination of interviews directly within the platform.</li>
                    <li className="reveal"><strong className="font-medium text-foreground">Actionable Analytics:</strong> Data dashboards offered insights into placement activities, success rates, and recruiter engagement, enabling data-driven decisions.</li>
                  </ul>
                </div>
                <div className="reveal">
                  <h3 className="text-3xl font-semibold mb-3 text-foreground font-heading reveal">Student Flow: Seamless Job Discovery & Application</h3>
                  <ul className="list-disc pl-5 text-foreground/80 text-lg leading-relaxed space-y-1.5 reveal">
                    <li className="reveal"><strong className="font-medium text-foreground">Effortless Job Discovery:</strong> Relevant jobs appeared directly in the SIS feed, augmented by AI recommendations tailored to student profiles and preferences.</li>
                    <li className="reveal"><strong className="font-medium text-foreground">Frictionless Applications:</strong> Pre-filled forms using SIS data significantly reduced application time and effort, minimizing drop-off.</li>
                    <li className="reveal"><strong className="font-medium text-foreground">Transparent Progress Tracking:</strong> Clear, easy-to-understand interview scheduling and real-time status updates for applications kept students informed.</li>
                  </ul>
                </div>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-lg my-12 shadow-md overflow-hidden reveal">
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
            <section className="mb-16 reveal">
              <h2 className="text-4xl font-semibold mb-6 text-foreground font-heading reveal">Impact/Results</h2>
              <p className="text-foreground/80 leading-relaxed text-lg mb-6 reveal">
                The redesigned Camu Campus Recruitment App delivered significant improvements across the board, directly enhancing the critical user journeys:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal">
                <div className="border border-brand-light-gray-accent p-6 rounded-lg text-center reveal">
                  <p className="text-5xl font-semibold text-foreground mb-1">30%</p>
                  <p className="text-foreground/80 text-lg leading-relaxed">Faster Time-to-Hire (Recruiter & Student Journey Improvement)</p>
                </div>
                <div className="border border-brand-light-gray-accent p-6 rounded-lg text-center reveal">
                  <p className="text-5xl font-semibold text-foreground mb-1">40%</p>
                  <p className="text-foreground/80 text-lg leading-relaxed">Reduced PO Workload (Placement Officer Journey Improvement)</p>
                </div>
                <div className="border border-brand-light-gray-accent p-6 rounded-lg text-center reveal">
                  <p className="text-5xl font-semibold text-foreground mb-1">25%</p>
                  <p className="text-foreground/80 text-lg leading-relaxed">Increased SIS Engagement (Student & Recruiter Journey Benefit)</p>
                </div>
                <div className="border border-brand-light-gray-accent p-6 rounded-lg text-center reveal">
                  <p className="text-5xl font-semibold text-foreground mb-1">$500K</p>
                  <p className="text-foreground/80 text-lg leading-relaxed">New Revenue Stream (Business Outcome from improved journeys)</p>
                </div>
              </div>
              <p className="text-foreground/80 leading-relaxed text-lg mt-6 reveal">
                These results demonstrate the app's success in streamlining the core recruitment red routes, enhancing overall user experience, and delivering tangible business value.
              </p>
            </section>
          </SectionReveal>
          {/* REVISED Impact/Results END */}

          {/* Learnings/Reflections (Original Content) */}
          <SectionReveal>
            <section className="mb-16 reveal">
              <h2 className="text-4xl font-semibold mb-6 text-foreground font-heading reveal">Learnings/Reflections</h2>
              <p className="text-foreground/80 leading-relaxed text-lg mb-4 reveal">
                The project underscored the importance of user-centric design and iterative development. Challenges like initial user resistance to AI autofill and confusion over external link tracking highlighted the need to prioritize user trust and clarity above all.
              </p>
              <blockquote className="border-l-4 border-brand-light-gray-accent pl-6 italic text-foreground/70 my-8 reveal">
                <p className="mb-2"><strong className="not-italic font-medium text-foreground/90 text-lg">Elan's Thinking: Overcoming Challenges & Growth</strong></p>
                "The 'Quick Post' flop hurt initially because it was an idea I was attached to. Similarly, the confusion around external tracking was a blind spot. These moments were crucial learning experiences. I learned to let data and user feedback be the ultimate guide, even when it meant scrapping 'cool' ideas or rethinking assumptions. Business goals loomed large, but maintaining user trust became my north star throughout the process. It's not just about features; it's about how those features make users feel and whether they genuinely solve their problems."
              </blockquote>
              <p className="text-foreground/80 leading-relaxed text-lg mb-4 reveal">
                Key takeaways include:
              </p>
              <ul className="list-disc pl-5 text-foreground/80 text-lg leading-relaxed space-y-1.5 reveal">
                <li className="reveal"><strong className="font-medium text-foreground">Embrace User Feedback:</strong> Actively listen to users and be willing to pivot based on their input. Iteration is key to a successful product.</li>
                <li className="reveal"><strong className="font-medium text-foreground">Balance Innovation with Usability:</strong> While AI and automation can be powerful, ensure they are implemented in a way that empowers users and builds trust, rather than creating confusion or frustration.</li>
                <li className="reveal"><strong className="font-medium text-foreground">Clarity is Paramount:</strong> Especially with complex workflows, ensure that language, navigation, and system behaviors are clear and predictable.</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed text-lg mt-4 reveal">
                If I were to approach this project again, I would involve placement officers even more deeply in the early co-design phases for the approval workflows, potentially running more targeted prototype tests for that specific user journey.
              </p>
            </section>
          </SectionReveal>
          {/* End of Learnings/Reflections (Original Content) */}

               {/* End of Case Study and Links - Stays at the bottom (Original Content) */}
          <SectionReveal>
            <div className="text-center mt-16 reveal">
              <p className="text-lg text-foreground/80 mb-6 reveal">⭐ End of Case Study ⭐</p>
              <div className="mb-8 reveal">
                <h3 className="text-3xl font-semibold mb-3 text-foreground font-heading">Next Case Study</h3>
                <Link to="/case-study/student-planner" className="text-brand-primary hover:underline font-medium text-lg">
                  Student Course Planner Redesign →
                </Link>
              </div>
              <Link to="/" className="inline-flex items-center text-foreground/80 hover:text-foreground transition-colors text-sm font-medium reveal">
                <ArrowLeft size={16} className="mr-1.5" />
                <span>Back to Portfolio</span>
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
