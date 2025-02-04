import { fetchBahanBaku } from '@/app/take-certification/services/api';
import { mockAxiosResponse, mockBahanBakuData, mockTransactionID } from '@/app/take-certification/tests/mocks/ApiMockData';
import { AxiosResponse } from 'axios';

jest.mock('../../services/api', () => ({
  fetchBahanBaku: jest.fn(),
}));

describe('API Tests', () => {
  it('handles fetched data successfully', async () => {

    const mockedFetchBahanBaku = fetchBahanBaku as jest.MockedFunction<typeof fetchBahanBaku>;

    mockedFetchBahanBaku.mockResolvedValue(mockAxiosResponse.data);

    const result = await fetchBahanBaku(mockTransactionID);

    expect(result.code).toBe(200);
    expect(result.message).toBe('Success');
    expect(result.data).toEqual(mockBahanBakuData);
  });
});
