import Card from '../../components/Card';
import CheckboxesList from '../../components/CheckboxesList';
import SliderFilter from '../../components/Sliders/SliderFilter';
import {
  fingerPrints,
  gamingNotifications,
  ramTypes,
  sdCards,
  sensorTypes,
  storageTypes,
} from './data';

const HardwareFilters = () => {
  const cardRowsData = [
    {
      title: 'Performance',
      rows: [
        {
          title: 'AuTuTu',
          content: (
            <SliderFilter
              min={5000}
              max={2250000}
              defaultRange={[5000, 2250000]}
              step={1000}
              paramName="aututu"
            />
          ),
        },
        {
          title: 'RAM',
          content: (
            <SliderFilter
              min={1}
              max={24}
              defaultRange={[1, 24]}
              step={1}
              symbol="GB"
              paramName="ram"
            />
          ),
        },
        {
          title: 'RAM Type',
          content: <CheckboxesList items={ramTypes} />,
        },
        // {
        //   title: 'Processor',
        //   content: '',
        // },
      ],
    },
    {
      title: 'Storage',
      rows: [
        {
          title: 'Capacity',
          content: (
            <SliderFilter
              min={1}
              max={11}
              range={false}
              defaultValue={1}
              valueMap={{
                1: '1GB',
                2: '2GB',
                3: '4GB',
                4: '8GB',
                5: '16GB',
                6: '32GB',
                7: '64GB',
                8: '128GB',
                9: '256GB',
                10: '512GB',
                11: '1TB',
              }}
              step={1}
              paramName="capacity"
            />
          ),
        },
        {
          title: 'Storage type',
          content: <CheckboxesList items={storageTypes} />,
        },
        {
          title: 'SD Card',
          content: <CheckboxesList items={sdCards} />,
        },
      ],
    },
    {
      title: 'Security',
      rows: [
        {
          title: 'Fingerprint',
          content: <CheckboxesList items={fingerPrints} />,
        },
      ],
    },
    {
      title: 'Sensors',
      rows: [
        {
          title: 'Sensor Types',
          content: <CheckboxesList items={sensorTypes} />,
        },
      ],
    },
    {
      title: 'Others',
      rows: [
        {
          title: 'Gaming buttons, Notifications LED',
          content: <CheckboxesList items={gamingNotifications} />,
        },
      ],
    },
  ];

  return (
    <div className="hardware-filters">
      <Card label="HARDWARE" cardRowsData={cardRowsData} />
    </div>
  );
};

export default HardwareFilters;
