import Layer from '@/shared/components/Layer';
import clsx from 'clsx';
import { HTMLAttributes } from 'react';

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {}

const Modal: React.FC<ModalProps> = ({ ...rest }) => {
  return (
    <dialog className="backdrop:bg-gray-50">
      <Layer {...rest}>
        <form method="dialog">Test</form>
      </Layer>
    </dialog>
  );
};

export default Modal;
