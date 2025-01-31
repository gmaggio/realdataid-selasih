export interface BahanBakuMainData {
  kode: string;
  kode_transaksi_id: string;
  kode_lini_produksi: string;
  lini_produksi: string;
  nama: string;
  tipe_bahan_baku: string;
  satuan: string;
  jenis_bahan_baku: string;
  asal_bahan_baku: string;
  total_penggunaan: string;
}

export interface BahanBakuData extends BahanBakuMainData {
  addition: BahanBakuAddition[];
  bulan_1: string;
  bulan_2: string;
  bulan_3: string;
  bulan_4: string;
  bulan_5: string;
  bulan_6: string;
  bulan_7: string;
  bulan_8: string;
  bulan_9: string;
  bulan_10: string;
  bulan_11: string;
  bulan_12: string;
  uuid_user: string;
}

export interface BahanBakuAddition {
  kode_file: string;
  nama: string;
}
