import { Compare } from '@/components/Icons/Compare';
import EmptyHand from '@/components/Icons/EmptyHand';
import { EmptyHeart } from '@/components/Icons/EmptyHeart';
import { EmptyStar } from '@/components/Icons/EmptyStar';
import { Share } from '@/components/Icons/Share';
import cn from 'classnames';

const icons = [
  {
    icon: EmptyHeart,
    color: 'text-crimson',
    title: 'Want it',
    users: '2k',
    handleClick: '',
  },
  {
    icon: EmptyHand,
    color: 'text-dark-gray',
    title: 'Have it',
    users: '200',
    handleClick: '',
  },
  {
    icon: EmptyStar,
    color: 'text-amber-500',
    title: 'Add review',
    users: '332',
    handleClick: '',
  },
  {
    icon: Compare,
    color: 'text-primary',
    title: 'To compare',
    handleClick: '',
  },
  // {
  //   icon: EmptyBell,
  //   color: 'text-purple-700',
  //   title: 'Price Alert',
  //   handleClick: '',
  // },
  {
    icon: Share,
    color: 'text-dark-gray',
    title: 'Share',
    handleClick: '',
  },
];

const UserActions = () => {
  const iconsList = icons.map((item) => {
    const Icon = item.icon;
    return (
      <div
        key={item.title}
        className="flex flex-col justify-center items-center cursor-pointer"
      >
        <div className="rounded-full ">
          <Icon fontSize={23} className={cn(item.color)} />
        </div>
        <span className={cn('mt-2 text-less-medium', item.color)}>
          {item.title}
        </span>
        {item?.users && (
          <span className="text-light-gray text-small">{item.users} users</span>
        )}
      </div>
    );
  });
  return (
    <div
      className="flex justify-between items-start rounded-xl px-5 py-1 my-2"
      style={{
        backgroundImage:
          'linear-gradient(269deg,#fff8f1,#f3f5fa 42%,#f3f5f9 53%,#fff5fa 97%)',
      }}
    >
      {iconsList}
    </div>
  );
};

export default UserActions;
