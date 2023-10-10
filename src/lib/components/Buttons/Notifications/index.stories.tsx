import { Meta, StoryObj } from '@storybook/react';
import NotificationButton, { NotificationButtonProps } from '.';

export default {
  title: 'Components/Buttons/NotificationsButton',
  component: NotificationButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['subtle', 'filled', 'outline', 'light', 'default', 'transparent', 'gradient'],
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
} as Meta<NotificationButtonProps>;

export const Component: StoryObj<NotificationButtonProps> = {
  args: {
    id: '2',
    isVisualized: false,
    title: 'Notification 01',
    message: 'Test',
    prize: '3',
    reason: 'CANCELLATION',
  },
};
