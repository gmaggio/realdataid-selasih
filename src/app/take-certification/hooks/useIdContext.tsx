import {
  BahanBakuData,
  BahanBakuMainData,
  SelectItemData,
} from '@/app/take-certification/models/types';
import { createContext, useContext, ReactNode } from 'react';

interface IDContextProps {
  uuid_transaksi: string;
  uuid_user: string;
  mockBahanBakuList: BahanBakuMainData[];
  mockLiniProduksiOptions: SelectItemData[];
  getMockBahanBakuDetail: (id: string) => BahanBakuData;
}

const IDContext = createContext<IDContextProps | undefined>(undefined);

export const IDProvider = ({ children }: { children: ReactNode }) => {
  // Hardcoded values for testing purposes
  const value = {
    uuid_transaksi: uuidTransaksi,
    uuid_user: uuidUser,
    mockBahanBakuList: mockBahanBakuList,
    mockLiniProduksiOptions: mockLiniProduksiOptions,
    getMockBahanBakuDetail: getMockBahanBakuDetail,
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

const uuidTransaksi = '0cc32c66-4c6f-47bd-ab04-09aacc67f738';
const uuidUser = '00000000-0000-0000-0000-000123456789';

const mockBahanBakuListBase: BahanBakuMainData[] = [
  {
    kode: '00000000-0000-0000-0000-000000000001',
    kode_transaksi_id: '00000000-0000-0000-0000-aaaaaaaaaaaa',
    kode_lini_produksi: '00000000-0000-0000-0000-bbbbbbbbbbbb',
    lini_produksi: 'Besi',
    nama: 'Amonia',
    tipe_bahan_baku: 'Amonia 20%',
    jenis_bahan_baku: 'Non Daur Ulang',
    asal_bahan_baku: 'Ekspor',
    total_penggunaan: '20',
    satuan: 'Ton',
  },
  {
    kode: '00000000-0000-0000-0000-000000000002',
    kode_transaksi_id: '00000000-0000-0000-0000-aaaaaaaaaaaa',
    kode_lini_produksi: '00000000-0000-0000-0000-cccccccccccc',
    lini_produksi: 'Kayu',
    nama: 'Amonia',
    tipe_bahan_baku: 'Amonia 10%',
    jenis_bahan_baku: 'Daur Ulang',
    asal_bahan_baku: 'Impor',
    total_penggunaan: '50.489',
    satuan: 'Kg',
  },
];

const mockBahanBakuList = Array.from({ length: 5 }, (_, index) => {
  const formatNumber = (num: number) => num.toString().padStart(11, '0');
  return [
    {
      ...mockBahanBakuListBase[0],
      kode: `00000000-0000-0000-0000-${formatNumber(index * 2 + 1)}`,
    },
    {
      ...mockBahanBakuListBase[1],
      kode: `00000000-0000-0000-0000-${formatNumber(index * 2 + 2)}`,
    },
  ];
}).flat();

const getMockBahanBakuDetail = (id: string) => {
  const mainData = mockBahanBakuListBase.find((dat) => dat.kode === id);
  if (!mainData) {
    throw new Error(`BahanBaku with id ${id} not found`);
  }
  return {
    ...mainData,
    addition: [],
    bulan_1: '1',
    bulan_2: '10',
    bulan_3: '1',
    bulan_4: '1',
    bulan_5: '1',
    bulan_6: '1',
    bulan_7: '100',
    bulan_8: '1',
    bulan_9: '1',
    bulan_10: '1',
    bulan_11: '1',
    bulan_12: '1',
    uuid_user: '00000000-0000-0000-0000-xxxxxxxxxxxx',
  };
};

const mockLiniProduksiOptions: SelectItemData[] = [
  { kode: '00000000-0000-0000-0000-bbbbbbbbbbbb', nama: 'Besi' },
  { kode: '00000000-0000-0000-0000-cccccccccccc', nama: 'Kayu' },
  { kode: '00000000-0000-0000-0000-dddddddddddd', nama: 'Tanah' },
];
