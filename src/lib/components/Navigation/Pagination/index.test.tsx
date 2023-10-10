import { render } from '@testing-library/react';
import TablePagination from '.';

describe('TablePagination', () => {
  it('Should render Pagination component with correct props', () => {
    const mockOnChange = jest.fn();
    const mockTotal = 10;

    const { getByTestId } = render(<TablePagination onChange={mockOnChange} total={mockTotal} />);
    const paginationContainer = getByTestId('paginationContainer');
    expect(paginationContainer).toBeInTheDocument();

    const paginationElement = getByTestId('pagination-element');
    expect(paginationElement).toBeInTheDocument();
  });
});
