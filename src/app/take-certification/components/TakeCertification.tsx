import { Layer, Tabs } from '@/shared/components';
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

      <div className={clsx('py-10')}>Test</div>
    </Layer>
  );
};

export default TakeCertificationContent;
