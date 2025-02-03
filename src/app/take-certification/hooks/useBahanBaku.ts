import { BahanBakuData, BahanBakuMainData } from '@/app/take-certification/models/types';
import { getBahanBakuData, getBahanBakuDetail } from '@/app/take-certification/services/BahanBakuService';
import { useEffect, useState } from 'react';

export const useBahanBakuData = (uuidTransaksi: string) => {
  const [data, setData] = useState<BahanBakuMainData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await getBahanBakuData(uuidTransaksi);
      setData(result);
    } catch (err) {
      console.error('⚠️ Failed to fetch data:', err);
      setError(
        "Failed to fetch data" +
        (err instanceof Error ? (": " + err.message) : '.')
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

export const useBahanBakuDetail = (kodeBahanBaku: string | null) => {
  const [data, setData] = useState<BahanBakuData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await getBahanBakuDetail(kodeBahanBaku!);
      setData(result);
    } catch (err) {
      console.error("⚠️ Failed to fetch detail:", err);
      setError(
        "Failed to fetch detail" +
        (err instanceof Error ? (": " + err.message) : '.')
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!kodeBahanBaku) {
      setIsLoading(false);
      setError(null);
      return;
    }

    fetchData();
  }, [kodeBahanBaku]);

  return { data, setData, isLoading, error, setError, refetch: fetchData };
};
