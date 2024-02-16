'use client';
import cn from 'classnames';
import { usePathname } from 'next/navigation';
import { FC, ReactNode } from 'react';
import { TabItem, TabItemProps } from './TabItem';

export interface ItemsProps extends TabItemProps {
  id: string;
  content?: string | ReactNode;
}
interface TabsProps {
  items: ItemsProps[];
  className?: string;
}

const Tabs: FC<TabsProps> = ({ items, className }) => {
  const pathname: string = usePathname();

  const ItemsList = () => (
    <ul
      className={cn(
        'flex items-center border-b border-white-light py-1',
        className
      )}
    >
      {items.map((item, idx) => {
        const activeTab = pathname === item.id;
        console.log(pathname, item.url, pathname === item.id);

        const activeClass =
          activeTab && 'max-lg:bg-transparent-white lg:after:bg-white';
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

  const tabContent = items.find((item) => item.id === pathname && item.content);

  return (
    <>
      <ItemsList />
      {tabContent && (
        <div className="tab-content text-white py-4 mt-3">
          {tabContent?.content}
        </div>
      )}
    </>
  );
};

export default Tabs;
