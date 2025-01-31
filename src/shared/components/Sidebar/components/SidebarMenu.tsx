import SidebarMenuItem from '@/shared/components/Sidebar/components/SidebarMenuItem';
import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';

export interface SidebarMenuProps extends HTMLAttributes<HTMLDivElement> {
  items: React.ReactElement<typeof SidebarMenuItem>[];
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ items }) => {
  return (
    <div className={clsx('flex flex-col gap-3.5')}>
      {items.map((item) => item)}
    </div>
  );
};

export default SidebarMenu;
