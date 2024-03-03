import Checkbox from '@/components/UI/Form/Checkbox';
import { FC } from 'react';

const CheckboxesList: FC<{ items: Record<string, any>[] }> = ({ items }) => {
  const itemsList = items.map((item) => (
    <div className="py-1" key={item.name}>
      <Checkbox
        label={item.label}
        name={item.name}
        value={item.value}
        icon={item.icon}
        note={item.note}
        theme="secondary"
      />
    </div>
  ));
  return <div className="items-list-checkbox">{itemsList}</div>;
};

export default CheckboxesList;
