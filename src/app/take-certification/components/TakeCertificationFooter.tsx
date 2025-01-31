import { Button } from '@/shared/components';
import clsx from 'clsx';
import React from 'react';

export interface TakeCertificationFooterProps {
  onNext?: () => void;
  onSaveDraft?: () => void;
  onCancel?: () => void;
}

const TakeCertificationFooter: React.FC<TakeCertificationFooterProps> = ({
  onNext,
  onSaveDraft,
  onCancel,
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
      <Button
        variants={{
          type: 'outlineAlt',
        }}
      >
        Batalkan
      </Button>

      <div className={clsx('flex flex-row gap-3 items-center')}>
        <Button
          variants={{
            type: 'outline',
          }}
        >
          Simpan draf
        </Button>
        <Button>Selanjutnya</Button>
      </div>
    </div>
  );
};

export default TakeCertificationFooter;
