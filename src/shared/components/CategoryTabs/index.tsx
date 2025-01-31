import CategoryTabItem, {
  CategoryTabItemProps,
} from '@/shared/components/CategoryTabs/components/CategoryTabItem';
import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface CategoryTabsProps extends HTMLAttributes<HTMLDivElement> {
  items: CategoryTabItemProps[];
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({
  className,
  items,
  ...rest
}) => {
  return (
    <div
      className={twMerge(
        clsx('flex flex-row gap-2', 'py-7', '*:flex-1'),
        className,
      )}
      {...rest}
    >
      {items.map((item) => (
        <CategoryTabItem key={item.label} {...item} />
      ))}
    </div>
  );
};

export default CategoryTabs;
