import { Meta, StoryObj } from '@storybook/react';

import Carousel from '.';

export default {
  title: 'Components/Data Display/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  argTypes: {
    total: {
      type: 'number',
    },
  },
  decorators: [
    (Story) => <div style={{ height: '20rem' }}>{Story()}</div>,
  ],
} as Meta<typeof Carousel>;

export const Component: StoryObj<typeof Carousel> = {
  args: {
    data: ['https://photos.fife.usercontent.google.com/pw/AIL4fc_37UlLWKriJIdBC7rHFaqccpcn7XK0uOiLo8VAjH0SVTDDg2lnkBU=w522-h220-no?authuser=1'],
  },
};
