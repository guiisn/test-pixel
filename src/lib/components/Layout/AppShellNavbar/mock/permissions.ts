/* eslint-disable import/prefer-default-export */
import { BuildingStore } from 'tabler-icons-react';
import { NavLinkOptionsProps } from '../types';

export const mockOptions = (): NavLinkOptionsProps[] => {
  const franchisors = {
    label: 'Franchisors',
    link: '/company/franchisors',
  } as NavLinkOptionsProps;
  const franchisees = {
    label: 'Franchisees',
    link: '/company/franchisees',
  } as NavLinkOptionsProps;
  const units = {
    label: 'Units',
    link: '/company/units',
  } as NavLinkOptionsProps;

  const links = [franchisors, franchisees, units] as NavLinkOptionsProps[];

  return [
    {
      icon: BuildingStore,
      label: 'Companies',
      link: '/company/units',
      links,
    },
  ] as NavLinkOptionsProps[];
};
