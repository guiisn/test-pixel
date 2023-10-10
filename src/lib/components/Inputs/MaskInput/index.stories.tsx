import { Meta, StoryObj } from '@storybook/react';

import MaskInput from '.';

export default {
  title: 'Components/Inputs/MaskInput',
  component: MaskInput,
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
} as Meta<typeof MaskInput>;

export const Component: StoryObj<typeof MaskInput> = {
  args: {
    label: 'CPF',
    maskType: 'cpf',
  },
};
