import { render, screen } from '@testing-library/react';
import DetailingCard from '.';

describe('DetailingCard Component', () => {
  const mockProps = {
    selected: true,
    cet: 5.0,
    firstPayment: '2023-08-15',
    installmentAmount: 100,
    installments: 12,
    interestRate: 0.5,
    totalAmount: 1200,
  };

  it('renders without errors', () => {
    render(<DetailingCard {...mockProps} />);
    const card = screen.getByTestId('detailing-card');
    expect(card).toBeInTheDocument();
  });

  it('renders selected style when selected prop is true', () => {
    render(<DetailingCard {...mockProps} />);
    const card = screen.getByTestId('detailing-card');
    expect(card).toHaveStyle('border: 2px solid #9775fa');
    expect(card).toHaveStyle('box-shadow: 0px 7px 7px -5px rgba(112, 13, 255, 0.20)');
  });

  it('displays Radio component when selected prop is provided', () => {
    render(<DetailingCard {...mockProps} />);
    const radio = screen.getByRole('radio');
    expect(radio).toBeInTheDocument();
  });
});
