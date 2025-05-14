import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ElanThinking, CaseStudySection } from "@/components/CaseStudyAccordion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const CaseStudyCampusHiring = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-12 md:py-16 bg-brand-light-gray-accent/50">
        <Link to="/" className="inline-flex items-center text-foreground/80 hover:text-foreground transition-colors mb-8 text-sm font-medium">
          <ArrowLeft size={16} className="mr-1.5" />
          <span>Back to Home</span>
        </Link>

        <article className="max-w-3xl mx-auto">
           {/* Meta Info */}
           <Card isExpanded={true}>
             <CardContent>
               <div className="mb-4 flex items-center space-x-3">
                 <Badge className="bg-brand-badge-bg text-foreground px-2.5 py-1 text-xs font-medium rounded">Case Study</Badge>
                 <span className="text-xs text-foreground/60">Published April 2025</span>
               </div>

               <h1 className="text-5xl font-semibold mb-8 text-foreground leading-tight">
                 40% Faster Campus Hiring: Camu Campus Recruitment App
               </h1>

               <div className="aspect-video w-full bg-gray-200 rounded-lg overflow-hidden mb-12 shadow-lg">
                 <img
                   src="/Elanable-uploads/d194dd7b-4980-4860-bf9d-ece30b18149d.png"
                   alt="Camu Campus Recruitment App Interface"
                   className="w-full h-full object-cover"
                 />
               </div>

               {/* Using standard HTML sections with Tailwind prose classes for styling */}
               <section className="mb-16">
                 <h2 className="text-4xl font-semibold mb-6 text-foreground">Project Background</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-foreground/80 text-lg leading-relaxed">
                   <div className="space-y-4">
                     <p><strong className="font-medium text-foreground">Project Name:</strong> Camu Campus Recruitment App</p>
                     <p><strong className="font-medium text-foreground">Role:</strong> Lead Interaction Designer</p>
                     <p><strong className="font-medium text-foreground">Date Shipped:</strong> April 2025</p>
                   </div>

                   <div>
                     <h3 className="font-semibold text-2xl mb-3 text-foreground">User Pain Points:</h3>
                     <ul className="space-y-2.5 list-disc pl-5">
                       <li><strong className="font-medium text-foreground">Recruiters:</strong> Struggled with multiple platform logins, manual data uploads, and limited visibility into student profiles.</li>
                       <li><strong className="font-medium text-foreground">Placement Officers:</strong> Juggled email threads, spreadsheets, and disjointed tools for approvals and scheduling.</li>
                       <li><strong className="font-medium text-foreground">Students:</strong> Faced repetitive form-filling and missed opportunities due to complexity.</li>
                     </ul>
                   </div>
                 </div>

                 <div className="mt-12">
                   <h3 className="font-semibold text-2xl mb-3 text-foreground">Business Problem:</h3>
                   <p className="text-foreground/80 leading-relaxed">
                     Camu needed to streamline recruitment to boost engagement, improve placement rates, and drive revenue, leveraging its SIS.
                   </p>
                 </div>

                 <div className="mt-12">
                   <h3 className="font-semibold text-2xl mb-3 text-foreground">Background Context:</h3>
                   <p className="text-foreground/80 leading-relaxed text-lg">
                     Camu, a trusted SIS, integrated recruitment, leveraging student data and its user base for a unified hiring ecosystem.
                   </p>
                 </div>
               </section>

               <section className="mb-16">
                 <h2 className="text-4xl font-semibold mb-6 text-foreground">Understanding the Users: Three Personas, One Mission</h2>
                 <p className="text-foreground/80 leading-relaxed mb-8 text-lg">
                   Research identified three core user groups with distinct needs but a shared desire for simplicity and efficiency:
                 </p>
                 {/* Restyled persona blocks */}
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                   <div className="border border-brand-light-gray-accent rounded-lg p-5">
                     <h3 className="font-semibold text-2xl mb-2 text-foreground">Recruiters</h3>
                     <p className="text-foreground/80 text-lg leading-relaxed">Needed quick job posting, candidate targeting, and easy application tracking.</p>
                   </div>
                   <div className="border border-brand-light-gray-accent rounded-lg p-5">
                     <h3 className="font-semibold text-2xl mb-2 text-foreground">Placement Officers</h3>
                     <p className="text-foreground/80 text-lg leading-relaxed">Required centralized policy management, interview scheduling, and reporting.</p>
                   </div>
                   <div className="border border-brand-light-gray-accent rounded-lg p-5">
                     <h3 className="font-semibold text-2xl mb-2 text-foreground">Students</h3>
                     <p className="text-foreground/80 text-lg leading-relaxed">Wanted intuitive job discovery, simple applications, and progress tracking.</p>
                   </div>
                 </div>
               </section>

               {/* Placeholder for large image */}
               <div className="aspect-video w-full bg-gray-200 dark:bg-gray-700 rounded-lg my-12 shadow-md flex items-center justify-center text-gray-500 dark:text-gray-400">
                 [Large Image Placeholder: User Personas / Journey Map]
               </div>

               <section className="mb-16">
                 <h2 className="text-4xl font-semibold mb-6 text-foreground">Design Process: Methods and Artifacts</h2>
                 <p className="text-foreground/80 leading-relaxed mb-8 text-lg">
                   A user-centric approach involved interviews, surveys, wireframing, prototyping, and usability testing.
                 </p>
                 {/* Example artifact block */}
                 <div className="border border-brand-light-gray-accent rounded-lg p-6 mb-6">
                   <h3 className="font-semibold text-2xl mb-3 text-foreground">User Research</h3>
                   <p className="text-foreground/80 leading-relaxed text-lg">Identified key pain points and goals through interviews and surveys.</p>
                 </div>
               </section>

               {/* Placeholder for large image */}
               <div className="aspect-video w-full bg-gray-200 dark:bg-gray-700 rounded-lg my-12 shadow-md flex items-center justify-center text-gray-500 dark:text-gray-400">
                 [Large Image Placeholder: Wireframes / Prototypes]
               </div>

               <section className="mb-16">
                 <h2 className="text-4xl font-semibold mb-6 text-foreground">The Breakthrough: A Unified, Familiar Flow</h2>
                 <p className="text-foreground/80 leading-relaxed mb-8 text-lg">
                   Inspired by familiar platforms but tailored for university needs, a multi-step form approach balanced clarity and efficiency, reducing form abandonment by 38% compared to a single-page concept.
                 </p>
                 {/* Restyled ElanThinking as blockquote */}
                  <blockquote className="border-l-4 border-brand-light-gray-accent pl-6 italic text-foreground/70 my-8">
                   <p className="mb-2"><strong className="not-italic font-medium text-foreground/90 text-lg">Elan's Thinking: Finding the Right Flow</strong></p>
                   "The 'Quick Post' flop hurt... External tracking was another mess... I learned to let data and feedback guide me, even when it meant scrapping 'cool' ideas. Business goals loomed, but user trust was my north star."
                 </blockquote>
               </section>

               <section className="mb-16">
                 <h2 className="text-4xl font-semibold mb-6 text-foreground">Iterative Design: Balancing Needs and Constraints</h2>
                 <p className="text-foreground/80 leading-relaxed mb-8 text-lg">
                   Three key iterations refined the design based on user feedback:
                 </p>
                 {/* Restyled iteration blocks */}
                 <div className="space-y-6">
                   <div className="border border-brand-light-gray-accent rounded-lg p-6">
                     <h3 className="font-semibold text-2xl mb-3 text-foreground">Iteration 1: Form Structure</h3>
                     <p className="text-lg text-foreground/80 leading-relaxed"><strong className="font-medium text-foreground">Challenge:</strong> Single-page form overwhelmed users. <strong className="font-medium text-foreground">Solution:</strong> Multi-step form with autosave.</p>
                   </div>
                   <div className="border border-brand-light-gray-accent rounded-lg p-6">
                     <h3 className="font-semibold text-2xl mb-3 text-foreground">Iteration 2: AI Autofill</h3>
                     <p className="text-lg text-foreground/80 leading-relaxed"><strong className="font-medium text-foreground">Challenge:</strong> User distrust of full automation. <strong className="font-medium text-foreground">Solution:</strong> Optional autofill with easy overrides.</p>
                   </div>
                   <div className="border border-brand-light-gray-accent rounded-lg p-6">
                     <h3 className="font-semibold text-2xl mb-3 text-foreground">Iteration 3: External Tracking</h3>
                     <p className="text-lg text-foreground/80 leading-relaxed"><strong className="font-medium text-foreground">Challenge:</strong> Confusing popups on external links. <strong className="font-medium text-foreground">Solution:</strong> Simplified wording and clearer context.</p>
                   </div>
                 </div>
               </section>

               {/* Placeholder for large image */}
               <div className="aspect-video w-full bg-gray-200 dark:bg-gray-700 rounded-lg my-12 shadow-md flex items-center justify-center text-gray-500 dark:text-gray-400">
                 [Large Image Placeholder: Iteration Examples / UI Mockups]
               </div>

               <section className="mb-16">
                 <h2 className="text-4xl font-semibold mb-6 text-foreground">The Recruiter's Journey: From Chaos to Control</h2>
                 <p className="text-foreground/80 leading-relaxed mb-8 text-lg">
                   The app provided an intuitive, data-driven experience:
                 </p>
                 {/* Restyled journey steps */}
                 <ol className="space-y-6 list-decimal list-inside marker:font-semibold marker:text-foreground">
                   <li className="border border-brand-light-gray-accent rounded-lg p-6">
                     <h3 className="font-semibold text-2xl mb-1 text-foreground inline">Seamless Access:</h3>
                     <p className="text-foreground/80 leading-relaxed inline text-lg"> Institutional credentials provide scoped login; trusted partners skip approvals.</p>
                   </li>
                   <li className="border border-brand-light-gray-accent rounded-lg p-6">
                     <h3 className="font-semibold text-2xl mb-3 text-foreground">Job Creation Made Simple:</h3>
                     <p className="text-foreground/80 mb-4 leading-relaxed text-lg">A four-step form guided users through Basic Info, Position Details, Location/Time, and Compensation, with AI assistance and autosave.</p>
                   </li>
                   <li className="border border-brand-light-gray-accent rounded-lg p-6">
                     <h3 className="font-semibold text-2xl mb-1 text-foreground inline">Leveraging SIS Data:</h3>
                     <p className="text-foreground/80 leading-relaxed inline text-lg"> Filters pull directly from the SIS, eliminating manual uploads.</p>
                   </li>
                   <li className="border border-brand-light-gray-accent rounded-lg p-6">
                     <h3 className="font-semibold text-2xl mb-1 text-foreground inline">Approval & Tracking:</h3>
                     <p className="text-foreground/80 leading-relaxed inline text-lg"> Automated routing and a real-time dashboard replaced email chaos.</p>
                   </li>
                 </ol>
               </section>

               <section className="mb-16">
                 <h2 className="text-4xl font-semibold mb-6 text-foreground">Design Process: Methods and Artifacts</h2>
                 <p className="text-foreground/80 leading-relaxed mb-8 text-lg">
                   A user-centric approach involved interviews, surveys, wireframing, prototyping, and usability testing.
                 </p>
                 {/* Example artifact block */}
                 <div className="border border-brand-light-gray-accent rounded-lg p-6 mb-6">
                   <h3 className="font-semibold text-2xl mb-3 text-foreground">User Research</h3>
                   <p className="text-foreground/80 leading-relaxed text-lg">Identified key pain points and goals through interviews and surveys.</p>
                 </div>
               </section>

               <section className="mb-16">
                 <h2 className="text-4xl font-semibold mb-6 text-foreground">The Student's Experience: Opportunity at Their Fingertips</h2>
                 <p className="text-foreground/80 leading-relaxed mb-8 text-lg">
                   A seamless, integrated job-hunting journey:
                 </p>
                 <div className="space-y-6">
                   <div className="border border-brand-light-gray-accent rounded-lg p-6">
                     <h3 className="font-semibold text-2xl mb-2 text-foreground">Effortless Discovery</h3>
                     <p className="text-foreground/80 leading-relaxed text-lg">Jobs appeared in the SIS feed with AI recommendations.</p>
                   </div>
                   <div className="border border-brand-light-gray-accent rounded-lg p-6">
                     <h3 className="font-semibold text-2xl mb-2 text-foreground">Frictionless Applications</h3>
                     <p className="text-foreground/80 leading-relaxed text-lg">Pre-filled forms using SIS data halved application time.</p>
                   </div>
                   <div className="border border-brand-light-gray-accent rounded-lg p-6">
                     <h3 className="font-semibold text-2xl mb-2 text-foreground">Clear Next Steps</h3>
                     <p className="text-foreground/80 leading-relaxed text-lg">Easy interview scheduling and real-time status tracking.</p>
                   </div>
                 </div>
               </section>

               <section className="mb-16">
                 <h2 className="text-4xl font-semibold mb-6 text-foreground">Final Design: A Seamless, Data-Driven Experience</h2>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                   <div className="border border-brand-light-gray-accent rounded-lg p-5">
                     <h3 className="font-semibold text-2xl mb-2 text-foreground">Recruiter Flow</h3>
                     <ul className="space-y-2 text-foreground/80 list-disc pl-5 text-lg">
                       <li>Four-step job creation</li>
                       <li>Real-time tracking</li>
                       <li>Automated approvals</li>
                     </ul>
                   </div>
                   <div className="border border-brand-light-gray-accent rounded-lg p-5">
                     <h3 className="font-semibold text-2xl mb-2 text-foreground">Placement Officer Flow</h3>
                     <ul className="space-y-2 text-foreground/80 list-disc pl-5 text-lg">
                       <li>Centralized job queue</li>
                       <li>Integrated scheduling</li>
                       <li>Data dashboards</li>
                     </ul>
                   </div>
                   <div className="border border-brand-light-gray-accent rounded-lg p-5">
                     <h3 className="font-semibold text-2xl mb-2 text-foreground">Student Flow</h3>
                     <ul className="space-y-2 text-foreground/80 list-disc pl-5 text-lg">
                       <li>Jobs in SIS dashboard</li>
                       <li>Pre-filled applications</li>
                       <li>Interview scheduling</li>
                     </ul>
                   </div>
                 </div>
               </section>

               {/* Placeholder for large image */}
               <div className="aspect-video w-full bg-gray-200 dark:bg-gray-700 rounded-lg my-12 shadow-md flex items-center justify-center text-gray-500 dark:text-gray-400">
                 [Large Image Placeholder: Final UI Screens / Key Flows]
               </div>

               <section className="mb-16">
                 <h2 className="text-4xl font-semibold mb-6 text-foreground">The Roadblocks: Grit and Growth</h2>
                 <p className="text-foreground/80 leading-relaxed mb-8 text-lg">
                   Challenges like user resistance to AI autofill and confusion over external link tracking highlighted the need to prioritize user trust and clarity.
                 </p>
                 {/* Restyled ElanThinking as blockquote */}
                  <blockquote className="border-l-4 border-brand-light-gray-accent pl-6 italic text-foreground/70 my-8">
                   <p className="mb-2"><strong className="not-italic font-medium text-foreground/90 text-lg">Elan's Thinking: Overcoming Challenges</strong></p>
                   "The 'Quick Post' flop hurt... External tracking was another mess... I learned to let data and feedback guide me, even when it meant scrapping 'cool' ideas. Business goals loomed, but user trust was my north star."
                 </blockquote>
               </section>

               <section className="mb-16">
                 <h2 className="text-4xl font-semibold mb-6 text-foreground">Results: Impact and Outcomes</h2>
                 {/* Restyled results display */}
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
                     <p className="text-foreground/80 text-lg leading-relaxed">New Revenue</p>
                   </div>
                 </div>
               </section>

               <div className="text-center mt-16">
                 <p className="text-lg text-foreground/80 mb-6">⭐ End of Case Study ⭐</p>
                  {/* Increased margin */}

                 {/* Link to the other case study */}
                 <div className="mb-8">
                    {/* Added margin bottom */}
                   <h3 className="text-3xl font-semibold mb-3 text-foreground">Next Case Study</h3>
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
