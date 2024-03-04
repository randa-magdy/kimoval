import { StaticImageData } from 'next/image';

import { FC } from 'react';
import InlineImgContentCard from './InlineImgContentCard';

type deviceProps = {
  img: StaticImageData;
  name: string;
  detail: string;
};
interface VSTwoDevicesCardProps {
  deviceOne: deviceProps;
  deviceTwo: deviceProps;
}
const VSTwoDevicesCard: FC<VSTwoDevicesCardProps> = ({
  deviceOne,
  deviceTwo,
}) => {
  return (
    <div className="flex items-center relative mx-auto">
      <InlineImgContentCard
        img={deviceOne.img}
        name={deviceOne.name}
        detail={deviceOne.detail}
        reverse={true}
        className="me-[-20px]"
        hoverCard={false}
      />
      {/* <div className="bg-primary rounded-full py-1 px-1.5 w-max h-max text-white font-bold absolute">
        VS
      </div> */}
      <InlineImgContentCard
        img={deviceTwo.img}
        name={deviceTwo.name}
        detail={deviceTwo.detail}
        className="ms-[-20px]"
        hoverCard={false}
      />
    </div>
  );
};

export default VSTwoDevicesCard;
