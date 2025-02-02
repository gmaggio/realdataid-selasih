import clsx from 'clsx';
import React, { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv, type VariantProps } from 'tailwind-variants';

export const buttonVariants = tv({
  base: clsx(
    'flex flex-row gap-2.5 item-center justify-center',
    'self-center',
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
      lg: 'px-7.5 py-2 text-lg',
      md: 'px-7 py-2 text-base',
      sm: 'px-2.5 py-2 text-base gap-1.5',
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
  variants?: ButtonVariants;
}

interface ButtonWithIconProps extends ButtonBaseProps {
  icon?: React.ComponentType;
  iconClass?: string | undefined;
  iconElement?: never;
}

interface ButtonWithIconElementProps extends ButtonBaseProps {
  icon?: never;
  iconClass?: never;
  iconElement?: React.ReactNode;
}

export type ButtonProps = ButtonWithIconProps | ButtonWithIconElementProps;

const Button: React.FC<ButtonProps> = (props) => {
  const { children, className, variants, iconClass, ...rest } = props;

  return (
    <button className={twMerge(buttonVariants(variants), className)} {...rest}>
      {'icon' in props && props.icon && (
        <div
          data-type="button-icon"
          className={twMerge('size-4.5', props.iconClass)}
        >
          <props.icon />
        </div>
      )}
      {!('icon' in props) && 'iconElement' in props && props.iconElement}
      <span>{children}</span>
    </button>
  );
};

export default Button;
