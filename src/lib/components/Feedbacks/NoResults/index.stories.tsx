import { Meta, StoryObj } from '@storybook/react';
import NoResults from '.';

export default {
  title: 'Components/Feedbacks/NoResults',
  component: NoResults,
  tags: ['autodocs'],
  decorators: [
    (Story) => <div style={{ height: '20rem' }}>{Story()}</div>,
  ],
} as Meta<typeof NoResults>;

export const Component: StoryObj<typeof NoResults> = {};
