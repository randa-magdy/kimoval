'use client';
import { ReactNode, forwardRef } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

interface CarouselProps {
  children: ReactNode;
  responsive: { xl: number; lg: number; md: number; xs: number };
}

const Carousel = forwardRef<Slider, CarouselProps>(
  ({ children, responsive, ...restProps }, ref) => {
    var settings = {
      infinite: true,
      speed: 500,
      pauseOnHover: true,
      slidesToShow: responsive.xl,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: responsive.lg,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: responsive.md,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: responsive.xs,
          },
        },
      ],
      ...restProps,
    };

    return (
      <Slider ref={ref} {...settings}>
        {children}
      </Slider>
    );
  }
);
Carousel.displayName = 'Carousel';
export default Carousel;
