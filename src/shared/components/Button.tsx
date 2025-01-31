import clsx from 'clsx';
import React, { ButtonHTMLAttributes, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv, type VariantProps } from 'tailwind-variants';

export const buttonVariants = tv({
  base: clsx(
    'flex flex-row gap-2.5 item-center justify-center',
    'font-bold',
    'rounded-button',
    'hover:opacity-60',
    'cursor-pointer',
  ),
  variants: {
    type: {
      primary: 'bg-btnPrimary text-txtOnDark',
      outline: 'outline outline-btnPrimary text-btnPrimary',
      outlineAlt: 'outline outline-btnTertiary text-btnTertiary',
      ghost: 'text-btnTertiary',
      support: 'bg-btnSupport text-txtHeading',
    },
    size: {
      lg: 'px-7.5 py-3 text-lg',
      md: 'px-7 py-2.5 text-base',
      sm: 'p-2.5 text-base gap-1.5',
    },
  },
  defaultVariants: {
    type: 'primary',
    size: 'lg',
    align: 'center',
  },
});

type ButtonVariants = VariantProps<typeof buttonVariants>;

interface ButtonBaseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variants?: ButtonVariants;
}

interface ButtonWithIconProps extends ButtonBaseProps {
  Icon?: React.ComponentType;
  iconClass?: string | undefined;
  iconElement?: never;
}

interface ButtonWithIconElementProps extends ButtonBaseProps {
  Icon?: never;
  iconClass?: never;
  iconElement?: React.ReactNode;
}

export type ButtonProps = ButtonWithIconProps | ButtonWithIconElementProps;

const Button: React.FC<ButtonProps> = (props) => {
  const { children, className, variants, ...rest } = props;

  return (
    <button className={twMerge(buttonVariants(variants), className)} {...rest}>
      {'Icon' in props && props.Icon && (
        <div className={twMerge('size-4.5', props.iconClass)}>
          <props.Icon />
        </div>
      )}
      {!('Icon' in props) && 'iconElement' in props && props.iconElement}
      {children}
    </button>
  );
};

export default Button;
