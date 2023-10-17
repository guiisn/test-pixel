import { render } from '@testing-library/react';
import CircleCheck, { CircleCheckProps } from '.';

function Component({ color, mode }: CircleCheckProps): JSX.Element {
  return (
    <CircleCheck c={color} mode={mode} />
  );
}

describe('CircleCheck', () => {
  it('Should appear on the page', async () => {
    const { getByTestId } = render(<Component />);

    expect(getByTestId('circleCheck')).toBeInTheDocument();
  });

  it('Should show the success component if mode is "success"', () => {
    const { getByTestId, queryByTestId } = render(<Component mode="SUCCESS" />);

    expect(getByTestId('success')).toBeInTheDocument();
    expect(queryByTestId('error')).not.toBeInTheDocument();
  });

  it('Should not show the success component if mode is "success"', () => {
    const { getByTestId, queryByTestId } = render(<Component mode="ERROR" />);

    expect(queryByTestId('success')).not.toBeInTheDocument();
    expect(getByTestId('error')).toBeInTheDocument();
  });
});
