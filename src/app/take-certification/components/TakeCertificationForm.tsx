import TakeCertificationFooter from '@/app/take-certification/components/TakeCertificationFooter';
import { useBahanBakuDetail } from '@/app/take-certification/hooks/useBahanBaku';
import { useFormSelections } from '@/app/take-certification/hooks/useFormSelections';
import { useID } from '@/app/take-certification/hooks/useIdContext';
import { BahanBakuData } from '@/app/take-certification/models/types';
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
  onClose,
  ...rest
}) => {
  const { uuid_transaksi, getMockBahanBakuDetail, mockLiniProduksiOptions } =
    useID();

  const [unit, setUnit] = useState<string>('Ton');

  const {
    liniProduksi: liniProduksiData,
    // satuan,
    isLoading: isLoadingSelections,
    error: selectionError,
  } = useFormSelections(uuid_transaksi);

  // Detect mocked data
  let kodeData = kodeBahanBaku;
  let liniProduksi = liniProduksiData;
  const isMocked = kodeBahanBaku?.startsWith('00000000');
  if (isMocked) {
    kodeData = null;
    liniProduksi = mockLiniProduksiOptions;
  }

  const { data, setData, isLoading, setIsLoading, error, setError, refetch } =
    useBahanBakuDetail(open && kodeData ? kodeData : null);

  useEffect(() => {
    if (kodeBahanBaku === null) {
      // ✅
      setUnit('Ton');
      setData({
        kode: '',
        kode_lini_produksi: '',
        lini_produksi: '',
        nama: '',
        tipe_bahan_baku: '',
        satuan: '',
        jenis_bahan_baku: '',
        asal_bahan_baku: '',
        addition: [],
        bulan_1: '',
        bulan_2: '',
        bulan_3: '',
        bulan_4: '',
        bulan_5: '',
        bulan_6: '',
        bulan_7: '',
        bulan_8: '',
        bulan_9: '',
        bulan_10: '',
        bulan_11: '',
        bulan_12: '',
        total_penggunaan: '',
        kode_transaksi_id: '',
        uuid_user: '',
      });
    } else if (isMocked) {
      const mockData = getMockBahanBakuDetail(kodeBahanBaku!);
      setData(mockData);
      setUnit(mockData.satuan);
      setIsLoading(false);
      setError(null);
    } else if (data) {
      setUnit(data?.satuan ?? 'Ton');
    }
  }, [kodeBahanBaku, isMocked]);

  // Compute the sum of Penggunaan
  const totalPenggunaan = data
    ? Object.keys(data)
        .filter((key) => key.startsWith('bulan_'))
        .reduce(
          (acc, key) =>
            acc + parseFloat((data as Record<string, any>)[key] || '0'),
          0,
        )
    : 0;

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
      onClose={onClose}
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
            value={data?.kode_lini_produksi ?? ''}
            options={liniProduksi.map((item) => ({
              value: item.kode,
              label: item.nama,
            }))}
            onChange={(e) =>
              setData((prev) => ({
                ...prev!,
                lini_produksi: e.target.options[e.target.selectedIndex].text,
                kode_lini_produksi: e.target.value,
              }))
            }
          />
        </div>

        <div>
          <label htmlFor="nama">Nama Bahan Baku</label>
          <Input
            type="text"
            id="nama"
            name="nama"
            value={data?.nama ?? ''}
            onChange={(e) =>
              setData((prev) => ({
                ...prev!,
                nama: e.target.value,
              }))
            }
          />
        </div>

        <div>
          <label htmlFor="tipe_bahan_baku">Tipe Bahan Baku</label>
          <Input
            type="text"
            id="tipe_bahan_baku"
            name="tipe_bahan_baku"
            value={data?.tipe_bahan_baku ?? ''}
            onChange={(e) =>
              setData((prev) => ({
                ...prev!,
                tipe_bahan_baku: e.target.value,
              }))
            }
          />
        </div>

        <div>
          <label htmlFor="satuan">Satuan</label>
          <Select
            id="satuan"
            name="satuan"
            options={units}
            value={data?.satuan ?? ''}
            onChange={(e) => {
              setUnit(e.target.value);
              setData((prev) => ({
                ...prev!,
                satuan: e.target.value,
              }));
            }}
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
            value={data?.jenis_bahan_baku ?? ''}
            onChange={(e) =>
              setData((prev) => ({
                ...prev!,
                jenis_bahan_baku: e.target.value,
              }))
            }
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
            value={data?.asal_bahan_baku ?? ''}
            onChange={(e) =>
              setData((prev) => ({
                ...prev!,
                asal_bahan_baku: e.target.value,
              }))
            }
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
                          type="number"
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
                          value={
                            (data?.[
                              `bulan_${i}` as keyof BahanBakuData
                            ] as string) ?? ''
                          }
                          onChange={(e) => {
                            setData((prev) => ({
                              ...prev!,
                              [`bulan_${i}`]: e.target.value,
                            }));
                          }}
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
        onCancel={onClose}
        onSaveDraft={() => console.log('save draft')}
        onNext={() => console.log('next')}
      />
    </Modal>
  );
};

export default TakeCertificationForm;
