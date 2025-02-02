import SidebarMenuItem from '@/shared/components/Sidebar/components/SidebarMenuItem';
import {
  ArrowRightStartOnRectangleIcon,
  CheckBadgeIcon,
  ChevronLeftIcon,
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
        'relative z-100',
        'w-sidebar h-screen',

        // Collapsed States
        'has-checked:w-sidebarCollapsed',
        'transition-all',
        'duration-500',

        'has-checked:[&>aside]:w-sidebarCollapsed',
        '[&>aside]:transition-all',
        '[&>aside]:duration-500',

        'has-checked:[&_#sidebar-header]:w-sidebarCollapsed',
        '[&_#sidebar-header]:transition-all',
        '[&_#sidebar-header]:duration-500',

        'has-checked:[&_#logo~*]:opacity-0',
        '[&_#logo~*]:opacity-100',
        '[&_#logo~*]:transition-all',
        '[&_#logo~*]:duration-500',

        'has-checked:[&_[data-type=button-icon]~*]:opacity-0',
        '[&_[data-type=button-icon]~*]:opacity-100',
        '[&_[data-type=button-icon]~*]:transition-all',
        '[&_[data-type=button-icon]~*]:duration-500',
      )}
    >
      <aside
        className={clsx(
          'fixed',
          'flex flex-col gap-4 shrink-0',
          'w-sidebar h-screen z-100',
          'bg-surfacePrimary',
          'drop-shadow-[4px_0px_4px_rgba(0,_0,_0,_0.1)]',
        )}
      >
        <SidebarToggler />
        <SidebarHeader />
        <SideBarMenus />
      </aside>
    </div>
  );
};

const SidebarToggler: React.FC = () => (
  <label
    htmlFor="sidemenu-toggle"
    id="sidemenu-toggle-collapse"
    className={clsx(
      'absolute',
      'right-0 translate-x-1/2',
      'top-[5.9375rem]',
      'z-150 cursor-pointer',
    )}
  >
    <input
      id="sidemenu-toggle"
      type="checkbox"
      className={clsx('peer hidden')}
    />

    <div
      className={clsx(
        'bg-btnPrimary',
        'p-1',
        'rounded-full',
        'size-6 text-txtOnDark',
        'hover:ring-6 hover:ring-btnSecondary',
        'rotate-0 peer-checked:rotate-180',
        'transition-transform',
      )}
    >
      <ChevronLeftIcon />
    </div>
  </label>
);

const SidebarHeader: React.FC = () => {
  return (
    <div
      id="sidebar-header"
      className={clsx(
        'flex flex-col items-center',
        'overflow-hidden',

        'flex flex-col shrink-0 gap-2.5 items-center justify-end',
        'w-sidebar h-headerHeight px-3.5',
        'text-center text-txtHeading',
      )}
    >
      <div id="logo" className={clsx('w-[3.4375rem]')}>
        <Image
          priority
          src="/logo/logo-industri-hijau.png"
          alt="Logo Industri Hijau"
          width={300}
          height={300}
          className={clsx('w-[3.4375rem] h-[55px]')}
        />
      </div>
      <div
        className={clsx(
          'text-[1.25rem] font-bold leading-none',
          'whitespace-nowrap',
        )}
      >
        SELASIH
      </div>
      <div className={clsx('text-sm font-medium', 'whitespace-nowrap')}>
        Sistem Elektronik Layanan
        <br />
        Standar Industri Hijau
      </div>
    </div>
  );
};

const SideBarMenus: React.FC = () => (
  <div
    className={clsx(
      'flex flex-col gap-4',
      'flex-1',
      'w-full h-dvh',
      'px-3.5 pb-4',
      'overflow-y-scroll',
    )}
  >
    <nav className={clsx('flex-1 h-auto')}>
      <SidebarMenu
        items={[
          <SidebarMenuItem
            key="ajukan-sertifikasi"
            href=""
            icon={DocumentTextIcon}
            variants={{ type: 'hilite' }}
          >
            Ajukan Sertifikasi
          </SidebarMenuItem>,
          <SidebarMenuItem key="beranda" href="" icon={HomeIcon}>
            Beranda
          </SidebarMenuItem>,
          <SidebarMenuItem key="pembayaran" href="" icon={CreditCardIcon}>
            Pembayaran
          </SidebarMenuItem>,
          <SidebarMenuItem
            key="proses-sertifikasi"
            href="/"
            icon={CheckBadgeIcon}
          >
            Proses Sertifikasi
          </SidebarMenuItem>,
          <SidebarMenuItem key="bantuan" href="" icon={QuestionMarkCircleIcon}>
            Bantuan
          </SidebarMenuItem>,
        ]}
      />
    </nav>
    <nav className={clsx('pt-4.5', 'border-t border-lineSecondary')}>
      <SidebarMenu
        items={[
          <SidebarMenuItem key="pengaturan-profil" href="" icon={UserIcon}>
            Pengaturan Profil
          </SidebarMenuItem>,
          <SidebarMenuItem
            key="keluar"
            href=""
            icon={ArrowRightStartOnRectangleIcon}
          >
            Keluar
          </SidebarMenuItem>,
        ]}
      />
    </nav>
  </div>
);

export default Sidebar;
