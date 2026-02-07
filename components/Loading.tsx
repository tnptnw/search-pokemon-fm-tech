'use client';

import { memo } from 'react';

const Loading = memo(() => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse">
        {/* Header skeleton */}
        <div className="bg-gray-300 h-40"></div>
        
        <div className="grid md:grid-cols-2 gap-6 p-6">
          {/* Image skeleton */}
          <div className="flex justify-center">
            <div className="w-64 h-64 bg-gray-200 rounded"></div>
          </div>

          {/* Stats skeleton */}
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        </div>

        {/* Attacks skeleton */}
        <div className="p-6 border-t border-gray-200">
          <div className="h-6 bg-gray-200 rounded w-32 mb-4"></div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="h-16 bg-gray-100 rounded"></div>
              <div className="h-16 bg-gray-100 rounded"></div>
            </div>
            <div className="space-y-2">
              <div className="h-16 bg-gray-100 rounded"></div>
              <div className="h-16 bg-gray-100 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

Loading.displayName = 'Loading';

export default Loading;
