import { Compare } from '@/components/Icons/Compare';
import Banner from '@/components/UI/Banner/Banner';
import TitleDescription from '@/components/UI/Banner/TitleDescription';
import Button from '@/components/UI/Button';
import SearchInput from '@/components/UI/Form/SearchInput';
import Image from 'next/image';
import { ReactNode } from 'react';
import Iphone from '../../public/home/iphone.png';

const HomeBanner = () => (
  <Banner height="clamp(250px,40vw,500px)">
    <div className="banner-content block lg:flex lg:items-center">
      <Image src={Iphone} alt="iphone" className="hidden lg:block" />

      <div className="banner-title-input mt-20 lg:mt-0 h-full">
        <h1 className="text-h1 font-bold">
          <span>Compare Devices &</span> <br />{' '}
          <span style={{ paddingLeft: 'clamp(0.2rem,14vw,14rem)' }}>
            Make Informed Choices
          </span>
        </h1>
        <div
          className="cmpare-input flex align-middle mt-8"
          style={{ width: 'clamp(75%,100vw,100%)' }}
        >
          <SearchInput className="w-full" />
          <Button className="bg-primary rounded-tr-3xl rounded-br-3xl hover:bg-dark-primary">
            <Compare fontSize={25} /> <span className="px-2">Compare</span>
          </Button>
        </div>
      </div>
    </div>
  </Banner>
);

const SmartPhonesBanner = () => {
  const tabsItems = [
    {
      //   icon: Mobile,
      id: '/smartphones',
      title: 'All SmartPhones',
      url: '/smartphones',
      handleClick: () => console.log('hi'),
      content: (
        <TitleDescription
          title="All SmartPhones content"
          description={
            <>
              Smartphone price comparison. Find the right smartphone just for
              you.
              <br />
              Welcome to Kimovil. On this page you can use the filters on your
              left to refine your smartphone search according to your
              preference. A price comparison will be shown for smartphones from
              more than 100 Spanish and international stores; so you can be sure
              of the cheapest price on the smartphone you are looking for
            </>
          }
        />
      ),
    },
    {
      //   icon: Tablet,
      id: '',
      title: 'Brands',
      url: '',
      handleClick: () => console.log('hi'),
      content: (
        <TitleDescription
          title="SmartPhones Brands content"
          description="In our section of brands you can find all mobile brands, both leading brands worldwide as the best brands of Chinese mobile terminals that have very competitive in its cost-effective ratio. Find phones from brands like Apple, Samsung, LG or HTC, mobile and new Chinese brands such as ZTE, Huawei and Xiaomi."
        />
      ),
    },
    {
      //   icon: FireOutline,
      id: '',
      title: 'Compare',
      url: '',
      handleClick: () => console.log('hi'),
      content: (
        <TitleDescription
          title="compare content"
          description="Choose up to four phones to compare"
        />
      ),
    },
  ];
  return <Banner height="max-content" tabsItems={tabsItems} />;
};

interface BannerPagesProps {
  [key: string]: { bannerComponent: ReactNode };
}
export const BannerPages: BannerPagesProps = {
  '/': { bannerComponent: <HomeBanner /> },
  '/smartphones': { bannerComponent: <SmartPhonesBanner /> },
};
