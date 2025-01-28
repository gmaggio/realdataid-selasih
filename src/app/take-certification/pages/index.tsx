import React, { useEffect, useState } from 'react';
import { fetchBahanBaku } from '../services/api';
import { BahanBakuData } from '@/app/take-certification/models/types';

const TakeCertificationPage = () => {
  const [data, setData] = useState<BahanBakuData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetchBahanBaku(
          '0cc32c66-4c6f-47bd-ab04-09aacc67f738'
        );
        setData(response.data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <div>sidebar</div>
      <div>
        <div>header</div>
        <div>content</div>
      </div>
    </div>
  );
};

export default TakeCertificationPage;
