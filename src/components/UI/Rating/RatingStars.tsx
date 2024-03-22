import { FC } from 'react';
import { EmptyStar } from '../../Icons/EmptyStar';
import { FillStar } from '../../Icons/FillStar';
import { HalfFillStar } from '../../Icons/HalfFillStar';

const YellowStar = ({ size = 22 }: { size: number | undefined }) => (
  <FillStar className="text-yellow-400" fontSize={size} />
);

const EmptyYellowStar = ({ size = 22 }: { size: number | undefined }) => (
  <EmptyStar className="text-yellow-400" fontSize={size} />
);

const HalfYellowStar = ({ size = 22 }: { size: number | undefined }) => (
  <HalfFillStar className="text-yellow-400" fontSize={size} />
);

const RatingStars: FC<{ rate: number; size?: number }> = ({ rate, size }) => {
  const FillStars = Array(Math.floor(rate))
    .fill(0)
    .map((_, idx) => <YellowStar key={idx} size={size} />);
  const halfFillStar =
    rate > Math.floor(rate) ? <HalfYellowStar size={size} /> : null;
  const remainEmptyStars = Array(5 - Math.round(rate))
    .fill(0)
    .map((_, idx) => <EmptyYellowStar key={idx} size={size} />);

  const result = [...FillStars, halfFillStar, ...remainEmptyStars].map(
    (star, idx) => (
      <span key={idx} className="pe-2">
        {star}
      </span>
    )
  );

  return <div className="flex">{result}</div>;
};

export default RatingStars;
