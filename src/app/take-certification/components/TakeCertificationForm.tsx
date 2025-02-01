import {
  CategoryTabs,
  Input,
  Modal,
  ModalProps,
  Select,
} from '@/shared/components';
import clsx from 'clsx';
import React from 'react';
import { default as chevronDown } from '@/shared/assets/icons/chevron-down.svg';

export type TakeCertificationFormProps = ModalProps;

const TakeCertificationForm: React.FC<TakeCertificationFormProps> = ({
  ...rest
}) => {
  return (
    <Modal
      modalClass={clsx('w-[36rem] max-w-[36rem]')}
      {...rest}
      header={{
        title: 'Tambah Bahan Baku Utama',
      }}
      hasCloseButton
    >
      <CategoryTabs
        items={[
          { label: 'Pengisian Data', href: '/' },
          { label: 'Pengunggahan Dokumen', href: '' },
        ]}
        className={clsx('py-3')}
      />

      <div
        className={clsx(
          'flex flex-col gap-4.5',
          'px-4! pt-6 pb-4.5',

          //
          '*:flex *:flex-col *:gap-1',

          // TEST:
          // '[&_input]:bg-logo-green-accent/30',
        )}
      >
        <div>
          <label htmlFor="fname">First name:</label>
          <Input type="text" id="fname" name="fname" value="John" />
        </div>

        <div>
          <label htmlFor="fname">First name:</label>
          <Input type="text" id="fname" name="fname" value="John" />
        </div>

        <div>
          <label htmlFor="fname">First name:</label>
          <Select
            options={[
              { value: '1', label: '1' },
              { value: '2', label: '2' },
              { value: '3', label: '3' },
            ]}
          />
        </div>
      </div>

      <div
        className={clsx(
          'flex flex-col gap-2.5',
          'px-4! pt-6 pb-4.5',

          //
          '*:flex *:items-center *:justify-between',
          '*:*:flex-1',

          //
          // '[&_input]:after:content-["Ton"]',

          // TEST:
          // '[&_input]:bg-logo-green-accent/30',
        )}
      >
        <div>
          <label htmlFor="fname">First name:</label>
          <Input
            type="text"
            id="fname"
            name="fname"
            value="John"
            trailing="Ton"
          />
        </div>

        <div>
          <label htmlFor="fname">First name:</label>
          <Input type="text" id="fname" name="fname" required />
        </div>

        <div>
          <label htmlFor="fname">First name:</label>
          <Input type="text" id="fname" name="fname" value="John" disabled />
        </div>
      </div>
    </Modal>
  );
};

export default TakeCertificationForm;
