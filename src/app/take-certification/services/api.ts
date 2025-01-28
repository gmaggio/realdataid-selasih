import { BahanBakuData } from '@/app/take-certification/models/types';
import axios from 'axios';

const API_BASE_URL = 'http://kemenperin.dev-rdi.tech:8001/perusahaan/take-certification';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

export interface ApiResponse<T> {
  code: number;
  message: string;
  data: T;
}



// Get Lini Produksi
// TODO: Update `unknown` to match the response data type
export const fetchLiniProduksi = async (uuidTransaksi: string): Promise<ApiResponse<unknown>> => {
  const response = await apiClient.post('/lini-produksi/select', { uuid_transaksi: uuidTransaksi });
  return response.data;
};

// Fetch Bahan Baku
export const fetchBahanBaku = async (uuidTransaksi: string): Promise<ApiResponse<BahanBakuData[]>> => {
  const response = await apiClient.post('/bahan-baku-utama/get', { uuid_transaksi: uuidTransaksi });
  return response.data;
};

// Update Bahan Baku
export const updateBahanBaku = async (data: BahanBakuData): Promise<ApiResponse<BahanBakuData>> => {
  const response = await apiClient.post('/bahan-baku-utama/update', data);
  return response.data;
};

// Delete Bahan Baku
export const deleteBahanBaku = async (kode: string, uuidUser: string): Promise<ApiResponse<null>> => {
  const response = await apiClient.post('/bahan-baku-utama/delete', { kode, uuid_user: uuidUser });
  return response.data;
};

// Fetch Bahan Baku Detail
export const fetchBahanBakuDetail = async (kodeBahanBaku: string): Promise<ApiResponse<BahanBakuData>> => {
  const response = await apiClient.post('/bahan-baku-utama/detail', { kode_bahan_baku: kodeBahanBaku });
  return response.data;
};

// Save Bahan Baku Detail
export const postBahanBakuDetail = async (data: BahanBakuData): Promise<ApiResponse<BahanBakuData>> => {
  const response = await apiClient.post('/bahan-baku-utama/detail', data);
  return response.data;
};

// Upload File
export const uploadFile = async (file: File, uuidUser: string): Promise<ApiResponse<null>> => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('uuid_user', uuidUser);

  const response = await apiClient.post('/bahan-baku-utama/file/post', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data;
};
