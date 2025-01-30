import React from 'react';
import SidebarMenu from './components/SidebarMenu';
import clsx from 'clsx';
import Image from 'next/image';

const Sidebar: React.FC = () => {
  return (
    <div
      className={clsx(
        'flex flex-col gap-4',
        'w-[14.5rem] h-full',
        // 'bg-surfacePrimary',
        'bg-surfacePrimary/50', // TEST:
        'shadow-[4px_0px_10px_0px_rgba(0,_0,_0,_0.1)]',
      )}
    >
      <SidebarHeader />
      <div
        className={clsx(
          'flex flex-col gap-4',
          'w-full h-full',
          'px-3.5 pb-4',
          'bg-logo-green-accent/20', // TEST:
        )}
      >
        <nav className={clsx('h-full')}>
          <SidebarMenu />
        </nav>
        <nav className={clsx('pt-4.5', 'border-t border-lineSecondary')}>
          <SidebarMenu />
        </nav>
      </div>
    </div>
  );
};

const SidebarHeader: React.FC = () => {
  return (
    <div
      className={clsx(
        'flex flex-col shrink-0 gap-2.5 items-center justify-end',
        'h-headerHeight px-3.5',
        'text-center text-txtHeading',
      )}
    >
      <Image
        priority
        src="/logo/logo-industri-hijau.png"
        alt="Logo Industri Hijau"
        width={300}
        height={300}
        className={clsx('w-[55] h-[55]')}
      />
      <span className={clsx('text-[1.25rem] font-bold leading-none')}>
        SELASIH
      </span>
      <span className={clsx('text-sm font-medium')}>
        Sistem Elektronik Layanan
        <br />
        Standar Industri Hijau
      </span>
    </div>
  );
};

export default Sidebar;
