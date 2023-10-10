import { render, screen } from '@testing-library/react';
import InfoBox from '.';

describe('InfoBox Component', () => {
  const mockProps = {
    icon: <div data-testid="mock-icon" />,
    label: 'Info Label',
    value: '42',
    total: 100,
  };

  it('renders without errors', () => {
    render(<InfoBox {...mockProps} />);
    const infoBox = screen.getByRole('cell');
    expect(infoBox).toBeInTheDocument();
  });

  it('displays the icon and label', () => {
    render(<InfoBox {...mockProps} />);
    const icon = screen.getByTestId('mock-icon');
    const label = screen.getByText('Info Label:');
    expect(icon).toBeInTheDocument();
    expect(label).toBeInTheDocument();
  });

  it('displays the value', () => {
    render(<InfoBox {...mockProps} />);
    const value = screen.getByTestId('value');
    expect(value).toHaveTextContent('42');
  });

  it('displays the total', () => {
    render(<InfoBox {...mockProps} />);
    const total = screen.getByTestId('total');
    expect(total).toHaveTextContent('100');
  });

  it('does not display "/" if value or total is missing', () => {
    render(<InfoBox {...mockProps} value={undefined} />);
    const separator = screen.queryByText('/');
    expect(separator).not.toBeInTheDocument();
  });

  it('does not display total if it is missing', () => {
    render(<InfoBox {...mockProps} total={undefined} />);
    const total = screen.queryByTestId('total');
    expect(total).not.toBeInTheDocument();
  });
});
