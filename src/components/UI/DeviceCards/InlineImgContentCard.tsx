import Space from '@/components/UI/Space';
import { default as classNames, default as cn } from 'classnames';
import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

interface InlineImgContentCardProps {
  img: StaticImageData;
  name: string;
  detail: string;
  priceBefore?: number;
  priceAfter?: number;
  reverse?: boolean;
  hoverCard?: boolean;
  className?: string;
  country?: string;
}
const InlineImgContentCard: FC<InlineImgContentCardProps> = ({
  img,
  name,
  detail,
  priceBefore,
  priceAfter,
  reverse,
  hoverCard,
  className,
  country,
}) => {
  return (
    <div
      className={cn(
        'card-img-details flex justify-between items-center max-w-fit p-3 rounded-lg transition-all duration-300 ease-in-out',
        reverse && 'flex-row-reverse',
        hoverCard && 'hover:bg-white hover:shadow-lg hover:shadow-slate-400',
        className
      )}
    >
      <Image src={img} alt={name} />
      <div
        className={cn(
          'card-content-details max-w-fit',
          reverse ? 'text-end me-2' : 'text-start ms-2'
        )}
      >
        <span className=" block text-dark-gray font-bold text-medium">
          {name}
        </span>
        <span className="block text-light-gray text-medium">
          {country && (
            <span
              className={classNames(
                'text-white rounded-md text-small px-1',
                country !== 'Global' ? 'bg-dark-gray' : 'bg-primary'
              )}
            >
              {country}
            </span>
          )}
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

export default InlineImgContentCard;
