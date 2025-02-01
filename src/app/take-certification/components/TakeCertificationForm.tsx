import { Modal, ModalProps } from '@/shared/components';
import clsx from 'clsx';
import React from 'react';

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
    ></Modal>
  );
};

export default TakeCertificationForm;
