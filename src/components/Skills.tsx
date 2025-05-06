
import { Badge } from "@/components/ui/badge";

export default function Skills() {
  return (
    <section className="py-16 bg-gradient-to-b from-white/70 to-purple-50/50 backdrop-blur-sm relative">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-16 h-16 border border-purple-200/30 rounded-full" aria-hidden="true"></div>
      <div className="absolute bottom-10 left-10 w-12 h-12 border border-blue-200/20 rounded-full" aria-hidden="true"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <Badge className="bg-purple-100 text-purple-800 mb-3 hover:bg-purple-200 transition-colors">My Expertise</Badge>
          <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-purple-800 to-purple-600 bg-clip-text text-transparent">Skills & Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            With over 8 years of experience, I've developed a comprehensive skill set 
            focused on creating exceptional user experiences for enterprise products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-purple-50 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <h3 className="font-semibold text-lg mb-3 text-purple-800">Product Strategy</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <svg className="w-4 h-4 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Market Research
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Competitive Analysis
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Product Roadmapping
              </li>
            </ul>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-purple-50 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <h3 className="font-semibold text-lg mb-3 text-purple-800">UX Research</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <svg className="w-4 h-4 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                User Interviews
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Usability Testing
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Data Analysis
              </li>
            </ul>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-purple-50 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <h3 className="font-semibold text-lg mb-3 text-purple-800">UI Design</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <svg className="w-4 h-4 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Wireframing
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Visual Design
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Interactive Prototyping
              </li>
            </ul>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-purple-50 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <h3 className="font-semibold text-lg mb-3 text-purple-800">Design Systems</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <svg className="w-4 h-4 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Component Libraries
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Style Guides
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Documentation
              </li>
            </ul>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-purple-50 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <h3 className="font-semibold text-lg mb-3 text-purple-800">Information Architecture</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <svg className="w-4 h-4 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                User Flows
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Site Mapping
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Content Strategy
              </li>
            </ul>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-purple-50 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <h3 className="font-semibold text-lg mb-3 text-purple-800">Project Management</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <svg className="w-4 h-4 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Agile Methodologies
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Team Collaboration
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Stakeholder Management
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
