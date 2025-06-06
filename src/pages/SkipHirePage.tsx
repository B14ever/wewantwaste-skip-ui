import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useSkipData } from '@/hooks/useSkipData';
import { SkipHireData } from '@/types';

import SkipGrid from '@/components/skips/SkipGrid';
import SkipSelection from '@/components/skips/SkipSelection';
import { Truck, CheckCircle2 } from 'lucide-react';

const SkipHirePage: React.FC = () => {
  const { skips, loading, error } = useSkipData();
  const [selectedSkip, setSelectedSkip] = useState<SkipHireData | null>(null);
  const [showSelection, setShowSelection] = useState(false);
  const { toast } = useToast();
  
  const handleSelectSkip = (skip: SkipHireData) => {
    setSelectedSkip(skip);
    setShowSelection(true);
  };
  
  const handleCloseSelection = () => {
    setShowSelection(false);
  };
  
  const handleBack = () => {
    setShowSelection(false);
  };
  
  const handleContinue = () => {
    setShowSelection(false);
    toast({
      title: "Skip Hire Request Submitted",
      description: `Your order for a ${selectedSkip?.size} yard skip has been received.`,
      icon: <CheckCircle2 className="h-5 w-5 text-green-600" />,
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 w-full">
      <main className="flex-grow py-8 px-4">
        <div className="container mx-auto">
          <section className="mb-10">
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <div className="flex items-center mb-4">
                <Truck className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold">Skip Hire Options</h2>
              </div>
              
              <p className="text-slate-600 max-w-3xl">
                Browse our range of available skips for hire in <span className="font-semibold">NR32, Lowestoft</span>. 
                Select the skip size that best suits your waste disposal needs.
                All prices include delivery, collection, and {skips[0]?.hire_period_days || 14} days hire period.
              </p>
            </div>
            
            <SkipGrid
              skips={skips}
              loading={loading}
              error={error}
              onSelectSkip={handleSelectSkip}
            />
          </section>
        </div>
      </main>
      <SkipSelection
        selectedSkip={selectedSkip}
        open={showSelection}
        onClose={handleCloseSelection}
        onBack={handleBack}
        onContinue={handleContinue}
      />
    </div>
  );
};

export default SkipHirePage;