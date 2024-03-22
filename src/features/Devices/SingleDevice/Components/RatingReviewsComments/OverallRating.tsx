'use client';
import { EmptyStar } from '@/components/Icons/EmptyStar';
import Button from '@/components/UI/Button';
import Card from '@/components/UI/Card';
import { useModalAction } from '@/components/UI/Modal/Modal.context';
import ProgressBar from '@/components/UI/ProgressBar';
import RatingStar from '@/components/UI/Rating/RatingStar';
import RatingStars from '@/components/UI/Rating/RatingStars';
import Space from '@/components/UI/Space';

const OverallRating = () => {
  const progressBarsRatingData = [
    { rating: 5, progressPercentage: 63 },
    { rating: 4, progressPercentage: 19 },
    { rating: 3, progressPercentage: 6 },
    { rating: 2, progressPercentage: 12 },
    { rating: 1, progressPercentage: 0 },
  ];

  const progressBarsRating = progressBarsRatingData.map((bar, idx) => (
    <div key={idx} className="flex items-center">
      <RatingStar rating={bar.rating} />
      <ProgressBar progressPercentage={bar.progressPercentage} />
    </div>
  ));

  const { openModal } = useModalAction();

  const handleOpenReviewForm = () => {
    openModal('OPEN_ADD_REVIEW_FORM', 'max-w-lg', {
      title: <span className="text-normal">Add Review</span>,
    });
  };

  return (
    <Card
      radius="rounded-lg"
      color="bg-dark-gray-white"
      className="py-2 md:py-2"
    >
      <span className="rating-score">
        <span className="text-dark-gray text-h3 font-semibold">4.5</span>
        <span className="text-dark-gray text-medium">/5</span>
      </span>
      <div className="rating-stars">
        <RatingStars rate={4.5} />
        <span className="text-light-gray text-less-medium block py-2">
          Based on 100 Reviwes
        </span>
      </div>
      <div className="w-11/12">{progressBarsRating}</div>
      <Space direction="vertical" align="center" className="my-5 text-center">
        <span className="font-semibold text-normal text-dark-gray">
          Want to comment on the Xiaomi 14?
        </span>
        <span className="text-light-gray text-small">
          It&#39;ll only take a minute, you&#39;ll help people decide.
        </span>
        <Button
          onClick={handleOpenReviewForm}
          size="small"
          className="w-fitt bg-light-gray hover-white-text-child hover:bg-dark-gray transition-all duration-300 ease-in-out"
        >
          <EmptyStar fontSize={20} className="text-dark-gray" />
          <span className="px-2 text-dark-gray">Add Review</span>
        </Button>
      </Space>
    </Card>
  );
};

export default OverallRating;
