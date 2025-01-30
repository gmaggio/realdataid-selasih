import Sidebar from '@/shared/components/Sidebar';
import clsx from 'clsx';
import React from 'react';

const Screen: React.FC = () => {
  return (
    <div className={clsx('flex flex-row', 'h-full')}>
      <Sidebar />
      <div>
        <div>header</div>
        <div>sub-header</div>
        <div>content</div>
      </div>
    </div>
  );
};

export default Screen;
