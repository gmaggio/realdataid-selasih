"use client";

import { BahanBakuData, BahanBakuMainData } from '@/app/take-certification/models/types';
import { getBahanBakuData, getBahanBakuDetail, removeBahanBaku } from '@/app/take-certification/services/BahanBakuService';
import { useAsyncData } from '@/core/hooks/useAsyncData';
import { useState } from 'react';

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
  preFetch: () => {
    if (!kodeBahanBaku) return false;
  },
});

export const useDeleteBahanBaku = () => {
  const [deletingRows, setDeletingRows] = useState<Record<string, boolean>>({});
  const [error, setError] = useState<string | null>(null);

  const deleteItem = async (kode: string, uuidUser: string, onSuccess?: () => void) => {
    setDeletingRows((prev) => ({ ...prev, [kode]: true }));
    setError(null);

    try {
      await removeBahanBaku(kode, uuidUser);
      console.log("✅ Successfully deleted Bahan Baku:", kode);
      if (onSuccess) onSuccess();
    } catch (err) {
      console.error("❌ Error deleting Bahan Baku:", err);
      setError(err instanceof Error ? err.message : "Failed to delete data.");
    } finally {
      setDeletingRows((prev) => ({ ...prev, [kode]: false }));
    }
  };

  return { deleteItem, deletingRows, setDeletingRows, error, setError };
};
