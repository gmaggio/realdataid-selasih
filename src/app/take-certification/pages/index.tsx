'use client';

import TakeCertificationContent from '@/app/take-certification/components/TakeCertificationContent';
import { useBahanBakuData } from '@/app/take-certification/hooks/useBahanBakuData';
import { Screen } from '@/shared/components';
import { CheckBadgeIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

interface TakeCertificationProps {
  uuidTransaksi: string;
}

const TakeCertificationPage: React.FC<TakeCertificationProps> = ({
  uuidTransaksi,
}) => {
  /* const { data, isLoading, error } = useBahanBakuData(uuidTransaksi);

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
    ); */

  return (
    <Screen
      subheader={{
        Icon: CheckBadgeIcon,
        heading: 'Sertifikasi Awal',
        title: '46335.01:2024 • Industri Air Mineral',
      }}
    >
      <TakeCertificationContent />
    </Screen>
  );
};

export default TakeCertificationPage;
