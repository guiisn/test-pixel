import { Meta, StoryObj } from '@storybook/react';

import PasswordInput from '.';

export default {
  title: 'Components/Inputs/PasswordInput',
  component: PasswordInput,
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
} as Meta<typeof PasswordInput>;

export const Component: StoryObj<typeof PasswordInput> = {
  args: {
    label: 'Password',
  },
};
