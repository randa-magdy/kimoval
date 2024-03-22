import SmallInlineImgName from '@/components/UI/DeviceCards/SmallInlineImgName';
import { FC } from 'react';

type Devices = { img: string; name: string }[];

const DevicesImgeName: FC<{ devices: Devices }> = ({ devices }) => {
  const devicesList = devices.map((device) => (
    <SmallInlineImgName key={device.name} img={device.img} name={device.name} />
  ));
  return <div className="flex flex-wrap">{devicesList}</div>;
};

export default DevicesImgeName;
