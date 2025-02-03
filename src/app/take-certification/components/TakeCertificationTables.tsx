import TakeCertificationForm from '@/app/take-certification/components/TakeCertificationForm';
import { useBahanBakuData } from '@/app/take-certification/hooks/useBahanBaku';
import { useID } from '@/app/take-certification/hooks/useIdContext';
import { BahanBakuMainData } from '@/app/take-certification/models/types';
import { Button, IconButton, Table } from '@/shared/components';
import {
  ArrowPathIcon,
  BellIcon,
  ExclamationTriangleIcon,
  PencilIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import React, { useState } from 'react';

const TakeCertificationTables: React.FC = () => {
  const { uuid_transaksi, mockBahanBakuList } = useID();

  const { data, setData, isLoading, error, setError, refetch } =
    useBahanBakuData(uuid_transaksi);

  const [showModal, setShowModal] = useState(false);
  const [selectedID, setSelectedID] = useState<string | null>(null);

  const columns = [
    { header: 'Lini Bisins', accessor: 'lini_produksi' },
    { header: 'Nama Bahan Baku', accessor: 'nama' },
    { header: 'Tipe Bahan Baku', accessor: 'tipe_bahan_baku' },
    { header: 'Jenis Bahan Baku', accessor: 'jenis_bahan_baku' },
    { header: 'Asal Bahan Baku', accessor: 'asal_bahan_baku' },
    { header: 'Total Penggunaan', accessor: 'total_penggunaan' },
    { header: '', accessor: 'actions' },
  ];

  if (isLoading)
    return (
      <div
        className={clsx(
          'flex items-center justify-center',
          'w-full px-7.5 py-16',
          'text-txtBody2/70',
        )}
      >
        <ArrowPathIcon className={clsx('size-6 animate-spin', 'mr-2.5')} />
        <p>Loading Bahan Baku data...</p>
      </div>
    );

  if (error)
    return (
      <div
        className={clsx(
          'flex flex-col gap-4 items-center justify-center',
          'w-full px-7.5 pt-16 pb-18',
          'text-semanticImportant text-xl',
        )}
      >
        <div
          className={clsx(
            'flex items-center justify-center',
            'text-semanticImportant text-xl',
          )}
        >
          <ExclamationTriangleIcon className={clsx('size-6', 'mr-2.5')} />
          <p>{error}</p>
        </div>

        <Button
          variants={{
            type: 'outline',
            size: 'sm',
          }}
          onClick={refetch}
        >
          Retry fetching data
        </Button>
        <Button
          variants={{
            type: 'outlineAlt',
            size: 'sm',
          }}
          onClick={() => {
            setData(mockBahanBakuList);
            setError(null);
          }}
        >
          Use mock data instead
        </Button>
      </div>
    );

  return (
    <>
      <div className={clsx('flex flex-col gap-1')}>
        <Table<BahanBakuMainData>
          header={{
            title: 'Bahan baku utama',
            description:
              'Semua bahan baku utama yang diperlukan agar produk dapat diproduksi (Periode 12 bulan terakhir).',
            onAdd: () => {
              setShowModal(true);
              setSelectedID(null);
            },
            required: true,
          }}
          columns={columns}
          data={data}
          cellBuilder={(column, rowData, _, defaultCell) => {
            if (column.accessor === 'total_penggunaan') {
              return (
                <div className={clsx('flex gap-3 justify-between')}>
                  <span>{rowData[column.accessor]}</span>
                  <span className={clsx('font-bold')}>{rowData.satuan}</span>
                </div>
              );
            }

            if (column.accessor === 'actions') {
              return (
                <div className={clsx('flex justify-center gap-2')}>
                  <IconButton icon={TrashIcon} />
                  <IconButton
                    icon={PencilIcon}
                    onClick={() => {
                      setShowModal(true);
                      setSelectedID(rowData.kode);
                    }}
                  />
                </div>
              );
            }

            return defaultCell;
          }}
        />
      </div>

      {/* Form Modal Window */}
      <TakeCertificationForm
        id="form-modal"
        open={showModal}
        onClose={() => setShowModal(false)}
        kodeBahanBaku={selectedID}
        onSuccess={refetch}
      >
        <IconButton
          icon={BellIcon}
          onClick={() => setShowModal(false)}
          aria-label="Close form modal"
        />
      </TakeCertificationForm>
    </>
  );
};

export default TakeCertificationTables;
