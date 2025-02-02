import { Button } from '@/shared/components';
import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export type AtLeastOne<T, K extends keyof T = keyof T> = Partial<T> &
  { [P in K]: Required<Pick<T, P>> }[K];

export interface TakeCertificationFooterActionProps {
  onCancel?: () => void;
  onSaveDraft?: () => void;
  onNext?: () => void;
  classClass?: HTMLAttributes<HTMLDivElement>['className'];
}

export type TakeCertificationFooterProps =
  AtLeastOne<TakeCertificationFooterActionProps>;

const TakeCertificationFooter: React.FC<TakeCertificationFooterProps> = ({
  onCancel,
  onSaveDraft,
  onNext,
  classClass,
}) => {
  return (
    <div
      className={twMerge(
        clsx(
          'flex flex-row items-center justify-between',
          'text-2xl text-txtHeading font-bold',
          'py-6.5',
          'border-t border-lineSecondary',
        ),
        classClass,
      )}
    >
      {onCancel && (
        <Button
          variants={{
            type: 'outlineAlt',
          }}
          onClick={onCancel}
        >
          Batalkan
        </Button>
      )}

      <div className={clsx('flex flex-row gap-3 items-center')}>
        {onSaveDraft && (
          <Button
            variants={{
              type: 'outline',
            }}
            onClick={onSaveDraft}
          >
            Simpan draf
          </Button>
        )}
        {onNext && <Button onClick={onNext}>Selanjutnya</Button>}
      </div>
    </div>
  );
};

export default TakeCertificationFooter;
