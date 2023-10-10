import { render, screen } from '@testing-library/react';

import PasswordInput from '.';

describe('PasswordInput Component', () => {
  const mockProps = {
    label: 'Password',
    placeholder: 'Enter your password',
    value: '',
    onChange: jest.fn(),
  };

  it('renders the PasswordInput component with provided props', () => {
    render(<PasswordInput {...mockProps} />);

    const passwordInput = screen.getByLabelText('Password');
    expect(passwordInput).toBeInTheDocument();
  });
});
