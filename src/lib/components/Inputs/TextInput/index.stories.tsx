import { Meta, StoryObj } from '@storybook/react';

import TextInput from '.';

export default {
  title: 'Components/Inputs/TextInput',
  component: TextInput,
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
} as Meta<typeof TextInput>;

export const Component: StoryObj<typeof TextInput> = {
  args: {
    label: 'Label',
  },
};
