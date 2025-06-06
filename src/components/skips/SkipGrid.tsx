import React from 'react';
import SkipCard from './SkipCard';
import { SkipHireData } from '@/types';
import { Loader2 } from 'lucide-react';

interface SkipGridProps {
  skips: SkipHireData[];
  loading: boolean;
  error: Error | null;
  onSelectSkip: (skip: SkipHireData) => void;
}

const SkipGrid: React.FC<SkipGridProps> = ({ skips, loading, error, onSelectSkip }) => {
  if (loading) {
    return (
      <div className="min-h-[400px] flex flex-col items-center justify-center text-slate-600">
        <Loader2 className="h-10 w-10 animate-spin mb-4" />
        <p className="text-lg font-medium">Loading available skips...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[400px] flex flex-col items-center justify-center text-red-600 bg-red-50 rounded-lg p-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <p className="text-lg font-medium mb-2">Error loading skip data</p>
        <p className="text-center">{error.message}</p>
      </div>
    );
  }

  if (!skips.length) {
    return (
      <div className="min-h-[400px] flex flex-col items-center justify-center text-slate-600 bg-slate-50 rounded-lg p-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
        </svg>
        <p className="text-lg font-medium">No skips available</p>
        <p className="text-center">No skip hire options were found for this location.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {skips.map((skip) => (
        <SkipCard 
          key={skip.id} 
          skip={skip} 
          onSelect={onSelectSkip} 
        />
      ))}
    </div>
  );
};

export default SkipGrid;