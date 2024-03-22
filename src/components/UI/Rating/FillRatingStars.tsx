import { EmptyStar } from '@/components/Icons/EmptyStar';
import { FillStar } from '@/components/Icons/FillStar';
import { useState } from 'react';

const FillRatingStars = () => {
  const [hover, setHover] = useState<number[]>([]);

  const handleSelectStars = (idx: number | null): void => {
    if (idx !== null && typeof idx === 'number') {
      let starsActive: number[] = [];
      starsActive = Array.from({ length: idx }, (_, index) => index);

      setHover([...starsActive]);
    } else {
      setHover([]);
    }
  };

  const emptyStars = Array(5)
    .fill(0)
    .map((_, idx) =>
      hover.includes(idx) ? (
        <FillStar
          key={idx}
          className="text-yellow-400 mx-2"
          fontSize={30}
          onClick={() => handleSelectStars(idx + 1)}
        />
      ) : (
        <EmptyStar
          key={idx}
          fontSize={30}
          onClick={() => handleSelectStars(idx + 1)}
          className="text-yellow-400 transition-colors duration-300 ease-in-out mx-2"
        />
      )
    );

  return <div className="fill-rating-star flex">{emptyStars}</div>;
};

export default FillRatingStars;
