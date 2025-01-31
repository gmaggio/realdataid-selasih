import TakeCertificationFooter from '@/app/take-certification/components/TakeCertificationFooter';
import { CategoryTabs, Layer, Table, Tabs } from '@/shared/components';
import LayerHeader from '@/shared/components/Layer/components/LayerHeader';
import clsx from 'clsx';
import React from 'react';

const TakeCertificationContent: React.FC = () => {
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
            onAdd: () => {},
            required: true,
          }}
        />

        <Table
          header={{
            title: 'Bahan baku utama',
            description:
              'Semua bahan baku utama yang diperlukan agar produk dapat diproduksi (Periode 12 bulan terakhir).',
            onAdd: () => {},
            required: true,
          }}
        />
      </div>

      <TakeCertificationFooter />
    </Layer>
  );
};

export default TakeCertificationContent;
