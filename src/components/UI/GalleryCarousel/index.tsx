'use client';
import { FC, useEffect, useState } from 'react';
import ImageZoom from '../ImageZoom';
import DeviceCarousel, { DeviceGalleryProps } from './DeviceCarousel';

const gallery: DeviceGalleryProps[] = [
  {
    id: 1,
    image: '/images/single-device/gallery/thumb_837630_default_big.webp',
    thumbnail: '/images/single-device/gallery/thumb_837630_default_big.webp',
  },
  {
    id: 2,
    image: '/images/single-device/gallery/thumb_837241_phone_front_big.jpg',
    thumbnail: '/images/single-device/gallery/thumb_837241_phone_front_big.jpg',
  },
  {
    id: 3,
    image: '/images/single-device/gallery/thumb_837626_default_big.webp',
    thumbnail: '/images/single-device/gallery/thumb_837626_default_big.webp',
  },
  {
    id: 4,
    image: '/images/single-device/gallery/thumb_837627_default_big.webp',
    thumbnail: '/images/single-device/gallery/thumb_837627_default_big.webp',
  },

  {
    id: 6,
    image: '/images/single-device/gallery/thumb_837628_default_big.webp',
    thumbnail: '/images/single-device/gallery/thumb_837628_default_big.webp',
  },
];

const GalleryCarousel: FC = () => {
  const [imagePreview, setImagePreview] = useState<DeviceGalleryProps>(
    gallery[0]
  );

  useEffect(() => {
    if (gallery.length > 0) {
      setImagePreview(gallery[0]);
    }
  }, []);

  const handleClick = (item: DeviceGalleryProps): void => {
    setImagePreview(item);
  };

  return (
    <div className="flex justify-start items-center" style={{ height: 350 }}>
      <div className="my-3 me-2 h-full">
        <DeviceCarousel gallery={gallery} handleClick={handleClick} />
      </div>
      <div className="bg-white rounded-xl p-5 flex flex-col justify-center w-full h-full">
        <ImageZoom img={imagePreview.image} />
      </div>
    </div>
  );
};

export default GalleryCarousel;
