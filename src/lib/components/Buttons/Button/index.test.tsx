// @ts-nocheck
import { render, fireEvent } from '@testing-library/react';
import Button from '.';

describe('Button', () => {
  it('Should render with the correct label', () => {
    const { getByText } = render(<Button>Click Me</Button>);
    const buttonElement = getByText('Click Me');
    expect(buttonElement).toBeInTheDocument();
  });

  it('Should call onClick when clicked', () => {
    const mockOnClick = jest.fn();
    const { getByText } = render(<Button onClick={mockOnClick}>Click Me</Button>);
    const buttonElement = getByText('Click Me');

    fireEvent.click(buttonElement);

    expect(mockOnClick).toHaveBeenCalled();
  });
});
