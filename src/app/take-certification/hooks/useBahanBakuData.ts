import { BahanBakuMainData } from '@/app/take-certification/models/types';
import { getBahanBakuData } from '@/app/take-certification/services/BahanBakuService';
import { useEffect, useState } from 'react';

export const useBahanBakuData = (uuidTransaksi: string) => {
  const [data, setData] = useState<BahanBakuMainData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const result = await getBahanBakuData(uuidTransaksi);
      setData(result);
    } catch (err) {
      console.error('⚠️ Failed to fetch data', err);
      setError(
        "Failed to fetch data" + (err instanceof Error && (": " + err.message))
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [uuidTransaksi]);

  return { data, setData, isLoading, error, setError, refetch: fetchData };
};
