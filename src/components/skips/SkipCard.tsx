import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Check, X } from 'lucide-react';
import { 
  Card, 
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SkipHireData } from '@/types';
import { formatCurrency, calculateTotalPrice} from '@/lib/utils';

interface SkipCardProps {
  skip: SkipHireData;
  onSelect: (skip: SkipHireData) => void;
}

const SkipCard: React.FC<SkipCardProps> = ({ skip, onSelect }) => {
  const [expanded, setExpanded] = useState(false);
  
  const toggleExpand = () => {
    setExpanded(prev => !prev);
  };
  
  const totalPrice = calculateTotalPrice(skip.price_before_vat, skip.vat);
  
  return (
    <Card className={`overflow-hidden transition-all duration-300 ${expanded ? 'transform-gpu scale-105 shadow-xl z-10' : 'hover:shadow-md'}`}>
      <div className="relative">
        <div className="h-48 overflow-hidden">
          <img 
            src='https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg'
            alt='yard skip'
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
        </div>
        
        <div className="absolute top-4 left-4">
          <Badge className="bg-green-600 hover:bg-green-700 text-white font-bold px-3 py-1">
            {skip.size} Yard
          </Badge>
        </div>
        
        {!expanded && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-90 flex flex-col justify-end p-4 text-white">
            <h3 className="text-xl font-bold">{skip.size} Yard Skip</h3>
            <p className="text-white/90">Click for details</p>
          </div>
        )}
      </div>
      
      <CardHeader className={`${expanded ? 'pt-4 pb-0' : 'sr-only'}`}>
        <CardTitle className="flex justify-between items-center">
          <span>{skip.size} Yard Skip</span>
          <Badge variant={skip.allowed_on_road ? "default" : "destructive"} className="ml-2">
            {skip.allowed_on_road ? "Road Placement" : "Off-road Only"}
          </Badge>
        </CardTitle>
      </CardHeader>
      
      <CardContent className={`${expanded ? 'py-4' : 'sr-only'}`}>
        <div className="space-y-3">
          <div className="flex justify-between border-b pb-2">
            <span className="text-slate-600">Hire Period:</span>
            <span className="font-medium">{skip.hire_period_days} days</span>
          </div>
          
          <div className="flex justify-between border-b pb-2">
            <span className="text-slate-600">Postcode:</span>
            <span className="font-medium">{skip.postcode}</span>
          </div>
          
          <div className="flex justify-between border-b pb-2">
            <span className="text-slate-600">Heavy Waste:</span>
            <span className="flex items-center">
              {skip.allows_heavy_waste ? (
                <><Check className="h-4 w-4 text-green-600 mr-1" /> Allowed</>
              ) : (
                <><X className="h-4 w-4 text-red-600 mr-1" /> Not Allowed</>
              )}
            </span>
          </div>
          
          {skip.transport_cost && (
            <div className="flex justify-between border-b pb-2">
              <span className="text-slate-600">Transport Cost:</span>
              <span className="font-medium">{formatCurrency(skip.transport_cost)}</span>
            </div>
          )}
          
          {skip.per_tonne_cost && (
            <div className="flex justify-between border-b pb-2">
              <span className="text-slate-600">Per Tonne Cost:</span>
              <span className="font-medium">{formatCurrency(skip.per_tonne_cost)}</span>
            </div>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="flex flex-col space-y-3">
        <div className={`w-full flex justify-between items-center ${expanded ? '' : 'sr-only'}`}>
          <div>
            <p className="text-sm text-slate-500">Price (ex. VAT)</p>
            <p className="text-lg font-semibold">{formatCurrency(skip.price_before_vat)}</p>
          </div>
          <div>
            <p className="text-sm text-slate-500">Total Price</p>
            <p className="text-xl font-bold text-green-700">{formatCurrency(totalPrice)}</p>
          </div>
        </div>
        
        <div className="w-full flex justify-between items-center">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-white bg-green-700 focus:outline-none focus:border-none"
            onClick={toggleExpand}
          >
            {expanded ? (
              <><ChevronUp className="h-4 w-4 mr-1" /> Less Info</>
            ) : (
              <><ChevronDown className="h-4 w-4 mr-1" /> More Info</>
            )}
          </Button>
          
          <Button 
            variant="default" 
            size={expanded ? "default" : "sm"}
            className={`bg-green-600 hover:bg-green-700 ${expanded ? 'px-6' : ''}`}
            onClick={() => onSelect(skip)}
          >
            Select
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default SkipCard;