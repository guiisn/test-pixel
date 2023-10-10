import { Meta, StoryObj } from '@storybook/react';

import { CheckboxProps } from '@mantine/core';
import Checkbox from '.';

export default {
  title: 'Components/Inputs/Checkbox',
  component: Checkbox,
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
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
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
} as Meta<CheckboxProps>;

export const Component: StoryObj<CheckboxProps> = {
  args: {
    label: 'Label',
  },
};
