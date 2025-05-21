import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// Removed CaseStudySection and ElanThinking imports as their content will be integrated directly
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const CaseStudyCampusHiring = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main id="main-content" className="flex-grow container mx-auto px-4 py-12 md:py-16 bg-brand-light-gray-accent/50">
        <Link to="/" className="inline-flex items-center text-foreground/80 hover:text-foreground transition-colors mb-8 text-sm font-medium">
          <ArrowLeft size={16} className="mr-1.5" />
          <span>Back to Home</span>
        </Link>

        <article className="max-w-3xl mx-auto">
           {/* Meta Info - Stays at the top */}
           <Card isExpanded={true}> {/* Assuming Card is a custom component that doesn't need to be removed */}
             <CardContent>
               <div className="mb-4 flex items-center space-x-3">
                 <Badge className="bg-brand-badge-bg text-foreground px-2.5 py-1 text-xs font-medium rounded">Case Study</Badge>
                 <span className="text-xs text-foreground/60">Published April 2025</span>
               </div>

               <h1 className="text-5xl font-semibold mb-8 text-foreground leading-tight font-heading">
                 40% Faster Campus Hiring: Camu Campus Recruitment App
               </h1>

               <div className="aspect-video w-full bg-gray-200 rounded-lg overflow-hidden mb-12 shadow-lg">
                 <img
                   src="/Elanable-uploads/d194dd7b-4980-4860-bf9d-ece30b18149d.png"
                   alt="Camu Campus Recruitment App Interface"
                   className="w-full h-full object-cover"
                   loading="lazy" // Added lazy loading
                 />
               </div>

               {/* New Storytelling Structure Starts Here */}

               <section className="mb-16">
                 <h2 className="text-4xl font-semibold mb-6 text-foreground font-heading">Overview/Challenge</h2>
                 <p className="text-foreground/80 leading-relaxed text-lg mb-4">
                   <strong className="font-medium text-foreground">Project Name:</strong> Camu Campus Recruitment App (Shipped: April 2025).
                 </p>
                 <p className="text-foreground/80 leading-relaxed text-lg mb-4">
                   The core challenge was to streamline the campus recruitment process. Camu needed to boost engagement, improve placement rates, and drive revenue by leveraging its existing Student Information System (SIS).
                 </p>
                 <div className="text-foreground/80 text-lg leading-relaxed space-y-3">
                   <p><strong className="font-medium text-foreground">User Pain Points:</strong></p>
                   <ul className="list-disc pl-5 space-y-1.5">
                     <li><strong className="font-medium text-foreground">Recruiters:</strong> Struggled with multiple platform logins, manual data uploads, and limited visibility into student profiles.</li>
                     <li><strong className="font-medium text-foreground">Placement Officers:</strong> Juggled email threads, spreadsheets, and disjointed tools for approvals and scheduling.</li>
                     <li><strong className="font-medium text-foreground">Students:</strong> Faced repetitive form-filling and missed opportunities due to complexity.</li>
                   </ul>
                   <p className="mt-3">
                     The user and business need was a unified, efficient, and user-friendly platform that could integrate seamlessly with the existing SIS to simplify the recruitment workflow for all stakeholders. Camu, as a trusted SIS, aimed to leverage its student data and user base for this unified hiring ecosystem.
                   </p>
                 </div>
               </section>

               <section className="mb-16">
                 <h2 className="text-4xl font-semibold mb-6 text-foreground font-heading">My Role & Responsibilities</h2>
                 <p className="text-foreground/80 leading-relaxed text-lg mb-4">
                   <strong className="font-medium text-foreground">Role:</strong> Lead Interaction Designer.
                 </p>
                 <p className="text-foreground/80 leading-relaxed text-lg"><strong className="font-medium text-foreground">Key Responsibilities:</strong></p>
                 <ul className="list-disc pl-5 text-foreground/80 text-lg leading-relaxed space-y-1.5">
                   <li>User Research (interviews, surveys)</li>
                   <li>Persona Development</li>
                   <li>Interaction Design (wireframing, prototyping)</li>
                   <li>User Interface Design</li>
                   <li>Usability Testing and Iteration</li>
                   <li>Cross-functional collaboration with product managers and engineers</li>
                 </ul>
               </section>

               <section className="mb-16">
                 <h2 className="text-4xl font-semibold mb-6 text-foreground font-heading">The Process</h2>

                 <h3 className="text-3xl font-semibold mb-4 text-foreground font-heading">Discovery & Research</h3>
                 <p className="text-foreground/80 leading-relaxed text-lg mb-4">
                   The initial phase focused on understanding the users. Research identified three core user groups with distinct needs but a shared desire for simplicity and efficiency: Recruiters, Placement Officers, and Students.
                 </p>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                   <div className="border border-brand-light-gray-accent rounded-lg p-5">
                     <h4 className="font-semibold text-xl mb-2 text-foreground font-heading">Recruiters</h4>
                     <p className="text-foreground/80 text-lg leading-relaxed">Needed quick job posting, candidate targeting, and easy application tracking.</p>
                   </div>
                   <div className="border border-brand-light-gray-accent rounded-lg p-5">
                     <h4 className="font-semibold text-xl mb-2 text-foreground font-heading">Placement Officers</h4>
                     <p className="text-foreground/80 text-lg leading-relaxed">Required centralized policy management, interview scheduling, and reporting.</p>
                   </div>
                   <div className="border border-brand-light-gray-accent rounded-lg p-5">
                     <h4 className="font-semibold text-xl mb-2 text-foreground font-heading">Students</h4>
                     <p className="text-foreground/80 text-lg leading-relaxed">Wanted intuitive job discovery, simple applications, and progress tracking.</p>
                   </div>
                 </div>
                 <p className="text-foreground/80 leading-relaxed text-lg mb-4">
                   A user-centric approach involved interviews and surveys to identify key pain points and goals for these personas. This foundational research was critical in shaping the design direction.
                 </p>
                 <div className="aspect-video w-full bg-gray-200 dark:bg-gray-700 rounded-lg my-12 shadow-md flex items-center justify-center text-gray-500 dark:text-gray-400">
                   [Large Image Placeholder: User Personas / Journey Map]
                 </div>

                 <h3 className="text-3xl font-semibold mb-4 mt-12 text-foreground font-heading">Ideation & Design</h3>
                 <p className="text-foreground/80 leading-relaxed text-lg mb-4">
                   Design efforts began with wireframing and prototyping. Inspired by familiar platforms but tailored for university needs, a multi-step form approach was conceptualized, which balanced clarity and efficiency. This was a breakthrough, reducing form abandonment by 38% compared to a single-page concept explored initially.
                 </p>
                 <blockquote className="border-l-4 border-brand-light-gray-accent pl-6 italic text-foreground/70 my-8">
                   <p className="mb-2"><strong className="not-italic font-medium text-foreground/90 text-lg">Elan's Thinking: Finding the Right Flow</strong></p>
                   "The 'Quick Post' flop hurt... External tracking was another mess... I learned to let data and feedback guide me, even when it meant scrapping 'cool' ideas. Business goals loomed, but user trust was my north star."
                 </blockquote>
                 <p className="text-foreground/80 leading-relaxed text-lg mb-4">
                   The design for recruiters focused on a four-step job creation process (Basic Info, Position Details, Location/Time, Compensation) with AI assistance and autosave. For students, the design aimed for effortless discovery of jobs within their SIS feed and frictionless applications with pre-filled forms.
                 </p>
                 <div className="aspect-video w-full bg-gray-200 dark:bg-gray-700 rounded-lg my-12 shadow-md flex items-center justify-center text-gray-500 dark:text-gray-400">
                   [Large Image Placeholder: Wireframes / Prototypes]
                 </div>

                 <h3 className="text-3xl font-semibold mb-4 mt-12 text-foreground font-heading">Testing & Iteration</h3>
                 <p className="text-foreground/80 leading-relaxed text-lg mb-4">
                   Three key iterations refined the design based on user feedback. Usability testing was conducted to identify areas of confusion and opportunities for improvement.
                 </p>
                 <div className="space-y-6 mb-8">
                   <div className="border border-brand-light-gray-accent rounded-lg p-6">
                     <h4 className="font-semibold text-xl mb-3 text-foreground font-heading">Iteration 1: Form Structure</h4>
                     <p className="text-lg text-foreground/80 leading-relaxed"><strong className="font-medium text-foreground">Challenge:</strong> Single-page form overwhelmed users.</p>
                     <p className="text-lg text-foreground/80 leading-relaxed"><strong className="font-medium text-foreground">Solution:</strong> Multi-step form with autosave, improving clarity and reducing cognitive load.</p>
                   </div>
                   <div className="border border-brand-light-gray-accent rounded-lg p-6">
                     <h4 className="font-semibold text-xl mb-3 text-foreground font-heading">Iteration 2: AI Autofill</h4>
                     <p className="text-lg text-foreground/80 leading-relaxed"><strong className="font-medium text-foreground">Challenge:</strong> User distrust of full automation for job posting details.</p>
                     <p className="text-lg text-foreground/80 leading-relaxed"><strong className="font-medium text-foreground">Solution:</strong> Implemented optional autofill with easy overrides, giving users control while still offering assistance.</p>
                   </div>
                   <div className="border border-brand-light-gray-accent rounded-lg p-6">
                     <h4 className="font-semibold text-xl mb-3 text-foreground font-heading">Iteration 3: External Tracking Links</h4>
                     <p className="text-lg text-foreground/80 leading-relaxed"><strong className="font-medium text-foreground">Challenge:</strong> Confusing popups and unclear messaging when users clicked on external application tracking links.</p>
                     <p className="text-lg text-foreground/80 leading-relaxed"><strong className="font-medium text-foreground">Solution:</strong> Simplified wording and provided clearer context for external links, improving user trust and understanding.</p>
                   </div>
                 </div>
                 <div className="aspect-video w-full bg-gray-200 dark:bg-gray-700 rounded-lg my-12 shadow-md flex items-center justify-center text-gray-500 dark:text-gray-400">
                   [Large Image Placeholder: Iteration Examples / UI Mockups]
                 </div>
               </section>

               <section className="mb-16">
                 <h2 className="text-4xl font-semibold mb-6 text-foreground font-heading">The Solution</h2>
                 <p className="text-foreground/80 leading-relaxed text-lg mb-6">
                   The final design delivered a seamless, data-driven campus recruitment app integrated within the Camu SIS. It provided distinct, intuitive flows for each user persona, addressing their specific needs while creating a cohesive ecosystem.
                 </p>

                 <div className="space-y-8">
                   <div>
                     <h3 className="text-3xl font-semibold mb-3 text-foreground font-heading">Recruiter Flow</h3>
                     <ul className="list-disc pl-5 text-foreground/80 text-lg leading-relaxed space-y-1.5">
                       <li><strong className="font-medium text-foreground">Seamless Access:</strong> Institutional credentials provide scoped login; trusted partners skip approvals.</li>
                       <li><strong className="font-medium text-foreground">Job Creation Made Simple:</strong> A four-step form guided users through Basic Info, Position Details, Location/Time, and Compensation, with AI assistance and autosave.</li>
                       <li><strong className="font-medium text-foreground">Leveraging SIS Data:</strong> Filters pull directly from the SIS, eliminating manual uploads for candidate targeting.</li>
                       <li><strong className="font-medium text-foreground">Approval & Tracking:</strong> Automated routing and a real-time dashboard replaced email chaos for job posting approvals and application tracking.</li>
                     </ul>
                   </div>

                   <div>
                     <h3 className="text-3xl font-semibold mb-3 text-foreground font-heading">Placement Officer Flow</h3>
                     <ul className="list-disc pl-5 text-foreground/80 text-lg leading-relaxed space-y-1.5">
                       <li><strong className="font-medium text-foreground">Centralized Management:</strong> A central job queue for overseeing all postings and approvals.</li>
                       <li><strong className="font-medium text-foreground">Integrated Scheduling:</strong> Tools to facilitate interview scheduling and coordination.</li>
                       <li><strong className="font-medium text-foreground">Reporting Dashboards:</strong> Data dashboards for insights into placement activities and success rates.</li>
                     </ul>
                   </div>

                   <div>
                     <h3 className="text-3xl font-semibold mb-3 text-foreground font-heading">Student Flow</h3>
                     <ul className="list-disc pl-5 text-foreground/80 text-lg leading-relaxed space-y-1.5">
                       <li><strong className="font-medium text-foreground">Effortless Discovery:</strong> Jobs appeared in the SIS feed with AI recommendations tailored to their profile.</li>
                       <li><strong className="font-medium text-foreground">Frictionless Applications:</strong> Pre-filled forms using SIS data halved application time.</li>
                       <li><strong className="font-medium text-foreground">Clear Next Steps:</strong> Easy interview scheduling and real-time status tracking for applications.</li>
                     </ul>
                   </div>
                 </div>
                 <div className="aspect-video w-full bg-gray-200 dark:bg-gray-700 rounded-lg my-12 shadow-md flex items-center justify-center text-gray-500 dark:text-gray-400">
                   [Large Image Placeholder: Final UI Screens / Key Flows]
                 </div>
               </section>

               <section className="mb-16">
                 <h2 className="text-4xl font-semibold mb-6 text-foreground font-heading">Impact/Results</h2>
                 <p className="text-foreground/80 leading-relaxed text-lg mb-6">
                   The redesigned Camu Campus Recruitment App delivered significant improvements across the board:
                 </p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                   <div className="border border-brand-light-gray-accent p-6 rounded-lg text-center">
                     <p className="text-5xl font-semibold text-foreground mb-1">30%</p>
                     <p className="text-foreground/80 text-lg leading-relaxed">Faster Time-to-Hire</p>
                   </div>
                   <div className="border border-brand-light-gray-accent p-6 rounded-lg text-center">
                     <p className="text-5xl font-semibold text-foreground mb-1">40%</p>
                     <p className="text-foreground/80 text-lg leading-relaxed">Reduced PO Workload</p>
                   </div>
                   <div className="border border-brand-light-gray-accent p-6 rounded-lg text-center">
                     <p className="text-5xl font-semibold text-foreground mb-1">25%</p>
                     <p className="text-foreground/80 text-lg leading-relaxed">Increased SIS Engagement</p>
                   </div>
                   <div className="border border-brand-light-gray-accent p-6 rounded-lg text-center">
                     <p className="text-5xl font-semibold text-foreground mb-1">$500K</p>
                     <p className="text-foreground/80 text-lg leading-relaxed">New Revenue Stream</p>
                   </div>
                 </div>
                 <p className="text-foreground/80 leading-relaxed text-lg mt-6">
                   These results demonstrate the app's success in streamlining recruitment, enhancing user experience, and delivering tangible business value.
                 </p>
               </section>

               <section className="mb-16">
                 <h2 className="text-4xl font-semibold mb-6 text-foreground font-heading">Learnings/Reflections</h2>
                 <p className="text-foreground/80 leading-relaxed text-lg mb-4">
                   The project underscored the importance of user-centric design and iterative development. Challenges like initial user resistance to AI autofill and confusion over external link tracking highlighted the need to prioritize user trust and clarity above all.
                 </p>
                 <blockquote className="border-l-4 border-brand-light-gray-accent pl-6 italic text-foreground/70 my-8">
                   <p className="mb-2"><strong className="not-italic font-medium text-foreground/90 text-lg">Elan's Thinking: Overcoming Challenges & Growth</strong></p>
                   "The 'Quick Post' flop hurt initially because it was an idea I was attached to. Similarly, the confusion around external tracking was a blind spot. These moments were crucial learning experiences. I learned to let data and user feedback be the ultimate guide, even when it meant scrapping 'cool' ideas or rethinking assumptions. Business goals loomed large, but maintaining user trust became my north star throughout the process. It’s not just about features; it's about how those features make users feel and whether they genuinely solve their problems."
                 </blockquote>
                 <p className="text-foreground/80 leading-relaxed text-lg mb-4">
                   Key takeaways include:
                 </p>
                 <ul className="list-disc pl-5 text-foreground/80 text-lg leading-relaxed space-y-1.5">
                   <li><strong className="font-medium text-foreground">Embrace User Feedback:</strong> Actively listen to users and be willing to pivot based on their input. Iteration is key to a successful product.</li>
                   <li><strong className="font-medium text-foreground">Balance Innovation with Usability:</strong> While AI and automation can be powerful, ensure they are implemented in a way that empowers users and builds trust, rather than creating confusion or frustration.</li>
                   <li><strong className="font-medium text-foreground">Clarity is Paramount:</strong> Especially with complex workflows, ensure that language, navigation, and system behaviors are clear and predictable.</li>
                 </ul>
                 <p className="text-foreground/80 leading-relaxed text-lg mt-4">
                   If I were to approach this project again, I would involve placement officers even more deeply in the early co-design phases for the approval workflows, potentially running more targeted prototype tests for that specific user journey.
                 </p>
               </section>

               {/* End of Case Study and Links - Stays at the bottom */}
               <div className="text-center mt-16">
                 <p className="text-lg text-foreground/80 mb-6">⭐ End of Case Study ⭐</p>
                 <div className="mb-8">
                   <h3 className="text-3xl font-semibold mb-3 text-foreground font-heading">Next Case Study</h3>
                   <Link to="/case-study/student-planner" className="text-brand-primary hover:underline font-medium text-lg">
                     Student Course Planner Redesign →
                   </Link>
                 </div>
                 <Link to="/" className="inline-flex items-center text-foreground/80 hover:text-foreground transition-colors text-sm font-medium">
                   <ArrowLeft size={16} className="mr-1.5" />
                   <span>Back to Portfolio</span>
                 </Link>
               </div>
             </CardContent>
           </Card>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudyCampusHiring;
