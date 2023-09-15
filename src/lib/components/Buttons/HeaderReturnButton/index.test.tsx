
import { render, fireEvent } from '@testing-library/react';
import HeaderReturnButton from '.';

describe('HeaderReturnButton', () => {
  it('renders the button with children and leftIcon', () => {
    const { getByText, getByTestId } = render(
      <HeaderReturnButton leftIcon={<div data-testid="left-icon">🔙</div>}>
        Go Back
      </HeaderReturnButton>,
    );

    const button = getByText('Go Back');
    const leftIcon = getByTestId('left-icon');

    expect(button).toBeInTheDocument();
    expect(leftIcon).toBeInTheDocument();
  });

  it('calls onClick when the button is clicked', () => {
    const mockOnClick = jest.fn();
    const { getByText } = render(
      <HeaderReturnButton onClick={mockOnClick}>Go Back</HeaderReturnButton>,
    );

    const button = getByText('Go Back');
    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalled();
  });

  it('applies hover styles when hovered', () => {
    const { getByText } = render(<HeaderReturnButton>Go Back</HeaderReturnButton>);
    const button = getByText('Go Back');

    fireEvent.mouseEnter(button);

    expect(button).toHaveStyle('color: rgb(121, 80, 242)');
    expect(button).toHaveStyle('transform: scale(1.03)');
  });
});
