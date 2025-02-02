import clsx from 'clsx';
import React, { HTMLAttributes, InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  containerClass?: HTMLAttributes<HTMLDivElement>['className'];
  leading?: string | React.ReactNode;
  trailing?: string | React.ReactNode;
};

const Input: React.FC<InputProps> = ({
  containerClass,
  className,
  leading,
  trailing,
  ...rest
}) => {
  return (
    <div
      className={twMerge(
        'inputBox',
        clsx(
          // '*:flex-[0_0_0%]',

          // Focus
          'focus-within:border-lineTertiary/50',

          // Disabled
          'has-[input:disabled]:border-linePrimary/50',
          'has-[input:disabled]:bg-surfaceInactive',
          'has-[input:disabled]:text-txtBody2',

          // Invalid
          'has-[input:invalid]:border-semanticImportant',

          'bg-logo-green-accent/30' /* TEST: */,
        ),
        containerClass,
      )}
      {...rest}
    >
      {leading}
      <input
        // size={50}
        className={twMerge(clsx('w-full'), className)}
        {...rest}
      />
      {trailing}
    </div>
  );
};

export default Input;
