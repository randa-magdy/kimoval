import { Facebook } from '@/components/Icons/Facebook';
import { Twitter } from '@/components/Icons/Twitter';
import { Youtube } from '@/components/Icons/Youtube';
import cn from 'classnames';
import { FC } from 'react';

const BottomFooter: FC = () => {
  const leftSideData = [
    { count: 14256, label: 'SmartPhones' },
    { count: 215, label: 'Brands' },
    { count: 765, label: 'Shops' },
    { count: 140147, label: 'Prices' },
    { count: 135, label: 'Deals' },
    { count: 69160, label: 'User Reviews' },
  ];

  const rightSideData = [
    { icon: Facebook, url: '' },
    { icon: Twitter, url: '' },
    { icon: Youtube, url: '' },
  ];
  const leftSideList = leftSideData.map((item, idx) => (
    <span
      key={item.label}
      className={cn('text-medium font-semibold', idx !== 0 && 'px-3')}
    >
      {item.count + ' ' + item.label}
    </span>
  ));

  const rightSideList = rightSideData.map((item, idx) => {
    const Icon = item.icon;
    return (
      <a
        key={idx}
        href={item.url}
        className={cn(idx !== rightSideData.length - 1 && 'me-5')}
        rel="noopener noreferrer nofollow"
      >
        <Icon
          fontSize={20}
          className="text-light-gray hover:text-primary transition duration-300 ease-in-out"
        />
      </a>
    );
  });
  return (
    <div className="flex flex-wrap justify-between items-center text-light-gray">
      <div className="flex flex-wrap left-side justify-center lg:justify-start w-full lg:w-3/4 my-3 lg:my-0">
        {leftSideList}
      </div>
      <div className="flex justify-center lg:justify-end right-side w-full lg:w-1/4">
        {rightSideList}
      </div>
    </div>
  );
};

export default BottomFooter;
