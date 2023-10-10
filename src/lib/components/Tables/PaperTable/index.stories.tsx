import { Paper } from '@mantine/core';
import { Meta, StoryObj } from '@storybook/react';
import PaperTable, { PaperTableProps } from '.';
import { laraPurple } from '../../../../styles/colors';

export default {
  title: 'Components/Typography/PaperTable',
  component: PaperTable,
  tags: ['autodocs'],
  decorators: [
    (Story) => <Paper shadow="xl" radius="xl" p="2rem">{Story()}</Paper>,
  ],
  argTypes: {
    isLoading: {
      options: [true, false],
      control: { type: 'inline-radio' },
    },
  },
} as Meta<PaperTableProps>;

export const Table: StoryObj<PaperTableProps> = {
  args: {
    tableTitle: 'Table title',
    tableTitleColor: laraPurple[4],
    header: [
      {
        label: 'Company',
        value: 'company',
      },
      {
        label: 'States',
        value: 'states',
      },
      {
        label: 'Cities',
        value: 'cities',
      },
      {
        label: 'Website',
        value: 'website',
      },
    ],
    body: [
      {
        company: 'Lara',
        states: '16',
        cities: '40',
        website: 'https://parceladolara.com.br/',
      },
    ],
  },
};
