import Card from '../../components/Card';
import CheckboxesList from '../../components/CheckboxesList';
import MultiSlidersFilter from '../../components/Sliders/MultiSlidersFilter';
import SliderFilter from '../../components/Sliders/SliderFilter';
import {
  aspectsRatio,
  audios,
  curvedDisplayes,
  densities,
  foldables,
  hdrs,
  notchFrames,
  rates,
  resolutions,
  screenTypes,
  weightSliders,
} from './data';

const DesignFilters = () => {
  const cardRowsData = [
    {
      title: 'Screen',
      rows: [
        {
          title: 'Inches',
          content: (
            <SliderFilter
              min={6}
              max={9}
              defaultRange={[6, 19]}
              step={0.1}
              paramName="inches"
            />
          ),
        },
        {
          title: 'Resolution',
          content: <CheckboxesList items={resolutions} />,
        },
        {
          title: 'Screen Type',
          content: <CheckboxesList items={screenTypes} />,
        },
        { title: 'HDR', content: <CheckboxesList items={hdrs} /> },
        { title: 'Refresh Rate', content: <CheckboxesList items={rates} /> },
        {
          title: 'Aspect Ratio',
          content: <CheckboxesList items={aspectsRatio} />,
        },
        { title: 'Density', content: <CheckboxesList items={densities} /> },
        {
          title: 'Curved Display',
          content: <CheckboxesList items={curvedDisplayes} />,
        },
      ],
    },
    {
      title: 'Structure',
      rows: [
        {
          title: 'Weight',
          content: (
            <SliderFilter
              min={40}
              max={700}
              defaultRange={[40, 700]}
              symbol="g"
              step={10}
              paramName="weight"
            />
          ),
        },
        {
          title: 'Dimensions',
          content: <MultiSlidersFilter sliders={weightSliders} />,
        },
        {
          title: 'Notch and frames',
          content: <CheckboxesList items={notchFrames} />,
        },
        {
          title: 'Foldable',
          content: <CheckboxesList items={foldables} />,
        },
      ],
    },
    {
      title: 'Audio',
      rows: [
        {
          title: 'Audio',
          content: <CheckboxesList items={audios} />,
        },
      ],
    },
  ];

  return (
    <div className="design-filters">
      <Card label="DESIGN" cardRowsData={cardRowsData} />
    </div>
  );
};

export default DesignFilters;
