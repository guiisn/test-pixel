import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe } from 'vitest';
import vector from '@assets/svg/vector.svg';
import Carousel, { ICarousel } from '..';

function Component({ data }: ICarousel): JSX.Element {
  return (
    <MemoryRouter>
      <Carousel data={data} />
    </MemoryRouter>
  );
}

describe('Carousel', () => {
  it('Should appear on the page', async () => {
    const { getByTestId } = render(<Component />);

    expect(getByTestId('carousel')).toBeInTheDocument();
  });

  it('Should have a slide if the size of the image array is greater than 0', async () => {
    const { getByTestId } = render(<Component data={[vector]} />);

    expect(getByTestId('slide')).toBeInTheDocument();
  });

  it('Should not have a slide if the size of the image array is less than 0', async () => {
    const { queryByTestId } = render(<Component data={[]} />);

    expect(queryByTestId('slide')).not.toBeInTheDocument();
  });
});
