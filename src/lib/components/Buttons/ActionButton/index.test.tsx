import { render, fireEvent } from '@testing-library/react';
import ActionButton, { ActionButtonProps } from '.';

describe('ActionButton', () => {
  const mockProps = {
    variant: 'thin',
    icon: <svg />,
    label: 'Test Button',
    onClick: jest.fn(),
  } as ActionButtonProps;

  it('renders the button with the provided label', () => {
    const { getByText } = render(<ActionButton {...mockProps} />);
    const buttonElement = getByText('Test Button');
    expect(buttonElement).toBeInTheDocument();
  });

  it('calls the onClick handler when clicked', () => {
    const { getByText } = render(<ActionButton {...mockProps} />);
    const buttonElement = getByText('Test Button');
    fireEvent.click(buttonElement);
    expect(mockProps.onClick).toHaveBeenCalledTimes(1);
  });
});
