import { BahanBakuData, BahanBakuMainData, SelectItemData } from '@/app/take-certification/models/types';
import axios from 'axios';
import { fetchBahanBaku, fetchBahanBakuDetail, fetchBahanBakuSatuan, fetchLiniProduksi } from './api';
import { handleServiceError } from '@/core/services/errorHandler';

export const getBahanBakuData = async (uuidTransaksi: string): Promise<BahanBakuMainData[]> => {
  try {
    const response = await fetchBahanBaku(uuidTransaksi);
    return response.data;
  } catch (error) {
    handleServiceError(error, 'Bahan Baku data');
    return [];
  }
};

export const getBahanBakuDetail = async (kodeBahanBaku: string): Promise<BahanBakuData | null> => {
  try {
    const response = await fetchBahanBakuDetail(kodeBahanBaku);
    return response.data;
  } catch (error) {
    handleServiceError(error, 'Bahan Baku detail');
    return null;
  }
};

/* FORM OPTIONS DATA */

export const getLiniProduksi = async (uuidTransaksi: string): Promise<SelectItemData[]> => {
  try {
    const response = await fetchLiniProduksi(uuidTransaksi);
    return response.data;
  } catch (error) {
    handleServiceError(error, 'Lini Produksi options');
    return [];
  }
};

export const getBahanBakuSatuan = async (): Promise<SelectItemData[]> => {
  try {
    const response = await fetchBahanBakuSatuan();
    return response.data;
  } catch (error) {
    handleServiceError(error, 'Satuan options');
    return [];
  }
};
