import { Meta, StoryObj } from '@storybook/react';

import CurrentCompanyCard from '.';

export default {
  title: 'Components/Data Display/CurrentCompanyCard',
  component: CurrentCompanyCard,
  tags: ['autodocs'],
  decorators: [
    (Story) => <div style={{ height: '20rem' }}>{Story()}</div>,
  ],
} as Meta<typeof CurrentCompanyCard>;

export const Component: StoryObj<typeof CurrentCompanyCard> = {
};
