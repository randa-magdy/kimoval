import Link from 'next/link';
import { FC } from 'react';
import { RightArrow } from '../Icons/RightArrow';

type Items = { label: string; url?: string }[];
const Breadcrumb: FC<{ items: Items }> = ({ items }) => {
  const breadcrumbList = items.map((item, idx) => (
    <>
      {item.url ? (
        <Link
          key={item.label}
          href={item.url}
          className="text-light-gray hover:text-white transition-colors duration-300 ease-in-out"
        >
          {item.label}
        </Link>
      ) : (
        <span
          key={item.label}
          className="text-light-gray hover:text-white transition-colors duration-300 ease-in-out"
        >
          {item.label}
        </span>
      )}
      {idx !== items.length - 1 && (
        <RightArrow fontSize={15} className="text-light-gray mx-2" />
      )}
    </>
  ));
  return (
    <div className="breadcrumb flex flex-wrap items-center">
      {breadcrumbList}
    </div>
  );
};

export default Breadcrumb;
