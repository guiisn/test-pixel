import { Meta, StoryObj } from '@storybook/react';

import Textarea from '.';

export default {
  title: 'Components/Inputs/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    label: {
      type: 'string',
    },
    withAsterisk: {
      type: 'boolean',
    },
    disabled: {
      type: 'boolean',
    },
    error: {
      type: 'string',
    },
    placeholder: {
      type: 'string',
    },
    variant: {
      options: ['default', 'filled', 'unstyled'],
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
} as Meta<typeof Textarea>;

export const Component: StoryObj<typeof Textarea> = {
  args: {
    label: 'Label',
  },
};
