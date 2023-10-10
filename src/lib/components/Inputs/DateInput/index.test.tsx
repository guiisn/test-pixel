import { render, screen, fireEvent } from '@testing-library/react';
import DateInput from '.';

const handleChange = jest.fn();

describe('DateInput Component', () => {
  it('renders the DateInput component with default format and locale', () => {
    render(<DateInput value={new Date()} onChange={handleChange} />);

    const dateInput = screen.getByRole('textbox');
    expect(dateInput).toBeInTheDocument();
  });

  it('renders the DateInput component with custom format', () => {
    render(<DateInput value={new Date()} valueFormat="YYYY-MM-DD" onChange={handleChange} />);

    const dateInput = screen.getByRole('textbox');
    expect(dateInput).toBeInTheDocument();
  });

  it('calls the onChange function when a new date is selected', () => {
    render(<DateInput value={new Date()} onChange={handleChange} />);

    const dateInput = screen.getByRole('textbox');

    fireEvent.click(dateInput);

    const dayButton = screen.getByText('15');
    fireEvent.click(dayButton);

    expect(handleChange).toHaveBeenCalled();
  });
});
