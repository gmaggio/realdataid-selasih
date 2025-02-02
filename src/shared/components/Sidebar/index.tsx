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
import IconButton from '@/shared/components/IconButton';

const Sidebar: React.FC = () => {
  return (
    <div className={clsx('w-sidebar h-screen z-100')}>
      <aside
        className={clsx(
          'fixed',
          'flex flex-col gap-4 shrink-0',
          'w-sidebar h-screen z-100',
          'bg-surfacePrimary',

          // 'bg-surfacePrimary/50', // TEST:

          'drop-shadow-[4px_0px_4px_rgba(0,_0,_0,_0.1)]',
        )}
      >
        <SidebarHeader />
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
                <SidebarMenuItem
                  key="bantuan"
                  href=""
                  icon={QuestionMarkCircleIcon}
                >
                  Bantuan
                </SidebarMenuItem>,
                // TEST:
                ...Array(0)
                  .fill(null)
                  .map((_, index) => (
                    <SidebarMenuItem
                      key={'test' + index}
                      href=""
                      icon={QuestionMarkCircleIcon}
                    >
                      TEST {index}
                    </SidebarMenuItem>
                  )),
              ]}
            />
          </nav>
          <nav className={clsx('pt-4.5', 'border-t border-lineSecondary')}>
            <SidebarMenu
              items={[
                <SidebarMenuItem
                  key="pengaturan-profil"
                  href=""
                  icon={UserIcon}
                >
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
      </aside>
    </div>
  );
};

const SidebarHeader: React.FC = () => {
  return (
    <div
      className={clsx(
        'relative',
        'flex flex-col shrink-0 gap-2.5 items-center justify-end',
        'h-headerHeight px-3.5',
        'text-center text-txtHeading',
      )}
    >
      <IconButton
        icon={ChevronLeftIcon}
        className={clsx(
          'absolute',
          'right-0 translate-x-1/2',
          'top-[5.625rem]',
        )}
        iconClass={clsx(
          'bg-btnPrimary',
          'p-1',
          'rounded-full',
          'size-6 text-txtOnDark',
        )}
      />

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
