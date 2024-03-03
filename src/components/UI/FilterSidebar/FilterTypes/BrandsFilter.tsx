import { Search } from '@/components/Icons/Search';
import { FC } from 'react';
import Input from '../../Form/Input';
import Scrollbar from '../../Scrollbar';
import CheckboxesList from '../components/CheckboxesList';

const BrandsFilter: FC = () => {
  const brands = [
    { label: 'Oppo', name: 'Oppo', value: 'Oppo' },
    { label: 'Acer', name: 'Acer', value: 'Acer' },
    { label: 'AGM', name: 'AGM', value: 'AGM' },
    { label: 'Alcatel', name: 'Alcatel', value: 'Alcatel' },
    { label: 'Allview', name: 'Allview', value: 'Allview' },
    { label: 'Apple', name: 'Apple', value: 'Apple' },
    { label: 'Blackview', name: 'Blackview', value: 'Blackview' },
    { label: 'Bluboo', name: 'Bluboo', value: 'Bluboo' },
    { label: 'Carbon', name: 'Carbon', value: 'Carbon' },
    { label: 'Nokia', name: 'Nokia', value: 'Nokia' },
  ];

  return (
    <div
      className="brands-filter"
      style={{ boxShadow: '-1px 2px 6px 1px hsla(300,1%,54%,.2)' }}
    >
      <div className="search-brand">
        <Input
          inputClassName="rounded-tl-lg rounded-tr-lg rounded-bl-none rounded-br-none"
          name="search"
          dimension="medium"
          placeholder="Search Brand ..."
          prefixEL={<Search fontSize={20} className="text-slate-400" />}
        />
      </div>
      <Scrollbar style={{ height: 200 }}>
        <div className="brands-list px-5 py-3 h-auto bg-white rounded-bl-lg rounded-br-lg">
          <CheckboxesList items={brands} />
        </div>
      </Scrollbar>
    </div>
  );
};

export default BrandsFilter;
