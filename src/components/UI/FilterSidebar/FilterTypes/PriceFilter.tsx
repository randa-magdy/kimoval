'use client';
import { useSearchParams } from 'next/navigation';
import { useMemo, useState } from 'react';
import { StylesConfig } from 'react-select';
import SelectFilter from '../components/SelectFilter';
import SliderLabel from '../components/Sliders/SliderLabel';

interface Currencies {
  id: number | string;
  key: string;
  label: string;
  value: string;
  symbol: string;
}
const currencies: Currencies[] = [
  {
    id: '1',
    key: 'currence',
    label: 'USD . US$',
    value: 'USD',
    symbol: '$',
  },
  {
    id: '2',
    key: 'currence',
    label: 'SAR . ريال',
    value: 'SAR',
    symbol: 'SAR',
  },
  {
    id: '3',
    key: 'currence',
    label: 'EGY . جنيه',
    value: 'EGY',
    symbol: 'EGY',
  },
];
const defaultPriceRange = [50, 2000];

const customStyles: StylesConfig<any, any> = {
  control: (baseStyles) => ({
    ...baseStyles,
    borderRadius: '0 0 0.5rem 0.5rem',
  }),
};
const PriceFilter = () => {
  // const router = useRouter();
  const searchParams = useSearchParams();
  const price = searchParams.get('price');
  const queryParams: Record<string, string | string[]> = {};
  for (const [key, value] of searchParams.entries()) {
    queryParams[key] = value;
  }
  // const pathname = usePathname();
  const selectedValues = useMemo(
    () => (price ? (price as string).split(',') : defaultPriceRange),
    [price]
  );
  const [state, setState] = useState<number[] | string[]>(selectedValues);
  const [currency, setCurrency] = useState<Currencies>(currencies[0]);

  // useEffect(() => {
  //   setState(selectedValues);
  // }, [selectedValues]);

  // function handleChangeSlider(value: number[]) {
  //   //@ts-ignore
  //   router.push({
  //     pathname,
  //     query: {
  //       ...queryParams,
  //       price: value.join(','),
  //     },
  //   });
  // }

  const handleChangeCurrency = (values: Currencies) => {
    console.log('values', values);

    setCurrency(values);
  };

  return (
    <div className="price-filter ">
      <div
        className="px-5 py-2 bg-gray-white"
        style={{
          borderRadius: '0.5rem 0.5rem 0 0',
          boxShadow: '-1px 2px 6px 1px hsla(300,1%,54%,.2)',
          margin: '5px 0',
        }}
      >
        <SliderLabel
          label="PRICE"
          min={50}
          max={2000}
          //@ts-ignore
          value={state}
          //@ts-ignore
          onChange={(value: number[] | string[]) => setState(value)}
          symbol={currency.symbol}
          // onAfterChange={handleChangeSlider}
          // onChangeComplete={handleChangeSlider}
        />
      </div>
      <SelectFilter
        // @ts-ignore
        options={currencies}
        styles={customStyles}
        defaultValue={currency}
        // @ts-ignore
        onChange={handleChangeCurrency}
      />
    </div>
  );
};

export default PriceFilter;
