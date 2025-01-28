import { fetchBahanBaku } from "@/app/take-certification/services/api";

jest.mock('../services/api', () => ({
  fetchBahanBaku: jest.fn(),
}));


const mockData = [
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
    kode_transaksi_id: '11aa0000-0000-0000-0000-000000000000',
    uuid_user: '00000000-0000-0000-0000-000123456789',
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
    kode_transaksi_id: '11aa0000-0000-0000-0000-000000000000',
    uuid_user: '00000000-0000-0000-0000-000123456789',
  },
];


describe('API Tests', () => {
  it('handles fetched data successfully', async () => {

    const mockedFetchBahanBaku = fetchBahanBaku as jest.MockedFunction<typeof fetchBahanBaku>;

    mockedFetchBahanBaku.mockResolvedValue({
      code: 200,
      message: 'Success',
      data: mockData,
    });

    const result = await fetchBahanBaku('11aa0000-0000-0000-0000-000000000000');

    expect(result.code).toBe(200);
    expect(result.message).toBe('Success');
    expect(result.data).toEqual(mockData);
  });
});
