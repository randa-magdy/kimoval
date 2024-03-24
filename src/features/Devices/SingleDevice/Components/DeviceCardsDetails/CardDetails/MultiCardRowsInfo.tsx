import Card from '@/components/UI/Card';
import Col from '@/components/UI/ResponsiveFlex/Col';
import Row from '@/components/UI/ResponsiveFlex/Row';
import { FC, ReactNode } from 'react';

export type Cards = {
  label?: string | ReactNode;
  detailRows: { detail: string | ReactNode }[];
}[];

const MultiCardRowsInfo: FC<{ cards: Cards }> = ({ cards }) => {
  const cardsList = cards.map((card, idx) => (
    <Col key={idx} xs="w-full" md="md:w-6/12" lg="lg:w-full" xl="xl:w-6/12">
      <Card
        radius="rounded-xl"
        color="bg-gray-white"
        className="text-dark-gray w-full"
      >
        {card.label && (
          <div className="font-semibold mb-3 text-black border border-dashed border-gray-600 p-2 rounded-xl text-center">
            {card.label}
          </div>
        )}
        {card.detailRows.map((row) => row.detail)}
      </Card>
    </Col>
  ));
  return (
    <Row justify="between" gutter={[2, 3]}>
      {cardsList}
    </Row>
  );
};

export default MultiCardRowsInfo;
