import cn from 'classnames';
import { FC } from 'react';

interface LabelProps {
  label: string;
  size?: 'medium' | 'less-medium' | 'small';
  className?: string;
  style?: object;
}
const Label: FC<LabelProps> = ({ label, size, className, style }) => {
  return (
    <span
      className={cn(
        'font-semibold block my-2',
        size === 'small'
          ? 'text-small'
          : size === 'less-medium'
            ? 'text-less-medium'
            : 'text-medium',
        className
      )}
      style={style}
    >
      {label}
    </span>
  );
};

export default Label;
