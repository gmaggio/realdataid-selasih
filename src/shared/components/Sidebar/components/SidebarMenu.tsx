import Button from '@/shared/components/Button';
import SidebarMenuItem from '@/shared/components/Sidebar/components/SidebarMenuItem';
import {
  AcademicCapIcon,
  BeakerIcon,
  CakeIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import React from 'react';

const SidebarMenu: React.FC = () => {
  return (
    <div className={clsx('flex flex-col gap-3.5')}>
      <SidebarMenuItem Icon={AcademicCapIcon} variants={{ type: 'hilite' }}>
        Test 1
      </SidebarMenuItem>
      <SidebarMenuItem Icon={BeakerIcon}>Test 2</SidebarMenuItem>
      <SidebarMenuItem Icon={CakeIcon}>Test 3</SidebarMenuItem>

      {/* TEST: */}
      <Button
        variants={{
          type: 'outline',
          size: 'lg',
        }}
        Icon={AcademicCapIcon}
        iconElement={<BeakerIcon className="size-12" />}
        onClick={() => {}}
      >
        Test
      </Button>
    </div>
  );
};

export default SidebarMenu;
