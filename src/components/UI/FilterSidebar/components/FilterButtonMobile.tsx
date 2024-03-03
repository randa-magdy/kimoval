'use client';
import Filter from '@/components/Icons/Filter';
import { FC } from 'react';
import Button from '../../Button';
import { useModalAction } from '../../Modal/Modal.context';
import Space from '../../Space';

const FilterButtonMobile: FC = () => {
  const { openModal } = useModalAction();

  const handleOpenFilter = () => {
    openModal('OPEN_FILTER', {
      title: (
        <div className="flex items-center">
          <Filter fontSize={25} className="text-dark-gray" />
          <span className="px-1">Filters</span>
        </div>
      ),
    });
  };
  return (
    <div className="filter-button-mobile rounded-xl bg-white shadow-lg shadow-slate-400 p-3 fixed left-1/2 transform -translate-x-1/2 bottom-2 block lg:hidden w-11/12 sm:w-3/4 md:w-1/2">
      <Space>
        <div className="flex items-center">
          <Filter fontSize={25} className="text-dark-gray" />
          <span className="filter-label font-bold text-lg px-1 text-dark-gray">
            Filter & Order
          </span>
        </div>
        <Button
          className="rounded-3xl"
          onClick={handleOpenFilter}
          color="primary"
          size="small"
        >
          Open
        </Button>
      </Space>
    </div>
  );
};

export default FilterButtonMobile;
