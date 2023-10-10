import {
  Box,
} from '@mantine/core';
import { Meta, StoryObj } from '@storybook/react';
import { ReportMoney } from 'tabler-icons-react';
import NavLink from '.';

export default {
  title: 'Components/Layout/NavLink',
  component: NavLink,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box>
        {Story()}
      </Box>
    ),
  ],
} as Meta<typeof NavLink>;

export const Component: StoryObj<typeof NavLink> = {
  args: {
    active: true,
    childrenOffset: 0,
    label: 'NavLink',
    icon: <ReportMoney />,
    children: (<NavLink variant="son" label="NavLink option" />),
  },
};
