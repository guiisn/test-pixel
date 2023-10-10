import { render, screen } from '@testing-library/react';
import { Bell, ChevronLeft } from 'tabler-icons-react';
import AppShell from '.';
import { AppShellHeaderProps } from '../AppShelHeader';

describe('AppShell', () => {
  const mockNavbarProps = {
    navbarWidths: {
      md: 240,
      lg: 280,
      xl: 320,
      sm: 200,
      xs: 160,
    },
  };

  const mockHeaderProps: AppShellHeaderProps = {
    headerMarginLeft: {
      md: 20,
      lg: 30,
      xl: 40,
      sm: 10,
      xs: 5,
    },
    pageTitle: 'My Page',
    currentCompanyCardProps: {
      activeCompany: 'Sorridents (Setor Garavelo) Aparecida de Goiânia/GO',
    },
    notificationButtonProps: {
      children: <Bell />,
      tooltipTitle: 'Notifications',
    },
    returnButtonProps: {
      leftIcon: <ChevronLeft />,
    },
  };

  it('renders the AppShellNavbar and AppShellHeader with the specified props', () => {
    render(
      <AppShell
        navbarProps={mockNavbarProps}
        headerProps={mockHeaderProps}
      >
        <div>test</div>
      </AppShell>,
    );

    const navbarElement = screen.getByTestId('app-shell-navbar');
    const headerElement = screen.getByTestId('app-shell-header');

    expect(navbarElement).toBeInTheDocument();
    expect(headerElement).toBeInTheDocument();
  });

  it('renders the children when provided', () => {
    render(
      <AppShell
        navbarProps={mockNavbarProps}
        headerProps={mockHeaderProps}
      >
        <div data-testid="test-children">Hello, world!</div>
      </AppShell>,
    );

    const childrenElement = screen.getByTestId('test-children');

    expect(childrenElement).toBeInTheDocument();
    expect(childrenElement).toHaveTextContent('Hello, world!');
  });
});
