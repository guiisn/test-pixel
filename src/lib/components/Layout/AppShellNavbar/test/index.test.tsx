import { render, screen } from '@testing-library/react';
import AppShellNavbar from '..';

describe('AppShellNavbar', () => {
  const navbarWidths = {
    md: 800,
    lg: 1000,
    xl: 1200,
    sm: 600,
    xs: 400,
  };
  it('renders the Navbar component with the specified navbarWidths', () => {
    render(<AppShellNavbar navbarWidths={navbarWidths} />);
    const navbarElement = screen.getByTestId('app-shell-navbar');

    expect(navbarElement).toBeInTheDocument();
    expect(navbarElement).toHaveStyle('width: 100%');
  });

  it('renders the logo in the Navbar', () => {
    render(<AppShellNavbar navbarWidths={navbarWidths} />);
    const logoElement = screen.getByAltText('LARA');

    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveStyle('width: 9rem');
  });

  it('renders the options and footer sections if provided', () => {
    const mockOptions = <div data-testid="mock-options">Options</div>;
    const mockFooter = <div data-testid="mock-footer">Footer</div>;
    render(
      <AppShellNavbar
        navbarWidths={navbarWidths}
        options={mockOptions}
        footer={mockFooter}
      />,
    );

    const optionsElement = screen.getByTestId('mock-options');
    const footerElement = screen.getByTestId('mock-footer');

    expect(optionsElement).toBeInTheDocument();
    expect(footerElement).toBeInTheDocument();
  });
});
