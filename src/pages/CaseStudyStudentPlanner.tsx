import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ElanThinking } from "@/components/CaseStudyAccordion"; // Removed CaseStudySection import
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const CaseStudyStudentPlanner = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-grow container mx-auto px-6 py-16 md:py-24 bg-brand-light-gray-accent/50">
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
                 <span className="text-xs text-foreground/60">Published May 2025</span> {/* Example date */}
               </div>

               <h1 className="text-5xl font-semibold mb-8 text-foreground leading-tight">
                 From Chaos to Clarity: Student Course Planner Redesign
               </h1>

               <div className="aspect-video w-full bg-gray-200 rounded-lg overflow-hidden mb-12 shadow-lg">
                 <img
                   src="/Elanable-uploads/78be9a59-8230-4ea5-b024-d96fd3cdd83e.png"
                   alt="Student Course Planner Interface"
                   className="w-full h-full object-cover"
                 />
               </div>

               {/* Using standard HTML sections with Tailwind prose classes for styling */}
               <section className="mb-16 md:mb-20 prose prose-lg prose-neutral dark:prose-invert max-w-none prose-headings:font-dm-serif prose-p:leading-relaxed prose-p:text-foreground/80 prose-strong:text-foreground prose-strong:font-medium prose-headings:text-foreground prose-h2:text-3xl prose-h2:md:text-4xl prose-h2:font-semibold prose-h3:text-xl prose-h3:font-semibold prose-li:my-1 prose-ul:pl-5">
                 <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-foreground">The Challenge: A Frustrated Student and a Clunky System</h2>
                 <p>
                   Elan, a Staff UX Designer at a forward-thinking edtech company, sat in a university focus group,
                   listening to students vent about their struggles with the outdated Student Course Planner. One student,
                   Priya, a part-time undergrad juggling a job, summed it up: "I spend hours cross-referencing courses,
                   and I still end up with conflicts. I just want something that fits my life!" Elan felt Priya's frustration
                   deeply—it echoed across the room. The planner was a bottleneck, overwhelming students with manual conflict checks,
                   poor visualization, and a disjointed flow from planning to registration. Administrators were swamped too,
                   fielding endless scheduling tickets. The business goals were clear: reduce bottlenecks by 60%, boost
                   schedule-to-cart conversions by 30%, and achieve a 40% adoption rate for a new AI-driven feature.
                   Elan knew it was time for a redesign, one that would bring empathy and innovation to the table.
                 </p>

                 {/* Style ElanThinking as blockquote */}
                 <blockquote className="border-l-4 border-brand-light-gray-accent pl-6 italic text-foreground/70 my-8">
                   <p className="mb-2"><strong className="not-italic font-sans font-medium text-foreground/90">Elan's Thinking: Identifying the Core Problem</strong></p>
                   "Sitting in that focus group, watching Priya's frustration, I realized we weren't just fixing a tool—we
                   were fixing a broken experience. The manual conflict checks were wasting hours of students' lives.
                   The poor visualization meant students couldn't 'see' their schedules easily. And the disconnected steps
                   between planning and registration? Pure friction. I kept thinking: how can we make this tool adapt to
                   students' lives, not force students to adapt to the tool?"
                 </blockquote>
               </section>

               <section className="mb-16 md:mb-20 prose prose-neutral dark:prose-invert max-w-none prose-headings:font-heading prose-p:leading-relaxed prose-p:text-foreground/80 prose-strong:text-foreground prose-strong:font-medium prose-headings:text-foreground prose-h2:text-3xl prose-h2:md:text-4xl prose-h2:font-semibold prose-h3:text-xl prose-h3:font-semibold prose-li:my-1 prose-ul:pl-5">
                 <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-foreground">Project Background: A Mission to Modernize</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg text-foreground/80">
                   <div className="space-y-4">
                     <p><strong>Project Name:</strong> Student Course Planner Redesign (AI Advisor Integration)</p>
                     <p><strong>Role:</strong> Staff UX Designer (Lead)</p>
                     <p><strong>Date Shipped:</strong> May 2025</p>
                     </div>

                   <div>
                     <h3 className="font-heading">Business Goals:</h3>
                     <ul>
                       <li>Reduce scheduling bottlenecks by 60%.</li>
                       <li>Increase schedule-to-cart conversions by 30%.</li>
                       <li>Achieve 40% adoption of AI-driven recommendations.</li>
                     </ul>
                   </div>
                 </div>

                 <p className="mt-6">
                   The existing planner, used by universities like Case Western Reserve, was a relic—students like Priya struggled
                   with its rigid structure, and administrators were bogged down by support requests. Elan's mission was to modernize
                   the tool, integrating an AI Advisor to deliver personalized schedules while keeping students in control.
                   The stakes were high, but Elan was ready to dive in.
                 </p>
               </section>

               <section className="mb-16 md:mb-20 prose prose-neutral dark:prose-invert max-w-none prose-headings:font-heading prose-p:leading-relaxed prose-p:text-foreground/80 prose-strong:text-foreground prose-strong:font-medium prose-headings:text-foreground prose-h2:text-2xl prose-h2:md:text-4xl prose-h2:font-semibold prose-h3:text-xl prose-h3:font-semibold prose-li:my-1 prose-ul:pl-5">
                 <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-foreground">Understanding the Users: Pain Points and Insights</h2>
                 <p>
                   Elan began with user research, conducting surveys and interviews with undergraduates and part-time working students.
                   The findings were stark: 75% felt overwhelmed, and 60% craved a simpler tool. Priya's story stood out—she needed a
                   schedule that avoided her work hours (1:00 PM–2:00 PM, Monday to Thursday) and prioritized morning classes. But the
                   planner offered no way to input such constraints easily, as seen in Attachment 1, where users could only add basic
                   busy times without nuanced preferences.
                 </p>

                 <div className="border border-brand-light-gray-accent rounded-lg p-6 my-6 not-prose">
                   <h3 className="text-xl font-semibold mb-4 text-foreground">Key Pain Points:</h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                     <div className="flex items-start"><div className="flex-shrink-0 w-5 h-5 text-foreground/50 mr-3 mt-1"><svg fill="currentColor" viewBox="0 0 20 20"> <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd"></path> </svg></div><div><h4 className="font-medium text-foreground">Manual Conflict Checks</h4><p className="text-foreground/80 text-sm leading-relaxed">Cross-referencing courses was tedious, with potential overlaps.</p></div></div>
                     <div className="flex items-start"><div className="flex-shrink-0 w-5 h-5 text-foreground/50 mr-3 mt-1"><svg fill="currentColor" viewBox="0 0 20 20"> <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path> </svg></div><div><h4 className="font-medium text-foreground">Overload</h4><p className="text-foreground/80 text-sm leading-relaxed">Constraints like work and time zones overwhelmed users.</p></div></div>
                     <div className="flex items-start"><div className="flex-shrink-0 w-5 h-5 text-foreground/50 mr-3 mt-1"><svg fill="currentColor" viewBox="0 0 20 20"> <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm4 9a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1zm0-4a1 1 0 011-1h4a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd"></path> </svg></div><div><h4 className="font-medium text-foreground">Poor Visualization</h4><p className="text-foreground/80 text-sm leading-relaxed">No intuitive way to see busy times or customize schedules.</p></div></div>
                     <div className="flex items-start"><div className="flex-shrink-0 w-5 h-5 text-foreground/50 mr-3 mt-1"><svg fill="currentColor" viewBox="0 0 20 20"> <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clipRule="evenodd"></path> </svg></div><div><h4 className="font-medium text-foreground">Disconnected Steps</h4><p className="text-foreground/80 text-sm leading-relaxed">Planning and registration felt separate, with no seamless handoff.</p></div></div>
