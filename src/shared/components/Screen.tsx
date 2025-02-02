import Header from '@/shared/components/Header';
import Sidebar from '@/shared/components/Sidebar';
import SubHeader, { SubHeaderProps } from '@/shared/components/SubHeader';
import clsx from 'clsx';
import { HTMLAttributes } from 'react';

export interface ScreenProps extends HTMLAttributes<HTMLDivElement> {
  subheader: SubHeaderProps;
}

const Screen: React.FC<ScreenProps> = ({ subheader, children }) => {
  return (
    <div className={clsx('flex flex-row', 'h-full min-h-screen')}>
      <Sidebar />
      <div className={clsx('w-full flex-1 overflow-scroll')}>
        <Header />
        <SubHeader
          icon={subheader.icon}
          heading={subheader.heading}
          title={subheader.title}
        />
        <div className={clsx('flex flex-col gap-7.5', 'p-7.5')}>{children}</div>
      </div>
    </div>
  );
};

export default Screen;
