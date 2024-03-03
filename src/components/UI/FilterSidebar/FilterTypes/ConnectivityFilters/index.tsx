import Card from '../../components/Card';
import CheckboxesList from '../../components/CheckboxesList';
import {
  nfcRadioInfrarFirstData,
  nfcRadioInfrarSecondData,
  positioningFirstData,
  positioningSecondData,
  simData,
  usbTypes,
  wifiData,
} from './data';

const ConnectivityFilters = () => {
  const cardRowsData = [
    {
      title: 'Phone',
      rows: [
        {
          title: 'SIM',
          content: <CheckboxesList items={simData} />,
        },
      ],
    },
    {
      title: 'Technologies',
      rows: [
        {
          title: 'Positioning',
          rows: [
            { content: <CheckboxesList items={positioningFirstData} /> },
            { content: <CheckboxesList items={positioningSecondData} /> },
          ],
        },
        {
          title: 'Wi-Fi',
          content: <CheckboxesList items={wifiData} />,
        },
        {
          title: 'USB',
          content: <CheckboxesList items={usbTypes} />,
        },
        {
          title: 'NFC, Radio, Infrar...',
          rows: [
            { content: <CheckboxesList items={nfcRadioInfrarFirstData} /> },
            { content: <CheckboxesList items={nfcRadioInfrarSecondData} /> },
          ],
        },
      ],
    },
  ];

  return (
    <div className="connectivity-filters">
      <Card label="CONNECTIVITY" cardRowsData={cardRowsData} />
    </div>
  );
};

export default ConnectivityFilters;
