import TakeCertificationFooter from '@/app/take-certification/components/TakeCertificationFooter';
import TakeCertificationForm from '@/app/take-certification/components/TakeCertificationForm';
import {
  CategoryTabs,
  IconButton,
  Layer,
  Table,
  Tabs,
} from '@/shared/components';
import LayerHeader from '@/shared/components/Layer/LayerHeader';
import { BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import React, { useState } from 'react';

const TakeCertificationContent: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Layer>
      <LayerHeader title="Formulir Persyaratan Teknis" />

      <Tabs
        items={[
          { label: 'Data Administrasi', href: '' },
          { label: 'Data Teknis', href: '/' },
          { label: 'Data Manajemen', href: '' },
        ]}
      />
      <CategoryTabs
        items={[
          { label: 'Bahan Baku', href: '/' },
          { label: 'Bahan Penolong', href: '' },
          { label: 'Energi', href: '' },
          { label: 'Air', href: '' },
          { label: 'Proses produksi', href: '' },
          { label: 'Produk', href: '' },
          { label: 'Kemasan', href: '' },
          { label: 'Limbah', href: '' },
          { label: 'Emisi Gas Rumah Kaca', href: '' },
        ]}
      />

      <div className={clsx('flex flex-col gap-1')}>
        <Table
          header={{
            title: 'Bahan baku utama',
            description:
              'Semua bahan baku utama yang diperlukan agar produk dapat diproduksi (Periode 12 bulan terakhir).',
            onAdd: () => setShowModal(true),
            required: true,
          }}
        />

        <Table
          header={{
            title: 'Bahan baku utama',
            description:
              'Semua bahan baku utama yang diperlukan agar produk dapat diproduksi (Periode 12 bulan terakhir).',
            onAdd: () => setShowModal(true),
            required: true,
          }}
        />
      </div>

      <TakeCertificationFooter
        onCancel={() => console.log('cancel')}
        onSaveDraft={() => console.log('save draft')}
        onNext={() => console.log('next')}
      />

      {/* Form Modal Window */}
      <TakeCertificationForm
        id="form-modal"
        open={showModal}
        onClose={() => setShowModal(false)}
      >
        <IconButton
          icon={BellIcon}
          onClick={() => setShowModal(false)}
          aria-label="Close form modal"
        />
      </TakeCertificationForm>
    </Layer>
  );
};

export default TakeCertificationContent;
