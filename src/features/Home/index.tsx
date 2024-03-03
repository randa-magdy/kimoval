import CommonComparisons from './Sections/CommonComparisons';
import DealsSection from './Sections/DealsSection';
import FeaturedBrands from './Sections/FeaturedBrands';

const Home = () => {
  return (
    <div className="container mx-auto">
      <DealsSection />
      <CommonComparisons />
      <FeaturedBrands />
    </div>
  );
};

export default Home;
