import { FC } from 'react';
import SliderFilter, { SliderFilterProps } from './SliderFilter';

interface MultiSlidersFilterProps {
  sliders: SliderFilterProps[];
}
const MultiSlidersFilter: FC<MultiSlidersFilterProps> = ({ sliders }) => {
  const slidersList = sliders.map((slider) => (
    <SliderFilter
      key={slider.label}
      label={slider.label}
      labelAlign="center"
      min={slider.min}
      max={slider.max}
      defaultRange={slider.defaultRange}
      paramName={slider.paramName}
      step={slider.step}
      symbol={slider.symbol}
    />
  ));
  return <div className="sliders-filter-list">{slidersList}</div>;
};

export default MultiSlidersFilter;
