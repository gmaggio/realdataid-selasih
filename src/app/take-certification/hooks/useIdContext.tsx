import { BahanBakuMainData } from '@/app/take-certification/models/types';
import { createContext, useContext, ReactNode } from 'react';

interface IDContextProps {
  uuid_transaksi: string;
  uuid_user: string;
  mockBahanBakuList: BahanBakuMainData[];
}

const IDContext = createContext<IDContextProps | undefined>(undefined);

export const IDProvider = ({ children }: { children: ReactNode }) => {
  // Hardcoded values for testing purposes
  const value = {
    uuid_transaksi: '0cc32c66-4c6f-47bd-ab04-09aacc67f738',
    uuid_user: '00000000-0000-0000-0000-000123456789',
    mockBahanBakuList: mockBahanBakuList,
  };

  return <IDContext.Provider value={value}>{children}</IDContext.Provider>;
};

export const useID = () => {
  const context = useContext(IDContext);
  if (!context) {
    throw new Error('useID must be used within an IDProvider');
  }
  return context;
};

/* TEMP: Hardcoded responses for testing purpose */

const mockBahanBakuList = [
  {
    kode: '2327decb-186e-40e1-b2f9-52bdcd916106',
    kode_transaksi_id: '0cc32c66-4c6f-47bd-ab04-09aacc67f738',
    kode_lini_produksi: 'b61a0beb-bfa1-4036-902e-2006c8cd4241',
    lini_produksi: 'Lini 1',
    nama: 'z',
    tipe_bahan_baku: 'z',
    satuan: 'ton',
    jenis_bahan_baku: 'Non Daur Ulang',
    asal_bahan_baku: 'Campuran',
    total_penggunaan: '24',
  },
  {
    kode: '1cd60980-ba8a-48e9-bcd3-c958d56f1527',
    kode_transaksi_id: '0cc32c66-4c6f-47bd-ab04-09aacc67f738',
    kode_lini_produksi: 'b61a0beb-bfa1-4036-902e-2006c8cd4241',
    lini_produksi: 'Lini 1',
    nama: 'a',
    tipe_bahan_baku: 'a',
    satuan: 'g',
    jenis_bahan_baku: 'Non Daur Ulang',
    asal_bahan_baku: 'Lokal',
    total_penggunaan: '12',
  },
  {
    kode: '9182d351-4754-4453-a197-e6a4e95de7ff',
    kode_transaksi_id: '0cc32c66-4c6f-47bd-ab04-09aacc67f738',
    kode_lini_produksi: 'b61a0beb-bfa1-4036-902e-2006c8cd4241',
    lini_produksi: 'Lini 1',
    nama: 'a',
    tipe_bahan_baku: 'a',
    satuan: 'g',
    jenis_bahan_baku: 'Non Daur Ulang',
    asal_bahan_baku: 'Lokal',
    total_penggunaan: '12',
  },
  {
    kode: '6ca3e272-fd9c-4cd2-b782-a30fdfb8bc55',
    kode_transaksi_id: '0cc32c66-4c6f-47bd-ab04-09aacc67f738',
    kode_lini_produksi: 'b61a0beb-bfa1-4036-902e-2006c8cd4241',
    lini_produksi: 'Lini 1',
    nama: 'a',
    tipe_bahan_baku: 'a',
    satuan: 'g',
    jenis_bahan_baku: 'Non Daur Ulang',
    asal_bahan_baku: 'Lokal',
    total_penggunaan: '12',
  },
  {
    kode: '492e29bb-867a-4570-a1ad-fb1c84bbc36a',
    kode_transaksi_id: '0cc32c66-4c6f-47bd-ab04-09aacc67f738',
    kode_lini_produksi: 'b61a0beb-bfa1-4036-902e-2006c8cd4241',
    lini_produksi: 'Lini 1',
    nama: 'a',
    tipe_bahan_baku: 'a',
    satuan: 'g',
    jenis_bahan_baku: 'Non Daur Ulang',
    asal_bahan_baku: 'Lokal',
    total_penggunaan: '12',
  },
  {
    kode: '6c4b4dbc-2e96-4434-85ff-d5cc3f1d622b',
    kode_transaksi_id: '0cc32c66-4c6f-47bd-ab04-09aacc67f738',
    kode_lini_produksi: 'b61a0beb-bfa1-4036-902e-2006c8cd4241',
    lini_produksi: 'Lini 1',
    nama: 'a',
    tipe_bahan_baku: 'a',
    satuan: 'g',
    jenis_bahan_baku: 'Non Daur Ulang',
    asal_bahan_baku: 'Lokal',
    total_penggunaan: '12',
  },
  {
    kode: 'a9506021-c27d-4d1f-88a0-25605865cc65',
    kode_transaksi_id: '0cc32c66-4c6f-47bd-ab04-09aacc67f738',
    kode_lini_produksi: 'b61a0beb-bfa1-4036-902e-2006c8cd4241',
    lini_produksi: 'Lini 1',
    nama: 'a',
    tipe_bahan_baku: 'a',
    satuan: 'g',
    jenis_bahan_baku: 'Non Daur Ulang',
    asal_bahan_baku: 'Lokal',
    total_penggunaan: '12',
  },
  {
    kode: '9cff37c9-58b8-4e3a-826c-4180a5f90b15',
    kode_transaksi_id: '0cc32c66-4c6f-47bd-ab04-09aacc67f738',
    kode_lini_produksi: 'b61a0beb-bfa1-4036-902e-2006c8cd4241',
    lini_produksi: 'Lini 1',
    nama: 'a',
    tipe_bahan_baku: 'a',
    satuan: 'g',
    jenis_bahan_baku: 'Non Daur Ulang',
    asal_bahan_baku: 'Lokal',
    total_penggunaan: '12',
  },
];
