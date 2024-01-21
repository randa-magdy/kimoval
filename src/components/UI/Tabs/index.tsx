'use client';
import { IconProps } from '@/types';
import cn from 'classnames';
import { ComponentType, FC } from 'react';
import { TabItem } from './TabItem';

interface ItemsProps {
  icon: ComponentType<IconProps>;
  title: string;
  url: string;
  handleClick?: () => void;
}

interface TabsProps {
  items: ItemsProps[];
  className?: string;
}

const Tabs: FC<TabsProps> = ({ items, className }) => {
  const ItemsList = () => (
    <ul
      className={cn(
        'flex items-center border-b border-white-light py-1',
        className
      )}
    >
      {items.map((item, idx) => (
        <li key={idx} className="pe-5">
          <TabItem
            icon={item.icon}
            title={item.title}
            url={item.url}
            handleClick={item.handleClick}
            fontSize={25}
          />
        </li>
      ))}
    </ul>
  );
  return <ItemsList />;
};

export default Tabs;
