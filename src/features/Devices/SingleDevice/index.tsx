import Col from '@/components/UI/ResponsiveFlex/Col';
import Row from '@/components/UI/ResponsiveFlex/Row';
import Space from '@/components/UI/Space';
import { FC } from 'react';
import ComparePrice from './Components/ComparePrice';
import DeviceCardsDetails from './Components/DeviceCardsDetails';
import DeviceInfo from './Components/DeviceInfo';
import DeviceSlider from './Components/DeviceInfoSlider/DeviceSlider';
import UserActions from './Components/DeviceInfoSlider/UserActions';
import RatingReviewsComments from './Components/RatingReviewsComments';

const SingleDevice: FC = () => {
  //"w-full w-full md:w-6/12 lg:w-4/12"
  return (
    <div className="container mx-auto">
      <Row justify="between" className="px-2">
        <Col xs="w-full" lg="lg:w-5/12" xl="xl:w-4/12">
          <div className="lg:sticky top-0 left-0">
            <DeviceSlider />
            <UserActions />
            <ComparePrice />
          </div>
        </Col>

        <Col xs="w-full" lg="lg:w-7/12" xl="xl:w-8/12">
          <Space direction="vertical">
            <DeviceInfo />
            <DeviceCardsDetails />
          </Space>
        </Col>
      </Row>
      <Row justify="between">
        <Col xs="w-full">
          <RatingReviewsComments />
        </Col>
      </Row>
    </div>
  );
};

export default SingleDevice;
