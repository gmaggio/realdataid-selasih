import IconButton from '@/shared/components/IconButton';
import { BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import React from 'react';

const HeaderActions: React.FC = () => {
  return (
    <div className={clsx('flex flex-row flex-1 justify-end', 'gap-4.5 px-4.5')}>
      <IconButton Icon={MagnifyingGlassIcon} />
      <IconButton Icon={BellIcon} />
    </div>
  );
};

export default HeaderActions;
