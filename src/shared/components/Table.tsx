import Button from '@/shared/components/Button';
import { PlusIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import React from 'react';

export interface TableColumnProps {
  header: string;
  accessor: string;
}

export interface TableProps<T> {
  header?: TableHeaderProps;
  columns: TableColumnProps[];
  data: T[];
  cellBuilder: (
    column: TableColumnProps,
    rowData: T,
    rowIndex: number,
    defaultCell: string | number | React.ReactNode,
  ) => string | number | React.ReactNode;
}

const Table = <T extends object>({
  header,
  columns,
  data,
  cellBuilder,
}: TableProps<T>) => {
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
              {columns.map((column) => (
                <td key={column.accessor}>
                  {cellBuilder(
                    column,
                    row,
                    rowIndex,
                    (row as any)[column.accessor],
                  )}
                </td>
              ))}
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
          icon={PlusIcon}
          onClick={onAdd}
        >
          Tambah Data
        </Button>
      )}
    </div>
  );
};

export default Table;
