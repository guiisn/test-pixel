import { Meta, StoryObj } from '@storybook/react';
import Loader from '.';

export default {
  title: 'Components/Feedbacks/Loader',
  component: Loader,
  tags: ['autodocs'],
  argTypes: {
    value: {
      type: 'number',
    },
    variant: {
      options: ['bars', 'dots', 'oval', 'percentage'],
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
} as Meta<typeof Loader>;

export const Dots: StoryObj<typeof Loader> = {
  args: {
    variant: 'dots',
  },
};

export const Bars: StoryObj<typeof Loader> = {
  args: {
    variant: 'bars',
  },
};

export const Oval: StoryObj<typeof Loader> = {
  args: {
    variant: 'oval',
  },
};

export const Percentage: StoryObj<typeof Loader> = {
  args: {
    variant: 'percentage',
    value: 45,
  },
};
