// @ts-nocheck
import { fireEvent, render } from '@testing-library/react';
import IconButton from '.';

describe('IconButton', () => {
  it('Should render button with correct children', () => {
    const { getByText } = render(<IconButton tooltipTitle="Click me!">🚀</IconButton>);
    const iconElement = getByText('🚀');
    expect(iconElement).toBeInTheDocument();
  });

  it('Should call onClick when clicked', () => {
    const mockOnClick = jest.fn();
    const { getByText } = render(
      <IconButton tooltipTitle="Click me!" onClick={mockOnClick}>
        🚀
      </IconButton>,
    );
    const iconElement = getByText('🚀');

    fireEvent.click(iconElement);

    expect(mockOnClick).toHaveBeenCalled();
  });
});
