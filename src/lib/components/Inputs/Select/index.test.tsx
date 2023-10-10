import { render, screen } from '@testing-library/react';

import Select from '.';

describe('Select Component', () => {
  const mockOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const mockProps = {
    label: 'Select an option',
    data: mockOptions,
    value: 'option1',
    onChange: jest.fn(),
  };

  it('renders the Select component with provided props', () => {
    render(<Select {...mockProps} />);

    const selectInput = screen.getByLabelText('Select an option');
    expect(selectInput).toBeInTheDocument();
  });
});
