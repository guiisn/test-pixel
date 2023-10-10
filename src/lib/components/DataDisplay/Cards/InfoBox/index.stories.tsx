import { Meta, StoryObj } from '@storybook/react';

import { PigMoney } from 'tabler-icons-react';
import InfoBox from '.';
import { laraGray } from '../../../../../styles/colors';

export default {
  title: 'Components/Data Display/InfoBox',
  component: InfoBox,
  tags: ['autodocs'],
  argTypes: {
    total: {
      type: 'number',
    },
  },
  decorators: [
    (Story) => <div style={{ height: '20rem' }}>{Story()}</div>,
  ],
} as Meta<typeof InfoBox>;

export const Component: StoryObj<typeof InfoBox> = {
  args: {
    label: 'Total proposals',
    value: 40,
    icon: <PigMoney color={laraGray[4]} />,
  },
};
