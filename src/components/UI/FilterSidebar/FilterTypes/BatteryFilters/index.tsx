import Card from '../../components/Card';
import CheckboxesList from '../../components/CheckboxesList';
import SelectFilter from '../../components/SelectFilter';
import SliderFilter from '../../components/Sliders/SliderFilter';
import { others, simData } from './data';

const BatteryFilters = () => {
  const cardRowsData = [
    {
      rows: [
        {
          title: 'Capacity',
          content: (
            <SliderFilter
              min={600}
              max={23800}
              defaultRange={[600, 23800]}
              symbol="mAh"
              step={100}
              paramName="capacity"
            />
          ),
        },
        {
          title: 'Composition',
          content: <SelectFilter options={simData} defaultValue={simData[0]} />,
        },
        {
          title: 'Fast Charge',
          content: (
            <SliderFilter
              min={1}
              max={9}
              range={false}
              defaultValue={9}
              valueMap={{
                1: '10 W',
                2: '15 W',
                3: '20 W',
                4: '27 W',
                5: '40 W',
                6: '50 W',
                7: '100 W',
                8: '150 W',
                9: 'All',
              }}
              step={1}
              paramName="aperture"
            />
          ),
        },
        {
          title: 'Others',
          content: <CheckboxesList items={others} />,
        },
      ],
    },
  ];

  return (
    <div className="battery-filters">
      <Card label="BATTERY" cardRowsData={cardRowsData} />
    </div>
  );
};

export default BatteryFilters;
