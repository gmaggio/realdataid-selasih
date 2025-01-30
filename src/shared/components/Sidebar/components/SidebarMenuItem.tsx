import { Button, buttonVariants } from '@/shared/components';
import { AcademicCapIcon, BeakerIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';
import { tv, VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';

const base = clsx(
  'item-start justify-start',
  'px-3.5 py-2',
  'font-bold text-base',
  // 'hover:opacity-60',
  'w-full',
  'cursor-pointer',
);

// const test = buttonVariants.variants.type.primary;

const sidebarMenuItemVariants = tv({
  base: clsx(
    'item-start justify-start',
    'px-3.5 py-2',
    'font-bold text-base',
    // 'hover:opacity-60',
    'w-full',
    'cursor-pointer',
  ),
  variants: {
    type: {
      primary: twMerge(buttonVariants.variants.type.ghost, 'bg-transparent'),
      hilite: twMerge(buttonVariants.variants.type.primary),
    },
  },
  defaultVariants: {
    type: 'primary',
  },
});

type SidebarMenuItemVariants = VariantProps<typeof sidebarMenuItemVariants>;

export interface SidebarMenuItemProps
  extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variants?: SidebarMenuItemVariants;
  Icon: React.ComponentType;
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
  children,
  className,
  variants,
  Icon,
  ...rest
}) => {
  return (
    <Button
      Icon={Icon}
      className={twMerge(sidebarMenuItemVariants(variants), className)}
      {...rest}
      onClick={() => {}}
    >
      {children}
    </Button>
  );
};

export default SidebarMenuItem;
