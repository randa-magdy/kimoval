import Space from '@/components/UI/Space';
import DeviceSummeryInfo from './DeviceSummeryInfo';
import ReviewForm from './ReviewForm';

const AddNewReview = () => {
  return (
    <Space direction="vertical">
      <DeviceSummeryInfo />
      <ReviewForm />
    </Space>
  );
};

export default AddNewReview;
