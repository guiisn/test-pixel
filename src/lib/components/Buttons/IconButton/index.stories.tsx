import { Meta, StoryObj } from '@storybook/react';

import { PigMoney } from 'tabler-icons-react';
import IconButton from '.';

export default {
  title: 'Components/Buttons/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['subtle', 'filled', 'outline', 'light', 'default', 'transparent', 'gradient'],
      control: { type: 'inline-radio' },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100%' }}>
        {Story()}
      </div>
    ),
  ],
} as Meta<typeof IconButton>;

export const Component: StoryObj<typeof IconButton> = {
  args: {
    tooltipTitle: 'Pig Money',
    variant: 'light',
    color: 'violet.4',
    children: <PigMoney />,
  },
};
