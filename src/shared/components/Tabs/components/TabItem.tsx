import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export interface TabItemProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  href: string;
}

const TabItem: React.FC<TabItemProps> = ({ label, href, ...rest }) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link href={href}>
      <div
        className={twMerge(
          clsx(
            'text-lg text-txtBody font-semibold',
            'pt-3.5 pb-3',
            'relative',
            'hover:text-txtHilite',
          ),
          isActive &&
            clsx(
              'text-txtHilite',
              'before:content-[""]',
              'before:absolute',
              'before:left-0 before:right-0 before:bottom-0',
              'before:h-[.1875rem] before:bg-btnPrimary',
            ),
        )}
        {...rest}
      >
        {label}
      </div>
    </Link>
  );
};

export default TabItem;
