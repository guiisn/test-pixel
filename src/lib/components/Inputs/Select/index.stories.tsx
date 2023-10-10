import { Meta, StoryObj } from '@storybook/react';

import Select from '.';

export default {
  title: 'Components/Inputs/Select',
  component: Select,
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
    data: {
      defaultValue: [],
    },
    searchable: {
      type: 'boolean',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100%', height: '40vh' }}>
        {Story()}
      </div>
    ),
  ],
} as Meta<typeof Select>;

export const Component: StoryObj<typeof Select> = {
  args: {
    label: 'Label',
    data: [
      { value: '1', label: 'Label 01' },
      { value: '2', label: 'Label 02' },
      { value: '3', label: 'Label 03' },
      { value: '4', label: 'Label 04' },
    ],
    searchable: true,
    nothingFound: 'Nobody here',
  },
};
