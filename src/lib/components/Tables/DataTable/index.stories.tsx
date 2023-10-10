import { Meta, StoryObj } from '@storybook/react';
import DataTable, { DataTableProps } from '.';

export default {
  title: 'Components/Typography/DataTable',
  component: DataTable,
  tags: ['autodocs'],
  decorators: [
    (Story) => <div style={{ height: '20rem' }}>{Story()}</div>,
  ],
  argTypes: {
    isLoading: {
      options: [true, false],
      control: { type: 'inline-radio' },
    },
  },
} as Meta<DataTableProps>;

export const tableColumns = ['Element position', 'Element name', 'Symbol', 'Atomic mass'];

export const tableRows = [
  {
    position: 6, mass: 12.011, symbol: 'C', name: 'Carbon',
  },
  {
    position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen',
  },
  {
    position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium',
  },
  {
    position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium',
  },
  {
    position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium',
  },
];

export const Table: StoryObj<DataTableProps> = {
  args: {
    columns: tableColumns,
    rows: tableRows,
  },
};

export const TableWithoutData: StoryObj<DataTableProps> = {
  args: {
    columns: tableColumns,
    rows: [],
  },
};

export const TableLoading: StoryObj<DataTableProps> = {
  args: {
    columns: tableColumns,
    rows: [],
    isLoading: true,
  },
};

export const TableWithPagination: StoryObj<DataTableProps> = {
  args: {
    columns: tableColumns,
    rows: tableRows,
    paginationProps: {
      totalPages: 2,
      onPageChange: () => console.log('page changed'),
    },
  },
};
