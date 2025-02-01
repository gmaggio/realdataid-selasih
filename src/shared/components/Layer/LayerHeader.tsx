import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export type LayerHeaderProps = HTMLAttributes<HTMLDivElement> & {
  title: string;
  actions?: React.ReactNode[];
  actionsClass?: HTMLAttributes<HTMLDivElement>['className'];
};

const LayerHeader: React.FC<LayerHeaderProps> = ({
  title,
  actions,
  actionsClass,
  className,
  ...rest
}) => {
  return (
    <div
      className={twMerge(
        clsx(
          'flex flex-row items-center justify-between',
          'text-2xl text-txtHeading font-bold',
          'px-5.5! py-3',
          'border-b border-lineSecondary',
        ),
        className,
      )}
      {...rest}
    >
      {title}
      {actions && (
        <div
          className={twMerge(
            clsx('flex flex-row gap-3 items-center justify-end'),
            actionsClass,
          )}
        >
          {actions.map((action) => action)}
        </div>
      )}
    </div>
  );
};

export default LayerHeader;
