'use client';
import { Gallery } from '@/types';
import Image from 'next/image';
import { FC, useState } from 'react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import SwiperCarousel from './Swiper';

interface GalleryCaroselProps {
  data: {
    gallery: Gallery;
    activeSlide?: number | string | null;
  };
  previewSlideSettings?: object;
  thumbnailsSliderSettings?: object;
  className?: string;
}

const GalleryCarosel: FC<GalleryCaroselProps> = ({
  data,
  previewSlideSettings,
  thumbnailsSliderSettings,
  className,
  ...restProps
}) => {
  const { activeSlide, gallery } = data;
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const galleryList = (
    slideType: 'galleryView' | 'thumbnails',
    height: number | string,
    width: number | string
  ) =>
    gallery.map((item) => (
      <SwiperSlide key={item.id} style={{ height, width }}>
        {slideType === 'thumbnails' ? (
          <Image
            src={item.thumbnail}
            alt="Thmbnail slide"
            className="cursor-pointer"
            // style={{ objectFit }}
            // fill
            width={70}
            height={70}
          />
        ) : item.type === 'image' && item.image ? (
          <Image
            src={item.image}
            alt="Image Slide"
            className="h-full w-full"
            style={{ objectFit: 'contain' }}
            fill
          />
        ) : (
          <iframe
            className="h-full"
            width="100%"
            height="450"
            src={item.video}
            title="Youtube Video Player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </SwiperSlide>
    ));

  const indexofInitialSlide =
    activeSlide !== null
      ? gallery.findIndex((item) => item.id === activeSlide)
      : 0;

  return (
    <div className={className} {...restProps}>
      <SwiperCarousel
        initialSlide={indexofInitialSlide}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        {...previewSlideSettings}
      >
        {galleryList('galleryView', 500, 'auto')}
      </SwiperCarousel>
      <SwiperCarousel
        //@ts-ignore
        onSwiper={setThumbsSwiper}
        slidesPerView={gallery.length}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="thumbnails-swiper mt-5"
        {...thumbnailsSliderSettings}
      >
        {galleryList('thumbnails', 70, '70px !important')}
      </SwiperCarousel>
    </div>
  );
};

export default GalleryCarosel;
