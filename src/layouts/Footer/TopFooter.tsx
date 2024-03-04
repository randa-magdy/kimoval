import { FC } from 'react';

const TopFooter: FC = () => {
  return (
    <div className="flex items-end text-dark-gray mx-auto lg:mx-0">
      <span className="text-lg">Logo</span>
      <span className="text-medium font-semibold px-6 md:px-8">Contact</span>
      <span className="text-medium font-semibold px-6 md:px-8">
        Be our partener
      </span>
    </div>
  );
};

export default TopFooter;
