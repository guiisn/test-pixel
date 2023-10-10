/* eslint-disable import/prefer-default-export */
import { Logout, Settings } from 'tabler-icons-react';
import { NavLinkOptionsProps } from '../types';

export const appShellFooter = [
  {
    icon: Settings,
    label: 'Settings',
    link: '/settings',
  },
  {
    icon: Logout,
    label: 'Logout',
    link: 0,
    onClick: () => console.log('logout')
    ,
  },
] as NavLinkOptionsProps[];
