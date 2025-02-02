'use client';

import TakeCertificationContent from '@/app/take-certification/components/TakeCertificationContent';
import { IDProvider } from '@/app/take-certification/hooks/useIdContext';
import { Screen } from '@/shared/components';
import { CheckBadgeIcon } from '@heroicons/react/24/outline';

interface TakeCertificationProps {
  uuidTransaksi: string;
}

const TakeCertificationPage: React.FC<TakeCertificationProps> = ({
  uuidTransaksi,
}) => {
  return (
    <IDProvider>
      <Screen
        subheader={{
          icon: CheckBadgeIcon,
          heading: 'Sertifikasi Awal',
          title: '46335.01:2024 • Industri Air Mineral',
        }}
      >
        <TakeCertificationContent />
      </Screen>
    </IDProvider>
  );
};

export default TakeCertificationPage;
