import {
  Box,
} from '@mantine/core';
import { Meta, StoryObj } from '@storybook/react';
import AppShellNavbar from '.';
import NavLinkList from '../NavLinkList';
import { appShellFooter } from './mock/appShellFooter';
import { mockOptions } from './mock/permissions';

export default {
  title: 'Components/Layout/AppShellNavbar',
  component: AppShellNavbar,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box>
        {Story()}
      </Box>
    ),
  ],
} as Meta<typeof AppShellNavbar>;

const navbarWidths = {
  md: 187.5, lg: 225, xl: 262.5, sm: 150, xs: 93.75,
};

export const Component: StoryObj<typeof AppShellNavbar> = {
  args: {
    navbarWidths,
    options: <NavLinkList options={mockOptions()} />,
    footer: <NavLinkList options={appShellFooter} variant="footer" />,
  },
};
