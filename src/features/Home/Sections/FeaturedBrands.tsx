'use client';
import { AppleBrand } from '@/components/Icons/AppleBrand';
import NormalSection from '@/components/UI/Sections/NormalSection';
import SwiperCarousel from '@/components/UI/Swiper';
import ViewMoreButton from '@/components/UI/ViewMoreButton';
import Image from 'next/image';
import { Autoplay, FreeMode, Thumbs } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import Brand1 from '../../../../public/images/home/brands/thumb_553615_brands_small.webp';
import Brand3 from '../../../../public/images/home/brands/thumb_6870_brands_small.webp';
import Brand4 from '../../../../public/images/home/brands/thumb_6926_brands_small.webp';
import Brand5 from '../../../../public/images/home/brands/thumb_6927_brands_small.webp';
import Brand6 from '../../../../public/images/home/brands/thumb_6936_brands_small.webp';
import Brand7 from '../../../../public/images/home/brands/thumb_6949_brands_small.webp';
import Brand8 from '../../../../public/images/home/brands/thumb_6955_brands_small.webp';
import Brand2 from '../../../../public/images/home/brands/thumb_78095_brands_small.webp';

const FeaturedBrands = () => {
  const carouselOptions = {
    // className: "center",
    navigation: false,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
    },
    modules: [FreeMode, Thumbs, Autoplay],
    freeMode: true,
    watchSlidesProgress: true,
  };

  const responsive = {
    xs: 3,
    sm: 4,
    md: 5,
    lg: 6,
    xxl: 6,
  };

  const brands = [
    Brand1,
    Brand2,
    Brand3,
    Brand4,
    Brand5,
    Brand6,
    Brand7,
    Brand8,
  ];

  const brandsList = brands.map((brand, idx) => (
    <SwiperSlide key={idx}>
      <Image
        src={brand}
        alt="brand"
        className="bg-white rounded-2xl w-24 sm:w-32 xl:w-36"
      />
    </SwiperSlide>
  ));
  return (
    <NormalSection
      sectionClassName="featured-brands"
      title="Featured Brands"
      icon={AppleBrand}
    >
      <SwiperCarousel
        responsive={responsive}
        className="mx-auto"
        {...carouselOptions}
      >
        {brandsList}
      </SwiperCarousel>
      <ViewMoreButton url="#" />
    </NormalSection>
  );
};

export default FeaturedBrands;
