import { render, screen } from '@testing-library/react';
import NavLinkList from '.';
import { mockOptions } from '../AppShellNavbar/mock/permissions';

describe('NavLinkList', () => {
  it('renders navigation items with labels', () => {
    render(<NavLinkList options={mockOptions()} />);
    const navigationItems = screen.getAllByTestId('navigation-item');

    expect(navigationItems).toHaveLength(3);
    expect(navigationItems[0]).toHaveTextContent('Franchisors');
    expect(navigationItems[0]).toHaveTextContent('Franchisors');
    expect(navigationItems[1]).toHaveTextContent('Franchisees');
    expect(navigationItems[2]).toHaveTextContent('Units');
  });
});
