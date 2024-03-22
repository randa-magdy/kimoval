import { GalleryProps } from '@/types';
import Image from 'next/image';
import { FC } from 'react';
import Space from '../Space';

export type DeviceGalleryProps = Required<
  Pick<GalleryProps, 'id' | 'image' | 'thumbnail'>
>;
interface DeviceCarouselProps {
  gallery: DeviceGalleryProps[];
  // eslint-disable-next-line no-unused-vars
  handleClick: (item: DeviceGalleryProps) => void;
}
const DeviceCarousel: FC<DeviceCarouselProps> = ({ gallery, handleClick }) => {
  const galleryList = gallery.map((item, idx) => (
    <div
      key={item.id}
      onClick={() => handleClick(item)}
      className="bg-white rounded-lg p-2 w-10 h-14 cursor-pointer"
    >
      <Image
        src={item.thumbnail}
        alt={'gallery thumbnail' + (idx + 1)}
        className="h-full w-full"
        width={40}
        height={70}
        priority
      />
    </div>
  ));
  return (
    <Space direction="vertical" size="small" className="h-full">
      {galleryList}
    </Space>
  );
};

export default DeviceCarousel;
