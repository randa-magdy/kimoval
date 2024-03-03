'use client';
import { useSearchParams } from 'next/navigation';
import { FC, useEffect, useMemo, useState } from 'react';
import SliderLabel, { SliderLabelProps } from './SliderLabel';

export interface SliderFilterProps extends Omit<SliderLabelProps, 'value'> {
  defaultRange?: number[];
  defaultValue?: number;
  min: number;
  max: number;
  paramName: string;
  valueMap?: Record<number, number | string>;
}
const SliderFilter: FC<SliderFilterProps> = ({
  defaultRange,
  defaultValue,
  valueMap,
  paramName,
  symbol,
  ...restProps
}) => {
  const searchParams = useSearchParams();
  const itemParam = searchParams.get(paramName);

  const selectedValues = useMemo(
    () =>
      itemParam
        ? (itemParam as string).split(',')
        : defaultRange
          ? defaultRange
          : defaultValue,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [itemParam]
  );

  const [itemssVal, setItems] = useState<
    number[] | string[] | number | undefined
  >(selectedValues);

  const [itemValueMap, setItemValueMap] = useState<number | string | undefined>(
    undefined
  );

  useEffect(() => {
    if (valueMap && defaultValue) {
      setItemValueMap(valueMap[defaultValue]);
    }
  }, [defaultValue, valueMap]);

  const handleChange = (value: number[] | string[] | number) => {
    setItems(value);
    if (valueMap && typeof value === 'number') {
      setItemValueMap(valueMap[value]);
    }
  };

  return (
    <SliderLabel
      //@ts-ignore
      value={itemssVal}
      symbol={symbol}
      //@ts-ignore
      onChange={handleChange}
      itemValueMap={itemValueMap}
      {...restProps}
    />
  );
};

export default SliderFilter;
