import Slider from '@/components/UI/Form/RangeSlider';
import { SliderProps } from 'rc-slider';
import { FC } from 'react';
import Label from '../Label';

export interface SliderLabelProps extends SliderProps {
  label?: string;
  labelAlign?: 'center' | 'auto';
  value: number[];
  itemValueMap?: string | number | null;
  symbol?: string;
}
const SliderLabel: FC<SliderLabelProps> = ({
  label,
  labelAlign,
  value,
  itemValueMap,
  symbol,
  ...restProps
}) => {
  return (
    <>
      {label && (
        <Label
          label={label}
          size="less-medium"
          className={labelAlign === 'center' ? 'text-center' : 'text-inherit'}
        />
      )}
      <Slider
        range
        allowCross={false}
        //@ts-ignore
        defaultValue={value}
        //@ts-ignore
        value={value}
        {...restProps}
      />
      <div className="flex justify-between mt-3">
        {typeof value === 'object' ? (
          <>
            {value[0] && (
              <span className="block font-bold text-small">
                {symbol ? value[0] + ' ' + symbol : value[0]}
              </span>
            )}
            {value[1] && (
              <span className="block font-bold text-small">
                {symbol ? value[1] + ' ' + symbol : value[1]}
              </span>
            )}
          </>
        ) : (
          <span className="block font-bold text-small mx-auto">
            {symbol ? itemValueMap + ' ' + symbol : itemValueMap}
          </span>
        )}
      </div>
    </>
  );
};

export default SliderLabel;
