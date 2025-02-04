import { fetchBahanBaku } from "@/app/take-certification/services/api";
import { getBahanBakuData } from "@/app/take-certification/services/BahanBakuService";
import { mockAxiosResponse, mockBahanBakuData } from "@/app/take-certification/tests/mocks/ApiMockData";

jest.mock('../../services/api', () => ({
  fetchBahanBaku: jest.fn(),
}));

describe('Service Tests: getBahanBakuData', () => {
  it('returns processed data from fetchBahanBaku', async () => {
    (fetchBahanBaku as jest.Mock).mockResolvedValue(mockAxiosResponse.data);

    const result = await getBahanBakuData('test-uuid');

    expect(result).toEqual(mockBahanBakuData);
    expect(result.length).toBeGreaterThan(0);
  });

  it('handles API errors properly', async () => {
    (fetchBahanBaku as jest.Mock).mockRejectedValue(new Error());

    await expect(getBahanBakuData('test-uuid')).rejects.toThrow('An unexpected error occurred.');
  });
});
