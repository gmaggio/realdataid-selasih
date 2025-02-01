import Layer from '@/shared/components/Layer';
import clsx from 'clsx';
import { useEffect, useRef, type ComponentPropsWithoutRef } from 'react';

export type ModalProps = ComponentPropsWithoutRef<'dialog'> & {
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ children, open, onClose, ...rest }) => {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current!;
    if (open) {
      dialog.showModal();
      dialog.dataset.open = '';
    } else {
      delete dialog.dataset.open;
      const handler = () => dialog.close();
      const inner = dialog.children[0] as HTMLElement;
      inner.addEventListener('transitionend', handler);
      return () => inner.removeEventListener('transitionend', handler);
    }
  }, [open]);

  return (
    <dialog ref={ref} className="group" {...rest}>
      <div
        className={clsx(
          'fixed inset-0 grid place-content-center',
          'bg-black/75 opacity-0',

          // Animate
          'transition-all group-data-[open]:opacity-100',
        )}
      >
        <Layer
          className={clsx(
            'scale-75 opacity-0',

            // Animate
            'transition-all',
            'group-data-[open]:scale-100 group-data-[open]:opacity-100',
          )}
        >
          {children}
        </Layer>
      </div>
    </dialog>
  );
};

export default Modal;
