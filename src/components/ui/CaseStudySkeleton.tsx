import React from 'react';

interface CaseStudySkeletonProps {
  variant?: 'campus-hiring' | 'student-planner';
}

const CaseStudySkeleton: React.FC<CaseStudySkeletonProps> = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden animate-pulse" aria-label="Loading case study content">
      {/* Subtle mesh gradient background skeleton */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100/30 to-gray-200/30" />
      </div>

      {/* Header Skeleton */}
      <div className="bg-white/90 backdrop-blur-sm border-b border-gray-200/50 h-16 w-full" />

      {/* Main Content Container */}
      <main className="flex-grow container mx-auto px-2 xs:px-4 sm:px-6 py-8 xs:py-12 md:py-16">
        {/* Back Button Skeleton */}
        <div className="bg-gray-200 h-10 w-32 rounded-lg mb-6 xs:mb-8" />

        <article className="max-w-4xl mx-auto space-y-12">
          {/* Hero Section Skeleton */}
          <div className="space-y-6">
            {/* Meta badges */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="bg-gray-300 h-8 w-24 rounded-md" />
              <div className="bg-gray-200 h-8 w-20 rounded-md" />
              <div className="bg-gray-200 h-8 w-28 rounded-md" />
              <div className="bg-gray-100 h-6 w-32 rounded ml-auto" />
            </div>

            {/* Main title */}
            <div className="space-y-4 mb-6">
              <div className="bg-gray-300 h-12 xs:h-14 sm:h-16 w-full rounded" />
              <div className="bg-gray-300 h-12 xs:h-14 sm:h-16 w-3/4 rounded" />
            </div>

            {/* Subtitle */}
            <div className="space-y-3 mb-8">
              <div className="bg-gray-200 h-6 xs:h-7 w-full rounded" />
              <div className="bg-gray-200 h-6 xs:h-7 w-5/6 rounded" />
            </div>

            {/* Key metrics grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 p-6 bg-gray-100/50 rounded-2xl border border-gray-200/50">
              {[1, 2, 3].map((i) => (
                <div key={i} className="text-center space-y-2">
                  <div className="bg-gray-300 h-8 w-20 mx-auto rounded" />
                  <div className="bg-gray-200 h-4 w-16 mx-auto rounded" />
                  <div className="bg-gray-200 h-3 w-24 mx-auto rounded" />
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image Section Skeleton */}
          <div className="w-full bg-gray-200 rounded-3xl overflow-hidden shadow-xl border border-gray-300/20 h-64 sm:h-80 md:h-96" />

          {/* Overview/Challenge Section */}
          <div className="px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-gradient-to-br from-green-50/60 to-green-100/40 shadow-lg border border-green-200/30">
            <div className="bg-green-300 h-8 xs:h-10 sm:h-12 w-1/2 rounded mb-4 xs:mb-6" />
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="bg-gray-200 h-4 xs:h-5 w-full rounded" />
                <div className="bg-gray-200 h-4 xs:h-5 w-11/12 rounded" />
              </div>
              <div className="space-y-2">
                <div className="bg-gray-200 h-4 xs:h-5 w-full rounded" />
                <div className="bg-gray-200 h-4 xs:h-5 w-4/5 rounded" />
              </div>
              {/* Bullet points */}
              <div className="space-y-2 ml-4">
                {[1, 2, 3].map((bullet) => (
                  <div key={bullet} className="bg-gray-200 h-4 w-11/12 rounded" />
                ))}
              </div>
              {/* Blockquote */}
              <div className="border-l-4 border-green-300/50 pl-3 xs:pl-4 sm:pl-6 my-6 xs:my-8 bg-white p-3 xs:p-4 rounded-r-lg shadow-sm">
                <div className="bg-green-300 h-5 xs:h-6 w-2/3 rounded mb-2" />
                <div className="space-y-2">
                  <div className="bg-gray-200 h-4 w-full rounded" />
                  <div className="bg-gray-200 h-4 w-11/12 rounded" />
                  <div className="bg-gray-200 h-4 w-4/5 rounded" />
                </div>
              </div>
            </div>
          </div>

          {/* My Role Section */}
          <div className="px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-gradient-to-br from-blue-50/60 to-blue-100/40 shadow-lg border border-blue-200/30">
            <div className="bg-blue-300 h-8 xs:h-10 sm:h-12 w-1/3 rounded mb-4 xs:mb-6" />
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="bg-gray-200 h-4 xs:h-5 w-3/4 rounded" />
                <div className="bg-gray-200 h-4 xs:h-5 w-2/3 rounded" />
              </div>
              {/* List items */}
              <div className="space-y-2 ml-4">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className="bg-gray-200 h-4 w-5/6 rounded" />
                ))}
              </div>
            </div>
          </div>

          {/* The Process Section */}
          <div className="px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-gradient-to-br from-orange-50/40 to-orange-100/60 shadow-lg border border-orange-200/30">
            <div className="bg-orange-300 h-8 xs:h-10 sm:h-12 w-1/3 rounded mb-4 xs:mb-6" />

            {/* Discovery & Research Subsection */}
            <div className="space-y-6">
              <div className="bg-orange-300 h-6 xs:h-7 sm:h-8 w-1/2 rounded mb-3 xs:mb-4" />
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="bg-gray-200 h-4 xs:h-5 w-full rounded" />
                  <div className="bg-gray-200 h-4 xs:h-5 w-11/12 rounded" />
                  <div className="bg-gray-200 h-4 xs:h-5 w-4/5 rounded" />
                </div>

                {/* Grid for personas/user types */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xs:gap-6 my-6 xs:my-8">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="border border-orange-300/30 rounded-lg p-3 xs:p-4 sm:p-5 bg-white shadow-sm">
                      <div className="bg-orange-300 h-5 xs:h-6 w-3/4 rounded mb-2" />
                      <div className="space-y-1">
                        <div className="bg-gray-200 h-3 xs:h-4 w-full rounded" />
                        <div className="bg-gray-200 h-3 xs:h-4 w-4/5 rounded" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Image placeholder */}
                <div className="bg-gray-200 rounded-lg my-8 xs:my-12 shadow-lg border border-orange-300/20 h-48 sm:h-64" />

                {/* Ideation & Design Subsection */}
                <div className="bg-orange-300 h-6 xs:h-7 sm:h-8 w-1/2 rounded mt-8 xs:mt-12 mb-3 xs:mb-4" />
                <div className="space-y-2">
                  <div className="bg-gray-200 h-4 xs:h-5 w-full rounded" />
                  <div className="bg-gray-200 h-4 xs:h-5 w-5/6 rounded" />
                </div>

                {/* Blockquote */}
                <div className="border-l-4 border-orange-300/50 pl-3 xs:pl-4 sm:pl-6 my-6 xs:my-8 bg-white p-3 xs:p-4 rounded-r-lg shadow-sm">
                  <div className="bg-orange-300 h-5 xs:h-6 w-2/3 rounded mb-2" />
                  <div className="space-y-2">
                    <div className="bg-gray-200 h-4 w-full rounded" />
                    <div className="bg-gray-200 h-4 w-11/12 rounded" />
                  </div>
                </div>

                {/* Testing & Iteration Subsection */}
                <div className="bg-orange-300 h-6 xs:h-7 sm:h-8 w-1/2 rounded mt-8 xs:mt-12 mb-3 xs:mb-4" />
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="bg-gray-200 h-4 xs:h-5 w-full rounded" />
                    <div className="bg-gray-200 h-4 xs:h-5 w-3/4 rounded" />
                  </div>

                  {/* Iteration boxes */}
                  <div className="space-y-4 xs:space-y-6">
                    {[1, 2, 3].map((iteration) => (
                      <div key={iteration} className="border border-orange-300/30 rounded-lg p-3 xs:p-4 sm:p-6 bg-white shadow-sm">
                        <div className="bg-orange-300 h-5 xs:h-6 w-1/2 rounded mb-2" />
                        <div className="space-y-1">
                          <div className="bg-gray-200 h-4 w-full rounded" />
                          <div className="bg-gray-200 h-4 w-4/5 rounded" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Another image placeholder */}
                <div className="bg-gray-200 rounded-lg my-8 xs:my-12 shadow-lg border border-orange-300/20 h-48 sm:h-64" />
              </div>
            </div>
          </div>

          {/* The Solution Section */}
          <div className="px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-gradient-to-br from-purple-50/60 to-purple-100/40 shadow-lg border border-purple-200/30">
            <div className="bg-purple-300 h-8 xs:h-10 sm:h-12 w-1/3 rounded mb-4 xs:mb-6" />
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="bg-gray-200 h-4 xs:h-5 w-full rounded" />
                <div className="bg-gray-200 h-4 xs:h-5 w-4/5 rounded" />
              </div>

              {/* Solution features */}
              <div className="space-y-4">
                {[1, 2, 3].map((feature) => (
                  <div key={feature} className="space-y-2">
                    <div className="bg-purple-300 h-6 xs:h-7 sm:h-8 w-2/3 rounded mb-2 xs:mb-3" />
                    <div className="space-y-2 ml-4">
                      {[1, 2, 3, 4].map((bullet) => (
                        <div key={bullet} className="bg-gray-200 h-4 w-11/12 rounded" />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Final image */}
              <div className="bg-gray-200 rounded-lg my-8 xs:my-12 shadow-lg border border-purple-300/20 h-48 sm:h-64" />
            </div>
          </div>

          {/* Learnings Section */}
          <div className="px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-gradient-to-br from-teal-50/50 to-teal-100/70 shadow-lg border border-teal-200/30">
            <div className="bg-teal-300 h-8 xs:h-10 sm:h-12 w-1/2 rounded mb-4 xs:mb-6" />
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="bg-gray-200 h-4 xs:h-5 w-full rounded" />
                <div className="bg-gray-200 h-4 xs:h-5 w-3/4 rounded" />
              </div>

              {/* Learning points grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xs:gap-6 my-6 xs:my-8">
                {[1, 2, 3].map((learning) => (
                  <div key={learning} className="border border-teal-300/30 rounded-lg p-3 xs:p-4 sm:p-6 bg-white shadow-sm">
                    <div className="bg-teal-300 h-5 xs:h-6 w-3/4 rounded mb-2" />
                    <div className="space-y-1">
                      <div className="bg-gray-200 h-3 xs:h-4 w-full rounded" />
                      <div className="bg-gray-200 h-3 xs:h-4 w-4/5 rounded" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Final blockquote */}
              <div className="border-l-4 border-teal-300/50 pl-3 xs:pl-4 sm:pl-6 my-6 xs:my-8 bg-white p-3 xs:p-4 rounded-r-lg shadow-sm">
                <div className="bg-teal-300 h-5 xs:h-6 w-2/3 rounded mb-2" />
                <div className="space-y-2">
                  <div className="bg-gray-200 h-4 w-full rounded" />
                  <div className="bg-gray-200 h-4 w-11/12 rounded" />
                  <div className="bg-gray-200 h-4 w-4/5 rounded" />
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid Skeleton (for Impact section) */}
          <div className="px-3 py-5 xs:px-4 xs:py-6 sm:p-6 md:p-8 rounded-lg bg-blue-50/40 shadow-lg border border-gray-200/30">
            <div className="bg-gray-300 h-8 xs:h-10 sm:h-12 w-1/2 rounded mb-4 xs:mb-6" />
            <div className="space-y-4 mb-4 xs:mb-6">
              <div className="bg-gray-200 h-4 xs:h-5 w-full rounded" />
              <div className="bg-gray-200 h-4 xs:h-5 w-3/4 rounded" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6">
              {[1, 2, 3, 4].map((stat) => (
                <div key={stat} className="border border-gray-300/30 bg-white p-3 xs:p-4 sm:p-6 rounded-lg text-center shadow-sm">
                  <div className="bg-gray-300 h-8 xs:h-10 sm:h-12 w-16 mx-auto rounded mb-2" />
                  <div className="bg-gray-200 h-3 xs:h-4 w-full rounded" />
                </div>
              ))}
            </div>
          </div>

          {/* Continue Reading Section Skeleton */}
          <div className="bg-gray-100/60 border-gray-200/30 rounded-3xl overflow-hidden shadow-lg border-2 p-6 md:p-8">
            <div className="text-center mb-6">
              <div className="bg-gray-300 h-8 xs:h-10 sm:h-12 w-48 mx-auto rounded mb-3" />
              <div className="bg-gray-200 h-5 xs:h-6 w-64 mx-auto rounded" />
            </div>

            <div className="space-y-4">
              {/* Next case study card skeleton */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl border-2 p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-200 rounded-xl" />
                  <div className="flex-1 space-y-3">
                    <div className="bg-gray-300 h-5 w-3/4 rounded" />
                    <div className="bg-gray-200 h-4 w-full rounded" />
                    <div className="bg-gray-200 h-4 w-32 rounded" />
                  </div>
                </div>
              </div>

              {/* Back to home link skeleton */}
              <div className="text-center">
                <div className="bg-gray-200 h-8 w-32 mx-auto rounded-lg" />
              </div>
            </div>
          </div>
        </article>
      </main>

      {/* Footer Skeleton */}
      <div className="bg-gray-100 border-t border-gray-200 h-32 w-full" />
    </div>
  );
};

export default CaseStudySkeleton;
