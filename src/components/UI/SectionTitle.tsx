import { ElementType, FC } from 'react';

export interface SectionTitleProps {
  title: string;
  icon?: ElementType;
}
const SectionTitle: FC<SectionTitleProps> = ({ title, icon: Icon }) => {
  const firstLetter = title?.split('')[0]?.toUpperCase();
  const remainTitle = title?.split('')?.slice(1, title?.length).join('');
  return (
    <div className="title-text relative font-bold mb-5">
      <h3 className="text-h3 border-b-black">
        <span className="text-primary">
          {Icon && <Icon fontSize={25} className="inline" />} {firstLetter}
        </span>
        <span className="text-secondary">{remainTitle}</span>
      </h3>
      {/* <div className="title-text::after bg-primary absolute left-0 top-1/2 w-10 h-1 transform -translate-y-1/2"></div> */}
    </div>
  );
};

export default SectionTitle;
