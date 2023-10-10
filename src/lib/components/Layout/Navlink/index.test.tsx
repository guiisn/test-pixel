import { fireEvent, render, screen } from '@testing-library/react';
import NavLink from '.';

describe('NavLink', () => {
  it('renders the MantineNavLink component with default props', () => {
    render(<NavLink label="Home" />);
    const navLinkElement = screen.getByRole('button');

    expect(navLinkElement).toBeInTheDocument();
    expect(navLinkElement).toHaveTextContent('Home');
  });

  it('calls onClick when the link is clicked', () => {
    const mockOnClick = jest.fn();
    render(<NavLink label="Home" onClick={mockOnClick} />);
    const navLinkElement = screen.getByRole('button');

    fireEvent.click(navLinkElement);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
