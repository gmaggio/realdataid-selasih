import { BahanBakuData, BahanBakuMainData, SelectItemData } from '@/app/take-certification/models/types';
import axios from 'axios';
import { fetchBahanBaku, fetchBahanBakuDetail, fetchBahanBakuSatuan, fetchLiniProduksi } from './api';

export const getBahanBakuData = async (uuidTransaksi: string): Promise<BahanBakuMainData[]> => {
  try {
    const response = await fetchBahanBaku(uuidTransaksi);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.message || error.message;
      console.error("Failed to fetch Bahan Baku data:", message);
      throw new Error(message || "Failed to fetch Bahan Baku data.");
    } else {
      console.error("Unexpected error:", error);
      throw new Error("An unexpected error occurred.");
    }
  }
};

export const getBahanBakuDetail = async (kodeBahanBaku: string): Promise<BahanBakuData> => {
  try {
    const response = await fetchBahanBakuDetail(kodeBahanBaku);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch Bahan Baku detail:", error);
    throw error;
  }
};

/* FORM OPTIONS DATA */

export const getLiniProduksi = async (uuidTransaksi: string): Promise<SelectItemData[]> => {
  try {
    const response = await fetchLiniProduksi(uuidTransaksi);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch Lini Produksi:", error);
    throw error;
  }
};

export const getBahanBakuSatuan = async (): Promise<SelectItemData[]> => {
  try {
    const response = await fetchBahanBakuSatuan();
    return response.data;
  } catch (error) {
    console.error("Failed to fetch Satuan options:", error);
    throw error;
  }
};
