import { render, screen } from '@testing-library/react';

import Textarea from '.';

describe('Textarea Component', () => {
  const mockProps = {
    label: 'Textarea Label',
    placeholder: 'Enter your text',
    value: '',
    onChange: jest.fn(),
  };

  it('renders the Textarea component with provided props', () => {
    render(<Textarea {...mockProps} />);

    const textarea = screen.getByLabelText('Textarea Label');
    expect(textarea).toBeInTheDocument();
  });
});
