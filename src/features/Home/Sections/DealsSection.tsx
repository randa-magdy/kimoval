import { FireOutline } from '@/components/Icons/FireOutline';
import InlineImgContentCard from '@/components/UI/DeviceCards/InlineImgContentCard';
import Col from '@/components/UI/ResponsiveFlex/Col';
import Row from '@/components/UI/ResponsiveFlex/Row';
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
    <Col
      key={item.name}
      xs="xs:w-6/12"
      sm="sm:w-4/12"
      // md="md:w-4/12"
      lg="lg:w-3/12"
    >
      <InlineImgContentCard
        img={item.img}
        name={item.name}
        detail={item.detail}
        priceBefore={item.priceBefore}
        priceAfter={item.priceAfter}
        hoverCard={true}
        // className="mx-auto sm:mx-0"
      />
    </Col>
  ));
  return (
    <NormalSection
      sectionClassName="deal-section"
      title="Deals"
      icon={FireOutline}
    >
      <Row className="devices-deals-list" justify="between" gutter={0}>
        {dataList}
      </Row>
      <ViewMoreButton url="#" />
    </NormalSection>
  );
};

export default DealsSection;
