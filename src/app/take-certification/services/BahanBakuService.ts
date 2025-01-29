import { fetchBahanBaku } from './api';
import { BahanBakuData } from '@/app/take-certification/models/types';
import { ApiResponse } from '@/core/types/ApiResponse';
import { AxiosResponse } from 'axios';

export const getBahanBakuData = async (uuidTransaksi: string): Promise<BahanBakuData[]> => {
  try {
    const response = await fetchBahanBaku(uuidTransaksi);

    if (!response || !response.data || !Array.isArray(response.data.data)) {
      throw new Error('Invalid API response');
    }

    return response.data.data;
  } catch (error) {
    console.error('Failed to fetch Bahan Baku data:', error);
    throw error;
  }
};
