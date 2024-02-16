'use client';
import { FireOutline } from '@/components/Icons/FireOutline';
import { HorizontalDots } from '@/components/Icons/HorizontalDots';
import { Mobile } from '@/components/Icons/Mobile';
import { Tablet } from '@/components/Icons/Tablet';
import Tabs from '@/components/UI/Tabs';
import { FC } from 'react';

interface NavbarProps {
  className?: string;
}
const navItems = [
  {
    id: '/smartphones',
    icon: Mobile,
    title: 'Cell Phones',
    url: '/smartphones',
    handleClick: () => console.log('hi'),
  },
  {
    id: '',
    icon: Tablet,
    title: 'Tablets',
    url: '',
    handleClick: () => console.log('hi'),
  },
  {
    id: '',
    icon: FireOutline,
    title: 'Deals',
    url: '',
    handleClick: () => console.log('hi'),
  },
  {
    id: '',
    icon: HorizontalDots,
    title: 'More',
    url: '',
    handleClick: () => console.log('hi'),
  },
];

const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <nav id="navbar" className="w-full h-full">
      <Tabs items={navItems} className={className} />
    </nav>
  );
};

export default Navbar;
