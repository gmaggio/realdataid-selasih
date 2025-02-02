import TakeCertificationForm from '@/app/take-certification/components/TakeCertificationForm';
import { BahanBakuMainData } from '@/app/take-certification/models/types';
import { IconButton, Table } from '@/shared/components';
import { BellIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import React, { useState } from 'react';

const TakeCertificationTables: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const columns = [
    {
      header: 'Lini Bisins',
      accessor: 'lini_produksi',
    },
    {
      header: 'Nama Bahan Baku',
      accessor: 'nama',
    },
    {
      header: 'Tipe Bahan Baku',
      accessor: 'tipe_bahan_baku',
    },
    {
      header: 'Jenis Bahan Baku',
      accessor: 'jenis_bahan_baku',
    },
    {
      header: 'Asal Bahan Baku',
      accessor: 'asal_bahan_baku',
    },
    {
      header: 'Total Penggunaan',
      accessor: 'total_penggunaan',
    },
    {
      header: '',
      accessor: 'actions',
    },
  ];

  const data: BahanBakuMainData[] = [
    {
      kode: '',
      kode_transaksi_id: '',
      kode_lini_produksi: '',
      lini_produksi: 'Pupuk Perkebunan',
      nama: 'Amonia',
      tipe_bahan_baku: 'Amonia 10%',
      jenis_bahan_baku: 'Daur Ulang',
      asal_bahan_baku: 'Impor',
      total_penggunaan: '50.489',
      satuan: 'Ton',
    },
    {
      kode: '',
      kode_transaksi_id: '',
      kode_lini_produksi: '',
      lini_produksi: 'Pupuk Perkebunan',
      nama: 'Amonia',
      tipe_bahan_baku: 'Amonia 20%',
      jenis_bahan_baku: 'Non Daur Ulang',
      asal_bahan_baku: 'Ekspor',
      total_penggunaan: '20',
      satuan: 'Ton',
    },
    {
      kode: '',
      kode_transaksi_id: '',
      kode_lini_produksi: '',
      lini_produksi: 'Pupuk Perkebunan',
      nama: 'Amonia',
      tipe_bahan_baku: 'Amonia 10%',
      jenis_bahan_baku: 'Daur Ulang',
      asal_bahan_baku: 'Impor',
      total_penggunaan: '50.489',
      satuan: 'Ton',
    },
    {
      kode: '',
      kode_transaksi_id: '',
      kode_lini_produksi: '',
      lini_produksi: 'Pupuk Perkebunan',
      nama: 'Amonia',
      tipe_bahan_baku: 'Amonia 10%',
      jenis_bahan_baku: 'Daur Ulang',
      asal_bahan_baku: 'Impor',
      total_penggunaan: '50.489',
      satuan: 'Ton',
    },
    {
      kode: '',
      kode_transaksi_id: '',
      kode_lini_produksi: '',
      lini_produksi: 'Pupuk Perkebunan',
      nama: 'Amonia',
      tipe_bahan_baku: 'Amonia 10%',
      jenis_bahan_baku: 'Daur Ulang',
      asal_bahan_baku: 'Impor',
      total_penggunaan: '50.489',
      satuan: 'Ton',
    },
  ];

  return (
    <>
      <div className={clsx('flex flex-col gap-1')}>
        <Table<BahanBakuMainData>
          header={{
            title: 'Bahan baku utama',
            description:
              'Semua bahan baku utama yang diperlukan agar produk dapat diproduksi (Periode 12 bulan terakhir).',
            onAdd: () => setShowModal(true),
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
                  <IconButton icon={PencilIcon} />
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
