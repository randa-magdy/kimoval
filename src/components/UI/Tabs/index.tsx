'use client';
import { IconProps } from '@/types';
import cn from 'classnames';
import { usePathname } from 'next/navigation';
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
  const pathname = usePathname();

  const ItemsList = () => (
    <ul
      className={cn(
        'flex items-center border-b border-white-light py-1',
        className
      )}
    >
      {items.map((item, idx) => {
        const activeTab = pathname === item.url;
        const activeClass =
          activeTab &&
          'max-lg:active:bg-transparent-white lg:active:after:bg-white';
        const hoverClasses =
          'max-lg:hover:bg-transparent-white lg:hover:after:bg-white';
        return (
          <li
            key={idx}
            className={cn(
              'me-5 relative py-1 px-2 sm:px-3 md:px-2 lg:px-0 rounded-lg lg:after:absolute lg:after:left-0 lg:after:right-0 lg:after:top-9 lg:after:h-1 lg:after:rounded lg:after:ml-0 lg:hover:after:mr-0',
              hoverClasses,
              activeClass
            )}
          >
            <TabItem
              icon={item.icon}
              title={item.title}
              url={item.url}
              handleClick={item.handleClick}
              fontSize={25}
            />
          </li>
        );
      })}
    </ul>
  );
  return <ItemsList />;
};

export default Tabs;
