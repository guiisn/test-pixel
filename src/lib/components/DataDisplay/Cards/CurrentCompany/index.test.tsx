import { fireEvent, render, screen } from '@testing-library/react';

import CurrentCompanyCard from '.';

describe('CurrentCompanyCard', () => {
  it('should render the component with an active company name', () => {
    render(<CurrentCompanyCard activeCompany="Empresa Ativa" />);

    expect(screen.getByText('Empresa Ativa')).toBeInTheDocument();
  });

  it('should render component with text "-" when there is no company name active', () => {
    render(<CurrentCompanyCard />);

    expect(screen.getByText('-')).toBeInTheDocument();
  });

  it('must call the callback function when the button is clicked', () => {
    const mockCallback = jest.fn();
    render(<CurrentCompanyCard onCardClick={mockCallback} />);

    fireEvent.click(screen.getByRole('button'));

    expect(mockCallback).toHaveBeenCalled();
  });
});
