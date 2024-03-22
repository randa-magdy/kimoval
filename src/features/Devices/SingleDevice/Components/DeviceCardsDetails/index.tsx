import Space from '@/components/UI/Space';
import CardDetails from './CardDetails';
import InfoCard from './InfoCard';
import {
  BatteryData,
  CameraData,
  ConnectivityData,
  DesignMaterialsData,
  PerformanceHardwareData,
  SoftwareData,
  TechnicalSheetData,
} from './data';

const DeviceCardsDetails = () => {
  const cardsDetailsData = [
    { title: 'Technical sheet of Xiaomi 14', data: TechnicalSheetData },
    { title: 'Design & Materials of Xiaomi 14', data: DesignMaterialsData },
    {
      title: 'Performance & Hardware of Xiaomi 14',
      data: PerformanceHardwareData,
    },
    {
      title: 'Camera of Xiaomi 14',
      data: CameraData,
    },
    {
      title: 'Connectivity of Xiaomi 14',
      data: ConnectivityData,
    },
    {
      title: 'Battery of Xiaomi 14',
      data: BatteryData,
    },
    {
      title: 'Software of Xiaomi 14',
      data: SoftwareData,
    },
  ];
  const infoCadList = cardsDetailsData.map((card) => (
    <InfoCard key={card.title} title={card.title}>
      <CardDetails cardData={card.data} />
    </InfoCard>
  ));
  return (
    <div className="device-cards-details">
      <Space direction="vertical">{infoCadList}</Space>
    </div>
  );
};

export default DeviceCardsDetails;
