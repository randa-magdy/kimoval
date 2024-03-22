import { FireOutline } from '@/components/Icons/FireOutline';
import { RightArrow } from '@/components/Icons/RightArrow';
import Space from '@/components/UI/Space';
import cn from 'classnames';
import Link from 'next/link';
import { FC } from 'react';

interface PricesListProps {
  name: string;
  pricesData: { details: string; price: number | null; slug: string }[];
}

const PricesList: FC<PricesListProps> = ({ name, pricesData }) => {
  const cheapestPrice =
    pricesData.length > 0 &&
    pricesData.sort((a, b) => {
      if (a.price !== null && b.price !== null) {
        return a.price - b.price;
      }
    })[0].price;

  const pricesList = pricesData.map((item, idx) => (
    <div
      key={idx}
      className={cn(
        'px-3 py-2 text-less-medium',
        idx !== pricesData.length - 1 && 'border-b border-gray-300',
        idx === 5 && 'shadow-md shadow-gray-200 bg-gray-white'
      )}
    >
      <Space>
        <div>
          <span className="font-semibold text-medium text-dark-gray">
            {name}
          </span>
          <span className="px-2 font-bold text-normal">.</span>
          <span>{item.details}</span>
        </div>
        <Link href="#">
          <div className="flex justify-end items-center">
            {item.price && (
              <div className="flex">
                {cheapestPrice === item.price && (
                  <FireOutline fontSize={15} className="text-crimson me-1" />
                )}

                <span
                  className={cn(
                    'font-semibold',
                    cheapestPrice === item.price
                      ? 'text-crimson'
                      : 'text-primary'
                  )}
                >
                  {item.price}$
                </span>
              </div>
            )}
            <RightArrow
              fontSize={15}
              className="ms-2 text-light-gray hover:text-dark-gray transition-colors duration-300 ease-in-out"
            />
          </div>
        </Link>
      </Space>
    </div>
  ));
  return <div className="shadow rounded-xl">{pricesList}</div>;
};

export default PricesList;
