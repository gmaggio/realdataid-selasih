import Button from '@/shared/components/Button';
import Sidebar from '@/shared/components/Sidebar';
import { AcademicCapIcon, BeakerIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

const Screen: React.FC = () => {
  return (
    <div className={clsx('flex flex-row', 'h-full min-h-screen')}>
      <Sidebar />
      <div>
        <div>header</div>
        <div>sub-header</div>
        <div></div>
      </div>
    </div>
  );
};

export default Screen;
