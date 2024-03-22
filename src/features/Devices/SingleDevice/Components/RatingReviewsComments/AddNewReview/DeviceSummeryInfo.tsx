import Space from '@/components/UI/Space';
import Image from 'next/image';

const DeviceSummeryInfo = () => {
  return (
    <div className="device-info flex pb-3 items-center border-b border-b-gray-100">
      <div className="device-image-container w-1/4 px-6">
        <Image
          src="/images/home/thumb_777314_phone_front_x_small.jpg"
          alt="img"
          width={40}
          height={40}
        />
      </div>
      <Space direction="vertical" className=" w-3/4 px-6">
        <span className="text-dark-gray text-normal font-semibold">
          Xiaomi 14
        </span>
        <span className="text-black text-small">
          Introducing the Xiaomi 14 Pro - a High-end Smartphone from Xiaomi The
          Xiaomi 14 Pro is a high-end smartphone from Xiaomi and the latest
          addition to the Xiaomi 14 series.
        </span>
        <span className="text-light-gray">$300</span>
      </Space>
    </div>
  );
};

export default DeviceSummeryInfo;
