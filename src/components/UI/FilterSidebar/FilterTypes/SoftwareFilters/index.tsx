import Card from '../../components/Card';
import CheckboxesList from '../../components/CheckboxesList';
import SliderFilter from '../../components/Sliders/SliderFilter';
import { androidTypes } from './data';

const SoftwareFilters = () => {
  const cardRowsData = [
    {
      title: 'Operating System',
      rows: [
        {
          title: 'Android',
          rows: [
            {
              content: (
                <SliderFilter
                  min={1}
                  max={13}
                  range={false}
                  defaultValue={13}
                  valueMap={{
                    1: 'Android 4.0',
                    2: 'Android 4.1',
                    3: 'Android 4.4',
                    4: 'Android 5.0',
                    5: 'Android 6.0',
                    6: 'Android 7.0',
                    7: 'Android 8.0',
                    8: 'Android 9.0',
                    9: 'Android 10',
                    10: 'Android 11',
                    11: 'Android 12',
                    12: 'Android 13',
                    13: 'Android 14',
                  }}
                  step={1}
                  paramName="android"
                />
              ),
            },
            {
              content: <CheckboxesList items={androidTypes} />,
            },
          ],
        },
        {
          title: 'IOS',
          content: (
            <SliderFilter
              min={1}
              max={12}
              range={false}
              defaultValue={12}
              valueMap={{
                1: 'IOS 6',
                2: 'IOS 7',
                3: 'IOS 8',
                4: 'IOS 9',
                5: 'IOS 10',
                6: 'IOS 11',
                7: 'IOS 12',
                8: 'IOS 13',
                9: 'IOS 14',
                10: 'IOS 15',
                11: 'IOS 16',
                12: 'IOS 17',
              }}
              step={1}
              paramName="ios"
            />
          ),
        },
        {
          title: 'Windows Phone',
          content: (
            <SliderFilter
              min={1}
              max={6}
              range={false}
              defaultValue={6}
              valueMap={{
                1: 'Windows Phone 7.5',
                2: 'Windows Phone 7.8',
                3: 'Windows Phone 8.0',
                4: 'Windows Phone 8.1',
                5: 'Windows 10',
                6: 'Windows 11',
              }}
              step={1}
              paramName="windows-phone"
            />
          ),
        },
      ],
    },
  ];

  return (
    <div className="software-filters">
      <Card label="SOFTWARE" cardRowsData={cardRowsData} />
    </div>
  );
};

export default SoftwareFilters;
