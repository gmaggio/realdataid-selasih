import clsx from 'clsx';
import React, { ButtonHTMLAttributes } from 'react';
import { tv, VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button, { buttonVariants } from '@/shared/components/Button';

const sidebarMenuItemVariants = tv({
  base: clsx(
    'item-start justify-start',
    'px-3.5 py-2',
    'font-bold text-base',
    'w-full',
    'cursor-pointer',
  ),
  variants: {
    type: {
      primary: twMerge(
        buttonVariants.variants.type.ghost,
        clsx(
          'bg-transparent',
          'hover:opacity-100',
          'hover:bg-btnSecondary',
          'hover:text-btnPrimary',
        ),
      ),
      hilite: twMerge(
        buttonVariants.variants.type.primary,
        clsx('hover:bg-btnPrimary', 'hover:opacity-50'),
      ),
    },
    disabled: {
      true: 'pointer-events-none',
    },
    active: {
      true: clsx(
        'pointer-events-none',
        'bg-btnSecondary',
        'text-btnPrimary',
        'relative overflow-hidden',
        'before:content-[""]',
        'before:absolute',
        'before:left-0 before:top-0 before:bottom-0',
        'before:w-1 before:bg-btnPrimary',
      ),
    },
  },
  compoundVariants: [
    {
      type: 'primary',
      disabled: true,
      class: 'text-txtBody2 opacity-50',
    },
    {
      type: 'hilite',
      disabled: true,
      class: 'text-txtOnDark bg-btnTertiary/20',
    },
  ],
  defaultVariants: {
    type: 'primary',
  },
});

const sidebarMenuItemIconVariants = tv({
  variants: {
    disabled: {
      true: 'text-txtBody/50',
    },
  },
});

type SidebarMenuItemVariants = VariantProps<typeof sidebarMenuItemVariants>;

export interface SidebarMenuItemProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  children?: React.ReactNode;
  href: string;
  variants?: SidebarMenuItemVariants;
  Icon: React.ComponentType;
  hideLabel?: boolean;
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
  label,
  children,
  href,
  className,
  variants,
  Icon,
  hideLabel = false,
  ...rest
}) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link href={href}>
      <Button
        disabled={variants?.disabled === true}
        style={{ width: '100%' }}
        Icon={Icon}
        iconClass={sidebarMenuItemIconVariants({
          disabled:
            variants?.disabled === true &&
            (variants?.type === undefined || variants?.type === 'primary'),
        })}
        className={twMerge(
          sidebarMenuItemVariants({ ...variants, active: isActive }),
          className,
        )}
        {...rest}
      >
        {!hideLabel && (children || label)}
      </Button>
    </Link>
  );
};

export default SidebarMenuItem;
