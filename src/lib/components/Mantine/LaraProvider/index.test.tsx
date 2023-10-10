import { render } from '@testing-library/react';
import LaraProvider from '.';

describe('LaraProvider', () => {
  it('Should render children correctly', () => {
    const { getByText } = render(
      <LaraProvider>
        <div>Child Content</div>
      </LaraProvider>,
    );
    const childElement = getByText('Child Content');
    expect(childElement).toBeInTheDocument();
  });
});
