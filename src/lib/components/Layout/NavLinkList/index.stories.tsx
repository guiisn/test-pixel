import {
  Box,
} from '@mantine/core';
import { Meta, StoryObj } from '@storybook/react';
import NavLinkList from '.';
import { mockOptions } from '../AppShellNavbar/mock/permissions';

export default {
  title: 'Components/Layout/NavLinkList',
  component: NavLinkList,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box>
        {Story()}
      </Box>
    ),
  ],
} as Meta<typeof NavLinkList>;

export const Component: StoryObj<typeof NavLinkList> = {
  args: {
    options: mockOptions(),
  },
};
