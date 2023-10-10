import { render } from '@testing-library/react';
import DataTable from '.';

describe('DataTable', () => {
  const mockColumns = ['Column 1', 'Column 2', 'Column 3'];
  const mockRows = [
    {
      key: 1, 'Column 1': 'Value 1', 'Column 2': 'Value 2', 'Column 3': 'Value 3',
    },
    {
      key: 2, 'Column 1': 'Value 4', 'Column 2': 'Value 5', 'Column 3': 'Value 6',
    },
  ];

  it('Should render columns and rows correctly', () => {
    const { getByText } = render(<DataTable columns={mockColumns} rows={mockRows} />);

    mockColumns.forEach((column) => {
      const columnElement = getByText(column);
      expect(columnElement).toBeInTheDocument();
    });

    mockRows.forEach((row) => {
      Object.values(row).forEach((value) => {
        const valueElement = getByText(value.toString());
        expect(valueElement).toBeInTheDocument();
      });
    });
  });
});
