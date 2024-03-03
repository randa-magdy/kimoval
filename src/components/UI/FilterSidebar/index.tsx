import { FC } from 'react';
import Scrollbar from '../Scrollbar';
import Space from '../Space';
import BatteryFilters from './FilterTypes/BatteryFilters';
import BrandsFilter from './FilterTypes/BrandsFilter';
import CameraFilters from './FilterTypes/CameraFilters';
import ConnectivityFilters from './FilterTypes/ConnectivityFilters';
import DesignFilters from './FilterTypes/DesignFilters';
import HardwareFilters from './FilterTypes/HardwareFilters';
import PriceFilter from './FilterTypes/PriceFilter';
import SoftwareFilters from './FilterTypes/SoftwareFilters';
import SortByFilter from './FilterTypes/SortByFilter';

const FilterSidebar: FC = () => {
  return (
    <aside className="my-5 sticky top-5 left-0">
      <Scrollbar style={{ height: 'calc(100vh - 50px)' }} className="w-full">
        <Space direction="vertical" className="pe-8">
          <SortByFilter />
          <PriceFilter />
          <BrandsFilter />
          <DesignFilters />
          <HardwareFilters />
          <CameraFilters />
          <ConnectivityFilters />
          <BatteryFilters />
          <SoftwareFilters />
        </Space>
      </Scrollbar>
    </aside>
  );
};

export default FilterSidebar;
