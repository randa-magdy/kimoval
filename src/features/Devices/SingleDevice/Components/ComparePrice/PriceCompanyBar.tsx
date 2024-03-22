import Button from '@/components/UI/Button';
import RatingReviews from '@/components/UI/Rating/RatingReviews';
import Space from '@/components/UI/Space';
import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

interface PriceCompanyBarProps {
  img: StaticImageData;
  name: string;
  price: string;
  url: string;
}

const PriceCompanyBar: FC<PriceCompanyBarProps> = ({
  img,
  name,
  price,
  url,
}) => {
  return (
    <Space className="rounded-full bg-white px-2 py-1 mb-2" align="center">
      <Image src={img} alt={name} priority width={100} />
      <RatingReviews rating={4.5} reviewsNumber="3.5k" />
      <span className="block text-light-primary font-bold">{price}</span>
      <Button
        size="small"
        className="bg-dark-primary hover:bg-primary text-white rounded-full px-3"
      >
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="text-less-medium"
        >
          Visit Store
        </a>
      </Button>
    </Space>
  );
};

export default PriceCompanyBar;
