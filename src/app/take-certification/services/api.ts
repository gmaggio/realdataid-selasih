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

export const fetchBahanBaku = async (uuidTransaksi: string): Promise<ApiResponse<BahanBakuData[]>> => {
  const response = await apiClient.post('/bahan-baku-utama/get', { uuid_transaksi: uuidTransaksi });
  return response.data;
};

export const updateBahanBaku = (data: BahanBakuData) =>
  apiClient.post('/bahan-baku-utama/update', data);

export const deleteBahanBaku = (kode: string, uuidUser: string) =>
  apiClient.post('/bahan-baku-utama/delete', { kode, uuid_user: uuidUser });

export const uploadFile = (file: File, uuidUser: string) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('uuid_user', uuidUser);

  return apiClient.post('/bahan-baku-utama/file/post', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
