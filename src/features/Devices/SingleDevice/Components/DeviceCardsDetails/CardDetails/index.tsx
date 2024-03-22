import { FC, ReactNode } from 'react';
import MultiCardRowsInfo, { Cards } from './MultiCardRowsInfo';

type CardData = {
  subTitle: string;
  details?: string | ReactNode;
  detailRows?: { detail: string | ReactNode }[];
  cardsDetailRows?: Cards;
}[];

const CardDetails: FC<{ cardData: CardData }> = ({ cardData }) => {
  const cardsList = cardData.map((item, idx) => (
    <div key={idx}>
      <h5 className="text-normal font-semibold rounded-lg text-dark-gray bg-dark-gray-white text-center py-1">
        {item.subTitle}
      </h5>
      {(item.details || item.detailRows) && (
        <div className="p-3 text-dark-gray text-medium">
          {item.detailRows?.map((row, idx) => (
            <div key={idx}> {row.detail}</div>
          )) || item.details}
        </div>
      )}
      <div>
        {item.cardsDetailRows && (
          <MultiCardRowsInfo cards={item.cardsDetailRows} />
        )}
      </div>
    </div>
  ));
  return <div className="card-details">{cardsList}</div>;
};

export default CardDetails;
