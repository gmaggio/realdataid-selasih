import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import {
  HTMLAttributes,
  useEffect,
  useRef,
  type ComponentPropsWithoutRef,
} from 'react';
import {
  Layer,
  LayerHeader,
  LayerHeaderProps,
} from '@/shared/components/Layer';
import { XMarkIcon } from '@heroicons/react/24/outline';
import IconButton from '@/shared/components/IconButton';

export type ModalProps = ComponentPropsWithoutRef<'dialog'> & {
  header?: LayerHeaderProps;
  modalClass?: HTMLAttributes<HTMLDivElement>['className'];
  onClose: () => void;
  hasCloseButton?: boolean;
};

const Modal: React.FC<ModalProps> = ({
  header,
  children,
  modalClass,
  open,
  onClose,
  hasCloseButton,
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
        className={clsx(
          'fixed inset-0 grid place-content-center',
          'overflow-scroll',
          // 'bg-[black]/75 opacity-0',

          'bg-[black] opacity-100', // TEST:

          // Animate
          'transition-all group-data-[open]:opacity-100',
        )}
        onClick={handleOutsideClick}
      >
        <Layer
          id="modal-layer"
          className={twMerge(
            clsx(
              'h-fit',
              'm-6',
              'scale-75 opacity-0',

              // Animate
              'transition-all',
              'group-data-[open]:scale-100 group-data-[open]:opacity-100',
            ),
            modalClass,
          )}
        >
          {(header || hasCloseButton) && (
            <LayerHeader
              title={header?.title || ''}
              actions={[
                ...(header?.actions || []),
                hasCloseButton && (
                  <IconButton
                    key="modal-close"
                    icon={XMarkIcon}
                    iconClass="text-txtBody2"
                    onClick={onClose}
                  />
                ),
              ]}
              actionsClass={header?.actionsClass}
            />
          )}
          {children}
        </Layer>
      </div>
    </dialog>
  );
};

export default Modal;
