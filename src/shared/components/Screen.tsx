import Header from '@/shared/components/Header';
import Sidebar from '@/shared/components/Sidebar';
import { AcademicCapIcon, BeakerIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

const Screen: React.FC = () => {
  return (
    <div className={clsx('flex flex-row', 'h-full min-h-screen')}>
      <Sidebar />
      <div className={clsx('w-full')}>
        <Header />
        <div>sub-header</div>
        <div></div>
      </div>
    </div>
  );
};

export default Screen;
