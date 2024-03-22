import cn from 'classnames';
import { FC, ReactNode } from 'react';

export interface RowInfoProps {
  label?: string | ReactNode;
  description: string | ReactNode;
  isLast?: boolean;
}

const RowInfo: FC<RowInfoProps> = ({ label, description, isLast }) => {
  return (
    <div
      className={cn(
        'text-medium flex items-start py-2',

        !isLast && 'border-b border-b-gray-100'
      )}
    >
      {label && (
        <span className="font-semibold me-5 w-2/5 md:w-1/4">{label} </span>
      )}
      <div className={cn(label ? 'w-3/5 md:w-3/4' : 'w-full')}>
        {description}
      </div>
    </div>
  );
};

export default RowInfo;
