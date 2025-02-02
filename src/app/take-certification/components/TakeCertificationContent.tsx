import TakeCertificationFooter from '@/app/take-certification/components/TakeCertificationFooter';
import TakeCertificationTables from '@/app/take-certification/components/TakeCertificationTables';
import { CategoryTabs, Layer, Tabs } from '@/shared/components';
import LayerHeader from '@/shared/components/Layer/LayerHeader';
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

      <TakeCertificationTables />

      <TakeCertificationFooter
        classClass={clsx('px-7.5!')}
        onCancel={() => console.log('cancel')}
        onSaveDraft={() => console.log('save draft')}
        onNext={() => console.log('next')}
      />
    </Layer>
  );
};

export default TakeCertificationContent;
