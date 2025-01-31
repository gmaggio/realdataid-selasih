import SidebarMenuItem from '@/shared/components/Sidebar/components/SidebarMenuItem';
import {
  ArrowRightStartOnRectangleIcon,
  CheckBadgeIcon,
  CreditCardIcon,
  DocumentTextIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import SidebarMenu from './components/SidebarMenu';

const Sidebar: React.FC = () => {
  return (
    <div
      className={clsx(
        'flex flex-col gap-4 shrink-0',
        'w-[14.5rem] h-auto z-100',
        // 'bg-surfacePrimary',
        'bg-surfacePrimary/50', // TEST:
        'shadow-[4px_0px_10px_0px_rgba(0,_0,_0,_0.1)]',
      )}
    >
      <SidebarHeader />

      <div
        className={clsx('flex flex-col gap-4', 'w-full h-full', 'px-3.5 pb-4')}
      >
        <nav className={clsx('flex-1 h-full')}>
          <SidebarMenu
            items={[
              <SidebarMenuItem
                key="ajukan-sertifikasi"
                href=""
                Icon={DocumentTextIcon}
                variants={{ type: 'hilite' }}
              >
                Ajukan Sertifikasi
              </SidebarMenuItem>,
              <SidebarMenuItem key="beranda" href="" Icon={HomeIcon}>
                Beranda
              </SidebarMenuItem>,
              <SidebarMenuItem key="pembayaran" href="" Icon={CreditCardIcon}>
                Pembayaran
              </SidebarMenuItem>,
              <SidebarMenuItem
                key="proses-sertifikasi"
                href="/"
                Icon={CheckBadgeIcon}
              >
                Proses Sertifikasi
              </SidebarMenuItem>,
              <SidebarMenuItem
                key="bantuan"
                href=""
                Icon={QuestionMarkCircleIcon}
              >
                Bantuan
              </SidebarMenuItem>,
            ]}
          />
        </nav>

        <nav className={clsx('pt-4.5', 'border-t border-lineSecondary')}>
          <SidebarMenu
            items={[
              <SidebarMenuItem key="pengaturan-profil" href="" Icon={UserIcon}>
                Pengaturan Profil
              </SidebarMenuItem>,
              <SidebarMenuItem
                key="keluar"
                href=""
                Icon={ArrowRightStartOnRectangleIcon}
              >
                Keluar
              </SidebarMenuItem>,
            ]}
          />
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
