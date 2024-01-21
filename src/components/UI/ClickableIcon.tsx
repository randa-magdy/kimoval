'use client';
import { IconProps } from '@/types';
import cn from 'classnames';
import { ComponentType, FC } from 'react';
import Button from './Button';

interface ClickableIconProps {
  icon: ComponentType<IconProps>;
  title?: string;
  handleClick?: () => void;
  fontSize: number;
  size?: 'big' | 'medium' | 'small';
  visibility?: 'always';
}
export const ClickableIcon: FC<ClickableIconProps> = ({
  icon: Icon,
  title,
  size,
  handleClick,
  visibility,
  ...restProps
}) => {
  return (
    <Button type="button" size={size} onClick={handleClick}>
      <Icon {...restProps} />
      {title && (
        <span className={cn('ps-2', visibility ? 'block' : 'hidden xl:block')}>
          {title}
        </span>
      )}
    </Button>
  );
};
