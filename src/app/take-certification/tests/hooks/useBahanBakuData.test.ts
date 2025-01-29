import { fetchBahanBaku } from "@/app/take-certification/services/api";
import { getBahanBakuData } from "@/app/take-certification/services/BahanBakuService";
import { mockAxiosResponse, mockBahanBakuData, mockTransactionID } from "@/app/take-certification/tests/mocks/ApiMockData";

jest.mock('../../services/api', () => ({
  fetchBahanBaku: jest.fn(),
}));

describe('Service Tests: getBahanBakuData', () => {
  it('returns processed data from fetchBahanBaku', async () => {
    (fetchBahanBaku as jest.Mock).mockResolvedValue(mockAxiosResponse);

    const result = await getBahanBakuData(mockTransactionID);

    expect(result).toEqual(mockBahanBakuData);
    expect(result.length).toBeGreaterThan(0);
  });

  it('handles API errors properly', async () => {
    (fetchBahanBaku as jest.Mock).mockRejectedValue(new Error('API Error'));

    await expect(getBahanBakuData(mockTransactionID)).rejects.toThrow('API Error');
  });
});
