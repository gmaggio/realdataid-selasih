import TabItem, {
  TabItemProps,
} from '@/shared/components/Tabs/components/TabItem';
import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface TabProps extends HTMLAttributes<HTMLDivElement> {
  items: TabItemProps[];
}

const Tabs: React.FC<TabProps> = ({ className, items, ...rest }) => {
  return (
    <div
      className={twMerge(
        clsx('flex flex-row gap-3.5', 'border-b border-lineSecondary'),
        className,
      )}
      {...rest}
    >
      {items.map((item) => (
        <TabItem key={item.label} {...item} />
      ))}
    </div>
  );
};

export default Tabs;
