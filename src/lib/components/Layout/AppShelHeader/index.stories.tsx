import {
  Box,
} from '@mantine/core';
import { Meta, StoryObj } from '@storybook/react';
import { ChevronLeft } from 'tabler-icons-react';
import AppShellHeader, { AppShellHeaderProps } from '.';
import { mockNotifications, pendingFilter, recentFilter } from '../../Overlays/Notifications/utils';

export default {
  title: 'Components/Layout/AppShellHeader',
  component: AppShellHeader,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box h="50rem">
        {Story()}
      </Box>
    ),
  ],
} as Meta<AppShellHeaderProps>;

export const Component: StoryObj<AppShellHeaderProps> = {
  args: {
    headerMarginLeft: {
      md: 0, lg: 0, xl: 0, sm: 0, xs: 0,
    },
    returnButtonProps: {
      leftIcon: <ChevronLeft />,
      children: 'Back',
    },
    notificationButtonProps: {
      notifications: mockNotifications,
      unreadNotificationsCount: 0,
      pendingFilter,
      recentFilter,
      onChangeFilter: () => console.log('a'),
      onDetailsClick: () => console.log('a'),
    },
    breadcrumbsProps: {
      items: [
        {
          href: '/',
          title: 'Header',
        },
      ],
    },
    currentCompanyCardProps: {
      activeCompany: 'Active Company',
    },
  },
};
