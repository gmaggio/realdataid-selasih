import { BahanBakuMainData } from '@/app/take-certification/models/types';
import Button from '@/shared/components/Button';
import IconButton from '@/shared/components/IconButton';
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { HTMLAttributes } from 'react';

export interface TableProps {
  header?: TableHeaderProps;
}

const Table: React.FC<TableProps> = ({ header }) => {
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
    <div className={clsx('flex flex-col gap-4.5', 'w-full pt-2.5 pb-5')}>
      {header && <TableHeader {...header} />}

      <table
        className={clsx(
          // Table
          'table-auto',
          'border border-tableBorder rounded-md',
          'border-separate border-spacing-0',
          'overflow-clip',

          // All Cells
          '[&_:is(th,td)]:px-3 [&_:is(th,td)]:py-1.5',

          // Last Column Cells
          '[&_:is(th,td)]:last:w-min',
          '[&_:is(th,td)]:last:px-1.5 [&_:is(th,td)]:last:py-0',

          // Header Cells
          '[&_th]:text-left',
          '[&_th]:text-tableHeading',
          '[&_th]:bg-tableHeaderBg',
          '[&_th]:border [&_th]:border-tableHeaderBorder',

          // Data Cells
          '[&_td]:bg-surfacePrimary',
          '[&_td]:border [&_td]:border-tableBorder',
        )}
      >
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.accessor}>{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column) => {
                if (column.accessor === 'total_penggunaan') {
                  return (
                    <td key={column.accessor}>
                      <div className={clsx('flex gap-3 justify-between')}>
                        <span>{row[column.accessor]}</span>
                        <span className={clsx('font-bold')}>{row.satuan}</span>
                      </div>
                    </td>
                  );
                }

                if (column.accessor === 'actions') {
                  return (
                    <td key={column.accessor}>
                      <div className={clsx('flex justify-center gap-2')}>
                        <IconButton Icon={TrashIcon} />
                        <IconButton Icon={PencilIcon} />
                      </div>
                    </td>
                  );
                }

                return (
                  <td key={column.accessor}>{(row as any)[column.accessor]}</td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export interface TableHeaderProps {
  title?: string;
  description?: string;
  onAdd?: () => void;
  required?: boolean;
}

const TableHeader: React.FC<TableHeaderProps> = ({
  title,
  description,
  onAdd,
  required,
}) => {
  return (
    <div className={clsx('flex flex-row', 'w-full')}>
      <div className={clsx('flex flex-col flex-1')}>
        {title && (
          <div className={clsx('text-lg text-tableHeading font-bold')}>
            {title}
            {required && (
              <span className={clsx('text-semanticImportant')}>*</span>
            )}
          </div>
        )}
        {description && <div>{description}</div>}
      </div>
      {onAdd && (
        <Button
          variants={{
            type: 'support',
            size: 'sm',
          }}
          Icon={PlusIcon}
          onClick={onAdd}
        >
          Tambah Data
        </Button>
      )}
    </div>
  );
};

export default Table;
