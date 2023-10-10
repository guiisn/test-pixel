import { fireEvent, render, screen } from '@testing-library/react';
import ProfileMenu from '.';

describe('ProfileMenu Component', () => {
  const mockProps = {
    userName: 'John Doe',
    userEmail: 'john@example.com',
    userLogin: 'johndoe',
    userRole: 'Admin',
    franchisee: 'Franchisee Name',
    franchisor: 'Franchisor Name',
    unit: 'Unit Name',
    onCloseMenu: jest.fn(),
    onChangePassword: jest.fn(),
    onLogout: jest.fn(),
    onChangeFranchisor: jest.fn(),
    profile: 'https://lh3.googleusercontent.com/pw/AIL4fc9W2OxxoJgGEIBil7KiX2nWcbGefVOz1htr1K59jdC7Bh5EDWZnPkpuuYNte4RO_A04HtCXImPK87JydQYhggZVgiOafTSxci6wsC1jS0d3wXGRPQBtdtDyigyY8ZnCfLBPdobqfeTgZhBQ2OC_TyE=w45-h54-s-no?authuser=0',
  };

  beforeEach(() => render(<ProfileMenu {...mockProps} />));

  it('renders profile information correctly', () => {
    const profileButton = screen.getByTestId('profile-button');
    fireEvent.mouseEnter(profileButton);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Admin')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
    expect(screen.getByText('johndoe')).toBeInTheDocument();
    expect(screen.getByText('Franchisee Name')).toBeInTheDocument();
    expect(screen.getByText('Franchisor Name')).toBeInTheDocument();
    expect(screen.getByText('Unit Name')).toBeInTheDocument();
  });

  it('calls the onChangePassword function when "Alterar senha" button is clicked', () => {
    const profileButton = screen.getByTestId('profile-button');
    fireEvent.mouseEnter(profileButton);

    const changePasswordButton = screen.getByText('Alterar senha');
    fireEvent.click(changePasswordButton);

    expect(mockProps.onChangePassword).toHaveBeenCalled();
  });

  it('calls the onChangePassword function when "Alterar franquia" button is clicked', () => {
    const profileButton = screen.getByTestId('profile-button');
    fireEvent.mouseEnter(profileButton);

    const changePasswordButton = screen.getByText('Alterar franquia');
    fireEvent.click(changePasswordButton);

    expect(mockProps.onChangePassword).toHaveBeenCalled();
  });

  it('calls the onChangePassword function when "Logout" button is clicked', () => {
    const profileButton = screen.getByTestId('profile-button');
    fireEvent.mouseEnter(profileButton);

    const changePasswordButton = screen.getByText('Logout');
    fireEvent.click(changePasswordButton);

    expect(mockProps.onChangePassword).toHaveBeenCalled();
  });
});
