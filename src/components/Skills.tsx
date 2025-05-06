
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
          <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-purple-800 to-purple-600 bg-clip-text text-transparent">Industry Experience</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            With over 8 years of experience, I've specialized in creating exceptional user experiences 
            across various industries, focusing on enterprise solutions that make complex systems intuitive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-purple-50 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <h3 className="font-semibold text-lg mb-3 text-purple-800">EdTech</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <svg className="w-4 h-4 text-purple-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Redesigned student course planner with AI integration, resulting in 60% reduction in scheduling time</span>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 text-purple-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Created adaptive learning interfaces for diverse student needs, improving accessibility compliance by 40%</span>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 text-purple-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Developed teacher analytics dashboard that simplified data visualization and reduced reporting time by 35%</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-purple-50 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <h3 className="font-semibold text-lg mb-3 text-purple-800">HR Tech</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <svg className="w-4 h-4 text-purple-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Led design for campus recruitment platform that streamlined hiring process by 40% and increased user satisfaction to 85%</span>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 text-purple-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Designed employee onboarding workflows that reduced training time by 25% and improved new hire satisfaction scores</span>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 text-purple-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Created performance review system with visual feedback tools, increasing manager adoption by 55%</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-purple-50 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <h3 className="font-semibold text-lg mb-3 text-purple-800">Enterprise SaaS</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <svg className="w-4 h-4 text-purple-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Built design system that unified 30+ enterprise products, reducing development time by 40% and increasing consistency</span>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 text-purple-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Redesigned complex dashboards for data visualization, increasing user comprehension by 65%</span>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 text-purple-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Led user research for workflow automation tools that reduced task completion time by 50%</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-purple-50 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <h3 className="font-semibold text-lg mb-3 text-purple-800">Startups & Ecommerce</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <svg className="w-4 h-4 text-purple-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Optimized checkout experience for ecommerce platform, reducing cart abandonment by 30%</span>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 text-purple-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Created product visualization tools for connected home devices, increasing product understanding by 45%</span>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 text-purple-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Designed mobile-first interfaces for startup products that led to 70% increase in user engagement</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
