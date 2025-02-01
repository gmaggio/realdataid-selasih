import Layer from '@/shared/components/Layer/Layer';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import {
  HTMLAttributes,
  useEffect,
  useRef,
  type ComponentPropsWithoutRef,
} from 'react';

export type ModalProps = ComponentPropsWithoutRef<'dialog'> & {
  modalClass?: HTMLAttributes<HTMLDivElement>['className'];
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({
  children,
  modalClass,
  open,
  onClose,
  ...rest
}) => {
  const ref = useRef<HTMLDialogElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

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

  // Close modal when clicking outside the content
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (overlayRef.current && e.target === overlayRef.current) {
      onClose();
    }
  };

  return (
    <dialog ref={ref} className="group" {...rest}>
      <div
        ref={overlayRef}
        className={twMerge(
          clsx(
            'fixed inset-0 grid place-content-center',
            'bg-black/75 opacity-0',

            // Animate
            'transition-all group-data-[open]:opacity-100',
          ),
          modalClass,
        )}
        onClick={handleOutsideClick}
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
