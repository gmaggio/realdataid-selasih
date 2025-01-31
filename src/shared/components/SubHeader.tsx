import clsx from 'clsx';
import React from 'react';

const SubHeader: React.FC = () => {
  return (
    <div
      className={clsx(
        'flex flex-row',
        'h-[5.5rem]',

        'bg-logo-green-accent/20', // TEST:
      )}
    >
      SubHeader
    </div>
  );
};

export default SubHeader;
