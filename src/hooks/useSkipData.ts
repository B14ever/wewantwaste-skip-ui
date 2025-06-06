import { useState, useEffect } from 'react';
import { SkipHireData } from '@/types';
import { fetchSkips } from '@/api/skipService';

interface UseSkipDataReturn {
  skips: SkipHireData[];
  loading: boolean;
  error: Error | null;
  refetch: (postcode: string, area?: string) => Promise<void>;
}

export const useSkipData = (
  initialPostcode: string = 'NR32',
  initialArea: string = 'Lowestoft'
): UseSkipDataReturn => {
  const [skips, setSkips] = useState<SkipHireData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async (postcode: string, area: string = '') => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await fetchSkips(postcode, area);
      setSkips(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error occurred'));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(initialPostcode, initialArea);
  }, [initialPostcode, initialArea]);

  return {
    skips,
    loading,
    error,
    refetch: fetchData,
  };
};