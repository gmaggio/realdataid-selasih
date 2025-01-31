import { CheckBadgeIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import React from 'react';

const SubHeader: React.FC = () => {
  return (
    <div
      className={clsx(
        'flex flex-row items-center gap-4.5',
        'w-full h-[5.5rem] px-7.5',
        'bg-no-repeat bg-right bg-surfacePrimary bg-[url(/assets/header-decoration.svg)]',
      )}
    >
      <CheckBadgeIcon
        className={clsx(
          'w-[2.875rem] h-[2.875rem]',
          'p-3.5 rounded-lg',
          'text-txtHilite bg-surfaceSecondary',
        )}
      />
      <div className={clsx('flex-flex-col gap-2')}>
        <div className={clsx('text-sm text-txtBody2')}>Sertifikasi Awal</div>
        <div className={clsx('text-lg text-txtHeading font-bold')}>
          46335.01:2024 • Industri Air Mineral
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
