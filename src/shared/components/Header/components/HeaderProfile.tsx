import clsx from 'clsx';
import React from 'react';
import Image from 'next/image';

const HeaderProfile: React.FC = () => {
  return (
    <div className={clsx('flex flex-row gap-3.5', 'pl-4.5')}>
      <HeaderAvatar />
      <div className={clsx('flex flex-col gap-1 items- justify-center')}>
        <div className={clsx('text-lg text-txtHeading font-bold leading-none')}>
          PT ABC Indonesia
        </div>
        <div className={clsx('text-sm text-txtBody2')}>Jakarta</div>
      </div>
    </div>
  );
};

const HeaderAvatar: React.FC = () => {
  return (
    <div
      className={clsx(
        'flex items-center justify-center',
        'w-9 h-9 p-1',
        'border border-linePrimary rounded-full',
      )}
    >
      <Image
        priority
        src="/logo/company-logo-abc_food.png"
        alt="Kemenperin"
        width={59}
        height={53}
        className={clsx('object-contain')}
      />
    </div>
  );
};

export default HeaderProfile;
