import { Meta, StoryObj } from '@storybook/react';

import { Text } from '@mantine/core';
import Accordion from '.';

export default {
  title: 'Components/Data Display/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  decorators: [
    (Story) => <div style={{ height: '20rem' }}>{Story()}</div>,
  ],
} as Meta<typeof Accordion>;

export const Component: StoryObj<typeof Accordion> = {
  args: {
    accordions: [
      {
        value: '1',
        control: <Text>Accordion 01</Text>,
        panel: <Text>Accordion 01 opened</Text>,
      },
      {
        value: '2',
        control: <Text>Accordion 02</Text>,
        panel: <Text>Accordion 02 opened</Text>,
      },
      {
        value: '3',
        control: <Text>Accordion 03</Text>,
        panel: <Text>Accordion 03 opened</Text>,
      },
    ],
  },
};
