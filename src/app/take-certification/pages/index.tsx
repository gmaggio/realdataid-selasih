'use client';

import { useBahanBakuData } from '@/app/take-certification/hooks/useBahanBakuData';
import { Screen } from '@/shared/components';
import clsx from 'clsx';

interface TakeCertificationProps {
  uuidTransaksi: string;
}

const TakeCertificationPage: React.FC<TakeCertificationProps> = ({
  uuidTransaksi,
}) => {
  const { data, isLoading, error } = useBahanBakuData(uuidTransaksi);

  if (isLoading)
    return (
      <div
        className={clsx('flex items-center justify-center', 'w-full h-screnn')}
      >
        Loading...
      </div>
    );

  if (error)
    return (
      <div
        className={clsx('flex items-center justify-center', 'w-full h-screnn')}
      >
        Error: {error}
      </div>
    );

  return <Screen />;
};

export default TakeCertificationPage;
