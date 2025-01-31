import Button from '@/shared/components/Button';
import { PlusIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { HTMLAttributes } from 'react';

export interface TableProps extends HTMLAttributes<HTMLDivElement> {}

const Table: React.FC<TableProps> = ({}) => {
  return (
    <div className={clsx('flex flex-col gap-3', 'w-full pt-2.5 pb-5')}>
      <TableHeader />

      <table className={clsx('table-auto')}>
        <thead>
          <tr>
            <th>Song</th>
            <th>Artist</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
          </tr>
          <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export interface TableHeaderProps extends HTMLAttributes<HTMLDivElement> {}

const TableHeader: React.FC<TableHeaderProps> = ({}) => {
  return (
    <div className={clsx('flex flex-row', 'w-full')}>
      <div className={clsx('flex flex-col flex-1')}>
        <div className={clsx('text-lg text-tableHeading font-bold')}>
          Bahan baku utama
          <span className={clsx('text-semanticImportant')}>*</span>
        </div>
        <div>
          Semua bahan baku utama yang diperlukan agar produk dapat diproduksi
          (Periode 12 bulan terakhir).
        </div>
      </div>
      <Button
        variants={{
          type: 'support',
          size: 'sm',
        }}
        Icon={PlusIcon}
      >
        Tambah Data
      </Button>
    </div>
  );
};

export default Table;
