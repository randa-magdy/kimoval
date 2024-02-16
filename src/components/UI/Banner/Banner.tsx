import { FC, ReactNode } from 'react';
import Tabs, { ItemsProps } from '../Tabs';
import TitleDescription from './TitleDescription';

export interface BannerProps {
  height: number | string;
  tabsItems?: ItemsProps[];
  title?: string;
  description?: string | ReactNode;
  children?: ReactNode;
}

const Banner: FC<BannerProps> = ({
  height,
  tabsItems,
  title,
  description,
  children,
}) => {
  return (
    <div className="banner text-white" style={{ height: height }}>
      <div className="container mx-auto my-3">
        {tabsItems && <Tabs items={tabsItems} />}
        {title && description && (
          <TitleDescription title={title} description={description} />
        )}
      </div>
      {children}
    </div>
  );
};

export default Banner;
