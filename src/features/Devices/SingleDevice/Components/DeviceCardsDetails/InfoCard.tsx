import Card from '@/components/UI/Card';
import { FC, ReactNode } from 'react';

interface InfoCardProps {
  title: string;
  children?: ReactNode;
}
const InfoCard: FC<InfoCardProps> = ({ title, children }) => {
  return (
    <Card radius="rounded-lg">
      <h4 className="text-h4 font-semibold mb-3 text-dark-gray">{title}</h4>
      <div>{children}</div>
    </Card>
  );
};

export default InfoCard;
