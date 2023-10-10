import { render, screen } from '@testing-library/react';
import Breadcrumbs from '.';

describe('Breadcrumbs Component', () => {
  it('renders the correct number of breadcrumbs', () => {
    const items = [
      { title: 'Home', href: '/' },
      { title: 'Products', href: '/products' },
      { title: 'Category', href: '/products/category' },
    ];

    render(<Breadcrumbs items={items} />);

    items.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });

  it('renders the correct breadcrumb titles and href attributes', () => {
    const items = [
      { title: 'Page 1', href: '/page-1' },
      { title: 'Page 2', href: '/page-2' },
    ];

    render(<Breadcrumbs items={items} />);

    items.forEach((item) => {
      const breadcrumb = screen.getByText(item.title);
      expect(breadcrumb).toBeInTheDocument();
      expect(breadcrumb.closest('a')).toHaveAttribute('href', item.href);
    });
  });

  // Add more test cases as needed to cover various scenarios
});
