import { Search } from '@/components/Icons/Search';
import { ClickableIcon } from '@/components/UI/ClickableIcon';
import cn from 'classnames';
import { FC } from 'react';

interface SearchButtonProps {
  className: string;
}
const SearchButton: FC<SearchButtonProps> = ({ className }) => {
  return (
    <div
      className={cn(
        'header-search rounded-2xl bg-gradient-white-light-100 hover:bg-gradient-white-light-200 w-full my-2',
        className
      )}
    >
      <ClickableIcon
        icon={Search}
        title="Search..."
        fontSize={25}
        visibility="always"
        size="small"
      />
    </div>
  );
};

export default SearchButton;
