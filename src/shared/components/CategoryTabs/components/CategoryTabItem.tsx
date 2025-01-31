import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export interface CategoryTabItemProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  href: string;
}

const CategoryTabItem: React.FC<CategoryTabItemProps> = ({
  label,
  href,
  ...rest
}) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link href={href}>
      <div
        className={twMerge(
          clsx(
            'text-base text-txtBody2 font-bold',
            'pt-5',
            'relative',
            'before:content-[""]',
            'before:absolute',
            'before:left-0 before:right-0 before:top-0',
            'before:h-2 before:rounded-full',
            'before:bg-lineSecondary',
            'hover:text-txtHilite',
            'hover:before:bg-lineTertiary',
          ),
          isActive && clsx('before:h-2 before:bg-linePrimary'),
        )}
        {...rest}
      >
        {label}
      </div>
    </Link>
  );
};

export default CategoryTabItem;
