import {
  Box,
} from '@mantine/core';
import { Meta, StoryObj } from '@storybook/react';
import DashboardHeader from '.';
import { Button, NoResults } from '../../..';

export default {
  title: 'Components/Layout/DashboardHeader',
  component: DashboardHeader,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box>
        {Story()}
      </Box>
    ),
  ],
} as Meta<typeof DashboardHeader>;

export const Component: StoryObj<typeof DashboardHeader> = {
  args: {
    showFilterButton: true,
    tabsProps: {
      defaultValue: '01',
      tabs: [
        {
          text: '01',
          value: '01',
        },
        {
          text: '02',
          value: '02',
        },
      ],
      panels: [
        {
          value: '01',
          component: <NoResults />,
        },
        {
          value: '02',
          component: (
            <Box bg="red" w="100%">
              <Button>
                teste
              </Button>
            </Box>
          ),
        },
      ],
    },
  },
};
