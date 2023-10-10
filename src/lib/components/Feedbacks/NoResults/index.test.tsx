import { render } from '@testing-library/react';
import NoResults from '.';

describe('NoResults', () => {
  it('Should render component with correct text', () => {
    const { getByText } = render(<NoResults />);
    const textElement = getByText('Nenhum resultado encontrado!');
    expect(textElement).toBeInTheDocument();
  });

  it('Should render component with icon', () => {
    const { getByTestId } = render(<NoResults />);
    const iconElement = getByTestId('noResultsContainer').querySelector('svg');
    expect(iconElement).toBeInTheDocument();
  });
});
