import { LayerHeader, Modal, ModalProps } from '@/shared/components';
import React from 'react';

export type TakeCertificationFormProps = ModalProps;

const TakeCertificationForm: React.FC<TakeCertificationFormProps> = ({
  ...rest
}) => {
  return (
    <Modal {...rest}>
      <LayerHeader title="Tambah Bahan Baku Utama" />
    </Modal>
  );
};

export default TakeCertificationForm;
