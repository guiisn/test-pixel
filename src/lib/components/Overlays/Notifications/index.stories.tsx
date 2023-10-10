import {
  Box,
} from '@mantine/core';
import { Meta, StoryObj } from '@storybook/react';
import NotificationsMenu from '.';
import { mockNotifications, pendingFilter, recentFilter } from './utils';

export default {
  title: 'Components/Overlays/NotificationsMenu',
  component: NotificationsMenu,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box h="45rem" sx={{ position: 'relative' }}>
        {Story()}
      </Box>
    ),
  ],
} as Meta<typeof NotificationsMenu>;

export const NoResults: StoryObj<typeof NotificationsMenu> = {};

export const Loading: StoryObj<typeof NotificationsMenu> = {
  args: {
    isLoading: true,
    notifications: [],
  },
};

export const WithData: StoryObj<typeof NotificationsMenu> = {
  args: {
    isLoading: false,
    pendingFilter,
    recentFilter,
    unreadNotificationsCount: 0,
    notifications: mockNotifications,
  },
};

export const WithCount: StoryObj<typeof NotificationsMenu> = {
  args: {
    isLoading: false,
    pendingFilter,
    recentFilter,
    unreadNotificationsCount: 4,
    notifications: mockNotifications,
  },
};