112 |                    </div>
113 |                  </div>

                  <p>
                    Stakeholders—admins and advisors—wanted fewer tickets and better insights into student needs.
                    Elan saw an opportunity: an AI-powered planner that could suggest schedules while respecting user control.
                  </p>

                  <blockquote className="border-l-4 border-brand-light-gray-accent pl-6 italic text-foreground/70 my-8">
                    <p className="mb-2"><strong className="not-italic font-sans font-medium text-foreground/90">Elan's Thinking: Digging Deeper into User Needs</strong></p>
                   "Priya's story kept coming back to me—she wasn't just struggling with a tool; she was struggling to fit education
                   into her complex life. The data showed 75% of students felt overwhelmed, but the stories revealed why: rigid systems
                   that didn't bend to real life. I sketched scenarios: a student working night shifts, another taking care of family
                   mid-day, a third with back-to-back intensive labs needing breaks. Our system had to adapt to their lives, not force
                   standardization."
                 </blockquote>
               </section>
             </CardContent>
           </Card>

           {/* Placeholder for large image */}
           <div className="aspect-video w-full bg-gray-200 dark:bg-gray-700 rounded-lg my-12 shadow-md flex items-center justify-center text-gray-500 dark:text-gray-400">
             [Large Image Placeholder: User Research Insights / Affinity Mapping]
           </div>

           <section className="mb-16 md:mb-20 prose prose-neutral dark:prose-invert max-w-none prose-headings:font-heading prose-p:leading-relaxed prose-p:text-foreground/80 prose-strong:text-foreground prose-strong:font-medium prose-headings:text-foreground prose-h2:text-3xl prose-h2:md:text-4xl prose-h2:font-semibold prose-h3:text-lg prose-h3:font-semibold prose-li:my-1 prose-ul:pl-5">
             <h2 className="font-heading">The Solution: AI-Powered Scheduling with a Human Touch</h2>
             <p>
               Elan and the team reimagined the planner, focusing on three core principles:
             </p>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 not-prose">
                <div className="border border-brand-light-gray-accent rounded-lg p-5"><h3 className="font-heading text-lg mb-2 text-foreground">Flexibility</h3><p className="text-foreground/80 text-sm leading-relaxed">Allow students to input nuanced constraints, like work hours and preferred times.</p></div>
                <div className="border border-brand-light-gray-accent rounded-lg p-5"><h3 className="font-heading text-lg mb-2 text-foreground">Visualization</h3><p className="text-foreground/80 text-sm leading-relaxed">Offer a clear, intuitive calendar view that highlights conflicts and available options.</p></div>
                <div className="border border-brand-light-gray-accent rounded-lg p-5"><h3 className="font-heading text-lg mb-2 text-foreground">AI Integration</h3><p className="text-foreground/80 text-sm leading-relaxed">Use AI to suggest personalized schedules while keeping students in control.</p></div>
             </div>
             <p>
               The AI Advisor became the star, learning student preferences and suggesting schedules that fit their lives. 
               But Elan was careful to avoid a "black box" approach—students could override suggestions and customize their schedules.
             </p>
             <blockquote className="border-l-4 border-brand-light-gray-accent pl-6 italic text-foreground/70 my-8">
               <p className="mb-2"><strong className="not-italic font-sans font-medium text-foreground/90">Elan's Thinking: Balancing AI and User Control</strong></p>
               "AI was the key to personalization, but I didn't want to create a system that felt like a 'magic box.' Students 
               needed to understand why the AI was suggesting certain schedules and have the power to override those suggestions. 
               I sketched interfaces that showed the AI's reasoning—'This schedule avoids your work hours'—and made it easy to 
               tweak the AI's recommendations. It was about empowering students, not replacing them."
             </blockquote>
           </section>

           {/* Placeholder for large image */}
           <div className="aspect-video w-full bg-gray-200 dark:bg-gray-700 rounded-lg my-12 shadow-md flex items-center justify-center text-gray-500 dark:text-gray-400">
             [Large Image Placeholder: Solution Concepts / AI Interaction Model]
           </div>

           <section className="mb-10 md:mb-12 prose prose-neutral dark:prose-invert max-w-none prose-headings:font-heading prose-p:leading-relaxed prose-p:text-foreground/80 prose-strong:text-foreground prose-strong:font-medium prose-headings:text-foreground prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:font-semibold prose-h3:text-lg prose-h3:font-semibold prose-li:my-1 prose-ul:pl-5">
             <h2 className="font-heading">The Design Process: From Wireframes to Prototypes</h2>
              <p>
                Elan started with low-fidelity wireframes, focusing on the core flow: inputting constraints, viewing suggestions, 
                and registering for courses. The team then moved to high-fidelity prototypes, testing different calendar views and 
                AI suggestion interfaces.
              </p>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 not-prose">
                <div className="border border-brand-light-gray-accent rounded-lg p-6">
                  <h3 className="font-heading text-lg mb-2 text-foreground">Wireframes</h3>
                  <p className="text-foreground/80 text-sm leading-relaxed">Focused on the core flow: inputting constraints, viewing suggestions, and registering for courses.</p>
                </div>
                <div className="border border-brand-light-gray-accent rounded-lg p-6">
                  <h3 className="font-heading text-lg mb-2 text-foreground">Prototypes</h3>
                  <p className="text-foreground/80 text-sm leading-relaxed">Tested different calendar views and AI suggestion interfaces.</p>
                </div>
             </div>
              <p>
                Usability testing revealed that students loved the AI suggestions but wanted more control over the calendar view. 
                Elan added filters for course types and instructors, allowing students to fine-tune their schedules.
              </p>
             <blockquote className="border-l-4 border-brand-light-gray-accent pl-6 italic text-foreground/70 my-8">
                <p className="mb-2"><strong className="not-italic font-sans font-medium text-foreground/90">Elan's Thinking: Iterating Based on User Feedback</strong></p>
               "Usability testing was brutal but essential. Students loved the AI suggestions, but they also wanted to 'zoom in' 
               on the calendar and filter courses by type and instructor. I realized I had over-engineered the AI and under-engineered 
               the basic calendar view. It was a humbling lesson: AI is powerful, but it's not a substitute for a solid foundation."
             </blockquote>
           </section>

           {/* Placeholder for large image */}
           <div className="aspect-video w-full bg-gray-200 dark:bg-gray-700 rounded-lg my-12 shadow-md flex items-center justify-center text-gray-500 dark:text-gray-400">
             [Large Image Placeholder: Wireframes / Prototypes / Usability Testing Feedback]
           </div>

           <section className="mb-16 md:mb-20 prose prose-neutral dark:prose-invert max-w-none prose-headings:font-heading prose-p:leading-relaxed prose-p:text-foreground/80 prose-strong:text-foreground prose-strong:font-medium prose-headings:text-foreground prose-h2:text-3xl prose-h2:md:text-4xl prose-h2:font-semibold prose-h3:text-lg prose-h3:font-semibold prose-li:my-1 prose-ul:pl-5">
             <h2 className="font-heading">Lessons Learned: Empathy, Iteration, and the Power of AI</h2>
             <p>
               Elan walked away with three key lessons:
             </p>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12 not-prose">
                <div className="border border-brand-light-gray-accent rounded-lg p-6">
                  <h3 className="font-heading text-xl mb-2 text-foreground">Empathy</h3>
                  <p className="text-foreground/80 text-sm leading-relaxed">Start with a deep understanding of user needs and pain points.</p>
                </div>
                <div className="border border-brand-light-gray-accent rounded-lg p-6">
                  <h3 className="font-heading text-xl mb-2 text-foreground">Iteration</h3>
                  <p className="text-foreground/80 text-sm leading-relaxed">Test and iterate based on user feedback.</p>
                </div>
                <div className="border border-brand-light-gray-accent rounded-lg p-6">
                  <h3 className="font-heading text-xl mb-2 text-foreground">AI Power</h3>
                  <p className="text-foreground/80 text-sm leading-relaxed">Use AI to personalize experiences, but keep users in control.</p>
                </div>
             </div>
             <p>
               The Student Course Planner redesign had not only improved the scheduling experience but had also reinforced 
               the importance of user-centered design.
             </p>
             <blockquote className="border-l-4 border-brand-light-gray-accent pl-6 italic text-foreground/70 my-8">
                <p className="mb-2"><strong className="not-italic font-sans font-medium text-foreground/90">Elan's Thinking: The Bigger Picture</strong></p>
               "This project taught me that UX design is more than just a job—it's a chance to make a positive impact on the world. 
               By understanding people's struggles and creating solutions that make their lives a little easier, we can create 
               a better future for everyone."
             </blockquote>
           </section>

           
           <div className="text-center mt-16">
             <p className="text-lg text-foreground/80 mb-6">⭐ End of Case Study ⭐</p> {/* Increased margin */}

             {/* Link to the other case study */}
             <div className="mb-8"> {/* Added margin bottom */}
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
         </article>
       </main>
       
       <Footer />
    </div>
  );
};

export default CaseStudyStudentPlanner;
