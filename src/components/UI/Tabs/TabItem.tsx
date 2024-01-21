'use client';
import { IconProps } from '@/types';
import Link from 'next/link';
import { ComponentType, FC } from 'react';

interface TabItemProps {
  icon?: ComponentType<IconProps>;
  title: string;
  url: string;
  handleClick?: () => void;
  fontSize: number;
}
export const TabItem: FC<TabItemProps> = ({
  icon: Icon,
  title,
  url,
  handleClick,
  ...restProps
}) => {
  return (
    <Link href={url} onClick={handleClick}>
      <div className="flex items-center flex-col sm:flex-row">
        {Icon && <Icon {...restProps} />}
        <span className="ps-0 sm:ps-2 pt-1 sm:pt-0 text-sm lg:text-base">
          {title}
        </span>
      </div>
    </Link>
  );
};
