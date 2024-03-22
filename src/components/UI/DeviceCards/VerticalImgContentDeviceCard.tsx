import { Compare } from '@/components/Icons/Compare';
import { EmptyHeart } from '@/components/Icons/EmptyHeart';
import { FillHeart } from '@/components/Icons/FillHeart';
import { Share } from '@/components/Icons/Share';
import Space from '@/components/UI/Space';
import { default as cn } from 'classnames';
import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';
import RatingReviews, { RatingReviewsProps } from '../Rating/RatingReviews';

export interface VerticalImgContentDeviceCardProps extends RatingReviewsProps {
  img: StaticImageData;
  name: string;
  detail: string;
  priceBefore?: number;
  priceAfter?: number;
  hoverCard?: boolean;
  className?: string;
  country?: string;
}

const icons = [
  { empty: EmptyHeart, fill: FillHeart, title: 'favorite' },
  { empty: Compare, fill: Compare, title: 'compare' },
  { empty: Share, fill: Share, title: 'share' },
];

const VerticalImgContentDeviceCard: FC<VerticalImgContentDeviceCardProps> = ({
  img,
  name,
  detail,
  priceBefore,
  priceAfter,
  hoverCard,
  className,
  // country,
  rating,
  reviewsNumber,
}) => {
  const iconstList = icons.map((icon, idx) => {
    const Icon = icon.empty;
    return (
      <div
        key={idx}
        className="mx-3 cursor-pointer relative"
        title={icon.title}
      >
        <Icon
          fontSize={18}
          className="text-dark-gray hover:text-primary transition-colors duration-300 ease-in-out hover:scale-125"
        />
      </div>
    );
  });
  return (
    <div
      className={cn(
        'hover-appear-hidden card-img-details flex flex-col items-center max-w-fit p-3 rounded-lg transition-all duration-300 ease-in-out',
        hoverCard && 'hover:bg-white hover:shadow-lg hover:shadow-slate-400',
        className
      )}
    >
      <div className="bg-light-gray rounded-lg px-3 py-4 w-full mb-2">
        <Image
          src={img}
          alt={name}
          height={120}
          className="mx-auto"
          placeholder="blur"
        />
        <div className="hidden">
          <div
            className="icons-container flex justify-center mt-3 py-1 bg-slate-300 rounded-xl"
            style={{ marginBottom: -25 }}
          >
            {iconstList}
          </div>
        </div>
      </div>

      <div className="card-content-details max-w-fit">
        <RatingReviews rating={rating} reviewsNumber={reviewsNumber} />
        <span className=" block text-dark-gray font-bold text-medium">
          {name}
        </span>

        <span className="block text-light-gray text-medium">
          {/* {country && (
            <span
              className={classNames(
                'text-white rounded-md text-small px-1',
                country !== 'Global' ? 'bg-dark-gray' : 'bg-primary'
              )}
              style={{ marginTop: -10 }}
            >
              {country}
            </span>
          )} */}
          {detail}
        </span>
        {(priceBefore || priceAfter) && (
          <Space>
            {priceBefore && (
              <span className="block pre-price line-through text-light-gray text-medium">
                $ {priceBefore}
              </span>
            )}
            {priceAfter && (
              <span className="block price font-bold text-crimson text-medium">
                $ {priceAfter}
              </span>
            )}
          </Space>
        )}
      </div>
    </div>
  );
};

export default VerticalImgContentDeviceCard;
