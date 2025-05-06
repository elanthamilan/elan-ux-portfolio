
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ElanThinking, CaseStudySection } from "@/components/CaseStudyAccordion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const CaseStudyCampusHiring = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Subtle background for case study */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute w-full h-full bg-gradient-to-b from-white via-purple-50/20 to-blue-50/10"></div>

        {/* Subtle grid pattern for depth */}
        <div
          className="absolute inset-0 opacity-[0.01]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #8E9196 1px, transparent 1px), linear-gradient(to bottom, #8E9196 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
          aria-hidden="true"
        ></div>
      </div>

      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-purple-700 hover:text-purple-900 transition-colors mb-6">
          <ArrowLeft size={18} className="mr-2" />
          <span>Back to Home</span>
        </Link>

        <div className="bg-white/80 backdrop-blur-sm border border-purple-100/50 rounded-xl p-6 md:p-10 shadow-sm mb-8">
          <Badge className="bg-purple-100 text-purple-800 mb-4">Case Study • 2025</Badge>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-800 to-purple-600 bg-clip-text text-transparent">
            40% Faster Campus Hiring: Camu Campus Recruitment App
          </h1>

          <p className="text-xl text-gray-700 mb-8 max-w-3xl">
            A Unified Hiring Experience that redefines university hiring by embedding job creation, approvals,
            interview scheduling, and application management into Camu's Student Information System (SIS).
          </p>

          <div className="aspect-video w-full bg-purple-100/50 rounded-lg overflow-hidden mb-8">
