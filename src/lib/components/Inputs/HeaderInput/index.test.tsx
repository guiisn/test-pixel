import { fireEvent, render, screen } from '@testing-library/react';

import HeaderInput from '.';

describe('HeaderInput', () => {
  it('renders the TextInput component with custom styles', () => {
    render(<HeaderInput placeholder="Search" />);
    const inputElement = screen.getByPlaceholderText('Search');

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveStyle('border: 2px solid #9775fa');
    expect(inputElement).toHaveStyle('borderRadius: 68px');
  });

  it('renders the Search icon within the TextInput component', () => {
    render(<HeaderInput placeholder="Search" />);
    const searchIcon = screen.getByTestId('search-icon');

    expect(searchIcon).toBeInTheDocument();
  });

  it('passes the placeholder prop to the TextInput', () => {
    render(<HeaderInput placeholder="Type here..." />);
    const inputElement = screen.getByPlaceholderText('Type here...');
    expect(inputElement).toBeInTheDocument();
  });

  it('calls onChange when input value changes', () => {
    const mockOnChange = jest.fn();
    render(<HeaderInput placeholder="Search" onChange={mockOnChange} />);
    const inputElement = screen.getByPlaceholderText('Search');

    fireEvent.change(inputElement, { target: { value: 'test input' } });

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});
