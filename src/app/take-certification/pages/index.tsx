'use client';

import { useBahanBakuData } from '@/app/take-certification/hooks/useBahanBakuData';
import { Screen } from '@/shared/components';

interface TakeCertificationProps {
  uuidTransaksi: string;
}

const TakeCertificationPage: React.FC<TakeCertificationProps> = ({
  uuidTransaksi,
}) => {
  const { data, isLoading, error } = useBahanBakuData(uuidTransaksi);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return <Screen />;
};

export default TakeCertificationPage;
