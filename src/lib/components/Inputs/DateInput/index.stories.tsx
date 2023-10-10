import {
  Box,
} from '@mantine/core';
import { Meta, StoryObj } from '@storybook/react';
import DateInput from '.';

export default {
  title: 'Components/Inputs/DateInput',
  component: DateInput,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box h="50rem">
        {Story()}
      </Box>
    ),
  ],
} as Meta<typeof DateInput>;

export const Component: StoryObj<typeof DateInput> = {
  args: {
    label: 'Date',
  },
};
