import React from "react";
import Header from "../components/layout/Header.tsx";
import Footer from "../components/layout/Footer.tsx";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "../components/ui/badge.tsx";
// import ImageCarousel from "../components/ui/ImageCarousel.tsx"; // Replaced with BigImageCarousel
import BigImageCarousel from "../components/ui/BigImageCarousel.tsx";
import SectionReveal from '@/components/SectionReveal';

const placeholderImages = [
  { src: "/placeholder.svg", alt: "Placeholder Image 1 for carousel" },
  { src: "/placeholder.svg", alt: "Placeholder Image 2 for carousel" },
  { src: "/placeholder.svg", alt: "Placeholder Image 3 for carousel" },
];

const CaseStudyStudentPlanner = () => {
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
                <Badge className="bg-[#16325A] text-white px-3 py-1.5 text-sm font-medium rounded-md shadow-sm border border-[#16325A]">
                  Case Study
                </Badge>
                <Badge className="bg-[#177863]/15 text-[#177863] border-[#177863]/30 px-3 py-1.5 text-sm font-medium rounded-md border">
                  AI Integration
                </Badge>
                <Badge className="bg-[#F8F4F2] text-[#16325A] border-[#16325A]/25 px-3 py-1.5 text-sm font-medium rounded-md border">
                  EdTech
                </Badge>
                <span className="text-sm text-foreground/70 ml-auto">Published May 2025</span>
              </div>

              {/* Main title with enhanced typography */}
              <h1 className="text-4xl xs:text-5xl sm:text-6xl font-bold mb-6 text-foreground leading-tight font-heading">
                From Chaos to Clarity
              </h1>

              {/* Subtitle with better contrast */}
              <p className="text-xl xs:text-2xl text-foreground/80 mb-8 leading-relaxed font-medium">
                Introducing an AI-powered Student Course Planner to eliminate scheduling frustrations and empower students by transforming how they build their academic lives
              </p>

              {/* Key metrics in a clean grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 p-6 bg-gradient-to-br from-[#16325A]/8 to-[#177863]/8 rounded-2xl border border-[#16325A]/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-secondary mb-1">Staff UX</div>
                  <div className="text-sm text-foreground/70 uppercase tracking-wider">My Role</div>
                  <div className="text-sm text-foreground/60">Lead Designer</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-primary mb-1">60% faster</div>
                  <div className="text-sm text-foreground/70 uppercase tracking-wider">Target</div>
                  <div className="text-sm text-foreground/60">Scheduling efficiency</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-tertiary mb-1">40% adoption</div>
                  <div className="text-sm text-foreground/70 uppercase tracking-wider">Goal</div>
                  <div className="text-sm text-foreground/60">AI recommendations</div>
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* Hero Image Section */}
          <SectionReveal>
            <div className="reveal w-full bg-card rounded-3xl overflow-hidden shadow-xl border border-brand-secondary/10">
              <BigImageCarousel
                images={[
                  { src: "/Elanable-uploads/78be9a59-8230-4ea5-b024-d96fd3cdd83e.png", alt: "Student Course Planner AI Advisor Interface" },
                  { src: "/Elanable-uploads/Geninfy.jpg", alt: "AI Recommendation Engine" },
                  { svgPlaceholder: true, alt: "Calendar Visualization System" }
                ]}
              />
            </div>
          </SectionReveal>

               {/* New Storytelling Structure Starts Here */}
            {/* Standard sections below hero image will retain their original padding and styling */}
          <SectionReveal>
            {/* Responsive padding: px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8. Adjusted mb. */}
            <section className="mb-12 xs:mb-16 reveal px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-gradient-to-br from-[#16325A]/6 to-[#16325A]/3 shadow-lg border border-[#16325A]/20">
               {/* Adaptive Typography for H2: text-2xl xs:text-3xl sm:text-4xl. Adjusted mb. */}
              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-semibold mb-4 xs:mb-6 text-brand-secondary font-heading reveal">Overview/Challenge</h2>
              <p className="text-foreground leading-relaxed text-base xs:text-lg mb-3 xs:mb-4 reveal">
                <strong className="font-medium text-foreground">Project Name:</strong> Student Course Planner Redesign (AI Advisor Integration) (Shipped: May 2025).
              </p>
              <p className="text-foreground leading-relaxed text-base xs:text-lg mb-3 xs:mb-4 reveal">
                The existing Student Course Planner was outdated and a major source of frustration for students like Priya, a part-time undergrad juggling a job. She voiced a common sentiment: "I spend hours cross-referencing courses, and I still end up with conflicts. I just want something that fits my life!" The planner was a bottleneck, overwhelming students with manual conflict checks, poor visualization, and a disjointed flow from planning to registration. Administrators were also swamped with scheduling tickets.
              </p>
              <div className="text-foreground text-base xs:text-lg leading-relaxed space-y-2.5 xs:space-y-3 reveal">
                <p className="reveal"><strong className="font-medium text-foreground">Business Goals:</strong></p>
                <ul className="list-disc pl-4 xs:pl-5 space-y-1 xs:space-y-1.5 reveal"> {/* Adjusted padding and spacing */}
                  <li className="reveal">Reduce scheduling bottlenecks by 60%.</li>
                  <li className="reveal">Increase schedule-to-cart conversions by 30%.</li>
                  <li className="reveal">Achieve 40% adoption of a new AI-driven recommendation feature.</li>
                </ul>
                <p className="mt-2.5 xs:mt-3 reveal"><strong className="font-medium text-foreground">User Pain Points included:</strong></p>
                <ul className="list-disc pl-4 xs:pl-5 space-y-1 xs:space-y-1.5 reveal">
                  <li className="reveal">Manual conflict checks: Tedious cross-referencing with potential overlaps.</li>
                  <li className="reveal">Cognitive Overload: Difficulty managing constraints like work hours and time zones.</li>
                  <li className="reveal">Poor Visualization: No intuitive way to see busy times or customize schedules.</li>
                  <li className="reveal">Disconnected Steps: Planning and registration felt separate, lacking a seamless handoff.</li>
                </ul>
                <p className="mt-2.5 xs:mt-3 reveal">
                  The mission was to modernize the tool, integrating an AI Advisor to deliver personalized schedules while keeping students in control, aiming to make the tool adapt to students' lives.
                </p>
              </div>
              {/* Responsive padding and margin for blockquote */}
              <blockquote className="border-l-4 border-brand-secondary/50 pl-3 xs:pl-4 sm:pl-6 italic text-foreground/80 my-6 xs:my-8 bg-white p-3 xs:p-4 rounded-r-lg shadow-sm reveal">
                <p className="mb-1.5 xs:mb-2"><strong className="not-italic font-sans font-medium text-brand-secondary text-base xs:text-lg">Elan's Thinking: Identifying the Core Problem</strong></p>
                <p className="text-foreground text-sm xs:text-base">"Sitting in that focus group, watching Priya's frustration, I realized we weren't just fixing a tool—we were fixing a broken experience. The manual conflict checks were wasting hours of students' lives. The poor visualization meant students couldn't 'see' their schedules easily. And the disconnected steps between planning and registration? Pure friction. I kept thinking: how can we make this tool adapt to students' lives, not force students to adapt to the tool?"</p>
              </blockquote>
            </section>
          </SectionReveal>

          <SectionReveal>
            {/* Responsive padding and mb. */}
            <section className="mb-12 xs:mb-16 reveal px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-gradient-to-br from-[#177863]/6 to-[#177863]/3 shadow-lg border border-[#177863]/20">
              {/* Adaptive Typography for H2. Adjusted mb. */}
              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-semibold mb-4 xs:mb-6 text-brand-primary font-heading reveal">My Role & Responsibilities</h2>
              <p className="text-foreground leading-relaxed text-base xs:text-lg mb-3 xs:mb-4 reveal">
                <strong className="font-medium text-foreground">Role:</strong> Staff UX Designer (Lead).
              </p>
              <p className="text-foreground leading-relaxed text-base xs:text-lg reveal"><strong className="font-medium text-foreground">Key Responsibilities:</strong></p>
              <ul className="list-disc pl-4 xs:pl-5 text-foreground text-base xs:text-lg leading-relaxed space-y-1 xs:space-y-1.5 reveal">
                <li className="reveal">Leading User Research (focus groups, surveys, interviews)</li>
                <li className="reveal">Persona Development and Journey Mapping (e.g., Priya's story)</li>
                <li className="reveal">Defining UX Strategy for AI integration and personalization</li>
                <li className="reveal">Interaction Design (wireframing, prototyping from lo-fi to hi-fi)</li>
                <li className="reveal">User Interface Design with a focus on visualization and usability</li>
                <li className="reveal">Conducting and analyzing Usability Testing sessions</li>
                <li className="reveal">Iterating on designs based on user feedback and technical constraints</li>
                <li className="reveal">Collaborating with product management and engineering teams</li>
              </ul>
            </section>
          </SectionReveal>

            {/* Responsive padding and mb. */}
          <SectionReveal>
            <section className="mb-12 xs:mb-16 reveal px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-gradient-to-br from-[#F8F4F2]/40 to-[#F8F4F2]/60 shadow-lg border border-[#177863]/15">
               {/* Adaptive Typography for H2. Adjusted mb. */}
              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-semibold mb-4 xs:mb-6 text-brand-tertiary font-heading reveal">The Process</h2>

              {/* Adaptive Typography for H3. Adjusted mb. */}
              <h3 className="text-xl xs:text-2xl sm:text-3xl font-semibold mb-3 xs:mb-4 text-brand-secondary font-heading reveal">Discovery & Research</h3>
              <p className="text-foreground leading-relaxed text-base xs:text-lg mb-3 xs:mb-4 reveal">
                The process began with deep user research. Elan conducted surveys and interviews with undergraduates and part-time working students. The findings were stark: 75% felt overwhelmed by the existing planner, and 60% craved a simpler, more intuitive tool. Priya's story became a cornerstone persona; she needed a schedule that avoided her work hours (1:00 PM–2:00 PM, Monday to Thursday) and prioritized morning classes. The existing system offered no easy way to input such nuanced constraints. Stakeholders, including administrators and advisors, also desired fewer support tickets and better insights into student scheduling needs.
              </p>
              {/* Responsive padding for info box container. Adjusted my. */}
              <div className="border border-brand-secondary/30 rounded-lg p-3 xs:p-4 sm:p-6 my-4 xs:my-6 reveal bg-white shadow-sm">
                {/* Adaptive Typography for H4. Adjusted mb. */}
                <h4 className="text-lg xs:text-xl font-semibold mb-2 xs:mb-3 text-brand-secondary font-heading reveal">Key Pain Points Highlighted:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 xs:gap-x-6 gap-y-2 xs:gap-y-3 text-foreground text-sm xs:text-base reveal"> {/* Adjusted gap and typography */}
                  <div className="flex items-start reveal"><div className="flex-shrink-0 w-4 h-4 xs:w-5 xs:h-5 text-brand-secondary mr-2 xs:mr-3 mt-0.5 xs:mt-1"><svg fill="currentColor" viewBox="0 0 20 20"> <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd"></path> </svg></div><div><strong className="font-medium text-foreground">Manual Conflict Checks:</strong> Tedious and error-prone.</div></div>
                  <div className="flex items-start reveal"><div className="flex-shrink-0 w-4 h-4 xs:w-5 xs:h-5 text-brand-secondary mr-2 xs:mr-3 mt-0.5 xs:mt-1"><svg fill="currentColor" viewBox="0 0 20 20"> <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path> </svg></div><div><strong className="font-medium text-foreground">Cognitive Overload:</strong> Difficulty with constraints like work hours.</div></div>
                  <div className="flex items-start reveal"><div className="flex-shrink-0 w-4 h-4 xs:w-5 xs:h-5 text-brand-secondary mr-2 xs:mr-3 mt-0.5 xs:mt-1"><svg fill="currentColor" viewBox="0 0 20 20"> <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm4 9a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1zm0-4a1 1 0 011-1h4a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd"></path> </svg></div><div><strong className="font-medium text-foreground">Poor Visualization:</strong> No clear way to see schedules or busy times.</div></div>
                  <div className="flex items-start reveal"><div className="flex-shrink-0 w-4 h-4 xs:w-5 xs:h-5 text-brand-secondary mr-2 xs:mr-3 mt-0.5 xs:mt-1"><svg fill="currentColor" viewBox="0 0 20 20"> <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clipRule="evenodd"></path> </svg></div><div><strong className="font-medium text-foreground">Disconnected Steps:</strong> Planning and registration felt separate.</div></div>
                </div>
              </div>
              {/* Responsive padding and margin for blockquote */}
              <blockquote className="border-l-4 border-brand-secondary/50 pl-3 xs:pl-4 sm:pl-6 italic text-foreground/80 my-6 xs:my-8 bg-white p-3 xs:p-4 rounded-r-lg shadow-sm reveal">
                <p className="mb-1.5 xs:mb-2"><strong className="not-italic font-sans font-medium text-brand-secondary text-base xs:text-lg">Elan's Thinking: Digging Deeper into User Needs</strong></p>
                <p className="text-foreground text-sm xs:text-base">"Priya's story kept coming back to me—she wasn't just struggling with a tool; she was struggling to fit education into her complex life. The data showed 75% of students felt overwhelmed, but the stories revealed why: rigid systems that didn't bend to real life. I sketched scenarios: a student working night shifts, another taking care of family mid-day, a third with back-to-back intensive labs needing breaks. Our system had to adapt to their lives, not force standardization."</p>
              </blockquote>
                 {/* Full-width carousel: Vertical padding py-4 xs:py-6. Adjusted my. */}
                 <div className="bg-accent-bg py-4 xs:py-6 rounded-lg my-8 xs:my-12 shadow-lg reveal border border-brand-secondary/20">
                   <BigImageCarousel images={placeholderImages.map((img, index) => ({...img, alt: `Conceptual placeholder for User research insights - Example ${index + 1}`}))} />
              </div>

              {/* Adaptive Typography for H3. Adjusted margins. */}
              <h3 className="text-xl xs:text-2xl sm:text-3xl font-semibold mb-3 xs:mb-4 mt-8 xs:mt-12 text-brand-primary font-heading reveal">Ideation & Design</h3>
              <p className="text-foreground leading-relaxed text-base xs:text-lg mb-3 xs:mb-4 reveal">
                The team reimagined the planner based on three core principles: <strong className="font-medium text-foreground">Flexibility</strong> (allowing nuanced constraints), <strong className="font-medium text-foreground">Visualization</strong> (clear calendar views), and <strong className="font-medium text-foreground">AI Integration</strong> (personalized suggestions with user control). Elan started with low-fidelity wireframes focusing on the core flow: inputting constraints, viewing AI-driven suggestions, customizing, and registering. The AI Advisor was envisioned as a key feature, learning student preferences to suggest optimal schedules. However, a crucial aspect was to avoid a "black box" approach—students needed to understand AI suggestions and retain the ability to override and customize.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xs:gap-6 my-6 xs:my-8 reveal"> {/* Adjusted gap and my */}
                 {/* Responsive padding and typography for principle boxes */}
                <div className="border border-brand-primary/30 rounded-lg p-3 xs:p-4 sm:p-5 reveal bg-white shadow-sm"><h4 className="font-heading text-base xs:text-lg mb-1 xs:mb-1.5 text-brand-primary font-semibold">Flexibility</h4><p className="text-foreground text-xs xs:text-sm leading-relaxed">Allow students to input nuanced constraints, like work hours and preferred times.</p></div>
                <div className="border border-brand-primary/30 rounded-lg p-3 xs:p-4 sm:p-5 reveal bg-white shadow-sm"><h4 className="font-heading text-base xs:text-lg mb-1 xs:mb-1.5 text-brand-primary font-semibold">Visualization</h4><p className="text-foreground text-xs xs:text-sm leading-relaxed">Offer a clear, intuitive calendar view that highlights conflicts and available options.</p></div>
                <div className="border border-brand-primary/30 rounded-lg p-3 xs:p-4 sm:p-5 reveal bg-white shadow-sm"><h4 className="font-heading text-base xs:text-lg mb-1 xs:mb-1.5 text-brand-primary font-semibold">AI Integration</h4><p className="text-foreground text-xs xs:text-sm leading-relaxed">Use AI to suggest personalized schedules while keeping students in control.</p></div>
              </div>
              <blockquote className="border-l-4 border-brand-primary/50 pl-3 xs:pl-4 sm:pl-6 italic text-foreground/80 my-6 xs:my-8 bg-white p-3 xs:p-4 rounded-r-lg shadow-sm reveal">
                <p className="mb-1.5 xs:mb-2"><strong className="not-italic font-sans font-medium text-brand-primary text-base xs:text-lg">Elan's Thinking: Balancing AI and User Control</strong></p>
                <p className="text-foreground text-sm xs:text-base">"AI was the key to personalization, but I didn't want to create a system that felt like a 'magic box.' Students needed to understand why the AI was suggesting certain schedules and have the power to override those suggestions. I sketched interfaces that showed the AI's reasoning—'This schedule avoids your work hours'—and made it easy to tweak the AI's recommendations. It was about empowering students, not replacing them."</p>
              </blockquote>
                 {/* Full-width carousel: Vertical padding py-4 xs:py-6. Adjusted my. */}
                 <div className="bg-accent-bg py-4 xs:py-6 rounded-lg my-8 xs:my-12 shadow-lg reveal border border-brand-primary/20">
                   <BigImageCarousel images={placeholderImages.map((img, index) => ({...img, alt: `Conceptual placeholder for Solution concepts - Example ${index + 1}`}))} />
              </div>

              {/* Adaptive Typography for H3. Adjusted margins. */}
              <h3 className="text-xl xs:text-2xl sm:text-3xl font-semibold mb-3 xs:mb-4 mt-8 xs:mt-12 text-brand-tertiary font-heading reveal">Testing & Iteration</h3>
              <p className="text-foreground leading-relaxed text-base xs:text-lg mb-3 xs:mb-4 reveal">
                The team progressed to high-fidelity prototypes, testing different calendar views and AI suggestion interfaces. Usability testing was crucial. It revealed that while students loved the AI suggestions, they also desired more granular control over the calendar view. This feedback led to the addition of filters for course types and instructors, allowing students to fine-tune their schedules more effectively.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xs:gap-8 my-6 xs:my-8 reveal"> {/* Adjusted gap and my */}
                 {/* Responsive padding and typography for iteration boxes */}
                <div className="border border-brand-tertiary/30 rounded-lg p-3 xs:p-4 sm:p-6 reveal bg-white shadow-sm">
                  <h4 className="font-heading text-base xs:text-lg mb-1 xs:mb-1.5 text-brand-tertiary font-semibold">Wireframes</h4>
                  <p className="text-foreground text-xs xs:text-sm leading-relaxed">Focused on the core flow: inputting constraints, viewing suggestions, and registering for courses.</p>
                </div>
                <div className="border border-brand-tertiary/30 rounded-lg p-3 xs:p-4 sm:p-6 reveal bg-white shadow-sm">
                  <h4 className="font-heading text-base xs:text-lg mb-1 xs:mb-1.5 text-brand-tertiary font-semibold">Prototypes</h4>
                  <p className="text-foreground text-xs xs:text-sm leading-relaxed">Tested different calendar views and AI suggestion interfaces, gathering critical user feedback.</p>
                </div>
              </div>
              <blockquote className="border-l-4 border-brand-tertiary/50 pl-3 xs:pl-4 sm:pl-6 italic text-foreground/80 my-6 xs:my-8 bg-white p-3 xs:p-4 rounded-r-lg shadow-sm reveal">
                <p className="mb-1.5 xs:mb-2"><strong className="not-italic font-sans font-medium text-brand-tertiary text-base xs:text-lg">Elan's Thinking: Iterating Based on User Feedback</strong></p>
                <p className="text-foreground text-sm xs:text-base">"Usability testing was brutal but essential. Students loved the AI suggestions, but they also wanted to 'zoom in' on the calendar and filter courses by type and instructor. I realized I had over-engineered the AI and under-engineered the basic calendar view. It was a humbling lesson: AI is powerful, but it's not a substitute for a solid foundation."</p>
              </blockquote>
                 {/* Full-width carousel: Vertical padding py-4 xs:py-6. Adjusted my. */}
                 <div className="bg-accent-bg py-4 xs:py-6 rounded-lg my-8 xs:my-12 shadow-lg reveal border border-brand-tertiary/20">
                   <BigImageCarousel images={placeholderImages.map((img, index) => ({...img, alt: `Conceptual placeholder for Wireframes and prototypes - Example ${index + 1}`}))} />
              </div>
            </section>
          </SectionReveal>

          <SectionReveal>
             {/* The Solution Section - Content part with padding, Carousel container full width */}
            {/* Responsive padding and mb. */}
            <section className="mb-12 xs:mb-16 reveal rounded-lg bg-gradient-to-br from-[#16325A]/6 to-[#16325A]/10 shadow-lg border border-[#16325A]/25">
              {/* Responsive padding for text content container */}
              <div className="px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8">
                {/* Adaptive Typography for H2. Adjusted mb. */}
                <h2 className="text-2xl xs:text-3xl sm:text-4xl font-semibold mb-4 xs:mb-6 text-brand-secondary font-heading reveal">The Solution</h2>
                <p className="text-foreground leading-relaxed text-base xs:text-lg mb-4 xs:mb-6 reveal">
                  The redesigned Student Course Planner aimed to provide a flexible, intuitive, and AI-assisted scheduling experience. Key features included:
                </p>
                <ul className="list-disc pl-4 xs:pl-5 text-foreground text-base xs:text-lg leading-relaxed space-y-1.5 xs:space-y-2 mb-6 xs:mb-8 reveal"> {/* Adjusted padding, spacing, mb */}
                  <li className="reveal"><strong className="font-medium text-foreground">Advanced Constraint Input:</strong> Allowing students to specify work hours, preferred class times (morning/afternoon), and other personal commitments.</li>
                  <li className="reveal"><strong className="font-medium text-foreground">AI-Powered Schedule Suggestions:</strong> The AI Advisor generates multiple schedule options based on student preferences, degree requirements, and course availability, clearly explaining the rationale behind suggestions.</li>
                  <li className="reveal"><strong className="font-medium text-foreground">Interactive Calendar View:</strong> A visual calendar that displays potential schedules, highlights conflicts, and allows direct manipulation and customization.</li>
                  <li className="reveal"><strong className="font-medium text-foreground">Filtering and Sorting:</strong> Options to filter courses by type, instructor, or department, and sort schedules by different criteria (e.g., fewest conflicts, preferred times).</li>
                  <li className="reveal"><strong className="font-medium text-foreground">Seamless Registration Flow:</strong> Once a schedule is finalized, a clear path to register for the selected courses directly from the planner.</li>
                  <li className="reveal"><strong className="font-medium text-foreground">User Control & Overrides:</strong> Maintaining student autonomy by allowing them to easily modify AI suggestions or build a schedule from scratch.</li>
                </ul>
              </div>
              {/* Full-width carousel: Vertical padding py-4 xs:py-6. Adjusted my (removed from here, applied to section). */}
              <div className="bg-accent-bg py-4 xs:py-6 rounded-b-lg shadow-inner reveal border-t border-brand-secondary/20">
                   <BigImageCarousel images={placeholderImages.map((img, index) => ({...img, alt: `Conceptual placeholder for Final UI mockups - Example ${index + 1}`}))} />
              </div>
            </section>
          </SectionReveal>

          <SectionReveal>
            {/* Responsive padding and mb. */}
            <section className="mb-12 xs:mb-16 reveal px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-gradient-to-br from-[#177863]/6 to-[#177863]/10 shadow-lg border border-[#177863]/25">
              {/* Adaptive Typography for H2. Adjusted mb. */}
              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-semibold mb-4 xs:mb-6 text-brand-primary font-heading reveal">Impact/Results</h2>
              <p className="text-foreground leading-relaxed text-base xs:text-lg mb-4 xs:mb-6 reveal">
                While specific metrics post-launch are pending collection, the project targeted the following outcomes based on the business goals and usability improvements:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xs:gap-6 mb-4 xs:mb-6 reveal"> {/* Adjusted gap and mb */}
                 {/* Responsive padding for stat boxes */}
                <div className="border border-brand-primary/30 bg-white p-3 xs:p-4 sm:p-6 rounded-lg text-center reveal shadow-sm">
                  {/* Adaptive Typography for stats. Adjusted mb. */}
                  <p className="text-2xl xs:text-3xl sm:text-4xl font-semibold text-brand-primary mb-0.5 xs:mb-1">60%</p>
                  <p className="text-foreground text-xs xs:text-sm leading-relaxed">Targeted Reduction in Scheduling Bottlenecks</p>
                </div>
                <div className="border border-brand-primary/30 bg-white p-3 xs:p-4 sm:p-6 rounded-lg text-center reveal shadow-sm">
                  <p className="text-2xl xs:text-3xl sm:text-4xl font-semibold text-brand-primary mb-0.5 xs:mb-1">30%</p>
                  <p className="text-foreground text-xs xs:text-sm leading-relaxed">Targeted Increase in Schedule-to-Cart Conversions</p>
                </div>
                <div className="border border-brand-primary/30 bg-white p-3 xs:p-4 sm:p-6 rounded-lg text-center reveal shadow-sm">
                  <p className="text-2xl xs:text-3xl sm:text-4xl font-semibold text-brand-primary mb-0.5 xs:mb-1">40%</p>
                  <p className="text-foreground text-xs xs:text-sm leading-relaxed">Targeted Adoption of AI Recommendations</p>
                </div>
              </div>
              <p className="text-foreground leading-relaxed text-base xs:text-lg reveal">
                Qualitative feedback from usability testing indicated a significant improvement in user satisfaction, with students finding the new design more intuitive, less overwhelming, and better equipped to handle their complex scheduling needs.
              </p>
            </section>
          </SectionReveal>

          <SectionReveal>
            {/* Responsive padding and mb. */}
            <section className="mb-12 xs:mb-16 reveal px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-gradient-to-br from-[#F8F4F2]/50 to-[#F8F4F2]/70 shadow-lg border border-[#177863]/15">
              {/* Adaptive Typography for H2. Adjusted mb. */}
              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-semibold mb-4 xs:mb-6 text-brand-tertiary font-heading reveal">Learnings/Reflections</h2>
              <p className="text-foreground leading-relaxed text-base xs:text-lg mb-3 xs:mb-4 reveal">
                The Student Course Planner redesign was a journey of balancing advanced AI capabilities with fundamental user needs for control and clarity. The key lessons learned were:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xs:gap-6 my-6 xs:my-8 reveal"> {/* Adjusted gap and my */}
                 {/* Responsive padding and typography for learning boxes */}
                <div className="border border-brand-tertiary/30 rounded-lg p-3 xs:p-4 sm:p-6 reveal bg-white shadow-sm">
                  <h3 className="font-heading text-base xs:text-lg mb-1 xs:mb-1.5 text-brand-tertiary font-semibold">Empathy is Foundational</h3>
                  <p className="text-foreground text-xs xs:text-sm leading-relaxed">Deeply understanding user frustrations (like Priya's) is crucial to designing meaningful solutions.</p>
                </div>
                <div className="border border-brand-tertiary/30 rounded-lg p-3 xs:p-4 sm:p-6 reveal bg-white shadow-sm">
                  <h3 className="font-heading text-base xs:text-lg mb-1 xs:mb-1.5 text-brand-tertiary font-semibold">Iterate Relentlessly</h3>
                  <p className="text-foreground text-xs xs:text-sm leading-relaxed">User feedback, especially during usability testing, is invaluable. Be prepared to pivot and refine (e.g., enhancing calendar controls).</p>
                </div>
                <div className="border border-brand-tertiary/30 rounded-lg p-3 xs:p-4 sm:p-6 reveal bg-white shadow-sm">
                  <h3 className="font-heading text-base xs:text-lg mb-1 xs:mb-1.5 text-brand-tertiary font-semibold">AI Augments, Not Replaces</h3>
                  <p className="text-foreground text-xs xs:text-sm leading-relaxed">Use AI to empower users and simplify complex tasks, but always ensure they remain in control and understand the system's suggestions.</p>
                </div>
              </div>
              <p className="text-foreground leading-relaxed text-base xs:text-lg mb-3 xs:mb-4 reveal">
                This project reinforced that even with advanced technology, the core principles of user-centered design—empathy, clarity, and iterative improvement—are paramount to success.
              </p>
              {/* Responsive padding and margin for blockquote */}
              <blockquote className="border-l-4 border-brand-tertiary/50 pl-3 xs:pl-4 sm:pl-6 italic text-foreground/80 my-6 xs:my-8 bg-white p-3 xs:p-4 rounded-r-lg shadow-sm reveal">
                <p className="mb-1.5 xs:mb-2"><strong className="not-italic font-sans font-medium text-brand-tertiary text-base xs:text-lg">Elan's Thinking: The Bigger Picture</strong></p>
                <p className="text-foreground text-sm xs:text-base">"This project taught me that UX design is more than just a job—it's a chance to make a positive impact on the world. By understanding people's struggles and creating solutions that make their lives a little easier, we can create a better future for everyone."</p>
              </blockquote>
            </section>
          </SectionReveal>

          {/* Continue Reading Section - Inspired by case study cards design */}
          <SectionReveal>
            <section className="mb-12 xs:mb-16 reveal">
              <div className="bg-gradient-to-br from-brand-secondary/12 to-brand-secondary/6 border-brand-secondary/20 shadow-brand-secondary/20 rounded-3xl overflow-hidden shadow-lg border-2 hover:shadow-xl transition-all duration-300 ease-in-out">
                <div className="px-6 py-8 md:px-8 md:py-10">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl xs:text-3xl sm:text-4xl font-bold font-heading text-brand-secondary mb-3">
                      Continue Reading
                    </h3>
                    <p className="text-foreground/80 text-base xs:text-lg leading-relaxed">
                      Explore more case studies and design insights
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Next Case Study Card - Target Theme: brand-primary */}
                    <div className="group bg-white dark:bg-background rounded-2xl p-6 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 border border-brand-primary/10">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                          <span className="text-2xl">🎓</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg text-brand-primary mb-2 group-hover:text-brand-secondary transition-colors duration-200">
                            Campus Hiring Platform
                          </h4>
                          <p className="text-foreground/70 text-sm mb-3 leading-relaxed">
                            Streamlining campus recruitment with 40% faster hiring processes
                          </p>
                          <Link
                            to="/case-study/campus-hiring"
                            className="inline-flex items-center text-brand-primary hover:text-brand-secondary transition-colors duration-200 text-sm font-medium group-hover:translate-x-1 transform"
                          >
                            Read Case Study
                            <ArrowLeft size={14} className="ml-1.5 rotate-180" />
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Back to Portfolio Card - Neutral Theme, Hover to Current Page Theme: brand-secondary */}
                    <div className="group bg-white dark:bg-background rounded-2xl p-6 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 border border-slate-200 dark:border-slate-700">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center">
                          <span className="text-2xl">🏠</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg text-foreground/80 mb-2 group-hover:text-brand-secondary transition-colors duration-200">
                            Back to Portfolio
                          </h4>
                          <p className="text-foreground/70 text-sm mb-3 leading-relaxed">
                            Explore all projects and design work
                          </p>
                          <Link
                            to="/"
                            className="inline-flex items-center text-foreground/70 hover:text-brand-secondary transition-colors duration-200 text-sm font-medium group-hover:-translate-x-1 transform"
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

               {/* End of Case Study and Links - Stays at the bottom */}
          <SectionReveal>
            {/* Responsive padding and mt. */}
            <div className="text-center mt-12 xs:mt-16 reveal px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-gradient-to-br from-[#16325A]/6 to-[#16325A]/10 shadow-lg border border-[#16325A]/25">
              <p className="text-base xs:text-lg text-foreground/80 mb-4 xs:mb-6 reveal">⭐ End of Case Study ⭐</p> {/* Adjusted typography and mb */}
              <div className="mb-6 xs:mb-8 reveal"> {/* Adjusted mb */}
                 {/* Adaptive Typography for H3. Adjusted mb. */}
                <h3 className="text-lg xs:text-xl sm:text-2xl font-heading font-semibold mb-1.5 xs:mb-2 text-brand-secondary">Next Case Study</h3>
                <Link to="/case-study/campus-hiring" className="text-brand-primary hover:underline font-medium text-sm xs:text-base"> {/* Adjusted typography */}
                  Camu Campus Recruitment App →
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

export default CaseStudyStudentPlanner;
