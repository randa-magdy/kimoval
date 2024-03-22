import { FC, ReactNode } from 'react';
import { Swiper, SwiperProps } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

interface SwiperCarouselProps extends SwiperProps {
  children: ReactNode;
  responsive?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    xxl?: number;
  };
}

const SwiperCarousel: FC<SwiperCarouselProps> = ({
  children,
  responsive,
  ...restProps
}) => {
  return (
    <Swiper
      loop={true}
      spaceBetween={10}
      breakpoints={
        responsive
          ? {
              0: {
                slidesPerView: responsive?.xs,
              },
              640: {
                slidesPerView: responsive?.sm,
              },
              768: {
                slidesPerView: responsive?.md,
              },
              1024: {
                slidesPerView: responsive?.lg,
              },
              1280: {
                slidesPerView: responsive?.xl,
              },
              1536: {
                slidesPerView: responsive?.xxl,
              },
            }
          : undefined
      }
      {...restProps}
    >
      {children}
    </Swiper>
  );
};

export default SwiperCarousel;
