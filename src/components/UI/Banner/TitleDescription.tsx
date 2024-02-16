import cn from 'classnames';
import { FC, ReactNode } from 'react';

interface TitleDescriptionProps {
  title: string;
  description: string | ReactNode;
  direction?: 'vertical' | 'horizontal';
}
const TitleDescription: FC<TitleDescriptionProps> = ({
  title,
  description,
  direction = 'horizontal',
}) => {
  return (
    <div
      className={cn(
        'flex justify-between items-center',
        direction === 'vertical' ? 'flex-col' : 'flex-col lg:flex-row'
      )}
    >
      {title && <h1 className="text-h3 text-white w-full">{title}</h1>}
      {description && <p className="text-light-gray my-3">{description}</p>}
    </div>
  );
};

export default TitleDescription;
