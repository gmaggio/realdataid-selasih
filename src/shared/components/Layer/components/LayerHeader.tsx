import clsx from 'clsx';
import React from 'react';

export interface LayerHeaderProps {
  title: string;
}

const LayerHeader: React.FC<LayerHeaderProps> = ({ title }) => {
  return (
    <div
      className={clsx(
        'flex flex-row items-center',
        'text-2xl text-txtHeading font-bold',
        'px-5.5! py-4',
        'border-b border-lineSecondary',
      )}
    >
      {title}
    </div>
  );
};

export default LayerHeader;
