import { FC } from 'react';
import { FillStar } from '../Icons/FillStar';

export interface RatingReviewsProps {
  rating: number | string;
  reviewsNumber: string;
}
const RatingReviews: FC<RatingReviewsProps> = ({ rating, reviewsNumber }) => {
  return (
    <div className="rating-reviews flex my-2">
      <div className="rating flex items-center">
        <span className="text-dark-gray text-less-medium font-bold">
          {rating}
        </span>
        <FillStar className="text-yellow-400 mx-2" fontSize={15} />
      </div>
      <div className="reviews text-light-gray text-less-medium font-medium">
        <span>{'(' + reviewsNumber + ')'} Review</span>
      </div>
    </div>
  );
};

export default RatingReviews;
