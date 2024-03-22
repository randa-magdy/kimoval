import Image from 'next/image';
import { FC } from 'react';

interface SmallInlineImgNameProps {
  img: string;
  name: string;
}
const SmallInlineImgName: FC<SmallInlineImgNameProps> = ({ img, name }) => {
  return (
    <div className="flex items-center me-4 mb-2">
      <Image
        src={img}
        alt={name}
        loading="lazy"
        width={18}
        height={33}
        className="h-auto"
      />
      <span className="text-less-medium px-1 text-wrap">{name}</span>
    </div>
  );
};

export default SmallInlineImgName;
