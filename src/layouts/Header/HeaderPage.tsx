'use client';
import { MenuSettings } from '@/components/Icons/MenuSettings';
import { NotificationOutline } from '@/components/Icons/NotificationOutline';
import { UserCircle } from '@/components/Icons/UserCircle';
import { ClickableIcon } from '@/components/UI/ClickableIcon';
import Logo from '@/components/UI/Logo';
import Space from '@/components/UI/Space';
import { FC } from 'react';
import Navbar from './Navbar';
import SearchButton from './SearchButton';

const icons = [
  {
    icon: NotificationOutline,
    title: 'Alerts',
    handleClick: () => console.log('hi'),
    fontSize: 25,
  },
  {
    icon: MenuSettings,
    title: 'Lists',
    handleClick: () => console.log('hi'),
    fontSize: 25,
  },
  {
    icon: UserCircle,
    title: 'Login',
    handleClick: () => console.log('hi'),
    fontSize: 25,
  },
];

const IconList = () => {
  return icons.map((item, idx) => (
    <ClickableIcon
      key={idx}
      icon={item.icon}
      title={item.title}
      handleClick={item.handleClick}
      fontSize={item.fontSize}
      size="small"
    />
  ));
};
const HeaderPage: FC = () => {
  return (
    <div
      id="header"
      className="px-4 bg-gradient-to-r from-violet-700 to-violet-600 text-white fixed top-0 w-full py-3"
    >
      <Space className="header-top border-b border-white-light">
        <div className="header-main flex items-center me-0 lg:me-80">
          <div className="header-logo me-4">
            <Logo />
          </div>
          <SearchButton className="block lg:hidden" />
        </div>
        <div className="header-user flex justify-end">
          <IconList />
        </div>
      </Space>
      <Space className="header-nav relative lg:fixed lg:top-0 ms-0 lg:ms-20 h-12">
        <Navbar className="border-b lg:border-none border-white-light h-full" />
        <SearchButton className="hidden lg:block" />
      </Space>
    </div>
  );
};

export default HeaderPage;
