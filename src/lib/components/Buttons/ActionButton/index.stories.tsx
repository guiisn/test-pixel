import { Meta, StoryObj } from '@storybook/react';
import { CircleX, User } from 'tabler-icons-react';
import ActionButton from '.';

export default {
  title: 'Components/Buttons/ActionButton',
  component: ActionButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['thin', 'thick', 'small'],
      control: { type: 'inline-radio' },
    },
  },
  decorators: [
    (Story) => <div>{Story()}</div>,
  ],
} as Meta<typeof ActionButton>;

export const ThinButton: StoryObj<typeof ActionButton> = {
  args: {
    variant: 'thin',
    icon: <CircleX />,
    label: 'Cancel contract',
  },
};

export const ThickButton: StoryObj<typeof ActionButton> = {
  args: {
    variant: 'thick',
    icon: <CircleX />,
    label: 'Cancel contract',
  },
};

export const SmallButton: StoryObj<typeof ActionButton> = {
  args: {
    variant: 'small',
    icon: <User />,
    label: 'Client',
  },
};
