import Link from 'next/link';
import { FC } from 'react';
import { DownArrow } from '../Icons/DownArrow';
import Button from './Button';

const ViewMoreButton: FC<{ url: string }> = ({ url }) => {
  return (
    <div className="view-more text-center">
      <Link href={url}>
        <Button
          className="bg-light-gray rounded-3xl mt-8 hover:bg-primary hover:text-white"
          size="small"
        >
          <DownArrow fontSize={23} />
          <span className="text-dark-gray px-2 font-semibold">View More</span>
        </Button>
      </Link>
    </div>
  );
};

export default ViewMoreButton;
