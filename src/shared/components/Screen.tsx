import Header from '@/shared/components/Header';
import Sidebar from '@/shared/components/Sidebar';
import SubHeader from '@/shared/components/SubHeader';
import { AcademicCapIcon, BeakerIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

const Screen: React.FC = () => {
  return (
    <div className={clsx('flex flex-row', 'h-full min-h-screen')}>
      <Sidebar />
      <div className={clsx('w-full')}>
        <Header />
        <SubHeader />
        <div></div>
      </div>
    </div>
  );
};

export default Screen;
