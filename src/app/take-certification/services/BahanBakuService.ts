import { BahanBakuData, BahanBakuID, BahanBakuMainData, SelectItemData } from '@/app/take-certification/models/types';
import axios from 'axios';
import { fetchBahanBaku, fetchBahanBakuDetail, fetchBahanBakuSatuan, fetchLiniProduksi, postBahanBaku, updateBahanBaku } from './api';
import { handleServiceError } from '@/core/services/errorHandler';

export const getBahanBakuData = async (uuidTransaksi: string): Promise<BahanBakuMainData[]> => {
  try {
    const response = await fetchBahanBaku(uuidTransaksi);
    return response.data;
  } catch (error) {
    handleServiceError(error, 'fetch Bahan Baku data');
    return [];
  }
};

export const getBahanBakuDetail = async (kodeBahanBaku: string): Promise<BahanBakuData | null> => {
  try {
    const response = await fetchBahanBakuDetail(kodeBahanBaku);
    return response.data;
  } catch (error) {
    handleServiceError(error, 'fetch Bahan Baku detail');
    return null;
  }
};

export const createBahanBaku = async (data: BahanBakuData): Promise<BahanBakuID | null> => {
  try {
    const response = await postBahanBaku(data);
    return response.data;
  } catch (error) {
    handleServiceError(error, 'create Bahan Baku');
    return null;
  }
};

export const editBahanBaku = async (data: BahanBakuData): Promise<BahanBakuID | null> => {
  try {
    const response = await updateBahanBaku(data);
    return response.data;
  } catch (error) {
    handleServiceError(error, 'edit Bahan Baku');
    return null;
  }
};

/* FORM OPTIONS DATA */

export const getLiniProduksi = async (uuidTransaksi: string): Promise<SelectItemData[]> => {
  try {
    const response = await fetchLiniProduksi(uuidTransaksi);
    return response.data;
  } catch (error) {
    handleServiceError(error, 'fetch Lini Produksi options');
    return [];
  }
};

export const getBahanBakuSatuan = async (): Promise<SelectItemData[]> => {
  try {
    const response = await fetchBahanBakuSatuan();
    return response.data;
  } catch (error) {
    handleServiceError(error, 'fetch Satuan options');
    return [];
  }
};
