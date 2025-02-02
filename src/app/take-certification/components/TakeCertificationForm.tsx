import {
  CategoryTabs,
  Input,
  Modal,
  ModalProps,
  Select,
} from '@/shared/components';
import clsx from 'clsx';
import React from 'react';
import { default as chevronDown } from '@/shared/assets/icons/chevron-down.svg';
import { twMerge } from 'tailwind-merge';

export type TakeCertificationFormProps = ModalProps;

const TakeCertificationForm: React.FC<TakeCertificationFormProps> = ({
  ...rest
}) => {
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
          <label htmlFor="fname">Name 1</label>
          <Input type="text" id="fname" name="fname" placeholder="John" />
        </div>

        <div>
          <label htmlFor="fname">Name 2</label>
          <Input type="text" id="fname" name="fname" placeholder="John" />
        </div>

        <div>
          <label htmlFor="fname">Name 3</label>
          <Input type="text" id="fname" name="fname" placeholder="John" />
        </div>

        <div>
          <label htmlFor="fname">Name 4</label>
          <Input type="text" id="fname" name="fname" placeholder="John" />
        </div>

        <div>
          <label htmlFor="fname">Name 5</label>
          <Input type="text" id="fname" name="fname" placeholder="John" />
        </div>

        <div>
          <label htmlFor="fname">Name 6</label>
          <Select
            options={[
              { value: '1', label: '1' },
              { value: '2', label: '2' },
              { value: '3', label: '3' },
            ]}
          />
        </div>
      </div>

      {/* FORM 2 */}
      <div
        id="form2"
        className={clsx('inputText', 'flex flex-col', 'gap-2.5', 'px-4!')}
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

            // TEST:
            '[&>.group]:bg-semanticImportant/20',
          )}
        >
          {Array(2)
            .fill(null)
            .map((_, colIndex) => (
              <div className="group">
                {(() => {
                  const monthField = [];

                  for (let i = colIndex * 6 + 1; i <= colIndex * 6 + 6; i++) {
                    monthField.push(
                      <div>
                        <label htmlFor={`bulan_${i}`}>Bulan {i}</label>
                        <Input
                          type="text"
                          id={`bulan-${i}`}
                          name={`bulan_${i}`}
                          placeholder="0"
                          trailing={<span>Ton</span>}
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
    </Modal>
  );
};

export default TakeCertificationForm;
