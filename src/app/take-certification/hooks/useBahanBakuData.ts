import { useEffect, useState } from 'react';
import { BahanBakuData } from '@/app/take-certification/models/types';
import { fetchBahanBaku } from '@/app/take-certification/services/BahanBakuService';

export const useBahanBakuData = (uuidTransaksi: string) => {
  const [data, setData] = useState<BahanBakuData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const fetchedData = await fetchBahanBaku(uuidTransaksi);
        setData(fetchedData.data);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch data');
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [uuidTransaksi]);

  return { data, isLoading, error };
};
