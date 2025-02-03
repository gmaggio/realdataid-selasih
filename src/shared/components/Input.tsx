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
          // Focus
          'focus-within:border-lineTertiary/50',

          // Disabled
          'has-[input:disabled]:border-linePrimary/50',
          'has-[input:disabled]:bg-surfaceInactive/50',
          'has-[input:disabled]:text-txtBody2',

          // Invalid
          'has-[input:invalid]:border-semanticImportant',
        ),
        containerClass,
      )}
      {...rest}
    >
      {leading}
      <input
        className={twMerge(
          clsx(
            'w-full',

            // Remove spinner-button
            '[appearance:textfield]',
          ),
          className,
        )}
        {...rest}
      />
      {trailing}
    </div>
  );
};

export default Input;
