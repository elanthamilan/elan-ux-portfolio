import { Badge } from "@/components/ui/badge";

export default function Skills() {
  return (
    <section className="py-16 md:py-24 bg-background text-foreground">
      {/* Decorative elements REMOVED for Intercom style */}
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="bg-brand-badge-bg text-foreground px-3 py-1.5 text-sm font-medium rounded mb-4">My Expertise</Badge>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4 text-foreground">Skills & Expertise</h2>
          <p className="text-foreground/80 max-w-2xl mx-auto text-lg leading-relaxed">
            With over 8 years of experience, I've developed a comprehensive skill set 
            focused on creating exceptional user experiences for enterprise products.
          </p>
        </div>

        {/* Simplified skill listing - removed card structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 max-w-5xl mx-auto text-left">
          
          {/* Skill Category Example */}
          <div>
            <h3 className="font-heading font-semibold text-xl md:text-2xl mb-4 text-foreground">Product Strategy</h3>
            <ul className="space-y-2.5 text-foreground/80">
              <li className="flex items-center">
                <svg className="w-4 h-4 text-foreground/60 mr-2.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Market Research
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-foreground/60 mr-2.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Competitive Analysis
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-foreground/60 mr-2.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Product Roadmapping
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-xl md:text-2xl mb-4 text-foreground">UX Research</h3>
            <ul className="space-y-2.5 text-foreground/80">
              <li className="flex items-center">
                <svg className="w-4 h-4 text-foreground/60 mr-2.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                User Interviews
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-foreground/60 mr-2.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Usability Testing
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-foreground/60 mr-2.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Data Analysis
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-xl md:text-2xl mb-4 text-foreground">UI Design</h3>
            <ul className="space-y-2.5 text-foreground/80">
              <li className="flex items-center">
                <svg className="w-4 h-4 text-foreground/60 mr-2.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Wireframing
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-foreground/60 mr-2.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Visual Design
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-foreground/60 mr-2.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Interactive Prototyping
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-xl md:text-2xl mb-4 text-foreground">Design Systems</h3>
            <ul className="space-y-2.5 text-foreground/80">
              <li className="flex items-center">
                <svg className="w-4 h-4 text-foreground/60 mr-2.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Component Libraries
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-foreground/60 mr-2.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Style Guides
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-foreground/60 mr-2.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Documentation
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-xl md:text-2xl mb-4 text-foreground">Information Architecture</h3>
            <ul className="space-y-2.5 text-foreground/80">
              <li className="flex items-center">
                <svg className="w-4 h-4 text-foreground/60 mr-2.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                User Flows
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-foreground/60 mr-2.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Site Mapping
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-foreground/60 mr-2.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Content Strategy
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-xl md:text-2xl mb-4 text-foreground">Project Management</h3>
            <ul className="space-y-2.5 text-foreground/80">
              <li className="flex items-center">
                <svg className="w-4 h-4 text-foreground/60 mr-2.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Agile Methodologies
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-foreground/60 mr-2.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Team Collaboration
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-foreground/60 mr-2.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
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
