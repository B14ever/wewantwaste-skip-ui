import { SkipHireData } from '@/types';

const API_BASE_URL = 'https://app.wewantwaste.co.uk/api';

export const fetchSkips = async (postcode: string, area: string = ''): Promise<SkipHireData[]> => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/skips/by-location?postcode=${postcode}&area=${area}`
    );
    
    if (!response.ok) {
      throw new Error(`Failed to fetch skips: ${response.status}`);
    }
    
    const data: SkipHireData[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching skip data:', error);
    throw error;
  }
};