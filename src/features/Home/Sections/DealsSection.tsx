import { FireOutline } from '@/components/Icons/FireOutline';
import InlineImgContentCard from '@/components/UI/DeviceCards/InlineImgContentCard';
import NormalSection from '@/components/UI/Sections/NormalSection';
import ViewMoreButton from '@/components/UI/ViewMoreButton';
import Mobile1 from '../../../../public/images/home/thumb_777314_phone_front_x_small.jpg';
import Mobile2 from '../../../../public/images/home/thumb_850151_phone_front_x_small.jpg';
import Mobile3 from '../../../../public/images/home/thumb_864704_phone_front_x_small.jpg';

const DealsSection = () => {
  const data = [
    {
      img: Mobile1,
      name: 'vivo iQOO Neo 8',
      detail: 'China · 12GB · 256GB',
      priceBefore: 449,
      priceAfter: 294,
    },
    {
      img: Mobile2,
      name: 'Oppo Find X7',
      detail: 'China · 12GB · 256GB',
      priceBefore: 863,
      priceAfter: 396,
    },
    {
      img: Mobile3,
      name: 'Oppo Reno11',
      detail: 'China · 8GB · 256GB',
      priceBefore: 485,
      priceAfter: 400,
    },
    {
      img: Mobile1,
      name: 'vivo iQOO Neo 8',
      detail: 'China · 12GB · 256GB',
      priceBefore: 449,
      priceAfter: 294,
    },
    {
      img: Mobile2,
      name: 'Oppo Find X7',
      detail: 'China · 12GB · 256GB',
      priceBefore: 863,
      priceAfter: 396,
    },
    {
      img: Mobile3,
      name: 'Oppo Reno11',
      detail: 'China · 8GB · 256GB',
      priceBefore: 485,
      priceAfter: 400,
    },
    {
      img: Mobile1,
      name: 'vivo iQOO Neo 8',
      detail: 'China · 12GB · 256GB',
      priceBefore: 449,
      priceAfter: 294,
    },
    {
      img: Mobile2,
      name: 'Oppo Find X7',
      detail: 'China · 12GB · 256GB',
      priceBefore: 863,
      priceAfter: 396,
    },
    {
      img: Mobile3,
      name: 'Oppo Reno11',
      detail: 'China · 8GB · 256GB',
      priceBefore: 485,
      priceAfter: 400,
    },
  ];

  const dataList = data.map((item) => (
    <div key={item.name} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
      <InlineImgContentCard
        img={item.img}
        name={item.name}
        detail={item.detail}
        priceBefore={item.priceBefore}
        priceAfter={item.priceAfter}
        hoverCard={true}
        className="mx-auto sm:mx-0"
      />
    </div>
  ));
  return (
    <NormalSection
      sectionClassName="deal-section"
      title="Deals"
      icon={FireOutline}
    >
      <div className="devices-deals-list flex flex-wrap">{dataList}</div>
      <ViewMoreButton url="#" />
    </NormalSection>
  );
};

export default DealsSection;
