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

const mockBahanBakuListBase = [
  {
    kode: '00000000-0000-0000-0000-111111111111',
    kode_transaksi_id: '00000000-0000-0000-0000-aaaaaaaaaaaa',
    kode_lini_produksi: '00000000-0000-0000-0000-999999999999',
    lini_produksi: 'Pupuk Perkebunan',
    nama: 'Amonia',
    tipe_bahan_baku: 'Amonia 20%',
    jenis_bahan_baku: 'Non Daur Ulang',
    asal_bahan_baku: 'Ekspor',
    total_penggunaan: '20',
    satuan: 'Ton',
  },
  {
    kode: '00000000-0000-0000-0000-111111111111',
    kode_transaksi_id: '00000000-0000-0000-0000-aaaaaaaaaaaa',
    kode_lini_produksi: '00000000-0000-0000-0000-999999999999',
    lini_produksi: 'Pupuk Perkebunan',
    nama: 'Amonia',
    tipe_bahan_baku: 'Amonia 10%',
    jenis_bahan_baku: 'Daur Ulang',
    asal_bahan_baku: 'Impor',
    total_penggunaan: '50.489',
    satuan: 'Ton',
  },
];

const mockBahanBakuList = Array.from(
  { length: 5 },
  () => mockBahanBakuListBase,
).flat();
