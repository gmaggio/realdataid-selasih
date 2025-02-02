import TakeCertificationFooter from '@/app/take-certification/components/TakeCertificationFooter';
import {
  CategoryTabs,
  Input,
  Modal,
  ModalProps,
  Select,
} from '@/shared/components';
import clsx from 'clsx';
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

export type TakeCertificationFormProps = ModalProps;

const TakeCertificationForm: React.FC<TakeCertificationFormProps> = ({
  ...rest
}) => {
  const [unit, setUnit] = useState(1);

  const units = [
    { value: '1', label: 'Ton' },
    { value: '2', label: 'Kg' },
    { value: '3', label: 'Liter' },
  ];

  return (
    <Modal
      modalClass={clsx('w-[36rem] max-w-[36rem]')}
      {...rest}
      header={{
        title: 'Tambah Bahan Baku Utama',
      }}
      hasCloseButton
    >
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
            options={[
              { value: '1', label: 'Besi' },
              { value: '2', label: 'Kayu' },
              { value: '3', label: 'Tanah' },
            ]}
          />
        </div>

        <div>
          <label htmlFor="nama">Nama Bahan Baku</label>
          <Input type="text" id="nama" name="nama" />
        </div>

        <div>
          <label htmlFor="tipe_bahan_baku">Tipe Bahan Baku</label>
          <Input type="text" id="tipe_bahan_baku" name="tipe_bahan_baku" />
        </div>

        <div>
          <label htmlFor="satuan">Satuan</label>
          <Select
            id="satuan"
            name="satuan"
            options={units}
            onChange={(e) => setUnit(Number(e.target.value))}
          />
        </div>

        <div>
          <label htmlFor="jenis_bahan_baku">Jenis Bahan Baku</label>
          <Select
            id="jenis_bahan_baku"
            name="jenis_bahan_baku"
            options={[
              { value: '1', label: 'Daur Ulang' },
              { value: '2', label: 'Non Daur Ulang' },
            ]}
          />
        </div>

        <div>
          <label htmlFor="asal_bahan_baku">Asal Bahan Baku</label>
          <Select
            id="asal_bahan_baku"
            name="asal_bahan_baku"
            options={[
              { value: '1', label: 'Impor' },
              { value: '2', label: 'Ekspor' },
            ]}
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
                      <div>
                        <label htmlFor={`bulan_${i}`}>Bulan {i}</label>
                        <Input
                          type="text"
                          key={`bulan-${i}`}
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
                50.489
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
