import {
  Box,
} from '@mantine/core';
import { Meta, StoryObj } from '@storybook/react';
import CircleCheck from '.';

export default {
  title: 'Components/Feedbacks/CircleCheck',
  component: CircleCheck,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box h="50rem">
        {Story()}
      </Box>
    ),
  ],
} as Meta<typeof CircleCheck>;

export const Component: StoryObj<typeof CircleCheck> = {

};
