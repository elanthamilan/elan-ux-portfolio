import React, { useState } from 'react';
import CaseStudySkeleton from './CaseStudySkeleton';

const SkeletonDemo: React.FC = () => {
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [variant, setVariant] = useState<'campus-hiring' | 'student-planner'>('campus-hiring');

  return (
    <div className="min-h-screen bg-background">
      {/* Demo Controls */}
      <div className="fixed top-4 right-4 z-50 bg-white p-4 rounded-lg shadow-lg border">
        <h3 className="font-semibold mb-3">Skeleton Demo Controls</h3>
        <div className="space-y-3">
          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={showSkeleton}
                onChange={(e) => setShowSkeleton(e.target.checked)}
                className="rounded"
              />
              <span className="text-sm">Show Skeleton</span>
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Variant:</label>
            <select
              value={variant}
              onChange={(e) => setVariant(e.target.value as 'campus-hiring' | 'student-planner')}
              className="w-full p-2 border rounded text-sm"
            >
              <option value="campus-hiring">Campus Hiring</option>
              <option value="student-planner">Student Planner</option>
            </select>
          </div>
        </div>
      </div>

      {/* Skeleton Display */}
      {showSkeleton ? (
        <CaseStudySkeleton variant={variant} />
      ) : (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Skeleton Demo</h1>
            <p className="text-gray-600 mb-4">
              Enable the skeleton above to see the loading state for case study pages.
            </p>
            <p className="text-sm text-gray-500">
              The skeleton matches the exact layout structure of the actual case study pages.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkeletonDemo;
