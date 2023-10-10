import { Meta, StoryObj } from '@storybook/react';

import SearchContract, { HeaderInputProps } from '.';

export default {
  title: 'Components/Inputs/HeaderInput',
  component: SearchContract,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '100%' }}>
        {Story()}
      </div>
    ),
  ],
} as Meta<HeaderInputProps>;

export const Component: StoryObj<HeaderInputProps> = {
  args: {
    placeholder: 'Busque o contrato',
  },
};
