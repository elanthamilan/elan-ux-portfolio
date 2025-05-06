
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ElanThinking, CaseStudySection } from "@/components/CaseStudyAccordion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const CaseStudyStudentPlanner = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Subtle background for case study */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute w-full h-full bg-gradient-to-b from-white via-green-50/20 to-blue-50/10"></div>
        
        {/* Subtle grid pattern for depth */}
        <div 
          className="absolute inset-0 opacity-[0.01]"
          style={{
            backgroundImage: "linear-gradient(to right, #8E9196 1px, transparent 1px), linear-gradient(to bottom, #8E9196 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }}
          aria-hidden="true"
        ></div>
      </div>
      
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-green-700 hover:text-green-900 transition-colors mb-6">
          <ArrowLeft size={18} className="mr-2" />
          <span>Back to Home</span>
        </Link>
        
        <div className="bg-white/80 backdrop-blur-sm border border-green-100/50 rounded-xl p-6 md:p-10 shadow-sm mb-8">
          <Badge className="bg-green-100 text-green-800 mb-4">Case Study • 2021</Badge>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-green-800 to-green-600 bg-clip-text text-transparent">
            From Chaos to Clarity: Student Course Planner Redesign
          </h1>
          
          <p className="text-xl text-gray-700 mb-8 max-w-3xl">
            A Story-Driven UX Case Study: Redesigning the Student Course Planner with AI-Powered Innovation
          </p>
          
          <div className="aspect-video w-full bg-green-100/50 rounded-lg overflow-hidden mb-8">
            <img 
              src="/lovable-uploads/78be9a59-8230-4ea5-b024-d96fd3cdd83e.png" 
              alt="Student Course Planner Interface"
              className="w-full h-full object-cover"
            />
          </div>
          
          <hr className="my-8 border-green-100" />
          
          <CaseStudySection title="The Challenge: A Frustrated Student and a Clunky System">
            <p className="text-gray-700 mb-4">
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
            
            <ElanThinking id="challenge-thinking" title="Identifying the Core Problem">
              "Sitting in that focus group, watching Priya's frustration, I realized we weren't just fixing a tool—we 
              were fixing a broken experience. The manual conflict checks were wasting hours of students' lives. 
              The poor visualization meant students couldn't 'see' their schedules easily. And the disconnected steps 
              between planning and registration? Pure friction. I kept thinking: how can we make this tool adapt to 
              students' lives, not force students to adapt to the tool?"
            </ElanThinking>
          </CaseStudySection>
          
          <CaseStudySection title="Project Background: A Mission to Modernize">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-4">
                  <strong className="text-green-800">Project Name:</strong> Student Course Planner Redesign (AI Advisor Integration)
                </p>
                <p className="text-gray-700 mb-4">
                  <strong className="text-green-800">Role:</strong> Staff UX Designer (Lead)
                </p>
                <p className="text-gray-700 mb-4">
                  <strong className="text-green-800">Date Shipped:</strong> May 2025
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-3 text-green-800">Business Goals:</h3>
                <ul className="space-y-2 text-gray-700 list-disc pl-5">
                  <li>Reduce scheduling bottlenecks by 60%.</li>
                  <li>Increase schedule-to-cart conversions by 30%.</li>
                  <li>Achieve 40% adoption of AI-driven recommendations.</li>
                </ul>
              </div>
            </div>
            
            <p className="text-gray-700 mt-4">
              The existing planner, used by universities like Case Western Reserve, was a relic—students like Priya struggled 
              with its rigid structure, and administrators were bogged down by support requests. Elan's mission was to modernize 
              the tool, integrating an AI Advisor to deliver personalized schedules while keeping students in control. 
              The stakes were high, but Elan was ready to dive in.
            </p>
          </CaseStudySection>
          
          <CaseStudySection title="Understanding the Users: Pain Points and Insights">
            <p className="text-gray-700 mb-4">
              Elan began with user research, conducting surveys and interviews with undergraduates and part-time working students. 
              The findings were stark: 75% felt overwhelmed, and 60% craved a simpler tool. Priya's story stood out—she needed a 
              schedule that avoided her work hours (1:00 PM–2:00 PM, Monday to Thursday) and prioritized morning classes. But the 
              planner offered no way to input such constraints easily, as seen in Attachment 1, where users could only add basic 
              busy times without nuanced preferences.
            </p>
            
            <div className="bg-white/90 p-5 rounded-lg border border-green-100 shadow-sm mb-6">
              <h3 className="font-semibold text-lg mb-3 text-green-800">Key Pain Points:</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-500 mr-3" aria-hidden="true">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Manual Conflict Checks</h4>
                    <p className="text-gray-600 text-sm">
                      Cross-referencing courses like ENG234 (Composition II) was tedious, with potential overlaps.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-500 mr-3" aria-hidden="true">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Overload</h4>
                    <p className="text-gray-600 text-sm">
                      Constraints like work and time zones overwhelmed users.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-500 mr-3" aria-hidden="true">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm4 9a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1zm0-4a1 1 0 011-1h4a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Poor Visualization</h4>
                    <p className="text-gray-600 text-sm">
                      No intuitive way to see busy times or customize schedules.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-500 mr-3" aria-hidden="true">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Disconnected Steps</h4>
                    <p className="text-gray-600 text-sm">
                      Planning and registration felt separate, with no seamless handoff.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700">
              Stakeholders—admins and advisors—wanted fewer tickets and better insights into student needs. 
              Elan saw an opportunity: an AI-powered planner that could suggest schedules while respecting user control.
            </p>
            
            <ElanThinking id="user-understanding" title="Digging Deeper into User Needs">
              "Priya's story kept coming back to me—she wasn't just struggling with a tool; she was struggling to fit education 
              into her complex life. The data showed 75% of students felt overwhelmed, but the stories revealed why: rigid systems 
              that didn't bend to real life. I sketched scenarios: a student working night shifts, another taking care of family 
              mid-day, a third with back-to-back intensive labs needing breaks. Our system had to adapt to their lives, not force 
              standardization."
            </ElanThinking>
          </CaseStudySection>
          
          <CaseStudySection title="The Solution: AI-Powered Scheduling with a Human Touch">
            <p className="text-gray-700 mb-4">
              Elan and the team reimagined the planner, focusing on three core principles:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white/90 p-5 rounded-lg border border-green-100 shadow-sm">
                <h3 className="font-semibold text-lg mb-2 text-green-800">Flexibility</h3>
                <p className="text-gray-700 text-sm">
                  Allow students to input nuanced constraints, like work hours and preferred times.
                </p>
              </div>
              
              <div className="bg-white/90 p-5 rounded-lg border border-green-100 shadow-sm">
                <h3 className="font-semibold text-lg mb-2 text-green-800">Visualization</h3>
                <p className="text-gray-700 text-sm">
                  Offer a clear, intuitive calendar view that highlights conflicts and available options.
                </p>
              </div>
              
              <div className="bg-white/90 p-5 rounded-lg border border-green-100 shadow-sm">
                <h3 className="font-semibold text-lg mb-2 text-green-800">AI Integration</h3>
                <p className="text-gray-700 text-sm">
                  Use AI to suggest personalized schedules while keeping students in control.
                </p>
              </div>
            </div>
            
            <p className="text-gray-700">
              The AI Advisor became the star, learning student preferences and suggesting schedules that fit their lives. 
              But Elan was careful to avoid a "black box" approach—students could override suggestions and customize their schedules.
            </p>
            
            <ElanThinking id="solution-thinking" title="Balancing AI and User Control">
              "AI was the key to personalization, but I didn't want to create a system that felt like a 'magic box.' Students 
              needed to understand why the AI was suggesting certain schedules and have the power to override those suggestions. 
              I sketched interfaces that showed the AI's reasoning—'This schedule avoids your work hours'—and made it easy to 
              tweak the AI's recommendations. It was about empowering students, not replacing them."
            </ElanThinking>
          </CaseStudySection>
          
          <CaseStudySection title="The Design Process: From Wireframes to Prototypes">
            <p className="text-gray-700 mb-4">
              Elan started with low-fidelity wireframes, focusing on the core flow: inputting constraints, viewing suggestions, 
              and registering for courses. The team then moved to high-fidelity prototypes, testing different calendar views and 
              AI suggestion interfaces.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white/90 p-5 rounded-lg border border-green-100 shadow-sm">
                <h3 className="font-semibold text-lg mb-2 text-green-800">Wireframes</h3>
                <p className="text-gray-700 text-sm">
                  Focused on the core flow: inputting constraints, viewing suggestions, and registering for courses.
                </p>
              </div>
              
              <div className="bg-white/90 p-5 rounded-lg border border-green-100 shadow-sm">
                <h3 className="font-semibold text-lg mb-2 text-green-800">Prototypes</h3>
                <p className="text-gray-700 text-sm">
                  Tested different calendar views and AI suggestion interfaces.
                </p>
              </div>
            </div>
            
            <p className="text-gray-700">
              Usability testing revealed that students loved the AI suggestions but wanted more control over the calendar view. 
              Elan added filters for course types and instructors, allowing students to fine-tune their schedules.
            </p>
            
            <ElanThinking id="design-process" title="Iterating Based on User Feedback">
              "Usability testing was brutal but essential. Students loved the AI suggestions, but they also wanted to 'zoom in' 
              on the calendar and filter courses by type and instructor. I realized I had over-engineered the AI and under-engineered 
              the basic calendar view. It was a humbling lesson: AI is powerful, but it's not a substitute for a solid foundation."
            </ElanThinking>
          </CaseStudySection>
          
          <CaseStudySection title="The Results: A Win for Students and the Business">
            <p className="text-gray-700 mb-4">
              The redesigned Student Course Planner was a hit. Scheduling bottlenecks decreased by 60%, schedule-to-cart 
              conversions increased by 35%, and 45% of students adopted the AI Advisor. Priya, the student from the focus group, 
              sent Elan an email: "I finally have a schedule that works with my job! Thank you!"
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white/90 p-5 rounded-lg border border-green-100 shadow-sm">
                <h3 className="font-semibold text-lg mb-2 text-green-800">60% Reduction</h3>
                <p className="text-gray-700 text-sm">
                  Scheduling bottlenecks decreased by 60%.
                </p>
              </div>
              
              <div className="bg-white/90 p-5 rounded-lg border border-green-100 shadow-sm">
                <h3 className="font-semibold text-lg mb-2 text-green-800">35% Increase</h3>
                <p className="text-gray-700 text-sm">
                  Schedule-to-cart conversions increased by 35%.
                </p>
              </div>
              
              <div className="bg-white/90 p-5 rounded-lg border border-green-100 shadow-sm">
                <h3 className="font-semibold text-lg mb-2 text-green-800">45% Adoption</h3>
                <p className="text-gray-700 text-sm">
                  45% of students adopted the AI Advisor.
                </p>
              </div>
            </div>
            
            <p className="text-gray-700">
              Administrators reported fewer support tickets, and the university saw a boost in student satisfaction. 
              The AI-powered planner had transformed the scheduling experience, making it easier for students to balance 
              education with their lives.
            </p>
            
            <ElanThinking id="results-thinking" title="Measuring Success Beyond the Numbers">
              "The numbers were great, but Priya's email meant the most. We hadn't just met business goals; we had made a 
              real difference in students' lives. I realized that UX design isn't just about pixels and prototypes—it's about 
              empathy and impact. It's about understanding people's struggles and creating solutions that make their lives a little easier."
            </ElanThinking>
          </CaseStudySection>
          
          <CaseStudySection title="Lessons Learned: Empathy, Iteration, and the Power of AI">
            <p className="text-gray-700 mb-4">
              Elan walked away with three key lessons:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white/90 p-5 rounded-lg border border-green-100 shadow-sm">
                <h3 className="font-semibold text-lg mb-2 text-green-800">Empathy</h3>
                <p className="text-gray-700 text-sm">
                  Start with a deep understanding of user needs and pain points.
                </p>
              </div>
              
              <div className="bg-white/90 p-5 rounded-lg border border-green-100 shadow-sm">
                <h3 className="font-semibold text-lg mb-2 text-green-800">Iteration</h3>
                <p className="text-gray-700 text-sm">
                  Test and iterate based on user feedback.
                </p>
              </div>
              
              <div className="bg-white/90 p-5 rounded-lg border border-green-100 shadow-sm">
                <h3 className="font-semibold text-lg mb-2 text-green-800">AI Power</h3>
                <p className="text-gray-700 text-sm">
                  Use AI to personalize experiences, but keep users in control.
                </p>
              </div>
            </div>
            
            <p className="text-gray-700">
              The Student Course Planner redesign had not only improved the scheduling experience but had also reinforced 
              the importance of user-centered design.
            </p>
            
            <ElanThinking id="lessons-learned" title="The Bigger Picture">
              "This project taught me that UX design is more than just a job—it's a chance to make a positive impact on the world. 
              By understanding people's struggles and creating solutions that make their lives a little easier, we can create 
              a better future for everyone."
            </ElanThinking>
          </CaseStudySection>
          
          <div className="text-center mt-16">
            <p className="text-lg text-green-800 mb-2">⭐ End of Case Study ⭐</p>
            <Link to="/" className="inline-flex items-center text-green-700 hover:text-green-900 transition-colors">
              <ArrowLeft size={18} className="mr-2" />
              <span>Back to Portfolio</span>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CaseStudyStudentPlanner;
