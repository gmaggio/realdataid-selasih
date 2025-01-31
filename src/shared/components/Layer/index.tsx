import clsx from 'clsx';
import React from 'react';
import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export interface LayerProps extends HTMLAttributes<HTMLDivElement> {}

const Layer: React.FC<LayerProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        clsx(
          'flex flex-col',
          'w-full min-h-8',
          'bg-surfacePrimary',
          'border border-lineSecondary rounded-xl',
          '*:px-4.5',

          'bg-logo-green-accent/20', // TEST:
        ),
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Layer;
