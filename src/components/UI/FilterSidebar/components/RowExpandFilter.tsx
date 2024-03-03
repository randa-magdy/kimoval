'use client';
import { DownArrow } from '@/components/Icons/DownArrow';
import cn from 'classnames';
import { FC, ReactNode, useState } from 'react';
import Label from './Label';

export interface RowExpandFilterProps {
  title: string;
  content?: ReactNode;
  rows?: { title?: string; content: ReactNode }[];
}
const RowExpandFilter: FC<RowExpandFilterProps> = ({
  title,
  content,
  rows,
}) => {
  const [expand, setExpand] = useState<boolean>(false);
  const rowsList =
    rows &&
    rows.length > 0 &&
    rows.map((row, idx) => (
      <div key={idx}>
        {row.title && <Label label={row.title} size="less-medium" />}
        <div
          className={cn(
            idx !== 0 && 'pt-3',
            idx !== rows.length - 1 && 'border-b border-gray-300 pb-3'
          )}
        >
          {row.content}
        </div>
      </div>
    ));
  return (
    <div
      className={cn(
        'hover:bg-gray-white transition duration-700 ease-in-out rounded-lg cursor-pointer',
        expand && 'bg-gray-white border-b border-gray-100'
      )}
    >
      <div
        className={cn(
          'p-2 hover-appear-child row-title flex justify-between items-center transition duration-700 ease-in-out',
          !expand && 'border-b border-gray-100'
        )}
        onClick={() => setExpand(!expand)}
      >
        <span className="text-dark-gray">{title}</span>
        <DownArrow
          fontSize={25}
          className={cn(
            'transition-all duration-700 ease-in-out text-dark-gray',
            expand ? 'block rotate-180' : 'hidden'
          )}
        />
      </div>
      <div
        className={cn(
          'row-inputs transition-all duration-700 ease-in-out py-2 px-8',
          expand ? 'h-max block' : 'h-0 hidden'
        )}
      >
        {content || rowsList}
      </div>
    </div>
  );
};

export default RowExpandFilter;
