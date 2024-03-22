import Card from '@/components/UI/Card';
import ColorsBallsList from '@/components/UI/ColorsBallsList';
import cn from 'classnames';
import { FC, ReactNode } from 'react';

const ColoredBlock: FC<{ colored: boolean; label: string }> = ({
  colored,
  label,
}) => (
  <span
    className={cn(
      'px-2 py-1 me-3',
      colored ? 'text-white bg-light-primary' : 'text-white bg-dark-gray'
    )}
  >
    {label}
  </span>
);

const LabelInfo: FC<{ label: string; info?: string; children?: ReactNode }> = ({
  label,
  info,
  children,
}) => (
  <div className="mb-3 flex items-center">
    <span className="font-semibold text-medium text-dark-gray me-3">
      {label}
    </span>
    {info && <span className="text-medium">{info}</span>}
    {children}
  </div>
);
const storages = ['256GB', '512GB', '1TB'];
const colors = [
  { color: '#ccc', name: 'Silver' },
  { color: '#f2d339', name: 'Yellow' },
  { color: '#202bb5', name: 'Blue' },
  { color: '#000', name: 'Black' },
];

// interface DeviceInfoProps {
//   priceBefore: number;
//   priceAfter: number;
//   rating: number;
//   reviewsNumber: string;
// }
const DeviceInfo: FC = () => {
  const dataList = (list: string[]) =>
    list.map((item, idx) => (
      <ColoredBlock key={item} label={item} colored={idx === 0} />
    ));

  return (
    <Card radius="rounded-lg">
      <h1 className="text-h2 text-secondary border-b border-gray-300 pb-2 mb-2">
        Xiaomi 14
      </h1>
      {/* <RatingReviews rating={4.5} reviewsNumber="3.5k" /> */}
      {/* {(priceBefore || priceAfter) && ( */}
      <div className="flex">
        {/* {priceBefore && ( */}
        <span className="text-h4 pre-price line-through text-light-gray pe-5">
          {/* $ {priceBefore} */}
          $200
        </span>
        {/* )} */}
        {/* {priceAfter && ( */}
        <span className="text-h4 price font-bold text-crimson">
          {/* $ {priceAfter} */}
          $300
        </span>
        {/* )} */}
      </div>
      {/* )} */}

      <LabelInfo label="Brand" info="Apple" />

      <LabelInfo label="Sold By" info="Apple Official" />
      <div className="mb-3">
        <LabelInfo label="Storage">
          <div>{dataList(storages)}</div>
        </LabelInfo>
      </div>

      <LabelInfo label="Colors">
        <ColorsBallsList colors={colors} />
      </LabelInfo>
      <LabelInfo
        label="Size (Dimensions & Weight)"
        info="189g , 71.5 mm , 152.8 mm , 8.0 mm"
      />
      <LabelInfo label="Battery" info="4500 mAh" />
      <LabelInfo label="Operating System" info="Android 14 Upside-down cake" />
    </Card>
  );
};

export default DeviceInfo;
