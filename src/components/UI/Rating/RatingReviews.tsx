import { FC } from 'react';
import RatingStar, { RatingStarProps } from './RatingStar';

export interface RatingReviewsProps extends RatingStarProps {
  reviewsNumber: string;
}
const RatingReviews: FC<RatingReviewsProps> = ({ rating, reviewsNumber }) => {
  return (
    <div className="rating-reviews flex my-2">
      <RatingStar rating={rating} />
      <div className="reviews text-light-gray text-less-medium font-medium">
        <span>{'(' + reviewsNumber + ')'} Review</span>
      </div>
    </div>
  );
};

export default RatingReviews;
