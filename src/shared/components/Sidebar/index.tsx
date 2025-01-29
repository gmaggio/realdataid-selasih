import React from 'react';
import SidebarMenu from './components/SidebarMenu';

const Sidebar: React.FC = () => {
  return (
    <div>
      <SidebarHeader />
      <div>
        <SidebarMenu />
      </div>
      <div>
        <SidebarMenu />
      </div>
    </div>
  );
};

const SidebarHeader = () => {
  return <div>index</div>;
};

export default Sidebar;
