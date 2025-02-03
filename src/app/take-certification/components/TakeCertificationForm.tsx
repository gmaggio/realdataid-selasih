import TakeCertificationFooter from '@/app/take-certification/components/TakeCertificationFooter';
import { useBahanBakuDetail } from '@/app/take-certification/hooks/useBahanBaku';
import { useID } from '@/app/take-certification/hooks/useIdContext';
import {
  CategoryTabs,
  Input,
  Modal,
  ModalProps,
  Select,
} from '@/shared/components';
import {
  ArrowPathIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

export type TakeCertificationFormProps = ModalProps & {
  kodeBahanBaku: string | null;
};

const TakeCertificationForm: React.FC<TakeCertificationFormProps> = ({
  kodeBahanBaku,
  open,
  ...rest
}) => {
  const { getMockBahanBakuDetail } = useID();

  const [unit, setUnit] = useState<string>('Ton');
  const [penggunaan, setPenggunaan] = useState<string[]>(
    Array.from({ length: 12 }, () => '0'),
  );

  // Handle Penggunaan
  const handlePenggunaan = (index: number, value: string) => {
    const update = [...penggunaan];
    update[index] = value;
    setPenggunaan(update);
  };

  // Compute the sum of Penggunaan
  const totalPenggunaan = penggunaan.reduce(
    (acc, value) => acc + parseFloat(value || '0'),
    0,
  );

  // Detect mocked data
  let kodeData = kodeBahanBaku;
  const isMocked = kodeBahanBaku?.startsWith('00000000');
  if (isMocked) kodeData = null;

  const { data, setData, isLoading, setIsLoading, error, setError, refetch } =
    useBahanBakuDetail(open && kodeData ? kodeData : null);

  // Get mocked data
  useEffect(() => {
    if (isMocked) {
      setData(getMockBahanBakuDetail(kodeBahanBaku!));
      setIsLoading(false);
      setError(null);
      return;
    }
  }, [kodeBahanBaku]);

  useEffect(() => {
    if (data) {
      setUnit(data.satuan);
      setPenggunaan([
        data.bulan_1,
        data.bulan_2,
        data.bulan_3,
        data.bulan_4,
        data.bulan_5,
        data.bulan_6,
        data.bulan_7,
        data.bulan_8,
        data.bulan_9,
        data.bulan_10,
        data.bulan_11,
        data.bulan_12,
      ]);
    }
  }, [data]);

  const units = [
    { value: 'Ton', label: 'Ton' },
    { value: 'Kg', label: 'Kg' },
    { value: 'Liter', label: 'Liter' },
  ];

  return (
    <Modal
      modalClass={clsx('w-[36rem] max-w-[36rem]')}
      header={{
        title: 'Tambah Bahan Baku Utama',
      }}
      hasCloseButton
      open={open}
      {...rest}
    >
      {(() => {
        if (isLoading)
          return (
            <div
              className={clsx(
                'absolute z-500',
                'flex items-center justify-center',
                'w-full h-full p-18',
                'bg-[white]/80',
                'text-txtBody2/70',
              )}
            >
              <ArrowPathIcon
                className={clsx('size-6 animate-spin', 'mr-2.5')}
              />
              <p>Loading Bahan Baku detail...</p>
            </div>
          );

        if (error)
          return (
            <div
              className={clsx(
                'absolute z-500',
                'flex flex-col gap-4 items-center justify-center',
                'w-full h-full p-18',
                'bg-[white]/80',
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
            </div>
          );
      })()}

      <CategoryTabs
        items={[
          { label: 'Pengisian Data', href: '/' },
          { label: 'Pengunggahan Dokumen', href: '' },
        ]}
        className={clsx('py-3')}
      />

      {/* FORM 1 */}
      <div
        id="form1"
        className={clsx(
          'flex flex-row flex-wrap gap-x-4 gap-y-4.5',
          'px-4! pt-6 pb-4.5',

          // Fields
          '*:flex-[1_0_35%]',
          '*:flex *:flex-col *:gap-1',
        )}
      >
        <div>
          <label htmlFor="lini_produksi">Lini Produksi</label>
          <Select
            id="lini_produksi"
            name="lini_produksi"
            value={data?.lini_produksi}
            options={[
              { value: 'Besi', label: 'Besi' },
              { value: 'Kayu', label: 'Kayu' },
              { value: 'Tanah', label: 'Tanah' },
            ]}
          />
        </div>

        <div>
          <label htmlFor="nama">Nama Bahan Baku</label>
          <Input type="text" id="nama" name="nama" value={data?.nama} />
        </div>

        <div>
          <label htmlFor="tipe_bahan_baku">Tipe Bahan Baku</label>
          <Input
            type="text"
            id="tipe_bahan_baku"
            name="tipe_bahan_baku"
            value={data?.tipe_bahan_baku}
          />
        </div>

        <div>
          <label htmlFor="satuan">Satuan</label>
          <Select
            id="satuan"
            name="satuan"
            options={units}
            value={data?.satuan}
            onChange={(e) => setUnit(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="jenis_bahan_baku">Jenis Bahan Baku</label>
          <Select
            id="jenis_bahan_baku"
            name="jenis_bahan_baku"
            options={[
              { value: 'Daur Ulang', label: 'Daur Ulang' },
              { value: 'Non Daur Ulang', label: 'Non Daur Ulang' },
            ]}
            value={data?.jenis_bahan_baku}
          />
        </div>

        <div>
          <label htmlFor="asal_bahan_baku">Asal Bahan Baku</label>
          <Select
            id="asal_bahan_baku"
            name="asal_bahan_baku"
            options={[
              { value: 'Impor', label: 'Impor' },
              { value: 'Ekspor', label: 'Ekspor' },
            ]}
            value={data?.asal_bahan_baku}
          />
        </div>
      </div>

      {/* FORM 2 */}
      <div
        id="form2"
        className={clsx(
          'inputText',
          'flex flex-col',
          'gap-2.5',
          'px-4! pb-2.5',
        )}
      >
        <span>Rincian Penggunaan</span>
        <div
          className={clsx(
            'flex flex-row flex-wrap',
            'items-start justify-between',
            'gap-y-2.5 gap-x-[3.125rem]',

            // Field Groups
            '[&>.group]:flex-[1_0_35%]',
            '[&>.group]:flex [&>.group]:flex-col [&>.group]:gap-2.5',
            '[&>.group]:items-center [&>.group]:justify-between',

            // Fields
            '[&>.group>div]:flex [&>.group>div]:flex-row',
            '[&>.group>div]:items-center [&>.group>div]:justify-between',
            '[&>.group>div]:font-bold',
            '[&>.group>div]:w-full',

            // Field Elements
            '[&>.group>div]:*:w-full',
          )}
        >
          {Array(2)
            .fill(null)
            .map((_, colIndex) => (
              <div key={`grup-bulan-${colIndex}`} className="group">
                {(() => {
                  const monthField = [];
                  const maxRow = 6;

                  for (
                    let i = colIndex * maxRow + 1;
                    i <= colIndex * maxRow + maxRow;
                    i++
                  ) {
                    monthField.push(
                      <div key={`bulan-${i}`}>
                        <label htmlFor={`bulan_${i}`}>Bulan {i}</label>
                        <Input
                          type="text"
                          id={`bulan-${i}`}
                          name={`bulan_${i}`}
                          placeholder="0"
                          trailing={
                            <span>
                              {
                                units.find(
                                  ({ value }) => value === unit.toString(),
                                )?.label
                              }
                            </span>
                          }
                          value={penggunaan[i]}
                          onChange={(e) => handlePenggunaan(i, e.target.value)}
                        />
                      </div>,
                    );
                  }

                  return monthField;
                })()}
              </div>
            ))}

          <div className="group">
            <div>
              <span>Total Penggunaan</span>
              <span
                className={twMerge('inputLayout', clsx('justify-end', 'px-0'))}
              >
                {totalPenggunaan}
              </span>
            </div>
          </div>
          <div className="group"></div>
        </div>
      </div>

      <TakeCertificationFooter
        classClass={clsx('px-3.5! py-2.5')}
        onCancel={() => console.log('cancel')}
        onSaveDraft={() => console.log('save draft')}
        onNext={() => console.log('next')}
      />
    </Modal>
  );
};

export default TakeCertificationForm;
