"use client";

import { BahanBakuData, BahanBakuMainData } from '@/app/take-certification/models/types';
import { getBahanBakuData, getBahanBakuDetail } from '@/app/take-certification/services/BahanBakuService';
import { useAsyncData } from '@/core/hooks/useAsyncData';

export const useBahanBakuData = (uuidTransaksi: string) => useAsyncData<BahanBakuMainData[]>({
  initialValue: [],
  fetchFunction: () => getBahanBakuData(uuidTransaksi),
  dependencies: [uuidTransaksi],
});

export const useBahanBakuDetail = (kodeBahanBaku: string | null) => useAsyncData<BahanBakuData | null>({
  initialValue: {
    kode: '',
    kode_lini_produksi: '',
    lini_produksi: '',
    nama: '',
    tipe_bahan_baku: '',
    satuan: '',
    jenis_bahan_baku: '',
    asal_bahan_baku: '',
    addition: [],
    bulan_1: '',
    bulan_2: '',
    bulan_3: '',
    bulan_4: '',
    bulan_5: '',
    bulan_6: '',
    bulan_7: '',
    bulan_8: '',
    bulan_9: '',
    bulan_10: '',
    bulan_11: '',
    bulan_12: '',
    total_penggunaan: '',
    kode_transaksi_id: '',
    uuid_user: '',
  },
  fetchFunction: () => getBahanBakuDetail(kodeBahanBaku ?? ''),
  dependencies: [kodeBahanBaku],
  entityName: 'detail',
  preFetch: () => {
    if (!kodeBahanBaku) return false;
  },
});
