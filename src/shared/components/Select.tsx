import { default as chevronDown } from '@/shared/assets/icons/chevron-down.svg';
import clsx from 'clsx';
import React, { SelectHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  options: {
    value: string | number;
    label: string;
  }[];
};

const Select: React.FC<SelectProps> = ({
  className,
  style,
  options,
  ...rest
}) => {
  return (
    <select
      disabled={options.length === 0}
      className={twMerge(
        'inputBox',
        clsx(
          'hover:cursor-pointer',

          // Appearance
          'appearance-none',
          'bg-no-repeat',
          'bg-[position:right_.875rem_center]',
          'bg-[size:.75rem_.75rem]',

          // Disabled
          'disabled:border-linePrimary/50',
          'disabled:bg-surfaceInactive/50',
          'disabled:text-txtBody2',
        ),
        className,
      )}
      style={{
        backgroundImage: `url(${chevronDown.src})`,
        ...style,
      }}
      {...rest}
    >
      {options.map(({ value, label }) => (
        <option
          key={value}
          value={value}
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {label}
        </option>
      ))}
    </select>
  );
};

export default Select;
