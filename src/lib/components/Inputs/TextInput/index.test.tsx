import { render, screen } from '@testing-library/react';

import TextInput from '.';

describe('TextInput Component', () => {
  const mockProps = {
    label: 'Name',
    placeholder: 'Enter your name',
    value: '',
    onChange: jest.fn(),
  };

  it('renders the TextInput component with provided props', () => {
    render(<TextInput {...mockProps} />);

    const textInput = screen.getByLabelText('Name');
    expect(textInput).toBeInTheDocument();
  });
});
