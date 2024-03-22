import cn from 'classnames';
import { FC } from 'react';

type Colors = { color: string; name?: string }[];
const ColorsBallsList: FC<{ colors: Colors }> = ({ colors }) => {
  const coloresList = colors.map((item, idx) => (
    <div
      key={idx}
      className={cn(
        'me-3 flex items-center mb-1',
        idx === 0 && 'border-2 border-blue-800 rounded-full p-1'
      )}
    >
      <div
        className="p-2 rounded-full w-4 h-4 "
        style={{ backgroundColor: item.color }}
      />
      <span className="px-2 text-dark-gray text-less-medium">{item.name}</span>
    </div>
  ));
  return <div className="flex flex-wrap items-center">{coloresList}</div>;
};

export default ColorsBallsList;