<img
              src="/Elanable-uploads/d194dd7b-4980-4860-bf9d-ece30b18149d.png" 
              alt="Camu Campus Recruitment App Interface"
              className="w-full h-full object-cover"
            />
          </div>

          <hr className="my-8 border-purple-100" />

          <CaseStudySection title="Project Background">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-4">
                  <strong className="text-purple-800">Project Name:</strong> Camu Campus Recruitment App
                </p>
                <p className="text-gray-700 mb-4">
                  <strong className="text-purple-800">Role:</strong> Lead Interaction Designer
                </p>
                <p className="text-gray-700 mb-4">
                  <strong className="text-purple-800">Date Shipped:</strong> April 2025
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3 text-purple-800">User Pain Points:</h3>
                <ul className="space-y-2 text-gray-700 list-disc pl-5">
                  <li>
                    <strong>Recruiters:</strong> Struggled with multiple platform logins, manual data uploads, and limited
                    visibility into student profiles, wasting time and missing ideal candidates.
                  </li>
                  <li>
                    <strong>Placement Officers:</strong> Juggled email threads, spreadsheets, and disjointed tools for
                    approvals, scheduling, and reporting, leading to inefficiencies and errors.
                  </li>
                  <li>
                    <strong>Students:</strong> Faced repetitive form-filling across disconnected job boards, often missing
                    opportunities due to complexity and lack of a centralized hub.
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-lg mb-3 text-purple-800">Business Problem:</h3>
              <p className="text-gray-700">
                Camu needed to streamline the recruitment process to boost user engagement, improve placement rates,
                and drive revenue through employer contract renewals, all while leveraging its existing SIS infrastructure.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-lg mb-3 text-purple-800">Background:</h3>
              <p className="text-gray-700">
                Camu, a trusted SIS for educational institutions, saw an opportunity to integrate recruitment into its
                platform. By tapping into its rich student data and established user base, Camu aimed to create a unified
                hiring ecosystem that would set a new standard for campus recruitment.
              </p>
            </div>
          </CaseStudySection>

          <CaseStudySection title="The Challenge: A Fragmented Hiring Process">
            <p className="text-gray-700 mb-4">
              University hiring was a chaotic affair. Recruiters toggled between platforms, wrestling with cumbersome logins
              and uploading data manually. Placement officers drowned in email threads and spreadsheets, struggling to
              coordinate logistics and enforce institutional policies. Students, meanwhile, navigated a maze of external job
              boards, filling out repetitive forms and missing opportunities due to the sheer complexity. The need for a
              unified, efficient system was undeniable, and Camu stepped up to bridge the gap by embedding recruitment
              directly into its SIS.
            </p>
          </CaseStudySection>

          <CaseStudySection title="Understanding the Users: Three Personas, One Mission">
            <p className="text-gray-700 mb-4">
              The design process kicked off with a deep dive into the needs of three core user groups:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white/90 p-5 rounded-lg border border-purple-100 shadow-sm">
                <h3 className="font-semibold text-lg mb-2 text-purple-800">Recruiters</h3>
                <p className="text-gray-700 text-sm">
                  They wanted to post jobs quickly, target suitable candidates, and track applications effortlessly,
                  frustrated by scattered systems and limited access to student data.
                </p>
              </div>

              <div className="bg-white/90 p-5 rounded-lg border border-purple-100 shadow-sm">
                <h3 className="font-semibold text-lg mb-2 text-purple-800">Placement Officers</h3>
                <p className="text-gray-700 text-sm">
                  Tasked with managing policies, interviews, and stakeholder insights, they needed a centralized tool
                  to replace fragmented workflows and reduce coordination burdens.
                </p>
              </div>

              <div className="bg-white/90 p-5 rounded-lg border border-purple-100 shadow-sm">
                <h3 className="font-semibold text-lg mb-2 text-purple-800">Students</h3>
                <p className="text-gray-700 text-sm">
                  They craved an intuitive way to find relevant jobs, apply easily, and track progress, tired of
                  external platforms and redundant data entry.
                </p>
              </div>
            </div>

            <p className="text-gray-700">
              While their goals differed, simplicity and efficiency were universal demands, shaping the app's user-centric
              design.
            </p>
          </CaseStudySection>

          <CaseStudySection title="Design Process: Methods and Artifacts">
            <p className="text-gray-700 text-lg mb-6">
              The design process was grounded in user-centric methods and iterative feedback, producing key artifacts to
              guide development:
            </p>

            <div className="bg-white/90 p-6 rounded-lg border border-purple-100 shadow-sm mb-6">
              <h3 className="font-semibold text-lg mb-3 text-purple-800">User Research</h3>
              <p className="text-gray-700">
                Conducted interviews, shadowing, and surveys with recruiters, placement officers, and students to map
                pain points and goals
              </p>
            </div>
          </CaseStudySection>

          <CaseStudySection title="The Breakthrough: A Unified, Familiar Flow">
            <p className="text-gray-700 text-lg mb-6">
              A recruiter's casual remark—"Why can't this be as straightforward as LinkedIn?"—sparked the vision for a
              clear, step-by-step flow. But Camu wasn't a generic job platform; it needed to handle university-specific
              nuances like approval workflows and SIS data integration. Stakeholders feared a rigid system would sacrifice
              flexibility, so we tested two approaches: a single-page form (fast but overwhelming) versus a multi-step form
              (clearer, with autosave). The multi-step version won, reducing form abandonment by 38%. Structure, it turned
              out, trumped raw speed.
            </p>

            <ElanThinking id="breakthrough-thinking" title="Finding the Right Flow">
              "The LinkedIn comment stuck with me, but Camu's context was messier—approval rules, SIS data, campus logistics.
              A single-page form felt like a quick win, but users got lost in the noise. The multi-step form added clicks,
              which worried stakeholders. I pushed for it anyway, backed by test data showing users valued clarity. It was a
              gamble, but user trust was worth more than a few seconds saved."
            </ElanThinking>
          </CaseStudySection>

          <CaseStudySection title="Iterative Design: Balancing Needs and Constraints">
            <p className="text-gray-700 text-lg mb-6">
              The design evolved through three pivotal iterations, each addressing user feedback and technical realities:
            </p>

            <div className="bg-white/90 p-6 rounded-lg border border-purple-100 shadow-sm mb-6">
              <h3 className="font-semibold text-lg mb-3 text-purple-800">Iteration 1</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-medium text-gray-800">Form Structure</h4>
                  <p className="text-gray-700 text-sm">Single-page job post</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Feedback</h4>
                  <p className="text-gray-700 text-sm">Users felt overwhelmed</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Solution</h4>
                  <p className="text-gray-700 text-sm">Multi-step with autosave</p>
                </div>
              </div>
            </div>

            <div className="bg-white/90 p-6 rounded-lg border border-purple-100 shadow-sm mb-6">
              <h3 className="font-semibold text-lg mb-3 text-purple-800">Iteration 2</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-medium text-gray-800">AI Autofill</h4>
                  <p className="text-gray-700 text-sm">Auto-populate fields</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Feedback</h4>
                  <p className="text-gray-700 text-sm">Distrust of automation</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Solution</h4>
                  <p className="text-gray-700 text-sm">Optional autofill with easy overrides</p>
                </div>
              </div>
            </div>

            <div className="bg-white/90 p-6 rounded-lg border border-purple-100 shadow-sm">
              <h3 className="font-semibold text-lg mb-3 text-purple-800">Iteration 3</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-medium text-gray-800">External Tracking</h4>
                  <p className="text-gray-700 text-sm">Popup on external site clicks</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Feedback</h4>
                  <p className="text-gray-700 text-sm">Confusion and mis-clicks</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Solution</h4>
                  <p className="text-gray-700 text-sm">Simplified wording, clearer context</p>
                </div>
              </div>
            </div>
          </CaseStudySection>

          <CaseStudySection title="The Recruiter's Journey: From Chaos to Control">
            <p className="text-gray-700 text-lg mb-6">
              For recruiters, the app delivers an intuitive, data-driven experience:
            </p>

            <div className="bg-white/90 p-6 rounded-lg border border-purple-100 shadow-sm mb-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-800 font-bold mr-4">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-purple-800">Seamless Access</h3>
                  <p className="text-gray-700">
                    Institutional credentials provide scoped login; trusted partners skip approvals
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/90 p-6 rounded-lg border border-purple-100 shadow-sm mb-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-800 font-bold mr-4">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-purple-800">Job Creation Made Simple</h3>
                  <p className="text-gray-700 mb-3">A Create Job button launches a four-step form:</p>
                  
                  <div className="ml-4 space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-purple-50 rounded-full flex items-center justify-center text-purple-700 text-sm font-medium mr-3">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Basic Info</h4>
                        <p className="text-gray-700 text-sm">Job title, description, and screening questions with AI autofill</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-purple-50 rounded-full flex items-center justify-center text-purple-700 text-sm font-medium mr-3">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Position Details</h4>
                        <p className="text-gray-700 text-sm">Role type, duration, and work-study eligibility</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-purple-50 rounded-full flex items-center justify-center text-purple-700 text-sm font-medium mr-3">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Location & Time</h4>
                        <p className="text-gray-700 text-sm">On-site, remote, or hybrid options with timezone-aware defaults</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-purple-50 rounded-full flex items-center justify-center text-purple-700 text-sm font-medium mr-3">
                        4
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Compensation</h4>
                        <p className="text-gray-700 text-sm">Pay transparency and optional perks. Autosave prevents data loss, keeping the process stress-free</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/90 p-6 rounded-lg border border-purple-100 shadow-sm mb-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-800 font-bold mr-4">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-purple-800">Leveraging SIS Data</h3>
                  <p className="text-gray-700">
                    Filters for GPA, major, or skills pull directly from the SIS, eliminating manual uploads
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/90 p-6 rounded-lg border border-purple-100 shadow-sm">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-800 font-bold mr-4">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-purple-800">Approval & Tracking</h3>
                  <p className="text-gray-700">
                    Postings route automatically for approval. A real-time dashboard tracks applications and candidate
                    snapshots, replacing email chaos
                  </p>
                </div>
              </div>
            </div>
          </CaseStudySection>

          <CaseStudySection title="The Placement Officer's Command Center: Efficiency Meets Oversight">
            <p className="text-gray-700 text-lg mb-6">
              Placement officers gained a centralized hub that balances automation and control:
            </p>

            <div className="bg-white/90 p-6 rounded-lg border border-purple-100 shadow-sm mb-6">
              <h3 className="font-semibold text-lg mb-2 text-purple-800">Centralized Oversight</h3>
              <p className="text-gray-700">
                Job postings appear in a sortable queue with "white-glove" tags for priority partners. Approvals and edits
                are a click away
              </p>
            </div>

            <div className="bg-white/90 p-6 rounded-lg border border-purple-100 shadow-sm mb-6">
              <h3 className="font-semibold text-lg mb-2 text-purple-800">Streamlined Interview Management</h3>
              
              <div className="ml-4 space-y-4 mt-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-purple-50 rounded-full flex items-center justify-center text-purple-700 text-sm font-medium mr-3">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Setup</h4>
                    <p className="text-gray-700 text-sm">Configure preferences, slot durations, and seasonal windows</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-purple-50 rounded-full flex items-center justify-center text-purple-700 text-sm font-medium mr-3">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Scheduling</h4>
                    <p className="text-gray-700 text-sm">Build slots or rotations in the Interview hub</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-purple-50 rounded-full flex items-center justify-center text-purple-700 text-sm font-medium mr-3">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Room Booking</h4>
                    <p className="text-gray-700 text-sm">Reserve campus facilities in-app</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-purple-50 rounded-full flex items-center justify-center text-purple-700 text-sm font-medium mr-3">
                    4
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Coordination</h4>
                    <p className="text-gray-700 text-sm">Add candidates, export packets, and send bulk emails seamlessly</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/90 p-6 rounded-lg border border-purple-100 shadow-sm">
              <h3 className="font-semibold text-lg mb-2 text-purple-800">Data-Driven Insights</h3>
              <p className="text-gray-700">
                Dashboards track slot fill rates and time-to-offer, while post-event surveys drive improvements
              </p>
            </div>
          </CaseStudySection>
          
          <CaseStudySection title="The Student's Experience: Opportunity at Their Fingertips">
            <p className="text-gray-700 text-lg mb-6">
              Students now enjoy a seamless, integrated job-hunting journey:
            </p>
            
            <div className="bg-white/90 p-6 rounded-lg border border-purple-100 shadow-sm mb-6">
              <h3 className="font-semibold text-lg mb-2 text-purple-800">Effortless Discovery</h3>
              <p className="text-gray-700">
                Jobs appear in their SIS home feed alongside academic updates, boosting visibility by 30%. 
                AI recommendations match roles to their profiles
              </p>
            </div>
            
            <div className="bg-white/90 p-6 rounded-lg border border-purple-100 shadow-sm mb-6">
              <h3 className="font-semibold text-lg mb-2 text-purple-800">Frictionless Applications</h3>
              <p className="text-gray-700">
                Pre-filled forms pull SIS data—resumes, transcripts, skills—halving application time
              </p>
            </div>
            
            <div className="bg-white/90 p-6 rounded-lg border border-purple-100 shadow-sm">
              <h3 className="font-semibold text-lg mb-2 text-purple-800">Clear Next Steps</h3>
              <p className="text-gray-700">
                Pick or swap interview slots and track status updates in real time, eliminating uncertainty
              </p>
            </div>
          </CaseStudySection>

          <CaseStudySection title="Final Design: A Seamless, Data-Driven Experience">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/90 p-5 rounded-lg border border-purple-100 shadow-sm">
                <h3 className="font-semibold text-lg mb-2 text-purple-800">Recruiter Flow</h3>
                <ul className="space-y-2 text-gray-700 list-disc pl-5">
                  <li>Four-step job creation with AI autofill and SIS filters</li>
                  <li>Real-time dashboards for application tracking</li>
                  <li>Automated approval workflows</li>
                </ul>
              </div>
              
              <div className="bg-white/90 p-5 rounded-lg border border-purple-100 shadow-sm">
                <h3 className="font-semibold text-lg mb-2 text-purple-800">Placement Officer Flow</h3>
                <ul className="space-y-2 text-gray-700 list-disc pl-5">
                  <li>Centralized job queue with quick-edit tools</li>
                  <li>Interview scheduling and room booking integration</li>
                  <li>Data dashboards and post-event surveys</li>
                </ul>
              </div>
              
              <div className="bg-white/90 p-5 rounded-lg border border-purple-100 shadow-sm">
                <h3 className="font-semibold text-lg mb-2 text-purple-800">Student Flow</h3>
                <ul className="space-y-2 text-gray-700 list-disc pl-5">
                  <li>Job postings in the SIS dashboard with AI recommendations</li>
                  <li>Pre-filled application forms using SIS data</li>
                  <li>Interview slot selection and status tracking</li>
                </ul>
              </div>
            </div>
          </CaseStudySection>

          <CaseStudySection title="The Roadblocks: Grit and Growth">
            <p className="text-gray-700 text-lg mb-6">
              These setbacks underscored the importance of prioritizing trust over innovation for innovation's sake.
            </p>

            <ElanThinking id="roadblocks-thinking" title="Overcoming Challenges">
              "The 'Quick Post' flop hurt—we thought AI would wow users, but recruiters pushed back, wanting agency. External tracking
              was another mess; stakeholders hated the wordiness, but users needed clarity. I learned to let data and feedback guide me, even when it meant scrapping
              'cool' ideas. Business goals loomed, but user trust was my north star."
            </ElanThinking>
          </CaseStudySection>

          <CaseStudySection title="Results: Impact and Outcomes">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/90 p-6 rounded-lg border border-purple-100 shadow-sm text-center">
                <p className="text-3xl font-bold text-purple-700 mb-2">30%</p>
                <p className="text-gray-700">faster time-to-hire through data-driven filters and streamlined scheduling</p>
              </div>
              
              <div className="bg-white/90 p-6 rounded-lg border border-purple-100 shadow-sm text-center">
                <p className="text-3xl font-bold text-purple-700 mb-2">40%</p>
                <p className="text-gray-700">reduction in placement officer workload, freeing time for strategic focus</p>
              </div>
              
              <div className="bg-white/90 p-6 rounded-lg border border-purple-100 shadow-sm text-center">
                <p className="text-3xl font-bold text-purple-700 mb-2">25%</p>
                <p className="text-gray-700">increase in student engagement with the SIS, boosting app usage</p>
              </div>
              
              <div className="bg-white/90 p-6 rounded-lg border border-purple-100 shadow-sm text-center">
                <p className="text-3xl font-bold text-purple-700 mb-2">$500K</p>
                <p className="text-gray-700">in new revenue from satisfied employers renewing contracts</p>
              </div>
            </div>
          </CaseStudySection>

          <div className="text-center mt-16">
            <p className="text-lg text-purple-800 mb-2">⭐ End of Case Study ⭐</p>
            <Link to="/" className="inline-flex items-center text-purple-700 hover:text-purple-900 transition-colors">
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

export default CaseStudyCampusHiring;
