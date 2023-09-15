import { Meta, StoryObj } from '@storybook/react';

import { ChevronLeft } from 'tabler-icons-react';
import HeaderReturnButton, { HeaderReturnButtonProps } from '.';

export default {
  title: 'Components/Buttons/HeaderReturnButton',
  component: HeaderReturnButton,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '100%' }}>
        {Story()}
      </div>
    ),
  ],
} as Meta<HeaderReturnButtonProps>;

export const Component: StoryObj<HeaderReturnButtonProps> = {
  args: {
    children: 'Back',
    leftIcon: <ChevronLeft />,
  },
};
