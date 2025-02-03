import { BahanBakuData, BahanBakuID, BahanBakuMainData, SelectItemData } from '@/app/take-certification/models/types';
import { ApiResponse } from '@/core/types/ApiResponse';
import axios from 'axios';

const API_BASE_URL = 'http://kemenperin.dev-rdi.tech:8001/perusahaan/take-certification';
const MOCK_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${MOCK_TOKEN}`, // TODO: Set correct token
  },
});

// Fetch Bahan Baku
export const fetchBahanBaku = async (uuidTransaksi: string): Promise<ApiResponse<BahanBakuMainData[]>> => {
  const response = await apiClient.post("/bahan-baku-utama/get", { uuid_transaksi: uuidTransaksi });
  return response.data;
};

// Save Bahan Baku
export const postBahanBaku = async (data: BahanBakuData): Promise<ApiResponse<BahanBakuID>> => {
  const response = await apiClient.post('/bahan-baku-utama/post', data);
  return response.data;
};

// Update Bahan Baku
export const updateBahanBaku = async (data: BahanBakuData): Promise<ApiResponse<BahanBakuID>> => {
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

// Upload File
// TODO: Update `unknown` to correct type
export const uploadFile = async (file: File, uuidUser: string): Promise<ApiResponse<unknown>> => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('uuid_user', uuidUser);

  const response = await apiClient.post('/bahan-baku-utama/file/post', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

  return response.data;
};

/* FORM DATA */

// Get Lini Produksi
export const fetchLiniProduksi = async (uuidTransaksi: string): Promise<ApiResponse<SelectItemData>> => {
  const response = await apiClient.post('/lini-produksi/select', { uuid_transaksi: uuidTransaksi });
  return response.data;
};

// Get Bahan Baku Satuan
export const fetchBahanBakuSatuan = async (uuidTransaksi: string): Promise<ApiResponse<SelectItemData>> => {
  const response = await apiClient.post('/bahan-baku-utama/satuan', { uuid_transaksi: uuidTransaksi });
  return response.data;
};
