import { FillStar } from '@/components/Icons/FillStar';
import { FC } from 'react';

export interface RatingStarProps {
  rating: number | string;
}
const RatingStar: FC<RatingStarProps> = ({ rating }) => {
  return (
    <div className="rating flex items-center">
      <span className="text-less-medium text-gray-500 font-bold">{rating}</span>
      <FillStar className="text-yellow-400 mx-2" fontSize={15} />
    </div>
  );
};

export default RatingStar;
