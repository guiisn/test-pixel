
import { render, screen, fireEvent } from '@testing-library/react';
import Switch from '.';

describe('Switch', () => {
  it('renders the MantineSwitch component with custom styles', () => {
    render(<Switch />);
    const switchElement = screen.getByRole('checkbox');

    expect(switchElement).toBeInTheDocument();
    expect(switchElement).toHaveStyle('border: 2px inset');
  });

  it('passes checked prop to the MantineSwitch', () => {
    render(<Switch checked />);
    const switchElement = screen.getByRole('checkbox');

    expect(switchElement).toBeInTheDocument();
  });

  it('calls onChange when the switch is clicked', () => {
    const mockOnChange = jest.fn();
    render(<Switch onChange={mockOnChange} />);
    const switchElement = screen.getByRole('checkbox');

    fireEvent.click(switchElement);

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});
