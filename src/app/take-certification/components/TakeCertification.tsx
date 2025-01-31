import { CategoryTabs, Layer, Tabs } from '@/shared/components';
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

      <div className={clsx('py-5')}>TEST</div>
    </Layer>
  );
};

export default TakeCertificationContent;
