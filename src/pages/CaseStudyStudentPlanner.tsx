import React from "react";
import Header from "../components/layout/Header.tsx";
import Footer from "../components/layout/Footer.tsx";
// Removed ElanThinking import as blockquotes will be styled directly
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const CaseStudyStudentPlanner = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main id="main-content" className="flex-grow container mx-auto px-6 py-16 md:py-24 bg-brand-light-gray-accent/50">
        <Link to="/" className="inline-flex items-center text-foreground/80 hover:text-foreground transition-colors mb-8 text-sm font-medium">
          <ArrowLeft size={16} className="mr-1.5" />
          <span>Back to Home</span>
        </Link>
        
        <article className="max-w-3xl mx-auto">
           {/* Meta Info - Stays at the top */}
           <Card>
             <CardContent>
               <div className="mb-4 flex items-center space-x-3">
                 <Badge className="bg-secondary text-secondary-foreground px-2.5 py-1 text-xs font-medium rounded">Case Study</Badge>
                 <span className="text-xs text-foreground/60">Published May 2025</span>
               </div>

               <h1 className="text-5xl font-semibold mb-8 text-foreground leading-tight font-heading">
                 From Chaos to Clarity: Student Course Planner Redesign
               </h1>

               <div className="aspect-video w-full bg-gray-200 rounded-lg overflow-hidden mb-12 shadow-lg">
                 <img
                   src="/Elanable-uploads/78be9a59-8230-4ea5-b024-d96fd3cdd83e.png"
                   alt="Student Course Planner Interface"
                   className="w-full h-full object-cover"
                   loading="lazy" // Added lazy loading
                 />
               </div>

               {/* New Storytelling Structure Starts Here */}

               <section className="mb-16">
                 <h2 className="text-4xl font-semibold mb-6 text-foreground font-heading">Overview/Challenge</h2>
                 <p className="text-foreground/80 leading-relaxed text-lg mb-4">
                   <strong className="font-medium text-foreground">Project Name:</strong> Student Course Planner Redesign (AI Advisor Integration) (Shipped: May 2025).
                 </p>
                 <p className="text-foreground/80 leading-relaxed text-lg mb-4">
                   The existing Student Course Planner was outdated and a major source of frustration for students like Priya, a part-time undergrad juggling a job. She voiced a common sentiment: "I spend hours cross-referencing courses, and I still end up with conflicts. I just want something that fits my life!" The planner was a bottleneck, overwhelming students with manual conflict checks, poor visualization, and a disjointed flow from planning to registration. Administrators were also swamped with scheduling tickets.
                 </p>
                 <div className="text-foreground/80 text-lg leading-relaxed space-y-3">
                   <p><strong className="font-medium text-foreground">Business Goals:</strong></p>
                   <ul className="list-disc pl-5 space-y-1.5">
                     <li>Reduce scheduling bottlenecks by 60%.</li>
                     <li>Increase schedule-to-cart conversions by 30%.</li>
                     <li>Achieve 40% adoption of a new AI-driven recommendation feature.</li>
                   </ul>
                   <p className="mt-3"><strong className="font-medium text-foreground">User Pain Points included:</strong></p>
                   <ul className="list-disc pl-5 space-y-1.5">
                      <li>Manual conflict checks: Tedious cross-referencing with potential overlaps.</li>
                      <li>Cognitive Overload: Difficulty managing constraints like work hours and time zones.</li>
                      <li>Poor Visualization: No intuitive way to see busy times or customize schedules.</li>
                      <li>Disconnected Steps: Planning and registration felt separate, lacking a seamless handoff.</li>
                   </ul>
                   <p className="mt-3">
                     The mission was to modernize the tool, integrating an AI Advisor to deliver personalized schedules while keeping students in control, aiming to make the tool adapt to students' lives.
                   </p>
                 </div>
                  <blockquote className="border-l-4 border-brand-light-gray-accent pl-6 italic text-foreground/70 my-8">
                    <p className="mb-2"><strong className="not-italic font-sans font-medium text-foreground/90">Elan's Thinking: Identifying the Core Problem</strong></p>
                    "Sitting in that focus group, watching Priya's frustration, I realized we weren't just fixing a tool—we were fixing a broken experience. The manual conflict checks were wasting hours of students' lives. The poor visualization meant students couldn't 'see' their schedules easily. And the disconnected steps between planning and registration? Pure friction. I kept thinking: how can we make this tool adapt to students' lives, not force students to adapt to the tool?"
                  </blockquote>
               </section>

               <section className="mb-16">
                 <h2 className="text-4xl font-semibold mb-6 text-foreground font-heading">My Role & Responsibilities</h2>
                 <p className="text-foreground/80 leading-relaxed text-lg mb-4">
                   <strong className="font-medium text-foreground">Role:</strong> Staff UX Designer (Lead).
                 </p>
                 <p className="text-foreground/80 leading-relaxed text-lg"><strong className="font-medium text-foreground">Key Responsibilities:</strong></p>
                 <ul className="list-disc pl-5 text-foreground/80 text-lg leading-relaxed space-y-1.5">
                   <li>Leading User Research (focus groups, surveys, interviews)</li>
                   <li>Persona Development and Journey Mapping (e.g., Priya's story)</li>
                   <li>Defining UX Strategy for AI integration and personalization</li>
                   <li>Interaction Design (wireframing, prototyping from lo-fi to hi-fi)</li>
                   <li>User Interface Design with a focus on visualization and usability</li>
                   <li>Conducting and analyzing Usability Testing sessions</li>
                   <li>Iterating on designs based on user feedback and technical constraints</li>
                   <li>Collaborating with product management and engineering teams</li>
                 </ul>
               </section>

               <section className="mb-16">
                 <h2 className="text-4xl font-semibold mb-6 text-foreground font-heading">The Process</h2>

                 <h3 className="text-3xl font-semibold mb-4 text-foreground font-heading">Discovery & Research</h3>
                 <p className="text-foreground/80 leading-relaxed text-lg mb-4">
                   The process began with deep user research. Elan conducted surveys and interviews with undergraduates and part-time working students. The findings were stark: 75% felt overwhelmed by the existing planner, and 60% craved a simpler, more intuitive tool. Priya's story became a cornerstone persona; she needed a schedule that avoided her work hours (1:00 PM–2:00 PM, Monday to Thursday) and prioritized morning classes. The existing system offered no easy way to input such nuanced constraints. Stakeholders, including administrators and advisors, also desired fewer support tickets and better insights into student scheduling needs.
                 </p>
                 <div className="border border-brand-light-gray-accent rounded-lg p-6 my-6">
                   <h4 className="text-xl font-semibold mb-4 text-foreground font-heading">Key Pain Points Highlighted:</h4>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 text-foreground/80 text-base">
                     <div className="flex items-start"><div className="flex-shrink-0 w-5 h-5 text-primary mr-3 mt-1"><svg fill="currentColor" viewBox="0 0 20 20"> <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd"></path> </svg></div><div><strong className="font-medium text-foreground">Manual Conflict Checks:</strong> Tedious and error-prone.</div></div>
                     <div className="flex items-start"><div className="flex-shrink-0 w-5 h-5 text-primary mr-3 mt-1"><svg fill="currentColor" viewBox="0 0 20 20"> <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path> </svg></div><div><strong className="font-medium text-foreground">Cognitive Overload:</strong> Difficulty with constraints like work hours.</div></div>
                     <div className="flex items-start"><div className="flex-shrink-0 w-5 h-5 text-primary mr-3 mt-1"><svg fill="currentColor" viewBox="0 0 20 20"> <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm4 9a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1zm0-4a1 1 0 011-1h4a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd"></path> </svg></div><div><strong className="font-medium text-foreground">Poor Visualization:</strong> No clear way to see schedules or busy times.</div></div>
                     <div className="flex items-start"><div className="flex-shrink-0 w-5 h-5 text-primary mr-3 mt-1"><svg fill="currentColor" viewBox="0 0 20 20"> <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clipRule="evenodd"></path> </svg></div><div><strong className="font-medium text-foreground">Disconnected Steps:</strong> Planning and registration felt separate.</div></div>
                   </div>
                 </div>
                 <blockquote className="border-l-4 border-brand-light-gray-accent pl-6 italic text-foreground/70 my-8">
                    <p className="mb-2"><strong className="not-italic font-sans font-medium text-foreground/90">Elan's Thinking: Digging Deeper into User Needs</strong></p>
                   "Priya's story kept coming back to me—she wasn't just struggling with a tool; she was struggling to fit education into her complex life. The data showed 75% of students felt overwhelmed, but the stories revealed why: rigid systems that didn't bend to real life. I sketched scenarios: a student working night shifts, another taking care of family mid-day, a third with back-to-back intensive labs needing breaks. Our system had to adapt to their lives, not force standardization."
                 </blockquote>
                 <div className="aspect-video w-full bg-gray-200 dark:bg-gray-700 rounded-lg my-12 shadow-md flex items-center justify-center text-gray-500 dark:text-gray-400">
                   [Large Image Placeholder: User Research Insights / Affinity Mapping]
                 </div>

                 <h3 className="text-3xl font-semibold mb-4 mt-12 text-foreground font-heading">Ideation & Design</h3>
                 <p className="text-foreground/80 leading-relaxed text-lg mb-4">
                   The team reimagined the planner based on three core principles: <strong className="font-medium text-foreground">Flexibility</strong> (allowing nuanced constraints), <strong className="font-medium text-foreground">Visualization</strong> (clear calendar views), and <strong className="font-medium text-foreground">AI Integration</strong> (personalized suggestions with user control). Elan started with low-fidelity wireframes focusing on the core flow: inputting constraints, viewing AI-driven suggestions, customizing, and registering. The AI Advisor was envisioned as a key feature, learning student preferences to suggest optimal schedules. However, a crucial aspect was to avoid a "black box" approach—students needed to understand AI suggestions and retain the ability to override and customize.
                 </p>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                    <div className="border border-brand-light-gray-accent rounded-lg p-5"><h4 className="font-heading text-lg mb-2 text-foreground font-semibold">Flexibility</h4><p className="text-foreground/80 text-sm leading-relaxed">Allow students to input nuanced constraints, like work hours and preferred times.</p></div>
                    <div className="border border-brand-light-gray-accent rounded-lg p-5"><h4 className="font-heading text-lg mb-2 text-foreground font-semibold">Visualization</h4><p className="text-foreground/80 text-sm leading-relaxed">Offer a clear, intuitive calendar view that highlights conflicts and available options.</p></div>
                    <div className="border border-brand-light-gray-accent rounded-lg p-5"><h4 className="font-heading text-lg mb-2 text-foreground font-semibold">AI Integration</h4><p className="text-foreground/80 text-sm leading-relaxed">Use AI to suggest personalized schedules while keeping students in control.</p></div>
                 </div>
                 <blockquote className="border-l-4 border-brand-light-gray-accent pl-6 italic text-foreground/70 my-8">
                   <p className="mb-2"><strong className="not-italic font-sans font-medium text-foreground/90">Elan's Thinking: Balancing AI and User Control</strong></p>
                   "AI was the key to personalization, but I didn't want to create a system that felt like a 'magic box.' Students needed to understand why the AI was suggesting certain schedules and have the power to override those suggestions. I sketched interfaces that showed the AI's reasoning—'This schedule avoids your work hours'—and made it easy to tweak the AI's recommendations. It was about empowering students, not replacing them."
                 </blockquote>
                 <div className="aspect-video w-full bg-gray-200 dark:bg-gray-700 rounded-lg my-12 shadow-md flex items-center justify-center text-gray-500 dark:text-gray-400">
                   [Large Image Placeholder: Solution Concepts / AI Interaction Model]
                 </div>

                 <h3 className="text-3xl font-semibold mb-4 mt-12 text-foreground font-heading">Testing & Iteration</h3>
                 <p className="text-foreground/80 leading-relaxed text-lg mb-4">
                   The team progressed to high-fidelity prototypes, testing different calendar views and AI suggestion interfaces. Usability testing was crucial. It revealed that while students loved the AI suggestions, they also desired more granular control over the calendar view. This feedback led to the addition of filters for course types and instructors, allowing students to fine-tune their schedules more effectively.
                 </p>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                    <div className="border border-brand-light-gray-accent rounded-lg p-6">
                      <h4 className="font-heading text-lg mb-2 text-foreground font-semibold">Wireframes</h4>
                      <p className="text-foreground/80 text-sm leading-relaxed">Focused on the core flow: inputting constraints, viewing suggestions, and registering for courses.</p>
                    </div>
                    <div className="border border-brand-light-gray-accent rounded-lg p-6">
                      <h4 className="font-heading text-lg mb-2 text-foreground font-semibold">Prototypes</h4>
                      <p className="text-foreground/80 text-sm leading-relaxed">Tested different calendar views and AI suggestion interfaces, gathering critical user feedback.</p>
                    </div>
                 </div>
                 <blockquote className="border-l-4 border-brand-light-gray-accent pl-6 italic text-foreground/70 my-8">
                    <p className="mb-2"><strong className="not-italic font-sans font-medium text-foreground/90">Elan's Thinking: Iterating Based on User Feedback</strong></p>
                   "Usability testing was brutal but essential. Students loved the AI suggestions, but they also wanted to 'zoom in' on the calendar and filter courses by type and instructor. I realized I had over-engineered the AI and under-engineered the basic calendar view. It was a humbling lesson: AI is powerful, but it's not a substitute for a solid foundation."
                 </blockquote>
                 <div className="aspect-video w-full bg-gray-200 dark:bg-gray-700 rounded-lg my-12 shadow-md flex items-center justify-center text-gray-500 dark:text-gray-400">
                   [Large Image Placeholder: Wireframes / Prototypes / Usability Testing Feedback]
                 </div>
               </section>

               <section className="mb-16">
                 <h2 className="text-4xl font-semibold mb-6 text-foreground font-heading">The Solution</h2>
                 <p className="text-foreground/80 leading-relaxed text-lg mb-6">
                   The redesigned Student Course Planner aimed to provide a flexible, intuitive, and AI-assisted scheduling experience. Key features included:
                 </p>
                 <ul className="list-disc pl-5 text-foreground/80 text-lg leading-relaxed space-y-2 mb-8">
                    <li><strong className="font-medium text-foreground">Advanced Constraint Input:</strong> Allowing students to specify work hours, preferred class times (morning/afternoon), and other personal commitments.</li>
                    <li><strong className="font-medium text-foreground">AI-Powered Schedule Suggestions:</strong> The AI Advisor generates multiple schedule options based on student preferences, degree requirements, and course availability, clearly explaining the rationale behind suggestions.</li>
                    <li><strong className="font-medium text-foreground">Interactive Calendar View:</strong> A visual calendar that displays potential schedules, highlights conflicts, and allows direct manipulation and customization.</li>
                    <li><strong className="font-medium text-foreground">Filtering and Sorting:</strong> Options to filter courses by type, instructor, or department, and sort schedules by different criteria (e.g., fewest conflicts, preferred times).</li>
                    <li><strong className="font-medium text-foreground">Seamless Registration Flow:</strong> Once a schedule is finalized, a clear path to register for the selected courses directly from the planner.</li>
                    <li><strong className="font-medium text-foreground">User Control & Overrides:</strong> Maintaining student autonomy by allowing them to easily modify AI suggestions or build a schedule from scratch.</li>
                 </ul>
                 <div className="aspect-video w-full bg-gray-200 dark:bg-gray-700 rounded-lg my-12 shadow-md flex items-center justify-center text-gray-500 dark:text-gray-400">
                   [Large Image Placeholder: Final UI Mockups/Key Flows]
                 </div>
               </section>

               <section className="mb-16">
                 <h2 className="text-4xl font-semibold mb-6 text-foreground font-heading">Impact/Results</h2>
                 <p className="text-foreground/80 leading-relaxed text-lg mb-6">
                   While specific metrics post-launch are pending collection, the project targeted the following outcomes based on the business goals and usability improvements:
                 </p>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="border border-brand-light-gray-accent p-6 rounded-lg text-center">
                        <p className="text-4xl font-semibold text-foreground mb-1">60%</p>
                        <p className="text-foreground/80 text-base leading-relaxed">Targeted Reduction in Scheduling Bottlenecks</p>
                    </div>
                    <div className="border border-brand-light-gray-accent p-6 rounded-lg text-center">
                        <p className="text-4xl font-semibold text-foreground mb-1">30%</p>
                        <p className="text-foreground/80 text-base leading-relaxed">Targeted Increase in Schedule-to-Cart Conversions</p>
                    </div>
                    <div className="border border-brand-light-gray-accent p-6 rounded-lg text-center">
                        <p className="text-4xl font-semibold text-foreground mb-1">40%</p>
                        <p className="text-foreground/80 text-base leading-relaxed">Targeted Adoption of AI Recommendations</p>
                    </div>
                 </div>
                 <p className="text-foreground/80 leading-relaxed text-lg">
                   Qualitative feedback from usability testing indicated a significant improvement in user satisfaction, with students finding the new design more intuitive, less overwhelming, and better equipped to handle their complex scheduling needs.
                 </p>
               </section>

               <section className="mb-16">
                 <h2 className="text-4xl font-semibold mb-6 text-foreground font-heading">Learnings/Reflections</h2>
                 <p className="text-foreground/80 leading-relaxed text-lg mb-4">
                   The Student Course Planner redesign was a journey of balancing advanced AI capabilities with fundamental user needs for control and clarity. The key lessons learned were:
                 </p>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                    <div className="border border-brand-light-gray-accent rounded-lg p-6">
                      <h3 className="font-heading text-xl mb-2 text-foreground font-semibold">Empathy is Foundational</h3>
                      <p className="text-foreground/80 text-sm leading-relaxed">Deeply understanding user frustrations (like Priya's) is crucial to designing meaningful solutions.</p>
                    </div>
                    <div className="border border-brand-light-gray-accent rounded-lg p-6">
                      <h3 className="font-heading text-xl mb-2 text-foreground font-semibold">Iterate Relentlessly</h3>
                      <p className="text-foreground/80 text-sm leading-relaxed">User feedback, especially during usability testing, is invaluable. Be prepared to pivot and refine (e.g., enhancing calendar controls).</p>
                    </div>
                    <div className="border border-brand-light-gray-accent rounded-lg p-6">
                      <h3 className="font-heading text-xl mb-2 text-foreground font-semibold">AI Augments, Not Replaces</h3>
                      <p className="text-foreground/80 text-sm leading-relaxed">Use AI to empower users and simplify complex tasks, but always ensure they remain in control and understand the system's suggestions.</p>
                    </div>
                 </div>
                 <p className="text-foreground/80 leading-relaxed text-lg mb-4">
                   This project reinforced that even with advanced technology, the core principles of user-centered design—empathy, clarity, and iterative improvement—are paramount to success.
                 </p>
                 <blockquote className="border-l-4 border-brand-light-gray-accent pl-6 italic text-foreground/70 my-8">
                    <p className="mb-2"><strong className="not-italic font-sans font-medium text-foreground/90">Elan's Thinking: The Bigger Picture</strong></p>
                   "This project taught me that UX design is more than just a job—it's a chance to make a positive impact on the world. By understanding people's struggles and creating solutions that make their lives a little easier, we can create a better future for everyone."
                 </blockquote>
               </section>

               {/* End of Case Study and Links - Stays at the bottom */}
               <div className="text-center mt-16">
                 <p className="text-lg text-foreground/80 mb-6">⭐ End of Case Study ⭐</p>
                 <div className="mb-8">
                   <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">Next Case Study</h3>
                   <Link to="/case-study/campus-hiring" className="text-brand-primary hover:underline font-medium">
                     Camu Campus Recruitment App →
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

export default CaseStudyStudentPlanner;
