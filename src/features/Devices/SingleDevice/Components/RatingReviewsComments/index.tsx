import Col from '@/components/UI/ResponsiveFlex/Col';
import Row from '@/components/UI/ResponsiveFlex/Row';
import InfoCard from '../DeviceCardsDetails/InfoCard';
import OverallRating from './OverallRating';
import ReviewsComments from './ReviewsComments';

const RatingReviewsComments = () => {
  return (
    <InfoCard title="Ratings & Reviews of Xiaomi 14">
      <Row justify="between">
        <Col
          xs="w-full"
          md="md:w-6/12"
          lg="lg:w-5/12"
          xl="xl:w-4/12"
          className="mx-auto"
        >
          <OverallRating />
        </Col>
        <Col xs="w-full" lg="lg:w-7/12" xl="xl:w-8/12">
          <ReviewsComments />
        </Col>
      </Row>
    </InfoCard>
  );
};

export default RatingReviewsComments;
