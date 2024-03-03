import { FC } from 'react';
import Label from './Label';
import RowExpandFilter, { RowExpandFilterProps } from './RowExpandFilter';

interface CardProps {
  label: string;
  cardRowsData: {
    title?: string;
    rows: RowExpandFilterProps[];
  }[];
}
const Card: FC<CardProps> = ({ label, cardRowsData }) => {
  const cardRowsList = cardRowsData.map((item) => (
    <div key={item.title}>
      {item.title && (
        <Label
          label={item.title}
          size="medium"
          style={{ boxShadow: 'inset 0 -7px #ffffa0' }}
          className="w-max"
        />
      )}
      {item.rows.map((row) => (
        <RowExpandFilter
          key={row.title}
          title={row.title}
          content={row.content}
          rows={row.rows}
        />
      ))}
    </div>
  ));
  return (
    <div
      className="bg-white p-5 rounded-lg"
      style={{ boxShadow: '-1px 2px 6px 1px hsla(300,1%,54%,.2)' }}
    >
      <Label label={label} size="medium" />
      {cardRowsList}
    </div>
  );
};

export default Card;
