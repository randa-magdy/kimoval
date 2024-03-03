import VerticalImgContentDeviceCard, {
  VerticalImgContentDeviceCardProps,
} from '@/components/UI/DeviceCards/VerticalImgContentDeviceCard';
import FilterSidebar from '@/components/UI/FilterSidebar';
import FilterButtonMobile from '@/components/UI/FilterSidebar/components/FilterButtonMobile';
import { FC } from 'react';

interface DevicesWithFilterLayoutProps {
  devices: VerticalImgContentDeviceCardProps[];
}

const DevicesWithFilterLayout: FC<DevicesWithFilterLayoutProps> = ({
  devices,
}) => {
  const devicesList = devices.map((item, idx) => (
    <div key={idx} className="w-1/2 sm:w-1/3 xl:w-1/4">
      <VerticalImgContentDeviceCard
        img={item.img}
        rating={item.rating}
        reviewsNumber={item.reviewsNumber}
        name={item.name}
        country={item.country}
        detail={item.detail}
        priceBefore={item.priceBefore}
        priceAfter={item.priceAfter}
        hoverCard={true}
        className="mx-auto"
      />
    </div>
  ));
  return (
    <div className="devices-with-filter-layout">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="relative w-1/4 hidden lg:block">
            <FilterSidebar />
          </div>
          <FilterButtonMobile />
          <div className="w-full lg:w-3/4 flex flex-wrap text-center mt-5">
            {devicesList}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevicesWithFilterLayout;
