import clsx from 'clsx';
import React, { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv, type VariantProps } from 'tailwind-variants';

export const IconButtonVariants = tv({
  base: clsx(
    'flex item-center justify-center',
    'p-1.5',
    'rounded-full',
    'text-txtBody2',
    'hover:text-btnPrimary hover:bg-btnSecondary',
    'cursor-pointer',
    'disabled:opacity-50 disabled:pointer-events-none',
  ),
  variants: {
    disabled: {
      true: 'opacity-50 pointer-events-none',
    },
  },
});

type IconButtonVariants = VariantProps<typeof IconButtonVariants>;

interface IconButtonBaseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variants?: IconButtonVariants;
}

interface IconButtonFromTypeProps extends IconButtonBaseProps {
  icon: React.ComponentType;
  iconClass?: string | undefined;
  iconElement?: never;
}

interface IconButtonFromElementProps extends IconButtonBaseProps {
  icon?: never;
  iconClass?: never;
  iconElement: React.ReactNode;
}

export type IconButtonProps =
  | IconButtonFromTypeProps
  | IconButtonFromElementProps;

const IconButton: React.FC<IconButtonProps> = (props) => {
  const { className, iconClass, variants, ...rest } = props;

  return (
    <button
      className={twMerge(IconButtonVariants(variants), className)}
      {...rest}
    >
      {'icon' in props && props.icon && (
        <div className={twMerge('size-4.5', props.iconClass)}>
          <props.icon />
        </div>
      )}
      {!('icon' in props) && 'iconElement' in props && props.iconElement}
    </button>
  );
};

export default IconButton;
