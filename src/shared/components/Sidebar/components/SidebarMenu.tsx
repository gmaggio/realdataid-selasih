import SidebarMenuItem from '@/shared/components/Sidebar/components/SidebarMenuItem';
import clsx from 'clsx';

export interface SidebarMenuProps {
  items: React.ReactElement<typeof SidebarMenuItem>[];
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ items }) => {
  return (
    <nav className={clsx('flex flex-col gap-3.5')}>
      {items.map((item) => item)}
    </nav>
  );
};

export default SidebarMenu;
