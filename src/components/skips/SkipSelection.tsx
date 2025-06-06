import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Truck, Calendar, BadgePoundSterling as BadgePound, Check, X } from 'lucide-react';
import { SkipHireData } from '@/types';
import { formatCurrency, calculateTotalPrice } from '@/lib/utils';

interface SkipSelectionProps {
  selectedSkip: SkipHireData | null;
  open: boolean;
  onClose: () => void;
  onBack: () => void;
  onContinue: () => void;
}

const SkipSelection: React.FC<SkipSelectionProps> = ({
  selectedSkip,
  open,
  onClose,
  onBack,
  onContinue
}) => {
  if (!selectedSkip) {
    return null;
  }

  const totalPrice = calculateTotalPrice(selectedSkip.price_before_vat, selectedSkip.vat);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="
        data-[state=open]:animate-in data-[state=closed]:animate-out
        data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
        data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95
        data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]
        data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]
        fixed left-[50%] top-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200
        max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl
        h-full max-h-[95vh] overflow-y-auto
        sm:rounded-lg
      ">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl">Selected Skip: {selectedSkip.size} Yards</DialogTitle>
          <DialogDescription>
            Review your selected skip details below.
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-x-6 py-4">
          <div className="rounded-md overflow-hidden flex justify-center items-center">
            <img
              src='https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg'
              alt='yard skip'
              className="w-full h-auto object-cover max-h-[200px] sm:max-h-[250px] md:max-h-full"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-start">
              <Truck className="h-5 w-5 mr-3 mt-0.5 text-green-600" />
              <div>
                <h4 className="font-medium">Skip Size</h4>
                <p>{selectedSkip.size} Yard Skip</p>
              </div>
            </div>

            <div className="flex items-start">
              <Calendar className="h-5 w-5 mr-3 mt-0.5 text-green-600" />
              <div>
                <h4 className="font-medium">Hire Period</h4>
                <p>{selectedSkip.hire_period_days} Days</p>
              </div>
            </div>

            <div className="flex items-start">
              <BadgePound className="h-5 w-5 mr-3 mt-0.5 text-green-600" />
              <div>
                <h4 className="font-medium">Price Details</h4>
                <p>Price (ex. VAT): {formatCurrency(selectedSkip.price_before_vat)}</p>
                <p>VAT ({selectedSkip.vat}%): {formatCurrency(selectedSkip.price_before_vat * (selectedSkip.vat / 100))}</p>
                <p className="font-bold mt-1">Total: {formatCurrency(totalPrice)}</p>
              </div>
            </div>

            <div className="pt-2">
              <h4 className="font-medium mb-2">Suitability:</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  {selectedSkip.allowed_on_road ? (
                    <Check className="h-5 w-5 text-green-600 mr-2" />
                  ) : (
                    <X className="h-5 w-5 text-red-600 mr-2" />
                  )}
                  <span>Road Placement</span>
                </div>

                <div className="flex items-center">
                  {selectedSkip.allows_heavy_waste ? (
                    <Check className="h-5 w-5 text-green-600 mr-2" />
                  ) : (
                    <X className="h-5 w-5 text-red-600 mr-2" />
                  )}
                  <span>Heavy Waste</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <DialogFooter className="flex flex-col-reverse sm:flex-row sm:justify-between sm:space-x-2">
          <Button variant="outline" onClick={onBack} className="w-full sm:w-auto mt-2 sm:mt-0">
            Back
          </Button>
          <Button className="bg-green-600 hover:bg-green-700 w-full sm:w-auto" onClick={onContinue}>
            Continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SkipSelection;
