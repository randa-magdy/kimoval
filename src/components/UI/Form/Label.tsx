import cn from 'classnames';
import { FC, LabelHTMLAttributes } from 'react';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
}

const Label: FC<LabelProps> = ({ className, ...rest }) => {
  return (
    <label
      className={cn(
        'text-dark-gray text-normal font-semibold block mb-3',
        className
      )}
      {...rest}
    />
  );
};

export default Label;
