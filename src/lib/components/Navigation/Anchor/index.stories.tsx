import {
  AnchorProps,
  Box,
} from '@mantine/core';
import { Meta, StoryObj } from '@storybook/react';
import Anchor from '.';

export default {
  title: 'Components/Navigation/Anchor ',
  component: Anchor,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box>
        {Story()}
      </Box>
    ),
  ],
} as Meta<AnchorProps>;

export const Component: StoryObj<AnchorProps> = {
  args: {
    children: 'Anchor label',
  },
};
