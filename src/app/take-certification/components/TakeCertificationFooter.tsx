import { Button } from '@/shared/components';
import clsx from 'clsx';
import React from 'react';

export type AtLeastOne<T, K extends keyof T = keyof T> = Partial<T> &
  { [P in K]: Required<Pick<T, P>> }[K];

export interface TakeCertificationFooterActionProps {
  onCancel?: () => void;
  onSaveDraft?: () => void;
  onNext?: () => void;
}

export type TakeCertificationFooterProps =
  AtLeastOne<TakeCertificationFooterActionProps>;

const TakeCertificationFooter: React.FC<TakeCertificationFooterProps> = ({
  onCancel,
  onSaveDraft,
  onNext,
}) => {
  return (
    <div
      className={clsx(
        'flex flex-row items-center justify-between',
        'text-2xl text-txtHeading font-bold',
        'px-7.5! py-6.5',
        'border-b border-lineSecondary',
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
