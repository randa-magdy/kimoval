import Card from '../../components/Card';
import CheckboxesList from '../../components/CheckboxesList';
import SelectFilter from '../../components/SelectFilter';
import SliderFilter from '../../components/Sliders/SliderFilter';
import {
  cameraDdisplay,
  fontalFlash,
  leans,
  numCameras,
  oisData,
  rearFlashes,
} from './data';

const CameraFilters = () => {
  const cardRowsData = [
    {
      title: 'Main Camera',
      rows: [
        {
          title: 'Megapixels',
          content: (
            <SliderFilter
              min={0}
              max={200}
              defaultRange={[0, 200]}
              step={1}
              symbol="Mpx"
              paramName="main-camera-megapixels"
            />
          ),
        },
        {
          title: 'Aperture',
          content: (
            <SliderFilter
              min={1}
              max={12}
              range={false}
              defaultValue={12}
              valueMap={{
                1: 'f/1.2',
                2: 'f/1.4',
                3: 'f/1.6',
                4: 'f/1.8',
                5: 'f/2.0',
                6: 'f/2.2',
                7: 'f/2.4',
                8: 'f/2.6',
                9: 'f/2.7',
                10: 'f/3.0',
                11: 'f/3.5',
                12: 'All',
              }}
              step={1}
              paramName="aperture"
            />
          ),
        },
        {
          title: 'Number of cameras, Lens, OIS, Portrait...',
          rows: [
            { content: <CheckboxesList items={numCameras} /> },
            { content: <CheckboxesList items={leans} /> },
            { content: <CheckboxesList items={oisData} /> },
          ],
        },
        {
          title: 'Sensor Model',
          content: <SelectFilter />,
        },
        {
          title: 'Rear flash',
          content: (
            <SelectFilter options={rearFlashes} defaultValue={rearFlashes[0]} />
          ),
        },
      ],
    },
    {
      title: 'Selfie Camera',
      rows: [
        {
          title: 'Megapixels',
          content: (
            <SliderFilter
              min={1}
              max={200}
              defaultRange={[1, 200]}
              step={1}
              symbol="Mpx"
              paramName="Selfie-camera-megapixels"
            />
          ),
        },
        {
          title: 'Camera under display',
          content: <CheckboxesList items={cameraDdisplay} />,
        },
        {
          title: 'Fontal flash',
          content: <CheckboxesList items={fontalFlash} />,
        },
      ],
    },
  ];

  return (
    <div className="camera-filters">
      <Card label="CAMERA" cardRowsData={cardRowsData} />
    </div>
  );
};

export default CameraFilters;
