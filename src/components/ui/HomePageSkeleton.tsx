import React from 'react';

const HomePageSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse" aria-label="Loading page structure">
      {/* Header Placeholder */}
      <div className="bg-gray-200 h-16 w-full rounded"></div>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[5fr_2fr] gap-6 md:gap-8 lg:gap-16">
          {/* Left Column Placeholder */}
          <div className="space-y-8">
            {/* Hero Text Placeholder */}
            <div className="space-y-4 mb-12">
              <div className="bg-gray-300 h-10 w-3/4 rounded"></div>
              <div className="bg-gray-300 h-8 w-1/2 rounded"></div>
              <div className="bg-gray-200 h-5 w-full rounded mt-4"></div>
              <div className="bg-gray-200 h-5 w-5/6 rounded"></div>
              {/* CTA Placeholders */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6">
                <div className="bg-gray-300 h-12 w-48 rounded-2xl"></div>
                <div className="bg-gray-300 h-12 w-48 rounded-2xl"></div>
              </div>
            </div>

            {/* Case Study Card Placeholder (repeated twice) */}
            <div className="bg-gray-200 h-64 w-full rounded-3xl"></div>
            <div className="bg-gray-200 h-64 w-full rounded-3xl mt-8"></div>
          </div>

          {/* Right Column Placeholder */}
          <div className="space-y-8 md:space-y-12">
            {/* Section Placeholder (repeated for Get In Touch, Brands, Industries, Skills) */}
            <div className="space-y-3">
              <div className="bg-gray-300 h-6 w-1/2 rounded"></div>
              <div className="bg-gray-200 h-10 w-full rounded"></div>
              <div className="bg-gray-200 h-10 w-full rounded mt-2"></div>
            </div>
            <div className="space-y-3 mt-8">
              <div className="bg-gray-300 h-6 w-1/2 rounded"></div>
              <div className="bg-gray-200 h-20 w-full rounded"></div>
            </div>
            <div className="space-y-3 mt-8">
              <div className="bg-gray-300 h-6 w-1/2 rounded"></div>
              <div className="bg-gray-200 h-40 w-full rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Placeholder */}
      <div className="bg-gray-200 h-20 w-full rounded mt-8"></div>
    </div>
  );
};

export default HomePageSkeleton;
