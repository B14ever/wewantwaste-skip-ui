import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function calculateTotalPrice(priceBeforeVat: number, vatPercentage: number): number {
  return priceBeforeVat * (1 + vatPercentage / 100);
}



export function getSkipSuitabilityText(allowedOnRoad: boolean, allowsHeavyWaste: boolean): string {
  if (allowedOnRoad && allowsHeavyWaste) {
    return "Suitable for road placement and heavy waste";
  } else if (allowedOnRoad) {
    return "Suitable for road placement but not heavy waste";
  } else if (allowsHeavyWaste) {
    return "Not suitable for road placement but accepts heavy waste";
  } else {
    return "Off-road placement only, no heavy waste";
  }
}