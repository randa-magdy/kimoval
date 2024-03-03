'use client';
import { FC } from 'react';
import { Props as SelectProps, StylesConfig } from 'react-select';
import Select from '../../Form/Select';
import Label from './Label';

const customStyles: StylesConfig<any, any> = {
  control: (baseStyles) => ({
    ...baseStyles,
    height: 30,
    borderRadius: '0.5rem',
  }),
  menu: (baseStyles) => ({
    ...baseStyles,
    zIndex: 9,
  }),
};

interface SelectFilterProps extends SelectProps {
  label?: string;
}
const SelectFilter: FC<SelectFilterProps> = ({ label, ...restProps }) => {
  return (
    <div>
      {label && <Label label={label} size="less-medium" />}
      <Select styles={customStyles} {...restProps} />
    </div>
  );
};

export default SelectFilter;
