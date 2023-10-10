import { Meta, StoryObj } from '@storybook/react';

import Switch from '.';

export default {
  title: 'Components/Inputs/Switch',
  component: Switch,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '100%' }}>
        {Story()}
      </div>
    ),
  ],
} as Meta<typeof Switch>;

export const Component: StoryObj<typeof Switch> = {
  args: {
    label: 'I agree to sell my privacy',
    labelPosition: 'left',
  },
};
