import { BahanBakuData, BahanBakuMainData } from "@/app/take-certification/models/types";
import { ApiResponse } from "@/core/types/ApiResponse";
import { AxiosResponse } from "axios";

// Mock data for Bahan Baku
export const mockTransactionID = '11aa0000-0000-0000-0000-000000000000';

// Mock data for Bahan Baku
export const mockBahanBakuData: BahanBakuMainData[] = [
  {
    kode: '00000000-0000-0000-0000-000000001111',
    kode_lini_produksi: '00000000-0000-0000-0000-00000000aaaa',
    lini_produksi: 'Lini 1',
    nama: 'Amonia',
    tipe_bahan_baku: 'Amonia 10%',
    satuan: 'ton',
    jenis_bahan_baku: 'Daur Ulang',
    asal_bahan_baku: 'Lokal',
    total_penggunaan: '12',
    kode_transaksi_id: mockTransactionID,
  },
  {
    kode: '00000000-0000-0000-0000-000000002222',
    kode_lini_produksi: '00000000-0000-0000-0000-00000000aaaa',
    lini_produksi: 'Lini 1',
    nama: 'Amonia',
    tipe_bahan_baku: 'Amonia 10%',
    satuan: 'ton',
    jenis_bahan_baku: 'Daur Ulang',
    asal_bahan_baku: 'Lokal',
    total_penggunaan: '12',
    kode_transaksi_id: mockTransactionID,
  },
];


// Mock data for Bahan Baku detail
export const mockBahanBakuDetailData: BahanBakuData =
{
  kode: '00000000-0000-0000-0000-000000001111',
  kode_lini_produksi: '00000000-0000-0000-0000-00000000aaaa',
  lini_produksi: 'Lini 1',
  nama: 'Amonia',
  tipe_bahan_baku: 'Amonia 10%',
  satuan: 'ton',
  jenis_bahan_baku: 'Daur Ulang',
  asal_bahan_baku: 'Lokal',
  addition: [],
  bulan_1: '0',
  bulan_2: '0',
  bulan_3: '0',
  bulan_4: '0',
  bulan_5: '0',
  bulan_6: '0',
  bulan_7: '0',
  bulan_8: '0',
  bulan_9: '0',
  bulan_10: '0',
  bulan_11: '0',
  bulan_12: '0',
  total_penggunaan: '12',
  kode_transaksi_id: mockTransactionID,
  uuid_user: '00000000-0000-0000-0000-000123456789',
};


// Mock Axios Response
export const mockAxiosResponse: AxiosResponse<ApiResponse<BahanBakuMainData[]>> = {
  data: {
    code: 200,
    message: 'Success',
    data: mockBahanBakuData,
  },
  status: 200,
  statusText: 'OK',
  headers: {},
  config: {},
} as AxiosResponse;
