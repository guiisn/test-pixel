import {
  Box,
} from '@mantine/core';
import { Meta, StoryObj } from '@storybook/react';
import ProfileMenu, { ProfileMenuProps } from '.';

export default {
  title: 'Components/Overlays/ProfileMenu',
  component: ProfileMenu,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box h="50rem">
        {Story()}
      </Box>
    ),
  ],
} as Meta<ProfileMenuProps>;

export const Component: StoryObj<ProfileMenuProps> = {
  args: {
    userName: 'Usuário da Silva',
    userEmail: 'user@silva.com',
    userRole: 'Dev',
    userLogin: 'devSilva',
    franchisee: 'Batukam',
    franchisor: 'Batukam',
    unit: 'Batukam',
  },
};
