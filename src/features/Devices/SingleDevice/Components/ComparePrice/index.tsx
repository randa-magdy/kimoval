import Amazon from '../../../../../../public/images/sellers-companies/Amazon.png';
import Flipkart from '../../../../../../public/images/sellers-companies/Flipkart.png';
import Meesho from '../../../../../../public/images/sellers-companies/Meesho.png';
import Myntra from '../../../../../../public/images/sellers-companies/Myntra.png';
import Ebay from '../../../../../../public/images/sellers-companies/ebay.png';
import PriceCompanyBar from './PriceCompanyBar';

const companiesData = [
  {
    img: Amazon,
    name: 'Amazon',
    price: '350 $',
    url: '#',
  },
  {
    img: Flipkart,
    name: 'Flipkart',
    price: '380 $',
    url: '#',
  },
  {
    img: Meesho,
    name: 'Meesho',
    price: '375 $',
    url: '#',
  },
  {
    img: Myntra,
    name: 'Myntra',
    price: '320 $',
    url: '#',
  },
  { img: Ebay, name: 'Ebay', price: '345 $', url: '#' },
];
const ComparePrice = () => {
  const listPriceCompaniesBars = companiesData.map((item) => (
    <PriceCompanyBar
      key={item.name}
      img={item.img}
      name={item.name}
      price={item.price}
      url={item.url}
    />
  ));
  return (
    <div className="compare-companies-price w-full">
      {listPriceCompaniesBars}
    </div>
  );
};

export default ComparePrice;
