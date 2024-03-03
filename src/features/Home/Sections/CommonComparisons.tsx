import { Compare } from '@/components/Icons/Compare';
import VSTwoDevicesCard from '@/components/UI/DeviceCards/VSTwoDevicesCard';
import NormalSection from '@/components/UI/Sections/NormalSection';
import ViewMoreButton from '@/components/UI/ViewMoreButton';
import Mobile1 from '../../../../public/images/home/thumb_777314_phone_front_x_small.jpg';
import Mobile2 from '../../../../public/images/home/thumb_850151_phone_front_x_small.jpg';

const CommonComparisons = () => {
  const comparisonData = [
    {
      deviceOne: {
        img: Mobile1,
        name: 'vivo iQOO Neo 8',
        detail: 'China · 12GB · 256GB',
      },
      deviceTwo: {
        img: Mobile2,
        name: 'Oppo Find X7',
        detail: 'China · 12GB · 256GB',
      },
    },
    {
      deviceOne: {
        img: Mobile1,
        name: 'vivo iQOO Neo 8',
        detail: 'China · 12GB · 256GB',
      },
      deviceTwo: {
        img: Mobile2,
        name: 'Oppo Find X7',
        detail: 'China · 12GB · 256GB',
      },
    },
    {
      deviceOne: {
        img: Mobile1,
        name: 'vivo iQOO Neo 8',
        detail: 'China · 12GB · 256GB',
      },
      deviceTwo: {
        img: Mobile2,
        name: 'Oppo Find X7',
        detail: 'China · 12GB · 256GB',
      },
    },
  ];

  const comparisonList = comparisonData.map((oneComparison, idx) => (
    <VSTwoDevicesCard
      key={idx}
      deviceOne={oneComparison.deviceOne}
      deviceTwo={oneComparison.deviceTwo}
    />
  ));
  return (
    <NormalSection
      sectionClassName="common-comparisons"
      title="Common Comparisons"
      icon={Compare}
    >
      <div className="comparison-list grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {comparisonList}
      </div>
      <ViewMoreButton url="#" />
    </NormalSection>
  );
};

export default CommonComparisons;
