import { FC } from 'react';

const ProgressBar: FC<{ progressPercentage: number }> = ({
  progressPercentage,
}) => {
  return (
    <div className="progress-bar w-full flex items-center justify-between">
      <div className="rounded-full w-full bg-light-gray h-3">
        <div
          className="bg-yellow-400 rounded-full h-full"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      <span className="ps-5 text-medium font-semibold text-dark-gray">{`${progressPercentage}%`}</span>
    </div>
  );
};

export default ProgressBar;
