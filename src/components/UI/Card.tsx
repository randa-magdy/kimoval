import cn from 'classnames';
import { FC } from 'react';

interface CardProps {
  className?: string;
  [key: string]: unknown;
  radius: 'rounded' | 'rounded-md' | 'rounded-lg' | 'rounded-xl';
  color?: string;
}
const Card: FC<CardProps> = ({
  className,
  radius = 'rounded-lg',
  color = 'bg-white',
  ...props
}) => {
  return (
    <div
      className={cn('p-5 md:p-8 shadow', color, radius, className)}
      {...props}
    />
  );
};

export default Card;
