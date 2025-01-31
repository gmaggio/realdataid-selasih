import HeaderActions from '@/shared/components/Header/components/HeaderActions';
import HeaderProfile from '@/shared/components/Header/components/HeaderProfile';
import clsx from 'clsx';
import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <div
      className={clsx('flex flex-row items-center', 'w-full h-[4.5rem] px-7.5')}
    >
      <HeaderLogo />
      <HeaderActions />
      <HeaderProfile />
    </div>
  );
};

const HeaderLogo: React.FC = () => {
  return (
    <Image
      priority
      src="/logo/logo-kemenperin.png"
      alt="Kemenperin"
      width={600}
      height={178}
      objectFit={'contain'}
      className={clsx('w-[134] h-[40]')}
    />
  );
};

export default Header;
