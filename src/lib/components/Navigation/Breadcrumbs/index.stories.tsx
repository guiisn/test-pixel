import {
  Box,
} from '@mantine/core';
import { Meta, StoryObj } from '@storybook/react';
import Breadcrumbs from '.';

export default {
  title: 'Components/Navigation/Breadcrumbs ',
  component: Breadcrumbs,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box>
        {Story()}
      </Box>
    ),
  ],
} as Meta<typeof Breadcrumbs>;

export const Component: StoryObj<typeof Breadcrumbs> = {
  args: {
    items: [
      { title: 'Page 01', href: '#' },
      { title: 'Page 02', href: '#' },
      { title: 'Current Page', href: '#' },
    ],
  },
};
