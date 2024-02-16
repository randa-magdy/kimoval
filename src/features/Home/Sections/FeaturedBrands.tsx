import { AppleBrand } from '@/components/Icons/AppleBrand';
import Carousel from '@/components/UI/Carousel';
import NormalSection from '@/components/UI/Sections/NormalSection';
import ViewMoreButton from '@/components/UI/ViewMoreButton';
import Image from 'next/image';
import Brand1 from '../../../../public/home/brands/thumb_553615_brands_small.webp';
import Brand3 from '../../../../public/home/brands/thumb_6870_brands_small.webp';
import Brand4 from '../../../../public/home/brands/thumb_6926_brands_small.webp';
import Brand5 from '../../../../public/home/brands/thumb_6927_brands_small.webp';
import Brand6 from '../../../../public/home/brands/thumb_6936_brands_small.webp';
import Brand7 from '../../../../public/home/brands/thumb_6949_brands_small.webp';
import Brand8 from '../../../../public/home/brands/thumb_6955_brands_small.webp';
import Brand2 from '../../../../public/home/brands/thumb_78095_brands_small.webp';

const FeaturedBrands = () => {
  const carouselOptions = {
    // className: "center",
    infinite: true,
    dots: false,
    arrows: false,
    autoplay: true,
    centerMode: true,
  };
  const responsive = {
    xl: 6,
    lg: 5,
    md: 4,
    xs: 3,
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
    <div key={idx}>
      <Image src={brand} alt="brand" className="bg-white" />
    </div>
  ));
  return (
    <NormalSection
      sectionClassName="featured-brands"
      title="Featured Brands"
      icon={AppleBrand}
    >
      <Carousel responsive={responsive} {...carouselOptions}>
        {brandsList}
      </Carousel>
      <ViewMoreButton url="#" />
    </NormalSection>
  );
};

export default FeaturedBrands;
