import clsx from 'clsx';
import React from 'react';

export interface SubHeaderProps {
  Icon: React.ComponentType;
  heading: string;
  title: string;
}

const SubHeader: React.FC<SubHeaderProps> = ({ Icon, heading, title }) => {
  return (
    <div
      className={clsx(
        'flex flex-row items-center gap-4.5',
        'w-full h-[5.5rem] px-7.5',
        'bg-no-repeat bg-right bg-surfacePrimary bg-[url(/assets/header-decoration.svg)]',
        'shadow-[0px_1px_5px_0px_rgba(0,_0,_0,_0.025)]',
      )}
    >
      <div
        className={clsx(
          'w-[2.875rem] h-[2.875rem]',
          'p-3.5 rounded-lg',
          'text-txtHilite bg-surfaceSecondary',
        )}
      >
        <Icon />
      </div>
      <div className={clsx('flex-flex-col gap-2')}>
        <div className={clsx('text-sm text-txtBody2')}>{heading}</div>
        <div className={clsx('text-lg text-txtHeading font-bold')}>{title}</div>
      </div>
    </div>
  );
};

export default SubHeader;
