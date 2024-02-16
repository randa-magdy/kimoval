'use client';
import { StylesConfig } from 'react-select';
import Select from './Select';

const SearchInput = ({ ...props }) => {
  const customStyles: StylesConfig<any, any> = {
    control: (provided) => ({
      ...provided,
      borderTopLeftRadius: '1.5rem',
      borderBottomLeftRadius: '1.5rem',
      minHeight: 47,
      backgroundColor: '#ffffffe3',
    }),
  };

  return (
    <Select
      name="search"
      //   options={types}
      //   isLoading={loading}
      //   getOptionLabel={(option: any) => option.name}
      //   getOptionValue={(option: any) => option.slug}
      placeholder=" + Write to add"
      //   onChange={onTypeFilter}
      isMulti
      styles={customStyles}
      {...props}
    />
  );
};

export default SearchInput;
