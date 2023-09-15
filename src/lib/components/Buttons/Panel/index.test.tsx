// @ts-nocheck
import { fireEvent, render } from '@testing-library/react';
import PanelButton from '.';

describe('PanelButton', () => {
  it('Should render button with correct text', () => {
    const buttonText = 'Click me!';
    const { getByText } = render(<PanelButton text={buttonText} />);
    const buttonElement = getByText(buttonText);
    expect(buttonElement).toBeInTheDocument();
  });

  it('renders button with correct icon', () => {
    const { getByTestId } = render(<PanelButton icon={<div data-testid="test-icon" />} />);
    const iconElement = getByTestId('test-icon');
    expect(iconElement).toBeInTheDocument();
  });

  it('Should call onClick when button is clicked', () => {
    const mockOnClick = jest.fn();
    const { getByText } = render(<PanelButton text="Click me!" onClick={mockOnClick} />);
    const buttonElement = getByText('Click me!');

    fireEvent.click(buttonElement);

    expect(mockOnClick).toHaveBeenCalled();
  });
});
